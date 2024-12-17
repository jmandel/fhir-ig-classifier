File: repos/IHE_SLASH_ITI.Scheduling/sushi-config.yaml

# sushi-config.yaml is documented https://fshschool.org/docs/sushi/configuration/
# ───────────────────────────────────────────────────
# the id should be lowercase made up of "ihe." + {domain acronym} + "." + {profile acronym/short-name}
# e.g. ihe.iti.mhds, or ihe.iti.basicaudit
id: ihe.iti.scheduling
canonical: https://profiles.ihe.net/ITI/Scheduling
version: 1.0.1-current
name: IHE_ITI_Scheduling
title: "Scheduling"
description: The IHE FHIR Scheduling Profile is a specification providing FHIR APIs and guidance for access to and booking of appointments for patients by both patient and practitioner end users. This specification is based on FHIR Version 4 and specifically the Schedule, Slot, and Appointment resources, and on the previous work of the [Argonaut Project](https://fhir.org/guides/argonaut/scheduling/release1/).
releaseLabel: ci-build
#releaseLabel: ballot
#releaseLabel: Trial-Implementation
#date: 2024-12-12
status: active
publisher:
  - name: IHE IT Infrastructure Technical Committee
  - url: https://www.ihe.net/ihe_domains/it_infrastructure/
  - email: iti@ihe.net
contact:
  - name: IHE IT Infrastructure Technical Committee
    telecom:
      - system: email
        value: iti@ihe.net
license:  CC-BY-4.0
fhirVersion: 4.0.1
dependencies: 
#  hl7.fhir.uv.ipa: 1.0.0
  ihe.iti.balp:
    id: iheitibasicaudit
    uri: https://profiles.ihe.net/ITI/BALP/ImplementationGuide/ihe.iti.balp
    version: 1.1.x
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
#copyright: IHE http://www.ihe.net/Governance/#Intellectual_Property
copyrightYear: 2024+


parameters:  # see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
  path-resource:
    - input/resources
    - fsh-generated/resources
    - input/examples
#  path-pages:
#    - input/pagecontent
#    - fsh-generated/includes
  show-inherited-invariants: 'false'
  usage-stats-opt-out: 'false'
  logging: progress
  shownav: 'true'
  active-tables: 'false'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'

#resources:
# list every example here with a name, description and that exampleBoolean is true; These are used to populate the artifacts page, and are needed to eliminate build warnings 
# You may delay filling out this section until you approach publication as it is merely a nice to have and eliminates build warnings -- If you do this then you will need above the autoload-resources true
resources:
  Bundle/example-appt-bundle-1:
    name: Potential Appointment List 
    description: Response to a $find operation example
    exampleBoolean: true
  Practitioner/dr-y:
    name: Practitioner Dr. Y
    description: Example practitioner
    exampleBoolean: true
  Appointment/appt1-1:
    name: Example appointment with Dr. Y
    description: Example appointment
    exampleBoolean: true
  Patient/pat1:
    name: Meiko Lufhir Jr., PhD
    description: Example patient
    exampleBoolean: true


pages:
# itemize here each narrative page. Include assigned section numbers when appropriate
  index.md:
    title: Scheduling Home
    generation: markdown
  volume-1.md:
    title: 1:55 Scheduling
    generation: markdown
  ITI-115.md:
    title: 2:3.115 Find Potential Appointments [ITI-115]
    generation: markdown
  ITI-116.md:
    title: 2:3.116 Hold Appointment [ITI-116]
    generation: markdown
  ITI-117.md:
    title: 2:3.117 Book Appointment [ITI-117]
    generation: markdown
  ITI-118.md:
    title: 2:3.118 Find Existing Appointments [ITI-118]
    generation: markdown
  testplan.md:
    title: "Test Plan"
    generation: markdown
  other.md:
    title: Changes to Other IHE Specifications
    generation: markdown
  download.md:
    title: Download and Analysis
    generation: markdown
  issues.md:
    title: Significant Changes and Issues
    generation: markdown

menu:
  Scheduling Home: index.html
  Volume 1:
    Introduction: volume-1.html
    Actors and Transactions: volume-1.html#actors-and-transactions
    Actor Options: volume-1.html#actor-options
    Required Actor Groupings: volume-1.html#required-groupings
    Overview: volume-1.html#overview
    Security Considerations: volume-1.html#security-considerations
    Cross-Profile Considerations: volume-1.html#other-grouping
  Volume 2:
    Find Potential Appointments [ITI-115]: ITI-115.html
    Hold Appointment [ITI-116]: ITI-116.html
    Book Appointment [ITI-117]: ITI-117.html
    Find Existing Appointments [ITI-118]: ITI-118.html
  Artifacts: artifacts.html
  Other:
    Changes to Other IHE Specifications: other.html
    Download and Analysis: download.html
    Test Plan: testplan.html

---

// File: input/pagecontent/download.md

You can also download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [GitHub](https://github.com/IHE/ITI.Scheduling).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}


#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/index.md

{%include intro-desc.md%}

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide
This guide is organized into the following sections:

1. Volume 1:
   1. [Introduction](volume-1.html)
   1. [Actors and Transactions](volume-1.html#actors-and-transactions)
   1. [Actor Options](volume-1.html#actor-options)
   1. [Required Actor Groupings](volume-1.html#required-groupings)
   1. [Overview](volume-1.html#overview)
   1. [Security Considerations](volume-1.html#security-considerations)
   1. [Cross Profile Considerations](volume-1.html#other-grouping)

2. Volume 2: Transaction Detail
   1. [Find Potential Appointments \[ITI-115\]](ITI-115.html)
   1. [Hold Appointment \[ITI-116\]](ITI-116.html)
   1. [Book Appointment \[ITI-117\]](ITI-117.html)
   1. [Find Existing Appointments \[ITI-118\]](ITI-118.html)

3. Other
   1. [Changes to Other IHE Specifications](other.html)
   1. [Download and Analysis](download.html)
   1. [Test Plan](testplan.html)


See also the [Table of Contents](toc.html) and the index of [Artifacts](artifacts.html) defined as part of this implementation guide.


### Conformance Expectations

IHE uses the normative words: “REQUIRED”, “REQUIRED NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “recommended”, “MAY”, and “OPTIONAL” according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Required Support

The use of ```RequiredSupport``` in StructureDefinition profiles equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).

RequiredSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor SHALL populate the elements marked with RequiredSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit. 
The consuming actors SHOULD handle these elements being populated or being absent/empty. 
Note that sometimes RequiredSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.


---

// File: input/pagecontent/issues.md

## Significant Changes

### Significant Changes from Previous Revision
None, this is the first published revision.

## Issues

### Submit an Issue
IHE welcomes [New Issues](https://github.com/IHE/ITI.Scheduling/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues can be submitted to the [PCC Public Comment form](https://www.ihe.net/PCC_Public_Comments/).

As issues are submitted they will be managed on the [ITI.Scheduling GitHub Issues](https://github.com/IHE/ITI.Scheduling/issues), where discussion and workarounds can be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. 
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues

- ITI-Scheduling-001: `$book` only, or `$book` and `$modify`? The current approach is to provide three distinct uses for the `$book` operation. See the [`$book` operation](./OperationDefinition-appointment-book.html) for details. \([Issue 31](https://github.com/IHE/ITI.Scheduling/issues/31)\)
- ITI-Scheduling-002: Should there be a named option for supporting the [Appointment Hold \[ITI-16\]](./ITI-116.html) transaction? \([Issue 32](https://github.com/IHE/ITI.Scheduling/issues/32)\)
- ITI-Scheduling-003: Should there be a named option for supporting the [Find Existing Appointments \[ITI-18\]](./ITI-118.html) transaction? \([Issue 33](https://github.com/IHE/ITI.Scheduling/issues/33)\)
- ITI-Scheduling-004: Need to add Resource Examples \([Issue 26](https://github.com/IHE/ITI.Scheduling/issues/26)\)
- ITI-Scheduling-005: Need a Test Plan \([Issue 20](https://github.com/IHE/ITI.Scheduling/issues/20)\)
- ITI-Scheduling-006: Need Audit Events for \[ITI-115\], \[ITI-116\], and \[ITI-118\] \([Issue 30](https://github.com/IHE/ITI.Scheduling/issues/30)\)

### Closed Issues
No closed issues.

---

// File: input/pagecontent/ITI-115.md

This section corresponds to transaction \[ITI-115\] of the IHE Technical Framework. Transaction \[ITI-115\] is used by the Scheduling Client and Scheduling Server Actors. The Find Potential Appointments \[ITI-115\] transaction is used to provide a set of parameters to the server, and based on them to get back a list of possible appointments.

### 2:3.115.1 Scope

The Find Potential Appointments \[ITI-115\] transaction allows a Scheduling Client to retrieve a list of available slots for potential appointments from a Scheduling Server based on certain search criteria.

### 2:3.115.2 Actors Roles

<p id ="t3.115.2-1" class="tableTitle"><strong>Table 2:3.115.2-1: Actor Roles</strong></p>

|Actor | Role |
|-------------------|--------------------------|
| [Scheduling Client](volume-1.html#client)    | Sends a "Find Potential Appointments" request to Server |
| [Scheduling Server](volume-1.html#server) | Receives and processes the "Find Potential Appointments" request and responds with 0, 1 or more potential appointment slots |
{: .grid}

### 2:3.115.3 Referenced Standards

- [HL7 FHIR Release 4]({{site.data.fhir.path}})

### 2:3.115.4 Messages
<figure>
{%include ITI-115-seq.svg%}
<figcaption><strong>Figure 2:3.115.4-1: Find Potential Appointments Interactions</strong></figcaption>
</figure>
<br clear="all">


#### 2:3.115.4.1 Find Potential Appointments Request
This transaction uses the `$find` operation as defined in the [Find Potential Appointments Operation Definition](./OperationDefinition-appointment-find.html).

##### 2:3.115.4.1.1 Trigger Events

When a Scheduling Client needs to find potential slot to book a new appointment, it issues a "Find Potential Appointments" request.

##### 2:3.115.4.1.2 Message Semantics
The Find Potential Appointment request is defined as a [FHIR Operation]({{site.data.fhir.path}}operations.html). Please see the corresponding [Find Potential Appointments Operation Definition](./OperationDefinition-appointment-find.html).

###### 2:3.115.4.1.2.1 Request Parameters

The request parameters in the [table, which is part of the operation definition](OperationDefinition-appointment-find.html#root), are derived from search parameters defined for the [FHIR Appointment Resource]({{site.data.fhir.path}}appointment.html#search) and from additional functionally relevant entities, for example `organization` or `referral`.

**Example:**
The Scheduling Client uses an HTTP POST with the body containing the search parameter like this:

```
POST  [base]/Appointment/$find

{
    "resourceType": "Parameters",
    "parameter": [{
        "name": "start",
        "valueDateTime" : "2017-07-15T20:00:00Z"
    },
    {
        "name": "end",
        "valueDateTime" : "2017-07-17T20:00:00Z"
    },
    {
        "name": "practitioner",
        "valueReference": {"identifier": {"system":"urn:oid:1.3.6.1.4.1.19376.1.2.999", "value": "PR23143"},"display":"Dr. Pro Vider" }
    }]
}
```

##### 2:3.115.4.1.3 Expected Actions

Binding to CodeSets and ValueSets are expected to be localized. If no localization is available the Scheduling Client is expected to use a code from the: 

Note 1: [Practice Setting Code ValueSet](https://hl7.org/fhir/R4/valueset-c80-practice-codes.html).

Note 2: [Appointment Reason Code ValueSet](https://hl7.org/fhir/R4/v2/0276/index.html).

Note 3: [Service Category ValueSet](https://hl7.org/fhir/R4/valueset-service-category.html).

Note 4: [Service Type ValueSet](https://hl7.org/fhir/R4/valueset-service-type.html).

The Scheduling Client SHALL support [FHIR Pagination]({{site.data.fhir.path}}http.html#paging) when the Scheduling Server paginates its response.

#### 2:3.115.4.2 Find Potential Appointments Response Message

##### 2:3.115.4.2.1 Trigger Events

Upon receiving a Find Potential Appointments request the Scheduling Server apply internal (business) logic to determine possible appointment (slots) that meet the search criteria specified by the Scheduling Client. The Scheduling Server returns a list of potential Appointment option the Scheduling Client can choose from to reserve or book an appointment.

##### 2:3.115.4.2.2 Message Semantics

The list of potential appointments is returned as a FHIR Bundle of type ```searchset``` is returned containing 0, 1, or more Appointment resources. The details are in [the Bundle profile](./StructureDefinition-ihe-sched-avail-bundle.html). 


##### 2:3.115.4.2.3 Expected Actions
The Scheduling Server will make a best effort to find potential Appointments. Each Appointment resource included in the response Bundle needs to be as complete as possible allowing the Scheduling Client to render the appointment information in such a way that a (human) user is able to reserve or book an appointment.

The Scheduling Server SHALL honour the ```_count``` request parameter when included in the Find Appointments Query request by a Scheduling Client by limiting the number of potential appointments to match the ```_count``` value.

The Scheduling Server SHALL include a ```total``` attribute in the FHIR Bundle response indicating the total number of potential appointments it has determined. 

The Scheduling Server MAY  use [pagination]({{site.data.fhir.path}}http.html#paging) allowing a Scheduling Client to page through the results.

The Scheduling Server SHALL NOT include any held appointments (i.e., appointments that were reserved as a result of a previous ```$hold``` operation, and for which the holding period had not expired) in the list of potential appointments.

##### 2:3.115.4.2.4 Error Codes

In the absence of any processing errors an http 200 (OK) error code is returned.

In case security or other constraints prevent a Scheduling Server from returning a response to the Scheduling Client an http 4xx error code is returned.

<p id ="t3.115.4.2.4-1" class="tableTitle"><strong>Table 2:3.115.4.2.4-1: Error Codes</strong></p>

|Error Code | Description | Explanation |
|-----------|-------------|-------------|
|400 | Bad Request | The server cannot or will not process the request due to an apparent client error |
|401 | Unauthorized | The server cannot or will not process the request due to an authorization issue with the request |
|403 | Forbidden | The server cannot or will not process the request because the Scheduling Client (or a user) is not authorized for the request |
{: .grid}

The Scheduling Server MAY include an OperationOutcome to the response where it uses the values from the Error Codes table.


<p id ="t3.115.4.2.4-2" class="tableTitle"><strong>Table 2:3.115.4.2.4-2: OperationOutcome Attributes</strong></p>

|Attribute | Value | 
|----------|------|
| severity | Fatal |
| code | \<http error description\> |
| diagnostics | \<http error explanation\> |
{: .grid}

### 2:3.115.5 CapabilityStatement Resource

A Server implementing this transaction SHALL provide a CapabilityStatement Resource as described in ITI TF-2x: Appendix Z.3 indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [Client](CapabilityStatement-IHE.Scheduling.client.html)
- Requirements CapabilityStatement for [Server](CapabilityStatement-IHE.Scheduling.server.html)

### 2:3.115.6 Security Considerations

See [IHE Scheduling Security Considerations](volume-1.html#security-considerations)

#### 2:3.115.6.1 Security Audit Considerations

The Find Potential Appointments Transaction, when it contains a Patient resource or reference as one of the parameters, is a Patient Record event as defined in [Table 3.20.4.1.1.1-1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.4.1.1.1). The actors involved SHALL record audit events according to the following:

##### 2:3.115.6.1.1 Client Audit 

The Scheduling Client, when grouped with the [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor, SHALL be able to record an audit event consistent with the [Find Potential Appointments Source AuditEvent](./StructureDefinition-IHE.Scheduling.FindPotential.Audit.Source.html). [Audit Example](./AuditEvent-ex-auditSchedulingFindPotential-source.html) for a Find Potential Appointments transaction from the client perspective.

##### 2:3.115.6.1.2 Server Audit 

The Scheduling Server, when grouped with the [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor, SHALL be able to record an audit event consistent with the [Book Potential Appointments Recipient AuditEvent](./StructureDefinition-IHE.Scheduling.FindPotential.Audit.Recipient.html). [Audit Example](./AuditEvent-ex-auditSchedulingFindPotential-recipient.html) for a Find Potential Appointments transaction from the server perspective.

### 2:3.115.7 Other Profile Groupings

Both the Scheduling Client and Scheduling Server MAY be grouped with their respective [Internet User Authentication (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Actors.

---

// File: input/pagecontent/ITI-116.md


This section corresponds to transaction \[ITI-116\] of the IHE Technical Framework. Transaction \[ITI-116\] is used by the Scheduling Client and Scheduling Server Actors. The Hold Appointment \[ITI-116\] transaction is used to request that a specific appointment (selected from one of the available potential appointments returned with the response of a preceding \[ITI-115\] query) is held by the Scheduling Server, until the appointment is booked, cancelled, or the hold expires.

### 2:3.116.1 Scope

The Hold Appointment \[ITI-116\] transaction is used by a Scheduling Client to request a hold for a specific appointment from the Scheduling Server.

### 2:3.116.2 Actor Roles

<p id ="t3.116.2-1" class="tableTitle"><strong>Table 2:3.116.2-1: Actor Roles</strong></p>

|Actor | Role |
|-------------------+--------------------------|
| [Scheduling Client](volume-1.html#client)    | Sends a "Hold Appointment" request to Server |
| [Scheduling Server](volume-1.html#server) | Receives and processes "Hold Appointment" request and responds with a successful hold or an unsuccessful outcome |
{: .grid}

### 2:3.116.3 Referenced Standards

- [HL7 FHIR Release 4]({{site.data.fhir.path}})

### 2:3.116.4 Messages

<figure>
{%include ITI-116-seq.svg%}
<figcaption><strong>Figure 2:3.116.4-1: Hold Appointment Interactions</strong></figcaption>
</figure>
<br clear="all">

#### 2:3.116.4.1 Hold Appointment Request
This transaction uses the `$hold` operation as defined in the [Hold Appointment Operation Definition](./OperationDefinition-appointment-hold.html).

##### 2:3.116.4.1.1 Trigger Events

This is an optional transaction in the ITI Scheduling Profile.  and in cases where the requester needs additional information, or needs to perform additional steps before an appointment is booked, the Scheduling client can request a hold for a specific potential appointment that is the result of a Find Potential Appointments \[ITI-115\] transaction.

##### 2:3.116.4.1.2 Message Semantics

The Hold Appointment request is defined as a [FHIR Operation]({{site.data.fhir.path}}operations.html). Please see the corresponding [Hold Appointment Operation Definition](./OperationDefinition-appointment-hold.html).

##### 2:3.116.4.1.3 Expected Actions

The Scheduling Server is expected to hold the necessary time slots and resources for the potential appointment to take place at the given time and for the given duration. 

Note that it is possible that between the time the Find Potential Appointments [\[ITI-115\]](./ITI-115.html) response was received, and the time the Hold Appointment \[ITI-116\] request is issued, the requested appointment is no longer available. In such case, the server SHALL respond with an OperationOutcome that describes the issue.

#### 2:3.116.4.2 Hold Appointment Response Message

##### 2:3.116.4.2.1 Trigger Events

The response to the $hold operation is an Appointment resource or an OperationOutcome resource. The Appointment resource SHALL have the `Appointment.status` set to `pending`.

##### 2:3.116.4.2.2 Message Semantics

The response is an [ITI Scheduling Appointment Bundle](./StructureDefinition-ihe-sched-appt.html). A successful $hold operation SHALL return a single Appointment resource within the bundle, and MAY have an additional OperationOutcome resource with supplemental information. An unsuccessful $hold operation SHALL return only an OperationOutcome resource describing the problem with satisfying the operation.   

##### 2:3.116.4.2.3 Expected Actions

A successful `$hold` operation SHALL result in the server refusing any other attempts to schedule the time slot and any other needed resources that MAY invalidate the held Appointment.

For the case where the Appointment is not available to be held, the server SHALL return an OperationOutcome with at least one `issue` with `severity` of `fatal` and `code` of `not-found` for the Appointment resource.

After a successful `$hold` operation, the Scheduling Client can use the `$book` operation using the `appointment-reference` parameter to complete the booking.

### 2:3.116.5 CapabilityStatement Resource

A Server implementing this transaction SHALL provide a CapabilityStatement Resource as described in ITI TF-2: Appendix Z.3 indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [Client](CapabilityStatement-IHE.Scheduling.client.html)
- Requirements CapabilityStatement for [Server](CapabilityStatement-IHE.Scheduling.server.html)

### 2:3.116.6 Security Considerations

See [IHE Scheduling Security Considerations](volume-1.html#security-considerations).

#### 2:3.116.6.1 Security Audit Considerations

The Hold Appointment Transaction is a Patient Record event as defined in [Table 3.20.4.1.1.1-1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.4.1.1.1). The actors involved SHALL record audit events according to the following:

##### 2:3.116.6.1.1 Client Audit 

The Scheduling Client, when grouped with the [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor, SHALL be able to record an audit event consistent with the [Hold Appointment Source AuditEvent](./StructureDefinition-IHE.Scheduling.Hold.Audit.Source.html). [Audit Example](AuditEvent-ex-auditSchedulingHold-source.html) for a Hold Appointment transaction from the client perspective.

##### 2:3.116.6.1.2 Server Audit 

The Scheduling Server, when grouped with the [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor, SHALL be able to record an audit event consistent with the [Hold Appointment Recipient AuditEvent](./StructureDefinition-IHE.Scheduling.Hold.Audit.Recipient.html). [Audit Example](AuditEvent-ex-auditSchedulingHold-recipient.html) for a Hold Appointment transaction from the server perspective.

### 2:3.116.7 Other Profile Groupings

Both the Scheduling Client and Scheduling Server MAY be grouped with their respective [Internet User Authentication (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Actors.

---

// File: input/pagecontent/ITI-117.md

This section corresponds to transaction [ITI-117] of the IHE Technical Framework. Transaction [ITI-117] is used by the Scheduling Client and Scheduling Server Actors. The Find Appointments [ITI-115] transaction is used to provide a set of parameters to the server, and based on them to get back a list of possible appointments.

### 2:3.117.1 Scope

The Client [ITI-117] transaction passes a go Request from a Client to a Server.

### 2:3.117.2 Actor Roles

<p id ="t3.117.2-1" class="tableTitle"><strong>Table 2:3.117.2-1: Actor Roles</strong></p>

|Actor | Role |
|-------------------+--------------------------|
| [Client](volume-1.html#client)    | Sends query to Server |
| [Server](volume-1.html#server) | Receives the query and responds |
{: .grid}

### 2:3.117.3 Referenced Standards

- [HL7 FHIR Release 4]({{site.data.fhir.path}})

### 2:3.117.4 Messages

<figure>
{%include ITI-117-seq.svg%}
<figcaption><strong>Figure 2:3.117.4-1: Book Appointment Interactions</strong></figcaption>
</figure>
<br clear="all">


#### 2:3.117.4.1 Book Appointment Request
This transaction uses the `$book` operation as defined in the [Book Appointment Operation Definition](./OperationDefinition-appointment-book.html).

##### 2:3.117.4.1.1 Trigger Events
This transaction can be triggered by:
- the booking step after selecting the appropriate appointment among the potential appointments that were returned by a `$find` operation
- requesting the modification of an already booked appointment
- canceling an already booked or held appointment

##### 2:3.117.4.1.2 Message Semantics
The Book Appointment request is defined as a [FHIR Operation]({{site.data.fhir.path}}operations.html). Please see the corresponding [Book Appointment Operation Definition](./OperationDefinition-appointment-book.html).

##### 2:3.117.4.1.3 Expected Actions

The Scheduling Server is expected to create, modify, or cancel the appointment.

#### 2:3.117.4.2 Book Appointment Response

##### 2:3.117.4.2.1 Trigger Events

As described in the [Operation Definition](./OperationDefinition-appointment-book.html), the response is triggered by a request to create, modify, or cancel an appointment.

##### 2:3.117.4.2.2 Message Semantics

The response is an [ITI Scheduling Appointment Bundle](./StructureDefinition-ihe-sched-appt.html). A successful $book operation SHALL return a single Appointment resource within the `Bundle`, and MAY have an additional OperationOutcome resource with supplemental information. An unsuccessful $book operation SHALL return only an OperationOutcome resource within the `Bundle`, describing the problem with satisfying the operation.

##### 2:3.117.4.2.3 Expected Actions

The Scheduling Client is expected to convey the outcome to the user who requested the creation, modification, or cancellation of the appointment, and to record the current state of the appointment in the corresponding system(s), including any error conditions.


### 2:3.117.5 CapabilityStatement Resource

Servers implementing this transaction SHALL provide a CapabilityStatement Resource as described in ITI TF-2x: Appendix Z.3 indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [Client](CapabilityStatement-IHE.Scheduling.client.html)
- Requirements CapabilityStatement for [Server](CapabilityStatement-IHE.Scheduling.server.html)

### 2:3.117.6 Security Considerations

See [ITI Scheduling Security Considerations](volume-1.html#security-considerations).

#### 2:3.117.6.1 Security Audit Considerations

The Book Appointment Transaction is a Patient Record event as defined in [Table 3.20.4.1.1.1-1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.4.1.1.1). The actors involved SHALL record audit events according to the following:

##### 2:3.117.6.1.1 Client Audit 

The Scheduling Client, when grouped with the [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor, SHALL be able to record an audit event consistent with the [Book Appointment Source AuditEvent](./StructureDefinition-IHE.Scheduling.Book.Audit.Source.html). [Audit Example](AuditEvent-ex-auditSchedulingBook-source.html) for a Book Appointment transaction from the client perspective.

##### 2:3.117.6.1.2 Server Audit 

The Scheduling Server, when grouped with the [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor, SHALL be able to record an audit event consistent with the [Book Appointment Recipient AuditEvent](./StructureDefinition-IHE.Scheduling.Book.Audit.Recipient.html). [Audit Example](./AuditEvent-ex-auditSchedulingBook-recipient.html) for a Book Appointment transaction from the server perspective.

### 2:3.117.7 Other Profile Groupings

Both the Scheduling Client and Scheduling Server MAY be grouped with their respective [Internet User Authentication (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Actors.

---

// File: input/pagecontent/ITI-118.md

This section corresponds to transaction [ITI-118] of the IHE Technical Framework. Transaction [ITI-118] is used by the Scheduling Client and Scheduling Server Actors. The Find Existing Appointments [ITI-118] transaction is used to search for existing appointments on the server.

### 2:3.118.1 Scope

The Client [ITI-118] transaction requests a list of existing appointments from a Server for a particular patient.

### 2:3.118.2 Actor Roles

<p id ="t3.118.2-1" class="tableTitle"><strong>Table 2:3.118.2-1: Actor Roles</strong></p>

| Actor | Role |
|-------------------------------------------|
| [Client](volume-1.html#client)  | Requests a list of appointments matching the supplied set of criteria (example: status, patient, service location, etc.) from the Scheduling Server. The Scheduling Client MAY choose to persist the information received, and/or render it for viewing |
| [Server](volume-1.html#server) | Returns information from appointments matching the supplied set of criteria provided by the Scheduling Client |
{: .grid}

### 2:3.118.3 Referenced Standards

- [HL7 FHIR Release 4 - Appointment]({{site.data.fhir.path}}appointment.html)

### 2:3.118.4 Messages

<figure>
{%include ITI-118-seq.svg%}
<figcaption><strong>Figure 2:3.118.4-1: Find Existing Appointments Interactions</strong></figcaption>
</figure>
<br clear="all">


#### 2:3.118.4.1 Find Existing Appointments Query Request
This message uses the FHIR Search operation on the target Server endpoint to search for Appointment resources.

##### 2:3.118.4.1.1 Trigger Events

When a Scheduling Client needs to needs to find existing appointments it issues a Find Existing Appointments query request.

##### 2:3.118.4.1.2 Message Semantics

The Scheduling Client MAY use a GET or POST based search. The Scheduling Server SHALL support both GET and POST based [searches]( {{site.data.fhir.path}}http.html#search). The search target follows the FHIR http specification, addressing the [Appointment Resource]({{site.data.fhir.path}}appointment.html) type.

```[base]/Appointment?<parameters>```

##### 2:3.118.4.1.3 Search Parameters
See the Server and Client Capability Statements for the search parameters applicable to the \[ITI-18\] transaction.

<p id ="t3.118.4.1.3-1" class="tableTitle"><strong>Table 2:3.118.4.1.3-1: Search Parameters</strong></p>

| Parameter | Type | Definition |
|---------------------------------------------|
| patient | ```reference``` | This parameter identifies the patient actor participating in this appointment either by its fhir resource id (if known to the Scheduling Client), or by a business identifier known for this patient. In case of a business identifier it is strongly recommended to use both the identifying system and value (i.e., patient.identifier=\<system>\|\<value>). If no \<system> is supplied the Scheduling Server MAY use internal logic to interpret the \<value> |
| date | ```date``` | This parameter defines the date range to search for appointments. Normal [date]({{site.data.fhir.path}}search.html#date) prefixes apply. |
| practitioner | ```reference``` | This parameter identifies the practitioner actor participating in this appointment either by its fhir resource id (if known to the Scheduling Client), or by a business identifier known for this practitioner. In case of a business identifier it is strongly recommended to use both the identifying system and value (i.e., practitioner.identifier=\<system>\|\<value>). If no \<system> is supplied the Scheduling Server MAY use internal logic to interpret the \<value> |
| status | ```token``` | This parameter reflects the overall status of the appointment as defined in [AppointmentStatus]({{site.data.fhir.path}}codesystem-appointmentstatus.html) |
| location | ```reference``` | This parameter identifies the location actor participating in this appointment either by its fhir resource id (if known to the Scheduling Client), or by a name known for this location.|
| specialty | ```token``` | This parameter identifies the specialty of a practitioner that would be required to perform the service requested in this appointment |
{: .grid}


For example, search appointments for patient (identifier 12345), after October 21st, 2023 with practitioner (npi number: 12345678)
```GET https://server.example.com/fhir/4/Appointment?patient.identifier=urn:oid:1.2.3.4.5|12345&date=gt20231021&practitioner.identifier=urn:oid:2.16.840.1.113883.4.6|12345678```

###### 2:3.118.4.1.3.1 Patient Identifiers
Patient identifier SHALL be fully qualified and consist of an identifier value and system (a.k.a. assigning authority or patient identity domain). Preferably identifier systems are identified with an OID value (e.g., urn:oid:1.2.3.4.5). Alternatively a URI value MAY be used (e.g., http://hl7.org/fhir/sid/us-ssn or http://hospital-1.org). 

In the case when the Scheduling Server is not able to process a identifier system in a Find Existing Appointments Query transaction it SHALL return a FHIR bundle of type `searchset` with 0 entries.

The case where the Scheduling Client may need to provided multiple patient.identifiers, all belonging to the same patient as known to the client, is considered out of scope for the ITI Scheduling Profile. 

###### 2:3.118.4.1.3.2 _count
A Scheduling Client MAY add a `_count` parameter to the Find Appointment Query request to limit the number of responses. 

###### 2:3.118.4.1.3.3 _include
A Scheduling Client MAY add a `_include` parameter to request a Scheduling Server to include participation actors (Practitioner, PractitionerRole, RelatedPerson, Device, HealthcareService, or Location) in the response

##### 2:3.118.4.1.4 Expected Actions

<p id ="t3.118.4.1.4-1" class="tableTitle"><strong>Table 2:3.118.4.1.4-1: Search Parameter Optionality</strong></p>

| Parameter | Client | Server |
|-------------------|
| patient | R | R |
| date | O | R |
| practitioner | O | O |
| location | O | O |
| specialty | O | O |
{: .grid}

The table above identifies the search parameters that are optional or mandatory to support for both the Scheduling Client and Scheduling Server. In case a Scheduling Client issues a request with no parameters included the Scheduling Server MAY determine how to respond. For example, a valid response in such case would be a FHIR Bundle of type 'searchset' with zero entries, and including an operationOutcome stating it needs a minimal set of search parameters to be defined in the search request. 

#### 2:3.118.4.2 Find Appointments Query Response

##### 2:3.118.4.2.1 Trigger Events

The Scheduling Server has results or errors to report to the Scheduling Client. This MAY include 0, 1 or more appointments matching the search parameters specified by the Scheduling Client as a result of the Find Appointment Query request. This MAY include processing or security errors.

##### 2:3.118.4.2.2 Message Semantics

The Find Appointments Query response sent from the Scheduling Server to the Scheduling Client consists of a FHIR Bundle of type ```searchset```. 

To limit the number of Appointment entries in the response bundle a Scheduling Server MAY choose to use [pagination]({{site.data.fhir.path}}http.html#paging).

The Scheduling Server SHALL add a ```total``` attribute indicating the total number of appointments that match the Find Appointments Query request.

##### 2:3.118.4.2.3 Expected Actions

The Scheduling Server will make a best effort to add as many Appointment resource attributes in each Appointment entry returned. 

The Scheduling Server SHALL honour the ```_count``` request parameter when included in the Find Appointments Query request by a Scheduling Client

The Scheduling Server SHALL honour the ```_include``` request parameter for referenced participating actors (Practitioner, PractitionerRole, RelatedPerson, Device, HealthcareService, and Location) when included in the Find Appointments Query request by a Scheduling Client.

##### 2:3.118.4.2.4 Error Codes

In the absence of any processing errors a http 200 (OK) error code is returned.

In case security constraints prevent a Scheduling Server from returning a response to the Scheduling Client a http 4xx error code is returned as described in Volume 2, Appendix Z.

<p id ="t3.118.4.2.4-1" class="tableTitle"><strong>Table 2:3.118.4.2.4-1: Error Codes</strong></p>

|Error Code | Description | Explanation |
|----------------------|
|400 | Bad Request | The server cannot or will not process the request due to an apparent client error |
|401 | Unauthorized | The server cannot or will not process the request due to an authorization issue with the request |
|403 | Forbidden | The server cannot or will not process the request because the Scheduling Client (or a user) is not authorized for the request |
{: .grid}

The Scheduling Server MAY include an OperationOutcome to the response where it uses the values from the Error Codes table.

<p id ="t3.118.4.2.4-2" class="tableTitle"><strong>Table 2:3.118.4.2.4-2: OperationOutcome Attributes</strong></p>

| Attribute | Value | 
|---------|
| severity | Fatal |
| code | \<http error description> |
| diagnostics | \<http error explanation> |
{: .grid}

### 2:3.118.5 CapabilityStatement Resource

Servers implementing this transaction SHALL provide a CapabilityStatement Resource as described in ITI TF-2x: Appendix Z.3 indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [Client](CapabilityStatement-IHE.Scheduling.client.html)
- Requirements CapabilityStatement for [Server](CapabilityStatement-IHE.Scheduling.server.html)

### 2:3.118.6 Security Considerations

See the general Security Considerations in [ITI TF-1: 38.5](https://profiles.ihe.net/ITI/PDQm/volume-1.html#1385-pdqm-security-considerations).

#### 2:3.118.6.1 Security Audit Considerations

Both the Scheduling Server as Scheduling Client SHALL record audit events. 

##### 2:3.118.6.1.1 Scheduling Client Audit 

The Scheduling Client SHALL be grouped with an [ATNA Secure Node or Secure Application (ATNA)](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor, and record a Find Appointment Query request according to the BALP basic profile for REST events - Execute as defined in [RESTful activities](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities).

##### 2:3.118.6.1.2 Scheduling Server Audit 

The Scheduling Server SHALL be grouped with an [ATNA Secure Node or Secure Application (ATNA)](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor, and record a Find Appointment Query request according to the BALP basic profile for REST events - Execute as defined in [RESTful activities](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities).

### 2:3.118.7 Other Profile Groupings

Both the Scheduling Client and Scheduling Server MAY be grouped with their respective [Internet User Authentication (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Actors. 


---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section contains modifications to other IHE publications and profiles and is not a part of the ITI Scheduling Profile. The content here will be incorporated into the target narrative at a future time, usually when Scheduling goes final text.
</div>

## IHE Technical Frameworks General Introduction Appendix A – Actor Summary Definitions

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}

| Actor                         | Definition                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------|
| Scheduling Client | Requests information about appointments and requests the creation, modification or cancellation of an appointment. |
| Scheduling Server | Manages appointments and provides an API for clients to query, create, modify, or cancel an appointment. |
{:.grid .table-striped}


## IHE Technical Frameworks General Introduction Appendix B – Transaction Summary Definitions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                              | Definition                                                                              |
| ---------------------------------------- | --------------------------------------------------------------------------------------- |
| Find Potential Appointments \[ITI-115\]   | Request a list of potential appointments with availability based on a given set of criteria | 
| Hold Appointment \[ITI-116\] | Request to hold a potential appointment for a specific patient |
| Book Appointment \[ITI-117\] | Request to book an appointment for a specific patient |
| Find Existing Appointments \[ITI-118\] | Find existing appointments for a given patient |
{:.grid .table-striped}

## IHE Technical Frameworks General Introduction Appendix D: Glossary

|------------------------------------------------|
| Editor, add the following new or modified terms to the [IHE Technical Frameworks General Introduction Appendix D](https://profiles.ihe.net/GeneralIntro/ch-D.html): |
{:.grid .bg-info}

| Term                         | Definition                                                    | Acronyms/Abbreviations | Synonyms    |
| ---------------------------- | --------------------------------------------------------------| -----------------------| ------------|
| none |  |
{:.grid .table-striped}


---

// File: input/pagecontent/testplan.md

**TODO: fill in the goals of the testing.

## Test Plan

**TODO: include actor based tests, include positive and edge cases.

### Unit Test Procedure

Unit Tests in this context is where a SUT is tested against a simulator or validator.  A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Where a reference implementation is used the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Integration Test Procedure

Integration Tests in this context is where two SUT of paired actors test against each other. In this case, the subset of tests that can be tested is the intersection. Testing only this intersection is necessary but not sufficient. The testing must also include the capability of the client to exercise the test scenarios that this SUT can test, to determine that failure-modes are handled properly by both SUT.

### Cucumber

**TODO: Write specific Cucumber statements, might use external tooling?


---

// File: input/pagecontent/volume-1.md


The Scheduling Profile is a vendor agnostic specification providing FHIR APIs and guidance for access to, and booking of, appointments for patients by both patient and practitioner end users, including cross-organizational workflows. This specification is based on [FHIR Version 4.0.1](https://hl7.org/fhir/R4/), and references the [Schedule]({{site.data.fhir.path}}schedule.html), [Slot]({{site.data.fhir.path}}slot.html), and [Appointment]({{site.data.fhir.path}}appointment.html) resources.

This workflow profile defines transactions that allow a scheduling client to obtain information about possible appointment opportunities based on specific parameters and based on that information, allow the client to book an appointment.

<blockquote class="impl-note">
<p><strong>History and Acknowledgment:</strong></p>
<p>
This IHE profile is based on the <a href="https://fhir.org/guides/argonaut/scheduling/release1/" target="_blank">Argonaut Scheduling Implementation Guide</a>. The following are some of the major differences from the Argonaut IG:
</p>
<ul>
    <li>The IHE Profile is based on FHIR R4</li>
    <li>The IHE Profile is intended for international use, and it does not have required bindings or any dependencies to national profiles</li>
    <li>The operations described are $find, $hold, and $book</li>
    <li>A separate transaction describes the use of FHIR Search for the Appointment resource</li>
    <li>The operation parameters use explicit data types, and support only POST transactions</li>
</ul>
</blockquote>

<a name="actors-and-transactions"> </a>

## 1:55.1 Scheduling Actors, Transactions and Content Modules

This section defines the actors, transactions, and/or content modules in this profile. General
definitions of actors are given in the Technical Frameworks General Introduction [Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html).
IHE Transactions can be found in the Technical Frameworks General Introduction [Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html).
Both appendices are located at <https://profiles.ihe.net/GeneralIntro/>.

- Actors
  - [Scheduling Client](#client)
  - [Scheduling Server](#server)
- Transactions
  - Find Potential Appointments [\[ITI-115\]](ITI-115.html)
  - Hold Appointment [\[ITI-116\]](ITI-116.html)
  - Book Appointment [\[ITI-117\]](ITI-117.html)
  - Find Existing Appointments [\[ITI-118\]](ITI-118.html)

The figure below shows the actors directly involved in the Scheduling Profile and the relevant transactions between them.

<figure>
{%include ActorsAndTransactions.svg%}
<figcaption><strong>Figure 1:55.1-1: Scheduling Actor Diagram</strong></figcaption>
</figure>
<br clear="all">

<p id ="t1:55.1-1" class="tableTitle"><strong>Table 1:55.1-1: Scheduling Profile - Actors and Transactions</strong></p>

| Actors            | Transactions               | Initiator or Responder | Optionality     | Reference      |
|-------------------|----------------------------|------------------------|-----------------|----------------|
| Scheduling Client | Find Potential Appointments [\[ITI-115\]](ITI-115.html) | Initiator              | R               | ITI TF-2: 3.115 |
|                   | Hold Appointment [\[ITI-116\]](ITI-116.html)  | Initiator              | O               | ITI TF-2: 3.116 |
|                   | Book Appointment [\[ITI-117\]](ITI-117.html)  | Initiator              | R               | ITI TF-2: 3.117 |
|                   | Find Existing Appointment [\[ITI-118\]](ITI-118.html)  | Initiator              | O               | ITI TF-2: 3.118 |
| Scheduling Server | Find Appointments [\[ITI-115\]](ITI-115.html) | Responder              | R               | ITI TF-2: 3.115 |
|                   | Hold Appointment [\[ITI-116\]](ITI-116.html)  | Responder              | O               | ITI TF-2: 3.116 |
|                   | Book Appointment [\[ITI-117\]](ITI-117.html)  | Responder              | R               | ITI TF-2: 3.117 |
|                   | Find Existing Appointment [\[ITI-118\]](ITI-118.html)  | Responder              | O               | ITI TF-2: 3.118 |
{: .grid}

### 1:55.1.1 Actors

The actors in this profile are described in more detail in the sections below.

<a name="client"> </a>

#### 1:55.1.1.1 Scheduling Client 

The Scheduling Client determines an appropriate potential appointment based on the parameters it supplies to the Scheduling Server, and then books an appointment for a given patient. The following points apply to the Scheduling Client:

- The client needs a mechanism to properly identify the patient. Although the details of this capability is out of scope for this profile, it is recommended that the Scheduling Client is grouped with the Patient Demographics Consumer from the [IHE PDQm](https://profiles.ihe.net/ITI/PDQm/index.html) Profile.
- The client SHOULD determine the FHIR Capability Statement for the [Server](CapabilityStatement-IHE.Scheduling.server.html).

Please see the FHIR Capability Statement for the [Client](CapabilityStatement-IHE.Scheduling.client.html).

<a name="server"> </a>

#### 1:55.1.1.2 Scheduling Server

The Scheduling Server provides services for providing a list of available appointments, and for booking an appointment. The following points apply to the Scheduling Server:

- The server expects that the Patient and Provider/ProviderRole resources are properly identified. The exact mechanisms for making sure that the client has this correct information is out of scope for this profile. In the case that the Scheduling Client is grouped with a Patient Demographics Consumer actor from the [IHE PDQm](https://profiles.ihe.net/ITI/PDQm/index.html) Profile, it is recommended that the Scheduling Server is grouped the Patient Demographics Supplier from the same profile. 
- The server decides on the types of appointments that are possible to make using the transactions of this profile. Such business rules are specific to the type of appointment, and other contexts surrounding the provision of care.
- The server MAY chose to implement the Hold Appointment transaction, if the supported use cases have such a need.

Please see the FHIR Capability Statement for [Server](CapabilityStatement-IHE.Scheduling.server.html).

### 1:55.1.2 Transaction Descriptions 

The transactions in this profile are summarized in the sections below.

#### 1:55.1.2.1 Find Potential Appointments [ITI-115]

This transaction searches for availability for one or more future appointments using the Find Appointments operation.

For more details see the [transaction description](ITI-115.html) and the corresponding [operation definition](./OperationDefinition-appointment-find.html).

#### 1:55.1.2.2 Hold Appointment [ITI-116]

Request for a hold on a selected Appointment in order for the user to complete entering data for booking an appointment. This operation precedes the booking and follows the determination of appointment availability using the Find Appointments operation.
{%include HoldAppointment-note.md%}

For more details see the detailed [transaction description](ITI-116.html).

#### 1:55.1.2.3 Book Appointment [ITI-117]

This operation books an appointment following the determination of appointment availability using the Find Appointments operation. Using different combination of parameters, this operation can book a new appointment, cancel an already existing appointment, or reschedule an existing appointment.
{%include BookAppointment-note.md%}

For more details see the detailed [transaction description](ITI-117.html).

#### 1:55.1.2.4 Find Existing Appointments [ITI-118]

This transaction searches for existing appointments for the patient using [FHIR Search]({{site.data.fhir.path}}search.html) against the [Appointment resource](StructureDefinition-ihe-sched-appt.html).
{%include ExistingAppointments-note.md%}

For more details see the detailed [transaction description](ITI-118.html).

<a name="actor-options"> </a>

## 1:55.2 Scheduling Actor Options

There are currently no options for these actors.

<a name="required-groupings"> </a>

## 1:55.3 Scheduling Required Actor Groupings

There are no required groupings for this profile.

<a name="overview"> </a>

## 1:55.4 Scheduling Overview

This profile is intended to address use cases for cross-organizational or patient initiated scheduling of healthcare appointments.

The following subsections show how the transactions of the profile are combined to address the use cases.

### 1:55.4.1 Concepts

The FHIR specification defines several resources to describe scheduling-related information. The  [Schedule]({{site.data.fhir.path}}schedule.html), [Slot]({{site.data.fhir.path}}slot.html), and [Appointment]({{site.data.fhir.path}}appointment.html) resources are intended to be compatible with the [iCalendar specification](https://datatracker.ietf.org/doc/html/rfc5545). A survey of existing implementations, however, showed that there is very little commonality among existing FHIR server implementations, which suggests that an operation-based specification will improve interoperability in this area.

#### 1:55.4.1.1 Scope

There is wide variety of appointments that pertain to the healthcare domain. A core assumption of this profile is that the Scheduling Server actor is responsible for all the business logic for determining the type, duration, sequencing, and all other attributes an appointment may have. This is the reason that the response to the search for potential appointments only contains Appointment resources. The management of Schedule and Slot resources is out of scope for this profile.

For example, the Scheduling server may modify existing appointments in order to free up time for an urgent appointment. While this may change the existing `Schedule` and `Slot` resources on the server, the Scheduling Client that is attempting to book the urgent appointment only needs to know that a new appointment can be booked. Any changes to existing appointments can be detected using the [\[ITI-118\]](./ITI-118.html) transaction, or, if the ITI Scheduling profile is implemented in an environment with an existing FHIR Subscription infrastructure, via a `SubscriptionNotification` for the changed appointment(s).

The overall functionality covered by this profile is as follows:

1. The Scheduling Client identifies the patient or patients for whom the appointment will be scheduled
2. The Scheduling Client determines the available parameters for requesting a list of available appointments
3. The Find Appointments transaction is completed
4. (Optionally) The Hold Appointment transaction is completed
5. The Book Appointment Transaction is completed

### 1:55.4.2 Use Cases

#### 1:55.4.2.1 Use Case \#1: Provider-facing Scheduling Client

##### 1:55.4.2.1.1 Post-discharge PCP Visit

###### 1:55.4.2.1.1.1 Post-discharge PCP Visit Use Case Description

Ms. Philips is being discharged from Green Valley General Hospital. One of the steps of the discharge process includes scheduling a follow-up appointment with Dr. Spears, Ms. Philip's primary care provider. Dr. Spears' practice is part of a different healthcare organization, which necessitates cross-organizational scheduling of the follow-up appointment.

Without the availability of the ITI Scheduling functionality, the hospital staff would have to contact Dr. Spears' practice to negotiate an appointment for the patient, or leave it to Ms. Philips to schedule the appointment by herself. This makes it likely that the follow-up appointment may not occur in a timely manner, or at all.

The ITI Scheduling profile would allow the two systems to communicate the request for an appointment, get a list of possible times, coordinate with the patient the best time for the appointment, and book the appointment with Dr. Spears. This will ensure the follow-up visit will happen on time, and that Ms. Philips will get the proper care.

###### 1:55.4.2.1.1.2 Specialty Visit Scheduling Process Flow

<figure>
{%include uc1-flow.svg%}
<figcaption><strong>1:55.4.2.1.2 Specialty Visit Scheduling</strong></figcaption>
</figure>
<br clear="all">

###### 1:55.4.2.1.2.1 Specialty Visit Scheduling Use Case Description

Dr. Brown detects that a radiology examination is recommended to proceed with the
treatment of her Patient Mr. White. Dr. Brown opens the radiology examination
scheduling in her clinical information systems and selects a radiology facility
for the examination. She asks the system to show the existing appointments for the patient and then asks for potential appointment slots for the radiology procedure.

From the list of available time slots presented in the clinical information system, Dr. Brown selects an appropriate time slot for the
examination of Mr. White. Dr. Brown records the booking details
(e.g., Mr. White demographics, treatment, body part to examine, etc.) in the
booking details dialog of the clinical information system. Dr. Brown confirms
the records and books the examination in the confirm dialog in her clinical
information system.

###### 1:55.4.2.1.2.2 Specialty Visit Scheduling Process Flow

<figure>
{%include uc2-flow.svg%}
<figcaption><strong>Figure 1:55.4.2.1-1: Specialty Visit Scheduling Process Flow</strong></figcaption>
</figure>
<br clear="all">

#### 1:55.4.2.2 Use Case \#2: Patient-facing Scheduling Client

##### 1:55.4.2.2.1 Foreign Visitor Urgent Visit

###### 1:55.4.2.2.1.1 Use Case Description

Mr. White feels sick on holiday in a foreign country and wants to visit
a healthcare provider for an examination. Mr. White opens the local patient portal
and searches for a healthcare provider using search criteria
(e.g., distance, opening hours, supported languages).
Mr. White selects Dr. Brown's practice as the healthcare provider and opens the
appointments view in the patient portal.

From the list of available time slots presented in the patient portal, Mr. White
selects an appropriate time slot for the visit. Mr. White records the booking details
(e.g., demographics, symptoms, etc.) in the booking details dialog in the patient
portal. Mr. White confirms the records and books the examination in the confirm
dialog of the patient portal.

###### 1:55.4.2.2.1.2 Foreign Visitor Urgent Visitor Process Flow

<figure>
{%include uc3-flow.svg%}
<figcaption><strong>Figure 1:55.4.2.2-1: Patient-facing scheduling client Process Flow</strong></figcaption>
</figure>
<br clear="all">

<a name="security-considerations"> </a>

## 1:55.5 Scheduling Security Considerations

Actors are expected to follow the recommendations and requirements found in [Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

The resources exchanged in this profile could contain information which pose a privacy risk, or in some cases, a safety risk, to providers and other personnel, as well as patients. For example, practitioner or patient phone numbers and home addresses could be conveyed. Implementers need to determine what data will be exposed by the system and what level of public access there will be if any. Therefore the [Audit Trails and Node Authentication (ATNA)](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Profile is required. This mandates Access Controls, Secure Communications, and an Audit Trail capability. The use of [Basic Audit Log Patterns](https://profiles.ihe.net/ITI/BALP/index.html) is foundational to the AuditEvent profiles defined in this Implementation Guide.

Implementers need to consider Privacy and Security when determining the access policies for these Resources. System administrators for the underlying host systems must follow industry best practices for authentication, authorization, auditing, timely application of software patches, etc.

There are many reasonable methods of security for interoperability transactions which can be implemented without modifying the characteristics of the transactions in the Scheduling Profile. The use of TLS is encouraged, specifically the use of the ATNA Profile (see [ITI TF-1: 9](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html)).

User authentication on mobile devices and browsers is typically handled by more lightweight authentication schemes such as HTTP Authentication, OAuth 2.0, or OpenID Connect. IHE has a set of profiles for user authentication including [Internet User Authentication (IUA)](https://profiles.ihe.net/ITI/TF/Volume1/ch-34.html) for REST-based authentication with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) "STX: HTTPS IUA Option" that uses OAuth for client authentication while using TLS server authentication. Implementers SHOULD implement the [SMART on FHIR IG](http://hl7.org/fhir/smart-app-launch/) for the corresponding use cases (patient-facing or provider-facing). The network communication security and user authentication are layered in the HTTP transport layer.

<a name="other-grouping"> </a>

## 1:55.6 Scheduling Cross-Profile Considerations

The Scheduling Profile is intended to be used in varied settings and to satisfy multiple use cases. Some of these uses will benefit from using the Scheduling Profile together with other IHE profiles. The following cross-profile descriptions are not exclusive or exhaustive, and the list can be updated in the future.

### 1:55.6.1 mCSD - Mobile Care Services Discovery

When a patient needs to schedule an appointment outside their usual care providing environment, they could need to initially find the endpoint of the healthcare or service provider where an appointment can be requested. The [Find Matching Care Services [ITI-117\]](https://profiles.ihe.net/ITI/mCSD/ITI-90.html) transaction from the mCSD profile can be used for endpoint discovery prior to the use of the Find Appointments transaction.

### 1:55.6.2 360X - 360 Exchange Closed Loop Referral

The [360X Profile](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_360X.pdf) describes cross-organizations referral workflows, and it has a scheduling option, which is not required. The ITI Scheduling Profile can be used instead of the 360X Scheduling Option when there are appropriate business agreements that allow cross-organizational scheduling. The referral and patient identifiers used in the 360X transactions must be used in the corresponding parameters of the Find Appointments transaction in order to provide the necessary link between the appointment and the referral.


---

// File: input/includes/BookAppointment-note.md

The Book Appointment operation describes the following parameters:
- appt-id
- appt-resource
- cancelled-appt-id
- patient-id
- comment
- return


---

// File: input/includes/ExistingAppointments-note.md

The client MAY search for existing appointments for the patient. The patient and a date range are required search parameters. The [server capability statement](CapabilityStatement-IHE.Scheduling.server.html) has further details on the possible search parameters.

---

// File: input/includes/FindAppointments-note.md

The Find Appointments operation describes the following parameters:
- start date/time
- end date/time
- specialty
- visit type
- provider
- organization
- location
- patient
- insurance
- reason
- referral
- return



---

// File: input/includes/HoldAppointment-note.md

The Hold Appointments operation describes the following parameters:
- appt-id
- appt-resource
- return


---

// File: input/includes/intro-desc.md

The IHE FHIR Scheduling Profile is a specification providing FHIR APIs and guidance for access to and booking of appointments for patients by both patient and practitioner end users. This specification is based on [FHIR Version 4.0.1]({{site.data.fhir.path}}) and specifically the [Schedule]({{site.data.fhir.path}}schedule.html), [Slot]({{site.data.fhir.path}}slot.html), and [Appointment]({{site.data.fhir.path}}appointment.html) resources, and on the previous work of the [Argonaut Project](https://fhir.org/guides/argonaut/scheduling/release1/).


---

// File: input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: LOINC = http://loinc.org
Alias: ReasonCodeExtension = http://hl7.org/fhir/StructureDefinition/workflow-reasonCode
Alias: DCM = http://dicom.nema.org/resources/ontology/DCM




---

// File: input/fsh/audit-115.fsh

Profile:        AuditSchedulingFindPotentialServer
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.Scheduling.FindPotential.Audit.Recipient
Title:          "Audit Event for the Find Potential Appointments Transaction at Recipient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Find Potential Appointments \[ITI-115\] Transaction happens at the Recipient, and the transaction contains a Patient resource.
- Build off of the IHE Basic Audit Patient Create event
- add the ITI-115 as a subtype
- client is the Scheduling Client
- Server is the Scheduling Server
- may have user, app, organization agent(s)
- shall have a patient entity
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti115 1..1
* subtype[iti115] = urn:ihe:event-type-code#ITI-115 "Find Potential Appointments"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Scheduling Client"
* agent[server] ^short = "Scheduling Server"
* entity[patient] ^short = "Patient"


Invariant: val-audit-source
Description: "The Audit Source is this agent too."
Expression: "$this.who = %resource.source.observer"
Severity: #error


Profile:        AuditSchedulingFindPotentialClient
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.Scheduling.FindPotential.Audit.Source
Title:          "Audit Event for the Find Potential Appointments Transaction at Source"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Find Potential Appointments \[ITI-115\] Transaction happens at the Source.
- Build off of the IHE Basic Audit Patient Create event
- add the ITI-115 as a subtype
- client is the Scheduling Client
- Server is the Scheduling Server
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have an appointment identity entity
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti115 1..1
* subtype[iti115] = urn:ihe:event-type-code#ITI-115 "Find Potential Appointments"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Scheduling Client"
* agent[server] ^short = "Scheduling Server"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "Appointment"
* entity[data].what only Reference(Appointment)


---

// File: input/fsh/audit-116.fsh

Profile:        AuditSchedulingHoldServer
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.Scheduling.Hold.Audit.Recipient
Title:          "Audit Event for the Hold Appointment Transaction at Recipient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a hold Appointment \[ITI-116\] Transaction happens at the Recipient.
- Build off of the IHE Basic Audit Patient Create event
- add the ITI-116 as a subtype
- client is the Scheduling Client
- Server is the Scheduling Server
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have an appointment identity entity
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti116 1..1
* subtype[iti116] = urn:ihe:event-type-code#ITI-116 "Hold Appointment"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Scheduling Client"
* agent[server] ^short = "Scheduling Server"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "Appointment"
* entity[data].what only Reference(Appointment)


Profile:        AuditSchedulingHoldClient
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.Scheduling.Hold.Audit.Source
Title:          "Audit Event for the Hold Appointment Transaction at Source"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Hold Appointment \[ITI-116\] Transaction happens at the Source.
- Build off of the IHE Basic Audit Patient Create event
- add the ITI-116 as a subtype
- client is the Scheduling Client
- Server is the Scheduling Server
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have an appointment identity entity
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti116 1..1
* subtype[iti116] = urn:ihe:event-type-code#ITI-116 "Hold Appointment"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Scheduling Client"
* agent[server] ^short = "Scheduling Server"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "Appointment"
* entity[data].what only Reference(Appointment)


---

// File: input/fsh/audit-117.fsh

Profile:        AuditSchedulingBookServer
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.Scheduling.Book.Audit.Recipient
Title:          "Audit Event for the Book Appointment Transaction at Recipient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Book Appointment \[ITI-117\] Transaction happens at the Recipient.
- Build off of the IHE Basic Audit Patient Create event
- add the ITI-117 as a subtype
- client is the Scheduling Client
- Server is the Scheduling Server
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have an appointment identity entity
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti117 1..1
* subtype[iti117] = urn:ihe:event-type-code#ITI-117 "Book Appointment"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Scheduling Client"
* agent[server] ^short = "Scheduling Server"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "Appointment"
* entity[data].what only Reference(Appointment)



Profile:        AuditSchedulingBookClient
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.Scheduling.Book.Audit.Source
Title:          "Audit Event for the Book Appointment Transaction at Source"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Book Appointment \[ITI-117\] Transaction happens at the Source.
- Build off of the IHE Basic Audit Patient Create event
- add the ITI-117 as a subtype
- client is the Scheduling Client
- Server is the Scheduling Server
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have an appointment identity entity
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti117 1..1
* subtype[iti117] = urn:ihe:event-type-code#ITI-117 "Book Appointment"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Scheduling Client"
* agent[server] ^short = "Scheduling Server"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "Appointment"
* entity[data].what only Reference(Appointment)


---

// File: input/fsh/capability.fsh

Instance: IHE.Scheduling.client
InstanceOf: CapabilityStatement
Usage: #definition
* url = "https://profiles.ihe.net/ITI/Scheduling/CapabilityStatement/IHE.Scheduling.client"
* version = "1.0.0"
* name = "IHE_Scheduling_Client"
* title = "IHE Scheduling Client"
* status = #active
* experimental = false
* date = "2024-12-12"
* publisher = "Integrating the Healthcare Enterprise (IHE)"
* contact[0].name = "IHE IT Infrastructure Technical Committee"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "https://www.ihe.net/ihe_domains/it_infrastructure/"
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
* description = "CapabilityStatement for Client Actor in the IHE IT Infrastructure Technical Framework Supplement IHE FHIR Scheduling. See https://profiles.ihe.net/ITI/TF/Volume1/ch-38.html."
* copyright = "IHE http://www.ihe.net/Governance/#Intellectual_Property"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #application/fhir+xml
* format[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+] = #application/fhir+json
* format[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
/*
* implementationGuide[0] = "http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
* implementationGuide[+] = "http://hl7.org/fhir/uv/ipa/ImplementationGuide/hl7.fhir.uv.ipa"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
*/
* implementationGuide[+] = "https://profiles.ihe.net/ITI/BALP/ImplementationGuide/ihe.iti.balp"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
* rest.mode = #client
* rest.documentation = "IHE Scheduling client will 
1. query for Patient resources matching the Patient resource query parameters, 
1. query for Appointment resources matching the IHE Scheduling Appointment resource query parameters,
1. use the operations defined for the Appointment resource"
* rest.security.cors = false
* rest.security.description = "None mandated by IHE, encouraged IHE-IUA or SMART-on-FHIR"
* rest.resource[0].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Appointment
* rest.resource[=].profile = "https://profiles.ihe.net/ITI/Scheduling/StructureDefinition/ihe-sched-appt"
* rest.resource[=].profile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].profile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #search-type
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Logical id of this artifact"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide both the system and code values."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Appointment-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The patient, or one of the patients, for whom this apointement exists"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "The date, or date range, for the appointments being searched."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "specialty"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Appointment-specialty"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The specialty for which the appointments being searched is."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "appointment-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Appointment-appointment-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "practitioner"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Appointment-practitioner"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The provider, or one of the providers, with whom this apointement is scheduled"
* rest.resource[=].operation[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation[=].extension.valueCode = #SHALL
* rest.resource[=].operation[=].name = "find"
* rest.resource[=].operation[=].definition = "https://profiles.ihe.net/ITI/Scheduling/OperationDefinition/appointment-find"
* rest.resource[=].operation[=].documentation = "Document the find operation"
* rest.resource[=].operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation[=].extension.valueCode = #SHALL
* rest.resource[=].operation[=].name = "book"
* rest.resource[=].operation[=].definition = "https://profiles.ihe.net/ITI/Scheduling/OperationDefinition/appointment-book"
* rest.resource[=].operation[=].documentation = "Document the book operation"
* rest.resource[=].operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation[=].extension.valueCode = #SHOULD
* rest.resource[=].operation[=].name = "hold"
* rest.resource[=].operation[=].definition = "https://profiles.ihe.net/ITI/Scheduling/OperationDefinition/appointment-hold"
* rest.resource[=].operation[=].documentation = "Document the hold operation"
* rest.interaction.code = #search-system

Instance: IHE.Scheduling.server
InstanceOf: CapabilityStatement
Usage: #definition
* url = "https://profiles.ihe.net/ITI/Scheduling/CapabilityStatement/IHE.Scheduling.server"
* version = "1.0.0"
* name = "IHE_Scheduling_Server"
* title = "IHE Scheduling Server"
* status = #active
* experimental = false
* date = "2024-12-12"
* publisher = "Integrating the Healthcare Enterprise (IHE)"
* contact[0].name = "IHE IT Infrastructure Technical Committee"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "https://www.ihe.net/ihe_domains/it_infrastructure/"
* description = "CapabilityStatement for Server Actor in the IHE IT Infrastructure Technical Framework Supplement IHE FHIR Scheduling. See https://profiles.ihe.net/ITI/TF/Volume1/ch-38.html."
* copyright = "IHE http://www.ihe.net/Governance/#Intellectual_Property"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #application/fhir+xml
* format[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+] = #application/fhir+json
* format[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
/*
* implementationGuide[0] = "http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
* implementationGuide[+] = "http://hl7.org/fhir/uv/ipa/ImplementationGuide/hl7.fhir.uv.ipa"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
*/
* implementationGuide[+] = "https://profiles.ihe.net/ITI/BALP/ImplementationGuide/ihe.iti.balp"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
* rest.mode = #server
* rest.documentation = "Scheduling server provides capability to query for Patient resources matching a sub-set of the FHIR core Patient resource query parameters"
* rest.security.cors = false
* rest.security.description = "None mandated by IHE, encouraged IHE-IUA or SMART-on-FHIR"
* rest.resource[0].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Appointment
* rest.resource[=].profile = "https://profiles.ihe.net/ITI/Scheduling/StructureDefinition/ihe-sched-appt"
* rest.resource[=].profile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].profile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].code = #read
* rest.resource[=].interaction[+].code = #search-type
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Logical id of this artifact"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide both the system and code values."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Appointment-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The patient, or one of the patients, for whom this apointement exists"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "The date, or date range, for the appointments being searched."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "specialty"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Appointment-specialty"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The specialty for which the appointments being searched is."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "appointment-type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Appointment-appointment-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "practitioner"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Appointment-practitioner"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The provider, or one of the providers, with whom this apointement is scheduled"
* rest.resource[=].operation[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation[=].extension.valueCode = #SHALL
* rest.resource[=].operation[=].name = "find"
* rest.resource[=].operation[=].definition = "https://profiles.ihe.net/ITI/Scheduling/OperationDefinition/appointment-find"
* rest.resource[=].operation[=].documentation = "Document the find operation"
* rest.resource[=].operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation[=].extension.valueCode = #SHALL
* rest.resource[=].operation[=].name = "book"
* rest.resource[=].operation[=].definition = "https://profiles.ihe.net/ITI/Scheduling/OperationDefinition/appointment-book"
* rest.resource[=].operation[=].documentation = "Document the book operation"
* rest.resource[=].operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation[=].extension.valueCode = #SHOULD
* rest.resource[=].operation[=].name = "hold"
* rest.resource[=].operation[=].definition = "https://profiles.ihe.net/ITI/Scheduling/OperationDefinition/appointment-hold"
* rest.resource[=].operation[=].documentation = "Document the hold operation"
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].type = #Bundle
* rest.resource[=].profile = "https://profiles.ihe.net/ITI/Scheduling/StructureDefinition/ihe-sched-avail-bundle"
* rest.resource[=].profile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].profile.extension.valueCode = #SHALL
* rest.interaction.code = #search-system

---

// File: input/fsh/ex-audit-115.fsh

Instance: ex-auditSchedulingFindPotential-recipient
InstanceOf: IHE.Scheduling.FindPotential.Audit.Recipient
Title: "Audit Example of ITI-115 at recipient"
Description: "Audit Example for a Book Appointment Transaction as recorded at the recipient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "schedServer.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/pat1)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Appointment/appt1-1)


Instance: ex-auditSchedulingFindPotential-source
InstanceOf: IHE.Scheduling.FindPotential.Audit.Source
Title: "Audit Example of ITI-115 at source"
Description: "Audit Example for a Simplified Publish Transaction from source perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "mobile app scheduling client"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "model number ABC, serial number 1234"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/pat1)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Appointment/appt1-1)

Instance:   ex-device
InstanceOf: Device
Title:      "Dummy Device example"
Description: "Dummy Device example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST


---

// File: input/fsh/ex-audit-116.fsh

Instance: ex-auditSchedulingHold-recipient
InstanceOf: IHE.Scheduling.Hold.Audit.Recipient
Title: "Audit Example of ITI-116 at recipient"
Description: "Audit Example for a Book Appointment Transaction as recorded at the recipient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "schedServer.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/pat1)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Appointment/appt1-1)

Instance: ex-auditSchedulingHold-source
InstanceOf: IHE.Scheduling.Hold.Audit.Source
Title: "Audit Example of ITI-116 at source"
Description: "Audit Example for a Simplified Publish Transaction from source perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "mobile app scheduling client"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "model number ABC, serial number 1234"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/pat1)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Appointment/appt1-1)



---

// File: input/fsh/ex-audit-117.fsh

Instance: ex-auditSchedulingBook-recipient
InstanceOf: IHE.Scheduling.Book.Audit.Recipient
Title: "Audit Example of ITI-117 at recipient"
Description: "Audit Example for a Book Appointment Transaction as recorded at the recipient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "schedServer.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/pat1)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Appointment/appt1-1)


Instance: ex-auditSchedulingBook-source
InstanceOf: IHE.Scheduling.Book.Audit.Source
Title: "Audit Example of ITI-1017 at source"
Description: "Audit Example for a Simplified Publish Transaction from source perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "mobile app scheduling client"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "model number ABC, serial number 1234"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/pat1)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(Appointment/appt1-1)



---

// File: input/images-source/ActorsAndTransactions.plantuml

@startuml ActorsAndTransactions
agent "Scheduling Client" as Client
agent "Scheduling Server" as Server
Client -- Server : "Find Potential Appointments [ITI-115] ↓"
Client -- Server : "Hold Appointment [ITI-116] ↓"
Client -- Server : "Book Appointment [ITI-117] ↓"
Client -- Server : "Find Existing Appointments [ITI-118] ↓"
@enduml



---

// File: input/images-source/findappointments-processflow.plantuml

@startuml findappointments-processflow
skinparam svgDimensionStyle false
hide footbox
participant "Scheduling Client" as Client
participant "Scheduling Server" as Server
note left of Client
Pre-requisite: 
Patient identification
already completed
end note
activate "Client"
"Client" -> "Server" : 1. Find Potential Appointments Query
activate "Server"
"Server" --> "Client" : 2. Find Potential Appointments Response
deactivate "Server"
deactivate "Client"
@enduml


---

// File: input/images-source/ITI-115-seq.plantuml

@startuml ITI-115-seq
hide footbox
participant "Scheduling Client" as Client
participant "Scheduling Server" as Server
activate "Client"
activate "Server"
"Client" -> "Server" : 1. Find Potential Appointments Query [ITI-115]
"Server" --> "Client" : 2. Find Potential Appointments Response [ITI-115]
deactivate "Client"
deactivate "Server"
@enduml


---

// File: input/images-source/ITI-116-seq.plantuml

@startuml ITI-116-seq
hide footbox
participant "Scheduling Client" as Client
participant "Scheduling Server" as Server
activate "Client"
activate "Server"
"Client" -> "Server" : 1. Hold Appointment Request [ITI-116]
"Server" --> "Client" : 2. Hold Appointment Response [ITI-116]
deactivate "Client"
deactivate "Server"
@enduml

---

// File: input/images-source/ITI-117-seq.plantuml

@startuml ITI-117-seq
hide footbox
participant "Scheduling Client" as Client
participant "Scheduling Server" as Server
activate "Client"
activate "Server"
"Client" -> "Server" : 1. Book Appointment Request [ITI-117]
"Server" --> "Client" : 2. Book Appointment Response [ITI-117]
deactivate "Client"
deactivate "Server"
@enduml

---

// File: input/images-source/ITI-118-seq.plantuml

@startuml ITI-118-seq
hide footbox
participant "Scheduling Client" as Client
participant "Scheduling Server" as Server
activate "Client"
activate "Server"
"Client" -> "Server" : 1. Find Existing Appointments Query [ITI-118]
"Server" --> "Client" : 2. Find Existing Appointments Response [ITI-118]
deactivate "Client"
deactivate "Server"
@enduml

---

// File: input/images-source/uc1-flow.plantuml

@startuml
skinparam responseMessageBelowArrow true
skinparam svgDimensionStyle false
hide footbox

actor "Hospital User" as User #FFFFFF
participant "Hospital Discharge System \n (Scheduling Client)" as RequestingActor
participant "Practice Scheduling System \n (Scheduling Server)" as RespondingActor

autonumber 1 1 "<b>[00]"

activate "RequestingActor"
User --> RequestingActor: Open view

|||
RequestingActor -> RespondingActor: Find Potential Appointments Query Request [ITI-115]
activate "RespondingActor"
RespondingActor --> RequestingActor: Find Potential Appointments Query Response [ITI-115]
deactivate "RespondingActor"

|||
User --> RequestingActor: Select Appointment
User --> RequestingActor: Add additional data
User --> RequestingActor: Confirm booking

|||
RequestingActor -> RespondingActor: Book Appointment Request [ITI-117]
activate "RespondingActor"
RespondingActor --> RequestingActor: Book Appointment Response [ITI-117]
deactivate "RespondingActor"

autonumber stop

@enduml


---

// File: input/images-source/uc2-flow.plantuml

@startuml
skinparam responseMessageBelowArrow true
skinparam svgDimensionStyle false
hide footbox

actor "Dr. Brown" as User #FFFFFF
participant "Clinical Information System \n (Scheduling Client)" as RequestingActor
participant "Scheduling Server \n" as RespondingActor

autonumber 1 1 "<b>[00]"

activate "RequestingActor"
User --> RequestingActor: Open view

|||
RequestingActor -> RespondingActor: Find Existing Appointments Query Request [ITI-118]
activate "RespondingActor"
RespondingActor --> RequestingActor: Find Existing Appointments Query Response [ITI-118]
deactivate "RespondingActor"

|||
RequestingActor -> RespondingActor: Find Potential Appointments Query Request [ITI-115]
activate "RespondingActor"
RespondingActor --> RequestingActor: Find Potential Appointments Query Response [ITI-115]
deactivate "RespondingActor"

|||
User --> RequestingActor: Select Appointment
User --> RequestingActor: Add additional data
User --> RequestingActor: Confirm booking

|||
RequestingActor -> RespondingActor: Book Appointment Request [ITI-117]
activate "RespondingActor"
RespondingActor --> RequestingActor: Book Appointment Response [ITI-117]
deactivate "RespondingActor"

autonumber stop

@enduml


---

// File: input/images-source/uc3-flow.plantuml

@startuml
skinparam responseMessageBelowArrow true
skinparam svgDimensionStyle false
hide footbox

actor "Mr. White" as User #FFFFFF
participant "Patient Portal \n (Scheduling Client)" as RequestingActor
participant "Care Services Selective Supplier \n" as Provider #FFFFFF
participant "Scheduling Server \n" as RespondingActor

autonumber 1 1 "<b>[00]"

activate "RequestingActor"
User --> RequestingActor: Open view

|||
RequestingActor -> Provider: Find Matching Care Services Request [ITI-90]
activate "Provider"
Provider --> RequestingActor: Find Matching Care Services Response [ITI-90]
deactivate "Provider"

User --> RequestingActor: Open view

|||
RequestingActor -> RespondingActor: Find Appointments Query Request [ITI-115]
activate "RespondingActor"
RespondingActor --> RequestingActor: Find Appointments Query Response [ITI-115]
deactivate "RespondingActor"

|||
User --> RequestingActor: Select Appointment
User --> RequestingActor: Add additional data
User --> RequestingActor: Confirm booking

|||
RequestingActor -> RespondingActor: Book Appointment Request [ITI-117]
activate "RespondingActor"
RespondingActor --> RequestingActor: Book Appointment Response [ITI-117]
deactivate "RespondingActor"

autonumber stop

@enduml


---

// File: input/images-source/usecase1-processflow.plantuml

@startuml usecase1-processflow
skinparam svgDimensionStyle false
hide footbox

participant "Scheduling Client" as Client
participant "Scheduling Server" as Server

activate "Client"
"Client" -> "Server" : 1. Find Potential Appointments Query [ITI-115]

activate "Server"
"Server" --> "Client" : 2. Find Potential Appointments Response [ITI-115]
deactivate "Server"

"Client" -> "Client" : 3. Select Appointment
"Client" -> "Server" : 4. Book Appointment Request [ITI-115]

Activate "Server"
"Server" --> "Client" : 2. Book Appointments Response [ITI-115]
deactivate "Server"

deactivate "Client"
@enduml


---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/ITI.Scheduling/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/ITI.Scheduling/issues

---

