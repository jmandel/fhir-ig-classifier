File: repos/IHE_SLASH_ITI.NPFS/sushi-config.yaml

# sushi-config.yaml is documented https://fshschool.org/docs/sushi/configuration/
# ───────────────────────────────────────────────────
# the id should be lowercase made up of "ihe." + {domain acronym} + "." + {profile acronym/short-name}
# e.g. ihe.iti.mhds, or ihe.iti.basicaudit
id: ihe.iti.npfs
canonical: https://profiles.ihe.net/ITI/NPFS
version: 2.2.1-current
name: IHE_ITI_NPFS
title: "Non-patient File Sharing (NPFS)"
description: The Non-Patient File Sharing (NPFS) Profile defines how to share non-patient files such as clinical workflow definitions, domain policies, and stylesheets. Those files can be created and consumed by many different systems involved in a wide variety of data sharing workflows.
releaseLabel: ci-build
#releaseLabel: Trial-Implementation
#releaseLabel: ballot
#date: 2023-11-17
status: active
publisher:
  ## Find your domain contact on the https://www.ihe.net/ihe_domains page
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
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
#copyright: IHE http://www.ihe.net/Governance/#Intellectual_Property
copyrightYear: 2021+
dependencies:
  ihe.formatcode.fhir:
    id: iheformatcodefhir
    uri: https://profiles.ihe.net/fhir/ihe.formatcode.fhir/ImplementationGuide/ihe.formatcode.fhir
    version: 1.1.x
  ihe.iti.balp:
    id: iheitibasicaudit
    uri: https://profiles.ihe.net/ITI/BALP/ImplementationGuide/ihe.iti.balp
    version: 1.1.x

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

# resources:
# list every example here with a name, description and that exampleBoolean is true; These are used to populate the artifacts page, and are needed to eliminate build warnings 
# You may delay filling out this section until you approach publication as it is merely a nice to have and eliminates build warnings -- If you do this then you will need above the autoload-resources true


pages:
# itemize here each narrative page. Include assigned section numbers when appropriate. The order they appear here is the order they will appear in the TOC and on the next/prev navigation.
  index.md:
    title: Non-patient File Sharing Home
    generation: markdown
  volume-1.md:
    title: 1:47 Non-Patient File Sharing (NPFS) Profile
    generation: markdown
  ITI-87.md:
    title: 2:3.87 Submit File [ITI-87]
    generation: markdown
  ITI-88.md:
    title: 2:3.88 Search File [ITI-88]
    generation: markdown
  ITI-89.md:
    title: 2:3.89 Update DocumentReference [ITI-89]
    generation: markdown
  ITI-109.md:
    title: 2:3.109 Retrieve File [ITI-109]
    generation: markdown
  testplan.md:
    title: "Test Plan"
    generation: markdown
  other.md:
    title: Changes to Other IHE Specifications
    generation: markdown
  issues.md:
    title: Significant Changes & Issues
    generation: markdown
  download.md:
    title: "Download and Analysis"
    generation: markdown

menu:
  NPFS Home: index.html
  Volume 1:
    Introduction: volume-1.html
    Actors and Transactions: volume-1.html#1471-npfs-actors-transactions-and-content-modules
    Actor Options: volume-1.html#1472-npfs-actor-options
    Required Groupings: volume-1.html#1473-npfs-required-actor-groupings
    Overview: volume-1.html#1474-npfs-overview
    Security Considerations: volume-1.html#1475-npfs-security-considerations
    Cross-Profile Considerations: volume-1.html#1476-npfs-cross-profile-considerations
  Volume 2:
    "Submit File [ITI-87]": ITI-87.html
    "Search File [ITI-88]": ITI-88.html
    "Update DocumentReference [ITI-89]": ITI-89.html
    "Retrieve File [ITI-109]": ITI-109.html
  Artifacts: artifacts.html
  Other:
    Changes to Other IHE Specifications: other.html
    Download and Analysis: download.html
    Test Plan: testplan.html


---

// File: input/pagecontent/CapabilityStatement-IHE.NPFS.FileConsumer-intro.md

<div>
{%include FileConsumer.svg%}
</div>

<br clear="all">

**Figure: Query Actors Interactions**

---

// File: input/pagecontent/CapabilityStatement-IHE.NPFS.FileConsumerOption-intro.md

<div>
{%include FileConsumerOption.svg%}
</div>

<br clear="all">

**Figure: Query Actors Interactions**

---

// File: input/pagecontent/CapabilityStatement-IHE.NPFS.FileSource-intro.md

<div>
{%include FileSource.svg%}
</div>

<br clear="all">

**Figure: Actor Interactions**

---

// File: input/pagecontent/CapabilityStatement-IHE.NPFS.FileSourceOption-intro.md

<div>
{%include FileSourceOption.svg%}
</div>

<br clear="all">

**Figure: Actor Interactions**

---

// File: input/pagecontent/download.md


You can also download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [https://github.com/IHE/ITI.NPFS](https://github.com/IHE/ITI.NPFS).

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

This profile defines how to enable the sharing of non-patient files.

Those files can be created, consumed and updated by many different
systems involved in a wide variety of data sharing workflows (clinical
workflow definition, domain policies sharing, stylesheets management,
etc.). This profile identifies three actors: File Manager, File
Consumer, and File Source. To fulfill use-case requirements, this
profile defines four new transactions (Submit File \[ITI-87\], Search
File \[ITI-88\], and Update DocumentReference \[ITI-89\]) and Retrieve File \[ITI-109\].

There are IHE profiles that define the content of files that are not
patient-related; this profile does not require that the actors be able
to process the contents of the files being shared. Understanding this
profile does not require the knowledge of the files shared.

The NPFS Profile specifies transactions for the sharing of files. Any
file type can be shared using this profile; however, specific guidance
is given for three types of files:

- Workflow Definitions: files which define the processing rules for a
  specific clinical/administrative workflow (see [ITI TF-1: 30.4.1.1 "XDW Workflow Architecture"](https://profiles.ihe.net/ITI/TF/Volume1/ch-30.html#30.4.1.1) for additional information).

- Privacy Domain Policies: files which describe a specific privacy
  policy that applies to, or may be agreed by the patient (see [ITI TF-1: 19.2 "Creating Patient Privacy Policies"](https://profiles.ihe.net/ITI/TF/Volume1/ch-19.html#19.2) for further details).

- Stylesheets: structured documents used by user-agents (e.g., Web
  Browsers) to render the content of an XML document.

Local policies may extend the types of files shared using NPFS and that
can be classified using the metadata model described in this profile.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide
This guide is organized into the following sections:

- Volume 1:
  - [Introduction](volume-1.html)
  - [Actors, Transactions, and Content](volume-1.html#1471-npfs-actors-transactions-and-content-modules)
  - [Actor Options](volume-1.html#1472-npfs-actor-options)
  - [Actor Required Groupings](volume-1.html#1473-npfs-required-actor-groupings)
  - [Overview](volume-1.html#1474-npfs-overview)
  - [Security Considerations](volume-1.html#1475-npfs-security-considerations)
  - [Cross Profile Considerations](volume-1.html#1476-npfs-cross-profile-considerations)
- Volume 2: Transaction Detail
  - [Submit File \[ITI-87\]](ITI-87.html)
  - [Search File \[ITI-88\]](ITI-88.html)
  - [Update DocumentReference \[ITI-89\]](ITI-89.html)
  - [Retrieve File [ITI-109]](ITI-109.html)
- Other
  - [Changes to Other IHE Specifications](other.html)
  - [Download and Analysis](download.html)
  - [Test Plan](testplan.html)  

See also the [Table of Contents](toc.html) and the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words: Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Must Support

The use of ```mustSupport``` in StructureDefinition profiles equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#Y).

mustSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor shall populate the elements marked with MustSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit. 
The consuming actors should handle these elements being populated or being absent/empty. 
Note that sometimes mustSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.


---

// File: input/pagecontent/issues.md

## Significant Changes

### Significant Changes From Revision 2.1 (PDF)

- Converted to an IG
- Replaced reference to MHD Retrieve Document [ITI-68] transaction with Retrieve File [ITI-109] transaction 
- Include CapabilityStatements for the actors
- Add defined AuditEvent requirements leveraging BALP when grouped with ATNA
- Integrated CP 1139

## Issues

### Submit an Issue

IHE welcomes [New Issues](https://github.com/IHE/ITI.NPFS/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues may be submitted to the [Public Comment form](https://www.ihe.net/resources/public_comment/).

As issues are submitted they will be managed on the [NPFS GitHub Issues](https://github.com/IHE/ITI.NPFS/issues), where discussion and workarounds may be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. 
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues

- [NPFS_010](https://github.com/IHE/ITI.NPFS/issues/5): This document begins the definition of a value set for the
class element. How do we complete the value set for this profile?
Suggestions are requested. How do we coordinate this value set with
other Document Sharing profiles? Suggestions are requested.

- [NPFS_012](https://github.com/IHE/ITI.NPFS/issues/6): This document does not require the use of profile tags to
identify compliant resources. Use of profile tags will also allow the
File Consumer to search just for resources that matches this profile in
a FHIR Server that store different types of resources. Readers are
required to provide feedback on this topic.

- [NPFS_013](https://github.com/IHE/ITI.NPFS/issues/8): DocumentReference.subject is set to 0..0; the .subject element may still be useful for subjects that are not patient. Practitioner -- this is individual, so I wonder if we really want NPFS to also be (non practitioner)?
Group -- groups can be made up of Patients. So it is not clear how we would allow Group, but not allow Groups of Patients.
Device -- often a Device is associated with a Patient, although many Devices are just Devices. Allowing Device might be the most clear use-case.
Seems we should have a positive use-case to drive deviation from 0..0. Suggestions are requested.
Note that in the future, using FHIR R5, subject can be a reference to ANY kind of Resource. This is just mentioned as foreshadowing, it should not be part of the current profile.

### Closed Issues

None.

---

// File: input/pagecontent/ITI-109.md

This section corresponds to transaction [ITI-109] of the IHE Technical Framework. Transaction [ITI-109] is used by the File Consumer and File Manager.

### 2:3.109.1 Scope

The Retrieve File [ITI-109] transaction is used by the File Consumer to retrieve a File from the File Manager.

### 2:3.109.2 Actors Roles

<table border="1" borderspacing="0"
    style="border: 1px solid black; border-collapse: collapse">
    <caption style="text-align:left">
        <b> Table 2:3.109.2-1: Actor Roles </b>
    </caption>
    <tbody>
        <tr>
            <td style="padding:3px"><b>Actor:</b></td>
            <td><a href="volume-1.html#147112-file-consumer">File Consumer</a></td>
        </tr>
       <tr>
            <td><b>Role:</b></td>
            <td>Requests a File from the File Manager</td>
        </tr>
        <tr>
            <td><b>Actor:</b></td>
            <td><a href="volume-1.html#147111-file-manager">File Manager</a></td>
        </tr>
        <tr>
            <td><b>Role:</b></td>
            <td>Serves the File to the File Consumer</td>
        </tr>
    </tbody>
</table>
<br>

### 2:3.109.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:3.109.4 Messages

<div>
{%include ITI-109-seq.svg%}
<p><b>Figure 2:3.109.4-1: Retrieve File Interactions</b></p>
</div>

<br clear="all">

#### 2:3.109.4.1 Retrieve File Request Message

This message is an HTTP GET request to retrieve the File. 

##### 2:3.109.4.1.1 Trigger Events

The File Consumer wants to obtain a File. 

##### 2:3.109.4.1.2 Message Semantics

The File Consumer sends a HTTP GET request to the server. The File Consumer request may be to retrieve the File content referenced by a DocumentReference.content.attachment.url. 

The File Consumer may provide HTTP Accept header, according to the semantics of the HTTP protocols (see RFC2616, [Section 14.1](https://datatracker.ietf.org/doc/html/rfc2616#section-14.1)).  This enables the File Consumer to indicate preferred mime-types such that the File Manager could provide the File requested in an encoding other than the encoding indicated in the DocumentReference. For example, indicating `application/fhir+json` could result in the response from the File Manager being a json FHIR Bundle of type `File` with all the content encoded as FHIR resources.

The only MIME type assured to be returned is the MIME type indicated in the DocumentReference.content.attachment.contentType.

The HTTP If-Unmodified-Since header shall not be included in the GET request.

##### 2:3.109.4.1.3 Expected Actions

The File Manager shall provide the File in the requested MIME type or reply with an HTTP status code indicating the error condition. The File Manager is not required to transform the File.

#### 2:3.109.4.2 Retrieve File Response Message

This is the return message sent by the File Manager. 

##### 2:3.109.4.2.1 Trigger Events

The HTTP Response message is sent upon completion of the Retrieve File Request. 

##### 2:3.109.4.2.2 Message Semantics

This message shall be an HTTP Response, as specified by RFC2616. When the requested File is returned, the File Manager shall respond with HTTP Status Code 200. The HTTP message-body shall be the content of the requested File.

Table 2:3.109.4.2.2-1 contains error situations and the HTTP Response.

**Table 2:3.109.4.2.2-1: HTTP Error Response Codes and Suggested Text**

|Situation	| HTTP Response |
|-----------|---------------|
|URI not known	| 404 File Not Found |
|File is Deprecated or not available	| 410 Gone (or 404 when 410 is unacceptable due to security/privacy policy) |
|File Manager unable to format File in content types listed the 'Accept' field	| 406 Not Acceptable |
|HTTP request specified is otherwise not a legal value	| 403 Forbidden/Request Type Not Supported |
{: .grid}

The File Manager may return other HTTP Status Codes. Guidance on handling Access Denied related to use of 200, 403 and 404 can be found in [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results).

The File Manager should complement the returned error code with a human readable description of the error condition.

##### 2:3.109.4.2.3 Expected Actions

The File Consumer processes the results according to application-defined rules.

The .hash and .size, when populated, represent the content in the MIME type indicated in the DocumentReference.content.attachment.contentType.

#### 2:3.109.4.3 CapabilityStatement Resource

File Managers implementing this transaction shall provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [File Consumer implementing Retrieve File](CapabilityStatement-IHE.NPFS.FileConsumerOption.html)
- Requirements CapabilityStatement for [File Manager](CapabilityStatement-IHE.NPFS.FileManager.html)

### 2:3.109.5 Security Considerations

See [NPFS Security Considerations](volume-1.html#1475-npfs-security-considerations).

The files are not Patient specific, but they may have other needs for security controls, such as business knowledge restrictions. Thus, the use of Security may be applicable.
Actors involved in this transaction should be aware that even if the Resources exchanged do not contain PHI or other private information, retrieving those Resources could compromise patient care or have other legal ramifications. For general security considerations, see [ITI TF-2: Appendix Z.8](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations) (currently in the Appendix Z on HL7 FHIR Trial Implementation Supplement).

#### 2:3.109.5.1 Security Audit Considerations

The File Consumer when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor shall be able to record a [Retrieve File Consumer Audit Event Log](StructureDefinition-IHE.NPFS.RetrieveFile.Audit.Consumer.html).

The File Manager when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor shall be able to record a [Retrieve File Manager Audit Event Log](StructureDefinition-IHE.NPFS.RetrieveFile.Audit.Manager.html).


---

// File: input/pagecontent/ITI-87.md


### 2:3.87.1 Scope

This transaction allows a File Source to publish a new file and related
metadata. It also enables update of an existing file and update its
metadata and replacement of a file.

The files are not associated with a patient.

### 2:3.87.2 Actors Roles

<div>
<table border="1" borderspacing="0"
    style="border: 1px solid black; border-collapse: collapse">
    <caption style="text-align:left">
        <b> Table 2:3.87.2-1: Actor Roles </b>
    </caption>
    <tbody>
        <tr>
            <td style="padding:3px"><b>Actor:</b></td>
            <td><a href="volume-1.html#147113-file-source">File Source</a></td>
        </tr>
       <tr>
            <td><b>Role:</b></td>
            <td>Sends non-patient files and related metadata to a File Manager</td>
        </tr>
        <tr>
            <td><b>Actor:</b></td>
            <td><a href="volume-1.html#147111-file-manager">File Manager</a></td>
        </tr>
        <tr>
            <td><b>Role:</b></td>
            <td>Stores received non-patient files and maintains related metadata</td>
        </tr>
    </tbody>
</table>
</div>
<br>

### 2:3.87.3 Referenced Standards

<table border="1" borderspacing="0"
    style="border: 1px solid black; border-collapse: collapse">
    <tbody>
        <tr>
            <td style="padding:3px">HL7 FHIR</td>
            <td><a href="http://www.hl7.org/FHIR/R4">HL7 FHIR Release 4.0</a></td>
        </tr>
    </tbody>
</table>

### 2:3.87.4 Messages

<div>
{%include ITI-87-seq.svg%}
<p><b>Figure 2:3.87.4-1: Create File Interactions</b></p>
</div>
<br clear="all">

#### 2:3.87.4.1 Create File Request Message

The File Source uses this message to submit a new file (Binary Resource)
and related metadata (DocumentReference Resource) to a target File
Manager using a FHIR transaction.

##### 2:3.87.4.1.1 Trigger Events

The File Source needs to submit a new file to a File Manager. The file
may have been created by the File Source itself or by another file
creator.

##### 2:3.87.4.1.2 Message Semantics

The File Source shall issue an HTTP request according to requirements
defined in the HL7<sup>®</sup> FHIR<sup>®</sup> standard for "create"
interaction (<http://hl7.org/fhir/R4/http.html#create> ). The message
uses an HTTP POST method to submit a FHIR Bundle Resource.

The Bundle Resource:

- shall contain one Binary Resource
  (<https://www.hl7.org/fhir/R4/binary.html>) representing the file. The
  Binary Resource shall contain the base64-encoded file in the content
  element and the mime-type of the file in the contentType element.

- shall contain one FHIR DocumentReference Resource
  (<https://www.hl7.org/fhir/R4/documentreference.html>) with the file’s
  metadata. Constraints on the DocumentReference Resource are listed in [Resource Profile: NPFS DocumentReference](StructureDefinition-IHE.NPFS.DocumentReference.html).

- may contain other resources that are referenced by the
  DocumentReference Resource.

The File Source shall submit FHIR resources in either XML format or JSON
format. Values for media-type of the request message are defined in the
[ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) (currently in the Appendix Z on HL7 FHIR Trial
Implementation Supplement).

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html#Appendix%20W) for informative implementation material for
this transaction.

Sections below provide specific guidance about how handle metadata for
stylesheets, workflow definitions, and privacy policies. If other files
types will be managed, local policy should establish values for type,
category, format, mime-type and masterIdentifier elements.

###### 2:3.87.4.1.2.1 category element

Codes in the category element shall be from [ValueSet: NPFS DocumentReference category](ValueSet-DocumentReferenceCategory.html), if any
of the codes within the value set can apply to the concept being
communicated. If the table does not cover the concept (based on human
review), an alternate code may be used instead.

###### 2:3.87.4.1.2.2 type element

This section identifies specific guidelines for the type element which
depends on the "class" of the file:

- If the file submitted is a Workflow Definition template, the type
  element could be valued with the workflow definition reference of the
  Workflow Definition profile (see workflowDefinitionReference as
  defined by the XDW Profile; [see ITI TF-3: 5.4.2.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Rev15.0_Vol3_FT_2018-07-24.pdf)).

- If the file submitted is a Patient Privacy Policy (see ITI TF-1:
  19.2.1 Basic Patient Privacy Consent), the type element should be
  valued with the LOINC code 57017-6 "Privacy policy Organization
  Document" as shown in [ValueSet: NPFS DocumentReference category](ValueSet-DocumentReferenceCategory.html).

- If the file submitted is a Stylesheet, the type element will be valued
  with a codeable concept defined by local policy that classifies the
  type of the stylesheet. The codeable concept of the type element shall
  be defined by both a code and a system (e.g., code= "laboratory"
  system="http://localdomain.org/stylesheetstype").

###### 2:3.87.4.1.2.3 File relationships 

The relatesTo element holds relationships that the file has with other
non-patient files. The DocumentReference.relatesTo element allows for
the creation of those relationships (i.e., replacement, sign, transform,
or append).

###### 2:3.87.4.1.2.4 MasterIdentifier element

This section identifies specific requirements for the masterIdentifier
element, if used:

- If the file submitted is a Workflow Definition template, the
  masterIdentifier element shall be valued with the
  workflowDefinitionReference as defined by the XDW Profile ([see ITI TF-3: 5.4.2.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Rev15.0_Vol3_FT_2018-07-24.pdf)) .

- If the file submitted is a Patient Privacy Policy ([see ITI TF-1: 19.2.1 Basic Patient Privacy Consent](https://profiles.ihe.net/ITI/TF/Volume1/ch-19.html)), the masterIdentifier element
  shall be valued with the associated Patient Privacy Policy Identifier.

Local policies should define how to handle this element in case of
file’s revision, update or replacement.

###### 2:3.87.4.1.2.5 Create File request message example

For an example of a Create File Request Bundle see <a href="Bundle-ex-CreateDocumentBundle.html">Example Bundle: Create Document Bundle</a>.

##### 2:3.87.4.1.3 Expected Actions

The File Manager shall support all the media-types defined in [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) (currently in the Appendix Z on HL7 FHIR Trial
Implementation Supplement).

On receipt of the Create File Request, the File Manager shall validate
the Resources and respond with one of the HTTP codes defined in [Section 3.87.4.4.2 Message Semantics](ITI-87.html#2387442-message-semantics).

The File Manager shall process the Bundle atomically.

The File Manager shall support Create File Request messages that contain
one Binary Resource and one DocumentReference Resource. The File Manager
shall store these resources and make them available for further
processing, e.g., file update or replacement \[ITI-87\], file metadata
update \[ITI-89\], search \[ITI-88\], and retrieve \[ITI-109\].

If the File Manager receives a Create File Request message that contains
resources other than the required ones, it may respond to the File
Source with a failure (see [Section 3.87.4.4.2](ITI-87.html#2387442-message-semantics)).

#### 2:3.87.4.2 Update File Request Message

The File Source uses this message to update a file already existing on
the File Manager.

This message is used when there is a prior file that does not need to be
preserved.

The File Manager is not required to support FHIR resource versioning
(<https://www.hl7.org/fhir/R4/versions.html>).

##### 2:3.87.4.2.1 Trigger Events

The File Source needs to update a file that exists on the File Manager.

Prior to sending the update, the File Source shall discover the resource
ids of the existing DocumentReference Resource and the Binary Resource
to be updated.

##### 2:3.87.4.2.2 Message Semantics

The File Source shall issue an HTTP request according to requirements
defined in the HL7<sup>®</sup> FHIR<sup>®</sup> standard for "update"
interaction (<http://hl7.org/fhir/R4/http.html#update>).

The message uses an HTTP POST to submit a FHIR Bundle that contains the
updated Binary and DocumentReference Resources. For each resource in the
Bundle, the bundle.entry.request.method shall be valued with the HTTP
PUT Method.

The Bundle Resource shall contain:

- one Binary Resource (<https://www.hl7.org/fhir/R4/binary.html>)
  representing the file that will update the existing Binary Resource.
  The id of the Binary Resource shall be valued with the id of the
  Binary Resource to be updated on the File Manager.

- one DocumentReference Resource
  (<https://www.hl7.org/fhir/R4/documentreference.html>) with updated
  metadata. The id of the DocumentReference Resource shall be valued
  with the id of the DocumentReference Resource to be updated;
  constraints on the DocumentReference Resource are listed in [Resource Profile: NPFS DocumentReference](StructureDefinition-IHE.NPFS.DocumentReference.html).

The File Source shall submit FHIR resources in either XML format or JSON
format. Values for media-type of the request message are defined in the
[ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) (currently in the Appendix Z on HL7 FHIR Trial
Implementation Supplement).

###### 2:3.87.4.2.2.1 Update File Request message example

For an example of a Update File Request Bundle see <a href="Bundle-ex-UpdateDocumentBundle.html">Example Bundle: Update Document Bundle</a>.

##### 2:3.87.4.2.3 Expected Actions

The File Manager shall support all the media-type defined in [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) (currently in the Appendix Z on HL7 FHIR Trial
Implementation Supplement).

On receipt of the Update File Request, the File Manager shall respond
with one of the HTTP codes defined in [Section 3.87.4.4.2 Message Semantics](ITI-87.html#2387442-message-semantics).

The File Manager shall process the Bundle atomically.

The File Manager shall support Update File Request messages that contain
one Binary Resource and one DocumentReference Resource. The File Manager
shall store these resources and make them available for further
processing, e.g., file update or replacement \[ITI-87\], file metadata
update \[ITI-89\], search \[ITI-88\], and retrieve \[ITI-109\].

The previous content in the updated Binary and DocumentReference
Resources will be no longer accessible, and the new file will be
retrievable using the same bundle.entry.fullUrl as the previous one.

If the File Manager receives an Update File Request message that
contains resources other than the required ones, it may respond to the
File Source with a failure (see [Section 3.87.4.4.2](ITI-87.html#2387442-message-semantics)).

#### 2:3.87.4.3 Replace File Request Message

The File Source uses this message to replace a file already existing on
the File Manager.

This message is used when there is a prior file that needs to be
preserved, so the existing Binary and Document Reference Resources will
be superseded (i.e., deprecated).

The File Manager is not required to support FHIR resource versioning
(<https://www.hl7.org/fhir/R4/versions.html>).

##### 2:3.87.4.3.1 Trigger Events

The File Source needs to replace a file that exists on the File Manager.

The replace mechanism will be handled by creating a new file and
updating the previous DocumentReference Resource in one message.

##### 2:3.87.4.3.2 Message Semantics

This message uses an HTTP POST to submit a FHIR Bundle that contains the
new Binary and DocumentReference Resources and also the prior
DocumentReference Resource that needs to be replaced.

The Bundle Resource shall contain:

- one Binary Resource representing the new file, valued according to
  [Section 3.87.4.1.2](ITI-87.html#2387412-message-semantics), with the bundle.entry.request.method element set
  to POST

- one DocumentReference Resource with metadata for the new file, where
  the DocumentReference.status shall be set to "current", the
  relatesTo.code shall be set to "replaces", and the relatesTo.target to
  the URL of the previous DocumentReference Resource, and the
  bundle.entry.request.method element set to POST

- one DocumentReference Resource with metadata of the previous file,
  valued as specified in [Section 3.89.4.1.1](ITI-89.html#2389411-trigger-events) with the
  bundle.entry.request.method element set to PUT and the
  DocumentReference.status to "superseded"

##### 2:3.87.4.3.3 Expected Actions

The File Manager shall support all the media-types defined in [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) (currently in the Appendix Z on HL7 FHIR Trial
Implementation Supplement).

On receipt of the Replace File Request, the File Manager shall validate
the Resources and respond with one of the HTTP codes defined in [Section 3.87.4.4.2 Message Semantics](ITI-87.html#2387442-message-semantics).

The File Manager shall process the Bundle atomically.

The File Manager shall store these resources and make the new file
available for further processing, e.g., file update or replacement
\[ITI-87\], file metadata update \[ITI-89\], search \[ITI-88\], and
retrieve \[ITI-109\].

If the File Manager receives a Replace File Request message that
contains resources other than the required ones, it may respond to the
File Source with a failure ([see Section 3.87.4.4.2](ITI-87.html#2387442-message-semantics)).

#### 2:3.87.4.4 Submit File Response Message

The File Manager sends a Submit File Response message in response to a
Create File Request, an Update File Request, or a Replace File Request
Message.

##### 2:3.87.4.4.1 Trigger Events

When the File Manager has finished creating or updating the file and
metadata received from the File Source, the File Manager sends this
message to the File Source acknowledging the result of the create,
update or replace request.

##### 2:3.87.4.4.2 Message Semantics

When the File Manager has processed the request, it shall return an HTTP
response with an overall status code.

The File Manager returns a HTTP status code appropriate to the
processing, conforming to the transaction specification requirements as
specified in <http://hl7.org/fhir/R4/http.html#transaction-response>.

To allow the File Source to know the outcome of processing the
transaction, and the identities assigned to the resources by the File
Manager, the File Manager shall return a Bundle, with type set to
transaction-response, that contains one entry for each entry in the
request, in the same order as received, with the outcome of processing
the entry. Each entry element shall contain a response element with an
HTTP Status Code which details the outcome of processing of the request
entry.

If the operation is a success, the HTTP status code of the response
shall be a 2xx code.

If the operation is a failure, the File Manager shall be capable of
returning the following status code:

- 422 – Unprocessable Entity:

- When the FHIR Resource DocumentReference.type is not supported by the File Manager

- If the Bundle Resource contains resources other than Binary, DocumentReference Resources and the resources referenced by the DocumentReference Resource

The File Manager can return other status codes 4xx or 5xx in accordance
to internal business rules that are out of scope for this transaction.

##### 2:3.87.4.4.3 Expected Actions

The File Source processes the response according to application-defined
rules.

#### 2:3.87.4.5 CapabilityStatement Resource

File Managers implementing this transaction shall provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented.

- Requirements CapabilityStatement for [File Source](CapabilityStatement-IHE.NPFS.FileSource.html)
- Requirements CapabilityStatement for [File Source implementing Update DocumentReference](CapabilityStatement-IHE.NPFS.FileSourceOption.html)
- Requirements CapabilityStatement for [File Manager](CapabilityStatement-IHE.NPFS.FileManager.html)

### 2:3.87.5 Security Considerations

See [NPFS Security Considerations](volume-1.html#1475-npfs-security-considerations).

The files are not Patient specific, but they may have other needs for security controls, such as business knowledge restrictions. Thus the use of Security may be applicable.
Actors involved in this transaction should be aware that even if the
Resources exchanged do not contain PHI or other private information,
actions such creating, updating, or replacing those Resources could
compromise patient care or have other legal ramifications. For general
security considerations, see [ITI TF-2: Appendix Z.8](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations) (currently in the
Appendix Z on HL7 FHIR Trial Implementation Supplement).

#### 2:3.87.5.1 Security Audit Considerations

The File Source, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, shall be able to record a [Submit File Source Audit Event Log](StructureDefinition-IHE.NPFS.SubmitFile.Audit.Source.html).

The File Manager, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, shall be able to record a [Submit File Manager Audit Event Log](StructureDefinition-IHE.NPFS.SubmitFile.Audit.Manager.html).

The File Source and File Manager may also record fundamental AuditEvents for each individual resource Created or Updated, using the [BALP](https://profiles.ihe.net/ITI/BALP/index.html) [basic profile for REST events](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities).


---

// File: input/pagecontent/ITI-88.md

### 2:3.88.1 Scope

The transaction is used by the File Consumer to find DocumentReference
Resources that are stored and managed by a File Manager. The
DocumentReference Resources represent files that are not associated with
patient.

### 2:3.88.2 Actor Roles

<table border="1" borderspacing="0"
    style="border: 1px solid black; border-collapse: collapse">
    <caption style="text-align:left">
        <b> Table 2:3.88.2-1: Actor Roles </b>
    </caption>
    <tbody>
        <tr>
            <td style="padding:3px"><b>Actor:</b></td>
            <td><a href="volume-1.html#147112-file-consumer">File Consumer</a></td>
        </tr>
       <tr>
            <td><b>Role:</b></td>
            <td>Searches for a list of DocumentReference Resources based on a set of search parameters</td>
        </tr>
        <tr>
            <td><b>Actor:</b></td>
            <td><a href="volume-1.html#147111-file-manager">File Manager</a></td>
        </tr>
        <tr>
            <td><b>Role:</b></td>
            <td>Returns a list of DocumentReference Resources that match the search parameters provided</td>
        </tr>
    </tbody>
</table>
<br>

### 2:3.88.3 Referenced Standards

<table border="1" borderspacing="0"
    style="border: 1px solid black; border-collapse: collapse">
    <tbody>
        <tr>
            <td style="padding:3px">HL7 FHIR</td>
            <td><a href="http://hl7.org/fhir/R4/index.html">HL7 FHIR Release 4.0</a></td>
        </tr>
    </tbody>
</table>


### 2:3.88.4 Messages

<div>
{%include ITI-88-seq.svg%}
<p><b>Figure 2:3.88.4-1: Search File Interactions</b></p>
</div>
<br clear="all">


#### 2:3.88.4.1 Search File Request Message

This message is a parametrized HTTP GET that allows a File Consumer to
search for a list of the FHIR DocumentReference Resources managed by the
File Manager, based on a set of search parameters.

##### 2:3.88.4.1.1 Trigger Events

A File Consumer sends this message to the File Manager when it needs to
discover DocumentReference Resources for non-patient-related files.

##### 2:3.88.4.1.2 Message Semantics

The File Consumer executes an HTTP GET against the File Manager. This
request shall comply with requirements specified in the HL7<sup>®</sup>
FHIR<sup>®</sup> standard <http://hl7.org/fhir/R4/http.html#search>.

The search target URL follows the FHIR HTTP specification, addressing
the DocumentReference Resource <http://hl7.org/fhir/R4/http.html>:

> \[base\]/DocumentReference?\[Parameters\]

The Parameters element represents a series of encoded name-value pairs
representing the filter for the query, as specified in [Section 3.88.4.1.2.1](ITI-88.html#23884121-query-search-parameters), as well as control parameters to modify the behavior of
the File Manager such as response format, or pagination.

###### 2:3.88.4.1.2.1 Query Search Parameters

The File Consumer may supply and the File Manager shall support all the
query parameters listed below:

- **identifier**

This parameter, of type token, allows the File Consumer to search on the
logical identifier of the resource.

- **\_id**

  This parameter, of type token, allows the File Consumer to search on
  the logical id assigned to the resource.

- **patient**

This parameter shall always be used in this transaction to find
resources that do not have the patient element valued. To achieve that,
this parameter shall be used with the exists modifier (e.g.,
patient:exists=false).

The File Consumer shall not use the query parameter **subject** with a
reference to a Patient Resource.

- **date**

This parameter, of type date, specifies the time when the file, to which
the DocumentReference refers, was submitted. The File Consumer shall use
the date and interval mechanism described in HL7 FHIR
(<http://hl7.org/fhir/R4/search.html#date>) to indicate a specific date,
or a date that lies within the range specified by the parameter.

- **author.identifier**

This parameter, of type token, specifies the identifier of the author
that has submitted the file. See [ITI TF-2: Appendix Z.2.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2.2-token-parameters) (currently in
the Appendix Z on HL7 FHIR Trial Implementation Supplement) for use of
the token data type.

- **format**

This parameter, of type token, specifies the file’s format.

- **language**

This parameter, of type token, specifies the language of the file.

- **location**

This parameter, of type uri, specifies the URI where the file can be
found.

- **status**

This parameter, of type token, specifies the status of the file.

- **relatesto**

This parameter, of type reference, specifies one or more existing
DocumentReference Resources that have been replaced by the submitted
DocumentReference Resource.

- **relation**

This parameter, of type token**,** specifies the type of relation that
the file being searched has with the targeted file specified in the
relatesTo parameter, see
<http://hl7.org/fhir/R4/valueset-document-relationship-type.html> for
the type of relation allowed.

- **relationship**

This parameter, of type composite, is the combination of the
**relatesTo** and **relation** search parameter.

###### 2:3.88.4.1.2.2 Populating Expected Response Format

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) (currently in the Appendix Z on HL7 FHIR
Trial Implementation Supplement) for details.

##### 2:3.88.4.1.3 Expected Actions

The File Manager shall process the query to discover DocumentReference
Resources that are not associated to any patient and that match the
search parameters. The File Manager shall send a Search File Response
message containing matching results.

The File Manager may return DocumentReference Resources that are not
constrained as specified in [Resource Profile: NPFS DocumentReference](StructureDefinition-IHE.NPFS.DocumentReference.html).

#### 2:3.88.4.2 Search File Response Message

The File Manager returns a HTTP Status code appropriate to the
processing as well as a list of the matching DocumentReference
Resources.

##### 2:3.88.4.2.1 Trigger Events

The File Manager has completed the processing of the Search File Request
message.

##### 2:3.88.4.2.2 Message Semantics

Based on the query results, the File Manager shall either return an
error or success.

Guidance on handling Access Denied related to use of 200, 403 and 404
can be found in [ITI TF- 2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) (currently in the Appendix Z on
HL7 FHIR Trial Implementation Supplement).

When the File Manager needs to report an error, it shall use HTTP error
response codes and should include a FHIR OperationOutcome with more
details on the failure. See FHIR <http://hl7.org/fhir/R4/http.html> and
<http://hl7.org/fhir/R4/operationoutcome.html>.

If the Search File Request message is processed successfully, whether or
not any matching DocumentReference Resources are found, the HTTP status
code shall be 200. The Search File Response message shall be a Bundle
Resource containing zero or more DocumentReference Resources. If the
File Manager is responding with warnings, the Bundle Resource shall also
contain an OperationOutcome Resource that contains those warnings.

The response shall adhere to the FHIR Bundle constraints specified in
[ITI TF-2: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles) (currently in the Appendix Z on HL7 FHIR Trial
Implementation Supplement).

##### 2:3.88.4.2.3 Expected Actions

The File Consumer shall process the results according to
application-defined rules.

If a File Consumer cannot automatically recover from an error condition,
it should, at a minimum, display the error to the user.

#### 2:3.88.4.3 CapabilityStatement Resource

File Managers implementing this transaction shall provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [File Consumer](CapabilityStatement-IHE.NPFS.FileConsumer.html)
- Requirements CapabilityStatement for [File Consumer implementing Retrieve File](CapabilityStatement-IHE.NPFS.FileConsumerOption.html)
- Requirements CapabilityStatement for [File Manager](CapabilityStatement-IHE.NPFS.FileManager.html)

### 2:3.88.5 Security Considerations

See [NPFS Security Considerations](volume-1.html#1475-npfs-security-considerations).

The files are not Patient specific, but they may have other needs for security controls, such as business knowledge restrictions. Thus the use of Security may be applicable.
Actors involved in this transaction should be aware that even if the
Resources exchanged do not contain PHI or other private information,
exchange of those Resources could compromise patient care or have other
legal ramifications. For general security considerations, see [ITI TF-2: Appendix Z.8](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

#### 2:3.88.5.1 Security Audit Considerations

The File Consumer when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor shall be able to record a [Search File Consumer Audit Event Log](StructureDefinition-IHE.NPFS.SearchFile.Audit.Consumer.html).

The File Manager when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor shall be able to record a [Search File Manager Audit Event Log](StructureDefinition-IHE.NPFS.SearchFile.Audit.Manager.html).


---

// File: input/pagecontent/ITI-89.md

### 2:3.89.1 Scope

This transaction allows a File Source to update a DocumentReference
Resource previously submitted. The DocumentReference Resource represents
metadata for a file that is not associated with a patient.

The File Manager is not required to support FHIR resource versioning
(see <https://www.hl7.org/fhir/R4/http.html#history>).

### 2:3.89.2 Actor Roles

<div>
<table border="1" borderspacing="0"
    style="border: 1px solid black; border-collapse: collapse">
    <caption style="text-align:left">
        <b> Table 2:3.89.2-1: Actor Roles </b>
    </caption>
    <tbody>
        <tr>
            <td style="padding:3px"><b>Actor:</b></td>
            <td><a href="volume-1.html#147113-file-source">File Source</a></td>
        </tr>
       <tr>
            <td><b>Role:</b></td>
            <td>Sends an update to an existing DocumentReference Resource.</td>
        </tr>
        <tr>
            <td><b>Actor:</b></td>
            <td><a href="volume-1.html#147111-file-manager">File Manager</a></td>
        </tr>
        <tr>
            <td><b>Role:</b></td>
            <td>Updates and maintains DocumentReference Resources.</td>
        </tr>
    </tbody>
</table>
</div>
<br>

### 2:3.89.3 Referenced Standards

<table border="1" borderspacing="0"
    style="border: 1px solid black; border-collapse: collapse">
    <tbody>
        <tr>
            <td style="padding:3px">HL7 FHIR</td>
            <td><a href="http://hl7.org/fhir/R4/index.html">HL7 FHIR Release 4.0</a></td>
        </tr>
    </tbody>
</table>

### 2:3.89.4 Messages

<div>
{%include ITI-89-seq.svg%}
<p><b>Figure 2:3.89.4-1: Update DocumentReference Interactions</b></p>
</div>
<br clear="all">

#### 2:3.89.4.1 Update DocumentReference Request Message

The File Source uses this message to update a FHIR DocumentReference
Resource already stored on the File Manager.

##### 2:3.89.4.1.1 Trigger Events

The File Source needs to update one DocumentReference Resource managed
in the File Manager.

Prior to sending the update, the File Source shall discover the id of
the existing DocumentReference Resource.

##### 2:3.89.4.1.2 Message Semantics

The File Source shall issue an HTTP request according to requirements
defined in HL7<sup>®</sup> FHIR<sup>®</sup> standard for "update"
interaction (<http://hl7.org/fhir/R4/http.html#update>).

The File Source shall use an HTTP PUT method to submit to the File
Manager a DocumentReference Resource. The DocumentReference Resource
conveys to the File Manager the update to a file’s metadata.

This message shall convey one DocumentReference Resource. The id of the
DocumentReference Resource shall be valued with the id of the
DocumentReference Resource to be updated; see [Resource Profile: NPFS DocumentReference](StructureDefinition-IHE.NPFS.DocumentReference.html) for
other constraints upon the DocumentReference Resource.

The File Source shall submit the DocumentReference Resource in either
XML format or JSON format. Values accepted for media-type of the request
message are defined in the [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) (currently in the
Appendix Z on HL7 FHIR Trial Implementation Supplement).

###### 2:3.89.4.1.2.1 Update DocumentReference Request message example 

For an example of a Update DocumentReference Request see <a href="http://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/DocumentReference-12345.html">Example DocumentReference: DocumentReference for Update</a>.

##### 2:3.89.4.1.3 Expected Actions

The File Manager shall support all the media-type listed in [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) (currently in the Appendix Z on HL7 FHIR Trial
Implementation Supplement).

On receipt of the DocumentReference Update Request, the File Manager
shall validate and update the existing resource and respond with one of
the HTTP codes defined in [Section 3.89.4.2.2 Message Semantics](ITI-89.html#2389422-message-semantics).

#### 2:3.89.4.2 Update DocumentReference Response Message

The File Manager returns a HTTP Status code appropriate to the
processing.

##### 2:3.89.4.2.1 Trigger Events

When the File Manager has updated the DocumentReference Resource, the
File Manager sends this message to the File Source acknowledging the
result of the update request.

##### 2:3.89.4.2.2 Message Semantics

When the File Manager has processed the request, it shall return an HTTP
response with an overall status code.

The File Manager returns a HTTP status code appropriate to the
processing, conforming to the transaction specification requirements as
specified in <https://www.hl7.org/fhir/R4/http.html#update>.

##### 2:3.89.4.2.3 Expected Actions

The File Source processes the results according to application-defined
rules.

#### 2:3.89.4.3 CapabilityStatement Resource

File Managers implementing this transaction shall provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [File Consumer implementing Retrieve File](CapabilityStatement-IHE.NPFS.FileConsumerOption.html)
- Requirements CapabilityStatement for [File Manager](CapabilityStatement-IHE.NPFS.FileManager.html)

### 2:3.89.5 Security Considerations

See [NPFS Security Considerations](volume-1.html#1475-npfs-security-considerations).

The files are not Patient specific, but they may have other needs for security controls, such as business knowledge restrictions. Thus, the use of Security may be applicable.
Actors involved in this transaction should be aware that even if the
Resources exchanged do not contain PHI or other private information,
updating those Resources could compromise patient care or have other
legal ramifications. For general security considerations, see [ITI TF-2: Appendix Z.8](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

#### 2:3.89.5.1 Security Audit Considerations

The File Source when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor shall be able to record a [Update DocumentReference Source Audit Event Log](StructureDefinition-IHE.NPFS.UpdateDocumentReference.Audit.Source.html).

The File Manager when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor shall be able to record a [Update DocumentReference Manager Audit Event Log](StructureDefinition-IHE.NPFS.UpdateDocumentReference.Audit.Manager.html).


---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE profiles or the General Introduction appendices and is not a part of the NPFS Profile. The content here will be incorporated into the target narrative at a future time, usually when NPFS Profile goes normative.
</div>

## IHE Technical Frameworks General Introduction Appendix A: Actors

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}

| Actor                         | Definition                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------|
| none |  |
{:.grid .table-striped}



## IHE Technical Frameworks General Introduction Appendix B: Transactions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                    | Definition                                                                              |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| Retrieve File [ITI-109]        | Allows a File Consumer to retrieve a file |
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

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time.  For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>

## Introduction

NPFS is an API between three actors. The transactions between actors specify semantics of the data exchanged. The NPFS test plan focuses on these semantics and on the expected actions on the actors (File Manager, File Source and File Consumer).

Specific capabilities that different systems are expected to have are defined into CapabilityStatement resources.

## High-level Test Scope

### Submit File [ITI-87] 

- File Source publishes non-patient file
- File Manager receives and responds as appropriate 

### Search File [ITI-88] 

- File Consumer requests query for DocumentReference
- File Manager responds to query as appropriate

### Options

### Update DocumentReference [ITI-89] 

- File Source publishes an updated DocumentReference resource
- File Manager receives and responds as appropriate

### Retrieve File [ITI-109] 

- File Consumer requests query for retrieve file
- File Manager retrieve as appropriate
<div><br></div>

## Unit Test Procedure

Unit Tests in this context is where a SUT is tested against a simulator or validator.  A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Where a reference implementation is used the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

## Integration Test Procedure

Integration Testing in this context is where two SUT of paired actors test against each other. Integration testing is often limited by the capability of the client (Document Source or Document Consumer), which may support only a subset of the semantics required to be supported by the server (Document Recipient or Document Responder). Full message semantics and failure-modes are more thoroughly exercised with unit (conformance) tests.

The tests listed below are defined in [Gazelle Master Model](https://gazelle.ihe.net/GMM) and are performed by systems testing NPFS at IHE Connectathons.

<div markdown="1" class="stu-note">
In the Gazelle platform, there are tests with reference to ITI-68 pending the replacement with ITI-109 that occurred during the conversion of the NPFS profile to IG.
</div>

### File Source --> File Manager Interoperability Tests

- NPFSm_15_Resource_Check_EVS
- NPFSm_20_Create_Upd_File_JSON
- NPFSm_21_Update_Metadata_ITI-89
- NPFSm_20_Create_Upd_File_XML

### File Consumer --> File Manager Interoperability Tests

- NPFSm_31_Read_XML_ITI-68
- NPFSm_31_Read_JSON_ITI-68
- NPFSm_30_Search_XML_ITI-88
- NPFSm_30_Search_JSON_ITI-88




---

// File: input/pagecontent/volume-1.md


The Non-Patient File Sharing Profile defines how to enable sharing of
non-patient files such as clinical workflow definitions, domain
policies, and stylesheets. Those files can be created and consumed by
many different systems involved in a wide variety of data sharing
workflows.

The NPFS Profile describes a mechanism for sharing non-patient files; it
does not require that the actors be able to process the contents of the
files being shared.

The NPFS Profile specifies transactions for the sharing of files. Any
file type can be shared using this profile; however, specific guidance
is given for three types of files:

- Workflow Definitions: files which define the processing rules for a
  specific clinical/administrative workflow (see [ITI TF-1: 30.4.1.1 "XDW Workflow Architecture"](https://profiles.ihe.net/ITI/TF/Volume1/ch-30.html#30.4.1.1))

- Privacy Domain Policies: files which describe a specific privacy
  policy that applies to, or may be agreed to, by a patient (see [ITI TF-1: 19.2 "Creating Patient Privacy Policies"](https://profiles.ihe.net/ITI/TF/Volume1/ch-19.html#19.2))

- Stylesheets: structured documents that can be used by user-agents
  (e.g., Web Browsers) to render the content of an XML document

Local policies may extend the types of files that are being shared using
NPFS and that can be classified using the metadata model described in
this profile.

## 1:47.1 NPFS Actors, Transactions, and Content Modules

This section defines the actors, transactions, and/or content modules in
this profile. General definitions of actors are given in the Technical
Frameworks General Introduction Appendix A at
<https://www.ihe.net/resources/technical_frameworks/#GenIntro>.

Figure 1:47.1-1 shows the actors directly involved in NPFS Profile and the
relevant transactions between them. If needed for context, other actors
that may be indirectly involved due to their participation in other
related profiles are shown in dotted lines. Actors which have a
mandatory grouping are shown in conjoined boxes.

<div>
{%include actorDiagram.svg%}
<p><b>Figure 1:47.1-1: NPFS Actor Diagram</b></p>
</div>

Table 1:47.1-1 lists the transactions for each actor directly involved in the NPFS Profile. To claim
compliance with this profile, an actor shall support all required transactions (labeled "R") and
may support the optional transactions (labeled "O"). 

<div>
<table width="70%" border="1" borderspacing="0"
    style="border: 1px solid black; border-collapse: collapse">
    <caption style="text-align:left">
        <b> Table 1:47.1-1: NPFS Profile - Actors and transactions </b>
    </caption>
    <thead>
        <tr>
            <th style="text-align:center">Actors</th>
            <th style="text-align:center">Transactions</th>
            <th style="text-align:center">Optionality</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="4" style="padding-left:10px">File Manager</td>
            <td style="padding-left:10px"><a href="https://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/ITI-87.html">Submit File [ITI-87]</a></td>
            <td style="text-align:center">R</td>
		</tr>
        <tr>
            <td style="padding-left:10px"><a href="https://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/ITI-88.html">Search File [ITI-88]</a></td>
            <td style="text-align:center">R</td>
		</tr>
		<tr>
            <td style="padding-left:10px"><a href="https://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/ITI-109.html">Retrieve File [ITI-109]</a></td>
            <td style="text-align:center">R</td>
		</tr>
		<tr>
            <td style="padding-left:10px"><a href="https://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/ITI-89.html">Update DocumentReference [ITI-89]</a></td>
            <td style="text-align:center">R</td>
		</tr>
		<tr>
            <td rowspan="2" style="padding-left:10px">File Consumer</td>
            <td style="padding-left:10px"><a href="https://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/ITI-88.html">Search File [ITI-88]</a></td>
            <td style="text-align:center">R</td>
		</tr>
		<tr>
            <td style="padding-left:10px"><a href="https://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/ITI-109.html">Retrieve File [ITI-109]</a></td>
            <td style="text-align:center">O</td>
		</tr>
		<tr>
            <td rowspan="2" style="padding-left:10px">File Source</td>
            <td style="padding-left:10px"><a href="https://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/ITI-87.html">Submit File [ITI-87]</a></td>
            <td style="text-align:center">R</td>
		</tr>
		<tr>
            <td style="padding-left:10px"><a href="https://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/ITI-89.html">Update DocumentReference [ITI-89]</a></td>
            <td style="text-align:center">O</td>
		</tr>
    </tbody>
</table>
</div>
<br>

### 1:47.1.1 Actor Descriptions and Actor Profile Requirements

Most requirements are documented in transactions (Volume 2) and Content
Modules (Volume 3). This section documents any additional requirements
on profile’s actors.

#### 1:47.1.1.1 File Manager

The File Manager stores files provided by the File Source and maintains
related metadata. The File Manager responds to search and retrieve
requests initiated by the File Consumer. The File Manager responds to
metadata update requests initiated by the File Source.

#### 1:47.1.1.2 File Consumer 

The File Consumer queries for file metadata meeting certain criteria,
and may retrieve selected files.

#### 1:47.1.1.3 File Source 

The File Source publishes and updates files produced by either the File
Source or by other systems. It is responsible for sending files and
related metadata to a File Manager. The File Source can send metadata
update requests to the File Manager.

## 1:47.2 NPFS Actor Options

Options that may be selected for each actor in this profile, if any, are
listed in Table 1:47.2-1. Dependencies between options when applicable are
specified in notes.

<div>
<table width="50%" border="1" borderspacing="0"
    style="border: 1px solid black; border-collapse: collapse">
    <caption style="text-align:left">
        <b> Table 1:47.2-1: Not-patient File Sharing - Actors and Options </b>
    </caption>
    <thead>
        <tr>
            <th style="text-align:center">Actors</th>
            <th style="text-align:center">Option Name</th>
            <th style="text-align:center">Reference</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding-left:10px">File Manager</td>
            <td style="padding-left:10px">No options defined</td>
            <td style="padding-left:10px">--</td>
        </tr>
        <tr>
            <td style="padding-left:10px">File Consumer</td>
            <td style="padding-left:10px">File Retrieve</td>
            <td style="padding-left:10px">Section 47.2.1</td>
        </tr>
        <tr>
            <td style="padding-left:10px">File Source</td>
            <td style="padding-left:10px">Update File Metadata</td>
            <td style="padding-left:10px">Section 47.2.2</td>
        </tr>
    </tbody>
</table>
</div>
<br>

### 1:47.2.1 File Retrieve Option

The File Retrieve Option enables a File Consumer to retrieve a file
stored/managed by the File Manager.

A File Consumer that supports the File Retrieve Option shall support the
Retrieve File \[ITI-109\] transaction.

### 1:47.2.2 Update File Metadata Option

The Update File Metadata Option enables a File Source to update the
metadata of a file stored/managed by the File Manager.

A File Source that supports the Update File Metadata Option shall
support the Update DocumentReference \[ITI-89\] transaction.

## 1:47.3 NPFS Required Actor Groupings 

This profile does not mandate the grouping with other actors.

## 1:47.4 NPFS Overview

### 1:47.4.1 Concepts – distinguishing files from documents

The NPFS Profile uses the term "**file**" to mark a clear distinction
from the IHE Document Sharing profiles.

A "**file**" represents a collection of information stored on a computer
as one unit. For the purposes of this profile, a file is not
patient-related, as it does not contain patient health identifying
information. It may contain other sensitive information.

Other IHE profiles are used to share (using different sharing paradigms)
information related to patients. In IHE terminology, such
patient-specific content is a "**document**."

### 1:47.4.2 Use Cases

#### 1:47.4.2.1 Use Case \#1: Manage Stylesheets

A technician creates a stylesheet to render the XML of
CDA<sup>®</sup> Laboratory Reports produced in all the Laboratory
Information System (LIS) involved in the Healthcare Information Exchange
(HIE). The technician wants to make the stylesheet available to all the
LISs involved in the HIE so that they can search for the stylesheet and
reference it as an XSL transformation of the Laboratory Report.

##### 1:47.4.2.1.1 Manage Stylesheets - Use Case Description

A Healthcare Organization desires to use a stylesheet for uniform
rendering of XML Laboratory Reports produced within the organization.
Mr. Black, a technician of the Healthcare Organization, creates the
stylesheet. Then Mr. Black uses his File Source to publish the
stylesheet file into a system that manages non-patient files (File
Manager) using the Submit File \[ITI-87\] transaction. Now the
stylesheet will be available to all the LISs involved in the
organization.

A Laboratory Information System, according to the HIE policy, should be
able to identify the stylesheet that can be used to render the CDA
document.

Mrs. White uses the LIS to retrieve a patient’s CDA R2 Lab Report
document from the HIE. The LIS also issues a query using the Search File
\[ITI-88\] transaction, to search for a stylesheet file published by the
HIE Organization, in order to discover the resource URL of the
stylesheet applicable to the Laboratory Reports. This URL is used to
reference it as an XSL transformation of the Laboratory Report.

##### 1:47.4.2.1.2 Stylesheet’s Management Process Flow

- The Health Information System acting as a File Source issues a Submit
  File \[ITI-87\] transaction to the File Manager to submit the
  stylesheet

- The LIS acting as a File Consumer issues a Search File \[ITI-88\]
  transaction to the File Manager, using the class parameter to search
  for stylesheets, and the author.identifier parameter to search for the
  organization that submitted the file. The query response contains the
  URL of the stylesheet, that will be retrieved using a Retrieve
  File \[ITI-109\] transaction.

<div>
{%include useCase1.svg%}
<p><b>Figure 1:47.4.2.1.2-1: Basic Process Flow in NPFS Profile for Stylesheets Management</b></p>
</div>

#### 1:47.4.2.2 Use Case \#2: Replace Privacy Policies 

In this use case, the hospital’s privacy office creates files that
describe the Privacy Policies that the patient can agree to. When a
patient is admitted, the admitting nurse uses a NPFS File Consumer to
search the File Manager for the current Privacy Policy files available.

Then, when the patient selects a Privacy Policy, the nurse uses a Basic
Patient Privacy Consent (BPPC) Content Creator Actor (see [ITI TF-1: 19](https://profiles.ihe.net/ITI/TF/Volume1/ch-19.html#19))
to create the patient’s Privacy Policy Consent document for the patient.

##### 1:47.4.2.2.1 Replace Privacy Policies - Use Case Description

A hospital’s privacy office defines a set of Privacy Policies that a
patient can agree to. Mr. Blue, a hospital privacy office employee,
creates a Privacy Policy file using the HIS. Using a Submit File
\[ITI-87\] transaction, the application makes the file available to all
the systems involved in his organization.

Mrs. Black, a nurse of the Goodcare Hospital, wants to search for the
current valid Privacy Policy files that the admitting patient can agree
to. She uses a combined BPPC Content Creator and NPFS File Consumer to
issue a query, a Search File \[ITI-88\] transaction, to search for the
current valid Privacy Policy files and retrieve them. One of the
retrieved Privacy Policy files is used, by the BPPC Content Creator, to
create the Privacy Policy Consent document that the patient can read and
agree to.

Later, a legal health officer informs the Goodcare Hospital that one of
the Privacy Policies has changed. Mr. Blue searches to discover the
Privacy Policy file and its related metadata (including FHIR resource
ids). He thus needs to replace the Privacy Policy file and uses an HIS
to perform the Submit File \[ITI-87\] to replace the Privacy Policy by
submitting a new one (linked to the original file via a replacement
association, using the relatesTo parameter) and updating metadata for
the previous Privacy Policy, changing its status to "superseded".

This use case is different than Use Case \#3 because here the original
Privacy Policy file needs to be preserved (i.e., it is not overwritten).

##### 1:47.4.2.2.2 Privacy Domain Policies Process Flow

- The Health Information System, acting as a File Source, issues a
  Submit File \[ITI-87\] (create) transaction to the File Manager to
  submit the original Privacy Policy file and metadata.

- The HIS, acting as a File Consumer, issues a Search File \[ITI-88\]
  transaction to the File Manager. The File Consumer uses the class
  parameter and the status parameter to search for the metadata (i.e.,
  DocumentReference Resources) for current Privacy Policy files. Once
  the DocumentReference Resource is found, the File Consumer issues a
  Retrieve File \[ITI-109\] transaction to the File Manager to
  retrieve the file.

- The HIS, acting as a File Source, issues a Submit File \[ITI-87\]
  (replace) transaction to the File Manager to submit the new Privacy
  Policy file and metadata, and update the metadata of the replaced file
  to "superseded" (deprecated). (The new DocumentReference Resource is
  linked to the previous one via a replacement relationship, using the
  relatesTo parameter; see <a href="http://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/ITI-87.html#2387432-message-semantics">ITI TF-2: 3.87.4.3.2)

<div>
{%include useCase2.svg%}
<p><b>Figure 1:47.4.2.2.2-1: Basic Process Flow in NPFS Profile for Privacy Policies management</b></p>
</div>

##### 1:47.4.2.3.1 Manage change to Workflow Definitions - Use Case Description

An HIE decides to design the eReferral Process for all the participants
involved in that workflow. Mr. Smith, a technician at Goodcare Hospital,
records the process in a BPMN Workflow Definition file, and makes it
available using the Submit File \[ITI-87\] transaction.

Dr. Jones, a specialist, uses her HIS to query for the BPMN Workflow
Definition file produced by Goodcare Hospital related to eReferral
workflow, using a Search File \[ITI-88\] transaction. The previously
submitted Workflow Definition file is found and retrieved, and Dr. Jones
can identify the next steps in the eReferral process.

Later the HIE decides that the Workflow Definition file submitted is no
longer valid and wants to use a new Workflow Definition file, so it
updates the previous file using the Submit File \[ITI-87\] transaction.

This use case is different than Use Case \#2 because here the original
Workflow Definition file does not need to be preserved so it is, in
effect, overwritten.

##### 1:47.4.2.3.2 Workflow Definitions Process Flow

- The Health Information System acting as a File Source issues a Submit
  File \[ITI-87\] (create) transaction to the File Manager to submit the
  original Workflow Definition file.

- Later, to find the Workflow Definition in order to update it, the HIS
  acting as a File Consumer issues a Search File \[ITI-88\] transaction
  to the File Manage. The File Consumer uses the class parameter and the
  type parameter to search for Workflow Definitions related to eReferral
  workflow. Once the Document Reference Resource is found, the HIS
  issues a Retrieve File \[ITI-109\] transaction to the File Manager
  to retrieve it.

- The Health Information System, acting as a File Source, issues a
  Submit File \[ITI-87\] (update) to the File Manager to make available
  the newer Workflow Definition file and metadata (updating the previous
  resources on the File Manager).

<div>
{%include useCase3.svg%}
<p><b>Figure 1:47.4.2.3.2-1: Basic Process Flow in NPFS Profile for Workflow Definition Documents management</b></p>
</div>

#### 1:47.4.2.4 Use Case \#4: Update of file’s ownership 

A technician creates a stylesheet to render the XML documents produced
by document producers belonging to Hospital Hope. After some time, the
same stylesheet also needs to be made accessible to Hospital Peace. In
order to accomplish this task, the technician updates metadata that
describe the file in order to extend the ownership also to Hospital
Peace.

##### 1:47.4.2.4.1 Update of file’s ownership - Use Case Description

Hospital Hope desires uniform rendering of XML documents produced within
the organization, so it creates a stylesheet file. Mr. Black, a
technician of the Hospital Hope, creates the stylesheet. Then Mr. Black
uses his File Source to publish the stylesheet file into a system that
manages non-patient files (File Manager) using the Submit File
\[ITI-87\] transaction. Now the stylesheet will be available to document
producers belonging to Hospital Hope. According to the local policies,
the technician needs to extend the ownership of this file also to
Hospital Peace. In order to do that, Mr. Black executes an update of the
DocumentReference associated with the stylesheet using the Update
DocumentReference \[ITI-89\] transaction. Now the stylesheet’s
DocumentReference reflects the ownership of Hospital Hope and Hospital
Peace.

##### 1:47.4.2.4.2 Update of file’s ownership Process Flow

- The Health Information System acting as a File Source issues a Submit
  File \[ITI-87\] (create) transaction to the File Manager to submit the
  stylesheet

- The Health Information System acting as a File Source issues an Update
  DocumentReference \[ITI-89\] transaction to the File Manager to modify
  the DocumentReference.author list.

<div>
{%include useCase4.svg%}
<p><b>Figure 1:47.4.2.4.2-1: Basic Process Flow in NPFS Profile for Update of file’s ownership</b></p>
</div>

## 1:47.5 NPFS Security Considerations

Non-patient files do not contain Patient Health Information (PHI), but
they may contain other sensitive information such as physician reviews,
work schedules, etc. In addition, those files can be used in conjunction
with patient-related documents in order to satisfy clinical data
consuming/sharing workflows. The reader should know that mistakes will
be made, and these files may convey private information.

Although this profile does not require actors to audit the transactions
that exchange non-patient files, grouping with an [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or
Secure Application is strongly encouraged in order to track file and
metadata creation and update.
For further considerations about Audit record refer to [BALP profile](https://profiles.ihe.net/ITI/BALP/).

User authentication/authorization represents another important factor to
consider in order to avoid malicious creation/updating of files.
Grouping NPFS actors with actors in the Internet User Authorization
(IUA) Profile enables deployments to mitigate these security issues.

## 1:47.6 NPFS Cross Profile Considerations

None.



---

// File: input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: LOINC = http://loinc.org
Alias: DCM = http://dicom.nema.org/resources/ontology/DCM


---

// File: input/fsh/Audit.fsh

Profile:        AuditSearchFileConsumer
Parent:         IHE.BasicAudit.Query
Id:             IHE.NPFS.SearchFile.Audit.Consumer
Title:          "Audit Event for Search File Transaction by the File Consumer"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Search File Transaction happens, as recorded by the File Consumer.
- Build off of the IHE BasicAudit Query event
- add the ITI-88 as a subtype
- client is File Consumer
- server is File Manager
- entity slices for query
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti88 1..1
* subtype[iti88] = urn:ihe:event-type-code#ITI-88 "Search File"
* agent[client] obeys val-audit-source
* agent[client] ^short = "File Consumer"
* agent[server] ^short = "File Manager"
* entity[query] ^short = "Search Parameters"





Profile:        AuditSearchFileManager
Parent:         IHE.BasicAudit.Query
Id:             IHE.NPFS.SearchFile.Audit.Manager
Title:          "Audit Event for Search File Transaction at File Manager"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Search File Transaction happens, as recorded by the File Manager.
- Build off of the IHE BasicAudit Query event
- add the ITI-88 as a subtype
- client is File Consumer
- server is File Manager
- entity slices for query
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti88 1..1
* subtype[iti88] = urn:ihe:event-type-code#ITI-88 "Search File"
* agent[server] obeys val-audit-source
* agent[client] ^short = "File Consumer"
* agent[server] ^short = "File Manager"
* entity[query] ^short = "Search Parameters"





Profile:        AuditUpdateDocumentReferenceSource
Parent:         IHE.BasicAudit.Update
Id:             IHE.NPFS.UpdateDocumentReference.Audit.Source
Title:          "Audit Event for Update DocumentReference Transaction at File Source"
Description:    """
Defines constraints on the File Source AuditEvent Resource to record when an Update DocumentReference Transaction happens, as recorded by the File Source.
- Build off of the IHE BasicAudit Update event
- add the ITI-89 as a subtype
- client is File Source
- server is File Manager
- entity slices for the DocumentReference reference
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti89 1..1
* subtype[iti89] = urn:ihe:event-type-code#ITI-89 "Update DocumentReference"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* agent[client] obeys val-audit-source
* agent[client] ^short = "File Source"
* agent[server] ^short = "File Manager"
* entity[data] ^short = "the DocumentReference reference"






Profile:        AuditUpdateDocumentReferenceManager
Parent:         IHE.BasicAudit.Update
Id:             IHE.NPFS.UpdateDocumentReference.Audit.Manager
Title:          "Audit Event for Update DocumentReference Transaction at the File Manager"
Description:    """
Defines constraints on the File Manager AuditEvent Resource to record when a Update DocumentReference Transaction happens, as recorded by the File Manager.
- Build off of the IHE BasicAudit PatientRead event
- add the ITI-89 as a subtype
- client is File Source
- server is File Manager
- entity slices for DocumentReference reference
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti89 1..1
* subtype[iti89] = urn:ihe:event-type-code#ITI-89 "Update DocumentReference"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* agent[server] obeys val-audit-source
* agent[client] ^short = "File Source"
* agent[server] ^short = "File Manager"
* entity[data] ^short = "the DocumentReference reference"





Profile:        AuditRetrieveFileConsumer
Parent:         IHE.BasicAudit.Read
Id:             IHE.NPFS.RetrieveFile.Audit.Consumer
Title:          "Audit Event for Retrieve File Transaction at File Consumer"
Description:    """
Defines constraints on the File Consumer AuditEvent Resource to record when a Retrieve File Transaction happens, as recorded by the File Consumer.
- Build off of the IHE BasicAudit Read event
- add the ITI-109 as a subtype
- client is File Consumer
- server is File Manager
- entity slices for data
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti109 1..1
* subtype[iti109] = urn:ihe:event-type-code#ITI-109 "Retrieve File"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* agent[client] obeys val-audit-source
* agent[client] ^short = "File Consumer"
* agent[server] ^short = "File Manager"
* entity[data] ^short = "the data"






Profile:        AuditRetrieveFileManager
Parent:         IHE.BasicAudit.Read
Id:             IHE.NPFS.RetrieveFile.Audit.Manager
Title:          "Audit Event for Retrieve File Transaction at the File Manager"
Description:    """
Defines constraints on the File Manager AuditEvent Resource to record when a Retrieve File Transaction happens, as recorded by the File Manager.
- Build off of the IHE BasicAudit Read event
- add the ITI-109 as a subtype
- client is File Consumer
- server is File Manager
- entity slices for data
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti109 1..1
* subtype[iti109] = urn:ihe:event-type-code#ITI-109 "Retrieve File"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* agent[server] obeys val-audit-source
* agent[client] ^short = "File Consumer"
* agent[server] ^short = "File Manager"
* entity[data] ^short = "the data"






Profile:        AuditSubmitFileManager
Parent:         AuditEvent
Id:             IHE.NPFS.SubmitFile.Audit.Manager
Title:          "Audit Event for Submit File Transaction at Manager"
Description:    "Defines constraints on the AuditEvent Resource to record when a Submit File Transaction happens at the Manager.
- Import event
- shall have source of itself
- shall have a File Source agent
- shall have a File Manager agent
- may have user, app, organization agent(s)
- shall have a DocumentReference identity entity"
* modifierExtension 0..0
* type = DCM#110107 "Import"
* action = #C
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains iti87 1..1
* subtype[iti87] = urn:ihe:event-type-code#ITI-87 "Submit File"
// * severity in R5
* recorded 1..1 // already required
* outcome 1..1
* outcomeDesc MS // encouraged
// source is already required, see invariant val-audit-source use
* agent 2..*
* agent ^slicing.discriminator.type = #pattern
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent ^slicing.description = "Source, Manager, and possibly the user who participated"
* agent contains 
	fileSource 1..1 and
	fileManager 1..1 
	// may be many including app identity, user identity, etc
* agent[fileSource].type = DCM#110153 "Source Role ID"
* agent[fileSource].who 1..1
* agent[fileSource].network 1..1
* agent[fileManager].type = DCM#110152 "Destination Role ID"
* agent[fileManager].who 1..1
* agent[fileManager] obeys val-audit-source
* agent[fileManager].network 1..1
* agent[fileSource] ^short = "File Source"
* agent[fileManager] ^short = "File Manager"
* entity 1..1
* entity ^slicing.discriminator.type = #pattern
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #closed
* entity ^slicing.description = "DocumentReference involved"
* entity contains
	docRef 1..1
* entity[docRef].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[docRef].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[docRef].what 1..1
* entity[docRef].what only Reference(DocumentReference) 
* entity[docRef] ^short = "docRef"

Invariant: val-audit-source
Description: "The Audit Source is this agent too."
Expression: "$this.who = %resource.source.observer"
Severity: #error

Profile:        AuditSubmitFileSource
Parent:         AuditEvent
Id:             IHE.NPFS.SubmitFile.Audit.Source
Title:          "Audit Event for Submit File Transaction at Source"
Description:    "Defines constraints on the AuditEvent Resource to record when a Submit File Transaction happens at the Source.
- Export event
- shall have source of itself
- shall have a File Source agent
- shall have a File Manager agent
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have a submission set identity entity"
* modifierExtension 0..0
* type = DCM#110106 "Export"
* action = #R
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains iti87 1..1
* subtype[iti87] = urn:ihe:event-type-code#ITI-87 "Submit File"
// * severity in R5
* recorded 1..1 // already required
* outcome 1..1
* outcomeDesc MS // encouraged
// source is already required, see invariant val-audit-source use
* agent 2..*
* agent ^slicing.discriminator.type = #pattern
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent ^slicing.description = "Source, Manager, and possibly the user who participated"
* agent contains 
	fileSource 1..1 and
	fileManager 1..1 
	// may be many including app identity, user identity, etc
* agent[fileSource].type = DCM#110153 "Source Role ID"
* agent[fileSource].who 1..1
* agent[fileSource] obeys val-audit-source
* agent[fileSource].network 1..1
* agent[fileManager].type = DCM#110152 "Destination Role ID"
* agent[fileManager].who 1..1
* agent[fileManager].network 1..1
* agent[fileSource] ^short = "File Source"
* agent[fileManager] ^short = "File Manager"
* entity 1..1
* entity ^slicing.discriminator.type = #pattern
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #closed
* entity ^slicing.description = "documentReference involved"
* entity contains
	docRef 1..1
* entity[docRef].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[docRef].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[docRef].what 1..1
* entity[docRef].what only Reference(DocumentReference) 
* entity[docRef] ^short = "documentReference"



---

// File: input/fsh/Bundle.fsh

Profile:        NPFSCreateDocumentBundle
Parent:         Bundle
Id:             IHE.NPFS.CreateDocumentBundle
Title:          "NPFS Create Document Bundle"
Description:    "A profile on the Bundle transaction for ITI-87 Submit File used to submit a new file and related metadata
  - shall be a Transaction Bundle
  - all resources shall be compliant with constraints
  - may create one [DocumentReference](StructureDefinition-IHE.NPFS.DocumentReference.html)
    - with a document as a [Binary](http://hl7.org/fhir/R4/binary.html)"

* type = #transaction
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #closed
* entry ^slicing.description = "Slicing based on the profile conformance of the entry"
* entry and entry.resource MS

* entry contains 
    DocumenReference 1..1 and
    Documents 1..1
* entry[DocumenReference].resource only 
    IHE.NPFS.DocumentReference 
* entry[DocumenReference] ^short = "the DocumentReference resource"
* entry[DocumenReference] ^definition = "any new DocumentReference"
* entry[DocumenReference].resource 1..1
* entry[DocumenReference].request 1..1
* entry[DocumenReference].request.method = #POST

* entry[Documents].resource ^type.code = "Binary"
* entry[Documents].resource ^type.profile = Canonical(Binary)
* entry[Documents] ^short = "the Document"
* entry[Documents] ^definition = "the Document referenced by the DocumentReference resource"
* entry[Documents].resource 1..1
* entry[Documents].request 1..1
* entry[Documents].request.method = #POST


Profile:        NPFSUpdateDocumentBundle
Parent:         Bundle
Id:             IHE.NPFS.UpdateDocumentBundle
Title:          "NPFS Update Document Bundle"
Description:    "A profile on the Bundle transaction for ITI-87 Submit File used to update a file and related metadata
  - shall be a Transaction Bundle
  - all resources shall be compliant with constraints
  - may update one [DocumentReference](StructureDefinition-IHE.NPFS.DocumentReference.html)
    - with a document as a [Binary](http://hl7.org/fhir/R4/binary.html)"

* type = #transaction
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #closed
* entry ^slicing.description = "Slicing based on the profile conformance of the entry"
* entry and entry.resource MS

* entry contains 
    DocumenReference 1..1 and
    Documents 1..1
* entry[DocumenReference].resource only 
    IHE.NPFS.DocumentReference 
* entry[DocumenReference] ^short = "the DocumentReference resource"
* entry[DocumenReference] ^definition = "any new DocumentReference"
* entry[DocumenReference].resource 1..1
* entry[DocumenReference].request 1..1
* entry[DocumenReference].request.method = #PUT

* entry[Documents].resource ^type.code = "Binary"
* entry[Documents].resource ^type.profile = Canonical(Binary)
* entry[Documents] ^short = "the Document"
* entry[Documents] ^definition = "the Document referenced by the DocumentReference resource"
* entry[Documents].resource 1..1
* entry[Documents].request 1..1
* entry[Documents].request.method = #PUT


Profile:        NPFSReplaceDocumentBundle
Parent:         Bundle
Id:             IHE.NPFS.ReplaceDocumentBundle
Title:          "NPFS Replace Document Bundle"
Description:    "A profile on the Bundle transaction for ITI-87 Submit File used to replace a file and related metadata
  - shall be a Transaction Bundle
  - all resources shall be compliant with constraints
  - may replace one [DocumentReference](StructureDefinition-IHE.NPFS.DocumentReference.html)
    - with a document as a [Binary](http://hl7.org/fhir/R4/binary.html)"

* type = #transaction
* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[0].path = "resource"
* entry ^slicing.discriminator[1].type = #value
* entry ^slicing.discriminator[1].path = "request.method"
* entry ^slicing.rules = #closed
* entry ^slicing.description = "Slicing based on the profile conformance of the entry"
* entry and entry.resource MS

* entry contains 
    NewDocumenReference 1..1 and
    OldDocumenReference 1..1 and
    Documents 1..1
* entry[OldDocumenReference].resource only 
    IHE.NPFS.DocumentReference
* entry[OldDocumenReference] ^short = "the DocumentReference resource with metadata of the previous file"
* entry[OldDocumenReference] ^definition = "DocumentReference of the previous file"
* entry[OldDocumenReference].resource 1..1
* entry[OldDocumenReference].request 1..1
* entry[OldDocumenReference].request.method = #PUT

* entry[NewDocumenReference].resource only 
    IHE.NPFS.DocumentReference 
* entry[NewDocumenReference] ^short = "the DocumentReference resource with metadata of the new file"
* entry[NewDocumenReference] ^definition = "DocumentReference of the new file"
* entry[NewDocumenReference].resource 1..1
* entry[NewDocumenReference].request 1..1
* entry[NewDocumenReference].request.method = #POST

* entry[Documents].resource ^type.code = "Binary"
* entry[Documents].resource ^type.profile = Canonical(Binary)
* entry[Documents] ^short = "the Document"
* entry[Documents] ^definition = "the Document referenced by the DocumentReference resource"
* entry[Documents].resource 1..1
* entry[Documents].request 1..1
* entry[Documents].request.method = #POST

---

// File: input/fsh/capability.fsh

Instance: IHE.NPFS.FileConsumer
InstanceOf: CapabilityStatement
Title: "File Consumer (client)"
Usage: #definition
* description = "IHE ITI Non-patient File Sharing (NPFS) - File Consumer (client)"
* url = "https://profiles.ihe.net/ITI/NPFS/CapabilityStatement/IHE.NPFS.FileConsumer"
* name = "IHE_NPFS_FileConsumer"
* title = "File Consumer (client)"
* status = #active
* experimental = false
* date = "2022-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "CapabilityStatement for File Consumer"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #DocumentReference
    * profile = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.DocumentReference"
    * interaction[+].code = #read
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #token
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "identifier"
      * type = #token
      * documentation = "Logical identifier of this artifact"
    * searchParam[+]
      * name = "patient:exists"
      * type = #token
      * documentation = "This parameter shall always be used in this transaction to find resources that do not have the patient element valued"
    * searchParam[+]
      * name = "date"
      * type = #date
      * documentation = "when the file, to which the DocumentReference refers, was submitted"
    * searchParam[+]
      * name = "author.identifier"
      * type = #token
      * documentation = "The author that has submitted the file"
    * searchParam[+]
      * name = "format"
      * type = #token
      * documentation = "File's format"
    * searchParam[+]
      * name = "language"
      * type = #token
      * documentation = "The language of the file"
    * searchParam[+]
      * name = "location"
      * type = #uri
      * documentation = "Where the file can be found"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The status of the file"
    * searchParam[+]
      * name = "relatesto"
      * type = #reference
      * documentation = "One or more existing DocumentReference Resources that have been replaced by the submitted DocumentReference Resource"
    * searchParam[+]
      * name = "relation"
      * type = #token
      * documentation = "The type of relation that the file being searched has with the targeted file specified in the relatesTo parameter"
    * searchParam[+]
      * name = "relationship"
      * type = #composite
      * documentation = "The combination of the relatesTo and relation search parameter."
  * interaction.code = #search-system


Instance: IHE.NPFS.FileConsumerOption
InstanceOf: CapabilityStatement
Title: "File Consumer (client) implementing Retrieve File"
Usage: #definition
* description = "IHE ITI Non-patient File Sharing (NPFS) - File Consumer (client) - with ITI-109 Retrieve File"
* url = "https://profiles.ihe.net/ITI/NPFS/CapabilityStatement/IHE.NPFS.FileConsumerOption"
* name = "IHE_NPFS_FileConsumerOption"
* title = "File Consumer (client) implementing Retrieve Document"
* status = #active
* experimental = false
* date = "2022-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "CapabilityStatement for File Consumer implementing Retrieve Document"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #DocumentReference
    * profile = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.DocumentReference"
    * interaction[+].code = #read
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #token
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "identifier"
      * type = #token
      * documentation = "Logical identifier of this artifact"
    * searchParam[+]
      * name = "patient"
      * type = #token
      * documentation = "This parameter shall always be used in this transaction to find resources that do not have the patient element valued, e.g., patient:missing=true"
    * searchParam[+]
      * name = "date"
      * type = #date
      * documentation = "when the file, to which the DocumentReference refers, was submitted"
    * searchParam[+]
      * name = "author.identifier"
      * type = #token
      * documentation = "The author that has submitted the file"
    * searchParam[+]
      * name = "format"
      * type = #token
      * documentation = "File's format"
    * searchParam[+]
      * name = "language"
      * type = #token
      * documentation = "The language of the file"
    * searchParam[+]
      * name = "location"
      * type = #uri
      * documentation = "Where the file can be found"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The status of the file"
    * searchParam[+]
      * name = "relatesto"
      * type = #reference
      * documentation = "One or more existing DocumentReference Resources that have been replaced by the submitted DocumentReference Resource"
    * searchParam[+]
      * name = "relation"
      * type = #token
      * documentation = "The type of relation that the file being searched has with the targeted file specified in the relatesTo parameter"
    * searchParam[+]
      * name = "relationship"
      * type = #composite
      * documentation = "The combination of the relatesTo and relation search parameter."
  * resource[+]
    * type = #Binary
    * interaction[+].code = #read
  * interaction.code = #search-system

Instance: IHE.NPFS.FileSource
InstanceOf: CapabilityStatement
Title: "File Source (client)"
Usage: #definition
* description = "IHE ITI Non-patient File Sharing (NPFS) - File Source (client)"
* url = "https://profiles.ihe.net/ITI/NPFS/CapabilityStatement/IHE.NPFS.FileSource"
* name = "IHE_NPFS_FileSource"
* title = "File Source (client)"
* status = #active
* experimental = false
* date = "2022-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "CapabilityStatement for File Source"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.CreateDocumentBundle"
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.UpdateDocumentBundle"
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.ReplaceDocumentBundle"

Instance: IHE.NPFS.FileSourceOption
InstanceOf: CapabilityStatement
Title: "File Source (client) implementing Update DocumentReference"
Usage: #definition
* description = "IHE ITI Non-patient File Sharing (NPFS) - File Source (client) - with ITI-89 Update DocumentReference"
* url = "https://profiles.ihe.net/ITI/NPFS/CapabilityStatement/IHE.NPFS.FileSourceOption"
* name = "IHE_NPFS_FileSource"
* title = "File Source (client) implementing Update DocumentReference"
* status = #active
* experimental = false
* date = "2022-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "CapabilityStatement for File Source implementing Update DocumentReference"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.CreateDocumentBundle"
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.UpdateDocumentBundle"
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.ReplaceDocumentBundle"
  * resource[+]
    * type = #DocumentReference
    * profile = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.DocumentReference"
    * interaction[+]
      * code = #update

Instance: IHE.NPFS.FileManager
InstanceOf: CapabilityStatement
Title: "File Manager (server)"
Usage: #definition
* description = "IHE ITI Non-patient File Sharing (NPFS) - File Manager (server)"
* url = "https://profiles.ihe.net/ITI/NPFS/CapabilityStatement/IHE.NPFS.FileManager"
* name = "IHE_NPFS_FileManager"
* title = "File Manager (server)"
* status = #active
* experimental = false
* date = "2022-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "CapabilityStatement for File Manager"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #DocumentReference
    * profile = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.DocumentReference"
    * interaction[+].code = #read
    * interaction[+].code = #search-type
    * interaction[+].code = #update
    * interaction[+].code = #create
    * searchParam[+]
      * name = "_id"
      * type = #token
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "identifier"
      * type = #token
      * documentation = "Logical identifier of this artifact"
    * searchParam[+]
      * name = "patient:exists"
      * type = #token
      * documentation = "This parameter shall always be used in this transaction to find resources that do not have the patient element valued"
    * searchParam[+]
      * name = "date"
      * type = #date
      * documentation = "when the file, to which the DocumentReference refers, was submitted"
    * searchParam[+]
      * name = "author.identifier"
      * type = #token
      * documentation = "The author that has submitted the file"
    * searchParam[+]
      * name = "format"
      * type = #token
      * documentation = "File's format"
    * searchParam[+]
      * name = "language"
      * type = #token
      * documentation = "The language of the file"
    * searchParam[+]
      * name = "location"
      * type = #uri
      * documentation = "Where the file can be found"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The status of the file"
    * searchParam[+]
      * name = "relatesto"
      * type = #reference
      * documentation = "One or more existing DocumentReference Resources that have been replaced by the submitted DocumentReference Resource"
    * searchParam[+]
      * name = "relation"
      * type = #token
      * documentation = "The type of relation that the file being searched has with the targeted file specified in the relatesTo parameter"
    * searchParam[+]
      * name = "relationship"
      * type = #composite
      * documentation = "The combination of the relatesTo and relation search parameter."
  * resource[+]
    * type = #Binary
    * interaction[+].code = #read
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/NPFS/StructureDefinition/IHE.NPFS.FileSource"
  * interaction[+]
    * code = #search-system
/*
Instance: IHE.ToDo.server
InstanceOf: CapabilityStatement
Title: "ToDo Server Actor"
Usage: #definition
* description = """
CapabilityStatement for Server Actor.

Explain
- blah
- blah
"""
* url = "https://profiles.ihe.net/Domain/Profile/CapabilityStatement/IHE.ToDo.server"
* name = "IHE_ToDo_supplier"
* title = "IHE ToDo Server"
* status = #active
* experimental = false
* date = "2022-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "ToDo Client provides capability to blah blah."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #Patient
    * documentation = """
ToDo transaction [ITI-00]
"""
    * interaction[+].code = #read
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_lastUpdated"
      * type = #date
      * documentation = "When the resource version last changed"
    * searchParam[+]
      * name = "_id"
      * type = #token
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "active"
      * type = #token
      * documentation = "Whether the patient record is active"
    * searchParam[+]
      * name = "family"
      * type = #string
      * documentation = "A portion of the family name of the patient"
    * searchParam[+]
      * name = "given"
      * type = #string
      * documentation = "A portion of the given name of the patient"
    * searchParam[+]
      * name = "identifier"
      * type = #token
      * documentation = "A patient identifier"
    * searchParam[+]
      * name = "telecom"
      * type = #token
      * documentation = "The value in any kind of telecom details of the patient"
    * searchParam[+]
      * name = "birthdate"
      * type = #date
      * documentation = "The patient's date of birth"
    * searchParam[+]
      * name = "address-city"
      * type = #string
      * documentation = "A city specified in an address"
    * searchParam[+]
      * name = "address-country"
      * type = #string
      * documentation = "A country specified in an address"
    * searchParam[+]
      * name = "address-postalcode"
      * type = #string
      * documentation = "A postalCode specified in an address"
    * searchParam[+]
      * name = "address-state"
      * type = #string
      * documentation = "A state specified in an address"
    * searchParam[+]
      * name = "gender"
      * type = #token
      * documentation = "Gender of the patient"
    * searchParam[+]
      * name = "mothersMaidenName"
      * definition = "http://hl7.org/fhir/SearchParameter/patient-extensions-Patient-mothersMaidenName"
      * type = #string
      * documentation = "Mother's maiden (unmarried) name, commonly collected to help verify patient identity."
  * interaction.code = #search-system */



---

// File: input/fsh/CodeSystem.fsh

CodeSystem:  NPFSclasscode 
Title: "NPFS classcode"
Description:  "IHE Category (Class) Code set for use with Non-Patient File Sharing "
* ^experimental = false
* ^caseSensitive = true 
* #STYLESHEET "Code for Stylesheets"
* #WORKFLOW_DEFINITION "Code for Workflow Definitions"

---

// File: input/fsh/DocumentReference.fsh

Profile:   NPFSDocumentReference
Parent: DocumentReference
Id: IHE.NPFS.DocumentReference
Title:      "NPFS DocumentReference"
Description: "A profile on the DocumentReference resource for NPFS."
* id 0..1 MS
* masterIdentifier 0..1 
* identifier 0..* MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "use"
* identifier ^slicing.rules = #open
* status 1..1 
* type 1..1 
* category 1..1
* category from DocumentReferenceCategory (extensible)
* subject 0..0
* date 1..1 
* author 1..* 
* authenticator 0..1
* relatesTo 0..* MS
* description 0..1
* securityLabel 0..* MS
* content.attachment.contentType 1..1
* content.attachment.language 0..1 MS
* content.attachment.language ^short = "Required if known"
* content.attachment.data 0..0
* content.attachment.url 1..1
* content.attachment.size 1..1
* content.attachment.hash 1..1
* content.attachment.title 0..1
* content.attachment.creation 0..1 MS
* content.format 1..1 MS
* context.encounter 0..0
* context.event 0..*
* context.period 0..1 MS
* context.facilityType 0..1 MS
* context.practiceSetting 0..1 MS
* context.sourcePatientInfo 0..0
* context.related 0..0






---

// File: input/fsh/ex-binary.fsh

Instance: cccccccc-4444-0000-0000-000000000002
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="


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

Instance: ex-practitioner
InstanceOf: Practitioner
Title: "Dummy Practitioner example"
Description: "Dummy Practitioner example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* telecom.system = #email
* telecom.value = "JohnMoehrke@gmail.com"

---

// File: input/fsh/ex-CreateDocumentBundle.fsh

Instance:   ex-CreateDocumentBundle
InstanceOf: NPFSCreateDocumentBundle
Title: "Create Document Bundle"
Description:      "Example of Bundle transaction for ITI-87 Submit File used to submit a new file and related metadata"
Usage: #example

* type = #transaction
* entry[DocumenReference].fullUrl = "urn:uuid:cccccccc-4444-0000-0000-000000000001"
* entry[DocumenReference].resource = cccccccc-4444-0000-0000-000000000001 
* entry[DocumenReference].request.url = "DocumentReference"
* entry[DocumenReference].request.method = #POST

* entry[Documents].fullUrl = "urn:uuid:cccccccc-4444-0000-0000-000000000002"
* entry[Documents].resource = cccccccc-4444-0000-0000-000000000002
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #POST


Instance:   ex-UpdateDocumentBundle
InstanceOf: NPFSUpdateDocumentBundle
Title: "Update Document Bundle"
Description:      "Example of Bundle transaction for ITI-87 Submit File used to update a file and related metadata"
Usage: #example

* type = #transaction
* entry[DocumenReference].fullUrl = "urn:uuid:cccccccc-4444-0000-0000-000000000001"
* entry[DocumenReference].resource = cccccccc-4444-0000-0000-000000000001 
* entry[DocumenReference].request.url = "DocumentReference"
* entry[DocumenReference].request.method = #PUT

* entry[Documents].fullUrl = "urn:uuid:cccccccc-4444-0000-0000-000000000002"
* entry[Documents].resource = cccccccc-4444-0000-0000-000000000002
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #PUT


Instance:   ex-ReplaceDocumentBundle
InstanceOf: NPFSReplaceDocumentBundle
Title: "Replace Document Bundle"
Description:      "Example of Bundle transaction for ITI-87 Submit File used to Replace a file and related metadata"
Usage: #example

* type = #transaction
* entry[OldDocumenReference].fullUrl = "urn:uuid:cccccccc-4444-0000-0000-000000000003"
* entry[OldDocumenReference].resource = cccccccc-4444-0000-0000-000000000003
* entry[OldDocumenReference].request.url = "DocumentReference"
* entry[OldDocumenReference].request.method = #PUT

* entry[NewDocumenReference].fullUrl = "urn:uuid:cccccccc-4444-0000-0000-000000000004"
* entry[NewDocumenReference].resource = cccccccc-4444-0000-0000-000000000004 
* entry[NewDocumenReference].request.url = "DocumentReference"
* entry[NewDocumenReference].request.method = #POST

* entry[Documents].fullUrl = "urn:uuid:cccccccc-4444-0000-0000-000000000002"
* entry[Documents].resource = cccccccc-4444-0000-0000-000000000002
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #POST

---

// File: input/fsh/ex-DocumentReference.fsh

Instance:   ex-DocumentReferenceMinimal
InstanceOf: NPFSDocumentReference
Title: "DocumentReference for Minimal metadata"
Description:      "Example of a minimal DocumentReference resource. This is very unlikely to be acceptable anywhere, but it is the minimum required."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* type.coding.system = "urn:oid:1.3.6.1.4.1.19376.1.5.3.1.5"
* type.coding.code = #1.3.6.1.4.1.19376.1.5.3.1.5.1
* type.coding.display = "eReferral workflow"
* category.coding.system = "https://profiles.ihe.net/ITI/NPFS/CodeSystem/NPFSclasscode"
* category.coding.code = #WORKFLOW_DEFINITION
* date = 2023-04-04T11:00:00-05:00
* author = Reference(Patient/ex-patient)
* content.attachment.contentType = #application/pdf
* content.attachment.language = #en-US
* content.attachment.url = "urn:uuid:d3e62cb3-7be5-4971-a765-471669688f33"
* content.attachment.size = 3456
* content.attachment.hash = "07ae8b27c7596b3314601736f32d5f0ed17fc8c0e27a0475e8ea2d8b2c788436"
* content.format = urn:oid:2.16.840.1.113883.2.9.3.3.6.1.6#PDF

Instance:   cccccccc-4444-0000-0000-000000000001
InstanceOf: NPFSDocumentReference
Title: "DocumentReference for Comprehensive fully filled metadata"
Description:      "Example of a Comprehensive DocumentReference resource. This is fully filled for all mandatory elements and all optional elements."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:0c287d32-01e3-4d87-9953-9fcc9404eb21"
* identifier.use = #official
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"
* type.coding.system = "urn:oid:1.3.6.1.4.1.19376.1.5.3.1.5"
* type.coding.code = #1.3.6.1.4.1.19376.1.5.3.1.5.1
* type.coding.display = "eReferral workflow"
* category.coding.system = "https://profiles.ihe.net/ITI/NPFS/CodeSystem/NPFSclasscode"
* category.coding.code = #WORKFLOW_DEFINITION
* date = 2023-04-04T11:00:00-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#L
* content.attachment.language = #en-US
* content.attachment.creation = 2023-04-04T11:00:00-05:00
* author = Reference(Patient/ex-patient)
* authenticator = Reference(Practitioner/ex-practitioner)
* context.period.start = 2020-12-31T23:50:50-05:00
* context.period.end = 2020-12-31T23:50:50-05:00
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActCode#ACCTRECEIVABLE
* content.format = urn:oid:2.16.840.1.113883.2.9.3.3.6.1.6#PDF
* content.attachment.title = "DocumentReference for Comprehensive minimally filled metadata"
* description = "Example of a Comprehensive DocumentReference resource. This is minimally filled for all mandatory elements."
* content.attachment.size = 3456
* content.attachment.hash = "ZGEzOWEzZWU1ZTZiNGIwZDMyNTViZmVmOTU2MDE4OTBhZmQ4MDcwOQ=="
* content.attachment.size = 0
* relatesTo.code = #appends
* relatesTo.target = Reference(ex-DocumentReferenceMinimal)


Instance:   cccccccc-4444-0000-0000-000000000003
InstanceOf: NPFSDocumentReference
Title: "Old DocumentReference for Replace"
Description:      "Example of a Old DocumentReference resource for Replace. This is fully filled for all mandatory elements and all optional elements."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:0c287d32-01e3-4d87-9953-9fcc9404eb22"
* identifier.use = #official
* status = #superseded
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"
* type.coding.system = "urn:oid:1.3.6.1.4.1.19376.1.5.3.1.5"
* type.coding.code = #1.3.6.1.4.1.19376.1.5.3.1.5.1
* type.coding.display = "eReferral workflow"
* category.coding.system = "https://profiles.ihe.net/ITI/NPFS/CodeSystem/NPFSclasscode"
* category.coding.code = #WORKFLOW_DEFINITION
* date = 2023-04-04T11:00:00-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#L
* content.attachment.language = #en-US
* content.attachment.creation = 2023-04-04T11:00:00-05:00
* author = Reference(Patient/ex-patient)
* authenticator = Reference(Practitioner/ex-practitioner)
* context.period.start = 2020-12-31T23:50:50-05:00
* context.period.end = 2020-12-31T23:50:50-05:00
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActCode#ACCTRECEIVABLE
* content.format = urn:oid:2.16.840.1.113883.2.9.3.3.6.1.6#PDF
* content.attachment.title = "DocumentReference for Comprehensive minimally filled metadata"
* description = "Example of a Old DocumentReference resource for Replace. This is fully filled for all mandatory elements and all optional elements."
* content.attachment.size = 3456
* content.attachment.hash = "ZGEzOWEzZWU1ZTZiNGIwZDMyNTViZmVmOTU2MDE4OTBhZmQ4MDcwOQ=="
* content.attachment.size = 0
* relatesTo.code = #appends
* relatesTo.target = Reference(ex-DocumentReferenceMinimal)


Instance:   cccccccc-4444-0000-0000-000000000004
InstanceOf: NPFSDocumentReference
Title: "New DocumentReference for Replace"
Description:      "Example of a New DocumentReference resource for Replace. This is fully filled for all mandatory elements and all optional elements."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:0c287d32-01e3-4d87-9953-9fcc9404eb23"
* identifier.use = #official
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"
* type.coding.system = "urn:oid:1.3.6.1.4.1.19376.1.5.3.1.5"
* type.coding.code = #1.3.6.1.4.1.19376.1.5.3.1.5.1
* type.coding.display = "eReferral workflow"
* category.coding.system = "https://profiles.ihe.net/ITI/NPFS/CodeSystem/NPFSclasscode"
* category.coding.code = #WORKFLOW_DEFINITION
* date = 2023-04-04T11:00:00-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#L
* content.attachment.language = #en-US
* content.attachment.creation = 2023-04-04T11:00:00-05:00
* author = Reference(Patient/ex-patient)
* authenticator = Reference(Practitioner/ex-practitioner)
* context.period.start = 2020-12-31T23:50:50-05:00
* context.period.end = 2020-12-31T23:50:50-05:00
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActCode#ACCTRECEIVABLE
* content.format = urn:oid:2.16.840.1.113883.2.9.3.3.6.1.6#PDF
* content.attachment.title = "DocumentReference for Comprehensive minimally filled metadata"
* description = "Example of a New DocumentReference resource for Replace. This is fully filled for all mandatory elements and all optional elements."
* content.attachment.size = 3456
* content.attachment.hash = "ZGEzOWEzZWU1ZTZiNGIwZDMyNTViZmVmOTU2MDE4OTBhZmQ4MDcwOQ=="
* content.attachment.size = 0
* relatesTo.code = #replaces
* relatesTo.target = Reference(ex-DocumentReferenceMinimal)

Instance:   ex-DocumentReferenceUpdate
InstanceOf: NPFSDocumentReference
Title: "DocumentReference for Update"
Description:      "Example of a DocumentReference resource for Update. This is fully filled for all mandatory elements and all optional elements."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* id = "12345"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:0c287d32-01e3-4d87-9953-9fcc9404eb23"
* identifier.use = #official
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"
* type.coding.system = "urn:oid:1.3.6.1.4.1.19376.1.5.3.1.5"
* type.coding.code = #1.3.6.1.4.1.19376.1.5.3.1.5.1
* type.coding.display = "eReferral workflow"
* category.coding.system = "https://profiles.ihe.net/ITI/NPFS/CodeSystem/NPFSclasscode"
* category.coding.code = #WORKFLOW_DEFINITION
* date = 2023-04-04T11:00:00-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#L
* content.attachment.language = #en-US
* content.attachment.creation = 2023-04-04T11:00:00-05:00
* author = Reference(Patient/ex-patient)
* authenticator = Reference(Practitioner/ex-practitioner)
* context.period.start = 2020-12-31T23:50:50-05:00
* context.period.end = 2020-12-31T23:50:50-05:00
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActCode#ACCTRECEIVABLE
* content.format = urn:oid:2.16.840.1.113883.2.9.3.3.6.1.6#PDF
* content.attachment.title = "DocumentReference for Comprehensive minimally filled metadata"
* description = "Example of a New DocumentReference resource for Replace. This is fully filled for all mandatory elements and all optional elements."
* content.attachment.size = 3456
* content.attachment.hash = "ZGEzOWEzZWU1ZTZiNGIwZDMyNTViZmVmOTU2MDE4OTBhZmQ4MDcwOQ=="
* content.attachment.size = 0
* relatesTo.code = #replaces
* relatesTo.target = Reference(ex-DocumentReferenceMinimal)


Instance:   in-patient
InstanceOf: Patient
Title:      "Dummy inline Patient example"
Description: "Dummy inline patient example for completeness sake. No actual use of this resource other than an example target"
Usage: #inline


Instance: in-author
InstanceOf: Practitioner
Title: "Dummy inline Practitioner example"
Description: "Dummy inline Practitioner example for completeness sake. No actual use of this resource other than an example target"
Usage: #inline
* telecom.system = #email
* telecom.value = "JohnMoehrke@gmail.com"

---

// File: input/fsh/ValueSet.fsh

ValueSet: DocumentReferenceCategory
Title: "NPFS DocumentReference category"
Description: "ValueSet for the different values of element category"
* ^experimental = false
* NPFSclasscode#STYLESHEET
* NPFSclasscode#WORKFLOW_DEFINITION
* LOINC#57017-6
 


---

// File: input/images-source/actorDiagram.plantuml

@startuml
agent "File Source" as Source
agent "File Consumer" as Consumer
agent "File Manager" as Manager
Source -right-> Manager : "Update Document Reference [ITI-89]"
Source -up->Manager : "Submit File [ITI-87]"
Consumer -left->Manager : "Search File [ITI-88]"
Consumer -up-> Manager : "Retrieve File [ITI-109]"
@enduml

---

// File: input/images-source/ActorsAndTransactions.plantuml

@startuml
agent "Client" as Client
agent "Server" as Server
Client -- Server : "go [domain-YY] ↓"
@enduml


---

// File: input/images-source/FileConsumer.plantuml

@startuml
title Query Actors Interactions
agent "File Consumer" as FileConsumer
agent "File Manager" as FileManager
FileConsumer -- FileManager : "Search File [ITI-88]↓"
@enduml

---

// File: input/images-source/FileConsumerOption.plantuml

@startuml
title Query Actors Interactions
agent "File Consumer" as FileConsumer
agent "File Manager" as FileManager
FileConsumer -- FileManager : "Search File [ITI-88]↓\nRetrieve File [ITI-109]↓"
@enduml

---

// File: input/images-source/FileSource.plantuml

@startuml
title Actors Interactions
agent "File Source" as FileSource
agent "File Manager" as FileManager
FileSource -- FileManager : "Submit File [ITI-87]↓"
@enduml

---

// File: input/images-source/FileSourceOption.plantuml

@startuml
title Actors Interactions
agent "File Source" as FileSource
agent "File Manager" as FileManager
FileSource -- FileManager : "Submit File [ITI-87]↓\nUpdate DocumentReference [ITI-89]↓"
@enduml

---

// File: input/images-source/ITI-109-seq.plantuml

@startuml
title Retrieve File [ITI-109]
hide footbox
participant "File Consumer" as FileConsumer
participant "File Manager" as FileManager
activate "FileConsumer"
activate "FileManager"
"FileConsumer" -> "FileManager" : 1. Retrieve File [ITI-109]
return
deactivate "FileConsumer"
deactivate "FileManager"
@enduml

---

// File: input/images-source/ITI-87-seq.plantuml

@startuml
hide footbox
participant "File Source" as Client
participant "File Manager" as Server
"Client" -> "Server" : Create File Request
activate "Server"
activate "Client"
"Server" --> "Client" : Submit File Response
deactivate "Server"
deactivate "Client"

"Client" -> "Server" : Update File Request
activate "Server"
activate "Client"

"Server" --> "Client" : Update File Response
deactivate "Server"
deactivate "Client"

"Client" -> "Server" : Replace File Request
activate "Server"
activate "Client"

"Server" --> "Client" : Submit File Response
deactivate "Server"
deactivate "Client"

@enduml

---

// File: input/images-source/ITI-88-seq.plantuml

@startuml
hide footbox
participant "File Consumer" as Client
participant "File Manager" as Server
"Client" -> "Server" : Search File Request
activate "Server"
activate "Client"
"Server" --> "Client" : Search File Response
deactivate "Server"
deactivate "Client"

@enduml

---

// File: input/images-source/ITI-89-seq.plantuml

@startuml
hide footbox
participant "File Source" as Client
participant "File Manager" as Server
"Client" -> "Server" : Update DocumentReference Request
activate "Server"
activate "Client"
"Server" --> "Client" : Update DocumentReference Response
deactivate "Server"
deactivate "Client"

@enduml

---

// File: input/images-source/usecase1-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
participant "Client" as Client
participant "Server" as Server
activate "Client"
"Client" -> "Server" : 1. Go Query [domain-YY]
activate "Server"
"Server" --> "Client" : 2. Go Response [domain-YY]
deactivate "Client"
deactivate "Server"
@enduml


---

// File: input/images-source/useCase1.plantuml

@startuml
participant "File Source" as 1
participant "File Manager" as 2
participant "File Consumer" as 3
participant "Document Repository" as 4

1->2: Submit File [ITI-87] Create File Request message
activate 2
2-->1: Submit File Response message
deactivate 2

3->4: Retrieve Document Set [ITI-43] (Laboratory Report)
activate 4
4-->3: Retrieve Document Set response
activate 3

3->2: Search File [ITI-88]\nSearch File Request message\nparameters: class=STYLESHEET,\nauthor.identifier=IHE-FACILITY1039,\npatient:exists=false
activate 2
2-->3:Search File Response message\n Bundle with DocumentReference resource
deactivate 2

3->2: Retrieve File [ITI-109]\nRetrieve File Request message
activate 2
2-->3:Retrieve File Response message
deactivate 2
deactivate 3
deactivate 4 

@enduml

---

// File: input/images-source/useCase2.plantuml

@startuml
participant "File Source" as 1
participant "File Manager" as 2
participant "File Consumer" as 3


1->2: Submit File [ITI-87]\nCreate File Request message
activate 2
2->1: Submit File Response message
deactivate 2

3->2: Search File [ITI-88]\nSearch File Request Message\nparameters: class=PRIVACY_POLICY, status=current,\n patient:exists=false
activate 2
2->3: Search File Response Message\nBundle with DocumentReference resource (id=456)
deactivate 2
3->2: Retrieve File [ITI-109]\nRetrieve File Request message
activate 2
2->3: Retrieve File response message
deactivate 2
1->2: Submit File [ITI-87]\nReplace File Request message\nnew Binary and DocumentReference with replace association and\nupdate of previous DocumentReference (id=456) with status=superseded
activate 2
2->1: Submit File Response message
deactivate 2
@enduml

---

// File: input/images-source/useCase3.plantuml

@startuml
participant "File Source" as 1
participant "File Manager" as 2
participant "File Consumer" as 3


1->2: Submit File [ITI-87]\nCreate File Request message
activate 2
2->1: Submit File Response message
deactivate 2

3->2: Search File [ITI-88]\nSearch File Request message\nparameters: class=WORKFLOW_DEFINITION,\ntype=1.3.6.1.4.1.19376.1.5.3.1.5.1,\npatient:exists=false
activate 2
2->3:Search File Response message\n Bundle with DocumentReference resources
deactivate 2

3->2: Retrieve File [ITI-109]\nRetrieve File Request message
activate 2
2->3:Retrieve File Response message
deactivate 2

1->2: Submit File [ITI-87]\nUpdate File Request message\nmetadata: DocumentReference.id=456, Binary.id=789
activate 2
2->1: Submit File Response message
deactivate 2

@enduml

---

// File: input/images-source/useCase4.plantuml

@startuml
participant "File Source" as 1
participant "File Manager" as 2


1->1: Produce stylesheet

1->2: Submit File [ITI-87]\nCreate File Request message
activate 2
2->1: Submit File Response message
deactivate 2

1->1: update of the ownership

1->2: Update DocumentReference [ITI-89]\n DocumentRefernce.author=Organization/123,Organization/456
activate 2
2->1: Update DocumentReference response message
deactivate 2

@enduml

---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/ITI.NPFS/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/ITI.NPFS/issues

---

