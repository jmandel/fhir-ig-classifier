File: repos/IHE_SLASH_ITI.BasicAudit/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration/                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: ihe.iti.balp
canonical: https://profiles.ihe.net/ITI/BALP
name: IHE_ITI_BALP
title: "Basic Audit Log Patterns (BALP)"
#date: 2024-02-16
version: 1.1.4-current
releaselabel: ci-build
#releaselabel: ballot
#releaselabel: Trial-Implementation
status: active
publisher:
  name: IHE IT Infrastructure Technical Committee
  url: https://www.ihe.net/ihe_domains/it_infrastructure/
  email: iti@ihe.net
contact:
  - name: IHE IT Infrastructure Technical Committee
    telecom:
      - system: email
        value: iti@ihe.net
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
#copyright: Integrating the Healthcare Enterprise (IHE) http://www.ihe.net/Governance/#Intellectual_Property
description: >-
  The Basic Audit Log Patterns (BALP) Implementation Guide is a Content Profile that defines some basic and reusable AuditEvent patterns. This includes basic audit log profiles for FHIR RESTful operations to be used when there is not a more specific audit event defined. A focus is enabling Privacy centric AuditEvent logs that hold well formed indication of the Patient when they are the subject of the activity being recorded in the log. Where a more specific audit event can be defined it should be derived off of these basic patterns.
license: CC-BY-4.0
fhirVersion: 4.0.1
#fhirVersion: 4.3.0
copyrightyear: '2022+'
#extension: 
#  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
#    valueCode: trial-use
#  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
#    valueInteger: 2


parameters:  # see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
  path-resource:
    - fsh-generated/resources
#    - input/examples
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
  autoload-resources: 'true'
  path-binary: input/saml
 # fmm-definition: other.html#maturity-levels



pages:
  index.md:
    title: Basic Audit Log Patterns (BALP)
    generation: markdown
  volume-1.md:
    title: 1:52 Basic Audit Log Patterns
    generation: markdown
  content.md:
    title: 3:5.7 Basic Audit Log Patterns
    generation: markdown
  testplan.md:
    title: BasicAudit Test Plan
    generation: markdown
  other.md:
    title: Changes to Other IHE Specifications
    generation: markdown
  download.md:
    title: Download and Analysis
    generation: markdown
  appendix.md:
    title: AuditEvent Use in IHE Profiles
    generation: markdown
  issues.md:
    title: BasicAudit Open and Closed issues
    generation: markdown

menu:
  BasicAudit Home: index.html
  Volume 1:
    Introduction: volume-1.html
    Actors and Content: volume-1.html#1521-basicaudit-actors-and-content
    Actor Options: volume-1.html#1522-basicaudit-actor-options
    Required Groupings: volume-1.html#1523-basicaudit-required-actor-grouping
    Overview: volume-1.html#1524-basicaudit-overview
    Security Considerations: volume-1.html#1525-basicaudit-security-considerations
    Cross-Profile Considerations: volume-1.html#1526-basicaudit-cross-profile-considerations    
  Volume 3:
    Basic Audit Log Patterns: content.html
    -RESTful activities: content.html#3573-restful-activities
    -SAML Security Token: content.html#3574-saml-security-token
    -OAuth Security Token: content.html#3575-oauth-security-token
    -Consent Authorized Decision Audit Message: content.html#3576-consent-authorized-decision-audit-message
    -Privacy Disclosure Audit Message: content.html#3577-privacy-disclosure-audit-message
  Artifacts: artifacts.html
  Other: 
    AuditEvent Use in IHE Profiles: appendix.html
    Changes to Other IHE Specifications: other.html
    Download and Analysis: download.html    
    Test Plan: testplan.html


---

// File: input/pagecontent/appendix.md



In general, IHE Profiles should have "Security Considerations" sections in both Volume 1 and in Volume 2. In Volume 2, the Security Considerations section should have a definition of how the AuditEvent is filled out when the given transaction happens. This definition usually includes one specification of an AuditEvent to be created by each of the actors involved in the transaction.

All of the AuditEvent (AuditMessage) encodings can be found on [Gazelle AuditTrail section](https://gazelle.ihe.net/gss/audit-messages/list.seam;jsessionid=O8kPo08QmPxFgrWZQbhfzfTr). These specifications usually use a table format. These are in the format of DICOM AuditMessage, but the mapping to FHIR AuditEvent is defined in the [FHIR AuditEvent mapping to DICOM](http://hl7.org/fhir/auditevent-mappings.html#dicom).

### IG Publisher

Some of the IHE Profiles are being converted to using the IG Publisher. When this is done, the AuditEvent is "profiled" using the FHIR StructureDefinition and Examples are provided for each.

#### MHD

The [MHD](https://profiles.ihe.net/ITI/MHD/index.html) Implementation Guide has the following AuditEvent profiles:
- [Provide Document Bundle \[ITI-65\]](https://profiles.ihe.net/ITI/MHD/ITI-65.html)
  - Document Source 
    - [profile](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.ProvideBundle.Audit.Source.html)
    - [examples](https://profiles.ihe.net/ITI/MHD/AuditEvent-ex-auditProvideBundle-source.html)
  - Document Recipient 
    - [profile](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.ProvideBundle.Audit.Recipient.html)
    - [examples](https://profiles.ihe.net/ITI/MHD/AuditEvent-ex-auditProvideBundle-recipient.html)
- [Find Document Lists \[ITI-66\]](https://profiles.ihe.net/ITI/MHD/ITI-66.html)
  - Document Consumer
    - [profile](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.FindDocumentLists.Audit.Consumer.html)
    - [examples](https://profiles.ihe.net/ITI/MHD/AuditEvent-ex-auditFindDocumentLists-consumer.html)
    - Document Responder
    - [profile](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.FindDocumentLists.Audit.Responder.html)
    - [examples](https://profiles.ihe.net/ITI/MHD/AuditEvent-ex-auditFindDocumentLists-responder.html)
- [Find Document References \[ITI-67\]](https://profiles.ihe.net/ITI/MHD/ITI-67.html)
  - Document Consumer
    - [profile](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.FindDocumentReferences.Audit.Consumer.html)
    - [examples](https://profiles.ihe.net/ITI/MHD/AuditEvent-ex-auditFindDocumentReferences-consumer.html)
  - Document Responder
    - [profile](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.FindDocumentReferences.Audit.Responder.html)
    - [examples](https://profiles.ihe.net/ITI/MHD/AuditEvent-ex-auditFindDocumentReferences-responder.html)
- [Retrieve Document \[ITI-68\]](https://profiles.ihe.net/ITI/MHD/ITI-68.html)  
  - Document Consumer
    - [profile](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.RetrieveDocument.Audit.Consumer.html)
    - [examples](https://profiles.ihe.net/ITI/MHD/AuditEvent-ex-auditRetrieveDocument-consumer.html)
  - Document Responder
    - [profile](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.RetrieveDocument.Audit.Responder.html)
    - [examples](https://profiles.ihe.net/ITI/MHD/AuditEvent-ex-auditRetrieveDocument-responder.html)
	
MHD [open issue to align AuditEvents with BasicAudit](https://github.com/IHE/ITI.MHD/issues/133)	

#### PDQm

The [PDQm](https://profiles.ihe.net/ITI/PDQm/index.html) Implementation Guide has the following AuditEvent profiles:
- [Mobile Patient Demographics Query \[ITI-78\]](https://profiles.ihe.net/ITI/PDQm/ITI-78.html)
  - Patient Demographics Consumer
    - [profile](https://profiles.ihe.net/ITI/PDQm/StructureDefinition-IHE.PDQm.Query.Audit.Consumer.html)
    - [example](https://profiles.ihe.net/ITI/PDQm/AuditEvent-ex-auditPdqmQuery-consumer.html)
  - Patient Demographics Supplier
    - [profile](https://profiles.ihe.net/ITI/PDQm/StructureDefinition-IHE.PDQm.Query.Audit.Supplier.html)
    - [example](https://profiles.ihe.net/ITI/PDQm/AuditEvent-ex-auditPdqmQuery-supplier.html)

PDQm [open issue to align AuditEvents with BasicAudit](https://github.com/IHE/ITI.PDQm/issues/84)
	  
#### PIXm

The [PIXm](https://profiles.ihe.net/ITI/PIXm/index.html) Implementation Guide has the following AuditEvent profiles:
- [Patient Identity Cross-reference Query \[ITI-83\]](https://profiles.ihe.net/ITI/PIXm/ITI-83.html)
  - Patient Identifier Cross-reference Consumer
    - [profile](https://profiles.ihe.net/ITI/PIXm/StructureDefinition-IHE.PIXm.Query.Audit.Consumer.html)
    - [example](https://profiles.ihe.net/ITI/PIXm/AuditEvent-ex-auditPixmQuery-consumer.html)
  - Patient Identifier Cross-reference Manager
    - [profile](https://profiles.ihe.net/StructureDefinition-IHE.PIXm.Query.Audit.Manager.html)
    - [example](https://profiles.ihe.net/ITI/PIXm/AuditEvent-ex-auditPixmQuery-manager.html)
- [Patient Identifier Cross-reference Feed \[ITI-104\]](https://profiles.ihe.net/ITI/PIXm/ITI-104.html)
  - Patient Identifier Cross-reference Consumer
    - [profile](https://profiles.ihe.net/ITI/PIXm/StructureDefinition-IHE.PIXm.Feed.Audit.Source.html)
    - [example](https://profiles.ihe.net/ITI/PIXm/AuditEvent-ex-auditPixmFeed-source.html)
  - Patient Identifier Cross-reference Manager
    - [profile](https://profiles.ihe.net/StructureDefinition-IHE.PIXm.Feed.Audit.Manager.html)
    - [example](https://profiles.ihe.net/ITI/PIXm/AuditEvent-ex-auditPixmFeed-manager.html)

PIXm [open issue to align AuditEvents](https://github.com/IHE/ITI.PIXm/issues/116)




---

// File: input/pagecontent/AuditEvent-ex-auditBasicQueryGetClient-intro.md

Client - Audit Example of a basic patient identifiable Query (GET)

Audit Example for a RESTful Query using GET with a patient subject, recorded by the Client

- recorded by the client peer [server](AuditEvent-ex-auditBasicQueryGetServer.html)
- server is FHIR application server defined by ex-device
- client is a computer at myMachine.example.org
- user is John Smith
- query is for an Observation for given patient
- patient is specified
- X-Request-Id is specified 

The http GET requested

```
GET test.fhir.org/r4/Observation?patient=ex-patient&_lastUpdated=gt2020-11-06T21:52:30.300Z&_sort=_lastUpdated&_count=10
Accept: application/fhir+json; fhirVersion=4.0
X-Request-Id: cc6d168e-5871-11ec-bf63-0242ac130002
```


---

// File: input/pagecontent/AuditEvent-ex-auditBasicQueryGetServer-intro.md

Server - Audit Example of a basic patient identifiable Query (GET)

Audit Example for a RESTful Query using GET with a patient subject, recorded by the Server
- recorded by the server peer [client](AuditEvent-ex-auditBasicQueryGetClient.html)
- server is FHIR application server defined by ex-device
- client is a computer at myMachine.example.org
- user is John Smith
- query is for an Observation for given patient
- patient is specified
- X-Request-Id is specified 

The http GET requested

```
GET test.fhir.org/r4/Observation?patient=ex-patient&_lastUpdated=gt2020-11-06T21:52:30.300Z&_sort=_lastUpdated&_count=10
Accept: application/fhir+json; fhirVersion=4.0
X-Request-Id: cc6d168e-5871-11ec-bf63-0242ac130002
```



---

// File: input/pagecontent/AuditEvent-ex-auditBasicQueryNoPatient-intro.md

Audit Example of a basic patient identifiable Query with no Patient

Audit Example for a RESTful Query using GET with NO patient subject, recorded by the Server.
- recorded by the server
- server is FHIR application server defined by ex-device
- client is a computer at myMachine.example.org
- user is John Smith
- query is for a MeasureReport
- X-Request-Id is specified 

The http GET requested

```
GET test.fhir.org/r4/MeasureReport?_lastUpdated=gt2020-11-06T21:52:30.300Z&_sort=_lastUpdated&_count=10
Accept: application/fhir+json; fhirVersion=4.0
X-Request-Id: 4a8dca3c-2205-4dc7-90e1-db877781d7cc
```


---

// File: input/pagecontent/AuditEvent-ex-auditBasicQueryPost-intro.md

Server - Audit Example of a basic patient identifiable Query (POST)

Audit Example for a RESTful Query using POST with a patient subject, recorded by the server
- recorded by the server
- server is FHIR application server defined by ex-device
- client is a computer at myMachine.example.org
- user is John Smith
- query is for an Observation for given patient
- patient is specified

The search received, and thus recorded:
```
POST /r4/Observation/_search HTTP/1.1
Host: test.fhir.org
Content-Type: application/x-www-form-urlencoded
Accept: application/fhir+json; fhirVersion=4.0
Content-Length: 87

patient=ex-patient&_lastUpdated=gt2020-11-06T21:52:30.300Z&_sort=_lastUpdated&_count=10
```




---

// File: input/pagecontent/content.md

### 3:5.7.1 Scope

The AuditEvent resource is used to record that an auditable event has happened. These auditable events are usually security or privacy relevant, but may be for other purposes. The profiles of AuditEvent here are to support security and/or privacy use-cases. These profiles of AuditEvent can be used as is, or may be used to derive more specific profiles of AuditEvent for more specific use-cases. 

### 3:5.7.2 Content

The following AuditEvent patterns are defined:
- [RESTful activities](content.html#3573-restful-activities)
- [SAML Security Token](content.html#3574-saml-security-token)
- [OAuth Security Token](content.html#3575-oauth-security-token)
- [Consent Authorized Decision Audit Message](content.html#3576-consent-authorized-decision-audit-message)
- [Privacy Disclosure Audit Message](content.html#3577-privacy-disclosure-audit-message)

### 3:5.7.3 RESTful activities

Create, Update, and Query follow a similar pattern where the initiator (client) of the RESTful interaction is identified as the Source Role ID and the responder (server) is the Destination Role ID. Read pattern with the (client) of the RESTful interaction, which will receive the data, is considered the Destination Role ID and the responder (server) is the Source Role ID. This pattern is found in both DICOM and XDS. Delete uses of a pattern with (client) of the RESTful interaction is indicated as the Application and (server) of the RESTful interaction is indicated as the Custodian.

When a FHIR RESTful interaction happens, the following AuditEvent patterns can be used. These AuditEvent patterns include a `user` slice that is minimally populated. These AuditEvent patterns can be combined with the Security Token Use pattern to record one AuditEvent that contains the details of the security context and the FHIR RESTful context.

There are two sets of profiles distinguished by [Patient as a subject](volume-1.html#152416-patient-as-a-subject) being mandated to be populated. 

 REST event | basic profile | with patient | examples
-----------|---------------|-----------------------------
Create (create) | [Create](StructureDefinition-IHE.BasicAudit.Create.html) | [PatientCreate](StructureDefinition-IHE.BasicAudit.PatientCreate.html) | [examples](StructureDefinition-IHE.BasicAudit.PatientCreate-examples.html)
Read (read and vread) | [Read](StructureDefinition-IHE.BasicAudit.Read.html) | [PatientRead](StructureDefinition-IHE.BasicAudit.PatientRead.html) | [examples](StructureDefinition-IHE.BasicAudit.PatientRead-examples.html)
Update (update, patch) | [Update](StructureDefinition-IHE.BasicAudit.Update.html) | [PatientUpdate](StructureDefinition-IHE.BasicAudit.PatientUpdate.html) | [examples](StructureDefinition-IHE.BasicAudit.PatientUpdate-examples.html)
Delete (delete) | [Delete](StructureDefinition-IHE.BasicAudit.Delete.html) |  [PatientDelete](StructureDefinition-IHE.BasicAudit.PatientDelete.html) | [examples](StructureDefinition-IHE.BasicAudit.PatientDelete-examples.html)
Execute (search and query) | [Query](StructureDefinition-IHE.BasicAudit.Query.html) | [PatientQuery](StructureDefinition-IHE.BasicAudit.PatientQuery.html) | [examples](StructureDefinition-IHE.BasicAudit.PatientQuery-examples.html)
{:.grid}

An example of an auditable event being recorded by the client and server is represented by the Create examples. 

#### 3:5.7.3.1 X-Request-Id header 

Where it is known that an http RESTful transaction included an X-Request-Id, that value should be recorded in an .entity dedicated to X-Request-Id. This ID can be used to correlated AuditEvents from client and server, and may aid with correlation on further activities recorded caused by the transaction. This means that the .entity holding the X-Request-Id may appear in AuditEvents beyond those defined here.

### 3:5.7.4 SAML Security Token

This section only applies to auditing agents that have access to the content of the SAML Security Token. This section is only concerned with the AuditEvent profiling to use when an event is attributable to an agent defined in a SAML Security Token. This does not cover how the SAML Token was created, acquired, authorized, or managed. See [IHE-XUA](https://profiles.ihe.net/ITI/TF/Volume1/ch-13.html).  This specification presumes that the interactions to obtain the "SAML Security Token" were themselves auditable events and properly recorded in the audit log. 

In this section, we use the term "SAML Security Token" in a general sense to refer to either (a) an XUA SAML token being used in an [\[ITI-40\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-40.html#3.40) or (b) any other SAML token used to secure an Interoperability transaction.

There is documentation of the audit event details to be added to a grouped transaction audit event log in [XUA Security Considerations 2:3.40.4.2](https://profiles.ihe.net/ITI/TF/Volume2/ITI-40.html#3.40.4.2); however, this does not explain how this should be recorded in a FHIR AuditEvent. There are two patterns defined here: minimal and comprehensive. Where minimal presumes that when the audit log is used, the system using the AuditEvent has access to the security infrastructure registry and logs to lookup the identifiers, thus the details that could be looked up later are not replicated in the AuditEvent. Comprehensive presumes that there is no access to lookup these details, thus preserving as much of the Security Token into the AuditEvent as is reasonable and useful.

#### 3:5.7.4.1 SAML - Minimal AuditEvent record

The Minimal AuditEvent pattern defined here is not the same as the one defined in [XUA](https://profiles.ihe.net/ITI/TF/Volume1/ch-13.html), mostly due to the more expressive and coded nature of the FHIR AuditEvent over the DICOM AuditMessage.

The Minimal AuditEvent pattern preserves the SAML ID so that the contents of the SAML assertion can be retrieved from the SAML Identity Provider (IdP) when such access is available. The Minimal AuditEvent pattern preserves the Issuer and Subject NameID in the who.Identifier, and any purposeOfUse into the purposeOfUse element.

Note: that XUA recommends alias be filled with SPProvidedID which is not defined in XUA and is found to be deprecated in many SAML specifications. So this specification does not record or refer to the SPProvidedId.

- [StructureDefinition profile of Basic AuditEvent pattern for when activity was authorized by an SAML access token](StructureDefinition-IHE.BasicAudit.SAMLaccessTokenUse.Minimal.html)
  - [examples](StructureDefinition-IHE.BasicAudit.SAMLaccessTokenUse.Minimal-examples.html)

#### 3:5.7.4.2 SAML - Comprehensive AuditEvent record

This pattern preserves most SAML attributes in the AuditEvent. Not all are preserved as some attributes are proven during the SAML token validation and thus carry no further information useful in an AuditEvent (e.g., not before). 

Local policy may choose to record less than are defined here, or may choose to record more. 

For those using SAML beyond XUA, there is no specific guidance here.

- [StructureDefinition profile of Basic AuditEvent pattern for SAML Comprehensive](StructureDefinition-IHE.BasicAudit.SAMLaccessTokenUse.Comprehensive.html)
  - [examples](StructureDefinition-IHE.BasicAudit.SAMLaccessTokenUse.Comprehensive-examples.html)

#### 3:5.7.4.3 SAML mapping to AuditEvent

The following table uses a short-hand for the SAML fields and FHIR AuditEvent elements to keep the table compact. It is presumed the reader can understand the SAML field and the FHIR AuditEvent element given. Note the `~` character represents attributes under the SAML `AttributeStatement`. There are SAML fields defined that are not shown in the following table, these SAML fields need not be preserved in the AuditEvent.

| SAML field                   | Comprehensive AuditEvent     | Minimal AuditEvent           |
|------------------------------|-----------------------------------|-----------------------------------|
| ID                           | agent[user].policy | agent[user].policy |
| Issuer                       | agent[user].who.identifier.system | agent[user].who.identifier.system |
| Subject.NameID               | agent[user].who.identifier.value  | agent[user].who.identifier.value  |
| AuthnContextClassRef         | agent[user].extension[assuranceLevel]  |
| ~subject:subject-id          | agent[user].extension[otherId][subject-id].identifier.value |
| ~subject:npi                 | agent[user].extension[otherId][npi].identifier.value |
| ~subject:provider-identifier | agent[user].extension[otherId][provider-id].identifier.value |
| ~subject:organization        | agent[userorg].who.display |
| ~subject:organization-id     | agent[userorg].who.identifier.value |
| ~subject:role                | agent[user].role | agent[user].role |
| ~subject:purposeofuse        | agent[user].purposeOfUse | agent[user].purposeOfUse
| ~bppc:2007:docid             | entity[consent].what.identifier.value |
| ~xua:2012:acp                | entity[consent].detail[acp].valueString |
| ~resource:resource-id        | entity[consent].detail[patient-id].valueString |
| ~homeCommunityId             | entity[consent].what.identifier.assigner.identifier.value | 
{:.grid}

Other SAML attributes may be defined, but this specification focuses on XUA attributes only.

### 3:5.7.5 OAuth Security Token

This section is only concerned with the AuditEvent profiling to use when an event is attributable to an agent defined in an OAuth Security Token. This does not cover how the oAuth Token was created, acquired, authorized, or managed. See [IUA](https://profiles.ihe.net/ITI/IUA/index.html).  This specification presumes that the interactions to obtain the "Oauth Security Token" were themselves auditable events and properly recorded in the audit log. 

In this section we use the term "OAuth Security Token" in a general sense to refer to either (a) an [IUA](https://profiles.ihe.net/ITI/IUA/index.html) OAuth Access Token being used in an [\[ITI-72\]](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72) or (b) any other OAuth Access Token used to secure an Interoperability transaction (e.g., [SMART Backend Services](https://hl7.org/fhir/uv/bulkdata/authorization/index.html#presenting-an-access-token-to-fhir-api), or [SMART App Launch Framework](http://hl7.org/fhir/smart-app-launch/index.html#step-4-app-accesses-clinical-data-via-fhir-api), or other).

There are three patterns defined: opaque, minimal, and comprehensive. 
- Where opaque is used when the client and/or server has only an opaque token (encrypted JWT) where no further details are known. There is still a need to include some evidence in the AuditEvent to tie this audit log entry with a specific token, but the whole token should not be recorded for security reasons. There are introspection functions often available, but often use of this impacts performance.
- Where minimal presumes that when the audit log is used, the system using the AuditEvent has access to the security infrastructure registry and logs to lookup the identifiers, thus the details that could be looked up later are not replicated in the AuditEvent. 
- Comprehensive presumes that there is no access to lookup these details, thus preserving as much of the Security Token into the AuditEvent as is reasonable and useful.

Given that IHE has the [IUA Profile](https://profiles.ihe.net/ITI/IUA/index.html), and has [Security Audit Considerations](https://profiles.ihe.net/ITI/IUA/index.html#37251-security-audit-considerations), the AuditEvent specification here will focus on IUA interactions. The profiling AuditEvent defined here is the AuditEvent that the Client and Server would record when using [IUA](https://profiles.ihe.net/ITI/IUA/index.html) with the [ITI TF-2: 3.72 Incorporate Access Token \[ITI-72\]](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72) to secure some RESTful transaction. The RESTful transaction is not defined here, just the additional AuditEvent element details that would be added to the AuditEvent for the RESTful transaction being secured (see [RESTful activities](content.html#3573-restful-activities) for general purpose logging).

The [IUA](https://profiles.ihe.net/ITI/IUA/index.html) Profile is used here as a proxy for all oAuth specifications. [IUA](https://profiles.ihe.net/ITI/IUA/index.html) is used here because IHE has direct access and has defined fields. The Minimal AuditEvent pattern defined here is not the same as the one defined in [IUA](https://profiles.ihe.net/ITI/IUA/index.html), mostly due to the more expressive and coded nature of the FHIR AuditEvent vs. the DICOM AuditMessage.

The Client and Server are both encouraged to log an AuditEvent covering any security relevant event, and to enhance that AuditEvent with one of the following patterns when an oAuth token is associated with authorizing (or forbidding) the event.

#### 3:5.7.5.1 oAuth - Opaque AuditEvent record

The Opaque AuditEvent profile would be used when the token is opaque (usually encrypted JWT). The token should be shortened to not more than 32 characters, and those characters should be from the end of the token to assure the most entropy. The presumption is that the many AuditEvent(s) can be correlated to all be related to the same security token given this shortened token string.

Other elements may be recorded following the Minimal or Comprehensive patterns.

- [StructureDefinition profile of Basic AuditEvent pattern for oAuth Opaque](StructureDefinition-IHE.BasicAudit.OAUTHaccessTokenUse.Opaque.html)
  - [examples](StructureDefinition-IHE.BasicAudit.OAUTHaccessTokenUse.Opaque-examples.html)

#### 3:5.7.5.2 oAuth - Minimal AuditEvent record

The Minimal AuditEvent pattern would be used when the JWT token is available at the time the AuditEvent is recorded, but where minimal oAuth details are desired in the AuditEvent log. 

The Minimal AuditEvent pattern defined here is not the same as the one defined in [\[ITI-72\] Security Audit Considerations](https://profiles.ihe.net/ITI/IUA/index.html#37251-security-audit-considerations), mostly due to the more expressive and coded nature of the FHIR AuditEvent over the DICOM AuditMessage. This AuditEvent pattern is also recommended for both client and server to the extent possible.

The Minimal AuditEvent record recommends using the Opaque AuditEvent record

- [StructureDefinition profile of Basic AuditEvent pattern for when activity was authorized by an oAuth security token](StructureDefinition-IHE.BasicAudit.OAUTHaccessTokenUse.Minimal.html)
  - [examples](StructureDefinition-IHE.BasicAudit.OAUTHaccessTokenUse.Minimal-examples.html)

#### 3:5.7.5.3 oAuth - Comprehensive AuditEvent record

This pattern preserves most oAuth JWT fields in the AuditEvent. Not all are preserved as some attributes are proven during the oAuth token validation and thus carry no further information useful in an AuditEvent (e.g., not before). 

Local policy may choose to record less than are defined here, or may choose to record more. 

For those using oAuth beyond IUA, there is no specific guidance here.

- [StructureDefinition profile of Basic AuditEvent pattern for oAuth Comprehensive](StructureDefinition-IHE.BasicAudit.OAUTHaccessTokenUse.Comprehensive.html)
  - [examples](StructureDefinition-IHE.BasicAudit.OAUTHaccessTokenUse.Comprehensive-examples.html)

#### 3:5.7.5.4 oAuth mapping to AuditEvent

The following table uses a short-hand for the oAuth fields and FHIR AuditEvent elements to keep the table compact. It is presumed the reader can understand the field and the FHIR AuditEvent element given. This also presumes that the one recording the AuditEvent has this level access to the oAuth fields. Note: Prefix with a ":" is the specification that defined that field (IHE-IUA, IHE-BPPC, etc.).

Note: Opaque is not shown in the table as it has no access to any oAuth Fields.

| oAuth field                          | Comprehensive AuditEvent          | Minimal AuditEvent                |
|--------------------------------------|-----------------------------------|-----------------------------------|
| iss (JWT Issuer)                     | agent[user].who.identifier.system | agent[user].who.identifier.system |
| sub (JWT Subject)                    | agent[user].who.identifier.value  | agent[user].who.identifier.value |
| aud (JWT Audience)                   |   | |
| jti (JWT ID)                         | agent[user].policy                | agent[user].policy |
| exp (JWT Expiration Time)            |   | |
| nbf (JWT Not before)                 |   | |
| iat (JWT Issued at)                  |   | |
| client_id (OA2 client id)            | agent[client].who.identifier.value | agent[client].who.identifier.value |
| scope (OA2 token scope)              |   | |
| ihe_iua:subject_name                 | agent[user].who.display | |
| ihe_iua:subject_organization         | agent[userorg].who.display | |
| ihe_iua:subject_organization_id      | agent[userorg].who.identifier.value | |
| ihe_iua:subject_role                 | agent[user].role | agent[user].role |
| ihe_iua:purpose_of_use               | agent[user].purposeOfUse           | agent[user].purposeOfUse |
| ihe_iua:home_community_id            | entity[consent].what.identifier.assigner.identifier.value | |
| ihe_iua:national_provider_identifier | agent[user].extension[otherId][npi].identifier.value | |
| ihe_iua:person_id                    | agent[user].extension[otherId][provider-id].identifier.value | |
| ihe_bppc:patient_id                  | entity[consent-patient].what.identifier.value | |
| ihe_bppc:doc_id                      | entity[consent].what.identifier.value | |
| ihe_bppc:acp                         | entity[consent].detail.valueString | |
{:.grid}

### 3:5.7.6 Consent Authorized Decision Audit Message

This set of auditEvent messages would be recorded by an Authorization Service when an authorization decision is rendered that is based on a Consent. This AuditEvent is not specific to the authorization technology (SAML/XACML, Oauth, other). This AuditEvent is specific to describing the Consent involved in the authorization decision. Success would indicate that a Permit is allowed, Failure would indicate that Deny was returned as the authorization decision.

- [Authorization Decision inclusive of Consent](StructureDefinition-IHE.BasicAudit.AuthZconsent.html)
  - [examples](StructureDefinition-IHE.BasicAudit.AuthZconsent-examples.html)

### 3:5.7.7 Privacy Disclosure Audit Message

This is transformed from the content defined today in ATNA \[ITI-20\] [2:3.20.8 Disclosure audit message](https://profiles.ihe.net/ITI/TF/Volume2/ITI-20.html#3.20.8). It is replicated here for ease of understanding, and is presented here using the FHIR AuditEvent. There are some differences caused and enabled by the FHIR AuditEvent schema and profiling.

In some countries a Patient has the right to get an accounting of disclosures. This report includes disclosures of their data that meet regulatory criteria. Most audit events, including export events, must be post-analyzed to determine whether they describe an event that needs to be included in the accounting of disclosures. For example, in the USA these rules are defined in [HIPAA](https://www.cdc.gov/phlp/publications/topic/hipaa.html), and only a few kinds of export events meet the criteria to be included in an accounting of disclosures report. When it is known, at the time the event is recorded that the event is indeed a disclosure, the disclosure audit message can be used to document the event.

The requirements of an accounting of disclosures are defined in [ASTM-2147](https://www.astm.org/e2147-18.html). A disclosure shall include the following, when the value is known:

- Who did the disclosure (the releasing agent), 
- When did the disclosure happen,
- Who was the data disclosed to (receiving agent machine and other parties, if known),
- What patient was involved (multiple patients would be done as multiple audit entries), 
- What data was involved, and 
- Why the disclosure was done 

There is some other information that may be available:

- Who is the custodian of the data (the official organization responsible), and
- Who authorized the release such as a guardian or relative (authorizing agent)

The following is the layout of the Disclosure audit event. This pattern will be extended and modified by applications when appropriate.

- [Disclosure reported by the Recipient](StructureDefinition-IHE.BasicAudit.PrivacyDisclosure.Recipient.html)
  - [examples](StructureDefinition-IHE.BasicAudit.PrivacyDisclosure.Recipient-examples.html)
- [Disclosure reported by the Source](StructureDefinition-IHE.BasicAudit.PrivacyDisclosure.Source.html)
  - [examples](StructureDefinition-IHE.BasicAudit.PrivacyDisclosure.Source-examples.html)
  


---

// File: input/pagecontent/download.md


You can download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [IHE ITI.BasicAudit Github Repo](https://github.com/IHE/ITI.BasicAudit).

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

The **Basic Audit Log Patterns (BALP) Implementation Guide** is a **Content Profile** that defines some basic and reusable AuditEvent patterns. This includes basic audit log profiles for FHIR RESTful operations to be used when there is not a more specific audit event defined. A focus is on enabling Privacy centric AuditEvent logs that hold well-formed indication of the Patient when they are the subject of the activity being recorded in the log. Where a more specific audit event can be defined, it should be derived off of these basic patterns.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

**[Search this IG](https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fprofiles.ihe.net%2FITI%2FBasicAudit)**

</div>

### Organization of This Guide

This guide is organized into following main sections:

- Volume 1: Profiles
  - [BasicAudit Introduction](volume-1.html)
  - [BasicAudit Actors and Content](volume-1.html#1521-basicaudit-actors-and-content)
  - [BasicAudit Actor Options](volume-1.html#1522-basicaudit-actor-options)
  - [BasicAudit Required Groupings](volume-1.html#1523-basicaudit-required-actor-grouping)
  - [BasicAudit Overview](volume-1.html#1524-basicaudit-overview)
  - [BasicAudit Security Considerations](volume-1.html#1525-basicaudit-security-considerations)
  - [BasicAudit Cross-Profile Considerations](volume-1.html#1526-basicaudit-cross-profile-considerations)
- Volume 3: Content Section
  - [Basic Audit Log Patterns](content.html)
    - [Scope](content.html#3571-scope)
    - [Content](content.html#3572-content)
    - [RESTful activities](content.html#3573-restful-activities)
    - [SAML Security Token](content.html#3574-saml-security-token)
    - [OAuth Security Token](content.html#3575-oauth-security-token)
    - [Consent Authorized Decision Audit Message](content.html#3576-consent-authorized-decision-audit-message)
    - [Privacy Disclosure Audit Message](content.html#3577-privacy-disclosure-audit-message)
- [Artifacts](artifacts.html)
- Other:
  - [Changes to Other IHE Specifications](other.html)
  - [Download and Analysis](download.html)
  - [AuditEvent Use in IHE Profiles](appendix.html)
  - [Test Plan](testplan.html)

See also the [Table of Contents](toc.html) and the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Must Support

The use of ```mustSupport``` in StructureDefinition profiles equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).

mustSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor shall populate the elements marked with MustSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit. 
The consuming actors should handle these elements being populated or being absent/empty. 
Note that sometimes mustSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.


---

// File: input/pagecontent/issues.md

Comments and questions are welcome as GitHub issues, FHIR chat [stream for the topic AuditEvent for Patient](https://chat.fhir.org/#narrow/stream/179247-Security-and.20Privacy/topic/AuditEvent.20for.20Patient) 

# Significant Changes

## Changes in 1.1.3 release

- tighten constraints on .type
- tighten constraints on required values
- update for IG publisher warnings

## Changes in 1.1.2 release

- add date and patient.identifier search parameter
- add context to extensions
- fix slicing of a sliced extension profiling
- do not include vocabulary display name in profiles to allow instances to not have display names
- quality improvements
- capabilityStatement improvements.

## Changes in 1.1.1 release

There are no functional changes or breaking changes. This release is primarily to address validation messages that have been made more strict by HL7 than when 1.1.0 was released.

- clarify explanation of each structureDefinition profile
- cleanup examples with explicit slice use to eliminate validation warnings
- fix the Actor definitions
- switch to new IHE template

## Changes 1.1.0 release

- Removed the adjusted AuditEvent profiles for MHD, PDQm, and PIXm; as IHE will update those IGs.

# Open Issues

- [BasicAudit/2](https://github.com/IHE/ITI.BasicAudit/issues/41). Is the oAuth AuditEvent patterns appropriate, especially the opaque one. With Opaque is the last 32 characters big enough yet not too big? Note there are no examples given due to this need for Trial Implementation feedback and experience (5 warnings).
- [BasicAudit/3](https://github.com/IHE/ITI.BasicAudit/issues/42). The R4 version of AuditEvent uses extensible binding often, this has limited the ways that the AuditEvent can be constrained. R5 has relaxed these to either example or preferred binding, so some further can be done in this IG once R5 is released.
- [BasicAudit/6](https://github.com/IHE/ITI.BasicAudit/issues/45). This IG covers only basic RESTful http. Not covered are FHIR Operations, or advanced http activities like Patch, conditional create, conditional update, etc? What others are needed, for them please provide an example transaction that can be used in a profiled example.
- [BasicAudit/7](https://github.com/IHE/ITI.BasicAudit/issues/46). X-Request-Id header -- I explained this only inside of the RESTful section, but it is applicable anywhere that X-Request-Id is used. X-Reqeust-Id is profiled differently than the example given in the FHIR core specification. Specifically there is a entity type defined here to enable slicing, where the example in FHIR core uses both type (job) and role (stream) which is harder to slice. I did not make this a standalone section because it is simply too small.  
  - X-Request-Id vs TraceId -- I added X-Request-Id profiling. I did not add TraceId, as I am not as aware of what this is. It seems very similar, unclear if it is different or the same thing. The modeling of TraceId that is in the FHIR Core is a bit different than I modeled X-Request-Id here. TraceId example in core is a .entity.type #21 "Job", with a .entity.what.identifier.type #TraceId. Where as for X-Request-Id I followed the example that Grahame indicted his server supports today for X-Request-Id. I welcome comment, as I am not an expert TraceId nor X-Reqeust-Id. 
- [BasicAudit/18](https://github.com/IHE/ITI.BasicAudit/issues/55). Is the use of AssuranceLevel proper? Should the extension element be defined more specific to NIST-800-63 assurance levels, and not allow to be carrying historical vocabulary that is not specifically assurance-level but rather the method of authentication used (e.g. urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport)?
- [BasicAudit/19](https://github.com/IHE/ITI.BasicAudit/issues/56). Note: Support for [HL7 Security for Scalable Registration, Authentication, and Authorization (aka UDAP) ](http://hl7.org/fhir/us/udap-security/history.html) when it gets published  
- [BasicAudit/21](https://github.com/IHE/ITI.BasicAudit/issues/37). IG builder / validation issue with the slicing I need to use in AuditEvent (12 validation errors). Discussion can be found https://chat.fhir.org/#narrow/stream/215610-shorthand/topic/slicing.20with.20complex.20.24this and https://chat.fhir.org/#narrow/stream/179252-IG-creation/topic/slicing.20sliced.20extension
- [BasicAudit/22](https://github.com/IHE/ITI.BasicAudit/issues/60). There are no named options. It might be useful to have named options to enable minimal vs comprehensive; or to allow claims of compliance to only disclosure auditEvent.


---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE Profiles or documents, and is not a part of the Basic Audit Log Patterns Profile. The content here will be incorporated into the target narrative at a future time, usually when BasicAudit goes normative.
</div>

## IHE Technical Frameworks General Introduction Appendix A: Actors

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}

| Actor                         | Definition                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------|
| Audit Creator  | Creates audit log messages (e.g., AuditEvent). |
| Audit Consumer | Consumes audit log messages (e.g., AuditEvent). |
{:.grid .table-striped}


## IHE Technical Frameworks General Introduction Appendix B: Transactions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                              | Definition                                                                              |
| ---------------------------------------- | --------------------------------------------------------------------------------------- |
| none |  |
{:.grid .table-striped}




---

// File: input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype.   We expect the maturity of the content will improve over time.  For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>

## Introduction

Overall test plan leverages the Profiles and Examples shown on the [Artifacts Summary](artifacts.html). The [Profiles](artifacts.html#structures-resource-profiles) listed describe the constraints that would be adhered to by actors claiming conformance to this implementation guide. Thus, any applicable AuditEvent Resources that are known to have been published by an app or server MUST be conformant to these profiles as appropriate.

The Examples listed in [Example Instances](artifacts.html#example-example-instances) are example instances. Some are conformant to the profiles. Other examples that either assist with the structure of the examples (e.g., Patient and Encounter) or are examples that  should be able to handle in various ways. 

This section will be filled in as the IHE Connectathon need drives the creation of the test plans, test procedures, test tools, and reporting.








---

// File: input/pagecontent/volume-1.md


The Basic Audit Log Patterns (BALP) is a Content Profile that defines some basic and reusable AuditEvent patterns. 

The Audit Log Patterns defined here rely on the [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Profile for transport of the AuditEvent and query/retrieval of AuditEvents previously recorded. 
The patterns defined here may be used as they are, or further refined to specific use-cases. 
Where a more specific audit event is defined, it should be derived off of these basic patterns. Thus, a more specific AuditEvent would be compliant with one or more of the AuditEvent patterns defined here.

This Implementation Guide is intended to be fully compliant with the HL7 [FHIR](http://hl7.org/fhir/) specification, providing only use-case driven constraints to aid with interoperability, deterministic results, and compatibility with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) and other IHE Profiles.

Figure 1:52-1 shows a broader setting for the actors directly involved in the Basic Audit Log Patterns Profile and the relevant transactions between them. 

<div>
{%include ActorContext.svg%}
</div>
<br clear="all">

**Figure 1:52-1: BasicAudit Actor Setting**

*ANY Secure Client* and *ANY Secure Server* represent abstractions of any client/server actor grouped with an **ATNA Secure Node** or an **ATNA Secure Application** supporting the **ATX: FHIR Feed Option**, defined in the [RESTful ATNA Supplement](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_RESTful-ATNA.pdf). Where *ANY Secure Client* and *ANY Secure Server* are involved in some communication that is an auditable event described in this Implementation Guide and for which some AuditEvent pattern is defined. The AuditEvent patterns defined here will be created and recorded \[ITI-20\] by the *Secure Node* or *Secure Application* that is grouped within the diagramed *ANY Secure Client* and the *ANY Secure Server*. 

The double recording enables forensic analysis to detect failures better. Both audit events recorded will be different as the AuditEvent.source would identify the actor recording the event. Some actors will be able to populate the AuditEvent pattern given more fully, the lack of an element being populated is not a defect, but rather indicates that the actor did not have access to that data. 

## 1:52.1 BasicAudit Actors and Content

Figure 1:52.1-1 shows the actors directly involved in the Basic Audit Log Patterns Profile and the relevant transactions between them. The **Audit Creator** creates AuditEvent records following this profile that is consumed by the **Audit Consumer**. The transport for the AuditEvent records is the [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Profile.

<div>
{%include Actors.svg%}
</div>
<br clear="all">

**Figure 1:52.1-1: BasicAudit Actor Diagram**

**Table 1:52.1-1: BasicAudit - Actors**  

| Actors                  |  Optionality| Reference|
|-------------------------|:----------:|----------|
| Audit Creator           | R | 1:52.1.1.1 |
| Audit Consumer          | R | 1:52.1.1.2 |
{:.grid}


### 1:52.1.1 Actor Descriptions and Actor Profile Requirements


#### 1:52.1.1.1 Audit Creator

The Audit Creator shall detect the defined auditable events and record a complaint AuditEvent as defined. The Audit Creator shall be grouped with an **ATNA Secure Application** or **ATNA Secure Node** with support for **ATNA ATX:FHIR Feed Option** defined in the [RESTful ATNA Supplement](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_RESTful-ATNA.pdf) for the recording of the compliant AuditEvent to the Audit Record Repository.

A `requirements` CapabilityStatements defines full functional [Audit Creator](CapabilityStatement-IHE.BALP.AuditCreator.html) with ATNA support for ITI-20.

#### 1:52.1.1.2 Audit Consumer

The Audit Consumer shall be grouped with an **ATNA Audit Consumer** with support for the **Retrieve Audit Message Option** defined in the [RESTful ATNA Supplement](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_RESTful-ATNA.pdf). The Audit Consumer understands the AuditEvent profiles defined, but shall not reject an AuditEvent due to non-compliance.

A `requirements` CapabilityStatements defines full functional [Audit Consumer](CapabilityStatement-IHE.BALP.AuditConsumer.html) with ATNA support for ITI-81.

#### 1:52.1.1.3 ATNA Audit Record Repository

The [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Audit Record Repository with support for **ATNA ATX:FHIR Feed Option**, and **Retrieve Audit Message Option**. These options are defined in the [RESTful ATNA Supplement](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_RESTful-ATNA.pdf). The ATNA Audit Record Repository may detect and validate the AuditEvent requirements defined here, but shall not reject an AuditEvent due to non-compliance.

A `requirements` CapabilityStatements defines full functional [ATNA Audit Record Repository](CapabilityStatement-IHE.BALP.ATNA.AuditRecordRepository.html) with support for the BALP content profiles.

## 1:52.2 BasicAudit Actor Options

Each AuditEvent pattern defined here can be declared by an **Audit Creator** or an **Audit Consumer**.

## 1:52.3 BasicAudit Required Actor Grouping

The required groupings for BasicAudit are those in the ATNA Profile, see [IHE ITI TF-1:9.3](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html).

The Security Considerations page describes some optional groupings that may be of interest for security considerations.

Cross-Profile Considerations describes some optional groupings in other related profiles.

## 1:52.4 BasicAudit Overview

### 1:52.4.1 Concepts
This guide provides reusable AuditEvent patterns that can be used directly, or combined, or as derivation material for a more specific AuditEvent. 

##### 1:52.4.1.1 Data access requests produce an AuditEvent

The following use-case represents a generic interaction between a client and a server. The interactions 1, 2, and 4 represent the activity that is auditable. The interaction 3 is the recording of the AuditEvent following this Implementation Guide by the server. The interaction 5 is the recording of the AuditEvent following this Implementation Guide by the client.

<div>
{%include usecase1-processflow.svg%}
</div>
<br clear="all">

**Figure: 1:52.4.1.1-1: Audit log event creation**

#### 1:52.4.1.2 AuditEvents are available to authorized clients

The following use-case represents the use-case defined in [ATNA \[ITI-81\]](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_RESTful-ATNA.pdf). The use of this transaction in this Implementation Guide is to specialize it with the use of the patient identity to retrieve AuditEvent resources where that patient identity was found in the .agent or .entity. Where the patient identity in the .agent element indicates that the patient was actively engaged in the activity recorded in that AuditEvent, and .entity element indicates that the patient was the subject of the event. Note that accessing the audit log is an auditable event and thus interactions 3 and 5.

<div>
{%include usecase2-processflow.svg%}
</div>
<br clear="all">

**Figure: 1:52.4.1.2-1: Audit Use**

#### 1:52.4.1.3 Minimal vs Comprehensive AuditEvent

In this Implementation Guide there are sometimes two sets of patterns defined:

##### 1:52.4.1.3.1 Minimal AuditEvent

The minimal AuditEvent pattern should be used whenever possible. The minimal AuditEvent pattern avoids replicating information that can be looked up by any audit analysis application that has access. By placing minimal information into the AuditEvent the size of the AuditEvent is dramatically reduced, and there is less exposure of privacy and security information. 

With minimal AuditEvent the AuditEvent contains identifiers or References, and not the details. For example, user identifier, practitioner identifier, organizational identifier, patient identifier, data object identifier, location identifiers, and security token identifier. With minimal the users names would not be recorded, details of a diagnosis would not be replicated, postal addresses would not be replicated. The identifiers that are recorded can be looked up using a user directory, practitioner directory, patient directory, data registry, and token introspection. The lookup of these values is further protection of the data behind them, preventing abuse by someone who has access to the AuditEvent log for one purpose gaining knowledge from other AuditEvent records.

With minimal AuditEvent, the AuditEvent contains only the search (aka, query) parameters, and never the results of the search. This too limits the size of the AuditEvent and the exposure of sensitive results data into the AuditEvent log. The results can be determined by re-executing the search or query, adjusting the results based on the time of the search. 

The minimal AuditEvent is lower risk, but would still contain sensitive data. 

##### 1:52.4.1.3.2 Comprehensive AuditEvent

There are times when the AuditEvent log are used by Audit Consumer Actors are known to not have access to some lookup services. In these cases, it is better to record the details into the AuditEvent. For example, where in a Cross-Community setting the details of the user may not be possible to lookup the security token details.

With Comprehensive AuditEvent, the search results might be preserved in the AuditEvent. This will create a very large AuditEvent with replicated data. So, care should be taken to select the kinds of auditable events where the results are recorded comprehensively, and these results should be purged regularly to limit the overall impact as the results data tend to be less useful as the AuditEvent ages. 

In Cross-Community settings making full access to all of the needed directory and registry services may not be logistically possible. The counter argument is that when one party needs to perform AuditEvent log analysis and has suspicion based on that analysis, they could use out-of-band methods to request a lookup of an identifier. For example, when the AuditEvent log shows a strange behavior by a user identifier, such as an unusually large number of search activities at strange times of day or searches against a VIP patient. These out-of-band requests should be supported by the Cross-Community policy agreements.

#### 1:52.4.1.4 Query Parameter Handling

The raw search request is base64 encoded and placed in the .entity[query].query element. The base64 encoding of the raw search request enables preserving exactly what was requested, including possibly malicious patterns. This enables detection of malicious or malformed requests.

The cleaned search may be recorded (not base64) in the .entity[query].description. The cleaned search request would have removed parameters that were not understood/supported. The cleaned search request in the .description element enables more efficient processing.

The results of the search are not included in the minimal AuditEvent, and are recommended to not be included in the comprehensive AuditEvent. Recording the results of a search in the AuditEvent will produce very large resources that are hard to process, and which replicate the database searched multiple times over. The AuditEvent record with search results contain highly sensitive data.

#### 1:52.4.1.5 Best Effort

The AuditEvent should be populated with best-effort. This principle recognizes that there are times when an AuditEvent can't be fully populated due to the recording entity not having access to all of the information. The principle recognizes that recording some information is better than failing to record any AuditEvent due to this lack of elements to fit the pattern. These cases where lesser information is available to be recorded tend to be during failure-modes, which leads to the importance to record the elements that are known.

This principle also recognizes that some detail could be obtained, but through extreme effort. This extreme effort is often not justified. So best-effort does not compel the use of extreme effort to obtain the missing information. For example, during a network transaction where the AuditEvent pattern is calling for the name of the user in addition to the user identifier, the name could be looked up in a directory, but this would be extreme effort that is not called for by best-effort. 

#### 1:52.4.1.6 Patient as a Subject

It is a best practice to include a reference to the Patient/Subject affected by any auditable event, in order to enable Privacy Accounting of Disclosures and Access Logs, and to enable privacy office and security office audit log analysis. Reasonable efforts should be taken to assure the Patient/Subject is recorded, but it is recognized that there are times when this is not reasonable, see the Best Effort section above.

The Patient/Subject of an activity is indicated in an .entity element; with the .entity.who indicating the Patient reference, and the .entity.type indicating “1” Person, and the .entity.role indicating “1” patient. No other elements in this .entity need to be filled out. The indicator of the .entity.who, .entity.type, and .entity.role are enough to indicate that this AuditEvent activity has a subject as indicated.

Where an activity impacts more than one Patient/Subject, multiple AuditEvent resources should be recorded, one for each Patient/Subject. This best enables segmentation of the AuditEvent details so as to limit the Privacy impact. The use of multiple AuditEvent is a best-practice and should be driven by a Policy. There will be cases where the use of multiple AuditEvent resources are not necessary, such as public health reporting.

To record a REST interaction or $operation, it is often necessary to complete the transaction in order to determine the Patient/Subject. Inspection of the potential returned results may be necessary. Some REST Search/Query requests and $operations include parameters limiting the results to a specific Patient, in these cases this parameter informs the inclusion of the Patient reference.

The Patient as a Subject is distinct from when the Patient is an Agent. When the Patient is the User, they would be indicated in an .agent and the .entity element would not be necessary. Some examples would be when the Patient is using a Patient-Portal, or when the Patient is authoring Patient Generated Health Data (PGHD).  Note that in SAML and oAuth the subject of these security tokens is the user. This is contextual use of the word 'subject', as in the context is the security token subject is the user agent.

Finding AuditEvents by Patient:
- Finding AuditEvents where the Patient is an agent, one would use the `agent` search parameter.
- Finding AuditEvents where the Patient is a subject, one would use the `entity` search parameter.
- Finding AuditEvents where the Patient is either an agent or subject, one would use the `patient` search parameter.

This Implementation Guide includes profiles that include the Patient as the subject.

### 1:52.4.2 Use Cases

The AuditEvent patterns defined here cover the following Use Cases.

#### 1:52.4.2.1 Use Case #1: Generic AuditEvent pattern for FHIR RESTful operations

Given the http RESTful operations of Create, Read, Update, Delete, and Search; the patterns defined here will capture sufficient information for audit analysis by an Audit Consumer Actor. See [3:5.7.3 RESTful activities](content.html#3573-restful-activities) for the pattern definitions and examples.

The Use Case #1 is represented by the figure first introduced in section [1:52.4.1.1 Data access requests produce an AuditEvent](#152411-data-access-requests-produce-an-auditevent).
The generic interaction between a client and a server shown with interactions 1, 2, and 4 represent the activity that is auditable. The interaction 3 is the recording of the AuditEvent following this Implementation Guide by the server. The interaction 5 is the recording of the AuditEvent following this Implementation Guide by the client.

<div>
{%include usecase1-processflow.svg%}
</div>
<br clear="all">

**Figure: 1:52.4.2.1-1: Audit log event creation**

#### 1:52.4.2.2 Use Case #2: Security token enhancement pattern 

Given that a security relevant event is being recorded, for example, Generic FHIR RESTful operations, and where a security token is known that describes the client and possibly the human; there is a need to record well formatted details about the security context. This use-case needs an audit event pattern defined, to be combined with the audit event pattern for the security relevant event (see Use Case #1), that would enhance the audit event log record with details from the OAuth or SAML token. See [3:5.7.4 SAML Security Token](content.html#3574-saml-security-token) and [3:5.7.5 OAuth Security Token](content.html#3575-oauth-security-token) for the pattern definitions and examples.
  
#### 1:52.4.2.3 Use Case #3: Consent Authorized Decision event

Given that an Authorization Service makes Authorization Decisions based on a Consent, this use-case shows how the details of the authorization decision event can be recorded. See [3:5.7.6 Consent Authorized Decision Audit Message](content.html#3576-consent-authorized-decision-audit-message).

<div>
{%include usecase4-processflow.svg%}
</div>
<br clear="all">

**Figure: 1:52.4.2.3-1: Consent Authorized Decision process flow**

This diagram focuses on the Authorization Decision, so not shown in this interaction diagram are the other AuditEvent that would be recorded by the ANY Secure Client and ANY Secure Server to record the auditable event that is the client and server interaction.

#### 1:52.4.2.4 Use Case #4: Privacy relevant disclosure event

Given that a privacy relevant disclosure event is detected, this use-case shows how the details of the event can be recorded. See [3:5.7.7 Privacy Disclosure Audit Message](content.html#3577-privacy-disclosure-audit-message).

## 1:52.5 BasicAudit Security Considerations

This profile does not define any transactions. This profile defines AuditEvent patterns to be used when a more specific AuditEvent pattern is defined. 

In some cases, this profile has defined a minimally-populated AuditEvent that is focused on recording identifiers with no descriptive or replication. The minimally-populated AuditEvent helps preserve privacy of the data, actors, and events recorded in the AuditEvent. The minimally-populated AuditEvent is expected to be used by an audit log using agent that has knowledge of the source material for these identifiers, and has access rights to use those source materials. For example, recording a Practitioner identifier, without recording the Practitioner name or other elements that can be found in the Practitioner resource; where audit log analysis would use an organization directory where that identifier can be looked up to find the full details of the Practitioner.

## 1:52.6 BasicAudit Cross-Profile Considerations

This profile defines some AuditEvent patterns for use when there is not a more specific AuditEvent pattern defined. Thus, when grouped with an IHE Profile that has defined an AuditEvent (AuditMessage) pattern, that more specific pattern defined in the grouped IHE Profile shall be used.

The patterns defined here might be used as profiling parent to a more specific defined AuditEvent.


---

// File: input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: LOINC = http://loinc.org
Alias: DCM = http://dicom.nema.org/resources/ontology/DCM


---

// File: input/fsh/AuthZ.fsh


CodeSystem:  AuthZsubType 
Title: "Authorization subType events"
Description:  "These AuditEvent subTypes are related to Authorization Decisions. These are more specific types of Security Alert."
* ^caseSensitive = true
* ^experimental = false
* #AuthZ-Consent "Authorization Decision using Roles and Consent"
* #AuthZ-Role "Authorization Decision using only Roles"

ValueSet: AuthZsubTypeVS
Title: "Authorization subType events valueset"
Description: "ValueSet of the Authorization AuditEvent types"
* ^experimental = false
* codes from system AuthZsubType



Profile:        AuthZconsent
Parent:         AuditEvent
Id:             IHE.BasicAudit.AuthZconsent
Title:          "Basic AuditEvent pattern for when an Authorization permit is decided"
Description:    """
An AduitEvent recording a permit authorization decision by a Consent Decision Service, 

- Given an Authorization Decision resulted in a permit
- And based on a Consent resource (C1) 
- And filed by a patient (P1), 
- And in response to a request by an organization (Org1) 
- And for the purpose of treatment (TREAT).
- And the given request is authorized 
- When an AuditEvent is recorded for the activity
- Then that AuditEvent would follow this profile regarding recording the authorization decision
  - Security Alert
  - Authorization Decison by Consent
  - Execute action
  - date/time recorded
  - outcome
    - success when Permit
	- failure when Deny
	- outcomeDesc would explain why a deny
  - recorded by the authorization server
  - Agents
    - client app
	- user
	  - user requested purposeOfUse
	- user organization
	- authorization service
  - Entity
    - patient subject
	- consent on file for that patient
	- the token id (JWT ID) issued (if one is issued) should be recorded
	- other data may be recorded that was used in the decision
"""
* modifierExtension 0..0
* type = DCM#110113 // "Security Alert"
* type 1..
* subtype from AuthZsubTypeVS
* subtype 1..
* action = #E
// subtype
// * severity in R5
* recorded 1..1 // already required
* outcome 1..1
* outcomeDesc MS // encouraged
* purposeOfEvent MS // why was the data disclosed
// source is already required, see invariant val-audit-source use
* agent 2..*
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent ^slicing.description = "client, user, and organization requesting authorization; and authoizer"
* agent contains 
	client 1..1 and
	user 1..1 and
	userorg 1..1 and
	authorizer 1..1
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110150 // "Application"
* agent[client].who 1..1 // client identifier, May be an Device Resource, but more likely an identifier given the App identified in the OAuth token 
* agent[client].network 1..1 // as known by TCP connection information
* agent[client].role 0..0 
* agent[client].altId 0..0
* agent[client].name 0..0 
* agent[client].location 0..0 
* agent[client].policy MS // input client token id
* agent[client].media 0..0 
* agent[client].purposeOfUse 0..0 
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP // "information recipient"
* agent[user].who 1..1 // May be a Resource, but likely just an identifier from the OAuth token
* agent[user].requestor = true
* agent[user].role MS // if the OAuth token includes any roles, they are recorded here
* agent[user].altId 0..0 // discouraged
* agent[user].name MS // might also be in .who.text but here is searchable
* agent[user].location 0..0 // discouraged as unlikely to be known in this scenario
* agent[user].policy MS // input user token id
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS // if the requested purposeOfUse is applied to just the user
* agent[userorg].type = http://terminology.hl7.org/CodeSystem/v3-RoleClass#PROV // "healthcare provider"
* agent[userorg].who 1..1 MS
* agent[userorg].requestor = false
* agent[userorg].role 0..0
* agent[userorg].altId 0..0 // discouraged
* agent[userorg].name 0..0 
* agent[userorg].location 0..0 // discouraged as unlikely to be known in this scenario
* agent[userorg].policy 0..0
* agent[userorg].media 0..0 // media is physical storage media identification
* agent[userorg].network 0..0 // users are not network devices
* agent[userorg].purposeOfUse MS // if the request purposeOfUse is applied to the whole organization
* agent[authorizer].type = http://terminology.hl7.org/CodeSystem/extra-security-role-type#authserver // "authorization server"
* agent[authorizer] obeys val-audit-source
* agent[authorizer].who 1..1
* agent[authorizer].requestor = false
* agent[authorizer].role 0..0
* agent[authorizer].altId 0..0 // discouraged
* agent[authorizer].name 0..0 
* agent[authorizer].location 0..0 // discouraged as unlikely to be known in this scenario
* agent[authorizer].policy 0..0
* agent[authorizer].media 0..0 // media is physical storage media identification
* agent[authorizer].network 0..0 // users are not network devices
* agent[authorizer].purposeOfUse 0..0
* entity 2..*
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #closed
* entity ^slicing.description = "patient and submission set involved"
* entity contains
	patient 1..1 and
	consent 1..* and
	token 0..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].role 1..
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[consent].type = http://hl7.org/fhir/resource-types#Consent // "Consent"
* entity[consent].what 1..1 MS // consent identifier
* entity[token].type = UserAgentTypes#UserOauthAgent
* entity[token].what 1..1
* entity[token].what.identifier 1..1
* entity[token].what.identifier.value 1..1
* entity[token].what.identifier.value ^short =  "jti (JWT ID)"
* entity[token].what.identifier.value ^comment =  "jti SHALL be prefixed with \"urn:ietf:params:oauth:jti:\". This URN is based on RFC3553."




////////////////////////////////////////////////////////EXAMPLES/////////////////////////////////////////////////


Instance: ex-auditAuthZconsent
InstanceOf: IHE.BasicAudit.AuthZconsent
Title: "Audit Example of a basic Authorization Permit access"
Description: """
Example AuditEvent showing an authorization decision.
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110113 "Security Alert"
* subtype = AuthZsubType#AuthZ-Consent
* action = #E
//* severity = #Informational
* recorded = 2021-12-27T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 // "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-authz)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#6 // "Security Server"
* agent[authorizer].type = http://terminology.hl7.org/CodeSystem/extra-security-role-type#authserver // "authorization server"
* agent[authorizer].who = Reference(Device/ex-authz)
* agent[authorizer].requestor = false
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110150 // "Application"
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 // "IP Address"
* agent[client].requestor = false
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP // "information recipient"
* agent[user].who = Reference(Practitioner/ex-practitioner)
* agent[user].purposeOfUse = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT
* agent[user].requestor = true
* agent[userorg].type = http://terminology.hl7.org/CodeSystem/v3-RoleClass#PROV // "healthcare provider"
* agent[userorg].who = Reference(Organization/ex-organization)
* agent[userorg].requestor = false
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[consent].type = http://hl7.org/fhir/resource-types#Consent // "Consent"
* entity[consent].what = Reference(Consent/ex-consent)


Instance: ex-auditAuthZconsent-deny
InstanceOf: IHE.BasicAudit.AuthZconsent
Title: "Audit Example of a basic Authorization Deny access"
Description: """
Example AuditEvent showing an authorization decision resulting in deny.
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110113 "Security Alert"
* subtype = AuthZsubType#AuthZ-Consent
* action = #E
* recorded = 2021-12-27T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#8 "Serious failure"
* outcomeDesc = "Consent denied access to this user"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-authz)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#6 "Security Server"
* agent[authorizer].type = http://terminology.hl7.org/CodeSystem/extra-security-role-type#authserver // "authorization server"
* agent[authorizer].who = Reference(Device/ex-authz)
* agent[authorizer].requestor = false
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110150 // "Application"
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[client].requestor = false
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP // "information recipient"
* agent[user].who = Reference(Practitioner/ex-practitioner)
* agent[user].purposeOfUse = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT
* agent[user].requestor = true
* agent[userorg].type = http://terminology.hl7.org/CodeSystem/v3-RoleClass#PROV // "healthcare provider"
* agent[userorg].who = Reference(Organization/ex-organization)
* agent[userorg].requestor = false
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[consent].type = http://hl7.org/fhir/resource-types#Consent // "Consent"
* entity[consent].what = Reference(Consent/ex-consent)


---

// File: input/fsh/capability.fsh

Instance: IHE.BALP.AuditConsumer
InstanceOf: CapabilityStatement
Usage: #definition
* description = """
CapabilityStatement for [Audit Consumer](volume-1.html#152112-audit-consumer) Actor in [BALP](index.html).

This CapabilityStatement replicates the requirements that would come from the ATNA **Audit Consumer* actor supporting **ATNA Retrieve Audit Message Option**.
"""
* name = "IHE_BALP_AuditConsumer"
* title = "IHE BALP Audit Consumer"
* status = #active
* experimental = false
* date = "2022-10-28"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "BALP Audit Consumer will query for AuditEvent resources."
  * security
    * description = "[ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) required, encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or SMART-on-FHIR"
  * resource[+]
    * type = #AuditEvent
    * documentation = "For Retrieve ATNA Audit Event [ITI-81]. Note that all BALP Content profiles are listed here."
    // list all profiles defined in BALP
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Create"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Read"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Update"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Delete"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Query"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientCreate"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientRead"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientUpdate"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientDelete"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientQuery"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.IUA.71"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.OAUTHaccessTokenUse.Comprehensive"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.OAUTHaccessTokenUse.Minimal"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.OAUTHaccessTokenUse.Opaque"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.SAMLaccessTokenUse.Comprehensive"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.SAMLaccessTokenUse.Minimal"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.AuthZconsent"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PrivacyDisclosure.Recipient"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PrivacyDisclosure.Source"
    * interaction[+].code = #search-type
    * interaction[+].code = #read
    * searchParam[+]
      * name = "_id"
      * type = #token
    * searchParam[+]
      * name = "_lastUpdated"
      * type = #date
    * searchParam[+]
      * name = "date"
      * type = #date
    * searchParam[+]
      * name = "address"
      * type = #string
    * searchParam[+]
      * name = "agent.identifier"
      * type = #token
    * searchParam[+]
      * name = "patient.identifier"
      * type = #token
    * searchParam[+]
      * name = "entity.identifier"
      * type = #token
    * searchParam[+]
      * name = "entity-type"
      * type = #token
    * searchParam[+]
      * name = "entity-role"
      * type = #token
    * searchParam[+]
      * name = "source.identifier"
      * type = #token
    * searchParam[+]
      * name = "type"
      * type = #token
    * searchParam[+]
      * name = "subtype"
      * type = #token
    * searchParam[+]
      * name = "outcome"
      * type = #token




Instance: IHE.BALP.ATNA.AuditRecordRepository
InstanceOf: CapabilityStatement
Usage: #definition
* description = """
CapabilityStatement for [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Audit Record Repository Actor with the ATNA ATX:FHIR Feed Option and Retrieve Audit Message Option defined in [RESTful-ATNA Supplement](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_RESTful-ATNA.pdf) that also has support for BALP Content.

This Actor is derived off of the ATNA Audit Record Repository actor that is not yet defined fully in an IG. This CapabilityStatement does not represent a formal Actor, but rather a system that has grouped ATNA and BALP.
"""
* name = "IHE_BALP_ATNA_AuditRecordRepository"
* title = "IHE ATNA Audit Record Repository supporting BALP Content"
* status = #active
* experimental = false
* date = "2022-10-28"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * security
    * description = "[ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) required, encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or SMART-on-FHIR"
  * resource[+]
    * type = #AuditEvent
    * documentation = "For Retrieve ATNA Audit Event [ITI-81] and the FHIR Record Audit Event [ITI-20]. Note that all BALP Content profiles are listed here."
    // list all profiles defined in BALP
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Create"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Read"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Update"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Delete"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Query"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientCreate"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientRead"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientUpdate"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientDelete"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientQuery"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.IUA.71"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.OAUTHaccessTokenUse.Comprehensive"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.OAUTHaccessTokenUse.Minimal"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.OAUTHaccessTokenUse.Opaque"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.SAMLaccessTokenUse.Comprehensive"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.SAMLaccessTokenUse.Minimal"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.AuthZconsent"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PrivacyDisclosure.Recipient"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PrivacyDisclosure.Source"
    * interaction[+].code = #search-type
    * interaction[+].code = #read
    * interaction[+].code = #create
    * searchParam[+]
      * name = "_id"
      * type = #token
    * searchParam[+]
      * name = "_lastUpdated"
      * type = #date
    * searchParam[+]
      * name = "date"
      * type = #date
    * searchParam[+]
      * name = "address"
      * type = #string
    * searchParam[+]
      * name = "agent.identifier"
      * type = #token
    * searchParam[+]
      * name = "patient.identifier"
      * type = #token
    * searchParam[+]
      * name = "entity.identifier"
      * type = #token
    * searchParam[+]
      * name = "entity-type"
      * type = #token
    * searchParam[+]
      * name = "entity-role"
      * type = #token
    * searchParam[+]
      * name = "source.identifier"
      * type = #token
    * searchParam[+]
      * name = "type"
      * type = #token
    * searchParam[+]
      * name = "subtype"
      * type = #token
    * searchParam[+]
      * name = "outcome"
      * type = #token



Instance: IHE.BALP.AuditCreator
InstanceOf: CapabilityStatement
Usage: #definition
* description = """
CapabilityStatement for [Audit Creator](volume-1.html#152111-audit-creator) Actor in [BALP](index.html).

This Actor is derived off of the **ATNA Secure Application** or **Secure Node** actor with **ATNA ATX:FHIR Feed Option** using ITI-20. 
"""
* name = "IHE_BALP_AuditCreator"
* title = "IHE BALP Audit Creator"
* status = #active
* experimental = false
* date = "2022-10-28"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "BALP **Audit Creator** will CREATE AuditEvent resources, and send them to the **Audit Record Repository** with **ATNA ATX:FHIR Feed Option** using ITI-20 FHIR support."
  * security
    * description = "[ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) required, encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or SMART-on-FHIR"
  * resource[+]
    * type = #AuditEvent
    * documentation = "For ATNA Record Audit Event [ITI-20] using FHIR. . Note that all BALP Content profiles are listed here."
    * interaction[+].code = #create
    // list all profiles defined in BALP
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Create"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Read"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Update"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Delete"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Query"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientCreate"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientRead"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientUpdate"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientDelete"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PatientQuery"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.IUA.71"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.OAUTHaccessTokenUse.Comprehensive"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.OAUTHaccessTokenUse.Minimal"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.OAUTHaccessTokenUse.Opaque"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.SAMLaccessTokenUse.Comprehensive"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.SAMLaccessTokenUse.Minimal"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.AuthZconsent"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PrivacyDisclosure.Recipient"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.PrivacyDisclosure.Source"



---

// File: input/fsh/Disclose.fsh

Profile:        AuditPrivacyDisclosureRecipient
Parent:         AuditEvent
Id:             IHE.BasicAudit.PrivacyDisclosure.Recipient
Title:          "Audit Event for a Privacy Disclosure as recorded by a Recipient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Privacy Disclosure is detected at the Recipient of the data.

- Import event
- shall have source of itself
- shall have a source agent
- shall have a recipient agent
- may have user, app, organization agent(s)
  - combine with the Security Token pattern
- may, if known, have the custodian that released the data
- may, if known, have the authorizer that represented the patient (may be the patient)
- shall have a patient entity
- shall have a set identity entity
"""
* modifierExtension 0..0
* type 1..
* type = DCM#110107 // "Import"
* action = #C
* insert requireAtLeastOneMatch(subtype, disclosure, http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle#disclose )
* subtype ^slicing.description = "needs to at least be a disclosure event"
// * severity in R5
* recorded 1..1 // already required
* outcome 1..1
* outcomeDesc MS // encouraged
* purposeOfEvent MS // why was the data disclosed
// source is already required, see invariant val-audit-source use
* agent 2..*
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent ^slicing.description = "source, recipient, and possibly the user who participated"
* agent contains 
	source 1..1 and
	recipient 1..1 and
	custodian 0..1 and
	authorizer 0..1
	// may be many including app identity, user identity, etc
	// likely do need to express WHO requested the data be disclosued, and WHO authorized the disclosure
* agent[source].type = DCM#110153 // "Source Role ID"
* agent[source].who 1..1
* agent[source].network 1..1
* agent[recipient] obeys val-audit-source
* agent[recipient].type = DCM#110152 // "Destination Role ID"
* agent[recipient].who 1..1
* agent[recipient].network 1..1
* agent[custodian].type = SCT#159541003 // "Record keeping/library clerk"
* agent[custodian].who 1..1
* agent[authorizer].type = SCT#429577009 // "Patient Advocate"
* agent[authorizer].who 1..1
* entity 2..*
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity ^slicing.description = "patient and some data involved"
* entity contains
	patient 1..1 
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].role 1..
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)



Invariant: val-audit-source
Description: "The Audit Source is this agent too."
Expression: "$this.who = %resource.source.observer"
Severity: #error

Profile:        AuditPrivacyDisclosureSource
Parent:         AuditEvent
Id:             IHE.BasicAudit.PrivacyDisclosure.Source
Title:          "Audit Event for Privacy Disclosure at Source"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Privacy Disclosure happens at the Source.

- Import event
- shall have source of itself
- shall have a source agent
- shall have a recipient agent
- may have user, app, organization agent(s)
  - combine with the Security Token pattern
- should have the custodian that released the data
- should have the authorizer that represented the patient (may be the patient)
- shall have a patient entity
- shall have the set of data entity(ies)
"""
* modifierExtension 0..0
* type = DCM#110106 // "Export"
* type 1..
* action = #R
* insert requireAtLeastOneMatch(subtype, disclosure, http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle#disclose)
* subtype ^slicing.description = "needs to at least be a disclosure event"
// * severity in R5
* recorded 1..1 // already required
* outcome 1..1
* outcomeDesc MS // encouraged
* purposeOfEvent MS // why was the data disclosed
// source is already required, see invariant val-audit-source use
* agent 2..*
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent ^slicing.description = "source, recipient, and possibly the user who participated"
* agent contains 
	source 1..1 and
	recipient 1..1 and
	custodian 0..1 and
	authorizer 0..1
	// may be many including app identity, user identity, etc
	// likely do need to express WHO requested the data be disclosued, and WHO authorized the disclosure
* agent[source].type = DCM#110153 // "Source Role ID"
* agent[source].who 1..1
* agent[source].network 1..1
* agent[source] obeys val-audit-source
* agent[recipient].type = DCM#110152 // "Destination Role ID"
* agent[recipient].who 1..1
* agent[recipient].network 1..1
* agent[custodian].type = SCT#159541003 // "Record keeping/library clerk"
* agent[custodian].who 1..1
* agent[authorizer].type = SCT#429577009 // "Patient Advocate"
* agent[authorizer].who 1..1
* entity 2..*
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity ^slicing.description = "patient and some data involved"
* entity contains
	patient 1..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].role 1..
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)




Instance: ex-auditPrivacyDisclosure-recipient
InstanceOf: IHE.BasicAudit.PrivacyDisclosure.Recipient
Title: "Audit Example of Privacy Disclosure at recipient"
Description: "Audit Example for a Privacy Disclosure as recorded at the recipient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110107 "Import"
* action = #C
* subtype[disclosure] = http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle#disclose "Disclose Record Lifecycle Event"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* purposeOfEvent = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT "patient requested"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[source].type = DCM#110153 "Source Role ID"
* agent[source].requestor = false
* agent[source].who.display = "myMachine.example.org"
* agent[source].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[source].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[recipient].type = DCM#110152 "Destination Role ID"
* agent[recipient].who = Reference(Device/ex-device)
* agent[recipient].requestor = false
* agent[recipient].network.address = "http://server.example.com/fhir"
* agent[recipient].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[authorizer].type = SCT#429577009 "Patient Advocate"
* agent[authorizer].who = Reference(Patient/ex-patient)
* agent[authorizer].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[1].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[1].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[1].what = Reference(DocumentReference/ex-documentreference)


Instance: ex-auditPrivacyDisclosure-source
InstanceOf: IHE.BasicAudit.PrivacyDisclosure.Source
Title: "Audit Example of Privacy Disclosure at source"
Description: "Audit Example for a Privacy Disclosure from source perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110106 "Export"
* action = #R
* subtype[disclosure] = http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle#disclose "Disclose Record Lifecycle Event"
* subtype[1] = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* purposeOfEvent = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT "patient requested"
* source.site = "mobile app foo-bar"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[source].type = DCM#110153 "Source Role ID"
* agent[source].who.display = "model number ABC, serial number 1234"
* agent[source].requestor = false
* agent[source].network.address = "myDevice.example.com"
* agent[source].network.type = http://hl7.org/fhir/network-type#1 "domain name"
* agent[recipient].type = DCM#110152 "Destination Role ID"
* agent[recipient].requestor = false
* agent[recipient].who.display = "myMachine.example.org"
* agent[recipient].network.address = "http://server.example.com/fhir"
* agent[recipient].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[authorizer].type = SCT#429577009 "Patient Advocate"
* agent[authorizer].who = Reference(Patient/ex-patient)
* agent[authorizer].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[1].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[1].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[1].what = Reference(DocumentReference/ex-documentreference)

Instance: ex-auditPrivacyDisclosure-source2
InstanceOf: IHE.BasicAudit.PrivacyDisclosure.Source
Title: "Audit Example of Privacy Disclosure at source"
Description: "Audit Example for a Privacy Disclosure from source perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110106 "Export"
* action = #R
* subtype[disclosure] = http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle#disclose "Disclose Record Lifecycle Event"
* subtype[1] = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* purposeOfEvent = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT "patient requested"
* source.site = "mobile app foo-bar"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[source].type = DCM#110153 "Source Role ID"
* agent[source].who.display = "model number ABC, serial number 1234"
* agent[source].requestor = false
* agent[source].network.address = "myDevice.example.com"
* agent[source].network.type = http://hl7.org/fhir/network-type#1 "domain name"
* agent[recipient].type = DCM#110152 "Destination Role ID"
* agent[recipient].requestor = false
* agent[recipient].who.display = "myMachine.example.org"
* agent[recipient].network.address = "http://server.example.com/fhir"
* agent[recipient].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[authorizer].type = SCT#429577009 "Patient Advocate"
* agent[authorizer].who = Reference(Patient/ex-patient)
* agent[authorizer].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[1].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[1].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[1].what = Reference(DocumentReference/ex-documentreference)


Instance: ex-auditPrivacyDisclosure-measurereport
InstanceOf: IHE.BasicAudit.PrivacyDisclosure.Source
Title: "Audit Example of Privacy Disclosure of a patient specific MeasureReport"
Description: "Audit Example for a Privacy Disclosure from source perspective of a MeasureReport"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110106 "Export"
* action = #R
* subtype[disclosure] = http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle#disclose "Disclose Record Lifecycle Event"
* subtype[1] = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* purposeOfEvent = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT "patient requested"
* source.site = "mobile app foo-bar"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[source].type = DCM#110153 "Source Role ID"
* agent[source].who.display = "model number ABC, serial number 1234"
* agent[source].requestor = false
* agent[source].network.address = "myDevice.example.com"
* agent[source].network.type = http://hl7.org/fhir/network-type#1 "domain name"
* agent[recipient].type = DCM#110152 "Destination Role ID"
* agent[recipient].requestor = false
* agent[recipient].who.display = "myMachine.example.org"
* agent[recipient].network.address = "http://server.example.com/fhir"
* agent[recipient].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[authorizer].type = SCT#429577009 "Patient Advocate"
* agent[authorizer].who = Reference(Patient/ex-patient)
* agent[authorizer].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[1].type = http://hl7.org/fhir/resource-types#MeasureReport
* entity[1].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[1].what = Reference(MeasureReport/ex-measurereport)


Instance: ex-auditPrivacyDisclosure-recipient-minCodes
InstanceOf: IHE.BasicAudit.PrivacyDisclosure.Recipient
Title: "Audit Example of Privacy Disclosure at recipient"
Description: "Audit Example for a Privacy Disclosure as recorded at the recipient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110107 // "Import"
* action = #C
* subtype[disclosure] = http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle#disclose // "Disclose Record Lifecycle Event"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 // "Success"
* purposeOfEvent = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT // "patient requested"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 // "Application Server"
* agent[source].type = DCM#110153 // "Source Role ID"
* agent[source].requestor = false
* agent[source].who.display = "myMachine.example.org"
* agent[source].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[source].network.type = http://hl7.org/fhir/network-type#2 // "IP Address"
* agent[recipient].type = DCM#110152 "Destination Role ID"
* agent[recipient].who = Reference(Device/ex-device)
* agent[recipient].requestor = false
* agent[recipient].network.address = "http://server.example.com/fhir"
* agent[recipient].network.type = http://hl7.org/fhir/network-type#5 // "URI"
* agent[authorizer].type = SCT#429577009 "Patient Advocate"
* agent[authorizer].who = Reference(Patient/ex-patient)
* agent[authorizer].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[1].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 // "System Object"
* entity[1].role = http://terminology.hl7.org/CodeSystem/object-role#3 // "Report"
* entity[1].what = Reference(DocumentReference/ex-documentreference)




---

// File: input/fsh/ex-dummy.fsh

Instance:   ex-patient
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
// history - http://playgroundjungle.com/2018/02/origins-of-john-jacob-jingleheimer-schmidt.html
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].use = #usual
* name[=].family = "Schmidt"
* name[=].given = "John"
* name[+].use = #old
* name[=].family = "Schnidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingle"
* name[=].given[+] = "Heimer"
* name[=].period.end = "1960"
* name[+].use = #official
* name[=].family = "Schmidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingleheimer"
* name[=].period.start = "1960-01-01"
* name[+].use = #nickname
* name[=].family = "Schmidt"
* name[=].given = "Jack"
* gender = #other
* birthDate = "1923-07-25"
* address.state = "WI"
* address.country = "USA"

Instance:   ex-device
InstanceOf: Device
Title:      "Dummy Device example"
Description: "Dummy Device example for completeness sake. No actual use of this resource other than an example target"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST

Instance:   ex-authz
InstanceOf: Device
Title:      "Dummy Device authorization service example"
Description: "Dummy Device authorization service example for completeness sake. No actual use of this resource other than an example target"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST

Instance:   ex-organization
InstanceOf: Organization
Title:      "Dummy Organization example"
Description: "Dummy Organization example for completeness sake. No actual use of this resource other than an example target"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name = "nowhere"

Instance: ex-documentreference
InstanceOf: DocumentReference
Title: "Dummy DocumentReference example"
Description: "Dummy DocumentReference example for completeness sake. No actual use of this resource other than an example target"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* content.attachment.title = "Hello World"
* content.attachment.language = #en

Instance: ex-documentreference2
InstanceOf: DocumentReference
Title: "Dummy DocumentReference 2 example"
Description: "Dummy DocumentReference 2 example for completeness sake. No actual use of this resource other than an example target"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* content.attachment.title = "Hello World"
* content.attachment.language = #en

Instance: ex-b-binary
InstanceOf: Binary
Title: "Example document that says: Hello World"
Description: "Dummy Binary that just says Hello World"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="

Instance: ex-list
InstanceOf: List
Title: "Dummy List example"
Description: "Dummy List example for completeness sake. No actual use of this resource other than an example target"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* mode = #working
* entry.item = Reference(DocumentReference/ex-documentreference2)



Instance: ex-practitioner
InstanceOf: Practitioner
Title: "Dummy Practitioner example"
Description: "Dummy Practitioner example for completeness sake. No actual use of this resource other than an example target"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* telecom.system = #email
* telecom.value = "JohnMoehrke@gmail.com"


Instance: ex-consent
InstanceOf: Consent
Title: "Dummy Consent example"
Description: "Dummy Consent example for completeness sake. No actual use of this resource other than an example target"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category = LOINC#57016-8
* patient = Reference(ex-patient)
* policy.uri = "urn:uuid:a7ff9fa3-fbb6-4c5e-a1cc-6128069bbd4b"


Instance: ex-measurereport
InstanceOf: MeasureReport
Title: "Dummy MeasureReport example"
Description: "Dummy MeasureReport example for completeness sake. No actual use of this resource other than an example target that is NOT patient specific."
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #pending
* type = #summary
* measure = "http://example.org/fhir/uv/saner/Measure/FEMADailyHospitalCOVID19Reporting"
* period.start = "2020-04-05"
* period.end = "2020-04-05"


---

// File: input/fsh/ex-patientCreate.fsh


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicCreateNoPatient
InstanceOf: Create
Title: "Server - Audit Example of a basic Create"
Description: """
Audit Example for a RESTful Create of a resource with No patient subject. This example is a summary measure report.

- recorded by the client
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is John Smith
- created resource is ex-measurereport
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #C
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT "author (originator)"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(MeasureReport/ex-measurereport)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicCreateServer
InstanceOf: PatientCreate
Title: "Server - Audit Example of a basic patient identifiable Create"
Description: """
Audit Example for a RESTful Create of a resource with a patient subject

- recorded by the server with [client](AuditEvent-ex-auditBasicCreateClient.html)
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is John Smith
- patient is ex-patient
- created resource is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #C
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT "author (originator)"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicCreateClient
InstanceOf: PatientCreate
Title: "Client - Audit Example of a basic patient identifiable Create by the author"
Description: """
Audit Example for a RESTful Create of a resource with a patient subject created by the author

- recorded by the client with [server](AuditEvent-ex-auditBasicCreateServer.html)
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is the author John Smith
- patient is ex-patient
- created resource is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #C
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT "author (originator)"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicCreate1
InstanceOf: PatientCreate
Title: "Server - Audit Example of a basic patient identifiable Create by an informant"
Description: """
Audit Example for a RESTful Create of a resource with a patient subject by an informant

- recorded by the server
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is an Informant Betty Jones
- patient is ex-patient
- created resource is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #C
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#INF "Informant"
* agent[user].who.display = "Betty Jones" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicCreate2
InstanceOf: PatientCreate
Title: "Server - Audit Example of a basic patient identifiable Create by a custodian"
Description: """
Audit Example for a RESTful Create of a resource with a patient subject by a custodian

- recorded by the server
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is an Custodian Charley Miller
- patient is ex-patient
- created resource is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #C
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#CST "Custodian"
* agent[user].who.display = "Charley Miller" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicCreateNoUser
InstanceOf: PatientCreate
Title: "Client - Audit Example of a basic patient identifiable Create with no user"
Description: """
Audit Example for a RESTful Create of a resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the client - ex-device
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- patient is ex-patient
- created resource is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #C
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicCreateNoUserReport
InstanceOf: PatientCreate
Title: "Client - Audit Example of a basic patient identifiable Create of a Report with no user"
Description: """
Audit Example for a RESTful Create of a Report (document) resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the client - ex-device
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- patient is ex-patient
- created resource is ex-documentreference
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #C
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[data].what = Reference(DocumentReference/ex-documentreference)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicCreateNoUserJob
InstanceOf: PatientCreate
Title: "Client - Audit Example of a basic patient identifiable Create of a Job with no user"
Description: """
Audit Example for a RESTful Create of a Job (document) resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the client - ex-device
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- patient is ex-patient
- created job is ex-documentreference
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #C
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(DocumentReference/ex-documentreference)



---

// File: input/fsh/ex-patientDelete.fsh


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicDeleteNoPatient
InstanceOf: Delete
Title: "Server - Audit Example of a basic object Delete at server"
Description: """
Audit Example for a RESTful Delete of a resource that is NOT patient specific

- recorded by the server
- client is an app on myMachine
- user is the Author John Smith
- deleted object is ex-measurereport that is a summary FEMA COVID report draft
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
//* severity = #Informational
* recorded = 2020-04-06T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110150 "Application"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT "author (originator)"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(MeasureReport/ex-measurereport)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicDeleteServer
InstanceOf: PatientDelete
Title: "Server - Audit Example of a basic patient identifiable Delete at server"
Description: """
Audit Example for a RESTful Delete of a resource with a patient subject

- recorded by the server peer [client](AuditEvent-ex-auditBasicDeleteClient.html)
- client is an app on myMachine
- user is the Author John Smith
- patient is identified as ex-patient
- deleted object is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110150 "Application"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT "author (originator)"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicDeleteClient
InstanceOf: PatientDelete
Title: "Client - Audit Example of a basic patient identifiable Delete at Client"
Description: """
Audit Example for a RESTful Delete of a resource with a patient subject

- recorded by the client peer [server](AuditEvent-ex-auditBasicDeleteServer.html)
- client is an app on myMachine
- user is the Author John Smith
- patient is identified as ex-patient
- deleted object is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110150 "Application"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT "author (originator)"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicDeleteInformant
InstanceOf: PatientDelete
Title: "Server - Audit Example of a basic patient identifiable Delete by Informant"
Description: """
Audit Example for a RESTful Delete of a resource with a patient subject

- recorded by the server
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is an Informant Betty Jones
- patient is identified as ex-patient
- deleted object is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110150 "Application"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#INF "Informant"
* agent[user].who.display = "Betty Jones" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicDelete2
InstanceOf: PatientDelete
Title: "Client - Audit Example of a basic patient identifiable Delete"
Description: """
Audit Example for a RESTful Delete of a resource with a patient subject

- recorded by the client
- client is an app on myMachine
- user is an Custodian Charley Miller
- patient is identified as ex-patient
- deleted object is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110150 "Application"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#CST "Custodian"
* agent[user].who.display = "Charley Miller" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicDeleteNoUser
InstanceOf: PatientDelete
Title: "Client - Audit Example of a basic patient identifiable Delete with no user"
Description: """
Audit Example for a RESTful Delete of a resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the client
- client is an app on myMachine
- user is NOT specified. 
- patient is identified as ex-patient
- deleted object is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110150 "Application"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicDeleteNoUserReport
InstanceOf: PatientDelete
Title: "Client - Audit Example of a basic patient identifiable Delete of a Report with no user"
Description: """
Audit Example for a RESTful Delete of a Report (document) resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the client
- client is an app on myMachine
- user is NOT specified. 
- patient is identified as ex-patient
- deleted Report is ex-documentreference
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110150 "Application"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[data].what = Reference(DocumentReference/ex-documentreference)


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicDeleteNoUserJob
InstanceOf: PatientDelete
Title: "Client - Audit Example of a basic patient identifiable Delete of a Job with no user"
Description: """
Audit Example for a RESTful Delete of a Job (document) resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the client
- client is an app on myMachine
- user is NOT specified. 
- patient is identified as ex-patient
- deleted Job is ex-documentreference
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #D
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete "delete"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  "Custodian"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110150 "Application"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(DocumentReference/ex-documentreference)



---

// File: input/fsh/ex-patientQuery.fsh

////   REMEMBER to update the -intro.md files in pagecontent   ////
/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicQueryGetNoPatient
InstanceOf: Query
Title: "Server - Audit Example of a basic Query (GET)"
Description: """
Audit Example for a RESTful Query using GET with NO patient subject, recorded by the Server.
- recorded by the server
- server is FHIR application server defined by ex-device
- client is a computer at myMachine.example.org
- user is John Smith
- query is for a MeasureReport
- X-Request-Id is specified
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].description = """
GET test.fhir.org/r4/MeasureReport?_lastUpdated=gt2020-11-06T21:52:30.300Z&_sort=_lastUpdated&_count=10
Accept: application/fhir+json; fhirVersion=4.0
X-Request-Id: 4a8dca3c-2205-4dc7-90e1-db877781d7cc
"""
* entity[query].query = "R0VUIHRlc3QuZmhpci5vcmcvcjQvTWVhc3VyZVJlcG9ydD9fbGFzdFVwZGF0ZWQ9Z3QyMDIwLTExLTA2VDIxOjUyOjMwLjMwMFomX3NvcnQ9X2xhc3RVcGRhdGVkJl9jb3VudD0xMApBY2NlcHQ6IGFwcGxpY2F0aW9uL2ZoaXIranNvbjsgZmhpclZlcnNpb249NC4wClgtUmVxdWVzdC1JZDogNGE4ZGNhM2MtMjIwNS00ZGM3LTkwZTEtZGI4Nzc3ODFkN2Nj"
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value = "4a8dca3c-2205-4dc7-90e1-db877781d7cc"



/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicQueryGetServer
InstanceOf: PatientQuery
Title: "Server - Audit Example of a basic patient identifiable Query (GET)"
Description: """
Audit Example for a RESTful Query using GET with a patient subject, recorded by the Server
- recorded by the server 
  - see same event as recorded by the [client](AuditEvent-ex-auditBasicQueryGetClient.html)
- server is FHIR application server defined by ex-device
- client is a computer at myMachine.example.org
- user is John Smith
- query is for an Observation for given patient
- patient is specified
- X-Request-Id is specified
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].description = """
GET test.fhir.org/r4/Observation?patient=ex-patient&_lastUpdated=gt2020-11-06T21:52:30.300Z&_sort=_lastUpdated&_count=10
Accept: application/fhir+json; fhirVersion=4.0
X-Request-Id: cc6d168e-5871-11ec-bf63-0242ac130002
"""
* entity[query].query = "R0VUIHRlc3QuZmhpci5vcmcvcjQvT2JzZXJ2YXRpb24/cGF0aWVudD1leC1wYXRpZW50Jl9sYXN0VXBkYXRlZD1ndDIwMjAtMTEtMDZUMjE6NTI6MzAuMzAwWiZfc29ydD1fbGFzdFVwZGF0ZWQmX2NvdW50PTEwCkFjY2VwdDogYXBwbGljYXRpb24vZmhpcitqc29uOyBmaGlyVmVyc2lvbj00LjAKWC1SZXF1ZXN0LUlkOiBjYzZkMTY4ZS01ODcxLTExZWMtYmY2My0wMjQyYWMxMzAwMDI="
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value = "cc6d168e-5871-11ec-bf63-0242ac130002"




/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicQueryGetClient
InstanceOf: PatientQuery
Title: "Client - Audit Example of a basic patient identifiable Query (GET)"
Description: """
Audit Example for a RESTful Query using GET with a patient subject, recorded by the Client
- recorded by the client
  -  see same event as recorded by the [server](AuditEvent-ex-auditBasicQueryGetServer.html)
- server is FHIR application server defined by ex-device
- client is a computer at myMachine.example.org
- user is John Smith
- query is for an Observation for given patient
- patient is specified
- X-Request-Id is specified
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].description = """
GET test.fhir.org/r4/Observation?patient=ex-patient&_lastUpdated=gt2020-11-06T21:52:30.300Z&_sort=_lastUpdated&_count=10
Accept: application/fhir+json; fhirVersion=4.0
X-Request-Id: cc6d168e-5871-11ec-bf63-0242ac130002
"""
* entity[query].query = "R0VUIHRlc3QuZmhpci5vcmcvcjQvT2JzZXJ2YXRpb24/cGF0aWVudD1leC1wYXRpZW50Jl9sYXN0VXBkYXRlZD1ndDIwMjAtMTEtMDZUMjE6NTI6MzAuMzAwWiZfc29ydD1fbGFzdFVwZGF0ZWQmX2NvdW50PTEwCkFjY2VwdDogYXBwbGljYXRpb24vZmhpcitqc29uOyBmaGlyVmVyc2lvbj00LjAKWC1SZXF1ZXN0LUlkOiBjYzZkMTY4ZS01ODcxLTExZWMtYmY2My0wMjQyYWMxMzAwMDI="
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value = "cc6d168e-5871-11ec-bf63-0242ac130002"







/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicQueryPost
InstanceOf: PatientQuery
Title: "Server - Audit Example of a basic patient identifiable Query (POST)"
Description: """
Audit Example for a RESTful Query using POST with a patient subject, recorded by the server
- recorded by the server
- server is FHIR application server defined by ex-device
- client is a computer at myMachine.example.org
- user is John Smith
- query is for an Observation for given patient
- patient is specified
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search-type "search-type"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].description = """
POST /r4/Observation/_search HTTP/1.1
Host: test.fhir.org
Content-Type: application/x-www-form-urlencoded
Accept: application/fhir+json; fhirVersion=4.0
Content-Length: 87

patient=ex-patient&_lastUpdated=gt2020-11-06T21:52:30.300Z&_sort=_lastUpdated&_count=10
"""
* entity[query].query = "UE9TVCAvcjQvT2JzZXJ2YXRpb24vX3NlYXJjaCBIVFRQLzEuMQpIb3N0OiB0ZXN0LmZoaXIub3JnCkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkCkFjY2VwdDogYXBwbGljYXRpb24vZmhpcitqc29uOyBmaGlyVmVyc2lvbj00LjAKQ29udGVudC1MZW5ndGg6IDg3CgpwYXRpZW50PWV4LXBhdGllbnQmX2xhc3RVcGRhdGVkPWd0MjAyMC0xMS0wNlQyMTo1MjozMC4zMDBaJl9zb3J0PV9sYXN0VXBkYXRlZCZfY291bnQ9MTAKCgoK"





---

// File: input/fsh/ex-patientRead.fsh


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicReadNoPatient
InstanceOf: Read
Title: "Server - Audit Example of a basic patient identifiable read"
Description: """
Audit Example for a RESTful read of a resource with no patient subject

- recorded by the server
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is John Smith
- read resource is ex-measurereport
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #R
* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110153 "Source Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110152 "Destination Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(MeasureReport/ex-measurereport)



/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicReadServer
InstanceOf: PatientRead
Title: "Server - Audit Example of a basic patient identifiable read"
Description: """
Audit Example for a RESTful read of a resource with a patient subject

- recorded by the server peer [client](AuditEvent-ex-auditBasicReadClient.html)
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is John Smith
- patient is ex-patient
- read resource is ex-list
- x-request-id is 76d148b6-586d-11ec-bf63-0242ac130002
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #R
* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110153 "Source Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110152 "Destination Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value = "76d148b6-586d-11ec-bf63-0242ac130002"


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicReadClient
InstanceOf: PatientRead
Title: "Client - Audit Example of a basic patient identifiable read"
Description: """
Audit Example for a RESTful read of a resource with a patient subject

- recorded by the client peer [server](AuditEvent-ex-auditBasicReadServer.html)
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is John Smith
- patient is ex-patient
- read resource is ex-list
- x-request-id is 76d148b6-586d-11ec-bf63-0242ac130002
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #R
* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[server].type = DCM#110153 "Source Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110152 "Destination Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value = "76d148b6-586d-11ec-bf63-0242ac130002"






/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicReadNoUser
InstanceOf: PatientRead
Title: "Server - Audit Example of a basic patient identifiable read with no user"
Description: """
Audit Example for a RESTful read of a resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the server
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is John Smith
- patient is ex-patient
- read resource is ex-list
- x-request-id is c07cf648-f068-4dd9-9411-8e69ca07d525
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #R
* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110153 "Source Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110152 "Destination Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value = "c07cf648-f068-4dd9-9411-8e69ca07d525"


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicReadOClient
InstanceOf: OAUTHaccessTokenUseOpaque
Title: "oAuth Client - Audit Example of a basic patient identifiable read"
Description: """
Audit Example for a oAuth authorized RESTful read of a resource with a patient subject

- This example is otherwise the same as [client](AuditEvent-ex-auditBasicReadClient.html) 
- client logs using the OAUTHaccessTokenUseOpaque profile as it doesn't have access to the details
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #R
* subtype = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[oUser].type = UserAgentTypes#UserOauthAgent
* agent[oUser].who.display = "JohnSmith" // just a display name pulled from the OAuth token
* agent[oUser].requestor = true
* agent[oUser].policy = "C187CC480FAC40A0936902D8BC324F5F"
// TODO sushi hack to use one index number, then +=
* agent[1].type = DCM#110153 "Source Role ID"
* agent[=].requestor = false
* agent[=].who = Reference(Device/ex-device)
* agent[=].network.address = "http://server.example.com/fhir"
* agent[=].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[+].type = DCM#110152 "Destination Role ID"
* agent[=].requestor = false
* agent[=].who.display = "myMachine.example.org"
* agent[=].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[=].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[+].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[=].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[=].what = Reference(Patient/ex-patient)
* entity[+].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[=].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[=].what = Reference(List/ex-list)
* entity[+].type = BasicAuditEntityType#XrequestId
* entity[=].what.identifier.value = "76d148b6-586d-11ec-bf63-0242ac130002"

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicReadOServer
InstanceOf: OAUTHaccessTokenUseComprehensive
Title: "oAuth Server - Audit Example of a basic patient identifiable read"
Description: """
Audit Example for a oAuth authorized RESTful read of a resource with a patient subject

- This example is otherwise the same as [server](AuditEvent-ex-auditBasicReadServer.html)
- server has access to the oAuth token details so uses IUAaccessOAUTHaccessTokenUseComprehensiveTokenUse profile
- TODO. Sushi has issues that prevent me from including all the agent entries, so this just has the agent entries for the oAuth profile and not the Read profile
  - should also be a Destination and Source agent
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #R
* subtype = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[oClient].type = http://dicom.nema.org/resources/ontology/DCM#110150 "Application"
* agent[oClient].who.identifier.value = "SampleApp"
* agent[oClient].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[oClient].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[oClient].requestor = false
* agent[oUser].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[oUser].who.display = "JohnSmith" // just a display name pulled from the OAuth token
* agent[oUser].who.identifier.system = "http://localhost:5100"
* agent[oUser].who.identifier.value = "35fb1058-7f36-415b-b862-677a37c95f35"
* agent[oUser].requestor = true
* agent[oUser].policy = "C187CC480FAC40A0936902D8BC324F5F"
// TODO sushi hack to use one index number, then +=
* agent[2].type = DCM#110152 "Destination Role ID"
* agent[=].requestor = false
* agent[=].who.display = "myMachine.example.org"
* agent[=].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[=].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[+].type = DCM#110153 "Source Role ID"
* agent[=].requestor = false
* agent[=].who = Reference(Device/ex-device)
* agent[=].network.address = "http://server.example.com/fhir"
* agent[=].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[+].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[=].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[=].what = Reference(Patient/ex-patient)
* entity[+].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[=].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[=].what = Reference(List/ex-list)
* entity[+].type = BasicAuditEntityType#XrequestId
* entity[=].what.identifier.value = "76d148b6-586d-11ec-bf63-0242ac130002"

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicReadOServerMin
InstanceOf: OAUTHaccessTokenUseMinimal
Title: "oAuth Server Minimal - Audit Example of a basic patient identifiable read"
Description: """
Audit Example for minimally recorded oAuth authorized RESTful read of a resource with a patient subject

- This example is otherwise the same as [server](AuditEvent-ex-auditBasicReadServer.html)
- server has access to the oAuth token details but policy requests minimal recorded so uses IUAaccessOAUTHaccessTokenUseMinimalTokenUse profile
- TODO. Sushi has issues that prevent me from including all the agent entries, so this just has the agent entries for the oAuth profile and not the Read profile
  - should also be a Destination and Source agent
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #R
* subtype = http://hl7.org/fhir/restful-interaction#read "read"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[oUser].type = UserAgentTypes#UserOauthAgent
* agent[oUser].requestor = true
* agent[oUser].policy = "C187CC480FAC40A0936902D8BC324F5F"
// TODO sushi hack to use one index number, then +=
* agent[1].type = DCM#110153 "Source Role ID"
* agent[=].requestor = false
* agent[=].who = Reference(Device/ex-device)
* agent[=].network.address = "http://server.example.com/fhir"
* agent[=].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[+].type = DCM#110152 "Destination Role ID"
* agent[=].requestor = false
* agent[=].who.display = "myMachine.example.org"
* agent[=].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[=].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[+].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[=].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[=].what = Reference(Patient/ex-patient)
* entity[+].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[=].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[=].what = Reference(List/ex-list)
* entity[+].type = BasicAuditEntityType#XrequestId
* entity[=].what.identifier.value = "76d148b6-586d-11ec-bf63-0242ac130002"





---

// File: input/fsh/ex-patientUpdate.fsh


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicUpdateNoPatient
InstanceOf: Update
Title: "Server - Audit Example of a basic Update of a measure report"
Description: """
Audit Example for a RESTful Update of a Measure Report resource. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the server
- server is FHIR application server defined by ex-device defined by ex-device
- client is an app on myMachine on myMachine
- user is John Smith
- created resource is ex-measurereport
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #U
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[data].what = Reference(DocumentReference/ex-documentreference)


/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicPatch
InstanceOf: PatientUpdate
Title: "Server - Audit Example of a basic patient identifiable Update using Patch"
Description: """
Audit Example for a RESTful Update using Patch of a resource with a patient subject

- recorded by the server
- server is FHIR application server defined by ex-device
- client is an app on myMachine on myMachine
- user is John Smith
- patient is ex-patient
- created resource is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #U
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#patch "patch"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT "author (originator)"
* agent[user].who.display = "John Smith" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicUpdate1
InstanceOf: PatientUpdate
Title: "Server - Audit Example of a basic patient identifiable Update by the informant"
Description: """
Audit Example for a RESTful Update by the informant of a resource with a patient subject

- recorded by the server
- server is FHIR application server defined by ex-device defined by ex-device
- client is an app on myMachine on myMachine
- user is an Informant Betty Jones
- patient is ex-patient
- created resource is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #U
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#INF "Informant"
* agent[user].who.display = "Betty Jones" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)

/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicUpdate2
InstanceOf: PatientUpdate
Title: "Server - Audit Example of a basic patient identifiable Update by the custodian"
Description: """
Audit Example for a RESTful Update of a resource with a patient subject, updated by the custodian.

- recorded by the server
- server is FHIR application server defined by ex-device defined by ex-device
- client is an app on myMachine on myMachine
- user is an Custodian Charley Miller
- patient is ex-patient
- created resource is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #U
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#CST "Custodian"
* agent[user].who.display = "Charley Miller" // just a display name pulled from the OAuth token
* agent[user].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)



/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicUpdateNoUser
InstanceOf: PatientUpdate
Title: "Server - Audit Example of a basic patient identifiable Update with no user"
Description: """
Audit Example for a RESTful Update of a resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the server
- server is FHIR application server defined by ex-device defined by ex-device
- client is myMachine
- patient is ex-patient
- created resource is ex-list
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #U
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(List/ex-list)



/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicUpdateNoUserReport
InstanceOf: PatientUpdate
Title: "Server - Audit Example of a basic patient identifiable Update of a Report with no user"
Description: """
Audit Example for a RESTful Update of a Report (document) resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the server
- server is FHIR application server defined by ex-device defined by ex-device
- client is an app on myMachine on myMachine
- patient is ex-patient
- created report is ex-documentreference
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #U
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[data].what = Reference(DocumentReference/ex-documentreference)



/////////////////////////////////////////////////////////////////////////////////////////
Instance: ex-auditBasicUpdateNoUserJob
InstanceOf: PatientUpdate
Title: "Server - Audit Example of a basic patient identifiable Update of a Job with no user"
Description: """
Audit Example for a RESTful Update of a Job (document) resource with a patient subject with no user. This might be a B2B exchange where the OAuth token just identifies the requesting organization.

- recorded by the server
- server is FHIR application server defined by ex-device defined by ex-device
- client is an app on myMachine on myMachine
- patient is ex-patient
- created Job is ex-documentreference
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #U
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who = Reference(Device/ex-device)
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(DocumentReference/ex-documentreference)



---

// File: input/fsh/IUAaccessToken.fsh


Profile: OAUTHaccessTokenUseOpaque
Parent: AuditEvent
Id: IHE.BasicAudit.OAUTHaccessTokenUse.Opaque
Title: "Basic AuditEvent pattern for oAuth Opaque"
Description: """
Used when:
- only have an opaque oAuth token (e.g. clients).
- have access to the oAuth token, but want to log minimal details.

- oUser slice holds fragment of the opaque oAuth token
  - record only the last 32 characters of the oAuth token to limit risk or replay
  - presume 32 characters is enough to coorelate AuditEvent log entries
"""
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent contains 
    oUser 1..
* agent[oUser].type = UserAgentTypes#UserOauthAgent
* agent[oUser] ^short = "other elements may be filled in as needed."
* agent[oUser].requestor = true
* agent[oUser].policy 1..1 MS
* agent[oUser].policy ^short = "last 32 characters of the oAuth token."
* agent[oUser].policy ^comment = "do NOT include the whole opaque token. The last 32 characters should be enough and would be the most entropy."
* agent[oUser].purposeOfUse MS 
* agent[oUser].purposeOfUse ^short = "SAML subject:purposeofuse"

Profile: OAUTHaccessTokenUseMinimal
Parent: AuditEvent
Id: IHE.BasicAudit.OAUTHaccessTokenUse.Minimal
Title: "Basic AuditEvent pattern for oAuth Opaque"
Description: """
Used when access to the oAuth token, but want to log minimal details.

- oUser slice holds only the JWT ID
"""
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent contains 
    oUser 1..
* agent[oUser].type = UserAgentTypes#UserOauthAgent
* agent[oUser] ^short = "other elements may be filled in as needed."
* agent[oUser].requestor = true
* agent[oUser].policy 1..1 
* agent[oUser].policy ^short = "jti (JWT ID)"
* agent[oUser].policy ^comment =  "jti SHALL be prefixed with \"urn:ietf:params:oauth:jti:\". This URN is based on RFC3553."
* agent[oUser].media 0..0 // media is physical storage media identification
* agent[oUser].network 0..0 // users are not network devices

Profile: OAUTHaccessTokenUseComprehensive
Parent: AuditEvent
Id: IHE.BasicAudit.OAUTHaccessTokenUse.Comprehensive
Title:          "Basic AuditEvent pattern for when an activity was authorized by an IUA access token"
Description:    """
A basic AuditEvent profile for when an activity was authorized by an IUA access token. This profile is expected to be used with some other detail that explains the activity. This profile only covers the IUA access token.

- Given an activity has occured
- And OAuth is used to authorize (both app and user)
- And the given activity is using http with authorization: bearer mechanism 
  - IUA - [3.72 Incorporate Access Token \[ITI-72\]](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72)
  - Bulk Data Access - [11. Presenting an Access Token to FHIR API](https://hl7.org/fhir/uv/bulkdata/authorization/index.html#presenting-an-access-token-to-fhir-api)
  - SMART-app-launch - [7.1.5 Step 4: App accesses clinical data via FHIR API](http://hl7.org/fhir/smart-app-launch/index.html#step-4-app-accesses-clinical-data-via-fhir-api)
  - [HL7 Security for Scalable Registration, Authentication, and Authorization (aka UDAP) ](http://hl7.org/fhir/us/udap-security/history.html) when it gets published 
- When an AuditEvent is recorded for the activity
- Then that AuditEvent would follow this profile regarding recording the IUA access token details
- note: this profile records minimal information from the IUA access token, which presumes that use of the AuditEvent at a later time will be able to resolve the given information.
- client slice holds the application details
  - This is likely replicated in other slices, but is consistently identified as the Application slice for ease of tracking all events caused by this client
  - place the client_id into .who.identifier.value (system is not needed, but avaialble if you have a system)
  - any network identification detail should be placed in .network (may be a IP address, or hostname)
- oUser slice holds the user details
  - user id is recorded in the .who.identifier
  - user id is also recorded in .name to be more easy searched
  - if roles or purposeOfUse are known record them here
  - the JWT ID is recorded in .policy. Expecting that during audit anaysis this ID can be looked up and dereferenced
"""
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
//* agent 1..2
* agent contains 
    oClient 1..1 and 
    oUser 0..1
* agent[oClient].type = http://dicom.nema.org/resources/ontology/DCM#110150 // "Application"
* agent[oClient].who 1..1 
* agent[oClient].who ^short = "May be a Resource, but likely just an identifier from the OAuth token"
* agent[oClient].who.identifier 1..1
* agent[oClient].who.identifier.value 1..1
* agent[oClient].who.identifier.value ^short = "Token client ID (client_id)"
* agent[oClient].who ^short = "client identifier"
* agent[oClient].who ^comment = "May be an Device Resource, but more likely an identifier given the App identified in the OAuth token"
* agent[oClient].network 0..1 MS 
* agent[oClient].network ^short = "The client as known by TCP connection information"
* agent[oClient].media 0..0 
* agent[oUser].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP // "information recipient"
* agent[oUser].who 1..1 
* agent[oUser].who ^short = "May be a Resource, but likely just an identifier from the OAuth token"
* agent[oUser].who.display MS
* agent[oUser].who.display ^short = "User Name (USER_NAME)"
* agent[oUser].who.identifier 1..1
* agent[oUser].who.identifier.system MS
* agent[oUser].who.identifier.system ^short = "Token Issuer (TOKEN_ISSUER)"
* agent[oUser].who.identifier.value MS
* agent[oUser].who.identifier.value ^short = "User ID (USER_ID)"
* agent[oUser].requestor = true
* agent[oUser].role MS 
* agent[oUser].role ^comment = "if the OAuth token includes any roles, they are recorded here"
* agent[oUser].name MS 
* agent[oUser].name ^short = "User Name (USER_NAME)"
* agent[oUser].name ^comment = "This is more searchable than .who.display"
* agent[oUser].policy 1..1 
* agent[oUser].policy ^short = "jti (JWT ID)"
* agent[oUser].media 0..0 // media is physical storage media identification
* agent[oUser].network 0..0 // users are not network devices
* agent[oUser].purposeOfUse MS 
* agent[oUser].purposeOfUse ^comment = "if the OAuth token includes a PurposeOfUse it is recorded here"


---

// File: input/fsh/IUAgetAccessToken.fsh


Profile:        AuditIUAgetAccessToken
Parent:         AuditEvent
Id:             IHE.IUA.71
Title:          "IHE IUA ITI-71 AuditEvent for a successful Get Access Token"
Description:    """
Defines constraints on the AuditEvent Resource to record when a ITI-71 - Get Access Token succeeds

This AuditEvent is recorded by Authorization Client and/or Authorization Server that are grouped with ATNA Secure Node or Secure Application.
- User Authenticated event
- ITI-71 subtype
- 2 or 3 agents
  - client - 
  - auth-server
  - user user
- 1 entity  
  - the access token request
"""
* type = http://dicom.nema.org/resources/ontology/DCM#110114 // "User Authentication"
* type 1..
* subtype 1..1
* subtype = urn:ihe:event-type-code#ITI-71 // "Get Access Token"
* action = #E
* recorded 1..1
// failures are recorded differently
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 // "Success"
* outcome 1..
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #closed
* agent 2..3
* agent contains 
    client 1..1 and 
    auth-server 1..1 and 
    user 0..1
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110150 // "Application"
* agent[client].who 1..1 // client identifier, May be an Device Resource, but more likely an identifier given the App identified in the OAuth token 
* agent[client].network 1..1 // as known by TCP connection information
* agent[client].media 0..0 
* agent[auth-server].type = UserAgentTypes#AuthzOauthService
* agent[auth-server].who 1..1 // server identifier. May be a Device Resource, but likely just an identifier of the domain name
* agent[auth-server].network 1..1 // as known by TCP connection information
* agent[auth-server].media 0..0 
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP // "information recipient"
* agent[user].who 1..1 // May be a Resource, but likely just an identifier from the OAuth token
* agent[user].requestor = true
* agent[user].role MS // if the OAuth token includes any roles, they are recorded here
* agent[user].altId 0..0 // discouraged
* agent[user].name MS // might also be in .who.text but here is searchable
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS // if the OAuth token includes a PurposeOfUse it is recorded here
* source MS // what agent recorded the event. Likely the client or server but might be an intermediary
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "role"
* entity ^slicing.rules = #closed
* entity 1..1
* entity contains 
    token-request 1..1 and
    token-response 0..1	
* entity[token-request].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 // "System Object"
* entity[token-request].role = http://terminology.hl7.org/CodeSystem/object-role#24 // "Query"
* entity[token-request].role 1..
* entity[token-request].what 0..0
* entity[token-request].query 1..1
* entity[token-request].query ^short = "contains the http request in raw form, without the code_verifier value"


* entity[token-response].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 // "System Object"
* entity[token-response].role = http://terminology.hl7.org/CodeSystem/object-role#13 // "Security Resource"
* entity[token-response].role 1..
* entity[token-response].what 1..1
* entity[token-response].what ^short = "holds the token id issued" 
* entity[token-response].detail 1..*
* entity[token-response].detail ^short = "holds the key values from the response"

// might use the 4 examples from IUA
// Figure 3.71.4.1.2.2-2: Example Authorization Request


---

// File: input/fsh/PatientCreate.fsh


Profile:        Create
Parent:         AuditEvent
Id:             IHE.BasicAudit.Create
Title:          "Basic AuditEvent for a successful Create not related to a Patient"
Description:    """
A basic AuditEvent profile for when a RESTful Create action happens successfully.

- Given a Resource Create is requested 
- And that resource does not have a Patient subject or is otherwise associated with a Patient
  - when the resource is Patient specific then [PatientCreate](StructureDefinition-IHE.BasicAudit.PatientCreate.html) is used
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
- Then the AuditEvent recorded will conform
"""
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest // "Restful Operation"
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains anyCreate 1..1 
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create // "create"
* action = #C
* recorded 1..1
// failures are recorded differently
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 // "Success"
* outcome 1..
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent 2..
* agent contains 
    client 1..1 and 
    server 1..1 and 
    user 0..1
* agent[client].type = DCM#110153 // "Source Role ID"
* agent[client].who 1..1 // client identifier, May be an Device Resource, but more likely an identifier given the App identified in the OAuth token 
* agent[client].network 1..1 // as known by TCP connection information
* agent[client].media 0..0 
* agent[server].type = DCM#110152 // "Destination Role ID"
* agent[server].who 1..1 // server identifier. May be a Device Resource, but likely just an identifier of the domain name
* agent[server].network 1..1 // as known by TCP connection information
* agent[server].media 0..0 
* agent[user].type from DataSources (required)
* agent[user].who 1..1 // May be a Resource, but likely just an identifier from the OAuth token
* agent[user].requestor = true
* agent[user].role MS // if the OAuth token includes any roles, they are recorded here
* agent[user].name MS // might also be in .who.text but here is searchable
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS // if the OAuth token includes a PurposeOfUse it is recorded here
* source MS // what agent recorded the event. Likely the client or server but might be an intermediary
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity 1..
* entity contains 
	transaction 0..1 and
    data 1..1
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value 1..1
* entity[transaction].what.identifier.value ^short = "the value of X-Request-Id"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 // "System Object"
* entity[data].role from RestObjectRoles (required)
* entity[data].role 1..
* entity[data].what 1..1
* entity[data].securityLabel ^short = "may contain the security labels on the resource returned"


Profile:        PatientCreate
Parent:         Create
Id:             IHE.BasicAudit.PatientCreate
Title:          "Basic AuditEvent for a successful Create with known Patient subject"
Description:    """
A basic AuditEvent profile for when a RESTful Create action happens successfully, and where there is an identifiable Patient subject associated with the create of the Resource.

- Given a Resource Create is requested 
- And that resource has a Patient subject or is otherwise associated with a Patient
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
- Then the AuditEvent recorded will conform
"""
//* entity ^slicing.discriminator.type = #value
//* entity ^slicing.discriminator.path = "type"
//* entity ^slicing.rules = #open
* entity 2..
* entity contains 
    patient 1..1 
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].role 1..
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)




ValueSet: DataSources
Title: "participant source types for RESTful create"
Description: "create agent participant types for user operators that are in REST"
* ^experimental = false
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT "Author"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#INF "Informant"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#CST "Custodian"



---

// File: input/fsh/PatientDelete.fsh

////////////////////////////////////////////////////////////// Non-Patient Delete Profile ////////////////////
Profile:        Delete
Parent:         AuditEvent
Id:             IHE.BasicAudit.Delete
Title:          "Basic AuditEvent for a successful Delete"
Description:    """
A basic AuditEvent profile for when a RESTful Delete action happens successfully.

- Given a Resource Delete is requested 
- And that resource has does not have a Patient subject or is otherwise associated with a Patient
  - when the resource is Patient specific then [PatientDelete](StructureDefinition-IHE.BasicAudit.PatientDelete.html) is used
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
- Then the AuditEvent recorded will conform
"""
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest // "Restful Operation"
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains anyDelete 1..1 
* subtype[anyDelete] = http://hl7.org/fhir/restful-interaction#delete // "delete"
* action = #D
* recorded 1..1
// failures are recorded differently
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 // "Success"
* outcome 1..
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent 2..
* agent contains 
    client 1..1 and 
    server 1..1 and 
    user 0..1
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110150 // "Application"
* agent[client].who 1..1 // client identifier, May be an Device Resource, but more likely an identifier given the App identified in the OAuth token 
* agent[client].network 1..1 // as known by TCP connection information
* agent[client].media 0..0 
* agent[server].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#custodian  // "Custodian"
* agent[server].who 1..1 // server identifier. May be a Device Resource, but likely just an identifier of the domain name
* agent[server].network 1..1 // as known by TCP connection information
* agent[server].media 0..0 
* agent[user].type from DataSources (required)
* agent[user].who 1..1 // May be a Resource, but likely just an identifier from the OAuth token
* agent[user].requestor = true
* agent[user].role MS // if the OAuth token includes any roles, they are recorded here
* agent[user].name MS // might also be in .who.text but here is searchable
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS // if the OAuth token includes a PurposeOfUse it is recorded here
* source MS // what agent recorded the event. Likely the client or server but might be an intermediary
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity 1..
* entity contains 
	transaction 0..1 and
    data 1..1
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value 1..1
* entity[transaction].what.identifier.value ^short = "the value of X-Request-Id"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 // "System Object"
* entity[data].role from RestObjectRoles (required)
* entity[data].role 1..
* entity[data].what 1..1
* entity[data].securityLabel 0..* // may contain the securityLabels on the resource
* entity[data].securityLabel ^short = "may be replicated from the resource .meta.security"

////////////////////////////////////////////////////////////// Patient Delete Profile ////////////////////////
Profile:        PatientDelete
Parent:         Delete
Id:             IHE.BasicAudit.PatientDelete
Title:          "Basic AuditEvent for a successful Delete with Patient"
Description:    """
A basic AuditEvent profile for when a RESTful Delete action happens successfully, and where there is an identifiable Patient subject associated with the Resource being deleted.

- Given a Resource Delete is requested 
- And that resource has a Patient subject or is otherwise associated with a Patient
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
- Then the AuditEvent recorded will conform
"""
//* entity ^slicing.discriminator.type = #value
//* entity ^slicing.discriminator.path = "type"
//* entity ^slicing.rules = #open
* entity 2..
* entity contains 
    patient 1..1 
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].role 1..
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)


---

// File: input/fsh/PatientQuery.fsh


////////////////////////////////////////////////////////////// Query Profile ////////////////////////
ValueSet: AllSearchVS
Title: "all Searches"
Description: "ValueSet of the restful-interaction searches"
* ^experimental = false
* http://hl7.org/fhir/restful-interaction#search // "search"
* http://hl7.org/fhir/restful-interaction#search-type // "search-type"
* http://hl7.org/fhir/restful-interaction#search-system // "search-system"


Profile:        Query
Parent:         AuditEvent
Id:             IHE.BasicAudit.Query
Title:          "Basic AuditEvent for a successful Query"
Description:    """
A basic AuditEvent profile for when a RESTful Query / Search action happens successfully.

- Given a RESTful Query is requested
- And the request does not have a Patient subject indicated
  - The requestor logging the event would potentially not know they have requested Patient specific data
  - The data objects may not be patient specific kind of objects
  - when the request is Patient specific then [PatientQuery](StructureDefinition-IHE.BasicAudit.PatientQuery.html) is used
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
  - Note success may result in zero or more results. The number of results and the content of the results are not recorded.
- And the results are not Patient specific
  - when the results are Patient specific then [PatientQuery](StructureDefinition-IHE.BasicAudit.PatientQuery.html) are used
- Then the AuditEvent recorded will conform
  - The raw search request is base64 encoded and placed in the .entity[query].query element. The base64 encoding of the raw search request enables preserving exactly what was requested, including possibly malicious patterns. This enables detection of malicious or malformed requests.
  - The cleaned search may be recorded (not base64) in the .entity[query].description. The cleaned search request would have removed parameters that were not understood/supported. The cleaned search request in the .description element enables more efficient processing.

Note: the pattern defined in DICOM and IHE have the client is identified as the Source Role ID, and the server is identified as the Destination Role ID. This represents the query parameters are flowing from the client to the server. This may not be so obvious, as the data actually flows the opposite direction. This pattern is established and thus followed here.
"""
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest // "Restful Operation"
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains anySearch 1..1
* subtype[anySearch] from AllSearchVS (required)
* action = #E
* recorded 1..1
// failures are recorded differently
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 // "Success"
* outcome 1..
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent 2..
* agent contains 
    client 1..1 and 
    server 1..1 and 
    user 0..1
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110153 // "Source Role ID"
* agent[client].who 1..1 // client identifier, May be an Device Resource, but more likely an identifier given the App identified in the OAuth token 
* agent[client].network 1..1 // as known by TCP connection information
* agent[client].media 0..0 
* agent[server].type = http://dicom.nema.org/resources/ontology/DCM#110152 // "Destination Role ID"
* agent[server].who 1..1 // server identifier. May be a Device Resource, but likely just an identifier of the domain name
* agent[server].network 1..1 // as known by TCP connection information
* agent[server].media 0..0 
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP // "information recipient"
* agent[user].who 1..1 // May be a Resource, but likely just an identifier from the OAuth token
* agent[user].requestor = true
* agent[user].role MS // if the OAuth token includes any roles, they are recorded here
* agent[user].name MS // might also be in .who.text but here is searchable
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS // if the OAuth token includes a PurposeOfUse it is recorded here
* source MS // what agent recorded the event. Likely the client or server but might be an intermediary
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity 1..
* entity contains 
	transaction 0..1 and
    query 1..1
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value 1..1
* entity[transaction].what.identifier.value ^short = "the value of X-Request-Id"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 // "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 // "Query"
* entity[query].role 1..
* entity[query].what 0..0
* entity[query].lifecycle 0..0 
* entity[query].securityLabel ^short = "may contain the security labels on the Bundle search set returned"
* entity[query].description 0..1 // allow the query string to exist in description in non base64Binary format
* entity[query].query 1..1
* entity[query].detail 0..0

////////////////////////////////////////////////////////////// Patient Query Profile ////////////////////////
Profile:        PatientQuery
Parent:         Query
Id:             IHE.BasicAudit.PatientQuery
Title:          "Basic AuditEvent for a successful Query with Patient"
Description:    """
A basic AuditEvent profile for when a RESTful Query action happens successfully, and where there is an identifiable Patient subject associated with the read Resource(s).

- Given a RESTful Query is requested
- And the request is for a Patient subject indicated
  - The requestor includes a Patient id or identifier as a query parameter
  - The requestor security context is limited to a given Patient identity
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
  - Note success may result in zero or more results. The number of results and the content of the results are not recorded.
- Then the AuditEvent recorded will conform
  - The raw search request is base64 encoded and placed in the .entity[query].query element. The base64 encoding of the raw search request enables preserving exactly what was requested, including possibly malicious patterns. This enables detection of malicious or malformed requests.
  - The cleaned search may be recorded (not base64) in the .entity[query].description. The cleaned search request would have removed parameters that were not understood/supported. The cleaned search request in the .description element enables more efficient processing.
- And When multiple patient results are returned, one AuditEvent is created for every Patient identified in the resulting search set. Note this is true when the search set bundle includes any number of resources that collectively reference multiple Patients. This includes one Resource with multiple subject values, or many Resources with single subject values that are different.

Note: the pattern defined in DICOM and IHE have that the client is identified as the Source Role ID, and the server is identified as the Destination Role ID. This may not be so obvious, as the data actually flows the opposite direction. This pattern is established and thus followed here.
"""
//* entity ^slicing.discriminator.type = #value
//* entity ^slicing.discriminator.path = "type"
//* entity ^slicing.rules = #open
* entity 1..
* entity contains 
    patient 1..1 
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].role 1..
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)





---

// File: input/fsh/PatientRead.fsh

ValueSet: AllReadVS
Title: "all Reads"
Description: "ValueSet of the restful-interaction reads"
* ^experimental = false
* http://hl7.org/fhir/restful-interaction#read // "read"
* http://hl7.org/fhir/restful-interaction#vread // "vread"

Profile:        Read
Parent:         AuditEvent
Id:             IHE.BasicAudit.Read
Title:          "Basic AuditEvent for a successful Read"
Description:    """
A basic AuditEvent profile for when a RESTful Read action happens successfully.

- Given a Resource Read is requested 
- And that resource does not have a Patient subject or is otherwise associated with a Patient
  - when the resource is Patient specific then [PatientRead](StructureDefinition-IHE.BasicAudit.PatientRead.html) is used
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
- Then the AuditEvent recorded will conform
"""
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest // "Restful Operation"
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains anyRead 1..1
* subtype[anyRead] from AllReadVS (required)
* action = #R
* recorded 1..1
// failures are recorded differently
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 // "Success"
* outcome 1..
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent 2..
* agent contains 
    client 1..1 and 
    server 1..1 and 
    user 0..1
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110152 // "Destination Role ID"
* agent[client].who 1..1 // client identifier, May be an Device Resource, but more likely an identifier given the App identified in the OAuth token 
* agent[client].network 1..1 // as known by TCP connection information
* agent[client].media 0..0 
* agent[server].type = http://dicom.nema.org/resources/ontology/DCM#110153 // "Source Role ID"
* agent[server].who 1..1 // server identifier. May be a Device Resource, but likely just an identifier of the domain name
* agent[server].network 1..1 // as known by TCP connection information
* agent[server].media 0..0 
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP // "information recipient"
* agent[user].who 1..1 // May be a Resource, but likely just an identifier from the OAuth token
* agent[user].requestor = true
* agent[user].role MS // if the OAuth token includes any roles, they are recorded here
* agent[user].name MS // might also be in .who.text but here is searchable
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS // if the OAuth token includes a PurposeOfUse it is recorded here
* source MS // what agent recorded the event. Likely the client or server but might be an intermediary
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity 1..
* entity contains 
	transaction 0..1 and
    data 1..1
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value 1..1
* entity[transaction].what.identifier.value ^short = "the value of X-Request-Id"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 // "System Object"
* entity[data].role from RestObjectRoles (required)
* entity[data].what 1..1
* entity[data].securityLabel ^short = "may contain the security labels on the resource returned"






Profile:        PatientRead
Parent:         Read
Id:             IHE.BasicAudit.PatientRead
Title:          "Basic AuditEvent for a successful Read with a Patient"
Description:    """
A basic AuditEvent profile for when a RESTful Read action happens successfully, and where there is an identifiable Patient subject associated with the read Resource.

- Given a Resource Read is requested 
- And that resource has a Patient subject or is otherwise associated with a Patient
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
- Then the AuditEvent recorded will conform
"""
//* entity ^slicing.discriminator.type = #value
//* entity ^slicing.discriminator.path = "type"
//* entity ^slicing.rules = #open
* entity 2..
* entity contains 
    patient 1..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].role 1..
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)




ValueSet: RestObjectRoles
Title: "RESTful objects role in the event"
Description: "The role that the given Object played in the Audit Event recorded"
// I expect "Domain Resource" most of the time, but the other two are acceptable
* ^experimental = false
* http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* http://terminology.hl7.org/CodeSystem/object-role#20 "Job"



---

// File: input/fsh/PatientUpdate.fsh


ValueSet: AllUpdateVS
Title: "all Updates"
Description: "ValueSet of the restful-interaction updates"
* ^experimental = false
* http://hl7.org/fhir/restful-interaction#update // "update"
* http://hl7.org/fhir/restful-interaction#patch // "patch"


Profile:        Update
Parent:         AuditEvent
Id:             IHE.BasicAudit.Update
Title:          "Basic AuditEvent for a successful Update"
Description:    """
A basic AuditEvent profile for when a RESTful Update action happens successfully.

- Given a Resource Update is requested 
- And that resource does not have a Patient subject or is otherwise associated with a Patient
  - when the resource is Patient specific then [PatientUpdate](StructureDefinition-IHE.BasicAudit.PatientUpdate.html) is used
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
- Then the AuditEvent recorded will conform
- And where the server supports FHIR Versioning the AuditEvent should use the version specific id
"""
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest // "Restful Operation"
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains anyUpdate 1..1
* subtype[anyUpdate] from AllUpdateVS (required)
* action = #U
* recorded 1..1
// failures are recorded differently
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 // "Success"
* outcome 1..
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent 2..
* agent contains 
    client 1..1 and 
    server 1..1 and 
    user 0..1
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110153 // "Source Role ID"
* agent[client].who 1..1 // client identifier, May be an Device Resource, but more likely an identifier given the App identified in the OAuth token 
* agent[client].network 1..1 // as known by TCP connection information
* agent[client].media 0..0 
* agent[server].type = http://dicom.nema.org/resources/ontology/DCM#110152 // "Destination Role ID"
* agent[server].who 1..1 // server identifier. May be a Device Resource, but likely just an identifier of the domain name
* agent[server].network 1..1 // as known by TCP connection information
* agent[server].media 0..0 
* agent[user].type from DataSources (required)
* agent[user].who 1..1 // May be a Resource, but likely just an identifier from the OAuth token
* agent[user].requestor = true
* agent[user].role MS // if the OAuth token includes any roles, they are recorded here
* agent[user].name MS // might also be in .who.text but here is searchable
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS // if the OAuth token includes a PurposeOfUse it is recorded here
* source MS // what agent recorded the event. Likely the client or server but might be an intermediary
* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity 1..
* entity contains 
	transaction 0..1 and
    data 1..1
* entity[transaction].type = BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value 1..1
* entity[transaction].what.identifier.value ^short = "the value of X-Request-Id"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 // "System Object"
* entity[data].role from RestObjectRoles (required)
* entity[data].role 1..
* entity[data].what 1..1
* entity[data].securityLabel ^short = "may contain the security labels on the resource returned"



Profile:        PatientUpdate
Parent:         Update
Id:             IHE.BasicAudit.PatientUpdate
Title:          "Basic AuditEvent for a successful Update with a Patient subject"
Description:    """
A basic AuditEvent profile for when a RESTful Update action happens successfully, and where there is an identifiable Patient subject associated with the Update of the Resource.

- Given a Resource Update is requested 
- And that resource has a Patient subject or is otherwise associated with a Patient
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
- Then the AuditEvent recorded will conform
- And where the server supports FHIR Versioning the AuditEvent should use the version specific id
"""
//* entity ^slicing.discriminator.type = #value
//* entity ^slicing.discriminator.path = "type"
//* entity ^slicing.rules = #open
* entity 2..
* entity contains 
    patient 1..1 
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 // "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 // "Patient"
* entity[patient].role 1..
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)








---

// File: input/fsh/rules.fsh

RuleSet: requireAtLeastOneMatch(path, slice, pattern)
* {path} ^slicing.discriminator.type = #value
* {path} ^slicing.discriminator.path = "$this"
* {path} ^slicing.rules = #open
* {path} contains {slice} 1..1
* {path}[{slice}] = {pattern}


---

// File: input/fsh/SAMLaccessToken.fsh



Extension: AssuranceLevel
Id: ihe-assuranceLevel
Title: "AuditEvent.agent Assurance Level"
Description: """
The assuranceLevel element carries various types of Assurance level. May be an Identity Assurance (IAL), an Authentication Assurance Level (AAL), a Federation Assurance Level (FAL), or other. 

In SAML this is [defined to be carried](https://docs.oasis-open.org/security/saml/v2.0/saml-authn-context-2.0-os.pdf) in the `saml:AuthnContextClassRef`, but may be carried elsewhere based on the use-case and profiling of SAML.

The Vocabulary is not defined here. Some sources of vocabulary:
- HL7 v3 [Security Trust Assurance ValueSet](https://terminology.hl7.org/3.0.0/ValueSet-v3-SecurityTrustAssuranceObservationValue.html). These include ISO-7498-2, NIST 800-63-1, and NIST-800-63-2.
- [idmanagement.gov](https://developers.login.gov/saml/#specifying-attributes-and-assurance-levels) published on login.gov
  - this is defined to be carried in the saml:AuthnContextClassRef
- OASIS [Authentication Context for SAML](https://docs.oasis-open.org/security/saml/v2.0/saml-authn-context-2.0-os.pdf)
- An example of a customized and purpose defined small set of codes can be found in the HL7 [SMART Health Cards](http://hl7.org/fhir/uv/shc-vaccination/2021Sep/) defines a [valueset](http://hl7.org/fhir/uv/shc-vaccination/ValueSet/identity-assurance-level)
"""
* ^context[+].type = #element
* ^context[=].expression = "AuditEvent.agent"
* value[x] only CodeableConcept
* valueCodeableConcept from 	http://terminology.hl7.org/ValueSet/v3-SecurityTrustAssuranceObservationValue (preferred)
* valueCodeableConcept 1..1



Extension: OtherId
Id: ihe-otherId
Title: "AuditEvent.agent other identifiers"
Description: "Carries other identifiers are known for an agent."
* ^context[+].type = #element
* ^context[=].expression = "AuditEvent.agent"
* value[x] only Identifier
* valueIdentifier 1..1

CodeSystem:  OtherIdentifierTypes 
Title: "OtherId Identifier Types"
Description:  "OtherId Types beyond those in the FHIR core"
* ^caseSensitive = true
* ^experimental = false
* #SAML-subject-id "SAML subject-id"

ValueSet: OtherIdentifierTypesVS
Title: "Other Id Types ValueSet"
Description: "ValueSet of the Other Id Types allowed"
* ^experimental = false
* codes from system OtherIdentifierTypes
* http://terminology.hl7.org/CodeSystem/v2-0203#NPI
* http://terminology.hl7.org/CodeSystem/v2-0203#PRN


CodeSystem: UserAgentTypes
Title: "The code used to identifiy a User Agent"
Description: """
Code used to identify the User Agent.
Defined codes for SAML vs OAuth to enable differentiation of .policy as the token ID
"""
* ^caseSensitive = false
* ^experimental = false
* #UserSamlAgent "User SAML Agent participant"
* #UserOauthAgent "User OAuth Agent participant"
//* #UserOauthClientId "Application client_id"
* #AuthzOauthService "OAuth Authorization Server"

// Note, the following CodeSystem could not be defined here, but likely should be defined somewhere.
// CodeSystem: UserAgentHomeCommunity
// Title: "XCA code for homeCommunity"
// Description: "one code"
// * ^caseSensitive = false
// * ^experimental = false
// *  ^url = urn:ihe:iti:xca:2010
// * #homeCommunityId "IHE homeCommunityId"


ValueSet: UserAgentTypesVS
Title: "Agent types holding User-Agent"
Description: """
AuditEvent.agent.type values holding OAuth/SAML identified user. Note that user is not just users, but representes the higest agent responsible for triggering the activity being recorded in the AuditEvent.

Often this agent also has a type coding that is more specific to the transaction and the direction of the transaction.
- http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP // use for query/retrieve
- http://terminology.hl7.org/CodeSystem/v3-RoleClass#AGNT // use for push/create/update
- http://terminology.hl7.org/CodeSystem/v3-RoleClass#PAT  // use when the user is the patient
- http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT "Author" // used with create/update
- http://terminology.hl7.org/CodeSystem/v3-ParticipationType#INF "Informant" // used with export
- http://terminology.hl7.org/CodeSystem/v3-ParticipationType#CST "Custodian" // used with export
"""
* ^experimental = false
* codes from system UserAgentTypes
// TODO: I created a codesystem and code out of the URN urn:ihe:iti:xca:2010:homeCommunityId
* urn:ihe:iti:xca:2010#homeCommunityId "IHE homeCommunityId"
//* urn:ihe#urn:ihe:iti:xca:2010:homeCommunityId 
//* urn:ietf:rfc:3986#urn:ihe:iti:xca:2010:homeCommunityId 


Profile:        SAMLaccessTokenUseMinimal
Parent:         AuditEvent
Id:             IHE.BasicAudit.SAMLaccessTokenUse.Minimal
Title:          "Basic AuditEvent pattern for when an activity was authorized by an SAML access token Minimal"
Description:    """
A basic AuditEvent profile for when an activity was authorized by an SAML access token. This profile is expected to be used with some other detail that explains the activity. This profile only covers the SAML access token.

- Given an activity has occurred
- And SAML is used to authorize a transaction
- And the given activity is using the SAML
  - XUA 
  - SAML requires ID and Issuer, so this profile of AuditEvent will work with any SAML token.
  - usually SOAP, but not limited to SOAP
- When an AuditEvent is recorded for the activity
- Presumes that the consent and server have been identified in agent elements, best case with certificate identities
- Then that AuditEvent would follow this profile regarding recording the SAML access token details

The following table uses a short-hand for the SAML fields and FHIR AuditEvent elements to keep the table compact. It is presumed the reader can understand the SAML field and the FHIR AuditEvent element given. Note the `~` character represents attributes under the SAML `AttributeStatement`. 

| SAML field            | Minimal AuditEvent
|-----------------------|----------------------|
| ID                    | agent[user].policy
| Issuer                | agent[user].who.identifier.system
| Subject.NameID        | agent[user].who.identifier.value
| ~subject:purposeofuse | agent[user].purposeOfUse

note: this profile records minimal information from the SAML access token, which presumes that use of the AuditEvent at a later time will be able to resolve the given information.
"""
* agent.extension contains AssuranceLevel named assuranceLevel 0..* MS
* agent.extension contains OtherId named otherId 0..* MS
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent contains 
    user 1..
* agent[user].type = UserAgentTypes#UserSamlAgent
* agent[user].who 1..1 
* agent[user].who.identifier.system 0..1 MS
* agent[user].who.identifier.system ^short = "SAML Issuer"
* agent[user].who.identifier.value 1..1 MS
* agent[user].who.identifier.value ^short = "SAML Subject.NameID"
// TODO should who.reference and/or type be 0.. and MS?
* agent[user].requestor = true
* agent[user].role 0.. // discouraged in minimal
* agent[user].altId 0.. // discouraged, use otherId extension
* agent[user].name 0..1 // not sure where you would get it from
* agent[user].policy 1..1 MS
* agent[user].policy ^short = "SAML token ID"
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS 
* agent[user].purposeOfUse ^short = "SAML subject:purposeofuse"



Profile:        SAMLaccessTokenUseComprehensive
//Parent:         IHE.BasicAudit.SAMLaccessTokenUse.Minimal
Parent:         AuditEvent
Id:             IHE.BasicAudit.SAMLaccessTokenUse.Comprehensive
Title:          "Basic AuditEvent pattern for when an activity was authorized by an SAML access token Comprehensive"
Description:    """
A basic AuditEvent profile for when an activity was authorized by an SAML access token. This profile is expected to be used with some other detail that explains the activity. This profile only covers the SAML access token. 

The following table uses a short-hand for the SAML fields and FHIR AuditEvent elements to keep the table compact. It is presumed the reader can understand the SAML field and the FHIR AuditEvent element given. Note the `~` character represents attributes under the SAML `AttributeStatement`. 

**Builds upon the Minimal**

| SAML field                   | Comprehensive AuditEvent
|------------------------------|-----------------------------------|
| ID                           | agent[user].policy
| Issuer                       | agent[user].who.identifier.system
| Subject.NameID               | agent[user].who.identifier.value
| ~subject:role                | agent[user].role
| ~subject:purposeofuse        | agent[user].purposeOfUse
| AuthnContextClassRef         | agent[user].extension[assuranceLevel]
| ~subject:subject-id          | agent[user].extension[otherId][subject-id].value
| ~subject:npi                 | agent[user].extension[otherId][npi].value
| ~subject:provider-identifier | agent[user].extension[otherId][provider-id].value
| ~subject:organization        | agent[userorg].who.display
| ~subject:organization-id     | agent[userorg].who.identifier.value
| ~homeCommunityId             | agent[homeCommunityId].who.identifier.value 
| ~bppc:2007:docid             | entity[consent].what.identifier.value 
| ~xua:2012:acp                | entity[consent].detail.valueString 
| ~resource:resource-id        | entity[consent-patient].what.identifier.value
"""
* agent.extension contains AssuranceLevel named assuranceLevel 0..* MS
* agent.extension contains OtherId named otherId 0..* MS
* agent ^slicing.discriminator.type = #value
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent contains 
    user 1.. and
	userorg 0..* and
	homeCommunityId 0..*
* agent[user].type = UserAgentTypes#UserSamlAgent
* agent[user].who 1..1 
* agent[user].who.identifier.system 0..1 MS
* agent[user].who.identifier.system ^short = "SAML Issuer"
* agent[user].who.identifier.value 1..1 MS
* agent[user].who.identifier.value ^short = "SAML Subject.NameID"
* agent[user].requestor = true
* agent[user].role MS 
* agent[user].role ^short = "SAML subject:role(s)"
* agent[user].altId 0..0 // discouraged
* agent[user].name 0..1 // not sure where you would get it from
* agent[user].policy 1..1 MS
* agent[user].policy ^short = "SAML token ID"
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS 
* agent[user].purposeOfUse ^short = "SAML subject:purposeofuse"

// Thanks to Chris Moesel for figuring out how to slice an extension
// Note: slicing.discriminator[0] is the standard extension discriminator (#value / url)
* agent[user].extension ^slicing.discriminator[1].type = #value
* agent[user].extension ^slicing.discriminator[=].path = "value.ofType(Identifier).type"
* agent[user].extension[otherId] contains 
	subject-id 0..* and
	npi 0..* and
	provider-id 0..*
* agent[user].extension[otherId][subject-id].valueIdentifier.type = OtherIdentifierTypes#SAML-subject-id
* agent[user].extension[otherId][subject-id].valueIdentifier.value 1..1 MS
* agent[user].extension[otherId][subject-id].valueIdentifier.value ^short = "SAML Attribute subject-id"
* agent[user].extension[otherId][npi].valueIdentifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
* agent[user].extension[otherId][npi].valueIdentifier.value 1..1 MS
* agent[user].extension[otherId][npi].valueIdentifier.value ^short = "SAML Attribute npi"
* agent[user].extension[otherId][provider-id].valueIdentifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#PRN
* agent[user].extension[otherId][provider-id].valueIdentifier.value 1..1 MS
* agent[user].extension[otherId][provider-id].valueIdentifier.value ^short = "SAML Attribute provider-identifier"
* agent[userorg].type = http://terminology.hl7.org/CodeSystem/v3-RoleClass#PROV // "healthcare provider"
// note that there might need to be different types when other organation types get involved, but somehow the SAML would need to indicate it is not a healthcare provider org.
* agent[userorg].who.display 1..1 MS
* agent[userorg].who.display ^short = "SAML Attribute urn:oasis:names:tc:xspa:1.0:subject:organization"
* agent[userorg].who.identifier.value 1..1 MS
* agent[userorg].who.identifier.value ^short = "SAML Attribute urn:oasis:names:tc:xspa:1.0:subject:organization-id"
* agent[userorg].requestor = false
* agent[userorg].role 0..0
* agent[userorg].altId 0..0 // discouraged
* agent[userorg].name 0..0 
* agent[userorg].location 0..0 // discouraged as unlikely to be known in this scenario
* agent[userorg].policy 0..0
* agent[userorg].media 0..0 // media is physical storage media identification
* agent[userorg].network 0..0 // users are not network devices
* agent[userorg].purposeOfUse 0..0

* agent[homeCommunityId].type = urn:ihe:iti:xca:2010#homeCommunityId
* agent[homeCommunityId].who.identifier 1..1 MS
* agent[homeCommunityId].who.identifier ^short = "homeCommunityId"
* agent[homeCommunityId].requestor = false
* agent[homeCommunityId].role 0..0
* agent[homeCommunityId].altId 0..0 // discouraged
* agent[homeCommunityId].name 0..0 
* agent[homeCommunityId].location 0..0 // discouraged as unlikely to be known in this scenario
* agent[homeCommunityId].policy 0..0
* agent[homeCommunityId].media 0..0 // media is physical storage media identification
* agent[homeCommunityId].network 0..0 // users are not network devices
* agent[homeCommunityId].purposeOfUse 0..0

* entity ^slicing.discriminator.type = #value
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity contains 
	consent 0..*
* entity[consent].type = http://hl7.org/fhir/resource-types#Consent // "Consent"
* entity[consent].what.identifier 0..1 MS // consent identifier
* entity[consent].what.identifier ^short = "BPPC Patient Privacy Policy Acknowledgement Document unique id" 
* entity[consent].detail ^slicing.discriminator.type = #value
* entity[consent].detail ^slicing.discriminator.path = "type"
* entity[consent].detail ^slicing.rules = #open
* entity[consent].detail contains 
	acp 0..1 and
	patient-id 0..1
* entity[consent].detail[acp].type = "urn:ihe:iti:xua:2012:acp"
* entity[consent].detail[acp] ^short = "Home Community ID where the Consent is."
* entity[consent].detail[acp].value[x] only string
* entity[consent].detail[patient-id].type = "urn:oasis:names:tc:xacml:2.0:resource:resource-id"
* entity[consent].detail[patient-id] ^short = "The Patient Identity where the Consent is."
* entity[consent].detail[patient-id].value[x] only string


////////////////////////////////////////////////////////EXAMPLES/////////////////////////////////////////////////

Instance: ex-auditPoke-SAML-Min
InstanceOf: IHE.BasicAudit.SAMLaccessTokenUse.Minimal
Title: "Audit Example of a basic SAML access token of minimal"
Description: """
Example AuditEvent showing just the minimal SAML access token. The event being recorded is a theoretical **poke** (not intended to represent anything useful).

Minimal only records the SAML assertion id, issuer, and subject. Minimal may record roles and purposeOfUse if known. Minimal presumes you have access to the SAML Identity Provider (IDP) to reverse lookup given this information.

SAML field | example value |
-----|-----|
Subject.NameID  | 05086900124
Issuer | https://sts.sykehuspartner.no
ID | XC4WdYS0W5bjsMGc5Ue6tClD_5U
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110100 "Application Activity"
* action = #R
* subtype = urn:ietf:rfc:1438#poke "Boredom poke"
//* severity = #Informational
* recorded = 2021-12-03T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[user].type.coding[+] = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP // "information recipient"
* agent[user].type.coding[+] = UserAgentTypes#UserSamlAgent
* agent[user].who.identifier.value = "05086900124"
* agent[user].who.identifier.system = "https://sts.sykehuspartner.no"
* agent[user].policy = "XC4WdYS0W5bjsMGc5Ue6tClD_5U"



Instance: ex-auditPoke-SAML-Min2
InstanceOf: IHE.BasicAudit.SAMLaccessTokenUse.Minimal
Title: "Audit Example of a basic SAML access token of minimal with multiple PurposeOfUse"
Description: """
Example AuditEvent showing just the minimal SAML access token. The event being recorded is a theoretical **poke** (not intended to represent anything useful).

Minimal only records the SAML assertion id, issuer, and subject. Minimal may record roles and purposeOfUse if known. Minimal presumes you have access to the SAML Identity Provider (IDP) to reverse lookup given this information.

SAML field | example value |
-----|-----|
Subject.NameID  | "JoeL" 
Issuer | "https://carequality.org" 
ID | "_5a6b51b7-cd3e-4629-aac8-9846cbc3cf84" 
~purposeOfUse | http://terminology.hl7.org/CodeSystem/v3-ActReason, TREAT
~purposeOfUse | http://terminology.hl7.org/CodeSystem/v3-ActReason, ETREAT
~purposeOfUse | http://terminology.hl7.org/CodeSystem/v3-ActReason, HPAYMT
~purposeOfUse | http://terminology.hl7.org/CodeSystem/v3-ActReason, HOPERAT
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110100 "Application Activity"
* action = #R
* subtype = urn:ietf:rfc:1438#poke "Boredom poke"
//* severity = #Informational
* recorded = 2021-12-03T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[user].type.coding[+] = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].type.coding[+] = UserAgentTypes#UserSamlAgent
* agent[user].who.identifier.value = "JoeL"
* agent[user].who.identifier.system = "https://carequality.org"
* agent[user].policy = "_5a6b51b7-cd3e-4629-aac8-9846cbc3cf84"
* agent[user].purposeOfUse[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* agent[user].purposeOfUse[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#ETREAT
* agent[user].purposeOfUse[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* agent[user].purposeOfUse[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT



Instance: ex-auditPoke-SAML-Comp
InstanceOf: IHE.BasicAudit.SAMLaccessTokenUse.Comprehensive
Title: "Audit Example of a basic SAML access token of comprehensive"
Description: """
Example AuditEvent showing just the comprehensive SAML access token. The event being recorded is a theoretical **poke** (not intended to represent anything useful).

Comprehensive is different than Minimal in that it presumes that when the AuditEvent is used, the appropriate use of the AuditEvent does not have access to the SAML Idenity Provider (IDP), or that the IDP may have forgotten about the issued ID.

**Builds upon the Minimal**

SAML field | example value |
-----|-----|
Subject.NameID  | 05086900124
Issuer | https://sts.sykehuspartner.no
ID | XC4WdYS0W5bjsMGc5Ue6tClD_5U
purposeOfUse | http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT
assurance | authenticated AAL 4
~subject:subject-id          | JohnDoe
~subject:npi                 | 1234567@myNPIregistry.example.org
~subject:provider-identifier | JohnD
~subject:organization        | St. Mary of Examples
~subject:organization-id     | 1234567@myOrganizationRegistry.example.org
~bppc:2007:docid             | urn:uuid:a4b1d27e-5493-11ec-bf63-0242ac130002 
~xua:2012:acp                | urn:uuid:b8aa8eec-5493-11ec-bf63-0242ac130002
~homeCommunityId             | urn:uuid:cadbf8d0-5493-11ec-bf63-0242ac130002 
~resource:resource-id        | urn:uuid:d7391e5a-5493-11ec-bf63-0242ac130002
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110100 "Application Activity"
* action = #R
* subtype = urn:ietf:rfc:1438#poke "Boredom poke"
//* severity = #Informational
* recorded = 2021-12-03T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[user].type.coding[+] = UserAgentTypes#UserSamlAgent
* agent[user].type.coding[+] = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who.identifier.value = "05086900124"
* agent[user].who.identifier.system = "https://sts.sykehuspartner.no"
* agent[user].requestor = true
* agent[user].policy = "XC4WdYS0W5bjsMGc5Ue6tClD_5U"
* agent[user].purposeOfUse = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT
* agent[user].extension[assuranceLevel].valueCodeableConcept.coding = http://terminology.hl7.org/CodeSystem/v3-ObservationValue#LOAAP4
//TODO This throws an error in validation that I can't figure out https://chat.fhir.org/#narrow/stream/215610-shorthand/topic/slicing.20an.20extension.20on.20a.20slice
* agent[user].extension[otherId][subject-id].valueIdentifier.type = OtherIdentifierTypes#SAML-subject-id
* agent[user].extension[otherId][subject-id].valueIdentifier.value = "JohnDoe"
* agent[user].extension[otherId][npi].valueIdentifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
* agent[user].extension[otherId][npi].valueIdentifier.value = "1234567@myNPIregistry.example.org"
* agent[user].extension[otherId][provider-id].valueIdentifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#PRN
* agent[user].extension[otherId][provider-id].valueIdentifier.value = "JohnD"
* agent[userorg].type = http://terminology.hl7.org/CodeSystem/v3-RoleClass#PROV "healthcare provider"
* agent[userorg].who.display = "St. Mary of Examples"
* agent[userorg].who.identifier.value = "1234567@myOrganizationRegistry.example.org"
* agent[userorg].requestor = false
* agent[homeCommunityId].type = urn:ihe:iti:xca:2010#homeCommunityId
* agent[homeCommunityId].who.identifier.type = urn:ihe:iti:xca:2010#homeCommunityId
* agent[homeCommunityId].who.identifier.value = "urn:uuid:cadbf8d0-5493-11ec-bf63-0242ac130002"
* agent[homeCommunityId].requestor = false
* entity[consent].type = http://hl7.org/fhir/resource-types#Consent "Consent"
* entity[consent].what.identifier.value = "urn:uuid:a4b1d27e-5493-11ec-bf63-0242ac130002"
//TODO this should be able to use the slice names [acp] and [patient-id], but it doesn't seem to work.
* entity[consent].detail[+].type = "urn:ihe:iti:xua:2012:acp"
* entity[consent].detail[=].valueString = "urn:uuid:b8aa8eec-5493-11ec-bf63-0242ac130002"
* entity[consent].detail[+].type = "urn:oasis:names:tc:xacml:2.0:resource:resource-id"
* entity[consent].detail[=].valueString = "urn:uuid:d7391e5a-5493-11ec-bf63-0242ac130002"



Instance: Dr-SAML-QDI
InstanceOf: DocumentReference
Title: "SAML example from CareQuality"
Description: "Example of a SAML assertion as seen in CareQuality."
* status = #current
* content.attachment.id = "ig-loader-QDI-SAML-20211210.txt"
* content.attachment.contentType = #application/xml
* context.related = Reference(AuditEvent/ex-auditPoke-SAML-QDI-Min)





Instance: ex-auditPoke-SAML-QDI-Min
InstanceOf: IHE.BasicAudit.SAMLaccessTokenUse.Minimal
Title: "Audit Example of a basic SAML access token of minimal from QDI sample"
Description: """
Example AuditEvent showing QDI sample with just the minimal SAML access token. The event being recorded is a theoretical **poke** (not intended to represent anything useful).

Minimal only records the SAML assertion id, issuer, and subject. Minimal may record roles and purposeOfUse if known. Minimal presumes you have access to the SAML Identity Provider (IDP) to reverse lookup given this information.

SAML field | example value |
-----|-----|
Subject.NameID  | UID=kskagerb 
Issuer | CN=John Miller,OU=Harris,O=HITS,L=Melbourne,ST=FL,C=US
ID | _d87f8adf-711a-4545-bf77-ff8517b498e4
subject-id | Karl S Skagerberg
subject:organization | connectred5.fedsconnect.org
subject:organization-id | urn:oid:2.16.840.1.113883.3.333
homeCommunityId | urn:oid:2.16.840.1.113883.3.333
subject:role | 2.16.840.1.113883.6.96#307969004
purposofuse | 2.16.840.1.113883.3.18.7.1#PUBLICHEALTH
resource-id | 500000000^^^&2.16.840.1.113883.3.333&ISO
AuthzDecisionStatement | nesting
.AccessConsentPolicy | urn:oid:1.2.3.4
.InstanceAccessConsentPolicy | urn:oid:1.2.3.4.123456789
AuthnContextClassRef | urn:oasis:names:tc:SAML:2.0:ac:classes:X509
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110100 "Application Activity"
* action = #R
* subtype = urn:ietf:rfc:1438#poke "Boredom poke"
//* severity = #Informational
* recorded = 2021-12-03T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[user].type.coding[+] = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].type.coding[+] = UserAgentTypes#UserSamlAgent
* agent[user].who.identifier.value = "UID=kskagerb"
// given that there is no known LDAP hostname, we use the ldap:/// form
// the string must also be url escaped. 
* agent[user].who.identifier.system = "ldap:///CN%3DSAML%20User%2COU%3DHarris%2CO%3DHITS%2CL%3DMelbourne%2CST%3DFL%2CC%3DUS"
* agent[user].policy = "_d87f8adf-711a-4545-bf77-ff8517b498e4"
* agent[user].purposeOfUse = urn:oid:2.16.840.1.113883.3.18.7.1#PUBLICHEALTH "Uses and disclosures for public health activities."







Instance: ex-auditPoke-SAML-QDI-Comp
InstanceOf: IHE.BasicAudit.SAMLaccessTokenUse.Comprehensive
Title: "Audit Example of a basic SAML access token of comprehensive from QDI sample"
Description: """
Example AuditEvent showing QDI sample with just the comprehensive SAML access token. The event being recorded is a theoretical **poke** (not intended to represent anything useful).

SAML | example value |
-----|-----|
Subject.NameID  | UID=kskagerb
Issuer | CN=John Miller,OU=Harris,O=HITS,L=Melbourne,ST=FL,C=US
ID | _d87f8adf-711a-4545-bf77-ff8517b498e4
subject-id | Karl S Skagerberg
subject:organization | connectred5.fedsconnect.org
subject:organization-id | urn:oid:2.16.840.1.113883.3.333
homeCommunityId | urn:oid:2.16.840.1.113883.3.333
subject:role | 2.16.840.1.113883.6.96#307969004
purposofuse | 2.16.840.1.113883.3.18.7.1#PUBLICHEALTH
resource-id | 500000000^^^&2.16.840.1.113883.3.333&ISO
AuthzDecisionStatement | nesting
.AccessConsentPolicy | urn:oid:1.2.3.4
.InstanceAccessConsentPolicy | urn:oid:1.2.3.4.123456789
AuthnContextClassRef | urn:oasis:names:tc:SAML:2.0:ac:classes:X509
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110100 "Application Activity"
* action = #R
* subtype = urn:ietf:rfc:1438#poke "Boredom poke"
//* severity = #Informational
* recorded = 2021-12-03T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[user].type.coding[+] = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].type.coding[+] = UserAgentTypes#UserSamlAgent
* agent[user].who.identifier.value = "UID=kskagerb"
// given that there is no known LDAP hostname, we use the ldap:/// form
// the string must also be url escaped. 
* agent[user].who.identifier.system = "ldap:///CN%3DSAML%20User%2COU%3DHarris%2CO%3DHITS%2CL%3DMelbourne%2CST%3DFL%2CC%3DUS"
* agent[user].policy = "_d87f8adf-711a-4545-bf77-ff8517b498e4"
* agent[user].role = urn:oid:2.16.840.1.113883.6.96#307969004 "Public health officier"
* agent[user].purposeOfUse = urn:oid:2.16.840.1.113883.3.18.7.1#PUBLICHEALTH "Uses and disclosures for public health activities."
* agent[user].extension[assuranceLevel].valueCodeableConcept.coding = urn:oasis:names:tc:SAML:2.0:ac:classes#X509
* agent[user].extension[otherId][subject-id].valueIdentifier.type = OtherIdentifierTypes#SAML-subject-id
* agent[user].extension[otherId][subject-id].valueIdentifier.value = "Karl S Skagerberg"

* agent[userorg].type = http://terminology.hl7.org/CodeSystem/v3-RoleClass#PROV "healthcare provider"
* agent[userorg].who.display = "connectred5.fedsconnect.org"
* agent[userorg].who.identifier.value = "urn:oid:2.16.840.1.113883.3.333"
* agent[userorg].requestor = false

* entity[consent].type = http://hl7.org/fhir/resource-types#Consent "Consent"
* entity[consent].what.identifier.value = "urn:oid:1.2.3.4.123456789"
//TODO this should be able to use the slice names [acp] and [patient-id], but it doesn't seem to work.
* entity[consent].detail[+].type = "urn:ihe:iti:xua:2012:acp"
* entity[consent].detail[=].valueString = "urn:oid:1.2.3.4"
* entity[consent].detail[+].type = "urn:oasis:names:tc:xacml:2.0:resource:resource-id"
* entity[consent].detail[=].valueString = "500000000^^^&2.16.840.1.113883.3.333&ISO"












---

// File: input/fsh/terms.fsh

// This FSH file contains vocabulary unique to BasicAudit, that is used by many profiles. 
// Some vocabulary are specific to one profile, and is thus defiend with that profile.

CodeSystem: BasicAuditEntityType
Title: "Entity Types that are defined in IHE BasicAudit"
Description: """
These are new codes used in BasicAudit IG, where AuditEvent.entity is used to hold a specific kind of data that is not covered by the existing valueSet.
"""
* ^caseSensitive = true
* ^experimental = false
* #XrequestId "transport specific unique identifier where http X-Request-Id is used"



ValueSet: BasicAuditEntityTypesVS
Title: "Entity Types used by IHE BasicAudit"
Description: """
For use with AuditEvent.entity.type.  This includes codes defined in the BasicAudit.
"""
* ^experimental = false
* codes from system BasicAuditEntityType



---

// File: input/images-source/ActorContext.plantuml

@startuml
rectangle "ANY Secure Client" {
  agent "any client" as cRest
  agent "Secure Application" as cAud
  cRest -down.* cAud 
}
rectangle "ANY Secure Server" {
  agent "Secure Application" as sAud
  agent "any server" as sRest
  sRest -down.* sAud
}

agent "Audit Record Repository" as AuditRepository
agent "Audit Consumer" as AuditClient

cRest -right..> sRest : ANY request/response
sAud -down-> AuditRepository: Record Audit Event [ITI-20]
cAud --> AuditRepository: Record Audit Event [ITI-20]
AuditClient -up-> AuditRepository: Retrieve ATNA Audit Event [ITI-81]
@enduml


---

// File: input/images-source/Actors.plantuml

@startuml
agent "Audit Creator" as cAud
cloud AuditRepository [
ATNA
....
Audit Record Repository
]
agent "Audit Consumer" as AuditClient

cAud -down-> AuditRepository: Record Audit Event [ITI-20]
AuditClient -up-> AuditRepository: Retrieve ATNA Audit Event [ITI-81]
@enduml


---

// File: input/images-source/IUA-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
participant "Authorization Client" as Client
participant "Authorization Server" as AS
participant "Resource Server" as RS
participant "Audit Record Repository" as AR

autonumber 0 1 "<b>[00]</b>"
autoactivate on

group (optional) Get Authorization Server Metadata (ITI-103)

	Client-> AS : Authorization Server Metadata Request (ITI-103)
	AS --> Client: Authorization Server Metadata Response

	RS-> AS : Authorization Server Metadata Request (ITI-103)
	AS --> RS: Authorization Server Metadata Response

end

group Get Access Token (ITI-71)
	Client -> AS: Get Access Token Request
	Client <-- AS: Get Access Token Response
end

group Incorporate Access Token (ITI-72)

Client -> RS : Resource Request + Incorporate Access Token

alt JWT or SAML token
  RS -> RS: validate token
  deactivate RS

else introspect token

  group Introspect Token (ITI-102)
		RS -> AS : Introspect Token Request
		AS -> AS : validate token
		deactivate AS
		AS --> RS: Introspect Token Response
  end
end

Client <-- RS : Resource Response  

RS --> AR : AuditEvent recorded

Client --> AR : AuditEvent recorded
end
@enduml


---

// File: input/images-source/usecase1-processflow.plantuml

@startuml
hide footbox

participant "ANY Secure Client" as Client
participant "ANY Secure Server" as Server
participant "Audit Record Repository" as AuditRepository
Client -> Server : 1. Client requests some data from the Server
activate Server
activate Client
Server -> Server : 2. Server finds data requested
Server -> AuditRepository : 3. Server records audit event
Server -> Client : 4. Server returns read data requested
deactivate Server
Client --> AuditRepository : 5. Client records audit event
deactivate Client
@enduml


---

// File: input/images-source/usecase2-processflow.plantuml

@startuml
hide footbox
participant "Audit Consumer" as AuditClient
participant "Audit Record Repository" as AuditRepository
AuditClient -> AuditRepository : 1. Client requests AuditEvent records for Patient X
activate AuditRepository
activate AuditClient
AuditRepository -> AuditRepository : 2. Server finds AuditEvents requested for Patient X
AuditRepository -> AuditRepository : 3. Server records audit event of the audit Event request
AuditRepository -> AuditClient : 4. Server returns AuditEvent records for Patient X
deactivate AuditRepository
AuditClient --> AuditRepository : 5. Audit Client records audit event
deactivate AuditClient
@enduml


---

// File: input/images-source/usecase4-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
participant "User" as User
participant "Client" as Client
participant "Authorization Service" as AuthZ
participant "Resource Server" as Resource
participant "Audit Repository" as AuditRepository

User -> Client: User uses a Client app
activate Client
group User and Client are used within Organization context
group User has selected a specific Patient
Client -> AuthZ: Client App requests Authorization Decision for a given Patient
activate AuthZ
AuthZ -> AuthZ: Check Consent
AuthZ -> AuditRepository : Authorization Server records audit event
AuthZ -> Client: Permit
deactivate AuthZ
Client -> Resource: Uses Permit token to access Resources
end
end
deactivate Client
@enduml


---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/ITI.BasicAudit/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/ITI.BasicAudit/issues

---

