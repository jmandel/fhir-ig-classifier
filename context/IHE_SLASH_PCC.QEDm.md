File: repos/IHE_SLASH_PCC.QEDm/sushi-config.yaml

# sushi-config.yaml is documented https://fshschool.org/docs/sushi/configuration/
# ───────────────────────────────────────────────────
# the id should be lowercase made up of "ihe." + {domain acronym} + "." + {profile acronym/short-name}
# e.g. ihe.iti.mhds, or ihe.iti.basicaudit
id: ihe.pcc.qedm
canonical: https://profiles.ihe.net/PCC/QEDm
version: 3.0.1-current
name: IHE_PCC_QEDm
title: "Query for Existing Data for Mobile (QEDm)"
description: The Query for Existing Data for Mobile Profile (QEDm) supports dynamic queries for clinical data elements, including observations, allergy and intolerances, problems, diagnostic results, medications, immunizations, procedures, encounters and provenance by making the information widely available to other systems within and across enterprises to support provision of better clinical care. It defines a transaction used to query a list of specific data elements, persisted as FHIR resources.
releaseLabel: ci-build
#releaseLabel: Trial-Implementation
#releaseLabel: ballot
#date: 2024-12-12
status: active
publisher:
  - name: IHE Patient Care Coordination Technical Committee
  - url: https://www.ihe.net/ihe_domains/patient_care_coordination/
  - email: pcc@ihe.net
contact:
  - name: IHE Patient Care Coordination Technical Committee
    telecom:
      - system: email
        value: pcc@ihe.net
license:  CC-BY-4.0
fhirVersion: 4.0.1
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
#copyright: IHE http://www.ihe.net/Governance/#Intellectual_Property
copyrightYear: 2023+

dependencies:
  ihe.iti.pdqm: 
    id: ihepdqm
    uri: https://profiles.ihe.net/ITI/PDQm/ImplementationGuide/ihe.iti.pdqm
    version: 3.1.x
  ihe.iti.pixm: 
    id: ihepixm
    uri: https://profiles.ihe.net/ITI/PDQm/ImplementationGuide/ihe.iti.pixm
    version: 3.0.x
  ihe.iti.balp:
    id: iheitibasicaudit
    uri: https://profiles.ihe.net/ITI/BALP/ImplementationGuide/ihe.iti.balp
    version: 1.1.x
  ihe.iti.mxde:
    id: iheitimxde
    uri: https://profiles.ihe.net/ITI/mXDE/ImplementationGuide/ihe.iti.mxde
    version: 1.3.x
  ihe.pcc.odh:
    id: ihepccodh
    uri: https://profiles.ihe.net/PCC/ODH/ImplementationGuide/ihe.pcc.odh
    version: 1.0.x
  hl7.fhir.us.odh:
    id: hl7fhirusodh
    uri: http://hl7.org/fhir/us/odh/ImplementationGuide/hl7.fhir.us.odh
    version: 1.3.x
#  hl7.fhir.uv.ipa: 1.0.0

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
    title: Query for Existing Data for Mobile (QEDm) Home
    generation: markdown
  volume-1.md:
    title: 1:18 Query for Existing Data for Mobile (QEDm)
    generation: markdown
  PCC-44.md:
    title: 2:3.44 Mobile Query Existing Data [PCC-44]
    generation: markdown
  volume-4.md:
    title: Volume 4 - National Extensions
    generation: markdown
  testplan.md:
    title: "Test Plan"
    generation: markdown
  issues.md:
    title: Significant Changes and Issues
    generation: markdown
  other.md:
    title: Changes to Other IHE Specifications
    generation: markdown
  downloads.md:
    title: Download and Analysis
    generation: markdown
    
menu:
  QEDm Home: index.html
  Volume 1:
    Introduction: volume-1.html
    Actors and Transactions: volume-1.html#actors-and-transactions
    Actor Options: volume-1.html#actor-options
    Required Groupings: volume-1.html#required-groupings
    Overview: volume-1.html#overview
    Security Considerations: volume-1.html#security-considerations
    Cross-Profile Considerations: volume-1.html#other-grouping
  Volume 2:
    "Mobile Query Existing Data [PCC-44]": PCC-44.html
  Volume 4: volume-4.html
  Artifacts: artifacts.html
  Other:  
    Changes to Other IHE Specifications: other.html   
    Download and Analysis: downloads.html
    Test Plan: testplan.html 



---

// File: input/pagecontent/downloads.md


You can also download:

* [this entire guide](full-ig.zip),
* the definition resources in [json](definitions.json.zip), or [xml](definitions.xml.zip) format, or
* the example resources in [json](examples.json.zip), or [xml](examples.xml.zip) format.

The source code for this Implementation Guide can be found at [https://github.com/IHE/QEDm](https://github.com/IHE/QEDm).

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


The Query for Existing Data for Mobile Profile (QEDm) supports dynamic
queries for clinical data elements, including observations, allergy and
intolerances, problems, diagnostic results, medications, immunizations,
procedures, encounters and provenance by making the information widely
available to other systems within and across enterprises to support
provision of better clinical care. It defines a transaction used to
query a list of specific data elements, persisted as FHIR resources.

QEDm is functionally equivalent to the QED Profile (based on HL7v3), but
QEDm is better suited for implementation by application on mobile
devices or where the http/REST technology is preferred. The term
"mobile" must be understood in a wide sense: it refers not only to
applications on devices used for mobility that are resource- and
platform-constrained (e.g., tablets, smartphones, and embedded devices
including home-health devices), but also to larger systems deployed in
environments where interoperability requirements are simple, such as
pulling the latest summary for display.

The Query for Existing Data for Mobile (QEDm) Profile defines a
standardized interface to health (HTTP-based RESTful APIs) suited for
deployment of mobile applications on resource-constrained devices with
simple programming environment (e.g., JavaScript), simple protocol stack
(e.g., HTTP), and simple display functionality (e.g., HTML browser). The
goal is to limit required additional libraries that are often necessary
to process SOAP, MIME-Multipart, and MTOM/XOP Web Services.

The Query for Existing Data for Mobile Profile (QEDm) Profile uses the
already defined actors Clinical Data Consumer and Clinical Data Source,
for which it specifies options and a transaction to be used for querying
a list of specific data elements, persisted as FHIR resources. The
current version of the supplement doesn’t consider the reconciliation of the
fine-grained data elements gathered by the Clinical Data Source and/or
Clinical Data Consumer Actors. In order to perform reconciliation, a
grouping with RECON Reconciliation Agent SHOULD be considered.

The QEDm Profile MAY also be deployed in conjunction with document
sharing profiles such as the [MHD](https://profiles.ihe.net/ITI/MHD/index.html) or [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) Profiles. The Provenance
Option in QEDm is used in particular by the [mXDE Profile]({{site.data.fhir.iheitimxde}}/index.html) to address the
combined deployment of QEDm for access to fine-grained data elements with
links to source documents accessible through the [MHD](https://profiles.ihe.net/ITI/MHD/index.html) or [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) Profiles.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide
This guide is organized into the following sections:

1. Volume 1: Profiles
   1. [Introduction](volume-1.html)
   1. [Actors and Transactions](volume-1.html#actors-and-transactions)
   1. [Actor Options](volume-1.html#actor-options)
   1. [Actor Required Groupings](volume-1.html#required-groupings)
   1. [Overview](volume-1.html#overview)
   1. [Security Considerations](volume-1.html#security-considerations)
   1. [Cross Profile Considerations](volume-1.html#other-grouping)

2. Volume 2: Transaction Detail
   1. [Mobile Query for Existing Data \[PCC-44\]](PCC-44.html)

3. [Volume 4: National Extensions](volume-4.html)

4. Other
   1. [Changes to Other IHE Specification](other.html)
   2. [Downloads and Analysis](downloads.html)
   3. [Test Plan](testplan.html)

See also the [Table of Contents](toc.html) and the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words: SHALL, SHOULD, and MAY according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Must Support

The use of `mustSupport` in StructureDefinition profiles equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).

mustSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor SHALL populate the elements marked with MustSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit. 
The consuming actors SHOULD handle these elements being populated or being absent/empty. 
Note that sometimes mustSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.



---

// File: input/pagecontent/issues.md


## Significant Changes

### 3.0.0

- Added Search on Provenance to CapabilityStatements
- relaxed OperationOutcome detail on resouce not supported

### Significant Changes from Revision 2.3 (PDF) to 3.0.0-comment

- Converted to an IG - This resulted in significant rearrangement and rewriting to better leverage IG publication and use of html linkage
- Aligned AuditEvent with BALP
- Aligned with mXDE as the definer of the Document specific Provenance profile
  - Made the QEDm Provenance option to focus on general Provenance capability, leaving the Document specific Provenance to mXDE where it can be defined and further elaborated upon
- Unsupported modifiers must be rejected according to FHIR core
- Changed normative words to uppercase
- Added dependency on IHE-ODH (International) and HL7-ODH (US Real)
- Addressed minor issues reported in CPs: CP-PCC-0276, and CP-PCC-0277
- Have not aligned with IPA, but did add that to issue QEDm_012
- Test plan instructs on how this might be tested

## Issues

### Submit an Issue

IHE welcomes [New Issues](https://github.com/IHE/QEDm/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues can be submitted to the [PCC Public Comment form](https://www.ihe.net/PCC_Public_Comments/).

As issues are submitted they will be managed on the [QEDm GitHub Issues](https://github.com/IHE/QEDm/issues), where discussion and workarounds can be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. 
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues

These issues were known as part of the publication and IHE invites comments.

**QEDm_012:**

Currently QEDm does not constrain the FHIR Resources. This has
been deliberately done due to the limited experience (Trial
Implementation) with these FHIR Resources. There will be an effort
during the spring and summer of 2019 to add constraints on the FHIR
Resources. These constraints will be international, with support for
Volume 4 regional constraints. These constraints will be based on
original QED use-cases, original QED constraints, HL7 Implementation
Guide for US-Core, and regional experience. All are encouraged to
participate in this effort. Participate by joining the PCC technical
workgroup, and by interacting with the GitHub https://github.com/IHE/QEDm.

Should we align with HL7 IPA? At this point the IPA is not yet published in a form that we can profile?

### Closed Issues

These issues have been resolved and documented in the publication.

**QEDm_011: For the Medications Option, should we add split in two distinct options and add a specific query to the Medication Resource?**

- In the current specification, the Medication Option includes both queries for the medication request and the medication statement. It was discussed if those should each be a distinct option.
   - **Resolution:** In the trial implementation version of this profile, it was decided to keep those as a single option and consider implementers feedback if they need to be split.

- Current specification allows to retrieve the Medication Resource related to each MedicationRequest or MedicationStatement by performing a query by ‘patient’ for those resources and by supporting the "\_include" of the related Medication into the returned Bundle. It was discussed the need to include a specific query for the Medication Resource, along with query parameters for searching on Medication such as: code, ingredient, container, form…
   - **Resolution:** It was decided in the Trial implementation version to not include a specific query for the Medication Resource and consider implementer’s feedback if such a query was needed.
   
**QEDm_001: Agree on the list of requirements for QEDm by comparing with QED.**

&rarr; **Resolution:** 

|    | Requirements                                                               | QED                  | QEDm                                      |
|----|----------------------------------------------------------------------------|----------------------|-------------------------------------------|
| 1  | Support __listing__ of Problems, Medications, Allergies, Med-Allergies     | Yes                  | Yes, by using the FHIR Condition Resource |
| 2  | Supports __listing__ of rest of DE (Data-element) per full QED List        | Yes                  | Yes                                       |
| 3  | Supports __listing__ of additional DE per DAF (Access Framework) resources | No                   | Yes, almost                               |
| 4  | Supports access to DE across DAF/US Core defined resource                  | No                   | To be decided                             |
| 5  | Identifies source documents from where DE was extracted, if any.           | Yes, but not clearly | Yes                                       |
| 6  | Selects source documents for scope of query                                | No                   | Yes                                       |
| 7  | Flag in response that auto de-duplication has happen by clinical DE source | No                   | No (Closed Issue)                         |
| 8  | Shows specific DEs that have been auto de-duplicated                       | No? (not with RECON) | No, too complex                           |
{:.grid .table-striped}


**QEDm_002: Scope Listing of Data Elements**
Which is the best approach in specifying the QEDm query transaction and complementary provenance information? 
FHIR  allows essentially two approaches (querying strategies in FHIR STU3):
1. Querying ‘named’ Lists of resources (‘Operations’)
2. Querying directly the underlying resources

Considerations:
- Only the support for listing Resources has sense from a clinical point of view (see Issue QEDm:001 - requirements 1,2,3)
- FHIR List resource enumerates a flat collection of resources and provides features for managing the collection. While a particular List instance may represent a "snapshot", from a business process perspective the notion of "List" is dynamic – items are added and removed over time. The list resource references other resources. Lists may be curated and have specific business meaning (see [here](https://www.hl7.org/FHIR/list.html#queryfor) more comments).

&rarr; **Resolution:** Basic remains the goal and Argonauts doesn’t consider ‘curated lists’ (aka ‘named’ Lists of resources) as a basic function   start consider querying directly the underlying resources


**QEDm_003: Which are the QEDm query parameters to consider for accessing Data Elements (Resources)?**

&rarr; **Resolution:** try to replicate QED functionalities according to the query strategy adopted.


**QEDm_004: To define the core set of FHIR resources that align with QED and related QEDm’s options**

Resolution strategy:
 - consider a subset of FHIR Resources: the stable ones.
(keep in the Supplement the complete table to make evident all open issues about Resources until the final review: see "Classification of Information" section for more details)
 - consider the STU3 version of Resources

Comments:

Below is a comparison table between the current clinical information classification/options from QED, QEDm and FHIR Resources.

Alternative classifications from Argonauts and US Core projects/initiatives have been considered and discussed.

| QED Option                  | QEDm Option              | FHIR Resource/Profile                               |
|-----------------------------|--------------------------|-----------------------------------------------------|
| Vital Signs                 | Simple Observation       | Observation (Vital Signs are profiled Observations) |
| Diagnostic Results          | Diagnostic Results Option| DiagnosticReport                                    |
| Problems and Allergies      | Allergy and Intolerances | AllergyIntolerance                                  |
| Medications                 | Conditions               | Condition                                           |
| Immunizations               | Medications              | Medication; MedicationStatement; MedicationRequest  |
| Professional Services       | Immunizations            | Immunization                                        |
|                             | Procedures               | Procedures                                          |
|                             | Encounters               | Encounter                                           |
|                             | Provenance               | Provenance                                          |
|                             |                          | Goals &rarr; not considered                         |
|                             |                          | Assessment and Plan &rarr; not considered           |
|                             |                          | CareTeam &rarr; not considered                      |
|                             |                          | Practitioner &rarr; not considered                  |
|                             |                          | Organization &rarr; not considered                  |
|                             |                          | Location &rarr; not considered                  |
{:.grid .table-striped}

&rarr; **Resolution:** Only a core-set of FHIR resources will be considered, consequently only a limited number of options are going to be specified. See the table above.

**QEDm_005: Managing reconciliation of Data Elements**

How to record reconciliation performed on the FHIR resources returned by the QEDm query transaction?

Considerations:  
- Reconciliation of clinical data without a manual intervention has no sense. 
- An automatic algorithm could work well if limited to the data deduplication.

Consequences:
- a 'manual reconciliation' can be conceived at the Clinical Data Consumer side and it’s necessary when this actor is going to perform multiple query for gathering and merging information from different sources the reconciliation is obtained by considering a Reconciliation Agent grouped with it.
- an ‘automatic deduplication’ can be conceived as option for the Clinical Data Source*

Reconciliation/deduplication specific content is already defined by RECON. The results of reconciliation are noted in the FHIR List resource by using the FHIR Provenance resource. See the following two sections:
- PCC Vol.3: 6.6.A - FHIR Reconciled List
- PCC Vol.3: 6.6.B - FHIR Provenance Constraints

BUT:
- RECON specifications must be updated to FHIR STU3

- See also considerations about multi-stage import/reconciliation supported by the Provenance Resource: [http://hl7.org/fhir/2017Jan/provenance.html#6.2.4.6](http://hl7.org/fhir/2017Jan/provenance.html)

&rarr; **Resolution:** too complex, no reconciliation and no deduplication will be considered by QEDm (no automatic operations specified by RECON Profile)

**QEDm_006: New name for the \[PCC-44\] transaction: "Mobile Query Existing Data"?**

In order to appear more generic, it’s proposed to use the name "Mobile Query Existing Data" for the transaction \[PCC-44\] to be aligned with the QED \[PCC-2\] "Query Existing Data" transaction, just like done with PIX/PIXm and PDQ/PDQm.>

&rarr; **Resolution:** ok to rename.


**QEDm_007:How to consider the "Multi-Patient Query Option" in the query transaction?**

&rarr; **Resolution:** ok to remove this option from this year scope

**QEDm_008: Consistency – How to identify Document Sources of Data Elements**

Strategy:
Consider the FHIR Provenance resource as used in PCC-RECON: "When the Data Element comes from a Document, the ID of the document is used as the source. When the Data Element is the result of a query (such as QED), the query ID is the source.

When the data comes directly from a system, provenance may not exist because there is not a document source ID from the system. The solution is to start broad and add the "provenance" Option (source of the data). …"

&rarr; **Resolution:**

- The original Document(s) reference(s) can be supported by the Provenance.entity: http://hl7.org/fhir/STU3/provenance.html (in general each Provenance object can link N ‘target’ Resources to M ‘entity’ Documents)

- To consider also the available FHIR specifications on FHIR & XDS Documents https://www.hl7.org/FHIR/STU3/usecases.html#xds

   - specifically, the DocumentReference FHIR resource: https://www.hl7.org/FHIR/STU3/documentreference.html

- Additional considerations on query for including Provenance:

   - FHIR query on "resource" (e.g., medication), add "\_revinclude" with "Provenance". GET \[base\]/MedicationRequest?\_revinclude=Provenance:target&criteria...Always on the GET by client and server must support.

   - For list FHIR is an "operation" (not RESTful GET). Is it worth exposing "list operations" because may be perfectly reconciled.

   - Use Doc Resource versus and/or provenance resource.

**QEDm_009: QED retirement**

&rarr; **Resolution:** it may be considered, but the timing is independent of QEDm completion

**QEDm_010: Which is the best FHIR Implementation Guide to refer?**

- Should we move to US-Core? Are they other countries/international efforts?

- Alternative is Argonaut (modified, by removing a few US specific).

Considerations:

- STU 3 ‘final’ has been released and the US Core IG has been aligned to STU3

&rarr; **Resolution:** No need to base the whole profile on US Core specific constrains. US Core resource specific profiling or other profiling can be referenced only if/when necessary.

**QEDm_13** ODH

Should future releases of the HL7 FHIR profile for ODH be modified as
International Realm, this profile will be updated to point to those
updated profiles. The scope of the modifications in the IHE ODH profiles
is to reference ‘Patient’ instead of US Core Patient, and to reference
the 3 US-Centric value sets with binding of ‘example’ rather than
‘required’:

- Occupation
- Industry
- Supervisory Level or Pay Grade

Occupation, Industry, and Work Classification value sets may vary by
jurisdiction. The US CDC census valuesets are provided as an ‘example
binding’. There is no apparent specification for an expression of
‘concept domain’, which is leveraged by multiple IHE QRPH and PCC
profiles as a method to allow for jurisdictions to specify other value
sets.

---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE profiles or the General Introduction appendices and is not a part of the Query for Existing Data for Mobile (QEDm) Profile. The content here will be incorporated into the target narrative at a future time, usually when QEDm Profile goes normative.
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
| Mobile Query for Existing Data [PCC-44] | This transaction uses RESTful API to query clinical data elements and retrieve them as sets of FHIR resources. |
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

// File: input/pagecontent/PCC-44.md

This section corresponds to transaction [PCC-44] of the IHE Technical Framework. Transaction \[PCC-44\] is used by the Clinical Data Consumer and Clinical Data Source Actors.

### 2:3.44.1 Scope

The Mobile Query Existing Data transaction is used to query for fine
grained clinical data elements that satisfy a set of parameters by using
the FHIR framework. The result of the query is a FHIR Bundle containing
FHIR clinical data Resources that match the query parameters.

The QEDm Profile assumes that categories and codes referenced by these
FHIR Resources need to be defined at the time of deployment. The
specification of these FHIR Resources make recommendations on categories
and codes that SHOULD be considered.

### 2:3.44.2 Actor Roles

**Table 2:3.44.2-1: Actor Roles**

| Actor                                 | Role                                              |
|---------------------------------------|---------------------------------------------------|
| [Clinical Data Consumer](volume-1.html#client)    | Queries the Clinical Data Source for clinical data content. Clinical content requested by the Clinical Data Consumer depends on query options supported by the consumer. |
| [Clinical Data Source](volume-1.html#server) | Responds to query, supplying the FHIR Resources representing the clinical data content that match the search criteria provided by the Clinical Data Consumer. |
{:.grid .table-striped}

### 2:3.44.3 Referenced Standards

- [HL7 FHIR standard]({{site.data.fhir.path}})

### 2:3.44.4 Messages

<div>
{%include PCC-44-seq.svg%}
</div>
<br clear="all">

**Figure 2:3.44.4-1: Interaction Diagram**

#### 2:3.44.4.1 Mobile Query Existing Data Request message
This message uses the HTTP GET method parameterized query to retrieve
FHIR Resources representing clinical data matching search parameters in
the GET request.

QEDm does not mandate any additional extended or custom method.

##### 2:3.44.4.1.1 Trigger Events

When the Clinical Data Consumer needs to discover clinical data
Resources matching various search parameters it issues a Mobile Query
Existing Data message.

##### 2:3.44.4.1.2 Message Semantics

The Clinical Data Consumer executes an HTTP GET against the proper
Clinical Data Source’s QEDm URL.

The search target follows the FHIR http specification [{{site.data.fhir.path}}http.html]({{site.data.fhir.path}}http.html), addressing the proper FHIR
Resource type, according to the supported query options (see Section
2:3.44.4.1.2.1). The syntax of the FHIR query is:

```
GET [base]/[Resource-type]{?[parameters]}
```

with the following constraints:

- The `[base]` represents the Service Base URL
- The `[Resource-type]` represents the name of the FHIR Resource to consider (each option can involve one or more Resources), as specified in Section 3.44.4.1.2.1
- The `[parameters]` represents a series of encoded name-value pairs representing the filter for the query, as specified in Section 3.44.4.1.2.1, as well as control parameters to modify the behavior of the Clinical Data Source such as response format, or pagination. See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format.

###### 2:3.44.4.1.2.1 Query Search Parameters

All query parameter values SHALL be appropriately encoded per RFC3986
"percent" encoding rules. Note that percent encoding does restrict the
character set to a subset of ASCII characters which is used for encoding
all other characters used in the URL.

The FHIR Resource type or types supported by the Clinical Data Consumer
and Clinical Data Source are determined by a QEDm named option. An actor
claiming named option is required to support the FHIR Resource types
listed below. According to the supported option, the Clinical Data
Consumer MAY query and the Clinical Data Source SHALL be capable of
responding on the Resource types specified in Table 2:3.44.4.1.2.1-1 by processing
all the search parameters defined in the following sections.

The Clinical Data Source MAY choose to support additional query
parameters beyond the subset defined by the profiling listed below, if
done according to the core FHIR specification. Such additional
parameters are considered out of scope for this transaction. The
Clinical Data Source MAY ignore any additional parameter not specified
in this transaction. See [{{site.data.fhir.path}}search.html#errors]({{site.data.fhir.path}}search.html#errors).

Sections 2:3.44.4.1.2.1.1 through 2:3.44.4.1.2.1.10 detail the Resource and search
parameters combinations to be supported for each of the FHIR Resources
designated by a named option.

See [ITI TF-2: Appendix Z.10 Profiling conventions for constraints on FHIR](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir) for a description of terms used in the Optionality columns.

###### 2:3.44.4.1.2.1.1 Simple Observations Option Search Parameters

When supporting the Simple Observations Option, the Clinical Data
Consumer supplies, and the Clinical Data Source SHALL support, the
FHIR [Observation]({{site.data.fhir.path}}observation.html) Resource
and be at least capable
of processing the search parameters combinations as specified by the
following table, according to the related optionality.

```
GET [base]/Observation?[parameters]
```

<tablecaption><b>Table 2:3.44.4.1.2.1.1-1: Simple Observations Option Search Parameters</b></tablecaption>

| Parameters                       | Type                     | Modifiers                          | Clinical Data Source | Clinical Data Consumer |
|----------------------------------|--------------------------|------------------------------------|----------------------|------------------------|
| patient + category               | reference + token        |                                    | R                    | O                      |
| patient + category + code        | reference + token        |                                    | R                    | O                      |
| patient + category + date        | reference + token + date | date modifiers `ge`,`le`,`gt`,`lt` | R                    | O                      |
| patient + category + code + date | reference + token + date | date modifiers `ge`,`le`,`gt`,`lt` | O                    | O                      |
{:.grid .table-striped}

*Note 1: The Clinical Data Consumer SHALL support at least one of the search parameters combinations.*

###### 2:3.44.4.1.2.1.2 Allergies and Intolerances Option Search Parameters

When supporting the Allergies and Intolerances Option, the Clinical Data
Consumer SHALL supply and the Clinical Data Source SHALL support the
FHIR [AllergyIntolerance]({{site.data.fhir.path}}allergyintolerance.html) Resource
and be capable of
processing the search parameter as specified by the following table.

```
GET [base]/AllergyIntolerance?[parameters]
```

**Table 2:3.44.4.1.2.1.2-1: Allergies and Intolerances Option Search Parameters**

| Parameters | Type      | Clinical Data Source | Clinical Data Consumer |
|------------|-----------|----------------------|------------------------|
| patient    | reference | R                    | R                      |
{:.grid .table-striped}

###### 2:3.44.4.1.2.1.3 Conditions Option Search Parameters

The intended use of FHIR Condition resource includes recording of detailed information about conditions, problems or diagnoses recognized by a clinician.
When supporting the Conditions Option, the Clinical Data Consumer
supplies and the Clinical Data Source SHALL support the
FHIR [Condition]({{site.data.fhir.path}}condition.html) Resource
and be capable of processing all
the search parameters combinations as specified by the following table,
according to the related optionality.

```
GET [base]/Condition?[parameters]
```

**Table 2:3.44.4.1.2.1.3-1: Conditions Option Search Parameters**

| Parameters                | Type              | Clinical Data Source | Clinical Data Consumer |
|---------------------------|-------------------|----------------------|------------------------|
| patient                   | reference         | R                    | O                      |
| patient + category        | reference + token | O                    | O                      |
| patient + clinical-status | reference + token | O                    | O                      |
{:.grid .table-striped}

*Note 1: The Clinical Data Consumer SHALL support at least one of the search parameters combinations*

###### 2:3.44.4.1.2.1.4 Diagnostic Reports Option Search Parameters

When supporting the Diagnostic Reports Option, the Clinical Data
Consumer supplies and the Clinical Data Source SHALL support the
FHIR [DiagnosticReport]({{site.data.fhir.path}}diagnosticreport.html) Resource
and be capable of
processing all the search parameters combinations as specified by the
following table, according to the related optionality.

```
GET [base]/DiagnosticReport?[parameters]
```

Table 2:3.44.4.1.2.1.4-1: Diagnostic Reports Option Search Parameters

| Parameters                       | Type                     | Modifiers                          | Clinical Data Source | Clinical Data Consumer |
|----------------------------------|--------------------------|------------------------------------|----------------------|------------------------|
| patient + category               | reference + token        |                                    | R                    | O                      |
| patient + category + code        | reference + token        |                                    | R                    | O                      |
| patient + category + date        | reference + token + date | date modifiers `ge`,`le`,`gt`,`lt` | R                    | O                      |
| patient + category + code + date | reference + token + date | date modifiers `ge`,`le`,`gt`,`lt` | O                    | O                      |
{:.grid .table-striped}

*Note 1: The Clinical Data Consumer SHALL support at least one of the search parameters combinations*

###### 2:3.44.4.1.2.1.5 Medications Option Search Parameters

When supporting the Medications Option, the Clinical Data Consumer SHALL
supply and the Clinical Data Source SHALL support the
FHIR [Medication]({{site.data.fhir.path}}medication.html) Resource,
FHIR [MedicationStatement]({{site.data.fhir.path}}medicationstatement.html) Resource, and
FHIR [MedicationRequest]({{site.data.fhir.path}}medicationrequest.html) Resource,
and be capable of processing the
search parameters as specified by the following tables.

The `MedicationStatement` and `MedicationRequest` resources can represent a
medication, using an external reference to a `Medication` resource. If an
external `Medication` Resource is used in a `MedicationStatement` or a
`MedicationRequest`, it can be retrieved by using the `_include` search
parameter.

There are no search parameters required for the `Medication` Resource.

For MedicationStatement:

```
GET [base]/MedicationStatement?[parameters]
```

**Table 2:3.44.4.1.2.1.5-1: MedicationStatement Search Parameters**

| Parameters | Type      | `_include`                     | Clinical Data Source | Clinical Data Consumer |
|------------|-----------|--------------------------------|----------------------|------------------------|
| patient    | reference | MedicationStatement:medication | R                    | R                      |
{:.grid .table-striped}

For MedicationRequest:

```
GET [base]/MedicationRequest?[parameters]
```

**Table 3.44.4.1.2.1.5-2: MedicationRequest Search Parameters**

| Parameters | Type      | `_include`                     | Clinical Data Source | Clinical Data Consumer |
|------------|-----------|--------------------------------|----------------------|------------------------|
| patient    | reference | MedicationRequest:medication   | R                    | R                      |
{:.grid .table-striped}

###### 2:3.44.4.1.2.1.6 Immunizations Option Search Parameters

When supporting the Immunizations Option, the Clinical Data Consumer MAY
supply and the Clinical Data Source SHALL support the
FHIR [Immunization]({{site.data.fhir.path}}immunization.html) Resource
and be capable of processing the
search parameter as specified by the following table.

```
GET [base]/Immunization?[parameters]
```

**Table 2:3.44.4.1.2.1.6-1: Immunizations Option Search Parameters**

| Parameter | Type      | Clinical Data Source | Clinical Data Consumer |
|-----------|-----------|----------------------|------------------------|
| patient   | reference | R                    | R                      |
{:.grid .table-striped}

###### 2:3.44.4.1.2.1.7 Procedures Option Search Parameters

When supporting the Procedures Option, the Clinical Data Consumer
supplies and the Clinical Data Source SHALL support the
FHIR [Procedure]({{site.data.fhir.path}}procedure.html) Resource
and be capable of processing all
the search parameters as specified by the following table, according to
the related optionality.

```
GET [base]/Procedure?[parameters]
```

**Table 2:3.44.4.1.2.1.7-1: Procedures Option Search Parameters**

| Parameter      | Type             | Modifiers                          | Clinical Data Source | Clinical Data Consumer |
|----------------|------------------|------------------------------------|----------------------|------------------------|
| patient        | reference        |                                    | R                    | O                      |
| patient + date | reference + date | date modifiers `ge`,`le`,`gt`,`lt` | R                    | O                      |
{:.grid .table-striped}

*Note 1: The Clinical Data Consumer SHALL support at least one of the search parameters combinations*

###### 2:3.44.4.1.2.1.8 Encounters Option Search Parameters

When supporting the Encounters Option, the Clinical Data Consumer
supplies and the Clinical Data Source SHALL support the
FHIR [Encounter]({{site.data.fhir.path}}encounter.html) Resource
and be capable of processing all
the search parameters as specified by the following table, according to
the related optionality.

```
GET [base]/Encounter?[parameters]
```

**Table 2:3.44.4.1.2.1.8-1: Encounters Option Search Parameters**

| Parameter      | Type             | Modifiers                          | Clinical Data Source | Clinical Data Consumer |
|----------------|------------------|------------------------------------|----------------------|------------------------|
| patient        | reference        |                                    | R                    | O                      |
| patient + date | reference + date | date modifiers `ge`,`le`,`gt`,`lt` | R                    | O                      |
{:.grid .table-striped}

*Note 1: The Clinical Data Consumer SHALL support at least one of the search parameters combinations*

###### 2:3.44.4.1.2.1.9 Provenance Option Search Parameters

Clinical Data Consumer supporting this option is enabled to fetch a
certain FHIR Resource(s) together with any reference to the original
Document from which the Resource(s) has been derived. The FHIR
Provenance Resource containing those references can be included by
providing the `_revinclude` parameter in the query.

When supporting the Provenance Option, the Clinical Data
Consumer SHALL supply and the Clinical Data Source SHALL be capable of
processing the `_revinclude` parameter, as defined at [FHIR Search include]({{site.data.fhir.path}}search.html#include)

```
GET [base]/[Resource-type]?_revinclude=Provenance:target&criteria
```

When supporting the Provenance Option, the Clinical Data Consumer
supplies and the Clinical Data Source SHALL support the
FHIR [Provenance]({{site.data.fhir.path}}provenance.html) Resource
and be capable of processing all
the search parameters as specified by the following table, according to
the related optionality.

```
GET [base]/Provenance?[parameters]
```

**Table 2:3.44.4.1.2.1.9-1: Provenance Option Search Parameters**

| Parameter      | Type             | Modifiers                          | Clinical Data Source | Clinical Data Consumer |
|----------------|------------------|------------------------------------|----------------------|------------------------|
| target         | reference        |                                    | R                    | O                      |
{:.grid .table-striped}

See Section [2:3.44.4.2.2.1 for the specification about the Provenance](PCC-44.html#23444221-provenance-option)
content.

###### 2:3.44.4.1.2.1.10 Occupational Data for Health Option Search Parameters

When supporting the Occupational Data for Health (ODH) Option, the Clinical
Data Consumer SHALL supply and the Clinical Data Source SHALL be capable
of supporting `Observation` Resources compliant with
the [IHE FHIR Profile: Occupational Data for Health (ODH) - International]({{site.data.fhir.ihepccodh}}).

###### 2:3.44.4.1.2.2 Parameter Modifiers

The Clinical Data Source SHALL support the ":exact" parameter modifier
on all query parameters of type string. When supplied by the Clinical
Data Consumer, the ":exact" parameter modifier instructs the Clinical
Data Source that exact matching SHALL be performed.

The Clinical Data Consumer SHOULD not use any additional parameter modifiers listed in the FHIR standard,
which are considered out of scope in the context of this transaction.

The Clinical Data Source SHALL reject any search request that contains a search parameter with an [unsupported modifier]({{site.data.fhir.path}}search.html#modifiers).

###### 2:3.44.4.1.2.3 Populating Expected Response Format

The FHIR standard provides encodings for responses as either XML or
JSON. The Clinical Data Source SHALL support both message encodings,
whilst the Clinical Data Consumer SHALL support one and MAY support
both.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for details.

##### 2:3.44.4.1.3 Expected Actions

The Clinical Data Source SHALL process the query to discover the
clinical data FHIR Resource entries (the fine-grained data elements)
that match the search parameters given and SHALL use a FHIR Bundle
resource to collect the matching entries to be returned.

The Clinical Data Source SHALL respond with a Mobile Query Existing Data
Response synchronously (i.e., on the same connection as was used to
initiate the request).

When the Provenance Option is specified, the response FHIR
Bundle SHALL also contain FHIR Provenance Resource entries that provide
consistency of the returned fine-grained data elements with the
coarse-grained data origin (e.g., Document). 
See Section [3.44.4.2.2.1 for the specification about the Provenance content](PCC-44.html#23444221-provenance-option). 
If the fine-grained
data element has not been extracted from a document, the Provenance
Resource MAY be absent.

See [ITI TF-2: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format
handling. See [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for handling guidance for Access
Denied.

#### 3.44.4.2 Mobile Query Existing Data Response message

The Clinical Data Source returns an HTTP Status code appropriate to the
processing as well as a list of the matching clinical data FHIR
Resources.

##### 3.44.4.2.1 Trigger Events

The Clinical Data Source completed processing of the Mobile Query
Existing Data Request message.

##### 3.44.4.2.2 Message Semantics

Based on the query results, the Clinical Data Source will either return
an error or success. The guidance on handling Access Denied related to
use of 200, 403 and 404 can be found in [ITI TF-2: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results).

When the Clinical Data Source needs to report an error, it SHALL use
HTTP error response codes and SHOULD include a FHIR OperationOutcome
with more details on the failure. See FHIR
<{{site.data.fhir.path}}http.html> and
<{{site.data.fhir.path}}operationoutcome.html>.

In particular, if a Data Source receives a Mobile Query Existing Data
transaction for a resource related to a QEDm Option not supported, it
SHALL return an OperationOutcome.issue.code valued as: ‘not-supported’
and SHOULD set OperationOutcome.issue.details valued as: MSG_NO_MATCH No
Resource found matching the query "%s".

If the Mobile Query Existing Data request message is processed
successfully, whether or not clinical data Resources are found, the HTTP
status code SHALL be 200.

The Mobile Query Existing Data Response message SHALL be a FHIR Bundle
Resource containing zero or more clinical data Resources plus optional
Provenance Resources (see Section [2:3.44.4.2.2.1](PCC-44.html#23444221-provenance-option)). If the Clinical Data
Source is sending warnings, the Bundle Resource SHALL also contain an
OperationOutcome Resource that contains those warnings.

The response SHALL adhere to the FHIR Bundle constraints specified in
[ITI TF-2: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles).

See [an example of a search set bundle](Bundle-ex-search.html).

###### 2:3.44.4.2.2.1 Provenance Option

A Clinical Data Source that supports the Provenance Option
may be grouped with the [Mobile Cross-Enterprise Document Data Element Extraction (mXDE)]({{site.data.fhir.iheitimxde}}/index.html) Data Element Extractor [Actor]({{site.data.fhir.iheitimxde}}/volume-1.html#145111-data-element-extractor) and thus will expose [mXDE defined Provenance]({{site.data.fhir.iheitimxde}}/StructureDefinition-IHE.ITI.mXDE.Provenance.html) resources.

The Clinical Data Source MAY return Provenance Resources used for other
purposes than the one defined here. These would not have the indicated
`Provenance.policy` of `urn:ihe:iti:mxde:2023:document-provenance-policy`.

###### 2:3.44.4.2.2.2 Resource Bundling

Resource Bundling SHALL comply with the guidelines in [ITI TF-2: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles).

The Clinical Data Source SHALL include all resources to be returned as a
resource. This means that the query SHALL return resource data
in the FHIR Bundle as entries. See [an example of a search set bundle](Bundle-ex-search.html).

##### 2:3.44.4.2.3 Expected Actions

The Clinical Data Consumer processes the bundle of resources, received
in transaction \[PCC-44\] according to the capabilities of its
application. These capabilities are not specified by IHE.

If a Clinical Data Consumer cannot automatically recover from an error
condition, it SHOULD offer a means to make the error accessible to the
query initiator (e.g., user, system).

###### 2:3.44.4.2.3.1 Provenance Option

A Clinical Data Consumer that supports the Provenance Option
processes the FHIR Provenance
resources.

When a Provenance resource is received with Provenance.policy valued at
`urn:ihe:iti:mxde:2023:document-provenance-policy`, the Provenance is compliant with the  [mXDE defined Provenance]({{site.data.fhir.iheitimxde}}/StructureDefinition-IHE.ITI.mXDE.Provenance.html). The `Provenance.target`
has a reference for the data element(s) for which a document reference
is sought. The Clinical Data Consumer SHALL extract from these Provenance.entity, the reference contained in the Provenance.entity to the document from which the target data-element was extracted. For more detail on interpretation of these Provenance records and accessing the provenance documents, see [Mobile Cross-Enterprise Document Data Element Extraction (mXDE)]({{site.data.fhir.iheitimxde}}/index.html).

A Clinical Data Consumer that supports the Provenance Option
SHALL process all Provenance resources contained in a bundle returned by
a \[PCC-44\] transaction where each provenance resource MAY include one
or more Provenance.target in conjunction with one or more
Provenance.entity.

#### 2:3.44.4.3 Conformance Resource

Clinical Data Sources implementing this transaction SHALL provide a
Conformance Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating
the query operation for the Resources have been implemented and SHALL
include all the supported query parameters.

### 2:3.44.5 Security Considerations

The retrieved content contains PHI that SHALL be protected.

See the [QEDm Security Considerations](volume-1.html#security-considerations).

#### 2:3.44.5.1 Security Audit Considerations

Grouping a Clinical Data Source with an [Audit Trail and Node Authentication (ATNA)](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure
Application is required. Grouping a Clinical Data Consumer with an [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html)
Secure Node or Secure Application is recommended.

The Clinical Data Consumer MAY be considered overburdened to fully
implement the requirements of a Secure Node or Secure Application. The
Clinical Data Source is likely a more robust service and SHALL
generate audit messages.

The AuditEvent resources to be recorded are refinements of the [Basic AuditEvent Log Patterns (BALP)]({{site.data.fhir.iheitibasicaudit}}/index.html) for [RESTful Execute (search and query) where a Patient is a subject of the search]({{site.data.fhir.iheitibasicaudit}}/content.html#3573-restful-activities).

##### 2:3.44.5.1.1 Clinical Data Consumer

The Clinical Data Consumer when grouped with [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor SHALL be able to record a [Clinical Data Consumer AuditEvent](StructureDefinition-IHE.QEDm.Query.Audit.Consumer.html). [Audit Example for a QEDm Query transaction from consumer perspective](AuditEvent-ex-auditQedmQuery-consumer.html).

##### 2.3.44.5.1.2 Clinical Data Source

The Clinical Data Source when grouped with [ATNA Secure Node or Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Actor SHALL be able to record a [Clinical Data Source AuditEvent](StructureDefinition-IHE.QEDm.Query.Audit.Source.html). [Audit Example for a QEDm Query transaction from source perspective](AuditEvent-ex-auditQedmQuery-source.html).



---

// File: input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time. For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>

## Introduction

Overall test plan leverages the profiles and examples shown on the [Artifacts Summary](artifacts.html) page. The profiles listed are describing the constraints that would be adhered to by actors claiming conformance to this implementation guide. Thus any applicable Resources that are known to have been published by an app or server MUST be conformant to these profiles as appropriate.

The examples listed in [Example Instances](artifacts.html#example-example-instances) are example instances. Some are conformant to the profiles. Other examples that either assist with the structure of the examples (e.g., Patient and Encounter) or are examples that SHOULD be able to handle in various ways. 

This section will be improved as the IHE Connectathon need drives the creation of the test plans, test procedures, test tools, and reporting.

### Unit Test Procedure

Unit Tests in this context is where a SUT is tested against a simulator or validator. A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Where a reference implementation is used, the negative tests are harder to simulate. A validator is an implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

QEDm has two actors:
- [Clinical Data Consumer](volume-1.html#client)
- [Clinical Data Source](volume-1.html#server)

The options declared indicate the kind of clinical FHIR Resources (data) that are supported. So the following will be focused on the those that are declared supported.
The term "System Under Test" or "SUT" is used to represent a system being tested for conformance to QEDm. This same term is used for a Clinical Data Consumer as well as a Clinical Data Source when an instance of a system is being tested.

#### Testing Clinical Data Consumer (aka Client)

- Test Tooling: A FHIR Server, such as HAPI
    - user authorization would need to be flexible to support Test Clients
    - Could be accessible without user authorization
    - Should be accessible with IUA user authorization
    - Might be accessible with SMART-App-Launch authorization
    - The FHIR Server in this case must be configured to not accept changes during the testing, and should be able to be reset to a known dataset readily
- given set of Patients
    - Given a known set of reasonable clinical information covering all Resources in QEDm over these Patients
        - A potential source of this data might be [Synthea](https://synthetichealth.github.io/synthea/). There are [available datasets for download](https://synthea.mitre.org/downloads), or the tool is available to enable creation of a dataset more specific to the needs. These datasets are likely sufficient to get started, but may not cover the full breath of QEDm, or have sufficient depth.
    - Some patients should have minimal information, some should be fully populated
    - A patient should have no clinical data, so as to test that clients can handle getting no response
    - All clinical information should be human reasonable clinical information. Not to say medically normal, there should be some abnormal patients. The data should not be outside of the possibility for that kind of data (e.g., a negative heart-rate)
    - Some clinical information should be proper profile validating, but be at the limits of clinically relevant. Such as dateTime that is just the year. Such as not using standards based codes. Such as reasonably long narrative strings.
- Test Script
    - note that a SUT Searches on Patient is testing PDQm, but is an important precondition as is testing of ATNA and IUA as appropriate.
    - Client SUT are asked to search on a given Patient, for a specific kind of clinical data (e.g., Allergies)
      - Validate that they got the expected clinical data
      - repeat for all the clinical data the client supports
      - Note that some clients may not be able to do individual searches, this is fine as long as they can prove they executed the search on the FHIR Resources for which their options are declared, and they can prove that they got back and handled the data as expected to have been returned by the FHIR Server
      - repeat to stress any search parameters that the SUT supports 

##### failure mode testing

- Test Tooling should be able to be configured to return reasonable error responses (Resources unavailable, access denied)
    - The SUT should be able to handle gracefully these errors

##### advanced testing

- Should also have a known set of information that is not reasonable clinical information. These would be QEDm Resources that hold data that is not clinically reasonable. These data are used to test that a client can handle invalid data. The client does not need to show that they can process these data, but does need to show that searching on these patients does not cause anything bad to happen (e.g., a client crash).
    - This data might be generated by a fuzzing tool, that understands the FHIR Resource format and provides randomized data filling those schema elements.
    - Various  datatypes should be stressed. For example badly formatted dateTime, or dateTime that is beyond now, or before 1900. 

#### Testing Clinical Data Source (aka Server)

- Test Tooling: A FHIR Client 
    - This might be a custom written client, might be use of test tooling like Postman
    - This tool will need to be able to be configured for reasonable user security (none, IUA, and SMART-App-Launch)
- Given the SUT offers one or more patients to use for the testing, and that the SUT has a reasonable set of qualifying clinical data according to the SUT declared options
- Test Script
    - Test tool will query the FHIR metadata endpoint on the SUT, and confirm that the CapabilityStatement returned is valid for a QEDm Clinical Data Source with the given options declared by the SUT
    - Test tool will be configured for the SUT identified user authentication
    - Test tool will search for the Patient given, failing if the patients are not found
    - Test tool will search on each of the Resources as identified by the declared options of the SUT, failing if the Resources are not supported (Note that it is valid to return zero resources found so this is not a failure)
    - Test tool will iterate thru all the mandatory search parameters, failing if a mandatory search parameter returns an error or appears to not function
        - For example, given the first searches provide the resources available, the test tool can use a search parameter that should have a deterministic response

### Integration Test Procedure

Integration Tests in this context is where two SUT of paired actors test against each other. In this case, the subset of tests that can be tested is the intersection. Testing only this intersection is necessary but not sufficient. The testing must also include the capability of the client to exercise the test scenarios that this SUT can test to determine that failure-modes are handled properly by both SUT.




---

// File: input/pagecontent/volume-1.md


The Query for Existing Data for Mobile (QEDm) Profile supports dynamic
queries for clinical data elements, including observations, allergy and
intolerances, problems, diagnostic results, medications, immunizations,
procedures, encounters and provenance by making the information widely
available to other systems within and across enterprises to support
provision of better clinical care. It defines a transaction used to
query a list of specific data elements, persisted as FHIR resources.

QEDm is functionally equivalent to the QED Profile (based on HL7v3), but
QEDm is better suited for implementation by applications on mobile
devices or where the http/REST technology is preferred. The term
"mobile" must be understood in a wide sense: it refers not only to
applications on devices used for mobility that are resource- and
platform-constrained (e.g., tablets, smartphones, and embedded devices
including home-health devices), but also to larger systems deployed in
environments where interoperability requirements are simple, such as
pulling the latest summary for display.

The QEDm Profile defines a standardized interface to health (HTTP-based RESTful APIs) suited for
deployment of mobile applications on resource-constrained devices with
simple programming environment (e.g., JavaScript), simple protocol stack
(e.g., HTTP), and simple display functionality (e.g., HTML browser). The
goal is to limit required additional libraries that are often necessary
to process SOAP, MIME-Multipart, and MTOM/XOP Web Services.

The QEDm Profile uses the already defined actors Clinical Data Consumer and Clinical Data Source,
for which it specifies options and a transaction to be used for querying
a list of specific data elements, persisted as FHIR resources. The
current version of supplement doesn’t consider the reconciliation of the
fine-grained data elements gathered by the Clinical Data Source and/or
Clinical Data Consumer Actors. In order to perform reconciliation, a
grouping with RECON Reconciliation Agent SHOULD be considered.

The QEDm Profile MAY also be deployed in conjunction with document
sharing profiles such as thee [MHD](https://profiles.ihe.net/ITI/MHD/index.html) or [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) Profiles. The Provenance
Option in QEDm is used in particular by the [mXDE]({{site.data.fhir.iheitimxde}}/index.html) Profile to address the
combined deployment of QEDm for access to fine-grained data element with
links to source documents accessible through the [MHD](https://profiles.ihe.net/ITI/MHD/index.html) or [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) Profiles.

## 1:18.1 QEDm Actors, Transactions, and Content Modules

<a name="actors-and-transactions"> </a>

This section defines the actors, transactions, and/or content modules in this profile. General
definitions of actors are given in the Technical Frameworks General Introduction [Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html).
IHE Transactions can be found in the Technical Frameworks General Introduction [Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html).
Both appendices are located at <https://profiles.ihe.net/GeneralIntro/>.

Figure 18.1-1 shows the actors directly involved in the QEDm Profile and
the relevant transaction between them.

<figure>
{%include ActorsAndTransactions.svg%}
<figcaption><b>Figure: 1:18.1-1: QEDm Actor Diagram</b></figcaption>
</figure>
<br clear="all">

Table 1:18.1-1 lists the transactions for each actor directly involved in
the QEDm Profile. To claim compliance with this profile, an actor SHALL
support all required transactions (labeled "R") and MAY support the
optional transactions (labeled "O").

**Table 1:18.1-1: QEDm Integration Profile - Actors and Transactions**

| Actors                 | Transactions                           | Optionality    | Reference                 |
|------------------------|----------------------------------------|----------------|---------------------------|
| Clinical Data Source   | Mobile Query Existing Data [PCC-44](PCC-44.html) | R              | [PCC TF-2:3.44](PCC-44.html) |
| Clinical Data Consumer | Mobile Query Existing Data [PCC-44](PCC-44.html) | R              | [PCC TF-2:3.44](PCC-44.html) |
{:.grid .table-striped}

### 1:18.1.1 Actor Descriptions and Actor Profile Requirements

<a name="server"> </a>

#### 1:18.1.1.1 Clinical Data Source

The Clinical Data Source in this profile responds to FHIR-based queries
for one or more fine-grained data elements (FHIR resources) defined by
the options listed in Section [18.2 QEDm Actor Options](volume-1.html#actor-options).

FHIR Capability Statement for [Server](CapabilityStatement-IHE.QEDm.Clinical-Data-Source.html).

<a name="client"> </a>

#### 1:18.1.1.2 Clinical Data Consumer

The Clinical Data Consumer in this profile sends FHIR-based queries to the Clinical Data Source for one or more fine-grained data elements (FHIR resources) defined by the options listed in Section [8.2 QEDm Actor Options](volume-1.html#actor-options). Rendering or further processing of the data is not defined by this profile.

FHIR Capability Statement for [Client](CapabilityStatement-IHE.QEDm.Clinical-Data-Consumer.html)

<a name="actor-options"> </a>

## 1:18.2 QEDm Actor Options

Options that MAY be selected for each actor in this profile, if any, are
listed in Table 1:18.2-1. Dependencies between options when applicable
are specified in notes.

**Table 1:18.2-1: QEDm - Actors and Options**

<table border="1" borderspacing="0" style='border: 1px solid black; border-collapse: collapse'>
<thead>
<tr class="header">
<th>Actor</th>
<th>Option Name</th>
<th>Reference</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td rowspan="10">Clinical Data Source</td>
<td>Simple Observations (Note 1)</td>
<td>Section 1:18.2.1.1</td>
</tr>
<tr class="even">
<td>Allergies and Intolerances (Note 1)</td>
<td>Section 1:18.2.1.2</td>
</tr>
<tr class="odd">
<td>Conditions (Note 1)</td>
<td>Section 1:18.2.1.3</td>
</tr>
<tr class="even">
<td>Diagnostic Results (Note 1)</td>
<td>Section 1:18.2.1.4</td>
</tr>
<tr class="odd">
<td>Medications (Note 1)</td>
<td>Section 1:18.2.1.5</td>
</tr>
<tr class="even">
<td>Immunizations (Note 1)</td>
<td>Section 1:18.2.1.6</td>
</tr>
<tr class="odd">
<td>Procedures (Note 1)</td>
<td>Section 1:18.2.1.7</td>
</tr>
<tr class="even">
<td>Encounters (Note 1)</td>
<td>Section 1:18.2.1.8</td>
</tr>
<tr class="odd">
<td>Provenance (Note 1)</td>
<td>Section 1:18.2.1.9</td>
</tr>
<tr class="even">
<td>Occuupational Data for Health (Note 1)</td>
<td>Section 1:18.2.1.10</td>
</tr>
<tr class="odd">
<td rowspan="10">Clinical Data Consumer</td>
<td>Simple Observations (Note 1)</td>
<td>Section 1:18.2.2.1</td>
</tr>
<tr class="even">
<td>Allergies and Intolerances (Note 1)</td>
<td>Section 1:18.2.2.2</td>
</tr>
<tr class="odd">
<td>Conditions (Note 1)</td>
<td>Section 1:18.2.2.3</td>
</tr>
<tr class="even">
<td>Diagnostic Results (Note 1)</td>
<td>Section 1:18.2.2.4</td>
</tr>
<tr class="odd">
<td>Medications (Note 1)</td>
<td>Section 1:18.2.2.5</td>
</tr>
<tr class="even">
<td>Immunizations (Note 1)</td>
<td>Section 1:18.2.2.6</td>
</tr>
<tr class="odd">
<td>Procedures (Note 1)</td>
<td>Section 1:18.2.2.7</td>
</tr>
<tr class="even">
<td>Encounters (Note 1)</td>
<td>Section 1:18.2.2.8</td>
</tr>
<tr class="odd">
<td>Provenance (Note 1)</td>
<td>Section 1:18.2.2.9</td>
</tr>
<tr class="even">
<td>Occupational Data for Health (Note 1)</td>
<td>Section 1:18.2.2.10</td>
</tr>
</tbody>
</table>

*Note 1: At least one of these options SHALL be supported by the related actor.*

### 1:18.2.1 Clinical Data Consumer Options

#### 1:18.2.1.1 Simple Observations Option

A Clinical Data Consumer that implements the Simple Observations Option
performs the Mobile Query Existing Data transaction using the vocabulary
specified for Simple Observations in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.1](PCC-44.html#234441211-simple-observations-option-search-parameters).

#### 1:18.2.1.2 Allergies and Intolerances Option

A Clinical Data Consumer that implements the Allergies and Intolerances
Option performs the Mobile Query Existing Data transaction using the
vocabulary specified for Allergies and Intolerances in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.2](PCC-44.html#234441212-allergies-and-intolerances-option-search-parameters).

#### 1:18.2.1.3 Conditions Option

A Clinical Data Consumer that implements the Conditions Option performs
the Mobile Query Existing Data transaction using the vocabulary
specified for Conditions in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.3](PCC-44.html#234441213-conditions-option-search-parameters).

#### 1:18.2.1.4 Diagnostic Results Option

A Clinical Data Consumer
that implements the Diagnostic Results Option performs the Mobile Query
Existing Data transaction using the vocabulary specified for Diagnostic
Results in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.4](PCC-44.html#234441214-diagnostic-reports-option-search-parameters).

#### 1:18.2.1.5 Medications Option

A Clinical Data Consumer
that implements the Medications Option performs the Mobile Query
Existing Data transaction using the vocabulary specified for Medications
in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.5](PCC-44.html#234441215-medications-option-search-parameters).

#### 1:18.2.1.6 Immunizations Option

A Clinical Data Consumer
that implements the Immunizations Option performs the Mobile Query
Existing Data transaction using the vocabulary specified for
Immunizations in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.6](PCC-44.html#234441216-immunizations-option-search-parameters).

#### 1:18.2.1.7 Procedures Option

A Clinical Data Consumer that implements the Procedures Option performs
the Mobile Query Existing Data transaction using the vocabulary
specified for Procedures in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.7](PCC-44.html#234441217-procedures-option-search-parameters).

#### 1:18.2.1.8 Encounters Option

A Clinical Data Consumer that implements the Encounters Option performs
the Mobile Query Existing Data transaction using the vocabulary
specified for Encounters in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.8](PCC-44.html#234441218-encounters-option-search-parameters).

#### 1:18.2.1.9 Provenance Option

This option is different than the above options that allow the selection
of appropriate clinical content to query. It provides a means to extend
the traceability of information used for clinical decisions: when a data
element is accessed by a Clinical Data Consumer, identifiers from that
data element can be retrieved to enable access to one or more documents
in which this data element was originally recorded, providing a valuable
broader clinical context.

A Clinical Data Consumer that implements the Provenance Option
performs the Mobile Query Existing Data transaction using the vocabulary
specified for Provenance in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.9](PCC-44.html#234441219-provenance-option-search-parameters).

#### 1:18.2.1.10 Occupational Data for Health Option

A Clinical Data Consumer that implements the Occupational Data for
Health Option performs the Mobile Query Existing Data transaction using the vocabulary
specified for Occupational Data for Health in [PCC-44](PCC-44.html)
in [PCC TF-2:3.44.4.1.2.1.10](PCC-44.html#2344412110-occupational-data-for-health-option-search-parameters).

### 1:18.2.2 Clinical Data Source Options

#### 1:18.2.2.1 Simple Observations Option

A Clinical Data Source that implements the Simple Observations Option
responds to the message semantics specified for Simple Observations in
[PCC-44](PCC-44.html) in [PCC TF-2:3.44.4.1.2.1.1](PCC-44.html#234441211-simple-observations-option-search-parameters).


#### 1:18.2.2.2 Allergies and Intolerances Option

A Clinical Data Source that implements the Allergies and Intolerances
Option responds to the message semantics specified for Allergies and
Intolerances in [PCC-44](PCC-44.html) in [PCC TF-2:3.44.4.1.2.1.2](PCC-44.html#234441212-allergies-and-intolerances-option-search-parameters).

#### 1:18.2.2.3 Conditions Option

A Clinical Data Consumer that implements the Conditions Option responds
to the message semantics specified for Conditions in [PCC-44](PCC-44.html) in [PCC TF-2:3.44.4.1.2.1.3](PCC-44.html#234441213-conditions-option-search-parameters).

#### 1:18.2.2.4 Diagnostic Results Option

A Clinical Data Source that implements the Diagnostic Results Option
responds to the message semantics specified for Diagnostic Results in
[PCC-44](PCC-44.html) in [PCC TF-2:3.44.4.1.2.1.4](PCC-44.html#234441214-diagnostic-reports-option-search-parameters).

#### 1:18.2.2.5 Medications Option

A Clinical Data Source that implements the Medications Option responds
to the message semantics specified for Medications in [PCC-44](PCC-44.html) in [PCC TF-2:3.44.4.1.2.1.5](PCC-44.html#234441215-medications-option-search-parameters).

#### 1:18.2.2.6 Immunizations Option

A Clinical Data Source that implements the Immunizations Option responds
to the message semantics specified for Immunizations in [PCC-44](PCC-44.html) in
[PCC TF-2:3.44.4.1.2.1.6](PCC-44.html#234441216-immunizations-option-search-parameters).

#### 1:18.2.2.7 Procedures Option

A Clinical Data Source that implements the Procedures Option responds to
the message semantics specified for Procedures in [PCC-44](PCC-44.html) in [PCC TF-2:3.44.4.1.2.1.7](PCC-44.html#234441217-procedures-option-search-parameters).

#### 1:18.2.2.8 Encounters Option

A Clinical Data Source that implements the Encounters Option responds to
the message semantics specified for Encounters in [PCC-44](PCC-44.html) in [PCC TF-2:3.44.4.1.2.1.8](PCC-44.html#234441218-encounters-option-search-parameters).

#### 1:18.2.2.9 Provenance Option

This option is different than the above options that allow the selection
of appropriate clinical content to query. It provides a means to extend
the traceability of information used for clinical decisions: when a data
element is accessed by a Clinical Data Consumer, identifiers from that
data element can be provided to the Clinical Data Consumer to enable
access to one or more documents in which this data element was
originally recorded, providing a valuable broader clinical context.

A Clinical Data Source that implements the Provenance Option
responds to the message semantics specified for Provenance in \[PCC-44\]
in [PCC TF-2:3.44.4.1.2.1.9](PCC-44.html#234441219-provenance-option-search-parameters).

#### 1:18.2.2.10 Occupational Data for Health Option

A Clinical Data Source that implements the Occupational Data for Health
Option responds to the message semantics specified for Occupational Data
for Health in [PCC-44](PCC-44.html) in [PCC TF-2:3.44.4.1.2.1.10](PCC-44.html#2344412110-occupational-data-for-health-option-search-parameters) 
with the profiled content specified in the Reference link location.

<a name="required-groupings"> </a>

## 1:18.3 QEDm Required Actor Groupings

**Table 1:18.3-1: QEDm - Required Actor Groupings**

| QEDm Actor             | Actor to be grouped with | Reference |
|------------------------|--------------------------|-----------|
| Clinical Data Consumer | None                     | -        |
| Clinical Data Source   | None                     | -        |
{:.grid .table-striped}

<a name="overview"> </a>

## 1:18.4 QEDm Overview

### 1:18.4.1 Concepts

The QEDm Profile supports a broad set of the QED use cases and
functionality while keeping the implementation as simple as possible.

### 1:18.4.2 Use Cases

#### 1:18.4.2.1 Use Case #1: Discovery and Retrieval of Existing Data Elements

##### 1:18.4.2.1.1 Description

In this use case, the patient, by using a mobile device, needs access to
existing data elements. For example, a mobile application involved in a workflow needs to
discover all the current Observations and Medications.

##### 1:18.4.2.1.2 Process Flow

The Mobile Query Existing Data transaction is used to provide
parameterized queries that result in a list of returned data elements.

<figure>
{%include usecase1-processflow.svg%}
<figcaption><b>Figure 1:18.4.2.1.2-1: Use Case #1 Process Flow in QEDm Profile</b></figcaption>
</figure>
<br clear="all">

#### 1:18.4.2.2 Use Case #2: Discovery and Retrieval of Existing Data Elements with Source Document Links

##### 1:18.4.2.2.1 Description

In this use case, the physician, by using a mobile device, needs to
access all existing data elements and eventually to retrieve and consume
the source documents, if any.

For example, a mobile application involved in a workflow needs to
discover all Encounters which the patient has participated in and, for
those of interest, it needs to retrieve and show the related document
where the Encounter was originally specified.

##### 1:118.4.2.2.2 Process Flow

The Mobile Query Existing Data [PCC-44](PCC-44.html) transaction is used to provide
parameterized queries that result in a returned data elements.
One of the query options specifies that provenance information be
included in the result to obtain the links to source documents, if any.

A Clinical Data Source that supports the Provenance Option
may be grouped with the [Mobile Cross-Enterprise Document Data Element Extraction (mXDE)]({{site.data.fhir.iheitimxde}}/index.html) Data Element Extractor [Actor]({{site.data.fhir.iheitimxde}}/volume-1.html#145111-data-element-extractor) and thus will expose [mXDE defined Provenance]({{site.data.fhir.iheitimxde}}/StructureDefinition-IHE.ITI.mXDE.Provenance.html) resources.

The mobile application implements The Clinical Data Consumer to perform
the query and can use the Provenance to get to the Documents from which those Resources were found.

The mobile application implements an [MHD](https://profiles.ihe.net/ITI/MHD/index.html) Document Consumer and
retrieves the document from the [MHD](https://profiles.ihe.net/ITI/MHD/index.html) Document Responder by using the
related returned document link.

<figure>
{%include usecase2-processflow.svg%}
<figcaption><b>Figure 1:18.4.2.2.2-1: Use Case #2 Process Flow in QEDm Profile</b></figcaption>
</figure>
<br clear="all">

<a name="security-considerations"> </a>

## 1:18.5 QEDm Security Considerations

See ITI TF-2: [Appendix Z.8 "Mobile Security Considerations"](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

The QEDm Profile provides an API for accessing Data Element level
details that are identifiable to a specific Patient. Thus, all the data
communicated, including the query parameters, SHOULD be considered
Patient Identifiable data. The grouping with [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/index.html), or some similar User
Authentication and Authorization solution, is critical to enforcing
Privacy and Security. All accesses to this data SHOULD be recorded as
audit log for security surveillance and Privacy reporting. These topics
are discussed in Appendix Z.8 with recommendations.

The Provenance Option adds an additional protection against
Data Integrity and Data Authenticity risks. The Provenance record
associated with a Data Element returned by the Clinical Data Source
would indicate the source of the data. In the case where Provenance is
specific to a Document, grouping with [MHD](https://profiles.ihe.net/ITI/MHD/index.html) Document Consumer or [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html)
Document Consumer enables the retrieval of that source Document. The
[mXDE Profile]({{site.data.fhir.iheitimxde}}/index.html) ITI TF-1: 45.5 Security Considerations includes further
discussion on the specific Security Considerations of bridging between a
Document Sharing environment and a Data Element access model.

<a name="other-grouping"> </a>

## 1:18.6 QEDm Cross-Profile Considerations

### 1:18.6.1 ITI mXDE – Mobile Cross-Enterprise Document Data Element Extraction

A Clinical Data Source MAY be grouped with a [Data Element Extractor]({{site.data.fhir.iheitimxde}}/index.html)
which requires the addition of necessary provenance information to
ensure consistency within each returned data element.

This grouping allows the extraction of data elements and the addition of
references to data origins (e.g., Documents) used in generating the
result.

A Clinical Data Consumer MAY be grouped with a Data Element Provenance
Consumer to extract the identifiers (provenance information) that
consistently link the returned data elements to the related data origin.

### 1:18.6.2 ITI PIX - Patient Identity Cross Referencing and ITI PDQ - Patient Demographics Query

A Clinical Data Consumer MAY be grouped with 
a [Patient Identifier Cross-reference]({{site.data.fhir.ihepixm}}/index.html) Consumer or 
a [Patient Demographics Consumer]({{site.data.fhir.ihepdqm}}/index.html) to resolve
patient identifiers prior to submitting queries to a Clinical Data
Source.

Within an enterprise, the need to cross-reference patient identifiers
MAY not be necessary. However, once enterprise boundaries are crossed,
these identifiers will need to be resolved. In that case profiles such
as PIX, PIXm, PDQ and/or PDQm MAY be used.

### 1:18.6.3 ITI MHD – Mobile Health Documents

A Clinical Data Source MAY be grouped with 
an [Mobile Access to Health Documents (MHD)](https://profiles.ihe.net/ITI/MHD/index.html) Document Responder.
Data gathered from clinical documents submitted to the Document
Responder can be a source of information returned by the Clinical Data
Source. It MAY include references to documents used in generating the
QEDm returned data-elements, by using the FHIR Provenance Resource.

A Clinical Data Consumer MAY be grouped with an [MHD](https://profiles.ihe.net/ITI/MHD/index.html) Document Consumer.
The Clinical Data Consumer MAY use the references to access the source
documents.

### 1:18.6.4 ITI XDS - Cross-Enterprise Document Sharing

A Clinical Data Source MAY be grouped with 
an [Cross-Enterprise Document Sharing (XDS)](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) Document Repository.
Data gathered from clinical documents submitted to the Document
Repository can be a source of information returned by the Clinical Data
Source. Information returned by the Clinical Data Source MAY include
references to all documents used in generating the results, by using the
FHIR Provenance Resource.

### 1:18.6.5 Content Integration Profiles

A Content Creator MAY be grouped with a Clinical Data Consumer to obtain
some or all of the information necessary to create a Medical Summary
based on information found in a Clinical Data Source.

A Content Creator MAY be grouped with a Clinical Data Source. When
grouped with a Content Creator, the Clinical Data Source SHALL respond
to queries containing the relevant vocabulary codes used by the Content
Creator.


---

// File: input/pagecontent/volume-4.md


## 3 National Extensions for IHE USA

### 3.1 Comments

This national extension document was authored under the sponsorship and
supervision of IHE PCC with collaboration from the CDC/National Center
for Health Statistics who welcome comments on this document and the IHE
USA initiative.

### 3.2 Query for Existing Data for Mobile (QEDm)

The [HL7 FHIR Profile: Occupational Data for Health (ODH) US Realm]({{site.data.fhir.hl7fhirusodh}}) profiles SHALL be used.


---

// File: input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: LOINC = http://loinc.org



---

// File: input/fsh/audit.fsh

Invariant: val-audit-source
Description: "The Audit Source is this agent too."
Expression: "$this.who = %resource.source.observer"
Severity: #error


Profile:        AuditQedmQuerySource
Parent:         IHE.BasicAudit.Query
Id:             IHE.QEDm.Query.Audit.Source
Title:          "Audit Event for QEDm Query at Source"
Description:    """
Defines constraints on the AuditEvent (AuditMessage) Resource when a Clinical Data Source responds to a Clinical Data Query [PCC-44](./PCC-44.html).
- Build off of the IHE BasicAudit Query event
- add the PCC-44 as a subtype
- client is Clinical Data Consumer
- server is Clinical Data Source
- entity slice for query are REQUIRED
- entity slice for transaction is available
- entity for patient SHALL be used 
- source is the server
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains pcc44 1..1
* subtype[pcc44] = urn:ihe:event-type-code#PCC-44 "Mobile Query Existing Data"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Clinical Data Consumer"
* agent[server] ^short = "Clinical Data Source"
* entity[query] ^short = "Search Parameters"
* entity contains patient 1..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[patient] ^short = "Patient"


Profile:        AuditQedmQueryConsumer
Parent:         IHE.BasicAudit.Query
Id:             IHE.QEDm.Query.Audit.Consumer
Title:          "Audit Event for QEDm Query at Consumer"
Description:    """
Defines constraints on the AuditEvent (AuditMessage) Resource for a Clinical Data Consumer to record when it performs a Clinical Data Query [PCC-44](./PCC-44.html).
- Build off of the IHE BasicAudit Query event
- add the PCC-44 as a subtype
- client is Clinical Data Consumer
- server is Clinical Data Source
- entity slice for query are REQUIRED
- entity slice for transaction is available
- entity for patient SHALL be used
- source is the client
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains pcc44 1..1
* subtype[pcc44] = urn:ihe:event-type-code#PCC-44 "Mobile Query Existing Data"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Clinical Data Consumer"
* agent[server] ^short = "Clinical Data Source"
* entity[query] ^short = "Search Parameters"
* entity contains patient 1..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[patient] ^short = "Patient"


Instance: ex-auditQedmQuery-consumer
InstanceOf: IHE.QEDm.Query.Audit.Consumer
Title: "Audit Example of PCC-44 at Consumer"
Description: """
Audit Event for QEDm Query Transaction by the Patient Identifier Cross-reference Consumer

where the Query was executed with a GET as follows:

```
GET https://server.example.com/fhir/AllergyIntolerance?patient=ex-patient
Accept: application/fhir+json; fhirVersion=4.0
```
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[pcc44] = urn:ihe:event-type-code#PCC-44 "Mobile Query Existing Data"
//* severity = #Informational
* recorded = 2021-07-13T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "fancy mobile app"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "R0VUIGh0dHBzOi8vc2VydmVyLmV4YW1wbGUuY29tL2ZoaXIvQWxsZXJneUludG9sZXJhbmNlP3BhdGllbnQ9ZXgtcGF0aWVudApBY2NlcHQ6IGFwcGxpY2F0aW9uL2ZoaXIranNvbjsgZmhpclZlcnNpb249NC4wCg=="



Instance: ex-auditQedmQuery-source
InstanceOf: IHE.QEDm.Query.Audit.Source
Title: "Audit Example of PCC-44 at Source"
Description: """
Audit Event for QEDm Query Transaction by the Patient Identifier Cross-reference Source

where the Query was executed with a GET as follows:

```
GET https://server.example.com/fhir/AllergyIntolerance?patient=ex-patient
Accept: application/fhir+json; fhirVersion=4.0
```
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[pcc44] = urn:ihe:event-type-code#PCC-44 "Mobile Query Existing Data"
//* severity = #Informational
* recorded = 2021-07-13T19:17:32Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE QEDm api example"
* source.observer.display = "http://server.example.com/fhir"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "R0VUIGh0dHBzOi8vc2VydmVyLmV4YW1wbGUuY29tL2ZoaXIvQWxsZXJneUludG9sZXJhbmNlP3BhdGllbnQ9ZXgtcGF0aWVudApBY2NlcHQ6IGFwcGxpY2F0aW9uL2ZoaXIranNvbjsgZmhpclZlcnNpb249NC4wCg=="



---

// File: input/fsh/client.fsh

Instance: IHE.QEDm.Clinical-Data-Consumer
InstanceOf: CapabilityStatement
Title: "IHE QEDm Clinical Data Consumer Actor"
Usage: #definition
* description = """
CapabilityStatement for Clinical Data Consumer Actor 

The Clinical Data Consumer in this profile sends FHIR-based queries to the Clinical Data Source 
for one or more fine-grained data elements (FHIR resources) defined by the options listed in 
Section [8.2 QEDm Actor Options](volume-1.html#actor-options). 
Rendering or further processing of the data is not defined by this profile.
"""
* url = "https://profiles.ihe.net/PCC/QEDm/CapabilityStatement/IHE.QEDm.Clinical-Data-Consumer"
* name = "IHE_QEDm_Clinical_Data_Consumer"
* title = "IHE QEDm Clinical Data Consumer"
* status = #active
* experimental = false
* date = "2024-07-17"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #application/fhir+json
* format[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
* format[+] = #application/fhir+xml
* format[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #MAY
* patchFormat = #application/json-patch+json
* patchFormat.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* patchFormat.extension.valueCode = #MAY
* rest
* rest.mode = #server
* rest.documentation = "The Clinical Data Source in this profile responds to FHIR-based queries
for one or more fine-grained data elements (FHIR resources) defined by
the options listed in Section [8.2 QEDm Actor Options](volume-1.html#actor-options)."
* rest.security.description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"

// AllergyIntolerance
* rest.resource[0].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #MAY
/* QEDm does not have grouped parameters
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "clinical-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #AllergyIntolerance
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-allergyintolerance"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
/* QEDm does not specify these
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "clinical-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-clinical-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "active | inactive | resolved"
*/
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."

// Condition
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "clinical-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
/* QEDm does not have this combination 
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "clinical-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "onset-date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #Condition
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-condition"
//* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-problem-list-item"
//* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest.resource[=].supportedProfile.extension.valueCode = #SHOULD
* rest.resource[=].documentation = "Client applications should be prepared to encounter codes they do not recognize and handle the records \naccordingly. Servers SHOULD populate Condition.code.coding.display and/or Condition.code.text so that \nclients can always at least display the condition even if they do not know the codes that are used. Clients should be careful making use of the ```code``` search parameter given that the codes used\nvary so much.\n\nSafety Issues:\n\n* Clients SHALL not treat all conditions as if they are part of the patient's current problem list\n    * Note that some Condition resources may not have these status codes - this is usually due to poor record keeping reflected in legacy data\n    * Servers SHOULD avoid leaving these status codes missing\n* Clients SHALL pay attention to the ```clinicalStatus``` and ```verificationStatus``` and display and process them correctly\n* Clients SHALL still work safely when the server does not support all the search parameters listed here."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The category of the condition"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "clinical-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-clinical-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The clinical status of the condition"
/* QEDm does not include this
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "verification-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-verification-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The verification status of the condition"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Code for the condition"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "onset-date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-onset-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Date of onset for the condition"
*/
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."

// DocumentReference
/* see MHD
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "contenttype"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "period"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #DocumentReference
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-documentreference"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/DocumentReference-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Categorization of document"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "contenttype"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/DocumentReference-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Mime type of the content, may include charset"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "When this document reference was created"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "period"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/DocumentReference-period"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Time of service that is being documented"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/DocumentReference-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "current | superseded | entered-in-error"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Kind of document (LOINC if possible)"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least an id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #SHOULD
* rest.resource[=].operation.name = "docref"
* rest.resource[=].operation.definition = "http://hl7.org/fhir/uv/ipa/OperationDefinition/docref"
* rest.resource[=].operation.documentation = "A server **SHOULD** be capable of responding to a $docref operation and capable of returning at least a reference to a CDA document, if available. **MAY** provide references to other 'on-demand' and 'stable' documents (or 'delayed/deferred assembly') that meet the query parameters as well. If a context date range is supplied the server ** SHOULD**  provide references to any document that falls within the date range If no date range is supplied, then the server **SHALL** provide references to last or current encounter.  **SHOULD** document what resources, if any, are returned as included resources\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`GET [base]/DocumentReference/$docref?patient=[id]`"
*/

// Immunization
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #MAY
/* QEDm does not include
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #Immunization
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-immunization"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
/* QEDm does not include these
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Vaccination  (non)-Administration Date"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Immunization-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Immunization event status"
*/
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least an id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."

// Medication
// IPA Medication is not searchable, it is just retrievable. QEDm has it searchable.
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].type = #Medication
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medication"
* rest.resource[=].documentation = "The MedicationStatement and MedicationRequest resources can represent a medication, using an external reference to a Medication resource. If an external Medication Resource is used in a MedicationStatement or a MedicationRequest, then the READ and SEARCH Criteria  **SHALL**  be supported."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference

// MedicationRequest
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #MAY
/* QEDm does not have combinations
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "authoredon"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #MedicationRequest
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationrequest"
* rest.resource[=].documentation = "Clients SHALL query for both MedicationStatement and MedicationRequest when fetching patient Medication information.\n\nThe MedicationRequest resources can represent a medication using either a code or refer to the Medication resource. When referencing Medication, the resource may be [contained](http://hl7.org/fhir/R4/references.html#contained) or an external resource. The server application **MAY** choose any one way or more than one method, but if an external reference to Medication is used, the server **SHALL** support the `_include` parameter for searching this element. The client application **SHALL** support all methods. For example, A server **SHALL** be capable of returning all medications for a patient using one of or both:\n\n `GET /MedicationStatement?patient=[id]`\n\n `GET /MedicationStatement?patient=[id]&_include=MedicationStatement:medication`\n\nWhen representing a prescribed medication, servers SHOULD use codings at the level of a clinical drug rather than ingredient or dose form (e.g. \"loratadine 10mg oral tablet\", rather than a bare ingredient like \"loratadine\" or a dose form like \"loratadine oral tablet\")."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchInclude = "MedicationRequest:medication"
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
/* QEDm only has patient
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicationRequest-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Returns prescriptions with different categories"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Return prescriptions of this medication code"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "authoredon"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicationRequest-authoredon"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Returns prescriptions written on this date"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "intent"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicationRequest-intent"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Return prescriptions with this encounter identifier"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/medications-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Status of the prescription"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
*/
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least an id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."

// MedicationStatement
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #MAY
/* QEDm does not have combinations/
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #MedicationStatement
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationstatement"
* rest.resource[=].documentation = "Clients SHALL query for both MedicationStatement and MedicationRequest when fetching patient Medication information.\n\nThe MedicationRequest resources can represent a medication using either a code or refer to the Medication resource. When referencing Medication, the resource may be [contained](http://hl7.org/fhir/R4/references.html#contained) or an external resource. The server application **MAY** choose any one way or more than one method, but if an external reference to Medication is used, the server **SHALL** support the `_include` parameter for searching this element. The client application **SHALL** support all methods."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchInclude = "MedicationStatement:medication"
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
/* QEDm only include patient
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/medications-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Return statements that match the given status"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
*/
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least an id value and **MAY** provide both the Type and id values."

// Observation
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
/* not in QEDm PDF
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Observation
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation"
// TODO might need to add the profiles from ODH
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/vitalsigns"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
// QEDm didn't mention vitalsigns, but it is now required in FHIR core, so it is worth mentioning. IPA is SHALL, since we didn't have this before then I introduce it as MAY
* rest.resource[=].supportedProfile[=].extension.valueCode = #MAY
// QEDm adds ODH profiles
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-CombatZonePeriod"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-EmploymentStatus"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-OccupationalDataForHealth"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-PastOrPresentJob"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-RetirementDate"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-UsualWork"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The classification of the type of observation"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The code of the observation type"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
// added date modifiers to documentation element
* rest.resource[=].searchParam[=].documentation = "Obtained date/time. If the obtained element is a period, a date that falls in the period. The date modifiers `ge`,`le`,`gt`,`lt` SHALL be supported."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status of the observation"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
// Different note than IPA
* rest.resource[=].searchParam[=].documentation = "The Clinical Data Consumer SHALL support at least one of the search parameters combinations."

// Patient
/* see PDQm
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "family"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "gender"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "birthdate"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "family"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "birthdate"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "gender"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Patient
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient"
* rest.resource[=].documentation = "Servers SHALL support the capability for a client application to access the patient record using any of the following API calls:\n\n```GET [url]/Patient/[id]```\n\n```GET [url]/Patient?_id=[id]```\n\n```GET [url]/Patient?identifier=[identifier]```\n\nServers are not required to support any additional search parameters, and clients SHOULD not expect servers to do so.\n\nAdditional rules and guidance for supporting `Patient.link`: \n- The server:\n    - SHALL have no more than one Patient with a status of active = \"true\" *from the server being queried* \n    - MAY include inactive patients on the *same server*\n    - MAY include inactive or active patients from a *different server*\n    - When returning a [search Bundle](http://hl7.org/fhir/bundle.html) that contains more than one Patient record for the same patient, the Patient record(s) SHALL use the `Patient.link` attribute to cross-link the Patient resources.\n- The client:\n    - SHALL be able to follow the link(s) to the other Patient resource(s) and understand the direction of the link (in other words, which Patient is linked to which other Patient)\n    - SHALL understand the `Patient.link.type` code which defines the type of link between this Patient resource and another Patient resource\n    - SHALL be aware of the linked Patient `active` flag and that inactive patients may have relevant information"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "birthdate"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-birthdate"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *day*.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nA server **SHALL** support a value a value precise to the *day*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "family"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-family"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "gender"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-gender"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "given"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-given"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Patient-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide both the system and code values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL NOT** support only code values."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Patient-name"
* rest.resource[=].searchParam[=].type = #string
*/

// Parctitioner
/* see mCSD
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].type = #Practitioner
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitioner"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"

* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].type = #PractitionerRole
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitionerrole"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchInclude[0] = "PractitionerRole:endpoint"
* rest.resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #transaction
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #batch
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #search-system
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #history-system
*/

// Unique to QEDm that are not in IPA
// DiagnosticReport
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #MAY
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #DiagnosticReport
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The classification of the type of observation"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The code of the observation type"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
// added date modifiers to documentation element
* rest.resource[=].searchParam[=].documentation = "Obtained date/time. If the obtained element is a period, a date that falls in the period. The date modifiers `ge`,`le`,`gt`,`lt` SHALL be supported."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference

// Procedures
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Procedure
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
// added date modifiers to documentation element
* rest.resource[=].searchParam[=].documentation = "Obtained date/time. If the obtained element is a period, a date that falls in the period. The date modifiers `ge`,`le`,`gt`,`lt` SHALL be supported."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference

// Encounter
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Encounter
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
// added date modifiers to documentation element
* rest.resource[=].searchParam[=].documentation = "Obtained date/time. If the obtained element is a period, a date that falls in the period. The date modifiers `ge`,`le`,`gt`,`lt` SHALL be supported."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference


// Provenance
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #MAY
* rest.resource[=].type = #Provenance
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/ITI/mXDE/StructureDefinition/IHE.ITI.mXDE.Provenance"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "target"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Provenance-target"
* rest.resource[=].searchParam[=].type = #reference




---

// File: input/fsh/ex-bloodPressure.fsh

Instance:   ex-IHE-QEDm-bloodPressure-0
InstanceOf: http://hl7.org/fhir/StructureDefinition/bp
Title: "Example of an IHE QEDm blood pressure R4 observation, minimal"
Description:      "holding typical values"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* category[VSCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* code.coding[BPCode] = LOINC#85354-9
* subject = Reference(Patient/ex-patient)
* effectiveDateTime = 2004-12-25T23:50:50-05:00
* component[SystolicBP].code = LOINC#8480-6 "Systolic blood pressure"
* component[SystolicBP].valueQuantity = 140.0 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code = LOINC#8462-4 "Diastolic blood pressure"
* component[DiastolicBP].valueQuantity = 90.0 'mm[Hg]' "mm[Hg]"
* note.text = "a minimal blood pressure"
* performer[+] = Reference(Patient/ex-patient)


---

// File: input/fsh/ex-encounter.fsh

Instance:   ex-encounter
InstanceOf: Encounter
Title: "Example Encounter"
Description:      "holding typical values"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subject = Reference(Patient/ex-patient)
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#HH


---

// File: input/fsh/ex-patient.fsh

Instance:   ex-patient
InstanceOf: Patient
Title: "Example Patient"
Description: "The patient from which all the example relate"
// history - http://playgroundjungle.com/2018/02/origins-of-john-jacob-jingleheimer-schmidt.html
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[0].use = #usual
* name[0].family = "Smith"
* name[0].given = "Jack"
* name[1].use = #old
* name[1].family = "Schnidt"
* name[1].given[0] = "John"
* name[1].given[1] = "Jacob"
* name[1].given[2] = "Jingle"
* name[1].given[3] = "Heimer"
* name[1].period.end = "1960"
* name[2].use = #official
* name[2].family = "Smith"
* name[2].given[0] = "John"
* name[2].given[1] = "Jacob"
* name[2].given[2] = "Jingleheimer"
* name[2].period.start = "1960-01-01"
* gender = #other
* birthDate = "1923-07-25"
* address.state = "WI"
* address.country = "USA"

---

// File: input/fsh/ex-provenance.fsh


Instance: ex-documentreference
InstanceOf: DocumentReference
Title: "Dummy DocumentReference example"
Description: "Dummy DocumentReference example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* subject = Reference(ex-patient)
* content.attachment.title = "Hello World"
* content.attachment.contentType = #text/plain



Instance:   ex-device
InstanceOf: Device
Title:      "Dummy Device example"
Description: "Dummy Device example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* manufacturer = "Acme"
* distinctIdentifier = "Decomposer"
* version.value = "1000"

Instance: ex-provenance
InstanceOf: IHE.ITI.mXDE.Provenance
Title: "Provenance of extracted resources"
Description: "Sample of a Provenance of a set of target FHIR Resource elements derived from a DocumentReference"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* target[+] = Reference(ex-IHE-QEDm-bloodPressure-0)
* target[+] = Reference(ex-encounter)
* target[+] = Reference(ex-weight)
* target[+] = Reference(ex-weight2)
* recorded = 2023-01-25T09:49:00.000Z
// already assigned * policy = "urn:ihe:iti.mxde:2023:document-provenance-policy"
* activity = http://hl7.org/fhir/w3c-provenance-activity-type#Derivation
* agent[theAssembler].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#assembler
* agent[theAssembler].who = Reference(ex-device)
* entity[0].role = #source
* entity[0].what = Reference(ex-documentreference)

Instance: ex-search
InstanceOf: Bundle
Title: "Example of a search set bundle"
Description: "Search on Weight Observations with reverse include requesting Provenance. This is returning two weight Observations and one Provenance."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #searchset
* link[0].relation = "self"
* link[0].url = "http://example.org/Observation?patient=ex-patient&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&code=http://loinc.org|29463-7&_revinclude=Provenance:target"
* total = 3
* timestamp = 2024-11-26T11:32:24Z
* entry[+].fullUrl = "http://example.org/Observation/ex-weight"
* entry[=].resource = ex-weight
* entry[=].search.mode = #match
* entry[+].fullUrl = "http://example.org/Observation/ex-weight2"
* entry[=].resource = ex-weight2
* entry[=].search.mode = #match
* entry[+].fullUrl = "http://example.org/Provenance/ex-provenance"
* entry[=].resource = ex-provenance
* entry[=].search.mode = #include


---

// File: input/fsh/ex-weight.fsh

Instance:   ex-weight
InstanceOf: Observation
Title: "Example of an QEDm bodyWeight R4 observation"
Description: """
Sample for demonstration purposes of a common weight Observation
- marked as compliant with IHE.QEDm.bodyWeight profile
- marked as test data
- status of final
- category vital-signs
- code of loinc body weight
- subject of the example patient
- effective time of December 25th, 2004
- weight 185 pounds
- note: a bit heavy
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs
* code = http://loinc.org#29463-7
* subject = Reference(Patient/ex-patient)
* effectiveDateTime = 2004-12-25T23:50:50-05:00
* valueQuantity = 185 '[lb_av]' "in_i"
* note.text = "a bit heavy"
* performer[+] = Reference(Patient/ex-patient)

Instance:   ex-weight2
InstanceOf: Observation
Title: "Example of an QEDm bodyWeight R4 observation"
Description: """
Sample for demonstration purposes of a common weight Observation
- marked as compliant with IHE.QEDm.bodyWeight profile
- marked as test data
- status of final
- category vital-signs
- code of loinc body weight
- subject of the example patient
- effective time of December 25th, 2004
- weight 185 pounds
- note: a bit heavy
"""
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs
* code = http://loinc.org#29463-7
* subject = Reference(Patient/ex-patient)
* effectiveDateTime = 2005-12-25T23:50:50-05:00
* valueQuantity = 185 '[lb_av]' "in_i"
* note.text = "a bit heavy"
* performer[+] = Reference(Patient/ex-patient)



---

// File: input/fsh/server.fsh

Instance: IHE.QEDm.Clinical-Data-Source
InstanceOf: CapabilityStatement
Title: "IHE QEDm Clinical Data Source Actor"
Usage: #definition
* description = """
CapabilityStatement for Clinical Data Source Actor.

The Clinical Data Source in this profile responds to FHIR-based queries
for one or more fine-grained data elements (FHIR resources) defined by
the options listed in Section [8.2 QEDm Actor Options](volume-1.html#actor-options).
"""
* url = "https://profiles.ihe.net/PCC/QEDm/CapabilityStatement/IHE.QEDm.Clinical-Data-Source"
* name = "IHE_QEDm_Clinical_Data_Source"
* title = "IHE QEDm Clinical Data Source Actor"
* status = #active
* experimental = false
* date = "2024-07-17"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #application/fhir+json
* format[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+] = #application/fhir+xml
* format[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
* patchFormat = #application/json-patch+json
* patchFormat.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* patchFormat.extension.valueCode = #SHOULD
* rest
* rest.mode = #server
* rest.documentation = "The Clinical Data Source in this profile responds to FHIR-based queries
for one or more fine-grained data elements (FHIR resources) defined by
the options listed in Section [8.2 QEDm Actor Options](volume-1.html#actor-options)."
* rest.security.description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"

// AllergyIntolerance
* rest.resource[0].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHOULD
/* QEDm does not have grouped parameters
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "clinical-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #AllergyIntolerance
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-allergyintolerance"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
/* QEDm does not specify these
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "clinical-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/AllergyIntolerance-clinical-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "active | inactive | resolved"
*/
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."

// Condition
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "clinical-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
/* QEDm does not have this combination 
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "clinical-status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "onset-date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #Condition
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-condition"
//* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-problem-list-item"
//* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Client applications should be prepared to encounter codes they do not recognize and handle the records \naccordingly. Servers SHOULD populate Condition.code.coding.display and/or Condition.code.text so that \nclients can always at least display the condition even if they do not know the codes that are used. Clients should be careful making use of the ```code``` search parameter given that the codes used\nvary so much.\n\nSafety Issues:\n\n* Clients SHALL not treat all conditions as if they are part of the patient's current problem list\n    * Note that some Condition resources may not have these status codes - this is usually due to poor record keeping reflected in legacy data\n    * Servers SHOULD avoid leaving these status codes missing\n* Clients SHALL pay attention to the ```clinicalStatus``` and ```verificationStatus``` and display and process them correctly\n* Clients SHALL still work safely when the server does not support all the search parameters listed here."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The category of the condition"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "clinical-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-clinical-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The clinical status of the condition"
/* QEDm does not include this
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "verification-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-verification-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The verification status of the condition"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Code for the condition"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "onset-date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-onset-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Date of onset for the condition"
*/
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."

// DocumentReference
/* see MHD
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "contenttype"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "type"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "period"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #DocumentReference
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-documentreference"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/DocumentReference-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Categorization of document"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "contenttype"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/DocumentReference-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Mime type of the content, may include charset"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "When this document reference was created"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "period"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/DocumentReference-period"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Time of service that is being documented"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/DocumentReference-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "current | superseded | entered-in-error"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "type"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Kind of document (LOINC if possible)"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least an id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #SHALL
* rest.resource[=].operation.name = "docref"
* rest.resource[=].operation.definition = "http://hl7.org/fhir/uv/ipa/OperationDefinition/docref"
* rest.resource[=].operation.documentation = "A server **SHOULD** be capable of responding to a $docref operation and capable of returning at least a reference to a CDA document, if available. **MAY** provide references to other 'on-demand' and 'stable' documents (or 'delayed/deferred assembly') that meet the query parameters as well. If a context date range is supplied the server ** SHOULD**  provide references to any document that falls within the date range If no date range is supplied, then the server **SHALL** provide references to last or current encounter.  **SHOULD** document what resources, if any, are returned as included resources\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`GET [base]/DocumentReference/$docref?patient=[id]`"
*/

// Immunization
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHOULD
/* QEDm does not include
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #Immunization
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-immunization"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
/* QEDm does not include these
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Vaccination  (non)-Administration Date"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Immunization-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Immunization event status"
*/
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least an id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."

// Medication
// IPA Medication is not searchable, it is just retrievable. QEDm has it searchable.
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].type = #Medication
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medication"
* rest.resource[=].documentation = "The MedicationStatement and MedicationRequest resources can represent a medication, using an external reference to a Medication resource. If an external Medication Resource is used in a MedicationStatement or a MedicationRequest, then the READ and SEARCH Criteria  **SHALL**  be supported."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference

// MedicationRequest
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHOULD
/* QEDm does not have combinations
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "authoredon"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "intent"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #MedicationRequest
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationrequest"
* rest.resource[=].documentation = "Clients SHALL query for both MedicationStatement and MedicationRequest when fetching patient Medication information.\n\nThe MedicationRequest resources can represent a medication using either a code or refer to the Medication resource. When referencing Medication, the resource may be [contained](http://hl7.org/fhir/R4/references.html#contained) or an external resource. The server application **MAY** choose any one way or more than one method, but if an external reference to Medication is used, the server **SHALL** support the `_include` parameter for searching this element. The client application **SHALL** support all methods. For example, A server **SHALL** be capable of returning all medications for a patient using one of or both:\n\n `GET /MedicationStatement?patient=[id]`\n\n `GET /MedicationStatement?patient=[id]&_include=MedicationStatement:medication`\n\nWhen representing a prescribed medication, servers SHOULD use codings at the level of a clinical drug rather than ingredient or dose form (e.g. \"loratadine 10mg oral tablet\", rather than a bare ingredient like \"loratadine\" or a dose form like \"loratadine oral tablet\")."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchInclude = "MedicationRequest:medication"
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
/* QEDm only has patient
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicationRequest-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Returns prescriptions with different categories"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Return prescriptions of this medication code"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "authoredon"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicationRequest-authoredon"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Returns prescriptions written on this date"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "intent"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/MedicationRequest-intent"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Return prescriptions with this encounter identifier"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/medications-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Status of the prescription"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
*/
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least an id value and **MAY** provide both the Type and id values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."

// MedicationStatement
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHOULD
/* QEDm does not have combinations/
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].type = #MedicationStatement
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationstatement"
* rest.resource[=].documentation = "Clients SHALL query for both MedicationStatement and MedicationRequest when fetching patient Medication information.\n\nThe MedicationRequest resources can represent a medication using either a code or refer to the Medication resource. When referencing Medication, the resource may be [contained](http://hl7.org/fhir/R4/references.html#contained) or an external resource. The server application **MAY** choose any one way or more than one method, but if an external reference to Medication is used, the server **SHALL** support the `_include` parameter for searching this element. The client application **SHALL** support all methods."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchInclude = "MedicationStatement:medication"
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
/* QEDm only include patient
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/medications-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Return statements that match the given status"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
*/
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
//* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least an id value and **MAY** provide both the Type and id values."

// Observation
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
/* not in QEDm PDF
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
*/
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Observation
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation"
// TODO might need to add the profiles from ODH
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/StructureDefinition/vitalsigns"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
// QEDm didn't mention vitalsigns, but it is now required in FHIR core, so it is worth mentioning. IPA is SHALL, since we didn't have this before then I introduce it as MAY
* rest.resource[=].supportedProfile[=].extension.valueCode = #MAY
// QEDm adds ODH profiles
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-CombatZonePeriod"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-EmploymentStatus"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-OccupationalDataForHealth"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-PastOrPresentJob"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-RetirementDate"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/PCC/ODH/StructureDefinition/odh-UsualWork"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The classification of the type of observation"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The code of the observation type"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
// added date modifiers to documentation element
* rest.resource[=].searchParam[=].documentation = "Obtained date/time. If the obtained element is a period, a date that falls in the period. The date modifiers `ge`,`le`,`gt`,`lt` SHALL be supported."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The status of the observation"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #MAY
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
// Different note than IPA
* rest.resource[=].searchParam[=].documentation = "The Clinical Data Consumer SHALL support at least one of the search parameters combinations."

// Patient
/* see PDQm
* rest.resource[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "family"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "gender"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "birthdate"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "family"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "birthdate"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "gender"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Patient
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient"
* rest.resource[=].documentation = "Servers SHALL support the capability for a client application to access the patient record using any of the following API calls:\n\n```GET [url]/Patient/[id]```\n\n```GET [url]/Patient?_id=[id]```\n\n```GET [url]/Patient?identifier=[identifier]```\n\nServers are not required to support any additional search parameters, and clients SHOULD not expect servers to do so.\n\nAdditional rules and guidance for supporting `Patient.link`: \n- The server:\n    - SHALL have no more than one Patient with a status of active = \"true\" *from the server being queried* \n    - MAY include inactive patients on the *same server*\n    - MAY include inactive or active patients from a *different server*\n    - When returning a [search Bundle](http://hl7.org/fhir/bundle.html) that contains more than one Patient record for the same patient, the Patient record(s) SHALL use the `Patient.link` attribute to cross-link the Patient resources.\n- The client:\n    - SHALL be able to follow the link(s) to the other Patient resource(s) and understand the direction of the link (in other words, which Patient is linked to which other Patient)\n    - SHALL understand the `Patient.link.type` code which defines the type of link between this Patient resource and another Patient resource\n    - SHALL be aware of the linked Patient `active` flag and that inactive patients may have relevant information"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "birthdate"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-birthdate"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "A client **SHALL** provide a value precise to the *day*.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nA server **SHALL** support a value a value precise to the *day*."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "family"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-family"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "gender"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-gender"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide at least a code value and **MAY** provide both the system and code values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL** support both."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "given"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-given"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Patient-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The client **SHALL** provide both the system and code values.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe server **SHALL NOT** support only code values."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Patient-name"
* rest.resource[=].searchParam[=].type = #string
*/

// Parctitioner
/* see mCSD
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].type = #Practitioner
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitioner"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"

* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].type = #PractitionerRole
//* rest.resource[=].profile = "http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-practitionerrole"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchInclude[0] = "PractitionerRole:endpoint"
* rest.resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #transaction
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #batch
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #search-system
* rest.interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction[=].extension.valueCode = #MAY
* rest.interaction[=].code = #history-system
*/

// Unique to QEDm that are not in IPA
// DiagnosticReport
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "category"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #DiagnosticReport
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The classification of the type of observation"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The code of the observation type"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
// added date modifiers to documentation element
* rest.resource[=].searchParam[=].documentation = "Obtained date/time. If the obtained element is a period, a date that falls in the period. The date modifiers `ge`,`le`,`gt`,`lt` SHALL be supported."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference

// Procedures
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Procedure
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
// added date modifiers to documentation element
* rest.resource[=].searchParam[=].documentation = "Obtained date/time. If the obtained element is a period, a date that falls in the period. The date modifiers `ge`,`le`,`gt`,`lt` SHALL be supported."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference

// Encounter
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].extension[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "patient"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "date"
* rest.resource[=].extension[=].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].type = #Encounter
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchRevInclude = "Provenance:target"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest.resource[=].searchParam[=].type = #date
// added date modifiers to documentation element
* rest.resource[=].searchParam[=].documentation = "Obtained date/time. If the obtained element is a period, a date that falls in the period. The date modifiers `ge`,`le`,`gt`,`lt` SHALL be supported."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference


// Provenance
* rest.resource[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension.valueCode = #SHOULD
* rest.resource[=].type = #Provenance
* rest.resource[=].supportedProfile[+] = "https://profiles.ihe.net/ITI/mXDE/StructureDefinition/IHE.ITI.mXDE.Provenance"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].updateCreate = false
* rest.resource[=].conditionalCreate = false
* rest.resource[=].conditionalUpdate = false
* rest.resource[=].conditionalDelete = #not-supported
* rest.resource[=].referencePolicy = #resolves
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "target"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Provenance-target"
* rest.resource[=].searchParam[=].type = #reference





---

// File: input/images-source/ActorsAndTransactions.plantuml

@startuml
agent "Clinical Data Consumer" as Client
agent "Clinical Data Source" as Server
Client -- Server : "Mobile Query Existing Data [PCC-44] ↓"
@enduml


---

// File: input/images-source/PCC-44-seq.plantuml

@startuml
hide footbox
participant "Client" as Client
participant "Server" as Server
activate "Client"
activate "Server"
"Client" -> "Server" : 1. Go Query [PCC-44]
"Server" --> "Client" : 2. Go Response [PCC-44]
deactivate "Client"
deactivate "Server"
@enduml


---

// File: input/images-source/usecase1-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
participant "Clinical Data Consumer" as Client
participant "Clinical Data Source" as Server
activate "Client"
"Client" -> "Server" : 1. Mobile Query Existing Data Request [PCC-44]
activate "Server"
"Server" --> "Client" : 2. Mobile Query Existing Data Response [PCC-44]
deactivate "Client"
deactivate "Server"
@enduml


---

// File: input/images-source/usecase2-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
participant "Clinical Data Consumer \n[Grouped with MHD Document Consumer\nand mXDE Data Element Provenance Consumer]" as Client
participant "Clinical Data Source\n[Grouped with mXDE Data Element Extractor]" as Server
participant "MHD Document Responder" as MHD
activate Client
Client -> Server : 1. Mobile Query Existing Data Request [PCC-44]
activate Server
Server -> Server : Add Provenance Information
Server --> Client : 2. Mobile Query Existing Data Response [PCC-44]
deactivate Server
Client -> Client : consume Provenance
Client -> MHD : Retrieve Document Request [ITI-68]
activate MHD
Client <-- MHD : Retrieve Document Response [ITI-68]
deactivate Client
deactivate MHD
@enduml


---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/PCC.QEDm/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/PCC.QEDm/issues

---

