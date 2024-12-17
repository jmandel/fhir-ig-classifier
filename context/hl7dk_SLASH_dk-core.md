File: repos/hl7dk_SLASH_dk-core/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration                     │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.dk.core
canonical: http://hl7.dk/fhir/core
name: DKCore
title: "HL7 FHIR Implementation Guide: DK Core"
description: A FHIR Implementation Guide for the Danish common needs across healthcare sectors
#Flip status to 'active' for publication. Flip to 'draft' for CI
status: draft
#status: active
version: 3.5.0
fhirVersion: 4.0.1
copyrightYear: 2021+
license: CC0-1.0
#Flip releaseLabel to 'release' for publication. Flip to 'ci-build' for CI
releaseLabel: ci-build
#releaseLabel: release
publisher:
  name: HL7 Denmark
  url: http://www.hl7.dk
  email: jenskristianvilladsen@gmail.com

jurisdiction: urn:iso:std:iso:3166#DK "Denmark"
# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

menu:
   Table of Contents: toc.html
   Home: index.html
   Guidance: guidance.html
   Profiles: profiles.html
   Extensions: extensions.html
   Terminology: terminology.html
   Artifacts: artifacts.html
   Downloads: downloads.html

parameters:
  show-inherited-invariants: false
  ipa-comparison: "{last}"
  special-url: [urn:oid:1.2.208.176.2.1, urn:iso:std:iso:11073:10101, urn:oid:1.2.208.176.2.4, urn:oid:1.2.208.176.2.21, urn:oid:1.2.208.176.2.4.12]

dependencies:
  hl7.fhir.uv.phd: 1.0.0


---

// File: input/pagecontent/Bundle-ContinuaBundleWithDevice-intro.md

The following example shows a real-life recording of a home monitoring blood pressure measurement. Due to the
size and complexity of this example, a bit of background and guidance on the contents will be provided

## Background

In many situations citizens may use personal equipment (their own property or borrowed from a healthcare
provider) to automatically capture and record medical observations. This class of equipment is known by the
term "Personal Health Devices" (PHDs). A number of challenges arise from the complexity of dealing with
diverse consumer-grade Internet-connected equipment used under no clinical supervision:

 - Type, quality, accuracy and provenance of the observations?
 - Systematically recording the state of sensors and relevant events detected during the measurement.
 - Meta information regarding the equipment, the observation, or the context.
 - What is the identity of the patient/citizen/user? Authorization, authentication, etc...
 - Accuracy of timestamps, consistency of timelines etc. In particular when the PHD is used by someone
   traveling around the globe.

### Standardization and Interoperability

In order to deal with these challenges and coordinate the effort across many different standardization bodies,
the [Continua Design Guidelines (CDG)](https://www.pchalliance.org/continua-design-guidelines) has been
created, and the coordination effort continues under the [IHE Personal Connected Health
(PCH)](https://wiki.ihe.net/index.php/Personal_Connected_Health) program. In 2013, Denmark adopted the CDG
as a [reference
architecture](https://sundhedsdatastyrelsen.dk/-/media/sds/filer/rammer-og-retningslinjer/referenceaktitektur-og-it-standarder/referencearkitektur/referencearchitecture-collecting-health-data-citizens.pdf).

The CDG offers guidance to implementors of PHD equipment and related applications, providing a single data
model that may be expressed and exchanged using (and translated back and forth between) many different
container formats and transports:

 - [IEEE 11073 PHD](http://11073.org/)
 - [HL7 FHIR PHD IG](http://hl7.org/fhir/uv/phd/)
 - [HL7 CDA PHMR](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=33)
 - HL7 v2 Messaging

With transports ranging from [Bluetooth Low
Energy](https://www.bluetooth.com/bluetooth-resources/personal-health-devices-transcoding/), NFC, USB,
Internet, to [XDS.b and XDR exchange of PHMR
documents](https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-H.813-201911-I!!PDF-E&type=items)



## Bundle Overview and Reader's Guide

The example provided here is the data payload transferred from the home of the user over the Internet to a
central collection server at a tele-monitoring service provider. This bundle is a single self-contained
message, demonstrating how a blood pressure measurement is encoded using a FHIR Bundle compliant to *both* the
[HL7 FHIR PHD IG](http://hl7.org/fhir/uv/phd/) *and* the `DkCoreObservation` profiles.

### Bundle Structure and Content

The Bundle contains the following entries:

 - **The Patient** As the bundle must be self-contained, a Patient resource must be included. This is of
   course a `DkCorePatient`.
 - **The Gateway Device** The blood pressure monitor device used in this case is not aware of the identity of
   its user. It will just send the measurement using Bluetooth Low Energy to a compliant gateway. The
   gateway - in this case an Android app - is responsible for adding the identity of the patient, and also for
   checking (and correcting if necessary) the blood pressure monitor's built-in clock, which is used to create
   the observation timestamps.
 - **The PHD** In this case, a blood pressure monitor from A&D was used to create a blood pressure
   measurement.
 - **Battery Level Observation** The A&D blood pressure monitor gauges its own battery every time it is used.
 - **Coincident Timestamp Observation** The Gateway Device reads the clock of the PHD and creates this
   observation of the *current time* of the PHD timestamped using the Gateway's clock (which is supposed to be
   synchronized with a time service). This is a way to detect (and possibly correct) breaches in the timeline.
 - **Blood Pressure Observation** This is a `DkCoreObservation`
 - **Heart Rate Observation** Also a `DkCoreObservation`
 - **Blood Pressure Status Observation** This observation type can be used to report a number of conditions
   during the measurement. In this case, an irregular pulse was detected during the measurement. Some PHDs may
   be able to report different conditions - e.g. that the blood pressure cuff was too loose.
   
 You may also notice that the type of the Bundle is a transaction bundle and that all the entries in the
 bundle are conditional creates using a funny-looking identifier, which is actually the result of a calculated
 function that summarises the resource into a short form (hash), in order to prevent duplicates.


## Narrative Content



---

// File: input/pagecontent/downloads.md

The following sections lists various links and artifacts that may be useful during development

### Tools, frameworks and supported programming languages
- See [https://hl7.org/fhir/R4/downloads.html](https://hl7.org/fhir/R4/downloads.html)

### Examples

Autogenerated examples are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)

### Downloadable Copy of schematrons

A downloadable version of profiles, valuesets and other profiles used in this IG is available for download (npm format):

- [Downloadable Copy](package.tgz)

---

// File: input/pagecontent/guidance.md

## Intent of this Implementation Guide
This implementation guide does not attempt to constrain for specific use cases. 
Instead it defines representations of how commonly needed concepts, in an Danish context, can be applied generally.
This implementation guide can then be drawn on for specific use cases and further constraints added for the needs of those cases.
By referencing the DK Core definition in downstream implementation guides there is a basic level of alignment in representations across those guides.  
This alignment allows general processing and simpler exchange of information from one implementation guide domain to another without the need for extensive integration treanslation tasks.
This becomes more useful as the number of specific use case implementation guides expands and the potential issues of movement of information in an out of multiple domains of interest is addressed.
This approach manifests as the following representation outcomes in this guide, as follows:
* Cardinality:  most representations described have a cardinality as defined in the core FHIR specification (which is general in nature), this is to avoid required content for use cases that do not need or support the content.
* Must Support: the FHIR profiling Must Support flags is not used in this guide; for similar reasons to the cardinality there is no assertion of required support for any of the elements profiled in this guide.
* Terminology Binding: elements that can be bound to terminology are often sliced offering one or more specific binding options that can be required in downstream guides; this also provides valuesets that are common/suitable for the Danish context. 
* Slice Constraints: in this guide choice or repeating elements are often sliced to define specific profiling options for that element, specific slices needed in downstream guides can be picked up and made required (cardinality), or must support as needed. Slicing on elements is left open to allow other slice profiles to be added as needed.


---

// File: input/pagecontent/index.md

### Introduction
This implementation guide is provided to support the use of FHIR<sup>&reg;&copy;</sup> in a Danish context.

This document is a working specification that is expected to be implemented and tested by FHIR<sup>&reg;&copy;</sup> system producers to enable feedback to improve the content of this guide. With this first Standard for Trial Use ballot version we are looking for feedback if the following goals are met:  
- provide guidance on core resources for identifiers, code system, value sets and naming systems in a Danish specific context.
- define extensions that are necessary for local use covering needed Danish concepts

**Note**: This implementation guide is not (yet) a FHIR API specification, this will be a goal for the next iteration.

For more information about the Danish HL7 affiliate (HL7-Denmark), please go to [hl7.dk](https://www.hl7.dk). Here can you also find procurement recommendation in regards to FHIR, and an overview of some FHIR implementations in Denmark.

### Scope
The target group of this specification is any party that wants to specify FHIR standards for use in the Danish Health Sector. As a core-specification, a party that wants to use the specification should inherit from dk-core and build use-case specific profiles on top. As such, dk-core does not provide profiles for specific use use cases out-of-the-box.

This document presents Danish use concepts defined via FHIR processable artefacts:

* [Profiles](profiles.html) - are useful constraints of core FHIR resources and datatype for Danish use
* [Extensions](extensions.html) - are FHIR extensions that are added for local use, covering needed Danish concepts
* [Terminologies](terminology.html) - are defined or referenced code systems and value sets for Danish context

dk-core is regularily approved by HL7 Denmark and added to the catalogue of approved standards governed by The Danish Health Data Authority, after consideration by RUSA (Rådgivende Udvalg for Standarder og Arkitektur). See the exact approvals for each version in the history page.

### Governance
FHIR profiles are managed under HL7 Denmark in the HL7 Danish FHIR working group:

* [Source](https://github.com/hl7dk/dk-core)
* [Wiki](https://github.com/hl7dk/dk-core)


### Collaboration
This guide is the product of collaborative work undertaken with participants from:

* [Danish FHIR Implementers Community](https://confluence.hl7.org/display/HD/DK+FHIR+SIG)
* [HL7 Denmark](https://www.hl7.dk)

### Language
The main language of this implementation guide, and the profiles in it, is English. Content that does not have an official English term uses a Danish term instead. Sometimes terms are expalined using both Danish and English. Danish terms and explanaitions are prefixed with 'Da'

### Connection between dk-core and common Danish architectures and standards
HL7 Denmark includes common Danish architectures and standards if relevant, when content is added to dk-core. This section provides information about principle decisions as well as more specific ones that require explainantion.

#### Principle decisions
* HL7 Denmark considers Danish legislation as the first source of truth when designing models, HL7 Denmark seeks to represent known named entities relevant for health data interoperability truthfully.
* HL7 Denmark upholds the requirements of the FHIR standard whenever it is possible within the bounderies of the Danish legislation.
* Enitites that are named both in the FHIR standard and Danish legislation, keeps FHIR naming and requirements, but should explain its relation to Danish names/requirements.
* Danish standards and arhitectures are considered when designing FHIR profiles. HL7 Denmark uses them when they are relevant for interoperability of health data, and when they are compatiple with the FHIR standard. Often public information and data models used as basis of public registries are too detailed, to warrant replication in a FHIR standard. E.g. The Organization profile references organisation registries such as SOR and FK-ORG rather than re-constructing each of their attributes in the FHIR-profile, only attributes relevant for interoperability is provided in the FHIR profiles.

#### Specific decisions
* Patient.maritalStatus uses the extendable ValueSet required by the FHIR standard. However, Danish legislation and registries have two additional statuses not covered by the international ValueSet, so these two codes are added in dk-core.
* Several basic resources such as Patient and Organization has an adress. In dk-core these adresses use the [FHIR datatype](http://hl7.org/fhir/R4/datatypes.html#Address), which is very basic compared to the [Danish Adress standard](https://arkitektur.digst.dk/adresse). However, adresses can be refered faithfully using the international standard e.g. Adress.text can be mapped directly to the Danish Adresse.adressebetegnelse. If more details are needed than FHIR instanses provide, the [Danish adress registry](https://danmarksadresser.dk/om-adresser/danmarks-adresseregister-dar) can be used for look-up. 

### Safety Considerations
This implementation guide defines data elements, resources, formats, and methods for exchanging healthcare data between different participants in the healthcare process. As such, clinical safety is a key concern. Additional guidance regarding safety for the specification’s many and various implementations is available at: [https://www.hl7.org/FHIR/safety.html](https://www.hl7.org/FHIR/safety.html).

Although the present specification does gives users the opportunity to observe data protection and data security regulations, its use does not guarantee compliance with these regulations. Effective compliance must be ensured by appropriate measures during implementation projects and in daily operations. The corresponding implementation measures are explained in the standard. 
In addition, the present specification can only influence compliance with the security regulations in the technical area of standardisation. It cannot influence organisational and contractual matters.

### License and Legal Terms 

This document is licensed under Creative Commons "No Rights Reserved" ([CC0](https://creativecommons.org/publicdomain/zero/1.0/)).

HL7®, HEALTH LEVEL SEVEN®, FHIR® and the FHIR <img src="icon-fhir-16.png" style="float: none; margin: 0px; padding: 0px; vertical-align: bottom"/>&reg; are trademarks owned by Health Level Seven International, registered with the United States Patent and Trademark Office.

This implementation guide contains and references intellectual property owned by third parties ("Third Party IP"). Acceptance of these License Terms does not grant any rights with respect to Third Party IP. The licensee alone is responsible for identifying and obtaining any necessary licenses or authorizations to utilize Third Party IP in connection with the specification or otherwise.

See also http://hl7.org/fhir/license.html

Following is a non-exhaustive list of third-party artifacts and terminologies that may require a separate license:

**SNOMED Clinical Terms® (SNOMED CT®)**
This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International (former known as International Health Terminology Standards Development Organisation IHTSDO). All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. “SNOMED” and “SNOMED CT” are registered trademarks of SNOMED International.

**Logical Observation Identifiers Names and Codes LOINC**
This material contains content from LOINC® (http://loinc.org). The LOINC table, LOINC codes, and LOINC panels and forms file are copyright © 1995-2013, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and available at no cost under the license at http://loinc.org/terms-of-use.

### IP Statements

{% include ip-statements.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Dependency Table

{% include dependency-table.xhtml %}

### Globals Table

{% include globals-table.xhtml %}

---

// File: input/pagecontent/StructureDefinition-dk-core-basic-observation-intro.md

### Scope and usage
The Danish Core Basic Observation profile is intended to represent basis observations performed on a subject. The purpose of this profile is to ensure a common structure of frequently measured and shared observations. A basic observation is, in a Danish context, a measurable and often used value. This can be observations such as vital signs and basic observations like height and weight.

The profile is a further profiling of DkCoreObservation and in most cases it complies to [HL7's Vital Signs profile](http://hl7.org/fhir/R4/vitalsigns.html). Instances will not be compliant with HL7's Vital Signs profile when using the code `59408-5 (Oxygen saturation in Arterial blood by Pulse oximetry)` from the LOINC ValueSet and the unit `{fraction} (fraction)` from the UCUM ValueSet, as these codes are not included in the ValueSets in the Vital Signs profile.

#### Codes
It is required to include a LOINC code at Observation.code. The [LOINC ValueSet](http://hl7.org/fhir/R4/valueset-observation-vitalsignresult.html) used in the  HL7's Vital Signs profile is expanded with the code `59408-5 "Oxygen saturation in Arterial blood by Pulse oximetry"` because it is an often used, measurable parameter in Denmark.

Further, [DK Core NPU Basic Observation](./ValueSet-dk-core-NPUBasicObservation.html), [DK Core IEEE Basic Observation](./ValueSet-dk-core-IEEEBasicObservation.html), and [DK Core SNOMED CT Basic Observation](./ValueSet-dk-core-SCTBasicObservation.html) ValueSets are added to the given slices, and codes from these ValueSets are optional to include. 

An overall guidance of using the ValueSets follows the guidance of DkCoreObservation and is further specified here:
* NPU codes can be used when communicating observations from the laboratory area. NPU also covers codes concerning basic observations. For this reason, NPU is included.
* IEEE codes can be used, if the original observation of the device is represented with IEEE codes.
* SNOMED CT codes are accepted in Denmark. They can be included as a reference terminology, where it is used in addition to the original coding. SNOMED CT codes can also be used in areas where NPU does not cover.

The codes in the three ValueSets are selected to best represent the codes included in the LOINC ValueSet. The following describes the possible use of additional codes:
* No meaningful code: Not all LOINC codes are represented in ValueSets, as no meaningful codes exists in the terminology. An example is that the `8478-0 Mean blood pressure` does not exists in the NPUBasicObservation ValueSet. 
* One meaningful code: When one meaningful code is included from the ValueSet, as the code best represents the LOINC code. An example is the `150022 MDC_PRESS_BLD_NONINV_DIA` from the IEEE ValueSet which represents `8462-4 Diastolic blood pressure` the best.
* Multiple meaningful codes: Multiple codes in a ValueSet may be used to represent a code from the LOINC ValueSet, which may be relevant to express a higher level of granularity. An example is multiple codes representing systolic blood pressure in the SNOMED CT ValueSet depending on the circumstances of the measurement, which all represents `8480-6 Systolic blood pressure`.

If a measurement is documented in a system or device e.g. with a SNOMED CT or IEEE code, but no LOINC code. The system must map the SNOMED CT or IEEE code to the LOINC code before exchanging it. Otherwise, it will not accommodate the requirements of the DkCoreBasicObservation profile, since a LOINC code is required.

#### Units
The [UCUM ValueSet](http://hl7.org/fhir/ValueSet/ucum-vitals-common) used in HL7's Vital Signs profile is extended in the [DK Core UCUM Basic Units ValueSet](./ValueSet-dk-core-UCUM-BasicUnits.html) to include a code for fraction `{fraction} fraction`. In the NPU ValueSet, this unit is used for the code `NPU27280 Hb(Fe; O2-bind.;aB)—Oxygen(O2); sat.(Pulse oximetry) = ?`, why it is included. However, using the fraction unit is not compliant with [HL7's Vital Signs profile](http://hl7.org/fhir/R4/vitalsigns.html), here the unit `% percent` is used for the LOINC code `"2708-6 "Oxygen saturation in Arterial blood"`. The example [John's oxygen saturation measurement (Observation)](./Observation-ObservationOxySatObservation.html) illustrates how this can be handled by deriving the instance with the NPU code from an instance with a LOINC and IEEE code.

The DK Core UCUM Basic Units ValueSet is added to the elements Observation.valueQuantity and Observation.component.valueQuantity. 

#### Examples
The table below includes instances of the DkCoreBasicObservation used to represent observations used to evaluate the patient based on different procedures used in Denmark. 

> Note: The current FHIR validator (per Nowember 2023) validates Observation instances with LOINC-codes from the [international Vital Signs profile](http://hl7.org/fhir/R4/vitalsigns.html) against the requirements in this profile. This have influenced instances in DkCore by 1) removal of the LOINC-code `"2708-6 "Oxygen saturation in Arterial blood"` in [John's oxygen saturation measurement (Observation)](./Observation-ObservationOxySatObservation.html) which means it cannot be an instance of DkCoreBasicObservation but has to obey from DkCoreObservation, and 2) addition of effective timestamps in [ObservationOxySatBasicObservationOrg](./Observation-ObservationOxySatBasicObservationOrg.html) and [ObservationRespiratoryBasicObservation](./Observation-ObservationRespiratoryBasicObservation.html).

Example | Description
----------------- | ------------------------ 
[Glasgow Coma Scale (GCS)](./Observation-MaxGlasgowComaScale.html) | This example includes the relevant observations related to Glasgow Coma Scale. This scale is used to assess the level of consciousness in people with brain damage.
[TOKS (Danish: Tidlig opsporing af kritisk sygdom)](./Bundle-MaxTOKS.html) | TOKS is a scoring system used to determine if a patient is in a critical state at an early state. The example includes basic observations, such as heartrate, temperature and more, as well as a Glasgow Coma Scale. 
[TOBS (Danish: Tidlig opsporing af begyndende sygdom)](./Bundle-ElsesTOBS.html) | TOBS is a scoring system used to determine if a citizen is in the early state of illnesses. The example includes basic observations, such as heartrate, temperature, TOBS score and more, as well as a reference to the performer of the observations. 
[Vital signs panel](./Observation-MaxVitalSignsPanel.html) | An example of observations included in a vital signs panel. From the element Observation.hasMember, the panel observations are referenced.  
[John's oxygen saturation measurement (Observation)](./Observation-ObservationOxySatObservation.html) | This example suggests a way to handle the oxygen saturation case, where the original measurement was reported in '%' by a device or typed in manually, and then 'translated' to the NPU system, which requires the value to be unitless.



---

// File: input/pagecontent/StructureDefinition-dk-core-condition-intro.md

### Scope and usage
The Danish Core Condition profile is intended to encapsulate condition information, as used in the Danish health sector. In dk-core, conditions have been constrained to only containing conditions as stated by health or social sector practitioners. This means that conditions, that patients or citizens assert themselves to have, should not be represented using this profile. Patients' own assessments can, in most cases, be represented as Observations or QuestionnaireResponses. However, in some use cases, where the patient asserts the problem, that leads to healthcare interventions or own interventions. It does make sense to represent these as Conditions. In this case, use the international standard [Condition](https://www.hl7.org/fhir/condition.html), not this dk-core Condition profile.

This way of constraining the Condition profile is within the boundaries of what the Danish Health Data Authority and Local Government Denmark define as a Condition.
* The Danish Health Data Authority, [Begrebsbasen](https://sundhedsdata.iterm.dk/): Helbredstilstand er en tilstand vedrørende helbred der aktuelt vurderes med henblik på sundhedsintervention
* Local Government Denmark, [Fælleskommunale rammearkitektur, FKI](http://info.rammearkitektur.dk/SocialOgSundhed/FKI/ClassDiagram/d2ca33a5-a53c-4f83-82e5-0f9f7ce7a325.htm): Fokustilstand er en borgers helbredsmæssige, funktionsmæssige og/eller sociale situation, på et givet tidspunkt, der er anledning til faglig bekymring, og vurderes mhp. indsats

We use the Condition profile for describing both conditions that are true for an encounter, and for conditions that are true for a periode of time. "In FHIR, we distinguish between the two using the Condition.category that can take the two values problem-list-item og encounter-diagnosis. In this list, examples of use is compiled:
* LPR3 conditions are encounter-diagnosis
* Regional care-pathway diagnosis (Regionale forløbsdiagnoser) are problem-list-items 
* General practioners can code each encounter with an ICPC code. This is an encounter-diagnosis
* Municipality conditions i.e. FSIII-conditions and FFB-subthemes are problem-list-items
* General practitioners, in some cases, follow a patient condition for a longer periode of time (e.g. high blood pressure, high cholesterol, COPD), and some systems support care pathways for these conditions. These conditions may be categorized as problem-list-items.

Given that we have a condition, which is a problem-list-item, ending the condition have two meanings:
* The first is that the patient no longer has the condition e.g. a pressure ulcer has healed. In this case, Condition.clinicalStatus=inactive and Condition.abatementTime is the date where the condition was no longer a problem.
* The second meaning of "ended" is that the condition falls out of focus in a professional context e.g. if the patient moves, or another professional group takes over the care for the patient. A Condition no longer in focus can be represented in two ways:
  * The Condition.category looses its "problem-list-item" flag. The idea is to state that from a patient viewpoint the condition has not changed, but in this professional context it is no longer in focus.
  * The Condition.extension.NotFollowedAnymore is populated with the date that it lost focus in a specific professional context.

The status attributes controls the context of a condition. clinicalStatus should be populated with the value “active” if the patient has the condition, and inactive if the patient no longer have the condition. Condition.verificationStatus should be set to “confirmed” if the condition have been established as true by someone with authority (e.g. a diagnosis is confirmed by a doctor). A condition is “unconfirmed”, if the patient is suspected of having a condition, and "refuted" if it has been confirmed that the condition is not present. An example of an unconfirmed condition can be found here [John Melanoma](Condition-JohnMelanoma.html).

Note that "unconfirmed" is not the same as a risk of developing a condition. The risk of developing a certain condition may be recorded in (at least) two ways in FHIR i.e. as a familyMemberHistory or by populating Condition.code with a code that expresses a risk e.g. the SNOMED CT code ´395112001 At increased risk for cardiovascular event (finding)´. The first would typically be used if recording a family history, the second, if you want to use an increased risk as the reason for starting a prophylactic treatment.

Condition profile cover both primary sector, secondary sector (medical specialists ([DA] speciallæger) and hospitals) and municipality cases. As such the profile should be usable in most Danish contexts.


---

// File: input/pagecontent/StructureDefinition-dk-core-observation-intro.md

### Scope and usage
The Danish Core Observation profile is intended to represent observations for a variety of cases including:
* laboratory data
* results of using clinical assessment tools such as APGAR
* observations obtained in clinical assesments such as abdominal tenderness
* general health status such as pregnancy
* social history and anamnesis (Please be aware, an Observation must only include more than one code, if each code is true for the observation that actually happened, and not several observation as a result of an investigation. In this case, the ClinicalImpression resource should be used.)


>Note: The profile [DkCoreBasicObservation](./StructureDefinition-dk-core-basic-observation.html) is made to ensure a common structure of measurable and often used observations, such as vital signs, height and weight. When sharing these basic observations, DkCoreBasicObservation profile is recommended to use.


#### Codes
In a Observation resource, codes from CodeSystems are used to describe what is observed in the elements Observation.code.coding and Observation.component.code.coding. In these elements, multiple CodeSystems are specified to ensure similar use of relevant CodeSystems in a Danish context. Some observations may need to be grouped together to document critical observations, e.g. systolic and diastolic bloodpressure, which can be supported by the element Observation.component. [Click here for more information about Observation Grouping](http://hl7.org/fhir/observation.html#obsgrouping). 

Multiple CodeSystems are added to the elements Observation.code.coding and Observation.component.code.coding, to ensure similar use of relevant CodeSystems in a Danish context. In addition, locally defined codes may be added. HL7 Denmark recommend adding these in a new slice using a system, that clearly states from where the code originate. 

Two or more Observation.code.coding may be assigned in the same Observation.code, if each coding is true for the observation that actually happened. An example is [HeartRate.Poul.1974654](./Observation-HeartRate.Poul.1974654.html), where a LOINC, IEEE and NPU coding is used to describe the heart rate. Only one of the codings can be user selected, described by the element userSelected = `true`. An example is [ElsePainVRS](./Observation-ElsePainVRS.html), where the value[x] includes two codings with one of them being userSelected.
If the codings and units does not represent the same meaning, one instance of an Observation can be derived from another, as described in section [Observation derived from other Observation](#observation-derived-from-other-observation).

None of the specified CodeSystems are required since each use case may call for different codes to represent the observations. The specified CodeSystems are included based on the [standard catalogue from the Danish Health Data Agency](https://sundhedsdatastyrelsen.dk/da/rammer-og-retningslinjer/om-referencearkitektur-og-standarder/standardkatalog), and Danish practice. In the following, some overall recommendations about the use of the code systems are provided:
* NPU codes are the preferred first choice when communicating observations from the laboratory area. NPU contains few codes outside the laboratory area. NPU is recommended to use in the standard catalogue from the Danish Health Data Agency.
* LOINC codes are generally not recommended, for clinical areas that NPU covers, because they are overlapping without being modelled in exactly the same way. For clinical areas not covered by NPU, LOINC can be used. LOINC is an international code system, and is the first choice for many FHIR-observations around the world. This also means that Observation standard-profiles often use LOINC codes, and that interoperability use cases using equipment/wearables intended for markets intentionally, very well may have build-in LOINC codes. LOINC is not recommended to use by the Danish Health Data Agency, but is included to support interoperability across countries in projects such as European Helath Data Space (EHDS).
* IEEE codes are the internal codes of many devices see [https://www.iso.org/standard/37890.html](https://www.iso.org/standard/37890.html). If an original observation from a device is represented, HL7-DK recommends using its original layout including the IEEE codes. Read more in IHE Personal Connected Health [https://wiki.ihe.net/index.php/Personal_Connected_Health](https://wiki.ihe.net/index.php/Personal_Connected_Health). IEEE is recommended to use in the standard catalogue from the Danish Health Data Agency.
* SKS does have a few observation codes in use, most are found in the 'R' Hierarchy - see e.g. [https://medinfo.dk/sks/brows.php](https://medinfo.dk/sks/brows.php). HL7-DK does not recommend the use of SKS codes from the 'ZZ' hierarchy as FHIR observation-codes as they are codes for procedures. SKS is recommended to use in the standard catalogue from the Danish Health Data Agency.
* MedCom codes are Danish codes, that are not part of SKS, but have been necessary in Danish interoperability projects through time. They are sometimes referred to as kiap-codes or MCS codes. They can be found here: [https://medcom.dk/standarder/koder/laboratorieomraadet/](https://medcom.dk/standarder/koder/laboratorieomraadet/) or here: [https://kiap.dk/kiap/praksis/services/koder/iupackoder.php](https://kiap.dk/kiap/praksis/services/koder/iupackoder.php). MedCom codes are not recommended to use by the Danish Health Data Agency, but are included as they are often used in MedComs standards.
* SNOMED CT codes are accepted in Denmark. SNOMED CT codes are relevant, for areas that NPU does not cover. Additionally, SNOMED CT is often used as a reference terminology, to give a common language of retrieval for data that have originally been defined or coded in some other way. If SNOMED CT is used as a reference terminology, it is often relevant to provide a SNOMED CT code, in addition to the original coding. This is also acceptable if the SNOMED CT concept is less granular than the original code, if each code is true for the observation that happened. SNOMED CT is stated to be usefull in the standard catalogue from the Danish Health Data Agency.

#### Subjects and performers
The primary use of this profile is to describe an observation performed on a patient. The patient must be represented using the [DkCorePatient](StructureDefinition-dk-core-patient.html) profile. However, it is still possible to select Observation.subject to be a Group, Device or Location. This is chosen to enable different uses of the profile e.g. a device calibration result is an observation of the device, not of the person that usually uses the device.

The performer of the observation may be different kinds of actors depending on the use case. The performer may be represented using [DkCorePractitioner](StructureDefinition-dk-core-practitioner.html), [DkCoreOrganization](StructureDefinition-dk-core-organization.html), [DkCorePatient](StructureDefinition-dk-core-patient.html), PractitionerRole, CareTeam or [DkCoreRelatedPerson](StructureDefinition-dk-core-related-person.html).

#### Quality of the Observation
If known, information about the method used for the observation can be included, in the element Observation.method, as this might affect the interpretation of the observation. In DkCoreObservation profile, a slice is added which includes an extensible ValueSet of commonly used SNOMED CT methods; `Estimation technique`, `Measurement technique`, and `Reported`. If a different method is used the ValueSet may be extended with SNOMED CT codes, or a new slice may be added.

If a known device is used to collect the observation, and information about the device is exchanged, the instance of the Device or DeviceMetric resource can be included in the same Bundle as the Observation instance. An example of usage is [Poul's home blood pressure measurement](./Bundle-ContinuaBundleWithDevice.html), where a Bundle includes both information about devices use to make the observations about the blood pressure.

#### Units
If the unit of measure is known, it shall be included in the Observation instance. It is assumed, that in most situations these units can be represented with [UCUM](http://unitsofmeasure.org). For this reason, UCUM is included as system in the element Observation.valueQuantity.system. However, special cases may arise where the unit is not represented by UCUM. In such case, the unit shall be included in the element Observation.valueQuantity.unit as a string. This Observation profile has implemented a rule known as a FHIR invariant that check that this condition holds true. The invariant is called **dk-core-observation-mandatory-units**, and ensures that when a valueQuantity.value is specified, a unit and/or code shall be present.

All NPU-codes include a unit internally in the observation-code. All the other code systems mentioned here, as well as the FHIR Observation resource, assume that the unit is provided in a separate attribute. Consequently, it is important to provide the same unit in valueQuantity.code and/or valueQuantity.unit, as provided in the NPU code. If consistency is not maintained, interpretation is impossible. No explicit rules to support the use of NPU consistently are implemented in this profile, so this should be considered before implementation.

#### Observation derived from other Observation
An Observation can refer to another, possibly contained Observation from which it is derived. This can be used in cases where the measuring Device provides the measured value in, for instance, another unit or precision than used in a particular exchange context.

An example is an oxygen saturation measured as a fraction in, say, the NPU code system. Exchanging the measurement as a vital signs Observation with oxygen saturation given as percent, the original NPU-based measurement can be contained and referenced using `Observation.derivedFrom`. The example can be found in [John's oxygen saturation measurement](./Observation-ObservationOxySatBasicObservationOrg.html).


<!-- Include description of: I tilfælde af at et resultat fra en beregning, fx BMI, deles og det ønskes at dele den tilhørende formel for beregningen, vil vi se på, hvordan formlen kan deles. Det foreslås, at vi kigger på Observation.method, da dette element formentlig kan holde de nødvendige informationer. -->

---

// File: input/pagecontent/StructureDefinition-dk-core-organization-intro.md

### Scope and usage
The Danish Core Organization profile is intended to encapsulate the most common and basic data model of organizations in Danish healthcare system, covering both primary sector, secondary sector (medical specialists ([DA] speciallæger) and hospitals) and municipality cases. As such the profile should be usable in most Danish contexts. Organization is broardly defined (just as it is in the original FHIR ressource) and may be used to define all organizations directly or indirectly involved in citizen and patient care. 

Please notice, that an organization shall always have at least one identifier. Some identifiers are common in a Danish context, why they are included in the profile, see the list below. However, it is allowed to add a new identifier for a special usage. 
- *EAN identifier*: this specifically, refers to what is commonly known as the **EAN** number - which in fact is a [Global Location Number](https://www.gs1.org/standards/id-keys/gln).
- *SOR identifier*: a register for Danish health care organizations which contains information about organizations and their location. 
- *KOMBIT organization identifier*: holding the organization code. This is issued by KOMBIT.
- *Ydernummer identifier*: an identifier for private health professionals like general practitioners or physiotherapists. 
- *CVR identifier*: an official company identifier for Danish companies.
- *Kommunal identifier*: the official identifier for a Danish municipality.
- *Regional identifier*: the official organization identifier for a Danish region.
- *Producent identifier*: the identifier used for the producer of laboratory result, maintained by MedCom. 

#### Representing a general practitioner

When using the Danish Core Organization profile for representing a general practitioner, it is recommended to use both a [SOR identifier](https://hl7.dk/fhir/core/StructureDefinition-dk-core-organization-definitions.html#Organization.identifier:SOR-ID) and an [ydernummer identifier](https://hl7.dk/fhir/core/StructureDefinition-dk-core-organization-definitions.html#Organization.identifier:Ydernummer.id). It is recommended that the SOR identifier is on the ‘sundhedsinstitution’ level from the SOR hierarchy. The same SOR identifier can be used for multiple Organization instances of different general practitioner’s practices, and therefore the ydernummer identifier will be the unique identifier for a Danish GP. 

---

// File: input/pagecontent/StructureDefinition-dk-core-patient-intro.md

### Scope and usage
The Danish Core Patient profile is intended to encapsulate the most common and basic data model of patients in Danish healthcare systems covering both primary sector, secondary sector (specialty doctors and hospitals) and municipality cases. As such the profile should be usable in most Danish contexts. Note that the profile is usable for those that receive health and social care in municipalities, even in contexts where they are more commonly known as citizens ([DA] borgere).

### Patient identifiers
This patient profile currently only reflects the use of the established national danish patient identifiers called [CPR](https://cpr.dk/) and (for patients without or with unknown CPR number) the use of replacement CPR numbers ([DA] Erstatnings-CPR-numre eller eCPR). Both national [X-eCPR](https://sundhedsdatastyrelsen.dk/da/registre-og-services/ecpr) numbers issued by the Danish Health Data Authority ([DA] Sundhedsdatastyrelsen) and [D-eCPR](https://sundhedsdatastyrelsen.dk/da/rammer-og-retningslinjer/om-patientregistrering/patientregistrering-feallesindhold) numbers primarily issued locally by one of the five danish regions are supported by this profile. More official identifiers are expected to be used and profiled in the future, eg:

 * [eID](https://ec.europa.eu/digital-single-market/en/trust-services-and-eid)
 * **catastrophe** CPR numbers.

#### CPR-identifier

The element identifier.type describes the specific purpose of an identifier. It is desired to use the code 'NNDNK' from the CodeSystem [IdentifierType](https://terminology.hl7.org/4.0.0/CodeSystem-v2-0203.html) as the type for [DkCoreCprIdentifier](https://hl7.dk/fhir/core/StructureDefinition-dk-core-cpr-identifier.html). Due to known problems with the validation tool when validating the code 'NNDNK', including this type will cause an error. Therefore, it is currently not recommended to use this code.

#### eCPR-identifier

The element Patient.identifier includes two slices to represent eCPR. Each slice includes an identifier with requirements for the specific eCPR:
* For X-eCPR, the [DkCoreXeCprIdentifier](./StructureDefinition-dk-core-x-ecpr-identifier.html) must be used, which includes an OID as system and an invariant describing the requirements for the structure of the identifier, [based on guidelines from Danish Health Data Authority](https://www.nspop.dk/pages/viewpage.action?pageId=226757583#eCPRFormater(XeCPRogDeCPR)-Formatetfornationaleerstatningspersonnumre-X-eCPR). An example of usage can be seen in [here](./Patient-ukendt-X-eCPR.html).
* For D-eCPR, the [DkCoreDeCprIdentifier](./StructureDefinition-dk-core-d-ecpr-identifier.html) must be used, which includes a ValueSet of OID's that may be used as system. The OIDs represent the D-eCPR in general and D-eCPR for each of the five regions. Further, the identifier includes an invariant describing the requirements for the structure of the identifier, [based on guidelines from Danish Health Data Authority](https://www.nspop.dk/pages/viewpage.action?pageId=226757583#eCPRFormater(XeCPRogDeCPR)-Formatetfordecentraleerstatningspersonnumre-D-eCPR). An example of usage can be seen in [here](./Patient-ukendt-D-eCPR.html). 

In case it is necessary to include an eCPR which is not an X-eCPR or a D-eCPR, it is recommended to add a new slice with the relevant other system and the eCPR identifier from that system. This may be necessary for small practices or due to legacy reasons. An example of this can be seen [here](./Patient-ukendt.html).

### Handling CPR registry civilstand and status values
In the Danish CPR registry, a civilstand and a status attribute exist. The civilstand attribute contains information about marital status as well as deceased status. The status value contains information about a persons whereabouts e.g. living in Denmark or Greenland with known or unknown address, disappearance, and death. Most of the status values are used to inform about the reason for a CPR identifier being inactive.

  In FHIR, this information is separated into different attributes. As a consequence the following decisions have been made:
  * CPR status values except for deceased status are not represented. Data in the health sector is typically not communicated, relating to inactive CPR-identifiers. If information about whether people live in Denmark or Greenland is important, this can be represented in the Patient.addresss attribute. Deceased status is represented in Patient.deceased
  * Civilstand values are represented in Patient.maritalStatus except for the value 'D' død (dead). Death is registered in Patient.deceased. Patient.maritalStatus uses a standard FHIR ValueSet. However a few of the Danish civilstatus values cannot be converted (P and O). Here the FHIR ValueSet is extended with the CPR-registry values. 

The tabel below shows how to convert between CPR-registry civilstand/status and FHIR representation.

{:class="grid"}
|   CPR-registry civilstand/status      | FHIR representation        |
| ------------- |-------------| 
|status = 90 and civilstand = D indicating a dead person |Patient.deceasedBoolean = true|
|civilstand = U indicating an unmarried person | Patient.maritalStatus = U|
|civilstand = F indicating a divorced person |Patient.maritalStatus = D|
|civilstand = E indicating a widow |Patient.maritalStatus = W|
|civilstand = P indicating 'registreret partner'/registered partner which is a marriage-like status according to Danish law |Patient.maritalStatus = P|
|civilstand = O indicating 'ophørt registreret partner'/disolved partnership. When the marriage-like partnership is disolved (parallel to a divorce) |Patient.maritalStatus = O|
|civilstand = L indicating that the registrered partner of the person is dead (parallel to a widow) |Patient.maritalStatus = W|

### Linking records
In Denmark it is possible to get a new CPR-number when a person e.g. changes his or her legal gender. Linking of the old and new patient records can handled using the Patient.link element, which asserts that patient resources refer to the same patient. In this case the old record should have the link type 'replaced-by' where the new record may have the link type 'replaces', both with a reference to the other record. This way of linking record can be considered in the case of legal gender. Other types of linking is described on [the page for the patient resource](https://hl7.org/fhir/r4/patient.html#links).


### Use of security label on patients
In case an implementation project needs to support name and address protection ([Navne- og adressebeskyttelse](https://www.retsinformation.dk/eli/lta/2017/646#idee1fb7b6-c7e7-429d-a738-881c5e486fa6)) of a danish citizen, it is recommended to support this with the security label as follows:
 
 ```
 <Patient xmlns="http://hl7.org/fhir">
  <meta>
    <security>
      <system value="http://terminology.hl7.org/CodeSystem/v3-Confidentiality"/>
      <code value="R"/>
      <display value="Restricted"/>
    </security>
  </meta>
...  [snip] ...
</Patient>
 ```

Use of this label should be interpreted according to the law, roughly meaning that only personnel using systems in public/official affairs are allowed to see name and address for the patient/citizen.

### Unknown values or Absent values
There may be scenarios where it is not possible to supply all values as required by this profile. For such cases it is possible to specify a Data Absent Reason ([DAR](https://hl7.org/fhir/R4/extension-data-absent-reason.html)) extension which enables data fields to be supplied where data is not available. An example of this can be seen [here](./Patient-ukendt.html). The use of DAR is not restricted to the patient profile.



---

// File: input/pagecontent/StructureDefinition-dk-core-patient-notes.md

Note: feedback is most welcome and should be directed to the danish affiliate's github repository (https://github.com/hl7dk/dk-core/).

---

// File: input/pagecontent/StructureDefinition-dk-core-practitioner-intro.md

### Scope and usage
The Danish Core Practitioner profile is intended to encapsulate the most common and basic data model of practitioners in Danish healthcare systems covering both primary sector, secondary sector (medical specialists ([DA] speciallæger) and hospitals) and municipality cases. As such the profile should be usable in most Danish contexts. Practitioner is broadly defined (just as it is in the original FHIR ressource), and may be used to define all the professionals involvel directly or indirectly in citizen and patient care.

Be especially aware that the Practitioner profile is only used for describing persons and their qualifications, independent of their current or previous professional roles. Use the international PractitionerRole ressource, if roles of a practitioner needs to be described. This also means that Practitioners are not classified as "Chief Physician" or other titles that denotes their position. The profile is simple and focuses on personal qualifications.

The qualification.code has an extendable ValueSet that includes all official authorizations as defined by [https://www.retsinformation.dk/eli/lta/2019/731](https://www.retsinformation.dk/eli/lta/2019/731), and derived from [http://autregwebservice.sst.dk/autregservice.asmx/GetAllProfessionGroups](http://autregwebservice.sst.dk/autregservice.asmx/GetAllProfessionGroups). In the original set, Code (5176) was not uniqe, and have been converted to 5176a and 5176b respectively. However, the official codes should not limit the use of the practioner profile.
E.g. if you need to represent another professional group e.g. social worker OR if you need to represent a qualification, important for a local context e.g. that someone has completed advanced pressure ulcer care training you have different options. You may for example extend the valueSet, add the qualification as plain text, slice the qualification attribute or choose not to represent the qualification.

---

// File: input/pagecontent/StructureDefinition-dk-core-related-person-intro.md

### Scope and usage
The Danish Core Related Person profile is intended to encapsulate the most common and basic data model of persons related to patients/persons in Danish healthcare systems covering both primary sector, secondary sector (specialty doctors and hospitals) and municipality cases. As such the profile should be usable in most Danish contexts. Note that the profile is usable for related persons to those that receive health and social care in municipalities, even in contexts where receivers of care are more commonly known as citizens ([DA] borgere).

Note, that professional relationships between a patient and a healthcare professional are expressed by other means e.g. through `Patient.generalPractitioner`.   

Note also, that the intended use of Related Person is to describe a relationship, where privileges which might be associated to the relationship should be expressed by other means, e.g.the actual rights associated with being power of attorney, should be described in a legally binding document, and that document can be represented with the Consent resource.

Note furthermore, that a patients primary contact when possible should be expressed through `Patient.contact`. However, when this is not feasible Related Person may be used.

### Identifiers for related persons
This related person profile currently reflects the use of the established national Danish citizen identifiers called [CPR](https://cpr.dk/) and (where relevant) the use of replacement CPR numbers ([DA] Erstatnings-CPR-numre eller eCPR).

#### CPR-identifier

The element identifier.type describes the specific purpose of an identifier. It is desired to use the code 'NNDNK' from the CodeSystem [IdentifierType](https://terminology.hl7.org/4.0.0/CodeSystem-v2-0203.html) as the type for [DkCoreCprIdentifier](https://hl7.dk/fhir/core/StructureDefinition-dk-core-cpr-identifier.html). However, it is currently not recommended to use this code, due to known problems with the validation tool when validating the code 'NNDNK'.

#### eCPR-identifier

The element RelatedPerson.identifier includes two slices to represent eCPR. Each slice includes an identifier with requirements for the specific eCPR:
* For X-eCPR, the [DkCoreXeCprIdentifier](./StructureDefinition-dk-core-x-ecpr-identifier.html) must be used, which includes an OID as system and an invariant describing the requirements for the structure of the identifier, [based on guidelines from Danish Health Data Authority](https://www.nspop.dk/pages/viewpage.action?pageId=226757583#eCPRFormater(XeCPRogDeCPR)-Formatetfornationaleerstatningspersonnumre-X-eCPR).
* For D-eCPR, the [DkCoreDeCprIdentifier](./StructureDefinition-dk-core-d-ecpr-identifier.html) must be used, which includes a ValueSet of OID's that may be used as system. The OIDs represent the D-eCPR in general and D-eCPR for each of the five regions. Further, the identifier includes an invariant describing the requirements for the structure of the identifier, [based on guidelines from Danish Health Data Authority](https://www.nspop.dk/pages/viewpage.action?pageId=226757583#eCPRFormater(XeCPRogDeCPR)-Formatetfordecentraleerstatningspersonnumre-D-eCPR).

### Relationship codes
The relationships in [DK Core Related Person Relationship Types](ValueSet-dk-core-RelatedPersonRelationshipTypes.html) are intended to cover the most common use cases within the Danish healthcare sector. For the relationship codes that are included from the general relationship codes [danish translations](CodeSystem-role-code-dk-supplement.html) are provided. In cases when other relationships need to be expressed, codes from the general [Related Person Relationship Type](http://hl7.org/fhir/R4/valueset-relatedperson-relationshiptype.html) or [HL7 Role Code System](http://terminology.hl7.org/CodeSystem/v3-RoleCode) should be used when possible. In the latter system is e.g. the code 'CCO', which is a clinical companion (DA: Servicehund).  

### Use of security label on related persons
In case an implementation project needs to support name and address protection ([Navne- og adressebeskyttelse](https://www.retsinformation.dk/eli/lta/2017/646#idee1fb7b6-c7e7-429d-a738-881c5e486fa6)) of a danish citizen, it is recommended to support this with the security label as follows:

 ```
 <RelatedPerson xmlns="http://hl7.org/fhir">
  <meta>
    <security>
      <system value="http://terminology.hl7.org/CodeSystem/v3-Confidentiality"/>
      <code value="R"/>
      <display value="Restricted"/>
    </security>
  </meta>
...  [snip] ...
</RelatedPerson>
 ```

Use of this label should be interpreted according to the law, roughly meaning that only personnel using systems in public/official affairs are allowed to see name and address for the related person/citizen.



---

// File: input/fsh/aliases.fsh

Alias: $sct = http://snomed.info/sct
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $dk-core-municipality-codes = http://hl7.dk/fhir/core/CodeSystem/dk-core-municipality-codes
Alias: $dk-core-regional-subdivision-codes = http://hl7.dk/fhir/core/CodeSystem/dk-core-regional-subdivision-codes
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $dk-marital-status = http://hl7.dk/fhir/core/CodeSystem/dk-marital-status
Alias: $DkCoreProfessionGroupCodes = http://hl7.dk/fhir/core/CodeSystem/DkCoreProfessionGroupCodes
Alias: $condition-dueTo = http://hl7.org/fhir/StructureDefinition/condition-dueTo
Alias: $condition-code = http://hl7.org/fhir/ValueSet/condition-code
Alias: $sor-organization-type = http://hl7.dk/fhir/core/ValueSet/sor-organization-type
Alias: $dk-marital-status_1 = http://hl7.dk/fhir/core/ValueSet/dk-marital-status
Alias: $ucum = http://unitsofmeasure.org
Alias: $NPU = urn:oid:1.2.208.176.2.1
Alias: $Medcom = http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-observation-codes
Alias: $SKS = urn:oid:1.2.208.176.2.4
Alias: $LOINC = http://loinc.org
Alias: $IEEEx73 = urn:iso:std:iso:11073:10101
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $observation-vitalsigns = http://hl7.org/fhir/StructureDefinition/vitalsigns
Alias: $observation-bodyweight = http://hl7.org/fhir/StructureDefinition/bodyweight
Alias: $observation-heartrate = http://hl7.org/fhir/StructureDefinition/heartrate
Alias: $observation-bp = http://hl7.org/fhir/StructureDefinition/bp
Alias: $LOINC-vitalsigns = http://hl7.org/fhir/ValueSet/observation-vitalsignresult
Alias: $v3-Confidentiality = http://terminology.hl7.org/CodeSystem/v3-Confidentiality
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode


---

// File: input/fsh/AuthorizationIdentifier.fsh

Profile: AuthorizationIdentifier
Parent: Identifier
Id: dk-core-authorization-identifier
Title: "Danish Health Professionals Authorization Identifier"
Description: "Identifier holding the official [authorization identifier](https://en.stps.dk/en/health-professionals-and-authorities/online-register-registered-health-professionals/) for a practitioner."
* system 1..
* system = "https://autregweb.sst.dk" (exactly)
* value 1..
  * obeys authorization-id-format
  * ^maxLength = 5
  
Invariant: authorization-id-format
Description: "Authorization ID consists of exactly 5 consonants and Y and or numbers in any order. See https://stps.dk/da/autorisation/om-autorisationer/autorisations-id/"
Severity: #error
Expression: "matches('^([b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z0-9]){5}$')"


---

// File: input/fsh/codeSystems.fsh

CodeSystem: DkCoreProfessionGroupCodes
Id: DkCoreProfessionGroupCodes
Title: "DK Profession Group Codes"
Description: "DK health ProfessionGroup codes as defined by https://www.retsinformation.dk/eli/lta/2019/731, and derived from http://autregwebservice.sst.dk/autregservice.asmx/GetAllProfessionGroups. Code (5176) was not uniqe, and have been converted to 5176a and 5176b"
* ^experimental = false
* ^status = #active
* ^content = #complete
* ^caseSensitive = false
* ^count = 21
* #C511 "Ambulancebehandler"
* #9495 "Bandagist"
* #B511 "Behandlerfarmaceut"
* #5159 "Bioanalytiker"
* #5153 "Ergoterapeut"
* #5155 "Fodterapeut"
* #5151 "Fysioterapeut"
* #5175 "Jordemoder"
* #5265 "Kiropraktor"
* #5451 "Klinisk diætist"
* #5432 "Klinisk tandtekniker"
* #5176a "Kontaktlinseoptiker"
* #7170 "Læge"
* #4498 "Optiker"
* #5176b "Optometrist"
* #A511 "Osteopat"
* #5158 "Radiograf"
* #5152 "Social- og sundhedsassistent"
* #5166 "Sygeplejerske"
* #5433 "Tandlæge"
* #5431 "Tandplejer"

CodeSystem: AdministrativeGenderDkSupplement
Id: administrative-gender-supplement
Title: "DK Administrative Gender Supplement"
Description: "CodeSystem supplement with danish translations for administrative gender"
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/administrative-gender"
* #male
  * ^designation.language = #da
  * ^designation.value = "Mand"
* #female
  * ^designation.language = #da
  * ^designation.value = "Kvinde"
* #other
  * ^designation.language = #da
  * ^designation.value = "Andet"
* #unknown
  * ^designation.language = #da
  * ^designation.value = "Ukendt"

CodeSystem: GreenlandMunicipalityCodes
Id: dk-core-municipality-codes-greenland
Title: "DK Greenland Municipality Codes"
Description: "Greenland municipality codes as defined by https://www.iso.org/obp/ui/#iso:code:3166:GL and https://cpr.dk/cpr-systemet/kommunesammenlaegninger-opdeling/groenland-2018/"
* ^experimental = false
* ^status = #active
* ^caseSensitive = true
* ^content = #complete
* #0955 "Kujalleq"
  * ^designation.language = #da
  * ^designation.value = "Kujalleq"
* #0956 "Sermersooq"
  * ^designation.language = #da
  * ^designation.value = "Sermersooq"
* #0957 "Qeqqata"
  * ^designation.language = #da
  * ^designation.value = "Qeqqata"
* #0959 "Qeqertalik"
  * ^designation.language = #da
  * ^designation.value = "Qeqertalik"
* #0960 "Avannaata"
  * ^designation.language = #da
  * ^designation.value = "Avannaata"

CodeSystem: MunicipalityCodes
Id: dk-core-municipality-codes
Title: "DK Municipality Codes"
Description: "Municipality codes as defined by https://danmarksadresser.dk/adressedata/kodelister/kommunekodeliste/ and https://sundhedsdatastyrelsen.dk/-/media/sds/filer/rammer-og-retningslinjer/patientregistrering/relaterede/kommuneklassifikation.pdf"
* ^experimental = false
* ^status = #active
* ^caseSensitive = true
* ^content = #complete
* #0740 "Silkeborg"
  * ^designation.language = #da
  * ^designation.value = "Silkeborg"
* #0741 "Samsø"
  * ^designation.language = #da
  * ^designation.value = "Samsø"
* #0851 "Aalborg"
  * ^designation.language = #da
  * ^designation.value = "Aalborg"
* #0746 "Skanderborg"
  * ^designation.language = #da
  * ^designation.value = "Skanderborg"
* #0151 "Ballerup"
  * ^designation.language = #da
  * ^designation.value = "Ballerup"
* #0260 "Halsnæs"
  * ^designation.language = #da
  * ^designation.value = "Halsnæs"
* #0153 "Brøndby"
  * ^designation.language = #da
  * ^designation.value = "Brøndby"
* #0370 "Næstved"
  * ^designation.language = #da
  * ^designation.value = "Næstved"
* #0155 "Dragør"
  * ^designation.language = #da
  * ^designation.value = "Dragør"
* #0480 "Nordfyns"
  * ^designation.language = #da
  * ^designation.value = "Nordfyns"
* #0157 "Gentofte"
  * ^designation.language = #da
  * ^designation.value = "Gentofte"
* #0265 "Roskilde"
  * ^designation.language = #da
  * ^designation.value = "Roskilde"
* #0159 "Gladsaxe"
  * ^designation.language = #da
  * ^designation.value = "Gladsaxe"
* #0376 "Guldborgsund"
  * ^designation.language = #da
  * ^designation.value = "Guldborgsund"
* #0269 "Solrød"
  * ^designation.language = #da
  * ^designation.value = "Solrød"
* #0482 "Langeland"
  * ^designation.language = #da
  * ^designation.value = "Langeland"
* #0201 "Allerød"
  * ^designation.language = #da
  * ^designation.value = "Allerød"
* #0420 "Assens"
  * ^designation.language = #da
  * ^designation.value = "Assens"
* #0530 "Billund"
  * ^designation.language = #da
  * ^designation.value = "Billund"
* #0316 "Holbæk"
  * ^designation.language = #da
  * ^designation.value = "Holbæk"
* #0751 "Aarhus"
  * ^designation.language = #da
  * ^designation.value = "Aarhus"
* #0860 "Hjørring"
  * ^designation.language = #da
  * ^designation.value = "Hjørring"
* #0756 "Ikast-Brande"
  * ^designation.language = #da
  * ^designation.value = "Ikast-Brande"
* #0161 "Glostrup"
  * ^designation.language = #da
  * ^designation.value = "Glostrup"
* #0270 "Gribskov"
  * ^designation.language = #da
  * ^designation.value = "Gribskov"
* #0163 "Herlev"
  * ^designation.language = #da
  * ^designation.value = "Herlev"
* #0165 "Albertslund"
  * ^designation.language = #da
  * ^designation.value = "Albertslund"
* #0167 "Hvidovre"
  * ^designation.language = #da
  * ^designation.value = "Hvidovre"
* #0492 "Ærø"
  * ^designation.language = #da
  * ^designation.value = "Ærø"
* #0169 "Høje-Taastrup"
  * ^designation.language = #da
  * ^designation.value = "Høje-Taastrup"
* #0101 "København"
  * ^designation.language = #da
  * ^designation.value = "København"
* #0210 "Fredensborg"
  * ^designation.language = #da
  * ^designation.value = "Fredensborg"
* #0320 "Faxe"
  * ^designation.language = #da
  * ^designation.value = "Faxe"
* #0430 "Faaborg-Midtfyn"
  * ^designation.language = #da
  * ^designation.value = "Faaborg-Midtfyn"
* #0540 "Sønderborg"
  * ^designation.language = #da
  * ^designation.value = "Sønderborg"
* #0217 "Helsingør"
  * ^designation.language = #da
  * ^designation.value = "Helsingør"
* #0326 "Kalundborg"
  * ^designation.language = #da
  * ^designation.value = "Kalundborg"
* #0219 "Hillerød"
  * ^designation.language = #da
  * ^designation.value = "Hillerød"
* #0760 "Ringkøbing-Skjern"
  * ^designation.language = #da
  * ^designation.value = "Ringkøbing-Skjern"
* #0329 "Ringsted"
  * ^designation.language = #da
  * ^designation.value = "Ringsted"
* #0657 "Herning"
  * ^designation.language = #da
  * ^designation.value = "Herning"
* #0766 "Hedensted"
  * ^designation.language = #da
  * ^designation.value = "Hedensted"
* #0173 "Lyngby-Taarbæk"
  * ^designation.language = #da
  * ^designation.value = "Lyngby-Taarbæk"
* #0390 "Vordingborg"
  * ^designation.language = #da
  * ^designation.value = "Vordingborg"
* #0175 "Rødovre"
  * ^designation.language = #da
  * ^designation.value = "Rødovre"
* #0810 "Brønderslev"
  * ^designation.language = #da
  * ^designation.value = "Brønderslev"
* #0813 "Frederikshavn"
  * ^designation.language = #da
  * ^designation.value = "Frederikshavn"
* #0706 "Syddjurs"
  * ^designation.language = #da
  * ^designation.value = "Syddjurs"
* #0707 "Norddjurs"
  * ^designation.language = #da
  * ^designation.value = "Norddjurs"
* #0330 "Slagelse"
  * ^designation.language = #da
  * ^designation.value = "Slagelse"
* #0223 "Hørsholm"
  * ^designation.language = #da
  * ^designation.value = "Hørsholm"
* #0440 "Kerteminde"
  * ^designation.language = #da
  * ^designation.value = "Kerteminde"
* #0550 "Tønder"
  * ^designation.language = #da
  * ^designation.value = "Tønder"
* #0336 "Stevns"
  * ^designation.language = #da
  * ^designation.value = "Stevns"
* #0661 "Holstebro"
  * ^designation.language = #da
  * ^designation.value = "Holstebro"
* #0665 "Lemvig"
  * ^designation.language = #da
  * ^designation.value = "Lemvig"
* #0773 "Morsø"
  * ^designation.language = #da
  * ^designation.value = "Morsø"
* #0779 "Skive"
  * ^designation.language = #da
  * ^designation.value = "Skive"
* #0183 "Ishøj"
  * ^designation.language = #da
  * ^designation.value = "Ishøj"
* #0185 "Tårnby"
  * ^designation.language = #da
  * ^designation.value = "Tårnby"
* #0710 "Favrskov"
  * ^designation.language = #da
  * ^designation.value = "Favrskov"
* #0187 "Vallensbæk"
  * ^designation.language = #da
  * ^designation.value = "Vallensbæk"
* #0820 "Vesthimmerland"
  * ^designation.language = #da
  * ^designation.value = "Vesthimmerland"
* #0607 "Fredericia"
  * ^designation.language = #da
  * ^designation.value = "Fredericia"
* #0825 "Læsø"
  * ^designation.language = #da
  * ^designation.value = "Læsø"
* #0230 "Rudersdal"
  * ^designation.language = #da
  * ^designation.value = "Rudersdal"
* #0340 "Sorø"
  * ^designation.language = #da
  * ^designation.value = "Sorø"
* #0450 "Nyborg"
  * ^designation.language = #da
  * ^designation.value = "Nyborg"
* #0561 "Esbjerg"
  * ^designation.language = #da
  * ^designation.value = "Esbjerg"
* #0563 "Fanø"
  * ^designation.language = #da
  * ^designation.value = "Fanø"
* #0671 "Struer"
  * ^designation.language = #da
  * ^designation.value = "Struer"
* #0190 "Furesø"
  * ^designation.language = #da
  * ^designation.value = "Furesø"
* #0787 "Thisted"
  * ^designation.language = #da
  * ^designation.value = "Thisted"
* #0615 "Horsens"
  * ^designation.language = #da
  * ^designation.value = "Horsens"
* #0727 "Odder"
  * ^designation.language = #da
  * ^designation.value = "Odder"
* #0240 "Egedal"
  * ^designation.language = #da
  * ^designation.value = "Egedal"
* #0350 "Lejre"
  * ^designation.language = #da
  * ^designation.value = "Lejre"
* #0461 "Odense"
  * ^designation.language = #da
  * ^designation.value = "Odense"
* #0573 "Varde"
  * ^designation.language = #da
  * ^designation.value = "Varde"
* #0575 "Vejen"
  * ^designation.language = #da
  * ^designation.value = "Vejen"
* #0791 "Viborg"
  * ^designation.language = #da
  * ^designation.value = "Viborg"
* #0400 "Bornholm"
  * ^designation.language = #da
  * ^designation.value = "Bornholm"
* #0510 "Haderslev"
  * ^designation.language = #da
  * ^designation.value = "Haderslev"
* #0621 "Kolding"
  * ^designation.language = #da
  * ^designation.value = "Kolding"
* #0730 "Randers"
  * ^designation.language = #da
  * ^designation.value = "Randers"
* #0840 "Rebild"
  * ^designation.language = #da
  * ^designation.value = "Rebild"
* #0846 "Mariagerfjord"
  * ^designation.language = #da
  * ^designation.value = "Mariagerfjord"
* #0250 "Frederikssund"
  * ^designation.language = #da
  * ^designation.value = "Frederikssund"
* #0360 "Lolland"
  * ^designation.language = #da
  * ^designation.value = "Lolland"
* #0253 "Greve"
  * ^designation.language = #da
  * ^designation.value = "Greve"
* #0849 "Jammerbugt"
  * ^designation.language = #da
  * ^designation.value = "Jammerbugt"
* #0147 "Frederiksberg"
  * ^designation.language = #da
  * ^designation.value = "Frederiksberg"
* #0580 "Aabenraa"
  * ^designation.language = #da
  * ^designation.value = "Aabenraa"
* #0259 "Køge"
  * ^designation.language = #da
  * ^designation.value = "Køge"
* #0479 "Svendborg"
  * ^designation.language = #da
  * ^designation.value = "Svendborg"
* #0410 "Middelfart"
  * ^designation.language = #da
  * ^designation.value = "Middelfart"
* #0411 "Christiansø"
  * ^designation.language = #da
  * ^designation.value = "Christiansø"
* #0306 "Odsherred"
  * ^designation.language = #da
  * ^designation.value = "Odsherred"
* #0630 "Vejle"
  * ^designation.language = #da
  * ^designation.value = "Vejle"

CodeSystem: DKCoreRegionalSubdivisionCodes
Title: "DK Regional Subdivision Codes"
Id: dk-core-regional-subdivision-codes
Description: "Subdivision codes (Regional codes) used in Denmark as found on https://www.iso.org/obp/ui/#iso:code:3166:DK"
* ^experimental = false
* ^caseSensitive = false
* ^content = #complete
* #DK-84 "Capital Region of Denmark"
  * ^designation.language = #da
  * ^designation.value = "Hovedstaden"
* #DK-82 "Central Denmark Region"
  * ^designation.language = #da
  * ^designation.value = "Midtjylland"
* #DK-81 "Nord Denmark Region"
  * ^designation.language = #da
  * ^designation.value = "Nordjylland"
* #DK-85 "Region Zealand"
  * ^designation.language = #da
  * ^designation.value = "Sjælland"
* #DK-83 "Region of Southern Denmark"
  * ^designation.language = #da
  * ^designation.value = "Syddanmark"

CodeSystem: DK_Marital_Status_Codes
Id: dk-marital-status
Title: "DK Marital Statuses"
Description: "DK marital statuses"
* ^experimental = false
* ^url = "http://hl7.dk/fhir/core/CodeSystem/dk-marital-status"
* ^name = "DkMaritalStatus"
* ^caseSensitive = false
* ^status = #active
* ^content = #complete
* #P "Registered partnership"
  * ^designation.language = #da
  * ^designation.value = "Registreret partnerskab"
* #O "Dissolved partnership"
  * ^designation.language = #da
  * ^designation.value = "Ophævet partnerskab"

CodeSystem: AddressType
Id: address-type-dk-supplement
Title: "DK Address Type"
Description: "The type of an address (physical / postal)"
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/address-type"
* #postal
  * ^designation.language = #da
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Post"
* #physical
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Fysisk"
* #both
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Post & fysisk"

CodeSystem: AddressUse
Id: address-use-dk-supplement
Title: "DK Address Use"
Description: "The use of an address"
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/address-use"
* #home
  * ^designation.language = #da
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Hjem"
* #work
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Arbejde"
* #temp
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Midlertidig"
* #old
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Gammel / forkert"

CodeSystem: CareTeamStatus
Title: "DK CareTeam Status"
Id: care-team-status-dk-supplement
Description: "Indicates the status of the care team."
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/care-team-status"
* #proposed
  * ^designation.language = #da
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Forslag"
* #active
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Aktiv"
* #suspended
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Suspenderet"
* #inactive
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Inaktiv"
* #entered-in-error
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Fejlindtastning"

CodeSystem: ConsentState
Title: "DK Consent State"
Id: consent-state-codes-dk-supplement
Description: "Indicates the state of the consent"
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/consent-state-codes"
* #draft
  * ^designation.language = #da
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Under udarbejdelse"
* #proposed
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Forslag"
* #active
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Aktiv"
* #rejected
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Afvist"
* #inactive
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Inaktiv"
* #entered-in-error
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Fejlindtastning"

CodeSystem: DaysOfWeek
Title: "DK Days Of Week"
Id: days-of-week-dk-supplement
Description: "The days of the week."
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/days-of-week"
* #mon
  * ^designation.language = #da
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Mandag"
* #tue
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Tirsdag"
* #wed
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Onsdag"
* #thu
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Torsdag"
* #fri
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Fredag"
* #sat
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Lørdag"
* #sun
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Søndag"

CodeSystem: EpisodeOfCareStatus
Title: "DK Episode Of Care Status"
Id: episode-of-care-status-dk-supplement
Description: "The status of the episode of care."
* ^experimental = false
* ^publisher = "HL7 DK"
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/episode-of-care-status"
* #planned
  * ^designation.language = #da
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Planlagt"
* #waitlist
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Venteliste"
* #active
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Aktiv"
* #onhold
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Pauseret"
* #finished
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Færdig"
* #cancelled
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Annulleret"
* #entered-in-error
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Fejlindtastning"

CodeSystem: PublicationStatus
Id: publication-status-dk-supplement
Description: "The lifecycle status of a Value Set or Concept Map."
Title: "DK Publication Status"
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/publication-status"
* #draft
  * ^designation[0].language = #ru
  * ^designation[=].value = "черновик"
  * ^designation[+].language = #nl
  * ^designation[=].value = "ontwerp"
  * ^designation[+].language = #da
  * ^designation[=].use = $sct#900000000000013009
  * ^designation[=].value = "Udkast"
* #active
  * ^designation[0].language = #ru
  * ^designation[=].value = "активный"
  * ^designation[+].language = #nl
  * ^designation[=].value = "actief"
  * ^designation[+].language = #da
  * ^designation[=].use.system = "http://snomed.info/sct"
  * ^designation[=].use = $sct#900000000000013009
  * ^designation[=].value = "Aktiv"
* #retired
  * ^designation[0].language = #ru
  * ^designation[=].value = "удалён"
  * ^designation[+].language = #nl
  * ^designation[=].value = "verouderd"
  * ^designation[+].language = #da
  * ^designation[=].use.system = "http://snomed.info/sct"
  * ^designation[=].use = $sct#900000000000013009
  * ^designation[=].value = "Udgået"
* #unknown
  * ^designation[0].language = #da
  * ^designation[=].use = $sct#900000000000013009
  * ^designation[=].value = "Ukendt"

CodeSystem: RequestStatus
Id: request-status-dk-supplement
Description: "Codes identifying the stage lifecycle stage of a request"
Title: "DK Request Status"
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://hl7.org/fhir/request-status"
* #draft
  * ^designation.language = #da
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Udkast"
* #active
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Aktiv"
* #on-hold
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Suspenderet"
* #revoked
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Annulleret"
* #completed
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Afsluttet"
* #entered-in-error
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Fejlindtastning"
* #unknown
  * ^designation.language = #da
  * ^designation.use.system = "http://snomed.info/sct"
  * ^designation.use = $sct#900000000000013009
  * ^designation.value = "Ukendt"


CodeSystem: DkCoreDeCPRCodes
Id: dk-core-d-ecpr-codes
Title: "DK Decentralised eCPR Systems"
Description: "DK "
* ^experimental = false
* ^status = #active
* ^content = #complete
* ^caseSensitive = false
* #urn:oid:1.2.208.176.1.6.1.3 "D-eCPR"
* #urn:oid:1.2.208.176.1.6.1.3.177 "D-eCPR fra Region Sjælland"
* #urn:oid:1.2.208.176.1.6.1.3.179 "D-eCPR fra Region Nordjylland"
* #urn:oid:1.2.208.176.1.6.1.3.181 "D-eCPR fra Region Midtjylland"
* #urn:oid:1.2.208.176.1.6.1.3.183 "D-eCPR fra Region Syddanmark"
* #urn:oid:1.2.208.176.1.6.1.3.187 "D-eCPR fra Region Hovedstaden"

CodeSystem: RoleCodeDkSupplement
Id: role-code-dk-supplement
Description: "CodeSystem supplement with danish translations for RoleCode"
Title: "DK Role Code"
* ^experimental = false
* ^content = #supplement
* ^supplements = "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
* #FAMMEMB
  * ^designation.language = #da
  * ^designation.value = "Familiemedlem"
* #CHILD
  * ^designation.language = #da
  * ^designation.value = "Barn"
* #DAUC
  * ^designation.language = #da
  * ^designation.value = "Datter"
* #SONC
  * ^designation.language = #da
  * ^designation.value = "Søn"
* #GRNDCHILD
  * ^designation.language = #da
  * ^designation.value = "Barnebarn"
* #CHLDINLAW
  * ^designation.language = #da
  * ^designation.value = "Svigerbarn"
* #PRN
  * ^designation.language = #da
  * ^designation.value = "Forælder"
* #FTH
  * ^designation.language = #da
  * ^designation.value = "Far"
* #MTH
  * ^designation.language = #da
  * ^designation.value = "Mor"
* #SIB
  * ^designation.language = #da
  * ^designation.value = "Søskende"
* #DOMPART
  * ^designation.language = #da
  * ^designation.value = "Registreret partner"
* #SPS
  * ^designation.language = #da
  * ^designation.value = "Ægtefælle"
* #FRND
  * ^designation.language = #da
  * ^designation.value = "Ven (ikke-beslægtet)"
* #NBOR
  * ^designation.language = #da
  * ^designation.value = "Nabo"
* #ROOM
  * ^designation.language = #da
  * ^designation.value = "Samboende"
* #GUARD
  * ^designation.language = #da
  * ^designation.value = "Værge"
* #NOK
  * ^designation.language = #da
  * ^designation.value = "Pårørende"
* #POWATT
  * ^designation.language = #da
  * ^designation.value = "Fuldmagtshaver"
* #ECON
  * ^designation.language = #da
  * ^designation.value = "Primær kontakt"

CodeSystem: DkRelatedPersonRelationshipCodes
Id: dk-relatedperson-relationshipcodes
Title: "DK Related Person Relationship Codes"
Description: "DK Related Person Relationship Codes"
* ^experimental = false
* ^url = "http://hl7.dk/fhir/core/CodeSystem/dk-relatedperson-relationshipcodes"
* ^name = "DkRelatedPersonRelationshipCodes"
* ^caseSensitive = false
* ^status = #active
* ^content = #complete
* #PARAUTH "Parental authority"
  * ^definition = "The player of the role holds parental authority over the scoping person."
  * ^designation.language = #da
  * ^designation.value = "Forældremyndighedsindehaver"
* #PRICARE "Primary caretaker"
  * ^definition = "The player of the role is the primary caretaker of the scoping person."
  * ^designation.language = #da
  * ^designation.value = "Primær omsorgsperson"
* #PROCON "Professional contact" 
  * ^definition = "A professional acting as a contact of the scoping person."
  * ^designation.language = #da
  * ^designation.value = "Professionel kontakt"

---

// File: input/fsh/CVRIdentifier.fsh

Profile: CVRIdentifier
Parent: Identifier
Id: dk-core-cvr-identifier
Title: "Danish Central Business Register (CVR) Identifier"
Description: "Identifier holding a danish [CVR](https://datacvr.virk.dk/data/) number."
* use = #official (exactly)
* system 1..
* system = "http://cvr.dk" (exactly)
* value 1..
  * obeys CVR-length and CVR-modulus-11

Invariant: CVR-length
Description: "CVR must be exactly 8 numeric characters long"
Severity: #error
Expression: "matches('^[0-9]{8}$')"

Invariant: CVR-modulus-11
Description: "CVR must pass the modulus 11 check"
Severity: #error
Expression: "((\n    (substring(0,1).toInteger()*2)+\n    (substring(1,1).toInteger()*7)+\n    (substring(2,1).toInteger()*6)+\n    (substring(3,1).toInteger()*5)+\n    (substring(4,1).toInteger()*4)+\n    (substring(5,1).toInteger()*3)+\n    (substring(6,1).toInteger()*2)+\n    (substring(7,1).toInteger()*1)) mod(11)=0)"

---

// File: input/fsh/DkCoreBasicParameter.fsh

Profile: DkCoreBasicObservation
Parent: dk-core-observation
Id: dk-core-basic-observation
Title: "Danish Core Basic Observation Profile"
Description: "HL7 Denmark core profile for basic observations, which is a profiling of DkCoreObservation."
* category 1..1
* category = $observation-category#vital-signs
* code.coding[LOINC] 1..
* code.coding[LOINC] from LoincBasicObservation (extensible)
* code.coding[SNOMEDCT] from SCTBasicObservation (extensible)
* code.coding[NPU] from NPUBasicObservation (extensible)
* code.coding[IEEE] from IEEEBasicObservation (extensible)
* valueQuantity.system from UCUMBasicUnits (extensible)
* component.valueQuantity.system from UCUMBasicUnits (extensible)



Instance: ObservationRespiratoryBasicObservation
InstanceOf: DkCoreBasicObservation
Title: "John's Respiratory rate measurement (Basic observation)"
Description: "A simple basic observation of a hyperventilating patient"
Usage: #example
* category = $observation-category#vital-signs
* status = #final
* code.coding[LOINC] = $LOINC#9279-1 "Respiratory rate"
* valueQuantity.value = 50
* valueQuantity.code = #/min
* valueQuantity.system = $ucum
* valueQuantity.unit = "/min"
* effectiveDateTime = 2023-11-20T18:00:00+01:00
* subject = Reference(john)
* performer = Reference(AbrahamLaege)

Instance: ObservationOxySatBasicObservationOrg
InstanceOf: DkCoreBasicObservation
Title: "John's oxygen saturation measurement (Basic observation)"
Usage: #example
* category = $observation-category#vital-signs
* status = #final
* code.coding[LOINC] = $LOINC#2708-6 "Oxygen saturation in Arterial blood"
* code.coding[IEEE] = $IEEEx73#150456 "MDC_PULS_OXIM_SAT_O2"
* valueQuantity.value = 97.0
* valueQuantity.code = #%
* valueQuantity.system = $ucum
* valueQuantity.unit = "%"
* effectiveDateTime = 2023-11-01T12:00:00+01:00
* subject = Reference(john)
* performer = Reference(AbrahamLaege)

Instance: ObservationOxySatObservation
InstanceOf: DkCoreObservation
Title: "John's oxygen saturation measurement (Observation)"
Description: """
This example suggests a way to handle the oxygen saturation case, where the original measurement
was reported in '%' by a device or typed in manually, and then 'translated' to the NPU system,
which requires the value to be unitless.
"""
Usage: #example
* category = $observation-category#vital-signs
* status = #final
* code.coding[NPU] = $NPU#NPU27280 "Hb(Fe; O₂-bind.;aB)—Oxygen(O₂); sat.(Pulse oximetry) = ?"
* valueQuantity.value = 0.97
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* subject = Reference(john)
* performer = Reference(AbrahamLaege)
* effectiveDateTime = 2023-11-01T12:00:00+01:00
* contained[0] = ObservationOxySatBasicObservationOrg
* derivedFrom = Reference(ObservationOxySatBasicObservationOrg)


/* **************
 *
 * TOBS example
 *
 * ************** */

Instance: ElseConsciousness
InstanceOf: DkCoreObservation
Usage: #example
* status = #final
* code = $sct#6942003
* subject = Reference(else)
* valueCodeableConcept.coding[+] = $sct#450847001
* method = $sct#733985002 "Reported (qualifier value)"
* effectiveDateTime = "2023-09-12T17:45:00.000Z"
* performer = Reference(SidselSygeplejerske)

Instance: ElseBloodPressure
InstanceOf: DkCoreBasicObservation
Usage: #example
* status = #final
* category = $observation-category#vital-signs
* code.coding[SNOMEDCT] = $sct#75367002
* code.coding[LOINC] = $LOINC#85354-9
* subject = Reference(else)
* component[0].code.coding[LOINC] = $LOINC#8480-6
* component[=].code.coding[SNOMEDCT] = $sct#407554009
* component[=].valueQuantity = 147 'mm[Hg]' "mmHg"
* component[+].code.coding[LOINC] = $LOINC#8462-4
* component[=].code.coding[SNOMEDCT] = $sct#407555005
* component[=].valueQuantity = 95 'mm[Hg]' "mmHg"
* method = $sct#272391002 "Measurement technique (qualifier value)"
* effectiveDateTime = "2023-09-12T17:45:00.000Z"
* performer = Reference(SidselSygeplejerske)


Instance: ElseBodyTemperature
InstanceOf: DkCoreBasicObservation
Usage: #example
* status = #final
* category = $observation-category#vital-signs
* code.coding[SNOMEDCT] = $sct#276885007
* code.coding[LOINC] = $LOINC#8310-5
* subject = Reference(else)
* method = $sct#272391002 "Measurement technique (qualifier value)"
* effectiveDateTime = "2023-09-12T17:45:00.000Z"
* valueQuantity = 38.7 'Cel' "grader celcius"
* performer = Reference(SidselSygeplejerske)

Instance: ElseHeartRate
InstanceOf: DkCoreBasicObservation
Usage: #example
* status = #final
* category = $observation-category#vital-signs
* code.coding[SNOMEDCT] = $sct#364075005
* code.coding[LOINC] = $LOINC#8867-4
* subject = Reference(else)
* method = $sct#272391002 "Measurement technique (qualifier value)"
* effectiveDateTime = "2023-09-12T17:45:00.000Z"
* valueQuantity = 92 '/min' "slag/minut"
* performer = Reference(SidselSygeplejerske)

Instance: ElseRespirationRate
InstanceOf: DkCoreBasicObservation
Usage: #example
* status = #final
* category = $observation-category#vital-signs
* code.coding[SNOMEDCT] = $sct#86290005
* code.coding[LOINC] = $LOINC#9279-1
* subject = Reference(else)
* method = $sct#272391002 "Measurement technique (qualifier value)"
* effectiveDateTime = "2023-09-12T17:45:00.000Z"
* valueQuantity = 19 '/min' "/min"
* performer = Reference(SidselSygeplejerske)

Instance: ElsesTOBSscore
InstanceOf: DkCoreObservation
Usage: #example
* status = #final
* code.coding = $Medcom#MCS88125 "Pt—Tidlig Opsporing af Begyndende Sygdom (TOBS) score; antal (værdi 0-15) = ?"
* subject = Reference(else)
* effectiveDateTime = "2023-09-12T17:45:00.000Z"
* valueQuantity.value = 3
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* performer = Reference(SidselSygeplejerske)


Instance: ElsesTOBS
InstanceOf: Bundle
Title: "Else's TOBS measurements"
Description: "An example of TOBS (Danish: Tidlig opsporing af begyndende sygdom), which includes level of consciousness, heart rate, respiration rate, blood pressure and temperature."
Usage: #example
* type = #collection
* timestamp = "2023-09-12T17:45:00.000Z"
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Patient/else"
* entry[=].resource = else
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/ElseConsciousness"
* entry[=].resource = ElseConsciousness
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/ElseBloodPressure"
* entry[=].resource = ElseBloodPressure
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/ElseBodyTemperature"
* entry[=].resource = ElseBodyTemperature
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/ElseHeartRate"
* entry[=].resource = ElseHeartRate
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/ElseRespirationRate"
* entry[=].resource = ElseRespirationRate
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/ElsesTOBSscore"
* entry[=].resource = ElsesTOBSscore
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Practitioner/SidselSygeplejerske"
* entry[=].resource = SidselSygeplejerske

/* **************
*
* TOKS eksempel inkl. GCS
*
* ************** */

Instance: MaxConsciousness
InstanceOf: DkCoreObservation
Usage: #example
* status = #final
* category = $observation-category#vital-signs
* code.coding[0] = $sct#6942003
* code.coding[LOINC] = $LOINC#80288-4
* subject = Reference(Max)
* valueCodeableConcept.coding = $sct#450847001
* method = $sct#733985002 "Reported (qualifier value)"
* effectiveDateTime = "2023-08-08T13:30:00.000Z"

Instance: MaxRespirationRate
InstanceOf: DkCoreBasicObservation
Usage: #example
* status = #final
* code.coding[SNOMEDCT] = $sct#86290005
* code.coding[LOINC] = $LOINC#9279-1
* subject = Reference(Max)
* method = $sct#272391002 "Measurement technique (qualifier value)"
* effectiveDateTime = "2023-08-08T13:30:00.000Z"
* valueQuantity = 13 '/min' "/min"

Instance: MaxHeartRate
InstanceOf: DkCoreBasicObservation
Usage: #example
* status = #final
* category = $observation-category#vital-signs
* code.coding[SKS] = $SKS#ZZ3140
* code.coding[LOINC] = $LOINC#8867-4
* subject = Reference(Max)
* effectiveDateTime = "2023-08-08T13:30:00.000Z"
* method = $sct#272391002 "Measurement technique (qualifier value)"
* valueQuantity = 68 '/min' "slag/minut"

Instance: MaxBodyTemperature
InstanceOf: DkCoreBasicObservation
Usage: #example
* status = #final
* category = $observation-category#vital-signs
* code.coding[SKS] = $SKS#ZZ0253
* code.coding[LOINC] = $LOINC#8310-5
* subject = Reference(Max)
* effectiveDateTime = "2023-08-08T13:30:00.000Z"
* method = $sct#272391002 "Measurement technique (qualifier value)"
* valueQuantity = 37 'Cel' "grader celcius"

Instance: MaxBloodPressure
InstanceOf: DkCoreBasicObservation
Usage: #example
* status = #final
* category = $observation-category#vital-signs
* code.coding[SKS] = $SKS#ZZ3160
* code.coding[LOINC] = $LOINC#85354-9
* subject = Reference(Max)
* effectiveDateTime = "2023-08-08T13:30:00.000Z"
* method = $sct#272391002 "Measurement technique (qualifier value)"
* component[0].code.coding[0] = $LOINC#8480-6
* component[=].code.coding[+] = $sct#407554009
* component[=].valueQuantity = 156 'mm[Hg]' "mmHg"
* component[+].code.coding[0] = $LOINC#8462-4
* component[=].code.coding[+] = $sct#407555005
* component[=].valueQuantity = 78 'mm[Hg]' "mmHg"

Instance: MaxSaturation
InstanceOf: DkCoreBasicObservation
Usage: #example
* category = $observation-category#vital-signs
* status = #final
* code.coding[LOINC] = $LOINC#2708-6 "Oxygen saturation in Arterial blood"
* valueQuantity = 99.0 '%' "%"
* subject = Reference(Max)
* effectiveDateTime = "2023-08-08T13:30:00.000Z"
* method = $sct#272391002 "Measurement technique (qualifier value)"

Instance: MaxGlasgowComaScale
InstanceOf: DkCoreObservation
Usage: #example
* status = #final
* code.coding[LOINC] = $LOINC#9269-2
* code.coding[+] = $sct#248241002
* subject = Reference(Max)
* valueQuantity = 13 '{score}'
* referenceRange[0].high = 8 '{score}'
* referenceRange[=].type.text = "Severe TBI"
* referenceRange[+].low = 9 '{score}'
* referenceRange[=].high = 12 '{score}'
* referenceRange[=].type.text = "Moderate TBI"
* referenceRange[+].low = 13 '{score}'
* referenceRange[=].type.text = "Mild TBI"
* effectiveDateTime = "2023-08-08T13:30:00.000Z"
* component[0].code = $LOINC#9268-4 "Glasgow coma score motor"
* component[=].valueCodeableConcept.coding = $LOINC#LA6566-9 "Localizing pain"
* component[+].code = $LOINC#9270-0 "Glasgow coma score verbal"
* component[=].valueCodeableConcept.coding = $LOINC#LA6560-2 "Confused"
* component[+].code = $LOINC#9267-6 "Glasgow coma score eye opening"
* component[=].valueCodeableConcept.coding = $LOINC#LA6556-0 "Eyes open spontaneously"


Instance: MaxTOKS
InstanceOf: Bundle
Title: "Max TOKS measurements, including Glasgow Coma Scale assesment"
Description: "An example of TOBS (Danish: Tidlig opsporing af begyndende sygdom), which includes level of consciousness, heart rate, respiration rate, blood pressure and temperature."
Usage: #example
* type = #collection
* timestamp = "2023-08-08T13:30:00.000Z"
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Patient/Max"
* entry[=].resource = Max
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/MaxConsciousness"
* entry[=].resource = MaxConsciousness
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/MaxBloodPressure"
* entry[=].resource = MaxBloodPressure
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/MaxBodyTemperature"
* entry[=].resource = MaxBodyTemperature
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/MaxHeartRate"
* entry[=].resource = MaxHeartRate
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/MaxRespirationRate"
* entry[=].resource = MaxRespirationRate
* entry[+].fullUrl = "http://hl7.dk/fhir/core/Observation/MaxGlasgowComaScale"
* entry[=].resource = MaxGlasgowComaScale

/* **************
*
* Vital signs panel
*
* ************** */

Instance: MaxVitalSignsPanel
InstanceOf: DkCoreBasicObservation
Usage: #example
* category = $observation-category#vital-signs
* status = #final
* code.coding[LOINC] = $LOINC#85353-1 "Vital signs, weight, height, head circumference, oxygen saturation and BMI panel"
* subject = Reference(Max)
* effectiveDateTime = "2023-08-08T13:30:00.000Z"
* hasMember[+] = Reference(MaxBloodPressure)
* hasMember[+] = Reference(MaxRespirationRate)
* hasMember[+] = Reference(MaxHeartRate)
* hasMember[+] = Reference(MaxBodyTemperature)

---

// File: input/fsh/DkCoreCondition.fsh

Profile: DkCoreCondition
Parent: Condition
Id: dk-core-condition
Title: "Danish Core Condition Profile"
Description: "HL7 Denmark core profile for professionally asserted conditions, as specified by danish health and social care organizations"
* ^status = #active
* extension contains
    $condition-dueTo named dueTo 0..1 and
    ConditionLastAssertedDate named conditionLastAssertedDate 0..1 and
    NotFollowedAnymore named notFollowedAnymore 0..1
* extension[conditionLastAssertedDate] ^short = "Last date a condition was confirmed valid in its current state"
* extension[notFollowedAnymore] ^short = "Date where a condition lost focus in a specific clinical context"
* code.coding ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "system"
  * ^slicing.rules = #open
  * ^slicing.ordered = false
  * ^slicing.description = "Slice based on the code.system value which allow different code-systems to represent a condition"
  * ^short = "Condition code, [DA] tilstandskode"
* code.coding contains
    FSIIIConditionCode 0..1 and
    SCTConditionCode 0..1 and
    FFBConditionCode 0..1 and
    SKS-D 0..1 and
    ICPC2code 0..1
* code.coding[FSIIIConditionCode] ^short = "[DA] FSIII tilstandskode"
  * system 1..
  * system = "urn:oid:1.2.208.176.2.21"
* code.coding[SCTConditionCode] from $condition-code (required)
  * ^short = "SNOMED CT condition code"
  * system 1..
  * system = "http://snomed.info/sct"
* code.coding[FFBConditionCode] ^short = "[DA] FFB undertemakode"
  * system 1..
  * system = "urn:oid:1.2.208.176.2.22"
* code.coding[SKS-D] ^short = "[DA] Kode fra D-hierarkiet i SKS"
  * system 1..
  * system = "urn:oid:1.2.208.176.2.4.12"
* code.coding[ICPC2code] ^short = "ICPC2 code"
  * system 1..
  * system = "urn:oid:1.2.208.176.2.31"
* subject only Reference(DkCorePatient)
* recorder only Reference(DkCorePractitioner or PractitionerRole or DkCorePatient or DkCoreRelatedPerson)
* asserter only Reference(DkCorePractitioner or PractitionerRole)

Instance: ConditionPressureUlcer
InstanceOf: DkCoreCondition
Title: "John tryksår"
Description: "John, tryksår, kommunal tilstand"
Usage: #example
* code.coding[0] = urn:oid:1.2.208.176.2.21#I4.4 "Problemer med tryksår"
* code.coding[+] = $sct#1163220007 "Pressure injury stage II"
* code.text = "Tryksår i stadium 2, siddende på venstre lår. 4cmx5cm, dybde 3mm, ingen infektion."
* extension.url = "http://hl7.dk/fhir/core/StructureDefinition/ConditionLastAssertedDate"
* extension.valueDateTime = "2020-12-12"
* clinicalStatus = $condition-clinical#active
* category = $condition-category#problem-list-item
* subject.reference = "Patient/john"
* recordedDate = "2020-06-05"

Instance: ElseGraviditet
InstanceOf: DkCoreCondition
Title: "Else Graviditet"
Description: "Else Graviditet, tilstandskode som indberettes ifm Elses ambulante forløb (fx jordemoder), og ved eventuel indlæggelse i graviditeten"
Usage: #example
* code = urn:oid:1.2.208.176.2.4.12#DZ340 "Graviditet, førstegangsfødende"
* subject.reference = "Patient/else"
* category = $condition-category#encounter-diagnosis
* recordedDate = "2021-07-03"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed

Instance: JohnDiabetes
InstanceOf: DkCoreCondition
Title: "John diabetes"
Description: "Johns diabetes-diagnose, udskrivningsdiagnose fra hospitalet fx til brug i indberetning og epikrise"
Usage: #example
* code = urn:oid:1.2.208.176.2.4.12#DE11 "Type 2-diabetes"
* subject.reference = "Patient/john"
* asserter.reference = "Practitioner/AbrahamLaege"
* recorder.reference = "Practitioner/AbrahamLaege"
* category = $condition-category#encounter-diagnosis
* onsetDateTime = "2020-02-20"
* recordedDate = "2020-03-15"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed

Instance: JohnFracture
InstanceOf: DkCoreCondition
Title: "John fraktur"
Description: "Johns fraktur-diagnose, udskrivningsdiagnose fra hospitalet med tillægskode"
Usage: #example
* code.coding[SKS-D] = urn:oid:1.2.208.176.2.4.12#DS721+TUL1 "Pertrokantær femurfraktur, højresidig"
* subject.reference = "Patient/john"
* asserter.reference = "Practitioner/AbrahamLaege"
* recorder.reference = "Practitioner/AbrahamLaege"
* category = $condition-category#encounter-diagnosis
* onsetDateTime = "2022-04-26"
* recordedDate = "2022-04-27"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed


Instance: JohnMelanoma
InstanceOf: DkCoreCondition
Title: "John mistanke om Modermærkekræft"
Description: "Johns mistanke om modermærkekræft i huden, kan fx bruges som henvisningsdiagnosese"
Usage: #example
* code = urn:oid:1.2.208.176.2.4.12#DC43 "Modermærkekræft i huden"
* subject.reference = "Patient/john"
* asserter.reference = "Practitioner/AbrahamLaege"
* recorder.reference = "Practitioner/AbrahamLaege"
* category = $condition-category#encounter-diagnosis
* recordedDate = "2021-05-01"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#unconfirmed

Instance: JohnPacemaker
InstanceOf: DkCoreCondition
Title: "John pacemaker"
Description: "Johns status efter pacemakeroperation, udtrykt semantisk korrekt med fund frem for operationskode"
Usage: #example
* code = $sct#441509002 "Cardiac pacemaker in situ"
* subject.reference = "Patient/john"
* recorder.reference = "Practitioner/AbrahamLaege"
* category = $condition-category#problem-list-item
* recordedDate = "2021-05-01"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed

---

// File: input/fsh/DkCoreCprIdentifier.fsh

Profile: DkCoreCprIdentifier
Parent: Identifier
Id: dk-core-cpr-identifier
Title: "Danish Central Person Register (CPR) Identifier"
Description: "This structure holds the danish [CPR](https://cpr.dk/) identifier"
* use = #official (exactly)
* system 1..
* system = "urn:oid:1.2.208.176.1.2" (exactly)
* value 1..
  * obeys cpr
  * ^maxLength = 10
  * ^mustSupport = false

Invariant: cpr
Description: "Requirement of danish civil registration numbers. See https://cpr.dk/cpr-systemet/opbygning-af-cpr-nummeret/#:~:text=5%20%2D%206%20position%20angiver%20personens,i%20personnummeret%20angiver%20personens%20k%C3%B8n."
Severity: #error
Expression: "matches('^((((0[1-9]|1[0-9]|2[0-9]|3[0-1])(01|03|05|07|08|10|12))|((0[1-9]|1[0-9]|2[0-9]|30)(04|06|09|11))|((0[1-9]|1[0-9]|2[0-9])(02)))[0-9]{6})$')"
* requirements = "Requirement of danish civil registration numbers"


---

// File: input/fsh/DkCoreeCprIdentifier.fsh

Profile: DkCoreXeCprIdentifier
Parent: Identifier
Id: dk-core-x-ecpr-identifier
Title: "National eCPR service, called X-eCPR"
Description: "This strucure holds the danish [X-eCPR](https://www.nspop.dk/pages/viewpage.action?pageId=226757583#eCPRFormater(XeCPRogDeCPR)-Formatetfornationaleerstatningspersonnumre-X-eCPR) identifier, maintained by the Danish Health Data Authority."
* use = #temp (exactly)
* system 1..
* system = "urn:oid:1.2.208.176.1.6.1.1" (exactly)
* value 1..
  * obeys x-ecpr
  * ^maxLength = 10
  * ^mustSupport = false

Invariant: x-ecpr
Description: "Requirement of danish X-eCPR. See https://www.nspop.dk/pages/viewpage.action?pageId=226757583#eCPRFormater(XeCPRogDeCPR)-Formatetfornationaleerstatningspersonnumre-X-eCPR"
Severity: #error
Expression: "value.matches('^((((0[1-9]|1[0-9]|2[0-9]|3[0-1])(01|03|05|07|08|10|12))|((0[1-9]|1[0-9]|2[0-9]|30)(04|06|09|11))|((0[1-9]|1[0-9]|2[0-9])(02)))([0-9]{2})((1|7){1})([A-Z]{2})([0-9]{1}))$')"

Profile: DkCoreDeCprIdentifier
Parent: Identifier
Id: dk-core-d-ecpr-identifier
Title: "Decentralised eCPR, called D-eCPR"
Description: "This strucure holds the danish [D-eCPR](https://www.nspop.dk/pages/viewpage.action?pageId=226757583#eCPRFormater(XeCPRogDeCPR)-Formatetfordecentraleerstatningspersonnumre-D-eCPR) identifier, which is often used by the Danish regions."
* use = #temp (exactly)
* system 1..
* system from DkCoreDeCPRValueSet
* value 1..
  * obeys d-ecpr
  * ^maxLength = 10
  * ^mustSupport = false

Invariant: d-ecpr
Description: "Requirement of danish D-eCPR. See https://www.nspop.dk/pages/viewpage.action?pageId=226757583#eCPRFormater(XeCPRogDeCPR)-Formatetfordecentraleerstatningspersonnumre-D-eCPR"
Severity: #error
Expression: "value.matches('^((((0[1-9]|1[0-9]|2[0-9]|3[0-1])(01|03|05|07|08|10|12))|((0[1-9]|1[0-9]|2[0-9]|30)(04|06|09|11))|((0[1-9]|1[0-9]|2[0-9])(02)))([0-9]{2})((0|5|6){1})([A-Z]{2})([0-9]{1}))$')"


---

// File: input/fsh/DkCoreObservation.fsh

Profile: DkCoreObservation
Parent: Observation
Id: dk-core-observation
Title: "Danish Core Observation Profiles"
Description: "HL7 Denmark core profile for observations"
* obeys dk-core-observation-mandatory-units
* code.coding ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "system"
  * ^slicing.rules = #open
* code.coding contains
    LOINC 0..1 and
    SNOMEDCT 0..1 and
    NPU 0..1 and
    IEEE 0..1 and
    MedCom 0..1 and
    SKS 0..1
* code.coding[LOINC] 
  * ^short = "LOINC code for the observation"
  * system 1..
  * system = "http://loinc.org" (exactly)
  * code 1..
* code.coding[SNOMEDCT]
  * ^short = "SNOMED CT code for the observation"
  * system 1..
  * system = "http://snomed.info/sct" (exactly)
  * code 1..
* code.coding[NPU]
  * ^short = "NPU code for the observation. NPU codes are administred by the Danish Health Data Authority." 
  * system 1..
  * system = $NPU (exactly)
  * code 1..
* code.coding[MedCom] 
  * ^short = "MedCom code for the observation. MedCom codes are administred by the MedCom."
  * system 1..
  * system = $Medcom (exactly)
  * code 1..
* code.coding[IEEE] 
  * ^short = "IEEE code for the observation"
  * system 1..
  * system = $IEEEx73 (exactly)
  * code 1..
* code.coding[SKS] 
  * ^short = "SKS code for the observation"
  * system 1..
  * system = $SKS (exactly)
  * code 1..
* subject only Reference(DkCorePatient or Group or Location or Device)
* subject 1..
* performer only Reference(DkCorePractitioner or DkCoreOrganization or DkCorePatient or PractitionerRole or CareTeam or DkCoreRelatedPerson)
* device ^short = "The device used for the measurement. It is recommended that when information about the device is sent, it is contained in the same Bundle as the Observation the device measured."
* valueQuantity.system = $ucum
* component.code.coding ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "system"
  * ^slicing.rules = #open
* component.code.coding contains
    LOINC 0..1 and
    SNOMEDCT 0..1 and
    NPU 0..1 and
    IEEE 0..1 and
    MedCom 0..1 and
    SKS 0..1
* component.code.coding[LOINC] 
  * ^short = "LOINC code for the observation"
  * system 1..
  * system = "http://loinc.org" (exactly)
  * code 1..
* component.code.coding[SNOMEDCT]
  * ^short = "SNOMED CT code for the observation"
  * system 1..
  * system = "http://snomed.info/sct" (exactly)
  * code 1..
* component.code.coding[NPU]
  * ^short = "NPU code for the observation. NPU codes are administred by the Danish Health Data Authority." 
  * system 1..
  * system = $NPU (exactly)
  * code 1..
* component.code.coding[MedCom] 
  * ^short = "MedCom code for the observation. MedCom codes are administred by the MedCom."
  * system 1..
  * system = $Medcom (exactly)
  * code 1..
* component.code.coding[IEEE] 
  * ^short = "IEEE code for the observation"
  * system 1..
  * system = $IEEEx73 (exactly)
  * code 1..
* component.code.coding[SKS] 
  * ^short = "SKS code for the observation."
  * system 1..
  * system = $SKS (exactly)
  * code 1..
* component.valueQuantity.system = $ucum
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   SCTCode 0..1
* method.coding[SCTCode] from TechniquesSCTCodes (example)
* method.coding[SCTCode].system = $sct

Invariant: dk-core-observation-mandatory-units
Description: "If value is specified then unit and/or code must be specified"
Severity: #error
Expression: "value.ofType(Quantity).value.exists() implies value.ofType(Quantity).unit.exists() or value.ofType(Quantity).code.exists()"




/* Instance: ObservationBloodPressureNPU
InstanceOf: DkCoreObservationVitalSignsNPU
Title: "John's blood pressure measurement"
Description: "John, blood pressure measurement, NPU-code"
Usage: #example 
[Add content here]
*/

/*Instance: ObservationHeightNPU
InstanceOf: DkCoreObservation
 Title: "John's height measurement"
* status = #final
* code.coding[NPU] = $NPU#NPU03794 "Legeme højde;Pt"
* valueQuantity.value = 1.80
* valueQuantity.code = #m
* valueQuantity.system = $ucum
* valueQuantity.unit = "m" 
* subject = Reference(john)
* performer = Reference(AbrahamLaege)

Instance: ObservationBloodPressureNPU
InstanceOf: DkCoreObservation
Title: "John's blood pressure measurement"
Description: "John, blood pressure measurement, NPU-code"
* device = Reference(ObservingDevice)
* status = #registered
* code.coding[NPU]
  * system = "urn:oid:1.2.208.176.2.1"
  * code = #DNK05462
  * display = "Arm—Blodtryk(diastolisk); tryk(liggende) = ? mmHg"
* subject = Reference(john)
* performer = Reference(AbrahamLaege)

Instance: ObservingDevice
InstanceOf: Device
Title: "The device that performed the observation"
* deviceName.name = "Blood Pressure Device"
* deviceName.type = #user-friendly-name
* serialNumber = "74E8FFFEFF051C00.001C05FFE874" */

Instance: ElseUrinStix
InstanceOf: DkCoreObservation
Usage: #example
* status = #final
* code.coding[0] = $NPU#NPU03987 "U—Leukocytter; arb.k.(proc.) = ?"
* code.coding[+] = $sct#252385000 "Urine dipstick for leukocyte esterase (procedure)"
* subject = Reference(else)
* effectiveDateTime = "2023-09-12T17:45:00.000Z"
* valueString = "Påviselige leukocytter"
* method = $sct#272391002 "Measurement technique (qualifier value)"

Instance: ElsePainVRS
InstanceOf: dk-core-observation
Usage: #example
Title: "ElsePainVRS"
Description: "Elses smerte målt med VRS"
* subject = Reference(else)
* code.coding = $sct#1144798005 "Verbal Rating Scale pain intensity score"
* valueCodeableConcept.coding[0].system = "http://localSystem.dk"
* valueCodeableConcept.coding[0].code = #d253770d-ce0b-4320-9806-b8fbe9e5af8a "Kraftige/svære smerter (3)"
* valueCodeableConcept.coding[0].userSelected = true
* valueCodeableConcept.coding[1] = $sct#76948002 "Severe pain (finding)"
* status = #final
* effectiveDateTime = 2020-06-01

Instance: ObservationOxySat
InstanceOf: DkCoreObservation
Title: "John's oxygen saturation measurement"
Usage: #inline
* status = #final
* code.coding = $NPU#NPU03011 "Iltmætning"
* valueQuantity.value = 0.97
* valueQuantity.code = #1
* valueQuantity.system = $ucum
* effectiveDateTime = 2023-11-01T12:00:00+01:00
* subject = Reference(john)
* performer = Reference(AbrahamLaege)




/* **************
 *
 * Examples involving Continua compliant observations and exchanges
 *
 * ************** */


Alias: $PhdPatient = http://hl7.org/fhir/uv/phd/StructureDefinition/PhdPatient
Alias: $PhgDevice = http://hl7.org/fhir/uv/phd/StructureDefinition/PhgDevice
Alias: $PhdDevice = http://hl7.org/fhir/uv/phd/StructureDefinition/PhdDevice
Alias: $PhdNumericObservation = http://hl7.org/fhir/uv/phd/StructureDefinition/PhdNumericObservation
Alias: $PhdCompoundNumericObservation = http://hl7.org/fhir/uv/phd/StructureDefinition/PhdCompoundNumericObservation
Alias: $PhdBitsEnumerationObservation = http://hl7.org/fhir/uv/phd/StructureDefinition/PhdBitsEnumerationObservation
Alias: $PhdCoincidentTimeStampObservation = http://hl7.org/fhir/uv/phd/StructureDefinition/PhdCoincidentTimeStampObservation
Alias: $EUI64 = urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680
Alias: $BD_ADDR = http://hl7.org/fhir/sid/eui-48/bluetooth
Alias: $ContinuaDeviceIdentifiers = http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaDeviceIdentifiers
Alias: $ContinuaPHD = http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaPHD
Alias: $ContinuaHFS = http://hl7.org/fhir/uv/phd/CodeSystem/ContinuaHFS
Alias: $observation-gatewayDevice = http://hl7.org/fhir/StructureDefinition/observation-gatewayDevice
Alias: $v2-0136 = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $ASN1ToHL7 = http://hl7.org/fhir/uv/phd/CodeSystem/ASN1ToHL7


Instance: Poul
InstanceOf: DkCorePatient
Usage: #example
* meta.profile = $PhdPatient
* identifier[cpr].value = "3001749995"
* identifier[cpr].type = $v2-0203#NI
* name
  * family = "Hansen"
  * given[+] = "Poul"


Instance: WeightScale.606405FFFECFC604
InstanceOf: Device
Title: "Poul's A&D weight scale"
Description: """
  This device is Poul's personal weighing scale, which he keeps in the bathroom
  of his home, and uses for daily monitoring due to his CHF condition.
"""
Usage: #example
* meta.profile = $PhdDevice
* identifier[+]
  * system = $EUI64
  * type.coding[0] = $ContinuaDeviceIdentifiers#SYSID "IEEE 11073 System Identifier"
  * value = "60-64-05-FF-FE-CF-C6-04"
* identifier[+]
  * system = $BD_ADDR
  * type.coding[0] = $ContinuaDeviceIdentifiers#BTMAC "Bluetooth MAC address"
  * value = "60-64-05-CF-C6-04"
* manufacturer = "A&D Medical "
* modelNumber = "UC-352BLE "
* serialNumber = "5180400664"
* type
  * coding = $IEEEx73#65573 "MDC_MOC_VMS_MDS_SIMP"
  * text = "MDC_MOC_VMS_MDS_SIMP: Personal health device"
* specialization
  * systemType
    * coding = $IEEEx73#528399 "MDC_DEV_SPEC_PROFILE_SCALE"
    * text = "MDC_DEV_SPEC_PROFILE_SCALE: Weighing scale"
  * version = "1"
* version[+]
  * type[+].coding = $IEEEx73#532352 "MDC_REG_CERT_DATA_CONTINUA_VERSION"
  * type[=].text = "MDC_REG_CERT_DATA_CONTINUA_VERSION: Continua version"
  * value = "4.1"
* version[+]
  * type[+].coding = $IEEEx73#531974 "MDC_ID_PROD_SPEC_HW"
  * type[=].text = "MDC_ID_PROD_SPEC_HW: Hardware version"
  * value = "0.00"
* version[+]
  * type[+].coding = $IEEEx73#531975 "MDC_ID_PROD_SPEC_SW"
  * type[=].text = "MDC_ID_PROD_SPEC_SW: Software version"
  * value = "0.00"
* version[+]
  * type[+].coding = $IEEEx73#531976 "MDC_ID_PROD_SPEC_FW"
  * type[=].text = "MDC_ID_PROD_SPEC_FW: Firmware version"
  * value = "WSP002_208"
* property[+]
  * type.coding = $IEEEx73#532353 "MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST"
  * type.text = "MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST: Continua certified device list"
  * valueCode[+]
    * coding = $ContinuaPHD#32783
    * text = "BluetoothLE: Weighing scale"
* property[+]
  * type.coding = $IEEEx73#68220 "MDC_TIME_SYNC_PROTOCOL"
  * type.text = "MDC_TIME_SYNC_PROTOCOL: Time synchronization protocol"
  * valueCode
    * coding = $IEEEx73#532224 "MDC_TIME_SYNC_NONE"
    * text = "MDC_TIME_SYNC_NONE: No time synchronization"
* property[+]
  * type.coding = $ASN1ToHL7#532354.0
  * type.text = "regulation-status"
  * valueCode
    * coding = $v2-0136#N
    * text = "Device is regulated"
* property[+]
  * type.coding = $ASN1ToHL7#68219.0
  * type.text = "mds-time-capab-real-time-clock"
  * valueCode
    * coding = $v2-0136#Y
    * text = "Real time clock is supported"
* property[+]
  * type.coding = $ASN1ToHL7#68219.1
  * type.text = "mds-time-capab-set-clock"
  * valueCode
    * coding = $v2-0136#Y
    * text = "Setting the real time clock is supported"


Instance: Weight.Poul.230221
InstanceOf: DkCoreObservation
Title: "Poul's daily weighing on Feb. 21st"
Description: """
  Poul has been instructed to perform a daily weighing in the morning. This is his
  daily weighing from Feb. 21st 2023.
"""
Usage: #example
* identifier.value = "606405FFFECFC604-3001749995-urn:oid:1.2.208.176.1.2-188736-74.0-kg-20230221T083640.00"
* meta.profile[+] = $PhdNumericObservation
* meta.profile[+] = $observation-vitalsigns
* meta.profile[+] = $observation-bodyweight
* status = #final
* category.coding = $observation-category#vital-signs "Vital signs"
* code
  * coding[+] = $LOINC#29463-7 "Body weight"
  * coding[+] = $IEEEx73#188736 "MDC_MASS_BODY_ACTUAL"
  * coding[+] = $NPU#NPU03804 "Pt—Body; mass = ? kg"
  * text = "MDC_MASS_BODY_ACTUAL: Body weight"
* subject = Reference(http://example.org/fhir/Patient/Poul)
* performer = Reference(http://example.org/fhir/Patient/Poul)
* effectiveDateTime = "2023-02-21T08:36:40+01:00"
* valueQuantity = 74.0 'kg' "kg"
* device = Reference(WeightScale.606405FFFECFC604)
* extension
  * url = $observation-gatewayDevice
  * valueReference = Reference(http://example.org/fhir/Telma.FEEDDADADEADBEEF)
* derivedFrom = Reference(http://example.org/fhir/CoincidentTimeStamp.0123)



/*
 * A complex example involving a Continua-compliant observation reporting upload
 */



Instance: Telma.FEEDDADADEADBEEF
InstanceOf: Device
Usage: #example
* meta.profile = $PhgDevice
* identifier[+]
  * system = $EUI64
  * type.coding = $ContinuaDeviceIdentifiers#SYSID "IEEE 11073 System Identifier"
  * value = "FE-ED-DA-DA-DE-AD-BE-EF"
* manufacturer = "Trifork"
* modelNumber = "Telma (Android)"
* type
  * coding = $IEEEx73#531981 "MDC_MOC_VMS_MDS_AHD"
  * text = "MDC_MOC_VMS_MDS_AHD: Continua compliant gateway"
* version[+]
  * type
    * coding = $IEEEx73#532352 "MDC_REG_CERT_DATA_CONTINUA_VERSION"
    * text = "MDC_REG_CERT_DATA_CONTINUA_VERSION: Continua version"
  * value = "7.0"
* version[+]
  * type
    * coding = $IEEEx73#531974 "MDC_ID_PROD_SPEC_HW"
    * text = "MDC_ID_PROD_SPEC_HW: Hardware version"
  * value = "Samsung Tab S7+ (SM-T970)"
* version[+]
  * type
    * coding = $IEEEx73#531975 "MDC_ID_PROD_SPEC_SW"
    * text = "MDC_ID_PROD_SPEC_SW: Software version"
  * value = "1.2.0 (build 2662)"
* version[+]
  * type
    * coding = $IEEEx73#531976 "MDC_ID_PROD_SPEC_FW"
    * text = "MDC_ID_PROD_SPEC_FW: Firmware version"
  * value = "Android 12 (API 31)"
* property[+]
  * type
    * coding = $IEEEx73#532353 "MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST"
    * text = "MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST: Continua certified device list"
  * valueCode[+]
    * coding = $ContinuaPHD#32783
    * text = "BluetoothLE: Weighing scale"
  * valueCode[+]
    * coding = $ContinuaPHD#32775
    * text = "BluetoothLE: Blood pressure monitor"
  * valueCode[+]
    * coding = $ContinuaPHD#32772
    * text = "BluetoothLE: Pulse oximeter"
* property[+]
  * type
    * coding = $IEEEx73#532355 "MDC_REG_CERT_DATA_CONTINUA_AHD_CERT_LIST"
    * text = "MDC_REG_CERT_DATA_CONTINUA_AHD_CERT_LIST: Continua certified Health&Fitness interfaces list"
  * valueCode
    * coding = $ContinuaHFS#7 "observation-upload-fhir"
    * text = "observation-upload-fhir: FHIR resource upload"
* property[+]
  * type
    * coding = $IEEEx73#68220 "MDC_TIME_SYNC_PROTOCOL"
    * text = "MDC_TIME_SYNC_PROTOCOL: Time synchronization protocol"
  * valueCode
    * coding = $IEEEx73#532226 "MDC_TIME_SYNC_NTPV4"
    * text = "MDC_TIME_SYNC_NTPV4: NTPV4 time synchronization"
* property[+]
  * type
    * coding = $ASN1ToHL7#532354.0
    * text = "regulation-status"
  * valueCode
    * coding = $v2-0136#Y
    * text = "Device is NOT regulated"


Instance: BPMonitor.C4F312FFFE53F2C9
InstanceOf: Device
Usage: #example
* meta.profile = $PhdDevice
* identifier[+]
  * system = $EUI64
  * type.coding = $ContinuaDeviceIdentifiers#SYSID "Ieee 11073 System Identifier"
  * value = "C4-F3-12-FF-FE-53-F2-C9"
* identifier[+]
  * system = $BD_ADDR
  * type.coding = $ContinuaDeviceIdentifiers#BTMAC "Bluetooth MAC address"
  * value = "C4-F3-12-53-F2-C9"
* manufacturer = "A&D Medical "
* modelNumber = "UA-651BLE "
* serialNumber = "5181000124"
* type
  * coding = $IEEEx73#65573 "MDC_MOC_VMS_MDS_SIMP"
  * text = "MDC_MOC_VMS_MDS_SIMP: Personal health device"
* specialization
  * systemType
    * coding = $IEEEx73#528391 "MDC_DEV_SPEC_PROFILE_BP"
    * text = "MDC_DEV_SPEC_PROFILE_BP: Blood Pressure meter"
  * version = "1"
* version[+]
  * type
    * coding = $IEEEx73#532352 "MDC_REG_CERT_DATA_CONTINUA_VERSION"
    * text = "MDC_REG_CERT_DATA_CONTINUA_VERSION: Continua version"
  * value = "4.1"
* version[+]
  * type[+].coding = $IEEEx73#531974 "MDC_ID_PROD_SPEC_HW"
  * type[=].text = "MDC_ID_PROD_SPEC_HW: Hardware version"
  * value = "0.00"
* version[+]
  * type
    * coding = $IEEEx73#531975 "MDC_ID_PROD_SPEC_SW"
    * text = "MDC_ID_PROD_SPEC_SW: Software version"
  * value = "0.00"
* version[+]
  * type
    * coding = $IEEEx73#531976 "MDC_ID_PROD_SPEC_FW"
    * text = "MDC_ID_PROD_SPEC_FW: Firmware version"
  * value = "BLP009_02_005 "
* property[+]
  * type
    * coding = $IEEEx73#532353 "MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST"
    * text = "MDC_REG_CERT_DATA_CONTINUA_CERT_DEV_LIST: Continua certified device list"
  * valueCode
    * coding = $ContinuaPHD#32775
    * text = "BluetoothLE: Blood pressure monitor"
* property[+]
  * type
    * coding = $IEEEx73#68220 "MDC_TIME_SYNC_PROTOCOL"
    * text = "MDC_TIME_SYNC_PROTOCOL: Time synchronization protocol"
  * valueCode
    * coding = $IEEEx73#532224 "MDC_TIME_SYNC_NONE"
    * text = "MDC_TIME_SYNC_NONE: No time synchronization"
* property[+]
  * type
    * coding = $ASN1ToHL7#532354.0
    * text = "regulation-status"
  * valueCode
    * coding = $v2-0136#N
    * text = "Device is regulated"
* property[+]
  * type
    * coding = $ASN1ToHL7#68219.0
    * text = "mds-time-capab-real-time-clock"
  * valueCode
    * coding = $v2-0136#Y
    * text = "Real time clock is supported"
* property[+]
  * type
    * coding = $ASN1ToHL7#68219.1
    * text = "mds-time-capab-set-clock"
  * valueCode
    * coding = $v2-0136#Y
    * text = "Setting the real time clock is supported"


Instance: BatteryLevel.0944
InstanceOf: DkCoreObservation
Usage: #inline
* meta.profile[+] = $PhdNumericObservation
* status = #final
* code
  * coding[+] = $IEEEx73#67996 "MDC_ATTR_VAL_BATT_CHARGE"
  * text = "MDC_ATTR_VAL_BATT_CHARGE: Battery level"
* subject = Reference(Poul)
* performer = Reference(Poul)
* effectiveDateTime = "2023-02-23T10:24:34.563+01:00"
* valueQuantity = 95 '%'
* device = Reference(BPMonitor.C4F312FFFE53F2C9)
* extension
  * url = $observation-gatewayDevice
  * valueReference = Reference(Telma.FEEDDADADEADBEEF)


Instance: CoincidentTimeStamp.0222
InstanceOf: DkCoreObservation
Usage: #example
* meta.profile[+] = $PhdCoincidentTimeStampObservation
* status = #final
* code
  * coding[+] = $IEEEx73#67975 "MDC_ATTR_TIME_ABS"
  * text = "MDC_ATTR_TIME_ABS: Uses Absolute time clock"
* subject = Reference(Poul)
* performer = Reference(Poul)
* effectiveDateTime = "2023-02-23T10:24:34.467+01:00"
* valueDateTime = "2023-02-23T10:24:25+01:00"
* device = Reference(BPMonitor.C4F312FFFE53F2C9)
* extension
  * url = $observation-gatewayDevice
  * valueReference = Reference(Telma.FEEDDADADEADBEEF)


Instance: BloodPressure.Poul.643992
InstanceOf: DkCoreObservation
Usage: #inline
* identifier.value = "C4F312FFFE53F2C9-3001749995-urn:oid:1.2.208.176.1.2-150020-118-266016-87-266016-99-266016-20230223T102408.00"
* meta.profile[+] = $PhdCompoundNumericObservation
* meta.profile[+] = $observation-vitalsigns
* meta.profile[+] = $observation-bp
* status = #final
* category.coding = $observation-category#vital-signs "Vital signs"
* code
  * coding[+] = $LOINC#85354-9 "Blood pressure panel with all children optional"
  * coding[+] = $IEEEx73#150020 "MDC_PRESS_BLD_NONINV"
  * coding[+] = $SKS#ZZ3170 "Hjemmeblodtryksmåling udført af patienten"
  * text = "MDC_PRESS_BLD_NONINV: Blood Pressure"
* subject = Reference(Poul)
* performer = Reference(Poul)
* effectiveDateTime = "2023-02-23T10:24:08+01:00"
* component[+]
  * code
    * coding[+] = $LOINC#8480-6 "Systolic blood pressure"
    * coding[+] = $IEEEx73#150021 "MDC_PRESS_BLD_NONINV_SYS"
    * coding[+] = $Medcom#MCS88019 "Arm—Blodtryk(systolisk) hjemme; tryk = ? mmHg"
    * text = "MDC_PRESS_BLD_NONINV_SYS: Systolic Blood Pressure"
  * valueQuantity = 118 'mm[Hg]' "mmHg"
* component[+]
  * code
    * coding[+] = $LOINC#8462-4 "Diastolic blood pressure"
    * coding[+] = $IEEEx73#150022 "MDC_PRESS_BLD_NONINV_DIA"
    * coding[+] = $Medcom#MCS88020 "Arm—Blodtryk(diastolisk) hjemme; tryk = ? mmHg"
    * text = "MDC_PRESS_BLD_NONINV_DIA: Diastolic Blood Pressure"
  * valueQuantity = 87 'mm[Hg]' "mmHg"
* component[+]
  * code
    * coding[+] = $IEEEx73#150023 "MDC_PRESS_BLD_NONINV_MEAN"
    * text = "MDC_PRESS_BLD_NONINV_MEAN: Mean Blood Pressure"
  * valueQuantity = 99 'mm[Hg]' "mmHg"
* device = Reference(BPMonitor.C4F312FFFE53F2C9)
* extension
  * url = $observation-gatewayDevice
  * valueReference = Reference(Telma.FEEDDADADEADBEEF)
* derivedFrom = Reference(CoincidentTimeStamp.0222)


Instance: HeartRate.Poul.1974654
InstanceOf: DkCoreObservation
Usage: #example
* identifier.value = "C4F312FFFE53F2C9-3001749995-urn:oid:1.2.208.176.1.2-149546-93-{beat}/min-20230223T102408.00"
* meta.profile[+] = $PhdNumericObservation
* meta.profile[+] = $observation-vitalsigns
* meta.profile[+] = $observation-heartrate
* status = #final
* category.coding = $observation-category#vital-signs "Vital signs"
* code
  * coding[+] = $LOINC#8867-4 "Heart rate"
  * coding[+] = $IEEEx73#149546 "MDC_PULS_RATE_NON_INV"
  * coding[+] = $NPU#NPU21692 "Heart—Systole; frequency = ? × 1/min"
  * text = "MDC_PULS_RATE_NON_INV: Heart rate"
* subject = Reference(Poul)
* performer = Reference(Poul)
* effectiveDateTime = "2023-02-23T10:24:08+01:00"
* valueQuantity = 93 '/min' "bpm"
* device = Reference(BPMonitor.C4F312FFFE53F2C9)
* extension
  * url = $observation-gatewayDevice
  * valueReference = Reference(Telma.FEEDDADADEADBEEF)
* derivedFrom = Reference(CoincidentTimeStamp.0222)


Instance: BloodPressureStatus.Poul.133527
InstanceOf: DkCoreObservation
Usage: #inline
* identifier.value = "C4F312FFFE53F2C9-3001749995-urn:oid:1.2.208.176.1.2-8410608-8192-20230223T102408.00"
* meta.profile[+] = $PhdBitsEnumerationObservation
* status = #final
* code
  * coding = $IEEEx73#8410608 "MDC_BLOOD_PRESSURE_MEASUREMENT_STATUS"
  * text = "MDC_BLOOD_PRESSURE_MEASUREMENT_STATUS: Blood Pressure measurement problem"
* subject = Reference(Poul)
* performer = Reference(Poul)
* effectiveDateTime = "2023-02-23T10:24:08+01:00"
* component
  * code
    * coding = $ASN1ToHL7#8410608.2
    * text = "irregular-pulse"
  * valueCodeableConcept
    * coding = $v2-0136#Y
    * text = "Irregular pulse was detected"
* device = Reference(BPMonitor.C4F312FFFE53F2C9)
* extension
  * url = $observation-gatewayDevice
  * valueReference = Reference(Telma.FEEDDADADEADBEEF)
* derivedFrom[+] = Reference(CoincidentTimeStamp.0222)
* derivedFrom[+] = Reference(BloodPressure.Poul.643992)


Instance: ContinuaBundleWithDevice
InstanceOf: Bundle
Title: "Poul's home blood pressure measurement"
Description: """
  This example demonstrates a DkCoreObservation _and_ Continua-compliant
  bundle containing a home blood pressure measurement uploaded to a Continua-compliant
  _"FHIR Observation Reporting Server"._
"""
Usage: #example
* type = #transaction
* entry[+]
  * fullUrl = "http://hl7.dk/fhir/core/Patient/Poul"
  * request
    * method = #POST
    * url = "Patient"
    * ifNoneExist = "identifier=urn:oid:1.2.208.176.1.2|3001749995"
  * resource = Poul
* entry[+]
  * fullUrl = "http://hl7.dk/fhir/core/Device/Telma.FEEDDADADEADBEEF"
  * request
    * method = #POST
    * url = "Device"
    * ifNoneExist = "identifier=urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680|FE-ED-DA-DA-DE-AD-BE-EF"
  * resource = Telma.FEEDDADADEADBEEF
* entry[+]
  * fullUrl = "http://hl7.dk/fhir/core/Device/BPMonitor.C4F312FFFE53F2C9"
  * request
    * method = #POST
    * url = "Device"
    * ifNoneExist = "identifier=urn:oid:1.2.840.10004.1.1.1.0.0.1.0.0.1.2680|C4-F3-12-FF-FE-53-F2-C9"
  * resource = BPMonitor.C4F312FFFE53F2C9
* entry[+]
  * fullUrl = "http://hl7.dk/fhir/core/Observation/BatteryLevel.0944"
  * request
    * method = #POST
    * url = "Observation"
  * resource = BatteryLevel.0944
* entry[+]
  * fullUrl = "http://hl7.dk/fhir/core/Observation/CoincidentTimeStamp.0222"
  * request
    * method = #POST
    * url = "Observation"
  * resource = CoincidentTimeStamp.0222
* entry[+]
  * fullUrl = "http://hl7.dk/fhir/core/Observation/BloodPressure.Poul.643992"
  * request
    * method = #POST
    * url = "Observation"
    * ifNoneExist = "identifier=C4F312FFFE53F2C9-3001749995-urn:oid:1.2.208.176.1.2-150020-118-266016-87-266016-99-266016-20230223T102408.00"
  * resource = BloodPressure.Poul.643992
* entry[+]
  * fullUrl = "http://hl7.dk/fhir/core/Observation/HeartRate.Poul.1974654"
  * request
    * method = #POST
    * url = "Observation"
    * ifNoneExist = "identifier=C4F312FFFE53F2C9-3001749995-urn:oid:1.2.208.176.1.2-149546-93-{beat}/min-20230223T102408.00"
  * resource = HeartRate.Poul.1974654
* entry[+]
  * fullUrl = "http://hl7.dk/fhir/core/Observation/BloodPressureStatus.Poul.133527"
  * request
    * method = #POST
    * url = "Observation"
    * ifNoneExist = "identifier=C4F312FFFE53F2C9-3001749995-urn:oid:1.2.208.176.1.2-8410608-8192-20230223T102408.00"
  * resource = BloodPressureStatus.Poul.133527


---

// File: input/fsh/DkCoreOrganization.fsh

Profile: DkCoreOrganization
Parent: Organization
Id: dk-core-organization
Title: "Danish Core Organization Profile"
Description: "HL7 Denmark core profile for a danish health organization"
* obeys dk-core-organization-mandatory-identifier
* identifier 1..
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "system"
  * ^slicing.rules = #open
* identifier contains
    EAN-ID 0..1 and
    SOR-ID 0..1 and
    KOMBIT-ORG-ID 0..1 and
    Ydernummer 0..1 and
    CVR-ID 0..1 and
    Kommunekode 0..1 and
    Regionskode 0..1 and
    ProducentID 0..1
* identifier[EAN-ID] only GLNIdentifier
  * ^short = "GLN identifier, [DA] EAN-nummer"
* identifier[SOR-ID] only SORIdentifier
  * ^short = "[DA] SOR-id"
* identifier[KOMBIT-ORG-ID] only KombitOrgIdentifier
  * ^short = "[DA] Organisationsenheds-id som specificeret af FK-ORG"
* identifier[Ydernummer] ^short = "[DA] Ydernummer"
  * system 1..
  * system = "urn:oid:1.2.208.176.1.4" (exactly)
  * value 1..
* identifier[CVR-ID] only CVRIdentifier
  * ^short = "VAT identification number, [DA] CVR-nummer"
* identifier[Kommunekode] ^short = "[DA] Kommunekode"
  * system 1..
  * system = "http://hl7.dk/fhir/core/CodeSystem/dk-core-municipality-codes" (exactly)
  * value 1..
  * value from MunicipalityCodes (required)
* identifier[Regionskode] ^short = "[DA] Regionskode"
  * system 1..
  * system = "http://hl7.dk/fhir/core/CodeSystem/dk-core-regional-subdivision-codes" (exactly)
  * value 1..
* identifier[ProducentID] only ProducentId
  * ^short = "[DA] Producent Id"
* type from $sor-organization-type (preferred)

Instance: CenterForDiabetes
InstanceOf: DkCoreOrganization
Title: "Center for Diabetes"
Description: "Center for Diabetes"
Usage: #example
* identifier[0].system = "urn:oid:1.2.208.176.1.1"
* identifier[=].value = "633271000016006"
* identifier[+].system = "http://cvr.dk"
* identifier[=].value = "64942212"
* type = $sct#264361005

Instance: CenterForDiabetesTeamDiabetes
InstanceOf: DkCoreOrganization
Title: "Center for Diabetes Team Diabetes"
Description: "Center for Diabetes Team Diabetes"
Usage: #example
* identifier[0].system = "urn:oid:1.2.208.176.1.1"
* identifier[=].value = "1133181000016000"
* identifier[+].system = "http://cvr.dk"
* identifier[=].value = "64942212"
* type = $sct#264361005
* partOf.reference = "Organization/CenterForDiabetes"

Instance: CenterForDiabetesTeamHjerte
InstanceOf: DkCoreOrganization
Title: "Center for Diabetes Team Hjerte"
Description: "Center for Diabetes Team Hjerte"
Usage: #example
* identifier[0].system = "urn:oid:1.2.208.176.1.1"
* identifier[=].value = "1133191000016003"
* identifier[+].system = "http://cvr.dk"
* identifier[=].value = "64942212"
* type = $sct#264361005
* partOf.reference = "Organization/CenterForDiabetes"

Instance: CenterForDiabetesTeamKvalitet
InstanceOf: DkCoreOrganization
Title: "Center for Diabetes Team Kvalitet"
Description: "Center for Diabetes Team Kvalitet"
Usage: #example
* identifier[0].system = "urn:oid:1.2.208.176.1.1"
* identifier[=].value = "1133201000016001"
* identifier[+].system = "http://cvr.dk"
* identifier[=].value = "64942212"
* type = $sct#264361005
* partOf.reference = "Organization/CenterForDiabetes"

Instance: LaegerneHasserisBymidte
InstanceOf: DkCoreOrganization
Title: "LaegerneHasserisBymidte"
Description: "Praktisernede læge i Hasseris, som defineret af SOR"
Usage: #example
* identifier[0].value = "61741000016007"
* identifier[=].system = "urn:oid:1.2.208.176.1.1"
* identifier[+].system = "urn:oid:1.2.208.176.1.4"
* identifier[=].value = "77410"
* name = "Lægerne Hasseris Bymidte"
* telecom.value = "98182233"
* telecom.system = #phone
* type = $sct#394761003

Instance: b08997bb-4476-4dd0-84dd-2e297f809364
InstanceOf: DkCoreOrganization
Title: "MedCom Test Organization"
Description: "MedCom Test Organization with SOR id"
Usage: #example
* identifier[0].system = "urn:oid:1.2.208.176.1.1"
* identifier[=].value = "12345678901"
* identifier[+].system = "http://cvr.dk"
* identifier[=].value = "26919991"
* identifier[+].system = "https://www.gs1.org/gln"
* identifier[=].value = "5798002472264"
* identifier[+].system = "https://kombit.dk/sts/organisation"
* identifier[=].value = "urn:uuid:a107fd1e-9f35-422c-9d1e-add097bbf4a6"
* type = $sct#264372000

Instance: 154b8c96-a061-45bf-9ce4-1947c7c3c283
InstanceOf: DkCoreOrganization
Title: "Producer Test Organization"
Description: "Producer of Lab Results Test Organization"
Usage: #example
* identifier[0].system = "urn:oid:1.2.208.176.1.1"
* identifier[=].value = "12345678901"
* identifier[+].system = "http://medcomfhir.dk/ig/terminology/CodeSystem/MedComProducentID"
* identifier[=].value = "KAF"
* type = $sct#264361005

Invariant: dk-core-organization-mandatory-identifier
Description: "Minimum one identifier shall be of type SOR-ID, KOMBIT-ORG-ID or CVR-ID"
Severity: #error
Expression: "identifier.where(system='urn:oid:1.2.208.176.1.1' or system='https://kombit.dk/sts/organisation' or system='urn:oid:2.16.840.1.113883.2.24.1.1').exists()"


---

// File: input/fsh/DkCorePatient.fsh

Profile: DkCorePatient
Parent: Patient
Id: dk-core-patient
Title: "Danish Core Patient Profile"
Description: "HL7 Denmark core profile for a patient"
* obeys marital-status-unknown-usage
* identifier 1..
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "system"
  * ^slicing.rules = #open
* identifier contains 
    cpr 0..1 and
    x-ecpr 0..1 and 
    d-ecpr 0..1
* identifier[cpr] only DkCoreCprIdentifier
  * ^short = "[DA] cpr-nummer, som det fremgår af CPR registeret"
* identifier[x-ecpr] only DkCoreXeCprIdentifier
  * ^short = "[DA] X-eCPR, tildelt fra den nationale eCPR service"
* identifier[d-ecpr] only DkCoreDeCprIdentifier
  * ^short = "[DA] D-eCPR, decentral eCPR"
* name ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "use"
  * ^slicing.rules = #open
* name contains official 0..1
* name[official] ^short = "[DA] Officielt navn, som det fremgår af CPR registeret"
  * use 1..
  * use = #official (exactly)
  * family 1..
* address ^definition = "An address for the individual. Danish addresses must comply with directions issued by https://dawa.aws.dk/ and underlying authorities"
  * extension contains
      MunicipalityCodes named municipalityCode 0..1 and
      RegionalSubDivisionCodes named regionalSubDivisionCodes 0..1
  * extension[municipalityCode] ^short = "[DA] Kommunekode"
  * extension[regionalSubDivisionCodes] ^short = "[DA] Regionskode"
* maritalStatus from $dk-marital-status_1 (extensible)
* generalPractitioner ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "identifier.system"
  * ^slicing.rules = #open
* generalPractitioner contains referencedSORUnit 0..*
* generalPractitioner[referencedSORUnit] ^short = "[DA] Praktiserende læges SOR-id på sundhedsinstistutionsniveau"
  * identifier only SORIdentifier
* contact.relationship from RelatedPersonRelationshipTypes (extensible)
* link.other only Reference(DkCorePatient or DkCoreRelatedPerson)

Instance: 283
InstanceOf: DkCorePatient
Title: "Example of valid patient with full address"
Description: "Example of valid patient with full address"
Usage: #example
* identifier.use = #official
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "0108589995"
* name.use = #official
* name.family = "Mosebryggersen"
* name.given[0] = "Schwendlund"
* name.given[1] = "Test"
* gender = #male
* birthDate = "1958-08-01"
* address.extension[0].url = "http://hl7.dk/fhir/core/StructureDefinition/dk-core-municipalityCodes"
* address.extension[=].valueCodeableConcept = $dk-core-municipality-codes#0330
* address.extension[+].url = "http://hl7.dk/fhir/core/StructureDefinition/dk-core-RegionalSubDivisionCodes"
* address.extension[=].valueCodeableConcept = $dk-core-regional-subdivision-codes#DK-85
* address.use = #home
* address.type = #postal
* address.line = "Nordre Ringgade 3"
* address.city = "Aarhus"
* address.postalCode = "8000"
* address.country = "DK"
* maritalStatus = $v3-MaritalStatus#U "unmarried"
* generalPractitioner.identifier.system = "urn:oid:1.2.208.176.1.1"
* generalPractitioner.identifier.value = "79641000016006"
* generalPractitioner.display = "Peter Sønderby"

Instance: Confidential
InstanceOf: DkCorePatient
Title: "Example of a patient with confidential address and name"
Description: "Example of a patient with confidential address and name"
Usage: #example
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">This instance is an example of a Danish citizen who has requested name and address protection (Navne- og adressebeskyttelse), why the instance is marked with a security label. Only personnel using systems in public/official affairs are allowed to see name and address for the citizen, why these information are included in the profile.<p></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource \"Confidential\"</p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-dk-core-patient.html\">Danish Core Patient Profile</a></p><p style=\"margin-bottom: 0px\">Security Labels: <span title=\"{http://terminology.hl7.org/CodeSystem/v3-Confidentiality http://terminology.hl7.org/CodeSystem/v3-Confidentiality}\">http://terminology.hl7.org/CodeSystem/v3-Confidentiality</span></p></div><p><b>identifier</b>: id: 1502779995</p><p><b>name</b>: Hans Hansen (OFFICIAL)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 1976-08-09</p><p><b>address</b>: Julianevej 22 6000 Kolding (HOME)</p></div>"
* text.status = #additional
* meta.security.code = $v3-Confidentiality#R
* meta.security.display = "Restricted"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "1502779995"
* name.use = #official
* name.family = "Berggren"
* name.given[0] = "Ruddi"
* name.given[1] = "Test"
* gender = #male
* birthDate = "1977-02-15"
* address.use = #home
* address.line = "Julianevej 22"
* address.city = "Kolding"
* address.postalCode = "6000"


Instance: else
InstanceOf: DkCorePatient
Title: "Example of a woman of childbearing age"
Description: "Example of a woman of childbearing age. Else is a MedCom test-patient"
Usage: #example
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "0201919990"
* name.use = #official
* name.family = "Lauridsen"
* name.given[0] = "Else"
* name.given[+] = "Test"
* gender = #female
* birthDate = "1991-02-02"
* maritalStatus = $v3-MaritalStatus#M "Married"

Instance: john
InstanceOf: DkCorePatient
Title: "Example of valid patient with multiple names"
Description: "Example of valid patient with multiple names"
Usage: #example
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "0201609995"
* name[0].use = #official
* name[=].family = "Meyerhofen"
* name[=].given[0] = "John"
* name[=].given[+] = "Christian"
* name[=].prefix = "Mr"
* name[+].use = #usual
* name[=].given = "Johnny"
* gender = #male
* birthDate = "1960-01-02"
* generalPractitioner.identifier.system = "urn:oid:1.2.208.176.1.1"
* generalPractitioner.identifier.value = "487341000016005"
* generalPractitioner.display = "Charlottenlund Lægehus"

Instance: Max
InstanceOf: DkCorePatient
Title: "Example of valid patient with danish marital status"
Description: "Example of valid patient with danish marital status"
Usage: #example
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "0107729995"
* name.use = #official
* name.family = "Berggren"
* name.given[0] = "Max"
* name.given[1] = "Test"
* name.prefix = "Mr"
* gender = #male
* birthDate = "1972-07-01"
* maritalStatus = $dk-marital-status#P

Instance: ukendt
InstanceOf: DkCorePatient
Title: "Example of valid patient unknown identifier registry"
Description: "Example of valid patient unknown identifier registry. The patient is a 'John Doe' with an Identifier from an unofficial register"
Usage: #example
* identifier.system = "http://rn.dk"
* identifier.value = "0706830VJ9"
* name.use = #temp
* name.family.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* name.family.extension.valueCode = http://terminology.hl7.org/CodeSystem/data-absent-reason#unknown
* name.given = "Anders"
* gender = #male
* birthDate = "1983-06-07"


Instance: ukendt-D-eCPR
InstanceOf: DkCorePatient
Title: "Example of valid patient with a D-eCPR as identifier"
Description: "Example of valid patient with a D-eCPR as identifier."
Usage: #example
* identifier.system = #urn:oid:1.2.208.176.1.6.1.3.177
* identifier.value = "1206550VK9"
* name.use = #temp
* name.family.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* name.family.extension.valueCode = http://terminology.hl7.org/CodeSystem/data-absent-reason#unknown
* name.given = "Peter"
* gender = #male

Instance: ukendt-X-eCPR
InstanceOf: DkCorePatient
Title: "Example of valid patient with a X-eCPR as identifier"
Description: "Example of valid patient with a X-eCPR as identifier."
Usage: #example
* identifier.system = "urn:oid:1.2.208.176.1.6.1.1"
* identifier.value = "0703921VJ4"
* name.use = #temp
* name.family = "Madsen"
* gender = #female
* birthDate = "1992-03-07"

Invariant: marital-status-unknown-usage
Description: "The constraint ensures that only permitted forms of marriage can be used in the Danish context, as there will be no authority for other forms. See https://cpr.dk/borgere/hvad-staar-der-om-mig-i-cpr-registerindsigt/hvad-og-hvem-er-registreret-i-cpr-og-hvem-opdaterer-oplysninger-om-dig-i-cpr/"
Severity: #warning
Expression: "maritalStatus.coding.where(code = 'P' and system = 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus').empty() or maritalStatus.coding.where(code = 'A' and system = 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus').empty()"
* requirements = "Marital status is legally unknown in Denmark"

---

// File: input/fsh/DkCorePractitioner.fsh

Profile: DkCorePractitioner
Parent: Practitioner
Id: dk-core-practitioner
Title: "Danish Core Practitioner Profile"
Description: "HL7 Denmark core profile for health professionals and other actors relevant in citizen and patient pathways"
* qualification ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "identifier.system"
  * ^slicing.rules = #open
  * ^slicing.ordered = false
  * ^slicing.description = "Slice based on the identifier.systemm value which allows for official qualifications to\nDeclaring the slices, and their cardinalities, to allow a KL-code and a SNOMED CT code"
* qualification contains officialHealthAuthorization 0..1
* qualification[officialHealthAuthorization].identifier only AuthorizationIdentifier
  * ^short = "[DA] Autorisationskode, som specificeret af autorisationsregisteret"
* qualification[officialHealthAuthorization].code from DkCoreProfessionGroupValueSet (extensible)
  * ^short = "[DA] Kode for kvalifikation, som specificeret af autorisationsregisteret"

Instance: AbrahamLaege
InstanceOf: DkCorePractitioner
Title: "AbrahamLæge"
Description: "Eksempel på lægen Abraham fra akutsygeplejen"
Usage: #example
* qualification.identifier.system = "https://autregweb.sst.dk"
* qualification.identifier.value = "005ML"
* qualification.code = $DkCoreProfessionGroupCodes#7170 "Læge"
* name.given = "Abraham"
* name.family = "Murakami"

Instance: SidselSygeplejerske
InstanceOf: DkCorePractitioner
Title: "SidselSygeplejerske"
Description: "Eksempel på en sygeplejerske"
Usage: #example
* qualification.code = $DkCoreProfessionGroupCodes#5166 "Sygeplejerske"
* name.given = "Sidsel"
* name.family = "Andersen"

Instance: HanneSocialraadgiver
InstanceOf: DkCorePractitioner
Title: "HanneSocialrådgiver"
Description: "Eksempel på socialrådgiveren Hanne"
Usage: #example
* name.given = "Hanne"
* name.family = "Mortensen"
* qualification.code.text = "Socialrådgiver"

---

// File: input/fsh/DkCoreRelatedPerson.fsh

Profile: DkCoreRelatedPerson
Parent: RelatedPerson
Id: dk-core-related-person
Title: "Danish Core Related Person Profile"
Description: "HL7 Denmark core profile for a related person"

// Allow CPR and eCPR numbers as identifiers
* identifier 0..
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "system"
  * ^slicing.rules = #open
* identifier contains
    cpr 0..1 and
    x-ecpr 0..1 and
    d-ecpr 0..1
* identifier[cpr] only DkCoreCprIdentifier
  * ^short = "[DA] cpr-nummer, som det fremgår af CPR registeret"
* identifier[x-ecpr] only DkCoreXeCprIdentifier
  * ^short = "[DA] X-eCPR, tildelt fra den nationale eCPR service"
* identifier[d-ecpr] only DkCoreDeCprIdentifier
  * ^short = "[DA] D-eCPR, decentral eCPR"

* patient only Reference(DkCorePatient)

* name ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "use"
  * ^slicing.rules = #open
* name contains official 0..1
* name[official] ^short = "[DA] Officielt navn, som det fremgår af CPR registeret"
  * use 1..
  * use = #official (exactly)
  * family 1..

* relationship from RelatedPersonRelationshipTypes (extensible)

Instance: Child
InstanceOf: DkCoreRelatedPerson
Title: "Example of child as related person"
Description: "Example of child as related person"
Usage: #example
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "1502799995"
* name.use = #official
* name.family = "Mosebryggersen"
* name.given = "Odd Haugen Test"
* gender = #male
* birthDate = "1979-02-15"
* patient.reference = "Patient/283"
* relationship = $v3-RoleCode#CHILD

Instance: TwoRelations
InstanceOf: DkCoreRelatedPerson
Title: "Example of a related person with two relations"
Description: "Example of a person that has relations as both neighbor and primary caretaker"
Usage: #example
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "0201919996"
* name.use = #official
* name.family = "Lauridsen"
* name.given = "Ellen Louise Test"
* gender = #female
* birthDate = "1991-01-02"
* patient.reference = "Patient/283"
* relationship[0] = $v3-RoleCode#NBOR
* relationship[1] = DkRelatedPersonRelationshipCodes#PRICARE


---

// File: input/fsh/extensions.fsh

Extension: ConditionLastAssertedDate
Id: ConditionLastAssertedDate
Title: "ConditionLastAssertedDate"
Description: "Extension for the last date a Condition-instance was confirmed valid in its current state. E.g. with its current clinical- and verification status, stage and severity. Typically the last performed follow-up"
* . ^short = "ConditionLastAssertedDate"
  * ^definition = "Extension for the last date a Condition-instance was confirmed valid in its current state. E.g. with its current clinical- and verification status, stage and severity. Typically the last performed follow-up"
* value[x] only dateTime
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "Condition"

Extension: NotFollowedAnymore
Id: NotFollowedAnymore
Title: "NotFollowedAnymore"
Description: "Extension for the date where a condition lost focus in a specific clinical context"
* . ^short = "NotFollowedAnymore"
  * ^definition = "Extension for the date where a condition lost focus in a specific clinical context"
* value[x] only dateTime
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "Condition"

Extension: RegionalSubDivisionCodes
Id: dk-core-RegionalSubDivisionCodes
Title: "Danish Core Regional Sub Division Codes Extension"
Description: "Identifier holding the official organization identifier for a danish region"
* ^context[0].type = #element
* ^context[=].expression = "Address"
* ^context[+].type = #element
* ^context[=].expression = "Patient.address"
* . ^short = "Danish Core Regional Sub Division Codes Extension"
  * ^definition = "Identifier holding the official organization identifier for a danish region"
* value[x] only CodeableConcept
  * coding from RegionalSubdivisionCodes (required)

Extension: MunicipalityCodes
Id: dk-core-municipalityCodes
Title: "Danish Core Municipality codes"
Description: "Identifier holding the official identifier for a danish municipality"
* ^context[0].type = #element
* ^context[=].expression = "Patient.address"
* ^context[+].type = #element
* ^context[=].expression = "Address"
* . ^short = "Danish Core Municipality codes"
  * ^definition = "Identifier holding the official identifier for a danish municipality"
* value[x] only CodeableConcept
  * coding from MunicipalityCodes (required)

---

// File: input/fsh/GLNIdentifier.fsh

Profile: GLNIdentifier
Parent: Identifier
Id: dk-core-gln-identifier
Title: "GLN Identifier"
Description: "Identifier holding a 13 digit GLN"
* use = #official (exactly)
* system 1..
* system = "https://www.gs1.org/gln" (exactly)
* value 1..
  * obeys gln-length and gln-modulus-10

Invariant: gln-length
Description: "GLN must be exactly 13 characters long"
Severity: #error
Expression: "matches('^[0-9]{13}$')"

Invariant: gln-modulus-10
Description: "GLN must pass the modulus 10 check - https://www.gs1.org/services/how-calculate-check-digit-manually"
Severity: #error
Expression: "((\n(10-((substring(0,1).toInteger()*1)+\n(substring(1,1).toInteger()*3)+\n(substring(2,1).toInteger()*1)+\n(substring(3,1).toInteger()*3)+\n(substring(4,1).toInteger()*1)\n+(substring(5,1).toInteger()*3)\n+(substring(6,1).toInteger()*1)\n+(substring(7,1).toInteger()*3)\n+(substring(8,1).toInteger()*1)\n+(substring(9,1).toInteger()*3)\n+(substring(10,1).toInteger()*1)\n+(substring(11,1).toInteger()*3))mod(10))mod(10))=substring(12,1).toInteger())"

---

// File: input/fsh/instances.fsh

Instance: cpr
InstanceOf: NamingSystem
Title: "cpr"
Description: "The Danish civil registration system (\"CPR\") encompasses basic personal data about anyone with a civil registration number. A civil registration number shall be allocated to anyone who: 1) is registered in the national register in Denmark on the grounds of birth or relocation from abroad; 2) is included under Arbejdsmarkedets TillægsPension (ATP); 3) according to the tax authorities, is required to have a civil registration number for the purpose of tax processing in Denmark."
Usage: #definition
* name = "DK Central Person Registry (CPR)"
* status = #active
* kind = #identifier
* date = "1968-04-02"
* publisher = "HL7 Denmark"
* contact.name = "HL7 Denmark"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.hl7.dk/"
* responsible = "CPR-kontoret, Indenrigs- og Sundhedsministeriets departement"
* description = "The Danish civil registration system (\"CPR\") encompasses basic personal data about anyone with a civil registration number. A civil registration number shall be allocated to anyone who: 1) is registered in the national register in Denmark on the grounds of birth or relocation from abroad; 2) is included under Arbejdsmarkedets TillægsPension (ATP); 3) according to the tax authorities, is required to have a civil registration number for the purpose of tax processing in Denmark."
* jurisdiction = urn:iso:std:iso:3166#DK
* uniqueId[0].type = #oid
* uniqueId[=].value = "1.2.208.176.1.2"
* uniqueId[+].type = #uri
* uniqueId[=].value = "http://www.cpr.dk/cpr-systemet"

Instance: sor
InstanceOf: NamingSystem
Title: "sor"
Description: "SOR is provided by the Danish Health Data Authority under the Danish Ministry of Health. The register holds organizations within the Danish health sector, their geographical and virtual addresses as well as codes for their identification and for EDI-communication. Danish Health Data Authority is responsible for issuing and publishing codes to identify organizations across health care sectors and related public and private services. SOR includes organizational data on hospitals, the primary care sector (physiotherapists, general practitioners, dentists etc.) and municipal health service organizations as well as non-health care organizations that need to be able to receive data from the former."
Usage: #definition
* name = "DK Central Healthcare Organization Registry (SOR)"
* status = #active
* kind = #identifier
* date = "2021-03-14T16:56:07+01:00"
* publisher = "HL7 Denmark"
* contact.name = "HL7 Denmark"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.hl7.dk/"
* responsible = "The Health Service's Organizational Register was developed in the National Board of Health in 2006-2007 in cooperation with the regions and MedCom"
* type = $v2-0203#PRN "Provider number"
* description = "SOR is provided by the Danish Health Data Authority under the Danish Ministry of Health. The register holds organizations within the Danish health sector, their geographical and virtual addresses as well as codes for their identification and for EDI-communication. Danish Health Data Authority is responsible for issuing and publishing codes to identify organizations across health care sectors and related public and private services. SOR includes organizational data on hospitals, the primary care sector (physiotherapists, general practitioners, dentists etc.) and municipal health service organizations as well as non-health care organizations that need to be able to receive data from the former."
* jurisdiction = urn:iso:std:iso:3166#DK
* uniqueId[0].type = #oid
* uniqueId[=].value = "urn:oid:1.2.208.176.1.1"
* uniqueId[+].type = #uri
* uniqueId[=].value = "https://sundhedsdatastyrelsen.dk/da/registre-og-services/om-sor"

Instance: HenvisningFraLageTilSygehus
InstanceOf: ServiceRequest
Title: "Henvisning vedr. modermærkekræft"
Description: "Henvisning fra læge til sygehus vedr. mistanke om at John har modermærkekræft"
Usage: #example
* requester = Reference(Organization/LaegerneHasserisBymidte)
* reasonCode.text = "John henvises til onkologisk specialundersøgelse hurtigts muligt pga mistanke om modermærkekræft"
* reasonReference = Reference(Condition/JohnMelanoma)
* subject = Reference(Patient/john)
* authoredOn = "2021-05-01"
* status = #active
* intent = #proposal
* priority = #asap

Instance: dk-marital-status
InstanceOf: ValueSet
Description: "This value set defines the set of codes that can be used to indicate the marital status of a person in Denmark."
Usage: #definition
Title: "DK Core Marital Status"
* experimental = false
* url = "http://hl7.dk/fhir/core/ValueSet/dk-marital-status"
* title = "DK MaritalStatus"
* status = #active
* publisher = "HL7 Denmark"
* contact.name = "HL7 Denmark"
* contact.telecom.system = #url
* contact.telecom.value = "https://www.hl7.dk/"
* description = "This value set defines the set of codes that can be used to indicate the marital status of a person in Denmark."
* jurisdiction = urn:iso:std:iso:3166#DK
* copyright = "CC-BY-SA-4.0"
* compose.include[0].valueSet = "http://hl7.org/fhir/ValueSet/marital-status"
* compose.include[+].system = "http://hl7.dk/fhir/core/CodeSystem/dk-marital-status"
* compose.include[=].concept[0].code = #P
* compose.include[=].concept[=].display = "Registered partnership"
* compose.include[=].concept[=].designation.language = #da
* compose.include[=].concept[=].designation.value = "Registreret partnerskab"
* compose.include[=].concept[+].code = #O
* compose.include[=].concept[=].display = "Dissolved partnership"
* compose.include[=].concept[=].designation.language = #da
* compose.include[=].concept[=].designation.value = "Ophævet partnerskab"

Instance: sor-organization-type
InstanceOf: ValueSet
Description: "Value set used for indicating the organization type for organizations from SOR"
Title: "DK Core SOR Organization Type"
Usage: #definition
* experimental = false
* url = "http://hl7.dk/fhir/core/ValueSet/sor-organization-type"
* name = "SorOrganizationType"
* status = #active
* title = "DK SOR Organization Type"
* description = "Value set used for indicating the organization type for organizations from SOR"
* copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* compose.include[0].system = "http://snomed.info/sct"
* compose.include[=].version = "http://snomed.info/sct/554471000005108"
* compose.include[=].concept[0].code = #554221000005108
* compose.include[=].concept[=].display = "Dwilling place"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Dwilling place"
* compose.include[=].concept[+].code = #546821000005103
* compose.include[=].concept[=].display = "Occupational therapy clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Occupational therapy clinic"
* compose.include[=].concept[+].code = #547011000005103
* compose.include[=].concept[=].display = "Physiotherapy clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Physiotherapy clinic"
* compose.include[=].concept[+].code = #546811000005109
* compose.include[=].concept[=].display = "Rehabilitation center"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Rehabilitation center"
* compose.include[=].concept[+].code = #550621000005101
* compose.include[=].concept[=].display = "District nursing"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "District nursing"
* compose.include[=].concept[+].code = #550631000005103
* compose.include[=].concept[=].display = "Midwife clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Midwife clinic"
* compose.include[=].concept[+].code = #550641000005106
* compose.include[=].concept[=].display = "Chiropractic clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Chiropractic clinic"
* compose.include[=].concept[+].code = #550651000005108
* compose.include[=].concept[=].display = "Medical laboratory"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Medical laboratory"
* compose.include[=].concept[+].code = #550661000005105
* compose.include[=].concept[=].display = "Emergency medical service"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Emergency medical service"
* compose.include[=].concept[+].code = #554211000005102
* compose.include[=].concept[=].display = "Prehospital unit"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Prehospital unit"
* compose.include[=].concept[+].code = #550711000005101
* compose.include[=].concept[=].display = "Psychological counseling clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Psychological counseling clinic"
* compose.include[=].concept[+].code = #550671000005100
* compose.include[=].concept[=].display = "Medical specialist practice site"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Medical specialist practice site"
* compose.include[=].concept[+].code = #554061000005105
* compose.include[=].concept[=].display = "Chiropodist clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Chiropodist clinic"
* compose.include[=].concept[+].code = #554041000005106
* compose.include[=].concept[=].display = "Health administration"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Health administration"
* compose.include[=].concept[+].code = #554021000005101
* compose.include[=].concept[=].display = "Health visitors"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Health visitors"
* compose.include[=].concept[+].code = #550681000005102
* compose.include[=].concept[=].display = "dental practice"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Dental practice"
* compose.include[=].concept[+].code = #550691000005104
* compose.include[=].concept[=].display = "Dental care clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Dental care clinic"
* compose.include[=].concept[+].code = #550701000005104
* compose.include[=].concept[=].display = "Dental technician clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Dental technician clinic"
* compose.include[=].concept[+].code = #554231000005106
* compose.include[=].concept[=].display = "Vaccination clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Vaccination clinic"
* compose.include[=].concept[+].code = #554051000005108
* compose.include[=].concept[=].display = "Reflexology clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Reflexology clinic"
* compose.include[=].concept[+].code = #550811000005108
* compose.include[=].concept[=].display = "Administrative unit"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Administrative unit"
* compose.include[=].concept[+].code = #547211000005108
* compose.include[=].concept[=].display = "Municipality"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Municipality"
* compose.include[=].concept[+].code = #550891000005100
* compose.include[=].concept[=].display = "Private"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Private"
* compose.include[=].concept[+].code = #550881000005103
* compose.include[=].concept[=].display = "Region"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Region"
* compose.include[=].concept[+].code = #550411000005105
* compose.include[=].concept[=].display = "Other health institution"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Other health institution"
* compose.include[=].concept[+].code = #554851000005102
* compose.include[=].concept[=].display = "Asylum centre"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Asylum centre"
* compose.include[=].concept[+].code = #550861000005106
* compose.include[=].concept[=].display = "Physiotherapy and occupational clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Physiotherapy and occupational clinic"
* compose.include[=].concept[+].code = #554881000005108
* compose.include[=].concept[=].display = "Handicap and psychiatry"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Handicap and psychiatry"
* compose.include[=].concept[+].code = #554861000005100
* compose.include[=].concept[=].display = "Handicap"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Handicap"
* compose.include[=].concept[+].code = #554821000005109
* compose.include[=].concept[=].display = "Home care"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Home care"
* compose.include[=].concept[+].code = #554411000005101
* compose.include[=].concept[=].display = "Employment agency"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Employment agency"
* compose.include[=].concept[+].code = #554871000005105
* compose.include[=].concept[=].display = "Psychiatry"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Psychiatry"
* compose.include[=].concept[+].code = #550821000005102
* compose.include[=].concept[=].display = "Service unit"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Service unit"
* compose.include[=].concept[+].code = #550871000005101
* compose.include[=].concept[=].display = "Emergency admission unit"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Emergency admission unit"
* compose.include[=].concept[+].code = #554241000005103
* compose.include[=].concept[=].display = "Technical location number"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Technical location number"
* compose.include[=].concept[+].code = #550841000005107
* compose.include[=].concept[=].display = "Research unit"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Research unit"
* compose.include[=].concept[+].code = #550851000005109
* compose.include[=].concept[=].display = "Clinical unit"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Clinical unit"
* compose.include[=].concept[+].code = #551611000005102
* compose.include[=].concept[=].display = "Surgical ward"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Surgical ward"
* compose.include[=].concept[+].code = #554071000005100
* compose.include[=].concept[=].display = "Hospital pharmacy"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Hospital pharmacy"
* compose.include[=].concept[+].code = #550831000005104
* compose.include[=].concept[=].display = "Education unit"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Education unit"
* compose.include[=].concept[+].code = #554031000005103
* compose.include[=].concept[=].display = "dietician clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Dietician clinic"
* compose.include[=].concept[+].code = #557511000005107
* compose.include[=].concept[=].display = "Acupuncture clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Acupuncture clinic"
* compose.include[=].concept[+].code = #557501000005109
* compose.include[=].concept[=].display = "Pharmacy branch"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Pharmacy branch"
* compose.include[=].concept[+].code = #557531000005103
* compose.include[=].concept[=].display = "Prosthetist clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Prosthetist clinic"
* compose.include[=].concept[+].code = #557591000005104
* compose.include[=].concept[=].display = "Web-based care"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Web-based care"
* compose.include[=].concept[+].code = #557521000005101
* compose.include[=].concept[=].display = "Alternative treatment clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Alternative treatment clinic"
* compose.include[=].concept[+].code = #557561000005105
* compose.include[=].concept[=].display = "Consulting firm"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Consulting firm"
* compose.include[=].concept[+].code = #557541000005106
* compose.include[=].concept[=].display = "Cosmetic treatment clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Cosmetic treatment clinic"
* compose.include[=].concept[+].code = #557581000005102
* compose.include[=].concept[=].display = "Optometrist or optician clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Optometrist or optician clinic"
* compose.include[=].concept[+].code = #556841000005105
* compose.include[=].concept[=].display = "Social psychological counseling"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Social psychological counseling"
* compose.include[=].concept[+].code = #557671000005101
* compose.include[=].concept[=].display = "Osteopathy clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Osteopathy clinic"
* compose.include[+].system = "http://snomed.info/sct"
* compose.include[=].concept[0].code = #398070004
* compose.include[=].concept[=].display = "State"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "State"
* compose.include[=].concept[+].code = #394761003
* compose.include[=].concept[=].display = "General practitioner practice site"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "General practitioner practice site"
* compose.include[=].concept[+].code = #20078004
* compose.include[=].concept[=].display = "Substance abuse treatment center"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Substance abuse treatment center"
* compose.include[=].concept[+].code = #722173008
* compose.include[=].concept[=].display = "Prison based care site"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Prison based care site"
* compose.include[=].concept[+].code = #702871004
* compose.include[=].concept[=].display = "Infertility clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Infertility clinic"
* compose.include[=].concept[+].code = #276037005
* compose.include[=].concept[=].display = "Volunteer helper"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Volunteer helper"
* compose.include[=].concept[+].code = #22232009
* compose.include[=].concept[=].display = "Hospital"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Hospital"
* compose.include[=].concept[+].code = #702824005
* compose.include[=].concept[=].display = "Audiology clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Audiology clinic"
* compose.include[=].concept[+].code = #42665001
* compose.include[=].concept[=].display = "Nursing home"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Nursing home"
* compose.include[=].concept[+].code = #264361005
* compose.include[=].concept[=].display = "Health centre"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Health centre"
* compose.include[=].concept[+].code = #703069008
* compose.include[=].concept[=].display = "Nurse practitioner clinic"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Nurse practitioner clinic"
* compose.include[=].concept[+].code = #309964003
* compose.include[=].concept[=].display = "Radiology department"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Radiology department"
* compose.include[=].concept[+].code = #309904001
* compose.include[=].concept[=].display = "Intensive care unit"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Intensive care unit"
* compose.include[=].concept[+].code = #309939001
* compose.include[=].concept[=].display = "Palliative care department"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Palliative care department"
* compose.include[=].concept[+].code = #225728007
* compose.include[=].concept[=].display = "Accident and Emergency department"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Accident and Emergency department"
* compose.include[=].concept[+].code = #255203001
* compose.include[=].concept[=].display = "Additional values"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Additional values"
* compose.include[=].concept[+].code = #264372000
* compose.include[=].concept[=].display = "Pharmacy"
* compose.include[=].concept[=].designation.language = #en-US
* compose.include[=].concept[=].designation.value = "Pharmacy"

---

// File: input/fsh/KombitOrgIdentifier.fsh

Profile: KombitOrgIdentifier
Parent: Identifier
Id: dk-core-kombit-org-identifier
Title: "Kombit Organsation Identifier"
Description: "Identifier holding the organization code issued by KOMBIT"
* use = #official (exactly)
* system 1..
* system = "https://kombit.dk/sts/organisation" (exactly)
* value 1..
  * obeys uuid

Invariant: uuid
Description: "General UUID expression"
Severity: #error
Expression: "matches('urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')"

---

// File: input/fsh/Lpr3Identifier.fsh

/* Profile: Lpr3Identifier
Parent: Identifier
Id: lpr3-Identifier
Title: "LPR3 Identifier"
Description: "Identifier holding a LPR3 identifier for an organization"
* system 1..
* system = "https://www.esundhed.dk/Registre/Landspatientsregisteret" (exactly)
* value 1..
  * obeys uuidv5

Invariant: uuidv5
Description: "LPR3 episode of care identifiers must conform to a UUIDv5"
Severity: #error
Expression: "matches('urn:uuid:[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[5][a-fA-F0-9]{3}-[89aAbB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}')"
* requirements = "LPR3 episode of care identifiers must conform to a UUIDv5"
* source = "https://scandihealth.github.io/lpr3-docs/"
*/



---

// File: input/fsh/ProducentId.fsh

Profile: ProducentId
Parent: Identifier
Id: dk-core-producent-id
Title: "Producent Id"
Description: "Offical MedCom code describing the producer of lab results"
* use = #official (exactly)
* system 1..
* system = "http://medcomfhir.dk/ig/terminology/CodeSystem/MedComProducentID" (exactly)
* value 1..


---

// File: input/fsh/SORIdentifier.fsh

Profile: SORIdentifier
Parent: Identifier
Id: dk-core-sor-identifier
Title: "SOR Identifier"
Description: "Identifier holding the official SOR identifier for a danish healthcare organization"
* use = #official (exactly)
* system 1..
* system = "urn:oid:1.2.208.176.1.1" (exactly)
* value 1..
  * obeys min-digits-sor

Invariant: min-digits-sor
Description: "SOR Identifiers are at minimum 11 digits long. See https://sundhedsdatastyrelsen.dk/da/rammer-og-retningslinjer/organisationsregistrering"
Severity: #error
Expression: "matches('^([0-9]){11,}$')"
* requirements = "SOR Identifiers are at minimum 11 digits long"


---

// File: input/fsh/valueSets.fsh

ValueSet: DkCoreProfessionGroupValueSet
Id: DkCoreProfessionGroupValueSet
Title: "DK Profession Group"
Description: "DK Profession Group codes"
* ^experimental = false
* ^status = #active
* include codes from system DkCoreProfessionGroupCodes

ValueSet: MunicipalityCodes
Id: dk-core-MunicipalityCodes
Title: "DK Municipality Codes"
Description: "Municipality codes used in Denmark"
* ^experimental = false
* include codes from system MunicipalityCodes
* include codes from system GreenlandMunicipalityCodes

ValueSet: RegionalSubdivisionCodes
Id: dk-core-RegionalSubDivisionCodes
Title: "DK Regional Subdivision Codes"
Description: "Subdivision codes (Regional codes) used in Denmark"
* ^experimental = false
* include codes from system DKCoreRegionalSubdivisionCodes

ValueSet: LoincBasicObservation
Id: dk-core-LoincBasicObservation
Title: "DK Core LOINC Basic Observations"
Description: "LOINC codes describing Basic Observations usable in Denmark."
* ^experimental = false
* $LOINC#9279-1 "Respiratory rate"
* $LOINC#8867-4 "Heart rate"
* $LOINC#2708-6 "Oxygen saturation in Arterial blood"
* $LOINC#8310-5 "Body temperature"
* $LOINC#85353-1 "Vital signs, weight, height, head circumference, oxygen saturation & BMI panel"
* $LOINC#8302-2 "Body height"
* $LOINC#9843-4 "Head Occipital-frontal circumference"
* $LOINC#29463-7 "Body weight"
* $LOINC#39156-5 "Body mass index (BMI) [Ratio]"
* $LOINC#85354-9 "Blood pressure panel with all children optional"
* $LOINC#8480-6 "Systolic blood pressure"
* $LOINC#8462-4 "Diastolic blood pressure"
* $LOINC#8478-0 "Mean blood pressure"
* $LOINC#59408-5 "Oxygen saturation in Arterial blood by Pulse oximetry"

ValueSet: SCTBasicObservation
Id: dk-core-SCTBasicObservation
Title: "DK Core SNOMED CT Basic Observation"
Description: "SNOMED CT codes for Basic Observations usable in Denmark"
* ^experimental = false
//Vital signs
* $sct#446226005 //Diastolic blood pressure on admission 
* $sct#400975005 //Standing diastolic blood pressure 
* $sct#407557002 //Lying diastolic blood pressure    
* $sct#407555005 //Sitting diastolic blood pressure  
* $sct#271650006 //Diastolic blood pressure
* $sct#72313002  //Systolic arterial pressure
* $sct#400974009 //Standing systolic blood pressure  
* $sct#399304008 //Systolic blood pressure on admission  
* $sct#407556006 //Lying systolic blood pressure 
* $sct#407554009 //Sitting systolic blood pressure   
* $sct#271649006 //Systolic blood pressure
* codes from system $sct where concept is-a #431314004 //SpO2
* $sct#422119006 //Brachial pulse rate   
* $sct#429614003 //Posterior tibial pulse rate   
* $sct#429525003 //Dorsalis pedis pulse rate 
* $sct#399017001 //Heart rate on admission   
* $sct#78564009  //Pulse rate    
* $sct#444981005 //Resting heart rate    
* $sct#364075005 //Heart rate
* $sct#424927000 //Body weight with shoes  
* $sct#445541000 // Dry body weight  
* $sct#425024002 // Body weight without shoes    
* $sct#364589006 //Birth weight  
* $sct#27113001  //Body weight
* codes from system $sct where concept is-a #86290005 //(Respiratory rate)
* codes from system $sct where concept is-a #276885007 // Core Body temperature
* $sct#1153637007 //Body height (observable entity)|
* $sct#248333004 //|Standing height (observable entity)|
* $sct#1149101003 //|Recumbent body height|
* $sct#1162392001 //|Pre-amputation measured body height|


ValueSet: IEEEBasicObservation
Id: dk-core-IEEEBasicObservation
Title: "Dk Core IEEE Basic Observation"
Description: "IEEE MDC codes for Basic Observations usable in Denmark"
* ^experimental = false
* ^copyright = "IEEE"
* ^purpose = """
### Purpose of this ValueSet
This ValueSet comprises the most common IEEE MDC codes used to represent observations
that are considered "basic" by this profile. This ValueSet is **not** meant to be exhaustive!

The origin of an MDC code is usually the equipment used to perform the measurement,
and often the code carries supplemental information about how (or where on the body)
the observation was performed.
"""
* $IEEEx73#151562 "MDC_RESP_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of breathing; method not specified."
* $IEEEx73#151570 "MDC_AWAY_RESP_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of breathing; method: direct airway flow measurement."
* $IEEEx73#151578 "MDC_TTHOR_RESP_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of breathing; method: transthoracic impedance variations."
* $IEEEx73#151594 "MDC_CO2_RESP_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of breathing; method: carbon dioxide measurement."
* $IEEEx73#151602 "MDC_PRESS_RESP_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of breathing; method: non-airway pressure measurement, e.g. central venous blood pressure (CVP)."
* $IEEEx73#151650 "MDC_ACOUSTIC_RESP_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of breathing; method: acoustic."
* $IEEEx73#151658 "MDC_PULS_OXIM_PLETH_RESP_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of breathing; method: SpO2 plethysmography."
* $IEEEx73#8410992 "MDC_SABTE_RESP_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Value of respiration rate. [measured by sleep apnoea breathing therapy equipment]"
* $IEEEx73#149514 "MDC_PULS_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of blood pulse in an artery."
* $IEEEx73#149522 "MDC_BLD_PULS_RATE_INV"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of blood pulse in an artery, measured invasively."
* $IEEEx73#149546 "MDC_PULS_RATE_NON_INV"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of blood pulse in an artery, measured non-invasively."
* $IEEEx73#149530 "MDC_PULS_OXIM_PULS_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of blood pulse as obtained by pulse oximetry."
* $IEEEx73#147842 "MDC_ECG_HEART_RATE" 
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rate of cardiac beats (ECG)."
* $IEEEx73#8410590 "MDC_ECG_HEART_RATE_INSTANT"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Instantaneous heart rate."
* $IEEEx73#149554 "MDC_TTHOR_HEART_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Heart rate obtained from the variation of transthoracic impedance."
* $IEEEx73#149562 "MDC_PALPATION_HEART_RATE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Heart rate obtained from an artery that is close to the surface and a pulse can be felt."
* $IEEEx73#8454258 "MDC_HF_HR"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "This is an object representing the heart rate over a period of time. [Exercise / fitness equipment]"
* $IEEEx73#150324 "MDC_SAT_O2_ART"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Arterial oxygen saturation. [no method]"
* $IEEEx73#150456 "MDC_PULS_OXIM_SAT_O2"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Oxygen saturation. [using pulse oximetry]"
* $IEEEx73#150364 "MDC_TEMP_BODY"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Body temperature. [unspecified]"
* $IEEEx73#150368 "MDC_TEMP_CORE"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Core temperature."
* $IEEEx73#150388 "MDC_TEMP_SKIN"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Skin temperature."
* $IEEEx73#150392 "MDC_TEMP_TYMP"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Tympanic temperature."
* $IEEEx73#188420 "MDC_TEMP_RECT" 
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Rectal temperature."
* $IEEEx73#188424 "MDC_TEMP_ORAL"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Oral temperature."
* $IEEEx73#188428 "MDC_TEMP_EAR"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Ear temperature."
* $IEEEx73#188452 "MDC_TEMP_AXILLA" 
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Axillary (armpit) temperature."
* $IEEEx73#188456 "MDC_TEMP_GIT"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Gastro-intestinal tract temperature."
* $IEEEx73#188740 "MDC_LEN_BODY_ACTUAL"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "The actual height of the patient."
* $IEEEx73#153856 "MDC_CIRCUM_HEAD"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Circumference of the head."
* $IEEEx73#188736 "MDC_MASS_BODY_ACTUAL"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "The measurement of the mass of patient."
* $IEEEx73#188752 "MDC_RATIO_MASS_BODY_LEN_SQ"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "The individual's body weight, in kilograms, divided by the square of height, in meters."
* $IEEEx73#150020 "MDC_PRESS_BLD_NONINV" 
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Pressure of the blood, obtained noninvasively."
* $IEEEx73#150021 "MDC_PRESS_BLD_NONINV_SYS"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Pressure of the blood, obtained noninvasively, at the systolic phase."
* $IEEEx73#150022 "MDC_PRESS_BLD_NONINV_DIA"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Pressure of the blood, obtained noninvasively, at the diastolic phase."
* $IEEEx73#150023 "MDC_PRESS_BLD_NONINV_MEAN"
  * ^designation.use = $sct#900000000000003001
  * ^designation.value = "Pressure of the blood, obtained noninvasively, as computed by averaging on one cycle."

ValueSet: NPUBasicObservation
Id: dk-core-NPUBasicObservation
Title: "DK Core NPU Basic Observation"
Description: "NPU codes for Basic Observations usable in Denmark"
* ^experimental = false
* $NPU#NPU03011 "Hb(Fe; O₂-bind.;aB)—Oxygen(O₂); sat. = ?"
* $NPU#NPU27280 "Hb(Fe; O₂-bind.;aB)—Oxygen(O₂); sat.(Pulse oximetry) = ?"
* $NPU#NPU04034 "Pt(spec.)—Blood; temp. = ? °C"
* $NPU#NPU08676 "Pt—Body; temp. = ? °C"
* $NPU#NPU58033 "Artery(spec.)—Blood pressure(systolic); pr.(proc.) = ? mmHg"
* $NPU#NPU57947 "Artery(spec.)—Blood; pr.(systolic;proc.) = ? mmHg"
* $NPU#NPU58034 "Artery(spec.)—Blood pressure(diastolic); pr.(proc.) = ? mmHg"
* $NPU#NPU57948 "Artery(spec.)—Blood; pr.(diastolic;proc.) = ? mmHg"
* $NPU#NPU21692 "Heart—Systole; freq. = ? * 1/min"
* $NPU#NPU03794 "Pt—Body; height = ? m"
* $NPU#NPU03804 "Pt—Body; mass = ? kg"
* $NPU#NPU27281 "Pt—Body; mass coefficient(mass/squared height) = ? kg/m²"

ValueSet: UCUMBasicUnits
Id: dk-core-UCUM-BasicUnits
Title: "DK Core UCUM Basic Units"
Description: "UCUM codes to represent units for basic Observations usable in Denmark"
* ^experimental = false
* $ucum#% "percent"
* $ucum#cm "centimeter"
* $ucum#[in_i] "inch (international)"
* $ucum#kg "kilogram"
* $ucum#g "gram"
* $ucum#[lb_av] "pound (US and British)"
* $ucum#Cel "degree Celsius"
* $ucum#[degF] "degree Fahrenheit"
* $ucum#mm[Hg] "millimeter of mercury"
* $ucum#/min "per minute"
* $ucum#kg/m2 "kilogram / (meter ^ 2)"
* $ucum#m2 "square meter"
* $ucum#{fraction} "fraction"

ValueSet: TechniquesSCTCodes
Id: dk-core-TechniquesSCTCodes
Title: "DK TechniquesSCTCodes"
Description: "SNOMED CT Codes for the technique used when obtaining an observation"
* ^experimental = false
* $sct#761996005 "Estimation technique (qualifier value)"
* $sct#733985002 "Reported (qualifier value)"
* $sct#272391002 "Measurement technique (qualifier value)"

ValueSet: DkCoreDeCPRValueSet
Id: DkCoreDeCPRValueSet
Title: "DK D-eCPR OID values"
Description: "DK D-eCPR OID values"
* ^experimental = false
* ^status = #active
* include codes from system DkCoreDeCPRCodes

ValueSet: RelatedPersonRelationshipTypes
Id: dk-core-RelatedPersonRelationshipTypes
Title: "DK Related Person Relationship Types"
Description: "DK Related Person Relationship Types"
* ^experimental = false
* ^status = #active
* $v3-RoleCode#FAMMEMB // "family member"
* $v3-RoleCode#CHILD // "child"
* $v3-RoleCode#DAUC // "daughter"
* $v3-RoleCode#SONC // "son"
* $v3-RoleCode#GRNDCHILD // "grandchild"
* $v3-RoleCode#CHLDINLAW // "child-in-law"
* $v3-RoleCode#PRN // "parent"
* $v3-RoleCode#FTH // "father"
* $v3-RoleCode#MTH // "mother"
* $v3-RoleCode#SIB // "sibling"
* $v3-RoleCode#DOMPART // "domestic partner"
* $v3-RoleCode#SPS // "spouse"
* $v3-RoleCode#FRND // "unrelated friend"
* $v3-RoleCode#NBOR // "neighbor"
* $v3-RoleCode#ROOM // "Roommate"
* $v3-RoleCode#GUARD // "guardian"
* $v3-RoleCode#NOK // "next of kin"
* $v3-RoleCode#POWATT // "power of attorney"
* $v3-RoleCode#ECON // "emergency contact"
* include codes from system DkRelatedPersonRelationshipCodes

---

