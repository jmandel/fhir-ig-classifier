File: repos/HL7_SLASH_dicom-sr/sushi-config.yaml

# ╭─────────────────────────────────ImplementationGuide-fish.json──────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  https://fshschool.org/docs/sushi/configuration/#full-configuration                            │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.dicom-sr
canonical: http://hl7.org/fhir/uv/dicom-sr
version: 1.0.0
name: DICOMSRToFHIRResourceMappingIG
title: DICOM® SR to FHIR Resource Mapping IG
status: draft
publisher: 
  - name: HL7 International / Imaging Integration
  - url: http://www.hl7.org/Special/committees/imagemgt
contact:
  - name: HL7 International / Imaging Integration
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/imagemgt
  - name: Jonathan Whitby
    telecom:
      - system: email
        value: jonathan.whitby@mi.medical.canon
      - system: url
        value: http://www.hl7.org/Special/committees/imagemgt
  - name: Christopher Lindop
    telecom:
      - system: email
        value: Christopher.Lindop@ge.com
      - system: url
        value: http://www.hl7.org/Special/committees/imagemgt
description: Provides guidance for extracting key content from DICOM® Structured Report (SR) objects into FHIR Observations to make use of the results with  the larger hospital enterprise.
jurisdiction: "http://unstats.un.org/unsd/methods/m49/m49.htm#001"
license: CC0-1.0
fhirVersion: 5.0.0
copyrightYear: 2024+
releaseLabel: STU1 Ballot
dependencies:
  fhir.dicom:
    id: DICOM
    uri: http://fhir.org/packages/fhir.dicom
    version: 2024.2.20240331
parameters:
  show-inherited-invariants: false
  usage-stats-opt-out: true
  apply-contact: true
  apply-context: true
  apply-copyright: true
  apply-jurisdiction: true
  apply-license: true
  apply-publisher: true
  apply-version: true
  auto-oid-root: 2.16.840.1.113883.4.642.40.39

extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: ii
pages:
  index.md:
    title: Home
    generation: markdown
  background.md:
    title: Background
    generation: markdown
  architecture.md:
    title: Architecture
    generation: markdown
  mapping.md:
    title: Mapping
    generation: markdown
  example.md:
    title: Example
    generation: markdown

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  IG Home: index.html
  Contents: toc.html
  Background: background.html
  Architecture: architecture.html
  Mapping: mapping.html
  Example: example.html
  Artifact Index: artifacts.html


---

// File: input/pagecontent/architecture.md

This chapter describes the architecture of this implementation guide.

### Profiles & Extensions
#### Resource Profiles
<figure>
  {% include dicom_sr_resource_relationships.svg %}
  <figcaption><b>Figure: IG Resource Relationships</b></figcaption>
  <p></p>
</figure>

##### Observation
The mapping of the core DICOM SR measurement groups, measurements and qualitative analysis content items are covered by the following resource profiles:

* [Imaging Measurement Group](StructureDefinition-imaging-measurement-group.html) profiles the Observation resource representing DICOM SR measurement group templates:
    * [DTID 1410 “Planar ROI Measurements and Qualitative Evaluations”](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410)
    * [DTID 1411 “Volumetric ROI Measurements and Qualitative Evaluations”](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1411)
    * [DTID 1501 “Measurement and Qualitative Evaluation Group”](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1501)

* [Imaging Measurement](StructureDefinition-imaging-measurement.html) profiles the Observation resource representing imaging measurements extracted from DICOM SR measurement templates:
    * [DTID 300 “Measurement”](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_300)
    * [DTID 1419 “ROI Measurements”](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1419)
    
* [Derived Imaging Measurement](StructureDefinition-derived-imaging-measurement.html) profiles the Observation resource representing the DICOM SR derived measurement template [DTID 1420 “Measurements Derived From Multiple ROI Measurements”](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1420)

* [Imaging Qualitative Evaluation](StructureDefinition-imaging-qualitative-evaluation.html) profiles the Observation resource representing qualitative evaluation content items extracted from DICOM SR measurement templates:
    * [DTID 1500 “Measurement Report”](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1500)
        * Children of Content Item with Concept Name UMLS#C0034375 "Qualitative Evaluations" 
    * [DTID 1501 “Measurement and Qualitative Evaluation Group”](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1501)
        * Select `CODE` and `TEXT` children of Content Item with Concept Name DCM#125007 "Measurement Group"

The above resource profiles depend on the following resource profiles:
##### ImagingSelection
* [Image Region -- 2D](StructureDefinition-image-region-2d.html) profiles the ImagingSelection resource representing a referenced 2D image region content item [CID 111030 "Image Region"](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_111030)
* [Image Region -- 3D](StructureDefinition-image-region-3d.html) profiles the ImagingSelection resource representing a referenced 3D image region content item [CID 111030 "Image Region"](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_111030)
* [Referenced Segment](StructureDefinition-referenced-segment.html) profiles the ImagingSelection resource representing a referenced segment content item [CID 121191 "Referenced Segment"](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_121191)
* [Referenced Segmentation Frame](StructureDefinition-referenced-segmentation-frame.html) profiles the ImagingSelection resource representing a referenced segmentation frame content item [CID 121214 "Referenced Segmentation Frame"](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_121214)
* [Region In Space](StructureDefinition-region-in-space.html) profiles the ImagingSelection resource representing a referenced RT Structure Set content item [CID 130488 "Region in Space"](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_130488)
* [Volume Surface](StructureDefinition-volume-surface.html) profiles the ImagingSelection resource representing a referenced volume surface content item [CID 121231 "Volume Surface"](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_121231)
* [Real World Value Map](StructureDefinition-real-world-value-map.html) profiles the ImagingSelection resource representing a referenced real world value map content item [CID 126100 "Real World Value Map used for measurement"](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_126100)
* [Illustration of ROI](StructureDefinition-illustration-of-roi.html) profiles the ImagingSelection resource representing a referenced ROI illustration content item [CID 121200 "Illustration of ROI"](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_121200)
* [Visual explanation](StructureDefinition-visual-explanation.html) profiles the ImagingSelection resource representing a referenced visual explanation content item [CID 130401 "Visual explanation](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_D.html#DCM_130401)

##### Device
* [Algorithm Identification](StructureDefinition-algorithm-identification.html) profiles the Device resource representing the DICOM SR template [DTID 4019 “Algorithm Identification”](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/sect_TID_4019.html)
* [General Equipment](StructureDefinition-dicom-general-equipment.html) profiles the Device resource representing the DICOM General Equipment Module [DICOM PS3.3 C.7.5.1 General Equipment Module](https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.5.html#sect_C.7.5.1)

##### BodyStructure
* [Finding Site](StructureDefinition-dicom-sr-finding-site.html) profiles the BodyStructure resource representing a finding site content item [CID SCT#363698007 "Finding Site"](http://snomed.info/id/363698007)

#### Supporting DataType Profiles
There is no special supporting DataType profiles defined by this IG.

#### Supporting Extensions
There is no special supporting extensions defined by this IG.

#### Profile Relationships
##### DICOM SR Basics
The content of a DICOM SR is a tree of "content items". Each content item has:
* a coded "Concept Name" describing the content item
* a "Value Type"
* a value (for most value types)
* zero or more children, each of which is also a content item[^1]

The content item value types relevant to this implementation guide are:
* `CONTAINER`: a container with children but no value
* `NUM`: a numerical value with units
* `TEXT`: a textual value
* `CODE`: a coded value
  * Note that a `CODE` content item has a coded concept name *and* a coded value

##### Relationship to DICOM SR TID 1500 Measurement Report
This implementation guide maps content items contained within the DICOM TID 1500 Measurement Report to FHIR resources.

All mapped content items are children of the following `CONTAINER` content items:

| Container Concept Name | Child FHIR Resource Profile | Notes |
| ----------------- | --------------------- | ----- |
| DCM#126010 "Imaging Measurements" | [Imaging Measurement Group](StructureDefinition-imaging-measurement-group.html) | See [Imaging Measurement Group relationship](#imaging-measurement-group-relationship) | 
| DCM#126011 "Derived Imaging Measurements" | [Derived Imaging Measurements](StructureDefinition-derived-imaging-measurement.html) | See [Derived Imaging Measurements relationship](#derived-imaging-measurements-relationship) |
| UMLS#C0034375 "Qualitative Evaluations" | [Imaging Qualitative Evaluation](StructureDefinition-imaging-qualitative-evaluation.html) | See [Imaging Qualitative Evaluations relationship](#imaging-qualitative-evaluations-relationship) |

e.g. the children of the `CONTAINER` with a Concept Name of DCM#126010 "Imaging Measurements" are mapped to [Measurement Group](StructureDefinition-imaging-measurement-group.html) Observations.

<figure>
  {% include tid_1500_measurement_report.svg %}
  <figcaption><b>Figure: TID 1500 Measurement Report and its children Overview</b></figcaption>
  <p></p>
</figure>

###### Imaging Measurement Group Relationship
An Imaging Measurement Group `CONTAINER` contains 0-n `NUM` content items representing numerical measurements. Each of these is mapped to an [Imaging Measurement](StructureDefinition-imaging-measurement.html) Observation.

An Imaging Measurement Group `CONTAINER` contains 0-n `TEXT` or `CODE` content items representing qualitative evaluations. Each of these is mapped to an [Imaging Qualitative Evaluation](StructureDefinition-imaging-qualitative-evaluation.html) Observation. 

The Imaging Measurement Group `CONTAINER` is mapped to a [Imaging Measurement Group](StructureDefinition-imaging-measurement-group.html) Observation. 

The [Imaging Measurement Group](StructureDefinition-imaging-measurement-group.html) Observation `hasMember` element references the child [Imaging Measurement](StructureDefinition-imaging-measurement.html) and [Imaging Qualitative Evaluation](StructureDefinition-imaging-qualitative-evaluation.html) Observations.

**Note:** Not all `TEXT` or `CODE` content items contained within the Imaging Measurement Group represent qualitative evaluations. 

A `TEXT` or `CODE` child content item should only be interpreted as a qualitative evaluation if it does **not** have a Concept Name from the following list:

* DCM#112039 "Tracking Identifier"
* DCM#121071 "Finding"
* DCM#130400 "Geometric purpose of region"
* NCIt#C67447 "Activity Session"
* SCT#276214006 "Finding Category"
* SCT#363698007 "Finding Site"
* SCT#370129005 "Measurement Method"


###### Derived Imaging Measurements Relationship
A Derived Imaging Measurement `CONTAINER` contains 0-n `NUM` content items representing derived numerical measurements. Each of these is mapped to a [Derived Measurement](StructureDefinition-derived-imaging-measurement.html) Observation.

A Derived Imaging Measurement `CONTAINER` contains 0-n Imaging Measurement Group `CONTAINER` content items. Each of these is mapped to an [Imaging Measurement Group](StructureDefinition-imaging-measurement-group.html) Observation (see [Imaging Measurement Group relationship](#imaging-measurement-group-relationship)).

The [Derived Imaging Measurements](StructureDefinition-derived-imaging-measurement.html) Observation `derivedFrom` element references the child [Imaging Measurement Group](StructureDefinition-imaging-measurement-group.html) Observations. 


###### Imaging Qualitative Evaluations Relationship
An Imaging Qualitative Evaluations `CONTAINER` contains 0-n `TEXT` or `CODE` content items representing qualitative evaluations. Each of these is mapped to an [Imaging Qualitative Evaluation](StructureDefinition-imaging-qualitative-evaluation.html) Observation.


##### Device Relationship
A FHIR Observation can only have a single `device` value. However, a DICOM SR can have two types of devices:
* The equipment that created the SR
* An algorithm used to create the Observation
  
The DICOM SR General Equipment Module attributes are mapped to an [General Equipment](StructureDefinition-dicom-general-equipment.html) Device.

If an [Imaging Measurement Group](StructureDefinition-imaging-measurement-group.html), [Imaging Measurement](StructureDefinition-imaging-measurement.html) or [Imaging Qualitative Evaluation](StructureDefinition-imaging-qualitative-evaluation.html) has a child with Concept Name DCM#111001 "Algorithm Name" then it is mapped to an [Algorithm Identification](StructureDefinition-algorithm-identification.html) Device.

All algorithm devices will use the [General Equipment](StructureDefinition-dicom-general-equipment.html) Device to populate the `parent` element.

If an [Imaging Measurement Group](StructureDefinition-imaging-measurement-group.html), [Imaging Measurement](StructureDefinition-imaging-measurement.html) or [Imaging Qualitative Evaluation](StructureDefinition-imaging-qualitative-evaluation.html) does not have a defined device then the `device` element references the [Equipment](StructureDefinition-dicom-general-equipment.html) Device.

<figure>
  {% include dicom_sr_device.svg %}
  <figcaption><b>Figure: DICOM SR Device relationships Overview</b></figcaption>
  <p></p>
</figure>
e.g. 
* If an Imaging Qualitative Evaluation is part of an Imaging Measurement Group:
  * If both have a defined Algorithm Identification Device, both devices will be created and each will have the Equipment Device as its parent.
  * If the Imaging Qualitative Evaluation does not have a defined Algorithm Identification Device it's `device` element will reference the Equipment Device

##### Other Resource Relationships

All DICOM SOP Instances include information relating to the patient, service request, procedure, etc.

Typically, these resources are managed by the EMR and the imaging system is not able to create or update these resources in the FHIR server.

Therefore, this implementation guide assumes that these resources already exist in the destination FHIR server and does not include a full mapping between their DICOM representation and their FHIR representation.

Instead, it specifies the identifier mapping to allow newly-created resources to be associated with the appropriate existing FHIR resources.

See [DICOM SR Information Object Definition (IOD) Mapping to FHIR](ConceptMap-dicom-sr-measurement-report-to-fhir.html) and [DICOM SR Document Information Entity (IE) Mapping to FHIR](ConceptMap-dicom-document-ie-to-fhir.html).

### Actors

### Terminology

### Security Consideration
Exchanging imaging measurement report resources makes use of patient-specific information which could be exploited by malicious actors resulting in exposure of patient data. For these reasons, all data exchange between the different actors must be secured appropriately with access to limited authorized individuals, data protected in transit, and appropriate audit measures taken. 

Implementers SHOULD be aware of these [security considerations](http://hl7.org/fhir/R5/security.html){:target="_blank"} associated with FHIR transactions, particularly those related to:

* [Communications](http://hl7.org/fhir/R5/security.html#http){:target="_blank"}
* [Authentication](http://hl7.org/fhir/R5/security.html#authentication){:target="_blank"}
* [Authorization/Access Control](http://hl7.org/fhir/R5/security.html#binding){:target="_blank"}
* [Audit Logging](http://hl7.org/fhir/R5/security.html#audit){:target="_blank"}
* [Digital Signatures](http://hl7.org/fhir/R5/signatures.html){:target="_blank"}
* [Security Labels](http://hl7.org/fhir/R5/security-labels.html){:target="_blank"}
* [Narrative](http://hl7.org/fhir/R5/security.html#narrative){:target="_blank"}

These security requirements are highlighted in the context of this IG:
* Systems **SHALL** keep audit logs of the various transactions. Some auditing workflows can be used like IHE ATNA or Restful ATNA.
* Systems **SHALL** use TLS version 1.2 or higher for all transmissions not taking place over a secure network connection. IHE ATNA may be followed for the TLS usage.
* Systems **SHALL** conform to FHIR [Communications Security requirements](http://hl7.org/fhir/R5/security.html#http){:target="_blank"}.
* Systems **SHALL** implement consent requirements per their country, state, local, and institutional policies.

[^1]: D. Clunie, DICOM Structured Reporting, PixelMed Publishing, 2000, p. 32 [E-book](http://www.pixelmed.com/srbook.html)

---

// File: input/pagecontent/background.md

This chapter describes the scope of this guide, provides background information, key concepts,
and describes the use cases supported by this implementation guide.

1. [Problem](#problem) - Description of the Problem
2. [Scope](#scope) - Scope of the IG
3. [Intended Readers](#intended-readers) - Intended readers of the IG
4. [Use cases](#use-cases) - Key use cases covered by the IG
5. [Excluded use cases](#excluded-use-cases) - Excluded use cases
6. [FHIR Version 4 compatibility](#fhir-version-4-compatibility) - Compatibility with FHIR R4
7. [Glossary](#glossary) - Glossary of terms used in this IG
8. [References](#references) - Useful references
9. [IG Dependencies](background.html#ig-dependencies) - Dependencies on other IGs
10. [Global Profiles](background.html#global-profiles) - Global profiles used in this IG
11. [Copyrights](background.html#copyrights) - Copyrights and acknowledgments

### Problem

DICOM® Structured Report (DICOM® SR) is a standard for recording clinical imaging observations made regarding a diagnostic or interventional imaging procedure. Imaging Observations are made by humans, such as a sonographer making measurements on recently acquired ultrasound image, a Radiologist recording observations on suspected lesions, or by a machine, such as an automated AI Algorithm providing qualitative and quantitative observations.

DICOM® SR is widely adopted by Imaging-based devices and IT systems. Non-imaging based Healthcare IT Systems, generally, do not support DICOM® SR. Non-imaging healthcare systems support HL7 standards, such as FHIR. HL7 has defined the Observation resource as the standardized method for recording clinical observations. Bridging the two standards for clinical imaging observations is necessary for interoperability between these type of systems.

### Scope

The standards for recording clinical observations, DICOM® SR and HL7 FHIR Observation resource are bridged by this IG by the transformation of the DICOM SR attributes to the HL7 FHIR Observation Resource.

DICOM SR defines a multitude of templates for capturing Diagnostic imaging Observations. The input for this IG is limited to the DICOM SR template TID-1500 (Measurement Report).

The transformation described is one direction. It may not be possible to reconstruct a complete DICOM SR from a set of FHIR resources created based on this IG.

DICOM SR mapping is limited to the Observation Resource and a small set of related resources. The resultant mapping is provided, as a minimum, a composition or bundle of Observations. Depending on the use case, the observations may be part of or contained in a Diagnostic Report. Use case-specific requirements to construct a diagnostic report(e.g. Mammography) may require the transformation described by this IG. However, the specification of those use cases is not in scope for this IG.

Therefore, Observations created according to this IG may not include all context relevant to their interpretation.

### Intended Readers
This Implementation Guide is intended for

* clinical users of structured imaging data,
* implementers of other health information systems wishing to use imaging data encapsulated using DICOM SR.
* imaging device, image analysis and AI algorithm developers and imaging gateway system developers creating DICOM SR.


### Use cases

#### Use case 1: Extracting imaging results for use in reporting
<figure>
  {% include dicom_sr_report_extraction.svg %}
  <figcaption><b>Figure: Use Case 1 Overview</b></figcaption>
  <p></p>
</figure>
#### Use case 2: Extracting imaging results for FHIRcast content sharing
<figure>
  {% include fhircast_content_sharing.svg %}
  <figcaption><b>Figure: Use Case 2 Overview</b></figcaption>
  <p></p>
</figure>
### Excluded use cases
The following use cases are not covered by this Implementation Guide:
* DICOM SR templates other than TID1500
* Creating a FHIR DiagnosticReport or Composition from a DICOM SR
* Creating HL7 v2 or v3 results from a DICOM SR

### FHIR Version 4 compatibility
This implementation guide is based on FHIR R5 and makes extensive use of the `ImagingSelection` resource, which is not present in FHIR R4.

However, the core mapping of DICOM SR to FHIR Observation resources is compatible with FHIR R4. 

The `ImagingSelection` resource is used to provide specific imaging context for imaging observations, but their exclusion should not affect the usability of the created observations to most downstream systems.

### Glossary

The following terms and acronyms are used within the DICOM SR IG:

|Term|Definition|
|-----|-----------------|
|AIR| AI Results |
|ATNA| Audit Trail and Node Authentication |
|CID| Context Identifier |
|DICOM| Digital Imaging and Communications in Medicine |
|DLP| Dose Length Product |
|EHR| Electronic Health Record |
|EMR| Electronic Medical Record |
|FHIR| Fast Healthcare Interoperability Resources |
|HL7| Health Level Seven|
|IG| Implementation Guide |
|IHE| Integrating the Healthcare Enterprise |
|IOD| Information Object Definition |
|RIS| Radiology Information System |
|SR| Structured Report |
|TID| Template ID |
|TLS| Transport Layer Security |
|UID| Unique identifier |
|URL| Uniform Resource Locator |
|URN| Uniform Resource Name |

### References

1. DICOM,[DICOM PS3.16: Content Mapping Resource](http://dicom.nema.org/medical/dicom/current/output/chtml/part16/PS3.16.html)
2. DICOM,[TID 1500\. Measurement Report](https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1500)
3. IHE Radiology (RAD), [Technical Framework Supplement, AI Results (AIR)](https://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_Suppl_AIR.pdf)
4. D. Clunie, [DICOM Structured Reporting](http://www.pixelmed.com/srbook.html)

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table-short.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}

---

// File: input/pagecontent/index.md

This Implementation Guide defines the use of FHIR resources to convey measurements, derived measurements and  Qualitative Evaluations extracted from a DICOM® SR Measurement Report.

### Organization of this implementation guide

This IG is organized into three main sections:

* [Chapter I](background.html): Background - Introduction and overview
    * [Problem](background.html#problem) - Description of the problem
    * [Scope](background.html#scope) - Scope of the IG
    * [Intended Readers](background.html#intended-readers) - Intended readers of the IG
    * [Use cases](background.html#use-cases) - Key use cases covered by the IG
    * [Excluded use cases](background.html#excluded-use-cases) - Excluded use cases
    * [FHIR Version 4 compatibility](background.html#fhir-version-4-compatibility) - FHIR Version 4 compatibility
    * [Glossary](background.html#glossary) - Glossary
    * [References](background.html#references) - References
    * [IG Dependencies](background.html#ig-dependencies) - Dependencies on other IGs
    * [Global Profiles](background.html#global-profiles) - Global profiles used in this IG
    * [Copyrights](background.html#copyrights) - Copyrights and acknowledgments
* [Chapter II](architecture.html): Architecture & Implementation
    * [Profiles & Extensions](architecture.html#profiles--extensions) - FHIR Profiles and extensions defined in the IG
      * [Resources](architecture.html#resource-profiles) - FHIR Resource Profiles
        * [Observation](architecture.html#observation) - Observation
        * [ImagingSelection](architecture.html#imagingselection) - ImagingSelection
        * [Device](architecture.html#device) - Device
        * [BodyStructure](architecture.html#bodystructure) - BodyStructure
      * [Data Types](architecture.html#supporting-datatype-profiles) - FHIR Data Type Profiles
      * [Extensions](architecture.html#supporting-extensions) - FHIR Extensions
      * [Profile Relationships](architecture.html#profile-relationships) - Relationships between profiled FHIR resources and other standards
        * [DICOM® SR Basics](architecture.html#dicom-sr-basics) - Overview of DICOM® SR and terminology
        * [Relationship to DICOM® SR TID 1500 Measurement Report](architecture.html#relationship-to-dicom-sr-tid-1500-measurement-report) - Mapping of content from DICOM SR Measurement Report
          * [Imaging Measurement Group Relationship](architecture.html#imaging-measurement-group-relationship) - Mapping of imaging measurement groups
          * [Derived Imaging Measurements Relationship](architecture.html#derived-imaging-measurements-relationship) - Mapping of derived imaging measurements
          * [Imaging Qualitative Evaluations Relationship](architecture.html#imaging-qualitative-evaluations-relationship) - Mapping of imaging qualitative evaluations
        * [Device Relationship](architecture.html#device-relationship) - Mapping of devices from a DICOM SR Measurement Report
        * [Other Resource Relationships](architecture.html#other-resource-relationships) - Relationships to other FHIR resources
    * [Actors](architecture.html#actors) - Actors participating in the IG
    * [Terminology](architecture.html#terminology) - Value Sets defined and used
    * [Security Consideration](architecture.html#security-consideration) - Security aspects to be taken in consideration
* [Chapter III](mapping.html): Measurement Report Processing Mapping
    * [DICOM SR Measurement Report Mapping Overview](mapping.html#dicom-sr-measurement-report-mapping-overview) - Overview of the mapping process
    * [DICOM SR Measurement Report Instance Mapping](mapping.html#dicom-sr-measurement-report-instance-mapping)
    * [DICOM SR Document Mapping](mapping.html#document-ie-mapping)
    * [Imaging Measurements Container Mapping](mapping.html#imaging-measurements-container-mapping)
    * [Imaging Measurement Group Mapping](mapping.html#imaging-measurement-group-mapping)
    * [Imaging Measurement Mapping](mapping.html#imaging-measurement-mapping)
    * [Imaging Qualitative Evaluation Mapping](mapping.html#imaging-qualitative-evaluation-mapping)
    * [Derived Imaging Measurements Mapping](mapping.html#derived-imaging-measurement-mapping)
* [Chapter IV](example.html): Example DICOM SR Measurement Report Mapping
    * [Patient Mapping](example.html#example-patient-mapping) - Patient Mapping Example
    * [Service Request Mapping](example.html#example-servicerequest-mapping) - Service Request Mapping Example
    * [Imaging Study Mapping](example.html#example-imagingstudy-mapping) - Imaging Study Mapping Example
    * [Device Mapping](example.html#example-device-mapping) - Device Mapping Example
    * [Document Mapping](example.html#example-document-mapping) - Document Mapping Example
    * [Imaging Measurements Container Mapping](example.html#example-imaging-measurement-container-mapping) - Imaging Measurements Container Mapping Example
    * [Imaging Measurement Group Mapping](example.html#example-imaging-measurement-group-mapping) - Imaging Measurement Group Mapping Example
    * [Imaging Measurement Mapping](example.html#example-imaging-measurement-mapping) - Imaging Measurement Mapping Example
    * [Imaging Qualitative Evaluation Mapping](example.html#example-imaging-qualitative-evaluation-mapping) - Imaging Qualitative Evaluation Mapping Example
    * [Example Instance](example.html#example-measurement-report) - Complete Example DICOM SR Measurement Report

### Copyrights and acknowledgments

This document is licensed under Creative Commons "No Rights Reserved" (CC0).

#### Value Sets
Value Sets in this guide include:

* Vocabulary Content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organization (IHTSDO) and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
* Vocabulary Content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at LOINC/license.

#### Trademarks
LOINC® is a registered United States trademark of Regenstrief Institute, Inc.

SNOMED® and "SNOMED CT" are registered trademarks of the IHTSDO.

HL7®, HEALTH LEVEL SEVEN®, FHIR® and the FHIR® Logo are trademarks owned by Health Level Seven International, registered with the United States Patent and Trademark Office.

DICOM® is a registered trademark of the National Electrical Manufacturers Association for its standards publications relating to digital communications of medical information.

IHE® is a registered trademark of the Healthcare Information Management Systems Society in the United States and trademarks of IHE Europe in the European Community.

### Sponsors Working Groups
* [Imaging Integration Work Group](http://www.hl7.org/Special/committees/imagemgt)

### Contributors

| Name | Organization | Role |
| ---- | ---- | ---- |
| Jonathan Whitby | Canon Medical | Author |
| Christopher Lindop | GE Healthcare | Author |


---

// File: input/pagecontent/mapping.md

This chapter describes the mapping between a DICOM® SR Measurement Report and FHIR resources.

### DICOM SR Measurement Report Mapping Overview

The mapping between DICOM® SR Measurement Report contents and FHIR Resources is split into several sections as follows:
* [DICOM® SR Measurement Report Instance Mapping](#dicom-sr-measurement-report-instance-mapping)
* [Document IE Mapping](#document-ie-mapping)
* [Imaging Measurements Container Mapping](#imaging-measurements-container-mapping)
* [Imaging Measurement Group Mapping](#imaging-measurement-group-mapping)
* [Imaging Measurement Mapping](#imaging-measurement-mapping)
* [Imaging Qualitative Evaluation Mapping](#imaging-qualitative-evaluation-mapping)
* [Derived Imaging Measurement Mapping](#derived-imaging-measurement-mapping)

<figure>
  {% include dicom_sr_measurement_report_mapping_overview.svg %}
  <figcaption><b>Figure: DICOM® SR Measurement Report Mapping Overview</b></figcaption>
  <p></p>
</figure>

### DICOM SR Measurement Report Instance Mapping

The DICOM® SR Measurement Report instance contains the following information relevant to creating FHIR resources:
* The Patient IE used to associate created resources with the appropriate Patient
* The Study ID used to associated created resources with the appropriate ImagingStudy and ServiceRequest
* The General Equipment IE used to create a FHIR Device resource
* The Document IE is used to create one or more FHIR Observations

*Note:* This implementation guide assumes that Patient, ImagingStudy and ServiceRequest resources already exist in the destination FHIR server. See [Other Resource Relationships](architecture.html#other-resource-relationships).

<figure>
  {% include dicom_sr_measurement_report_mapping.svg %}
  <figcaption><b>Figure: DICOM® SR Measurement Report Instance Mapping Overview</b></figcaption>
  <p></p>
</figure>
See also the [DICOM SR IOD to FHIR ConceptMap](ConceptMap-dicom-sr-measurement-report-to-fhir.html).

### Document IE Mapping


The DICOM SR Document IE contains:
* The PreliminaryFlag attribute which may indicate whether the contained observations are `preliminary` or `final`
* The ParticipantSequence attribute which may indicate:
    * A person who may be the `performer` of created observations
    * A device that may override the EquipmentDevice as the `device` associated with created observations
* The ContentSequence containing the SR content tree
    * The mapped content is from the Imaging Measurements `CONTAINER` node

<figure>
  {% include dicom_sr_document_ie_mapping.svg %}
  <figcaption><b>Figure: DICOM SR Document Mapping Overview</b></figcaption>
  <p></p>
</figure>
See also the [DICOM SR Document IE to FHIR ConceptMap](ConceptMap-dicom-document-ie-to-fhir.html).

### Imaging Measurements Container Mapping


The Imaging Measurements Container contains:
* 0..1 Algorithm Identification content items
* 0..n MeasurementGroup Container nodes each of which maps to an ImagingMeasurementGroup Observation
* 0..1 Derived Imaging Measurements Containers
    * Each child node of this container maps to a DerivedImagingMeasurement Observation
* 0..1 Qualitative Evaluations Container
    * Select child nodes of this container maps to a ImagingQualitativeEvaluations Observation
        * Child nodes may include additional Algorithm Identification content items

<figure>
  {% include imaging_measurements_container_mapping.svg %}
  <figcaption><b>Figure: Imaging Measurements Container Mapping Overview</b></figcaption>
  <p></p>
</figure>
See also the [DICOM Imaging Measurements Container ConceptMap](ConceptMap-dicom-imaging-measurements-container-to-fhir.html).

### Imaging Measurement Group Mapping


The Imaging Measurement Group contains:
* 0..n Numerical Measurement Container nodes each of which maps to an ImagingMeasurement Observation
* 0..1 Algorithm Identification content items
* 0..1 Tracking Identifier content items
* 0..1 Tracking Unique Identifier content items
* 0..1 Finding content items representing the coded value of the imaging measurement group
* 0..1 Finding Category content items
* 0..1 Finding Site content items
   * Maps to a FindingSite BodyStructure
* 0..1 Image Region content items
   * Maps to an ImageRegion ImagingSelection
* 0..1 Measurement Method content items

<figure>
  {% include imaging_measurement_group_mapping.svg %}
  <figcaption><b>Figure: Imaging Measurement Group Mapping Overview</b></figcaption>
  <p></p>
</figure>
See also the [DICOM Imaging Measurement Group ConceptMap](ConceptMap-dicom-imaging-measurement-group-to-fhir.html).

### Imaging Measurement Mapping



<figure>
  {% include imaging_measurement_mapping.svg %}
  <figcaption><b>Figure: Imaging Measurement Mapping Overview</b></figcaption>
  <p></p>
</figure>
See also the [DICOM Imaging Measurement ConceptMap](ConceptMap-dicom-imaging-measurement-to-fhir.html).

### Imaging Qualitative Evaluation Mapping



<figure>
  {% include imaging_qualitative_evaluation_mapping.svg %}
  <figcaption><b>Figure: Imaging Qualitative Evaluation Mapping Overview</b></figcaption>
  <p></p>
</figure>
See also the [DICOM Imaging Qualitative Evaluation ConceptMap](ConceptMap-dicom-imaging-qualitative-evaluation-to-fhir.html).

### Derived Imaging Measurement Mapping



![Derived Imaging Measurement Mapping](./derived_imaging_measurement_mapping.svg){: width="100%"}

See also the [DICOM Derived Imaging Measurement ConceptMap](ConceptMap-dicom-derived-imaging-measurement-to-fhir.html).

---

// File: input/pagecontent/example.md

This chapter describes the complete mapping of a DICOM SR Measurement Report into FHIR resources following the method of this implementation guide.

The source DICOM SR Measurement Report is in DICOM JSON format. See the [DICOM PS3.18 Section F](https://dicom.nema.org/medical/dicom/current/output/chtml/part18/chapter_F.html) for more information.

### Example Patient Mapping
<table>
<tr>
<th>DICOM</th>
<th>FHIR Resource Reference</th>
<th>FHIR Identifier Reference</th>
</tr>
<tr>
<td>
<pre>
{
  "00100010": { "vr": "PN", "Value": [ { "Alphabetic": "EXAMPLE^MEASUREMENT^PATIENT}" } ]},
  "00100020": { "vr": "LO", "Value": [ "PID-11235" ] },
  "00100024": { "vr": "SQ",  "Value": [ {
        "00400031": { "vr": "UT", "Value": [ "Test Hospital" ] },
        "00400032": { "vr": "UT", "Value": [ "http://testhospital.org/mr" ] },
        "00400033": { "vr": "CS", "Value": [ "URI" ] }
      } ] }
}
</pre>
</td>
<td>
<pre>
"subject": {
  "type": "Patient",
  "reference": "Patient/measurement-report-patient"
}
</pre>
</td>
<td>
<pre>
"subject": {
  "type": "Patient",
  "identifier": { 
    "system": "http://testhospital.org/mr",
    "value": "PID-11235",
    "assigner": { "display": "Test Hospital" } 
  }
}
</pre>
</td>
</tr>
</table>

1. Search for FHIR Patient with identifier `testhospital.org|PID-11235`
    1. If a result is found, use the found `Patient` resource as the `subject` for all created resources
    2. If a result is _not_ found, use a logical reference to the Patient ID from DICOM as the `subject` for all created resources

See [Example Patient](Patient-measurement-report-patient.html).

#### FHIR Resources
- Referenced
  - Patient

### Example ServiceRequest Mapping
<table>
<tr>
<th>DICOM</th>
<th>FHIR Resource Reference</th>
<th>FHIR Identifier Reference</th>
</tr>
<tr>
<td>
<pre>
{
  "00080050": { "vr": "SH" , "Value": "ACSN-235813" },
  "00080051": { "vr": "SQ",  "Value": [ {
        "00400031": { "vr": "UT", "Value": [ "Test Hospital" ] },
        "00400032": { "vr": "UT", "Value": [ "http://testhospital.org/acsn" ] },
        "00400033": { "vr": "CS", "Value": [ "URI" ] }
      } ] }
}
</pre>
</td>
<td>
<pre>
"basedOn": [{
  "type": "ServiceRequest",
  "reference": "ServiceRequest/measurement-report-service-request"
}]
</pre>
</td>
<td>
<pre>
"basedOn": [{
  "type": "ServiceRequest
  "identifier": {
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code" : "ACSN" }]},
    "system": "http://testhospital.org/acsn",
    "value": "ACSN-235813",
    "assigner": { "display": "Test Hospital" } 
  }
}]
</pre>
</td>
</tr>
</table>

1. Search for FHIR ServiceRequest with identifier `radiology.testhospital.org|ACSN-235813`
    1. If a result is found, use the found `ServiceRequest` resource as the `basedOn` value for all created `Observation` resources
    2. If a result is _not_ found, use a logical reference to the Accession Number from DICOM as the `basedOn` value for all created `Observation` resources

See [Example ServiceRequest](ServiceRequest-measurement-report-service-request.html).

#### FHIR Resources
- Referenced
   - Patient
   - ServiceRequest

### Example ImagingStudy Mapping
<table>
<tr>
<th>DICOM</th>
<th>FHIR Resource References</th>
<th>FHIR Identifier Reference</th>
</tr>
<tr>
<td>
<pre>
{
  "0020000E": { "vr": "UI", "Value": [ "1.2.840.113747.20080222.83311413144566317081790268995" ] }
}
</pre>
</td>
<td>
<pre>
"derivedFrom": [{
  "type": "ImagingStudy",
  "reference": "ImagingStudy/measurement-report-imaging-study"
}]
</pre>
</td>
<td>
<pre>
"derivedFrom": [{
  "type": "ImagingStudy",
  "identifier": { 
    "system": "urn:dicom:uid",
    "value": "urn:oid:1.2.840.113747.20080222.83311413144566317081790268995" 
  }
}]
</pre>
</td>
</tr>
</table>

1. Search for FHIR ImagingStudy with identifier `urn:dicom:uid|urn:oid:1.2.840.113747.20080222.83311413144566317081790268995`
    1. If a result is found, use the found `ImagingStudy` resource as the `derivedFrom` value for all created `Observation` and `ImagingSelection` resources
    2. If a result is _not_ found, use a logical reference to the Study Instance UID ID from DICOM as the `derivedFrom` value for all created `Observation` and `ImagingSelection` resources

See [Example ImagingStudy](ImagingStudy-measurement-report-imaging-study.html).

#### FHIR Resources
- Referenced
   - Patient
   - ServiceRequest
   - ImagingStudy

### Example Device Mapping
<table>
<tr>
<th>DICOM</th>
<th>FHIR Resource</th>
<th>FHIR Reference</th>
</tr>
<tr>
<td>
<pre>
{
  "00080070": { "vr": "LO", "Value": [ "Example Device Manufacturer" ] },
  "001081090": { "vr": "LO", "Value": [ "Example Imaging Measurement Device" ] },
  "00181002": { "vr": "UI", "Value": [ "1.2.840.113747.20080222.83311413144566317081790268995.8888" ] }
}
</pre>
</td>
<td>
<pre>
{
  "resourceType" : "Device",
  "id" : "measurement-report-general-equipment",
  "identifier" : [{
    "type" : {
      "coding" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code" : "UDI"
      }]
    },
    "system" : "urn:dicom:uid",
    "value" : "1.2.840.113747.20080222.83311413144566317081790268995.8888"
  }],
  "displayName" : "Example Imaging Measurement Device",
  "manufacturer" : "Example Device Manufacturer"
}
</pre>
</td>
<td>
<pre>
"device": [{
  "type": "Device",
  "reference": "Device/measurement-report-general-equipment"
}]
</pre>
</td>
</tr>
</table>

See [Example Device](Device-measurement-report-general-equipment.html).

#### FHIR Resources
- Referenced
   - Patient
   - ServiceRequest
   - ImagingStudy
- Created
   - Device (GeneralEquipment)

### Example Document Mapping
<table>
<tr>
<th>DICOM</th>
<th>FHIR Resource</th>
<th>FHIR Observation Fields</th>
</tr>
<tr>
<td>
<pre>
{
  "00080023": { "vr": "DA", "Value": [ "20240724" ] },
  "00080033": { "vr": "TM", "Value": [ "082342" ] },
  "0040A496": { "vr": "CS", "Value": [ "FINAL" ] },
  "0040A730": { "vr": "SQ", "Value": [ {
        "0040A010": { "vr": "CS", "Value": [ "HAS OBS CONTEXT" ] },
        "0040A040": { "vr": "CS", "Value": [ "CODE" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "121005" ] },
              "00080102": { "vr": "SH", "Value": [ "DCM" ] },
              "00080104": { "vr": "LO", "Value": [ "Observer Type" ] }
            } ] },
        "0040A168": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "121006" ] },
              "00080102": { "vr": "SH", "Value": [ "DCM" ] },
              "00080104": { "vr": "LO", "Value": [ "Person" ] }
            } ] }
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "HAS OBS CONTEXT" ] },
        "0040A040": { "vr": "CS", "Value": [ "PNAME" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "121008" ] },
              "00080102": { "vr": "SH", "Value": [ "DCM" ] },
              "00080104": { "vr": "LO", "Value": [ "Person Observer Name" ] }
            } ] },
        "0040A123": { "vr": "PN", "Value": [ { "Alphabetic": "RADIOLOGIST^EXAMPLE" } ] }
      }
}
</pre>
</td>
<td>
<pre>
{
  "resourceType" : "Practitioner",
  "id" : "measurement-report-practitioner",
  "name": [{
    "family": "RADIOLOGIST",
    "given": ["EXAMPLE"]
  }]
}
</pre>
</td>
<td>
<pre>
{
  "resource": {
    "resourceType": "Observation",
    "subject": {
      "reference": "Patient/measurement-report-patient"
    },
    "basedOn": [{
      "type": "ServiceRequest",
      "reference": "ServiceRequest/measurement-report-service-request"
    }],
    "derivedFrom": [{
      "type": "ImagingStudy",
      "reference": "ImagingStudy/measurement-report-imaging-study"
    }],
    "issued": "2024-07-24T08:23:42",
    "status": "final",
    "performer": [{
      "type": "Practitioner",
      "reference": "Practitioner/measurement-report-practitioner"
    }],
    ...
  }
}
</pre>
</td>
</tr>
</table>

1. Extract `ContentDate`, `ContentTime`, and `PreliminaryFlag` values
2. Extract `ObserverType` and `PersonObserverName` values to identify the `Practitioner` resource
3. Use these values to populate the `issued`, `status` and `performer` fields in the created FHIR Observation resources\
   `issued` may be overridden by more specific values in specific content items

#### FHIR Resources
- Referenced
    - Patient
    - ServiceRequest
    - ImagingStudy
    - Practitioner
- Created
    - Device (GeneralEquipment)

### Example Imaging Measurement Container Mapping
<table>
<tr>
<th>DICOM</th>
<th>FHIR Resources</th>
</tr>
<tr>
<td>
<pre>
{
  "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
  "0040A040": { "vr": "CS", "Value": [ "CONTAINER" ] },
  "0040A043": { "vr": "SQ", "Value": [ {
        "00080100": { "vr": "SH", "Value": [ "126010" ] },
        "00080102": { "vr": "SH", "Value": [ "DCM" ] },
        "00080104": { "vr": "LO", "Value": [ "Imaging Measurements" ] }
      } ] },
  "0040A050": { "vr": "CS", "Value": [ "SEPARATE" ] },
  "0040A730": { "vr": "SQ", "Value": [
     {
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "CONTAINER" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
           "00080100": { "vr": "SH", "Value": [ "125007" ] },
           "00080102": { "vr": "SH", "Value": [ "DCM" ] },
           "00080104": { "vr": "LO", "Value": [ "Measurement Group" ] }
            } ] },
        ...
     }
  ]}
}
</pre>
</td>
<td>
<pre>
[
  {
    "resource": {
      "resourceType": "Observation",
      "id": "imaging-measurement-group-001"
       "subject": {
         "reference": "Patient/measurement-report-patient"
       },
       "basedOn": [{
         "type": "ServiceRequest",
         "reference": "ServiceRequest/measurement-report-service-request"
       }],
       "derivedFrom": [{
         "type": "ImagingStudy",
         "reference": "ImagingStudy/measurement-report-imaging-study"
       }],
      "issued": "2024-07-24T08:23:42"
      "status": "final",
      "category" : [{ "coding" : [{
        "system" : "http://dicom.nema.org/resources/ontology/DCM",
        "code" : "125007",
        "display" : "Measurement Group"
        }]
      }],
     "device": {
        "reference": "Device/measurement-report-general-equipment"
      },
      ...
    }
  } 
]
</pre>
</td>
</tr>
</table>

1. Find the `CONTAINER` content item with the Concept Name Code Sequence (0040,A043) value of `DCM#126010 "Imaging Measurements"`
2. Find the Content Sequence (0040,A730) for this container
3. Create a new `ImagingMeasurementGroup` Observation resource for each child content item with a Concept Name Code Sequence (0040,A043) value of `DCM#125007 "Measurement Group"`

#### FHIR Resources
- Referenced
   - Patient
   - ServiceRequest
   - ImagingStudy
   - Practitioner
- Created
   - Device (GeneralEquipment)

### Example Imaging Measurement Group Mapping
<table>
<tr>
<th>DICOM</th>
<th>FHIR Observation</th>
</tr>
<tr>
<td>
<pre>
{
  "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
  "0040A040": { "vr": "CS", "Value": [ "CONTAINER" ] },
  "0040A043": { "vr": "SQ", "Value": [ {
        "00080100": { "vr": "SH", "Value": [ "125007" ] },
        "00080102": { "vr": "SH", "Value": [ "DCM" ] },
        "00080104": { "vr": "LO", "Value": [ "Measurement Group" ] }
      } ] },
  "0040A050": { "vr": "CS", "Value": [ "SEPARATE" ] },
  "0040A504": { "vr": "SQ", "Value": [ {
        "00080105": { "vr": "CS", "Value": [ "DCMR" ] },
        "00080118": { "vr": "UI", "Value": [ "1.2.840.10008.8.1.1" ] },
        "0040DB00": { "vr": "CS", "Value": [ "1411" ] }
      } ] },
  "0040A730": { "vr": "SQ", "Value": [ {
        "0040A010": { "vr": "CS", "Value": [ "HAS OBS CONTEXT" ] },
        "0040A040": { "vr": "CS", "Value": [ "TEXT" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "112039" ] },
              "00080102": { "vr": "SH", "Value": [ "DCM" ] },
              "00080104": { "vr": "LO", "Value": [ "Tracking Identifier" ] }
            } ] },
        "0040A160": { "vr": "UT", "Value": [ "Nodule 1" ] }
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "HAS OBS CONTEXT" ] },
        "0040A040": { "vr": "CS", "Value": [ "UIDREF" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "112040" ] },
              "00080102": { "vr": "SH", "Value": [ "DCM" ] },
              "00080104": { "vr": "LO", "Value": [ "Tracking Unique Identifier" ] }
            } ] },
        "0040A124": { "vr": "UI", "Value": [ "1.2.840.113747.20080222.83311413144566317081790268995.100" ] }
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "CODE" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "276214006" ] },
              "00080102": { "vr": "SH", "Value": [ "SCT" ] },
              "00080104": { "vr": "LO", "Value": [ "Finding category" ] }
            } ] },
        "0040A168": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "241053004" ] },
              "00080102": { "vr": "SH", "Value": [ "SCT" ] },
              "00080104": { "vr": "LO", "Value": [ "Radiographic measurement of lung volume" ] }
            } ] }
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "CODE" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "121071" ] },
              "00080102": { "vr": "SH", "Value": [ "DCM" ] },
              "00080104": { "vr": "LO", "Value": [ "Finding" ] }
            } ] },
        "0040A168": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "427359005" ] },
              "00080102": { "vr": "SH", "Value": [ "SCT" ] },
              "00080104": { "vr": "LO", "Value": [ "Solitary nodule of lung" ] }
            } ] }
      },
      {
        "00081199": { "vr": "SQ", "Value": [ {
              "00081150": { "vr": "UI", "Value": [ "1.2.840.10008.5.1.4.1.1.66.4" ] },
              "00081155": { "vr": "UI", "Value": [ "1.2.276.0.7230010.3.1.4.0.57823.1553343864.578878" ] },
              "0062000B": { "vr": "US", "Value": [ 1 ] }
            } ] },
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "IMAGE" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "121191" ] },
              "00080102": { "vr": "SH", "Value": [ "DCM" ] },
              "00080104": { "vr": "LO", "Value": [ "Referenced Segment" ] }
            } ] }
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "UIDREF" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "121232" ] },
              "00080102": { "vr": "SH", "Value": [ "DCM" ] },
              "00080104": { "vr": "LO", "Value": [ "Source series for segmentation" ] }
            } ] },
        "0040A124": { "vr": "UI", "Value": [ "1.3.6.1.4.1.14519.5.2.1.6279.6001.273525289046256012743471155680" ] }
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "HAS CONCEPT MOD" ] },
        "0040A040": { "vr": "CS", "Value": [ "CODE" ] },
        "0040A043": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "363698007" ] },
              "00080102": { "vr": "SH", "Value": [ "SCT" ] },
              "00080104": { "vr": "LO", "Value": [ "Finding Site" ] }
            } ] },
        "0040A168": { "vr": "SQ", "Value": [ {
              "00080100": { "vr": "SH", "Value": [ "39607008" ] },
              "00080102": { "vr": "SH", "Value": [ "SCT" ] },
              "00080104": { "vr": "LO", "Value": [ "Lung" ] }
            } ] }
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "NUM" ] },
        ...
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "NUM" ] },
        ...
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "NUM" ] },
        ...
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "CODE" ] },
        ...
      },
      {
        "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
        "0040A040": { "vr": "CS", "Value": [ "CODE" ] },
        ...
      } ] }
}
</pre>
</td>
<td>
<pre>
[
  {
    "resource": {
      "resourceType": "BodyStructure",
      "id": "measurement-report-tracking-identifier",
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type",
                "code": "tracking-identifier",
                "display": "Tracking Identifier"
              }
            ]
          },
          "value": "Nodule 1"
        },
        {
          "type": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type",
                "code": "tracking-uid",
                "display": "Tracking UID"
              }
            ]
          },
          "system": "urn:dicom:uid",
          "value": "urn:oid:1.2.840.113747.20080222.83311413144566317081790268995.100"
        }
      ],
      "patient": {
        "reference": "Patient/measurement-report-patient"
      },
      "includedStructure": [
        "structure": {
          "text": "Nodule 1"
        }
      ]
    }
  },
  {
    "resource": {
      "resourceType": "BodyStructure",
      "id": "measurement-report-finding-site",
      "patient": {
        "reference": "Patient/measurement-report-patient"
      },
      "includedStructure": [
        "structure": {
          "coding": [{
            "system" : "http://snomed.info/sct",
            "code" : "39607008",
            "display" : "Lung"
          }]
        }
      ]
    }
  },
    {
    "resource": {
      "resourceType": "ImagingSelection",
      "id": "measurement-report-referenced-segment",
      "status": "available",
      "subject": {
        "reference": "Patient/measurement-report-patient"
      },
      "code": {
        "coding": [
          {
            "system": "http://dicom.nema.org/resources/ontology/DCM",
            "code": "121191",
            "display": "Referenced Segment"
          }
        ]
      },
      "derivedFrom": [
        {
          "reference": "ImagingStudy/measurement-report-imaging-study"
        }
      ],
      "seriesUid": "1.2.840.113747.20080222.83311413144566317081790268995.2"
      "instance": [
        {
          "uid": "11.2.840.113747.20080222.83311413144566317081790268995.2.1",
          "sopClass": {
            "system": "urn:ietf:rfc:3986",
            "code": "urn:oid:1.2.840.10008.5.1.4.1.1.66.4"
          }
          "subset": "1"
        }
      ]
    }
  },
  {
    "resource": {
      "resourceType": "Observation",
      "id": "imaging-measurement-group"
       "subject": {
         "reference": "Patient/measurement-report-patient"
       },
       "basedOn": [{
         "type": "ServiceRequest",
         "reference": "ServiceRequest/measurement-report-service-request"
       }],
       "derivedFrom": [{
         "type": "ImagingStudy",
         "reference": "ImagingStudy/measurement-report-imaging-study"
       }],
      "issued": "2024-07-24T08:23:42+00:00"
      "status": "final",
      "code" : { "coding" : [{
        "system" : "http://snomed.info/sct/MAIN/version/2024-07-01",
        "code" : "241053004",
        "display" : "Radiographic measurement of lung volume"
        }]
      },      
      "category" : [{ "coding" : [{
        "system" : "http://dicom.nema.org/resources/ontology/DCM",
        "code" : "125007",
        "display" : "Measurement Group"
        }]
      }],
      "focus": [
        {
          "reference": "ImagingSelection/measurement-report-referenced-segment"
        },
        {
          "reference": "BodyStructure/measurement-report-tracking-identifier"
        }
      ],
      "bodyStructure": {
        "reference": "BodyStructure/measurement-report-finding-site"
      },
     "device": {
        "reference": "Device/measurement-report-general-equipment"
      },
      "valueCodeableConcept": {
        "coding": [{
            "system": "http://snomed.info/sct",
            "code": "427359005",
            "display": "Solitary nodule of lung"
          }]
      },
      "hasMember": [
        {
          "reference": "Observation/imaging-measurement-001"
        },
        {
          "reference": "Observation/imaging-measurement-002"
        },
        {
          "reference": "Observation/imaging-measurement-003"
        },
        {
          "reference": "Observation/qualitative-evaluation-001"
        },
        {
          "reference": "Observation/qualitative-evaluation-002"
        }
      ]
    }
  }
]
</pre>
</td>
</tr>
</table>

For each Measurement Group:
1. Create BodyStructure resources for tracking and finding site (if not already existing)
2. Create ImagingSelection resource for segment (if not already existing)
3. Create Observation resource for ImagingMeasurementGroup
   1. Set `code` to value of Finding Category
   2. Set `focus` to reference ImagingSelection and tracking BodyStructure resources
   3. Set `bodyStructure` to reference finding site BodyStructure resource
   4. Set `hasMember` to reference Observation resources for imaging measurements and qualitative evaluations\
      *Note: Not yet created*
   5. Set `device` to reference general equipment Device resource\
      No Algorithm Identification is specified at the group level so the general equipment device is used
   6. Set `valueCodeableConcept` to value of Finding

See:
- [Example Tracking Identifier BodyStructure](BodyStructure-measurement-report-tracking-identifier.html)
- [Example Finding Site BodyStructure](BodyStructure-measurement-report-finding-site.html)
- [Example Referenced Segment ImagingSelection](ImagingSelection-measurement-report-referenced-segment.html)
- [Example Imaging Measurement Group Observation](Observation-imaging-measurement-group.html)

#### FHIR Resources
- Referenced
   - Patient
   - ServiceRequest
   - ImagingStudy
   - Practitioner
- Created
   - Device (GeneralEquipment)
   - Observation (ImagingMeasurementGroup)
   - BodyStructure (Tracking, FindingSite)
   - ImagingSelection (Segment)

### Example Imaging Measurement Mapping 
<table>
<tr>
<th>DICOM</th>
<th>FHIR Observation</th>
</tr>
<tr>
<td>
<pre>
{
    {
      "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
      "0040A040": { "vr": "CS", "Value": [ "NUM" ] },
      "0040A043": { "vr": "SQ", "Value": [ {
        "00080100": { "vr": "SH", "Value": [ "118565006" ] },
        "00080102": { "vr": "SH", "Value": [ "SCT" ] },
        "00080104": { "vr": "LO", "Value": [ "Volume" ] }
      } ] },
      "0040A300": { "vr": "SQ", "Value": [ {
        "004008EA": { "vr": "SQ", "Value": [ {
          "00080100": { "vr": "SH", "Value": [ "mm3" ] },
          "00080102": { "vr": "SH", "Value": [ "UCUM" ] },
          "00080104": { "vr": "LO", "Value": [ "cubic millimeter" ] }
        } ] },
        "0040A30A": { "vr": "DS", "Value": [ 3.111220E+04 ] }
      } ] },
        "0040A730": { "vr": "SQ", "Value": [ {
              "0040A010": { "vr": "CS", "Value": [ "HAS CONCEPT MOD" ] },
              "0040A040": { "vr": "CS", "Value": [ "TEXT" ] },
              "0040A043": { "vr": "SQ", "Value": [ {
                    "00080100": { "vr": "SH", "Value": [ "111001" ] },
                    "00080102": { "vr": "SH", "Value": [ "DCM" ] },
                    "00080104": { "vr": "LO", "Value": [ "Algorithm Name" ] }
                  } ] },
              "0040A160": { "vr": "UT", "Value": [ "pylidc" ] }
            },
            {
              "0040A010": { "vr": "CS", "Value": [ "HAS CONCEPT MOD" ] },
              "0040A040": { "vr": "CS", "Value": [ "TEXT" ] },
              "0040A043": { "vr": "SQ", "Value": [ {
                    "00080100": { "vr": "SH", "Value": [ "111003" ] },
                    "00080102": { "vr": "SH", "Value": [ "DCM" ] },
                    "00080104": { "vr": "LO", "Value": [ "Algorithm Version" ] }
                  } ] },
              "0040A160": { "vr": "UT", "Value": [ "0.2.0" ] }
            } ] }
      },
      ...
}
</pre>
</td>
<td>
<pre>
{
  "resourceType" : "Device",
  "id" : "measurement-report-algorithm",
  "displayName" : "pylidc",
  "version" : [
    {
      "value" : "0.2.0"
    }
  ],
  "parent" : {
    "reference" : "Device/measurement-report-general-equipment"
  }
},
{
  "resourceType" : "Observation",
  "id" : "imaging-measurement-001",
  "basedOn" : [
    {
      "reference" : "ServiceRequest/measurement-report-service-request"
    }
  ],
  "partOf" : [
    {
      "reference" : "ImagingStudy/measurement-report-imaging-study"
    }
  ],
  "status" : "final",
  "code" : {
    "coding" : [
      {
        "system" : "http://snomed.info/sct",
        "code" : "118565006"
      }
    ]
  },
  "subject" : {
    "reference" : "Patient/measurement-report-patient"
  },
  "focus" : [
    {
      "reference" : "ImagingSelection/measurement-report-referenced-segment"
    },
    {
      "reference" : "BodyStructure/measurement-report-tracking-identifier"
    }
  ],
  "effectiveDateTime" : "2024-07-24T08:23:42+00:00",
  "issued" : "2024-07-24T08:23:42+00:00",
  "performer" : [
    {
      "reference" : "Practitioner/measurement-report-practitioner"
    }
  ],
  "valueQuantity" : {
    "value" : 6705.54990898997,
    "unit" : "cubic millimeter",
    "system" : "http://unitsofmeasure.org",
    "code" : "mm3"
  },
  "bodyStructure" : {
    "reference" : "BodyStructure/measurement-report-finding-site"
  },
  "device" : {
    "reference" : "Device/measurement-report-algorithm"
  }
}
</pre>
</td>
</tr>
</table>

For each Numerical Measurement:
1. Use the Algorithm Identification fields to create a new AlgorithmIdentification Device resource (if not already present).\
   This Device resource should have the general equipment device as its parent.
2. Copy `focus` values from the parent Measurement Group
3. Copy `bodyStructure` value from the parent Measurement Group unless a Finding Site is defined for the specific Numerical Measurement
4. Set the `valueQuantity` to the value of the Numerical Measurement

See:
- [Example Imaging Measurement 001](Observation-imaging-measurement-001.html)
- [Example Imaging Measurement 002](Observation-imaging-measurement-002.html)
- [Example Imaging Measurement 003](Observation-imaging-measurement-003.html)


#### FHIR Resources
- Referenced
    - Patient
    - ServiceRequest
    - ImagingStudy
    - Practitioner
- Created
    - Device (GeneralEquipment, AlgorithmIdentification)
    - Observation (ImagingMeasurementGroup, ImagingMeasurement x 3)
    - BodyStructure (Tracking, FindingSite)
    - ImagingSelection (Segment)

### Example Imaging Qualitative Evaluation Mapping 
<table>
<tr>
<th>DICOM</th>
<th>FHIR Observation</th>
</tr>
<tr>
<td>
<pre>
{
  {
    "0040A010": { "vr": "CS", "Value": [ "CONTAINS" ] },
    "0040A040": { "vr": "CS", "Value": [ "CODE" ] },
    "0040A043": { "vr": "SQ", "Value": [ {
          "00080100": { "vr": "SH", "Value": [ "C45992" ] },
          "00080102": { "vr": "SH", "Value": [ "NCIt" ] },
          "00080104": { "vr": "LO", "Value": [ "Subtlety score" ] }
        } ] },
    "0040A168": { "vr": "SQ", "Value": [ {
          "00080100": { "vr": "SH", "Value": [ "105" ] },
          "00080102": { "vr": "SH", "Value": [ "99LIDCQIICR" ] },
          "00080104": { "vr": "LO", "Value": [ "5 out of 5 (Obvious)" ] }
        } ] }
  },
  ...
}
</pre>
</td>
<td>
<pre>
{
  "resourceType" : "Observation",
  "id" : "qualitative-evaluation-001",
  "basedOn" : [
    {
      "reference" : "ServiceRequest/measurement-report-service-request"
    }
  ],
  "partOf" : [
    {
      "reference" : "ImagingStudy/measurement-report-imaging-study"
    }
  ],
  "status" : "final",
  "code" : {
    "coding" : [
      {
        "system" : "https://ncit.nci.nih.gov",
        "code" : "C45992"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "code": "C0034375",
          "system": "http://terminology.hl7.org/CodeSystem/umls",
          "display": "Qualitative Evaluations"
        }
      ]
    }
  ],
  "subject" : {
    "reference" : "Patient/measurement-report-patient"
  },
  "focus" : [
    {
      "reference" : "ImagingSelection/measurement-report-referenced-segment"
    },
    {
      "reference" : "BodyStructure/measurement-report-tracking-identifier"
    }
  ],
  "effectiveDateTime" : "2024-07-24T08:23:42+00:00",
  "issued" : "2024-07-24T08:23:42+00:00",
  "performer" : [
    {
      "reference" : "Practitioner/measurement-report-practitioner"
    }
  ],
  "valueCodeableConcept" : {
    "coding" : [
      {
        "system" : "http://cancerimagingarchive.net",
        "code" : "105"
      }
    ]
  },
  "bodyStructure" : {
    "reference" : "BodyStructure/measurement-report-finding-site"
  },
  "device" : {
    "reference" : "Device/measurement-report-general-equipment"
  }
}
</pre>
</td>
</tr>
</table>

For each Qualitative Evaluation:
1. Use the Algorithm Identification fields to create a new AlgorithmIdentification Device resource (if not already present).\
   This Device resource should have the general equipment device as its parent.
2. Copy `focus` values from the parent Measurement Group
3. Copy `bodyStructure` value from the parent Measurement Group unless a Finding Site is defined for the specific Numerical Measurement
4. Set the `valueCodeableConcept` to the value of the Value Code in the Qualitative Evaluation

See:
- [Example Imaging Qualitative Evaluation 001](Observation-qualitative-evaluation-001.html)
- [Example Imaging Qualitative Evaluation 002](Observation-qualitative-evaluation-002.html)

#### FHIR Resources
- Referenced
    - Patient
    - ServiceRequest
    - ImagingStudy
    - Practitioner
- Created
    - Device (GeneralEquipment, AlgorithmIdentification)
    - Observation (ImagingMeasurementGroup, ImagingMeasurement x 3, QualitativeEvaluation x 2)
    - BodyStructure (Tracking, FindingSite)
    - ImagingSelection (Segment)

### Example Measurement Report
See [Example Measurement Report](DiagnosticReport-dicom-sr-measurement-report.html) for a complete example of a Measurement Report containing the above resources.

---

// File: input/fsh/BodyStructure-FindingSite.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        BodyStructureFindingSite
Parent:         BodyStructure
Id:             dicom-sr-finding-site
Title:          "Body Structure - DICOM SR Finding Site Mapping"
Description:    "DICOM® SR Finding Site Mapping to BodyStructure"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent
* includedStructure.laterality MS

Mapping: dicom-sr-for-findingSiteProfile
Id: dicom-sr
Title: "DICOM SR Finding Site"
Source: BodyStructureFindingSite
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_300"
Description: "The FindingSiteBodyStructure can be extracted from TID 300 EV(363698007, SCT, Finding Site) and EV (272741003, SCT, Laterality)."
* -> "TID300(FindingSite)"
* includedStructure.structure.coding -> "TID300.EV(363698007, SCT, Finding Site)"
* includedStructure.laterality -> "TID300.EV(272741003, SCT, Laterality)"

Instance: Example-BodyStructure-FindingSite
InstanceOf: BodyStructureFindingSite
Usage: #example
Description: "Example of BodySite representing a DICOM SR Finding Site"

* id = "measurement-report-finding-site"

* patient = Reference(Example-Patient)
* includedStructure
  * structure
    * coding
      * system = "http://snomed.info/sct"
      * code = #44029006 "Left lung structure"
      * display = "Left lung structure"
* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
  \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
  \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
        \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"363698007\" ] },
        \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
        \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Finding Site\" ] }
      } ] },
  \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
        \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"39607008\" ] },
        \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
        \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Lung\" ] }
      } ] }
}
  </pre></div>"

---

// File: input/fsh/BodyStructure-TrackingIdentifiers.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        BodyStructureTrackingIdentifiers
Parent:         BodyStructure
Id:             dicom-sr-tracking-identifiers
Title:          "Body Structure - DICOM SR Observation Tracking Identifier Mapping"
Description:    "DICOM® SR Observation Tracking Identifier Mapping to BodyStructure"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.ordered = false
* identifier ^slicing.description = "Tracking Identifiers"

* identifier contains trackingIdentifier 0..1
* identifier[trackingIdentifier].type = http://dicom.nema.org/resources/ontology/DCM#112039 "Tracking Identifier"
* identifier[trackingIdentifier].value 1..1
* identifier[trackingIdentifier] ^short = "Tracking ID"
* identifier[trackingIdentifier] ^definition = "An identifier used for tracking a finding or feature, potentially across multiple reporting objects, over time."

* identifier contains trackingUid 0..1
* identifier[trackingUid].type = http://dicom.nema.org/resources/ontology/DCM#112040 "Tracking Unique Identifier"
* identifier[trackingUid].value 1..1
* identifier[trackingUid] ^short = "Tracking UID"
* identifier[trackingUid].system = "urn:dicom:uid"
* identifier[trackingUid] ^definition = "A unique identifier used for tracking a finding or feature, potentially across multiple reporting objects, over time."

Mapping: dicom-sr-tracking-identifiers-for-measurement-groups
Id: dicom-sr-measurement-group-tracking-identifiers
Title: "DICOM SR Observation Tracking Identifiers for EV(125007, DCM, Measurement Group)"
Source: BodyStructureTrackingIdentifiers
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1500"
* -> "EV(125007, DCM, Measurement Group)"
* identifier[trackingIdentifier] -> "DT (112039, DCM, Tracking Identifier)"
* identifier[trackingUid] -> "EV (112040, DCM, Tracking Unique Identifier)"
* patient -> "tag(0010,0020) [Patient ID]"
* includedStructure.structure.text -> "DT (112039, DCM, Tracking Identifier) > EV (112040, DCM, Tracking Unique Identifier)"

Instance: Example-BodyStructure-TrackingIdentifiers
InstanceOf: BodyStructureTrackingIdentifiers
Usage: #example
Description: "Example of BodySite representing a DICOM SR Tracking Identifier"

* id = "measurement-report-tracking-identifier"

* identifier[trackingIdentifier]
  * type = http://dicom.nema.org/resources/ontology/DCM#112039 "Tracking Identifier"
  * value = "Nodule 1"
* identifier[trackingUid]
  * type = http://dicom.nema.org/resources/ontology/DCM#112040 "Tracking Unique Identifier"
  * system = "urn:dicom:uid"
  * value = "urn:oid:1.2.840.113747.20080222.83311413144566317081790268995.100"

* patient = Reference(Example-Patient)
* includedStructure
  * structure
    * text = "Nodule 1"

* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
  \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
  \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
    \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"112039\" ] },
    \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
    \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Tracking Identifier\" ] }
  } ] },
  \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"Nodule 1\" ] }
},
{
  \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
  \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"UIDREF\" ] },
  \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
    \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"112040\" ] },
    \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
    \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Tracking Unique Identifier\" ] }
  } ] },
  \"0040A124\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995.100\" ] }
}
  </pre></div>"

---

// File: input/fsh/CodeSystem-DICOMIdentifiers.fsh

CodeSystem: DicomIdentifierType
Id: dicom-identifier-type
Title: "Identifiers - DICOM Identifier Type"
Description: "Identifier types related to DICOM® UIDs"

* ^caseSensitive = true
* ^content = #complete
* ^hierarchyMeaning = #is-a
* ^experimental = false
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii
* #observation-uid "Observation UID" "Uniquely identifies the observation"


---

// File: input/fsh/CodeSystem-DICOMValueTypes.fsh

CodeSystem: DicomValueType
Id: dicom-value-type
Title: "Value Types -- DICOM SR Content Item Value Types"
Description: "DICOM® SR Content Item Value Types"

* ^caseSensitive = true
* ^content = #complete
* ^hierarchyMeaning = #is-a
* ^experimental = false
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii
* #text "TEXT" "Text Value (0040,A160)"
* #num "NUM" "Measured Value Sequence (0040,A300)"
* #code "CODE" "Concept Code Sequence (0040,A168)"
* #date "DATE" "Date (0040,A121)"
* #time "TIME" "Time (0040,A122)"
* #datetime "DATETIME" "DateTime (0040,A120)"
* #uidref "UIDREF" "UID (0040,A124)"
* #pname "PNAME" "Person Name (0040,A123)"
* #composite "COMPOSITE" "Referenced SOP Sequence (0008,1199)"
* #image "IMAGE" "Image Reference Macro"
* #waveform "WAVEFORM" "Waveform Reference Macro"
* #scoord "SCOORD" "Spatial Coordinates Macro"
* #scoord3d "SCOORD3D" "Spatial Coordinates 3D Macro"
* #tcoord "TCOORD" "Temporal Coordinates Macro"
* #container "CONTAINER" "Container Macro"
* #table "TABLE" "Table Content Item Macro"

---

// File: input/fsh/ConceptMap-00-DICOMSRMeasurementReport.fsh

Instance:       DICOM-SR-Measurement-Report-to-FHIR
InstanceOf:     ConceptMap
Usage:          #definition
Title:          "ConceptMap - DICOM SR Measurement Report to FHIR Mapping"


* id =  "dicom-sr-measurement-report-to-fhir"
* name = "DICOMSRMeasurementReportToFHIRMapping"
* description = "Mapping between DICOM® SR Measurement Report and FHIR Resources"
* status = #active
* experimental = false
* contact[0].telecom[0].system = #url
* contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCode = #ii
* sourceScopeUri = "DICOM-SR-Measurement-Report"
* targetScopeUri = "Bundle"

* property[0]
  * code = #references
  * type = #string
* property[1]
  * code = #imaging-measurement-group-map
  * type = #string

// Patient IE Mapping
* group[0].element[0]
  * code = #DICOM.Patient
  * display = "Patient IE"
  * target
    * relationship = #equivalent
    * code = #Patient[1]
    * display = "Patient[1]"
    * comment = "The DICOM® SR Patient IE is mapped to a FHIR Patient resource"

// Study IE Mapping
* group[1].element[0]
  * code = #DICOM.Study
  * display = "Study IE"
  * target
    * relationship = #equivalent
    * code = #ImagingStudy[1]
    * display = "ImagingStudy[1]"
    * comment = "The DICOM® SR Study IE is mapped to a FHIR ImagingStudy resource"
* group[1].element[1]
  * code = #DICOM.Study
  * display = "Study IE"
  * target
    * relationship = #related-to
    * code = #ServiceRequest[1]
    * display = "ServiceRequest[1]"
    * comment = "The DICOM® SR Study IE is mapped to a FHIR ServiceRequest resource"

// Equipment IE Mapping
* group[2].element[0]
  * code = #DICOM.Equipment
  * display = "Equipment IE"
  * target
    * relationship = #equivalent
    * code = #Device[1]
    * display = "Device[1]"
    * comment = "The DICOM® SR Equipment IE may result in the creation of a new Device resource"

// Document IE Mapping
* group[3].element[0]
  * code = #DICOM.Document
  * display = "Document IE"
  * target
    * relationship = #source-is-narrower-than-target
    * code = #Observation[1]
    * display = "Observation[1]"
    * comment = "Processing of the Document IE will result in the creation one or more new Observation resources"
    * property[0]
      * code = #imaging-measurement-group-map
      * valueString = "dicom-imaging-measurement-group-to-fhir"
    * property[1]
      * code = #references
      * valueString = "Observation.subject.reference=Patient[1].id"
    * property[2]
      * code = #references
      * valueString = "Observation.partOf.reference=ImagingStudy[1].id"
    * property[3]
      * code = #references
      * valueString = "Observation.basedOn.reference=ServiceRequest[1].id"
    * property[4]
      * code = #references
      * valueString = "Observation.device.reference=Device[1]"


---

// File: input/fsh/ConceptMap-01-DICOMImagingMeasurementsContainer.fsh

Instance:       DICOM-Imaging-Measurements-Container-to-FHIR
InstanceOf:     ConceptMap
Title:          "ConceptMap - DICOM Imaging Measurements Container to FHIR Mapping"
Usage: #definition

* id = "dicom-imaging-measurements-container-to-fhir"
* name = "DICOMImagingMeasurementsContainerToFHIRMapping"
* description = "Mapping between DICOM® Document IE and FHIR Resources"
* status = #active
* experimental = false
* contact[0].telecom[0].system = #url
* contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCode = #ii
* sourceScopeUri = "DICOM-Imaging-Measurements-Container"
* targetScopeUri = "Bundle"

* group[0].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#TID4019
  * display = "Algorithm Identification"
  * target[0]
    * relationship = #equivalent
    * code = #AlgrithmIdentification
    * display = "AlgorithmIdentification"
    * comment = "Content from the Algorithm Identification template will be used to create a FHIR AlgorithmIdentification Device."
  * target[0]
    * relationship = #equivalent
    * code = #device
    * display = "observation.device"

* group[1].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#125007
  * display = "Measurement Group"
  * target
    * relationship = #equivalent
    * code = #ImagingMeasurementGroup
    * display = "ImagingMeasurementGroup"
    * comment = "Each Measurement Group container will be used to create a FHIR ImagingMeasurementGroup Observation."

* group[1].element[1]
  * code = http://dicom.nema.org/resources/ontology/DCM#126001
  * display = "Derived Imaging Measurements"
  * target
    * relationship = #equivalent
    * code = #DerivedImagingMeasurements
    * display = "DerivedImagingMeasurements"
    * comment = "Each child of the the Derived Imaging Measurements container will be used to create a FHIR DerivedImagingMeasurement Observation."

* group[1].element[2]
  * code = http://terminology.hl7.org/CodeSystem/umls#C0034375
  * display = "Qualitative Evaluations"
  * target
    * relationship = #equivalent
    * code = #ImagingQualitativeEvaluation
    * display = "ImagingQualitativeEvaluation"
    * comment = "Select children of the Imaging Qualitative Evaluations container will be used to create a FHIR ImagingQualitativeEvaluation Observation."


---

// File: input/fsh/ConceptMap-02-DICOMDocumentIE.fsh

Instance:       DICOM-Document-IE-to-FHIR
InstanceOf:     ConceptMap
Title:          "ConceptMap - DICOM Document IE to FHIR Mapping"
Usage: #definition

* id =  "dicom-document-ie-to-fhir"
* name = "DICOMDocumentIEToFHIRMapping"
* description = "Mapping between DICOM® Document IE and FHIR Resources"
* status = #active
* experimental = false
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/imagemgt"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCode = #ii
* sourceScopeUri = "DICOM-Document"
* targetScopeUri = "Bundle"

// Additional Attributes used in concept map
* additionalAttribute[0]
  * code = #OverserverType
  * description = "DICOM.ParticipantSequence.ObserverType"
  * uri = "https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.17.2.4.html#table_C.17-3b"
  * type = #code

* additionalAttribute[1]
  * code = #DICOMConceptNameCodeSequence
  * description = "DICOM Concept Name Code Sequence (0040,A043)"
  * uri = "https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.17.3.3.html#table_C.17-5"
  * type = #Coding

* property[0]
  * code = #macro-map
  * type = #string
* property[1]
  * code = #content-map
  * type = #string

// Document General Module
* group.element[0]
  * code = #DICOM.SR.Document.General
  * display = "Document General Module"
  * noMap = true

// Preliminary Flag (0040,A496)
* group.element[1]
  * code = #DICOM.PreliminaryFlag
  * display = "Preliminary Flag (0040,A496)"
  * target
    * relationship = #equivalent
    * code = #status
    * display = "status"
    * comment = "DICOM® values shall be converted to lowercase. e.g. 'PRELIMINARY' to 'preliminary'."

// Participant Sequence (0040,A07A)
* group.element[2]
  * code = #DICOM.ParticipantSequence-Performer
  * display = "Participant Sequence (0040,A07A) -- PSN"
  * target
    * relationship = #equivalent
    * code = #performer
    * display = "performer"
    * dependsOn[0]
      * attribute = #OverserverType
      * valueCode = #PSN
    * property[0]
      * code = #macro-map
      * valueString = "identified-person-or-device"      

* group.element[3]
  * code = #DICOM.ParticipantSequence-Device
  * display = "Participant Sequence (0040,A07A) -- DEV"
  * target
    * relationship = #equivalent
    * code = #Device[1]
    * display = "Device[1]"
    * comment = "If this device matches the Equipment IE device an additional device resource does not need to be created."
    * property[0]
      * code = #macro-map
      * valueString = "identified-person-or-device"      
    * dependsOn[0]
      * attribute = #OverserverType
      * valueCode = #DEV

// Content Sequence (0040,A730)
* group.element[4]
  * code = #DICOM.ContentSequence.ImagingMeasurements
  * display = "Content Sequence (0040,A730) -- Imaging Measurements"
  * target
    * relationship = #source-is-narrower-than-target
    * code = #Observation[1]
    * display = "Observation[1]"
    * dependsOn[0]
      * attribute = #DICOMConceptNameCodeSequence
      * valueCoding = DCM#126010 "Imaging Measurements"
    * property[0]
      * code = #content-map
      * valueString = "dicom-imaging-measurement-group"      


---

// File: input/fsh/ConceptMap-03-DICOMImagingMeasurementGroup.fsh

Instance:       DICOM-Imaging-Measurement-Group-to-FHIR
InstanceOf:     ConceptMap
Title:          "ConceptMap - DICOM Imaging Measurement Group to FHIR Mapping"
Usage: #definition

* id = "dicom-imaging-measurement-group-to-fhir"
* name = "DICOMImagingMeasurementGroupToFHIRMapping"
* description = "Mapping between DICOM® Imaging Measurement Group and FHIR Resources"
* status = #active
* experimental = false
* contact[0].telecom[0].system = #url
* contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCoding = #ii
* sourceScopeUri = "DICOM-Imaging-Measurement-Group"
* targetScopeUri = "Bundle"

* additionalAttribute[0]
  * code = #IdentifierType
  * description = "DICOM® Controlled Terminology"
  * uri = "http://dicom.nema.org/resources/ontology/DCM"
  * type = #Coding

* additionalAttribute[1]
  * code = #ValueType
  * description = "DICOM® Value Type"
  * uri = "http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type"
  * type = #Coding

* group[0].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#112039
  * display = "Tracking Identifier"
  * target[0]
    * relationship = #equivalent
    * code = #identifier
    * display = "BodyStructureTrackingIdentifiers.identifier"
    * dependsOn[0]
      * attribute = #IdentifierType
      * valueCoding = http://dicom.nema.org/resources/ontology/DCM#112039
  * target[1]
    * relationship = #equivalent
    * code = #identifier
    * display = "ImagingMeasurementGroup.focus.identifier"
    * dependsOn[0]
      * attribute = #IdentifierType
      * valueCoding = http://dicom.nema.org/resources/ontology/DCM#112039

* group[0].element[1]
  * code = http://dicom.nema.org/resources/ontology/DCM#112040
  * display = "Tracking Unique Identifier"
  * target[0]
    * relationship = #equivalent
    * code = #identifier
    * display = "BodyStructureTrackingIdentifiers.identifier"
    * dependsOn[0]
      * attribute = #IdentifierType
      * valueCoding = http://dicom.nema.org/resources/ontology/DCM#112040
  * target[1]
    * relationship = #equivalent
    * code = #identifier
    * display = "ImagingMeasurementGroup.focus.identifier"
    * dependsOn[0]
      * attribute = #IdentifierType
      * valueCoding = http://dicom.nema.org/resources/ontology/DCM#112040

* group[1].element[0]
  * code = http://snomed.info/sct#276214006
  * display = "Finding Category"
  * target
    * relationship = #equivalent
    * code = #code
    * display = "ImagingMeasurementGroup.code"

* group[2].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#121071
  * display = "Finding"
  * target
    * relationship = #equivalent
    * code = #valueCodingableConcept
    * display = "ImagingMeasurementGroup.valueCodingableConcept"

* group[3].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#111030
  * display = "Image Region"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingSelection2dImageRegion
    * display = "ImagingSelection2dImageRegion"
    * dependsOn[0]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#scoord
  * target[1]
    * relationship = #equivalent
    * code = #ImagingSelection3dImageRegion
    * display = "ImagingSelection3dImageRegion"
    * dependsOn[0]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#scoord3d
  * target[2]
    * relationship = #equivalent
    * code = #focus
    * display = "ImagingMeasurementGroup.focus"

* group[4].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#121214
  * display = "Referenced Segmentation Frame"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingSelectionReferencedSegmentationFrame
    * display = "ImagingSelectionReferencedSegmentationFrame"
  * target[1]
    * relationship = #equivalent
    * code = #focus
    * display = "ImagingMeasurementGroup.focus"

* group[5].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#130488
  * display = "Region in Space"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingSelectionRegionInSpace
    * display = "ImagingSelectionRegionInSpace"
  * target[1]
    * relationship = #equivalent
    * code = #focus
    * display = "ImagingMeasurementGroup.focus"

* group[6].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#121200
  * display = "Illustration of ROI"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingSelectionIllustrationOfROI
    * display = "ImagingSelectionIllustrationOfROI"
  * target[1]
    * relationship = #equivalent
    * code = #focus
    * display = "ImagingMeasurementGroup.focus"

* group[7].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#130401
  * display = "Visual explanation"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingSelectionVisualExplanation
    * display = "ImagingSelectionVisualExplanation"
  * target[1]
    * relationship = #equivalent
    * code = #focus
    * display = "ImagingMeasurementGroup.focus"

* group[8].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#126100
  * display = "Real World Value Map used for measurement"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingSelectionRealWorldValueMap
    * display = "ImagingSelectionRealWorldValueMap"
  * target[1]
    * relationship = #equivalent
    * code = #focus
    * display = "ImagingMeasurementGroup.focus"

* group[9].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#121191
  * display = "Referenced Segment"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingSelectionReferencedSegment
    * display = "ImagingSelectionReferencedSegment"
  * target[1]
    * relationship = #equivalent
    * code = #focus
    * display = "ImagingMeasurementGroup.focus"

* group[10].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#121231
  * display = "Volume Surface"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingSelectionVolumeSurface
    * display = "ImagingSelectionVolumeSurface"
  * target[1]
    * relationship = #equivalent
    * code = #focus
    * display = "ImagingMeasurementGroup.focus"

* group[11].element[0]
  * code = http://snomed.info/sct#370129005
  * display = "Measurement Method"
  * target
    * relationship = #equivalent
    * code = #method
    * display = "ImagingMeasurementGroup.method"

* group[12].element[0]
  * code = http://snomed.info/sct#363698007
  * display = "Finding Site"
  * target[0]
    * relationship = #equivalent
    * code = #BodyStructureFindingSite
    * display = "BodyStructureFindingSite"
  * target[1]
    * relationship = #equivalent
    * code = #bodyStructure
    * display = "ImagingMeasurementGroup.bodyStructure"

* group[13].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#TID4019
  * display = "Algorithm Identification"
  * target[0]
    * relationship = #equivalent
    * code = #AlgrithmIdentification
    * display = "AlgorithmIdentification"
    * comment = "Content from the Algorithm Identification template will be used to create a FHIR AlgorithmIdentification Device."
  * target[0]
    * relationship = #equivalent
    * code = #device
    * display = "ImagingMeasurementGroup.device"

* group[14].element[0]
  * code = http://terminology.hl7.org/CodeSystem/umls#C0034375
  * display = "Qualitative Evaluations"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingMeasurement
    * display = "ImagingMeasurement"
    * comment = "Select children of the Imaging Measurement Group container will be used to create a FHIR ImagingMeasurement Observation."
    * dependsOn[0]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#num
  * target[1]
    * relationship = #equivalent
    * code = #hasMember
    * display = "ImagingMeasurementGroup.hasMember"
    * dependsOn[0]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#num

* group[15].element[0]
  * code = http://terminology.hl7.org/CodeSystem/umls#C0034375
  * display = "Qualitative Evaluations"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingQualitativeEvaluation
    * display = "ImagingQualitativeEvaluation"
    * comment = "Select children of the Imaging Measurement Group container will be used to create a FHIR ImagingQualitativeEvaluation Observation."
    * dependsOn[0]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#text
    * dependsOn[1]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#code
  * target[1]
    * relationship = #equivalent
    * code = #hasMember
    * display = "ImagingMeasurementGroup.hasMember"
    * dependsOn[0]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#text
    * dependsOn[1]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#code

---

// File: input/fsh/ConceptMap-04-DICOMImagingMeasurement.fsh

Instance:       DICOM-Imaging-Measurement-to-FHIR
InstanceOf:     ConceptMap
Title:          "ConceptMap - DICOM Imaging Measurement to FHIR Mapping"
Usage: #definition

* id = "dicom-imaging-measurement-to-fhir"
* name = "DICOMImagingMeasurementToFHIRMapping"
* description = "Mapping between DICOM® Imaging Measurement and FHIR Resources"
* status = #active
* experimental = false
* contact[0].telecom[0].system = #url
* contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCoding = #ii
* sourceScopeUri = "DICOM-Imaging-Measurement"
* targetScopeUri = "Observation"

* additionalAttribute[0]
  * code = #IdentifierType
  * description = "DICOM Controlled Terminology"
  * uri = "http://dicom.nema.org/resources/ontology/DCM"
  * type = #Coding

* additionalAttribute[1]
  * code = #ValueType
  * description = "DICOM Value Type"
  * uri = "http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type"
  * type = #Coding

* group[0].element[0]
  * code = #$Measurement
  * display = "Measurement"
  * target[0]
    * relationship = #equivalent
    * code = #valueQuantity
    * display = "ImagingMeasurement.valueQuantity"
    * dependsOn[0]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#num

* group[1].element[0]
  * code = http://snomed.info/sct#370129005
  * display = "Measurement Method"
  * target
    * relationship = #equivalent
    * code = #method
    * display = "ImagingMeasurement.method"

* group[2].element[0]
  * code = http://snomed.info/sct#363698007
  * display = "Finding Site"
  * target[0]
    * relationship = #equivalent
    * code = #BodyStructureFindingSite
    * display = "BodyStructureFindingSite"
  * target[1]
    * relationship = #equivalent
    * code = #bodyStructure
    * display = "ImagingMeasurement.bodyStructure"

* group[3].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#TID4019
  * display = "Algorithm Identification"
  * target[0]
    * relationship = #equivalent
    * code = #AlgrithmIdentification
    * display = "AlgorithmIdentification"
    * comment = "Content from the Algorithm Identification template will be used to create a FHIR AlgorithmIdentification Device."
  * target[0]
    * relationship = #equivalent
    * code = #device
    * display = "ImagingMeasurement.device"

---

// File: input/fsh/ConceptMap-05-DICOMImagingQualitativeEvaluation.fsh

Instance:       DICOM-Imaging-qualitative-Evaluation-to-FHIR
InstanceOf:     ConceptMap
Title:          "ConceptMap - DICOM Imaging Qualitative Evaluation to FHIR Mapping"
Usage: #definition

* id = "dicom-imaging-qualitative-evaluation-to-fhir"
* name = "DICOMImagingQualitativeEvaluationToFHIRMapping"
* description = "Mapping between DICOM Imaging Qualitative Evaluation and FHIR Resources"
* status = #active
* experimental = false
* contact[0].telecom[0].system = #url
* contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCoding = #ii
* sourceScopeUri = "DICOM-Imaging-Measurement"
* targetScopeUri = "Observation"

* additionalAttribute[0]
  * code = #IdentifierType
  * description = "DICOM Controlled Terminology"
  * uri = "http://dicom.nema.org/resources/ontology/DCM"
  * type = #Coding

* additionalAttribute[1]
  * code = #ValueType
  * description = "DICOM Value Type"
  * uri = "http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type"
  * type = #Coding

* group[0].element[0]
  * code = #$QualType
  * display = "QualType"
  * target[0]
    * relationship = #equivalent
    * code = #valueCodeableConcept
    * display = "ImagingQualitativeEvaluation.valueCodeableConcept"
    * dependsOn[0]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#code
    * dependsOn[1]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#text

* group[1].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#TID4019
  * display = "Algorithm Identification"
  * target[0]
    * relationship = #equivalent
    * code = #AlgrithmIdentification
    * display = "AlgorithmIdentification"
    * comment = "Content from the Algorithm Identification template will be used to create a FHIR AlgorithmIdentification Device."
  * target[0]
    * relationship = #equivalent
    * code = #device
    * display = "ImagingQualitativeEvaluation.device"

---

// File: input/fsh/ConceptMap-06-DICOMDerivedImagingMeasurement.fsh

Instance:       DICOM-Derived-Imaging-Measurement-to-FHIR
InstanceOf:     ConceptMap
Title:          "ConceptMap - DICOM Derived Imaging Measurement to FHIR Mapping"
Usage: #definition

* id = "dicom-derived-imaging-measurement-to-fhir"
* name = "DICOMDerivedImagingMeasurementToFHIRMapping"
* description = "Mapping between DICOM® Derived Imaging Measurement and FHIR Resources"
* status = #active
* experimental = false
* contact[0].telecom[0].system = #url
* contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension[0].valueCoding = #ii
* sourceScopeUri = "DICOM-Imaging-Measurement"
* targetScopeUri = "Observation"

* additionalAttribute[0]
  * code = #IdentifierType
  * description = "DICOM Controlled Terminology"
  * uri = "http://dicom.nema.org/resources/ontology/DCM"
  * type = #Coding

* additionalAttribute[1]
  * code = #ValueType
  * description = "DICOM Value Type"
  * uri = "http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type"
  * type = #Coding

* group[0].element[0]
  * code = #CID7465
  * display = "Measurement Derived From Multiple ROI Measurements"
  * target[0]
    * relationship = #equivalent
    * code = #valueQuantity
    * display = "DerivedImagingMeasurement.valueQuantity"
    * dependsOn[0]
      * attribute = #ValueType
      * valueCoding = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-value-type#num

* group[1].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#TID4019
  * display = "Algorithm Identification"
  * target[0]
    * relationship = #equivalent
    * code = #AlgrithmIdentification
    * display = "AlgorithmIdentification"
    * comment = "Content from the Algorithm Identification template will be used to create a FHIR AlgorithmIdentification Device."
  * target[0]
    * relationship = #equivalent
    * code = #device
    * display = "DerivedImagingMeasurement.device"

* group[2].element[0]
  * code = http://dicom.nema.org/resources/ontology/DCM#125007
  * display = "Measurement Group"
  * target[0]
    * relationship = #equivalent
    * code = #ImagingMeasurementGroup
    * display = "ImagingMeasurementGroup"
    * comment = "Measurement Group children of a derived imaging measurement content item are mapped to new ImagingMeasurementGroup observations."
  * target[1]
    * relationship = #equivalent
    * code = #derivedFrom
    * display = "DerivedImagingMeasurement.derivedFrom"

---

// File: input/fsh/Device-AlgorithmIdentification.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        AlgorithmIdentification
Parent:         Device
Id:             algorithm-identification
Title:          "Device - DICOM SR Algorithm Identification Mapping"
Description:    "DICOM® SR Algorithm Identification to Device"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* displayName 0..1 MS
* type 0..* MS
* version 0..* MS
* property 0..* MS
* parent 0..1 MS

Mapping: dicom-sr-for-AlgorithmIdentification
Id: dicom-sr
Title: "DICOM SR Algorithm Identification"
Source: AlgorithmIdentification
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_4019"
Description: "The TID4019AlgorithmIdentification can be extracted from TID 4019 - Algorithm Identification."
* -> "TID4019(Algorithm Identification)"
* displayName -> "TID4109.EV(111001, DCM, Algorithm Name)"
* version -> "TID4109.EV(111003, DCM, Algorithm Version)"
* property -> "TID4109.EV(111002, DCM, Algorithm Parameters)"
* type -> "TID4109.EV(111000, DCM, Algorithm Family)"

Instance: Example-Device-AlgorithmIdentification
InstanceOf: AlgorithmIdentification
Usage: #example
Description: "An example of the Device resource corresponding to an Algorithm Identification content item."

* id = "measurement-report-algorithm"

* displayName = "pylidc"
* version
  * value = "0.2.0"
* parent = Reference(Example-Device-GeneralEquipment)
* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  \"0040A730\": { \"vr\": \"SQ\", \"Value\": [ {
  \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
  \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
  \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
    \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"111001\" ] },
    \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
    \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Algorithm Name\" ] }
  } ] },
  \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"pylidc\" ] }
  },
  {
    \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
    \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
    \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"111003\" ] },
      \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
      \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Algorithm Version\" ] }
    } ] },
    \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"0.2.0\" ] }
  } ] }
}
  </pre></div>"

---

// File: input/fsh/Device-GeneralEquipment.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        GeneralEquipmentDevice
Parent:         Device
Id:             dicom-general-equipment
Title:          "Device - DICOM General Equipment Mapping"
Description:    "DICOM® General Equipment to Device Mapping"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* identifier 0..1 MS
* displayName 0..1 MS

Mapping: dicom-sr-for-GeneralEquipmentDevice
Id: dicom-sr
Title: "DICOM SR General Equipment"
Source: GeneralEquipmentDevice
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.5.html#sect_C.7.5.1"
Description: "The GeneralEquipmentDevice can be extracted from DICOM® PS 3.3 Sect C.7.5  General Equipment Module."
* -> "DICOM PS 3.3 C.7.5.1 (General Equipment)"
* manufacturer -> "tag(0008,0070) [Manufacturer]"
* identifier -> "tag(0018,1002) [Device UID]"
* displayName -> "tag(0008,1090) [Manufacturer's Model Name]"

Instance: Example-Device-GeneralEquipment
InstanceOf: GeneralEquipmentDevice
Usage: #example
Description: "An example of the Device resource corresponding to the DICOM® General Equipment IE."

* id = "measurement-report-general-equipment"

* identifier
  * type
    * coding
      * system = "http://terminology.hl7.org/CodeSystem/v2-0203"
      * code = #UDI
  * system = "urn:dicom:uid"
  * value = "1.2.840.113747.20080222.83311413144566317081790268995.8888"
* manufacturer = "Example Device Manufacturer"
* displayName = "Example Imaging Measurement Device"
* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  \"00080070\": { \"vr\": \"LO\", \"Value\": [ \"Example Device Manufacturer\" ] },
  \"00081090\": { \"vr\": \"LO\", \"Value\": [ \"Example Imaging Measurement Device\" ] },
  \"00181002\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995.8888\" ] }
}
  </pre></div>"

---

// File: input/fsh/Device-Participant.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ParticipantDevice
Parent:         Device
Id:             dicom-participant-device
Title:          "Device - DICOM Participant Device Mapping"
Description:    "DICOM® Participant to Device Mapping"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* identifier 0..1 MS
* displayName 0..1 MS

Mapping: dicom-sr-for-ParticipantDevice
Id: dicom-sr
Title: "DICOM SR Participant Device"
Source: ParticipantDevice
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.17.2.html"
Description: "The ParticipantDevice can be extracted from the DICOM® Participant Sequence (0040,A07A) attribute."
* -> "DICOM Participant Sequence (0040,A07A)"
* manufacturer -> "tag(0008,0070) [Manufacturer]"
* identifier -> "tag(0018,1002) [Device UID]"
* displayName -> "tag(0008,1090) [Manufacturer's Model Name]"

Instance: Example-Device-Participant
InstanceOf: ParticipantDevice
Usage: #example
Description: "An example of the Device resource corresponding to the DICOM® Participant Sequence (0040,A07A)."

* id = "measurement-report-participant-device"

* identifier
  * type
    * coding
      * system = "http://terminology.hl7.org/CodeSystem/v2-0203"
      * code = #UDI
  * system = "urn:dicom:uid"
  * value = "1.2.840.113747.20080222.83311413144566317081790268995.8888"
* manufacturer = "Example Device Manufacturer"
* displayName = "Example Imaging Measurement Device"
* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  \"00080070\": { \"vr\": \"LO\", \"Value\": [ \"Example Device Manufacturer\" ] },
  \"00081090\": { \"vr\": \"LO\", \"Value\": [ \"Example Imaging Measurement Device\" ] },
  \"00181002\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995.8888\" ] }
}
  </pre></div>"

---

// File: input/fsh/ImagingSelection-Abstract-ObservationImagingSelection.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelectionObservationImagingSelection
Parent:         ImagingSelection
Id:             observation-imaging-selection
Title:          "Imaging Selection - DICOM SR Base Imaging Selection"
Description:    "DICOM® SR Base Imaging Selection. Not used directly."

* ^abstract = true
* insert DICOMSRStructureDefinitionContent

// Associated ServiceRequest
* basedOn ^slicing.discriminator.type = #type
* basedOn ^slicing.discriminator.path = "reference"
* basedOn ^slicing.rules = #open
* basedOn ^slicing.description = "Description of the related ServiceRequest"

* basedOn contains serviceRequestRef 0..1 MS
* basedOn[serviceRequestRef] only Reference(ServiceRequest)
* basedOn[serviceRequestRef] ^short = "Description of the related ServiceRequest"
* basedOn[serviceRequestRef].identifier.type 1..1
* basedOn[serviceRequestRef].identifier.type = HL7IdType#ACSN "Accession ID"
* basedOn[serviceRequestRef].identifier.value 1..1
* basedOn[serviceRequestRef].identifier ^short = "The accession number related to the performed study"

// Associated Imaging Study
* derivedFrom ^slicing.discriminator.type = #type
* derivedFrom ^slicing.discriminator.path = "reference"
* derivedFrom ^slicing.rules = #open
* derivedFrom ^slicing.description = "Description of the related ImagingStudy" 

* derivedFrom contains imagingStudyRef 1..1 MS
* derivedFrom[imagingStudyRef] only Reference(ImagingStudy)
* derivedFrom[imagingStudyRef] ^short = "Related ImagingStudy"
* derivedFrom[imagingStudyRef].identifier.type 1..1
* derivedFrom[imagingStudyRef].identifier.type = DCM#110180 "Study Instance UID"
* derivedFrom[imagingStudyRef].identifier.system = "urn:dicom:uid"
* derivedFrom[imagingStudyRef].identifier.value 1..1
* derivedFrom[imagingStudyRef].identifier ^short = "Identifier related to Study Instance UID"

* subject only Reference(Patient)
* subject 1..1 MS

---

// File: input/fsh/ImagingSelection-IllustratonOfRoi.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelectionIllustrationOfROI
Parent:         ImagingSelectionObservationImagingSelection
Id:             illustration-of-roi
Title:          "Imaging Selection - DICOM SR Illustration Of ROI Mapping"
Description:    "DICOM® SR Illustration Of ROI Mapping to ImagingSelection"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* code MS
* code.coding = DCM#121200 "Illustration of ROI"

* instance 1..* MS

Mapping: dicom-tid-1410-for-illustrationOfRoi
Id: dicom-tid-1410-illustration-of-roi
Title: "DICOM TID 1410 Illustration of ROI"
Source: ImagingSelectionIllustrationOfROI
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410"
Description: "The ImagingSelectionIllustrationOfROI can be extracted from TID 1410.EV(121200, DCM, Illustration of ROI)."
* -> "TID1410(IllustrationOfROI)"
* instance.uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance.sopClass -> "tag(0008,1150) [Referenced SOP Class UID]"

Mapping: dicom-tid-1411-for-illustrationOfRoi
Id: dicom-tid-1411-illustration-of-roi
Title: "DICOM TID 1411 Illustration of ROI"
Source: ImagingSelectionIllustrationOfROI
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1411"
Description: "The ImagingSelectionIllustrationOfROI can be extracted from TID 1411.EV(121200, DCM, Illustration of ROI)."
* -> "TID1411(IllustrationOfROI)"
* instance.uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance.sopClass -> "tag(0008,1150) [Referenced SOP Class UID]"

Instance: Example-ImagingSelection-IllustrationOfROI
InstanceOf: ImagingSelectionIllustrationOfROI
Usage: #example
Description: "An example of an Illustration of ROI referenced from a measurement report."

* id = "measurement-report-illustration-of-roi"

* subject = Reference(Example-Patient)
* derivedFrom = Reference(Example-ImagingStudy)
* status = #available
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = #121200 "Illustration of ROI"
    * display = "Illustration of ROI"
* seriesUid = "1.2.840.113747.20080222.83341314456631405221767081790268995.3"
* instance
  * uid = "1.2.840.113747.20080222.83341314456631405221767081790268995.3.1"
  * sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#1.2.840.10008.5.1.4.1.1.7.4 "Multi-frame True Color Secondary Capture Image Storage"

---

// File: input/fsh/ImagingSelection-ImageRegion2d.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelection2dImageRegion
Parent:         ImagingSelectionObservationImagingSelection
Id:             image-region-2d
Title:          "Imaging Selection - DICOM SR 2D Image Region Mapping"
Description:    "DICOM® SR Image 2D Region Mapping to ImagingSelection"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* code MS
* code.coding = DCM#111030 "Image Region"

* instance ^slicing.discriminator.type = #exists
* instance ^slicing.discriminator.path = "imageRegion2D"
* instance ^slicing.rules = #open
* instance ^slicing.ordered = false
* instance ^slicing.description = "Selected Image Instance"

* instance contains imageInstance 1..*
* instance[imageInstance].imageRegion2D 1..1 MS

Mapping: dicom-tid-1410-for-2dImageRegionProfile
Id: dicom-tid-1410-2d-image-region
Title: "DICOM TID 1410 2D Image Region"
Source: ImagingSelection2dImageRegion
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410"
Description: "The ImagingSelection2dImageRegion can be extracted from TID 1410.EV(111030, DCM, Image Region)."
* -> "TID1410(2DImageRegion)"
* instance[imageInstance].uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance[imageInstance].imageRegion2D.regionType -> "tag(0070,0023) [Graphic Type]"
* instance[imageInstance].imageRegion2D.coordinate -> "tag(0070,0022) [Graphic Data]"

Mapping: dicom-tid-1411-for-2dImageRegionProfile
Id: dicom-tid-1411-2d-image-region
Title: "DICOM TID 1411 2D Image Region"
Source: ImagingSelection2dImageRegion
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1411"
Description: "The ImagingSelection2dImageRegion can be extracted from TID 1411.EV(111030, DCM, Image Region)."
* -> "TID1411(2DImageRegion)"
* instance[imageInstance].uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance[imageInstance].imageRegion2D.regionType -> "tag(0070,0023) [Graphic Type]"
* instance[imageInstance].imageRegion2D.coordinate -> "tag(0070,0022) [Graphic Data]"

Instance: Example-ImagingSelection-ImageRegion2D
InstanceOf: ImagingSelection2dImageRegion
Usage: #example
Description: "An example of a 2D Image Region referenced from a measurement report."

* id = "measurement-report-2d-image-region"

* subject = Reference(Example-Patient)
* derivedFrom = Reference(Example-ImagingStudy)
* status = #available
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = #111030 "Image Region"
    * display = "Image Region"
* seriesUid = "1.2.840.113747.20080222.83341314456631405221767081790268995.4"
* instance
  * uid = "1.2.840.113747.20080222.83341314456631405221767081790268995.4.1"
  * sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#1.2.840.10008.5.1.4.1.1.2 "CT Image Storage"
  * imageRegion2D
    * regionType = #polyline
    * coordinate[+] = 0.25
    * coordinate[+] = 0.25
    * coordinate[+] = 0.75
    * coordinate[+] = 0.25
    * coordinate[+] = 0.75
    * coordinate[+] = 0.75
    * coordinate[+] = 0.25
    * coordinate[+] = 0.75

---

// File: input/fsh/ImagingSelection-ImageRegion3d.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelection3dImageRegion
Parent:         ImagingSelectionObservationImagingSelection
Id:             image-region-3d
Title:          "Imaging Selection - DICOM SR Image 3D Region Mapping"
Description:    "DICOM® SR Image 3D Region Mapping to ImagingSelection"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* code MS
* code.coding = DCM#111030 "Image Region"

* frameOfReferenceUid 1..1 MS

// NOTE: Commented out until FHIR-41429 is resolved
// * imageRegion3D 1..1 MS

Mapping: dicom-tid-1410-for-3dImageRegionProfile
Id: dicom-tid-1410-3d-image-region
Title: "DICOM TID 1410 3D Image Region"
Source: ImagingSelection3dImageRegion
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410"
Description: "The ImagingSelection2dImageRegion can be extracted from TID 1410.EV(111030, DCM, Image Region)."
* -> "TID1410(3DImageRegion)"
* frameOfReferenceUid -> "tag(3006,0024) [Referenced Frame of Reference UID]"

// NOTE: Commented out until FHIR-41429 is resolved
// * imageRegion3D.regionType -> "tag(0070,0023) [Graphic Type]"
// * imageRegion3D.coordinate -> "tag(0070,0022) [Graphic Data]"

Instance: Example-ImagingSelection-ImageRegion3D
InstanceOf: ImagingSelection3dImageRegion
Usage: #example
Description: "An example of a 3D Image Region referenced from a measurement report."

* id = "measurement-report-3d-image-region"

* subject = Reference(Example-Patient)
* derivedFrom = Reference(Example-ImagingStudy)
* status = #available
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = #111030 "Image Region"
    * display = "Image Region"
* frameOfReferenceUid = "1.2.840.113747.20080222.83341314456631405221767081790268995.5"
// NOTE: Commented out until FHIR-41429 is resolved
// * imageRegion3D
//   * regionType = #ellipse
//   * coordinate[+] = -50.0
//   * coordinate[+] = -50.0
//   * coordinate[+] = -50.0
//   * coordinate[+] = 50.0
//   * coordinate[+] = 50.0
//   * coordinate[+] = 50.0
//   * coordinate[+] = 25.0
//   * coordinate[+] = -25.0
//   * coordinate[+] = 0
//   * coordinate[+] = -25.0
//   * coordinate[+] = 25.0
//   * coordinate[+] = 0

---

// File: input/fsh/ImagingSelection-RealWorldValueMap.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelectionRealWorldValueMap
Parent:         ImagingSelectionObservationImagingSelection
Id:             real-world-value-map
Title:          "Imaging Selection - DICOM SR Real World Value Map"
Description:    "DICOM® SR Real World Value Map Mapping to ImagingSelection"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* code MS
* code.coding = DCM#126100 "Real World Value Map used for measurement"

* instance ^slicing.discriminator.type = #value
* instance ^slicing.discriminator.path = "sopClass"
* instance ^slicing.rules = #open
* instance ^slicing.ordered = false
* instance ^slicing.description = "Selected Real World Value Map"

* instance contains valueMapInstance 1..*
* instance[valueMapInstance].sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#1.2.840.10008.5.1.4.1.1.67 "Real World Value Mapping Storage"

Mapping: dicom-tid-1410-for-realWorldValueMapProfile
Id: dicom-tid-1410-real-world-value-map
Title: "DICOM TID 1410 Real World Value Map"
Source: ImagingSelectionRealWorldValueMap
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410"
Description: "The ImagingSelectionRealWorldValueMap can be extracted from TID 1410.EV(126100, DCM, Real World Value Map used for measurement)."
* -> "TID1410(RealWorldValueMap)"
* instance[valueMapInstance].uid -> "tag(0008,1155) [Referenced SOP Instance UID]"

Mapping: dicom-tid-1411-for-realWorldValueMapProfile
Id: dicom-tid-1411-real-world-value-map
Title: "DICOM TID 1411 Real World Value Map"
Source: ImagingSelectionRealWorldValueMap
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1411"
Description: "The ImagingSelectionRealWorldValueMap can be extracted from TID 1411.EV(126100, DCM, Real World Value Map used for measurement)."
* -> "TID1411(RealWorldValueMap)"
* instance[valueMapInstance].uid -> "tag(0008,1155) [Referenced SOP Instance UID]"

Instance: Example-ImagingSelection-RealWorldValueMap
InstanceOf: ImagingSelectionRealWorldValueMap
Usage: #example
Description: "An example of an Real World Value Map SOP Instance referenced from a measurement report."

* id = "measurement-report-referenced-real-world-value-map"

* subject = Reference(Example-Patient)
* derivedFrom = Reference(Example-ImagingStudy)
* status = #available
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = #126100 "Real World Value Map used for measurement"
    * display = "Real World Value Map used for measurement"
* seriesUid = "1.2.840.113747.20080222.83341314456631405221767081790268995.8"
* instance[valueMapInstance]
  * uid = "1.2.840.113747.20080222.83341314456631405221767081790268995.8.1"
  * sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#1.2.840.10008.5.1.4.1.1.67 "Real World Value Mapping Storage"

---

// File: input/fsh/ImagingSelection-ReferencedSegment.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelectionReferencedSegment
Parent:         ImagingSelectionObservationImagingSelection
Id:             referenced-segment
Title:          "Imaging Selection - DICOM SR Referenced Segment Mapping"
Description:    "DICOM® SR Referenced Segment Mapping to ImagingSelection"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* code MS
* code.coding = DCM#121191 "Referenced Segment"

* instance ^slicing.discriminator.type = #value
* instance ^slicing.discriminator.path = "sopClass"
* instance ^slicing.rules = #open
* instance ^slicing.ordered = false
* instance ^slicing.description = "Selected Segmentation Instance"

* instance contains segmentationInstance 1..*
* instance[segmentationInstance].sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#1.2.840.10008.5.1.4.1.1.66.4 "Segmentation Storage"
* instance[segmentationInstance].subset 1..1

Mapping: dicom-tid-1411-for-referencedSegmentProfile
Id: dicom-tid-1411-referenced-segment
Title: "DICOM TID 1411 Referenced Segment"
Source: ImagingSelectionReferencedSegment
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1411"
Description: "The ImagingSelectionReferencedSegment can be extracted from TID 1411.EV(121191, DCM, Referenced Segment)."
* -> "TID1411(Referenced Segment)"
* instance[segmentationInstance].uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance[segmentationInstance].subset -> "tag(0062,000B) [Referenced Segment Number]"

Instance: Example-ImagingSelection-ReferencedSegment
InstanceOf: ImagingSelectionReferencedSegment
Usage: #example
Description: "An example of an Segmentation SOP Instance referenced from a measurement report."

* id = "measurement-report-referenced-segment"

* subject = Reference(Example-Patient)
* derivedFrom = Reference(Example-ImagingStudy)
* status = #available
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = #121191 "Referenced Segment"
    * display = "Referenced Segment"
* seriesUid = "1.2.840.113747.20080222.83341314456631405221767081790268995.2"
* instance[segmentationInstance]
  * uid = "1.2.840.113747.20080222.83341314456631405221767081790268995.2.1"
  * sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#1.2.840.10008.5.1.4.1.1.66.4 "Segmentation Storage"
  * subset = "1"
* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
\"00081199\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00081150\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.10008.5.1.4.1.1.66.4\" ] },
      \"00081155\": { \"vr\": \"UI\", \"Value\": [ \"1.2.276.0.7230010.3.1.4.0.57823.1553343864.578878\" ] },
      \"0062000B\": { \"vr\": \"US\", \"Value\": [ 1 ] }
    } ] },
\"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
\"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"IMAGE\" ] },
\"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121191\" ] },
      \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
      \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Referenced Segment\" ] }
    } ] }
},
{
\"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
\"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"UIDREF\" ] },
\"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121232\" ] },
      \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
      \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Source series for segmentation\" ] }
    } ] },
\"0040A124\": { \"vr\": \"UI\", \"Value\": [ \"1.3.6.1.4.1.14519.5.2.1.6279.6001.273525289046256012743471155680\" ] }
}
  </pre></div>"

---

// File: input/fsh/ImagingSelection-ReferencedSegmentationFrame.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelectionReferencedSegmentationFrame
Parent:         ImagingSelectionObservationImagingSelection
Id:             referenced-segmentation-frame
Title:          "Imaging Selection - DICOM SR Referenced Segmentation Frame Mapping"
Description:    "DICOM® SR Referenced Segmentation Frame Mapping to ImagingSelection"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* code MS
* code.coding = DCM#121214 "Referenced Segmentation Frame"

* instance ^slicing.discriminator.type = #value
* instance ^slicing.discriminator.path = "sopClass"
* instance ^slicing.rules = #open
* instance ^slicing.ordered = false
* instance ^slicing.description = "Selected Segmentation Instance"

* instance contains referencedSegmentationFrame 1..*
* instance[referencedSegmentationFrame].sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#1.2.840.10008.5.1.4.1.1.66.4 "Segmentation Storage"
* instance[referencedSegmentationFrame].subset 1..1

Mapping: dicom-tid-1410-for-referencedSegmentationFrame
Id: dicom-tid-1410-referenced-segmentation-frame
Title: "DICOM TID 1410 Referenced Segmentation Frame"
Source: ImagingSelectionReferencedSegmentationFrame
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410"
Description: "The ImagingSelectionReferencedSegmentationFrame can be extracted from TID 1410.EV(121214, DCM, Referenced Segmentation Frame)."
* -> "TID1410(ReferencedSegmentationFrame)"
* instance[referencedSegmentationFrame].uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance[referencedSegmentationFrame].subset -> "tag(0062,000B) [Referenced Segment Number]"

Instance: Example-ImagingSelection-ReferencedSegmentationFrame
InstanceOf: ImagingSelectionReferencedSegmentationFrame
Usage: #example
Description: "An example of an Segmentation Frame referenced from a measurement report."

* id = "measurement-report-referenced-segmentation-frame"

* subject = Reference(Example-Patient)
* derivedFrom = Reference(Example-ImagingStudy)
* status = #available
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = #121214 "Referenced Segmentation Frame"
    * display = "Referenced Segmentation Frame"
* seriesUid = "1.2.840.113747.20080222.83341314456631405221767081790268995.2"
* instance[referencedSegmentationFrame]
  * uid = "1.2.840.113747.20080222.83341314456631405221767081790268995.2.1"
  * sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#1.2.840.10008.5.1.4.1.1.66.4 "Segmentation Storage"
  * subset = "1"

---

// File: input/fsh/ImagingSelection-RegionInSpace.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelectionRegionInSpace
Parent:         ImagingSelectionObservationImagingSelection
Id:             region-in-space
Title:          "Imaging Selection - DICOM SR Region In Space"
Description:    "DICOM® SR Region In Space Mapping to ImagingSelection"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* code MS
* code.coding = DCM#130488 "Region In Space"

* instance ^slicing.discriminator.type = #value
* instance ^slicing.discriminator.path = "sopClass"
* instance ^slicing.rules = #open
* instance ^slicing.ordered = false
* instance ^slicing.description = "Selected Image Instance"

* instance contains rtStructureInstance 1..*
* instance[rtStructureInstance].subset 1..* MS
* instance[rtStructureInstance].sopClass =  https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#11.2.840.10008.5.1.4.1.1.481.3 "RT Structure Set Storage"

Mapping: dicom-tid-1410-for-regionInSpaceProfile
Id: dicom-tid-1410-region-in-space
Title: "DICOM TID 1410 Region In Space"
Source: ImagingSelectionRegionInSpace
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410"
Description: "The ImagingSelectionRegionInSpace can be extracted from TID 1410.EV(130488, DCM, Region In Space)."
* -> "TID1410(RegionInSpace)"
* instance[rtStructureInstance].uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance[rtStructureInstance].subset -> "CID130488.CID130489.tag(0040,A160) [Text Value]"

Mapping: dicom-tid-1411-for-regionInSpaceProfile
Id: dicom-tid-1411-region-in-space
Title: "DICOM TID 1411 Region In Space"
Source: ImagingSelectionRegionInSpace
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1411"
Description: "The ImagingSelectionRegionInSpace can be extracted from TID 1411.EV(130488, DCM, Region In Space)."
* -> "TID1411(RegionInSpace)"
* instance[rtStructureInstance].uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance[rtStructureInstance].subset -> "CID130488.CID130489.tag(0040,A160) [Text Value]"

Instance: Example-ImagingSelection-RegionInSpace
InstanceOf: ImagingSelectionRegionInSpace
Usage: #example
Description: "An example of an region in space referenced from a measurement report."

* id = "measurement-report-region-in-space"

* subject = Reference(Example-Patient)
* derivedFrom = Reference(Example-ImagingStudy)
* status = #available
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = DCM#130488 "Region In Space"
    * display = "Region In Space"
* seriesUid = "1.2.840.113747.20080222.83341314456631405221767081790268995.9"
* instance[rtStructureInstance]
  * uid = "1.2.840.113747.20080222.83341314456631405221767081790268995.9.1"
  * sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#11.2.840.10008.5.1.4.1.1.481.3 "RT Structure Set Storage"
  * subset = "1"

---

// File: input/fsh/ImagingSelection-VisualExplanation.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelectionVisualExplanation
Parent:         ImagingSelectionObservationImagingSelection
Id:             visual-explanation
Title:          "Imaging Selection - DICOM SR Visual Explanation Mapping"
Description:    "DICOM® SR Visual Explanation Mapping to ImagingSelection"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

// Associated ServiceRequest
* code MS
* code.coding = DCM#130401 "Visual Explanation"

* instance 1..* MS

Mapping: dicom-tid-1410-for-visualExplanation
Id: dicom-tid-1410-visual-explanation
Title: "DICOM TID 1410 Visual Explanation"
Source: ImagingSelectionVisualExplanation
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410"
Description: "The ImagingSelectionVisualExplanation can be extracted from TID 1410.EV(130401, DCM, Visual Explanation)."
* -> "TID1410(VisualExplanation)"
* instance.uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance.sopClass -> "tag(0008,1150) [Referenced SOP Class UID]"

Mapping: dicom-tid-1411-for-visualExplanation
Id: dicom-tid-1411-visual-explanation
Title: "DICOM TID 1411 Visual Explanation"
Source: ImagingSelectionVisualExplanation
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1411"
Description: "The ImagingSelectionVisualExplanation can be extracted from TID 1411.EV(130401, DCM, Visual Explanation)."
* -> "TID1411(VisualExplanation)"
* instance.uid -> "tag(0008,1155) [Referenced SOP Instance UID]"
* instance.sopClass -> "tag(0008,1150) [Referenced SOP Class UID]"

Instance: Example-ImagingSelection-VisualExplanation
InstanceOf: ImagingSelectionVisualExplanation
Usage: #example
Description: "An example of an visual explanation referenced from a measurement report."

* id = "measurement-report-visual-explanation"

* subject = Reference(Example-Patient)
* derivedFrom = Reference(Example-ImagingStudy)
* status = #available
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = DCM#130401 "Visual Explanation"
    * display = "Visual Explanation"
* seriesUid = "1.2.840.113747.20080222.83341314456631405221767081790268995.3"
* instance
  * uid = "1.2.840.113747.20080222.83341314456631405221767081790268995.3.1"
  * sopClass = https://dicom.nema.org/medical/dicom/current/output/chtml/part04/sect_B.5#1.2.840.10008.5.1.4.1.1.7.4 "Multi-frame True Color Secondary Capture Image Storage"

---

// File: input/fsh/ImagingSelection-VolumeSurface.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingSelectionVolumeSurface
Parent:         ImagingSelectionObservationImagingSelection
Id:             volume-surface
Title:          "Imaging Selection - DICOM SR Image Volume Surface Mapping"
Description:    "DICOM® SR Image Volume Surface Mapping to ImagingSelection"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* code MS
* code.coding = DCM#121231 "Volume Surface"

* frameOfReferenceUid 1..1 MS

// NOTE: Commented out until FHIR-41429 is resolved
// * imageRegion3D 1..1 MS

Mapping: dicom-tid-1411-for-VolumeSurfaceProfile
Id: dicom-tid-1411-volume-surface
Title: "DICOM TID 1411 Volume Surface"
Source: ImagingSelectionVolumeSurface
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1411"
Description: "The ImagingSelectionVolumeSurface can be extracted from TID 1411.EV(121231, DCM, Volume Surface)."
* -> "TID1411(VolumeSurface)"
* frameOfReferenceUid -> "tag(3006,0024) [Referenced Frame of Reference UID]"
// NOTE: Commented out until FHIR-41429 is resolved
// * imageRegion3D.regionType -> "tag(0070,0023) [Graphic Type]"
// * imageRegion3D.coordinate -> "tag(0070,0022) [Graphic Data]"

Instance: Example-ImagingSelection-VolumeSurface
InstanceOf: ImagingSelectionVolumeSurface
Usage: #example
Description: "An example of an Volume Surface referenced from a measurement report."

* id = "measurement-report-volume-surface"

* subject = Reference(Example-Patient)
* derivedFrom = Reference(Example-ImagingStudy)
* status = #available
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = DCM#121231 "Volume Surface"
    * display = "Volume Surface"
* frameOfReferenceUid = "1.2.840.113747.20080222.83341314456631405221767081790268995.5"
// NOTE: Commented out until FHIR-41429 is resolved
// * imageRegion3D
//   * regionType = #ellipse
//   * coordinate[+] = -50.0
//   * coordinate[+] = -50.0
//   * coordinate[+] = -50.0
//   * coordinate[+] = 50.0
//   * coordinate[+] = 50.0
//   * coordinate[+] = 50.0
//   * coordinate[+] = 25.0
//   * coordinate[+] = -25.0
//   * coordinate[+] = 0
//   * coordinate[+] = -25.0
//   * coordinate[+] = 25.0
//   * coordinate[+] = 0

---

// File: input/fsh/Observation-Abstract-ImagingObservation.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingObservationProfile
Parent:         Observation
Id:             imaging-observation
Title:          "Observation - DICOM SR Imaging Observation"
Description:    "DICOM® SR Base Observation for Imaging Measurement Groups, Imaging Measurements and Qualitative Evaluations. Not used directly."

* ^abstract = true
* insert DICOMSRStructureDefinitionContent

* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.ordered = false
* identifier ^slicing.description = "Identifiers for the measurement group"

* identifier contains observationUID 0..* MS
* identifier[observationUID].type = DCMIdType#observation-uid "Observation UID"
* identifier[observationUID].system = "urn:dicom:uid"
* identifier[observationUID].value 1..1
* identifier[observationUID] ^short = "The unique identifier for the observation."

// Associated ServiceRequest
* basedOn ^slicing.discriminator.type = #type
* basedOn ^slicing.discriminator.path = "reference"
* basedOn ^slicing.rules = #open
* basedOn ^slicing.description = "Description of the related ServiceRequest"

* basedOn contains serviceRequestRef 0..1 MS
* basedOn[serviceRequestRef] only Reference(ServiceRequest)
* basedOn[serviceRequestRef] ^short = "Description of the related ServiceRequest"
* basedOn[serviceRequestRef].identifier.type 1..1
* basedOn[serviceRequestRef].identifier.type = HL7IdType#ACSN "Accession ID"
* basedOn[serviceRequestRef].identifier.value 1..1
* basedOn[serviceRequestRef].identifier ^short = "The accession number related to the performed study"

// Associated Imaging Study
* partOf ^slicing.discriminator.type = #type
* partOf ^slicing.discriminator.path = "reference"
* partOf ^slicing.rules = #open
* partOf ^slicing.description = "Description of the related ImagingStudy" 

* partOf contains imagingStudyRef 1..1 MS
* partOf[imagingStudyRef] only Reference(ImagingStudy)
* partOf[imagingStudyRef] ^short = "Related ImagingStudy"
* partOf[imagingStudyRef].identifier.type 1..1
* partOf[imagingStudyRef].identifier.type = DCM#110180 "Study Instance UID"
* partOf[imagingStudyRef].identifier.system = "urn:dicom:uid"
* partOf[imagingStudyRef].identifier.value 1..1
* partOf[imagingStudyRef].identifier ^short = "Identifier related to Study Instance UID"

* category MS
* code MS

* subject only Reference(Patient)
* subject 1..1 MS

* focus ^slicing.discriminator.type = #profile
* focus ^slicing.discriminator.path = "resolve()"
* focus ^slicing.rules = #open
* focus ^slicing.ordered = false
* focus ^slicing.description = "Observation foci"

* focus contains trackingIdentifiers 0..* MS
* focus[trackingIdentifiers] only Reference(BodyStructureTrackingIdentifiers)

* focus contains imageRegion2d 0..* MS
* focus[imageRegion2d] only Reference(ImagingSelection2dImageRegion)
* focus[imageRegion2d] ^short = "2D Image Region"

* focus contains imageRegion3d 0..* MS
* focus[imageRegion3d] only Reference(ImagingSelection3dImageRegion)
* focus[imageRegion3d] ^short = "3D Image Region"

* focus contains referencedSegment 0..* MS
* focus[referencedSegment] only Reference(ImagingSelectionReferencedSegment)
* focus[referencedSegment] ^short = "Referenced Segment"

* focus contains referencedSegmentationFrame 0..* MS
* focus[referencedSegmentationFrame] only Reference(ImagingSelectionReferencedSegmentationFrame)
* focus[referencedSegmentationFrame] ^short = "Referenced Segmentation Frame"

* focus contains regionInSpace 0..* MS
* focus[regionInSpace] only Reference(ImagingSelectionRegionInSpace)
* focus[regionInSpace] ^short = "RegionInSpace"

* focus contains volumeSurface 0..* MS
* focus[volumeSurface] only Reference(ImagingSelectionVolumeSurface)
* focus[volumeSurface] ^short = "Volume Surface"

* focus contains realWorldValueMap 0..* MS
* focus[realWorldValueMap] only Reference(ImagingSelectionRealWorldValueMap)
* focus[realWorldValueMap] ^short = "Real World Value Map"

* focus contains illustrationOfRoi 0..* MS
* focus[illustrationOfRoi] only Reference(ImagingSelectionIllustrationOfROI)
* focus[illustrationOfRoi] ^short = "Illustration of ROI"

* focus contains visualExplanation 0..* MS
* focus[visualExplanation] only Reference(ImagingSelectionVisualExplanation)
* focus[visualExplanation] ^short = "VisualExplanation"

// Observation Date Time
* issued 1..1 MS
* issued ^short = "Observation Date Time"

* interpretation MS

* device 1..1 MS
* device only Reference(AlgorithmIdentification or GeneralEquipmentDevice or ParticipantDevice)

* bodyStructure MS
* bodyStructure only Reference(BodyStructureFindingSite)

Instance: Example-Observation-ImagingObservation
InstanceOf: ImagingObservationProfile
Usage: #example
Description: "Example of the base Imaging Observation"

* id = "imaging-observation"
* subject = Reference(Example-Patient)
* basedOn = Reference(Example-ServiceRequest)
* partOf = Reference(Example-ImagingStudy)
* issued = "2024-07-24T08:23:42+00:00"
* effectiveDateTime = "2024-07-24T08:23:42+00:00"
* status = #final
* performer = Reference(Example-Practitioner)
* code
  * coding
    * system = "http://snomed.info/sct"
    * code = #241053004 "Radiographic measurement of lung volume"
    * display = "Radiographic measurement of lung volume"

* focus[trackingIdentifiers] = Reference(Example-BodyStructure-TrackingIdentifiers)

// Test of all imaging selection profiles
* focus[illustrationOfRoi] = Reference(Example-ImagingSelection-IllustrationOfROI)
* focus[imageRegion2d] = Reference(Example-ImagingSelection-ImageRegion2D)
* focus[imageRegion3d] = Reference(Example-ImagingSelection-ImageRegion3D)
* focus[realWorldValueMap] = Reference(Example-ImagingSelection-RealWorldValueMap)
* focus[referencedSegment] = Reference(Example-ImagingSelection-ReferencedSegment)
* focus[referencedSegmentationFrame] = Reference(Example-ImagingSelection-ReferencedSegmentationFrame)
* focus[regionInSpace] = Reference(Example-ImagingSelection-RegionInSpace)
* focus[visualExplanation] = Reference(Example-ImagingSelection-VisualExplanation)
* focus[volumeSurface] = Reference(Example-ImagingSelection-VolumeSurface)

* bodyStructure = Reference(Example-BodyStructure-FindingSite)
* device = Reference(Example-Device-GeneralEquipment)
* valueCodeableConcept
  * coding
    * system = "http://snomed.info/sct"
    * code = #427359005 "Solitary nodule of lung"
    * display = "Solitary nodule of lung"


---

// File: input/fsh/Observation-DerivedImagingMeasurement.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        DerivedImagingMeasurementProfile
Parent:         Observation
Id:             derived-imaging-measurement
Title:          "Observation - DICOM SR Derived Imaging Measurement Mapping to Observation"
Description:    "DICOM® SR Derived Imaging Measurement Mapping to Observation"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.ordered = false
* identifier ^slicing.description = "Identifiers for the derived measurement"

* identifier contains observationUID 0..* MS
* identifier[observationUID].type = DCMIdType#observation-uid "Observation UID"
* identifier[observationUID].system = "urn:dicom:uid"
* identifier[observationUID].value 1..1
* identifier[observationUID] ^short = "The unique identifier for the measurement group."

// Associated ServiceRequest
* basedOn ^slicing.discriminator.type = #type
* basedOn ^slicing.discriminator.path = "reference"
* basedOn ^slicing.rules = #open
* basedOn ^slicing.description = "Description of the related ServiceRequest"

* basedOn contains serviceRequestRef 0..1 MS
* basedOn[serviceRequestRef] only Reference(ServiceRequest)
* basedOn[serviceRequestRef] ^short = "Description of the related ServiceRequest"
* basedOn[serviceRequestRef].identifier.type 1..1
* basedOn[serviceRequestRef].identifier.type = HL7IdType#ACSN "Accession ID"
* basedOn[serviceRequestRef].identifier.value 1..1
* basedOn[serviceRequestRef].identifier ^short = "The accession number related to the performed study"

// Associated Imaging Study
* partOf ^slicing.discriminator.type = #type
* partOf ^slicing.discriminator.path = "reference"
* partOf ^slicing.rules = #open
* partOf ^slicing.description = "Description of the related ImagingStudy" 

* partOf contains imagingStudyRef 1..1 MS
* partOf[imagingStudyRef] only Reference(ImagingStudy)
* partOf[imagingStudyRef] ^short = "Related ImagingStudy"
* partOf[imagingStudyRef].identifier.type 1..1
* partOf[imagingStudyRef].identifier.type = DCM#110180 "Study Instance UID"
* partOf[imagingStudyRef].identifier.system = "urn:dicom:uid"
* partOf[imagingStudyRef].identifier.value 1..1
* partOf[imagingStudyRef].identifier ^short = "Identifier related to Study Instance UID"

* category MS
* category = DCM#126011 "Derived Imaging Measurements"

* code MS

* subject only Reference(Patient)
* subject 1..1 MS

// Observation Date Time
* issued 1..1 MS
* issued ^short = "Observation Date Time"

* device 1..1 MS
* device only Reference(AlgorithmIdentification or GeneralEquipmentDevice)

* referenceRange MS
* valueQuantity MS

* derivedFrom ^slicing.discriminator.type = #type
* derivedFrom ^slicing.discriminator.path = "reference"
* derivedFrom ^slicing.rules = #open
* derivedFrom ^slicing.description = "Source Imaging Measurement Groups"

* derivedFrom contains imagingMeasurementGroupRef 1..* MS
* derivedFrom[imagingMeasurementGroupRef] only Reference(ImagingMeasurementGroup)
* derivedFrom[imagingMeasurementGroupRef] ^short = "Source Imaging Measurement Groups"

Mapping: dicom-sr-for-TID1420DerivedMeasurementProfile
Id: dicom-sr-tid-1420
Title: "DICOM SR TID 1420 Measurements Derived From Multiple ROI Measurements"
Source: DerivedImagingMeasurementProfile
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1420"
Description: "The TID300Measurement can be extracted from TID 1420 - Measurements Derived From Multiple ROI Measurements."
* -> "TID1420(DerivedImagingMeasurement)"
* subject -> "tag(0010,0020) [Patient ID]"
* identifier[observationUID] -> "tag(0040,A171) [Observation UID]"
* code -> "TID1420.DCID7465.tag(0040,A043) [Concept Name Code Sequence]"
* issued -> "tag(0040,A032) [Observation DateTime]"
* referenceRange -> "TID1420.TID310"
* device -> "TID1420.TID4019"
* valueQuantity -> "TID1420.DCID7465.tag(0040,A300) [Measured Value Sequence]"
* derivedFrom -> "TID1420.TID1410 or TID1420.TID1411"

Instance: Example-Observation-DerivedImagingMeasurement
InstanceOf: DerivedImagingMeasurementProfile
Usage: #example
Description: "Example of Observation representing a DICOM SR Derived Imaging Measurement."

* id = "derived-imaging-measurement"
* subject = Reference(Example-Patient)
* basedOn = Reference(Example-ServiceRequest)
* partOf = Reference(Example-ImagingStudy)
* issued = "2024-07-24T08:23:42+00:00"
* effectiveDateTime = "2024-07-24T08:23:42+00:00"
* status = #final
* performer = Reference(Example-Practitioner)
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = #126031 "Peak Value Within ROI"
    * display = "Peak Value Within ROI"
* device = Reference(Example-Device-GeneralEquipment)
* valueQuantity
  * value = 123.45
  * unit = "Hounsfield unit"
  * system = "http://unitsofmeasure.org"
  * code = #[hnsf'U]
* derivedFrom = Reference(Example-Observation-ImagingMeasurementGroup)

---

// File: input/fsh/Observation-ImagingMeasurement.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingMeasurement
Parent:         ImagingObservationProfile
Id:             imaging-measurement
Title:          "Observation - DICOM SR Imaging Measurement Mapping to Observation"
Description:    "DICOM® SR Imaging Measurement Mapping to Observation"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* referenceRange MS

* bodyStructure MS
* bodyStructure only Reference(BodyStructureFindingSite)

* valueQuantity 1..1 MS

Mapping: dicom-sr-for-TID300MeasurementProfile
Id: dicom-sr-tid-300
Title: "DICOM SR TID 300 Measurement"
Source: ImagingMeasurement
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_300"
Description: "The TID300Measurement can be extracted from TID 300 - Measurement."
* -> "TID300(Measurement)"
* identifier[observationUID] -> "tag(0040,A171) [Observation UID]"
* subject -> "tag(0010,0020) [Patient ID]"
* code -> "TID300.$Measurement.tag(0040,A043) [Concept Name Code Sequence]"
* issued -> "tag(0040,A032) [Observation DateTime]"
* method -> "TID1501.EV(370129005, SCT, Measurement Method)"
* device -> "TID4019(Algorithm Identification)"
* valueQuantity -> "TID300.$Measurement.tag(0040,A300) [Measured Value Sequence]"

Mapping: dicom-sr-for-TID1419MeasurementProfile
Id: dicom-sr-tid-1419
Title: "DICOM SR TID 1419 Measurement"
Source: ImagingMeasurement
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1419"
Description: "The TID1419Measurement can be extracted from TID 1419 - ROI Measurements."
* -> "TID1419(ROIMeasurement)"
* identifier[observationUID] -> "tag(0040,A171) [Observation UID]"
* subject -> "tag(0010,0020) [Patient ID]"
* code -> "TID1419.$Measurement.tag(0040,A043) [Concept Name Code Sequence]"
* issued -> "tag(0040,A032) [Observation DateTime]"
* method -> "TID1501.EV(370129005, SCT, Measurement Method)"
* device -> "TID4019(Algorithm Identification)"
* valueQuantity -> "TID1419.$Measurement.tag(0040,A300) [Measured Value Sequence]"

Instance: Example-Observation-ImagingMeasurement-001
InstanceOf: ImagingMeasurement
Usage: #example
Description: "Example of Observation representing a DICOM® SR Imaging Measurement."

* id = "imaging-measurement-001"
* subject = Reference(Example-Patient)
* basedOn = Reference(Example-ServiceRequest)
* partOf = Reference(Example-ImagingStudy)
* issued = "2024-07-24T08:23:42+00:00"
* effectiveDateTime = "2024-07-24T08:23:42+00:00"
* status = #final
* performer = Reference(Example-Practitioner)
* code
  * coding
    * system = "http://snomed.info/sct"
    * code = #118565006 "Volume"
    * display = "Volume"
* focus[referencedSegment] = Reference(Example-ImagingSelection-ReferencedSegment)
* focus[trackingIdentifiers] = Reference(Example-BodyStructure-TrackingIdentifiers)
* bodyStructure = Reference(Example-BodyStructure-FindingSite)
* device = Reference(Example-Device-AlgorithmIdentification)
* valueQuantity
  * value = 6705.54990898997
  * unit = "cubic millimeter"
  * system = "http://unitsofmeasure.org"
  * code = #mm3

Instance: Example-Observation-ImagingMeasurement-002
InstanceOf: ImagingMeasurement
Usage: #example
Description: "Example of Observation representing a DICOM® SR Imaging Measurement."

* id = "imaging-measurement-002"
* subject = Reference(Example-Patient)
* basedOn = Reference(Example-ServiceRequest)
* partOf = Reference(Example-ImagingStudy)
* issued = "2024-07-24T08:23:42+00:00"
* effectiveDateTime = "2024-07-24T08:23:42+00:00"
* status = #final
* performer = Reference(Example-Practitioner)
* code
  * coding
    * system = "http://snomed.info/sct"
    * code = #81827009 "Diameter"
    * display = "Diameter"
* focus[referencedSegment] = Reference(Example-ImagingSelection-ReferencedSegment)
* focus[trackingIdentifiers] = Reference(Example-BodyStructure-TrackingIdentifiers)
* bodyStructure = Reference(Example-BodyStructure-FindingSite)
* device = Reference(Example-Device-AlgorithmIdentification)
* valueQuantity
  * value = 6705.54990898997
  * unit = "millimeter"
  * system = "http://unitsofmeasure.org"
  * code = #mm

Instance: Example-Observation-ImagingMeasurement-003
InstanceOf: ImagingMeasurement
Usage: #example
Description: "Example of Observation representing a DICOM® SR Imaging Measurement."

* id = "imaging-measurement-003"
* subject = Reference(Example-Patient)
* basedOn = Reference(Example-ServiceRequest)
* partOf = Reference(Example-ImagingStudy)
* issued = "2024-07-24T08:23:42+00:00"
* effectiveDateTime = "2024-07-24T08:23:42+00:00"
* status = #final
* performer = Reference(Example-Practitioner)
* code
  * coding
    * system = "http://snomed.info/sct"
    * code = #301898006 "Body surface area"
    * display = "Body surface area"
* focus[referencedSegment] = Reference(Example-ImagingSelection-ReferencedSegment)
* focus[trackingIdentifiers] = Reference(Example-BodyStructure-TrackingIdentifiers)
* bodyStructure = Reference(Example-BodyStructure-FindingSite)
* device = Reference(Example-Device-GeneralEquipment)
* valueQuantity
  * value = 9.026567E+03
  * unit = "square millimeter"
  * system = "http://unitsofmeasure.org"
  * code = #mm2


---

// File: input/fsh/Observation-ImagingMeasurementGroup.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Invariant:   measurement-group-category
Description: "If Observation.code is 'measurement group' it should not also be the category"
Expression:  "code = 'DCM#125007' implies category.not().exists()"
Severity:    #error

Profile:        ImagingMeasurementGroup
Parent:         ImagingObservationProfile
Id:             imaging-measurement-group
Title:          "Observation - DICOM SR Imaging Measurement Group Mapping"
Description:    "DICOM® SR Imaging Measurement Group Mapping to Observation"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* category MS
* category = DCM#125007 "Measurement Group"

* hasMember ^slicing.discriminator.type = #profile
* hasMember ^slicing.discriminator.path = "resolve()"
* hasMember ^slicing.rules = #open
* hasMember ^slicing.ordered = false
* hasMember ^slicing.description = "Child Imaging Measurements and Qualitative Evaluations"

// Imaging Measurements
* hasMember contains imagingMeasurement 0..* MS
* hasMember[imagingMeasurement] only Reference(ImagingMeasurement)

// Imaging Qualitative Evaluations
* hasMember contains qualitativeEvaluation 0..* MS
* hasMember[qualitativeEvaluation] only Reference(ImagingQualitativeEvaluation)

* value[x] MS
* value[x] only CodeableConcept
* value[x] ^short = "Observation finding"

Mapping: dicom-sr-for-TID1410PlanarROIMeasurementGroup
Id: dicom-sr-tid-1410
Title: "DICOM SR TID 1410 Planar ROI Measurement Group"
Source: ImagingMeasurementGroup
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1410"
Description: "The TID1410PlanarROIMeasurementGroup can be extracted from TID 1410 - Planar ROI Measurements and Qualitative Evaluations."
* -> "TID1410(Planar ROI Measurements and Qualitative Evaluations)"
* identifier[observationUID] -> "tag(0040,A171) [Observation UID]"
* subject -> "tag(0010,0020) [Patient ID]"
* code -> "TID1410.EV(276214006, SCT, Finding category) > DCM#125007 'Measurement Group'"
* valueCodeableConcept -> "TID1410.EV(121071, DCM, Finding)"
* issued -> "tag(0040,A032) [Observation DateTime]"
* method -> "TID1501.EV(370129005, SCT, Measurement Method)"
* interpretation -> "TID1410.$QualType, TID.1410QualModType$"
* device -> "TID4019(Algorithm Identification)"

Mapping: dicom-sr-for-TID1411VolumetricROIMeasurementGroup
Id: dicom-sr-tid-1411
Title: "DICOM SR TID 1411 Volumetric ROI Measurement Group"
Source: ImagingMeasurementGroup
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1411"
Description: "The TID1411PlanarROIMeasurementGroup can be extracted from TID 1411 - Volumetric ROI Measurements and Qualitative Evaluations."
* -> "TID1411(Volumetric ROI Measurements and Qualitative Evaluations)"
* identifier[observationUID] -> "tag(0040,A171) [Observation UID]"
* subject -> "tag(0010,0020) [Patient ID]"
* code -> "TID1411.EV(276214006, SCT, Finding category) > DCM#125007 'Measurement Group'"
* valueCodeableConcept -> "TID1411.EV(121071, DCM, Finding)"
* issued -> "tag(0040,A032) [Observation DateTime]"
* method -> "TID1501.EV(370129005, SCT, Measurement Method)"
* interpretation -> "TID1411.$QualType, TID.1411QualModType$"
* device -> "TID4019(Algorithm Identification)"

Mapping: dicom-sr-for-TID1501PlanarROIMeasurementGroupProfile
Id: dicom-sr-tid-1501
Title: "DICOM SR TID 1501 Measurement and Qualitative Evaluation Group"
Source: ImagingMeasurementGroup
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1501"
Description: "The TID1501PlanarROIMeasurementGroup can be extracted from TID 1501 - Measurement and Qualitative Evaluation Group."
* -> "TID1501(Measurement and Qualitative Evaluation Group)"
* identifier[observationUID] -> "tag(0040,A171) [Observation UID]"
* subject -> "tag(0010,0020) [Patient ID]"
* code -> "TID1501.EV(276214006, SCT, Finding category) > DCM#125007 'Measurement Group'"
* valueCodeableConcept -> "TID1501.EV(121071, DCM, Finding)"
* issued -> "tag(0040,A032) [Observation DateTime]"
* method -> "TID1501.EV(370129005, SCT, Measurement Method)"
* interpretation -> "TID1501.$QualType, TID.1501QualModType$"
* device -> "TID4019(Algorithm Identification)"

Instance: Example-Observation-ImagingMeasurementGroup
InstanceOf: ImagingMeasurementGroup
Usage: #example
Description: "Example of Observation representing a DICOM SR Measurement Group"

* id = "imaging-measurement-group"
* subject = Reference(Example-Patient)
* basedOn = Reference(Example-ServiceRequest)
* partOf = Reference(Example-ImagingStudy)
* issued = "2024-07-24T08:23:42+00:00"
* effectiveDateTime = "2024-07-24T08:23:42+00:00"
* status = #final
* performer = Reference(Example-Practitioner)
* code
  * coding
    * system = "http://snomed.info/sct"
    * code = #241053004 "Radiographic measurement of lung volume"
    * display = "Radiographic measurement of lung volume"
* category
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = #125007 "Measurement Group"
    * display = "Measurement Group"
* focus[referencedSegment] = Reference(Example-ImagingSelection-ReferencedSegment)
* focus[trackingIdentifiers] = Reference(Example-BodyStructure-TrackingIdentifiers)
* bodyStructure = Reference(Example-BodyStructure-FindingSite)
* device = Reference(Example-Device-GeneralEquipment)
* valueCodeableConcept
  * coding
    * system = "http://snomed.info/sct"
    * code = #427359005 "Solitary nodule of lung"
    * display = "Solitary nodule of lung"
* hasMember[imagingMeasurement][+] = Reference(Example-Observation-ImagingMeasurement-001)
* hasMember[imagingMeasurement][+] = Reference(Example-Observation-ImagingMeasurement-002)
* hasMember[imagingMeasurement][+] = Reference(Example-Observation-ImagingMeasurement-003)
* hasMember[qualitativeEvaluation][+] = Reference(Example-Observation-ImagingQualitativeEvaluation-001)
* hasMember[qualitativeEvaluation][+] = Reference(Example-Observation-ImagingQualitativeEvaluation-002)

* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{{
   \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
   \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINER\" ] },
   \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
         \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"125007\" ] },
         \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
         \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Measurement Group\" ] }
       } ] },
   \"0040A050\": { \"vr\": \"CS\", \"Value\": [ \"SEPARATE\" ] },
   \"0040A504\": { \"vr\": \"SQ\", \"Value\": [ {
         \"00080105\": { \"vr\": \"CS\", \"Value\": [ \"DCMR\" ] },
         \"00080118\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.10008.8.1.1\" ] },
         \"0040DB00\": { \"vr\": \"CS\", \"Value\": [ \"1411\" ] }
       } ] },
   \"0040A730\": { \"vr\": \"SQ\", \"Value\": [ {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
         \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"112039\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Tracking Identifier\" ] }
             } ] },
         \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"Nodule 1\" ] }
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"UIDREF\" ] },
         \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"112040\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Tracking Unique Identifier\" ] }
             } ] },
         \"0040A124\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995.100\" ] }
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
         \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"276214006\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Finding category\" ] }
             } ] },
         \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"241053004\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Radiographic measurement of lung volume\" ] }
             } ] }
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
         \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121071\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Finding\" ] }
             } ] },
         \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"427359005\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Nodule\" ] }
             } ] }
       },
       {
         \"00081199\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00081150\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.10008.5.1.4.1.1.66.4\" ] },
               \"00081155\": { \"vr\": \"UI\", \"Value\": [ \"1.2.276.0.7230010.3.1.4.0.57823.1553343864.578878\" ] },
               \"0062000B\": { \"vr\": \"US\", \"Value\": [ 1 ] }
             } ] },
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"IMAGE\" ] },
         \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121191\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Referenced Segment\" ] }
             } ] }
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"UIDREF\" ] },
         \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121232\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Source series for segmentation\" ] }
             } ] },
         \"0040A124\": { \"vr\": \"UI\", \"Value\": [ \"1.3.6.1.4.1.14519.5.2.1.6279.6001.273525289046256012743471155680\" ] }
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
         \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"363698007\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Finding Site\" ] }
             } ] },
         \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
               \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"39607008\" ] },
               \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
               \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Lung\" ] }
             } ] }
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"NUM\" ] },
         ...
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"NUM\" ] },
         ...
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"NUM\" ] },
         ...
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
         ...
       },
       {
         \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
         \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
         ...
       } ] }
 }
  </pre></div>"

---

// File: input/fsh/Observation-ImagingQualitativeEvaluation.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ImagingQualitativeEvaluation
Parent:         ImagingObservationProfile
Id:             imaging-qualitative-evaluation
Title:          "Observation - DICOM SR Imaging Qualitative Evaluation Mapping to Observation"
Description:    "DICOM® SR Imaging Qualitative Evaluation Mapping to Observation"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* category 1..* MS
* category = http://terminology.hl7.org/CodeSystem/umls#C0034375 "Qualitative Evaluations"

* valueCodeableConcept 1..1 MS

Mapping: dicom-sr-for-TID1500MeasurementReportProfile
Id: dicom-sr-tid-1500
Title: "DICOM SR TID 1500 Measurement Report"
Source: ImagingQualitativeEvaluation
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_A.html#sect_TID_1500"
Description: "The Qualitative Evaluation can be extracted from TID 1500 - Measurement Report."
* -> "TID1500(MeasurementReport)"
* identifier[observationUID] -> "tag(0040,A171) [Observation UID]"
* subject -> "tag(0010,0020) [Patient ID]"
* code -> "TID1500.EV(C0034375, UMLS, Qualitative Evaluations)[n].tag(0040,A043) [Concept Name Code Sequence]"
* issued -> "tag(0040,A032) [Observation DateTime]"
* valueCodeableConcept -> "TID1500.EV(C0034375, UMLS, Qualitative Evaluations)[n].tag(0040,A160) [Text Value] or .tag(0040,A168) [Concept Code Sequence]"

Instance: Example-Observation-ImagingQualitativeEvaluation-001
InstanceOf: ImagingQualitativeEvaluation
Usage: #example
Description: "Example of Observation representing a DICOM® SR Measurement Qualitative Evaluation."

* id = "qualitative-evaluation-001"
* subject = Reference(Example-Patient)
* basedOn = Reference(Example-ServiceRequest)
* partOf = Reference(Example-ImagingStudy)
* issued = "2024-07-24T08:23:42+00:00"
* effectiveDateTime = "2024-07-24T08:23:42+00:00"
* status = #final
* performer = Reference(Example-Practitioner)
* code
  * coding
    * system = "https://ncit.nci.nih.gov"
    * code = #C45992 "Subtlety score"
    * display = "Subtlety score"
* category = http://terminology.hl7.org/CodeSystem/umls#C0034375 "Qualitative Evaluations"
* focus[referencedSegment] = Reference(Example-ImagingSelection-ReferencedSegment)
* focus[trackingIdentifiers] = Reference(Example-BodyStructure-TrackingIdentifiers)
* bodyStructure = Reference(Example-BodyStructure-FindingSite)
* device = Reference(Example-Device-GeneralEquipment)
* valueCodeableConcept
  * coding
    * system = "http://cancerimagingarchive.net"
    * code = #105 "5 out of 5 (Obvious)"
    * display = "5 out of 5 (Obvious)"

Instance: Example-Observation-ImagingQualitativeEvaluation-002
InstanceOf: ImagingQualitativeEvaluation
Usage: #example
Description: "Example of Observation representing a DICOM® SR Measurement Qualitative Evaluation."

* id = "qualitative-evaluation-002"
* subject = Reference(Example-Patient)
* basedOn = Reference(Example-ServiceRequest)
* partOf = Reference(Example-ImagingStudy)
* issued = "2024-07-24T08:23:42+00:00"
* effectiveDateTime = "2024-07-24T08:23:42+00:00"
* status = #final
* performer = Reference(Example-Practitioner)
* code
  * coding
    * system = "http://radlex.org"
    * code = #RID36042 "Malignancy"
* category = http://terminology.hl7.org/CodeSystem/umls#C0034375 "Qualitative Evaluations"
* focus[referencedSegment] = Reference(Example-ImagingSelection-ReferencedSegment)
* focus[trackingIdentifiers] = Reference(Example-BodyStructure-TrackingIdentifiers)
* bodyStructure = Reference(Example-BodyStructure-FindingSite)
* device = Reference(Example-Device-GeneralEquipment)
* valueCodeableConcept
  * coding
    * system = "http://cancerimagingarchive.net"
    * code = #905 "5 out of 5 (Highly Suspicious for Cancer)"
    * display = "5 out of 5 (Highly Suspicious for Cancer)"

---

// File: input/fsh/Practitioner-Participant.fsh

Alias: DCM = http://dicom.nema.org/resources/ontology/DCM
Alias: SCT = http://snomed.info/sct
Alias: LOINC =  http://loinc.org
Alias: DCMIdType = http://hl7.org/fhir/uv/dicom-sr/CodeSystem/dicom-identifier-type
Alias: HL7IdType = http://terminology.hl7.org/CodeSystem/v2-0203

Profile:        ParticipantPractitioner
Parent:         Practitioner
Id:             dicom-participant-person
Title:          "Device - DICOM Participant Practitioner Mapping"
Description:    "DICOM® Participant to Practitioner Mapping"

* ^abstract = false
* insert DICOMSRStructureDefinitionContent

* name 0..1 MS

Mapping: dicom-sr-for-ParticipantPractitioner
Id: dicom-sr
Title: "DICOM SR Participant Practitioner"
Source: ParticipantPractitioner
Target: "https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.17.2.html"
Description: "The Practitioner can be extracted from the DICOM® Participant Sequence (0040,A07A) attribute."
* -> "DICOM Participant Sequence (0040,A07A)"
* name -> "EV(121008, DCM, Person Observer Name).tag(0040,A123) [Person Name]"

Instance: Example-Practitioner
InstanceOf: Practitioner
Usage: #example
Description: "An example of an Practitioner referenced from a measurement report."

* id = "measurement-report-practitioner"

* name
  * family = "RADIOLOGIST"
  * given = "EXAMPLE"

* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  {
    \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
    \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"PNAME\" ] },
    \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
          \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121008\" ] },
          \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
          \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Person Observer Name\" ] }
        } ] },
    \"0040A123\": { \"vr\": \"PN\", \"Value\": [ { \"Alphabetic\": \"RADIOLOGIST^EXAMPLE\" } ] }
  }
}
  </pre></div>"

---

// File: input/fsh/RuleSet-DICOMSRDefinition.fsh

// Define a rule set for commonly used rules for definition resources using other Sushi features
RuleSet: DICOMSRStructureDefinitionContent

* ^status = #active
* ^experimental = false
* ^version = "1.0.0"
* ^publisher = "HL7 International"
* ^contact[0].name = "HL7 International / Imaging Integration"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://www.hl7.org/Special/committees/imagemgt"
* ^contact[1].name = "Chris Lindop"
* ^contact[1].telecom[0].system = #email
* ^contact[1].telecom[0].value = "mailto:christopher.lindop@ge.com"
* ^contact[2].name = "Jonathan Whitby"
* ^contact[2].telecom[0].system = #email
* ^contact[2].telecom[0].value = "mailto:jonathan.whitby@mi.medical.canon"
* ^jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #ii

---

// File: input/images-source/4_1_dicom_sr_measurement_report_mapping_overview.plantuml

@startuml dicom_sr_measurement_report_mapping_overview
skinparam componentStyle rectangle
allowmixing
left to right direction
package "DICOM SR Measurement Report" as measurementReport {
    package "Document IE" as documentIE {
        package "SR Content Sequence" as srContentSequence {
            package "Imaging Measurements Container" as imagingMeasurementsContainer {
                package "0..* Measurements Group" as measurementsGroup {
                    object "0..* Numerical Measurement" as numericalMeasurement
                    object "0..* Qualitative Evaluation" as measurementGroupQualitativeEvaluation
                }
                package "0..* Derived Imaging Measurements" as derivedImagingMeasurements {
                    object "0..* Measurements Group" as derivedMeasurementsGroup
                }
                package "Qualitative Evaluations" as qualitativeEvaluations {
                    object "0..* Qualitative Evaluation" as qualitativeEvaluation
                }
            }
        }
    }
}

component "[[mapping.html#dicom-sr-measurement-report-instance-mapping DICOM SR Measurement Report Instance Mapping]]" as measurementReportInstanceMapping
component "[[mapping.html#document-ie-mapping Document IE Mapping]]" as documentIEMapping
component "[[mapping.html#imaging-measurements-container-mapping Imaging Measurements Container Mapping]]" as imagingMeasurementsContainerMapping
component "[[mapping.html#imaging-measurement-group-mapping Imaging Measurements Group Mapping]]" as imagingMeasurementGroupMapping
component "[[mapping.html#imaging-measurement-mapping Imaging Measurement Mapping]]" as imagingMeasurementMapping
component "[[mapping.html#imaging-qualitative-evaluation-mapping Qualitative Evaluation Mapping]]" as qualitativeEvaluationMapping
component "[[mapping.html#derived-imaging-measurement-mapping Derived Imaging Measurements Mapping]]" as derivedImagingMeasurementsMapping

measurementReport --> measurementReportInstanceMapping: Map contents of Measurement Report Instance
documentIE --> documentIEMapping: Map contents of Document IE
imagingMeasurementsContainer --> imagingMeasurementsContainerMapping: Map contents of Imaging Measurements Container
measurementsGroup --> imagingMeasurementGroupMapping: Map contents of Measurements Group
numericalMeasurement --> imagingMeasurementMapping: Map contents of Imaging Measurement
measurementGroupQualitativeEvaluation --> qualitativeEvaluationMapping: Map contents of Qualitative Evaluation
derivedImagingMeasurements --> derivedImagingMeasurementsMapping: Map contents of Derived Imaging Measurements
derivedMeasurementsGroup --> imagingMeasurementGroupMapping: Map contents of Measurements Group
qualitativeEvaluation --> qualitativeEvaluationMapping: Map contents of Qualitative Evaluation

@enduml

---

// File: input/images-source/4_2_dicom_sr_measurement_report_mapping.plantuml

@startuml dicom_sr_measurement_report_mapping
left to right direction
package "DICOM SR Measurement Report" {
    object "Patient IE" as patientIE
    object "Study IE" as studyIE
    object "General Equipment IE" as equipmentIE
    object "Document IE" as documentIE
}
object Patient {
    identifier = PatientID
}
object ImagingStudy {
    identifier = StudyInstanceUID
}
object ServiceRequest {
    identifier = AccessionNumber
}
object "Device - EquipmentDevice" as equipmentDevice {
    identifier = Device UID
    displayName = Manufacturer Model Name
}

map "[[mapping.html#document-ie-mapping Document IE Mapping]]" as documentIEMapping {
    subject => Patient
    partOf => ImagingStudy
    basedOn => ServiceRequest
    device => EquipmentDevice
}

patientIE --> Patient: Create Patient Reference from Patient IE
studyIE --> ImagingStudy: Create Patient Reference from Study IE
studyIE --> ServiceRequest: Create Patient Reference from Study IE
equipmentIE --> equipmentDevice: Create EquipmentDevice from General Equipment IE

documentIE --> documentIEMapping: Map contents of Document IE
@enduml

---

// File: input/images-source/4_3_dicom_document_ie_mapping.plantuml

@startuml dicom_sr_document_ie_mapping
left to right direction

map "[[mapping.html#dicom-sr-measurement-report-instance-mapping Inputs from DICOM SR Measurement Report Instance Mapping]]" as inputs {
    subject => Patient
    partOf => ImagingStudy
    basedOn => ServiceRequest
    device => EquipmentDevice
}

package "Document IE" {
    object documentGeneralModule {
        PreliminaryFlag
        ParticipantSequence
    }
    package "SR Content Sequence" as srContentSequence {
        object "Imaging Measurements Container" as imagingMeasurements
    }
}

map "[[mapping.html#imaging-measurements-container-mapping Imaging Measurements Container Mapping]]" as imagingMeasurementsMapping {
    subject => Patient
    partOf => ImagingStudy
    basedOn => ServiceRequest
    device => EquipmentDevice or ParticipantSequence (Device)
    performer => ParticipantSequence (Person)
    status => PreliminaryFlag
}

imagingMeasurements --> imagingMeasurementsMapping: Map contents of Imaging Measurements Container
inputs --> imagingMeasurementsMapping
documentGeneralModule --> imagingMeasurementsMapping
@enduml

---

// File: input/images-source/4_4_imaging_measurements_container_mapping.plantuml

@startuml imaging_measurements_container_mapping
left to right direction

map "[[mapping.html#document-ie-mapping Inputs from DICOM Document IE Mapping]]" as inputs {
   subject => Patient
   partOf => ImagingStudy
   basedOn => ServiceRequest
   device => EquipmentDevice
}

package "Imaging Measurements Container" as imagingMeasurementGroup {
   object "Algorithm Identification" as algorithm
   object "Measurement Group" as measurementGroup
   package "Derived Imaging Measurements" {
      object "Derived Imaging Measurement" as derivedMeasurement
   }
   package "Qualitative Evaluations" {
      object "Qualitative Evaluation" as qualitativeEvaluations
   }
}

object "Device - AlgorithmIdentification" as AlgorithmIdentification {
    parent = EquipmentDevice
}

algorithm --> AlgorithmIdentification: Create AlgorithmIdentification from Algorithm Identification content item

map "[[mapping.html#imaging-measurement-group-mapping Imaging Measurement Group Mapping]]" as measurementGroupMap {
    subject => Patient
    partOf => ImagingStudy
    basedOn => ServiceRequest
    device => AlgorithmIdentification or EquipmentDevice
}

map "[[mapping.html#derived-imaging-measurement-mapping Derived Imaging Measurement Mapping]]" as derivedMeasurementsMap {
    subject => Patient
    partOf => ImagingStudy
    basedOn => ServiceRequest
    device => AlgorithmIdentification or EquipmentDevice
}

map "[[mapping.html#imaging-qualitative-evaluation-mapping Imaging Qualitative Evaluation Mapping]]" as qualitativeEvaluationsMap {
    subject => Patient
    partOf => ImagingStudy
    basedOn => ServiceRequest
    device => AlgorithmIdentification or EquipmentDevice
}

inputs -> measurementGroupMap
inputs -> derivedMeasurementsMap
inputs -> qualitativeEvaluationsMap
measurementGroup --> measurementGroupMap: Map contents of Measurement Group Container
derivedMeasurement --> derivedMeasurementsMap: Map contents of Derived Measurements Container
qualitativeEvaluations -> qualitativeEvaluationsMap: Map contents of Qualitative Evaluations Container

@enduml

---

// File: input/images-source/4_5_imaging_measurement_group_mapping.plantuml

@startuml imaging_measurement_group_mapping
left to right direction

map "[[mapping.html#imaging-measurements-container-mapping Inputs from Imaging Measurements Container Mapping]]" as inputs {
   subject => Patient
   partOf => ImagingStudy
   basedOn => ServiceRequest
   device => EquipmentDevice
}

package "Measurements Group" as measurementGroup {
   object "Algorithm Identification" as algorithm
   object "Tracking Identifier / UID" as tracking
   object "Finding" as finding
   object "Finding Category" as findingCategory
   object "Finding Site" as BodyStructureFindingSite
   object "Image Region / Reference" as imageRegion
   object "Measurement Method" as method
   package "Numerical Measurements" {
    object "Numerical Measurement" as measurement
   }
}

object "Device - AlgorithmIdentification" as AlgorithmIdentification {
    parent = EquipmentDevice
}

object "Body Structure - BodyStructureTrackingIdentifiers" as TrackingBodyStructure {
    identifier = TrackingID or TrackingUID
}

object "Body Structure - BodyStructureFindingSite" as BodyStructureFindingSite {
    includedStructure.structure = Finding Site
}

object ImagingSelection 

object "Observation - Imaging Measurement Group" as imagingMeasurementGroup {
    subject = Patient
    partOf = ImagingStudy
    basedOn = ServiceRequest
    device = EquipmentDevice or AlgorithmIdentification
    focus = BodyStructureTrackingIdentifiers
    focus = ImagingSelection
    bodyStructure = BodyStructureFindingSite
    code = Finding Category or DCM#125007 "Measurement Group"
    method = Measurement Method
    valueCodeableConcept = Finding
    hasMember = ImagingMeasurement
}

map "[[mapping.html#imaging-measurement-mapping Imaging Measurement Mapping]]" as imagingMeasurementMap {
    subject => Patient
    partOf => ImagingStudy
    basedOn => ServiceRequest
    focus => TrackingBodyStructure
    focus => ImagingSelection
    bodyStructure => BodyStructureFindingSite
    device => AlgorithmIdentification or EquipmentDevice
}

algorithm --> AlgorithmIdentification: Create AlgorithmIdentification from Algorithm Identification content item
tracking --> TrackingBodyStructure: Create BodyStructure reference from Tracking Identifier / UID
BodyStructureFindingSite --> BodyStructureFindingSite: Create BodyStructure from Finding Site
imageRegion --> ImagingSelection: Create ImagingSelection from image reference or region

inputs --> imagingMeasurementGroup
AlgorithmIdentification --> imagingMeasurementGroup
TrackingBodyStructure --> imagingMeasurementGroup
finding --> imagingMeasurementGroup
findingCategory --> imagingMeasurementGroup
BodyStructureFindingSite --> imagingMeasurementGroup
ImagingSelection --> imagingMeasurementGroup
measurementGroup --> imagingMeasurementGroup
method --> imagingMeasurementGroup

inputs --> imagingMeasurementMap
measurement --> imagingMeasurementMap: Map numerical measurements to ImagingMeasurement Observations
imagingMeasurementMap <-- imagingMeasurementGroup: hasMember
@enduml

---

// File: input/images-source/4_6_imaging_measurement_mapping.plantuml

@startuml imaging_measurement_mapping

map "[[mapping.html#imaging-measurement-group-mapping Inputs from Imaging Measurements Group Mapping]]" as inputs {
   subject => Patient
   partOf => ImagingStudy
   basedOn => ServiceRequest
   focus => ImagingSelection and / or BodyStructureTrackingIdentifiers
   bodyStructure => BodyStructureFindingSite
   device => Algorithm Identification or EquipmentDevice
   method => Measurement Method
}

object "Device - AlgorithmIdentification" as AlgorithmIdentification {
    parent = EquipmentDevice
}

object "Body Structure - BodyStructureFindingSite" as BodyStructureFindingSite {
    includedStructure.structure = Finding Site
}

object "ImagingMeasurement Observation" as imagingMeasurement {
    subject = Patient
    partOf = ImagingStudy
    basedOn = ServiceRequest
    device = AlgorithmIdentification or parent device
    focus = parent focus values
    bodyStructure = BodyStructureFindingSite or parent BodyStructureFindingSite
    code = Concept Name Code Sequence
    issued = Observation DateTime
    method = Measurement Method or parent method
    valueQuantity = Measured Value Sequence
}

imagingMeasurement --> AlgorithmIdentification: Create AlgorithmIdentification from Algorithm Identification content item
imagingMeasurement --> BodyStructureFindingSite: Create BodyStructure from Finding Site

inputs --> imagingMeasurement


@enduml

---

// File: input/images-source/4_7_imaging_qualitative_evaluation_mapping.plantuml

@startuml imaging_qualitative_evaluation_mapping

map "[[mapping.html#imaging-measurements-container-mapping Inputs from Imaging Measurements Container Mapping]]" as inputs {
   subject => Patient
   partOf => ImagingStudy
   basedOn => ServiceRequest
   focus => ImagingSelection and / or BodyStructureTrackingIdentifiers
   bodyStructure => BodyStructureFindingSite
   device => Algorithm Identification or EquipmentDevice
   method => Measurement Method
}

object "Device - AlgorithmIdentification" as AlgorithmIdentification {
    parent = EquipmentDevice
}

object "Body Structure - BodyStructureFindingSite" as BodyStructureFindingSite {
    includedStructure.structure = Finding Site
}

object "ImagingQualitativeEvaluation Observation" as imagingQualitativeEvaluation {
    subject = Patient
    partOf = ImagingStudy
    basedOn = ServiceRequest
    device = AlgorithmIdentification or parent device
    focus = parent focus values
    bodyStructure = parent FindingSite
    code = Concept Name Code Sequence
    issued = Observation DateTime
    valueCodeableConcept = QualType
}

imagingQualitativeEvaluation --> AlgorithmIdentification: Create AlgorithmIdentification from Algorithm Identification content item
imagingQualitativeEvaluation --> BodyStructureFindingSite: Create BodyStructure from Finding Site

inputs --> imagingQualitativeEvaluation


@enduml

---

// File: input/images-source/4_8_derived_imaging_measurement_mapping.plantuml

@startuml derived_imaging_measurement_mapping

map "[[mapping.html#imaging-measurements-container-mapping Inputs from Imaging Measurements Container Mapping]]" as inputs {
   subject => Patient
   partOf => ImagingStudy
   basedOn => ServiceRequest
   device => EquipmentDevice
}

package "Derived Imaging Measurement" as derivedMeasurement {
   object "Algorithm Identification" as algorithm
   package "Measurement Groups" {
    object "Measurement Group" as measurementGroup
   }
}

object "Device - AlgorithmIdentification" as AlgorithmIdentification {
    parent = EquipmentDevice
}

object "Observation - Derived Imaging Measurement" as derivedImagingMeasurement {
    subject = Patient
    partOf = ImagingStudy
    basedOn = ServiceRequest
    device = EquipmentDevice or AlgorithmIdentification
    code = Concept Name Code Sequence
    valueCodeableConcept = Finding
    valueQuantity = Measured Value Sequence
    derivedFrom = ImagingMeasurementGroup
}

map "[[mapping.html#imaging-measurement-group-mapping Imaging Measurement Group Mapping]]" as imagingMeasurementGroupMap {
    subject => Patient
    partOf => ImagingStudy
    basedOn => ServiceRequest
    device => AlgorithmIdentification or EquipmentDevice
}

algorithm --> AlgorithmIdentification: Create AlgorithmIdentification from Algorithm Identification content item

inputs --> derivedImagingMeasurement
AlgorithmIdentification --> derivedImagingMeasurement
derivedMeasurement --> derivedImagingMeasurement

inputs --> imagingMeasurementGroupMap
measurementGroup --> imagingMeasurementGroupMap: Map measurement group children to ImagingMeasurementGroup Observations
derivedImagingMeasurement <-- imagingMeasurementGroupMap: derivedFrom
@enduml

---

// File: input/images-source/dicom_sr_device.plantuml

@startuml dicom_sr_device
left to right direction

class "Equipment" as EquipmentDevice <<Device>> #d5e8d4 ##green
class "Measurement Group Algorithm" as MeasurementGroupDevice <<Device>> #d5e8d4 ##green
class "Measurement Algorithm" as MeasurementDevice <<Device>> #d5e8d4 ##green
class "Qualitative Evaluation Algorithm" as QualitativeDevice <<Device>> #d5e8d4 ##green

class "Imaging Measurement Group" as ImagingMeasurementGroup <<Observation>> #d5e8d4 ##green
class "Imaging Measurement" as ImagingMeasurement <<Observation>> #d5e8d4 ##green
class "Imaging Qualitative Evaluation" as ImagingQualitativeEvaluation <<Observation>> #d5e8d4 ##green
note "If Measurement Group Algorithm is not present device is Equipment." as MGNote
note "If Measurement Algorithm is not present device is Equipment." as MNote
note "If Qualitative Evaluation Algorithm is not present device is Equipment." as QENote

package DICOM.equipment.ie #EEEEEE {
    package DICOM.document.ie #EEEEEE {
        package TID.1500.measurement.report #EEEEEE {
            package CONTAINER.imaging.measurements {
                package 0..n.CONTAINER.imaging.measurement.group {
                    Object 0..n.imaging.measurement
                    Object 0..n.imaging.qualitative.evaluation
                    }
            }
            package CONTAINER.qualitative.evaluations {
                Object 0..n.qualitative.evaluation
            }
        }
    }
}

DICOM.equipment.ie --> EquipmentDevice: maps to

CONTAINER.imaging.measurements --> ImagingMeasurementGroup : contains[0..*]
CONTAINER.qualitative.evaluations --> ImagingQualitativeEvaluation : contains[0..*]

ImagingMeasurementGroup --> ImagingMeasurement : hasMember[0..*]
ImagingMeasurementGroup --> ImagingQualitativeEvaluation : hasMember[0..*]
ImagingMeasurementGroup --> MeasurementGroupDevice : device[1..1]
ImagingMeasurementGroup --> EquipmentDevice : device[1..1]
ImagingMeasurementGroup .. MGNote
MGNote .. MeasurementGroupDevice
MGNote .. EquipmentDevice


ImagingMeasurement --> MeasurementDevice : device[1..1]
ImagingMeasurement --> EquipmentDevice : device[1..1]
ImagingMeasurement .. MNote
MNote .. MeasurementDevice
MNote .. EquipmentDevice

ImagingQualitativeEvaluation --> QualitativeDevice : device[1..1]
ImagingQualitativeEvaluation --> EquipmentDevice : device[1..1]
ImagingQualitativeEvaluation .. QENote
QENote .. QualitativeDevice
QENote .. EquipmentDevice


MeasurementDevice --> EquipmentDevice : parent[1..1]

MeasurementGroupDevice --> EquipmentDevice : parent[1..1]

QualitativeDevice --> EquipmentDevice : parent[1..1]

@enduml


---

// File: input/images-source/dicom_sr_resource_relationships.plantuml

@startuml dicom_sr_resource_relationships
left to right direction

class Patient
class ImagingStudy
class ServiceRequest
class Device
class Practitioner
class Observation
class ImagingSelection
class BodyStructure

package "Resource Profiles in this IG" {
    package "Device -- One per observation" {
        class GeneralEquipmentDevice
        class ParticipantDevice
        class AlgorithmIdentification
    }

    class ParticipantPractitioner

    abstract ObservationImagingSelection
    package "ImagingSelection -- Only one per observation" {
        class IllustrationOfRoi
        class ImageRegion2d
        Class ImageRegion3d
        class RealWorldValueMap
        class ReferencedSegment
        class ReferencedSegmentationFrame
        class RegionInSpace
        class VisualExplanation
        class VolumeSurface
    }

    class FindingSite
    class TrackingIdentifiers

    abstract ImagingObservation
    class ImagingMeasurementGroup
    class ImagingMeasurement
    class ImagingQualitativeEvaluation
    class DerivedImagingMeasurement
}
GeneralEquipmentDevice <|-- Device
ParticipantDevice <|-- Device
AlgorithmIdentification <|-- Device

ParticipantPractitioner <|-- Practitioner

ImagingObservation <|-- Observation
ImagingMeasurementGroup <|-- ImagingObservation
ImagingMeasurement <|-- ImagingObservation
ImagingQualitativeEvaluation <|-- ImagingObservation
DerivedImagingMeasurement <|-- Observation

ObservationImagingSelection <|-- ImagingSelection
IllustrationOfRoi <|-- ObservationImagingSelection
ImageRegion2d <|-- ObservationImagingSelection
ImageRegion3d <|-- ObservationImagingSelection
RealWorldValueMap <|-- ObservationImagingSelection
ReferencedSegment <|-- ObservationImagingSelection
ReferencedSegmentationFrame <|-- ObservationImagingSelection
RegionInSpace <|-- ObservationImagingSelection
VisualExplanation <|-- ObservationImagingSelection
VolumeSurface <|-- ObservationImagingSelection

FindingSite <|-- BodyStructure
TrackingIdentifiers <|-- BodyStructure

Observation --> Patient: subject
Observation --> ImagingStudy: basedOn
Observation --> ServiceRequest: derivedFrom

ImagingObservation --> GeneralEquipmentDevice: device
ImagingObservation --> ParticipantDevice: device
ImagingObservation --> AlgorithmIdentification: device
ImagingObservation --> ParticipantPractitioner: performer
DerivedImagingMeasurement --> GeneralEquipmentDevice: device
DerivedImagingMeasurement --> ParticipantDevice: device
DerivedImagingMeasurement --> AlgorithmIdentification: device
DerivedImagingMeasurement --> ParticipantPractitioner: performer

ImagingObservation --> FindingSite: bodyStructure
ImagingObservation --> TrackingIdentifiers: focus

ImagingObservation --> IllustrationOfRoi: focus
ImagingObservation --> ImageRegion2d: focus
ImagingObservation --> ImageRegion3d: focus
ImagingObservation --> RealWorldValueMap: focus
ImagingObservation --> ReferencedSegment: focus
ImagingObservation --> ReferencedSegmentationFrame: focus
ImagingObservation --> RegionInSpace: focus
ImagingObservation --> VisualExplanation: focus
ImagingObservation --> VolumeSurface: focus

ImagingMeasurementGroup --> ImagingMeasurement: hasMember
ImagingMeasurementGroup --> ImagingQualitativeEvaluation: hasMember

DerivedImagingMeasurement --> ImagingMeasurementGroup: derivedFrom

@enduml

---

// File: input/images-source/dicom_sr_workflow.plantuml

@startuml dicom_sr_workflow
start
:Create Patient Reference from Patient IE|
:Patient Reference>
:Create ImagingStudy Reference from Study IE|
:ImagingStudy Reference>
:Create ServiceRequest Reference from Study IE|
:ServiceRequest Reference>
:Create EquipmentDevice from General Equipment IE|
:EquipmentDevice>
:Find Imaging Measurements Container|
:Process Imaging Measurements Container|
partition "Inputs" {
    :Patient Reference<
    :ImagingStudy Reference<
    :ImagingStudy Reference<
    :EquipmentDevice<
}
end

@enduml

---

// File: input/images-source/imaging_selection_profiles.plantuml

@startuml imaging_selection_profiles

Object "TID 1410" as tid_1410
tid_1410 : Planar ROI
Object "TID 1411" as tid_1411
tid_1411 : Volumetric ROI
Object "TID 1501" as tid_1501
tid_1501 : Measurement and QE Group

Object "Image Region 2D" as image_region_2d
image_region_2d : VT = SCOORD

Object "Referenced Segmentation Frame" as referenced_segmentation_frame
referenced_segmentation_frame : VT = IMAGE

Object "Image Region 3D" as image_region_3d
image_region_3d : VT = SCOORD3D

Object "Region in Space" as region_in_space
region_in_space : VT = COMPOSITE

Object "Illustration of ROI" as illustration_of_roi
illustration_of_roi : VT = IMAGE

Object "Visual Explanation" as visual_explanation
visual_explanation : VT = IMAGE

Object "Real World Value Map" as real_world_value_map
real_world_value_map : VT = COMPOSITE

Object "Referenced Segment" as referenced_segment
referenced_segment : VT = IMAGE

Object "Volume Surface" as volume_surface
volume_surface : VT = SCOORD3D

Object "Image Source" as image_source
image_source : VT = IMAGE

Object "Source Image for Segmentation" as source_image_for_segmentation
source_image_for_segmentation : VT = IMAGE

Object "Source Series for Segmentation" as source_series_for_segmentation
source_series_for_segmentation : VT = UIDREF

tid_1410 -- image_region_2d: XOR
tid_1410 -- referenced_segmentation_frame: XOR
referenced_segmentation_frame -- source_image_for_segmentation
tid_1410 -- image_region_3d: XOR
tid_1410 -- region_in_space: XOR
tid_1410 -- illustration_of_roi
tid_1410 -- visual_explanation
tid_1410 -- real_world_value_map

tid_1411 -- image_region_2d: XOR
tid_1411 -- referenced_segment: XOR
referenced_segment -- source_series_for_segmentation: XOR
referenced_segment -- source_image_for_segmentation: XOR
tid_1411 -- volume_surface: XOR
volume_surface -- source_series_for_segmentation: XOR
volume_surface -- source_image_for_segmentation: XOR
tid_1411 -- region_in_space: XOR
tid_1411 -- illustration_of_roi
tid_1411 -- visual_explanation
tid_1411 -- real_world_value_map

tid_1501 -- image_source
tid_1501 -- image_region_2d
tid_1501 -- image_region_3d

@enduml

---

// File: input/images-source/tid_1500_measurement_report.plantuml

@startuml tid_1500_measurement_report
left to right direction

class "Imaging Measurement Group" as ImagingMeasurementGroup <<Observation>> #d5e8d4 ##green
class "Imaging Measurement" as ImagingMeasurement <<Observation>> #d5e8d4 ##green
class "Derived Imaging Measurement" as DerivedImagingMeasurement <<Observation>> #d5e8d4 ##green
class "Imaging Qualitative Evaluation" as ImagingQualitativeEvaluation <<Observation>> #d5e8d4 ##green

package TID.1500.measurement.report #EEEEEE {
    package CONTAINER.imaging.measurements {
        package 0..n.CONTAINER.imaging.measurement.group {
            Object 0..n.imaging.measurement
            Object 0..n.imaging.qualitative.evaluation
        }
    }
    package CONTAINER.derived.imaging.measurements {
        Object 0..n.derived.imaging.measurement
    }
    package CONTAINER.qualitative.evaluations {
        Object 0..n.qualitative.evaluation
    }
}

"0..n.CONTAINER.imaging.measurement.group" -> ImagingMeasurementGroup : maps to
"0..n.derived.imaging.measurement" --> DerivedImagingMeasurement : maps to
"0..n.qualitative.evaluation" --> ImagingQualitativeEvaluation : maps to

ImagingMeasurementGroup --> ImagingMeasurement : hasMember[0..*]
ImagingMeasurementGroup --> ImagingQualitativeEvaluation : hasMember[0..*]
DerivedImagingMeasurement --> ImagingMeasurementGroup : derivedFrom[0..*]
@enduml


---

// File: input/images-source/use_case_1_reporting.plantuml

@startuml dicom_sr_report_extraction
title Use case 1: Extracting imaging results for use in reporting

participant "Measurement Report Creator" as sr_creator
participant "DICOM SR FHIR IG Implementor" as ig_implementor
participant "FHIR Service" as fhir_service
participant "Reporting Application" as report_creator
actor "Report Creator" as reporter

sr_creator -> sr_creator: Create DICOM SR Measurement Report
ig_implementor -> sr_creator: Retrieve DICOM SR Measurement Report
ig_implementor -> ig_implementor: Extract FHIR Observations and related resources
ig_implementor -> fhir_service: Store FHIR Observations and related resources
report_creator -> fhir_service: Retrieve FHIR Observations and related resources
reporter -> report_creator: Review FHIR Observations and related resources
reporter -> report_creator: Create report containing selected FHIR Observations and related resources

@enduml

---

// File: input/images-source/use_case_2_fhircast.plantuml

@startuml fhircast_content_sharing
title Use case 2: Extracting imaging results for FHIRcast content sharing

participant "Measurement Report Creator" as sr_creator
participant "DICOM SR FHIR IG Implementor" as ig_implementor
participant "FHIRcast Hub" as fhircast_hub
participant "Reporting Application" as report_creator
actor "Report Creator" as reporter

sr_creator -> sr_creator: Create DICOM SR Measurement Report
ig_implementor -> sr_creator: Retrieve DICOM SR Measurement Report
ig_implementor -> ig_implementor: Extract FHIR Observations and related resources
ig_implementor -> fhircast_hub: Store FHIR Observations and related resources
report_creator -> fhircast_hub: Retrieve FHIR Observations and related resources
reporter -> report_creator: Review FHIR Observations and related resources
reporter -> report_creator: Create report containing selected FHIR Observations and related resources

@enduml

---

// File: input/fsh/Example-DICOMSRMeasurementReport.fsh

Instance: Example-DiagnosticReport-DICOMSRMeasurementReport
InstanceOf: DiagnosticReport
Usage: #example
Description: "An example of a DICOM® SR measurement report."

* id = "dicom-sr-measurement-report"
* status = #final
* code
  * coding
    * system = "http://dicom.nema.org/resources/ontology/DCM"
    * code = #126000 "Imaging Measurement Report"
    * display = "Imaging Measurement Report"
* subject = Reference(Example-Patient)
* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  \"00080012\": { \"vr\": \"DA\", \"Value\": [ \"20190323\" ] },
  \"00080013\": { \"vr\": \"TM\", \"Value\": [ \"082428\" ] },
  \"00080014\": { \"vr\": \"UI\", \"Value\": [ \"1.2.276.0.7230010.3.0.3.6.3\" ] },
  \"00080016\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.10008.5.1.4.1.1.88.22\" ] },
  \"00080018\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995.1.1\" ] },
  \"00080020\": { \"vr\": \"DA\", \"Value\": [ \"20000101\" ] },
  \"00080021\": { \"vr\": \"DA\", \"Value\": [ \"20190323\" ] },
  \"00080023\": { \"vr\": \"DA\", \"Value\": [ \"20190323\" ] },
  \"00080030\": { \"vr\": \"TM\", \"Value\": [ \"082428\" ] },
  \"00080031\": { \"vr\": \"TM\", \"Value\": [ \"082428\" ] },
  \"00080033\": { \"vr\": \"TM\", \"Value\": [ \"082428\" ] },
  \"00080050\": { \"vr\": \"SH\" , \"Value\": \"ACSN-235813\" },
  \"00080051\": { \"vr\": \"SQ\",  \"Value\": [ {
        \"00400031\": { \"vr\": \"UT\", \"Value\": [ \"Test Hospital\" ] },
        \"00400032\": { \"vr\": \"UT\", \"Value\": [ \"http://test-hospital.org/acsn\" ] },
        \"00400033\": { \"vr\": \"CS\", \"Value\": [ \"URI\" ] }
      } ] },
  \"00080060\": { \"vr\": \"CS\", \"Value\": [ \"SR\" ] },
  \"00080070\": { \"vr\": \"LO\", \"Value\": [ \"Example Device Manufacturer\" ] },
  \"00080090\": { \"vr\": \"PN\" },
  \"00081090\": { \"vr\": \"LO\", \"Value\": [ \"Example Imaging Measurement Device\" ] },
  \"00081111\": { \"vr\": \"SQ\" },
  \"00100010\": { \"vr\": \"PN\", \"Value\": [ { \"Alphabetic\": \"EXAMPLE^MEASUREMENT^PATIENT}\" } ]},
  \"00100020\": { \"vr\": \"LO\", \"Value\": [ \"PID-11235\" ] },
  \"00100021\": { \"vr\": \"LO\", \"Value\": [ \"Test Hospital\" ] },
  \"00100024\": { \"vr\": \"SQ\",  \"Value\": [ {
    \"00400032\": { \"vr\": \"UT\", \"Value\": [ \"test-hospital.org\" ] },
    \"00400033\": { \"vr\": \"CS\", \"Value\": [ \"URI\" ] }
  } ] },
  \"00100030\": { \"vr\": \"DA\", \"Value\": [ \"19670701\" ] },
  \"00100040\": { \"vr\": \"CS\", \"Value\": [ \"F\" ] },
  \"0020000D\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995\" ] },
  \"0020000E\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995.1\" ] },
  \"00200010\": { \"vr\": \"SH\", \"Value\": [ \"SID-235813\" ] },
  \"00200011\": { \"vr\": \"IS\", \"Value\": [ \"9\" ] },
  \"00200013\": { \"vr\": \"IS\", \"Value\": [ \"1\" ] },
  \"0040A260\": { \"vr\": \"SQ\" },
  \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINER\" ] },
  \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
    \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"126000\" ] },
    \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
    \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Imaging Measurement Report\" ] }
  } ] },
  \"0040A050\": { \"vr\": \"CS\", \"Value\": [ \"SEPARATE\" ] },
  \"0040A073\": { \"vr\": \"SQ\", \"Value\": [ {
        \"0040A027\": { \"vr\": \"LO\", \"Value\": [ \"Test Hospital\" ] },
        \"0040A030\": { \"vr\": \"DT\", \"Value\": [ \"20190323082428\" ] },
        \"0040A075\": { \"vr\": \"PN\", \"Value\": [ { \"Alphabetic\": \"RADIOLOGIST^EXAMPLE\" } ] },
        \"0040A088\": { \"vr\": \"SQ\" }
      } ] },
  \"0040A491\": { \"vr\": \"CS\", \"Value\": [ \"COMPLETE\" ] },
  \"0040A493\": { \"vr\": \"CS\", \"Value\": [ \"VERIFIED\" ] },
  \"0040A504\": { \"vr\": \"SQ\", \"Value\": [ {
    \"00080105\": { \"vr\": \"CS\", \"Value\": [ \"DCMR\" ] },
    \"00080118\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.10008.8.1.1\" ] },
    \"0040DB00\": { \"vr\": \"CS\", \"Value\": [ \"1500\" ] }
  } ] },
  \"0040A730\": { \"vr\": \"SQ\", \"Value\": [ {
    \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
    \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
    \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121049\" ] },
      \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
      \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Language of Content Item and Descendants\" ] }
    } ] },
    \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"eng\" ] },
      \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"RFC5646\" ] },
      \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"English\" ] }
    } ] }
  },
  {
    \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
    \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
    \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121005\" ] },
      \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
      \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Observer Type\" ] }
    } ] },
    \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121006\" ] },
      \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
      \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Person\" ] }
    } ] }
  },
  {
    \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
    \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"PNAME\" ] },
    \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121008\" ] },
      \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
      \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Person Observer Name\" ] }
    } ] },
    \"0040A123\": { \"vr\": \"PN\", \"Value\": [ { \"Alphabetic\": \"RADIOLOGIST^EXAMPLE\" } ] }
  },
  {
    \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
    \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINER\" ] },
    \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
      \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"126010\" ] },
      \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
      \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Imaging Measurements\" ] }
    } ] },
    \"0040A050\": { \"vr\": \"CS\", \"Value\": [ \"SEPARATE\" ] },
    \"0040A730\": { \"vr\": \"SQ\", \"Value\": [ {
      \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
      \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINER\" ] },
      \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
        \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"125007\" ] },
        \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
        \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Measurement Group\" ] }
      } ] },
      \"0040A050\": { \"vr\": \"CS\", \"Value\": [ \"SEPARATE\" ] },
      \"0040A504\": { \"vr\": \"SQ\", \"Value\": [ {
        \"00080105\": { \"vr\": \"CS\", \"Value\": [ \"DCMR\" ] },
        \"00080118\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.10008.8.1.1\" ] },
        \"0040DB00\": { \"vr\": \"CS\", \"Value\": [ \"1411\" ] }
      } ] },
      \"0040A730\": { \"vr\": \"SQ\", \"Value\": [ {
        \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
        \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
        \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
          \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"C67447\" ] },
          \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"NCIt\" ] },
          \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Activity Session\" ] }
        } ] },
        \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"1\" ] }
      },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"112039\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Tracking Identifier\" ] }
          } ] },
          \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"Nodule 1\" ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS OBS CONTEXT\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"UIDREF\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"112040\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Tracking Unique Identifier\" ] }
          } ] },
          \"0040A124\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995.100\" ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"276214006\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Finding category\" ] }
          } ] },
          \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"241053004\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Radiographic measurement of lung volume\" ] }
          } ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121071\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Finding\" ] }
          } ] },
          \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"427359005\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Nodule\" ] }
          } ] }
        },
        {
          \"00081199\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00081150\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.10008.5.1.4.1.1.66.4\" ] },
            \"00081155\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995.2.1\" ] },
            \"0062000B\": { \"vr\": \"US\", \"Value\": [ 1 ] }
          } ] },
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"IMAGE\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121191\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Referenced Segment\" ] }
          } ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"UIDREF\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"121232\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Source series for segmentation\" ] }
          } ] },
          \"0040A124\": { \"vr\": \"UI\", \"Value\": [ \"1.3.6.1.4.1.14519.5.2.1.6279.6001.273525289046256012743471155680.2\" ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"363698007\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Finding Site\" ] }
          } ] },
          \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"39607008\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Lung\" ] }
          } ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"NUM\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"118565006\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Volume\" ] }
          } ] },
          \"0040A300\": { \"vr\": \"SQ\", \"Value\": [ {
            \"004008EA\": { \"vr\": \"SQ\", \"Value\": [ {
              \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"mm3\" ] },
              \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"UCUM\" ] },
              \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"cubic millimeter\" ] }
            } ] },
            \"0040A30A\": { \"vr\": \"DS\", \"Value\": [ 3.111220E+04 ] }
          } ] },
          \"0040A730\": { \"vr\": \"SQ\", \"Value\": [ {
            \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
            \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
            \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
              \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"111001\" ] },
              \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
              \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Algorithm Name\" ] }
            } ] },
            \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"pylidc\" ] }
          },
            {
              \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
              \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
              \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
                \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"111003\" ] },
                \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
                \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Algorithm Version\" ] }
              } ] },
              \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"0.2.0\" ] }
            } ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"NUM\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"81827009\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"SCT\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Diameter\" ] }
          } ] },
          \"0040A300\": { \"vr\": \"SQ\", \"Value\": [ {
            \"004008EA\": { \"vr\": \"SQ\", \"Value\": [ {
              \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"mm\" ] },
              \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"UCUM\" ] },
              \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"millimeter\" ] }
            } ] },
            \"0040A30A\": { \"vr\": \"DS\", \"Value\": [ 4.994462E+01 ] }
          } ] },
          \"0040A730\": { \"vr\": \"SQ\", \"Value\": [ {
            \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
            \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
            \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
              \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"111001\" ] },
              \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
              \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Algorithm Name\" ] }
            } ] },
            \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"pylidc\" ] }
          },
            {
              \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
              \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
              \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
                \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"111003\" ] },
                \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
                \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Algorithm Version\" ] }
              } ] },
              \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"0.2.0\" ] }
            } ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"NUM\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"301898006\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"IBSI\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Body surface area\" ] }
          } ] },
          \"0040A300\": { \"vr\": \"SQ\", \"Value\": [ {
            \"004008EA\": { \"vr\": \"SQ\", \"Value\": [ {
              \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"mm2\" ] },
              \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"UCUM\" ] },
              \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"square millimeter\" ] }
            } ] },
            \"0040A30A\": { \"vr\": \"DS\", \"Value\": [ 9.026567E+03 ] }
          } ] },
          \"0040A730\": { \"vr\": \"SQ\", \"Value\": [ {
            \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
            \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
            \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
              \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"111001\" ] },
              \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
              \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Algorithm Name\" ] }
            } ] },
            \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"pylidc\" ] }
          },
            {
              \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"HAS CONCEPT MOD\" ] },
              \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"TEXT\" ] },
              \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
                \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"111003\" ] },
                \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"DCM\" ] },
                \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Algorithm Version\" ] }
              } ] },
              \"0040A160\": { \"vr\": \"UT\", \"Value\": [ \"0.2.0\" ] }
            } ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"C45992\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"NCIt\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Subtlety score\" ] }
          } ] },
          \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"105\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"99LIDCQIICR\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"5 out of 5 (Obvious)\" ] }
          } ] }
        },
        {
          \"0040A010\": { \"vr\": \"CS\", \"Value\": [ \"CONTAINS\" ] },
          \"0040A040\": { \"vr\": \"CS\", \"Value\": [ \"CODE\" ] },
          \"0040A043\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"RID36042\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"RadLex\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"Malignancy\" ] }
          } ] },
          \"0040A168\": { \"vr\": \"SQ\", \"Value\": [ {
            \"00080100\": { \"vr\": \"SH\", \"Value\": [ \"905\" ] },
            \"00080102\": { \"vr\": \"SH\", \"Value\": [ \"99LIDCQIICR\" ] },
            \"00080104\": { \"vr\": \"LO\", \"Value\": [ \"5 out of 5 (Highly Suspicious for Cancer)\" ] }
          } ] }
        } ] }
    } ] }
  } ] }
}
  </pre></div>"

---

// File: input/fsh/Example-ReferencedResources.fsh

Instance: Example-Patient
InstanceOf: Patient
Usage: #example
Description: "An example of a Patient referenced from a measurement report."

* id = "measurement-report-patient"

* identifier
  * type
    * coding
      * system = "http://terminology.hl7.org/CodeSystem/v2-0203"
      * code = #MR "Medical record number"
      * display = "Medical Record Number"
  * system = "http://test-hospital.org/mr"
  * assigner
    * display = "Test Hospital"
  * value = "PID-12345"
* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  \"00100010\": { \"vr\": \"PN\", \"Value\": [ { \"Alphabetic\": \"EXAMPLE^MEASUREMENT^PATIENT}\" } ]},
  \"00100020\": { \"vr\": \"LO\", \"Value\": [ \"PID-11235\" ] },
  \"00100024\": { \"vr\": \"SQ\",  \"Value\": [ {
        \"00400031\": { \"vr\": \"UT\", \"Value\": [ \"Test Hospital\" ] },
        \"00400032\": { \"vr\": \"UT\", \"Value\": [ \"http://test-hospital.org/mr\" ] },
        \"00400033\": { \"vr\": \"CS\", \"Value\": [ \"URI\" ] }
      } ] }
}
  </pre></div>"

Instance: Example-ServiceRequest
InstanceOf: ServiceRequest
Usage: #example
Description: "An example of a ServiceRequest referenced from a measurement report."

* id = "measurement-report-service-request"

* identifier
  * type
    * coding
      * system = "http://terminology.hl7.org/CodeSystem/v2-0203"
      * code = #ACSN "Accession ID"
      * display = "Accession ID"
  * system = "http://test-hospital.org/acsn"
  * value = "ACSN-235813"
* subject = Reference(Example-Patient)
* status = #active
* intent = #order
* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  \"00080050\": { \"vr\": \"SH\" , \"Value\": \"ACSN-235813\" },
  \"00080051\": { \"vr\": \"SQ\",  \"Value\": [ {
        \"00400031\": { \"vr\": \"UT\", \"Value\": [ \"Test Hospital\" ] },
        \"00400032\": { \"vr\": \"UT\", \"Value\": [ \"http://test-hospital.org/acsn\" ] },
        \"00400033\": { \"vr\": \"CS\", \"Value\": [ \"URI\" ] }
      } ] }
}
  </pre></div>"

Instance: Example-ImagingStudy
InstanceOf: ImagingStudy
Usage: #example
Description: "An example of an ImagingStudy referenced from a measurement report."

* id = "measurement-report-imaging-study"

* identifier
  * system = "urn:dicom:uid"
  * value = "urn:oid:1.2.840.113747.20080222.83311413144566317081790268995"

* subject = Reference(Example-Patient)
* basedOn = Reference(Example-ServiceRequest)
* status = #available
* text
  * status = #generated
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <pre>
{
  \"0020000D\": { \"vr\": \"UI\", \"Value\": [ \"1.2.840.113747.20080222.83311413144566317081790268995\" ] }
}
  </pre></div>"

---

