File: repos/HL7_SLASH_fetal_records/sushi-config.yaml

# ╭─────────────────────────Commonly Used ImplementationGuide Properties───────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. The most commonly   │
# │  used properties are included. For a list of all supported properties and their functions,     │
# │  see: https://fshschool.org/docs/sushi/configuration/.                                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.ibcm
canonical: http://hl7.org/fhir/uv/ibcm
name: InternationalBirthAndChildModel
title: International Birth And Child Model Implementation Guide
# description: Example Implementation Guide for getting started with SUSHI
status: draft # draft | active | retired | unknown
version: 1.0.0-ballot2
fhirVersion: 5.0.0 # https://www.hl7.org/fhir/valueset-FHIR-version.html
dependencies:
  hl7.fhir.uv.extensions: 5.2.0-ballot
copyrightYear: 2023+
releaseLabel: STU 1 Ballot 2 # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: "http://unstats.un.org/unsd/methods/m49/m49.htm#001"
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  
    valueCode: pc
publisher:
  name: HL7 International / Patient Care
  url: http://www.hl7.org/Special/committees/patientcare
  # email: test@example.org

# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.
#
# dependencies:
#   hl7.fhir.us.core: 3.1.0
#   hl7.fhir.us.mcode:
#     id: mcode
#     uri: http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode
#     version: 1.0.0
#
#
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
#
# pages:
#   index.md:
#     title: Example Home
#   implementation.xml:
#   examples.xml:
#     title: Examples Overview
#     simpleExamples.xml:
#     complexExamples.xml:
#
#
# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array.
# For parameters defined by core FHIR see:
# http://build.fhir.org/codesystem-guide-parameter-code.html
# For parameters defined by the FHIR Tools IG see:
# http://build.fhir.org/ig/FHIR/fhir-tools-ig/branches/master/CodeSystem-ig-parameters.html
#
# parameters:
#   excludettl: true
#   validation: [allow-any-extensions, no-broken-links]

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │ The menu property will be used to generate the input/menu.xml file. The menu is represented    │
# │ as a simple structure where the YAML key is the menu item name and the value is the URL.       │
# │ The IG publisher currently only supports one level deep on sub-menus. To provide a             │
# │ custom menu.xml file, do not include this property and include a `menu.xml` file in            │
# │ input/includes. To use a provided input/includes/menu.xml file, delete the "menu"              │
# │ property below.                                                                                │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Background: background.html
  Guidance:
    Introduction: guidance.html
    Medication Request: use-case1-medication-request.html
    Result Reporting: use-case2-result-reporting.html
    Data Transfer: use-case3-data-transfer.html
  Artifacts:
    Resource Profiles: artifacts.html#1
    Examples: artifacts.html#2
  Downloads: 
    Downloads: downloads.html

# ╭───────────────────────────Less Common Implementation Guide Properties──────────────────────────╮
# │  Uncomment the properties below to configure additional properties on the ImplementationGuide  │
# │  resource. These properties are less commonly needed than those above.                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
#
# Those who need more control or want to add additional details to the contact values can use
# contact directly and follow the format outlined in the ImplementationGuide resource and
# ContactDetail.
#
# contact:
#   - name: Bob Smith
#     telecom:
#       - system: email # phone | fax | email | pager | url | sms | other
#         value: bobsmith@example.org
#         use: work
#
#
# The global property corresponds to the IG.global property, but it
# uses the type as the YAML key and the profile as its value. Since
# FHIR does not explicitly disallow more than one profile per type,
# neither do we; the value can be a single profile URL or an array
# of profile URLs. If a value is an id or name, SUSHI will replace
# it with the correct canonical when generating the IG JSON.
#
# global:
#   Patient: http://example.org/fhir/StructureDefinition/my-patient-profile
#   Encounter: http://example.org/fhir/StructureDefinition/my-encounter-profile
#
#
# The resources property corresponds to IG.definition.resource.
# SUSHI can auto-generate all of the resource entries based on
# the FSH definitions and/or information in any user-provided
# JSON or XML resource files. If the generated entries are not
# sufficient or complete, however, the author can add entries
# here. If the reference matches a generated entry, it will
# replace the generated entry. If it doesn't match any generated
# entries, it will be added to the generated entries. The format
# follows IG.definition.resource with the following differences:
#   * use IG.definition.resource.reference.reference as the YAML key.
#   * if the key is an id or name, SUSHI will replace it with the
#     correct URL when generating the IG JSON.
#   * specify "omit" to omit a FSH-generated resource from the
#     resource list.
#   * if the exampleCanonical is an id or name, SUSHI will replace
#     it with the correct canonical when generating the IG JSON.
#   * groupingId can be used, but top-level groups syntax may be a
#     better option (see below).
# The following are simple examples to demonstrate what this might
# look like:
#
# resources:
#   Patient/my-example-patient:
#     name: My Example Patient
#     description: An example Patient
#     exampleBoolean: true
#   Patient/bad-example: omit
#
#
# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the default groups that
# are provided by the templating framework, but if authors want to
# use their own instead, they can use the mechanism below.  This will
# create IG.definition.grouping entries and associate the individual
# resource entries with the corresponding groupIds. If a resource
# is specified by id or name, SUSHI will replace it with the correct
# URL when generating the IG JSON.
#
# groups:
#   GroupA:
#     name: Group A
#     description: The Alpha Group
#     resources:
#     - StructureDefinition/animal-patient
#     - StructureDefinition/arm-procedure
#   GroupB:
#     name: Group B
#     description: The Beta Group
#     resources:
#     - StructureDefinition/bark-control
#     - StructureDefinition/bee-sting
#
#
# The ImplementationGuide resource defines several other properties
# not represented above. These properties can be used as-is and
# should follow the format defined in ImplementationGuide:
# * date
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
#
#
# ╭──────────────────────────────────────────SUSHI flags───────────────────────────────────────────╮
# │  The flags below configure aspects of how SUSHI processes FSH.                                 │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
#
# FSHOnly: false
#
#
# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#
# applyExtensionMetadataToRoot: true
#
#
# The instanceOptions property is used to configure certain aspects of how SUSHI processes instances.
# See the individual option definitions below for more detail.
#
# instanceOptions:
#   Determines for which types of Instances SUSHI will automatically set meta.profile
#   if InstanceOf references a profile:
#
#   setMetaProfile: always # always | never | inline-only | standalone-only
#
#
#   Determines for which types of Instances SUSHI will automatically set id
#   if InstanceOf references a profile:
#
#   setId: always # always | standalone-only


---

// File: input/pagecontent/analysis.md

IP Acknowledgements & IG Analysis
Intellectual Property
{% include ip-statements.xhtml %}

Cross Version Analysis
{% include cross-version-analysis.xhtml %}

Dependencies
{% include dependency-table.xhtml %}

Globals
{% include globals-table.xhtml %}

---

// File: input/pagecontent/background.md

### The need of recognizing a fetus

No one disputes that when a infant is born, the newborn infant can be a patient with its own unique identifier. The mother herself is also a recognizable patient, but prior to this IG  there are no consistent rules for addressing information directly pertinent to fetus prior to birth. Some systems record the data of the fetus as a body tissue of the mother. Other systems do have some form of resource that resembles a patient. 
There exists a need to relate the data, such as specific observations (e.g. femur length) or conditions, to the fetus, because such data are characteristics of the fetus and not the mother. In cases of multples (e.g. twins or triplets) features of each fetus may need to be distinguished from each other.

### Questions to answer

Our goal is to provide guidelines about the communication of data around the fetus. 
As project team from HL7 PCWG we are aware that we cannot enforce how data is structured within an EHR system, but we can set up rules on how data should be communicated between systems. A similar way of handling these data would make the ease of connecting systems to each other and comparison of data much easier.

All countries collect data of pregnancy and birth for their vital health statistics and research purposes. The fact that we set rules how to use certain FHIR resources could make it more complex. You might need to search data of this specific resource. But this resource does not always exist. This document will also address these issues.

#### Issues we want to solve (project questions)

This Implementation Guide will address the following questions:
* which FHIR resource do we use when we relate data to the new life form?
* when do  we consider the fetus as a separate resource?
* which algorithms of identification of the fetus do we consider?
* which data do we relate to which subject ( fetus versus mother)?
* what is the impact for procedures and medication (i.e. other FHIR resources) if it is specifically meant for the fetus and not the mother?
* do we need special considerations for research, surveillance of birth defects and vital statistics?

##### Which FHIR resource do we use?

The FHIR resource that will be used to represent a fetus is a simplified Patient resource. This is a Patient extension that is called:  Patient with fetal status extension.
This decision has been taken in collaboration with the Patient Administration Work group at the HL7 WGM of May 2024 in Dallas (TX). This artifact is explained in detail under the tab of Artifacts.

At first this resource was called the Patient with born status extension, but the subject is not meant to be related to the event of birth. This also collided with concepts and explanation of terms that were used by Public Health in vital statistics, where they preferred to use the term delivery, instead of birth. The CHOICE group has therefore renamed the FHIR extension to reflect that the subject of related data is a fetus. It is all about the subject fetus and has nothing to do with delivery.

Detailed information about the pros and cons of the different options can be found in first release  of the IG of IBCM.

##### Implications for the domain of Child Health

Having chosen for an extension of the FHIR resource Patient does have implications for systems that are active in this sector. This implies that all systems that communicate data about the fetus *must support* this extension.  If a system, for example an EHR, receives a reply where this FHIR extension is used and it does not understand this FHIR resource, then the communication will fail and end up in an error. 

Implementers conforming to a particular profile in the IBCM Implementation Guide:
* SHALL be capable of producing values for the mustSupport elements in the profile 
* SHALL be capable of processing resource instances containing mustSupport data elements, including elements with missing data, without generating an error or causing the application to fail.
* SHOULD be capable of displaying mustSupport data elements for human use, or processing (e.g. storing) them for other purposes.

The sequence when we are introducing the implementation of this new FHIR resource in a certain region, is that all receiving systems should be ready for processing the FHIR extension first, before systems that are transmitting will start using the new FHIR extension. There will be a transition period where receiving systems need to be able to interpret an old method and the new way of communicating with the new FHIR extension.

##### When to use a separate resource

At the start of pregnancy when findings are observed and collected the first form of new life starts as an embryo. In general the findings  are either classified as characteristics of the mother as the patient, or are findings attached to the episode of pregnancy. As the pregnancy lingers on, the embryo will develop its own characteristics. The question arises when do we consider relating data to a separate resource (instead of the mother)?
The guideline is to attach the characteristic data to the proper subject. In the episode of pregnancy the main subjects to which data could be related to are either:
* the data are characteristics of the mother as patient;
* the data are characteristics of the pregnancy as an episode;
* the data are characteristics of the fetus.

Obvious examples of characteristics of the fetus are measurements like femur length or heart beat of the fetus. Obvious examples of data attached to the pregnancy are the parity and gravidity of the pregnancy. 
This means that once data is classified as characteristics of the fetus, it should be communicated as data attached to the fetus as a resource.

This could mean in certain cases that in some pregnancies data was never communicated with findings attached to a fetus, because it was never observed and registered. This is for example the case of an early demise. This could lead to issues when performing research. For the time being this is left out of scope of the current project.

##### Identification of the resource

When communicating data with the Patient with fetus status extension, the FHIR resource has the possibility to contain an identifier. This identifier is not mandatory and in most cases this will not create any issues, because the pregnancy involves only one fetus and is usually accompanied with data about the mother with her identifier. 

However some organizations do prefer to use a unique identifier for the fetus to make the subject identifiable throughout the process and the history. Certainly in the case of multiple fetuses it is necessary to be able to distinguish which data belongs to which fetus. Therefore it could be sensible to always use an identifier when communicating the data with the FHIR resource.

There are some notes to be made about appointing an identifier. This is also dependent on the way the data is stored in the medical records. As mentioned earlier 2 methods are generally used either, as a body tissue or as a pseudo patient 

<center>
<table><tr><td><img src="resource-identification.png" style="width:75%; height: 75%" alt="Resource identification"/></td></tr></table>
</center>

As a guideline we recommend that data is communicated with a persistent identifier throughout the pregnancy episode and perhaps even continued after birth. It is not unusual that a mother and her fetus are being treated in different institutions in a pregnancy episode. For example the episode could start at a midwife practice, then proceed to a hospital, while data is also being processed in an ultrasound lab and perhaps later on the mother and fetus are transferred to a neonatal hospital. There are different systems involved, each with their own capability to generate or accept an identifier in a resource. 

The recommendation to keep the identifier persistent means that the identifier is generated at the start of the process when the requirement is triggered in the first system that wishes to recognize the fetus. If this system uses body tissue as the method to store the related subject, then the identifier of the body tissues is passed on as identifier in the FHIR resource of the patient with fetal status extension. If the first system uses a pseudo patient as the related subject, then the identifier would likely be generated as a patient identifier. 

All subsequent systems that handle data of the subject fetus SHALL be able to retain, reply or pass on the data with the same identifier. 

This could lead to issues in systems that handle data not only from the fetuses, but also from other subjects, where they expect a fixed format ( for example a National patient identifier) for the subject. These systems must be aware that a different format could be received. 
In case of multiple fetuses each resource will have their own identification. In general the identity would be linked to the position of the fetus in the womb. However the position of the fetuses could change over time and visual interpretation is required to link the identity to the fetus.

We have come across different methods of generating an identifier. These methods are mentioned here below, but the list is certainly not limited to these examples:
* the most straightforward method is to use the same method for generating a local patient identifier. Issue of a patient identifier is usually managed in a master patient index. Usually this identifier is continued once the patient is born as the normal patient identifier. Countries that use a National patient identifier cannot use this patient identifier for a fetus, because it has not been issued yet and need to generate a temporary identifier.
* a second method is to add an extension to the patient identifier of the mother, for example by adding an extra digit or letter to the id. Advantage is that the relationship of the mother is obvious. However some systems expect a fixed format of an ID  and the extra digit or letter could lead to an error handling.
* finally some countries have a specific algorithm for generating an identifier. 
    * the Netherlands has an algorithm to identify the pregnancy of a mother. This identifier consists of the National patient identifier and the age of the mother at the (assumed) date of conception divided by 14. Example: the date of conception is 3d October 2011, the woman (born on April 9, 1985) is 9673 days old on that date. The formula provides 691 as an identifier of this pregnancy. If the National ID of the pregnant woman is 100202020. Then the unique pregnancy identifier is 100202020-691.This identifier is of course for the pregnancy and not so much for the fetus. The fetus identifier can be derived from this identifier and in case of multiple fetuses an extra digit or letter could be added.

##### Relation of data with the subject

As mentioned in paragraph A the data should preferably be a characteristic of the proper subject. We know that many systems do not follow this rule every time. For example the (biological) father of the fetus is often not recognized as a separate entity, but that is not the scope in this project. 
In this implementation guide the guideline is, that data should be related to the proper entities:
* mother
* fetus or child
* pregnancy

The relationship between fetus and mother can be expressed in FHIR using the [RelatedPerson](https://hl7.org/fhir/relatedperson.html) resource. 
The type of relationship is expressed in the attribute relationshiptype. Usually, the relationship type would be ‘MTH’ but more specific codes are available to address concepts like biological mother, donor mother and gestational mother. Note that a fetus will have both a RelatedPerson instance for the donor mother and a RelatedPerson instance for the gestational mother in case of egg cell donation. 

##### Impact for FHIR resources

The use of a simplified FHIR patient resource extension has the advantage that many FHIR resources, such as procedures or observation are accustomed to have a patient as a subject. No special adjustments are required for other FHIR resources to be able to place the fetus as subject. This would not be the case if we had invented a new FHIR resource.

##### Impact for research, surveillance of birth defects and vital statistics

Most countries have methods of collecting data for birth and fetal death reporting. Countries do compare their vital statistics on a global level, but there is no universal guideline on how the data should be collected. This is mostly organized on the National level and healthcare institutions and care providers in a certain country are bound to these National agreements. 

The Implementation Guide for the USA for birth and fetal death reporting using FHIR can be found [here](https://hl7.org/fhir/us/bfdr). Other countries might have their own implementation guides on birth and mortality reporting.

These Implementation Guidelines for these vital statistics will be compelling for these countries. Therefore the CHOICE project does not produce specifications that might overlap in this information space and cause confusion with the birth or fetal death reporting. CHOICE does not dictate how data is stored and therefore birth and fetal death reporting should be reported as it has to be done on a National level. 

#### Data categories
When we look at the data in the pregnancy period we can distinguish the following data categories:
* maternal data: data collected around the (pregnant) woman (e.g. blood pressure, body weight, lab results, maternal problems, medication) and her pregnancy (e.g. parity and gravidity). The woman is the subject of this data, the focal subject could be a different entity like the pregnancy.
* child-specific maternal data: data collected around the (pregnant) woman, which are also related to the child. For example, a c-section is done for the delivery of the second child in a multiple pregnancy. The woman is still the subject of this c-section, but the focal subject is the child/fetus.
* fetus data: data collected around the unborn child/fetus (e.g. head circumference, fetal heart rate and position of the fetus). The fetus is the subject of this data.
* child data - data collected around the (newborn) child (e.g. birth weight and apgar score). The child is the subject of this data. Within this category there are two sub categories:
* child data related to the pregnancy - data around the (newborn) child which are collected as part of the pregnancy file, e.g. birthweight, apgar score
* other child data - data around the child which are collected during childhood which are not part of the pregnancy file/related to the pregnancy.

The scope of this Implementation Guide is the fetus data, although for completeness the examples may also contain maternal and child-specific maternal data. Child data is out of scope of this Implementation Guide since in this case the child is born and the data will become attached to a regular FHIR Patient representing the child. After birth the fetalStatus extension will no longer be used.

#### Thoughts about data linkage
Although we do not express any mandatory rules about the storage of the fetus data itself, we did have several conversations about the possibilities and difficulties about this topic. There is one consideration we would like to give along and perhaps revisit in a future project.

At a certain meeting we suggested a structure in the relationship between mother and fetus data. This was the construction.

<center>
<table><tr><td><img src="data-linkage.png" style="width:75%; height: 75%" alt="Data linkage"/></td></tr></table>
</center>

This illustration suggests that the actual data of the diagnostics are attached to the mother as a patient. So the source of the data remains with the mother patient.  The fetus, whether it is a pseudo patient or a body tissue, is only referencing the data of the mother. When the child is born a real patient record is created for the child and data related to the fetus is  copied across to the new child record as well as data from the mother and pregnancy period. In case of demise before birth no child record will be created. The pseudo patient  ceases to exist, but the findings will still be available at the mother record.. 
Our view is that it is better to focus on reuse of data rather than copying and transforming data between a mother record and a patient record. Instead a (restricted) view from the child record on the mother record could be possible, which allows access to all data from the mother record that is medically relevant for the child (as well as the other way around). Of course, this might still be a big challenge in real practice and legal frameworks should be taken into account (especially in special circumstances where the child grows up in foster care for example). But these questions should be addressed by implementers of these kinds of systems.






---

// File: input/pagecontent/guidance.md

### Scenario's

#### Introduction on the scenario's

We have simplified the different types of use cases and scenarios in characteristics of the workflow. We call them the basic use cases. The simplification means that they contain a high level of abstraction, where the focus is on the intent of the work process:

- a medication request: the care provider places a request to perform a certain medication to either the mother or one of the fetusses.
- result reporting: as a result of the service request the results of either the mother, the fetusses or the pregnancy are reported to the service requestor.
- data transfer: medical records are transferred from one system to the other. This could be data from the mother, fetus, child or the pregnancy itself.


---

// File: input/pagecontent/index.md

### Introduction

This implementation guide aims to provide guidelines and support on the handling of fetus data in FHIR. The Project ID: 932

#### Contributors

- Michael Tan (Woxingtan - project lead)
- Mike Padula (Children Hospital of Philadelphia)
- Liesbeth Siderius (Youth Health Care Almere)
- Lilian Minne (Nictiz)
- Shovan Roy (TechIntro, Australia)
- Sahan Damsiri Perera (University of Colombo, Sri Lanka)
- Ben McAlister (Oracle)
- Stephen Chu (Australian Digital Health Agency)
- John Silva (Vermonster, LLC)
- Rob Hausam (Hausam Consulting LLC)
- Carina Vorisek (Berlin Institute of Health Charite)
- Minna Maria Hernandez (Norwegian Directorate of Health)

#### Goal

The goals of this project include:

- Define typical use cases where handling of data of the unborn child frequently occurs. The use cases we are specifically interested in, are the use cases where communication between IT systems are necessary and data has to be transferred from one system to the other.
- Provide guidance on implementation, use and handling of the relevant FHIR resources and terminology value sets.

#### Considerations:

To manage our project deliverables and timeline, we will set priorities to use cases and work out the use cases in the sequence of priority. Other use cases will remain open for future projects.

#### Target audience

This implementation guide is meant for IT developers who develop IT systems for the child health and obstetrics sector. These IT systems are not stand alone systems, but usually make part of a framework of systems within an institution or a network of institutions. A hospital would have a general EHR system. An ultrasound technician or a lab technician would perform their research in their own specialized system. This leads to the necessity to communicate between different software systems on different hardware environments. In this IG we explain how to communicate data of a fetus between systems.

The secondary target of this IG are the stakeholders who provide these assignments for the IT vendors to develop these communication tools.
In general we can classify the stakeholders in these different groups:

- direct healthcare providers who have direct contact with the pregnant woman or the (newborn) child:
  - midwife, obstetrician, neonatologists, general practitioner, paediatrician, nurses and other relevant healthcare professionals.
- paramedical services, research lab technicians and nurses who perform procedures on behalf of the direct healthcare providers such as:
  - ultrasound technicians, genetic lab technicians, clinical chemistry technicians.
- governmental institutions who gather and perform research on data about pregnancy, birth and vital health statistics or have a public health task in screening or prevention of certain disorders.

All these stakeholders work generally in their own system.

The governmental and research institutions also perform their tasks on their own systems which are generally on regional or national level, which results in a one to many communication between this institution and the different providers of data.

#### Scope

##### In scope

This Implementation Guide focuses on referencing data relevant to the fetus as the subject. A "fetus" refers to the unborn offspring that develops from a mammal embryo in utero. In humans, the fetal stage of development begins at approximately 9 weeks gestation and ends at birth or delivery. Outcomes for a fetus include the delivery of a liveborn infant, or may result in a fetal demise when the fetus is determined to be nonviable (i.e., no longer capable of survival) while still in utero or at the time of delivery. When a fetus without any signs of life (e.g., heart rate, spontaneous movement) and is delivered beyond a specific gestational age (>20 weeks in the US, >24 weeks in the UK, >28 weeks per the World Health Organization), the fetus is deemed to be stillborn. We concentrate on the communication of data in the ante natal (or prenatal) period, because once birth has taken place the data related to the newborn infant would be represented with a FHIR resource of Patient.

The objective of this project is to set guidelines on how we can communicate data when a fetus is involved in the healthcare process.

##### Out of Scope

As HL7 we realize that we cannot dictate mandatory rules how the fetal data should be stored in systems. Some systems store the data with the mother as subject, while others use a different subject.

Neither are we in the position to dictate the use of certain terminologies. There might be license issues with certain terminologies. However we will provide examples as guidance to show how certain values can be expressed.

This project is intended to solely address issues on the informational aspect of data handling in the regular process flow of day to day pregnancy and birth healthcare. We are aware that this subject can easily be misunderstood, but legal, religious or political issues are not part of this project. This project should also not be misused or quoted by any party to prove any statement for their own conviction.

### Roles & Systems

In the use cases we provide in this Implementation Guide we have simplified the scenario’s using 2 simple actors. An initiator and a recipient. There are 2 basic patterns:

- the initiator has a service request and the recipient is the potential fulfiller of the request.
- the initiator has data available it wants to exchange with a recipient. Note that the recipient could be the initiator who has placed a service request.

Under the tab of "Guidance" we elaborate on these roles in the various use cases.
How these systems communicate with each other ( message mechanism or RESTful concept) is less of importance here. It could be either. The focus is on the data content and the use of FHIR resources.

### How to read this Guide

The main sections of this IG are:

- [Background](background.html): The background section provides business context for the implementation guide and information that implementers should be
  familiar with before reading the remainder of the IG. There could be multiple pages for this.
- Guidance - The Guidance pages document best practices and how to use the profiles and transactions defined in this guide for a couple of use cases.
  - [Introduction](guidance.html): This page provides an introduction of the scenario's.
  - [Medication Request](use-case1-medication-request.html): This page provides guidance on medication requests
  - [Result Reporting](use-case2-result-reporting.html): This page provides guidance on result reporting
  - [Data Transfer](use-case3-data-transfer.html): This page provides guidance on data transfer
- [FHIR Artifacts](artifacts.html): Detailed descriptions and formal definitions of all FHIR artifacts defined in this guide
- Support - The Support pages include useful links and downloads
- [Downloads](downloads.html): Allows downloading a copy of this implementation guide and other useful information


---

// File: input/pagecontent/use-case1-medication-request.md

#### Use case 1: Medication request
##### Description
A request is placed to to administer (medication) substance to a fetus. The request is processed with different possible states (of reply). These states are not relevant for the discussion about the fetus.

Point of the discussion is how to make clear for which subject the request procedure is meant. Is the medication request meant for the mother or is it meant for the fetus? There could be more than one fetus.

The second question is if there are any restrictions in the medication administration to be performed when it is meant for a fetus. It is possible that certain resources require a real patient with an ID as the subject. This would make it impossible for the fetus to be the subject of the medication request unless we demand a change.

>**Postnatal intervention - d-transposition of the great arteries with intact ventricular septum**
>
>A 32 yo Gravida 3 Para 2002 Mother with a history of *hypertension* on *labetolol* during this pregnancy was diagnosed with female fetus with **d-transpositon of the great arteries** (SCTID: 399216004) on fetal echocardiography at 21 3/7 weeks gestation. Most recent U/S at 37 5/7 weeks revealed an *estimated fetal weight* of 2.960 kg.
>
>**Prostoglandin E infusion** 0.01 mg/kg/min was ordered based on a dosing weight of 3kg to be initiated just after birth following umbilical line placement. 

What this use case addresses: medication ordering prior to delivery, assigning a condition to a fetus prior to birth,  assigning gestation specific observation. The issue here is how to make clear that the medication request is meant to suppress high blood pressure of the child immediately after it is born and not the mother. The child does not have a medical record yet, but the medication request has to be prepared before or during labor and administered to the child immediately after birth, The medication administration might have to be recorded. 

##### Roles & systems
Order placer: ordering care provider. The order placing system is usually an EHR from the obstetrician. 
Order receiver; Procedure performer. Order receiving systems are for example ultrasound systems, lab systems.
Subject of procedure: mother or  fetus
Carrier: pregnant woman

As mentioned before we have an order placer and an order performer.
The order placer takes the initiative at a specific moment and the order performer reacts whenever a request has been generated.

<center>
<table><tr><td><img src="usecase1-roles.png" style="width:60%; height: 60%" alt="Use case 1 roles"/></td></tr></table>
</center>


##### FHIR
The graph below shows the mapping of this use case to FHIR. The FHIR example resources can be found in the [FHIR artifacts](artifacts.html#2) section of this IG.

<center>
<table><tr><td><img src="usecase1.png" style="width:100%;" alt="Use case 1 Medication Request"/></td></tr></table>
</center>


Note: the following resources are not included in the list of examples
* Condition 1 - Hypertension on labetolo
* Observation 1 - Gravida
* Observation 2 - Para
* Procedure 1 - Fetal echocardiography
* Procedure 3 - Umbilical line placement

---

// File: input/pagecontent/use-case2-result-reporting.md

#### Use case 2: Result Reporting
##### Description
Once a procedure is performed results will be reported back. This could be intermediate or final results. Part of the results could be about the mother,  and the other part could be about ( one of) the fetus(sus). Also in the case of substance administration usually a confirmation of the administration is reported back. 

In this basic use case we should make clear whether the data are results about the mother, the fetus or the pregnancy as a whole. In FHIR the various results are grouped in the category of diagnostics . If the data belongs to the fetus, are there any restrictions in the diagnostic resources to attach the results to a fetus as a subject?

Medication topics do not fall under diagnostics, but under a separate group called medication. Here you might want to express that the medication substance was administered to the mother, fetus. ( Placenta?). Are there restrictions for any of these subjects in medication? 
For reviewing the data about the fetus let us look at the following storyboard.

>**Congenital Diaphragmatic Hernia in Twin Pregnancy**
> 
>28 yo Gravida 1 Para 0 Mother with a dichorionic/diamniotic twin pregnancy, fetus A antenatally diagnosed with **left congenital diaphragmatic hernia (CDH)** containing small bowel, spleen and stomach in the left hemithorax on level 2 ultrasound at 20 weeks. Evaluation at 24 1/7 weeks revealed Lung-Head Ratio (LHR) of 0.67  via ultrasound and an observed:expected lung volume 0.21 via MRI. Normal karyotype - 46 XY on amniocentesis for both fetuses. fetus B noted to have hypospadias on antenatal ultrasound. 

What this use case addresses: Antenatal observations at specific gestational ages. Indication to differentiate 2 fetal records. For the example we will review:
* The result reporting of the ultrasound and MRI at 24 weeks for fetus A and fetus B.
* The result reporting at birth of twin A and twin B.

The task that professionals are performing a service request such as ultrasound or labresearch. The results of the procedure are registered in a separate system and reported back to the requesting EHR. In this section we focus on the data that is communicated to the main EHR. This guideline should make clear what kind of data is being communicated and to which subject this data belongs.
The data  of the results can be categorized in 3 classes:
* data that is clearly only about the mother
* data that is clearly only about (one of) fetus(ses).
* data that is about the pregnancy and shared with mother and fetus.

##### Roles & systems
Order receiver; Procedure performer. The systems are for example lab systems or ultra sound systems.
Order placer: ordering care provider. The systems are the EHR systems from the care provider.
Subject of procedure:mother, fetus, placenta?
Carrier: pregnant woman

The flow of the transactions is reversed. The procedure or order performer fulfills the requested task. This might take some time and the performer knows when it is ready to give feedback to the originator. Some systems also provide intermediate results, but this is optional. This is illustrated with a dotted line in the UML below.  The order placer usually confirms that it has received and can process the received information. 

If the order placer does not comprehend the contents of the transaction, it obviously will send a message that it cannot process the information.
<center>
<table><tr><td><img src="usecase2-roles.png" style="width:60%; height: 60%" alt="Use case 2 roles"/></td></tr></table>
</center>



##### FHIR
The graph below shows the mapping of this use case to FHIR. The FHIR example resources can be found in the [FHIR artifacts](artifacts.html#2) section of this IG.

<center>
<table><tr><td><img src="usecase2.png" style="width:100%;" alt="Use case 2 Result Reporting"/></td></tr></table>
</center>



Notes: The following resources are not included in the list of examples
* Observation 1 - Gravida
* Observation 2 - Para
* Observation 3 - Dichorionic/diamnotic twin pregnancy
* Observation 4 - Small bowel, spleen and stomach in left hemithorax

Open issues/questions:
* how to model “small bowel, spleen and stomach in left hemithorax” + relations to DiagnosticReport 1 and Condition 2
* who is the subject of Observations lung-head ratio and obs:exp lung volume? Is this still about fetus A?


---

// File: input/pagecontent/use-case3-data-transfer.md

#### Use case 3: Data Transfer
##### Description
This is a basic use case where you communicate data from one system to another system. Usually such a data transfer is a combined set of data with information about the mother, the pregnancy or the fetus. 

This of course could be in the various stages of the pregnancy and that has direct consequences on how to compose the set to communicate. Is there only a mother record? Are there fetus medical records? Is there already a child record?

There is more or less general consensus of what a child record should contain and in the elaboration of this use case we will explore the data categories.

>Patient Information:
>Ms. MS is a 32-year-old female residing in a rural village in Sri Lanka. She was born on February 1, 1991, from a healthy couple and was diagnosed with achondroplasia based on clinical diagnosis, as she had macrocephaly and short limbs at birth. Her current address is 88 Factory Road, Peradeniya, and she can be contacted at +94771234567.
>
>Pregnancy Details:
>Ms. MS's pregnancy was confirmed at 8 weeks of gestation by a urine HCG test, after which she was regularly monitored at the local Medical Officer of Health office (MOH) on a monthly basis. During the first visit, baseline examinations and testing done such as weight (47kg), height (147cm), Hb (12g/dl), Urine for sugar (negative). Continued monthly follow up at MOH office MS continued the pregnancy follow up at local MOH clinic. Other than general wellbeing, fetal growth by examination and maternal body weight is measured.
>
>Additionally, she was seen by an obstetrician once every trimester at Teaching Hospital Kandy.
>At 32 weeks of pregnancy, Ms. MS had her third visit to the Obstetrician at Teaching Hospital Kandy, during which an ultrasound scan was performed. The scan revealed that the femur length (40mm) was lower than the expected range for the period of gestation, but the head circumference (318mm) was larger than expected. Besides, her general well-being and a few other parameters, including weight, were recorded and found to be within the normal range.
>
>Management Plan:
>Considering the patient's medical history and ultrasound findings, the Obstetrician planned an Elective Lower Segment Cesarean (EL/LCSC) delivery at 38 weeks of gestation.

##### Roles & systems
Record initiator: Source provider
Record receiver;  Record receiver.
Subject of procedure: fetus, mother, child or pregnancy.
Carrier: pregnant woman

In this use case a source provider compiles a collection of data from the mother, the fetus and the pregnancy and sends it to a receiving system. The receiving system responds to the initiator to indicate whether it can process the information or else replies that it does not understand what is being sent.  

<center>
<table><tr><td><img src="usecase3-roles.png" style="width:60%; height: 60%" alt="Use case 3 Roles"/></td></tr></table>
</center>



#### FHIR
The graphs below show the mapping of this use case to FHIR. The FHIR example resources can be found in the [FHIR artifacts](artifacts.html#2) section of this IG.

The first graph represents the first visit to the MOH. Baseline examinations and testing are performed such as weight (47kg), height (147cm), Hb (12g/dl), Urine for sugar (negative)
<center>
<table><tr><td><img src="usecase3-firstMOHvisit.png" style="width:100%;" alt="Use case 3 Data Transfer First MOH visit"/></td></tr></table>
</center>



The second graph represents an example of a follow-up visit to the MHO. Other than general wellbeing, fetal growth by examination and maternal body weight is measured.

<center>
<table><tr><td><img src="usecase3-followupMOHvisit.png" style="width:100%;" alt="Use case 3 Data Transfer Follow up MOH visit"/></td></tr></table>
</center>


The third graph represents the third visit to the Obstetrician at Teaching Hospital Kandy, during which an ultrasound scan was performed. The scan revealed that the femur length (40mm) was lower than the expected range for the period of gestation, but the head circumference (318mm) was larger than expected. Besides, her general well-being and a few other parameters, including weight, were recorded and found to be within the normal range. Considering the patient's medical history and ultrasound findings, the Obstetrician planned an Elective Lower Segment Cesarean (EL/LCSC) delivery at 38 weeks of gestation.

<center>
<table><tr><td><img src="usecase3-thirdKandyvisit.png" style="width:100%;" alt="Use case 3 Data Transfer Third visit Teaching Hospital Kandy"/></td></tr></table>
</center>



---

// File: input/fsh/aliases.fsh

Alias: $loinc = http://loinc.org
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $sct =  http://snomed.info/sct
Alias: $icd-10-cm = http://hl7.org/fhir/sid/icd-10-cm
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $condition-clinical-code = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category


---

// File: input/fsh/profiles/IBCMFetalPatient.fsh



/*
*  ╭──────────────────────────────────────Invariant──────────────────────────────────────────────╮
*  │  The section below describes the different invariants applicable to the profile             │
*  │                                                                                             │
*  ╰─────────────────────────────────────────────────────────────────────────────────────────────╯
*/

Invariant:   ibcm-pat-1
Description: "Patient.birthdate can be present only when the value of extension 'patient-bornStatus' is not present or if present then the value is set to 'born'"
* severity = #error
* expression = "Patient.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/patient-bornStatus' and value != 'born').exists() implies Patient.birthDate.exists().not()"

/*
   ╭─────────────────────────────────────Profile Definiation────────────────────────────────────────╮
   │  To provide details that are applicable to all profiles extending the base Profile             │
   ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
*/


Profile:        IBCMFetalPatient
Parent:         Patient
Id:             ibcm-fetal-record
Title:          "IBCM Fetal Record Profile"
Description:    "Profile to represent a fetal record which will be used to collect data around the unborn child/fetus (e.g. headcircumference, fetal heart rate and position of the fetus)"

* . ^short = "Information about a fetus receiving health care services"
* . ^definition = "Demographics and other administrative information about a fetus receiving care or other health-related services."

* obeys ibcm-pat-1

* ^extension[structuredefinition-fmm].valueInteger = 0
* ^extension[structuredefinition-standards-status].valueCode = #draft
* ^extension[structuredefinition-wg].valueCode = #pc

* extension contains http://hl7.org/fhir/StructureDefinition/patient-fetalStatus named fetalStatus 0..1

* gender and identifier.system and identifier.value and identifier and extension[fetalStatus] MS





---

// File: input/fsh/examples/usecase1.fsh

// Automatically generated from graphBuilder.
// Project: Pregnancy, Fetal and Child Health Record - Use Case 1 - Service Request (id1666689652329)
// View: Initial view

Instance: uc1-mother
InstanceOf: Patient
Title: "UC1 Mother Patient"
Description: "An example of a mother Patient"
Usage: #example
* identifier.system = "http://www.acme.com/identifiers/patient"
* identifier.value = "123456"
* gender = #female
* birthDate = "1990-03-06"
* link.other = Reference(uc1-mother-relatedperson)
* link.type = #seealso


Instance: uc1-fetus
InstanceOf: IBCMFetalPatient
Title: "UC1 Fetus Patient"
Description: "An example of a fetus Patient"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/patient-fetalStatus"
* extension.valueCode = #potential-for-live-birth
* identifier.type =  http://terminology.hl7.org/CodeSystem/v2-0203#PI
* identifier.system = "http://example.com/identifiers/fetus"
* identifier.value = "A"
* gender = #female



Instance: uc1-mother-relatedperson
InstanceOf: RelatedPerson
Title: "UC1 RelatedPerson"
Description: "An example of a RelatedPerson defining the mother relationship from the perspective of the fetus Patient"
Usage: #example
* patient = Reference(uc1-fetus)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MTH "Mother"

Instance: uc1-practitioner
InstanceOf: Practitioner
Title: "UC1 Practitioner"
Description: "An example of a Practitioner"
Usage: #example
* name.text = "Dr. Hunt"

Instance: uc1-pregnancy
InstanceOf: Condition
Title: "UC1 Pregnancy"
Description: "An example of a pregnancy Condition"
Usage: #example
* clinicalStatus = $condition-clinical-code#active
* code =  $sct#364320009 "Pregnancy observable (observable entity)"
* subject = Reference(uc1-mother)


Instance: uc1-gestation21
InstanceOf: Observation
Title: "UC1 Gestational Age 21 weeks"
Description: "An example of a pregnancy duration Observation (21 weeks)"
Usage: #example

* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* code =  $sct#57036006 "Fetal gestational age (observable entity)"
* subject = Reference(uc1-mother)
* focus = Reference(uc1-pregnancy)
* valueQuantity = 21.43 'wk' "wk"
* performer = Reference(Practitioner/uc1-practitioner)
* effectiveDateTime = "2024-03-22"


Instance: uc1-gestation37
InstanceOf: Observation
Title: "UC1 Gestational Age 37 weeks"
Description: "An example of a pregnancy duration Observation (37 weeks)"
Usage: #example
* status = #final
* category = $observation-category#vital-signs "Vital Signs"
* code =  $sct#57036006 "Fetal gestational age (observable entity)"
* subject = Reference(Patient/uc1-patient)
* focus = Reference(uc1-pregnancy)
* valueQuantity = 37.71 'wk' "wk"
* performer = Reference(Practitioner/uc1-practitioner)
* effectiveDateTime = "2024-07-14"

// Reference to Patient: Mother
* subject = Reference(uc1-mother)

Instance: uc1-estimatedfetalbodyweight
InstanceOf: Observation
Title: "UC1 Estimated Fetal Body Weight"
Description: "An example of a fetal body weight Observation"
Usage: #example
* status = #final
* category = $observation-category#vital-signs "Vital Signs"
* code = $loinc#89087-1 "Fetal Body weight Estimated"
* subject = Reference(uc1-fetus)
* valueQuantity = 2960 'g' "g"
* performer = Reference(Practitioner/uc1-practitioner)
* effectiveDateTime = "2024-03-22"
* status = #final


Instance: uc1-399216004
InstanceOf: Condition
Title: "UC1 D-Transposition of the Great Vessels"
Description: "An example of a fetus disorder Condition"
Usage: #example
* clinicalStatus = $condition-clinical-code#active
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* category.coding[+] =  $sct#414025005 "Disorder of fetus and/or newborn (disorder)"
* code =  $sct#399216004 "D - transposition of the great vessels"
* subject = Reference(uc1-fetus)
* evidence.reference = Reference(uc1-ultrasoundreport)


Instance: uc1-ultrasoundreport
InstanceOf: DiagnosticReport
Title: "UC1 UltraSound Report 21 weeks"
Description: "An example of an ultrasound scan DiagnosticReport (21 weeks)"
Usage: #example
* status = #final
* code =  $sct#241493005 "Ultrasound scan for fetal growth (procedure)"
* subject = Reference(uc1-mother)
* result = Reference(uc1-estimatedfetalbodyweight)


Instance: uc1-ultrasoundscan
InstanceOf: Procedure
Title: "UC1 UltraSound Report 37 weeks"
Description: "An example of an ultrasound scan DiagnosticReport (37 weeks)"
Usage: #example
* status = #completed
* code =  $sct#241493005 "Ultrasound scan for fetal growth (procedure)"
* subject = Reference(uc1-mother)
* report = Reference(uc1-ultrasoundreport)
* supportingInfo = Reference(uc1-gestation37)


Instance: uc1-medicationrequest
InstanceOf: MedicationRequest
Title: "UC1 MedicationRequest Prostaglandin E Infusion"
Description: "An example of a MedicationRequest for the fetus"
Usage: #example
* identifier.use = #official
* identifier.system = "http://www.bmc.nl/portal/prescriptions"
* identifier.value = "12345689"
* status = #active
* intent = #order
* category = http://terminology.hl7.org/CodeSystem/medicationrequest-admin-location#inpatient "Inpatient"
* medication.reference = Reference(Medication/uc1-medication)
* subject = Reference(uc1-fetus)
* supportingInformation = Reference(Observation/uc1-estimatedfetalbodyweight)
* reason.reference = Reference(uc1-399216004)
* note.text = "Administration just after birth following umbilical line placement"
* dosageInstruction.text = "based on a dosing weight of 3kg"
//* dosageInstruction.timing.repeat.when = http://hl7.org/fhir/event-timing#IMD "Immediate"
* dosageInstruction.route =  $sct#58100008 "Intra-arterial route"
* dosageInstruction.method =  $sct#386482009 "Umbilical line tube care"
* dosageInstruction.doseAndRate.rateQuantity = 0.01 'mg/kg/min'
// Reference to Observation: Estimated birth weight
* supportingInformation[1] = Reference(uc1-estimatedfetalbodyweight)

Instance: uc1-medication
InstanceOf: Medication
Title: "UC1 Medication Prostaglandin E"
Description: "An example of a Medication"
Usage: #example
* code = http://snomed.info/sct#418517007 "Prostaglandin group E"
* status = #active




---

// File: input/fsh/examples/usecase2.fsh

// Automatically generated from graphBuilder.
// Project: Pregnancy, Fetal and Child Health Record - Use Case 2 - Result Reporting (id1669729437342)
// View: Initial view

Instance: uc2-mother
InstanceOf: Patient
Title: "UC2 Mother Patient"
Description: "An example of a mother Patient"
Usage: #example
* identifier.system = "http://www.acme.com/identifiers/patient"
* identifier.value = "123456"
* gender = #female
* birthDate = "1994-02-01"
* link[0].other = Reference(RelatedPerson/uc2-mother-fetusA)
* link[0].type = #seealso
* link[1].other = Reference(RelatedPerson/uc2-mother-fetusB)
* link[1].type = #seealso

Instance: uc2-fetusA
InstanceOf: IBCMFetalPatient
Title: "UC2 Fetus A Patient"
Description: "An example of a fetus Patient"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/patient-fetalStatus"
* extension.valueCode = #potential-for-live-birth
* identifier.type =  http://terminology.hl7.org/CodeSystem/v2-0203#PI
* identifier.system = "http://example.com/identifiers/fetus"
* identifier.value = "A"


Instance: uc2-mother-fetusA
InstanceOf: RelatedPerson
Title: "UC2 RelatedPerson Fetus A"
Description: "An example of a RelatedPerson defining the mother relationship from the perspective of the fetus Patient"
Usage: #example
* patient = Reference(Patient/uc2-fetusA)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MTH "Mother"


Instance: uc2-fetusB
InstanceOf: IBCMFetalPatient
Title: "UC2 Fetus B Patient"
Description: "An example of a fetus Patient"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/patient-fetalStatus"
* extension.valueCode = #potential-for-live-birth
* identifier.type =  http://terminology.hl7.org/CodeSystem/v2-0203#PI
* identifier.system = "http://example.com/identifiers/fetus"
* identifier.value = "B"


Instance: uc2-mother-fetusB
InstanceOf: RelatedPerson
Title: "UC2 RelatedPerson Fetus B"
Description: "An example of a RelatedPerson defining the mother relationship from the perspective of the fetus Patient"
Usage: #example
* patient = Reference(uc2-fetusB)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MTH "Mother"

Instance: uc2-practitioner
InstanceOf: Practitioner
Title: "UC2 Practitioner"
Description: "An example of a Practitioner"
Usage: #example
* name.text = "Dr. House"

Instance: uc2-pregnancy
InstanceOf: Condition
Title: "UC2 Pregnancy"
Description: "An example of a pregnancy Condition"
Usage: #example
* clinicalStatus = $condition-clinical-code#active
* code =  $sct#364320009 "Pregnancy observable (observable entity)"
* subject = Reference(uc2-mother)


Instance: uc2-17190001
InstanceOf: Condition
Title: "UC2 Congenital Diaphragmatic Hernia Fetus A"
Description: "An example of a fetus disorder (Congenital diaphragmatic hernia) Condition"
Usage: #example
* clinicalStatus = $condition-clinical-code#active
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* category.coding[+] =  $sct#414025005 "Disorder of fetus and/or newborn (disorder)"
* code =  $sct#17190001 "Congenital diaphragmatic hernia (disorder)"
* bodySite =  $sct#5798000 "Diaphragm"
* subject = Reference(Patient/uc2-fetusA)

Instance: uc2-416010008
InstanceOf: Condition
Title: "UC2 Hypospadias Fetus B"
Description: "An example of a fetus disorder (Hypospadias) Condition"
Usage: #example
* clinicalStatus = $condition-clinical-code#active
* category.coding[0] = $condition-category#problem-list-item "Problem List Item"
* category.coding[+] =  $sct#414025005 "Disorder of fetus and/or newborn (disorder)"
* code =  $sct#416010008 "Hypospadias (disorder)"
* subject = Reference(Patient/uc2-fetusB)

Instance: uc2-hypoplasialung
InstanceOf: Observation
Title: "UC2 Hypoplasia of Lung"
Description: "An example of a Hypoplasia of Lung Observation"
Usage: #example
* status = #final
* code =  $sct#80825009 "Congenital hypoplasia of lung"
* subject = Reference(uc2-fetusA)
* valueBoolean = true
* performer = Reference(Practitioner/uc2-practitioner)
* effectiveDateTime = "2024-04-10"

Instance: uc2-karyotype-fetusA
InstanceOf: Observation
Title: "UC2 Karyotype Fetus A"
Description: "An example of a Karyotype Observation"
Usage: #example
* status = #final
* category = $observation-category#vital-signs "Vital Signs"
* code =  $sct#734840008 "Karyotype (cell structure)"
* subject = Reference(uc2-fetusA)
* valueCodeableConcept =  $sct#734871004 "Karyotype evaluation normal (finding)"
* performer = Reference(Practitioner/uc2-practitioner)
* effectiveDateTime = "2024-04-10"

Instance: uc2-karyotype-fetusB
InstanceOf: Observation
Title: "UC2 Karyotype Fetus B"
Description: "An example of a Karyotype Observation"
Usage: #example
* status = #final
* category = $observation-category#vital-signs "Vital Signs"
* code =  $sct#734840008 "Karyotype (cell structure)"
* subject = Reference(uc2-fetusB)
* valueCodeableConcept =  $sct#734871004 "Karyotype evaluation normal (finding)"
* performer = Reference(Practitioner/uc2-practitioner)
* effectiveDateTime = "2024-04-10"

Instance: uc2-gestation20
InstanceOf: Observation
Title: "UC2 Gestationale Age 20 weeks"
Description: "An example of a fetal gestational age Observation (20 weeks)"
Usage: #example
* status = #final
* category = $observation-category#vital-signs "Vital Signs"
* code =  $sct#57036006 "Fetal gestational age (observable entity)"
* subject = Reference(uc2-mother)
* focus = Reference(uc2-pregnancy)
* valueQuantity = 20 'wk' "wk"
* performer = Reference(Practitioner/uc2-practitioner)
* effectiveDateTime = "2024-03-12"

Instance: uc2-gestation24
InstanceOf: Observation
Title: "UC2 Gestationale Age 24.14 weeks"
Description: "An example of a fetal gestational age Observation (24.14 weeks)"
Usage: #example
* status = #final
* category = $observation-category#vital-signs "Vital Signs"
* code =  $sct#57036006 "Fetal gestational age (observable entity)"
* subject = Reference(uc2-mother)
* focus = Reference(uc2-pregnancy)
* valueQuantity = 24.14 'wk' "wk"
* performer = Reference(Practitioner/uc2-practitioner)
* effectiveDateTime = "2024-04-10"

Instance: uc2-ultrasoundreport24
InstanceOf: DiagnosticReport
Title: "UC2 UltraSound Scan 24 weeks"
Description: "An example of an ultrasound scan DiagnosticReport (24 weeks)"
Usage: #example
* status = #final
* code =  $sct#241493005 "Ultrasound scan for fetal growth (procedure)"
* subject = Reference(uc2-mother)
* result[0] = Reference(uc2-hypoplasialung)


Instance: uc2-ultrasoundreport20
InstanceOf: DiagnosticReport
Title: "UC2 UltraSound Report 24 weeks"
Description: "An example of an ultrasound scan DiagnosticReport (20 weeks)"
Usage: #example
* status = #final
* code =  $sct#241493005 "Ultrasound scan for fetal growth (procedure)"
* subject = Reference(uc2-mother)


Instance: uc2-amniocentesisreport
InstanceOf: DiagnosticReport
Title: "UC2 Amniocentesis Report"
Description: "An example of an amniocentesis DiagnosticReport"
Usage: #example
* status = #final
* code =  $sct#241493005 "Ultrasound scan for fetal growth (procedure)"
* subject = Reference(uc2-mother)
* result[0] = Reference(uc2-karyotype-fetusA)
* result[+] = Reference(uc2-karyotype-fetusB)


Instance: uc2-ultrasoundscan20
InstanceOf: Procedure
Title: "UC2 UltraSound Scan Procedure 20 weeks"
Description: "An example of an ultrasound scan Procedure (20 weeks)"
Usage: #example
* status = #completed
* code =  $sct#241493005 "Ultrasound scan for fetal growth (procedure)"
* subject = Reference(uc2-mother)
* report = Reference(uc2-ultrasoundreport20)
* supportingInfo = Reference(uc2-gestation20)


Instance: uc2-ultrasoundscan24
InstanceOf: Procedure
Title: "UC2 UltraSound Scan Procedure 24 weeks"
Description: "An example of an ultrasound scan Procedure (24 weeks)"
Usage: #example


* status = #completed
* code =  $sct#241493005 "Ultrasound scan for fetal growth (procedure)"
* subject = Reference(uc2-mother)
* report = Reference(uc2-ultrasoundreport24)
* supportingInfo = Reference(uc2-gestation24)


Instance: uc2-amniocentesis
InstanceOf: Procedure
Title: "UC2 Amniocentesis Procedure"
Description: "An example of an amniocentesis Procedure"
Usage: #example
* status = #completed
* code =  $sct#34536000 "Amniocentesis (procedure)"
* subject = Reference(uc2-mother)
* report = Reference(uc2-amniocentesisreport)



---

// File: input/fsh/examples/usecase3.fsh

// Automatically generated from graphBuilder.
// Project: Achondroplasia_Modeling (id1678031521974)
// View: Before Birth

Instance: uc3-mother
InstanceOf: Patient
Title: "UC3 Mother Patient"
Description: "An example of a mother Patient"
Usage: #example
 
* identifier.value = "ms"
* active = true
* name.given = "MS"
* gender = #female
* birthDate = "1991-02-01"
* address.line = "88, Factory Road"
* address.city = "Peradeniya"
* address.country = "Sri Lanka"
* contact.telecom.system = #phone
* contact.telecom.value = "+94775588745"

// Reference to RelatedPerson: Mother of fetus
* link.other = Reference(RelatedPerson/uc3-mother-fetus)
* link.type = #seealso


Instance: uc3-practitioner
InstanceOf: Practitioner
Title: "UC3 Practitioner"
Description: "An example of a Practitioner"
Usage: #example
* name.text = "Dr. Hart"

Instance: uc3-practitioner2
InstanceOf: Practitioner
Title: "UC3 Practitioner 2"
Description: "An example of a Practitioner"
Usage: #example
* name.text = "Dr. White"


Instance: uc3-encounter-firstMOHvisit
InstanceOf: Encounter
Title: "UC3 First MOH Visit"
Description: "An example of an Encounter of the mother Patient (first MOH Visit)"
Usage: #example

* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
* status = #completed
// Reference to Location: Location/Local-MOH
* location.location = Reference(uc3-location-localMOH)



Instance: uc3-location-localMOH
InstanceOf: Location
Title: "UC3 Local MOH"
Description: "Location/Local-MOH"
Usage: #example
 

Instance: uc3-pregnancytest-firstMOHVisit
InstanceOf: Observation
Title: "UC3 Pregnancy Test First MOH Visit"
Description: "An example of a qualitative pregnancy test Observation"
Usage: #example

* status = #final
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
 // Reference to Encounter: MOH Visit
* encounter = Reference(uc3-encounter-firstMOHvisit)
* code = $loinc#2106-3 "Choriogonadotropin (pregnancy test) [Presence] in Urine"
* valueString = "Positive"

* performer = Reference(Practitioner/uc3-practitioner)
* effectiveDateTime = "2023-12-19"

Instance: uc3-bodyweight-firstMOHvisit
InstanceOf: Observation
Title: "UC3 Body Weight First MOH Visit"
Description: "An example of a body weight Observation"
Usage: #example

* status = #final
* category = $observation-category#vital-signs "Vital Signs"
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
* code = $loinc#29463-7 "Body weight"
 // Reference to Encounter: MOH Visit
* encounter = Reference(uc3-encounter-firstMOHvisit)
* effectiveDateTime = "2021-07-03"
* valueQuantity = 49 'kg' "kg"
* performer = Reference(Practitioner/uc3-practitioner)
* effectiveDateTime = "2023-12-19"

Instance: uc3-bodyheight-firstMOHvisit
InstanceOf: Observation
Title: "UC3 Body Height First MOH Visit"
Description: "An example of a body height Observation"
Usage: #example

* status = #final
* category = $observation-category#vital-signs "Vital Signs"
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
 // Reference to Encounter: MOH Visit
* encounter = Reference(uc3-encounter-firstMOHvisit)
* code = $loinc#8302-2 "Body height"
* effectiveDateTime = "2021-07-03"
* valueQuantity = 147 'cm' "cm"

* performer = Reference(Practitioner/uc3-practitioner)
* effectiveDateTime = "2023-12-19"

Instance: uc3-hemoglobin-firstMOHvisit
InstanceOf: Observation
Title: "UC3 Hemoglobin First MOH Visit"
Description: "An example of a hemoglobin Observation"
Usage: #example

* status = #final
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
 // Reference to Encounter: MOH Visit
* encounter = Reference(uc3-encounter-firstMOHvisit)
* code = $loinc#718-7 "Hemoglobin [Mass/volume] in Blood"

* performer = Reference(Practitioner/uc3-practitioner)
* effectiveDateTime = "2023-12-19"

Instance: uc3-reducingsubstances-firstMOHvisit
InstanceOf: Observation
Title: "UC3 Reducing Substances First MOH Visit"
Description: "An example of a reducing substances Observation"
Usage: #example

* status = #final
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
 // Reference to Encounter: MOH Visit
* encounter = Reference(uc3-encounter-firstMOHvisit)

* code = $loinc#5809-9 "Reducing substances [Presence] in Urine"

* performer = Reference(Practitioner/uc3-practitioner)
* effectiveDateTime = "2023-12-19"


Instance: uc3-encounter-followupMOHvisit
InstanceOf: Encounter
Title: "UC3 Follow Up MOH Visit"
Description: "An example of an Encounter of the mother Patient (MOH Visit Follow Up)"
Usage: #example

* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
* status = #completed

// Reference to Location: Location/Local-MOH
* location.location = Reference(uc3-location-localMOH)



Instance: uc3-uterusfundalheight-followupMOHvisit
InstanceOf: Observation
Title: "UC3 Uterus Fundal Height Follow Up MOH Visit"
Description: "An example of a uterus fundal height Observation"
Usage: #example

* status = #final
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
 // Reference to Encounter: MOH Visit Follow Up
* encounter = Reference(uc3-encounter-followupMOHvisit)

* code = $loinc#11881-0 "Uterus Fundal height Tape measure"

* performer = Reference(Practitioner/uc3-practitioner)
* effectiveDateTime = "2024-01-30"


Instance: uc3-bodyweight-followupMOHvisit
InstanceOf: Observation
Title: "UC3 Body Weight Follow Up MOH Visit"
Description: "An example of a body weight Observation"
Usage: #example

* status = #final 
* category = $observation-category#vital-signs "Vital Signs"
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
* code = $loinc#29463-7 "Body weight"
 // Reference to Encounter: MOH Visit Follow Up
* encounter = Reference(uc3-encounter-followupMOHvisit)
* effectiveDateTime = "2021-08-02"
* valueQuantity = 50 'kg' "kg"

* performer = Reference(Practitioner/uc3-practitioner)
* effectiveDateTime = "2024-01-30"

Instance: uc3-location-KandyHospital
InstanceOf: Location
Title: "UC3 Kandy Hospital"
Description: "An example of a Location (Kandy Hospital)"
Usage: #example


Instance: uc3-fetus
InstanceOf: Patient
Description: "An example of a fetus Patient"
Usage: #example
* extension.url = "http://hl7.org/fhir/StructureDefinition/patient-fetalStatus"
* extension.valueCode = #potential-for-live-birth
 

Instance: uc3-encounter-obsclinic
InstanceOf: Encounter
Title: "UC3 Obstetric Clinic Encounter"
Description: "An example of an Encounter of the baby Patient (Obs Clinic)"
Usage: #example

* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* status = #completed
// Reference to Location: Kandy Hospital
* location.location = Reference(uc3-location-KandyHospital)
 // Reference to Patient: Fetus
* subject = Reference(uc3-fetus)


Instance: uc3-femurlenght-obsclinic
InstanceOf: Observation
Title: "UC3 Femur Length Obstetric Clinic"
Description: "An example of a femur length Observation"
Usage: #example

* status = #final
 // Reference to Patient: Fetus
* subject = Reference(uc3-fetus)
* code = $loinc#11963-6 "Fetal Femur diaphysis [Length] US"
* valueQuantity.value = 40
* valueQuantity.unit = "mm"
 // Reference to Encounter: Obs Clinic
* encounter = Reference(uc3-encounter-obsclinic)

* performer = Reference(Practitioner/uc3-practitioner2)
* effectiveDateTime = "2024-04-09"

Instance: uc3-headcircumference-obsclinic
InstanceOf: Observation
Title: "UC3 Head Circumference Obstetric Clinic"
Description: "An example of a head circumference Observation"
Usage: #example

* status = #final
 // Reference to Patient: Fetus
* subject = Reference(uc3-fetus)
 // Reference to Encounter: Obs Clinic
* encounter = Reference(uc3-encounter-obsclinic)
* code = $loinc#11984-2 "Fetal Head Circumference US"
* valueQuantity.value = 318
* valueQuantity.unit = "mm"

* performer = Reference(Practitioner/uc3-practitioner2)
* effectiveDateTime = "2024-04-09"


Instance: uc3-familymemberhistory
InstanceOf: FamilyMemberHistory
Title: "UC3 FamilyMemberHistory of Fetus"
Description: "An example of the family member history of the fetus Patient"
Usage: #example
 
// Reference to Patient: Fetus
* patient = Reference(uc3-fetus)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MTH "mother"
* status = #partial
* condition.code =  $sct#86268005 "Achondroplasia"


Instance: uc3-careplan
InstanceOf: CarePlan
Description: "Management Plan"
Usage: #example
 
// Reference to Patient: Mother
* subject = Reference(uc3-mother)
// Reference to Encounter: Encounter Obs Clinic
* encounter = Reference(uc3-encounter-obsclinic)
* status = #active

* intent = #plan

Instance: uc3-mother-fetus
InstanceOf: RelatedPerson
Title: "UC3 RelatedPerson Fetus"
Description: "An example of a RelatedPerson defining the mother relationship from the perspective of the fetus Patient"
Usage: #example
* patient = Reference(Patient/uc3-fetus)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MTH "Mother"

Instance: uc3-pregnancy
InstanceOf: Condition
Title: "UC3 Pregnancy"
Description: "An example of a pregnancy Condition"
Usage: #example
* clinicalStatus = $condition-clinical-code#active
* code =  $sct#364320009 "Pregnancy observable (observable entity)"
* subject = Reference(uc3-mother)

---

