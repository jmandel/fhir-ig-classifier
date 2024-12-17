File: repos/hl7-be_SLASH_medication/sushi-config.yaml

# ╭─────────────────────────────────ImplementationGuide-fish.json──────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource.                     │
# │  For a list of supported properties, see:                                                      │
# │  https://fshschool.org/docs/sushi/configuration/#full-configuration                            │
# │  SUSHI will use id as both id and packageId in the IG unless a                                 │
# │  specific packageId is also provided in this file.                                             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯


id: hl7.fhir.be.medication
canonical: https://www.ehealth.fgov.be/standards/fhir/medication
# url: https://www.ehealth.fgov.be/standards/fhir/medication/ImplementationGuide-hl7.fhir.be.medication
name: Medication 
title: "Medication"
description: FHIR Medication specifications
status: draft
license: CC0-1.0
date: 2020-02-26
version: 1.1.0

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
  name: HL7 Belgium 
  url: https://www.hl7belgium.org
  email: hl7belgium@hl7belgium.org

# ContactDetail is required by the template.
contact:
  - name: Message Structure eHealth
    telecom:
      - system: email
        value: message-structure@ehealth.fgov.be
        use: work

# The jurisdiction can be a single item or a list. The FHIR Shorthand
# code syntax can be used here.

jurisdiction: urn:iso:std:iso:3166#BE "Belgium"
#jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"


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
  medicationrecord.md:
    title: Belgian Medication Record overview
  definitions.md:
    title: Definitions
  usecases-medicationrecord.md:
    title: Medication Record - Use cases
  medicationrecord-scenarios.md:
    title: Medication Record - Extended scenarios
  usecases-dispense.md:
    title: Dispense - Use cases
  howto.xml:
    title: How to read this specification
  downloads.xml:
    title: Downloads

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
#menu:
#  Home: index.html
#  Artifacts:
#    Profiles: artifacts.html#2
#    Extensions: artifacts.html#3
#    Value Sets: artifacts.html#4
#  Downloads: downloads.html
#  History: http://hl7.org/fhir/us/example/history.html

# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array. For a
# partial list of allowed parameters see:
# https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#parameters:
#  excludettl: true
#  validation: [allow-any-extensions, no-broken-links]

# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
FSHOnly: false

# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#applyExtensionMetadataToRoot: false

dependencies: 
  hl7.fhir.be.core: 2.0.1
  hl7.fhir.extensions.r5: 4.0.1

parameters:
  shownav: 'true'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'  




---

// File: input/pagecontent/definitions.md

The exchange of medication information needs to support the different use cases, which imply different concepts. It is important to establish the key terms so that the technical specifications can be understood. These are the definitions of the key terms used in this document. These definitions are not all authoritative, but they are valid in the scope of this document.

**Medication Record**: collection of information directly related to the patient's medication use, including past and/or present and/or future medication, etc. May contain validated medications, but also possibly pertinent information such as suspected allergies, past reactions, declared medications, etc. May be updated in real time with more information available in the systems of record.

**Medication Schema**: authored and signed document that affirms the patient's current or relevant medications at a given momend.

**Medication Treatment**: collection of all medications the patient was planned to take in the past, presently or in the future, not partitioned or grouped by pathology, planner, organization, etc.

**Medication Treatment Item**: represents a past, ongoing, or planned medication, including its name, dosage, frequency of intake, etc. as well as other information such as patient- and fulfilment instructions and substitution handling. A Medication Treatment Plan Item can trigger prescriptions, dispenses or medication administrations in order to fulfil the medication treatment planned.

---


---

// File: input/pagecontent/logical-models.md


The [Medication Dispense Logical Model](StructureDefinition-be-model-medicationdispense.html) represents a group of dispensed items for a dispense session.




---

// File: input/pagecontent/medicationrecord-pattern-1.md


In this use case.......

<div>
{% include usecase-medicationschema-1.svg %}
</div>

<br/>
<br/>


---

// File: input/pagecontent/medicationrecord-pattern-2.md


In this use case.......

<div>
{% include usecase-medicationschema-2.svg %}
</div>

<br/>
<br/>


---

// File: input/pagecontent/medicationrecord-pattern-3.md


In this use case.......

<div>
{% include usecase-medicationschema-3.svg %}
</div>

<br/>
<br/>


---

// File: input/pagecontent/medicationrecord-patterns.md


The following architectural patterns are supported with this specification:

### Consulting the Medication Schema for a patient
[Pattern 1](medicationrecord-pattern-1.html)
### Creating / updating the Medication Schema for a patient
[Pattern 2](medicationrecord-pattern-2.html)
### Updating the Medication Schema from other sources
[Pattern 3](medicationrecord-pattern-3.html)

<br/>
<br/>


---

// File: input/pagecontent/medicationrecord-requirements.md

Specific requirements 

|  | Requirement |
|----|----|
| **R1** | Medication record may include detailed process information (e.g. prescriptions and dispenses, with detailed traceability information), or summary information such as that reported by a patient or by a GP. |
| **R2** | Medication record may be processed, for example aggregated, reconciled, etc. and this should be exchanged transparently i.e. it should be possible to share processed information and to indicate that it is processed, as well as the provenance of the data. |
| **R3** | The aggregation of medication information may be done differently, with different rules <br/> *For example, medications may be aggregated by the active principle, or by active principle and indication for a more granular view*. These different approaches should be captured|
| **R4** | A prescription may be triggered by first defining and planning a treatment plan, or the treatment may be documented after a prescription or dispense. |
| **R5** | In different parts of the process, Medication may be represented differently <br/> *For example, a medication is prescribed by its active principle, and a branded product is dispensed.*|
| **R6** | Medication items can have a M:N relation type with indications|
| **R7** | Medication overviews may include different types of medication <br/>*for example, some overviews may include vaccines, anesthetics, and OTPs, while others may exclude some of these.* |
| **R8** | Medication overviews may include different periods <br/>*For example, some overviews may include only the recent medication, while others may include the patient's lifelong medication information*|
| **R9** | The way that medication information is exchanged should capture the meaning of the information (e.g. whether the information is a prescription or a paient-reported summary), 
| **R10** | The medication exchange information should reflect the status, (e.g. from planned vs ongoing), but should be exchanged in a consistent way across the status <br/> *For example, a medication that is planned but not yet prescribed should be summarized in a way that is consistent when it is prescribed, or  reported by the patient*|
{:.table-striped .table-bordered}


---

// File: input/pagecontent/medicationrecord-scenario-1.md

Scenario

This scenario shows the concurrent medication and the relevance in a medication overview that is independent of underlying indication, and can consider different pharmaceutical products.
This scenario also shows the value of medication terminologies, namely ATC. In this case, all the medications are different products, but they are all under ATC code A02BC.

* After a GP visit, the patient Pia Peters is prescribed a PPI (pantoprazole) for an ulcer.  

* A few days later, with his GP on vacation, the patient has an infection and the physician says the patient should take a PPI for protecting the stomach when taking antibiotics, and prescribes lanzoprazole.  

* When the GP is back, the daughter of Patient Pia Peters declares they have taken a PPI (omeprazole) for some time, when they have some gastric complaints.

This should result in a medication summary that can be grouped by the medication class, which allows a correct identification of concurrent medication.



---

// File: input/pagecontent/medicationrecord-scenario-2.md

Scenario

* Patient Paul Pauwels has hypertension and his physician prescribes him a predefined treatment.

The treatment protocol P5 consists of:  
First 4 weeks:  
- losartan, 50 mg, once a day  
- indapamide 1,5 mg once a day  
- amlodipine 5 mg once a day  
After 4 weeks:  
- if needed, increase losartan from 50 to 100 mg  
- maintain indapamide  
- maintain amlodipine  
<br/>
<br/>

The patient gets a  prescription for the 3 products.
After the pharmacy dispenses the medications, the patient starts the treatment.
After 4 weeks, the physician realizes that the patient's blood pressure justifies the increase of the dose for losartan, as per the protocol. The physician issues a new prescritpion but the patient still has the medication at home, so the physician tells the patient to simply start taking 2 tablets instead of one, until a few weeks later the patient goes to the pharmacy.




---

// File: input/pagecontent/medicationrecord-scenarios.md

Some scenarios show additional considerations to keep when implementing these resources. These more complex cases show how this specification can be used:

### Concurrent medications

This scenario shows the concurrent medication and the relevance in a medication overview that is independent of underlying indication, and can consider different pharmaceutical products.
This scenario also shows the value of medication terminologies, namely ATC. In this case, all the medications are different products, but they are all under ATC code A02BC.

* After a GP visit, the patient Pia Peters is prescribed a PPI (pantoprazole) for an ulcer.  

* A few days later, with his GP on vacation, the patient has an infection and the physician says the patient should take a PPI for protecting the stomach when taking antibiotics, and prescribes lanzoprazole.  

* When the GP is back, the daughter of Patient Pia Peters declares they have taken a PPI (omeprazole) for some time, when they have some gastric complaints.

**This should result in a medication record that can be grouped by the medication class, which allows a correct identification of concurrent medication**. It is for this reason that the medication has an explicit "classification" element.



### Protocols
* Patient Paul Pauwels has hypertension and his physician prescribes him a predefined treatment.

The treatment protocol P5 consists of:  
First 4 weeks:  
- losartan, 50 mg, once a day  
- indapamide 1,5 mg once a day  
- amlodipine 5 mg once a day  
After 4 weeks:  
- if needed, increase losartan from 50 to 100 mg  
- maintain indapamide  
- maintain amlodipine  
<br/>
<br/>

The patient gets a  prescription for the 3 products.
After the pharmacy dispenses the medications, the patient starts the treatment.
After 4 weeks, the physician realizes that the patient's blood pressure justifies the increase of the dose for losartan, as per the protocol. The physician issues a new prescritpion but the patient still has the medication at home, so the physician tells the patient to simply start taking 2 tablets instead of one, until a few weeks later the patient goes to the pharmacy.


<br/>
<br/>


---

// File: input/pagecontent/medicationrecord.md

The Belgian Medication Record is the evolution of the Medication Schema.  

It covers the functionality of the Medication Schema and enables the evolution towards a more detailed and comprehensive overview of a patient's medication, when adequate.  

<figure>
  {% include overview-BEModel.svg %}
</figure>


---


---

// File: input/pagecontent/StructureDefinition-be-model-medicationdispense-intro.md

### Relationship with other elements:

The Medication Line relates to the other data structures in the following way:
<figure>
  {% include overview-BEModel-short.svg %}
</figure>


* [Medication Line](StructureDefinition-be-model-medicationline.html) may refer to a [Medication Dispense](StructureDefinition-be-model-medicationdispense.html) that occurs in the treatment.

* [Medication Dispense](StructureDefinition-be-model-medicationdispense.html) may be the trigger for creating or updating a [Medication Line](StructureDefinition-be-model-medicationline.html).


---

// File: input/pagecontent/StructureDefinition-be-model-medicationdispense-notes.md

Detailed diagram:
<figure>
  {% include be-model-medicationline.svg %}
</figure>

---

// File: input/pagecontent/StructureDefinition-be-model-medicationline-intro.md

### Relationship with other elements:

The Medication Line relates to the other data structures in the following way:
<figure>
  {% include overview-BEModel-short.svg %}
</figure>


* [Medication Line](StructureDefinition-be-model-medicationline.html) may refer to a [Medication Dispense](StructureDefinition-be-model-medicationdispense.html) that occurs in the treatment.

* [Medication Dispense](StructureDefinition-be-model-medicationdispense.html) may be the trigger for creating or updating a [Medication Line](StructureDefinition-be-model-medicationline.html).


---

// File: input/pagecontent/StructureDefinition-be-model-medicationline-notes.md

Detailed diagram:
<figure>
  {% include be-model-medicationline.svg %}
</figure>

---

// File: input/pagecontent/StructureDefinition-KMEHRMS-intro.md

<div class="stu-note">
<p>
  Thís model reflects some key aspects of the KMEHR Medication Schema structure and their use. It is not an authoritative source. 
  It is just represented here as information, reflecting the discussions about a possible correspondence for mapping between KMEHR and FHIR.
  For a full documentation - technical or functional - of the Medication Schema in KMEHR, users should refer to the eHealth platform documentation.
  </p>
</div>


---

// File: input/pagecontent/usecases-dispense.md


The following use cases related to the Dispense process are supported with this specification:

### Registering a dispense
<div>
{% include usecase-dispense-1.svg %}
</div>
<br/>
The fundamental use case is the registration of a dispense by a healthcare professional or anyone in an organisation - in the latter case, the organization is considered the dispenser.
In this use case, the dispenser provides one BeMedicationDispense resource instance for each different medicinal product dispensed. More concretely, the following specific situations mayy occur:

#### Registering a dispense of a single item  

When a single product (one or more boxes but of the same product), systems are expected to issue a single instance of BeMedicationDispense, with a single Dispense GUID and a single Session GUID.
The quantity dispensed can be used to describe the amount of identical products dispensed: When two identical boxes of the same product are dispensed, it is possible to issue 2 BeMedicationDispense instances, or simply one instance with quantity = 2. When the products are not identical (e.g. they have different batch numbers and the pharmacy wants to register the batch number), this requires 2 instances of BeMedicationDispense resource.


#### Registering a dispense of several items in a single session  
When, during a visit to a pharmacy or during a dispense event (e.g. a preparation in a hospital), systems are expected to issue one instance of BeMedicationDispense for each distinct product (different products, or boxes of the same product but with different lot numbers). Each of these resources has a single Dispense GUID but they both share a single Session GUID. The dispensing systems are expected to be able to maintain the Session GUID for those 2 dispense records.


#### Registering a dispense of a magistral preparation  
When dispensing a magistral preparation (which implicitly includes or follows the step of preparing the medication), systems are expected to issue one instance of BeMedicationDispense for the medication, including a description of the preparation. Optionally, that preparation can be described by its ingredients which are represented as Medication resources that are ingredients of the main medication (the magistral preparation).


<br/>
<br/>

### Consulting the dispenses for a given patient
<div>
{% include usecase-dispense-2.svg %}
</div>

The other case directly supported is the consultation of a Dispense record (or several, for example query all dispenses for a patient, or all dispenses that are justified by a given prescription).
This use case is a simple use of the FHIR core functionalities of search and exchange. Any additional constraints or restrictions (e.g. bundling, or authorization) will be addressed when describing the technical details of each type of exchange, if necessary.


<br/>
<br/>


---

// File: input/pagecontent/usecases-medicationrecord.md


The following use cases related to the medication list are supported with this specification (this is not an exclusive list):

### Consulting a medication record
<div>
{% include usecase-medicationschema-1.svg %}
</div>
<br/>

The case of consulting a medication record is straighforward. The key data object to be retrieved is the Medication Line (or set of medication lines for the patient). Other variants may be added but the primary scenario when querying a medication record is about retrieving the medication lines.


<br/>
<br/>

### Updating a medication record
<div>
{% include usecase-medicationschema-2.svg %}
</div>

The complementary use case is of updating a medication record by updating the medication lines. The professional decides (or is informed) that the patient is expected to take medication (or has taken it). This triggers the creation of a Medication Line entry, which will be submitted and added to the list of the patient's Medication lines.



<br/>
<br/>

### Compiling a medication record
<div>
{% include usecase-medicationschema-3.svg %}
</div>

The alternative case (which may be combined with the previous) is the compilation of a medication record from different sources. This is a possible scenario in cross-border presscriptions, or in a transition phase where the information that exists is on prescriptions and dispenses, and it is far easier to be able to also retrieve these to recreate a patient's medication list, besides asking the patient.
In this case, the medication information is collected, from which the medication lines are created, and they are then updatedto the repository as per the other use cases.





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

// File: input/profiles/readme.md

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

Alias: $SCT = http://snomed.info/sct

---

// File: input/fsh/BeMedicationDispense-examples.fsh

Instance: example-dispense-communitypharmacy-1med
InstanceOf: MedicationDispense
Usage: #example
Description: "Medication Dispense example"
Title:    "Dispense entry Example - Community Pharmacy dispense, from prescription"
* meta.profile[0] = "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/be-medicationdispense"
* language = #fr-BE
* subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/ssin"
* subject.identifier.value = "64110219106"
* context.identifier.system = "https://www.gfd-dpp.be/fhir/reference/sguid"
* context.identifier.type.coding.code = #sguid
* context.identifier.value = "b8ca980c-72aa-11e7-8cf7-a6006ad3dba0"
* identifier[0].system = "https://www.gfd-dpp.be/fhir/reference/dguid"
* identifier[0].type.coding.code = #dguid
* identifier[0].value = "a8c45fdc-72aa-11e7-8cf7-a6007ad37dc0"
* status = #completed
* medicationCodeableConcept.coding[+].system = "https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/cnk-codes"
* medicationCodeableConcept.coding[=].code = #1439562
//* medicationCodeableConcept.coding[+].system = "http://www.whocc.no/atc"
//* medicationCodeableConcept.coding[=].code = #N05BA12
* medicationCodeableConcept.coding.display = "Topazolam tab 50x 1,0mg"

* medicationCodeableConcept.coding.display.extension[0].url = "http://hl7.org/fhir/StructureDefinition/translation"
* medicationCodeableConcept.coding.display.extension[0].extension[0].url = "lang"
* medicationCodeableConcept.coding.display.extension[0].extension[0].valueCode = #nl-BE
* medicationCodeableConcept.coding.display.extension[0].extension[1].url = "content"
* medicationCodeableConcept.coding.display.extension[0].extension[1].valueString = "Topazolam tab 50x 1,0mg"


* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-practitioner"
* performer[0].actor.identifier.value = "6547432"
* performer[0].actor.display = "Jan Janssen"

* performer[1].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-organization"
* performer[1].actor.identifier.value = "27457532"
* performer[1].actor.display = "Apotheek onder de toren"


* authorizingPrescription.display = "Prescription 2014fd"
* authorizingPrescription.identifier.value = "2d8dab92-5c38-4380-96a9-e461be2014fd"
* authorizingPrescription.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/prescription-id"
* quantity.value = 1
* quantity.system = "https://www.gfd-dpp.be/fhir/reference/packaging"
* quantity.code = #package

* whenHandedOver = "2020-03-10"
* dosageInstruction.text = "3 x par jour"
* dosageInstruction.text.extension[0].url = "http://hl7.org/fhir/StructureDefinition/translation"
* dosageInstruction.text.extension[0].extension[0].url = "lang"
* dosageInstruction.text.extension[0].extension[0].valueCode = #nl-BE
* dosageInstruction.text.extension[0].extension[1].url = "content"
* dosageInstruction.text.extension[0].extension[1].valueString = "3 x per dag"



Instance: apotheek-onder-de-toren
InstanceOf: BeOrganization
Description: "Example organization for a pharmacy"
Usage: #example
/*
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/geolocation"
* extension[0].extension[0].url = "latitude"
* extension[0].extension[0].valueDecimal = 51.239847
* extension[0].extension[1].url = "longitude"
* extension[0].extension[1].valueDecimal = 3.319952
*/
* identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-organization"
* identifier.value = "27457532"
* type.coding.system = "https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty"
* type.coding.code = $hcparty#orgpharmacy



Instance: medicationdispense-example-2
InstanceOf: MedicationDispense
Usage: #example
Description: "Medication Dispense example"
Title:    "Dispense entry Example - Community Pharmacy dispense, from prescription, with contained org."
* meta.profile[0] = "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/be-medicationdispense"
* contained[0] = apotheek-onder-de-toren
* language = #nl-BE
* subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/ssin"
* subject.identifier.value = "64110219106"
* context.identifier.system = "https://www.gfd-dpp.be/fhir/reference/sguid"
* context.identifier.type.coding.code = #sguid
* context.identifier.value = "b8ca980c-72aa-11e7-8cf7-a6006ad3dba0"
* identifier[0].system = "https://www.gfd-dpp.be/fhir/reference/dguid"
* identifier[0].type.coding.code = #dguid
* identifier[0].value = "a8ca980c-aa4f-44f3-8cf7-547e6ad3dba0"
* status = #completed
* medicationCodeableConcept.coding.system = "https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/cnk-codes"
* medicationCodeableConcept.coding.code = #1439562
* medicationCodeableConcept.coding.display = "Topazolam tab 50x 1,0mg"
* medicationCodeableConcept.coding.display.extension[0].url = "http://hl7.org/fhir/StructureDefinition/translation"
* medicationCodeableConcept.coding.display.extension[0].extension[0].url = "lang"
* medicationCodeableConcept.coding.display.extension[0].extension[0].valueCode = #nl-BE
* medicationCodeableConcept.coding.display.extension[0].extension[1].url = "content"
* medicationCodeableConcept.coding.display.extension[0].extension[1].valueString = "Topazolam tab 50x 1,0mg"

* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-organization"
* performer[0].actor.identifier.value = "27457532"
* performer[0].actor.display = "Apotheek onder de toren"
* performer[0].actor.reference = "#apotheek-onder-de-toren"

* authorizingPrescription.display = "Prescription"
* quantity.value = 1
* quantity.system = "https://www.gfd-dpp.be/fhir/reference/packaging"
* quantity.code = #package

* whenHandedOver = "2020-03-10"
* dosageInstruction.text = "3 x per dag"
* dosageInstruction.text.extension[0].url = "http://hl7.org/fhir/StructureDefinition/translation"
* dosageInstruction.text.extension[0].extension[0].url = "lang"
* dosageInstruction.text.extension[0].extension[0].valueCode = #fr-BE
* dosageInstruction.text.extension[0].extension[1].url = "content"
* dosageInstruction.text.extension[0].extension[1].valueString = "3 x par jour"



Instance: example-dispense-hospital
InstanceOf: MedicationDispense
Usage: #example
Description: "A dispense from a hospital pharmacy, with a hospital nihdi and based on a prescription"
Title: "A dispense from a hospital pharmacy"
//Created from the concept on http://build.fhir.org/ig/hl7-be/hl7-be-fhir-medication/StructureDefinition-be-medicationdispense.html
//* id = 
* meta.versionId = "1"
* meta.profile[0] = "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/be-medicationdispense"
//* implicitRules = 
* language = #nl-BE
//* text = 
//* contained = 
//* extension = 
//* modifierExtenstion = 
* identifier[0].system = "https://www.gfd-dpp.be/fhir/reference/dguid" //If this is a local identifier, then constraining this is hard. a hospital presription will NOT have a dguid, we could gen a guid, which is extra
//* identifier[0].type.coding[0].id =  //Where does this come from? Coding doesn't have an id - https://www.hl7.org/fhir/datatypes.html#Coding, looks to be unique to extensions
* identifier[0].type.coding[0].system = "https://www.nexuzhealth.be/fhir/prescription/ambulatory"
* identifier[0].type.coding[0].code = #dguid
* identifier[0].value = "1000321345"
* identifier[0].type.coding[0].version = "1"
* status = #completed
//* category.system = "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category"
//* category.code = "discharge"
//* category.version = "4.0.1"
// Implementing the medication concept feels kind of weird, beMedication of cnkMedication should be hammered down in a profile imo
// See http://build.fhir.org/ig/hl7-be/hl7-be-fhir-medication/StructureDefinition-be-medicationdispense.html
// This profile does not yet exist
* medicationCodeableConcept.coding.system = "https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/cnk-codes"
* medicationCodeableConcept.coding.code = #2055218
//].medicationCodeableConcept.coding.display = //Display and extended display both needed? extended only needed in special cases? magistral medication? 
* medicationCodeableConcept.coding.display.extension[0].url = "http://hl7.org/fhir/StructureDefinition/translation"
* medicationCodeableConcept.coding.display.extension[0].extension[0].url = "lang"
* medicationCodeableConcept.coding.display.extension[0].extension[0].valueCode = #nl-BE
* medicationCodeableConcept.coding.display.extension[0].extension[1].url = "content"
* medicationCodeableConcept.coding.display.extension[0].extension[1].valueString = "Crestor filmomh. tabl. 100x 10mg"

* subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/ssin"
* subject.identifier.value = "64110219106"

* performer.actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-organization"
* performer.actor.identifier.value = "123123123"



//* context.identifier = ...
* authorizingPrescription.display = "Prescription"
* authorizingPrescription.identifier.value = "BEP1TSRY1XGE"
* authorizingPrescription.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/prescription-id" //Recip-e ID
//* type = 
* quantity.value = 1 
* quantity.unit = "package"
* quantity.system = "http://unitsofmeasure.org"
* quantity.code = #1
//dayssupply
//whenPrepared
* whenHandedOver = "2020-09-21T13:00:00+02:00"
//Destination
//Receiver 
* dosageInstruction.text = "3 x a day"
* dosageInstruction.timing.repeat.frequency = 3
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.text.extension[0].url = "http://hl7.org/fhir/StructureDefinition/translation"
* dosageInstruction.text.extension[0].extension[0].url = "lang"
* dosageInstruction.text.extension[0].extension[0].valueCode = #nl-BE
* dosageInstruction.text.extension[0].extension[1].url = "content"
* dosageInstruction.text.extension[0].extension[1].valueString = "3 x per dag"
* dosageInstruction.text.extension[1].url = "http://hl7.org/fhir/StructureDefinition/translation"
* dosageInstruction.text.extension[1].extension[0].url = "lang"
* dosageInstruction.text.extension[1].extension[0].valueCode = #fr-BE
* dosageInstruction.text.extension[1].extension[1].url = "content"
* dosageInstruction.text.extension[1].extension[1].valueString = "3 x par jour"


/*
* An example of a medication dispense with the minimal amount of necessary information
*/ 
Instance: example-minimal-dispense
InstanceOf: MedicationDispense
Usage: #example
Description: "Medication Dispense example"
Title:    "Dispense Example - Minimal amount of information"
* meta.profile[0] = "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/be-medicationdispense"
* subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/ssin"
* subject.identifier.value = "64110219106"
* status = #completed
* medicationCodeableConcept.coding.system = "https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/cnk-codes"
* medicationCodeableConcept.coding.code = #1439562
* medicationCodeableConcept.coding.display = "Topazolam tab 50x 1,0mg"
* performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-practitioner"
* performer[0].actor.identifier.value = "6547432"
* performer[0].actor.display = "Jan Janssen"
* whenHandedOver = "2020-03-10"

// Instance: example-dispense-with-atc
// InstanceOf: MedicationDispense
// Usage: #example
// Description: "Medication Dispense example with ATC code"
// Title:    "Dispense Example - Minimal amount of information"
// * meta.profile[0] = "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/be-medicationdispense"
// * subject.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/ssin"
// * subject.identifier.value = "64110219106"
// * status = #completed
// * medicationCodeableConcept.coding[+].system = "https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/cnk-codes"
// * medicationCodeableConcept.coding[=].code = #1439562
// //* medicationCodeableConcept.coding[+].system = "http://www.whocc.no/atc"
// //* medicationCodeableConcept.coding[=].code = #N05BA12
// * medicationCodeableConcept.coding.display = "Topazolam tab 50x 1,0mg"
// * performer[0].actor.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-practitioner"
// * performer[0].actor.identifier.value = "6547432"
// * performer[0].actor.display = "Jan Janssen"
// * whenHandedOver = "2020-03-10"


Alias: $cnk-codes = https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/cnk-codes

Instance: medicationdispense-example-1
InstanceOf: MedicationDispense
Usage: #example
* meta.profile = "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/be-medicationdispense"
* language = #fr-BE
* subject.identifier
  * system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/ssin"
  * value = "64110219106"
* context.identifier
  * system = "https://www.gfd-dpp.be/fhir/reference/sguid"
  * type.coding.code = #sguid
  * value = "b8ca980c-72aa-11e7-8cf7-a6006ad3dba0"
* identifier
  * system = "https://www.gfd-dpp.be/fhir/reference/dguid"
  * type.coding.code = #dguid
  * value = "a8ca980c-72aa-11e7-8cf7-a6006ad3dba0"
* status = #completed
* medicationCodeableConcept.coding = $cnk-codes#1439562 "Topazolam tab 50x 1,0mg"
  * display.extension
    * url = "http://hl7.org/fhir/StructureDefinition/translation"
    * extension[0]
      * url = "lang"
      * valueCode = #nl-BE
    * extension[+]
      * url = "content"
      * valueString = "Topazolam tab 50x 1,0mg"
* performer.actor
  * identifier
    * system = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-organization"
    * value = "27457532"
  * display = "Apotheek onder de toren"
* authorizingPrescription.display = "Prescription"
* quantity = 1 https://www.gfd-dpp.be/fhir/reference/packaging#package
* whenHandedOver = "2020-03-10"
* dosageInstruction.text = "3 x par jour"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/translation"
    * extension[0]
      * url = "lang"
      * valueCode = #nl-BE
    * extension[+]
      * url = "content"
      * valueString = "3 x per dag"

---

// File: input/fsh/BeMedicationDispense-vocabulary.fsh

Alias: $hcparty = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty


Instance: be-ns-cnk-codes
InstanceOf: NamingSystem
Usage: #definition
Description: "Naming System - CNK Product Codes"
* status = #active
* name = "BeNSCNK"
* date = "2020-07-24"
* kind = #codesystem
* description = "Naming System - CNK Product Codes"
* uniqueId[0].type = #uri
* uniqueId[0].value = "https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/cnk-codes"
* uniqueId[0].preferred = true
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#056



Instance: be-ns-prescription-ids
InstanceOf: NamingSystem
Usage: #definition
Description: "Naming System - Prescription IDs"
* status = #active
* name = "BeNSPrescriptions"
* date = "2020-07-24"
* kind = #identifier
* description = "Naming System - Prescription IDs"
* uniqueId[0].type = #uri
* uniqueId[0].value = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/prescription-id"
* uniqueId[0].preferred = true
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#056




Instance: be-ns-product-package-type
InstanceOf: NamingSystem
Usage: #definition
Description: "Naming System - Prescription IDs"
* status = #active
* name = "BeNSProductPackage"
* date = "2020-07-24"
* kind = #codesystem
* description = "Naming System - Product Package Types"
* uniqueId[0].type = #uri
* uniqueId[0].value = "https://www.ehealth.fgov.be/standards/fhir/NamingSystem/product-package-type"
* uniqueId[0].preferred = true
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#056



ValueSet: DispenserTypes
Id: be-vs-dispenser-types
Title: "Dispenser Types"
Description: "Dispenser Types - from hcparty"
* ^status = #draft
* ^experimental = false
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* $hcparty#deptpharmacy
* $hcparty#perspharmacist
* $hcparty#orgpharmacy
* $hcparty#perspharmacyassistant
* $hcparty#perspharmacistclinicalbiologist
* $hcparty#persdentist
* $hcparty#deptdentistry





---

// File: input/fsh/instances/be-ns-cti-extended-code.fsh

Instance: be-ns-cti-extended-code
InstanceOf: NamingSystem
Usage: #definition
* name = "BeNSCTIExtended"
* status = #active
* kind = #codesystem
* date = "2020-07-24"
* publisher = "eHealth Platform"
* contact[0].name = "eHealth Platform"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "https://www.ehealth.fgov.be"
* contact[+].name = "Message structure"
* contact[=].telecom.system = #email
* contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* description = "Naming System - CTI Extended Codes"
* jurisdiction.coding[0] = $m49.htm#056
* jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* uniqueId.type = #uri
* uniqueId.value = "https://www.ehealth.fgov.be/standards/fhir/medication/NamingSystem/cti-extended-code"
* uniqueId.preferred = true

---

// File: input/fsh/models/BeMedicationDispense-models.fsh

Logical: BEModelMedicationDispense
Parent: Base
Id: be-model-medicationdispense
Title: "BeModelMedicationDispense"
Description: "The logical model for the Dispense Record entry - the information that can be captured upon the act of dispensing - in a hospital pharmacy, or a community pharmacy. This is not for a future dispense, rather a record of an actual dispense."


* ^url = "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/be-model-medicationdispense"

* ^publisher = "HL7 Belgium"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7belgium.org"

* ^description = "This is the logical model for the Dispense Record entry - the information that can be captured upon the act of dispensing - in a hospital pharmacy, or a community pharmacy. This is not for a future dispense, rather a record of an actual dispense."
* ^jurisdiction = $m49.htm#056
* ^jurisdiction.text = "Belgium"

//* ^short = "An individual record of a medication dispense"
* identifier 0..1 Identifier "The business identifier(s) for the medication dispense record" "The business identifier(s) for the medication dispense session, also known as Session GUID (SGUID)."
* patient 1..1 Reference(BePatient) "The person for which the medication is dispensed" "The person for which the medication is dispensed."

* dispenser 0..1 BackboneElement "The dispenser, if known and relevant"
  * dispenser 1..1 Reference (BePatient) "Reference to person that performed the recording or reporting"
  * organization 1..1 Reference (BeOrganization) "Reference to person that performed the recording or reporting" 
* dispenseDate 1..1 dateTime "The date (or date+time) when the dispense ocurred"
* prescription 0..1 BackboneElement  "Information about a prescription related to the dispense"
  * isPrescribed 0..1 boolean "Whether this dispense was performed against a prescription"
  * prescription 0..1 Reference "The prescription identification"
* dispensedItem 0..* BackboneElement  "Each product that was dispensed"
  * product 0..1 Reference "The product that was dispensed - coded or not (e.g. for magistral preparations)"
  * quantityDispensed 0..1 SimpleQuantity "The amount of product that was dispensed"
  * dosageInstructions 0..1 Dosage "The structured dosage or text instructions for use"
  * note 0..* Annotation "Additional information about the dispensed item - this can be relevant history, any remarks by the patient or professional, etc."
* note 0..* Annotation "Additional information about the dispense - this can be relevant history, any remarks by the patient or professional, etc."





Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm

// Instance: be-model-medicationdispense
// InstanceOf: StructureDefinition
// Usage: #definition
// * url = "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/be-model-medicationdispense"
// * version = "0.2.0"
// * name = "BeModelMedicationDispense"
// * status = #draft
// * date = "2021-06-28T13:54:34+02:00"
// * publisher = "HL7 Belgium"
// * contact.telecom.system = #url
// * contact.telecom.value = "http://hl7belgium.org"
// * description = "This is the logical model for the Dispense Record entry - the information that can be captured upon the act of dispensing - in a hospital pharmacy, or a community pharmacy. This is not for a future dispense, rather a record of an actual dispense."
// * jurisdiction = $m49.htm#056
// * jurisdiction.text = "Belgium"
// * fhirVersion = #4.0.1
// * mapping.identity = "rim"
// * mapping.uri = "http://hl7.org/v3"
// * mapping.name = "RIM Mapping"
// * kind = #logical
// * abstract = false
// * type = "BeModelMedicationDispense"
// * baseDefinition = "http://hl7.org/fhir/StructureDefinition/Element"
// * derivation = #specialization
// * differential.element[0].id = "BeModelMedicationDispense"
// * differential.element[=].path = "BeModelMedicationDispense"
// * differential.element[=].short = "An individual record of a medication dispense"
// * differential.element[=].min = 0
// * differential.element[=].max = "*"

// * differential.element[+].id = "BeModelMedicationDispense.identifier"
// * differential.element[=].path = "BeModelMedicationDispense.identifier"
// * differential.element[=].short = "The business identifier(s) for the medication dispense session"
// * differential.element[=].definition = "The business identifier(s) for the medication dispense session, also known as Session GUID (SGUID)."
// * differential.element[=].min = 0
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "Identifier"

// * differential.element[+].id = "BeModelMedicationDispense.patient"
// * differential.element[=].path = "BeModelMedicationDispense.patient"
// * differential.element[=].short = "The person for which the medication is dispensed."
// * differential.element[=].definition = "The person for which the medication is dispensed."
// * differential.element[=].min = 1
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "Reference"
// * differential.element[=].type.targetProfile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient"

// * differential.element[+].id = "BeModelMedicationDispense.dispenser"
// * differential.element[=].path = "BeModelMedicationDispense.dispenser"
// * differential.element[=].short = "The dispenser, if known and relevant"
// * differential.element[=].definition = "."
// * differential.element[=].min = 0
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "Reference"

// * differential.element[+].id = "BeModelMedicationDispense.dispenser.dispenser"
// * differential.element[=].path = "BeModelMedicationDispense.dispenser.dispenser"
// * differential.element[=].short = "Reference to person that performed the recording or reporting"
// * differential.element[=].definition = "Who was responsible for asserting the observed value as \"true\". (Reference)"
// * differential.element[=].min = 1
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "Reference"
// * differential.element[=].type.targetProfile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner"

// * differential.element[+].id = "BeModelMedicationDispense.dispenser.organization"
// * differential.element[=].path = "BeModelMedicationDispense.dispenser.organization"
// * differential.element[=].short = "Reference to person that performed the recording or reporting"
// * differential.element[=].definition = "Who was responsible for asserting the observed value as \"true\". (Reference)"
// * differential.element[=].min = 1
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "Reference"
// * differential.element[=].type.targetProfile = "https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-organization"

// * differential.element[+].id = "BeModelMedicationDispense.dispenseDate"
// * differential.element[=].path = "BeModelMedicationDispense.dispenseDate"
// * differential.element[=].short = "The date when the dispense ocurred"
// * differential.element[=].definition = "The date (or date-time) when the dispense ocurred"
// * differential.element[=].min = 1
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "dateTime"
// * differential.element[=].type.profile = "http://hl7.org/fhir/StructureDefinition/dateTime"

// * differential.element[+].id = "BeModelMedicationDispense.prescription"
// * differential.element[=].path = "BeModelMedicationDispense.prescription"
// * differential.element[=].short = "The information about a prescription related to the dispense"
// * differential.element[=].definition = "."
// * differential.element[=].min = 0
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "BackboneElement"

// * differential.element[+].id = "BeModelMedicationDispense.prescription.isPrescribed"
// * differential.element[=].path = "BeModelMedicationDispense.prescription.isPrescribed"
// * differential.element[=].short = "Whether this dispense was performed against a prescription"
// * differential.element[=].definition = "."
// * differential.element[=].min = 0
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "boolean"

// * differential.element[+].id = "BeModelMedicationDispense.prescription.prescription"
// * differential.element[=].path = "BeModelMedicationDispense.prescription.prescription"
// * differential.element[=].short = "The prescription identification"
// * differential.element[=].definition = "."
// * differential.element[=].min = 0
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "Reference"

// * differential.element[+].id = "BeModelMedicationDispense.dispensedItem"
// * differential.element[=].path = "BeModelMedicationDispense.dispensedItem"
// * differential.element[=].short = "Each product that was dispensed"
// * differential.element[=].definition = "."
// * differential.element[=].min = 0
// * differential.element[=].max = "*"
// * differential.element[=].type.code = "BackboneElement"

// * differential.element[+].id = "BeModelMedicationDispense.dispensedItem.product"
// * differential.element[=].path = "BeModelMedicationDispense.dispensedItem.product"
// * differential.element[=].short = "The product that was dispensed - coded or not (e.g. for magistral preparations)"
// * differential.element[=].definition = "."
// * differential.element[=].min = 0
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "Reference"

// * differential.element[+].id = "BeModelMedicationDispense.dispensedItem.quantityDispensed"
// * differential.element[=].path = "BeModelMedicationDispense.dispensedItem.quantityDispensed"
// * differential.element[=].short = "The amound of product that was dispensed"
// * differential.element[=].definition = "."
// * differential.element[=].min = 0
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "Quantity"

// * differential.element[+].id = "BeModelMedicationDispense.dispensedItem.dosageInstructions"
// * differential.element[=].path = "BeModelMedicationDispense.dispensedItem.dosageInstructions"
// * differential.element[=].short = "The instructions for use"
// * differential.element[=].definition = "."
// * differential.element[=].min = 0
// * differential.element[=].max = "1"
// * differential.element[=].type.code = "Dosage"

// * differential.element[+].id = "BeModelMedicationDispense.dispensedItem.note"
// * differential.element[=].path = "BeModelMedicationDispense.dispensedItem.note"
// * differential.element[=].short = "Additional information about the dispensed item"
// * differential.element[=].definition = "Additional information about the dispense - this can be relevant history, any remarks by the patient or professional, etc."
// * differential.element[=].min = 0
// * differential.element[=].max = "*"
// * differential.element[=].type.code = "Annotation"
// * differential.element[=].type.profile = "http://hl7.org/fhir/StructureDefinition/Annotation"

// * differential.element[+].id = "BeModelMedicationDispense.note"
// * differential.element[=].path = "BeModelMedicationDispense.note"
// * differential.element[=].short = "Additional information about the dispense"
// * differential.element[=].definition = "Additional information about the dispense - this can be relevant history, any remarks by the patient or professional, etc."
// * differential.element[=].min = 0
// * differential.element[=].max = "*"
// * differential.element[=].type.code = "Annotation"
// * differential.element[=].type.profile = "http://hl7.org/fhir/StructureDefinition/Annotation"





---

// File: input/fsh/models/BeMedicationRecord-models.fsh

Logical: BEModelMedicationLine
Id: be-model-medicationline
Title: "Medication Line - logical model"
Description: "A logical data model of the medication line."
Characteristics: #can-be-target

* ^name = "MedicationLine"

* uniqueIdentifier 1..* Identifier "Unique identifier" "A unique identifier for the medication line. This identifier alone may be the same for different versions of the medication line."
// .identifier
* versionIdentifier 1..1 string "Version of the medication line at the time the content was recorded or last updated."
// .extension[artifactVersion]
* lastUpdatedDate 1..1 dateTime "Timestamp the medication line content was recorded or last updated."
// .extension[artifactDate]
  * ^comment = " We consider this is redundant with the above, given the intended use in Belgium (version is a date). How to ensure the compatibility?"

* status 1..1 code "Status of the line entry"
//.status

* statusReason 0..1 CodeableConcept "Reason for the status" 
  * ^comment = " We consider this is not necessary - should we add?"

//* recordedDate 0..1 dateTime "Date the medication line was recorded or last updated"
//  * ^comment = " We consider this is not necessary"

* assertedDate 0..1 dateTime "Date the medication line was first asserted or known"
  * ^comment = " We consider this is not necessary"
// .assertedDate

* recorder 1..1 Reference(Practitioner) "Recorder"
// .informationSource
  * ^comment = "We understand this will be updated as the line changes"

* patient 1..1 Reference(Patient) "Patient"
// .subject
* category 0..1 BackboneElement "Category for the line"
  * originType 0..1 CodeableConcept "The origin of the line - hospital, ambulatory"
//.category

* medication 1..1 BackboneElement "The product or substance"
  * product 1..1 Reference(BELMMedProduct) "Product reference, identifier or name"
// .medicationReference or medicationCodeableConcept      
  * type 1..1 CodeableConcept "Type of medication - magistral, medicinal product, non-medicinal product"
// .medicationReference.resolve().classification or medicationCodeableConcept[]
  * type from BEMLMedicationTypeVS (required)

* exposure 0..1 CodeableConcept "Therapeutic, Prophylactic"
* exposure from MedicationExposureCategoryVS

* reason 0..* BackboneElement "Reason for the medication treatment"
  * reference 0..1 Reference "Reference to existing condition or reason"
// .reasonReference
  * code 0..1 CodeableConcept "Code of the condition, or free text" 
// .reasonCode

* effectivePeriod 1..1 BackboneElement "Period of medication treatment"
  * start 1..1 dateTime "The begin of the medication line"
// .effectiveDateTime OR .effectivePeriod.start
  * ^comment = ".effectiveDateTime OR .effectivePeriod.start. Do we need to support both? Can we use effectivePeriod when .end is known? And when only .start is known, we use dateTime?"
  * end 0..1 dateTime "The end of the medication line"

* adherence 0..1 BackboneElement "Whether the patient is known to be taking the medication"
// extension[adherence]
  * code 1..1 CodeableConcept "The status - taking, not taking,..."
  * adherenceReason 0..1 CodeableConcept "Reason for the adherence status" 

* dosage 0..1 BackboneElement "Dosage"
//.dosage  
  * dosageDetails 0..1 Dosage "Structure Dosage"
  * dosageOverride 0..1 boolean "Dosage Override"
    * ^comment = "should these be extensions on dosage or on the line?"
//.dosage.extension[]
  * dosageOverrideReason 1..1 CodeableConcept "Dosage Override reason"
    * ^comment = "should these be extensions on dosage or on the line?"
//.dosage.extension[]

* note 0..* Annotation "A note captured by a professional"
// .note

* dispenseRequestNeeded 0..* CodeableConcept "Whether the medication needs a prescription or request to be dispensed"
//* visibility 0..* CodeableConcept "Whether the patient has explicitly requested the medication line not to be seen - when other rules don't prevail"



Logical: BELMMedProduct
Title: "Medicinal Product"
Description: "A logical data model for representing a medicinal product."
Characteristics: #can-be-target

* ^extension[http://hl7.org/fhir/tools/StructureDefinition/logical-target].valueBoolean = true

* identifier 0..* Identifier "Unique identifier" "A unique identifier for the medication line"
* name 0..1 string "The name or designation of the product"
* description 0..1 string "The text description of the product when not coded"
* ingredient 0..* BackboneElement "The ingredients or components of the product"
  * product 1..1 CodeableConcept "The product or substance"
  * strength 0..1 SimpleQuantity "The quantity or amount of ingredient in the parent product"
* doseForm 0..1 CodeableConcept "The dose form of the product"

// TO DO:  dose form - which one? - e.g. solution for injection? or injection?

CodeSystem: BEMLMedicationType
Id:         medication-type
Title:     "Medication preparation Type"
Description: "Medication preparation type"
* ^status = #draft
* ^experimental = false
* ^caseSensitive = false
* #magistral "Magistral preparation"
* #officinal "Officinal preparation"
* #medicinal-product "Medicinal Product"
* #non-medicinal-product "non-medicinal product e.g. supplement"

// TO DO: Do we need non-authorized products?


ValueSet: BEMLMedicationTypeVS
Id:         medication-type-vs
Title:     "Medication preparation Type value set"
Description: "Medication preparation type value set"
* ^status = #draft
* ^experimental = false
* codes from system BEMLMedicationType


// CodeSystem: BEMLMExposureType
// Id:         medication-exposuretype
// Title:     "Medication exposure purpose"
// Description: "Medication exposure purpose"
// * ^status = #draft
// * ^experimental = false
// * #prophylaxys "Prophylactic purpose"
// * #therapy "Therapeutic purpose"
// * #other "Other e.g. diagnostic purposes"


// ValueSet: BEMLMExposureTypeVS
// Id:         medication-exposuretype-vs
// Title:     "Medication exposure purpose"
// Description: "Medication exposure purpose"
// * ^status = #draft
// * ^experimental = false
// * codes from system BEMLMExposureType



---

// File: input/fsh/models/datatypes.fsh

/*
Sources: https://wiki.hl7.de/index.php?title=HL7_CDA_Core_Principles 
https://vico.org/HL7_RIM/infrastructure/datatypes_r2/datatypes_r2.html#datyp2introwhat
*/


Profile: Untyped
Parent: Element
Description: "No data type defined"
* . ^short = "No specific data type assigned"
* . ^definition = "No specific data type assigned - should not be used in finished data models"


Profile: ANY
Parent: Element
Description: "An abstract type"
* . ^short = "Undefined"
* . ^definition = "An abstract type that defines the basic properties common to all data values defined in this specification. Data Value is an abstract type, meaning that no proper value can be just a data value without belonging to any concrete type. Every concrete type is a specialization of this general abstract DataValue type."


Profile: Class
Parent: BackboneElement
Description: "Class of data elements"
* . ^short = "group"
* . ^definition = "Class of data elements"
// Why is class derived from BackboneElement better than BackboneElement itself?


Profile: BL
Parent: Element
Description: "Boolean - true or false"
* . ^short = "Boolean"
* . ^definition = "A binary value for use in boolean logic. A BL value can be either true or false, or, as any other value, MAY be NULL."
// value

Profile: CD
Parent: Element
Description: "ConceptDescriptor"
* . ^short = "A reference to a concept defined in a code system"
* . ^definition = "A reference to a concept defined in a code system"
//system, code, display name?

Profile: ST
Parent: Element
Description: "CharacterString"
* . ^short = "Text"
* . ^definition = "String"
// value, language?

Profile: II
Parent: Element
Description: "InstanceIdentifier"
* . ^short = "identifier"
* . ^definition = "	An identifier that uniquely identifies a thing or object. Examples are object identifier for HL7 RIM objects, medical record number, order id, service catalog item id, Vehicle Identification Number (VIN), etc."
//Now, if you look at the definition and think of the meaning of 'instance', I think it's not correct to use it as any Identifier. Unfortunately, there is only OID, UUID and RUID in V3, and none of those work either.
//If we go custom, I'd say we lose "Instance" and one I.
// system, value


Profile: PQ
Parent: Element
Description: "PhysicalQuantity"
* . ^short = "Physical, measurable quantity with unit"
* . ^definition = "Elements of this data type are physical quantities, i.e. a measurable quantity (or countable) value from the physical world. This is different from just a “number”, because there is a (natural) unit specified in which the measurable quantity is expressed."
// value, unit, comparator(?)


Profile: TS
Parent: Element
Description: "TimeStamp"
* . ^short = "Timestamp"
* . ^definition = "A quantity specifying a point on the axis of natural time. A point in time is most often represented as a calendar expression."
// value


Profile: DT
Parent: Element
Description: "Date"
* . ^short = "Date"
* . ^definition = "Date"


Profile: RTO
Parent: Element
Description: "Ratio"
* . ^short = "Ratio of quantities"
* . ^definition = "A quantity constructed as the quotient of a numerator quantity divided by a denominator quantity."
//numerator PQ, denominator PQ


Profile: INT
Parent: Element
Description: "IntegerNumber"
* . ^short = "Integer numbers"
* . ^definition = "Integer numbers (-1,0,1,2, 100, 3398129, etc.) are precise numbers that are results of counting and enumerating. Integer numbers are discrete, the set of integers is infinite but countable."


Profile: REAL
Parent: Element
Description: "RealNumber"
* . ^short = "By default finite decimal number"
* . ^definition = "A scalar magnitude. Typically used whenever quantities are measured, estimated, or computed from other real numbers. The typical representation is decimal, where the number of significant decimal digits is known as the precision."


Profile: EN
Parent: Element
Description: "EntityName"
* . ^short = "Entity name"
* . ^definition = "A name for a person, organization, place or thing. A sequence of name parts, such as given name or family name, prefix, suffix, etc."


Profile: AD
Parent: Element
Description: "Address"
* . ^short = "Address"
* . ^definition = "Mailing and home or office addresses. A sequence of address parts, such as street or post office box, city, postal code, country, etc."


// Other candidates
// Sequence:	LIST	An ordered collection of discrete (but not necessarily distinct) values.
// Set:	SET	A value that contains distinct values in no particular order.
// EncapsulatedData:	ED
// PostalAddress	AD	Mailing and home or office addresses. A sequence of address parts, such as street or post office box, city, postal code, country, etc.
// MonetaryAmount	MO	A quantity expressing an amount of money in some currency. While the monetary amount is a single kind of quantity (money) the exchange rates between the different units are variable. This is the principle difference between PQ and MO, and the reason why currency units are not physical units.
// Interval	IVL	A set of consecutive values of an ordered base data type.

---

// File: input/fsh/models/KMEHRMS-model.fsh


// Logical data model for KMEHR MedicationScheme.
// Documented by Bert Peters, based on implementation and testing results
// Element names may be changed to follow FHIR documentation convention - namely removing dashes (-)
// 2023

Logical: KMEHRMS
Title: "KMEHR Medication Schema v5.8"
Description: "This model represents the Medication Schema KMEHR V5.8. It is shown for demonstrating the field correspondence/equivalence, and not to imply any intended scope or intended behaviour."

* KMEHRMessage 1..1 Class "KMEHR Message" "KMEHR Message"
  * header 1..1 Class "KMEHR Message header"
//    * id 1..1 string ""
    * standard 1..1 Class "Which version of the standard is used"
      * cd 1..1 CD "The version of the KMEHR standard used"
        * ^comment = """
* S-VALUE = CD-STANDARD 
* value = always '20161201' " refering the eHealth XSD version
"""
    * date 0..1 date "Date"
    * time 0..1 time "Time"
    * sender 0..1 Class "Sender"
      * insert hcparties
    * recipient 0..1 Class "Recipient"
      * insert hcparties
  * folder 1..1 Class "The only data that matters"
    * idkmehr 1..1 integer "ID-KMEHR"
      * ^requirements = """
        * Equal to 1
        """
      * ^comment = " To Be checked if always 1"
    * patient 1..1 Class "the patient"
      * idinss 0..1 string "the Belgian Social Security Number identifier"
        * ^requirements = """
          * S = INSS
          * format = 11 digits
        """ 
      * firstname 0..1 string "First name of the patient. If no first name exists, the element will be empty."
      * familyname 0..1 string "Family name of the patient"
      * birthdate 0..1 date "Birth date of the patient (uses the basic data types for dates)"
      * deathdate 0..1 date "this is not used"
      * sex 1..1 Class "Sex of the patient"
        * cd 1..1 code "Coded value of patient sex"
          * ^requirements = """
            * S = CD-sex
            * ^example.valueString = female
          """            
      * address 0..1 Class "Home, work, … address(es) of the patient."
        * cd 1..1 code "Coded value"
          * ^requirements = """
            * S = CD-ADDRESS 
            * ^example.valueString = home
          """
        * country
        * zip 0..1 integer "Zip-code of the city"
        * city 0..1 string "The name of the city"
        * street 0..1 string "The name of the street"
        * housenumber 0..1 string "Housenumber within the street"
      * nationality 0..1 string "Nationality of the patient. Initially, the use of the CD-COUNTRY dictionary was required. We now recommend the use of the CD-FED-COUNTRY dictionary."
        * cd 1..1 code "Coded value"
          * ^requirements = """
            * S = CD-FED-COUNTRY
            * ^example.valueString = de
          """
      * usuallanguage 0..1 string "Usual language of the patient using the W3C language codes."
      * telecom 0..1 string "Fax, phone, … number(s) of the patient."
      * recorddatetime 0..1 ANY "Date of recording of the patient data."
      * text 0..1 string "Comment about the patient."

    * MSTransaction 1..1 Class "The metadata for the message"
      * ^comment = "here is a comment"
      // * idkmehr 1..1 integer "the KMEHR identifier for the medication line"
      // * ^comment = "S-VALUE= ID-KMEHR"
      // * ^requirements = """
      //     * Sequential, starting from 2
      //   """
      * idothers 0..* integer "Local ID of the medication line" 
        * ^definition = """
*Value set*:
  * vitalinkuri
  * RSBID
  * RSWID
"""
        * ^requirements = """
        * S-VALUE= LOCAL
        * SL-Value = 'vitalinkuri' - the identifier of the namespace
          * valueset:
            * vitalinkuri
            * RSBID
            * RSWID
        """
      * cd 1..1 code "code"
        * ^requirements = """
          * S= CD-TRANSACTION
          * valueset:
            * medicationscheme
        """
      * insert dateMandatory
      * insert timeMandatory
      * author 1..1 Class "The author of the line in the schema"
        * insert hcparties
      * isComplete 1..1 boolean "is complete"
        * ^comment = "Always set to true because it is not used"
      * isValidated 1..1 boolean "is validated"
        * ^comment = "Always set to true because it is not used"
      * version 0..1 integer "version of the medication scheme"

    * MSETransactionTreatmentSuspension 0..* Class "The treatment suspension line(s)"
      * idkmehr 1..1 integer "the KMEHR identifier for the medication line"
        * ^comment = "S-VALUE= ID-KMEHR"
        * ^requirements = """
        * Sequential, starting from 2
        """
      * idother 0..* string "Local ID of the medication line"
        * ^requirements = """
        * S-VALUE= LOCAL
        * SL-Value = 'vitalinkuri' - the identifier of the namespace
          * valueset:
            * vitalinkuri
            * RSBID
            * RSWID
        """
      * cd 0..* code "Coded value"
        * ^requirements = """
        * S= CD-TRANSACTION
        * valueset:
          * medicationschemeelement
          * treatmentsuspension
        """
      * insert dateMandatory
      * insert timeMandatory
      * author 1..1 Class "The author of the line in the schema"
        * insert hcparties
      * isComplete 1..1 boolean "is complete"
        * ^comment = "Always set to true because it is not used"
      * isValidated 1..1 boolean "is validated"
        * ^comment = "Always set to true because it is not used"
      * itemmedication 0..* Class "This describes the medication it is linked to, but has no further relevance"
        * itemId 0..* integer "a sequential unique item ID within the transaction, start=1"
        * cd 0..* ANY "describes the item category"
          * ^comment = """
          * S = CD-ITEM
          * value = medication
          """
        * insert periodDefinition
        * endMoment ^short = "the end date (and time) of the suspension"

        * content 0..* Class "To Do"
          * insert medicationIdentification
        * text 0..* string "Mandatory if compoundprescription is used - !!to be checked if possible in TS transaction!!"
        * lifecycle 1..1 string "The indication of the status, only used in a TS with value 'suspended'"
          * ^requirements = """
            * S = CD-LIFECYCLE
            * value = suspended
          """
        * lnk 1..1 string "using a link to the transaction (in the current MedicationSchema) of the related medicine"
          * ^requirements = """
            * TYPE = isplannedfor
            * URL = link to the ID-KMEHR of the medication this TS relates to
              * format = "//transaction[id[@S='ID-KMEHR']='5']"
          """
      * itemtransactionreason 0..1 Class "Extra information on the reason of suspention of the linked medication"
        * itemId 0..* integer "a sequential unique item ID within the transaction, start=1"
        * cd 0..* ANY "describes the item category"
          * ^requirements = """
            * S = CD-ITEM
            * value = transactionreason
            """
        * contenttext 0..* Class "Text"
          * text 1..* string "cardinality to be checked"
            * ^comment = "L-VALUE = [language] fr or nl or ..."
            * ^example.valueString = "Temporairement ne pas prendre en raison de l'interaction avec Y."
            * ^example.label = "Example"











    * MSETransactionmedication 0..* Class "The medication lines"
      * idkmehr 1..1 integer "the KMEHR identifier for the medication line"
        * ^comment = "S-VALUE= ID-KMEHR"
        * ^requirements = """
        * Sequential, starting from 2
        """
      * idother 0..* string "Local ID of the medication line"
        * ^requirements = """
        * S-VALUE= LOCAL
        * SL-Value = 'vitalinkuri' - the identifier of the namespace
          * valueset:
            * vitalinkuri
            * RSBID
            * RSWID
        """
      * cd 0..* code "Coded value"
        * ^requirements = """
        * S= CD-TRANSACTION
        * valueset:
          * medicationschemeelement
          * treatmentsuspension
        """
      * insert dateMandatory
      * insert timeMandatory
      * author 1..1 Class "The author of the line in the schema"
        * insert hcparties
      * isComplete 1..1 boolean "is complete"
        * ^comment = "Always set to true because it is not used"
      * isValidated 1..1 boolean "is validated"
        * ^comment = "Always set to true because it is not used"
      * version 0..* string "TO DO"

      * itemmedicationUse 0..1 Class "Extra information on the usage of the medication within this transaction"
        * itemId 0..* integer "a sequential unique item ID within the transaction, start=1"
        * cd 0..* ANY "describes the item category"
          * ^requirements = """
            * S = CD-ITEM
            * value = healthcareelement
            """
        * contentcategory 1..* Class "Category"
          * cd 0..* Class "Coded value"
            * ^requirements = """
            * S-VALUE=CD-ITEM-MS
            * value = medicationuse
            """
        * contenttext 0..* Class "Text"
          * text 1..* string "cardinality to be checked"
            * ^comment = "L-VALUE = [language] fr or nl or ..."
            * ^example.valueString = "pression artérielle" 
            * ^example.label = "Example"
      * itemendCondition 0..1 Class "Extra information on the endcondition of the medication within this MSE-transaction"
        * itemId 0..* integer "a sequential unique item ID within the transaction, start=1"
        * cd 0..* ANY "describes the item category"
          * ^requirements = """
            * S = CD-ITEM
            * value = healthcareelement
            """
        * contentcategory 1..* Class "Category"
          * cd 0..* Class "Coded value"
            * ^requirements = """
            * S-VALUE=CD-ITEM-MS
            * value = endcondition
            """
        * contenttext 0..* Class "Text"
          * text 1..* string "cardinality to be checked"
            * ^comment = "L-VALUE = [language] fr or nl or ..."
            * ^example.valueString = "pression artérielle" 
            * ^example.label = "Example"
            
      * itembeginCondition 0..1 Class "Extra information on the begincondition of the medication within this MSE-transaction"
        * itemId 0..* integer "a sequential unique item ID within the transaction, start=1"
        * cd 0..* ANY "describes the item category"
          * ^requirements = """
            * S = CD-ITEM
            * value = healthcareelement
            """
        * contentcategory 1..* Class "Category"
          * cd 0..* Class "Coded value"
            * ^requirements = """
            * S-VALUE=CD-ITEM-MS
            * value = begincondition
            """
        * contenttext 0..* Class "Text"
          * text 1..* string "cardinality to be checked"
            * ^comment = "L-VALUE = [language] fr or nl or ..."
            * ^example.valueString = "pression artérielle" 
            * ^example.label = "Example"

      * itemorigin 0..0 Class "non-permitted"
      * itemmedicationType 0..0 Class "non-permitted"
      * itemadaptationFlag 0..0 Class "non-permitted"
      * itemmedication 0..* Class "To Do"
        * itemId 0..* integer "a sequential unique item ID within the transaction, start=1"
        * cd 0..* ANY "describes the item category"
          * ^comment = """
          * S = CD-ITEM
          * value = medication
          """
        * insert periodDefinition
        * duration 0..1 integer "The duration of the treatment" 
          * ^requirements = """
            The duration is mutually exclusive with endMoment
            """
//        * obeys duration-xor-endMoment
        * contentmedicationIdentification 0..* Class "To Do"
          * insert medicationIdentification
        * content 0..* string "Extra content field which can be added if neccessary"
          * ^requirements = """
            * S = LOCAL
            * SL = SAMPROOF
            * ^example.valueString = qSv76SJEeOMdbZdVgQEDZA==
          """
        * text 0..* string "Mandatory if compoundprescription is used"
          * ^comment = "L-VALUE = [language] fr or nl or ..."
          * ^example.valueString = "Aluminiumchloride transpiratieremmende hydroalcoholische oplossing 15 % TMF" 
            * ^example.label = "Example"

        * temporality 0..* Class "The temporality"
          * cd 0..1 string "Coded value"
          * ^requirements = """
          * S = CD-TEMPORALITY
          * valueset:
            * chronic
            * acute
            * oneshot
            """
        * frequency 0..* Class "To Do"
          * periodicity 0..* Class "To Do"
            * cd 0..* ANY "S-VALUE=CD-PERIODICITY"
              * ^requirements = """
                * valueset:
                  * D
                  * DT
                  * J
                  ...
              """
        * posology 0..* Class "The freetext posology is mutual exclusive with the structured Regimen"
          * text 1..1 string "Contains the ingestion pattern in textual form"
            * ^comment = "L-VALUE = [language] fr or nl or ..."
            * ^example.valueString = "tot 4 x per dag 1 tablet"
            * ^example.label = "Example"

          * low 0..0 ANY "Not used here, only in SumEHR" 
          * high 0..0 ANY "Not used here, only in SumEHR"
          * unit 0..0 ANY "Not used here, only in SumEHR"
          * takes 0..0 ANY "Not used here, only in SumEHR"

        * regimen 0..* Class "To Do"
          * date 0..* date "date, mostly used icw periodicity=monthly or at a specifiec time of the day"
            * ^comment = """
            * Format= yyyy-mm-dd
            """    
          * weekday 0..* integer "Day of the week, mostly used icw periodicity=weekly"
            * cd 1..1 string "the day of the week"
              * ^comment = "S-VALUE=CD-WEEKDAY"
              * ^example.valueString = "monday"
              * ^example.label = "Example"

          * daynumber 0..* integer "Daynumber, mostly used icw periodicity=weekly or daily"
          * daytime 0..* Class "indication of the intake moment"
            * insert timeMandatory 
            * dayperiod 1..* Class "mutual exclusive with &lt;time&gt;"
              * cd 0..* string "Coded value"
                * ^requirements = """
                * S = CD-DAYPERIOD
                * valueset:
                  * morning
                  * betweenlunchanddinner
                  * beforesleep
                  * beforebreakfast
                  * ...
                """
          * quantity 1..1 Class "To Do"
            * decimal 0..* integer "the amount, expressed in a number"
            * unit 0..* Class "the prescribed administration unit where the decimal applies to"
              * cd 0..* string "To Do"
                * ^requirements = """
                * S = CD-ADMINISTRATIONUNIT
                * valueset:
                  * 00001
                  * gm
                  * micrograms
                  * tbl
                  * mg
                  * ...
                """
        * route 0..* Class "The drug administration route"
          * cd 0..* ANY "To Do"
            * ^requirements = """
              * S = CD-DRUG-ROUTE
              * valueset:
                * 00060
                * 00001
                * ear-left
                * derm
                * transderm
                * ...
              """
        * instructionForOverDosing 0..0 ANY "NOT USED in MS"
        * instructionForReimbursement 0..0 ANY "NOT USED in MS"
        * isSubstitutionAllowed 0..0 ANY "NOT USED in MS"
        * feedback 0..0 ANY "NOT USED in MS"
        * local 0..0 ANY "NOT USED in MS"
        * batch 0..0 ANY "NOT USED in MS"
        * deliveryDate 0..0 ANY "NOT USED in MS"
        * instructionforpatient 0..1 string "Usage instructions for the patient."
          * ^comment = "L-VALUE = [language] fr or nl or ..."
          * ^example.valueString = "A diminuer si possible"
          * ^example.label = "Example"
          

                

              











RuleSet: hcparties
* hcpartyHub 0..1 Class "the identifier of the hub"
  * itemId 1..1 string "the hub identifier"
    * ^comment = "S-VALUE= ID-HCPARTY"
    * ^example.valueString = "1990001916"
    * ^example.label = "Example"

  * cd 1..1 code "the type of the hcparty"
    * ^comment = "S-VALUE= CD-HCPARTY"
  * name 0..1 string "the name of the hub"
    * ^comment = "S-VALUE= CD-HCPARTY"
* hcpartyOrg 0..1 Class "the identifier of the org"
  * itemId 0..1 string "the org identifier - NIHDII number of the org"
    * ^example.valueString = "1990001916"
    * ^example.label = "Example"

  * cd 1..1 code "the type of the hcparty"
    * ^comment = "S-VALUE= CD-HCPARTY"
  * idencryptionActor 0..1 integer "to be checked: usage & cardinality"
    * ^requirements = """
      * S-VALUE = ID-ENCRYPTION-ACTOR
      * value = [selection of you NIHII nr]
    """
  * idencryptionApplication 0..1 ANY "Application"
    * ^requirements = """
      * S-VALUE = ID-ENCRYPTION-APPLICATION
    """
  * cdencryptionActor 0..1 Class "Usage & cardinality"
    * ^requirements = """
      * S-VALUE = CD-ENCRYPTION-ACTOR
      * valueset: 
        * EHP
        * NIHII
        * SSIN
        *...
    """
  * name 0..1 string "The name of the org"
* hcpartyindividual 1..1 Class "the identifier of the individual"
  * idriziv 0..1 string "the RIZIV individual identifier"
    * ^comment = "S-VALUE= ID-HCPARTY"
  * idinss 0..1 string "the Belgian Social Security Number identifier"
    * ^comment = "S-VALUE= INSS"
    * ^example.valueString = "69060733632"
    * ^example.label = "Example"

  * idencryptionActor 0..1 integer "to be checked: usage & cardinality"
    * ^requirements = """
      * S-VALUE = ID-ENCRYPTION-ACTOR
      * value = [selection of you NIHII nr]
    """
  * cd 1..1 code "the type of the hcparty"
    * ^example.valueString = "persphysician"
    * ^example.label = "Example"

    * ^comment = "S-VALUE= CD-HCPARTY"
  * cdencryptionActor 0..1 Class "to be checked: usage & cardinality"
    * ^requirements = """
      * valueset: 
        * EHP
        * NIHII
        * SSIN
        *...
    """
  * firstname 0..1 string "the first name of the individual"
  * familyname 0..1 string "the last name of the individual"
    * ^example.valueString = "Hendrix"
    * ^example.label = "Example"

  * address 0..* Class "Home, work, ... address(es) of the patient or healthcare party."
    * cd 1..1 Class "Coded value"
      * ^requirements = """
        * S-VALUE = CD-ADDRESS
        * example.valueString = home
      """
    * nis 0..1 code "explanation: https://nl.wikipedia.org/wiki/NIS-code"
      * ^example.valueString = "24062"
      * ^example.label = "Example"

  * telecom 0..* string "Fax, phone, … number(s) of the healthcare party."
* hcpartyapplication 0..1 Class "the software identifier"
  * itemId 0..1 string "the software identifier"
    * ^requirements = """
      * S-VALUE = LOCAL
      * SL-VALUE = endusersoftwareinfo
      * value = [received eHealth client-ID to access specific environment]
    """
  * cd 1..1 code "the type of the hcparty"
    * ^requirements = """
      * S-VALUE = CD-HCPARTY
      * value = APPLICATION
    """
  * name 0..1 string "The name of the application."
    
RuleSet: medicationIdentification
* medicinalproduct 0..* Class "Description of the medicinal product"
  * intendedName 0..1 ST "Name of prescribed product"
  * intendedCd 0..1 CD "CD-DRUG-CNK + Code (CNK)"
  * deliveredName 0..1 ST "Name of delivered product"
  * deliveredCd 0..1 CD "CD-DRUG-CNK + Code (CNK)"
* substanceproduct 0..* Class "Description of the generic product"
  * intendedName 0..1 ST "Name of prescribed product"
    * ^example.valueString = "chloorfenamine + paracetamol oraal 3,2 mg + 240 mg" 
    * ^example.label = "Example"

  * intendedCd 0..1 CD "Code of prescribed product (VMPGROUP or CNK)"
    * ^requirements = """
    * S-Value= CD-INNCLUSTER is not supported
    * S-Value= CD-VMPGROUP 
    * SV-value = e.g. LOCALDB
    * ^example.valueString = "0006106"
    """
    * ^comment = "INN is not supported"
  * deliveredName 0..1 ST "Name of delivered product"
  * deliveredCd 0..1 CD "Code of delivered product (CNK)"
    * ^comment = "This has to be CNK, not a substance, because it is a delivered product"

* compoundprescription 0..* Class "Description of the compound product"
  * ^comment = "Note that in XML this can directly be populated with the description (as it is in Wallonia)"
  * magistraltext 1..1 ST "Recipe of the prescription"
    * ^example.valueString = "R/ Aluminiumchloride hexahydraat 15 g + Isopropylalcohol 78 g + Gezuiverd water q.s. ad 100 g T"
    * ^example.label = "Example"
  * compound 0..0 Class "NOT USED"
  * formularyReference 0..0 ANY "TBD"
    // * id 0..1 string "description of the compound prescription"
    // * medicinalProduct 0..1 Class "description of the compound prescription"
    // * substance 0..1 Class "description of the compound prescription"


RuleSet: periodDefinition
* beginMoment 1..1 Class "The beginmoment of the medication/treatment suspension"
    
  * date 1..1 date  "Date"
    * ^requirements = "Format = yyyy-mm-dd"
  * time 0..1 time "Time"
    * ^requirements = "Format = HH:MM:SS or HH:MM:SS.xxxxxxx+02:00 or ... "
* endMoment 0..1 Class "The end moment of the medication/treatment suspension"
  * date 1..1 date  "Date"
    * ^requirements = "Format = yyyy-mm-dd"
  * time 0..1 time "Time"
    * ^requirements = "Format = HH:MM:SS or HH:MM:SS.xxxxxxx+02:00 or ... "

RuleSet: dateMandatory
* date 1..1 date "The date when the line was registered in the schema"
  * ^requirements = """
    * ?To be checked if mandatory
    * Format = yyyy-mm-dd
  """
        
RuleSet: timeMandatory      
* time 1..1 date "The time when the line was registered in the schema"
  * ^requirements = """
    * ?To be checked if mandatory
    * ?Format = hh:mm:ss
  """

  RuleSet: timeNotMandatory      
* time 0..1 date "The time when the line was registered in the schema"
  * ^requirements = """
    * ?To be checked if not mandatory
    * ?Format = hh:mm:ss
  """

---

// File: input/fsh/profiles/BeMedicationDispense.fsh

Alias: $be-patient = https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-patient
Alias: $be-organization = https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-organization
Alias: $be-practitioner = https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition/be-practitioner


Profile:        BeMedicationDispense
Parent:         MedicationDispense
Id:             be-medicationdispense
Title:          "BeMedicationDispense"
Description: "Defines constraints and extensions on the Medication Dispense resource for a record of a dispensation in Belgium."
* ^version = "0.2.0"
* ^status = #active
* . ^short = "The medication dispense entry"
* . ^definition = "A register of a medication dispense, describing the medication that has been dispensed by a professional or by an organization, including the medication, the patient, some prescription and treatment information."
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* identifier MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier contains DGUID 0..1 MS
* identifier[DGUID].type.coding.code = #dguid
* identifier[DGUID].system 1..
* identifier[DGUID].system = "https://www.gfd-dpp.be/fhir/reference/dguid" (exactly)
* medicationCodeableConcept 0..1 MS
* medicationCodeableConcept only CodeableConcept
* medicationCodeableConcept from SNOMEDCTMedicationCodes (example)
* medicationCodeableConcept ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* medicationCodeableConcept ^binding.extension.valueString = "MedicationCode"
* medicationCodeableConcept ^binding.description = "The drug code. For example CNK code for the medication"
* medicationReference 0..1 MS
* medicationReference only Reference(http://hl7.org/fhir/StructureDefinition/Medication)
* subject 1.. MS
* subject only Reference($be-patient)
* context MS
* context ^short = "The dispense session identifier, for example an identifier of a visit to a pharmacy"
* context.identifier MS
* context.identifier.system = "https://www.gfd-dpp.be/fhir/reference/sguid"
* context.identifier.type.coding.code = #sguid
* context.identifier.type.coding.system = "https://www.gfd-dpp.be/fhir/reference/identifier_types"

* performer 1.. MS
* performer.function.text = "dispenser"
* performer.actor only Reference($be-organization or $be-practitioner)
* authorizingPrescription MS
* authorizingPrescription.identifier MS
* authorizingPrescription.display MS
* quantity MS
* whenHandedOver 1.. MS
* note MS
* dosageInstruction MS
* dosageInstruction.text MS
* dosageInstruction.patientInstruction MS

/*
* performer ^slicing.discriminator.type = #pattern
* performer ^slicing.discriminator.path = "actor"
* performer ^slicing.rules = #open
* performer contains 
   dispensingOrganization 0..1 MS and dispenser 0..1 MS
* performer[dispensingOrganization].actor only Reference(BeOrganization)
* performer[dispensingOrganization].actor ^type.profile = Canonical(BeOrganization)
* performer[dispensingOrganization] obeys performer-nidhi
* performer[dispensingOrganization] MS
* performer[dispenser].actor only Reference(BePractitioner)
* performer[dispenser].actor ^type.profile = Canonical(BePractitioner)
* performer[dispenser] obeys performer-nidhi
* performer[dispenser] MS
*/



Invariant:  performer-nidhi
Description: "When an organization is referred to by use of an identifier, the naming system SHOULD be NIHDI number"
Expression: "actor.identifier.exists() implies (actor.identifier.system='https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-organization' or  actor.identifier.system='https://www.ehealth.fgov.be/standards/fhir/NamingSystem/nihdi-practitioner'"
Severity:   #warning

/*

Extension:      TranslationExtension
Id:             translationExtension
Title:          "Translation Extension"
Description:    "Language translation from base language of resource to another language."
* extension contains
    lang 1..1 and
    content 1..1
* extension[lang] ^short = "Code for language"
* extension[lang].value[x] only code
* extension[content].value[x] only string
* extension[content] ^short = "Content in other language"

*/


---

// File: input/fsh/profiles/medicationline.fsh

Profile: BEMedicationLine
Parent: MedicationStatement
Description: "Medication Line profile - contains the overview information for a single medication item"

* identifier 1.. MS

* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice based on the identifier system"

// slice VIDIS
* identifier contains vidis 0..1 MS
* identifier[vidis] ^short = "VIDIS identifier"
* identifier[vidis] ^definition = "The national identifier for medication lines."
* identifier[vidis].system = "http://ehealth.fgov.be/standards/fhir/medication/NamingSystem/be-ns-medicationline"
* identifier[vidis].value MS


* extension contains 
  ExposureCategory named exposure-category 0..1 MS and 
  DispenseRequestNeededCategory named dispense-request-needed 0..1 MS and 
  //VisibilityFlag named visibility-flag 0..1 MS and 
  http://hl7.org/fhir/StructureDefinition/artifact-version named artifact-version 1..1 MS and
  http://hl7.org/fhir/StructureDefinition/artifact-date named artifact-date 0..1 MS and
  http://hl7.org/fhir/5.0/StructureDefinition/extension-MedicationStatement.adherence named adherence 1..1 MS


* extension[exposure-category] ^short = "Exposure category"
* extension[dispense-request-needed] ^short = "Indication of whether a dispense request is needed for delivering the medication"
//* extension[visibility-flag] ^short = "Coded preference or assertion about the visibility of the medication line"
* extension[artifact-version] ^short = "The business version of the medication line - this version changes when the content update is considered clinically relevant"
* extension[artifact-date] ^short = "The business-relevant recorded date - the date the medication line was created or changed"
* extension[adherence] ^short = "Indicates whether the medication is or is not being consumed or administered"
* extension[adherence] ^comment = """This is a FHIR R5 element, preadopted as an extension in this FHIR R4 specification. 
For the full definition see here: [http://hl7.org/fhir/R5/medicationstatement-definitions.html#MedicationStatement.adherence](http://hl7.org/fhir/R5/medicationstatement-definitions.html#MedicationStatement.adherence)"""

* status MS
* statusReason MS
* dateAsserted MS
* informationSource 1..1 MS

* subject 1..1 MS
* category MS
* category ^short = "Type of medication usage"
// why is this 0..1?
* medication[x] MS

* reasonCode MS
* reasonReference MS
* dosage MS
* dosage
  * extension contains 
    DosageOverride named dosage-override 0..1 MS and 
    DosageOverrideReason named dosage-override-reason 0..1 MS

  * extension[dosage-override] ^short = "Indicates that the recommended dosage was overridden"
  * extension[dosage-override-reason] ^short = "The reason why the recommended dosage was overridden"


* effective[x] 1..1 MS
* note MS

* subject only Reference (BePatient)
* informationSource only Reference (BePatient or BePractitioner or BePractitionerRole or RelatedPerson or BeOrganization)



Extension: ExposureCategory
Description: "Exposure - category."
Context: MedicationStatement
* value[x] only CodeableConcept
* value[x] from MedicationExposureCategoryVS (extensible)


//Extension: VisibilityFlag
//Description: "Visibility Flag."
//Context: MedicationStatement
//* value[x] only boolean


Extension: DispenseRequestNeededCategory
Description: "Dispense Request Needed - category."
Context: MedicationStatement
* value[x] only boolean

Extension: DosageOverride
Description: "Dispense override."
Context: MedicationStatement.dosage
* value[x] only boolean
//* context = #MedicationStatement.dosage

Extension: DosageOverrideReason
Description: "Dispense Request Needed - category."
Context: MedicationStatement.dosage
* value[x] only CodeableConcept



---

// File: input/fsh/terminology/exposure.fsh

ValueSet: MedicationExposureCategoryVS
Id: medication-exposure-category-vs
Title: "Medication exposure intent"
Description: "The exposure purpose of a medication - whether the medication is given for therapeutic or prophylactic purposes."
* ^status = #draft
* ^experimental = false
* $SCT#360271000 "Prophylaxis"
* $SCT#360270004 "Therapy - action"
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"



---

// File: input/fsh/terminology/origintype.fsh

CodeSystem: MedicationLineOrigintype
Id: medication-line-origin-type
Title: "Medication origin type"
Description: "Medication treatment origin type - what is the type of care that originated the medication treatment"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* #ambulatory "Ambulatory"
* #hospital "Hospital"


ValueSet: MedicationLineOrigintypeVS
Id: medication-line-origin-type-vs
Title: "Medication origin type ValueSet"
Description: "Medication treatment origin type - what is the type of care that originated the medication treatment"
* ^status = #active
* ^experimental = false
* include codes from system MedicationLineOrigintype


---

// File: input/images-source/be-model-medicationdispense.plantuml

@startuml
skinparam linetype polyline
hide circle
hide stereotype


skinparam class<<TM>> {
 BorderColor #505090
 BackgroundColor APPLICATION
 HeaderBackgroundColor SkyBlue
}


class "**MedicationLine**" as BELMMedicationLine <<TM>>{
  |_ uniqueIdentifier 1..1   
  |_ versionIdentifier 1..1   
  |_ lastUpdatedDate 1..1   
  |_ status 1..1   
  |_ statusReason 0..1   
  |_ recordedDate 0..1   
  |_ assertedDate 0..1   
  |_ recorder 1..1   
  |_ patient 1..1   
  |_ category 0..1   
    |_ originType 0..1   
  |_ medication 1..1   
    |_ product 1..1   
    |_ type 1..1   
  |_ exposure 0..1   
  |_ reason 0..*   
    |_ reference 0..1   
    |_ code 0..1   
  |_ effectivePeriod 1..1   
    |_ start 1..1   
    |_ end 0..1   
  |_ adherence 0..1   
    |_ code 1..1   
    |_ adherenceReason 0..1   
  |_ dosage 0..1   
    |_ dosageDetails 0..1   
    |_ dosageOverride 0..1   
    |_ dosageOverrideReason 1..1   
  |_ note 0..*   
  |_ dispenseRequestNeeded 0..*   
  |_ visibility 0..*   
}
@enduml

---

// File: input/images-source/be-model-medicationline.plantuml

@startuml
skinparam linetype polyline
hide circle
hide stereotype


skinparam class<<TM>> {
 BorderColor #505090
 BackgroundColor APPLICATION
 HeaderBackgroundColor SkyBlue
}


class "**MedicationLine**" as BELMMedicationLine <<TM>>{
  |_ uniqueIdentifier 1..1   
  |_ versionIdentifier 1..1   
  |_ lastUpdatedDate 1..1   
  |_ status 1..1   
  |_ statusReason 0..1   
  |_ recordedDate 0..1   
  |_ assertedDate 0..1   
  |_ recorder 1..1   
  |_ patient 1..1   
  |_ category 0..1   
    |_ originType 0..1   
  |_ medication 1..1   
    |_ product 1..1   
    |_ type 1..1   
  |_ exposure 0..1   
  |_ reason 0..*   
    |_ reference 0..1   
    |_ code 0..1   
  |_ effectivePeriod 1..1   
    |_ start 1..1   
    |_ end 0..1   
  |_ adherence 0..1   
    |_ code 1..1   
    |_ adherenceReason 0..1   
  |_ dosage 0..1   
    |_ dosageDetails 0..1   
    |_ dosageOverride 0..1   
    |_ dosageOverrideReason 1..1   
  |_ note 0..*   
  |_ dispenseRequestNeeded 0..*   
  |_ visibility 0..*   
}
@enduml

---

// File: input/images-source/metamodel.plantuml

@startuml
skinparam linetype polyline
hide circle
hide stereotype

skinparam class<<AS>> {
 BorderColor DarkRed
 BackgroundColor MistyRose
 HeaderBackgroundColor #f09090
}



skinparam class<<MD>> {
 BorderColor DarkSlateGray
 BackgroundColor WhiteSmoke
 HeaderBackgroundColor #909090
}




skinparam class<<FL>> {
 BorderColor #b07050
 BackgroundColor BUSINESS
 HeaderBackgroundColor #f2f295
}

skinparam class<<TM>> {
 BorderColor #505090
 BackgroundColor APPLICATION
 HeaderBackgroundColor SkyBlue
}



skinparam class<<TL>> {
 BorderColor DarkGreen
 BackgroundColor PHYSICAL
 HeaderBackgroundColor LimeGreen
}


package "HL7 Belgium Guide " as Guide {

package "Functional Module" as Functional {
  class "**Use Case**" as UCase<<FL>> {
  }

  Class "**Service**" as Interaction<<FL>> {
  }


  Class "**Logical Model**" as LogicalModel<<FL>> {
  --
  StructureDefinition
  }

/'
  Class "**Example Content**" as Example<<TL>> {
  --
  ???
  }
'/
}

/'
  Class "**Actor**" as Actor1<<AS>> {
|_ **ID**
|_ Name
|_ Description
|_ Transaction
  |_ Role
  |_ Condition
|_ Option
  |_ Required
CapabilityStatement  
--
}
'/

  Class "** Metadata **" as ImpGuide<<MD>> {
|_ **ID**
|_ IG Name
|_ IG Acronym
|_ IG Name
|_ IG Acronym
|_ Contact
|_ Status
ImplementationGuide
--
}


package "Terminology" as Term {
  Class "**Glossary Term **" as BTerm<<TM>> {
    |_ **ID**
    |_ Name
    |_ Definition
    |_ Status
    |_ Domain
    CodeSystem    
    --
    }
  Class "** Naming System **" as NamingSystem<<TM>> {
    --
    CodeSystem
  }
  Class "** Code System **" as CodeSystem<<TM>> {
    --
    CodeSystem
  }
  Class "** Value Set **" as ValueSet<<TM>> {
    --
    ValueSet
  }
CodeSystem -down[hidden]-> ValueSet
}


package "Technical Module" as Tech {

  Class "**Transaction**" as Transaction<<TL>> {
    |_ **ID**
    |_ Name
    |_ Description
    |_ Actors
    |_ Step
    |_ Content
      |_ Terminology?  
    PlanDefinition?
    --
    }

  Class "**   Profile    **" as Profile<<TL>> {
  --
  StructureDefinition
  }

  Class "** Operation Definition **" as OpDef<<TL>> {
  --
  OperationDefinition
  }

  Class "** Search Parameter **" as SearchParam<<TL>> {
  --
  SearchParameter
  }


  Class "** Example  **\n**  Instance **" as ExampleInstance<<TL>> {
  (Diagram source)
  --
  Resource
  }

  Class "**Example**\n**Scenario**" as ExampleScenario<<TL>> {
  --
  ExampleScenario
  }
}






package "Support Module" as Support {
  class "**TestScript**" as TestScript<<FL>> {
  }

  class "**CapabilityStatement**" as CapabilityStatement<<FL>> {
  }


















}
Tech -down[hidden]-> Support
SearchParam -down[hidden]-> Support
Term -down[hidden]-> Support





BTerm -down[hidden]-> NamingSystem
NamingSystem -down[hidden]-> CodeSystem
CodeSystem -down[hidden]-> ValueSet

'UCase -up[hidden]-> Term

Actor1 -down[hidden]-> UCase
UCase -down[hidden]-> ExampleScenario

Actor1 -right[hidden]-> ImpGuide : "     "
ImpGuide -down[hidden]-> Term : "     "

UCase -right[hidden]-> Interaction : "     "
Interaction -right[hidden]-> LogicalModel : "     "

UCase -down[hidden]-> ExampleScenario


ExampleScenario -right[hidden]-> Transaction
Transaction -right[hidden]-> Profile


'Profile -right[hidden]-> OpDef
OpDef -right[hidden]-> SearchParam

Profile -down[hidden]-> ExampleInstance: " "
'ExampleScenario -down[hidden]-> ExampleInstance: " "
OpDef -up[hidden]-> Transaction

Functional -right[hidden]-> Term


LogicalModel -right[hidden]-> BTerm : "                  "
'UCase -up[hidden]-> NamingSystem


'ImpGuide -right[hidden]-> BTerm: "           "
'BTerm -right[hidden]-> Actor1: "            "
Functional -down[hidden]-> Tech

'Actor -right[hidden]-> Term: "                       "


}

@enduml

---

// File: input/images-source/overview-BEModel-short.plantuml

@startuml
!define ICONURL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/v2.4.0
!includeurl ICONURL/common.puml
!includeurl ICONURL/font-awesome-5/database.puml

skinparam linetype ortho
'skinparam linetype polyline
hide circle
hide stereotype

'skinparam defaultFontName Avenir-Book
'skinparam defaultFontSize 17
'skinparam monochrome true


'!pragma layout smetana

skinparam class<<MD>> {
 BorderColor DarkSlateGray
 BackgroundColor WhiteSmoke
 HeaderBackgroundColor #909090
}

skinparam class<<TM>> {
 BorderColor #505090
 BackgroundColor APPLICATION
 HeaderBackgroundColor SkyBlue
}


skinparam class<<Doc>> {
 BorderColor #505090
 BackgroundColor APPLICATION
 HeaderBackgroundColor SkyBlue
}

<style>
file {
  BackGroundColor APPLICATION
  LineThickness 1
  LineColor black
}
</style>

'file MDd [
'  MedicationSchema
'  ===
'  |_ patient
'  |_ LastUpdate
'  |_ Label
'  |_ Version
'  ]


' class "** Medication Schema **" as MS<<TM>> {
'   ' |_ patient
'   ' |_ lastUpdate
'   ' |_ label
'   ' |_ version
' }


class "** Medication Product **" as M<<TM>> {
    ' |_ identifier 1..*
    ' |_ doseForm 0..1
    ' |_ name 0..1
    ' |_ ingredient 0..1
    '   |_ strength 0..1
    '   |_ product 0..1
    }

class "** [[StructureDefinition-be-model-medicationline.html Medication Line]] **" as ML<<TM>> {
'   |_ uniqueIdentifier 1..1   
'   |_ versionIdentifier 1..1   
'   |_ lastUpdatedDate 1..1   
'   |_ status 1..1   
'   |_ statusReason 0..1   
'   |_ recordedDate 0..1   
'   |_ assertedDate 0..1   
'   |_ recorder 1..1   
'   |_ patient 1..1   
'   |_ category 0..1   
'     |_ originType 0..1   
'   |_ medication 1..1   
'     |_ product 1..1   
'     |_ type 1..1   
'   |_ exposure 0..1   
'   |_ reason 0..*   
'     |_ reference 0..1   
'     |_ code 0..1   
'   |_ effectivePeriod 1..1   
'     |_ start 1..1   
'     |_ end 0..1   
'   |_ adherence 0..1   
'     |_ code 1..1   
'     |_ adherenceReason 0..1   
'   |_ dosage 0..1   
'     |_ dosageDetails 0..1   
'     |_ dosageOverride 0..1   
'     |_ dosageOverrideReason 1..1   
'   |_ note 0..*   
'   |_ dispenseRequestNeeded 0..*   
'   |_ visibilityle 0..*   
' '--
' '<i>Identifier NameSpace
}


' class "**Prescription (Group)**" as P<<TM>> {
'   |_ identifier 1..* 
'   |_ status?
'   |_ period?
'   |_ indication
'   |_ comment?
'   |_ coverage?
' }


'P -u-> ML : supportingInformation
class "**Prescription Line**" as PL<<TM>> {
'   |_ identifier 1..* 
'   |_ authoredOn
'   |_ supportingInformation   
'   |_ subject
'   |_ status
'   |_ statusReason
'   |_ intent?
'   |_ medication
'   |_ requester
'   |_ reason
'   |_ dosage
'   |_ effectivePeriod
'     |_ start
'     |_ end
'   |_ dispenseRequest
'     |_ quantity
'     |_ dispenseInterval
'     |_ validityPeriod
'   |_ visible
' '--
' '<i>Substitution?
}


class "** [[StructureDefinition-be-model-medicationdispense.html Dispense]] **" as D<<TM>> {
   ' |_ patient 0..1 
  ' |_ receiver 0..1 
  ' |_ dispenser 0..1
  '   |_ dispenser 0..1
  '   |_ <i>organization 0..1
  ' |_ prescription 1..1
  '   |_ isPrescribed 1..1
  '   |_ request 1..1
  ' |_ <b>status 1..1 
  ' |_ statusReasonCoded 0..1 
  ' |_ statusReasonText 0..1 
  ' |_ dispenseDate  <b><u>1</u></b>..1
  ' |_ dispensedItem 0..1
  '   |_ medication 0..1 
  '   |_ dispensedQuantity 0..1
  '   |_ dosageInstructions 0..1
  '   |_ note 0..1
  ' |_ <b>substitution  0..1 
  ' |_ <b>coverage 0..1 
  '   |_ <b>reimbursementRate 0..1  
}


'M <-u- ML : medication

' ML .u.o MS : ""



PL <.u.> ML 

D <.l.> ML 
ML -d-> M : ""

'M -u[hidden]-> MS
PL -u[hidden]-> M
D -u[hidden]> M

PL -r-> M :" "



D -l-> PL :"  "
'D -l-> PL
'D -l-> PL :" authorizedBy  "
D -l-> M :" "
'P o-r- PL :"           "
'PL -r[hidden]- M
'PL ||-d-o{ M :"                  "

@enduml


---

// File: input/images-source/overview-BEModel.plantuml

@startuml
!define ICONURL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/v2.4.0
!includeurl ICONURL/common.puml
!includeurl ICONURL/font-awesome-5/database.puml

skinparam linetype ortho
'skinparam linetype polyline
hide circle
hide stereotype

'skinparam defaultFontName Avenir-Book
'skinparam defaultFontSize 17
'skinparam monochrome true


'!pragma layout smetana

skinparam class<<MD>> {
 BorderColor DarkSlateGray
 BackgroundColor WhiteSmoke
 HeaderBackgroundColor #909090
}

skinparam class<<TM>> {
 BorderColor #505090
 BackgroundColor APPLICATION
 HeaderBackgroundColor SkyBlue
}


skinparam class<<Doc>> {
 BorderColor #505090
 BackgroundColor APPLICATION
 HeaderBackgroundColor SkyBlue
}

<style>
file {
  BackGroundColor APPLICATION
  LineThickness 1
  LineColor black
}
</style>

'file MDd [
'  MedicationSchema
'  ===
'  |_ patient
'  |_ LastUpdate
'  |_ Label
'  |_ Version
'  ]


class "** Medication Schema **" as MS<<TM>> {
  |_ patient
  |_ lastUpdate
  |_ label
  |_ version
}


class "** Medication Product **" as M<<TM>> {
    |_ identifier 1..*
    |_ doseForm 0..1
    |_ name 0..1
    |_ ingredient 0..1
      |_ strength 0..1
      |_ product 0..1
    }

class "**Medication Line**" as ML<<TM>> {
  |_ uniqueIdentifier 1..1   
  |_ versionIdentifier 1..1   
  |_ lastUpdatedDate 1..1   
  |_ status 1..1   
  |_ statusReason 0..1   
  |_ recordedDate 0..1   
  |_ assertedDate 0..1   
  |_ recorder 1..1   
  |_ patient 1..1   
  |_ category 0..1   
    |_ originType 0..1   
  |_ medication 1..1   
    |_ product 1..1   
    |_ type 1..1   
  |_ exposure 0..1   
  |_ reason 0..*   
    |_ reference 0..1   
    |_ code 0..1   
  |_ effectivePeriod 1..1   
    |_ start 1..1   
    |_ end 0..1   
  |_ adherence 0..1   
    |_ code 1..1   
    |_ adherenceReason 0..1   
  |_ dosage 0..1   
    |_ dosageDetails 0..1   
    |_ dosageOverride 0..1   
    |_ dosageOverrideReason 1..1   
  |_ note 0..*   
  |_ dispenseRequestNeeded 0..*   
  |_ visibilityle 0..*   
'--
'<i>Identifier NameSpace
}


' class "**Prescription (Group)**" as P<<TM>> {
'   |_ identifier 1..* 
'   |_ status?
'   |_ period?
'   |_ indication
'   |_ comment?
'   |_ coverage?
' }


'P -u-> ML : supportingInformation
class "**Prescription Line**" as PL<<TM>> {
  |_ identifier 1..* 
  |_ authoredOn
  |_ supportingInformation   
  |_ subject
  |_ status
  |_ statusReason
  |_ intent?
  |_ medication
  |_ requester
  |_ reason
  |_ dosage
  |_ effectivePeriod
    |_ start
    |_ end
  |_ dispenseRequest
    |_ quantity
    |_ dispenseInterval
    |_ validityPeriod
  |_ visible
'--
'<i>Substitution?
}


class "**Dispense**" as D<<TM>> {
  |_ identifier 1..*
  |_ patient 0..1 
  |_ receiver 0..1 
  |_ dispenser 0..1
    |_ dispenser 0..1
    |_ <i>organization 0..1
  |_ prescription 1..1
    |_ isPrescribed 1..1
    |_ request 1..1
  |_ <b>status 1..1 
  |_ statusReasonCoded 0..1 
  |_ statusReasonText 0..1 
  |_ dispenseDate  <b><u>1</u></b>..1
  |_ dispensedItem 0..1
    |_ medication 0..1 
    |_ dispensedQuantity 0..1
    |_ dosageInstructions 0..1
    |_ note 0..1
  |_ <b>substitution  0..1 
  |_ <b>coverage 0..1 
    |_ <b>reimbursementRate 0..1  
}


ML .u.o MS : ""



PL <.u.> ML 

D <.l.> ML 
ML -d-> M : ""

'M -u[hidden]-> MS
PL -u[hidden]-> M
D -u[hidden]> M

PL -r-> M :" "



D -l-> PL :"  "
'D -l-> PL
'D -l-> PL :" authorizedBy  "
D -l-> M :" "
'P o-r- PL :"           "
'PL -r[hidden]- M
'PL ||-d-o{ M :"                  "

@enduml


---

// File: input/images-source/usecase-dispense-1.plantuml

@startuml
title Use Case 1 - Register Dispense
skinparam actorStyle awesome

hide footbox

'!include ./style.iuml

actor "**Patient**" as P
actor "**Pharmacist**" as PHARM
Participant "** Pharmacy **\n**  System  **" as PIS
Participant "** Vault / other **\n **  System  **" as V

P --> PHARM : Request medication\n (prescription / OTC)
activate PHARM
PHARM --> PHARM: Dispense 
PHARM --> PIS: Register Dispense
deactivate PHARM
activate PIS

PIS -> V : **Submit Dispense Record**


@enduml


---

// File: input/images-source/usecase-dispense-2.plantuml

@startuml
title Use Case 2 - Retrieve Dispense
skinparam actorStyle awesome

hide footbox

'!include ./style.iuml

'actor "**Patient**" as P
actor "**Pharmacist**" as PHARM
Participant "** Pharmacy **\n**  System  **" as PIS
Participant "** Vault / other **\n **  System  **" as V


...
PHARM --> PIS : Request Dispenses
activate PIS
PIS -> V : Query for Dispenses
activate V
PIS <- V : **Return Dispenses**

@enduml


---

// File: input/images-source/usecase-medicationschema-1.plantuml

@startuml
title Use Case 1 - Consult Medication Record
skinparam actorStyle awesome

hide footbox

'!include ./style.iuml

actor "**Patient**" as P
actor "**GP**" as GP
Participant " **Pharmacy** \n  **System**  " as PIS
Participant " **Vault / other** \n  **System**  " as V

group Identification
P -[#A92]-> PIS : Identification / authorization
end
...

group Request Medication Summary
GP --> PIS : Request Patient's\nmedication record 
activate PIS
PIS -> V : Query for Medication Summary
activate V
PIS <- V : **Return Medication Summary**
deactivate V
deactivate PIS
end


@enduml


---

// File: input/images-source/usecase-medicationschema-2.plantuml

@startuml
title Use Case 2 - Update Medication Record \n (e.g. add a new medication line)
skinparam actorStyle awesome

hide footbox

'!include ./style.iuml

actor "**Patient**" as P
actor "**GP**" as GP
Participant " **Order Entry** \n ** System **" as PIS
Participant " **Vault / other** \n **  System  **" as V

group Identification
P -[#A92]-> PIS : Identification / authorization
end
...

group Request Medication Record
PIS <- V : Return Medication Record
end

...

group Request Medication Record
GP --> PIS : Create new medication line
activate PIS

PIS -> V : Send new Medication Line
deactivate PIS
activate V
V -> V : Update version\nMedication Line
deactivate V
end

@enduml


---

// File: input/images-source/usecase-medicationschema-3.plantuml

@startuml
title Use Case 3  -  Compile Medication Schema \n
skinparam actorStyle awesome
!pragma teoz true
hide footbox

'!include ./style.iuml

'actor "**Patient**" as P
actor "**GP**" as GP
Participant " **Pharmacy**\n  **System**  " as PIS
Participant " **Vault / other **\n  **System** " as V
Participant " **Other **\n  **Sources**" as Src

...

group Collect Medication Information
PIS -> V : Submit Medication Lines\n(or other information)
activate PIS
activate V
Src -> V : Submit other\nMedication Lines \n(or other information)
deactivate PIS
V -> V : Aggregate\nMedication Lines\n(or other information)
deactivate V

end
...

group Compile Medication Summary
V -> V : Reconcile \nMedication Information
activate V
...
V -> V : Create / Update\nMedication Record
deactivate V
end

...

group Request Medication Summary
GP --> PIS : Request Patient's\nmedication record
activate PIS
PIS -> V : Query for Medication Record
activate V
PIS <- V : **Return Medication Record**
deactivate V
deactivate PIS
end


@enduml


---

// File: input/data/features.yml

---
feedback:
  - active: false



---

