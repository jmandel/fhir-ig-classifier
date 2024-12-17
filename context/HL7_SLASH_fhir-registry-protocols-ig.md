File: repos/HL7_SLASH_fhir-registry-protocols-ig/sushi-config.yaml

id: hl7.fhir.us.registry-protocols
canonical: http://hl7.org/fhir/us/registry-protocols
name: FHIRRegistryProtocolsIG
title: Protocols for Clinical Registry Extraction and Data Submission (CREDS) IG
status: active
version: 1.0.0
fhirVersion: 4.0.1
copyrightYear: 2022+
releaseLabel: STU1
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: cic
publisher:
  - name: HL7 International / Clinical Interoperability Council
  - url: http://www.hl7.org/Special/committees/cic
  - email: cic@lists.hl7.org
contact:
  - name: Clinical Interoperability Council
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/cic
  - name: David Pyke
    telecom:
      - system: email
        value: mailto:David.Pyke@pointclickcare.com

description: The IG demonstrates a process and workflow to support the needs of clinical registries to define how registry submissions can be automatically extracted from multiple data sources and combined into a registry submission.
jurisdiction: urn:iso:std:iso:3166#US "United States of America"
dependencies:
  hl7.fhir.us.core: 5.0.1
  hl7.fhir.uv.extensions: current
parameters:
  show-inherited-invariants: false
  path-expansion-params: '../../exp-params.json'
  jira-code: "fhir-registry-protocols-ig"
pages:
  index.md:
    title: Home
  introduction.md:
    title: Introduction and Scope
  overview.md:
    title: Overview
  use_cases.md:
    title: Use Cases
  Architecture_and_Implementation.md:
    title: Architecture
  security_considerations.md:
    title: Security Considerations
  actors.md:
    title: Actors
  technology_environment.md:
    title: Technology Environment
  transactions.md:
    title: Transactions
  transaction-CURD.md:
    title: Create/Update Registry Definitions
  transaction-SRRD.md:
    title: Search for and Retrieve Registry Submission Definitions
  transaction-CURS.md:
    title: Create/Update Registry Submission
  transaction-RRSD.md:
    title: Retrieve Registry Submission Data
  transaction-VRS.md:
    title: Validate Registry Submission
  conformance.md:
    title: IG Conformance
  profiles_and_extensions.md:
    title: Profiles and Extensions
  test_plan.md:
    title: Test Plan
  techanalysis.md:
    title: Implementation Guide Technical Analysis

menu:
  IG Home: index.html
  Contents: toc.html
  Introduction:
    Introduction and Scope: introduction.html
    Overview: overview.html
    Use Cases: use_cases.html
  Architecture & Implementation:
    Architecture: Architecture_and_Implementation.html
    Technology Environment: technology_environment.html
    Security Considerations: security_considerations.html
    Actors: actors.html
    Profiles and Extensions: profiles_and_extensions.html
  Transactions:
    Transactions: transactions.html
    Create or Update Registry Definitions: transaction-CURD.html
    Search for and Retrieve Registry Submission Definitions: transaction-SRRD.html
    Create or Update Registry Submission: transaction-CURS.html
    Retrieve Registry Submission Data: transaction-RRSD.html
    Validate Registry Submission: transaction-VRS.html
  Testing and Conformance:
    Test Plan: test_plan.html
    IG Conformance: conformance.html
  Artifact Index: artifacts.html
  Technical Analysis: techanalysis.html

resources:
  StructureDefinition/ExampleMap:
    exampleCanonical: http://hl7.org/fhir/us/registry-protocols/StructureDefinition/CREDSStructureDefinition
  StructureDefinition/ACCNCDRCathPCIDetailed:
    exampleCanonical: http://hl7.org/fhir/us/registry-protocols/StructureDefinition/CREDSStructureDefinition

---

// File: input/pagecontent/actors.md

<!--
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
-->

This section defines the actors in this implementation guide.

Figure 1.1-1 below shows the actors directly
involved in the CREDS
Profile and the relevant transactions between them.



<figure>
{% include ActorsAndTransactions.svg%}
<figcaption>Figure 3-1: CREDS Actor Diagram </figcaption>
</figure>
Table 3-1 lists the transactions for each actor directly involved in the CREDS Implementation Guide. To claim compliance with this guide, an actor shall
support all required transactions (labeled "R").


<table border="1" borderspacing="0" style='border: 1px solid black; border-collapse: collapse'>
<caption>
<b>
Table 3-1: CREDS Implementation Guide - Actors and Transactions
</b>
</caption>
<thead>
<tr class="odd" style='background: gray;'>
<th>Actors</th>
<th>Transactions</th>
<th>Optionality</th>
</tr>
</thead>
<tbody>
                
<tr>
                        
<td rowspan="2">
<a href="#registry-submission-definition-creator">Registry Submission Definition Creator</a>
</td>
                        
<td>
<a href='transaction-CURD.html'>
                        Create / Update Registry Definition [CURD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-SRRD.html'>
                        Search / Retrieve Registry Definition [SRRD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td rowspan="2">
<a href="#registry-submission-definition-repository">Registry Submission Definition Repository</a>
</td>
                        
<td>
<a href='transaction-CURD.html'>
                        Create / Update Registry Definition [CURD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-SRRD.html'>
                        Search / Retrieve Registry Definition [SRRD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td rowspan="4">
<a href="#registry-submitter">Registry Submitter</a>
</td>
                        
<td>
<a href='transaction-SRRD.html'>
                        Search / Retrieve Registry Definition [SRRD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-RRSD.html'>
                        Retrieve Registry Submission Data [RRSD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-CURS.html'>
                        Create / Update Registry Submission [CURS]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-VRS.html'>
                        Validate Registry Submission [VRS]</a>
</td>
<td align='center'>
                        O
</td>
</tr>
                    
<tr>
                        
<td rowspan="1">
<a href="#registry-submission-data-source">Registry Submission Data Source</a>
</td>
                        
<td>
<a href='transaction-RRSD.html'>
                        Retrieve Registry Submission Data [RRSD]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td rowspan="2">
<a href="#registry-submission-consumer">Registry Submission Consumer</a>
</td>
                        
<td>
<a href='transaction-CURS.html'>
                        Create / Update Registry Submission [CURS]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
<tr>
                        
<td>
<a href='transaction-VRS.html'>
                        Validate Registry Submission [VRS]</a>
</td>
<td align='center'>
                        R
</td>
</tr>
                    
</tbody>
</table>
        
        
### Actor Descriptions
The actors in this profile are described in more detail in the sections below.

#### Registry Submission Definition Creator


The
[Registry Submission Definition Creator](actors.html#registry-submission-definition-creator)
manages the definitional artifacts (logical model and transforms) supporting a clinical registry






##### Registry Submission Definition Creator Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-RSDC](CapabilityStatement-RSDC.html) Defines the requirements for the Registry Submission Definition Creator.
#### Registry Submission Definition Repository


The Registry Submission Definition Repository holds the definitions for the registry submission logical model
and the tranformations data conforming to that logical model to the submission format.






##### Registry Submission Definition Repository Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-RSDR](CapabilityStatement-RSDR.html) Defines the requirements for the Registry Submission Definition Repository.
#### Registry Submitter

The Registry Submitter is responsible for submitting data to a clinical registry.





##### Registry Submitter Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-RS](CapabilityStatement-RS.html) Defines the requirements for the Registry Submitter.
#### Registry Submission Data Source


The Registry Submission Data Source makes clinical data available to a registry submitter so that it can be
submitted to a registry.






##### Registry Submission Data Source Conformance

See the following CapabilityStatement resources for conformance requirements:
#### Registry Submission Consumer


The Registry Submission Consumer accepts and validates registry submissions on behalf of a clinical registry.






##### Registry Submission Consumer Conformance

See the following CapabilityStatement resources for conformance requirements:

---

// File: input/pagecontent/Architecture_and_Implementation.md

This guide uses structures that define the report in steps from the base profile on StructureDefinition, to the Logical Model that defines the information requirements, to the final StructureDefinition that outlays the individual record and the mappings to the final bundle required.  
### Major Components

The major design components described by this guide support the following functions:

1. Definition - gives an overall structure and requirements with references to major standards (FHIR, CDA, V2) and the relevant FHIR Profile (such as [USCore Patient](http://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html) or [International Patient Summary Patient](http://hl7.org/fhir/uv/ips/StructureDefinition-Patient-uv-ips.html)) for final submission.
3. Retrieval - fetching the data from the listed sources or from non-automated locations requiring human intervention
3. Submission creation - Entering patient data in the elements in the FHIR Resources and/or profiles that will comprise the submission Bundle.
5. Submission - use of a base CREDSBundle or other FHIR IGs such as [UDS+](http://fhir.drajer.com/site/index.html) or [MedMorph](https://hl7.org/fhir/us/medmorph/) for submission of the resulting Bundle.

The first four functions are described in more detail in the sections below.

### Definition

The **Registry Submission Definition Creator** executes the **Create/Update Registry Definition [CURD]** transaction and uses a tool to create a logical model in the form of a StructureDefinition that references the data needed, the possible locations in FHIR, CDA or other locations, including manual input, and the local profile necessary to store the information for submission.

The overall StructureDefinition will have each datapoint as an element definition with mappings to the data locations and the resource or profile for storage within the submission Bundle.

This information is given to the **Registry Submission Definition Repository** for storage and distribution.


### Retrieval

<figure>{%include workflow.svg %}
<figcaption>Workflow for Retrieval and Submission</figcaption>
</figure>

The **Registry Submitter** uses the **Search/Retrieve Registry Definition [SRRD]** transaction to find and retrieve the appropriate definition from the Repository,

Once the definition has been ingested, the Registry Submitter or the **Registry Submission Data Source** fetches the required data (the **Retrieve Registry Submission Data [RRSD]** transaction) from those locations in the mappings within the StructureDefinition logical model or from appropriate locations within the EHR or other relevant system.

### Submission Creation

The Registry Submitter executes the **Create / Update Registry Submission [CURS]** transaction, placing the data in the relevant resources/profiles and assembling the [CREDSSubmission](StructureDefinition-CREDSSubmission.html) Bundle or other FHIR IG mandated Bundle for submission.

Alternately, the **Registry Submission Consumer** may work with individual datapoints in the Registry Definition and assemble the Submission itself, rather than relying on an external actor.

The actor then **Validate Registry Submission [VRS]** through automatic and/or manual process as defined by organization policy to ensure completeness and correctness.

### Submission 

This may fall outside of this IG, if using MedMorph or another IG for submission requirements.

If not, then submission may use the following structure:
```
POST https://www.acc.org/fhir/Bundle?_format=application/fhir+xml HTTP/1.1
Host:example.org
<Bundle xmlns="http://hl7.org/fhir">
<!--CREDSSubmission metadata here, type MUST be collection -->
<!--First entry is MessageHeader with Submitter Information -->
<!--Second entry is Patient Resource -->
<!--Other entries with clinical data -->
</Bundle>
```

Submission responses may return only an http success code or may return a OperationOutcome resource depending on the needs of the submitter and registry and/or the requirements of the FHIR IG used for submission.

Submissions can be done on-demand by event-driving immediate submission or via a periodic submission.   Periodic (bulk) submissions can be managed by one of three ways:
1. a Bundle of type ```transaction``` comprised of Submission Bundles.  The receiver will accept or reject this Bundle of Bundles in total if one or more of the CREDSSubmission Bundles is or is not accepted.
2. a Bundle of type ```batch``` comprised of Submission Bundles.  The receiver will only reject individual CREDSSubmission Bundle entries within the Bundle of Bundles
3. Asynchronous submission of [NDJSON](https://www.hl7.org/fhir/nd-json.html) files of Submission Bundles.  This uses the ```$registryUpload``` Operation attaching the data to a Binary resource as an NDJSON file of individual CREDSSubmission Bundles. This use the [Asynchronous FHIR](https://www.hl7.org/fhir/async.html) with a 202 Accepted response with the Content-Location parameter holding the polling location for the NDJSON file of OperationOutcome resources for each line of the submission file.

The first two options are sufficient for low numbers of CREDSSubmission Bundles. For larger periodic submissions (hundreds or thousands of submissions), option 3 is optimal. All three can be managed using [Asynchronous FHIR](https://www.hl7.org/fhir/async.html) or via immediate response.

All three will result in OperationOutcome resources, outlining the accepting or rejecting of the individual submissions. Option 1 or 2 would result in a Bundle of type ```transaction-response``` or ```batch-response``` containing the OperationOutcomes, option 3 would create an NDJSON file of the OperationOutcome resources that would be polled for and retrieved.

An example flow for Option 3 would be as follows:

<figure>
{%include ndjsonflow.svg %}
<figcaption>Example Async Submission Flow</figcaption>
</figure>

It is suggested that if Option 3 is chosen, that the uploads be done in smaller sections within multiple files to allow for easier management of the upload (i.e., parallelism, re-uploading) and to prevent having to re-upload large files in the case of an upload transmission error.

---

// File: input/pagecontent/conformance.md

This page defines how Logical Models are structured and the expectations for elements CREDS profiles. It provides guidance on how a system may support the StructureDefinitions as profiled by CREDS to represent data requirements for registries. 

Note: the key words "MUST", "MUST NOT", "SHALL", "SHALL NOT", "SHOULD","SHOULD NOT", "MAY", and "OPTIONAL" in this IG are to be interpreted as described in  [IETF BCP 14](https://www.rfc-editor.org/info/bcp14).

### Conformance Artifacts

The [Profiles and Extensions](profiles_and_extensions.html) page lists the FHIR resource profiles as used in this Implementation Guide.  

The Profile elements consist of both Mandatory and Must Support elements. Mandatory elements are elements with an minimum cardinality of 1 (min=1).  The sections below illustrate how these elements are displayed and define the rules for interpreting profile elements and sub-elements labeled Mandatory and Must Support for requesters and responders.

This Implementation Guide follows [US Core requirements for Must Support elements](https://build.fhir.org/ig/HL7/US-Core/conformance-expectations.html#must-support-elements)

#### Logical Model Requirements

Each Repository's data requirements are expressed as a FHIR Logical Models using a CREDSStructureDefinition.  Each of these models will create a structure as a [Profile](https://www.hl7.org/fhir/profiling.html) of CREDSStructureDefinition.  This profile is what will be given to a Registry Submitter to use as a map to fetch and compile the data.

Each Logical Model will follow this basic structure:
**Publisher information:**
The following elements MUST be populated
* date: publishing date of the current version 
* publisher: The organization publishing the data requirements
* contact.name: Name of the primary contact for questions regarding the data map
* contact.telecom.system: either email and/or telephone

**Core Map Information**
The mapping elements MUST be populated as follows:
_Output_: location where data is entered into a resource or profile for inclusion into the Submission Bundle

    mapping.identity MUST be "Output"
    mapping.uri MUST be "http://hl7.org/fhir/us/core" 
    mapping.name MUST be "Submission Data Output location"

Each of the other mapping entries are OPTIONAL unless mapping to that standard.
If FHIR mapping is used in *any* mapping element, the following MUST be included in the root of the CREDSStructureDefinition:

    mapping.identity = "FHIR"
    mapping.uri = "http://fhir.hl7.org"
    mapping.name = "Fast Health Interoperability Resources"

If CDA mapping is used in *any* mapping element, the following MUST be included in the root of the CREDSStructureDefinition:

    mapping.identity = "CDA"
    mapping.uri = "http://build.fhir.org/ig/HL7/cda-core-2.0/"
    mapping.name = "Clinical Document Architecture"

If HL7 V2 message mapping is used in *any* mapping element, the following MUST be included in the root of the CREDSStructureDefinition:

    mapping.identity = "HL7V2"
    mapping.uri = "http://www.hl7.eu/refactored/index.html"
    mapping.name = "HL7 V2 Messages"

### Mapping Elements
Each data point in the Registry data map corresponds to an element in the logical model.  Elements may be categorized through the use of a BackboneElement which holds no value. Each data point is named with a [camelCase](https://en.wikipedia.org/wiki/Camel_case) version of a short data point name without whitespace or punctuation.

Each element has a base definition of cardinality (how many of that element there can be) a short name and a full definition.  The definition may give guidance on the data point's formatting or other requirements.  The element also gives specifics on the source mapping (i.e., where the data can be found)in zero or more standards-based formats (e.g., FHIR, CDA).  If no "Source Standard" mappings are supplied, it should be assumed that the data is only available through a manual process.


Each mapping MUST contain the following elements:
~~~~
mapping.identity: the "Source Standard" such as FHIR, CDA, HL7V2
mapping.language the mimetype of standard (e.g., application/fhir, application/hl7-sda+xml [CDA], application/edi-hl7v2 [HL7 V2])
mapping.map the FHIRPath to to be used as a query for the data 
~~~~

In addition to the source mapping, the destination element (Output) is structured the same as a FHIR Source Standard element that has the mapping point to the full path to the FHIR resource or Profile that will be used in the submission Bundle.
~~~~
mapping.identity: MUST be Output
mapping.language: MUST be application/fhir
mapping.map: the resource name (e.g., Observation) or the full path to the destination profile (e.g., http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient for the USCore Patient profile) 
~~~~
```mapping.map``` may have requirements for specific elements appended in FHIRPath  e.g., .where([element] = [value]) or have ValueSet requirements for response (e.g., Observation.valueCodeableConcept.code.memberOf([ValueSet])).  Where a ValueSet is appended, responses must be a selection from that ValueSet. This should only be specified for manual response entry.


Requirements for the Output resources are shown as .where() requirements.  If a certain element requires a specific value, that is shown as equivalence.  WHere choices are needed from a value set, those are shown as .memberOf(); this is most often with Manual entry requirements. If the manual value entered is of a certain type, that will be shown as .exists()

    e.g., Observation.where(code.coding.system='http://loinc.org' and code.coding.code=89440-2 and component.code.memberOf(RoseDyspneaQ) and component.valueCodeableConcept.memberOf(YesNo))
    or 
    Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424782 and valueBoolean.exists())
 

If an element has a minimum requirement, i.e., minimum cardinality of 1 then [Data Absent Reason](https://hl7.org/fhir/valueset-data-absent-reason.html) must be supplied via a resource element or via the [Data Absent Reason Extension](https://build.fhir.org/extension-data-absent-reason.html) if no response is available due to query failure and manual prompt gives no response.

#### Query ValueSet Binding  
Where needed, a Logical Model may have a binding to one or more ValueSets that outline the codes needed for a query. For example, a bound ValueSet with list of CPT, SNOMED and/or LOINC, etc. codes that would match a needed condition could be used to tightly specify a query.  This may allow for better targeted queries from the Submitter to its sources.  This can be specified best using the FHIRPath function memberOf() in the FHIR mapping.

### Submission Bundle
The [CREDS submission bundle](StructureDefinition-CREDSSubmission.html) is a FHIR Bundle of type "Collection".  
* The first entry in the Bundle MUST be a MessageHeader indicating who is submitting this data
* The second entry MUST be the [US Core Patient](https://build.fhir.org/ig/HL7/US-Core/StructureDefinition-us-core-patient.html) resource for the subject of the submission.

All other entries are dictated by the Registry data dictionary.

When using the CREDS submission bundle, the Resources for all Data Dictionary elements should have the element(s) path as a tag within the Resource .meta.tag elements.  This will allow the Registry to better map the Bundle entries back to the data dictionary.  As example:
```
 "tag": [
    {
      "system": "http://www.acc.org/CathPCIelement",
      "value": "discharge.discharge.datetime"
    },
    {
      "system": "http://www.acc.org/CathPCIelement",
      "value": "discharge.dischargeProvider
      },
    {
      "system": "http://www.acc.org/CathPCIelement",
      "value": "discharge.discharge.location"
    }
  ],
  ```
  This would be the entries for location, date and time and the provider within the Discharge encounter. 

### Submission Response
  A Submission using CREDS can have different result sets.  Using a single Bundle submission should receive a 201 Immediately with a CREDSOperationOutcome attached immediately.  Where the system is unable to respond to the validation in within a timeout requirement, following the [ASync Bulk Pattern](https://build.fhir.org/async-bulk.html#3.2.6.1.4).

  Where Submissions have been in bulk, a response of 202 Accepted should be returned if the Bundle is valid NDJSON with the URL for status requests.  Once the processing and validation is complete, a Bundle of CREDSOperationOutcomes should be placed, in NDJSON format at the status url for pickup.

---

// File: input/pagecontent/index.md

### About This Guide
The IG demonstrates a process and workflow to support the needs of clinical registries to define how registry submissions can be automatically extracted from multiple data sources and combined into a registry submission. It profiles the definitional resources needed to collect data and construct a registry submission using existing FHIR resource profiles.

An example, included in this Implementation Guide, is the American College of Cardiology CathPCI registry.  This registry uses a large (375+) number of items collected from a patient's current and historical record.  Currently that information has to be manually entered into a data form.  The CREDS system converts the Excel-based data structure into a FHIR StructureDefinition, with data elements that outline possible queries expressed as FHIRPath, that allow for automated query of the data that may be stored in FHIR, CDA or HL7 V2. The application can query for the data and then prompt for those data elements that were not found. This data is then bundled and uploaded, automatically, to the registry for verification. 

### Organization of This Guide
This guide is organized into four main sections:
1. [Introduction and Scope](introduction.html) - General introduction to the CREDS use case.
   1. [Overview](overview.html) - Provides an overview of the challenges this effort is trying to address.
   1. [Use Cases](use_cases.html) - Illustrates key use cases.

2. [Architecture](Architecture_and_Implementation.html) - Illustrates the conversion steps and transactions
   1. [Technology Environment](technology_environment.html) - Describes the technology environment for uninitiated.
   2. [Security Considerations](security_considerations.html) - Documents security concerns and mitigations.
   3. [Actors](actors.html) - Provides an overview of technical components.
   4. [Profiles](profiles_and_extensions.html) - FHIR Resource Profiles created by this IG.

3. [Transactions](transactions.html)
   1. [Search / Retrieve Registry Definition ](transaction-SRRD.html)
   2. [Create / Update Registry Definition ](transaction-CURD.html)
   3. [Retrieve Registry Submission Data ](transaction-RRSD.html)
   4. [Create / Update Registry Submission ](transaction-CURS.html)
   5. [Validate Registry Submission ](transaction-VRS.html)

4. [Test Plan](test_plan.html) - Testing for a conformant system.
   1. [Conformance](conformance.html) - Conformance requirements.

Click on any of the links above or refer to the [table of contents](toc.html), or if you are looking for a specific artifact, refer to the [index](artifacts.html).

You can also download:

* [this entire guide](full-ig.zip),
* the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
* the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on
[https://github.com/HL7/fhir-registry-protocols-ig](https://github.com/HL7/fhir-registry-protocols-ig).


### CREDS and Content IGs
CREDS focuses on providing healthcare provider organizations information on how to collect the data needed to submit to registries. This may include but is not limited to data sources such as EHRs, HIEs and other sources using FHIR, HL7 CDA documents, and HL7 V3 messages that are not available via FHIR APIs.

Other content IGs such as MedMorph and [UDS+](https://bphc.hrsa.gov/data-reporting/uds-training-and-technical-assistance/uds-frequently-asked-questions) specify the use of standard FHIR APIs to collect data from EHRs and potentially other systems and exchange with systems that can receive data in FHIR format. This IG can support multiple use cases through content IGs, including but not limited to case-based surveillance, registry reporting, national health care surveys, and research.

Use cases that need to obtain data not available via FHIR APIs should consider the use of CREDS. Once there is a CREDS FHIR bundle, the MedMorph or UDS+ profiles could be used for transport.

### Legal Statements
 While this implementation guide and the underlying FHIR are licensed as public domain under the FHIR license. The license page also describes rules for the use of the FHIR name and logo.

This guide includes examples making use of terminologies such as LOINC, SNOMED CT and RxNorm codes that have more restrictive licensing requirements. Implementers should make themselves familiar with licensing and any other constraints of terminologies, questionnaires, and other components used as part of their implementation process. In some cases, licensing requirements may limit the systems that data captured using certain Definitions may be shared with. 

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/introduction.md

### Introduction
This guide profiles how a registry says what needs to be sent, and how a healthcare provider organization can use that to automate the collection and formatting the data into a submission, conforming to registry or FHIR implementation guide defined profiles and protocols.
This guide describes the steps to:
* Define the data needed in a registry submission, relying on existing FHIR resources, profiles, and implementation guides
* Describe how this data can be collected and organized through FHIR APIs
* Transform the collected data into content suitable for a registry submission
* Use applicable FHIR operations defined in existing FHIR Implementation Guides to submit the content
* Coordinate with other systems to validate and refine registry submissions, as necessary.

The goal of this Implementation Guide is to advance the health IT ecosystem through the accelerated adoption of modern standards in the acquisition of clinical data for registry submission as well as the subsequent use of clinical data to improve care decisions.  Each definition of the needed data is done via a FHIR-defined Logical model that gives information on where the data may be located and what FHIR resource will be the repository for that data inside a submission Bundle resource.

 Protocols for Clinical Registry Extraction and Data Submission addresses the need to provide a common way to describe data collection and submission requirements for disease registries that enables a disease registry to:
1. Describe the data they wish to collect.
2. Define the constraints on the submission to indicate how data should be submitted.
3. Identifying the trigger events that might indicate a submission is needed.

And a healthcare provider organization to:
1. Identify sources of data that might appear within a disease registry submission.
2. Support processes to automatically extract data from information systems.
3. Support processes to transform extracted data into appropriate formats for a registry submission.

### Journey Map of Registry Process
The Journey from a patient discharge to data being merged into the Registry is complex.  There are several important steps and related challenges presented to create the final report and ingest it.  At each stage, challenges exist that increase the possibility of errors.

<div  style="float:left; margin: 10px;">
{%include journeymap.svg %}
</div>
Each record starts with the patient discharge event.  This creates the record and begins the review process for the data needed for submission.  The demographics are collected as part of the worklist addition process.

Once the worklist item is opened for data collection the Registry Documenter collects procedure information and begins the process of determining data elements and sources needed for completing the submission record.

Each data source, including manual sources, is reviewed and entered into the submission record.  This data may be collected through the EHR system, an EMS system or legacy systems which may or may not be connected to the EHR.  Unconnected systems may require transcription into the registry submission record.
Consultation with the Treatment team may be required to interpret or collect data that may not be part of the data entered during the treatment interval. Once complete, the data is packaged and added to the submission queue for immediate or periodic submission to the registry.

Upon receipt, the Registry Data Validator conducts a review to ensure that required information is included and that all information is coded and formatted as necessary for ingestion.  A report is generated with the outcomes of that review.  In case of partial data, the record may be held until an updated record is received.

Finally, the data is ingested into the registry for analysis.

#### Actors
__Registry Documenter__
Profile: 
* Not medically trained
* Medical terminology
* On-the-job awareness
^

* At beginning of encounter, I gather patient information to support consult and procedure.
* After an encounter is closed, I create a ‘report’ to send to the registry, I need to find the data
* I wish all the data was readily available, so I didn’t have to search all over the place 

__Treatment Team__
Profile: 
* Medically trained
* Clinically focused
^

* I enter clinical data associated with a specialty encounter
* I may not be aware of my impact on downstream data quality

__Registry Data Validator__
Profile: 
* HealthIT orientation: interoperability
* Data quality compliance against expected standards
* Reporting and Analytics
^

* I validate data received from reporting health centers in order to perform data analysis

---

// File: input/pagecontent/overview.md

The IG demonstrates a process and workflow to support the needs of clinical registries to define how registry submissions can be automatically extracted from multiple data sources and combined into a registry submission. It profiles the definitional resources needed to collect data and construct a registry submission using existing FHIR resource profiles.

The IG demonstrates a process and workflow to support the needs of clinical registries to define how registry submissions can be automatically extracted from multiple data sources and combined into a registry submission. It profiles the definitional resources needed to collect data and construct a registry submission using existing FHIR resource profiles.

This implementation guide uses the HL7 FHIR Standard to:

1. Enable Clinical Registries hosted by organizations such as the American College of Cardiology to communicate their registry data dictionaries and/or information models to others,
2. Enable registry business analysts to define where information in the data dictionary can be found in standard formats used to access routine information stored or communicated between provider information systems (e.g., EHR systems, national and regional health information networks (e.g., Carequality, CommonWell), and Health Information Exchanges,
3. Enable health IT systems to query for the necessary information resources hosting that data from various sources, and
4. Capture and transform that information into a collection of FHIR Resources that can be collected by the registry in submissions.

The process most commonly used by registries today is to define a registry submission format that maps to their data dictionary/information model, and to specify the appropriate vocabulary (e.g., ICD-10-CM, SNOMED CT, CPT, et cetera) allowed in coded fields to submitters.

Business analysts within submitting facilities coordinate with their HIT information systems teams to map data from these systems to populate a registry submission. Not all data may be available within the local HIT information systems, so the integration teams often also enable connections and queries through other health IT information systems to enable the abstractors to collect and copy data from those systems into the registry submission for a given patient.

The collected data is then transformed into a registry submission and communicated to the clinical registry.

The framework proposed in this guide is one in which:
1. The Clinical Registry's data dictionary/information model is communicated as a FHIR Logical Model using the StructureDefinition resource.
2. The logical model describes how the data dictionary maps to standards artifacts such as FHIR resources, CDA documents or HL7 V2 messages.
3. Health Information Systems are able to query for the necessary artifacts from multiple sources to extract registry data.
4. The information collected for a logical model can be transformed into a FHIR Bundle for submission.
5. The information models used for collection are based on those used by Certified EHR systems to enable the broadest support for interoperability.

## The Logical Model
A logical model is a collection of metadata that describes the data used by an information system. It may alternatively be known as an information model, data dictionary, or schema. The logical model providing the names, identifiers, data types, terminology and cardinalities for the collected information.

FHIR uses the [StructureDefinition](http://www.hl7.org/fhir/structuredefinition.html) resource to define logical models for various purposes. The StructureDefinition.kind field indicates how the StructureDefinition is used. When kind is set to "logical", the StructureDefinition describes a logical model. This is the same resource used to define the structure of FHIR Resources, profiles and extensions.

## Mapping logical model elements to Standardized Artifacts
A logical model can be mapped to models for other artifacts, such as a FHIR resource, CDA document or V2 message. The types of artifacts that the model is mapped to are described in the [StructureDefinition.mapping](http://www.hl7.org/fhir/structuredefinition-definitions.html#StructureDefinition.mapping) components.
The [identity](http://www.hl7.org/fhir/structuredefinition-definitions.html#StructureDefinition.mapping.identity) values for these mappings identify the mapping for later reference in the StructureDefinition. The uri for the mapping indicates the url defining the logical model for the mapped to model.
The mappings in this guide by convention use FHIR, CDA and HL7V2 as the identifiers for the HL7 FHIR R4, CDA Release 2.0, and HL7 Version 2 information models, and the URI references the specification that provides the StructureDefinition resources that have been created for these artifacts.

|Identifier|URL|
|---|---|
|FHIR| http://hl7.org/fhir |
|CDA| https://build.fhir.org/ig/HL7/cda-core-2.0/ |
|HL7V2| https://v2plus.hl7.org/ |

In expressing mappings to these standards, a clinical registry **shall** use the identifiers listed above when mapping from the standards they reference.

A StructureDefinition resource contains a collection [ElementDefinition](http://www.hl7.org/fhir/elementdefinition.html) components which describe the data elements in the logical model. Each ElementDefinition can map the field it describes to these information models by expressing a [mapping](http://www.hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.mapping) within the element definition. The identity of the element expresses the standard artifact used (e.g., FHIR, CDA, HL7V2). The computable language used to express mappings is text/fhirpath, as the [FHIRPath](http://hl7.org/fhirpath/) language can be used on any artifact for which there is a logical model.

The first part of the FHIRPath expression in the mapping.map field **shall** indicate the type of resource to be retrieved in the case of FHIR or V2 messages, since these artifacts have different models depending on the resource or message. It should always be ClinicalDocument in the case of resources retrieved from a CDA document.

Registries **may** identify additional mapping types for example, to support queries for specializations of CDA documents (e.g., C-CDA) or other standard models (e.g., X12 or NCPDP messages) from repositories supporting those formats.

### Canonical Information Models
When mapping from the Registries information model to HL7 FHIR, CDA or Version 2 resources, this guide defines the canonical model used for the target resource type (FHIR, CDA or V2) to ensure consistent mappings. Registries may also define mappings for other sources of information (e.g., older versions of FHIR), but the mapping identifiers for FHIR, CDA, and V2 are defined based on specific versions of these standards expected to be in use at the time of publication of this guide.


## Extracting Registry Data Using the Logical Model
To extract the necessary data for a registry submission using the logical model, one must have (in addition to the logical model), a patient associated with the data to be collected, a time period associated with the registry submission, and possibly other constraints. One must also have access to repositories which can be queried to obtain access to the standardized artifacts.

A naive data collection algorithm would collect all available information for the patient for each artifact type (FHIR, CDA, HL7 Version 2) during the relevant time period, and then filter and extract the results (using FHIRPath) to populate these elements into an expression of the logical model for the given patient.

More efficient algorithms certainly exist, for example, the data collection could identify a set of FHIR Queries to perform to collect the FHIR resources to populate the logical model, and then extract the relevant data elements from the performed FHIR queries, and then do the same for CDA and HL7 Version 2 content.

This guide does not require any specific implementation, but does **require** that the system behave as if a system performing the naive implementation would.  This allows for an implementable verification procedure given a test data set.

### Resolving Patient Identity
This implementation guide does not specify how patient matches are performed across different information systems. The IHE PIXm and PDQm profiles provide a FHIR API which enables information systems to resolve patient identities using HL7 FHIR. Each repository endpoint may require different patient matching strategies when it is configured. The registry submitter may need to identify policies for how to deal with cases where there is more than one patient match, or no matches.

### Querying for Artifacts
FHIRPath allows an implementation to define environment variables.  This guide defines three variables associated with the FHIRPath expressions used in mappings:

|Environment Variable|Description|
|---|---|
|%patient| This variable is a FHIR [Patient](http://www.hl7.org/fhir/R4/Patient.html) resource that describes the patient for whom the data is being collected as they are known to the collecting system.|
|%period| This variable is a FHIR [Period]() data type that defines the period associated with the registry activity. |
|%encounter| This variable is a FHIR [Encounter](http://www.hl7.org/fhir/R4/Encounter.html) resource that describes the relevant encounter associated with the registry activity. |
|%procedure| This variable is a FHIR [Procedure](http://www.hl7.org/fhir/R4/Procedure.html) resource that describes the relevant procedure associated with the registry activity. |
|%condition| This variable is a FHIR [Condition](http://www.hl7.org/fhir/R4/Condition.html) resource that describes the relevant condition associated with the registry activity. |

In addition, this guide also allows an implementation to define environment variables to reference value sets which are used in FHIRPath expressions by placing the name of the variable in the Output mapping.

## Mapping the Logical Model Content to a Submission Bundle
To submit data, the Registry Submission Creator actor must map the logical model to a collection of resources submitted using a Bundle resource. These mappings are defined using the Output mapping identifier. If the Registry logical model is defined as if it were a collection of FHIR Resources, then this transformation is simply a matter of copying the resources in the registry logical model to resource into the submission Bundle.

---

// File: input/pagecontent/profiles_and_extensions.md

The CREDS IG relies on simple profiles to the StructureDefinition resource to require the type of definition and the mandatory mapping fields.  These are used to create logical models for the data flow.  These logical models are expressed as StructureDefinitions with the submitted data being a StructureDefinition with assigned values for the profiles to assign the data to in the resulting reporting bundle.

Additionally, the logical model shows the mappings for FHIR, CDA and/or HL7 V2 segments.  With none of these mappings, it is assumed that the data will need to be manually sourced from other systems or data exchange methods. Such methods should be included but may not have a direct mapping path.

### Resource Profiles
[CREDSStructureDefinition](StructureDefinition-CREDSStructureDefinition.html): The StructureDefinition for use with CREDS mapping creating the base mappings for FHIR, CDA and V2.  

<!--
[CREDSElementDefinition](StructureDefinition-CREDSElementDefinition.html): ElementDefinition for use within CREDS that sets the base requirements for creating the logical model including required mappings and Profile for Bundle inclusion.
-->
For proper setup of the logical model, the mapping choices (FHIR, CDA, V2, Output)  have entries in the StructureDefinition mapping elements and each element mapping sub-elements, where appropriate  For example, if there are to be FHIR and Output mappings (Output is required) in the logical model then the base mapping elements needs to include both FHIR and Output entries.  Please see the [Registry example](StructureDefinition-ExampleMap.html) for an example structure. The Profile defines the four basic ones but more can be added as needed.  

[CREDSSubmission](StructureDefinition-CREDSSubmission.html): The Primary Bundle for use with CREDS.  This includes basic structure to outline how submitter and subject information is used.  If not using the CREDS Bundle for submission due to the requirements of another FHIR IG, you should refer to that FHIR IG for details.

---

// File: input/pagecontent/security_considerations.md

The logical models used for creating the submission definition will be, at most, [Business Sensitive](https://www.hl7.org/fhir/security.html#Business).  Most should be [Anonymous Read](https://www.hl7.org/fhir/security.html#Anonymous) as they represent data needs, not patient data.

The submission map will have specific patient identifying information including Name and/or MRN and should be classified [Patient Sensitive](https://www.hl7.org/fhir/security.html#Patient) and all interchange should use TLS 1.2 or greater encryption following [BCP 195](https://www.rfc-editor.org/info/bcp195).  The final Bundle of patient resources with completed patient data is [Patient Sensitive](https://www.hl7.org/fhir/security.html#Patient) and should be treated as should be done with PHI.

In some cases, the use of this data may require user authentication for purposes unrelated to the sensitivity of the data.

Given this assessment, the main Security Considerations are focused on:

* Assuring the data published is authentic to the organization publishing the data. That is that a consumer of the API can be given assurances that they are connecting to the authentic service endpoint they intended to connect to. This functionally is provided by common use of TLS with server sided authentication, commonly used in HTTPS.
* Taking care to validate that the server certificate validated and authenticated by TLS/HTTPS is the server intended to connect to. This is important management of client side certificate trust store.
* Assuring the data communicated is not modified in transit. The consumer of the API can be given assurances that they are retrieving exactly the data that is published. This functionality is provided by common use of TLS with integrity cyphers such as SHA256.
* Encrypting the data. When evaluated or supplemental data is not used, the confidentiality of the communicated data is not critical, but having it encrypted may prevent unidentified risks. Given that common use of TLS includes common use of encryption cyphers such as AES256, encryption is strongly recommended for consistency sake.
* The service may choose to request a security token be obtained to provide identity of the client. When a client token is provided the server will have more rich information to make an access control decision or record in an audit log.
* The client and server should record an Audit Log event such as FHIR [AuditEvent](http://hl7.org/fhir/auditevent.html). 
#### Local Access Control
The maintenance of the data on the client or server is not specified in this implementation guide. Security considerations must be applied in systems design to assure that the data is appropriately protected from inappropriate use and modification. 
#### Purpose Of Use restrictions

Given that the use-case for this implementation guide is to support Registry reporting, the use of client context PurposeOfUse of [PUBHLTH](http://hl7.org/fhir/R4/v3/ActReason/cs.html#v3-ActReason-PUBHLTH) is recommended. 

The use of data returned by this API should be limited to the Public Health use-case. Re-purposing the data for other uses, such as re-identification, should be considered a violation of the API intention.

The setting of the PurposeOfUse to PUBHLTH may be addressed through policy agreements and thus not communicated in the API communications.

---

// File: input/pagecontent/techanalysis.md

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Dependency Table
{% include dependency-table.xhtml %}

### Globals Table
{% include globals-table.xhtml %}

---

// File: input/pagecontent/technology_environment.md

Information for submission may come from myriad sources, some of which are available for automatic retrieval, such as:

* Electronic Health Record (EHR) systems
* Departmental Systems
* Emergency Department (ED) systems
* ICU and/or Nursing Central Monitoring systems (or stations)
* Labor and Delivery systems
* Laboratory Information Systems (LIS)
* Picture Archival and Communication Systems (PACS)
* Radiology Information Systems (RIS)
* Clinical Data Repository (CDR)
* Care Management Systems
* Electronic Laboratory Reporting Solutions

Other systems, such as EMS, may require manual intervention or interface development to convert the data to CREDS data sumission format.
<figure>
{%include datasources.svg %}
<figcaption>Data Sources Structure</figcaption>
</figure>
### Systems Having Clinical Data

Systems in this category have access to some or all of the health records (problems, medications, lab results, procedures, etc.) for a patient, and  provide information as well as associated problems, patient demographics, and patient acuity (severity of illness) data.

#### EHR Systems

Comprehensive Hospital EHR solutions may include the capabilities of the other systems listed above, or may be integrated with other systems but not have direct access to all data available to the other systems. Even when those capabilities are available in the comprehensive EHR solution, other solutions may still be chosen by the facility for a variety of reasons (features, cost, legacy, etc.).

#### Clinical Data Repository
A Clinical Data Repository may be used by a facility as a master source of data collecting information from multiple systems including the EHR and departmental systems.

#### Departmental Systems

Departmental systems are specialized EHR systems facilitating the operations of a departmental setting. Several departmental systems are described in more detail in subsections below.

##### Emergency Department Systems

Emergency department systems are simply specialized EHR systems that facilitate patient care in an emergency room setting. They may also support or be integrated with central monitoring solutions enabling ED staff to monitor the status of patients.

##### Labour and Delivery Systems

Labour and Delivery systems are another form of specialized EHR system that facilitate treatment of mothers about to give birth in the hospital. They generally support the ongoing monitoring of the pregnant mother, and integrate with specialized equipment used to support newborn delivery (e.g., fetal heart rate monitors, infusion pumps used for anesthesia, et cetera), as well as routine charting while a mother is still in labor but not yet ready to deliver.

##### ICU/Central Monitoring Systems

These systems bring real-time data from the EHR together with a variety of monitoring and treatment equipment, often to provide clinical decision support for patients needing intensive ongoing treatment and monitoring. As a result, these systems have awareness of the use of medical equipment (e.g., ventilators), patient acuity, disease progression, as well as the in-use status of ICU beds, and perhaps the total bed capacity of an ICU (but not necessarily the availability).

##### Laboratory Information Systems (LIS)

These systems are used to track and control incoming laboratory orders, to manage laboratory automation equipment, and to manage outgoing reports on orders. They have some access to patient clinical and demographic data, usually enough to facilitate the interpretation of the laboratory test, but may not have access to more data. Some data available in an LIS might be used to assess patient acuity, but the EHR would be a better source of this assessment.

##### Picture Archival and Communication Systems (PACS)

Within an imaging center or department, the PACS provides storage for images generated from various imaging procedures (CT, MRI, Ultrasound, X-Ray, et cetera) and in some solutions, the diagnostic reports (structured or unstructured) that are generated based on those images.

These systems will generally be aware of the types of imaging studies performed, the patients on whose behalf these studies were performed, the dates and times of the procedure, and possibly the results (in structured reports) of the study.

##### Radiology Information Systems (RIS)

These RIS is a departmental systems used in imaging centers or departments to manage the imaging workflow in the department. The RIS provide a means by which imaging procedures are scheduled and coordinated across the necessary equipment, personnel (e.g., imaging technicians, reading radiologists), and patients, and through which orders are received, and results transmitted back to ordering providers.

These systems will generally be aware of the procedures being requested, the results of those procedures, the dates and times of those procedures, and the number and types of procedures performed on behalf of different parties (e.g., ordering physicians and organizations).

##### Care Management Systems

Care Management Systems support referral and transition between the hospital and follow-up care environments (e.g., post-acute care, rehabilitation referrals), or referrals to other types of care (tertiary care from ED, referral to behavioral health, etc.). These are often used to support discharge/transfer planning, and may also involve coordination with payers to ensure treatment will be covered at the referred to facility.

---

// File: input/pagecontent/test_plan.md

Overall this guide provides an API between multiple [actors](actors.html), and [transaction](transactions.html) types. The tests that can be executed are limited to the functionality of the system-under-test (SUT), and the transaction type it implements. Where that SUT has a specific function, it can be tested.
### Test Plan

The following is the overall test plan for this guide:

1. Unit Tests – automation of testing of the actor alone using a simulator and validator tool
2. Integration Tests – automation of actors interacting through defined communications mechanism

Tests below support testing for the following actors:
* Registry Submission Definition Creator: manages the definitional artifacts 
* Registry Submission Definition Repository: holds the definitions for the registry submission 
* Registry Submitter: responsible for submitting data to a clinical registry
* Registry Submission Data Source: makes clinical data available to a registry submitter
* Registry Submission Consumer: accepts and validates registry submissions

### Actor Requirements

#### Registry Submission Definition Creator
The Registry Submission Definition Creator creates abd manages the definitional artifacts (logical model and transforms) supporting a clinical registry

**Registry Submission Definition Creator Preparation**

 * Be able to produce a CREDS Logical Model StructureDefinition resource for the example Registry Data Dictionary as per Create / Update Registry Definition 
 * The Logical Model should conform to the CREDSStructureDefinition as a profile.  
 * The Logical Model should conform to the registry Data Dictionary
 * Where possible, all elements in the Model should have mappings to at least one standard (e.g., FHIR) and must include Output mappings.
 * If you’re doing the publication scenario, have a client that can do a fetch of the Logical Model.
 
**Registry Submission Definition Creator Success Criteria**

* For the publication scenario, the StructureDefinition based on the sample data dictionary is created at a Registry Submission Definition Repository system

#### Registry Submission Definition Repository

**Registry Submission Definition Repository Preparation**
 * Be able to search for a CREDS Logical Model StructureDefinition resource from the Registry Submission Definition Creator RESTful endpoint as per [Search / Retrieve Registry Definition](transaction-SRRD.html) 
 * Be able to fetch the discovered resource and store it locally. 

 **Registry Submission Definition Repository Success Criteria**
* The example CREDS StructureDefinition is found in a list of available resources
* The example CREDS StructureDefinition is retrieved and made available to the Registry Submitter

#### Registry Submitter

**Registry Submitter Preparation**

* Be able to fetch the CREDS Logical Model StructureDefinition resource from the Registry Submission Definition Repository
* Be able to decode the Logical Model and  FHIRPath mapping definitions
* Retrieve the appropriate data as listed in the FHIRPath mapping definitions from the Registry Submission Data Source(s)
* Provide a manual interface or process for data points without a source standard
* Create the Submission Bundle as defined in the CREDS Logical Model StructureDefinition and populated it as defined in the Output mappings
* Push the completed Bundle to the Registry Submission Consumer

 **Registry Submitter Success Criteria**
* The data model is retrieved from the repository
* Data is mapped from the model to data sources
* Data is successfully retrieved from the Registry Submission Data Source(s)
* The submission Bundle is created and populated correctly according to the data model
* The submission Bundle is pushed to the Registry Submission Consumer and validates correctly using a FHIR-based transaction using content FHIR Implementation Guides (such as MedMorph or UDS+) or using a CREDS Submission Bundle.

#### Registry Submission Consumer

**Registry Submission Consumer Preparation**
* A RESTful endpoint exists to accept the submission Bundle
* Be able to fetch the CREDS Logical Model StructureDefinition resource from the Registry Submission Definition Repository or Registry Submission Definition Creator
* Be able to read and parse the CREDS Logical Model StructureDefinition Output section
* Be able to validate a submission Bundle against the CREDS Logical Model StructureDefinition Output section

### Integration Test Scenarios

The following integration test scenarios included in this test plan:
1. Logical Model/StructureDefinition creation
1. Retrieval of the StructureDefinition
1. Parsing of the Logical Model mappings
1. Data retrieval
1. Submission Bundle creation
1. Submission Bundle submission

#### Logical Model/StructureDefinition Creation

##### Preconditions
* The Registry has a defined Data Dictionary for data used within the registry
* The Registry fully supports the CREDSStructureDefinition profile
* Each element in the Data Dictionary has been mapped to a relevant profile both on input and output
* The Registry has a RESTful endpoint that enables search and retrieval of the CREDSStructureDefinition Logical Models

##### Test Steps
1. Using a manual or tooled process, the data dictionary mappings are transferred to a CREDSStructureDefinition profile creating the Logical Model of all data points needed for registry ingestion
2. The Logical Model is validated to have all elements including source standard mappings (where possible) and Output resource or profile element mappings including full path to any referenced FHIR Profiles

* A fully complete Logical Model is created with both input and output mappings
* The Logical Model validates as a FHIR CREDSStructureDefinition profile
* The FHIR endpoint responds successfully to a search query
* The FHIR endpoint responds successfully to a retrieve request  

#### Retrieval of the StructureDefinition

##### Preconditions
* The Registry has implemented the Registry Submission Definition Creator or Registry Submission Definition Repository actor
* The Logical Model/StructureDefinition is available for search and retrieval
* The Registry Submission Definition Repository or Registry Submitter have knowledge of the model to be retrieved (identifier, name, etc.)

##### Test Steps
1. Using a FHIR query, the actor queries for available logical models, e.g., :
```GET https://www.acc.org/fhir/StructureDefinition?kind=logical&_profile=CREDSStructureDefinition```
2. Using a manual or automated process, the actor requests the appropriate logical model from those listed in the search results Bundle e.g.,:
```GET https://www.acc.org/fhir/StructureDefinition/CathPCI?_format=application/fhir+xml```
   * Note: the _format can be either fhir+xml, fhir+json or unspecified depending on preference of the actor


##### Success Criteria
* The actor has the list of available logical models in a searchset Bundle as a response to Test Step 1. 
* The actor has a validated StructureDefinition of the Logical model of the Registry data dictionary.

#### Parsing of the Logical Model mappings

##### Preconditions
* The Registry Submitter has a valid CREDS StructureDefinition of the Logical model of the Registry data dictionary

##### Test Steps
1. The Submitter validates that all the logical model mappings have FHIRPath map elements for each Logical model data dictionary elements for the expected Source Standard where such mappings exist
1. Each FHIRPath validates as a correct statement for each of the desired Source Standard documents
1. The Submitter validates that all Logical model data dictionary elements have an Output mapping with the required information and FHIRPath map elements
1. The Submitter validates that all the FHIRPath statements are able to be converted to a FHIR query

##### Success Criteria
* All data dictionary elements validate with complete and valid information in each of the mappings
* All data dictionary elements have correct and valid Output mappings
* All FHIRPath mappings are convertible to a FHIR query

#### Data retrieval

##### Preconditions
* The Registry Submitter has a valid Logical Model and is able to correctly parse it
* A method to input the manually created data (i.e., data not mapped to a standard) has been created or emulated

##### Test Steps
1. Determine the Registry Submission Data Source for each element, including those that will require manual input
2. Identify the data dictionary mappings for each Source Standard and their relationship to FHIR, CDA and/or V2 sources available
2. Have unmapped data entered as appropriate
3. De-duplicate the mapping sources so that no FHIR resource/CDA document/V2 message is queried more than once
3. Construct FHIR queries necessary to retrieve the relevant FHIR resources/CDA documents/V2 messages
4. Execute the queries from the previous step

##### Success Criteria
* All relevant FHIR resources/CDA documents/V2 messages have been retrieved

#### Submission Bundle creation

##### Preconditions
* The Registry Submitter has successfully retrieved all necessary data
* All Output mappings are valid and needed Profiles are supported (e.g., US Core, other FHIR IG Profiles)

##### Test Steps
* Transfer data from the retrieved resources/documents/messages according to the Source Standards mapping and Output mapping requirements.
* Create a MessageHeader resource with all relevant submitter information
* Ensure the Patient resource exists and is based on the US Core Patient Profile
* Assemble a Bundle that conforms to the CREDSSubmission Bundle profile or the appropriate FHIR Implementation Guide requirements
* Validate the Bundle and all entries

##### Success Criteria
* A fully validated Submission Bundle exists

---

// File: input/pagecontent/transaction-CURD.md

### Scope
Create / Update Registry Definition (CURD)
This section describes the CURD of this guide. This transaction is used by the Registry Submission Definition Creator and Registry Submission Definition Repository actors.


### Actors Roles
<figure>
{% include transaction-CURD-uc.svg%}
<figcaption>Figure 2.2-1: Create / Update Registry Definition Use Case Diagram </figcaption>
</figure>
<table border='1' borderspacing='0'>
<caption><b>Table 2.2-1: Actor Roles</b></caption>
<thead><tr><th>Actor</th><th>Role</th></tr></thead>
<tbody><tr><td><a href="actors.html#registry-submission-definition-creator">Registry Submission Definition Creator</a></td>
<td>Creates or updates registry submission definition resources
</td>
</tr>
        <tr><td><a href="actors.html#registry-submission-definition-repository">Registry Submission Definition Repository</a></td>
<td>Stores registry submission definition resources
</td>
</tr>
        
</tbody>
</table>
### Referenced Standards
<table border='1' borderspacing='0'>
<caption><b>Table 3.71.3-1: Referenced Standards</b></caption>
<thead><tr><th>Standard</th><th>Name</th></tr></thead>
<tbody>
            <tr><td>FHIR-R4</td><td><a href='http://www.hl7.org/FHIR/R4'>HL7 FHIR Release 4</a></td></tr>
        
            <tr><td>RFC-7230</td><td><a href='https://ietf.org/rfc/rfc7230.html'>Hypertext Transfer Protocol - HTTP/1.1</a></td></tr>
        
</tbody>
</table>
### Interactions
        
<figure>
{% include transaction-CURD-seq.svg%}
<figcaption>Figure 2.2-2: Create / Update Registry Definition Interactions </figcaption>
</figure>
#### Create or Update Registry Submission Definition

##### Trigger Event - Create or Update Registry Submission Definition
A Registry Submission Definition Creator requests creation of a new Submission Definition. A logical model or submission transformation created by the Registry Submission Definition Creator is communicated to the Registry Submission Definition Source.

##### Message Semantics
The [Registry Submission Definition Creator](actors.html#registry-submission-definition-creator) creates or updates StructureDefinition on the [Registry Submission Definition Repository](actors.html#registry-submission-definition-repository).

The following are general requirements of the interaction.

Formats 
<table class='grid'>
<thead><tr>
<th>Parameter</th><th>Cardinality</th><th>
Registry Submission Definition Repository Expectation</th><th>
Registry Submitter Expectation</th>
</tr></thead>
<tbody>
<tr>
<td>
_format=application/fhir+xml|application/fhir+json
</td>
<td>
0..1
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>
<tr>
<td>
_format=xml|json|text/xml|application/json|application/xml|application/xml+fhir|application/json+fhir
</td>
<td>
0..1
</td>
<td>
<b>should</b>
</td>
<td>
<b>should not</b>
</td>
</tr>
<tr>
<td>
Accept:=application/fhir+xml|application/fhir+json
</td>
<td>
0..1
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>
<tr>
<td>
Accept:=xml|json|text/xml|application/json|application/xml|application/xml+fhir|application/json+fhir
</td>
<td>
0..1
</td>
<td>
<b>should</b>
</td>
<td>
<b>should not</b>
</td>
</tr>
</tbody>
</table>

###### create
The Registry Submission Definition Repository <b>shall</b> support the FHIR create operation on  the StructureDefinition resource.
###### update
The Registry Submission Definition Repository <b>shall</b> support the FHIR update operation on  the StructureDefinition resource.
##### Expected Actions
###### Create StructureDefinition Resource
The
[Registry Submission Definition Creator](actors.html#registry-submission-definition-creator)
creates or updates StructureDefinition resources and sends them to a
[Registry Submission Definition Repository](actors.html#registry-submission-definition-repository)

The [Registry Submission Definition Creator](actors.html#registry-submission-definition-creator) performs the FHIR create
operation on the StructureDefinition resource at a [Registry Submission Definition Repository](actors.html#registry-submission-definition-repository).

#### Accept Resource
The [Registry Submission Consumer](actors.html#registry-submission-consumer) reports success using 200 OK, 201 Created, or 202 Accepted to indicate a successful create or update.

### Conformance
See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-RSDC-CURD](CapabilityStatement-RSDC-CURD.html) Defines the requirements for the Registry Submission Definition Creator implementing the Create / Update Registry Definition transaction.
* [CapabilityStatement-RSDR-CURD](CapabilityStatement-RSDR-CURD.html) Defines the requirements for the Registry Submission Definition Repository implementing the Create / Update Registry Definition transaction.

---

// File: input/pagecontent/transaction-CURS.md

### Scope
Create / Update Registry Submission (CURS)
This section describes the CURS of this guide. This transaction is used by the Registry Submitter and Registry Submission Consumer actors.

### Actors Roles
<figure>
{% include transaction-CURS-uc.svg%}
<figcaption>Figure 2.4-1: Create / Update Registry Submission Use Case Diagram </figcaption>
</figure>
<table border='1' borderspacing='0'>
<caption><b>Table 2.4-1: Actor Roles</b></caption>
<thead><tr><th>Actor</th><th>Role</th></tr></thead>
<tbody><tr><td><a href="actors.html#registry-submitter">Registry Submitter</a></td>
<td>Creates or updates a registry submission
</td>
</tr>
        <tr><td><a href="actors.html#registry-submission-consumer">Registry Submission Consumer</a></td>
<td>Stores a registry submission
</td>
</tr>
        
</tbody>
</table>
### Referenced Standards
<table border='1' borderspacing='0'>
<caption><b>Table 3.71.3-1: Referenced Standards</b></caption>
<thead><tr><th>Standard</th><th>Name</th></tr></thead>
<tbody>
            <tr><td>FHIR-R4</td><td><a href='http://www.hl7.org/FHIR/R4'>HL7 FHIR Release 4</a></td></tr>
        
            <tr><td>RFC-7230</td><td><a href='https://ietf.org/rfc/rfc7230.html'>Hypertext Transfer Protocol - HTTP/1.1</a></td></tr>
        
</tbody>
</table>
### Interactions
        
<figure>
{% include transaction-CURS-seq.svg%}
<figcaption>Figure 2.4-2: Create / Update Registry Submission Interactions </figcaption>
</figure>
#### 

### Conformance
See the following CapabilityStatement resources for conformance requirements:


---

// File: input/pagecontent/transaction-RRSD.md

### Scope
Retrieve Registry Submission Data (RRSD)
This section describes the RRSD of this guide. This transaction is used by the Registry Submitter and Registry Submission Data Source actors.


### Actors Roles
<figure>
{% include transaction-RRSD-uc.svg%}
<figcaption>Figure 2.3-1: Retrieve Registry Submission Data Use Case Diagram </figcaption>
</figure>
<table border='1' borderspacing='0'>
<caption><b>Table 2.3-1: Actor Roles</b></caption>
<thead><tr><th>Actor</th><th>Role</th></tr></thead>
<tbody><tr><td><a href="actors.html#registry-submitter">Registry Submitter</a></td>
<td>Searches for or reads registry submission data
</td>
</tr>
        <tr><td><a href="actors.html#registry-submission-data-source">Registry Submission Data Source</a></td>
<td>Responds to requests to searches for or reads registry submission data
</td>
</tr>
        
</tbody>
</table>
### Referenced Standards
<table border='1' borderspacing='0'>
<caption><b>Table 3.71.3-1: Referenced Standards</b></caption>
<thead><tr><th>Standard</th><th>Name</th></tr></thead>
<tbody>
            <tr><td>FHIR-R4</td><td><a href='http://www.hl7.org/FHIR/R4'>HL7 FHIR Release 4</a></td></tr>
        
            <tr><td>RFC-7230</td><td><a href='https://ietf.org/rfc/rfc7230.html'>Hypertext Transfer Protocol - HTTP/1.1</a></td></tr>
        
</tbody>
</table>
### Interactions
        
<figure>
{% include transaction-RRSD-seq.svg%}
<figcaption>Figure 2.3-2: Retrieve Registry Submission Data Interactions </figcaption>
</figure>
#### 

### Conformance
See the following CapabilityStatement resources for conformance requirements:


---

// File: input/pagecontent/transaction-SRRD.md

### Scope
Search/Retrieve Registry Definition (SRRD) 
This section describes the SRRD of this guide. This transaction is used by the Registry Submission Definition Creator, Registry Submission Definition Repository and Registry Submitter actors.


### Actors Roles
<figure>
{% include transaction-SRRD-uc.svg%}
<figcaption>Figure 2.1-1: Search / Retrieve Registry Definition Use Case Diagram </figcaption>
</figure>
<table border='1' borderspacing='0'>
<caption><b>Table 2.1-1: Actor Roles</b></caption>
<thead><tr><th>Actor</th><th>Role</th></tr></thead>
<tbody><tr><td><a href="actors.html#registry-submission-definition-creator">Registry Submission Definition Creator</a></td>
<td>Searches for or reads existing registry submission definition resources
</td>
</tr>
        <tr><td><a href="actors.html#registry-submission-definition-repository">Registry Submission Definition Repository</a></td>
<td>Responds to requests to search or read for registry submission definition resources
</td>
</tr>
        <tr><td><a href="actors.html#registry-submitter">Registry Submitter</a></td>
<td>Searches for or reads existing registry submission definition resources
</td>
</tr>
        
</tbody>
</table>
### Referenced Standards
<table border='1' borderspacing='0'>
<caption><b>Table 3.71.3-1: Referenced Standards</b></caption>
<thead><tr><th>Standard</th><th>Name</th></tr></thead>
<tbody>
            <tr><td>FHIR-R4</td><td><a href='http://www.hl7.org/FHIR/R4'>HL7 FHIR Release 4</a></td></tr>
        
            <tr><td>RFC-7230</td><td><a href='https://ietf.org/rfc/rfc7230.html'>Hypertext Transfer Protocol - HTTP/1.1</a></td></tr>
        
</tbody>
</table>
### Interactions
        
<figure>
{% include transaction-SRRD-seq.svg%}
<figcaption>Figure 2.1-2: Search / Retrieve Registry Definition Interactions </figcaption>
</figure>
#### Search Request


##### Message Semantics
The client sends a query using an HTTP GET or POST transaction to
the server requesting information on available resources.

The following are general requirements of the interaction.
<ol>
<li>
Formats
<div>
All servers **shall** support the _format parameter for any read or search and the standard values
defined by FHIR for JSON and XML output. This value **shall** override the Accept: header when present in an exchange.
Servers **shall** also support the Accept: header, and **shall** support any value in Accept: that can be given to _format
for consistency. Servers are also free to support other output formats (e.g. turtle as defined in the base FHIR
specifications, or other formats such as CSV which might be easier for clients to present or use). Servers
should support other commonly used expressions representing JSON or XML outputs without complaint, including
those specified in prior releases (e.g., the DSTU2 application/xml+fhir or application/json+fhir types that
have since changed in R4).

</div>

<table class='grid'>
<thead><tr>
<th>Parameter</th><th>Cardinality</th><th>
Registry Submission Definition Repository Expectation</th><th>
Registry Submitter Expectation</th>
</tr></thead>
<tbody>

<tr>
<td>
_format=application/fhir+xml|application/fhir+json
</td>
<td>
0..1
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>

<tr>
<td>
_format=xml|json|text/xml|application/json|application/xml|application/xml+fhir|application/json+fhir
</td>
<td>
0..1
</td>
<td>
<b>should</b>
</td>
<td>
<b>should not</b>
</td>
</tr>

<tr>
<td>
Accept:=application/fhir+xml|application/fhir+json
</td>
<td>
0..1
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>

<tr>
<td>
Accept:=xml|json|text/xml|application/json|application/xml|application/xml+fhir|application/json+fhir
</td>
<td>
0..1
</td>
<td>
<b>should</b>
</td>
<td>
<b>should not</b>
</td>
</tr>
</tbody>
</table>
        
</li>
<li>
<div>
The server **shall** support the _count parameter for queries. Servers **should** use a default
value for _count if no value is provided to avoid server overloading. This guide recommends a default value of 100 based on
existing implementation experience.

</div>

<table class='grid'>
<thead><tr>
<th>Parameter</th><th>Cardinality</th><th>
Registry Submission Definition Repository Expectation</th><th>
Registry Submitter Expectation</th>
</tr></thead>
<tbody>

<tr>
<td>
_count
</td>
<td>
0..1
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>
</tbody>
</table>
        
</li>
<li>
Include Support
<div>
To reduce transaction overhead, a client system may wish to retrieve all the resources referenced by the
selected resource when obtaining it. This can be accomplished by using a search with an _id parameter, combined with
_include=*.

This guide does not further specify specify resource includes beyond required support for *.
Systems that support _include generally handle _include=*, in fact, in some ways it is easier to implement
than more selective _include operations. Recursive includes can be a source of server loading issues, as
an incorrectly implemented include with recursive includes could wind up retrieving far more data than
the client expected. Thus, these are not recommended.

</div>

<table class='grid'>
<thead><tr>
<th>Parameter</th><th>Cardinality</th><th>
Registry Submission Definition Repository Expectation</th><th>
Registry Submitter Expectation</th>
</tr></thead>
<tbody>

<tr>
<td>
_include=*
</td>
<td>
0..1
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>

<tr>
<td>
_include:iterate
</td>
<td>

</td>
<td>
<b>should not</b>
</td>
<td>
<b>should not</b>
</td>
</tr>
</tbody>
</table>
        
</li>
</ol>
###### read
A client **shall** be able to read individual resources that are returned or referenced within resources
returned by a query.

The Registry Submission Definition Repository <b>shall</b> support the FHIR read operation on  the StructureDefinition resource.
###### search
A client system **shall** be able to retrieve the definition data by publisher, condition, description or
other text.
The Registry Submission Definition Repository <b>shall</b> support the FHIR search operation on  the StructureDefinition resource with the following parameters.
<ol>
<li>
Search by _id
<div>
A client **shall** be able to read individual resources that are returned or referenced within resources
returned by a query. Client systems may save resource references for future use, retrieving them later as
needed. To reduce overhead, a client system may also wish to retrieve the resources referenced by the
selected resource. This can be accomplished by using a search with an _id parameter, combined with _include=*

</div>

<table class='grid'>
<thead><tr>
<th>Parameter</th><th>Cardinality</th><th>
Registry Submission Definition Repository Expectation</th><th>
Registry Submitter Expectation</th>
</tr></thead>
<tbody>

<tr>
<td>
_id
</td>
<td>
1..*
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>
</tbody>
</table>
        
</li>
<li>
Search by url, name, identifier, publisher, condition or status
<div>
A client **shall** be able to query for resources by url, name, identifier, publisher, condition or status.

</div>

<table class='grid'>
<thead><tr>
<th>Parameter</th><th>Cardinality</th><th>
Registry Submission Definition Repository Expectation</th><th>
Registry Submitter Expectation</th>
</tr></thead>
<tbody>

<tr>
<td>
url
</td>
<td>
0..*
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>

<tr>
<td>
name
</td>
<td>
0..*
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>

<tr>
<td>
identifier
</td>
<td>
0..*
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>

<tr>
<td>
publisher
</td>
<td>
0..*
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>

<tr>
<td>
context
</td>
<td>
0..*
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>

<tr>
<td>
status
</td>
<td>
0..*
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>
</tbody>
</table>
        
</li>
<li>
Search by Date
<div>
A client **shall** be able to search by relevant dates,
e.g., the date of _lastUpdate of a previously retrieved resource to see if it has changed (e.g., in cases
where data needs to be refreshed).

All date searches **shall** allow a range to be specified, but need not allow more than one range. Approximate
ranges are not required
to be supported because server support for these is not commonly available, nor implemented in readily reproducable
fashions (the definition of an approximate date can have different meanings for different servers). Simple eq, le, lt,
ge, and gt **should** be sufficient to specify date ranges.

</div>

<table class='grid'>
<thead><tr>
<th>Parameter</th><th>Cardinality</th><th>
Registry Submission Definition Repository Expectation</th><th>
Registry Submitter Expectation</th>
</tr></thead>
<tbody>

<tr>
<td>
_lastUpdated
</td>
<td>
0..2
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>

<tr>
<td>
date
</td>
<td>
0..2
</td>
<td>
<b>shall</b>
</td>
<td>
<b>shall</b>
</td>
</tr>
</tbody>
</table>
        
</li>
<li>
Search by Text or Code
<div>
A client system **should** be able to search for definition resources
associated with by text within the definition. This requirement can be met through support of the
<a href='http://hl7.org/fhir/search.html#text'>_text or _content search parameters</a>.

</div>

<table class='grid'>
<thead><tr>
<th>Parameter</th><th>Cardinality</th><th>
Registry Submission Definition Repository Expectation</th><th>
Registry Submitter Expectation</th>
</tr></thead>
<tbody>

<tr>
<td>
_text
</td>
<td>
0..*
</td>
<td>
<b>should</b>
</td>
<td>
<b>should</b>
</td>
</tr>

<tr>
<td>
_content
</td>
<td>
0..*
</td>
<td>
<b>should</b>
</td>
<td>
<b>should</b>
</td>
</tr>
</tbody>
</table>
        
</li>
</ol>
### Conformance
See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-RSDR-SRRD](CapabilityStatement-RSDR-SRRD.html) Defines the requirements for the Registry Submission Definition Repository implementing the Search / Retrieve Registry Definition transaction.
* [CapabilityStatement-RS-SRRD](CapabilityStatement-RS-SRRD.html) Defines the requirements for the Registry Submitter implementing the Search / Retrieve Registry Definition transaction.

---

// File: input/pagecontent/transaction-VRS.md

### Scope
Validate Registry Submission (VRS)
This section describes the VRS of this guide. This transaction is used by the Registry Submitter and Registry Submission Consumer actors.

### Actors Roles
<figure>
{% include transaction-VRS-uc.svg%}
<figcaption>Figure 2.5-1: Validate Registry Submission Use Case Diagram </figcaption>
</figure>
<table border='1' borderspacing='0'>
<caption><b>Table 2.5-1: Actor Roles</b></caption>
<thead><tr><th>Actor</th><th>Role</th></tr></thead>
<tbody><tr><td><a href="actors.html#registry-submitter">Registry Submitter</a></td>
<td>Requests validation of a registry submission
</td>
</tr>
        <tr><td><a href="actors.html#registry-submission-consumer">Registry Submission Consumer</a></td>
<td>Validates a registry submission
</td>
</tr>
        
</tbody>
</table>
### Referenced Standards
<table border='1' borderspacing='0'>
<caption><b>Table 3.71.3-1: Referenced Standards</b></caption>
<thead><tr><th>Standard</th><th>Name</th></tr></thead>
<tbody>
            <tr><td>FHIR-R4</td><td><a href='http://www.hl7.org/FHIR/R4'>HL7 FHIR Release 4</a></td></tr>
        
            <tr><td>RFC-7230</td><td><a href='https://ietf.org/rfc/rfc7230.html'>Hypertext Transfer Protocol - HTTP/1.1</a></td></tr>
        
</tbody>
</table>
### Interactions
        
<figure>
{% include transaction-VRS-seq.svg%}
<figcaption>Figure 2.5-2: Validate Registry Submission Interactions </figcaption>
</figure>

---

// File: input/pagecontent/transactions.md

<!--
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
-->
The transactions in this profile are summarized in the sections below.
### Search / Retrieve Registry Definition
Search for and Retrieve Registry Submission Definitions


For more details see the detailed [transaction description](transaction-SRRD.html)
### Create / Update Registry Definition


For more details see the detailed [transaction description](transaction-CURD.html)
### Retrieve Registry Submission Data
Search for and Retrieve Registry Submission Data


For more details see the detailed [transaction description](transaction-RRSD.html)
### Create / Update Registry Submission


For more details see the detailed [transaction description](transaction-CURS.html)
### Validate Registry Submission


For more details see the detailed [transaction description](transaction-VRS.html)


---

// File: input/pagecontent/use_cases.md

The following use cases were used to identify the requirements addressed by this guide:
* [Define Submission](#define-submission)
* [Search and Read Submission Definition](#search-and-read-submission-definition)
* [Get Patient List](#get-patient-list)
* [Get or Refresh Patient Data](#get-or-refresh-patient-data)


These are described in more detail in the sections that follow.
 
### Define Submission
The registry authority defines the logical data model which describes the data to be submitted to the registry,
and the transforms
which format data stored using that model to the appropriate submission format.

This use case is supported by the following
* Actors
  - [Registry Submission Definition Creator](actors.html#registry-submission-definition-creator)
  - [Registry Submission Definition Repository](actors.html#registry-submission-definition-repository)
* Transactions
  - [Create / Update Registry Definition](transaction-CURD.html)
* Content
  - [Registry Logical Model](StructureDefinition-CREDSStructureDefinition.html)
#### Define Submission Process Flow 

<figure>
{% include usecase-DefineSubmission-processflow.svg%}
<figcaption>Figure 2.3.1.1-1: Define Submission Process Flow </figcaption>
</figure>
1. Create submission definition artifacts.
   The Registry Authority creates the definition and submits it to a repository for distribution to registry
submitters.

   
1. Update submission definition artifacts.
   A previously submitted definition artifact is updated to add data submission requirements.

   
1. Create submission definition transformation.
   The Registry Authority creates a transformation and submits it to a repository for distribution to registry
submitters.

   
1. Update submission definition transformation.
   The Registry Authority updates a transformation and submits it to a repository for distribution to registry
submitters.

   
### Search and Read Submission Definition
A registry submitter reads the logical data model and transformations.

This use case is supported by the following
* Actors
  - [Registry Submission Definition Repository](actors.html#registry-submission-definition-repository)
  - [Registry Submitter](actors.html#registry-submitter)
* Transactions
 - [Search/Retrieve Registry Definition](transaction-SRRD.html)

#### Search and Read Submission Definition Process Flow 

<figure>
{% include usecase-ReadSubmission-processflow.svg%}
<figcaption>Figure 2.3.1.2-1: Search and Read Submission Definition Process Flow </figcaption>
</figure>
1. Search submission definition artifacts.
   The Registry Submitter searches for registry submission definitions and transforms contained in a repository

   
1. Read submission definition artifacts.
   The Registry Submitter reads the registry submission definitions and transforms contained in a repository
necessary for creating a submission.

### Get Patient List
A registry submitter retrieves the list of patients for whom a submission must be created.

This use case is supported by the following
* Actors
  - [Registry Submission Definition Creator](actors.html#registry-submission-definition-creator)
  - [Registry Submitter](actors.html#registry-submitter)
  - [Registry Submission Data Source](actors.html#registry-submission-data-source)
* Transactions
  - [Retrieve Registry Submission Data](transaction-RRSD.html)
#### Get Patient List Process Flow 
The registry submitter identifies patients for whom a submission is necessary.

<figure>
{% include usecase-GetPatientList-processflow.svg%}
<figcaption>Figure 2.3.1.4-1: Get Patient List Process Flow </figcaption>
</figure>

   
### Get or Refresh Patient Data
Collect new or refresh existing patient data from data sources.

This use case is supported by the following
* Actors
  - [Registry Submitter](actors.html#registry-submitter)
  - [Registry Submission Data Source](actors.html#registry-submission-data-source)
* Transactions
  - [Retrieve Registry Submission Data](transaction-RRSD.html)
#### Get or Refresh Patient Data Process Flow 
<figure>
{% include usecase-GetOrRefreshPatientData-processflow.svg%}
<figcaption>Figure 2.3.1.3-1: Get or Refresh Patient Data Process Flow </figcaption>
</figure>
1. Identify data sources to query for new, missing or stale data
   
1. Retrieve data from selected data sources
   
1. Extract essential data for submission from the selected data sources
   
1. Store essential data for later submission.
   


---

// File: input/CREDS-overview.md

The IG demonstrates a process and workflow to support the needs of clinical registries to define how registry submissions can be automatically extracted from multiple data sources and combined into a registry submission. It profiles the definitional resources needed to collect data and construct a registry submission using existing FHIR resource profiles.

This implementation guide used the HL7 FHIR Standard to:

1. Enable Clinical Registries hosted by organizations such as the American College of Cardiology to communicate their registry data dictionaries and/or information models to others,
2. Enable registry business analysts to define where information in the data dictionary can be found in standard formats used to access routine information stored or communicated between provider information systems (e.g., EHR systems, national and regional health information networks (e.g., Carequality, CommonWell), and Health Information Exchanges,
3. Enable health IT systems to query for the necessary information resources hosting that data from various sources, and
4. Capture and transform that information into a collection of FHIR Resources that can be collected by the registry in submissions.

The process most commonly used by registries today is to define a registry submission format that maps to their data dictionary/information model, and to specify the appropriate vocabulary (e.g., ICD-10-CM, SNOMED CT, CPT, et cetera) allowed in coded fields to submitters.

Business analysts within submitting facilities coordinate with their HIT information systems teams to map data from these systems to populate a registry submission. Not all data may be available within the local HIT information systems, so the integration teams often also enable
connections and queries through other health IT information systems to  enable the abstractors to collect and copy data from those systems into the registry submission for a given patient.

The collected data is then transformed into a registry submission and communicated to the clinical registry.

The framework proposed in this guide is one in which:
1. The Clinical Registry's data dictionary/information model is communicated as a FHIR Logical Model using the StructureDefinition resource.
2. The logical model describes how the data dictionary maps to standards artifacts such as FHIR resources, CDA documents or HL7 V2 messages.
3. Health Information Systems are able to query for the necessary artifacts from multiple sources to extract registry data.
4. The information collected for a logical model can be transformed into a FHIR Bundle for submission.

## The Logical Model
A logical model is a collection of metadata that describes the data used by an information system. It may alternatively be known as an information model, data dictionary, or schema. The logical model providing the names, identifiers, data types, terminology and cardinalities for the collected information.

FHIR uses the [StructureDefinition](http://www.hl7.org/fhir/structuredefinition.html) resource to define logical models for various purposes. The StructureDefinition.kind field indicates how the StructureDefinition is used. When kind is set to "logical", the StructureDefinition describes a logical model. This is the same resource used to define the structure of FHIR Resources, profiles and extensions.

## Mapping logical model elements to Standardized Artifacts
A logical model can be mapped to models for other artifacts, such as a CDA document or V2 message. The types of artifacts that the model is mapped to are described in the [StructureDefinition.mapping](http://www.hl7.org/fhir/structuredefinition-definitions.html#StructureDefinition.mapping) components.
The [identity](http://www.hl7.org/fhir/structuredefinition-definitions.html#StructureDefinition.mapping.identity) values for these mappings identify the mapping for later reference in the StructureDefinition. The uri for the mapping indicates the url defining the logical model for the mapped to model.
The mappings in this guide by convention use FHIR, CDA and HL7V2 as the identifiers for the HL7 FHIR R4, CDA Release 2.0, and HL7 Version 2 information models, and the URI references the specification that provides the StructureDefinition resources that have been created for these artifacts.

|Identifier|URL|
|---|---|
|FHIR| http://hl7.org/fhir |
|CDA| https://build.fhir.org/ig/HL7/cda-core-2.0/ |
|HL7V2| https://v2plus.hl7.org/ |

A StructureDefinition resource contains a collection [ElementDefinition](http://www.hl7.org/fhir/elementdefinition.html) components which describe the data elements in the logical model. Each ElementDefinition can map the field it describes to these information models by expressing a [mapping](http://www.hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.mapping) within the element definition. The identity of the element expresses the standard artifact used (e.g., FHIR, CDA, HL7V2). The computable language used to express mappings is text/fhirpath, as the [FHIRPath](http://hl7.org/fhirpath/) language can be used on any artifact for which there is a logical model.

The first part of the FHIRPath expression in the mapping.map field should indicate the type of resource to be retrieved in the case of FHIR or V2 messages, since these artifacts have different models depending on the resource or message. It should always be ClinicalDocument in the case of resources retrieved from a CDA document.

Registries may identify additional mapping types for example, to support queries for specializations of CDA documents (e.g., C-CDA) or other standard models (e.g., X12 or NCPDP messages) from repositories supporting those formats.

For more detail on mapping, see the sections below:
* [Mapping a Logical Model to FHIR](mapping-to-fhir.html)
* [Mapping a Logical Model to CDA](mapping-to-cda.html)
* [Mapping a Logical Model to HL7 V2](mapping-to-v2.html)

## Extracting Registry Data Using the Logical Model
To extract the necessary data for a registry submission using the logical model, one must have (in addition to the logical model), a patient associated with the data to be collected, a time period associated with the registry submission, and possibly other constraints. One must also have access to repositories which can be queried to obtain access to the standardized artifacts.

A naive data collection algorithm would iterate through each element in the logical model, and for each artifact type (FHIR, CDA, HL7 Version 2), query the available repositories for matching records in the time period, extract the requested data elements (using FHIRPath) to populate these elements into an expression of the logical model for the given patient, and move on to the next element. This would repeatedly query the same repositories for the same data.

A more practical approach is to collect all the queries to perform, and the perform the extractions appropriate for each unique query.

### Resolving Patient Identity
This implementation guide does not specify how patient matches are performed across different information systems. The IHE PIXm and PDQm profiles provide a FHIR API which enables information systems to resolve patient identities using HL7 FHIR. Each repository endpoint may require different patient matching strategies when it is configured. The registry submitter may need to identify policies for how to deal with cases where there is more than one patient match, or no matches.

### Querying for Artifacts
There's something to say here about the Patient, and time period, and other constraints that may be associated with the query

See the sections below for more detail about how to query for standardized artifacts:
* [Querying for FHIR Resources](querying-from-fhir.html)
* [Querying for CDA Documents](querying-from-cda.html)
* [Querying for HL7 V2 Messages](querying-from-v2.html)

## Transforming the Logical Model Content to a Submission Bundle



---

// File: input/fsh/aliases.fsh

Alias: $loinc = http://loinc.org
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $message-events = http://example.org/fhir/message-events
Alias: $message-reasons-encounter = http://terminology.hl7.org/CodeSystem/message-reasons-encounter
Alias: $sct = http://snomed.info/sct
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $ucum = http://unitsofmeasure.org
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $part = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $dar = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: $hl7-discharge = http://terminology.hl7.org/CodeSystem/discharge-disposition
Alias: $ncdrq = http://hl7.org/fhir/us/registry-protocols/ValueSet/ncdrq
Alias: $accerror = http://hl7.org/fhir/us/registry-protocols/CodeSystem/NCDRValidationErrors
Alias: $yn = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $cpt = http://www.ama-assn.org/go/cpt

---

// File: input/fsh/antiarrythmics.fsh

ValueSet: Antiarrhythmics
Title: "All Antiarrhythmics"
Description: "Listing of all antiarrythmics used in CathPCI procedures"
* ^experimental = true

//Injectable
* $rxnorm#1010846 "5 ML lidocaine hydrochloride 40 MG/ML Injection [Xylocaine]"
* $rxnorm#1046408 "100 ML amiodarone hydrochloride 1.5 MG/ML Injection [Nexterone]"
* $rxnorm#1654037 "20 ML adenosine 3 MG/ML Injection [Adenoscan]"
* $rxnorm#1654041 "30 ML adenosine 3 MG/ML Injection [Adenoscan]"
* $rxnorm#727357 "4 ML adenosine 3 MG/ML Prefilled Syringe [Adenocard]"
* $rxnorm#727361 "2 ML adenosine 3 MG/ML Prefilled Syringe [Adenocard]"
* $rxnorm#1046410 "200 ML amiodarone hydrochloride 1.8 MG/ML Injection [Nexterone]"
* $rxnorm#979122 "10 ML ibutilide fumarate 0.1 MG/ML Injection [Corvert]"
* $rxnorm#1010845 "lidocaine hydrochloride 40 MG/ML [Xylocaine]"
* $rxnorm#1046407 "amiodarone hydrochloride 1.5 MG/ML [Nexterone]"
* $rxnorm#564663 "adenosine 3 MG/ML [Adenoscan]"
* $rxnorm#573584 "adenosine 3 MG/ML [Adenocard]"
* $rxnorm#1046409 "amiodarone hydrochloride 1.8 MG/ML [Nexterone]"
* $rxnorm#979121 "ibutilide fumarate 0.1 MG/ML [Corvert]"
* $rxnorm#1737344 "lidocaine Injection [Xylocaine]"
* $rxnorm#1663270 "amiodarone Injection [Nexterone]"
* $rxnorm#1654036 "adenosine Injection [Adenoscan]"
* $rxnorm#727356 "adenosine Prefilled Syringe [Adenocard]"
* $rxnorm#1728045 "ibutilide Injection [Corvert]"
* $rxnorm#1186620 "Xylocaine Injectable Product"
* $rxnorm#1182874 "Nexterone Injectable Product"
* $rxnorm#1170625 "Adenoscan Injectable Product"
* $rxnorm#1170624 "Adenocard Injectable Product"
* $rxnorm#1170980 "Corvert Injectable Product"
* $rxnorm#1010844 "5 ML lidocaine hydrochloride 40 MG/ML Injection"
* $rxnorm#1012068 "5 ML lidocaine hydrochloride 20 MG/ML Prefilled Syringe"
* $rxnorm#1046406 "100 ML amiodarone hydrochloride 1.5 MG/ML Injection"
* $rxnorm#1654035 "20 ML adenosine 3 MG/ML Injection"
* $rxnorm#1654040 "30 ML adenosine 3 MG/ML Injection"
* $rxnorm#1654169 "2 ML adenosine 3 MG/ML Injection"
* $rxnorm#1654186 "4 ML adenosine 3 MG/ML Injection"
* $rxnorm#1663224 "3 ML amiodarone hydrochloride 50 MG/ML Injection"
* $rxnorm#1663244 "9 ML amiodarone hydrochloride 50 MG/ML Injection"
* $rxnorm#1663248 "18 ML amiodarone hydrochloride 50 MG/ML Injection"
* $rxnorm#1737723 "250 ML lidocaine hydrochloride 8 MG/ML Injection"
* $rxnorm#1737742 "250 ML lidocaine hydrochloride 4 MG/ML Injection"
* $rxnorm#1737744 "500 ML lidocaine hydrochloride 4 MG/ML Injection"
* $rxnorm#2176262 "10 ML bretylium tosylate 50 MG/ML Injection"
* $rxnorm#727355 "4 ML adenosine 3 MG/ML Prefilled Syringe"
* $rxnorm#727360 "2 ML adenosine 3 MG/ML Prefilled Syringe"
* $rxnorm#834357 "3 ML amiodarone hydrochloride 50 MG/ML Prefilled Syringe"
* $rxnorm#849876 "200 ML amiodarone hydrochloride 1.8 MG/ML Injection"
* $rxnorm#857886 "procainamide hydrochloride 100 MG/ML Injectable Solution"
* $rxnorm#857962 "procainamide hydrochloride 500 MG/ML Injectable Solution"
* $rxnorm#979120 "10 ML ibutilide fumarate 0.1 MG/ML Injection"
* $rxnorm#1010843 "lidocaine hydrochloride 40 MG/ML"
* $rxnorm#1010670 "lidocaine hydrochloride 20 MG/ML"
* $rxnorm#1046405 "amiodarone hydrochloride 1.5 MG/ML"
* $rxnorm#315283 "adenosine 3 MG/ML"
* $rxnorm#833531 "amiodarone hydrochloride 50 MG/ML"
* $rxnorm#1011251 "lidocaine hydrochloride 8 MG/ML"
* $rxnorm#1010859 "lidocaine hydrochloride 4 MG/ML"
* $rxnorm#2176260 "bretylium tosylate 50 MG/ML"
* $rxnorm#849875 "amiodarone hydrochloride 1.8 MG/ML"
* $rxnorm#857885 "procainamide hydrochloride 100 MG/ML"
* $rxnorm#857961 "procainamide hydrochloride 500 MG/ML"
* $rxnorm#979119 "ibutilide fumarate 0.1 MG/ML"
* $rxnorm#1737342 "lidocaine Injection"
* $rxnorm#727604 "lidocaine Prefilled Syringe"
* $rxnorm#1663223 "amiodarone Injection"
* $rxnorm#1654034 "adenosine Injection"
* $rxnorm#2176261 "bretylium Injection"
* $rxnorm#727353 "adenosine Prefilled Syringe"
* $rxnorm#727379 "amiodarone Prefilled Syringe"
* $rxnorm#373597 "procainamide Injectable Solution"
* $rxnorm#1728043 "ibutilide Injection"
* $rxnorm#1164658 "lidocaine Injectable Product"
* $rxnorm#1151981 "amiodarone Injectable Product"
* $rxnorm#1153467 "adenosine Injectable Product"
* $rxnorm#1163088 "bretylium Injectable Product"
* $rxnorm#1161726 "procainamide Injectable Product"
* $rxnorm#1160662 "ibutilide Injectable Product"
//Oral
* $rxnorm#1362706 "mexiletine hydrochloride 150 MG Oral Capsule"
* $rxnorm#1362712 "mexiletine hydrochloride 200 MG Oral Capsule"
* $rxnorm#1362720 "mexiletine hydrochloride 250 MG Oral Capsule"
* $rxnorm#309958 "disopyramide 100 MG Oral Capsule"
* $rxnorm#309960 "disopyramide 150 MG Oral Capsule"
* $rxnorm#310003 "dofetilide 0.125 MG Oral Capsule"
* $rxnorm#310004 "dofetilide 0.25 MG Oral Capsule"
* $rxnorm#310005 "dofetilide 0.5 MG Oral Capsule"
* $rxnorm#636793 "12 HR disopyramide 100 MG Extended Release Oral Capsule"
* $rxnorm#636794 "12 HR disopyramide 150 MG Extended Release Oral Capsule"
* $rxnorm#833528 "amiodarone hydrochloride 200 MG Oral Tablet"
* $rxnorm#834346 "amiodarone hydrochloride 200 MG Oral Tablet [Pacerone]"
* $rxnorm#834350 "amiodarone hydrochloride 400 MG Oral Tablet [Pacerone]"
* $rxnorm#835956 "amiodarone hydrochloride 100 MG Oral Tablet"
* $rxnorm#835958 "amiodarone hydrochloride 100 MG Oral Tablet [Pacerone]"
* $rxnorm#852877 "quinidine sulfate 200 MG Oral Tablet"
* $rxnorm#852913 "quinidine sulfate 300 MG Oral Tablet"
* $rxnorm#852920 "quinidine gluconate 324 MG Extended Release Oral Tablet"
* $rxnorm#854856 "dronedarone 400 MG Oral Tablet"
* $rxnorm#861156 "12 HR propafenone hydrochloride 225 MG Extended Release Oral Capsule"
* $rxnorm#861164 "12 HR propafenone hydrochloride 325 MG Extended Release Oral Capsule"
* $rxnorm#861171 "12 HR propafenone hydrochloride 425 MG Extended Release Oral Capsule"
* $rxnorm#861424 "propafenone hydrochloride 150 MG Oral Tablet"
* $rxnorm#861427 "propafenone hydrochloride 225 MG Oral Tablet"
* $rxnorm#861430 "propafenone hydrochloride 300 MG Oral Tablet"
* $rxnorm#886662 "flecainide acetate 50 MG Oral Tablet"
* $rxnorm#886666 "flecainide acetate 100 MG Oral Tablet"
* $rxnorm#886671 "flecainide acetate 150 MG Oral Tablet"


---

// File: input/fsh/CapabilityStatement-RS-SRRD.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RS-SRRD
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submitter implementing the Search / Retrieve Registry Definition transaction."""
* insert CREDSDefinitionContent
* name = "RS_SRRD"
* title = "Registry Submitter implementing the Search / Retrieve Registry Definition transaction."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submitter implementing the Search / Retrieve Registry Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].code = #read
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].name = "name"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].name = "identifier"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].name = "publisher"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].name = "context"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].name = "status"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].name = "_lastUpdated"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].type = #date
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].name = "date"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].type = #date
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].name = "_text"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].name = "_content"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.valueCode = #MAY


---

// File: input/fsh/CapabilityStatement-RS.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RS
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submitter."""
* insert CREDSDefinitionContent
* name = "RS"
* title = "Registry Submitter."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submitter."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].code = #read
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].code = #search-type
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].name = "_id"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].name = "url"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[1].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].name = "name"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[2].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].name = "identifier"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[3].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].name = "publisher"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[4].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].name = "context"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[5].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].name = "status"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].type = #token
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[6].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].name = "_lastUpdated"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].type = #date
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[7].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].name = "date"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].type = #date
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[8].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].name = "_text"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[9].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].name = "_content"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].type = #string
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchParam[10].extension.valueCode = #MAY

* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0] = "*"
* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.valueCode = #MAY


---

// File: input/fsh/CapabilityStatement-RSDC-CURD.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDC-CURD
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Creator implementing the Create / Update Registry Definition transaction."""
* insert CREDSDefinitionContent
* name = "RSDC_CURD"
* title = "Registry Submission Definition Creator implementing the Create / Update Registry Definition transaction."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Creator implementing the Create / Update Registry Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].code = #create
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].code = #update
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL


---

// File: input/fsh/CapabilityStatement-RSDC.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDC
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Creator."""
* insert CREDSDefinitionContent
* name = "RSDC"
* title = "Registry Submission Definition Creator."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Creator."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[clientSlice].mode = #client

* rest[clientSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].code = #create
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].code = #update
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[clientSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL


---

// File: input/fsh/CapabilityStatement-RSDR-CURD.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDR-CURD
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Repository implementing the Create / Update Registry Definition transaction."""
* insert CREDSDefinitionContent
* name = "RSDR_CURD"
* title = "Registry Submission Definition Repository implementing the Create / Update Registry Definition transaction."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Repository implementing the Create / Update Registry Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].code = #create
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].code = #update
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL


---

// File: input/fsh/CapabilityStatement-RSDR-SRRD.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDR-SRRD
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Repository implementing the Search / Retrieve Registry Definition transaction."""
* insert CREDSDefinitionContent
* name = "RSDR_SRRD"
* title = "Registry Submission Definition Repository implementing the Search / Retrieve Registry Definition transaction."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Repository implementing the Search / Retrieve Registry Definition transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].code = #read
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].name = "name"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].name = "identifier"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].name = "publisher"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].name = "context"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].name = "status"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].name = "_lastUpdated"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].type = #date
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].name = "date"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].type = #date
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].name = "_text"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].extension.valueCode = #SHOULD

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].name = "_content"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].extension.valueCode = #SHOULD

* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.valueCode = #SHALL


---

// File: input/fsh/CapabilityStatement-RSDR.fsh

/*
    This content is automatically generated from CREDS.xml by actorsandtransactions.xslt
*/

Instance: RSDR
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Registry Submission Definition Repository."""
* insert CREDSDefinitionContent
* name = "RSDR"
* title = "Registry Submission Definition Repository."
* date = "2023-05-09"
* kind = #requirements
* description = "Defines the requirements for the Registry Submission Definition Repository."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[StructureDefinitionSlice].type = #StructureDefinition

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].code = #read
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].code = #search-type
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[2].code = #create
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].interaction[3].code = #update
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].interaction[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].name = "url"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].name = "name"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].name = "identifier"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].name = "publisher"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[4].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].name = "context"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[5].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].name = "status"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].type = #token
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[6].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].name = "_lastUpdated"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].type = #date
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[7].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].name = "date"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].type = #date
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[8].extension.valueCode = #SHALL

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].name = "_text"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[9].extension.valueCode = #SHOULD

* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].name = "_content"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].type = #string
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchParam[10].extension.valueCode = #SHOULD

* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0] = "*"
* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[StructureDefinitionSlice].searchInclude[0].extension.valueCode = #SHALL


---

// File: input/fsh/CapabilityStatements.fsh

Profile:        CapabilityStatementWithSlices
Parent:         CapabilityStatement
Title:          "Capability Statements with Slices"
Description:    "A Capability Statement with slicing defined"
* ^abstract = true
* insert CREDSStructureDefinitionContent

* rest ^slicing.discriminator.type = #value
* rest ^slicing.discriminator.path = "mode"
* rest ^slicing.rules = #open
* rest ^slicing.description = "Slice based on the rest.mode pattern"
* rest contains clientSlice 0..1 and serverSlice 0..1
* rest[clientSlice].mode = #client (exactly)
* rest[serverSlice].mode = #server (exactly)


* rest.resource ^slicing.discriminator.type = #value
* rest.resource ^slicing.discriminator.path = "type"
* rest.resource ^slicing.rules = #open
* rest.resource ^slicing.description = "Slice based on the rest.resource.type pattern"
* rest.resource contains
    LocationSlice 0..1 and
    OrganizationSlice 0..1 and
    MeasureSlice 0..1 and
    MeasureReportSlice 0..1 and
    QuestionnaireSlice 0..1 and
    QuestionnaireResponseSlice 0..1 and
    LibrarySlice 0..* and
    ConceptMapSlice 0..* and
    ValueSetSlice 0..* and
    CodeSystemSlice 0..* and
    PatientSlice 0..* and
    AllergyIntoleranceSlice 0..* and
    ConditionSlice 0..* and
    DocumentReferenceSlice 0..* and
    DiagnosticReportSlice 0..* and
    EncounterSlice 0..* and
    FamilyMemberHistorySlice 0..* and
    MedicationAdministrationSlice 0..* and
    MedicationDispenseSlice 0..* and
    MedicationRequestSlice 0..* and
    MedicationStatementSlice 0..* and
    ObservationSlice 0..* and
    ProcedureSlice 0..* and
    ServiceRequestSlice 0..* and
    ParametersSlice 0..* and
    StructureDefinitionSlice 0..* and
    StructureMapSlice 0..*


* rest.resource[LocationSlice].type = #Location (exactly)
* rest.resource[OrganizationSlice].type = #Organization (exactly)
* rest.resource[MeasureSlice].type = #Measure (exactly)
* rest.resource[MeasureReportSlice].type = #MeasureReport (exactly)
* rest.resource[QuestionnaireSlice].type = #Questionnaire (exactly)
* rest.resource[QuestionnaireResponseSlice].type = #QuestionnaireResponse (exactly)
* rest.resource[LibrarySlice].type = #Library (exactly)
* rest.resource[ConceptMapSlice].type = #ConceptMap (exactly)
* rest.resource[ValueSetSlice].type = #ValueSet (exactly)
* rest.resource[CodeSystemSlice].type = #CodeSystem (exactly)
* rest.resource[PatientSlice].type = #Patient (exactly)
* rest.resource[AllergyIntoleranceSlice].type = #AllergyIntolerance (exactly)
* rest.resource[ConditionSlice].type = #Condition (exactly)
* rest.resource[DocumentReferenceSlice].type = #DocumentReference (exactly)
* rest.resource[DiagnosticReportSlice].type = #DiagnosticReport (exactly)
* rest.resource[EncounterSlice].type = #Encounter (exactly)
* rest.resource[FamilyMemberHistorySlice].type = #FamilyMemberHistory (exactly)
* rest.resource[MedicationAdministrationSlice].type = #MedicationAdministration (exactly)
* rest.resource[MedicationDispenseSlice].type = #MedicationDispense (exactly)
* rest.resource[MedicationRequestSlice].type = #MedicationRequest (exactly)
* rest.resource[MedicationStatementSlice].type = #MedicationStatement (exactly)
* rest.resource[ObservationSlice].type = #Observation (exactly)
* rest.resource[ProcedureSlice].type = #Procedure (exactly)
* rest.resource[ServiceRequestSlice].type = #ServiceRequest (exactly)
* rest.resource[ParametersSlice].type = #Parameters (exactly)
* rest.resource[StructureDefinitionSlice].type = #StructureDefinition (exactly)
* rest.resource[StructureMapSlice].type = #StructureMap (exactly)


---

// File: input/fsh/Cath-PCI-SD-Example-detailed.fsh

Logical: CathPCI_Submission_Map_detailed
Id: ACCNCDRCathPCIDetailed
Title: "Cath-PCI Detailed Submission Map"
Description: """This is an example of the data that would be used for a Cath-PCI Submission.
The full map is a logical model as that allows conformance to the FHIR Standard the way a custom Resource would not.
Each element has the short name of the data, a full description and the paths to fetch and place the information, by data standard type, for each.
A section (such as Demographics) is a BackboneElement (holds no values).  All subordinate elements are strings.
Each mapping includes the following:
* identity = standard used for the mapping (e.g., FHIR)
* language = mime type that matches identity
* map = FHIRPath expression of the path to the data
* comment = *Output mapping only* Profile for inclusion in the Submission Bundle if not the Core resource

Environment Variables used:
%patient (Patient resource for the subject of the procedure)
%period (Encounter period i.e. Encounter.period)
%procedure (Cath PCI Procedure resource)
%procedure.period (CathPCI Procedure period i.e., Procedure.performedPeriod)
"""
// * ^baseDefinition = "http://hl7.org/fhir//StructureDefinition/base"
* ^version = "5.0"
* ^identifier.use = #official
* ^date = "2021-11-01"
* ^publisher = "American College of Cardiology"
* ^contact.name = "Jane Smith"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "mailto:noreply@acc.org"
* ^kind = #logical
//Mappings so that things show up in the mappings page on the IG
* ^mapping[+].identity = "FHIR"
* ^mapping[=].uri = "http://fhir.hl7.org"
* ^mapping[=].name = "Fast Health Interoperability Resources"
* ^mapping[=].comment = "Path to where in a FHIR Resource the data element is found"
* ^mapping[+].identity = "CDA"
* ^mapping[=].uri = "http://build.fhir.org/ig/HL7/cda-core-2.0/"
* ^mapping[=].name = "Clinical Document Architecture"
* ^mapping[=].comment = "Path to where in a CDA 2.0/CCDA 2.1 Document the data element is found"
* ^mapping[+].identity = "HL7V2"
* ^mapping[=].uri = "http://www.hl7.eu/refactored/index.html"
* ^mapping[=].name = "HL7 V2 Messages"
* ^mapping[=].comment = "Path to where in a HL7 V2 Message the data element is found"
* ^mapping[+].identity = "Output"
* ^mapping[=].uri = "http://hl7.org/fhir/us/core"
* ^mapping[=].name = "Submission Data Output location"
* ^mapping[=].comment = "Location within the requirements profile to place the data for submission in US Core or FHIR Core Resources"

* administration 1..1 BackboneElement "Adminstrative Data"

* administration.event 1..1 code "EventCode" "Code used for reason of submission"
* administration.event ^fixedCode = $message-events#CathPCI-Discharge
* administration.event ^mapping[+].identity = "Output"
* administration.event ^mapping[=].language = #application/fhir
* administration.event ^mapping[=].map = "MessageHeader.eventCoding"

* administration.participantId 1..1 string "Facility ID" "ACC Assigned Facilty ID"
* administration.participantId ^mapping[+].identity = "Output"
* administration.participantId ^mapping[=].language = #application/fhir
* administration.participantId ^mapping[=].map = "MessageHeader.source.name"

* administration.vendorIdentifier 1..1 string "Vendor Identifier" "Software Vendor ID"
* administration.vendorIdentifier ^mapping[+].identity = "Output"
* administration.vendorIdentifier ^mapping[=].language = #application/fhir
* administration.vendorIdentifier ^mapping[=].map = "MessageHeader.source.software"

* administration.vendorSoftwareVersion 1..1 string "Software Version" "Vendor Software Version"
* administration.vendorSoftwareVersion ^mapping[+].identity = "Output"
* administration.vendorSoftwareVersion ^mapping[=].language = #application/fhir
* administration.vendorSoftwareVersion ^mapping[=].map = "MessageHeader.source.version"

* administration.status  1..1 code "Submission Status" "Status of the Submission, always final"
* administration.status ^fixedCode = #final
* administration.status ^mapping[+].identity = "Output"
* administration.status ^mapping[=].language = #application/fhir
* administration.status ^mapping[=].map = "Composition.type"
 
* administration.type  1..1 code "Submission Type" "Submission Type, always Episode of Care Record"
* administration.type ^fixedCode = $loinc#11516-2 "Physician Episode of care medical records"
* administration.type ^mapping[+].identity = "Output"
* administration.type ^mapping[=].language = #application/fhir
* administration.type ^mapping[=].map = "Composition.status"

* administration.timeFrameOfDataSubmission 1..1 string "Submission Period" "Time Frame of Data Submission quarter start (e.g., Q2 start date Apr 1)"
* administration.timeFrameOfDataSubmission ^mapping[+].identity = "Output"
* administration.timeFrameOfDataSubmission ^mapping[=].language = #application/fhir
* administration.timeFrameOfDataSubmission ^mapping[=].map = "Composition.event.period.start"

* administration.registryIdentifier 1..1 string "Registry Identifier"
* administration.registryIdentifier ^fixedString = "ACC-NCDR-CathPCI-5.0"
* administration.registryIdentifier ^mapping[+].identity = "Output"
* administration.registryIdentifier ^mapping[=].language = #application/fhir
* administration.registryIdentifier ^mapping[=].map = "Composition.title"

* administration.submissionType  1..1 string "Submission Type"
* administration.submissionType ^mapping[+].identity = "Output"
* administration.submissionType ^mapping[=].language = #application/fhir
* administration.submissionType ^mapping[=].map = "MessageHeader.reason.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SubmissionType)"

* administration.date 1..1 string "Submission DateTime" "Date and Time of the Submission"
* administration.date ^mapping[+].identity = "FHIR"
* administration.date ^mapping[=].language = #application/fhir
* administration.date ^mapping[=].map = "now()"
* administration.date ^mapping[+].identity = "Output"
* administration.date ^mapping[=].language = #application/fhir
* administration.date ^mapping[=].map = "Composition.date"

* administration.author 1..1 string "Submission Organization" "Organization Submitting the Record"
* administration.author ^mapping[+].identity = "FHIR"
* administration.author ^mapping[=].language = #application/fhir
* administration.author ^mapping[=].map = "Organization"
* administration.author ^mapping[+].identity = "Output"
* administration.author ^mapping[=].language = #application/fhir
* administration.author ^mapping[=].map = "Composition.author"

* demographics 1..1 string "The Patient who is the subject of this record"
* demographics ^mapping[+].identity = "FHIR"
* demographics ^mapping[=].language = #application/fhir 
* demographics ^mapping[=].map = "Patient"
* demographics ^mapping[+].identity = "Output"
* demographics ^mapping[=].language = #application/fhir 
* demographics ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient and %patient" 

* episodeInformation 1..1 BackboneElement "Episode information"

* episodeInformation.episodeUniqueKey 1..1 string "Episode Unique Key" "Indicate the unique key associated with each patient episode record as assigned by the EMR/EHR or your software application."
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "FHIR"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/fhir
* episodeInformation.episodeUniqueKey ^mapping[=].map = "Encounter.where(reason.resolve().is(FHIR.Procedure) and reason.resolve().code.codable.code=415070008 )"
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "Output"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/fhir
* episodeInformation.episodeUniqueKey ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter and %encounter"

* episodeInformation.healthInsurancePaymentSource  1..* string "Health Insurers" "Health Insurance Provider"
* episodeInformation.healthInsurancePaymentSource ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurancePaymentSource ^mapping[=].map = "Coverage"
* episodeInformation.healthInsurancePaymentSource ^mapping[+].identity = "Output"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurancePaymentSource ^mapping[=].map = "Coverage"

* episodeInformation.healthInsuranceClaimNumber 1..* string "Health Insurance Claim Number" "Medicare Claim Number"
* episodeInformation.healthInsuranceClaimNumber ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].language = #application/fhir
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].map = "ClaimResponse.where(type = medi).identifier.value"
* episodeInformation.healthInsuranceClaimNumber ^mapping[+].identity = "Output"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].language = #application/fhir
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].map = "ClaimResponse"

* episodeInformation.patientRestriction 0..1 string "Patient Restriction" "patient requested for their information not to be used for any research or studies for the associated episode of care."
* episodeInformation.patientRestriction ^mapping[+].identity = "FHIR"
* episodeInformation.patientRestriction ^mapping[=].language = #application/fhir
* episodeInformation.patientRestriction ^mapping[=].map = "Consent.where(scope = research)"
* episodeInformation.patientRestriction ^mapping[+].identity = "Output"
* episodeInformation.patientRestriction ^mapping[=].language = #application/fhir
* episodeInformation.patientRestriction ^mapping[=].map = "Consent"

* episodeInformation.admittingProvider 1..1 string "Admitting Provider"
* episodeInformation.admittingProvider ^mapping[+].identity = "FHIR"
* episodeInformation.admittingProvider ^mapping[=].language = #application/fhir
* episodeInformation.admittingProvider ^mapping[=].map = "Encounter.participant.where( type.coding.code = 'ADM' ).individual.resolve()"
* episodeInformation.admittingProvider ^mapping[+].identity = "Output"
* episodeInformation.admittingProvider ^mapping[=].language = #application/fhir
* episodeInformation.admittingProvider ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"

* episodeInformation.attendingProvider 1..1 string "Attending Provider"
* episodeInformation.attendingProvider ^mapping[+].identity = "FHIR"
* episodeInformation.attendingProvider ^mapping[=].language = #application/fhir
* episodeInformation.attendingProvider ^mapping[=].map = "Encounter.participant.where( type.coding.code = 'ATND' ).individual.resolve()"
* episodeInformation.attendingProvider ^mapping[+].identity = "Output"
* episodeInformation.attendingProvider ^mapping[=].language = #application/fhir
* episodeInformation.attendingProvider ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"

* researchStudy 0..* string "ACC Research Study" "ACC study the patient is currently enrolled"
* researchStudy ^mapping[+].identity = "Output"
* researchStudy ^mapping[=].language = #application/fhir
* researchStudy ^mapping[=].map = "ResearchStudy"

* historyAndRiskFactors 1..1 BackboneElement "History and Risk Factors"

* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease 0..1 string "Family History of Premature Coronary Artery Disease"
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[=].map = "Observation.where(code.coding.code = '80985-5')"
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[+].identity = "Output"
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.familyHistoryOfPrematureCoronaryArteryDisease ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation"

* historyAndRiskFactors.priorMyocardialInfarction  0..1 string "Prior MI Incidence"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorMyocardialInfarction) and %encounter.actualPeriod.start > (occurrenceDateTime - 1 day))"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorMyocardialInfarction) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[+].identity = "Output"
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorMyocardialInfarction ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.priorPercutaneousCoronaryIntervention  0..1 string "Prior PCI Incidence"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].map = "Procedure.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/priorPercutaneousCoronaryIntervention) and %encounter.actualPeriod.start > (occurrenceDateTime - 1 day))"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/priorPercutaneousCoronaryIntervention) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[+].identity = "Output"
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorPercutaneousCoronaryIntervention ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation"

* historyAndRiskFactors.priorCoronaryArteryBypassGraft  0..1 string "Prior CABG Incidence"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].map = "Procedure.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorCABG) and %encounter.actualPeriod.start > (occurrenceDateTime - 1 day))"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorCABG) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[+].identity = "Output"
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].language = #application/fhir
* historyAndRiskFactors.priorCoronaryArteryBypassGraft ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation"

* historyAndRiskFactors.cerebrovascularDisease 0..1 string "Current Cerebrovascual Disease"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorCerebrovascularDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorCerebrovascularDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[+].identity = "Output"
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cerebrovascularDisease ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.diabetesMellitus 0..1 string "Current Diabetes Mellitus"
* historyAndRiskFactors.diabetesMellitus ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.diabetesMellitus ^mapping[=].language = #application/fhir
* historyAndRiskFactors.diabetesMellitus ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorOrCurrentDiabetesMellitus) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.diabetesMellitus ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.diabetesMellitus ^mapping[=].language = #application/fhir
* historyAndRiskFactors.diabetesMellitus ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorOrCurrentDiabetesMellitus) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.diabetesMellitus ^mapping[+].identity = "Output"
* historyAndRiskFactors.diabetesMellitus ^mapping[=].language = #application/fhir
* historyAndRiskFactors.diabetesMellitus ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.currentlyOnDialysis 0..1 string "Patient on Dialysis"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].language = #application/fhir
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/HemodialysisOrPeritonealDialysis) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].language = #application/fhir
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/HemodialysisOrPeritonealDialysis) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[+].identity = "Output"
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].language = #application/fhir
* historyAndRiskFactors.currentlyOnDialysis ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale 0..1 string "Frailty Scale"
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[=].language = #application/fhir
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[=].map = "Observation.where(code.coding.code = '763264000' ) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[+].identity = "Output"
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[=].language = #application/fhir
* historyAndRiskFactors.canadianStudyOfHealthAndAgingClinicalFrailtyScale ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-observation"

* historyAndRiskFactors.chronicLungDisease  0..1 string "Current Chronic Lung Disease"
* historyAndRiskFactors.chronicLungDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.chronicLungDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.chronicLungDisease ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ChronicLungDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.chronicLungDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.chronicLungDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.chronicLungDisease ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ChronicLungDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.chronicLungDisease ^mapping[+].identity = "Output"
* historyAndRiskFactors.chronicLungDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.chronicLungDisease ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.peripheralArterialDisease  0..1 string "Peripheral Arterial Disease Instance"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PeripheralArterialOcclusiveDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PeripheralArterialOcclusiveDisease) and %encounter.actualPeriod.start > (effectiveDateTime - 1 day))"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[+].identity = "Output"
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].language = #application/fhir
* historyAndRiskFactors.peripheralArterialDisease ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.hypertension 0..1 string "Hypertension Instance"
* historyAndRiskFactors.hypertension ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.hypertension ^mapping[=].language = #application/fhir
* historyAndRiskFactors.hypertension ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Hypertension))"
* historyAndRiskFactors.hypertension ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.hypertension ^mapping[=].language = #application/fhir
* historyAndRiskFactors.hypertension ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Hypertension))"
* historyAndRiskFactors.hypertension ^mapping[+].identity = "Output"
* historyAndRiskFactors.hypertension ^mapping[=].language = #application/fhir
* historyAndRiskFactors.hypertension ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.dyslipidemia 0..1 string "Dyslipidemia Instance"
* historyAndRiskFactors.dyslipidemia ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.dyslipidemia ^mapping[=].language = #application/fhir
* historyAndRiskFactors.dyslipidemia ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Dyslipidemia))"
* historyAndRiskFactors.dyslipidemia ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.dyslipidemia ^mapping[=].language = #application/fhir
* historyAndRiskFactors.dyslipidemia ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Dyslipidemia))"
* historyAndRiskFactors.dyslipidemia ^mapping[+].identity = "Output"
* historyAndRiskFactors.dyslipidemia ^mapping[=].language = #application/fhir
* historyAndRiskFactors.dyslipidemia ^mapping[=].map = "http://hl7.org/fhir/us/core//StructureDefinition/us-core-condition-problems-health-concerns.where(category = 'problem-list-item')"

* historyAndRiskFactors.tobaccoUse 1..1 string "Smoking status and usage"  "This is for encoding all smoking status, including quantity"
* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Dyslipidemia))"
* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Dyslipidemia))"
* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "Output"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus"

* historyAndRiskFactors.height  1..1 string "Patient Height"
* historyAndRiskFactors.height ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.height ^mapping[=].language = #application/fhir
* historyAndRiskFactors.height ^mapping[=].map = "Observation.where(code.coding.code = '8302-2')"
* historyAndRiskFactors.height ^mapping[+].identity = "Output"
* historyAndRiskFactors.height ^mapping[=].language = #application/fhir
* historyAndRiskFactors.height ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-body-height"

* historyAndRiskFactors.weight 1..1 string "Patient Weight"
* historyAndRiskFactors.weight ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.weight ^mapping[=].language = #application/fhir
* historyAndRiskFactors.weight ^mapping[=].map = "Observation.where(code.coding.code = '3141-9')"
* historyAndRiskFactors.weight ^mapping[+].identity = "Output"
* historyAndRiskFactors.weight ^mapping[=].language = #application/fhir
* historyAndRiskFactors.weight ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-body-weight"

* cardiacStatus 1..1 BackboneElement "Cardiac Status"
* cardiacStatus.cardiacArrestOutofHealthcareFacility 0..1 string "Cardiac Arrest Out of Healthcare Facility" "Indicate if a cardiac arrest event occurred outside of any healthcare facility."
* cardiacStatus.cardiacArrestOutofHealthcareFacility ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestOutofHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestOutofHealthcareFacility ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424808 andvalueBoolean.exists())"

* cardiacStatus.cardiacArrestWitnessed 0..1 string "Cardiac Arrest Witnessed" "Indicate if the out-of-hospital cardiac arrest was witnessed by another person."
* cardiacStatus.cardiacArrestWitnessed ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where(code.coding.system = 'http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014082 and valueBoolean.exists())"

* cardiacStatus.cardiacArrestAfterArrivalofEMS 0..1 string "Cardiac Arrest After Arrival of Emergency Medical Services" "Indicate if the out-of-hospital cardiac arrest occurred after arrival of Emergency Medical Services (EMS)."
* cardiacStatus.cardiacArrestAfterArrivalofEMS ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestAfterArrivalofEMS ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAfterArrivalofEMS ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014081 and valueBoolean.exists())"

* cardiacStatus.firstCardiacArrestRhythm 0..1 string "First Cardiac Arrest Rhythm" "Indicate if the out-of-hospital cardiac arrest occurred after arrival of Emergency Medical Services (EMS)."
* cardiacStatus.firstCardiacArrestRhythm ^mapping[+].identity = "Output"
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014081 and valueCode.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/FirstCardiacArrestRhythm))"

* cardiacStatus.cardiacArrestatTransferringHealthcareFacility 0..1 string "Cardiac Arrest at Transferring Healthcare Facility" "Indicate if the patient had cardiac arrest at the transferring healthcare facility prior to arrival at the current facility."
* cardiacStatus.cardiacArrestatTransferringHealthcareFacility ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestatTransferringHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestatTransferringHealthcareFacility ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=000000 and valueBoolean.exists())"

* procedureInformation 1..1 BackboneElement "CathPCI Procedure Information" 

* procedureInformation.systolicBloodPressure 1..1 string "Blood Pressure (Systolic)"
* procedureInformation.systolicBloodPressure ^mapping[+].identity = "FHIR"
* procedureInformation.systolicBloodPressure ^mapping[=].language = #application/fhir
* procedureInformation.systolicBloodPressure ^mapping[=].map = "Observation.where(code.coding.code = '8480-6')"
* procedureInformation.systolicBloodPressure ^mapping[+].identity = "Output"
* procedureInformation.systolicBloodPressure ^mapping[=].language = #application/fhir
* procedureInformation.systolicBloodPressure ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-blood-pressure"

* procedureInformation.pciPatientProcedure  1..1 string "PCI Procedure" "Results of this query will fill the %Procedure and %procedure.period environment variables"
* procedureInformation.pciPatientProcedure ^mapping[+].identity = "FHIR"
* procedureInformation.pciPatientProcedure ^mapping[=].language = #application/fhir
* procedureInformation.pciPatientProcedure ^mapping[=].map = "Procedure.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/'PercutaneousCoronaryIntervention') and performedPeriod.exists() )"
* procedureInformation.pciPatientProcedure ^mapping[+].identity = "Output"
* procedureInformation.pciPatientProcedure ^mapping[=].language = #application/fhir
* procedureInformation.pciPatientProcedure ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure"

* procedureInformation.diagnosticCoronaryAngiographyProcedure  0..1 string "Diagnostic Coronary Angiography"
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[+].identity = "FHIR"
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[=].map = "Procedure.where(code.coding.code = '80994-7' and performedPeriod.start >= %period.start and performedPeriod.end <= %period.end )"
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[+].identity = "Output"
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticCoronaryAngiographyProcedure ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure"

* procedureInformation.diagnosticCatheterizationOperator  0..1 string "Diagnostic Catheterization Operator" 
* procedureInformation.diagnosticCatheterizationOperator ^mapping[+].identity = "FHIR"
* procedureInformation.diagnosticCatheterizationOperator ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticCatheterizationOperator ^mapping[=].map = "Procedure.where(code.coding.code = '80994-7' and performedPeriod.start >= %period.start and performedPeriod <= %period.end ).performer.actor.resolve())"
* procedureInformation.diagnosticCatheterizationOperator ^mapping[+].identity = "Output"
* procedureInformation.diagnosticCatheterizationOperator ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticCatheterizationOperator ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitoner"

* procedureInformation.diagnosticLeftHeartCath 0..1 string "Instance of Left Heart Diagnostic Catheterization"
* procedureInformation.diagnosticLeftHeartCath ^mapping[+].identity = "FHIR"
* procedureInformation.diagnosticLeftHeartCath ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticLeftHeartCath ^mapping[=].map = "Procedure.where(code.coding.code = '67629009' and performedPeriod.start >= %period.start and performedPeriod.end <= %period.end)"
* procedureInformation.diagnosticLeftHeartCath ^mapping[+].identity = "Output"
* procedureInformation.diagnosticLeftHeartCath ^mapping[=].language = #application/fhir
* procedureInformation.diagnosticLeftHeartCath ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure"

* procedureInformation.lvefPercentDiagnosticLeftHeartCath 1..1 string "Diagnositic Left Heart Cath LVEF%"
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[+].identity = "FHIR"
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[=].language = #application/fhir
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[=].map = "Observation.where(code.coding.code = '10230-1' and effectiveDate ge %period.start)"
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[+].identity = "Output"
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[=].language = #application/fhir
* procedureInformation.lvefPercentDiagnosticLeftHeartCath ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-clinical-test"

* procedureInformation.concomitantProceduresPerformed 0..* string "Concomitant Procedures Performed" 
* procedureInformation.concomitantProceduresPerformed ^mapping[+].identity = "Output"
* procedureInformation.concomitantProceduresPerformed ^mapping[=].language = #application/fhir
* procedureInformation.concomitantProceduresPerformed ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ConcomitantProceduresPerformedType))"

* procedureInformation.cumulativeAirKerma  1..* string "Cumulative Air Kerma" 
* procedureInformation.cumulativeAirKerma ^mapping[+].identity = "FHIR"
* procedureInformation.cumulativeAirKerma ^mapping[=].language = #application/fhir
* procedureInformation.cumulativeAirKerma ^mapping[=].map = "Observation.where(code.coding.code = '228850003' and (effectivePeriod.start >= %period.start and effectivePeriod.end <= %period.end)"
* procedureInformation.cumulativeAirKerma ^mapping[+].identity = "Output"
* procedureInformation.cumulativeAirKerma ^mapping[=].language = #application/fhir
* procedureInformation.cumulativeAirKerma ^mapping[=].map = "Observation"

* procedureInformation.fluoroscopyTime 1..* string "Total Flouroscopy Time"  "Indicate the total fluoroscopy time recorded to the nearest 0.1-minute."
* procedureInformation.fluoroscopyTime ^mapping[+].identity = "Output"
* procedureInformation.fluoroscopyTime ^mapping[=].language = #application/fhir
* procedureInformation.fluoroscopyTime ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014077 and valueTime.exists()"

* procedureInformation.doseAreaProduct 1..* string "Total Flouroscopy Dose"  "Indicate the total fluoroscopy dose to the nearest integer. The value recorded should include the total dose for the lab visit."
* procedureInformation.doseAreaProduct ^mapping[+].identity = "Output"
* procedureInformation.doseAreaProduct ^mapping[=].language = #application/fhir
* procedureInformation.doseAreaProduct ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000994 and valueQuantity.exists()"

* procedureInformation.arterialCrossOver 1..* string "Arterial Cross Over" "Indicate if the procedure involved a crossover to a different access site."
* procedureInformation.arterialCrossOver ^mapping[+].identity = "Output"
* procedureInformation.arterialCrossOver ^mapping[=].language = #application/fhir
* procedureInformation.arterialCrossOver ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014075 and valueBoolean.exists()"

* procedureInformation.venousAccess 1..* string "Venous Access" "Indicate if a venous access was obtained for the purpose of the diagnostic or PCI procedure."
* procedureInformation.venousAccess ^mapping[+].identity = "Output"
* procedureInformation.venousAccess ^mapping[=].language = #application/fhir
* procedureInformation.venousAccess ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014075 and valueBoolean.exists("

* procedureInformation.cardiacArrestAtThisFacility  1..* string "Cardiac Arrest at this Facility" "Indicate if a cardiac arrest event occurred at this facility PRIOR to the cath lab visit."
* procedureInformation.cardiacArrestAtThisFacility ^mapping[+].identity = "FHIR"
* procedureInformation.cardiacArrestAtThisFacility ^mapping[=].language = #application/fhir
* procedureInformation.cardiacArrestAtThisFacility ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacArrest) and (effectivePeriod.start> %period.start and effectivePeriod.start < %procedure.period.start))"
* procedureInformation.cardiacArrestAtThisFacility ^mapping[+].identity = "Output"
* procedureInformation.cardiacArrestAtThisFacility ^mapping[=].language = #application/fhir
* procedureInformation.cardiacArrestAtThisFacility ^mapping[=].map = "Observation"

* procedureInformation.preprocedureInformation  1..1 BackboneElement "Pre-procedure Information"
* procedureInformation.preprocedureInformation.heartFailure  1..* string "Heart Failure" "Indicate if the patient has been diagnosed with heart failure, diagnosis date and the Heart Failure type."
* procedureInformation.preprocedureInformation.heartFailure ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.heartFailure ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.heartFailure ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/HeartFailure) and recordedDate.exists())"
* procedureInformation.preprocedureInformation.heartFailure ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.heartFailure ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.heartFailure ^mapping[=].map = "Condition"

* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification 1..* string "New York Heart Association Classification" "Indicate the patient's latest dyspnea or functional class, coded as the New York Heart Association (NYHA) classification."
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/NewYorkHeartAssociationQuery))"
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.newYorkHeartAssociationClassification ^mapping[=].map = "Observation.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/NewYorkHeartAssociationAnswers)"

* procedureInformation.preprocedureInformation.diagnosticTest  1..1 BackboneElement "Pre-procedure Diagnostic Tests"

* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAssessment 0..* string "Electrocardiac Assessment" "Indicate the results of the electrocardiac assessment." 
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAssessment ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAssessment ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAssessment ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142467 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ElectrocardiacAssessmentResults) and Observation.method.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ElectrocardiacAssessmentMethod)"

* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab 1..* string "New Antiarrhythmic Therapy Initiated Prior to Cath Lab" "Indicate if the patient received a NEW antiarrhythmic therapy PRIOR to evaluation within the cath lab."
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[=].map = "MedicationStatement.where(medicationCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/Antiarrhythmics) and effectiveDateTime < %Encounter.period.start and effeciveDateTime < %Encounter.period.start - 30 days)"
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.newAntiarrhythmicTherapyInitiatedPriorToCathLab ^mapping[=].map = "MedicationStatement"

* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType 0..* string "Electrocardiac Assessment Abnormality Type" "Indicate the findings of the electrocardiac assessment."
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/AbnormalElectrocardiacAssessment)"
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.electrocardiacAbnormalityType ^mapping[=].map = "Observation.where(valueCodeableConcept.exists() or valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ElectrocardiacAbnormalityType)"

* procedureInformation.preprocedureInformation.diagnosticTest.nonSustainedVentricularTachycardiaType 0..* string "Non-Sustained Ventricular Tachycardia Type" "Last value between 30 days prior to 1st procedure (or previous procedure) and current procedure"
* procedureInformation.preprocedureInformation.diagnosticTest.nonSustainedVentricularTachycardiaType ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.nonSustainedVentricularTachycardiaType ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.nonSustainedVentricularTachycardiaType ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142475 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/NonSustainedVentricularTachycardiaType)"

* procedureInformation.preprocedureInformation.diagnosticTest.lvef 1..* string "LVEF % (Pre-Procedure)" "Indicate the best estimate of the most recent left ventricular ejection fraction within 6 months of procedure."
* procedureInformation.preprocedureInformation.diagnosticTest.lvef ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.lvef ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.lvef ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001027 and valueQuantity.exists())"

* procedureInformation.preprocedureInformation.diagnosticTest.cardiacCta 0..* string "Cardiac CTA"
* procedureInformation.preprocedureInformation.diagnosticTest.cardiacCta ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.cardiacCta ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.cardiacCta ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001257 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacCTAResults)"

* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore 0..* string "Agatston Calcium Score"
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[=].map = "Observation.where(code.coding.code = '450360000')"
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.agatstonCalciumScore ^mapping[=].map = "Observation"

* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapWithoutIntervention 0..* string "Prior Diagnostic Coronary Angiography Procedure without intervention" "Indicate if the patient had a prior diagnostic coronary angiography procedure without a subsequent intervention." 
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapWithoutIntervention ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapWithoutIntervention ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapWithoutIntervention ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424782 and valueBoolean.exists())"

* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapResults 0..* string "Prior Diagnostic Coronary Angiography Procedure results" "Indicate the results of the prior diagnostic coronary angiography."
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapResults ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapResults ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.priorDcapResults ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424784 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PriorDiagnosticCoronaryAngiographyProcedureResults))"

* procedureInformation.preprocedureInformation.diagnosticTest.heartRate 0..* string "Heart Rate"
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[=].map = "Observation.where(code.coding.code = '8867-4')"
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.heartRate ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-heart-rate"

* procedureInformation.preprocedureInformation.diagnosticTest.stressTest 0..* string "Indicate Stress Test Performed and results"
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142432 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/StressTestResults) and Observation.method.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/StressTest))" 

* procedureInformation.preprocedureInformation.diagnosticTest.stressTest.riskOrExtentOfIschemia 0..* string  "Stress Test Risk/Extent of Ischemia" "Indicate the risk or extent of ischemia for the non-invasive stress test."
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest.riskOrExtentOfIschemia ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest.riskOrExtentOfIschemia ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.diagnosticTest.stressTest.riskOrExtentOfIschemia ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142434 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/StressTestRiskExtentofIschemia))"

* procedureInformation.preprocedureInformation.preprocedureMedication 0..* string "PreProcedure Medication" "Indicate the assigned identification number associated with the medications the patient was prescribed or received." 
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[=].map = "MedicationAdministration.where(effectiveDateTime >= %period.start - 2 weeks and effeciveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.preprocedureMedication ^mapping[=].map = "MedicationAdministration"

* procedureInformation.preprocedureInformation.saQuestionnaire  7..* string  "Responses to the Seattle Angina Questionnaire"
* procedureInformation.preprocedureInformation.saQuestionnaire ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.saQuestionnaire ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.saQuestionnaire ^mapping[=].map = "Observation.where(code.coding.system='http://loinc.org' and code.coding.code=88479-1 and component.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SeattleAnginaQs) and component.valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SeattleAnginaAs))"

* procedureInformation.preprocedureInformation.roseDyspneaScale  4..* string  "Responses to the Rose Dyspnea Scale Questionnaire"
* procedureInformation.preprocedureInformation.roseDyspneaScale ^mapping[+].identity = "Output"
* procedureInformation.preprocedureInformation.roseDyspneaScale ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureInformation.roseDyspneaScale ^mapping[=].map = "Observation.where(code.coding.system='http://loinc.org' and code.coding.code=89440-2 and component.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/RoseDyspneaQ) and component.valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/YesNo))"

* procedureInformation.closureMethods 1..1 BackboneElement "Method and Device used for procedure closures"

* procedureInformation.closureMethods.arterialAccessClosureMethod 0..* string  "Arterial Access Closure Method"
* procedureInformation.closureMethods.arterialAccessClosureMethod ^mapping[+].identity = "Output"
* procedureInformation.closureMethods.arterialAccessClosureMethod ^mapping[=].language = #application/fhir
* procedureInformation.closureMethods.arterialAccessClosureMethod ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014074 and valueString.exists())"

* procedureInformation.closureMethods.closureMethodUdi 0..* string  "Arterial Access Closure Devices"
* procedureInformation.closureMethods.closureMethodUdi ^mapping[+].identity = "FHIR"
* procedureInformation.closureMethods.closureMethodUdi ^mapping[=].language = #application/fhir
* procedureInformation.closureMethods.closureMethodUdi ^mapping[=].map = "%procedure.focalDevice.manipulated.resolve()"
* procedureInformation.closureMethods.closureMethodUdi ^mapping[+].identity = "Output"
* procedureInformation.closureMethods.closureMethodUdi ^mapping[=].language = #application/fhir
* procedureInformation.closureMethods.closureMethodUdi ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device"

* procedureInformation.preprocedureLabs 1..1 BackboneElement "Preprocedure Lab Results"

* procedureInformation.preprocedureLabs.hemoglobin 1..* string "Hemoglobin" "Indicate the hemoglobin (Hgb) value in g/dL."
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[=].map = "Observation.where(code.coding.code = '718-7' and effectiveDateTime >= %procedure.period.end - 30 days and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.hemoglobin ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.creatinine 1..* string "Creatinine" "Indicate the creatinine (Cr) level in mg/dL."
* procedureInformation.preprocedureLabs.creatinine ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.creatinine ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.creatinine ^mapping[=].map = "Observation.where(code.coding.code = '2160-0' and effectiveDateTime >= %period.start and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.creatinine ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.creatinine ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.creatinine ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.troponinI  1..* string "PreProcedure Troponin I" "Indicate the Troponin I result in ng/mL."
* procedureInformation.preprocedureLabs.troponinI ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].map = "Observation.where(code.coding.code = '10839-9' and effectiveDateTime >= %period.start and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.troponinI ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.troponinT  1..* string "PreProcedure Troponin T" "Indicate the Troponin I result in ng/mL."
* procedureInformation.preprocedureLabs.troponinI ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].map = "Observation.where(code.coding.code = '6598-7' and effectiveDateTime >= %period.start and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.troponinI ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.troponinI ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.totalCholesterol  1..* string "PreProcedure Total Cholesterol" "Indicate the cholesterol level mg/dL."
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[=].map = "Observation.where(code.coding.code = '2093-3' and  and effectiveDateTime >= %procedure.period.start - 30 days and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.totalCholesterol ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.preprocedureLabs.highDensityLipoprotein  1..* string "PreProcedure Total Cholesterol" "Indicate the cholesterol level mg/dL."
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[+].identity = "FHIR"
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[=].map = "Observation.where(code.coding.code = '2085-9' and  and effectiveDateTime >= %procedure.period.start - 30 days and effectiveDateTime < %procedure.period.start)"
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[+].identity = "Output"
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[=].language = #application/fhir
* procedureInformation.preprocedureLabs.highDensityLipoprotein ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.postprocedureLabs 1..1 BackboneElement "Results of Postprocedure Labs"

* procedureInformation.postprocedureLabs.hemoglobin 1..* string "Hemoglobin" "Indicate the hemoglobin (Hgb) value in g/dL."
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[+].identity = "FHIR"
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[=].map = "Observation.where(code.coding.code = '718-7' and effectiveDateTime >= %procedure.period.end and effectiveDateTime < %procedure.period.end + 72 hours)"
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[+].identity = "Output"
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.hemoglobin ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.postprocedureLabs.creatinine 1..* string "Creatinine" "Indicate the creatinine (Cr) level in mg/dL."
* procedureInformation.postprocedureLabs.creatinine ^mapping[+].identity = "FHIR"
* procedureInformation.postprocedureLabs.creatinine ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.creatinine ^mapping[=].map = "Observation.where(code.coding.code = '2160-0' and effectiveDateTime >= %procedure.period.end and effectiveDateTime < %procedure.period.end + 5 days)"
* procedureInformation.postprocedureLabs.creatinine ^mapping[+].identity = "Output"
* procedureInformation.postprocedureLabs.creatinine ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.creatinine ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.postprocedureLabs.troponinI  1..* string "PreProcedure Troponin I" "Indicate the Troponin I result in ng/mL."
* procedureInformation.postprocedureLabs.troponinI ^mapping[+].identity = "FHIR"
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].map = "Observation.where(code.coding.code = '10839-9' and effectiveDateTime >= %procedure.period.end + 6 hours and effectiveDateTime < %procedure.period.end + 24 hours)"
* procedureInformation.postprocedureLabs.troponinI ^mapping[+].identity = "Output"
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.postprocedureLabs.troponinT  1..* string "PreProcedure Troponin T" "Indicate the Troponin I result in ng/mL."
* procedureInformation.postprocedureLabs.troponinI ^mapping[+].identity = "FHIR"
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].map = "Observation.where(code.coding.code = '6598-7' and effectiveDateTime >= %procedure.period.end + 6 hours and effectiveDateTime < %procedure.period.end + 24 hours)"
* procedureInformation.postprocedureLabs.troponinI ^mapping[+].identity = "Output"
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].language = #application/fhir
* procedureInformation.postprocedureLabs.troponinI ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"

* procedureInformation.cathLabVisit 1..1 BackboneElement "Information Regarding the Cath Lab Procedure"

* procedureInformation.cathLabVisit.indicationsForCathLabVisit 0..* string  "Indications for Cath Lab Visit" "Indicate the patient symptoms or condition prompting the cath lab visit."

* procedureInformation.cathLabVisit.chestPainSymptomAssessment  0..* string "Chest Pain Symptom Assessment" "Indicate the chest pain symptom assessment as diagnosed by the physician or described by the patient."
* procedureInformation.cathLabVisit.chestPainSymptomAssessment ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.chestPainSymptomAssessment ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.chestPainSymptomAssessment ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001274 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ChestPainSymptomAssessment))"

* procedureInformation.cathLabVisit.cardiovascularInstabilitytype 0..* string "Cardiovascular Instability Type" "Cardiovascular instability includes, but is not limited to, persistent ischemic symptoms (such as chest pain or ST elevation), cardiogenic shock, ventricular arrhythmias, symptoms of acute heart failure, or hemodynamic instability (not cardiogenic shock)."
* procedureInformation.cathLabVisit.cardiovascularInstabilitytype ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.cardiovascularInstabilitytype ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.cardiovascularInstabilitytype ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014004 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacInstabilityType))"

* procedureInformation.cathLabVisit.ventricularSupport 0..* string "Ventricular Support" "Indicate if the patient required any type of ventricular support (i.e. IV vasopressors or mechanical)."
* procedureInformation.cathLabVisit.ventricularSupport ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.ventricularSupport ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.ventricularSupport ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001276 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/VentricularSupport))"

* procedureInformation.cathLabVisit.pharmacologicVasopressorSupport 0..* string "Pharmacologic Vasopressor Support" "Indicate if the patient required pharmacologic vasopressor support."
* procedureInformation.cathLabVisit.pharmacologicVasopressorSupport ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.pharmacologicVasopressorSupport ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.pharmacologicVasopressorSupport ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001277 and valueBoolen.exists())"

* procedureInformation.cathLabVisit.mechanicalVentricularSupportTiming 0..* string "Mechanical Ventricular Support Timing" "Indicate when the mechanical ventricular support device was placed."
* procedureInformation.cathLabVisit.mechanicalVentricularSupportTiming ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.mechanicalVentricularSupportTiming ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.mechanicalVentricularSupportTiming ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001277 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/MechanicalVentricularSupportTiming))"

* procedureInformation.cathLabVisit.evaluationForSurgeryType 0..* string "Evaluation for Surgery Type" "Indicate the type of surgery for which the diagnostic coronary angiography is being performed."
* procedureInformation.cathLabVisit.evaluationForSurgeryType ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.evaluationForSurgeryType ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.evaluationForSurgeryType ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014009 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/MechanicalVentricularSupportTiming))"

* procedureInformation.cathLabVisit.functionalCapacity 1..* string "Functional Capacity" "Indicate the functional capacity of the patient as documented by the physician in the medical record."
* procedureInformation.cathLabVisit.functionalCapacity ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.functionalCapacity ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.functionalCapacity ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142418 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/FunctionalCapacity))"

* procedureInformation.cathLabVisit.surgicalRisk 0..* string "Surgical Risk" "Indicate the surgical risk category as documented by the physician in the medical record."
* procedureInformation.cathLabVisit.surgicalRisk ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.surgicalRisk ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.surgicalRisk ^mapping[=].map = "Observation.where( code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142420 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SurgicalRisk))"

* procedureInformation.cathLabVisit.solidOrganTransplantdonor  0..* string "Instance and Type of Organ Donor"
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/OrganDonor) or code.coding.code = '51032003')"
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.solidOrganTransplantdonor ^mapping[=].map = "Observation"

* procedureInformation.cathLabVisit.valvularDiseaseStenosis   0..* string "Valvular Disease Stenosis" "Indicate the severity and cardiac valve(s) with stenosis as diagnosed by the physician."
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularStenosis))"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularStenosis))"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseStenosis ^mapping[=].map = "Observation.where(Observation.valueCodeableConcept.exists() or Observation.valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularDiseaseStenosisSeverity)"


* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation 0..* string "Valvular Disease Stenosis"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].map = "Condition.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularStenosis))"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[+].identity = "FHIR"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].map = "Observation.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularStenosis))"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[+].identity = "Output"
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].language = #application/fhir
* procedureInformation.cathLabVisit.valvularDiseaseRegurgitation ^mapping[=].map = "Observation.where(Observation.valueCodeableConcept.exists() or Observation.valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ValvularDiseaseRegurgitationSeverity)"

* procedureInformation.coronaryAnatomy 1..1 BackboneElement "Coronary Anatomy"

* procedureInformation.coronaryAnatomy.nativeVessel 1..1 BackboneElement "Native Vessel"

* procedureInformation.coronaryAnatomy.nativeVessel.lesionSegmentNumber 0..* string "Native Lesion Segment Number"
* procedureInformation.coronaryAnatomy.nativeVessel.lesionSegmentNumber ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.nativeVessel.lesionSegmentNumber ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.nativeVessel.lesionSegmentNumber ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012984 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LesionSegmentNumber)"

* procedureInformation.coronaryAnatomy.nativeVessel.coronaryVesselStenosis 0..* string "Coronary Vessel Stenosis" "Indicate the best estimate of the most severe percent stenosis in the segment of the native coronary vessel identified."
* procedureInformation.coronaryAnatomy.nativeVessel.coronaryVesselStenosis ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.nativeVessel.coronaryVesselStenosis ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.nativeVessel.coronaryVesselStenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012981 and valueQuantity.exists())"

* procedureInformation.coronaryAnatomy.nativeVessel.adjunctiveMeasurementsObtained 0..* string "Adjunctive Measurements Obtained" "Indicate if an invasive diagnostic measurement was obtained of the native vessel segment."
* procedureInformation.coronaryAnatomy.nativeVessel.adjunctiveMeasurementsObtained ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.nativeVessel.adjunctiveMeasurementsObtained ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.nativeVessel.adjunctiveMeasurementsObtained ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012979 and valueBoolean.exists()"

* procedureInformation.coronaryAnatomy.nativeVessel.instantaneousWaveFreeRatio 0..* string "Instantaneous Wave-Free Ratio" "Indicate the instantaneous wave-free ratio (iFR ratio) of the native vessel segment."
* procedureInformation.coronaryAnatomy.nativeVessel.instantaneousWaveFreeRatio ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.nativeVessel.instantaneousWaveFreeRatio ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.nativeVessel.instantaneousWaveFreeRatio ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012980 and valueBoolean.exists())"

* procedureInformation.coronaryAnatomy.graftVessel 1..1 BackboneElement "Graft Vessel"

* procedureInformation.coronaryAnatomy.graftVessel.lesionSegmentNumber  0..* string "Graft Lesion Segment Number"
* procedureInformation.coronaryAnatomy.graftVessel.lesionSegmentNumber ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.lesionSegmentNumber ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.lesionSegmentNumber ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012984 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LesionSegmentNumber))"

* procedureInformation.coronaryAnatomy.graftVessel.coronaryVesselStenosis 0..* string "Coronary Vessel Stenosis" "Indicate the best estimate of the most severe percent stenosis in the segment of the graft coronary vessel identified."
* procedureInformation.coronaryAnatomy.graftVessel.coronaryVesselStenosis ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.coronaryVesselStenosis ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.coronaryVesselStenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012982 and valueQuantity.exists())"

* procedureInformation.coronaryAnatomy.graftVessel.cabg 0..1 string "Graft Vessel CABG" "Indicate the vessel that was used for the coronary artery bypass graft."
* procedureInformation.coronaryAnatomy.graftVessel.cabg ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.cabg ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.cabg ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012983 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/GraftVesselCABGVessel))"

* procedureInformation.coronaryAnatomy.graftVessel.adjunctiveMeasurementsObtained 0..1 string "Adjunctive Measurements Obtained" "Indicate if an invasive diagnostic measurement was obtained of the graft vessel intra-procedure."
* procedureInformation.coronaryAnatomy.graftVessel.adjunctiveMeasurementsObtained ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.adjunctiveMeasurementsObtained ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.adjunctiveMeasurementsObtained ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012982 and valueBoolean.exists())"

* procedureInformation.coronaryAnatomy.graftVessel.instantaneousWaveFreeRatio  0..* string "Instantaneous Wave Free Ratio" "Indicate the instantaneous wave-free ratio (iFR ratio) of the graft vessel segment."
* procedureInformation.coronaryAnatomy.graftVessel.instantaneousWaveFreeRatio ^mapping[+].identity = "Output"
* procedureInformation.coronaryAnatomy.graftVessel.instantaneousWaveFreeRatio ^mapping[=].language = #application/fhir
* procedureInformation.coronaryAnatomy.graftVessel.instantaneousWaveFreeRatio ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012980 and valueBoolean.exists())"

* procedureInformation.pciProcedure 1..1 BackboneElement "information regarding the PCI Procedure"

* procedureInformation.pciProcedure.pciStatus 0..* string "PCI Status" "Indicate the status of the PCI. The status is determined at the time the operator decides to perform a PCI."
* procedureInformation.pciProcedure.pciStatus ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.pciStatus ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciStatus ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012986 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PCIStatus))"

* procedureInformation.pciProcedure.hypothermiaInduced 0..* string "Hypothermia Induced Timing" "Indicate when hypothermia was initiated."
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[+].identity = "FHIR"
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[=].map = "Procedure.where(code.coding.code.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/HypothermiaInduced))"
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.hypothermiaInduced ^mapping[=].map = "Procedure.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013039 and valueDateTime.exists())"

* procedureInformation.pciProcedure.decisionForPciWithSurgicalConsult 1..* string "Decision for PCI with Surgical Consult" "Indicate if a cardiac surgical consult was obtained prior to engaging in PCI."
* procedureInformation.pciProcedure.decisionForPciWithSurgicalConsult ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.decisionForPciWithSurgicalConsult ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.decisionForPciWithSurgicalConsult ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142366 and valueBoolean.exists())"

* procedureInformation.pciProcedure.cardiovascularTreatmentDecision 1..* string "Cardiovascular Treatment Decision" "Indicate the cardiovascular surgery recommendation and/or patient/family decision."
* procedureInformation.pciProcedure.cardiovascularTreatmentDecision ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.cardiovascularTreatmentDecision ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.cardiovascularTreatmentDecision ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142367 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiovascularTreatmentDecision))"


* procedureInformation.pciProcedure.pciForMultivesselDisease  1..* string "PCI for MultiVessel Disease" "Indicate if the PCI procedure was performed in the presence of multi-vessel disease."
* procedureInformation.pciProcedure.pciForMultivesselDisease ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.pciForMultivesselDisease ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciForMultivesselDisease ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013007 and valueBoolean.exists())"


* procedureInformation.pciProcedure.multiVesselProcedureType  0..* string "Multi-vessel Procedure Type" "Indicate the type of multi-vessel PCI procedure that was performed during this lab visit."
* procedureInformation.pciProcedure.multiVesselProcedureType ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.multiVesselProcedureType ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.multiVesselProcedureType ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013008 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/MultivesselProcedureType))"

* procedureInformation.pciProcedure.percutaneousCoronaryInterventionIndication 1..* string "Percutaneous Coronary Intervention Indication" "Indicate the reason the percutaneous coronary intervention PCI is being performed."
* procedureInformation.pciProcedure.percutaneousCoronaryInterventionIndication ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.percutaneousCoronaryInterventionIndication ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.percutaneousCoronaryInterventionIndication ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000880 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PCIIndications))"

* procedureInformation.pciProcedure.acuteCoronarySyndromeSymptom 1..* string "Acute Coronary Syndrome Symptom" "Acute Coronary Syndrome Symptom"
* procedureInformation.pciProcedure.acuteCoronarySyndromeSymptom ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.acuteCoronarySyndromeSymptom ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.acuteCoronarySyndromeSymptom ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013003 and valueDateTime.exists())"

* procedureInformation.pciProcedure.syntaxScore 1..1 string "Syntax Score" "Indicate the Syntax Score for the PCI procedure."
* procedureInformation.pciProcedure.syntaxScore ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.syntaxScore ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.syntaxScore ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424796 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/SyntaxScore))"

* procedureInformation.pciProcedure.stemiOrStemiEquivalentFirstNoted  0..1 string "STEMI or STEMI Equivalent First Noted" "Indicate if a STEMI or STEMI equivalent was noted on either the first ECG or a subsequent ECG."
* procedureInformation.pciProcedure.stemiOrStemiEquivalentFirstNoted ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.stemiOrStemiEquivalentFirstNoted ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.stemiOrStemiEquivalentFirstNoted     ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000180 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/STEMIFirstNoted))"

* procedureInformation.pciProcedure.subsequentEcgWithStemiOrStemiEquivalent  0..1 string "Subsequent ECG with STEMI or STEMI Equivalent" "Indicate the Subsequent ECG date and time."
* procedureInformation.pciProcedure.subsequentEcgWithStemiOrStemiEquivalent ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.subsequentEcgWithStemiOrStemiEquivalent ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.subsequentEcgWithStemiOrStemiEquivalent ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012995 and valueDateTime.exists())"

* procedureInformation.pciProcedure.subsequentEcgObtainedInEmergencyDepartment 0..1 string "Subsequent ECG obtained in Emergency Department" "Indicate if the subsequent ECG was obtained in the Emergency Department at this facility."
* procedureInformation.pciProcedure.subsequentEcgObtainedInEmergencyDepartment ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.subsequentEcgObtainedInEmergencyDepartment ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.subsequentEcgObtainedInEmergencyDepartment ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012995 and valueBoolean.exists())"

* procedureInformation.pciProcedure.patientTransferredInForImmediatePciForStemi 0..1 string "Patient Transferred In for Immediate PCI for STEMI" "Indicate if the patient was transferred from another facility to have a primary PCI for STEMI at this facility."
* procedureInformation.pciProcedure.patientTransferredInForImmediatePciForStemi ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.patientTransferredInForImmediatePciForStemi ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.patientTransferredInForImmediatePciForStemi ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014084 and valueBoolean.exists())"

* procedureInformation.pciProcedure.emergencyDepartmentPresentationAtReferringFacility 0..1 string "Emergency Department Presentation at Referring Facility" "Code the date and time of arrival to the original, transferring facility as documented in the medical record."
* procedureInformation.pciProcedure.emergencyDepartmentPresentationAtReferringFacility ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.emergencyDepartmentPresentationAtReferringFacility ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.emergencyDepartmentPresentationAtReferringFacility ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012999 and valueDateTime.exists())"

* procedureInformation.pciProcedure.firstDeviceActivation 0..1 string "First Device Activation" "Indicate the date and time the first device was activated regardless of type of device used."
* procedureInformation.pciProcedure.firstDeviceActivation ^comment = """
Use the earliest time from the following:
1. Time of the first balloon inflation.
2. Time of the first stent deployment.
3. Time of the first treatment of lesion (AngjoJet or other thrombectomy/aspiration device, laser, rotational atherectomy).
4. If the lesion cannot be crossed with a guidewire or device (and thus none of the above apply), use the time of guidewire introduction.
This is a process measure about the timeliness of treatment. It is NOT a clinical outcomes measure based on TIMI flow or clinical reperfusion. It does not matter whether the baseline angiogram showed TIMI 3 flow or if the final post-PCI angiogram showed TIMI 0 flow. What is being measured is the time of the first mechanical treatment of the culprit lesion, not the time when TIMI 3 flow was (or was not) restored.
""" 
* procedureInformation.pciProcedure.firstDeviceActivation ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.firstDeviceActivation ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.firstDeviceActivation ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012993 and valueDateTime.exists())"

* procedureInformation.pciProcedure.patientCenteredReasonForDelayInPci 0..1 string "Patient Centered Reason for Delay in PCI" "Indicate the patient-centered reason for delay in performing the percutaneous coronary intervention (PCI), if needed."
* procedureInformation.pciProcedure.patientCenteredReasonForDelayInPci ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.patientCenteredReasonForDelayInPci ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.patientCenteredReasonForDelayInPci ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012993 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PatientCenteredReasonforDelay))"

* procedureInformation.pciProcedure.pciOperator 1..1 string "PCI Operator" "The operator who is performing the PCI procedure"
* procedureInformation.pciProcedure.pciOperator ^mapping[+].identity = "FHIR"
* procedureInformation.pciProcedure.pciOperator ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciOperator ^mapping[=].map = "%Procedure.participant.where( function.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/PCIOperator) ).actor.resolve()"
* procedureInformation.pciProcedure.pciOperator ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.pciOperator ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciOperator ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"

* procedureInformation.pciProcedure.arterialAccessSite 1..1 string "Arterial Access Site" "Indicate the location of percutaneous entry for the procedure."
* procedureInformation.pciProcedure.arterialAccessSite ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.arterialAccessSite ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.arterialAccessSite ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014079 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/ArterialAccessSite))"

* procedureInformation.pciProcedure.mechanicalVentilatorSupport 1..1 string "Mechanical Ventricular Support" "Indicate if the patient required mechanical ventricular support."
* procedureInformation.pciProcedure.mechanicalVentilatorSupport ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.mechanicalVentilatorSupport ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.mechanicalVentilatorSupport ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014009 and valueBoolean.exists())"

* procedureInformation.pciProcedure.mechanicalVentilatorSupportDevice 0..* string "Mechanical Ventricular Support Device" "Indicate the mechanical ventricular support device used."
* procedureInformation.pciProcedure.mechanicalVentilatorSupportDevice ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.mechanicalVentilatorSupportDevice ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.mechanicalVentilatorSupportDevice ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001278 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/VentricularSupportDeviceType))"

* procedureInformation.pciProcedure.pciProcedureMedicationCode 0..* string "PCI Procedure Medication Code" "Medications administred intra-procedure"
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[+].identity = "FHIR"
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[=].map = "MedicationStatement.where(effectiveDateTime >= %procedure.period.start and effectiveDateTime <= %procedure.period.end)"
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.pciProcedureMedicationCode ^mapping[=].map = "MedicationStatement"

* procedureInformation.pciProcedure.lesionsAndDevices 1..1 BackboneElement "Information on the Lesions treated and Devices Used"

* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter 0..* string "Lesion Counter" "The lesion counter is used to distinguish between multiple lesions on which a PCI is attempted or performed."
* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter ^comment = """When specifying intracoronary devices, list all treated lesions in which the device was utilized.
The software-assigned lesion counter should start at one and be incremented by one for each lesion. The lesion counter is reset back to one for each new PCI lab visit.
At least one lesion must be specified for each PCI procedure.""" 
* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.lesionCounter ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142441 and valueQuantity.exists())"

//Note: This is a possible multi-code, Observation only holds one value.  Would need to put answers in .component
* procedureInformation.pciProcedure.lesionsAndDevices.nativeLesionSegmentNumber 0..* string "Native Lesion Segment Number" "Indicate the segment that the current lesion spans." 
* procedureInformation.pciProcedure.lesionsAndDevices.nativeLesionSegmentNumber ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.nativeLesionSegmentNumber ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.nativeLesionSegmentNumber ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100012984 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LesionSegmentNumber))"

* procedureInformation.pciProcedure.lesionsAndDevices.culpritStenosis 1..1 string "Culprit Stenosis" "Indicate if the stenosis is considered to be responsible for the acute coronary syndrome."
* procedureInformation.pciProcedure.lesionsAndDevices.culpritStenosis ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.culpritStenosis ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.culpritStenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=371895000 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.stenosisImmediatelyPriorToTreatment 0..* string "Stenosis Immediately Prior to Treatment" "Indicate the percent diameter stenosis immediately prior to the treatment of this lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.stenosisImmediatelyPriorToTreatment ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.stenosisImmediatelyPriorToTreatment ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.stenosisImmediatelyPriorToTreatment ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142442 and valueQuantity.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.chronicTotalOcclusion 1..1 string "Chronic Total Occlusion" "Indicate if the segment with 100% pre-procedure stenosis was presumed to be 100% occluded for at least 3 months previous to this procedure AND not related to a clinical event prompting (or leading to) this procedure."
* procedureInformation.pciProcedure.lesionsAndDevices.chronicTotalOcclusion ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.chronicTotalOcclusion ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.chronicTotalOcclusion ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000290 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention 0..* string "TIMI Flow (Pre-Intervention)" "Indicate the pre-intervention TIMI flow."
* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention ^comment = "If a lesion spans multiple segments with different TIMI flow, code the lowest TIMI flow within the entire lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.timiFlowPreIntervention ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=112000000348 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/TIMIFlow))"

* procedureInformation.pciProcedure.lesionsAndDevices.previouslyTreatedLesion 0..1 string "Previously Treated Lesion" "Indicate the date the lesion has been treated in a prior episode of care."
* procedureInformation.pciProcedure.lesionsAndDevices.previouslyTreatedLesion ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.previouslyTreatedLesion ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.previouslyTreatedLesion ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013015 and valueDateTime.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.inStentRestenosis 0..1 string "In-stent Restenosis" "Indicate if the previously treated and stented lesion is being treated for in-stent restenosis."
* procedureInformation.pciProcedure.lesionsAndDevices.inStentRestenosis ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.inStentRestenosis ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.inStentRestenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013014 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.inStentThrombosis 0..1 string "In-stent Thrombosis" "Indicate if the previously treated and stented lesion is being treated because of the presence of a thrombus in the stent."
* procedureInformation.pciProcedure.lesionsAndDevices.inStentThrombosis ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.inStentThrombosis ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.inStentThrombosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013014 and valueBoolean.exists())"


* procedureInformation.pciProcedure.lesionsAndDevices.stentType  0..1 string "Stent Type" "Indicate the type of stent used in the previously treated lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.stentType ^comment = """
 If a patient has multiple stents in the lesion code 'bioabsorbable' over either of the other two options when it is present.  
If a DES and BMS are present in the lesion, code 'DES'."""
* procedureInformation.pciProcedure.lesionsAndDevices.stentType ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.stentType ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.stentType ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000856 and valueCodableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/StentType))"

* procedureInformation.pciProcedure.lesionsAndDevices.lesionInGraft 0..1 string "Lesion In Graft" "Indicated if the lesion is in a coronary artery bypass graft."
* procedureInformation.pciProcedure.lesionsAndDevices.lesionInGraft ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionInGraft ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.lesionInGraft ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142443 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.typeOfCabgGraft  0..1 string "Type of CABG Graft" "Indicate in which type of bypass graft the lesion is located."
* procedureInformation.pciProcedure.lesionsAndDevices.typeOfCabgGraft ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.typeOfCabgGraft ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.typeOfCabgGraft ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013028 and valueCodableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CABGType))"
 
* procedureInformation.pciProcedure.lesionsAndDevices.locationInGraft 0..1 string "Location in Graft" "Indicate the location of the most severe stenosis, if the lesion is in the graft."
* procedureInformation.pciProcedure.lesionsAndDevices.locationInGraft ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.locationInGraft ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.locationInGraft ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013028 and valueCodableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LocationInGraft))"

* procedureInformation.pciProcedure.lesionsAndDevices.navigateThroughGraftToNativeLesion 0..1 string "Navigate through Graft to Native Lesion" "Indicate if treatment of the native artery lesion required navigating through a graft (to reach the lesion)."
* procedureInformation.pciProcedure.lesionsAndDevices.navigateThroughGraftToNativeLesion ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.navigateThroughGraftToNativeLesion ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.navigateThroughGraftToNativeLesion ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142348 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.lesionComplexity  0..1 string "Lesion Complexity" "Indicate the complexity of the lesion"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionComplexity ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionComplexity ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.lesionComplexity ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000866 and valueCodableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/LesionComplexity))"


* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength  0..1 string "Lesion Length"  "Indicate the length of the treated lesion in millimeters."
* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength ^comment = """If the lesion length is not available it is acceptable to code the length of the device used to treat the lesion.  

If multiple devices are used sequentially, total the individual device lengths.

Information obtained after the baseline angiogram can be used to help determine lesion length (e.g. for total occlusions where the distal vessel can not be visualized)."""
* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.lesionLength ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013030 and valueQuantity.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.severeCalcification  0..1 string "Severe Calcification" "Indicate if there was severe calcification of the lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.severeCalcification ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.severeCalcification ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.severeCalcification ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142350 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.guidewireAcrossLesion   0..1 string "Guidewire Across Lesion" "Indicate if a guidewire successfully crossed the lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.guidewireAcrossLesion ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.guidewireAcrossLesion ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.guidewireAcrossLesion ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000851 and valueBoolean.exists())"


* procedureInformation.pciProcedure.lesionsAndDevices.deviceDeployed  0..1 string "Device Deployed" "Indicate if a device was deployed during the procedure."
* procedureInformation.pciProcedure.lesionsAndDevices.deviceDeployed ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.deviceDeployed ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.deviceDeployed ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142349 and valueBoolean.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionStenosis  0..1 string "Stenosis (Post-Intervention)" "Indicate the post-intervention percent stenosis for the treated lesion."
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionStenosis ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionStenosis ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionStenosis ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142461 and valueQuantity.exists())"

* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionTimiFlow  0..1 string "TIMI Flow (Post-Intervention)" "Indicate the post-intervention TIMI flow."
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionTimiFlow ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionTimiFlow ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.lesionsAndDevices.postInterventionTimiFlow ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013016 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/TIMIFlow))"

* procedureInformation.pciProcedure.intracoronaryDevices 1..1 BackboneElement "Devices used during the PCI procedure"

* procedureInformation.pciProcedure.intracoronaryDevices.device 0..1 string "Intracoronary Device(s) Used" "Indicate the devices utilized during the current procedure."
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[+].identity = "FHIR"
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[=].map = "Procedure.focalDevice.manipulated.resolve().memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacCatheter)"
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intracoronaryDevices.device ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device"


//* procedureInformation.pciProcedure.intracoronaryDevices.associatedLesion  How to indicate multiple components?

* procedureInformation.pciProcedure.intraAndPostProcedureEvents 1..1 BackboneElement "Events occuring Intra and post-procedure"

* procedureInformation.pciProcedure.intraAndPostProcedureEvents.event 0..1 string "Intra/Post-Procedure Events" "Indicate the event that occurred between the procedure and the next procedure or discharge."
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.event ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.event ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.event ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=1000142478 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/IntraAndPostEvents) and effectiveDateTime.exists())"

* procedureInformation.pciProcedure.intraAndPostProcedureEvents.significantCoronaryArteryDissection  0..1 string "Significant Coronary Artery Dissection" "Indicate the post-intervention TIMI flow."
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.significantCoronaryArteryDissection ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.significantCoronaryArteryDissection ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.significantCoronaryArteryDissection ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100000883 and valueBoolean.exists())"

* procedureInformation.pciProcedure.intraAndPostProcedureEvents.numberOfUnitsOfPrbcsTransfused 0..1 string "Number of units of PRBCs transfused" "Indicate the number of transfusion(s) of packed red blood cells."
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.numberOfUnitsOfPrbcsTransfused ^mapping[+].identity = "Output"
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.numberOfUnitsOfPrbcsTransfused ^mapping[=].language = #application/fhir
* procedureInformation.pciProcedure.intraAndPostProcedureEvents.numberOfUnitsOfPrbcsTransfused ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014031 and valueQuantity.exists()) and effectiveDateTime.exists()"

* discharge 1..1 BackboneElement "Discharge Information"

* discharge.interventionsThisHospitalization 0..1 string "Interventions This Hospitalization" "Indicate other interventions (percutaneous or surgical) that occurred during this hospitalization."
* discharge.interventionsThisHospitalization ^mapping[+].identity = "Output"
* discharge.interventionsThisHospitalization ^mapping[=].language = #application/fhir
* discharge.interventionsThisHospitalization ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001284 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/InterventionTypes)"

* discharge.cabgStatus 0..1 string "CABG Status" "Indicate the status of the coronary artery bypass graft (CABG) surgery."
* discharge.cabgStatus ^mapping[+].identity = "Output"
* discharge.cabgStatus ^mapping[=].language = #application/fhir
* discharge.cabgStatus ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014080 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CABGStatus)"

* discharge.cabgIndication 0..1 string "CABG Indication" "Indicate the reason coronary artery bypass graft (CABG) surgery is being performed."
* discharge.cabgStatus ^mapping[+].identity = "Output"
* discharge.cabgStatus ^mapping[=].language = #application/fhir
* discharge.cabgStatus ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001289 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CABGIndication)"

* discharge.dischargeProvider 1..1 string "Discharge Provider" "Provider that discharged the patient"
* discharge.dischargeProvider ^mapping[+].identity = "FHIR"
* discharge.dischargeProvider ^mapping[=].language = #application/fhir
* discharge.dischargeProvider ^mapping[=].map = "Encounter.where(type.code.coding.code=58000006).participant.individual.resolve()"
* discharge.dischargeProvider ^mapping[+].identity = "Output"
* discharge.dischargeProvider ^mapping[=].language = #application/fhir
* discharge.dischargeProvider ^mapping[=].map = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
 
* discharge.transferredForCabg 0..1 string "Transferred for CABG" "Indicate if the patient was transferred for the purpose of performing a coronary artery bypass graft."
* discharge.transferredForCabg ^mapping[+].identity = "Output"
* discharge.transferredForCabg ^mapping[=].language = #application/fhir
* discharge.transferredForCabg ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100001296 and valueBoolean.exists())"

* discharge.cabgPlannedAfterDischarge 0..1 string "CABG Planned after Discharge" "Indicate if the patient has a CABG planned after discharge."
* discharge.cabgPlannedAfterDischarge ^mapping[+].identity = "Output"
* discharge.cabgPlannedAfterDischarge ^mapping[=].language = #application/fhir
* discharge.cabgPlannedAfterDischarge ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=10001424792 and valueBoolean.exists())"

* discharge.cardiacRehabilitationReferral 0..1 string "Cardiac Rehabilitation Referral" "Indicate if there was written documentation of a referral for the patient (by the physician, nurse, or other personnel) to an outpatient cardiac rehabilitation program, or a documented medical or patient-centered reason why such a referral was not made."
* discharge.cardiacRehabilitationReferral ^mapping[+].identity = "Output"
* discharge.cardiacRehabilitationReferral ^mapping[=].language = #application/fhir
* discharge.cardiacRehabilitationReferral ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014067 and valueCodeableConcept.memberOf(http://hl7.org/fhir/us/fhir-registry-protocols-ig/ValueSet/CardiacRehabilitationReferral))"

* discharge.deathDuringTheProcedure 0..1 string "Death During the Procedure" "Indicate if the patient expired during the procedure."
* discharge.deathDuringTheProcedure ^comment = """Make sure to only capture 'Death during the procedure' in the procedure appropriate registry. 
For example, if the patient had a CathPCI procedure and a TVT procedure in the same episode of care (hospitalization) but different cath lab visits and the death occurred during the TVT procedure.
Code 'Yes' only in the TVT Registry and not the CathPCI Registry.  If the CathPCI procedure and TVT procedure occurred during the same cath lab visit then code 'Yes' in both registries."""
* discharge.deathDuringTheProcedure ^mapping[+].identity = "Output"
* discharge.deathDuringTheProcedure ^mapping[=].language = #application/fhir
* discharge.deathDuringTheProcedure ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100014067 and valueBoolean.exists())"

* discharge.dischargeMedicationReconciliationCompleted 0..1 string "Discharge Medication Reconciliation Completed" "Indicate if the medication reconciliation was completed as recommended by the Joint Commission's National Patient Safety Goals."
* discharge.dischargeMedicationReconciliationCompleted ^mapping[+].identity = "Output"
* discharge.dischargeMedicationReconciliationCompleted ^mapping[=].language = #application/fhir
* discharge.dischargeMedicationReconciliationCompleted ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013084 and valueBoolean.exists())"

* discharge.dischargeMedicationsReconciled 0..* string "Discharge Medications Reconciled" "Indicate the specific medication classes that were reconciled."
* discharge.dischargeMedicationsReconciled ^mapping[+].identity = "Output"
* discharge.dischargeMedicationsReconciled ^mapping[=].language = #application/fhir
* discharge.dischargeMedicationsReconciled ^mapping[=].map = "Observation.where(code.coding.system='http://hl7.org/fhir/us/fhir-registry-protocols-ig/CodeSystem/NCDRQuestionCodesCS' and code.coding.code=100013085 and valueBoolean.exists())"

---

// File: input/fsh/Cath-PCI-SD-Example.fsh

Logical: Example_Submission_map
Id: ExampleMap
Title: "Example Submission Map"
Description: """This is an example of the data that would be used for a Resgistry Submission.
The full map is a logical model as that allows conformance to the FHIR Standard the way a custom Resource would not.
Each element has the short name of the data, a full description and the paths to fetch and place the information, by data standard type, for each.
A section (such as Demographics) is a BackboneElement (holds no values).  All subordinate elements are strings.
Each mapping includes the following:
* identity = standard used for the mapping (e.g., FHIR)
* language = mime type that matches identity
* map = FHIRPath expression of the path to the data
* comment = *Output mapping only* Resource/Profile for inclusion in the Submission Bundle
"""
// * ^baseDefinition = "http://hl7.org/fhir/StructureDefinition/base"
* ^version = "5.0"
* ^identifier.use = #official
* ^date = "2021-11-01"
* ^publisher = "Example Registry"
* ^contact.name = "Jane Smith"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "mailto:noreply@example.org"
* ^kind = #logical
//Mappings so that things show up in the mappings page on the IG
* ^mapping[+].identity = "FHIR"
* ^mapping[=].uri = "http://fhir.hl7.org"
* ^mapping[=].name = "Fast Health Interoperability Resources"
* ^mapping[=].comment = "Path to where in a FHIR Resource the data element is found"
* ^mapping[+].identity = "CDA"
* ^mapping[=].uri = "http://build.fhir.org/ig/HL7/cda-core-2.0/"
* ^mapping[=].name = "Clinical Document Architecture"
* ^mapping[=].comment = "Path to where in a CDA 2.0/CCDA 2.1 Document the data element is found"
* ^mapping[+].identity = "HL7V2"
* ^mapping[=].uri = "http://www.hl7.eu/refactored/index.html"
* ^mapping[=].name = "HL7 V2 Messages"
* ^mapping[=].comment = "Path to where in a HL7 V2 Message the data element is found"
* ^mapping[+].identity = "Output"
* ^mapping[=].uri = "http://hl7.org/fhir/us/core"
* ^mapping[=].name = "Submission Data Output location"
* ^mapping[=].comment = "Location within the requirements profile to place the data for submission in US Core or FHIR Core Resources"

* demographics 1..1 BackboneElement "Patient Demographics"

* demographics.lastName 1..1 string "Last Name" "Indicate the patient's last name. Hyphenated names should be recorded with a hyphen."
* demographics.lastName ^mapping[+].identity = "FHIR" // Always "Source Standard"
* demographics.lastName ^mapping[=].language = #application/fhir // mimetype of standard 
* demographics.lastName ^mapping[=].map = "Patient.name.family" // actual Xpath to data 
* demographics.lastName ^mapping[+].identity = "CDA"
* demographics.lastName ^mapping[=].language = #application/hl7-sda+xml // actual registered mimetype
* demographics.lastName ^mapping[=].map = "ClinicalDocument.recordTarget.patient.name.family"
* demographics.lastName ^mapping[+].identity = "HL7V2"
* demographics.lastName ^mapping[=].language = #application/edi-hl7v2 // discussed in InM but I don"t know if it was registered
* demographics.lastName ^mapping[=].map = "ADT_A01.PID.5.1" 
* demographics.lastName ^mapping[+].identity = "Output"
* demographics.lastName ^mapping[=].language = #application/fhir // output is always FHIR 
* demographics.lastName ^mapping[=].map = "Patient.name.family" // actual Xpath to data within profile in requirements
* demographics.lastName ^mapping[=].comment = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient.name.family" // profile for Bundle inclusion

* demographics.firstName 1..1 string "First Name" "Indicate the patient's first name."
* demographics.firstName ^mapping[+].identity = "FHIR"
* demographics.firstName ^mapping[=].language = #application/fhir
* demographics.firstName ^mapping[=].map = "Patient.name.given[0]"
* demographics.firstName ^mapping[+].identity = "CDA"
* demographics.firstName ^mapping[=].language = #application/hl7-sda+xml
* demographics.firstName ^mapping[=].map = "ClinicalDocument.recordTarget.patient.name.given[1]"
* demographics.firstName ^mapping[+].identity = "HL7V2"
* demographics.firstName ^mapping[=].language = #application/edi-hl7v2
* demographics.firstName ^mapping[=].map = "ADT_A01.PID.5.2"
* demographics.firstName ^mapping[+].identity = "Output"
* demographics.firstName ^mapping[=].language = #application/fhir 
* demographics.firstName ^mapping[=].map = "Patient.name.given" 
* demographics.firstName ^mapping[=].comment = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient.name.given[0]"

* demographics.middleName 0..* string "Middle Name" "Indicate the patient's middle names."
* demographics.middleName ^mapping[+].identity = "FHIR"
* demographics.middleName ^mapping[=].language = #application/fhir
* demographics.middleName ^mapping[=].map = "Patient.name.given[position()>0]"
* demographics.middleName ^mapping[+].identity = "CDA"
* demographics.middleName ^mapping[=].language = #application/hl7-sda+xml
* demographics.middleName ^mapping[=].map = "ClinicalDocument.recordTarget.patient.name.given[position()>1]"  
* demographics.middleName ^mapping[+].identity = "HL7V2"
* demographics.middleName ^mapping[=].language = #application/edi-hl7v2
* demographics.middleName ^mapping[=].map = "ADT_A01.PID.5.3"
* demographics.middleName ^mapping[+].identity = "Output"
* demographics.middleName ^mapping[=].language = #application/fhir // mimetype of standard 
* demographics.middleName ^mapping[=].map = "Patient.name.given" // actual Xpath to data within profile in requirements
* demographics.middleName ^mapping[=].comment = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient.name.given[position()>1]"

* episodeInformation 1..1 BackboneElement "CathPCI Episode Information"

* episodeInformation.episodeUniqueKey 1..1 string "Episode Unique Key" "Indicate the unique key associated with each patient episode record as assigned by the EMR/EHR or your software application."
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "FHIR"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/fhir
* episodeInformation.episodeUniqueKey ^mapping[=].map = "iif(Encounter.identifier(type.code='VN').value, Encounter.identifier(type.code='VN').value, Encounter.identifier[0].value)"
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "CDA"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/hl7-sda+xml
* episodeInformation.episodeUniqueKey ^mapping[=].map = "ClinicalDocument.componentOf.encompassingEncounter.id"  
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "HL7V2"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/edi-hl7v2
* episodeInformation.episodeUniqueKey ^mapping[=].map = "ADT_A01.PV1.19.1"
* episodeInformation.episodeUniqueKey ^mapping[+].identity = "Output"
* episodeInformation.episodeUniqueKey ^mapping[=].language = #application/fhir
* episodeInformation.episodeUniqueKey ^mapping[=].map = "Encounter.identifier"
* episodeInformation.episodeUniqueKey ^mapping[=].comment = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter.identifier[0].value)"


* arrivalInformation 1..1 BackboneElement "Patient Arrival Information"
* arrivalInformation.numberOfTransferringFacilityUnavailable 1..1 string "Number of Transferring Facility Unavailable"
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[+].identity = "FHIR"
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].language = #application/fhir
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].map = "resolve(Encounter.hospital.where(admitSource.coding.where(code ='hosp-trans' and system='http://terminology.hl7.org/CodeSystem/admit-source')).origin).identifier.where(system='').exists().not()"

* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[+].identity = "Output"
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].language = #application/fhir
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].map = "Observation"
* arrivalInformation.numberOfTransferringFacilityUnavailable ^mapping[=].comment = "Observation"

* arrivalInformation.transferringFacilityAmericanHospitalAssociationName 1..1 string "Transferring Facility American Hospital Association Name"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[+].identity = "FHIR"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].language = #application/fhir
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].map = "resolve(Encounter.hospital.where(admitSource.coding.where(code ='hosp-trans' and system='http://terminology.hl7.org/CodeSystem/admit-source')).origin).name"

* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[+].identity = "Output"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].language = #application/fhir
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].map = "Observation"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationName ^mapping[=].comment = "Observation"

* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber 1..1 string "Transferring Facility American Hospital Association Number"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[+].identity = "FHIR"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].language = #application/fhir
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].map = "resolve(Encounter.hospital.where(admitSource.coding.where(code ='hosp-trans' and system='http://terminology.hl7.org/CodeSystem/admit-source')).origin).identifier.where(system='').value"

* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[+].identity = "Output"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].language = #application/fhir
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].map = "Observation"
* arrivalInformation.transferringFacilityAmericanHospitalAssociationNumber ^mapping[=].comment = "Observation"

* cardiacStatus 1..1 BackboneElement "Patient Cardiac Status"

* cardiacStatus.bystanderCardiopulmonaryResuscitation 1..1 string "Bystander Cardiopulmonary Resuscitation"
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[+].identity = "FHIR"
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].language = #application/fhir
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].map = "Observation.where(code='112000000186' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[+].identity = "Output"
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].language = #application/fhir
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].map = "Observation"
* cardiacStatus.bystanderCardiopulmonaryResuscitation ^mapping[=].comment = "Observation"

* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices 1..1 string "Cardiac Arrest After Arrival of Emergency Medical Services" "Indicate if the out-of-hospital cardiac arrest occurred after arrival of Emergency Medical Services (EMS)."
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[+].identity = "FHIR"
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].map = "Observation.where(code='100014081' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].map = "Observation"
* cardiacStatus.cardiacArrestAfterArrivalOfEmergencyMedicalServices ^mapping[=].comment = "Observation"

* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility 1..1 string "Cardiac Arrest at Transferring Healthcare Facility" "Indicate if the patient had cardiac arrest at the transferring healthcare facility prior to arrival at the current facility."
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[+].identity = "FHIR"
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].map = "Observation.where(code='100014016' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].map = "Observation"
* cardiacStatus.cardiacArrestAtTransferringHealthcareFacility ^mapping[=].comment = "Observation"

* cardiacStatus.cardiacArrestOutOfHealthcareFacility 1..1 string "Cardiac Arrest Out of Healthcare Facility" "Indicate if a cardiac arrest event occurred outside of any healthcare facility."
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[+].identity = "FHIR"
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].map = "Observation.where(code='10001424808' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].map = "Observation"
* cardiacStatus.cardiacArrestOutOfHealthcareFacility ^mapping[=].comment = "Observation"

* cardiacStatus.cardiacArrestWitnessed 1..1 string "Cardiac Arrest Witnessed" "Indicate if the out-of-hospital cardiac arrest was witnessed by another person."
* cardiacStatus.cardiacArrestWitnessed ^mapping[+].identity = "FHIR"
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].map = "Observation.where(code='100014082' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.cardiacArrestWitnessed ^mapping[+].identity = "Output"
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].language = #application/fhir
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].map = "Observation"
* cardiacStatus.cardiacArrestWitnessed ^mapping[=].comment = "Observation"

* cardiacStatus.firstCardiacArrestRhythm 1..1 string "First Cardiac Arrest Rhythm" "Indicate if the initial out-of-hospital cardiac arrest rhythm was a shockable rhythm."
* cardiacStatus.firstCardiacArrestRhythm ^mapping[+].identity = "FHIR"
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].map = "Observation.where(code='100014013' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.firstCardiacArrestRhythm ^mapping[+].identity = "Output"
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].map = "Observation"
* cardiacStatus.firstCardiacArrestRhythm ^mapping[=].comment = "Observation"

* cardiacStatus.firstCardiacArrestRhythmUnknown 1..1 string "First Cardiac Arrest Rhythm Unknown" "Indicate if the initial out-of-hospital cardiac arrest rhythm was unknown."
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[+].identity = "FHIR"
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].map = "Observation.where(code='100014013' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[+].identity = "Output"
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].language = #application/fhir
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].map = "Observation"
* cardiacStatus.firstCardiacArrestRhythmUnknown ^mapping[=].comment = "Observation"

* episodeInformation.admissionDateAndTime 1..1 string "Admission Date and Time"
* episodeInformation.admissionDateAndTime ^mapping[+].identity = "FHIR"
* episodeInformation.admissionDateAndTime ^mapping[=].language = #application/fhir
* episodeInformation.admissionDateAndTime ^mapping[=].map = "Encounter.period.start"

* episodeInformation.admissionDateAndTime ^mapping[+].identity = "Output"
* episodeInformation.admissionDateAndTime ^mapping[=].language = #application/fhir
* episodeInformation.admissionDateAndTime ^mapping[=].map = "Observation"
* episodeInformation.admissionDateAndTime ^mapping[=].comment = "Observation"

* episodeInformation.healthInsurance 1..1 string "Health Insurance""Indicate if the patient has health insurance."
* episodeInformation.healthInsurance ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsurance ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurance ^mapping[=].map = "Claim.where(encounter=Encounter.id).insurance.coverage.exists()"

* episodeInformation.healthInsurance ^mapping[+].identity = "Output"
* episodeInformation.healthInsurance ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurance ^mapping[=].map = "Observation"
* episodeInformation.healthInsurance ^mapping[=].comment = "Observation"

* episodeInformation.healthInsuranceClaimNumber 1..1 string "Health Insurance Claim Number (HIC)" "Indicate the patient's Health Insurance Claim (HIC) number.    Note(s):  Enter the Health Insurance Claim (HIC) number for those patients covered by Medicare. Patients with other insurances will not have a HIC number."
* episodeInformation.healthInsuranceClaimNumber ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].language = #application/fhir
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].map = "resolve(Claim.where(encounter=Encounter.id).insurance.coverage).identifier.value"

* episodeInformation.healthInsuranceClaimNumber ^mapping[+].identity = "Output"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].language = #application/fhir
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].map = "Observation"
* episodeInformation.healthInsuranceClaimNumber ^mapping[=].comment = "Observation"

* episodeInformation.healthInsurancePaymentSource 1..* string "Health Insurance Payment Source" "Indicate the patient's health insurance payment type.    Note(s):  If the patient has multiple insurance payors, select all payors.    If there is uncertainty regarding how to identify a specific health insurance plan, please discuss with your billing department to understand how it should be identified in the registry."
* episodeInformation.healthInsurancePaymentSource ^mapping[+].identity = "FHIR"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurancePaymentSource ^mapping[=].map = "resolve(Claim.where(encounter=Encounter.id)).insurer.display.value"

* episodeInformation.healthInsurancePaymentSource ^mapping[+].identity = "Output"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].language = #application/fhir
* episodeInformation.healthInsurancePaymentSource ^mapping[=].map = "Observation"
* episodeInformation.healthInsurancePaymentSource ^mapping[=].comment = "Observation"

* episodeInformation.medicareBeneficiaryIdentifier 1..1 string "Medicare Beneficiary Identifier"
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[+].identity = "FHIR"
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].language = #application/fhir
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].map = "Patient.identifier.where(system='http://hl7.org/fhir/sid/us-mbi').value"

* episodeInformation.medicareBeneficiaryIdentifier ^mapping[+].identity = "Output"
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].language = #application/fhir
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].map = "Observation"
* episodeInformation.medicareBeneficiaryIdentifier ^mapping[=].comment = "Observation"

* episodeInformation.patientEnrolledInResearchStudy 1..1 string "Patient Enrolled in Research Study" "Indicate if the patient is enrolled in an ongoing ACC - NCDR research study related to this registry."
* episodeInformation.patientEnrolledInResearchStudy ^mapping[+].identity = "FHIR"
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].language = #application/fhir
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].map = "ResearchSubject.where(patient=Patient.id and period.overlaps(Encounter.period)).exists()"

* episodeInformation.patientEnrolledInResearchStudy ^mapping[+].identity = "Output"
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].language = #application/fhir
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].map = "Observation"
* episodeInformation.patientEnrolledInResearchStudy ^mapping[=].comment = "Observation"

* episodeInformation.patientRestriction 1..1 string "Patient Restriction" "Indicate if the patient requested for their information not to be used for any research or studies for the associated episode of care.    Note(s):  Documentation must be found in the patient record to support the request of removal of their information."
* episodeInformation.patientRestriction ^mapping[+].identity = "FHIR"
* episodeInformation.patientRestriction ^mapping[=].language = #application/fhir
* episodeInformation.patientRestriction ^mapping[=].map = "Patient.meta.securityLabel.memberOf(%Restricted)"

* episodeInformation.patientRestriction ^mapping[+].identity = "Output"
* episodeInformation.patientRestriction ^mapping[=].language = #application/fhir
* episodeInformation.patientRestriction ^mapping[=].map = "Observation"
* episodeInformation.patientRestriction ^mapping[=].comment = "Observation"

* historyAndRiskFactors  1..1 BackboneElement "Patient History and Risk Factors"

* historyAndRiskFactors.basicActivitiesOfDailyLiving 1..1 string "Basic Activities of Daily Living"
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].language = #application/fhir
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].map = "Observation.where(code='112000000180' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[+].identity = "Output"
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].language = #application/fhir
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].map = "Observation"
* historyAndRiskFactors.basicActivitiesOfDailyLiving ^mapping[=].comment = "Observation"

* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown 1..1 string "Basic Activities of Daily Living Unknown"
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].map = "Observation.where(code='112000000180' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[+].identity = "Output"
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].map = "Observation"
* historyAndRiskFactors.basicActivitiesOfDailyLivingUnknown ^mapping[=].comment = "Observation"

* historyAndRiskFactors.cognition 1..1 string "Cognition"
* historyAndRiskFactors.cognition ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.cognition ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cognition ^mapping[=].map = "Observation.where(code='112000000140' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.cognition ^mapping[+].identity = "Output"
* historyAndRiskFactors.cognition ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cognition ^mapping[=].map = "Observation"
* historyAndRiskFactors.cognition ^mapping[=].comment = "Observation"

* historyAndRiskFactors.cognitionUnknown 1..1 string "Cognition Unknown"
* historyAndRiskFactors.cognitionUnknown ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.cognitionUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cognitionUnknown ^mapping[=].map = "Observation.where(code='112000000140' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.cognitionUnknown ^mapping[+].identity = "Output"
* historyAndRiskFactors.cognitionUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.cognitionUnknown ^mapping[=].map = "Observation"
* historyAndRiskFactors.cognitionUnknown ^mapping[=].comment = "Observation"

* historyAndRiskFactors.smokingAmount 1..1 string "Smoking Amount" "Indicate the amount of cigarette smoking reported by the patient."
* historyAndRiskFactors.smokingAmount ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.smokingAmount ^mapping[=].language = #application/fhir
* historyAndRiskFactors.smokingAmount ^mapping[=].map = "Observation.where(code='100001256' and system='https://cvquality.acc.org/NCDR' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.smokingAmount ^mapping[+].identity = "Output"
* historyAndRiskFactors.smokingAmount ^mapping[=].language = #application/fhir
* historyAndRiskFactors.smokingAmount ^mapping[=].map = "Observation"
* historyAndRiskFactors.smokingAmount ^mapping[=].comment = "Observation"

* historyAndRiskFactors.tobaccoType 1..1 string "Tobacco Type" "<<< CathPCI - Instruction >>> Indicate the type of tobacco product the patient uses. <<< CPMI - Instruction >>> Indicate the frequency that the patient uses tobacco.    Note(s): Consider use of any tobacco product as equivalent to a cigarette for referenced definitions.     "
* historyAndRiskFactors.tobaccoType ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.tobaccoType ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoType ^mapping[=].map = "Observation.where(code='266918002' and system='http://snomed.info/sct' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.tobaccoType ^mapping[+].identity = "Output"
* historyAndRiskFactors.tobaccoType ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoType ^mapping[=].map = "Observation"
* historyAndRiskFactors.tobaccoType ^mapping[=].comment = "Observation"

* historyAndRiskFactors.tobaccoUse 1..1 string "Tobacco Use" "Indicate the frequency that the patient uses tobacco. Note(s): Consider use of any tobacco product as equivalent to a cigarette for referenced definitions."
* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "Observation.where(code='110483000' and system='http://snomed.info/sct' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.tobaccoUse ^mapping[+].identity = "Output"
* historyAndRiskFactors.tobaccoUse ^mapping[=].language = #application/fhir
* historyAndRiskFactors.tobaccoUse ^mapping[=].map = "Observation"
* historyAndRiskFactors.tobaccoUse ^mapping[=].comment = "Observation"

* historyAndRiskFactors.walking 1..1 string "Walking"
* historyAndRiskFactors.walking ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.walking ^mapping[=].language = #application/fhir
* historyAndRiskFactors.walking ^mapping[=].map = "Observation.where(code='116329008' and system='http://snomed.info/sct' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.walking ^mapping[+].identity = "Output"
* historyAndRiskFactors.walking ^mapping[=].language = #application/fhir
* historyAndRiskFactors.walking ^mapping[=].map = "Observation"
* historyAndRiskFactors.walking ^mapping[=].comment = "Observation"

* historyAndRiskFactors.walkingUnknown 1..1 string "Walking Unknown"
* historyAndRiskFactors.walkingUnknown ^mapping[+].identity = "FHIR"
* historyAndRiskFactors.walkingUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.walkingUnknown ^mapping[=].map = "Observation.where(code='116329008' and system='http://snomed.info/sct' and effectiveDateTime > %Encounter.period.start).first()"

* historyAndRiskFactors.walkingUnknown ^mapping[+].identity = "Output"
* historyAndRiskFactors.walkingUnknown ^mapping[=].language = #application/fhir
* historyAndRiskFactors.walkingUnknown ^mapping[=].map = "Observation"
* historyAndRiskFactors.walkingUnknown ^mapping[=].comment = "Observation"

* researchStudy  0..1 BackboneElement "Research Study Information"

* researchStudy.researchStudyName 1..1 string "Research Study Name" "Indicate the research study name as provided by the research study protocol.    Note(s):  If the patient is in more than one research study, list each separately."
* researchStudy.researchStudyName ^mapping[+].identity = "FHIR"
* researchStudy.researchStudyName ^mapping[=].language = #application/fhir
* researchStudy.researchStudyName ^mapping[=].map = "resolve(ResearchSubject.where(patient=Patient.id and period.overlaps(Encounter.period)).researchStudy).title"

* researchStudy.researchStudyName ^mapping[+].identity = "Output"
* researchStudy.researchStudyName ^mapping[=].language = #application/fhir
* researchStudy.researchStudyName ^mapping[=].map = "Observation"
* researchStudy.researchStudyName ^mapping[=].comment = "Observation"

* researchStudy.researchStudyPatientId 1..1 string "Research Study Patient ID" "Indicate the research study patient identification number as assigned by the research protocol.    Note(s):  If the patient is in more than one research study, list each separately."
* researchStudy.researchStudyPatientId ^mapping[+].identity = "FHIR"
* researchStudy.researchStudyPatientId ^mapping[=].language = #application/fhir
* researchStudy.researchStudyPatientId ^mapping[=].map = "ResearchSubject.where( individual = Patient.id and ((( Encounter.period.start >= period.start ) and (Encounter.period.start <= period.end)) or ((Encounter.period.end >= period.start) and  (Encounter.period.end <= period.end )))).identifier"

* researchStudy.researchStudyPatientId ^mapping[+].identity = "Output"
* researchStudy.researchStudyPatientId ^mapping[=].language = #application/fhir
* researchStudy.researchStudyPatientId ^mapping[=].map = "Observation"
* researchStudy.researchStudyPatientId ^mapping[=].comment = "Observation"


---

// File: input/fsh/CathPCI Valuesets.fsh

CodeSystem: HealthInsurancePaymentSourceCS
Title: "Health Insurance Payment Source CodeSystem"
Description: "Sources for Payment for Element 3010"
* ^caseSensitive = false
* ^experimental = true
* #5	"Private Health Insurance"
* #1	"Medicare"
* #2	"Medicaid"
* #31	"Military Health Care"
* #36	"State-Specific Plan (non-Medicaid)"
* #33	"Indian Health Service"


ValueSet: HealthInsurancePaymentSource
Title: "Health Insurance Payment Source"
Description: "ValueSet listing payment source codes used by ACC"
* ^experimental = true

* include codes from system  HealthInsurancePaymentSourceCS
* ncdr#100000812

ValueSet: PriorMyocardialInfarction
Title: "Prior Myocardial Infarction"
Description: "SNOMED CT codes for MI"

* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #22298006

ValueSet: PercutaneousCoronaryIntervention
Title: "PCI"
Description: "All SNOMED Codes that are PCI Procedures"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #415070008

ValueSet: CABG
Title: "Coronary artery bypass grafting"
Description: "All SNOMED Codes that are CABG Procedures"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #232717009

ValueSet: CerebrovascularDisease
Title: "Cerebrovascular Disease"
Description: "All SNOMED Codes that are Cerebrovascular Disease"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #62914000

ValueSet: DiabetesMellitus
Title: "Diabetes Mellitus"
Description: "All SNOMED Codes that are Diabetes Mellitus"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #73211009

ValueSet: HemodialysisOrPeritonealDialysis
Title: "hemodialysis or peritoneal dialysis"
Description: "All SNOMED Codes regarding hemodialysis or peritoneal dialysis"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #108241001

ValueSet: ChronicLungDisease
Id: ChronicLungDisease
Title: "Chronic Lung Disease"
Description: "Chronic Lung Disease as defined by ACC"
* ^copyright = """
* This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
* This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc
"""
* ^experimental = true
* include codes from system $sct where concept is-a #413839001 
* exclude codes from system $sct where concept is-a #40122008
* exclude $sct#123713005
* exclude $sct#22607003
* exclude $sct#254826008
* exclude $sct#29422001
* $loinc#54822-2

ValueSet:  PeripheralArterialOcclusiveDisease  
Title: "Peripheral Arterial Occlusive Disease"
Description: "All SNOMED Codes that are Chronic Lung Disease"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #399957001

ValueSet: Hypertension  
Title: "Hypertension"
Description: "All SNOMED Codes that are Hypertension"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #38341003

ValueSet: Dyslipidemia  
Title: "Dyslipidemia"
Description: "All SNOMED Codes that are Dyslipidemia"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #370992007

ValueSet: SmokingStatus
Title: "Smoking Status"
Description: """
* ^experimental = true
Patient's smoking status.  
Includes all SNOMED codes related to smoking status under 'Finding of tobacco use and exposure (finding)'
"""
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #365980008


ValueSet: CardiacArrest
Title: "Cardiac Arrest"
Description: "All SNOMED Codes related to Cardiac Arrest"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #410429000

ValueSet: HeartFailure
Id: HeartFailure
Title: "Heart Failure codes from SNOMED"
Description: "All SNOMED Codes that are Heart Failure"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #84114007

ValueSet: NewYorkHeartAssociationQuery
Id: NewYorkHeartAssociation
Title: "New York Heart Association Assessment Scale"
Description: "Includes codes from SNOMED and LOINC"
* ^experimental = true
* ^copyright = """
* This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
* This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc
"""
* $loinc#88020-3
* $sct#420816009
* $sct#762994006

ValueSet: AbnormalElectrocardiacAssessment
Id: AbnormalElectrocardiacAssessment
Title: "Abnormal Electrocardiac Assessment"
Description: "All SNOMED codes that are an abnormal Electrocardiac Assessment result"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #102594003

ValueSet: CardiacCTA
Id: CardiacCTA
Title: "CTA Heart and Coronary arteries"
Description: "CTA Heart and Coronary arteries" 
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#79073-3
* $loinc#86980-0
* $loinc#89927-8
* $loinc#83289-9

ValueSet: StressTest
Id: StressTest
Title: "Cath PCI Selected Stress Test"
Description: "All ACC Selected Stress Tests for the CathPCI submission"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#18752-6
* $loinc#18107-3
* $loinc#49569-7
* $loinc#58750-1

ValueSet: OrganDonor
Id: OrganDonor
Title: "SNOMED Valueset of Organ Donor codes"
Description: "All SNOMED codes that are an Organ Donor (person)"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #105461009

ValueSet: ValvularStenosis
Id: ValvularStenosis
Title: "Valvular Stenosis"
Description: "Loinc codes for Valvular Stenosis"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#77916-5
* $loinc#78183-1 	
* $loinc#77912-4

ValueSet: ValvularRegurgitation
Id: ValvularRegurgitation
Title: "Valvular Regurgitation"
Description: "Existance of Valvular Regurgitation"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #40445007

ValueSet: PCIOperator
Id: PCIOperator
Title: "PCI Operator SNOMED codes"
Description:  "POssible codes for PCI Operator"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#1421009 
* $sct#56545009 
* $sct#304292004 
* $sct#309369000 
* $sct#309371000 

ValueSet: CardiacCatheter
Title: "SNOMED Cardiac Catheters"
Description: "SNOMED Cardiac Catheters set"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #706539002

ValueSet: PackedRedBloodCells
Title: "Packed Red Blood Ceels"
Description: "SNOMED codes for PRBC"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #431069006

ValueSet: SeattleAnginaQs
Id: SEattleAnginaQs
Title: "Seattle Angina Questions"
Description: "All LIONC codes for Seattle Angina Questions"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#88476-7 	
* $loinc#88478-3
* $loinc#88477-5 	
* $loinc#88469-2
* $loinc#88480-9
* $loinc#88475-9 	
* $loinc#88473-4 	

ValueSet: SeattleAnginaAs
Id: SeattleAnginaAs
Title: "Seattle Angina Answers"
Description: "LOINC codes for the answers to SA Questions"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#LA28518-1
* $loinc#LA25000-3
* $loinc#LA27770-9
* $loinc#LA13834-9
* $loinc#LA27722-0
* $loinc#LA28522-3

ValueSet: RoseDyspneaQ
Id: RoseDyspneaQ
Title: "Rose Dyspnea Questions"
Description: "LOINC codes for Rose Dyspnea Questions"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $loinc#89437-8
* $loinc#89435-2
* $loinc#89438-6
* $loinc#89439-4

ValueSet: YesNo
Id: YesNo
Title: "Yes or No"
Description: "Affirmative or Negative"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#373066001 
* $sct#373067005
* $yn#Y
* $yn#N

ValueSet: MyocardialInfarction
Id: MyocardialInfarction
Title: "Myocardial Infarction"
Description: "Full SNOMED set for MI"
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $sct where concept is-a #22298006

ValueSet: PriorCoronaryArteryBypassGraft
Id: PriorCABG
Title: "Prior History of Coronary Artery Bypass Graft"
Description: "All SNOMED and LOINC codes for CABG or Prior CABG"
* ^experimental = true
* ^copyright = """
* This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
* This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc
"""
* include codes from system $sct where concept is-a #232717009
* $loinc#88654-9 

---

// File: input/fsh/CREDSBundle-Example.fsh

Instance: CREDSBundle-Example
InstanceOf: CREDSSubmission
Usage: #example
Title: "CREDS Submission Bundle Example"
Description: "A simple example of the CREDS Submission Bundle"

* entry[mHeader].fullUrl = "urn:uuid:a4bab684-4bc2-43b7-82a0-199034a5a5b2"
* entry[mHeader].resource = CREDSMHExample
* entry[USPatient].fullUrl = "urn:uuid:261989c3-688c-4941-b767-d8d4c871217c"
* entry[USPatient].resource = 261989c3-688c-4941-b767-d8d4c871217c
* entry[2].fullUrl = "urn:uuid:ba651db0-7b10-4465-a5c4-411ced9e8254"
* entry[2].resource = CREDSEncounter

Instance: CREDSMHExample
InstanceOf: MessageHeader
Usage: #example
Title: "MessageHeader for CREDSSubmission Example"
Description: "An example MessageHeader for use within a CREDS Submission Bundle"
* eventUri = "urn:uuid:26aa1208-589a-4978-9cb7-728cc51520aa" 
* sender = Reference(VeterinariansHospital)
* enterer = Reference(USCorePractitionerexample)
* source.name = "CREDS Implementation #2"
* source.endpoint = "https://example.org/fhir"
* reason = http://terminology.hl7.org/CodeSystem/message-reasons-encounter#discharge
* focus = Reference(261989c3-688c-4941-b767-d8d4c871217c)


---

// File: input/fsh/CREDSBundle.fsh

Profile: CREDSSubmission
Parent: Bundle
Id: CREDSSubmission
Title: "CREDS Submission Bundle"
Description: "This is the standard Bundle to be used with a CREDS submission"
* insert CREDSStructureDefinitionContent
* type = #collection (exactly)
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.ordered = true
* entry ^slicing.description = "Slice based on resource"

* entry 2..*
* entry contains mHeader 1..1 MS
  and USPatient 1..1 MS
  
* entry[mHeader].resource only MessageHeader
* entry[USPatient].resource only http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
/*
Instance: StructDef4KEith
InstanceOf: Bundle
Usage: #example
Title: "Just for Keith"
Description: "None"
* type = #transaction
* entry.resource = CathPCI_Submission_Map_detailed
* entry.request.method = #POST
* entry.request.url = "urn:uuid:120679c4-443d-45cd-9d39-1bc431f4fb56"
*/

---

// File: input/fsh/CREDSDefinitions.fsh

RuleSet: CREDSDefinitionContent
* status = #draft      // draft until final published
* experimental = true  // true until ready for pilot, then false
* version = "0.1.0"    // Follow IG Versioning rules
* publisher = "HL7 International"
* contact[0].name = "HL7 Clinical Interoperability Council"
* contact[0].telecom.system = #url
* contact[0].telecom.value = "http://hl7.org/Special/committees/cic/index.cfm"
* contact[1].name = "David Pyke"
* contact[1].telecom.system = #email
* contact[1].telecom.value = "mailto:dpyke@ainq.com"
* jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001

// Define a rule set for commonly used rules for definition resources using other Sushi features
RuleSet: CREDSStructureDefinitionContent
* ^status = #draft      // draft until final published
* ^experimental = true  // true until ready for pilot, then false
* ^version = "0.1.0"    // Follow IG Versioning rules
* ^publisher = "HL7 International"
* ^contact[0].name = "HL7 Clinical Interoperability Council"
* ^contact[0].telecom.system = #url
* ^contact[0].telecom.value = "http://hl7.org/Special/committees/cic/index.cfm"
* ^contact[1].name = "David Pyke"
* ^contact[1].telecom.system = #email
* ^contact[1].telecom.value = "mailto:dpyke@ainq.com"
* ^jurisdiction.coding =  http://unstats.un.org/unsd/methods/m49/m49.htm#001

RuleSet: CREDSCapabilityStatementContent
* status = #draft
* experimental = true
* publisher = "HL7 Clinical Interoperability Council"
* contact[0].name = "HL7 Clinical Interoperability Council"
* contact[0].telecom.system = #web
* contact[0].telecom.value = "http://hl7.org/Special/committees/cic/index.cfm"
* contact[1].name = "David Pyke"
* contact[1].telecom.system = #email
* contact[1].telecom.value = "dpyke@ainq.com"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #json
* format[1] = #xml
* implementationGuide = "http://hl7.org/fhir/uv/fhir-registry-protocols-ig/ImplementationGuide/hl7.fhir.uv.fhir-registry-protocols-ig"

---

// File: input/fsh/CREDSStructureDefinition.fsh

Profile: CREDSStructureDefinition
Parent: StructureDefinition
Id: CREDSStructureDefinition
Title: "CREDS Structure Definition"
Description: "StructureDefinition for use with CREDS mapping creating the base mappings for FHIR, CDA and V2"
* insert CREDSStructureDefinitionContent
// * ^kind = #logical
* identifier 1..1

* date 1..1
* publisher 1..1
* contact 1..*

* kind = #logical
* abstract = false
* type 1..1 
* ^mapping[+].identity = "FHIR"
* ^mapping[=].uri = "http://fhir.hl7.org"
* ^mapping[=].name = "Fast Health Interoperability Resources"
* ^mapping[=].comment = "Path to where in a FHIR Resource the data element is found"
* ^mapping[+].identity = "CDA"
* ^mapping[=].uri = "http://build.fhir.org/ig/HL7/cda-core-2.0/"
* ^mapping[=].name = "Clinical Document Architecture"
* ^mapping[=].comment = "Path to where in a CDA 2.0/CCDA 2.1 Document the data element is found"
* ^mapping[+].identity = "HL7V2"
* ^mapping[=].uri = "http://www.hl7.eu/refactored/index.html"
* ^mapping[=].name = "HL7 V2 Messages"
* ^mapping[=].comment = "Path to where in a HL7 V2 Message the data element is found"
* ^mapping[+].identity = "Output"
* ^mapping[=].uri = "http://hl7.org/fhir/us/core"
* ^mapping[=].name = "Submission Data Output location"
* ^mapping[=].comment = "Location within the requirements profile to place the data for submission in US Core or FHIR Core Resources"

/* * snapshot 0..0
* differential 0..0

Profile: CREDSElementDefinition
Parent: ElementDefinition
Id: CREDSElementDefinition
Title: "CREDSElementDefinition"
Description: """ElementDefinition for use within CREDS that sets the base requirements for creating the logical model
Elements specific to a Creds model are:
.short Simple name of the data required
.comment full description of the data element required

Mappings are required for data extraction and inclusion in the submission bundle  Each mapping shows:
.identity as element path (e.g., Patient.Name.Given)
.langauge as the mime type of the language (e.g., application/edi-hl7v2 for V2 message)
.map as the FHIRPath expression for use to find the data required.
.comment = *Output mapping only* Resource/Profile for inclusion in the Submission Bundle.

Element mapping should include an Output mapping unless the mapping is in a parent element in the logical model.
"""
* insert CREDSStructureDefinitionContent

* short 1..1
* comment 1..1
* type ^code = http://hl7.org/fhir/data-types#canonical
* mapping ^slicing.discriminator.type = #pattern
* mapping ^slicing.discriminator.path = "identity"
* mapping ^slicing.rules = #open
* mapping ^slicing.ordered = false
* mapping ^slicing.description = "Slice based on standard via identity"
* mapping 1..*
* mapping contains FHIR 0..*
    and CDA 0..*
    and HL7V2 0..*
    and Output 0..*
* mapping[FHIR].identity 1..1 
* mapping[FHIR].identity = "FHIR"
* mapping[FHIR].language 1..1
* mapping[FHIR].map 1..1
* mapping[FHIR].language = #application/fhir
* mapping[CDA].identity 1..1 
* mapping[CDA].identity = "CDA"
* mapping[CDA].language 1..1
* mapping[CDA].language = #application/hl7-sda+xml
* mapping[CDA].map 1..1
* mapping[HL7V2].identity 1..1 
* mapping[HL7V2].identity = "HL7V2"
* mapping[HL7V2].language 1..1
* mapping[HL7V2].language = #application/edi-hl7v2
* mapping[HL7V2]..map 1..1
* mapping[Output].identity 1..1 
* mapping[Output].identity = "Output"
* mapping[Output].language 1..1
* mapping[Output].language = #application/fhir
* mapping[Output].map 1..1
*/

---

