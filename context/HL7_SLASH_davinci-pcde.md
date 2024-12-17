// File: input/pagecontent/allartifacts.md

Complying with this implementation guide means complying with a number of profiles, extensions, value sets and custom search parameters.  This page provides an overview of where this information can be found.

The FHIR artifacts used by PCDE are organized according to whether the content developed as part of the US Core implementation guides or is Da Vinci-specific.

### Artifact Lists
<table>
  <tr>
    <td><a href="artifacts.html">PCDE-specific Artifacts</a></td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.ver.uscore}}/profiles.html">US Core (3.1.0 - R4 based)</a></td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.ver.hrex}}/artifacts.html">Da Vinci Health Record Exchange (HRex) (0.2.0 - Sept 2020 ballot)</a></td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.ver.pdex}}/artifacts.html#structures-resource-profiles">Da Vinci Payer Data Exchange (PDex) (1.0.0 STU1)</a></td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.ver.pas}}/artifacts.html">Da Vinci Prior Authorization Support (PAS) (1.0.0 - STU1)</a></td>
  <tr>
    <td><a href="{{site.data.fhir.ver.subscription}}/artifacts.html">Subscription Backport (Jan 2021 ballot)</a></td>
  </tr>
</table>

Additional information about the use of these artifacts can be found in the [main specification](spec.html#profiles).


The artifacts are of four types:

* [Profiles]({{site.data.fhir.path}}profiling.html) constrain FHIR resources to reflect PCDE requirements
* [Extensions]({{site.data.fhir.path}}extensibility.html) define additional data elements that can be conveyed as part of a resource
* [Code Systems]({{site.data.fhir.path}}codesystem.html) define PCDE-specific terminologies to be used in one or more of those profiles
* [Value Sets]({{site.data.fhir.path}}valueset.html) define the specific subsets of both PCDE-defined and other code systems that can be (or are recommended to be) used within one or more profile elements
* [Operations]({{site.data.fhir.path}}operationdefinition.html) of which there is only one which defines the PCDE-specific constraints on the Claim submit operation.

<!-- Todo: examples, capabilitystatement, TestScenario? -->


---

// File: input/pagecontent/background.md

### Da Vinci
Da Vinci is an industry sponsored project that brings together the U.S. provider, HIT vendor and payer communities to help payers and providers to positively impact clinical, quality, cost, and care management outcomes using FHIR-related technologies.  The project organizes meetings (face-to-face and conference calls) as well as connectathons to find ways to leverage FHIR technologies to support and integrate value-based care (VBC) data exchange across communities. Da Vinci identifies value-based care use cases of interest to its members and the community as a whole.

The process that Da Vinci has adopted includes:
1. identify business, clinical, technical and testing requirements,
2. develop and ballot a FHIR based implementation guide (IG),
3. develop a reference implementation (RI) that is used to demonstrate that the concepts in the IG are possible to implement,
4. pilot the standard
5. support the production use of the IG to enable exchange of data to support interoperability for value-based care.

Additional information about Da Vinci, its members, the use cases and the implementation guides being developed can all be found on the [HL7 website](http://www.hl7.org/about/davinci). Meeting minutes and other materials can be found on the [Da Vinci Confluence page](https://confluence.hl7.org/display/DVP).

### Systems
The PCDE implementation guide defines the responsibilities of the two types of systems involved in a PCDE solution:

**Original payer systems** Systems that manage data on behalf of a payer who is a source for data to be transferred

**New payer systems** Systems that manage data on behalf of a payer who is an intended recipient of transferred data.

### Underlying technologies
This guide is based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard.  Implementers of this specification therefore need to understand some basic information about these specifications.

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

This implementation guide supports the [R4]({{site.data.fhir.path}}index.html) version of the FHIR standard. R4 is just recently published and the goal is to ensure the implementation guide is aligned with the current direction of the FHIR standard.

Because of this IG's focus on document creation, implementers should also familiarize themselves with the FHIR [Composition]({{site.data.fhir.path}}composition.html) and the guidelines around the creation and processing of [FHIR documents]({{site.data.fhir.path}}documents.html).

This implementation guide  builds on the following IGs:
* [Da Vinci Health Record Exchange (HRex)]({{site.data.fhir.ver.hrex}})
* [Da Vinci Health Record Exchange (PDex)]({{site.data.fhir.ver.pdex}})
* [Da Vinci Prior Authorization Support (PAS)]({{site.data.fhir.ver.pas}})
* [US Core 3.1 (R4-based)]({{site.data.fhir.ver.uscore}})

Implementers should familiarize themselves with the [Task-based]({{site.data.fhir.ver.hrex}}/exchanging-request.html#requesting-exchange-using-task) communication mechanism and the [member match]({{site.data.fhir.ver.hrex}}/OperationDefinition-member-match.html) operation defined within HRex and the profiles defined in that IG as well as all of the others.


---

// File: input/pagecontent/credits.md

### Credits
Primary authors:

* Jean Duteau (Duteau Design)
* Lloyd McKenzie (Gevity Consulting)

Project leads:

* Robert Dieterle (Enable Care, LLC)
* Viet Nguyen (Stratametrics, LLC)
* Julia Skapik (Cognitive Medical Systems)
* Nita Thingalaya (IBC)

Project management and coordination:

* Jocelyn Keegan (Point of Care Partners)
* Sachin Bhatt (Point of Care Partners)
* Vanessa Candelora (Point of Care Partners)

Technical support and guidance:

* Grahame Grieve (Health Intersections)

Reference implementation:

* Jason Walonski (Mitre)
* Joe Minieri (Mitre)
* May Terry (Mitre)

This implementation guide was created under the supervision and review of the HL7 [Financial Management](http://www.hl7.org/Special/committees/fm) (sponsor) and [Attachments](http://www.hl7.org/Special/Committees/claims) (co-sponsor) work groups.

This implementation guide was initiated created with the support of the twenty-two founding [Da Vinci Project] (http://www.hl7.org/about/davinci/index.cfm?ref=common) member organizations.

Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm and expertise to this work.

This IG includes icons licensed under Creative Commons-Attribution license by Alex Auda Samora (health insurance) and person by Caitlin George from the Noun Project (person) from the Noun Project

---

// File: input/pagecontent/downloads.md

### Links

This implementation guide is web-based and is intended to be browsed online.  However, for the convenience of implementers, both this implementation guide, various sub-packages of it and some of the source specifications are available for download.  The following links allow you to download various parts of this implementation guide and other referenced implementation guides for local use.

* This [full IG](full-ig.zip)
* The [resource definitions](definitions.json.zip)  from this IG for use with the FHIR validator (see below)
* The full FHIR [R4]({{site.data.fhir.path}}fhir-spec.zip) specifications
* The [R3.1]({{site.data.fhir.ver.uscore}}/full-ig.zip) version of the US Core implementation guide
* The [2020Sep]({{site.data.fhir.ver.hrex}}/full-ig.zip) version of the Da Vinci Health Record Exchange (HRex) implementation guide
* The [2019Jul]({{site.data.fhir.ver.pdex}}/full-ig.zip) version of the Da Vinci Payer Data Exchange (PDex) implementation guide
* The [STU 1]({{site.data.fhir.ver.pas}}/full-ig.zip) version of the Da Vinci Prior Authorization Support (PAS) implementation guide
* The [2021Jan]({{site.data.fhir.ver.subscription}}/full-ig.zip) version of the Subscription Backport implementation guide
* A [validator](https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar) that can be used to check FHIR resource instance validity

<!-- Todo: reference implementations -->

---

// File: input/pagecontent/index.md

{% raw %}
<blockquote class="stu-note">
<p>
This is the initial official release of this specification.  It includes feedback from both ballot review and connectathon testing.  However, it will continue to evolve based on implementer feedback.
</p>
<p>
Feedback is welcome and may be submitted through the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> indicating "US Da Vinci PCDE" as the specification.
</p>
<p>
This implementation guide is dependent on other specifications.  Please submit any comments you have on these base specifications as follows:
</p>
<ul>
  <li>Feedback on the FHIR core specification should be submitted to the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> with "FHIR Core" as the specification.</li>
  <li>Feedback on the US core profiles should be submitted to the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> with "US Core" as the specification.</li>
  <li>Feedback on profiles from one of the other Da Vinci implementation guides should also be submitted to the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> with the specification set to the appropriate IG.</li>
</ul>
<p>
Individuals interested in participating in the Prior Authorization Support or other HL7 Da Vinci projects can find information about Da Vinci <a href="http://www.hl7.org/about/davinci">here</a>.
</p>
</blockquote>
{% endraw %}

### Overview
The United States has one of the world's most complex healthcare systems with provision of care crossing multiple venues, clinical settings, and geographic boundaries. The healthcare services offered vary across organizations, and the terminology, standards and equipment involved often vary as well.  Transitions of care are therefore complex and provide frequent opportunities for medical errors, redundant care, and care gaps. Despite federal regulatory policy mandating data exchange between care providers, there remain serious problems with timely and comprehensive data exchange. Beyond issues with disconnected data transmission across care providers, patients generally have multiple payers including their role as a self-payer. As with care provider coordination, payer coordination is also essential to care continuity. For example, a patient who relies on home oxygen should not be at risk of hospitalization because a new payer is not aware of the requirement until after the oxygen runs out.

This need for continuity across payers has been recognized also by the United States' largest payer, the Centers for Medicare and Medicaid Services (CMS), who has proposed in 2019 ([Federal Register :: Medicare and Medicaid Programs; Patient Protection and Affordable Care Act; Interoperability and Patient Access for Medicare Advantage Organization and Medicaid Managed Care Plans, State Medicaid Agencies, CHIP Agencies and CHIP Managed Care Entities, Issuers of Qualified Health Plans in the Federally-Facilitated Exchanges and Health Care Providers](https://www.federalregister.gov/documents/2019/03/04/2019-02200/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and)) to require the exchange of data about ongoing and planned treatments covered by a previous payer and make it available to a current payer along with the metadata around the conditions they are treating, as well as how the determination was made. While this did not make it into the CMS Interoperability final rule ([Federal Register :: Medicare and Medicaid Programs; Patient Protection and Affordable Care Act; Interoperability and Patient Access for Medicare Advantage Organization and Medicaid Managed Care Plans, State Medicaid Agencies, CHIP Agencies and CHIP Managed Care Entities, Issuers of Qualified Health Plans on the Federally-Facilitated Exchanges, and Health Care Providers](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and)) , the need still exists to support continuity of care when a member transitions coverage form one payer to another.

It would be reasonable for payers to use this IG for exchanges outside of the required plans if desired. Optimally, the routine and electronic exchange of this information would minimize the need for additional information to be obtained from patients and providers, and ensure that critical services and therapies are continued without interruption. While for large scale payer transitions, such as employer plan transitions, there have been some efforts to provide coordination of care and information exchange, there are no known formal efforts to support information and care exchange in a systematic way at the payer level.

The DaVinci Project is already supporting the exchange of payer information for prior authorization, formulary information sharing, provider directory and other member-related health information. Furthermore, there are aspects of the need to exchange active treatment plans and decisions which should align to use cases beyond the payer exchange use case. The coverage decision exchange document allows the capture of relevant clinical information about decisions, treatments, and their context using CarePlan. This aligns with the approach that clinicians and clinical systems take to describe this same content during transitions of care. This should make it easier to integrate information received by payers from providers.

The form and manner of the content in the CarePlan is aligned to the regulatory framework of data exchange at transitions of care including the goals and treatment plan as well as the United States Core Data for Interoperability (<a href="https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi?">USCDI</a>) mandated by the Office of the National Coordinator for Health IT (ONC) and the Center for Medicated Services (CMS).  The data shared within the document will depend on the nature of the patient's past care, but could include past prior authorizations and claims, information about past meds and treatments, recent and historical lab results, implanted or supplied devices, etc.

For this use case, we address the need for continuity of treatment when patients move from one payer's health insurance plan to another.  In the current situation, the patient and new payers often do not have the information needed to continue treatment in progress.  As a result, patients can face a break in continuity of care, challenges to share additional information, and increased costs as tests are re-run or prior therapies need to be re-tested in order to comply with the rules of the new payer.  By enabling an authorized transfer of information from the original payer to the new payer, the new payer can have access to information about what therapies are currently in place and the rationale for them, as well as what precursor steps have been taken to demonstrate the medical necessity and appropriateness of the current therapy.  By automating this exchange and maximizing the computability of the information shared, a process that frequently takes weeks or months can be reduced to a few days or even minutes - reducing costs and improving patient safety, quality and experience.

This implementation guide defines standardized mechanisms for a patient or payer to enable a transfer of "current active treatments" with other relevant metadata and coverage-related information from a prior payer to a new payer. For example, gender transition information, amputations or other past medical history that may impact the evaluation of the appropriateness of future claims. It also defines a standardized structure for organizing and encoding that information to ease its consumption by the new payer organization.

Obviously, actual continuity of care will be governed by the policies of the new payer.  It is possible that the patient's new coverage will not cover previous therapies or that additional information will be required that is not available from the original payer.  However, disruption in continuity of care due to the new payer being unaware of information held by the original payer should be significantly diminished through the adoption of this implementation guide.

### Content and organization
The implementation guide is organized into the following sections:

* [Use Cases and Overview](usecases.html) describes the intent of the implementation guide, gives examples of its use and provides a high-level overview of expected process flow
* [Technical Background](background.html) describes the different specifications this implementation guide relies on and indicates what developers should read and understand prior to implementing this specification
* [Formal Specification](spec.html) covers the detailed implementation requirements and conformance expectations
* [Artifacts](allartifacts.html) introduces and provides links to the FHIR [R4](artifacts.html) profiles, operations and other FHIR artifacts used in this implementation guide
* [Downloads](downloads.html) allows download of this and other specifications as well as other useful files
* [Credits](credits.html) identifies the individuals and organizations involved in developing this implementation guide


### Dependencies
This implementation guide relies on the following other specifications:
* **[FHIR R4]({{site.data.fhir.path}})** - The 'current' official version of FHIR as of the time this implementation guide was published.  See the [background page](background.html#fhir) for key pieces of this specification implementers should be familiar with.
* **[US Core STU3.1]({{site.data.fhir.ver.uscore}})** - The most recent official release of US Core (based on FHIR R4).
* **[Da Vinci HRex Sept. 2020 ballot]({{site.data.fhir.ver.hrex}})** - The balloted version of Da Vinci Health Record Exchange IG.  This implementation guide will be updated to be based on the official published version of this IG once the ballot process is complete.
* **[Da Vinci PDex July STU 1]({{site.data.fhir.ver.pdex)** - The balloted version of Da Vinci Payer Data Exchange IG.  This implementation guide will be updated to be based on the official published version of this IG once the ballot process is complete.
* **[Da Vinci PAS Sept. STU 1]({{site.data.fhir.ver.pas}})** - The balloted version of Da Vinci Prior Authorization Support IG.  This implementation guide will be updated to be based on the official published version of this IG once the ballot process is complete.
* **[Subscription Backport Jan 2021 ballot]({{site.data.fhir.ver.subscription}})** - The balloted version of the R4 backport of R5 subscriptoin capabilities.  This implementation guide will be updated to be based on the official published version of this IG once the ballot process is complete.

This implementation guide defines additional constraints and usage expectations above and beyond the information found in these base specifications.


### Implementation Guidance
In addition to this implementation guide, Da Vinci maintains a more dynamic 'supplemental' implementation guide containing additional examples and specific advice about how to best construct Coverage Transition documents for various real-world scenarios.  This supplemental material can be found [here](https://confluence.hl7.org/display/DVP/PCDE+Supplemental+Guide) on HL7's Confluence site.

---

// File: input/pagecontent/spec.md

This page is divided into three sections which outline the expectations for systems wishing to comply with the IG:
* general [context](#context) that implementers need to understand in reading the remainder of the guide;

* a description of the technical [data exchange](#data-exchange) mechanisms by which a patient requests and enables that information to be transmitted from the original payer to the new payer and how that transfer actually occurs; and

* a description of the [data structure](#data-structure) to be shared that supports a transition of coverage responsibility from one payer plan to another

### Context
#### Pre-reading
Before reading this formal specification, implementers should first familiarize themselves with two other key portions of the specification:

* The [Use Cases & Overview](usecases.html) page provides context for what this formal specification is trying to accomplish and will give a sense of both the business context and general process flow enabled by the formal specification below.

* The [Technical Background](background.html) page provides information about the underlying specifications and indicates what portions of them should be read and understood to have the necessary foundation to understand the constraints and usage guidance described here.

#### Conformance and Conventions
This implementation guide adheres to the conformance documentation conventions found in the [HRex Conformance Expecations page]({{site.data.fhir.ver.hrex}}/conformance.html), including expectations around the meaning of 'Must Support'.

#### Profiles
This specification makes significant use of [FHIR profiles]({{site.data.fhir.path}}profiling.html) and terminology artifacts to describe the content to be shared as part of prior authorization requests and responses.

The full set of profiles defined in or used by this implementation guide can be found by following the links on the [Artifacts](allartifacts.html) page.

#### Terminology
This IG defines custom codes for document types and sections.  Implementers **SHALL** consider the codes 'temporary'.  After implementation testing and confirmation, these custom codes will migrate to standardized codes in an official code system - most likely LOINC.

### Data Exchange
This data exchange builds on the Da Vinci [Health Record Exchange (HRex)]({{site.data.fhir.ver.hrex}}) and [Payer Data Exchange (PDex)]({{site.data.fhir.ver.pdex}}) implementation guides, optionally leveraging the [OAuth 2.0-based]({{site.data.fhir.ver.pdex}}/PDexImplementationActorsInteractionsDataPayloadsandMethods.html#oauth20-and-fhir-api) mechanism to enable data flow between two payer systems and the [Task-based requested exchange]({{site.data.fhir.ver.hrex}}/exchanging-request.html#task) mechanism to request the desired document.  This section of the implementation guide provides details on that flow.

#### Pre-conditions
For this implementation guide to be applicable, the following conditions must be met:

* A member of a covered plan has enrolled in another covered plan offered by another payer.

* That member is currently being treated for some chronic or acute condition.

* The new payer has performed a patient / coverage resolution process and has information about relevant prior coverage.

* Both the new payer and the old payer must be able to recognize each other based on an agreed payer identifier scheme.

* The new payer system knows the base FHIR API URL for the original payer endpoint and has basic business arrangements in place allowing query of data from it.

NOTE: Work to standardize how payer identification will be managed, as well as how the FHIR endpoint for a given payer will be found (e.g. through the use of a registry) is ongoing.  For now, this is left to site-to-site negotiation.

#### Privacy & Security
This implementation guide inherits all of the requirements and guidance defined in the [HRex Security and Privacy page]({{site.data.fhir.ver.hrex}}/security.html).  Conformant systems must familiarize themselves with and abide by the expectations established there for all functions enabled by this implementation guide.

#### Workflow
1. Optional: The member uses an interface/portal or SMART app within the new payer's system to authenticate to the original payer's system and authorize the prior payer to allow the new payer to access the member's clinical and treatment data.  The original payer's system provides an OAuth 2.0 token to the new plan.

2. The new payer executes a [Member Match]({{site.data.fhir.ver.hrex}}/OperationDefinition-member-match.html) operation using the member's old insurance information and demographics to determine the patient identifier on the original payer's system.

3. The new payer's system (possibly using the token provided in #1) requests a [Coverage Transition Document](#coverage-transition-document-structure) from the prior plan by POSTing a [Task](StructureDefinition-pcde-task-request.html) to their system.  Optionally, the new payer creates a [Subscription](#subscription) on the old payer's system, requesting notifications about updates to the newly created Task.

4. The source (original) payer either locates an existing document (previously prepared) or assembles the information needed and creates the requested document.  Updates are made to the `Task.status` element and, optionally, human-readable status information within `Task.businessStatus.text` element as the task progresses through different [states](https://www.hl7.org/fhir/task.html#statemachine).  (In PCDE, the Task is limited to the states 'requested', 'in-progress', 'completed' or 'failed'.)  The original payer updates `Task.output` with a reference to the document when `Task.status` is completed.

5. The new payer queries the original payer's system for updates to the Task.  This is either done by polling at regular intervals or by responding to a Subscription notification.  

6. When the `Task.status` is completed, the new payer retrieves the [Coverage Transition Document](#coverage-transition-document-structure) pointed to by the `Task.output`.

7. The new payer incorporates the information in the document into their utilization management / utilization review process for review and approval of the ongoing treatments for the new member.

The following diagram illustrates the workflow that is supported by this implementation guide:

{::options parse_block_html="false" /}
<figure>
  <img style="padding-bottom:30px" width="600px" src="workflow.png" alt="PCDE Workflow"/>
</figure>
{::options parse_block_html="true" /}

#### Authorization
This IG provides for the optional use of the same authorization process PDex uses for member directed exchange. By using the SMART on FHIR implementation of OAuth 2.0 and providing an appropriate access token from an original payer's system to a new payer at the request of a member, the new payer's application is able to authenticate to the original payer's system and gain access to information authorized by the member.

##### Handling Sensitive Data
Payers **SHALL** provide a method for past members to authorize the exchange sensitive information as defined by federal, state and, where appropriate, local statue.  In the event that a member does not permit a payer to exchange sensitive data, the payer **SHALL** have a method to sequester such information and make it unavailable for exchange.  This **SHOULD** happen as part of the authorization process.

##### Token duration
The Token, if one is used at all, is only used to authorize the initial creation of the Task.  It is not necessary to provide the token when establishing a subscription or polling to monitor the Task or to retrieve the Task and its linked document.  The duration of the token will generally be short (hours at maximum) and so cannot authorize multiple Tasks soliciting information over time.  Payers **SHALL** ensure that only authorized systems (typically just the requesting payer) are able to access PCDE Tasks and any coverage transition document created as a result.

#### Initiating document generation/retrieval
Once the necessary token has been retrieved through the OAuth process, the new payer system will POST a [PCDE Task](StructureDefinition-pcde-task-request.html) request to the original payer system.  The requester **SHALL** populate the `Task.code` and `Task.status` to indicate that a [Coverage Transition document](#coverage-transition-document-structure) is requested.  (See [here](Task-requested.html) for an example of a requested Task.)

If the receiving system does not recognize the member identified in Task.for or there are other structural issues with that Task (e.g. requesting payer is not recognized, Task doesn't comply with profile, etc.), then the original payer SHALL respond with an appropriate 4xx or 5xx HTTP error accompanied by an [OperationOutcome]({{site.data.fhir.path}}operationoutcome.html) conveying the reason for failure.

In most cases, the creation of the Task will initiate a manual process within the original payer organization to create an appropriate Coverage Transition document.  However, in some cases, a payer might choose to pro-actively create Coverage Transition documents when the patient's coverage ends and is not renewed.  If an appropriate pre-existing document already exists for the member, the original payer **MAY** simply update the Task to reference the existing document rather than creating a new one.  In other cases, a human might review the document and ensure it was still relevant/appropriate but determine there was no need to create a new one.  In either case, the Task would be updated as per usual to point to the existing document.  However, the elapsed time from the posting of the Task requesting the document would be shorter because the document was pre-existing.

#### Tracking Status
While fulfilling the request, the original payer **MAY** update `Task.status` or `Task.businessStatus.text` to reflect interim status information.  (For example, indicating that the task is in-progress with a date when the document is expected to be ready.)  An example can be seen [here](Task-in-progress.html).

When the document is available, original payer **SHALL** update `Task.status` to `completed` and provide a reference to the [Coverage Transition document](#coverage-transition-document-structure) resource in `Task.output`.    An example can be seen [here](Task-completed.html).

The payer may be unable to complete a request if the member is unknown or the information requested cannot be provided.  In these cases, the original payer **SHALL** indicate that a request was not completed by updating `Task.status` to `failed` and, optionally, `Task.statusReason`.  An example can be seen [here](Task-failed.html).

There are two options for monitoring the Task to verify acceptance, determine progress and determine if the requested document is ready for retrieval: subscription and polling.

#### Subscription
Payers **SHOULD** support [subscriptions]({{site.data.fhir.ver.hrex}}/exchanging-subscription.html) to allow monitoring of changes to the Task resource rather than relying on [polling]({{site.data.fhir.ver.hrex}}/exchanging-polling.html).  Payers making use of subscription SHOULD comply with the [Subscription Backport IG]({{site.data.fhir.ver.subscription}}) which allows pre-adoption of R5 subscription mechanisms in R4-conformant systems.

##### Polling
If no subscription was created, the new payer **SHALL** routinely perform a read on the original payer's system using the id of the originally created Task to receive updates to the Task.  Polling is performed by executing a `GET` operation using the `id` received from the original payer when the Task was created, optionally using the `If-Modified-Since` header to limit the data returned if the Task has not been updated since it was last polled.

Example:
```
GET [base]/Task/1135804
```

When the document is available, original payer **SHALL** update `Task.status` to `completed` and provide a reference to the [Coverage Transition document](#coverage-transition-document-structure) resource in `Task.output`.

#### Retrieving the document
When the `Task.status` is `completed`, the Task will have an output element with the name 'document' that is a reference to the requested coverage transition document.  On retrieving the Task and finding it in completed state, the new payer **SHALL** perform a 'read' on the specified URL for the document referenced in the `Task.output` element for the newly created document, again using the previously supplied token.  The new payer can then process the document contents as necessary to ensure a smooth transition of care.

NOTES:

* This specification does not, itself, impose any expectation on the duration of records retention after a patient's coverage ceases, only that the payer expose all relevant information it still retains. If no details are retained, but the payer still recognizes the patient, the Task should be changed to a status of 'Failed' with a Task.statusReason indicating that no records remain to be shared.

* The original payer **SHALL** make the Task resource and associated document available for a minimum of 7 days after transitioning to complete, or for at least 24 hours after a successful response is returned to a 'read' attempt by the new payer, whichever is less.  This ensures the new payer has an opportunity to re-query the document if an issue occurs during the original read.

* It is theoretically possible for multiple Tasks to point to the same document (e.g. if a patient is transitioning to coverage under two different plans, the payer **MAY** simply update the second Task to point to a coverage transition document originally created for another payer).


### Data structure
This IG uses a [FHIR document]({{site.data.fhir.path}}documents.html) approach to organizing the information shared by the original payer system.  This aligns with the approach typically used for any other sort of transition of responsibility (be it clinical or administrative responsibility).  The document approach allows arbitrary data objects (typically FHIR resources) in logical groupings for human consumption/review and allows human narrative to provide context and guidance on interpreting and using the information.

The original payer **SHOULD** send all information they have available they believe to be reasonably necessary for the new payer to make a determination of medical necessity.  (Future versions of this specification are expected to tighten this requirement to **SHALL**.)  The original payer is NOT expected solicit data from other organizations, merely to share the data it already has available.  All information disclosed to the new payer is expected to be disclosed within the Coverage Transition document defined by this specification.  Disclosure of information via phone, fax or other means is non-conformant.

While the eventual target of future versions of this IG may be to allow fully automated import and use of the provided payer data, it is likely that at least some cases will always require human review and, in the short term, most/all payers will incorporate human review in the consumption of the data shared.  The document approach significantly simplifies this review process.

{% raw %}
<blockquote class="stu-note">
<p>
Da Vinci is looking for implementer feedback around whether this IG should mandate support (i.e. 0..*, must support) for 'goals' related to an active therapy.  For example, STAR ratings quality measures.  Please indicate whether this is something that would be useful and that your system would be able to support.</p>
</blockquote>
{% endraw %}

#### Coverage Transition document structure
All Coverage Transition documents SHALL comply with the [PCDE Bundle](StructureDefinition-profile-pcde-bundle.html) and [PCDE Composition](StructureDefinition-profile-composition.html) profiles.  These profiles set out a document structure as follows:

{::options parse_block_html="false" /}
<figure>
  <img style="padding-bottom:30px" width="250px" src="document.png" alt="Coverage Transition Document structure"/>
</figure>
{::options parse_block_html="true" /}

An example of a Coverage Transition document can be found [here](Bundle-pcde-document.html).

There are two major sections to a Coverage Transition Document: [Active Treatments](#active-treatment) and [Other Documentation](#other-documentation)

##### Active Treatment
This section should repeat for each "active treatment" the patient is receiving under coverage from the original payer at the time the document is prepared.  Active treatments include any treatment that, to the best of the payer's knowledge, is ongoing and for which the new payer might reasonably expect prior authorizations or claims, such as:

* medications
* procedures
* medical equipment
* enrollment in disease management programs
* etc.

If a patient has no active treatments, there will be no sections specified.  If there are no active treatments and no [Other Documentation](#other-documentation) to provide, then no document will be produced and the final Task status will be 'failed' with a statusReason indicating there is no information to share.

Payer knowledge of what treatments are 'active' might come from prior authorizations, recently submitted claims or from clinical information shared with the payer as part of care management or other processes.

For each active treatment the following three sub-sections are available:

###### Treatment

This mandatory section defines a single treatment.  The [CarePlan](StructureDefinition-profile-careplan.html) instance that is the entry will convey the following information:
* Identiifcation of active treatment is (coded if possible, though text is permitted where a standardized procedure/medication/product code does not exist)
* The condition that caused the need for treatment (coded as ICD-10-CM if possible)
* Any protocol being followed in the treatment (referenced by URL)

###### Prior Coverage
This section will include the most recent relevant Claim(s) and/or Prior Authorization(s) associated with the treatment.  The purpose is to give a sense of the number of authorized treatments, how many have already been performed/paid for, date of the most recently billed occurrence, etc.  Section narrative may provide additional detail.

Prior Authorizations SHOULD comply with the [PAS Prior Authorization]({{site.data.fhir.ver.pas}}/StructureDefinition-profile-claim.html) and [PAS Prior Authorization Response]({{site.data.fhir.ver.pas}}/StructureDefinition-profile-claimresponse.html) profile.  As yet, there are no Da Vinci profiles available for Claim resources, so technically any FHIR-valid Claim and ClaimResponse resources are allowed, though alignment with the PAS Prior Authorization profiles is recommended.  The [US Core DocumentReference]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-documentreference.html) profile can be used to convey PDF or other non-discrete representations if full FHIR-encoding is not possible.

###### Supporting Information
These sections provide additional information that supports the treatment decision.  Examples might include past treatments that had been tried and proved ineffective, lab results or other reports that support the decision to perform the treatment, clinical orders that support the treatment, etc.

Each repetition must have one or more resource entries.  The section narrative SHALL provide a human description of the relevance of the contained resource entries.  Separate sections can be used to provide different groupings of resources that provide different types of support.  For example, one repetition might deal with prior therapy.  Another might contain the current order.  A third might indicate dispenses to date against that order.

While it is technically possible to send raw NCPDP, X12 or other content in this specification wrapped using DocumentReference, the general expectation is that relevant claims information will be exposed as appropriate FHIR resources (e.g. Encounter, Procedure, etc.). In cases where discrete information can't be appropriately exposed in FHIR, PDFs wrapped in DocumentReference are also an option.  Transmitting raw legacy data should be used only as a last resort when the other two approaches are not feasible.

When interpreting information shared in a coverage transfer document, it is often helpful to understand the source and history of the information being shared.  This also allows the receiving payer to better reconcile the shared information with data shared from other sources.  For this reason, resources shared as 'supporting' information SHOULD be accompanied by Provenance instances complying with the [PDex Provenance profile]({{site.data.fhir.ver.pdex}}/StructureDefinition-pdex-provenance.html) as additional 'supporting information' entries.

##### Other Documentation
These sections allow conveying information that is not directly related to a current active therapy but which may be relevant to allowing the new payer to provide appropriate care.  For example, conveying that a patient has had a double-mastectomy in the past.  That may not be related to 'active therapy', but would still be relevant in terms of the new payer knowing not to send reminders for mammogram treatments.

The expectation is that the original payer may have this kind of information available and **SHOULD** send it where it could be relevant to ongoing care activities; however, there is not a requirement to send information unless it is associated with active treatment.

Multiple sections are allowed so that separate narratives can be used to group resources that are related together.  Narrative-only sections can be used to convey information for which no discrete data exists or is relevant.

#### Additional Notes
1.  The exchanges covered by this implementation guide are subject to appropriate regulation regarding operations and consent, includingstate and federal privacy standards. The entities participating in these exchanges should be familiar with and adhere to these and other relevant regulatory requirements.

2. At the moment, this IG is quite flexible with how information is encoded.  Future versions of this IG will likely impose additional expectations, at least for certain types of conditions/therapies, as it becomes more obvious where additional interoperability requirements can result in less manual effort/reduced time in processing transitions in coverage.

3. The US Core profiles impose terminology expectations that reflect commonly used clinical terminologies.  These may not always align with commonly used billing codes.  While billing codes may be sent as well (as additional translations), payers SHALL translate to the appropriate clinical terminology (e.g. NDC or HCPCS drug codes to RxNorm) in order to comply with the US Core profiles if an appropriate code exists in the US Core value set.

4. The Coverage Transition document structure is open-ended.  Additional sections and sub-sections are permitted and additional data elements (including extensions) are permitted as part of the document instance.  Additional elements should never be used in place of 'standard' elements but can be sent in addition to provide additional context to systems that understand the additional discrete data.  All important information should be reflected in the resource narrative (text) elements and/or in the section.text elements.


---

// File: input/pagecontent/usecases.md

### Current environment
Patients that move from one payer to another frequently experience interruptions or delays to existing care for chronic and acute conditions related to the inability of the new payer to obtain information about the ongoing treatment, understand its progress and verify the clinical need for such treatments.  This frequently requires the patient or providers to change therapies, tolerate delays in care, see additional providers or schedule additional visits, and fill out or resubmit additional documentation showing that the care is medically necessary and appropriate. The process creates a significant burden on providers, add unnecessary costs, and introduces risk to the patient.

### Background
The Healthcare industry in the US has recognized the need to support, where possible, continuity of care for both chronic and acute problems for individuals that move from one payer to another. The CMS NPRM on interoperability published in the Federal Register on March 3, 2019, requested input on requiring that payers be able to exchange clinical information from a prior payer to the current payer. The exchange of information is intended, as indicated in the preamble to the NPRM, to enable continuity of care as a member moves from one covered plan to another without:
1. forcing the member to pay for the care unless required as part of the change in plan coverage
2. have care terminated,  or
3. requiring providers to submit additional documentation to the new plan that was already available to the prior plan.

The goal is to provide for continuity of care and to minimize provider burden.

### In Scope
This Implementation Guide (IG) is focused on organizing and exchanging information from a prior payer associated with current treatments to allow the new payer to continue these treatments without placing an additional burden on either the member or the provider or creating interruptions in care.

### Out-of-Scope
This implementation guide is not:

1. intended to define the exchange of information from any entity other than a prior payer to a current payer;
2. prescriptive on what information is required to substantiate medical necessity for any treatment;
3. expecting the exchange of plan proprietary guidelines; or
4. intended to fully automate the review and authorization process for continuity of care for the new payer for current treatments

### Business Requirements
The goal of this implementation guide is to complement the [payer data exchange implementation guide (PDex)]({{site.data.fhir.ver.pdex}}) by providing a framework in which a payer can indicate:

1. active treatment plans that a member is receiving,
2. conditions that led to the need for the active treatment plans,
3. guidelines that were used to evaluate the need for the care the patient is receiving,
4. prior authorizations that are in effect,
5. successes or failures of prior treatment that are relevant to the current treatment, (e.g. step therapies), and
6. the supporting clinical documentation that justifies the need for those specific treatments.

All of the information may not be available in a structured format (or capable of being represented in the named FHIR resources).  However, the ability to indicate current problems, treatments, diagnoses, relevant guidelines, prior authorizations and associated clinical data as a coherent set of related information allows the new payer to review that information in light of the members need.  They can then, where possible, use it to support the continuation of treatment for chronic or acute illnesses without forcing the existing provider or a new provider to submit additional documentation that is duplicative of information that is already available to the prior payer.

### Clinical Requirements
Clinical requirements to support this implementation guide include the following:

1.  the ability to define active treatment plans that are being provided to the member which include not just traditional treatments (e.g. home oxygen therapy for COPD. medications for management of diabetes) and their progress and the relevant providers of that care, but also participation in disease management programs to support a member's chronic illnesses and help manage either specific clinical outcomes or quality of life;
2.  conditions that led to the need for these treatments, such as: COPD - to indicating a need for home oxygen therapy, diabetes - basis for medication management of diabetes, organ transplant - indicating the need for immunosuppressants, etc.;
3.  guidelines that are used to decide that such a treatment is appropriate.  These can include commercial guidelines such as MCG, InterQual and others.   The goal is to include a reference (e.g. URL) to the appropriate guideline;
4.	any specific prior authorizations that are in effect to support the treatment such as authorization for home oxygen therapy, and
5.	relevant clinical documentation that supports the need for the current therapy which may include, where appropriate, indications of prior therapies that have been tried and failed or have been considered and not pursued due to potential complications that are considered antecedent to the current therapy

#### Testing Requirements
This IG has been constructed in a manner that allows testing and validation - specifically:
* adherence to profiles defined in this guide
* adherence to profiles and communication patterns from referenced IGs such as PDex, CDex and HRex, and
* testing of conformance to the underlying FHIR standards for the associated release (e.g. FHIR R4).

<!--### Use Cases
1. Home oxygen therapy for COPD
    1.	Treatment for chronic illness
    2.	Need diagnosis and possibly O2 Sat
2. Insulin treatment for Diabetes (step therapy)
    1.	Treatment for chronic illness
    2.	Need diagnosis and A1C
    3.	Need prior treatments that failed
3. Disease management program – for diabetes
    1.	Treatment for chronic illness
    2.	Foot care
    3.	Glaucoma
4. Home health physical therapy
    1.	Therapy treatment in the home
    2.	Number of sessions
    3.	Number completed as of leaving the plan -->


---

// File: input/intro-notes/StructureDefinition-pcde-task-request-intro.md

This profile defines what a Task should look like when POSTed to the 'original' payer by the 'new' payer.  It builds on the [Task search](StructureDefinition-pcde-task-search.html) profile, but locks down the status and constrains out data elements that should not be present when submitting the original request.

---

// File: input/intro-notes/StructureDefinition-pcde-task-search-intro.md

This profile defines what a Task should look like when soliciting a PCDE Transition of Coverage document.It builds on the base profile defined in HRex and constrains the type of information being requested to a specific document code.  It also forces the request to be organization to organization.

---

// File: input/intro-notes/StructureDefinition-profile-careplan-intro.md

This profile defines the structure of the CarePlan that is used to convey information about a particular active treatment.  It includes basic metadata such as who the member is and references to any protocols being followed.  The primary content is the list of activities, where each activity represents a specific medication (procedure, drug, device, etc.) along with the reason for the intervention and the intervention's status.

---

// File: input/intro-notes/StructureDefinition-profile-composition-intro.md

This profile defines the structure of the Coverage Transition document, including the code that distinguishes the type of document as well as other metadata.  It also defines the structure of sections that are required to be in the document.  (Other sections are permitted, but support for those will need to be negotiated on a payer-to-payer basis.)

---

// File: input/intro-notes/StructureDefinition-profile-pcde-bundle-intro.md

This simple profile enforces the rules for a FHIR document Bundle, with an additional constraint that forces the first resource to be a Composition that complies with the [PCDE Composition](StructureDefinition-profile-composition.html) profile.

---

