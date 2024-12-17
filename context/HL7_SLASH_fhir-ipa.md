File: repos/HL7_SLASH_fhir-ipa/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration/                        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.ipa
canonical: http://hl7.org/fhir/uv/ipa
name: InternationalPatientAccess
title: International Patient Access
status: draft

publisher:
  name: HL7 International - Patient Care Work Group
  url: 'http://www.hl7.org/Special/committees/patientcare'
  email: patientcare@lists.HL7.org

jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"

copyright: >-
  Used by permission of HL7 International all rights reserved Creative Commons License
description: >-
  This IG  describes how an application acting on behalf of a patient can access information about the patient from an clinical records system using a FHIR based API. The clinical records system may be supporting a clinical care provider (e.g. a hospital, or a general practitioner), or a health data exchange, including a national health record system.
license: CC0-1.0
date: '2023-02-01'
version: 1.1.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.uv.smart-app-launch: 2.0.0

groups: #**** NEED TO LIST NEW PROFILES IN A GROUP OR THEY WON'T SHOW UP***
  GroupA:
    name: 'Profiles: Primary Resources'
    description: Content Definitions for primary resources
    resources:
      - StructureDefinition/ipa-immunization
      - StructureDefinition/ipa-allergyintolerance
      - StructureDefinition/ipa-medicationrequest
      - StructureDefinition/ipa-documentreference
      - StructureDefinition/ipa-observation
      - StructureDefinition/ipa-patient
      - StructureDefinition/ipa-medicationstatement
      - StructureDefinition/ipa-condition
      - StructureDefinition/ipa-problem-list-item
  GroupB:
    name: 'Profiles: Supporting Resources'
    description: Content Definitions for supporting resources
    resources:
      - StructureDefinition/ipa-practitionerrole
      - StructureDefinition/ipa-medication
      - StructureDefinition/ipa-practitioner

pages:
  index.md:
    title: International Patient Access
  conformance.md:
    title: Conforming to this Specification
  using-the-api.md:
    title: Using the API
    access.md:
      title: Gaining Access to a Patient Record
    fetching.md:
      title: Finding and Retrieving Patient Information
    synchronization.md:
      title: Synchronizing Patient Records
    internationalization.md:
      title: Internationalization Issues
  security.md:
    title: Security and Privacy
  downloads.md:
    title: Downloads
  change-log.md:
    title: Change Log
  ImplementationGuide-hl7.fhir.uv.ipa.md:
    title: IPA ImplementationGuide Resource

parameters: # see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
  path-resource:
    - input/resources
    - fsh-generated/resources
  path-pages:
    - input/pagecontent
    - input/intro-notes
    - fsh-generated/includes
  # path-expansion-params: '../../input/_resources/exp-params.json'  # for using US ed of SNOMED
  # active-tables: 'false'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'
  show-inherited-invariants: 'false'
  usage-stats-opt-out: 'true'
  excludexml: 'false'
  excludejsn: 'false'
  excludettl: 'true'
  excludemap: 'true'
  excludeexample: 'true'
  generate:
    - xml
    - json
  # version-comparison:
  #    - 1.0.0
  # suppressed-ids: '$examples'
  logging:
    - progress
    - tx
    - context
    - init

copyrightyear: '2022+'
# releaselabel: Ballot
releaselabel: STU1
# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided ig-data/input/includes/menu.xml file, delete the "menu" property below.     │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Conformance: conformance.html
  Using The API:
  #     Exchanging Clinical Data: exchanging-clinical-data.html
      # IPA Server Requirements: ipa-server.html
      Gaining Access to a Patient Record: access.html
      Finding and Retrieving Patient Information: fetching.html
      Synchronizing Patient Records: synchronization.html
      Internationalization Issues: internationalization.html
  Security and Privacy: security.html 
  Artifact Index:
      Artifacts Summary: artifacts.html
      Profiles: artifacts.html#1
      CapabilityStatements: artifacts.html#3
      Operations: artifacts.html#4
      # Value Sets: artifacts.html#4
      # Code Systems: artifacts.html#5
      Examples: artifacts.html#5

  Support: 
      FHIR: "{{site.data.fhir.path}}index.html"
      Downloads: downloads.html
      Change Log: change-log.html


---

// File: input/pagecontent/access.md

An application is authorized to access a patient record using the [SMART App Launch Protocol](http://hl7.org/fhir/smart-app-launch/)'s standalone launch sequence. See the required server and client SMART on FHIR capabilities on the [security page](security.html). The use of SMART on FHIR is described below.

### Client Process

A client application gets access to a patient record by following this general sequence of steps:



* Register itself as a client application with the endpoint. 
  * This may require a manual step on the part of the user or the developer, or the endpoint may support automatic registration (see [OAuth 2.0 Dynamic Client Registration Protocol](https://tools.ietf.org/html/rfc7591)). 
  * if the application supports automatic registration, the `[url]/.well-known/smart-configuration` will specify the endpoint.
  * Note that most healthcare systems exercise control over which clients can access healthcare records, and automatic registration is not supported.


* Identifying the appropriate endpoint (url) for the IPA-compatible API.
  * Note that this specification does not specify how to find the endpoint; different countries will have different arrangements. 

* Fetch the system capability statement from [url]/metadata and check that [it implements the IPA API](conformance.html)

* Fetch the [endpoint configuration](https://hl7.org/fhir/smart-app-launch/conformance.html#using-well-known) from `[url]/.well-known/smart-configuration`. 

* Follow the [Smart App Launch Protocol](http://www.hl7.org/fhir/smart-app-launch/app-launch.html#step-2-launch-standalone) using the authorization endpoint from the smart-configuration file and request the `launch/patient` scope. 

* At the end of the SMART App Launch Protocol, the application will have a token that provides access to a single patient record. Now, use that to [retrieve patient information](fetching.html).

### Scopes


Scopes work as described in the SMART on FHIR specification. Servers **MAY** limit clients' scopes to those configured at registration time. Servers **SHOULD** allow users to select a subset of the requested scopes at the approval time. The app **SHOULD** inspect the returned scopes and accommodate the differences from the scopes it requested and registered.


### SMART on FHIR Obligations and Capabilities:

IPA conformant servers and clients SHALL support:

 - the resources as profiled by IPA to represent clinical information (Profile Support) and [the RESTful FHIR API]({{site.data.fhir.path}}http.html) interactions defined for it (Interaction Support)
 - the SMART on FHIR obligations and capabilities

This section documents the SMART on FHIR obligations and capabilities. The [Conformance](conformance.html) page documents the support for IPA Profiles and their FHIR interactions.

#### SMART on FHIR Server Obligations
 
* The server hosts a [smart-configuration file](http://www.hl7.org/fhir/smart-app-launch/conformance.html#using-well-known) at `[url]/.well-known/smart-configuration` that is available to both authenticated and unauthenticated clients.
* Specific obligations for server support of SMART on FHIR capabilities are defined below. They include the server hosting a smart-configuration file at `[url]/.well-known/smart-configuration` that is available to both authenticated and unauthenticated clients.




#### SMART on FHIR Server Capabilities

Servers SHALL support the following [SMART on FHIR capabilities](http://hl7.org/fhir/smart-app-launch/conformance.html#capabilities):

 * [launch-standalone]
 * [context-standalone-patient]
 * [permission-patient]
 * [permission-offline]
 * [sso-openid-connect]
 * [client-public]
 * [client-confidential-asymmetric]


 Servers MAY support the other SMART on FHIR capabilities, such as:
 * [launch-ehr]
 * [context-ehr-patient]
 * [permission-user]
 * [client-confidential-symmetric]

#### SMART on FHIR Client Capabilities

Client apps will need to support a subset of the SMART on FHIR server capabilities to function:

- SHALL support [launch-standalone] or [launch-ehr] or both.
-  SHOULD support [launch-standalone] and MAY support [launch-ehr].
- Patient-facing apps SHALL support [context-standalone-patient] and SHOULD support [permission-patient].
- Apps with the technical capability to keep a secret SHALL support [client-confidential-asymmetric] and MAY support [permission-offline].
- Apps without the technical capability to keep a secret SHALL support [client-public] and SHALL NOT support [client-confidential-asymmetric].



#### SMART on FHIR Server Process

The steps described below are typically performed when a server grants access to a client: 
* The server conforms to the SMART App Launch specification and checks that the authenticated user of the application has access.
*  If the client requests access to a patient record, the server checks that the authenticated user of the application has access to the specified record.
*  If the authenticated user is authorized to access multiple patient records, the server typically requires that the user choose a single patient record to share. (A patient often has access to multiple records in the case of a parent or family caregiver).
*  The server ensures that the authenticated user has access to the record.
*  The server returns a Patient FHIR resource identifier as the patient SMART launch context parameter when authorization is granted and includes any patient/ scopes defined by the SMART App Launch Protocol.

[launch-standalone]: http://hl7.org/fhir/smart-app-launch/conformance.html#launch-modes
[context-standalone-patient]: http://hl7.org/fhir/smart-app-launch/conformance.html#launch-context-for-standalone-launch
[permission-patient]: http://hl7.org/fhir/smart-app-launch/conformance.html#permissions
[permission-offline]: http://hl7.org/fhir/smart-app-launch/conformance.html#permissions
[sso-openid-connect]: http://hl7.org/fhir/smart-app-launch/conformance.html#single-sign-on
[client-public]: http://hl7.org/fhir/smart-app-launch/conformance.html#client-types
[client-confidential-asymmetric]: http://hl7.org/fhir/smart-app-launch/conformance.html#client-types
[launch-ehr]: http://hl7.org/fhir/smart-app-launch/conformance.html#launch-modes
[context-ehr-patient]: http://hl7.org/fhir/smart-app-launch/conformance.html#launch-context-for-ehr-launch
[permission-user]: http://hl7.org/fhir/smart-app-launch/conformance.html#permissions
[client-confidential-symmetric]: http://hl7.org/fhir/smart-app-launch/conformance.html#client-types


---

// File: input/pagecontent/ActorDefinition-client-intro.md

### IPA Client

The IPA client - also known as a requestor, is an application that initiates a data access request to retrieve patient data. It is the client in a client-server interaction. The terms “app”, “patient app”, "requestor" and “client” are used interchangeably throughout this guide and are not meant to limit this actor to patient and provider apps. Payers and other users can use the same technology. Consider these terms a short-hand notation for a “user application”.

---

// File: input/pagecontent/ActorDefinition-server-intro.md

### IPA Server

The IPA Server - also known as a responder, responds to the data access request providing patient data. It can be thought of as the server in a client-server interaction. The terms “server”, “IPA FHIR server”, and “EHR” are used interchangeably throughout this guide and are not meant to limit this actor to electronic health record systems. HIEs, care coordination platforms, population health systems, etc., can use the same technology. Consider these terms a short-hand notation for an “interoperable healthcare platform”.

---

// File: input/pagecontent/change-log.md

###  Release 1.0.1
- Expected Publication date: 2024-09-21
- Expected Publication status: STU
- Based on FHIR version: 4.0.1

This change log documents the changes from version 1.0.0 to 1.0.1. Primarily, release 1.0.1 adopts the HL7 FHIR Obligations framework as an enhancement to FHIR's Must Support concept as well as formally defining two actors: IPA Server and IPA Client.                                                

Adhering to release 1.0.0's narrative definition of Must Support, release 1.0.1 generally (although not exclusively) applied the SHALL populate-if-known obligation to the server for MS elements, and the SHALL handle obligation to the client. [More information about Must Support and Obligations is available in Conformance](conformance.html). Exceptions to this approach are noted below. A more complete, technical diff of changes is available [here](https://github.com/HL7/fhir-ipa/pull/110/files).

Additional, significant changes made in this update are documented, below -- 

#### Changes in this version
- Made the following changes to IPA AllergyIntolerance:
  - Clarified that AllergyIntolerance.category is not MustSupport by removing contradictory narrative. (https://jira.hl7.org/browse/FHIR-46746)
- Made the following changes to IPA DocumentReference:
  - Broadened permitted target references of DocumentReference.author to align with base FHIR R4. (https://jira.hl7.org/browse/FHIR-44562)
- Made the following changes to IPA Immunization:
  - Clarified that Immunization.statusReason is not MustSupport by removing contradictory narrative. (https://jira.hl7.org/browse/FHIR-46743)
- Made the following changes to IPA MedicationRequest:
  - Broadened permitted target references of MedicationRequest.requestor to align with base FHIR R4. (https://jira.hl7.org/browse/FHIR-44563)
- Made the following changes to IPA MedicationStatement:
  - Added a call to implementers for feedback on removing MustSupport from MedicationStatement.statusReason.
- MustSupport -> Obligation deviations
  - This release changes Patient.identifier's MustSupport Obligation to "SHALL: explain", which deviates from the previous default, narrative definition of MustSupport.
  - Removed the default MustSupport requirement for the Client actor from the following elements: AllergyUIntolerance.patient, Condition.category, Condition.subject, DocumentReference.date, MedicatioNRequest.intent, MedicationRequest.encounter, MedicationRequest.authoredOn, MedicationStatement.context, Patient.identifier.value, patient.active, patient.name, Practitioner.name, PractitionerRole.practitioner.
  - Changed the MedicationRequest.doNotPerform MustSupport requirement on the Server from the narrative definition of MustSupport which was equivalent to populate-if-known, to the stricter populate obligation.

 
### Release 1.0.0
- Publication date: 2023-03-26	
- Publication status: STU
- Based on FHIR version: 4.0.1

Release 1.0.0 was the first trial use publication of the HL7 IPA IG, towards a goal of helping patients access their data through universal realm FHIR APIs and SMART (OAuth 2.0) security mechanisms useable in any region in the world. IPA implementers are encouraged to re-use IPA profiles and support additional SMART App Launch capabilities, such as the “Clinician Access for EHR Launch” scenario or “Backend Services”.


---

// File: input/pagecontent/conformance.md


IPA conformant servers SHALL support:

 - the resources as profiled by IPA to represent clinical information (Profile Support) and [the RESTful FHIR API]({{site.data.fhir.path}}http.html) interactions defined for it (Interaction Support)
 - the SMART on FHIR obligations and capabilities

This page documents how CapabilityStatements declare conformance to the IPA Profiles and their FHIR Interactions. It also defines the expectations for mandatory and must-support elements. The [Gaining Access to a Patient Record](access.html) page documents the SMART on FHIR obligations and capabilities.

Note that the [FHIR Conformance Rules](http://hl7.org/fhir/conformance-rules.html) defines the conformance verbs - SHALL, SHOULD, MAY - used in this guide


### Conformance Artifacts
The [Artifacts](artifacts.html) page lists the IPA Profiles defined for this implementation guide. Core Profile [StructureDefinitions]({{site.data.fhir.path}}structuredefinition.html) defines the minimum elements, extensions, vocabularies, and value sets which SHALL be present when using the profile. Many Profile pages also contain additional guidance.

The Profile elements consist of both Mandatory and Must Support elements. Mandatory elements are elements with a minimum cardinality of 1 (min=1). The base [FHIR Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) guidance requires specifications to define the support expected for profile elements labeled Must Support. The sections below explain how these elements are displayed and define the rules for interpreting profile elements and sub-elements labeled Mandatory and Must Support for clients and servers.


#### Capability Statements 

The [International Patient Access Client CapabilityStatement](CapabilityStatement-ipa-client.html) outlines conformance requirements and expectations for the IPA Clients. {{site.data.resources['CapabilityStatement/ipa-client'].description }}

The [International Patient Access Server CapabilityStatement](CapabilityStatement-ipa-server.html) outlines conformance requirements and expectations for the IPA Clients {{site.data.resources.['CapabilityStatement/ipa-server'].description}}

Note that country-specific profiles must define terminology bindings and invariants. 


### Declaring Conformance

Servers that are conformant to the International Patient Access API declare conformance by:

* The server hosts a [capability statement](http://hl7.org/fhir/capabilitystatement.html) at [url]/metadata that is available to both authenticated and unauthenticated clients and that declares that IPA is supported using [CapabilityStatement.instantiates](http://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.instantiates), as shown in the following fragment:

    ```
    {
      "resourceType": "CapabilityStatement",
      ...
      "instantiates": [
        "http://hl7.org/fhir/uv/ipa/CapabilityStatement/ipa"
      ],
      ...  
      "rest": [
        {
          "mode": "server",
        ...
        }
      ] 
    }
    ```
Note that the CapabilityStatement may be different for authenticated and unauthenticated clients.




### Exchange Format Support

In FHIR, resources are exchanged in the following formats: JSON, XML, and Turtle. Due to the popularity of JavaScript-based apps and ease of usage with JSON, the most popular exchange format for REST-styled APIs is JSON. To increase certainty and the likelihood of interoperability, IPA mandates the support of JSON. IPA Servers are encouraged to support XML as well.


### Profile and Interaction Support
Systems deploy and support the IPA *profiles* to represent clinical information and the IPA RESTful *interactions* to access that information. Therefore, servers must implement and support IPA profiles and interactions to claim conformance to IPA.

#### Profile Support
Profile Support refers to the support of the IPA profiles, such that the system exposes FHIR resources that adhere to the IPA profiles' content model. Specifically, a server with IPA Profile Support:
* SHALL communicate all profile data elements that are mandatory by that profile's StructureDefinition. 
* SHALL declare conformance with the IPA Server Capability Statement by including its official URL in the server's `CapabilityStatement.instantiates` element: `http://hl7.org/fhir/uv/ipa/CapabilityStatement/ipa-server`
* SHALL specify the full capability details from the IPA CapabilityStatement it claims to implement, including declaring support for the IPA Profile by including its official URL in the server's `CapabilityStatement.rest.resource.supportedProfile` element

Note that each IPA Profile page contains that IPA Profile's official or "canonical" URL.

#### Interaction Support
Interaction Support refers to a system that supports the IPA RESTful interactions. Specifically, a server with IPA Interaction Support:
* SHALL implement the RESTful behavior according to the FHIR specification, including *read* and *search* behavior and required search parameters as defined in the [IPA CapabilityStatement](CapabilityStatement-ipa-server.html#resourcesSummary1).
* SHALL specify the full capability details from the IPA CapabilityStatement it claims to implement, including declaring support for the IPA Profile's FHIR RESTful transactions.

### Must Support and Obligations

In the context of IPA, [Obligations](https://hl7.org/fhir/extensions/CodeSystem-obligation.html) defines how an actor (Server or Client) must “support” a given element. All [MustSupport]({{site.data.fhir.path}}conformance-rules.html#mustSupport) elements in this publication are accompanied by an explicit obligation, which identifies structured expectations for a given actor. If an MustSupport element has no obligation for a given actor, that element need not be supported by that actor. Obligations can be found in the formal view section of a resource.

{% include img.html img="ipa-obligations-example.png" %}

Because IPA is a foundational standard -- consideration is given to implementation guides, their authors and implementors that inherit from IPA. Realm-specific implementation guides may apply additional obligations and/or provide additional guidance on the definition of MustSupport. However, they SHOULD identify and document these differences. Feedback to IPA is encouraged on the use of Obligations and generally how IPA can be more useful for local use-cases. 

When information on a particular data element is not present, and the reason for absence is unknown, IPA Servers SHALL NOT include the data elements in the resource instance returned as part of the query results. Conversely, IPA Clients SHALL be able to process resource instances containing data elements asserting missing information.

Must Support elements are treated differently between IPA serverss and clients. 

#### Obligations for Servers
[IPA Servers](ActorDefinition-server.html) conforming to a profile in IPA SHALL support the behavior defined in the Obligations section for the Server Actor under a given data element. Implementers may notice that the vast majority of IPA Obligations on Servers is SHALL:populate-if-known, which requires that servers populate an element if that element is available. There are a few potential reasons by a Must Support element may not be available, for example:
* Elements for a particular patient are not available. For example, a registration system may not have the technical capability to collect and store lab results and therefore is not expected to respond with lab results when queried.
* Elements are available, but the client is not authorized to access the data.
* Elements marked as Must Support in IPA may not have universal applicability from one country to the next. Due to localization appropriateness, national or regional FHIR specifications may re-use IPA profiles but not require support for a given Must-Support element. Elements may not be available if more local FHIR specifications based upon IPA remove support requirements.  

Note: Servers who cannot store or return a data element tagged as Supported in IPA profiles can still claim conformance to the IPA profiles per the IPA conformance resources.

##### Missing Data
There are situations when information on a particular data element is missing, and the source system does not know the reason for the absence of data.

###### Missing Must-Support and Optional Data
 If the server does not have data for an element with a minimum cardinality = 0 (including elements labeled Must Support), the data element SHALL be omitted from the resource.

Note: an IPA server may have no data to be included either because there are no data or because the data available are not pertinent.

###### Missing Must Support and Required Data
If an IPA server does not have data to be included, the reason for the absence has to be specified as follows:

1. For non-coded data elements, use the [DataAbsentReason Extension]({{site.data.fhir.path}}extension-data-absent-reason.html) in the data type.
2. For coded data elements:
     - *example*, *preferred*, or *extensible* binding strengths (CodeableConcept datatypes):
       - if the source systems have text but no coded data, only the text element is used.
       - if there is neither text nor codes representing actual (i.e., non-exceptional) concepts:
         - use the appropriate exceptional concept code from the value set if available
         - use the appropriate concept code from the [DataAbsentReason Value Set]({{site.data.fhir.path}}valueset-data-absent-reason.html) if the value set does not have it.
     - *required* binding strength (CodeableConcept or code datatypes):
       - use the appropriate exceptional concept code from the value set

#### Obligations for Clients
[IPA Clients](ActorDefinition-client.html) conforming to a profile in IPA SHALL support the behavior defined in the Obligations section for the Client Actor under a given data element.  Generally, IPA applies the SHALL:handle obligation code on clients, which requires that client be capable of processing resource instances containing must-support data elements, including elements with missing data, without generating an error or causing the application to fail. An element can be processed, for example, if the receiving application's behavior can differ based on the element's value.

For example, one possible value of the [Observation.status element](StructureDefinition-ipa-observation-definitions.html#Observation.status) is `entered-in-error`. This element is marked as Must Support because clients must be capable of processing this value to handle the resource's clinical data appropriately.

Note: Readers are advised to understand [FHIR Terminology]({{site.data.fhir.path}}terminologies.html) requirements, [FHIR RESTful API]({{site.data.fhir.path}}http.html) based on the HTTP protocol, along with [FHIR DataTypes]({{site.data.fhir.path}}datatypes.html), [FHIR Search]({{site.data.fhir.path}}search.html) and [FHIR Resource]({{site.data.fhir.path}}resource.html) formats when implementing IPA requirements.

#### Obligation Code Definitions
Further clarification on the obligation code defined for an actor can be found by clicking the hyperlink on the obligation or by navigating to [obligation code value set](https://hl7.org/fhir/extensions/CodeSystem-obligation.html). 

#### Must Support - Resource References

Some elements labeled as *Must Support* reference multiple resource types or profiles (e.g., `DocumentReference.author`). IPA servers SHALL support *at least one* referenced resource or profile for each element listed in the table below. IPA client apps SHALL support *all* referenced resources or profiles listed in the table below.

IPA Profile Name|Must Support Reference Element|Must Support Reference
---|---|---
IPA-MedicationRequest|MedicationRequest.reported[x]|http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient, http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitioner, http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitionerrole
IPA-MedicationRequest|MedicationRequest.requester|http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitioner, http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitionerrole, http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient
IPA-DocumentReference|DocumentReference.author|http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitioner, http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitionerrole, http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient
IPA-DocumentReference|DocumentReference.context.encounter|http://hl7.org/fhir/StructureDefinition/Encounter, http://hl7.org/fhir/StructureDefinition/EpisodeOfCare
IPA-MedicationStatement|MedicationStatement.context|http://hl7.org/fhir/StructureDefinition/Encounter, http://hl7.org/fhir/StructureDefinition/EpisodeOfCare
IPA-MedicationStatement|MedicationStatement.informationSource|http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitioner, http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitionerrole, http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient, http://hl7.org/fhir/StructureDefinition/Organization, http://hl7.org/fhir/StructureDefinition/RelatedPerson
{:.grid}

For example, when claiming conformance to the IPA DocumentReference Profile:

* IPA Server **SHALL** be capable of providing a DocumentReference.author with a valid reference to an IPA Practitioner Profile, an IPA PractitioneRole Profile, an IPA Patient Profile, or any combination of them if the element is available
* IPA Clients **SHALL** be capable of processing a DocumentReference.author with a valid reference to an IPA Practitioner Profile, IPA PractitionerRole Profile, and an IPA Patient Profile.

#### Must Support - Choice of Data Types

Some elements labeled as *Must Support* allow different data types (e.g., `Observation.effective[x]`) for their content. IPA servers SHALL support *at least one* data type for each element listed in the table below. IPA client apps SHALL support *all* data types listed in the table below.

IPA Profile Name|Must Support Choice Element|Must Support Data Types
---|---|---
IPA-Immunization|Immunization.occurrence[x]|dateTime, string
IPA-MedicationRequest|MedicationRequest.reported[x]|boolean, Reference
IPA-MedicationRequest|MedicationRequest.medication[x]|CodeableConcept, Reference
IPA-Observation|Observation.effective[x]|dateTime, Period
IPA-Observation|Observation.value[x]|Quantity, CodeableConcept, string, boolean, integer, Range, time, dateTime, Period
IPA-MedicationStatement|MedicationStatement.medication[x]|CodeableConcept, Reference
IPA-MedicationStatement|MedicationStatement.effective[x]|dateTime, Period
{:.grid}

For example, when claiming conformance to the IPA Observation Profile:

* IPA Servers **SHALL** be capable of populating `Observation.effectiveDateTime`, `Observation.effectivePeriod`, or both if the element is available.
* IPA Clients **SHALL** be capable of processing `Observation.effectiveDateTime` and `Observation.effectivePeriod`

Systems **MAY** support populating and processing other choice elements not listed in the table (such as `Observation.effectiveInstant`), but this is not a requirement.



---

// File: input/pagecontent/downloads.md

<!-- input/pagecontent/downloads.md -->



### Package File

The following package file includes an NPM package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and URLs in the IG, etc., defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all the rules about what makes the profiles valid. Implementers will still need to be familiar with the specification content and profiles that apply to make a conformant implementation. For more information, see the [validating profiles and resources]({{site.data.fhir.path}}validation.html) documentation in FHIR.

- [Package(compressed folder)](package.tgz){::download="true"}

  
### Downloadable Copy of Specification

A downloadable version of this IG for local hosting is available:

- [Downloadable Copy](full-ig.zip)

### Examples

All the examples in this Implementation Guide are available for download:

- [XML(compressed folder)](examples.xml.zip)
- [JSON(compressed folder)](examples.json.zip)



### Implementation Guide Details
The following link to the [ImplementationGuide]({{site.data.fhir.path}}implementationguide.html) resource defines the technical details of this publication, including dependencies and publishing parameters:

- [IPA ImplementationGuide Resource](ImplementationGuide-hl7.fhir.uv.ipa.html)

### OpenAPI (a.k.a., Swagger) Definition Files

 The following [OpenAPI](https://www.openapis.org/) files are generated from the IPA CapabilityStatements:

- [IPA Server](ipa-server.openapi.json)
- [IPA Client](ipa-client.openapi.json)



---

// File: input/pagecontent/fetching.md

Once an application has obtained access to the patient record with a [SMART on FHIR access token](access.html), it can 
find and retrieve information about the patient. 

### Initial Patient Identity Check 

The first thing the application should do is retrieve the patient record it has obtained access to and confirm that it is about the right patient.

    GET [url]/Patient/[id]

This [read](http://hl7.org/fhir/http.html#read) returns a single FHIR Patient resource.
The details in the patient record should match what the user of the application is expecting. The application chooses how to check this, though some jurisdictions may make additional rules about how it is done. If the app suspects it has been incorrectly granted access, consider: informing the resource server owner, aborting the workflow without showing data to the current user, and looking to local jurisdictional policies for guidance.



Notes:
* A user may grant access to their or another patient's record (e.g., a family member or other patient for whom the user is an authorized representative).
* Identifying the patient is a significant challenge - and [safety issue](security.html#patient-safety), and the application should never take a correct match for granted. This step is an essential check if the client application is [synchronizing its own copy of the patient record](synchronization.html).
* Jurisdictions may have applicable laws or regulations about displaying/checking this information in the application.

### Fetching Patient Records 

Once the patient's identity is confirmed, the application can access the patient record by searching on a set of different resources, using this pattern:

    GET [url]/Condition?[params]
    
or more generally, 

    GET [url]/[Resource]?[params]

Where "[Resource]" is the name of a resource taken from the table below, and the list of parameters includes the patient identifier. (See FHIR's [RESTful API]({{site.data.fhir.path}}http.html#styleguide) for the details). Some of the lists returned from these calls will be relatively short, but some may be very long - potentially many thousands of resources for Observation and DocumentReference, for example. 

Servers will generally use [paging](http://hl7.org/fhir/http.html#paging) to manage requests for long lists of resources. 

Servers SHALL support the required search parameters and SHOULD support the recommended search parameters [documented](#supported-searches-by-resource); therefore, clients may use these required search parameters to narrow the search scope and reduce the number of resources returned. However, except for these required search parameters, servers are not obligated to support other search parameters. For this reason, clients should always check the [self link in the returned result of the search](http://hl7.org/fhir/search.html#errors) to see what parameters were processed (or consult the server's [CapabilityStatement](CapabilityStatement-ipa-server.html) in advance to know which parameters are supported). 

The application can also use the [$docref operation](OperationDefinition-docref.html) to obtain a document, or a set of documents, related to the patient. This operation is particularly useful for implementations not based on FHIR and that do not expose data as FHIR resources. It allows them to share their information with patient-facing applications.

### Supported Searches by Resource 

As defined in the [IPA Server Capability Statement](CapabilityStatement-ipa-server.html) and [IPA Client Capability Statement](CapabilityStatement-ipa-client.html), the following resources can be searched to access patient information. Required or recommended combinations of search parameters are separated by a plus sign. IPA Clients are expected to support the required search parameters for each IPA resource type they support.

For example, an IPA-compliant server returns all lab results for a single patient with: `Observation?patient=123&category=laboratory` but may not support returning all labs, vital signs, social history, surveys, exams, activities, etc, with: `Observation?patient=123`.

|Resource | Required search params| Recommended search params |
| ------- | ----------------------- | ---------------------- |
| AllergyIntolerance    | patient   | patient+clinical-status |
| Condition             | patient   | patient+category, patient+clinical-status, patient+verification-status, patient+code, patient+onset-date, patient+category+clinical-status|
| DocumentReference     | \_id, patient, patient+category, patient+type | patient+category+date, patient+status, patient+type+period |
| Immunization          | patient   | patient+date, patient+status |
| MedicationRequest     | patient   | patient+intent, patient+intent+authoredon, patient+intent+status |
| MedicationStatement   | patient   | patient+status                    |
| Observation           | patient+category, patient+code, patient+category+date     | patient+category+status, patient+code+date |
| Patient               | \_id, identifier | birthdate, family, gender, given, name, family+gender, birthdate+family, birthdate+name, gender+name |
{:.grid}


### Supporting Resources


The API also provides access to the following resources, which are referred to from the resources above and may be read directly. Servers are not required to support search functionality on Practitioner or PractitionerRole. However, if they do, they may choose to communicate only relevant information related to the patient (for example, only the practitioner's name).


* Medication
* Practitioner
* PractitionerRole

All these resources are accessed by 

    GET [url]/[type]/[id]
    
[type] is from the list above, and "[id]" is the FHIR ID obtained from clinical resources that refer directly to them.
E.g. 

    "author": {
      "reference": "Practitioner/23"
    }

Note that the API does not specify search parameters for these resources; applications only need to access them in support of existing records that refer directly to them. 

Client applications may ask for these resources to be [included](http://hl7.org/fhir/search.html#include) in the search response, but servers are not required to do this, so clients should be prepared to fetch these directly and cache them locally. 

### Generating Patient Documents


{% include doc-gen.md %}




---

// File: input/pagecontent/ImplementationGuide-hl7.fhir.uv.ipa.md


|||
|---|---|
|*Official URL*: {{ site.data.ig.url }}|*Version*: {{ site.data.ig.version }}|
|*NPM package name*: {{ site.data.ig.packageId }}|*ComputableName*: {{ site.data.ig.name }}|
|*Copyright/Legal*: Used by permission of HL7 International, all rights reserved Creative Commons License|
{:.grid}

{{ site.data.ig.description }}

- [XML](ImplementationGuide-{{site.data.ig.id}}.xml)
- [JSON](ImplementationGuide-{{site.data.ig.id}}.json)

### Cross Version Analysis

{% capture cross-version-analysis %}{% include cross-version-analysis.xhtml %}{% endcapture %}{{ cross-version-analysis | remove: '<p>' | remove: '</p>'}}

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}


### Parameter Settings

The following [IG Parameters](https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters) are set for this Implementation Guide:

{% for p in site.data.ig.definition.parameter %}
- code: {{p.code}}<br/>value: {{p.value }}
{%- endfor -%}



---

// File: input/pagecontent/index.md

### Welcome to the International Patient Access API Specification

This specification describes how an application acting on behalf of a patient
can access information about the patient from a clinical records system using
a FHIR R4 based API. The clinical records system may be supporting a clinical care provider (e.g., a hospital or a general practitioner), a health data exchange, 
or other system managing patient records, including a national health record system.


The IPA specification is designed to help patients access their data. In addition, implementers can use the IPA profiles and the [SMART App Launch](http://hl7.org/fhir/smart-app-launch/) specification to support clinician-facing applications and backend access to patient records.


Applications that conform to IPA can access the following information about the patient:

* [Basic patient details](StructureDefinition-ipa-patient.html)
* [Problems / Conditions](StructureDefinition-ipa-condition.html)
* [Medication orders](StructureDefinition-ipa-medicationrequest.html) and [usage](StructureDefinition-ipa-medicationstatement.html)
* [Immunization history](StructureDefinition-ipa-immunization.html)
* [Allergies and intolerances](StructureDefinition-ipa-allergyintolerance.html)
* [Vital signs, lab results, and other clinical observations](StructureDefinition-ipa-observation.html)
* [Clinical notes & other patient documents](StructureDefinition-ipa-documentreference.html)



#### Example Scenario

*Salma Kahil uses a personal health record app to track her health and assemble her records from multiple healthcare providers. Her healthcare providers support the International Patient Access API, and Salma's health record app provides a user-friendly IPA application to provide safe, quick, and reliable access to data. Because retrieving and updating her medical information from her healthcare providers is secure, fast, and simple, Salma is a more informed and engaged patient.*


#### Using the International Patient Access API

The IPA specification is designed to help patients access their data through patient-facing applications. The underlying SMART App Launch specifications have been deployed at scale for clinician-facing and backend access to patient records using EHR-integrated SMART apps  This version of IPA is read-only. However, implementations may choose to provide write access. In addition, IPA implementers are encouraged to re-use IPA profiles and support additional SMART App Launch capabilities, such as the "[Clinician Access for EHR Launch](http://hl7.org/fhir/smart-app-launch/conformance.html#capability-sets)" scenario or "[Backend Services](http://hl7.org/fhir/smart-app-launch/backend-services.html)".






### IPA Actors

The following actors are part of the IPA IG:

IPA Server ("Responder")
: A product that responds to the data access request providing patient data. It can be thought of as the server in a client-server interaction. The terms "server", "IPA FHIR server", and "EHR" are used interchangeably throughout this guide and are not meant to limit this actor to electronic health record systems. HIEs, care coordination platforms, population health systems, etc., can use the same technology. Consider these terms a short-hand notation for an "interoperable healthcare platform".
<br/><br/>

IPA Client ("Requestor")
: An application that initiates a data access request to retrieve patient data. It can be thought of as the client in a client-server interaction. The terms "app", "patient app", and "client" are used interchangeably throughout this guide and are not meant to limit this actor to patient and provider apps. Payers and other users can use the same technology. Consider these terms a short-hand notation for a "user application".
<br/><br/>

SMART on FHIR Authorization Server
: A product that responds to authentication and authorization requests as defined in the [SMART App Launch](http://hl7.org/fhir/smart-app-launch/) specification. It can be thought of as the server in a client-server interaction. The terms "Authorization server", "SMART on FHIR server", and "OAuth2.0 server" are used interchangeably throughout this guide.

### IPA Sequence Diagram

The sequence diagram in the figure below outlines a successful interaction between a patient and an IPA server to query and retrieve the patient's clinical data:

{% include img.html img="ipa-simple-sequence.svg" %}


#### How To Read this Guide

This Guide is divided into several pages listed at the top of each page in the menu bar.

- [Home](index.html)\: The home page introduces the IPA project and guide.
- [Conformance](conformance.html)\: This page describes the rules to claim conformance to this guide and defines the expectations for must-support elements in the IPA Profiles.
- Using The API:
  - [Gaining Access to a Patient Record](access.html)\: This page documents how to access a patient record securely.
  - [Finding and Retrieving Patient Information](fetching.html)\: This page documents how to find and retrieve information about a patient and generate documents on request.
  - [Synchronizing Patient Records](synchronization.html)\: This page describes how to safely maintain a synchronized copy of the patient's information.
  - [Internationalization Issues](internationalization.html)\: This page discusses how to support a wide range of international applications.
- [Security and Privacy](security.html)\: This page documents the IPA security requirements and discusses patient privacy and safety topics.
- [Artifact Index](artifacts.html)\: These pages provide detailed descriptions and formal definitions for all the FHIR objects defined in this guide.
    - [Profiles](artifacts.html#1)\: The set of Profiles that a patient can access. They contain clinical and supporting information about the patient. In addition, each Profile page includes a narrative description, guidance, and a formal definition.
    - [CapabilityStatements](artifacts.html#3)\: This page defines the expected FHIR capabilities of an IPA client and server.
    - [Operations](artifacts.html#4)\: This page defines the $docref operation for retrieving  generated documents on request. 
    - [Examples](artifacts.html#5)\: The list of all the examples used in this guide. They illustrate the data produced and consumed by systems conforming to this implementation guide. Every effort has been made to ensure that the examples are correct and valuable. However, they are neither a normative part of the specification nor fully representative of real-world examples.
- Support:
    - [Downloads](downloads.html)\: This page provides links to downloadable artifacts that developers can use to help them implement this guide.



### Relationship to National Specifications 

This International Patient Access specification describes how to access patient 
records worldwide. It provides a very minimal set of access methods 
and content rules that are true everywhere. Working healthcare systems 
may need to make additional rules about the access API to support other use cases and their national laws, regulations, and accepted
practices.

Jurisdictions are encouraged to use this specification directly and may also publish their patient access specifications that further refine the profiles in this implementation guide. 

This project intends to create and maintain a registry of FHIR implementation guides consistent with IPA as countries adopt it in their national FHIR standards.
{:.bg-info}




#### Declaring support for IPA
As jurisdiction-specific FHIR profiles proliferate, specification authors should strive to build on top of IPA to better serve their implementors, caregivers, and patients. A FHIR implementation guide declares a relationship with IPA by referencing IPA in its published CapabilityStatement. Similarly, systems can also indicate their support of IPA in their CapabilityStatement. An implementation guide or system can support IPA in two distinct manners:

1. An implementation guide is **compliant** with IPA if it requires all IPA requirements, including support for SMART on FHIR and IPA's profiles. Similarly, a system complies with IPA if it supports all of the requirements in IPA. In both cases, the CapabilityStatement communicates compliance by referencing the canonical IPA URI in its [implementationGuide element](http://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.implementationGuide). 
2. An implementation guide is an instantiation of IPA if it requires only some of IPA's requirements. A system **instantiates** IPA if it supports parts of IPA. The CapabilityStatement communicates this by referencing the canonical URL of the appropriate IPA CapabilityStatement URL in its [instantiates element](http://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.instantiates). 

Because the "instantiates" form of support for IPA is imprecise, implementers and users of a system or specification that instantiates IPA should ensure that the desired functionality is instantiated.



{% include ips-relationship.md %}


---

### Credits


*This Implementation Guide was made possible by the contributions of the [Argonaut Project](https://confluence.hl7.org/display/AP/Argonaut+Project+Home) member organizations and the [Patient Care](http://www.hl7.org/Special/committees/patientcare/) Work Group,*

*Authors:*

- *Eric Haas, Health eData Inc*
- *Grahame Grieve, Health Intersections Pty. Ltd.*
- *Isaac Vetter, Epic*
- *Mikael Rinnetmaki, Sensotrend Oy, HL7 Finland*
- *Rob Hausam, Hausam Consulting LLC*
- *Sheridan Cook, Canada Health Infoway*
- *Vassil Peytchev, Epic*


*Individual Contributors:*

- *Brett Marquard, WaveOne*
- *Cori Thompson, Drummond Group*
- *John D'Amore, More Informatics*
- *John Moehrke, By Light Professional IT Services LLC*
- *Rashid Kolaghassi, Epic*

---


---

// File: input/pagecontent/internationalization.md


The International Patient Access specification provides an underlying base specification intended to
be localized by individual countries to meet national laws, regulations, and accepted practices.

It also provides producers of generic patient-facing applications a basis on which to build, so
that the application would be as compatible as possible with as many globally available
implementations as possible.

__This base version of the specification aims to provide general guidance rather than rigid rules.
The authors of the specification welcome feedback and suggestions on what should be required of
implementations.__

### Language

This version of the specification makes no specific rules around language. However, future versions of IPA and specifications derived from IPA are expected to impose constraints and recommendations.

### Codeable Concepts

Implementations SHOULD include codes from internationally supported code sets since it would make applications more internationally portable. It is often not practical to
store resources with textual descriptions in multiple languages or populate this information on the fly. Instead, applications are expected to rely on code systems and terminology servers to obtain human-readable terms for the appropriate language when required.
Therefore, implementers are encouraged to focus on providing extensive coverage of various code sets for codeable data rather than focusing on support for multiple languages for international apps and use cases.

Not all available data is always coded, and not all data can be coded with code systems. Also, for most patients, their healthcare is most valuable in its original authored language. Therefore,  when the coded data cannot be used, applications SHALL be able to use the text representation of data elements when presenting data in a user interface.

### Non-Codeable Concepts

There is also information that cannot be easily described with a code system, such as
[person names]({{site.data.fhir.path}}datatypes.html#HumanName)
and [addresses]({{site.data.fhir.path}}datatypes.html#address).

Therefore, implementations SHOULD expose the text element for this kind of data to be usable for a wide range of internationally available applications.


---

// File: input/pagecontent/security.md


Servers and clients SHALL follow the security requirements and SHOULD follow the security best practices as outlined in [FHIR Security]({{site.data.fhir.path}}security.html) and elsewhere.

### Patient Privacy

{% include privacy.md %}

### Patient Safety

{% include safety.md %}



---

// File: input/pagecontent/StructureDefinition-ipa-allergyintolerance-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.


**Each AllergyIntolerance SHALL have:**
* a code that identifies the allergy or intolerance
* a patient
  
**Applications must also support:**
* a clinical status
* a verification status

<!-- (only if present) -->
<!-- ### Profile Specific Implementation Rules and Guidance -->

<!-- include content or add inline -->

<!--{%raw%}{% include patient-access-rules.md %}{%endraw%}-->

<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/pagecontent/StructureDefinition-ipa-condition-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.

**Each Condition SHALL have:**
* a code identifying the condition, problem, or diagnosis
* a patient
 
**Applications must also support:**
* a clinical status
* a verification status
* one or more category codes used to group conditions


<!-- (only if present) -->
### Profile Specific Implementation Rules and Guidance

#### Accessing Condition Resources 

Clients can access a Condition resources using:

```GET [url]/Condition/[id]```

where id is found in some other resource that refers to a Condition. The result of this read is 
a Condition resource, or an error if there is no resource the client can access for that id. 
Alternatively, the client may search for condition resources.

{% include condition-codes-safety.md %}

<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/pagecontent/StructureDefinition-ipa-documentreference-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.


**Each DocumentReference SHALL have:**
* a status
* a patient
* one or more documents referenced (content) which is either a URL where the data can be found or inline data or both
* the MIME type (i.e. contentType) of the document
  
**Applications must also support:**
* a code describing the type of document
* one or more category codes used to group document types
* date and time the reference was created
* one or more authors
* a code identifying the specific details about the format of the document — over and above the content’s MIME type
* the patient encounter that is being referenced
* clinically relevant date


<!-- (only if present) -->
<!-- ### Profile Specific Implementation Rules and Guidance -->

<!-- include content or add inline -->

<!--{%raw%}{% include patient-access-rules.md %}{%endraw%}-->

<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/pagecontent/StructureDefinition-ipa-immunization-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.


**Each Immunization SHALL have:**
* a status
* a code that identifies the allergy or intolerance
* a patient
* date vaccine administered or was to be administered.


<!-- (only if present) -->
<!-- ### Profile Specific Implementation Rules and Guidance -->

<!-- include content or add inline -->

<!--{%raw%}{% include patient-access-rules.md %}{%endraw%}-->

<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/pagecontent/StructureDefinition-ipa-medicationrequest-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.


**Each MedicationRequest SHALL have:**
* a status
* a code to indicate wether the request is a proposal, plan, or an original order
* a medication*
* a patient
  
\* see guidance below
 
**Applications must also support:**
* the reported flag or reference signaling that information is from a secondary source such as a patient
* the encounter
* a date for when written
* the prescriber/requester 
* the prescription Sig


<!-- (only if present) -->
### Profile Specific Implementation Rules and Guidance

<!-- include content or add inline -->

{% include med-guidance.md medrequest=true %}

<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/pagecontent/StructureDefinition-ipa-medicationstatement-intro.md

{% raw %}
<blockquote class="stu-note">
<p>
We propose to remove MS from statusReason. Implementer feedback is encouraged.

</p>
</blockquote>
{% endraw %}

### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.


**Each MedicationStatement SHALL have:**
* a status
* a medication*
* a patient
  
\* see guidance below
 
**Applications must also support:**
* a status reason
* the encounter/episode of care
* the date/time or interval when the medication is/was/will be taken
* person or organization that provided the information
* the prescription Sig


<!-- (only if present) -->
### Profile Specific Implementation Rules and Guidance

<!-- include content or add inline -->

{% include med-guidance.md medrequest=false %}

<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/pagecontent/StructureDefinition-ipa-observation-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.


**Each Observation SHALL have:**
* a status
* a code identifying the type of observation
* a person
 
**Applications must also support:**
* one or more category codes used to group observations
* clinically relevant time/time-period for the observation
* the observation result value
* a reason why the result value is missing

<!-- (only if present) -->
### Profile Specific Implementation Rules and Guidance

<!-- include content or add inline -->

Note that the base FHIR specification defines a profile on the Observation resource used to specifically represent vitals signs. To adhere to IPA as well as the base FHIR specifications, implementers SHALL support the [FHIR Core Vitals Signs profile](http://hl7.org/fhir/us/core/2017Jan/StructureDefinition-us-core-vitalsigns.html). 

The IPA-Observation profile defined here SHALL be used to represent Observations other than vital signs such as:


- Laboratory data (for example, blood glucose)
- Imaging or clinical test results (for example, bone density or electrocardiogram (ECG))
- Social history (for example, tobacco use or occupation data<sup>1</sup>)
- General health status (for example, pregnancy status)


<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/pagecontent/StructureDefinition-ipa-observation-notes.md

<sup>1</sup>See the [Occupational Data for Health (ODH) profiles](http://hl7.org/fhir/us/odh/)

---

// File: input/pagecontent/StructureDefinition-ipa-patient-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.

{% raw %}
<blockquote class="stu-note">
<p>
This specification is currently published as a Standard for Trial Use (STU).  Feedback is welcome and may be submitted through the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> indicating "International Patient Access (FHIR)" as the specification. The publishers of the specification are seeking feedback on two elements in this Patient profile.
</p>
<p>
<ol>
<li>
Currently, the Patient.identifier element is identified as mandatory. The intent is that all servers must provide a unique patient identifier that can facilitate a federated approach to accessing patient information. Please provide any evidence for or against this decision.
</li>
<li>In the balloted version of this specification, the Patient.name element was identified as mandatory (meaning minimal cardinality of 1) and provided a rule that the use of the  <a href="https://hl7.org/fhir/R4/extension-data-absent-reason.html">Data Absent Reason (DAR) extension</a> was allowed. In this published version, Patient.name is not mandatory. It was expressed that having the minimal cardinality of 1 may not enable privacy preserving mechanisms, such as patients limiting client application access to their demographic information, including name, as part of the authorization process. Implementer feedback is requested on whether Patient.name should be a mandatory element.
</li>
</ol>
</p>
</blockquote>
{% endraw %}

**Each Patient SHALL have:**

* a patient identifier (e.g. MRN)

**Applications must also support:**

* a patient name
* an administrative gender (note: this is for administrative purposes; see [note about Patient Gender and Sex for discussion](http://hl7.org/fhir/patient.html#gender))
* an active flag (It SHALL be present if patients links are present)*
* Birth date
* Patient Link*

\* See guidance below

<!-- (only if present) -->
### Profile Specific Implementation Rules and Guidance

<!-- include content or add inline -->

<!--{%raw%}{% include patient-access-rules.md %} {%endraw%}-->
{% include patient-access-rules.md %}

<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/pagecontent/StructureDefinition-ipa-practitioner-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.

**Each Practitioner SHALL have:**

* one or more name(s) associated with the practitioner*

\* see guidance below
 
<!-- **Applications must also support:**
* a biz
* a baz -->


<!-- (only if present) -->
### Profile Specific Implementation Rules and Guidance

This section describes how applications fetch Practitioner resources that provide information about other individuals that are involved in the care of the patient.

#### Example Usage Scenarios:

A patient's record is full of records of events or planned actions where the actors  are 
care practitioners of various kinds. Note that these include any person employed by a healthcare provider,
including clerical staff, orderlies, etc as well as the more obvious practitioners such as doctors and 
nurses. All these may be represented as a Practitioner resource.

Note that the Patient Access API provides access to both Practitioner and [PractitionerRole](StructureDefinition-ipa-practitionerrole.html) resources.
The difference in underlying record keeping that leads to this choice is not of interest to clients
that access patient records, but they can expect to encounter both types of resource.

All servers SHALL provide an API to access Practitioner resources as described here. 
Note that servers are allowed to provide some practitioner records as contained resources, but 
SHOULD avoid doing so where ever possible. 

Clients access practitioner resources using this call:

```GET [url]/Practitioner/[id]```

where id is found in some other resource that refers to a Practitioner. The result of this request is 
a Practitioner resource, or an error if there is no resource the client can access for that id. 

\* Note that in some cases, the actual name of the practitioner is not made available. In such cases,
the server SHALL provider some human-useful text in [HumanName.text]({{site.data.fhir.path}}datatypes-definitions.html#HumanName.text)
that the client can use. 

#### Search

Servers are not required to support search functionality on Practitioner. If they do, appropriate measures SHOULD be taken to follow the [security/privacy guidance](security.html#patient-privacy). Typical search
parameters a Server could choose to support would be ```name``` and ```active```




---

// File: input/pagecontent/StructureDefinition-ipa-practitionerrole-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.

<!-- **Each <Resource Type> SHALL have:**
* one or more name(s) associated with the practitioner -->
 
**Applications must support:**
* a practitioner reference (which is an [IPA Practitioner](StructureDefinition-ipa-practitioner.html))

<!-- (only if present) -->
### Profile Specific Implementation Rules and Guidance

This section describes how applications fetch PractitionerRole resources that provide information about other individuals that are involved in the care of the patient. 

#### Example Usage Scenarios:

A patient's record is full of records of events or planned actions where the actors are 
care practitioners of various kinds. Note that these include any person employed by a healthcare provider,
including clerical staff, orderlies, etc as well as the more obvious practitioners such as doctors and 
nurses. All these may be represented as a PractitionerRole resource.

Note that the Patient Access API provides access to both [Practitioner](StructureDefinition-ipa-practitioner.html) and PractitionerRole resources.
The difference in underlying record keeping that leads to this choice is not of interest to clients
that access patient records, but they can expect to encounter both types of resource.

All servers SHALL provide an API to access PractitionerRole Resources as described here. 
Note that servers are allowed to provide some practitioner role records as contained resources, but 
SHOULD avoid doing so where ever possible. 

Clients access PractitionerRole resources using this call:

```GET [url]/PractitionerRole/[id]```

where id is found in some other resource that refers to a PractitionerRole. The result of this request is 
a PractitionerRole resource, or an error if there is no resource the client can access for that id. 

#### Search

Servers are not required to support search functionality on PractitionerRole, but may do so. If they do, the 
search SHALL be limited to Practitioner resources that relate to the patient in scope. Typical search
parameters a Server could choose to support would be ```role``` and ```active```

---

// File: input/pagecontent/StructureDefinition-ipa-problem-list-item-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support-and-obligations) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.

**Each Condition SHALL have:**
* a code identifying the condition, problem, or diagnosis
* a patient
* at least a category code of "problem-list-item"
 
**Applications must also support:**
* a clinical status
* a verification status



<!-- (only if present) -->
### Profile Specific Implementation Rules and Guidance

#### Retrieving the Current Problem List:

The current problem list is retrieved by specifying the patient, category and  clinical-status:

```GET [url]/Condition?patient=[patient-id]&category=problem-list-item&clinical-status=active```

{% include condition-codes-safety.md %}

<!--{%raw%}{% include patient-access-rules.md %}{%endraw%}-->

<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/pagecontent/synchronization.md

Many applications that access patient records keep a synchronized copy of the patient record elsewhere.

To make this a safe process, application developers should code defensively. Notably, there are a few surprising reasons why a FHIR server may no longer return previously accessible resources:

* Not all FHIR servers preserve FHIR resource ids – all systems SHOULD, for all sorts of reasons, but not all systems do. Consequently, applications cannot maintain a copy of the downstream information.
* Similarly, some systems may permit the hard deletion of a resource (a record) from the origin server, making it unavailable from the API.
* The record was marked as "confidential" on the server side, and the policy is not to provide access to confidential information across the API.
* The record was created for the wrong subject and subsequently corrected. Therefore resource is no longer available for the original patient.
* The API service portal may have lost access to the underlying record store.
* The record may no longer be available to the production system if enough years (e.g., 5-7 years or longer) have passed.
* Patient records may be merged or unmerged. Different systems handle this differently.

Applications should note that there are challenges around synchronizing records - see a [Hard FHIR Safety Problem: Synchronization](http://www.healthintersections.com.au/?p=2950) for additional considerations and analysis on the above and other synchronization challenges.


---

// File: input/pagecontent/using-the-api.md

  <!-- using-the-api.md: -->
  
- [Gaining Access to a Patient Record](access.html)\: This page documents how to access a patient record securely.
- [Finding and Retrieving Patient Information](fetching.html)\: This page documents how to find and retrieve information about a patient and generate documents on request.
- [Synchronizing Patient Records](synchronization.html)\: This page describes how to maintain a synchronized copy of the patient's information safely.
- [Internationalization Issues](internationalization.html)\: This page discusses how to best support a wide range of international applications.


---

// File: input/includes/condition-codes-safety.md

#### Condition Codes

All Condition resources are required to have a code, but the coding systems used around the world 
and even within jurisdictions very wildly. This specification does not fix any kind of value set that 
controls what kind of codes can be used - other national specifications etc will place their own 
restrictions on the codes. 

Client Applications should be prepared to encounter codes they do not recognize and handle the records 
accordingly. Servers SHOULD populate Condition.code.coding.display and/or Condition.code.text so that 
clients can always at least display the condition even if they do not know the codes that are used.

Clients should be careful making use of the ```code``` search parameter given that the codes used
vary so much.

#### Safety Issues

* Clients SHALL not treat all conditions as if they are part of the patient's current problem list
    * Note that some Condition resources may not have these status codes - this is usually due to poor record keeping reflected in legacy data
    * Servers SHOULD avoid leaving these status codes missing
* Clients SHALL pay attention to the ```clinicalStatus``` and ```verificationStatus``` and display and process them correctly
* Clients SHALL still work safely when the server does not support all the search parameters listed in the [IPA Server Capability Statement](CapabilityStatement-ipa-server.html). (see also [Search advice](security.html#patient-safety))

---

// File: input/includes/doc-gen.md

A patient's record may contain any number and type of documents, from interoperable C-CDA documents to binary PDFs. The [$docref operation](OperationDefinition-docref.html) returns DocumentReference resources describing these existing documents, but can also cause a document to be newly generated and returned.

If a server conforms to this specification and also to IPS, this API can be used to generate IPS documents, 
using the [$docref operation](OperationDefinition-docref.html) with a specific code as defined in the [IPS implementation guide](http://hl7.org/fhir/uv/ips/principles.html#publishing-or-accessing-the-ips).
{:.bg-info}

See the [$docref operation](OperationDefinition-docref.html) definition for the details.


---

// File: input/includes/ips-relationship.md

### Relationship between IPA and IPS 


The [International Patient Summary (IPS)](http://hl7.org/fhir/uv/ips) specifies
a more extensive set of rules about the content that clinical systems may
conform to.

* IPA (this specification): a specification for access to a patient record with
minimal expectations about the content
* [IPS](http://hl7.org/fhir/uv/ips/): a specification that describes a document containing a clinical summary for a patient

These specifications are doing different things - one is making provision for
RESTful access to a record using modern authorization standards; the other is 
making rules about the content found in a summary of the record. Although some
considerations are appropriately given to these distinct use-cases, the content 
rules in this specification are generally a subset of the IPS content rules, 
systems that meet the information requirements in IPS will typically conform 
to IPA and can also provide access to the patient record as specified in IPA.






---

// File: input/includes/med-guidance.md

#### Medication Statement and Medication Request 

While the relationship between Medication Statement and Medication Request is clear in principle, 
in practice, when patients report medications, these may also be implicitly treated as statements of intent 
about what the patient should be taking. As such, information systems may record these statements 
as either Medication Requests or Medication Statements, or as both. The choice between these options 
may be influenced by many factors including wording in legislation and regulations.

For this reason, clients implementing the International Patient Access specification SHALL query for both 
MedicationStatement and MedicationRequest when fetching patient Medication information.

As noted there is currently no consensus how a patient can access their active, historical and future (planned) medications list. Feedback is welcome on what additional guidance can be given to promote more international alignment.
{:.stu-note}

#### Fetching Medications

The MedicationRequest and MedicationStatement resources can represent a medication using either
a code or refer to the Medication resource. When referencing Medication, the
resource may be [contained]({{site.data.fhir.path}}references.html#contained)
or an external resource. The server application **MAY** choose any one way or
more than one method, but if an external reference to Medication is used, the
server **SHALL** support the `_include` parameter for searching this element.
The client application **SHALL** support all methods. For example, A server
**SHALL** be capable of returning all medications for a patient using one of
or both:

  `GET /MedicationStatement?patient=[id]`

  `GET/MedicationStatement?patient=[id]&_include=MedicationStatement:medication`

{% if include.medrequest %}
#### Medication specificity

When representing a prescribed medication, servers SHOULD use codings at the level of a clinical drug rather than ingredient or dose form (e.g. “loratadine 10mg oral tablet”, rather than a bare ingredient like “loratadine” or a dose form like “loratadine oral tablet”).
{% endif %}



---

// File: input/includes/new-content-note.md

<div class="new-content" markdown="1">
*Where possible, new or updated content is highlighted in green for review. This highlighting will be removed prior to publication.*


---

// File: input/includes/patient-access-rules.md

During the [Authorization process](access.html), the user and the Authorization service fixes the patient record to a single individual patient. For safety, client applications should specify the patient id when searching other resources. 

The client application SHALL be capable of accessing the patient record using the following API call:

```GET [url]/Patient/[id]```

<!-- ```GET [url]/Patient?_id=[id]```

```GET [url]/Patient?identifier=[identifier]``` -->


The client application MAY use these search parameters that servers are required to support to access the patient record:

- [`_id`]({{site.data.fhir.path}}resource.html#search)
- [`identifier`]({{site.data.fhir.path}}patient.html#search)


Servers are not required to support any additional search parameters, and clients SHOULD NOT expect servers to do so.


Additional rules and guidance for supporting `Patient.link`: 

- The server:
    - SHALL have no more than one Patient with a status of active = "true" *from the server being queried* 
    - MAY include inactive patients on the *same server*
    - MAY include inactive or active patients from a *different server*
    - When returning a [search Bundle](http://hl7.org/fhir/bundle.html) that contains more than one Patient record for the same patient, the Patient record(s) SHALL use the `Patient.link` attribute to cross-link the Patient resources.
- The client:
    - SHALL be able to follow the link(s) to the other Patient resource(s) and understand the direction of the link (in other words, which Patient is linked to which other Patient)
    - SHALL understand the `Patient.link.type` code which defines the type of link between this Patient resource and another Patient resource
    - SHALL be aware of the linked Patient `active` flag and that inactive patients may have relevant information



---

// File: input/includes/privacy.md

This specification depends on [Smart App Launch](http://hl7.org/fhir/smart-app-launch) which profiles an OAuth 2.0 authorization process,
such that the user decides what access to grant to the application that they are using. 

The application asks for the access it requires based on [SMART App Launch Patient Scopes](http://hl7.org/fhir/smart-app-launch/scopes-and-launch-context.html#patient-specific-scopes), either when the OAuth process is initiated, 
or when the application is registered. Other additional information may be collected during whatever registration process applies 
for the application. 

Once a client launches the OAuth process, the Authorization server considers rules such as:

* Applicable laws and regulations
* Institutional policies and agreements 
* Existing Patient consent agreements
* Application access request 

Once the authorization server has determined what information the user has a right to 
access, it prompts the user to choose a subset of that 
the information they wish to share with the client application.

The Authorization server then returns a set of scopes to the application that describes what access
the user has authorized. Clients need to be aware that the Authorization server cannot fully describe 
the access rules in the scopes and SHALL be prepared to handle failure gracefully. 


- Servers are not required to support search functionality on Practitioner. If they do, it's important to balance the privacy of healthcare workers with the patient's access to information. Only information about the practitioners that relate to the patient is relevant.

- Servers MAY choose to inform a client when information is not available, but most servers will simply 
behave as if it doesn't exist (see [note in FHIR specification](http://hl7.org/fhir/security.html#AccessDenied)).

- This specification labels some elements as [must-support](conformance.html#must-support-and-obligations). This 
does not override the patient's right to decide whether to authorize an application to access their information.





---

// File: input/includes/safety.md


Accessing Patient records raises many questions about safety. Accessing the wrong patient records, missing correct records, displaying records incorrectly, or having non-authorized actors access records can potentially harm patients. The [Implementer Safety Checklist page]({{site.data.fhir.path}}safety.html) gathers clinical safety advice acquired from experience of accessing health records across
FHIR APIs like this one. All implementers should carefully consider each of the items on the checklist. Getting these issues right is necessary, but more is needed to deliver safe patient applications.

Note that software can misinterpret health care records, potentially leading to dire consequences. However, this specification does not provide enough information about accessing records to support interpreting the content. Implementers must consult their country-specific guides for this.

#### Patient matching
When [synchronizing](synchronization.html) a patient record, it's important to match not just a pre-existing patient identifier but also patient demographics. Additional care should be taken for patient merge and un-merge scenarios.




---

// File: input/includes/StructureDefinition-ipa-template-intro.md


### Mandatory and Must Support Data Elements


<!-- Boilerplate -->
The following data elements must always be present (in other words, mandatory resource properties where the minimum cardinality is 1) or must be supported ([Must Support](conformance.html#must-support) definition). Servers cannot restrict access to mandatory elements when authorizing an application. However, servers may choose to provide additional information or may be required to do so by national or other profiles that apply to the server's context.


**Each <Resource Type> SHALL have:**
* a foo
* a bar
 
**Applications must also support:**
* a biz
* a baz

<!-- (only if present) -->
<!-- ### Profile Specific Implementation Rules and Guidance -->

<!-- include content or add inline -->

<!--{%raw%}{% include patient-access-rules.md %}{%endraw%}-->

<!-- (and only if present) -->
<!-- ### Example Usage Scenarios -->

<!-- include content or add inline -->



---

// File: input/data/ig.yml

resourceType: ImplementationGuide
id: hl7.fhir.uv.ipa
url: http://hl7.org/fhir/uv/ipa/ImplementationGuide/hl7.fhir.uv.ipa
version: 1.0.0
name: InternationalPatientAccess
title: International Patient Access
status: draft
date: '2023-02-01'
publisher: HL7 International - Patient Care
contact:
- name: HL7 International - Patient Care
  telecom:
  - system: url
    value: http://www.hl7.org/Special/committees/patientcare
  - system: email
    value: patientcare@lists.HL7.org
description: This IG  describes how an application acting on behalf of a patient can
  access information about the patient from an clinical records system using a FHIR
  based API. The clinical records system may be supporting a clinical care provider
  (e.g. a hospital, or a general practitioner), or a health data exchange, including
  a national health record system.
jurisdiction:
- coding:
  - code: '001'
    system: http://unstats.un.org/unsd/methods/m49/m49.htm
    display: World
copyright: Used by permission of HL7 International all rights reserved Creative Commons
  License
packageId: hl7.fhir.uv.ipa
license: CC0-1.0
fhirVersion:
- 4.0.1
dependsOn:
- packageId: hl7.fhir.uv.smart-app-launch
  version: 2.0.0
  uri: http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch
  id: hl7_fhir_uv_smart_app_launch
definition:
  grouping:
  - id: GroupA
    name: 'Profiles: Primary Resources'
    description: Content Definitions for primary resources
  - id: GroupB
    name: 'Profiles: Supporting Resources'
    description: Content Definitions for supporting resources
  resource:
  - reference:
      reference: CapabilityStatement/ipa-client
    description: This  CapabilityStatement describes the basic rules for the International
      Patient Access client actor that initiates a data access request to and retrieves
      patient data from an IPA Responder. In addition, it lists the client conformance
      expectations for each resource type documented in IPA. These expectations include
      supported FHIR profiles, RESTful operations, and search parameters. International
      Patient Access clients define their capabilities by choosing from this list
      based on the resource types they need to access.
    exampleBoolean: false
    name: International Patient Access Client CapabilityStatement
  - reference:
      reference: CapabilityStatement/ipa-server
    description: This CapabilityStatement describes the basic rules for the International
      Patient Access server actor that is responsible for providing responses to queries
      submitted by International Patient Access requestors. The complete list of FHIR
      profiles, RESTful operations, and search parameters supported by International
      Patient Access servers are defined in this CapabilityStatement.
    exampleBoolean: false
    name: International Patient Access Server CapabilityStatement
  - reference:
      reference: OperationDefinition/docref
    description: "This operation is used to return all the references to documents\
      \ related to a\npatient. It is invoked on a FHIR Server's DocumentReference\
      \ endpoint (e.g., `[base]/DocumentReference/$docref`) and operates across all\
      \ DocumentReference instances. \n\n The operation requires a patient id and\
      \ takes the optional input parameters: \n  - start date\n  - end date\n  - document\
      \ type \n  - on-demand\n  - profile  \n\nand returns a *searchset* [Bundle](http://hl7.org/fhir/bundle.html)\
      \ containing [DocumentReference](StructureDefinition-ipa-documentreference.html)\
      \ resources for the patient. If the server has stored documents or can create\
      \ documents for the patient and those documents are available for the user,\
      \ the server returns the DocumentReference resources associated with documents.\
      \ This operation's intended use is to provide a way for providers or patients\
      \ to access their available documents. The document itself can be subsequently\
      \ retrieved using the link provided  in the `DocumentReference.content.attachment.url\
      \ element`. The link could be a FHIR endpoint to a [Binary](http://hl7.org/fhir/R4/binary.html)\
      \ Resource or some other document repository. \n\nThis operation is *different*\
      \ from a FHIR RESTful query on DocumentReference by patient and type and date\
      \ range because: \n\n1. It is used to request a server to *generate* a document\
      \ based on the specified parameters.\n\n1. If no parameters are specified, the\
      \ server SHALL return a DocumentReference to the patient's most current summary\
      \ document. The type of such summary document will depend on jurisdiction. For\
      \ example, it may be a C-CDA CCD. It is expected that such a summary document\
      \ will always exist or can be dynamically generated; however, a jurisdiction\
      \ may define the outcome of the operation when such a document is missing.\n\
      \n1. If the server cannot *generate* a document based on the specified parameters,\
      \ the operation will return an empty search bundle.\n\nUnless the client indicates\
      \ they are only interested in 'on-demand' documents using the *on-demand* parameter,\
      \ the server SHOULD return DocumentReference instances for *existing* documents\
      \ that meet the request parameters  In this regard, this operation is *similar*\
      \ to a FHIR RESTful query."
    exampleBoolean: false
    name: IPA Fetch DocumentReference
  - reference:
      reference: StructureDefinition/ipa-allergyintolerance
    description: Minimum expectations for an AllergyIntolerance resource when accessed
      via a International Patient Access API
    exampleBoolean: false
    name: IPA-AllergyIntolerance
    groupingId: GroupA
  - reference:
      reference: StructureDefinition/ipa-condition
    description: Minimum expectations for a Condition resource when accessed via an
      International Patient Access API. This profile communicates information about
      a patient's condition or diagnosis, such as recording primary and secondary
      diagnoses for encounters or justification for past medications. For the use
      of the condition resource to get a list of the patient's current problem list,
      use the [IPA-Problem-List-Item ](StructureDefinition-ipa-problem-list-item.html)
      profile instead. The difference between this profile and the IPA Problem List
      Item profile is that this profile does not specify or require a category.
    exampleBoolean: false
    name: IPA-Condition
    groupingId: GroupA
  - reference:
      reference: StructureDefinition/ipa-documentreference
    description: Minimum expectations for a DocumentReference resource when accessed
      via a International Patient Access API
    exampleBoolean: false
    name: IPA-DocumentReference
    groupingId: GroupA
  - reference:
      reference: StructureDefinition/ipa-immunization
    description: Minimum expectations for an Immunization resource when accessed via
      a International Patient Access API
    exampleBoolean: false
    name: IPA-Immunization
    groupingId: GroupA
  - reference:
      reference: StructureDefinition/ipa-medication
    description: Minimum expectations for a Medication resource when accessed via
      a International Patient Access API
    exampleBoolean: false
    name: IPA-Medication
    groupingId: GroupB
  - reference:
      reference: StructureDefinition/ipa-medicationrequest
    description: Minimum expectations for a MedicationRequest resource when accessed
      via a International Patient Access API. The MedicationRequest resource represents
      an order or request for both supply of the medication and the instructions for
      administration of the medication to a patient.
    exampleBoolean: false
    name: IPA-MedicationRequest
    groupingId: GroupA
  - reference:
      reference: StructureDefinition/ipa-medicationstatement
    description: Minimum expectations for a MedicationStatement resource when accessed
      via a International Patient Access API. The MedicationStatement resource represents
      all medications a patient is taking, be it those ordered by a clinician or reported
      by another organization, the patient or a caregiver.
    exampleBoolean: false
    name: IPA-MedicationStatement
    groupingId: GroupA
  - reference:
      reference: StructureDefinition/ipa-observation
    description: Minimum expectations for an Observation resource when accessed via
      a International Patient Access API
    exampleBoolean: false
    name: IPA-Observation
    groupingId: GroupA
  - reference:
      reference: StructureDefinition/ipa-patient
    description: Minimum expectations for a Patient resource when accessed via a International
      Patient Access API. This profile describes how applications fetch the Patient
      resource to check the patient identity and access basic demographics and other
      administrative information about the patient.
    exampleBoolean: false
    name: IPA-Patient
    groupingId: GroupA
  - reference:
      reference: StructureDefinition/ipa-practitioner
    description: Minimum expectations for a Practitioner resource when accessed via
      a International Patient Access API
    exampleBoolean: false
    name: IPA-Practitioner
    groupingId: GroupB
  - reference:
      reference: StructureDefinition/ipa-practitionerrole
    description: Minimum expectations for a PractitionerRole resource when accessed
      via a International Patient Access API
    exampleBoolean: false
    name: IPA-PractitionerRole
    groupingId: GroupB
  - reference:
      reference: StructureDefinition/ipa-problem-list-item
    description: Minimum expectations for a Condition resource for representing the
      patient's problem list items. The most important and prominent use of the condition
      resource is to get a list of the patient's current problem list. This Condition
      profile communicates information about a patient's problems. For other uses
      for the Condition resource, such as recording primary and secondary diagnoses
      for encounters or justification for past medications, use the [IPA-Condition](StructureDefinition-ipa-condition.html)
      profile instead. The difference between this profile and the IPA Condition profile
      is that this profile requires a mandatory category of 'problem-list-item'.
    exampleBoolean: false
    name: IPA-problem-list-item
    groupingId: GroupA
  - reference:
      reference: AllergyIntolerance/AllIntExample1
    description: This is an allergy intolerance example for the *IPA AllergyIntolerance
      Profile*.
    name: IPA AllergyIntolerance Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-allergyintolerance
  - reference:
      reference: AllergyIntolerance/NKAExample
    description: This is an example AllergyIntolerance using a no-known-allergies
      code.
    name: IPA No Known Allergies AllergyIntolerance Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-allergyintolerance
  - reference:
      reference: Condition/EncounterExample1
    description: This is am encounter diagnosis example for the *IPA Condition Profile*.
    name: IPA Condition Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-condition
  - reference:
      reference: Condition/ProblemExample1
    description: This is a problem list item example for the *IPA Problem List Item
      Profile*.
    name: IPA Problem List Item Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-problem-list-item
  - reference:
      reference: DocumentReference/USClinicalNoteExample1
    description: This is a DocumentReference example for the *IPA DocumentReference
      Profile*.
    name: DocumentReference Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-documentreference
  - reference:
      reference: Immunization/ImmExample1
    description: This is an Immunization example for the *IPA Immunization Profile*.
    name: IPA Immunization Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-immunization
  - reference:
      reference: Medication/MedExample1
    description: This is a Medication example for the *IPA Medication Profile*.
    name: Medication Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medication
  - reference:
      reference: MedicationRequest/MedRecExample1
    description: This is a MedicationRequest example for the *IPA MedicationRequest
      Profile*.
    name: MedicationRequest Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationrequest
  - reference:
      reference: MedicationStatement/MedStatementExample1
    description: This is a MedicationStatement example for the *IPA MedicationStatement
      Profile*.
    name: MedicationStatement Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationstatement
  - reference:
      reference: Observation/LabExample1
    description: This is a Observation example for the *IPA Observation Profile* containing
      a lab result.
    name: Observation Lab Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation
  - reference:
      reference: Observation/SmokingExample1
    description: This is a Observation example for the *IPA Observation Profile*.
    name: Observation social history smoking Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation
  - reference:
      reference: Observation/VitalSignsExample1
    description: This is a Observation example for the *IPA Observation Profile* containing
      the vital sign for body weight.
    name: Observation Vital Signs Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation
  - reference:
      reference: Patient/PatientExample1
    description: This is a Patient example for the *IPA Patient Profile*.
    name: IPA Patient Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient
  - reference:
      reference: Practitioner/PractitionerExample1
    description: This is a Practitioner example for the *IPA Practitioner Profile*.
    name: Practitioner Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitioner
  - reference:
      reference: PractitionerRole/PractitionerRoleExample1
    description: This is a PractitionerRole example for the *IPA PractitionerRole
      Profile*.
    name: PractitionerRole Example
    exampleCanonical: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitionerrole
  page:
    nameUrl: toc.html
    title: Table of Contents
    generation: html
    page:
    - nameUrl: index.html
      title: International Patient Access
      generation: markdown
    - nameUrl: conformance.html
      title: Conforming to this Specification
      generation: markdown
    - nameUrl: using-the-api.html
      title: Using the API
      generation: markdown
      page:
      - nameUrl: access.html
        title: Gaining Access to a Patient Record
        generation: markdown
      - nameUrl: fetching.html
        title: Finding and Retrieving Patient Information
        generation: markdown
      - nameUrl: synchronization.html
        title: Synchronizing Patient Records
        generation: markdown
      - nameUrl: internationalization.html
        title: Internationalization Issues
        generation: markdown
    - nameUrl: security.html
      title: Security and Privacy
      generation: markdown
    - nameUrl: downloads.html
      title: Downloads
      generation: markdown
    - nameUrl: ImplementationGuide-hl7.fhir.uv.ipa.html
      title: IPA ImplementationGuide Resource
      generation: markdown
  parameter:
  - code: copyrightyear
    value: 2022+
  - code: releaselabel
    value: STU1
  - code: path-resource
    value: input/resources
  - code: path-resource
    value: fsh-generated/resources
  - code: path-pages
    value: input/pagecontent
  - code: path-pages
    value: input/intro-notes
  - code: path-pages
    value: fsh-generated/includes
  - code: apply-contact
    value: 'true'
  - code: apply-jurisdiction
    value: 'true'
  - code: apply-publisher
    value: 'true'
  - code: apply-version
    value: 'true'
  - code: show-inherited-invariants
    value: 'false'
  - code: usage-stats-opt-out
    value: 'true'
  - code: excludexml
    value: 'false'
  - code: excludejson
    value: 'false'
  - code: excludettl
    value: 'true'
  - code: excludemap
    value: 'true'
  - code: generate
    value: xml
  - code: generate
    value: json
  - code: logging
    value: progress
  - code: logging
    value: tx
  - code: logging
    value: context
  - code: logging
    value: init
  - code: path-history
    value: http://hl7.org/fhir/uv/ipa/history.html


---

// File: input/examples-yaml/AllergyIntolerance-AllIntExample1.yaml

resourceType: AllergyIntolerance
id: AllIntExample1
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString: IPA AllergyIntolerance Example
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown: This is an allergy intolerance example for the *IPA AllergyIntolerance
      Profile*.
  profile:
  - http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-allergyintolerance
clinicalStatus:
  coding:
  - system: http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical
    version: 4.0.0
    code: active
    display: Active
verificationStatus:
  coding:
  - system: http://terminology.hl7.org/CodeSystem/allergyintolerance-verification
    version: 4.0.0
    code: confirmed
    display: Confirmed
category:
- medication
code:
  coding:
  - system: http://www.nlm.nih.gov/research/umls/rxnorm
    code: '833082'
    display: smallpox (vaccinia) vaccine, live Injectable Solution
  - system: http://fdasis.nlm.nih.gov
    code: 4SV59689SK
  text: SMALLPOX VACCINE
patient:
  reference: Patient/PatientExample1
  display: Lufhir, Meiko
recordedDate: '2019-04-19'


---

// File: input/examples-yaml/AllergyIntolerance-NKAExample.yaml

resourceType: AllergyIntolerance
id: NKAExample
meta:
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: IPA No Known Allergies AllergyIntolerance Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: This is an example AllergyIntolerance using a no-known-allergies code.
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-allergyintolerance'
clinicalStatus:
  coding:
    - system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical'
      code: active
  text: Active
verificationStatus:
  coding:
    - system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification'
      code: confirmed
  text: Confirmed
code:
  coding:
    - system: 'http://snomed.info/sct'
      code: '716186003'
      display: No known allergy
  text: No known allergies
patient:
  reference: Patient/PatientExample1
  display: 'Lufhir, Meiko'
recordedDate: '2022-09-02'

---

// File: input/examples-yaml/Condition-EncounterExample1.yaml

resourceType: Condition
id: EncounterExample1
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString: IPA Condition Example
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown: This is am encounter diagnosis example for the *IPA Condition Profile*.
  profile:
  - http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-condition
clinicalStatus:
  coding:
  - system: http://terminology.hl7.org/CodeSystem/condition-clinical
    code: active
    display: Active
  text: Active
verificationStatus:
  coding:
  - system: http://terminology.hl7.org/CodeSystem/condition-ver-status
    code: confirmed
    display: Confirmed
  text: Confirmed
category:
- coding:
  - system: http://terminology.hl7.org/CodeSystem/condition-category
    code: encounter-diagnosis
    display: Encounter Diagnosis
  text: Encounter Diagnosis
code:
  coding:
  - system: http://hl7.org/fhir/sid/icd-10
    code: R21
  - system: http://snomed.info/sct
    code: '271807003'
  text: Skin rash
subject:
  reference: Patient/PatientExample1
  display: Lufhir, Meiko H Jr., MD
recordedDate: 2018-11


---

// File: input/examples-yaml/Condition-ProblemExample1.yaml

resourceType: Condition
id: ProblemExample1
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString: IPA Problem List Item Example
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown: This is a problem list item example for the *IPA Problem List Item
      Profile*.
  profile:
  - http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-problem-list-item
clinicalStatus:
  coding:
  - system: http://terminology.hl7.org/CodeSystem/condition-clinical
    code: active
    display: Active
  text: Active
verificationStatus:
  coding:
  - system: http://terminology.hl7.org/CodeSystem/condition-ver-status
    code: confirmed
    display: Confirmed
  text: Confirmed
category:
- coding:
  - system: http://terminology.hl7.org/CodeSystem/condition-category
    code: problem-list-item
    display: Problem List Item
  text: Problem List Item
code:
  coding:
  - system: http://hl7.org/fhir/sid/icd-10
    code: L60.0
  - system: http://snomed.info/sct
    code: '400097005'
  text: Ingrowing nail
subject:
  reference: Patient/PatientExample1
  display: Lufhir, Meiko H Jr., MD
recordedDate: 2018-11


---

// File: input/examples-yaml/DocumentReference-USClinicalNoteExample1.yaml

resourceType: DocumentReference
id: USClinicalNoteExample1
meta:
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-documentreference'
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: DocumentReference Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: >-
        This is a DocumentReference example for the *IPA DocumentReference
        Profile*.
status: current
docStatus: final
type:
  coding:
    - system: 'http://loinc.org'
      code: 11506-3
      display: Progress Note
  text: Progress Note
category:
  - coding:
      - system: 'http://loinc.org'
        code: 34109-9
        display: Note
    text: Clinical Note
subject:
  reference: Patient/PatientExample1
  display: 'Lufhir, Meiko'
date: '2019-05-21T20:19:30Z'
author:
  - reference: Practitioner/PractitionerExample1
    display: Marty Seeger
content:
  - attachment:
      contentType: text/html
      url: Binary/ekAJmRWsOeeVsqjgMnmX-5ZTCqyW.NZW3fvSH8mNXZSg3
context:
  period:
    start: '2019-05-21T04:59:00Z'

---

// File: input/examples-yaml/Immunization-ImmExample1.yaml

resourceType: Immunization
id: ImmExample1
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString: IPA Immunization Example
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown: This is an Immunization example for the *IPA Immunization Profile*.
  profile:
  - http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-immunization
identifier:
- system: urn:ietf:rfc:3986
  value: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234
status: completed
vaccineCode:
  coding:
  - system: urn:oid:1.2.36.1.2001.1005.17
    code: FLUVAX
  text: Fluvax (Influenza)
patient:
  reference: Patient/PatientExample1
occurrenceDateTime: '2013-01-10'
primarySource: true
lotNumber: AAJN11K
expirationDate: '2015-02-15'
site:
  coding:
  - system: http://terminology.hl7.org/CodeSystem/v3-ActSite
    code: LA
    display: left arm
route:
  coding:
  - system: http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration
    code: IM
    display: Injection, intramuscular
doseQuantity:
  value: 5
  system: http://unitsofmeasure.org
  code: mg
performer:
- function:
    coding:
    - system: http://terminology.hl7.org/CodeSystem/v2-0443
      code: OP
  actor:
    reference: Practitioner/PractitionerExample1
note:
- text: Notes on adminstration of vaccine
reasonCode:
- coding:
  - system: http://snomed.info/sct
    code: '429060002'


---

// File: input/examples-yaml/Medication-MedExample1.yaml

resourceType: Medication
id: MedExample1
meta:
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medication'
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: Medication Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: This is a Medication example for the *IPA Medication Profile*.
code:
  coding:
    - system: 'http://hl7.org/fhir/sid/ndc'
      code: 16590-619-30
      display: 'PERCOCET, 30 TABLET in 1 BOTTLE (16590-619-30) (package)'
form:
  coding:
    - system: 'http://snomed.info/sct'
      code: '385055001'
      display: Tablet
ingredient:
  - itemCodeableConcept:
      coding:
        - system: 'http://www.nlm.nih.gov/research/umls/rxnorm'
          code: '82063'
          display: oxyCODONE hydrochloride
    strength:
      numerator:
        value: 5
        system: 'http://unitsofmeasure.org'
        code: mg
      denominator:
        value: 1
        system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm'
        code: TAB
  - itemCodeableConcept:
      coding:
        - system: 'http://www.nlm.nih.gov/research/umls/rxnorm'
          code: '161'
          display: Acetaminophen
    strength:
      numerator:
        value: 325
        system: 'http://unitsofmeasure.org'
        code: mg
      denominator:
        value: 1
        system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm'
        code: TAB
batch:
  lotNumber: '658484'
  expirationDate: '2020-07-31'

---

// File: input/examples-yaml/MedicationRequest-MedRecExample1.yaml

resourceType: MedicationRequest
meta:
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationrequest'
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: MedicationRequest Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: >-
        This is a MedicationRequest example for the *IPA MedicationRequest
        Profile*.
id: MedRecExample1
identifier:
  - use: usual
    system: 'urn:oid:1.2.840.114350.1.13.861.1.7.2.798268'
    value: '2454978'
status: active
intent: order
category:
  - coding:
      - system: 'http://terminology.hl7.org/CodeSystem/medicationrequest-category'
        code: outpatient
        display: Outpatient
    text: Outpatient
medicationReference:
  reference: Medication/MedExample1
  display: Percocet tablet
subject:
  reference: Patient/PatientExample1
  display: 'Friend, All'
authoredOn: '2018-09-20T15:41:39Z'
requester:
  reference: Practitioner/PractitionerExample1
  display: Clinician User
recorder:
  reference: Practitioner/PractitionerExample1
  display: Clinician User
dosageInstruction:
  - timing:
      repeat:
        boundsPeriod:
          start: '2018-09-21T04:00:00Z'
      code:
        text: '2100'
    asNeededBoolean: false
    route:
      coding:
        - system: 'http://snomed.info/sct'
          code: '260548002'
          display: Oral
      text: Oral
    doseAndRate:
      - type:
          coding:
            - system: 'http://terminology.hl7.org/CodeSystem/dose-rate-type'
              code: calculated
              display: calculated
          text: calculated
        doseQuantity:
          value: 15
          unit: mg
          system: 'http://unitsofmeasure.org'
          code: mg
      - type:
          coding:
            - system: 'http://terminology.hl7.org/CodeSystem/dose-rate-type'
              code: ordered
              display: ordered
          text: ordered
        doseQuantity:
          value: 10
          unit: mg
          system: 'http://unitsofmeasure.org'
          code: mg

---

// File: input/examples-yaml/MedicationStatement-MedStatementExample1.yaml

resourceType: MedicationStatement
meta:
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationstatement'
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: MedicationStatement Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: >-
        This is a MedicationStatement example for the *IPA MedicationStatement
        Profile*.
id: MedStatementExample1
identifier:
  - use: usual
    system: 'urn:1.2.840.114350.1.13.861.1.7.2.798268'
    value: '5131734'
status: active
medicationReference:
  reference: Medication/MedExample1
  display: Percocet
effectivePeriod:
  start: '2017-04-26T22:00:00Z'
informationSource:
  reference: Practitioner/PractitionerExample1
  display: 'Seeger, Marty'
subject:
  reference: Patient/PatientExample1
  display: 'Lufhir, Meiko'
dosage:
  - timing:
      repeat:
        boundsPeriod:
          start: '2017-04-26T22:00:00Z'
        timeOfDay:
          - '12:00:00'
          - '18:00:00'
    asNeededBoolean: false
    route:
      coding:
        - system: 'http://snomed.info/sct'
          code: '260548002'
          display: Oral
      text: Oral
    doseAndRate:
      - type:
          coding:
            - system: 'http://terminology.hl7.org/CodeSystem/dose-rate-type'
              code: ordered
              display: Ordered
        doseQuantity:
          value: 1
          unit: mL
          system: 'http://unitsofmeasure.org'
          code: mL

---

// File: input/examples-yaml/Observation-LabExample1.yaml

resourceType: Observation
meta:
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation'
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: Observation Lab Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: >-
        This is a Observation example for the *IPA Observation Profile*
        containing a lab result.
id: LabExample1
status: amended
category:
  - coding:
      - system: 'http://terminology.hl7.org/CodeSystem/observation-category'
        code: laboratory
        display: Laboratory
    text: Laboratory
code:
  coding:
    - system: 'http://loinc.org'
      code: 2093-3
      display: 'Cholesterol [Mass/volume] in Serum or Plasma'
  text: Cholesterol
subject:
  reference: Patient/PatientExample1
  display: 'Fhir D Cds Jr., DDS'
effectiveDateTime: '2019-09-23T13:50:39Z'
issued: '2019-09-23T14:50:39Z'
valueQuantity:
  value: 105
  unit: mg/dL
  system: 'http://unitsofmeasure.org'
  code: mg/dL
interpretation:
  - coding:
      - system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation'
        code: A
        display: Abnormal
    text: Abnormal
note:
  - text: From the Results Generator
referenceRange:
  - low:
      value: 128
      unit: mg/dL
      system: 'http://unitsofmeasure.org'
      code: mg/dL
    high:
      value: 250
      unit: mg/dL
      system: 'http://unitsofmeasure.org'
      code: mg/dL
    text: 128 - 250 mg/dL

---

// File: input/examples-yaml/Observation-SmokingExample1.yaml

resourceType: Observation
meta:
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation'
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: Observation social history smoking Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: This is a Observation example for the *IPA Observation Profile*.
id: SmokingExample1
status: final
category:
  - coding:
      - system: 'http://terminology.hl7.org/CodeSystem/observation-category'
        code: social-history
        display: Social History
    text: Social History
code:
  coding:
    - system: 'http://loinc.org'
      code: 72166-2
      display: Tobacco smoking status
    - system: 'http://snomed.info/sct'
      code: '365980008'
      display: Finding of tobacco use and exposure (finding)
  text: Smoking History
subject:
  reference: Patient/PatientExample1
  display: 'Test, Patient FHIR'
effectivePeriod:
  start: '2009-01-01'
issued: '2021-05-11T05:00:00Z'
performer:
  - reference: Practitioner/PractitionerExample1
    display: Dr. FHIR
valueCodeableConcept:
  coding:
    - system: 'http://snomed.info/sct'
      code: '449868002'
      display: Smokes tobacco daily
  text: Every Day
component:
  - code:
      coding:
        - system: 'http://loinc.org'
          code: 81228-9
          display: Tobacco product
      text: Type
    valueCodeableConcept:
      coding:
        - system: 'http://snomed.info/sct'
          code: '65568007'
          display: Cigarette Smoker
      text: Cigarettes
  - code:
      coding:
        - system: 'http://loinc.org'
          code: 81228-9
          display: Tobacco product
      text: Type
    valueCodeableConcept:
      coding:
        - system: 'http://snomed.info/sct'
          code: '81703003'
          display: Chews Tobacco
      text: Chew
  - code:
      coding:
        - system: 'http://snomed.info/sct'
          code: '401201003'
          display: Cigarette pack-years (observable entity)
      text: Cigarette pack-years (observable entity)
    valueQuantity:
      value: 3.72
      unit: '{PackYears}'
      system: 'http://unitsofmeasure.org'
      code: '{PackYears}'
  - code:
      coding:
        - system: 'http://loinc.org'
          code: 88029-4
          display: Tobacco use duration
      text: Years Used
    valueQuantity:
      value: 12.4
      unit: Years Used
      system: 'http://unitsofmeasure.org'
      code: a
  - code:
      coding:
        - system: 'http://loinc.org'
          code: 8663-7
          display: Cigarettes smoked current (pack per day) - Reported
        - system: 'http://snomed.info/sct'
          code: '266918002'
          display: Tobacco smoking consumption (observable entity)
      text: Packs/Day
    valueQuantity:
      value: 0.3
      unit: Packs/Day
      system: 'http://snomed.info/sct'
      code: '228963008'

---

// File: input/examples-yaml/Observation-VitalSignsExample1.yaml

resourceType: Observation
meta:
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation'
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: Observation Vital Signs Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: >-
        This is a Observation example for the *IPA Observation Profile*
        containing the vital sign for body weight.
id: VitalSignsExample1
status: final
category:
  - coding:
      - system: 'http://terminology.hl7.org/CodeSystem/observation-category'
        code: vital-signs
        display: Vital Signs
    text: Vital Signs
code:
  coding:
    - system: 'http://loinc.org'
      code: 29463-7
      display: Body weight
    - system: 'http://loinc.org'
      code: 3141-9
      display: Body weight Measured
    - system: 'http://loinc.org'
      code: 8716-3
      display: Vital signs
  text: Weight
subject:
  reference: Patient/PatientExample1
  display: Meiko Lufhir
effectiveDateTime: '2019-09-05T20:00:00Z'
issued: '2019-09-05T20:49:27Z'
performer:
  - reference: Practitioner/PractitionerExample1
    display: 'Marty Seeger, MD'
valueQuantity:
  value: 50
  unit: kg
  system: 'http://unitsofmeasure.org'
  code: kg

---

// File: input/examples-yaml/Patient-PatientExample1.yaml

resourceType: Patient
id: PatientExample1
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString: IPA Patient Example
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown: This is a Patient example for the *IPA Patient Profile*.
  profile:
  - http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient
identifier:
- use: usual
  type:
    coding:
    - system: http://terminology.hl7.org/CodeSystem/v2-0203
      code: MR
  system: urn:oid:2.16.840.1.113883.19.5
  value: '12345'
- use: usual
  system: urn:oid:1.2.840.114350.1.13.861.1.7.5.737384.4399
  value: '21890'
active: true
name:
- use: usual
  text: Meiko Lufhir Jr., PhD
  family: Lufhir
  given:
  - Meiko
  suffix:
  - JR.
  - PHD
telecom:
- system: phone
  value: 321-544-2222
  use: home
- system: phone
  value: 321-841-3333
  use: work
- system: email
  value: meikolu.fhir@gmail.com
gender: female
birthDate: '1978-03-22'
address:
- use: home
  line:
  - 100 Main St
  - G-442
  city: Madison
  district: DANE
  state: WI
  postalCode: '53703'
  country: USA
maritalStatus:
  coding:
  - system: http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
    code: M
    display: Married
  text: Married
generalPractitioner:
- reference: Practitioner/PractitionerExample1
  display: Amber Hxl, MD


---

// File: input/examples-yaml/Practitioner-PractitionerExample1.yaml

resourceType: Practitioner
meta:
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitioner'
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: Practitioner Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: This is a Practitioner example for the *IPA Practitioner Profile*.
id: PractitionerExample1
identifier:
  - use: usual
    system: 'urn:oid:1.2.840.114350.1.13.861.1.7.5.737384.295'
    value: '1538344056'
active: true
name:
  - use: usual
    text: Marty Seeger
    family: Seeger
    given:
      - Marty
gender: male

---

// File: input/examples-yaml/PractitionerRole-PractitionerRoleExample1.yaml

resourceType: PractitionerRole
meta:
  profile:
    - 'http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitionerrole'
  extension:
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-name'
      valueString: PractitionerRole Example
    - url: 'http://hl7.org/fhir/StructureDefinition/instance-description'
      valueMarkdown: >-
        This is a PractitionerRole example for the *IPA PractitionerRole
        Profile*.
id: PractitionerRoleExample1
active: true
practitioner:
  reference: Practitioner/PractitionerExample1
  display: Marty Seeger
code:
  - coding:
      - system: 'http://terminology.hl7.org/CodeSystem/practitioner-role'
        code: doctor
        display: Doctor
    text: Physician
specialty:
  - coding:
      - system: 'http://snomed.info/sct'
        code: '419772000'
        display: Family Practice
    text: Family Practice
  - coding:
      - system: 'http://snomed.info/sct'
        code: '419192003'
        display: Internal medicine
    text: Internal Medicine

---

