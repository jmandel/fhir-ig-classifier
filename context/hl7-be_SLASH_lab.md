File: repos/hl7-be_SLASH_lab/sushi-config.yaml

# ╭─────────────────────────────────ImplementationGuide-fish.json──────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource.                     │
# │  For a list of supported properties, see:                                                      │
# │  https://fshschool.org/docs/sushi/configuration/#full-configuration                            │
# │  SUSHI will use id as both id and packageId in the IG unless a                                 │
# │  specific packageId is also provided in this file.                                             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯


id: hl7.fhir.be.lab
canonical: https://www.ehealth.fgov.be/standards/fhir/lab
url: https://www.ehealth.fgov.be/standards/fhir/lab
name: Laboratory
title: "HL7 BE Laboratory WG Implementation Guide"
description: HL7 BE Laboratory WG Implementation Guide
status: draft
license: CC0-1.0
date: 2022-09-09
version: 1.0.1
fmm: 1

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
releaseLabel: STU

# The publisher can be a single item or a list, each with a name and
# optional url and/or email. The first publisher's name will be used
# as IG.publisher.  The contact details and/or additional publishers
# will be translated into IG.contact values.
publisher:
  name: eHealth Platform
  url: https://www.ehealth.fgov.be

# ContactDetail is required by the template.
contact:
  - name: eHealth Platform
    telecom:
      - system: email
        value: support@be-ehealth-standards.atlassian.net
        use: work

# The jurisdiction can be a single item or a list. The FHIR Shorthand
# code syntax can be used here.

jurisdiction: urn:iso:std:iso:3166#BE "Belgium"
#jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#056 "Belgium"


# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for `uri` and `version`.
#dependencies:
#  hl7.fhir.us.core: 3.1.0
#  hl7.fhir.us.mcode:
#    id: mcode
#    uri: http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode
#    version: 1.0.0


dependencies:
  hl7.fhir.be.core: 2.0.0
  hl7.fhir.be.core-clinical: 1.0.0

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

groups:
#  logicalmodels:
#    name: Logical Models
#    description: The Logical Data Models.  These are common, functional data descriptions which can be implemented in and mapped to KMEHR, CDA, HL7 v2 and FHIR technical implementations.
#    resources:
#  sc:
#    name: Supporting Conformance Resources
#    description: Supporting conformance resources used in this IG.
#    resources:
  exl:
    name: Laboratory Report examples
    description: Specific examples made for the Belgian laboratory report.
    resources:
      - Bundle/hematologyStudiesAsFHIRDocument
      - Bundle/antibiogramAsBundleNN
      - Bundle/antibiogramIsNegativeAsBundleCollection
      - Observation/obsDynamicHead
      - Observation/obsCreat

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
#pages:
#  index.md:
#    title: Example Home
#  implementation.xml:
#  examples.xml:
#    title: Examples Overview
#    simpleExamples.xml:
#    complexExamples.xml:


pages:
   index.xml:
     title: Laboratory IG Home Page
   changes.xml:
     title: Changes
   guidance.xml:
     title: Guidance
   visualisation.xml:
       title: Visualisation
   downloads.xml:
        title: Downloads

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
  Visualization: visualisation.html
  Artifacts:
    Profiles: artifacts.html#2
    Extensions: artifacts.html#3
    Value Sets: artifacts.html#4
  Changes: changes.html
  Downloads: downloads.html

# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array. For a
# partial list of allowed parameters see:
# https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#parameters:
#  excludettl: true
#  validation: [allow-any-extensions, no-broken-links]
parameters:
  propagate-status: true
  find-other-resources: true
  path-binary: input\cql
  shownav: 'true'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'  
  display-warnings: true


# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
FSHOnly: false

# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#applyExtensionMetadataToRoot: false



---

// File: input/extensions/readme.md

Empty file to keep the folder structure

---

// File: input/history/readme.md

Empty file to keep the folder structure

---

// File: input/images/readme.md

Empty file to keep the folder structure

---

// File: input/models/readme.md

Empty file to keep the folder structure

---

// File: input/resources/readme.md

Empty file to keep the folder structure

---

// File: input/scenarios/readme.md

Empty file to keep the folder structure

---

// File: input/transactions/readme.md

Empty file to keep the folder structure

---

// File: input/fsh/aliases.fsh

Alias: $v2-0074 = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: $loinc = http://loinc.org
Alias: $sct = http://snomed.info/sct
Alias: $v3-ObservationInterpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $cd-hcparty = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty
Alias: $referencerange-meaning = http://terminology.hl7.org/CodeSystem/referencerange-meaning
Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm

---

// File: input/fsh/codesystems/Albert.fsh

CodeSystem: Albert
Id: albert
Title: "CodeSystem Albert"
Description: "This code system is to identify Albert code"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2020-09-25T13:06:43+02:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "support@be-ehealth-standards.atlassian.net"
* ^content = #fragment
* ^count = 1
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension[=].valueInteger = 1
* #26223 "Aldosterone (urine)"

---

// File: input/fsh/datatypes.fsh

// Data types

// Coded Annotation - introduces a codeable element as a category in the Annotation 

CodeSystem: BeCSCodedAnnotationTypes
Id: be-cs-coded-annotation-types
Title: "Coded Annotation Type Codes"
Description: "Code System for specific types of coded annotations"
* ^status = #active
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* ^caseSensitive = true
* ^content = #complete
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* #lab-test-accreditation "Laboratory Test Accreditation" "Test disclaimer with the report"
* #lab-test-subcontractor "Laboratory Test subcontractor" "Laboratory Test subcontractor"
* #lab-referencerange-comment "Comment on laboratory reference range" "Comment on reference range"


ValueSet: BeVSCodedAnnotationTypes
Id: be-vs-coded-annotation-types
Title: "Coded Annotation Types"
Description: "Value Set for specific types of coded annotations"
* ^status = #active
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* include codes from system be-cs-coded-annotation-types


Extension: BeExtAnnotationCode
Id: annotation-code
Title: "Annotation Code"
Description: "Codifies the content of an Annotation"
* ^context.type = #element
* ^context.expression = "Annotation"
* . ^short = "Annotation Code"
* . ^definition = "Codifies the content of an Annotation"
* value[x] only CodeableConcept
* value[x] from be-vs-coded-annotation-types (example)


Profile: BeCodedAnnotation
Parent: Annotation
Id: coded-annotation
Title: "Coded Annotation"
Description: "Annotation DataType with added CodeableConcept extension element"
* extension contains annotation-code named code 0..1
* text ^short = "The annotation - plain text without markdown is strongly recommended"



---

// File: input/fsh/extensions/BeExtNote.fsh

Extension: BeExtNote
Id: be-ext-note
Title: "BeExtNote"
Description: "BeExtNote"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1


* value[x] only Annotation

---

// File: input/fsh/instances/antibiogramAsBundleCollection.fsh

Instance: antibiogramAsBundleCollection
InstanceOf: Bundle
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:0c3151bd-1cbf-4d91-b04d-cd9187a4c6e0"
* type = #collection
* entry[0].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d34"
* entry[=].resource = ex01-diagnosticreport
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36"
* entry[=].resource = ex01-specimen50
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d37"
* entry[=].resource = ex01-org51
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae01-48abcadd8d38"
* entry[=].resource = ex01-org51-ampicilin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae02-48abcadd8d39"
* entry[=].resource = ex01-org51-trimethoprim-sulfamethoxazole
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae03-48abcadd8d40"
* entry[=].resource = ex01-org51-nitrofurantoin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae04-48abcadd8d41"
* entry[=].resource = ex01-org51-cefuroxime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae05-48abcadd8d42"
* entry[=].resource = ex01-org51-gentamicin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae06-48abcadd8d43"
* entry[=].resource = ex01-org51-colistin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae07-48abcadd8d44"
* entry[=].resource = ex01-org51-temocillin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae08-48abcadd8d45"
* entry[=].resource = ex01-org51-fosfomycin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d46"
* entry[=].resource = ex01-org51-levofloxacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d47"
* entry[=].resource = ex01-org51-ofloxacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d48"
* entry[=].resource = ex01-org51-amoxicillin-clavulanate
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d49"
* entry[=].resource = ex01-org51-amikacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d50"
* entry[=].resource = ex01-org51-piperacillin-tazobactam
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d51"
* entry[=].resource = ex01-org51-ceftriaxone
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d52"
* entry[=].resource = ex01-org51-cefotaxime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d53"
* entry[=].resource = ex01-org51-ceftazidime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d54"
* entry[=].resource = ex01-org51-meropenem
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d55"
* entry[=].resource = ex01-org52
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae01-48abcadd8d56"
* entry[=].resource = ex01-org52-ampicilin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae02-48abcadd8d57"
* entry[=].resource = ex01-org52-trimethoprim-sulfamethoxazole
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae03-48abcadd8d58"
* entry[=].resource = ex01-org52-nitrofurantoin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae04-48abcadd8d59"
* entry[=].resource = ex01-org52-cefuroxime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae05-48abcadd8d60"
* entry[=].resource = ex01-org52-gentamicin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae06-48abcadd8d61"
* entry[=].resource = ex01-org52-colistin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae07-48abcadd8d62"
* entry[=].resource = ex01-org52-temocillin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae08-48abcadd8d63"
* entry[=].resource = ex01-org52-fosfomycin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d64"
* entry[=].resource = ex01-org52-levofloxacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d65"
* entry[=].resource = ex01-org52-ofloxacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d66"
* entry[=].resource = ex01-org52-amoxicillin-clavulanate
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d67"
* entry[=].resource = ex01-org52-amikacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d68"
* entry[=].resource = ex01-org52-piperacillin-tazobactam
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d69"
* entry[=].resource = ex01-org52-ceftriaxone
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d70"
* entry[=].resource = ex01-org52-cefotaxime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d71"
* entry[=].resource = ex01-org52-ceftazidime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d72"
* entry[=].resource = ex01-org52-meropenem
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d80"
* entry[=].resource = ex01-dr50-mrsa
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d81"
* entry[=].resource = ex01-dr50-mrgn
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d72"
* entry[=].resource = ex01-organization10
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73"
* entry[=].resource = ex01-practitioner11
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74"
* entry[=].resource = ex01-patient1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d75"
* entry[=].resource = ex01-servicerequest50
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d76"
* entry[=].resource = ex01-practitioner1

Instance: ex01-diagnosticreport
InstanceOf: DiagnosticReport
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report"
* language = #en
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.system = "https://www.ehealth.fgov.be/lab-report/diagnostic-report-id"
* identifier.value = "11530231003.2015110413180000000"
* basedOn = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d75)
* status = #final
* category.coding[0] = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* category.coding[+] = http://terminology.hl7.org/CodeSystem/v2-0074#MB "Microbiology"
* code = http://loinc.org#18769-0 "Microbial susceptibility tests Set"
* code.text = "Microbial susceptibility tests"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-03T13:18:00+01:00"
* issued = "2015-11-04T13:18:00+01:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d72)
* resultsInterpreter = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)
* result[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d37)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d55)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d80)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d81)
* conclusion = "This is our conclusion"

Instance:  ex01-specimen50
InstanceOf: Specimen
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-specimen-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.system = "https://www.GTL-LABO.be/"
* identifier.value = "1"
* status = #available
* type = http://snomed.info/sct#258529004 "Throat swab"
* type.text = "A string can be added to nuance or explain."
* receivedTime = "2015-11-04"
* note.text = "Some extra relevant information concerning the specimen"

Instance:  ex01-org51
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#73960-7 "Bacteria identified in Mouth by Culture"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://snomed.info/sct#243301005 "Morganella morganii"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)
* hasMember[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae01-48abcadd8d38)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae02-48abcadd8d39)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae03-48abcadd8d40)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae04-48abcadd8d41)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae05-48abcadd8d42)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae06-48abcadd8d43)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae07-48abcadd8d44)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae08-48abcadd8d45)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d46)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d47)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d48)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d49)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d50)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d51)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d52)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d53)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d54)

Instance:  ex01-org51-ampicilin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#29-9 "Ampicillin [Susceptibility] by Disk diffusion (KB)"
* code.text = "Ampicillin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-C#R "Resistant"

Instance:  ex01-org51-trimethoprim-sulfamethoxazole
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#516-5 "Trimethoprim+Sulfamethoxazole [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Trimethoprim+Sulfamethoxazole"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-nitrofurantoin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#363-2 "Nitrofurantoin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Nitrofurantoin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"

Instance:  ex01-org51-cefuroxime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#51774-8 "Cefuroxime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Cefuroxime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"

Instance:  ex01-org51-gentamicin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#267-5 "Gentamicin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Gentamicin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-colistin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#205-5 "Colistin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Colistin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"

Instance:  ex01-org51-temocillin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#492-9 "Temocillin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Temocillin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-fosfomycin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#25653-7 "Fosfomycin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Fosfomycin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-levofloxacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#20396-8 "levoFLOXacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Levofloxacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-ofloxacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#375-6 "Ofloxacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ofloxacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-amoxicillin-clavulanate
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#20-8 "Amoxicillin+Clavulanate [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Amoxicillin+Clavulanate"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"

Instance:  ex01-org51-amikacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#12-5 "Amikacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Amikacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-piperacillin-tazobactam
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#412-7 "Piperacillin+Tazobactam [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Piperacillin+Tazobactam"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-ceftriaxone
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#141-2 "cefTRIAXone [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ceftriaxone"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-cefotaxime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#108-1 "Cefotaxime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Cefotaxime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-ceftazidime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#133-9 "cefTAZidime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ceftazidime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org51-meropenem
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#6652-2 "Meropenem [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Meropenem"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#73960-7 "Bacteria identified in Mouth by Culture"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://snomed.info/sct#112283007 "Escherichia coli"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)
* hasMember[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae01-48abcadd8d56)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae02-48abcadd8d57)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae03-48abcadd8d58)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae04-48abcadd8d59)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae05-48abcadd8d60)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae06-48abcadd8d61)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae07-48abcadd8d62)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae08-48abcadd8d63)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d64)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d65)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d66)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d67)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d68)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d69)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d70)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d71)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d72)

Instance:  ex01-org52-ampicilin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#29-9 "Ampicillin [Susceptibility] by Disk diffusion (KB)"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-trimethoprim-sulfamethoxazole
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#516-5 "Trimethoprim+Sulfamethoxazole [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Trimethoprim+Sulfamethoxazole"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-nitrofurantoin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#363-2 "Nitrofurantoin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Nitrofurantoin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-cefuroxime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#51774-8 "Cefuroxime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Cefuroxime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-gentamicin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#267-5 "Gentamicin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Gentamicin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-colistin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#205-5 "Colistin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Colistin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-temocillin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#492-9 "Temocillin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Temocillin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-fosfomycin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#25653-7 "Fosfomycin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Fosfomycin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-levofloxacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#20396-8 "levoFLOXacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Levofloxacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-ofloxacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#375-6 "Ofloxacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ofloxacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-amoxicillin-clavulanate
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#20-8 "Amoxicillin+Clavulanate [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Amoxicillin+Clavulanate"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-amikacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#12-5 "Amikacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Amikacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-piperacillin-tazobactam
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#412-7 "Piperacillin+Tazobactam [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Piperacillin+Tazobactam"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-ceftriaxone
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#141-2 "cefTRIAXone [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ceftriaxone"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-cefotaxime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#108-1 "Cefotaxime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Cefotaxime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-ceftazidime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#133-9 "cefTAZidime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ceftazidime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-org52-meropenem
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#6652-2 "Meropenem [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Meropenem"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance:  ex01-dr50-mrsa
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#35492-8 "Methicillin resistant Staphylococcus aureus (MRSA) DNA [Presence] in Unspecified specimen by NAA with probe detection"
* code.text = "MRSA"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueString = "negative"

Instance:  ex01-dr50-mrgn
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#78702-8 "Multiple drug resistant gram negative organism [Identifier] in Unspecified specimen by Culture"
* code.text = "MRGN"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueString = "negative"

Instance:  ex01-organization10
InstanceOf: Organization
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-organization"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.use = #official
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MD "Medical License number"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "81165343998"
* active = true
* type = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty#orglaboratory
* name = "GTL - General Testing Laboratory"
* telecom.system = #phone
* telecom.value = "322675199"
* telecom.use = #work
* address.extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address.extension.valueCode = #nl
* address.use = #work
* address.type = #both
* address.text = "Vulcansstraat 120, 1000 Brussel"
* address.line = "Vulcansstraat 120"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Vulcansstraat"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "120"
* address.city = "Brussel"
* address.postalCode = "1000"
* address.country = "BE"

Instance:  ex01-practitioner11
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "554488997"
* name.use = #official
* name.family = "Davoust"
* name.given = "Nicolas"
* telecom[0].system = #email
* telecom[=].value = "nicolas.davoust@gtl.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work

Instance:  ex01-patient1
InstanceOf: Patient
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier.value = "79121137740"
* active = true
* name.family = "La Paradisio"
* name.given[0] = "Josephine"
* name.given[+] = "Nessa"
* telecom[0].system = #email
* telecom[=].value = "nessa.laparadisio@belgium.be"
* telecom[+].system = #phone
* telecom[=].value = "+322476792979"
* telecom[=].use = #mobile
* telecom[+].system = #phone
* telecom[=].value = "+3226718655"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "+322476799"
* telecom[=].use = #work
* gender = #female
* birthDate.extension.url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
* birthDate.extension.valueDateTime = "1979-12-11T13:28:17-05:00"
* birthDate = "1979-12-11"
* address.use = #home
* address.type = #both
* address.text = "Sloordelle 42, 1160 Oudergem"
* address.line = "Sloordelle 42"
* address.city = "Oudergem"
* address.postalCode = "1160"
* address.country = "BE"

Instance:  ex01-servicerequest50
InstanceOf: ServiceRequest
Usage: #inline
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.system = "https://www.GTL-LABO.be/orderingsystem"
* identifier.value = "12334546"
* status = #active
* intent = #order
* category = http://snomed.info/sct#108252007 "Laboratory procedure"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* authoredOn = "2015-11-01T14:41:00+01:00"
* requester = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d76)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)

Instance:  ex01-practitioner1
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "18749704477"
* name.use = #official
* name.family = "Pulaski"
* name.given = "Katherine"
* name.suffix = "MD"
* telecom[0].system = #email
* telecom[=].value = "katherine.pulaski@enterprisehospital.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work
* address.use = #home
* address.text = "Jupiterlaan 5, 1853 Grimbergen"
* address.line = "Jupiterlaan 5"
* address.city = "Grimbergen"
* address.postalCode = "1853"
* address.country = "BE"

---

// File: input/fsh/instances/antibiogramAsBundleNN.fsh

Instance: antibiogramAsBundleNN
InstanceOf: Bundle
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:0c3151bd-1cbf-4d99-b04d-cd9187a4c6e0"
* type = #collection
* entry[0].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d34"
* entry[=].resource = diagnosticreport50
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36"
* entry[=].resource = specimen50
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d37"
* entry[=].resource = org51
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae01-48abcadd8d38"
* entry[=].resource = org51-ampicilin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae02-48abcadd8d39"
* entry[=].resource = org51-trimethoprim-sulfamethoxazole
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae03-48abcadd8d40"
* entry[=].resource = org51-nitrofurantoin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae04-48abcadd8d41"
* entry[=].resource = org51-cefuroxime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae05-48abcadd8d42"
* entry[=].resource = org51-gentamicin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae06-48abcadd8d43"
* entry[=].resource = org51-colistin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae07-48abcadd8d44"
* entry[=].resource = org51-temocillin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae08-48abcadd8d45"
* entry[=].resource = org51-fosfomycin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d46"
* entry[=].resource = org51-levofloxacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d47"
* entry[=].resource = org51-ofloxacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d48"
* entry[=].resource = org51-amoxicillin-clavulanate
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d49"
* entry[=].resource = org51-amikacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d50"
* entry[=].resource = org51-piperacillin-tazobactam
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d51"
* entry[=].resource = org51-ceftriaxone
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d52"
* entry[=].resource = org51-cefotaxime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d53"
* entry[=].resource = org51-ceftazidime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d54"
* entry[=].resource = org51-meropenem
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d55"
* entry[=].resource = org52
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae01-48abcadd8d56"
* entry[=].resource = org52-ampicilin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae02-48abcadd8d57"
* entry[=].resource = org52-trimethoprim-sulfamethoxazole
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae03-48abcadd8d58"
* entry[=].resource = org52-nitrofurantoin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae04-48abcadd8d59"
* entry[=].resource = org52-cefuroxime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae05-48abcadd8d60"
* entry[=].resource = org52-gentamicin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae06-48abcadd8d61"
* entry[=].resource = org52-colistin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae07-48abcadd8d62"
* entry[=].resource = org52-temocillin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae08-48abcadd8d63"
* entry[=].resource = org52-fosfomycin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d64"
* entry[=].resource = org52-levofloxacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d65"
* entry[=].resource = org52-ofloxacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d66"
* entry[=].resource = org52-amoxicillin-clavulanate
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d67"
* entry[=].resource = org52-amikacin
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d68"
* entry[=].resource = org52-piperacillin-tazobactam
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d69"
* entry[=].resource = org52-ceftriaxone
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d70"
* entry[=].resource = org52-cefotaxime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d71"
* entry[=].resource = org52-ceftazidime
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d72"
* entry[=].resource = org52-meropenem
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d80"
* entry[=].resource = dr50-mrsa
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d81"
* entry[=].resource = dr50-mrgn
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d72"
* entry[=].resource = organization10
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73"
* entry[=].resource = practitioner11
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74"
* entry[=].resource = patient1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d75"
* entry[=].resource = servicerequest50
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d76"
* entry[=].resource = practitioner1

Instance: diagnosticreport50
InstanceOf: DiagnosticReport
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report"
* language = #en
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.system = "https://www.ehealth.fgov.be/lab-report/diagnostic-report-id"
* identifier.value = "11530231003.2015110413180000000"
* basedOn = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d75)
* status = #final
* category.coding[0] = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* category.coding[+] = http://terminology.hl7.org/CodeSystem/v2-0074#MB "Microbiology"
* code = http://loinc.org#18769-0 "Microbial susceptibility tests Set"
* code.text = "Microbial susceptibility tests"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-03T13:18:00+01:00"
* issued = "2015-11-04T13:18:00+01:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d72)
* resultsInterpreter = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)
* result[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d37)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d55)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d80)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d81)
* conclusion = "This is our conclusion"

Instance: specimen50
InstanceOf: Specimen
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-specimen-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.system = "https://www.GTL-LABO.be/"
* identifier.value = "1"
* status = #available
* type = http://snomed.info/sct#258529004 "Throat swab"
* type.text = "A string can be added to nuance or explain."
* receivedTime = "2015-11-04"
* note.text = "Some extra relevant information concerning the specimen"

Instance: org51
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#73960-7 "Bacteria identified in Mouth by Culture"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://snomed.info/sct#243301005 "Morganella morganii"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)
* hasMember[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae01-48abcadd8d38)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae02-48abcadd8d39)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae03-48abcadd8d40)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae04-48abcadd8d41)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae05-48abcadd8d42)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae06-48abcadd8d43)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae07-48abcadd8d44)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae08-48abcadd8d45)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d46)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d47)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d48)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d49)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d50)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d51)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d52)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d53)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d54)

Instance: org51-ampicilin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#29-9 "Ampicillin [Susceptibility] by Disk diffusion (KB)"
* code.text = "Ampicillin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"

Instance: org51-trimethoprim-sulfamethoxazole
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#516-5 "Trimethoprim+Sulfamethoxazole [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Trimethoprim+Sulfamethoxazole"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-nitrofurantoin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#363-2 "Nitrofurantoin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Nitrofurantoin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"

Instance: org51-cefuroxime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#51774-8 "Cefuroxime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Cefuroxime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"

Instance: org51-gentamicin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#267-5 "Gentamicin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Gentamicin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-colistin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#205-5 "Colistin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Colistin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"

Instance: org51-temocillin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#492-9 "Temocillin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Temocillin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-fosfomycin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#25653-7 "Fosfomycin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Fosfomycin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-levofloxacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#20396-8 "levoFLOXacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Levofloxacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-ofloxacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#375-6 "Ofloxacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ofloxacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-amoxicillin-clavulanate
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#20-8 "Amoxicillin+Clavulanate [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Amoxicillin+Clavulanate"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#R "Resistant"

Instance: org51-amikacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#12-5 "Amikacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Amikacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-piperacillin-tazobactam
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#412-7 "Piperacillin+Tazobactam [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Piperacillin+Tazobactam"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-ceftriaxone
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#141-2 "cefTRIAXone [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ceftriaxone"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-cefotaxime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#108-1 "Cefotaxime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Cefotaxime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-ceftazidime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#133-9 "cefTAZidime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ceftazidime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org51-meropenem
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#6652-2 "Meropenem [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Meropenem"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#73960-7 "Bacteria identified in Mouth by Culture"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://snomed.info/sct#112283007 "Escherichia coli"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)
* hasMember[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae01-48abcadd8d56)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae02-48abcadd8d57)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae03-48abcadd8d58)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae04-48abcadd8d59)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae05-48abcadd8d60)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae06-48abcadd8d61)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae07-48abcadd8d62)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae08-48abcadd8d63)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d64)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d65)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d66)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d67)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d68)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d69)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d70)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd8d71)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d72)

Instance: org52-ampicilin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#29-9 "Ampicillin [Susceptibility] by Disk diffusion (KB)"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-trimethoprim-sulfamethoxazole
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#516-5 "Trimethoprim+Sulfamethoxazole [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Trimethoprim+Sulfamethoxazole"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-nitrofurantoin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#363-2 "Nitrofurantoin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Nitrofurantoin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-cefuroxime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#51774-8 "Cefuroxime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Cefuroxime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-gentamicin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#267-5 "Gentamicin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Gentamicin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-colistin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#205-5 "Colistin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Colistin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-temocillin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#492-9 "Temocillin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Temocillin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-fosfomycin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#25653-7 "Fosfomycin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Fosfomycin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-levofloxacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#20396-8 "levoFLOXacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Levofloxacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-ofloxacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#375-6 "Ofloxacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ofloxacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-amoxicillin-clavulanate
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#20-8 "Amoxicillin+Clavulanate [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Amoxicillin+Clavulanate"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-amikacin
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#12-5 "Amikacin [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Amikacin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-piperacillin-tazobactam
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#412-7 "Piperacillin+Tazobactam [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Piperacillin+Tazobactam"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-ceftriaxone
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#141-2 "cefTRIAXone [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ceftriaxone"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-cefotaxime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#108-1 "Cefotaxime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Cefotaxime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-ceftazidime
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#133-9 "cefTAZidime [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Ceftazidime"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: org52-meropenem
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#6652-2 "Meropenem [Susceptibility] by Minimum inhibitory concentration (MIC)"
* code.text = "Meropenem"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#S "Susceptible"

Instance: dr50-mrsa
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#35492-8 "Methicillin resistant Staphylococcus aureus (MRSA) DNA [Presence] in Unspecified specimen by NAA with probe detection"
* code.text = "MRSA"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueString = "negative"

Instance: dr50-mrgn
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* status = #final
* code = http://loinc.org#78702-8 "Multiple drug resistant gram negative organism [Identifier] in Unspecified specimen by Culture"
* code.text = "MRGN"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueString = "negative"

Instance: organization10
InstanceOf: Organization
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-organization"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.use = #official
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MD "Medical License number"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "81165343998"
* active = true
* type = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty#orglaboratory
* name = "GTL - General Testing Laboratory"
* telecom.system = #phone
* telecom.value = "322675199"
* telecom.use = #work
* address.extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address.extension.valueCode = #nl
* address.use = #work
* address.type = #both
* address.text = "Vulcansstraat 120, 1000 Brussel"
* address.line = "Vulcansstraat 120"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Vulcansstraat"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "120"
* address.city = "Brussel"
* address.postalCode = "1000"
* address.country = "BE"

Instance: practitioner11
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "554488997"
* name.use = #official
* name.family = "Davoust"
* name.given = "Nicolas"
* telecom[0].system = #email
* telecom[=].value = "nicolas.davoust@gtl.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work

Instance: patient1
InstanceOf: Patient
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier.value = "79121137740"
* active = true
* name.family = "La Paradisio"
* name.given[0] = "Josephine"
* name.given[+] = "Nessa"
* telecom[0].system = #email
* telecom[=].value = "nessa.laparadisio@belgium.be"
* telecom[+].system = #phone
* telecom[=].value = "+322476792979"
* telecom[=].use = #mobile
* telecom[+].system = #phone
* telecom[=].value = "+3226718655"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "+322476799"
* telecom[=].use = #work
* gender = #female
* birthDate.extension.url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
* birthDate.extension.valueDateTime = "1979-12-11T13:28:17-05:00"
* birthDate = "1979-12-11"
* address.use = #home
* address.type = #both
* address.text = "Sloordelle 42, 1160 Oudergem"
* address.line = "Sloordelle 42"
* address.city = "Oudergem"
* address.postalCode = "1160"
* address.country = "BE"

Instance: servicerequest50
InstanceOf: ServiceRequest
Usage: #inline
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.system = "https://www.GTL-LABO.be/orderingsystem"
* identifier.value = "12334546"
* status = #active
* intent = #order
* category = http://snomed.info/sct#108252007 "Laboratory procedure"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* authoredOn = "2015-11-01T14:41:00+01:00"
* requester = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d76)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)

Instance: practitioner1
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                        empty\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "18749704477"
* name.use = #official
* name.family = "Pulaski"
* name.given = "Katherine"
* name.suffix = "MD"
* telecom[0].system = #email
* telecom[=].value = "katherine.pulaski@enterprisehospital.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work
* address.use = #home
* address.text = "Jupiterlaan 5, 1853 Grimbergen"
* address.line = "Jupiterlaan 5"
* address.city = "Grimbergen"
* address.postalCode = "1853"
* address.country = "BE"

---

// File: input/fsh/instances/antibiogramIsNegativeAsBundleCollection.fsh

Instance: antibiogramIsNegativeAsBundleCollection
InstanceOf: Bundle
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:0c3201bd-1cbf-4d64-b04d-cd9187a4c6e0"
* type = #collection
* entry[0].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d90"
* entry[=].resource = ex03-diagnosticreport60
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d91"
* entry[=].resource = ex03-specimen60
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d92"
* entry[=].resource = ex03-mac60
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d93"
* entry[=].resource = ex03-cult60
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d94"
* entry[=].resource = ex03-organization10
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d95"
* entry[=].resource = ex03-practitioner11
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d96"
* entry[=].resource = ex03-patient1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d97"
* entry[=].resource = ex03-servicerequest60
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d98"
* entry[=].resource = ex03-practitioner1

Instance:  ex03-diagnosticreport60
InstanceOf: DiagnosticReport
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report"
* language = #en
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.system = "https://www.ehealth.fgov.be/lab-report/diagnostic-report-id"
* identifier.value = "11530231003.2015110413180000000"
* basedOn = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d97)
* status = #final
* category.coding[0] = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* category.coding[+] = http://terminology.hl7.org/CodeSystem/v2-0074#MB "Microbiology"
* code = http://loinc.org#18769-0 "Microbial susceptibility tests Set"
* code.text = "Microbial susceptibility tests"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-03T13:18:00+01:00"
* issued = "2015-11-04T13:18:00+01:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d72)
* resultsInterpreter = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d91)
* result[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d92)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae09-48abcadd9d93)
* conclusion = "This is our conclusion"

Instance:  ex03-specimen60
InstanceOf: Specimen
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-specimen-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.system = "https://www.GTL-LABO.be/"
* identifier.value = "1"
* status = #available
* type = http://snomed.info/sct#119295008 "Aspirate"
* type.text = "A string can be added to nuance or explain."
* receivedTime = "2015-11-04"
* note.text = "Some extra relevant information concerning the specimen"

Instance:  ex03-mac60
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code = http://loinc.org#74574-5 "Macroscopic observation [Interpretation] in Unspecified specimen Narrative"
* code.text = "Macroscopic observation"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueString = "matig purulent"

Instance:  ex03-cult60
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code = http://loinc.org#43411-8 "Bacteria identified in Aspirate by Culture"
* code.text = "Culture"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueString = "Commensalen +-"

Instance:  ex03-organization10
InstanceOf: Organization
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-organization"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MD "Medical License number"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "81165343998"
* active = true
* type = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty#orglaboratory
* name = "GTL - General Testing Laboratory"
* telecom.system = #phone
* telecom.value = "322675199"
* telecom.use = #work
* address.extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address.extension.valueCode = #nl
* address.use = #work
* address.type = #both
* address.text = "Vulcansstraat 120, 1000 Brussel"
* address.line = "Vulcansstraat 120"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Vulcansstraat"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "120"
* address.city = "Brussel"
* address.postalCode = "1000"
* address.country = "BE"

Instance:  ex03-practitioner11
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "554488997"
* name.use = #official
* name.family = "Davoust"
* name.given = "Nicolas"
* telecom[0].system = #email
* telecom[=].value = "nicolas.davoust@gtl.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work

Instance:  ex03-patient1
InstanceOf: Patient
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier.value = "79121137740"
* active = true
* name.family = "La Paradisio"
* name.given[0] = "Josephine"
* name.given[+] = "Nessa"
* telecom[0].system = #email
* telecom[=].value = "nessa.laparadisio@belgium.be"
* telecom[+].system = #phone
* telecom[=].value = "+322476792979"
* telecom[=].use = #mobile
* telecom[+].system = #phone
* telecom[=].value = "+3226718655"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "+322476799"
* telecom[=].use = #work
* gender = #female
* birthDate.extension.url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
* birthDate.extension.valueDateTime = "1979-12-11T13:28:17-05:00"
* birthDate = "1979-12-11"
* address.use = #home
* address.type = #both
* address.text = "Sloordelle 42, 1160 Oudergem"
* address.line = "Sloordelle 42"
* address.city = "Oudergem"
* address.postalCode = "1160"
* address.country = "BE"

Instance:  ex03-servicerequest60
InstanceOf: ServiceRequest
Usage: #inline
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.system = "https://www.GTL-LABO.be/orderingsystem"
* identifier.value = "12334546"
* status = #active
* intent = #order
* category = http://snomed.info/sct#108252007 "Laboratory procedure"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* authoredOn = "2015-11-01T14:41:00+01:00"
* requester = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d76)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d91)

Instance:  ex03-practitioner1
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "18749704477"
* name.use = #official
* name.family = "Pulaski"
* name.given = "Katherine"
* name.suffix = "MD"
* telecom[0].system = #email
* telecom[=].value = "katherine.pulaski@enterprisehospital.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work
* address.use = #home
* address.text = "Jupiterlaan 5, 1853 Grimbergen"
* address.line = "Jupiterlaan 5"
* address.city = "Grimbergen"
* address.postalCode = "1853"
* address.country = "BE"

---

// File: input/fsh/instances/be-ns-belac.fsh

Instance: be-ns-belac
InstanceOf: NamingSystem
Title: "BELAC Accreditation"
Description: "BELAC Accreditation"
Usage: #definition
* name = "BeBELAC"
* status = #active
* kind = #identifier
* date = "2021-11-17"
* publisher = "HL7 Belgium"
* contact[0].name = "HL7 Belgium"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://hl7belgium.org"
* description = "BELAC Accreditation"
* jurisdiction = $m49.htm#056 "Belgium"
* uniqueId.type = #uri
* uniqueId.value = "https://economie.fgov.be/belac"
* uniqueId.preferred = true

---

// File: input/fsh/instances/be-ns-lab-report-bundle-id.fsh

Instance: be-ns-lab-report-bundle-id
InstanceOf: NamingSystem
Title: "Lab Report Bundle Id"
Description: "Unique Identifier for Lab Report Bundle"
Usage: #definition
* name = "BeLabReportBundleId"
* status = #active
* kind = #identifier
* date = "2021-11-17"
* publisher = "HL7 Belgium"
* contact[0].name = "HL7 Belgium"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://hl7belgium.org"
* description = "Unique Identifier for Lab Report Bundles"
* jurisdiction = $m49.htm#056 "Belgium"
* uniqueId[0].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/standards/fhir/lab/NamingSystem/be-ns-lab-report-bundle-id"
* uniqueId[+].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/lab-report/bundle-id"
* uniqueId[=].preferred = true

---

// File: input/fsh/instances/be-ns-lab-report-diagnostic-report-id.fsh

Instance: be-ns-lab-report-diagnostic-report-id
InstanceOf: NamingSystem
Title: "Lab Report Diagnostic Report Id"
Description: "Unique Identifier for Lab Report Diagnostic Reports"
Usage: #definition
* name = "BeLabReportDiagnosticReportId"
* status = #active
* kind = #identifier
* date = "2021-11-17"
* publisher = "HL7 Belgium"
* contact[0].name = "HL7 Belgium"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://hl7belgium.org"
* description = "Unique Identifier for Lab Report Diagnostic Report"
* jurisdiction = $m49.htm#056 "Belgium"
* uniqueId[0].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/standards/fhir/lab/NamingSystem/be-ns-lab-report-diagnostic-report-id"
* uniqueId[+].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/lab-report/diagnostic-report-id"
* uniqueId[=].preferred = true

---

// File: input/fsh/instances/be-ns-retam.fsh

Instance: be-ns-retam
InstanceOf: NamingSystem
Title: "Retam code (Belgian subset of LOINC + Albert Code)"
Description: "Retam code (Belgian subset of LOINC + Albert Code)"
Usage: #definition
* name = "BeRetam"
* status = #active
* kind = #identifier
* date = "2021-11-17"
* publisher = "HL7 Belgium"
* contact[0].name = "HL7 Belgium"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://hl7belgium.org"
* description = "Retam code (Belgian subset of LOINC + Albert Code) "
* jurisdiction = $m49.htm#056 "Belgium"
* uniqueId.type = #uri
* uniqueId.value = "https://www.ehealth.fgov.be/standards/kmehr/en/page/retam-exports"
* uniqueId.preferred = true

---

// File: input/fsh/instances/bundle-2-reports-2-patients.fsh

Instance: bundle-2-reports-2-patients
InstanceOf: Bundle
Usage: #example
* type = #collection
* timestamp = "2021-12-20T14:43:27Z"
* entry[0].fullUrl = "Bundle/0"
* entry[=].resource = Inline-Instance-for-bundle-2-reports-2-patients-1
* entry[+].fullUrl = "Bundle/1"
* entry[=].resource = Inline-Instance-for-bundle-2-reports-2-patients-2

Instance: Inline-Instance-for-bundle-2-reports-2-patients-1
InstanceOf: Bundle
Usage: #inline
* id = "0"
* identifier.system = "https://www.ehealth.fgov.be/lab-report/bundle-id"
* identifier.value = "81365677998.815333044.2"
* type = #document
* timestamp = "2021-12-20T14:43:27Z"
* entry[0].fullUrl = "Composition/815333044"
* entry[=].resource.resourceType = "Composition"
* entry[=].resource.id = "815333044"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report-composition"
* entry[=].resource.identifier.system = "http://www.macsys.be/hl7/Composition"
* entry[=].resource.identifier.value = "815333044"
* entry[=].resource.status = #final
* entry[=].resource.type = http://loinc.org#11502-2
* entry[=].resource.type.text = "Laboratory report"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.date = "2021-12-20T14:43:27+01:00"
* entry[=].resource.author.reference = "Practitioner/Responsible"
* entry[=].resource.title = "Laboratory Report"
* entry[=].resource.section.entry.reference = "DiagnosticReport/815333044"
* entry[+].fullUrl = "Specimen/002815333044"
* entry[=].resource.resourceType = "Specimen"
* entry[=].resource.id = "002815333044"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-specimen-laboratory"
* entry[=].resource.identifier.system = "http://www.macsys.be/hl7/Specimen"
* entry[=].resource.identifier.value = "002815333044"
* entry[=].resource.status = #available
* entry[=].resource.type = http://terminology.hl7.org/CodeSystem/v2-0487#BLDV "Blood venous"
* entry[=].resource.type.text = "EDTA-volbloed"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.receivedTime = "2021-11-04T13:15:49+01:00"
* entry[=].resource.collection.collector.reference = "Practitioner/69"
* entry[=].resource.collection.collectedDateTime = "2021-11-04T00:00:00+01:00"
* entry[+].fullUrl = "Specimen/001815333044"
* entry[=].resource.resourceType = "Specimen"
* entry[=].resource.id = "001815333044"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-specimen-laboratory"
* entry[=].resource.identifier.system = "http://www.macsys.be/hl7/Specimen"
* entry[=].resource.identifier.value = "001815333044"
* entry[=].resource.status = #available
* entry[=].resource.type = http://terminology.hl7.org/CodeSystem/v2-0487#SER "Serum"
* entry[=].resource.type.text = "Serum"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.receivedTime = "2021-11-04T13:15:49+01:00"
* entry[=].resource.collection.collector.reference = "Practitioner/69"
* entry[=].resource.collection.collectedDateTime = "2021-11-04T00:00:00+01:00"
* entry[+].fullUrl = "Observation/Observation-other.1.0.0.0"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.0.0.0"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code.text = "HEMATOLOGIE"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.hasMember[0].reference = "Observation/Observation-other.1.0.0.1"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.0.0.2"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.0.0.3"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.0.0.4"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.0.0.5"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.0.0.6"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.0.0.7"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.0.0.8"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.1.0.0"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.2.0.0"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.3.0.1"
* entry[+].fullUrl = "Observation/Observation-other.1.0.0.1"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.0.0.1"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#4537-7
* entry[=].resource.code.text = "Bezinking na 1 uur"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:16:35+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 10 'mm' "mm"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.high = 40 'mm' "mm"
* entry[+].fullUrl = "Observation/Observation-other.1.0.0.2"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.0.0.2"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#789-8
* entry[=].resource.code.text = "Erytrocyten"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:16:40+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 4.69 '10*6/uL' "10*6/uL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 4.35 '10*6/uL' "10*6/uL"
* entry[=].resource.referenceRange.high = 5.61 '10*6/uL' "10*6/uL"
* entry[+].fullUrl = "Observation/Observation-other.1.0.0.3"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.0.0.3"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#718-7
* entry[=].resource.code.text = "Hemoglobine"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:16:46+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 14.8 'g/dL' "g/dL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 13.4 'g/dL' "g/dL"
* entry[=].resource.referenceRange.high = 16.5 'g/dL' "g/dL"
* entry[+].fullUrl = "Observation/Observation-other.1.0.0.4"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.0.0.4"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#4544-3
* entry[=].resource.code.text = "Hematocriet"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:16:49+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 41 '%' "%"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 39.7 '%' "%"
* entry[=].resource.referenceRange.high = 49.3 '%' "%"
* entry[+].fullUrl = "Observation/Observation-other.1.0.0.5"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.0.0.5"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#787-2
* entry[=].resource.code.text = "MCV"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:16:54+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 90 'fL' "fL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 83.2 'fL' "fL"
* entry[=].resource.referenceRange.high = 96 'fL' "fL"
* entry[+].fullUrl = "Observation/Observation-other.1.0.0.6"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.0.0.6"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#785-6
* entry[=].resource.code.text = "MCH"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:16:59+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 31.6 'pg' "pg"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 27.8 'pg' "pg"
* entry[=].resource.referenceRange.high = 32.5 'pg' "pg"
* entry[+].fullUrl = "Observation/Observation-other.1.0.0.7"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.0.0.7"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#786-4
* entry[=].resource.code.text = "MCHC"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:06+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 34.9 'g/dL' "g/dL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 32.3 'g/dL' "g/dL"
* entry[=].resource.referenceRange.high = 35.7 'g/dL' "g/dL"
* entry[+].fullUrl = "Observation/Observation-other.1.0.0.8"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.0.0.8"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#6690-2
* entry[=].resource.code.text = "Leukocyten"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:11+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 3810 '/uL' "/uL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 3720 '/uL' "/uL"
* entry[=].resource.referenceRange.high = 10540 '/uL' "/uL"
* entry[+].fullUrl = "Observation/Observation-other.1.1.0.0"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.1.0.0"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code.text = "Formule"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.hasMember[0].reference = "Observation/Observation-other.1.1.0.1"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.1.0.2"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.1.0.3"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.1.0.4"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.1.0.5"
* entry[+].fullUrl = "Observation/Observation-other.1.1.0.1"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.1.0.1"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#26511-6
* entry[=].resource.code.text = "Neutrofiele segmenten"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:29+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 47 '%' "%"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 39.2 '%' "%"
* entry[=].resource.referenceRange.high = 72.9 '%' "%"
* entry[+].fullUrl = "Observation/Observation-other.1.1.0.2"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.1.0.2"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#26450-7
* entry[=].resource.code.text = "Eosinofielen"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:41+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 0 '%' "%"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.high = 8.4 '%' "%"
* entry[+].fullUrl = "Observation/Observation-other.1.1.0.3"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.1.0.3"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#30180-4
* entry[=].resource.code.text = "Basofielen"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:54+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 1 '%' "%"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.high = 1.5 '%' "%"
* entry[+].fullUrl = "Observation/Observation-other.1.1.0.4"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.1.0.4"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#26478-8
* entry[=].resource.code.text = "Lymfocyten"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:58+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 34 '%' "%"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 15.7 '%' "%"
* entry[=].resource.referenceRange.high = 47 '%' "%"
* entry[+].fullUrl = "Observation/Observation-other.1.1.0.5"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.1.0.5"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#26485-3
* entry[=].resource.code.text = "Monocyten"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:18:02+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 18 '%' "%"
* entry[=].resource.interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#H
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 5.7 '%' "%"
* entry[=].resource.referenceRange.high = 13.7 '%' "%"
* entry[+].fullUrl = "Observation/Observation-other.1.2.0.0"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.2.0.0"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code.text = "Formule (absoluut)"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.hasMember[0].reference = "Observation/Observation-other.1.2.0.1"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.2.0.2"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.2.0.3"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.2.0.4"
* entry[=].resource.hasMember[+].reference = "Observation/Observation-other.1.2.0.5"
* entry[+].fullUrl = "Observation/Observation-other.1.2.0.1"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.2.0.1"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#26499-4
* entry[=].resource.code.text = "Neutrofiele segmenten"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:29+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 1791 '/uL' "/uL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 1760 '/uL' "/uL"
* entry[=].resource.referenceRange.high = 7031 '/uL' "/uL"
* entry[+].fullUrl = "Observation/Observation-other.1.2.0.2"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.2.0.2"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#26449-9
* entry[=].resource.code.text = "Eosinofielen"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:41+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 0 '/uL' "/uL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.high = 559 '/uL' "/uL"
* entry[+].fullUrl = "Observation/Observation-other.1.2.0.3"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.2.0.3"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#26444-0
* entry[=].resource.code.text = "Basofielen"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:54+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 38 '/uL' "/uL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.high = 102 '/uL' "/uL"
* entry[+].fullUrl = "Observation/Observation-other.1.2.0.4"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.2.0.4"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#26474-7
* entry[=].resource.code.text = "Lymfocyten"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:17:58+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 1295 '/uL' "/uL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 964 '/uL' "/uL"
* entry[=].resource.referenceRange.high = 3440 '/uL' "/uL"
* entry[+].fullUrl = "Observation/Observation-other.1.2.0.5"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.2.0.5"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#26484-6
* entry[=].resource.code.text = "Monocyten"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:18:02+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 686 '/uL' "/uL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 320 '/uL' "/uL"
* entry[=].resource.referenceRange.high = 979 '/uL' "/uL"
* entry[+].fullUrl = "Observation/Observation-other.1.3.0.1"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.1.3.0.1"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#777-3
* entry[=].resource.code.text = "Trombocyten"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:18:10+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 151 '10*3/uL' "10*3/uL"
* entry[=].resource.specimen.reference = "Specimen/002815333044"
* entry[=].resource.referenceRange.low = 148 '10*3/uL' "10*3/uL"
* entry[=].resource.referenceRange.high = 362 '10*3/uL' "10*3/uL"
* entry[+].fullUrl = "Observation/Observation-other.2.0.0.0"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.2.0.0.0"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code.text = "INFLAMMATIE"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.hasMember.reference = "Observation/Observation-other.2.0.0.1"
* entry[+].fullUrl = "Observation/Observation-other.2.0.0.1"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.2.0.0.1"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#1988-5
* entry[=].resource.code.text = "CRP"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:18:15+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 63 'mg/L' "mg/L"
* entry[=].resource.interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#H
* entry[=].resource.specimen.reference = "Specimen/001815333044"
* entry[=].resource.referenceRange.high = 5 'mg/L' "mg/L"
* entry[+].fullUrl = "Observation/Observation-other.3.0.0.0"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.3.0.0.0"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code.text = "SCHILDKLIER"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.hasMember.reference = "Observation/Observation-other.3.0.0.1"
* entry[+].fullUrl = "Observation/Observation-other.3.0.0.1"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation-other.3.0.0.1"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#3016-3
* entry[=].resource.code.text = "TSH"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-04T13:18:22+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueQuantity = 2.5 'mU/L' "mU/L"
* entry[=].resource.specimen.reference = "Specimen/001815333044"
* entry[=].resource.referenceRange.low = 0.27 'mU/L' "mU/L"
* entry[=].resource.referenceRange.high = 4.2 'mU/L' "mU/L"
* entry[+].fullUrl = "DiagnosticReport/815333044"
* entry[=].resource.resourceType = "DiagnosticReport"
* entry[=].resource.id = "815333044"
* entry[=].resource.meta.versionId = "2"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report"
* entry[=].resource.language = #nl
* entry[=].resource.identifier.system = "https://www.ehealth.fgov.be/lab-report/diagnostic-report-id"
* entry[=].resource.identifier.value = "81365677998.815333044"
* entry[=].resource.basedOn.reference = "ServiceRequest/815333044"
* entry[=].resource.status = #final
* entry[=].resource.category = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* entry[=].resource.code = http://loinc.org#11502-2 "Laboratory report"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-04T00:00:00+01:00"
* entry[=].resource.issued = "2021-12-20T14:43:27+01:00"
* entry[=].resource.performer.reference = "Organization/81365677998"
* entry[=].resource.resultsInterpreter.reference = "Practitioner/Responsible"
* entry[=].resource.specimen[0].reference = "Specimen/002815333044"
* entry[=].resource.specimen[+].reference = "Specimen/001815333044"
* entry[=].resource.result[0].reference = "Observation/Observation-other.1.0.0.0"
* entry[=].resource.result[+].reference = "Observation/Observation-other.2.0.0.0"
* entry[=].resource.result[+].reference = "Observation/Observation-other.3.0.0.0"
* entry[=].resource.presentedForm.contentType = #application/pdf
* entry[=].resource.presentedForm.data = "JVBERi0xLjQKJeLjz9MKNCAwIG9iaiAKPDwKL0NvbG9yU3BhY2UgL0RldmljZVJHQgovU3VidHlwZSAvSW1hZ2UKL0ZpbHRlciBbL0RDVERlY29kZV0KL0xlbmd0aCAxMDE4NwovV2lkdGggNDE3Ci9UeXBlIC9YT2JqZWN0Ci9CaXRzUGVyQ29tcG9uZW50IDgKL0hlaWdodCAzMzQKPj4Kc3RyZWFtCv/Y/+AAEEpGSUYAAQEBAlgCWAAA/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBTgGhAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAorJ8Q+IrHw3pxu71zk8RRL96RvQf49q8/ih8W/EM+dJOdL0Zj8qrkBx7Dgv9TgVlOqovlSuzvwuAlWh7WpJQgur/RdWd/e+KNC05yl1q1pG46r5gJH4DmqsfjnwxK+1dZtgT/eJX+YrKsPhZ4dtEH2hJ7t+5kkKg/guKuTfDnwtKm0ab5Z/vRzOD/OpvXfRG/JlcdHKb80lb7nqdJb3VvdxCW2nimjPRo3DD8xU1eZ3nw1vtJlN74W1WeGZefJkfBb23Dg/RhV7wx49llv/wCxfEkP2PUg2xZGXarn0I7E9ux7UKs0+WorfkTUy6M4OrhJ86W62kvl1XmjvqKKK3PLCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqK5uIrS1luZ3CQxIXdj2AGTUtcP8VNRaz8J/ZozhryYRkeqj5j/ID8aipPki5HTg8O8RXhRXVmBoOny/EPxNPruqK39l2z7IIG6NjkL9Ohb1JxXqyqqKFUBVAwABwBWV4Z0tNG8N2NkowyRAyH1c8sfzJrWqaMOWN3u9zfMcV7eryw0hHSK8v+CFFFFannhXL+NfCMHiXTWeJFTUYVJgl6bv8AYPsf0PNdRRUyiprlZtQr1MPUVWm7NHF/DvxLLrGmSaffs39o2J2Pv+869AT7gjB+nvXaV5jfJ/wjvxhtJ4vlg1RQHA6Et8p/8eCn8a9OrOhJ2cXutDtzSlBVI1qatGoua3Z9V94UUUVseYFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQ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Ci9PcmRlcmluZyAoSWRlbnRpdHkpCi9SZWdpc3RyeSAoQWRvYmUpCj4+Ci9EVyAxMDAwCi9Gb250RGVzY3JpcHRvciA3IDAgUgovVyBbMyBbMjI4XSAxNSBbMjI4XSAxNyBbMjI4XSAxOSBbNDU2IDQ1Nl0gMjIgWzQ1NiA0NTYgNDU2XSAyNyBbNDU2XSA0MSBbNTAxXSA0NyBbNTAxXSA1MCBbNjM4XSA2OCBbNDU2XSA3MSBbNTAxIDQ1Nl0gNzYgWzIyOF0gNzkgWzIyOCA3MjkgNTAxXSA4NSBbMzE5IDQ1NiAyNzNdXQovQ0lEVG9HSURNYXAgL0lkZW50aXR5Ci9UeXBlIC9Gb250Cj4+CmVuZG9iaiAKMTAgMCBvYmogCjw8Ci9MZW5ndGggNjM1Cj4+CnN0cmVhbQovQ0lESW5pdCAvUHJvY1NldCBmaW5kcmVzb3VyY2UgYmVnaW4KMTIgZGljdCBiZWdpbgpiZWdpbmNtYXAKL0NJRFN5c3RlbUluZm8gPDwgL1JlZ2lzdHJ5IChBZG9iZSkgL09yZGVyaW5nIChVQ1MpIC9TdXBwbGVtZW50IDAgPj4gZGVmCi9DTWFwTmFtZSAvQWRvYmUtSWRlbnRpdHktVUNTIGRlZgovQ01hcFR5cGUgMiBkZWYKMSBiZWdpbmNvZGVzcGFjZXJhbmdlCjwwMDAwPiA8RkZGRj4KZW5kY29kZXNwYWNlcmFuZ2UKMDAwMjIgYmVnaW5iZmNoYXIKPDAwMDM+IDwwMDIwPgo8MDAwRj4gPDAwMkM+CjwwMDExPiA8MDAyRT4KPDAwMTM+IDwwMDMwPgo8MDAxND4gPDAwMzE+CjwwMDE2PiA8MDAzMz4KPDAwMTc+IDwwMDM0Pgo8MDAxOD4gPDAwMzU+CjwwMDFCPiA8MDAzOD4KPDAwMjk+IDwwMDQ2Pgo8MDAyRj4gPDAwNEM+CjwwMDMyPiA8MDA0Rj4KPDAwNDQ+IDwwMDYxPgo8MDA0Nz4gPDAwNjQ+CjwwMDQ4PiA8MDA2NT4KPDAwNEM+IDwwMDY5Pgo8MDA0Rj4gPDAwNkM+CjwwMDUwPiA8MDA2RD4KPDAwNTE+IDwwMDZFPgo8MDA1NT4gPDAwNzI+CjwwMDU2PiA8MDA3Mz4KPDAwNTc+IDwwMDc0PgplbmRiZmNoYXIKZW5kY21hcCBD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IDIyOCA0NTYgNDU2IDQ1NiA0NTYgNDU2IDQ1Nl0gMjYgWzQ1NiA0NTYgNDU2IDIyOF0gMzYgWzU0NyA1NDcgNTkyIDU5MiA1NDcgNTAxIDYzOCA1OTIgMjI4IDQxMCA1NDcgNDU2IDY4MyA1OTIgNjM4IDU0N10gNTMgWzU5MiA1NDcgNTAxXSA1NyBbNTQ3XSA2OCBbNDU2IDQ1Nl0gNzEgWzQ1NiA0NTZdIDc0IFs0NTYgNDU2IDE4MiAxODJdIDc5IFsxODIgNjgzIDQ1NiA0NTZdIDg1IFsyNzMgNDEwIDIyOCA0NTZdIDEzMSBbNDAwXV0KL0NJRFRvR0lETWFwIC9JZGVudGl0eQovVHlwZSAvRm9udAo+PgplbmRvYmogCjE2IDAgb2JqIAo8PAovTGVuZ3RoIDEwODMKPj4Kc3RyZWFtCi9DSURJbml0IC9Qcm9jU2V0IGZpbmRyZXNvdXJjZSBiZWdpbgoxMiBkaWN0IGJlZ2luCmJlZ2luY21hcAovQ0lEU3lzdGVtSW5mbyA8PCAvUmVnaXN0cnkgKEFkb2JlKSAvT3JkZXJpbmcgKFVDUykgL1N1cHBsZW1lbnQgMCA+PiBkZWYKL0NNYXBOYW1lIC9BZG9iZS1JZGVudGl0eS1VQ1MgZGVmCi9DTWFwVHlwZSAyIGRlZgoxIGJlZ2luY29kZXNwYWNlcmFuZ2UKPDAwMDA+IDxGRkZGPgplbmRjb2Rlc3BhY2VyYW5nZQowMDA1NCBiZWdpbmJmY2hhcgo8MDAwMz4gPDAwQTA+CjwwMDBCPiA8MDAyOD4KPDAwMEM+IDwwMDI5Pgo8MDAwRj4gPDAwMkM+CjwwMDEwPiA8MDBBRD4KPDAwMTE+IDwwMDJFPgo8MDAxMj4gPDAwMkY+CjwwMDEzPiA8MDAzMD4KPDAwMTQ+IDwwMDMxPgo8MDAxNT4gPDAwMzI+CjwwMDE2PiA8MDAzMz4KPDAwMTc+IDwwMDM0Pgo8MDAxOD4gPDAwMzU+CjwwMDFBPiA8MDAzNz4KPDAwMUI+IDwwMDM4Pgo8MDAxQz4gPDAwMzk+CjwwMDFEPiA8MDAzQT4KPDAwMjQ+IDwwMDQxPgo8MDAyNT4gPDAwNDI+CjwwMDI2PiA8MDA0Mz4KPDAwMjc+IDwwMDQ0Pgo8MDAyOD4gPDAwNDU+CjwwMDI5PiA8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N/7vfMv/I73+P3tMmDcKZW5kc3RyZWFtIAplbmRvYmogCjIxIDAgb2JqIAo8PAovRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDMyCj4+CnN0cmVhbQp4nFvI//+X/Pv3J+T/v//BwMCiwAABAiwMOAAAcfIIrAplbmRzdHJlYW0gCmVuZG9iaiAKMTkgMCBvYmogCjw8Ci9Gb250TmFtZSAvVk1ETFJXK0xldHRlckdvdGhpYwovU3RlbVYgMAovRm9udEZpbGUyIDIwIDAgUgovQXNjZW50IDk0MwovRmxhZ3MgMzIKL0Rlc2NlbnQgLTI1MQovSXRhbGljQW5nbGUgMAovQ0lEU2V0IDIxIDAgUgovRm9udEJCb3ggWy0yOTkgLTI1MSA2MzMgOTQzXQovVHlwZSAvRm9udERlc2NyaXB0b3IKL0NhcEhlaWdodCA3MjAKPj4KZW5kb2JqIAoxOCAwIG9iaiAKPDwKL0Jhc2VGb250IC9WTURMUlcrTGV0dGVyR290aGljCi9TdWJ0eXBlIC9DSURGb250VHlwZTIKL0NJRFN5c3RlbUluZm8gCjw8Ci9TdXBwbGVtZW50IDAKL09yZGVyaW5nIChJZGVudGl0eSkKL1JlZ2lzdHJ5IChBZG9iZSkKPj4KL0RXIDEwMDAKL0ZvbnREZXNjcmlwdG9yIDE5IDAgUgovVyBbMiBbNTAwXSA3IFs1MDBdIDEyIFs1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwXSAzMCBbNTAwXSAzNSBbNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMF0gNDQgWzUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMF0gNTIgWzUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwXSA2MCBbNTAwXSA2NyBbNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwXSA4NCBbNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDBdIDExNyBbNTAwXSAxMjIgWzUwMF0gMTk3IFs1MDBdXQovQ0lEVG9HSURNYXAgL0lkZW50aXR5Ci9UeXBlIC9Gb250Cj4+CmVuZG9iaiAKMjIgMCBvYmogCjw8Ci9MZW5ndGggMTMwNwo+PgpzdHJlYW0KL0NJREluaXQgL1Byb2NTZXQgZmluZHJlc291cmNlIGJlZ2luCjEyIGRpY3QgYmVnaW4KYmVnaW5jbWFwCi9DSURTeXN0ZW1JbmZvIDw8IC9SZWdpc3RyeSAoQWRvYmUpIC9PcmRlcmluZyAoVUNTKSAvU3VwcGxlbWVudCAwID4+IGRlZgovQ01hcE5hbWUgL0Fkb2JlLUlkZW50aXR5LVVDUyBkZWYKL0NNYXBUeXBlIDIgZGVmCjEgYmVnaW5jb2Rlc3BhY2VyYW5nZQo8MDAwMD4gPEZGRkY+CmVuZGNvZGVzcGFjZXJhbmdlCjAwMDcwIGJlZ2luYmZjaGFyCjwwMDAyPiA8MDAyMD4KPDAwMDc+IDwwMDI1Pgo8MDAwQz4gPDAwMkE+CjwwMDBEPiA8MDAyQj4KPDAwMEU+IDwwMDJDPgo8MDAwRj4gPDAwMkQ+CjwwMDEwPiA8MDAyRT4KPDAwMTE+IDwwMDJGPgo8MDAxMj4gPDAwMzA+CjwwMDEzPiA8MDAzMT4KPDAwMTQ+IDwwMDMyPgo8MDAxNT4gPDAwMzM+CjwwMDE2PiA8MDAzND4KPDAwMTc+IDwwMDM1Pgo8MDAxOD4gPDAwMzY+CjwwMDE5PiA8MDAzNz4KPDAwMUE+IDwwMDM4Pgo8MDAxQj4gPDAwMzk+CjwwMDFDPiA8MDAzQT4KPDAwMUU+IDwwMDNDPgo8MDAyMz4gPDAwNDE+CjwwMDI0PiA8MDA0Mj4KPDAwMjU+IDwwMDQzPgo8MDAyNj4gPDAwNDQ+CjwwMDI3PiA8MDA0NT4KPDAwMjg+IDwwMDQ2Pgo8MDAyOT4gPDAwNDc+CjwwMDJBPiA8MDA0OD4KPDAwMkM+IDwwMDRBPgo8MDAyRD4gPDAwNEI+CjwwMDJFPiA8MDA0Qz4KPDAwMkY+IDwwMDREPgo8MDAzMD4gPDAwNEU+CjwwMDMxPiA8MDA0Rj4KPDAwMzI+IDwwMDUwPgo8MDAzND4gPDAwNTI+CjwwMDM1PiA8MDA1Mz4KPDAwMzY+IDwwMDU0Pgo8MDAzNz4gPDAwNTU+CjwwMDM4PiA8MDA1Nj4KPDAwMzk+IDwwMDU3Pgo8MDAzQz4gPDAwNUE+CjwwMDQzPiA8MDA2MT4KPDAwNDQ+IDwwMDYyPgo8MDA0NT4gPDAwNjM+CjwwMDQ2PiA8MDA2ND4KPDAwNDc+IDwwMDY1Pgo8MDA0OD4gPDAwNjY+CjwwMDQ5PiA8MDA2Nz4KPDAwNEE+IDwwMDY4Pgo8MDA0Qj4gPDAwNjk+CjwwMDRDPiA8MDA2QT4KPDAwNEQ+IDwwMDZCPgo8MDA0RT4gPDAwNkM+CjwwMDRGPiA8MDA2RD4KPDAwNTA+IDwwMDZFPgo8MDA1MT4gPDAwNkY+CjwwMDUyPiA8MDA3MD4KPDAwNTQ+IDwwMDcyPgo8MDA1NT4gPDAwNzM+CjwwMDU2PiA8MDA3ND4KPDAwNTc+IDwwMDc1Pgo8MDA1OD4gPDAwNzY+CjwwMDU5PiA8MDA3Nz4KPDAwNUE+IDwwMDc4Pgo8MDA1Qj4gPDAwNzk+CjwwMDVDPiA8MDA3QT4KPDAwNzU+IDwwMEIwPgo8MDA3QT4gPDAwQjU+CjwwMEM1PiA8MDBFQj4KZW5kYmZjaGFyCmVuZGNtYXAgQ01hcE5hbWUgY3VycmVudGRpY3QgL0NNYXAgZGVmaW5lcmVzb3VyY2UgcG9wIGVuZCBlbmQKZW5kc3RyZWFtIAplbmRvYmogCjE3IDAgb2JqIAo8PAovQmFzZUZvbnQgL1ZNRExSVytMZXR0ZXJHb3RoaWMKL0Rlc2NlbmRhbnRGb250cyBbMTggMCBSXQovU3VidHlwZSAvVHlwZTAKL1RvVW5pY29kZSAyMiAwIFIKL1R5cGUgL0ZvbnQKL0VuY29kaW5nIC9JZGVudGl0eS1ICj4+CmVuZG9iaiAKMjMgMCBvYmogCjw8Ci9CYXNlRm9udCAvSGVsdmV0aWNhCi9TdWJ0eXBlIC9UeXBlMQovVHlwZSAvRm9udAovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwo+PgplbmRvYmogCjI3IDAgb2JqIAo8PAovRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDEwNzAyCi9MZW5ndGgxIDE5MTEyCj4+CnN0cmVhbQp4nO17eXhU1dn4e+beWTKZSe7sk0xmcic3TEgmIUwCWSCQIQtbUHaYEdSEECAaCAXEtRhrW2xAbdGCWqVWa6vF4r0zLAlav7HE1rrSFvvV1q+ItYtfY9Wn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IDI3IDAgUgovQXNjZW50IDk2NQovRmxhZ3MgMzIKL0Rlc2NlbnQgLTI2OQovSXRhbGljQW5nbGUgMAovQ0lEU2V0IDI4IDAgUgovRm9udEJCb3ggWy0yOTQgLTI2OSA2MzMgOTY1XQovVHlwZSAvRm9udERlc2NyaXB0b3IKL0NhcEhlaWdodCA3MjAKPj4KZW5kb2JqIAoyNSAwIG9iaiAKPDwKL0Jhc2VGb250IC9MSlNZVEQrTGV0dGVyR290aGljLUJvbGQKL1N1YnR5cGUgL0NJREZvbnRUeXBlMgovQ0lEU3lzdGVtSW5mbyAKPDwKL1N1cHBsZW1lbnQgMAovT3JkZXJpbmcgKElkZW50aXR5KQovUmVnaXN0cnkgKEFkb2JlKQo+PgovRFcgMTAwMAovRm9udERlc2NyaXB0b3IgMjYgMCBSCi9XIFsxNCBbNTAwXSAxNiBbNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDBdIDI2IFs1MDBdIDM1IFs1MDBdIDM5IFs1MDBdIDUyIFs1MDBdIDY3IFs1MDBdIDcwIFs1MDAgNTAwIDUwMF0gNzQgWzUwMCA1MDBdIDc4IFs1MDBdIDgwIFs1MDBdIDg0IFs1MDAgNTAwIDUwMF0gOTEgWzUwMF1dCi9DSURUb0dJRE1hcCAvSWRlbnRpdHkKL1R5cGUgL0ZvbnQKPj4KZW5kb2JqIAoyOSAwIG9iaiAKPDwKL0xlbmd0aCA2OTEKPj4Kc3RyZWFtCi9DSURJbml0IC9Qcm9jU2V0IGZpbmRyZXNvdXJjZSBiZWdpbgoxMiBkaWN0IGJlZ2luCmJlZ2luY21hcAovQ0lEU3lzdGVtSW5mbyA8PCAvUmVnaXN0cnkgKEFkb2JlKSAvT3JkZXJpbmcgKFVDUykgL1N1cHBsZW1lbnQgMCA+PiBkZWYKL0NNYXBOYW1lIC9BZG9iZS1JZGVudGl0eS1VQ1MgZGVmCi9DTWFwVHlwZSAyIGRlZgoxIGJlZ2luY29kZXNwYWNlcmFuZ2UKPDAwMDA+IDxGRkZGPgplbmRjb2Rlc3BhY2VyYW5nZQowMDAyNiBiZWdpbmJmY2hhcgo8MDAwRT4gPDAwMkM+CjwwMDEwPiA8MDAyRT4KPDAwMTE+IDwwMDJGPgo8MDAxMj4gPDAwMzA+Cjww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MjAyMTEyMjAxMjQzMjctMDEnMDAnKQovQ3JlYXRpb25EYXRlIChEOjIwMjExMjIwMTI0MzI3LTAxJzAwJykKPj4KZW5kb2JqIHhyZWYKMCAzNAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwODM0NjYgMDAwMDAgbiAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDgzMjEzIDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAyNDM3MiAwMDAwMCBuIAowMDAwMDIzMjk4IDAwMDAwIG4gCjAwMDAwMjMwNzkgMDAwMDAgbiAKMDAwMDAxMDM3NiAwMDAwMCBuIAowMDAwMDIyOTgzIDAwMDAwIG4gCjAwMDAwMjM2ODIgMDAwMDAgbiAKMDAwMDA0MzczMSAwMDAwMCBuIAowMDAwMDQyMDg3IDAwMDAwIG4gCjAwMDAwNDE4NzAgMDAwMDAgbiAKMDAwMDAyNDUyMyAwMDAwMCBuIAowMDAwMDQxNzY4IDAwMDAwIG4gCjAwMDAwNDI1OTIgMDAwMDAgbiAKMDAwMDA2NDM5MCAwMDAwMCBuIAowMDAwMDYyNDU2IDAwMDAwIG4gCjAwMDAwNjIyNDEgMDAwMDAgbiAKMDAwMDA0Mzg3OSAwMDAwMCBuIAowMDAwMDYyMTM0IDAwMDAwIG4gCjAwMDAwNjMwMjcgMDAwMDAgbiAKMDAwMDA2NDUzOSAwMDAwMCBuIAowMDAwMDc2ODk3IDAwMDAwIG4gCjAwMDAwNzU3NTIgMDAwMDAgbiAKMDAwMDA3NTUzMiAwMDAwMCBuIAowMDAwMDY0NjM5IDAwMDAwIG4gCjAwMDAwNzU0MzQgMDAwMDAgbiAKMDAwMDA3NjE1MSAwMDAwMCBuIAowMDAwMDc3MDUxIDAwMDAwIG4gCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDA4MzUyNSAwMDAwMCBuIAowMDAwMDgzNTc3IDAwMDAwIG4gCnRyYWlsZXIKCjw8Ci9JbmZvIDMzIDAgUgovUm9vdCAzMiAwIFIKL1NpemUgMzQKL0lEIFs8MDg0OWIzOWM5ODg5MTI5ZThlOTRmN2NhZjE4YTZiNGE+PDZlZDM5OWE2YjVkNWU1NDNjZWYzNDU5ZGI0NmViMjg4Pl0KPj4Kc3RhcnR4cmVmCjgzNzczCiUlRU9GCg=="
* entry[=].resource.presentedForm.title = "PDF protocol"
* entry[+].fullUrl = "Organization/81365677998"
* entry[=].resource.resourceType = "Organization"
* entry[=].resource.id = "81365677998"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-organization"
* entry[=].resource.identifier[0].use = #official
* entry[=].resource.identifier[=].type = http://terminology.hl7.org/CodeSystem/v2-0203#MD "Medical License number"
* entry[=].resource.identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* entry[=].resource.identifier[=].value = "81365677998"
* entry[=].resource.identifier[+].use = #official
* entry[=].resource.identifier[=].system = "https://economie.fgov.be/belac"
* entry[=].resource.identifier[=].value = "007-MED"
* entry[=].resource.active = true
* entry[=].resource.type = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty#orglaboratory
* entry[=].resource.name = "CENTRUM VOOR MEDISCHE ANALYSE"
* entry[=].resource.telecom[0].system = #phone
* entry[=].resource.telecom[=].value = "014/28.50.00"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #fax
* entry[=].resource.telecom[=].value = "014/22.56.08"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #email
* entry[=].resource.telecom[=].value = "info@cma.be"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #url
* entry[=].resource.telecom[=].value = "http://www.cma.be"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.address.use = #work
* entry[=].resource.address.type = #both
* entry[=].resource.address.line = "Oud-Strijderslaan 199"
* entry[=].resource.address.city = "Herentals"
* entry[=].resource.address.postalCode = "2200"
* entry[=].resource.address.country = "BE"
* entry[+].fullUrl = "Practitioner/69"
* entry[=].resource.resourceType = "Practitioner"
* entry[=].resource.id = "69"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* entry[=].resource.identifier.use = #official
* entry[=].resource.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* entry[=].resource.identifier.value = "10000007999"
* entry[=].resource.name.use = #official
* entry[=].resource.name.family = "Cma - Herentals"
* entry[=].resource.name.given = "Fhir"
* entry[=].resource.name.prefix = "Dr."
* entry[=].resource.telecom[0].system = #email
* entry[=].resource.telecom[=].value = "info@cma.be"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #fax
* entry[=].resource.telecom[=].value = "(+32)14/225608"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #phone
* entry[=].resource.telecom[=].value = "(+32)14/285000"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.address.use = #work
* entry[=].resource.address.type = #both
* entry[=].resource.address.line = "Oud-Strijderslaan 199"
* entry[=].resource.address.city = "Herentals"
* entry[=].resource.address.postalCode = "2200"
* entry[=].resource.address.country = "BE"
* entry[=].resource.gender = #unknown
* entry[+].fullUrl = "Practitioner/Responsible"
* entry[=].resource.resourceType = "Practitioner"
* entry[=].resource.id = "Responsible"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* entry[=].resource.identifier.use = #official
* entry[=].resource.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* entry[=].resource.identifier.value = "68134382991"
* entry[=].resource.name.use = #official
* entry[=].resource.name.family = "Baerts"
* entry[=].resource.name.given = "Lesley"
* entry[=].resource.telecom.system = #phone
* entry[=].resource.telecom.value = "03/489.25.07"
* entry[=].resource.telecom.use = #work
* entry[=].resource.address.use = #work
* entry[=].resource.address.type = #both
* entry[=].resource.address.line = "Lispersteenweg 469"
* entry[=].resource.address.city = "Lier"
* entry[=].resource.address.postalCode = "2500"
* entry[=].resource.address.country = "BE"
* entry[=].resource.gender = #unknown
* entry[+].fullUrl = "Patient/7168528"
* entry[=].resource.resourceType = "Patient"
* entry[=].resource.id = "7168528"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient"
* entry[=].resource.identifier.use = #official
* entry[=].resource.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* entry[=].resource.identifier.value = "40010199714"
* entry[=].resource.active = true
* entry[=].resource.name.use = #official
* entry[=].resource.name.family = "Lastname"
* entry[=].resource.name.given = "Firstname Old"
* entry[=].resource.gender = #male
* entry[=].resource.birthDate = "1940-01-01"
* entry[=].resource.address.use = #home
* entry[=].resource.address.type = #both
* entry[=].resource.address.line = "Oud-Strijderslaan 199"
* entry[=].resource.address.city = "Herentals"
* entry[=].resource.address.postalCode = "2200"
* entry[=].resource.address.country = "BE"
* entry[+].fullUrl = "ServiceRequest/815333044"
* entry[=].resource.resourceType = "ServiceRequest"
* entry[=].resource.id = "815333044"
* entry[=].resource.identifier.system = "http://www.macsys.be/hl7/ServiceRequest"
* entry[=].resource.identifier.value = "815333044"
* entry[=].resource.status = #completed
* entry[=].resource.intent = #order
* entry[=].resource.category = http://snomed.info/sct#108252007 "Laboratory procedure"
* entry[=].resource.priority = #routine
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.authoredOn = "2021-11-04T13:15:00+01:00"
* entry[=].resource.requester.reference = "Practitioner/69"

Instance: Inline-Instance-for-bundle-2-reports-2-patients-2
InstanceOf: Bundle
Usage: #inline
* id = "1"
* identifier.system = "https://www.ehealth.fgov.be/lab-report/bundle-id"
* identifier.value = "81264719998.501410142.3"
* type = #document
* timestamp = "2021-12-20T16:56:40Z"
* entry[0].fullUrl = "Composition/501410142"
* entry[=].resource.resourceType = "Composition"
* entry[=].resource.id = "501410142"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report-composition"
* entry[=].resource.identifier.system = "http://www.macsys.be/hl7/Composition"
* entry[=].resource.identifier.value = "501410142"
* entry[=].resource.status = #final
* entry[=].resource.type = http://loinc.org#11502-2
* entry[=].resource.type.text = "Laboratory report"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.date = "2021-12-20T16:56:40+01:00"
* entry[=].resource.author.reference = "Practitioner/Responsible"
* entry[=].resource.title = "Laboratory Report"
* entry[=].resource.section.entry.reference = "DiagnosticReport/501410142"
* entry[+].fullUrl = "Specimen/003501410142"
* entry[=].resource.resourceType = "Specimen"
* entry[=].resource.id = "003501410142"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-specimen-laboratory"
* entry[=].resource.identifier.system = "http://www.macsys.be/hl7/Specimen"
* entry[=].resource.identifier.value = "003501410142"
* entry[=].resource.status = #available
* entry[=].resource.type = http://terminology.hl7.org/CodeSystem/v2-0487#BX "Biopsy"
* entry[=].resource.type.text = "Biopsie"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.receivedTime = "2021-11-17T21:38:21+01:00"
* entry[=].resource.collection.collector.reference = "Practitioner/69"
* entry[=].resource.collection.collectedDateTime = "2021-11-17T00:00:00+01:00"
* entry[+].fullUrl = "Observation/Observation.1.0.0.0"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation.1.0.0.0"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code.text = "PATHOLOGISCH ONDERZOEK"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-17T00:00:00+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.hasMember.reference = "Observation/Observation.1.0.0.1"
* entry[+].fullUrl = "Observation/Observation.1.0.0.1"
* entry[=].resource.resourceType = "Observation"
* entry[=].resource.id = "Observation.1.0.0.1"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* entry[=].resource.status = #final
* entry[=].resource.code = http://loinc.org#66121-5
* entry[=].resource.code.text = "Resultaat"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-17T00:00:00+01:00"
* entry[=].resource.issued = "2021-11-20T22:38:57+01:00"
* entry[=].resource.performer.reference = "Practitioner/Responsible"
* entry[=].resource.valueString = "KLINISCHE GEGEVENS\r\nExcisie rug: cyste, maligne?\r\n\r\nMACROSCOPIE\r\nExcisie 1,1 X 0,9 cm, 2 dwarse, rest\r\n\r\nMICROSCOPIE\r\nDe dwarse doorsneden bestaat uit epiderm, derm en subcutis. In de dermis en subcutis van ��n van deze doorsneden bevindt er zich een cyste, afgeboord door een goed gedifferentieerd squameus epitheel. Dit epitheel rijpt normaal uit, via een stratum granulosum, tot een massale hoeveelheid lamellaire orthokeratine. De cystewand is intact en vertoont geen kenmerken van actuele ruptuur. Rond de cyste bezitten dermis en subcutis een lichte fibrose. Deze epidermale inclusiecyste is goedaardig en in toto verwijderd.\r\n\r\n\r\nBESLUIT\r\nHuid rug: grote epidermale inclusiecyste, goedaardig en in toto.\r\n\r\nAnatomopathologie uitgevoerd en elektronisch gevalideerd door Dr. Hilde Demarsin (Tel.: 03/2313689).(20/11/21)\r\n\r\n"
* entry[=].resource.note.text = "Analyse uitgevoerd door extern labo."
* entry[=].resource.specimen.reference = "Specimen/003501410142"
* entry[+].fullUrl = "DiagnosticReport/501410142"
* entry[=].resource.resourceType = "DiagnosticReport"
* entry[=].resource.id = "501410142"
* entry[=].resource.meta.versionId = "3"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report"
* entry[=].resource.language = #nl
* entry[=].resource.identifier.system = "https://www.ehealth.fgov.be/lab-report/diagnostic-report-id"
* entry[=].resource.identifier.value = "81264719998.501410142"
* entry[=].resource.basedOn.reference = "ServiceRequest/501410142"
* entry[=].resource.status = #final
* entry[=].resource.category = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* entry[=].resource.code = http://loinc.org#11502-2 "Laboratory report"
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.effectiveDateTime = "2021-11-17T00:00:00+01:00"
* entry[=].resource.issued = "2021-12-20T16:56:40+01:00"
* entry[=].resource.performer.reference = "Organization/81264719998"
* entry[=].resource.resultsInterpreter.reference = "Practitioner/Responsible"
* entry[=].resource.specimen.reference = "Specimen/003501410142"
* entry[=].resource.result.reference = "Observation/Observation.1.0.0.0"
* entry[=].resource.presentedForm.contentType = #application/pdf
* entry[=].resource.presentedForm.data = "JVBERi0xLjQKJeLjz9MKNCAwIG9iaiAKPDwKL0NvbG9yU3BhY2UgL0RldmljZVJHQgovU3VidHlwZSAvSW1hZ2UKL0ZpbHRlciBbL0RDVERlY29kZV0KL0xlbmd0aCAxMDE4NwovV2lkdGggNDE3Ci9UeXBlIC9YT2JqZWN0Ci9CaXRzUGVyQ29tcG9uZW50IDgKL0hlaWdodCAzMzQKPj4Kc3RyZWFtCv/Y/+AAEEpGSUYAAQEBAlgCWAAA/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBTgGhAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAorJ8Q+IrHw3pxu71zk8RRL96RvQf49q8/ih8W/EM+dJOdL0Zj8qrkBx7Dgv9TgVlOqovlSuzvwuAlWh7WpJQgur/RdWd/e+KNC05yl1q1pG46r5gJH4DmqsfjnwxK+1dZtgT/eJX+YrKsPhZ4dtEH2hJ7t+5kkKg/guKuTfDnwtKm0ab5Z/vRzOD/OpvXfRG/JlcdHKb80lb7nqdJb3VvdxCW2nimjPRo3DD8xU1eZ3nw1vtJlN74W1WeGZefJkfBb23Dg/RhV7wx49llv/wCxfEkP2PUg2xZGXarn0I7E9ux7UKs0+WorfkTUy6M4OrhJ86W62kvl1XmjvqKKK3PLCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqK5uIrS1luZ3CQxIXdj2AGTUtcP8VNRaz8J/ZozhryYRkeqj5j/ID8aipPki5HTg8O8RXhRXVmBoOny/EPxNPruqK39l2z7IIG6NjkL9Ohb1JxXqyqqKFUBVAwABwBWV4Z0tNG8N2NkowyRAyH1c8sfzJrWqaMOWN3u9zfMcV7eryw0hHSK8v+CFFFFannhXL+NfCMHiXTWeJFTUYVJgl6bv8AYPsf0PNdRRUyiprlZtQr1MPUVWm7NHF/DvxLLrGmSaffs39o2J2Pv+869AT7gjB+nvXaV5jfJ/wjvxhtJ4vlg1RQHA6Et8p/8eCn8a9OrOhJ2cXutDtzSlBVI1qatGoua3Z9V94UUUVseYFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQ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Z2luCjEyIGRpY3QgYmVnaW4KYmVnaW5jbWFwCi9DSURTeXN0ZW1JbmZvIDw8IC9SZWdpc3RyeSAoQWRvYmUpIC9PcmRlcmluZyAoVUNTKSAvU3VwcGxlbWVudCAwID4+IGRlZgovQ01hcE5hbWUgL0Fkb2JlLUlkZW50aXR5LVVDUyBkZWYKL0NNYXBUeXBlIDIgZGVmCjEgYmVnaW5jb2Rlc3BhY2VyYW5nZQo8MDAwMD4gPEZGRkY+CmVuZGNvZGVzcGFjZXJhbmdlCjAwMDIxIGJlZ2luYmZjaGFyCjwwMDAzPiA8MDAyMD4KPDAwMEY+IDwwMDJDPgo8MDAxMT4gPDAwMkU+CjwwMDEzPiA8MDAzMD4KPDAwMTQ+IDwwMDMxPgo8MDAxNT4gPDAwMzI+CjwwMDE3PiA8MDAzND4KPDAwMTg+IDwwMDM1Pgo8MDAyOT4gPDAwNDY+CjwwMDJGPiA8MDA0Qz4KPDAwMzI+IDwwMDRGPgo8MDA0ND4gPDAwNjE+CjwwMDQ3PiA8MDA2ND4KPDAwNDg+IDwwMDY1Pgo8MDA0Qz4gPDAwNjk+CjwwMDRGPiA8MDA2Qz4KPDAwNTA+IDwwMDZEPgo8MDA1MT4gPDAwNkU+CjwwMDU1PiA8MDA3Mj4KPDAwNTY+IDwwMDczPgo8MDA1Nz4gPDAwNzQ+CmVuZGJmY2hhcgplbmRjbWFwIENNYXBOYW1lIGN1cnJlbnRkaWN0IC9DTWFwIGRlZmluZXJlc291cmNlIHBvcCBlbmQgZW5kCmVuZHN0cmVhbSAKZW5kb2JqIAo1IDAgb2JqIAo8PAovQmFzZUZvbnQgL1dPVlhPQytBcmlhbE5hcnJvdy1Cb2xkCi9EZXNjZW5kYW50Rm9udHMgWzYgMCBSXQovU3VidHlwZSAvVHlwZTAKL1RvVW5pY29kZSAxMCAwIFIKL1R5cGUgL0ZvbnQKL0VuY29kaW5nIC9JZGVudGl0eS1ICj4+CmVuZG9iaiAKMTQgMCBvYmogCjw8Ci9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9MZW5ndGggMTcxMDMKL0xlbmd0aDEgMjY2NDMKPj4Kc3RyZWFtCnic7bx5WFRH9jB8qu69fW/vt5vupptm6aZpUFHEXZTIVRG3qERFxYiA0AIGBQEX4kqiIS6JJC5RYyKJWcxixCWKZtHs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Pj4Kc3RyZWFtCnicm8D4/w///+8unHufNzAAgQADxQAAIwQHEwplbmRzdHJlYW0gCmVuZG9iaiAKMTMgMCBvYmogCjw8Ci9Gb250TmFtZSAvSVRBWElBK0FyaWFsTmFycm93Ci9TdGVtViAwCi9Gb250RmlsZTIgMTQgMCBSCi9Bc2NlbnQgMTA4NgovRmxhZ3MgMzIKL0Rlc2NlbnQgLTMwNwovSXRhbGljQW5nbGUgMAovQ0lEU2V0IDE1IDAgUgovRm9udEJCb3ggWy0xODIgLTMwNyAxMDAwIDEwODZdCi9UeXBlIC9Gb250RGVzY3JpcHRvcgovQ2FwSGVpZ2h0IDY4Mwo+PgplbmRvYmogCjEyIDAgb2JqIAo8PAovQmFzZUZvbnQgL0lUQVhJQStBcmlhbE5hcnJvdwovU3VidHlwZSAvQ0lERm9udFR5cGUyCi9DSURTeXN0ZW1JbmZvIAo8PAovU3VwcGxlbWVudCAwCi9PcmRlcmluZyAoSWRlbnRpdHkpCi9SZWdpc3RyeSAoQWRvYmUpCj4+Ci9EVyAxMDAwCi9Gb250RGVzY3JpcHRvciAxMyAwIFIKL1cgWzMgWzIyOF0gMTUgWzIyOCAyNzMgMjI4IDIyOCA0NTYgNDU2IDQ1NiA0NTYgNDU2IDQ1NiA0NTYgNDU2IDQ1NiA0NTYgMjI4XSAzNiBbNTQ3IDU0NyA1OTIgNTkyIDU0NyA1MDEgNjM4IDU5MiAyMjggNDEwIDU0NyA0NTYgNjgzIDU5MiA2MzggNTQ3XSA1MyBbNTkyIDU0NyA1MDFdIDU3IFs1NDddIDYxIFs1MDFdIDY4IFs0NTZdIDcxIFs0NTYgNDU2XSA3NCBbNDU2IDQ1NiAxODIgMTgyXSA3OSBbMTgyIDY4MyA0NTYgNDU2XSA4NSBbMjczIDQxMCAyMjggNDU2XSAxMzEgWzQwMF1dCi9DSURUb0dJRE1hcCAvSWRlbnRpdHkKL1R5cGUgL0ZvbnQKPj4KZW5kb2JqIAoxNiAwIG9iaiAKPDwKL0xlbmd0aCAxMDY5Cj4+CnN0cmVhbQovQ0lESW5pdCAvUHJvY1NldCBmaW5kcmVzb3VyY2UgYmVnaW4KMTIgZGljdCBiZWdpbgpiZWdpbmNtYXAKL0NJRFN5c3RlbUluZm8gPDwgL1JlZ2lzdHJ5IChBZG9iZSkgL09yZGVyaW5nIChVQ1MpIC9TdXBwbGVtZW50IDAgPj4gZGVmCi9DTWFwTmFtZSAvQWRvYmUtSWRlbnRpdHktVUNTIGRlZgovQ01hcFR5cGUgMiBkZWYKMSBiZWdpbmNvZGVzcGFjZXJhbmdlCjwwMDAwPiA8RkZGRj4KZW5kY29kZXNwYWNlcmFuZ2UKMDAwNTMgYmVnaW5iZmNoYXIKPDAwMDM+IDwwMEEwPgo8MDAwRj4gPDAwMkM+CjwwMDEwPiA8MDBBRD4KPDAwMTE+IDwwMDJFPgo8MDAxMj4gPDAwMkY+CjwwMDEzPiA8MDAzMD4KPDAwMTQ+IDwwMDMxPgo8MDAxNT4gPDAwMzI+CjwwMDE2PiA8MDAzMz4KPDAwMTc+IDwwMDM0Pgo8MDAxOD4gPDAwMzU+CjwwMDE5PiA8MDAzNj4KPDAwMUE+IDwwMDM3Pgo8MDAxQj4gPDAwMzg+CjwwMDFDPiA8MDAzOT4KPDAwMUQ+IDwwMDNBPgo8MDAyND4gPDAwNDE+CjwwMDI1PiA8MDA0Mj4KPDAwMjY+IDwwMDQzPgo8MDAyNz4gPDAwNDQ+CjwwMDI4PiA8MDA0NT4KPDAwMjk+IDwwMDQ2Pgo8MDAyQT4gPDAwNDc+CjwwMDJCPiA8MDA0OD4KPDAwMkM+IDwwMDQ5Pgo8MDAyRD4gPDAwNEE+CjwwMDJFPiA8MDA0Qj4KPDAwMkY+IDwwMDRDPgo8MDAzMD4gPDAwNEQ+CjwwMDMxPiA8MDA0RT4KPDAwMzI+IDwwMDRGPgo8MDAzMz4gPDAwNTA+CjwwMDM1PiA8MDA1Mj4KPDAwMzY+IDwwMDUzPgo8MDAzNz4gPDAwNTQ+CjwwMDM5PiA8MDA1Nj4KPDAwM0Q+IDwwMDVBPgo8MDA0ND4gPDAwNjE+CjwwMDQ3PiA8MDA2ND4KPDAwNDg+IDwwMDY1Pgo8MDA0QT4gPDAwNjc+CjwwMDRCPiA8MDA2OD4KPDAwNEM+IDwwMDY5Pgo8MDA0RD4gPDAwNkE+CjwwMDRGPiA8MDA2Qz4KPDAwNTA+IDwwMDZEPgo8MDA1MT4gPDAwNkU+CjwwMDUyPiA8MDA2Rj4KPDAwNTU+IDwwMDcyPgo8MDA1Nj4gPDAwNzM+CjwwMDU3PiA8MDA3ND4KPDAwNTg+IDwwMDc1Pgo8MDA4Mz4gPDAw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Ci9TdGVtViAwCi9Gb250RmlsZTIgMjAgMCBSCi9Bc2NlbnQgOTQzCi9GbGFncyAzMgovRGVzY2VudCAtMjUxCi9JdGFsaWNBbmdsZSAwCi9DSURTZXQgMjEgMCBSCi9Gb250QkJveCBbLTI5OSAtMjUxIDYzMyA5NDNdCi9UeXBlIC9Gb250RGVzY3JpcHRvcgovQ2FwSGVpZ2h0IDcyMAo+PgplbmRvYmogCjE4IDAgb2JqIAo8PAovQmFzZUZvbnQgL1ZNRExSVytMZXR0ZXJHb3RoaWMKL1N1YnR5cGUgL0NJREZvbnRUeXBlMgovQ0lEU3lzdGVtSW5mbyAKPDwKL1N1cHBsZW1lbnQgMAovT3JkZXJpbmcgKElkZW50aXR5KQovUmVnaXN0cnkgKEFkb2JlKQo+PgovRFcgMTAwMAovRm9udERlc2NyaXB0b3IgMTkgMCBSCi9XIFsyIFs1MDBdIDEwIFs1MDAgNTAwXSAxMyBbNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwXSAzMCBbNTAwXSAzMyBbNTAwXSAzNSBbNTAwIDUwMCA1MDAgNTAwIDUwMF0gNDEgWzUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMF0gNTggWzUwMF0gNjAgWzUwMF0gNjcgWzUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDAgNTAwIDUwMCA1MDBdIDExNyBbNTAwXSAxOTUgWzUwMF0gMTk3IFs1MDBdXQovQ0lEVG9HSURNYXAgL0lkZW50aXR5Ci9UeXBlIC9Gb250Cj4+CmVuZG9iaiAKMjIgMCBvYmogCjw8Ci9MZW5ndGggMTM0OQo+PgpzdHJlYW0KL0NJREluaXQgL1Byb2NTZXQgZmluZHJlc291cmNlIGJlZ2luCjEyIGRpY3QgYmVnaW4KYmVnaW5jbWFwCi9DSURTeXN0ZW1JbmZvIDw8IC9SZWdpc3RyeSAoQWRvYmUpIC9PcmRlcmluZyAoVUNTKSAvU3VwcGxlbWVudCAwID4+IGRlZgovQ01hcE5hbWUgL0Fkb2JlLUlkZW50aXR5LVVDUyBkZWYKL0NNYXBUeXBlIDIgZGVmCjEgYmVnaW5jb2Rlc3BhY2VyYW5nZQo8MDAwMD4gPEZGRkY+CmVuZGNvZGVzcGFjZXJhbmdlCjAwMDczIGJlZ2luYmZjaGFyCjwwMDAyPiA8MDAyMD4KPDAwMEE+IDwwMDI4Pgo8MDAwQj4gPDAwMjk+CjwwMDBEPiA8MDAyQj4KPDAwMEU+IDwwMDJDPgo8MDAwRj4gPDAwMkQ+CjwwMDEwPiA8MDAyRT4KPDAwMTE+IDwwMDJGPgo8MDAxMj4gPDAwMzA+CjwwMDEzPiA8MDAzMT4KPDAwMTQ+IDwwMDMyPgo8MDAxNT4gPDAwMzM+CjwwMDE2PiA8MDAzND4KPDAwMTc+IDwwMDM1Pgo8MDAxOD4gPDAwMzY+CjwwMDE5PiA8MDAzNz4KPDAwMUE+IDwwMDM4Pgo8MDAxQj4gPDAwMzk+CjwwMDFDPiA8MDAzQT4KPDAwMUU+IDwwMDNDPgo8MDAyMT4gPDAwM0Y+CjwwMDIzPiA8MDA0MT4KPDAwMjQ+IDwwMDQyPgo8MDAyNT4gPDAwNDM+CjwwMDI2PiA8MDA0ND4KPDAwMjc+IDwwMDQ1Pgo8MDAyOT4gPDAwNDc+CjwwMDJBPiA8MDA0OD4KPDAwMkI+IDwwMDQ5Pgo8MDAyQz4gPDAwNEE+CjwwMDJEPiA8MDA0Qj4KPDAwMkU+IDwwMDRDPgo8MDAyRj4gPDAwNEQ+CjwwMDMwPiA8MDA0RT4KPDAwMzE+IDwwMDRGPgo8MDAzMj4gPDAwNTA+CjwwMDMzPiA8MDA1MT4KPDAwMzQ+IDwwMDUyPgo8MDAzNT4gPDAwNTM+CjwwMDM2PiA8MDA1ND4KPDAwMzc+IDwwMDU1Pgo8MDAzOD4gPDAwNTY+CjwwMDNBPiA8MDA1OD4KPDAwM0M+IDwwMDVBPgo8MDA0Mz4gPDAwNjE+CjwwMDQ0PiA8MDA2Mj4KPDAwNDU+IDwwMDYzPgo8MDA0Nj4gPDAwNjQ+CjwwMDQ3PiA8MDA2NT4KPDAwNDg+IDwwMDY2Pgo8MDA0OT4gPDAwNjc+CjwwMDRBPiA8MDA2OD4KPDAwNEI+IDwwMDY5Pgo8MDA0Qz4gPDAw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NjMzIDk2NV0KL1R5cGUgL0ZvbnREZXNjcmlwdG9yCi9DYXBIZWlnaHQgNzIwCj4+CmVuZG9iaiAKMjUgMCBvYmogCjw8Ci9CYXNlRm9udCAvTEpTWVREK0xldHRlckdvdGhpYy1Cb2xkCi9TdWJ0eXBlIC9DSURGb250VHlwZTIKL0NJRFN5c3RlbUluZm8gCjw8Ci9TdXBwbGVtZW50IDAKL09yZGVyaW5nIChJZGVudGl0eSkKL1JlZ2lzdHJ5IChBZG9iZSkKPj4KL0RXIDEwMDAKL0ZvbnREZXNjcmlwdG9yIDI2IDAgUgovVyBbMTYgWzUwMCA1MDAgNTAwIDUwMCA1MDBdIDIyIFs1MDAgNTAwXSAyNSBbNTAwXSAzNSBbNTAwXSAzOSBbNTAwXSA1MiBbNTAwXSA2NyBbNTAwXSA3MCBbNTAwIDUwMCA1MDBdIDc0IFs1MDAgNTAwXSA3OCBbNTAwXSA4MCBbNTAwXSA4NCBbNTAwIDUwMCA1MDBdIDkxIFs1MDBdXQovQ0lEVG9HSURNYXAgL0lkZW50aXR5Ci9UeXBlIC9Gb250Cj4+CmVuZG9iaiAKMjkgMCBvYmogCjw8Ci9MZW5ndGggNjQ5Cj4+CnN0cmVhbQovQ0lESW5pdCAvUHJvY1NldCBmaW5kcmVzb3VyY2UgYmVnaW4KMTIgZGljdCBiZWdpbgpiZWdpbmNtYXAKL0NJRFN5c3RlbUluZm8gPDwgL1JlZ2lzdHJ5IChBZG9iZSkgL09yZGVyaW5nIChVQ1MpIC9TdXBwbGVtZW50IDAgPj4gZGVmCi9DTWFwTmFtZSAvQWRvYmUtSWRlbnRpdHktVUNTIGRlZgovQ01hcFR5cGUgMiBkZWYKMSBiZWdpbmNvZGVzcGFjZXJhbmdlCjwwMDAwPiA8RkZGRj4KZW5kY29kZXNwYWNlcmFuZ2UKMDAwMjMgYmVnaW5iZmNoYXIKPDAwMTA+IDwwMDJFPgo8MDAxMT4gPDAwMkY+CjwwMDEyPiA8MDAzMD4KPDAwMTM+IDwwMDMxPgo8MDAxND4gPDAwMzI+CjwwMDE2PiA8MDAzND4KPDAwMTc+IDwwMDM1Pgo8MDAxOT4gPDAwMzc+CjwwMDIzPiA8MDA0MT4KPDAwMjc+IDwwMDQ1Pgo8MDAzND4gPDAwNTI+CjwwMDQzPiA8MDA2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RjMgMjQgMCBSCj4+Ci9YT2JqZWN0IAo8PAovWDAgNCAwIFIKPj4KL1Byb2NTZXQgWy9QREYgL0ltYWdlQyAvSW1hZ2VJIC9JbWFnZUIgL1RleHRdCj4+Ci9UeXBlIC9QYWdlCi9Db250ZW50cyAzMCAwIFIKPj4KZW5kb2JqIAoxIDAgb2JqIAo8PAovS2lkcyBbMyAwIFJdCi9Db3VudCAxCi9UeXBlIC9QYWdlcwo+PgplbmRvYmogCjMyIDAgb2JqIAo8PAovUGFnZXMgMSAwIFIKL1R5cGUgL0NhdGFsb2cKPj4KZW5kb2JqIAozMyAwIG9iaiAKPDwKL0NyZWF0b3IgKHBkZnRrIDIuMDIgLSB3d3cucGRmdGsuY29tKQovUHJvZHVjZXIgKGl0ZXh0LXBhdWxvLTE1NSBcKGl0ZXh0cGRmLnNmLm5ldC1sb3dhZ2llLmNvbVwpKQovTW9kRGF0ZSAoRDoyMDIxMTIyMDE0NTY0MC0wMScwMCcpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyMTEyMjAxNDU2NDAtMDEnMDAnKQo+PgplbmRvYmogeHJlZgowIDM0CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDA4MDIyOCAwMDAwMCBuIAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwNzk5NzUgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDI0MDA4IDAwMDAwIG4gCjAwMDAwMjI5NTcgMDAwMDAgbiAKMDAwMDAyMjczOCAwMDAwMCBuIAowMDAwMDEwMzc2IDAwMDAwIG4gCjAwMDAwMjI2NDIgMDAwMDAgbiAKMDAwMDAyMzMzMiAwMDAwMCBuIAowMDAwMDQzMjk1IDAwMDAwIG4gCjAwMDAwNDE2NzQgMDAwMDAgbiAKMDAwMDA0MTQ1NyAwMDAwMCBuIAowMDAwMDI0MTU5IDAwMDAwIG4gCjAwMDAwNDEzNTUgMDAwMDAgbiAKMDAwMDA0MjE3MCAwMDAwMCBuIAowMDAwMDY0MjYxIDAwMDAwIG4gCjAwMDAwNjIyNzIgMDAwMDAgbiAKMDAwMDA2MjA1NyAwMDAwMCBuIAowMDAwMDQzNDQzIDAwMDAwIG4gCjAwMDAwNjE5NTAgMDAwMDAgbiAKMDAwMDA2Mjg1NiAwMDAwMCBuIAowMDAwMDY0NDEwIDAwMDAwIG4gCjAwMDAwNzU4NDggMDAwMDAgbiAKMDAwMDA3NDc1NyAwMDAwMCBuIAowMDAwMDc0NTM3IDAwMDAwIG4gCjAwMDAwNjQ1MTAgMDAwMDAgbiAKMDAwMDA3NDQzOSAwMDAwMCBuIAowMDAwMDc1MTQ0IDAwMDAwIG4gCjAwMDAwNzYwMDIgMDAwMDAgbiAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDgwMjg3IDAwMDAwIG4gCjAwMDAwODAzMzkgMDAwMDAgbiAKdHJhaWxlcgoKPDwKL0luZm8gMzMgMCBSCi9Sb290IDMyIDAgUgovU2l6ZSAzNAovSUQgWzw5NTAzZDdkMTg3NDljZjJjNDMwZDBiMTcwNjc1Y2I5Zj48ZTMzMjRiYjcwMDk4ZDZlMmNhNTRhNDc2NWJlYmI5MzE+XQo+PgpzdGFydHhyZWYKODA1MzUKJSVFT0YK"
* entry[=].resource.presentedForm.title = "PDF protocol"
* entry[+].fullUrl = "Organization/81264719998"
* entry[=].resource.resourceType = "Organization"
* entry[=].resource.id = "81264719998"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-organization"
* entry[=].resource.identifier.use = #official
* entry[=].resource.identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MD "Medical License number"
* entry[=].resource.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* entry[=].resource.identifier.value = "81264719998"
* entry[=].resource.active = true
* entry[=].resource.type = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty#orglaboratory
* entry[=].resource.name = "ALGEMEEN KLINISCH LABO"
* entry[=].resource.telecom[0].system = #phone
* entry[=].resource.telecom[=].value = "03/489.25.07"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #fax
* entry[=].resource.telecom[=].value = "03/488.08.04"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #email
* entry[=].resource.telecom[=].value = "info@akl.be"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #url
* entry[=].resource.telecom[=].value = "http://www.akl.be"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.address.use = #work
* entry[=].resource.address.type = #both
* entry[=].resource.address.line = "Lispersteenweg 469"
* entry[=].resource.address.city = "Lier"
* entry[=].resource.address.postalCode = "2500"
* entry[=].resource.address.country = "BE"
* entry[+].fullUrl = "Practitioner/69"
* entry[=].resource.resourceType = "Practitioner"
* entry[=].resource.id = "69"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* entry[=].resource.identifier.use = #official
* entry[=].resource.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* entry[=].resource.identifier.value = "10000007999"
* entry[=].resource.name.use = #official
* entry[=].resource.name.family = "Cma - Herentals"
* entry[=].resource.name.given = "Fhir"
* entry[=].resource.name.prefix = "Dr."
* entry[=].resource.telecom[0].system = #email
* entry[=].resource.telecom[=].value = "info@cma.be"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #fax
* entry[=].resource.telecom[=].value = "(+32)14/225608"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.telecom[+].system = #phone
* entry[=].resource.telecom[=].value = "(+32)14/285000"
* entry[=].resource.telecom[=].use = #work
* entry[=].resource.address.use = #work
* entry[=].resource.address.type = #both
* entry[=].resource.address.line = "Oud-Strijderslaan 199"
* entry[=].resource.address.city = "Herentals"
* entry[=].resource.address.postalCode = "2200"
* entry[=].resource.address.country = "BE"
* entry[=].resource.gender = #unknown
* entry[+].fullUrl = "Practitioner/Responsible"
* entry[=].resource.resourceType = "Practitioner"
* entry[=].resource.id = "Responsible"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* entry[=].resource.identifier.use = #official
* entry[=].resource.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* entry[=].resource.identifier.value = "68134382991"
* entry[=].resource.name.use = #official
* entry[=].resource.name.family = "Baerts"
* entry[=].resource.name.given = "Lesley"
* entry[=].resource.telecom.system = #phone
* entry[=].resource.telecom.value = "03/489.25.07"
* entry[=].resource.telecom.use = #work
* entry[=].resource.address.use = #work
* entry[=].resource.address.type = #both
* entry[=].resource.address.line = "Lispersteenweg 469"
* entry[=].resource.address.city = "Lier"
* entry[=].resource.address.postalCode = "2500"
* entry[=].resource.address.country = "BE"
* entry[=].resource.gender = #unknown
* entry[+].fullUrl = "Patient/7168528"
* entry[=].resource.resourceType = "Patient"
* entry[=].resource.id = "7168528"
* entry[=].resource.meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient"
* entry[=].resource.identifier.use = #official
* entry[=].resource.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* entry[=].resource.identifier.value = "40010199714"
* entry[=].resource.active = true
* entry[=].resource.name.use = #official
* entry[=].resource.name.family = "Lastname"
* entry[=].resource.name.given = "Firstname Old"
* entry[=].resource.gender = #male
* entry[=].resource.birthDate = "1940-01-01"
* entry[=].resource.address.use = #home
* entry[=].resource.address.type = #both
* entry[=].resource.address.line = "Oud-Strijderslaan 199"
* entry[=].resource.address.city = "Herentals"
* entry[=].resource.address.postalCode = "2200"
* entry[=].resource.address.country = "BE"
* entry[+].fullUrl = "ServiceRequest/501410142"
* entry[=].resource.resourceType = "ServiceRequest"
* entry[=].resource.id = "501410142"
* entry[=].resource.identifier.system = "http://www.macsys.be/hl7/ServiceRequest"
* entry[=].resource.identifier.value = "501410142"
* entry[=].resource.status = #completed
* entry[=].resource.intent = #order
* entry[=].resource.category = http://snomed.info/sct#108252007 "Laboratory procedure"
* entry[=].resource.priority = #routine
* entry[=].resource.subject.reference = "Patient/7168528"
* entry[=].resource.authoredOn = "2021-11-17T21:38:00+01:00"
* entry[=].resource.requester.reference = "Practitioner/69"

---

// File: input/fsh/instances/cult60.fsh

Instance: cult60
InstanceOf: BeObservationLaboratory
Usage: #inline
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* status = #final
* code = $loinc#43411-8 "Bacteria identified in Aspirate by Culture"
* code.text = "Culture"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueString = "Commensalen +-"

---

// File: input/fsh/instances/diagnosticreport1.fsh

Instance: diagnosticreport1
InstanceOf: BeLaboratoryReport
Usage: #inline
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* meta.versionId = "1"
* language = #en
* identifier[DRID].value = "11530231003.2015110413180000000"
* basedOn = Reference(servicerequest1)
* status = #final
* category = $v2-0074#LAB "Laboratory"
* code.coding = $loinc#18723-7 "Hematology studies (set)"
* code.coding.display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* code.coding.display.extension.extension[0].url = "lang"
* code.coding.display.extension.extension[=].valueCode = #nl-BE
* code.coding.display.extension.extension[+].url = "content"
* code.coding.display.extension.extension[=].valueString = "HEMATOLOGIE"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-03T13:18:00+01:00"
* issued = "2015-11-04T13:18:00+01:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d72)
* resultsInterpreter = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)
* result[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d37)
* media.comment = "Just as an example here: how to add a link to an image"
* media.link = Reference(urn:uuid:7c16c9c0-c469-4088-ae18-48abcadd8d40)
* conclusion = "This is our conclusion"

---

// File: input/fsh/instances/eHealthPlatform.fsh

Instance: eHealthPlatform
InstanceOf: BeOrganization
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* active = true
* name = "eHealth Platform"
* telecom.system = #phone
* telecom.value = "3228918611"
* telecom.use = #work
* address[0].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #nl
* address[=].use = #work
* address[=].type = #both
* address[=].text = "Willebroekkaai 38, 1000 Brussel"
* address[=].line = "Willebroekkaai 38"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Willebroekkaai"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "38"
* address[=].city = "Brussel"
* address[=].postalCode = "1000"
* address[=].country = "BE"
* address[+].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #fr
* address[=].use = #work
* address[=].type = #both
* address[=].text = "38, Quai de Willeborek, 1000 Bruxelles"
* address[=].line = "38, Quai de Willeborek"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Quai de Willeborek"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "38"
* address[=].city = "Bruxelles"
* address[=].postalCode = "1000"
* address[=].country = "BE"

---

// File: input/fsh/instances/hematologyStudiesAsBundleCollection.fsh

Instance: hematologyStudiesAsBundleCollection
InstanceOf: Bundle
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:0c3151bd-1cbf-4d65-b04d-cd9187a4c6e0"
* type = #collection
* entry[0].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d34"
* entry[=].resource = ex02-diagnosticreport1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35"
* entry[=].resource = ex02-specimen1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36"
* entry[=].resource = ex02-observation10
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d37"
* entry[=].resource = ex02-observation11
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d38"
* entry[=].resource = ex02-observation111
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d39"
* entry[=].resource = ex02-observation112
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c469-4088-ae18-48abcadd8d40"
* entry[=].resource = ex02-media1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d40"
* entry[=].resource = ex02-organization10
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d41"
* entry[=].resource = ex02-practitioner11
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d42"
* entry[=].resource = ex02-patient1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d43"
* entry[=].resource = ex02-servicerequest1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d44"
* entry[=].resource = ex02-practitioner1

Instance:  ex02-diagnosticreport1
InstanceOf: DiagnosticReport
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report"
* language = #en
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.system = "https://www.ehealth.fgov.be/lab-report/diagnostic-report-id"
* identifier.value = "11530231003.2015110413180000000"
* basedOn = Reference(servicerequest1)
* status = #final
* category = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* code.coding = http://loinc.org#18723-7 "Hematology studies (set)"
* code.coding.display.extension.extension[0].url = "lang"
* code.coding.display.extension.extension[=].valueCode = #nl-BE
* code.coding.display.extension.extension[+].url = "content"
* code.coding.display.extension.extension[=].valueString = "HEMATOLOGIE"
* code.coding.display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-03T13:18:00+01:00"
* issued = "2015-11-04T13:18:00+01:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d72)
* resultsInterpreter = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)
* result[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d37)
* media.comment = "Just as an example here: how to add a link to an image"
* media.link = Reference(urn:uuid:7c16c9c0-c469-4088-ae18-48abcadd8d40)
* conclusion = "This is our conclusion"

Instance:  ex02-specimen1
InstanceOf: Specimen
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-specimen-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.system = "https://www.GTL-LABO.be/"
* identifier.value = "1"
* status = #available
* type = http://snomed.info/sct#119297000 "Blood specimen"
* type.text = "A string can be added to nuance or explain."
* receivedTime = "2015-11-04"
* collection.collectedDateTime = "2015-11-03"
* collection.method = http://snomed.info/sct#28520004 "Venipuncture for blood test (procedure)"
* collection.bodySite = http://snomed.info/sct#368208006 "Left upper arm structure (body structure)"
* note.text = "Some extra relevant information concerning the specimen"

Instance:  ex02-observation10
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code = http://loinc.org#30341-2 "Erythrocyte sedimentation rate"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueQuantity = 2 'mm/h' "mm/h"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#L "Low"
* note.text = "The Bodysite and Method that are given below do not really make any sense here!"
* bodySite = http://snomed.info/sct#344001 "Ankle"
* bodySite.text = "ankle (this code was just an example to show the structure)"
* method = http://snomed.info/sct#14456009 "Measuring height of patient"
* method.text = "Measuring height of patient (this code was just an example to show the structure)"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)
* referenceRange.low = 0 'mm/h' "mm/h"
* referenceRange.high = 30 'mm/h' "mm/h"
* referenceRange.type = http://terminology.hl7.org/CodeSystem/referencerange-meaning#normal
* referenceRange.appliesTo = http://snomed.info/sct#248153007 "Male"
* referenceRange.text = "Something concerning the reference range that can only be explained in text -->"

Instance:  ex02-observation11
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code.text = "SCREENING"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* hasMember[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d38)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d39)

Instance:  ex02-observation111
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code = http://loinc.org#789-8 "Erythrocytes [#/volume] in Blood by Automated count"
* code.text = "Red blood cells (blood)"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueQuantity = 4.35 '10*6/uL' "10*6/uL"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)
* referenceRange.low = 3.93 '10*6/uL' "10*6/uL"
* referenceRange.high = 5.01 '10*6/uL' "10*6/uL"
* referenceRange.type = http://terminology.hl7.org/CodeSystem/referencerange-meaning#normal

Instance:  ex02-observation112
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code = http://loinc.org#20563-3 "Carboxyhemoglobin/Hemoglobin.total in Blood"
* code.text = "Hemoglobin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueQuantity = 14.1 'g/dl' "g/dl"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)
* referenceRange.low = 11.8 'g/dl' "g/dl"
* referenceRange.high = 14.8 'g/dl' "g/dl"
* referenceRange.type = http://terminology.hl7.org/CodeSystem/referencerange-meaning#normal

Instance:  ex02-media1
InstanceOf: Media
Usage: #inline
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #completed
* content.contentType = #image/gif
* content.data = "iVBORw0KGgoAAAANSUhEUgAAA+MAAACnCAYAAAB6pY03AAAAAXNSR0IArs4c6QAAAARnQU1BAACx jwv8YQUAAAAJcEhZcwAAEnMAABJzAYwiuQcAADBZSURBVHhe7d09rty218fxrOFfZj/ZQHZgwEiZ gg=="

Instance:  ex02-organization10
InstanceOf: Organization
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-organization"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MD "Medical License number"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "81165343998"
* active = true
* type = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty#orglaboratory
* name = "GTL - General Testing Laboratory"
* telecom.system = #phone
* telecom.value = "322675199"
* telecom.use = #work
* address.extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address.extension.valueCode = #nl
* address.use = #work
* address.type = #both
* address.text = "Vulcansstraat 120, 1000 Brussel"
* address.line = "Vulcansstraat 120"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Vulcansstraat"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "120"
* address.city = "Brussel"
* address.postalCode = "1000"
* address.country = "BE"

Instance:  ex02-practitioner11
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "554488997"
* name.use = #official
* name.family = "Davoust"
* name.given = "Nicolas"
* telecom[0].system = #email
* telecom[=].value = "nicolas.davoust@gtl.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work

Instance:  ex02-patient1
InstanceOf: Patient
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier.value = "79121137740"
* active = true
* name.family = "La Paradisio"
* name.given[0] = "Josephine"
* name.given[+] = "Nessa"
* telecom[0].system = #email
* telecom[=].value = "nessa.laparadisio@belgium.be"
* telecom[+].system = #phone
* telecom[=].value = "+322476792979"
* telecom[=].use = #mobile
* telecom[+].system = #phone
* telecom[=].value = "+3226718655"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "+322476799"
* telecom[=].use = #work
* gender = #female
* birthDate.extension.url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
* birthDate.extension.valueDateTime = "1979-12-11T13:28:17-05:00"
* birthDate = "1979-12-11"
* address.use = #home
* address.type = #both
* address.text = "Sloordelle 42, 1160 Oudergem"
* address.line = "Sloordelle 42"
* address.city = "Oudergem"
* address.postalCode = "1160"
* address.country = "BE"

Instance:  ex02-servicerequest1
InstanceOf: ServiceRequest
Usage: #inline
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #active
* intent = #order
* category = http://snomed.info/sct#108252007 "Laboratory procedure"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* authoredOn = "2015-11-01T14:41:00+01:00"
* requester = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d76)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)

Instance:  ex02-practitioner1
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "18749704477"
* name.use = #official
* name.family = "Pulaski"
* name.given = "Katherine"
* name.suffix = "MD"
* telecom[0].system = #email
* telecom[=].value = "katherine.pulaski@enterprisehospital.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work
* address.use = #home
* address.text = "Jupiterlaan 5, 1853 Grimbergen"
* address.line = "Jupiterlaan 5"
* address.city = "Grimbergen"
* address.postalCode = "1853"
* address.country = "BE"

---

// File: input/fsh/instances/hematologyStudiesAsFHIRDocument.fsh

Instance: hematologyStudiesAsFHIRDocument
InstanceOf: Bundle
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:0c3151bd-1cbf-4d65-b04d-cd9187a4c6e0"
* type = #document
* timestamp = "2021-05-31T22:12:21Z"
* entry[0].fullUrl = "urn:uuid:7c16c9c0-c471-4098-bf18-48abcadd8d34"
* entry[=].resource = ex04-Inline-Instance-for-hematologyStudiesAsFHIRDocument-1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d34"
* entry[=].resource = ex04-diagnosticreport1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35"
* entry[=].resource = ex04-specimen1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36"
* entry[=].resource = ex04-observation10
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d37"
* entry[=].resource = ex04-observation11
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d38"
* entry[=].resource = ex04-observation111
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d39"
* entry[=].resource = ex04-observation112
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c469-4088-ae18-48abcadd8d40"
* entry[=].resource = ex04-media1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d72"
* entry[=].resource = ex04-organization10
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73"
* entry[=].resource = ex04-practitioner11
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74"
* entry[=].resource = ex04-patient1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d43"
* entry[=].resource = ex04-servicerequest1
* entry[+].fullUrl = "urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d76"
* entry[=].resource = ex04-practitioner1

Instance:  ex04-Inline-Instance-for-hematologyStudiesAsFHIRDocument-1
InstanceOf: Composition
Usage: #inline
* id = "180f219f-97a8-486d-99d9-ed631fe4fc57"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report-composition"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:dbcf0eb0-d825-11eb-b8bc-0242ac130003"
* status = #final
* type = http://loinc.org#11502-2
* type.text = "Laboratort report"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* date = "2013-02-01T12:30:02Z"
* author = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* title = "Laboratory Report (mandatory to give a title like this in a FHIR document.)"
* relatesTo.code = #replaces
* relatesTo.targetIdentifier.system = "urn:ietf:rfc:3986"
* relatesTo.targetIdentifier.value = "urn:uuid:0c3151bd-1cbf-4d65-b04d-cd9187a4c5e0"
* section.entry = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d34)

Instance:  ex04-diagnosticreport1
InstanceOf: DiagnosticReport
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report"
* language = #en
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.system = "https://www.ehealth.fgov.be/lab-report/diagnostic-report-id"
* identifier.value = "11530231003.2015110413180000000"
* basedOn = Reference(servicerequest1)
* status = #final
* category = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* code.coding = http://loinc.org#18723-7 "Hematology studies (set)"
* code.coding.display.extension.extension[0].url = "lang"
* code.coding.display.extension.extension[=].valueCode = #nl-BE
* code.coding.display.extension.extension[+].url = "content"
* code.coding.display.extension.extension[=].valueString = "HEMATOLOGIE"
* code.coding.display.extension.url = "http://hl7.org/fhir/StructureDefinition/translation"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-03T13:18:00+01:00"
* issued = "2015-11-04T13:18:00+01:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d72)
* resultsInterpreter = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)
* result[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d36)
* result[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d37)
* media.comment = "Just as an example here: how to add a link to an image"
* media.link = Reference(urn:uuid:7c16c9c0-c469-4088-ae18-48abcadd8d40)
* conclusion = "This is our conclusion"

Instance:  ex04-specimen1
InstanceOf: Specimen
Usage: #inline
* meta.versionId = "1"
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-specimen-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.system = "https://www.GTL-LABO.be/"
* identifier.value = "1"
* status = #available
* type = http://snomed.info/sct#119297000 "Blood specimen"
* type.text = "A string can be added to nuance or explain."
* receivedTime = "2015-11-04"
* collection.collectedDateTime = "2015-11-03"
* collection.method = http://snomed.info/sct#28520004 "Venipuncture for blood test (procedure)"
* collection.bodySite = http://snomed.info/sct#368208006 "Left upper arm structure (body structure)"
* note.text = "Some extra relevant information concerning the specimen"

Instance:  ex04-observation10
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code = http://loinc.org#30341-2 "Erythrocyte sedimentation rate"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueQuantity = 2 'mm/h' "mm/h"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#L "Low"
* note.text = "The Bodysite and Method that are given below do not really make any sense here!"
* bodySite = http://snomed.info/sct#344001 "Ankle"
* bodySite.text = "ankle (this code was just an example to show the structure)"
* method = http://snomed.info/sct#14456009 "Measuring height of patient"
* method.text = "Measuring height of patient (this code was just an example to show the structure)"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)
* referenceRange.low = 0 'mm/h' "mm/h"
* referenceRange.high = 30 'mm/h' "mm/h"
* referenceRange.type = http://terminology.hl7.org/CodeSystem/referencerange-meaning#normal
* referenceRange.appliesTo = http://snomed.info/sct#248153007 "Male"
* referenceRange.text = "Something concerning the reference range that can only be explained in text -->"

Instance:  ex04-observation11
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code.text = "SCREENING"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* hasMember[0] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d38)
* hasMember[+] = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d39)

Instance:  ex04-observation111
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code = http://loinc.org#789-8 "Erythrocytes [#/volume] in Blood by Automated count"
* code.text = "Red blood cells (blood)"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueQuantity = 4.35 '10*6/uL' "10*6/uL"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)
* referenceRange.low = 3.93 '10*6/uL' "10*6/uL"
* referenceRange.high = 5.01 '10*6/uL' "10*6/uL"
* referenceRange.type = http://terminology.hl7.org/CodeSystem/referencerange-meaning#normal

Instance:  ex04-observation112
InstanceOf: Observation
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #final
* code = http://loinc.org#20563-3 "Carboxyhemoglobin/Hemoglobin.total in Blood"
* code.text = "Hemoglobin"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* performer = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d73)
* valueQuantity = 14.1 'g/dl' "g/dl"
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)
* referenceRange.low = 11.8 'g/dl' "g/dl"
* referenceRange.high = 14.8 'g/dl' "g/dl"
* referenceRange.type = http://terminology.hl7.org/CodeSystem/referencerange-meaning#normal

Instance:  ex04-media1
InstanceOf: Media
Usage: #inline
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #completed
* content.contentType = #image/gif
* content.data = "iVBORw0KGgoAAAANSUhEUgAAA+MAAACnCAYAAAB6pY03AAAAAXNSR0IArs4c6QAAAARnQU1BAACx jwv8YQUAAAAJcEhZcwAAEnMAABJzAYwiuQcAADBZSURBVHhe7d09rty218fxrOFfZj/ZQHZgwEiZ gg=="

Instance:  ex04-organization10
InstanceOf: Organization
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-organization"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MD "Medical License number"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "81165343998"
* active = true
* type = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty#orglaboratory
* name = "GTL - General Testing Laboratory"
* telecom.system = #phone
* telecom.value = "322675199"
* telecom.use = #work
* address.extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address.extension.valueCode = #nl
* address.use = #work
* address.type = #both
* address.text = "Vulcansstraat 120, 1000 Brussel"
* address.line = "Vulcansstraat 120"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Vulcansstraat"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "120"
* address.city = "Brussel"
* address.postalCode = "1000"
* address.country = "BE"

Instance:  ex04-practitioner11
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "554488997"
* name.use = #official
* name.family = "Davoust"
* name.given = "Nicolas"
* telecom[0].system = #email
* telecom[=].value = "nicolas.davoust@gtl.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work

Instance:  ex04-patient1
InstanceOf: Patient
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier.value = "79121137740"
* active = true
* name.family = "La Paradisio"
* name.given[0] = "Josephine"
* name.given[+] = "Nessa"
* telecom[0].system = #email
* telecom[=].value = "nessa.laparadisio@belgium.be"
* telecom[+].system = #phone
* telecom[=].value = "+322476792979"
* telecom[=].use = #mobile
* telecom[+].system = #phone
* telecom[=].value = "+3226718655"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "+322476799"
* telecom[=].use = #work
* gender = #female
* birthDate.extension.url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
* birthDate.extension.valueDateTime = "1979-12-11T13:28:17-05:00"
* birthDate = "1979-12-11"
* address.use = #home
* address.type = #both
* address.text = "Sloordelle 42, 1160 Oudergem"
* address.line = "Sloordelle 42"
* address.city = "Oudergem"
* address.postalCode = "1160"
* address.country = "BE"

Instance:  ex04-servicerequest1
InstanceOf: ServiceRequest
Usage: #inline
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* status = #active
* intent = #order
* category = http://snomed.info/sct#108252007 "Laboratory procedure"
* subject = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d74)
* authoredOn = "2015-11-01T14:41:00+01:00"
* requester = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d76)
* specimen = Reference(urn:uuid:7c16c9c0-c471-4098-ae18-48abcadd8d35)

Instance:  ex04-practitioner1
InstanceOf: Practitioner
Usage: #inline
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"
* text.status = #empty
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                        empty\r\n                    </div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "18749704477"
* name.use = #official
* name.family = "Pulaski"
* name.given = "Katherine"
* name.suffix = "MD"
* telecom[0].system = #email
* telecom[=].value = "katherine.pulaski@enterprisehospital.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work
* address.use = #home
* address.text = "Jupiterlaan 5, 1853 Grimbergen"
* address.line = "Jupiterlaan 5"
* address.city = "Grimbergen"
* address.postalCode = "1853"
* address.country = "BE"

---

// File: input/fsh/instances/obsCreat.fsh

Instance: obsCreat
InstanceOf: BeObservationLaboratory
Title: "Detailed structure of fragment of creatinine panel."
Description: "Detailed structure of fragment of creatinine panel.(Note this example only concerns the Observation structure, a laboratory report SHALL be send leveraging the diagnosticReport resource that uses this Observation to express its results.)"
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* status = #final
* code = $loinc#65634-8 "Creatinine 24 hour urine panel - 24 hour Urine"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* specimen = Reference(urine1)
* hasMember[0] = Reference(obsUrineScreening)
* hasMember[+] = Reference(obsMagnesium)

---

// File: input/fsh/instances/obsDynamic0.fsh

Instance: obsDynamic0
InstanceOf: BeObservationLaboratory
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* status = #final
* code = $loinc#53093-1 "Glucose^post XXX challenge"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* valueQuantity = 5.2 'mmol/l' "mmol/l"
* component.code = $sct#118578006 "Relative time"
* component.valueQuantity = 0 'min' "min"

---

// File: input/fsh/instances/obsDynamic1.fsh

Instance: obsDynamic1
InstanceOf: BeObservationLaboratory
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* status = #final
* code = $loinc#53093-1 "Glucose^post XXX challenge"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* valueQuantity = 9.4 'mmol/l' "mmol/l"
* component.code = $sct#118578006 "Relative time"
* component.valueQuantity = 180 'min' "min"

---

// File: input/fsh/instances/obsDynamic2.fsh

Instance: obsDynamic2
InstanceOf: BeObservationLaboratory
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* status = #final
* code = $loinc#53093-1 "Glucose^post XXX challenge"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* valueQuantity = 9.1 'mmol/l' "mmol/l"
* component.code = $sct#118578006 "Relative time"
* component.valueQuantity = 240 'min' "min"

---

// File: input/fsh/instances/obsDynamicHead.fsh

Instance: obsDynamicHead
InstanceOf: BeObservationLaboratory
Title: "Detailed structure of panel that uses qualifiers."
Description: "Details how to structure a panel using qualifiers.(Note this example only concerns the Observation structure, a laboratory report SHALL be send leveraging the diagnosticReport resource that uses this Observation to express its results.)"
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* status = #final
* code = $loinc#72171-2 "Glucose tolerance 4 hours panel - Serum or Plasma"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* hasMember[0] = Reference(obsDynamic0)
* hasMember[+] = Reference(obsDynamic1)
* hasMember[+] = Reference(obsDynamic2)
* component[0].code = $sct#118555000 "Substance amount"
* component[=].valueQuantity = 75 'g' "g"
* component[+].code = $sct#774167006 "Product name"
* component[=].valueString = "syrupy glucose solution"

---

// File: input/fsh/instances/obsKetonen.fsh

Instance: obsKetonen
InstanceOf: BeObservationLaboratory
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* status = #final
* code = $loinc#57734-6 "Ketones (urine) - presence - test strip"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* valueString = "Negative"
* specimen = Reference(urine1)
* referenceRange.type = $referencerange-meaning#normal
* referenceRange.text = "Negative"

---

// File: input/fsh/instances/obsMagnesium.fsh

Instance: obsMagnesium
InstanceOf: BeObservationLaboratory
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* status = #final
* code = $loinc#2598-1 "Magnesium [Moles/volume] in Urine"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* valueQuantity = 1 'mmol/l' "mmol/l"
* specimen = Reference(urine1)
* referenceRange.low = 1.23 'mmol/l' "mmol/l"
* referenceRange.high = 2.06 'mmol/l' "mmol/l"
* referenceRange.type = $referencerange-meaning#normal

---

// File: input/fsh/instances/obsUrineIonen.fsh

Instance: obsUrineIonen
InstanceOf: BeObservationLaboratory
Usage: #definition
* status = #final
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* code.text = "URINE Ionen"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* specimen = Reference(urine1)
* hasMember = Reference(obsMagnesium)

---

// File: input/fsh/instances/obsUrineScreening.fsh

Instance: obsUrineScreening
InstanceOf: BeObservationLaboratory
Usage: #definition
* status = #final
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* code.text = "URINE Screening"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* specimen = Reference(urine1)
* hasMember[0] = Reference(obsKetonen)
* hasMember[+] = Reference(obsUrobili)

---

// File: input/fsh/instances/obsUrobili.fsh

Instance: obsUrobili
InstanceOf: BeObservationLaboratory
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* status = #final
* code = $loinc#13658-0 "Urobilinogen [Presence] in Urine"
* effectiveDateTime = "2015-11-04T09:16:00-05:00"
* issued = "2015-11-04T09:16:00-05:00"
* performer = Reference(Practitioner/practitioner10)
* valueString = "Negative"
* specimen = Reference(urine1)
* referenceRange.type = $referencerange-meaning#normal
* referenceRange.text = "Negative"

---

// File: input/fsh/instances/organization1.fsh

Instance: organization1
InstanceOf: BeOrganization
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* identifier[0].use = #official
* identifier[=].type = $v2-0203#PRN "Provider Number"
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/cbe"
* identifier[=].value = "0425.222.333"
* identifier[+].use = #official
* identifier[=].type = $v2-0203#MD "Medical License number"
* identifier[=].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier[=].value = "999999999"
* active = true
* type = $cd-hcparty#orghospital
* name = "Enterprise Hospital Ziekenhuis"
* telecom.system = #phone
* telecom.value = "322675199"
* telecom.use = #work
* address[0].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #nl
* address[=].use = #work
* address[=].type = #both
* address[=].text = "Vulcansstraat 120, 1000 Brussel"
* address[=].line = "Vulcansstraat 120"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Vulcansstraat"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "120"
* address[=].city = "Brussel"
* address[=].postalCode = "1000"
* address[=].country = "BE"
* address[+].extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address[=].extension.valueCode = #fr
* address[=].use = #work
* address[=].type = #both
* address[=].text = "120, Rue des Vulcans, 1000 Bruxelles"
* address[=].line = "120, Rue des Vulcans"
* address[=].line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address[=].line.extension[=].valueString = "Rue des Vulcans"
* address[=].line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address[=].line.extension[=].valueString = "120"
* address[=].city = "Bruxelles"
* address[=].postalCode = "1000"
* address[=].country = "BE"

---

// File: input/fsh/instances/practitioner10.fsh

Instance: practitioner10
InstanceOf: BePractitioner
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* identifier.use = #official
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* identifier.value = "554488997"
* name.use = #official
* name.family = "Davoust"
* name.given = "Louis-Nicolas"
* name.suffix = "MD"
* telecom[0].system = #email
* telecom[=].value = "nicolas.davoust@gtl.be"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "022675198"
* telecom[=].use = #work
* telecom[+].system = #fax
* telecom[=].value = "022675209"
* telecom[=].use = #work

---

// File: input/fsh/instances/practitionerrole1.fsh

Instance: practitionerrole1
InstanceOf: BePractitionerRole
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "23"
* active = true
* period.start = "2019-08-01T00:00:00.000Z"
* period.end = "2019-12-01T00:00:00.000Z"
* practitioner.reference = "Practitioner/practitioner1"
* practitioner.display = "Dr Katherine Pulaski"
* code = $cd-hcparty#persphysician "physician"
* specialty = $sct#419772000 "Family practice"
* availableTime[0].daysOfWeek[0] = #mon
* availableTime[=].daysOfWeek[+] = #tue
* availableTime[=].daysOfWeek[+] = #wed
* availableTime[=].availableStartTime = "09:00:00"
* availableTime[=].availableEndTime = "16:30:00"
* availableTime[+].daysOfWeek[0] = #thu
* availableTime[=].daysOfWeek[+] = #fri
* availableTime[=].availableStartTime = "09:00:00"
* availableTime[=].availableEndTime = "16:30:00"
* notAvailable.description = "Katherine will be on extended leave during August 2020"
* notAvailable.during.start = "2020-08-01T00:00:00.000Z"
* notAvailable.during.end = "2020-08-20T00:00:00.000Z"
* availabilityExceptions = "Katherine is generally unavailable on public holidays and during the Christmas/New Year break"

---

// File: input/fsh/instances/urine1.fsh

Instance: urine1
InstanceOf: BeSpecimenLaboratory
Usage: #definition
* text.status = #empty
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>empty</div>"
* meta.versionId = "1"
* status = #available
* type = $sct#78014005 "Urine"
* receivedTime = "2015-11-04"
* note.text = "24u urinecollectie"

---

// File: input/fsh/profiles/BeLaboratoryReport.fsh

Profile: BeLaboratoryReport
Parent: DiagnosticReport
Id: be-laboratory-report
Title: "BeLaboratoryReport"
Description: "Belgian profile for a laboratory report"
* ^url = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report"
* ^version = "0.0.7"
* ^status = #draft
* ^date = "2020-09-07T12:54:23+00:00"
* ^publisher = "HL7 Belgium"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7belgium.org"
* ^jurisdiction = $m49.htm#001
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    BeExtNote named note 0..* MS 
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1


* text.status = #empty
* identifier 1.. MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^definition = "An identifier for this laboratory report.\r\n\r\n This identifier will be used to determine if a new resource is needed, or if this resource is an update of an existing one. When an identifier is given, a consumer SHALL NOT ignore it."
* identifier contains DRID 1..1
* identifier[DRID] ^definition = "The identifier SHALL at least contain 1 identifier of type BeLabReportDiagnosticReportId. The unicity of this identifier is guaranteed by using the NIHDI number of the lab and a unique number for that lab, separated by a dot."
* identifier[DRID].system = "https://www.ehealth.fgov.be/lab-report/diagnostic-report-id" (exactly)
* identifier[DRID].value 1..1
* basedOn 1..1 MS
* basedOn only Reference(ServiceRequest)
* basedOn ^short = "A reference to a ServiceRequest SHALL be given here that minimally includes the time of prescription."
* basedOn ^definition = "Details concerning the prescription this laboratory report fullfills. A reference to a ServiceRequest SHALL be given here that includes the time of prescription in its .authoredOn element. It is RECOMMENDED to also use the .identifier element of the ServiceRequest to identify the original order number. Note, within the Observation resource it is possible to define they were defined on a different serviceRequest (e.g. to clarify it was a sub ordering)"
* status MS
* status ^short = "Status of the report: consult the HL7 list of permitted values"
* status ^definition = "The status of the diagnostic report. Consult the HL7 list of allowed values here. Note when a report should actually replace a previous one, use the Replaces extension."
* category 1.. MS
* category ^short = "The subject of this specialty, expressed in a LOINC code."
* category ^definition = "The subject of this specialty, expressed in a LOINC code.\r\n\r\nThe choice of what observations to categorize under what specialty are left ultimately to the discretion of the laboratory sending the results. Some non-restrictive guidelines:\r\n*18721-1 (THERAPEUTIC DRUG MONITORING STUDIES) will be used for a section carrying pharmacologyobservations on a patient.\r\n*Mycology and parasitology, as well as bacteriology, are part of the 18725-2 (MICROBIOLOGY STUDIES) specialty.\r\n*665 Virology MAY be included in 18725-2 (MICROBIOLOGY STUDIES) specialty or 18727-8 (SEROLOGY STUDIES)or split between both specialties, depending upon the Content Creator Actor’s choice"
* category.coding ^slicing.discriminator.type = #value
* category.coding ^slicing.discriminator.path = "code"
* category.coding ^slicing.rules = #open
* category.coding.system 1..
* category.coding.code 1..
* category.coding.display 1..
* category.coding contains LABREPORT 1..1
* category.coding[LABREPORT].system 1..
* category.coding[LABREPORT].system = "http://terminology.hl7.org/CodeSystem/v2-0074" (exactly)
* category.coding[LABREPORT].code = #LAB (exactly)
* category.coding[LABREPORT].display = "Laboratory" (exactly)
* code MS
* subject 1.. MS
* subject only Reference(BePatient or Group or Device or Location)
* subject ^short = "In the initial iteration of the Belgium lab project: when sending to eHealthBox, this is BePatient."
* effective[x] MS
* effective[x] ^short = "Time of the specimen collection - is overruled when collection time is given in .specimen element."
* effective[x] ^definition = "The time or time-period the observed values are related to. This is the time specimen collection(s)"
* issued 1.. MS
* performer 1.. MS
* performer only Reference(BeOrganization or BePractitioner or CareTeam or BePractitionerRole)
* performer ^short = "In the initial iteration of the Belgium lab project: when sending to eHealthBox, this is BeOrganization."
* performer ^definition = "The diagnostic service that is responsible for issuing the report. In the laboratory report, this is typically an organization (i.e. the laboratory)\r\nNote the Observation MAY have a different performer."
* resultsInterpreter 1.. MS
* resultsInterpreter only Reference(BePractitioner or BePractitionerRole or BeOrganization or CareTeam)
* resultsInterpreter ^short = "In the initial iteration of the Belgium lab project: when sending to eHealthBox, this is BePractitioner."
* specimen only Reference(BeSpecimenLaboratory)
* specimen MS
* result only Reference(BeObservationLaboratory)
* result MS
* media MS
* conclusion MS
* conclusionCode MS
* presentedForm MS


---

// File: input/fsh/profiles/BeLaboratoryReportComposition.fsh

Profile: BeLaboratoryReportComposition
Parent: Composition
Id: be-laboratory-report-composition
Title: "BeLaboratoryreportComposition"
Description: "Belgian profile for a composition - to use when a laboratory report is sent as FHIR Document"
* ^url = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-laboratory-report-composition"
* ^version = "0.0.7"
* ^status = #draft
* ^date = "2021-11-08T16:57:45+01:00"
* ^publisher = "HL7 Belgium"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7belgium.org"
* ^jurisdiction = $m49.htm#001
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1


* text.status = #empty
* identifier 1.. MS
* status MS
* type MS
* subject 1.. MS
* subject only Reference(Resource or BePatient)
* date MS
* author only Reference(Device or RelatedPerson or BePractitioner or BePractitionerRole or BePatient or BeOrganization)
* author MS
* title MS
* relatesTo MS
* section 1..1 MS
* section.entry 1..1 MS
* section.entry only Reference(BeLaboratoryReport)


---

// File: input/fsh/profiles/BeObservationLaboratory.fsh

Extension: BeReferenceRangeComment
Id: be-ext-referencerange-comment
Title: "Comment extension for ReferenceRange"
Description: "Extension that adds a comment to Observation.ReferenceRange"
* ^context[+].type = #element
* ^context[=].expression = "Observation.referenceRange"
* value[x] only BeCodedAnnotation

Profile: BeObservationLaboratory
//Parent: BeObservation
Parent: Observation
Id: be-observation-laboratory
Title: "BeObservationLaboratory"
Description: "Belgian profile for an observation in a laboratory report"
* ^url = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-observation-laboratory"
* ^version = "0.0.7"
* ^status = #draft
* ^date = "2021-11-08T16:57:45+01:00"
* ^publisher = "HL7 Belgium"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7belgium.org"
* ^jurisdiction = $m49.htm#001
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1


* text.status = #empty
* language MS
* identifier MS
* basedOn ^mustSupport = false
* partOf ^mustSupport = false
* status MS
* category MS
* code ^definition = "Describes what was observed. Sometimes this is called the observation \"name\".\r\n\r\nThe implementer SHALL adhere to the preferred codes to use.\r\nThe recommended codification used is LOINC as per the subset defined by the FPS Health, for the majority of commonly used lab measurements and demands. This subset is available on https://www.vas.ehealth.fgov.be/webretam/retam/home.htm\r\n\r\nIt is allowed to use multiple codes within the FHIR CodeableConcept datatype. But the first code given must follow the following rules.(Other codes given will be for information purposes.)\r\n\r\nThe actual observation is preferably coded in LOINC (subset as defined by FPS Health)\r\n\r\nIf that is not possible , ALBERT codes are used (subset as defined by FPS Health.) \r\n\r\nIf that is not possible,laboratory may send its own code plus obligatory a text element to further explain. \r\n\r\nIf that is not possible the kind of observation is expressed only in text (allowed but NOT RECOMMENDED)"
* code.coding ^slicing.discriminator.type = #value
* code.coding ^slicing.discriminator.path = "system"
* code.coding ^slicing.rules = #open
* subject only Reference(Group or Device or Location or BePatient)
* subject MS
* subject ^short = "In the initial iteration of the Belgium lab project: when sending to eHealthBox, this is BePatient."
* effective[x] MS
* issued MS
* performer only Reference(CareTeam or RelatedPerson or BePatient or BeOrganization or BePractitionerRole or BePractitioner)
* performer MS
* performer ^short = "In the initial iteration of the Belgium lab project: when sending to eHealthBox, this is BeOrganization or BePractitioner"
* value[x] MS
* dataAbsentReason MS
* interpretation MS
//* interpretation from be-vs-observation-interpretation
* note MS
* note only BeCodedAnnotation
* bodySite MS
* method MS
* specimen only Reference(BeSpecimenLaboratory)
* specimen MS
* device ^mustSupport = false
* referenceRange MS
* referenceRange.extension contains BeReferenceRangeComment named Comment 0..*
* hasMember only Reference(QuestionnaireResponse or MolecularSequence or BeObservationLaboratory)
* hasMember MS
* hasMember ^short = "In the initial iteration of the Belgium lab project: when sending to eHealthBox, this is BeObservationLaboratory"
* derivedFrom only Reference(DocumentReference or ImagingStudy or Media or QuestionnaireResponse or MolecularSequence or BeObservationLaboratory)
* derivedFrom MS
* derivedFrom ^short = "In the initial iteration of the Belgium lab project: when sending to eHealthBox, this can be  BeObservationLaboratory or Media"
* component MS
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code.coding.code"
* component ^slicing.rules = #open
* component contains
    relativeTimeQualifier 0..1 and
    substanceAmountQualifier 0..1 and
    productNameQualifier 0..1
* component[relativeTimeQualifier] ^short = "If a testing code does not include a time interval but needs one to qualify the code."
* component[relativeTimeQualifier].code.coding.system 1..
* component[relativeTimeQualifier].code.coding.system = "http://snomed.info/sct" (exactly)
* component[relativeTimeQualifier].code.coding.code 1..
* component[relativeTimeQualifier].code.coding.code = #118578006 (exactly)
* component[relativeTimeQualifier].code.coding.display 1..
* component[relativeTimeQualifier].code.coding.display = "Relative time" (exactly)
* component[relativeTimeQualifier].value[x] 1..
* component[relativeTimeQualifier].value[x] only Quantity
* component[relativeTimeQualifier].value[x] ^short = "UCUM"
* component[substanceAmountQualifier] ^short = "If a testing code does not include a substance amount but needs one to qualify the code"
* component[substanceAmountQualifier].code.coding.system 1..
* component[substanceAmountQualifier].code.coding.system = "http://snomed.info/sct" (exactly)
* component[substanceAmountQualifier].code.coding.code 1..
* component[substanceAmountQualifier].code.coding.code = #118555000 (exactly)
* component[substanceAmountQualifier].code.coding.display 1..
* component[substanceAmountQualifier].code.coding.display = "Substance amount" (exactly)
* component[substanceAmountQualifier].value[x] 1..
* component[substanceAmountQualifier].value[x] only Quantity
* component[substanceAmountQualifier].value[x] ^short = "UCUM"
* component[productNameQualifier] ^short = "If a testing code does not include a product name but needs one to qualify the code"
* component[productNameQualifier].code.coding.system 1..
* component[productNameQualifier].code.coding.system = "http://snomed.info/sct" (exactly)
* component[productNameQualifier].code.coding.code 1..
* component[productNameQualifier].code.coding.code = #774167006 (exactly)
* component[productNameQualifier].code.coding.display 1..
* component[productNameQualifier].code.coding.display = "Product name" (exactly)
* component[productNameQualifier].value[x] 1..
* component[productNameQualifier].value[x] only CodeableConcept or string
//stuff from BeObservation
* code only BeObservationCodeableConcept
* code MS
* code ^definition = "Describes what was observed. Sometimes this is called the observation \"name\".\r\n\r\nFor providing systems, it is RECOMMENDED to express this using a code and consuming software SHALL record this.\r\nIn general, it shall be noted SNOMED-CT is the preferred national terminology. Other coding systems remain allowed or MAY be preferred in specific flows (e.g. the use of LOINC codes to express a laboratory test.)"
//* subject only Reference(Patient or Group or Device or Location or BePatient)
//* performer 1..
//* performer only Reference(Practitioner or PractitionerRole or Organization or CareTeam or Patient or RelatedPerson or BePatient or BeOrganization or BePractitionerRole or BePractitioner)
//* performer ^comment = "References SHALL be a reference to an actual FHIR resource, and SHALL be resolveable (allowing for access control, temporary unavailability, etc.). Resolution can be either by retrieval from the URL, or, where applicable by resource type, by treating an absolute reference as a canonical URL and looking it up in a local registry/repository.\r\n\r\nSpecial remarks for KMEHR users:\r\nIn a KMEHR context, this would be 'author'."



---

// File: input/fsh/profiles/BeSpecimenLaboratory.fsh

Profile: BeSpecimenLaboratory
Parent: Specimen
Id: be-specimen-laboratory
Title: "BeSpecimenLaboratory"
Description: "Belgian profile for a specimen in a laboratory report. In some laboratory reports, specimen information is allowed to be minimal as many informations concerning the specimen are implied by the observations done."
* ^url = "https://www.ehealth.fgov.be/standards/fhir/lab/StructureDefinition/be-specimen-laboratory"
* ^version = "0.0.7"
* ^status = #draft
* ^date = "2021-11-08T16:57:45+01:00"
* ^publisher = "HL7 Belgium"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7belgium.org"
* ^jurisdiction = $m49.htm#001
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1


* text.status = #empty
* identifier MS
* identifier ^definition = "Business identifier for specimen is RECOMMENDED to include when available."
* status MS
* type MS
* type ^definition = "The kind of material that forms the specimen. RECOMMENDED to include."
* subject only Reference(Group or Device or Substance or Location or BePatient)
* subject MS
* subject ^short = "In the initial iteration of the Belgium lab project: when sending to eHealthBox, this is BePatient."
* receivedTime MS
* parent only Reference(BeSpecimenLaboratory)
* parent MS
* request MS
* collection MS
* collection.collected[x] ^mustSupport = false
* collection.duration ^mustSupport = false
* collection.quantity ^mustSupport = false
* collection.method ^mustSupport = false
* collection.bodySite ^mustSupport = false
* collection.fastingStatus[x] ^mustSupport = false
* processing ^short = "Processing and processing step details to include when not implicit from specimen."
* processing ^mustSupport = false
* container ^mustSupport = false
* condition MS
* note MS


---

// File: input/data/features.yml

---
feedback:
  - active: true
    type: "googleform"   
    label: "Feedback"   
    formUrl: https://docs.google.com/forms/d/e/1FAIpQLSdrWQl4Uhu7SbtCrEYdXI1cOEmPpKyKSVl7apgNIDIRm-kZ1g/viewform?usp=pp_url
    dashboard: 
      url: https://github.com/orgs/hl7-be/projects/7
      label: "Issues"
    parameters:
    - name: "'entry.1353807103'"
      value: encodeURIComponent($(document).attr('title'))
    - name: "'entry.247644557'"
      value: document.getElementById(id).textContent
    
    


---

