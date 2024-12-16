File: repos/HL7_SLASH_davinci-atr/input/pagecontent/background.md

### DaVinci
DaVinci is an HL7-sponsored project that brings together the U.S. payers, providers, and technology suppliers (including EHR vendors)  to help payers and providers to positively impact clinical, quality, cost, and care management outcomes using FHIR-related technologies. The project organizes meetings (face-to-face and conference calls) as well as connectathons to find ways to leverage FHIR technologies to support and integrate value-based care (VBC) data exchange across communities. DaVinci identifies value-based care use cases of interest to its member and the community as a whole.

The process that Da Vinci has adopted includes: 
1. identify business, clinical, technical and testing requirements, 
2. develop and ballot a FHIR based implementation guide (IG),
3. develop a Reference Implementation (RI) that is used to demonstrate that the concepts in the IG are possible to implement
4. pilot the IG
5. support the IG's production use to enable data exchange to support interoperability for value-based care

Additional information about Da Vinci, its members, the use cases and the implementation guides being developed can all be found on the [HL7 website](http://www.hl7.org/about/davinci). Meeting minutes and other materials can be found on the [Da Vinci Confluence page](https://confluence.hl7.org/display/DVP). The guiding principles for Da Vinci can be found [here](https://confluence.hl7.org/display/DVP/Da+Vinci+Clinical+Advisory+Council+Members?preview=/66940155/66942916/Guiding%20Principles%20for%20Da%20Vinci%20Implementation%20Guides.pdf).

### Systems
The implementation guide defines the responsibilities of the two types of systems involved in an ATR solution:

**Producer systems** are typically Payer systems but could theoretically be any system responsible for producing a Member Attribution List.These systems typically act as servers. 

**Consumer systems** are typically Provider systems that act on behalf of provider organizations who retrieve the Member Attribution List from a Producer. These systems typically act as clients.

### Underlying Specifications

This guide is based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard, as well as the [Bulk Data IG]({{site.data.fhir.ver.bulkig}}/index.html) and [SMART on FHIR Backend Services Authorization]({{site.data.fhir.ver.smartapplaunch}}/index.html) specifications, which build additional capabilities on top of FHIR.  This architecture is intended to maximize the number of clinical systems that conform to this guide as well as to allow for easy growth and extensibility of system capabilities in the future.

Implementers of this specification therefore need to understand some basic information about these specifications.


#### FHIR

This implementation guide uses terminology, notations and design principles that are
specific to FHIR.  Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR as well
as general guidance on how to read FHIR specifications.  Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following
prior to reading the rest of this implementation guide.

* [FHIR overview]({{site.data.fhir.path}}overview.html)
* [Developer's introduction]({{site.data.fhir.path}}overview-dev.html) (or [Clinical introduction]({{site.data.fhir.path}}overview-clinical.html))
* [FHIR data types]({{site.data.fhir.path}}datatypes.html)
* [Using codes]({{site.data.fhir.path}}terminologies.html)
* [References between resources]({{site.data.fhir.path}}references.html)
* [How to read resource & profile definitions]({{site.data.fhir.path}}formats.html)
* [Base resource]({{site.data.fhir.path}}resource.html)

This implementation guide supports [FHIR R4]({{site.data.fhir.path}}index.html) versions of the FHIR standard. Initial implementations will focus on FHIR R4.

#### Data Model
This section maps the Member Attribution List data to FHIR resources to introduce resources that will be used in the implementation guide. 

{% include img.html img="maldata.png" caption="Figure 1: Member Attribution List Data Model" %}


**NOTE**: In the above data model, the cardinality on the Patient is shown as 1..* where as in the atr-group profile it is shown as 0..* for the Group.member data element. This is because a valid Member Attribution List **SHALL** have atleast one member as part of the list. However a Member Attribution List can be created with no members initially and members can be added or removed as part of the Member Attribution List creation and finalization process.
 
The above data model is used to define the [Member Attribution List data](usecases.html#member-attribution-list-workflows-and-definitions) that is exchanged as part of the Member Attribution List.
Implementers should familiarize themselves with the FHIR resources used within the guide based on the above data model.

<table>
  <thead>
    <tr>
      <th>FHIR R4</th>
    </tr>
  </thead>
  <tr>
    <td>
      <a href="{{site.data.fhir.path}}coverage.html">Coverage</a><br/>
      <a href="{{site.data.fhir.path}}group.html">Group</a><br/>
      <a href="{{site.data.fhir.path}}location.html">Location</a><br/>
      <a href="{{site.data.fhir.path}}organization.html">Organization</a><br/>
      <a href="{{site.data.fhir.path}}patient.html">Patient</a><br/>
      <a href="{{site.data.fhir.path}}relatedperson.html">RelatedPerson</a><br/>
      <a href="{{site.data.fhir.path}}practitioner.html">Practitioner</a><br/>
      <a href="{{site.data.fhir.path}}practitionerrole.html">PractitionerRole</a><br/>
    </td>
  </tr>
</table>

#### US Core IG

This implementation guide also builds on the US Core Implementation Guide where profiles exist for the resources identified in the data model above and implementers need to familiarize themselves with these profiles in those Implementation Guides.
<table>
  <tr>
    <td><a href="{{site.data.fhir.ver.uscoreR4}}/index.html">US Core 3.1.1 - FHIR R4 based IG</a></td>
  </tr>
</table>


#### Bulk Data IG
Bulk Data IG will be used to retrieve the Member Attribution List and related data. Bulk Data IG is used as the data could be large for some Member Attribution Lists. In addition, the requests and responses in existing workflows are asynchronous. Other Da Vinci implementation guides such as PDex, CDex are not used as part of this IG for Member Attribution List retrieval.

#### SMART on FHIR Backend Services Authorization
The SMART on FHIR Backend Services Authorization is used to secure all the system interactions between the Producers and the Consumers.


---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/changes.md

### STU2 Changes

The following is a list of all the changes from STU1 to STU2.

#### New Additions for STU2

1. [Addition of new scenario#2 (STU2 Workflow) user story for providers to create attribution lists in payers systems](usecases.html#member-attribution-list-exchange-for-scenario-2-stu2-workflow)
2. Added additional usage scenarios for Member Attribution List and Bulk Data Export in DPC, BCDA and Pdex initiatives[Ticket #37764](usecases.html#use-of-member-attribution-list-for-cms-data-at-point-of-care-dpc-use-case) 
3. Addition of a generalized DaVinci Data Export operation for enabling bulk data export across multiple use cases[Ticket #37764](OperationDefinition-davinci-data-export.html)
4. [Addition of member-add operation](OperationDefinition-member-add.html)
5. [Addition of member-remove operation](OperationDefinition-member-remove.html)
6. [Added usage APIs for member-add and member-remove operations](spec.html#member-attribution-list-reconciliation-apis)
7. [Addition of capability to create Groups, Patients, Practitioners by Consumer in the Producer system](CapabilityStatement-atr-producer.html#resource-summary)
8. [Ability to provide provenance via X-Provenance-Header during POST and PUT operations for creation of data](CapabilityStatement-atr-producer.html#rest-behavior)
9. Added CodeSystem and ValueSets for Characteristics.code for Davinci Patient List [Ticket #28806](ValueSet-davinci-group-characteristic.html)
10. Added [Subscription Requirements](subscription.html) to enable subscriptions and notifications for Member Attribution List.
11. Added generic [DaVinci Patient List capability](StructureDefinition-davinci-patient-list.html) that can be used for a generic patient list. 
12. Modified [Member Attribution List](StructureDefinition-atr-group.html) to inherit from genreric [DaVinci Patient List](StructureDefinition-davinci-patient-list.html) 
11. [Created Change Log](changes.html) and Publication Request for STU2.

#### Changes to existing IG

1. [Use DaVinci Data Export instead of Bulk Data $export operation.](spec.html#requirements-for-implementation-of-the-davinci-data-export-operation)
2. Add clarifications on APIs for DaVinci Data Export operation. [Ticket #36717](spec.html#requirements-for-implementation-of-the-davinci-data-export-operation)
3. [Add clarifications on handling large groups.](StructureDefinition-atr-group.html#introduction)
6. Updated the dependencies to fix US Core to 3.1.1 and Bulk Data IG to 1.0.1 [Ticket #38804]
7. Updated Coverage profile to add Member Identifier [Ticket #37836](StructureDefinition-atr-coverage.html)
8. Updated Examples to use proper code system for NPI [Ticket #34297]
9. [Updated SMART on FHIR Guidance for authorization.](spec.html#smart-on-fhir-backend-services-authorization)
10. [Updated Producer and Consumer capability statements to add X-Provenance Header support.](CapabilityStatement-atr-producer.html#rest-behavior)
11. Updated FHIR Build template to use DaVinci template.

#### Tickets implemented in STU2


* [FHIR-39898](https://jira.hl7.org/browse/FHIR-39898) - Correct Workflow Diagram for Scenario 2 (Step 5 unclear)
* [FHIR-40127](https://jira.hl7.org/browse/FHIR-40127) - Ability to query a Payer about attribution of a particular patient(s)
* [FHIR-40128](https://jira.hl7.org/browse/FHIR-40128) - Add Subscription functionality
* [FHIR-42799](https://jira.hl7.org/browse/FHIR-42799) - Clarify STU2 workflow
* [FHIR-42860](https://jira.hl7.org/browse/FHIR-42860) - $davinci-data-export operation not defined for Attribution List import
* [FHIR-41855](https://jira.hl7.org/browse/FHIR-41855) - Typo in slice name einIdentifier
* [FHIR-39664](https://jira.hl7.org/browse/FHIR-39664) - API for change request in scenario #1
* [FHIR-40209](https://jira.hl7.org/browse/FHIR-40209) - Narrative Content needs Technical Editing
* [FHIR-39955](https://jira.hl7.org/browse/FHIR-39935) - Data Model shows RelatedTo but it is not present in the profile
* [FHIR-39740](https://jira.hl7.org/browse/FHIR-39740) - Wrong Action for Member Remove profile
* [FHIR-39927](https://jira.hl7.org/browse/FHIR-39927) - Update DaVinci-data-export to be a profile of Bulk Export
* [FHIR-39667](https://jira.hl7.org/browse/FHIR-39667) - Clarify how to remove a member
* [FHIR-39666](https://jira.hl7.org/browse/FHIR-39666) - Clarify source of truth for scenario#1 and #2
* [FHIR-40129](https://jira.hl7.org/browse/FHIR-40129) - Spell out PTO Acronym
* [FHIR-40670](https://jira.hl7.org/browse/FHIR-40670) - Clarify PTO
* [FHIR-41377](https://jira.hl7.org/browse/FHIR-41377) - Add purpose of use in Group.member as extension
* [FHIR-40206](https://jira.hl7.org/browse/FHIR-40206) - Large number of technical corrections
* [FHIR-39669](https://jira.hl7.org/browse/FHIR-39669) - Wrong description in add operation
* [FHIR-39670](https://jira.hl7.org/browse/FHIR-39670) - Wrong description in remove operation
* [FHIR-42147](https://jira.hl7.org/browse/FHIR-42147) - Remove requirement to reject requests without minimal resource types
* [FHIR-40213](https://jira.hl7.org/browse/FHIR-40213) - Representation of NPI and TIN
* [FHIR-39921](https://jira.hl7.org/browse/FHIR-39921) - davinic-data-export requirements
* [FHIR-39663](https://jira.hl7.org/browse/FHIR-39663) - List push vs pull
* [FHIR-41858](https://jira.hl7.org/browse/FHIR-41858) - TIN Identifier and NPI Identifier should have a type on slice
* [FHIR-42861](https://jira.hl7.org/browse/FHIR-42861) - Should EMRs be able to create Group resource in payer
* [FHIR-39739](https://jira.hl7.org/browse/FHIR-39739) - Clarify responsibility for adding and removing members
* [FHIR-39665](https://jira.hl7.org/browse/FHIR-39665) - Specify what remove operation actually does
* [FHIR-39668](https://jira.hl7.org/browse/FHIR-39668) - Optional params in remove operation
* [FHIR-39934](https://jira.hl7.org/browse/FHIR-39934) - Change text box in Figure 3
* [FHIR-39896](https://jira.hl7.org/browse/FHIR-39896) - US Core depeendency is 3.0.0 but should be 3.1.1
* [FHIR-39741](https://jira.hl7.org/browse/FHIR-39741) - Text updates
















---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/credits.md

### Credits
Primary authors STU2:

* Nagesh Bashyam (Drajer LLC)

Primary authors STU1:

* Nagesh Bashyam (Drajer LLC)
* Brett Marquard (WaveOne Associates)


Project leads:

* David Degandi (Cambia Health Solutions)
* Yan Heras (Optimum eHealth)
* Viet Nguyen (Stratametrics, LLC)

Project management and coordination:

* Dana Marcelonis (Point of Care Partners)
* Jocelyn Keegan (Point of Care Partners)
* Derrin Ritchie (Point of Care Partners)


Technical support and guidance:

* Llyod Mckenzie (Gevity Consulting Inc)
* Grahame Grieve (Health Intersections)

This implementation guide was the work of the twenty-two founding Da Vinci Project (http://www.hl7.org/about/davinci/index.cfm?ref=common) member organizations.

Project participants included:

* Aegis (Richard Ettema, Sandra Vance)
* Allscripts (Emma Jones, Jeffrey Danford)
* Blue Cross Blue Shield of Alabama (Tony Benson, Kevin Lambert, Gini McGlothin, Morry Payne, Clarissa Winchester)
* Cerner (Hans Buitendijk, Kevin Shekleton, Michelle Miller)
* Cambia Health Solutions (John Staeleens)
* Epic (Danielle Friend, Isaac Vetter, Spencer Utley)
* Humana (Patrick Murtha)
* MultiCare (Anna Taylor)
* Aetna (Archana Srinivasan)

Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm and expertise to this work.

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/downloads.md

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

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/index.md

{% raw %}
{% endraw %}
<!--ReleaseHeader-->
<!--EndReleaseHeader-->
 

### Overview
Member Attribution (ATR) lists are used between Payers and Providers for implementing risk-based contracts, value based contracts, care gap closures and quality reporting. The processes of establishing and exchanging Member Attribution Lists are complex and time consuming. Currently there are no standards in use for establishing and exchanging risk-based contract member lists between payers and providers. The most common method in use today involves the creation of files (CSVs, txt etc) and exchanging them using various methods such as Email and Secure File Transfer Protocol (SFTP).This implementation guide will use HL7 FHIR to specify standards for the exchange of Member Attribution Lists between providers and payers. The list can be used by providers and payers to implement use cases for Value Based Contracts (VBC), Quality Reporting, Da Vinci Payer Data Exchange (PDex) and Da Vinci Clinical Data Exchange (CDex) among others. 

The purpose of this implementation guide is to define the mechanisms (APIs, protocols), data structures and value sets to be used for exchanging the Member Attribution List. The Member Attribution List typically contains the following information:

* Plan/Contract Information which is the basis for the Member Attribution list
* Patient Information
* Attributed Individual Provider Information
* Attributed Organization Information
* Member and Subscriber Coverage Information

This implementation guide is designed to allow 

* Exchange of a Full Member Attribution Lists.
* Requesting changes to existing Member Attribution Lists.
* Request and receive notifications of changes to Member Attribution Lists.


### Content and organization
The implementation guide is organized into the following sections:

* [Use Cases and Overview](usecases.html) describes the intent of the implementation guide, gives examples of its use and provides a high-level overview of expected process flow
* [Technical Background](background.html) describes the other specifications this implementation guide relies on. It also indicates what developers should read and understand prior to implementing this specification
* [Formal Specification](spec.html) covers the detailed implementation requirements and conformance expectations
* [Artifacts](artifacts.html) introduces and provides links to the [FHIR R4](artifacts.html) profiles, search parameters and other FHIR artifacts used in this implementation guide
* [Downloads](downloads.html) - provides downloadable versions of this and other specifications as well as other useful files
* [Credits](credits.html) identifies the individuals and organizations involved in developing this implementation guide

### Dependencies
This implementation guide relies on the following other specifications:
* **[FHIR R4]({{site.data.fhir.path}})** - The 'current' official version of FHIR as of the time this implementation guide was published.  See the [background page](background.html#fhir) for key pieces of this specification that implementers should be familiar with.
* **[US Core STU3.1.1]({{site.data.fhir.ver.uscoreR4}}/index.html)** - The US Core version based on FHIR R4.
* **[Bulk Data IG]({{site.data.fhir.ver.bulkig}}/index.html)** - The Bulk Data Implementation Guide that will be leveraged as part of this IG.
* **[SMART on FHIR Backend Services Authorization]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html)** - Security protocols to be used when exchanging the Member Attribution List.

This implementation guide defines additional constraints and usage expectations beyond the information found in these base specifications.

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/OperationDefinition-attribution-status-intro.md


### Introduction

This operation is used to retrieve the attribution status for a specific member. 
This allows the consumer (client) to retrieve member attribution status as part of work flows.


**Implementation Details**

The client (consumer) can pass a memberId or a patientReference which is a Reference to the patient resource in the Producer's system when querying for the attribution data. The Producer is supposed to return the attribution data for the individual member in a Bundle as part of the return value from the operation. If the member is not part of the Group or the client does not have appropriate privileges to query the Group, then an appropriate OperationOutcome would need to be returned. 
Similar to any FHIR operation, Consumers need to obtain authorization to successfully invoke the operation. 

**APIs : Attribution Status :**

POST [Base FHIR Url]/Group/[id]/$attribution-status

Producers **SHALL** return values from the operation as per the [FHIR Operation Response Specification](https://hl7.org/fhir/operations.html#response).

The returned resource from the above operation is a Bundle resource which contains [Member Attribution List Data](usecases.html#member-attribution-list-workflows-and-definitions) for a specific patient.



---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/OperationDefinition-confirm-attribution-list-intro.md




### Introduction

This operation is used to indicate to a Producer that the Consumer does not have any more changes to be made to the Attribution List using the reconciliation APIs member-add and member-remove.

**Implementation Requirements**

When the method is invoked by the Consumer, the Producer acknowledges the operation with a HTTP status code of 201 Accepted.
The Producer may change the status of the Attribution List to "final" indicating that no more changes will be made via the member-add and member-remove APIs. The Producer may make additional changes to the Attribution List before changing the status to final.
Similar to any FHIR operation, Consumers need to obtain authorization to successfully invoke the operation. 

**APIs : Confirm Attribution List :**

POST [Base FHIR Url]/Group/[id]/$confirm-attribution-list

Producers **SHALL** return values from the operation as per the [FHIR Operation Response Specification](https://hl7.org/fhir/operations.html#response)


---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/OperationDefinition-davinci-data-export-intro.md

### Introduction


This operation is a profiled version of the [Bulk Data Export Operation]({{site.data.fhir.ver.bulkig}}/index.html)). The parameters defined in the base Bulk Data Export operation are reused in this specification.

The operation is being proposed as a generic export mechanism for multiple DaVinci use cases. Each use case will  define the specific content to be exported using the export operation. The davinci-data-export operation is being defined to allow the flexibility to DaVinci use cases to specify the type of content that needs to be exported. The existing $export in the Bulk Data IG limits the exporting of data to the Patient Compartment and a server implementing $export cannot change the content being returned for each use case unless the variations are specified in the Bulk Data export parameters. 
Similar to any FHIR operation, Consumers need to obtain authorization to successfully invoke the operation. 

Each DaVinci use case as part of its implementation guide can define the exportType parameter and the behavior expected.
For Member Attribution List (ATR) IG, this is specified in the [davinci-data-export requirements](spec.html#requirements-for-implementation-of-the-davinci-data-export-operation). 

Producers **SHALL** return values from the operation as per the [FHIR Operation Response Specification](https://hl7.org/fhir/operations.html#response)

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/OperationDefinition-member-add-intro.md



### Introduction

This operation is used to add a member along with the attributed provider to the Member Attribution List.
This allows the consumer (client) to add members to the Group during the reconciliation process.


**Implementation Requirements**

The following combinations of parameters SHALL be supported by the server implementing the operation.

* memberId + providerNpi: Adds the member and the attributed provider to the Attribution List
* memberId + ProviderNpi + attributionPeriod: Adds the member, attributed provider and the attribution period to the Attribution List
* patientReference + providerReference: Adds the member and the attributed provider to the Attribution List
* patientReference + providerReference + attributionPeriod: Adds the member, attributed provider and the attribution period to the Attribution List

Similar to any FHIR operation, Consumers need to obtain authorization to successfully invoke the operation. 

#### Effect of Attribution List Status on the member-add operation

* The Producer **SHALL** allow the member-add operation only when the attribution list status is "draft". 

* When the attribution list status is "final" the Producer **SHALL** reject the operation with appropriate OperationOutcome.


**APIs : Member Add :**

POST [Base FHIR Url]/Group/[id]/$member-add

Producers **SHALL** return values from the operation as per the [FHIR Operation Response Specification](https://hl7.org/fhir/operations.html#response).



---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/OperationDefinition-member-remove-intro.md




### Introduction

This operation is used to remove a member along with the attributed provider from the Member Attribution List.
This allows the consumer (client) to remove members from the Group during the reconciliation process.


**Implementation Requirements**

The following combinations of parameters SHALL be supported by the server implementing the operation.

* memberId only: Removes all attributions for the Member specified by the MemberId 
* memberId + providerNpi: Removes all attributions for the combination of Member and Provider specified
* patientReference: Removes all attributions for the Member 
* patientReference + providerReference: Removes all attributions for the combination of Member and Provider specified
* patientReference + providerReference + coverageReference: Removes the attribution for the combination of Member and Provider and Coverage resources

#### Effect of Attribution List Status on the member-remove operation

* The Producer **SHALL** allow the member-remove operation only when the attribution list status is "draft". 

* When the attribution list status is in a "draft" status, member-remove operations will change the member's active flag to false, indicating the the member is going to be removed from the list, however as part of the data exchange the member **SHALL** be included in the list as long as the status is draft.

* Once the list has a status of final, the producer **SHOULD** remove the inactive members from the list and may only retain the active members. 

* When the attribution list status is "final" the Producer **SHALL** reject the operation with appropriate OperationOutcome.


**APIs : Member Remove :**

POST [Base FHIR Url]/Group/[id]/$member-remove

Producers **SHALL** return values from the operation as per the [FHIR Operation Response Specification](https://hl7.org/fhir/operations.html#response).



---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/spec.md

This section of the implementation guide defines the specific conformance requirements for systems wishing to conform to this Member Attribution List  implementation guide.  The bulk of it focuses on the implementation of  the [Bulk Data IG]({{site.data.fhir.ver.bulkig}}/index.html) to meet Member Attribution List use-cases.  It also describes the use of [SMART on FHIR Backend Services Authorization]({{site.data.fhir.ver.smartapplaunch}}/index.html) and provides guidance on privacy, security and other implementation requirements.


### Context

#### Pre-reading
Before reading this formal specification, implementers should first familiarize themselves with two other key portions of the specification:

* The [Use Cases & Overview](usecases.html) page provides context for what this formal specification is trying to accomplish and will give a sense of both the business context and general process flow enabled by the formal specification below.

* The [Technical Background](background.html) page provides information about the underlying specifications and indicates what portions of them should be read and understood to have the necessary foundation to understand the constraints and usage guidance described here.


#### Conventions
This implementation guide uses specific terminology to flag statements that have relevance for the evaluation of conformance with the guide:

* **SHALL** indicates requirements that must be met to be conformant with the specification.

* **SHOULD** indicates behaviors that are strongly recommended (and which may result in interoperability issues or sub-optimal behavior if not adhered to), but which do not, for this version of the specification, affect the determination of specification conformance.

* **MAY** describes optional behaviors that are free to consider but where there is no recommendation for or against adoption.


#### Systems

This implementation guide sets expectations for two types of systems:

* **Producer systems** are typically Payer systems but could theoretically be any system responsible for producing a Member Attribution List. These systems typically act as servers. 

* **Consumer systems** are typically Provider systems that act on behalf of provider organizations who retrieve the Member Attribution List from Producer. These systems typically act as clients.

The requirements and expectations described here are not intended to be exhaustive. Producers and Consumers could potentially support additional resources and extensions, etc.  The purpose of this implementation guide is to establish a baseline of expected behavior and data elements that communication partners can rely on and then build from.  Future versions of this specification will evolve based on implementer feedback.

#### Claiming Conformance 

Producers and Consumers asserting conformance to this implementation guide have to implement the requirements outlined in [Producer Capability Statement](CapabilityStatement-atr-producer.html) and [Consumer Capability Statement](CapabilityStatement-atr-consumer.html) respectively. The following definition of MUST SUPPORT is to be used in the implementation of the requirements.

##### MUST SUPPORT Definition

* Producers **SHALL** be capable of populating all data elements as specified by the profiles and are returned using the specified APIs in the capability statement.
* Consumers **SHALL** be capable of processing resource instances containing the MUST SUPPPORT data elements without generating an error or causing the application to fail. In other words Consumers **SHOULD** be capable of displaying the data elements for human use or storing it for other purposes.
* In situations where information on a particular data element is not present and the reason for absence is unknown, Producers **SHALL NOT** include the data elements in the resource instance returned from executing the API requests.
* When accessing Member Attribution Lists, Consumers **SHALL** interpret missing data elements within resource instances as data not present in the Producer's system.


#### Profiles
This specification makes significant use of [FHIR profiles]({{site.data.fhir.path}}profiling.html), search parameter definitions and terminology artifacts to describe the content to be shared as part of Member Attribution List interactions. The implementation guide is based on FHIR [R4]({{site.data.fhir.path}}) and profiles are listed for each interaction. 

The full set of profiles defined in this implementation guide can be found by following the links on the [FHIR Artifacts](artifacts.html) page.


#### US Core
This implementation guide also leverages the [US Core]({{site.data.fhir.ver.uscoreR4}}/index.html) set of profiles defined by HL7 for sharing non-veterinary EMR individual health data in the U.S.  Where US Core profiles exist, this Guide either leverages them directly or uses them as a base for any additional constraints needed to support the Member Attribution List use cases.  If no constraints are needed, this IG doesn't define any profiles.

Where US Core profiles do not yet exist (e.g. for Coverage, Group), profiles have been created that try to align with existing US Core profiles in terms of elements exposed and terminologies used.



#### Requirements for Implementation of the $davinci-data-export operation
 
The Bulk Data Export async pattern is used by this IG for the implementation of the davinci-data-export operation. The actual Bulk Data export operation is not directly used in this IG.

Producer systems SHALL support the [$davinci-data-export](OperationDefinition-davinci-data-export.html) operation for Member Attribution List implementation. 

Producer systems SHALL support the exportType of ```hl7.fhir.us.davinci-atr``` for implementing the Member Attribution List IG.

Producer systems SHALL export only the patients contained in the identified group if a list of member references are supplied as part of the [$davinci-data-export](OperationDefinition-davinci-data-export.html) operation.

When member references are not supplied, the Producer systems SHALL export data for all members contained in the Member Attribution List. 

Producer systems SHALL support the reading and searching of Group resources per the capability statement expectations outlined below.

Producer systems SHALL support ```Group,Patient,Coverage``` as resource types for the ```[base]/Group/[id]/$davinci-data-export?_type``` parameter for the exportType of ```hl7.fhir.us.davinci-atr```. 

Producer systems SHOULD support ```RelatedPerson, Practitioner, PractitionerRole, Organization, Location``` resource types for the ```[base]/Group/[id]/$davinci-data-export?_type``` parameter for the exportType of ```hl7.fhir.us.davinci-atr```. 

Producer systems SHALL reject requests that do not contain the minimum resource types of ```Group,Patient,Coverage``` as resource types for the ```[base]/Group/[id]/$davinci-data-export?_type``` parameter for the exportType of ```hl7.fhir.us.davinci-atr```.

* The producer SHALL create NDJSON files for each of the resources that are linked to the member to create an Member Attribution List as outlined below 

The resource list includes
 
	The Patient who is the member.
	The Coverage which resulted in the Patient being a member of the Group
	The Organization to which the Patient is attributed to as part of the Member Attribution List.
	The Practitioner or PractitionerRole that the patient is attributed to as part of the Member Attribution List
	The RelatedPerson who may be the Subscriber of the Coverage. 
	The Group itself contains the list of members and their relationship to the other members.  

Producer systems SHALL support the Bulk Data Kick-off Request for the [$davinci-data-export](OperationDefinition-davinci-data-export.html) as defined in the [Bulk Data IG]({{site.data.fhir.ver.bulkig}}/index.html) export operation specification.

Producer systems MAY support the Bulk Data Delete Request for the [$davinci-data-export](OperationDefinition-davinci-data-export.html) as defined in the [Bulk Data IG]({{site.data.fhir.ver.bulkig}}/index.html) export operation specification.

Producer systems SHALL support the Bulk Data Status Request for the [$davinci-data-export](OperationDefinition-davinci-data-export.html) as defined in the [Bulk Data IG]({{site.data.fhir.ver.bulkig}}/index.html) export operation specification.

Producer systems SHALL set the requireAccessToken to ```true``` within the Bulk Data Status Request response body as defined in the [Bulk Data IG]({{site.data.fhir.ver.bulkig}}/index.html) export operation specification.

Producer systems SHALL require Consumer systems to provide valid ```access token``` to access the Member Attribution List files. 

Producer systems SHALL support the Bulk Data File Request for the [$davinci-data-export](OperationDefinition-davinci-data-export.html) as defined in the [Bulk Data IG]({{site.data.fhir.ver.bulkig}}/index.html) export operation specification.

When the Consumer systems do not have appropriate authorization to the data requested, the Producer systems SHALL return OperationOutcome with appropriate error message.

When the Consumer systems do not have appropriate access token to access the data requested, the Producer systems SHALL return OperationOutcome with appropriate error message.




#### SMART on FHIR Backend Services Authorization

This section outlines how the SMART on FHIR Backend Services Authorization will be used by this implementation guide. 

Producer systems SHALL advertise conformance to SMART Backend Services by hosting a Well-Known Uniform Resource Identifiers (URIs) as defined in the [SMART on FHIR Backend Services Authorization]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html) specification.

Producer systems SHALL include token_endpoint, scopes_supported, token_endpoint_auth_methods_supported and token_endpoint_auth_signing_alg_values_supported as defined in the [SMART on FHIR Backend Services Authorization]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html) specification.

Consumer systems SHALL share their JWKS with the Producer systems using URLs as defined in the [SMART on FHIR Backend Services Authorization]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html) specification.

Consumer systems SHALL obtain the access token as defined in the [SMART on FHIR Backend Services Authorization]({{site.data.fhir.ver.smartapplaunch}}/backend-services.html) specification.

Producer systems SHALL support ```system/*.read`` scopes for Member Attribution List exchange.

Producer systems supporting the creation and reconciliation of a Member Attribution List by Consumer systems SHOULD also support the ``system/*.write`` scope for Member Attribution List exchange.

During Consumer registration, the Producer system  MAY collect the NPI and Tax Identification Numbers applicable for a specific contract along with the specific contract information. This information MAY be used by the Producer to create the necessary Member Attribution List and provide an API that will allow the Consumer to retrieve the Member Attribution List. Producers MAY follow other OAuth best practices for Consumer registration.

When the Consumer is trying to discover the specific Group resource that represents the Member Attribution List for a specific use case, the Producer SHALL verify that the Consumer credentials provided allow the Consumer to access the requested specific Group Resource. 

**NOTE:** This verification is for a specific Group instance and not just the Group Resource type which is controlled by the scopes.





#### Capability Statements
This section lists the capability statements for Producer and Consumer systems.

##### Producer Systems

The Producer specific requirements for REST interactions, operations, profiles and search parameters to be supported are outlined in the [Producer Capability Statement](CapabilityStatement-atr-producer.html). 



##### Consumer Systems

The Consumer specific requirements for REST interactions, operations, profiles and search parameters to be supported are outlined in the [Consumer Capability Statement](CapabilityStatement-atr-consumer.html).


### Member Attribution List Data Model requirements

The section outlines specific requirements that need to be followed in creating the Member Attribution List.

#### Representing Contracts

* Producers SHALL create one Member Attribution List represented by an instance of Group Resource. There will be exactly one Group Resource instance per Contract between a Payer and a Provider.

* Producers SHALL ensure the combination of Member Identifier, Payer Identifier, Contract Identifier and Plan Identifier are unique. 
 
* Producers SHALL include the Contract Identifier within the Group.identifier element during the creation of the Member Attribution List.

* Producers SHALL make available the Group resource for Consumers for at least the duration of the contract in compliance with applicable regulations and policies. 

* Producers SHALL create new versions of Group resource instances as data in the Group (Members, Attributed periods, coverage references, attributed providers) change. Producers may or may not retain older versions of the Group based on their instance version scheme. In some instances Producers may choose a version scheme based on agreements with Consumers. When queried by the Consumers, Producers SHALL return the latest version of the Group resource instance unless a specific version is queried.

* Producers SHALL represent the validity period of the contract in the Group.contractValidityPeriod extension.


#### Representing Plans and Coverage

* Producers SHALL include the Plan Identifier in Coverage.class data element during the creation of the Member Attribution List.

* Producers SHALL include the Coverage that is associated with the member in the Member Attribution List as part of the Group.member.anyReference data element.

#### Handling Identifiers

* Producers SHALL include settlement entity names, ACO identifiers in Group.identifier during the creation of the Member Attribution List. This is helpful for Consumers to discover the Group using a single settlement entity name and/or an ACO identifier. 

* Producers SHALL include the provider NPI and/or TIN in Group.identifier field during the creation of the Member Attribution List. These identifiers are used by Consumers to discover the Group Resource using their own NPI and/or TIN.

* When Member Identifiers are present, Producers SHALL include the Member Identifier in the Coverage.identifier.


#### Handling Attribution Period and Attributed Providers

* Producers SHALL include the attribution period in the Group.member.period data element. This indicates the period over which the member is attributed to the provider.

* When members get attributed to different providers during the same contract for different providers, Producers SHALL include the member multiple times in the Member Attribution List, once for each provider with whom the member is attributed including their attribution period. 

* When members are not attributed to a provider or an organization, Producers MAY attribute the member to the Settlement Entity organization which is responsible for the contract. Producers SHALL include the attribution period in the Group.member.period element. 

* Producers SHALL include the contract validity period in Group.extension (membershipValidityPeriod) data element.

* Producers SHALL set ```Group.member.inactive = true``` when the member is no longer attributed.

* Producers SHALL set ```Group.member.extension.ext-changeType = dropped``` when the member is no longer attributed.

* Producers SHALL set  ``Group.member.extension.ext-changeType = new``` when a member is added to the Member Attribution List for the first time.

* Producers SHOULD set  ``Group.member.extension.ext-changeType = changed``` when a member's information has changed.

* Producers SHOULD set  ``Group.member.extension.ext-changeType = nochange``` when a member's information has not changed from the previous version of the Member Attribution List.


#### Security and Privacy considerations on Identifiers

* Producers SHOULD exchange Provider NPI and TIN only as needed and when the NPIs and TINs belong to providers associated with the receiving organization.

* Consumers SHOULD NOT be sharing the NPI and TIN information amongst providers unless required for transactions related to Payment, Treatment and Operations (PTO).


### Member Attribution List Exchange Interactions Details and APIs

#### Consumer identifies relevant Member Attribution List in Producer's system (Discovery of Group Resource)

This interaction outlines the APIs for a Consumer (for example, Provider organization) to discover the Group Resource in a Producer's system ( for example, Payer organization).This Group resource represents the Member Attribution List that has been created by the Producer based on a contract between the Producer and the Consumer.
For example, Multicare a Provider Organization would like to identify the Member Attribution List that a Payer organization (e.g Cambia Health Systems) has created based on a contract between Cambia and Multicare.

**Precondition:**

In order to discover the appropriate Group Resource (Member Attribution List) the Consumer is expected to know its own NPI and/or Tax Identification Number or Contract Identifier or Settlement Entity Identifiers. Producers and Consumers may exchange this information during the contract establishment. Similarly Producers may provide the name of the Group resource representing the Member Attribution List that can be retrieved by the Consumer. 
Note: Producers and Consumers MAY have a predetermined cadence on exchanging Member Attribution Lists and this API could be invoked based on the cadence. 

**API: Discover Group using NPI or TIN**


```

GET <Server Base URL>/Group?identifier=http://hl7.org/fhir/sid/us-npi|<Example NPI>&_summary=true
GET <Server Base URL>/Group?identifier=urn:oid:2.16.840.1.113883.4.4|<Example TIN>&_summary=true

```


**API: Discover Group using Identifiers (Contract Identifier or Settlement Entity Identifier)**


```

GET <Server Base URL>/Group?identifier=http://example.org|<Identifier Value>&_summary=true

```


**API: Discover Group using Name**


```

GET <Server Base URL>/Group?name=myorg&_summary=true

```


**Expected Result:**

Consumer receives one or more Group Resources from the above API call(s). Each Group Resource represents a specific Member Attribution List between the Producer and the Consumer. To narrow down the specific Member Attribution List for a specific contract the Consumer has to examine the ```Group.identifier``` and ```Group.contractValidityPeriod``` element and compare the contract information. An example resource retrieved by the above discovery APIs can be found at [Group Example](Group-fullexample.html).


#### Consumer requests Member Attribution List from Producer's system (Member Attribution List Export Request - Bulk Data Request)

This interaction outlines the APIs for a Consumer (Provider) organization to request the full Member Attribution List that is applicable to their specific organization for a specific contract.
**Note:** The request has to be accepted by the Payer and eventually a Member Attribution List would be made available. This is an asynchronous request following Bulk Data IG specifications.

For example, Multicare would like to request the Member Attribution List details from Cambia Health Systems for a specific contract. 

**Precondition:** 

Provider Organization knows the specific Group Resource for the specific contract that represents the Member Attribution List from executing the discovery of group resource API outlined previously.


**API:**

```

GET or POST <Server Base URL>/Group/[Group id]/$davinci-data-export?resourceTypes=GRoup,Patient,Practitioner,PractitionerRole,Organization,Location,Coverage,RelatedPerson&exportType=hl7.fhir.us.davinci-atr 

OR 

GET or POST <Server Base URL>/Group/[Group id]/$davinci-data-export?resourceTypes=GRoup,Patient,Practitioner,Organization,Coverage&exportType=hl7.fhir.us.davinci-atr


```

NOTE: Any other combination of resourceTypes are not valid for the exportType of hl7.fhir.us.davinci-atr.

**Expected Results:**
Request is accepted by the Producer and a Content Location is received as part of the Response. Detailed examples for Bulk Data Request can be found in the Bulk Data IG.

#### Consumer polls the Content Location for Request Completion and Member Attribution List data location (Member Attribution List Export Request Polling - Bulk Data Poll Request)

This interaction outlines the APIs for a Consumer (Provider) organization to poll the Content Location received as part of Member Attribution List Export Request outlined previously. This polling is required to determine completion status of the export request. This would be repeated until the request is complete or cancelled following the Bulk Data IG specifications.

For example, Multicare would poll the content location received from Cambia as part of the Member Attribution List Export Request. 

**Preconditions:** 

* Consumer has requested the Member Attribution List export which has been accepted by the Producer.
* Consumer organization has the URL for the Content Location where the request status can be polled.

**API**

```

GET <Content Location from Member Attribution List Export Request>

```

**Expected Results:**

* The completion status of the Member Attribution List Export Request.
* Once the request is completed, a 200 HTTP code is returned along with the Response Body containing the URLs for the files representing the Member Attribution List.
* At least one URL is returned for each of the resource types specified using the resourceTypes parameter in the Member Attribution List Export Request which are Patient,Practitioner,PractitionerRole,Organization,Location,Coverage and RelatedPerson resources.
* Detailed examples for content polling can be found in the Bulk Data IG.

#### Consumer retrieves Member Attribution List from Producer (FHIR Request)

AThis interaction outlines the APIs for a Consumer (Provider) organization to retrieve each of the files that represent the Member Attribution List.

For example, Multicare retrieves each of the NDJSON files representing the Member Attribution List. 

**Precondition:**

Consumer has the URLs to retrieve the files representing the Member Attribution List from a successfully completed Member Attribution List Export Request. These URLs are obtained by executing the Member Attribution List Export Request Polling interaction until the request is completed.

**API:**

```

GET <File URL for each Resource identified in Member Attribution List Export Request completion response>

```

**Expected Results:**

* Retrieve the NDJSON files for each of the following resources.
* One or more NDJSON files for Group, Patient,Practitioner,PractitionerRole,Organization,Location,Coverage and RelatedPerson
* Detailed examples for NDJSON file retrieval can be found in the Bulk Data IG.



### Creation of a Member Attribution List 

Member Attribution List are typically created by the Producer and published for use by the Consumer. However as described in the [Use Cases section](usecases.html) the Consumer could create a Member Attribution List in the Producer's system. In order to accomplish this the following API's are expected to be used by the Consumer. 

* To create the initial Member Attribution List, a POST on the Group resource is used with no members. This is an empty Member Attribution List.
* Subsequently, the Consumer is expected to add different members to the list using the member-add operation.
* Once the members have been added, the Consumer can invoke the davinci-data-export operation to retrieve the data associated with the Member Attribution List.
* Consumers may also remove members from the Member Attribution List using the member-remove operation. 

### Member Attribution List Reconciliation APIs

The following are the Member Attribution List Reconciliation APIs and their purpose

* [member-add](OperationDefinition-member-add.html) - Used to request addition a member and their attributed provider to an Attribution List.
* [member-remove](OperationDefinition-member-remove.html) - Used to request the removal of a member and their attributions from an Attribution List.
* [confirm-attribution-list](OperationDefinition-confirm-attribution-list.html) - Used to confirm that the reconciliation process is complete and there are no pending changes from the Consumer.
* [attribution-status](OperationDefinition-attribution-status.html) - Used to request attribution status for a specific member.

#### Example Scenarios demonstrating the use of reconciliation APIs

**Scenario 1** : A Consumer wants to add a specific patient to the Attribution List. 

The Consumer determines the patient's memberId and the NPI of the attributed provider and uses the [member-add](OperationDefinition-member-add.html) operation on the specific Group instance to add the member.

**Scenario 2** : A Consumer wants to remove a specific patient and their attributions from the Attribution List. 

The Consumer determines the patient's memberId and uses the [member-remove](OperationDefinition-member-remove.html) operation on the specific Group instance to remove the member.

**Scenario 3** : A Consumer wants to update the attribution associated with a specific patient 

Step 1: The Consumer determines the patient's memberId and uses the [member-remove](OperationDefinition-member-remove.html) operation on the specific Group instance to remove the member.

Step 2: Once the attributions are removed in Step 1, The Consumer determines the patient's memberId and the NPI of the attributed provider and uses the [member-add](OperationDefinition-member-add.html) operation on the specific Group instance to add the member.


**Scenario 4** : A Consumer wants to confirm that the Attribution List is final

The Consumer uses the [confirm-attribution-list](OperationDefinition-confirm-attribution-list.html) operation on the specific Group instance to indicate to the Producer that the list is final and no more changes will be requested by the Consumer.

**Scenario 5** : A Consumer wants to determine the status of attribution for a specific member

The Consumer determines the patient's memberId and uses the [attribution-status](OperationDefinition-attribution-status.html) operation on the specific Group instance to retrieve the attribution status of the patient.


#### Consumer requests addition of a member to the Member Attribution List 

This interaction outlines the APIs for a Consumer (for example, Provider organization) to add a member to the Member Attribution List.

**Precondition:**

In order to add a member to the Member Attribution List, the Consumer should have successfully discovered the Member Attribution List.
The Consumer knows the MemberId and the AttributedProvider NPI or the references to the Member and the Attributed Provider in the Producer system. 
The Member Attribution List status has to be "draft" for the reconciliation API of member-add to be allowed. 

**API: Add a member to the Member Attribution List**

The following combinations of parameters **SHALL** be supported by the server implementing the operation.

* memberId + providerNpi: Adds the member and the attributed provider to the Attribution List.
* memberId + providerNpi + attributionPeriod: Adds the member, attributed provider and the attribution period to the Attribution List.
* patientReference + providerReference: Adds the member and the attributed provider to the Attribution List.
* patientReference + providerReference + attributionPeriod: Adds the member, attributed provider and the attribution period to the Attribution List.


* The Producers **MAY** decide to add the member based on the information provided and any additional information that is present in the Producer system. 
* If the Producer's adjudication process results in the member not being added, the Producer **SHALL** return an OperationOutcome with a message indicating the reason why the addition was not performed.


```

POST [Base FHIR URL]/Group/[id]/$member-add

The body will contain the parameters resources with combinations specified above.


```


**Expected Results:**

* Successful addition of the member to the Member Attribution List if the member and the provider are found in the Member Attribution List. 
* An OperationOutcome of error if the member to be added is not found in the Member Attribution List.
* An OperationOutcome of error if the Producer does not add the member to the Member Attribution List.
* An OperationOutcome of error if the Member Attribution List is in a status of final.


#### Consumer requests removal of a member from the Member Attribution List 

This interaction outlines the APIs for a Consumer (for example, Provider organization) to remove a member from the Member Attribution List. The semantics of the member-remove operation based on the Member Attribution List status is outlined at [Member Remove semantics.](OperationDefinition-member-remove.html)

**Precondition:**

To remove a member from the Member Attribution List, the Consumer should have successfully discovered the Member Attribution List.
The Consumer knows the MemberId and the Attributed Provider's NPI or the references to the Member and the Attributed Provider in the Producer system. 
The [Member Attribution List status](StructureDefinition-ext-attributionListStatus.html) has to be "draft" for the reconciliation API to be allowed.

**API: Remove a member from the Member Attribution List**

The following combinations of parameters **SHALL** be supported by the server implementing the operation.

* memberId only: Removes all attributions for the Member specified by the MemberId
* memberId + providerNpi: Removes all attributions for the combination of Member and Provider specified
* patientReference: Removes all attributions for the Member
* patientReference + providerReference: Removes all attributions for the combination of Member and Provider specified
* patientReference + providerReference + coverageReference: Removes the attribution for the combination of Member and Provider and Coverage resources

* The Producers **MAY** decide to remove the member based on the information provided and any additional information that is present in the Producer system. 
* If the Producer's adjudication process results in the member not being removed, the Producer **SHALL** return an OperationOutcome with a message indicating the reason the removal was not performed.



```

POST [Base FHIR URL]/Group/[id]/$member-remove

The body will contain the parameters resources with combinations specified above.
 

```


**Expected Results:**

* Successful removal of the member from the Member Attribution List if the member and the provider are found in the Member Attribution List. 
* An OperationOutcome indicating an error if the member to be removed is not found in the Member Attribution List. 
* An OperationOutcome indicating an error is returned if the Producer decides not to remove the member.
* An OperationOutcome indicating an error if the Member Attribution List is in a status of final.


#### Consumer indicates to the Producer that the Consumer is done with the reconciliation  

This interaction outlines the APIs for a Consumer to indicate to the Producer that the Consumer has finished the reconciliation process and has no pending changes. 

**Precondition:**

The Consumer and the Producer are already exchanging a specific Member Attribution List in draft form.

**API: Confirm Attribution List**

The operation does not require any parameters.

* The Producer **SHALL** return a status of 201 Accepted when the API is invoked. 

* The Producers **SHOULD** change the Member Attribution List status to final from draft.

* Prior to changing the Member Attribution List status to final, the Producer **MAY** make changes to the Member Attribution List based on internal business processes and information.


```

POST [Base FHIR URL]/Group/[id]/$confirm-attribution-list

There are no parameters for the operation.
 

```


**Expected Results:**

* Successful acceptance of the operation with a HTTP status code of 201 Accepted. 
* Change the list status to final eventually by the Producer. 


### Use of Subscriptions for notification of changes between Producer and Consumer

The requirements and mechanisms to use Subscriptions for notifications is outlined in [Subscriptions Requirements](subscription.html).

 



---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-atr-coverage-intro.md

### Introduction

This profile is used to associate a specific coverage instance to a specific member who is on the Member Attribution List.
Since patients can have multiple coverages, it is important to identify the specific coverage instance that led to the patient being on the Member Attribution List. The Coverage instance will contain the member information, payer information and the plan information.


**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the Coverage profile.


**APIs : Retrieval of Coverage Resource Instance:**

The Coverage instance is retrieved as part of the Bulk API request on the Group resource representing the Member Attribution List. 



---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-atr-group-intro.md



### Introduction

This profile represents an instance of Member Attribution List. The resource instance contain information related to members who are attributed to a specific individual provider or a provider organization. The instance may also contains information about the contract, settlement entity details. In addition, NPI and TIN of the consumer (provider) organization may be contained within the instance. Attribution information such as the attributed period, attributed provider is also contained within the group resource. Members may be added or removed from the member attribution list. Group.member has a cardinality of 0..* because  Groups may have zero members when they are initially created and members get added at a later point in time. The Group.member.inactive flag is used to indicate that the patient is no longer part of the Member Attribution List.


**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the Group profile and create a Member Attribution List.


**APIs : Retrieval of Group Resource Instance:**

The Group instance is retrieved using search parameters outlined in the [Group discovery APIs](spec.html#consumer-identifies-relevant-member-attribution-list-in-producers-system-discovery-of-group-resource). 

The retrieved Group resource instance which represents the Member Attribution List has member and other related resource references. In order to retrieve the complete Member Attribution List information including member, coverage, attributed provider information a Bulk API request is initiated on the retrieved Group resource. 


**Handling Large Groups** 

Groups which have large number of members (for e.g > 100,000) end up consuming a large number of resources on server, client and the network to retrieve the Group either using search mechanisms or read mechanisms. In order to limit the amount of data being returned by the server the following requirements are being levied.

	* All Group search operations or read operations should use the _summary=true parameter. This parameter will only return teh summary of the Group resource and does not include any members. This makes the operation light weight for clients and severs. 
	
	* Once the Group is received, the client can perform the davinci-data-export operation on the Group resource which will create a NDJSON file for the Group itself. In this case the NDJSON file will only contain a single line with a large number of data based on the number of members present in the Group.
	
	* NOTE: There is discussion on creating a new operation to page the Group resource based on the number of data elements. When this is made available, the IG will be revised to use the method for Group searches and reads without the _summary parameter. 


**Using Sub Groups**

A Group can contain other groups. This capability may be used by use cases where multiple characteristics have to be grouped into a composite group. For e.g if you want to create a group of patients attributed to an Organization (Say Org-AttributionList Group), which consists of a group of patients attributed to provider A (ProviderA-AttributionList) and Provider B (ProviderB-AttributionList). In this case the Org-AttributionList group may contain the sub-groups namely ProviderA-AttributionList and ProviderB-AttributionList. The existing DaVinci use cases do not require this level of complexity and hence it is not explicitly identifies as being required for DaVinci use cases.

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-atr-intended-recipient-extension-intro.md

 

### Introduction

This extension is used to indicate to the Consumer of the Patient List. 


**Implementation Requirements**

Producers are the Patient List SHOULD add the Identifier of the Consumer if it is available. For example Payers creating the Member Attribution List may add the consumer (provider) NPI and/or TAX ID so that a provider may be able to search the Groups for retrieval.



---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-atr-location-intro.md

### Introduction

This profile is used as part of the PractitionerRole profile to associate the provider with a specific location.


**APIs : Retrieval of Location Resource Instance:**

The Location instance is retrieved as part of the Bulk API request on the Group resource representing the Member Attribution List.


---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-atr-organization-intro.md

### Introduction

This profile is used to represent a payer, a settlement entity when needed and a provider organization. For Patients attributed to provider organizations and/or settlement entities the organization profile will be used.


**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the Organization profile.


**APIs : Retrieval of Organization Resource Instance:**

The Organization instance is retrieved as part of the Bulk API request on the Group resource representing the Member Attribution List.

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-atr-patient-intro.md

### Introduction

This profile is used to represent a patient/member in a Member Attribution List. The profile is derived from US-Core patient profile and adds the district as a must support attribute.


**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the patient profile.


**APIs : Retrieval of Patient Resource Instance:**

The Patient instance is retrieved as part of the Bulk API request on the Group resource representing the Member Attribution List.

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-atr-practitioner-intro.md

### Introduction

This profile is used to represent a Practitioner who is attributed to a patient.


**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the Practitioner profile.


**APIs : Retrieval of Practitioner Resource Instance:**

The Practitioner instance is retrieved as part of the Bulk API request on the Group resource representing the Member Attribution List.

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-atr-practitionerrole-intro.md

### Introduction

This profile is used to represent a Practitioner associated with a specific Organization and is attributed to a specific patient within the Member Attribution List. 

**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the PractitionerRole profile.


**APIs : Retrieval of PractitionerRole Resource Instance:**

The PractitionerRole instance is retrieved as part of the Bulk API request on the Group resource representing the Member Attribution List.

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-atr-relatedperson-intro.md

### Introduction

This profile is used to represent a subscriber to a plan due to which a member gets their Coverage as a dependent. 


**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the RelatedPerson profile.


**APIs : Retrieval of RelatedPerson Resource Instance:**

The RelatedPerson instance is retrieved as part of the Bulk API request on the Group resource representing the Member Attribution List.

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-davinci-patient-list-intro.md



### Introduction

This profile represents a Patient List. The resource instance contain information related to members who are grouped for a specific use case. For example, the Patient List could represent the Member Attribution List containing a list of patients attributed to a Provider. Attribution information such as the attributed period, attributed provider is also contained within the group resource. Members may be added or removed from the Patient List using member-add and member-remove operation. Group.member has a cardinality of 0..* because  Groups may have zero members when they are initially created and members get added at a later point in time. The Group.member.inactive flag is used to indicate that the patient is no longer part of the Member Attribution List.


**Implementation Requirements for Member Attribution List**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the Group profile and create a Member Attribution List.


**Handling Large Groups** 

Groups which have large number of members (for e.g > 100,000) end up consuming a large number of resources on server, client and the network to retrieve the Group either using search mechanisms or read mechanisms. In order to limit the amount of data being returned by the server the following requirements are being levied.

	* All Group search operations or read operations should use the _summary=true parameter. This parameter will only return teh summary of the Group resource and does not include any members. This makes the operation light weight for clients and severs. 
	
	* Once the Group is received, the client can perform the davinci-data-export operation on the Group resource which will create a NDJSON file for the Group itself. In this case the NDJSON file will only contain a single line with a large number of data based on the number of members present in the Group.
	
	* NOTE: There is discussion on creating a new operation to page the Group resource based on the number of data elements. When this is made available, the IG will be revised to use the method for Group searches and reads without the _summary parameter. 

**Using Sub Groups**

A Group can contain other groups. This capability may be used by use cases where multiple characteristics have to be grouped into a composite group. For e.g if you want to create a group of patients attributed to an Organization (Say Org-AttributionList Group), which consists of a group of patients attributed to provider A (ProviderA-AttributionList) and Provider B (ProviderB-AttributionList). In this case the Org-AttributionList group may contain the sub-groups namely ProviderA-AttributionList and ProviderB-AttributionList. The existing DaVinci use cases do not require this level of complexity and hence it is not explicitly identifies as being required for DaVinci use cases.

---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-ext-attributedProvider-intro.md

### Introduction

This extension is used to identify the specific attributed provider reference during the creation of a Member Attribution List. The attributed provider can be a Practitioner, PractitionerRole or an Organization resource.  


**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the attributedProvider extension during the creation of a Member Attribution List.





---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-ext-changeType-intro.md

### Introduction

This extension is used to indicate to the Consumer of the Member Attribution List on whether a member has been added, dropped, changed or not changed during the creation of the Member Attribution List. 


**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the changeType extension during the creation of a Member Attribution List.





---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-ext-contractValidityPeriod-intro.md

### Introduction

This extension is used to identify the contract start and end dates.  


**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the contractValidityPeriod extension during the creation of a Member Attribution List.





---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/StructureDefinition-ext-coverageReference-intro.md

### Introduction

This extension is used to identify the specific Coverage resource reference that resulted in the member being added to the Member Attribution List. 

**Implementation Requirements**

Implementers are advised to read [Data Model Requirements](spec.html#member-attribution-list-data-model-requirements) to implement the coverageReference extension during the creation of a Member Attribution List.






---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/subscription.md

This section defines the specific requirements related to Subscriptions for notifications of Member Attribution List changes. The specification focuses on the creation of SubscriptionTopics in the Producer's systems, and notifications from the Producer to the Consumer (subscriber to the topic) when the Member Attribution List changes.
 

### Usage of FHIR Subscriptions Backport IG to implement Subscriptions

The Member Attribution List IG leverages the [Subscriptions R5 Backport IG](({{site.data.fhir.ver.subscriptionsIg}}/index.html) to implement Subscriptions and associated notifications. The following is the SubscriptionTopic URL that has to be used in the creation of the Subscription. 

#### SubsciptionTopic and Canonical URL

This section identifies the topic and the Canonical URL for the topic.This URL **SHALL** be used by the Consumer to create a Subscription for notification. 


|Notification/Named Event/SubscriptionTopic	| Canonical Url 	| ResourceId/ResourceType expected as part of notification	|
| :---										| :---			| :--- 														|
| atr-list-change							|http://hl7.org/fhir/us/davinci-atr/SubscriptionTopic/atr-list-change|Group|

   
The following is an example of the Member Attribution List change SubscriptionTopic.

* [atr-list-change Subscription](StructureDefinition-atr-list-change-subscription.html)


#### Consumer Requirements for Subscription Creation

* The Consumer **SHOULD** support the creation of a SubscriptionTopic by a Consumer.

* When the Consumer creates Subscription resources in the Producer system, the Consumer **SHALL** represent the canonical URL for the atr-list-change topic from the above table as part of the Subscription.criteria element.

* When the Consumer creates Subscription resources in the Producer system, the Consumer **SHALL** identify the specific Member Attribution List for change notification using the Group/id as the value of the Subscription.criteria.extension element.

* When the Consumer creates Subscription resources in the Producer system, the Consumer **SHALL** identify the Subscription to be active using the Subscription.status field.

* When the Consumer creates Subscription resources in the Producer system, the Consumer **SHALL** identify the Subscription payload to be fhir+json using the Subscription.payload field.

* When the Consumer creates Subscription resources in the Producer system, the Consumer **SHALL** identify that the notification must include only the id using the Subscription.payload.extension.

* Consumers intending to receive notifications via Subscriptions **SHALL** implement a rest-hook channel to receive notifications from the Producer.   

* Consumers **SHALL** update previously created Subscriptions in the Producer system and turn them off using the Subscription.status field, when the specific Member Attribution List is not used anymore.

#### Producer Requirements for Subscriptions

* Producer **SHOULD** support creation of Subscriptions for atr-list-change topic.

* Producer **SHOULD** support updating of Subscriptions for atr-list-change topic.

* When supporting Subscriptions, Producers **SHALL** verify that the Consumer has the necessary authorization to subscribe to the Member Attribution List specified using the Group/id as part of the Subscription.criteria.extension element.

* When Consumers do not have the right authorization for the Member Attribution List, Producers **SHALL** reject the create or update of the Subscription for the specific Member Attribution List with a status code of 401. 

* When supporting Subscriptions, the Producer **SHALL** support the channel of type rest-hook to notify the subscribers of changes.

* When supporting Subscriptions, the Producer **SHALL** support a notification payload type of id-only where the id of the changed resource is included.

* When supporting Subscriptions, Producers **SHALL** notify the subscribers of Member Attribution List changes when the Subscription.status is active.


### Implementing Notifications without using FHIR Subscriptions 

There are situations where the Producers have not implemented the FHIR Subscriptions capability. To enable implementation of the Member Attribution List use cases in these situations, the Producer and Consumer may use alternative mechanisms to receive notifications.

Example of alternative mechanisms include email notifications between contact persons representing Producer and Consumer, regular periodic download of the attribution list by Consumers.



---

File: repos/HL7_SLASH_davinci-atr/input/pagecontent/usecases.md

### Business need

Providers need to access Member Attribution Lists to meet following business needs

* Close care gaps for members that 'count' in financial reconciliation

* Prospectively manage patients, meet quality metrics, and manage costs by closing care gaps.

* Track care costs of attributed patients, manage utilization and monitor referrals/specialist care.

* Perform end of year reconciliation to obtain 'credit' for the right patients based on plans/contracts. 

* Track monthly membership to view trends and confirm accountable care PMPM payments

* Determine project membership for the upcoming year based on prospective lists at end/start of year.

* Maintain historical data of patients for continuity of care as members fall off or get added to the list

* Performance reporting on specific targets and measures.

Using FHIR based APIs, providers and payers can exchange Member Attribution Lists which can then enable existing business processes and systems to meet the above business needs. The creation of a Member Attribution List typically starts with a need to identify the patients for a specific purpose such as Risk Based Contracts or Quality Reporting. Once the patients are identified other FHIR APIs and DaVinci specifications can be used to retrieve clinical, financial, and other relevant information as needed.

### Example Member Attribution List Exchange Scenarios 

#### Scenario 1

Provider Organization A enters a risk-based contract with Payer B. As part of establishing the contract, they document specific measures, targets, and financial incentives. Payer B uses historical claims and other information present about members to create a Member Attribution List for Provider Organization A. The Member Attribution List identifies the list of patients that Provider Organization A is responsible for, according to the contract. Payer B needs to exchange this list with Provider Organization A periodically to ensure that Provider Organization A remains aware of the list of patients they are contractually responsible for and any changes that may occur. Payer B could publish the list in a standard way and Provider Organization A would then retrieve the list. Alternatively Provider Organization A may request for the list and Payer B should provides the list once it is ready.


#### Scenario 2

Provider Organization A enters a contract with Payer B. As part of establishing the contract, they document specific measures, targets, and financial incentives. Provider Organization A assembles the list of members for whom they are responsible and creates an initial Member Attribution List to provide to Payer B. Payer B uses historical claims and other current information about members to update the provided Member Attribution List. The list is then published by Payer B to Provider Organization A. Provider Organization A retrieves the list and identifies changes that need to be made, then notifies the Payer B about the changes, in terms of additions and removals. Payer B either accepts or rejects the changes and may modify the existing Member Attribution List. If the list is modified, Payer B notifies Provider Organization A of the changes. Once Provider Organization A and Payer B finally agree upon a Member Attribution List they can start using the list for various business needs. 


#### Use of Member Attribution List as part of the Data Exchange for Quality Measures and Care Gaps

Member Attribution Lists are fundamental to closing care gaps and reporting quality measures. Providers have to report specific quality measures on certain patients to payers on specific quality measures and close any care gap requirements that may exist. Providers and Payers agree upon the list of patients for whom reporting needs to be performed on a regular basis. Similarly care gaps associated with these patients have to be closed to receive applicable financial incentives. In all these cases the agreement on what is the "list of patients" is critical. This function is served by the Member Attribution List. The Member Attribution List should be agreed upon by the Payers and Providers and exchanged on a regular cadence. Based on the patients in the Member Attribution List Payers can request for specific quality measure and care gaps data from Providers. Similarly, Providers can close care gaps for patients attributed to them via the Member Attribution List and can report quality data using the Data Exchange for Quality Measures DaVinci implementation guide.



#### Use of Member Attribution List for CMS Data at Point of Care (DPC) use case

The Centers for Medicare and Medicaid Services (CMS) Data at the Point of Care (DPC) API is currently in a pilot phase. As such,  only a limited number of users can access Medicare Fee-For-Service claims data through the API. This pilot program promotes the industry-standard HL7 Fast Healthcare Interoperability Resources (FHIR), specifically the Bulk FHIR specification. The mechanisms used by the DPC program have been outlined in this implementation guide which includes the creation of the Member Attribution List, requesting changes or updates to the Member Attribution List, and requesting claims data using the Bulk Data operations specifically the /Group/[id]/$davinci-data-export operation.

#### Use of Member Attribution List for CMS Beneficiary Claims Data API (BCDA) use case

The Beneficiary Claims Data API (BCDA) is an Application Programming Interface (API) that enables Accountable Care Organizations (ACOs) to retrieve Medicare claims data for their beneficiaries. BCDA serves as a direct pipeline from CMS to ACO systems to provide claims data at a more timely cadence. This includes Medicare claims data for instances in which beneficiaries receive care outside of the ACO, allowing a full picture of patient care. The BCDA initiative provides claims data, represented using Patient, Coverage and Explanation of Benefit FHIR resources, to the ACOs. CMS utilizes an attribution file to create the list of beneficiaries relevant to an ACO and then uses the Group resource to represent the beneficiary list. The Member Attribution List is represented using the data model present in this Implementation Guide. The claims data can be accessed using the same /Group/[id]/$davinci-data-export bulk data operation also specified in this Implementation Guide. 

#### Use of Member Attribution List for DaVinci Pdex use cases 

The DaVinci Pdex use cases for Payer to Payer exchange can utilize the DaVinci-data-export operation, as defined in the guide to exchange large amounts of data using the bulk data asynchronous pattern. The actual content to be exchanged will be defined in the Pdex IG in the future.



### Member Attribution List workflows and definitions

The following definitions are used in the Member Attribution List implementation guide.

1. __MemberId:__
A unique identifier for a member within a payers plan.

2. __Payer Identifier:__ 
A unique identifier for an organization that provides insurance plans and enters into contracts with health care providers.

3. __Contract Identifier:__
A unique identifier assigned by the Payer to their agreement with a specific healthcare provider.

4. __Plan Identifier:__
A unique identifier for an insurance plan that a payer provides. Members belong to specific plans.

**NOTE:** The combination of Member Identifier, Payer Identifier, Contract Identifier, and Plan Identifier is always unique.

5. __Attribution:__ 
Results of an Algorithmic or manual process that assigns patients to providers or payers. Alternatively a patient could declare to be part of a Group by providing or selecting their PCP information or ACO information.

6. __Member Attribution List:__
Enumeration of patients who are attributed to payers, providers, medical homes or groups. Patients may belong to multiple plans. 
The Attribution list contains the patients information along with other information such as Attributed Provider, Health Plan information, Validity Period for the list, Risk Information etc. A member may be present multiple times within a Member Attribution List, however the combination of Member Identifier, Payer Identifier, Contract Identifier and Plan Identifier is always unique. That  combination can be used to identify the member.

7. __Attributed Provider:__
The Provider responsible for managing the quality and costs of a patient’s health care, per the contract and who will receive the payments and credits based on performance.

8. __Attribution Period:__
The period over which the member is attributed to a specific provider. The period has a start and an end date.

8. __Producer:__
An Entity that creates the Member Attribution List and owns the master copy of the list. 
Producers allow changes to be made to the list. 
A Producer may receive an initial list from the Consumer, upon receiving they will own the list and publish the list for consumption.

9. __Consumer:__ 
An Entity that utlizes the Member Attribution List. 
Consumers may contribute to the creation of the list owned by the Producer.
Consumers may request changes be made to the list owned by the Producer.
Consumers may receive an initial list from the Producer and request changes before reaching final agreement on the list.

10. __Member Attribution List Data:__
Data contained within the Member Attribution List. This includes
* Patient Demographics Data 
* Attributed Provider Data (First Name, Last Name, Id, NPI, TIN, Address)
* Health Plan Data (Subscriber Id, Member Id, Medicare Id, Medicaid Id, Plan Name, Plan Type, Enrollment Start and End Dates)
* Attribution Data (Effective Start and End Date for Attribution, Attribution Method, Risk score)
* Miscellaneous Data (ACO Information, Conditions)

11. __Member Attribution List Changes:__ 
Changes in Member Attribution List Data, such as the addition or deletion of patients from the list.

### Member Attribution List Exchange for Scenario #1

{% include img.html img="workflow.png" caption="Figure 2: Member Attribution List Exchange Workflow for Scenario #1" %}

The following is a brief description of the workflow steps with a Payer representing the Producer and a Provider Organization representing the Consumer. 

**1. Payer (Producer) and Provider (Consumer) enter into a contract **<br/>
Provider and a Payer enter into a contract with specific terms and conditions and decide on the need for a Member Attribution List. Payer internally creates the Member Attribution List using internal processes and existing data about the patients. 

**2. Payer (Producer) Informs Provider (Consumer) and makes the List available to the Provider **<br/>
In this step the Payer informs the Provider about the list and makes it available to the Provider. The specific mechanism of how this exchange happens varies based on Payers and Providers. This implementation guide will specify standards for this interaction.

**3a. Provider (Consumer) informs Payer (Payer) about changes **<br/>
Once the Provider receives the list in Step 2, Provider reconciles the list with internal lists and data, if changes are needed, they notify the Payer about the specific changes. These changes could be to add additional patients, remove patients from the list etc. The specific mechanism of how this exchange happens varies based on Payers and Providers. 
If the Consumer has no changes, then Step 3a would not be executed and the Consumer has accepted the list for usage. 

Note: Steps 2 and 3a may be repeated as many times as needed until the Producer and Consumer agree upon the Member Attribution List.

**3b. Provider (Consumer) informs Payer (Producer) about no changes **<br/>
Once the Provider receives the list in Step 2, the Provider reconciles it with internal lists and data, in case where no changes are needed, they then notify the Payer about finalizing the list. The specific mechanism of how this exchange happens varies based on Payers and Providers. 

**4. Payer (Producer) makes list available to Provider (Consumer) **<br/>
Once the list is finalized, the Payer and Provider agree to exchange the list periodically as required. The specific mechanism of how this exchange happens varies based on Payers and Providers. This is accomplished by using the APIs specified by this implementation guide.

**NOTE:** The above workflow is the normal scenario. In addition to the above workflow the Producer may change the list periodically based on additional data. As this happens the Producer may decide to repeat Steps 2 through 4. The Producer and Consumer may use the notification capability using Subscriptions to keep track of changes to the Member Attribution List. Alternatively, the Producer and Consumer may agree upon a cadence to exchange the Member Attribution List based on business requirements.
Every change that is made to the list may be available to the Consumer via APIs in real-time or at specified intervals. For example, if it is a monthly list, then as changes get made the updated list will be exchanged on a monthly basis. The Producer may enable the Member Attribution List retrieval APIs continuously and allow Consumers to retrieve the [Member Attribution List data](usecases.html#member-attribution-list-workflows-and-definitions) at their convenience. 

#### Considerations

* The scenario above uses the term 'Producer'.  Typically, that would be a Payer organization, but in some cases, it could be a Provider Organization. This is true in [Data at Point of Care use cases](https://dpc.cms.gov/).



### Member Attribution List Exchange for Scenario #2 (STU2 Workflow)

{% include img.html img="workflow-scenario2.png" caption="Figure 3: Member Attribution List Exchange Workflow for Scenario #2" %}

The following is a brief description of the workflow steps with a Payer representing the Producer, and a Provider Organization representing the Consumer. This workflow differs from the previous workflow in that the Consumer is creating the Member Attribution List first and then providing the list to the Producer.

**1. Payer (Producer) and Provider (Consumer) enter into a contract **<br/>
Provider and a Payer enter into a contract with specific terms and conditions and decide on the need for a Member Attribution List. Payer supports the capabilities required to create a Member Attribution List.

**2. Provider (Consumer) creates the list in the Payer (Producer) system **<br/>
In this step the Provider creates the Member Attribution List in the payer system. The detailed steps to create a Memeber Attribution List in the Producer's systems is outlined in the [Formal Specification](spec.html).

**3. Payer (Producer) reconciles the list internally and notifies Provider (Consumer) of changes **<br/>
Once the Payer receives the list in Step 2, the Payer may reconcile the list internally, modify it and then notify the Provider of the changes. 

**4. Provider (Consumer) reconciles the list and requests additional changes to the list by adding and removing members **<br/>
Providers reconcile the list internally and identify that there may be members who need to be added and members who need to be removed from the list. To do so, the Provider uses the member-add and member-remove APIs to add and remove members from the list.
Payers (Producrers) can decide if the members should be added or removed based on the request.

**NOTE** Steps 3 and 4 can be repeated as many times as needed until the Producer and the Consumer agree upon a final list.

**5. Payer (Producer) and Provider (Consumer) agree upon a Member Attribution List for a specific use case when the Consumer indicates there are no more changes to be made **<br/>
Consumer invokes the confirm-attribution-list operation to indicate there are no further changes to be made to the Member Attribution List. Providers and Payers agree upon the finalized Member Attribution List for various use cases.




---

