File: repos/HL7_SLASH_fhir-pacio-rt/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration/                    │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.pacio-rt
canonical: http://hl7.org/fhir/us/pacio-rt
name: PACIORe-AssessmentTimepoints
title: PACIO Re-Assessment Timepoints Implementation Guide
description: PACIO Re-Assessment Timepoints Implementation Guide
status: active
version: 1.0.0
publisher:
  name: HL7 Community-Based Care and Privacy Working Group
  url: https://www.hl7.org/Special/committees/homehealth
  email: patients@lists.HL7.org
contact:
  - name: PACIO project
    telecom:
      - system: url
        value: https://pacioproject.org/
      - system: email
        value: info@pacioproject.org
license: CC0-1.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.us.core: 3.1.1   # NOTE: potential issues may arise when using the 3.2.0/4.0.0 version of Encounter
parameters:
  path-expansion-params: '../../input/_resources/terminology-settings.json'  # for using US ed of SNOMED
  show-inherited-invariants: false
  apply-jurisdiction: true
  apply-publisher: true
copyrightYear: 2021+
#releaseLabel: ci-build
releaseLabel: STU 1
jurisdiction: urn:iso:std:iso:3166#US

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Table of Contents: toc.html
  Guidance:
    Formal Specification: formal_specification.html
    Use Cases: use_cases.html
    Security and Privacy: security_and_privacy.html
    Underlying Technologies: underlying_technologies.html
  FHIR Artifacts:
    Capability Statement: CapabilityStatement-rt-cs.html
    Search Parameters: artifacts.html#2
    Profiles: artifacts.html#3
    Extensions: artifacts.html#4
    Value Sets: artifacts.html#5
    Code Systems: artifacts.html#6
    Examples: artifacts.html#7
  Downloads: downloads.html

# ╭───────────────────────────────────────package-list.json────────────────────────────────────────╮
# │  To control the package-list.json using this config, uncomment and set the "history" property. │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

#resources:
#  Coverage/CoverageEx1:
#    name: Coverage Example 1
#    description: Coverage Example 1
#    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage




---

// File: input/pagecontent/downloads.md

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://hl7.org/fhir ../../input-cache/schemas-r5/fhir-single.xsd">

<ul>
<li>Full FHIR IG Specification <a href="full-ig.zip">(zip)</a></li>
<li>FHIR IG Resource Definitions <a href="definitions.json.zip">(JSON)</a><a href="definitions.xml.zip">(XML)</a><a href="definitions.ttl.zip">(TTL)</a></li>
<li>FHIR IG Profile Examples <a href="examples.json.zip">(JSON)</a><a href="examples.xml.zip">(XML)</a><a href="examples.ttl.zip">(TTL)</a></li>
<li>FHIR IG <a href="package.tgz">Validator Pack</a></li>
<li>FHIR IG Package <a href="package.tgz">(tgz)</a></li>
</ul>

</div>

---

// File: input/pagecontent/formal_specification.md


This section defines additional requirements and guidance relevant to this IG as a whole. The FHIR Conformance Rules define the conformance verbs - **SHALL**, **SHOULD**, **MAY** - used in this IG.

### Claiming Conformance to a Re-Assessment Timepoints Profile
To claim conformance to a Profile in this IG, servers **SHALL**:

- Be able to populate all Profile data elements that have a minimum cardinality >= 1 and/or flagged as Must Support as defined by that profile’s StructureDefinition.
- Conform to the [Re-Assessment Timepoints Capability Statement](CapabilityStatement-rt-cs.html) expectations for that Profile’s type.

### Must Support
The following rules apply to all Re-Assessment Timepoints Profile elements marked as Must Support. Must Support on any profile data element **SHALL** be interpreted as follows:

#### Data Source System Requirements

- Data Sources Systems **SHALL** be capable of populating all data elements as part of the query results as specified by the [Re-Assessment Timepoints Capability Statement](CapabilityStatement-rt-cs.html).

#### Data Consumer System Requirements

- Data Consumer Systems **SHALL** be capable of displaying the data elements for human use.
- Data Consumer Systems **SHOULD** be capable of storing the data elements for other uses (such as record keeping of data used for clinical use).
- Data Consumer Systems **SHALL** be capable of processing resource instances containing the data element without generating an error or causing the application to fail.
- Data Consumer Systems **SHALL** interpret missing data elements within resources instances as not being present on the Data Sources system’s or as being withheld for privacy or business reasons.

Profiles used by this IG, but defined in other IGs, inherit the definition of Must Support from their respective guides.


---

// File: input/pagecontent/index.md

The Re-Assessment Timepoints implementation guide (IG) describes a means to break up extended Post-Acute admissions into consumable blocks that can reflect the evolution of care over time of the encounter or episode of care.

### Introduction 
<p>
On average, Post-Acute Admissions extend over much longer periods of time than the encounters in the Acute and Ambulatory Care Settings, often going for several months or even years. Over the course of these time periods, the patient condition and therefore the care provided is changing constantly. For example, in Home Health the goal is rehabilitation; Care Plans, Medications, and Orders all likely are changing throughout an admission that could last several months. Already in existence within post-acute care settings are periods of time structured by a variety of stakeholders, some more rigid than others, such as regulations and conditions of participation, payer and revenue cycle requirements, and provider specific processes and protocols.
</p>
<p>
In settings like home health and skilled nursing facilities (SNFs), there are Medicare assessment instruments that providers must complete at specified intervals that vary by care setting; the results of these assessments drive the Care Plan until a subsequent assessment. If a patient has a pain management Care Plan, and their pain levels improve, then they may have their Opioid drug dosages reduced or eliminated. If the patient's ambulation is improving, then the care team may focus interventions on more complex exercises. These periods of time, defined by many different drivers, have direct impact on how data is made available outside of an EMR. Without a structure in place to hold this information, a connecting application or patient would have to sift through months of information rather than focusing on a given period or periods most relevant to the needs of the application, patient, or other entity.
</p>

### Background and Use Case
<p>
Out of hospital care spans longer periods of time than in Acute and Ambulatory settings of care. Where a patient may have a 1 hour annual check up with their Primary Care Provider (PCP), a Home Health nurse may see that same patient several times and for several hours at a time each week for months. Within these extended periods of time that make up a Post-Acute admission, there are sub units of time already defined and driven by regulation, payer requirements,  and internal processes that organize updates and changes to care being provided. Re-assessment timepoints act as an additional layer of organization within an encounter to help clinicians navigate the volume of data in a long-term encounter to more easily parse the specific information they may be seeking.
</p>

<br clear="all" />
<figure style="text-align:center"><img src="./concept.png" alt="Re-Assessment Timepoint Concept" width="70%" /></figure>
<br clear="all" />

<p>
For example, at the start of a Home Health admission, the patient may be transitioning from an acute event and have care plans and other clinical considerations to meet their needs at that time; whereas at the end of the admission (several weeks later) the patient may have rehabilitated and the care plan, medications, diagnosis, and other key clinical data points may have changed significantly. Currently, there is no FHIR structure to build out these sub-units of a broader home health admission to properly define the progression of care.
</p>

<br clear="all" />
<figure style="text-align:center"><img src="./example.png" alt="Re-Assessment Timepoint Example" width="70%" /></figure>
<br clear="all" />

<p>
We have selected the Encounter Resource for the Re-assessment Timepoints profile. to this decision included providers, health IT organizations, HL7® workgroups and HL7® FHIR® subject matter experts, governing bodies such as CMS, LOINC Contributors, and others.
</p>

![PACIO logo](./pacio.png)

### About PACIO
<p>
The PACIO Project is a collaborative effort to advance interoperable health data exchange between post-acute care (PAC) and other providers, patients, and key stakeholders across health care and to promote health data exchange in collaboration with policy makers, standards organizations, and industry through a consensus-based approach.
</p>
<p>
The primary goal of the PACIO Project is to establish a framework for the development of Fast Healthcare Interoperability Resource (FHIR®) technical implementation guides and reference implementations that will facilitate health data exchange through standards-based use case-driven application programming interfaces (APIs).
</p>

### Audience/Expected Users
<p>
The audience for this IG includes architects and developers of healthcare information technology (HIT) systems in the US Realm that exchange clinical and non-clinical data. Business analysts and policy managers also might benefit from a basic understanding of the use of FHIR® profiles across multiple implementation use cases. Finally, Quality Reporting Agencies, Standards Development Organizations (SDOs), Payors, Providers and Patients will benefit from this IG.
</p>

### How to read this Guide

This IG is divided into several pages which are listed at the top of each page in the menu bar.
- [Home](index.html): The home page provides the introduction and background information to set context for the use of the HL7® FHIR® Re-assessment Timepoints IG.
- Guidance: These pages provide overall guidance in using the profiles and transactions defined in this guide.
    - [Formal Specification](formal_specification.html): Information about conformance to the IG, including Must Support requirements.
    - [Use Cases](use_cases.html): Detailed scenario in which Re-Assessment Timepoints could be used and ways that client applications can leverage the information.
    - [Security](security_and_privacy.html): General security requirements and recommendations for Re-Assessment Timepoints IG actors, including authentication, authorization, and logging requirements and guidance.
    - [Underlying Technologies](underlying_technologies.html): Information about the terminologies, notations, and design principles specific to FHIR® that this specification uses.
- FHIR® Artifacts: These sections provide detailed descriptions and formal definitions for all the FHIR® objects defined in this IG.
    - [Capability Statement](CapabilityStatement-rt-cs.html): This artifact defines the specific capabilities that different types of systems are expected to have in order to comply with this IG. Systems conforming to this IG are expected to declare conformance this capability statement.
    - [Search Parameters](artifacts.html#2): This section lists Search Parameters defined for use with Re-Assessment Timepoints.
    - [Profiles](artifacts.html#3): This section lists the set of Profiles defined in this IG to exchange Re-Assessment Timepoint information. Each linked Profile page includes a narrative introduction and a formal definition.
    - [Extensions](artifacts.html#4): This section lists the set of Extensions defined in and used by the Profiles in this IG . Each linked Extension page includes a formal definition.
    - [Value Sets](artifacts.html#5): This section lists the value sets this IG defines.
    - [Code Systems](artifacts.html#6): This section lists the code systems this IG defines.
    - [Examples](artifacts.html#7): This section lists the example instances associated with this IG, which provide an example representation of the scenario discussed on the [Use Cases](use_cases.html) page.
- [Downloads](downloads.html): This page provides links to downloadable artifacts.


### Key Terms and Acronyms

<table border="1">
    <tr>
        <th><b>Term</b></th>
        <th><b>Definition</b></th>
    </tr>
    <tr>
        <td>Use case</td>
        <td>A use case is a list of technical actions or event steps typically defining the interactions between a role and a system to achieve a goal. The actor can be a human or other external system. These technical scenarios describe systems interactions between technical actors to implement the business case.</td>
    </tr>
    <tr>
        <td>Re-assessment timepoint</td>
        <td>A more consumable time block of a broader Post-Acute admission to properly define the progression of care over time for an encounter or episode of care.</td>
    </tr>
</table>


---

// File: input/pagecontent/security_and_privacy.md

[//]: #  ## Security and Privacy 

### General Considerations
Implementation of the Re-Assessment Timepoints IG involves communication of patient-specific clinical information across multiple parties, which requires proper security and privacy protections to avoid malicious or unintentional exposure of such information. All exchange of data under this IG must be appropriately secured in transit and have access limited only to authorized individuals, which may include the person the information is about, that person’s caregivers, payers paying for the associated services, or other individuals or entities who have permission to use the information.

#### Security Considerations and Guidance
All implementers of the Re-Assessment Timepoints IG **SHOULD** follow the FHIR® Security guidance, Security and Privacy Module, the FHIR® Implementer’s Safety Checklist guidance as defined in the FHIR® standard, and US Core security recommendations where applicable and not otherwise superseded by this Section of the Re-Assessment Timepoints IG.

1.	The FHIR® Security specification provides guidance related to communication security, authentication, authorization/access control, audit, digital signatures, attachments, labels, narrative, and input validation. The FHIR® security specification is available [here](http://hl7.org/FHIR®/R4/security.html).
2.	The FHIR® Security and Privacy Module describes access control and authorization considerations to protect a FHIR® server, how to document permissions granted, and how to keep records of performed events. The FHIR® Security and privacy module is available [here](http://hl7.org/FHIR®/R4/secpriv-module.html).
3.	The FHIR® Implementer’s Safety Checklist helps implementers be sure that they have considered all the parts of FHIR® that impact their system design regarding safety. The FHIR® safety check list is available [here](http://hl7.org/FHIR®/R4/safety.html).
4.  The US Core IG provides specific requirements and guidance for US Realm IGs around security, privacy, and auditing. The US Core IG is available [here](http://hl7.org/FHIR®/us/core/security.html).

#### Security Requirements
For the purposes of the Re-assessment Timepoints IG, additional security conformance requirements are as follows:

##### Exchange Security
1.  In order to protect sensitive patient data while in transit between systems, the exchange of information using the Re-Assessment Timepoints IG **SHALL** support [Transport Layer Security (TLS) Protocol Version 1.2 (RFC5246)](https://tools.ietf.org/html/rfc5246) or a more recent version of TLS for transport layer security.
2.  Server implementations that expect to support browser-based javascript applications **SHOULD** enable [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) for REST operations. See the [Communications section of the FHIR® security page](http://hl7.org/FHIR®/R4/security.html#http) for additional details and recommendations on safely enabling CORS.  

##### Authentication and Authorization 
To prevent unauthorized access to sensitive data, implementers **SHALL** use at least one of the following:

1.  The security requirements from the [US Core Implementation Guide](http://hl7.org/FHIR®/us/core/security.html),
2.  The [SMART on FHIR® App Launch Framework](http://hl7.org/FHIR®/smart-app-launch/index.html),
3.  [SMART on FHIR® Backend Services](http://www.hl7.org/FHIR®/smart-app-launch/backend-services.html),
4.	Mutually authenticated TLS, or
5.  [Unified Data Access Profiles (UDAP)](https://www.udap.org/) recommended by the ONC FHIR® At Scale Taskforce (FAST) security tiger team.

---

// File: input/pagecontent/StructureDefinition-reassessment-timepoints-encounter-intro.md

**Example Usage Scenarios:**

Re-assessment timepoints are
- defined by post-acute care providers, for which encounters may span several months, or even years, such as skilled nursing facilities and home health agencies.
- used by clients accessing and displaying data on these lengthy encounters, to help users parse through the significant volume of associated data to find relevant information.

### Timepoint Structure and Data Links

The Re-Assessment Timepoints profile layers additional structure onto [US Core](https://hl7.org/fhir/us/core/) conformant data. This structure is added to existing encounters based on regulation, payer requirements, or internal processes that result in formal assessments during post-acute care services. These formal assessments, such as the CMS Minimum Data Set (MDS) or Outcome and Assessment Information Set (OASIS), happen at the boundaries between timepoints.

The following diagram provides an overview of the existing structure (orange) and the new Re-Asssessment Timepoint structure (blue).
<br clear="all" />
<figure style="text-align:center"><img src="./structure.png" alt="Re-Assessment Timepoint FHIR Structure" width="70%" /></figure>
<br clear="all" />
The sections below provide additional detail on these structures and their relationships.

#### Assumed initial structure

The Re-Assessment Timepoints profile augments existing FHIR® structure for representing clinical care, specifically:
- a [US Core Encounter](https://hl7.org/fhir/us/core/StructureDefinition-us-core-encounter.html) instance that represents a period during which a patient recieved clinical care.
- Observation instances representing the formal assessments that initiate and/or end timepoints. Often, these will be represented as [functional](http://hl7.org/fhir/us/pacio-fs/) or [cognitive status](http://hl7.org/fhir/us/pacio-cs/) observations.

#### Timepoint structure

Re-Assessment Timepoint instances are created as children of the root encounter instance. Many of the associated fields duplicate the parent encounter. Specific information recorded as a part of the Re-Assessment Timepoint includes:
1. The days within the parent encounter that the timepoint covers as the period
1. The entity which drives the timepoint as the type (e.g., payer)
1. The type of assessments that drive the timepoint's definition as the serviceType (e.g., MDS) 
1. A link to the parent encounter as partOf
1. The clinical assessments that bound the timepoint as an extension on basedOn

#### Clinical data structure

Clinical data **SHOULD** be linked explicitly to the Re-Assessment Timepoint Encounter through associated ClinicalImpression instances. This IG does not profile ClinicalImpression, so the intended use of the structure is described here. Each ClinicalImpression instance represents a formal assessment, such as the MDS 5-day or OASIS 120-day Follow-up. An entry in the `investigation` field lists references to the Observation instances that document these assessments in `investigation.item`.

ClinicalImpression instances are linked to relevant Re-Assessment Timepoints via the [basedOn extension](StructureDefinition-clinicalImpression.html) within the timepoint instance itself. ClinicalImpression instances will be linked in this way to the Re-Assessment Timepoint that the associated assessment initiates, the Re-Assessment Timepoint that the associated assessment concludes, or both.

### Mandatory and Must Support Data Elements

The following data elements must always be present or must be supported if the data is present in the sending system ([Must Support](formal_specification.html#must-support) definition). They are presented below with a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition](#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Re-Assessment Timepoint Encounter must have:**

1. An encounter identifier
1. A status
1. A classification, such as home health or skilled nursing facility
1. An encounter type, defining the type of entity that defines the assessment, such as payer
1. A service type, representing the driving assessment, such as the CMS Minimum Data Set
1. A patient
1. Providers involved in the encounter
1. When the timepoint occurred
1. Reason for the visit
1. Where the encounter occurred
1. The organization providing care
1. The parent encounter

**Each Re-Assessment Timepoint Encounter must support:**

1. Relevant diagnoses
1. The discharge disposition
1. ClinicalImpression resources documenting specific clinical data associated with the timepoint
1. Related episodes of care
1. A history of prior statuses



---

// File: input/pagecontent/StructureDefinition-reassessment-timepoints-encounter-notes.md

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations SHALL be supported:

1. **SHALL** support searching for all encounters, including re-assessment timepoints, that are children of another encounter using the **[`part-of`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameter:

    `GET [base]/Encounter?part-of={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?part-of=encounter1

    *Implementation Notes:* Fetches a bundle of all Encounter resources, including Re-Assessment Timepoint Encounter resources, that are children of the specified encounter ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference))


1. **SHALL** support searching for encounters, including re-assessment timepoints, using the combination of the **[`part-of`](http://hl7.org/fhir/R4/searchparameter-registry.html)** and **[`date`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameters:
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Encounter?date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}&part-of={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?part-of=encounter1&amp;date=ge2019-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Encounter resources, including Re-Assessment Timepoint Encounter resources, matching the specified date and parent Encounter ([how to search by date](https://hl7.org/fhir/R4/search.html#date) and [how to search by reference](https://hl7.org/fhir/R4/search.html#reference))

1. **SHALL** support searching for all encounters, including re-assessment timepoint encounters, for a patient using the **[`patient`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameter:

    `GET [base]/Encounter?patient={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?patient=1137192

    *Implementation Notes:* Fetches a bundle of all Encounter resources, including Re-Assessment Timepoint Encounter resources, for the specified patient ([how to search by reference])

1. **SHALL** support searching for encounters, including re-assessment timepoints, using the combination of the **[`patient`](http://hl7.org/fhir/R4/searchparameter-registry.html)** and **[`date`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameters:
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Encounter?date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}&patient={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?patient=example1&amp;date=ge2019-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Encounter resources, including Re-Assessment Timepoint Encounter resources, matching the specified date and patient ([how to search by date](https://hl7.org/fhir/R4/search.html#date) and [how to search by reference](https://hl7.org/fhir/R4/search.html#reference))

1. **SHALL** support fetching a re-assessment timepoint using the **[`_id`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameter:

    `GET [base]/Encounter[id]`

    Example:
    
      1. GET [base]/Encounter/12354
      1. GET [base]/Encounter?_id=12354

    *Implementation Notes:* Fetches a single Re-Assessment Timepoint Encounter resource ([how to search by the logical id](https://hl7.org/fhir/R4/references.html#logical) of the resource)

1. **SHALL** support searching for all encounters, including re-assessment timepoints, using the combination of the **[`date`](http://hl7.org/fhir/R4/searchparameter-registry.html)** and **[`patient`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameters:
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Encounter?date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}&patient={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?patient=example1&amp;date=ge2019-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Encounter resources, including Re-Assessment Timepoint Encounter resources, matching the specified date and patient ([how to search by date](https://hl7.org/fhir/R4/search.html#date) and [how to search by reference](https://hl7.org/fhir/R4/search.html#reference))

1. **SHALL** support searching for all encounters, including re-assessment timepoints, using the **[`date`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameter:
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Encounter?date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:
    
      1. GET [base]/Encounter?date=ge2019-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Encounter resources, including Re-Assessment Timepoints, matching the specified date ([how to search by date](https://hl7.org/fhir/R4/search.html#date))

1. **SHALL** support searching for all encounters, including re-assessment timepoints, using the **[`episode-of-care`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameter:
   `GET [base]/Encounter?episode-of-care={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?episode-of-care=episode1

    *Implementation Notes:* Fetches a bundle of all Encounter resources, including Re-Assessment Timepoint Encounter resources, that are children of the episode of care ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference))

#### Optional Search Parameters:

The following search parameters SHOULD be supported. In addition, search parameters which are supported individually **SHOULD** also be supported in combination with any set of other individually supported search parameters.

1. **SHOULD** support searching for all encounters, including re-assessment timepoints, using the **[`based-on`](SearchParameter-encounter-based-on.html)** search parameter:

     `GET [base]/Encounter?based-on={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?based-on=ClinicalImpression/impression1
      1. Get [base]/Encounter?based-on=ServiceRequest/request1

     *Implementation Notes:* Fetches a bundle containing any Encounter resources, including Re-Assessment Timepoint Encounter resources, referencing the ClinicalImpression or ServiceRequest instance ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference))

1. **SHOULD** support searching for all encounters, including re-assessment timepoints, using the **[`diagnosis`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameter:

     `GET [base]/Encounter?diagnosis={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?diagnosis=Condition/condition1
      1. GET [base]/Encounter?diagnosis=Procedure/procedure1

     *Implementation Notes:* Fetches a bundle containing any Encounter resources, including Re-Assessment Timepoint Encounter resources, referencing the Condition or Procedure instance ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference))

1. **SHOULD** support searching for all encounters, including re-assessment timepoints, using the **[`reason-reference`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameter:

     `GET [base]/Encounter?reason-reference={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?reason-reference=Condition/condition1
      1. GET [base]/Encounter?reason-reference=Procedure/procedure1
      1. GET [base]/Encounter?reason-reference=Observation/observation1

     *Implementation Notes:* Fetches a bundle containing any Encounter resources, including Re-Assessment Timepoint Encounter resources, referencing the Condition, Procedure, or Observation instance ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference))

1. **SHOULD** support searching for all encounters, including re-assessment timepoints, using the **[`service-provider`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameter:

     `GET [base]/Encounter?service-provider={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?service-provider=Organization/org1

     *Implementation Notes:* Fetches a bundle containing any Encounter resources, including Re-Assessment Timepoint Encounter resources, referencing the Organization instance ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference))

1. **SHOULD** support searching for all encounters, including re-assessment timepoints, using the **[`status`](http://hl7.org/fhir/R4/searchparameter-registry.html)** search parameter:

     `GET [base]/Encounter?status={Type/}[id]`

    Example:
    
      1. GET [base]/Encounter?status=finished

     *Implementation Notes:* Fetches a bundle containing any Encounter resources, including Re-Assessment Timepoint Encounter resources, matching the status ([how to search by token](https://hl7.org/fhir/R4/search.html#token))

---

// File: input/pagecontent/underlying_technologies.md

### Fast Healthcare Interoperability Resources

Based on the [HL7® FHIR®]({{site.data.fhir.path}}index.html) standard, this IG uses terminology, notations, and design principles that are specific to FHIR®. Therefore, implementers of this specification need to understand some basic information about the FHIR® specification.

Before reading this IG, it’s important to be familiar with some of the basic principles of FHIR®, as well as general guidance on how to read FHIR® specifications. Readers who are unfamiliar with FHIR® may find reading the following information helpful prior to reading the rest of this IG.

* [FHIR overview]({{site.data.fhir.path}}overview.html)
* [Developer's introduction]({{site.data.fhir.path}}overview-dev.html)
* [FHIR data types]({{site.data.fhir.path}}datatypes.html)
* [Using codes]({{site.data.fhir.path}}terminologies.html)
* [References between resources]({{site.data.fhir.path}}references.html)
* [How to read resource & profile definitions]({{site.data.fhir.path}}formats.html)
* [Base resource]({{site.data.fhir.path}}resource.html)
* [Security]({{site.data.fhir.path}}security.html)
* [Security Labels]({{site.data.fhir.path}}security-labels.html)

The Re-assessment Timepoints IG supports the [R4]({{site.data.fhir.path}}index.html) version of the FHIR® standard and builds on the [US Core Implementation Guide](http://hl7.org/fhir/us/core); therefore, implementers of the Re-assessment Timepoints IG need to familiarize themselves with the Profiles and FHIR® Resources in the US Core IG:

<table>
  <td>
    <a href="{{site.data.fhir.path}}encounter.html">Encounter</a><br/>
  </td>
</table>

---

// File: input/pagecontent/use_cases.md

[//]: #  ## Use Cases

The following scenario and related use cases guided the development of the Re-Assessment Timepoint IG. See this IG's [examples](artifacts.html#7) for resource instances representing this scenario.

### Scenario

#### Description

Betsy Smith-Johnson is a 71-year-old woman. In early 2021, Betsy experiences right side weakness and slurred speech and is taken to a local hospital, where she is diagnosed with and treated for a stroke. Once stabilized,  the hospital discharges her to post-acute care at Happy Skilled Nursing Facility (SNF) on February 26th. On March 11th, Betsy injures her ankle. Betsy’s reduced mobility triggers changes to her care plan and requires the SNF to provide her a higher level of care. To accurately reflect the care provided, the Minimum Data Set (MDS) Assessment Instrument Coordinator starts an Interim Payment MDS Assessment (IPA). After Betsy regains enough independence, on April 7th the SNF discharges her to home Where Sky Harbor Home Health Agency continues to help Betsy recover from her stroke.


#### Server Representation

The Happy Skilled Nursing Facility FHIR® server makes the information on Betsy's stay available using the [Re-Assessment Timepoint structure](StructureDefinition-reassessment-timepoints-encounter.html), including
- Re-Assessment Timepoint encounter instances for two periods, each linked back to the [primary encounter](Encounter-RT-SNF-Encounter.html)
  - [Admission to IPA](Encounter-RT-SNF-Encounter-Re-Assessment-Timepoint-1.html)
  - [IPA to Discharge](Encounter-RT-SNF-Encounter-Re-Assessment-Timepoint-2.html)
- ClinicalImpression instances for
  - [The MDS Admission Assessment](ClinicalImpression-RT-SNF-ClinicalImpression-1-MDS-5-day.html): linked to the [first](Encounter-RT-SNF-Encounter-Re-Assessment-Timepoint-1.html) timepoint
  - [The MDS IPA](ClinicalImpression-RT-SNF-ClinicalImpression-2-MDS-IPA.html): linked to the [first](Encounter-RT-SNF-Encounter-Re-Assessment-Timepoint-1.html) and [second](Encounter-RT-SNF-Encounter-Re-Assessment-Timepoint-2.html) timepoints
  - [The MDS Discharge Assessment](ClinicalImpression-RT-SNF-ClinicalImpression-3-MDS-Discharge.html): linked to the [second](Encounter-RT-SNF-Encounter-Re-Assessment-Timepoint-2.html) timepoint
- Observation instances representing formal assessments, each linked to the appropriate ClinicalImpression (e.g., an [MDS 5-Day mobility assessment collection](Observation-RT-SNF-MOB-AP-MDS-5-Day-NC-1A.html))
- Observation instances representing additional clinical data collected outside the formal assessments, e.g., an [adhoc self-care assessment](Observation-RT-SNF-SC-Adhoc-1D.html).

### Use Case 1: Payer Audit

Healthy HMO, a Medicare Advantage Plan, is auditing what led to a Interim Payment Assessment (IPA) for a patient.

#### Description

The payor compliance rules of Healthy HMO (Betsy’s insurance provider) align with Medicare. They decide to audit the billing period that ended with the IPA specifying a higher payment rate. In order to perform this audit, Healthy HMO queries for Betsy’s [active encounter](Encounter-RT-SNF-Encounter.html) and requests all associated timepoints. They select the [timepoint](Encounter-RT-SNF-Encounter-Re-Assessment-Timepoint-1.html) running from February 26 ([Admission MDS](ClinicalImpression-RT-SNF-ClinicalImpression-1-MDS-5-day.html)) to March 11 ([MDS IPA](ClinicalImpression-RT-SNF-ClinicalImpression-2-MDS-IPA.html)). Using this timepoint, Healthy HMO requests functional and cognitive status observations and clinical impressions within the billing range defined by the timepoint. This allows Health HMO to see that Betsy had demonstrated improvement until her ankle injury, indicating that she received appropriate care and that the IPA was justified.

#### Client Queries

##### Get the Re-Assessment Timepoints Within an Encounter prior to the IPA

Healthy HMO's client app has received information on the IPA, including
- The parent encounter id `RT-SNF-Encounter`
- The date of the IPA `2021-03-11`
- The id of the ClinicalImpression representing the IPA, `RT-SNF-ClinicalImpression-2-MDS-IPA`

Using the date of the IPA and the parent encounter, Healthy HMO's client app can find the Re-Assessment Timepoint prior to the IPA:
<pre>
  <code>
    GET [base]/Encounter?date=lt2022-03-11&part-of=Encounter/RT-SNF-Encounter
  </code>
</pre>

Alternatively, if the server supports the based-on ClinicalImpression query, the client can use the id of the ClinicalImpression and the date of the IPA to find the Re-Assessment Timepoint before the IPA:
<pre>
  <code>
    GET [base]/Encounter?based-on=ClinicalImpression/RT-SNF-ClinicalImpression-2-MDS-IPA&date=lt2022-03-11
  </code>
</pre>

In either case, Healthy HMO's client app can then follow the links from the [returned Re-Assessment Timepoint](Encounter-RT-SNF-Encounter-Re-Assessment-Timepoint-1.html) to the associated ClinicalImpression instances (e.g., [The MDS Admission Assessment](ClinicalImpression-RT-SNF-ClinicalImpression-1-MDS-5-day.html)) and then to the referenced observations representing the formal assessments (e.g., [MDS 5-Day mobility assessment collection](Observation-RT-SNF-MOB-AP-MDS-5-Day-NC-1A.html)). Also, they can use the date range defined by the timepoint to find other clinical details (e.g., an [adhoc self-care assessment](Observation-RT-SNF-SC-Adhoc-1D.html)) of Betsy's care during this period.

### Use Case 2: Discharge to Home Health Care

The Sky Harbor Home Health Agency continues Betsy’s care following her discharge from Happy Skilled Nursing Facility.

#### Description

As a part of admission to Sky Harbor Home Health Agency, the home health nurse wants to understand where Betsy is in her recovery and how it has progressed. Using the Re-Assessment Timepoint structure, in which Happy Skilled Nursing Facility makes its data available, the admitting home health nurse is able to see the trends of Betsy’s mobility and self-care assessments across the three formal assessments performed at Happy Skilled Nursing Facility ([MDS Admission](ClinicalImpression-RT-SNF-ClinicalImpression-1-MDS-5-day.html), [MDS IPA](ClinicalImpression-RT-SNF-ClinicalImpression-2-MDS-IPA.html), and [MDS Discharge](ClinicalImpression-RT-SNF-ClinicalImpression-3-MDS-Discharge.html)). This allows the nurse to identify areas where Betsy needs to improve and helps them plan her care.

#### Client Queries

##### Get all Re-Assessment Timepoints Within an Encounter

Sky Harbor's client app uses the [US Core](https://hl7.org/FHIR®/us/core/) specifications to query Happy Skilled Nursing Facility’s FHIR® server and identify the encounter instance for Betsy’s recent stay at the SNF. Using the id associated with that encounter `RT-SNF-Encounter`, the client app can retrieve the Re-Assessment Timepoints that comprise that encounter.

<pre>
  <code>
    GET [base]/Encounter?part-of=Encounter/RT-SNF-Encounter
  </code>
</pre>

Sky Harbor's client app can then follow the links from the returned Re-Assessment Timepoints to the associated ClinicalImpression instances (e.g., [The MDS Admission Assessment](ClinicalImpression-RT-SNF-ClinicalImpression-1-MDS-5-day.html)) and then to the referenced observations representing the formal assessments (e.g., [MDS 5-Day mobility assessment collection](Observation-RT-SNF-MOB-AP-MDS-5-Day-NC-1A.html)). The client app can also trend those observations over time.

---

// File: input/fsh/Aliases.fsh

Alias:   $USCoreEncounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias:   $USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias:   $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   $USCoreCondition = http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
Alias:   $USCoreProcedure = http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure
Alias:   $ENSTATUS = http://hl7.org/fhir/encounter-status
Alias:   $ActEncounterCode = http://terminology.hl7.org/ValueSet/v3-ActEncounterCode
Alias:   $V3ACTCODE = http://terminology.hl7.org/CodeSystem/v3-ActCode
//Alias:   BundledFunctionalStatus = http://paciowg.github.io/functional-status-ig/StructureDefinition/pacio-bfs
//Alias:   FunctionalStatus = http://paciowg.github.io/functional-status-ig/StructureDefinition/pacio-fs

---

// File: input/fsh/CodeSystems_and_ValueSets.fsh

//////////////////////////////
// Code Systems and Value Sets
//////////////////////////////

CodeSystem: TimepointEntityCodeSystem
Id: timepoint-entity-cs
Title: "Timepoint Entity Code System"
Description: "Defining codes for describing various entity types for structuring timepoints."
* #payer "Payer" "Payer"
* #regulatory-state "Regulatory - State" "Regulatory - State"
* #regulatory-federal "Regulatory - Federal" "Regulatory - Federal"
* #provider "Provider" "Provider"
* #accreditation-agency "Accreditation Agency" "Accreditation Agency"
* ^caseSensitive = true
* ^experimental = false

ValueSet: TimepointEntityTypeValueSet
Id: timepoint-entity-type-vs
Title: "Timepoint Entity Type Value Set"
Description: "Codes describing various entity types for structuring timepoints."
* include codes from system TimepointEntityCodeSystem
* ^experimental = false

CodeSystem: TimepointServiceTypeCodeSystem
Id: timepoint-service-type-cs
Title: "Timepoint Service Type Code System"
Description: "Defining codes for describing various service types of clinical assessment or instrument that a timepoint is centered on."
* #oasis "Outcome and Assessment Information Set" "CMS Home Health Outcome and Assessment Information Set"
* #mds "Minimum Data Set" "CMS Minimum Data Set - Resident Assessment and Care Screening"
* #pt "Physical Therapy Assessment" "Physical Therapy Assessment"
* ^caseSensitive = true
* ^experimental = false

ValueSet: TimepointServiceTypeValueSet
Id: timepoint-service-type-vs
Title: "Timepoint Service Type Value Set"
Description: "Various service types of clinical assessment or instrument that a timepoint is centered on."
* include codes from system TimepointServiceTypeCodeSystem
* ^experimental = false


ValueSet: TimepointStatusValueSet
Id: timepoint-status-vs
Title: "Timepoint Status Value Set"
Description: "Codes for the current state of the re-assessment timepoint."
* include $ENSTATUS#in-progress
* include $ENSTATUS#finished
* include $ENSTATUS#planned
* ^experimental = false


CodeSystem: TimepointClassCodeSystem
Id: timepoint-class-cs
Title: "Timepoint Class Code System"
Description: "Defining codes for the classification of patient timepoint such as skilled nursing facility, home health, etc."
* #SNF "skilled nursing facility" "Healthcare encounter that takes place in a skilled nursing facility."
* ^caseSensitive = true
* ^experimental = false

ValueSet: TimepointClassValueSet
Id: timepoint-class-vs
Title: "Timepoint Class Value Set"
Description: "Codes for the classification of patient timepoint. This is an extension of the ActEncounterCode value set"
* include codes from valueset $ActEncounterCode
* include codes from system TimepointClassCodeSystem
* ^experimental = false


---

// File: input/fsh/Re-Assessment_Timepoint_Encounter.fsh

Profile: ReassessmentTimepointsEncounter
Parent: USCoreEncounterProfile
Id: reassessment-timepoints-encounter
Title: "Re-Assessment Timepoints Encounter"
Description: "Re-Assessment Timepoints Encounter is a profile of the Encounter resource that allows longer-term post-acute admissions to be structured into smaller more consumable components, in line with the longer-term clinical care and progression of a patient."

* identifier 1..* MS
* identifier ^short = "Identifier(s) by which this timepoint is known"
* identifier ^definition = "Identifier(s) by which this timepoint is known"
* status from TimepointStatusValueSet (required)
* status ^short = "in-progress | finished | planned"
* status ^definition = "in-progress | finished | planned"
* statusHistory MS
* statusHistory ^short = "List of past timepoint statuses"
* statusHistory ^definition = "The status history permits this resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them."
* statusHistory.status from TimepointStatusValueSet (required)
* statusHistory.status ^short = "in-progress | finished | planned"
* statusHistory.status ^definition = "in-progress | finished | planned"
* class from TimepointClassValueSet (extensible)
* class ^short = "Classification of patient timepoint"
* class ^definition = "Concepts representing classification of patient timepoint such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations."
* classHistory.class from TimepointClassValueSet (extensible)
* classHistory ^short = "List of past timepoint classes"
* classHistory ^definition = "The class history permits the tracking of the timepoints transitions without needing to go through the resource history. This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new timepoint ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient."
* type 1..* MS
* type ^short = "The entity structuring the timepoint"
* type ^definition = "The nature and cadence of a timepoint can be structured by entities external or specific to a given provider, like a Payer that mandates certain assessments be completed."
* type from TimepointEntityTypeValueSet (extensible)
* serviceType 1..1 MS
* serviceType ^short = "The assessment or instrument driving the timepoint"
* serviceType ^definition = "The timepoint is an administrative structure for clinical data, service type is used to define the type of clinical assessment that the timepoint is centered on. For example, if the timepoint is driven by an CMS OASIS for Home Health, OASIS is the service type. If the timepoint is driven by a clinician discipline assessment (PT, OT etc.) or a system assessment (Pain, GI etc.) these assessments can be references."
* serviceType from TimepointServiceTypeValueSet (extensible)
* priority ^short = "Indicates the urgency of the timepoint"
* priority ^definition = "Indicates the urgency of the timepoint"
* subject only Reference(USCorePatientProfile)
* subject ^short = "The patient present at the timepoint"
* subject ^definition = "The patient present at the timepoint"
* episodeOfCare MS
* episodeOfCare ^short = "Episode(s) of care that this timepoint should be recorded against"
* episodeOfCare ^definition = "Where a specific timepoint should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related timepoints together for a specific purpose, such as government reporting, issue tracking, association via a common problem. The association is recorded on the timepoint as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another timepoint to it (the episode of care could span years)."
//* basedOn.display = "Clinical Impression"
* basedOn.extension contains BasedOnClinicalImpression named clinicalImpression 0..* MS
* basedOn.extension[clinicalImpression] ^short = "Clinical Impression can reflect any and all clinical related data tied to the assessment/instrument driving the timepoint, or within the timepoint itself."
* participant 1..* MS
* participant ^short = "Clinicians or Care Teams active in a timepoint"
* participant ^definition = "Any clinicians or other team members who had an interaction with a patient during a given time point period."
* participant.type ^short = "Role of participant in timepoint"
* participant.type ^definition = "Role of participant in timepoint."
* participant.period ^short = "Period of time during the timepoint that the participant participated"
* participant.period ^definition = "The period of time that the specified participant participated in the timepoint. These can overlap or be sub-sets of the overall timepoint's period."
* participant.individual ^short = "Persons involved in the timepoint other than the patient"
* participant.individual ^definition = "Persons involved in the timepoint other than the patient."
* appointment ^short = "Scheduled appointment or appointments that start the timepoint."
* appointment ^definition = "Scheduled appointment or appointments that start the timepoint."
* period 1..1 MS
* period ^short = "The start and end date/time of the timepoint"
* period ^definition = "The start and end date/time of the timepoint."
* length ^short = "Days in a given timepoint period."
* length ^definition = "Days in a given timepoint period."
* reasonCode 1..* MS
* reasonCode ^short = "The ICD or Snomed Code that is the subject of the given timepoint"
* reasonCode ^definition = "ICD 10 code is preferred in this field, and should reflect the focus of the timepoint. If the focus of the timepoint is a Home Health OASIS, then the Primary Diagnosis would be the reason code. If the focus is therapy related, then the reason should reflect the ICD Code(s) being treated by the therapist."
* reasonReference 0..* MS
* reasonReference only Reference(USCoreCondition or USCoreProcedureProfile or Observation)
* reasonReference ^short = "Reason the timepoint takes place (reference)"
* reasonReference ^definition = "Reference Services Provided (Procedure) and/or Reference specific clinical findings (Observation) related to the given timepoint."
* diagnosis MS
* diagnosis ^short = "Holding all DX codes for given patient during a given timepoint."
* diagnosis ^definition = "Holding all DX codes for given patient during a given timepoint."
* diagnosis.condition ^short = "The diagnosis or procedure relevant to the timepoint"
* diagnosis.condition ^definition = "Reason the timepoint takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure."
* diagnosis.use ^short = "Role that this diagnosis has within the timepoint (e.g. admission, billing, discharge …)"
* diagnosis.use ^definition = "Role that this diagnosis has within the timepoint (e.g. admission, billing, discharge …)"
* account ^short = "The set of accounts that may be used for billing for this timepoint."
* account ^definition = "The set of accounts that may be used for billing for this timepoint."
* location 1..* MS
* location ^short = "List of locations where the patient has been during this timepoint."
* location ^definition = "List of locations where the patient has been during this timepoint."
* location.location only Reference(USCoreLocation)
* location.location ^short = "The location where the timepoint takes place."
* location.location ^definition = "The location where the timepoint takes place."
* serviceProvider 1..1 MS
* serviceProvider only Reference(USCoreOrganizationProfile)
* serviceProvider ^short = "The organization (facility) responsible for this timepoint"
* serviceProvider ^definition = "The organization that is primarily responsible for this timepoint's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation. Refer to the example bundle showing an abbreviated set of timepoints for a colonoscopy."
* partOf 1..1 MS
* partOf only Reference(USCoreEncounterProfile)
* partOf ^short = "The Encounter this timepoint is part of"
* partOf ^definition = "The Encounter this timepoint is part of"

Extension: BasedOnClinicalImpression
Id: clinicalImpression
Description: "This extension allows Re-Assessment Timepoint Encounters to be linked to the formal assessments that define the start and end of the timepoint. Each linked ClinicalImpression instance represents a completed assessment, such as an MDS 5-day or OASIS 120-day Follow-up. The instance will include links to the Observation instances that document the discrete results of the assessment."
* value[x] only Reference(ClinicalImpression)
* value[x] ^short = "A ClinicalImpression instance representing a formal assessment that was performed at the start or end of the referencing timepoint."


---

// File: input/fsh/examples/ClinicalImpression.instances.fsh

Instance: RT-SNF-ClinicalImpression-1-MDS-5-day
InstanceOf: ClinicalImpression
Description: "Clinical impression for assessment and impression at admission to SNF"
Usage: #example
* status = #completed
* description = "Assessment and impression at admission to SNF"
* subject = Reference(Patient/RT-Patient-BSJ)
* effectiveDateTime = "2021-02-26"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* investigation.code.text = "SNF MDS Admission Assessments"
* investigation.item[0] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A)
* investigation.item[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B)
* investigation.item[+] = Reference(Observation/RT-SNF-PF-MDS-5-Day-NC-1A)
* investigation.item[+] = Reference(Observation/RT-SNF-SC-AP-MDS-5-Day-NC-1B)
* investigation.item[+] = Reference(Observation/RT-SNF-SC-DG-MDS-5-Day-NC-1C)
* summary = "focus on restoring mobility following stroke"

Instance: RT-SNF-ClinicalImpression-2-MDS-IPA
InstanceOf: ClinicalImpression
Description: "Clinical impression for assessment and impression at interim assessment at SNF"
Usage: #example
* status = #completed
* description = "Assessment and impression at interim assessment at SNF"
* subject = Reference(Patient/RT-Patient-BSJ)
* effectiveDateTime = "2021-03-11"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* investigation.code.text = "SNF IPA Assessments"
* investigation.item[0] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C)
* investigation.item[+] = Reference(Observation/RT-SNF-SC-IP-MDS-IPA-1D)
* summary = "focus on restoring mobility following stroke, including setback from ankle injury"

Instance: RT-SNF-ClinicalImpression-3-MDS-Discharge
InstanceOf: ClinicalImpression
Description: "Clinical impression for assessment and impression at discharge from SNF"
Usage: #example
* status = #completed
* description = "Assessment and impression at discharge from SNF"
* subject = Reference(Patient/RT-Patient-BSJ)
* effectiveDateTime = "2021-04-06"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* investigation.code.text = "SNF Discharge Assessments"
* investigation.item[0] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D)
* investigation.item[+] = Reference(Observation/RT-SNF-SC-DP-MDS-Discharge-ND-1E)
* summary = "continue recovery at home"

Instance: RT-HHA-ClinicalImpression-1-OASIS-SOC
InstanceOf: ClinicalImpression
Description: "Clinical impression for assessment and impression at start of home health care"
Usage: #example
* status = #completed
* description = "Assessment and impression at start of home health care"
* subject = Reference(Patient/RT-Patient-BSJ)
* effectiveDateTime = "2021-04-07"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* investigation.code.text = "OASIS Start of Care Asessments"
* investigation.item[0] = Reference(Observation/RT-HHA-SC-DG-OASIS-2C)
* investigation.item[+] = Reference(Observation/RT-HHA-SC-SOC-Perf-OASIS-2B)
* investigation.item[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B)
* investigation.item[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A)
* investigation.item[+] = Reference(Observation/RT-HHA-PF-SOC-OASIS-2A)
* summary = "continue recovery at home"

Instance: RT-HHA-ClinicalImpression-2-OASIS-FU-60
InstanceOf: ClinicalImpression
Description: "Clinical impression for assessment and impression after 60 days of home health care"
Usage: #example
* status = #completed
* description = "Assessment and impression after 60 days of home health care"
* subject = Reference(Patient/RT-Patient-BSJ)
* effectiveDateTime = "2021-06-02"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* investigation.code.text = "OASIS 60-day Follow Up Assessments"
* investigation.item[0] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C)
* investigation.item[+] = Reference(Observation/RT-HHA-SC-FU-60-OASIS-2D)
* summary = "continue recovery at home"

Instance: RT-HHA-ClinicalImpression-3-OASIS-FU-120
InstanceOf: ClinicalImpression
Description: "Clinical impression for assessment and impression after 120 days of home health care"
Usage: #example
* status = #completed
* description = "Assessment and impression after 120 days of home health care"
* subject = Reference(Patient/RT-Patient-BSJ)
* effectiveDateTime = "2021-08-04"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* investigation.code.text = "OASIS 120-day Follow Up Assessments"
* investigation.item[0] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D)
* investigation.item[+] = Reference(Observation/RT-HHA-SC-FU-120-OASIS-2E)
* summary = "continue recovery at home"

Instance: RT-HHA-ClinicalImpression-4-OASIS-DC
InstanceOf: ClinicalImpression
Description: "Clinical impression for assessment and impression prior to discharge from home health care"
Usage: #example
* status = #completed
* description = "Assessment and impression prior to discharge from home health care"
* subject = Reference(Patient/RT-Patient-BSJ)
* effectiveDateTime = "2021-08-24"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* investigation.code.text = "OASIS Discharge Assessments"
* investigation.item[0] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E)
* investigation.item[+] = Reference(Observation/RT-HHA-SC-DC-OASIS-2F)
* summary = "able to function independently"


---

// File: input/fsh/examples/Condition.instances.fsh

Alias: USCCOND = http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
Alias: COND-CAT = http://terminology.hl7.org/CodeSystem/condition-category
Alias: CC = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: CVS = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: ICD10 = http://hl7.org/fhir/sid/icd-10-cm


Instance: RT-SNF-Diagnosis-CI
InstanceOf: USCoreCondition
Description: "Cerebral infarction diagnosis at SNF"
* subject = Reference(Patient/RT-Patient-BSJ)
* clinicalStatus = CC#active
* verificationStatus = CVS#confirmed
* category = COND-CAT#encounter-diagnosis
* code = ICD10#I63.411
* code.text = "Cerebral infarction due to embolism of right middle cerebral artery"
* code.coding.display = "Cerebral infarction due to embolism of right middle cerebral artery"
* onsetDateTime = "2021-02-26T15:00:00-05:00"
* asserter = Reference(Practitioner/RT-Practitioner-NoraOlogist)
* asserter.display = "Neurologist Nora Ologist"
* encounter = Reference(Encounter/RT-SNF-Encounter)

Instance: RT-HHA-Diagnosis-CISequelae
InstanceOf: USCoreCondition
Description: "Sequelae of cerebral infarction diagnosis at HHA"
* subject = Reference(Patient/RT-Patient-BSJ)
* clinicalStatus = CC#active
* verificationStatus = CVS#confirmed
* category = COND-CAT#encounter-diagnosis
* code = ICD10#I69.30
* code.text = "Unspecified sequelae of cerebral infarction"
* code.coding.display = "Unspecified sequelae of cerebral infarction"
* onsetDateTime = "2021-04-07T15:00:00-05:00"
* asserter = Reference(Practitioner/RT-Practitioner-JohnSmith)
* asserter.display = "Primary Care John Smith"
* encounter = Reference(Encounter/RT-HHA-Encounter)


---

// File: input/fsh/examples/Encounter.instances.fsh

Alias: USCOREENT = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias: DRL = http://terminology.hl7.org/CodeSystem/diagnosis-role
Alias: ENCSTATUS = http://hl7.org/fhir/encounter-status
Alias: DIAGPRESENT = http://terminology.hl7.org/CodeSystem/diagnosis-role
Alias: SNMD = http://snomed.info/sct

Instance: RT-SNF-Encounter
InstanceOf: USCoreEncounterProfile
Description: "SNF Encounter for Betsy Smith-Johnson, period 2021-02-26 to 2021-04-07"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = ENCSTATUS#finished
* class = TimepointClassCodeSystem#SNF "skilled nursing facility"
* type.coding = SNMD#185347001 "Encounter for problem (procedure)"
* period.start = "2021-02-26T15:00:00-05:00"
* period.end = "2021-04-07T10:30:00-05:00"
* diagnosis.condition[0] = Reference(Condition/RT-SNF-Diagnosis-CI)
* diagnosis.use.coding[0] = DRL#AD "Admission diagnosis"
* location.location = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* participant.individual = Reference(Practitioner/RT-Practitioner-JohnSmith)

Instance: RT-HHA-Encounter
InstanceOf: USCoreEncounterProfile
Description: "HHA Encounter for Betsy Smith-Johnson, period 2021-04-07 to 2021-08-24"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = ENCSTATUS#finished
* class = $V3ACTCODE#HH "home health"
* type.coding = SNMD#50357006 "Evaluation and management of patient at home (procedure)"
* period.start = "2021-04-07T15:00:00-05:00"
* period.end = "2021-08-24T10:30:00-05:00"
* diagnosis.condition[0] = Reference(Condition/RT-HHA-Diagnosis-CISequelae)
* diagnosis.use.coding[0] = DRL#AD "Admission diagnosis"
* location.location = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* participant.individual = Reference(Practitioner/RT-Practitioner-JohnSmith)


---

// File: input/fsh/examples/EpisodeOfCare.instances.fsh

Alias: EOCTYPECS = http://terminology.hl7.org/CodeSystem/episodeofcare-type


Instance: RT-SNF-EpisodeOfCare
InstanceOf: EpisodeOfCare
Description: "SNF-Stay Episode of Care for Betsy Smith-Johnson, period 2021-02-26 to 2021-04-07"
* status = #finished
* type = EOCTYPECS#pac
* diagnosis.condition = Reference(Condition/RT-SNF-Diagnosis-CI)
* patient = Reference(Patient/RT-Patient-BSJ)
* managingOrganization = Reference(Organization/RT-PractitionerOrg-HappyNursing-SNF)
* period.start = "2021-02-26"
* period.end = "2021-04-07"
* careManager = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)


Instance: RT-HHA-EpisodeOfCare
InstanceOf: EpisodeOfCare
Description: "HHA-Stay Episode of Care for Betsy Smith-Johnson, period 2021-04-07 to 2021-08-24"
* status = #finished
* type = EOCTYPECS#hacc
* diagnosis.condition = Reference(Condition/RT-HHA-Diagnosis-CISequelae)
* patient = Reference(Patient/RT-Patient-BSJ)
* managingOrganization = Reference(Organization/RT-PractitionerOrg-SkyHarbor-HHA)
* period.start = "2021-04-07"
* period.end = "2021-08-24"
* careManager = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)



---

// File: input/fsh/examples/FPCollection.instances.fsh

Alias: FUNCPERFCAT = http://hl7.org/fhir/us/pacio-fp/CodeSystem/fp-category-cs
Alias: FUNCTIONINGCAT = http://hl7.org/fhir/us/pacio-fp/CodeSystem/fp-functioning-cs
Alias: OBSCAT = http://terminology.hl7.org/CodeSystem/observation-category


Instance: RT-SNF-MOB-Adhoc-1D
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-08T11:40:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#90541-4 "Mobility - interim performance during assessment period [CMS Assessment]"
* code.text = "Mobility - interim performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1D-Ob-Question-1)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1D-Ob-Question-2)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1D-Ob-Question-3)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1D-Ob-Question-4)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1D-Ob-Question-5)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1D-Ob-Question-6)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1D-Ob-Question-7)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1D-Ob-Question-8)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-SNF-MOB-Adhoc-1E
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-16T13:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#90541-4 "Mobility - interim performance during assessment period [CMS Assessment]"
* code.text = "Mobility - interim performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1E-Ob-Question-1)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1E-Ob-Question-2)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1E-Ob-Question-3)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1E-Ob-Question-4)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1E-Ob-Question-5)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1E-Ob-Question-6)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1E-Ob-Question-7)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-Adhoc-1E-Ob-Question-8)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95741-5 "IRF-PAI v3.0, MDS v1.17.1, 1.17.2 - Mobility - admission performance during assessment period [CMS Assessment]"
* code.text = "IRF-PAI v3.0, MDS v1.17.1, 1.17.2 - Mobility - admission performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-1)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-4)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-7)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-10)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-13)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-16)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-19)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-21)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-24)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-27)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-30)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-31)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-32)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-33)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-34)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-35)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-HHA-SC-FU-60-OASIS-2D
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#88485-8 "OASIS D - Self-care - follow-up performance during assessment period [CMS Assessment]"
* code.text = "OASIS D - Self-care - follow-up performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* hasMember[+] = Reference(Observation/RT-HHA-SC-FU-60-OASIS-2D-Ob-Question-26)
* hasMember[+] = Reference(Observation/RT-HHA-SC-FU-60-OASIS-2D-Ob-Question-28)
* hasMember[+] = Reference(Observation/RT-HHA-SC-FU-60-OASIS-2D-Ob-Question-30)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-SNF-SC-AP-MDS-5-Day-NC-1B
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95732-4 "IRF-PAI v3.0, MDS v1.17.1, 1.17.2 - Self-care - admission performance during assessment period [CMS Assessment]"
* code.text = "IRF-PAI v3.0, MDS v1.17.1, 1.17.2 - Self-care - admission performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* hasMember[+] = Reference(Observation/RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-5)
* hasMember[+] = Reference(Observation/RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-6)
* hasMember[+] = Reference(Observation/RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-7)
* hasMember[+] = Reference(Observation/RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-8)
* hasMember[+] = Reference(Observation/RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-9)
* hasMember[+] = Reference(Observation/RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-10)
* hasMember[+] = Reference(Observation/RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-11)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-HHA-mental-functions-MOCA-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#72133-2 "Montreal Cognitive Assessment [MoCA]"
* code.text = "Montreal Cognitive Assessment [MoCA]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* hasMember[+] = Reference(Observation/RT-HHA-mental-functions-MOCA-1-Ob-Question-1)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueQuantity = 18 '{score}'

Instance: RT-HHA-MOB-DG-OASIS-2B
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89476-6 "Mobility - discharge goal [CMS Assessment]"
* code.text = "Mobility - discharge goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-58)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-59)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-60)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-61)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-62)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-63)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-64)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-65)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-66)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-67)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-68)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-69)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-70)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-71)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DG-OASIS-2B-Ob-Question-72)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-SNF-CSC-BIMS-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#52491-8 "Brief interview for mental status [BIMS]"
* code.text = "Brief interview for mental status [BIMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-BIMS-1-Ob-Question-3)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-BIMS-1-Ob-Question-4)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-BIMS-1-Ob-Question-5)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-BIMS-1-Ob-Question-6)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-BIMS-1-Ob-Question-7)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-BIMS-1-Ob-Question-8)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-BIMS-1-Ob-Question-9)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-BIMS-1-Ob-Question-10)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueQuantity = 9 '{score}'

Instance: RT-HHA-MOB-FU-60-OASIS-2C
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#88486-6 "OASIS D - Mobility - follow-up performance during assessment period [CMS Assessment]"
* code.text = "OASIS D - Mobility - follow-up performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-2)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-6)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-10)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-14)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-18)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-22)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-28)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-32)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-38)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-42)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-46)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-52)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-55)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-HHA-SC-SOC-Perf-OASIS-2B
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89479-0 "OASIS E - Self-care - SOC and ROC performance during assessment period [CMS Assessment]"
* code.text = "OASIS E - Self-care - SOC and ROC performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* hasMember[+] = Reference(Observation/RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-5)
* hasMember[+] = Reference(Observation/RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-7)
* hasMember[+] = Reference(Observation/RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-9)
* hasMember[+] = Reference(Observation/RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-11)
* hasMember[+] = Reference(Observation/RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-13)
* hasMember[+] = Reference(Observation/RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-15)
* hasMember[+] = Reference(Observation/RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-17)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89477-4 "OASIS E - Mobility - SOC and ROC performance during assessment period [CMS Assessment]"
* code.text = "OASIS E - Mobility - SOC and ROC performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-1)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-5)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-9)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-13)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-17)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-21)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-25)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-27)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-31)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-35)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-37)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-41)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-45)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-49)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-51)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-54)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-HHA-MOB-DC-OASIS-2E
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89474-1 "OASIS E - Mobility - discharge performance during assessment period [CMS Assessment]"
* code.text = "OASIS D - Mobility - discharge performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-4)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-8)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-12)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-16)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-20)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-24)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-26)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-30)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-34)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-36)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-40)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-44)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-48)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-50)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-53)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-DC-OASIS-2E-Ob-Question-57)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89476-6 "Mobility - discharge goal [CMS Assessment]"
* code.text = "Mobility - discharge goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-36)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-37)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-38)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-39)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-40)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-41)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-42)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-43)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-44)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-45)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-46)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-47)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-48)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-49)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-50)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-51)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-52)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-HHA-mental-functions-MMSE-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#72107-6 "Mini-Mental State Examination [MMSE]"
* code.text = "Mini-Mental State Examination [MMSE]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* hasMember[+] = Reference(Observation/RT-HHA-mental-functions-MMSE-1-Ob-Question-31)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueQuantity = 21 '{score}'

Instance: RT-HHA-MOB-FU-120-OASIS-2D
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#88486-6 "OASIS D - Mobility - follow-up performance during assessment period [CMS Assessment]"
* code.text = "OASIS D - Mobility - follow-up performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-3)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-7)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-11)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-15)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-19)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-23)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-29)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-33)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-39)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-43)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-47)
* hasMember[+] = Reference(Observation/RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-56)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95742-3 "IRF-PAI v3.0, MDS v1.17.1, 1.17.2 - Mobility - discharge performance during assessment period [CMS Assessment]"
* code.text = "IRF-PAI v3.0, MDS v1.17.1, 1.17.2 - Mobility - discharge performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-3)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-6)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-9)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-12)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-15)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-18)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-20)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-23)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-26)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-29)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-HHA-SC-DC-OASIS-2F
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T14:00:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89475-8 "OASIS E - Self-care - discharge performance during assessment period [CMS Assessment]"
* code.text = "OASIS E - Self-care - discharge performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-TamaraRodriguez)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DC-OASIS-2F-Ob-Question-6)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DC-OASIS-2F-Ob-Question-8)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DC-OASIS-2F-Ob-Question-10)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DC-OASIS-2F-Ob-Question-12)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DC-OASIS-2F-Ob-Question-14)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DC-OASIS-2F-Ob-Question-16)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DC-OASIS-2F-Ob-Question-18)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-SNF-SC-Adhoc-1D
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-09T12:20:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#83233-7 "Self-care - admission performance [CMS Assessment]"
* code.text = "Self-care - admission performance [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1D-Ob-Question-1)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1D-Ob-Question-2)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1D-Ob-Question-3)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1D-Ob-Question-4)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1D-Ob-Question-5)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1D-Ob-Question-6)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1D-Ob-Question-7)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-SNF-MOB-IP-MDS-IPA-1C
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#90541-4 "Mobility - interim performance during assessment period [CMS Assessment]"
* code.text = "Mobility - interim performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-2)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-5)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-8)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-11)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-14)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-17)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-22)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-25)
* hasMember[+] = Reference(Observation/RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-28)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-SNF-PF-MDS-5-Day-NC-1A
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#83239-4 "IRF-PAI v3.0, MDS v1.17.1, 1.17.2, OASIS E - Prior functioning: everyday activities [CMS Assessment]"
* code.text = "IRF-PAI v3.0, MDS v1.17.1, 1.17.2, OASIS E - Prior functioning: everyday activities [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* hasMember[+] = Reference(Observation/RT-SNF-PF-MDS-5-Day-NC-1A-Ob-Question-1)
* hasMember[+] = Reference(Observation/RT-SNF-PF-MDS-5-Day-NC-1A-Ob-Question-2)
* hasMember[+] = Reference(Observation/RT-SNF-PF-MDS-5-Day-NC-1A-Ob-Question-3)
* hasMember[+] = Reference(Observation/RT-SNF-PF-MDS-5-Day-NC-1A-Ob-Question-4)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-HHA-SC-FU-120-OASIS-2E
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#88485-8 "OASIS D - Self-care - follow-up performance during assessment period [CMS Assessment]"
* code.text = "OASIS D - Self-care - follow-up performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* hasMember[+] = Reference(Observation/RT-HHA-SC-FU-120-OASIS-2E-Ob-Question-27)
* hasMember[+] = Reference(Observation/RT-HHA-SC-FU-120-OASIS-2E-Ob-Question-29)
* hasMember[+] = Reference(Observation/RT-HHA-SC-FU-120-OASIS-2E-Ob-Question-31)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-SNF-SC-DG-MDS-5-Day-NC-1C
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89478-2 "IRF-PAI v3.0, MDS v1.17.1, 1.17.2, OASIS E - Self-care - discharge goal [CMS Assessment]"
* code.text = "IRF-PAI v3.0, MDS v1.17.1, 1.17.2, OASIS E - Self-care - discharge goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-12)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-13)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-14)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-15)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-16)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-17)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-18)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-SNF-CSC-PHQ9-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54635-8 "Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
* code.text = "Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-11)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-12)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-13)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-14)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-15)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-16)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-17)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-18)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-19)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-20)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-21)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-22)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-23)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-24)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-25)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-26)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-27)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-28)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-1-Ob-Question-29)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueQuantity = 3 '{score}'

Instance: RT-SNF-SC-DP-MDS-Discharge-ND-1E
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95734-0 "IRF-PAIv3.0, MDS v1.17.1, 1.17.2 - Self-care - discharge performance during assessment period [CMS Assessment]"
* code.text = "IRF-PAIv3.0, MDS v1.17.1, 1.17.2 - Self-care - discharge performance during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-19)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-20)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-21)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-22)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-23)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-24)
* hasMember[+] = Reference(Observation/RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-25)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-SNF-CSC-PHQ9-2
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54635-8 "Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
* code.text = "Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-11)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-12)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-13)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-14)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-15)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-16)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-17)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-18)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-19)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-20)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-21)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-22)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-23)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-24)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-25)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-26)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-27)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-28)
* hasMember[+] = Reference(Observation/RT-SNF-CSC-PHQ9-2-Ob-Question-29)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueQuantity = 7 '{score}'

Instance: RT-SNF-SC-IP-MDS-IPA-1D
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#90540-6 "MDS v1.17.1, 1.17.2 - Self-care - interim performance - IPA during assessment period [CMS Assessment]"
* code.text = "MDS v1.17.1, 1.17.2 - Self-care - interim performance - IPA during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* hasMember[+] = Reference(Observation/RT-SNF-SC-IP-MDS-IPA-1D-Ob-Question-26)
* hasMember[+] = Reference(Observation/RT-SNF-SC-IP-MDS-IPA-1D-Ob-Question-27)
* hasMember[+] = Reference(Observation/RT-SNF-SC-IP-MDS-IPA-1D-Ob-Question-28)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-SNF-SC-Adhoc-1E
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-17T14:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#83233-7 "Self-care - admission performance [CMS Assessment]"
* code.text = "Self-care - admission performance [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1E-Ob-Question-1)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1E-Ob-Question-2)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1E-Ob-Question-3)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1E-Ob-Question-4)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1E-Ob-Question-5)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1E-Ob-Question-6)
* hasMember[+] = Reference(Observation/RT-SNF-SC-Adhoc-1E-Ob-Question-7)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)


Instance: RT-HHA-PF-SOC-OASIS-2A
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#83239-4 "IRF-PAI v3.0, MDS v1.17.1, 1.17.2, OASIS E - Prior functioning: everyday activities [CMS Assessment]"
* code.text = "IRF-PAI v3.0, MDS v1.17.1, 1.17.2, OASIS E - Prior functioning: everyday activities [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* hasMember[+] = Reference(Observation/RT-HHA-PF-SOC-OASIS-2A-Ob-Question-1)
* hasMember[+] = Reference(Observation/RT-HHA-PF-SOC-OASIS-2A-Ob-Question-2)
* hasMember[+] = Reference(Observation/RT-HHA-PF-SOC-OASIS-2A-Ob-Question-3)
* hasMember[+] = Reference(Observation/RT-HHA-PF-SOC-OASIS-2A-Ob-Question-4)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-HHA-SC-DG-OASIS-2C
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89478-2 "IRF-PAI v3.0, MDS v1.17.1, 1.17.2, OASIS E - Self-care - discharge goal [CMS Assessment]"
* code.text = "IRF-PAI v3.0, MDS v1.17.1, 1.17.2, OASIS E - Self-care - discharge goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DG-OASIS-2C-Ob-Question-19)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DG-OASIS-2C-Ob-Question-20)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DG-OASIS-2C-Ob-Question-21)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DG-OASIS-2C-Ob-Question-22)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DG-OASIS-2C-Ob-Question-23)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DG-OASIS-2C-Ob-Question-24)
* hasMember[+] = Reference(Observation/RT-HHA-SC-DG-OASIS-2C-Ob-Question-25)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


---

// File: input/fsh/examples/FPObservation.instances.fsh

Alias: FUNCPERFCAT = http://hl7.org/fhir/us/pacio-fp/CodeSystem/fp-category-cs
Alias: FUNCTIONINGCAT = http://hl7.org/fhir/us/pacio-fp/CodeSystem/fp-functioning-cs
Alias: OBSCAT = http://terminology.hl7.org/CodeSystem/observation-category


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-9
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95009-7 "Lying to sitting on side of bed - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-6
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95010-5 "Sit to lying - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-50
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89402-2 "Picking up object - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-3
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95011-3 "Roll left and right - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-5
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95019-6 "Eating - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-Adhoc-1E-Ob-Question-6
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-16T13:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89390-9 "Toilet transfer - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-7
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95017-0 "Toileting hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-6
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95018-8 "Oral hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-MOB-Adhoc-1E-Ob-Question-3
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-16T13:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#85926-4 "Lying to sitting on side of bed - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-Adhoc-1E-Ob-Question-2
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-16T13:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89395-8 "Sit to lying - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-MOB-Adhoc-1E-Ob-Question-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-16T13:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89399-0 "Roll left and right - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-9
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95014-7 "Upper body dressing - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-8
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95015-4 "Shower/bathe self - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-MOB-Adhoc-1E-Ob-Question-8
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-16T13:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89382-6 "Walk 50 feet with two turns - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10058-8 "Patient refused"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-24
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54649-9 "Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-49
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#94998-2 "Go up and down 12 steps - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30915-5 "Person refused."


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-25
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54650-7 "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-45
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#94999-0 "Go up and down 4 steps - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-41
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95000-6 "Go up and down a curb/step - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-SC-FU-120-OASIS-2E-Ob-Question-31
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95017-0 "Toileting hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-11
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95009-7 "Lying to sitting on side of bed - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-39
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95001-4 "Walking 10 feet on uneven surfaces - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-18
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95007-1 "Chair/bed-to-chair transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30910-6 "Setup or cleanup assistance - Helper sets up or cleans up; person completes activity. Helper assists only prior to or following the activity."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-14
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95008-9 "Sit to stand - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-10
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95009-7 "Lying to sitting on side of bed - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-Adhoc-1E-Ob-Question-5
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-16T13:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89415-4 "Bed-to-chair transfer - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-15
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95008-9 "Sit to stand - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-37
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89394-1 "Sit to lying - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-35
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95738-1 "Does the patient use a wheelchair/scooter during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-34
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#94997-4 "Picking up object - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-33
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#94998-2 "Go up and down 12 steps - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30917-1 "Not attempted due to short-term medical condition or safety concerns."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-32
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#94999-0 "Go up and down 4 steps - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-31
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95000-6 "Go up and down a curb/step - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-30
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95001-4 "Walking 10 feet on uneven surfaces - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-MOB-Adhoc-1E-Ob-Question-7
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-16T13:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89386-7 "Walk 10 feet - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-49
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89418-8 "Go up and down 12 steps - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-48
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89416-2 "Go up and down 4 steps - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-43
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89385-9 "Walk 10 feet - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-42
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89412-1 "Car transfer - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-41
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89390-9 "Toilet transfer - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-54
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95738-1 "Does the patient use a wheelchair/scooter during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-47
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89420-4 "Go up and down a curb/step - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-46
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89379-2 "Walking 10 feet on uneven surfaces - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-45
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89383-4 "Walk 150 feet - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-44
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89381-8 "Walk 50 feet with two turns - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-CSC-BIMS-1-Ob-Question-7
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#52735-8 "Recall - sock [BIMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10126-3 "Yes, after cueing (\"something to wear\")"


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-29
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95004-8 "Walk 10 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-Adhoc-1E-Ob-Question-4
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-16T13:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89393-3 "Sit to stand - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-29
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95002-2 "Walk 150 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-13
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89404-8 "Oral hygiene - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-23
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95006-3 "Toilet transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-26
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95003-0 "Walk 50 feet with two turns - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-20
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95005-5 "Car transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-23
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95004-8 "Walk 10 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-40
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89414-7 "Chair/bed-to-chair transfer - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-56
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95738-1 "Does the patient use a wheelchair/scooter during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-SNF-CSC-BIMS-1-Ob-Question-3
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#52731-7 "Repetition of three words # [BIMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA6404-3 "Two"


Instance: RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-17
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89406-3 "Lower body dressing - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-21
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95004-8 "Walk 10 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-12
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95009-7 "Lying to sitting on side of bed - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-24
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95003-0 "Walk 50 feet with two turns - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-51
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#94997-4 "Picking up object - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-27
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95002-2 "Walk 150 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30917-1 "Not attempted due to short-term medical condition or safety concerns."


Instance: RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-15
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89396-6 "Shower/bathe self - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-PF-SOC-OASIS-2A-Ob-Question-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#85070-1 "Prior functioning.self care [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."


Instance: RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-5
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95010-5 "Sit to lying - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-PF-SOC-OASIS-2A-Ob-Question-3
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#85072-7 "Stairs [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."


Instance: RT-HHA-PF-SOC-OASIS-2A-Ob-Question-2
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#85071-9 "Indoor mobility (Ambulation) [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."


Instance: RT-HHA-PF-SOC-OASIS-2A-Ob-Question-4
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#85073-5 "Functional cognition [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."


Instance: RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-2
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95011-3 "Roll left and right - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-SC-DC-OASIS-2F-Ob-Question-8
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T14:00:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95018-8 "Oral hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-TamaraRodriguez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-FU-120-OASIS-2E-Ob-Question-27
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95019-6 "Eating - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-DG-OASIS-2C-Ob-Question-19
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89409-7 "Eating - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-8
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95009-7 "Lying to sitting on side of bed - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-51
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89375-0 "Wheel 50 feet with two turns - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-52
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89377-6 "Wheel 150 feet - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-23
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95014-7 "Upper body dressing - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-22
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95015-4 "Shower/bathe self - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-21
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95017-0 "Toileting hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-20
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95018-8 "Oral hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-25
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95012-1 "Putting on/taking off footwear - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-24
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95013-9 "Lower body dressing - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-25
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54650-7 "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-24
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54649-9 "Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-27
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54652-3 "Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10996-9 "No response"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-26
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54651-5 "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-21
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54646-5 "Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-20
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54645-7 "Poor appetite or overeating in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-23
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54648-1 "Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-22
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54647-3 "Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-47
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#94999-0 "Go up and down 4 steps - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30910-6 "Setup or cleanup assistance - Helper sets up or cleans up; person completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-29
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54654-9 "Mood interview total severity score [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueQuantity = 3 '{score}'


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-28
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54653-1 "Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* dataAbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason#not-asked "Not Asked"


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-43
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95000-6 "Go up and down a curb/step - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-24
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95006-3 "Toilet transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-26
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95005-5 "Car transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-28
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95002-2 "Walk 150 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30914-8 "Dependent - Helper does all of the effort. Person does none of the effort to complete the activity. Or, the assistance of 2 or more helpers is required for the person to complete the activity."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-20
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95007-1 "Chair/bed-to-chair transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-22
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95004-8 "Walk 10 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30914-8 "Dependent - Helper does all of the effort. Person does none of the effort to complete the activity. Or, the assistance of 2 or more helpers is required for the person to complete the activity."


Instance: RT-HHA-SC-FU-120-OASIS-2E-Ob-Question-29
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95018-8 "Oral hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-25
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95003-0 "Walk 50 feet with two turns - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30914-8 "Dependent - Helper does all of the effort. Person does none of the effort to complete the activity. Or, the assistance of 2 or more helpers is required for the person to complete the activity."


Instance: RT-SNF-MOB-Adhoc-1D-Ob-Question-8
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-08T11:40:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89382-6 "Walk 50 feet with two turns - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-19
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54644-0 "Poor appetite or overeating in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-4
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95011-3 "Roll left and right - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-SC-DP-MDS-Discharge-ND-1E-Ob-Question-19
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95019-6 "Eating - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-Adhoc-1D-Ob-Question-2
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-08T11:40:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89395-8 "Sit to lying - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-8
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95010-5 "Sit to lying - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-Adhoc-1D-Ob-Question-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-08T11:40:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89399-0 "Roll left and right - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-MOB-Adhoc-1D-Ob-Question-6
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-08T11:40:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89390-9 "Toilet transfer - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-Adhoc-1D-Ob-Question-7
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-08T11:40:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89386-7 "Walk 10 feet - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-70
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89416-2 "Go up and down 4 steps - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-Adhoc-1D-Ob-Question-5
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-08T11:40:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89415-4 "Bed-to-chair transfer - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-SC-FU-60-OASIS-2D-Ob-Question-26
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95019-6 "Eating - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-19
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54644-0 "Poor appetite or overeating in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-18
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54643-2 "Feeling tired or having little energy in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10998-5 "2-6 days (several days)"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-15
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54640-8 "Trouble falling or staying asleep, or sleeping too much in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-14
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54639-0 "Feeling down, depressed or hopeless in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10999-3 "7-11 days (half or more of the days)"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-17
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54642-4 "Feeling tired or having little energy in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: RT-SNF-CSC-BIMS-1-Ob-Question-10
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54614-3 "Brief Interview for Mental Status - summary score [BIMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueQuantity = 9 '{score}'


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-11
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54636-6 "Little interest or pleasure in doing things in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-13
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54638-2 "Feeling down, depressed or hopeless in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-12
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54637-4 "Little interest or pleasure in doing things in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10999-3 "7-11 days (half or more of the days)"


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-36
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89398-2 "Roll left and right - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-17
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95006-3 "Toilet transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-14
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95007-1 "Chair/bed-to-chair transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-MOB-IP-MDS-IPA-1C-Ob-Question-11
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95008-9 "Sit to stand - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-52
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#94997-4 "Picking up object - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-38
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#85927-2 "Lying to sitting on side of bed - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-55
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95738-1 "Does the patient use a wheelchair/scooter during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-5
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95019-6 "Eating - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-7
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95018-8 "Oral hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-9
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95017-0 "Toileting hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-30
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95004-8 "Walk 10 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-36
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95002-2 "Walk 150 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-34
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95003-0 "Walk 50 feet with two turns - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-69
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89420-4 "Go up and down a curb/step - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-68
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89379-2 "Walking 10 feet on uneven surfaces - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-15
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95007-1 "Chair/bed-to-chair transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-65
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89385-9 "Walk 10 feet - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-64
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89412-1 "Car transfer - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-67
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89383-4 "Walk 150 feet - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-66
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89381-8 "Walk 50 feet with two turns - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-61
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89392-5 "Sit to stand - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-60
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#85927-2 "Lying to sitting on side of bed - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-63
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89390-9 "Toilet transfer - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-62
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89414-7 "Chair/bed-to-chair transfer - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-15
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95013-9 "Lower body dressing - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-SC-FU-60-OASIS-2D-Ob-Question-30
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95017-0 "Toileting hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-17
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95012-1 "Putting on/taking off footwear - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-DG-MDS-5-Day-NC-1B-Ob-Question-39
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89392-5 "Sit to stand - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-11
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95015-4 "Shower/bathe self - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-12
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95008-9 "Sit to stand - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-SC-Adhoc-1E-Ob-Question-4
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-17T14:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89397-4 "Shower/bathe self - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-SC-Adhoc-1E-Ob-Question-5
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-17T14:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89388-3 "Upper body dressing - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-SC-Adhoc-1E-Ob-Question-6
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-17T14:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89407-1 "Lower body dressing - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-SC-Adhoc-1E-Ob-Question-7
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-17T14:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89401-4 "Putting on and taking off footwear - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-DP-MDS-Discharge-ND-1D-Ob-Question-18
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-06T11:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95006-3 "Toilet transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-DC-OASIS-2F-Ob-Question-16
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T14:00:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95013-9 "Lower body dressing - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-TamaraRodriguez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-SC-Adhoc-1E-Ob-Question-2
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-17T14:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89405-5 "Oral hygiene - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-SC-Adhoc-1E-Ob-Question-3
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-17T14:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#57245-3 "Toileting hygiene - functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-11
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95012-1 "Putting on/taking off footwear - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-SC-AP-MDS-5-Day-NC-1B-Ob-Question-10
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95013-9 "Lower body dressing - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-HHA-SC-SOC-Perf-OASIS-2B-Ob-Question-13
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95014-7 "Upper body dressing - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-15
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54640-8 "Trouble falling or staying asleep, or sleeping too much in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-14
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54639-0 "Feeling down, depressed or hopeless in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10998-5 "2-6 days (several days)"


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-48
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#94999-0 "Go up and down 4 steps - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-DC-OASIS-2F-Ob-Question-12
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T14:00:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95015-4 "Shower/bathe self - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-TamaraRodriguez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-DC-OASIS-2F-Ob-Question-18
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T14:00:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95012-1 "Putting on/taking off footwear - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-TamaraRodriguez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-44
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95000-6 "Go up and down a curb/step - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-40
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95001-4 "Walking 10 feet on uneven surfaces - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-18
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89400-6 "Putting on and taking off footwear - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-SC-DC-OASIS-2F-Ob-Question-10
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T14:00:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95017-0 "Toileting hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-TamaraRodriguez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-CSC-BIMS-1-Ob-Question-9
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#52737-4 "Recall - bed [BIMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10125-5 "Yes, after cueing (\"a piece of furniture\")"


Instance: RT-SNF-CSC-BIMS-1-Ob-Question-8
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#52736-6 "Recall - blue [BIMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10978-7 "Yes, after cueing (\"a color\")"


Instance: RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-12
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89409-7 "Eating - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-CSC-BIMS-1-Ob-Question-6
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54609-3 "Temporal orientation - current day of the week [BIMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9960-1 "Correct"


Instance: RT-SNF-CSC-BIMS-1-Ob-Question-5
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#52733-3 "Temporal orientation - current month [BIMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10010-9 "Missed by 6 days to 1 month"


Instance: RT-SNF-CSC-BIMS-1-Ob-Question-4
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#52732-5 "Temporal orientation - current year [BIMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10008-3 "Missed by 1 year"


Instance: RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-16
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89387-5 "Upper body dressing - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-4
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95010-5 "Sit to lying - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-7
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95009-7 "Lying to sitting on side of bed - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-SC-Adhoc-1E-Ob-Question-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-17T14:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89410-5 "Eating - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-JenCadbury)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-13
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95008-9 "Sit to stand - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-31
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95003-0 "Walk 50 feet with two turns - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-46
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#94999-0 "Go up and down 4 steps - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-SC-Adhoc-1D-Ob-Question-2
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-09T12:20:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89405-5 "Oral hygiene - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-17
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95007-1 "Chair/bed-to-chair transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-42
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95000-6 "Go up and down a curb/step - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-Adhoc-1D-Ob-Question-3
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-08T11:40:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#85926-4 "Lying to sitting on side of bed - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-18
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54643-2 "Feeling tired or having little energy in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-33
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95003-0 "Walk 50 feet with two turns - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30910-6 "Setup or cleanup assistance - Helper sets up or cleans up; person completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-SC-Adhoc-1D-Ob-Question-3
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-09T12:20:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#57245-3 "Toileting hygiene - functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-SC-Adhoc-1D-Ob-Question-4
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-09T12:20:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89397-4 "Shower/bathe self - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-SC-DC-OASIS-2F-Ob-Question-14
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T14:00:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95014-7 "Upper body dressing - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-TamaraRodriguez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-32
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95003-0 "Walk 50 feet with two turns - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-SC-Adhoc-1D-Ob-Question-7
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-09T12:20:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89401-4 "Putting on and taking off footwear - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-72
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89402-2 "Picking up object - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-16
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95008-9 "Sit to stand - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-16
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54641-6 "Trouble falling or staying asleep, or sleeping too much in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10998-5 "2-6 days (several days)"


Instance: RT-SNF-SC-Adhoc-1D-Ob-Question-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-09T12:20:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89410-5 "Eating - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95011-3 "Roll left and right - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-SC-IP-MDS-IPA-1D-Ob-Question-27
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95018-8 "Oral hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-SC-IP-MDS-IPA-1D-Ob-Question-26
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95019-6 "Eating - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-SC-Adhoc-1D-Ob-Question-5
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-09T12:20:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89388-3 "Upper body dressing - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-MOB-Adhoc-1D-Ob-Question-4
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-08T11:40:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89393-3 "Sit to stand - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10073-7 "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-9
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95009-7 "Lying to sitting on side of bed - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-SC-Adhoc-1D-Ob-Question-6
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-09T12:20:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89407-1 "Lower body dressing - functional ability [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-58
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89398-2 "Roll left and right - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-59
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89394-1 "Sit to lying - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-57
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95738-1 "Does the patient use a wheelchair/scooter during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-HHA-MOB-DG-OASIS-2B-Ob-Question-71
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89418-8 "Go up and down 12 steps - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA28225-3 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-5
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95010-5 "Sit to lying - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-12
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54637-4 "Little interest or pleasure in doing things in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10998-5 "2-6 days (several days)"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-13
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54638-2 "Feeling down, depressed or hopeless in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: RT-SNF-PF-MDS-5-Day-NC-1A-Ob-Question-3
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#85072-7 "Stairs [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-17
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54642-4 "Feeling tired or having little energy in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-27
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54652-3 "Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-2
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95011-3 "Roll left and right - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-3
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95011-3 "Roll left and right - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-6
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95010-5 "Sit to lying - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-7
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95010-5 "Sit to lying - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-mental-functions-MOCA-1-Ob-Question-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#72172-0 "Total score [MoCA]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueQuantity = 18 '{score}'


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-27
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95004-8 "Walk 10 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-26
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54651-5 "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-25
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95005-5 "Car transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-20
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54645-7 "Poor appetite or overeating in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-21
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54646-5 "Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-22
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54647-3 "Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10998-5 "2-6 days (several days)"


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-21
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95006-3 "Toilet transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-mental-functions-MMSE-1-Ob-Question-31
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#72106-8 "Total score [MMSE]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueQuantity = 21 '{score}'


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-38
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95001-4 "Walking 10 feet on uneven surfaces - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-MOB-FU-120-OASIS-2D-Ob-Question-19
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-04T12:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95007-1 "Chair/bed-to-chair transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-28
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54653-1 "Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* dataAbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason#not-asked "Not Asked"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-29
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54654-9 "Mood interview total severity score [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueQuantity = 7 '{score}'


Instance: RT-SNF-SC-IP-MDS-IPA-1D-Ob-Question-28
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-11T15:45:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95017-0 "Toileting hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-PF-MDS-5-Day-NC-1A-Ob-Question-4
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#85073-5 "Functional cognition [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-19
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95005-5 "Car transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-53
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#94997-4 "Picking up object - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-10
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95008-9 "Sit to stand - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-13
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95007-1 "Chair/bed-to-chair transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-SC-DG-OASIS-2C-Ob-Question-23
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89387-5 "Upper body dressing - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-SNF-MOB-AP-MDS-5-Day-NC-1A-Ob-Question-16
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#95006-3 "Toilet transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-16
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54641-6 "Trouble falling or staying asleep, or sleeping too much in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA10998-5 "2-6 days (several days)"


Instance: RT-SNF-CSC-PHQ9-2-Ob-Question-23
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-03-23T10:15:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54648-1 "Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-LiaNguyen)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: RT-SNF-CSC-PHQ9-1-Ob-Question-11
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T16:30:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#54636-6 "Little interest or pleasure in doing things in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-SLP-MariaGonzalez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: RT-HHA-SC-DG-OASIS-2C-Ob-Question-25
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89400-6 "Putting on and taking off footwear - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-35
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95002-2 "Walk 150 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-37
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95001-4 "Walking 10 feet on uneven surfaces - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: RT-SNF-SC-DG-MDS-5-Day-NC-1C-Ob-Question-14
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-27T10:35:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#89389-1 "Toileting hygiene - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-OT-CheriseLangford)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-22
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95006-3 "Toilet transfer - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30910-6 "Setup or cleanup assistance - Helper sets up or cleans up; person completes activity. Helper assists only prior to or following the activity."


Instance: RT-SNF-PF-MDS-5-Day-NC-1A-Ob-Question-2
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#85071-9 "Indoor mobility (Ambulation) [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."


Instance: RT-SNF-PF-MDS-5-Day-NC-1A-Ob-Question-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-02-26T15:00:00-05:00"
* encounter = Reference(Encounter/RT-SNF-Encounter)
* code = http://loinc.org#85070-1 "Prior functioning.self care [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-DanielGranger)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* valueCodeableConcept = http://loinc.org#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."


Instance: RT-HHA-MOB-DC-OASIS-2E-Ob-Question-50
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T09:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#94998-2 "Go up and down 12 steps - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30911-4 "Supervision or touching assistance - Helper provides verbal cues and/or touching/steadying and/or contact guard assistance as person completes activity. Assistance may be provided throughout the activity or intermittently."


Instance: RT-HHA-SC-FU-60-OASIS-2D-Ob-Question-28
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95018-8 "Oral hygiene - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-DC-OASIS-2F-Ob-Question-6
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-08-24T14:00:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95019-6 "Eating - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-TamaraRodriguez)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-DG-OASIS-2C-Ob-Question-21
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89389-1 "Toileting hygiene - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-DG-OASIS-2C-Ob-Question-20
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89404-8 "Oral hygiene - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-FU-60-OASIS-2C-Ob-Question-28
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-06-02T10:50:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95004-8 "Walk 10 feet - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-ScottDumble)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-DG-OASIS-2C-Ob-Question-22
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89396-6 "Shower/bathe self - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-MOB-SOC-Perf-OASIS-2A-Ob-Question-1
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T17:30:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#95011-3 "Roll left and right - usual functional ability during assessment period [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-PT-LunaBaskins)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA30909-8 "Independent - Person completes the activity by themself with no assistance from a helper."


Instance: RT-HHA-SC-DG-OASIS-2C-Ob-Question-24
InstanceOf: Observation
Description: "An instance of Observation"
* subject = Reference(Patient/RT-Patient-BSJ)
* status = #final
* effectiveDateTime = "2021-04-07T16:10:00-05:00"
* encounter = Reference(Encounter/RT-HHA-Encounter)
* code = http://loinc.org#89406-3 "Lower body dressing - functional goal [CMS Assessment]"
* performer[+] = Reference(PractitionerRole/RT-PractitionerRole-RN-JacobHartwell)
* extension[http://hl7.org/fhir/StructureDefinition/event-location].valueReference = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* valueCodeableConcept = http://loinc.org#LA9983-3 "Independent - Patient completes the activity by themself with no assistance from a helper."


---

// File: input/fsh/examples/Patient.instances.fsh

Alias: Hl7FhirAdminGender = http://hl7.org/fhir/administrative-gender
Alias: Hl7V3MS = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: LANGVALSET = urn:ietf:bcp:47
Alias: Hl7V2TBL0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: Hl7V3ROLE = http://terminology.hl7.org/CodeSystem/v3-RoleCode


Instance: RT-Patient-BSJ
InstanceOf: USCorePatientProfile
Description: "Patient Betsy Smith-Johnson"
* active = true

* name.text = "Betsy Smith-Johnson"
* name.given = "Betsy"
* name.family = "Smith-Johnson"

* identifier.system = "http://example.org/identifiers/patient"
* identifier.value = "10A3D58WH1600"

* gender = Hl7FhirAdminGender#female

* birthDate = "1950-11-01"

* maritalStatus = Hl7V3MS#U

* telecom.system = #phone
* telecom.value = "210-222-1111"
* telecom.use = #mobile

* address.text = "111 Maple Ct, San Antonio, TX 78212"

* communication.language.coding = LANGVALSET#en
* communication.preferred = true

* contact[0].name.text = "Charles Johnson"
* contact[1].name.text = "Debra Johnson"
* contact[0].relationship[0].coding = Hl7V3ROLE#SONC
* contact[0].relationship[1].coding = Hl7V2TBL0131#C
* contact[0].relationship[2].coding = Hl7V3ROLE#GUARD
* contact[1].relationship[0].coding = Hl7V3ROLE#DAUC
* contact[0].address.text = "100 Montana St., San Antonio, TX 78203"
* contact[1].address.text = "333 W. Camden St., Baltimore, MD 21201"
* contact[0].telecom.system = #phone
* contact[1].telecom.system = #phone
* contact[0].telecom.value = "(210) 222-3333"
* contact[1].telecom.value = "(410) 444-5555"

* generalPractitioner = Reference(Practitioner/RT-Practitioner-JohnSmith)


---

// File: input/fsh/examples/Practitioner.instances.fsh

Alias: Hl7FhirAdminGender = http://hl7.org/fhir/administrative-gender

Instance: RT-Practitioner-DanielGranger
InstanceOf: Practitioner
Description: "Practitioner Daniel Granger"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1098326745"
* name.given = "Daniel"
* name.family = "Granger"
* name.text = "Daniel Granger"
* active = true
* gender = Hl7FhirAdminGender#male
* telecom.system = #phone
* telecom.value = "(210) 555 2071"
* address.text = "8100 Pinebrook Dr, San Antonio, TX, 78230"

Instance: RT-Practitioner-MariaGonzalez
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9876543210"
* name.given = "Maria"
* name.family = "Gonzalez"
* name.text = "Maria Gonzalez"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "(210) 555 7632"
* address.text = "8100 Pinebrook Dr, San Antonio, TX, 78230"

Instance: RT-Practitioner-CheriseLangford
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "3668788925"
* name.given = "Cherise"
* name.family = "Langford"
* name.text = "Cherise Langford"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "(210) 555 7632"
* address.text = "8100 Pinebrook Dr, San Antonio, TX, 78230"

Instance: RT-Practitioner-JenCadbury
InstanceOf: Practitioner
Description: "Practitioner Jen Cadbury"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1928374650"
* name.given = "Jen"
* name.family = "Cadbury"
* name.text = "Jen Cadbury"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "(210) 555 1871"
* address.text = "8100 Pinebrook Dr, San Antonio, TX, 78230"

Instance: RT-Practitioner-LiaNguyen
InstanceOf: Practitioner
Description: "Practitioner Lia Nguyen"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9018273645"
* name.given = "Lia"
* name.family = "Nguyen"
* name.text = "Lia Nguyen"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "(210) 555 7648"
* address.text = "8100 Pinebrook Dr, San Antonio, TX, 78230"

Instance: RT-Practitioner-JacobHartwell
InstanceOf: Practitioner
Description: "Practitioner Jacob Hartwell"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "4567123789"
* name.given = "Jacob"
* name.family = "Hartwell"
* name.text = "Jacob Hartwell"
* active = true
* gender = Hl7FhirAdminGender#male
* telecom.system = #phone
* telecom.value = "(210) 555 1889"
* address.text = "8810 Old Sky Harbor, San Antonio, TX 78242"

Instance: RT-Practitioner-LunaBaskins
InstanceOf: Practitioner
Description: "Practitioner Luna Baskins Jones"
//* identifier.system = "http://hl7.org/fhir/sid/us-npi"
//* identifier.value = "9098815676"
* name.given = "Luna"
* name.family = "Baskins"
* name.text = "Luna Baskins Jones"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "(210) 555 1871"
* address.text = "8810 Old Sky Harbor, San Antonio, TX 78242"

Instance: RT-Practitioner-ScottDumble
InstanceOf: Practitioner
Description: "Practitioner Scott Dumble"
//* identifier.system = "http://hl7.org/fhir/sid/us-npi"
//* identifier.value = "9098815676"
* name.given = "Scott"
* name.family = "Dumble"
* name.text = "Scott Dumble"
* active = true
* gender = Hl7FhirAdminGender#male
* telecom.system = #phone
* telecom.value = "(210) 555 1399"
* address.text = "8810 Old Sky Harbor, San Antonio, TX 78242"

Instance: RT-Practitioner-TamaraRodriguez
InstanceOf: Practitioner
Description: "Practitioner Tamara Rodriguez"
//* identifier.system = "http://hl7.org/fhir/sid/us-npi"
//* identifier.value = "4567123789"
* name.given = "Tamara"
* name.family = "Rodriguez"
* name.text = "Tamara Rodriguez"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "(210) 555 2089"
* address.text = "8810 Old Sky Harbor, San Antonio, TX 78242"

Instance: RT-Practitioner-NoraOlogist
InstanceOf: Practitioner
Description: "Practitioner Nora Ologist"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "3668788955"
* name.given = "Nora"
* name.family = "Ologist"
* name.text = "Nora Ologist"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "(210) 555 7655"
* address.text = "26022 Meadowlark Bay, San Antonio, TX 78260"

Instance: RT-Practitioner-JohnSmith
InstanceOf: Practitioner
Description: "Practitioner John Smith"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "2345678901"
* name.given = "John"
* name.family = "Smith"
* name.text = "John Smith"
* active = true
* gender = Hl7FhirAdminGender#male
* telecom.system = #phone
* telecom.value = "(210) 564 1389"
* address.text = "23 Garden Street, San Antonio, TX 78242"

// Organization instances
Instance: RT-PractitionerOrg-HappyNursing-SNF
InstanceOf: Organization
Description: "Organization Happy Skilled Nursing Facility"
* name = "Happy Skilled Nursing Facility"

Instance: RT-PractitionerOrg-SkyHarbor-HHA
InstanceOf: Organization
Description: "Organization Sky Harbor Home Health Services"
* name = "Sky Harbor Home Health Services"

// Location instances
Instance: RT-PractitionerOrgLoc-HappyNursing-SNF
InstanceOf: Location
Description: "Location Happy Skilled Nursing Facility"
* status = #active
* name = "Happy Skilled Nursing Facility"
* address.text  = "8100 Pinebrook Dr, San Antonio, TX, 78230"

Instance: RT-PractitionerOrgLoc-SkyHarbor-HHA
InstanceOf: Location
Description: "Location Sky Harbor Home Health Services"
* status = #active
* name = "Sky Harbor Home Health Services"
* address.text  = "8810 Old Sky Harbor, San Antonio, TX 78242"

---

// File: input/fsh/examples/PractitionerRole.instances.fsh

Alias: NUCC = http://nucc.org/provider-taxonomy
Alias: SNOMED = http://snomed.info/sct

Instance: RT-PractitionerRole-PT-DanielGranger
InstanceOf: PractitionerRole
Description: "PractitionerRole - Daniel Granger as PT at Happy Nursing"
* code = NUCC#225100000X
* code.coding.display = "Physical Therapist"
* specialty = SNOMED#394601005
* specialty.coding.display = "Clinical physiology"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-DanielGranger)
* organization = Reference(Organization/RT-PractitionerOrg-HappyNursing-SNF)
* location = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)

Instance: RT-PractitionerRole-SLP-MariaGonzalez
InstanceOf: PractitionerRole
Description: "PractitionerRole - Maria Gonzalez as SLP at Happy Nursing"
* code = NUCC#235Z00000X "Speech-Language Pathologist"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-MariaGonzalez)
* organization = Reference(Organization/RT-PractitionerOrg-HappyNursing-SNF)
* location = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)

Instance: RT-PractitionerRole-OT-CheriseLangford
InstanceOf: PractitionerRole
Description: "PractitionerRole - Cherise Langford as OT at Happy Nursing"
* code = NUCC#225X00000X "Occupational therapist"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-CheriseLangford)
* organization = Reference(Organization/RT-PractitionerOrg-HappyNursing-SNF)
* location = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)

Instance: RT-PractitionerRole-PT-JenCadbury
InstanceOf: PractitionerRole
Description: "PractitionerRole - Jen Cadbury as OT at Happy Nursing"
* code = NUCC#225X00000X
* code.coding.display = "Occupational Therapist"
* specialty = SNOMED#394601005
* specialty.coding.display = "Clinical physiology"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-JenCadbury)
* organization = Reference(Organization/RT-PractitionerOrg-HappyNursing-SNF)
* location = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)

Instance: RT-PractitionerRole-RN-LiaNguyen
InstanceOf: PractitionerRole
Description: "PractitionerRole - Lia Nguyen as RN at Happy Nursing"
* code = NUCC#163W00000X
* code.coding.display = "Registered Nurse"
* specialty = SNOMED#408443003
* specialty.coding.display = "General medical practice"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-LiaNguyen)
* organization = Reference(Organization/RT-PractitionerOrg-HappyNursing-SNF)
* location = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)

Instance: RT-PractitionerRole-RN-JacobHartwell
InstanceOf: PractitionerRole
Description: "PractitionerRole - Jacob Hartwell as Home Health RN at Sky Harbor HH"
* code = NUCC#163WH0200X
* code.coding.display = "Home Health Registered Nurse"
* specialty = SNOMED#408443003
* specialty.coding.display = "General medical practice"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-JacobHartwell)
* organization = Reference(Organization/RT-PractitionerOrg-SkyHarbor-HHA)
* location = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)

Instance: RT-PractitionerRole-PT-LunaBaskins
InstanceOf: PractitionerRole
Description: "PractitionerRole - Luna Baskins as PT at Sky Harbor HH"
* code = NUCC#225100000X
* code.coding.display = "Physical Therapist"
* specialty = SNOMED#394601005
* specialty.coding.display = "Clinical physiology"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-LunaBaskins)
* organization = Reference(Organization/RT-PractitionerOrg-SkyHarbor-HHA)
* location = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)

Instance: RT-PractitionerRole-PT-ScottDumble
InstanceOf: PractitionerRole
Description: "PractitionerRole - Scott Dumble as PT at Sky Harbor HH"
* code = NUCC#225100000X
* code.coding.display = "Physical Therapist"
* specialty = SNOMED#394601005
* specialty.coding.display = "Clinical physiology"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-ScottDumble)
* organization = Reference(Organization/RT-PractitionerOrg-SkyHarbor-HHA)
* location = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)


Instance: RT-PractitionerRole-RN-TamaraRodriguez
InstanceOf: PractitionerRole
Description: "PractitionerRole - Tamara Rodriguez as Home Health RN at Sky Harbor HH"
* code = NUCC#163WH0200X
* code.coding.display = "Home Health Registered Nurse"
* specialty = SNOMED#408443003
* specialty.coding.display = "General medical practice"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-TamaraRodriguez)
* organization = Reference(Organization/RT-PractitionerOrg-SkyHarbor-HHA)
* location = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)

Instance: RT-PractitionerRole-PCP-JohnSmith
InstanceOf: PractitionerRole
Description: "PractitionerRole - John Smith as PCP"
* code = NUCC#261QP2300X
* code.coding.display = "Primary Care Clinic/Center"
* specialty = SNOMED#419192003
* specialty.coding.display = "Internal medicine"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-JohnSmith)

Instance: RT-PractitionerRole-neurologist-NoraOlogist
InstanceOf: PractitionerRole
Description: "PractitionerRole - Nora Ologist as Neurologist"
* code = NUCC#2084N0400X
* code.coding.display = "Neurology Physician"
* specialty = SNOMED#394591006
* specialty.coding.display = "Neurology"
* active = true
* practitioner = Reference(Practitioner/RT-Practitioner-NoraOlogist)


---

// File: input/fsh/examples/ReassessmentTimepointsEncounter.instances.fsh

// Alias: PRATCLASSCS = http://hl7.org/fhir/us/pacio-reaessessment-timepoints/CodeSystem/timepoint-class-cs
// Alias: PRATENTITYCS = http://hl7.org/fhir/us/pacio-reaessessment-timepoints/CodeSystem/timepoint-entity-cs
// Alias: PRATSRVTYPECS = http://hl7.org/fhir/us/pacio-reaessessment-timepoints/CodeSystem/timepoint-service-type-cs
Alias: ICD10 = http://hl7.org/fhir/sid/icd-10-cm


Instance: RT-SNF-Encounter-Re-Assessment-Timepoint-1
InstanceOf: ReassessmentTimepointsEncounter
Description: "SNF-Stay MDS Re-Assessment Timepoint with Type Payer, period 2020-01-01 to 2020-01-13"
* identifier.system = "http://example.org/identifiers/patient"
* identifier.value = "MDS-Re-Assessment-Timepoint-1001"
* status = #finished
* class = TimepointClassCodeSystem#SNF "skilled nursing facility"
* type = TimepointEntityCodeSystem#payer "Payer"
* serviceType = TimepointServiceTypeCodeSystem#mds "Minimum Data Set"
* subject = Reference(Patient/RT-Patient-BSJ)
* episodeOfCare = Reference(EpisodeOfCare/RT-SNF-EpisodeOfCare)
* basedOn[0].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-SNF-ClinicalImpression-1-MDS-5-day)
* basedOn[0].display = "Assessment and impression at admission to SNF"
* basedOn[1].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-SNF-ClinicalImpression-2-MDS-IPA)
* basedOn[1].display = "Assessment and impression at interim assessment at SNF"
* participant[0].individual = Reference(Practitioner/RT-Practitioner-LiaNguyen)
* participant[1].individual = Reference(Practitioner/RT-Practitioner-JenCadbury)
* period.start = "2021-02-26"
* period.end = "2021-03-11"
* reasonCode = ICD10#I63.411 "Cerebral infarction due to embolism of right middle cerebral artery"
* location.location = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* serviceProvider = Reference(Organization/RT-PractitionerOrg-HappyNursing-SNF)
* partOf = Reference(Encounter/RT-SNF-Encounter)

Instance: RT-SNF-Encounter-Re-Assessment-Timepoint-2
InstanceOf: ReassessmentTimepointsEncounter
Description: "SNF-Stay MDS Re-Assessment Timepoint with Type Payer, period 2020-01-14 to 2020-02-10"
* identifier.system = "http://example.org/identifiers/patient"
* identifier.value = "MDS-Re-Assessment-Timepoint-2001"
* status = #finished
* class = TimepointClassCodeSystem#SNF "skilled nursing facility"
* type = TimepointEntityCodeSystem#payer "Payer"
* serviceType = TimepointServiceTypeCodeSystem#mds "Minimum Data Set"
* subject = Reference(Patient/RT-Patient-BSJ)
* episodeOfCare = Reference(EpisodeOfCare/RT-SNF-EpisodeOfCare)
* basedOn[0].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-SNF-ClinicalImpression-2-MDS-IPA)
* basedOn[0].display = "Assessment and impression at interim assessment at SNF"
* basedOn[1].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-SNF-ClinicalImpression-3-MDS-Discharge)
* basedOn[1].display = "Assessment and impression at discharge from SNF"
* participant[0].individual = Reference(Practitioner/RT-Practitioner-LiaNguyen)
* participant[1].individual = Reference(Practitioner/RT-Practitioner-JenCadbury)
* period.start = "2021-03-12"
* period.end = "2021-04-07"
* reasonCode = ICD10#I63.411 "Cerebral infarction due to embolism of right middle cerebral artery"
* location.location = Reference(Location/RT-PractitionerOrgLoc-HappyNursing-SNF)
* serviceProvider = Reference(Organization/RT-PractitionerOrg-HappyNursing-SNF)
* partOf = Reference(Encounter/RT-SNF-Encounter)

Instance: RT-HHA-Encounter-Re-Assessment-Timepoint-1
InstanceOf: ReassessmentTimepointsEncounter
Description: "HHA-Stay OASIS Re-Assessment Timepoint with Type Payer, period 2020-02-10 to 2020-04-09"
* identifier.system = "http://example.org/identifiers/patient"
* identifier.value = "OASIS-Re-Assessment-Timepoint-1001"
* status = #finished
* class = $V3ACTCODE#HH "home health"
* type = TimepointEntityCodeSystem#payer "Payer"
* serviceType = TimepointServiceTypeCodeSystem#oasis "Outcome and Assessment Information Set"
* subject = Reference(Patient/RT-Patient-BSJ)
* episodeOfCare = Reference(EpisodeOfCare/RT-HHA-EpisodeOfCare)
* basedOn[0].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-HHA-ClinicalImpression-1-OASIS-SOC)
* basedOn[0].display = "Assessment and impression at start of home health care"
* basedOn[1].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-HHA-ClinicalImpression-2-OASIS-FU-60)
* basedOn[1].display = "Assessment and impression after 60 days of home health care"
* participant[0].individual = Reference(Practitioner/RT-Practitioner-LunaBaskins)
* participant[1].individual = Reference(Practitioner/RT-Practitioner-JacobHartwell)
* participant[2].individual = Reference(Practitioner/RT-Practitioner-ScottDumble)
* period.start = "2021-04-07"
* period.end = "2021-06-01"
* reasonCode = ICD10#I69.30 "Unspecified sequelae of cerebral infarction"
* location.location = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* serviceProvider = Reference(Organization/RT-PractitionerOrg-SkyHarbor-HHA)
* partOf = Reference(Encounter/RT-HHA-Encounter)

Instance: RT-HHA-Encounter-Re-Assessment-Timepoint-2
InstanceOf: ReassessmentTimepointsEncounter
Description: "HHA-Stay OASIS Re-Assessment Timepoint with Type Payer, period 2020-04-10 to 2020-06-09"
* identifier.system = "http://example.org/identifiers/patient"
* identifier.value = "OASIS-Re-Assessment-Timepoint-2001"
* status = #finished
* class = $V3ACTCODE#HH "home health"
* type = TimepointEntityCodeSystem#payer "Payer"
* serviceType = TimepointServiceTypeCodeSystem#oasis "Outcome and Assessment Information Set"
* subject = Reference(Patient/RT-Patient-BSJ)
* episodeOfCare = Reference(EpisodeOfCare/RT-HHA-EpisodeOfCare)
* basedOn[0].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-HHA-ClinicalImpression-2-OASIS-FU-60)
* basedOn[0].display = "Assessment and impression after 60 days of home health care"
* basedOn[1].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-HHA-ClinicalImpression-3-OASIS-FU-120)
* basedOn[1].display = "Assessment and impression after 120 days of home health care"
* participant[0].individual = Reference(Practitioner/RT-Practitioner-LunaBaskins)
* participant[1].individual = Reference(Practitioner/RT-Practitioner-JacobHartwell)
* participant[2].individual = Reference(Practitioner/RT-Practitioner-ScottDumble)
* period.start = "2021-06-02"
* period.end = "2021-08-03"
* reasonCode = ICD10#I69.30 "Unspecified sequelae of cerebral infarction"
* location.location = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* serviceProvider = Reference(Organization/RT-PractitionerOrg-SkyHarbor-HHA)
* partOf = Reference(Encounter/RT-HHA-Encounter)

Instance: RT-HHA-Encounter-Re-Assessment-Timepoint-3
InstanceOf: ReassessmentTimepointsEncounter
Description: "HHA-Stay OASIS Re-Assessment Timepoint with Type Payer, period 2020-06-10 to 2020-06-29"
* identifier.system = "http://example.org/identifiers/patient"
* identifier.value = "OASIS-Re-Assessment-Timepoint-3001"
* status = #finished
* class = $V3ACTCODE#HH "home health"
* type = TimepointEntityCodeSystem#payer "Payer"
* serviceType = TimepointServiceTypeCodeSystem#oasis "Outcome and Assessment Information Set"
* subject = Reference(Patient/RT-Patient-BSJ)
* episodeOfCare = Reference(EpisodeOfCare/RT-HHA-EpisodeOfCare)
* basedOn[0].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-HHA-ClinicalImpression-3-OASIS-FU-120)
* basedOn[0].display = "Assessment and impression after 120 days of home health care"
* basedOn[1].extension[clinicalImpression].valueReference = Reference(ClinicalImpression/RT-HHA-ClinicalImpression-4-OASIS-DC)
* basedOn[1].display = "Assessment and impression prior to discharge from home health care"
* participant[0].individual = Reference(Practitioner/RT-Practitioner-LunaBaskins)
* participant[1].individual = Reference(Practitioner/RT-Practitioner-JacobHartwell)
* participant[2].individual = Reference(Practitioner/RT-Practitioner-ScottDumble)
* period.start = "2021-08-04"
* period.end = "2021-08-24"
* reasonCode = ICD10#I69.30 "Unspecified sequelae of cerebral infarction"
* location.location = Reference(Location/RT-PractitionerOrgLoc-SkyHarbor-HHA)
* serviceProvider = Reference(Organization/RT-PractitionerOrg-SkyHarbor-HHA)
* partOf = Reference(Encounter/RT-HHA-Encounter)



---

