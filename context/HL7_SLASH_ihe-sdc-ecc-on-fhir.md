File: repos/HL7_SLASH_ihe-sdc-ecc-on-fhir/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/sushi/configuration/                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.ihe-sdc-ecc
canonical: http://hl7.org/fhir/uv/ihe-sdc-ecc
name: IHE-SDC-eCC-On-FHIR
title: "IHE SDC/electronic Cancer Protocols (eCPs) on FHIR"
description: "Integrating the Healthcare Enterprise (IHE) Structured Data Capture (SDC) on FHIR uses a form-driven workflow to capture and transmit encoded data by creating FHIR Observations"
license: CC0-1.0
status: active
version: 1.0.0
fhirVersion: 4.0.1
copyrightYear: 2021+
releaseLabel: trial-use
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: oo
publisher:
  name: HL7 International / Orders and Observations
  url: http://www.hl7.org/Special/committees/orders
  email: ord@lists.HL7.org 
contact: 
- name: Alexander Goel
  telecom: 
  - system: email 
    value: agoel@cap.org
    use: work
pages: 
  index.md: 
    title: Home
  dataextraction.md:
    title: Data Extraction
  terminology.md: 
    title: Terminology
  downloads.md: 
    title: Downloads
  support.md: 
    title: Support
dependencies:
  hl7.fhir.uv.extensions: current

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Data Extraction: dataextraction.html
  Terminology: terminology.html
  Artifacts: artifacts.html
  Downloads: downloads.html
  Support: support.html



---

// File: input/pagecontent/dataextraction.md

IHE Structured Data Capture (SDC) on FHIR uses a form driven workflow to capture and encode data by creating FHIR Observations or other relevant resources from the captured data. This guide will focus on 2 types of data extraction: Observation-based and Definition-based. These concepts are borrowed from, and aligned with the [HL7 FHIR SDC Implementation Guide: Form Data Extraction](https://hl7.org/fhir/uv/sdc/extraction.html) guidance.

### Observation-Based Extraction

Observations can be used to capture Question and Answer Sets from SDC. Each Observation should capture the Question ID from SDC in the code element, and the answer in the value element. There are several question types that are described below on best practices for capture. The following sections will describe how to generally map some common data elements from IHE SDC to FHIR Observations, then will describe special considerations for specific data types.

Questions in IHE SDC are the element which are displayed to the user for them to fill in. There are a variety of question types including ListItems, Booleans, Strings, integers, decimals, etc. This page will detail how to map all of those question types to FHIR Observations.

Since IHE SDC is XML only the different elements and attributes will be identified from that specification below. Elements will be identified as starting with a capital letter (e.g. `Question`), while attributes will begin with an @ (e.g. `@title`). Attributes belong to one or more elements, so if a specific attribute must be used its parent element will be called out. IHE SDC elements and attributes will be described in [XPath](https://www.w3.org/TR/1999/REC-xpath-19991116/), such as `Element/Element/@attribute`. W3C offers a [XPath Tutorial](https://www.w3schools.com/xml/xpath_intro.asp). FHIR elements will be described in the standard FHIR Notation of `ResourceName.dataElement`. For example, we map the IHE SDC attribute `Question/@instanceGUID` to `Observation.identifier`.

The [IHE SDC/eCP on FHIR Observation](StructureDefinition-ihe-sdc-ecc-Observation.html) profile is designed to be used with all the following data types in the subsections below.

#### Observation Identification

The [IHE SDC/eCP on FHIR Observation](StructureDefinition-ihe-sdc-ecc-Observation.html) profile requires Observation.identifier to be used and supported. Observations should be identified using the IHE SDC `Question/@instanceGUID` to the `Observation.identifier`. The @instanceGUID will uniquely identify this Observation. Observations should reference a patient, the practitioner, a date, and be attached to a DiagnosticReport to ensure provenance of the resource.

Said DiagnosticReport should conform to the The [IHE SDC/eCP on FHIR DiagnosticReport](StructureDefinition-ihe-sdc-ecc-DiagnosticReport.html) profile.

#### Observation.code

For all Questions in IHE SDC the @ID and rptTxt or @title should be captured in the `Observation.code` element.

The text to include in the `Observation.code` should come from one of the following IHE SDC elements or attributes:

* The IHE SDC element of `Property/@propname="rptTxt"`
* The IHE SDC attribute of `@title`
<!--*  The IHE SDC attribute of `@altTxt`-->

`rptTxt` or `@title` may be found as part of an IHE SDC Question or ListItem. rptTxt will not be present on every IHE SDC Question or ListItem, but should always be used in place of @title if available.

The `Observation.code` element should be used to represent the `@ID` and `@title` of IHE SDC Question, regardless of question type.

For guidance on how to add standard terminology to these `Observation.code` elements, see the [Terminology](terminology.html) section of this IG.

##### Report Text (reportText) Property

XPath: `Question/Property/@propName="reportText"/@val`

For Single and Multi-select questions the implementer must use the report text (rptText) attribute instead of the title attribute which is the default. rptText should be mapped for FHIR Observation.ValueCodeableConcept.

There may be some reportText properties which have a `@val={no text}`. In these cases the @title attribute should still be used.

##### Title (@title)

XPath: `Question/@title`

If Report Text has is not present then the report `@title` of the answer _SHALL_ be used as the ValueCodeableConcept.

<!--##### Alt Text (altText)

XPath: `Question/Property/@propName="altText"/@val`

altText should only be used if the report text property and `@title` attribute are not present.-->

#### Parent and Child Observations

As Observations represent the Question and Answer pairs from IHE SDC, they may have parent or child questions, which must also be presented in Observations. To preserve the hierachy of Question and Answer pairs the `Observation.derivedFrom` element should be used to capture the `Observation.identifier` of the parent question and `Observation.hasMember` should be used to capture the `Observation.identifier` of the child question. The Observation specification provides guidance on how to use [Observation.hasMember and Observation.derivedFrom](https://www.hl7.org/fhir/observation.html#gr-other). A parent question may have multiple children within its `Observation.hasMember` field. 

<!--Will there ever be a child with multiple parents? Should be impossible-->

An [SDC eCP Observation Parent Example](Observation-SDCeCCObservationParent.html) and [SDC eCP Observation Child Example](Observation-SDCeCCObservationChild.html) showing how these Observations can be grouped together can be found in the [Artifacts](artifacts.html) page.

For all Sections and Questions, they only reference child and/or parent Questions/Sections. Never a Grandparent, Grandchild, etc.

#### Sections

[Observations groupers](http://hl7.org/fhir/R4B/observation.html#obsgrouping) should be used to represent sections as a parent Observation. When representing a section in an Observation the implementer is expected to leave the `Observation.value[x]` element blank. The `Observation.code` element should represent the Section's `@ID` and `@title` in IHE SDC.

All sub-questions of the Section should be captured within the `Observation.hasMember` element.

[SDC eCP Observation Section Example](Observation-SDCeCCObservationSection.html)

#### ListItems

IHE SDC has two kinds of List items:

* Single-Select
* Multi-Select

For both of these List item types the IHE SDC `Question` should map to the `Observation.code`, as noted above, and the `ListItem` should map to the `Observation.valueCodeableConcept`.

Like Questions, all ListItem answers will have an @ID element which should be captured in the `Observation.valueCodeableConcept` element along with the rptTxt property or @title attribute.

The same guidance in the [Terminology](terminology.html) section of this IG for `Observation.code` applies to `Observation.valueCodeableConcept`.

##### Single-Select

Single Select question/answer pairs in IHE SDC should be captured as `Observation.valueCodeableConcept` with the IHE SDC `ListItem @ID` for as the coding, and the `ListItem` @altText, @rptTxt, or @title as text.

##### Multi-Select

Similar to Single Select question/answer pairs in SDC should be captured as `Observation.valueCodeableConcept` with the SDC ID as the coding as separate Observations. Therefore each answer should be uniquely represented in a separate Observation and could be linked together by referencing the same DocumentReference in the `Observation.derivedFrom` element or in a FHIR DiagnosticReport.

#### List Item Responses (LIR)

There are a number of questions in IHE SDC which have sub-question types directly attached in the parent. These are known as `ListItemResponses`. For example a single select list may have a question like "Tumor Size" with answer options of:

* Greatest dimension in cm
* Cannot be determined (explain)

For "Greatest dimension in cm" there may be a numerical fill in box attached the question, and likewise for the "Cannot be determined (explain)" there may be a string List Item Response box attached. These are handled as special elements from other questions in the IHE SDC specification known as `ListItemResponseFields` and require the Observation to the component element to capture the additional filled information. See example: [SDCeCPObservationCodeLIR](Observation-SDCeCCObservationCodeLIR.html)

#### Text Answers

Observations for text based questions should be captured as `Observation.valueString` for simplicity.

#### DisplayItems

DisplayItems are text which are shown to the user filling out the form. These elements do not need to be represented within FHIR.

#### Untitled Questions

There are some questions which may not have an `@title` attribute or a rptText element present in their question element. These untitled questions are typically sub-questions to be answered in specific contexts. If an untitled question is present then the untitled question `@ID` should be included as the `Observation.code` element, with a blank display value.

<!--
#### Repeating Sections and Questions

There are sections which may repeat in an SDC form. These sections will be identified with an `@ID` attribute in the SDC form appended with an `_1`. These elements should be captured in a 

-->
<!--
Removed the following old text because using the parent question or alt text could be dangerous

Old text:
If an untitled question is present then the parent element in the IHE SDC form should be taken as the `Observation.code` in the Observation. Doing so will prevent any blank display values on the `Observation.code` element. 
-->

#### Other Data Types

Other data types should be captured in `Observation.value[x]` as their closest IHE SDC for match, whether that be DateTime, Boolean, Integer, etc.

| IHE SDC DataType            | FHIR `Observation.value[x]` type |
| --------------------------- | --------------------------- |
| boolean                     | valueBoolean                |
| date                        | valueDateTime               |
| dateTime                    | valueDateTime               |
| decimal                     | valueQuantity               |
| integer                     | valueInteger                |
| string                      | valueString                 |
| time                        | valueTime                   |

<!--
## Definition-Based Extraction
Definition-based extraction may be used to to write to specific FHIR Resources rather than a
-->

### Structure Map

The Structure Map may be used to cover complex types of questions which have unique needs in terms of mapping to FHIR resources. For example if a group of questions needs to be represented in a single Observation a Structure Map could specify how to add those answers to Observation.component elements. This would enable more complex and accurate mapping to FHIR resources.

Additionally Structure Map could be used to write to different FHIR resources other than Observation, where a resource such as Condition or Procedure may be more appropriate.

Note: Structure Map is still being explored by the IG authors for these kinds of use cases.

### Historical Data

It is possible that the patterns detailed in this guide could be used to extract data from historically collected IHE SDC forms. If the question types and IHE SDC IDs were maintained it could be feasible to write that data into FHIR messages following profiles outlined in this guide.

<!-- #### Data Storage Considerations
Mapping can be accomplished in order to promote robust data models that allow for advanced data analytics and shareable data models. There are a number of intersections for SDC and data models such as OHDSI. For example SDC and OHDSI both have a heavy reliance on identifiers. -->

---

// File: input/pagecontent/downloads.md

* [Full Specification (zip)](full-ig.zip)
* [Package (tgz)](package.tgz)
* [JSON Definitions (zip)](definitions.json.zip)
* [JSON Examples (zip)](examples.json.zip)
* [XML Definitions (zip)](definitions.xml.zip)
* [XML Examples (zip)](examples.ttl.zip)
* [Turtle Definitions](definitions.ttl.zip)


---

// File: input/pagecontent/index.md

<!--## IHE SDC/eCP on FHIR Home Page

Add reference to Cancer Pathology Guide, phrase as US realm example when available still in ballot

-->
*Note: If you have come here looking for FHIR Structured Data Capture using Questionnaire go here: [HL7 FHIR SDC Implementation Guide](https://hl7.org/fhir/uv/sdc/)
This implementation guide describes how to use [Integrating the Healthcare Enterprise (IHE) Structured Data Capture (SDC)](https://wiki.ihe.net/index.php/Structured_Data_Capture) with FHIR. This guide was produced as a collaborative effort between the IHE Quality, Research, and Public Health (QRPH) and HL7.*

### Introduction

This implementation guide will enable implementers to transmit [electronic Cancer Protocols (eCPs)](https://www.cap.org/protocols-and-guidelines/electronic-cancer-protocols) (formerly known as the electronic Cancer Checklists (eCCs)) data using FHIR resources, which are based on  [Integrating the Healthcare Enterprise (IHE) Structured Data Capture (SDC)](https://wiki.ihe.net/index.php/Structured_Data_Capture). IHE SDC/eCP on FHIR uses a form-driven workflow to capture and transmit encoded data by creating FHIR Observations.

The SDC initiative was established by The Office of the National Coordinator for Health Information Technology (ONC) in 2013 to develop two implementation guides:

+ [IHE SDC Technical Framework](https://wiki.ihe.net/index.php/Structured_Data_Capture)
+ [HL7 FHIR SDC Implementation Guide](https://hl7.org/fhir/uv/sdc/)


On March 30, 2017 the ONC transitioned both initiatives into community led projects. Both initiatives focus on improving data capture within healthcare. The CAP selected IHE SDC for their collection of eCPs. This implementation guide will enable implementers to transmit eCP data in FHIR resources.

<!--Can we put this in the guide? shows a concrete example of what this implementation guide does

There is a parser implementation available for this guide available here: https://github.com/IHE-SDC-WG/IHE-SDC-FHIR-Parser
-->
IHE SDC is deployed in a number of different use cases, beyond Pathology and in order to accomodate those additional use cases this IG is Universal Realm. It is expected that implementers may want to apply other standards such as US-Core to this IG in order to meet their needs. This IG is intended as guidance on how to map from the IHE SDC XML form model to FHIR. It should be noted that this guide does not make use of Questionnaire like FHIR SDC, but does follow the same data extraction pattern.

The encoded eCP/SDC xml may be included in the message as an encoded attachment data element or alternatively linked as a URL.

<!--Say that this guide is designed to convert IHE SDC forms to FHIR for transportation, but the main reports and fillable forms should always be generated from the IHE SDC and that should always be considered the source of truth-->

### FHIR Version

This FHIR implementation guide is based on FHIR R4.

### Purpose

This implementation guide specifies a pattern of use for IHE SDC with applicable FHIR resource to enable use of data captured from IHE SDC forms within FHIR.
This guide supports:

+ Creation of structured data in FHIR
+ Use of that data

Leveraging IHE SDC and FHIR allows for data to be shared more easily and enables improved data management and analysis as well as pre-population of data in new forms. The coding of structured data automates the interpretation and utilization of the data thereby allowing for the automation of processes, and increasing efficiency and accuracy. The representation of data as a FHIR resource can remove barriers that exist between different datasets while improving interoperability and making data more useful to providers, hospitals, and cancer registries.

### The College of American Pathologists eCPs

The College of American Pathologists (CAP) Cancer Reporting Protocols offer a guideline for the collection of key data elements for reporting of malignant tumours. The protocols can be used in a number of different tumour types and procedures such as biopsies and resections. Protocols are made up of two parts: the case summary and the explanatory notes.

The case summary section contains core data elements and optional data elements. Core data elements are the mandatory elements which must be reported whether or not they are applicable to the case. A subset of the core elements are conditional data elements which are only completed if applicable to the case. Optional data elements are fields which may be required for reporting based on practice standards at local institutions or different jurisdictions. These elements are identified with a “+”.

The explanatory notes within the cancer protocols aim to provide guidance and support the accurate completion of the case summaries.

### Common use cases

Use cases for IHE SDC/eCP  on FHIR include:

+ Public health reporting (e.g. Cancer Registry reporting)
+ Quality measurement and evaluation
+ Clinical guideline concordance evaluation
+ Auto-population of future forms

#### Public health reporting (e.g. Cancer Registry reporting)

In this use case the conversion of SDC forms to FHIR resources has the potential of enabling high-quality public health reporting through improved ease of data collection and transmission, and improved accuracy of data. Ultimately this can be used to better integrate with cancer registries for public health planning and reporting. The coding of data to a common standard helps to remove the discrepancies that may exist between different datasets which can allow registries to more easily compare and correlate data. This allows for public health decision-making that effectively combines different datasets, improves efficiency through automation, and limits errors through the removal of human interaction.

#### Quality measurement and evaluation

In this use case the conversion of SDC forms to FHIR resources could enable institutions to more easily collect data as it relates to pathology or radiology reporting through a common and standardized format. This would enable improved analysis of data which could then be used for quality measurement and evaluation activities at the facility or physician level. Based on the data collected institutions could introduce quality improvement initiatives or additional training opportunities for providers. Quality Measurement is not in scope for this implementation guide; implementers are expected to use this IG to facilitate data capture for Quality Measurement.

#### Clinical guideline concordance evaluation

In this use case the conversion of SDC forms to FHIR resources enables the evaluation of concordance against computable representations of narrative clinical guidelines. As new guidelines are introduced, specific measures can be identified as methods of assessing concordance to the guideline. Having SDC form data available in a standardized format enables the assessment of concordance against guidelines by hospitals or governing bodies.

#### Auto-population of future forms

In this use case information collected through SDC forms could be used to auto-populate future forms. Data collected as a FHIR resource can be linked to a patient record so that any future forms relating to that patient can be automatically pre-populated with existing relevant data. One example is a patient having a second biopsy, in which case all relevant data from the first biopsy can be automatically included in a report to the treating physician. This would improve efficiency, while reducing errors and ensuring that all relevant data is available to the care team.

### Scope

This implementation guide establishes a pattern for how to transport IHE SDC forms using FHIR DocumentReference, and DiagnosticReport, and how to extract data from IHE SDC forms to FHIR Resources, namely Observations.

### Audience

This implementation guide is intended for those form designers, systems developers and integrators, and clinical informaticists. The audiences for this implementation guide should consider how IHE SDC forms and data may be used within FHIR.

### SDC Form Structure

IHE SDC utilizes Identifiers on all Question and Answer Sets (QAS). These IDs within the QAS better allow for mapping between IHE SDC forms, standard or local terminology, billing codes, etc. They enable implementers to better capture and utilize their structured data within databases.

IHE SDC forms also have a robust metadata section that allows for the capture of important copyright information on the form, its disease site and other important information such as versioning. More detail on this can be found in the [IHE SDC Technical Framework Supplement](https://www.ihe.net/uploadedFiles/Documents/QRPH/IHE_QRPH_Suppl_SDC.pdf)

The [Data Extraction](dataextraction.html) section of this IG describes how to convert each question type into an Observation. The patterns described here have been aligned with the [HL7 FHIR SDC Implementation Guide: Form Data Extraction](https://hl7.org/fhir/uv/sdc/extraction.html) patterns, however further work is being conducted to enhance that alignment.

### Transport of the IHE SDC Forms within FHIR

A DocumentReference is the preferred way to transport an IHE SDC form as an attachment within FHIR. The Form **SHALL** be Base64 encoded and included for transport much like a CDA document or PDF might be. The [IHE SDC/eCP on FHIR DocumentReference](StructureDefinition-ihe-sdc-ecc-DocumentReference.html) profile describes the constraints of sending an IHE SDC form using FHIR protocols.

#### Support of DocumentReference

It should be noted that DocumentReference is ideal for transmitting blank forms, but may also be used for filled forms in systems which do not support DiagnosticReport. Therefore an implementer may use a DocumentReference to capture the IHE SDC form and share it within FHIR with its filled data. Otherwise, the preference is for implementers to capture the data as described on the [Data Extraction](dataextraction.html) page using the [IHE SDC/eCP on FHIR DiagnosticReport](StructureDefinition-ihe-sdc-ecc-DiagnosticReport.html) and the [IHE SDC/eCP on FHIR Observation](StructureDefinition-ihe-sdc-ecc-Observation.html).

### Must Support

The elements labelled Must Support in this guide should be sent if available. If they are unavailable, refer to cardinality of the element. For implementers using these resources if the data is unavailable they do not need to include the element.

### Acknowledgements

This library of FHIR resources was developed and produced through the efforts of Health Level Seven (HL7). The editors appreciate the support of all volunteers and staff associated with the creation of this document and the sponsorship of the following Work Groups: Orders & Observations, and FHIR Infrastructure. This guide would not have been possible without the support of the following organizations:

+ Centers for Disease Control and Prevention (CDC)
+ North American Association of Central Cancer Registries (NAACCR)
+ College of American Pathologists (CAP)

This material contains content from [SNOMED CT®](https://www.snomed.org/). SNOMED CT is a registered trademark of the International Health Terminology Standard Development Organization (IHTSDO).

This material contains content from the CAP. The [Electronic Cancer Protocols](https://www.cap.org/protocols-and-guidelines/electronic-cancer-protocols) are copyrighted by the CAP. All rights reserved.

### Dependencies
{% include dependency-table.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
{% include ip-statements.xhtml %}


---

// File: input/pagecontent/support.md

<!--## Support--> 
### Links to referenced specifications
+   [IHE SDC Technical Framework](https://wiki.ihe.net/index.php/Structured_Data_Capture) 
+   [HL7 FHIR SDC Implementation Guide](https://hl7.org/fhir/uv/sdc/)
<!--Can we include the reference implementation here?-->

---

// File: input/pagecontent/terminology.md

SDC IDs (which are formatted as CAP decimal CompositeKey (CKey) in electronic Cancer Protocols) are mapped to standardized terminologies (e.g. SNOMED CT) using a ConceptMap Resource. Data extraction and mapping can then be aided through the use of these codes.

More commonly standardized and broadly used terminology systems such as SNOMED CT can make the data more usable for any systems that may not have familiarity with the existing code system in the forms.

Each mapping of a SDC IDs to a SNOMED code is mapped in a ConceptMap resource. The ConceptMap resource could be used to insert a SNOMED Code into a FHIR Observation for the applicable term. This methodology could greatly increase the semantic interoperability between different systems. This IG has an [Example ConceptMap of CAP SDC IDs to SNOMED](ConceptMap-conceptMapCAPex.html).

Standardized codes could be mapped to the Observation by either the Sender or the Receiver. There are pros and cons to both approaches.

Any use case where the receiver may not have the ConceptMap available, it will be more effective for the Sender to add the codes to the FHIR Observation prior to sending. Doing so, will ensure that systems such as EMRs, and Clinical Decision Support (CDS) systems will have codes they are more likely able to use.

In other use cases, such as the sender submitting the data to a receiving cancer registry it may make more sense for the receiver to use the ConceptMap to map the more commonly standardized terms upon receipt of the data. This approach may decrease message size and the processing burden by the sender.

This section describes how to map standard codes to the generated Observations, however the same methodology of using a ConceptMap could be used to map local codes to the Observations.

<!-- add example from ConceptMap and expand the point above
Could put the code in the sent Observation or provide the ConceptMap for the receiver to use the code
If the receiver is provided the ConceptMap it might be easier since they'll be able to add the SNOMED Codes to their exisiting data model - do pros and cons
-->

---

// File: input/fsh/AL_CodeSystems.fsh

Alias:   CAP = http://cap.org/eCC
//address for CAP terminology
Alias:   LNC = http://loinc.org
Alias:   SCT = http://snomed.info/sct
Alias:   UCUM = http://unitsofmeasure.org
Alias:   ICD10CM = http://hl7.org/fhir/sid/icd-10-cm
Alias:   ICD10PCS = http://www.cms.gov/Medicare/Coding/ICD10
Alias:   RXN = http://www.nlm.nih.gov/research/umls/rxnorm
Alias:   ICDO3 = http://terminology.hl7.org/CodeSystem/icd-o-3
Alias:   ObsCat = http://terminology.hl7.org/CodeSystem/observation-category
Alias:   ObsStatus = http://hl7.org/fhir/observation-status
Alias:   ObsInt = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias:   $WG = http://hl7.org/fhir/StructureDefinition/structuredefinition-wg


---

// File: input/fsh/EX_ConceptMap.fsh

Instance: conceptMapCAPex
InstanceOf: ConceptMap
Title: "Example ConceptMap resource showing mapping of SNOMED to CAP CKeys"
Usage: #example
Description: "Example ConceptMap showing how SNOMED Codes may be mapped to CAP eCPs. Note: Draft and example only not for production use, only testing purposes"
* status = #draft
* name = "ConceptMapCAPex"
* title = "Example CAP Concept Map of SNOMED to CAP eCP content identifiers"
* experimental = true
* date = "2022-04-20"
* publisher = "College of American Pathologists"
* contact.telecom.system = #email
* contact.telecom.value = "agoel@cap.org"
* description = "mapping of SNOMED to CAP IDs"
* purpose = "mapping of SNOMED to CAP IDs"
* copyright = "College of American Pathologists 2022"
* group.source = "http://cap.org/eCC"
* group.target = "http://snomed.info/sct"
* group.element[0].code = #31072.100004300
* group.element[=].display = "Cannot be determined (indeterminate)####"
* group.element[=].target.code = #1156316003
* group.element[=].target.display = "Cannot be determined (qualifier value)"
* group.element[=].target.equivalence = #equivalent
* group.element[+].code = #381652.381651
* group.element[=].display = "Negative"
* group.element[=].target.code = #260385009
* group.element[=].target.display = "Negative (qualifier value)"
* group.element[=].target.equivalence = #equivalent
* group.element[+].code = #381652.381650
* group.element[=].display = "Positive"
* group.element[=].target.code = #10828004
* group.element[=].target.display = "Positive (qualifier value)"
* group.element[=].target.equivalence = #equivalent
* group.element[+].code = #381652.381654
* group.element[=].display = "Equivocal (explain)"
* group.element[=].target.code = #42425007
* group.element[=].target.display = "Equivocal (qualifier value)"
* group.element[=].target.equivalence = #equivalent

---

// File: input/fsh/EX_DiagnosticReport.fsh

Instance: eCCDiagnosticReport
InstanceOf: DiagnosticReportSDCeCC
Title: "eCP Diagnostic Report"
Description: "Example eCP Diagnostic report"
Usage: #example
* id = "eCCDiagnosticReport0"
* identifier.use = #usual 
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN "Accession ID"
* identifier.system = "http://example.org/Observation"
* identifier.value = "eCCDiagnosticReport0"
* status = #final
* category = LNC#LP7839-6 "Pathology"
* code = LNC#60568-3 "Pathology Synoptic report"
//This comment https://jira.hl7.org/browse/FHIR-38321 suggests that the subject and performer below are incorrectly represented, but when I try to do just [system/patient] the Published fails. Should I remove these references?
* subject = Reference(http://example.org/patient)
* subject.display = "Example Patient"
* effectiveDateTime = "2021-05-11"
* performer = Reference(http://example.org/practitioner)
* performer.display = "Example Practitioner"
* result[0] = Reference(SDCeCCObservationChild)
* result[1] = Reference(SDCeCCObservationParent)
* result[2] = Reference(SDCeCCObservationCode)
* result[3] = Reference(SDCeCCObservationCodeLIR)
* result[4] = Reference(SDCeCCObservationSection)

* presentedForm.url = "http://test.org/pathology/eCCDiagnosticReport0"

---

// File: input/fsh/EX_DocumentReference.fsh

Alias:   LNC = http://loinc.org
Instance: SDC-eCC-DocRef
InstanceOf: DocumentReferenceSDCeCC
Title: "SDC eCP DocumentReference"
Description: "Example DocumentReference with eCP attached as Base64 encoded xml"
Usage: #example 
* id = "eCCDocRef0"
* masterIdentifier.use = #usual 
* masterIdentifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN "Accession ID"
* masterIdentifier.system = "http://master.hospital.example.org"
* masterIdentifier.value = "masterIdentifiereCCDocRef0"
* identifier.use = #usual 
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN "Accession ID"
* identifier.system = "http://hospital.example.org"
* identifier.value = "identifiereCCDocRef0"
* status = #current
* category = LNC#LP7839-6 "Pathology"
* content.attachment.title = "example.org/sdc-ecc/eCCDocRef0"
* content.attachment.contentType = #application/xml
* content.attachment.language = #en
* content.attachment.data = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPD94bWwtc3R5bGVzaGVldCB0eXBlPSJ0ZXh0L3hzbCIgaHJlZj0ic2RjdGVtcGxhdGUueHNsdCI/Pgo8U0RDU3VibWlzc2lvblBhY2thZ2UgeG1sbnM9InVybjppaGU6cXJwaDpzZGM6MjAxNiIgcGtnSW5zdGFuY2VVUkk9IjEyMjM0NTYiIHBrZ0luc3RhbmNlVmVyc2lvblVSST0iMTIyMzQ1NiIgcGtnUHJldmlvdXNJbnN0YW5jZVZlcnNpb25VUkk9IjEyMjM0NTYiIHBrZ0RhdGVUaW1lU3RhbXA9IjIwMTktMDktMTFUMTQ6NTU6MDQiPgoJPEZvcm1EZXNpZ24geG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgeG1sbnM6eHNkPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSIgb3JkZXI9IjAiIElEPSJBZHJlbmFsLkJ4LlJlcy5EZW1vZ18xMjlfMy4wMDIuMDExLlJDMV9zZGNGREYiIGJhc2VVUkk9ImNhcC5vcmciIGZ1bGxVUkk9Il9iYXNlVVJJPWNhcC5vcmcmYW1wO19saW5lYWdlPUFkcmVuYWwuQnguUmVzLjEyOSZhbXA7X3ZlcnNpb249My4wMDIuMDExLlJDMSZhbXA7X2RvY1R5cGU9c2RjRkRGIiBmaWxlbmFtZT0iQWRyZW5hbC5CeC5SZXMuMTI5XzMuMDAyLjAxMS5SQzFfc2RjRkRGLnhtbCIgbGluZWFnZT0iQWRyZW5hbC5CeC5SZXMuMTI5IiBmb3JtVGl0bGU9IkFEUkVOQUwgR0xBTkQiIHZlcnNpb249IjMuMDAyLjAxMS5SQzEiIGZvcm1JbnN0YW5jZVVSST0iNmE0MGI0NWQtOWE5Ny00NDJhLWE4ZmYtNjdlZTc5MzQwNTQ4IiBmb3JtSW5zdGFuY2VWZXJzaW9uVVJJPSI2YTQwYjQ1ZC05YTk3LTQ0MmEtYThmZi02N2VlNzkzNDA1NDgvdmVyMSI+CgkJPFByb3BlcnR5IG5hbWU9IkNvcHlyaWdodCIgdHlwZT0iQ0FQZUNDX3N0YXRpY190ZXh0IiBzdHlsZUNsYXNzPSJjb3B5cmlnaHQiIG9yZGVyPSIxIiBwcm9wTmFtZT0iQ29weXJpZ2h0IiB2YWw9IihjKSAyMDE4IENvbGxlZ2Ugb2YgQW1lcmljYW4gUGF0aG9sb2dpc3RzLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC4gIExpY2Vuc2UgcmVxdWlyZWQgZm9yIHVzZS4iIC8+CgkJPFByb3BlcnR5IG5hbWU9IkdlbmVyaWNIZWFkZXJUZXh0IiB0eXBlPSJDQVBlQ0Nfc3RhdGljX3RleHQiIG9yZGVyPSIyIiBwcm9wTmFtZT0iR2VuZXJpY0hlYWRlclRleHQiIHZhbD0iU3VyZ2ljYWwgUGF0aG9sb2d5IENhbmNlciBDYXNlIFN1bW1hcnkgKENoZWNrbGlzdCkiIC8+CgkJPFByb3BlcnR5IG5hbWU9IkNhdGVnb3J5IiB0eXBlPSJDQVBlQ0NfbWV0YSIgb3JkZXI9IjMiIHByb3BOYW1lPSJDYXRlZ29yeSIgdmFsPSJFbmRvY3JpbmUiIC8+CgkJPFByb3BlcnR5IG5hbWU9Ik9mZmljaWFsTmFtZSIgdHlwZT0iQ0FQZUNDX21ldGEiIG9yZGVyPSI0IiBwcm9wTmFtZT0iT2ZmaWNpYWxOYW1lIiB2YWw9IkFEUkVOQUwgR0xBTkQiIC8+CgkJPFByb3BlcnR5IG5hbWU9IkNBUF9Qcm90b2NvbE5hbWUiIHR5cGU9IkNBUGVDQ19tZXRhIiBvcmRlcj0iNSIgcHJvcE5hbWU9IkNBUF9Qcm90b2NvbE5hbWUiIHZhbD0iQWRyZW5hbCBHbGFuZCIgLz4KCQk8UHJvcGVydHkgbmFtZT0iQ0FQX1Byb3RvY29sVmVyc2lvbiIgdHlwZT0iQ0FQZUNDX21ldGEiIG9yZGVyPSI2IiBwcm9wTmFtZT0iQ0FQX1Byb3RvY29sVmVyc2lvbiIgdmFsPSI0LjAuMS4xIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJUZW1wbGF0ZUlEIiB0eXBlPSJDQVBlQ0NfbWV0YSIgb3JkZXI9IjciIHByb3BOYW1lPSJUZW1wbGF0ZUlEIiB2YWw9IjEyOS4xMDAwMDQzMDAiIC8+CgkJPFByb3BlcnR5IG5hbWU9IlJlc3RyaWN0aW9ucyIgdHlwZT0iQ0FQZUNDX21ldGEiIG9yZGVyPSI4IiBwcm9wTmFtZT0iUmVzdHJpY3Rpb25zIiB2YWw9IlBsZWFzZSByZWZlciB0byB0aGUgY2FuY2VyIHByb3RvY29sIGNvdmVyIHBhZ2UgKHd3dy5jYXAub3JnL2NhbmNlcnByb3RvY29scykgZm9yIGluZm9ybWF0aW9uIGFib3V0IHdoaWNoIHR1bW9yIHR5cGVzIGFuZCBwcm9jZWR1cmVzIGNhbiBiZSByZXBvcnRlZCB1c2luZyB0aGlzIHRlbXBsYXRlLiIgLz4KCQk8UHJvcGVydHkgbmFtZT0iQ0FQX1JlcXVpcmVkIiB0eXBlPSJDQVBlQ0NfbWV0YSIgb3JkZXI9IjkiIHByb3BOYW1lPSJDQVBfUmVxdWlyZWQiIHZhbD0idHJ1ZSIgLz4KCQk8UHJvcGVydHkgbmFtZT0iQWNjcmVkaXRhdGlvbkRhdGUiIHR5cGU9IkNBUGVDQ19tZXRhIGR0LmRhdGVUaW1lIiBvcmRlcj0iMTAiIHByb3BOYW1lPSJBY2NyZWRpdGF0aW9uRGF0ZSIgdmFsPSIyLzI4LzIwMTggMTI6MDA6MDAgQU0iIC8+CgkJPFByb3BlcnR5IG5hbWU9IldlYlBvc3RpbmdEYXRlIiB0eXBlPSJDQVBlQ0NfbWV0YSBkdC5kYXRlVGltZSIgb3JkZXI9IjExIiBwcm9wTmFtZT0iV2ViUG9zdGluZ0RhdGUiIHZhbD0iNi8zMC8yMDE3IDEyOjAwOjAwIEFNIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJTaG9ydE5hbWUiIHR5cGU9IkNBUGVDQ19tZXRhIiBvcmRlcj0iMTIiIHByb3BOYW1lPSJTaG9ydE5hbWUiIHZhbD0iQWRyZW5hbC5CeC5SZXMiIC8+CgkJPFByb3BlcnR5IG5hbWU9IkFwcHJvdmFsU3RhdHVzIiB0eXBlPSJDQVBlQ0NfbWV0YSIgb3JkZXI9IjEzIiBwcm9wTmFtZT0iQXBwcm92YWxTdGF0dXMiIHZhbD0iUkMxIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJBSkNDX1ZlcnNpb24iIHR5cGU9IkNBUGVDQ19tZXRhIiBvcmRlcj0iMTQiIHByb3BOYW1lPSJBSkNDX1ZlcnNpb24iIHZhbD0iOHRoIEVkaXRpb24iIC8+CgkJPEJvZHkgbmFtZT0iQm9keSIgb3JkZXI9IjE1IiBJRD0iQWRyZW5hbC5CeC5SZXMuMTI5XzMuMDAyLjAxMS5SQzFfc2RjRkRGX0JvZHkiPgoJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF9Cb2R5IiBvcmRlcj0iMTYiPgoJCQkJPERpc3BsYXllZEl0ZW0gbmFtZT0iRElfMzk2MTciIG9yZGVyPSIxNyIgSUQ9IjM5NjE3LjEwMDAwNDMwMCIgdGl0bGU9IiMgVGhpcyBjaGVja2xpc3QgYXBwbGllcyBwcmluY2lwYWxseSB0byBhZHJlbmFsIGNhcmNpbm9tYXMgaW4gYWR1bHRzLiBQZWRpYXRyaWMgYWRyZW5hbCBjb3J0aWNhbCB0dW1vcnMgaGF2ZSBkaWZmZXJlbnQgY3JpdGVyaWEgZm9yIG1hbGlnbmFuY3kgYW5kIGFyZSwgaW4gZ2VuZXJhbCwgdHJlYXRlZCB1bmRlciBwcm90b2NvbHMgdGhhdCBtYXkgZGlmZmVyIHNpZ25pZmljYW50bHkgZnJvbSB0aGUgcmVjb21tZW5kYXRpb25zIGZvciBhZHVsdC0gdHlwZSB0dW1vcnMuIj4KCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMzk2MTdfMSIgb3JkZXI9IjE4IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQk8L0Rpc3BsYXllZEl0ZW0+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzQyNTciIG9yZGVyPSIxOSIgSUQ9IjQyNTcuMTAwMDA0MzAwIiBtaW5DYXJkPSIwIj4KCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF80MjU3XzEiIG9yZGVyPSIyMCI+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX1R1bV9TaXRlXzIxMTgiIG9yZGVyPSIyMSIgSUQ9IjIxMTguMTAwMDA0MzAwIiBtaW5DYXJkPSIwIiByZWFkT25seT0idHJ1ZSI+CgkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjExOF8xIiBvcmRlcj0iMjIiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IntubyB0ZXh0fSIgLz4KCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfMjExOF8yIiBvcmRlcj0iMjMiPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF8yMTE4XzMiIG9yZGVyPSIyNCI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9BZHJlbmFsX0dsYW5kXzIxMTkiIG9yZGVyPSIyNSIgSUQ9IjIxMTkuMTAwMDA0MzAwIiB0aXRsZT0iQWRyZW5hbCBnbGFuZCIgc2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxMTlfMSIgb3JkZXI9IjI2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJPC9TZWN0aW9uPgoJCQkJPFNlY3Rpb24gbmFtZT0iU18xNzUzNyIgb3JkZXI9IjI3IiBJRD0iMTc1MzcuMTAwMDA0MzAwIiB0aXRsZT0iQ0xJTklDQUwiIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF8xNzUzN18xIiBvcmRlcj0iMjgiPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9PdGhfTm9uX1BhdGhfRmluZGluZ3NfNDE1NiIgb3JkZXI9IjI5IiBJRD0iNDE1Ni4xMDAwMDQzMDAiIHRpdGxlPSJDbGluaWNhbCBIaXN0b3J5IChzcGVjaWZ5KSIgbXVzdEltcGxlbWVudD0iZmFsc2UiIG1pbkNhcmQ9IjAiPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzQxNTZfMSIgb3JkZXI9IjMwIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJDbGluaWNhbCBIaXN0b3J5IiAvPgoJCQkJCQkJPFJlc3BvbnNlRmllbGQgbmFtZT0icmZfNDE1Nl8yIiBvcmRlcj0iMzEiPgoJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfNDE1Nl8zIiBvcmRlcj0iMzIiPgoJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl80MTU2XzQiIG9yZGVyPSIzMyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQk8L1Jlc3BvbnNlRmllbGQ+CgkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzUzNzcyIiBvcmRlcj0iMzQiIElEPSI1Mzc3Mi4xMDAwMDQzMDAiIHRpdGxlPSJGdW5jdGlvbmFsIFN0YXR1cyAoTm90ZXMgSiBhbmQgSykiIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81Mzc3Ml8xIiBvcmRlcj0iMzUiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IkZ1bmN0aW9uYWwgU3RhdHVzIiAvPgoJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl81Mzc3Ml8yIiBvcmRlcj0iMzYiIG1heFNlbGVjdGlvbnM9IjAiPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF81Mzc3Ml8zIiBvcmRlcj0iMzciPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfVXJpbl8xNy1rZXRvc3Rlcm9pZHNfaW5jcmVhc2VkXzIwOTAwIiBvcmRlcj0iMzgiIElEPSIyMDkwMC4xMDAwMDQzMDAiIHRpdGxlPSJVcmluYXJ5IDE3LWtldG9zdGVyb2lkcyBpbmNyZWFzZWQgKDEwIG1nIC8gZyBjcmVhdGluaW5lIC8gMjQgaG91cnMpIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQ3VzaGluZ19TeW5kXzIwOTAyIiBvcmRlcj0iMzkiIElEPSIyMDkwMi4xMDAwMDQzMDAiIHRpdGxlPSJDdXNoaW5nIHN5bmRyb21lIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQ29ubl9TeW5kXzIwOTA0IiBvcmRlcj0iNDAiIElEPSIyMDkwNC4xMDAwMDQzMDAiIHRpdGxlPSJDb25uIHN5bmRyb21lIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDMwNTIiIG9yZGVyPSI0MSIgSUQ9IjQzMDUyLjEwMDAwNDMwMCIgdGl0bGU9IlZpcmlsaXphdGlvbiIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzQ0NjE4IiBvcmRlcj0iNDIiIElEPSI0NDYxOC4xMDAwMDQzMDAiIHRpdGxlPSJGZW1pbml6YXRpb24iIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9XZWlnaHRfTG9zc18yMDkwNiIgb3JkZXI9IjQzIiBJRD0iMjA5MDYuMTAwMDA0MzAwIiB0aXRsZT0iV2VpZ2h0IGxvc3MiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9PdGhfMjA5MDciIG9yZGVyPSI0NCIgSUQ9IjIwOTA3LjEwMDAwNDMwMCIgdGl0bGU9Ik90aGVyIChzcGVjaWZ5KSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjA5MDdfMSIgb3JkZXI9IjQ1IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjA5MDdfMiIgb3JkZXI9IjQ2IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIwOTA3XzMiIG9yZGVyPSI0NyI+CgkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzIwOTA3XzQiIG9yZGVyPSI0OCIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQk8L1NlY3Rpb24+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzE3ODc1IiBvcmRlcj0iNDkiIElEPSIxNzg3NS4xMDAwMDQzMDAiIHRpdGxlPSJTUEVDSU1FTiI+CgkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc4NzVfMSIgb3JkZXI9IjUwIj4KCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfUHJvY2VkdXJlXzQyNTU0IiBvcmRlcj0iNTEiIElEPSI0MjU1NC4xMDAwMDQzMDAiIHRpdGxlPSJQcm9jZWR1cmUiPgoJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl80MjU1NF8xIiBvcmRlcj0iNTIiPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF80MjU1NF8yIiBvcmRlcj0iNTMiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTA4MDkiIG9yZGVyPSI1NCIgSUQ9IjUwODA5LjEwMDAwNDMwMCIgdGl0bGU9IlBlcmN1dGFuZW91cyBuZWVkbGUgYmlvcHN5IiBzZWxlY3RlZD0idHJ1ZSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzQ2NjMzIiBvcmRlcj0iNTUiIElEPSI0NjYzMy4xMDAwMDQzMDAiIHRpdGxlPSJFbmRvc2NvcGljIGRpcmVjdGVkIGJpb3BzeSAoc3BlY2lmeSByYWRpb2dyYXBoaWMgdGVjaG5pcXVlKSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNDY2MzNfMSIgb3JkZXI9IjU2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJFbmRvc2NvcGljIGRpcmVjdGVkIGJpb3BzeSIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl80NjYzM18yIiBvcmRlcj0iNTciIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfNDY2MzNfMyIgb3JkZXI9IjU4Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNDY2MzNfNCIgb3JkZXI9IjU5IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQWRyZW5hbGVjdG9teV9Ub3RhbF8yMTIyIiBvcmRlcj0iNjAiIElEPSIyMTIyLjEwMDAwNDMwMCIgdGl0bGU9IkFkcmVuYWxlY3RvbXksIHRvdGFsIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQWRyZW5hbGVjdG9teV9QYXJ0XzIxMjEiIG9yZGVyPSI2MSIgSUQ9IjIxMjEuMTAwMDA0MzAwIiB0aXRsZT0iQWRyZW5hbGVjdG9teSwgcGFydGlhbCIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX090aF8yMTIzIiBvcmRlcj0iNjIiIElEPSIyMTIzLjEwMDAwNDMwMCIgdGl0bGU9Ik90aGVyIChzcGVjaWZ5KSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjEyM18xIiBvcmRlcj0iNjMiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IntubyB0ZXh0fSIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMTIzXzIiIG9yZGVyPSI2NCIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yMTIzXzMiIG9yZGVyPSI2NSI+CgkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzIxMjNfNCIgb3JkZXI9IjY2IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTlNfMjEyNCIgb3JkZXI9IjY3IiBJRD0iMjEyNC4xMDAwMDQzMDAiIHRpdGxlPSJOb3Qgc3BlY2lmaWVkIiAvPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV81Mjc1NiIgb3JkZXI9IjY4IiBJRD0iNTI3NTYuMTAwMDA0MzAwIiB0aXRsZT0iU3BlY2ltZW4gTGF0ZXJhbGl0eSI+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzUyNzU2XzEiIG9yZGVyPSI2OSI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzUyNzU2XzIiIG9yZGVyPSI3MCI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9SaWdodF8yMTI2IiBvcmRlcj0iNzEiIElEPSIyMTI2LjEwMDAwNDMwMCIgdGl0bGU9IlJpZ2h0IiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTGVmdF8yMTI3IiBvcmRlcj0iNzIiIElEPSIyMTI3LjEwMDAwNDMwMCIgdGl0bGU9IkxlZnQiIHNlbGVjdGVkPSJ0cnVlIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTY4MTIiIG9yZGVyPSI3MyIgSUQ9IjU2ODEyLjEwMDAwNDMwMCIgdGl0bGU9IkJpbGF0ZXJhbCIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX05TXzIxMjgiIG9yZGVyPSI3NCIgSUQ9IjIxMjguMTAwMDA0MzAwIiB0aXRsZT0iTm90IHNwZWNpZmllZCIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX090aF8yMDg2NiIgb3JkZXI9Ijc1IiBJRD0iMjA4NjYuMTAwMDA0MzAwIiB0aXRsZT0iT3RoZXIgKHNwZWNpZnkpIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMDg2Nl8xIiBvcmRlcj0iNzYiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IntubyB0ZXh0fSIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMDg2Nl8yIiBvcmRlcj0iNzciIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjA4NjZfMyIgb3JkZXI9Ijc4Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjA4NjZfNCIgb3JkZXI9Ijc5IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCTwvU2VjdGlvbj4KCQkJCTxTZWN0aW9uIG5hbWU9IlNfMTc4NzYiIG9yZGVyPSI4MCIgSUQ9IjE3ODc2LjEwMDAwNDMwMCIgdGl0bGU9IlRVTU9SIj4KCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF8xNzg3Nl8xIiBvcmRlcj0iODEiPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV81OTg1MiIgb3JkZXI9IjgyIiBJRD0iNTk4NTIuMTAwMDA0MzAwIiB0aXRsZT0iSGlzdG9sb2dpYyBUeXBlIChOb3RlcyBDIHRocm91Z2ggRSkiPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzU5ODUyXzEiIG9yZGVyPSI4MyIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iSGlzdG9sb2dpYyBUeXBlIiAvPgoJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl81OTg1Ml8yIiBvcmRlcj0iODQiPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF81OTg1Ml8zIiBvcmRlcj0iODUiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDY5MjUiIG9yZGVyPSI4NiIgSUQ9IjQ2OTI1LjEwMDAwNDMwMCIgdGl0bGU9IkFkcmVuYWwgY29ydGljYWwgY2FyY2lub21hLCBvbmNvY3l0aWMgdHlwZSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0FkcmVuYWxfQ29ydGljYWxfQ2FfMjExNyIgb3JkZXI9Ijg3IiBJRD0iMjExNy4xMDAwMDQzMDAiIHRpdGxlPSJBZHJlbmFsIGNvcnRpY2FsIGNhcmNpbm9tYSIgc2VsZWN0ZWQ9InRydWUiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV80NDQ0OSIgb3JkZXI9Ijg4IiBJRD0iNDQ0NDkuMTAwMDA0MzAwIiB0aXRsZT0iQWRyZW5hbCBjb3J0aWNhbCBjYXJjaW5vbWEsIG15eG9pZCB0eXBlIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTkxNjIiIG9yZGVyPSI4OSIgSUQ9IjU5MTYyLjEwMDAwNDMwMCIgdGl0bGU9IkFkcmVuYWwgY29ydGljYWwgY2FyY2lub21hLCBzYXJjb21hdG9pZCB0eXBlIiAvPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfNTk4NTJfMSIgb3JkZXI9IjkwIj4KCQkJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV80MzY3MCIgb3JkZXI9IjkxIiBJRD0iNDM2NzAuMTAwMDA0MzAwIiB0aXRsZT0iSGlzdG9sb2dpYyBUeXBlIENvbW1lbnRzIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJCQkJCTxSZXNwb25zZUZpZWxkIG5hbWU9InJmXzQzNjcwXzEiIG9yZGVyPSI5MiI+CgkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzQzNjcwXzIiIG9yZGVyPSI5MyI+CgkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNDM2NzBfMyIgb3JkZXI9Ijk0IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQk8L1Jlc3BvbnNlRmllbGQ+CgkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfNDkyNzUiIG9yZGVyPSI5NSIgSUQ9IjQ5Mjc1LjEwMDAwNDMwMCIgdGl0bGU9Ikhpc3RvbG9naWMgR3JhZGUgKE5vdGVzIEMgdGhyb3VnaCBFKSI+CgkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNDkyNzVfMSIgb3JkZXI9Ijk2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJIaXN0b2xvZ2ljIEdyYWRlIiAvPgoJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl80OTI3NV8yIiBvcmRlcj0iOTciPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF80OTI3NV8zIiBvcmRlcj0iOTgiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTM2MDMiIG9yZGVyPSI5OSIgSUQ9IjUzNjAzLjEwMDAwNDMwMCIgdGl0bGU9IkxvdyBncmFkZSAoJmx0Oz0gMjAgbWl0b3NlcyAvIDUwIGhpZ2gtcG93ZXIgZmllbGRzKSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNTM2MDNfMSIgb3JkZXI9IjEwMCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iTG93IGdyYWRlIiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDg2MzQiIG9yZGVyPSIxMDEiIElEPSI0ODYzNC4xMDAwMDQzMDAiIHRpdGxlPSJIaWdoIGdyYWRlICgmZ3Q7IDIwIG1pdG9zZXMgLyA1MCBoaWdoLXBvd2VyIGZpZWxkcykiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF80ODYzNF8xIiBvcmRlcj0iMTAyIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJIaWdoIGdyYWRlIiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8RGlzcGxheWVkSXRlbSBuYW1lPSJESV81Nzk4MCIgb3JkZXI9IjEwMyIgSUQ9IjU3OTgwLjEwMDAwNDMwMCIgdGl0bGU9IiNOb3RlOiBHZW5lcmFsbHkgZHVlIHRvIGNvcmUgbmVlZGxlIGJpb3BzeSwgd2l0aCBpbnN1ZmZpY2llbnQgdmlhYmxlIHR1bW9yIHRvIGNvdW50IDUwIEhQRnMuIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81Nzk4MF8xIiBvcmRlcj0iMTA0IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCTwvRGlzcGxheWVkSXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzU0NjQ4IiBvcmRlcj0iMTA1IiBJRD0iNTQ2NDguMTAwMDA0MzAwIiB0aXRsZT0iQ2Fubm90IGJlIGFzc2Vzc2VkIChleHBsYWluKSMiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzU0NjQ4XzEiIG9yZGVyPSIxMDYiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IkNhbm5vdCBiZSBhc3Nlc3NlZCIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl81NDY0OF8yIiBvcmRlcj0iMTA3IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzU0NjQ4XzMiIG9yZGVyPSIxMDgiPgoJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl81NDY0OF80IiBvcmRlcj0iMTA5IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9UdW1fU2l6ZV8yMTI5IiBvcmRlcj0iMTEwIiBJRD0iMjEyOS4xMDAwMDQzMDAiIHRpdGxlPSJUdW1vciBTaXplIChOb3RlIEEpIj4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTI5XzEiIG9yZGVyPSIxMTEiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IlR1bW9yIFNpemUiIC8+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzIxMjlfMiIgb3JkZXI9IjExMiI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIxMjlfMyIgb3JkZXI9IjExMyI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9UU2l6ZTFfMjEzMSIgb3JkZXI9IjExNCIgSUQ9IjIxMzEuMTAwMDA0MzAwIiB0aXRsZT0iR3JlYXRlc3QgZGltZW5zaW9uIGluIENlbnRpbWV0ZXJzIChjbSkiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMTMxXzEiIG9yZGVyPSIxMTUiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjEzMV8yIiBvcmRlcj0iMTE2Ij4KCQkJCQkJCQkJCQkJPGRlY2ltYWwgbmFtZT0iZGVjXzIxMzFfMyIgb3JkZXI9IjExNyIgbWluSW5jbHVzaXZlPSIwLjAwMTAwMDAwMCIgbWF4SW5jbHVzaXZlPSIxMDAuMDAwMDAwMDAwIiBmcmFjdGlvbkRpZ2l0cz0iMyIgdG90YWxEaWdpdHM9IjUiIHZhbD0iMyIgLz4KCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCTxUZXh0QWZ0ZXJSZXNwb25zZSBuYW1lPSJydHRfMjEzMV80IiBvcmRlcj0iMTE4IiB2YWw9IkNlbnRpbWV0ZXJzIChjbSkiIC8+CgkJCQkJCQkJCQkJPFJlc3BvbnNlVW5pdHMgbmFtZT0idW5fMjEzMV81IiBvcmRlcj0iMTE5IiB2YWw9ImNtIiB1bml0U3lzdGVtPSJVQ09NIiAvPgoJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF8yMTMxXzYiIG9yZGVyPSIxMjAiPgoJCQkJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX1R1bV9BZGRfRGltXzIxMzMiIG9yZGVyPSIxMjEiIElEPSIyMTMzLjEwMDAwNDMwMCIgdGl0bGU9IkFkZGl0aW9uYWwgRGltZW5zaW9uIGluIENlbnRpbWV0ZXJzIChjbSkiIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCQkJCQkJPFJlc3BvbnNlRmllbGQgbmFtZT0icmZfMjEzM18xIiBvcmRlcj0iMTIyIj4KCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjEzM18yIiBvcmRlcj0iMTIzIj4KCQkJCQkJCQkJCQkJCQk8ZGVjaW1hbCBuYW1lPSJkZWNfMjEzM18zIiBvcmRlcj0iMTI0IiBtaW5JbmNsdXNpdmU9IjAuMDAxMDAwMDAwIiBtYXhJbmNsdXNpdmU9IjEwMC4wMDAwMDAwMDAiIGZyYWN0aW9uRGlnaXRzPSIzIiB0b3RhbERpZ2l0cz0iNSIgdmFsPSIzIiAvPgoJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCTxUZXh0QWZ0ZXJSZXNwb25zZSBuYW1lPSJydHRfMjEzM180IiBvcmRlcj0iMTI1IiB2YWw9IkNlbnRpbWV0ZXJzIChjbSkiIC8+CgkJCQkJCQkJCQkJCQk8UmVzcG9uc2VVbml0cyBuYW1lPSJ1bl8yMTMzXzUiIG9yZGVyPSIxMjYiIHZhbD0iY20iIHVuaXRTeXN0ZW09IlVDT00iIC8+CgkJCQkJCQkJCQkJCTwvUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX1R1bV9BZGRfRGltXzIxMzIiIG9yZGVyPSIxMjciIElEPSIyMTMyLjEwMDAwNDMwMCIgdGl0bGU9IkFkZGl0aW9uYWwgRGltZW5zaW9uIGluIENlbnRpbWV0ZXJzIChjbSkiIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCQkJCQkJPFJlc3BvbnNlRmllbGQgbmFtZT0icmZfMjEzMl8xIiBvcmRlcj0iMTI4Ij4KCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjEzMl8yIiBvcmRlcj0iMTI5Ij4KCQkJCQkJCQkJCQkJCQk8ZGVjaW1hbCBuYW1lPSJkZWNfMjEzMl8zIiBvcmRlcj0iMTMwIiBtaW5JbmNsdXNpdmU9IjAuMDAxMDAwMDAwIiBtYXhJbmNsdXNpdmU9IjEwMC4wMDAwMDAwMDAiIGZyYWN0aW9uRGlnaXRzPSIzIiB0b3RhbERpZ2l0cz0iNSIgdmFsPSIzIiAvPgoJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCTxUZXh0QWZ0ZXJSZXNwb25zZSBuYW1lPSJydHRfMjEzMl80IiBvcmRlcj0iMTMxIiB2YWw9IkNlbnRpbWV0ZXJzIChjbSkiIC8+CgkJCQkJCQkJCQkJCQk8UmVzcG9uc2VVbml0cyBuYW1lPSJ1bl8yMTMyXzUiIG9yZGVyPSIxMzIiIHZhbD0iY20iIHVuaXRTeXN0ZW09IlVDT00iIC8+CgkJCQkJCQkJCQkJCTwvUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQ0JEXzIxMzAiIG9yZGVyPSIxMzMiIElEPSIyMTMwLjEwMDAwNDMwMCIgdGl0bGU9IkNhbm5vdCBiZSBkZXRlcm1pbmVkIChleHBsYWluKSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjEzMF8xIiBvcmRlcj0iMTM0IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJDYW5ub3QgYmUgZGV0ZXJtaW5lZCIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMTMwXzIiIG9yZGVyPSIxMzUiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjEzMF8zIiBvcmRlcj0iMTM2Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjEzMF80IiBvcmRlcj0iMTM3IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9UdW1fR2xhbmRfV2VpZ2h0XzQwNDk2IiBvcmRlcj0iMTM4IiBJRD0iNDA0OTYuMTAwMDA0MzAwIiB0aXRsZT0iVHVtb3IgV2VpZ2h0IChOb3RlIEIpIj4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF80MDQ5Nl8xIiBvcmRlcj0iMTM5IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJUdW1vciBXZWlnaHQiIC8+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzQwNDk2XzIiIG9yZGVyPSIxNDAiPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF80MDQ5Nl8zIiBvcmRlcj0iMTQxIj4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX1R1bV9HbGFuZF9XZWlnaHRfZ180NDc2MSIgb3JkZXI9IjE0MiIgSUQ9IjQ0NzYxLjEwMDAwNDMwMCIgdGl0bGU9IlNwZWNpZnkgd2VpZ2h0IChnKSIgc2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzQ0NzYxXzEiIG9yZGVyPSIxNDMiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IntubyB0ZXh0fSIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl80NDc2MV8yIiBvcmRlcj0iMTQ0IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzQ0NzYxXzMiIG9yZGVyPSIxNDUiPgoJCQkJCQkJCQkJCQk8ZGVjaW1hbCBuYW1lPSJkZWNfNDQ3NjFfNCIgb3JkZXI9IjE0NiIgbWluSW5jbHVzaXZlPSIwLjAwMDAwMDAwMCIgbWF4SW5jbHVzaXZlPSI1MDAwMC4wMDAwMDAwMDAiIGZyYWN0aW9uRGlnaXRzPSIyIiB0b3RhbERpZ2l0cz0iNyIgdmFsPSI1IiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJPFRleHRBZnRlclJlc3BvbnNlIG5hbWU9InJ0dF80NDc2MV81IiBvcmRlcj0iMTQ3IiB2YWw9ImciIC8+CgkJCQkJCQkJCQkJPFJlc3BvbnNlVW5pdHMgbmFtZT0idW5fNDQ3NjFfNiIgb3JkZXI9IjE0OCIgdmFsPSJncmFtcyIgdW5pdFN5c3RlbT0iVUNPTSIgLz4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTkFfNTc0NzYiIG9yZGVyPSIxNDkiIElEPSI1NzQ3Ni4xMDAwMDQzMDAiIHRpdGxlPSJDYW5ub3QgYmUgZGV0ZXJtaW5lZCI+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfNTc0NzZfMSIgb3JkZXI9IjE1MCI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF81NzQ3Nl8yIiBvcmRlcj0iMTUxIj4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNTc0NzZfMyIgb3JkZXI9IjE1MiIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJPFNlY3Rpb24gbmFtZT0iU18xNzg3NyIgb3JkZXI9IjE1MyIgSUQ9IjE3ODc3LjEwMDAwNDMwMCIgdGl0bGU9IlR1bW9yIEV4dGVudCI+CgkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMTc4NzdfMSIgb3JkZXI9IjE1NCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc4NzdfMiIgb3JkZXI9IjE1NSI+CgkJCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfNTEyNjUiIG9yZGVyPSIxNTYiIElEPSI1MTI2NS4xMDAwMDQzMDAiIHRpdGxlPSJUdW1vciBFeHRlbnNpb24iPgoJCQkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzUxMjY1XzEiIG9yZGVyPSIxNTciIG1heFNlbGVjdGlvbnM9IjAiPgoJCQkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzUxMjY1XzIiIG9yZGVyPSIxNTgiPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV80NDE4NiIgb3JkZXI9IjE1OSIgSUQ9IjQ0MTg2LjEwMDAwNDMwMCIgdGl0bGU9Ik5vIGV2aWRlbmNlIG9mIHByaW1hcnkgdHVtb3IiIHNlbGVjdGlvbkRlc2VsZWN0c1NpYmxpbmdzPSJ0cnVlIiAvPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV81MDY5NSIgb3JkZXI9IjE2MCIgSUQ9IjUwNjk1LjEwMDAwNDMwMCIgdGl0bGU9IlR1bW9yIGNvbmZpbmVkIHRvIGFkcmVuYWwgY29ydGV4IHdpdGhvdXQgaW52YXNpb24gdGhyb3VnaCB0dW1vciBjYXBzdWxlIChpZiBwcmVzZW50KSIgc2VsZWN0aW9uRGVzZWxlY3RzU2libGluZ3M9InRydWUiPgoJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNTA2OTVfMSIgb3JkZXI9IjE2MSIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iVHVtb3IgY29uZmluZWQgdG8gYWRyZW5hbCBjb3J0ZXggd2l0aG91dCBpbnZhc2lvbiB0aHJvdWdoIHR1bW9yIGNhcHN1bGUiIC8+CgkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfMzk1MzciIG9yZGVyPSIxNjIiIElEPSIzOTUzNy4xMDAwMDQzMDAiIHRpdGxlPSJUdW1vciBpbnZhZGVzIGludG8gb3IgdGhyb3VnaCB0aGUgYWRyZW5hbCBjYXBzdWxlIiBzZWxlY3RlZD0idHJ1ZSIgLz4KCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTIzMTUiIG9yZGVyPSIxNjMiIElEPSI1MjMxNS4xMDAwMDQzMDAiIHRpdGxlPSJUdW1vciBpbnZhZGVzIGludG8gZXh0cmEtYWRyZW5hbCBzdHJ1Y3R1cmVzIChzcGVjaWZ5KSIgc2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNTIzMTVfMSIgb3JkZXI9IjE2NCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iVHVtb3IgaW52YWRlcyBpbnRvIGV4dHJhLWFkcmVuYWwgc3RydWN0dXJlcyIgLz4KCQkJCQkJCQkJCQkJPExpc3RJdGVtUmVzcG9uc2VGaWVsZCBuYW1lPSJsaXJmXzUyMzE1XzIiIG9yZGVyPSIxNjUiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF81MjMxNV8zIiBvcmRlcj0iMTY2Ij4KCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl81MjMxNV80IiBvcmRlcj0iMTY3IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV81NjI3MSIgb3JkZXI9IjE2OCIgSUQ9IjU2MjcxLjEwMDAwNDMwMCIgdGl0bGU9IlR1bW9yIGludmFkZXMgaW50byBvdGhlciBhZGphY2VudCBvcmdhbihzKSI+CgkJCQkJCQkJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzU2MjcxXzEiIG9yZGVyPSIxNjkiPgoJCQkJCQkJCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfNTM1MjYiIG9yZGVyPSIxNzAiIElEPSI1MzUyNi4xMDAwMDQzMDAiPgoJCQkJCQkJCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNTM1MjZfMSIgb3JkZXI9IjE3MSIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF81MzUyNl8yIiBvcmRlcj0iMTcyIj4KCQkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV81Njc1MiIgb3JkZXI9IjE3MyIgSUQ9IjU2NzUyLjEwMDAwNDMwMCIgdGl0bGU9IktpZG5leSIgLz4KCQkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV81Nzc0OCIgb3JkZXI9IjE3NCIgSUQ9IjU3NzQ4LjEwMDAwNDMwMCIgdGl0bGU9IlBhbmNyZWFzIiAvPgoJCQkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzQxNDA5IiBvcmRlcj0iMTc1IiBJRD0iNDE0MDkuMTAwMDA0MzAwIiB0aXRsZT0iTGl2ZXIiIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDIzMDUiIG9yZGVyPSIxNzYiIElEPSI0MjMwNS4xMDAwMDQzMDAiIHRpdGxlPSJTcGxlZW4iIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTgyMjkiIG9yZGVyPSIxNzciIElEPSI1ODIyOS4xMDAwMDQzMDAiIHRpdGxlPSJEaWFwaHJhZ20iIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDYyMTgiIG9yZGVyPSIxNzgiIElEPSI0NjIxOC4xMDAwMDQzMDAiIHRpdGxlPSJTdG9tYWNoIiAvPgoJCQkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzQ1NTk0IiBvcmRlcj0iMTc5IiBJRD0iNDU1OTQuMTAwMDA0MzAwIiB0aXRsZT0iT3RoZXIgKHNwZWNpZnkpIj4KCQkJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNDU1OTRfMSIgb3JkZXI9IjE4MCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl80NTU5NF8yIiBvcmRlcj0iMTgxIiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF80NTU5NF8zIiBvcmRlcj0iMTgyIj4KCQkJCQkJCQkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzQ1NTk0XzQiIG9yZGVyPSIxODMiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCQkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJCQkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJCQkJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9JbmRldGVybWluYXRlXzUxOTExIiBvcmRlcj0iMTg0IiBJRD0iNTE5MTEuMTAwMDA0MzAwIiB0aXRsZT0iQ2Fubm90IGJlIGFzc2Vzc2VkIiBzZWxlY3Rpb25EZXNlbGVjdHNTaWJsaW5ncz0idHJ1ZSI+CgkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl81MTkxMV8xIiBvcmRlcj0iMTg1Ij4KCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfNTE5MTFfMiIgb3JkZXI9IjE4NiI+CgkJCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNTE5MTFfMyIgb3JkZXI9IjE4NyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCQkJPC9TZWN0aW9uPgoJCQkJCQk8U2VjdGlvbiBuYW1lPSJTXzE3ODc5IiBvcmRlcj0iMTg4IiBJRD0iMTc4NzkuMTAwMDA0MzAwIiB0aXRsZT0iQWNjZXNzb3J5IEZpbmRpbmdzIj4KCQkJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzE3ODc5XzEiIG9yZGVyPSIxODkiPgoJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzQyNDc0IiBvcmRlcj0iMTkwIiBJRD0iNDI0NzQuMTAwMDA0MzAwIiB0aXRsZT0iTHltcGhvdmFzY3VsYXIgSW52YXNpb24gKE5vdGUgRikiPgoJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNDI0NzRfMSIgb3JkZXI9IjE5MSIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iTHltcGhvdmFzY3VsYXIgSW52YXNpb24iIC8+CgkJCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNDI0NzRfMiIgb3JkZXI9IjE5MiIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNDI0NzRfMyIgb3JkZXI9IjE5MyI+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX05vdF9JZF8yMTU5IiBvcmRlcj0iMTk0IiBJRD0iMjE1OS4xMDAwMDQzMDAiIHRpdGxlPSJOb3QgaWRlbnRpZmllZCIgc2VsZWN0aW9uRGVzZWxlY3RzU2libGluZ3M9InRydWUiIC8+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzUyOTYyIiBvcmRlcj0iMTk1IiBJRD0iNTI5NjIuMTAwMDA0MzAwIiB0aXRsZT0iTGFyZ2UgdmVzc2VsLCByZW5hbCB2ZWluIChpbmNsdWRpbmcgd2hlbiBpZGVudGlmaWVkIGNsaW5pY2FsbHkpIiBzZWxlY3RlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81Mjk2Ml8xIiBvcmRlcj0iMTk2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJMYXJnZSB2ZXNzZWwsIHJlbmFsIHZlaW4iIC8+CgkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTk0NTQiIG9yZGVyPSIxOTciIElEPSI1OTQ1NC4xMDAwMDQzMDAiIHRpdGxlPSJMYXJnZSB2ZXNzZWwsIHZlbmEgY2F2YSAoaW5jbHVkaW5nIHdoZW4gaWRlbnRpZmllZCBjbGluaWNhbGx5KSIgc2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNTk0NTRfMSIgb3JkZXI9IjE5OCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iTGFyZ2UgdmVzc2VsLCB2ZW5hIGNhdmEiIC8+CgkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfU21fVmVzc2VsXzIwODgxIiBvcmRlcj0iMTk5IiBJRD0iMjA4ODEuMTAwMDA0MzAwIiB0aXRsZT0iU21hbGwgdmVzc2VsIChjYXBpbGxhcnkgbHltcGhhdGljKSIgLz4KCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfSW5kZXRlcm1pbmF0ZV8yMTYxIiBvcmRlcj0iMjAwIiBJRD0iMjE2MS4xMDAwMDQzMDAiIHRpdGxlPSJDYW5ub3QgYmUgZGV0ZXJtaW5lZCIgc2VsZWN0aW9uRGVzZWxlY3RzU2libGluZ3M9InRydWUiPgoJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjE2MV8xIiBvcmRlcj0iMjAxIj4KCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjE2MV8yIiBvcmRlcj0iMjAyIj4KCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yMTYxXzMiIG9yZGVyPSIyMDMiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfNDg0OTEiIG9yZGVyPSIyMDQiIElEPSI0ODQ5MS4xMDAwMDQzMDAiIHRpdGxlPSJUdW1vciBEZXNjcmlwdGlvbiIgbXVzdEltcGxlbWVudD0iZmFsc2UiIG1pbkNhcmQ9IjAiPgoJCQkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzQ4NDkxXzEiIG9yZGVyPSIyMDUiIG1heFNlbGVjdGlvbnM9IjAiPgoJCQkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzQ4NDkxXzIiIG9yZGVyPSIyMDYiPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9IZW1vcnJoYWdpY18yMDg2MyIgb3JkZXI9IjIwNyIgSUQ9IjIwODYzLjEwMDAwNDMwMCIgdGl0bGU9IkhlbW9ycmhhZ2ljIiAvPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9OZWNyb3RpY18yMDg2NCIgb3JkZXI9IjIwOCIgSUQ9IjIwODY0LjEwMDAwNDMwMCIgdGl0bGU9Ik5lY3JvdGljIiAvPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9PdGhfMjA4NjUiIG9yZGVyPSIyMDkiIElEPSIyMDg2NS4xMDAwMDQzMDAiIHRpdGxlPSJPdGhlciAoc3BlY2lmeSkiPgoJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjA4NjVfMSIgb3JkZXI9IjIxMCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjA4NjVfMiIgb3JkZXI9IjIxMSIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIwODY1XzMiIG9yZGVyPSIyMTIiPgoJCQkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzIwODY1XzQiIG9yZGVyPSIyMTMiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQkJCTwvU2VjdGlvbj4KCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQk8L1NlY3Rpb24+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzE3ODc4IiBvcmRlcj0iMjE0IiBJRD0iMTc4NzguMTAwMDA0MzAwIiB0aXRsZT0iTUFSR0lOUyI+CgkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc4NzhfMSIgb3JkZXI9IjIxNSI+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX01hcmdfU3RhdHVzXzIxNTMiIG9yZGVyPSIyMTYiIElEPSIyMTUzLjEwMDAwNDMwMCIgdGl0bGU9Ik1hcmdpbnMiPgoJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl8yMTUzXzEiIG9yZGVyPSIyMTciPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF8yMTUzXzIiIG9yZGVyPSIyMTgiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTWFyZ1Vudl9UdW1fMjE1NCIgb3JkZXI9IjIxOSIgSUQ9IjIxNTQuMTAwMDA0MzAwIiB0aXRsZT0iVW5pbnZvbHZlZCBieSB0dW1vciI+CgkJCQkJCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF8yMTU0XzEiIG9yZGVyPSIyMjAiPgoJCQkJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX01hcmdVbnZfVHVtX0Rpc3RfMjYzNTgiIG9yZGVyPSIyMjEiIElEPSIyNjM1OC4xMDAwMDQzMDAiIHRpdGxlPSJEaXN0YW5jZSBmcm9tIENsb3Nlc3QgTWFyZ2luIGluIE1pbGxpbWV0ZXJzIChtbSkiIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl8yNjM1OF8xIiBvcmRlcj0iMjIyIj4KCQkJCQkJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF8yNjM1OF8yIiBvcmRlcj0iMjIzIj4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfU3BmeV9tbV8yNjM1OSIgb3JkZXI9IjIyNCIgSUQ9IjI2MzU5LjEwMDAwNDMwMCIgdGl0bGU9IlNwZWNpZnkgaW4gTWlsbGltZXRlcnMgKG1tKSI+CgkJCQkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yNjM1OV8xIiBvcmRlcj0iMjI1IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yNjM1OV8yIiBvcmRlcj0iMjI2IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjYzNTlfMyIgb3JkZXI9IjIyNyI+CgkJCQkJCQkJCQkJCQkJCQkJPGRlY2ltYWwgbmFtZT0iZGVjXzI2MzU5XzQiIG9yZGVyPSIyMjgiIG1pbkluY2x1c2l2ZT0iMC4wMTAwMDAwMDAiIG1heEluY2x1c2l2ZT0iMTAwMC4wMDAwMDAwMDAiIGZyYWN0aW9uRGlnaXRzPSIyIiB0b3RhbERpZ2l0cz0iNSIgLz4KCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCQk8VGV4dEFmdGVyUmVzcG9uc2UgbmFtZT0icnR0XzI2MzU5XzUiIG9yZGVyPSIyMjkiIHZhbD0iTWlsbGltZXRlcnMgKG1tKSIgLz4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZVVuaXRzIG5hbWU9InVuXzI2MzU5XzYiIG9yZGVyPSIyMzAiIHZhbD0ibW0iIHVuaXRTeXN0ZW09IlVDT00iIC8+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0NCQV8yNjM2MSIgb3JkZXI9IjIzMSIgSUQ9IjI2MzYxLjEwMDAwNDMwMCIgdGl0bGU9IkNhbm5vdCBiZSBkZXRlcm1pbmVkIChleHBsYWluKSI+CgkJCQkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yNjM2MV8xIiBvcmRlcj0iMjMyIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJDYW5ub3QgYmUgZGV0ZXJtaW5lZCIgLz4KCQkJCQkJCQkJCQkJCQkJPExpc3RJdGVtUmVzcG9uc2VGaWVsZCBuYW1lPSJsaXJmXzI2MzYxXzIiIG9yZGVyPSIyMzMiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yNjM2MV8zIiBvcmRlcj0iMjM0Ij4KCQkJCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yNjM2MV80IiBvcmRlcj0iMjM1IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX01hcmdfTG9jXzI2MzYyIiBvcmRlcj0iMjM2IiBJRD0iMjYzNjIuMTAwMDA0MzAwIiB0aXRsZT0iP1NwZWNpZnkgTWFyZ2luLCBpZiBwb3NzaWJsZSI+CgkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yNjM2Ml8xIiBvcmRlcj0iMjM3IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJNYXJnaW4iIC8+CgkJCQkJCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfMjYzNjJfMiIgb3JkZXI9IjIzOCI+CgkJCQkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfMjYzNjJfMyIgb3JkZXI9IjIzOSI+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX01hcmdfTG9jXzI2MzYzIiBvcmRlcj0iMjQwIiBJRD0iMjYzNjMuMTAwMDA0MzAwIiB0aXRsZT0iU3BlY2lmeSBtYXJnaW4iPgoJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjYzNjNfMSIgb3JkZXI9IjI0MSIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjYzNjNfMiIgb3JkZXI9IjI0MiIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzI2MzYzXzMiIG9yZGVyPSIyNDMiPgoJCQkJCQkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzI2MzYzXzQiIG9yZGVyPSIyNDQiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0NCRF8yNjM2NCIgb3JkZXI9IjI0NSIgSUQ9IjI2MzY0LjEwMDAwNDMwMCIgdGl0bGU9Ij9DYW5ub3QgYmUgZGV0ZXJtaW5lZCIgb21pdFdoZW5TZWxlY3RlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yNjM2NF8xIiBvcmRlcj0iMjQ2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJDYW5ub3QgYmUgZGV0ZXJtaW5lZCIgLz4KCQkJCQkJCQkJCQkJCQkJPExpc3RJdGVtUmVzcG9uc2VGaWVsZCBuYW1lPSJsaXJmXzI2MzY0XzIiIG9yZGVyPSIyNDciPgoJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yNjM2NF8zIiBvcmRlcj0iMjQ4Ij4KCQkJCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yNjM2NF80IiBvcmRlcj0iMjQ5IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTWFyZ19UdW1fMjE1NSIgb3JkZXI9IjI1MCIgSUQ9IjIxNTUuMTAwMDA0MzAwIiB0aXRsZT0iSW52b2x2ZWQgYnkgdHVtb3IiPgoJCQkJCQkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMjE1NV8xIiBvcmRlcj0iMjUxIj4KCQkJCQkJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9NYXJnX0xvY18yNjM2NSIgb3JkZXI9IjI1MiIgSUQ9IjI2MzY1LjEwMDAwNDMwMCIgdGl0bGU9Ij9TcGVjaWZ5IE1hcmdpbihzKSwgaWYgcG9zc2libGUiPgoJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjYzNjVfMSIgb3JkZXI9IjI1MyIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iTWFyZ2luKHMpIiAvPgoJCQkJCQkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzI2MzY1XzIiIG9yZGVyPSIyNTQiPgoJCQkJCQkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzI2MzY1XzMiIG9yZGVyPSIyNTUiPgoJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9NYXJnX0xvY18yNjM2NiIgb3JkZXI9IjI1NiIgSUQ9IjI2MzY2LjEwMDAwNDMwMCIgdGl0bGU9IlNwZWNpZnkgbWFyZ2luKHMpIj4KCQkJCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzI2MzY2XzEiIG9yZGVyPSIyNTciIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IntubyB0ZXh0fSIgLz4KCQkJCQkJCQkJCQkJCQkJPExpc3RJdGVtUmVzcG9uc2VGaWVsZCBuYW1lPSJsaXJmXzI2MzY2XzIiIG9yZGVyPSIyNTgiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yNjM2Nl8zIiBvcmRlcj0iMjU5Ij4KCQkJCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yNjM2Nl80IiBvcmRlcj0iMjYwIiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9DQkRfMjYzNjciIG9yZGVyPSIyNjEiIElEPSIyNjM2Ny4xMDAwMDQzMDAiIHRpdGxlPSI/Q2Fubm90IGJlIGRldGVybWluZWQiIG9taXRXaGVuU2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjYzNjdfMSIgb3JkZXI9IjI2MiIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iQ2Fubm90IGJlIGRldGVybWluZWQiIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yNjM2N18yIiBvcmRlcj0iMjYzIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjYzNjdfMyIgb3JkZXI9IjI2NCI+CgkJCQkJCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjYzNjdfNCIgb3JkZXI9IjI2NSIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0NCRF8yMTU3IiBvcmRlcj0iMjY2IiBJRD0iMjE1Ny4xMDAwMDQzMDAiIHRpdGxlPSJDYW5ub3QgYmUgYXNzZXNzZWQiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMTU3XzEiIG9yZGVyPSIyNjciPgoJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjE1N18yIiBvcmRlcj0iMjY4Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjE1N18zIiBvcmRlcj0iMjY5IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTkFfMjA4NTIiIG9yZGVyPSIyNzAiIElEPSIyMDg1Mi4xMDAwMDQzMDAiIHRpdGxlPSJOb3QgYXBwbGljYWJsZSI+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjA4NTJfMSIgb3JkZXI9IjI3MSI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yMDg1Ml8yIiBvcmRlcj0iMjcyIj4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjA4NTJfMyIgb3JkZXI9IjI3MyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQk8L1NlY3Rpb24+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzE3ODgxIiBvcmRlcj0iMjc0IiBJRD0iMTc4ODEuMTAwMDA0MzAwIiB0aXRsZT0iTFlNUEggTk9ERVMiPgoJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzE3ODgxXzEiIG9yZGVyPSIyNzUiPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV8xODY3IiBvcmRlcj0iMjc2IiBJRD0iMTg2Ny4xMDAwMDQzMDAiIHRpdGxlPSJSZWdpb25hbCBMeW1waCBOb2RlcyI+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzE4NjdfMSIgb3JkZXI9IjI3NyIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzE4NjdfMiIgb3JkZXI9IjI3OCI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9Ob19MTl9JZF8xODY4IiBvcmRlcj0iMjc5IiBJRD0iMTg2OC4xMDAwMDQzMDAiIHRpdGxlPSJObyBseW1waCBub2RlcyBzdWJtaXR0ZWQgb3IgZm91bmQiIHNlbGVjdGlvbkRpc2FibGVzQ2hpbGRyZW49InRydWUiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzE4NjhfMSIgb3JkZXI9IjI4MCI+CgkJCQkJCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfNDUwOTgiIG9yZGVyPSIyODEiIElEPSI0NTA5OC4xMDAwMDQzMDAiIHRpdGxlPSJOdW1iZXIgb2YgTHltcGggTm9kZXMgSW52b2x2ZWQiPgoJCQkJCQkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzQ1MDk4XzEiIG9yZGVyPSIyODIiPgoJCQkJCQkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzQ1MDk4XzIiIG9yZGVyPSIyODMiPgoJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9TcGVjaWZ5XzE4NzMiIG9yZGVyPSIyODQiIElEPSIxODczLjEwMDAwNDMwMCIgdGl0bGU9IlNwZWNpZnkgbnVtYmVyIj4KCQkJCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzE4NzNfMSIgb3JkZXI9IjI4NSIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMTg3M18yIiBvcmRlcj0iMjg2IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMTg3M18zIiBvcmRlcj0iMjg3Ij4KCQkJCQkJCQkJCQkJCQkJCQk8aW50ZWdlciBuYW1lPSJpbnRyXzE4NzNfNCIgb3JkZXI9IjI4OCIgbWF4SW5jbHVzaXZlPSIxMDAiIG1pbkluY2x1c2l2ZT0iMCIgLz4KCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzU4OTM4IiBvcmRlcj0iMjg5IiBJRD0iNTg5MzguMTAwMDA0MzAwIiB0aXRsZT0iQXQgbGVhc3QiPgoJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfNTg5MzhfMSIgb3JkZXI9IjI5MCIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzU4OTM4XzIiIG9yZGVyPSIyOTEiPgoJCQkJCQkJCQkJCQkJCQkJCTxpbnRlZ2VyIG5hbWU9ImludHJfNTg5MzhfMyIgb3JkZXI9IjI5MiIgbWF4SW5jbHVzaXZlPSIxMDAiIG1pbkluY2x1c2l2ZT0iMSIgLz4KCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0NCRF8xODc0IiBvcmRlcj0iMjkzIiBJRD0iMTg3NC4xMDAwMDQzMDAiIHRpdGxlPSJOdW1iZXIgY2Fubm90IGJlIGRldGVybWluZWQgKGV4cGxhaW4pIj4KCQkJCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzE4NzRfMSIgb3JkZXI9IjI5NCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iTnVtYmVyIGNhbm5vdCBiZSBkZXRlcm1pbmVkIiAvPgoJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMTg3NF8yIiBvcmRlcj0iMjk1IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMTg3NF8zIiBvcmRlcj0iMjk2Ij4KCQkJCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8xODc0XzQiIG9yZGVyPSIyOTciIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQkJCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF80NTA5OF81IiBvcmRlcj0iMjk4Ij4KCQkJCQkJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzM5Mjk2IiBvcmRlcj0iMjk5IiBJRD0iMzkyOTYuMTAwMDA0MzAwIiB0aXRsZT0iRXh0cmFub2RhbCBFeHRlbnNpb24iIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCQkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzM5Mjk2XzEiIG9yZGVyPSIzMDAiPgoJCQkJCQkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfMzkyOTZfMiIgb3JkZXI9IjMwMSI+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTm90X0lkXzIwODg2IiBvcmRlcj0iMzAyIiBJRD0iMjA4ODYuMTAwMDA0MzAwIiB0aXRsZT0iTm90IGlkZW50aWZpZWQiIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfUHJlc2VudF8yMDg4NyIgb3JkZXI9IjMwMyIgSUQ9IjIwODg3LjEwMDAwNDMwMCIgdGl0bGU9IlByZXNlbnQiIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfSW5kZXRlcm1pbmF0ZV8yMDg4OCIgb3JkZXI9IjMwNCIgSUQ9IjIwODg4LjEwMDAwNDMwMCIgdGl0bGU9IkNhbm5vdCBiZSBkZXRlcm1pbmVkIj4KCQkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjA4ODhfMSIgb3JkZXI9IjMwNSI+CgkJCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjA4ODhfMiIgb3JkZXI9IjMwNiI+CgkJCQkJCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yMDg4OF8zIiBvcmRlcj0iMzA3IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQkJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV80MjkzNCIgb3JkZXI9IjMwOCIgSUQ9IjQyOTM0LjEwMDAwNDMwMCIgdGl0bGU9Ik51bWJlciBvZiBMeW1waCBOb2RlcyBFeGFtaW5lZCI+CgkJCQkJCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNDI5MzRfMSIgb3JkZXI9IjMwOSI+CgkJCQkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNDI5MzRfMiIgb3JkZXI9IjMxMCI+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX1NwZWNpZnlfMTg3MCIgb3JkZXI9IjMxMSIgSUQ9IjE4NzAuMTAwMDA0MzAwIiB0aXRsZT0iU3BlY2lmeSBudW1iZXIiPgoJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMTg3MF8xIiBvcmRlcj0iMzEyIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8xODcwXzIiIG9yZGVyPSIzMTMiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8xODcwXzMiIG9yZGVyPSIzMTQiPgoJCQkJCQkJCQkJCQkJCQkJCTxpbnRlZ2VyIG5hbWU9ImludHJfMTg3MF80IiBvcmRlcj0iMzE1IiBtYXhJbmNsdXNpdmU9IjEwMCIgbWluSW5jbHVzaXZlPSIxIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTQ2MTAiIG9yZGVyPSIzMTYiIElEPSI1NDYxMC4xMDAwMDQzMDAiIHRpdGxlPSJBdCBsZWFzdCI+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl81NDYxMF8xIiBvcmRlcj0iMzE3IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfNTQ2MTBfMiIgb3JkZXI9IjMxOCI+CgkJCQkJCQkJCQkJCQkJCQkJPGludGVnZXIgbmFtZT0iaW50cl81NDYxMF8zIiBvcmRlcj0iMzE5IiBtYXhJbmNsdXNpdmU9IjEwMCIgbWluSW5jbHVzaXZlPSIxIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQ0JEXzE4NzEiIG9yZGVyPSIzMjAiIElEPSIxODcxLjEwMDAwNDMwMCIgdGl0bGU9Ik51bWJlciBjYW5ub3QgYmUgZGV0ZXJtaW5lZCAoZXhwbGFpbikiPgoJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMTg3MV8xIiBvcmRlcj0iMzIxIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJOdW1iZXIgY2Fubm90IGJlIGRldGVybWluZWQiIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8xODcxXzIiIG9yZGVyPSIzMjIiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8xODcxXzMiIG9yZGVyPSIzMjMiPgoJCQkJCQkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzE4NzFfNCIgb3JkZXI9IjMyNCIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQk8L1NlY3Rpb24+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzIxMzYiIG9yZGVyPSIzMjUiIElEPSIyMTM2LjEwMDAwNDMwMCIgdGl0bGU9IlBBVEhPTE9HSUMgU1RBR0UgQ0xBU1NJRklDQVRJT04gIChwVE5NLCBBSkNDIDh0aCBFZGl0aW9uKSAoTm90ZSBHKSI+CgkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxMzZfMSIgb3JkZXI9IjMyNiIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iUEFUSE9MT0dJQyBTVEFHRSBDTEFTU0lGSUNBVElPTiAgKHBUTk0sIEFKQ0MgOHRoIEVkaXRpb24pIiAvPgoJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzIxMzZfMiIgb3JkZXI9IjMyNyI+CgkJCQkJCTxEaXNwbGF5ZWRJdGVtIG5hbWU9IkRJXzUxMDg3IiBvcmRlcj0iMzI4IiBJRD0iNTEwODcuMTAwMDA0MzAwIiB0aXRsZT0iTm90ZTogUmVwb3J0aW5nIG9mIHBULCBwTiwgYW5kICh3aGVuIGFwcGxpY2FibGUpIHBNIGNhdGVnb3JpZXMgaXMgYmFzZWQgb24gaW5mb3JtYXRpb24gYXZhaWxhYmxlIHRvIHRoZSBwYXRob2xvZ2lzdCBhdCB0aGUgdGltZSB0aGUgcmVwb3J0IGlzIGlzc3VlZC4gIEFzIHBlciB0aGUgQUpDQyAoQ2hhcHRlciAxLCA4dGggRWQuKSBpdCBpcyB0aGUgbWFuYWdpbmcgcGh5c2ljaWFucyByZXNwb25zaWJpbGl0eSB0byBlc3RhYmxpc2ggdGhlIGZpbmFsIHBhdGhvbG9naWMgc3RhZ2UgYmFzZWQgdXBvbiBhbGwgcGVydGluZW50IGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgYnV0IHBvdGVudGlhbGx5IG5vdCBsaW1pdGVkIHRvIHRoaXMgcGF0aG9sb2d5IHJlcG9ydC4iPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzUxMDg3XzEiIG9yZGVyPSIzMjkiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9Ik5vdGU6IFJlcG9ydGluZyBvZiBwVCwgcE4sIGFuZCAod2hlbiBhcHBsaWNhYmxlKSBwTSBjYXRlZ29yaWVzIGlzIGJhc2VkIG9uIGluZm9ybWF0aW9uIGF2YWlsYWJsZSB0byB0aGUgcGF0aG9sb2dpc3QgYXQgdGhlIHRpbWUgdGhlIHJlcG9ydCBpcyBpc3N1ZWQuICBBcyBwZXIgdGhlIEFKQ0MgKENoYXB0ZXIgMSwgOHRoIEVkLikgaXQgaXMgdGhlIG1hbmFnaW5nIHBoeXNpY2lhbnMgcmVzcG9uc2liaWxpdHkgdG8gZXN0YWJsaXNoIHRoZSBmaW5hbCBwYXRob2xvZ2ljIHN0YWdlIGJhc2VkIHVwb24gYWxsIHBlcnRpbmVudCBpbmZvcm1hdGlvbiwgaW5jbHVkaW5nIGJ1dCBwb3RlbnRpYWxseSBub3QgbGltaXRlZCB0byB0aGlzIHBhdGhvbG9neSByZXBvcnQuIiAvPgoJCQkJCQk8L0Rpc3BsYXllZEl0ZW0+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX1ROTV9EZXNjcmlwdG9yc18yMDg4MCIgb3JkZXI9IjMzMCIgSUQ9IjIwODgwLjEwMDAwNDMwMCIgdGl0bGU9Ij9UTk0gRGVzY3JpcHRvcnMiPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIwODgwXzEiIG9yZGVyPSIzMzEiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IlROTSBEZXNjcmlwdG9ycyIgLz4KCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfMjA4ODBfMiIgb3JkZXI9IjMzMiIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIwODgwXzMiIG9yZGVyPSIzMzMiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTkFfMjI4OTciIG9yZGVyPSIzMzQiIElEPSIyMjg5Ny4xMDAwMDQzMDAiIHRpdGxlPSI/Tm90IGFwcGxpY2FibGUiIHNlbGVjdGlvbkRlc2VsZWN0c1NpYmxpbmdzPSJ0cnVlIiBvbWl0V2hlblNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMjg5N18xIiBvcmRlcj0iMzM1IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJOb3QgYXBwbGljYWJsZSIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMjg5N18yIiBvcmRlcj0iMzM2Ij4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIyODk3XzMiIG9yZGVyPSIzMzciPgoJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yMjg5N180IiBvcmRlcj0iMzM4IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfbV8yMDg5MCIgb3JkZXI9IjMzOSIgSUQ9IjIwODkwLjEwMDAwNDMwMCIgdGl0bGU9Im0gKG11bHRpcGxlIHByaW1hcnkgdHVtb3JzKSIgc2VsZWN0ZWQ9InRydWUiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9yXzIwODkxIiBvcmRlcj0iMzQwIiBJRD0iMjA4OTEuMTAwMDA0MzAwIiB0aXRsZT0iciAocmVjdXJyZW50KSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3lfMjA4OTIiIG9yZGVyPSIzNDEiIElEPSIyMDg5Mi4xMDAwMDQzMDAiIHRpdGxlPSJ5IChwb3N0LXRyZWF0bWVudCkiIC8+CgkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX3BUXzIxMzciIG9yZGVyPSIzNDIiIElEPSIyMTM3LjEwMDAwNDMwMCIgdGl0bGU9IlByaW1hcnkgVHVtb3IgKHBUKSI+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzIxMzdfMSIgb3JkZXI9IjM0MyI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIxMzdfMiIgb3JkZXI9IjM0NCI+CgkJCQkJCQkJCTxEaXNwbGF5ZWRJdGVtIG5hbWU9IkRJXzIwODk0IiBvcmRlcj0iMzQ1IiBJRD0iMjA4OTQuMTAwMDA0MzAwIiB0aXRsZT0iTm90ZTogVGhlcmUgaXMgbm8gY2F0ZWdvcnkgb2YgY2FyY2lub21hIGluIHNpdHUgKHBUaXMpIHJlbGF0aXZlIHRvIGNhcmNpbm9tYXMgb2YgdGhlIGFkcmVuYWwgZ2xhbmQuIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMDg5NF8xIiBvcmRlcj0iMzQ2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCTwvRGlzcGxheWVkSXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3BUWF8yMTQyIiBvcmRlcj0iMzQ3IiBJRD0iMjE0Mi4xMDAwMDQzMDAiIHRpdGxlPSJwVFg6IFByaW1hcnkgdHVtb3IgY2Fubm90IGJlIGFzc2Vzc2VkIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTQyXzEiIG9yZGVyPSIzNDgiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9InBUWCIgLz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3BUMF8yMDg4OSIgb3JkZXI9IjM0OSIgSUQ9IjIwODg5LjEwMDAwNDMwMCIgdGl0bGU9InBUMDogTm8gZXZpZGVuY2Ugb2YgcHJpbWFyeSB0dW1vciI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjA4ODlfMSIgb3JkZXI9IjM1MCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0icFQwIiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfcFQxXzIxMzgiIG9yZGVyPSIzNTEiIElEPSIyMTM4LjEwMDAwNDMwMCIgdGl0bGU9InBUMTogVHVtb3IgJmx0Oz0gNSBjbSBpbiBncmVhdGVzdCBkaW1lbnNpb24sIG5vIGV4dHJhLWFkcmVuYWwgaW52YXNpb24iPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxMzhfMSIgb3JkZXI9IjM1MiIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0icFQxIiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfcFQyXzIxMzkiIG9yZGVyPSIzNTMiIElEPSIyMTM5LjEwMDAwNDMwMCIgdGl0bGU9InBUMjogVHVtb3IgJmd0OyA1IGNtLCBubyBleHRyYS1hZHJlbmFsIGludmFzaW9uIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTM5XzEiIG9yZGVyPSIzNTQiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9InBUMiIgLz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3BUM18yMTQwIiBvcmRlcj0iMzU1IiBJRD0iMjE0MC4xMDAwMDQzMDAiIHRpdGxlPSJwVDM6IFR1bW9yIG9mIGFueSBzaXplIHdpdGggbG9jYWwgaW52YXNpb24sIGJ1dCBub3QgaW52YWRpbmcgYWRqYWNlbnQgb3JnYW5zIiBzZWxlY3RlZD0idHJ1ZSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjE0MF8xIiBvcmRlcj0iMzU2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJwVDMiIC8+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9wVDRfMjE0MSIgb3JkZXI9IjM1NyIgSUQ9IjIxNDEuMTAwMDA0MzAwIiB0aXRsZT0icFQ0OiBUdW1vciBvZiBhbnkgc2l6ZSB3aXRoIGludmFzaW9uIG9mIGFkamFjZW50IG9yZ2FucyAoa2lkbmV5LCBkaWFwaHJhZ20sIHBhbmNyZWFzLCBzcGxlZW4sIG9yIGxpdmVyKSBvciBsYXJnZSBibG9vZCB2ZXNzZWxzIChyZW5hbCB2ZWluIG9yIHZlbmEgY2F2YSkiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxNDFfMSIgb3JkZXI9IjM1OCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0icFQ0IiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9wTl8yMTQzIiBvcmRlcj0iMzU5IiBJRD0iMjE0My4xMDAwMDQzMDAiIHRpdGxlPSJSZWdpb25hbCBMeW1waCBOb2RlcyAocE4pIChOb3RlIEgpIj4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTQzXzEiIG9yZGVyPSIzNjAiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IlJlZ2lvbmFsIEx5bXBoIE5vZGVzIChwTikiIC8+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzIxNDNfMiIgb3JkZXI9IjM2MSI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIxNDNfMyIgb3JkZXI9IjM2MiI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9wTlhfMjE0NCIgb3JkZXI9IjM2MyIgSUQ9IjIxNDQuMTAwMDA0MzAwIiB0aXRsZT0icE5YOiBSZWdpb25hbCBseW1waCBub2RlcyBjYW5ub3QgYmUgYXNzZXNzZWQiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxNDRfMSIgb3JkZXI9IjM2NCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0icE5YIiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfcE4wXzIxNDUiIG9yZGVyPSIzNjUiIElEPSIyMTQ1LjEwMDAwNDMwMCIgdGl0bGU9InBOMDogTm8gcmVnaW9uYWwgbHltcGggbm9kZSBtZXRhc3Rhc2lzIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTQ1XzEiIG9yZGVyPSIzNjYiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9InBOMCIgLz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3BOMV8yMTQ2IiBvcmRlcj0iMzY3IiBJRD0iMjE0Ni4xMDAwMDQzMDAiIHRpdGxlPSJwTjE6IE1ldGFzdGFzaXMgaW4gcmVnaW9uYWwgbHltcGggbm9kZShzKSIgc2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxNDZfMSIgb3JkZXI9IjM2OCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0icE4xIiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9wTV8yMTQ5IiBvcmRlcj0iMzY5IiBJRD0iMjE0OS4xMDAwMDQzMDAiIHRpdGxlPSI/RGlzdGFudCBNZXRhc3Rhc2lzIChwTSkgKE5vdGUgSSkiPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxNDlfMSIgb3JkZXI9IjM3MCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iRGlzdGFudCBNZXRhc3Rhc2lzIChwTSkiIC8+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzIxNDlfMiIgb3JkZXI9IjM3MSI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIxNDlfMyIgb3JkZXI9IjM3MiI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9OQV8yMDg5NSIgb3JkZXI9IjM3MyIgSUQ9IjIwODk1LjEwMDAwNDMwMCIgdGl0bGU9Ij9Ob3QgYXBwbGljYWJsZSAtIHBNIGNhbm5vdCBiZSBkZXRlcm1pbmVkIGZyb20gdGhlIHN1Ym1pdHRlZCBzcGVjaW1lbihzKSIgb21pdFdoZW5TZWxlY3RlZD0idHJ1ZSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjA4OTVfMSIgb3JkZXI9IjM3NCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iTm90IGFwcGxpY2FibGUgLSBwTSBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzdWJtaXR0ZWQgc3BlY2ltZW4ocykiIC8+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9wTTFfMjE1MSIgb3JkZXI9IjM3NSIgSUQ9IjIxNTEuMTAwMDA0MzAwIiB0aXRsZT0icE0xOiBEaXN0YW50IG1ldGFzdGFzaXMiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTUxXzEiIG9yZGVyPSIzNzYiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9InBNMSIgLz4KCQkJCQkJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzIxNTFfMiIgb3JkZXI9IjM3NyI+CgkJCQkJCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfcE1fTG9jXzIxNTIiIG9yZGVyPSIzNzgiIElEPSIyMTUyLjEwMDAwNDMwMCIgdGl0bGU9Ij9TcGVjaWZ5IFNpdGUocyksIGlmIGtub3duIiBtaW5DYXJkPSIwIj4KCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxNTJfMSIgb3JkZXI9IjM3OSIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iU2l0ZShzKSIgLz4KCQkJCQkJCQkJCQkJPFJlc3BvbnNlRmllbGQgbmFtZT0icmZfMjE1Ml8yIiBvcmRlcj0iMzgwIj4KCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjE1Ml8zIiBvcmRlcj0iMzgxIj4KCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yMTUyXzQiIG9yZGVyPSIzODIiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCTwvUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCTwvU2VjdGlvbj4KCQkJCTxTZWN0aW9uIG5hbWU9IlNfMTc4ODQiIG9yZGVyPSIzODMiIElEPSIxNzg4NC4xMDAwMDQzMDAiIHRpdGxlPSJBRERJVElPTkFMIEZJTkRJTkdTIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc4ODRfMSIgb3JkZXI9IjM4NCI+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzM5MTg4IiBvcmRlcj0iMzg1IiBJRD0iMzkxODguMTAwMDA0MzAwIiB0aXRsZT0iQWRkaXRpb25hbCBQYXRob2xvZ2ljIEZpbmRpbmdzIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzM5MTg4XzEiIG9yZGVyPSIzODYiIG1heFNlbGVjdGlvbnM9IjAiPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF8zOTE4OF8yIiBvcmRlcj0iMzg3Ij4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX05vbmVfSWRfMjE2MyIgb3JkZXI9IjM4OCIgSUQ9IjIxNjMuMTAwMDA0MzAwIiB0aXRsZT0iTm9uZSBpZGVudGlmaWVkIiBzZWxlY3Rpb25EZXNlbGVjdHNTaWJsaW5ncz0idHJ1ZSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0hlbW9ycmhhZ2VfMjA4OTciIG9yZGVyPSIzODkiIElEPSIyMDg5Ny4xMDAwMDQzMDAiIHRpdGxlPSJIZW1vcnJoYWdlIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQ3lzdGljX0NoYW5nZV8yMDg5OCIgb3JkZXI9IjM5MCIgSUQ9IjIwODk4LjEwMDAwNDMwMCIgdGl0bGU9IkN5c3RpYyBjaGFuZ2UiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9DYWxjaWZpY2F0aW9uc18yMDg1NCIgb3JkZXI9IjM5MSIgSUQ9IjIwODU0LjEwMDAwNDMwMCIgdGl0bGU9IkNhbGNpZmljYXRpb25zIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfT3RoXzIxNjciIG9yZGVyPSIzOTIiIElEPSIyMTY3LjEwMDAwNDMwMCIgdGl0bGU9Ik90aGVyIChzcGVjaWZ5KSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjE2N18xIiBvcmRlcj0iMzkzIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjE2N18yIiBvcmRlcj0iMzk0IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIxNjdfMyIgb3JkZXI9IjM5NSI+CgkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzIxNjdfNCIgb3JkZXI9IjM5NiIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQk8L1NlY3Rpb24+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzE3ODgwIiBvcmRlcj0iMzk3IiBJRD0iMTc4ODAuMTAwMDA0MzAwIiB0aXRsZT0iU1BFQ0lBTCBTVFVESUVTIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc4ODBfMSIgb3JkZXI9IjM5OCI+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzUzMjMxIiBvcmRlcj0iMzk5IiBJRD0iNTMyMzEuMTAwMDA0MzAwIiB0aXRsZT0iQW5jaWxsYXJ5IFN0dWRpZXMgKE5vdGUgTCkiIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81MzIzMV8xIiBvcmRlcj0iNDAwIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJBbmNpbGxhcnkgU3R1ZGllcyIgLz4KCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNTMyMzFfMiIgb3JkZXI9IjQwMSIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzUzMjMxXzMiIG9yZGVyPSI0MDIiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDEzNTIiIG9yZGVyPSI0MDMiIElEPSI0MTM1Mi4xMDAwMDQzMDAiIHRpdGxlPSJLaS02NyBtaXRvdGljIHJhdGUgKHNwZWNpZnkpIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF80MTM1Ml8xIiBvcmRlcj0iNDA0IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJLaS02NyBtaXRvdGljIHJhdGUiIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfNDEzNTJfMiIgb3JkZXI9IjQwNSIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF80MTM1Ml8zIiBvcmRlcj0iNDA2Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNDEzNTJfNCIgb3JkZXI9IjQwNyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzU0NDM2IiBvcmRlcj0iNDA4IiBJRD0iNTQ0MzYuMTAwMDA0MzAwIiB0aXRsZT0iUmV0aWN1bGluIHN0YWluIChzcGVjaWZ5IHR5cGUocykgYW5kIHJlc3VsdChzKSkiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzU0NDM2XzEiIG9yZGVyPSI0MDkiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IlJldGljdWxpbiBzdGFpbiIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl81NDQzNl8yIiBvcmRlcj0iNDEwIiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzU0NDM2XzMiIG9yZGVyPSI0MTEiPgoJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl81NDQzNl80IiBvcmRlcj0iNDEyIiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTIwMjMiIG9yZGVyPSI0MTMiIElEPSI1MjAyMy4xMDAwMDQzMDAiIHRpdGxlPSJPdGhlciAoc3BlY2lmeSB0eXBlIGFuZCByZXN1bHQpIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81MjAyM18xIiBvcmRlcj0iNDE0IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfNTIwMjNfMiIgb3JkZXI9IjQxNSIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF81MjAyM18zIiBvcmRlcj0iNDE2Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNTIwMjNfNCIgb3JkZXI9IjQxNyIgbWF4TGVuZ3RoPSI4MCIgLz4KCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJPC9TZWN0aW9uPgoJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfQ29tbWVudHNfMjE2OCIgb3JkZXI9IjQxOCIgSUQ9IjIxNjguMTAwMDA0MzAwIiB0aXRsZT0iP0NvbW1lbnQocykiIG1pbkNhcmQ9IjAiPgoJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTY4XzEiIG9yZGVyPSI0MTkiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IkNvbW1lbnQocykiIC8+CgkJCQkJPFJlc3BvbnNlRmllbGQgbmFtZT0icmZfMjE2OF8yIiBvcmRlcj0iNDIwIj4KCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yMTY4XzMiIG9yZGVyPSI0MjEiPgoJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjE2OF80IiBvcmRlcj0iNDIyIiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJPC9SZXNwb25zZUZpZWxkPgoJCQkJPC9RdWVzdGlvbj4KCQkJPC9DaGlsZEl0ZW1zPgoJCTwvQm9keT4KCQk8Rm9vdGVyIG5hbWU9ImZvb3RlciIgb3JkZXI9IjQyMyIgSUQ9IkZvb3Rlci5BZHJlbmFsLkJ4LlJlcy4xMjlfMy4wMDIuMDExLlJDMV9zZGNGREYiPgoJCQk8UHJvcGVydHkgdHlwZT0ibWV0YSIgc3R5bGVDbGFzcz0iY29weXJpZ2h0IiBvcmRlcj0iNDI0IiBwcm9wTmFtZT0iQ29weXJpZ2h0Rm9vdGVyIiB2YWw9IihjKSAyMDE4IENvbGxlZ2Ugb2YgQW1lcmljYW4gUGF0aG9sb2dpc3RzLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC4gIExpY2Vuc2UgcmVxdWlyZWQgZm9yIHVzZS4iIC8+CgkJPC9Gb290ZXI+Cgk8L0Zvcm1EZXNpZ24+CjwvU0RDU3VibWlzc2lvblBhY2thZ2U+"
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:pcc:crc:2008 "PCC CRC"

---

// File: input/fsh/EX_ObservationChild.fsh

Instance: SDCeCCObservationChild
InstanceOf: ObservationSDCeCC
Title: "SDC eCP Observation Child Example"
Description: "Example Child Observation demonstrating a parent derivedFrom reference"
Usage: #example

* id = "SDCeCCObservationChild"
* identifier.system = "http://example.org/Observation"
* identifier.value = "fikea3-188a-4ko3-00dc-8282cc908f3e"
* status = #final
* code = CAP#25899 
* subject = Reference(http://example.org/patient)
* subject.display = "Example Patient"
* effectiveDateTime = "2021-05-11"
* performer = Reference(http://example.org/practitioner)
* performer.display = "Example Practitioner"
* valueCodeableConcept = CAP#25900 "Internal control cells present and stain as expected"
* derivedFrom.identifier.system = "http://example.org/Observation"
* derivedFrom.identifier.value = "eccea3-121a-4bc3-94dc-7463cc908f2e"

---

// File: input/fsh/EX_ObservationCode.fsh

Instance: SDCeCCObservationCode
InstanceOf: ObservationSDCeCC
Title: "SDC eCP Observation Code Example"
Description: "Example Observation using codes from SDC"
Usage: #example 
* id = "SDCeCCObservationCode"
* identifier.use = #usual 
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN "Accession ID"
* identifier.system = "http://example.org/Observation"
* identifier.value = "SDCeCCObservationCodeEx0"
* status = #final "final"
* code = CAP#56271 "Tumor invades into other adjacent organ(s)"
* subject = Reference(http://example.org/patient)
* subject.display = "Example Patient"
* effectiveDateTime = "2021-05-11"
* performer = Reference(http://example.org/practitioner)
* performer.display = "Example Practitioner"
* valueCodeableConcept = CAP#56752 "Kidney"

---

// File: input/fsh/EX_ObservationCodeLIR.fsh

Instance: SDCeCCObservationCodeLIR
InstanceOf: ObservationSDCeCC
Title: "SDC eCP Observation List Item Response Example"
Description: "Example Observation using codes with an additional response from SDC, which asked the user to specify the Greatest Dimension in cm."
Usage: #example 
* id = "SDCeCCObservationCodeLIR"
* identifier.use = #usual 
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN "Accession ID"
* identifier.system = "http://example.org/Observation"
* identifier.value = "SDCeCCObservationCodeEx0"
* status = #final "final"
* code = CAP#2129 "Tumor size (Note A)"
* subject = Reference(http://example.org/patient)
* subject.display = "Example Patient"
* effectiveDateTime = "2021-05-11"
* performer = Reference(http://example.org/practitioner)
* performer.display = "Example Practitioner"
* valueCodeableConcept = CAP#2123 "Greatest Dimension in cm"
* component.code = CAP#2123 "Greatest Dimension in cm"
* component.valueQuantity.value = 2
* component.valueQuantity.unit = UCUM#cm

---

// File: input/fsh/EX_ObservationParent.fsh

Instance: SDCeCCObservationParent
InstanceOf: ObservationSDCeCC
Title: "SDC eCP Observation Parent Example"
Description: "Example Parent Observation demonstrating a child hasMember reference"
Usage: #example 
* id = "SDCeCCObservationParent"
* identifier.system = "http://example.org/Observation"
* identifier.value = "eccea3-121a-4bc3-94dc-7463cc908f2e"
* status = #final
* code = CAP#31161 "Progesterone Receptor (PgR) Status (Note A)"
* subject = Reference(http://example.org/patient)
* subject.display = "Example Patient"
* effectiveDateTime = "2021-05-11"
* performer = Reference(http://example.org/practitioner)
* performer.display = "Example Practitioner"
* valueCodeableConcept = CAP#31001 "Negative (less than 1%)"
* hasMember.identifier.system = "http://example.org/Observation"
* hasMember.identifier.value = "fikea3-188a-4ko3-00dc-8282cc908f3e"

---

// File: input/fsh/EX_ObservationSection.fsh

Instance: SDCeCCObservationSection
InstanceOf: ObservationSDCeCC
Title: "SDC eCP Observation Section Example"
Description: "Example Section Observation demonstrating how to group Observations using the Observation Grouper"
Usage: #example 
* id = "SDCeCCObservationSection"
* identifier.system = "http://example.org/Observation"
* identifier.value = "mmk6z8-121a-4bc3-94dc-7463cc9oi88"
* status = #final
* code = CAP#17537 "CLINICAL"
* subject = Reference(http://example.org/patient)
* subject.display = "Example Patient"
* effectiveDateTime = "2021-05-11"
* performer = Reference(http://example.org/practitioner)
* performer.display = "Example Practitioner"
* hasMember[0].identifier.system = "http://example.org/Observation"
* hasMember[0].identifier.value = "eccea3-121a-4bc3-94dc-7463cc908f2e"
* hasMember[1].identifier.system = "http://example.org/Observation"
* hasMember[1].identifier.value = "fikea3-188a-4ko3-00dc-8282cc908f3e"

---

// File: input/fsh/EX_ObservationText.fsh

Instance: SDCeCCObservationStringEx
InstanceOf: ObservationSDCeCC
Title: "SDC eCP Observation Text Example"
Description: "Example Observation using text fill in from SDC"
Usage: #example 
* id = "SDCeCCObservationStringEx"
* identifier.use = #usual 
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN "Accession ID"
* identifier.system = "http://example.org/Observation"
* identifier.value = "SDCeCCObservationCodeEx0"
* status = #final "final"
* code = CAP#76595 "Comments"
* subject = Reference(http://example.org/patient)
* subject.display = "Example Patient"
* effectiveDateTime = "2021-05-11"
* performer = Reference(http://example.org/practitioner)
* performer.display = "Example Practitioner"
* valueString = "Some comment"

---

// File: input/fsh/SD_DiagnosticReport.fsh

Profile: DiagnosticReportSDCeCC
Parent: DiagnosticReport
Id: ihe-sdc-ecc-DiagnosticReport
Title: "IHE SDC/eCP on FHIR DiagnosticReport"
Description: "A DiagnosticReport Profile meant to capture what should be represented in a report parsed from an IHE SDC Form"
* ^extension[$WG].valueCode = #oo
* status 1..1 MS 
* category MS 
* code MS 
* subject MS 
* performer MS
* specimen MS
* result 1..* MS 
* result only Reference(ObservationSDCeCC)
* presentedForm 1..* MS
* presentedForm ^short = "SDC form, HTML render, and/or PDF"
* presentedForm ^definition = "Should include some kind of human readable presentation of the form in HTML or PDF. May also include the XML of the SDC form, however DocumentReference is a better carrier of the SDC XML"

---

// File: input/fsh/SD_DocumentReference.fsh

Profile: DocumentReferenceSDCeCC
Parent: DocumentReference
Id: ihe-sdc-ecc-DocumentReference
Title: "IHE SDC/eCP on FHIR DocumentReference"
Description: "A DocumentReference Profile meant to share an IHE SDC Form whether completed or blank"
* ^extension[$WG].valueCode = #oo
* masterIdentifier 1..1 MS
* masterIdentifier ^short = "the form's SDC ID if blank, or @instanceVersionGUID if filled"
* masterIdentifier ^definition = "the form's SDC ID should be replaced by form's instanceVersionGUID if the form has been filled"
* identifier MS
* identifier ^short = "form identifying information"
* identifier ^definition = "Additional identifying information about the form such as its fullURI"
* category 1..* MS 
* subject MS 
* author MS 
* relatesTo MS
* securityLabel MS 
* content 1..1 MS 
* context MS 

---

// File: input/fsh/SD_Observation.fsh

Profile: ObservationSDCeCC
Parent: Observation
Id: ihe-sdc-ecc-Observation
Title: "IHE SDC/eCP on FHIR Observation"
Description: "This Observation Profile describes how to capture Question/Answer Pairs from IHE SDC. If the question is Multiselect multiple Observations with the same Question Code should be created. A section should also be represented as a grouping Observation. If the question has a follow up text or number entry field e.g. Other (Specify) the information from the textbox should be stored in the Observation.component.value, and the Observation.component.code should repeat the Observation.value as the sub-question."
* ^extension[$WG].valueCode = #oo
* identifier 1..* MS 
* identifier ^short = "the SDC instanceGUID"
* identifier ^definition = "The identifier should match the SDC answer instanceGUID. If an answer instanceGUID is not available a Question instanceGUID shall be used"
* code ^short = "SDC section/question ID"
* code ^definition = "The code should match the question ID from the SDC form. In a given Observation group, there might be repeating codes for multiselect questions, though these Observations will have different values"
* subject MS
* hasMember MS 
* hasMember ^short = "child observation reference"
* hasMember ^definition = "hasMember should be used to capture any child questions in related Observations"
* hasMember only Reference(ObservationSDCeCC)
* derivedFrom MS
* derivedFrom ^short = "parent observation reference"
* derivedFrom ^definition = "derivedFrom should be used to capture a parent Observation or the parent DocumentReference"
* derivedFrom only Reference(ObservationSDCeCC)
* value[x] MS 
* value[x] ^short = "the value for selected answer"
* value[x] ^definition = "The value should match the from the SDC form. Unique Observations should be created for each multi-select answer"
* component MS
* component ^short = "additional entry"
* component ^definition = "Any additional list item response fields which were filled in should be captured in the component as their appropriate value type"

---

