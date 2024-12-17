File: repos/IHE_SLASH_ITI.sIPS/sushi-config.yaml

# sushi-config.yaml is documented https://fshschool.org/docs/sushi/configuration/
# ───────────────────────────────────────────────────
# the id should be lowercase made up of "ihe." + {domain acronym} + "." + {profile acronym/short-name}
# e.g. ihe.iti.mhds, or ihe.iti.basicaudit
id: ihe.iti.sips
canonical: https://profiles.ihe.net/ITI/sIPS
version: 1.0.1-current
name: IHE_ITI_sIPS
title: "Sharing of IPS (sIPS)"
description: Sharing of IPS (sIPS) - defines how HL7 FHIR IPS is communicated using IHE Document Sharing
releaseLabel: ci-build
#releaseLabel: Trial-Implementation
#releaseLabel: ballot
#date: 2023-11-17
status: active
publisher:
  ## Find your domain contact on the https://www.ihe.net/ihe_domains page
  name: IHE IT Infrastructure Technical Committee
  url: https://www.ihe.net/ihe_domains/it_infrastructure/
  email: iti@ihe.net
contact:
  - name: IHE IT Infrastructure Technical Committee
    telecom:
      - system: email
        value: iti@ihe.net
license:  CC-BY-4.0
fhirVersion: 4.0.1
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
#copyright: IHE http://www.ihe.net/Governance/#Intellectual_Property
copyrightYear: 2023+
#extension: 
#  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
#    valueCode: draft
#  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
#    valueInteger: 0
    
dependencies:
  hl7.fhir.uv.ips:
    id: hl7ips
    uri: http://hl7.org/fhir/uv/ips/ImplementationGuide/hl7.fhir.uv.ips
    version: 1.1.x
  ihe.iti.mhd: 
  # Depend on MHD so that the DocumentReference examples have proper profiling
    id: iheitimhd
    uri: https://profiles.ihe.net/ITI/MHD/ImplementationGuide/ihe.iti.mhd
    version: 4.2.x

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
    title: Sharing of IPS (sIPS) Home
    generation: markdown
  volume-1.md:
    title: 1:56 Sharing of IPS (sIPS)
    generation: markdown
  content.md:
    title: 3:5.9 IPS Content Module
    generation: markdown
  testplan.md:
    title: Test Plan
    generation: markdown
  other.md:
    title: Changes to Other IHE Specifications
    generation: markdown
  issues.md:
    title: Significant Changes and Issues
    generation: markdown
  download.md:
    title: Download and Analysis
    generation: markdown
  pcc.md:
    title: PCC Volume 2 Excerpt
    generation: markdown

menu:
  sIPS Home: index.html
  Volume 1:
    Introduction: volume-1.html
    Actors and Transactions: volume-1.html#actors-and-transactions
    Actor Options: volume-1.html#actor-options
    Required Groupings: volume-1.html#required-groupings
    Overview: volume-1.html#overview
    Security Considerations: volume-1.html#security-considerations
    Cross-Profile Considerations: volume-1.html#other-grouping
  Volume 3: content.html
  Artifacts: artifacts.html
  Other:
    Changes to Other IHE Specifications: other.html
    Download and Analysis: download.html
    Test Plan: testplan.html
  PCC Excerpt: pcc.html

---

// File: input/pagecontent/content.md


|------------------------------------------------|
| Editor, add the following new section to [ITI Volume 3](https://profiles.ihe.net/ITI/TF/Volume3) : |
{:.grid .bg-info}


## 3:5.9 International Patient Summary Content Module

An [International Patient Summary (IPS) document]({{site.data.fhir.hl7ips}}) is an electronic health record extract containing essential healthcare information about a subject of care.
As specified in EN ISO 27269, it is designed for supporting the use case scenario for "unplanned, cross border care", but it is not limited to it.
It is intended to be international, i.e., to provide generic solutions for global application beyond a particular region or country.

The IPS dataset is minimal and non-exhaustive; specialty-agnostic and condition-independent; but still clinically relevant. The [IPS document specification is published by HL7]({{site.data.fhir.hl7ips}}).

The IHE sIPS does not modify the [HL7 IPS]({{site.data.fhir.hl7ips}}) specification, but provides for methods of sharing the IPS using [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html). The IPS, as a "current summary", is an excellent document for the ["On-Demand" capability of the Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#212-dynamic-documents) infrastructure. On-Demand is available in [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10) with [On-Demand Documents Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html), [XCA](https://profiles.ihe.net/ITI/TF/Volume1/ch-18.html) with [On-Demand Documents Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-18.html#18.2.4), and with [MHD/MHDS](https://profiles.ihe.net/ITI/MHD/index.html). Further details for IPS use of On-Demand are outlined below in section 3.9.2.1.2.

The IPS document is composed by a set of robust, well-defined and potentially reusable sets of core data items (indicated as IPS library in the figure below). The tight focus of the IPS on unplanned care is in this case not a limitation, but, on the contrary, facilitates their potential re-use beyond the IPS scope.

<div>
<img src="IPS_doc_library.png" caption="Figure 1: The IPS product and by-products" width="70%" >
</div>

### 3:5.9.1 Referenced Standards

- [International Patient Summary (IPS) document]({{site.data.fhir.hl7ips}})

### 3:5.9.2 Document Sharing Metadata

The [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) infrastructures define a common set of Document Metadata, Submission Set, and Folders. There are [defined methods of communicating documents](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#3-document-sharing-profiles) including push, centralized registry, and federated discovery and retrieval. The metadata model is designed to be content agnostic so it can support any past or future document specification, which enables all existing networks to support the IPS without modification.

A Document Entry (aka FHIR DocumentReference) is metadata about a document. This metadata is designed to support provenance, lifecycle, authenticity, patient identity, privacy, and exchange of the document that is described. The document can be any kind of format, in this content module we are focused on the [International Patient Summary (IPS) document]({{site.data.fhir.hl7ips}}) and the format of JSON or XML. Submission Set is the metadata about the publication event, who published these documents, why, when, where, etc. The Folder is an adhoc grouping mechanism that can be used for purposes like grouping a clinical episode. Further explanation of the [Value of Metadata](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#26-value-of-metadata) is covered in the [HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

There is a limitation in the Document Sharing metadata that each Document entry must have only one mime-type. The FHIR model supports many mime-type encodings, as does IPS. Some environments may choose one of the FHIR mime-type encodings, where others may need both JSON and XML mime-type encoding of the IPS document bundle. Where more than one mime-type encoding is needed, one would need to register multiple Document entries and [indicate they are transforms](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#27-document-relationships) only differing in mime-type. With multiple Document entries registered, the Document Consumer can pick the mime-type desired, and with the [transform relationship](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#27-document-relationships) be confident that there is no semantic difference between the two mime-type encodings.

To fill out a Document Entry there is a mapping table at [PCC TF-2: 4.1.1](pcc.html) that provides guidance. The mapping to a FHIR DocumentReference from the document FHIR Composition is the same as is found in the [FHIR Core DocumentReference Mapping from Composition](http://hl7.org/fhir/R4/documentreference-mappings.html#fhircomposition). [PCC TF-2: 4.1.1](pcc.html) provides additional guidance.

#### 3:5.9.2.1 DocumentEntry/DocumentReference Metadata

IPS is a FHIR document, the Document Entry metadata is derived from the FHIR document Composition Resource following the [Document Sharing Metadata requirements in the PCC TF-2:4](pcc.html) unless otherwise specified below.

##### 3:5.9.2.1.1 FormatCode

The FormatCode shall be `{{site.data.fhir.hl7ips}}/StructureDefinition/Bundle-uv-ips`, the canonical URI of the [IPS Bundle Profile]({{site.data.fhir.hl7ips}}/StructureDefinition-Bundle-uv-ips.html). As a canonical URI, where a `system` is needed, it shall be `urn:ietf:rfc:3986`.

##### 3:5.9.2.1.2 On-Demand

When the Document Source is willing to offer to Document Consumers the ability for an on on-demand instance of the IPS to be returned using current data, it can register a [Document Entry (DocumentReference) as "On-Demand"](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#212-dynamic-documents). XDS and XCA the On-Demand entry is indicated with a given On-Demand ObjectType as expressed in the given options, in MHD/MHDS an On-Demand entry is indicated with an absent .size and .hash. The Document Entry (DocumentReference) will express specific parameters that would be used if the Document Consumer were to request a document be created "On-Demand"; such as timeperiod refinements, setting, language, etc.

When the On-Demand entry is requested by a Document Consumer, the responding actor may chose to utilize the [IPS $summary operation]({{site.data.fhir.hl7ips}}/OperationDefinition-summary.html). This use of the [$summary operation]({{site.data.fhir.hl7ips}}/OperationDefinition-summary.html) is not required to be the method used. 

The returned document would, based on configuration, result in an additional DocumentEntry/DocumentReference (aka Snapshot) existing that is in snapshot relationship with the On-Demand DocumentEntry/DocumentReference, and representing the returned document metadata. This snapshot is a "stable" instance that can be retrieved again in the future. More discussion of the relationship between the on-demand and the instances that are preserved as snapshots is explain in [HIE Whitepaper: Dynamic Documents](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#212-dynamic-documents).

When a document is produced on-demand, it is typical for this to be created by software without a human interaction. A summary often includes rules such as timeframe of content to include, thus the software is indeed crafting the Composition content; thus it is not just assembling a Bundle based on the pre-authored Composition. A software author of a document can be expressed using a FHIR Device Resource.

The following figure shows one On-Demand Document Entry (DocumentReference) and two instances that have been requested and preserved as snapshots with a snapshot relationship.

<figure>
{%include on-demand.svg%}
<figcaption><b>Figure 3:5.9.2.1.2: Example On-Demand relationship to snapshot Stable entries.</b></figcaption>
</figure>
<br clear="all">

#### 3:5.9.2.2 SubmissionSet Metadata

No additional requirements. The SubmissionSet represents the activity  For more information, see [PCC TF-2: 4.1.1.1](pcc.html).

#### 3:5.9.2.2 Folder Metadata

No additional requirements. For more information, see [PCC TF-2: 4.1.1.3](pcc.html).

### 3:5.9.3 Specification

This Content Module does not constrain the IPS content. See [IPS content as defined by HL7]({{site.data.fhir.hl7ips}}) for the definition of the IPS content as defined by HL7.

### 3:5.9.4 Examples

Given the [IPS examples]({{site.data.fhir.hl7ips}}/examples.html) provided in the [IPS Implementation Guide]({{site.data.fhir.hl7ips}}), the following DocumentReference would be an example as Registered in Document Sharing. Submission Set and Folders are not shown as they are more dependent on the situation of the publication than the content itself.

See example artifacts

- [Example Bundle: IPS Bundle example](https://hl7.org/fhir/uv/ips/STU1.1/Bundle-IPS-examples-Bundle-01.html)
  - [Example DocumentReference for IPS Bundle in XML encoding](DocumentReference-ex-DocumentReference-Bundle-01-xml.html)
  - [Example DocumentReference for IPS Bundle in JSON encoding](DocumentReference-ex-DocumentReference-Bundle-01-json.html) with transform relationship to XML encoding


---

// File: input/pagecontent/download.md


You can download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), or [ttl](definitions.ttl.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip), or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [IHE ITI.sIPS Github Repo](https://github.com/IHE/ITI.sIPS).

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


Sharing of IPS (sIPS) - defines how HL7 [FHIR IPS]({{site.data.fhir.hl7ips}}) is communicated using IHE [Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide

This guide is organized into the following sections:

- Volume 1:
  - [Introduction](volume-1.html)
  - [Actors, Transactions, and Content](volume-1.html#actors-and-transactions)
  - [Actor Options](volume-1.html#actor-options)
  - [Actor Required Groupings](volume-1.html#required-groupings)
  - [Overview](volume-1.html#overview)
  - [Security Considerations](volume-1.html#security-considerations)
  - [Cross Profile Considerations](volume-1.html#other-grouping)
- Volume 3:
  - [IPS Content Module](content.html)
- [Artifacts](artifacts.html)
- Other
  - [Changes to Other IHE Specifications](other.html)
  - [Download and Analysis](download.html)
  - [Test Plan](testplan.html)
- PCC Excerpt
  - [Volume 2:3.1 PCC-1](pcc.html)
  - [Volume 2:4.1 Metadata Mapping](pcc.html)

See also the [Table of Contents](toc.html) and the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words: Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).


---

// File: input/pagecontent/issues.md


## Significant Changes

### Version 1.0.0

- First Trial Implementation Version
- Previously named Accessibility to IPS (aIPS). Name was changed due to potential misunderstanding of other meanings of accessibility around user experience with disability.

### Relationship of sIPS to PCC-IPS

The [PCC-IPS](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS.pdf) is being broken up into distinct profiles starting with the sIPS Implementation Guide (Profile). Other parts of [PCC-IPS](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS.pdf) are expected to be published in the coming months and years as resources become available. The sIPS takes precedence over equivalent profiling found in the [PCC-IPS](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS.pdf); however, those parts of the [PCC-IPS](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_IPS.pdf) that have not been published in other forms are still relevant.

## Issues

### Submit an Issue

IHE welcomes [New Issues](https://github.com/IHE/ITI.sIPS/issues/new/choose) from the GitHub community.
For those without GitHub access, issues may be submitted to the [ITI Public Comment form](https://www.ihe.net/ITI_Public_Comments/).

As issues are submitted they will be managed on the [sIPS GitHub Issues](https://github.com/IHE/ITI.sIPS/issues), where discussion and workarounds may be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting.
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues

- [sIPS_001: Minimal View Option](https://github.com/IHE/ITI.sIPS/issues/8) is referring the reader to FHIR Core for Documents. Are there more specific requirements available from IPS or IHE?

### Closed Issues

None


---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE profiles or the General Introduction appendices and is not a part of the sIPS Profile. The content here will be incorporated into the target narrative at a future time, usually when sIPS Profile goes normative.
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
| none |  |
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

// File: input/pagecontent/pcc.md


|------------------------------------------------|
|The following is an excerpt from [PCC Volume 2](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_TF_Vol2.pdf): It is provided here for convenience to the reader and is not intended to be different. It does have CP-PCC-0300 integrated. |
{:.grid .bg-info}


# 3 IHE Transactions

This section defines each IHE transaction in detail, specifying the
standards used, and the information transferred.

## 3.1 Document Sharing \[PCC-1\]

\[PCC-1\] describes common functional requirements for content exchange.

Option for a Content Consumer are described below. Content profiles may
reference these options as requirements for its Content Consumer;
profiles may define other options as necessary.

- **Actor**: Content Creator
- **Role**: Create document(s) to be exchanged between two actors
- **Actor**: Content Consumer
- **Role**: Consume document(s) that has been exchanged between two
  actors

Documents are created by a Content Creator and consumed by a Content
Consumer.

The sharing or transmission of content from one actor to the other is
addressed by grouping with appropriate actors from IHE profiles such as:

- [Cross Enterprise Document Sharing (XDS)](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html)
- [Cross Enterprise Document Sharing on Media (XDM)](https://profiles.ihe.net/ITI/TF/Volume1/ch-16.html)
- [Cross Enterprise Document Sharing Reliable Ex (XDR)](https://profiles.ihe.net/ITI/TF/Volume1/ch-15.html)
- [Cross Community Access (XCA)](https://profiles.ihe.net/ITI/TF/Volume1/ch-18.html)
- [Multi-Patient Query (MPQ)](https://profiles.ihe.net/ITI/TF/Volume1/ch-25.html)
- [Mobile Access to Health Documents (MHD)](https://profiles.ihe.net/ITI/MHD/index.html)
- [Mobile Health Document Sharing (MHDS)](https://profiles.ihe.net/ITI/MHDS/index.html)
- Request Form for Data Capture (RFD)
- others as appropriate

The population of metadata in the transport from the created content to
the IHE transaction that shares it must be described in a Content
Binding. Bindings for Document Sharing transactions such as XDS, XCA,
XDR and XDM have been described in the section on Content Bindings in
IHE PCC TF-2: 4. Transactions found in other IHE profiles (e.g., RFD,
MHD) may also be used to exchange content.

**<u>Content Creator Expected Actions</u>**

1. The Content Creator SHALL create the document according to the
content profile that is specified by the actor in the profile where
it is used.
2. The content SHALL be shared using appropriate actors from the IHE
profile it is grouped with as described above.

**<u>Content Consumer Expected Actions</u>**

1. The Content Consumer SHALL be able access documents using
appropriate actors from the IHE profile it is grouped with as
described above.
2. The Content Consumer SHALL support processing of the document as
needed by the profile.
3. The Content Consumer options below MAY be referenced by profiles
where this transaction is used to provide specific processing
requirements.

### 3.1.1 View Option

A Content Consumer that supports the View Option:

1. SHALL render the document for viewing.

When a CDA Document is used, this rendering shall meet the requirements
defined for CDA Release 2 content presentation semantics (See Section
1.2.4 of the CDA Specification: Human readability and rendering CDA
Documents). CDA Header information providing context critical
information shall also be rendered in a human readable manner. This
includes at a minimum the ability to render the document with the
stylesheet specifications provided by the document source, if the
document source provides a stylesheet. Content Consumers may optionally
view the document with their own stylesheet, but must provide a
mechanism to view using the source stylesheet.

### 3.1.2 Document Import Option

The Content Consumer that supports the ***Document*** Import Option
shall also support the View Option. In addition, the Content Consumer
that supports the Document Import Option shall be able to support the
storage of the entire document (as provided by the sharing framework,
along with sufficient metadata to ensure its later viewing). This Option
requires the proper tracking of the document origin. Once a document has
been imported, the Content Consumer shall offer a means to view the
document without the need to retrieve it again. When viewed after it was
imported, a Content Consumer may choose to access the sharing framework
to find out if the related Document viewed has been deprecated, replaced
or addended.

**Note:** For example, when using XDS, a Content Consumer may choose to
query the Document Registry about a document previously imported in
order to find out if this previously imported document may have been
replaced or has received an addendum. This capability is offered to
Content Consumers by this Integration Profile, but not required, as the
events that may justify such a query are extremely implementation
specific.

### 3.1.3 Section Import Option

The Content Consumer that supports the ***Section*** Import Option shall
also support the View Option. In addition, the Content Consumer that
supports the Section Import Option shall be able to support the import
of one or more sections of the document (along with sufficient metadata
to link the data to its source). Once sections have been selected, a
Content Consumer shall offer a means to copy the imported section(s)
into local data structures as free text. This is to support the display
of section level information for comparison or editing in workflows such
as medication reconciliation while discrete data import is not possible.
When viewed again after it is imported, a Content Consumer may choose to
find out if the related information has been updated.

**Note:** For example, when using XDS, a Content Consumer may choose to
query the Document Registry about a document whose sections were
previously imported in order to find out if this previously imported
document may have been replaced or has received an addendum. This
capability is offered to Content Consumers by this Integration Profile,
but not required, as the events that may justify such a query are
extremely implementation specific.

This Option does not require, but does not exclude the Content Consumer
from offering a means to select and import specific subsets of the
narrative text of a section.

### 3.1.4 Discrete Data Import Option

The Content Consumer that supports the Discrete Data Import Option shall
be able to support the storage of the structured content of one or more
sections of the document. This Option requires that the user be offered
the possibility to select among the specific sections that include
structured content a set of clinically relevant record entries (e.g., a
problem or an allergy in a list) for import as part of the local patient
record.

**Note:** The Discrete Data Import Option does not require the support
of the View, Import Document or Import Sections Options so that it could
be used alone to support implementations of Content Consumers such as
Public Health Data or Clinical Research systems that might aggregate and
anonymize specific population healthcare information data as Document
Consumer Actors, but one where no care provider actually views the
medical summaries.

When discrete data is accessed after it was imported, a Content Consumer
<u>may</u> choose to check if the document related to the discrete data
viewed has been deprecated, replaced or addended.

A Content Consumer Actor grouped with the XDS Document Source Actor may
query the Document Registry about a document from which discrete data
was previously imported in order to find out if this previously imported
document may have been replaced or has received an addendum.

### 3.1.5 Serializing FHIR Documents

A FHIR document is a FHIR Bundle where the first entry is a FHIR
Composition and resources referenced are in the Bundle. A composition is
a coherent set of information that is a statement of healthcare
information, including clinical observations and services. A document is
an immutable set of resources with a fixed presentation that is authored
and/or attested by humans, organizations and devices.

All documents have the following structure: a Bundle of resources of
type "document" that has a Composition resource as the first resource in
the bundle, followed by a series of other resources, referenced from the
Composition resource, that provide supporting evidence for the document.
The bundle gathers all the content of the document into a single XML or
JSON document which may be signed and managed as required. Please see
<http://hl7.org/fhir/documents.html>;
[http://hl7.org/fhir/bundle.html#document](http://hl7.org/fhir/bundle.html%23document).

A Bundle of type "document" is a RESTful object that is not updated, it
is just retrievable. See <http://hl7.org/fhir/bundle.html#rest> . When a
Bundle is placed into the control of Document Sharing (e.g., XDS, MHD,
XCA, XDM, etc) it is retrieved in the Bundle form as a document given
the Document Sharing metadata. The mapping from Composition to
DocumentReference can be found in the FHIR core in both Composition and
DocumentReference. However, this mapping is only between Composition and
DocumentReference. See
<http://hl7.org/fhir/composition-mappings.html#fhirdocumentreference>; 
<http://hl7.org/fhir/documentreference-mappings.html#fhircomposition>.

For a mapping between DocumentReferenece and XDS DocumentEntry
attributes see <http://hl7.org/fhir/documentreference-mappings.html#xds>.

Additionally, below in Table 4.1.1 is a mapping between FHIR Document
Composition elements and the XDS DocumentEntry attributes.

# 4 IHE Patient Care Coordination Bindings

This section describes how the payload used in a transaction of an IHE
profile is related to and/or constrains the data elements sent or
received in those transactions. This section is where any specific
dependencies between the content and metadata / transaction are defined.

A content integration profile can define multiple bindings. Each binding
should identify the transactions and content to which it applies.

The source for all required and optional attributes have been defined in
the bindings below. Two tables describe the XDS object
types: XDSDocumentEntry, and XDSSubmissionSet.
The definitions of the [metadata attributes is defined in ITI Volume 3:4](https://profiles.ihe.net/ITI/TF/Volume3/index.html#4), with the [optionality defined in ITI Volume 3:4.3](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3).
For a mapping between DocumentReferenece and XDS DocumentEntry
attributes see <http://hl7.org/fhir/documentreference-mappings.html#xds>.

## 4.1 Medical Document Binding to Document Sharing Metadata

This binding defines a transformation that generates 
[metadata for the XDSDocumentEntry and XDSSubmissionSet](https://profiles.ihe.net/ITI/TF/Volume3/index.html#4) elements of appropriate
transactions from the [Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) profiles given a medical document
and information from other sources. The medical document refers to the
document being stored in a repository that will be referenced in the
registry. The other sources of information include the configuration of
the Document Source Actor, the XDS Affinity Domain, the site or
facility, local agreements, other documents in the registry/repository,
and this Content Profile. 
See [Overview of Health Document Sharing Communities](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#13-overview-of-health-document-sharing-communities).

In many cases, the [CDA/FHIR document](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#231-fhir-document-vs-cda-document) is created for the purposes of sharing
within an XDS Affinity Domain. In these cases the context of the [CDA/FHIR Document](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#231-fhir-document-vs-cda-document) and
the context of the XDS Affinity Domain are the same, in which case the
following mappings shall apply.

In other cases, the [CDA/FHIR document](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#231-fhir-document-vs-cda-document) may have been created for internal use,
and are subsequently being shared. In these cases the context of the [CDA/FHIR document](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#231-fhir-document-vs-cda-document) 
would not necessarily coincide with that of the XDS Affinity
Domain, and the mappings below would not necessarily apply.
See [Principles of IHE for Health Document sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#2-principles-of-ihe-for-health-document-sharing).

Please note the specifics given in the table below.

### 4.1.1 XDSDocumentEntry Metadata

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 17%" />
<col style="width: 24%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr class="header">
<th>
<p><strong>XDSDocumentEntry Attribute</strong></p>
</th>
<th>
<p><strong>derivation comment</strong></p>
</th>
<th>
<p><strong>FHIR Document</strong></p>
</th>
<th>
<p><strong>CDA Document</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>
<p>availabilityStatus</p>
</td>
<td></td>
<td>
<p>NA</p>
</td>
<td></td>
</tr>
<tr class="even">
<td>
<p>authorInstitution</p>
</td>
<td></td>
<td>
<p>Composition. author where the Reference is to an Organization</p>
</td>
<td>
<p>$inst &lt;= /ClinicalDocument/author<br />
/assignedAuthor<br />
/representedOrganization<br />
<br />
The authorInstitution can be formated<br />
using the following XPath expression, where $inst in the expression
below represents the representedOrganization.<br />
concat($inst/name)</p>
</td>
</tr>
<tr class="odd">
<td>
<p>authorPerson</p>
</td>
<td></td>
<td>
<p>Composition.author where the Reference is to a Practitioner,
Device, or Patient</p>
</td>
<td>
<p>$person &lt;= /ClinicalDocument/author<br />
<br />
The author can be formatted using the following XPath expression, where
$person in the expression below represents the author.<br />
concat(<br />
$person/id/@extension,"^",<br />
$person/assignedPerson/name/family,"^",<br />
$person/assignedPerson/name/given[1],"^",<br />
$person/assignedPerson/name/given[2],"^",<br />
$person/assignedPerson/name/suffix,"^",<br />
$person/assignedPerson/name/prefix,"^",<br />
"^^^&amp;", $person/id/@root,"&amp;ISO")</p>
</td>
</tr>
<tr class="even">
<td>
<p>authorRole</p>
</td>
<td>
<p>This metadata element should be based on a mapping of the
participation function defined in the document to the set of author
roles configured for the affinity domain.</p>
</td>
<td>
<p>Composition.author where the Reference is to a
PractitionerRole</p>
</td>
<td>
<p>If the context of the CDA coincides with that of the affinity domain,
then the following x-path may be appropriate:<br />
/ClincicalDocument/author/<br />
participationFunction</p>
</td>
</tr>
<tr class="odd">
<td>
<p>authorSpecialty</p>
</td>
<td>
<p>This metadata element should be based on a mapping of the code
associated with the author to detailed defined classification system for
healthcare providers such configured in the affinitity domain. Possible
classifications include those found in SNOMED-CT, or the HIPAA
Healthcare Provider Taxonomy.</p>
</td>
<td>
<p>Composition.author where the Reference is a PractitionerRole use
the PractitionerRole.speciality</p>
</td>
<td>
<p>If the context of the CDA coincides with that of the affinity domain,
then the following x-path may be appropriate:<br />
/ClinicalDocument/author/<br />
assignedAuthor/code</p>
</td>
</tr>
<tr class="even">
<td>
<p>classCode</p>
</td>
<td>
<p>Derived from a mapping to an Affinity Domain specified coded value to
use and coding system. Affinity Domains are encouraged to use the
appropriate value for Type of Service, based on the LOINC Type of
Service (see Page 53 of the LOINC User's Manual).</p>
</td>
<td>
<p>Must be consistent with Composition.category</p>
</td>
<td>
<p>Must be consistent with /ClinicalDocument/code/@code</p>
</td>
</tr>
<tr class="odd">
<td>
<p>classCodeDisplayName</p>
</td>
<td>
<p>DisplayName of the classCode derived appropriate Display Name based
on the Type of Service.</p>
</td>
<td>
<p>Must be consistent with Composition.category</p>
</td>
<td>
<p>Must be consistent with /ClinicalDocument/code/@code</p>
</td>
</tr>
<tr class="even">
<td>
<p>confidentialityCode</p>
</td>
<td>
<p>Derived from a mapping of the document confidentialityCode and other
security labels to Affinity Domain specified coded values and coding
system.</p>
</td>
<td>
<p>Derived from Composition.confidentiality,
Composition.meta.security</p>
</td>
<td>
<p>/ClinicalDocument/<br />
confidentialityCode/@code<br />
-AND/OR-<br />
/ClinicalDocument/authorization/<br />
consent[<br />
templateId/@root=<br />
'1.3.6.1.4.1.19376.1.5.3.1.2.5'<br />
] /code/@code</p>
</td>
</tr>
<tr class="odd">
<td>
<p>comments</p>
</td>
<td>
<p>There is no well-known element in a document to derive a simple
comment.</p>
</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>
<p>creationTime</p>
</td>
<td>
<p>Times specified in clinical documents may be specified with a
precision in fractional sections, and may contain a time zone offset. In
the XDS Metadata, it can be precise to the second, and is always given
in UTC, so the timezone offset if present must be added to the current
time to obtain the UTC time.</p>
</td>
<td>
<p>Composition.date</p>
</td>
<td>
<p>/ClinicalDocument/effectiveTime</p>
</td>
</tr>
<tr class="odd">
<td>
<p>entryUUID</p>
</td>
<td>
<p>This element identifies the Document Entry, not the document.</p>
</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>
<p>eventCodeList</p>
</td>
<td>
<p>These values express a collection of keywords that may be relevant to
the consumer of the documents in the registry. They may come from
anywhere in the document, according to its purpose.</p>
</td>
<td>
<p>Composition.event</p>
</td>
<td>
<p>They may come from anywhere in the CDA document, according to its
purpose.</p>
</td>
</tr>
<tr class="odd">
<td>
<p>eventCodeDisplayNameList</p>
</td>
<td>
<p>These are the display names for the collection of keywords described
above.</p>
</td>
<td>
<p>Composition.event</p>
</td>
<td>
<p>These are the display names for the collection of keywords described
above.</p>
</td>
</tr>
<tr class="even">
<td>
<p>formatCode</p>
</td>
<td>
<p>The format code for each PCC Document content profile is provided
within the document specifications.</p>
</td>
<td>
<p>Bundle.meta.profile</p>
</td>
<td>
<p>The format code for each PCC Document content profile is provided
within the document specifications.</p>
<p>Usually related to the CDA template id.</p>
</td>
</tr>
<tr class="odd">
<td>
<p>healthcareFacilityTypeCode</p>
</td>
<td>
<p>A fixed value assigned to the Document Source and configured form a
set of Affinity Domain defined values. Usually from a mapping to an
Affinity Domain specific ValueSet.</p>
</td>
<td>
<p>May be derived from Composition.author where the Reference is to an
Organization</p>
</td>
<td>
<p>Must be consistent with /clinicalDocument/code</p>
</td>
</tr>
<tr class="even">
<td>
<p>healthcareFacility<br />
TypeCodeDisplay<br />
Name</p>
</td>
<td>
<p>The display name for the healthcare facility type code indicated
above.</p>
</td>
<td>
<p>May be derived from Composition.author where the Reference is to an
Organization</p>
</td>
<td>
<p>Must be consistent with /clinicalDocument/code</p>
</td>
</tr>
<tr class="odd">
<td>
<p>languageCode</p>
</td>
<td>
<p>The human language of the narrative within the document</p>
</td>
<td>
<p>Composition.meta. language</p>
</td>
<td>
<p>/ClinicalDocument/languageCode</p>
</td>
</tr>
<tr class="even">
<td>
<p>legalAuthenticator</p>
</td>
<td></td>
<td>
<p>Composition.attester</p>
</td>
<td>
<p>$person &lt;= /ClinicalDocument/<br />
legalAuthenticator</p>
<p>The legalAuthenticator can be formatted using the following XPath
expression, where $person in the expression below represents the
legalAuthenticator.<br />
concat(<br />
$person/id/@extension,"^",<br />
$person/assignedPerson/name/family,"^",<br />
$person/assignedPerson/name/given[1],"^",<br />
$person/assignedPerson/name/given[2],"^",<br />
$person/assignedPerson/name/suffix,"^",<br />
$person/assignedPerson/name/prefix,"^",<br />
"^^^&amp;", $person/id/@root,"&amp;ISO")</p>
</td>
</tr>
<tr class="odd">
<td>
<p>mimeType</p>
</td>
<td>
<p>The mime type of the document.</p>
</td>
<td>
<p>see <a
href="http://hl7.org/fhir/http.html#mime-type">http://hl7.org/fhir/http.html#mime-type</a></p>
</td>
<td>
<p>text/xml</p>
</td>
</tr>
<tr class="even">
<td>
<p>patientId</p>
</td>
<td>
<p>The XDS Affinity Domain patient ID can be mapped from the patient
identity in the document by using transactions from the ITI patient
identity profiles.</p>
<p>See sourcePatientId below.</p>
</td>
<td>
<p>Composition.subject</p>
</td>
<td>
<p>$patID &lt;= /ClinicalDocument/recordTarget/<br />
patientRole/id</p>
</td>
</tr>
<tr class="odd">
<td>
<p>practiceSettingCode</p>
</td>
<td>
<p>This elements should be based on an Affinity Domain managed ValueSet
of coarse classification system for the class of specialty practice.
Recommend the use of the classification system for Practice Setting,
such as that described by the Subject Matter Domain in LOINC.</p>
</td>
<td>
<p>May be derived from Composition.author where the Reference is to an
Organization</p>
</td>
<td></td>
</tr>
<tr class="even">
<td>
<p>practiceSettingCodeDisplayName</p>
</td>
<td>
<p>This element shall contain the display names associated with the
codes described above.</p>
</td>
<td>
<p>May be derived from Composition.author where the Reference is to an
Organization</p>
</td>
<td></td>
</tr>
<tr class="odd">
<td>
<p>serviceStartTime</p>
</td>
<td>
<p>Times specified in clinical documents may be specified with a
precision in fractional sections, and may contain a time zone offset. In
the XDS Metadata, it can be precise to the second, and is always given
in UTC, so the timezone offset if present must be added to the current
time to obtain the UTC time.</p>
</td>
<td>
<p>Composition.event.period</p>
</td>
<td>
<p>/ClinicalDocument/documentationOf/<br />
serviceEvent/effectiveTime/low/<br />
@value</p>
</td>
</tr>
<tr class="even">
<td>
<p>serviceStopTime</p>
</td>
<td>
<p>Times specified in clinical documents may be specified with a
precision in fractional sections, and may contain a time zone offset. In
the XDS Metadata, it can be precise to the second, and is always given
in UTC, so the timezone offset if present must be added to the current
time to obtain the UTC time.</p>
</td>
<td>
<p>Composition.event.period</p>
</td>
<td>
<p>/ClinicalDocument/documentationOf/<br />
serviceEvent/effectiveTime/high/<br />
@value</p>
</td>
</tr>
<tr class="odd">
<td>
<p>sourcePatientId</p>
</td>
<td>
<p>This element contains the patient id as is known in the source
domain.</p>
</td>
<td>
<p>Composition.subject</p>
</td>
<td>
<p>$patID &lt;= /ClinicalDocument/recordTarget/<br />
patientRole/id</p>
<p>The patientId can be formatted using the following XPath expression,
where $patID in the expression below represents the appropriate
identifier.<br />
concat($patID/@extension,"^^^&amp;", $patID/@root, "&amp;ISO")</p>
</td>
</tr>
<tr class="even">
<td>
<p>sourcePatientInfo</p>
</td>
<td>
<p>The sourcePatientInfo metadata element can be assembled from various
components of the patientRole element in the clinical document.</p>
</td>
<td>
<p>Composition.subject</p>
</td>
<td>
<p>/ClinicalDocument/recordTarget/<br />
patientRole</p>
</td>
</tr>
<tr class="odd">
<td>
<p>title</p>
</td>
<td>
<p>/ClinicalDocument/title</p>
</td>
<td>
<p>Composition.title</p>
</td>
<td>
<p>/ClinicalDocument/title</p>
</td>
</tr>
<tr class="even">
<td>
<p>typeCode</p>
</td>
<td>
<p>The typeCode should be mapped to an Affinity Domain managed ValueSet
of document type codes. One suggested coding system to use for typeCode
is LOINC, in which case the mapping step can be omitted.</p>
</td>
<td>
<p>Composition.type</p>
</td>
<td>
<p>/ClinicalDocument/code/@code</p>
</td>
</tr>
<tr class="odd">
<td>
<p>typeCodeDisplay<br />
Name</p>
</td>
<td>
<p>The display name of the typeCode above.</p>
</td>
<td>
<p>Composition.type</p>
</td>
<td>
<p>/ClinicalDocument/code/@displayName</p>
</td>
</tr>
<tr class="even">
<td>
<p>uniqueId</p>
</td>
<td>
<p>The uniqueId is the unique id within the document.</p>
</td>
<td>
<p>Composition.identifier (business identifier)</p>
<p>or</p>
<p>full URI to the Composition if no business identifier given</p>
</td>
<td>
<p>$docID &lt;= /ClinicalDocument/id</p>
<p>The uniqueId can be formatted using the following XPath expression,
where $docID in the expression below represents the identifier.<br />
concat($docID/@root,"^", $docID/@extension)</p>
</td>
</tr>
</tbody>
</table>

#### 4.1.1.1 XDSSubmissionSet Metadata

The submission set metadata is as defined for XDS, and is not
necessarily affected by the content of the clinical document. Metadata
values in an XDSSubmissionSet with names identical to those in the
XDSDocumentEntry may be inherited from XDSDocumentEntry metadata, but
this is left to XDS Affinity Domain policy and/or application
configuration.

For XDR and XDM the XDS Submission Set intendedRecipient attribute may
be populated as specified in the table below.

| XDSSubmissionSet Attribute | FHIR Document | Source/ Value |
|----------------------------|---------------|---------------|
| intendedRecipient | NA | \$person <= /ClinicalDocument/intendedRecipient<br />and/or<br />\$inst <= /ClinicalDocument/intendedRecipient/receivedOrganization
{: .grid}

#### 4.1.1.2 Use of XDS Submission Set

This content format uses the XDS Submission Set to create a package of
information to send from one provider to another. All documents
referenced by the Medical Summary in this Package must be in the
submission set.

#### 4.1.1.3 Use of XDS Folders

No specific requirements identified.

#### 4.1.1.4 Configuration

IHE Content Profiles using this binding require that Content Creators
and Content Consumers be configurable with institution and other
specific attributes or parameters. Implementers should be aware of these
requirements to make such attributes easily configurable. There shall be
a mechanism for the publishing and distribution of style sheets used to
view clinical documents.


---

// File: input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time.  For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>

The Test Plan builds upon quality testing of Document Sharing, and IPS Content. This Test Plan focuses on the intersection between IPS and the Document Sharing Implementation Guides.

## Introduction

Given that IPS has test plans, test procedures, test tools, and examples;

And that Document Sharing has test plans, test procedures, test tools, and examples;

When IPS is communicated using Document Sharing

Then the interaction between Document Sharing and IPS shall follow the sIPS Implementation Guide.

### Unit Test Procedure

#### IPS

##### Content Creator

When an IPS is created by a Content Creator, then it shall comply with the IPS specification and be tested with the IPS tests.

##### Content Consumer

The Content Consumer shall be able to consume without failure an IPS Document conforming with the IPS specification and be tested with the IPS tests. The Content Consumer shall be robust to IPS Document content that deviates from the IPS specification.

#### Document Sharing

When an IPS is communicated by a Content Creator, then the communications shall comply with the Document Sharing specifications and be tested with the IHE Document Sharing tests.

### Integration Test Procedure

Based on the IHE Integration Statement for the System Under Test (SUT), the integration between the IPS and Document Sharing shall be tested.

#### Content Creator

Content Creator shall be able to show sharing using all of the Document Sharing methods claimed as grouped with the Content Consumer.

#### Content Consumer

Content Consumer shall be able to consume IPS content shared using all of the Document Sharing methods claimed as grouped with the Content Consumer.



---

// File: input/pagecontent/volume-1.md


The Sharing of IPS (sIPS) IHE Profile provides for methods of exchanging the [HL7 International Patient Summary (IPS)]({{site.data.fhir.hl7ips}}), using [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) but does not modify the [HL7 IPS]({{site.data.fhir.hl7ips}}) specification. The [International Patient Summary (IPS)]({{site.data.fhir.hl7ips}}) content, as defined in the [ISO 27269](https://www.iso.org/standard/79491.html) data model specification, utilizes IHE's [document sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) infrastructure including cross-community, HIE, direct exchange models, and more. It has been designed specifically to remove barriers to adoption, by leveraging architectures that are currently implemented, well-established, and robust. The sIPS Profile provides implementation guidance to vendors and implementers and joins a growing suite of IPS standards artifacts contributed by a variety of [Standards Development Organizations (SDOs)](https://international-patient-summary.net/) and coordinated by the [Joint Initiative Council for Global Health Informatics Standardization (JIC)](http://jointinitiativecouncil.org/).

An [HL7 IPS]({{site.data.fhir.hl7ips}}) document is an electronic health record extract, taken at a point in time, containing essential healthcare information about a subject of care. It is designed for supporting the use case scenario for planned and unplanned, cross border care. Although it is intended to be used across international borders, it is equally useful to exchange information across any jurisdictional border, including those within a particular region or country. The IPS dataset is minimal and non-exhaustive; specialty-agnostic and condition-independent but still clinically relevant. The [HL7 IPS]({{site.data.fhir.hl7ips}}) specification is composed of a set of robust, well-defined and potentially reusable sets of core data items (indicated as the IPS library in the figure below).

This profile leverages the [HL7 IPS]({{site.data.fhir.hl7ips}}) content specification for FHIR. Due to the minimal global uptake of the [CDA encoding of the IPS](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=483) at this time, the focus of the sIPS Profile is currently based on the specification provided in the [HL7 FHIR IPS IG]({{site.data.fhir.hl7ips}}). Any document conforming to the HL7 base IPS specification can be exchanged using sIPS.

The sIPS Profile provides guidance to implementers on how a number of important functions may be leveraged to support key IPS use cases. These include:

- Publishing an IPS
- On Demand Access to an IPS
- Retrieving an IPS
- Pushing an IPS to a Recipient

The IPS, as a current medical summary, is an excellent document for the "On-Demand" capability of the Document Sharing infrastructure. Further details for IPS use of [On-Demand are outlined below](volume-1.html#156422--making-on-demand-access-to-ips-available). IHE Document Sharing also has "Stable" and "Delayed Assembly" document entry types that are further explained in the [HIE Whitepaper: Dynamic Documents](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#212-dynamic-documents).

<figure>
<img alt="mXDE Flow from Documents to Resources" src="IPS_doc_library.png" width="70%">
<figcaption><b>Figure 1:56-1: The IPS Product and By-products</b></figcaption>
</figure>
<br clear="all">

## 1:56.1 sIPS Actors, Transactions, and Content Modules

<a name="actors-and-transactions"> </a>

- [Content Creator](#creator)
- [Content Consumer](#consumer)

<figure>
{%include docSharing.svg%}
<figcaption><b>Figure 1:56.1-1: sIPS Actor Diagram</b></figcaption>
</figure>
<br clear="all">

### 1:56.1.1 Actors

The actors in this profile are described in more detail in the sections below.

<a name="creator"> </a>

#### 1:56.1.1.1 Content Creator

The [Content Creator](pcc.html#31-document-sharing-pcc-1) creates the [IPS content]({{site.data.fhir.hl7ips}}) and shares it using one of the methods defined in the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

FHIR Capability Statement for [Content Creator](CapabilityStatement-IHE.sIPS.ContentCreator.html)

The HL7 IPS is serialized into a FHIR Document Bundle and encoded as a document following the [PCC Serializing FHIR Documents](pcc.html#31-document-sharing-pcc-1).
The HL7 IPS is mapped to the [Document Sharing Metadata according to PCC Volume 2: 4.1](pcc.html#4-ihe-patient-care-coordination-bindings). This shows how to map the FHIR Composition resource elements into XDS/XDM/XDR/XCA [Document Entry](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2) and MHD [FHIR DocumentReference](https://profiles.ihe.net/ITI/MHD/32_fhir_maps.html) elements.

<a name="consumer"> </a>

#### 1:56.1.1.2 Content Consumer

The [Content Consumer](pcc.html#31-document-sharing-pcc-1) consumes the [IPS content]({{site.data.fhir.hl7ips}}) and obtains it using one of the methods defined in the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

FHIR Capability Statement for [Content Consumer](CapabilityStatement-IHE.sIPS.ContentConsumer.html)

The HL7 IPS is mapped to the [Document Sharing Metadata according to PCC Volume 2: 4.1](pcc.html#4-ihe-patient-care-coordination-bindings). This shows how to map the FHIR Composition resource elements into XDS/XDM/XDR/XCA [Document Entry](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2) and MHD [FHIR DocumentReference](https://profiles.ihe.net/ITI/MHD/32_fhir_maps.html) elements.

### 1:56.1.2 IPS Content

The Content Creator and Content Consumer share the [IPS content]({{site.data.fhir.hl7ips}}) using one of the methods defined in the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

The HL7 IPS is mapped to the [Document Sharing Metadata according to PCC Volume 2: 4.1](pcc.html#4-ihe-patient-care-coordination-bindings). This shows how to map the FHIR Composition resource elements into XDS/XDM/XDR/XCA [Document Entry](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2) and MHD [FHIR DocumentReference](https://profiles.ihe.net/ITI/MHD/32_fhir_maps.html) elements.

<a name="actor-options"> </a>

## 1:56.2 sIPS Actor Options

Options that may be selected for each actor in this implementation guide, are listed in Table 3.2-1 below. Dependencies
between options when applicable are specified in notes.

|     Actor        |      Option          |
|------------------|----------------------|
| Content Consumer | View                 |
| Content Consumer | Document Import      |
| Content Consumer | Discrete Data Import |
{: .grid}

### 1:56.2.1 View Option

This option defines the processing requirements placed on Content Consumers for providing
access, rendering and management of the medical document. See the [View Option in IHE PCC TF-2:3.1.1](pcc.html#31-document-sharing-pcc-1) for more details on this option.

The Content Consumer Actor shall be able to present a view of the document. Minimal view guidance following [FHIR core Document Presentation](http://hl7.org/fhir/documents.html#presentation).

### 1:56.2.2 Document Import Option

This option defines the processing requirements placed on Content Consumers for providing
access, and importing the entire medical document and managing it as part of the patient record.
See the [Document Import Option in IHE PCC TF-2:3.1.2](pcc.html#31-document-sharing-pcc-1) for more details on this option.

### 1:56.2.3 Discrete Data Import Option

This option defines the processing requirements placed on Content Consumers for providing
access, and importing discrete data from selected sections of the medical document and
managing them as part of the patient record. See the [Discrete Data Import Option in IHE PCC TF-2:3.1.4](pcc.html#31-document-sharing-pcc-1) for more details on this option.

<a name="required-groupings"> </a>

## 1:56.3 sIPS Required Actor Groupings

The Content Creator and Content Consumer communicate the content using the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

The Content Creator shall be grouped with a Document Source actor from one of the Document Sharing Implementation Guides (e.g. XDS, XCA, XDM, XDR, MHD, MHDS, etc).

The Content Consumer shall be grouped with a Document Consumer actor from one of the Document Sharing Implementation Guides (e.g. XDS, XCA, XDM, XDR, MHD, MHDS, etc).

Document Sharing [Health Information Exchange Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) includes additional HIE functionalities that are covered in the following sections:
- [Document Sharing: Profiles](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#3-document-sharing-profiles)
- [Consuming data as FHIR Resources: Profiles, and Content](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#4-consuming-data-as-fhir-resources)
- [Patient identity Management: Whitepaper, and Profiles](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#5-patient-identity-management)
- [Provider Directory Solutions: Profiles, and Content](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#6-common-provider-directory)
- [Security and Privacy Solutions: Handbooks, Profiles, and Content](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#7-security-and-privacy)

<a name="overview"> </a>

## 1:56.4 sIPS Overview

This Implementation Guide simply hooks [HL7 IPS]({{site.data.fhir.hl7ips}}/index.html) to IHE [Document Sharing (XDS, XCA, XDR, XDM, MHD, MHDS)](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html), using existing Content Creator / Content Consumer actors that already support this binding.

### 1:56.4.1 Concepts

The Concepts of [Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) are defined in the [IHE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html), and [ITI Profiles](https://profiles.ihe.net/ITI/).

The Concepts of the [HL7 International Patient Summary (IPS)]({{site.data.fhir.hl7ips}}/index.html) are defined in the [HL7 Implementation Guide]({{site.data.fhir.hl7ips}}/index.html).

The [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) infrastructures define a common set of Document Metadata, Submission Set, and Folders. There are [defined methods of communicating documents](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#3-document-sharing-profiles) including push, centralized registry, and federated discovery and retrieval. The metadata model is designed to be content agnostic so can support any past or future document specification, which enables all existing networks to support the IPS without modification.

A Document Entry (aka FHIR DocumentReference) is metadata about a document. This metadata is designed to support provenance, lifecycle, authenticity, patient identity, privacy, and exchange of the document that is described. The document can be any kind of format, in this content module we are focused on the [International Patient Summary (IPS) document]({{site.data.fhir.hl7ips}}) and the format of JSON or XML. Submission Set is the metadata about the publication event, who published these documents, why, when, where, etc. The Folder is an adhoc grouping mechanism that can be used for purposes like grouping a clinical episode. Further explanation of the [Value of Metadata](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#26-value-of-metadata) is covered in the [HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

<figure>
{%include on-demand.svg%}
<figcaption><b>Figure 1:56.4.1-1: Example On-Demand Relationship to Snapshot Stable Entries</b></figcaption>
</figure>
<br clear="all">

### 1:56.4.2 Use Cases

### 1:56.4.2.1 Publishing IPS

```Gherkin
Given that the HL7 FHIR IPS Implementation Guide provides a Medical Summary in FHIR format
And that IHE Document Sharing is a recognized document sharing infrastructure
When a FHIR IPS is published
And there is a need to make it discoverable
Then I need to have clear specification on how I express in Document Sharing the existence of a FHIR IPS sources
```

Note: the above use-case is written in [Gherkin](https://cucumber.io/docs/gherkin/), a use-case language optimized for automated testing.

See further discussion:
- General explanation of [Centralized Discovery and Retrieve in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#32-centralized-discovery-and-retrieve)
- General explanation of [Federated Discover and Retrieve in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#33-federated-discovery-and-retrieve)
- General explanation of [Document Publishing in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#321-document-publishing)

### 1:56.4.2.2  Making On-Demand Access to IPS Available

```Gherkin
Given that the HL7 FHIR IPS Implementation Guide provides a Medical Summary in FHIR format
And that IHE Document Sharing is a recognized document sharing infrastructure
When an FHIR IPS could be made available on-demand
And there is a need to make it discoverable
Then I need to have clear specification on how I express in Document Sharing the existence of a FHIR IPS sources
```

See further discussion:
- General explanation of [Centralized Discovery and Retrieve in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#32-centralized-discovery-and-retrieve)
- General explanation of [Federated Discover and Retrieve in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#33-federated-discovery-and-retrieve)
- General explanation of [Dynamic Documents in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#212-dynamic-documents)
- Content Module specific for IPS On-Demand - [3:5.9.2.1.2 On-Demand](content.html#359212-on-demand)

### 1:56.4.2.3  Retrieving an IPS

```Gherkin
Given that the HL7 FHIR IPS Implementation Guide provides a Medical Summary in FHIR format
And that IHE Document Sharing is a recognized document sharing infrastructure
When an application needs access to a FHIR IPS
Then I need to have clear specification on how I use Document Sharing to find FHIR IPS sources
```

See further discussion:
- General explanation of [Centralized Discovery and Retrieve in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#32-centralized-discovery-and-retrieve)
- General explanation of [Federated Discover and Retrieve in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#33-federated-discovery-and-retrieve)
- General explanation of [Document Discovery and retrieval in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#322-document-discovery)

### 1:56.4.2.4  Pushing an IPS to a Recipient

```Gherkin
Given that the HL7 FHIR IPS Implementation Guide provides a Medical Summary in FHIR format
And that IHE Document Sharing is a recognized document sharing infrastructure
When an FHIR IPS needs to be sent to a specific recipient
Then I need to have clear specification on how I use Document Sharing to find FHIR IPS sources
```

See further discussion:
- General explanation of [PUSH model of Document Sharing in the HIE Whitepaper](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#31-push)

<a name="security-considerations"> </a>

## 1:56.5 sIPS Security Considerations

See [Security and Privacy Solutions: Handbooks, Profiles, and Content](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#7-security-and-privacy).

<a name="other-grouping"> </a>

## 1:56.6 sIPS Cross-Profile Considerations

All cross-profile considerations are discussed elsewhere.


---

// File: input/fsh/capability.fsh

Instance: IHE.sIPS.ContentCreator
InstanceOf: CapabilityStatement
Title: "IHE sIPS Content Creator Actor"
Usage: #definition
* description = """
CapabilityStatement for the IHE sIPS Content Creator Actor 

The Content Creator creates the [IPS content](http://hl7.org/fhir/uv/ips/) and shares it using one of the methods defined in the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

FHIR Capability Statement for [Content Creator]{CapabilityStatement-IHE.sIPS.ContentCreator.html}

The HL7 IPS is mapped to the Document Sharing Metadata according to PCC Volume 2: 4.1. This shows how to map the FHIR Composition resource elements into XDS/XDM/XDR/XCA [Document Entry](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2) and MHD [FHIR DocumentReference](https://profiles.ihe.net/ITI/MHD/32_fhir_maps.html) elements.
"""
* url = "https://profiles.ihe.net/ITI/sIPS/CapabilityStatement/IHE.sIPS.ContentCreator"
* name = "IHE_sIPS_ContentCreator"
* title = "IHE sIPS Content Creator Actor"
* status = #active
* experimental = false
* date = "2023-02-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* document
  * mode = #producer
  * documentation = "see [IHE ITI sIPS Implementation Guide](https://profiles.ihe.net/ITI/sIPS/index.html)."
  * profile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Composition-uv-ips"

Instance: IHE.sIPS.ContentConsumer
InstanceOf: CapabilityStatement
Title: "IHE sIPS Content Consumer Actor"
Usage: #definition
* description = """
CapabilityStatement for the IHE sIPS Content Consumer Actor 

The Content Consumer consumes the [IPS content](http://hl7.org/fhir/uv/ips/) and obtains it using one of the methods defined in the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

FHIR Capability Statement for [Content Consumer]{CapabilityStatement-IHE.sIPS.ContentConsumer.html}

The HL7 IPS is mapped to the Document Sharing Metadata according to PCC Volume 2: 4.1. This shows how to map the FHIR Composition resource elements into XDS/XDM/XDR/XCA [Document Entry](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2) and MHD [FHIR DocumentReference](https://profiles.ihe.net/ITI/MHD/32_fhir_maps.html) elements.
"""
* url = "https://profiles.ihe.net/ITI/sIPS/CapabilityStatement/IHE.sIPS.ContentConsumer"
* name = "IHE_sIPS_ConsumerCreator"
* title = "IHE sIPS Content Consumer Actor"
* status = #active
* experimental = false
* date = "2023-02-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* document
  * mode = #consumer
  * documentation = "see [IHE ITI sIPS Implementation Guide](https://profiles.ihe.net/ITI/sIPS/index.html)."
  * profile = "http://hl7.org/fhir/uv/ips/StructureDefinition/Composition-uv-ips"



---

// File: input/fsh/ex-documentReference.fsh


Instance:   ex-DocumentReference-Bundle-01-xml
InstanceOf: IHE.MHD.UnContained.Comprehensive.DocumentReference
//InstanceOf: IHE.MHD.Minimal.DocumentReference
Title:      "DocumentReference for the Bundle-01 IPS document in XML"
Description: """
Example of a Comprehensive DocumentReference resource.

- This is for the XML encoding
- Where the IPS Bundle is [the IPS examples 01](https://hl7.org/fhir/uv/ips/STU1.1/Bundle-IPS-examples-Bundle-01.html) 
- This is fully filled for all mandatory elements.
- IPS has multiple authenticators, XDS DocumentEntry has only one available
- IPS does not have a class, Comprehensive requires a category - replicated the type.
- IPS didn't have a declared language, presumed US
- made up an inline Patient
- facility and practice setting come from publisher policy or setting and are not derived from Composition
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* masterIdentifier.value = "3f69e0a5-2177-4540-baab-7a5d0877428f"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:0c287d32-01e3-4d87-9953-9fc59407eb21"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #application/fhir+xml
// This URL would be used to retrieve the content, and in this case that would be the given FHIR Bundle
* content.attachment.url = "https://hl7.org/fhir/uv/ips/STU1.1/Bundle-IPS-examples-Bundle-01.xml"
//* content.attachment.url = "http://example.com/fhir/bundle-1.xml"
* type = http://loinc.org#60591-5 "Patient summary Document"
// class does not exist in this example, so replicate the type
* category = http://loinc.org#60591-5 "Patient summary Document"
* subject = Reference(Patient/2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* date = 2017-12-11T14:30:00+01:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* author = Reference(Practitioner/1c616b24-3895-48c4-9a02-9a64110351ef)
* authenticator = Reference(Practitioner/1c616b24-3895-48c4-9a02-9a64110351ef)
* context.related = Reference(Organization/890751f4-2924-4636-bab7-efffc7f3cf15)
* custodian = Reference(Organization/890751f4-2924-4636-bab7-efffc7f3cf15)
* relatesTo.code = #appends
* relatesTo.target.identifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* relatesTo.target.identifier.value = "c2277753-9f90-4a95-8ddb-a0b3f6e7d292"
* content.attachment.title = "Patient Summary as of December 11, 2017 14:30"
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActClass#PCPR
* context.period.end = 2017-12-11T14:30:00+01:00
* content.format.system = "urn:ietf:rfc:3986"
* content.format.code = #http://hl7.org/fhir/uv/ips/StructureDefinition/Bundle-uv-ips
* content.attachment.creation = 2017-12-11T14:30:00+01:00
// note the size and hash are NOT included at all
* content.attachment.language = urn:ietf:bcp:47#en
* context.facilityType = http://snomed.info/sct#225732001 "Community hospital"
* context.practiceSetting =  http://snomed.info/sct#408443003 "General medical practice"
* context.sourcePatientInfo = Reference(Patient/2b90dd2b-2dab-4c75-9bb9-a355e07401e8)

Instance:   ex-DocumentReference-Bundle-01-json
InstanceOf: IHE.MHD.UnContained.Comprehensive.DocumentReference
//InstanceOf: IHE.MHD.Minimal.DocumentReference
Title:      "DocumentReference for the Bundle-01 IPS document in JSON"
Description: """
Example of a Comprehensive DocumentReference resource.

- This is for the JSON encoding. Links in Transform relationship to the XML encoded form.
- Where the IPS Bundle is [the IPS examples 01](https://hl7.org/fhir/uv/ips/STU1.1/Bundle-IPS-examples-Bundle-01.html) 
- This is fully filled for all mandatory elements.
- IPS has multiple authenticators, XDS DocumentEntry has only one available
- IPS does not have a class, Comprehensive requires a category - replicated the type.
- IPS didn't have a declared language, presumed US
- made up an inline Patient
- facility and practice setting come from publisher policy or setting and are not derived from Composition
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* masterIdentifier.value = "3f69e0a5-2177-4540-baab-7a5d0877428f"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:0c287d32-01e3-4d87-9953-9fc59407eb21"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #application/fhir+json
// This URL would be used to retrieve the content, and in this case that would be the given FHIR Bundle
* content.attachment.url = "https://hl7.org/fhir/uv/ips/STU1.1/Bundle-IPS-examples-Bundle-01.json"
//* content.attachment.url = "http://example.com/fhir/bundle-1.xml"
* type = http://loinc.org#60591-5 "Patient summary Document"
// class does not exist in this example, so replicate the type
* category = http://loinc.org#60591-5 "Patient summary Document"
* subject = Reference(Patient/2b90dd2b-2dab-4c75-9bb9-a355e07401e8)
* date = 2017-12-11T14:30:00+01:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* author = Reference(Practitioner/1c616b24-3895-48c4-9a02-9a64110351ef)
* authenticator = Reference(Practitioner/1c616b24-3895-48c4-9a02-9a64110351ef)
* context.related = Reference(Organization/890751f4-2924-4636-bab7-efffc7f3cf15)
* custodian = Reference(Organization/890751f4-2924-4636-bab7-efffc7f3cf15)
* relatesTo.code = #appends
* relatesTo.target.identifier.system = "urn:oid:2.16.724.4.8.10.200.10"
* relatesTo.target.identifier.value = "c2277753-9f90-4a95-8ddb-a0b3f6e7d292"
* content.attachment.title = "Patient Summary as of December 11, 2017 14:30"
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActClass#PCPR
* context.period.end = 2017-12-11T14:30:00+01:00
* content.format.system = "urn:ietf:rfc:3986"
* content.format.code = #http://hl7.org/fhir/uv/ips/StructureDefinition/Bundle-uv-ips
* content.attachment.creation = 2017-12-11T14:30:00+01:00
// note the size and hash are NOT included at all
* content.attachment.language = urn:ietf:bcp:47#en
* context.facilityType = http://snomed.info/sct#225732001 "Community hospital"
* context.practiceSetting =  http://snomed.info/sct#408443003 "General medical practice"
* context.sourcePatientInfo = Reference(Patient/2b90dd2b-2dab-4c75-9bb9-a355e07401e8)

// this JSON encoding is indicated as transform of the XML encoding (could be either way, but XDS has one-way relationship)
* relatesTo.code = #transforms
* relatesTo.target = Reference(DocumentReference/ex-DocumentReference-Bundle-01-xml)

Instance: 2b90dd2b-2dab-4c75-9bb9-a355e07401e8
InstanceOf: Patient
Title: "HIE managed instance of Patient for Martha DeLarosa"
Description: "Example of an PDQm managed Patient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.system = "urn:oid:2.16.840.1.113883.2.4.6.3"
* identifier.value = "574687583"
* active = true
* name.family = "DeLarosa"
* name.given = "Martha"
* telecom.system = #phone
* telecom.value = "+31788700800"
* telecom.use = #home
* gender = #female
* birthDate = "1972-05-01"
* address.line = "Laan Van Europa 1600"
* address.city = "Dordrecht"
* address.postalCode = "3317 DB"
* address.country = "NL"
* contact.relationship	= http://terminology.hl7.org/CodeSystem/v3-RoleCode#MTH
* contact.name.family = "Mum"
* contact.name.given = "Martha"
* contact.telecom.system = #phone
* contact.telecom.value = "+33-555-20036"
* contact.telecom.use = #home
* contact.address.line = "Promenade des Anglais 111"
* contact.address.city = "Lyon"
* contact.address.postalCode = "69001"
* contact.address.country = "FR"


Instance: 1c616b24-3895-48c4-9a02-9a64110351ef
InstanceOf: Practitioner
Title: "HIE managed instance of Practitioner for Beetje van Hulp"
Description: "Example of mCSD managed Practitioner"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.system = "urn:oid:2.16.528.1.1007.3.1"
* identifier.value = "129854633"
* identifier.assigner.display = "CIBG"
* active = true
* name.family = "van Hulp"
* name.given = "Beetje"
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360#MD "Doctor of Medicine"

Instance: 890751f4-2924-4636-bab7-efffc7f3cf15
InstanceOf: Organization
Title: "HIE Managed instance of Organization for Anorg Aniza"
Description: "Example of mCSD managed Organization"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.system = "urn:oid:2.16.528.1.1007.3.3"
* identifier.value = "564738757"
* active = true
* name = "Anorg Aniza Tion BV / The best custodian ever"
* telecom.system = #phone
* telecom.value =  "+31-51-34343400"
* telecom.use = #work
* address.use = #work
* address.line = "Houttuinen 27"
* address.city = "Dordrecht"
* address.postalCode = "3311 CE"
* address.country = "NL"


---

// File: input/images-source/docSharing.plantuml

@startuml
hide footbox
agent "Content\nCreator" as Creator
agent "Content\nConsumer" as Consumer
cloud "Share Content" as cloud
Creator -> cloud : IPS
cloud -> Consumer : IPS
@enduml


---

// File: input/images-source/on-demand.plantuml

@startuml
abstract  "DocumentReference 0" as od {
On-Demand entry
IPS Summary
}
abstract "DocumentReference 1" as sn1 {
Stable entry
IPS Summary
January 1, 2023
}
abstract "DocumentReference 2" as sn2 {
Stable entry
IPS Summary
July 1, 2023
}
entity "IPS 1 document" as i1 {
    ~~~
    ~~~
    ~~~
    ~~~
}
entity "IPS 2 document" as i2 {
    ~~~
    ~~~
    ~~~
    ~~~
}
od <-down- sn1 : snapshot
od <-down- sn2 : snapshot
sn1 -down-+ i1 : instance
sn2 -down-+ i2 : instance
@enduml

---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/ITI.sIPS/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/ITI.sIPS/issues

---

