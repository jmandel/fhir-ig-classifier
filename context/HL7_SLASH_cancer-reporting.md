File: repos/HL7_SLASH_cancer-reporting/sushi-config.yaml

packageId: hl7.fhir.us.cancer-reporting
canonical: http://hl7.org/fhir/us/cancer-reporting
fhirVersion: 4.0.1
applyExtensionMetadataToRoot: false
id: hl7.fhir.us.cancer-reporting
name: USCancerPathologyData
title: Cancer Pathology Data Sharing
copyrightYear: 2020+
releaseLabel: STU 1.0.1
description: This implementation guide (IG) provides Health Level Seven (HL7 FHIR) resources to define standards for cancer pathology information exchange from a hospital or facility-based laboratory information system (LIS) to a hospital or facility-based electronic health record (EHR) system or to a central cancer registry. When sending between LIS and EHR systems, implementors may choose to use transport and processing modalities, such as FHIR bundles. This publication provides the data model, defined data items and their corresponding code and value sets specific to a cancer pathology synoptic report. This guide contains a library of FHIR profiles to create a cancer pathology bundle and is compliant with FHIR Release 4.
publisher:
  name: HL7 International / Orders and Observations
  url: http://www.hl7.org/Special/committees/orders
  email: ord@lists.HL7.org
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: oo
jurisdiction: urn:iso:std:iso:3166#US
status: draft
version: 1.0.1
dependencies:
  hl7.fhir.us.core:
    version: 6.1.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core#6.1.0
    id: hl7fhiruscore
  hl7.fhir.us.ph-library:
    version: 1.0.0
    uri: http://hl7.org/fhir/us/ph-library/ImplementationGuide/hl7.fhir.us.ph-library#1.0.0
    id: hl7fhirusphlibrary
  # hl7.fhir.uv.ihe-sdc-ecc:
  #   version: current
  #   uri: http://hl7.org/fhir/uv/ihe-sdc-ecc/ImplementationGuide/hl7.fhir.uv.ihe-sdc-ecc
  #   id: hl7fhiruvihesdcecc


---

// File: input/pagecontent/background.md

### Relationship to NAACCR Volume V
This guide provides an alternative to the HL7 Version 2.5.1 message or HL7 CDA document approach. The following table illustrates the mapping of the well-established NAACCR segments to FHIR resources.

At present, patient and specimen data flow from the clinic and EHR to the pathology lab in a variety of formats, such as HL7 V2 and CDA. The [NAACCR Standards for Cancer Registries Volume V, Laboratory Electronic Reporting Pathology Version 5.0, May 2020 (Revised 2020)](https://www.naaccr.org/wp-content/uploads/2020/05/NAACCR-Vol-V_20200526.pdf) defines a standard message format for transmitting pathology laboratory information to central cancer registries using the [HL7 Version 2.5.1 Message](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=144) format. 

This IG provides an alternative to the HL7 V2 message for promoting better interoperability and scalability. This IG also addresses the collection and exchange of pathology lab data. That is, while discrete data elements are captured in electronic format in most laboratory information systems (LISs), typically, synoptic cancer pathology reports then flow from the LIS to EHRs in non-discrete data formats (e.g., pdf format). This IG helps address these issues.

This IG defines an electronic data exchange standard that maintains the discrete cancer pathology data when exchanging information among pathology laboratories, hospital systems, and registries for continuity of care, structured storage and exchange, standardized cancer reporting, and research. In addition, there is growing industry facilitation of FHIR standards for these kinds of use cases. For instance, starting in December 2022, CMS and ONC will require certified HIT vendors to implement FHIR-based APIs (see [ONC’s Cure Act Final Rule](https://www.healthit.gov/curesrule/download)). This IG is intended to assist pathology laboratory reporting in moving from V2 to FHIR alignment in accordance with these interoperability policy initiatives.  

### FHIR Profiles to Capture NAACCR Volume V
<style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
    <thead>
        <tr>
            <th class="tg-0lax"><b>V2 Message Elements</b></th>
            <th class="tg-0lax"><b>NAACCRR Section</b></th>
            <th class="tg-0lax"><b>FHIR Artifact</b></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="tg-0lax">Software Segment (SFT)</td>
            <td class="tg-0lax">2.15.12</td>
            <td class="tg-0lax">N/A</td>
        </tr>
        <tr>
            <td class="tg-0lax">Patient Identification segment (PID)</td>
            <td class="tg-0lax">2.6.2</td>
            <td class="tg-0lax"><a href="http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-patient.html">US Core Patient Profile</a></td>
        </tr>
        <tr>
            <td class="tg-0lax">Patient Visit segment (PV1)</td>
            <td class="tg-0lax">2.6.2</td>
            <td class="tg-0lax"><a href="http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-encounter.html">US Core Encounter Profile</a>, <a href="StructureDefinition-us-pathology-related-practitioner-role.html">US Pathology-Related Practitioner</a>, <a href="https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html">US Core Patient Profile</a></td>
        </tr>
        <tr>
            <td class="tg-0lax">Common Order segment (ORC)</td>
            <td class="tg-0lax">2.7.1</td>
            <td class="tg-0lax"><a href="StructureDefinition-us-pathology-related-practitioner-role.html">US Pathology-Related PractitionerRole</a></td>
        </tr>
        <tr>
            <td class="tg-0lax">Observations Report ID segment (OBR)</td>
            <td class="tg-0lax">2.7.2</td>
            <td class="tg-0lax"><a href="StructureDefinition-us-pathology-diagnostic-report.html">US Pathology Diagnostic Report</a>, <a href="StructureDefinition-us-pathology-related-practitioner-role.html">US Pathology-Related Practitioner Role</a></td>
        </tr>
        <tr>
            <td class="tg-0lax">Notes and Comments segment (NTE)</td>
            <td class="tg-0lax">2.6.4</td>
            <td class="tg-0lax"><a href="StructureDefinition-us-pathology-diagnostic-report.html">US Pathology Diagnostic Report</a></td>
        </tr>
        <tr>
            <td class="tg-0lax">Observation/Result segment (OBX)</td>
            <td class="tg-0lax">2.7.3</td>
            <td class="tg-0lax"><a href="StructureDefinition-us-pathology-diagnostic-report.html">US Pathology Diagnostic Report results</a></td>
        </tr>
        <tr>
            <td class="tg-0lax">Notes and Comments segment (NTE)</td>
            <td class="tg-0lax">2.7.4</td>
            <td class="tg-0lax"><a href="StructureDefinition-us-pathology-diagnostic-report.html">US Pathology Diagnostic Report</a></td>
        </tr>
        <tr>
            <td class="tg-0lax">Specimen (SPM)</td>
            <td class="tg-0lax">2.7.5</td>
            <td class="tg-0lax"><a href="StructureDefinition-us-pathology-specimen.html">US Pathology Specimen</a></td>
        </tr>
        <tr>
            <td class="tg-0lax">Observation Related to Specimen (OBX)</td>
            <td class="tg-0lax">2.7.3</td>
            <td class="tg-0lax"><a href="StructureDefinition-us-pathology-diagnostic-report.html">US Pathology Diagnostic Report</a></td>
        </tr>
        <tr>
            <td class="tg-0lax">Continuation Pointer (DSC)</td>
            <td class="tg-0lax"></td>
            <td class="tg-0lax"></td>
        </tr>
    </tbody>
</table>

### Relationship to IHE SDC on FHIR

The IHE Structured Data Capture (SDC) standard, [*IHE SDC eCP on FHIR*](http://hl7.org/fhir/uv/ihe-sdc-ecc), uses a form-driven workflow to capture and encode data and then create FHIR Observations from the captured data. The College of American Pathologists (CAP) has developed and tested the IHE SDC IG for collection of data from electronic Cancer Protocols (eCPs). The goal of IHE SDC eCP on FHIR is to extract data from these cancer checklists and create FHIR Observations for better interoperability between systems.

This Cancer Electronic Pathology Reporting FHIR IG and the IHE SDC eCP on FHIR are aligned and meant to operate together. Pathology data entered into an eCP by a pathologist can be converted into FHIR observations via the IHE SDC on FHIR IG. At that point, it can be transmitted to the Central Cancer Registry (CCR) either directly from the LIS or via an EHR intermediary. Both scenarios are described in this IG.

**Figure: Data Flows Supported by this Implementation Guide**
<table><tr><td><img src="CancerPath.jpg"/></td></tr></table>

### Ongoing Project Efforts
This project acknowledges the ongoing discussion about how LOINC vs. SNOMED terminologies serve cancer pathology, but it does not propose to resolve that discussion. Future development of this standard may explore new use cases, such as microbiology laboratory reporting. Future revisions will also include mappings for CAP eCC Protocol CKey Identifier to SNOMED translation.  

Several cancer pathology exchange initiatives are underway internationally, including:
* [Integrating Healthcare Enterprise (IHE) Pathology and Laboratory Medicine (PaLM) Technical Framework Supplement: Anatomic Pathology Structured Report (ASPR)](https://www.ihe.net/uploadedFiles/Documents/PaLM/IHE_PaLM_Suppl_APSR.pdf)
* [PaLM ASPR application in Germany](http://download.hl7.de/veranstaltungen/jahrestagungen/2016/17-haroskehartz.pdf)  

### Project Team
**Cancer ePathology Reporting Project Contributors**

| Role | Name | Affiliation | Contact |
| -------- | -------- | -------- | -------- |
| Primary Editor | **David deRoode** | Lantana Consulting Group | david.deroode@lantanagroup.com|
| Primary Editor | **Rick Geimer** | Lantana Consulting Group | rick.geimer@lantanagroup.com|
| Co-Editor | **Zabrina Gonzaga** | Lantana Consulting Group | zabrina.gonzaga@lantanagroup.com|
| Co-Editor | **Wendy Wise** | Lantana Consulting Group | wendy.wise@lantanagroup.com|
| Co-Editor | **Patrick Joyce** | Lantana Consulting Group | patrick.joyce@lantanagroup.com|
| Co-Editor | **Ruby Nash** | Lantana Consulting Group | ruby.nash@lantanagroup.com|
| Co-Editor | **Diana Wright** | Lantana Consulting Group | diana.wright@lantanagroup.com|
| Co-Editor | **Max Nakamura** | Lantana Consulting Group | max.nakamura@lantanagroup.com|
| Subject Matter Expert | **Wendy Blumenthal** | Centers for Disease Control and Prevention (CDC) | wfb6@cdc.gov|
| Subject Matter Expert |**David Jones** | Centers for Disease Control and Prevention (CDC) | pvl1@cdc.gov|
| Subject Matter Expert | **Sandy Jones** | Centers for Disease Control and Prevention (CDC) | sft1@cdc.gov|
| Subject Matter Expert | **Caitlin Kennedy** | Centers for Disease Control and Prevention (CDC) | mhy5@cdc.gov|
| Subject Matter Expert | **Temitope Alimi** | Katmai Government Services contract to CDC | nyj4@cdc.gov|
| Subject Matter Expert | **Wendy Scharber** | Katmai Government Services/Registry Widgets contract to CDC | wendy@registrywidgets.com|
| Subject Matter Expert | **Richard (Rich) Moldwin** | College of American Pathologists | rmoldwi@cap.org|
| Subject Matter Expert | **Alex Goel** | College of American Pathologists | agoel@cap.org|
| Subject Matter Expert | **Walter (Scott) Campbell** | University of Nebraska Medical Center | wcampbel@unmc.edu |

**Current Work Group** includes those who participated in the Cancer FHIR IG project: Hans Buitendijk, David Burgess, Lorraine Constable, Robert Hausam, Ralf Herzog, Patrick Loyd, Ulrike (Riki) Merrick, John David Nolen, James Alexander (Alex) Mays, Andrea Pitkus, Craig Newman, James Tcheng, Laura Heermann, and Calvin Beebe.

---

// File: input/pagecontent/change_notes.md

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cancer Pathology Reporting Changes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        .change-section {
            margin-bottom: 20px;
            background-color: #e7f5e6;
            padding: 15px;
            border-radius: 5px;
        }
        h2 {
            color: #1b4332;
            border-bottom: 2px solid #2d6a4f;
            padding-bottom: 10px;
        }
        h3 {
            color: #2d6a4f;
        }
        .bg-success {
            background-color: #e7f5e6;
            padding: 15px;
            border-radius: 5px;
        }
        code {
            background-color: #f1faee;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px;
            overflow-x: auto;
        }
        ul {
            padding-left: 30px;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h2>Cancer Pathology Reporting - Key Changes and Updates</h2>

    <div class="change-section">
        <h3>Changes and Updates for Latest Version</h3>
        <ul>
            <li>
                <strong>Conversion to FSH (FHIR Shorthand) Format</strong>
                <p>All resources have been transitioned from XML to FSH format, simplifying the structure and enhancing maintainability.</p>
            </li>

            <li>
                <strong>Removed References to MedMorph</strong>
                <p>MedMorph-related references and dependencies have been removed across various files.</p>
            </li>

            <li>
                <strong>Removal of Message Bundle Profile</strong>
                <p>The specific profile for message bundles has been deprecated.</p>
            </li>

            <li>
                <strong>Removal of Message Header Profile</strong>
                <p>The Message Header profile has been deprecated.</p>
                    </li>
                </ul>

            <li>
                <strong>Removal of Example Instances</strong>
                <p>Various example files have been removed which were related to MedMorph</p>
            </li>
    </div>
</body>
</html>

---

// File: input/pagecontent/downloads.md

### Full Implementation Guide

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

### In addition there are format specific definitions files. 

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)
 
### Examples:  All the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTL](examples.ttl.zip)

<div class="new-content" markdown="1">

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

</div>

---

// File: input/pagecontent/index.md

The Cancer Pathology Data Sharing implementation guide (IG) reporting process documents best practices for transmitting pathology data as FHIR resource bundles and distributing them to the Central Cancer Registry (CCR) via two pathways:

1. Laboratory Information Systems (LIS) to CCR via an electronic health record (EHR) intermediary
2. LIS to CCR directly

This publication promotes structured data collection and exchange of cancer pathology data, provides the data model, defined data items and their corresponding code and value sets. This guide specifies the collection and exchange of data specific to a cancer pathology synoptic report for public health reporting. This guide contains a library of FHIR profiles to create a cancer pathology message bundle and is compliant with FHIR Release 4.

Currently, the most successful implementation of the Cancer Pathology Data Sharing IG and Integrating the Healthcare Enterprise (IHE)/Structured Data Capture (SDC) on FHIR IG requires the integration of College of American Pathologists' (CAP) checklists into the LIS workflow. Future iterations of this IG may allow for more flexible incorporation of non-electronic Cancer Protocols (eCP) content (such as narrative pathology reports or others); however, that capability is currently not supported.

The Health Level Seven (HL7) Orders and Observations (O&O) and Public Health Work Groups sponsor this guide. 

### Scope
This guide defines 6 FHIR profiles:
* [US Pathology Exchange Content Bundle](https://build.fhir.org/ig/HL7/cancer-reporting/StructureDefinition-us-pathology-exchange-bundle.html)
* [US Pathology Composition](https://build.fhir.org/ig/HL7/cancer-reporting/StructureDefinition-us-pathology-composition.html)
* [US Pathology Diagnostic Report](https://build.fhir.org/ig/HL7/cancer-reporting/StructureDefinition-us-pathology-diagnostic-report.html) (derived from US Core DiagnosticReport (Notes))
* [US Pathology Specimen](https://build.fhir.org/ig/HL7/cancer-reporting/StructureDefinition-us-pathology-specimen.html) (derived from FHIR R4 Specimen)
* [US Pathology Service Request](https://build.fhir.org/ig/HL7/cancer-reporting/StructureDefinition-us-pathology-service-request.html) (derived from US Core ServiceRequest)
* [US Pathology Related Practitioner Role](https://build.fhir.org/ig/HL7/cancer-reporting/StructureDefinition-us-pathology-related-practitioner-role.html) (derived from US Core PractitionerRole)

This guide defines 1 value set and 1 code system:
* [US Pathology Provider Types ValueSet](https://build.fhir.org/ig/HL7/cancer-reporting/ValueSet-us-pathology-provider-types.html)

### Dependencies
This guide leverages the [NAACCR Standards for Cancer Registries Volume V, Laboratory Electronic Reporting Pathology Version 5.0, May 2020](https://www.naaccr.org/wp-content/uploads/2020/07/NAACCR-Vol-V_Revised_20200720.pdf) (Revised 2020).

This guide also leverages profiles from the 6.1.0 version of:
* [US Core IG](http://hl7.org/fhir/us/core/STU6.1/index.html)
  * [US Core Patient](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-patient.html) 
  * [US Core Practitioner](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-practitioner.html)
  * [US Core Procedure](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-procedure.html)
  * [US Core Organization](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-organization.html)

### Audience
The audience for this IG includes architects and developers of clinical and pathology laboratory health record systems as well as cancer registry systems in the US Realm. Business analysts and policy managers can also benefit from a basic understanding of the use of this cancer pathology data standard to support data flows from pathology laboratories.

### Acknowledgements
This cancer pathology reporting FHIR IG has been developed by the Cancer ePathology Reporting Project in collaboration with the IHE SDC/eCP on FHIR Project, both under the O & O Work Group, and with other stakeholders. This library of FHIR resources was developed and produced through the efforts of HL7. The editors appreciate the support of all volunteers and staff associated with the creation of this document and the sponsorship of the following Work Groups: O & O, Vocabulary Work Group, Clinical Quality Information, Clinical Interoperability Council, Public Health, and Structured Documents. This guide would not have been possible without the support of the following organizations:
* Centers for Disease Control and Prevention (CDC)
* North American Association of Central Cancer Registries (NAACCR)
* College of American Pathologists (CAP)
* Lantana Consulting Group

This material contains content from [SNOMED CT®](http://www.ihtsdo.org/snomed-ct/). SNOMED CT is a registered trademark of the International Health Terminology Standard Development Organization (IHTSDO).

This material contains content from [LOINC®](http://loinc.org). LOINC codes are copyright ©1995-2021, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee. All rights reserved. See [https://loinc.org/kb/license/](https://loinc.org/kb/license/).

This material contains content from the CAP. The [Electronic Cancer Checklists](https://www.cap.org/laboratory-improvement/proficiency-testing/cap-ecc) are copyrighted by the CAP. All rights reserved.

---

// File: input/pagecontent/specification.md

### Actors
* **Message Sender:** An application sending a pathology report message to a Message Destination. This actor may be the creator of the message but could also be an intermediary. This can be thought of as the server in a client/server interaction.
* **Message Destination:** An application that receives the pathology report message. This can be thought of as the client in a client/server interaction.

### FHIR Paradigms Supported by This IG
* [RESTful API](https://restfulapi.net/)
* [FHIR Messaging](http://hl7.org/fhir/messaging.html)

This guide defines 5 FHIR profiles:
* [US Pathology Exchange Content Bundle](StructureDefinition-us-pathology-exchange-bundle.html)
* [US Pathology Diagnostic Report](StructureDefinition-us-pathology-diagnostic-report.html) derived from [US Core DiagnosticReport (Notes)](http://hl7.org/fhir/us/core/StructureDefinition-us-core-diagnosticreport-note.html)
* [US Pathology Specimen](StructureDefinition-us-pathology-specimen.html) derived from [FHIR R4 Specimen](https://hl7.org/FHIR/specimen.html)
* [US Pathology Service Request](StructureDefinition-us-pathology-service-request.html) derived from [US Core ServiceRequest](https://hl7.org/fhir/us/core/StructureDefinition-us-core-servicerequest.html)
* [US Pathology Related Practitioner Role](StructureDefinition-us-pathology-related-practitioner-role.html) derived from [US Core PractitionerRole](http://hl7.org/fhir/us/core/StructureDefinition-us-core-practitionerrole.html)

This guide defines 1 value set:
* [US Pathology Provider Types ValueSet](ValueSet-us-pathology-provider-types.html)

#### Extensions
This IG defines no new extensions.

### Claiming Conformance to This Specification
This specification conforms to US Core Profiles. To claim conformance to this specification, servers SHALL:
* Be able to populate all profile data elements that have a minimum cardinality >= 1 and/or flagged as Must Support as defined by that profile’s StructureDefinition.
* Conform to this IG’s Server Capability Statement expectations for that profile’s type.

Details on profiles and extensions present in this specification are available on the [Artifact Index](artifacts.html) page.

### Must Support and Missing Data
Systems claiming to conform to a profile SHALL support the elements in a profile as defined below. This guide adopts the following definitions of MustSupport for all direct transactions between the Sending and Receiving Systems.

<b>Sending Systems</b> are defined as systems that generate and push data within a pathology lab workflow. These systems may be used by clinicians (ie oncologists) when ordering the pathological analysis for a patient, which will necessarily entail collecting (procedure) the specimen and sending it to a lab. These systems may also be used by a pathologists in cases of completed analysis and reports that need to be sent back to an clinician and/or to a cancer registry.  
* As part of the sending of a US Pathology Bundle, the Sender SHALL be capable of including all elements defined in the profiles that have a MustSupport flag and SHALL populate all elements with a MustSupport flag if the information exists.
* In situations where information on a particular data element is not present, the Sender SHALL NOT include the data element in the resource instance if the cardinality is 0..n.
* If the information does not exist and the cardinality of the element is >= 1..*, the Sender SHALL use the [dataAbsentReason](http://hl7.org/fhir/ValueSet/data-absent-reason) extension where it is defined. Note: populating the element with the value set absent reason or using the dataAbsent Reason SHOULD be handled by the Sending System and not require provider action.

**Receiving Systems** are defined as systems that receive and are expected to process data within a pathology lab workflow. These systems may be used by pathologists (i.e. LIS, associated interface engines) when receiving a specimen and a request for analysis. These systems may also be used by clinicians who ordered the lab analysis/report. These systems may also represent central registries who aggregate and analyze pathology lab information.
* The Receiving System SHALL be capable of processing resource instances containing required and allowed data elements without generating an error or causing the application to fail.
* Receiving Systems SHOULD be capable of processing (display, store, etc.) the data elements based on the utility of the specific element to the receiver.
* When receiving a US Pathology Bundle from the Sender, the Receiving System SHALL interpret missing data elements within resource instances as data not present in the Senders systems.
* Receiving Systems SHALL be able to process resource instances containing data elements asserting missing information without generating an error or causing the application to fail.

### Conformance to US Core Profile
Where this IG does not additionally constrain a US Core profile, the actors shall follow the US Core definition of [Must Support and Missing Data](http://hl7.org/fhir/us/core/general-guidance.html).

### Privacy and Security
Systems implementing this guide are expected to follow the general [FHIR Security](https://www.hl7.org/fhir/security.html) guidelines, as well as all additionally applicable public and private laws and policies.

---

// File: input/pagecontent/StructureDefinition-ihe-sdc-ecc-DiagnosticReport-intro.md

Note: This is a temporary copy of the same-named profile in the IHE SCD/eCP IG for use until an IG Publisher issue with the extension pack is fixed.

---

// File: input/pagecontent/StructureDefinition-ihe-sdc-ecc-Observation-intro.md

Note: This is a temporary copy of the same-named profile in the IHE SCD/eCP IG for use until an IG Publisher issue with the extension pack is fixed.

---

// File: input/pagecontent/StructureDefinition-us-pathology-composition-intro.md

This Composition contains a lab-report section which has an entry that references a DiagnosticReport. DiagnosticReport.basedOn references the US Pathology ServiceRequest, the DiagnosticReport.specimen references the US Pathology Specimen and the DiagnosticReport.result references US Pathology Grouper Observation (which represent the Sections in the report), which in turn reference the sub-questions of that Section in the report. 

---

// File: input/pagecontent/StructureDefinition-us-pathology-diagnostic-report-intro.md

It is expected that labs will populate dateTimes with the most specific time information known when sending to EHRs (YYYY-MM-DD).

---

// File: input/pagecontent/StructureDefinition-us-pathology-exchange-bundle-intro.md

Note - US Core profiles are expected for Encounter, Organization, Patient, Practitioner, and Procedure, when such information is known to the source LIS. Observations are expected to conform to IHE SDC/eCP Observation profile.

---

// File: input/fsh/aliases.fsh

Alias: $v3-ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $v2-0443 = http://terminology.hl7.org/CodeSystem/v2-0443
Alias: $loinc = http://loinc.org
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $sct = http://snomed.info/sct
Alias: $example = https://example.org
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $v2-0487 = http://terminology.hl7.org/CodeSystem/v2-0487
Alias: $WG = http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
Alias: $WG = http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
Alias: $section = http://hl7.org/fhir/us/cancer-reporting/ValueSet/us-pathology-section-codes

---

// File: input/fsh/codesystems/USPathologyCodeSystem.fsh

CodeSystem: USPathologyCodeSystem
Id: us-pathology-codesystem
Title: "US Pathology Code System"
Description: "US Patholodgy Code System"
* ^extension[$WG].valueCode = #oo
* ^status = #draft
* ^experimental = false
* ^caseSensitive = false
* ^content = #complete
* #CASE-SUMMARY "Case Summary Section"
* #TESTS-PERFORMED "Tests Performed Section"
* #METHODS "Methods Section"
* #CLINICAL "Clinical Section"
* #SPECIMEN "Specimen Section"
* #TUMOR "Tumor Section"
* #MARGINS "Margins Section"
* #REGIONAL-LYMPH-NODES "Regional Lymph Nodes Section"
* #DISTANT-METASTASIS "Distant Metastasis Section"
* #FIGO-STAGE "Figo Stage Section"
* #PTNM-CLASSIFICATION "pTNM Classification Section"
* #ADDTIONAL-FINDINGS "Additional Findings Section"
* #SPECIAL-STUDIES "Special Studies Section"
* #COMMENTS "Comments Section"

---

// File: input/fsh/instances/bundle-us-pathology-exchange.fsh

Instance: bundle-us-pathology-exchange
InstanceOf: USPathologyExchangeBundle
Title: "US Pathology Exchange bundle example"
Description: "Inter-EHR Exchange Bundle profile representing HL7 Version 2.5.1 (V2.5.1) Messaging standard segment information as defined in NAACCR volume 5, version 5."
Usage: #example
* type = #collection
* timestamp = "2024-03-22T18:05:57.689+00:00"
// TODO: There are a ton of things - like next of kin, plus all the locations, organizations, etc, that need a place in this IG
* entry[0].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Composition/composition-adrenal-gland"
* entry[=].resource = composition-adrenal-gland
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/DiagnosticReport/diagnosticreport-adrenal-gland"
* entry[=].resource = diagnosticreport-adrenal-gland
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-case-summary"
* entry[=].resource = observation-grouper-case-summary
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-clinical"
* entry[=].resource = observation-grouper-clinical
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-specimen"
* entry[=].resource = observation-grouper-specimen
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-tumor"
* entry[=].resource = observation-grouper-tumor
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-margins"
* entry[=].resource = observation-grouper-margins
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-regional-lymph-nodes"
* entry[=].resource = observation-grouper-regional-lymph-nodes
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-distant-metastasis"
* entry[=].resource = observation-grouper-distant-metastasis
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-figo-stage"
* entry[=].resource = observation-grouper-figo-stage
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-ptnm-classification"
* entry[=].resource = observation-grouper-ptnm-classification
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-additional-findings"
* entry[=].resource = observation-grouper-additional-findings
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-special-studies"
* entry[=].resource = observation-grouper-special-studies
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-grouper-comments"
* entry[=].resource = observation-grouper-comments
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-procedure-adrenalectomy"
// * entry[=].resource = observation-procedure-adrenalectomy
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-specimen-laterality"
// * entry[=].resource = observation-specimen-laterality
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/Observation/observation-histologic-type"
// * entry[=].resource = Observation/observation-histologic-type
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-histologic-grade"
// * entry[=].resource = observation-histologic-grade
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-tumor-weight"
// * entry[=].resource = observation-tumor-weigh
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-tumor-extension"
// * entry[=].resource = observation-tumor-extension
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-tumor-invasion"
// * entry[=].resource = observation-tumor-invasion
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-regional-lymph-nodes"
// * entry[=].resource = observation-regional-lymph-nodes
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-TNM-descriptors"
// * entry[=].resource = observation-TNM-descriptors
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-primary-tumor"
// * entry[=].resource = observation-primary-tumor
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-regional-lymph-nodes"
// * entry[=].resource = observation-regional-lymph-nodes
// * entry[=].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Observation/observation-distant-metastasis"
// * entry[=].resource = observation-distant-metastasis



* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Specimen/specimen-adrenal"
* entry[=].resource = specimen-adrenal
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Patient/patient-JoelAlex"
* entry[=].resource = patient-JoelAlex
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Encounter/encounter-uspath-specimen-collection"
* entry[=].resource = encounter-uspath-specimen-collection
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/PractitionerRole/practitionerrole-uspath-practitioner-oncologist"
* entry[=].resource = practitionerrole-uspath-practitioner-oncologist
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/PractitionerRole/practitionerrole-uspath-pathologist"
* entry[=].resource = practitionerrole-uspath-pathologist
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/PractitionerRole/practitionerrole-uspath-surgeon"
* entry[=].resource = practitionerrole-uspath-surgeon
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Organization/organization-Redwood-Womens-Center-PC"
* entry[=].resource = organization-Redwood-Womens-Center-PC
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Organization/organization-principal-pathology-lab"
* entry[=].resource = organization-principal-pathology-lab
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/Practitioner/practitioner-pathologist"
* entry[=].resource = practitioner-pathologist
* entry[+].fullUrl = "http://hl7.org/fhir/us/cancer-reporting/RelatedPerson/relatedperson-pathology-next-of-kin"
* entry[=].resource = relatedperson-pathology-next-of-kin

---

// File: input/fsh/instances/capabilitystatement-central-cancer-registry-reporting-ehr-path.fsh

Instance: capabilitystatement-central-cancer-registry-reporting-ehr-path
InstanceOf: CapabilityStatement
Title: "Central Cancer Registry Reporting Pathology EHR Capability Statement"
Description: "This profile defines the expected capabilities of the ''EHR'' actor when conforming to the Cancer Pathology Data Sharing IG.     This role is responsible for allowing creation, modification and deletion of ServiceRequests that represent the request for Pathological analysis (and associated reports), and allows searching and retrieval of resources using US Core APIs."
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #oo
* url = "http://hl7.org/fhir/us/cancer-reporting/CapabilityStatement/central-cancer-registry-reporting-ehr-pathology"
* version = "1.0.0"
* name = "CentralCancerRegistryReportingPathologyEHRCapabilityStatement"
* title = "Central Cancer Registry Reporting Pathology EHR Capability Statement"
* status = #draft
* experimental = false
* date = "2022-06-13"
* publisher = "HL7 International - Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/Special/committees/pher"
* description = "This profile defines the expected capabilities of the ''EHR'' actor when conforming to the Cancer Pathology Data Sharing IG.     This role is responsible for allowing creation, modification and deletion of ServiceRequests that represent the request for Pathological analysis (and associated reports), and allows searching and retrieval of resources using US Core APIs."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* rest.mode = #server
* rest.documentation = "The focus of the EHR is to allow creation, modification and deletion of ServiceRequests and allows searching and retrieval of resources using US Core APIs."
* rest.security.description = "Implementations must meet the general security requirements documented in the security section of the implementation guide."
* rest.resource.type = #ServiceRequest
* rest.resource.interaction[0].code = #read
* rest.resource.interaction[=].documentation = "Allows retrieval of a specific ServiceRequest instance."
* rest.resource.interaction[+].code = #create
* rest.resource.interaction[=].documentation = "Allows creation of a ServiceRequest resource instance."
* rest.resource.interaction[+].code = #update
* rest.resource.interaction[=].documentation = "Allows update of a ServiceRequest resource instance."
* rest.resource.interaction[+].code = #delete
* rest.resource.interaction[=].documentation = "Allows deletion of a ServiceRequest resource instance."

---

// File: input/fsh/instances/capabilitystatement-pathology-lab-information-system.fsh

Instance: capabilitystatement-pathology-lab-information-system
InstanceOf: CapabilityStatement
Title: "Pathology Laboratory Information System"
Description: "This profile defines the expected capabilities of the ''LIS'' actor when conforming to the Cancer Pathology Data Sharing Guide. This role is responsible for allowing creation, modification and deletion of DiagnosticReports and allows searching and retrieval of resources using US Core APIs."
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #oo
* url = "http://hl7.org/fhir/us/cancer-reporting/CapabilityStatement/pathology-lab-information-system"
* version = "0.2.0"
* name = "PathologyLabInformationSystem"
* title = "Pathology Laboratory Information System"
* status = #draft
* experimental = false
* date = "2022-06-13"
* publisher = "HL7 International - Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/Special/committees/pher"
* description = "This profile defines the expected capabilities of the ''LIS'' actor when conforming to the Cancer Pathology Data Sharing Guide.     This role is responsible for allowing creation, modification and deletion of DiagnosticReports and allows searching and retrieval of resources using US Core APIs."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* rest.mode = #server
* rest.documentation = "The focus of the EHR is to allow creation, modification and deletion of DiagnosticReports and allows searching and retrieval of resources using US Core APIs."
* rest.security.description = "Implementations must meet the general security requirements documented in the security section of the implementation guide."
* rest.resource.type = #DiagnosticReport
* rest.resource.interaction[0].code = #read
* rest.resource.interaction[=].documentation = "Allows retrieval of a specific DiagnosticReport instance."
* rest.resource.interaction[+].code = #create
* rest.resource.interaction[=].documentation = "Allows creation of a DiagnosticReport resource instance."
* rest.resource.interaction[+].code = #update
* rest.resource.interaction[=].documentation = "Allows update of a DiagnosticReport resource instance."
* rest.resource.interaction[+].code = #delete
* rest.resource.interaction[=].documentation = "Allows deletion of a DiagnosticReport resource instance."

---

// File: input/fsh/instances/composition-adrenal-gland.fsh

Instance: composition-adrenal-gland
InstanceOf: USPathologyComposition
Title: "Composition - Adrenal Gland Pathology Report"
Description: "Composition - Adrenal Gland Pathology Report"
Usage: #example
* status = #final
* type = $loinc#11526-1 "Pathology Study"
* subject.reference = "Patient/patient-JoelAlex"
* subject.display = "Alex Joel"
* date = "2021-01-01T21:39:30.000Z"
// * encounter.reference
* author.reference = "PractitionerRole/practitionerrole-uspath-practitioner-oncologist"
* author.display = "Wise Owl"
* title = "Adrenal Gland"
* section[lab-report].title = "Lab Report Section"
* section[lab-report].code = $loinc#26436-6 "Laboratory Studies (set)"
* section[lab-report].entry.reference = "DiagnosticReport/diagnosticreport-adrenalgland"

---

// File: input/fsh/instances/diagnosticreport-adrenal-gland.fsh

Instance: diagnosticreport-adrenal-gland
InstanceOf: USPathologyDiagnosticReport
Title: "US Pathology Adrenal Gland DiagnosticReport example"
Description: "Example of a DiagnosticReport containing information regarding pathological testing and resulting observations"
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1"
* status = #final
* category = $loinc#LP7839-6 "Pathology"
* code = $loinc#60568-3 "Pathology Synoptic report"
* subject.reference = "Patient/patient-JoelAlex"
* subject.display = "Alex Joel"
* encounter.reference = "Encounter/encounter-uspath-specimen-collection"
* effectiveDateTime = "2021-01-01T21:39:30.000Z"
* performer.reference = "PractitionerRole/practitionerrole-uspath-pathologist"
* resultsInterpreter.reference = "PractitionerRole/practitionerrole-uspath-pathologist"
* specimen.reference = "Specimen/specimen-adrenal"
* result[0].reference = "Observation/observation-grouper-case-summary"
* result[=].reference = "Observation/observation-grouper-clinical"
* result[=].reference = "Observation/observation-grouper-specimen"
* result[=].reference = "Observation/observation-grouper-tumor"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2118.100004300"
// * result[+].reference = "Observation/observation-procedure-adrenalectomy"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#42554.100004300"
// * result[+].reference = "Observation/observation-specimen-laterality"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#52756.100004300"
// * result[+].reference = "Observation/observation-histologic-type"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#59852.100004300"
// * result[+].reference = "Observation/observation-histologic-grade"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#49275.100004300"
// * result[+].reference = "Observation/observation-histologic-grade"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2129.100004300"
// * result[+].reference = "Observation/observation-tumor-weight"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#40496.100004300"
// * result[+].reference = "Observation/observation-tumor-extension"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.51265.100004300"
// * result[+].reference = "Observation/observation-tumor-invasion"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.53526.100004300"
// * result[+].reference = "Observation/observation-regional-lymph-nodes"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.1867.100004300"
// * result[+].reference = "Observation/observation-TNM-descriptors"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.20880.100004300"
// * result[+].reference = "Observation/observation-primary-tumor"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2137.100004300"
// * result[+].reference = "Observation/observation-regional-lymph-nodes"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2143.100004300"
// * result[+].reference = "Observation/observation-distant-metastasis"
// * result[=].identifier.system = "https://example.org"
// * result[=].identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* presentedForm.contentType = #application/xml
* presentedForm.data = "PFNEQ1N1Ym1pc3Npb25QYWNrYWdlIHBrZ0luc3RhbmNlVVJJPSIxMjM0IiBwa2dJbnN0YW5jZVZlcnNpb25VUkk9IjEyMzQiIHBrZ1ByZXZpb3VzSW5zdGFuY2VWZXJzaW9uVVJJPSIxMjM0IiBwa2dEYXRlVGltZVN0YW1wPSIyMDIxLTAzLTEwVDE5OjMyOjQwIiB4bWxucz0idXJuOmloZTpxcnBoOnNkYzoyMDE2Ij4KCTxGb3JtRGVzaWduIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIG9yZGVyPSIwIiBJRD0iQWRyZW5hbC5CeC5SZXMuRGVtb2dfMTI5XzMuMDAyLjAxMS5SQzFfc2RjRkRGIiBiYXNlVVJJPSJjYXAub3JnIiBmdWxsVVJJPSJfYmFzZVVSST1jYXAub3JnJmFtcDtfbGluZWFnZT1BZHJlbmFsLkJ4LlJlcy4xMjkmYW1wO192ZXJzaW9uPTMuMDAyLjAxMS5SQzEmYW1wO19kb2NUeXBlPXNkY0ZERiIgZmlsZW5hbWU9IkFkcmVuYWwuQnguUmVzLjEyOV8zLjAwMi4wMTEuUkMxX3NkY0ZERi54bWwiIGxpbmVhZ2U9IkFkcmVuYWwuQnguUmVzLjEyOSIgZm9ybVRpdGxlPSJBRFJFTkFMIEdMQU5EIiB2ZXJzaW9uPSIzLjAwMi4wMTEuUkMxIiBmb3JtSW5zdGFuY2VVUkk9ImM1MDYxYWQwLTQ0OGYtNDFiMy05NGY0LTdjYWY5M2NkMDBhZSIgZm9ybUluc3RhbmNlVmVyc2lvblVSST0iYzUwNjFhZDAtNDQ4Zi00MWIzLTk0ZjQtN2NhZjkzY2QwMGFlL3ZlcjEiPgoJCTxQcm9wZXJ0eSBuYW1lPSJDb3B5cmlnaHQiIHR5cGU9IkNBUGVDQ19zdGF0aWNfdGV4dCIgc3R5bGVDbGFzcz0iY29weXJpZ2h0IiBvcmRlcj0iMSIgcHJvcE5hbWU9IkNvcHlyaWdodCIgdmFsPSIoYykgMjAxOCBDb2xsZWdlIG9mIEFtZXJpY2FuIFBhdGhvbG9naXN0cy4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuICBMaWNlbnNlIHJlcXVpcmVkIGZvciB1c2UuIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJHZW5lcmljSGVhZGVyVGV4dCIgdHlwZT0iQ0FQZUNDX3N0YXRpY190ZXh0IiBvcmRlcj0iMiIgcHJvcE5hbWU9IkdlbmVyaWNIZWFkZXJUZXh0IiB2YWw9IlN1cmdpY2FsIFBhdGhvbG9neSBDYW5jZXIgQ2FzZSBTdW1tYXJ5IChDaGVja2xpc3QpIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJDYXRlZ29yeSIgdHlwZT0iQ0FQZUNDX21ldGEiIG9yZGVyPSIzIiBwcm9wTmFtZT0iQ2F0ZWdvcnkiIHZhbD0iRW5kb2NyaW5lIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJPZmZpY2lhbE5hbWUiIHR5cGU9IkNBUGVDQ19tZXRhIiBvcmRlcj0iNCIgcHJvcE5hbWU9Ik9mZmljaWFsTmFtZSIgdmFsPSJBRFJFTkFMIEdMQU5EIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJDQVBfUHJvdG9jb2xOYW1lIiB0eXBlPSJDQVBlQ0NfbWV0YSIgb3JkZXI9IjUiIHByb3BOYW1lPSJDQVBfUHJvdG9jb2xOYW1lIiB2YWw9IkFkcmVuYWwgR2xhbmQiIC8+CgkJPFByb3BlcnR5IG5hbWU9IkNBUF9Qcm90b2NvbFZlcnNpb24iIHR5cGU9IkNBUGVDQ19tZXRhIiBvcmRlcj0iNiIgcHJvcE5hbWU9IkNBUF9Qcm90b2NvbFZlcnNpb24iIHZhbD0iNC4wLjEuMSIgLz4KCQk8UHJvcGVydHkgbmFtZT0iVGVtcGxhdGVJRCIgdHlwZT0iQ0FQZUNDX21ldGEiIG9yZGVyPSI3IiBwcm9wTmFtZT0iVGVtcGxhdGVJRCIgdmFsPSIxMjkuMTAwMDA0MzAwIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJSZXN0cmljdGlvbnMiIHR5cGU9IkNBUGVDQ19tZXRhIiBvcmRlcj0iOCIgcHJvcE5hbWU9IlJlc3RyaWN0aW9ucyIgdmFsPSJQbGVhc2UgcmVmZXIgdG8gdGhlIGNhbmNlciBwcm90b2NvbCBjb3ZlciBwYWdlICh3d3cuY2FwLm9yZy9jYW5jZXJwcm90b2NvbHMpIGZvciBpbmZvcm1hdGlvbiBhYm91dCB3aGljaCB0dW1vciB0eXBlcyBhbmQgcHJvY2VkdXJlcyBjYW4gYmUgcmVwb3J0ZWQgdXNpbmcgdGhpcyB0ZW1wbGF0ZS4iIC8+CgkJPFByb3BlcnR5IG5hbWU9IkNBUF9SZXF1aXJlZCIgdHlwZT0iQ0FQZUNDX21ldGEiIG9yZGVyPSI5IiBwcm9wTmFtZT0iQ0FQX1JlcXVpcmVkIiB2YWw9InRydWUiIC8+CgkJPFByb3BlcnR5IG5hbWU9IkFjY3JlZGl0YXRpb25EYXRlIiB0eXBlPSJDQVBlQ0NfbWV0YSBkdC5kYXRlVGltZSIgb3JkZXI9IjEwIiBwcm9wTmFtZT0iQWNjcmVkaXRhdGlvbkRhdGUiIHZhbD0iMi8yOC8yMDE4IDEyOjAwOjAwIEFNIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJXZWJQb3N0aW5nRGF0ZSIgdHlwZT0iQ0FQZUNDX21ldGEgZHQuZGF0ZVRpbWUiIG9yZGVyPSIxMSIgcHJvcE5hbWU9IldlYlBvc3RpbmdEYXRlIiB2YWw9IjYvMzAvMjAxNyAxMjowMDowMCBBTSIgLz4KCQk8UHJvcGVydHkgbmFtZT0iU2hvcnROYW1lIiB0eXBlPSJDQVBlQ0NfbWV0YSIgb3JkZXI9IjEyIiBwcm9wTmFtZT0iU2hvcnROYW1lIiB2YWw9IkFkcmVuYWwuQnguUmVzIiAvPgoJCTxQcm9wZXJ0eSBuYW1lPSJBcHByb3ZhbFN0YXR1cyIgdHlwZT0iQ0FQZUNDX21ldGEiIG9yZGVyPSIxMyIgcHJvcE5hbWU9IkFwcHJvdmFsU3RhdHVzIiB2YWw9IlJDMSIgLz4KCQk8UHJvcGVydHkgbmFtZT0iQUpDQ19WZXJzaW9uIiB0eXBlPSJDQVBlQ0NfbWV0YSIgb3JkZXI9IjE0IiBwcm9wTmFtZT0iQUpDQ19WZXJzaW9uIiB2YWw9Ijh0aCBFZGl0aW9uIiAvPgoJCTxCb2R5IG5hbWU9IkJvZHkiIG9yZGVyPSIxNSIgSUQ9IkFkcmVuYWwuQnguUmVzLjEyOV8zLjAwMi4wMTEuUkMxX3NkY0ZERl9Cb2R5Ij4KCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfQm9keSIgb3JkZXI9IjE2Ij4KCQkJCTxEaXNwbGF5ZWRJdGVtIG5hbWU9IkRJXzM5NjE3IiBvcmRlcj0iMTciIElEPSIzOTYxNy4xMDAwMDQzMDAiIHRpdGxlPSIjIFRoaXMgY2hlY2tsaXN0IGFwcGxpZXMgcHJpbmNpcGFsbHkgdG8gYWRyZW5hbCBjYXJjaW5vbWFzIGluIGFkdWx0cy4gUGVkaWF0cmljIGFkcmVuYWwgY29ydGljYWwgdHVtb3JzIGhhdmUgZGlmZmVyZW50IGNyaXRlcmlhIGZvciBtYWxpZ25hbmN5IGFuZCBhcmUsIGluIGdlbmVyYWwsIHRyZWF0ZWQgdW5kZXIgcHJvdG9jb2xzIHRoYXQgbWF5IGRpZmZlciBzaWduaWZpY2FudGx5IGZyb20gdGhlIHJlY29tbWVuZGF0aW9ucyBmb3IgYWR1bHQtIHR5cGUgdHVtb3JzLiI+CgkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzM5NjE3XzEiIG9yZGVyPSIxOCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJPC9EaXNwbGF5ZWRJdGVtPgoJCQkJPFNlY3Rpb24gbmFtZT0iU180MjU3IiBvcmRlcj0iMTkiIElEPSI0MjU3LjEwMDAwNDMwMCIgbWluQ2FyZD0iMCI+CgkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfNDI1N18xIiBvcmRlcj0iMjAiPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9UdW1fU2l0ZV8yMTE4IiBvcmRlcj0iMjEiIElEPSIyMTE4LjEwMDAwNDMwMCIgbWluQ2FyZD0iMCIgcmVhZE9ubHk9InRydWUiPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxMThfMSIgb3JkZXI9IjIyIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzIxMThfMiIgb3JkZXI9IjIzIj4KCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfMjExOF8zIiBvcmRlcj0iMjQiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQWRyZW5hbF9HbGFuZF8yMTE5IiBvcmRlcj0iMjUiIElEPSIyMTE5LjEwMDAwNDMwMCIgdGl0bGU9IkFkcmVuYWwgZ2xhbmQiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTE5XzEiIG9yZGVyPSIyNiIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCTwvU2VjdGlvbj4KCQkJCTxTZWN0aW9uIG5hbWU9IlNfMTc1MzciIG9yZGVyPSIyNyIgSUQ9IjE3NTM3LjEwMDAwNDMwMCIgdGl0bGU9IkNMSU5JQ0FMIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc1MzdfMSIgb3JkZXI9IjI4Ij4KCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfT3RoX05vbl9QYXRoX0ZpbmRpbmdzXzQxNTYiIG9yZGVyPSIyOSIgSUQ9IjQxNTYuMTAwMDA0MzAwIiB0aXRsZT0iQ2xpbmljYWwgSGlzdG9yeSAoc3BlY2lmeSkiIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF80MTU2XzEiIG9yZGVyPSIzMCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iQ2xpbmljYWwgSGlzdG9yeSIgLz4KCQkJCQkJCTxSZXNwb25zZUZpZWxkIG5hbWU9InJmXzQxNTZfMiIgb3JkZXI9IjMxIj4KCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzQxNTZfMyIgb3JkZXI9IjMyIj4KCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNDE1Nl80IiBvcmRlcj0iMzMiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJPC9SZXNwb25zZUZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV81Mzc3MiIgb3JkZXI9IjM0IiBJRD0iNTM3NzIuMTAwMDA0MzAwIiB0aXRsZT0iRnVuY3Rpb25hbCBTdGF0dXMgKE5vdGVzIEogYW5kIEspIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNTM3NzJfMSIgb3JkZXI9IjM1IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJGdW5jdGlvbmFsIFN0YXR1cyIgLz4KCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNTM3NzJfMiIgb3JkZXI9IjM2IiBtYXhTZWxlY3Rpb25zPSIwIj4KCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNTM3NzJfMyIgb3JkZXI9IjM3Ij4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX1VyaW5fMTcta2V0b3N0ZXJvaWRzX2luY3JlYXNlZF8yMDkwMCIgb3JkZXI9IjM4IiBJRD0iMjA5MDAuMTAwMDA0MzAwIiB0aXRsZT0iVXJpbmFyeSAxNy1rZXRvc3Rlcm9pZHMgaW5jcmVhc2VkICgxMCBtZyAvIGcgY3JlYXRpbmluZSAvIDI0IGhvdXJzKSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0N1c2hpbmdfU3luZF8yMDkwMiIgb3JkZXI9IjM5IiBJRD0iMjA5MDIuMTAwMDA0MzAwIiB0aXRsZT0iQ3VzaGluZyBzeW5kcm9tZSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0Nvbm5fU3luZF8yMDkwNCIgb3JkZXI9IjQwIiBJRD0iMjA5MDQuMTAwMDA0MzAwIiB0aXRsZT0iQ29ubiBzeW5kcm9tZSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzQzMDUyIiBvcmRlcj0iNDEiIElEPSI0MzA1Mi4xMDAwMDQzMDAiIHRpdGxlPSJWaXJpbGl6YXRpb24iIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV80NDYxOCIgb3JkZXI9IjQyIiBJRD0iNDQ2MTguMTAwMDA0MzAwIiB0aXRsZT0iRmVtaW5pemF0aW9uIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfV2VpZ2h0X0xvc3NfMjA5MDYiIG9yZGVyPSI0MyIgSUQ9IjIwOTA2LjEwMDAwNDMwMCIgdGl0bGU9IldlaWdodCBsb3NzIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfT3RoXzIwOTA3IiBvcmRlcj0iNDQiIElEPSIyMDkwNy4xMDAwMDQzMDAiIHRpdGxlPSJPdGhlciAoc3BlY2lmeSkiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIwOTA3XzEiIG9yZGVyPSI0NSIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJCQkJCQkJPExpc3RJdGVtUmVzcG9uc2VGaWVsZCBuYW1lPSJsaXJmXzIwOTA3XzIiIG9yZGVyPSI0NiIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yMDkwN18zIiBvcmRlcj0iNDciPgoJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yMDkwN180IiBvcmRlcj0iNDgiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJPC9TZWN0aW9uPgoJCQkJPFNlY3Rpb24gbmFtZT0iU18xNzg3NSIgb3JkZXI9IjQ5IiBJRD0iMTc4NzUuMTAwMDA0MzAwIiB0aXRsZT0iU1BFQ0lNRU4iPgoJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzE3ODc1XzEiIG9yZGVyPSI1MCI+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX1Byb2NlZHVyZV80MjU1NCIgb3JkZXI9IjUxIiBJRD0iNDI1NTQuMTAwMDA0MzAwIiB0aXRsZT0iUHJvY2VkdXJlIj4KCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNDI1NTRfMSIgb3JkZXI9IjUyIj4KCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNDI1NTRfMiIgb3JkZXI9IjUzIj4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzUwODA5IiBvcmRlcj0iNTQiIElEPSI1MDgwOS4xMDAwMDQzMDAiIHRpdGxlPSJQZXJjdXRhbmVvdXMgbmVlZGxlIGJpb3BzeSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzQ2NjMzIiBvcmRlcj0iNTUiIElEPSI0NjYzMy4xMDAwMDQzMDAiIHRpdGxlPSJFbmRvc2NvcGljIGRpcmVjdGVkIGJpb3BzeSAoc3BlY2lmeSByYWRpb2dyYXBoaWMgdGVjaG5pcXVlKSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNDY2MzNfMSIgb3JkZXI9IjU2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJFbmRvc2NvcGljIGRpcmVjdGVkIGJpb3BzeSIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl80NjYzM18yIiBvcmRlcj0iNTciIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfNDY2MzNfMyIgb3JkZXI9IjU4Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNDY2MzNfNCIgb3JkZXI9IjU5IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQWRyZW5hbGVjdG9teV9Ub3RhbF8yMTIyIiBvcmRlcj0iNjAiIElEPSIyMTIyLjEwMDAwNDMwMCIgdGl0bGU9IkFkcmVuYWxlY3RvbXksIHRvdGFsIiBzZWxlY3RlZD0idHJ1ZSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0FkcmVuYWxlY3RvbXlfUGFydF8yMTIxIiBvcmRlcj0iNjEiIElEPSIyMTIxLjEwMDAwNDMwMCIgdGl0bGU9IkFkcmVuYWxlY3RvbXksIHBhcnRpYWwiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9PdGhfMjEyMyIgb3JkZXI9IjYyIiBJRD0iMjEyMy4xMDAwMDQzMDAiIHRpdGxlPSJPdGhlciAoc3BlY2lmeSkiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxMjNfMSIgb3JkZXI9IjYzIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjEyM18yIiBvcmRlcj0iNjQiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjEyM18zIiBvcmRlcj0iNjUiPgoJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yMTIzXzQiIG9yZGVyPSI2NiIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX05TXzIxMjQiIG9yZGVyPSI2NyIgSUQ9IjIxMjQuMTAwMDA0MzAwIiB0aXRsZT0iTm90IHNwZWNpZmllZCIgLz4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfNTI3NTYiIG9yZGVyPSI2OCIgSUQ9IjUyNzU2LjEwMDAwNDMwMCIgdGl0bGU9IlNwZWNpbWVuIExhdGVyYWxpdHkiPgoJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl81Mjc1Nl8xIiBvcmRlcj0iNjkiPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF81Mjc1Nl8yIiBvcmRlcj0iNzAiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfUmlnaHRfMjEyNiIgb3JkZXI9IjcxIiBJRD0iMjEyNi4xMDAwMDQzMDAiIHRpdGxlPSJSaWdodCIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0xlZnRfMjEyNyIgb3JkZXI9IjcyIiBJRD0iMjEyNy4xMDAwMDQzMDAiIHRpdGxlPSJMZWZ0IiBzZWxlY3RlZD0idHJ1ZSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzU2ODEyIiBvcmRlcj0iNzMiIElEPSI1NjgxMi4xMDAwMDQzMDAiIHRpdGxlPSJCaWxhdGVyYWwiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9OU18yMTI4IiBvcmRlcj0iNzQiIElEPSIyMTI4LjEwMDAwNDMwMCIgdGl0bGU9Ik5vdCBzcGVjaWZpZWQiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9PdGhfMjA4NjYiIG9yZGVyPSI3NSIgSUQ9IjIwODY2LjEwMDAwNDMwMCIgdGl0bGU9Ik90aGVyIChzcGVjaWZ5KSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjA4NjZfMSIgb3JkZXI9Ijc2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjA4NjZfMiIgb3JkZXI9Ijc3IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIwODY2XzMiIG9yZGVyPSI3OCI+CgkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzIwODY2XzQiIG9yZGVyPSI3OSIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQk8L1NlY3Rpb24+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzE3ODc2IiBvcmRlcj0iODAiIElEPSIxNzg3Ni4xMDAwMDQzMDAiIHRpdGxlPSJUVU1PUiI+CgkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc4NzZfMSIgb3JkZXI9IjgxIj4KCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfNTk4NTIiIG9yZGVyPSI4MiIgSUQ9IjU5ODUyLjEwMDAwNDMwMCIgdGl0bGU9Ikhpc3RvbG9naWMgVHlwZSAoTm90ZXMgQyB0aHJvdWdoIEUpIj4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81OTg1Ml8xIiBvcmRlcj0iODMiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9Ikhpc3RvbG9naWMgVHlwZSIgLz4KCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNTk4NTJfMiIgb3JkZXI9Ijg0Ij4KCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNTk4NTJfMyIgb3JkZXI9Ijg1Ij4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzQ2OTI1IiBvcmRlcj0iODYiIElEPSI0NjkyNS4xMDAwMDQzMDAiIHRpdGxlPSJBZHJlbmFsIGNvcnRpY2FsIGNhcmNpbm9tYSwgb25jb2N5dGljIHR5cGUiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9BZHJlbmFsX0NvcnRpY2FsX0NhXzIxMTciIG9yZGVyPSI4NyIgSUQ9IjIxMTcuMTAwMDA0MzAwIiB0aXRsZT0iQWRyZW5hbCBjb3J0aWNhbCBjYXJjaW5vbWEiIHNlbGVjdGVkPSJ0cnVlIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDQ0NDkiIG9yZGVyPSI4OCIgSUQ9IjQ0NDQ5LjEwMDAwNDMwMCIgdGl0bGU9IkFkcmVuYWwgY29ydGljYWwgY2FyY2lub21hLCBteXhvaWQgdHlwZSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzU5MTYyIiBvcmRlcj0iODkiIElEPSI1OTE2Mi4xMDAwMDQzMDAiIHRpdGxlPSJBZHJlbmFsIGNvcnRpY2FsIGNhcmNpbm9tYSwgc2FyY29tYXRvaWQgdHlwZSIgLz4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzU5ODUyXzEiIG9yZGVyPSI5MCI+CgkJCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfNDM2NzAiIG9yZGVyPSI5MSIgSUQ9IjQzNjcwLjEwMDAwNDMwMCIgdGl0bGU9Ikhpc3RvbG9naWMgVHlwZSBDb21tZW50cyIgbXVzdEltcGxlbWVudD0iZmFsc2UiIG1pbkNhcmQ9IjAiPgoJCQkJCQkJCQk8UmVzcG9uc2VGaWVsZCBuYW1lPSJyZl80MzY3MF8xIiBvcmRlcj0iOTIiPgoJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF80MzY3MF8yIiBvcmRlcj0iOTMiPgoJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzQzNjcwXzMiIG9yZGVyPSI5NCIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJPC9SZXNwb25zZUZpZWxkPgoJCQkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzQ5Mjc1IiBvcmRlcj0iOTUiIElEPSI0OTI3NS4xMDAwMDQzMDAiIHRpdGxlPSJIaXN0b2xvZ2ljIEdyYWRlIChOb3RlcyBDIHRocm91Z2ggRSkiPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzQ5Mjc1XzEiIG9yZGVyPSI5NiIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iSGlzdG9sb2dpYyBHcmFkZSIgLz4KCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNDkyNzVfMiIgb3JkZXI9Ijk3Ij4KCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNDkyNzVfMyIgb3JkZXI9Ijk4Ij4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzUzNjAzIiBvcmRlcj0iOTkiIElEPSI1MzYwMy4xMDAwMDQzMDAiIHRpdGxlPSJMb3cgZ3JhZGUgKCZsdDs9IDIwIG1pdG9zZXMgLyA1MCBoaWdoLXBvd2VyIGZpZWxkcykiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81MzYwM18xIiBvcmRlcj0iMTAwIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJMb3cgZ3JhZGUiIC8+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV80ODYzNCIgb3JkZXI9IjEwMSIgSUQ9IjQ4NjM0LjEwMDAwNDMwMCIgdGl0bGU9IkhpZ2ggZ3JhZGUgKCZndDsgMjAgbWl0b3NlcyAvIDUwIGhpZ2gtcG93ZXIgZmllbGRzKSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNDg2MzRfMSIgb3JkZXI9IjEwMiIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iSGlnaCBncmFkZSIgLz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPERpc3BsYXllZEl0ZW0gbmFtZT0iRElfNTc5ODAiIG9yZGVyPSIxMDMiIElEPSI1Nzk4MC4xMDAwMDQzMDAiIHRpdGxlPSIjTm90ZTogR2VuZXJhbGx5IGR1ZSB0byBjb3JlIG5lZWRsZSBiaW9wc3ksIHdpdGggaW5zdWZmaWNpZW50IHZpYWJsZSB0dW1vciB0byBjb3VudCA1MCBIUEZzLiI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNTc5ODBfMSIgb3JkZXI9IjEwNCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJCQkJCQk8L0Rpc3BsYXllZEl0ZW0+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV81NDY0OCIgb3JkZXI9IjEwNSIgSUQ9IjU0NjQ4LjEwMDAwNDMwMCIgdGl0bGU9IkNhbm5vdCBiZSBhc3Nlc3NlZCAoZXhwbGFpbikjIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81NDY0OF8xIiBvcmRlcj0iMTA2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJDYW5ub3QgYmUgYXNzZXNzZWQiIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfNTQ2NDhfMiIgb3JkZXI9IjEwNyIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF81NDY0OF8zIiBvcmRlcj0iMTA4Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNTQ2NDhfNCIgb3JkZXI9IjEwOSIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfVHVtX1NpemVfMjEyOSIgb3JkZXI9IjExMCIgSUQ9IjIxMjkuMTAwMDA0MzAwIiB0aXRsZT0iVHVtb3IgU2l6ZSAoTm90ZSBBKSI+CgkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjEyOV8xIiBvcmRlcj0iMTExIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJUdW1vciBTaXplIiAvPgoJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl8yMTI5XzIiIG9yZGVyPSIxMTIiPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF8yMTI5XzMiIG9yZGVyPSIxMTMiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfVFNpemUxXzIxMzEiIG9yZGVyPSIxMTQiIElEPSIyMTMxLjEwMDAwNDMwMCIgdGl0bGU9IkdyZWF0ZXN0IGRpbWVuc2lvbiBpbiBDZW50aW1ldGVycyAoY20pIiBzZWxlY3RlZD0idHJ1ZSI+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjEzMV8xIiBvcmRlcj0iMTE1IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIxMzFfMiIgb3JkZXI9IjExNiI+CgkJCQkJCQkJCQkJCTxkZWNpbWFsIG5hbWU9ImRlY18yMTMxXzMiIG9yZGVyPSIxMTciIG1pbkluY2x1c2l2ZT0iMC4wMDEwMDAwMDAiIG1heEluY2x1c2l2ZT0iMTAwLjAwMDAwMDAwMCIgZnJhY3Rpb25EaWdpdHM9IjMiIHRvdGFsRGlnaXRzPSI1IiB2YWw9IjMiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQk8VGV4dEFmdGVyUmVzcG9uc2UgbmFtZT0icnR0XzIxMzFfNCIgb3JkZXI9IjExOCIgdmFsPSJDZW50aW1ldGVycyAoY20pIiAvPgoJCQkJCQkJCQkJCTxSZXNwb25zZVVuaXRzIG5hbWU9InVuXzIxMzFfNSIgb3JkZXI9IjExOSIgdmFsPSJjbSIgdW5pdFN5c3RlbT0iVUNPTSIgLz4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMjEzMV82IiBvcmRlcj0iMTIwIj4KCQkJCQkJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9UdW1fQWRkX0RpbV8yMTMzIiBvcmRlcj0iMTIxIiBJRD0iMjEzMy4xMDAwMDQzMDAiIHRpdGxlPSJBZGRpdGlvbmFsIERpbWVuc2lvbiBpbiBDZW50aW1ldGVycyAoY20pIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJCQkJCQkJCTxSZXNwb25zZUZpZWxkIG5hbWU9InJmXzIxMzNfMSIgb3JkZXI9IjEyMiI+CgkJCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIxMzNfMiIgb3JkZXI9IjEyMyI+CgkJCQkJCQkJCQkJCQkJPGRlY2ltYWwgbmFtZT0iZGVjXzIxMzNfMyIgb3JkZXI9IjEyNCIgbWluSW5jbHVzaXZlPSIwLjAwMTAwMDAwMCIgbWF4SW5jbHVzaXZlPSIxMDAuMDAwMDAwMDAwIiBmcmFjdGlvbkRpZ2l0cz0iMyIgdG90YWxEaWdpdHM9IjUiIHZhbD0iMyIgLz4KCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQk8VGV4dEFmdGVyUmVzcG9uc2UgbmFtZT0icnR0XzIxMzNfNCIgb3JkZXI9IjEyNSIgdmFsPSJDZW50aW1ldGVycyAoY20pIiAvPgoJCQkJCQkJCQkJCQkJPFJlc3BvbnNlVW5pdHMgbmFtZT0idW5fMjEzM181IiBvcmRlcj0iMTI2IiB2YWw9ImNtIiB1bml0U3lzdGVtPSJVQ09NIiAvPgoJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9UdW1fQWRkX0RpbV8yMTMyIiBvcmRlcj0iMTI3IiBJRD0iMjEzMi4xMDAwMDQzMDAiIHRpdGxlPSJBZGRpdGlvbmFsIERpbWVuc2lvbiBpbiBDZW50aW1ldGVycyAoY20pIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJCQkJCQkJCTxSZXNwb25zZUZpZWxkIG5hbWU9InJmXzIxMzJfMSIgb3JkZXI9IjEyOCI+CgkJCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIxMzJfMiIgb3JkZXI9IjEyOSI+CgkJCQkJCQkJCQkJCQkJPGRlY2ltYWwgbmFtZT0iZGVjXzIxMzJfMyIgb3JkZXI9IjEzMCIgbWluSW5jbHVzaXZlPSIwLjAwMTAwMDAwMCIgbWF4SW5jbHVzaXZlPSIxMDAuMDAwMDAwMDAwIiBmcmFjdGlvbkRpZ2l0cz0iMyIgdG90YWxEaWdpdHM9IjUiIHZhbD0iMyIgLz4KCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQk8VGV4dEFmdGVyUmVzcG9uc2UgbmFtZT0icnR0XzIxMzJfNCIgb3JkZXI9IjEzMSIgdmFsPSJDZW50aW1ldGVycyAoY20pIiAvPgoJCQkJCQkJCQkJCQkJPFJlc3BvbnNlVW5pdHMgbmFtZT0idW5fMjEzMl81IiBvcmRlcj0iMTMyIiB2YWw9ImNtIiB1bml0U3lzdGVtPSJVQ09NIiAvPgoJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0NCRF8yMTMwIiBvcmRlcj0iMTMzIiBJRD0iMjEzMC4xMDAwMDQzMDAiIHRpdGxlPSJDYW5ub3QgYmUgZGV0ZXJtaW5lZCAoZXhwbGFpbikiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxMzBfMSIgb3JkZXI9IjEzNCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iQ2Fubm90IGJlIGRldGVybWluZWQiIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjEzMF8yIiBvcmRlcj0iMTM1IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIxMzBfMyIgb3JkZXI9IjEzNiI+CgkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzIxMzBfNCIgb3JkZXI9IjEzNyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfVHVtX0dsYW5kX1dlaWdodF80MDQ5NiIgb3JkZXI9IjEzOCIgSUQ9IjQwNDk2LjEwMDAwNDMwMCIgdGl0bGU9IlR1bW9yIFdlaWdodCAoTm90ZSBCKSI+CgkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNDA0OTZfMSIgb3JkZXI9IjEzOSIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iVHVtb3IgV2VpZ2h0IiAvPgoJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl80MDQ5Nl8yIiBvcmRlcj0iMTQwIj4KCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNDA0OTZfMyIgb3JkZXI9IjE0MSI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9UdW1fR2xhbmRfV2VpZ2h0X2dfNDQ3NjEiIG9yZGVyPSIxNDIiIElEPSI0NDc2MS4xMDAwMDQzMDAiIHRpdGxlPSJTcGVjaWZ5IHdlaWdodCAoZykiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzQ0NzYxXzEiIG9yZGVyPSIxNDMiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IntubyB0ZXh0fSIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl80NDc2MV8yIiBvcmRlcj0iMTQ0IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzQ0NzYxXzMiIG9yZGVyPSIxNDUiPgoJCQkJCQkJCQkJCQk8ZGVjaW1hbCBuYW1lPSJkZWNfNDQ3NjFfNCIgb3JkZXI9IjE0NiIgbWluSW5jbHVzaXZlPSIwLjAwMDAwMDAwMCIgbWF4SW5jbHVzaXZlPSI1MDAwMC4wMDAwMDAwMDAiIGZyYWN0aW9uRGlnaXRzPSIyIiB0b3RhbERpZ2l0cz0iNyIgLz4KCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCTxUZXh0QWZ0ZXJSZXNwb25zZSBuYW1lPSJydHRfNDQ3NjFfNSIgb3JkZXI9IjE0NyIgdmFsPSJnIiAvPgoJCQkJCQkJCQkJCTxSZXNwb25zZVVuaXRzIG5hbWU9InVuXzQ0NzYxXzYiIG9yZGVyPSIxNDgiIHZhbD0iZ3JhbXMiIHVuaXRTeXN0ZW09IlVDT00iIC8+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX05BXzU3NDc2IiBvcmRlcj0iMTQ5IiBJRD0iNTc0NzYuMTAwMDA0MzAwIiB0aXRsZT0iQ2Fubm90IGJlIGRldGVybWluZWQiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl81NzQ3Nl8xIiBvcmRlcj0iMTUwIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzU3NDc2XzIiIG9yZGVyPSIxNTEiPgoJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl81NzQ3Nl8zIiBvcmRlcj0iMTUyIiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQk8U2VjdGlvbiBuYW1lPSJTXzE3ODc3IiBvcmRlcj0iMTUzIiBJRD0iMTc4NzcuMTAwMDA0MzAwIiB0aXRsZT0iVHVtb3IgRXh0ZW50Ij4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8xNzg3N18xIiBvcmRlcj0iMTU0IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF8xNzg3N18yIiBvcmRlcj0iMTU1Ij4KCQkJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV81MTI2NSIgb3JkZXI9IjE1NiIgSUQ9IjUxMjY1LjEwMDAwNDMwMCIgdGl0bGU9IlR1bW9yIEV4dGVuc2lvbiI+CgkJCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNTEyNjVfMSIgb3JkZXI9IjE1NyIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNTEyNjVfMiIgb3JkZXI9IjE1OCI+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzQ0MTg2IiBvcmRlcj0iMTU5IiBJRD0iNDQxODYuMTAwMDA0MzAwIiB0aXRsZT0iTm8gZXZpZGVuY2Ugb2YgcHJpbWFyeSB0dW1vciIgc2VsZWN0aW9uRGVzZWxlY3RzU2libGluZ3M9InRydWUiIC8+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzUwNjk1IiBvcmRlcj0iMTYwIiBJRD0iNTA2OTUuMTAwMDA0MzAwIiB0aXRsZT0iVHVtb3IgY29uZmluZWQgdG8gYWRyZW5hbCBjb3J0ZXggd2l0aG91dCBpbnZhc2lvbiB0aHJvdWdoIHR1bW9yIGNhcHN1bGUgKGlmIHByZXNlbnQpIiBzZWxlY3Rpb25EZXNlbGVjdHNTaWJsaW5ncz0idHJ1ZSI+CgkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81MDY5NV8xIiBvcmRlcj0iMTYxIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJUdW1vciBjb25maW5lZCB0byBhZHJlbmFsIGNvcnRleCB3aXRob3V0IGludmFzaW9uIHRocm91Z2ggdHVtb3IgY2Fwc3VsZSIgLz4KCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV8zOTUzNyIgb3JkZXI9IjE2MiIgSUQ9IjM5NTM3LjEwMDAwNDMwMCIgdGl0bGU9IlR1bW9yIGludmFkZXMgaW50byBvciB0aHJvdWdoIHRoZSBhZHJlbmFsIGNhcHN1bGUiIC8+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzUyMzE1IiBvcmRlcj0iMTYzIiBJRD0iNTIzMTUuMTAwMDA0MzAwIiB0aXRsZT0iVHVtb3IgaW52YWRlcyBpbnRvIGV4dHJhLWFkcmVuYWwgc3RydWN0dXJlcyAoc3BlY2lmeSkiPgoJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfNTIzMTVfMSIgb3JkZXI9IjE2NCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iVHVtb3IgaW52YWRlcyBpbnRvIGV4dHJhLWFkcmVuYWwgc3RydWN0dXJlcyIgLz4KCQkJCQkJCQkJCQkJPExpc3RJdGVtUmVzcG9uc2VGaWVsZCBuYW1lPSJsaXJmXzUyMzE1XzIiIG9yZGVyPSIxNjUiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF81MjMxNV8zIiBvcmRlcj0iMTY2Ij4KCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl81MjMxNV80IiBvcmRlcj0iMTY3IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV81NjI3MSIgb3JkZXI9IjE2OCIgSUQ9IjU2MjcxLjEwMDAwNDMwMCIgdGl0bGU9IlR1bW9yIGludmFkZXMgaW50byBvdGhlciBhZGphY2VudCBvcmdhbihzKSIgc2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF81NjI3MV8xIiBvcmRlcj0iMTY5Ij4KCQkJCQkJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzUzNTI2IiBvcmRlcj0iMTcwIiBJRD0iNTM1MjYuMTAwMDA0MzAwIj4KCQkJCQkJCQkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzUzNTI2XzEiIG9yZGVyPSIxNzEiIG1heFNlbGVjdGlvbnM9IjAiPgoJCQkJCQkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNTM1MjZfMiIgb3JkZXI9IjE3MiI+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTY3NTIiIG9yZGVyPSIxNzMiIElEPSI1Njc1Mi4xMDAwMDQzMDAiIHRpdGxlPSJLaWRuZXkiIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTc3NDgiIG9yZGVyPSIxNzQiIElEPSI1Nzc0OC4xMDAwMDQzMDAiIHRpdGxlPSJQYW5jcmVhcyIgc2VsZWN0ZWQ9InRydWUiIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDE0MDkiIG9yZGVyPSIxNzUiIElEPSI0MTQwOS4xMDAwMDQzMDAiIHRpdGxlPSJMaXZlciIgLz4KCQkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV80MjMwNSIgb3JkZXI9IjE3NiIgSUQ9IjQyMzA1LjEwMDAwNDMwMCIgdGl0bGU9IlNwbGVlbiIgLz4KCQkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV81ODIyOSIgb3JkZXI9IjE3NyIgSUQ9IjU4MjI5LjEwMDAwNDMwMCIgdGl0bGU9IkRpYXBocmFnbSIgLz4KCQkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV80NjIxOCIgb3JkZXI9IjE3OCIgSUQ9IjQ2MjE4LjEwMDAwNDMwMCIgdGl0bGU9IlN0b21hY2giIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDU1OTQiIG9yZGVyPSIxNzkiIElEPSI0NTU5NC4xMDAwMDQzMDAiIHRpdGxlPSJPdGhlciAoc3BlY2lmeSkiPgoJCQkJCQkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF80NTU5NF8xIiBvcmRlcj0iMTgwIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQkJCQkJCQkJPExpc3RJdGVtUmVzcG9uc2VGaWVsZCBuYW1lPSJsaXJmXzQ1NTk0XzIiIG9yZGVyPSIxODEiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzQ1NTk0XzMiIG9yZGVyPSIxODIiPgoJCQkJCQkJCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNDU1OTRfNCIgb3JkZXI9IjE4MyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0luZGV0ZXJtaW5hdGVfNTE5MTEiIG9yZGVyPSIxODQiIElEPSI1MTkxMS4xMDAwMDQzMDAiIHRpdGxlPSJDYW5ub3QgYmUgYXNzZXNzZWQiIHNlbGVjdGlvbkRlc2VsZWN0c1NpYmxpbmdzPSJ0cnVlIj4KCQkJCQkJCQkJCQkJPExpc3RJdGVtUmVzcG9uc2VGaWVsZCBuYW1lPSJsaXJmXzUxOTExXzEiIG9yZGVyPSIxODUiPgoJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF81MTkxMV8yIiBvcmRlcj0iMTg2Ij4KCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl81MTkxMV8zIiBvcmRlcj0iMTg3IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJCQk8L1NlY3Rpb24+CgkJCQkJCTxTZWN0aW9uIG5hbWU9IlNfMTc4NzkiIG9yZGVyPSIxODgiIElEPSIxNzg3OS4xMDAwMDQzMDAiIHRpdGxlPSJBY2Nlc3NvcnkgRmluZGluZ3MiPgoJCQkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc4NzlfMSIgb3JkZXI9IjE4OSI+CgkJCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfNDI0NzQiIG9yZGVyPSIxOTAiIElEPSI0MjQ3NC4xMDAwMDQzMDAiIHRpdGxlPSJMeW1waG92YXNjdWxhciBJbnZhc2lvbiAoTm90ZSBGKSI+CgkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF80MjQ3NF8xIiBvcmRlcj0iMTkxIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJMeW1waG92YXNjdWxhciBJbnZhc2lvbiIgLz4KCQkJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl80MjQ3NF8yIiBvcmRlcj0iMTkyIiBtYXhTZWxlY3Rpb25zPSIwIj4KCQkJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF80MjQ3NF8zIiBvcmRlcj0iMTkzIj4KCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTm90X0lkXzIxNTkiIG9yZGVyPSIxOTQiIElEPSIyMTU5LjEwMDAwNDMwMCIgdGl0bGU9Ik5vdCBpZGVudGlmaWVkIiBzZWxlY3Rpb25EZXNlbGVjdHNTaWJsaW5ncz0idHJ1ZSIgLz4KCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTI5NjIiIG9yZGVyPSIxOTUiIElEPSI1Mjk2Mi4xMDAwMDQzMDAiIHRpdGxlPSJMYXJnZSB2ZXNzZWwsIHJlbmFsIHZlaW4gKGluY2x1ZGluZyB3aGVuIGlkZW50aWZpZWQgY2xpbmljYWxseSkiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzUyOTYyXzEiIG9yZGVyPSIxOTYiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IkxhcmdlIHZlc3NlbCwgcmVuYWwgdmVpbiIgLz4KCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV81OTQ1NCIgb3JkZXI9IjE5NyIgSUQ9IjU5NDU0LjEwMDAwNDMwMCIgdGl0bGU9IkxhcmdlIHZlc3NlbCwgdmVuYSBjYXZhIChpbmNsdWRpbmcgd2hlbiBpZGVudGlmaWVkIGNsaW5pY2FsbHkpIj4KCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzU5NDU0XzEiIG9yZGVyPSIxOTgiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IkxhcmdlIHZlc3NlbCwgdmVuYSBjYXZhIiAvPgoJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX1NtX1Zlc3NlbF8yMDg4MSIgb3JkZXI9IjE5OSIgSUQ9IjIwODgxLjEwMDAwNDMwMCIgdGl0bGU9IlNtYWxsIHZlc3NlbCAoY2FwaWxsYXJ5IGx5bXBoYXRpYykiIHNlbGVjdGVkPSJ0cnVlIiAvPgoJCQkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9JbmRldGVybWluYXRlXzIxNjEiIG9yZGVyPSIyMDAiIElEPSIyMTYxLjEwMDAwNDMwMCIgdGl0bGU9IkNhbm5vdCBiZSBkZXRlcm1pbmVkIiBzZWxlY3Rpb25EZXNlbGVjdHNTaWJsaW5ncz0idHJ1ZSI+CgkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMTYxXzEiIG9yZGVyPSIyMDEiPgoJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yMTYxXzIiIG9yZGVyPSIyMDIiPgoJCQkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzIxNjFfMyIgb3JkZXI9IjIwMyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV80ODQ5MSIgb3JkZXI9IjIwNCIgSUQ9IjQ4NDkxLjEwMDAwNDMwMCIgdGl0bGU9IlR1bW9yIERlc2NyaXB0aW9uIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNDg0OTFfMSIgb3JkZXI9IjIwNSIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNDg0OTFfMiIgb3JkZXI9IjIwNiI+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0hlbW9ycmhhZ2ljXzIwODYzIiBvcmRlcj0iMjA3IiBJRD0iMjA4NjMuMTAwMDA0MzAwIiB0aXRsZT0iSGVtb3JyaGFnaWMiIC8+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX05lY3JvdGljXzIwODY0IiBvcmRlcj0iMjA4IiBJRD0iMjA4NjQuMTAwMDA0MzAwIiB0aXRsZT0iTmVjcm90aWMiIC8+CgkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX090aF8yMDg2NSIgb3JkZXI9IjIwOSIgSUQ9IjIwODY1LjEwMDAwNDMwMCIgdGl0bGU9Ik90aGVyIChzcGVjaWZ5KSI+CgkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMDg2NV8xIiBvcmRlcj0iMjEwIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMDg2NV8yIiBvcmRlcj0iMjExIiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjA4NjVfMyIgb3JkZXI9IjIxMiI+CgkJCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjA4NjVfNCIgb3JkZXI9IjIxMyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCQkJPC9TZWN0aW9uPgoJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCTwvU2VjdGlvbj4KCQkJCTxTZWN0aW9uIG5hbWU9IlNfMTc4NzgiIG9yZGVyPSIyMTQiIElEPSIxNzg3OC4xMDAwMDQzMDAiIHRpdGxlPSJNQVJHSU5TIj4KCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF8xNzg3OF8xIiBvcmRlcj0iMjE1Ij4KCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfTWFyZ19TdGF0dXNfMjE1MyIgb3JkZXI9IjIxNiIgSUQ9IjIxNTMuMTAwMDA0MzAwIiB0aXRsZT0iTWFyZ2lucyI+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzIxNTNfMSIgb3JkZXI9IjIxNyI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIxNTNfMiIgb3JkZXI9IjIxOCI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9NYXJnVW52X1R1bV8yMTU0IiBvcmRlcj0iMjE5IiBJRD0iMjE1NC4xMDAwMDQzMDAiIHRpdGxlPSJVbmludm9sdmVkIGJ5IHR1bW9yIiBzZWxlY3RlZD0idHJ1ZSI+CgkJCQkJCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF8yMTU0XzEiIG9yZGVyPSIyMjAiPgoJCQkJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX01hcmdVbnZfVHVtX0Rpc3RfMjYzNTgiIG9yZGVyPSIyMjEiIElEPSIyNjM1OC4xMDAwMDQzMDAiIHRpdGxlPSJEaXN0YW5jZSBmcm9tIENsb3Nlc3QgTWFyZ2luIGluIE1pbGxpbWV0ZXJzIChtbSkiIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl8yNjM1OF8xIiBvcmRlcj0iMjIyIj4KCQkJCQkJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF8yNjM1OF8yIiBvcmRlcj0iMjIzIj4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfU3BmeV9tbV8yNjM1OSIgb3JkZXI9IjIyNCIgSUQ9IjI2MzU5LjEwMDAwNDMwMCIgdGl0bGU9IlNwZWNpZnkgaW4gTWlsbGltZXRlcnMgKG1tKSI+CgkJCQkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yNjM1OV8xIiBvcmRlcj0iMjI1IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yNjM1OV8yIiBvcmRlcj0iMjI2IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjYzNTlfMyIgb3JkZXI9IjIyNyI+CgkJCQkJCQkJCQkJCQkJCQkJPGRlY2ltYWwgbmFtZT0iZGVjXzI2MzU5XzQiIG9yZGVyPSIyMjgiIG1pbkluY2x1c2l2ZT0iMC4wMTAwMDAwMDAiIG1heEluY2x1c2l2ZT0iMTAwMC4wMDAwMDAwMDAiIGZyYWN0aW9uRGlnaXRzPSIyIiB0b3RhbERpZ2l0cz0iNSIgLz4KCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCQk8VGV4dEFmdGVyUmVzcG9uc2UgbmFtZT0icnR0XzI2MzU5XzUiIG9yZGVyPSIyMjkiIHZhbD0iTWlsbGltZXRlcnMgKG1tKSIgLz4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZVVuaXRzIG5hbWU9InVuXzI2MzU5XzYiIG9yZGVyPSIyMzAiIHZhbD0ibW0iIHVuaXRTeXN0ZW09IlVDT00iIC8+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0NCQV8yNjM2MSIgb3JkZXI9IjIzMSIgSUQ9IjI2MzYxLjEwMDAwNDMwMCIgdGl0bGU9IkNhbm5vdCBiZSBkZXRlcm1pbmVkIChleHBsYWluKSI+CgkJCQkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yNjM2MV8xIiBvcmRlcj0iMjMyIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJDYW5ub3QgYmUgZGV0ZXJtaW5lZCIgLz4KCQkJCQkJCQkJCQkJCQkJPExpc3RJdGVtUmVzcG9uc2VGaWVsZCBuYW1lPSJsaXJmXzI2MzYxXzIiIG9yZGVyPSIyMzMiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yNjM2MV8zIiBvcmRlcj0iMjM0Ij4KCQkJCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yNjM2MV80IiBvcmRlcj0iMjM1IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX01hcmdfTG9jXzI2MzYyIiBvcmRlcj0iMjM2IiBJRD0iMjYzNjIuMTAwMDA0MzAwIiB0aXRsZT0iP1NwZWNpZnkgTWFyZ2luLCBpZiBwb3NzaWJsZSI+CgkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yNjM2Ml8xIiBvcmRlcj0iMjM3IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJNYXJnaW4iIC8+CgkJCQkJCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfMjYzNjJfMiIgb3JkZXI9IjIzOCI+CgkJCQkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfMjYzNjJfMyIgb3JkZXI9IjIzOSI+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX01hcmdfTG9jXzI2MzYzIiBvcmRlcj0iMjQwIiBJRD0iMjYzNjMuMTAwMDA0MzAwIiB0aXRsZT0iU3BlY2lmeSBtYXJnaW4iPgoJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjYzNjNfMSIgb3JkZXI9IjI0MSIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0ie25vIHRleHR9IiAvPgoJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjYzNjNfMiIgb3JkZXI9IjI0MiIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzI2MzYzXzMiIG9yZGVyPSIyNDMiPgoJCQkJCQkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzI2MzYzXzQiIG9yZGVyPSIyNDQiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0NCRF8yNjM2NCIgb3JkZXI9IjI0NSIgSUQ9IjI2MzY0LjEwMDAwNDMwMCIgdGl0bGU9Ij9DYW5ub3QgYmUgZGV0ZXJtaW5lZCIgb21pdFdoZW5TZWxlY3RlZD0idHJ1ZSIgc2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjYzNjRfMSIgb3JkZXI9IjI0NiIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iQ2Fubm90IGJlIGRldGVybWluZWQiIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yNjM2NF8yIiBvcmRlcj0iMjQ3Ij4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjYzNjRfMyIgb3JkZXI9IjI0OCI+CgkJCQkJCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjYzNjRfNCIgb3JkZXI9IjI0OSIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX01hcmdfVHVtXzIxNTUiIG9yZGVyPSIyNTAiIElEPSIyMTU1LjEwMDAwNDMwMCIgdGl0bGU9Ikludm9sdmVkIGJ5IHR1bW9yIj4KCQkJCQkJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzIxNTVfMSIgb3JkZXI9IjI1MSI+CgkJCQkJCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfTWFyZ19Mb2NfMjYzNjUiIG9yZGVyPSIyNTIiIElEPSIyNjM2NS4xMDAwMDQzMDAiIHRpdGxlPSI/U3BlY2lmeSBNYXJnaW4ocyksIGlmIHBvc3NpYmxlIj4KCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzI2MzY1XzEiIG9yZGVyPSIyNTMiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9Ik1hcmdpbihzKSIgLz4KCQkJCQkJCQkJCQkJPExpc3RGaWVsZCBuYW1lPSJsZl8yNjM2NV8yIiBvcmRlcj0iMjU0Ij4KCQkJCQkJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF8yNjM2NV8zIiBvcmRlcj0iMjU1Ij4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTWFyZ19Mb2NfMjYzNjYiIG9yZGVyPSIyNTYiIElEPSIyNjM2Ni4xMDAwMDQzMDAiIHRpdGxlPSJTcGVjaWZ5IG1hcmdpbihzKSI+CgkJCQkJCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yNjM2Nl8xIiBvcmRlcj0iMjU3IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yNjM2Nl8yIiBvcmRlcj0iMjU4IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjYzNjZfMyIgb3JkZXI9IjI1OSI+CgkJCQkJCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjYzNjZfNCIgb3JkZXI9IjI2MCIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQ0JEXzI2MzY3IiBvcmRlcj0iMjYxIiBJRD0iMjYzNjcuMTAwMDA0MzAwIiB0aXRsZT0iP0Nhbm5vdCBiZSBkZXRlcm1pbmVkIiBvbWl0V2hlblNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzI2MzY3XzEiIG9yZGVyPSIyNjIiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IkNhbm5vdCBiZSBkZXRlcm1pbmVkIiAvPgoJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjYzNjdfMiIgb3JkZXI9IjI2MyI+CgkJCQkJCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzI2MzY3XzMiIG9yZGVyPSIyNjQiPgoJCQkJCQkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzI2MzY3XzQiIG9yZGVyPSIyNjUiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9DQkRfMjE1NyIgb3JkZXI9IjI2NiIgSUQ9IjIxNTcuMTAwMDA0MzAwIiB0aXRsZT0iQ2Fubm90IGJlIGFzc2Vzc2VkIj4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMTU3XzEiIG9yZGVyPSIyNjciPgoJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjE1N18yIiBvcmRlcj0iMjY4Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjE1N18zIiBvcmRlcj0iMjY5IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTkFfMjA4NTIiIG9yZGVyPSIyNzAiIElEPSIyMDg1Mi4xMDAwMDQzMDAiIHRpdGxlPSJOb3QgYXBwbGljYWJsZSI+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjA4NTJfMSIgb3JkZXI9IjI3MSI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yMDg1Ml8yIiBvcmRlcj0iMjcyIj4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjA4NTJfMyIgb3JkZXI9IjI3MyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQk8L1NlY3Rpb24+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzE3ODgxIiBvcmRlcj0iMjc0IiBJRD0iMTc4ODEuMTAwMDA0MzAwIiB0aXRsZT0iTFlNUEggTk9ERVMiPgoJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzE3ODgxXzEiIG9yZGVyPSIyNzUiPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV8xODY3IiBvcmRlcj0iMjc2IiBJRD0iMTg2Ny4xMDAwMDQzMDAiIHRpdGxlPSJSZWdpb25hbCBMeW1waCBOb2RlcyI+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzE4NjdfMSIgb3JkZXI9IjI3NyIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzE4NjdfMiIgb3JkZXI9IjI3OCI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9Ob19MTl9JZF8xODY4IiBvcmRlcj0iMjc5IiBJRD0iMTg2OC4xMDAwMDQzMDAiIHRpdGxlPSJObyBseW1waCBub2RlcyBzdWJtaXR0ZWQgb3IgZm91bmQiIHNlbGVjdGlvbkRpc2FibGVzQ2hpbGRyZW49InRydWUiPgoJCQkJCQkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTg2OF8xIiBvcmRlcj0iMjgwIj4KCQkJCQkJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV80NTA5OCIgb3JkZXI9IjI4MSIgSUQ9IjQ1MDk4LjEwMDAwNDMwMCIgdGl0bGU9Ik51bWJlciBvZiBMeW1waCBOb2RlcyBJbnZvbHZlZCI+CgkJCQkJCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNDUwOThfMSIgb3JkZXI9IjI4MiI+CgkJCQkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNDUwOThfMiIgb3JkZXI9IjI4MyI+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX1NwZWNpZnlfMTg3MyIgb3JkZXI9IjI4NCIgSUQ9IjE4NzMuMTAwMDA0MzAwIiB0aXRsZT0iU3BlY2lmeSBudW1iZXIiPgoJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMTg3M18xIiBvcmRlcj0iMjg1IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8xODczXzIiIG9yZGVyPSIyODYiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8xODczXzMiIG9yZGVyPSIyODciPgoJCQkJCQkJCQkJCQkJCQkJCTxpbnRlZ2VyIG5hbWU9ImludHJfMTg3M180IiBvcmRlcj0iMjg4IiBtYXhJbmNsdXNpdmU9IjEwMCIgbWluSW5jbHVzaXZlPSIwIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTg5MzgiIG9yZGVyPSIyODkiIElEPSI1ODkzOC4xMDAwMDQzMDAiIHRpdGxlPSJBdCBsZWFzdCI+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl81ODkzOF8xIiBvcmRlcj0iMjkwIiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfNTg5MzhfMiIgb3JkZXI9IjI5MSI+CgkJCQkJCQkJCQkJCQkJCQkJPGludGVnZXIgbmFtZT0iaW50cl81ODkzOF8zIiBvcmRlcj0iMjkyIiBtYXhJbmNsdXNpdmU9IjEwMCIgbWluSW5jbHVzaXZlPSIxIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQ0JEXzE4NzQiIG9yZGVyPSIyOTMiIElEPSIxODc0LjEwMDAwNDMwMCIgdGl0bGU9Ik51bWJlciBjYW5ub3QgYmUgZGV0ZXJtaW5lZCAoZXhwbGFpbikiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzE4NzRfMSIgb3JkZXI9IjI5NCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iTnVtYmVyIGNhbm5vdCBiZSBkZXRlcm1pbmVkIiAvPgoJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMTg3NF8yIiBvcmRlcj0iMjk1IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMTg3NF8zIiBvcmRlcj0iMjk2Ij4KCQkJCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8xODc0XzQiIG9yZGVyPSIyOTciIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQkJCQkJCQk8Q2hpbGRJdGVtcyBuYW1lPSJjaF80NTA5OF81IiBvcmRlcj0iMjk4Ij4KCQkJCQkJCQkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzM5Mjk2IiBvcmRlcj0iMjk5IiBJRD0iMzkyOTYuMTAwMDA0MzAwIiB0aXRsZT0iRXh0cmFub2RhbCBFeHRlbnNpb24iIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCQkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzM5Mjk2XzEiIG9yZGVyPSIzMDAiPgoJCQkJCQkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfMzkyOTZfMiIgb3JkZXI9IjMwMSI+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTm90X0lkXzIwODg2IiBvcmRlcj0iMzAyIiBJRD0iMjA4ODYuMTAwMDA0MzAwIiB0aXRsZT0iTm90IGlkZW50aWZpZWQiIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfUHJlc2VudF8yMDg4NyIgb3JkZXI9IjMwMyIgSUQ9IjIwODg3LjEwMDAwNDMwMCIgdGl0bGU9IlByZXNlbnQiIC8+CgkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfSW5kZXRlcm1pbmF0ZV8yMDg4OCIgb3JkZXI9IjMwNCIgSUQ9IjIwODg4LjEwMDAwNDMwMCIgdGl0bGU9IkNhbm5vdCBiZSBkZXRlcm1pbmVkIj4KCQkJCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjA4ODhfMSIgb3JkZXI9IjMwNSI+CgkJCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjA4ODhfMiIgb3JkZXI9IjMwNiI+CgkJCQkJCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yMDg4OF8zIiBvcmRlcj0iMzA3IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQkJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV80MjkzNCIgb3JkZXI9IjMwOCIgSUQ9IjQyOTM0LjEwMDAwNDMwMCIgdGl0bGU9Ik51bWJlciBvZiBMeW1waCBOb2RlcyBFeGFtaW5lZCI+CgkJCQkJCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNDI5MzRfMSIgb3JkZXI9IjMwOSI+CgkJCQkJCQkJCQkJCQk8TGlzdCBuYW1lPSJsc3RfNDI5MzRfMiIgb3JkZXI9IjMxMCI+CgkJCQkJCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX1NwZWNpZnlfMTg3MCIgb3JkZXI9IjMxMSIgSUQ9IjE4NzAuMTAwMDA0MzAwIiB0aXRsZT0iU3BlY2lmeSBudW1iZXIiPgoJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMTg3MF8xIiBvcmRlcj0iMzEyIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8xODcwXzIiIG9yZGVyPSIzMTMiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8xODcwXzMiIG9yZGVyPSIzMTQiPgoJCQkJCQkJCQkJCQkJCQkJCTxpbnRlZ2VyIG5hbWU9ImludHJfMTg3MF80IiBvcmRlcj0iMzE1IiBtYXhJbmNsdXNpdmU9IjEwMCIgbWluSW5jbHVzaXZlPSIxIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTQ2MTAiIG9yZGVyPSIzMTYiIElEPSI1NDYxMC4xMDAwMDQzMDAiIHRpdGxlPSJBdCBsZWFzdCI+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl81NDYxMF8xIiBvcmRlcj0iMzE3IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfNTQ2MTBfMiIgb3JkZXI9IjMxOCI+CgkJCQkJCQkJCQkJCQkJCQkJPGludGVnZXIgbmFtZT0iaW50cl81NDYxMF8zIiBvcmRlcj0iMzE5IiBtYXhJbmNsdXNpdmU9IjEwMCIgbWluSW5jbHVzaXZlPSIxIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQ0JEXzE4NzEiIG9yZGVyPSIzMjAiIElEPSIxODcxLjEwMDAwNDMwMCIgdGl0bGU9Ik51bWJlciBjYW5ub3QgYmUgZGV0ZXJtaW5lZCAoZXhwbGFpbikiPgoJCQkJCQkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMTg3MV8xIiBvcmRlcj0iMzIxIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJOdW1iZXIgY2Fubm90IGJlIGRldGVybWluZWQiIC8+CgkJCQkJCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8xODcxXzIiIG9yZGVyPSIzMjIiIHJlc3BvbnNlUmVxdWlyZWQ9InRydWUiPgoJCQkJCQkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8xODcxXzMiIG9yZGVyPSIzMjMiPgoJCQkJCQkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzE4NzFfNCIgb3JkZXI9IjMyNCIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQkJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQk8L1NlY3Rpb24+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzIxMzYiIG9yZGVyPSIzMjUiIElEPSIyMTM2LjEwMDAwNDMwMCIgdGl0bGU9IlBBVEhPTE9HSUMgU1RBR0UgQ0xBU1NJRklDQVRJT04gIChwVE5NLCBBSkNDIDh0aCBFZGl0aW9uKSAoTm90ZSBHKSI+CgkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxMzZfMSIgb3JkZXI9IjMyNiIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iUEFUSE9MT0dJQyBTVEFHRSBDTEFTU0lGSUNBVElPTiAgKHBUTk0sIEFKQ0MgOHRoIEVkaXRpb24pIiAvPgoJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzIxMzZfMiIgb3JkZXI9IjMyNyI+CgkJCQkJCTxEaXNwbGF5ZWRJdGVtIG5hbWU9IkRJXzUxMDg3IiBvcmRlcj0iMzI4IiBJRD0iNTEwODcuMTAwMDA0MzAwIiB0aXRsZT0iTm90ZTogUmVwb3J0aW5nIG9mIHBULCBwTiwgYW5kICh3aGVuIGFwcGxpY2FibGUpIHBNIGNhdGVnb3JpZXMgaXMgYmFzZWQgb24gaW5mb3JtYXRpb24gYXZhaWxhYmxlIHRvIHRoZSBwYXRob2xvZ2lzdCBhdCB0aGUgdGltZSB0aGUgcmVwb3J0IGlzIGlzc3VlZC4gIEFzIHBlciB0aGUgQUpDQyAoQ2hhcHRlciAxLCA4dGggRWQuKSBpdCBpcyB0aGUgbWFuYWdpbmcgcGh5c2ljaWFucyByZXNwb25zaWJpbGl0eSB0byBlc3RhYmxpc2ggdGhlIGZpbmFsIHBhdGhvbG9naWMgc3RhZ2UgYmFzZWQgdXBvbiBhbGwgcGVydGluZW50IGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgYnV0IHBvdGVudGlhbGx5IG5vdCBsaW1pdGVkIHRvIHRoaXMgcGF0aG9sb2d5IHJlcG9ydC4iPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzUxMDg3XzEiIG9yZGVyPSIzMjkiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9Ik5vdGU6IFJlcG9ydGluZyBvZiBwVCwgcE4sIGFuZCAod2hlbiBhcHBsaWNhYmxlKSBwTSBjYXRlZ29yaWVzIGlzIGJhc2VkIG9uIGluZm9ybWF0aW9uIGF2YWlsYWJsZSB0byB0aGUgcGF0aG9sb2dpc3QgYXQgdGhlIHRpbWUgdGhlIHJlcG9ydCBpcyBpc3N1ZWQuICBBcyBwZXIgdGhlIEFKQ0MgKENoYXB0ZXIgMSwgOHRoIEVkLikgaXQgaXMgdGhlIG1hbmFnaW5nIHBoeXNpY2lhbnMgcmVzcG9uc2liaWxpdHkgdG8gZXN0YWJsaXNoIHRoZSBmaW5hbCBwYXRob2xvZ2ljIHN0YWdlIGJhc2VkIHVwb24gYWxsIHBlcnRpbmVudCBpbmZvcm1hdGlvbiwgaW5jbHVkaW5nIGJ1dCBwb3RlbnRpYWxseSBub3QgbGltaXRlZCB0byB0aGlzIHBhdGhvbG9neSByZXBvcnQuIiAvPgoJCQkJCQk8L0Rpc3BsYXllZEl0ZW0+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX1ROTV9EZXNjcmlwdG9yc18yMDg4MCIgb3JkZXI9IjMzMCIgSUQ9IjIwODgwLjEwMDAwNDMwMCIgdGl0bGU9Ij9UTk0gRGVzY3JpcHRvcnMiPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIwODgwXzEiIG9yZGVyPSIzMzEiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IlROTSBEZXNjcmlwdG9ycyIgLz4KCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfMjA4ODBfMiIgb3JkZXI9IjMzMiIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIwODgwXzMiIG9yZGVyPSIzMzMiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfTkFfMjI4OTciIG9yZGVyPSIzMzQiIElEPSIyMjg5Ny4xMDAwMDQzMDAiIHRpdGxlPSI/Tm90IGFwcGxpY2FibGUiIHNlbGVjdGlvbkRlc2VsZWN0c1NpYmxpbmdzPSJ0cnVlIiBvbWl0V2hlblNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMjg5N18xIiBvcmRlcj0iMzM1IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJOb3QgYXBwbGljYWJsZSIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl8yMjg5N18yIiBvcmRlcj0iMzM2Ij4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIyODk3XzMiIG9yZGVyPSIzMzciPgoJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yMjg5N180IiBvcmRlcj0iMzM4IiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfbV8yMDg5MCIgb3JkZXI9IjMzOSIgSUQ9IjIwODkwLjEwMDAwNDMwMCIgdGl0bGU9Im0gKG11bHRpcGxlIHByaW1hcnkgdHVtb3JzKSIgc2VsZWN0ZWQ9InRydWUiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9yXzIwODkxIiBvcmRlcj0iMzQwIiBJRD0iMjA4OTEuMTAwMDA0MzAwIiB0aXRsZT0iciAocmVjdXJyZW50KSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3lfMjA4OTIiIG9yZGVyPSIzNDEiIElEPSIyMDg5Mi4xMDAwMDQzMDAiIHRpdGxlPSJ5IChwb3N0LXRyZWF0bWVudCkiIC8+CgkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRX3BUXzIxMzciIG9yZGVyPSIzNDIiIElEPSIyMTM3LjEwMDAwNDMwMCIgdGl0bGU9IlByaW1hcnkgVHVtb3IgKHBUKSI+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzIxMzdfMSIgb3JkZXI9IjM0MyI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIxMzdfMiIgb3JkZXI9IjM0NCI+CgkJCQkJCQkJCTxEaXNwbGF5ZWRJdGVtIG5hbWU9IkRJXzIwODk0IiBvcmRlcj0iMzQ1IiBJRD0iMjA4OTQuMTAwMDA0MzAwIiB0aXRsZT0iTm90ZTogVGhlcmUgaXMgbm8gY2F0ZWdvcnkgb2YgY2FyY2lub21hIGluIHNpdHUgKHBUaXMpIHJlbGF0aXZlIHRvIGNhcmNpbm9tYXMgb2YgdGhlIGFkcmVuYWwgZ2xhbmQuIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMDg5NF8xIiBvcmRlcj0iMzQ2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCTwvRGlzcGxheWVkSXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3BUWF8yMTQyIiBvcmRlcj0iMzQ3IiBJRD0iMjE0Mi4xMDAwMDQzMDAiIHRpdGxlPSJwVFg6IFByaW1hcnkgdHVtb3IgY2Fubm90IGJlIGFzc2Vzc2VkIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTQyXzEiIG9yZGVyPSIzNDgiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9InBUWCIgLz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3BUMF8yMDg4OSIgb3JkZXI9IjM0OSIgSUQ9IjIwODg5LjEwMDAwNDMwMCIgdGl0bGU9InBUMDogTm8gZXZpZGVuY2Ugb2YgcHJpbWFyeSB0dW1vciIgc2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIwODg5XzEiIG9yZGVyPSIzNTAiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9InBUMCIgLz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3BUMV8yMTM4IiBvcmRlcj0iMzUxIiBJRD0iMjEzOC4xMDAwMDQzMDAiIHRpdGxlPSJwVDE6IFR1bW9yICZsdDs9IDUgY20gaW4gZ3JlYXRlc3QgZGltZW5zaW9uLCBubyBleHRyYS1hZHJlbmFsIGludmFzaW9uIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTM4XzEiIG9yZGVyPSIzNTIiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9InBUMSIgLz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3BUMl8yMTM5IiBvcmRlcj0iMzUzIiBJRD0iMjEzOS4xMDAwMDQzMDAiIHRpdGxlPSJwVDI6IFR1bW9yICZndDsgNSBjbSwgbm8gZXh0cmEtYWRyZW5hbCBpbnZhc2lvbiI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjEzOV8xIiBvcmRlcj0iMzU0IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJwVDIiIC8+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9wVDNfMjE0MCIgb3JkZXI9IjM1NSIgSUQ9IjIxNDAuMTAwMDA0MzAwIiB0aXRsZT0icFQzOiBUdW1vciBvZiBhbnkgc2l6ZSB3aXRoIGxvY2FsIGludmFzaW9uLCBidXQgbm90IGludmFkaW5nIGFkamFjZW50IG9yZ2FucyI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjE0MF8xIiBvcmRlcj0iMzU2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJwVDMiIC8+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9wVDRfMjE0MSIgb3JkZXI9IjM1NyIgSUQ9IjIxNDEuMTAwMDA0MzAwIiB0aXRsZT0icFQ0OiBUdW1vciBvZiBhbnkgc2l6ZSB3aXRoIGludmFzaW9uIG9mIGFkamFjZW50IG9yZ2FucyAoa2lkbmV5LCBkaWFwaHJhZ20sIHBhbmNyZWFzLCBzcGxlZW4sIG9yIGxpdmVyKSBvciBsYXJnZSBibG9vZCB2ZXNzZWxzIChyZW5hbCB2ZWluIG9yIHZlbmEgY2F2YSkiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxNDFfMSIgb3JkZXI9IjM1OCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0icFQ0IiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9wTl8yMTQzIiBvcmRlcj0iMzU5IiBJRD0iMjE0My4xMDAwMDQzMDAiIHRpdGxlPSJSZWdpb25hbCBMeW1waCBOb2RlcyAocE4pIChOb3RlIEgpIj4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTQzXzEiIG9yZGVyPSIzNjAiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IlJlZ2lvbmFsIEx5bXBoIE5vZGVzIChwTikiIC8+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzIxNDNfMiIgb3JkZXI9IjM2MSI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIxNDNfMyIgb3JkZXI9IjM2MiI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9wTlhfMjE0NCIgb3JkZXI9IjM2MyIgSUQ9IjIxNDQuMTAwMDA0MzAwIiB0aXRsZT0icE5YOiBSZWdpb25hbCBseW1waCBub2RlcyBjYW5ub3QgYmUgYXNzZXNzZWQiIHNlbGVjdGVkPSJ0cnVlIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTQ0XzEiIG9yZGVyPSIzNjQiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9InBOWCIgLz4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX3BOMF8yMTQ1IiBvcmRlcj0iMzY1IiBJRD0iMjE0NS4xMDAwMDQzMDAiIHRpdGxlPSJwTjA6IE5vIHJlZ2lvbmFsIGx5bXBoIG5vZGUgbWV0YXN0YXNpcyI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjE0NV8xIiBvcmRlcj0iMzY2IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJwTjAiIC8+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9wTjFfMjE0NiIgb3JkZXI9IjM2NyIgSUQ9IjIxNDYuMTAwMDA0MzAwIiB0aXRsZT0icE4xOiBNZXRhc3Rhc2lzIGluIHJlZ2lvbmFsIGx5bXBoIG5vZGUocykiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxNDZfMSIgb3JkZXI9IjM2OCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0icE4xIiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQk8UXVlc3Rpb24gbmFtZT0iUV9wTV8yMTQ5IiBvcmRlcj0iMzY5IiBJRD0iMjE0OS4xMDAwMDQzMDAiIHRpdGxlPSI/RGlzdGFudCBNZXRhc3Rhc2lzIChwTSkgKE5vdGUgSSkiPgoJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxNDlfMSIgb3JkZXI9IjM3MCIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iRGlzdGFudCBNZXRhc3Rhc2lzIChwTSkiIC8+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzIxNDlfMiIgb3JkZXI9IjM3MSI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzIxNDlfMyIgb3JkZXI9IjM3MiI+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9OQV8yMDg5NSIgb3JkZXI9IjM3MyIgSUQ9IjIwODk1LjEwMDAwNDMwMCIgdGl0bGU9Ij9Ob3QgYXBwbGljYWJsZSAtIHBNIGNhbm5vdCBiZSBkZXRlcm1pbmVkIGZyb20gdGhlIHN1Ym1pdHRlZCBzcGVjaW1lbihzKSIgb21pdFdoZW5TZWxlY3RlZD0idHJ1ZSIgc2VsZWN0ZWQ9InRydWUiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIwODk1XzEiIG9yZGVyPSIzNzQiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9Ik5vdCBhcHBsaWNhYmxlIC0gcE0gY2Fubm90IGJlIGRldGVybWluZWQgZnJvbSB0aGUgc3VibWl0dGVkIHNwZWNpbWVuKHMpIiAvPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfcE0xXzIxNTEiIG9yZGVyPSIzNzUiIElEPSIyMTUxLjEwMDAwNDMwMCIgdGl0bGU9InBNMTogRGlzdGFudCBtZXRhc3Rhc2lzIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTUxXzEiIG9yZGVyPSIzNzYiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9InBNMSIgLz4KCQkJCQkJCQkJCTxDaGlsZEl0ZW1zIG5hbWU9ImNoXzIxNTFfMiIgb3JkZXI9IjM3NyI+CgkJCQkJCQkJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfcE1fTG9jXzIxNTIiIG9yZGVyPSIzNzgiIElEPSIyMTUyLjEwMDAwNDMwMCIgdGl0bGU9Ij9TcGVjaWZ5IFNpdGUocyksIGlmIGtub3duIiBtaW5DYXJkPSIwIj4KCQkJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzIxNTJfMSIgb3JkZXI9IjM3OSIgcHJvcE5hbWU9InJlcG9ydFRleHQiIHZhbD0iU2l0ZShzKSIgLz4KCQkJCQkJCQkJCQkJPFJlc3BvbnNlRmllbGQgbmFtZT0icmZfMjE1Ml8yIiBvcmRlcj0iMzgwIj4KCQkJCQkJCQkJCQkJCTxSZXNwb25zZSBuYW1lPSJyc3BfMjE1Ml8zIiBvcmRlcj0iMzgxIj4KCQkJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl8yMTUyXzQiIG9yZGVyPSIzODIiIG1heExlbmd0aD0iNDAwMCIgLz4KCQkJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQkJCTwvUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCQkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCTwvTGlzdD4KCQkJCQkJCTwvTGlzdEZpZWxkPgoJCQkJCQk8L1F1ZXN0aW9uPgoJCQkJCTwvQ2hpbGRJdGVtcz4KCQkJCTwvU2VjdGlvbj4KCQkJCTxTZWN0aW9uIG5hbWU9IlNfMTc4ODQiIG9yZGVyPSIzODMiIElEPSIxNzg4NC4xMDAwMDQzMDAiIHRpdGxlPSJBRERJVElPTkFMIEZJTkRJTkdTIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc4ODRfMSIgb3JkZXI9IjM4NCI+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzM5MTg4IiBvcmRlcj0iMzg1IiBJRD0iMzkxODguMTAwMDA0MzAwIiB0aXRsZT0iQWRkaXRpb25hbCBQYXRob2xvZ2ljIEZpbmRpbmdzIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJCQk8TGlzdEZpZWxkIG5hbWU9ImxmXzM5MTg4XzEiIG9yZGVyPSIzODYiIG1heFNlbGVjdGlvbnM9IjAiPgoJCQkJCQkJCTxMaXN0IG5hbWU9ImxzdF8zOTE4OF8yIiBvcmRlcj0iMzg3Ij4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX05vbmVfSWRfMjE2MyIgb3JkZXI9IjM4OCIgSUQ9IjIxNjMuMTAwMDA0MzAwIiB0aXRsZT0iTm9uZSBpZGVudGlmaWVkIiBzZWxlY3Rpb25EZXNlbGVjdHNTaWJsaW5ncz0idHJ1ZSIgLz4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJX0hlbW9ycmhhZ2VfMjA4OTciIG9yZGVyPSIzODkiIElEPSIyMDg5Ny4xMDAwMDQzMDAiIHRpdGxlPSJIZW1vcnJoYWdlIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfQ3lzdGljX0NoYW5nZV8yMDg5OCIgb3JkZXI9IjM5MCIgSUQ9IjIwODk4LjEwMDAwNDMwMCIgdGl0bGU9IkN5c3RpYyBjaGFuZ2UiIC8+CgkJCQkJCQkJCTxMaXN0SXRlbSBuYW1lPSJMSV9DYWxjaWZpY2F0aW9uc18yMDg1NCIgb3JkZXI9IjM5MSIgSUQ9IjIwODU0LjEwMDAwNDMwMCIgdGl0bGU9IkNhbGNpZmljYXRpb25zIiAvPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfT3RoXzIxNjciIG9yZGVyPSIzOTIiIElEPSIyMTY3LjEwMDAwNDMwMCIgdGl0bGU9Ik90aGVyIChzcGVjaWZ5KSI+CgkJCQkJCQkJCQk8UHJvcGVydHkgbmFtZT0icF9ycHRUeHRfMjE2N18xIiBvcmRlcj0iMzkzIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfMjE2N18yIiBvcmRlcj0iMzk0IiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzIxNjdfMyIgb3JkZXI9IjM5NSI+CgkJCQkJCQkJCQkJCTxzdHJpbmcgbmFtZT0ic3RyXzIxNjdfNCIgb3JkZXI9IjM5NiIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQk8L0xpc3Q+CgkJCQkJCQk8L0xpc3RGaWVsZD4KCQkJCQkJPC9RdWVzdGlvbj4KCQkJCQk8L0NoaWxkSXRlbXM+CgkJCQk8L1NlY3Rpb24+CgkJCQk8U2VjdGlvbiBuYW1lPSJTXzE3ODgwIiBvcmRlcj0iMzk3IiBJRD0iMTc4ODAuMTAwMDA0MzAwIiB0aXRsZT0iU1BFQ0lBTCBTVFVESUVTIiBtdXN0SW1wbGVtZW50PSJmYWxzZSIgbWluQ2FyZD0iMCI+CgkJCQkJPENoaWxkSXRlbXMgbmFtZT0iY2hfMTc4ODBfMSIgb3JkZXI9IjM5OCI+CgkJCQkJCTxRdWVzdGlvbiBuYW1lPSJRXzUzMjMxIiBvcmRlcj0iMzk5IiBJRD0iNTMyMzEuMTAwMDA0MzAwIiB0aXRsZT0iQW5jaWxsYXJ5IFN0dWRpZXMgKE5vdGUgTCkiIG11c3RJbXBsZW1lbnQ9ImZhbHNlIiBtaW5DYXJkPSIwIj4KCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81MzIzMV8xIiBvcmRlcj0iNDAwIiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJBbmNpbGxhcnkgU3R1ZGllcyIgLz4KCQkJCQkJCTxMaXN0RmllbGQgbmFtZT0ibGZfNTMyMzFfMiIgb3JkZXI9IjQwMSIgbWF4U2VsZWN0aW9ucz0iMCI+CgkJCQkJCQkJPExpc3QgbmFtZT0ibHN0XzUzMjMxXzMiIG9yZGVyPSI0MDIiPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNDEzNTIiIG9yZGVyPSI0MDMiIElEPSI0MTM1Mi4xMDAwMDQzMDAiIHRpdGxlPSJLaS02NyBtaXRvdGljIHJhdGUgKHNwZWNpZnkpIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF80MTM1Ml8xIiBvcmRlcj0iNDA0IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJLaS02NyBtaXRvdGljIHJhdGUiIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfNDEzNTJfMiIgb3JkZXI9IjQwNSIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF80MTM1Ml8zIiBvcmRlcj0iNDA2Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNDEzNTJfNCIgb3JkZXI9IjQwNyIgbWF4TGVuZ3RoPSI0MDAwIiAvPgoJCQkJCQkJCQkJCTwvUmVzcG9uc2U+CgkJCQkJCQkJCQk8L0xpc3RJdGVtUmVzcG9uc2VGaWVsZD4KCQkJCQkJCQkJPC9MaXN0SXRlbT4KCQkJCQkJCQkJPExpc3RJdGVtIG5hbWU9IkxJXzU0NDM2IiBvcmRlcj0iNDA4IiBJRD0iNTQ0MzYuMTAwMDA0MzAwIiB0aXRsZT0iUmV0aWN1bGluIHN0YWluIChzcGVjaWZ5IHR5cGUocykgYW5kIHJlc3VsdChzKSkiPgoJCQkJCQkJCQkJPFByb3BlcnR5IG5hbWU9InBfcnB0VHh0XzU0NDM2XzEiIG9yZGVyPSI0MDkiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IlJldGljdWxpbiBzdGFpbiIgLz4KCQkJCQkJCQkJCTxMaXN0SXRlbVJlc3BvbnNlRmllbGQgbmFtZT0ibGlyZl81NDQzNl8yIiBvcmRlcj0iNDEwIiByZXNwb25zZVJlcXVpcmVkPSJ0cnVlIj4KCQkJCQkJCQkJCQk8UmVzcG9uc2UgbmFtZT0icnNwXzU0NDM2XzMiIG9yZGVyPSI0MTEiPgoJCQkJCQkJCQkJCQk8c3RyaW5nIG5hbWU9InN0cl81NDQzNl80IiBvcmRlcj0iNDEyIiBtYXhMZW5ndGg9IjQwMDAiIC8+CgkJCQkJCQkJCQkJPC9SZXNwb25zZT4KCQkJCQkJCQkJCTwvTGlzdEl0ZW1SZXNwb25zZUZpZWxkPgoJCQkJCQkJCQk8L0xpc3RJdGVtPgoJCQkJCQkJCQk8TGlzdEl0ZW0gbmFtZT0iTElfNTIwMjMiIG9yZGVyPSI0MTMiIElEPSI1MjAyMy4xMDAwMDQzMDAiIHRpdGxlPSJPdGhlciAoc3BlY2lmeSB0eXBlIGFuZCByZXN1bHQpIj4KCQkJCQkJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF81MjAyM18xIiBvcmRlcj0iNDE0IiBwcm9wTmFtZT0icmVwb3J0VGV4dCIgdmFsPSJ7bm8gdGV4dH0iIC8+CgkJCQkJCQkJCQk8TGlzdEl0ZW1SZXNwb25zZUZpZWxkIG5hbWU9ImxpcmZfNTIwMjNfMiIgb3JkZXI9IjQxNSIgcmVzcG9uc2VSZXF1aXJlZD0idHJ1ZSI+CgkJCQkJCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF81MjAyM18zIiBvcmRlcj0iNDE2Ij4KCQkJCQkJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfNTIwMjNfNCIgb3JkZXI9IjQxNyIgbWF4TGVuZ3RoPSI4MCIgLz4KCQkJCQkJCQkJCQk8L1Jlc3BvbnNlPgoJCQkJCQkJCQkJPC9MaXN0SXRlbVJlc3BvbnNlRmllbGQ+CgkJCQkJCQkJCTwvTGlzdEl0ZW0+CgkJCQkJCQkJPC9MaXN0PgoJCQkJCQkJPC9MaXN0RmllbGQ+CgkJCQkJCTwvUXVlc3Rpb24+CgkJCQkJPC9DaGlsZEl0ZW1zPgoJCQkJPC9TZWN0aW9uPgoJCQkJPFF1ZXN0aW9uIG5hbWU9IlFfQ29tbWVudHNfMjE2OCIgb3JkZXI9IjQxOCIgSUQ9IjIxNjguMTAwMDA0MzAwIiB0aXRsZT0iP0NvbW1lbnQocykiIG1pbkNhcmQ9IjAiPgoJCQkJCTxQcm9wZXJ0eSBuYW1lPSJwX3JwdFR4dF8yMTY4XzEiIG9yZGVyPSI0MTkiIHByb3BOYW1lPSJyZXBvcnRUZXh0IiB2YWw9IkNvbW1lbnQocykiIC8+CgkJCQkJPFJlc3BvbnNlRmllbGQgbmFtZT0icmZfMjE2OF8yIiBvcmRlcj0iNDIwIj4KCQkJCQkJPFJlc3BvbnNlIG5hbWU9InJzcF8yMTY4XzMiIG9yZGVyPSI0MjEiPgoJCQkJCQkJPHN0cmluZyBuYW1lPSJzdHJfMjE2OF80IiBvcmRlcj0iNDIyIiBtYXhMZW5ndGg9IjQwMDAiIHZhbD0idGhpcyBpcyBhIHRlc3QgZm9yIHRoZSBJSEUgU0RDIFdHICIgLz4KCQkJCQkJPC9SZXNwb25zZT4KCQkJCQk8L1Jlc3BvbnNlRmllbGQ+CgkJCQk8L1F1ZXN0aW9uPgoJCQk8L0NoaWxkSXRlbXM+CgkJPC9Cb2R5PgoJCTxGb290ZXIgbmFtZT0iZm9vdGVyIiBvcmRlcj0iNDIzIiBJRD0iRm9vdGVyLkFkcmVuYWwuQnguUmVzLjEyOV8zLjAwMi4wMTEuUkMxX3NkY0ZERiI+CgkJCTxQcm9wZXJ0eSB0eXBlPSJtZXRhIiBzdHlsZUNsYXNzPSJjb3B5cmlnaHQiIG9yZGVyPSI0MjQiIHByb3BOYW1lPSJDb3B5cmlnaHRGb290ZXIiIHZhbD0iKGMpIDIwMTggQ29sbGVnZSBvZiBBbWVyaWNhbiBQYXRob2xvZ2lzdHMuICBBbGwgcmlnaHRzIHJlc2VydmVkLiAgTGljZW5zZSByZXF1aXJlZCBmb3IgdXNlLiIgLz4KCQk8L0Zvb3Rlcj4KCTwvRm9ybURlc2lnbj4KPC9TRENTdWJtaXNzaW9uUGFja2FnZT4="

---

// File: input/fsh/instances/encounter-uspath-specimen-collection.fsh

Instance: encounter-uspath-specimen-collection
InstanceOf: USCoreEncounterProfile
Title: "US Pathology Encounter Specimen Collection example"
Description: "Example encounter in which a pathology specimen collection takes place. References ServiceRequest."
Usage: #example
* identifier.system = "http://example.com/fhir/encounters"
* identifier.value = "123"
* status = #finished
* class = $v3-ActCode#IMP "inpatient encounter"
* type = $sct#726007 "Pathology consultation, comprehensive, records and specimen with report"
* subject = Reference(patient-JoelAlex)
* participant[0].individual = Reference(practitioner-oncologist)
* participant[+].individual = Reference(practitioner-pathologist)

---

// File: input/fsh/instances/expansion-parameters-fhir-cancer-ig.fsh

Instance: expansion-parameters-fhir-cancer-ig
InstanceOf: Parameters
Title: "expansion-parameters-fhir-cancer-ig"
Description: "Expansion parameters for the Cancer FHIR Path IG, which references US edition of SNOMED CT version in the parameters (http://snomed.info/sct/731000124108/731000124108)."
Usage: #definition
* parameter[0].name = "profile-url"
* parameter[=].valueString = "dc8fd4bc-091a-424a-8a3b-6198ef146891"
* parameter[+].name = "system-version"
* parameter[=].valueString = "http://snomed.info/sct|http://snomed.info/sct/731000124108"

---

// File: input/fsh/instances/observation-case-summary-adrenal-gland.fsh

Instance: observation-case-summary-adrenal-gland
InstanceOf: USPathologyGrouperObservation
Title: "Case Summary Adrenal Gland example"
Description: "This is an example observation of the Case Summary for an Adrenal Gland Report."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = $example#ADRENAL-GLAND "Adrenal Gland"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2024-07-05"
* performer = Reference(practitioner-oncologist)
//* valueString = "Adrenal Gland"

---

// File: input/fsh/instances/observation-clinical-history.fsh

Instance: observation-clinical-history
InstanceOf: ObservationSDCeCC
Title: "Clinical History Observation example"
Description: "This is an example of an observation of clinical history."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#49275.100004300"
* status = #final
* code = $example#49275.100004300 "Clinical History (specify)"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2024-07-05"
* performer = Reference(practitioner-oncologist)
* valueString = "Patient has a history"

---

// File: input/fsh/instances/observation-distant-metastasis.fsh

Instance: observation-distant-metastasis
InstanceOf: ObservationSDCeCC
Title: "Distant Metastasis Observation example"
Description: "This is an example observation of distant metastasis which cannot be determined from the submitted specimen(s)."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = $example#2149.100004300 "Distant Metastasis (pM) (Note I)"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#20895.100004300 "?Not applicable - pM cannot be determined from the submitted specimen(s)"

---

// File: input/fsh/instances/observation-functional-status.fsh

Instance: observation-functional-status
InstanceOf: ObservationSDCeCC
Title: "Functional Status (Notes A,B) (select all that apply) example"
Description: "This is an example of an observation of Functional Status."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#49275.100004300"
* status = #final
* code = $example#49275.100004300 "Functional Status"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2024-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#56812.100004300 "Cushing syndrome"

---

// File: input/fsh/instances/observation-grouper-additional-findings.fsh

Instance: observation-grouper-additional-findings
InstanceOf: USPathologyGrouperObservation
Title: "Additional Findings Section"
Description: "Grouper Observation that represents the Additional Findings Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#ADDTIONAL-FINDINGS "Additional Findings Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2024-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
//* hasMember.reference = "Observation/observation-regional-lymph-nodes-numbmer-examined"

---

// File: input/fsh/instances/observation-grouper-case-summary.fsh

Instance: observation-grouper-case-summary
InstanceOf: USPathologyGrouperObservation
Title: "Case Summary Section"
Description: "Grouper Observation that represents the Case Summary Section"
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#CASE-SUMMARY "Case Summary Section"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)

---

// File: input/fsh/instances/observation-grouper-clinical.fsh

Instance: observation-grouper-clinical
InstanceOf: USPathologyGrouperObservation
Title: "Clinical Section"
Description: "Grouper Observation that represents the Clinical Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#CLINICAL "Clinical Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2024-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
* hasMember.reference = "Observation/observation-patient-age-group"
* hasMember.reference = "Observation/observation-clinical-history"
* hasMember.reference = "Observation/observation-functional-status"

---

// File: input/fsh/instances/observation-grouper-comments.fsh

Instance: observation-grouper-comments
InstanceOf: USPathologyGrouperObservation
Title: "Comments Section"
Description: "Grouper Observation that represents the Comments Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#COMMENTS "Comments Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2024-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
//* hasMember.reference = "Observation/observation-regional-lymph-nodes-numbmer-examined"

---

// File: input/fsh/instances/observation-grouper-distant-metastasis.fsh

Instance: observation-grouper-distant-metastasis
InstanceOf: USPathologyGrouperObservation
Title: "Distant Metastasis Section"
Description: "Grouper Observation that represents the Distant Metastasis Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#DISTANT-METASTASIS "Distant Metastasis Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2024-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
* hasMember.reference = "Observation/observation-distant-metastasis"

---

// File: input/fsh/instances/observation-grouper-figo-stage.fsh

Instance: observation-grouper-figo-stage
InstanceOf: USPathologyGrouperObservation
Title: "Figo Stage Section"
Description: "Grouper Observation that represents the Figo Stage Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#FIGO-STAGE "Figo Stage Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2024-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
//* hasMember.reference = "Observation/observation-regional-lymph-nodes-numbmer-examined"

---

// File: input/fsh/instances/observation-grouper-margins.fsh

Instance: observation-grouper-margins
InstanceOf: USPathologyGrouperObservation
Title: "Margins Section"
Description: "Grouper Observation that represents the margins Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#MARGINS "Margin Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2024-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
* hasMember.reference = "Observation/observation-margins-uninvolvedbytumor"


---

// File: input/fsh/instances/observation-grouper-ptnm-classification.fsh

Instance: observation-grouper-ptnm-classification
InstanceOf: USPathologyGrouperObservation
Title: "pTNM Classification Section"
Description: "Grouper Observation that represents the pTNM Classification Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#PTNM-CLASSIFICATION "pTNM Classification Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2024-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
* hasMember.reference = "Observation/observation-TNM-descriptors"

---

// File: input/fsh/instances/observation-grouper-regional-lymph-nodes.fsh

Instance: observation-grouper-regional-lymph-nodes
InstanceOf: USPathologyGrouperObservation
Title: "Regional Lymph Nodes Section"
Description: "Grouper Observation that represents the Regional Lymph Nodes Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code =  USPathologyCodeSystem#REGIONAL-LYMPH-NODES "Regional Lymph Nodes Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2024-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
* hasMember.reference = "Observation/observation-regional-lymph-nodes-number-examined"
* hasMember.reference = "Observation/observation-regional-lymph-nodes-number-involved"


---

// File: input/fsh/instances/observation-grouper-special-studies.fsh

Instance: observation-grouper-special-studies
InstanceOf: USPathologyGrouperObservation
Title: "Special Studies Section"
Description: "Grouper Observation that represents the Special Studies Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#SPECIAL-STUDIES "Special Studies Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2024-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
//* hasMember.reference = "Observation/observation-regional-lymph-nodes-numbmer-examined"

---

// File: input/fsh/instances/observation-grouper-specimen.fsh

Instance: observation-grouper-specimen
InstanceOf: USPathologyGrouperObservation
Title: "Specimen Section"
Description: "Grouper Observation that represents the Specimen Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#SPECIMEN "Specimen Section"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
* hasMember.reference = "Observation/observation-procedure-adrenalectomy"
* hasMember.reference = "Observation/observation-specimen-laterality"

---

// File: input/fsh/instances/observation-grouper-tumor.fsh

Instance: observation-grouper-tumor
InstanceOf: USPathologyGrouperObservation
Title: "Tumor Section"
Description: "Grouper Observation that represents the Tumor Section and contains Observation.hasMember Observations that represent the sub-questions of the section."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2149.100004300"
* status = #final
* code = USPathologyCodeSystem#TUMOR "Tumor Section"
* subject.reference = "Patient/patient-JoelAlex"
* effectiveDateTime = "2022-07-05"
* performer.reference = "Practitioner/practitioner-oncologist"
* hasMember[+] = Reference(Observation/observation-tumor-site)
* hasMember[+] = Reference(Observation/observation-histologic-type)
* hasMember[+] = Reference(Observation/observation-histologic-grade)
* hasMember[+] = Reference(Observation/observation-tumor-size)
* hasMember[+] = Reference(Observation/observation-primary-tumor)
* hasMember[+] = Reference(Observation/observation-tumor-invasion)
* hasMember[+] = Reference(Observation/observation-tumor-extension)
* hasMember[+] = Reference(Observation/observation-tumor-weight)

---

// File: input/fsh/instances/observation-histologic-grade.fsh

Instance: observation-histologic-grade
InstanceOf: ObservationSDCeCC
Title: "Hisotologic Grade Observation example"
Description: "This is an example of an observation of histologic grade."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#49275.100004300"
* status = #final
* code = $example#49275.100004300 "Histologic Grade (Notes C through E)"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#48634.100004300 "High grade (> 20 mitoses / 50 high-power fields)"

---

// File: input/fsh/instances/observation-histologic-type.fsh

Instance: observation-histologic-type
InstanceOf: ObservationSDCeCC
Title: "Histologic Type Observation example"
Description: "This is an example of an observation of histologic type."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#59852.100004300"
* status = #final
* code = $example#59852.100004300 "Histologic Type (Notes C through E)"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#2117.100004300 "Adrenal cortical carcinoma"

---

// File: input/fsh/instances/observation-margins-uninvolvedbytumor.fsh

Instance: observation-margins-uninvolvedbytumor
InstanceOf: ObservationSDCeCC
Title: "Uninvolved by Tumor Margin Observation example"
Description: "This is an example of a margin uninvolved by tumor observation."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.51265.100004300"
* status = #final
* code = $example#51265.100004300 "Margin"
* subject = Reference(Patient/patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(Practitioner/practitioner-oncologist)

* component[0].code = $example#39537.100004300 "Margin Status"
* component[0].valueCodeableConcept = $example#123456 "Uninvolved by tumor"


---

// File: input/fsh/instances/observation-primary-tumor.fsh

Instance: observation-primary-tumor
InstanceOf: ObservationSDCeCC
Title: "Primary Tumor Observation example"
Description: "This is an example of a primary tumor observation."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2137.100004300"
* status = #final
* code = $example#2137.100004300 "Primary Tumor (pT)"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#2142.100004300 "pTX: Primary tumor cannot be assessed"

---

// File: input/fsh/instances/observation-procedure-adrenalectomy.fsh

Instance: observation-procedure-adrenalectomy
InstanceOf: ObservationSDCeCC
Title: "Adrenalectomy Procedure Observation example"
Description: "This is an example of an adrenalectomy procedure observation."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#42554.100004300"
* status = #final
* code = $example#42554.100004300 "Procedure"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#2122.100004300 "Adrenalectomy, total"

---

// File: input/fsh/instances/observation-regional-lymph-nodes-number-examined.fsh

Instance: observation-regional-lymph-nodes-number-examined
InstanceOf: ObservationSDCeCC
Title: "Number of Lymph Nodes Examined example"
Description: "This is an example of a number of lymph nodes examined, regional lymph nodes observation."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.51265.100004300"
* status = #final
* code = $example#51265.100004300 "Regional Lymph Nodes"
* subject = Reference(Patient/patient-JoelAlex)
* effectiveDateTime = "2024-07-05"
* performer = Reference(Practitioner/practitioner-oncologist)

* component[0].code = $example#16701.100004300 "NUMBER OF LYMPH NODES EXAMINED"
* component[0].valueInteger = 10

---

// File: input/fsh/instances/observation-regional-lymph-nodes-number-involved.fsh

Instance: observation-regional-lymph-nodes-number-involved
InstanceOf: ObservationSDCeCC
Title: "Number of Lymph Nodes Involved example"
Description: "This is an example of a number of lymph nodes involved, regional lymph nodes observation."
Usage: #example

* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.51265.100004300"
* status = #final
* code = $example#51265.100004300 "Regional Lymph Nodes"
* subject = Reference(Patient/patient-JoelAlex)
* effectiveDateTime = "2024-07-05"
* performer = Reference(Practitioner/practitioner-oncologist)

* component[0].code = $example#16699.100004300 "NUMBER OF LYMPH NODES INVOLVED"
* component[0].valueInteger = 3

---

// File: input/fsh/instances/observation-regional-lymph-nodes.fsh

Instance: observation-regional-lymph-nodes
InstanceOf: ObservationSDCeCC
Title: "Regional Lymph Nodes Observation example"
Description: "This is an example of an observation of regional lymph nodes."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.1867.100004300"
* status = #final
* code = $example#1867.100004300 "Regional Lymph Nodes"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* component.code = $example#1868.100004300 "No lymph nodes submitted or found"

---

// File: input/fsh/instances/observation-specimen-laterality.fsh

Instance: observation-specimen-laterality
InstanceOf: ObservationSDCeCC
Title: "Specimen Laterality Observation example"
Description: "This is an example of an observation of tumor specimen laterality."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#observation-procedure-adrenalectomy0"
* status = #final
* code = $example#52756.100004300 "Specimen Laterality"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#56812.100004300 "Bilateral"

---

// File: input/fsh/instances/observation-TNM-descriptors.fsh

Instance: observation-TNM-descriptors
InstanceOf: ObservationSDCeCC
Title: "TNM Descriptors Observation example"
Description: "This is an example of a TNM descriptors observation."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.20880.100004300"
* status = #final
* code = $example#20880.100004300 "TNM Descriptors"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* component.code = $example#20890.100004300 "m (multiple primary tumors)"

---

// File: input/fsh/instances/observation-tumor-extension.fsh

Instance: observation-tumor-extension
InstanceOf: ObservationSDCeCC
Title: "Tumor Extension Observation example"
Description: "This is an example of a tumor extension observation."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.51265.100004300"
* status = #final
* code = $example#51265.100004300 "Tumor Extension"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* component[0].code = $example#39537.100004300 "Tumor invades into or through the adrenal capsule"
* component[+].code = $example#56271.100004300 "Tumor invades into other adjacent organ(s)"

---

// File: input/fsh/instances/observation-tumor-invasion.fsh

Instance: observation-tumor-invasion
InstanceOf: ObservationSDCeCC
Title: "Tumor Invasion Observation example"
Description: "This is an example of a tumor invasion observation."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1.53526.100004300"
* status = #final
* code = $example#53526.100004300
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* component.code = $example#58229.100004300 "Diaphragm"

---

// File: input/fsh/instances/observation-tumor-site.fsh

Instance: observation-tumor-site
InstanceOf: ObservationSDCeCC
Title: "Tumor Site Observation example"
Description: "This is an example of an observation of the location of a tumor."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2118.100004300"
* status = #final
* code = $example#2118.100004300 "Tumor Site"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = http://snomed.info/sct#110506008 "Upper outer quadrant of breast"

---

// File: input/fsh/instances/observation-tumor-size.fsh

Instance: observation-tumor-size
InstanceOf: ObservationSDCeCC
Title: "Tumor Size Observation example"
Description: "This is an example of a tumor size observation."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2129.100004300"
* status = #final
* code = $example#2129.100004300 "Tumor Size (Note A)"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#2131.100004300 "Greatest dimension in Centimeters (cm)"

---

// File: input/fsh/instances/observation-tumor-weight.fsh

Instance: observation-tumor-weight
InstanceOf: ObservationSDCeCC
Title: "Tumor Weight Observation example"
Description: "This is an example of tumor weight observation."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#40496.100004300"
* status = #final
* code = $example#40496.100004300 "Tumor Weight (Note B)"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2022-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#44761.100004300 "Specify weight (g)"

---

// File: input/fsh/instances/organization-principal-pathology-lab.fsh

Instance: organization-principal-pathology-lab
InstanceOf: USCoreOrganizationProfile
Title: "Principal Pathology Lab example"
Description: "Example of a US Core Organization representing the principal pathology testing Lab organization."
Usage: #example
* active = true
* name = "Some Pathology Lab Name"
* address.line = "Any"
* address.city = "City"
* address.state = "CA"
* address.postalCode = "95540"
* address.country = "USA"

---

// File: input/fsh/instances/organization-Redwood-Womens-Center-PC.fsh

Instance: organization-Redwood-Womens-Center-PC
InstanceOf: USCoreOrganizationProfile
Title: "Redwood Women's Center, P.C. example"
Description: "Example of US Core Organization representing the clinical system which ordered the pathology testing and will receive the completed tests/observations."
Usage: #example
* active = true
* name = "Redwood Women's Center, P.C."
* address.line = "3307 Renner Drive"
* address.city = "Fortuna"
* address.state = "CA"
* address.postalCode = "95540"
* address.country = "USA"

---

// File: input/fsh/instances/patient-JoelAlex.fsh

Instance: patient-JoelAlex
InstanceOf: Patient
Title: "Patient example"
Description: "US Core Patient example"
Usage: #example
* identifier.system = "urn:system"
* identifier.value = "patient-JoelAlex"
* name.family = "Joel"
* name.given = "Alex"
* gender = #male
* link.other = Reference(relatedperson-pathology-next-of-kin)
* link.type = #seealso

---

// File: input/fsh/instances/practitioner-oncologist.fsh

Instance: practitioner-oncologist
InstanceOf: USCorePractitionerProfile
Title: "Oncologist Practitioner example"
Description: "US Core Practitioner Oncologist example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "123456789"
* name.family = "Owl"
* name.given = "Wise"

---

// File: input/fsh/instances/practitioner-pathologist.fsh

Instance: practitioner-pathologist
InstanceOf: USCorePractitionerProfile
Title: "Pathologist Practitioner example"
Description: "US Core Practitioner Pathologist example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "10987654321"
* name.family = "Alot"
* name.given = "Stains"

---

// File: input/fsh/instances/practitioner-surgeon.fsh

Instance: practitioner-surgeon
InstanceOf: USCorePractitionerProfile
Title: "Surgeon Practitioner example"
Description: "US Core Practitioner surgeon example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "789101112"
* name.family = "Alot"
* name.given = "Cuts"

---

// File: input/fsh/instances/practitionerrole-uspath-oncologist.fsh

Instance: practitionerrole-uspath-practitioner-oncologist
InstanceOf: USPathologyRelatedPractitionerRole
Title: "Oncologist PractitionerRole example"
Description: "US Core PractitionerRole example for an Oncologist"
Usage: #example
* practitioner.reference = "Practitioner/practitioner-oncologist"
* organization.reference = "Organization/organization-Redwood-Womens-Center-PC"
* code = $v2-0443#OP "Ordering Provider"
* telecom.system = #phone
* telecom.value = "720-242-5555"

---

// File: input/fsh/instances/practitionerrole-uspath-pathologist.fsh

Instance: practitionerrole-uspath-pathologist
InstanceOf: USPathologyRelatedPractitionerRole
Title: "US Pathologist PractitionerRole example"
Description: "US Core PractitionerRole example for a pathologist"
Usage: #example
* practitioner.reference = "Practitioner/practitioner-pathologist"
* organization.reference = "Organization/organization-principal-pathology-lab"
* code = $v2-0443#PI "Primary Interpreter"
* telecom.system = #phone
* telecom.value = "720-242-9999"

---

// File: input/fsh/instances/practitionerrole-uspath-surgeon.fsh

Instance: practitionerrole-uspath-surgeon
InstanceOf: USPathologyRelatedPractitionerRole
Title: "Surgeon PractitionerRole example"
Description: "US Core PractitionerRole example for a Surgeon"
Usage: #example
* practitioner.reference = "Practitioner/practitioner-surgeon"
* organization.reference = "Organization/organization-Redwood-Womens-Center-PC"
* code = $v2-0443#OP "Ordering Provider"
* telecom.system = #phone
* telecom.value = "720-242-5555"

---

// File: input/fsh/instances/procedure-path-specimen.fsh

Instance: procedure-path-specimen
InstanceOf: USCoreProcedureProfile
Title: "Pathology specimen collection procedure example"
Description: "This is an example of a surgical procedure to perform a resection of the left adrenal gland to collect a pathology specimen."
Usage: #example
* basedOn = Reference(ServiceRequest/servicerequest-cancer-path) "Service Request - Cancer Pathology Specimen Collection"
* status = #completed
* code = $sct#39228008 "Surgical pathology procedure (procedure)"
* subject = Reference(patient-JoelAlex) "Alex Joel"
* performedDateTime = "2021-11-01T17:00:14-05:00"

---

// File: input/fsh/instances/relatedperson-pathology-next-of-kin.fsh

Instance: relatedperson-pathology-next-of-kin
InstanceOf: USCoreRelatedPersonProfile
Title: "Next-of-Kin RelatedPerson example"
Description: "This example shows Next of Kin information in a RelatedPerson resource."
Usage: #example
* active = true
* patient = Reference(patient-JoelAlex)
* relationship = $v2-0131#N "Next-of-Kin"
* name.family = "Me"
* name.given = "Minni"
* telecom.system = #phone
* telecom.value = "1-989-654-7896"

---

// File: input/fsh/instances/servicerequest-cancer-path.fsh

Instance: servicerequest-cancer-path
InstanceOf: USPathologyServiceRequest
Title: "Service Request - Cancer Pathology example"
Description: "This is an example of a pathology specimen collection ServiceRequest that references a related Encounter."
Usage: #example
* status = #active
* intent = #order
* category = $sct#386053000 "Evaluation procedure (procedure)"
* code = $sct#50322008 "Surgical pathology specimen, clerical procedure including coding of diagnoses"
* subject.reference = "Patient/patient-JoelAlex"
* encounter.reference = "Encounter/encounter-uspath-specimen-collection"
* occurrenceDateTime = "2021-11-01T17:00:14-05:00"
* requester.reference = "Practitioner/practitioner-surgeon"
* specimen.reference = "Specimen/specimen-adrenal"

---

// File: input/fsh/instances/specimen-adrenal.fsh

Instance: specimen-adrenal
InstanceOf: USPathologySpecimen
Title: "Adrenal Specimen example"
Description: "Example of an Adrenal specimen"
Usage: #example
* identifier.system = "http://some-lis.org/fhir/specimen-identifier-provisioner"
* identifier.value = "123456789"
* accessionIdentifier.system = "http://some-lis.org/fhir/specimen-identifier-provisioner"
* accessionIdentifier.value = "123456789X"
* type = $v2-0487#BX
* request.reference = "ServiceRequest/servicerequest-cancer-path"
* collection.collectedDateTime = "2022-01-02"
* collection.method = $sct#129314006 "Biopsy - action"
* container.identifier.system = "http://some-lis.org/fhir/specimen-containerID-provisioner"
* container.identifier.value = "987654321"

---

// File: input/fsh/invariants/path-reporting-1.fsh

Invariant: path-reporting-1
Description: "effectiveDateTime SHALL include the month and day"
* severity = #error
* expression = "$this is DateTime implies $this.toString().length() >= 10"
* xpath = "f:matches(effectiveDateTime,/\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z)/)"

---

// File: input/fsh/observation-patient-age-group.fsh

Instance: observation-patient-age-group
InstanceOf: ObservationSDCeCC
Title: "Patient Age Group Observation example"
Description: "This is an example of a patient age group observation."
Usage: #example
* identifier.system = "https://example.org"
* identifier.value = "Adrenal.Bx.Res.129_3.002.011.RC1_sdcFDF3d1c4fe4-09c3-4a7e-877f-9ddb160da6db/ver1#2137.100004300"
* status = #final
* code = $example#2137.100004300 "Patient Age Group"
* subject = Reference(patient-JoelAlex)
* effectiveDateTime = "2024-07-05"
* performer = Reference(practitioner-oncologist)
* valueCodeableConcept = $example#2142.100004300 "Adult (older than 18 years)"

---

// File: input/fsh/profiles/ObservationSDCeCC.fsh

Profile: ObservationSDCeCC
Parent: Observation
Id: ihe-sdc-ecc-Observation
Title: "IHE SDC/eCP on FHIR Observation"
Description: "This Observation Profile describes how to capture Question/Answer Pairs from IHE SDC. If the question is Multiselect multiple Observations with the same Question Code should be created. A section should also be represented as a grouping Observation. If the question has a follow up text or number entry field e.g. Other (Specify) the information from the textbox should be stored in the Observation.component.value, and the Observation.component.code should repeat the Observation.value as the sub-question."
* ^extension[$WG].valueCode = #oo
* ^status = #active
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

// File: input/fsh/profiles/USPathologyComposition.fsh

Profile: USPathologyComposition
Parent: Composition
Id: us-pathology-composition
Title: "US Pathology Composition Laboratory Report"
Description: "This Composition profile represents a Laboratory Report for the Clinical Pathology Data Sharing Implementation Guide."
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension[=].valueInteger = 2
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #trial-use
* ^extension[$WG].valueCode = #oo
* ^status = #active
* ^publisher = "HL7 International / Orders and Observations"
* ^contact.name = "HL7 International / Orders and Observations"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/orders"
* . ^short = "US Laboratory Report composition"
* . ^definition = "US Laboratory Report composition. A composition is a set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. \r\nWhile a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained."
* text ^short = "Narrative text"
* identifier ^short = "Report identifier"
* status ^short = "Status of the Report"
* subject 1..1
* subject only Reference(USCorePatientProfile)
* encounter ^short = "The healthcare event which this Laboratory Report is about (when test ordered)."
* encounter only Reference(USCoreEncounterProfile)
* author ^short = "Who and/or what authored the Laboratory Report"
* author only Reference(USPathologyRelatedPractitionerRole)

// SG: Could we use the title to hold the "CASE SUMMARY?"
* title ^short = "Laboratory Report"
// SG: Would the attester be the USPathologyRelatedPractitionerRole?
* attester ^short = "Attests the report accuracy"

* section 1..* // Defines the sections in the composition
  * ^slicing.discriminator[0].type = #value
  * ^slicing.discriminator[0].path = "code"
  * ^slicing.rules = #open
  * ^slicing.ordered = true

// Define lab-report section
* section contains lab-report 1..*
* section[lab-report]
  * title = "Lab Report Section"
  * code = http://loinc.org#26436-6 "Laboratory Studies (set)"
  * entry 1..*
// Should we update to IHE SDC DiagnosticReport (or base the USPathologyDiagnosticReport on the IHE one?? Maybe not because we are US Realm so better to use US core
  * entry only Reference(USPathologyDiagnosticReport)
  * entry ^short = "The Sections in the report."

---

// File: input/fsh/profiles/USPathologyDiagnosticReport.fsh

Profile: USPathologyDiagnosticReport
Parent: USCoreDiagnosticReportProfileNoteExchange
Id: us-pathology-diagnostic-report
Title: "US Pathology Diagnostic Report"
Description: "This DiagnosticReport Profile captures data for a report parsed from an eCP Form."
* ^extension[$WG].valueCode = #oo
* ^status = #active
* basedOn only Reference(USPathologyServiceRequest)
* effective[x] MS
* effective[x] obeys path-reporting-1
* performer only Reference(USCorePractitionerProfile or USCoreOrganizationProfile or USPathologyRelatedPractitionerRole or USCoreCareTeam)
* performer MS
* resultsInterpreter MS
* specimen only Reference(USPathologySpecimen)
* specimen MS
* result MS
* result only Reference(USPathologyGrouperObservation)

---

// File: input/fsh/profiles/USPathologyExchangeBundle.fsh

Profile: USPathologyExchangeBundle
Parent: Bundle
Id: us-pathology-exchange-bundle
Title: "US Pathology Bundle"
Description: "This collection Bundle profile defines the structure for reporting to central cancer registry from a pathology environment and/or from an EHR enviroment. This profile is intended to be used for exchange of eCP data between LIS and EHR systems."
* ^extension[$WG].valueCode = #oo
* ^status = #active
* type = #collection (exactly)
* type MS
* timestamp MS
* entry MS
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "$this.resource"
* entry ^slicing.ordered = false
* entry ^slicing.rules = #open
* entry contains
    composition 1..1 MS 
    //and
    // diagnosticreport 1..1 MS and
    // specimen 1..* MS and
    // service-request 0..* MS
* entry[composition].resource 1.. MS
* entry[composition].resource only USPathologyComposition
// * entry[service-request].resource 1.. MS
// * entry[service-request].resource only USPathologyServiceRequest
// * entry[specimen].resource 1..
// * entry[specimen].resource only USPathologySpecimen
// * entry[diagnosticreport].resource 1..
// * entry[diagnosticreport].resource only USPathologyDiagnosticReport

---

// File: input/fsh/profiles/USPathologyGrouperObservation.fsh

Profile: USPathologyGrouperObservation
Parent: ObservationSDCeCC
Id: us-pathology-grouper-observation
Title: "US Pathology Grouper Observation"
Description: "This Observation Profile describes how to represent a Section from IHE SDC as a 'grouper' Observation. It is a parent Observation and the Observation.value[x] element should be left blank. The Observation.code element should represent the Section's @ID and @title."
* ^extension[$WG].valueCode = #oo
* ^status = #active
* identifier 1..* MS 
* identifier ^short = "The SDC instanceGUID"
* identifier ^definition = "The identifier should match the SDC answer instanceGUID. If an answer instanceGUID is not available a Question instanceGUID shall be used"
* code ^short = "SDC section ID"
* code ^definition = "The code should match the section ID from the SDC form."
* code from USPathologySectionCodes (extensible)
* subject only Reference(USCorePatientProfile)
* hasMember ^short = "Sub-questions of the Section"
* hasMember ^definition = "hasMember should be used to capture all sub-questions of the Section"
* hasMember only Reference(ObservationSDCeCC)
// Maybe if there is only a text value (i.e. Case Summary Section - this should be allowed)
* value[x] 0..0
* value[x] ^short = "In a grouper Observation this value is blank"

---

// File: input/fsh/profiles/USPathologyRelatedPractitionerRole.fsh

Profile: USPathologyRelatedPractitionerRole
Parent: USCorePractitionerRoleProfile
Id: us-pathology-related-practitioner-role
Title: "US Pathology Related Practitioner Role"
Description: "This profile is built upon US Core PractitionerRole and defines pathology-related role codes for the following pathology-related practitioner roles included in NAACCR:
Attending Doctor: PV1-7
Referring Doctor: PV1-8
Consulting Doctor: PV1-9
Admitting Doctor: PV1-17
Collecting Doctor: OBR-10
Ordering Doctor: OBR-16
Principal Results Interpretter: OBR-32
Pathology Responsible Observer: OBX-16"
* ^extension[$WG].valueCode = #oo
* ^status = #active
* code 0..* MS
* code from USPathologyProviderTypes (required)

---

// File: input/fsh/profiles/USPathologyServiceRequest.fsh

Profile: USPathologyServiceRequest
Parent: USCoreServiceRequestProfile
Id: us-pathology-service-request
Title: "US Pathology Service Request"
Description: "This ServiceRequest profile represents the request for analysis of a pathological sample."
* ^extension[$WG].valueCode = #oo
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Orders and Observations Work Group"
* . MS
* . ^short = "Cancer Pathology ServiceRequest"
* . ^definition = "Ordered tests for the patient during the encounter."
* . ^base.path = "ServiceRequest"
* . ^base.min = 0
* . ^base.max = "*"
* . ^isModifier = false
* identifier MS
* identifier ^isModifier = false
* basedOn MS
* basedOn ^isModifier = false
* code 1..1 MS
* code from USCoreProcedureCodes (extensible)
* code ^isModifier = false
* code ^binding.description = "US Core Procedure Codes"
* code.coding 1..
* subject only Reference(USCorePatientProfile)
* encounter only Reference(USCoreEncounterProfile)
* encounter MS
* occurrence[x] MS
* authoredOn MS
* authoredOn ^isModifier = false
* requester MS
* requester ^isModifier = false
* specimen only Reference(USPathologySpecimen)

---

// File: input/fsh/profiles/USPathologySpecimen.fsh

Profile: USPathologySpecimen
Parent: USCoreSpecimenProfile
Id: us-pathology-specimen
Title: "US Pathology Specimen"
Description: "This Specimen profile defines a pathology specimen that is the focus of an eCP report."
* ^extension[$WG].valueCode = #oo
* ^status = #active
* identifier 1.. 
* accessionIdentifier 1..
* status MS
* receivedTime MS
* parent MS
* collection MS
* collection.collector only Reference(USPathologyRelatedPractitionerRole)
* collection.collector MS
* collection.collected[x] 1..1 MS
* collection.collected[x] only dateTime
* collection.method 1..1 MS
* collection.bodySite MS
* container 1.. MS
* container.identifier 1..
* container.identifier ^mustSupport = false
* note MS

---

// File: input/fsh/valuesets/USPathologyProviderTypes.fsh

ValueSet: USPathologyProviderTypes
Id: us-pathology-provider-types
Title: "US Pathology Provider Types"
Description: "This ValueSet is composed of HL7 ParticipationType codes (found in PV1) and concepts from Pathology Provider Types CodeSystem (found in OBR)."
* ^extension[$WG].valueCode = #oo
* ^status = #draft
* ^experimental = false
* $v3-ParticipationType#ADM "admitter"
* $v3-ParticipationType#ATND "attender"
* $v3-ParticipationType#CON "consultant"
* $v3-ParticipationType#REF "referrer"
* $v2-0443#CLP "Collecting Provider"
* $v2-0443#OP "Ordering Provider"
* $v2-0443#PI "Primary Interpreter"
* $v2-0443#RO "Responsible Observer"

---

// File: input/fsh/valuesets/USPathologySectionCodes.fsh

ValueSet: USPathologySectionCodes
Id: us-pathology-section-codes
Title: "US Pathology Section Codes"
Description: "This ValueSet is composed of Section codes."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #oo
* ^status = #draft
* ^experimental = false
* USPathologyCodeSystem#CASE-SUMMARY "Case Summary Section"
* USPathologyCodeSystem#TESTS-PERFORMED "Tests Performed Section"
* USPathologyCodeSystem#METHODS "Methods Section"
* USPathologyCodeSystem#CLINICAL "Clinical Section"
* USPathologyCodeSystem#SPECIMEN "Specimen Section"
* USPathologyCodeSystem#TUMOR "Tumor Section"
* USPathologyCodeSystem#MARGINS "Margins Section"
* USPathologyCodeSystem#REGIONAL-LYMPH-NODES "Regional Lymph Nodes Section"
* USPathologyCodeSystem#DISTANT-METASTASIS "Distant Metastasis Section"
* USPathologyCodeSystem#FIGO-STAGE "Figo Stage Section"
* USPathologyCodeSystem#PTNM-CLASSIFICATION "pTNM Classification Section"
* USPathologyCodeSystem#ADDTIONAL-FINDINGS "Additional Findings Section"
* USPathologyCodeSystem#SPECIAL-STUDIES "Special Studies Section"
* USPathologyCodeSystem#COMMENTS "Comments Section"

---

