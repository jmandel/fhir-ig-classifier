File: repos/IHE_SLASH_ITI.SVCM/sushi-config.yaml

# sushi-config.yaml is documented https://fshschool.org/docs/sushi/configuration/
# ───────────────────────────────────────────────────
# the id should be lowercase made up of "ihe." + {domain acronym} + "." + {profile acronym/short-name}
# e.g. ihe.iti.mhds, or ihe.iti.basicaudit
id: ihe.iti.svcm
canonical: https://profiles.ihe.net/ITI/SVCM
name: IHE_ITI_SVCM
title: "Sharing Valuesets, Codes, and Maps (SVCM)"
description: "The Sharing Valuesets, Codes, and Maps (SVCM) Profile defines a lightweight interface through which healthcare systems may retrieve centrally managed uniform nomenclature and mappings between code systems based on the HL7 Fast Healthcare Interoperability Resources (FHIR) specification."
#date: 2022-10-21
version: 1.5.2-current
releaseLabel: ci-build
#releaseLabel: ballot
#releaseLabel: Trial-Implementation
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
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
#copyright: IHE http://www.ihe.net/Governance/#Intellectual_Property
copyrightYear: 2023+
dependencies:
  ihe.iti.balp: 1.1.x # current # 1.1.1


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


pages:
# itemize here each narrative page. Include assigned section numbers when appropriate
  index.md:
    title: Sharing Valuesets, Codes, and Maps (SVCM)
    generation: markdown
  volume-1.md:
    title: 1:51 Sharing Valuesets, Codes, and Maps Volume 1
    generation: markdown
  ITI-95.md:
    title: 2:3.95 Query Value Set [ITI-95]
    generation: markdown
  ITI-96.md:
    title: 2:3.96 Query Code System [ITI-96]
    generation: markdown
  ITI-97.md:
    title: 2:3.97 Expand Value Set [ITI-97]
    generation: markdown
  ITI-98.md:
    title: 2:3.98 Lookup Code [ITI-98]
    generation: markdown
  ITI-99.md:
    title: 2:3.99 Validate Code [ITI-99]
    generation: markdown
  ITI-100.md:
    title: 2:3.100 Query Concept Map [ITI-100]
    generation: markdown
  ITI-101.md:
    title: 2:3.101 Translate Code [ITI-101]
    generation: markdown
  testplan.md:
    title: "Test Plan"
    generation: markdown
  other.md:
    title: Changes to Other Specifications
    generation: markdown
  issues.md:
    title: Significant Changes & Issues
    generation: markdown
  download.md:
    title: "Download and Analysis"
    generation: markdown
    
menu:
  SVCM Home: index.html
  Volume 1:
    "Introduction": volume-1.html
    "Actors and Transactions": volume-1.html#1511-svcm-actors-transactions-and-content-modules
    "Actor Options": volume-1.html#1512-svcm-actor-options
    "Required Actor Groupings": volume-1.html#1513-svcm-required-actor-groupings
    "Overview": volume-1.html#1514-svcm-overview
    "Security Considerations": volume-1.html#1515-svcm-security-considerations
    "Cross-Profile Considerations": volume-1.html#1516-svcm-cross-profile-considerations
  Volume 2:
    "Query Value Set [ITI-95]": ITI-95.html
    "Query Code System [ITI-96]": ITI-96.html
    "Expand Value Set [ITI-97]": ITI-97.html
    "Lookup Code [ITI-98]": ITI-98.html
    "Validate Code [ITI-99]": ITI-99.html
    "Query Concept Map [ITI-100]": ITI-100.html
    "Translate Code [ITI-101]": ITI-101.html
  Artifacts: artifacts.html
  Other:
    Test Plan: testplan.html
    Changes to Other IHE Specifications: other.html
    Download and Analysis: download.html


---

// File: input/pagecontent/download.md


You can download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [IHE ITI.SVCM Github Repo](https://github.com/IHE/ITI.SVCM).

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


The Sharing Valuesets, Codes, and Maps (SVCM) Profile defines a
lightweight interface through which healthcare systems may retrieve
centrally managed uniform nomenclature and mappings between code systems
based on the HL7 Fast Healthcare Interoperability Resources (FHIR)
specification.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide
This guide is organized into following sections:

- Volume 1: Profiles
  - [Overview](volume-1.html)
  - [Actors and Transactions](volume-1.html#1511-svcm-actors-transactions-and-content-modules)
  - [Actor Options](volume-1.html#1512-svcm-actor-options)
  - [Actor Required Groupings](volume-1.html#1513-svcm-required-actor-groupings)
  - [Overview](volume-1.html#1514-svcm-overview)
  - [Security Considerations](volume-1.html#1515-svcm-security-considerations)
  - [Cross Profile Considerations](volume-1.html#1516-svcm-cross-profile-considerations)
- Volume 2: Transaction Detail
  - [Query Value Set \[ITI-95\]](ITI-95.html)
  - [Query Code System \[ITI-96\]](ITI-96.html)
  - [Expand Value Set \[ITI-97\]](ITI-97.html)
  - [Lookup Code \[ITI-98\]](ITI-98.html)
  - [Validate Code \[ITI-99\]](ITI-99.html)
  - [Query Concept Map \[ITI-100\]](ITI-100.html)
  - [Translate Code \[ITI-101\]](ITI-101.html)
- Other:
  - [Changes to Other IHE Specifications](other.html)
  - [Download and Analysis](download.html)
  - [Test Plan](testplan.html)

Click on any of the links above, navigate the contents using the [Table of Contents](toc.html), or if you are looking for a specific artifact, see the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Must Support

The use of ```mustSupport``` in StructureDefinition profiles equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).

mustSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor shall populate the elements marked with MustSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit. 
The consuming actors should handle these elements being populated or being absent/empty. 
Note that sometimes mustSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.


---

// File: input/pagecontent/issues.md

## Significant changes 

### In 1.5.1

- changed codesystem and valueset to use shareable as parent
- quality improvements
- capabilityStatement improvements

### In 1.5.0

- Clarified [1:51.4.1.2 Business Identifiers](volume-1.html#151412-business-identifiers) examples.
- Converted resource constraint tables to StructureDefinition resources.
- Added BasicAudit audit resources and examples.

## Issues

IHE welcomes [New Issues](https://github.com/IHE/ITI.SVCM/issues/new/choose)
from the GitHub community. For those without GitHub access, issues may be
submitted at [ITI Public Comments](https://www.ihe.net/ITI_Public_Comments/).

As issues are submitted they will be managed on the
[SVCM GitHub Issues](https://github.com/IHE/ITI.SVCM/issues), where discussion and
workarounds may be found. These issues, when critical, will be processed using the normal
[IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting.
It is important to note that as soon as a Change Proposal is approved, it carries the same
weight as a published Implementation Guide (i.e., it is testable at an
[IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time
it is approved, even if it will not be integrated until several months later).

### Open Issues and Questions
These issues are known as part of the publication and IHE invites comments.

*None*

### Closed Issues
These issues have been decided and documented in the publication.

> - SVCM1 - For the validate and translate concept map, is an additional
> actor needed? (that can be drawn from existing actors in other
> profiles) Simplified actors to “Terminology Repository” and
> “Terminology Consumer.”

> - SVCM2 - Use of the Clinical Mapping Profile (CMAP). Decision made to
> merge the updated FHIR-enabled SVS and CMAP Profiles into one here.

> - SVCM3 - Within the document, two words are being used for “value set.”
> One word “valuesets” is being used in the title to simplify and avoid
> the use of commas in the title.

> - SVCM4 - Older SVS language on the “Retrieve multiple value sets”
> transaction on intensional and extensional value set definitions was
> removed.

> - SVCM5 - Combine discovery use case for Code System, Value Set and
> Concept Map into one or separate out Concept Map discovery as its own
> use case?
>
>   - *Decided to keep these as one as the workflow is the same.*

> - SVCM6 - Confirm title for the merged SVS and updated CMAP Profiles –
> SVCM?
>
>   - *Title confirmed*

> - SVCM7 - Need decision on how/whether to incorporate Clinical Mapping
> (CMAP) Actor Options
>
>   - *Decided to not incorporate those options*

> - SVCM8 - Are there concepts or descriptions included in X.4 that are
> unnecessary for the purposes of this profile?
>
>   - *Removed most of this section to streamline it*


---

// File: input/pagecontent/ITI-100.md

This section corresponds to transaction \[ITI-100\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-100\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 2.3.100.1 Scope

This transaction is used by the Terminology Consumer that supports the
Translate Option to solicit information about concept maps whose data
match data provided in the query parameters on the request message. The
request is received by the Terminology Repository that supports the
Translate Option. The Terminology Repository processes the request and
returns a response of the matching concept maps.

### 2:3.100.2 Actor Roles

**Table 2:3.100.2-1: Actor Roles**

| ---------- | -------------------------------------------------------------------------------------------------- |
| **Actor:** | Terminology Consumer                                                                               |
| **Role:**  | Requests concept map(s) matching the supplied set of criteria from the Terminology Repository.     |
| **Actor:** | Terminology Repository                                                                             |
| **Role:**  | Returns information for concept map(s) matching the criteria provided by the Terminology Consumer. |
{:.grid .table-striped}

### 2:3.100.3 Referenced Standards

- HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html>

### 2:3.100.4 Messages
<div>
{%include ITI-100-seq.svg%}
</div>
<div style="clear: left;"></div>
**Figure 2:3.100.4-1: Interaction Diagram**

#### 2:3.100.4.1 Search Concept Map Request Message

The Search Concept Map message is a FHIR search interaction on the
ConceptMap Resource.

##### 2:3.100.4.1.1 Trigger Events

A Terminology Consumer triggers a Search Concept Map Request to a
Terminology Repository according to the business rules for the search.
These business rules are outside the scope of this transaction.

##### 2:3.100.4.1.2 Message Semantics

A Terminology Consumer initiates a search interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#search> on the ConceptMap.
The query parameters are identified below. A Terminology Consumer may
query any combination or subset of the parameters. The target is
formatted as:

```
GET [base]/ConceptMap?[parameter=value]
```

Where \[base\] is the URL of Terminology Repository.

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details.

A Terminology Repository shall implement the parameters described below.
A Terminology Repository may choose to support additional query
parameters beyond the subset listed below. Any additional query
parameters supported shall be supported according to the core FHIR
specification.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for informative implementation material for
this transaction.

###### 2:3.100.4.1.2.1 Query Parameters

The Terminology Repository shall support the :contains and :exact
modifiers in all of the string query parameters below defined at
<http://hl7.org/fhir/R4/search.html#string>.

The Terminology Repository shall support the following search parameters
as defined at <http://hl7.org/fhir/R4/search.html#all> and
<http://hl7.org/fhir/R4/conceptmap.html#search>.

```
_id
_lastUpdated
status
identifier
name
description
title
url
version
source-system
source-uri
target-system
target-uri
```

The Terminology Repository shall also support the following prefixes for
the `_lastUpdated` parameter: `gt`, `lt`, `ge`, `le`, `sa`, and `eb`.

##### 2:3.100.4.1.3 Expected Actions

The Terminology Repository shall process the query to discover the
concept maps that match the search parameters given, and return a
response as per Section 3.100.4.2 or an error as per
<http://hl7.org/fhir/R4/search.html#errors>.

#### 2:3.100.4.2 Search Concept Map Response message

##### 2:3.100.4.2.1 Trigger Events

The Terminology Repository found concept maps matching the query
parameters specified by the Terminology Consumer as a result of a Search
Concept Map Request.

##### 2:3.100.4.2.2 Message Semantics

The Terminology Repository shall support the search response message as
defined at <http://hl7.org/fhir/R4/http.html#search> on the ConceptMap,
as defined at <http://hl7.org/fhir/R4/conceptmap.html>.

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

###### 2:3.100.4.2.2.1 FHIR ConceptMap Resource Constraints

A ConceptMap Resource returned by the Terminology Repository shall be further constrained as described in the [ConceptMap Profile for SVCM](StructureDefinition-IHE.SVCM.ConceptMap.html).

##### 2:3.100.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

#### 2:3.100.4.3 Read Concept Map Request Message

This message represents an HTTP GET from the Terminology Consumer to the
Terminology Repository and provides a mechanism for retrieving a single
ConceptMap with a known resource id.

##### 2:3.100.4.3.1 Trigger Events

When the Terminology Consumer possesses an id of a ConceptMap (either
through query, database lookup, or other mechanism) for which it
requires additional or new information, it issues a Read Concept Map
Request.

##### 2:3.100.4.3.2 Message Semantics

A Terminology Consumer initiates a read interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#read> on the ConceptMap
Resource. The target is formatted as:

```
GET [base]/ConceptMap/[resourceId]
```

Where \[base\] is the URL of Terminology Repository.

The resourceId included in the request always represents the unique id
for the ConceptMap within the scope of the URL. For example, while
http://example1.org/ihe/ConceptMap/1 and
http://example2.com/ihe/ConceptMap/1 both contain the same
\[resourceId\], they reference two different resource instances.

*Note: The use of "http" or "https" in URL does not override requirements
to use TLS for security purposes.*

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for informative implementation material for
this transaction.

##### 2:3.100.4.3.3 Expected Actions

The Terminology Repository shall process the request to retrieve the
ConceptMap that matches the given resource id, and return a response as
defined at <http://hl7.org/fhir/R4/http.html#read> or an error code as
defined at <http://hl7.org/fhir/http.html#Status-Codes>.

#### 2:3.100.4.4 Read Concept Map Response Message

The Terminology Repository’s response to a successful Read Concept Map
message shall be an **HTTP 200** (OK) Status code with a ConceptMap
Resource, or an appropriate error status code, optionally with an
OperationOutcome Resource.

##### 2:3.100.4.4.1 Trigger Events

The Terminology Repository found a ConceptMap Resource matching the
resource identifier specified by the Terminology Consumer.

##### 2:3.100.4.4.2 Message Semantics

The Read Concept Map Response is sent from the Terminology Repository to
the Terminology Consumer as a single ConceptMap, as defined at
<http://hl7.org/fhir/R4/conceptmap.html> and constrained as described in the [ConceptMap Profile for SVCM](StructureDefinition-IHE.SVCM.ConceptMap.html).

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

If the Terminology Repository is unable to produce a response in the
requested format, it shall respond with an **HTTP 4xx** error indicating
that it was unable to fulfill the request. The Terminology Repository
may be capable of servicing requests for response formats not listed,
but shall, at minimum, be capable of producing XML and JSON encodings.

##### 2:3.100.4.4.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 2:3.100.5 Security Considerations

See the general Security Consideration in [ITI TF-1: 51.5](volume-1.html#1515-svcm-security-considerations).

#### 2:3.100.5.1 Security Audit Considerations

Note that the same audit message is recorded by both Terminology Consumer and Repository. The
difference being the Audit Source element. Both sides record to show consistency
between the message sent by the Consumer and the action taken at the Registry.

The actors involved shall record audit events according to the
[Audit Event for Query Concept Map for Read by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.ConceptMap.Read.html)
or the [Audit Event for Query Concept Map for Query by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.ConceptMap.Query.html).


---

// File: input/pagecontent/ITI-101.md

This section corresponds to transaction \[ITI-101\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-101\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 2:3.101.1 Scope

This transaction is used by the Terminology Consumer that supports the
Translate Option to translate a given code from a ValueSet to a code
from another ValueSet based on a ConceptMap Resource. The request is
received by the Terminology Repository that supports the Translate
Option. The Terminology Repository processes the request and returns a
response of Parameters with the translated code.

### 2:3.101.2 Actor Roles

**Table 2:3.101.2-1: Actor Roles**

| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| **Actor:** | Terminology Consumer                                                                                                 |
| **Role:**  | Requests a translation of a code from one ValueSet to another based on a ConceptMap from the Terminology Repository. |
| **Actor:** | Terminology Repository                                                                                               |
| **Role:**  | Returns information for the translated code based on criteria provided by the Terminology Consumer.                  |
{:.grid .table-striped}

### 2:3.101.3 Referenced Standards

|          |                                                          |
| -------- | -------------------------------------------------------- |
| HL7 FHIR | HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html> |

### 2:3.101.4 Messages

<div>
{%include ITI-101-seq.svg%}
</div>
<div style="clear: left;"></div>
**Figure 2:3.101.4-1: Interaction Diagram**

#### 2:3.101.4.1 Translate Code Request Message

The Translate Code Request message is a FHIR $translate operation on the
ConceptMap Resource.

##### 2:3.101.4.1.1 Trigger Events

A Terminology Consumer triggers a Translate Code Request to a
Terminology Repository according to the business rules for the
translation. These business rules are outside the scope of this
transaction.

##### 2:3.101.4.1.2 Message Semantics

A Terminology Consumer initiates an $translate request using HTTP GET as
defined at <http://hl7.org/fhir/conceptmap-operation-translate.html> on
the ConceptMap Resource. The required input parameters are identified in
Table 2:3.101.4.1.2-1.

The URL for this operation is: `[base]/ConceptMap/$translate?[parameter=value]`

Where \[base\] is the URL of Terminology Repository.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for
this transaction.

**Table 2:3.101.4.1.2-1: Translate Code Message HTTP Input Parameters**

<table class="grid table-striped">
<thead>
<tr class="header" style="background-color: #e8e8e8;">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>url<br/>[0..1]</td>
<td>[1..1]</td>
<td>uri</td>
<td>A canonical URL for a concept map. The server must know the concept map (e.g., it is defined explicitly in the server's concept maps, or it is defined implicitly by some code system known to the server.</td>
</tr>
<tr>
<td>source<br/>[0..1]</td>
<td>[1..1]</td>
<td>uri</td>
<td>Identifies the value set used when the concept (system/code pair) was chosen. May be a logical id, or an absolute or relative location. The source value set is an optional parameter because in some cases, the client cannot know what the source value set is. However, without a source value set, the server may be unable to safely identify an applicable concept map, and would return an error. For this reason, a source value set SHOULD always be provided. Note that servers may be able to identify an appropriate concept map without a source value set if there is a full mapping for the entire code system in the concept map, or by manual intervention.</td>
</tr>
<tr>
<td>code<br/>[0..1]</td>
<td>[1..1]</td>
<td>code</td>
<td>The code that is to be translated. If a code is provided, a system must be provided.</td>
</tr>
<tr>
<td>system<br/>[0..1]</td>
<td>[1..1]</td>
<td>uri</td>
<td>The system for the code that is to be translated.</td>
</tr>
<tr>
<td>target<br/>[0..1]</td>
<td>[1..1]</td>
<td>uri</td>
<td>Identifies the value set in which a translation is sought. May be a logical id, or an absolute or relative location. If there is no target specified, the server should return all known translations, along with their source.</td>
</tr>
<tr>
<td>_format<br/>[0..1]</td>
<td></td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See <a href="https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format">ITI TF-2: Appendix Z.6</a>.</td>
</tr>
<tr>
<td>conceptMap<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the url parameter is used.</td>
<td>ConceptMap</td>
<td></td>
</tr>
<tr>
<td>conceptMapVersion<br/>[0..1]</td>
<td></td>
<td>string</td>
<td>The identifier that is used to identify a specific version of the concept map to be used for the translation. This is an arbitrary value managed by the concept map author and is not expected to be globally unique. For example, it might be a timestamp (e.g., yyyymmdd) if a managed version is not available.</td>
</tr>
<tr>
<td>version<br/>[0..1]</td>
<td></td>
<td>string</td>
<td>The version of the system, if one was provided in the source data.</td>
</tr>
<tr>
<td>coding<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the code+system parameters are used.</td>
<td>Coding</td>
<td></td>
</tr>
<tr>
<td>codeableConcept<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the code+system parameters are used.</td>
<td>CodeableConcept</td>
<td></td>
</tr>
<tr>
<td>targetsystem<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the target parameter is used.</td>
<td>uri</td>
<td></td>
</tr>
<tr>
<td>dependency<br/>[0..*]</td>
<td></td>
<td></td>
<td>Another element that may help produce the correct mapping.</td>
</tr>
<tr>
<td>dependency.element<br/>[0..1]</td>
<td></td>
<td>uri</td>
<td>The element for this dependency.</td>
</tr>
<tr>
<td>dependency.concept<br/>[0..1]</td>
<td></td>
<td>CodeableConcept</td>
<td>The value for this dependency.</td>
</tr>
<tr>
<td>reverse<br/>[0..1]</td>
<td></td>
<td>boolean</td>
<td>if this is true, then the operation should return all the codes that might be mapped to this code. This parameter reverses the meaning of the source and target parameters.</td>
</tr>
</tbody>
</table>

##### 2:3.101.4.1.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the value sets and code to be translated that matches the
parameters given and return a response as per Section 2:3.101.4.2 or an
OperationOutcome with an error message.

#### 2:3.101.4.2 Translate Code Response Message

##### 2:3.101.4.2.1 Trigger Events

The Terminology Repository found the translation details matching the
input parameters specified by the Terminology Consumer as a result of a
Translate Code Request.

##### 2:3.101.4.2.2 Message Semantics

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

The response message is a FHIR Parameters Resource with properties of
the code set based on the out parameters defined at
<http://hl7.org/fhir/conceptmap-operation-translate.html> and reproduced
in Table 2:3.101.4.2.2-1.

**Table 2:3.101.4.2.2-1: Translate Code Message HTTP Output Parameters**

<table class="grid table-striped">
<thead>
<tr class="header" style="background-color: #e8e8e8;">
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>result<br/>[1..1]</td>
<td>boolean</td>
<td>True if the concept could be translated successfully. The value can only be true if at least one returned match has an equivalence which is not unmatched or disjoint.</td>
</tr>
<tr>
<td>message<br/>[0..1]</td>
<td>string</td>
<td>Error details, for display to a human. If this is provided when result = true, the message carries hints and warnings (e.g., a note that the matches could be improved by providing additional detail).</td>
</tr>
<tr>
<td>match<br/>[0..*]</td>
<td></td>
<td>A concept in the target value set with an equivalence. Note that there may be multiple matches of equal or differing equivalence, and the matches may include equivalence values that mean that there is no match.</td>
</tr>
<tr>
<td>match.equivalence<br/>[0..1]</td>
<td>code</td>
<td>A code indicating the equivalence of the translation, using values from <a href="http://hl7.org/fhir/valueset-concept-map-equivalence.html">http://hl7.org/fhir/valueset-concept-map-equivalence.html</a></td>
</tr>
<tr>
<td>match.concept<br/>[0..1]</td>
<td>Coding</td>
<td>The translation outcome. Note that this would never have userSelected = true, since the process of translations implies that the user is not selecting the code (and only the client could know differently)</td>
</tr>
<tr>
<td>match.product<br/>[0..*]</td>
<td></td>
<td>Another element that is the product of this mapping</td>
</tr>
<tr>
<td>match.product.element<br/>[0..1]</td>
<td>uri</td>
<td>The element for this product</td>
</tr>
<tr>
<td>match.product.concept<br/>[0..1]</td>
<td>Coding</td>
<td>The value for this product</td>
</tr>
<tr>
<td>match.source<br/>[0..1]</td>
<td>uri</td>
<td>The canonical reference to the concept map from which this mapping comes from</td>
</tr>
</tbody>
</table>

##### 2:3.101.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 2:3.101.5 Security Considerations

See the general Security Consideration in [ITI TF-1: 51.5](volume-1.html#1515-svcm-security-considerations).

#### 2:3.101.5.1 Security Audit Considerations

Note that the same audit message is recorded by both Terminology Consumer and Repository. The
difference being the Audit Source element. Both sides record to show consistency
between the message sent by the Consumer and the action taken at the Registry.

The actors involved shall record audit events according to the
[Audit Event for Translate Code by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.ConceptMap.Translate.html).

---

// File: input/pagecontent/ITI-95.md

This section corresponds to transaction \[ITI-95\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-95\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 2:3.95.1 Scope

This transaction is used by the Terminology Consumer to find value sets
based on criteria it provides in the query parameters of the request
message, or to retrieve a specific value set. The request is received by
the Terminology Repository. The Terminology Repository processes the
request and returns a response of the matching value sets.

### 2:3.95.2 Actor Roles

**Table 2:3.95.2-1: Actor Roles**

| ---------- | ------------------------------------------------------------------------------------------------ |
| **Actor:** | Terminology Consumer                                                                             |
| **Role:**  | Requests value set(s) matching the supplied set of criteria from the Terminology Repository.     |
| **Actor:** | Terminology Repository                                                                           |
| **Role:**  | Returns information for value set(s) matching the criteria provided by the Terminology Consumer. |
{:.grid .table-striped}

### 2:3.95.3 Referenced Standards

- HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html>

### 2:3.95.4 Messages

<div>
{%include ITI-95-seq.svg%}
</div>
<div style="clear: left;"></div>
**Figure 2:3.95.4-1: Interaction Diagram**

#### 2:3.95.4.1 Search Value Set Request Message

The Search Value Set message is a FHIR search interaction on the
ValueSet Resource.

##### 2:3.95.4.1.1 Trigger Events

A Terminology Consumer triggers a Search Value Set Request to a
Terminology Repository according to the business rules for the search.
These business rules are outside the scope of this transaction.

##### 2:3.95.4.1.2 Message Semantics

A Terminology Consumer initiates a search interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#search> on the ValueSet.
The query parameters are identified below. A Terminology Consumer may
query any combination or subset of the parameters. The target is
formatted as:

```
GET [base]/ValueSet?[parameter=value]
```
Where \[base\] is the URL of Terminology Repository.

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details.

A Terminology Repository shall implement the parameters described below.
A Terminology Repository may choose to support additional query
parameters beyond the subset listed below. Any additional query
parameters supported shall be supported according to the core FHIR
specification.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for
this transaction.

###### 2:3.95.4.1.2.1 Query Parameters

The Terminology Repository shall support the :contains and :exact
modifiers in all of the string query parameters below defined at
<http://hl7.org/fhir/R4/search.html#string>.

The Terminology Repository shall support the following search parameters
as defined at <http://hl7.org/fhir/R4/search.html#all> and
<http://hl7.org/fhir/R4/valueset.html#search>.

```
_id
_lastUpdated
status
identifier
name
description
reference
title
url
version
```

The Terminology Repository shall also support the following prefixes for
the `_lastUpdated` parameter: `gt`, `lt`, `ge`, `le`, `sa`, and `eb`.

##### 2:3.95.4.1.3 Expected Actions

The Terminology Repository shall process the query to discover the value
sets that match the search parameters given, and return a response as
per Section 2:3.95.4.2 or an error as per
<http://hl7.org/fhir/R4/search.html#errors>.

#### 2:3.95.4.2 Search Value Set Response Message

##### 2:3.95.4.2.1 Trigger Events

The Terminology Repository found value sets matching the query
parameters specified by the Terminology Consumer as a result of a Search
Value Set Request.

##### 2:3.95.4.2.2 Message Semantics

The Terminology Repository shall support the search response message as
defined at <http://hl7.org/fhir/R4/http.html#search> on the ValueSet, as
defined at <http://hl7.org/fhir/R4/valueset.html>

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

###### 2:3.95.4.2.2.1 FHIR ValueSet Resource Constraints

A ValueSet Resource returned by the Terminology Repository shall be further constrained as described in the [ValueSet Profile for SVCM](StructureDefinition-IHE.SVCM.ValueSet.html).

##### 2:3.95.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

#### 2:3.95.4.3 Read Value Set Request Message

This message represents an HTTP GET from the Terminology Consumer to the
Terminology Repository and provides a mechanism for retrieving a single
ValueSet with a known resource id.

##### 2:3.95.4.3.1 Trigger Events

When the Terminology Consumer possesses the id of ValueSet (either
through query, database lookup, or other mechanism) for which it
requires additional or new information, it issues a Read Value Set
Request.

##### 2:3.95.4.3.2 Message Semantics

A Terminology Consumer initiates a read interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#read> on the ValueSet
Resource. The target is formatted as:

```
GET [base]/ValueSet/[resourceId]
```

Where \[base\] is the URL of Terminology Repository.

The resourceId included in the request always represents the unique id
for the ValueSet within the scope of the URL. For example, while
http://example1.org/ihe/ValueSet/1 and
http://example2.com/ihe/ValueSet/1 both contain the same \[resourceId\],
they reference two different resource instances.

*Note: The use of "http" or "https" in URL does not override requirements
to use TLS for security purposes.*

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for
this transaction.

##### 2:3.95.4.3.3 Expected Actions

The Terminology Repository shall process the request to retrieve the
ValueSet that matches the given resource id, and return a response as
defined at <http://hl7.org/fhir/R4/http.html#read> or an error code as
defined at <http://hl7.org/fhir/R4/http.html#Status-Codes>.

#### 2:3.95.4.4 Read Value Set Response Message

The Terminology Repository’s response to a successful Read Value Set
message shall be an **HTTP 200** (OK) Status code with a ValueSet
Resource, or an appropriate error status code, optionally with an
OperationOutcome Resource.

##### 2:3.95.4.4.1 Trigger Events

The Terminology Repository found a ValueSet Resource matching the
resource identifier specified by the Terminology Consumer.

##### 2:3.95.4.4.2 Message Semantics

The Read Value Set Response is sent from the Terminology Repository to
the Terminology Consumer as a single ValueSet, as defined at
<http://hl7.org/fhir/R4/valueset.html> and constrained by the [ValueSet Profile for SVCM](StructureDefinition-IHE.SVCM.ValueSet.html).

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

If the Terminology Repository is unable to produce a response in the
requested format, it shall respond with an **HTTP 4xx** error indicating
that it was unable to fulfill the request. The Terminology Repository
may be capable of servicing requests for response formats not listed,
but shall, at minimum, be capable of producing XML and JSON encodings.

##### 2:3.95.4.4.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 2:3.95.5 Security Considerations

See the general Security Consideration in [ITI TF-1: 51.5](volume-1.html#1515-svcm-security-considerations).

#### 2:3.95.5.1 Security Audit Considerations

Note that the same audit message is recorded by both Terminology Consumer and Repository. The
difference being the Audit Source element. Both sides record to show consistency
between the message sent by the Consumer and the action taken at the Registry.

The actors involved shall record audit events according to the
[Audit Event for Query Value Set for Read by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.ValueSet.Read.html)
or the [Audit Event for Query Value Set for Query by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.ValueSet.Query.html).


---

// File: input/pagecontent/ITI-96.md

This section corresponds to transaction \[ITI-96\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-96\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 2:3.96.1 Scope

This transaction is used by the Terminology Consumer to solicit
information about code systems whose data match data provided in the
query parameters on the request message. The request is received by the
Terminology Repository. The Terminology Repository processes the request
and returns a response of the matching code systems.

### 2:3.96.2 Actor Roles

**Table 2:3.96.2-1: Actor Roles**

| ---------- | -------------------------------------------------------------------------------------------------- |
| **Actor:** | Terminology Consumer                                                                               |
| **Role:**  | Requests code system(s) matching the supplied set of criteria from the Terminology Repository.     |
| **Actor:** | Terminology Repository                                                                             |
| **Role:**  | Returns information for code system(s) matching the criteria provided by the Terminology Consumer. |
{:.grid .table-striped}
### 2:3.96.3 Referenced Standards

- HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html>

### 2:3.96.4 Messages

<div>
{%include ITI-96-seq.svg%}
</div>
<div style="clear: left;"></div>
**Figure 2:3.96.4-1: Interaction Diagram**

#### 2:3.96.4.1 Search Code System Request Message

The Search Code System message is a FHIR search interaction on the
CodeSystem Resource.

##### 2:3.96.4.1.1 Trigger Events

A Terminology Consumer triggers a Search Code System Request to a
Terminology Repository according to the business rules for the search.
These business rules are outside the scope of this transaction.

##### 2:3.96.4.1.2 Message Semantics

A Terminology Consumer initiates a search interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#search> on the CodeSystem.
The query parameters are identified below. A Terminology Consumer may
query any combination or subset of the parameters. The target is
formatted as:

```
GET [base]/CodeSystem?[parameter=value]
```

Where \[base\] is the URL of Terminology Repository.

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details.

A Terminology Repository shall implement the parameters described below.
A Terminology Repository may choose to support additional query
parameters beyond the subset listed below. Any additional query
parameters supported shall be supported according to the core FHIR
specification.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for
this transaction.

###### 2:3.96.4.1.2.1 Query Parameters

The Terminology Repository shall support the :contains and :exact
modifiers in all of the string query parameters below defined at
<http://hl7.org/fhir/R4/search.html#string>.

The Terminology Repository shall support the following search parameters
as defined at <http://hl7.org/fhir/R4/search.html#all> and
<http://hl7.org/fhir/R4/codesystem.html#search>.

```
_id
_lastUpdated
status
identifier
name
description
system
title
url
version
```

The Terminology Repository shall also support the following prefixes for
the `_lastUpdated` parameter: `gt`, `lt`, `ge`, `le`, `sa`, and `eb`.

##### 2:3.96.4.1.3 Expected Actions

The Terminology Repository shall process the query to discover the code
systems that match the search parameters given, and return a response as
per Section 2:3.96.4.2 or an error as per
<http://hl7.org/fhir/R4/search.html#errors>.

#### 2:3.96.4.2 Search Code System Response Message

##### 2:3.96.4.2.1 Trigger Events

The Terminology Repository found code systems matching the query
parameters specified by the Terminology Consumer as a result of a Search Code
System Request.

##### 2:3.96.4.2.2 Message Semantics

The Terminology Repository shall support the search response message as
defined at <http://hl7.org/fhir/R4/http.html#search> on the CodeSystem,
as defined at <http://hl7.org/fhir/R4/codesystem.html>.

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

###### 2:3.96.4.2.2.1 FHIR CodeSystem Resource Constraints

A CodeSystem Resource returned by the Terminology Repository shall be further constrained as described in the [CodeSystem Profile for SVCM](StructureDefinition-IHE.SVCM.CodeSystem.html).

##### 2:3.96.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

#### 2:3.96.4.3 Read Code System Request Message

This message represents an HTTP GET from the Terminology Consumer to the
Terminology Repository and provides a mechanism for retrieving a single
CodeSystem with a known resource id.

##### 2:3.96.4.3.1 Trigger Events

When the Terminology Consumer possesses the id of the CodeSystem (either
through query, database lookup, or other mechanism) for which it
requires additional or new information, it issues a Read Code System
Request.

##### 2:3.96.4.3.2 Message Semantics

A Terminology Consumer initiates a read interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#read> on the CodeSystem
Resource. The target is formatted as:

```
GET [base]/CodeSystem/[resourceId]
```

Where \[base\] is the URL of Terminology Repository.

The resourceId included in the request always represents the unique id
for the CodeSystem within the scope of the URL. For example, while
http://example1.org/ihe/CodeSystem/1 and
http://example2.com/ihe/CodeSystem/1 both contain the same
\[resourceId\], they reference two different resource instances.

*Note: The use of "http" or "https" in URL does not override requirements
to use TLS for security purposes.*

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for
this transaction.

##### 2:3.96.4.3.3 Expected Actions

The Terminology Repository shall process the request to retrieve the
CodeSystem that matches the given resource id, and return a response as
defined at <http://hl7.org/fhir/R4/http.html#read> or an error code as
defined at <http://hl7.org/fhir/http.html#Status-Codes>.

#### 2:3.96.4.4 Read Code System Response Message

The Terminology Repository’s response to a successful Read Code System
message shall be an **HTTP 200** (OK) Status code with a CodeSystem
Resource, or an appropriate error status code, optionally with an
OperationOutcome Resource.

##### 2:3.96.4.4.1 Trigger Events

The Terminology Repository found a CodeSystem Resource matching the
resource identifier specified by the Terminology Consumer.

##### 2:3.96.4.4.2 Message Semantics

The Read Code System Response is sent from the Terminology Repository to
the Terminology Consumer as a single CodeSystem, as defined at
<http://hl7.org/fhir/R4/codesystem.html> and constrained by the [CodeSystem Profile for SVCM](StructureDefinition-IHE.SVCM.CodeSystem.html).

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

If the Terminology Repository is unable to produce a response in the
requested format, it shall respond with an **HTTP 4xx** error indicating
that it was unable to fulfill the request. The Terminology Repository
may be capable of servicing requests for response formats not listed,
but shall, at minimum, be capable of producing XML and JSON encodings.

##### 2:3.96.4.4.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 2:3.96.5 Security Considerations

See the general Security Consideration in [ITI TF-1: 51.5](volume-1.html#1515-svcm-security-considerations).

#### 2:3.96.5.1 Security Audit Considerations

Note that the same audit message is recorded by both Terminology Consumer and Repository. The
difference being the Audit Source element. Both sides record to show consistency
between the message sent by the Consumer and the action taken at the Registry.

The actors involved shall record audit events according to the
[Audit Event for Query Code System for Read by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.CodeSystem.Read.html)
or the [Audit Event for Query Code System for Query by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.CodeSystem.Query.html).


---

// File: input/pagecontent/ITI-97.md

This section corresponds to transaction \[ITI-97\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-97\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 2:3.97.1 Scope

This transaction is used by the Terminology Consumer to expand a given
ValueSet to return the full list of concepts available in that ValueSet.
The request is received by the Terminology Repository. The Terminology
Repository processes the request and returns a response of the expanded
ValueSet.

### 2:3.97.2 Actor Roles

**Table 2:3.97.2-1: Actor Roles**

| ---------- | ----------------------------------------------------------------------------------------------------- |
| **Actor:** | Terminology Consumer                                                                                  |
| **Role:**  | Requests an expanded ValueSet from the Terminology Repository.                                        |
| **Actor:** | Terminology Repository                                                                                |
| **Role:**  | Returns information for the expanded ValueSet based on criteria provided by the Terminology Consumer. |
{:.grid .table-striped}

### 2:3.97.3 Referenced Standards

- HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html>

### 2:3.97.4 Messages

<div>
{%include ITI-97-seq.svg%}
</div>
<div style="clear: left;"></div>
**Figure 2:3.97.4-1: Interaction Diagram**

#### 2:3.97.4.1 Expand Value Set Request Message

The Expand Value Set Request message is a FHIR $expand operation on the
ValueSet Resource.

##### 2:3.97.4.1.1 Trigger Events

A Terminology Consumer triggers an Expand Value Set Request to a
Terminology Repository according to the business rules for the
expansion. These business rules are outside the scope of this
transaction.

##### 2:3.97.4.1.2 Message Semantics

A Terminology Consumer initiates an $expand request using HTTP GET as
defined at <http://hl7.org/fhir/R4/valueset-operation-expand.html> on the
ValueSet Resource. The required input parameters are identified in Table
3.97.4.1.2-1.

The URL for this operation is:
```
[base]/ValueSet/$expand?[parameter=value]
```

Where \[base\] is the URL of Terminology Repository.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for
this transaction.

**Table 2:3.97.4.1.2-1: Expand Value Set Message HTTP Input Parameters**

<table class="grid table-striped">
<thead>
<tr class="header" style="background-color: #e8e8e8;">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>url<br/>
[0..1]</td>
<td>[1..1]</td>
<td>uri</td>
<td>A canonical reference to a value set. The server must know the value set (e.g., it is defined explicitly in the server's value sets, or it is defined implicitly by some code system known to the server).</td>
</tr>
<tr>
<td>_format<br/>
[0..1]</td>
<td></td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See See <a href="https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format">ITI TF-2: Appendix Z.6</a>.</td>
</tr>
<tr>
<td>valueSet<br/>
[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the url is used.</td>
<td>ValueSet</td>
<td></td>
</tr>
<tr>
<td>valueSetVersion<br/>
[0..1]</td>
<td>[0..1]</td>
<td>string</td>
<td>The identifier that is used to identify a specific version of the value set to be used when generating the expansion. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g., yyyymmdd) if a managed version is not available.</td>
</tr>
<tr>
<td>context<br/>
[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the url is used.</td>
<td>uri</td>
<td></td>
</tr>
<tr>
<td>contextDirection<br/>
[0..1]</td>
<td>[0..0]<br/>
This parameter is used with the context parameter which is not used.</td>
<td>code</td>
<td></td>
</tr>
<tr>
<td>filter<br/>
[0..1]</td>
<td></td>
<td>string</td>
<td>A text filter that is applied to restrict the codes that are returned (this is useful in a UI context). The interpretation of this is delegated to the server in order to allow to determine the most optimal search approach for the context. The server can document the way this parameter works in TerminologyCapabilities.expansion.textFilter. Typical usage of this parameter includes functionality like:
<ul>
<li>using left matching e.g., "acut ast"</li>
<li>allowing for wild cards such as %, &amp;, ?</li>
<li>searching on definition as well as display(s)</li>
<li>allowing for search conditions (and / or / exclusions)</li>
</ul>
Text Search engines such as Lucene or Solr, long with their considerable functionality, might also be used. The optional text search might also be code system specific, and servers might have different implementations for different code systems.</td>
</tr>
<tr>
<td>date<br/>
[0..1]</td>
<td></td>
<td>dateTime</td>
<td>The date for which the expansion should be generated. if a date is provided, it means that the server should use the value set / code system definitions as they were on the given date, or return an error if this is not possible. Normally, the date is the current conditions (which is the default value) but under some circumstances, systems need to generate an expansion as it would have been in the past. A typical example of this would be where code selection is constrained to the set of codes that were available when the patient was treated, not when the record is being edited. Note that which date is appropriate is a matter for implementation policy.</td>
</tr>
<tr>
<td>offset<br/>
[0..1]</td>
<td></td>
<td>integer</td>
<td>Paging support - where to start if a subset is desired (default = 0). Offset is number of records (not number of pages)</td>
</tr>
<tr>
<td>count<br/>
[0..1]</td>
<td></td>
<td>integer</td>
<td>Paging support - how many codes should be provided in a partial page view. Paging only applies to flat expansions - servers ignore paging if the expansion is not flat. If count = 0, the client is asking how large the expansion is. Servers SHOULD honor this request for hierarchical expansions as well, and simply return the overall count.</td>
</tr>
<tr>
<td>includeDesignations<br/>
[0..1]</td>
<td></td>
<td>boolean</td>
<td>Controls whether concept designations are to be included or excluded in value set expansions.</td>
</tr>
<tr>
<td>designation<br/>
[0..*]</td>
<td></td>
<td>string</td>
<td>A token that specifies a system+code that is either a use or a language. Designations that match by language or use are included in the expansion. If no designation is specified, it is at the server discretion which designations to return.</td>
</tr>
<tr>
<td>includeDefinition<br/>
[0..1]</td>
<td></td>
<td>boolean</td>
<td>Controls whether the value set definition is included or excluded in value set expansions.</td>
</tr>
<tr>
<td>activeOnly<br/>
[0..1]</td>
<td></td>
<td>boolean</td>
<td>Controls whether inactive concepts are included or excluded in value set expansions. Note that if the value set explicitly specifies that inactive codes are included, this parameter can still remove them from a specific expansion, but this parameter cannot include them if the value set excludes them</td>
</tr>
<tr>
<td>excludeNested<br/>
[0..1]</td>
<td></td>
<td>boolean</td>
<td>Controls whether or not the value set expansion nests codes or not (i.e., ValueSet.expansion.contains.contains)</td>
</tr>
<tr>
<td>excludeNotForUI<br/>
[0..1]</td>
<td></td>
<td>boolean</td>
<td>Controls whether or not the value set expansion is assembled for a user interface use or not. Value sets intended for User Interface might include 'abstract' codes or have nested contains with items with no code or abstract = true, with the sole purpose of helping a user navigate through the list efficiently, where as a value set not generated for UI use might be flat, and only contain the selectable codes in the value set. The exact implications of 'for UI' depend on the code system, and what properties it exposes for a terminology server to use. In the FHIR Specification itself, the value set expansions are generated with excludeNotForUI = false, and the expansions used when generated schema / code etc., or performing validation, are all excludeNotForUI = true.</td>
</tr>
<tr>
<td>excludePostCoordinate<br/>
[0..1]</td>
<td></td>
<td>boolean</td>
<td>Controls whether or not the value set expansion includes post coordinated codes.</td>
</tr>
<tr>
<td>displayLanguage<br/>
[0..1]</td>
<td></td>
<td>code</td>
<td>Specifies the language to be used for description in the expansions i.e., the language to be used for ValueSet.expansion.contains.display.</td>
</tr>
<tr>
<td>exclude-system<br/>
[0..*]</td>
<td></td>
<td>canonical</td>
<td>Code system, or a particular version of a code system to be excluded from the value set expansion. The format is the same as a canonical URL: [system]|[version] - e.g., http://loinc.org|2.56</td>
</tr>
<tr>
<td>system-version<br/>
[0..*]</td>
<td></td>
<td>canonical</td>
<td>Specifies a version to use for a system, if the value set does not specify which one to use. The format is the same as a canonical URL: [system]|[version] - e.g., http://loinc.org|2.56</td>
</tr>
<tr>
<td>check-system-version<br/>
[0..*]</td>
<td></td>
<td>canonical</td>
<td>Edge Case: Specifies a version to use for a system. If a value set specifies a different version, an error is returned instead of the expansion. The format is the same as a canonical URL: [system]|[version] - e.g., http://loinc.org|2.56</td>
</tr>
<tr>
<td>force-system-version<br/>
[0..*]</td>
<td></td>
<td>canonical</td>
<td>Edge Case: Specifies a version to use for a system. This parameter overrides any specified version in the value set (and any it depends on). The format is the same as a canonical URL: [system]|[version] - e.g., http://loinc.org|2.56. Note that this has obvious safety issues, in that it may result in a value set expansion giving a different list of codes that is both wrong and unsafe, and implementers should only use this capability reluctantly. It primarily exists to deal with situations where specifications have fallen into decay as time passes. If the value is override, the version used SHALL explicitly be represented in the expansion parameters.</td>
</tr>
</tbody>
</table>

###### 2:3.97.4.1.2.1 Example Request Message

An example request message from
<http://hl7.org/fhir/valueset-operation-expand.html> is:

```
GET [base]/ValueSet/$expand?url=http://acme.com/fhir/ValueSet/23
```

##### 2:3.97.4.1.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the ValueSet that matches the parameters given and return a
response as per Section 2:3.97.4.2 or an OperationOutcome with an error
message.

#### 2:3.97.4.2 Expand Value Set Response Message

##### 2:3.97.4.2.1 Trigger Events

The Terminology Repository found expanded value set matching the input
parameters specified by the Terminology Consumer as a result of a Expand
Value Set Request.

##### 2:3.97.4.2.2 Message Semantics

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

The response message is a FHIR ValueSet Resource with the expansion
element populated with the expanded ValueSet concepts.

###### 2:3.97.4.2.2.1 Example Response Message

An example response message from
<http://hl7.org/fhir/valueset-operation-expand.html> is:

```
HTTP/1.1 200 OK
[other headers]

<ValueSet xmlns="http://hl7.org/fhir">
  <!-- the server SHOULD populate the id with a newly created UUID
    so clients can easily track a particular expansion -->
  <id value="43770626-f685-4ba8-8d66-fb63e674c467"/>
  <!-- no need for meta, though it is allowed for security labels, profiles -->

  <!-- other value set details -->
  <expansion>
    <!-- when expanded -->
    <timestamp value="20141203T08:50:00+11:00"/>
    <contains>
      <!-- expansion contents -->
    </contains>
  </expansion>
</ValueSet>
```

##### 2:3.97.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 2:3.97.5 Security Considerations

See the general Security Consideration in [ITI TF-1: 51.5](volume-1.html#1515-svcm-security-considerations).

#### 2:3.97.5.1 Security Audit Considerations

Note that the same audit message is recorded by both Terminology Consumer and Repository. The
difference being the Audit Source element. Both sides record to show consistency
between the message sent by the Consumer and the action taken at the Registry.

The actors involved shall record audit events according to the
[Audit Event for Expand Value Set by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.ValueSet.Expand.html).

---

// File: input/pagecontent/ITI-98.md

This section corresponds to transaction \[ITI-98\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-98\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 2:3.98.1 Scope

This transaction is used by the Terminology Consumer to lookup a given
code to return the full details. The request is received by the
Terminology Repository. The Terminology Repository processes the request
and returns a response of the code details as a Parameters Resource.

### 2:3.98.2 Actor Roles

**Table 2:3.98.2-1: Actor Roles**

| ---------- | ---------------------------------------------------------------------------------------- |
| **Actor:** | Terminology Consumer                                                                     |
| **Role:**  | Requests code details from the Terminology Repository.                                   |
| **Actor:** | Terminology Repository                                                                   |
| **Role:**  | Returns information for the code based on criteria provided by the Terminology Consumer. |
{:.grid .table-striped}

### 2:3.98.3 Referenced Standards

- HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html> 

### 2:3.98.4 Messages

<div>
{%include ITI-98-seq.svg%}
</div>
<div style="clear: left;"></div>
**Figure 2:3.98.4-1: Interaction Diagram**

#### 2:3.98.4.1 Lookup Code Request Message

The Lookup Code Request message is a FHIR $lookup operation on the
CodeSystem Resource.

##### 2:3.98.4.1.1 Trigger Events

A Terminology Consumer triggers a Lookup Code Request to a Terminology
Repository according to the business rules for the lookup. These
business rules are outside the scope of this transaction.

##### 2:3.98.4.1.2 Message Semantics

A Terminology Consumer initiates an $lookup request using HTTP GET as
defined at <http://hl7.org/fhir/codesystem-operation-lookup.html> on the
CodeSystem Resource. The required input parameters are identified in
Table 2:3.98.4.1.2-1.

The URL for this operation is: `[base]/CodeSystem/$lookup?[parameter=value]`

Where \[base\] is the URL of Terminology Repository.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for
this transaction.

**Table 2:3.98.4.1.2-1: Lookup Code Message HTTP Input Parameters**

<table class="grid table-striped">
<thead>
<tr class="header" style="background-color: #e8e8e8;">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>code<br/>
[0..1]</td>
<td>[1..1]</td>
<td>code</td>
<td>The code that is to be located. If a code is provided, a system must be provided.</td>
</tr>
<tr>
<td>system<br/>
[0..1]</td>
<td>[1..1]</td>
<td>uri</td>
<td>The system for the code that is to be located.</td>
</tr>
<tr>
<td>_format<br/>
[0..1]</td>
<td></td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See <a href="https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format">ITI TF-2: Appendix Z.6</a>.</td>
</tr>
<tr>
<td>version<br/>
[0..1]</td>
<td></td>
<td>string</td>
<td>The version of the system, if one was provided in the source data.</td>
</tr>
<tr>
<td>coding<br/>
[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the code+system parameters are used.</td>
<td>Coding</td>
<td></td>
</tr>
<tr>
<td>date<br/>
[0..1]</td>
<td></td>
<td>dateTime</td>
<td>The date for which the information should be returned. Normally, this is the current conditions (which is the default value) but under some circumstances, systems need to access this information as it would have been in the past. A typical example of this would be where code selection is constrained to the set of codes that were available when the patient was treated, not when the record is being edited. Note that which date is appropriate is a matter for implementation policy.</td>
</tr>
<tr>
<td>displayLanguage<br/>
[0..1]</td>
<td></td>
<td>code</td>
<td>The requested language for display (see $expand.displayLanguage).</td>
</tr>
<tr>
<td>property<br/>
[0..*]</td>
<td></td>
<td>code</td>
<td>A property that the client wishes to be returned in the output. If no properties are specified, the server chooses what to return. The following properties are defined for all code systems: url, name, version (code system info) and code information: display, definition, designation, parent and child, and for designations, lang.X where X is a designation language code. Some of the properties are returned explicit in named parameters (when the names match), and the rest (except for lang.X) in the property parameter group.</td>
</tr>
</tbody>
</table>

###### 2:3.98.4.1.2.1 Example Request Message

An example request message from
<http://hl7.org/fhir/codesystem-operation-lookup.html> is:

```
GET [base]/CodeSystem/$lookup?system=http://loinc.org&code=1963-8
```

##### 2:3.98.4.1.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the code that matches the parameters given and return a
response as per Section 2:3.98.4.2 or an OperationOutcome Resource with an
error message.

#### 2:3.98.4.2 Lookup Code Response Message

##### 2:3.98.4.2.1 Trigger Events

The Terminology Repository found the code matching the input parameters
specified by the Terminology Consumer as a result of a Lookup Code
Request.

##### 2:3.98.4.2.2 Message Semantics

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

The response message is a FHIR Parameters Resource with properties of
the code based on the out parameters defined at
<http://hl7.org/fhir/codesystem-operation-lookup.html> and reproduced in
Table 2:3.98.4.2.2-1.

**Table 2:3.98.4.2.2-1: Lookup Code Message HTTP Output Parameters**

<table class="grid table-striped">
<thead>
<tr class="header" style="background-color: #e8e8e8;">
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>name<br/>
[1..1]</td>
<td>string</td>
<td>A display name for the code system</td>
</tr>
<tr>
<td>version<br/>
[0..1]</td>
<td>string</td>
<td>The version that these details are based on</td>
</tr>
<tr>
<td>display<br/>
[1..1]</td>
<td>string</td>
<td>The preferred display for this concept</td>
</tr>
<tr>
<td>designation<br/>
[0..*]</td>
<td></td>
<td>Additional representations for this concept</td>
</tr>
<tr>
<td>designation.language<br/>
[0..1]</td>
<td>code</td>
<td>The language this designation is defined for</td>
</tr>
<tr>
<td>designation.use<br/>
[0..1]</td>
<td>Coding</td>
<td>A code that details how this designation would be used</td>
</tr>
<tr>
<td>designation.value<br/>
[1..1]</td>
<td>string</td>
<td>The text value for this designation</td>
</tr>
<tr>
<td>property<br/>
[0..*]</td>
<td></td>
<td>One or more properties that contain additional information about the code, including status. For complex terminologies (e.g., SNOMED CT, LOINC, medications), these properties serve to decompose the code</td>
</tr>
<tr>
<td>property.code<br/>
[1..1]</td>
<td>code</td>
<td>Identifies the property returned</td>
</tr>
<tr>
<td>property.value<br/>
[0..1]</td>
<td>code | Coding | string | integer | boolean | dateTime | decimal</td>
<td>The value of the property returned</td>
</tr>
<tr>
<td>property.description<br/>
[0..1]</td>
<td>string</td>
<td>Human Readable representation of the property value (e.g., display for a code)</td>
</tr>
<tr>
<td>property.subproperty<br/>
[0..*]</td>
<td></td>
<td>Nested Properties (mainly used for SNOMED CT decomposition, for relationship Groups)</td>
</tr>
<tr>
<td>property.subproperty.code<br/>
[1..1]</td>
<td>code</td>
<td>Identifies the sub-property returned</td>
</tr>
<tr>
<td>property.subproperty.value<br/>
[1..1]</td>
<td>code | Coding | string | integer | boolean | dateTime | decimal</td>
<td>The value of the sub-property returned</td>
</tr>
<tr>
<td>property.subproperty.description<br/>
[0..1]</td>
<td>string</td>
<td>Human Readable representation of the sub-property value (e.g., display for a code)</td>
</tr>
</tbody>
</table>

###### 2:3.98.4.2.2.1 Example Response Message

An example successful response message from
<http://hl7.org/fhir/codesystem-operation-lookup.html> is:

```
HTTP/1.1 200 OK
[other headers]

{
  "resourceType" : "Parameters",
  "parameter" : [
    {
      "name" : "name",
      "valueString" : "LOINC"
    },
    {
      "name" : "version",
      "valueString" : "2.48"
    },
    {
      "name" : "display",
      "valueString" : "Bicarbonate [Moles/volume] in Serum"
    },
    {
      "name" : "abstract",
      "valueString" : "false"
    },
    {
      "name" : "designation",
      "part" : [
        {
          "name" : "value",
          "valueString" : "Bicarbonate [Moles/volume] in Serum"
        }
      ]
    }
  ]
}
```

An example failed response message from
<http://hl7.org/fhir/codesystem-operation-lookup.html> is:

```
HTTP/1.1 200 OK
[other headers]

{
  "resourceType": "OperationOutcome",
  "id": "exception",
  "text": {
    "status": "additional",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Code "ABC-23" not found</div>"
  },
  "issue": [
    {
      "severity": "error",
      "code": "not-found",
      "details": {
        "text": "Code "ABC-23" not found"
      }
    }
  ]
}
```

##### 2:3.98.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 2:3.98.5 Security Considerations

See the general Security Consideration in [ITI TF-1: 51.5](volume-1.html#1515-svcm-security-considerations).

#### 2:3.98.5.1 Security Audit Considerations

Note that the same audit message is recorded by both Terminology Consumer and Repository. The
difference being the Audit Source element. Both sides record to show consistency
between the message sent by the Consumer and the action taken at the Registry.

The actors involved shall record audit events according to the
[Audit Event for Lookup Code by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.CodeSystem.Lookup.html).

---

// File: input/pagecontent/ITI-99.md

This section corresponds to transaction \[ITI-99\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-99\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 2:3.99.1 Scope

This transaction is used by the Terminology Consumer to validate the
existence of a given code in a value set or code system. The request is
received by the Terminology Repository. The Terminology Repository
processes the request and returns a response as a Parameters Resource.

### 2:3.99.2 Actor Roles

**Table 2:3.99.2-1: Actor Roles**

| ---------- | --------------------------------------------------------------------------------- |
| **Actor:** | Terminology Consumer                                                              |
| **Role:**  | Requests the code to validate from the Terminology Repository.                    |
| **Actor:** | Terminology Repository                                                            |
| **Role:**  | Returns validation information for the code provided by the Terminology Consumer. |
{:.grid .table-striped}

### 2:3.99.3 Referenced Standards

- HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html>

### 2:3.99.4 Messages
<div>
{%include ITI-99-seq.svg%}
</div>
<div style="clear: left;"></div>
**Figure 2:3.99.4-1: Interaction Diagram**

#### 2:3.99.4.1 Validate ValueSet Code Request Message

The Validate ValueSet Code Request message is a FHIR $validate-code
operation on the ValueSet Resource.

##### 2:3.99.4.1.1 Trigger Events

A Terminology Consumer triggers a Validate ValueSet Code Request to a
Terminology Repository according to the business rules for the
validation. These business rules are outside the scope of this
transaction.

##### 2:3.99.4.1.2 Message Semantics

A Terminology Consumer initiates an $validate-code request using HTTP
GET as defined at
<http://hl7.org/fhir/valueset-operation-validate-code.html> on the
ValueSet Resource. The required input parameters are identified in Table
3.99.4.1.2-1.

The URL for this operation is: `[base]/ValueSet/$validate-code?[parameter=value]`

Where \[base\] is the URL of Terminology Repository.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for
this transaction.

**Table 2:3.99.4.1.2-1: Validate ValueSet Code Message HTTP Input Parameters**

<table class="grid table-striped">
<thead>
<tr class="header" style="background-color: #e8e8e8;">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>url<br/>[0..1]</td>
<td>[1..1]</td>
<td>uri</td>
<td>Value set Canonical URL. The server must know the value set (e.g., it is defined explicitly in the server's value sets, or it is defined implicitly by some code system known to the server.</td>
</tr>
<tr class="even">
<td>code<br/>[0..1]</td>
<td>[1..1]</td>
<td>code</td>
<td>The code that is to be validated. If a code is provided, a system or a context must be provided (if a context is provided, then the server SHALL ensure that the code is not ambiguous without a system).</td>
</tr>
<tr class="odd">
<td>system<br/>[0..1]</td>
<td>[1..1]</td>
<td>uri</td>
<td>The system for the code that is to be validated.</td>
</tr>
<tr class="even">
<td>_format<br/>[0..1]</td>
<td>[0..1]</td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See <a href="https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format">ITI TF-2: Appendix Z.6</a>.</td>
</tr>
<tr class="odd">
<td>context<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the url parameter is used.</td>
<td>uri</td>
<td></td>
</tr>
<tr class="even">
<td>valueSet<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the url parameter is used.</td>
<td>ValueSet</td>
<td></td>
</tr>
<tr class="odd">
<td>valueSetVersion<br/>[0..1]</td>
<td></td>
<td>string</td>
<td>The identifier that is used to identify a specific version of the value set to be used when validating the code. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g., yyyymmdd) if a managed version is not available.</td>
</tr>
<tr class="even">
<td>systemVersion<br/>[0..1]</td>
<td></td>
<td>string</td>
<td>The version of the system, if one was provided in the source data</td>
</tr>
<tr class="odd">
<td>display<br/>[0..1]</td>
<td></td>
<td>string</td>
<td>The display associated with the code, if provided. If a display is provided a code must be provided. If no display is provided, the server cannot validate the display value, but may choose to return a recommended display name using the display parameter in the outcome. Whether displays are case sensitive is code system dependent</td>
</tr>
<tr class="even">
<td>coding<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the code+system parameters are used.</td>
<td>Coding</td>
<td></td>
</tr>
<tr class="odd">
<td>codeableConcept<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the code+system parameters are used.</td>
<td>CodeableConcept</td>
<td></td>
</tr>
<tr class="even">
<td>date<br/>[0..1]</td>
<td></td>
<td>dateTime</td>
<td>The date for which the validation should be checked. Normally, this is the current conditions (which is the default values) but under some circumstances, systems need to validate that a correct code was used at some point in the past. A typical example of this would be where code selection is constrained to the set of codes that were available when the patient was treated, not when the record is being edited. Note that which date is appropriate is a matter for implementation policy.</td>
</tr>
<tr class="odd">
<td>abstract<br/>[0..1]</td>
<td></td>
<td>boolean</td>
<td>If this parameter has a value of true, the client is stating that the validation is being performed in a context where a concept designated as 'abstract' is appropriate/allowed to be used, and the server should regard abstract codes as valid. If this parameter is false, abstract codes are not considered to be valid.<br/>
Note that 'abstract' is a property defined by many HL7 code systems that indicates that the concept is a logical grouping concept that is not intended to be used as a 'concrete' concept in an actual patient/care/process record. This language is borrowed from Object Oriented theory where 'abstract' objects are never instantiated. However, in the general record and terminology eco-system, there are many contexts where it is appropriate to use these codes e.g., as decision making criterion, or when editing value sets themselves. This parameter allows a client to indicate to the server that it is working in such a context.</td>
</tr>
<tr class="even">
<td>displayLanguage<br/>[0..1]</td>
<td></td>
<td>code</td>
<td>Specifies the language to be used for description when validating the display property</td>
</tr>
</tbody>
</table>

##### 2:3.99.4.1.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the code in the value set that matches the parameters given and
return a response as per Section 2:3.99.4.2 or an OperationOutcome
Resource with an error message.

#### 2:3.99.4.2 Validate ValueSet Code Response Message

##### 2:3.99.4.2.1 Trigger Events

The Terminology Repository found validation details of the code matching
the input parameters specified by the Terminology Consumer as a result of a Validate ValueSet
Code Request.

##### 2:3.99.4.2.2 Message Semantics

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

The response message is a FHIR Parameters Resource with properties of
the code set based on the out parameters defined at
<http://hl7.org/fhir/valueset-operation-validate-code.html> and
reproduced in Table 2:3.99.4.2.2-1.

**Table 2:3.99.4.2.2-1: Validate ValueSet Code Message HTTP Output Parameters**

<table class="grid table-striped">
<thead>
<tr class="header" style="background-color: #e8e8e8;">
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>result<br/>[1..1]</td>
<td>boolean</td>
<td>True if the concept details supplied are valid</td>
</tr>
<tr class="even">
<td>message<br/>[0..1]</td>
<td>string</td>
<td>Error details, if result = false. If this is provided when result = true, the message carries hints and warnings</td>
</tr>
<tr class="odd">
<td>display<br/>[0..1]</td>
<td>string</td>
<td>A valid display for the concept if the system wishes to display this to a user</td>
</tr>
</tbody>
</table>

##### 2:3.99.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

#### 2:3.99.4.3 Validate CodeSystem Code Request Message

The Validate CodeSystem Code Request message is a FHIR $validate-code
operation on the CodeSystem Resource.

##### 2:3.99.4.3.1 Trigger Events

A Terminology Consumer triggers a Validate CodeSystem Code Request to a
Terminology Repository according to the business rules for the
validation. These business rules are outside the scope of this
transaction.

##### 2:3.99.4.3.2 Message Semantics

A Terminology Consumer initiates an $validate-code request using HTTP
GET as defined at
<http://hl7.org/fhir/codesystem-operation-validate-code.html> on the
CodeSystem Resource. The required input parameters are identified in
Table 2:3.99.4.3.2-1.

The URL for this operation is: `[base]/CodeSystem/$validate-code`

Where \[base\] is the URL of Terminology Repository.

See [ITI TF-2: Appendix W](https://profiles.ihe.net/ITI/TF/Volume2/ch-W.html) for informative implementation material for
this transaction.

**Table 2:3.99.4.3.2-1: Validate CodeSystem Code Message HTTP Input Parameters**

<table class="grid table-striped">
<thead>
<tr class="header" style="background-color: #e8e8e8;">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>url<br/>[0..1]</td>
<td>[1..1]</td>
<td>uri</td>
<td>CodeSystem URL. The server must know the code system (e.g., it is defined explicitly in the server's code systems, or it is known implicitly by the server.</td>
</tr>
<tr class="even">
<td>code<br/>[0..1]</td>
<td>[1..1]</td>
<td>code</td>
<td>The code that is to be validated.</td>
</tr>
<tr class="odd">
<td>_format<br/>[0..1]</td>
<td></td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See <a href="https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format">ITI TF-2: Appendix Z.6</a>.</td>
</tr>
<tr class="even">
<td>codeSystem<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the url parameter is used.</td>
<td>CodeSystem</td>
<td></td>
</tr>
<tr class="odd">
<td>version<br/>[0..1]</td>
<td></td>
<td>string</td>
<td>The version of the code system, if one was provided in the source data.</td>
</tr>
<tr class="even">
<td>display<br/>[0..1]</td>
<td></td>
<td>string</td>
<td>The display associated with the code, if provided. If a display is provided a code must be provided. If no display is provided, the server cannot validate the display value, but may choose to return a recommended display name in an extension in the outcome. Whether displays are case sensitive is code system dependent.</td>
</tr>
<tr class="odd">
<td>coding<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the code+url parameters are used.</td>
<td>Coding</td>
<td></td>
</tr>
<tr class="even">
<td>codeableConcept<br/>[0..1]</td>
<td>[0..0]<br/>
This parameter is not allowed when the code+url parameters are used.</td>
<td>CodeableConcept</td>
<td></td>
</tr>
<tr class="odd">
<td>date<br/>[0..1]</td>
<td></td>
<td>dateTime</td>
<td>The date for which the validation should be checked. Normally, this is the current conditions (which is the default values) but under some circumstances, systems need to validate that a correct code was used at some point in the past. A typical example of this would be where code selection is constrained to the set of codes that were available when the patient was treated, not when the record is being edited. Note that which date is appropriate is a matter for implementation policy.</td>
</tr>
<tr class="even">
<td>abstract<br/>[0..1]</td>
<td></td>
<td>boolean</td>
<td>If this parameter has a value of true, the client is stating that the validation is being performed in a context where a concept designated as 'abstract' is appropriate/allowed to be used, and the server should regard abstract codes as valid. If this parameter is false, abstract codes are not considered to be valid.</td>
</tr>
<tr class="odd">
<td>displayLanguage<br/>[0..1]</td>
<td></td>
<td>code</td>
<td>Specifies the language to be used for description when validating the display property</td>
</tr>
</tbody>
</table>

##### 2:3.99.4.3.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the code in the code system that matches the parameters given
and return a response as per Section 2:3.99.4.4 or an OperationOutcome
Resource with an error message.

#### 2:3.99.4.4 Validate CodeSystem Code Response Message

##### 2:3.99.4.4.1 Trigger Events

The Terminology Repository found validation details of the code matching
the input parameters specified by the Terminology Consumer as a result of a Validate
CodeSystem Code Request.

##### 2:3.99.4.4.2 Message Semantics

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

The response message is a FHIR Parameters Resource with properties of
the code set based on the out parameters defined at
<http://hl7.org/fhir/codesystem-operation-validate-code.html> and
reproduced in Table 2:3.99.4.4.2-1.

**Table 2:3.99.4.4.2-1: Validate CodeSystem Code Message HTTP Output Parameters**

<table class="grid table-striped">
<thead>
<tr class="header" style="background-color: #e8e8e8;">
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>result<br/>[1..1]</td>
<td>boolean</td>
<td>True if the concept details supplied are valid</td>
</tr>
<tr class="even">
<td>message<br/>[0..1]</td>
<td>string</td>
<td>Error details, if result = false. If this is provided when result = true, the message carries hints and warnings</td>
</tr>
<tr class="odd">
<td>display<br/>[0..1]</td>
<td>string</td>
<td>A valid display for the concept if the system wishes to display this to a user</td>
</tr>
</tbody>
</table>

##### 2:3.99.4.4.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 2:3.99.5 Security Considerations

See the general Security Consideration in [ITI TF-1: 51.5](volume-1.html#1515-svcm-security-considerations).

#### 2:3.99.5.1 Security Audit Considerations

Note that the same audit message is recorded by both Terminology Consumer and Repository. The
difference being the Audit Source element. Both sides record to show consistency
between the message sent by the Consumer and the action taken at the Registry.

The actors involved shall record audit events according to the
[Audit Event for Validate Code by the Terminology Consumer and Repository](StructureDefinition-IHE.SVCM.Audit.Code.Validate.html).


---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE Profiles or documents and is not a part of the SVCM Profile. The content here will be incorporated into the target narrative at a future time, usually when SVCM goes normative.
</div>

## IHE Technical Frameworks General Introduction Appendix A: Actors

| ------------------------------------------------ |
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}


| Actor                    | Definition                                    |
| ------------------------ | --------------------------------------------- |
| Terminology Consumer     | Uses codes, Value Sets, and Concept Maps.     |
| Terminology Repository   | Provides codes, Value Sets, and Concept Maps. |
{:.grid .table-striped}



## IHE Technical Frameworks General Introduction Appendix B: Transactions

| ------------------------------------------------ |
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}

| Transaction                     | Definition                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------- |
| Query Value Set \[ITI-95\]      | Search for multiple Value Sets or retrieve a single Value Set.                    |
| Query Code System \[ITI-96\]    | Search for Code Systems or retrieve a single Code System.                         |
| Expand Value Set \[ITI-97\]     | Expand the given Value Set to retrieve the list of available concepts.            |
| Lookup Code \[ITI-98\]          | Retrieve the details for a code from a Code System.                               |
| Validate Code \[ITI-99\]        | Validate the existence of a code in a Code System or Value Set.                   |
| Query Concept Map \[ITI-100\]   | Search for multiple Concept Maps or retrieve a single Concept Map.                |
| Translate Code \[ITI-101\]      | Return the translation of a code from a source Value Set into a target Value Set. |
{:.grid .table-striped}


---

// File: input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time. For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>


**TODO: fill in the goals of the testing.**

## Introduction

Overall test plan leverages the profiles and examples shown on the [Artifacts Summary](artifacts.html). The [Profiles](artifacts.html#structures-resource-profiles) listed are describing the constraints that would be adhered to by actors claiming conformance to this implementation guide. Thus, any applicable Resources that are known to have been published by an app or server MUST be conformant to these profiles as appropriate.

The examples listed in [Example Instances](artifacts.html#example-example-instances) are example instances. Some are conformant to the profiles. Other examples that either assist with the structure of the examples (e.g., Patient and Encounter) or are examples that should be able to handle in various ways. 

This section will be filled in as the IHE Connectathon need drives the creation of the test plans, test procedures, test tools, and reporting.

**TODO: include actor based tests, include positive and edge cases.**

### Unit Test Procedure

Unit Tests in this context is where a SUT is tested against a simulator or validator.  A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Where a reference implementation is used the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Integration Test Procedure

Integration Tests in this context is where two SUT of paired actors test against each other. In this case, the subset of tests that can be tested is the intersection. Testing only this intersection is necessary but not sufficient. The testing must also include the capability of the client to exercise the test scenarios that this SUT can test to determine that failure-modes are handled properly by both SUT.




---

// File: input/pagecontent/volume-1.md

The Sharing Valuesets, Codes, and Maps (SVCM) Profile defines a
lightweight interface through which healthcare systems may retrieve
centrally managed uniform nomenclature and mappings between code
systems, using the HL7 Fast Healthcare Interoperability Resources
(FHIR) specification.

Terminologies managed in value sets are most useful when they are
widely shared and standardized across geography and disciplines to add
clarity and specificity.

## 1:51.1 SVCM Actors, Transactions and Content Modules

This section defines the actors, transactions, and/or content modules in this profile. Further information about actor and transaction definitions can be found in the IHE Technical Frameworks General Introduction [Appendix A: Actors](https://profiles.ihe.net/GeneralIntro/ch-A.html) and [Appendix B: Transactions](https://profiles.ihe.net/GeneralIntro/ch-B.html).

Figure 1:51.1-1 shows the actors directly involved in the SVCM Profile and the relevant transactions between them. Other actors that may be indirectly involved due to their participation in related profiles are not necessarily shown.

<div>
{%include ActorsAndTransactions.svg%}
</div>
<div style="clear: left;"></div>
**Figure 1:51.1-1: Actors and Transactions**

Table 1:51.1-1 lists the transactions for each actor directly involved in the SVCM Profile. In order to claim support of this profile, an implementation must perform the required transactions (labeled “R”). Transactions labeled “O” are optional. A complete list of options defined by this profile is shown in Table 1:51.2-1.

**Table 1:51.1-1: SVCM Profile - Actors and Transactions**

| Actors                 | Transactions                  | Initiator or Responder | Optionality    | Section          |
| ---------------------- | ----------------------------- | ---------------------- | -------------- | ---------------- |
| Terminology Consumer   | Query Value Set \[ITI-95\]    | Initiator              | O (Note 1)     | [ITI TF-2: 3.95](ITI-95.html)  |
|                        | Query Code System \[ITI-96\]  | Initiator              | O (Note 1)     | [ITI TF-2: 3.96](ITI-96.html)  |
|                        | Expand Value Set \[ITI-97\]   | Initiator              | O (Note 1)     | [ITI TF-2: 3.97](ITI-97.html)  |
|                        | Lookup Code \[ITI-98\]        | Initiator              | O (Note 1)     | [ITI TF-2: 3.98](ITI-98.html)  |
|                        | Validate Code \[ITI-99\]      | Initiator              | O (Note 1)     | [ITI TF-2: 3.99](ITI-99.html)  |
|                        | Query Concept Map \[ITI-100\] | Initiator              | O              | [ITI TF-2: 3.100](ITI-100.html) |
|                        | Translate Code \[ITI-101\]    | Initiator              | O              | [ITI TF-2: 3.101](ITI-101.html) |
| Terminology Repository | Query Value Set \[ITI-95\]    | Responder              | R              | [ITI TF-2: 3.95](ITI-95.html)  |
|                        | Query Code system \[ITI-96\]  | Responder              | R              | [ITI TF-2: 3.96](ITI-96.html)  |
|                        | Expand Value Set \[ITI-97\]   | Responder              | R              | [ITI TF-2: 3.97](ITI-97.html)  |
|                        | Lookup Code \[ITI-98\]        | Responder              | R              | [ITI TF-2: 3.98](ITI-98.html)  |
|                        | Validate Code \[ITI-99\]      | Responder              | R              | [ITI TF-2: 3.99](ITI-99.html)  |
|                        | Query Concept Map \[ITI-100\] | Responder              | O              | [ITI TF-2: 3.100](ITI-100.html) |
|                        | Translate Code \[ITI-101\]    | Responder              | O              | [ITI TF-2: 3.101](ITI-101.html) |
{:.grid .table-striped}

*Note 1: A Terminology Consumer shall support at least one of these transactions.*

### 1:51.1.1 Actor Descriptions and Actor Profile Requirements

Most requirements are documented in ITI TF-2 Transactions. This section
documents any additional requirements on profile’s actors.

In addition to an IHE Integration Statement, the Terminology Consumer
and Terminology Responder shall provide a CapabilityStatement Resource indicating the capabilities
defined for all the transactions implemented including all query
parameters implemented. See [ITI TF-2: Appendix Z.4](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.4-structuredefinition-resource).

## 1:51.2 SVCM Actor Options

Options that may be selected for this profile are listed in Table 1:51.2-1 along with the actors to which they apply. Dependencies between options, when applicable, are specified in notes.

**Table 1:51.2-1: Sharing Value Sets - Actors and Options**

| Actor                  | Options          | Volume & Section |
| ---------------------- | ---------------- | -------------- |
| Terminology Consumer   | Translate Option | [Section 1:51.2.1](#15121-translate-option) |
| Terminology Repository | Translate Option | [Section 1:51.2.1](#15121-translate-option) |
{:.grid .table-striped}

### 1:51.2.1 Translate Option

The translate option enables querying for Concept Maps and translating
codes.

A Terminology Consumer or Terminology Repository that supports the
Translate Option shall support the [Query Concept Map \[ITI-100\]](ITI-100.html) and
[Translate Code \[ITI-101\]](ITI-101.html) transactions. See [ITI TF-2: 3.100](ITI-100.html) and 
[ITI TF-2: 3.101](ITI-101.html).

## 1:51.3 SVCM Required Actor Groupings

An actor from this profile (Column 1) shall implement all of the
required transactions and/or content modules in this profile ***in
addition to <span class="underline">all</span>*** of the
requirements for the grouped actor (Column 2).

**Table 1:51.3-1: SVCM Profile - Required Actor Groupings**

| SVCM Actor             | Actor(s) to be grouped with              | Reference   | Content Bindings Reference |
| ---------------------- | ---------------------------------------- | ----------- | -------------------------- |
| Terminology Consumer   | None                                     | --         | --                        |
| Terminology Repository | ATNA / Secure Node or Secure Application | [ITI TF-1: 9](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) | --                        |
{:.grid .table-striped}

## 1:51.4 SVCM Overview

### 1:51.4.1 Concepts

#### 1:51.4.1.1 Definitions

The FHIR terminology specification defines the following terms, see
<http://hl7.org/fhir/R4/terminology-module.html>:

- **Concept** – A code and definition. A representation of a real or
abstract thing, which provides meaning.

- **Code System** - Define concepts and give them meaning through
formal definitions, and assign codes that represent the concepts.
Examples of code systems include ICD-10, LOINC, SNOMED-CT, and
RxNorm. See <https://hl7.org/fhir/R4/terminologies-systems.html>.

- **Value Set** - Specifies a set of codes defined by code systems
that can be used in a specific context. Value sets link code system
definitions and their use in coded elements. See <https://hl7.org/fhir/R4/terminologies-valuesets.html>.

- **Concept Map** - Defines a mapping from a set of concepts defined
in a code system to one or more concepts defined in other code
systems. See <http://hl7.org/fhir/R4/conceptmap.html>
and <http://www.hl7.org/documentcenter/public/standards/V3/core_principles/infrastructure/coreprinciples/v3modelcoreprinciples.html#gl-concept>.

- **Value Set Expansion** - Converts a Value Set to a list of concept
representations at a point in time, which typically consists of
codes. Good practice is that a system that captures a coded value
should be capable of reconstructing the Value Set Expansion in
effect when a given code was selected. See <http://www.hl7.org/documentcenter/public/standards/V3/core_principles/infrastructure/coreprinciples/v3modelcoreprinciples.html#coreP_Coded_Properties-value-sets-resolution>.

#### 1:51.4.1.2 Business Identifiers

Some value sets, code systems, and concept maps have business identifiers, e.g., OIDs.  See Section 
[ITI TF-2: Z.9.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.9.1-identifier-type).  In SVCM,
these business identifiers should be stored in the `.identifier` element.  The FHIR specification strongly
recommends using an http URL in the `.url` element, but if this is not possible, then the `.url` element
can contain a URI, for example, an OID as urn:oid:X.X.X.

Recommended Example:

```
  "url" : "http://example.org/fhir/ValueSet/example",
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:oid:1.2.3.4.5.6.7.8.9"
  }],
```

Or if not possible:

```
  "url" : "urn:oid:1.2.3.4.5.6.7.8.9",
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:oid:1.2.3.4.5.6.7.8.9"
  }],
```

### 1:51.4.2 Use Cases

The following use cases provide examples of how this profile might be
used by various disciplines.

#### 1:51.4.2.1 Use Case \#1 - Code System, Value Set, and Concept Map Discovery

In this use case, a Terminology Consumer retrieves and filters a list of
Code Systems, Value Sets, or Concept Maps available in a Terminology
Repository.

##### 1:51.4.2.1.1 Code System or Value Set Discovery Use Case Description

A Terminology Consumer requires a method for querying a Terminology
Repository for a list of available Value Sets, Code Systems, and Concept
Maps, based on filter criteria. Periodically, a health care organization
publishes updated Value Sets, Code Systems, and Concept Maps documenting
the codes that point of service systems must use. An electronic medical
record system, the Terminology Consumer, periodically retrieves the list
of available Value Sets, Code Systems, and Concept Maps that are
relevant to its care unit and verifies that it has an up-to-date version
of each cached locally.

<div>
{%include usecase1-processflow.svg%}
</div>
<div style="clear: left;"></div>
**Figure 1:51.4.2.1.1-1: Discovery Interaction Diagram**

#### 1:51.4.2.2 Use Case \#2 - Expand a Value Set

In this use case, a point of service system is providing a list of codes
to provide decision support to a clinician prescribing medications.

##### 1:51.4.2.2.1 Expand a Value Set Use Case Description

A clinician uses a computerized physician order entry (CPOE) system to
order opioid medications for an inpatient. A value set containing all of
the opiate medication formulations that are considered to have abuse
potential can be pulled to support clinical decision support in a health
record system. Using a pre-assigned identifier, the CPOE system queries
the Terminology Repository for an "expanded" Value Set to retrieve the
list of codes based on the definition of the Value Set. The codes
returned by an “expand” operation are suitable for providing decision
support and validation.

<div>
{%include usecase2-processflow.svg%}
</div>
<div style="clear: left;"></div>
**Figure 1:51.4.2.2.1-1: Expand a Value Set Use Case Diagram**

#### 1:51.4.2.3 Use Case \#3 - Look up a code

In this use case, a Terminology Consumer asks a Terminology Repository
for details about a particular code system/code combination.

##### 1:51.4.2.3.1 Look up a code Use Case Description

A physician updates a patient’s problems list (conditions) at a point of
service terminal. After a code is entered, the point of service
terminal—the Terminology Consumer—queries a Terminology Repository to
retrieve the full details of the code using the lookup operation. The
Terminology Repository returns information for both display and
processing purposes, such as a longer narrative description along with
inclusions and exclusions, allowing the physician to verify that she
entered the correct code and to make a correction if necessary.

<div>
{%include usecase3-processflow.svg%}
</div>
<div style="clear: left;"></div>
**Figure 1:51.4.2.3.1-1: Look Up a Concept Use Case Diagram**

#### 1:51.4.2.4 Use Case \#4 - Validate a code

In this use case, a point of service system verifies whether a code is a
valid member of a value set.

##### 1:51.4.2.4.1 Validate a code Use Case Description

A health system publishes value sets consisting of codes relevant to
particular clinical contexts and related procedures. Value sets are
updated periodically to represent changes in clinical practice and
available medicines and supplies. Before submitting an update to a
patient record, an electronic medical record system checks a code
through the Terminology Repository to validate each medical code. The
Terminology Repository returns true/false indicating whether a
code/concept is in the set of codes associated with a value set.

<div>
{%include usecase4-processflow.svg%}
</div>
<div style="clear: left;"></div>
**Figure 1:51.4.2.4.1-1: Validate a Code Use Case Diagram**

#### 1:51.4.2.5 Use Case \#5 - Translate a code

In this use case, a concept is translated from a source code system,
possibly a proprietary local terminology, to a target code system, such
as LOINC.

##### 1:51.4.2.5.1 Translate a Code Use Case Description

In this example, an ambulatory clinic might refer to a lab test as a
“white count”. To report and analyze these tests accurately, the
clinic must submit its data using a shared terminology standard used
within the health system, such as LOINC. The clinic’s reporting system
queries a Terminology Repository to translate its local “white count”
concept to a LOINC concept using a pre-loaded Concept Map, which defines
relationships between concepts in a source Code System and one or more
target Code Systems. The Terminology Repository returns LOINC 6690-2
“Leukocytes \[\#/volume\] in Blood by Automated count”.

<div>
{%include usecase5-processflow.svg%}
</div>
<div style="clear: left;"></div>
**Figure 1:51.4.2.5.1-1: Translate a Code Use Case Diagram**

## 1:51.5 SVCM Security Considerations

The contents handled by the SVCM Profile are not patient-specific, so
there are no risks to patient privacy. Some Expanded Value Sets are of
little value to an attacker as they are public tables of non-critical
information (e.g., Expanded Value Sets used for coding of body parts in
medical exams). Other Expanded Value Sets might need protection against
malicious modification or interception. For example, there can be
integrity risks such as masquerade, or the modification of Expanded
Value Sets. Another possible type of risk would be at the privacy and
confidentiality level, such as the interception of an Expanded Value Set
containing confidential data. The profile will allow mitigation of those
risks when needed in the following manner:

- A Terminology Repository shall be grouped with an ATNA Secure Node
or Secure Application. Since the Terminology Consumer is not
required to be grouped with the Secure Node or Secure Application,
the Terminology Repository shall support both secure and non-secure
connections.

- Terminology Repositories shall be able to restrict access to a
specific Expanded Value Set to authorized and authenticated nodes,
while allowing unauthenticated network queries to other Expanded
Value Sets.

See [ITI TF-2: Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8.1-auditing-considerations).

## 1:51.6 SVCM Cross Profile Considerations

### 1:51.6.1 Sharing Value Sets (SVS)

When an SVCM Terminology Repository is grouped with an [SVS](https://profiles.ihe.net/ITI/TF/Volume1/ch-21.html) Value Set Repository, then it
should ensure the business identifiers are aligned. SVS uses OIDs as value set ids. SVCM stores
these in the ValueSet.identifier element. See Section [51.4.1.2](#151412-business-identifiers).

---

// File: input/narrative-source/ITI.SVCM.md

**Integrating the Healthcare Enterprise**

![IHE\_LOGO\_for\_tf-docs](./media/image1.jpeg)

**IHE IT Infrastructure (ITI) **

**Technical Framework Supplement**

**Sharing Valuesets, Codes, and Maps**

**(SVCM)**

**HL7<sup>®</sup> FHIR<sup>®</sup> Release 4**

**Using Resources at FMM Level 3 - Normative**

**Revision 1.2 – Trial Implementation **

Date: June 4, 2020

Author: ITI Technical Committee

Email: iti@ihe.net

**Please verify you have the most recent version of this document.** See
[here](http://ihe.net/Technical_Frameworks/) for Trial Implementation
and Final Text versions and [here](http://ihe.net/Public_Comment/) for
Public Comment versions.

**Foreword**

This is a supplement to the IHE IT Infrastructure Technical Framework
V16.0. Each supplement undergoes a process of public comment and trial
implementation before being incorporated into the volumes of the
Technical Frameworks.

This supplement is published on June 4, 2020 for trial implementation
and may be available for testing at subsequent IHE Connectathons. The
supplement may be amended based on the results of testing. Following
successful testing it will be incorporated into the IT Infrastructure
Technical Framework. Comments are invited and may be submitted at
[http://www.ihe.net/ITI\_Public\_Comments](http://www.ihe.net/ITI_Public_Comments/)..

This supplement describes changes to the existing technical framework
documents.

“Boxed” instructions like the sample below indicate to the Volume Editor
how to integrate the relevant section(s) into the relevant Technical
Framework volume.

Amend Section X.X by the following:

Where the amendment adds text, make the added text
**<span class="underline">bold underline</span>**. Where the amendment
removes text, make the removed text **~~bold strikethrough~~**. When
entire new sections are added, introduce with editor’s instructions to
“add new text” or similar, which for readability are not bolded or
underlined.

General information about IHE can be found at
[http://ihe.net](http://ihe.net/).

Information about the IHE IT Infrastructure domain can be found at
[http://ihe.net/IHE\_Domains](http://ihe.net/IHE_Domains/).

Information about the organization of IHE Technical Frameworks and
Supplements and the process used to create them can be found at
[http://ihe.net/IHE\_Process](http://ihe.net/IHE_Process/) and
[http://ihe.net/Profiles](http://ihe.net/Profiles/).

The current version of the IHE IT Infrastructure Technical Framework can
be found at
[http://ihe.net/Technical\_Frameworks](http://ihe.net/Technical_Frameworks/).

CONTENTS

[Introduction to this Supplement 8](#introduction-to-this-supplement)

[Open Issues and Questions 9](#open-issues-and-questions)

[Closed Issues 9](#closed-issues)

[IHE Technical Frameworks General Introduction 11](#_Toc42155605)

[9 Copyright Licenses 11](#copyright-licenses)

[9.1 Copyright of Base Standards 11](#copyright-of-base-standards)

[9.1.1 DICOM (Digital Imaging and Communications in Medicine)
11](#dicom-digital-imaging-and-communications-in-medicine)

[9.1.2 HL7 (Health Level Seven) 11](#hl7-health-level-seven)

[9.1.3 LOINC (Logical Observation Identifiers Names and Codes)
11](#loinc-logical-observation-identifiers-names-and-codes)

[9.1.4 SNOMED CT (Systematized Nomenclature of Medicine -- Clinical
Terms)
12](#snomed-ct-systematized-nomenclature-of-medicine----clinical-terms)

[10 Trademark 12](#trademark)

[General Introduction and Shared Appendices
13](#general-introduction-and-shared-appendices)

[Appendix A – Actor Summary Definitions
13](#appendix-a-actor-summary-definitions)

[Appendix B – Transaction Summary Definitions
13](#appendix-b-transaction-summary-definitions)

[Appendix D – Glossary 13](#appendix-d-glossary)

[**Volume 1 – Profiles 14**](#_Toc345074647)

[51 *Sharing Valuesets, Codes, and Maps (SVCM)*
14](#sharing-valuesets-codes-and-maps-svcm)

[51.1 SVCM Actors/Transactions 14](#svcm-actorstransactions)

[51.1.1 Actor Descriptions and Actor Profile Requirements
15](#actor-descriptions-and-actor-profile-requirements)

[51.2 SVCM Actor Options 15](#svcm-actor-options)

[51.2.1 Translate Option 16](#translate-option)

[51.3 SVCM Required Actor Groupings 16](#_Toc42155623)

[51.4 SVCM Overview 16](#svcm-overview)

[51.4.1 Concepts 16](#concepts)

[51.4.2 Use Cases 17](#use-cases)

[51.4.2.1 Use Case \#1 - Code System, Value Set, and Concept Map
Discovery
17](#use-case-1---code-system-value-set-and-concept-map-discovery)

[51.4.2.1.1 Code System or Value Set Discovery Use Case Description
17](#code-system-or-value-set-discovery-use-case-description)

[51.4.2.2 Use Case \#2 - Expand a Value Set
18](#use-case-2---expand-a-value-set)

[51.4.2.2.1 Expand a Value Set Use Case Description
18](#expand-a-value-set-use-case-description)

[51.4.2.3 Use Case \#3 - Look up a code
19](#use-case-3---look-up-a-code)

[51.4.2.3.1 Look up a code Use Case Description
19](#look-up-a-code-use-case-description)

[51.4.2.4 Use Case \#4 - Validate a code
19](#use-case-4---validate-a-code)

[51.4.2.4.1 Validate a code Use Case Description
19](#validate-a-code-use-case-description)

[51.4.2.5 Use Case \#5 - Translate a code
20](#use-case-5---translate-a-code)

[51.4.2.5.1 Translate a Code Use Case Description
20](#translate-a-code-use-case-description)

[51.5 SVCM Security Considerations 21](#svcm-security-considerations)

[51.6 SVCM Cross Profile Considerations
21](#svcm-cross-profile-considerations)

[Appendices to Volume 1 22](#_Toc345074666)

[**Volume 2c – Transactions (cont.) 23**](#_Toc336000611)

[3.95 Query Value Set \[ITI-95\] 23](#query-value-set-iti-95)

[3.95.1 Scope 23](#scope)

[3.95.2 Actor Roles 23](#actor-roles)

[3.95.3 Referenced Standards 23](#_Toc42155644)

[3.95.4 Messages 24](#messages)

[3.95.4.1 Search Value Set Request Message
24](#search-value-set-request-message)

[3.95.4.1.1 Trigger Events 24](#trigger-events)

[3.95.4.1.2 Message Semantics 24](#message-semantics)

[3.95.4.1.2.1 Query Parameters 25](#query-parameters)

[3.95.4.1.3 Expected Actions 25](#expected-actions)

[3.95.4.2 Search Value Set Response Message
26](#search-value-set-response-message)

[3.95.4.2.1 Trigger Events 26](#trigger-events-1)

[3.95.4.2.2 Message Semantics 26](#_Toc42155653)

[3.95.4.2.3 Expected Actions 26](#expected-actions-1)

[3.95.4.3 Read Value Set Request Message
26](#read-value-set-request-message)

[3.95.4.3.1 Trigger Events 26](#trigger-events-2)

[3.95.4.3.2 Message Semantics 26](#message-semantics-2)

[3.95.4.3.3 Expected Actions 27](#expected-actions-2)

[3.95.4.4 Read Value Set Response Message
27](#read-value-set-response-message)

[3.95.4.4.1 Trigger Events 27](#trigger-events-3)

[3.95.4.4.2 Message Semantics 27](#_Toc42155661)

[3.95.4.4.3 Expected Actions 27](#expected-actions-3)

[3.95.5 Security Considerations 27](#security-considerations)

[3.96 Query Code System \[ITI-96\] 28](#query-code-system-iti-96)

[3.96.1 Scope 28](#scope-1)

[3.96.2 Actor Roles 28](#actor-roles-1)

[3.96.3 Referenced Standards 28](#referenced-standards-1)

[3.96.4 Messages 29](#messages-1)

[3.96.4.1 Search Code System Request Message
29](#search-code-system-request-message)

[3.96.4.1.1 Trigger Events 29](#trigger-events-4)

[3.96.4.1.2 Message Semantics 29](#message-semantics-4)

[3.96.4.1.2.1 Query Parameters 30](#query-parameters-1)

[3.96.4.1.3 Expected Actions 30](#expected-actions-4)

[3.96.4.2 Search Code System Response Message
30](#search-code-system-response-message)

[3.96.4.2.1 Trigger Events 30](#trigger-events-5)

[3.96.4.2.2 Message Semantics 31](#message-semantics-5)

[3.96.4.2.3 Expected Actions 31](#expected-actions-5)

[3.96.4.3 Read Code System Request Message
31](#read-code-system-request-message)

[3.96.4.3.1 Trigger Events 31](#trigger-events-6)

[3.96.4.3.2 Message Semantics 31](#message-semantics-6)

[3.96.4.3.3 Expected Actions 32](#expected-actions-6)

[3.96.4.4 Read Code System Response Message
32](#read-code-system-response-message)

[3.96.4.4.1 Trigger Events 32](#trigger-events-7)

[3.96.4.4.2 Message Semantics 32](#message-semantics-7)

[3.96.4.4.3 Expected Actions 32](#expected-actions-7)

[3.96.5 Security Considerations 32](#security-considerations-1)

[3.97 Expand Value Set \[ITI-97\] 33](#expand-value-set-iti-97)

[3.97.1 Scope 33](#scope-2)

[3.97.2 Actor Roles 33](#actor-roles-2)

[3.97.3 Referenced Standards 33](#referenced-standards-2)

[3.97.4 Messages 33](#messages-2)

[3.97.4.1 Expand Value Set Request Message
34](#expand-value-set-request-message)

[3.97.4.1.1 Trigger Events 34](#trigger-events-8)

[3.97.4.1.2 Message Semantics 34](#message-semantics-8)

[3.97.4.1.2.1 Example Request Message 37](#example-request-message)

[3.97.4.1.3 Expected Actions 37](#expected-actions-8)

[3.97.4.2 Expand Value Set Response Message
37](#expand-value-set-response-message)

[3.97.4.2.1 Trigger Events 37](#trigger-events-9)

[3.97.4.2.2 Message Semantics 37](#message-semantics-9)

[3.97.4.2.2.1 Example Response Message 37](#example-response-message)

[3.97.4.2.3 Expected Actions 38](#expected-actions-9)

[3.97.5 Security Considerations 38](#security-considerations-2)

[3.98 Lookup Code \[ITI-98\] 38](#lookup-code-iti-98)

[3.98.1 Scope 38](#scope-3)

[3.98.2 Actor Roles 39](#actor-roles-3)

[3.98.3 Referenced Standards 39](#referenced-standards-3)

[3.98.4 Messages 39](#messages-3)

[3.98.4.1 Lookup Code Request Message 39](#lookup-code-request-message)

[3.98.4.1.1 Trigger Events 39](#trigger-events-10)

[3.98.4.1.2 Message Semantics 40](#message-semantics-10)

[3.98.4.1.2.1 Example Request Message 41](#example-request-message-1)

[3.98.4.1.3 Expected Actions 41](#expected-actions-10)

[3.98.4.2 Lookup Code Response Message
41](#lookup-code-response-message)

[3.98.4.2.1 Trigger Events 41](#trigger-events-11)

[3.98.4.2.2 Message Semantics 41](#message-semantics-11)

[3.98.4.2.2.1 Example Response Message 42](#example-response-message-1)

[3.98.4.2.3 Expected Actions 44](#expected-actions-11)

[3.98.5 Security Considerations 44](#security-considerations-3)

[3.99 Validate Code \[ITI-99\] 44](#validate-code-iti-99)

[3.99.1 Scope 44](#scope-4)

[3.99.2 Actor Roles 45](#actor-roles-4)

[3.99.3 Referenced Standards 45](#referenced-standards-4)

[3.99.4 Messages 45](#messages-4)

[3.99.4.1 Validate ValueSet Code Request Message
45](#validate-valueset-code-request-message)

[3.99.4.1.1 Trigger Events 46](#trigger-events-12)

[3.99.4.1.2 Message Semantics 46](#message-semantics-12)

[3.99.4.1.3 Expected Actions 48](#expected-actions-12)

[3.99.4.2 Validate ValueSet Code Response Message
48](#validate-valueset-code-response-message)

[3.99.4.2.1 Trigger Events 48](#trigger-events-13)

[3.99.4.2.2 Message Semantics 48](#message-semantics-13)

[3.99.4.2.3 Expected Actions 49](#expected-actions-13)

[3.99.4.3 Validate CodeSystem Code Request Message
49](#validate-codesystem-code-request-message)

[3.99.4.3.1 Trigger Events 49](#trigger-events-14)

[3.99.4.3.2 Message Semantics 49](#message-semantics-14)

[3.99.4.3.3 Expected Actions 51](#expected-actions-14)

[3.99.4.4 Validate CodeSystem Code Response Message
51](#validate-codesystem-code-response-message)

[3.99.4.4.1 Trigger Events 51](#trigger-events-15)

[3.99.4.4.2 Message Semantics 51](#message-semantics-15)

[3.99.4.4.3 Expected Actions 51](#expected-actions-15)

[3.99.5 Security Considerations 51](#security-considerations-4)

[3.100 Query Concept Map \[ITI-100\] 52](#query-concept-map-iti-100)

[3.100.1 Scope 52](#scope-5)

[3.100.2 Actor Roles 52](#actor-roles-5)

[3.100.3 Referenced Standards 52](#referenced-standards-5)

[3.100.4 Messages 53](#messages-5)

[3.100.4.1 Search Concept Map Request Message
53](#search-concept-map-request-message)

[3.100.4.1.1 Trigger Events 53](#trigger-events-16)

[3.100.4.1.2 Message Semantics 53](#message-semantics-16)

[3.100.4.1.2.1 Query Parameters 54](#query-parameters-2)

[3.100.4.1.3 Expected Actions 54](#expected-actions-16)

[3.100.4.2 Search Concept Map Response message
55](#search-concept-map-response-message)

[3.100.4.2.1 Trigger Events 55](#trigger-events-17)

[3.100.4.2.2 Message Semantics 55](#message-semantics-17)

[3.100.4.2.3 Expected Actions 55](#expected-actions-17)

[3.100.4.3 Read Concept Map Request Message
55](#read-concept-map-request-message)

[3.100.4.3.1 Trigger Events 55](#trigger-events-18)

[3.100.4.3.2 Message Semantics 55](#message-semantics-18)

[3.100.4.3.3 Expected Actions 56](#expected-actions-18)

[3.100.4.4 Read Concept Map Response Message
56](#read-concept-map-response-message)

[3.100.4.4.1 Trigger Events 56](#trigger-events-19)

[3.100.4.4.2 Message Semantics 56](#message-semantics-19)

[3.100.4.4.3 Expected Actions 56](#expected-actions-19)

[3.100.5 Security Considerations 57](#security-considerations-5)

[3.101 Translate Code \[ITI-101\] 57](#translate-code-iti-101)

[3.101.1 Scope 57](#scope-6)

[3.101.2 Actor Roles 57](#actor-roles-6)

[3.101.3 Referenced Standards 57](#referenced-standards-6)

[3.101.4 Messages 58](#messages-6)

[3.101.4.1 Translate Code Request Message
58](#translate-code-request-message)

[3.101.4.1.1 Trigger Events 58](#trigger-events-20)

[3.101.4.1.2 Message Semantics 58](#message-semantics-20)

[3.101.4.1.3 Expected Actions 60](#expected-actions-20)

[3.101.4.2 Translate Code Response Message
60](#translate-code-response-message)

[3.101.4.2.1 Trigger Events 60](#trigger-events-21)

[3.101.4.2.2 Message Semantics 60](#message-semantics-21)

[3.101.4.2.3 Expected Actions 61](#expected-actions-21)

[3.101.5 Security Considerations 61](#security-considerations-6)

#   
Introduction to this Supplement

*The Sharing Valuesets, Codes, and Maps (SVCM) Profile defines a
lightweight interface through which healthcare systems may retrieve
centrally managed uniform nomenclature and mappings between code systems
based on the HL7 Fast* Healthcare Interoperability Resources (FHIR)
specification.

The SVCM Profile leverages the IHE ITI Sharing Value Sets (SVS) and IHE
Patient Care Coordination Concept Mapping (CMAP) Profiles\[1\],
combining the functionalities of each and simplifying for a lighter
weight, mobile-compatible transport and messaging format. *This profile
leverages HTTP transport, JavaScript Object Notation (JSON), Simple-XML,
and Representational State Transfer (REST). The payload format is
defined by the HL7 FHIR standard.*

*This supplement is intended to be fully compliant with the HL7 FHIR
specification, providing only use-case driven constraints to aid with
interoperability.*

*The HL7 FHIR CodeSystem and ValueSet Resources used in this profile are
at Normative maturity level. The FHIR ConceptMap Resource is not yet
normative but is not expected to be revised in a manner that would
substantively impact this profile.*

The SVCM Profile provides an alternative for the exchange and management
of the metadata required for sharing data and provides an alternative to
the use of HL7 Common Terminology Services (CTS) and Common Terminology
Services 2 (CTS 2) with HL7 FHIR.

SVCM will create an easily referenceable source for profiles to use the
Terminology Repository in their workflows.

A single Terminology Repository can be accessed by many Terminology
Consumers, establishing a domain of consistent and uniform set of
nomenclatures. It supports automated loading of value sets by
Terminology Consumers, reducing the burden of manual configuration.

## Open Issues and Questions

None

## Closed Issues

> SVCM1 - For the validate and translate concept map, is an additional
> actor needed? (that can be drawn from existing actors in other
> profiles) Simplified actors to “Terminology Repository” and
> “Terminology Consumer.”
> 
> SVCM2 - Use of the Clinical Mapping Profile (CMAP). Decision made to
> merge the updated FHIR-enabled SVS and CMAP Profiles into one here.
> 
> SVCM3 - Within the document, two words are being used for “value set.”
> One word “valuesets” is being used in the title to simplify and avoid
> the use of commas in the title.
> 
> SVCM4 - Older SVS language on the “Retrieve multiple value sets”
> transaction on intensional and extensional value set definitions was
> removed.
> 
> SVCM5 - Combine discovery use case for Code System, Value Set and
> Concept Map into one or separate out Concept Map discovery as its own
> use case?
> 
> *Decided to keep these as one as the workflow is the same.*
> 
> SVCM6 - Confirm title for the merged SVS and updated CMAP Profiles –
> SVCM?
> 
> *Title confirmed*
> 
> SVCM7 - Need decision on how/whether to incorporate Clinical Mapping
> (CMAP) Actor Options
> 
> *Decided to not incorporate those options*
> 
> SVCM8 - Are there concepts or descriptions included in X.4 that are
> unnecessary for the purposes of this profile?
> 
> *Removed most of this section to streamline it.*

# IHE Technical Frameworks General Introduction

The [IHE Technical Framework General
Introduction](http://ihe.net/Technical_Frameworks/#GenIntro) is shared
by all of the IHE domain technical frameworks. Each technical framework
volume contains links to this document where appropriate.

# Copyright Licenses

IHE International hereby grants to each Member Organization, and to any
other user of these documents, an irrevocable, worldwide, perpetual,
royalty-free, nontransferable, nonexclusive, non-sublicensable license
under its copyrights in any IHE profiles and Technical Framework
documents, as well as any additional copyrighted materials that will be
owned by IHE International and will be made available for use by Member
Organizations, to reproduce and distribute (in any and all print,
electronic or other means of reproduction, storage or transmission) such
IHE Technical Documents.

The licenses covered by this Copyright License are only to those
copyrights owned or controlled by IHE International itself. If parts of
the Technical Framework are included in products that also include
materials owned or controlled by other parties, licenses to use those
products are beyond the scope of this IHE document and would have to be
obtained from that other party.

## Copyright of Base Standards

IHE technical documents refer to and make use of a number of standards
developed and published by several standards development organizations.
All rights for their respective base standards are reserved by these
organizations. This agreement does not supersede any copyright
provisions applicable to such base standards. Copyright license
information for frequently referenced base standards is provided below.

### DICOM (Digital Imaging and Communications in Medicine)

DICOM<sup>®</sup> is the registered trademark of the National Electrical
Manufacturers Association for its standards publications relating to
digital communications of medical information.

### HL7 (Health Level Seven)

HL7<sup>®</sup>, Health Level Seven<sup>®</sup>, CCD<sup>®</sup>,
CDA<sup>®</sup>, FHIR<sup>®</sup>, and the FHIR \[FLAME DESIGN\]
<sup>®</sup> are registered trademarks of Health Level. Seven
International and the use does not constitute endorsement by HL7.

Health Level Seven, Inc. has granted permission to IHE to reproduce
tables from the HL7 standard. The HL7 tables in this document are
copyrighted by Health Level Seven, Inc. All rights reserved. Material
drawn from these documents is credited where used.

### LOINC (Logical Observation Identifiers Names and Codes)

LOINC<sup>®</sup> is registered United States trademarks of Regenstrief
Institute, Inc.

### SNOMED CT (Systematized Nomenclature of Medicine -- Clinical Terms)

Some IHE Profiles incorporate SNOMED<sup>®</sup> CT, which is used by
permission of the International Health Terminology Standards Development
Organisation. SNOMED CT<sup>©</sup> was originally created by the
College of American Pathologists. SNOMED CT is a registered trademark of
the International Health Terminology Standards Development Organisation,
all rights reserved.

# Trademark

IHE<sup>®</sup> and the IHE logo are trademarks of the Healthcare
Information Management Systems Society in the United States and
trademarks of IHE Europe in the European Community. They may only be
used with the written consent of the IHE International Board Operations
Committee, which may be given to a Member Organization in broad terms
for any use that is consistent with the IHE mission and operating
principles.

# General Introduction and Shared Appendices

The [IHE Technical Framework General Introduction
Appendices](http://ihe.net/Technical_Frameworks/#GenIntro) are
components shared by all of the IHE domain technical frameworks. Each
technical framework volume contains links to these documents where
appropriate.

Update the following appendices to the General Introduction as indicated
below. Note that these are **not** appendices to this domain’s Technical
Framework (TF-1, TF-2, TF-3 or TF-4) but rather, they are appendices to
the IHE Technical Frameworks General Introduction located
[here](https://www.ihe.net/resources/technical_frameworks/#GenIntro).

# Appendix A – Actor Summary Definitions

Add the following **new or modified** actors to the IHE Technical
Frameworks General Introduction Appendix A:

| Actor Name               | Definition                                    |
| ------------------------ | --------------------------------------------- |
| Terminology Consumer     | Uses codes, Value Sets, and Concept Maps.     |
| *Terminology Repository* | Provides codes, Value Sets, and Concept Maps. |

# Appendix B – Transaction Summary Definitions

Add the following **new or modified** transactions to the IHE Technical
Frameworks General Introduction Appendix B:

| Transaction Name and Number     | Definition                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------- |
| *Query Value Set \[ITI-95\]*    | Search for multiple Value Sets or retrieve a single Value Set.                    |
| *Query Code System \[ITI-96\]*  | Search for Code Systems or retrieve a single Code System.                         |
| Expand Value Set \[ITI-97\]     | Expand the given Value Set to retrieve the list of available concepts.            |
| Lookup Code \[ITI-98\]          | Retrieve the details for a code from a Code System.                               |
| Validate Code \[ITI-99\]        | Validate the existence of a code in a Code System or Value Set.                   |
| *Query Concept Map \[ITI-100\]* | Search for multiple Concept Maps or retrieve a single Concept Map.                |
| Translate Code \[ITI-101\]      | Return the translation of a code from a source Value Set into a target Value Set. |

# Appendix D – Glossary

Add the following **new or updated glossary** terms to the IHE Technical
Frameworks General Introduction Appendix D.

No new terms.

<span id="_Toc345074647" class="anchor"></span>Volume 1 – Profiles

# 51 *Sharing Valuesets, Codes, and Maps (SVCM)*

*The Sharing Valuesets, Codes, and Maps (SVCM) Profile defines a
lightweight interface through which healthcare systems may retrieve
centrally managed uniform nomenclature and mappings between code
systems, using the HL7 Fast* Healthcare Interoperability Resources
(FHIR) specification.

*Terminologies managed in value sets are most useful when they are
widely shared and standardized across geography and disciplines to add
clarity and specificity. *

## 51.1 SVCM Actors/Transactions

This section defines the actors and transactions in this profile.
General definitions of actors are given in the Technical Frameworks
General Introduction Appendix A at
[<span class="underline">http://ihe.net/Technical\_Frameworks</span>](http://ihe.net/Technical_Frameworks/).

Figure 51.1-1 shows the actors directly involved in the SVCM Profile and
the relevant transactions between them. Other actors that may be
indirectly involved due to their participation in related profiles are
not necessarily shown.

Figure 51.1-1: Actors and Transactions

Table 51.1-1 SVCM Integration Profile - Actors and Transactions lists
the transactions for each actor directly involved in the SVCM Profile.
In order to claim support of this Integration Profile, an implementation
must perform the required transactions (labeled “R”). Transactions
labeled “O” are optional. A complete list of options defined by this
Integration Profile is shown in Table 51.2-1.

Table 51.1-1: SVCM Integration Profile - Actors and Transactions

| Actors                 | Transactions                  | Initiator or Responder | Optionality    | Section          |
| ---------------------- | ----------------------------- | ---------------------- | -------------- | ---------------- |
| Terminology Consumer   | Query Value Set \[ITI-95\]    | Initiator              | O (Note 1)     | ITI TF-2c: 3.95  |
|                        | Query Code System \[ITI-96\]  | Initiator              | O (Note 1)     | ITI TF-2c: 3.96  |
|                        | Expand Value Set \[ITI-97\]   | Initiator              | **O** (Note 1) | ITI TF-2c: 3.97  |
|                        | Lookup Code \[ITI-98\]        | Initiator              | **O** (Note 1) | ITI TF-2c: 3.98  |
|                        | Validate Code \[ITI-99\]      | Initiator              | **O** (Note 1) | ITI TF-2c: 3.99  |
|                        | Query Concept Map \[ITI-100\] | Initiator              | O              | ITI TF-2c: 3.100 |
|                        | Translate Code \[ITI-101\]    | Initiator              | **O**          | ITI TF-2c: 3.101 |
| Terminology Repository | Query Value Set \[ITI-95\]    | Responder              | R              | ITI TF-2c: 3.95  |
|                        | Query Code system \[ITI-96\]  | Responder              | R              | ITI TF-2c: 3.96  |
|                        | Expand Value Set \[ITI-97\]   | Responder              | R              | ITI TF-2c: 3.97  |
|                        | Lookup Code \[ITI-98\]        | Responder              | R              | ITI TF-2c: 3.98  |
|                        | Validate Code \[ITI-99\]      | Responder              | R              | ITI TF-2c: 3.99  |
|                        | Query Concept Map \[ITI-100\] | Responder              | O              | ITI TF-2c: 3.100 |
|                        | Translate Code \[ITI-101\]    | Responder              | O              | ITI TF-2c: 3.101 |

Note 1: A Terminology Consumer shall support at least one of these
transactions.

### 51.1.1 Actor Descriptions and Actor Profile Requirements

Most requirements are documented in ITI TF-2 Transactions. This section
documents any additional requirements on profile’s actors.

In addition to an IHE Integration Statement, the Terminology Consumer
and Terminology Responder shall provide a CapabilityStatement Resource
as described in ITI TF-2x: Appendix Z.4 indicating the capabilities
defined for all the transactions implemented including all query
parameters implemented.

## 51.2 SVCM Actor Options

Options that may be selected for this Integration Profile are listed in
**Table 51.2-1 Sharing Value Sets - Actors and Option,** along with the
actors to which they apply. Dependencies between options, when
applicable, are specified in notes.

Table 51.2-1: Sharing Value Sets - Actors and Options

| Actor                  | Options          | Vol. & Section |
| ---------------------- | ---------------- | -------------- |
| Terminology Consumer   | Translate Option | Section 51.2.1 |
| Terminology Repository | Translate Option | Section 51.2.1 |

### 51.2.1 Translate Option

The translate option enables querying for Concept Maps and translating
codes.

A Terminology Consumer or Terminology Repository that supports the
Translate Option shall support the Query Concept Map \[ITI-100\] and
Translate Code \[ITI-101\] transactions. See ITI TF-2c: 3.100 and ITI
TF-2c: 3.101.

<span id="_Toc42155623" class="anchor"></span>**51.3 SVCM Required Actor
Groupings**

An actor from this profile (Column 1) shall implement all of the
required transactions and/or content modules in this profile ***in
addition to*** ***<span class="underline">all</span>*** of the
requirements for the grouped actor (Column 2).

Table 51.3-1: SVCM Profile - Required Actor Groupings

|                        |                                          |             |                            |
| ---------------------- | ---------------------------------------- | ----------- | -------------------------- |
| SVCM Actor             | Actor(s) to be grouped with              | Reference   | Content Bindings Reference |
| Terminology Consumer   | None                                     | \--         | \--                        |
| Terminology Repository | ATNA / Secure Node or Secure Application | ITI TF-1: 9 | \--                        |

## 51.4 SVCM Overview

### 51.4.1 Concepts

The FHIR terminology specification defines the following terms, see
<http://hl7.org/fhir/R4/terminology-module.html>:

  - **Concept** – A code and definition. A representation of a real or
    abstract thing, which provides meaning.

  - **Code System** - Define concepts and give them meaning through
    formal definitions, and assign codes that represent the concepts.
    Examples of code systems include ICD-10, LOINC, SNOMED-CT, and
    RxNorm. See <https://www.hl7.org/fhir/terminologies.html#valuesets>.

  - **Value Set** - Specifies a set of codes defined by code systems
    that can be used in a specific context. Value sets link code system
    definitions and their use in coded elements. See
    <https://www.hl7.org/fhir/terminologies.html#valuesets>.

  - **Concept Map** - Defines a mapping from a set of concepts defined
    in a code system to one or more concepts defined in other code
    systems. See <http://hl7.org/fhir/R4/conceptmap.html> and
    <http://www.hl7.org/documentcenter/public/standards/V3/core_principles/infrastructure/coreprinciples/v3modelcoreprinciples.html#gl-concept>.

  - **Value Set Expansion** - Converts a Value Set to a list of concept
    representations at a point in time, which typically consists of
    codes. Good practice is that a system that captures a coded value
    should be capable of reconstructing the Value Set Expansion in
    effect when a given code was selected.
    <http://www.hl7.org/documentcenter/public/standards/V3/core_principles/infrastructure/coreprinciples/v3modelcoreprinciples.html#coreP_Coded_Properties-value-sets-resolution>.

### 51.4.2 Use Cases

The following use cases provide examples of how this profile might be
used by various disciplines.

#### 51.4.2.1 Use Case \#1 - Code System, Value Set, and Concept Map Discovery

In this use case, a Terminology Consumer retrieves and filters a list of
Code Systems, Value Sets, or Concept Maps available in a Terminology
Repository.

##### 51.4.2.1.1 Code System or Value Set Discovery Use Case Description

A Terminology Consumer requires a method for querying a Terminology
Repository for a list of available Value Sets, Code Systems, and Concept
Maps, based on filter criteria. Periodically, a health care organization
publishes updated Value Sets, Code Systems, and Concept Maps documenting
the codes that point of service systems must use. An electronic medical
record system, the Terminology Consumer, periodically retrieves the list
of available Value Sets, Code Systems, and Concept Maps that are
relevant to its care unit and verifies that it has an up-to-date version
of each cached locally.

Figure 51.4.2.1.1-1: Discovery interaction diagram

#### 51.4.2.2 Use Case \#2 - Expand a Value Set

In this use case, a point of service system is providing a list of codes
to provide decision support to a clinician prescribing medications.

##### 51.4.2.2.1 Expand a Value Set Use Case Description

A clinician uses a computerized physician order entry (CPOE) system to
order opioid medications for an inpatient. A value set containing all of
the opiate medication formulations that are considered to have abuse
potential can be pulled to support clinical decision support in a health
record system. Using a pre-assigned identifier, the CPOE system queries
the Terminology Repository for an "expanded" Value Set to retrieve the
list of codes based on the definition of the Value Set. The codes
returned by an “expand” operation are suitable for providing decision
support and validation.

Figure 51.4.2.2.1-1: Expand a Value Set Use Case Diagram

#### 51.4.2.3 Use Case \#3 - Look up a code

In this use case, a Terminology Consumer asks a Terminology Repository
for details about a particular code system/code combination.

##### 51.4.2.3.1 Look up a code Use Case Description

A physician updates a patient’s problems list (conditions) at a point of
service terminal. After a code is entered, the point of service
terminal—the Terminology Consumer—queries a Terminology Repository to
retrieve the full details of the code using the lookup operation. The
Terminology Repository returns information for both display and
processing purposes, such as a longer narrative description along with
inclusions and exclusions, allowing the physician to verify that she
entered the correct code and to make a correction if necessary.

Figure 51.4.2.3.1-1: Look up a Concept Use Case Diagram

#### 51.4.2.4 Use Case \#4 - Validate a code

In this use case, a point of service system verifies whether a code is a
valid member of a value set.

##### 51.4.2.4.1 Validate a code Use Case Description

A health system publishes value sets consisting of codes relevant to
particular clinical contexts and related procedures. Value sets are
updated periodically to represent changes in clinical practice and
available medicines and supplies. Before submitting an update to a
patient record, an electronic medical record system checks a code
through the Terminology Repository to validate each medical code. The
Terminology Repository returns true/false indicating whether a
code/concept is in the set of codes associated with a value set.

Figure 51.4.2.4.1-1: Validate a Code Use Case Diagram

#### 51.4.2.5 Use Case \#5 - Translate a code

In this use case, a concept is translated from a source code system,
possibly a proprietary local terminology, to a target code system, such
as LOINC.

##### 51.4.2.5.1 Translate a Code Use Case Description

In this example, an ambulatory clinic might refer to a lab test as a
“white count”. To report and analyze these tests accurately, the
clinic must submit its data using a shared terminology standard used
within the health system, such as LOINC. The clinic’s reporting system
queries a Terminology Repository to translate its local “white count”
concept to a LOINC concept using a pre-loaded Concept Map, which defines
relationships between concepts in a source Code System and one or more
target Code Systems. The Terminology Repository returns LOINC 6690-2
“Leukocytes \[\#/volume\] in Blood by Automated count”.

Figure 51.4.2.5.1-1: Translate a Code Use Case Diagram

## 51.5 SVCM Security Considerations

The contents handled by the SVCM Profile are not patient-specific, so
there are no risks to patient privacy. Some Expanded Value Sets are of
little value to an attacker as they are public tables of non-critical
information (e.g., Expanded Value Sets used for coding of body parts in
medical exams). Other Expanded Value Sets might need protection against
malicious modification or interception. For example, there can be
integrity risks such as masquerade, or the modification of Expanded
Value Sets. Another possible type of risk would be at the privacy and
confidentiality level, such as the interception of an Expanded Value Set
containing confidential data. The profile will allow mitigation of those
risks when needed in the following manner:

  - A Terminology Repository shall be grouped with an ATNA Secure Node
    or Secure Application. Since the Terminology Consumer is not
    required to be grouped with the Secure Node or Secure Application,
    the Terminology Repository shall support both secure and non-secure
    connections.

  - Terminology Repositories shall be able to restrict access to a
    specific Expanded Value Set to authorized and authenticated nodes,
    while allowing unauthenticated network queries to other Expanded
    Value Sets.

See ITI TF-2x: Appendix Z.8 “Mobile Security Considerations”.

## 51.6 SVCM Cross Profile Considerations

None

<span id="_Toc345074666" class="anchor"></span>Appendices to Volume 1

Not applicable

<span id="_Toc336000611" class="anchor"></span>

Volume 2c – Transactions (cont.)

Add Section 3.95

## 3.95 Query Value Set \[ITI-95\]

This section corresponds to transaction \[ITI-95\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-95\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 3.95.1 Scope

This transaction is used by the Terminology Consumer to find value sets
based on criteria it provides in the query parameters of the request
message, or to retrieve a specific value set. The request is received by
the Terminology Repository. The Terminology Repository processes the
request and returns a response of the matching value sets.

### 3.95.2 Actor Roles

Table 3.95.2-1: Actor Roles

| **Actor:** | Terminology Consumer                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------ |
| **Role:**  | Requests value set(s) matching the supplied set of criteria from the Terminology Repository.     |
| **Actor:** | Terminology Repository                                                                           |
| **Role:**  | Returns information for value set(s) matching the criteria provided by the Terminology Consumer. |

### 3.95.3 Referenced Standards

|          |                                                          |
| -------- | -------------------------------------------------------- |
| HL7 FHIR | HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html> |

### 3.95.4 Messages

Figure 3.95.4-1: Interaction Diagram

#### 3.95.4.1 Search Value Set Request Message

The Search Value Set message is a FHIR search interaction on the
ValueSet Resource.

##### 3.95.4.1.1 Trigger Events

A Terminology Consumer triggers a Search Value Set Request to a
Terminology Repository according to the business rules for the search.
These business rules are outside the scope of this transaction.

##### 3.95.4.1.2 Message Semantics

A Terminology Consumer initiates a search interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#search> on the ValueSet.
The query parameters are identified below. A Terminology Consumer may
query any combination or subset of the parameters. The target is
formatted as:

> GET \[base\]/ValueSet?\[parameter=value\]

Where \[base\] is the URL of Terminology Repository.

A Terminology Repository shall support combinations of search parameters
as defined at <http://hl7.org/fhir/R4/search.html#combining>, “Composite
Search Parameters.”

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See ITI TF-2x: Appendix Z.6 for more details.

A Terminology Repository shall implement the parameters described below.
A Terminology Repository may choose to support additional query
parameters beyond the subset listed below. Any additional query
parameters supported shall be supported according to the core FHIR
specification.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

###### 3.95.4.1.2.1 Query Parameters

The Terminology Repository shall support the :contains and :exact
modifiers in all of the string query parameters below defined at
<http://hl7.org/fhir/R4/search.html#string>.

The Terminology Repository shall support the following search parameters
as defined at <http://hl7.org/fhir/R4/search.html#all> and
<http://hl7.org/fhir/R4/valueset.html#search>.

\_id

\_lastUpdated

status

identifier

name

description

reference

title

url

version

The Terminology Repository shall also support the following prefixes for
the \_lastUpdated parameter: gt, lt, ge, le, sa, and eb.

##### 3.95.4.1.3 Expected Actions

The Terminology Repository shall process the query to discover the value
sets that match the search parameters given, and return a response as
per Section 3.95.4.2 or an error as per
<http://hl7.org/fhir/R4/search.html#errors>.

#### 3.95.4.2 Search Value Set Response Message

##### 3.95.4.2.1 Trigger Events

The Terminology Repository found value sets matching the query
parameters specified by the Terminology Consumer as a result of a Search
Value Set Request.

##### 3.95.4.2.2 Message Semantics

The Terminology Repository shall support the search response message as
defined at <http://hl7.org/fhir/R4/http.html#search> on the ValueSet, as
defined at <http://hl7.org/fhir/R4/valueset.html>

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

##### 3.95.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

#### 3.95.4.3 Read Value Set Request Message

This message represents an HTTP GET from the Terminology Consumer to the
Terminology Repository and provides a mechanism for retrieving a single
ValueSet with a known resource id.

##### 3.95.4.3.1 Trigger Events

When the Terminology Consumer possesses the id of ValueSet (either
through query, database lookup, or other mechanism) for which it
requires additional or new information, it issues a Read Value Set
Request.

##### 3.95.4.3.2 Message Semantics

A Terminology Consumer initiates a read interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#read> on the ValueSet
Resource. The target is formatted as:

> GET \[base\]/ValueSet/\[resourceId\]

Where \[base\] is the URL of Terminology Repository.

The resourceId included in the request always represents the unique id
for the ValueSet within the scope of the URL. For example, while
http://example1.org/ihe/ValueSet/1 and
http://example2.com/ihe/ValueSet/1 both contain the same \[resourceId\],
they reference two different resource instances.

Note: The use of "http" or "https" in URL does not override requirements
to use TLS for security purposes.

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See ITI TF-2x: Appendix Z.6 for more details.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

##### 3.95.4.3.3 Expected Actions

The Terminology Repository shall process the request to retrieve the
ValueSet that matches the given resource id, and return a response as
defined at <http://hl7.org/fhir/R4/http.html#read> or an error code as
defined at <http://hl7.org/fhir/http.html#Status-Codes>.

#### 3.95.4.4 Read Value Set Response Message

The Terminology Repository’s response to a successful Read Value Set
message shall be an **HTTP 200** (OK) Status code with a ValueSet
Resource, or an appropriate error status code, optionally with an
OperationOutcome Resource.

##### 3.95.4.4.1 Trigger Events

The Terminology Repository found a ValueSet Resource matching the
resource identifier specified by the Terminology Consumer.

##### 3.95.4.4.2 Message Semantics

The Read Value Set Response is sent from the Terminology Repository to
the Terminology Consumer as a single ValueSet, as defined at
<http://hl7.org/fhir/R4/valueset.html>

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

If the Terminology Repository is unable to produce a response in the
requested format, it shall respond with an **HTTP 4xx** error indicating
that it was unable to fulfill the request. The Terminology Repository
may be capable of servicing requests for response formats not listed,
but shall, at minimum, be capable of producing XML and JSON encodings.

##### 3.95.4.4.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 3.95.5 Security Considerations

See the general Security Consideration in ITI TF-1: 51.5.

Add Section 3.96

## 3.96 Query Code System \[ITI-96\]

This section corresponds to transaction \[ITI-96\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-96\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 3.96.1 Scope

This transaction is used by the Terminology Consumer to solicit
information about code systems whose data match data provided in the
query parameters on the request message. The request is received by the
Terminology Repository. The Terminology Repository processes the request
and returns a response of the matching code systems.

### 3.96.2 Actor Roles

Table 3.96.2-1: Actor Roles

| **Actor:** | Terminology Consumer                                                                               |
| ---------- | -------------------------------------------------------------------------------------------------- |
| **Role:**  | Requests code system(s) matching the supplied set of criteria from the Terminology Repository.     |
| **Actor:** | Terminology Repository                                                                             |
| **Role:**  | Returns information for code system(s) matching the criteria provided by the Terminology Consumer. |

### 3.96.3 Referenced Standards

|          |                                                          |
| -------- | -------------------------------------------------------- |
| HL7 FHIR | HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html> |

### 3.96.4 Messages

Figure 3.96.4-1: Interaction Diagram

#### 3.96.4.1 Search Code System Request Message

The Search Code System message is a FHIR search interaction on the
CodeSystem Resource.

##### 3.96.4.1.1 Trigger Events

A Terminology Consumer triggers a Search Code System Request to a
Terminology Repository according to the business rules for the search.
These business rules are outside the scope of this transaction.

##### 3.96.4.1.2 Message Semantics

A Terminology Consumer initiates a search interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#search> on the CodeSystem.
The query parameters are identified below. A Terminology Consumer may
query any combination or subset of the parameters. The target is
formatted as:

> GET \[base\]/CodeSystem?\[parameter=value\]

Where \[base\] is the URL of Terminology Repository.

A Terminology Repository shall support combinations of search parameters
as defined at <http://hl7.org/fhir/R4/search.html#combining>, “Composite
Search Parameters.”

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See ITI TF-2x: Appendix Z.6 for more details.

A Terminology Repository shall implement the parameters described below.
A Terminology Repository may choose to support additional query
parameters beyond the subset listed below. Any additional query
parameters supported shall be supported according to the core FHIR
specification.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

###### 3.96.4.1.2.1 Query Parameters

The Terminology Repository shall support the :contains and :exact
modifiers in all of the string query parameters below defined at
<http://hl7.org/fhir/R4/search.html#string>.

The Terminology Repository shall support the following search parameters
as defined at <http://hl7.org/fhir/R4/search.html#all> and
<http://hl7.org/fhir/R4/codesystem.html#search>.

\_id

\_lastUpdated

status

identifier

name

description

system

title

url

version

The Terminology Repository shall also support the following prefixes for
the \_lastUpdated parameter: gt, lt, ge, le, sa, and eb.

##### 3.96.4.1.3 Expected Actions

The Terminology Repository shall process the query to discover the code
systems that match the search parameters given, and return a response as
per Section 3.96.4.2 or an error as per
<http://hl7.org/fhir/R4/search.html#errors>.

#### 3.96.4.2 Search Code System Response Message

##### 3.96.4.2.1 Trigger Events

The Terminology Repository found code systems matching the query
parameters

specified by the Terminology Consumer as a result of a Search Code
System Request.

##### 3.96.4.2.2 Message Semantics

The Terminology Repository shall support the search response message as
defined at <http://hl7.org/fhir/R4/http.html#search> on the CodeSystem,
as defined at <http://hl7.org/fhir/R4/codesystem.html>.

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

##### 3.96.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

#### 3.96.4.3 Read Code System Request Message

This message represents an HTTP GET from the Terminology Consumer to the
Terminology Repository and provides a mechanism for retrieving a single
CodeSystem with a known resource id.

##### 3.96.4.3.1 Trigger Events

When the Terminology Consumer possesses the id of the CodeSystem (either
through query, database lookup, or other mechanism) for which it
requires additional or new information, it issues a Read Code System
Request.

##### 3.96.4.3.2 Message Semantics

A Terminology Consumer initiates a read interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#read> on the CodeSystem
Resource. The target is formatted as:

> GET \[base\]/CodeSystem/\[resourceId\]

Where \[base\] is the URL of Terminology Repository.

The resourceId included in the request always represents the unique id
for the CodeSystem within the scope of the URL. For example, while
http://example1.org/ihe/CodeSystem/1 and
http://example2.com/ihe/CodeSystem/1 both contain the same
\[resourceId\], they reference two different resource instances.

Note: The use of "http" or "https" in URL does not override requirements
to use TLS for security purposes.

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See ITI TF-2x: Appendix Z.6 for more details.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

##### 3.96.4.3.3 Expected Actions

The Terminology Repository shall process the request to retrieve the
CodeSystem that matches the given resource id, and return a response as
defined at <http://hl7.org/fhir/R4/http.html#read> or an error code as
defined at <http://hl7.org/fhir/http.html#Status-Codes>.

#### 3.96.4.4 Read Code System Response Message

The Terminology Repository’s response to a successful Read Code System
message shall be an **HTTP 200** (OK) Status code with a CodeSystem
Resource, or an appropriate error status code, optionally with an
OperationOutcome Resource.

##### 3.96.4.4.1 Trigger Events

The Terminology Repository found a CodeSystem Resource matching the
resource identifier specified by the Terminology Consumer.

##### 3.96.4.4.2 Message Semantics

The Read Code System Response is sent from the Terminology Repository to
the Terminology Consumer as a single CodeSystem, as defined at
<http://hl7.org/fhir/R4/codesystem.html>

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

If the Terminology Repository is unable to produce a response in the
requested format, it shall respond with an **HTTP 4xx** error indicating
that it was unable to fulfill the request. The Terminology Repository
may be capable of servicing requests for response formats not listed,
but shall, at minimum, be capable of producing XML and JSON encodings.

##### 3.96.4.4.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 3.96.5 Security Considerations

See the general Security Consideration in ITI TF-1: 51.5.

Add Section 3.97

## 3.97 Expand Value Set \[ITI-97\]

This section corresponds to transaction \[ITI-97\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-97\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 3.97.1 Scope

This transaction is used by the Terminology Consumer to expand a given
ValueSet to return the full list of concepts available in that ValueSet.
The request is received by the Terminology Repository. The Terminology
Repository processes the request and returns a response of the expanded
ValueSet.

### 3.97.2 Actor Roles

Table 3.97.2-1: Actor Roles

| **Actor:** | Terminology Consumer                                                                                  |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| **Role:**  | Requests an expanded ValueSet from the Terminology Repository.                                        |
| **Actor:** | Terminology Repository                                                                                |
| **Role:**  | Returns information for the expanded ValueSet based on criteria provided by the Terminology Consumer. |

### 3.97.3 Referenced Standards

|          |                                                          |
| -------- | -------------------------------------------------------- |
| HL7 FHIR | HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html> |

### 3.97.4 Messages

Figure 3.97.4-1: Interaction Diagram

#### 3.97.4.1 Expand Value Set Request Message

The Expand Value Set Request message is a FHIR $expand operation on the
ValueSet Resource.

##### 3.97.4.1.1 Trigger Events

A Terminology Consumer triggers an Expand Value Set Request to a
Terminology Repository according to the business rules for the
expansion. These business rules are outside the scope of this
transaction.

##### 3.97.4.1.2 Message Semantics

A Terminology Consumer initiates an $expand request using HTTP GET as
defined at <http://hl7.org/fhir/valueset-operation-expand.html> on the
ValueSet Resource. The required input parameters are identified in Table
3.97.4.1.2-1.

The URL for this operation is:
\[base\]/ValueSet/$expand?\[parameter=value\]

Where \[base\] is the URL of Terminology Repository.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

Table 3.97.4.1.2-1: Expand Value Set Message HTTP Input Parameters

<table>
<thead>
<tr class="header">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>url</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>uri</td>
<td>A canonical reference to a value set. The server must know the value set (e.g., it is defined explicitly in the server's value sets, or it is defined implicitly by some code system known to the server).</td>
</tr>
<tr class="even">
<td><p>_format</p>
<p>[0..1]</p></td>
<td></td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See ITI TF-2x: Appendix Z.6.</td>
</tr>
<tr class="odd">
<td><p>valueSet</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the url is used.</p></td>
<td>ValueSet</td>
<td></td>
</tr>
<tr class="even">
<td><p>valueSetVersion</p>
<p>[0..1]</p></td>
<td>[0..1]</td>
<td>string</td>
<td>The identifier that is used to identify a specific version of the value set to be used when generating the expansion. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g., yyyymmdd) if a managed version is not available.</td>
</tr>
<tr class="odd">
<td><p>context</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the url is used.</p></td>
<td>uri</td>
<td></td>
</tr>
<tr class="even">
<td><p>contextDirection</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is used with the context parameter which is not used.</p></td>
<td>code</td>
<td></td>
</tr>
<tr class="odd">
<td><p>filter</p>
<p>[0..1]</p></td>
<td></td>
<td>string</td>
<td><p>A text filter that is applied to restrict the codes that are returned (this is useful in a UI context). The interpretation of this is delegated to the server in order to allow to determine the most optimal search approach for the context. The server can document the way this parameter works in TerminologyCapabilities.expansion.textFilter. Typical usage of this parameter includes functionality like:</p>
<ul>
<li><p>using left matching e.g., "acut ast"</p></li>
<li><p>allowing for wild cards such as %, &amp;, ?</p></li>
<li><p>searching on definition as well as display(s)</p></li>
<li><p>allowing for search conditions (and / or / exclusions)</p></li>
</ul>
<p>Text Search engines such as Lucene or Solr, long with their considerable functionality, might also be used. The optional text search might also be code system specific, and servers might have different implementations for different code systems.</p></td>
</tr>
<tr class="even">
<td><p>date</p>
<p>[0..1]</p></td>
<td></td>
<td>dateTime</td>
<td>The date for which the expansion should be generated. if a date is provided, it means that the server should use the value set / code system definitions as they were on the given date, or return an error if this is not possible. Normally, the date is the current conditions (which is the default value) but under some circumstances, systems need to generate an expansion as it would have been in the past. A typical example of this would be where code selection is constrained to the set of codes that were available when the patient was treated, not when the record is being edited. Note that which date is appropriate is a matter for implementation policy.</td>
</tr>
<tr class="odd">
<td><p>offset</p>
<p>[0..1]</p></td>
<td></td>
<td>integer</td>
<td>Paging support - where to start if a subset is desired (default = 0). Offset is number of records (not number of pages)</td>
</tr>
<tr class="even">
<td><p>count</p>
<p>[0..1]</p></td>
<td></td>
<td>integer</td>
<td>Paging support - how many codes should be provided in a partial page view. Paging only applies to flat expansions - servers ignore paging if the expansion is not flat. If count = 0, the client is asking how large the expansion is. Servers SHOULD honor this request for hierarchical expansions as well, and simply return the overall count.</td>
</tr>
<tr class="odd">
<td><p>includeDesignations</p>
<p>[0..1]</p></td>
<td></td>
<td>boolean</td>
<td>Controls whether concept designations are to be included or excluded in value set expansions.</td>
</tr>
<tr class="even">
<td><p>designation</p>
<p>[0..*]</p></td>
<td></td>
<td>string</td>
<td>A token that specifies a system+code that is either a use or a language. Designations that match by language or use are included in the expansion. If no designation is specified, it is at the server discretion which designations to return.</td>
</tr>
<tr class="odd">
<td><p>includeDefinition</p>
<p>[0..1]</p></td>
<td></td>
<td>boolean</td>
<td>Controls whether the value set definition is included or excluded in value set expansions.</td>
</tr>
<tr class="even">
<td><p>activeOnly</p>
<p>[0..1]</p></td>
<td></td>
<td>boolean</td>
<td>Controls whether inactive concepts are included or excluded in value set expansions. Note that if the value set explicitly specifies that inactive codes are included, this parameter can still remove them from a specific expansion, but this parameter cannot include them if the value set excludes them</td>
</tr>
<tr class="odd">
<td><p>excludeNested</p>
<p>[0..1]</p></td>
<td></td>
<td>boolean</td>
<td>Controls whether or not the value set expansion nests codes or not (i.e., ValueSet.expansion.contains.contains)</td>
</tr>
<tr class="even">
<td><p>excludeNotForUI</p>
<p>[0..1]</p></td>
<td></td>
<td>boolean</td>
<td>Controls whether or not the value set expansion is assembled for a user interface use or not. Value sets intended for User Interface might include 'abstract' codes or have nested contains with items with no code or abstract = true, with the sole purpose of helping a user navigate through the list efficiently, where as a value set not generated for UI use might be flat, and only contain the selectable codes in the value set. The exact implications of 'for UI' depend on the code system, and what properties it exposes for a terminology server to use. In the FHIR Specification itself, the value set expansions are generated with excludeNotForUI = false, and the expansions used when generated schema / code etc., or performing validation, are all excludeNotForUI = true.</td>
</tr>
<tr class="odd">
<td><p>excludePostCoordinate</p>
<p>[0..1]</p></td>
<td></td>
<td>boolean</td>
<td>Controls whether or not the value set expansion includes post coordinated codes.</td>
</tr>
<tr class="even">
<td><p>displayLanguage</p>
<p>[0..1]</p></td>
<td></td>
<td>code</td>
<td>Specifies the language to be used for description in the expansions i.e., the language to be used for ValueSet.expansion.contains.display.</td>
</tr>
<tr class="odd">
<td><p>exclude-system</p>
<p>[0..*]</p></td>
<td></td>
<td>canonical</td>
<td>Code system, or a particular version of a code system to be excluded from the value set expansion. The format is the same as a canonical URL: [system]|[version] - e.g., http://loinc.org|2.56</td>
</tr>
<tr class="even">
<td><p>system-version</p>
<p>[0..*]</p></td>
<td></td>
<td>canonical</td>
<td>Specifies a version to use for a system, if the value set does not specify which one to use. The format is the same as a canonical URL: [system]|[version] - e.g., http://loinc.org|2.56</td>
</tr>
<tr class="odd">
<td><p>check-system-version</p>
<p>[0..*]</p></td>
<td></td>
<td>canonical</td>
<td>Edge Case: Specifies a version to use for a system. If a value set specifies a different version, an error is returned instead of the expansion. The format is the same as a canonical URL: [system]|[version] - e.g., http://loinc.org|2.56</td>
</tr>
<tr class="even">
<td><p>force-system-version</p>
<p>[0..*]</p></td>
<td></td>
<td>canonical</td>
<td>Edge Case: Specifies a version to use for a system. This parameter overrides any specified version in the value set (and any it depends on). The format is the same as a canonical URL: [system]|[version] - e.g., http://loinc.org|2.56. Note that this has obvious safety issues, in that it may result in a value set expansion giving a different list of codes that is both wrong and unsafe, and implementers should only use this capability reluctantly. It primarily exists to deal with situations where specifications have fallen into decay as time passes. If the value is override, the version used SHALL explicitly be represented in the expansion parameters.</td>
</tr>
</tbody>
</table>

###### 3.97.4.1.2.1 Example Request Message

An example request message from
<http://hl7.org/fhir/valueset-operation-expand.html> is:

GET \[base\]/ValueSet/$expand?url=http://acme.com/fhir/ValueSet/23

##### 3.97.4.1.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the ValueSet that matches the parameters given and return a
response as per Section 3.97.4.2 or an OperationOutcome with an error
message.

#### 3.97.4.2 Expand Value Set Response Message

##### 3.97.4.2.1 Trigger Events

The Terminology Repository found expanded value set matching the input
parameters specified by the Terminology Consumer as a result of a Expand
Value Set Request.

##### 3.97.4.2.2 Message Semantics

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

The response message is a FHIR ValueSet Resource with the expansion
element populated with the expanded ValueSet concepts.

###### 3.97.4.2.2.1 Example Response Message

An example response message from
<http://hl7.org/fhir/valueset-operation-expand.html> is:

HTTP/1.1 200 OK

\[other headers\]

\<ValueSet xmlns="http://hl7.org/fhir"\>

\<\!-- the server SHOULD populate the id with a newly created UUID

so clients can easily track a particular expansion --\>

\<id value="43770626-f685-4ba8-8d66-fb63e674c467"/\>

\<\!-- no need for meta, though it is allowed for security labels,
profiles --\>

\<\!-- other value set details --\>

\<expansion\>

\<\!-- when expanded --\>

\<timestamp value="20141203T08:50:00+11:00"/\>

\<contains\>

\<\!-- expansion contents --\>

\</contains\>

\</expansion\>

\</ValueSet\>

##### 3.97.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 3.97.5 Security Considerations

See the general Security Consideration in ITI TF-1: 51.5.

Add Section 3.98

## 3.98 Lookup Code \[ITI-98\]

This section corresponds to transaction \[ITI-98\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-98\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 3.98.1 Scope

This transaction is used by the Terminology Consumer to lookup a given
code to return the full details. The request is received by the
Terminology Repository. The Terminology Repository processes the request
and returns a response of the code details as a Parameters Resource.

### 3.98.2 Actor Roles

Table 3.98.2-1: Actor Roles

| **Actor:** | Terminology Consumer                                                                     |
| ---------- | ---------------------------------------------------------------------------------------- |
| **Role:**  | Requests code details from the Terminology Repository.                                   |
| **Actor:** | Terminology Repository                                                                   |
| **Role:**  | Returns information for the code based on criteria provided by the Terminology Consumer. |

### 3.98.3 Referenced Standards

|          |                                                          |
| -------- | -------------------------------------------------------- |
| HL7 FHIR | HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html> |

### 3.98.4 Messages

Figure 3.98.4-1: Interaction Diagram

#### 3.98.4.1 Lookup Code Request Message

The Lookup Code Request message is a FHIR $lookup operation on the
CodeSystem Resource.

##### 3.98.4.1.1 Trigger Events

A Terminology Consumer triggers a Lookup Code Request to a Terminology
Repository according to the business rules for the lookup. These
business rules are outside the scope of this transaction.

##### 3.98.4.1.2 Message Semantics

A Terminology Consumer initiates an $lookup request using HTTP GET as
defined at <http://hl7.org/fhir/codesystem-operation-lookup.html> on the
CodeSystem Resource. The required input parameters are identified in
Table 3.98.4.1.2-1.

The URL for this operation is:
\[base\]/CodeSystem/$lookup?\[parameter=value\]

Where \[base\] is the URL of Terminology Repository.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

Table 3.98.4.1.2-1: Lookup Code Message HTTP Input Parameters

<table>
<thead>
<tr class="header">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>code</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>code</td>
<td>The code that is to be located. If a code is provided, a system must be provided.</td>
</tr>
<tr class="even">
<td><p>system</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>uri</td>
<td>The system for the code that is to be located.</td>
</tr>
<tr class="odd">
<td><p>_format</p>
<p>[0..1]</p></td>
<td></td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See ITI TF-2x: Appendix Z.6.</td>
</tr>
<tr class="even">
<td><p>version</p>
<p>[0..1]</p></td>
<td></td>
<td>string</td>
<td>The version of the system, if one was provided in the source data.</td>
</tr>
<tr class="odd">
<td><p>coding</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the code+system parameters are used.</p></td>
<td>Coding</td>
<td></td>
</tr>
<tr class="even">
<td><p>date</p>
<p>[0..1]</p></td>
<td></td>
<td>dateTime</td>
<td>The date for which the information should be returned. Normally, this is the current conditions (which is the default value) but under some circumstances, systems need to access this information as it would have been in the past. A typical example of this would be where code selection is constrained to the set of codes that were available when the patient was treated, not when the record is being edited. Note that which date is appropriate is a matter for implementation policy.</td>
</tr>
<tr class="odd">
<td><p>displayLanguage</p>
<p>[0..1]</p></td>
<td></td>
<td>code</td>
<td>The requested language for display (see $expand.displayLanguage).</td>
</tr>
<tr class="even">
<td><p>property</p>
<p>[0..*]</p></td>
<td></td>
<td>code</td>
<td>A property that the client wishes to be returned in the output. If no properties are specified, the server chooses what to return. The following properties are defined for all code systems: url, name, version (code system info) and code information: display, definition, designation, parent and child, and for designations, lang.X where X is a designation language code. Some of the properties are returned explicit in named parameters (when the names match), and the rest (except for lang.X) in the property parameter group.</td>
</tr>
</tbody>
</table>

###### 3.98.4.1.2.1 Example Request Message

An example request message from
<http://hl7.org/fhir/codesystem-operation-lookup.html> is:

GET \[base\]/CodeSystem/$lookup?system=http://loinc.org\&code=1963-8

##### 3.98.4.1.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the code that matches the parameters given and return a
response as per Section 3.98.4.2 or an OperationOutcome Resource with an
error message.

#### 3.98.4.2 Lookup Code Response Message

##### 3.98.4.2.1 Trigger Events

The Terminology Repository found the code matching the input parameters
specified by the Terminology Consumer as a result of a Lookup Code
Request.

##### 3.98.4.2.2 Message Semantics

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

The response message is a FHIR Parameters Resource with properties of
the code based on the out parameters defined at
<http://hl7.org/fhir/codesystem-operation-lookup.html> and reproduced in
Table 3.98.4.2.2-1.

Table 3.98.4.2.2-1: Lookup Code Message HTTP Output Parameters

<table>
<thead>
<tr class="header">
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>name</p>
<p>[1..1]</p></td>
<td>string</td>
<td>A display name for the code system</td>
</tr>
<tr class="even">
<td><p>version</p>
<p>[0..1]</p></td>
<td>string</td>
<td>The version that these details are based on</td>
</tr>
<tr class="odd">
<td><p>display</p>
<p>[1..1]</p></td>
<td>string</td>
<td>The preferred display for this concept</td>
</tr>
<tr class="even">
<td><p>designation</p>
<p>[0..*]</p></td>
<td></td>
<td>Additional representations for this concept</td>
</tr>
<tr class="odd">
<td><p>designation.language</p>
<p>[0..1]</p></td>
<td>code</td>
<td>The language this designation is defined for</td>
</tr>
<tr class="even">
<td><p>designation.use</p>
<p>[0..1]</p></td>
<td>Coding</td>
<td>A code that details how this designation would be used</td>
</tr>
<tr class="odd">
<td><p>designation.value</p>
<p>[1..1]</p></td>
<td>string</td>
<td>The text value for this designation</td>
</tr>
<tr class="even">
<td><p>property</p>
<p>[0..*]</p></td>
<td></td>
<td>One or more properties that contain additional information about the code, including status. For complex terminologies (e.g., SNOMED CT, LOINC, medications), these properties serve to decompose the code</td>
</tr>
<tr class="odd">
<td><p>property.code</p>
<p>[1..1]</p></td>
<td>code</td>
<td>Identifies the property returned</td>
</tr>
<tr class="even">
<td><p>property.value</p>
<p>[0..1]</p></td>
<td>code | Coding | string | integer | boolean | dateTime | decimal</td>
<td>The value of the property returned</td>
</tr>
<tr class="odd">
<td><p>property.description</p>
<p>[0..1]</p></td>
<td>string</td>
<td>Human Readable representation of the property value (e.g., display for a code)</td>
</tr>
<tr class="even">
<td><p>property.subproperty</p>
<p>[0..*]</p></td>
<td></td>
<td>Nested Properties (mainly used for SNOMED CT decomposition, for relationship Groups)</td>
</tr>
<tr class="odd">
<td><p>property.subproperty.code</p>
<p>[1..1]</p></td>
<td>code</td>
<td>Identifies the sub-property returned</td>
</tr>
<tr class="even">
<td><p>property.subproperty.value</p>
<p>[1..1]</p></td>
<td>code | Coding | string | integer | boolean | dateTime | decimal</td>
<td>The value of the sub-property returned</td>
</tr>
<tr class="odd">
<td><p>property.subproperty.description</p>
<p>[0..1]</p></td>
<td>string</td>
<td>Human Readable representation of the sub-property value (e.g., display for a code)</td>
</tr>
</tbody>
</table>

###### 3.98.4.2.2.1 Example Response Message

An example successful response message from
<http://hl7.org/fhir/codesystem-operation-lookup.html> is:

HTTP/1.1 200 OK

\[other headers\]

{

"resourceType" : "Parameters",

"parameter" : \[

{

"name" : "name",

"valueString" : "LOINC"

},

{

"name" : "version",

"valueString" : "2.48"

},

{

"name" : "display",

"valueString" : "Bicarbonate \[Moles/volume\] in Serum"

},

{

"name" : "abstract",

"valueString" : "false"

},

{

"name" : "designation",

"part" : \[

{

"name" : "value",

"valueString" : "Bicarbonate \[Moles/volume\] in Serum"

}

\]

}

\]

}

An example failed response message from
<http://hl7.org/fhir/codesystem-operation-lookup.html> is:

HTTP/1.1 200 OK

\[other headers\]

{

"resourceType": "OperationOutcome",

"id": "exception",

"text": {

"status": "additional",

"div": "\<div xmlns=\\"http://www.w3.org/1999/xhtml\\"\>Code "ABC-23"
not found\</div\>"

},

"issue": \[

{

"severity": "error",

"code": "not-found",

"details": {

"text": "Code "ABC-23" not found"

}

}

\]

}

##### 3.98.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 3.98.5 Security Considerations

See the general Security Consideration in ITI TF-1: 51.5.

Add Section 3.99

## 3.99 Validate Code \[ITI-99\]

This section corresponds to transaction \[ITI-99\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-99\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 3.99.1 Scope

This transaction is used by the Terminology Consumer to validate the
existence of a given code in a value set or code system. The request is
received by the Terminology Repository. The Terminology Repository
processes the request and returns a response as a Parameters Resource.

### 3.99.2 Actor Roles

Table 3.99.2-1: Actor Roles

| **Actor:** | Terminology Consumer                                                              |
| ---------- | --------------------------------------------------------------------------------- |
| **Role:**  | Requests the code to validate from the Terminology Repository.                    |
| **Actor:** | Terminology Repository                                                            |
| **Role:**  | Returns validation information for the code provided by the Terminology Consumer. |

### 3.99.3 Referenced Standards

|          |                                                          |
| -------- | -------------------------------------------------------- |
| HL7 FHIR | HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html> |

### 3.99.4 Messages

Figure 3.99.4-1: Interaction Diagram

#### 3.99.4.1 Validate ValueSet Code Request Message

The Validate ValueSet Code Request message is a FHIR $validate-code
operation on the ValueSet Resource.

##### 3.99.4.1.1 Trigger Events

A Terminology Consumer triggers a Validate ValueSet Code Request to a
Terminology Repository according to the business rules for the
validation. These business rules are outside the scope of this
transaction.

##### 3.99.4.1.2 Message Semantics

A Terminology Consumer initiates an $validate-code request using HTTP
GET as defined at
<http://hl7.org/fhir/valueset-operation-validate-code.html> on the
ValueSet Resource. The required input parameters are identified in Table
3.99.4.1.2-1.

The URL for this operation is:
\[base\]/ValueSet/$validate-code?\[parameter=value\]

Where \[base\] is the URL of Terminology Repository.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

Table 3.99.4.1.2-1: Validate ValueSet Code Message HTTP Input Parameters

<table>
<thead>
<tr class="header">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>url</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>uri</td>
<td>Value set Canonical URL. The server must know the value set (e.g., it is defined explicitly in the server's value sets, or it is defined implicitly by some code system known to the server.</td>
</tr>
<tr class="even">
<td><p>code</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>code</td>
<td>The code that is to be validated. If a code is provided, a system or a context must be provided (if a context is provided, then the server SHALL ensure that the code is not ambiguous without a system).</td>
</tr>
<tr class="odd">
<td><p>system</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>uri</td>
<td>The system for the code that is to be validated.</td>
</tr>
<tr class="even">
<td><p>_format</p>
<p>[0..1]</p></td>
<td>[0..1]</td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See ITI TF-2x: Appendix Z.6.</td>
</tr>
<tr class="odd">
<td><p>context</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the url parameter is used.</p></td>
<td>uri</td>
<td></td>
</tr>
<tr class="even">
<td><p>valueSet</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the url parameter is used.</p></td>
<td>ValueSet</td>
<td></td>
</tr>
<tr class="odd">
<td><p>valueSetVersion</p>
<p>[0..1]</p></td>
<td></td>
<td>string</td>
<td>The identifier that is used to identify a specific version of the value set to be used when validating the code. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g., yyyymmdd) if a managed version is not available.</td>
</tr>
<tr class="even">
<td><p>systemVersion</p>
<p>[0..1]</p></td>
<td></td>
<td>string</td>
<td>The version of the system, if one was provided in the source data</td>
</tr>
<tr class="odd">
<td><p>display</p>
<p>[0..1]</p></td>
<td></td>
<td>string</td>
<td>The display associated with the code, if provided. If a display is provided a code must be provided. If no display is provided, the server cannot validate the display value, but may choose to return a recommended display name using the display parameter in the outcome. Whether displays are case sensitive is code system dependent</td>
</tr>
<tr class="even">
<td><p>coding</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the code+system parameters are used.</p></td>
<td>Coding</td>
<td></td>
</tr>
<tr class="odd">
<td><p>codeableConcept</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the code+system parameters are used.</p></td>
<td>CodeableConcept</td>
<td></td>
</tr>
<tr class="even">
<td><p>date</p>
<p>[0..1]</p></td>
<td></td>
<td>dateTime</td>
<td>The date for which the validation should be checked. Normally, this is the current conditions (which is the default values) but under some circumstances, systems need to validate that a correct code was used at some point in the past. A typical example of this would be where code selection is constrained to the set of codes that were available when the patient was treated, not when the record is being edited. Note that which date is appropriate is a matter for implementation policy.</td>
</tr>
<tr class="odd">
<td><p>abstract</p>
<p>[0..1]</p></td>
<td></td>
<td>boolean</td>
<td><p>If this parameter has a value of true, the client is stating that the validation is being performed in a context where a concept designated as 'abstract' is appropriate/allowed to be used, and the server should regard abstract codes as valid. If this parameter is false, abstract codes are not considered to be valid.</p>
<p>Note that 'abstract' is a property defined by many HL7 code systems that indicates that the concept is a logical grouping concept that is not intended to be used as a 'concrete' concept in an actual patient/care/process record. This language is borrowed from Object Oriented theory where 'abstract' objects are never instantiated. However, in the general record and terminology eco-system, there are many contexts where it is appropriate to use these codes e.g., as decision making criterion, or when editing value sets themselves. This parameter allows a client to indicate to the server that it is working in such a context.</p></td>
</tr>
<tr class="even">
<td><p>displayLanguage</p>
<p>[0..1]</p></td>
<td></td>
<td>code</td>
<td>Specifies the language to be used for description when validating the display property</td>
</tr>
</tbody>
</table>

##### 3.99.4.1.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the code in the value set that matches the parameters given and
return a response as per Section 3.99.4.2 or an OperationOutcome
Resource with an error message.

#### 3.99.4.2 Validate ValueSet Code Response Message

##### 3.99.4.2.1 Trigger Events

The Terminology Repository found validation details of the code matching
the input parameters

specified by the Terminology Consumer as a result of a Validate ValueSet
Code Request.

##### 3.99.4.2.2 Message Semantics

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

The response message is a FHIR Parameters Resource with properties of
the code set based on the out parameters defined at
<http://hl7.org/fhir/valueset-operation-validate-code.html> and
reproduced in Table 3.99.4.2.2-1.

Table 3.99.4.2.2-1: Validate ValueSet Code Message HTTP Output
Parameters

<table>
<thead>
<tr class="header">
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>result</p>
<p>[1..1]</p></td>
<td>boolean</td>
<td>True if the concept details supplied are valid</td>
</tr>
<tr class="even">
<td><p>message</p>
<p>[0..1]</p></td>
<td>string</td>
<td>Error details, if result = false. If this is provided when result = true, the message carries hints and warnings</td>
</tr>
<tr class="odd">
<td><p>display</p>
<p>[0..1]</p></td>
<td>string</td>
<td>A valid display for the concept if the system wishes to display this to a user</td>
</tr>
</tbody>
</table>

##### 3.99.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

#### 3.99.4.3 Validate CodeSystem Code Request Message

The Validate CodeSystem Code Request message is a FHIR $validate-code
operation on the CodeSystem Resource.

##### 3.99.4.3.1 Trigger Events

A Terminology Consumer triggers a Validate CodeSystem Code Request to a
Terminology Repository according to the business rules for the
validation. These business rules are outside the scope of this
transaction.

##### 3.99.4.3.2 Message Semantics

A Terminology Consumer initiates an $validate-code request using HTTP
GET as defined at
<http://hl7.org/fhir/codesystem-operation-validate-code.html> on the
CodeSystem Resource. The required input parameters are identified in
Table 3.99.4.3.2-1.

The URL for this operation is: \[base\]/CodeSystem/$validate-code

Where \[base\] is the URL of Terminology Repository.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

Table 3.99.4.3.2-1: Validate CodeSystem Code Message HTTP Input
Parameters

<table>
<thead>
<tr class="header">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>url</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>uri</td>
<td>CodeSystem URL. The server must know the code system (e.g., it is defined explicitly in the server's code systems, or it is known implicitly by the server.</td>
</tr>
<tr class="even">
<td><p>code</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>code</td>
<td>The code that is to be validated.</td>
</tr>
<tr class="odd">
<td><p>_format</p>
<p>[0..1]</p></td>
<td></td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See ITI TF-2x: Appendix Z.6.</td>
</tr>
<tr class="even">
<td><p>codeSystem</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the url parameter is used.</p></td>
<td>CodeSystem</td>
<td></td>
</tr>
<tr class="odd">
<td><p>version</p>
<p>[0..1]</p></td>
<td></td>
<td>string</td>
<td>The version of the code system, if one was provided in the source data.</td>
</tr>
<tr class="even">
<td><p>display</p>
<p>[0..1]</p></td>
<td></td>
<td>string</td>
<td>The display associated with the code, if provided. If a display is provided a code must be provided. If no display is provided, the server cannot validate the display value, but may choose to return a recommended display name in an extension in the outcome. Whether displays are case sensitive is code system dependent.</td>
</tr>
<tr class="odd">
<td><p>coding</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the code+url parameters are used.</p></td>
<td>Coding</td>
<td></td>
</tr>
<tr class="even">
<td><p>codeableConcept</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the code+url parameters are used.</p></td>
<td>CodeableConcept</td>
<td></td>
</tr>
<tr class="odd">
<td><p>date</p>
<p>[0..1]</p></td>
<td></td>
<td>dateTime</td>
<td>The date for which the validation should be checked. Normally, this is the current conditions (which is the default values) but under some circumstances, systems need to validate that a correct code was used at some point in the past. A typical example of this would be where code selection is constrained to the set of codes that were available when the patient was treated, not when the record is being edited. Note that which date is appropriate is a matter for implementation policy.</td>
</tr>
<tr class="even">
<td><p>abstract</p>
<p>[0..1]</p></td>
<td></td>
<td>boolean</td>
<td>If this parameter has a value of true, the client is stating that the validation is being performed in a context where a concept designated as 'abstract' is appropriate/allowed to be used, and the server should regard abstract codes as valid. If this parameter is false, abstract codes are not considered to be valid.</td>
</tr>
<tr class="odd">
<td><p>displayLanguage</p>
<p>[0..1]</p></td>
<td></td>
<td>code</td>
<td>Specifies the language to be used for description when validating the display property</td>
</tr>
</tbody>
</table>

##### 3.99.4.3.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the code in the code system that matches the parameters given
and return a response as per Section 3.99.4.4 or an OperationOutcome
Resource with an error message.

#### 3.99.4.4 Validate CodeSystem Code Response Message

##### 3.99.4.4.1 Trigger Events

The Terminology Repository found validation details of the code matching
the input parameters

specified by the Terminology Consumer as a result of a Validate
CodeSystem Code Request.

##### 3.99.4.4.2 Message Semantics

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

The response message is a FHIR Parameters Resource with properties of
the code set based on the out parameters defined at
<http://hl7.org/fhir/codesystem-operation-validate-code.html> and
reproduced in Table 3.99.4.4.2-1.

Table 3.99.4.4.2-1: Validate CodeSystem Code Message HTTP Output
Parameters

<table>
<thead>
<tr class="header">
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>result</p>
<p>[1..1]</p></td>
<td>boolean</td>
<td>True if the concept details supplied are valid</td>
</tr>
<tr class="even">
<td><p>message</p>
<p>[0..1]</p></td>
<td>string</td>
<td>Error details, if result = false. If this is provided when result = true, the message carries hints and warnings</td>
</tr>
<tr class="odd">
<td><p>display</p>
<p>[0..1]</p></td>
<td>string</td>
<td>A valid display for the concept if the system wishes to display this to a user</td>
</tr>
</tbody>
</table>

##### 3.99.4.4.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 3.99.5 Security Considerations

See the general Security Consideration in ITI TF-1: 51.5.

Add Section 3.100

## 3.100 Query Concept Map \[ITI-100\]

This section corresponds to transaction \[ITI-100\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-100\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 3.100.1 Scope

This transaction is used by the Terminology Consumer that supports the
Translate Option to solicit information about concept maps whose data
match data provided in the query parameters on the request message. The
request is received by the Terminology Repository that supports the
Translate Option. The Terminology Repository processes the request and
returns a response of the matching concept maps.

### 3.100.2 Actor Roles

Table 3.100.2-1: Actor Roles

| **Actor:** | Terminology Consumer                                                                               |
| ---------- | -------------------------------------------------------------------------------------------------- |
| **Role:**  | Requests concept map(s) matching the supplied set of criteria from the Terminology Repository.     |
| **Actor:** | Terminology Repository                                                                             |
| **Role:**  | Returns information for concept map(s) matching the criteria provided by the Terminology Consumer. |

### 3.100.3 Referenced Standards

|          |                                                          |
| -------- | -------------------------------------------------------- |
| HL7 FHIR | HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html> |

### 3.100.4 Messages

Figure 3.100.4-1: Interaction Diagram

#### 3.100.4.1 Search Concept Map Request Message

The Search Concept Map message is a FHIR search interaction on the
ConceptMap Resource.

##### 3.100.4.1.1 Trigger Events

A Terminology Consumer triggers a Search Concept Map Request to a
Terminology Repository according to the business rules for the search.
These business rules are outside the scope of this transaction.

##### 3.100.4.1.2 Message Semantics

A Terminology Consumer initiates a search interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#search> on the ConceptMap.
The query parameters are identified below. A Terminology Consumer may
query any combination or subset of the parameters. The target is
formatted as:

> GET \[base\]/ConceptMap?\[parameter=value\]

Where \[base\] is the URL of Terminology Repository.

A Terminology Repository shall support combinations of search parameters
as defined at <http://hl7.org/fhir/R4/search.html#combining>, “Composite
Search Parameters.”

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See ITI TF-2x: Appendix Z.6 for more details.

A Terminology Repository shall implement the parameters described below.
A Terminology Repository may choose to support additional query
parameters beyond the subset listed below. Any additional query
parameters supported shall be supported according to the core FHIR
specification.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

###### 3.100.4.1.2.1 Query Parameters

The Terminology Repository shall support the :contains and :exact
modifiers in all of the string query parameters below defined at
<http://hl7.org/fhir/R4/search.html#string>.

The Terminology Repository shall support the following search parameters
as defined at <http://hl7.org/fhir/R4/search.html#all> and
<http://hl7.org/fhir/R4/conceptmap.html#search>.

\_id

\_lastUpdated

status

identifier

name

description

title

url

version

source-system

source-uri

target-system

target-uri

The Terminology Repository shall also support the following prefixes for
the \_lastUpdated parameter: gt, lt, ge, le, sa, and eb.

##### 3.100.4.1.3 Expected Actions

The Terminology Repository shall process the query to discover the
concept maps that match the search parameters given, and return a
response as per Section 3.100.4.2 or an error as per
<http://hl7.org/fhir/R4/search.html#errors>.

#### 3.100.4.2 Search Concept Map Response message

##### 3.100.4.2.1 Trigger Events

The Terminology Repository found concept maps matching the query
parameters specified by the Terminology Consumer as a result of a Search
Concept Map Request.

##### 3.100.4.2.2 Message Semantics

The Terminology Repository shall support the search response message as
defined at <http://hl7.org/fhir/R4/http.html#search> on the ConceptMap,
as defined at <http://hl7.org/fhir/R4/conceptmap.html>

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

##### 3.100.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

#### 3.100.4.3 Read Concept Map Request Message

This message represents an HTTP GET from the Terminology Consumer to the
Terminology Repository and provides a mechanism for retrieving a single
ConceptMap with a known resource id.

##### 3.100.4.3.1 Trigger Events

When the Terminology Consumer possesses an id of a ConceptMap (either
through query, database lookup, or other mechanism) for which it
requires additional or new information, it issues a Read Concept Map
Request.

##### 3.100.4.3.2 Message Semantics

A Terminology Consumer initiates a read interaction using HTTP GET as
defined at <http://hl7.org/fhir/R4/http.html#read> on the ConceptMap
Resource. The target is formatted as:

> GET \[base\]/ConceptMap/\[resourceId\]

Where \[base\] is the URL of Terminology Repository.

The resourceId included in the request always represents the unique id
for the ConceptMap within the scope of the URL. For example, while
http://example1.org/ihe/ConceptMap/1 and
http://example2.com/ihe/ConceptMap/1 both contain the same
\[resourceId\], they reference two different resource instances.

Note: The use of "http" or "https" in URL does not override requirements
to use TLS for security purposes.

A Terminology Repository shall support responding to a request for both
the JSON and the XML messaging formats as defined in FHIR. A Terminology
Consumer shall accept either the JSON or the XML messaging formats as
defined in FHIR. See ITI TF-2x: Appendix Z.6 for more details.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

##### 3.100.4.3.3 Expected Actions

The Terminology Repository shall process the request to retrieve the
ConceptMap that matches the given resource id, and return a response as
defined at <http://hl7.org/fhir/R4/http.html#read> or an error code as
defined at <http://hl7.org/fhir/http.html#Status-Codes>.

#### 3.100.4.4 Read Concept Map Response Message

The Terminology Repository’s response to a successful Read Concept Map
message shall be an **HTTP 200** (OK) Status code with a ConceptMap
Resource, or an appropriate error status code, optionally with an
OperationOutcome Resource.

##### 3.100.4.4.1 Trigger Events

The Terminology Repository found a ConceptMap Resource matching the
resource identifier specified by the Terminology Consumer.

##### 3.100.4.4.2 Message Semantics

The Read Concept Map Response is sent from the Terminology Repository to
the Terminology Consumer as a single ConceptMap, as defined at
<http://hl7.org/fhir/R4/conceptmap.html>

The “content-type” of the response will depend upon the requested
response format indicated by the Terminology Consumer.

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

If the Terminology Repository is unable to produce a response in the
requested format, it shall respond with an **HTTP 4xx** error indicating
that it was unable to fulfill the request. The Terminology Repository
may be capable of servicing requests for response formats not listed,
but shall, at minimum, be capable of producing XML and JSON encodings.

##### 3.100.4.4.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 3.100.5 Security Considerations

See the general Security Consideration in ITI TF-1: 51.5.

Add Section 3.101

## 3.101 Translate Code \[ITI-101\]

This section corresponds to transaction \[ITI-101\] of the IHE IT
Infrastructure Technical Framework. Transaction \[ITI-101\] is used by
the Terminology Consumer and Terminology Repository Actors.

### 3.101.1 Scope

This transaction is used by the Terminology Consumer that supports the
Translate Option to translate a given code from a ValueSet to a code
from another ValueSet based on a ConceptMap Resource. The request is
received by the Terminology Repository that supports the Translate
Option. The Terminology Repository processes the request and returns a
response of Parameters with the translated code.

### 3.101.2 Actor Roles

Table 3.101.2-1: Actor Roles

| **Actor:** | Terminology Consumer                                                                                                 |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| **Role:**  | Requests a translation of a code from one ValueSet to another based on a ConceptMap from the Terminology Repository. |
| **Actor:** | Terminology Repository                                                                                               |
| **Role:**  | Returns information for the translated code based on criteria provided by the Terminology Consumer.                  |

### 3.101.3 Referenced Standards

|          |                                                          |
| -------- | -------------------------------------------------------- |
| HL7 FHIR | HL7 FHIR standard R4 <http://hl7.org/fhir/R4/index.html> |

### 3.101.4 Messages

Figure 3.101.4-1: Interaction Diagram

#### 3.101.4.1 Translate Code Request Message

The Translate Code Request message is a FHIR $translate operation on the
ConceptMap Resource.

##### 3.101.4.1.1 Trigger Events

A Terminology Consumer triggers a Translate Code Request to a
Terminology Repository according to the business rules for the
translation. These business rules are outside the scope of this
transaction.

##### 3.101.4.1.2 Message Semantics

A Terminology Consumer initiates an $translate request using HTTP GET as
defined at <http://hl7.org/fhir/conceptmap-operation-translate.html> on
the ConceptMap Resource. The required input parameters are identified in
Table 3.101.4.1.2-1.

The URL for this operation is:
\[base\]/ConceptMap/$translate?\[parameter=value\]

Where \[base\] is the URL of Terminology Repository.

See ITI TF-2x: Appendix W for informative implementation material for
this transaction.

Table 3.101.4.1.2-1: Translate Code Message HTTP Input Parameters

<table>
<thead>
<tr class="header">
<th>Input Parameter Name</th>
<th>IHE Constraint</th>
<th>Search Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>url</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>uri</td>
<td>A canonical URL for a concept map. The server must know the concept map (e.g., it is defined explicitly in the server's concept maps, or it is defined implicitly by some code system known to the server.</td>
</tr>
<tr class="even">
<td><p>source</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>uri</td>
<td>Identifies the value set used when the concept (system/code pair) was chosen. May be a logical id, or an absolute or relative location. The source value set is an optional parameter because in some cases, the client cannot know what the source value set is. However, without a source value set, the server may be unable to safely identify an applicable concept map, and would return an error. For this reason, a source value set SHOULD always be provided. Note that servers may be able to identify an appropriate concept map without a source value set if there is a full mapping for the entire code system in the concept map, or by manual intervention.</td>
</tr>
<tr class="odd">
<td><p>code</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>code</td>
<td>The code that is to be translated. If a code is provided, a system must be provided.</td>
</tr>
<tr class="even">
<td><p>system</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>uri</td>
<td>The system for the code that is to be translated.</td>
</tr>
<tr class="odd">
<td><p>target</p>
<p>[0..1]</p></td>
<td>[1..1]</td>
<td>uri</td>
<td>Identifies the value set in which a translation is sought. May be a logical id, or an absolute or relative location. If there is no target specified, the server should return all known translations, along with their source.</td>
</tr>
<tr class="even">
<td><p>_format</p>
<p>[0..1]</p></td>
<td></td>
<td>mime-type</td>
<td>The requested format of the response from the mime-type value set. See ITI TF-2x: Appendix Z.6.</td>
</tr>
<tr class="odd">
<td><p>conceptMap</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the url parameter is used.</p></td>
<td>ConceptMap</td>
<td></td>
</tr>
<tr class="even">
<td><p>conceptMapVersion</p>
<p>[0..1]</p></td>
<td></td>
<td>string</td>
<td>The identifier that is used to identify a specific version of the concept map to be used for the translation. This is an arbitrary value managed by the concept map author and is not expected to be globally unique. For example, it might be a timestamp (e.g., yyyymmdd) if a managed version is not available.</td>
</tr>
<tr class="odd">
<td><p>version</p>
<p>[0..1]</p></td>
<td></td>
<td>string</td>
<td>The version of the system, if one was provided in the source data.</td>
</tr>
<tr class="even">
<td><p>coding</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the code+system parameters are used.</p></td>
<td>Coding</td>
<td></td>
</tr>
<tr class="odd">
<td><p>codeableConcept</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the code+system parameters are used.</p></td>
<td>CodeableConcept</td>
<td></td>
</tr>
<tr class="even">
<td><p>targetsystem</p>
<p>[0..1]</p></td>
<td><p>[0..0]</p>
<p>This parameter is not allowed when the target parameter is used.</p></td>
<td>uri</td>
<td></td>
</tr>
<tr class="odd">
<td><p>dependency</p>
<p>[0..*]</p></td>
<td></td>
<td></td>
<td>Another element that may help produce the correct mapping.</td>
</tr>
<tr class="even">
<td><p>dependency.element</p>
<p>[0..1]</p></td>
<td></td>
<td>uri</td>
<td>The element for this dependency.</td>
</tr>
<tr class="odd">
<td><p>dependency.concept</p>
<p>[0..1]</p></td>
<td></td>
<td>CodeableConcept</td>
<td>The value for this dependency.</td>
</tr>
<tr class="even">
<td><p>reverse</p>
<p>[0..1]</p></td>
<td></td>
<td>boolean</td>
<td>if this is true, then the operation should return all the codes that might be mapped to this code. This parameter reverses the meaning of the source and target parameters.</td>
</tr>
</tbody>
</table>

##### 3.101.4.1.3 Expected Actions

The Terminology Repository shall process the input parameters to
discover the value sets and code to be translated that matches the
parameters given and return a response as per Section 3.101.4.2 or an
OperationOutcome with an error message.

#### 3.101.4.2 Translate Code Response Message

##### 3.101.4.2.1 Trigger Events

The Terminology Repository found the translation details matching the
input parameters specified by the Terminology Consumer as a result of a
Translate Code Request.

##### 3.101.4.2.2 Message Semantics

See ITI TF-2x: Appendix Z.6 for more details on response format
handling. See ITI TF-2x: Appendix Z.7 for handling guidance for Access
Denied.

The response message is a FHIR Parameters Resource with properties of
the code set based on the out parameters defined at
<http://hl7.org/fhir/conceptmap-operation-translate.html> and reproduced
in Table 3.101.4.2.2-1.

Table 3.101.4.2.2-1: Translate Code Message HTTP Output Parameters

<table>
<thead>
<tr class="header">
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>result</p>
<p>[1..1]</p></td>
<td>boolean</td>
<td>True if the concept could be translated successfully. The value can only be true if at least one returned match has an equivalence which is not unmatched or disjoint.</td>
</tr>
<tr class="even">
<td><p>message</p>
<p>[0..1]</p></td>
<td>string</td>
<td>Error details, for display to a human. If this is provided when result = true, the message carries hints and warnings (e.g., a note that the matches could be improved by providing additional detail).</td>
</tr>
<tr class="odd">
<td><p>match</p>
<p>[0..*]</p></td>
<td></td>
<td>A concept in the target value set with an equivalence. Note that there may be multiple matches of equal or differing equivalence, and the matches may include equivalence values that mean that there is no match.</td>
</tr>
<tr class="even">
<td><p>match.equivalence</p>
<p>[0..1]</p></td>
<td>code</td>
<td>A code indicating the equivalence of the translation, using values from <a href="http://hl7.org/fhir/valueset-concept-map-equivalence.html">http://hl7.org/fhir/valueset-concept-map-equivalence.html</a></td>
</tr>
<tr class="odd">
<td><p>match.concept</p>
<p>[0..1]</p></td>
<td>Coding</td>
<td>The translation outcome. Note that this would never have userSelected = true, since the process of translations implies that the user is not selecting the code (and only the client could know differently)</td>
</tr>
<tr class="even">
<td><p>match.product</p>
<p>[0..*]</p></td>
<td></td>
<td>Another element that is the product of this mapping</td>
</tr>
<tr class="odd">
<td><p>match.product.element</p>
<p>[0..1]</p></td>
<td>uri</td>
<td>The element for this product</td>
</tr>
<tr class="even">
<td><p>match.product.concept</p>
<p>[0..1]</p></td>
<td>Coding</td>
<td>The value for this product</td>
</tr>
<tr class="odd">
<td><p>match.source</p>
<p>[0..1]</p></td>
<td>uri</td>
<td>The canonical reference to the concept map from which this mapping comes from</td>
</tr>
</tbody>
</table>

##### 3.101.4.2.3 Expected Actions

The Terminology Consumer has received the response and continues with
its workflow.

### 3.101.5 Security Considerations

See the general Security Consideration in ITI TF-1: 51.5.

1.  <http://ihe.net/Technical_Frameworks/>


---

// File: input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: LOINC = http://loinc.org
Alias: DCM = http://dicom.nema.org/resources/ontology/DCM

Alias: $BasicAuditEntityType = https://profiles.ihe.net/ITI/BALP/CodeSystem/BasicAuditEntityType


---

// File: input/fsh/audit-100.fsh

Profile:      AuditSvcmConceptMapRead
Parent:       https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Read
Id:           IHE.SVCM.Audit.ConceptMap.Read
Title:        "Audit Event for Query Concept Map Transaction by the Terminology Consumer and Repository for Read"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Query Concept Map Transaction happens
to read a ConceptMap, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti100 1..1
* subtype[iti100] = urn:ihe:event-type-code#ITI-100 "Query Concept Map"
* entity[data]
  * role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
  * what 1..1
  * what only Reference(ConceptMap)

Profile:      AuditSvcmConceptMapQuery
Parent:       https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Query
Id:           IHE.SVCM.Audit.ConceptMap.Query
Title:        "Audit Event for Query Concept Map Transaction by the Terminology Consumer and Repository for Query"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Query Concept Map Transaction happens
to query a ConceptMap, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti100 1..1
* subtype[iti100] = urn:ihe:event-type-code#ITI-100 "Query Concept Map"


---

// File: input/fsh/audit-101.fsh

Profile:      AuditSvcmConceptMapTranslate
Parent:       OperationEvent
Id:           IHE.SVCM.Audit.ConceptMap.Translate
Title:        "Audit Event for Translate Code Transaction by the Terminology Consumer and Repository"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Translate Code Transaction happens
to translate a code using a ConceptMap, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti101 1..1
* subtype[iti101] = urn:ihe:event-type-code#ITI-101 "Translate Code"


---

// File: input/fsh/audit-95.fsh

Profile:      AuditSvcmValueSetRead
Parent:       https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Read
Id:           IHE.SVCM.Audit.ValueSet.Read
Title:        "Audit Event for Query Value Set Transaction by the Terminology Consumer and Repository for Read"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Query Value Set Transaction happens
to read a ValueSet, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti95 1..1
* subtype[iti95] = urn:ihe:event-type-code#ITI-95 "Query Value Set"
* entity[data]
  * role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
  * what 1..1
  * what only Reference(ValueSet)

Profile:      AuditSvcmValueSetQuery
Parent:       https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Query
Id:           IHE.SVCM.Audit.ValueSet.Query
Title:        "Audit Event for Query Value Set Transaction by the Terminology Consumer and Repository for Query"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Query Value Set Transaction happens
to query a ValueSet, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti95 1..1
* subtype[iti95] = urn:ihe:event-type-code#ITI-95 "Query Value Set"


---

// File: input/fsh/audit-96.fsh

Profile:      AuditSvcmCodeSystemRead
Parent:       https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Read
Id:           IHE.SVCM.Audit.CodeSystem.Read
Title:        "Audit Event for Query Code System Transaction by the Terminology Consumer and Repository for Read"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Query Code System Transaction happens
to read a CodeSystem, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti96 1..1
* subtype[iti96] = urn:ihe:event-type-code#ITI-96 "Query Code System"
* entity[data]
  * role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
  * what 1..1
  * what only Reference(CodeSystem)

Profile:      AuditSvcmCodeSystemQuery
Parent:       https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Query
Id:           IHE.SVCM.Audit.CodeSystem.Query
Title:        "Audit Event for Query Code System Transaction by the Terminology Consumer and Repository for Query"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Query Code System Transaction happens
to query a CodeSystem, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti96 1..1
* subtype[iti96] = urn:ihe:event-type-code#ITI-96 "Query Code System"


---

// File: input/fsh/audit-97.fsh

Profile:      AuditSvcmValueSetExpand
Parent:       https://profiles.ihe.net/ITI/BALP/StructureDefinition/IHE.BasicAudit.Read
Id:           IHE.SVCM.Audit.ValueSet.Expand
Title:        "Audit Event for Expand Value Set Transaction by the Terminology Consumer and Repository"
Description:  """
Defines constraints on the AuditEvent Resource to record when an Expand Value Set Transaction happens
to expand a ValueSet, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti97 1..1
* subtype[iti97] = urn:ihe:event-type-code#ITI-97 "Expand Value Set"
* entity[data]
  * role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
  * what 1..1
  * what only Reference(ValueSet)

---

// File: input/fsh/audit-98.fsh

Profile:      AuditSvcmCodeSystemLookup
Parent:       OperationEvent
Id:           IHE.SVCM.Audit.CodeSystem.Lookup
Title:        "Audit Event for Lookup Code Transaction by the Terminology Consumer and Repository"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Lookup Code Transaction happens
to expand a CodeSystem, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti98 1..1
* subtype[iti98] = urn:ihe:event-type-code#ITI-98 "Lookup Code"


---

// File: input/fsh/audit-99.fsh

Profile:      AuditSvcmValidateCode
Parent:       OperationEvent
Id:           IHE.SVCM.Audit.Code.Validate
Title:        "Audit Event for Validate Code Transaction by the Terminology Consumer and Repository"
Description:  """
Defines constraints on the AuditEvent Resource to record when a Validate Code Transaction happens
to validate a code, as recorded by the Terminology Consumer and Registry.
"""
* subtype 2..*
* subtype contains iti99 1..1
* subtype[iti99] = urn:ihe:event-type-code#ITI-99 "Validate Code"


---

// File: input/fsh/audit-operation.fsh

Profile:        OperationEvent
Parent:         AuditEvent
Id:             IHE.SVCM.Audit.Operation
Title:          "Basic AuditEvent for a successful Operation"
Description:    """
A basic AuditEvent profile for when a RESTful Operation action happens successfully.

- Given a RESTful Operation is requested
- And the request is authorized
  - Authorization failures should follow [FHIR core Access Denied](http://hl7.org/fhir/security.html#AccessDenied)
- When successful
  - Note a failure AuditEvent may follow this pattern, but would not be a successful outcome and should have an OperationOutcome
  - Note success may result in zero or more results. The number of results and the content of the results are not recorded.
- Then the AuditEvent recorded will conform
  - The raw operation parameters is placed in the .contained element. The contained parameters enables preserving exactly what was requested, including possibly malicious patterns. This enables detection of malicious or malformed requests.

Note: the pattern defined in DICOM and IHE have the client is identified as the Source Role ID, and the server is identified as the Destination Role ID. This represents the query parameters are flowing from the client to the server. This may not be so obvious, as the data actually flows the opposite direction. This pattern is established and thus followed here.
"""
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
// JFM, I removed this slice as I couldn't figure out how to make it not throw warnings, and I am not sure it is really needed.
//* contained ^slicing.discriminator.type = #profile
//* contained ^slicing.discriminator.path = "$this"
//* contained ^slicing.rules = #open
//* contained 1..
//* contained contains parameters 1..1
//* contained[parameters] only Parameters
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains operation 1..1
* subtype[operation] = http://hl7.org/fhir/restful-interaction#operation "operation"
* action = #E
* recorded 1..1
// failures are recorded differently
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* agent ^slicing.discriminator.type = #pattern
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent 2..
* agent contains 
    client 1..1 and 
    server 1..1 and 
    user 0..1
* agent[client].type = http://dicom.nema.org/resources/ontology/DCM#110153 "Source Role ID"
* agent[client].who 1..1 // client identifier, May be an Device Resource, but more likely an identifier given the App identified in the OAuth token 
* agent[client].network 1..1 // as known by TCP connection information
* agent[client].media 0..0 
* agent[server].type = http://dicom.nema.org/resources/ontology/DCM#110152 "Destination Role ID"
* agent[server].who 1..1 // server identifier. May be a Device Resource, but likely just an identifier of the domain name
* agent[server].network 1..1 // as known by TCP connection information
* agent[server].media 0..0 
* agent[user].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* agent[user].who 1..1 // May be a Resource, but likely just an identifier from the OAuth token
* agent[user].requestor = true
* agent[user].role MS // if the OAuth token includes any roles, they are recorded here
* agent[user].name MS // might also be in .who.text but here is searchable
* agent[user].media 0..0 // media is physical storage media identification
* agent[user].network 0..0 // users are not network devices
* agent[user].purposeOfUse MS // if the OAuth token includes a PurposeOfUse it is recorded here
* source MS // what agent recorded the event. Likely the client or server but might be an intermediary
* entity ^slicing.discriminator.type = #pattern
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity 1..
* entity contains 
	transaction 0..1 and
    parameters 1..1
* entity[transaction].type = $BasicAuditEntityType#XrequestId
* entity[transaction].what.identifier.value 1..1
* entity[transaction].what.identifier.value ^short = "the value of X-Request-Id"
* entity[parameters].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[parameters].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[parameters].what 1..1
* entity[parameters].what only Reference(Parameters)
* entity[parameters].lifecycle 0..0 
* entity[parameters].securityLabel ^short = "may contain the security labels on the Bundle search set returned"
* entity[parameters].description 0..1 
* entity[parameters].query 0..0
* entity[parameters].detail 0..0


---

// File: input/fsh/capability.fsh

Instance: IHE.SVCM.TerminologyConsumer
InstanceOf: CapabilityStatement
Usage: #definition
* description = "CapabilityStatement for Terminology Consumer Actor in the IHE IT Infrastructure Technical Framework Supplement [SVCM](index.html)."
* name = "IHE_SVCM_TerminologyConsumer"
* title = "IHE SVCM Terminology Consumer"
* status = #active
* experimental = false
* date = "2022-03-31"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "SVCM Terminology Consumer will query for terminology resources."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or SMART-on-FHIR"
  * resource[+]
    * type = #ValueSet
    * supportedProfile = "https://profiles.ihe.net/ITI/SVCM/StructureDefinition/IHE.SVCM.ValueSet"
    * documentation = "For Query Value Set [ITI-95], Expand Value Set [ITI-97], Validate Code [ITI-99]"
    * interaction[+].code = #search-type
    * interaction[+].code = #read
    * searchParam[+]
      * name = "_id"
      * type = #token
    * searchParam[+]
      * name = "_lastUpdate"
      * type = #date
    * searchParam[+]
      * name = "status"
      * type = #token
    * searchParam[+]
      * name = "identifier"
      * type = #token
    * searchParam[+]
      * name = "name"
      * type = #string
    * searchParam[+]
      * name = "description"
      * type = #string
    * searchParam[+]
      * name = "reference"
      * type = #uri
    * searchParam[+]
      * name = "title"
      * type = #string
    * searchParam[+]
      * name = "url"
      * type = #uri
    * searchParam[+]
      * name = "version"
      * type = #token
    * operation[+]
      * name = "$expand"
      * definition = "http://hl7.org/fhir/OperationDefinition/ValueSet-expand"
      * documentation = """
`url` is a required parameter for this operation.
"""
    * operation[+]
      * name = "$validate-code"
      * definition = "http://hl7.org/fhir/OperationDefinition/ValueSet-validate-code"
      * documentation = """
`url`, `code`, and `system` are required parameters for this operation.
"""
  * resource[+]
    * type = #CodeSystem
    * supportedProfile = "https://profiles.ihe.net/ITI/SVCM/StructureDefinition/IHE.SVCM.CodeSystem"
    * documentation = "For Query Code System [ITI-96], Lookup Code [ITI-98], Validate Code [ITI-99]"
    * interaction[+].code = #search-type
    * interaction[+].code = #read
    * searchParam[+]
      * name = "_id"
      * type = #token
    * searchParam[+]
      * name = "_lastUpdate"
      * type = #date
    * searchParam[+]
      * name = "status"
      * type = #token
    * searchParam[+]
      * name = "identifier"
      * type = #token
    * searchParam[+]
      * name = "name"
      * type = #string
    * searchParam[+]
      * name = "description"
      * type = #string
    * searchParam[+]
      * name = "system"
      * type = #uri
    * searchParam[+]
      * name = "title"
      * type = #string
    * searchParam[+]
      * name = "url"
      * type = #uri
    * searchParam[+]
      * name = "version"
      * type = #token
    * operation[+]
      * name = "$lookup"
      * definition = "http://hl7.org/fhir/OperationDefinition/CodeSystem-lookup"
      * documentation = """
`code` and `system` are required parameters for this operation.
"""
    * operation[+]
      * name = "$validate-code"
      * definition = "http://hl7.org/fhir/OperationDefinition/CodeSystem-validate-code"
      * documentation = """
`url` and `code` are required parameters for this operation.
"""
  * resource[+]
    * type = #ConceptMap
    * supportedProfile = "https://profiles.ihe.net/ITI/SVCM/StructureDefinition/IHE.SVCM.ConceptMap"
    * documentation = "For Query Concept Map [ITI-100] and Translate Code [ITI-101]"
    * interaction[+].code = #search-type
    * interaction[+].code = #read
    * searchParam[+]
      * name = "_id"
      * type = #token
    * searchParam[+]
      * name = "_lastUpdate"
      * type = #date
    * searchParam[+]
      * name = "status"
      * type = #token
    * searchParam[+]
      * name = "identifier"
      * type = #token
    * searchParam[+]
      * name = "name"
      * type = #string
    * searchParam[+]
      * name = "description"
      * type = #string
    * searchParam[+]
      * name = "title"
      * type = #string
    * searchParam[+]
      * name = "url"
      * type = #uri
    * searchParam[+]
      * name = "version"
      * type = #token
    * searchParam[+]
      * name = "source-system"
      * type = #token
    * searchParam[+]
      * name = "source-uri"
      * type = #reference
    * searchParam[+]
      * name = "target-system"
      * type = #token
    * searchParam[+]
      * name = "target-uri"
      * type = #reference
    * operation[+]
      * name = "$translate"
      * definition = "http://hl7.org/fhir/OperationDefinition/ConceptMap-translate"
      * documentation = """
`url`, `source`, `code`, `system`, and `target` are required parameters for this operation.
"""
  * interaction.code = #search-system

Instance: IHE.SVCM.TerminologyRepository
InstanceOf: CapabilityStatement
Usage: #definition
* description = "CapabilityStatement for Terminology Repository Actor in the IHE IT Infrastructure Technical Framework Supplement [SVCM](index.html)."
* name = "IHE_SVCM_TerminologyRepository"
* title = "IHE SVCM Terminology Repository"
* status = #active
* experimental = false
* date = "2022-03-31"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "SVCM Terminology Repository will respond to queries for terminology resources."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or SMART-on-FHIR"
  * resource[+]
    * type = #ValueSet
    * supportedProfile = "https://profiles.ihe.net/ITI/SVCM/StructureDefinition/IHE.SVCM.ValueSet"
    * documentation = "For Query Value Set [ITI-95], Expand Value Set [ITI-97], Validate Code [ITI-99]"
    * interaction[+].code = #search-type
    * interaction[+].code = #read
    * searchParam[+]
      * name = "_id"
      * type = #token
    * searchParam[+]
      * name = "_lastUpdate"
      * type = #date
    * searchParam[+]
      * name = "status"
      * type = #token
    * searchParam[+]
      * name = "identifier"
      * type = #token
    * searchParam[+]
      * name = "name"
      * type = #string
    * searchParam[+]
      * name = "description"
      * type = #string
    * searchParam[+]
      * name = "reference"
      * type = #uri
    * searchParam[+]
      * name = "title"
      * type = #string
    * searchParam[+]
      * name = "url"
      * type = #uri
    * searchParam[+]
      * name = "version"
      * type = #token
    * operation[+]
      * name = "$expand"
      * definition = "http://hl7.org/fhir/OperationDefinition/ValueSet-expand"
      * documentation = """
`url` is a required parameter for this operation.
"""
    * operation[+]
      * name = "$validate-code"
      * definition = "http://hl7.org/fhir/OperationDefinition/ValueSet-validate-code"
      * documentation = """
`url`, `code`, and `system` are required parameters for this operation.
"""
  * resource[+]
    * type = #CodeSystem
    * supportedProfile = "https://profiles.ihe.net/ITI/SVCM/StructureDefinition/IHE.SVCM.CodeSystem"
    * documentation = "For Query Code System [ITI-96], Lookup Code [ITI-98], Validate Code [ITI-99]"
    * interaction[+].code = #search-type
    * interaction[+].code = #read
    * searchParam[+]
      * name = "_id"
      * type = #token
    * searchParam[+]
      * name = "_lastUpdate"
      * type = #date
    * searchParam[+]
      * name = "status"
      * type = #token
    * searchParam[+]
      * name = "identifier"
      * type = #token
    * searchParam[+]
      * name = "name"
      * type = #string
    * searchParam[+]
      * name = "description"
      * type = #string
    * searchParam[+]
      * name = "system"
      * type = #uri
    * searchParam[+]
      * name = "title"
      * type = #string
    * searchParam[+]
      * name = "url"
      * type = #uri
    * searchParam[+]
      * name = "version"
      * type = #token
    * operation[+]
      * name = "$lookup"
      * definition = "http://hl7.org/fhir/OperationDefinition/CodeSystem-lookup"
      * documentation = """
`code` and `system` are required parameters for this operation.
"""
    * operation[+]
      * name = "$validate-code"
      * definition = "http://hl7.org/fhir/OperationDefinition/CodeSystem-validate-code"
      * documentation = """
`url` and `code` are required parameters for this operation.
"""
  * resource[+]
    * type = #ConceptMap
    * supportedProfile = "https://profiles.ihe.net/ITI/SVCM/StructureDefinition/IHE.SVCM.ConceptMap"
    * documentation = "For Query Concept Map [ITI-100] and Translate Code [ITI-101]"
    * interaction[+].code = #search-type
    * interaction[+].code = #read
    * searchParam[+]
      * name = "_id"
      * type = #token
    * searchParam[+]
      * name = "_lastUpdate"
      * type = #date
    * searchParam[+]
      * name = "status"
      * type = #token
    * searchParam[+]
      * name = "identifier"
      * type = #token
    * searchParam[+]
      * name = "name"
      * type = #string
    * searchParam[+]
      * name = "description"
      * type = #string
    * searchParam[+]
      * name = "title"
      * type = #string
    * searchParam[+]
      * name = "url"
      * type = #uri
    * searchParam[+]
      * name = "version"
      * type = #token
    * searchParam[+]
      * name = "source-system"
      * type = #token
    * searchParam[+]
      * name = "source-uri"
      * type = #reference
    * searchParam[+]
      * name = "target-system"
      * type = #token
    * searchParam[+]
      * name = "target-uri"
      * type = #reference
    * operation[+]
      * name = "$translate"
      * definition = "http://hl7.org/fhir/OperationDefinition/ConceptMap-translate"
      * documentation = """
`url`, `source`, `code`, `system`, and `target` are required parameters for this operation.
"""
  * interaction.code = #search-system


---

// File: input/fsh/codesystem.fsh

Profile:      SVCMCodeSystem
Parent:       shareablecodesystem
Id:           IHE.SVCM.CodeSystem
Title:        "SVCM CodeSystem"
Description:  "A profile on the CodeSystem resource for SVCM."

* url 1..1
* url ^short = "For existing code systems with an id in other formats, the URL can be expressed as a URN, e.g., urn:oid:X.X.X. Otherwise the value shall be a URL."
* identifier ^short = "The identifier shall contain any business identifiers this code system is identified by."


---

// File: input/fsh/conceptmap.fsh

Profile:      SVCMConceptMap
Parent:       ConceptMap
Id:           IHE.SVCM.ConceptMap
Title:        "SVCM ConceptMap"
Description:  "A profile on the ConceptMap resource for SVCM."

* url 1..1
* url ^short = "For existing concept maps with an id in other formats, the URL can be expressed as a URN, e.g., urn:oid:X.X.X. Otherwise the value shall be a URL."
* identifier ^short = "The identifier shall contain any business identifiers this concept map is identified by."

---

// File: input/fsh/ex-audit-100.fsh

Instance:     ex-AuditSvcmConceptMapRead
InstanceOf:   AuditSvcmConceptMapRead
Title:        "Audit example for ITI-100 for Terminology Consumer for read."
Description:  "Audit example for a Terminology Consumer requesting a read on a ConceptMap for ITI-100."
Usage:        #example

* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
* subtype[iti100] = urn:ihe:event-type-code#ITI-100 "Query Concept Map"
//* action = http://hl7.org/fhir/audit-event-action#C
* recorded = 2022-04-13T19:33:45Z
//* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
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
* entity[data]
  * what = Reference(SVCMExampleConceptMap)

Instance:     ex-AuditSvcmConceptMapQuery
InstanceOf:   AuditSvcmConceptMapQuery
Title:        "Audit example for ITI-100 for Terminology Consumer for query."
Description:  "Audit example for a Terminology Consumer requesting a query on a ConceptMap for ITI-100."
Usage:        #example
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti100] = urn:ihe:event-type-code#ITI-100 "Query Concept Map"
//* action = http://hl7.org/fhir/audit-event-action#C
* recorded = 2022-04-13T19:33:45Z
//* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "http://server.example.com/fhir"
* agent[client].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who.display = "myMachine.example.org"
* agent[server].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[server].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "dXJsPWh0dHA6Ly9leGFtcGxlLm9yZy9zdmNtL2V4YW1wbGUtdmFsdWVzZXQK"

---

// File: input/fsh/ex-audit-101.fsh

Instance:     ex-AuditSvcmConceptMapTranslate
InstanceOf:   AuditSvcmConceptMapTranslate
Title:        "Audit example for ITI-101 for Terminology Consumer for translate code."
Description:  "Audit example for a Terminology Consumer requesting translate code for ITI-101."
Usage:        #example

* contained[+] = ex-SvcmTranslateCodeParameters
* subtype[operation] = http://hl7.org/fhir/restful-interaction#operation "operation"
* subtype[iti101] = urn:ihe:event-type-code#ITI-101 "Translate Code"
* recorded = 2022-04-13T19:33:45Z
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "http://server.example.com/fhir"
* agent[client].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who.display = "myMachine.example.org"
* agent[server].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[server].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[parameters]
  * what = Reference(ex-SvcmTranslateCodeParameters)

Instance:       ex-SvcmTranslateCodeParameters
InstanceOf:     Parameters
Usage:          #inline

* parameter[+]
  * name = "url"
  * valueUri = "http://example.org/svcm/example-conceptmap"
* parameter[+]
  * name = "source"
  * valueUri = "http://example.org/svcm/example-valueset"
* parameter[+]
  * name = "code"
  * valueCode = #example
* parameter[+]
  * name = "system"
  * valueUri = "http://example.org/svcm/example"
* parameter[+]
  * name = "target"
  * valueUri = "http://example.org/svcm/example2-valueset"

---

// File: input/fsh/ex-audit-95.fsh

Instance:     ex-AuditSvcmValueSetRead
InstanceOf:   AuditSvcmValueSetRead
Title:        "Audit example for ITI-95 for Terminology Consumer for read."
Description:  "Audit example for a Terminology Consumer requesting a read on a ValueSet for ITI-95."
Usage:        #example

* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
* subtype[iti95] = urn:ihe:event-type-code#ITI-95 "Query Value Set"
//* action = http://hl7.org/fhir/audit-event-action#C
* recorded = 2022-04-13T19:33:45Z
//* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
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
* entity[data]
  * what = Reference(SVCMExampleValueSet)

Instance:     ex-AuditSvcmValueSetQuery
InstanceOf:   AuditSvcmValueSetQuery
Title:        "Audit example for ITI-95 for Terminology Consumer for query."
Description:  "Audit example for a Terminology Consumer requesting a query on a ValueSet for ITI-95."
Usage:        #example
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti95] = urn:ihe:event-type-code#ITI-95 "Query Value Set"
//* action = http://hl7.org/fhir/audit-event-action#C
* recorded = 2022-04-13T19:33:45Z
//* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "http://server.example.com/fhir"
* agent[client].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who.display = "myMachine.example.org"
* agent[server].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[server].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "dXJsPWh0dHA6Ly9leGFtcGxlLm9yZy9zdmNtL2V4YW1wbGUtdmFsdWVzZXQK"

Instance:     ex-device
InstanceOf:   Device
Title:        "Device Example for SVCM"
Description:  """
Device Example for SVCM.
"""
Usage:        #example


---

// File: input/fsh/ex-audit-96.fsh

Instance:     ex-AuditSvcmCodeSystemRead
InstanceOf:   AuditSvcmCodeSystemRead
Title:        "Audit example for ITI-96 for Terminology Consumer for read."
Description:  "Audit example for a Terminology Consumer requesting a read on a CodeSystem for ITI-96."
Usage:        #example

* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
* subtype[iti96] = urn:ihe:event-type-code#ITI-96 "Query Code System"
//* action = http://hl7.org/fhir/audit-event-action#C
* recorded = 2022-04-13T19:33:45Z
//* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
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
* entity[data]
  * what = Reference(SVCMExampleCodeSystem)

Instance:     ex-AuditSvcmCodeSystemQuery
InstanceOf:   AuditSvcmCodeSystemQuery
Title:        "Audit example for ITI-96 for Terminology Consumer for query."
Description:  "Audit example for a Terminology Consumer requesting a query on a CodeSystem for ITI-96."
Usage:        #example
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti96] = urn:ihe:event-type-code#ITI-96 "Query Code System"
//* action = http://hl7.org/fhir/audit-event-action#C
* recorded = 2022-04-13T19:33:45Z
//* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "http://server.example.com/fhir"
* agent[client].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who.display = "myMachine.example.org"
* agent[server].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[server].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "dXJsPWh0dHA6Ly9leGFtcGxlLm9yZy9zdmNtL2V4YW1wbGUtdmFsdWVzZXQK"

---

// File: input/fsh/ex-audit-97.fsh

Instance:     ex-AuditSvcmValueSetExpand
InstanceOf:   AuditSvcmValueSetExpand
Title:        "Audit example for ITI-97 for Terminology Consumer for expand."
Description:  "Audit example for a Terminology Consumer requesting Expand ValueSet for ITI-97."
Usage:        #example

* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
* subtype[iti97] = urn:ihe:event-type-code#ITI-97 "Expand Value Set"
//* action = http://hl7.org/fhir/audit-event-action#C
* recorded = 2022-04-13T19:33:45Z
//* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
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
* entity[data]
  * what = Reference(SVCMExampleValueSet)

---

// File: input/fsh/ex-audit-98.fsh

Instance:     ex-AuditSvcmCodeSystemLookup
InstanceOf:   AuditSvcmCodeSystemLookup
Title:        "Audit example for ITI-98 for Terminology Consumer for lookup code."
Description:  "Audit example for a Terminology Consumer requesting lookup code for ITI-98."
Usage:        #example

* contained[+] = ex-SvcmCodeLookupParameters
* subtype[operation] = http://hl7.org/fhir/restful-interaction#operation "operation"
* subtype[iti98] = urn:ihe:event-type-code#ITI-98 "Lookup Code"
* recorded = 2022-04-13T19:33:45Z
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "http://server.example.com/fhir"
* agent[client].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who.display = "myMachine.example.org"
* agent[server].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[server].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[parameters]
  * what = Reference(ex-SvcmCodeLookupParameters)

Instance:       ex-SvcmCodeLookupParameters
InstanceOf:     Parameters
Usage:          #inline

* parameter[+]
  * name = "code"
  * valueCode = #example
* parameter[+]
  * name = "url"
  * valueUri = "http://example.org/svcm/example"

---

// File: input/fsh/ex-audit-99.fsh

Instance:     ex-AuditSvcmValidateVSCode
InstanceOf:   AuditSvcmValidateCode
Title:        "Audit example for ITI-99 for Terminology Consumer for validate code on a ValueSet."
Description:  "Audit example for a Terminology Consumer requesting validate code on a ValueSet for ITI-99."
Usage:        #example

* contained[+] = ex-SvcmValidateVSCodeParameters
* subtype[operation] = http://hl7.org/fhir/restful-interaction#operation "operation"
* subtype[iti99] = urn:ihe:event-type-code#ITI-99 "Validate Code"
* recorded = 2022-04-13T19:33:45Z
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "http://server.example.com/fhir"
* agent[client].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who.display = "myMachine.example.org"
* agent[server].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[server].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[parameters]
  * what = Reference(ex-SvcmValidateVSCodeParameters)

Instance:       ex-SvcmValidateVSCodeParameters
InstanceOf:     Parameters
Usage:          #inline

* parameter[+]
  * name = "url"
  * valueUri = "http://example.org/svcm/example-valueset"
* parameter[+]
  * name = "code"
  * valueCode = #example
* parameter[+]
  * name = "system"
  * valueUri = "http://example.org/svcm/example"

Instance:     ex-AuditSvcmValidateCSCode
InstanceOf:   AuditSvcmValidateCode
Title:        "Audit example for ITI-99 for Terminology Consumer for validate code on a CodeSystem."
Description:  "Audit example for a Terminology Consumer requesting validate code on a CodeSystem for ITI-99."
Usage:        #example

* contained[+] = ex-SvcmValidateCSCodeParameters
* subtype[operation] = http://hl7.org/fhir/restful-interaction#operation "operation"
* subtype[iti99] = urn:ihe:event-type-code#ITI-99 "Validate Code"
* recorded = 2022-04-13T19:33:45Z
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who = Reference(Device/ex-device)
* agent[client].network.address = "http://server.example.com/fhir"
* agent[client].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].requestor = false
* agent[server].who.display = "myMachine.example.org"
* agent[server].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[server].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[parameters]
  * what = Reference(ex-SvcmValidateCSCodeParameters)

Instance:       ex-SvcmValidateCSCodeParameters
InstanceOf:     Parameters
Usage:          #inline

* parameter[+]
  * name = "url"
  * valueUri = "http://example.org/svcm/example"
* parameter[+]
  * name = "code"
  * valueCode = #example

---

// File: input/fsh/valueset.fsh

Profile:      SVCMValueSet
Parent:       shareablevalueset
Id:           IHE.SVCM.ValueSet
Title:        "SVCM ValueSet"
Description:  "A profile on the ValueSet resource for SVCM."

* url 1..1
* url ^short = "For existing value sets with an id in other formats, the URL can be expressed as a URN, e.g., urn:oid:X.X.X. Otherwise the value shall be a URL."
* identifier ^short = "The identifier shall contain any business identifiers this value set is identified by."


---

// File: input/images-source/ActorsAndTransactions.plantuml

@startuml
hide footbox
skinparam linetype polyline
left to right direction

agent "Terminology Repository\n\n\n\n\n\n\n" as Server 
agent "Terminology Consumer\n\n\n\n\n\n\n" as Client

Server <-- Client : "Query Value Set [ITI-95]\nQuery Code System [ITI-96]\nExpand Value Set [ITI-97]\nLookup Code [ITI-98]"
Server -[#FFFFFF]- Client: "Validate Code [ITI-99]\nQuery Concept Map [ITI-100]\nTranslate Code [ITI-101]"
@enduml



---

// File: input/images-source/ITI-100-seq.plantuml

@startuml
hide footbox

participant "Terminology Consumer" as Client
participant "Terminology Repository" as Server
activate Client
activate Server
Client -> Server : Search Concept Map Request:\nHTTP GET <Base>/ConceptMap
Server -> Client : Search Concept Map Response:\nBundle
deactivate Client
deactivate Server

Client -[hidden]> Server
activate Client
activate Server
Client -> Server : Read Concept Map Request:\nHTTP GET <Base>/ConceptMap/<ResourceId>
Server -> Client : Read Concept Map Response:\nConceptMap
deactivate Client
deactivate Server
@enduml


---

// File: input/images-source/ITI-101-seq.plantuml

@startuml
hide footbox

participant "Terminology Consumer" as Client
participant "Terminology Repository" as Server
activate Client
activate Server
Client -> Server : Translate Code Request:\nHTTP GET <Base>/ConceptMap/$translate
Server -> Client : Translate Code Response:\nParameters
deactivate Client
deactivate Server
@enduml


---

// File: input/images-source/ITI-95-seq.plantuml

@startuml
hide footbox

participant "Terminology Consumer" as Client
participant "Terminology Repository" as Server
activate Client
activate Server
Client -> Server : Search Value Set Request:\nHTTP GET <Base>/ValueSet
Server -> Client : Search Value Set Response:\nBundle
deactivate Client
deactivate Server

Client -[hidden]> Server
activate Client
activate Server
Client -> Server : Read Value Set Request:\nHTTP GET <Base>/ValueSet/<ResourceId>
Server -> Client : Read Value Set Response:\nValueSet
deactivate Client
deactivate Server
@enduml


---

// File: input/images-source/ITI-96-seq.plantuml

@startuml
hide footbox

participant "Terminology Consumer" as Client
participant "Terminology Repository" as Server
activate Client
activate Server
Client -> Server : Search Code System Request:\nHTTP GET <Base>/CodeSystem
Server -> Client : Search Code System Response:\nBundle
deactivate Client
deactivate Server

Client -[hidden]> Server
activate Client
activate Server
Client -> Server : Read Code System Request:\nHTTP GET <Base>/CodeSystem/<ResourceId>
Server -> Client : Read Code System Response:\nCodeSystem
deactivate Client
deactivate Server
@enduml


---

// File: input/images-source/ITI-97-seq.plantuml

@startuml
hide footbox

participant "Terminology Consumer" as Client
participant "Terminology Repository" as Server
activate Client
activate Server
Client -> Server : Expand Value Set Request:\nHTTP GET <Base>/ValueSet/$expand
Server -> Client : Expand Value Set Response:\nValueSet
deactivate Client
deactivate Server
@enduml


---

// File: input/images-source/ITI-98-seq.plantuml

@startuml
hide footbox

participant "Terminology Consumer" as Client
participant "Terminology Repository" as Server
activate Client
activate Server
Client -> Server : Lookup Code Request:\nHTTP GET <Base>/CodeSystem/$lookup
Server -> Client : Lookup Code Response:\nParameters
deactivate Client
deactivate Server
@enduml


---

// File: input/images-source/ITI-99-seq.plantuml

@startuml
hide footbox

participant "Terminology Consumer" as Client
participant "Terminology Repository" as Server
activate Client
activate Server
Client -> Server : Validate ValueSet Code Request:\nHTTP GET <Base>/ValueSet/$validate-code
Server -> Client : Validate ValueSet Code Response:\nParameters
deactivate Client
deactivate Server

Client -[hidden]> Server
activate Client
activate Server
Client -> Server : Validate CodeSystem Code Request:\nHTTP GET <Base>/CodeSystem/$validate-code
Server -> Client : Validate CodeSystem Code Response:\nParameters
deactivate Client
deactivate Server
@enduml


---

// File: input/images-source/usecase1-processflow.plantuml

@startuml
hide footbox

participant "Terminology Repository" as Server 
participant "Terminology Consumer" as Client 

Server <- Client : "Query Value Set [ITI-95]"
Server <- Client : "Query Code System [ITI-96]"
Server <- Client : "Query Concept Map [ITI-100]"
@enduml

---

// File: input/images-source/usecase2-processflow.plantuml

@startuml
hide footbox

participant "Terminology Repository" as Server 
participant "Terminology Consumer" as Client 

Server <- Client : "Expand Value Set [ITI-97]"
@enduml

---

// File: input/images-source/usecase3-processflow.plantuml

@startuml
hide footbox

participant "Terminology Repository" as Server 
participant "Terminology Consumer" as Client 

Server <- Client : "Lookup Code [ITI-98]"
@enduml

---

// File: input/images-source/usecase4-processflow.plantuml

@startuml
hide footbox

participant "Terminology Repository" as Server 
participant "Terminology Consumer" as Client 

Server <- Client : "Validate Code [ITI-99]"
@enduml

---

// File: input/images-source/usecase5-processflow.plantuml

@startuml
hide footbox

participant "Terminology Repository" as Server 
participant "Terminology Consumer" as Client 

Server <- Client : "Translate Code [ITI-101]"
@enduml

---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/ITI.SVCM/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/ITI.SVCM/issues

---

// File: input/fsh/examples.fsh

Instance:     SVCMExampleCodeSystem
InstanceOf:   SVCMCodeSystem
Usage:          #example

* id = "svcm-example-codesystem"
* name = "SVCMExampleCodeSystem"
* version = "1.0.0"
* publisher = "Example Publisher"
* status = #active
* title = "SVCM Example CodeSystem"
* description = "An example CodeSystem for SVCM"
* caseSensitive = false
* content = #complete
* experimental = true
* url = "http://example.org/svcm/example"
* concept[+]
  * code = #example
  * display = "Example"
  * definition = "Example Concept"

Instance:     SVCMExampleCodeSystem2
InstanceOf:   SVCMCodeSystem
Usage:          #example

* id = "svcm-example-codesystem2"
* name = "SVCMExampleCodeSystem2"
* version = "1.0.0"
* publisher = "Example Publisher"
* status = #active
* title = "SVCM Example 2 CodeSystem"
* description = "An example CodeSystem for SVCM for mapping"
* caseSensitive = false
* content = #complete
* experimental = true
* url = "http://example.org/svcm/example2"
* concept[+]
  * code = #example
  * display = "Example"
  * definition = "Example Concept"

Instance:       SVCMExampleValueSet
InstanceOf:     SVCMValueSet
Usage:          #example

* id = "svcm-example-valueset"
* name = "SVCMExampleValueSet"
* version = "1.0.0"
* publisher = "Example Publisher"
* status = #active
* experimental = true
* title = "SVCM Example ValueSet"
* description = "An example ValueSet for SVCM"

* url = "http://example.org/svcm/example-valueset"
* compose.include.system = "http://example.org/svcm/example"

Instance:       SVCMExample2ValueSet
InstanceOf:     SVCMValueSet
Usage:          #example

* id = "svcm-example2-valueset"
* name = "SVCMExample2ValueSet"
* version = "1.0.0"
* publisher = "Example Publisher"
* status = #active
* experimental = true
* title = "SVCM Example 2 ValueSet"
* description = "An example 2 ValueSet for SVCM"

* url = "http://example.org/svcm/example2-valueset"
* compose.include.system = "http://example.org/svcm/example2"

Instance:       SVCMExampleConceptMap
InstanceOf:     SVCMConceptMap
Usage:          #example

* url = "http://example.org/svcm/example-conceptmap"
* id = "svcm-example-conceptmap"
* name = "SVCM_Example_ConceptMap"
* version = "1.0.0"
* publisher = "Example Publisher"
* title = "SVCM Example ConceptMap"
* status = #draft
* experimental = true
* description = "An example ConceptMap for SVCM"
* sourceCanonical = "http://example.org/svcm/example-valueset"
* targetCanonical = "http://example.org/svcm/example2-valueset"

* group[+]
  * source = "http://example.org/svcm/example"
  * target = "http://example.org/svcm/example2"

  * element[+]
    * code = #example
    * target[+]
      * code = #example
      * equivalence = #equivalent


---

