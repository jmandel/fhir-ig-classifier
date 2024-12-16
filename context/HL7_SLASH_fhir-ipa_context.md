File: repos/HL7_SLASH_fhir-ipa/input/includes/condition-codes-safety.md

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

File: repos/HL7_SLASH_fhir-ipa/input/includes/doc-gen.md

A patient's record may contain any number and type of documents, from interoperable C-CDA documents to binary PDFs. The [$docref operation](OperationDefinition-docref.html) returns DocumentReference resources describing these existing documents, but can also cause a document to be newly generated and returned.

If a server conforms to this specification and also to IPS, this API can be used to generate IPS documents, 
using the [$docref operation](OperationDefinition-docref.html) with a specific code as defined in the [IPS implementation guide](http://hl7.org/fhir/uv/ips/principles.html#publishing-or-accessing-the-ips).
{:.bg-info}

See the [$docref operation](OperationDefinition-docref.html) definition for the details.


---

File: repos/HL7_SLASH_fhir-ipa/input/includes/ips-relationship.md

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

File: repos/HL7_SLASH_fhir-ipa/input/includes/med-guidance.md

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

File: repos/HL7_SLASH_fhir-ipa/input/includes/new-content-note.md

<div class="new-content" markdown="1">
*Where possible, new or updated content is highlighted in green for review. This highlighting will be removed prior to publication.*


---

File: repos/HL7_SLASH_fhir-ipa/input/includes/patient-access-rules.md

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

File: repos/HL7_SLASH_fhir-ipa/input/includes/privacy.md

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

File: repos/HL7_SLASH_fhir-ipa/input/includes/safety.md


Accessing Patient records raises many questions about safety. Accessing the wrong patient records, missing correct records, displaying records incorrectly, or having non-authorized actors access records can potentially harm patients. The [Implementer Safety Checklist page]({{site.data.fhir.path}}safety.html) gathers clinical safety advice acquired from experience of accessing health records across
FHIR APIs like this one. All implementers should carefully consider each of the items on the checklist. Getting these issues right is necessary, but more is needed to deliver safe patient applications.

Note that software can misinterpret health care records, potentially leading to dire consequences. However, this specification does not provide enough information about accessing records to support interpreting the content. Implementers must consult their country-specific guides for this.

#### Patient matching
When [synchronizing](synchronization.html) a patient record, it's important to match not just a pre-existing patient identifier but also patient demographics. Additional care should be taken for patient merge and un-merge scenarios.




---

File: repos/HL7_SLASH_fhir-ipa/input/includes/StructureDefinition-ipa-template-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/access.md

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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/ActorDefinition-client-intro.md

### IPA Client

The IPA client - also known as a requestor, is an application that initiates a data access request to retrieve patient data. It is the client in a client-server interaction. The terms “app”, “patient app”, "requestor" and “client” are used interchangeably throughout this guide and are not meant to limit this actor to patient and provider apps. Payers and other users can use the same technology. Consider these terms a short-hand notation for a “user application”.

---

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/ActorDefinition-server-intro.md

### IPA Server

The IPA Server - also known as a responder, responds to the data access request providing patient data. It can be thought of as the server in a client-server interaction. The terms “server”, “IPA FHIR server”, and “EHR” are used interchangeably throughout this guide and are not meant to limit this actor to electronic health record systems. HIEs, care coordination platforms, population health systems, etc., can use the same technology. Consider these terms a short-hand notation for an “interoperable healthcare platform”.

---

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/change-log.md

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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/conformance.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/downloads.md

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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/fetching.md

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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/ImplementationGuide-hl7.fhir.uv.ipa.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/index.md

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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/internationalization.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/security.md


Servers and clients SHALL follow the security requirements and SHOULD follow the security best practices as outlined in [FHIR Security]({{site.data.fhir.path}}security.html) and elsewhere.

### Patient Privacy

{% include privacy.md %}

### Patient Safety

{% include safety.md %}



---

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-allergyintolerance-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-condition-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-documentreference-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-immunization-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-medicationrequest-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-medicationstatement-intro.md

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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-observation-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-observation-notes.md

<sup>1</sup>See the [Occupational Data for Health (ODH) profiles](http://hl7.org/fhir/us/odh/)

---

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-patient-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-practitioner-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-practitionerrole-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/StructureDefinition-ipa-problem-list-item-intro.md


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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/synchronization.md

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

File: repos/HL7_SLASH_fhir-ipa/input/pagecontent/using-the-api.md

  <!-- using-the-api.md: -->
  
- [Gaining Access to a Patient Record](access.html)\: This page documents how to access a patient record securely.
- [Finding and Retrieving Patient Information](fetching.html)\: This page documents how to find and retrieve information about a patient and generate documents on request.
- [Synchronizing Patient Records](synchronization.html)\: This page describes how to maintain a synchronized copy of the patient's information safely.
- [Internationalization Issues](internationalization.html)\: This page discusses how to best support a wide range of international applications.


---

