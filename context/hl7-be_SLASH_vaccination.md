File: repos/hl7-be_SLASH_vaccination/sushi-config.yaml

# ╭─────────────────────────────────ImplementationGuide-fish.json──────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource.                     │
# │  For a list of supported properties, see:                                                      │
# │  https://fshschool.org/docs/sushi/configuration/#full-configuration                            │
# │  SUSHI will use id as both id and packageId in the IG unless a                                 │
# │  specific packageId is also provided in this file.                                             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯


id: hl7.fhir.be.vaccination
canonical: https://www.ehealth.fgov.be/standards/fhir/vaccination
url: https://www.ehealth.fgov.be/standards/fhir/vaccination
name: BeVaccination
title: "HL7 Belgium Vaccination (Patient Dossier)"
description: Belgian Patient profiles
status: draft
license: CC0-1.0
date: 2023-06-25
version: 1.1.0
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
  email: support@be-ehealth-standards.atlassian.net

# ContactDetail is required by the template.
contact:
  - name: Message Structure
    telecom:
      - system: email
        value: support@be-ehealth-standards.atlassian.net
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
    Logical Models: artifacts.html#structures-logical-models
    Profiles: artifacts.html#structures-resource-profiles
    Extensions: artifacts.html#structures-extension-definitions
    Value Sets: artifacts.html#terminology-value-sets
    Code Systems: artifacts.html#terminology-code-systems
    Naming Systems: artifacts.html#terminology-naming-systems
    Examples: artifacts.html#example-example-instances
  Changes: changes.html
  History: https://www.ehealth.fgov.be/standards/fhir/vaccination/history.html
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
  path-expansion-params: Parameters-terminology-expansion.json
  display-warnings: true
# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
FSHOnly: false

# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#applyExtensionMetadataToRoot: false

dependencies:
  hl7.fhir.be.core: 2.1.2
  hl7.fhir.be.medication: 1.0.0
  hl7.fhir.be.core-clinical: 1.0.0

    


---

// File: input/pagecontent/guidance.md

### Must Support
'Must Support' is a concept specific to FHIR. The indication 'Must Support' means, that if the information in a field marked with 'Must Support' is present, the receiving system should do something useful with it, because this field contains information that the creators of the standard considered to be essential.

Do not confuse this marker with the cardinality. The cardinality is used to indicate if, and how many times a particular field should be present. A field can have cardinality 0..1, and still be 'Must Support'. The absence of the field is then equally meaningful as its presence.

### Location of Vaccination
The location of Vaccination is not provided as a separate field on vaccination. In order to express the location of the vaccination, i.e. the building where the vaccination was administered, an Encounter is used. Add the location in the Encounter.serviceProvider field if it is an organisation, or in the Encounter.location.location.type, if you want to use a code from [BeVSCareLocation](./ValueSet-be-vs-care-location.html). Use the Encounter and Location resources as contained resources.

### Pre- or postexposure
A vaccination can be administered in different conditions. One of these conditions regards the type of prophylaxis. The vaccination can be administered before there was any known exposure to the cause of the disease, or after the exposure to the cause of the disease, but at a moment when there are no indications of the disease. This can be indicated by using the field .reasonCode, with a value from the suggested valueset.

---

// File: input/fsh/BeVaccination-Covid-Examples.fsh

/* ====================================================================================================== */

Instance: demo-encounter-2
InstanceOf: Encounter
Usage: #example
* subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* subject.identifier.value = "16032376921"
* location[+].location = Reference(demo-location)
* status = #finished
* class = #AMB

Instance: demo-location
InstanceOf: Location
* type = https://www.ehealth.fgov.be/standards/fhir/vaccination/CodeSystem/be-cs-care-location#kind-gezin


Instance: org-pharmaceutical-company
InstanceOf: BeOrganization
Usage: #inline
Description: "Pharmaceutical Company Belgium"
* active = true
* name = "Pharmaceutical Company Belgium"
* identifier.value = "0407.622.902"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/cbe"

Instance: org-university
InstanceOf: BeOrganization
//Usage: #inline
Description: "Belgian Educational and Research Institution"
* active = true
* name = "Belgian Educational and Research Institution"
* identifier.value = "0418766123"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/cbe"



Instance: pfizer-s0001
InstanceOf: Medication
Usage: #inline
* id = "pfizer-s0001"
* code.coding = http://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/be-ns-cnk-codes#19013168
* identifier.system = "https://covid-vaccine-tracking.be/serialnumbers#034753633001"
* batch.lotNumber = "B037453"
* batch.expirationDate = "2020-06-30"

Instance: pfizer-s0002
InstanceOf: Medication
Usage: #inline
* id = "pfizer-s0002"
* code.coding = http://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/be-ns-cnk-codes#19013168
* identifier.system = "https://covid-vaccine-tracking.be/serialnumbers#034753633002"
* batch.lotNumber = "B037471"
* batch.expirationDate = "2020-08-31"

Instance: pfizer-s0003
InstanceOf: Medication
Usage: #inline
* id = "pfizer-s0003"
* code.coding = http://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/be-ns-cnk-codes#19013168
* identifier.system = "https://covid-vaccine-tracking.be/serialnumbers#034753633003"
* batch.lotNumber = "B037477"
* batch.expirationDate = "2020-09-30"



/*============================================= Example 1 =============================================*/
Instance: covid-jan-1
InstanceOf: BeVaccination
Usage: #example
Description: "Jan's first COVID-19 vaccination"
Title:   "Jan's first COVID-19 vaccination"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* contained[0] =  pfizer-s0001
* contained[+] = demo-encounter-2
* contained[+] = demo-location
* identifier.value = "134c357c-745b-4a55-43b5-3856240bc740"
* identifier.system = "https://www.ehealth.fgov.be/covid-vaccination/vaccination-register"
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "70072376921"
* recorded = "2020-02-22"
* encounter = Reference(demo-encounter-2)
* extension[administeredProduct].extension[lotNumber].valueString = "B037453"
* occurrenceDateTime = "2020-02-22"
////* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* performer[0].actor.identifier.value = "10829059"
* performer[0].actor.display = "Huisarts 1"
* vaccineCode.coding = $sct#28531000087107

//* protocolApplied.doseNumberPositiveInt = 1
//* protocolApplied.seriesDosesPositiveInt = 2
* extension[administeredProduct].extension[reference].valueReference = Reference(pfizer-s0001)
//* extension[vaccination-confirmationStatus].valueCode = #confirmed


/*============================================= Example 2 =============================================*/
Instance: covid-jan-2-discarded
InstanceOf: BeVaccination
Usage: #example
Description: "Jan's second failed COVID-19 vaccination"
Title:   "Jan's second failed COVID-19 vaccination"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* contained[0] =  pfizer-s0002
* contained[+] = demo-encounter-2
* contained[+] = demo-location
* identifier.value = "134c357c-745b-4a55-43b5-1248340bc711"
* identifier.system = "https://www.ehealth.fgov.be/covid-vaccination/vaccination-register"
* status = #not-done
* statusReason.coding = https://www.ehealth.fgov.be/standards/fhir/vaccination/CodeSystem/be-cs-vaccination-status-reason#OTHER
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "70072376921"
* recorded = "2020-03-22"
* encounter = Reference(demo-encounter-2)
* extension[administeredProduct].extension[lotNumber].valueString = "B037471"
* occurrenceDateTime = "2020-03-22"
//* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* performer[0].actor.identifier.value = "10829059"
* performer[0].actor.display = "Huisarts 1"
* vaccineCode.coding = $sct#28531000087107

//* protocolApplied.doseNumberPositiveInt = 1
//* protocolApplied.seriesDosesPositiveInt = 2
* extension[administeredProduct].extension[reference].valueReference = Reference(pfizer-s0002)
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

/*============================================= Example 3 =============================================*/
Instance: covid-jan-3
InstanceOf: BeVaccination
Usage: #example
Description: "Jan's second successful COVID-19 vaccination"
Title:   "Jan's second successful COVID-19 vaccination"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* contained[0] =  pfizer-s0003
* contained[+] = demo-encounter-2
* contained[+] = demo-location
* identifier.value = "134c357c-745b-4a55-43b5-3856240bc740"
* identifier.system = "https://www.ehealth.fgov.be/covid-vaccination/vaccination-register"
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "70072376921"
* recorded = "2020-03-24"
* encounter = Reference(demo-encounter-2)
* extension[administeredProduct].extension[lotNumber].valueString = "B037477"
* occurrenceDateTime = "2020-03-24"
//* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* performer[0].actor.identifier.value = "10829059"
* performer[0].actor.display = "Huisarts 1"
* vaccineCode.coding = $sct#28531000087107

//* protocolApplied.doseNumberPositiveInt = 1
//* protocolApplied.seriesDosesPositiveInt = 2
* extension[administeredProduct].extension[reference].valueReference = Reference(pfizer-s0003)
//* extension[vaccination-confirmationStatus].valueCode = #confirmed



---

// File: input/fsh/BeVaccination-Examples.fsh


/* 
========================================================== EXAMPLES ==========================================================
==============================================================================================================================
*/
Instance: demo-encounter
InstanceOf: Encounter
Usage: #example
* subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* subject.identifier.value = "16032376921"
* serviceProvider = Reference(org-regional-child-care-agency)
* status = #finished
* class = #AMB
* location.location = Reference(demo-location) 

Instance: angioedema
InstanceOf: Observation
Usage: #example
* subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* subject.identifier.value = "16032376921"
* code = $sct#41291007
* status = #final

Instance: fever
InstanceOf: Observation
Usage: #example
* subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* subject.identifier.value = "16032376921"
* code = $sct#386661006
* status = #final



/*============================================= Example 1 =============================================*/


/*============================================= Example 2 =============================================*/


/*============================================= Example 3 =============================================*/

/*============================================= Example 4 =============================================*/


/*============================================= Example 5 =============================================*/


/*============================================= Example 6 =============================================*/
/*============================================= Example 7 =============================================*/
/*============================================= Example 8 =============================================*/

/*============================================= Example 9 =============================================*/

/*============================================= Example 10 =============================================*/
/*============================================= Example 12 =============================================*/

/*============================================= Example 14 =============================================*/
/*============================================= Example 17 =============================================*/

/* 
========================================================== Other exmples ==========================================================
===================================================================================================================================
*/

Instance: iex1
InstanceOf: BeVaccination
Usage: #example
Description: "Toto normal vaccination"
Title:    "Immunization Example - 1. Toto normal"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #fr-BE
* identifier.value = "036a5f82-cad8-4b79-ae2b-a5f20374b60a"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #completed
* recorded = "2020-05-17"
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding.code = #911000221103
* vaccineCode.coding.system = "http://snomed.info/sct"
* vaccineCode.coding[1].code = #911000221103
* vaccineCode.coding[1].system = "http://snomed.info/sct"
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "16032367159"
* occurrenceDateTime = "2020-05-17"
/*
This will be sent to ONE
*/
Instance: iex2
InstanceOf: BeVaccination
Usage: #example
Description: "Juan normal vaccination"
Title:    "Immunization Example - 2. Juan normal"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #fr-BE
* identifier.value = "12345623"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #completed
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding.code = #911000221103
* vaccineCode.coding.system = "http://snomed.info/sct"
* patient.identifier.system = "https://one_naming_system"
* patient.identifier.value = "16032361521"
* occurrenceDateTime = "2020-05-17"
* recorded = "2020-05-17"

* vaccineCode.coding[1].code = #911000221103
* vaccineCode.coding[1].system = "http://snomed.info/sct"

/*
This will first get the consent refusal and will be posted on ONE
*/
Instance: iex3
InstanceOf: BeVaccination
Usage: #example
Description: "Juan normal vaccination"
Title:    "Immunization Example - 1. Toto normal"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #fr-BE
* identifier.value = "2971e099-4a47-4a8b-a725-e4889270a2d1"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #completed
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding.code = #911000221103
* vaccineCode.coding.system = "http://snomed.info/sct"
* patient.identifier.system = "https://one_naming_system"
* patient.identifier.value = "16032361521"
* occurrenceDateTime = "2020-05-17"
* recorded = "2020-05-17"

* vaccineCode.coding[1].code = #911000221103
* vaccineCode.coding[1].system = "http://snomed.info/sct"




Instance: immunization-example-1-hpv
InstanceOf: BeVaccination
Usage: #example
Description: "HPV vaccination example"
Title:    "Immunization Example - 1. HPV"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #fr-BE
* identifier.value = "12345623"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #completed
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding.code = #911000221103
* vaccineCode.coding.system = "http://snomed.info/sct"
//* patient = Reference(pia)
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"

* occurrenceDateTime = "2020-05-17"
* recorded = "2020-05-17"


Instance: immunization-example-tetanus-cautious-reinforcement
InstanceOf: BeVaccination
Usage: #example
Description: "Example of vaccination in unknown date by an organization"
Title:    "Immunization Example - 3. Emergency reinforcement"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #nl-BE
* identifier.value = "82786523"
* identifier.system = "https://www.uzgent.be/vaccinatie/register"
* status = #completed
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding = $sct#871742003
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"
//* patient = Reference(pia)
* extension[recorder].valueReference = Reference(org-research-hospital)
* performer.actor = Reference(org-research-hospital)
* recorded = "2020-05-17"
* occurrenceString = "Summer 2011"
* encounter = Reference(demo-encounter)


Instance: immunization-example-not-given-stock
InstanceOf: BeVaccination
Usage: #example
Description: "Example of vaccination not performed due to lack of stock"
Title:    "Immunization Example - 4. not done due to not enough stock. This can happen when there are surges or any disruption in the supply chain"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #nl-BE
* identifier.value = "6025645645645"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* status = #not-done
* statusReason.coding =  http://terminology.hl7.org/CodeSystem/v3-ActReason#OSTOCK
* statusReason.coding.display = "Geen voorraad"
* occurrenceDateTime = "2020-03-12"
* recorded = "2020-03-12"

* vaccineCode.coding = $sct#871822003
* vaccineCode.coding.display = "Hepatitis B"
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"
//* patient = Reference(pia)
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* performer.actor = Reference(org-regional-child-care-agency)
* encounter = Reference(demo-encounter)










Instance: immunization-example-not-given-contraindication
InstanceOf: BeVaccination
Usage: #example
Description: "Example of immunization not performed due to lack of stock"
Title:    "Immunization Example - 4. not done due to not enough stock. This can happen when there are surges or any disruption in the supply chain"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #nl-BE
* identifier.value = "6021840732"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #not-done
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* statusReason.coding = http://terminology.hl7.org/CodeSystem/v3-ActReason#MEDPREC
* occurrenceDateTime = "2020-03-25"
* recorded = "2020-05-26"
* vaccineCode.coding = $sct#871822003
* occurrenceDateTime = "2020-03-12"
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
// * occurrenceString = "Summer 2011"
* performer.actor = Reference(org-regional-child-care-agency)
* encounter = Reference(demo-encounter)
* note.text = "Patiënt heeft nu koorts, aanbevolen 1 ​​week te wachten"



Instance: immunization-example-not-given-refusal
InstanceOf: BeVaccination
Usage: #example
Description: "Example of vaccination not performed due to lack of stock"
Title:    "Immunization Example - 4. not done due to not enough stock. This can happen when there are surges or any disruption in the supply chain"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #nl-BE
* identifier.value = "2687758923"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #not-done
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding = $sct#871822003
* vaccineCode.coding.display = "Hepatitis B"
* occurrenceDateTime = "2020-03-12"
* recorded = "2020-03-12"

* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"
//* patient = Reference(pia)
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* performer.actor = Reference(org-regional-child-care-agency)
* encounter = Reference(demo-encounter)



Instance: immunization-example-mistaken-entry
InstanceOf: BeVaccination
Usage: #example
Description: "Example of vaccination entered in error"
Title:    "Immunization Example - Mistaken entry of measles when patient means rubeola"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #nl-BE
* identifier.value = "2687758923"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #entered-in-error
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding.code = #871765008
* vaccineCode.coding.system = "http://snomed.info/sct"
* vaccineCode.coding.display = "Measles vaccine"
* occurrenceString = "Summer 2018"
* recorded = "2020"

* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"
//* patient = Reference(pia)
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* performer.actor = Reference(org-regional-child-care-agency)
* encounter = Reference(demo-encounter)


Instance: immunization-example-mistaken-entry-update
InstanceOf: BeVaccination
Usage: #example
Description: "Example of vaccination entered in error"
Title:    "Immunization Example - Mistaken entry of measles when patient means rubeola"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #nl-BE
* identifier.value = "26877589231"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #not-done
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding.code = #871732000
* vaccineCode.coding.system = "http://snomed.info/sct"
* vaccineCode.coding.display = "Rubella vaccine"
* occurrenceString = "Summer 2018"
* recorded = "2020"

* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"
//* patient = Reference(pia)
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* performer.actor = Reference(org-regional-child-care-agency)
* encounter = Reference(demo-encounter)


Instance: immunization-example-prescribed-vaccination
InstanceOf: BeVaccination
Usage: #example
Description: "Example of vaccination entered in error"
Title:    "Immunization Example - Mistaken entry of measles when patient means rubeola"
* contained[+] = demo-encounter
* contained[+] = demo-location
* language = #nl-BE
* identifier.value = "26877589231"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #completed
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding.code = #911000221103
* vaccineCode.coding.system = "http://snomed.info/sct"
* vaccineCode.coding.display = "Rubella"
* occurrenceString = "Summer 2018"
* recorded = "2020-05-17"
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"
//* patient = Reference(pia)
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* performer.actor = Reference(org-regional-child-care-agency)
* encounter = Reference(demo-encounter)


Instance: observation-swelling
InstanceOf: Observation
Usage: #example
Description: "Example of vaccination reaction detail"
Title:    "Swelling and redness"
* language = #nl-BE
* status = #final
* code.coding[0].code = #41291007
* code.coding[0].system = "http://snomed.info/sct"

Instance: immunization-example-reaction-swelling
InstanceOf: BeVaccination
Usage: #example
Description: "Example of vaccination reaction"
Title:    "Immunization Example - Immediate reaction (swelling and redness) upon administration"
* contained[+] = demo-encounter
* contained[+] = demo-location
* language = #nl-BE
* identifier.value = "26877583455"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #completed
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding.code = #871765008
* vaccineCode.coding.system = "http://snomed.info/sct"
* vaccineCode.coding.display = "Measles"
* occurrenceDateTime = "2020-05-12"
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"
//* patient = Reference(pia)
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* performer.actor = Reference(org-regional-child-care-agency)
* encounter = Reference(demo-encounter)
* reaction.date = "2020-05-12"
* reaction.detail = Reference(observation-swelling)
* recorded = "2020-05-12"



/*===========================================================================================*/


/*============================================= Example 2 =============================================*/

Instance: othercode
InstanceOf: BeVaccination
Usage: #example
* identifier.system = "https://www.one.be/vaccination/immunisation-register"
* identifier.value = "e15cd3d6-cfd8-4f77-9c78-9eb1a0fe5671"
* status = #completed
* vaccineCode = https://www.ehealth.fgov.be/standards/fhir/vaccination/CodeSystem/be-cs-vaccine-code#other
* vaccineCode.text = "If value is other, this cannot be empty"
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "16032376921"
* occurrenceDateTime = "2016-07-04"
* recorded = "2016-07-04"
* extension[administeredProduct].extension[lotNumber].valueString  = "L00156"
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* performer[=].actor.identifier.value = "10829059"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
//* protocolApplied.doseNumberPositiveInt = 2
//* protocolApplied.seriesDosesPositiveInt = 4

---

// File: input/fsh/BeVaccination-MasterData.fsh


/* 
========================================================== MASTER DATA ==========================================================
 */





Instance: org-regional-child-care-agency
InstanceOf: BeOrganization
Usage: #example
Description: "Regional Child Care Agency"
Title:    "Regional Child Care Agency"
* active = true
* name = "Regional Child Care Agency"
* identifier.value = "457213512"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* telecom[0].system = #url
* telecom[0].value = "https://regional.child.care.agency.be"
* telecom[0].use = #work

Instance: org-research-hospital
InstanceOf: BeOrganization
Usage: #example
Description: "Research and Training Hospital"
Title:    "Research and Training Hospital"
* active = true
* name = "UZ Gent"
* identifier.value = "4342357223509"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* telecom[0].system = #url
* telecom[0].value = "https://research.and.training.hospital.be/"
* telecom[0].use = #work


/*
Instance: belgianVaccinationPlan
InstanceOf: PlanDefinition
Usage: #example
Description: "Belgian Standard vaccination schedule "
Title:    "Immunization Example - 1. Toto normal"
* status = #draft
*/

/*
2m/8 weeks: 
  hexavalent ()
  pneumo
  OPT: rotavirus
3m/12 weeks: 
  hexavalent
  OPT: rotavirus
 
4m/16 weeks: 
  hexavalent
  pneumo
  OPT: rotavirus
12m:
  MMR
15m : 
  hexavalent
  mening C
5-6y:
  quad: Polio + dypht+tetanus+
11-12y:
  MMR
13-14:
  HPV (2x)
15-16y: DTP

Pregnancy: DTP

every 10 years: T D

Age 65: pneumo + flu 
*/



/*
Instance: pia
InstanceOf: BePatient
Usage: #example
Description: "Patient Pia Peters"
Title:    "Pia Peters"
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier.value = "59050937740"
* name.family = "Peters"
* name.given = "Pia"
* gender = #female
*/

---

// File: input/fsh/codesystems/BeCSCareLocation.fsh

CodeSystem: BeCSCareLocation
Id: be-cs-care-location
Title: "BeCSCareLocation"
Description: "Care Location Code System"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false 
* #hospital "Hospital"
* #hospital ^designation[0].language = #fr-BE
* #hospital ^designation[=].value = "A l’hôpital"
* #hospital ^designation[+].language = #nl-BE
* #hospital ^designation[=].value = "Ziekenhuis"
* #patient-home "Patient home"
* #patient-home ^designation[0].language = #fr-BE
* #patient-home ^designation[=].value = "A domicile"
* #patient-home ^designation[+].language = #nl-BE
* #patient-home ^designation[=].value = "Thuis"
* #nursing-home "Nursing home"
* #nursing-home ^designation[0].language = #fr-BE
* #nursing-home ^designation[=].value = "En maison de repos"
* #nursing-home ^designation[+].language = #nl-BE
* #nursing-home ^designation[=].value = "Rusthuis"
* #recovery-home "Recovery home"
* #recovery-home ^designation[0].language = #fr-BE
* #recovery-home ^designation[=].value = "En maison de revalidation"
* #recovery-home ^designation[+].language = #nl-BE
* #recovery-home ^designation[=].value = "In huis van revalidatie"
* #workplace "Workplace"
* #workplace ^designation[0].language = #fr-BE
* #workplace ^designation[=].value = "Au cabinet"
* #workplace ^designation[+].language = #nl-BE
* #workplace ^designation[=].value = "In het kantoor"
* #medical-center "Medical center"
* #medical-center ^designation[0].language = #fr-BE
* #medical-center ^designation[=].value = "En maison médicale"
* #medical-center ^designation[+].language = #nl-BE
* #medical-center ^designation[=].value = "Medisch huis"
* #clinic "Clinic"
* #clinic ^designation[0].language = #fr-BE
* #clinic ^designation[=].value = "A la clinique"
* #clinic ^designation[+].language = #nl-BE
* #clinic ^designation[=].value = "Kliniek"
* #pediatric-ic "Pediatric ic"
* #pediatric-ic ^designation[0].language = #fr-BE
* #pediatric-ic ^designation[=].value = "En unité de soins intensive pédiatrique"
* #pediatric-ic ^designation[+].language = #nl-BE
* #pediatric-ic ^designation[=].value = "Pediatrische intensive care"
* #neonatal-ic "Neonatal ic"
* #neonatal-ic ^designation[0].language = #fr-BE
* #neonatal-ic ^designation[=].value = "En unité de soins intensive pédiatrique néonatal"
* #neonatal-ic ^designation[+].language = #nl-BE
* #neonatal-ic ^designation[=].value = "Neonatale pediatrische intensive care"
* #prenatal-consult "Prenatal consult"
* #prenatal-consult ^designation[0].language = #fr-BE
* #prenatal-consult ^designation[=].value = "Consultation prénatale"
* #prenatal-consult ^designation[+].language = #nl-BE
* #prenatal-consult ^designation[=].value = "prenataal consult"
* #m-accueil "m-accueil"
* #m-accueil ^designation[0].language = #fr-BE
* #m-accueil ^designation[=].value = "Milieu d’accueil"
* #m-accueil ^designation[+].language = #nl-BE
* #m-accueil ^designation[=].value = "kinderopvang"
* #child-consult "Child consult"
* #child-consult ^designation[0].language = #fr-BE
* #child-consult ^designation[=].value = "Consultation pour enfant"
* #child-consult ^designation[+].language = #nl-BE
* #child-consult ^designation[=].value = "kind consult"
* #one "ONE"
* #one ^designation[0].language = #fr-BE
* #one ^designation[=].value = "ONE"
* #one ^designation[+].language = #nl-BE
* #one ^designation[=].value = "ONE"
* #kind-gezin "Kind en gezin"
* #kind-gezin ^designation[0].language = #fr-BE
* #kind-gezin ^designation[=].value = "Kind&Gezin"
* #kind-gezin ^designation[+].language = #nl-BE
* #kind-gezin ^designation[=].value = "Kind&Gezin"
* #ambulance "Ambulance"
* #ambulance ^designation[0].language = #fr-BE
* #ambulance ^designation[=].value = "Ambulance"
* #ambulance ^designation[+].language = #nl-BE
* #ambulance ^designation[=].value = "Ambulance"
* #school "School"
* #school ^designation[0].language = #fr-BE
* #school ^designation[=].value = "A l’école"
* #school ^designation[+].language = #nl-BE
* #school ^designation[=].value = "School"
* #school-health-serv "School health services"
* #school-health-serv ^designation[0].language = #fr-BE
* #school-health-serv ^designation[=].value = "services de santé scolaire"
* #school-health-serv ^designation[+].language = #nl-BE
* #school-health-serv ^designation[=].value = "gezondheidsdiensten op school"
* #pharmacy "Pharmacy"
* #pharmacy ^designation[0].language = #fr-BE
* #pharmacy ^designation[=].value = "Pharmacie"
* #pharmacy ^designation[+].language = #nl-BE
* #pharmacy ^designation[=].value = "Apotheek"
* #med-monde "Med monde"
* #med-monde ^designation[0].language = #fr-BE
* #med-monde ^designation[=].value = "Médecin du monde"
* #med-monde ^designation[+].language = #nl-BE
* #med-monde ^designation[=].value = "dokters van de wereld"
* #ngo "Non-Governmental Organization"
* #ngo ^designation[0].language = #fr-BE
* #ngo ^designation[=].value = "ONG"
* #ngo ^designation[+].language = #nl-BE
* #ngo ^designation[=].value = "NGO"
* #family-planning "Family planning"
* #family-planning ^designation[0].language = #fr-BE
* #family-planning ^designation[=].value = "Centre planning familial"
* #family-planning ^designation[+].language = #nl-BE
* #family-planning ^designation[=].value = "Centrum gezinsplanning"
* #abroad "Abroad"
* #abroad ^designation[0].language = #fr-BE
* #abroad ^designation[=].value = "A l’étranger"
* #abroad ^designation[+].language = #nl-BE
* #abroad ^designation[=].value = "Buitenland"
* #other "other"
* #other ^designation[0].language = #fr-BE
* #other ^designation[=].value = "Autre"
* #other ^designation[+].language = #nl-BE
* #other ^designation[=].value = "Andere"


---

// File: input/fsh/codesystems/BeCSStatusReason.fsh

CodeSystem: BeCSStatusReason
Id: be-cs-vaccination-status-reason
Title: "BeCSStatusReason"
Description: "Vaccination reason status Code System."
* ^status = #draft
* ^content = #complete
* ^version = "0.1.0"
* ^caseSensitive = true
* ^experimental = false
* #OTHER "Other"
* #OTHER ^designation[0].language = #fr-BE
* #OTHER ^designation[=].value = "Autre"
* #OTHER ^designation[+].language = #nl-BE
* #OTHER ^designation[=].value = "Andere"
* #ALLERGY "Allergy to vaccine ingredient"
* #ALLERGY ^designation[0].language = #fr-BE
* #ALLERGY ^designation[=].value = "Allergie"
* #ALLERGY ^designation[+].language = #nl-BE
* #ALLERGY ^designation[=].value = "Allergie"

---

// File: input/fsh/codesystems/BeCSVaccinationAdministrationRoute.fsh

CodeSystem: BeCSVaccineAdministrationRoute
Id: be-cs-vaccination-administration-route
Title: "BeCSVaccineAdministrationRoute"
Description: "Vaccine Administration Route"
* ^version = "0.1.0"
* ^status = #draft
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* #IM "Instramuscular"
* #IM ^designation[0].language = #fr-BE
* #IM ^designation[=].value = "Intramusculaire"
* #IM ^designation[+].language = #nl-BE
* #IM ^designation[=].value = "Intramusculaire"
* #SC "Subcutaneous"
* #SC ^designation[0].language = #fr-BE
* #SC ^designation[=].value = "Sous-cutanée"
* #SC ^designation[+].language = #nl-BE
* #SC ^designation[=].value = "Subcutane"
* #IV "Intravenous"
* #IV ^designation[0].language = #fr-BE
* #IV ^designation[=].value = "intraveineuse"
* #IV ^designation[+].language = #nl-BE
* #IV ^designation[=].value = "intraveneus"
* #ID "Intradermal"
* #ID ^designation[0].language = #fr-BE
* #ID ^designation[=].value = "Intradermique"
* #ID ^designation[+].language = #nl-BE
* #ID ^designation[=].value = "Intradermale"
* #Oral "Oral"
* #Oral ^designation[0].language = #fr-BE
* #Oral ^designation[=].value = "Orale"
* #Oral ^designation[+].language = #nl-BE
* #Oral ^designation[=].value = "Mondeling"
* #Nasal "Nasal"
* #Nasal ^designation[0].language = #fr-BE
* #Nasal ^designation[=].value = "Nasal"
* #Nasal ^designation[+].language = #nl-BE
* #Nasal ^designation[=].value = "Nasaal"
* #unknown "Unknown"
* #unknown ^designation[0].language = #fr-BE
* #unknown ^designation[=].value = "Inconnu"
* #unknown ^designation[+].language = #nl-BE
* #unknown ^designation[=].value = "onbekend"




---

// File: input/fsh/codesystems/BeCSVaccinationConfirmationStatus.fsh

CodeSystem: BeCSVaccinationConfirmationStatus
Id: be-cs-vaccination-confirmation-status
Title: "BeCSVaccinationConfirmationStatus"
Description: "Vaccination status Code System."
* ^status = #draft
* ^content = #complete
* ^version = "0.1.0"
* ^caseSensitive = true
* ^experimental = false
* #unconfirmed "unconfirmed"
* #unconfirmed ^designation[0].language = #fr-BE
* #unconfirmed ^designation[=].value = "non confirmé"
* #unconfirmed ^designation[+].language = #nl-BE
* #unconfirmed ^designation[=].value = "niet bevestigd"
* #confirmed "confirmed"
* #confirmed ^designation[0].language = #fr-BE
* #confirmed ^designation[=].value = "confirmé"
* #confirmed ^designation[+].language = #nl-BE
* #confirmed ^designation[=].value = "bevestigd"
* #other "other"
* #other ^designation[0].language = #fr-BE
* #other ^designation[=].value = "autre"
* #other ^designation[+].language = #nl-BE
* #other ^designation[=].value = "andere"


---

// File: input/fsh/codesystems/BeCSVaccineCode.fsh

CodeSystem: BeCSVaccineCode
Id: be-cs-vaccine-code
Title: "BeCSVaccineCode"
Description:  "Vaccine Code Code System - set of Belgian codes for types of vaccines that are administered"
* ^caseSensitive = true
* ^experimental = false
* #other "other"





---

// File: input/fsh/codesystems/BeCSVaccineTargetDisease.fsh

CodeSystem: BeCSVaccineTargetDisease
Id: be-cs-vaccine-target-disease
Title: "BeCSVaccineTargetDisease"
Description:  "Vaccine Target Disease Code System - set of Belgian codes for diseases targeted by the vaccines"
* ^version = "0.1.0"
* ^status = #draft
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false


---

// File: input/fsh/extensions/BeAdministeredProduct.fsh

Extension: BeAdministeredProduct
Id: be-ext-administeredProduct
Title: "BeAdministeredProduct"
Description: "The product administered"
* ^context.type = #element
* ^context.expression = "Immunization"
* extension contains
    reference 0..1 MS and
    coded 0..1 MS and
    lotNumber 0..1 MS and
    expirationDate 0..1 MS
* extension[reference] ^short = "Reference to the administered product as a medication"
* extension[reference].value[x] only Reference(Medication)
* extension[coded] ^short = "Administered product as a code"
* extension[coded].value[x] only CodeableConcept
//* extension[coded].valueCodeableConcept from be-vs-vaccination-product (required)
* extension[lotNumber] ^short = "Lot number of the administered product, if it is a code"
* extension[lotNumber].value[x] only string
* extension[expirationDate] ^short = "Expiration date of the administered product, if it is a code"
* extension[expirationDate].value[x] only date
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1



---

// File: input/fsh/extensions/BeExtSimpleNote.fsh

Extension: BeExtSimpleNote
Id: be-ext-simple-note
Title: "BeExtSimpleNote"
Description: "Simple note extension if the element doesn't have a note. To be replaced by https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-ext-simple-note "
* ^context.type = #element
* ^context.expression = "Immunization"
* value[x] only Annotation
* valueAnnotation 0..1
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1  

---

// File: input/fsh/extensions/BeVaccinationConfirmationStatus.fsh

Extension: BeVaccinationConfirmationStatus
Id: be-ext-vaccination-confirmationStatus
Title: "BeVaccinationConfirmationStatus"
Description: "How certain/reliable is the vaccination information"
* ^context.type = #element
* ^context.expression = "Immunization"
* value[x] only code
* valueCode from be-vs-vaccination-confirmation-status (required)
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1

---

// File: input/fsh/extensions/BeVaccinationOriginalOrder.fsh

Extension: BeVaccinationOriginalOrder
Id: be-ext-vaccination-originalorder
Title: "BeVaccinationOriginalOrder"
Description: "A plan, proposal or order that is fulfilled in whole or in part by an event."
* ^context.type = #element
* ^context.expression = "Immunization"
* value[x] only Reference
* valueReference only Reference(ImmunizationRecommendation or MedicationRequest or CarePlan)
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1


---

// File: input/fsh/extensions/BeVaccinationStockFundingOrganization.fsh

Extension: BeVaccinationStockFundingOrganization
Id: be-ext-vaccination-stock-funding-organization
Title: "BeVaccinationStockFundingOrganization"
Description: "The funding source for the vaccine product."
* ^context.type = #element
* ^context.expression = "Immunization"
* value[x] only Reference(Organization)

* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1


---

// File: input/fsh/extensions/BeVaccinationStockLocation.fsh

Extension: BeVaccinationStockLocation
Id: be-ext-vaccination-stock-location
Title: "BeVaccinationStockOrigin"
Description: "The coded inventory location or type of inventory where the vaccine product was dispensed from."
* ^context.type = #element
* ^context.expression = "Immunization"
* value[x] only Reference(Location)

* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1


---

// File: input/fsh/instances/aymeric-rota1.fsh

Instance: aymeric-rota1
InstanceOf: BeVaccination 
Usage: #example 
Description: "Aymeric - rotavirus 1st dose"
Title:   "Aymeric - rotavirus 1st dose"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "20020142173"
* recorded = "2020-04-06"
* occurrenceDateTime = "2020-04-06"
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* performer[0].actor.identifier.value = "10829059"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871761004
//* protocolApplied.doseNumberPositiveInt = 1
//* protocolApplied.seriesDosesPositiveInt = 3
////* extension[vaccination-originalorder].valueReference = Reference(aymeric-rota)
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/aymeric-rota2.fsh

/*============================================= Example 15 =============================================*/
Instance: aymeric-rota2
InstanceOf: BeVaccination 
Usage: #example 
Description: "Aymeric - rotavirus 2nd dose"
Title:   "Aymeric - rotavirus 2nd dose"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "20020142173"
* recorded = "2020-05-04"
* occurrenceDateTime = "2020-05-04"
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* performer[0].actor.identifier.value = "10829059"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871761004
//* protocolApplied.doseNumberPositiveInt = 2
//* protocolApplied.seriesDosesPositiveInt = 3
////* extension[vaccination-originalorder].valueReference = Reference(aymeric-rota)
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/aymeric-rota3.fsh

/*============================================= Example 16 =============================================*/
Instance: aymeric-rota3
InstanceOf: BeVaccination 
Usage: #example 
Description: "Aymeric - rotavirus 3rd dose"
Title:   "Aymeric - rotavirus 3rd dose"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "20020142173"
* recorded = "2020-06-08"
* occurrenceDateTime = "2020-06-08"
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* performer[0].actor.identifier.value = "10829059"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871761004
//* protocolApplied.doseNumberPositiveInt = 3
//* protocolApplied.seriesDosesPositiveInt = 3
////* extension[vaccination-originalorder].valueReference = Reference(aymeric-rota)
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/BeNSOneVaccination.fsh

Instance: be-ns-one-vaccination
InstanceOf: NamingSystem
Usage: #definition
Description: "Naming System - ONE Vaccination"
* status = #active
* date = "2020-07-24"
* name = "BeNSONEVaccineCode"
* kind = #identifier
* description = "Naming System - ONE Vaccination"
* uniqueId[0].type = #uri
* uniqueId[0].value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/one-vaccination"
* uniqueId[0].preferred = true
* jurisdiction = urn:iso:std:iso:3166#BE

---

// File: input/fsh/instances/BeNSProductManufacturer.fsh

Instance: be-ns-product-manufacturer
InstanceOf: NamingSystem
Usage: #definition
Description: "Naming System - Product Manufacturer"
* status = #active
* date = "2020-07-24"
* name = "BeNSManufacturer"
* kind = #codesystem
* description = "Naming System - Product Manufacturer"
* uniqueId[0].type = #uri
* uniqueId[0].value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/product-manufacturer"
* uniqueId[0].preferred = true
* jurisdiction = urn:iso:std:iso:3166#BE

---

// File: input/fsh/instances/BeNSVaccinnetVaccineCode.fsh

Instance: be-ns-vaccinnet-vaccinecode
InstanceOf: NamingSystem
Usage: #definition
Description: "Naming System - Vaccinnet Vaccine Codes"
* status = #active
* name = "BeNSVaccinetVaccineCode"
* date = "2020-07-24"
* kind = #codesystem
* description = "Naming System - Vaccinnet Vaccine Codes"
* uniqueId[0].type = #uri
* uniqueId[0].value = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/vaccinnet-vaccinecode"
* uniqueId[0].preferred = true
* jurisdiction = urn:iso:std:iso:3166#BE


---

// File: input/fsh/instances/eva-hpv1-school.fsh

/*============================================= Example 10 =============================================*/
Instance: eva-hpv1-school
InstanceOf: BeVaccination 
Usage: #example 
Description: "Eva - HPV 1st dose"
Title:   "Eva - HPV 1st dose"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
//* contained = org-pharmaceutical-company
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "7061254428"
* recorded = "2019-09-05"
* occurrenceDateTime = "2019-09-05"
////* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.value = "Reference(School2)"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[=].code = $sct#911000221103
//* protocolApplied.doseNumberPositiveInt = 1
//* protocolApplied.seriesDosesPositiveInt = 2
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/eva-hpv2-school.fsh

/*============================================= Example 11 =============================================*/
Instance: eva-hpv2-school
InstanceOf: BeVaccination 
Usage: #example 
Description: "Eva - HPV 2nd dose"
Title:   "Eva - HPV 2nd dose"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
//* contained = org-pharmaceutical-company
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "7061254428"
* recorded = "2020-04-23"
* occurrenceDateTime = "2020-04-23"
////* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.value = "Reference(School2)"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #911000221103
//* protocolApplied.doseNumberPositiveInt = 2
//* protocolApplied.seriesDosesPositiveInt = 2
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/gabriel-flu.fsh

/*============================================= Example 17 =============================================*/
Instance: gabriel-flu
InstanceOf: BeVaccination 
Usage: #example 
Description: "Gabriel - influenza vaccine"
Title:   "Gabriel - influenza vaccine"
* extension[administeredProduct].extension[coded].valueCodeableConcept = https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/be-ns-cnk-codes#4670576
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "55011779911"
* recorded = "2019-10-11"
* occurrenceDateTime = "2019-10-11"
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* performer[0].actor.identifier.value = "15690937"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #1181000221105
//* protocolApplied.doseNumberString = "2020"
//* protocolApplied.seriesDosesString = "Yearly"
//* extension[vaccination-originalorder].valueReference = Reference(order-gabriel-flu)
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/immunization-example-childhood-measles.fsh

Instance: immunization-example-childhood-measles
InstanceOf: BeVaccination
Usage: #example
Description: "Example of vaccination in unknown date by unknown performer."
Title:    "Immunization Example - 2. childhood measles"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* language = #nl-BE
* identifier.value = "12345656523"
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* status = #completed
* performer[0].actor.identifier.use = #official
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "79121137740"
* vaccineCode.coding = $sct#871765008
//* patient = Reference(pia)
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "59050937740"

* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* recorded = "2020"

* occurrenceString = "Wanneer de patiënt 20 jaar oud was"
//* extension[be-ext-vaccination-location].valueCodeableConcept.text = "In Spain"

---

// File: input/fsh/instances/juan-hexa1-reported.fsh

/*============================================= Example 6 =============================================*/
Instance: juan-hexa1-reported
InstanceOf: BeVaccination 
Usage: #example 
Description: "Juan - 1st hexa (reported)"
Title:   "Juan - 1st hexa (reported)"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* identifier.value = "9fa7c8fd-318e-45ff-9373-5cdbe8e0f778"
* identifier.system = "https://www.one.be/vaccination/immunisation-register"
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/one-patientid"
* patient.identifier.value = "3564564568"
* recorded = "2016-05-30"
* encounter = Reference(demo-encounter)
* extension[administeredProduct].extension[lotNumber].valueString = "NA"
* occurrenceDateTime = "2016-05-30"
//* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.value = "Reference(Spain)"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871895005
//* protocolApplied.doseNumberPositiveInt = 1
//* protocolApplied.seriesDosesPositiveInt = 3
//* extension[vaccination-confirmationStatus].valueCode = #unconfirmed

---

// File: input/fsh/instances/juan-hexa2-reported-hospital.fsh

/*============================================= Example 7 =============================================*/
Instance: juan-hexa2-reported-hospital
InstanceOf: BeVaccination 
Usage: #example 
Description: "Juan - 2nd hexa (hospital)"
Title:   "Juan - 2nd hexa (hospital)"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* identifier.value = "093559dc-1aa9-4275-bcf1-f3161ccf9c24"
* identifier.system = "https://www.hospital1.be/vaccination/immunisation-register"
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/one-patientid"
* patient.identifier.value = "3564564568"
* recorded = "2016-07-29"
* extension[administeredProduct].extension[lotNumber].valueString = "NA"
* occurrenceDateTime = "2016-07-29"
//* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "12312312312"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871895005
//* protocolApplied.doseNumberPositiveInt = 2
//* protocolApplied.seriesDosesPositiveInt = 3
//* extension[vaccination-confirmationStatus].valueCode = #unconfirmed

---

// File: input/fsh/instances/juan-hexa3-skipped.fsh

/*============================================= Example 8 =============================================*/
Instance: juan-hexa3-skipped
InstanceOf: BeVaccination 
Usage: #example 
Description: "Juan - 3rd hexa (not done)"
Title:   "Juan - 3rd hexa (not done)"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* identifier.value = "0210448b-078e-43b4-8676-c582935ff565"
* identifier.system = "https://www.one.be/vaccination/immunisation-register"
* status = #not-done
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/one-patientid"
* patient.identifier.value = "3564564568"
* recorded = "2017-03-22"
* extension[administeredProduct].extension[lotNumber].valueString = "NA"
* occurrenceDateTime = "2017-03-22"
//* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "12312312312"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871895005
//* protocolApplied.doseNumberPositiveInt = 3
//* protocolApplied.seriesDosesPositiveInt = 3
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/juan-hexa4.fsh

/*============================================= Example 9 =============================================*/
Instance: juan-hexa4
InstanceOf: BeVaccination 
Usage: #example 
Description: "Juan - 3rd hexa (effective)"
Title:   "Juan - 3rd hexa (effective)"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* identifier.value = "75fe6a69-18b2-4660-ab57-93b17d51be18"
* identifier.system = "https://www.one.be/vaccination/immunisation-register"
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/one-patientid"
* patient.identifier.value = "3564564568"
* recorded = "2017-03-23"
* extension[administeredProduct].extension[lotNumber].valueString = "L43476"
* occurrenceDateTime = "2017-03-23"
//* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi-professional"
* performer[0].actor.identifier.value = "10829059"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871895005
//* protocolApplied.doseNumberPositiveInt = 3
//* protocolApplied.seriesDosesPositiveInt = 3
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/julia-refuse-hpv.fsh

/*============================================= Example 12 =============================================*/
Instance: julia-refuse-hpv
InstanceOf: BeVaccination 
Usage: #example 
Description: "Julia - refuse HPV"
Title:   "Julia - refuse HPV"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* status = #not-done
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "06092473240"
* recorded = "2019-09-05"
* occurrenceDateTime = "2019-09-05"
* performer[0].actor.identifier.value = "Reference(School2)"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #911000221103
//* protocolApplied.doseNumberPositiveInt = 1
//* protocolApplied.seriesDosesPositiveInt = 2
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/simon-hpv-at-work.fsh

Instance: simon-hpv-at-work
InstanceOf: BeVaccination 
Usage: #example 
Description: "Simon HPV - work"
Title:   "Simon HPV - work"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "80112136791"
* recorded = "2020-04-03"
* occurrenceDateTime = "2020-04-03"
* doseQuantity.value = 1
* performer[0].actor.identifier.value = "Reference(Company1)"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #911000221103
//* protocolApplied.doseNumberPositiveInt = 1
//* protocolApplied.seriesDosesPositiveInt = 1
//* extension[vaccination-originalorder].valueReference = Reference(order-simon-hpv)
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/terminology-expansion.fsh

Instance: terminology-expansion
InstanceOf: Parameters
Usage: #example
* parameter[+].name = "includeDesignations"
* parameter[=].valueBoolean = true

---

// File: input/fsh/instances/toto-hexa1.fsh

Instance: toto-hexa1
InstanceOf: BeVaccination 
Usage: #example 
Description: "Toto - First hexavalent vaccination"
Title:   "Toto - First hexavalent vaccination"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* identifier.value = "c448357c-cf6b-4a55-95c2-1618580bc391"
* identifier.system = "https://www.one.be/vaccination/immunisation-register"
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "16032376921"
* recorded = "2016-05-30"
* encounter = Reference(demo-encounter)
* extension[administeredProduct].extension[lotNumber].valueString = "L00156"
* occurrenceDateTime = "2016-05-30"
//* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "12312312312"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871895005
//* protocolApplied.doseNumberPositiveInt = 1
//* protocolApplied.seriesDosesPositiveInt = 4
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/toto-hexa2.fsh

/*============================================= Example 2 =============================================*/
Instance: toto-hexa2
InstanceOf: BeVaccination 
Usage: #example 
Description: "Toto - 2nd hexavalent vaccination"
Title:   "Toto - 2nd hexavalent vaccination"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* identifier.value = "e15cd3d6-cfd8-4f77-9c78-9eb1a0fe5671"
* identifier.system = "https://www.one.be/vaccination/immunisation-register"
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "16032376921"
* recorded = "2016-07-04"
* encounter = Reference(demo-encounter)
* extension[administeredProduct].extension[lotNumber].valueString = "L00156"
* occurrenceDateTime = "2016-07-04"
//* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "12312312312"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871895005
//* protocolApplied.doseNumberPositiveInt = 2
//* protocolApplied.seriesDosesPositiveInt = 4
//* extension[administeredProduct].extension[reference].valueReference.identifier.system = "http://snomed.info/sct"
//* extension[administeredProduct].extension[reference].valueReference.identifier.value = "3050176"
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/toto-hexa3.fsh

/*============================================= Example 3 =============================================*/
Instance: toto-hexa3
InstanceOf: BeVaccination 
Usage: #example 
Description: "Toto - 3rd hexavalent  vaccination"
Title:   "Toto - 3rd hexavalent  vaccination"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* identifier.value = "fb2e2bbb-6a25-4d02-b3d7-8ac0b3efb57b"
* identifier.system = "https://www.one.be/vaccination/immunisation-register"
* status = #completed
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "16032376921"
* recorded = "2016-09-01"
* encounter = Reference(demo-encounter)
* extension[administeredProduct].extension[lotNumber].valueString = "L00168"
* occurrenceDateTime = "2016-09-01"
//* manufacturer = Reference(org-pharmaceutical-company)
* doseQuantity.value = 1
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "12312312312"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871895005
//* protocolApplied.doseNumberPositiveInt = 3
//* protocolApplied.seriesDosesPositiveInt = 4
//* extension[vaccination-confirmationStatus].valueCode = #confirmed
* extension[administeredProduct].extension[coded].valueCodeableConcept.coding = http://whocc.no/atc#J07CA09 

---

// File: input/fsh/instances/toto-hexa4-skipped.fsh

/*============================================= Example 4 =============================================*/
Instance: toto-hexa4-skipped
InstanceOf: BeVaccination 
Usage: #example 
Description: "Toto - 4th hexavalent  vaccination - skipped (fever)"
Title:   "Toto - 4th hexavalent  vaccination - skipped (fever)"
* contained[+] = demo-encounter
* contained[+] = demo-location
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* identifier.value = "c3743217-7b07-4370-b5e2-3eb0f2af108a"
* identifier.system = "https://www.one.be/vaccination/immunisation-register"
* status = #not-done
* statusReason.coding.system = "http://terminology.hl7.org/CodeSystem/v3-ActReason"
* statusReason.coding.code = http://terminology.hl7.org/CodeSystem/v3-ActReason#MEDPREC
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "16032376921"
* recorded = "2017-06-16"
* reasonReference = Reference(fever)
* encounter = Reference(demo-encounter)
* occurrenceDateTime = "2017-06-16"
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "12312312312"
* vaccineCode.coding[0].system = "http://snomed.info/sct"
* vaccineCode.coding[0].code = #871895005
//* protocolApplied.doseNumberPositiveInt = 4
//* protocolApplied.seriesDosesPositiveInt = 4
//* extension[vaccination-confirmationStatus].valueCode = #confirmed

---

// File: input/fsh/instances/toto-hexa4-swelling.fsh

/*============================================= Example 5 =============================================*/
Instance: toto-hexa4-swelling
InstanceOf: BeVaccination 
Usage: #example 
Description: "Toto - 4th hexavalent vaccination"
Title:   "Toto - 4th hexavalent vaccination"
* contained[+] = angioedema 
* contained[+] = demo-encounter
* contained[+] = demo-location
* doseQuantity.value = 1
* encounter = Reference(demo-encounter)
* extension[administeredProduct].extension[lotNumber].valueString = "L16855"
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
* extension[recorder].valueReference = Reference(org-regional-child-care-agency)
//* extension[vaccination-confirmationStatus].valueCode = #confirmed
* identifier.system = "https://www.one.be/vaccination/immunisation-register"
* identifier.value = "1c4feb6a-275d-4029-9466-31b353710f84"
//* manufacturer = Reference(org-pharmaceutical-company)
* occurrenceDateTime = "2017-06-23"
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "16032376921"
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* performer[0].actor.identifier.value = "12312312312"
* reaction.date = "2017-06-23"
* reaction.detail = Reference (angioedema)
* recorded = "2017-06-23"
* status = #completed
* vaccineCode.coding[0].code = #871895005
* vaccineCode.coding[0].system = "http://snomed.info/sct"
//* protocolApplied.doseNumberPositiveInt = 4
//* protocolApplied.seriesDosesPositiveInt = 4


---

// File: input/fsh/instances/vaccinnet-1.fsh

Alias: $be-ns-cnk-codes = https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/be-ns-cnk-codes
Alias: $be-cs-vaccination-administration-route = https://www.ehealth.fgov.be/standards/fhir/vaccination/CodeSystem/be-cs-vaccination-administration-route

Instance: vaccinnet-1
InstanceOf: Immunization
Title: "Example based on data from Vaccinnet 1"
Usage: #example
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/vaccination/StructureDefinition/be-vaccination"
* language = #nl-BE
* extension[0].url = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-ext-recorder"
* extension[=].valueReference.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* extension[=].valueReference.identifier.value = "10182803004"
* extension[+].url = "https://www.ehealth.fgov.be/standards/fhir/vaccination/StructureDefinition/be-ext-administeredProduct"
* extension[=].extension.url = "coded"
* extension[=].extension.valueCodeableConcept = $be-ns-cnk-codes#1149939
* identifier.system = "https://www.kindengezin.be/vaccinatie/vaccination-register"
* identifier.value = "910C6BBCF1C13FA0434D15CCF5609AE8"
* status = #completed
* vaccineCode.coding.version = "http://snomed.info/sct/11000172109"
* vaccineCode.coding = $sct#871751006
* occurrenceDateTime = "2024-01-05"
* recorded = "2024-01-05"
* doseQuantity.value = 1
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "90083191801"
* encounter = Reference(demo-encounter-1)
* performer.actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* performer.actor.identifier.value = "10182803004"
* route = $be-cs-vaccination-administration-route#IM
* contained[0] = demo-location-1
* contained[+] = demo-encounter-1

Instance: demo-location-1
InstanceOf: Location
Usage: #inline
* address.country = "BEL"

Instance: demo-encounter-1
InstanceOf: Encounter
Usage: #inline
* status = #finished
* class.code = #AMB
* subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* subject.identifier.value = "16032376921"
* location.location = Reference(demo-location-1)

---

// File: input/fsh/logicals/BeVaccination-Model.fsh


Logical: BeModelVaccination
Parent: Element
Id: be-model-vaccination
* ^description = "Logical Model for vaccination"
* recorded 1..1 dateTime "The date and time when the administration of the vaccine was recorded" "The date and time when the administration of the vaccine was recorded - typically used when the vaccine event is recorded a posteriori."
* patient 1..1 Reference(Patient) "The patient that received vaccination." "The patient that has received the vaccination."
* vaccinationRequest 0..1 Reference "The patient-specific order or recommendation for the vaccination" "The patient-specific order or recommendation for the vaccination, for example a prescription or a request for vaccination for a patient by a physician, for example for optional vaccines."
* recorder 1..1 Reference(Practitioner) "The professional that recorded the administration of the vaccine" "The professional that recorded the administration of the vaccine."
* performer 0..1 Reference(Practitioner) "The professional that administered the medication" "The professional that administered the medication. Use code \"unknown\" if not known."
* vaccineCode 1..1 CodeableConcept "The vaccine code, typically identified by the diseas(s) it covers. For example MMR, HPV, Tetanus, DTPa" "The vaccine code - a type of vaccine, typically identified by the disease(s) it covers. For example MMR, HPV, Tetanus, DTPa. This should be a coded value."
* vaccinationDate[x] 0..1 dateTime or string "The date and time when the vaccination has been administered" "The date and/or time when the vaccine administration has been administered or presumed to be administered"
* administeredProduct 0..1 BackboneElement "The details of the product that was administered." "The details of the product that was administered"
* administeredProduct.product[x] 0..1 Reference or CodeableConcept "The actual product that was administered. This should be a product code or a reference to an actual Medication resource" "The actual product that was administered. This can be just text (not desired), or a code (e.g. 1696392 = Neisvac C Dos 0,5ml) or a reference to an actual Medication product (e.g. http://server/Medication/1696392)"
* administeredProduct.product[x] ^comment = "In the case where the product is not known, use code \"unknown\""
* administeredProduct.lotNumber 0..1 string "The lot number" "The lot number"
* administeredProduct.expirationDate 0..1 date "The expiration date of the product." "The expiration date of the product."
* route 0..1 CodeableConcept "The route of administration." "The route of administration for the vaccine. This can be free text (not desired) or a code"
* status 1..1 http://hl7.org/fhir/StructureDefinition/code "The status of this vaccination record entry" "The status of the vaccination record entry - whether it is active, entered in error, etc."
* statusReason 0..1 http://hl7.org/fhir/StructureDefinition/CodeableConcept "The reason for the status e.g. 'not completed because...'" "Supporting reason for status information."
* statusReason from https://www.ehealth.fgov.be/standards/fhir/vaccination/ValueSet/be-vs-vaccination-status-reason (required)
* statusReason ^binding.description = "Belgium codes to describe reasons considered for status of vaccination actions, e.g. reasons for not administering vaccine"
* reaction 0..1 BackboneElement "Reaction to the immunization - cfr. AllergyIntolerance"
* reaction.reactionDate 1..1 dateTime "date of the reaction"
* reaction.manifestation 0..1 Reference "reference to the observation of the reaction"
* doseQuantity 0..1 BackboneElement "The number or quantity of product(s) that was administered - e.g. 1/2 dose" "The number or quantity of product(s) that was administered - e.g. 1/2 dose, etc."
* note 0..1 http://hl7.org/fhir/StructureDefinition/Attachment "Additional notes for the vaccination." "Additional notes for the vaccination"
* site 1..1 CodeableConcept "The body site where the vaccination entered the body"
* identifier 0..* Identifier "The business identifier(s) for the vaccination entry" "The business identifier(s) for the vaccination entry - This is an optional attribute, used for example to track an entry throughout its lifecycle, or across vaults."
* bodyLaterality 0..1 CodeableConcept "The side of the body (for sites that occur on both sides of the body)"
* location 0..1 Reference "The location where the immunization is performed." "a resource (Location) if one exists e.g. 'Location/kind-en-gezin-092375' which could be defining 'Kind en Gezin Gent Koepoortkaai' "
* locationType 0..1 CodeableConcept "The location where the immunization administration was performed. This can be a text (e.g. 'at the physician's office' or a code e.g. '00078' meaning 'patient's home'"
* cause 0..1 CodeableConcept "Is the vaccination due to pre or post exposition prophylaxis?" "Is the vaccination due to pre or post exposition prophylaxis?"

* stockOrigin 0..1 Reference(Location) "The stock position where the product is originating from. This can be a specific location like a shelf, a warehouse, a building..."

* stockFundingEntity 0..1 Reference(Organization) "The entity that is funding the provision of the vaccines"




Mapping: BeModelVaccinationToBVaccination
Source: BeModelVaccination
Target: "https://www.ehealth.fgov.be/standards/fhir/vaccination/StructureDefinition/be-vaccination"
Id: map-be-model-vaccination-to-be-vaccination
Title: "BeModelVaccinationToBVaccination"
* -> "BeVaccination"
* recorded -> "recorded"
* patient -> "patient"
* vaccinationRequest -> "extension.be-ext-vaccination-originalorder"
* recorder -> "extension.be-ext-recorder"
* performer -> "performer"
* vaccineCode -> "vaccineCode"
* vaccinationDate[x] -> "occurrence"
* administeredProduct -> "extension.be-ext-administeredProduct"
* administeredProduct.product[x] -> "extension.be-ext-administeredProduct.code"
* administeredProduct.lotNumber -> "extension.be-ext-administeredProduct.batch.lotNumber"
* administeredProduct.expirationDate -> "extension.be-ext-administeredProduct.batch.expirationDate"
* route -> "route"
* status -> "status"
* statusReason -> "statusReason"
* reaction -> "reaction"
* reaction.manifestation -> "reaction.detail"
* reaction.reactionDate -> "reaction.date"
* note -> "note"
* identifier -> "identifier"
* doseQuantity -> "doseQuantity"
* location -> "extension.be-ext-vaccination-location"
* site -> "site"



Logical: BeModelVaccinationReduced
Parent: Element
Id: be-model-vaccination-reduced
* ^description = "Reduced Logical Model for vaccination"
* patient 1..1 Reference(Patient) "The patient that received vaccination." "The patient that has received the vaccination."
* performer 1..1 Reference(Practitioner) "The professional that administered the medication" "The professional that administered the medication. Use code \"unknown\" if not known."
* administeredProduct 1..1 BackboneElement "The details of the product that was administered." "The details of the product that was administered"
* administeredProduct.product 1..1 Coding "The code of the product that was administered." "The code of the product that was administered. This can be just text (not desired), or a code (e.g. 1696392 = Neisvac C Dos 0,5ml)."
* administeredProduct.description 1..1 string "The description of the product that was administered." "The description of the product that was administered."
* administeredProduct.lotNumber 0..1 string "The lot number" "The lot number"
* identifier 0..1 Identifier "The business identifier(s) for the vaccination entry" "The business identifier(s) for the vaccination entry - This is an optional attribute, used for example to track an entry throughout its lifecycle, or across vaults."
* vaccinationDate[x] 0..1 dateTime or string "The date and time when the vaccination has been administered" "The date and/or time when the vaccine administration has been administered or presumed to be administered"
* recorded 1..1 dateTime "The date and time when the administration of the vaccine was recorded" "The date and time when the administration of the vaccine was recorded - typically used when the vaccine event is recorded a posteriori."
* doseQuantity 0..1 BackboneElement "The number or quantity of product(s) that was administered - e.g. 1/2 dose" "The number or quantity of product(s) that was administered - e.g. 1/2 dose, etc."
* targetDisease 1..1 CodeableConcept "The target disease for this vaccination." "The target disease for this vaccination."
* sideEffects 0..1 Attachment "Any noted side effect from this vaccination." "Any noted side effect from this vaccination."
* cause 0..1 CodeableConcept "Is the vaccination due to pre or post exposition prophylaxis?" "Is the vaccination due to pre or post exposition prophylaxis?"



---

// File: input/fsh/profiles/BeVaccination.fsh

Profile:        BeVaccination
Parent:         Immunization
Id:             be-vaccination
Title:          "BeVaccination"
Description:    """ 
    Defines constraints and extensions on the immunization resource to represent an immunization event i.e. the administration of a vaccine."""

* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* status MS
* statusReason MS
* vaccineCode MS
* occurrenceDateTime MS
* occurrenceString MS
* recorded MS
* encounter MS
* lotNumber 0..0
* expirationDate 0..0 
* route MS
* protocolApplied MS
* reaction MS
* reaction.date 1..1
* reaction ^short = "Reaction immediately after vaccination (15-30 minutes)"
* site MS
* site from be-vs-vaccination-bodysite (required)
* site.extension contains BeExtLaterality named bodyLaterality 0..1
* route MS
* doseQuantity MS
* identifier 0..* MS
* identifier.system 1..1 MS
* identifier.value 1..1 MS
* patient 1..1 MS
* patient only Reference(BePatient)
* performer 0..1 MS
* performer.actor 1..1 
* performer.actor only Reference(BePractitioner or BeOrganization or BePractitionerRole)
* location 0..0
* ^jurisdiction.coding = urn:iso:std:iso:3166#BE

// changes 12-05
//* basedOn
//* instantiates..?
* identifier 0..*
* identifier ^short = "A unique business identifier for a vaccination entry"
* status ^short = "The status of this vaccination record entry"
* patient ^short = "The patient that this received vaccination entry refers to"
* vaccineCode ^short = "The vaccine code - a type of vaccine, typically identified by the diseas(s) it covers. For example MMR, HPV, Tetanus, DTPa"
* vaccineCode 1..1
* vaccineCode from be-vs-vaccine-code (required)
* protocolApplied 0..0
//* protocolApplied.doseNumberString ^short = "Whether this is a first vaccination or a reinforcement" 
//* protocolApplied.doseNumberString MS
//* protocolApplied.doseNumberPositiveInt ^short = "The numeric/sequential number of the dose, when adequate" 
//* protocolApplied.doseNumberPositiveInt MS
* recorded ^short = "The date/time when the vaccination event has been recorded"
* recorded 1..1
* extension contains BeVaccinationOriginalOrder named vaccination-originalorder 0..1
* extension contains BeAdministeredProduct named administeredProduct 0..1
* extension contains BeVaccinationConfirmationStatus named vaccination-confirmationStatus 0..1
* extension contains BeExtRecorder named recorder 1..1
* extension contains BeExtSimpleNote named note 0..1
* route from be-vs-vaccination-administration-route 
* statusReason from be-vs-vaccination-status-reason (required)

* extension contains BeVaccinationStockLocation named vaccination-stock-location 0..1
* extension contains BeVaccinationStockFundingOrganization named vaccination-stock-funding-organization 0..1


//* protocolApplied.targetDisease MS
//* protocolApplied.targetDisease from be-vs-vaccine-target-disease (example)

// Add extension: recordedString
// Add extension: type


// added 09-06
* reasonReference MS
* reasonReference ^short = "Why vaccination has occurred or not (reference to a finding)"
* reasonCode MS
* reasonCode from BeVSVaccinationReasonCode (preferred)
* reasonCode ^short = "Can be used to indicate whether vaccination/prophylaxis took place pre- or post-exposition"

// added constraint
* obeys be-rule-vaccination-1 and be-rule-vaccination-2 and be-rule-vaccination-3 and be-rule-vaccination-4


Invariant:   be-rule-vaccination-1
Description: "If vaccineCode.code is other, then vaccinecode text must exist"
Expression:  "(vaccineCode.coding.where(code = 'other').exists() or vaccineCode.coding.where(code = '787859002' and system = 'http://snomed.info/sct').exists() ) implies vaccineCode.text.exists()"
Severity:    #error


Invariant:   be-rule-vaccination-2
Description: "The product code SHALL be cnk, cti extended or atc"
Expression:  "(extension('https://www.ehealth.fgov.be/standards/fhir/vaccination/StructureDefinition/be-ext-administeredProduct').extension('coded').select($this.value as CodeableConcept)).exists().not() or (extension('https://www.ehealth.fgov.be/standards/fhir/vaccination/StructureDefinition/be-ext-administeredProduct').extension('coded').select($this.value as CodeableConcept)).coding.where(system = 'https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/be-ns-cnk-codes').exists()  or (extension('https://www.ehealth.fgov.be/standards/fhir/vaccination/StructureDefinition/be-ext-administeredProduct').extension('coded').select($this.value as CodeableConcept)).coding.where(system = 'https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/be-ns-cti-extended-code').exists() or (extension('https://www.ehealth.fgov.be/standards/fhir/vaccination/StructureDefinition/be-ext-administeredProduct').extension('coded').select($this.value as CodeableConcept)).coding.where(system = 'http://whocc.no/atc').exists()"
Severity:    #error

Invariant:   be-rule-vaccination-3
Description: "The reaction detail code SHALL come from be-vs-reaction-manifestation"
Expression:  "reaction.detail.empty() or reaction.detail.resolve().code.memberOf('https://www.ehealth.fgov.be/standards/fhir/core-clinical/ValueSet/be-vs-reaction-manifestation-code').anyTrue()"
Severity:    #error

Invariant:   be-rule-vaccination-4
Description: "If the encounter has a location, and it has a type, its type should be from be-vs-care-location"
Expression:  "encounter.empty() or encounter.resolve().location.empty() or encounter.resolve().location.location.resolve().type.empty() or encounter.resolve().location.location.resolve().type.coding.memberOf('https://www.ehealth.fgov.be/standards/fhir/vaccination/ValueSet/be-vs-care-location').anyTrue()"
Severity:    #error

---

// File: input/fsh/rules.fsh

Alias: $sct = http://snomed.info/sct|http://snomed.info/sct/11000172109

---

// File: input/fsh/valuesets/BeVSCareLocation.fsh

ValueSet: BeVSCareLocation
//Usage: #definition
Id: be-vs-care-location
Title: "BeVSCareLocation"
Description:  "Care Location Value Set"
//* ^status = #draft
* codes from system BeCSCareLocation
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^experimental = false


---

// File: input/fsh/valuesets/BeVSVaccinationBodySite.fsh

ValueSet: BeVSVaccinationBodySite
//Usage: #definition
Id: be-vs-vaccination-bodysite
Title: "BeVSVaccinationBodySite"
Description:  "Vaccination Body Site Value Set"
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"

* ^status = #draft
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^experimental = false
* ^copyright = """
*   This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org
"""
* include  $sct#35259002 
* include  $sct#50092008 
* include  $sct#102291007 
* include  $sct#371309009 
* include  $sct#5742000 
* include  $sct#371305003 


/*
* include  $sct#113345001
* include  $sct#53505006
* include  $sct#14975008
* include  $sct#45048000
* include  $sct#127949000
* include  $sct#29850006
* include  $sct#68367000
* include  $sct#82002001
* include  $sct#12406000
* include  $sct#83738005
* include  $sct#65531009
* include  $sct#76505004
* include  $sct#16982005
* include  $sct#52795006
* include  $sct#72696002
* include  $sct#29836001
* include  $sct#30021000
* include  $sct#60819002
* include  $sct#48477009
* include  $sct#32032005
* include  $sct#11681001
* include  $sct#85562004
* include  $sct#244015008
* include  $sct#1797002
* include  $sct#45206002
* include  $sct#45048000
* include  $sct#789698001
* include  $sct#81745001
* include  $sct#117590005
* include  $sct#78883009
* include  $sct#55078004
* include  $sct#78132007
* include  $sct#80349001
* include  $sct#39915008
* include  $sct#56459004
* include  $sct#66040006
* include  $sct#699698002
* include  $sct#76853006
* include  $sct#51185008
* include  $sct#55499008
* include  $sct#76784001
* include  $sct#18911002
* include  $sct#89545001
*/


---

// File: input/fsh/valuesets/BeVSVaccinationConfirmationStatus.fsh

ValueSet: BeVSVaccinationConfirmationStatus
//Usage: #definition
Id: be-vs-vaccination-confirmation-status
Title: "BeVSVaccinationConfirmationStatus"
Description:  "Vaccination status Value Set"
* ^status = #draft
* ^experimental = false
* codes from system BeCSVaccinationConfirmationStatus
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1

---

// File: input/fsh/valuesets/BeVSVaccinationProduct.fsh

ValueSet: BeVSVaccinationProduct
//Usage: #definition
Id: be-vs-vaccination-product
Title: "BeVSVaccinationProduct"
Description:  "Vaccination Product Value Set"
* ^status = #draft
* ^experimental = false
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1

---

// File: input/fsh/valuesets/BeVSVaccinationReasonCode.fsh

ValueSet: BeVSVaccinationReasonCode
Id: be-vs-vaccination-reason-code
//Usage: #definition
Title: "BeVSVaccinationReasonCode"
Description:  "Vaccination reason code Value Set - the reasons for an vaccination"
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ^status = #draft
* ^experimental = false
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^copyright = """
*   This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org
"""
* include  $sct#409516001  
* include  $sct#1137457009  


---

// File: input/fsh/valuesets/BeVSVaccinationStatusReason.fsh

ValueSet: BeVSVaccinationStatusReason
Id: be-vs-vaccination-status-reason
//Usage: #definition
Title: "BeVSVaccinationStatusReason"
Description:  "Vaccination status reason Value Set - the reasons for an vaccination status - typically representing the reason why a vaccination is not performed"
* ^status = #draft
* ^experimental = false
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* codes from system BeCSStatusReason
* include http://terminology.hl7.org/CodeSystem/v3-ActReason#IMMUNE "Immune"
* include http://terminology.hl7.org/CodeSystem/v3-ActReason#MEDPREC "Medical Precaution"
* include http://terminology.hl7.org/CodeSystem/v3-ActReason#OSTOCK "Out of Stock"
* include http://terminology.hl7.org/CodeSystem/v3-ActReason#PATOBJ "Patient Objection"


---

// File: input/fsh/valuesets/BeVSVaccineAdministrationRoute.fsh

ValueSet: BeVSVaccineAdministrationRoute
Id: be-vs-vaccination-administration-route
//Usage: #definition
Title: "BeVSVaccineAdministrationRoute"
Description:  "Vaccine Administration Route"
* ^status = #draft
* ^experimental = false
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* codes from system BeCSVaccineAdministrationRoute
* include http://terminology.hl7.org/CodeSystem/v3-NullFlavor#OTH "Other"


---

// File: input/fsh/valuesets/BeVSVaccineCode.fsh

ValueSet: BeVSVaccineCode
Id: be-vs-vaccine-code
Title: "BeVSVaccineCode"
Description: "Vaccine Code Value Set - the types of vaccines that are administered in Belgium"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^status = #active
* ^experimental = false
* ^copyright = """
*   This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org
"""
* ^compose.include[0].system = "https://www.ehealth.fgov.be/standards/fhir/vaccination/CodeSystem/be-cs-vaccine-code"
* ^compose.include[=].concept[0].code = #other

//50831000172102
//* ^compose.include[+].version = "http://snomed.info/sct/11000172109"
//* ^compose.include[=].system = "http://snomed.info/sct"
//* ^compose.include[=].filter[0].property = #"concept"
//* ^compose.include[=].filter[=].op = #"in"
//* ^compose.include[=].filter[=].value = "50831000172102"

* ^compose.include[+].system = "http://snomed.info/sct"
* ^compose.include[=].concept[+].code = #787859002
* ^compose.include[=].concept[=].display = "unspecified vaccine"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "Autre vaccin à spécifier"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Nader te specifieren vaccin"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Some vaccine to be specified"
* ^compose.include[=].concept[+].code = #836500008
* ^compose.include[=].concept[=].display = "Vaccine product containing only Haemophilus influenzae type b and Neisseria meningitidis serogroup C antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin divalent contre l'Haemophilus influenzae type b et le méningocoque C"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Haemophilus influenzae b en meningokok C"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Haemophilus influenzae type b and meningitis C vaccine"
* ^compose.include[=].concept[+].code = #871717007
* ^compose.include[=].concept[=].display = "Vaccine product containing only Yellow fever virus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la fièvre jaune"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Gele koorts"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Yellow fever vaccine"
* ^compose.include[=].concept[+].code = #871719005
* ^compose.include[=].concept[=].display = "Vaccine product containing only Tick-borne encephalitis virus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la méningoencéphalite à tiques"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Tekenencefalitis virus"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Tick-borne encephalitis vaccine"
* ^compose.include[=].concept[+].code = #871720004
* ^compose.include[=].concept[=].display = "Vaccine product containing only Dengue virus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la dengue"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Dengue"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Dengue vaccine"
* ^compose.include[=].concept[+].code = #871721000
* ^compose.include[=].concept[=].display = "Vaccine product containing only Ebolavirus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre l'Ebola"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Ebola"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Ebolavirus antigen only vaccine product"
* ^compose.include[=].concept[+].code = #871724008
* ^compose.include[=].concept[=].display = "Vaccine product containing only Japanese encephalitis virus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre le virus de l'encéphalite japonaise"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Japanse encephalitis"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Japanese encephalitis virus vaccine"
* ^compose.include[=].concept[+].code = #871726005
* ^compose.include[=].concept[=].display = "Vaccine product containing only Rabies lyssavirus antigen (medicinal product) |"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la rage"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Hondsdolheid"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Rabies vaccine"
* ^compose.include[=].concept[+].code = #871727001
* ^compose.include[=].concept[=].display = "Vaccine product containing only Vaccinia virus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la variole"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Variola (pokken)"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Vaccinia virus antigen only vaccine product"
* ^compose.include[=].concept[+].code = #871729003
* ^compose.include[=].concept[=].display = "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la diphtérie"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Difterie"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Diphtheria vaccine"
* ^compose.include[=].concept[+].code = #871732000
* ^compose.include[=].concept[=].display = "Vaccine product containing only Rubella virus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la rubéole"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Rubella"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Rubella vaccine"
* ^compose.include[=].concept[+].code = #871737006
* ^compose.include[=].concept[=].display = "Vaccine product containing only Mumps orthorubulavirus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre les oreillons"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Bof"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Mumps vaccine"
* ^compose.include[=].concept[+].code = #871739009
* ^compose.include[=].concept[=].display = "Vaccine product containing only Human poliovirus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la poliomyélite"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Polio"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Human poliovirus antigen only vaccine product"
* ^compose.include[=].concept[+].code = #871742003
* ^compose.include[=].concept[=].display = "Vaccine product containing only Clostridium tetani antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre le tétanos"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Tetanus"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Tetanus vaccine"
* ^compose.include[=].concept[+].code = #871751006
* ^compose.include[=].concept[=].display = "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre l'hépatite A"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Hepatitis A"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Hepatitis A vaccine"
* ^compose.include[=].concept[+].code = #871758000
* ^compose.include[=].concept[=].display = "Vaccine product containing only Bordetella pertussis antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la coqueluche"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Kinkhoest"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Pertussis vaccine"
* ^compose.include[=].concept[+].code = #871761004
* ^compose.include[=].concept[=].display = "Vaccine product containing only Rotavirus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre le rotavirus"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Rotavirus"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Rotavirus vaccine"
* ^compose.include[=].concept[+].code = #871764007
* ^compose.include[=].concept[=].display = "Vaccine product containing only Haemophilus influenzae type b antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre l'hemophilus influenzae de type B"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Haemophilus influenzae b"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Haemophilus influenzae type b vaccine"
* ^compose.include[=].concept[+].code = #871765008
* ^compose.include[=].concept[=].display = "Vaccine product containing only Measles morbillivirus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la rougeole"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Mazelen"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Measles vaccine"
* ^compose.include[=].concept[+].code = #"1209197008"
* ^compose.include[=].concept[=].display = "Vaccine product containing only Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 antigens"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre les papillomavirus humains (HPV) de type 6, 11, 16, 18, 31, 33, 45, 52 et 58"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "humaan papillomavirus  (HPV 6, 11, 16, 18, 31, 33, 45, 52 en 58)"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Human papillomavirus 6, 11, 16, 18, 31, 33, 45, 52 and 58 vaccine"
* ^compose.include[=].concept[+].code = #871803007
* ^compose.include[=].concept[=].display = "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin divalent contre l'hépatite A et B"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Hepatitis A + B"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Hepatitis A and B vaccine"
* ^compose.include[=].concept[+].code = #871804001
* ^compose.include[=].concept[=].display = "Vaccine product containing only Hepatitis A virus and Salmonella enterica subspecies enterica serovar Typhi antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la fièvre typhoïde et l'hépatite A"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Tyfus + hepatitis A"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Hepatitis A and typhoid vaccine"
* ^compose.include[=].concept[+].code = #871817003
* ^compose.include[=].concept[=].display = "Vaccine product containing only Measles morbillivirus and Rubella virus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin divalent contre la rougeole et la rubéole"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Mazelen + rubella"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Measles and rubella vaccine"
* ^compose.include[=].concept[+].code = #871822003
* ^compose.include[=].concept[=].display = "Vaccine product containing only Hepatitis B virus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre l'hépatite B"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Hepatitis B"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Hepatitis B vaccine"
* ^compose.include[=].concept[+].code = #871826000
* ^compose.include[=].concept[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin divalent contre la diphtérie et le tétanos"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Difterie + tetanus"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Diphtheria and tetanus vaccine"
* ^compose.include[=].concept[+].code = #871831003
* ^compose.include[=].concept[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin trivalent contre la rougeole, la rubéole et les oreillons"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Mazelen + bof + rubella"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Measles and mumps and rubella vaccine"
* ^compose.include[=].concept[+].code = #871837004
* ^compose.include[=].concept[=].display = "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin trivalent contre la diphtérie, le tétanos et la poliomyélite"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Difterie + tetanus + polio"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Diphtheria and poliomyelitis and tetanus vaccine"
* ^compose.include[=].concept[+].code = #871866001
* ^compose.include[=].concept[=].display = "Vaccine product containing only Neisseria meningitidis serogroup C antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre le méningocoque C"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Meningokok C"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Meningitis C vaccine"
* ^compose.include[=].concept[+].code = #871871008
* ^compose.include[=].concept[=].display = "Vaccine product containing only Neisseria meningitidis serogroup A and C antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre les méningocoques A et C"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Meningokok A, C"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Meningitis A and C vaccine"
* ^compose.include[=].concept[+].code = #871873006
* ^compose.include[=].concept[=].display = "Vaccine product containing only Neisseria meningitidis serogroup A, C, W135 and Y antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre les méningocoques A, C, W135 et Y"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Meningokok A, C, W en Y"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Meningitis A, C, W135 and Y vaccine"
* ^compose.include[=].concept[+].code = #871875004
* ^compose.include[=].concept[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin trivalent contre la diphtérie, le tétanos et la coqueluche"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Difterie + tetanus + kinkhoest"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Diphtheria and pertussis and tetanus vaccine"
* ^compose.include[=].concept[+].code = #871878002
* ^compose.include[=].concept[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin quadrivalent contre la diphtérie, le tétanos, la coqueluche et la poliomyélite"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Difterie + tetanus + kinkhoest + polio"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Diphtheria and pertussis and poliomyelitis and tetanus vaccine"
* ^compose.include[=].concept[+].code = #871886002
* ^compose.include[=].concept[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type b and Hepatitis B virus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pentavalent contre la diphtérie, le tétanos, la coqueluche, l'Haemophilus influenzae de type B et l'hépatite B"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Difterie + tetanus + kinkhoest + Haemophilus influenzae b + hepatitis B"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Diphtheria and Haemophilus influenzae type b and hepatitis B and pertussis and tetanus vaccine"
* ^compose.include[=].concept[+].code = #871887006
* ^compose.include[=].concept[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type b and Human poliovirus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pentavalent contre la diphtérie, le tétanos, la coqueluche, la poliomyélite et l'Haemophilus influenzae de type B"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Difterie + tetanus + kinkhoest + polio + Haemophilus influenzae b"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Diphtheria and Haemophilus influenzae type b and pertussis and poliomyelitis and tetanus vaccine"
* ^compose.include[=].concept[+].code = #871891001
* ^compose.include[=].concept[=].display = "Vaccine product containing only acellular Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Hepatitis B virus and inactivated whole Human poliovirus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pentavalent contre la diphtérie, le tétanos, la coqueluche, la poliomyélite et l'hépatite B"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Difterie + tetanus + kinkhoest + polio + hepatitis B"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Diphtheria and hepatitis B and acellular pertussis and inactivated poliomyelitis and tetanus vaccine"
* ^compose.include[=].concept[+].code = #871895005
* ^compose.include[=].concept[=].display = "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type b and Hepatitis B virus and Human poliovirus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin hexavalent contre la diphtérie, le tétanos, la coqueluche, la poliomyélite, l'Haemophilus influenzae de type B et l'hépatite B"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Difterie + tetanus + kinkhoest + polio + Haemophilus influenzae b + hepatitis B"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Diphtheria and Haemophilus influenzae type b and hepatitis B and pertussis and poliomyelitis and tetanus vaccine"
* ^compose.include[=].concept[+].code = #871908002
* ^compose.include[=].concept[=].display = "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin tetravalent contre la rougeole, la rubéole, les oreillons et la varicelle"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Mazelen + bof + rubella + windpokken"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Measles and mumps and rubella and varicella virus vaccine"
* ^compose.include[=].concept[+].code = #871919004
* ^compose.include[=].concept[=].display = "Vaccine product containing only Human alphaherpesvirus 3 antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la varicelle et le zona"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Windpokken"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Varicella-zoster vaccine"
* ^compose.include[=].concept[+].code = #1052328007
* ^compose.include[=].concept[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 4, 6B, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pneumococcique conjugué heptavalent"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Pneumokokken 7 types"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Pneumococcal 7-valent conjugate vaccine"
* ^compose.include[=].concept[+].code = #1052330009
* ^compose.include[=].concept[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 4, 5, 6B, 7F, 9V, 14, 18C, 19F, and 23F capsular polysaccharide antigens conjugated (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pneumococcique conjugué 10-valent"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Pneumokokken 10 types"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Pneumococcal 10-valent conjugate vaccine"
* ^compose.include[=].concept[+].code = #1119220001
* ^compose.include[=].concept[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, and 33F capsular polysaccharide antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pneumococcique non conjugué 23-valent"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Pneumokokken 23 types"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Pneumococcal 23-valent vaccine"
* ^compose.include[=].concept[+].code = #1119254000
* ^compose.include[=].concept[=].display = "Pneumococcal 13-valent vaccine"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pneumococcique non conjugué 13-valent"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Pneumokokken 13 types"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Pneumococcal 13-valent vaccine"
* ^compose.include[=].concept[+].code = #1252708008
* ^compose.include[=].concept[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, 22F, 23F, and 33F capsular polysaccharide conjugated antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pneumococcique conjugué 15-valent"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Pneumokokken 15 types"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Pneumococcal 15-valent conjugate vaccine"
* ^compose.include[=].concept[+].code = #1252709000
* ^compose.include[=].concept[=].display = "Vaccine product containing only Streptococcus pneumoniae Danish serotype 1, 3, 4, 5, 6A, 6B, 7F, 8, 9V, 10A, 11A, 12F, 14, 15B, 18C, 19A, 19F, 22F, 23F, 33F capsular polysaccharide antigens conjugated (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pneumococcique conjugué 20-valent"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Pneumokokken 20 types"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Pneumococcal 20-valent conjugate vaccine"
* ^compose.include[=].concept[+].code = #911000221103
* ^compose.include[=].concept[=].display = "Vaccine product containing only Human papillomavirus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre le papillomavirus humain"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Humaan papillomavirus"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Human papillomavirus vaccine"
* ^compose.include[=].concept[+].code = #921000221108
* ^compose.include[=].concept[=].display = "Vaccine product containing only Neisseria meningitidis antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre le méningocoque"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Meningokok"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Meningococcus vaccine"
* ^compose.include[=].concept[+].code = #961000221100
* ^compose.include[=].concept[=].display = "Vaccine product containing only Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la fièvre typhoïde"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Tyfus"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Typhoid vaccine"
* ^compose.include[=].concept[+].code = #981000221107
* ^compose.include[=].concept[=].display = "Vaccine product containing only Streptococcus pneumoniae antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin pneumococcique"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Pneumokokken"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Pneumococcal vaccine"
* ^compose.include[=].concept[+].code = #991000221105
* ^compose.include[=].concept[=].display = "Vaccine product containing only Vibrio cholerae antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre le choléra"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Cholera"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Cholera vaccine"
* ^compose.include[=].concept[+].code = #1181000221105
* ^compose.include[=].concept[=].display = "Vaccine product containing only Influenza virus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la grippe"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Griep"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Influenza vaccine"
* ^compose.include[=].concept[+].code = #1861000221106
* ^compose.include[=].concept[=].display = "Vaccine product containing only live attenuated Mycobacterium bovis antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la tuberculose"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Tuberculose (BSG)"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Bacillus Calmette-Guerin vaccine"
* ^compose.include[=].concept[+].code = #1981000221108
* ^compose.include[=].concept[=].display = "Vaccine product containing only Neisseria meningitidis serogroup B antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre le méningocoque B"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Meningokok B"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Meningococcus serogroup B vaccine"
* ^compose.include[=].concept[+].code = #1991000221106
* ^compose.include[=].concept[=].display = "Vaccine product containing only Human papillomavirus 16 and 18 antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre les papillomavirus humains de type 16 et 18"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "humaan papillomavirus (HPV 16, 18)"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Human papillomavirus 16 and 18 vaccine"
* ^compose.include[=].concept[+].code = #2001000221108
* ^compose.include[=].concept[=].display = "Vaccine product containing only Human papillomavirus 6, 11, 16 and 18 antigens (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre les papillomavirus humains de type 6, 11, 16 et 18"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "humaan papillomavirus (HPV 6, 11, 16, 18)"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Human papillomavirus 6, 11, 16 and 18 vaccine"
* ^compose.include[=].concept[+].code = #28531000087107
* ^compose.include[=].concept[=].display = "Vaccine product against severe acute respiratory syndrome coronavirus 2 (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la COVID-19"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "COVID19"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "SARS-CoV-2 vaccine"
* ^compose.include[=].concept[+].code = #1252703004
* ^compose.include[=].concept[=].display = "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre la rougeole et les oreillons"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "Mazelen + bof"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "Measles and mumps vaccine"
* ^compose.include[=].concept[+].code = #51311000087100
* ^compose.include[=].concept[=].display = "Vaccine product containing only Human orthopneumovirus antigen (medicinal product)"
* ^compose.include[=].concept[=].designation[0].language = #"fr-BE"
* ^compose.include[=].concept[=].designation[=].value = "vaccin contre le RSV"
* ^compose.include[=].concept[=].designation[+].language = #"nl-BE"
* ^compose.include[=].concept[=].designation[=].value = "RSV"
* ^compose.include[=].concept[=].designation[+].language = #"en"
* ^compose.include[=].concept[=].designation[=].value = "RSV (respiratory syncytial virus) vaccine"

---

// File: input/fsh/valuesets/BeVSVaccineTargetDisease.fsh

ValueSet: BeVSVaccineTargetDisease
Id: be-vs-vaccine-target-disease
Title: "BeVSVaccineTargetDisease"
Description:  "Vaccine Target Disease Value Set - the types of diseases that targeted by the vaccines"
* ^status = #draft
* ^experimental = false
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* codes from system BeCSVaccineTargetDisease

---

// File: input/data/features.yml

#---


---

