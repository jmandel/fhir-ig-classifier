File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/allartifacts.md

This implementation guide defines a number of FHIR Profiles, ValueSets and CodeSets for Canadian Use and uses others from the base FHIR Specification directly without modification.

### <a href="artifacts.html">Canadian Artifacts</a>
### <a href="vitalsigns-profiles.html">Vital Signs Profiles</a>

Each profile defines the minimum mandatory elements, extensions and terminology requirements that MUST be present. For each profile, requirements and guidance are given in a simple narrative summary. A formal hierarchical table that presents a logical view of the content in both a differential and snapshot view is also provided along with references to appropriate terminologies and examples.

### Status

The content of this release has not yet been balloted through HL7 Canada but each of the profiles have gone through [various levels of review](developmentprocess.html#review-process) by the Canadian FHIR community.

All artifacts in this specification are assigned a “Maturity Level”, known as FMM (after the well known CMM grades). The FMM level can be used by implementers to judge how advanced - and therefore stable - an artifact is.

| Profile <br> | Profile Maturity <br> Level <br> | Substream <br>Review Status <br> | Due Diligence<br> Review Status <br> |
|---|---|---|---|
| AllergyIntolerance Profile | 1 | Complete | Ontario eReferral, IPS |
| Condition Profile | 1 | Complete | Ontario eReferral, IPS |
| Device Profile (Implantable) | 0 | Partial - Paused until SME available | Not Complete |
| Device Profile (Medical and Non-medical) | 0 | Partial - Paused until SME available | Attempted against IPS profile, pausing until similarly scoped profile available |
| DiagnosticReport Profile | 0 | Complete, 2nd Review Round review will resume after DDR | PHI Access, IPS |
| DiagnosticReport for Report and Note Profile | 0 | Complete | IPS |
| Document Reference Profile | 0 | Complete | Not Complete |
| Encounter Profile | 0 | Complete | Not Complete |
| Goal Profile | 0 | Complete | Not Complete |
| Immunization Profile | 1 | Complete | DHIR, IPS, PHI Access |
| ImmunizationRecommendation Profile | 1 | Complete | DHIR |
| Location Profile | 1 | Complete | PPR, Ontario eRefferal |
| Medication Profile | 1 | Complete | PrescribeIT, IPS |
| MedicationAdministration Profile | 0 | Complete | Not Complete |
| MedicationDispense Profile | 1 | Complete | PrescribeIT, PHI Access |
| MedicationRequest Profile | 1 | Complete | PrescribeIT |
| MedicationStatement Profile | 1 | Complete | IPS |
| Observation Profile (General) | 1 | Complete | IPS |
| Observation Profile (Laboratory Results) | 0 | Complete, 2nd Review Round will resume after DDR | PHI Access |
| Organization Profile | 1 | Complete | DHIR, PrescribeIT |
| Patient Profile | 1 | Complete | PCR, DHIR, Ontario eReferral |
| Practitioner Profile (General) | 1 | Complete | PPR, DHIR, Ontario eReferral, PrescribeIT |
| Practitioner Profile (Provider Registry) | 1 | Complete | PPR |
| PractitionerRole Profile (General) | 1 | Complete | PPR |
| PractitionerRole Profile (Provider Registry) | 1 | Complete | PPR |
| Procedure Profile | 1 | Complete | IPS |
| ServiceRequest Profile | 0 | Complete | Ontario eReferral |

<!-- Todo: examples, capabilitystatement, TestScenario? -->


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/developmentprocess.md

This section outlines the process and approach that governed how the profiles in this implementation guide were developed and matured.

### Background

Work began on the CA Baseline in January 2019 as a workstream under the Infocentral FHIR Implementations Working Group. The work was undertaken by a grassroots community of Canadian implementation guide authors, implementors, standards experts and vendors to address the problem of siloed Canadian FHIR-based integration project siloes that were leading to FHIR concepts (resources) being adopted & profiled differently in different projects, contexts, and jurisdictions (i.e. Canadian provinces & territories).

#### Problem Statement

A lack of an available national set of Baseline FHIR Profiles will result in applications and source systems needing to ‘start from scratch’ for each jurisdiction that has implemented a particular use case differently, straining developments costs and willingness for vendors to implement further in the Canadian market. It is understood that implementations such as mHealth applications (e.g., Apple Health), CDS Hooks, and other SMART on FHIR applications require a minimum level of consistency in FHIR Profile structure definitions across implementations in order to have widespread adoption and efficacy.

#### Intent
The CA Baseline exposes the implementation guide and vendor community to what concepts can be expected to be supported across jurisdictions today.

Implementation Guide Authors:
When implementation guide authors leverage the profiles as a starting point, constraints like "Must Support" flag and cardinality are inherited and preferred value sets are more likely to used in the derived implementation guide.

Through derivation of profiles, concepts that were common across existing implementations become ubiquitous in future implementations.

Vendors:
Published baseline profiles offer vendors a stepping stone to begin aligning their systems to Canadian concepts. While vendors will still need to configure their systems to additional constraints to support specific implementations and use cases, conforming to the Baseline will offer vendors a head start across all projects. Consistency across jurisdictions will also mean reduced time, money, and effort spent on implementations by not having to start over with each jurisdictions.

#### Boundaries
- The objective of the Canadian Baseline is not use case driven.
- Implementors are not expected to build an application purely against the Canadian Baseline Profiles. Rather, they should be building their software against jurisdiction or project-specific Implementation Guides that are derived from the CA Baseline)
- The Canadian Baseline Profiles are not about driving what implementers need to do but rather what Canadian Implementation Guide authors need to do.
- The Canadian Baseline Profiles need to be the set of requirements that all Canadian Implementation Guides are capable of incorporating into their guides

### Roadmap to Interoperability
The Baseline is not a silver bullet to Interoperability in Canada, but it is a critical stepping stone in reducing the siloes and improving the consistency across the Canadian Landscape.

There is appetite in Canada's standards and governance community to establish a Canadian Core with stricter conformance that would be enforceable through contractual agreements and jurisdictional procurement practices.

While the Canadian Baseline will likely evolve into or offset a large portion of this work, a larger governance structure is needed to accomplish this goal.

The Canadian Baseline can begin encouraging consistency among various Canadian implementation guides in parallel to the efforts to convene jurisdictional governing bodies and stakeholders to come to a consensus on the set of core use cases and contractual obligations.

#### Comparing a Baseline to a Core Implementation Guide

| Category | Baseline | Core |
|---|---|---|
| What support is needed from jurisdictions? | Public access to jurisdiction’s FHIR Implementation Guides (i.e. so we can see what constraints a jurisdiction’s projects currently have), use of the Canadian Baseline profiles as a starting point for jurisdictional implementation guides | Policy requirements, contract language, or incentives attached to use of the Core profiles, Jurisdictions need to identify and agree on the use cases / workflows supported by the Core profiles |
| Will implementers align to this without financial / jurisdictional / policy incentives? | Yes, minimal constraints with presence in existing implementations is a natural incentive in aligning new implementation guides to the baseline profiles & their minimum expectations | No. Restrictive constraints that require considerable configuration to be compliant can be a stumbling block in adoption to the profiles if incentives/disincentives are not present. |
| Origin | Community, Essentially “here are the constraints that are out there in FHIR implementations right now” | Policy, “These 10 use cases MUST be supported by every digital health product in the province, country” |
| Frequency / strength of constraints (re: both structure definition and business rules / usage notes) | Few strong constraints, only where deemed that any possible use of a concept would do it in the same way | More constraints, Tighter constraints, Each Core profile is designed to support a specific use case, so more constraints can be expected of implementers |

#### Maturing the Baseline
The process to develop and mature the Canadian Baseline Implementation Guide is outlined below.

<br>
<img src="BaselineRoadmap.png" alt="Baseline Maturity Roadmap" width="1200"/>
<br>

#### Profile Development Process
A profiling workstream and a governance workstream were established under the Infocentral FHIR Implementations Working Group.

The Governance stream developed a guiding document and terms of reference that defined the purpose and scope of the grassroots initiative. The Governance stream also developed the Baseline Maturity Roadmap that guided the review process found below.

The Profiling stream developed a process for review and split the 24 initial profiles (from the US Core profiles) into three substreams: Entity, Medication, and Clinical. These streams were led by Shamil Nizamov, Igor Sirkovich, and Scott Prior respectively. The vast majority of the initial 24 profiles are in-scope, however a small sub-section have been tabled until further notice; the decision was made to prioritize the review (both internal to the Community and externally) of the FHIR Profiles whose R4 Resources had reached a higher maturity level.

- The goal of the substreams was to position community leaders and subject matter experts to participate in profiling efforts related to their expertise and to expedite the profiling activities so they could occur in parallel.
- Substreams met weekly and used the Baseline principles developed in the Guiding Document.
- Profiling review periods and the updates from each of the substream were provided to the larger community on a bi-weekly basis during the profiling update calls.
- Participants on the substream calls varied based on the profile being reviewed, but included regional implementation guide authors, local and regional implementors, vendors, clinicians, and standards/terminology experts.
- Additional feedback was collected from the community via email and the projects Github issue log. Feedback issuers were reminded to participate in the calls that their feedback/suggestion was being reviewed and discussed.
- After agreement on the proposed changes on the call, the changes were tracked on spreadsheets and modifications were made to the specification in branched repositories.
- A change control process was put into place whereby substream leaders posted pull requests to the Github repository which were reviewed and accepted by a volunteer change manager (Russ Buchanan).

#### Review Process
The substreams reviewed proposed profiling changes with participants as part of the development process.

After the substreams completed their "first pass" at the profiles they were published to the Github repository and available through the Continuous Integration Build and Simplifier projects.

An initial due diligence review was identified as a critical process in maturing the profiles prior to being exposed to the larger FHIR community and tested in connectathons.
The review was intended to increase the fidelity of the profiles by comparing the initial draft of Canadian Baseline Profiles to a variety of domains and ‘live’ Canadian FHIR implementations. Non-Canadian, international specifications were also suggested by the Community at this stage, in an attempt to cover as many domains and use cases as possible.

The following domains and "live" implementation guides were identified for the due diligence review:
- Lab (ACCESS Gateway - Patient & Provider Access to Lab Results, Ontario Lab Information System FHIR Specification)
- Pharmacy/Medication (Alberta / Saskatchewan v3 Implementation, PrescribeIT specification, Ontario's Digital Health Drug Repository)
- Immunizations
- Registries (Ontario's Provincial Provider Registry, Ontario's Provincial Client Registry, Saskatchewan / British Columbia Jurisdictional Implementations - In Development)
- Patient Summaries (International Patient Summary)
- eReferral (Ontario's eReferral Specification)
- COVID-19 (LOGICA COVID-19 FHIR Specification)

### Implementation Guide Maturity
In the interest of exposing the internally reviewed profiles out to the community for more rapid feedback, we've identified the FHIR maturity level of the profiles and have noted the profiles that have gone through the initial due diligence review on the [artifacts page](artifacts.html).

#### FHIR Maturity Level
All artifacts in this specification are assigned a “Maturity Level”, known as FMM (after the well known CMM grades). The FMM level can be used by implementers to judge how advanced - and therefore stable - an artifact is. The following FMM levels are defined:

FMM 0 = The resource or profile (artifact) has been published on the current build. This level is synonymous with Draft.

FMM 1 = DRAFT 0 PLUS the artifact produces no warnings during the build process and the responsible WG has indicated that they consider the artifact substantially complete and ready for implementation.

FMM 2 = FMM 1 PLUS the artifact has been tested and successfully supports interoperability among at least three independently developed systems leveraging most of the scope (e.g. at least 80% of the core data elements) using semi-realistic data and scenarios based on at least one of the declared scopes of the artifact (e.g. at a connectathon). These interoperability results must have been reported to and accepted by the responsible working group.

FMM 3 = FMM 2 PLUS the artifact has been verified by the work group as meeting the Conformance Resource Quality Guidelines; has been subject to a round of formal balloting; has at least 10 distinct implementer comments recorded in the tracker drawn from at least 3 organizations resulting in at least one substantive change.

FMM 4 = FMM 3 PLUS the artifact is published in a formal publication (e.g. a FHIR Implementation Guide), and implemented in multiple prototype projects. As well, the responsible work group agrees the artifact is sufficiently stable to require implementer consultation for subsequent non-backward compatible changes.

FMM 5 = FMM 4 PLUS the artifact has been published in two formal publication release cycles at FMM1+ (i.e. Trial Use level) and has been implemented in at least 5 independent production systems.

Normative the artifact is now considered stable.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/downloads.md

### Package File

The following package file includes an NPM package file used by many of the FHIR tools.  It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of the this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the overview on validating [FHIR profiles and resources]({{site.data.fhir.path}}validation.html):

- [Package](package.tgz){::download="true"}

<!--### Examples

all the examples that are used in this Implementation Guide available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)-->

### Downloadable Copy of Entire Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy](full-ig.zip)


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/general-guidance.md

This section outlines important definitions and interpretations and requirements common to all  actors used in this guide.
The conformance verbs used are defined in [FHIR Conformance Rules].


### Must Support
Base or baseline specifications are specifications that other implementation guides build on top of. When applying constraints, this guide does so with the understanding that any profiling constraints (must support, cardinality, invariants, slicing, etc.) will be inherited into any profiles that derive from them.

Must support constraints are particularly challenging for baseline specifications because the FHIR Standard has enforced that every implementation guide declares the meaning and expectations for a must support flag in their guide. Much like other derived constraints, a must support flag that is inherited into a derived profile can not have a looser definition from the profile the flag originates from. The definition in the derived profile can keep or tighten the definition for must support.

Therefore, the CA Baseline has developed a lightweight must support definition that does not impede or prescribe what a client or server does with the data, so as not to impede each implementation's ability to tighten and define expectations for use under their own business rules, regulations, policies, etc.

**Must Support Definition:**
Vendors in Canada have the base capability to support the elements, with the expectation that business rules, regulations, etc. can determine what of these elements is used and how.

Given the challenge that comes from inheritance of must support flags into implementation guides that have strict definitions for must support (e.g., must be able to display this value to an end user), the CA Baseline has only applied must support flags on the elements that would be expected to be flagged as must support across the majority of Canadian Implementation Guides.

**Must Support Expectations: Backbone & Child Elements**
Occasionally, Must Support flags are applied to elements that fall under a backbone element that is not considered Must Support. This profiling is intended to communicate conditional expectations IF the implementation uses/supports the backbone element.

It is *not* intended to incur the expectation that systems have to support the backbone element and the child elements noted underneath if they would have otherwise not included them in their profile. This modeling will continue to be evaluated for impacts for derived profiles.

**Should Support Expectations:**
This specification may also identify elements that are "should support" using usage notes. These are elements that may not reasonably meet the rule above of being in the majority of Canadian Implementation Guide, but that the CA Baseline is encouraging further proliferation of.

### Cardinality and MustSupport Definitions

|  | MustSupport | Cardinality | Query Scenario <br> (Server) | Query Scenario <br> (Client)  | Create / Update Scenario <br> (Client)  | Create / Update Scenario <br> (Server)  |
|---|---|---|---|---|---|---|
| A | No | 0..1, 0..* | MAY send/relay data corresponding to this element (not required) <br> <br> SHOULD NOT send element if the data is not available (not collected or null value) | SHOULD NOT assume this element will be received <sup>1, 2</sup> | MAY send/relay data corresponding to this element (not required) <br> <br> SHOULD NOT send element if the data is not available (not collected or null value) | MAY ignore data received in the element <sup>1</sup>
| B | No | 1..1, 1..* | SHALL send/relay the data element populated with a value <br> <br> MAY use a fixed value or rule to populate element with an appropriate value | SHOULD assume this element will be received and may be a fixed value <sup>1, 2</sup> | SHALL send/relay the data element populated with a value <br> <br> MAY use a fixed value or rule to populate element with an appropriate value | MAY ignore data received in the element <sup>1</sup>
| C | Yes | 0..1, 0..* | SHALL send/relay the data element populated with a value (if available and appropriate) <br> <br> SHOULD NOT send element if the value is null |  SHOULD assume this element will be received if data is available <sup>1, 2</sup> <br> <br> SHOULD assume that a missing data element in response means that a value for that data element was not available<sup>1, 2</sup> | SHALL be capable of sending/relaying the data element to the server <br> <br> SHOULD NOT send element if the value is null | SHALL be capable of receiving/relaying/storing the data for this element <sup>1</sup>
| D | Yes | 1..1, 1..* | SHALL send/relay the data element populated with a value | SHOULD assume a value for this data element will be received <sup>1, 2</sup> | SHALL send/relay the data element populated with a value to the server | SHALL be capable of receiving/relaying/storing the data for this element <sup>1</sup>

<sup>1</sup> Business rules, regulations, policies, additional implementation guides should determine what the server will do with the data it receives (i.e., store, persist, etc.)

<sup>2</sup> Scope of the CA Baseline Profiles does not include prescriptive constraints on what a Client or Server has to do with the data it receives (i.e., ignore, display, store, persist, etc.).*

**Client = Requestor, Server = Responder**

#### Conformance Language:

| Verb | Definition |
|---|---|
| **SHALL** | an absolute requirement for all implementations |
| **SHALL NOT** | an absolute prohibition against inclusion for all implementations |
| **SHOULD / SHOULD NOT** | A best practice or recommendation to be considered by implementers within the context of their particular implementation; there may be valid reasons to ignore an item, but the full implications must be understood and carefully weighed before choosing a different course |
| **MAY** | This is truly optional language for an implementation; can be included or omitted as the implementer decides with no implications |

#### Examples

##### Line C: Patient.birthDate - MustSupport = Yes, Cardinality = 0..1

###### Query Scenario

<br>
<img src="C_Query.png" alt="Create / Update Scenario" width="200"/>
<br>

**Requirement:**

The Server SHALL be able to return a BirthDate if it is known.  (i.e., It must be stored on the server or retrievable in some way.)

(The BirthDate MAY be unknown and therefore not available to send.)

**Process:**

1. Client sends GET request to Server for a Patient (their demographics); included in the request is a query parameter (e.g. Patient’s HCN), so the Server knows which Patient’s info to return
1. Server provides a response which includes the requested Patient’s information
  1. IF the Server has a Birth Date for the Patient, it MUST be included in the response
  1. IF the Patient’s Birth Date is not found on the Server, the Server SHOULD NOT send a null-value Birth Date and instead should remove the Birth Date element entirely from the response
1. Client receives the response from the Server which includes the requested Patient’s information, which includes the Patient’s Birth Date (unless 3b is true)
1. More prescriptive instructions on what exactly the Client needs to be able to DO with the Birth Date element it receives from the Server may be provided in additional, project-specific requirements, but these fall outside the scope of the Must Support flag

###### Create / Update Scenario
<br>
<img src="C_CreateUpdate.png" alt="Create / Update Scenario" width="200"/>
<br>

**Requirement:**

The Client SHALL be able to send a BirthDate if it is known.  (i.e., It must be stored on the client or retrievable in some way.)

The Server SHALL be able to store a BirthDate if it is provided.  (i.e., It must be stored on the server or somewhere where it can be retrieved later.)

(The BirthDate MAY be unknown and therefore not available to send.)


**Process:**

1. Client performs SUBMIT function, and sends a Patient’s information to the Server
  1. IF the Client has a Birth Date for the Patient, it MUST be included in the sent information
  1. IF the Client doesn’t know a Birth Date for the Patient, the Client SHOULD NOT send a null-value Birth Date and instead should remove the Birth Date element entirely from the resource that is being pushed to the server
1. Server MUST have the capacity to receive / support the Birth Date element once it is received from the Client
1. More prescriptive instructions on what exactly the Server needs to be able to DO with the Birth Date element it receives from the Client may be provided in additional, project-specific requirement, but these fall outside the scope of the Must Support flag


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/index.md

### Introduction

This implementation guide is provided to support the use of FHIR®© in a Canadian context.

This document is a working specification that is expected to be tested and referenced by FHIR®© system producers and implementation guide authors to enable feedback to improve the content of this guide.

As the output of a National Baseline Initiative, this implementation guide provides basic interoperability expectations for human-patient systems in the Canadian space. The goal of this specification is to expose the implementation guide author community and vendor community to a set of profiles that identify the data elements, code systems and value sets that are commonly present across Canada for a given FHIR resource (e.g., patient, medication, etc.) regardless of use case, jurisdiction or implementation.

The Canadian Baseline Profiles are not expected to be implemented "out-of-the-box". They are intended to be a starting point that more specific profiles (driven by jurisdictional, use-case, and project-specific needs) can build derived profiles from. By exposing a minimal and consistent set of expectations across local and jurisdictional guides, we intend to create a more transparent and uniform landscape for the vendor marketplace to begin aligning to.

Existing Canadian and International implementation guides (e.g., Canadian eReferral, Ontario PPR, US Core, IPS, etc.) were used as an initial frame of reference that the Canadian Baseline profiles further relaxed / constrained / extended to make sense in the Canadian context.

### Status

This guide is a **living document** that includes notes and profiles that continue to evolve as they undergo a working group review process and a Due Dillegence Review against existing Canadian FHIR Implementation Guides before being exposed to the larger FHIR community for further maturation through feedback and testing.

**The profiles are currently undergoing reconciliation after a period of community review through our Due Dillegence Review (DDR) process.**
- Information about the development and review process can be found [here](http://build.fhir.org/ig/HL7-Canada/ca-baseline/branches/master/developmentprocess.html)
  - You can follow along with our progress as a working group on the [Infocentral FHIR Implementation Working Group page](https://infocentral.infoway-inforoute.ca/en/collaboration/wg/fhir-implementations)
- The list of which profiles have undergone DDRs against existing Canadian FHIR Implementation Guides can be found [here](http://build.fhir.org/ig/HL7-Canada/ca-baseline/branches/master/allartifacts.html)
- Proposed and past changes to profiles are tracked in the [Simplifier issue log](https://simplifier.net/cabaseline/~issues) that can be accessed after logging in to Simplifier and navigating to the issues tab of the project or desired profile. The commnunity is encouraged to review the issues and add issues of their own after reading the [review and development process page](http://build.fhir.org/ig/HL7-Canada/ca-baseline/branches/master/developmentprocess.html).
- The [GitHub repository for this CI build be found here](https://github.com/HL7-Canada/ca-baseline).

### Principles

The following principles were applied when creating the profiles:
- *Start with the profiles outlined in the US Core and avoid arbitrary differences* between Canadian and other international implementation guides to:
  - increase the opportunity for Digital Health / mHealth application reuse across North America
  - reduce developer / vendor effort to adapt to Canadian requirements
- *Only impose additional constraints when strictly necessary* making adjustments as they make sense in the Canadian context. Aligning to the CA Baseline should not **prevent** implementors from participating in specific use cases and/or conforming to existing Canadian implementation guides
- *Provide direction* and set minimal expectations on a few common terminologies (e.g., CCDD, PCLOCD, etc.).
- *Focus on what Canadian implementations currently support* not what they "ought to support". Emerging Canadian concepts can be socialized through extensions, examples, and usage notes but should not be constrained by the Baseline as to be prescriptive.
- *Be consistent* and informed by other pan-Canadian standards where possible.


### Base vs. Baseline vs. Core

The international FHIR community is evolving towards further differentiation between the use of Base, Baseline, and Core terminology to categorize implementation guides - readers should be aware that the definitions below may be refined as formal definitions are provided by HL7 International. At the time that this implementation guide was authored, the following patterns were discerned and proposed by the CA FHIR Baseline Community:

**National Base Implementation Guides** (e.g., Australian Base, Germany Base, Netherlands Base) provide awareness of localized concepts but do not apply cardinality constraints or required binding strengths that enforce conformance to those concepts. In rare cases, cardinality constraints may be applied to elements that have been [sliced](https://www.hl7.org/fhir/profiling.html#slicing) to ensure the presence of sub-elements if a particular slice is used (ex: identified coding system). Must support flags are not utilized in Base National Profiles.

**National Baseline Implementation Guides** (e.g., Canadian Baseline) provide awareness of localized concepts and apply minimal cardinality constraints and preferred binding strengths only where appropriate and when expected given national context. In some scenarios, more restrictive constraints may be found on elements that have been [sliced](https://www.hl7.org/fhir/profiling.html#slicing) to support meaningful conformance when standard heterogenous concepts are expected (ex: fixed values for specific systems the slice applies to). Must Support flags are utilized to identify elements that are expected to be supported broadly regardless of use case.

**National Core Implementation Guides** (e.g., US Core) define a set of conformance requirements that enforce alignment to localized concepts through cardinality constraints, must support flags, and required/extensible binding strengths. Conformance to these profiles is tied to regulatory and/or contractual agreements in order to necessitate adoption to these more prescriptive specifications. To date, National "Cores" may or may not be scoped to specific use cases (e.g., Norway Core vs US Core) however they are a reflection of additional requirements that are expected to be included in implementations in a nation or region.

### CA Baseline Profiles

The list of CA Baseline Profiles can be found [**here**](allartifacts.html).

Each profile defines the minimum mandatory elements, extensions and terminology requirements that MUST be present. For each profile, requirements and guidance are given in a simple narrative summary. A formal hierarchical table that presents a logical view of the content in both a differential and snapshot view is also provided along with references to appropriate terminologies and examples.

Guidance, Capability Statements, and other have not yet been reviewed and added.

### Authors and Contributors 

The CA FHIR Baseline is a community developed specification that was made possible through the efforts and dedication of so many in our [Canadian FHIR Implementer community](https://infocentral.infoway-inforoute.ca/en/collaboration/wg/fhir-implementations). The true list exceeds what we've been able to capture and is expected to grow as our community reviews and refines it.


| Role  | Role Description| Name |
| --- | --- | -- |
| **Primary Authors** | Anyone historically involved in the  authoring/development of the spec (including stream hosts) |Russ Buchanan, &nbsp;&nbsp; Sheridan Cook, &nbsp;&nbsp; Shamil Nizamov, Scott Prior, &nbsp;&nbsp; Michael Savage, &nbsp;&nbsp; Elliot Silver, &nbsp;&nbsp; Igor Sirkovich |
| **Editors** | Anyone who has pushed updates/PRs to the spec (not otherwise an author) | Piers Hollott, &nbsp;&nbsp; Lloyd McKenzie, &nbsp;&nbsp; Arthur Nonay, &nbsp;&nbsp; Mikael Rinnetmaki, &nbsp;&nbsp; Inderpal Singh, &nbsp;&nbsp; Garrett Stubbings |
| **Contributors** | Participants in the Entities, Medications, and Clinical Profiling Sub-Streams, Vocal contributors in governance and/or profiling calls, issue submitters | Ian Bekker, &nbsp;&nbsp; Anne Belford, &nbsp;&nbsp; Alex Bennett, &nbsp;&nbsp; Michael Boivin, &nbsp;&nbsp; Fang Cao, &nbsp;&nbsp; Lorraine Constable, &nbsp;&nbsp; Ramandeep Dhanoa, &nbsp;&nbsp; Jean Duteau, &nbsp;&nbsp; Finnie Flores, &nbsp;&nbsp; Joel Francis, &nbsp;&nbsp; Alex Goel, &nbsp;&nbsp; Joanie Harper, &nbsp;&nbsp; Maria Hu, &nbsp;&nbsp; Anibal Jodorcovsky, &nbsp;&nbsp; Mukesh Kashyap, &nbsp;&nbsp; Paul Knapp, &nbsp;&nbsp; Marc L'Arrivee, &nbsp;&nbsp; Francis Lau, &nbsp;&nbsp; Adesh Maharaj, &nbsp;&nbsp; Dean Matthews, &nbsp;&nbsp; Randy Nonay, &nbsp;&nbsp; Ron Parker, &nbsp;&nbsp; Anil Patel, &nbsp;&nbsp; Melva Peters, &nbsp;&nbsp; Rita Pyle, &nbsp;&nbsp; Derek Ritz, &nbsp;&nbsp; Philip Sales, &nbsp;&nbsp; Khushwinder Sekhon, &nbsp;&nbsp; Harsh Sharma, &nbsp;&nbsp; Sisira De Silva, &nbsp;&nbsp; Dan Simic, &nbsp;&nbsp; Ken Sinn, &nbsp;&nbsp; Janice Spence, &nbsp;&nbsp; Erik Uittien, &nbsp;&nbsp; Tony Waldschmidt, &nbsp;&nbsp; Thomas Zhou |

-----

Contact: [hl7canada@infoway-inforoute.ca](mailto:hl7canada@infoway-inforoute.ca)


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/security.md

FHIR transactions often make use of patient-specific information which could be exploited by malicious actors resulting in exposure of patient data. For this reason, all transactions must be secured appropriately with access to limited authorized individuals, data protected in transit, and appropriate audit measures taken.

Implementers should be aware of the [security considerations] associated with FHIR transactions, particularly those related to:

-   [Communications]
-   [Authentication]
-   [Authorization/Access Control]
-   [Audit Logging]
-   [Digital Signatures]
-   [Security Labels]
-   [Narrative]

**Security Conformance Requirements may be added here later.**


  [FHIR Communications]: {{site.data.fhir.path}}security.html#http
  [Smart On FHIR]: http://fhir-docs.smarthealthit.org/argonaut-dev/authorization/backend-services/
  [FHIR Security Labels]: {{site.data.fhir.path}}security-labels.html
  [FHIR Provenance]: {{site.data.fhir.path}}provenance.html
  [FHIR Digital Signatures]: {{site.data.fhir.path}}security.html#digital%20signatures

  [security considerations]: {{site.data.fhir.path}}security.html
  [Communications]: {{site.data.fhir.path}}security.html#http
  [Authentication]: {{site.data.fhir.path}}security.html#authentication
  [Authorization/Access Control]: {{site.data.fhir.path}}security.html#authorization/access%20control
  [Audit Logging]: {{site.data.fhir.path}}security.html#audit%20logging
  [Digital Signatures]: {{site.data.fhir.path}}security.html#digital%20signatures
  [Security Labels]: {{site.data.fhir.path}}security-labels.html
  [Narrative]: {{site.data.fhir.path}}security.html#narrative
  [AuditEvent]: {{site.data.fhir.path}}auditevent.html
  [Audit Logging]: {{site.data.fhir.path}}security.html#audit
  [Consent]: {{site.data.fhir.path}}consent.html


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-ext-birthsex-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

Indentifies the sex of a Patient at birth.

**Note** this extension is copied from [us-core-birthsex](https://build.fhir.org/ig/HL7/US-Core-R4/StructureDefinition-us-core-birthsex.html) as a proposed approach to support similar requirments in Canada.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-ext-estimated-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

Indicates that a date entered is an estimate.  Generalized from the [ca-on-extension-estimated-date](https://simplifier.net/DigitalHealthImmuniz/ca-on-extension-estimated-date) to allow estimated dates to be entered when Immunizations are documented retrospectively.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-ext-servicelanguage-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

Identifies a language that is used to services are provide services at a Location or Organization.

**Note** this extension was created to meet the requirement of [ext-location-language](https://simplifier.net/ProvincialProviderRe/organizationLanguage) extension used in the ON PPR guide which is semantically different than Resource.language.  The implementation is different, with the intent of being more consistent with the Communication element on the Patient and Practitioner resources.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-ext-versioncode-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

Canadian Jurisdictional Health Numbers (JHN) in (at least) some Jurisdictions have version codes that change as new health cards are issued.

**Assumption**, although version codes can be represented as part of the JHN, it is useful to have a stable identifier for a patient that does not change over time.  Therefore, representing the JHN and Version Code separately, will allow the implementers to support two separate requirements concurrently:
1. access to a unique patient identifier within a jurisdiction
2. the means to validate whether a number provided is currently valid

(There are exceptions to above in cases where patients fail to maintain residency or where health cards are used fraudulently. Very likely others.)


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-allergyintolerance-intro.md

# CA Baseline AllergyIntolerance Profile
This profile sets minimum expectations for the AllergyIntolerance resource to record, search and fetch allergies/adverse reactions associated with a patient. It documents the relevant allergies or intolerances (conditions) for a patient, describing the kind of reaction, agent(s) that cause it, criticality and the certainty of the allergy/adverse reaction.

This profile defines localization concepts for use in the Canadian context.

## Mandatory Data Elements
All elements or attributes within the FHIR specification have cardinality as part of their definition - a minimum number of required appearances and a maximum number of allowable appearances.

Most elements in the FHIR specification have a minimum cardinality of 0, so most elements are not required and subsequently they may be missing from a resource when it is exchanged between systems.

**Required elements in the AllergyIntolerance profile:**
* subject who has the allergy or intolerance (AllergyIntolerance.patient)

## Must Support Data Elements
Some elements are marked as Must Support. This means that implementations generating, receiving, or otherwise using resources with Must Support elements SHALL provide support for those elements in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#cardinality-and-mustsupport-definitions) definition).

The following elements are marked as Must Support in the AllergyIntolerance profile:

**Must Support elements:**
* code of the allergy or intolerance (AllergyIntolerance.code)
* reference to a subject (AllergyIntolerance.patient)
* manifestation of clinical symptoms (AllergyIntolerance.reaction.manifestation)

## Usage Note
The _AllergyIntolerance_ resource instance use could be clinical decision support applications to generate/display warnings about potentially harmful medications; any intolerance to other agents (e.g. intolerance to soaps, dressings, latex, etc.) more relevant for at the bedside care.

 This profile utilizes and recommends some value sets that exist on the Infoway Terminology Gateway and can be assessed by API. Implementors using and/or re-profiling from this profile should be aware that the IGPublisher can not directly resolve the canonical url to value sets that exist on the Infoway Terminology Gateway due to technical limitations and will produce warnings in the qa.txt file when this occurs. These particular warnings have been suppressed in this specification and will need to be suppressed by other IGuide authors looking to leverage this particular service until the limitations are resolved.

### Profile specific implementation guidance

**History of Allergy or Intolerance**

If the patient has been asked and has indicated a history of allergy or intolerance then this information is represented by:
* _AllergyIntolerance.code_ - an appropriate SNOMED CT code
* _AllergyIntolerance.verificationStatus_ element SHALL be one of the following: confirmed | refuted | entered-in-error

If a patient asserts a history of allergy or intolerance then the following elements SHOULD be populated:
* _AllergyIntolerance.criticality_
* _AllergyIntolerance.severity_
* _AllergyIntolerance.type_


**No Allergy**

If a patient has been asked and has indicated no history of allergies or intolerance then this is represented by:
* _AllergyIntolerance.code_ = "716186003" No known allergy (situation) SNOMED CT code
* _AllergyIntolerance.verificationStatus_ element SHALL be one of the following: confirmed | refuted | entered-in-error


**Not Asked**

If the patient has NOT been asked or it is NOT possible to obtain information about any history of allergy or intolerance then this situation is represented with NullFlavor codes:
* _AllergyIntolerance.code_ - NullFalvor code, e.g., "NASK" (Not asked).

If NullFlavor is used then the following elements SHOULD NOT be populated:
* _AllergyIntolerance.clinicalStatus_
* _AllergyIntolerance.verificationStatus_
* _AllergyIntolerance.type_
* _AllergyIntolerance.category_
* _AllergyIntolerance.criticality_

and other allergy related elements.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-allergyintolerance-notes.md

## Verification Status
The _AllergyIntolerance.verificationStatus_ element is optional (i.e., cardinality is 0..1) in this profile since a typical use would involve clinical decision support that produces warnings when potentially dangerous medications/treatments might be prescribed. 

There is potential for confounding/conflicting information if verification status "overrides" a clinical finding of an allergy or intolerance. 

In addition allergies/intolerance are usually reported by the patient and rarely verified probable that this information is not collected and not available, therefore data element is not populated except by default (presumably as "unconfirmed") again leading to problematic data for clinical decision support.

This is also problematic with respect to interoperability considerations.

## Code
If the _AllergyIntolerance.code_ element represents NullFlavor concept (i.e., no known allergy) then the _verificationStatus_ element SHALL be present.

Rational is that recording "no known allergy" without an assessment would a patient safety issue and should not happen. It is not consistent with clinical practice.

## Substance
The identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event uses Substance Code value set with [Example](https://hl7.org/fhir/R4/terminologies.html#example) binding.
Consider use [Canadian Clinical Drug Data](https://tgateway.infoway-inforoute.ca/package/canadianclinicaldrugdatasetccdd) set in case of medication allergy/intolerance, and SNOMED CT for other substances/agents.

## Manifestation
The _AllergyIntolerance.reaction.manifestation_ element is a required element to provide symptoms and/or signs that are observed or associated with the adverse reaction event. 

```diff
-Consider developing a value set from MEDDRA for drug reactions
```


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-condition-intro.md

# CA Baseline Condition Profile
<blockquote class="stu-note">
  <p>This profile is seeking community and implementer feedback on whether further constraints on use of verificationStatus are needed.
  <br>
  <br>

  VerificationStatus has been identified by members of our community as having clinical significance, though standardization around its use is still evolving in the international community (particularly in implementation guidance and value sets). We are currently seeking feedback from implementers on current utilization practices before further strengthening guidance on its use.

  <br>
  

  Feedback can be provided through the <a href="https://simplifier.net/CanadianFHIRBaselineProfilesCA-Core/PatientProfile/~issues">Simplifier issue log for this profile.</a>. Proposed language for inclusion under our Best Practice/Should support section is also welcomed.</p>
</blockquote>

This profile constrains the Condition resource to record a list of problems associated with a patient. It identifies which elements, vocabularies and value sets to be present in the resource when using this profile.

This profile defines localization concepts for use in a Canadian context.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of **0**, which means that they may be missing from a resource when it is exchanged between systems.

**Required elements:**
* code identifying the patient's relevant condition
* reference to a subject

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Canadian Condition profile to aid record matching in databases with many pediatric records.

**Must Support elements:**
* clinical status of the condition
* code identifying the patient's relevant condition
* reference to subject
* onset - estimated or actual date of the condition

## Usage Note
Condition is intended for capturing and querying patient's current and historical problems.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-condition-notes.md

## Clinical Status

Rules derived from the FHIR Condition resource description: 
* _Condition.clinicalStatus_ SHALL be present if _Condition.verificationStatus_ is not entered-in-error and category is problem-list-item.
* _Condition.clinicalStatus_ SHALL NOT be present if verification Status is entered-in-error.

Rational: Most systems will expect a clinicalStatus to be valued for problem-list-items that are managed over time, but might not need a clinicalStatus for point in time encounter-diagnosis.

## Verification Status

The verification status supports the clinical status of the condition.

The verification status element is labeled as a modifier because the status contains the code refuted and entered-in-error that mark the Condition as not currently valid.

The _Condition.verificationStatus_ is optional considering the use case of using the Condition to populate a problem list where clinically documented problems range from general descriptions (e.g. "short of breath") to specific diagnoses with no verification step. 

## Code

The identification of the the client's relevant condition, problem or diagnosis or recording of "problem absent" or of "problems unknown", as interpreted by the provider.

The _Condition.code_ element is [CodeableConcept](https://www.hl7.org/fhir/datatypes.html#codeableconcept) data type meaning that more than one [Coding](https://www.hl7.org/fhir/datatypes.html#codesystem) sub-elements can be present.
One of these Coding sub-elements SHALL use [Health Concern Code](https://tgateway.infoway-inforoute.ca/vs/healthconcerncode) value set from Canada Health Infoway. Other Coding component are transaltion of the HealthConcernCode to other code systems.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-device-intro.md

# CA Baseline Device (Implantable) Profile
<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<p>This profile is seeking broader community and implementer feedback on this profile.
    <br>
    <br>
    The clinical substream review of this profile is paused until a Subject Matter Expert can be found who can speak to the use of implantable device data in Canada. Due to a lack of current Canadian FHIR implementation guides that surface a device profile - this profile has not undergone a Due Diligence Review and should be treated with caution until more community feedback can be acquired. <a href="https://simplifier.net/CanadianFHIRBaselineProfilesCA-Core/deviceprofileimplantable/~issues">Simplifier issue log for this profile</a>.</p>
	</blockquote>
  </div>

This profile sets minimum expectations for the Device resource to record, search, and fetch UDI information associated with a patient's implantable device(s).
It identifies which core elements SHALL be present in the resource when using this profile.

This profile defines core localization concepts for use in the Canadian context.

## Mandatory Data Elements
All elements or attributes within the FHIR specification have cardinality as part of their definition - a minimum number of required appearances and a maximum number of allowable appearances.

Most elements in the FHIR specification have a minimum cardinality of 0, so most elements are not required and subsequently they may be missing from a resource when it is exchanged between systems.

**Required elements in the Device (Implantable) profile:**
* A Unique Device Identifier (UDI) numeric or alphanumeric code (Device.deviceIdentifier):
  * either as the Human Readable Form (HRF) string representation of the barcode (Device.carrierHRF)
  * or the Automatic Identification and Data Capture representation (Device.carrierAIDC)
* The type of the device (Device.type)
* A patient (Device.patient)

## Must Support Data Elements
Some elements are marked as Must Support. This means that implementations generating, receiving, or otherwise using resources with Must Support elements SHALL provide support for those elements in some meaningful way (see Must Support definition).

The following elements are marked as Must Support in the Device (Implantable) profile:

**Must Support elements:**
* Unique Device Identifier (UDI) Barcode string
* distinct identification string
* device manufacturer
* expiration date/time of the device
* lot number of manufacture
* serial number assigned by the manufacturer
* name of the device
* type of the device
* version of the device
* patient

## Usage Note
The following are example usage scenarios for the implantable Device profile:
* Query for a patient's implantable devices
* Record or update a patient implantable device information


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-device-medical-intro.md

# CA Baseline Device (Medical and Non-medical) Profile
This profile sets minimum expectations for the Device resource to record and search for medical and non-medical devices, wearable devices personal health devices, virtual devices such as computer programs and systems, etc., except patient's implantable device(s). 
It identifies which core elements SHALL be present in the resource when using this profile.

This profile defines core localization concepts for use in the Canadian context.

## Mandatory Data Elements
All elements or attributes within the FHIR specification have cardinality as part of their definition - a minimum number of required appearances and a maximum number of allowable appearances.

Most elements in the FHIR specification have a minimum cardinality of 0, so most elements are not required and subsequently they may be missing from a resource when it is exchanged between systems.

**Required elements in the Device (Implantable) profile:**
* The type of the device (Device.type)

## Must Support Data Elements
Some elements are marked as Must Support. This means that implementations generating, receiving, or otherwise using resources with Must Support elements SHALL provide support for those elements in some meaningful way (see Must Support definition).

The following elements are marked as Must Support in the Device (Medical and Non-medical) profile:

**Must Support elements:**
* Device resource identifier
* Unique Device Identifier (UDI) Barcode string
* distinct identification string
* device manufacturer
* date/time when the device was made
* expiration date/time of the device
* serial number assigned by the manufacturer
* name of the device
* type of the device 
* version of the device
* patient

## Usage Note
The following are example usage scenarios for the Medical and Non-medical Device profile:
* To record and query information about Personal Health Devices (PHDs) to be used in remote patient monitoring programs.
* To record and query information about the Virtual Medical Device installed as software on the computer system.

---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-device-medical-notes.md

## Identifier
The _Device.identifier_ specifies a unique instance identifiers assigned to a device by manufacturer. 
This Device profile constrains the use of the Extended Unique Identifier (EUI) such as 64-bit Extended Unique Identifier (EUI-64) or 48-bit Extended Unique Identifier (EUI-48) by fixing the _Identifier.system_ namespace for the identifier value.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-diagnosticreport-intro.md

# CA Core DiagnosticReport (Laboratory Results) Profile
This profile sets minimum expectations for the DiagnosticReport resource to record, search, and fetch laboratory results associated with a patient. It identifies which core elements, constraints and value sets SHALL be present in the resource instance when using this profile.

This profile defines core localisation concepts for use in an Canadian context.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of **0**, which means that they may be missing from a resource when it is exchanged between systems.

**Required elements:**
* status of the diagnostic report
* code that describes the diagnostic report

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Canadian DiagnosticReport profile to aid record matching in databases.

**Must Support elements:**
* code that describes the diagnostic report
* subject of the report
* healthcare event this report is about
* Observations that are part of this report  

## Usage Note

The following are example usage scenarios for the DiagnosticReport profile.

* Query for lab reports belonging to a Patient
* Record or update a lab report for a specific Patient


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-diagnosticreport-notes.md

## Category
The _DiagnosticReport.category_ element is required in this profile since a typical use would involve searching, sorting for Laboratory test(s) and Laboratory result(s). 

Multiple categories are allowed using various categorization schemes but at least one SHALL come from the FHIR defined value set that includes codes from HL7v2 Table 0074.

## ConclusionCode
The _DiagnosticReport.conclusionCode_ element represents codes with the summary conclusion (interpretation/impression) of the diagnostic report. 

The Canada Health Infoway Health Concern Code identification of the clinical problems, conditions, diagnoses, symptoms, findings and complaints is provided as a sample only.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-diagnosticreportnote-intro.md

# CA Core DiagnosticReport (Note) Profile
<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<p> This profile initially put forth placeholders for the value sets used in category and code. Further work is required to determine if this profile should align to the value set in use in US Core (https://www.hl7.org/fhir/us/core/ValueSet-us-core-diagnosticreport-category.html and https://www.hl7.org/fhir/us/core/ValueSet-us-core-diagnosticreport-report-and-note-codes.html) or if a Canadian value set needs to be created.
    <br>
	</blockquote>
  </div>

This profile sets minimum expectations to support collection of diagnostic report information for reports and notes. Generated as a first step toward creating a set of Canadian Baseline FHIR profiles. It identifies which core elements, constraints and value sets SHALL be present in the resource instance when using this profile.

This profile defines core localisation concepts for use in an Canadian context.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of **0**, which means that they may be missing from a resource when it is exchanged between systems.

**Required elements:**
* status of the diagnostic report
* category of the diagnostic report
* code that describes the diagnostic report
* subject of the report
* time when report was created

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Canadian DiagnosticReport Note profile to aid record matching in databases.

**Must Support elements:**
* status of the report
* category that classifies the report
* code that describes the diagnostic report
* subject of the report
* healthcare event this report is about
* time when report was created
* time when report was issued
* diagnostic service responsible for report
* Media that are part of this report
* Attachments that are part of this report

## Usage Note


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-diagnosticreportnote-notes.md



---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-documentreference-intro.md

# CA Core DocumentReference Profile
This DocumentReference profile sets minimum expectations for mandatory core elements, constraints and value sets required to provide metadata about the document of any kind so that the document can be published, discovered and managed.

This profile defines core localisation concepts for use in an Canadian context.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of **0**, which means that they may be missing from a resource when it is exchanged between systems.

**Required elements:**
* status of the refence
* document referenced

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Canadian DocumentReference profile to aid record matching in databases.

**Must Support elements:**
* master version identifier
* kind of document
* categorization of document
* subject of the document
* document author
* document authenticator
* organization which maintains the document
* the document itself or URL
* context of the document content
* practice settings
* patient demographics

## Usage Note

The following are example usage scenarios for the DocumentReference profile.

* Publishing a new document. This can be done using the [IHE MHD Provide Document Bundle [ITI-65]](https://wiki.ihe.net/index.php/Mobile_access_to_Health_Documents_(MHD)) transaction that carries both the document and its metadata.
* Querying the document repository for specific document(s) matching various metadata parameters. This is similar to the IHE MHD Find Document References [ITI-67] transaction.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-encounter-intro.md

# CA Baseline Encounter Profile
This profile sets minimum expectations for the Encounter resource to represent various observations if no other, more specific profile is applicable.

This Encounter profile represents an interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient, or to communicate information on a visit-specific basis.

This profile defines localization concepts for use in the Canadian context.

## Mandatory Data Elements
All elements or attributes within the FHIR specification have cardinality as part of their definition - a minimum number of required appearances and a maximum number of allowable appearances.

Most elements in the FHIR specification have a minimum cardinality of 0, so most elements are not required and subsequently they may be missing from a resource when it is exchanged between systems.

**Required elements in the Encounter profile:**
* state of the encounter (Encounter.status)
* classification of the encounter (Encounter.class)
* subject of the encounter (Encounter.subject)

## Must Support Data Elements
Some elements are marked as Must Support. This means that implementations generating, receiving, or otherwise using resources with Must Support elements SHALL provide support for those elements in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#cardinality-and-mustsupport-definitions) definition).

The following elements are marked as Must Support in the Encounter profile:

**Must Support elements:**
* identifier
* state of the encounter (Encounter.status)
* classification of the encounter (Encounter.class)
* reference to a subject (Encounter.subject)
* responsible providers (Encounter.participant)
* reasons (Encounter.reasonCode)
* diagnosis relevant to the encounter (Encounter.diagnosis)
* diagnosis rank
* admission details (Encounter.hospitalization)

## Usage Note
It is anticipated that many systems only need the current information of the encounter and therefore the Encounter resource represents the most recent information.

Systems that need to track historical information about the encounter should be able to do that by increasing complexity of the Encounter resource instance.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-encounter-notes.md

## Class
The _Encounter.class_ element is to provide the kind of stay that a subject is having. This is different than the _Encounter.type_ that explains what is done to the subject within this encounter.

In other words, the _Encounter.class_ identifies the setting for the encounter (inpatient/outpatient) in which the encounter took place.

Since it is important for interpreting the context of the encounter, for choosing the appropriate business rules to enforce the clinical/management process, this element is required (cardinality 1..1) and marked as Must Support.

The _Encounter.class_ element does NOT identify the priority of the encounter (see _Encounter.priority_). 
Therefore ```Encounter.class = "EMER"``` (Emergency) refers to an encounter happening at a dedicated healthcare service delivery location (e.g., Emergency Department) rather than the priority of the encounter.

## Type
The _Encounter.type_ element is to provide a specific code indicating type of service provided.

This element is bound to [EncounterType](http://build.fhir.org/ig/HL7-Canada/ca-baseline/branches/master/ValueSet-encountertype.html) value set which includes codes from [SNOMED CT](http://www.snomed.org) decending from the 308335008 (Patient encounter procedure (procedure)) concept.

To extract all descendant of the [SNOMED CT](http://www.snomed.org) concept 308335008 use an ECL expression ```<< 308335008```.

```diff
- ISSUE #143: Need to better define the value set for the Encounter.type and explain the difference between Encounter.type and Encounter.serviceType based on use cases. 
- Possible value sets:
- descendant of the SNOMED CT concept 308335008 | Patient encounter procedure (procedure);
- descendant of the SNOMED CT concept 308467007 | Seen in establishment (finding)
- descendant of the SNOMED CT concept 308930007 | Seen by health professional (finding)
```

## Service Type
The _Encounter.serviceType_ element describes the service to be performed during the encounter. 
This element is connected to other resources such as Appointment (Appointment.serviceType), HealthcareService (HealthcareService.type) or Schedule (Schedule.serviceType) 


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-immunization-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

This profile was generated from [HL7 StructureDefinition](https://www.hl7.org/fhir/immunization.profile.json) on 2019-03-28 and constrained during a review of US Core against Canadian sources.

**Note** The USCoreR4 resource supports recording of vaccines not given (refused) with reasons.  The [Ontario Immunization Connect (ICON) profiles](https://simplifier.net/digitalhealthimmuniz/~resources?category=Profile&sortBy=RankScore_desc) has fixed values for Immunization.status and Immunization.notGiven that restrict use to completed vaccinations. **<< As in USCoreR4, refused vaccines are supported in this profile.**

Key differences from [USCoreR4 Immunization](https://build.fhir.org/ig/HL7/US-Core-R4/StructureDefinition-us-core-immunization.html):
- Immunization.code bound to ValueSet with Canadian vaccine codes
- Immunization.patient reference changed to profile-patient
- Immunization.occurrenceDateTime:estimated extension added to identify estimated dates to be more consistent with ICON and CDN HL7v3 specs
- included other Immunization resource elements used in the ICON spec for visibility


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-immunizationrecommendation-intro.md

# CA Baseline ImmunizationRecommendation Profile


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-location-intro.md

# CA Baseline Location Profile
This Location profile sets minimum expectations for the Location resource to record, search and fetch details and position information for a physical place where services are provided.

This profile defines localization concepts for use in a Canadian context.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of 0, which means that they may be missing from a resource when it is exchanged between systems.

In this Canadian Baseline Location Profile all elements are optional, i.e., there is no element with a minimum cardinality of 1. However, some optional elements (e.g., identifier) have required components that MUST be present if that optional element is provided.

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Canadian Location profile to aid record matching in databases with many pediatric records.

**Must Support elements:**
* an identifier
* a location name
* contact detail (e.g. a telephone number or an email address)


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-location-notes.md

## Identifiers 
Currently, there is no consensus or requirement for pan-Canadian method to identify a location using a business identifier. Location.identifier will remain unsliced until a requirement or rationale is put forth that supports the need to have unique constraints determined by the business identifier.

## Service Language
The Location MAY have a [Service Language]( http://hl7.org/fhir/ca/baseline/StructureDefinition/ext-servicelanguage) extension. This extension is to identify languages that that services are provided in this particular location.

## Address
The Location profile is provided for use in a Canadian context where some constraint on content is desirable to guarantee the quality of the Canadian address whilst still supporting other type of address (e.g., other countries or UNstructured addresses).

### Canadian postal code
If an address in the Location resource instance represents Canadian address, it SHOULD follow Canadian postal code format.

The Canadian Postal Code SHOULD be a six-character uniformly structured uppercase alphanumeric code in the form of "ANA NAN", where "A" represents an alphabetic character and "N" represents a numeric character, with one space between the first three and the last three characters.

A hyphen SHOULD NOT be used (example of UNacceptable format: T0L-1K0).



---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-medication-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

This profile was generated from [HL7 StructureDefinition](https://www.hl7.org/fhir/medication.profile.json) on 2019-03-28 and constrained during a review of US Core against Canadian sources.  RxNorm is not used in Canada and the list of medicinal products available differs from the US, therefore [PrescribeIT Medication Profile](https://specs.prescribeit.ca/R2.0/erx/profile-medication.html) was used as a basis for this profile - with some significant differences due to structural differences between versions of FHIR.

Key differences from [USCoreR4 Medication](https://build.fhir.org/ig/HL7/US-Core-R4/StructureDefinition-us-core-medication.html):
- RxNorm is not used in Canada, replaced with a Canadian list of MedicationForm

Key differences from [PrescribeIT Medication Profile](https://specs.prescribeit.ca/R2.0/erx/profile-medication.html):
- Medication.id left with FHIR defaults
- Medication.product element has been deleted from FHIR, used Medication.form, Medication.ingredient, Medication.amount instead of equiv. elements in Medication.product

**Note:**
- medicationStrength, isRepresentative, and isActive extensions socialized in this profile and come from the PrescribeIT 2.0 specification
- Medication.ingredient.item[x] is currently restricted in a manner consistent with the PrescribeIT Medication profile.  **<< Question for Implementors: Is this preferable to providing references to other Medication (and potentially Substance) resources?**
- [ON DHDR](https://simplifier.net/ontariodigitalhealth/medication) and [HL7 v3 AdministerableMedicine](https://infocentral.infoway-inforoute.ca/extra/ca/mr0206-html/html/message.html?COCT_MT220200CA) appear to approach similar things differently than below.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-medicationdispense-intro.md

# CA Baseline MedicationDispense Profile
This profile sets minimum expectations for the MedicationDispense resource.
This profile defines localization concepts for use in the Canadian context.

## Mandatory Data Elements
All elements or attributes within the FHIR specification have cardinality as part of their definition - a minimum number of required appearances and a maximum number of allowable appearances.

Most elements in the FHIR specification have a minimum cardinality of 0, so most elements are not required and subsequently they may be missing from a resource when it is exchanged between systems.

**Required elements in the Observation (General Use) profile:**
* status (required in the base specification)
* medication (required in the base specification)
* subject


## Must Support Data Elements
The following elements are marked as Must Support in this profile:

**Must Support elements:**
* status
* medication
* subject
* quantity
* whenPrepared
* dosageInstruction

## CA Core Considerations
The whenHandedOver element was initially profiled as must support and was later relaxed through the Due Diligence Review Process with the goal of not constraining for certain use cases over others. Given the criticality to many clinical/pharmaceutical use cases, it has been identified as an element to consider for additional constraints in the CA Core Profiles which are to be developed in the future under the guidance of a larger collaborative of pan-Canadian governing bodies.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-medicationrequest-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

This profile was generated from [HL7 StructureDefinition](https://www.hl7.org/fhir/medicationrequest.profile.json) on 2019-03-28 and constrained during a review of US Core against Canadian sources.

Key differences from [USCoreR4 MedicationRequest](https://build.fhir.org/ig/HL7/US-Core-R4/StructureDefinition-us-core-medicationrequest.html):
- MedicationRequest.medication updated:
  - CodeableConcept binding to ValueSet-prescriptionmedicinalproduct
  - Reference to profile-medication
- MedicationRequest.subject reference updated to profile-patient
- MedicationRequest.requester reference updated to profile-practitioner


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-medicationstatement-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

This profile was generated from [HL7 StructureDefinition](https://www.hl7.org/fhir/medicationstatement.profile.json) on 2019-03-28 and constrained during a review of US Core against Canadian sources.

Key differences from [USCoreR4 MedicationStatement](https://build.fhir.org/ig/HL7/US-Core-R4/StructureDefinition-us-core-medicationstatement.html):
- MedicationStatement.medication updated:
  - CodeableConcept binding to ValueSet-prescriptionmedicinalproduct
  - Reference to profile-medication
- MedicationStatement.subject reference updated to profile-patient


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-observation-intro.md

# CA Baseline Observation (General Use) Profile
<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		While this profile does not currently apply MS constraints on the hasMember or component elements, this profile is seeking community and implementer feedback on how both elements are being used to assess whether consistent patterns can be identified for use in the Canadian landscape.
		<br>

		Feedback can be provided through the <a href="https://simplifier.net/CanadianFHIRBaselineProfilesCA-Core/ObservationProfileLaboratory/~issues">Simplifier issue log for this profile</a>. 
	</blockquote>
  </div>

This profile sets minimum expectations for the Observation resource to represent various observations if no other, more specific profile is applicable. An observation is a measurement or assertion about a subject (person, group, device, location, or another subject).

This profile defines localization concepts for use in the Canadian context.

## Mandatory Data Elements
All elements or attributes within the FHIR specification have cardinality as part of their definition - a minimum number of required appearances and a maximum number of allowable appearances.

Most elements in the FHIR specification have a minimum cardinality of 0, so most elements are not required and subsequently they may be missing from a resource when it is exchanged between systems.

**Required elements in the Observation (General Use) profile:**
* status of the result value (Observation.status)
* type of observation (Observation.code)
* subject of the observation (Observation.subject)


## Must Support Data Elements
Some elements are marked as Must Support. This means that implementations generating, receiving, or otherwise using resources with Must Support elements SHALL provide support for those elements in some meaningful way (see Must Support definition).

The following elements are marked as Must Support in the Observation (General Use) profile:

**Must Support elements:**
* category
* code
* reference to a subject (Observation.subject)
* effective data
* value
* component code (if implementer supports component)
* component value (if implementer supports component)

## Usage Note
Observation (General Use) is intended to capture data associated with most observations; it is not intended to capture data in some cases where a more appropriate profile is applicable (see below). Data typically consists of measurements or assertions about a subject. Observation (General Use) can capture data in eclectic use cases as it incorporates multiple categories of observations and datatypes. Observation (General Use) can capture data such as:
* Clinical observations such as clinical finding, diagnosis, disorder
* Demographic information
* Device measurements
* Determinants of health such as housing status, income, family support

Observation (General Use) should not be used if one of the following profiles is applicable:
* Observation (Laboratory Results)
* Observation (Vitals)


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-observation-notes.md

## Using codes in Observation
Additional codes that translate or map to the Observation code or category codes are allowed (see [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#CodeableConcept) data type).

Examples:
* providing both a local code and LOINC code
* providing more specific category codes
* providing a SNOMED CT concept
* providing system specific codes

## Category
The _Observation.category_ specifies a code that classifies the type of observation. The _Observation.category_ element is a [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#CodeableConcept) data type, and more than one code is allowed.

For interoperability reasons, one of the codes SHOULD be from the FHIR standard defined [Observation Category Codes](https://www.hl7.org/fhir/valueset-observation-category.html).

Local codes are allowed as well. In the case of using local codes, in order to classify the type of observation both _category.coding.system_ and _category.coding.code_ SHOULD be provided.

## Code
The _Observation.code_ element describes what was observed. Sometimes this is called the observation "name".

The [pan-Canadian LOINC Observation Code Database (pCLOCD)](https://infocentral.infoway-inforoute.ca/en/standards/canadian/pclocd-loinc) is recommended for use in the Canadian context. pCLOCD Code System URI is https://fhir.infoway-inforoute.ca/CodeSystem/pCLOCD

## value[x] and dataAbsentReason
Observation (General Use) uses a name-value pair to code data. When the value for the actual observation is not known, i.e., the value for _Observation.value[x]_ is not available, then _Observation.value[x]_ will not be present and the _Observation.dataAbsentReason_ SHALL be present and will provide a reason why the expected value is missing. 
Also, the _Observation.dataAbsentReason_ SHALL only be present if and only if the value for _Observation.value[x]_ is not present.

The same rule applies when _Observation.component_ is used. I.e., if _Observation.component.value[x]_ is missed, then _Observation.component.dataAbsentReason_ SHALL be present with the reason.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-observation-results-intro.md

# CA Baseline Observation (Laboratory Results) Profile
<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		While this profile does not currently apply MS constraints on the hasMember, referenceRange, interpretation or component elements, this profile is seeking community and implementer feedback on how these elements are being used to assess whether consistent patterns can be identified for use in the Canadian landscape for certain types of test results (e.g., panel, antibody, blood tests, etc)
		<br>

		Feedback can be provided through the <a href="https://simplifier.net/CanadianFHIRBaselineProfilesCA-Core/ObservationProfileLaboratory/~issues">Simplifier issue log for this profile</a>.</p>
	</blockquote>
  </div>

This Observation (Laboratory Results) profile further constrains the Observation (General Use) profile to represent results of laboratory tests.

This profile may represent a single value from a specific laboratory test (e.g. hematocrit) or it may represent a grouped set of results from a multi- test study or panel (e.g. complete blood count, urinalysis, electrolytes).

The Observation (Laboratory Results) profile reflects localization concepts in the Canadian context. 

## Mandatory Data Elements
All elements or attributes within the FHIR specification have cardinality as part of their definition - a minimum number of required appearances and a maximum number of allowable appearances.

Most elements in the FHIR specification have a minimum cardinality of **0**, so most elements are not required and subsequently they may be missing from a resource when it is exchanged between systems.

**Required elements:**
*	status of the result value
*	category to classify the general type of observation being made
*	category: laboratory (mandatory child element of above)
*	code to classify what was observed
*	reference to a subject

Note: if Observation.component is provided then Observation.component.value is mandatory.

## Must Support Data Elements
Some elements are marked as Must Support. This means that implementations generating, receiving, or otherwise using resources with Must Support elements SHALL provide support for those elements in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

The following elements are marked as Must Support in the Observation (Laboratory Results) profile:

**Must Support elements:**
*	category
*	category:laboratory
*	code
*	reference to a subject
*	effective date
* performer
*	value
*	component.code (if implementer supports component)
*	component.value[x] (if implementer supports component)

### Data Absent Reason
If the minimum cardinality of an element or attribute is 1 AND information is missing AND the Responder knows the precise reason for the absence of data, then Responders SHOULD send the reason for the missing information using values from the valueset where it exists by using the [DataAbsentReason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) extension.

An Observation without a value, SHOULD include a reason why the data is absent unless there are component observations, or references to other Observations that are grouped within it, i.e., unless there are component observations, or references to other Observations that are grouped within it then either ONE of _Observation.value_ OR _Observation.dataAbsentReason_ but NOT both should be present.

Note: The conformance language above was modified from SHALL to SHOULD to reflect the community decision to relax the invariant to account for Canadian implementations that have reason to not meet the rule given circumstances with R4 modeling for value expressions that is corrected in later versions of FHIR. At least one Canadian lab implementation uses an extension to communicate a result value in the form of a PDF (which R4 does not support under its existing value data types).

## Usage Note
Observation (Laboratory Results) is intended to represent results of laboratory tests and studies. This profile constrains the Observation (General Use) resource to represent laboratory results in messages and patient summaries if no other, more specific profile is more appropriate.

The following list of examples is intended to represent some examples of typical use cases and is not exhaustive:
*	complete blood count
*	prothrombin time
*	basic metabolic panel
*	comprehensive metabolic panel
*	lipid panel
*	liver panel
*	thyroid stimulating hormone
*	hemoglobin a1c
*	culture and sensitivity

including the interpretations and reference ranges associated with the result(s).

Observation (Laboratory Results) should not be used if one of the following profiles is applicable: (to be completed later)


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-observation-results-notes.md

## Using codes in Observation
Additional codes that translate or map to the Observation code or category codes are allowed (see [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#CodeableConcept) data type).
For example: providing both a local code and LOINC code providing a more specific category codes, SNOMED CT concept, or system specific codes.

## Category
The _Observation.category_ specifies a code that classifies the general type of observation being made. The _Observation.category_ element is [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#CodeableConcept) data type and more than one code is allowed.
For interoperability reason one of the codes SHOULD be from the FHIR standard defined [Observation Category Codes](https://www.hl7.org/fhir/valueset-observation-category.html).
Local codes are allowed as well. In case of using local codes to better classify the type both _category.coding.system_ and _category.coding.code_ SHOULD be provided.

## Code
The Observation.code element describes what was observed. Sometimes this is called the observation "name".

The [pan-Canadian LOINC Observation Code Database (pCLOCD)](https://infocentral.infoway-inforoute.ca/en/standards/canadian/pclocd-loinc) is recommended for use in a Canadian context. Code System URI is https://fhir.infoway-inforoute.ca/CodeSystem/pCLOCD

## value[x]
If the result value is a code:
* both _valueCodeableConcept.coding.system_ and _valueCodeableConcept.coding.code_ SHALL be present
* a code from [SNOMED CT](http://www.snomed.org) SHOULD be used
* additional codes that translate or map Observation code or category codes are allowed

If the result value is a numeric quantity:
* _valueQuantity.value_ , _valueQuantity.unit_ and _valueQuantity.sytem_ SHALL be present
* a standard [UCUM](http://unitsofmeasure.org) unit SHALL be used.
          


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-organization-intro.md

# CA Baseline Organization Profile
This Organization profile sets minimum expectations for the Organization resource to record, search and fetch a formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.

This profile defines localization concepts for use in a Canadian context.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of 0, which means that they may be missing from a resource when it is exchanged between systems.

In this Canadian Baseline Organization Profile all elements are optional, i.e., there is no element with a minimum cardinality of 1. However, some optional elements (e.g., identifier) have required components that MUST be present if that optional element is provided.

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Canadian Organization profile to aid record matching in databases with many pediatric records.

**Must Support elements:**
* an identifier
* an organization name
* contact detail (e.g. a telephone number or an email address)


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-organization-notes.md

## Identifiers 
Currently, there is no consensus or requirement for pan-Canadian method to identify an organization using a business identifier. Organization.identifier will remain unsliced until a requirement or rationale is put forth that supports the need to have unique constraints determined by the business identifier.

## Service Language
The Organization MAY have a [Service Language]( http://hl7.org/fhir/ca/baseline/StructureDefinition/ext-servicelanguage) extension. This extension is to identify languages that that services are provided in this particular organization.

## Address
The Organization profile is provided for use in a Canadian context where some constraint on content is desirable to guarantee the quality of the Canadian address whilst still supporting other type of address (e.g., other countries or UNstructured addresses).

### Canadian postal code
If an address in the Organization resource instance represents Canadian address, it SHOULD follow Canadian postal code format.

The Canadian Postal Code SHOULD be a six-character uniformly structured uppercase alphanumeric code in the form of "ANA NAN", where "A" represents an alphabetic character and "N" represents a numeric character, with one space between the first three and the last three characters.

A hyphen SHOULD NOT be used (example of UNacceptable format: T0L-1K0).

### Preferred
The Organization.address MAY have a [Preferred](http://hl7.org/fhir/StructureDefinition/iso21090-preferred) extension. This is the FHIR standard defined extension used as a flag denoting whether parent address item is preferred.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-organizationaffiliation-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

This profile was generated from [HL7 StructureDefinition](https://www.hl7.org/fhir/organizationaffiliation.profile.json) on 2019-03-28 and constrained during a review of US Core against Canadian sources.

**Note:** This profile has been added to meet requirements met by [ppr-ext-location-affiliation](https://simplifier.net/ProvincialProviderRe/location-affiliation/~json) extension used in the ON PPR guide.

**Intended use:**
- Resource Use
  - a Location is place
  - an Organization is a group of people
  - an Organization may have one or more location
- ppr-ext-location-affiliation was used to add an element to a ***Location*** used identify an affiliated organization, including:
  - .type ***of affiliation*** [ppr-provider-role-affiliation-type](https://simplifier.net/provincialproviderre/ppr-providerroleaffiliationtype)
  - .period ***of affiliation***
  - .with ***affiliated Organization***
- OrganizationAffiliation associates two Organizations and allows the location of the ParticipatingOrganization to be specified where:
  - OrganizationAffiliation.organization points to ***affiliated organization*** above
  - OrganizationAffiliation.participationOrganization points to the ***Organization*** that performs a role (Location.managingOrganization)
  - OrganizationAffiliation.code specifies the ***role*** the ***participatingOrganization*** plays (similar to Type above)
  - OrganizationAffiliation.location points to the ***Location*** where the role is performed


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-patient-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->
# CA Baseline Patient Profile
<blockquote class="stu-note">
  <p>This profile is seeking community and implementer feedback on whether further relaxation of the 1..1 cardinality is needed on the Patient.identifier.type & .system & .value elements.
  <br>
  <br>

  Due Diligence Reviews identified the above elements as 1..1 cardinality but not in the equivalent eReferral Specification profile. This variance is believed to be due to the eReferral Specification profile not necessarily expecting a Patient to always have a health card (or at minimum a health card number). General consensus from Due Diligence Review is that the cardinalities should not be relaxed in the CA Baseline. Feedback can be provided through the Simplifier issue log for this profile.
  <br>

  Feedback can be provided through the <a href="https://simplifier.net/CanadianFHIRBaselineProfilesCA-Core/PatientProfile/~issues">Simplifier issue log for this profile</a>.</p>
</blockquote>
</div>


This Patient profile sets minimum expectations for the Patient resource to record, search and fetch demographics and other administrative information about an individual receiving care or other health-related services.

Since not all concepts are included within the base FHIR Patient resource, this profile defines localization concepts for use in an Canadian context.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of 0, which means that they may be missing from a resource when it is exchanged between systems.

In this Canadian Baseline Patient Profile all elements are optional, i.e., there is no element with a minimum cardinality of 1. However, some optional elements (e.g., identifier) have required components that MUST be present if that optional element is provided.

### Data Absent Reason
In situations where the minimum cardinality of an element or attribute is 1 and information is missing and the Responder knows the precise reason for the absence of data, Responders SHALL send the reason for the missing information using values (such as [NullFlavor](https://www.hl7.org/fhir/extension-iso21090-nullflavor.html)) from the value set where they exist or using the [DataAbsentReason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) extension.

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Canadian Patient profile to aid record matching in databases with many pediatric records.

**Must Support elements:**
* an identifier
* a patient name
* a birth date

## Usage Note
Some of the typical use cases where the Patient profile may be used:

* Enterprise-wide information systems that manage patient registration and services ordering
* Local or cross-jurisdictional systems to query information about patients whose demographics data match data provided in the query parameters
* Synchronization of patient information between multiple ADT systems employed by healthcare enterprises

This profile includes an invariant that enforces that a family.name, given.name, or both be present. This is intended to enforce minimum constraints while allowing for cases where the patient may only have one name.
* Some jurisdictions with more rigid cardinality constraints on both family and given may be handling this today by populating the name of a patient into both fields
* Other jurisdictions may allow the population of either family or given


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-patient-notes.md

<!--- Text entered into this file will appear at the bottom of the profiles page after the Formal Views of the profile content. -->
## Identifiers
Multiple individual healthcare identifiers may be provided in Patient.identifier element.

However, to support particular types of federal patient and person health numbers used by all jurisdictions across Canada following optional types are defined to uniquely identifying patients:
* Canadian Passport Number
* Jurisdictional Person Identification
* Jurisdictional Health Number

### Canadian Passport Number (PPN)
A unique number assigned to the document affirming that a person is a citizen of Canada.

URI to use with this identifier type: https://fhir.infoway-inforoute.ca/NamingSystem/ca-passport-number

**Example:**
```json
{
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code": "PPN"
      }
    ]
  },
  "system": "https://fhir.infoway-inforoute.ca/NamingSystem/ca-passport-number",
  "value": "AB123456",
  "period": {
    "start": "2005-05-11",
    "end": "2015-05-11"
  }
}
```

### Jurisdictional Patient Identifier Number (JPID)
This patient identifier type identifies a number issued in Canada to administer various government programs.

URIs used with this identifier type:
* Canada, Social Insurance Number (SIN) - https://fhir.infoway-inforoute.ca/NamingSystem/ca-social-insurance-number
* Canada Permanent Resident Card Number - https://fhir.infoway-inforoute.ca/NamingSystem/ca-permanent-resident-card-number
* Canada First Nation Indian registry number (band ID) - https://fhir.infoway-inforoute.ca/NamingSystem/ca-federal-firstnation-band-id
* Indigenous and Northern Affairs Canada health card number - https://fhir.infoway-inforoute.ca/NamingSystem/ca-indigenous-northern-affairs-number
* Interim Federal Health Program identifier - https://fhir.infoway-inforoute.ca/NamingSystem/ca-interim-federal-health-id

**Example:**
```json
{
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code": "JPID"
      }
    ]
  },
  "system": "https://fhir.infoway-inforoute.ca/NamingSystem/ca-social-insurance-number",
  "value": "923456789"
  }
}
```

### Jurisdictional Health Number (JHN)
Following URIs are registered to identify health card numbers for provinces and territories:
* Alberta - https://fhir.infoway-inforoute.ca/NamingSystem/ca-ab-patient-healthcare-id
* British Columbia - https://fhir.infoway-inforoute.ca/NamingSystem/ca-bc-patient-healthcare-id
* Manitoba - https://fhir.infoway-inforoute.ca/NamingSystem/ca-mb-patient-healthcare-id
* New Brunswick - https://fhir.infoway-inforoute.ca/NamingSystem/ca-nb-patient-healthcare-id
* Newfoundland and Labrador - https://fhir.infoway-inforoute.ca/NamingSystem/ca-nl-patient-healthcare-id
* Northwest Terrirories - https://fhir.infoway-inforoute.ca/NamingSystem/ca-nt-patient-healthcare-id
* Nova Scotia - https://fhir.infoway-inforoute.ca/NamingSystem/ca-ns-patient-healthcare-id
* Nunavut - https://fhir.infoway-inforoute.ca/NamingSystem/ca-nu-patient-healthcare-id
* Ontario - https://fhir.infoway-inforoute.ca/NamingSystem/ca-on-patient-hcn
* Prince Edward Island - https://fhir.infoway-inforoute.ca/NamingSystem/ca-pe-patient-healthcare-id
* Quebec - https://fhir.infoway-inforoute.ca/NamingSystem/ca-qc-patient-healthcare-id
* Saskatchewan - https://fhir.infoway-inforoute.ca/NamingSystem/ca-sk-patient-healthcare-id
* Yukon - https://fhir.infoway-inforoute.ca/NamingSystem/ca-yt-patient-healthcare-id

Following identifier types identify health card numbers issued in Canada to let a patient to be recognized for services and stay connected to related support programs:
* Canada Veteran's Affairs health card number - https://fhir.infoway-inforoute.ca/NamingSystem/ca-veterans-affairs-health-id
* Canada Correctional Service health card number - https://fhir.infoway-inforoute.ca/NamingSystem/ca-correctional-service-health-id
* Canada Royal Canadian Mounted Police (RCMP) health card number - https://fhir.infoway-inforoute.ca/NamingSystem/ca-royal-mounted-police-health-id
* Canada Armed Forces health card number - https://fhir.infoway-inforoute.ca/NamingSystem/ca-armed-forces-health-id

The full list of identifiers can be found on [Canadian URI Registry](https://simplifier.net/canadianuriregistry/~resources?category=NamingSystem). Canada Health Infoway provides Canadian URI Registry [search tool](https://fhir.infoway-inforoute.ca/nssearch) to simplify search.

**Version Code**

The [Version Code](https://build.fhir.org/ig/HL7-Canada/ca-baseline/extension-ext-identifierversion.html) extension is added to indicate the currency/validity of an identifier.

The rational is that the version code is current captured separately from the JHN because, in Ontario at least, the JHN is a stable identifier whereas the version code changes over time.
- The working assumption is that it is useful to have this stable identifier but not all of the Ontario specs reviewed stored it as a separate field.  In one case, it appears to be an Patient.identifier.coding.value instead of the identifier ...
- Example JHN and Patient Information from [Ontario Health Care Validation Reference Manual](http://www.health.gov.on.ca/english/providers/pub/ohip/ohipvalid_manual/ohipvalid_manual.pdf)
- Question: would specific examples like this be helpful to illustrate Canadian requirements?

**Example:**
```json
{
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code": "JHN"
      }
    ]
  },
  "system": "https://fhir.infoway-inforoute.ca/NamingSystem/ca-armed-forces-health-id",
  "value": "A98765439"
  }
}
```



## Patient Gender and Sex
Many systems and organizations only provide a single attribute to represent all aspects of a patient's gender and sex with a single value. However, there are many considerations around sex and gender documentation and interoperability.

The FHIR Specification provides [guidance](https://www.hl7.org/fhir/patient.html#gender) and background for representing patient gender.

In addition to that Canadian Patient profile defines following extensions:
* **Gender Identity** - an indication from the patient about what gender they consider themselves to be.
* **Sex assigned at Birth** - the sex assigned at birth, as documented on the birth registration.
* **Preferred Pronoun** - an indication from the patient about what pronoun to use in correspondence.

**!! TO BE COMPLETED !!**

## Telecom
A Patient may have multiple ways to be contacted with different uses or applicable periods. This Patient profile allows multiple contact points (e.g. a telephone number or an email address) by which the individual may be contacted.

To indicate the preferred way to contact use Patient.telecom.rank attribute (i.e., the [ContactPoint.rank](https://www.hl7.org/fhir/datatypes.html#contactpoint) component) that specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.

## Address
The Patient profile is provided for use in a Canadian context where some constraint on content is desirable to guarantee the quality of the Canadian address whilst still supporting other type of address (e.g., other countries or UNstructured addresses).

### Canadian postal code
If an address in the Patient resource instance represents Canadian address, it SHOULD follow Canadian postal code format.

The Canadian Postal Code SHOULD be a six-character uniformly structured uppercase alphanumeric code in the form of "ANA NAN", where "A" represents an alphabetic character and "N" represents a numeric character, with one space between the first three and the last three characters.

A hyphen SHOULD NOT be used (example of UNacceptable format: T0L-1K0).

### Preferred
The Patient.address MAY have a [Preferred](http://hl7.org/fhir/StructureDefinition/iso21090-preferred) extension. This is the FHIR standard defined extension used as a flag denoting whether parent address item is preferred.

### No Fixed Address
The Patient.address MAY have a [No Fixed Address](https://build.fhir.org/ig/HL7-Canada/ca-baseline/extension-ext-nofixedaddress.html) extension. This extension is to indicate that there is an assertion that there is no fixed address (e.g., homeless).

## Marital Status
The binding for the Patient.maritalStatus element is [extensible](https://www.hl7.org/fhir/terminologies.html#extensible) meaning that to be conformant, codes in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.

Systems can send additional codes (Stats Canada, SNOMED CT, etc.) but can only do that if they also send the relevant HL7-assigned codes.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-practitioner-intro.md

# CA Baseline Practitioner Profile
This Practitioner profile sets minimum expectations for the Practitioner resource to record, search and fetch demographics and other administrative information about a person who is directly or indirectly involved in the provisioning of healthcare.

This profile defines localization concepts for use in an Canadian context.

## Differences from US Core
**Note:** This profile was generated from [HL7 Practitioner StructureDefinition](http://hl7.org/fhir/R4/practitioner.html) on 2020-02-19 and constrained during a review of US Core and a review against Canadian sources.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of **0**, which means that they may be missing from a resource when it is exchanged between systems.

In this Canadian Baseline Practitioner Profile all elements are optional, i.e., there is no element with a minimum cardinality of **1**. However, some optional elements (e.g., identifier) have required components that MUST be present if that optional element is provided.

### Data Absent Reason
In situations where the minimum cardinality of an element or attribute is **1** and information is missing and the Responder knows the precise reason for the absence of data, Responders SHALL send the reason for the missing information using values (such as [NullFlavor](https://www.hl7.org/fhir/extension-iso21090-nullflavor.html)) from the value set where they exist or using the [DataAbsentReason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) extension.

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Practitioner profile to aid record matching in databases with many pediatric records.

**Must Support elements:**
1. an identifier
2. a practitioner name

## Usage Note
This Practitioner profile is intended for general use, e.g. to be included into a Bundle along with the Patient resource (Patient.generalPractitioner).


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-practitioner-notes.md

## Identifiers
Multiple types of provider identifiers may be used in Practitioner.identifier element in the Canadian context:
* Provincial health plan provider/ Billing number
* License Number
* Medical Doctor Number

Implementers may use other identifiers to capture in a more specific way such as internal provider number, jurisdictions providing credentials.
The full list of possible identifier types is in [Canadian URI Registry](https://simplifier.net/canadianuriregistry/~resources?category=NamingSystem)

In some cases, the same license number can be used as the provider identifier and provider's qualification identifier.

## Telecom
A provider may have multiple ways to be contacted with different uses or applicable periods. This Practitioner profile allows multiple contact points (e.g. a telephone number or an email address) by which the individual may be contacted.

To indicate the preferred way to contact use Practitioner.telecom.rank attribute (i.e., the [ContactPoint.rank](https://www.hl7.org/fhir/datatypes.html#contactpoint) component) that specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.

## Address
The Practitioner profile is provided for use in a Canadian context where some constraint on content is desirable to guarantee the quality of the Canadian address whilst still supporting other type of address (e.g., other countries or unstructured addresses).

### Canadian postal code
If an address in the Practitioner resource instance represents Canadian address, it SHOULD follow Canadian postal code format.

The Canadian Postal Code SHOULD be a six-character uniformly structured uppercase alphanumeric code in the form of "ANA NAN", where "A" represents an alphabetic character and "N" represents a numeric character, with one space between the first three and the last three characters.

A hyphen SHOULD NOT be used (example of unacceptable format: T0L-1K0).

### Preferred
The Practitioner.address MAY have a [Preferred](http://hl7.org/fhir/StructureDefinition/iso21090-preferred) extension. This is the FHIR standard defined extension used as a flag denoting whether parent address item is preferred.

### Qualifications

This profile recommends to use Canadian [QualifiedRoleType](https://tgateway.infoway-inforoute.ca/singlesubset.html?id=2.16.840.1.113883.2.20.3.48) value set as the coded representation of the provider's qualification.
This value set lists codes for the degree or educational rank that the credential specifies. It may also apply to an Expertise type.

The binding strength for the Practitioner.qualification.code element is [Preferred](https://www.hl7.org/fhir/terminologies.html#preferred) meaning that implementers are encouraged to draw codes from the specified code system for interoperability purposes but are not required to do so to be considered conformant.

Example:
```
"code": {
  "coding": [
    {
      "system": "https://fhir.infoway-inforoute.ca/CodeSystem/scpqual",
      "code": "BSC",
      "display": "Bachelor of Science Degree"
    }
  ],
  "text": "Bachelor of Science Degree"
}
```


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-practitioner-registry-intro.md

# CA Baseline Practitioner Profile for Registries
<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<p> While the CA Baseline relies on the existing extensible value set for identifier.type (from the base FHIR Spec) - some Canadian Jurisdictions have published the values that are extensions on that value set. Review of the <a href="https://simplifier.net/provincialproviderregistry-ontario-r4/ppr-organization-identifier-type-duplicate-2">Ontario Provider Registry Identifier.Type ValueSet</a>.identified that the following Ontario specific identifier type codes may be used from the http://ehealthontario.ca/fhir/CodeSystem/ppr-organization-identifier-type code system: LHIN (Local Health Integration Network), MNI (Master Numbering Index), LSS (Lab Services Licensing System, CNUM (Corporate Number), BNUM (Business Number), AC (Accreditation Number).
    <br>
    <br>
    The CA Baseline is asking other jurisdictions or implementers to provide feedback if other values are being used for identifier.type not already discussed in this profile</p>
		<p> For Practitioner.qualification, slicing has been maintained to demonstrate that there are some registries supporting hybridized registry/eReferral use cases that utilize a different code system (HealthcareProviderRoleType) from the QualifiedRoleType that was incorporated by many HL7 V3 implementations. This separation based on use case and age of implementation remains a challenge in the Canadian ecosystem, and has persisted in part due to the challenges some registry assets face in consuming the longer character lengths present in the SNOMED CT CA HealthcareProviderRoleType value set. Until practices are more standardized or a resolution is in place regarding the disparate use of these two code systems, implementers are cautioned that the CA Baseline's use of these code systems and value sets still may change.
		<br>
		<br>
		The CA Baseline is asking implementers to provide feedback on the value sets and code systems they are expecting to utilize as they transition to FHIR .</p>
		<br>
		Feedback can be provided through the <a href="https://simplifier.net/CanadianFHIRBaselineProfilesCA-Core/ObservationProfileLaboratory/~issues">Simplifier issue log for this profile</a>.
	</blockquote>
  </div>

This Practitioner profile sets minimum expectations for the Practitioner resource to record, search and fetch demographics and other administrative information about a person who is directly or indirectly involved in the provisioning of healthcare.

This profile further constrains the general purpose Practitioner profile and is intended to be used by Provider or Healthcare Directory systems.

## Differences from US Core
**Note:** This profile was generated from [HL7 StructureDefinition](https://www.hl7.org/fhir/practitioner.profile.json) on 2020-02-19 and constrained during a review of US Core against Canadian sources.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.


Most elements in FHIR specification have a minimum cardinality of 0, which means that they may be missing from a resource when it is exchanged between systems.

**Required elements:**
* a identifier
* a practitioner name

In addition to that, some optional elements (e.g., _Practitioner.qualification_) have required components that MUST be present if that optional element is provided.

### Data Absent Reason
In situations where the minimum cardinality of an element or attribute is 1 and information is missing and the Responder knows the precise reason for the absence of data, Responders SHALL send the reason for the missing information using values (such as [NullFlavor](https://www.hl7.org/fhir/extension-iso21090-nullflavor.html)) from the value set where they exist or using the [DataAbsentReason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) extension.


## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Practitioner profile to aid record matching in databases with many pediatric records.

**Must Support elements:**
* an identifier
* a practitioner name
* contact detail (e.g. a telephone number or an email address)
* a birth date

## Extensions

### Deceased Extension
This Practitioner profile contains optional [deceased extension](http://hl7.org/fhir/ca/baseline/StructureDefinition/ext-deceased) to indicate if a practitioner is deceased or not.

This extension was previously labeled as a modifier extension (because of its potential impacts on clinical processes if the practitioner is marked deceased), but was removed after further discussion on the nuances of making something a modifierExtension vs regular extension if it was expected to be picked up by registry implementation guides that collect deceased practitioner information but may or may not use it in ways that would align to HL7 FHIR R4 [definition](https://www.hl7.org/fhir/R4/backboneelement-definitions.html#BackboneElement.modifierExtension) and expectations for modifierExtension.

Implementers should recognize that the determination of whether this should be considered a modifierExtension is ongoing. Since Modifier Extensions should have extreme caution in their application and are further nuanced by the use cases in the implementing registry systems, this extension has been shifted back to a regular extension to align to use in existing implementations. Implementers who are considering using this extension in their guidance might consider applying a Must Support flag on the extension, but those treating wanting to re-create it as a modifier extension are required to review the [FHIR Guidance on Modifier Extensions])(https://www.hl7.org/fhir/R4/extensibility.html#modifierExtension) before including this extension in their profile.  Implementers should also be aware of the Practitioner.deceased[x] R5 concept and that the CA Baseline is monitoring changes in the element to determine if the approach to this extension requires a shift.

## Usage Note
This Practitioner profile is intended to provide a foundation for a central or distributed Provider or Healthcare Directory. Additional work flow components and elements may be required for a particular implementation.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-practitioner-registry-notes.md

## Identifiers
Multiple types of provider identifiers may be used in Practitioner.identifier element in the Canadian context:
* Provincial health plan provider/ Billing number
* Licence Number
* Medical Doctor Number

Implementers may use other identifiers to capture in a more specific way such as internal provider number, jurisdictions providing credentials.
The full list of possible identifier types is in [Canadian URI Registry](https://simplifier.net/canadianuriregistry/~resources?category=NamingSystem)

In some cases, the same license number can be used as the provider identifier and provider's qualification identifier.

## Telecom
A provider may have multiple ways to be contacted with different uses or applicable periods. This Practitioner profile allows multiple contact points (e.g. a telephone number or an email address) by which the individual may be contacted.

To indicate the preferred way to contact use Practitioner.telecom.rank attribute (i.e., the [ContactPoint.rank](https://www.hl7.org/fhir/datatypes.html#contactpoint) component) that specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.

## Address

The Practitioner profile is provided for use in a Canadian context where some constraint on content is desirable to guarantee the quality of the Canadian address whilst still supporting other type of address (e.g., other countries or UNstructured addresses).


### Canadian postal code
If an address in the Practitioner resource instance represents Canadian address, it SHOULD follow Canadian postal code format.

The Canadian Postal Code SHOULD be a six-character uniformly structured uppercase alphanumeric code in the form of "ANA NAN", where "A" represents an alphabetic character and "N" represents a numeric character, with one space between the first three and the last three characters.


A hyphen SHOULD NOT be used (example of UNacceptable format: T0L-1K0).


### Preferred
The Practitioner.address MAY have a [Preferred](http://hl7.org/fhir/StructureDefinition/iso21090-preferred) extension. This is the FHIR standard defined extension used as a flag denoting whether parent address item is preferred.

### Qualifications & Credentials
In Canadian context qualifications and credentials are not synonymous. This difference is defined by slices applied to _Practitioner.qualification.code.coding_ element.

Qualification defines a code for the degree or educational rank that the credential specifies and may also apply to an expertise type.
This profile recommends to use Canadian [QualifiedRoleType](https://tgateway.infoway-inforoute.ca/singlesubset.html?id=2.16.840.1.113883.2.20.3.48) value set as the coded representation of the provider's qualification.

Credential defines a role type that is used to categorize an entity that delivers health care in an expected and professional manner to an entity in need of health care services. 
It uses Canadian [HealthcareProviderRoleType](https://tgateway.infoway-inforoute.ca/singlesubset.html?id=2.16.840.1.113883.2.20.3.48&versionid=20190813) value set as the coded representation of the provider's credentials.

The binding strength for the Practitioner.qualification.code element is [Preferred](https://www.hl7.org/fhir/terminologies.html#preferred) meaning that implementers are encouraged to draw codes from the specified code system for interoperability purposes but are not required to do so to be considered conformant. 


Example:
```
"code": {
  "coding": [
    {
      "system": "https://fhir.infoway-inforoute.ca/CodeSystem/scpqual",
      "code": "BSC",
      "display": "Bachelor of Science Degree"
    }
  ],
  "text": "Bachelor of Science Degree"
}
```


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-practitionerrole-intro.md

# CA Baseline PractitionerRole Profile
This PractitionerRole profile sets minimum expectations for the PractitionerRole resource to record, search and fetch the recording of the location and types of services that Practitioner is able to provide for an organization.

This profile defines localization concepts for use in an Canadian context.

## Differences from US Core
**Note:** This profile was generated from [HL7 PractitionerRole StructureDefinition](http://hl7.org/fhir/R4/practitionerrole.html) and constrained during a review of US Core R4 equivalent profile(s) and a review against Canadian sources.

The following differences are noted from the [US Core R4 PractitionerRole Profile](hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-practitionerrole.html):
* MS Differences: US Core R4 PractitionerRole profile includes additional MS constraints on identifier, organization, code, location, telecom.system, telecom.value, and endpoint.
* Cardinality Differences: None
* Terminology Differences: US Core binds PractitionerRole.code to their National Uniform Claim Committet (NUCC) Taxonomy, and binds PractitionerRole.specialty to their Healthcare Provider Taxonomy valueset. Both are expected to be realm specific.
* Invariant Differences: US Core R4 PractitionerRole profile includes an additional invariant necessitating a reference to practitioner, org, healthcareService, or location be present

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of **0**, which means that they may be missing from a resource when it is exchanged between systems.

In this Canadian Baseline PractitionerRole Profile all elements are optional, i.e., there is no element with a minimum cardinality of **1**. However, some optional elements (e.g., identifier, telecom) have required components that MUST be present if that optional element is provided.

### Data Absent Reason
In situations where the minimum cardinality of an element or attribute is **1** and information is missing and the Responder knows the precise reason for the absence of data, Responders SHALL send the reason for the missing information using values (such as [NullFlavor](https://www.hl7.org/fhir/extension-iso21090-nullflavor.html)) from the value set where they exist or using the [DataAbsentReason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) extension.

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

The following elements are marked as Must Support in the PractitionerRole profile:

**Must Support elements:**
* reference to a practitioner
* contact detail (e.g. a telephone number or an email address) - inclusive of telecom system
* specialty

## Best Practices/"Should" Support
**identifier**: It is recommended to have an identifier associated with PractitionerRole to assist in searches, however not every implementation (especially legacy implementations that combined both concepts of practitioner & practitionerRole) will include an identifier practitioner role. Given the scope and principles of the CA Baseline, the cardinality on this element was relaxed back to its base cardinality after receiving community feedback from FHIR IGuides that could not support the expectation in their existing implementation(s).

## Invariants
The invariant necessitating either code or specialty be present was removed after review against Canadian FHIR rpracititoner registry implementations identified challenges with some legacy systems (registry and otherwise) that have cpmmon use cases for PractitionerRole that do not include specialty or code.

## Usage Note
This PractitionerRole profile is intended for general use, e.g. to be included into a Bundle along with the Practitioner resource.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-practitionerrole-notes.md

## Identifiers
Multiple types of provider identifiers may be used in PractitionerRole.identifier element in the Canadian context:
* Provincial health plan provider/ Billing number
* Licence Number
* Medical Doctor Number

Implementers may use other identifiers to capture in a more specific way such as internal provider number, jurisdictions providing credentials.
The full list of possible identifier types is in [Canadian URI Registry](https://simplifier.net/canadianuriregistry/~resources?category=NamingSystem)

In some cases, the same license number can be used as the provider identifier and provider's qualification identifier.

## Telecom
A provider may have multiple ways to be contacted with different uses or applicable periods. This PractitionerRole profile allows multiple contact points (e.g. a telephone number or an email address) by which the individual may be contacted.

To indicate the preferred way to contact use Practitioner.telecom.rank attribute (i.e., the [ContactPoint.rank](https://www.hl7.org/fhir/datatypes.html#contactpoint) component) that specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.

### Role
Roles which this practitioner is authorized to perform for the organization are defined by Canadian [HealthcareProviderRoleType](https://tgateway.infoway-inforoute.ca/singlesubset.html?id=2.16.840.1.113883.2.20.3.48&versionid=20190813) value set as the coded representation of the provider's credentials.
Credential defines a role type that is used to categorize an entity that delivers health care in an expected and professional manner to an entity in need of health care services. 

The binding strength for the _PractitionerRole.code_ element is [Preferred](https://www.hl7.org/fhir/terminologies.html#preferred) meaning that implementers are encouraged to draw codes from the specified code system for interoperability purposes but are not required to do so to be considered conformant. 

### Specialty
Specific specialty of the practitioner defines the clinical, medical, surgical or other healthcare-related service specialty of a practitioner who interacts, treats or provides such services to or for a patient.
This profile recommends to use Canadian [PractitionerSpecialty](https://tgateway.infoway-inforoute.ca/singlesubset.html?id=2.16.840.1.113883.3.239.12.38) value set for speciality codes.

The binding strength for the _PractitionerRole.speciality_ element is [Preferred](https://www.hl7.org/fhir/terminologies.html#preferred) meaning that implementers are encouraged to draw codes from the specified code system for interoperability purposes but are not required to do so to be considered conformant. 


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-practitionerrole-registry-intro.md

# CA Baseline PractitionerRole Profile
This PractitionerRole profile sets minimum expectations for the PractitionerRole resource to record, search and fetch the recording of the location and types of services that Practitioner is able to provide for an organization.

This profile defines localization concepts for use in an Canadian context.

## Differences from US Core
This analysis is not applicable as this profile is a specialization of PractitionerRole for registry profiles and there is no equivalent in US Core R4 Implementation Guide, See the general PractitionerRole profile for differences.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of **0**, which means that they may be missing from a resource when it is exchanged between systems.

**Required elements:**
* reference to a practitioner

In addition to that, some optional elements (e.g., PractitionerRole.telecom, identifier data type) have required components that MUST be present if that optional element is provided.

### Data Absent Reason
In situations where the minimum cardinality of an element or attribute is **1** and information is missing and the Responder knows the precise reason for the absence of data, Responders SHALL send the reason for the missing information using values (such as [NullFlavor](https://www.hl7.org/fhir/extension-iso21090-nullflavor.html)) from the value set where they exist or using the [DataAbsentReason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) extension.

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

The following elements are marked as Must Support in the PractitionerRole-Registry profile:

**Must Support elements:**
* reference to a practitioner
* contact detail (e.g. a telephone number or an email address)
* specialty

## Best Practices/"Should" Support
**identifier**: It is recommended to have an identifier associated with PractitionerRole to assist in searches, however not every implementation (especially legacy implementations that combined both concepts of practitioner & practitionerRole) will include an identifier practitioner role. Given the scope and principles of the CA Baseline, the cardinality on this element was relaxed back to its base cardinality after receiving community feedback from FHIR Iguides that could not support the expectation in their existing implementation(s).

## Invariants
The invariant necessitating either code or specialty be present was removed after review against Canadian FHIR rpracititoner registry implementations identified challenges with some legacy systems (registry and otherwise) that have cpmmon use cases for PractitionerRole that do not include specialty or code.


## Extensions
**ext-rolestatus**: This PractitionerRole profile contains optional [RoleStatus]( https://build.fhir.org/ig/HL7-Canada/ca-baseline/extension-ext-rolestatus.html) [modifier extension](https://www.hl7.org/fhir/extensibility.html#modifierExtension) to indicate the possible states of the Role as defined by the [HL7v3 Role]( https://www.hl7.org/fhir/v3/RoleStatus/cs.html) class state machine.

This extension is labeled as modifier because the status code may provide additional knowledge about the PractitionerRole resource that modifies its meaning or interpretation.

**ext-statusreason**: In conjunction to the RoleStatus extension, this PractitionerRole profile includes an optional [StatusReason]( https://build.fhir.org/ig/HL7-Canada/ca-baseline/extension-ext-statusreason.html) extension to provides a textual description for the status.

Note: Role status effective from/to dates go to _PractitionerRole.period_ element.

## Usage Note
This PractitionerRole profile is intended to provide a foundation for a central or distributed Provider or Healthcare Directory.
Additional work flow components and elements may be required for a particular implementation.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-practitionerrole-registry-notes.md

## Identifiers
Multiple types of provider identifiers may be used in PractitionerRole.identifier element in the Canadian context:
* Provincial health plan provider/ Billing number
* Licence Number
* Medical Doctor Number

Implementers may use other identifiers to capture in a more specific way such as internal provider number, jurisdictions providing credentials.
The full list of possible identifier types is in [Canadian URI Registry](https://simplifier.net/canadianuriregistry/~resources?category=NamingSystem)

In some cases, the same license number can be used as the provider identifier and provider's qualification identifier.

## Telecom
A provider may have multiple ways to be contacted with different uses or applicable periods. This PractitionerRole profile allows multiple contact points (e.g. a telephone number or an email address) by which the individual may be contacted.

To indicate the preferred way to contact use Practitioner.telecom.rank attribute (i.e., the [ContactPoint.rank](https://www.hl7.org/fhir/datatypes.html#contactpoint) component) that specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.

### Role
Roles which this practitioner is authorized to perform for the organization are defined by Canadian [HealthcareProviderRoleType](https://tgateway.infoway-inforoute.ca/singlesubset.html?id=2.16.840.1.113883.2.20.3.48&versionid=20190813) value set as the coded representation of the provider's credentials.
Credential defines a role type that is used to categorize an entity that delivers health care in an expected and professional manner to an entity in need of health care services. 

The binding strength for the _PractitionerRole.code_ element is [Preferred](https://www.hl7.org/fhir/terminologies.html#preferred) meaning that implementers are encouraged to draw codes from the specified code system for interoperability purposes but are not required to do so to be considered conformant. 

### Specialty
Specific specialty of the practitioner defines the clinical, medical, surgical or other healthcare-related service specialty of a practitioner who interacts, treats or provides such services to or for a patient.
This profile recommends to use Canadian [PractitionerSpecialty](https://tgateway.infoway-inforoute.ca/singlesubset.html?id=2.16.840.1.113883.3.239.12.38) value set for speciality codes.

The binding strength for the _PractitionerRole.speciality_ element is [Preferred](https://www.hl7.org/fhir/terminologies.html#preferred) meaning that implementers are encouraged to draw codes from the specified code system for interoperability purposes but are not required to do so to be considered conformant. 


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-procedure-intro.md

# CA Baseline Procedure Profile
<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<blockquote class="stu-note">
		<p>This profile is seeking broader community and implementer feedback.
    <br>
    <br>
    The cardinality on procedure.performed[x] has been constrained to 1..1. While this did not cause any Due Diligence Review Issues with IPS or US Core, we are seeking feedback from additional implementers on whether this cardinality restriction poses problems for their FHIR implementations.
    <br>
    <br>
    This profile also socializes an example of a subset of SNOMED CT codes for procedures that is made available through the Infoway Terminology Gateway: https://fhir.infoway-inforoute.ca/ValueSet/interventioncode. This extensional value set was developed after initial review of the profiles but has been added in. We are seeking community feedback as to whether this subset is in use today by Canadian implementers or whether or not we should point to the larger value set of SNOMED CT codes contained in the IPS Value Set.
    <br>
    <br>
    Feedback can be provided using the <a href="https://simplifier.net/CanadianFHIRBaselineProfilesCA-Core/procedureprofile/~issues">Simplifier issue log for this profile</a>.
    </p>
	</blockquote>
  </div>

This profile sets minimum expectations for the Procedure resource to record, search and fetch current or historical procedures performed on or for a patient. It identifies which elements and value sets SHALL be present in the resource when using this profile.

This profile defines localization concepts for use in an Canadian context.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of **0**, which means that they may be missing from a resource when it is exchanged between systems.

**Required elements:**
* status specifying the state of the procedure (required in the base specification)
* code to classify the procedure that is performed
* reference to a subject
* date procedure was performed

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Procedure profile to aid record matching in databases with many pediatric records.

**Must Support elements:**
* status
* code
* reference to a subject
* performed date
* body site

## Usage Note
This Procedure profile is used to provide summary information about the occurrence of current or historical procedures performed on or for a patient, and is not intended to provide real-time snapshots of a procedure as it unfolds.
Examples include surgical procedures, diagnostic procedures, endoscopic procedures, biopsies, counseling, physiotherapy, personal support services, adult day care services, non-emergency transportation, home modification, exercise and so on.

A slice for absentOrUnknownProcedure comes from the IPS-UV specification and has been socialized in the profile as a way to represent a standard set of codes for identifying absent or unknown procedures. While the profile expects that a procedure.code be present (cardinality of 1..1) the use of the slice is entirely optional.  


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-procedure-notes.md

## Code
The _Procedure.code_ element is used to specify a procedure that is performed. 

The _Procedure.code_ element is [CodeableConcept](https://www.hl7.org/fhir/datatypes.html#codeableconcept) data type meaning that more than one [Coding](https://www.hl7.org/fhir/datatypes.html#codesystem) sub-elements can be present.
One of these Coding sub-elements MAY use [InterventionCodeSubsetOperatingRoomProcedure]( https://tgateway.infoway-inforoute.ca/vs/interventioncodesubsetoperatingroomprocedure) value set from Canada Health Infoway.

Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-servicerequest-intro.md

# CA ServiceRequest Profile
This Service Request Profile is based upon the core FHIR ServiceRequest resource and created to define the minimal set of data required to request for service such as diagnostic investigations, treatments, or operations to be performed.

This profile defines a service request structure that includes core localisation concepts for use as a diagnostic service request in a Canadian context.

## Mandatory Data Elements
All elements or attributes defined in FHIR have cardinality as part of their definition - a minimum number of required appearances and a maximum number.

Most elements in FHIR specification have a minimum cardinality of 0, which means that they may be missing from a resource when it is exchanged between systems.

In this Canadian Baseline ServiceRequest Profile following elements are required:
* status of the order (ServiceRequest.status)
* progression of a business activity (ServiceRequest.intent)
* on whom or what the service is to be performed (ServiceRequest.subject)
* who initiated the request (ServiceRequest.requester)

### Data Absent Reason
In situations where the minimum cardinality of an element or attribute is 1 and information is missing and the Responder knows the precise reason for the absence of data, Responders SHALL send the reason for the missing information using values (such as [NullFlavor](https://www.hl7.org/fhir/extension-iso21090-nullflavor.html)) from the value set where they exist or using the [DataAbsentReason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) extension.

## Must Support Data Elements
Some elements are labeled as MustSupport meaning that implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way (see [Must Support](https://build.fhir.org/ig/HL7-Canada/ca-baseline/general-guidance.html#must-support) definition).

Following elements are marked as Must Support in the Canadian ServiceRequest profile.

**Must Support elements:**
* identifier
* requisition
* status
* intent
* category
* code
* subject
* authoredOn
* requester
* performer

## Usage Note

This profile may be used to share relevant information required to support a referral or a transfer of care request from one practitioner to another in which a referral is sent directly to a specific health service described in a shared Health Services Directory.

A ServiceRequest can be supplemented with service-specific clinical decision support information and any other additionally required data, for example, available appointment slots.


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/StructureDefinition-profile-servicerequest-notes.md

## Category
The _ServiceRequest.category_ element conveys a code that classifies the service for searching, sorting and display purposes.

It may use Canada Health Infoway defined [InterventionCodeSubsetCare](https://tgateway.infoway-inforoute.ca/singlesubset.html?id=2.16.840.1.113883.2.20.3.271&versionid=20200930) value set to represent the care procedures performed by a Provider.

## Code
The _ServiceRequest.code_ element identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested.

If the service identified by the _ServiceRequest.category_ is _laboratory procedure_ the _pan-Canadian LOINC Observation Code Database_ ([pCLOCD](https://infocentral.infoway-inforoute.ca/en/standards/canadian/pclocd-loinc)) is preferred. pCLOCD is the Canadian version of the LOINC(tm) database. 

## Reason Code
The _ServiceRequest.reasonCode_ element in this profile uses the same [ProcedureReasonCodes](https://www.hl7.org/fhir/valueset-procedure-reason.html) value set as defined by the FHIR standard.

The binding is chagned from [Example](https://www.hl7.org/fhir/terminologies.html#example) to [Preferred](https://www.hl7.org/fhir/terminologies.html#preferred). Implementers are encouraged to draw codes from the specified code system for interoperability purposes. 


---

File: repos/HL7-Canada_SLASH_ca-baseline/input/pagecontent/vitalsigns-profiles.md

### Supported Profiles

CA Baseline adopts the following [Vital Signs profiles from the FHIR Observation resource specification](http://hl7.org/fhir/R4/observation-vitalsigns.html) without modificaton:

* [BMI](http://hl7.org/fhir/R4/bmi.html) - Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign body mass index
* [BP](http://hl7.org/fhir/R4/bp.html) - Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign blood pressure
* [BodyHeight](http://hl7.org/fhir/R4/bodyheight.html) - Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign body height
* [BodyWeight](http://hl7.org/fhir/R4/bodyweight.html) - Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign body weight
* [BodyTemp](http://hl7.org/fhir/R4/bodytemp.html) - Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign body temperature
* [HeartRate](http://hl7.org/fhir/R4/heartrate.html) - Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign heart rate
* [OxygenSat](http://hl7.org/fhir/R4/oxygensat.html) - Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign oxygen saturation
* [RespRate](http://hl7.org/fhir/R4/resprate.html) - Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign respiratory rate

### Open Issues
**CA Baseline Notes:** It is possible to replace some of Vital Signs profiles with CA Baseline specific. However, what is rational for introducing additional layers of complexity and formality that may be unwelcome, particularly for those systems that do not currently foresee a need to support both FHIR Vital Signs and CA Baseline Vital Signs profiles.

Feedback is welcome.


---

