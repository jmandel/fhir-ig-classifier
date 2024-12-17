// File: input/pagecontent/background.md

### Implementation Guide (IG) Overview

The MedMorph Reference Architecture (RA) IG aims to minimize the burden on both the senders and receivers of data by providing a common method for obtaining data for research and public health. The CDC established a Technical Expert Panel (TEP) comprised of a wide variety of representatives with relevant expertise to inform the development of the technical approach, use cases, and the MedMorph RA IG. 
Read the <a href="usecases.html">Use Cases</a> section for background on the initial representative MedMorph use cases that have been used to create the data exchange abstract model and workflows from which the MedMorph RA is derived.

### Guiding Principles 

The following are the guiding principles for the MedMorph RA IG.

* Reduce provider burden wherever possible while making electronic data more available to research and public health.
* Align with existing standards (e.g., Health Level 7 (HL7) Fast Healthcare Interoperability Resources (FHIR), Clinical Document Architecture (CDA)) and regulations (e.g., ONC 2015 Edition, 2015 Edition Cures Update, Trusted Exchange Framework and Common Agreement (TEFCA), etc.) while improving the timeliness and completeness of data received by research and public health.
* Promote standardized configurability of implementations to allow flexibility for customizations in workflows while supporting interoperability. 

### IG In-Scope Requirements

The following requirements are in-scope for the MedMorph RA IG based on the use cases.

* Define the API mechanisms, Inputs, and Outputs used to access and exchange data.
* Define the mechanisms used to trigger the workflows. 
* Define the provisioning mechanisms used to automate the triggering and reporting of data. 
* Define trust services (e.g., pseudonymization, anonymization, de-identification, hashing) needed for use cases when appropriate.

### IG Out-of-Scope 

The following aspects are out-of-scope for the MedMorph RA IG based on the use cases.

* Enabling claims data access to research and public health.
* Changes to the Data Source (e.g., EHR) data capture screens and/or changes to clinical workflows. Providers may use their choice of apps/screens/systems to enter the data into the Data Source independent of the IG.
* Data not accessible by a FHIR API.
* Policies and processes followed by healthcare organizations to allow data sharing, collecting of consent, or compliance with regulatory requirements. The technical APIs to exchange required data for the use cases are in-scope as specified in the In-Scope section.


### Underlying Specifications

This guide is based on the [HL7 FHIR R4]({{site.data.fhir.path}}index.html) standard, as well as [US Core IG]({{site.data.fhir.ver.uscoreR4}}/index.html), [Bulk Data Access IG]({{site.data.fhir.ver.bulkig}}/index.html), [SMART App Launch IG for Backend Services Authorization]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html) specifications. This IG is intended to maximize the number of clinical systems that can conform to this guide as well as to allow for extensibility of system capabilities in the future.

Implementers of the MedMorph RA IG must understand some basic information about the underlying specifications listed above.


#### FHIR Resources used for MedMorph RA

The table below identifies the specific FHIR Resources and their use in the MedMorph RA IG.
Implementers should familiarize themselves with these FHIR resources and their purposes.

<table>
  <thead>
    <tr>
      <th>FHIR Resource</th>
      <th>MedMorph Purpose</th>
    </tr>
  </thead>
  <tr>
    <td><a href="{{site.data.fhir.path}}plandefinition.html">PlanDefinition</a></td>
	<td>Used to define the Knowledge Artifacts which contains the definitions of all the activities, events, conditions that can be executed as part of workflows.</td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.path}}library.html">Library</a></td>
	<td>Used to specify logic expressions, queries, trigger codes to be used as part of PlanDefinition.</td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.path}}valueset.html">ValueSet</a></td>
	<td>Used to group codes for various activities such as trigger codes, activity codes.</td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.path}}bundle.html">Bundle</a></td>
	<td>Used to group resources for creating submission reports.</td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.path}}messageheader.html">MessageHeader</a></td>
	<td>Used to specify metadata for message routing.</td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.path}}organization.html">Organization</a></td>
	<td>Representing Sending, Receiving and Intermediary organizations.</td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.path}}location.html">Location</a></td>
	<td>Used to represent locations in workflows.</td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.path}}endpoint.html">Endpoint</a></td>
	<td>Used to represent sender and receiver addresses during data exchange.</td>
  </tr>
</table>



### IG Types and their Relationships 

The MedMorph project’s vision is to provide a common framework (i.e., the RA) that can be used for multiple public health and research use cases. Each use case will contain content specific data, workflow requirements, and operational requirements necessary for implementation. The use case specific content will be detailed in additional IGs referred to as content IGs. Generally, each content IG would apply to one use case, however it is possible that existing content IGs broader in scope may cover all or some of the requirements needed by a use case, as described in the next section with the Hep C example. Implementers of other use cases and content IGs not documented within the MedMorph RA IG may also choose to implement the MedMorph RA IG as it may support their use cases based on the data necessary for exchange, workflow, and operational requirements.
The relationships among different FHIR IG types are depicted in Figure 2.1, with the more general types at the top and more specific types at the bottom. Typically, the more general an IG is, the more reusable its components; and the more specific an IG is, the more use case specific it is.   

{% include img.html img="IGRelationship.png" caption="Figure 2.1: Relationship among Different IG Types" %}

**NOTE to Readers:** 

Although the US Public Health (PH) Profiles Library is in the process of being balloted at the time of MedMorph RA IG v1.0.0 publication, it is included to show the direction MedMorph will take under the guidance of the HL7 Public Health Work Group (WG). The US PH Profiles Library will harmonize similar profiles from multiple IGs being produced under the sponsorship of the HL7 Public Health WG. This will ensure consistency across IGs, reduce profile proliferation, and provide a starting point for future content IGs.


#### Relationship between MedMorph RA IG, electronic Case Reporting (eCR) FHIR IG, and US Public Health (PH) Profiles Library 

The [United States Public Health (US PH) Profiles Library](https://build.fhir.org/ig/HL7/fhir-us-ph-common-library-ig/index.html) establishes a baseline of common artifacts that will be used by multiple public health IGs as shown in Figure 2.1. It provides a way to harmonize profiles needed for multiple public health use cases that are not already in US Realm foundational IGs such as US Core. The initial content for the US PH Profiles Library is derived from the MedMorph RA and eCR FHIR IGs, and in the future will likely include reusable profiles from other IGs as well (see Section on “Other Existing Public Health IGs contributing to a common US PH Profiles Library” for more details). The MedMorph RA IG and v2.0.0 of the [eCR FHIR IG](http://hl7.org/fhir/us/ecr/STU2/) were balloted in January 2021, and both IGs created aligned artifacts that can be reflected in the US PH Profiles Library, which is being balloted in September 2022. All artifacts that are candidates for promotion to the US PH Profiles Library will use the words “us” or “US” and “ph” or “PH” as part of the profile definition, name, and title elements. This RA IG will harmonize with the US PH Profiles Library going forward to reduce implementer burden for supporting public health use cases.
At the architectural level, this RA IG aligned with and then expanded from the architectural components of the eCR FHIR IG. In this way, the MedMorph and eCR architectures are harmonized while the MedMorph RA also allows for public health use cases beyond reportable conditions (which is the focus of eCR), research use cases, and potentially other types of use cases in the future. 

At the content IG level, the eCR FHIR IG contains content profiles (identified as eICR Content Profiles in eCR FHIR IG in Figure 2.1) related to electronic case reporting of reportable conditions. There are three different permutations for how a new use case might leverage these profiles or profiles in other existing FHIR IGs, as shown in Figure 2.1 with the initial MedMorph use cases as examples.

For example, the MedMorph Hep C use case data requirements overlap with the content specified for electronic case reporting. Creation of a new Hep C content IG would replicate most, if not all, of the content specified as eICR Content Profiles in the eCR FHIR IG, which is undesirable. To minimize proliferation of profiles and IGs, which increases implementation burden, the MedMorph Hep C use case will reuse the eICR Content Profiles from eCR FHIR IG from a content perspective rather than create a separate content IG. An example of partial reuse is the Cancer Registry Reporting Content IG, which in part overlaps with the eICR Content Profiles in eCR FHIR IG but also requires additional profiles to fully meet its data requirements. These overlapping profiles have been refactored into the US PH Profiles Library, which can then be reused by the Central Cancer Registry Reporting Content IG. Any specific data elements needed for the Cancer Registry Reporting use case not included in the US PH Profiles Library will be added to the Central Cancer Registry Reporting Content IG. The Health Care Surveys Content IG overlaps minimally with the eICR FHIR IG from a content perspective, however the Health Care Surveys Content IG can use the MedMorph RA components for the reporting function. The Health Care Surveys Content IG references the MedMorph RA IG and adds profiles and/or extensions, etc. needed for the Health Care Surveys  use case not included in the MedMorph RA IG (e.g., Health Care Surveys content specifications).

#### Relationship between MedMorph RA IG and US Core FHIR IG  

As shown in Figure 2.1, the MedMorph RA IG is built on other FHIR specifications, including the [US Core IG]({{site.data.fhir.ver.uscoreR4}}/index.html). The MedMorph RA IG will use US Core IG profiles as required for each use case. In addition to the profiles, the patient level FHIR APIs specified in US Core will be leveraged for all public health reporting use cases that leverage the MedMorph RA. The version of the US Core IG referenced is the one widely implemented across the US to support United States Core Data for Interoperability (USCDI) as required in the Office of the National Coordinator (ONC) 21st Century Cures Act certification criteria.

#### Relationship between MedMorph RA IG and FHIR Bulk Data Access IG
 
For research use cases and potentially some public health use cases, specifically when data about multiple patients is needed but does not require real-time reporting, MedMorph will leverage the [Bulk Data Access IG]({{site.data.fhir.ver.bulkig}}/index.html). The Bulk Data Access IG is used to retrieve population level information from EHRs, subject to applying appropriate authorities and policies. The version of the Bulk Data Access IG referenced is the one being widely implemented across the US to support USCDI required in the ONC 21<sup>st</sup> Century Cures Act certification criteria.


#### Relationship between MedMorph RA IG and SMART App Launch IG

The MedMorph RA IG uses [SMART App Launch IG for Backend Services Authorization]({{site.data.fhir.smartapplaunch}}/backend-services.html) to secure all system-to-system interactions among the various actors in the MedMorph RA. The version of the SMART App Launch IG referenced is the being widely implemented across the US to support USCDI as required in the ONC 21<sup>st</sup> Century Cures Act certification criteria.

#### Relationship between MedMorph RA IG and Subscriptions Backport IG

The MedMorph RA IG intends to use the [Subscriptions Backport IG]({{site.data.fhir.ver.subscriptionsIg}})/index.html) to enable content IGs to define specific trigger events using Subscription Topics. These subscription topics will be subscribed to by the HDEA per the Knowledge Artifact. Upon receiving notifications, the HDEA will process the notification and automate the MedMorph workflows without additional provider burden.However currently there is no Subscriptions Backport IG that is compatible with FHIR Release 4.0.1 hence the MedMorph RA IG currently does not include a dependency on the Subscriptions Backport IG, however an STU2 update will be made on MedMorph RA IG when the Subscriptions Backport IG becomes available. 


#### Other Existing Public Health IGs contributing to a common US PH Profiles Library
 
The [Vital Records Common Profile Library](http://hl7.org/fhir/us/vrdr/index.html) was published in August 2021. While it is focused around vital records there are overlapping profiles with [eCR FHIR IG](http://hl7.org/fhir/us/ecr/index.html) and [Occupational Data for Health (ODH) IG](http://hl7.org/fhir/us/odh/index.html). This project was created through the recognition of overlapping birth defects and birth and fetal death FHIR profiles. However, to help harmonize overlapping profiles with other public health use cases such as MedMorph, the VR common library may be a seed for the establishment of the US PH library mentioned above in the MedMorph Reference Architecture IG. 

#### Relationship between MedMorph RA IG and Content IGs 

The MedMorph RA IG does not prescribe content specific to any use case. Rather, it specifies the workflow processing, trigger mechanisms using PlanDefinition, ActivityDefinition, ValueSets, and APIs for message routing using Bundle, MessageHeader, etc. The content IGs would specify the profiles, search parameters, and operations for use case specific requirements but would reuse the MedMorph RA IG to trigger events, submit data, process knowledge artifacts, manage workflows, etc. (e.g., Health Care Surveys Content IG, Cancer Registry Reporting Content IG).


#### Relationship between MedMorph RA IG and Clinical Registry Extraction and Data Submission (CREDS) IG 

The MedMorph RA IG specifies the use of FHIR APIs to collect data from EHRs and potentially other systems and exchange with systems that can receive data in FHIR format. The RA IG can support multiple use cases, including but not limited to case-based surveillance, registry reporting, national health care surveys, and research.

Protocols in the [Clinical Registry Extraction and Data Submission (CREDS) IG](https://build.fhir.org/ig/HL7/fhir-registry-protocols-ig/index.html) focus on providing healthcare provider organizations information on how to collect the data needed to submit to registries. This may include but is not limited to data sources such as EHRs, Health Information Exchanges (HIEs), and others, which may use FHIR as well as HL7 CDA documents, and HL7 V3 messages that are not available via FHIR APIs.

Use cases that can obtain all the needed data via MedMorph compliant FHIR APIs should consider the use of the MedMorph RA as the basis for their efforts. Use cases that need to obtain data not available MedMorph should consider the use of CREDS.


#### Relationship between MedMorph RA IG and Hybrid / Intermediary Exchange IG 

The MedMorph RA IG uses FHIR Messaging to route messages with appropriate headers and contents packaged within a reporting bundle, which is a type of Bundle resource. The MedMorph RA IG allows for Trusted Third Parties (TTPs) who act as intermediaries to provide multiple services such as routing, content validation, content conversions, and transport protocol bridging. The [Hybrid/Intermediary Exchange IG](http://hl7.org/fhir/us/exchange-routing/2022Jan/index.html), developed by the FHIR at Scale Taskforce (FAST), identifies best practices for using intermediaries for FHIR Representational State Transfer (RESTful) interactions. The MedMorph RA IG and the Hybrid/Intermediary Exchange IGs are compatible with each other. For example, a MedMorph use case implementation can use an intermediary that conforms to the Hybrid/Intermediary Exchange IG and also implement the TTP capabilities outlined in the MedMorph RA IG.


#### Relationship between MedMorph RA IG and Common Data Model Harmonization (CDMH IG)

The MedMorph RA IG describes a framework for data extraction from EHRs and the process in which Data Marts can load the data for research purposes. While there are many different data models used for research, the MedMorph RA IG examined the [CDMH IG](http://hl7.org/fhir/us/cdmh/index.html), which supports mappings between FHIR and Patient-Centered Outcomes Research Network (PCORnet) Common Data Model(CDM), Informatics for Integrating Biology & the Bedside (i2b2), Sentinel, and Observational Medical Outcomes Partnership (OMOP) data models. These mappings will be useful for the MedMorph Research Data Exchange Content IG and potentially other research use cases. 


---

// File: input/pagecontent/changes.md

### STU1 Publication

The following is an overview of the STU1 Release 1.0.0 publication of the IG.

1. The IG defines the MedMorph Reference Architecture for both Public Health Reporting Use cases and for Research Data Submissions. 
2. The IG defines the concept of Knowledge Artifacts and how these can be used to automatically extract data from EHRs and make decisions on sending the extracted data to Public Health Agency or Research Organizations. 
3. The exact content and format of the data to be sent will be defined by Content IGs which are created using the Reference Archtiecture for each use case.
4. Currently there are content IGs for Central Cancer Registry Reporting, Healthcare Surveys Reporting and for Research Data Exchange.  

---

// File: input/pagecontent/contentig.md

This section provides guidance to content implementation guide authors on how to leverage the MedMorph Reference Architecture (RA) to create a content implementation guide (IG).

***NOTE: This section is only included in this IG as guidance to inform content IG authors.***

### MedMorph Content IG overview

MedMorph content IGs are created to address reporting requirements for specific use cases and/or reporting programs. Each content IG will focus on a specific use case such as Central Cancer Registry Reporting, Health Care Surveys, or Research Data Exchange. Each content IG is expected to leverage the MedMorph RA IG during development. The content IG should be tested and piloted before being finalized for publication.

For a more detailed understanding of the content IG and relationships with other IGs, refer to the section
 [Implementation Guide Types and Relationships](background.html#ig-types-and-their-relationships).

The next few paragraphs outline the various sections and the creation process to follow when authoring a content IG.

### Example Content IG Sections 

The table below identifies the necessary sections of a content IG. In addition to the sections outlined below, other sections can be added as needed.

<table>
  <thead>
    <tr>
      <th>Section Name</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>Introduction</td>
	<td>This section provides an introduction and background on the specific use case for which the content IG is being created.</td>
  </tr>
  <tr>
    <td>Use Cases and Workflows</td>
	<td>This section describes the use cases, user stories, and workflows associated with the use case and/or the reporting program. This section should include identifying the MedMorph RA actors and systems needed for the workflow. If any new actors or systems are identified for the use case, they must be defined in this section along with their roles and interactions with the MedMorph RA actors and systems. Any requirements that depend on previous state, current state, and cached state should be captured as part of the use case to inform the processing and capabilities required for each actor.</td>
  </tr>
  <tr>
    <td>Data Source (e.g., EHR) Requirements</td>
	<td>This section outlines the specific data elements necessary for the use case that must also be supported by Data Sources. These data elements include subscription events, notifications, and mapping to FHIR Resources. This section should also define the necessary FHIR APIs that the Data Sources must support and the security requirements for interaction with the Data Source if different from the MedMorph RA IG.</td>
  </tr>
  <tr>
    <td>Data Receiver Requirements</td>
	<td>This section outlines the specific requirements for submission to the Data Receiver (e.g., Public Health Authority (PHA), Research Organization (RO), Trusted Third Party (TTP)). This section should delineate the APIs, processing of the data, content necessary for submission, and support for synchronous vs. asynchronous responses. Additionally, this section should include the expected responses from the Data Receiver and how these responses should be consumed by the healthcare organization.  Lastly, the security requirements for interaction with the Data Receiver must be specified in this section.</td>
  </tr>
  <tr>
    <td>Knowledge Artifact Requirements</td>
	<td>This section details the requirements for the use case-specific Knowledge Artifacts. This will define the trigger events, actions that must be executed, value sets, and code systems necessary for processing.</td>
  </tr>
  <tr>
    <td>CodeSystems and ValueSets</td>
	<td>This section outlines the CodeSystems and ValueSets required for the use case.</td>
  </tr>
  <tr>
    <td>FHIR Artifacts</td>
	<td>This section provides the following FHIR Artifacts for the content IG. 
	<ul>
	<li>Profiles</li>
	<li>Capability Statements</li>
	<li>Code Systems</li>
	<li>Value Sets</li>
	<li>Examples</li>
	</ul>
	</td>
  </tr>
  </tbody>
</table>

### Capturing the Use Case and Workflows in a Content IG

In this section, the authors must reference the actors and systems specified by the [MedMorph RA IG](usecases.html) that are required for the use case. If the use case requires a new actor or system, then the new actor or system should be added and defined in this section of the content IG.  If a new actor/system is needed, the interactions between the various actors and systems should be documented as well as the relationship of those actor(s)/system(s) to the MedMorph actors/systems.
 
The section should contain the following sub-sections:

* **Business Objectives** being met by the content IG
* **User Story(ies)** the content IG is addressing.
* Identification and/or definition of the **Actors and Systems** based on the user story(ies).
* Documentation of the **Main Flow** and significant **Exception Flows** of the use case using the identified actors and systems. (e.g., a business process model [BPM] type of diagram).
* **Identification of any interactions** between actors and systems that are not part of the MedMorph RA IG.


### Capturing Data Source (e.g., EHR) Requirements in a Content IG

In this section, the data requirements for the use case should be identified in detail. The requirements can be captured in a spreadsheet and linked from this section.

For example, the level of detail that should be documented in this section of the Central Cancer Registry Reporting Content IG includes requirements the cancer reporting use case needs to capture Condition data, including but not limited to the relevant ICD10/SNOMED codes, the status of the condition (e.g., active, resolved, readmission), onset data of the condition, encounter where the diagnosis was performed, etc.  Additionally, the following topics are necessary to fully specify this section of the content IG:

* The named event requirements for the use cases have to be selected from the [Named Event Value Set](ValueSet-us-ph-triggerdefinition-namedevent.html). If the events defined are not sufficient for the use case, then the authors should contact the HL7 Public Health (PH) Workgroup (WG) for guidance. 

* The Subscription Topics that will be used based on the named events should be defined per the topics defined in [Subscriptions and Notifications](subscription.html).

* The specific APIs and Operations that need to be supported by the Data Sources should be identified and documented in the Capability Statement and linked from this section.

* The security mechanisms to be used to interact with the Data Source (e.g., SMART on FHIR Backend Services Authorization or other mechanisms) should be identified in this section.

### Capturing Trust Service Provider Requirements in a Content IG

For each use case, the Trust Service Provider requirements have to be analyzed and captured. If the Data Receiver does not have the authorities or policies to receive PHI/PII data, then the HDEA will have to use the Trust Service Provider to appropriately de-identify, anonymize or psuedonymize the data as needed. For more information on the trust services please refer to the reading material on [Trust Service Provider Requirements](trustservices.html).

Content IG authors should identify the specific data elements which needs to be de-identified or anonymized or psuedonymized per the use case requirements. 

NOTE: Data Receivers may create generalized trust services that can be used by health care organizations with appropriate authorities and policies and may provide endpoints to use these services by health care organizations. 


### Capturing Data Receiver Requirements in a Content IG

The data requirements relevant to the Data Receiver (e.g., PHA) should be documented in this section. Typically, this is a subset of all the data requirements identified in the Data Source Data Requirements section
The data submission requirements must be documented in this section. This includes any timing constraints on when the data must be submitted any periodic data submission requirements, and the content of the report that is generated and sent to the Data Receiver.

* The Data Receiver responses to the submission must be outlined. This includes documenting the main workflow, success paths, exception paths, and the data that will be included.

* Additionally, this section should identify if the interactions are synchronous and/or asynchronous and document any routing and validation requirements.

* The specific APIs and Operations requiring support from the Data Receiver should be identified and documented in the Capability Statement and linked from this section.

* The security mechanisms needed to interact with the Data Receiver (e.g., SMART on FHIR Backend Services Authorization, or other mechanisms) should be documented in this section.

* Expectations of the Data Receiver with respect to duplicate data has to be specified in the Content IG and corresponding requirements have to be added to the HDEA in the Content IG.


### Capturing the Knowledge Artifact Requirements in a Content IG

* Refer to [Provisioning workflow specifications](provisioning.html) on how to create a Knowledge Artifact. 

The following are examples of Knowledge Artifacts that have been created in conformance with the MedMorph RA IG.

* [Central Cancer Registry Reporting Knowledge Artifact example](http://hl7.org/fhir/us/central-cancer-registry-reporting/2022Jan/StructureDefinition-ccrr-plandefinition.html)
* [Health Care Survey Reporting Knowledge Artifact example](http://hl7.org/fhir/us/health-care-surveys-reporting/2022Jan/StructureDefinition-hcs-plandefinition.html)
* [Research data extraction Knowledge Artifact example](http://hl7.org/fhir/us/medmorph-research-dex/2022Jan/StructureDefinition-medmorph-research-dex-plandefinition.html)

### Dealing with CodeSystems and ValueSets

CodeSystems and ValueSets are used extensively to identify the relevant clinical content to submit to the Data Receiver (e.g., PHA). 

These CodeSystems and ValueSets can be:

* Defined by the HL7 Terminology WG

* Defined by other IGs such as US Core, US Public Health Profiles, eCR FHIR IG, etc.

* Defined by previous initiatives and hosted in the Public Health Information Network Vocabulary Access and Distribution System (PHINVADs) or the Value Set Authority Center (VSAC).

* Defined as new content in the content IG if no reusable content exists. 
 
For each CodeSystem and ValueSet used in the IG, the source must be identified. Any decisions on whether the value set or code system is hosted by an external agency such PHINVADS or VSAC is left to the content IG author. Any ValueSets and CodeSystems defined in the IG that are commonly applicable to multiple IGs should be pushed to HL7 Terminology WG for consideration.

### Creation of Profiles

Ideally, creating a content IG that can leverage existing profiles from other IGs would reduce implementation burden on both Data Sources (e.g., EHRs) and Data Receivers. To achieve this goal, the following  is recommended:

* From the data requirements, identify if there is a specific [US Core IG]({{site.data.fhir.uscoreR4}}/index.html) profile that can be used.

* If there is not a specific US Core profile, then refer to the [US Public Health (PH) Library](https://build.fhir.org/ig/HL7/fhir-us-ph-common-library-ig/index.html) to determine if there is a profile that can be used.

* If no profiles are found in either US Core or the US PH Library, refer to other PH initiatives (e.g., eCR, Vital Records Birth and Fetal Death Reporting) to identify if there is a profile that can be leveraged.

* If no existing profiles completely satisfy the use case need, including if an existing profile partially supports the need, a new profile can be created and documented in the content IG. The created profile could be a completely new profile, a modified profile, or a profile of an existing profile.

### Content IG Examples

The content IG Examples section should have an example for each data element that is part of the IG. These examples should be validated for compliance to their specific profile using the [FHIR Validator](https://inferno.healthit.gov/validator/). Ideally, examples should be generated from the Connectathon testing activities.

 


---

// File: input/pagecontent/credits.md

### Credits

#### Primary authors:

* Nagesh Bashyam (Drajer LLC)
* Brett Marquard (Wave One Associates)

#### Project leads and subject matter experts (SMEs) – U.S. Centers for Disease Control and Prevention (CDC):

##### Primary Lead:

* Maria Michaels 

##### Co-Leads:

* Abigail Viall 
* Wendy Blumenthal 

##### Health Care Surveys SME:

* Brian Gugerty 

##### Cancer Reporting SMEs:

* Caitlin Kennedy 
* Kasey Diebold 
* Wendy Blumenthal 

##### Hepatitis C SMEs:

* Abigail Viall 
* Aaron Harris 
* Keydra Oladapo 
* Laurie Barker 
* Martha Montgomery 
* Nicola Thompson 
* Noreen Kloc 
* Shaoman Yin
 
##### Electronic Case Reporting SME:

* Laura Conn 

##### Vital Statistics / Other National Center for Health Statistics SMEs:

* Cindy Bush 
* Jenny Couse 
* Prachi Mehta

##### Project management and coordination:

* Mike Flanigan (Carradora Health Inc)
* Jamie Parker (Carradora Health Inc)

##### Supporting Team Members:

* Becky Angeles (Carradora Health Inc)
* Kishore Kumar Bashyam (Drajer LLC)
* Sameemuddin Syed (CDC ORISE Fellow)

##### Technical Expert Panel Co-Chairs:

* John W Loonsk (Johns Hopkins University/Association of Public Health Laboratories [APHL])
* Bill Lober (University of Washington)

##### Technical Expert Panel Members (Represented Organizations):

* Allscripts
* Alphora (formerly Data Consulting Group [DCG])
* Alta Informatics & Solutions
* AllianceChicago
* Altarum
* American Board of Family Medicine
* American Medical Informatics Association (AMIA)
* Apervita (ceased operations October 1, 2021)
* Association of Public Health Laboratories (APHL)
* Association of State and Territorial Officials (ASTHO)
* Bluewave Informatics
* California Department of Public Health
* Cancer Care Ontario
* CareQuality
* Cancer Registry of Greater California
* Cerner
* College of American Pathologists (CAP)
* Digital Infuzion
* Duke University School of Medicine
* eClinical Works
* e-Health Exchange
* Epic
* Georgia Institute of Technology
* Georgia State University
* Harvard University
* HLN Consulting
* Intermountain Health Care
* iParsimony
* Johns Hopkins University
* Lantana
* Louisiana Public Health Institute (LPHI)
* Massachusetts General Hospital
* Max MD
* MITRE
* National Association of Community Health Centers (NACHC)
* National Committee for Quality Assurance (NCQA)
* New York State Department of Health
* North Carolina Department of Health and Human Services
* Northshore University Health System
* Oregon Community Health Information Network (OCHIN)
* Oregon Health & Science University
* Pacific Island Health Officer Association (PIHOA)
* PuraJuniper
* Regenstrief Institute
* RTI International
* Shasta Networks
* South Carolina Department of Health and Environmental Control
* Texas Department of State Health Services
* University of North Carolina School of Medicine
* University of Minnesota
* University of Missouri School of Medicine
* University of Utah
* University of Washington
* University of North Carolina 
* U.S. Agency for Healthcare Research and Quality (AHRQ)
* U.S. Centers for Disease Control and Prevention (CDC)
* U.S. Centers for Medicare & Medicaid Services (CMS)
* U.S. Department of Health and Human Services (HHS)
* U.S. Food and Drug Administration (FDA)
* U.S. Health Resources and Services Administration (HRSA)
* U.S. National Institutes of Health (NIH)
* U.S. Office of the National Coordinator for Health Information Technology (ONC)
* Washington State Department of Health

##### MedMorph FHIR Connectathon Testing Organizations:

* Alphora (formerly Data Consulting Group [DCG])
* Altarum
* California Cancer Registry
* Cerner Sandbox
* College of American Pathologists (CAP)
* eHealth Exchange
* mTuitive
* U.S. Centers for Disease Control and Prevention (CDC)

Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm, and expertise to this work.


---

// File: input/pagecontent/downloads.md

### Download

You can also download:

* [this entire guide](full-ig.zip)
* the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
* the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/provisioning.md

This section defines the conformance requirements for systems wishing to implement the Provisioning Workflow. More specifically, the creation of the Knowledge Artifacts, publishing them in a Knowledge Artifact Repository, and their access by the Health Data Exchange App (HDEA) and/or Data Sources. 


### MedMorph Knowledge Artifacts

The next few sections describe and outline specific requirements that need to be followed in creating MedMorph Knowledge Artifacts.

#### Knowledge Artifact Overview

MedMorph Knowledge Artifacts follow the general Event, Condition, Action (ECA) rule in computer programming. An occurrence of an event triggers specific actions which are only executed when certain conditions are met. In MedMorph these ECA rules are used to implement different workflows to collect, package and report data from clinical care without increasing the burden on providers. The figure below gives an overview of ECA rule and examples of how it could be applied for the Central Cancer Registry Reporting and Health Care Survey use cases.

{% include img.html img="ECAExample.svg" caption="Figure 6.1 - ECA Rule and MedMorph Examples" %}

<br>
  
The MedMorph RA IG provides the basic constructs required to enable public health and research reporting using ECA rules embedded in Knowledge Artifacts which are machine processable and can be executed without burdening the provider. In addition to the ECA rules there are references to ValueSets, Library Resources, Security Certificates, and Endpoint information. These different artifacts are shown in Figure 6.2 below.

{% include img.html img="KnowledgeArtifactComponents.png" caption="Figure 6.2 - Knowledge Artifact Components" %}

<br>

#### Machine Processable Events, Conditions, and Actions

MedMorph Knowledge Artifacts which are built using ECA rules have to be machine processable (structurally and semantically) to reduce provider burden. In addition, the Knowledge Artifacts have to be generalized to accommodate multiple use cases specified in Content IGs.

MedMorph has defined a list of named events that typically occur in clinical workflows based on which notifications can be performed. MedMorph Content IGs will select events from the documented [Named Events](ValueSet-us-ph-triggerdefinition-namedevent.html) to start any MedMorph reporting workflow. Typically named events occur due to updates to patient data within a Data Source. The named events are eventually intended to be FHIR Subscription Topics once FHIR subscriptions get implemented in the Data Source. The HDEA subscribes to these [Subscription Topics](ValueSet-us-ph-triggerdefinition-namedevent.html) and will get notified when the corresponding events occur in the workflow. 

Once the HDEA receives notifications for a specific Named Event via FHIR Subscriptions, the HDEA will evaluate the data according to the conditions specified in the Knowledge Artifact. If conditions are met then the actions will be executed as per the ECA rules in the Knowledge Artifact. If conditions are not met actions will not be executed. To describe machine processable conditions, FHIR Expressions are used. MedMorph will use [FHIR Path](https://www.hl7.org/fhir/fhirpath.html) expressions or [CQL](https://cql.hl7.org/) expressions. 

The Actions that can be executed are based on the different use cases considered for the MedMorph RA. MedMorph Content IGs will select actions from the documented [List of PlanDefinition Actions](ValueSet-us-ph-plandefinition-action.html) during the creation of the Knowledge Artifact. The execution sequence of the various actions can be visualized as shown in Figure 6.3 below.

{% include img.html img="ActionSequence.svg" caption="Figure 6.3 - Action Execution Steps" %}

<br>

As shown in Figure 6.3 above, actions will start in Step 1 when a notification from a subscribed named event is delivered from the Data Source to the HDEA. After the notification, the reporting workflow starts in Step 2 which executes a series of sub-steps using predefined actions. Not all actions represented within the sub-steps in the figure are required as part of a workflow. We will consider an example to highlight the actions that will be executed. 

In the case of Central Cancer Registry Reporting, once a named event occurs and the execution of the reporting workflow starts, the following actions will be executed in a sequence.

* Determine if the patient has a reportable cancer condition, by executing the check-trigger-codes action in Step 2a. In Step 2a, the check-participant-registration action is not required for this scenario and hence it is skipped.

* If the patient has a reportable condition, the Cancer Report will be created by accessing appropriate data from the Data Source in Step 2b. The accessed data and executed queries will be defined in the Content IG. The create-report action will assemble the data into a bundle per the MedMorph RA IG and Central Cancer Registry Reporting Content IG.

* Step 2c will be skipped since there is no specific requirement to anonymize, pseudonymize, or de-identify the data. 

* The report is validated in Step 2d to conform to the various profiles specified by the Content IG by executing the validate-report action. 

* Once the report is validated and ready for transmission, the report is submitted by executing the submit-report action in Step 2e.

These actions described above are machine processable and are extensible. As new use cases are instantiated using the MedMorph RA IG, new actions may be added. For example, if the report needs to be signed, an action called add-digital-signature action can be defined and added to Step 2e. Similarly, new steps could also be introduced as needed. 

The next section outlines specific requirements for the creation and consumption of the Knowledge Artifacts by MedMorph RA actors.

#### Creating Knowledge Artifacts

Data Receivers such as PHAs or ROs who receive the data are the actors who create or produce Knowledge Artifacts based on their use cases and program needs. 

* Knowledge Artifact producers SHALL represent the Knowledge Artifact using a US PH Specification Bundle.

* Knowledge Artifact producers SHALL represent ECA rules using PlanDefinition Resource.

* MedMorph Knowledge Artifacts SHALL be of type workflow-definition and is represented in PlanDefinition.type attribute.

* MedMorph workflows are triggered by named-events such as Start of an encounter, close of an encounter, new diagnosis etc. Producers of Knowledge Artifacts SHALL select specific named-events from the [Named Event Valueset](ValueSet-us-ph-triggerdefinition-namedevent.html). In case the required named-event is not available in the value set, the value set MAY be extended in the Content IGs.

* Producers of Knowledge Artifacts SHALL identify the specific named-events to be subscribed to by the HDEA in the PlanDefintion.action.trigger element.

* MedMorph Knowledge Artifacts SHALL use only named-events for triggering which is indicated by setting the PlanDefinition.action.trigger.type to named-event for actions specifying triggers.

* MedMorph workflow actions are essentially activities that get executed to accomplish a specific task. Knowledge Artifact producers SHALL  select specific actions from the [Plan Definition Action Valueset](ValueSet-us-ph-plandefinition-action.html). In case the required action is not available in the value set, the value set MAY be extended in the Content IGs.

* Producers of Knowledge Artifacts SHALL use Expressions of type text/fhirpath.

* Producers of Knowledge Artifacts MAY use alternative expression of text/cql or text/cql.identifier for defining Knowledge Artifacts.  

* MedMorph Conditions SHALL always be of kind "applicability" and are specified in PlanDefinition.Condition.kind element.

* Producers of Knowledge Artifacts SHALL use a Library resource to include the ValueSet references required for matching trigger codes. This Library Resource can be referenced in the PlanDefinition.relatedArtifact element.

* Producers of Knowledge Artifacts using Expressions of type text/cql SHALL include the CQL library reference in the PlanDefinition.library element.

* Producers of Knowledge Artifacts SHALL represent the Data Receiver's endpoint where data has to be submitted in the PlanDefinition.ext-receiverEndpoint extension.

* Producers of Knowledge Artifacts SHALL indicate the input data requirements for a specific action in PlanDefinition.action.input element.

* Producers of Knowledge Artifacts SHOULD define the queries to be used to extract the data from the Data Source using the PlanDefinition.action.input.defaultQuery extension element. 

* Producers of Knowledge Artifacts SHOULD use the PlanDefinition.action.input.relatedDataId extension to reuse data across actions and avoid the same query being executed on the Data Source multiple times.

* Producers of Knowledge Artifacts SHALL indicate the output data requirements for a specific action in PlanDefinition.action.output element.

* Producers of Knowledge Artifacts SHALL include the sub-steps for an action in PlanDefinition.action.action element.

* For executing actions which are delayed by a time duration, Knowledge Artifact producers SHALL specify the duration in the PlanDefinition.action.timing element.

* For executing actions which are dependent on other actions, Knowledge Artifact producers SHALL specify the related action in the PlanDefinition.action.relatedAction element. 

* The PlanDefinition.action.relatedAction.relationship to be used for MedMorph related actions SHALL be before-start. This implies that the related action cannot start until the parent action is completed.
* To specify related actions which are delayed by a time duration, the PlanDefinition.action.relatedAction.offsetDuration element SHALL be used.

* Knowledge Artifact producers SHALL populate all applicable "MUST SUPPORT" elements in the PlanDefinition including inherited "MUST SUPPORT" elements from Shareable PlanDefinition profile. 

* Knowledge Artifact producers SHALL include PlanDefinition and its dependencies specified using FHIR Resources such as Library, ValueSet etc in the US PH Specification Bundle.

#### APIs

The APIs that can be used to retrieve the Knowledge Artifacts is specified on [Specification Bundle profile](StructureDefinition-us-ph-specification-bundle.html) page.
The APIs to create and update the resources related to the Knowledge Artifacts are specified in the [Knowledge Artifact Repository Capability Statement](CapabilityStatement-medmorph-knowledge-artifact-repository.html)

#### Notifications of Changes in Knowledge Artifacts

Knowledge Artifacts get changed from time to time and health care organizations implementing Knowledge Artifacts have to regularly update the PlanDefinition instances based on changes. Currently the MedMorph RA IG does not prescribe any specific notification mechanism.

* The Knowledge Artifact Repository SHALL support retrieval of Knowledge Artifacts using a GET request.

* The consumers of Knowledge Artifacts MAY choose to be notified of changes or poll the Knowledge Artifact Repository and retrieve the latest information and determine if changes have been made.

#### Operationalization of Knowledge Artifacts

Knowledge Artifacts have to be understood and operationalized by healthcare organizations during implementation. Before operationalizing the Knowledge Artifact and processing by the HDEA (Backend Services App) or by a Data Source (such as EHR) directly, healthcare organizations shall test and validate the processing of the Knowledge Artifact before enabling reporting to Data Receivers. Specific requirements for  healthcare organization to receive a Knowledge Artifact shall be specified in the MedMorph Content IGs.

#### Knowledge Artifact Repository Specific Requirements 

The Knowledge Artifact Repository actor SHALL support the PlanDefinition creation, update, retrieval and search mechanisms as identified in the [Knowledge Artifact Repository Capability Statement](CapabilityStatement-medmorph-knowledge-artifact-repository.html).

#### HDEA Specific Requirements 

* The HDEA actor SHALL support the Knowledge Artifact retrieval and search mechanisms as identified in the [HDEA Capability Statement Example](CapabilityStatement-medmorph-healthdata-exchange-app-client.html).

* The HDEA SHALL be capable of processing FHIR Path Expressions to evaluate Conditions which are specified as part of the PlanDefinition.action.condition elements

* The HDEA SHALL implement the ability to process action dependencies specified via the PlanDefinition.action.relatedAction elements. Typical implementations will build a graph or a tree structure to identify dependencies between actions.

* The HDEA SHALL be capable of scheduling jobs based on timing offsets specified in the PlanDefinition.action.timing and PlanDefinition.action.relationAction.offsetDuration elements.

* The HDEA SHALL be capable of querying the Data Sources using FHIR APIs to retrieve patient specific content as specified in the PlanDefinition.action.input element.



---

// File: input/pagecontent/reportgeneration.md

This section defines the specific conformance requirements for systems wishing to conform to Knowledge Artifact Repository actor specified in this MedMorph Reference Architecture IG.  The specification focuses on the creation of the Knowledge Artifacts and their access by the Backend Service App and/or EHRs. 


### MedMorph Knowledge Artifact Requirements

The section outlines specific requirements that need to be followed in creating MedMorph Knowledge Artifacts.

#### Representing Workflow Events





#### Representing Terminologies


#### Representing Expression Logic 


#### Representing Research Queries 


#### Representing Security Requirements  


#### Security and Privacy considerations


### APIs

#### Provisioning Workflow - Creation of a Knowledge Artifact


**Precondition:**


**API: **


**Expected Result:**





---

// File: input/pagecontent/reportsubmission.md

This section defines the specific requirements for submitting reports that are created by the Health Data Exchange App (HDEA), MedMorph’s backend services app, as specified in this MedMorph Reference Architecture (RA) Implementation Guide (IG).

### MedMorph Reports

Reports created by the HDEA contain all the resource instances (data) necessary for sending to the Data Receiver (e.g., Public Health Authority (PHA)/Research Organization (RO)). The specific resources (data) to be contained in the report will be defined by the content IG specific to the use case. The following are specific framework requirements for report submission across all use cases.

#### Backend Service App Requirements for Messaging

##### Message Submission

* The HDEA SHALL create reports to be sent to the Data Receiver in form of a Bundle of type 'message' as indicated by the profile [MedMorph Reporting Bundle](StructureDefinition-us-ph-reporting-bundle.html).

* The HDEA SHALL include the MessageHeader resource as the first entry in the Bundle. 

* The HDEA SHALL copy the receiver address from the Knowledge Artifact's PlanDefintion.ext-receiversAddress extension element into the MessageHeader.destination.endpoint element.

* The HDEA SHALL populate the sender information as a reference to the Organization resource representing the Healthcare Organization.

* The HDEA SHALL populate the sender's FHIR endpoint in the MessageHeader.source.endpoint element.

* The HDEA SHALL populate the Bundle.timestamp element with the bundle creation time. 

* The HDEA SHALL encrypt the bundle created based on the PlanDefinition.action requirements. All Resource entries within the Bundle except the MessageHeader resource SHALL be encrypted when specified as part of the actions required in the PlanDefinition. 

* The HDEA SHALL submit the bundle by invoking the [Data Receiver's FHIR Endpoint]/$process-message operation.

* When submitting the bundle via Trusted Third Party(TTP), The HDEA SHALL submit the bundle by invoking the [Trusted Third Party FHIR Endpoint]/$process-message operation.


##### Message Receiving

* When responses are delivered synchronously by the TTP/Data Receiver, the HDEA SHALL process the response message. 

* In order to receive asynchronous responses from TTP or Data Receiver, the HDEA SHALL implement the $process-message operation on the ROOT URL of the FHIR Server.

* Upon receipt of either synchronous or asynchronous response messages, the HDEA SHALL decrypt the message when required. 

* Upon receipt of either synchronous or asynchronous response messages, the HDEA SHALL validate the message before accepting the message.

* The HDEA SHALL track message submissions with the message responses.

* For each message submission, The HDEA SHALL provide the ability for an administrator or the provider to view the message submissions and message responses received. 


##### APIs Used by HDEA to Submit Messages to TTP or Data Receiver

```
For Message Submission to Data Receiver directly:
POST [Data Receiver FHIR Endpoint]/$process-message when submitting directly to the Data Receiver.
Synchronous responses are received as part of the POST response.

For Message submission via TTP:
POST [TTP FHIR Endpoint]/$process-message when submitting via TTP FHIR endpoint.
Synchronous responses are received as part of the POST response.
```

##### APIs Supported by HDEA to Receive Asynchronous Response Messages 

```
POST [HDEA FHIR Endpoint]/$process-message for receiving asynchronous message responses. 
```

#### Message Forwarding Requirements for TTP

* The TTP SHALL implement the $process-message operation on the ROOT URL of the FHIR Server to receive reports from the HDEA using the POST operation.

* TTP SHALL use the MessageHeader.destination.endpoint to route the message to the final destination. 

* When forwarding a message from health care organization to Data Receiver, the TTP SHALL forward the message to the final destination by invoking the [Data Receiver FHIR Endpoint]/$process-message operation.

##### Synchronous Message Forwarding Requirements

* TTP SHALL forward the message to the final destination in a synchronous manner. 

* When a synchronous response is received from the receiver, the TTP SHALL return the response to the sender as part of the synchronous transaction.

##### Asynchronous Message Forwarding Requirements 

* When a Data Receiver submits an asynchronous response back to the health care organization, the TTP SHALL forward the message to the health care organization using the MessageHeader.destination.endpoint address. This is nothing but the health care organization (Sender's) FHIR Endpoint.


##### APIs used by Trusted Third Party for Message Forwarding  

```
POST [Data Receiver FHIR Endpoint]/$process-message when forwarding a message from HDEA to the Data Receiver. 
Synchronous responses get forwarded back to the healthcare organization as part of the POST response.
 
For Asynchronous responses, the TTP has to make a separate API call as identified below.
POST [HDEA FHIR Endpoint]/$process-message when forwarding a message from Data Receiver to the HDEA.
```

#### Data Receiver Requirements for Receiving Messages from TTP or HDEA

* The Data Receiver SHALL implement the $process-message operation on the ROOT URL of the FHIR Server to receive reports from the HDEA or TTP using the POST operation.

* Upon receipt of the message, the Data Receiver SHALL decrypt the message when required. 

* Upon receipt of the message, the Data Receiver SHALL validate the message before accepting the message.

##### Synchronous Responses from the Data Receiver

* When there are validation failures, the Data Receiver SHALL return a message bundle back with the details of the failures as part of the POST response.

##### Asynchronous Responses from the Data Receiver

* When the Data Receiver sends an asynchronous message back to the Healthcare Organization as a reply-to an original message, the Data Receiver SHALL 
	- populate the MessageHeader.response.identifier with the original message identifier 
	- populate the MessageHeader.destination.endpoint with the Sender's FHIR Endpoint.
	- populate the MessageHeader.sender with the Data Receiver reference.
	- populate the MessageHeader.source.endpoint with the Data Receiver FHIR endpoint.


##### APIs Supported by Data Receiver to Receive a Message from HDEA or TTP 

```
POST [Data Receiver FHIR Endpoint]/$process-message when receiving a message from HDEA or TTP. 
For synchronous responses, the data is sent back as part of the POST response.
```

##### APIs Used by Data Receiver to Submit a Message to HDEA or TTP

These APIs are used for sending asynchronous responses back to the Healthcare Organization directly or via the TTP.

```

POST [HDEA FHIR Endpoint]/$process-message for submitting a response directly to the HDEA (Healthcare Organization)

POST [TTP FHIR Endpoint]/$process-message for submitting a response via TTP FHIR Endpoint.
```


---

// File: input/pagecontent/researchdataextraction.md

This section defines the specific conformance requirements for onboarding a data partner to populate a Data Mart as specified in this MedMorph Reference Architecture (RA) Implementation Guide (IG).


### Data Source Requirements

* The Data Source (e.g., EHR) system SHALL support the [base]/Group/[id]/$export operation for exporting data for one or more patients.

* The Data Source system SHALL support search of Group resources using identifier and name.

* The Data Source system SHALL support all resource types available in the Data Source related to Patient compartment for the [base]/Group/[id]/$export?_type parameter.

* The Data Source system SHALL support the Bulk Data Request Flow as defined in the [Bulk Data Access IG specification.]({{site.data.fhir.ver.bulkig}}/index.html)

* The Data Source system MAY support the Bulk Data Delete Request as defined in the Bulk Data Access IG specification.

* The Data Source system SHALL support the Bulk Data Status Request as defined in the Bulk Data Access IG specification.

* The Data Source system SHALL set the requireAccessToken to true within the Bulk Data Status Request response body as defined in the Bulk Data Access IG specification.

* The Data Source system SHALL require the Health Data Exchange App (HDEA) to provide valid access token to export the data.

* When the HDEA does not have appropriate authorization to the data requested, the Data Source system SHALL return OperationOutcome with appropriate error message.

* The Data Source system SHALL support the [US Core profiles]({{site.data.fhir.ver.uscoreR4}}/index.html) to export the content for each patient.

* The Data Source system SHALL support ```system/*.read`` scope to access data for multiple patients.

#### Creation of Group Resource 

* The Data Source system SHOULD support the creation of the Group Resource using the POST API. The Group will contain a list of patients who have consented to contribute their data for research.

Note: The Group Resource creation process depends on the health care organizations, the workflows used, and the approvals required. This varies widely and will be left to each health care organization.


#### Consent Management  

Health care organizations are responsible for collecting patient consent before sharing the patient data for research. Each health care organization follows applicable laws and their own policies and processes to obtain consent. Consent obtained may be represented using electronic and structured data or could be a signed PDF document. Consent also may be stored as part of a Data Source or an external system. As part of the MedMorph RA IG development, Consent Management is not in-scope due to the above variations and the current lack of standardization.


#### Validating Consent Before Disclosing Data

Disclosing identifiable data for research requires explicit patient consent. When the HDEA requests the Data Source to export all the data for one or more patients, the Data Sources FHIR Authorization Server must validate the consent before sharing data for research. The process of enforcement of consent varies by health care organization. MedMorph does not prescribe any standard mechanism to enforce consent but assumes that the Data Source Authorization Server will allow the [base]/Group/[id]/$export to continue if all the patients in the Group have consented to share their data.


#### Data Source APIs and Profiles to be Supported

The following APIs have to be supported by the Data Source

```
[FHIR base URL]/Group/[id]/$export with all available types in a Patient Compartment.
```

All US Core profiles must be supported by the Data Source and data exported have to be represented using the US Core profiles. 


### HDEA Requirements

* The HDEA SHALL register with the Data Sources Authorization Server to obtain client id, client secret to invoke Data Source FHIR APIs for Bulk Data Access. 

* The HDEA SHALL process a Knowledge Artifact PlanDefinition resource to determine the following 
	* How frequently the data has to be exported?

* The HDEA SHALL get authorized and obtain necessary access tokens to invoke the operations necessary to export data from the Data Source.

* The HDEA SHALL invoke [FHIR Base URL]/Group/[id]/$export and include all types from the Patient compartment in the export request.

* Once the data is exported, The HDEA SHALL download/fetch the data from the Data Source per the Bulk Data Access IG specification.

* The HDEA SHALL apply translations to the data as needed using the Trust Service Provider when specified by the Knowledge Artifact. 

* The HDEA SHOULD leverage FHIR to research data model mappings in the [Common Data Models Harmonization (CDMH) IG](http://hl7.org/fhir/us/cdmh/index.html) to identify the FHIR resources and APIs required to populate the Data Marts.


### Data Mart Requirements

Data Marts store the extracted data from the Data Source using different data models and technologies. Once the data is extracted from the Data Sources the HDEA could automatically populate the Data Mart if it supports FHIR APIs. Currently most Data Marts do not support FHIR. Standardizing the ability to populate a Data Mart using FHIR APIs is desirable to enable efficient data partner onboarding and data mart population. 

* Data Marts SHOULD support POST FHIR APIs for each of the US Core resource profiles so that the HDEA can populate the Data Mart.

* The Data Mart SHOULD leverage FHIR to research data model mappings in the CDMH IG to identify the FHIR resources and APIs to be supported.

* The Data Mart SHOULD accept the data for each resource in FHIR format and translate to internal data models leveraging the CDMH IG mappings where applicable. 

#### APIs and Profiles to be Supported by Data Mart

```
POST [FHIR Base URL]/[Resource]/ for each resource and profile specified in the US Core IG and CDMH IG.
```

### Trust Service Provider Requirements

The Trust Service Provider supports services required for the various research use cases. 

* The Trust Service Provider SHALL support the operations as specified in the Trust Service Provider Capability Statement. 


### Sufficiency of US Core Data Elements

US Core profiles contain data elements identified in US regulations with a few additions agreed upon by the Data Source vendors. These additions are identified as the most important data elements for payment, treatment, and operations. However, the research data models are richer in nature and contain significantly more data elements, many of which are not present in the US Core profiles. 
Acknowledging this fact, the MedMorph RA IG is prescribing US Core as starting point. Content IG developers SHOULD leverage CDMH IG to populate the data elements required for common research data models.

 


---

// File: input/pagecontent/spec.md

This section defines the specific requirements for systems wishing to conform to actors specified in this MedMorph Reference Architecture (RA)  Implementation Guide (IG). The specification focuses on the creation of the Knowledge Artifacts and their usage by the Health Data Exchange App (HDEA), MedMorph’s backend services app. It also describes the use of [SMART on FHIR Backend Services Authorization]({{site.data.fhir.smartapplaunch}}/backend-services.html) and provides guidance on privacy, security, and other implementation requirements.


### Context

#### Pre-reading
Before reading this formal specification, implementers should first be familiar with two other key portions of the IG:

* The [Use Cases](usecases.html) page provides the business context and general process flow enabled by this  specification.

* The [Implementation Guide overview](background.html) page provides information about the underlying specifications and indicates what portions of each should be reviewed in order to have the necessary foundation to understand the constraints and usage guidance described in this specification.


#### Conventions
The IG uses specific terminology to flag statements that have relevance for the evaluation of conformance with this specification:

* **SHALL** indicates requirements that must be met to be conformant with the specification.

* **SHOULD** indicates behaviors that are strongly recommended (and which may result in interoperability issues or sub-optimal behavior if not adhered to), but which do not, for this version of the specification, affect the determination of specification conformance.

* **MAY** describes optional behaviors that are free to consider but where the is no recommendation for or against adoption.


#### Claiming Conformance 

Actors and Systems asserting conformance to this implementation guide must implement the requirements outlined in the corresponding capability statements. 

**NOTE**: This MedMorph RA IG is a framework IG and hence actors and systems will claim conformance to this MedMorph IG in combination with Content IGs. The Content IGs specify detailed requirements including portions of this IG that will be used for the specific use case implementation. However for Knowledge Artifact Repository, TTP and Trust Service Provider actors Content IGs MAY reuse the corresponding MedMorph RA IG capability statements completely.   

The following definition of MUST SUPPORT is to be used in the implementation of the requirements.

##### MUST SUPPORT Definition

* Systems SHALL be capable of populating data elements as specified by the profiles and data elements are returned using the specified APIs in the capability statement.
* Systems SHALL be capable of processing resource instances containing the MUST SUPPORT data elements without generating an error or causing the application to fail. 
* Systems SHOULD be capable of displaying the MUST SUPPORT data elements for human use or storing it for other purposes.
* In situations where information on a particular data element is not present and the reason for absence is unknown, Systems SHALL NOT include the data elements in the resource instance returned from executing the API requests.
* When accessing MedMorph data, Systems SHALL interpret missing data elements within resource instances returned from API requests as data not present.


#### Profiles
This specification makes use of [FHIR profiles]({{site.data.fhir.path}}profiling.html), search parameter definitions, and terminology artifacts to describe the content to be shared as part of MedMorph workflows. The IG is based on [FHIR R4]({{site.data.fhir.path}}) and profiles are used as part of each interaction.

The full set of profiles defined in this IG can be found on the [FHIR Artifacts](artifacts.html) page.


#### Authentication and Authorization Requirements

This section outlines how the SMART on FHIR Backend Services Authorization will be used by the MedMorph RA IG. The requirements in this section is applicable to Data Source, Knowledge Artifact Repository, Health Data Exchange App (HDEA), Trusted Third Party (TTP), and Data Receiver actors. These actors will be designated as MedMorph System Actors in this section.

* MedMorph System Actors **SHOULD** advertise conformance to SMART Backend Services Authorization IG by hosting a Well-Known Uniform Resource Identifiers (URIs) as defined in the [SMART on FHIR - Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html) specification.

* When conforming to the SMART Backend Services Authorization IG, MedMorph System Actors **SHALL** include token_endpoint, scopes_supported, token_endpoint_auth_methods_supported and token_endpoint_auth_signing_alg_values_supported as defined in the [SMART on FHIR - Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html) specification.

* When MedMorph System Actors act as clients, they **SHOULD** share their JSON Web Key Set (JWKS) with the server System Actors using Uniform Resource Locators (URLs) as defined in the [SMART on FHIR - Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html) specification.

* All MedMorph System Actors **SHOULD** support the system/*.read scope to facilitate the MedMorph RA IG workflows.

* Client System Actors **SHALL** obtain the access token as defined in the [SMART on FHIR - Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html) specification.

* Server System Actors **SHALL** process and validate incoming requests for resources as defined in the [SMART on FHIR - Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html) specification.

* Content IGs SHALL specify granular scopes required for authorization based on use case requirements using [SMART on FHIR - Backend Services]({{site.data.fhir.smartapplaunch}}/backend-services.html).


#### MedMorph Actors, Requirements and Capability Statements

This MedMorph RA IG defines common requirements and generalized capability statements using the MedMorph workflows. Implementers are advised to review the requirements below along with content IG requirements before implementing the corresponding actor.

**NOTE**: Content IGs **SHALL** define conformance requirements applicable to each actor based on the use case and **SHOULD** reuse the MedMorph RA IG common requirements from below.     


<table>
  <thead>
    <tr>
      <th> Actor Name</th>
      <th> Requirements for MedMorph Workflow</th>
      <th> Capability Statement</th>
    </tr>
  </thead>
  <tr>
    <td>Knowledge Artifact Repository</td>
    <td><a href="provisioning.html">Provisioning</a></td>
    <td><a href="CapabilityStatement-medmorph-knowledge-artifact-repository.html">Knowledge Artifact Repository Capability Statement Example</a></td>
  </tr>
  <tr>
    <td/>
    <td/>
    <td/>
  </tr>
  <tr>
    <td>Health Data Exchange App (HDEA)</td>
    <td>
    	   <a href="provisioning.html">Provisioning Workflow</a> <br/>
    	   <a href="subscription.html">Notifications</a> <br/>
    	   <a href="trustservices.html">Report Creation</a> <br/>
    	   <a href="reportsubmission.html">Data Submission and Response Receiving</a> <br/>
    	</td>
    <td><a href="CapabilityStatement-medmorph-healthdata-exchange-app-client.html">HDEA Capability Statement Example</a></td>
  </tr>
  <tr>
    <td/>
    <td/>
    <td/>
  </tr>
  <tr>
    <td>Data Source</td>
    <td><a href="subscription.html">Notifications</a></td>
    <td><a href="CapabilityStatement-medmorph-data-source.html">Data Source Capability Statement Example</a></td>
  </tr>
  <tr>
    <td/>
    <td/>
    <td/>
  </tr>
  <tr>
    <td>Trust Service Provider</td>
    <td><a href="trustservices.html">Report Creation</a></td>
    <td><a href="CapabilityStatement-medmorph-trust-service-provider.html">Trust Service Provider Capability Statement Example</a></td>
  </tr>
  <tr>
    <td/>
    <td/>
    <td/>
  </tr>
  <tr>
    <td>Trusted Third Party</td>
    <td><a href="reportsubmission.html">Data Submission and Response Receiving</a></td>
    <td><a href="CapabilityStatement-medmorph-trusted-third-party.html">Trusted Third Party Capability Statement Example</a></td>
  </tr>
  <tr>
    <td/>
    <td/>
    <td/>
  </tr>
  <tr>
    <td>Data Receiver - PHA/RO</td>    
    <td>
       <a href="provisioning.html">Provisioning</a> <br/>
       <a href="reportsubmission.html">Data Submission and Response Receiving</a>
    </td>
    <td><a href="CapabilityStatement-medmorph-data-receiver.html">Data Receiver Capability Statement Example</a></td>
  </tr>
  <tr>
    <td/>
    <td/>
    <td/>
  </tr>
</table>







---

// File: input/pagecontent/StructureDefinition-us-ph-content-bundle-intro.md

### Introduction

This profile is used to represent the clinical content in the US PH Reporting Bundle that contains public health/research reporting data. The Bundle is of type 'collection' and will contain entries of resources. When data is to be encrypted, this entire bundle would be encrypted as it contains the content.

**Content Bundle Structure**

The Content Bundle contains all the resources related to the Patient.

See the [Content Bundle Example](Bundle-content-bundle-example.json.html)

**Implementation Requirements**

Implementers are advised to read [Report Submission Requirements](reportsubmission.html) to implement the Bundle profiles.


---

// File: input/pagecontent/StructureDefinition-us-ph-plandefinition-intro.md

### Introduction

This profile is used to represent Knowledge Artifacts in the MedMorph Reference Architecture IG. For a detailed overview of Knowledge Artifacts and how they are used, please refer to [Provisioning Requirements](provisioning.html).


**Implementation Requirements**

Implementers are advised to read [Provisioning Requirements](provisioning.html) to implement the PlanDefinition profile.


**API : Creation of PlanDefinition Resource Instance:**

The PlanDefinition instance is created using the regular POST API. The syntax is as shown below.

```
POST http://<FHIR Server URL>/PlanDefinition

The body of the request will contain the JSON data of PlanDefinition to be used in creation.
```

**API : Updation of PlanDefinition Resource Instance:**

The PlanDefinition instance is updated using the regular PUT API. The syntax is as shown below.

```
POST http://<FHIR Server URL>/PlanDefinition/[Instance Id]

The body of the request will contain the JSON data of PlanDefinition to be used for updating the instance. The id of the PlanDefinition body should match the [Instance Id] in the request.
```

**API : Retrieval of PlanDefinition Resource Instance:**

The PlanDefinition instance is retrieved using the regular GET API. The syntax is as shown below.

```
GET http://<FHIR Server URL>/PlanDefinition/[Instance Id]

The instance corresponding to the [Instance Id] is returned.
```

**API : Search of PlanDefinition Resource Instance:**

The PlanDefinition instance can be searched using the regular GET API. The syntax for various searches are as shown below.

```
GET http://<FHIR Server URL>/PlanDefinition/?publisher=[publisher name]

GET http://<FHIR Server URL>/PlanDefinition/?name=[name of plan definition instance]

GET http://<FHIR Server URL>/PlanDefinition/?title=[title of plan definition instance ]

GET http://<FHIR Server URL>/PlanDefinition/?name=[name of plan definition instance ]&version=[version number]

The search results are returned back in a bundle.
```


---

// File: input/pagecontent/StructureDefinition-us-ph-reporting-bundle-intro.md

### Introduction

This profile is used to represent messages that contain public health/research reporting data. The Bundle is of type 'message' and the first entry is always the MessageHeader resource. The entry following that is a nested content bundle that will contain all the resources that need to be submitted. When data is to be encrypted, the Content Bundle is encrypted; however, the outer Bundle and the MessageHeader are not encrypted.

**Reporting Bundle Structure**

The Reporting Bundle SHALL always contain the first entry as the MessageHeader resource.
The focus of the MessageHeader (MessageHeader.focus) is the Content Bundle.
The Content Bundle contains all the resources related to the Patient.

See the [Reporting Bundle Example](Bundle-reporting-bundle-example.json.html)


**Implementation Requirements**

Implementers are advised to read [Report Submission Requirements](reportsubmission.html) to implement the Bundle profile.


**API : Bundle Submission:**

The bundles are submitted using the POST API and invoking the $process-message operation. The syntax is as shown below.

```
POST http://<FHIR Server URL>/$process-message

The body of the request will contain the JSON data of the US PH Reporting Bundle.
```


---

// File: input/pagecontent/StructureDefinition-us-ph-response-bundle-intro.md

### Introduction

This profile is used to represent messages that contain public health/research response data. The Bundle is of type 'message' and the first entry is always the MessageHeader resource. The entry following that is either a Content Bundle or a Document Reference resource.

**Reporting Bundle Structure**

The Response Bundle SHALL always contain the first entry as the MessageHeader resource.
The focus of the MessageHeader (MessageHeader.focus) is either the Content Bundle or the DocumentReference resource.

See the [Response Bundle Example](Bundle-response-bundle-example.json.html)

Implementers are advised to use the DocumentReference resource, if they want to attach a PDF or CDA document that needs to be displayed to the Provider. On the other hand, if the response is just a set of resources, then a Content Bundle can be used. If the Data Receivers want to convey validation errors and other important messages, then using a Content Bundle is appropriate with an OperationOutcome resource that has all the errors.


**Implementation Requirements**

Implementers are advised to read [Report Submission Requirements](reportsubmission.html) to implement the Bundle profile.


**API : Bundle Submission:**

The bundles are submitted using the POST API and invoking the $process-message operation. The syntax is as shown below.

```
POST http://<FHIR Server URL>/$process-message

The body of the request will contain the JSON data of the US PH Response Bundle.
```



---

// File: input/pagecontent/StructureDefinition-us-ph-specification-bundle-intro.md

### Introduction

This profile is used to represent the Knowledge Artifact. Each Bundle will contain the relevant resources to define the workflows, trigger codes etc. The bundle is of type collection.

**Specification Bundle Structure**

The Specification Bundle SHALL always contain a PlanDefinition entry.
The Specification Bundle SHOULD contain all the relevant ValueSet resources.

See the [Specification Bundle Example](Bundle-specification-bundle-example.json.html)


**Implementation Requirements**

Implementers are advised to read [Provisioning Requirements](provisioning.html) to implement the Knowledge Artifacts. 
Also refer to the [Plan Definition profile](StructureDefinition-us-ph-plandefinition.html) for accessing Specification Bundles via PlanDefinition APIs.


**API : Knowledge Artifact Retrieval:**

The bundles are retrieved using the GET API on the PlanDefinition resource using $get-kar operation. The syntax is as shown below.

```
GET http://<FHIR Server URL>/PlanDefinition/[id]/$get-kar

The response of the request will be the Knowlege Artifact returned via a Specification Bundle.
```



---

// File: input/pagecontent/subscription.md

This section defines the specific requirements related to Subscriptions and Notifications as specified in this MedMorph Reference Architecture (RA) Implementation Guide (IG). The specification focuses on the creation of SubscriptionTopics in the Data Source (e.g., an EHR), subscriptions to the topics by the Health Data Exchange app (HDEA), MedMorph’s backend services app, and notifications from the Data Source to the HDEA.

### Use of Subscription Topics

The MedMorph RA IG intended to use SubscriptionTopics as a mechanism by which Data Sources (e.g EHRs) would generate notifications to trigger processes within a HDEA. Based on the notifications, the HDEA will initiate the reporting workflows based on PlanDefinition resources. 

### Usage of FHIR Subscriptions Backport IG to implement Subscriptions

The MedMorph RA IG intended to leverage the Subscriptions Backport IG to implement Subscriptions and associated notifications. The following are the Subscription Topic URLs that need to be used in the creation of the Subscription. 

#### SubsciptionTopics (Notification Events) and Canonical Urls

This section identifies a list of all the named events that could be used by the Content IGs for notifications and a proposed list of Canonical URLs for each event. These URLs can be used to create Subscriptions in the future and can be used to identify the type of event. The list of the topics are based on the [Named Event Valueset](ValueSet-us-ph-triggerdefinition-namedevent.html) value set.


|Notification/Named Event/Subscription Topic	| Canonical Url 	| ResourceId/ResourceType expected as part of notification	|
| :---										| :---			| :--- 														|
| encounter-start							|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/encounter-start|Encounter|
| encounter-end								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/encounter-end|Encounter|
| encounter-modified							|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/encounter-modified|Encounter|
| new-diagnosis								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/new-diagnosis|Condition|
| modified-diagnosis							|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/modified-diagnosis|Condition|
| new-medication								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/new-medication|MedicationRequest|
| modified-medication								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/modified-medication|MedicationRequest|
| new-labresult								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/new-labresult|Observation|
| modified-labresult								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/modified-labresult|Observation|
| new-order								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/new-order|ServiceRequest|
| modified-order								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/modified-order|ServiceRequest|
| new-procedure								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/new-procedure|Procedure|
| modified-procedure							|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/modified-procedure|Procedure|
| new-immunization								|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/new-immunization|Immunization|
| modified-immunization							|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/modified-immunization|Immunization|
| demographic-change							|http://hl7.org/fhir/us/medmorph/SubscriptionTopic/demographic-change|Patient|
   
The following are examples of Subscriptions for encounter-start and encounter-end named events.

* [encounter-start Subscription](Subscription-encounter-start-subscription-example.html)

* [encounter-end Subscription](Subscription-encounter-end-subscription-example.html)


#### HDEA Requirements for Subscription Creation

* When interacting with Data Sources that support Subscriptions, the HDEA SHOULD create a Subscription resource for each named event identified in the Knowledge Artifact being processed. 

* The HDEA SHALL represent the Canonical URLs from the above table as part of the Subscription.criteria element.

* HDEA SHALL implement a rest-hook channel to receive notifications from Data Sources.

* HDEA SHALL start the reporting workflow processing using Knowledge Artifact instances which contain the named event identified by the Subscription.criteria URL.     

* HDEA SHALL update the Subscriptions and turn them off, when the Knowledge Artifact is not being processed. 

#### Data Source Requirements for Subscriptions

* Data Sources SHOULD support Subscriptions for encounter-start and encounter-end named events.

* Data Sources MAY support Subscriptions for each of the named event identified above. 

* Each MedMorph content IG SHALL identify the specific named-event required to be supported by the Data Source for the use case.

* Data Sources SHOULD support the channel of type rest-hook to notify the subscribers of changes.

* Data Sources SHOULD support a notification payload type of id-only where the id of the changed resource is included.

* Data Sources MAY include in the notification the resources changed along with context information. 

* Data Sources SHOULD consider including context information such as the patient and the encounter resources as part of the notification.


### Implementing Notifications without using FHIR Subscriptions 

There are situations where the Data Sources have not implemented the Subscriptions capability. To enable implementation of MedMorph use cases in these situations, the MedMorph RA prescribes a RESTful API to enable the necessary notifications. 
The HDEA should support a RESTful API which can be invoked by a Data Source for notification. The RESTful API interaction which is similar to the ```rest-hook``` in Subscriptions IG is described below:

```
POST [HDEA APP URL]/receive-notification
	patientId
	resourceId
	resourceType
	topicUrl
```

The API is a POST interaction which takes the following parameters as part of the POST body:


* patientId -  the Id of the Patient FHIR resource whose data is changed
* resourceId - the exact resource which was changed (for e.g, Condition resource Id if a new condition was added or an existing condition was changed)
* resourceType - the FHIR ResourceType identifying for the resourceId provided
* topicUrl - the canonical URL for the various Subscription topics, that helps the HDEA to identify the specific type of notification. 

The above API is a recommendation and implementers of HDEA and Data Source actors can agree upon a variation of the above interface for notification, including implementing Subscription notification mechanisms identified in the Subscriptions IG.  



---

// File: input/pagecontent/trustservices.md

This section defines the specific requirements for a Trust Service Provider as specified in this MedMorph Reference Architecture (RA) Implementation Guide (IG). In order to better understand the trust services, readers can refer to the following documentation.

* [HHS Guidance on De-Identification](https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html)

* [IHE IT Infrastructure Handbook on De-Identification](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Handbook_De-Identification_Rev1.1_2014-06-06.pdf). This includes literature on de-identification, pseudonymization and re-linking.

* [National Institute of Standards and Technology (NIST), Secure Hashing website](https://csrc.nist.gov/projects/hash-functions)

* [NIST Documentation on de-identify and re-identify](https://nvlpubs.nist.gov/nistpubs/ir/2015/nist.ir.8053.pdf)

* [Additional information on trust services from CDC](https://www.cdc.gov/nchs/data/series/sr_02/sr02_143.pdf).

### Trust Service Provider Requirements

A Trust Service Provider enables trust services such as anonymization, de-identification, re-identification, hashing, and pseudonymization. These services are used when required (e.g., to de-identify data sent to research organizations).

The next section identifies specific requirements for a Trust Service Provider:

* Trust Service Provider SHALL support the APIs defined by the [Trust Service Provider Capability Statement](CapabilityStatement-medmorph-trust-service-provider.html).

* Trust Service Providers SHALL allow re-identification of bundles that were previously de-identified.

* Trust Service Providers SHOULD implement  algorithms specified by the content IGs for the different use cases. Trust Service Provider MAY  choose their own anonymization, de-identification, re-identification, hashing and pseudonymization algorithms in case none are specified in the content IGs.

* Trust Service Providers MAY ignore extensions on data elements when they are not understood by the Trust Service Provider. 

* Content IGs will identify specific data elements within resources that need to be processed by Trust Services based on the use case.




---

// File: input/pagecontent/usecases.md

### Business Need

The following section identifies the business need for each of the initial representative MedMorph use cases:

* For Health Care Surveys: Identify and collect hospital (emergency department and inpatient care) and ambulatory care practice data and electronically report these data to a system hosted at the CDC. Electronic reporting should increase the response rate of sampled hospitals and ambulatory health care providers to the National Hospital Care Survey (NHCS) and the National Ambulatory Medical Care Survey (NAMCS). This should also increase the volume, quality, completeness, and timeliness of the data submitted to the NHCS and NAMCS. Automated electronic reporting (without provider involvement) should reduce the burden associated with survey participation and reduce costs associated with recruiting hospital and ambulatory health care providers. Detailed use case, workflows and actors related to the Health Care Surveys use case are documented in the <a href="http://hl7.org/fhir/us/health-care-surveys-reporting/2022Jan/usecases.html">Health Care Survey Reporting IG</a>.

* For Hepatitis C: Leverage existing FHIR infrastructure for Electronic Case Reporting (eCR) to improve the availability of data that advance national priorities such as eliminating hepatitis C as a public threat in the US, especially if it becomes a chronic condition when not treated. The goal is to optimize access to hepatitis C data already captured within the Data Source. Detailed use case, workflows and actors related to the use case reportable conditions such as Hepatitis C is documented in the <a href="http://hl7.org/fhir/us/ecr/STU2/electronic_initial_case_report_eicr_transaction_and_profiles.html">eCR FHIR IG</a>. 

* For Cancer Registry Reporting: Leverage existing FHIR infrastructure to transmit cancer case information primarily from ambulatory care practices to state cancer registries. The intent is to automate and provide access to data not currently available, or available through non-standard or manual methods, to public health and research. Automation of cancer case registry reporting should reduce the burden of manual or other non-standardized data collection processes that currently exist. The MedMorph cancer registry reporting use case will not replace hospital cancer registry data collection and reporting methods, which are working well. Hospital-based cancer registries use Certified Tumor Registrars (CTRs) to abstract data and maintain information on cancers diagnosed and/or treated in their hospitals. Hospital cancer registries and CTRs follow standardized rules and data collection methods for the purpose of cancer analysis and research – a national standard format and process since 1995. Alternatively, EHR data are primarily used for clinical care and routinely require manipulation and translation to meet the needs of the state cancer registry. The MedMorph cancer registry reporting use case is intended to be used primarily by non-hospital providers (e.g., physician offices, oncology clinics, radiation therapy centers) and by hospitals without cancer registries. Detailed use case, workflows and actors related to the central cancer registry reporting use case is documented in the <a href="http://hl7.org/fhir/us/central-cancer-registry-reporting/2022Jan/usecases.html">Central Cancer Registry Reporting FHIR IG</a>.

* For Research: Onboard a new research data partner to a research network and contribute data for research. Current processes involve many non-standardized mechanisms. Additionally, each data partner contributing data may use different formats and semantics. For the data to be usable, the data must be transformed to a data model so that it can be queried and analyzed. This process, when standardized, should expedite on-boarding processes and deliver better quality data at a lower cost. Detailed use case, workflows and actors related to the research data exchange use case is documented in the <a href="http://hl7.org/fhir/us/medmorph-research-dex/2022Jan/usecases.html">Research Data Exchange IG</a>.

By leveraging FHIR-based APIs, research and public health organizations can automate data collection based on specific events and conditions in clinical workflows and submission of the collected data, complying with all necessary authorities and policies applicable.


### MedMorph Actors and Definitions

This section defines the Actors and Systems that interact within the MedMorph Reference Architecture to realize the capabilities of the use cases listed above.

1. __Data Source (e.g., Electronic Health Record (EHR), Health Information Exchange (HIE), Data Warehouse)__:  Any system that is used in a health care organization to capture, store patient data and make the data available securely with authorized users. The most widely used Data Source is the EHR system, however other systems such as data warehouses, HIE, or registries can also serve as Data Sources. In the MedMorph RA, FHIR APIs will be used to extract data from the data source, process, package the data as needed, and then submit the data to the Data Receiver (e.g., Public Health Agency (PHA) or Research Organization (RO)).


2. __Provider__:  A person who delivers health care to a patient. In addition to delivering care, the provider also updates patient data and signs off on the content added, deleted, or modified in the patient record once it is updated. The provider can be the individual doctor, nurse, or a combination of different people that are part of the care team.

3. __Knowledge Artifact Repository__:  Enables the full spectrum of reporting and querying for programs, studies, and initiatives by distributing metadata such as surveys, trigger codes, timing constraints, decision support artifacts, and other knowledge artifacts to:

	* Identify that the criteria necessary to trigger reporting have been met (e.g., triggering a report for a patient case or for bulk data transfer)
	* Identify the timing parameters for the reporting (e.g., immediate, batched at the end of the day/week/month/quarter/etc.)
	* Identify the data that needs to be collected for reporting 
	* Identify the structure of the report
	* Identify decision support rules for reporting
	**NOTE:** Knowledge artifacts may contain Protected Health Information (PHI) or Personally Identifiable Information (PII) information.

	An example of a Knowledge Artifact Repository is the Association of Public Health Laboratories (APHL) Informatics Messaging Services (AIMS) Platform. The [AIMS Platform](https://www.aphl.org/programs/informatics/Pages/aims_platform.aspx) hosts the Electronic Reporting and Surveillance  Distribution (eRSD) Knowledge Artifact used for the eCR program.

4. __Health Data Exchange App (HDEA)__:  A system that resides within the clinical care setting and performs the reporting functions to public health and/or research registries. The HDEA, MedMorph’s backend services app, uses the information supplied by the knowledge artifact repository along with applicable authorities and policies to determine when reporting needs to be done, what data needs to be reported, how the data needs to be reported, and where the data should be reported. The term “backend service” is used to refer to the fact that the system does not require user intervention to perform reporting. The term “app” is used to indicate that it is like a SMART on FHIR App which can be distributed to clinical care via Data Source (e.g., EHR) vendor-specified processes. The Data Source vendor-specified processes enable the HDEA the ability to use the Data Source's FHIR APIs to access data. The health care organization is responsible for implementing and maintaining the HDEA within the organization.

	**NOTE**: The HDEA functionality can be implemented by EHRs themselves.

5. __Trust Service Provider__:  Trust Service Provider affords capabilities that can be used to pseudonymize, anonymize, de-identify, hash, or re-link data that is submitted to public health and/or research organizations. These capabilities are called Trust Services. Trust Services are used, when appropriate, by the HDEA.  

6. __Trusted Third Party (TTP)__: A system at an intermediary organization that serves as a conduit to exchange data between health care organizations and a data receiving organization and may perform other intermediary functions (e.g., apply additional business logic) using appropriate authorities and policies. Examples of TTP include Health Information Exchange (HIE), Reportable Condition Knowledge Management System (RCKMS)/Association of Public Health Laboratories (APHL) Informatics Messaging Services (AIMS) Platform). For example, in the eCR use case RCKMS on the AIMS platform is playing a critical compliance role to confirm reportability (i.e., the Reportability Response) in accordance with state laws.

7. __Data Receiver (e.g., PHA, RO)__: A system that receives and stores the data. A PHA is a government or government-designated organization allowed to receive the data from provider organizations or TTPs using appropriate authorities and policies. PHA may also analyze the data and initiate responses back to health care organizations. For more detailed information on how the Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule applies to Public Health, please refer to [HIPAA Rules](https://www.hhs.gov/hipaa/for-professionals/special-topics/public-health/index.html). A RO is an organization that can access the data from clinical care or data marts for research purposes with appropriate data use agreements, authorities, and policies

8. __Data Mart also known as Data Repository__: A system receiving the data from the clinical care system. A Data Mart / Data Repository is used to represent systems such as cancer registries, National Health Care Survey data stores, surveillance systems, electronic vital records systems, or research databases. Data Marts are actively managed and are used to receive data, store data, and perform analysis as appropriate. These data marts can be operated or accessed with appropriate authorities and policies (e.g., by a PHA or their designated organizations such as trusted third parties, health care organizations, research organizations)

	A **Local Data Mart** is hosted by the health care organization itself and may be used to support research use cases, reporting use cases, and other analytic capabilities.
	
	A **TTP Hosted Data Mart** is hosted by a TTP on behalf of a Data Receiver using appropriate authorities and policies.
	
	**NOTE:** Data Marts can also be hosted by the Data Receiver themselves using the appropriate authorities and policies.
	
	
#### Interactions between MedMorph Actors and Systems

This section outlines the high-level interactions between the various MedMorph Actors and Systems defined above. These interactions are shown in the Figure 3.0 below along with the descriptions for each step.

 
 
 {% include img.html img="MedMorphActorsAndSystems.png" caption="Figure 3.0 - MedMorph Actors, Systems and their Interactions" %}


<br>
The descriptions for each step in the above diagram are described below:

* Step 1:  A Data Receiver (e.g., Public Health Agency (PHA) or a Research Organization (RO)) creates a Knowledge Artifact and makes it available via the Knowledge Artifact Repository (KAR).

	Step 1a:  KAR systems that support notifications, will notify the Data Sources which are subscribed to Knowledge Artifact changes. 
	
	Step 1b:  KAR systems that support notifications, will notify applications such as Health Data Exchange App (HDEA) which are subscribed to Knowledge Artifact changes. 
	
* Step 2:  Upon initialization or change notification, the Health Data Exchange App (HDEA) queries the Knowledge Artifact Repository to retrieve a specific Knowledge Artifact. 

	Step 2a:  HDEA receives the Knowledge Artifact as a response to the query in Step 2.

* Step 3:  HDEA processes the Knowledge Artifact and subscribes to specific events to establish proactive event notifications from a FHIR server. For example, the HDEA subscribes to the Data Source's FHIR Server so that it can be notified when specific events (as defined in the Knowledge Artifact) occur in clinical workflows. 

* Step 4:  Providers as part of their clinical workflows update data that get reflected in the data source and further lead to notifying the subscribers of specific events. 

NOTE: No additional data entry is required by the provider to enable MedMorph RA based reporting.

* Step 5:  Data Source notifies the HDEA based on subscriptions in Step 3.

* Step 6:  HDEA queries the Data Source for patient’s data.

	Step 6a:  HDEA receives the response from the Data Source with the patient’s data.

* Step 7:  HDEA assembles identifiable data for submission. When necessary HDEA uses the Trust Service Provider to de-identify, anonymize, pseudonymize or hash the data as needed.

	Step 7a:  HDEA receives the de-identified, anonymized, pseudonymized, or hashed data.

* Step 8:  The HDEA submits the data assembled as part Steps 7, 7a to a Local Data Mart or an external Data Mart which may be hosted by a Data Receiver directly.

	Step 8a:  In cases where the Data Receiver requires a TTP to receive data from a Data Source on behalf of them, the HDEA submits the assembled data to the TTP.
	
	Step 8b:  The TTP receives the assembled data from HDEA and forwards necessary data to the Data Receiver.

* Step 9:  In some use cases, the Data Receiver may send a response back to the Data Source based on the submitted data. In some use cases, (e.g Populating a Local Data Mart for research), an acknowledgement may be provided to the submitted data without an actual response. The response transaction may be synchronous (as part of Step 8/8a) or asynchronous (delivered later in response to step 8/8a).

	Step 9a:  The Data Receiver can require a TTP to act as intermediaries to submit reports to the Data Source on their behalf. For these scenarios, the Data Receiver submits a response to the TTP.
	
	Step 9b:  The TTP receives the submitted response from the Data Receiver and forwards the response to the HDEA which is part of the Data Source organization.

* Step 10:  The HDEA may store the responses locally or forward the response from the Data Receiver to the Data Source as appropriate. 

Note: The response may have to be re-identified in some scenarios using Trust Service Provider before it is written back to the Data Source.

The next few sections details the subsets of the above interactions for ease of understanding and documenting detailed interactions using applicable FHIR mechanisms. 


### MedMorph Workflows

The following section outlines each of the MedMorph workflows, actors, and their interactions based on [MedMorph Use Cases](usecases.html). 

#### Provisioning Workflow

The MedMorph RA starts with the Provisioning Workflow. The provisioning workflow includes creating knowledge artifacts, loading them into a Knowledge Artifact Repository, retrieving the knowledge artifacts to create topics or subscribe to changes in a Data Source. The Provisioning Workflow involves the activities whereby a Data Receiver (e.g., PHA or RO) publishes a Knowledge Artifact(s) specific to a use case. The published Knowledge Artifact(s) is then downloaded by the HDEA. HDEA may subscribe to notifications from the Data Source based on the information within the Knowledge Artifact. The actors and steps from the MedMorph RA that are involved in the Provisioning Workflow are shown in Figure 3.1 below


{% include img.html img="ProvisioningWorkflow.png" caption="Figure 3.1 - Provisioning Workflow" %}


<br>
The descriptions for each step in the above diagram are described below:

* Step P1:  Data Receiver (e.g., PHA/RO) or their authorized designee creates the necessary knowledge artifacts for different reporting/research scenarios and publishes the artifacts in the Knowledge Artifact Repository. These knowledge artifacts may include trigger codes, timing constraints, report definitions, surveys, value sets, etc.

* Step P2: The HDEA queries the Knowledge Artifact Repository for the appropriate artifact. 

Note: Step P2 could be a result of an out of band notification (e.g., email/sms) that something has changed, or it could be a response to a subscription notification.

* Step P3: The HDEA receives the knowledge artifact in response to the query in Step P2.

* Step P4: The HDEA subscribes to topics in the Data Source based on the metadata received in Step P3 for reporting.

<br>

#### Notification Workflow

The Notification Workflow involves the activities whereby a provider, as part of the care delivery process, updates a patient’s medical record within a Data Source. The Data Source, based on the changes to the medical record and existing subscriptions, will notify the HDEA of the changes in the medical record. The HDEA will perform actions such as querying the Data Source for additional data, scheduling a reporting job, or creating a report for submission based on the notification and the Knowledge Artifact information. The actors and steps involved in the workflow are shown in Figure 3.2 below.


{% include img.html img="NotificationWorkflow.png" caption="Figure 3.2 - Notification Workflow" %}

<br>
The descriptions for each step in the above diagram are described below:

* Step N1: The provider as part of the care delivery process updates the patient record within the Data Source. 

* Step N2: The Data Source will notify the HDEA about the changes in the patient record based on subscriptions.

* Step N3:  Upon receiving a notification, the HDEA queries the patient record from the Data Source using FHIR APIs to evaluate if reporting needs to be performed. (The queries executed in this step are only for evaluation purposes and not for creation of the payload for submission).

* Step N4: The HDEA receives the data from the Data Source based on the queries in Step N3.

* Step N5: Depending on reporting parameters and the data received from the Data Source in Step N4, the HDEA may perform internal processing such as setting up scheduled jobs for reporting at a later time or designating that there is nothing to report.


<br>

#### Report Creation Workflow

The Report Creation Workflow involves the activities whereby the HDEA collects the data necessary for creating the report to be submitted to the Data Receiver (e.g., PHA or RO). The HDEA may then perform additional activities such as using a Trust Service Provider for pseudonymization, anonymization, hashing, or de-identification based on the specific use case need defined in the knowledge artifact. Finally, the HDEA assembles the data in the required reporting format for submission. The actors and steps involved in the workflow are shown in Figure 3.3 below.

{% include img.html img="ReportCreationWorkflow.png" caption="Figure 3.3 - Report Creation Workflow" %}

<br>
The descriptions for each step in the above diagram are described below:

* Step D1: The data collection and submission report creation workflow is triggered for a specific patient based on the output of the Notification Workflow.

* Step D2: The HDEA queries the Data Source to retrieve the necessary data for the patient to create the submission report. 

* Step D3: The Data Source returns the data for the queries from step D2.

* Step D4: The HDEA processes the data returned from the Data Source, applying necessary filters and logic as appropriate.

* Step D5: The HDEA based on the type of submission will invoke the Trust Servce Provider to de-identify or pseudonymize, hash or anonymize the collected data before generating the report.

* Step D6: The Trust Service Provider returns after de-identifying or pseudonymizing, hashing or anonymizing the data based on the request in Step D5.

* Step D7: The HDEA creates the submission report from the data collected for submission.

NOTE: Steps D5 and D6 only occur if the information in the Knowledge Artifact (based on use case need) requires de-identifying, pseudonymizing, hashing, or anonymizing.


<br>

#### Data Submission Workflow

The Data Submission Workflow involves the activities whereby the HDEA packages and submits the data to the Data Receiver (e.g., PHA or RO). The data submission may occur through a TTP. The actors and steps involved in the workflow are shown in Figure 3.4 below.


{% include img.html img="DataSubmissionWorkflow.png" caption="Figure 3.4 - Data Submission Workflow" %}

<br>
The descriptions for each step in the above diagram are described below:

* Step S1: The data submission workflow starts after the report is generated by the Report Creation workflow and the report is validated.

* Step S2: The HDEA uses the FHIR APIs to submit the report to the Trusted Third Party or to the Data Receiver directly based on authorities and policies. 

* Step S3: When data is received by the Trusted Third Party, it forwards the data to the Data Receiver based on applicable requirements, authorities and policies.


<br>

#### Receiving Response/Acknowledgement Workflow

The Receiving Response/Acknowledgement Workflow involves the activities whereby the Data Receiver provides a response back to the Healthcare Organization. This workflow depicts the PUSH method (i.e., PUSH from Data Receiver to Healthcare Organization). The actors and steps involved in the workflow are shown in Figure 3.5 below.


{% include img.html img="ResponseWorkflowPush.png" caption="Figure 3.5 - Receiving Response/Acknowledgement Workflow" %}

<br>
The descriptions for each step in the above diagram are described below:

* Step R1: The Data Receiver analyzes the data received from the Data Submission workflow and crafts a response to be sent back to submitting Healthcare Organization.

* Step R2: The Data Receiver then submits the response or acknowledgement to the Healthcare Organization directly or via Trusted Third Party based on authorities and policies.

* Step R3: The Trusted Third Party routes the response or acknowledgement received from the Data Receiver to the Healthcare Organization.

* Step R4, R5: The HDEA receives the response or acknowledgement and re-identifies the data as needed.

* Step R6: The HDEA forwards the response or acknowledgement back to the Data Source.




<br>


### On-boarding a Healthcare Organization (or Data Partner) to Populate a Data Mart

Figure 3.7 below shows the research abstract model to on-board a data partner who can contribute data from their Data Source system to populate a Data Mart.

{% include img.html img="DataPartnerOnboarding.png" caption="Figure 3.7 - Populating a Data Mart from a Data Source" %}

<br>
The descriptions for each step in the above diagram are described below:

* Step S1: The HDEA initiates an extraction process to get data from a Data Source for one or more patients. 

* Step S2: The HDEA then uses the Trust Service provider to de-identify, anonymize, hash, or pseudonymize the data.

* Step S3: Once the data is transformed in step S2, the data will then be populated into the Data Mart. The transformation process is not part of the MedMorph scope.

<br>
As shown in Figure 3.6 above, the HDEA will extract data from a Data Source for one or more patients and use the Trust Service Provider to perform de-identifying, anonymizing etc. as needed and then populate the Data Mart. In Figure 3.6, the Data Mart exists within the Healthcare Organization. The Data Mart and the HDEA could reside outside the Healthcare Organization as shown in Figure 3.7 below.

{% include img.html img="OnboardingExternalDataPartner.png" caption="Figure 3.8 - Populating an Externally Hosted Data Mart from a Data Source" %}

<br>
The descriptions for each step in the above diagram are described below:
 
 * Step S1: The HDEA initiates an extraction process to get data from a Data Source for one or more patients. 

* Step S2: The HDEA uses the Trust Service provider to de-identify, anonymize, hash, or pseudonymize the data.

* Step S3: Once the data is transformed in Step S2, the data will then be populated into the Data Mart. The transformation process is not part of the MedMorph scope.

<br>


---

