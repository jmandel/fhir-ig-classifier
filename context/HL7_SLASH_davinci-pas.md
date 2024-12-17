File: repos/HL7_SLASH_davinci-pas/sushi-config.yaml

# ╭────────────────────────ImplementationGuide-hl7.fhir.us.davinci-pas.json────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.html#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.davinci-pas
canonical: http://hl7.org/fhir/us/davinci-pas
version: 2.1.0
name: DaVinciPriorAuthorizationSupport
title: Da Vinci Prior Authorization Support (PAS) FHIR IG
status: active
publisher: 
  name: HL7 International / Financial Management
  url: http://hl7.org/Special/committees/fm
  email: fmlists@lists.hl7.org
contact:
  - name: Jean Duteau
    telecom:
      - system: email
        value: mailto:jean@duteaudesign.com
  - name: HL7 International / Financial Management
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/fm
description: Guidelines for conveying coverage requirements to clinicians when planning treatment.
license: CC0-1.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.us.core.v311:
    version: 3.1.1
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore3
    reason: |
      Needed for systems supporting USCDI v1
  hl7.fhir.us.core.v610:
    version: 6.1.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore6
    reason: |
      Needed for systems supporting USCDI v3
  hl7.fhir.us.core:
    version: 7.0.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore7
    reason: |
      Needed for systems supporting USCDI v4
  hl7.fhir.extensions.r5: 4.0.1
  hl7.fhir.uv.sdc: 3.0.0
  hl7.fhir.us.davinci-crd:
    version: 2.0.0
    id: crd
  hl7.fhir.us.davinci-hrex:
    uri: http://hl7.org/fhir/us/davinci-hrex/ImplementationGuide/hl7.fhir.us.davinci-hrex
    version: 1.1.0
    id: hrex
  hl7.fhir.uv.subscriptions-backport.r4:
    version: 1.1.0
    id: subscriptions
  hl7.fhir.us.carin-bb:
    version: 2.0.0
    id: carinbb
parameters:
  show-inherited-invariants: false
  path-expansion-params: '../../exp-params.json'
  auto-oid-root: 2.16.840.1.113883.4.642.40.24
  apply-publisher: true
  apply-contact: true
  globals-in-artifacts: true
  version-comparison: 
   - 2.0.0
   - 2.1.0-preview
  shownav: true
copyrightYear: 2020+
releaseLabel: STU 2.1
jurisdiction: urn:iso:std:iso:3166#US "United States of America"
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
    valueInteger: 3
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: fm 
pages:
  index.md:
    title: Prior Authorization Implementation Guide Home Page
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  usecases.md:
    title: Use Cases and Overview
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
  additionalinfo.md:
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    title: Request for Additional Information
  background.md:
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    title: Technical Background
  regulations.md:
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    title: HIPAA Regulations
  specification.md:
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    title: Formal Specification
  privacy.md:
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    title: Privacy & Security
  epaWorkflow.md:
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    title: PAS ePA Coordinator Information
  metrics.md:
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    title: PAS Metrics
  downloads.md:
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    title: Downloads
  credits.md:
    title: Credits
  fhirArtifacts.md:
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    title: Artifacts Overview
  changelog.md:
    title: Change Log
  conformance.md:
    title: Conformance

menu:
  IG Home: index.html
  Background:
    Reading this IG: background.html
    Use Cases: usecases.html
    Project and Participants: credits.html
    ePA Coordinator: epaWorkflow.html
  Specification:
    Conformance Expectations: conformance.html
    Technical Specification: specification.html
    Request for Additional Info: additionalinfo.html
    HIPAA Regulations: regulations.html
    Privacy, Safety, and Security: privacy.html
    Metrics: metrics.html
  FHIR Artifacts:
    Overview: fhirArtifacts.html
    Artifacts: artifacts.html
  Base Specs:
    FHIR R4 Spec: new-tab {{site.data.fhir.path}}
    US Core 3.1.1: new-tab {{site.data.fhir.ver.hl7_fhir_us_core_v311}}
    US Core 6.1.0: new-tab {{site.data.fhir.ver.hl7_fhir_us_core_v610}}
    US Core 7.0.0: new-tab {{site.data.fhir.ver.hl7_fhir_us_core}}
    HRex 1.1.0: new-tab {{site.data.fhir.ver.hl7_fhir_us_davinci-hrex}}
    CRD: new-tab {{site.data.fhir.ver.hl7_fhir_us_davinci-crd}}
  Support:
    Discussion Forum: https://chat.fhir.org/#narrow/stream/208874-Da-Vinci-PAS
    Project Page: https://confluence.hl7.org/pages/viewpage.action?pageId=42993876
    Implementer Support: https://confluence.hl7.org/display/DVP/PAS+Implementer+Support
    Specification Dashboard: https://jira.hl7.org/secure/Dashboard.jspa?selectPageId=11813
    Propose a Change: https://jira.hl7.org/secure/CreateIssueDetails!init.jspa?pid=10405&amp;issuetype=10600&amp;customfield_11302=FHIR-us-davinci-pas
    Downloads: downloads.html
  Change Log: changelog.html
  History: http://hl7.org/fhir/us/davinci-pas/history.html


---

// File: input/pagecontent/additionalinfo.md

A payer may request additional information from the provider to support a prior authorization request by responding to the X12 278 Request with an X12 278 Response that includes any of the following:

1. One or more codes in the PWK01 element
2. One or more of the approved LOINC codes Attachments – LOINC in the HI segment
3. A single 102089-0 LOINC code in the HI segment to request information via a payer’s specific questionnaire.  When this option is used, the TRN at the X12 278 header or line level associated with the 102089-0 LOINC code **SHALL** be the DTR context ID used to retrieve the appropriate questionnaire 


All of the additional information request codes **SHOULD** be used as input to a CDex task.  The CDex task will include all of the information required to enable CDex to assemble the required documentation and send it to the payer’s operation endpoint for attachments.  When the LOINC code 102089-0 is present, the associated TRNs **SHALL** also be exchange as Task.input.  The following diagram defines the PAS, CDex, DTR workflow. A separate task **SHALL** be created for each of the above attachment request types (PWK01, LOINC, questionnaire).

Here is a high-level diagram that shows how the $submit-attachment call is used:
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="high-level-submit-attachment.png" alt="High Level $submit-attachment Use"/>
  <figcaption>Figure 3.1 - High Level $submit-attachment Use</figcaption>
</figure>
{::options parse_block_html="true" /}

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="pas-additionalinforequest-workflow.png" alt="PAS Additional Documentation Request Workflow"/>
  <figcaption>Figure 3.2 - Request For Additional Information Workflow</figcaption>
</figure>
{::options parse_block_html="true" /}

The [PAS task profile](StructureDefinition-profile-task.html) **SHALL** be used to convey PAS X12 278 Response information to CDex.
 
Although CDex defines a set of operations, it may be implemented in a separate module.  The Task is used to represent the information that is needed to make the CDex calls.  If the CDex calls are not in a separate module, then the Task may just be conceptual and not actually created.  In PAS, the Task is created by the Provider but that the remaining CDex workflow remains the same.

PAS uses the Task based profile to request additional documentation (“attachments”) for prior authorizations. It constrains the Task resource to minimal necessary data elements needed to request specific attachments and provides the information necessary to respond via the $submit-attachment operation. This response is compatible with existing 278 response transactions to allow reassociation of the requested documents (using LOINC codes and/or PWK01 codes) and/or questionnaireResponse(s).  The following Task profile supports all of the elements necessary to exchange a request for additional documentation between the PAS 278 response and CDex.  For guidance when the provider is not able to complete the Task, refer to the [When The Task Cannot Be Completed CDex section ](http://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#when-the-task-cannot-be-completed).
Note: since task.code is cardinality 0..1, a Task will need to be created for each of the values (if required).  One for code(s) and another for questionnaire(s).

A Task.code of either “attachment-request-code” or “attachment-request-questionnaire” is communicating that the Payer is requesting attachments for a prior authorization using a code or data request questionnaire:

* If the code is “attachment-request-code”, the provider system returns attachment(s) identified by the LOINC attachment code(s) or the PWK01 cod(s)in the “attachments-needed” input parameter.
* If the code is “attachment-request-questionnaire”, the provider system uses Documentation Templates and Rules (DTR) to complete the Questionnaire referenced in the "questionnaires-needed" input parameter.
* When either code is present, the provider system uses the $submit-attachment operation to return the information to the endpoint provided in “payer-url” input parameter.

The Task.requester.identifier and Task.owner.reference represents the Payer ID
The Task.for references the Patient information.
The Task.reasonReference references the Prior Authorization request.

The Task.input provides for the following information:

* 'payerUrl' slice represents the Payer endpoint URL that is used to submit attachments using the $submit-attachment operation
* 'attachmentsNeeded' slice communicates which attachments are needed using LOINC attachment or PWK01 codes
* 'questionnairesNeeded' slice communicates to DTR which questoinnaire(s) are needed using TRN codes

Both the 'attachmentsNeeded' and 'questionnairesNeeded' slice contains an extension point to the prior authorization line number.


---

// File: input/pagecontent/background.md

### Da Vinci
Da Vinci is an industry sponsored project which is contributing to the development of HL7 standards.  It brings together the U.S. payer, providers, and technology suppliers (including EHR vendors)  to help payers and providers to positively impact clinical, quality, cost, and care management outcomes using FHIR-related technologies. The project organizes meetings (face-to-face and conference calls) as well as connectathons to find ways to leverage FHIR technologies to support and integrate value-based care (VBC) data exchange across communities. Da Vinci identifies value-based care use cases of interest to its members and the community as a whole.

The process that Da Vinci has adopted includes: 
1. identify business, clinical, technical, and testing requirements, 
2. develop and ballot a FHIR based implementation guide (IG),
3. develop a reference implementation (RI) that is used to demonstrate that the concepts in the IG are possible to implement,
4. pilot the standard,
5. support the production use of the IG to enable exchange of data to support interoperability for value-based care.

Additional information about Da Vinci, its members, the use cases and the implementation guides being developed can all be found on the [HL7 website](http://www.hl7.org/about/davinci). Meeting minutes and other materials can be found on the [Da Vinci Confluence page](https://confluence.hl7.org/display/DVP).

{% include burdenReduction.md %}


### Underlying Technologies
This guide is based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard.  Implementers of this specification therefore need to understand some basic information about these specifications.

#### FHIR
This implementation guide uses terminology, notations and design principles that are
specific to FHIR.  Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR, as well as general guidance on how to read FHIR specifications.  Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this implementation guide.

* [FHIR Overview]({{site.data.fhir.path}}overview.html)
* [Developer's Introduction]({{site.data.fhir.path}}overview-dev.html) (or [Clinical Introduction]({{site.data.fhir.path}}overview-clinical.html))
* [FHIR Data Types]({{site.data.fhir.path}}datatypes.html)
* [Using Codes]({{site.data.fhir.path}}terminologies.html)
* [References between Resources]({{site.data.fhir.path}}references.html)
* [How to Read Resource & Profile Definitions]({{site.data.fhir.path}}formats.html) and additional [IG reading guidance](https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html)
* [Base Resource]({{site.data.fhir.path}}resource.html)

This implementation guide supports the [R4]({{site.data.fhir.path}}index.html) version of the FHIR standard.

This implementation guide also builds on the [US Core]({{site.data.fhir.hl7_fhir_us_core}}) Implementation Guide and implementers need to familiarize themselves with the profiles in that IG.

Implementers should also familiarize themselves with the FHIR resources used within the guide:

<table>
  <thead>
    <tr>
      <th>Resource</th>
      <th>Relevance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><a href="{{site.data.fhir.path}}bundle.html">Bundle</a></td><td>Used when delivering collections of resources in a PAS operation</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}capabilitystatement.html">CapabilityStatement</a></td><td>Used to define conformance expectations for this guide</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}claim.html">Claim</a></td><td>The main resource that contains the information about what is being requested to be authorized</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}claimresponse.html">ClaimResponse</a></td><td>The main resource that contains the information about what was authorized, if any</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}codesystem.html">CodeSystem</a></td><td>Used to define custom codes specific to this guide</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}communicationrequest.html">CommunicationRequest</a></td><td>Used to convey information that the payer needs to make an authorization decision</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}coverage.html">Coverage</a></td><td>Used to identify the member and the relevant insurance coverage to a payer</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}devicerequest.html">DeviceRequest</a></td><td>One of the resources that indicates what authorization is needed</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}encounter.html">Encounter</a></td><td>One of the resources that indicates what authorization is needed and also provides context for other resources</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}location.html">Location</a></td><td>Supporting information for encounters and request resources</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}medicationrequest.html">MedicationRequest</a></td><td>One of the resources that indicates what authorization is needed</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}nutritionorder.html">NutritionOrder</a></td><td>One of the resources that indicates what authorization is needed</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}operationdefinition.html">OperationDefinition</a></td><td>Used to define the two main operations used in this IG</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}organization.html">Organization</a></td><td>Used when identifying providers in Encounters, Tasks, and all requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}parameters.html">Parameters</a></td><td>Used to provide the information for the operations</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}patient.html">Patient</a></td><td>Demographic information relevant to all requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}practitioner.html">Practitioner</a></td><td>Used when identifying providers in Encounters, Tasks, and all requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}practitionerrole.html">PractitionerRole</a></td><td>Used when identifying providers in Encounters, Tasks, and all requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}servicerequest.html">ServiceRequest</a></td><td>One of the resources that indicates what authorization is needed</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}structuredefinition.html">StructureDefinition</a></td><td>Used when profiling resources and defining extensions</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}subscription.html">Subscription</a></td><td>Used when subscribing for authorization decisions for an organization</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}task.html">Task</a></td><td>Used to define something that is needed to be done by the provider to submit information</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}valueset.html">ValueSet</a></td><td>Used to define collections of codes used by PAS profiles</td></tr>
  </tbody>
</table>



#### ASC X12N
The intention of this implementation guide is that detailed knowledge of X12N is not required by client/EHR implementers, though knowledge of some value sets and business processes will be needed. Intermediary systems will require an intimate understanding of the X12N specification, particularly the 278 and 275 transactions.  The following X12 Standards are referenced in this guide:

* ASC X12N/005010X217 - Health Care Services Review - Request for Review and Response (278) - provide standardized data requirements and content for all users who request authorizations or certifications or who respond to such requests 
* ASC X12N/005010X215 - Health Care Services Review - Inquiry and Response (278) - provide standardized data requirements and content for all users who search on authorizations or certifications or who respond to such inquiries
* ASC X12N/006020X316 - Additional Information to Support a Health Care Services Review (275) - provide standardized data requirements and content to send additional information about a healthcare service review

NOTE: At the time of publication, only the use of ASC X12N/005010X217 is mandated by HIPAA.

##### X12 Terminology

All of the X12 Terminology is copyright of the X12 organization.  All of the code systems and value sets that are referenced use URLs that are provided by X12.  The intent of the X12 organization is to have those URLs resolve for members.  It is also possible to find the relevant codes by referencing the [X217](https://x217-005010.x12.org/) and [X215](https://x215-005010.x12.org/) Technical Reports in X12's Glass viewer.  (NOTE: The links to the X12 Technical Reports will only be visible to X12 members.)  Further information on the use of X12 terminology in HL7 can be found at the [HL7 Terminology Authority X12 page](https://confluence.hl7.org/display/TA/X12).

The different components of the X12 ValueSet URLs can be interpreted as follows:

1. valueset.x12.org
2. TR3 ID, eg. x217, x215
3. TR3 Version, eg. 005010
4. 'request' or 'response'
5. loop ID, eg. 2010EA
6. segment ID, eg. NM1
7. segment repetition, eg. 1
8. data element position, eg. 06
9. data subelement position, eg. 00
9. data element number, eg. 1338

Thus any URL can be parsed to determine where to find the set of codes in the appropriate X12 Technical Report.


---

// File: input/pagecontent/changelog.md

### Version = 2.1.0
This version updates the guide to be compliant with US Core v3.1.0, v6.0.1, and v7.0.0.  It also includes changes due to comments raised by the community since the introduction of 2.0.0.

#### JIRA Issues Applied
* [FHIR-48674](https://jira.hl7.org/browse/FHIR-48674) - Provide guidance on workflow if responses/notifications get lost
* [FHIR-48621](https://jira.hl7.org/browse/FHIR-48621) - Create a Quantity profile to limit the units
* [FHIR-48616](https://jira.hl7.org/browse/FHIR-48616) - Allow for Event Level Errors
* [FHIR-48586](https://jira.hl7.org/browse/FHIR-48586) - Clarify how to cancel an entire Prior Auth Claim instead of individual items
* [FHIR-48585](https://jira.hl7.org/browse/FHIR-48585) - Clarify inquiries for non-current claims
* [FHIR-48574](https://jira.hl7.org/browse/FHIR-48574) - Link to Claim Update profile for cardinality requirements
* [FHIR-48566](https://jira.hl7.org/browse/FHIR-48566) - Make the Updating Authorization Requests section more precise
* [FHIR-48576](https://jira.hl7.org/browse/FHIR-48576) - Provide profile tense interpretation example
* [FHIR-48747](https://jira.hl7.org/browse/FHIR-48747) - Issues with member ID and member level inquiry
* [FHIR-48673](https://jira.hl7.org/browse/FHIR-48673) - Subscription id-only fails to account for the lack of requesting documentation information in PAS Inquiry
* [FHIR-48536](https://jira.hl7.org/browse/FHIR-48536) - Many related/supporting IG hyperlinks point to outdated IG versions
* [FHIR-48378](https://jira.hl7.org/browse/FHIR-48378) - Clarify Subscription Filter requirements
* [FHIR-48373](https://jira.hl7.org/browse/FHIR-48373) - Subscription Notification "returned identifier" not returned in id-only notifications
* [FHIR-47770](https://jira.hl7.org/browse/FHIR-47770) - ErrorPath structure
* [FHIR-48587](https://jira.hl7.org/browse/FHIR-48587) - Are there concrete requirements for servers indicating pended and denied claims?
* [FHIR-48582](https://jira.hl7.org/browse/FHIR-48582) - change definition of SHOULD 
* [FHIR-48581](https://jira.hl7.org/browse/FHIR-48581) - When are referenced resources needed on an inquiry?
* [FHIR-48580](https://jira.hl7.org/browse/FHIR-48580) - Clarify Inquiry matching semantics
* [FHIR-48579](https://jira.hl7.org/browse/FHIR-48579) - Differentiating between automated and manual inquiries
* [FHIR-48573](https://jira.hl7.org/browse/FHIR-48573) - article fix
* [FHIR-48364](https://jira.hl7.org/browse/FHIR-48364) - Reference Resource ID or The entire resource referenced resources in PAS Response Bundle
* [FHIR-47769](https://jira.hl7.org/browse/FHIR-47769) - ClaimResponse.request is optional
* [FHIR-48575](https://jira.hl7.org/browse/FHIR-48575) - Can't find referenced HRex endpoint discovery content
* [FHIR-48371](https://jira.hl7.org/browse/FHIR-48371) - Clarify value for "requesting provider organization id" Subscription parameter
* [FHIR-48377](https://jira.hl7.org/browse/FHIR-48377) - Additional Subscription Filters needed for non-submitters?
* [FHIR-48535](https://jira.hl7.org/browse/FHIR-48535) - PAS Profiled resources aren't making allowances for differences between US Core versions supported
* [FHIR-48568](https://jira.hl7.org/browse/FHIR-48568) - evoked -> invoked
* [FHIR-48569](https://jira.hl7.org/browse/FHIR-48569) - Unclear figure reference
* [FHIR-48570](https://jira.hl7.org/browse/FHIR-48570) - Duplicate Content in the Monitor for Resolution section
* [FHIR-48571](https://jira.hl7.org/browse/FHIR-48571) - Linked CDex page doesn't discuss monitoring
* [FHIR-48572](https://jira.hl7.org/browse/FHIR-48572) - missing [payer registry] link
* [FHIR-48583](https://jira.hl7.org/browse/FHIR-48583) - Clarify inquiries without a specific service
* [FHIR-48584](https://jira.hl7.org/browse/FHIR-48584) - Clarify subsetted inquiries
* [FHIR-48588](https://jira.hl7.org/browse/FHIR-48588) - Concerns about X12 situationally required fields 
* [FHIR-48589](https://jira.hl7.org/browse/FHIR-48589) - payers need to implement PAs for ALL services

### Version = 2.1.0-preview
This version updates the guide to be compliant with US Core v3.1.0, v6.0.1, and v7.0.0.  It also includes changes due to comments raised by the community since the introduction of 2.0.0.

#### JIRA Issues Applied
* [FHIR-48478](https://jira.hl7.org/browse/FHIR-48478) - Update Task Profile
* [FHIR-46570](https://jira.hl7.org/browse/FHIR-46570) - Change EMR to EHR throughout
* [FHIR-47130](https://jira.hl7.org/browse/FHIR-47130) - 2000E Loop - UM01/UM02 Request/Certification Type Mandatory
* [FHIR-46542](https://jira.hl7.org/browse/FHIR-46542) - Claims Inquiry Response FHIR resource doesn't have attribute to capture  place of service (service place) information
* [FHIR-48323](https://jira.hl7.org/browse/FHIR-48323) - PAS Practitioner - defined slices should require .value to be populated if they are present
* [FHIR-46543](https://jira.hl7.org/browse/FHIR-46543) - FHIR validator throws an error for communicatedDiagnosis extension which is valid extension slice under ClaimResponse.item
* [FHIR-46621](https://jira.hl7.org/browse/FHIR-46621) - PAS Request Bundle can't link to PASClaim
* [FHIR-48322](https://jira.hl7.org/browse/FHIR-48322) - PAS Organization Base - defined slices should require .value to be populated if they are presnt
* [FHIR-48312](https://jira.hl7.org/browse/FHIR-48312) - Add date invariants to .accident.date and .serviced[x]
* [FHIR-47128](https://jira.hl7.org/browse/FHIR-47128) - PAS Update: preserve original and updated claim relationship in X12 278
* [FHIR-46622](https://jira.hl7.org/browse/FHIR-46622) - Clarify attachment types
* [FHIR-48372](https://jira.hl7.org/browse/FHIR-48372) - Subscription filter definition and description out of sync
* [FHIR-48370](https://jira.hl7.org/browse/FHIR-48370) - no topic discovery needed
* [FHIR-45305](https://jira.hl7.org/browse/FHIR-45305) - Provide additional details on the use of Organization-level Subscriptions
* [FHIR-43046](https://jira.hl7.org/browse/FHIR-43046) - clarify what a "your update was rejected because you need to submit a new auth request instead" response looks like
* [FHIR-44695](https://jira.hl7.org/browse/FHIR-44695) - add a slice for 278 Payor Identification to PAS Insurer Organization
* [FHIR-43603](https://jira.hl7.org/browse/FHIR-43603) - ReviewAction Lacks Pend/Deny Examples
* [FHIR-47696](https://jira.hl7.org/browse/FHIR-47696) - Change 'prescription benefit' to 'pharmacy benefit' and 'prior auth' to 'prior authorization'
* [FHIR-46516](https://jira.hl7.org/browse/FHIR-46516) - Error Response Bundle Example does not have Error Response
* [FHIR-44888](https://jira.hl7.org/browse/FHIR-44888) - typo in diagram
* [FHIR-46505](https://jira.hl7.org/browse/FHIR-46505) - PAS subscriptions not documented well enough for inferno tests
* [FHIR-44867](https://jira.hl7.org/browse/FHIR-44867) - Clarify CDex interactions in Figure 3.1 - Request For Additional Information Workflow
* [FHIR-44832](https://jira.hl7.org/browse/FHIR-44832) - Remove "polling" in Figure 2.3
* [FHIR-46310](https://jira.hl7.org/browse/FHIR-46310) - Clarification and correction on PAS Update IG
* [FHIR-46650](https://jira.hl7.org/browse/FHIR-46650) - Incorrect Section 5.2.9
* [FHIR-46612](https://jira.hl7.org/browse/FHIR-46612) - Consistent formatting of Conformance Language needed
* [FHIR-46442](https://jira.hl7.org/browse/FHIR-46442) - Add endpoint discovery expectations
* [FHIR-46237](https://jira.hl7.org/browse/FHIR-46237) - PAS ClaimResponse.identifier[n].system has type "uri" but X12 may return arbitrary string or number
* [FHIR-46236](https://jira.hl7.org/browse/FHIR-46236) - Edit the description of the extension : reasonCode
* [FHIR-46223](https://jira.hl7.org/browse/FHIR-46223) - Conformance statements should not be on Home page
* [FHIR-46175](https://jira.hl7.org/browse/FHIR-46175) - PAS Claim Update Missing MS Flags
* [FHIR-46119](https://jira.hl7.org/browse/FHIR-46119) - Place of Service should be required
* [FHIR-46116](https://jira.hl7.org/browse/FHIR-46116) - Why is item.productOrService (procedureCode) always required on the inquiry request
* [FHIR-46070](https://jira.hl7.org/browse/FHIR-46070) - Discrepancy on x12 spec vs Fhir spec, at 2000E ‚Äî PATIENT EVENT LEVEL in x12
* [FHIR-45742](https://jira.hl7.org/browse/FHIR-45742) - Update Valueset definition for LOINC Attachment Codes
* [FHIR-45393](https://jira.hl7.org/browse/FHIR-45393) - Inquire vs Inquiry
* [FHIR-45391](https://jira.hl7.org/browse/FHIR-45391) - Overuse of 'submit' in PAS operation definitions
* [FHIR-45258](https://jira.hl7.org/browse/FHIR-45258) - Conformance language requirement is dependent on subjective qualifications
* [FHIR-44882](https://jira.hl7.org/browse/FHIR-44882) - create invariants for Task.owner.identifier and Task.requester.identifier 
* [FHIR-44881](https://jira.hl7.org/browse/FHIR-44881) - Task.owner Short Description should be the Provider
* [FHIR-44880](https://jira.hl7.org/browse/FHIR-44880) - Task.requester Short Description should be Provider
* [FHIR-44877](https://jira.hl7.org/browse/FHIR-44877) - Change the Task.code Value Set concept definition
* [FHIR-44677](https://jira.hl7.org/browse/FHIR-44677) - .processNote.number and .text need to be MS to better align with regulation
* [FHIR-44565](https://jira.hl7.org/browse/FHIR-44565) - Conformance language casing needs correcting
* [FHIR-44159](https://jira.hl7.org/browse/FHIR-44159) - PAS changes following CMS-0057-F
* [FHIR-44153](https://jira.hl7.org/browse/FHIR-44153) - clarify subscriptions are required in use cases - monitor for resolution
* [FHIR-44152](https://jira.hl7.org/browse/FHIR-44152) - Extensions used in Claim/ClaimResponse need to enable use in EOB
* [FHIR-43031](https://jira.hl7.org/browse/FHIR-43031) - Clarifications and guidance on polling rules for Claim Inquiry
* [FHIR-42705](https://jira.hl7.org/browse/FHIR-42705) - Fix hyphenation for "pre-authorization"
* [FHIR-42704](https://jira.hl7.org/browse/FHIR-42704) - Remove references to predetermination from claim-related profiles
* [FHIR-43913](https://jira.hl7.org/browse/FHIR-43913) - profile-claim-inquiry uses invalid discriminator

### Version = 2.0.1
This included a technical correction for a link to the proper CRD.

### Version = 2.0.0
- Based on FHIR version: 4.0.1

The changes in this update to the Da Vinci Prior Authorization guide have been reviewed and commented on by the public through the HL7 balloting process.  The resolution of the community comments has been agreed to and voted on by the members of the HL7 International Financial Management work group.

#### What's new in Version 2.0.0 of Da Vinci Prior Authorization:

This section provides an overview of the significant changes in Version 2.0.0 of Da Vinci Prior Authorization.

- ALL PAGES
  - Made Conformance verbs bold everywhere (FHIR-36583)
  - Fix typos (FHIR-36608, FHIR-36623, FHIR-36175)
  - Added next-page/previous-page navigation links (FHIR-24358)
  - Added FMM status to the IG and all artifacts (FHIR-24113)
  - Added a change log page (FHIR-36581)
  - Added a new page on Metrics (FHIR-41548)
  - Made Privacy & Security its own page (FHIR-41616)
- Home Page
  - Added link to Da Vinci HIPAA Exception Confluence Page (FHIR-36592)
  - Added a note clarifying how situationally required fields are handled in the guide (FHIR-41635)
- Use Cases
  - Pull notes out of the PA Process diagram (FHIR-34540, FHIR-36153)
  - Add sentence to section 2.3.5 (FHIR-36145)
  - Add link to post-acute orders IG in section 2.3 (FHIR-36252)
  - Fix section 2.3.7 (FHIR-36320)
  - Replace figure 2.4 with new diagram (FHIR-36115, FHIR-36322)
  - Modify bullet #4 in section 2.3.1 (FHIR-36357)
  - Update most recent survey info (FHIR-36560)
  - Update bullet #1 in section 2.3.2 (FHIR-36566)
  - Fix section 2.3.3 (FHIR-36570)
  - Added section on using the inquiry function to find Prior Authorizations (FHIR-36571)
  - Update parentheticals in section 2.3.6 (FHIR-36577)
  - Update section 2.3.7 (FHIR-36578, FHIR-36584, FHIR-36587)
  - Add a Supported Use Case section around what is currently supported in the IG (FHIR-37769)
  - Remove references to polling (FHIR-39750)
  - Added a section on how PAS initiated CDex DTR launch would work (FHIR-40723)
  - Add more information on how Subscription is used and create a PAS SubscriptionTopic resource (FHIR-41446, FHIR-41698, FHIR-41912)
- Background
  - Update section 3.1.1 (FHIR-36593, FHIR-40465)
  - Add a section on how to resolve the X12 codesystem and value sets (FHIR-34393, FHIR-36422, FHIR-36604)
  - Add a section on how Must Support is used in the IG (FHIR-36157)
- Formal Specification
  - Add a note around the use of tense and the Claim resource (FHIR-36044)
  - Use the verb 'update' and reference 5.2.9 and section 2.3 (FHIR-36147)
  - Add a note around the Confluence page and the fact that it is currently empty at time of publication (FHIR-36159, FHIR-36323, FHIR-36590, FHIR-36595)
  - Define 278i and 278r (FHIR-36238)
  - Updates to various sections (FHIR-36152, FHIR-36236, FHIR-36321, FHIR-36324, FHIR-36325, FHIR-36594, FHIR-36611, FHIR-36612, FHIR-36613, FHIR-36616, FHIR-36618, FHIR-36619, FHIR-36620, FHIR-40411, FHIR-40412, FHIR-40414)
  - Remove Polling (FHIR-36350, FHIR-36353, FHIR-36358, FHIR-36565, FHIR-36567, FHIR-36614, FHIR-38199, FHIR-36617)
  - Indicate which version of subscriptions will be used (FHIR-39418)
  - Add a section on endpoint resolution (FHIR-39505)
  - Fix typo in Figure 5.3 (FHIR-36317)
  - Add content and diagrams around ePA workflow (FHIR-36558)
  - Add a sentence that says orders SHOULD be annotated with PAS response decisions (FHIR-41444)
  - Add information on how to include DTR QuestionnaireResponse in the Claim.supportingInfo (FHIR-41445)
- Credits
  - Updated credits for new version of guide (FHIR-36621)
- Profiles
  - Added new examples (FHIR-36610)
  - Added capability statements (FHIR-38628)
  - Support CR* condition codes, Home Health Care Prognosis Code and Start Date (FHIR-38137)
  - Add a PASNutritionOrder to the requestedService options (FHIR-39550)
  - Use the FHIR R5 Claim.encounter field (FHIR-24169)
  - Add a link to the base submit operation in the operation details (FHIR-24560)
  - Add descriptions to care team slices (FHIR-36043)
  - Fix serviceExtensionRequestType description (FHIR-36089)
  - Change CommunicationRequest.identifier description (FHIR-36097)
  - Change itemAuthorizedDate extension description and name (FHIR-36100)
  - Add fhirPath element to errorElement extension (FHIR-36103)
  - Fix certExpirationDate and certEffectiveDate descriptions (FHIR-36112)
  - Create PASDocumentReference profile and reference it in the Claim profile (FHIR-36155)
  - Create abstract profiles for Bundle/Claim/ClaimResponse (FHIR-36428)
  - Inquiry operation response should be 0..* (FHIR-40388)
  - Declare specific profiles in the operation parameters (FHIR-40389, FHIR-40390)
  - Add info that the inquiry operation is a query-by-example (FHIR-40410)
  - Make Claim.item.category 1..1 and indicate that it is needed for X12 (FHIR-40758)
  - AdditionalInformation slice should be 0..* (FHIR-39540)
  - Message Text slice should be 0..* (FHIR-39541)
  - Accident Date needs format usage information (FHIR-39544)
  - Coverage.identifier needs to be Must-Support (FHIR-37936)
  - Document that the PASClaim.diagnosis is unbounded but X12 only supports 12 repetitions. (FHIR-39499)
  - Fix the typo on X12 decision reason codes (FHIR-39660)
  - Add a usage note on item.quantity units (FHIR-39611)
  - Update subdepartment and jurisdiction extension descriptions (FHIR-40259)
  - Update inquiry provider description (FHIR-40391)
  - Add TIN Organization identifier slice (FHIR-36099)
  - Add new PractitionerRole profile to Claim.careTeam.provider (FHIR-36485)
  - Create PractitionerRole profile and change provider to reference PractitionerRole (FHIR-36669, FHIR-36737, FHIR-40512)
  - Change Content modifier value set to use proper LOINC codes (FHIR-39728)
  - Change value set for CommunicationRequest.medium (FHIR-36586)
  - Fix display of bundle examples (FHIR-40672)
  - Add note about sending multiple diagnosis codes in ClaimInquiry (FHIR-39500)
  - Claim.item.category is mandatory as ServiceTypeCode is required (FHIR-40758)
  - Add a slice to Coverage.relationship to allow sending the X12 code (FHIR-41312)
  - Add CRD Coverage information extension to the PAS request profiles (FHIR-41443)
  - Made Claim.insurer 1..1 (FHIR-42692)

#### What's new in Version 1.1.0 of Da Vinci Prior Authorization
- Organization profiles were changed: (FHIR-30880)
  - Address changed from 1..1 to 0..1
  - Value set changed from https://valueset.x12.org/x217/005010/request/2010B/NM1/1/01/00/98 to https://valueset.x12.org/x217/005010/response/2010B/NM1/1/01/00/98
- The AuthorizedProvider profile has a new providerType CodeableConcept added to it. (FHIR-30881)
- Added NDC codes and a "not applicable" code to the X12278RequestedServiceType value set. (FHIR-30882)
- Created a new value set for the service modifier types that only has CPT and HCPCS codes. (FHIR-30883)
- Changed the modifier value in the AuthorizedDetail extension to be 0..* instead of 0..1. (FHIR-30884)
- Added an extension for state to the new PASIdentifier datatype. (FHIR-30885).
- Added a constraint to all dates that are used to ensure that a full date is being sent. (FHIR-30886)
- The Admission date period was change to two separate periods to handle a range of admission dates and a separate range of discharge dates. (FHIR-30887)
- Fix the extensions on CommunicationRequest to be on the CommunicationRequest.payload where they were intended. (FHIR-30888)
- All references on elements that are marked as Must Support now reference either PAS or US-Core profiles. (FHIR-30890)
- The Additional Information supporting info section has had a note added to indicate that the PASDocumentReference profile is the preferred profile for sending extra documentation. (FHIR-31024)
- New Identifier profile created (PASIdentifier) with the required extensions and uses of Identifier in Claim and ClaimResponse profiles changed to PASIdentifier. (FHIR-31025, FHIR-31372)
- Added CommunicatedDiagnosis to ClaimResponse and ClaimInquiryResponse. (FHIR-31086, FHIR-31370)
- Changed Certification Issue Date, Certification Effective Date, and Certifacation Expiration Date to be a date or a period to handle searching by a range. (FHIR-31373)
- Added short descriptions to every use of an extension and every Claim.supportingInfo slice. (FHIR-31414)
- Added a note to any value set that includes CPT and HCPCS codes that X12 will identify those codes as being HCPCS no matter what was originally sent in. (FHIR-31630)
- Created a PASOrganization profile on Organization and used the PASIdentifier datatype on Practitioner and Organization. (FHIR-32427)
- Change the cardinality of the ReviewAction reasonCode to be 0..*. (FHIR-32426)
- Add the ItemTraceNumber extension to ClaimInquiryResponse profile and make it 0..*. (FHIR-32425, FHIR-32891)
- Fix the Claim inquiry operation endpoint to be $inquiry instead of $submit. (FHIR-31948)
- Add language to the Home Page about ability to not convert into and out of an X12 278. (FHIR-32867)
- Add language to the Specification to allow other methods of exchanging the FHIR Bundle besides the X12 275. (FHIR-32866)
- Change extension names to more closely match their IDs. (FHIR-32877)
- Add a line number extension to the CommunicationRequest payload. (FHIR-32878)
- Revise the language about how Prior Authorizations are cancelled. (FHIR-32112)
- Move the ReviewAction extension from the ClaimResponse.item to the ClaimResponse.item.adjudication. (FHIR-32900)
- Fix the bindings for the CareTeam roles. (FHIR-32954)
- Remove mandatory XML support and make only JSON the allowed exchange format. (FHIR-33059)


---

// File: input/pagecontent/conformance.md

### Systems
The PAS implementation guide defines the responsibilities of the two types of systems involved in a PAS solution:

[**Client systems**](CapabilityStatement-EHRCapabilities.html) are typically Electronic Medical Record (EHR) systems but could theoretically be any system responsible for requesting prior authorizations .  (E.g. practice management systems, pharmacy systems (for drugs that are part of a medical benefit), dental systems, etc.). 

[**Server systems**](CapabilityStatement-IntermediaryCapabilities.html) (or servers) are typically intermediary systems that act on behalf of payer organizations and are responsible for the conversion of prior authorization requests to and from X12 for subsequent relay to payer systems.  In some cases, a server system may directly be a payer system (if X12 translation is not required by regulation).

### MustSupport
This implementation guide uses specific terminology to flag statements that have relevance for the evaluation of conformance with the guide:

* **SHALL** indicates requirements that must be met to be conformant with the specification.

* **SHOULD** indicates behaviors that ought to be adhered to to avoid suboptimal interoperability but which do not, for this version of the specification, affect the determination of specification conformance.

* **MAY** describes optional behaviors that are free to consider but where there is no recommendation for or against adoption.

As well, profiles in this implementation guide make use of the [mustSupport]({{site.data.fhir.path}}profiling.html#mustsupport) element.  Base expectations for the intepretations of these terms are set in the [FHIR core specification]({{site.data.fhir.path}}conformance-rules.html#conflang) and general Da Vinci-wide expectations are [defined in HRex]({{site.data.fhir.ver.hrex}}/conformance.html).  Also see the mustSupport rules for the [HRex]({{site.data.fhir.ver.hrex}}/conformance.html#mustsupport) and [US Core]({{site.data.fhir.ver.uscore7}}/must-support.html) implementation guides, which apply to content adhering to data elements profiled in those guides.

Along with those expectations, the following rules on MustSupport are also required:

* PA Intermediary Systems **SHALL** be capable of processing all data elements that are marked as Must Support on the Claim Request and Claim Inquiry.  They **SHALL** not generate an error or cause the application to fail due the presence of any data element marked as Must Support.
* PA Intermediary Systems **SHALL** be capable of returning resource instances containing any of the data elements that are marked as Must Support on the Claim Response and the Claim Inquiry Response.
* PA Client Systems **SHALL** be capable of receiving all data elements that are marked as Must Support on the Claim Response and the Claim Inquiry Response.  They **SHALL** not generate an error or cause the application to fail when receiving any data element that is marked as Must Support.
* PA Client Systems **SHOULD NOT** send any data elements that are not marked as Must Support.  If these data elements are included in a Claim Request or Claim Inquiry, the receiving PA Intermediary System **MAY** ignore those elements.


---

// File: input/pagecontent/credits.md

### Da Vinci
{% include davinci.md %}

### The Da Vinci PAS project
PAS is part of a set of projects in the Burden Reduction space that was first initiated by Da Vinci members in May of 2019.  Project participants have included major EHR vendors, payers, provider organizations, and others involved in the prior authorization space.  The first standard for trial use version of the specification was published in 2020 and the specification has undergone considerable testing at various connectathons, pilots, and production implementations since then.  Further details about the project, including minutes of meetings can be found on the [project Confluence page](https://confluence.hl7.org/pages/viewpage.action?pageId=42993876).


### Credits
Primary author:

* Jean Duteau (Dogwood Health Consulting)
* Mary Kay McDaniel

Guide Author Support: 

* Lloyd McKenzie (Dogwood Health Consulting)

Project leads:

* Robert Dieterle (Enable Care, LLC)
* Viet Nguyen (Stratametrics, LLC)

Project management and coordination:

* Jocelyn Keegan (Point of Care Partners)
* Sachin Bhatt (Point of Care Partners)

Reference implementation:

* Gary Gryan (MITRE), Pat LaRocque (MITRE), Ben Langley (MITRE) and Jason Walonoski (MITRE)

This implementation guide was created under the supervision and review of the HL7 [Financial Management](http://www.hl7.org/Special/committees/fm) (sponsor) and [Attachments](http://www.hl7.org/Special/Committees/claims) (co-sponsor) work groups.

This implementation guide was initiated and created with the support of the twenty-two founding [Da Vinci Project] (http://www.hl7.org/about/davinci/index.cfm?ref=common) member organizations.

Organizational participants included:

* AMA (Heather McComas, Terry Cunningham)
* Anthem (Barbara Antuna, Alberto Llanes, Christol Green, Karen Zapata, Mary Bushman, Sudhir Nair)
* Azuba (Bart Carlson)
* Blue Cross Blue Shield of Alabama (Kelly Anderson, Kevin Lambert, Tony Benson)
* Blue Cross Blue Shield of Illinois (Durwin Day, Michael Novales)
* Blue Cross Blue Shield of Michigan (Cindy Monarch, Dawn Perreault, Duane Walker, John Bialowicz)
* Blue Cross Blue Shield of Texas (Brian Poteet, Dylan Tuggle, Susan Langford)
* Cambia (David DeGandi, Jodie Zellerhoff)
* Council for Affordable Quality Healthcare (Emily EnEyck, Rachel Goldstein, Robert Bowman, Taha Anjarwalla)
* Carradora (Michael Flanigan)
* Cerner (Hans Buitendijk)
* Cigna (Marci Maisano, Megan Soccorso)
* Centers for Medicare & Medicaid (Emily Calvert, Erica Ross, Lorraine Doo, Melanie Combs-Dyer, Michael Cabral, Melanie Jones, Scott Lawrence, Thomas Kessler)
* Cognosante (Mary Kay McDaniel, Louis Bedor)
* eClinicalWorks (Phranil Mehta, Rohit Shinde)
* Edifecs (John Kelly, Lindee Chin)
* EMDI/Scope Info Tech (Briana Barnes, Nandini Ganguly, Pallavi Talekar, Ray Wilkerson)
* Epic (Spencer Utley)
* Healow (Ralph Saint-Phard)
* Humad (Monse Serenil)
* Humana (Amy Peterson, Chris Jones, Patrick Murta, Michelle Zutterman, Mike Funk)
* Independence Blue Cross (Michael Gould, Nita Thingalaya)
* Intersystems (Clayton Lewis, Mark Mundt, Lynda Rowe, Russel Leftwich)
* Mettle Solutions (Deepthi Reddy, Sreekanth Puram)
* Optum (Ann Gallagher, Joseph Quinn, Linda Michaelsen, Tony Little)
* Palmetto gba (Robin Igett)
* Point of Care Partners (Dana Marcelonis)
* Surescripts (Jeremy Barnard, Missy Boser, Joseph Athman)
* United Healthcare (Anupam Goel)
* Welcare (Tori Willows)
* WPS Health Solutions (Laurie Burckhardt, Tammy Schreiner)
* ZeOmega (Bonnie Sirott, Tony Sheng)

Additional regular participants: Christy Dodson, Peter Muir, Rachel Foerster, Raj, Rim Cothern

Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm and expertise to this work.


---

// File: input/pagecontent/downloads.md

### Links

This implementation guide is web-based and is intended to be browsed online.  However, for the convenience of implementers, both this implementation guide, various sub-packages of it and some of the source specifications are available for download.  The following links allow you to download various parts of this implementation guide and other referenced implementation guides for local use.

* This [full IG](full-ig.zip)
* The [resource definitions](definitions.json.zip)  from this IG for use with the FHIR validator (see below)
* The full FHIR [R4]({{site.data.fhir.path}}fhir-spec.zip) specifications and various [downloads]({{site.data.fhir.path}}downloads.html).
* The [US-Core]({{site.data.fhir.ver.hl7_fhir_us_core}}) specifications
* A [validator](https://fhir.github.io/latest-ig-validator/org.hl7.fhir.validator.jar) that can be used to check FHIR resource instance validity.  Information on how to use the validator can be found [here](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator).


---

// File: input/pagecontent/epaWorkflow.md

The current [CRD](http://hl7.org/fhir/us/davinci-crd/), [DTR](http://hl7.org/fhir/us/davinci-dtr/), PAS, and [CDex](http://hl7.org/fhir/us/davinci-cdex/) supporting the electronic Prior Authorization (ePA) workflow only focuses on the interactions between the provider HIT in total and the payer HIT in total, not the necessary interactions among the respective HIT solutions that make up the provider and payer HIT environment that need to participate in the ePA workflow.
Given the combinations of Health Information Technology (HIT) components that may be required to support prior authorization, ONC consider a certification process where certified software can use generic (or generically referenced) relied-upon software to meet certain requirements and can clearly specify the capabilities they rely on without the need to assert each permutation of relied-upon software with which they support the ePA workflow. Further guidance is needed for the interactions necessary within each of the provider and payer HIT configurations based on the functions/roles of those HIT solutions, and requires the relied upon software approach using predictable, standards-based capabilities to participate in an ePA workflow and for HIT that provides full support for ePA workflow through its certified HIT.
The following drawing demonstrates the PAS Workflow exchanges between an integrated provider HIT environment and an integrated payer HIT environment via an intermediary in the upper portion.  The lower portion of the PAS workflow drawing represents the potential for electronic Prior Authorization (ePA) coordinator functionality to play a role between the provider HIT and the intermediary or between the intermediary and the payer HIT.  It should be noted that the exchanges between the provider HIT (including any ePA) and the payer HIT (including any ePA) **SHALL** replicate all of the defined exchanges between provider and intermediary or the intermediary and payer (represented by the green and orange arrows).  The red and purple arrows are representative of information exchange between the Provider ePA and the Provider systems (red arrows) or the information exchange between the Payer ePA and the Payer systems (purple arrows).

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="pas-cdex-workflow.svg" alt="PAS /CDex Workflow"/>
  <figcaption>Figure 6.1 - PAS/CDex Workflow</figcaption>
</figure>
{::options parse_block_html="true" /}

 
The following drawing provides additional detail regarding the exchanges between a Provider ePA Coordinator, multiple Provider HIT systems and the payer.  The boxes below the workflow drawing indicate the activities of the various components. From left to right: 1) the Provider HIT systems, 2) the Provider ePA coordinator, and 3) the Payer HIT. The numbered workflow in the Provider ePA Coordinator indicates the inputs from the example Provider HIT systems that are involved in creating the exchanges between the Provider HIT and the Intermediary. This includes:
1)	Initiating PAS
2)	Retrieving HIT information for the PA bundle
3)	Receiving the decision
4)	Subscribing to updates
5)	Sending status updates (including updates and cancels)
6)	Receiving decisions (for PACS systems, if necessary)
7)	Retrieving documentation based on feedback in the X12 278 PWK01 or HI LOINC codes
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="epadetail.svg" alt="Provider ePA Coordinator Detail"/>
  <figcaption>Figure 6.2 - Provider ePA Coordinator Detail</figcaption>
</figure>
{::options parse_block_html="true" /}


 
The following graphic and associated table provides an example of the type of interactions that will need to be supported between an ePA coordinator and the various Provider HIT components.  These interactions include:
1)	Initiating PAS
2)	Retrieving HIT information for the PA bundle
3)	Receiving the decision
4)	Subscribing to updates
5)	Sending status updates (including updates and cancels)
6)	Receiving decisions 
7)	Retrieving documentation based on feedback in the X12 278 PWK01 or LOINC codes
The table briefly describes each action along with:
•	Provider systems impacted, 
•	Provider API requirements
•	ePA Coordinator API requirements
•	Comments regarding each transaction 
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="epainteractions.svg" alt="PAS/CDex Provider HIT / ePA Coordinator Intractions"/>
  <figcaption>Figure 6.3 - PAS/CDex Provider HIT / ePA Coordinator Intractions</figcaption>
</figure>
{::options parse_block_html="true" /}


The above graphics and descriptions outline the relevant interactions that will be further documented in subsequent releases of the IG as implementations of various combinations of HIT further inform the specifications.


---

// File: input/pagecontent/fhirArtifacts.md

Complying with this implementation guide means complying with a number of profiles, extensions, value sets and custom search parameters.  This page provides an overview of where this information can be found.

These FHIR artifacts define the clinical data that can be submitted as part of a prior authorization submission and/or included as part of a prior authorization response using the [Claim submit](OperationDefinition-Claim-submit.html) operation.

The artifacts are of four types:

* [Profiles]({{site.data.fhir.path}}profiling.html) constrain FHIR resources to reflect PAS requirements
* [Extensions]({{site.data.fhir.path}}extensibility.html) define additional data elements that can be conveyed as part of a resource
* [Code Systems]({{site.data.fhir.path}}codesystem.html) define PAS-specific terminologies to be used in one or more of those profiles
* [Value Sets]({{site.data.fhir.path}}valueset.html) define the specific subsets of both PAS-defined and other code systems that can be (or are recommended to be) used within one or more profile elements
* [Operations]({{site.data.fhir.path}}operationdefinition.html) which define the PAS-specific constraints on the Claim submit operation as well as a Claim inquiry operation.

Many of the profiles are based on US Core 7.0.0 while also declaring conformance with US Core 6.1.0 and 3.1.1. In some cases, the 7.0.0 and/or 6.1.0 releases introduce new "mustSupport" elements that are not mustSupport in 3.1.1. The intention of this implementation guide is NOT to move forward the timelines by which EHRs and/or payers must support USCDI 3 and 4 content. Rather, it is to allow seamless transition as systems start to support the newer US Core releases as systems start to bring them on stream. As such, clients and servers have no obligations with respect to elements that are newly mustSupport in 6.1.0 or 7.0.0 beyond "don't error if these elements are present" until such time as those systems claim conformance with the US Core release which introduces those elements as mustSupport. Once a system claims conformance to US Core 6.1.0 or 7.0.0, then the conformance expectations of those release of the US Core guide come into play.

### Guide Examples
The following examples are present in this guide to show specific use cases:

* [Referral Authorization](Bundle-ReferralAuthorizationBundleExample.html) with [Accepted Response](Bundle-ReferralAuthorizationResponseBundleExample.html)
* [Homecare Authorization](Bundle-HomecareAuthorizationBundleExample.html) with an Update of the Authorization Request sent as an [Full Update](Bundle-HomecareAuthorizationUpdateBundleExample.html) and as a [Differential Update](Bundle-HomecareAuthorizationDifferentialBundleExample.html)
* [Medical Services Authorization](Bundle-MedicalServicesAuthorizationBundleExample.html)
* [Surgical Request Authorization](Bundle-SurgicalRequestBundleExample.html)
* [Error Response](Bundle-ErrorResponseBundleExample.html)
* [Reject Authorization](Bundle-RejectionResponseBundleExample.html)
* [Pending Response](Bundle-ReferralPendingAuthorizationResponseBundleExample.html)
* [Additional Information Task Example](Task-AdditionalInformationTaskExample.html)
* [Subscription](Subscription-PASSubscriptionExample.html), [Subscription Notification](Bundle-PASSubscriptionNotification.html), and [Claim Inquiry](Bundle-PASClaimInquiryBundleExample.html) and a [Claim Inquiry Response](Bundle-PASClaimInquiryResponseBundleExample.html)

#### Guide Artifacts
[Here](artifacts.html) is a listing of the artifacts this guide provides.


### Cross-Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}


---

// File: input/pagecontent/index.md

{% raw %}
<blockquote class="stu-note">
<p>
This specification is currently published as a Standard for Trial Use (STU).  Feedback is welcome and may be submitted through the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> indicating "US Da Vinci PAS" as the specification.
</p>
<p>
Individuals interested in participating in the Prior Authorization Support or other HL7 Da Vinci projects can find information about Da Vinci <a href="http://www.hl7.org/about/davinci">here</a>.
</p>
<p>
Note that this implementation guide is intended to support mapping between FHIR and X12 transactions.  To respect X12 intellectual property, all mapping and X12-specific terminology information will be solely published by X12 and made available in accordance with X12 rules - which may require membership and/or payment.  Please see this <a href="https://confluence.hl7.org/display/DVP/Da+Vinci+Reference+to+External+Standards+and+Terminologies">Da Vinci External Reference page</a> for details on how to get this mapping.
</p>
<p>
There are many situationally required fields that are specified in the X12 TRN03 guide that do not have guidance in this Implementation Guide. All of these fields are marked as Must Support in this guide. However, due to licensing restrictions, implementers need to consult the X12 PAS guides to know the requirements for these fields.
</p>
<p>
Several of the profiles will require use of terminologies that are part of X12 which we anticipate being made publicly available.  At such time as this occurs, the implementation guide will be updated to bind to these as external terminologies.
</p>
</blockquote>
{% endraw %}

### Overview
Prior authorization is a process commonly used by payer organizations to manage healthcare costs.  However, the process of requesting and receiving prior authorizations can be slow and inefficient.  The Administrative Simplification provisions of HIPAA mandate that the X12 278 Health Care Services Review Request for Review and Response be used for communicating prior authorization requests and responses.  While few electronic health record (EHR) systems have implemented this interface, this functionality is often implemented as a portal solution and/or as a part of Practice Management and Revenue Cycle Management solutions.  As a result, prior authorizations are often solicited by fax or by using payer-specific portals where clinicians re-key relevant information.  Fax submission requires manual transcription on the payer side and may result in significant back-and-forth requesting additional information prior to a decision being made.  Re-keying information is inefficient and can result in data entry errors.

This implementation guide strives to enable direct submission of prior authorization requests from EHR systems using a standard already widely supported by most EHRs - FHIR.  To meet regulatory requirements, these FHIR interfaces will communicate with an intermediary who, when necessary, can convert the FHIR requests to the corresponding X12 instances prior to passing the requests to the payer.  Responses are handled by a reverse mechanism (payer to intermediary as X12, then converted to FHIR and passed to the EHR).  Direct submission of prior authorization requests from the EHR will reduce costs for both providers and payers.  It will also result in faster prior authorization decisions which will lead to improved patient care and experience.

When combined with the Da Vinci [Coverage Requirements Discovery (CRD)](http://www.hl7.org/fhir/us/davinci-crd) and [Documentation Templates and Rules (DTR)](http://www.hl7.org/fhir/us/davinci-dtr) implementation guides, direct submission of prior authorization requests will further increase efficiency by ensuring that authorizations are always sent when (and only when) necessary, and that such requests will almost always contain all relevant information needed to make the authorization decision on initial submission.

The implementation guide also defines capabilities around the management of prior authorization requests, including checking the status of a previously submitted request, updating a previously submitted request, and canceling a request.

A high-level summary of how all of these IGs will work together can be seen below:

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" width="1000px" src="pa-stack.png" alt="Diagram showing interaction of CRD, DTR and PAS"/>
  <figcaption>Figure 1.1 - Interaction of CRD, DTR, and PAS</figcaption>
</figure>
{::options parse_block_html="true" /}

### CMS Exception
When using PAS under the [CMS granted exception](https://confluence.hl7.org/display/DVP/Da+Vinci+HIPAA+Exception) (Request Number: HL7 FHIR Exception #2021031001), the implementer(s) **SHALL** disregard any requirements in this Implementation Guide to translate the PAS FHIR Bundle into or out of the X12 278.  The defined PAS FHIR request bundles **SHALL** be transmitted intact between the provider and payer.  The PAS FHIR response bundles **SHALL** be transmitted intact between the payer and the provider.  NOTE: This CMS exception has ended as of June 2024.

### CMS Enforcement Discretion
The Office of Burden Reduction and Health Informatics (OBRHI) National Standards Group (NSG) announced an enforcement discretion that they would not enforce the requirement to use the X12 278 for prior authorization if the covered entities were using the Fast Healthcare Interoperability Resources (FHIR) based Prior Authorization API as described in the CMS Interoperability and Prior Authorization final rule (CMS-0057-F). This allows the payer to return a prior authorization number for use in the X12 837 in coverage extension of the CRD and DTR IGs or as part of the all FHIR exchange of the Prior Authorization Response Bundle in the PAS IG.

When covered entities are operating under the enforcement discretion, the trading partners **SHALL** disregard any requirements in this Implementation Guide to translate the PAS FHIR Bundle into or out of the X12 278. The defined PAS FHIR request bundles **SHALL** be transmitted intact between the provider and payer. The PAS FHIR response bundles **SHALL** be transmitted intact between the payer and the provider.

### Content and Organization
This implementation guide (and the menu for it) is organized into the following sections:

* *Background* - Supporting informative pages that do not set conformance expectations
  * [Reading this IG](background.html) points to key pages in the FHIR spec and other source specifications that must be understood in order to understand this guide
  * [Use Cases](usecases.html) describes the intent of the implementation guide, gives examples of its use, and provides a high-level overview of expected process flow
  * [Project and Participants](credits.html) gives a high-level overview of Da Vinci and identifies the individuals and organizations involved in developing this implementation guide
  * [ePA Coordinators](epaWorkflow.html) acknowledges that neither the payer nor provider systems involved in PAS are monolithic and shows how the various components of provider and payer systems might interact with "ePA Coordinator" systems to satisfy the requirements of this IG
* *Specification* - Pages that set conformance expectations
  * [Conformance Expectations](conformance.html) defines base language and expectations for declaring conformance with the guide
  * [Request for Additional Info](additionalinfo.html) covers considerations around data access, protection, and similar concepts that apply to all implementations
  * [HIPAA Regulations](regulations.html) covers considerations around data access, protection, and similar concepts that apply to all implementations
  * [Privacy, Safety, and Security](privacy.html) covers considerations around data access, protection, and similar concepts that apply to all implementations
  * [Metrics](metrics.html) provides a logical model describing how to capture data that may be relevant to measuring or reporting on PAS use
* *FHIR Artifacts*
  * [Overview](fhirArtifacts.html) introduces and provides links to the profiles, search parameters and other FHIR artifacts used in this implementation guide
  * [Artifacts](artifacts.html) points to the complete list of artifacts defined in this guide
* *Base Specifications* - Quick links to the various specifications this guide derives from
* *Support* - Links to help with use of this guide
  * *Discussion Forum* is a place to ask questions about the guide, discuss potential issues, and search through prior discussions
  * *Project Home* includes information about project calls, agendas, past minutes, and instructions for how to participate
  * *Implementer Support* provides information about reference implementations, resources for testing, known errata, regulatory considerations, and practical implementation pathways
  * *Project Dashoard* shows new and historical issues that have been logged against the specification, proposed dispositions, unapplied changes, etc.
  * *Propose a Change* allows formal submission of requests for change to the specification.  (Consider raising on the discussion forum first.)
  * [Downloads](downloads.html) allows download of this and other specifications, as well as other useful files

### Dependencies

<div class="modified-content" markdown="1">

At present, PAS is based on [FHIR R4]({{site.data.fhir.path}}).  In addition, PAS is dependent on the [US Core 3.1 (FHIR R4)]({{site.data.fhir.ver.uscore3}}), [US Core 6.1 (FHIR R4)]({{site.data.fhir.ver.uscore6}}) and [US Core 7.0 (FHIR R4)]({{site.data.fhir.ver.uscore7}})  implementation guides.  The first is supported for those systems limited to USCDI 1 capabilities, the second is for upcoming regulatory requirements mandating support for USCDI 3, and the last is to enable support for proposed regulations mandating support for USCDI 4.  Wherever possible, Da Vinci profiles strive to comply with all three releases, simplifying implementation for those who will need to support varying regulatory expectations over time.

In some situations, the payer community requires additional constraints or needs to profile resources that are not yet supported by US Core.  In these cases, this IG does not derive from the US Core profiles, though it does align with them as much as possible.  It is possible that certain PAS profiles and/or descriptive content may migrate to a future release of US Core, and in some cases, to the base FHIR standard.
</div>

In addition, this guide uses content from the following FHIR-related specifications and implementation guides:
* [Subscriptions R5 Backport]({{site.data.fhir.ver.subscriptions}})
* [Da Vinci CRD]({{site.data.fhir.ver.crd}})

In addition, this guide also relies on a number of parent implementation guides:

{% include dependency-table-nontech.xhtml %}

This implementation guide defines additional constraints and usage expectations above and beyond the information found in these base specifications.

### Intellectual Property Considerations
This implementation guide and the underlying FHIR specification are licensed as public domain under the [FHIR license](http://hl7.org/fhir/R4/license.html#license). The license page also describes rules for the use of the FHIR name and logo.

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/metrics.md

### Overview

This Implementation Guide (IG) is one of 4 HL7 Da Vinci IGs that are designed to address the challenges of automating the exchange of information between a provider and the responsible payer to determine coverage of services, items, and referrals. In particular, these IGs standardize the exchange of information required to automate the Prior Authorization (PA) process. The specific IG are:

1. [Coverage Requirements Discovery (CRD)](http://hl7.org/fhir/us/davinci-crd)
2. [Documentation Templates and Rules (DTR)](http://hl7.org/fhir/us/davinci-dtr)
3. Prior Authorization Support (PAS) (this guide)
4. [Clinical Documentation Exchange (CDex)](http://hl7.org/fhir/us/davinci-cdex)

Each guide supports a specific set of functions and exchanges required to determine payer coverage for specific services, items, and referrals.

To maximize the value of these IGs, it is imperative that each IG is integrated into clinical workflow at the appropriate point and all of the exchanges required by each IG are fully supported by all of the participants (providers, intermediaries, and payers).

Each of these IGs recommends a set of metrics that **SHOULD** or **MAY** be collected by their respective implementations to facilitate the evaluation of adoption, functionality, processes, and improved outcomes. While there is currently no requirement to report on these metrics, it is reasonable to believe that in the future interested entities (providers, payers, regulators, quality organizations, certification agencies, states, etc.) will ask for these metrics to evaluate the ongoing automation of the supported processes / exchanges. While this guide will not require these metrics to be captured in this release, the authors strongly suggest each implementation should do so with the expectation that collection and dissemination of these metrics may become a requirement (SHALL) in future version of these IGs.

The table below defines a set of measures with a short name, purpose, conformance, stakeholder, and collection/calculation instructions that represent what the project group designing this IG felt would be both reasonably collectable and useful in evaluating implementations of this IG.  These measures are based on the [metric data model logical model](StructureDefinition-PASMetricData.html) also published in this IG.

### Suggested Metrics
The following table defines a set of metrics with a purpose, type, and stakeholder (based on the Metric Data model below). 

<table style="text-align: center; vertical-align: middle;">
  <tr>
    <th>Nbr</th>
    <th style="width: 140px; text-align: center; vertical-align: middle;">Metric</th>
    <th style="width: 125px; text-align: center; vertical-align: middle;">Metric Type</th>
    <th style="width: 140px; text-align: center; vertical-align: middle;">Stakeholder</th>
	<th style="text-align:center; vertical-align: middle;">Calculation Example</th>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">1</td>
    <td style="text-align: center; vertical-align: middle;">Volume of PAS submissions (as 278 and line items)</td>
    <td style="text-align: center; vertical-align: middle;">Adoption</td>
    <td style="text-align: center; vertical-align: middle;">Provider / Payer / Intermediary</td>
	<td style="text-align: center; vertical-align: middle;">For 278 volume:
PASMetricData.response.exists.count()
For service items:
PASMetricData.itemDetail.exists.count()</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">2</td>
    <td style="text-align: center; vertical-align: middle;">Volume of PAS Updates, Cancels, Queries</td>
    <td style="text-align: center; vertical-align: middle;">Adoption Process</td>
    <td style="text-align: center; vertical-align: middle;">Provider / Payer / Intermediary</td>   
	<td style="text-align: center; vertical-align: middle;">For Cancel volume:
PASMetricData.exists.where(exchange.type = "cancel").count()</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">3</td>
    <td style="text-align: center; vertical-align: middle;">Volume of queries by other than ordering provider</td>
    <td style="text-align: center; vertical-align: middle;">Process</td>
    <td style="text-align: center; vertical-align: middle;">Provider / Payer / Intermediary</td>   
	<td style="text-align: center; vertical-align: middle;">For Query volume:
PASMetricData.exists.where(exchange.type = "query").count()</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">4</td>
    <td style="text-align: center; vertical-align: middle;">% of PAS submissions returning an error (by type and payer)</td>
    <td style="text-align: center; vertical-align: middle;">Process</td>
    <td style="text-align: center; vertical-align: middle;">Provider (all errors) / Payer (subset) / Intermediary (subset)</td>   
	<td style="text-align: center; vertical-align: middle;">PASMetricData.where(httResponse != 200).count()
For percent:
divide volume above by PASMetricData.exists.count() and express as a percentage</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">5</td>
    <td style="text-align: center; vertical-align: middle;">% of PAS submissions returning a final result on initial submission (any item and all items)</td>
    <td style="text-align: center; vertical-align: middle;">Process Outcome</td>
    <td style="text-align: center; vertical-align: middle;">Provider / Payer</td>   
	<td style="text-align: center; vertical-align: middle;">Number of final :
PASMetricData.where(exchange.type = "initial" and itemDetail.result != "pended").count() 
Divide volume above by:
PASMetricData.where(exchange.type = " initial" and itemDetail.exists).count() and express as a percentage</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">6</td>
    <td style="text-align: center; vertical-align: middle;">Volume of line items that have an initial PEND and number of PENDS that were resolved and (more complex) average time to resolve each PEND</td>
    <td style="text-align: center; vertical-align: middle;">Process Outcome</td>
    <td style="text-align: center; vertical-align: middle;">Provider / Payer</td>   
	<td style="text-align: center; vertical-align: middle;">Number of initial PEND:
PASMetricData.where(exchange.type = "initial" and itemDetail.result = "pended").count()</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">7</td>
    <td style="text-align: center; vertical-align: middle;">Total time from initial submission until final PA result for all line items</td>
    <td style="text-align: center; vertical-align: middle;">Process</td>
    <td style="text-align: center; vertical-align: middle;">Provider / Payer</td>   
	<td style="text-align: center; vertical-align: middle;">PASMetricData.where(ItemDetial.result  != "pended") (finalResponseTime - InitialSubmissionTime)</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">8</td>
    <td style="text-align: center; vertical-align: middle;">All of the above by payer / provider (depending on metric) and over time</td>
    <td style="text-align: center; vertical-align: middle;">Segmentation</td>
    <td style="text-align: center; vertical-align: middle;">Provider / Payer</td>   
	<td style="text-align: center; vertical-align: middle;">Segmentation based on time and
PASMetricData.source 
and 
(PASMetricData.payerID 
or 
PASMetricData.groupID)</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">9</td>
    <td style="text-align: center; vertical-align: middle;">Outstanding PAS requests</td>
    <td style="text-align: center; vertical-align: middle;">Operation Dashboard</td>
    <td style="text-align: center; vertical-align: middle;">Provider / Intermediary</td>   
	<td style="text-align: center; vertical-align: middle;">PASMetricData.exists.where(itemDetail.result = "pended").count()</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">10</td>
    <td style="text-align: center; vertical-align: middle;">Aging of PENDED requests</td>
    <td style="text-align: center; vertical-align: middle;">Operation Dashboard</td>
    <td style="text-align: center; vertical-align: middle;">Provider / Intermediary</td>   
	<td style="text-align: center; vertical-align: middle;">for each of the above items (current time - initialSubmissionTime)</td>
  </tr>
</table>

### Metric Data Model
In the interest of enabling such evaluation processes, this guide has defined a 
[logical PAS Metric model](StructureDefinition-PASMetricData.html) that describes the data elements most
likely to be relevant for such evaluation.

This model is NOT a FHIR data structure for information exchange.  Instead, it is a logical model that describes
the types of data that should be available and any constraints on the data (e.g. cardinality, terminology) that
should be captured by PAS implementers to support the evaluation of metrics.  Measures can then be defined
in a standardized way based on these measures.

PAS implementers **SHOULD** store information for each PAS call in a manner that would allow them to respond to
measures based on this logical model.


---

// File: input/pagecontent/privacy.md

### Privacy & Security Considerations
The profiles in this IG are defined to ensure sufficient information to properly populate the X12 specifications, though they also allow for additional data to be present. As well, the data elements in the X12 specifications are allowed to be omitted - what data is required by the payer to process a prior authorization is context and business-rule-specific. Implementers submitting prior authorization requests using PAS must be aware of (and adhere to) their responsibilities with respect to data sharing imposed by regulations such as HIPAA's "minimum necessary" rule, patient consent rules, etc. This may involve allowing providers to review information prior to data transmission to the payer. Implementations **SHALL** permit provider review of data prior to transmission, but **SHALL NOT** require such review.

The sharing of information from provider to payer for determining prior authorization is subject to HIPAA's "minimum necessary" regulations (specifically 45 CFR 164.514(d)(3) and (d)(4)). Payers are responsible for ensuring that only information necessary to make the prior authorization decision is solicited and providers are responsible for ensuring that only data that is reasonably relevant to the prior authorization decision is transmitted.

Some of the data shared as part of the prior authorization process may have associated constraints on the use of that information for other purposes, including subsequent disclosure to other payers, practitioners, policy-holders, etc. While HL7 FHIR supports conveying this information via security labels on transmitted resources, this information is not currently mappable (and thus findable) in the X12 275 and 278 transactions. Payers who do not view the FHIR version of the transmitted information should be aware of the possibility of these limitations and ensure they have policies that enforce appropriate sharing constraints on data.

In order to access information about a prior authorization, the provider system will need to access the payor system. This will require that the provider system authenticates to the payer system or an intermediary. The specifics of how this authentication is covered is handled within the Da Vinci HRex Implementation guide.  PAS Servers **SHOULD** support server-server OAuth and **MAY** support mutually authenticated TLS.  In a future release of this guide, direction will limit the option to server-server OAuth.  Every system implementing the Prior Authorization guide will need to be aware of and follow the guidance in the FHIR Core Specification on [Clinical Safety](http://hl7.org/fhir/R4/safety.html), the FHIR Core Specification on [Security](http://hl7.org/fhir/R4/security.html) and the [Security and Privacy page in the Da Vinci HRex guide](http://hl7.org/fhir/us/davinci-hrex/security.html).

Once the system authentication has occurred, the payer will perform any authorization required for the provider to see the current state of the prior authorization.


---

// File: input/pagecontent/regulations.md

The Health Insurance Portability and Accountability Act (HIPAA) of 1996 contains the following three major provisions:
* Portability
* Medicaid Integrity Program/Fraud and Abuse
* Administrative Simplification

This page summarizes the administrative simplification provision that implemented standard transaction and code sets, identifiers, security, and privacy rules across the healthcare industry.  This page is informative and implementers should always consult the full regulations if they have questions/concerns.

### Administrative Simplification Requirements of HIPAA
The major requirements of administrative simplification affect:
* Transactions and code sets - establishes standards for electronic transactions and external medical data code sets
* Identifiers - establishes a standard for a unique employer identifier and a standard for National Provider Identifiers (NPIs)
* Security - specifies the administrative, technical, and physical requirements for covered entities to use in safeguarding protected health information
* Privacy - establishes a set of national standards for the protection of certain health information; addresses standards for the use and disclosure of individuals' health information (called "protected health information"); outlines standards for individuals' privacy rights, as well as individuals' rights to understand and control how their health information is used

The complete suite of [HIPAA Administrative Simplification Regulations](https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/combined-regulation-text/index.html) can be found on the Health and Human Services (HHS) website at hhs.gov.

The following entities are affected by the HIPAA administration simplification requirements:
* All health plans, including Medicaid, Medicare, and commercial plans
* Healthcare Providers who choose to transmit any information in an electronic form in connection with a transaction for which HHS has adopted a standard
* Healthcare clearinghouses

### General Summary of Requirements
The following are general requirements under the administrative simplification of the HIPAA regulations.

Health Plans (including CMS) 
* May not refuse to conduct a standard transaction
* May not delay, adversely impact, or attempt to adversely affect a standard transaction or a person using standard transaction
* Can require standard data elements within a standard transaction
* May use a business associate or clearinghouse as an intermediary to achieve compliance

Providers
* Compliance required by any "health care provider who transmits any health information in electronic form in connection with a transaction referred to" in the Act
* May use a business associate or clearinghouse as an intermediary to achieve compliance

### HIPAA Regulations
As of the publication of this implementation guide, the following are references to the applicable federal regulations regarding the use of specific transactions for prior authorization:

* Title II, Subtitle F -- Administrative Simplification of the Health Insurance Portability and Accountability Act of 1996 (HIPAA) (Public Law 104-191, H. R. 3103, Kennedy-Kassebaum Bill) which amends Part C of Title XI of the Social Security Act, and is codified starting at 42 U.S.C. §1320d
* 45 CFR Part 162 Subpart M - Referral Certification and Authorization

The following is an excerpt from the CFR for referral certification and authorization (relevant sections bolded).
> § 162.1302   Standards for referral certification and authorization transaction. 
> The Secretary adopts the following standards for the referral certification and authorization transaction: 
>>  (b) For the period from March 17, 2009 through December 31, 2011 both— 
>>> (1) The standards identified in paragraph (a) of this section; and 
>>> (2)(i) Retail pharmacy drugs. The Telecommunication Standard Implementation Guide Version D, Release 0 (Version D.0), August 2007, and equivalent Batch Standard Implementation Guide, Version 1, Release 2 (Version 1.2), National Council for Prescription Drug Programs. (Incorporated by reference in § 162.920.) 
>>>>  **(ii) Dental, professional, and institutional request for review and response. The ASC X12 Standards for Electronic Data Interchange Technical Report Type 3—Health Care Services Review—Request for Review and Response (278), May 2006, ASC X12N/005010X217, and Errata to Health Care Services Review-—Request for Review and Response (278), ASC X12 Standards for Electronic Data Interchange Technical Report Type 3, April 2008, ASC X12N/005010X217E1. (Incorporated by reference in § 162.920.)**
>> **(c) For the period on and after January 1, 2012, the standards identified in paragraph (b)(2) of this section.**

Note: defines the use of the ASC X12 5010 278/217 for referral certification and authorization

---

The following is an excerpt from the CFR restricting trading partner agreements (relevant sections bolded).
> § 162.915   Trading partner agreements. 
> **A covered entity must not enter into a trading partner agreement that would do any of the following:** 
>> (a) **Change the definition, data condition, or use of a data element or segment in a standard or operating rule**, except where necessary to implement State or Federal law, or to protect against fraud and abuse. 
>> (b) **Add any data elements or segments** to the maximum defined data set. 
>> (c) **Use any code or data elements that are either marked "not used"** in the standard's implementation specification or are not in the standard's implementation specification(s). 
>> (d) **Change the meaning or intent of the standard's implementation specification(s)**. [65 FR 50367, Aug. 17, 2000, as amended at 76 FR 40495, July 8, 2011]

Note: trading partner agreements cannot modify the standard

---

The following is an excerpt from the CFR requiring the use of the standard transaction (relevant sections bolded).
> § 162.923   Requirements for covered entities. 
>> (a) General rule. **Except as otherwise provided in this part**, if a covered entity conducts, with another covered entity that is **required to comply with a transaction standard adopted under this part (or within the same covered entity)**, using electronic media, a transaction for which the Secretary has adopted a standard under this part, the covered entity must conduct the transaction as a standard transaction. 

Note: requires the use of the standard within the same covered entity (e.g. within a clearinghouse)

---

The following is an excerpt from the CFR providing an exception for "direct data entry transactions" (relevant sections bolded).
> § 162.923   Requirements for covered entities. 
>> (b) **Exception for direct data entry transactions.  A health care provider electing to use direct data entry offered by a health plan to conduct a transaction for which a standard has been adopted under this part must use the applicable data content and data condition requirements of the standard when conducting the transaction. The health care provider is not required to use the format requirements of the standard.**

> § 162.103 Definitions  Defines Direct data entry as “means the direct entry of data (for example, using dumb terminals or web browsers) that is immediately transmitted into a health plan's computer.”

Note: allows the use of an alternative transaction as long as it uses the “applicable” data content and data condition requirements of the standard – intended to support organization that cannot perform the standard transaction

---

The following is an excerpt from the CFR providing the use a business associate (relevant sections bolded).

> § 162.923   Requirements for covered entities. 
>> (c) Use of a business associate. **A covered entity may use a business associate, including a health care clearinghouse, to conduct a transaction covered by this part.** If a covered entity chooses to use a business associate to conduct all or part of a transaction on behalf of the covered entity, the covered entity must require the business associate to do the following: 
>>> (1) Comply with all applicable requirements of this part. 
>>> (2) Require any agent or subcontractor to comply with all applicable requirements of this part. 

Note: Covered entity may satisfy the transaction requirements through the use of business associate or clearing house that then has the obligation to use the standard

---

The following is an excerpt from the CFR defining additional rules for clearinghouses (relevant sections bolded).
> § 162.930   **Additional rules for health care clearinghouses.** 
> When acting as a business associate for another covered entity, a health care **clearinghouse may perform the following functions**: 
>> (a) **Receive a standard transaction** on behalf of the covered entity and translate it into a nonstandard transaction (for example, nonstandard format and/or nonstandard data content) for transmission to the covered entity. 
>> (b) **Receive a nonstandard transaction** (for example, nonstandard format and/or nonstandard data content) from the covered entity **and translate it into a standard transaction** for transmission on behalf of the covered entity. 

Note: clearinghouses can convert non-standard transactions to and from standard transactions

The following is an excerpt from the CFR defining additional rules for health plans.
> § 162.925 **Additional requirements for health plans**
>> a) General rules. (1) If an entity requests a health plan to conduct a transaction as a standard transaction, the health plan must do so.
>>> (2) A health plan may not delay or reject a transaction, or attempt to adversely affect the other entity or the transaction, because the transaction is a standard transaction.
>>> (3) A health plan may not reject a standard transaction on the basis that it contains data elements not needed or used by the health plan (for example, coordination of benefits information).
>>> (4) A health plan may not offer an incentive for a health care provider to conduct a transaction covered by this part as a transaction described under the exception provided for in § 162.923(b).
>>> (5) A health plan that operates as a health care clearinghouse, or requires an entity to use a health care clearinghouse to receive, process, or transmit a standard transaction may not charge fees or costs in excess of the fees or costs for normal telecommunications that the entity incurs when it directly transmits, or receives, a standard transaction to, or from, a health plan.
>>> (6) During the period from March 17, 2009 through December 31, 2011, a health plan may not delay or reject a standard transaction, or attempt to adversely affect the other entity or the transaction, on the basis that it does not comply with another adopted standard for the same period.
>> (b) Coordination of benefits. If a health plan receives a standard transaction and coordinates benefits with another health plan (or another payer), it must store the coordination of benefits data it needs to forward the standard transaction to the other health plan (or other payer).
>> (c) Code sets. A health plan must meet each of the following requirements:
>>> (1) Accept and promptly process any standard transaction that contains codes that are valid, as provided in subpart J of this part.
>>> (2) Keep code sets for the current billing period and appeals periods still open to processing under the terms of the health plan's coverage.


---

// File: input/pagecontent/specification.md

This section of the implementation guide defines the specific conformance requirements for systems wishing to conform to this Prior Authorization Support implementation guide.  The bulk of it focuses on the Claim $submit operation, though it also provides guidance on privacy, security and other implementation requirements.


### Context

#### Pre-reading
Before reading this formal specification, implementers should first familiarize themselves with two other key portions of the specification:

* The [Use Cases & Overview](usecases.html) page provides context for what this formal specification is trying to accomplish and will give a sense of both the business context and general process flow enabled by the formal specification below.

* The [Technical Background](background.html) page provides information about the underlying specifications and indicates what portions of them should be read and understood to have the necessary foundation to understand the constraints and usage guidance described here.


#### Systems

This implementation guide sets expectations for two types of systems:

* **Client** systems are electronic medical records, pharmacy systems (for drugs that are part of a medical benefit) and other clinical and administrative systems responsible for requesting prior authorizations
* **Payer** systems are systems run by insurers, clearing houses and other organizations that are responsible for relaying or responding to requests for prior authorization


#### Profiles
This specification makes significant use of [FHIR profiles]({{site.data.fhir.path}}profiling.html) and terminology artifacts to describe the content to be shared as part of prior authorization requests and responses.

The full set of profiles defined in this implementation guide can be found by following the links on the [Artifacts](fhirArtifacts.html) page.

#### Integration with other Implementation Guides
* Along with the profiles defined in the PAS implementation guide, implementations **SHALL** also support the US Core R4 profiles for Condition, Observation, and Procedure.  They **SHOULD** support any other profiles relevant to the types of prior authorizations they process.
* Clients and Servers supporting this implementation guide **SHOULD** also comply with the Da Vinci [Coverage Requirements Discovery (CRD)](http://www.hl7.org/fhir/us/davinci-crd) and [Documentation Templates and Rules (DTR)](http://www.hl7.org/fhir/us/davinci-dtr) implementation guides.
* Every system claiming conformance to this IG **SHALL** comply with the [Security and Privacy page in the Da Vinci HRex guide](http://hl7.org/fhir/us/davinci-hrex/security.html). The FHIR implementer's Safety Checklist helps implementers be sure that they have considered all the parts of FHIR that impact their system design regarding privacy, security, provenance, and safety.
* Payers may have multiple back-end functions that handle different types of decision support and/or different types of services. If a payer supports endpoint discovery, they **SHALL** have at most a single endpoint for each coverage (e.g., Medicare, Medicaid, or commercial) they provide coverage under. In FHIR, a coverage instance essentially corresponds with the identification information on an insurance card, irrespective of the types of coverages available under that card. If a payer does not support endpoint discovery, they **SHALL** expose only one PAS endpoint capable of handling all coverages.
* Initial setup of connectivity between client and payer will have a manual component to establish security credentials and a trust relationship (unless both parties are part of a shared trust network).  Dynamic endpoint discovery allows for the potential for the use of different endpoints for different coverages and/or evolution of what endpoints are used for different coverage over time withoutchanging security credential or legal agreement expectations.

### Detailed Requirements

#### Summary
***NOTE*** FHIR uses a pair of resources called Claim and ClaimResponse for multiple purposes - they are used for actual claim submission, but they are *also* used for managing prior authorizations and pre-determinations.  These are distinguished by the Claim.use code.  **All references to Claim and ClaimResponse in this implementation guide are using it for the prior authorization purpose.  In any element description, where tense is part of the description, it should be interpreted in the context of a prior authorization.  An example would be "Product or service provided" which should be interpreted as the product or service being requested to be authorized.**  

The primary interaction supported by this implementation guide is submitting a prior authorization request and receiving back a response.  To perform this, a [PASBundle](StructureDefinition-profile-pas-request-bundle.html) resource is constructed by the client (EHR) system.  That Bundle will contain a [Claim](StructureDefinition-profile-claim.html) resource (which FHIR uses to submit prior authorization requests), together with various referenced resources needed to support the population of the 5010 version of the ASC X12N 278 prior authorization request and the 6020 version of the ASC X12N 275 additional documentation transactions.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="pas-content.png" alt="PAS Bundle Content"/>
  <figcaption>Figure 5.1 - PAS Bundle Content</figcaption>
</figure>
{::options parse_block_html="true" /}


This Bundle will then be sent as the sole payload of a [Claim submit](OperationDefinition-Claim-submit.html) operation.  The system on which the operation is invoked will convert the Bundle into an ASC X12N 278 and 0..* additional unsolicited 275 transactions and execute them all against the target payer system.  It will then take the resulting 278 response and convert it into a response FHIR [Bundle](StructureDefinition-profile-pas-response-bundle.html) containing a [ClaimResponse](StructureDefinition-profile-claimresponse.html) and associated resources.  All of this **SHOULD** happen synchronously with a maximum of 15 seconds between the user initiating the prior authorization request and seeing the resulting response - i.e. including network transmission time for request and response. (Less time is better.)

In the event that the prior authorization cannot be evaluated and a final response returned within the required timeframe, a response in which one or more of the requested authorization items are 'pended' will be returned.  A subscription-based mechanism can then be used by the client to be informed of updates to the authorization.  As well, the client (or other interested systems - e.g. patient, caregiver or performing provider systems) can use the [Claim inquire operation](OperationDefinition-Claim-inquiry.html) to query for the final results.  During this period of time, the same Claim submit operation can be used to request cancellation or modification of the prior authorization.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="pas_sequence_diagram.png" alt="PAS Submission Sequence Diagram"/>
  <figcaption>Figure 5.2 - PAS Submission Sequence</figcaption>
</figure>
{::options parse_block_html="true" /}

#### Prior Authorization Submission
The Claim submit operation is executed by POSTing a FHIR Bundle to the [base url]/Claim/$submit endpoint.  When an EHR configures itself to support a payer's PAS service, it will need to identify which Payer(s) the service supports such that it can ensure that the EHR only sends service calls to PAS services that the patient has current coverage for.  The payer endpoint is responsible for any internal routing based on which processing organization handles the decisions.  For this purpose, payer means 'The organization listed on the member's insurance card'.
Provider and EHR Vendor organizations MAY leverage the [payer registry](https://www.hl7.org/fhir/us/davinci-pdex/payertopayerexchange.html#mtls-endpoint-discovery) developed by PDex (which will eventually fold into the national directory under FAST) as a means of determining which endpoints exist for which payers as candidates for configuration.

The Bundle **SHALL** be encoded in JSON.  The first entry in the Bundle **SHALL** be a Claim resource complying with the [profile](StructureDefinition-profile-claim.html) defined in this IG to ensure the content is sufficient to appropriately populate an X12N 278 message.  Additional Bundle entries **SHALL** be populated with any resources referenced by the Claim resource (and any resources referenced by *those* resources, fully traversing all references and complying with all identified profiles).  Note that even if a given resource instance is referenced multiple times, it **SHALL** only appear in the Bundle once.  E.g., if the same Practitioner information is referenced in multiple places, only one Practitioner instance should be created - referenced from multiple places as appropriate.  Bundle.entry.fullUrl values **SHALL** be:

* the URL at which the resource is available from the EHR if exposed via the client's REST interface; or
* the form "urn:uuid:[some guid]"  
 
All GUIDs used **SHALL** be unique, including across independent prior authorization submissions - with the exception that the same resource instance being referenced in distinct prior authorization request Bundles can have the same GUID.

In addition to these core elements needed to populate the 278 message, any "supporting information" resources needed to process the prior authorization request (whether determined by DTR processes or by other means) must also be included in the Bundle.  Relevant resources referenced by those "supporting information" resources **SHALL** also be included (e.g. prescriber Practitioner and Medication for a MedicationRequest).  Any such resource that has a US Core profile **SHALL** comply with the relevant US Core profiles.  All "supporting information" resources included in the Bundle **SHALL** be pointed to by the Claim resource using the Claim.supportingInfo.valueReference element.  To attach non-FHIR instance data such as PDFs, CDAs, JPGs, a DocumentReference instance should be used.  QuestionnaireResponse is also a common way to return supporting information that was answered to a Questionnaire and so can be included as a reference to the QuestionnaireResponse which will also be included in the Bundle..  The Claim.supportingInfo.sequence for each entry **SHALL** be unique within the Claim.

All resources **SHALL** comply with their respective profiles.  FHIR elements not marked as 'must support' **MAY** be included in resources within the Bundle, but client systems should have no expectation of such elements being processed by the payer unless prior arrangements have been made.  Systems that do not process such elements **SHALL** ignore unsupported elements unless they are 'modifier' elements, in which case the system **MAY** treat the presence of the element as an error.

Details on how to map the FHIR Bundle to the relevant X12N 278 and 275 messages are expected to be published by ASC X12N.  The mapping for the 278 Request and Response will be whatever is currently mandated by HIPAA and the mapping for the 278 Inquiry and Response will be the compatible version.  The system is responsible for performing full conversion of all mapped elements, including execution of terminology translations when necessary.  In addition, the system **SHALL** make the entire PAS FHIR Bundle available to the intended payer.  The method may be based on the X12 275 or another method that trading partners have agreed to use.  This serves two purposes - it provides full audit traceability for the payer and it also allows the payer to directly process the FHIR content, potentially extracting elements not present in the X12 messages if needed.  (Note: there is no requirement that payers take any such action.).  If the X12 275 is used for this purpose, the 275 BDS01 Filter ID Code element **SHALL** be set to "B64".  Since the 275 binary segment doesn't contain a field for the binary data MIME type, any system reading that field will have to parse out the first few characters to determine whether the FHIR resources are encoded using XML or JSON syntax.  Translation/mapping systems should be aware that if the size of the attachments as part of a claims submission would exceed the size limitations of a particular recipient, the intermediary should split the attachments into separate 275s to remain within the overall limit.  All the data required for an X12N 278 is included in the FHIR Bundle request and response, to stay in compliance with HIPAA transaction requirements.

{% raw %}
<blockquote class="stu-note">
<p>
The mapping of Claim.item is driven by the X12 workflow with the use of identifiers on claim items.  Although X12 allows this, the Financial Management workgroup has not seen this in other standards and other jurisdictions.  This Implementation Guide uses extensions for the various item identifiers, but should this pattern be found to predominate then this may be promoted to an element in the base resource.
</p>
</blockquote>
{% endraw %}

This IG treats everything that happens beyond the defined operations endpoint receiving the FHIR bundle as a black box.  This black box includes any business associate(s), clearinghouse(s), payers, contracted review entities,  and other intermediaries that may be involved in the PA request and response. It is up to that black box to ensure that any regulatory requirements are met and to perform all processing within the allowed timeframe.

#### Processing Prior Authorization Submissions under the CMS Exception
{% raw %}
<blockquote class="stu-note">
<p>
The following confluence page is still being worked on and may not be complete at this time.
</p>
</blockquote>
{% endraw %}

There is an [HL7 Confluence Page](https://confluence.hl7.org/display/DVP/PAS+Exception+Guidance) that is intended to provide guidance for how to process Prior Authorization submissions under the CMS Exception.


#### Prior Authorization Response
The response to the prior authorization is processed in the reverse order as the request.  The system is responsible for converting the ASC X12N 278 response into a FHIR [Bundle](StructureDefinition-profile-pas-response-bundle.html).  The Bundle **SHALL** start with a [ClaimResponse](StructureDefinition-profile-claimresponse.html) entry that contains information mapped from the 278 response.  The ClaimResponse requires that a Claim be referenced in the ClaimResponse.request element.  This Claim resource does not need to be included in the Bundle but the Claim URL or identifier does need to be sent so that the ClaimResponse can be matched to the original Claim.  All other resources that were sent in the Claim request can also be returned as just references in the ClaimResponse.  The only resources that need to be returned in the response Bundle are the ClaimResponse and any resources that are new or changed as a result of the prior authorization processing. It is valid to send all resources in the Bundle if a system does not want or is not able to determine what is changed/new from the request.  When converting additional Bundle entries, the conversion process **SHALL** ensure that only one resource is created for a given combination of content.  E.g. if the same Practitioner information is referenced in multiple places, only one Practitioner instance should be created - referenced from multiple places as appropriate.  When echoing back resources that are the same as were present in the prior authorization request, the system **SHALL** ensure that the same fullUrl and resource identifiers are used in the response as appeared in the request.

Whether a response is considered 'pended', 'denied', or 'successful' depends on the review action code returned in the response.  It can be found in ClaimResponse.item.adjudication.extension(reviewaction)l.code.

Each item returned on the PAS ClaimResponse SHALL echo the same item.sequence as that same item had on the Claim. The item.sequence element SHALL serve as the main tracing identifier of items throughout requests and responses.

It is possible that the incoming prior authorization Bundle can not be processed due to validation errors or other non-business-errors.  In these instances, the receiving system **SHALL** return OperationOutcome instances that detail why the Bundle could not be processed and no ClaimResponse will be returned.  These errors are NOT the errors that are detected by the system processing the request and that can be conveyed in a ClaimResponse via the error capability.

The resulting Bundle is returned as the HTTP body of the POST response.

##### Returning Authorized Items that are different from what was Requested
<div class="modified-content" markdown="1">
It is often the case that what is authorized is different from what was requested.  Sometimes this is a modification of the requested item such as different quantities, eg. requested five counselling sessions but was authorized for three, or different locations, eg. requested services to be provided by Provider A but authorized to be provided by Provider B.  Other times these are authorized items that are in addition to the requested items.

In surveys with payers, it appears that this is returned in X12 responses in two different ways.  Some payers will return the requested items as 'denied' and return the authorized items as extra items.  Others will return the requested items as modified with the differences in the item itself.  To achieve consistency in the FHIR response, we have decided to require one method for returning the authorized items if they are different from what was requested.

For instances where the authorized item is a modification of the requested item, the requested item SHALL be returned in the ClaimResponse.item with an adjudication status of A6 - 'Modified'.  The actual authorized item SHALL be returned in the ClaimResponse.addItem.  The itemSequence element is used to link the addItem to the original item.  NOTE: The itemAuthorizedDetail extension is still allowed on the ClaimResponse.item.  The new intent of this extension is to indicate what was authorized which should match what was requested since the ClaimResponse.item does not have this information.  If what has been authorized is different, then the ClaimResponse.addItem SHALL be used.

For instances where there are new authorized items, they are returned in the ClaimResponse.addItem and the itemSequence will not match any of the requested items and thus will indicate that it is a new item.
</div>

##### Prior Authorization Request and Response Example
This is an example of a standard Referral Request / Response sequence between a Primary Care Provider and a Utilization Management Organization. The [request example](Bundle-ReferralAuthorizationBundleExample.html) will show how a PCP can request a referral to a specialist for a patient from a UMO. The [response example](Bundle-ReferralAuthorizationResponseBundleExample.html) will also show the response.

Joe Smith is a subscriber to Maryland Capital Insurance Company. During a regular physical, Dr. James Gardener, Joe’s primary care physician, diagnoses a potential heart problem. Dr. Gardener determines that it would be best to refer Joe to Dr. Susan Watson, a cardiologist, for a consultation.

Dr. Gardener is required by Maryland Capital Insurance to submit a request for review seeking approval to refer Joe to Dr. Watson.

After review, Maryland Capital approves the referral and responds.

#### Prior Authorization Transaction Error Handling
{% raw %}
<blockquote class="stu-note">
<p>
This section was added in the May 2022 ballot of PAS and we are seeking balloter feedback on it.
</p>
</blockquote>
{% endraw %}
The need for predictable exchanges of transaction error conditions with PAS to exchange information between providers, intermediaries and payers cannot be overstated.  This section describes the various error conditions the PAS exchange may encounter and the appropriate method of reporting them to the initiating provider. Recipients of the transactions should respond as indicated below and senders of the transaction should look for the following responses and then take appropriate actions.

Business errors that are a part of the processing of the 278 payload, eg. in the AAA segments, are represented in the mapping to the response bundle.

All transactions in PAS are synchronous and **SHALL** require one of the following HTTP responses:

##### HTTP Responses

* 2XX – transaction submission succeeded
*	4XX – transaction failed – bad request - failures are not recoverable by resubmission of the transaction.  There will be an OperationOutcome returned that can be reviewed to determine the actual failure 
*	5XX – transaction failed – service unavailable or timeout - failures that may be temporary and resubmission may result in successful processing.  NOTE that no OperationOutcome will be returned in this instance

If an OperationOutcome is received, it may have information regarding errors that should be addressed in the future, but did not cause the transaction to fail.  NOTE: These errors should not be returned to the provider but should be reviewed and addressed by technical staff.

###### OperationOutcome Data Elements

| Element | Cardinality | Datatype | Information |
| ------- | ----------- | -------- | ----------- |
| Severity | 1..1 | code | fatal, error, warning, information |
| Code | 1..1 | code | IssueType |
| Details | 0..1 | CodeableConcept | additional code that clarifies the issue type |
| Diagnostics | 0..1 | string | addl information (response from validation, TA1, 999) |
| Expression | 0..* | string | FHIRPath of element(s) |

See the [OperationOutcome resource]({{site.data.fhir.path}}operationoutcome.html) for more information.

##### Prior Authorization Workflow Diagrams
Here are two workflow diagrams that show the sending of a request, the receiving of a response, and optional error handing.  The diagrams show an optional second intermediary.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="pas-error-twointermediaries.jpg" alt="PAS Two Intermediaries Workflow"/>
  <figcaption>Figure 5.3 - PAS Workflow with Two Intermediaries</figcaption>
</figure>
{::options parse_block_html="true" /}

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="pas-error-after-pend.jpg" alt="PAS Pended Transactions Workflow"/>
  <figcaption>Figure 5.4 - PAS Workflow for pended transactions</figcaption>
</figure>
{::options parse_block_html="true" /}

##### Missing Prior Authorization Response
Implementers who are used to using messaging may not be familiar with the process for what happens if a $submit response gets lost or the notification of a prior authorization update gets lost.

For subscriptions, see the Subscription Backport Guide on [Handling Errors](https://hl7.org/fhir/uv/subscriptions-backport/errors.html).

For missing responses to $submit, the FHIR guide has a section on what to do when reliable messaging is not involved: [Absence of Reliable Messaging](http://hl7.org/fhir/messaging.html#reliable).


#### Prior Authorization Inquiries
The [prior authorization inquiry operation](OperationDefinition-Claim-inquiry.html) allows for inquiries about prior authorization submissions.  This inquiry is used for other systems checking the status of a request and for generic inquiries.  Providers are expected to perform the same query-by-example inquiry even under the CMS exception.  This Implementation Guide does not specify a different way of searching for prior authorizations in the exception case.

Inquiries will happen as a result of manual invocation.  Although there are no constraints on the frequency of the query, clients **SHOULD** ensure that no repetitive inquiries do not happen so as not to stress payer systems.

The parameter to the inquiry operation is a [PAS Inquiry Request Bundle](StructureDefinition-profile-pas-inquiry-request-bundle.html) which has a [Claim Inquiry profile instance](StructureDefinition-profile-claim-inquiry.html) as well as any referenced resources.  The operation is a 'query-by-example' where the resource sent in provides an example of the data that is being searched for. The system uses the example to generate the query and find matching records. The exact rules for which elements are required and how those elements are used in the search are contained in the X12 278 Inquiry and Response guide.

In the base FHIR specification, the item.productOrService is mandatory. To conduct an inquiry that is not for a specific service, the 'not-applicable' code that is in the bound value set is sent. Intermediaries SHALL interpret the 'not-applicable' code as no product or service code.

NOTE: The inquiry operation must contain a requesting provider organization, a payer organization, and a patient for the inquiry.  The operation does not allow inquiries that do not identify a specific patient, such as an inquiry for all prior authorization requests submitted on a specific date.  The patient will be identified by their member identifier.  This identifier is a specific slice on the Patient resource that is identified with a type of 'MB'.  The identifier system will indicate the payer that the member identifier is associated with.  Providers will need correspond with payers to know what system to send.

The information in the Bundle is mapped to a 278 Health Care Services Review Information - Inquiry transaction (278i request).  The 278 Health Care Services Review Information - Response (278i response) is then mapped to a [PAS Inquiry Response Bundle](StructureDefinition-profile-pas-inquiry-response-bundle.html) with the results of the inquiry contained in the Bundle.

Notes:
* the returned ClaimResponse **SHALL** include the current results for all submitted items, including any items changed or canceled since the original authoriation request.  (See [Updating authorization requests](#updating-authorization-requests) below.)
* if a specific reference number (either the REF-NT or REF-BB) is submitted and is not the 'current' number (because subsequent additions/changes/cancellations have been made to the prior authorization request), the returned record **SHALL** be the current authorization response - even though it no longer has the same identifier.  I.e. If a search is for a 'replaced' prior authorization, the search result **SHALL** include the 'current' prior authorization response for the most recent replacing prior authorization request.
* systems **MAY** withhold information about prior authorizations that are 'open' but are deemed to be not relevant to the provider (eg. prior authorization requests for sensitive care where the requesting provider is neither the ordering nor rendering provider) who is checking for the prior authorization status if not searching by a specific Claim.identifier.  In such situations the response **SHOULD** include an OperationOutcome warning that some prior authorizations have been suppressed and provide an alternative mechanism (e.g. telephone number) to provide further information if needed.

#### Pended Authorization Responses
When the response indicates that an item is pended, it means that the payer requires additional time to make a final determination on all items within the prior authorization request.  In this situation, the client system will need to retrieve the prior authorization response at a later point once a final decision has been made.  To retrieve the response at a later point, implementers **SHALL** support subscriptions.  [Here](Bundle-ReferralPendingAuthorizationResponseBundleExample.html) is an example of a pended response.

Note: There are use-cases for multiple systems potentially needing to check on the status of a 'pended' prior authorization.  In addition to the provider who submitted the prior authorization request, the status might also be of interest to:

* the provider(s) who will be involved in delivering the service for which authorization was sought
* the patient
* the patient's caregivers
* other members of the patient's care team

As a result, queries seeking the status of the prior authorization response may come from multiple systems.  Servers **SHALL** permit access to the prior authorization response to systems other than the original submitter.  They **SHALL** require a match on the patient member or subscriber id (identifier on the Claim.patient) plus the ordering and/or rendering provider identifier, i.e. the provider's NPI.

{% raw %}
<blockquote class="stu-note">
<p>
We recognize that knowledge of the Patient member or subscriber identifier may not be sufficient access-control for subsequent queries.  We are looking for implementer feedback on this, in particular, on how to pass information through the X12 inquiry mechanism to the payer that helps attest to the 'right to know'.
</p>
</blockquote>
{% endraw %}


##### Subscription

Implementers **SHALL** support the R4 Subscriptions referenced in the [Subscriptions for R5 Backport Implementation Guide](http://hl7.org/fhir/uv/subscriptions-backport/).

There is no need for 'topic discovery' as there is only one topic of interest - [PAS Subscription Topic](SubscriptionTopic-PASSubscriptionTopic.html) - for this implementation guide.

When using the subscription retrieval mechanism, the Client will POST a new Subscription instance to the Server's [base]/Subscription endpoint.  This Subscription **SHALL** conform to the [PAS Subscription profile](StructureDefinition-profile-subscription.html).  The subscription is created at the level of the requesting provider organization and not at the level of each individual prior authorization request.  The Subscription filter criteria **SHALL** be org-identifier = [requesting provider organization id].  NOTE: The requesting provider organization id is included in the 2010B - NM109 X12 field or the FHIR Claim.provider.identifier.value field.  PAS Clients and Intermediaries **SHALL** support subscriptions with content='full-resource'.  Multiple criteria can be sent by listing them with the ',' as a separator, example: org-identifier=N123456,4543315.  Intermediaries **SHALL** ensure that subscriptions to monitor a particular organization's prior authorizations are only created or modified by that organization.

* Servers supporting subscriptions **SHALL** expose this as part of the Server's CapabilityStatement
* Servers **SHOULD** support rest-hook and **MAY** support websocket channels
* Additional information about creating subscriptions can be found [here]({{site.data.fhir.path}}subscription.html)

Once the [subscription](Subscription-PASSubscriptionExample.html) has been created, the Server **SHALL** send a notification over the requested channel indicating that a prior authorization response submitted by the requesting provider organization has changed.  This may happen when the response is complete, but may also occur when information on one or more of the items has been adjusted but the overall response remains as 'pended'.

Non-submitting systems are not able to subscribe for responses and will have to periodically query.

#### Checking Status
Systems other than the requesting system may choose not to subscribe to the prior authorization response but instead to check the status at the request of a user.  There are no retry limits for user-initiated status checks.

#### Updating Authorization Requests
In some cases, the needs associated with a prior authorization may change after the prior authorization request was submitted.  This might be a change to one of the services needed, the timeframe over which the service is provided, the quantity of the service or product, or even the elimination of the need for a given service.

Since submitting an update for a new authorization is frequently player/plan-specific, this IG recommends that an update is attempted first.  When details of a submitted request change and a provider needs to request prior authorization of a different set of items, clients SHOULD submit an update to the previously submitted Claim. Servers MAY reject updates and require that a new request is made by providing the appropriate X12 error code.  [Here](Bundle-RejectionResponseBundleExample.html) is an example of a rejected response to an update.

There are four types of changes possible:
* Canceling the entire prior authorization (including all contained items).  To cancel the entire authorization, a Claim-update instance can be sent with a certificationType code of 'Cancelled'.  No items are needed to be sent to cancel the entire authorization.
* Items within the request can be canceled.  Canceling an item means that the service is no longer required and no authorization is required.  Systems **SHALL** communicate a cancellation of an item if the corresponding order is canceled and a final authorization determination has not yet been received for that item.  The objective is to avoid expending resources reviewing requests that are no longer needed.  Items may also need to be canceled if a new item is being added that replaces them. (E.g. to avoid issues with a payer having concerns about duplicated therapy.)
* Certain elements can be revised within a previously submitted item.  Some examples of these elements are Claim.billablePeriod, Claim.item.serviced[x], Claim.item.quantity and Claim.item.net.  This may occur for claims that are pended or claims for which a final authorization decision has been made.  Typically this will be done if there's a need to extend the time-period and/or increase the quantity.  Other types of changes are accomplished by canceling an existing item and adding a new item.
* Additional items and/or supporting documentation can be added to the prior authorization request.  This is appropriate if the added items share the same context and should be evaluated in conjunction with the other items in the previously submitted authorization request.  It is also appropriate if the new supporting documentation helps provide justification for the request.

See the [Claim Update profile](StructureDefinition-profile-claim-update.html) for more information on how to create an update.

From an X12 perspective, only those items/attachments that are being added/cancelled/revised need to be present.  From an HL7 perspective, resources are generally represented as a cohesive whole, not a set of deltas from a previous resource.

To support the updating of a request, the following points need to be considered: 

* **All** items and supporting information is included in the Bundle - including items that have not changed at all.  Changed information is flagged as follows:
* Any items within the Claim that have been canceled (where the cancellation is at the item level, not at the whole prior authorization level) will be flagged with the [cancelled](StructureDefinition-modifierextension-infoCancelled.html) modifierExtension.  This indicates that the item is no longer actually part of the prior authorization request and is included only to distinguish it as 'canceled'.  Note that if an item was canceled previously, it will still have a 'canceled' modifier extension, even though the cancellation is not new.  The [Certification Type extension](StructureDefinition-extension-certificationType.html) with the appropriate code is used to indicate that each item previously requested is being canceled (using the code '3' - Cancel).
* All items and supportingInfo elements that have been added or changed (including flagging them as cancelled) must be marked with a [changed](StructureDefinition-extension-infoChanged.html) extension that indicates that the element was changed and what type of change has happened.  (Newly marking an item as canceled is considered a 'change'.)  Only the items that have changed in this submission will be marked with the 'changed' extension.  Elements that were previously added, modified or canceled will not be marked as changes unless they have been further changed in this version of the prior authorization.

The intermediary will create 278 and/or 275 submissions that instantiate the changes (by looking for those items and supportingInfo elements) and will ignore the unchanged items.

The benefit of this approach is that it is consistent with the way the prior authorization would need to be passed around if it is ever shared in a RESTful manner.  However, it can be bandwidth intensive if the prior authorization contains a large number of items, but only a small number of those have changed.

###### Updated Request Example
An example of a updated request can be found at [Updated Homecare Request](Bundle-HomecareAuthorizationUpdateBundleExample.html) along with the [original Homecare Request](Bundle-HomecareAuthorizationBundleExample.html).

#### Additional Notes
1. PAS systems **SHALL** ensure that prior authorizations that were initially pended remain available for query for at least 6 months after the anticipated completion of the services whose authorization was requested.

2. If the prior authorization response is a denial, it is not permitted to send an 'update' to the request. Instead, a new request must be initiated.

3. Note that data submitted by client systems will comply with US Core profiles, meaning that codes for medications, conditions, etc. will be those used for clinical purposes, not billing.  The intermediary will be responsible for performing any necessary mappings (e.g. SNOMED diagnosis codes to ICD10).

### Testing Requirements
It is the intent of this implementation guide to provide specifications for the exchange of prior authorization in a way that is conducive to developing test scripts and a reference implementation (RI) that can be used to validate/exercise the IG at connectathons and during piloting and production deployment. It is also the intent of this guide that any test scripts will include testing of: 

1. resources and profiles defined in this guide
2. artifacts used from referenced IGs such as DTR and CRD
3. testing of conformance to the underlying FHIR standards for the associated release (e.g. FHIR R4)


---

// File: input/pagecontent/usecases.md

### Current State
Prior authorization (PA) is a process used in the United States that requires providers to receive advanced approval from payers before care delivery to ensure that patients/members receive treatments, testing, referrals, and devices appropriate for their specific conditions and that are covered by the specific health plan in which the member is enrolled.

The PA process involves determining if a proposed treatment for a specific condition is covered by the current payer guidelines/standards. To do this, the provider may submit a request to the payer to determine if prior authorization is required before providing a specific treatment for a condition where that treatment is expected to be covered/paid by the payer.  The payer then responds to the provider with an indication that prior authorization is or is not required.

If authorization is required and documentation is necessary to substantiate the need for the service, the specific documentation is requested.  The documentation may take the form of attestations by the provider, diagnoses, results of specific diagnostic tests, prior treatment that has been tried and failed, specific studies that need to be performed and other specific documentation such as progress notes or discharge summaries.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="current.png" alt="Current HIPAA approach diagram"/>
  <figcaption>Figure 2.1 - Current HIPAA Approach</figcaption>
</figure>
{::options parse_block_html="true" /}

Currently, under HIPAA, providers and payers are required to use the 5010 version of the ASC X12 278 Health Care Services Review - Request and Response.  See further details on relevant HIPAA requirements [here](regulations.html).  While the X12 275, which is used to transmit additional documentation, is not currently mandated under HIPAA, it is considered reasonable and appropriate to use this X12 transaction to support the exchange of the additional information required for prior authorization.

However, adoption of X12 Authorization and Attachment transactions by EHR implementers has been low.  Surveys from CAQH and the AMA support this.   The [2022 CAQH Index survey](https://www.caqh.org/sites/default/files/2022-caqh-index-report%20FINAL%20SPREAD%20VERSION.pdf) indicated that ~28% of Prior Authorization transactions were fully automated X12 278.  The [2022 AMA Prior Authorization Survey](https://www.ama-assn.org/system/files/prior-authorization-survey.pdf) provides information around the burden that current Prior Authorization places on clinicians.

Clinicians and their office staff spend hours each week trying to verify coverage requirements for specific treatments, submitting prior authorization requests, following up on prior authorization requests, transmitting supporting documentation to support follow-up requests for information and then communicating the prior authorization final decision with the care team and the patient.  Mechanisms they utilize phone, fax, custom portals, but rarely automated data feeds. Automating even a few steps of the prior authorization process could make the work of healthcare team members across the country much easier.

Discussion with EHR implementers has suggested that a FHIR-based process for submitting prior authorization requests would have a significantly higher uptake.  As well, there is a desire by some payers to consume content in FHIR format.  This implementation guide attempts to do that while still retaining compliance with HIPAA requirements.

### Business Requirements
The objective of this implementation guide is to provide a vehicle for automation of a prior authorization request and response within the clinical workflow of the provider.  The IG uses the FHIR standard as the basis for assembling the information necessary to substantiate the need for a particular treatment, and to submit that information and the request for prior authorization to an intermediary end point.  That endpoint is responsible for ensuring that any HIPAA Transaction and Code Set requirements are met (see above). The response from the payer is intended to come back to that intermediary endpoint and be available to the provider's EHR solution using the FHIR  standard.  The goal is to provide real time prior authorization, where possible, in the provider's clinical workflow.  The X12 portion of the exchange happens in a 'black box' that the submitting system needs no visibility into.  This 'black box' is a service responsible for communication with a payer or their agent and handles any HIPAA requirements that may exist.  This service can be the provider's software, an external agent, a clearinghouse, or, if there is a HIPAA exception, the payer.  In the latter case, there may not be a requirement to convert into and out of X12 and the FHIR bundle will be exchanged directly with the payer.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="pas-architecture.png" alt="Diagram showing PAS participants and flows"/>
  <figcaption>Figure 2.2 - PAS Participants and Flows</figcaption>
</figure>
{::options parse_block_html="true" /}

Current industry payer leaders in automating prior authorization indicate that it is possible to achieve a real-time response to the PA request in up to 80% of prior authorizations.  In cases where real time prior authorization is not possible, the payer can provide an indication (PEND) in real-time that the response has been delayed for further review and the results will be delivered later.

Currently, the overwhelming majority of real-time responses to PA requests are 'pended'. This is, in a large part, due to the need for additional documentation.  By using a combination of the [Documentation Templates and Rules (DTR) Implementation Guide](http://hl7.org/fhir/us/davinci-dtr/) and this IG to provide the documentation with the PA request, we expect payers to enable real-time responses to significantly more PA requests.

This implementation guide also supports business requirements around the management of prior authorizations, including checking on the status of 'pended' authorization requests (by the ordering and/or performing providers), canceling previously submitted prior authorization requests and updating prior authorization requests to reflect changes in clinical need (e.g. changes to the requested quantity or time-period).

### Supported Use Cases
This version of the Implementation Guide does not support all of the use cases that the current X12 278 Prior Authorization Request supports.  The following list highlights the segments that are not currently mapped/supported by the FHIR profiles in this guide:

1.  Loop 2000E, Segment CRC
    a. Ambulance Certification
    b. Chiropractic Cerfication
    c. Durable Medical Equipment
    d. Oxygen Therapy Certification
    e. Functional Limitations
    f. Activities Permitted
    g. Mental Status
2. Loop 2000E, Segment CR1 - Ambulance Transport
3. Loop 2000E, Segment CR2 - Spinal Manipulation Service
4. Loop 2000E, Segment CR5 - Home Oxygen Therapy
5. Loop 2000E, Segment CR6 - Home Health Care
6. Loop 2010EB - Patient Event Transport
7. Loop 2000F, Segment SV3 - Dental Service

#### Patient Event vs Service Line Items
In FHIR, the Claim resource which is being used for Prior Authorization does not have the concept of patient events like the X12 278 request.  All services being requested are found in the Claim items.  This means that when a Prior Authorization is being created in FHIR, all of the services will be found in the Claim items.  The assumption that we have made in the guide is that the resulting transformed X12 278 request will have the services being requested detailed in the Service Event line level.


### Workflow
Within an EHR Client, the prior authorization request process should be capable of being invoked anywhere within the clinical and administrative workflow that is appropriate for that system. Generally, this will be part of any workflows where a provider has made the decision to pursue a specific course of treatment for which prior authorization might be required.  For example, ordering a specific treatment, diagnostic testing, non-clinical service, referral and or device.  As an alternative option, the [FHIR Orders Exchange Implementation Guide](http://hl7.org/fhir/us/dme-orders/2020Sep/) can be used to send information regarding the prior authorization to a performing provider.

#### Scope of Work Flow
In Scope

1. Prior authorization for services/devices performed/supplied by the ordering provider
2. Prior authorization for services/devices performed/supplied by a different provider where the ordering provider is required or permitted to request authorization for another entity to provide the services
3. Prior authorization for medications that are covered under a medical benefit
4. Prior authorization is required for the rendering provider

Out Of Scope

1. **SHOULD NOT** be used for any Medication that is covered under a pharmacy benefit where prior authorization is provided by another electronic exchange process (e.g. NCPDP SCRIPT)

#### Prior Authorization Process
The prior authorization process from the EHR side consists of five steps:

1. Determine whether prior authorization is required and if so, the documentation required by the payer to support the authorization
2. Gather information necessary to support the prior authorization request
3. Submit the request for prior authorization
4. Monitor the prior authorization request for resolution
5. If need be, supplement the prior authorization request with additional required information (and resume at step #4).  See [Updating Authorization Requests](specification.html#updating-authorization-requests) for when and how updates are made.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="pas-flow.png" alt="High-level PAS workflow"/>
  <figcaption>Figure 2.3 - High-level PAS Workflow</figcaption>
</figure>
{::options parse_block_html="true" /}

NOTE:

1. The intermediary **SHALL** always exchange a FHIR bundle with the EHR (figure 2.3)
2. The intermediary **SHALL** convert the FHIR bundle to and from an X12 278 (and optionally to an X12 275) if necessary to meet the HIPAA  transaction requirements
3. The intermediary is responsible for obtaining a status of the PA request from the Payer (may use the X12 278 Inquiry) when requested by the EHR
4. The intermediary **MAY** convert the X12 278 to and from a FHIR bundle and exchange it with a payer as long as the PA request and response are in an X12 278 format at some time between the exchange with the EHR  and the payer

#### Is Prior Authorization Required?
In some cases, the provider may know beforehand whether PA is required for a given service (either because of intimate familiarity with a given payer's requirements or because of broad consistency across payers).  However, in most cases, the need for prior authorization will be uncertain.  Ideally, initiation of prior authorization will occur as part of a workflow that includes verification of payer coverage and determination that prior authorization is required using the [Coverage Requirements Discovery (CRD)](http://www.hl7.org/fhir/us/davinci-crd) implementation guide.  As shown in the above diagram, this can be accomplished using [CDS Hooks](https://cds-hooks.hl7.org). The goal of the Burden Reduction IGs is to move from Telephone, FAX, Portal, and mail to electronic transaction defined by these three IGs.  We recognize it will take time for provider and payer to fully implement these IGs and that certain PAs may never be implemented due to complexity. However, the intent is to move as rapidly as possible to full support of these IGs by Payer, providers and any required intermediaries.  As well, government-regulated payers will have to implement this IG for all PAs.

#### Gather Prior Authorization Information
Again, in some cases, the provider may know exactly what information needs to be provided in a prior authorization request for a particular type of service from a given payer.  When this is not known, the vendor website or phone calls may help determine the required information, though this is sometimes an iterative process - certain information may trigger the need for additional information, which may then trigger the need for yet more information.  Historically, this process has been handled by submitting an initial prior authorization request and then responding to payer requests for additional detail through the submission of supplementary attachments.

However, with the [Documentation Templates and Rules (DTR)](http://www.hl7.org/fhir/us/davinci-dtr) implementation guide, the EHR can retrieve relevant payer documentation rules in computable form, as well as associated FHIR questionnaires to support the assembly of information for a prior authorization. The provider can use the resulting automated process to assemble the required documentation to support the prior authorization request.  As well, DTR enables the EHR system or a launched SMART on FHIR application to retrieve information from the patient's record that is necessary to support the prior authorization request.  DTR also allows prompting for information that can't be (automatically) found in the patient's clinical record and/or to allow the provider to attest that the information is present in the record without actually exchanging it.

As a result, with DTR, it is possible to minimize or eliminate the need for multiple back-and-forth 'supplemental documentation' exchanges and to maximize the likelihood that the submitted prior authorization supporting information is suitable for automated decision making.

Information gathered to support prior authorization is expected to be stored in the EHR in addition to being used as part of the prior authorization request process.  As well, EHRs **SHOULD** annotate their orders with the decisions contained in the PAS Response.  Guidance on how to annotate the orders is not included in this IG as it was determined to be EHR-specific.

Also see the section below on [supporting information](#supporting-information).

#### Submit Prior Authorization
Prior to sending clinical data as part of the PAS exchange, the provider (or their designated agent) **SHALL** have the ability, but not an obligation, to review patient information and where appropriate amend or withhold the submission to comply with current regulations and relevant provider policies.  The provider can choose to turn off the ability to review documentation. The vendor must allow them this option.

The prior authorization request will involve a FHIR operation, passing in a Bundle of FHIR resources that includes the authorizing request as well as any other necessary supporting information.  That operation will typically (for HIPAA reasons) be invoked on an intermediary that will translate the request into the corresponding X12 messages.  However, where there is no regulatory requirement for X12 use (e.g. if this specification is adopted in non-U.S. environments, for non-HIPAA-covered payers, or under a granted exception), the operation could potentially be invoked directly on the payer system.

The payer system is expected to immediately generate an automated response.  Ideally, this will represent a final decision on the prior authorization request.  However, in some cases, it may be necessary to submit textual documentation that will require semi-automated or manual review by the payer.  In these situations, the prior authorization response will have a status of 'pended' and will be pended by the payer.  In either event, if the response is provided via X12, the intermediary will convert the X12 back to FHIR and will return the result as the result of the synchronous operation.

#### Monitor for Resolution
In those situations where the prior authorization request is ‘pended’, the EHR must monitor for changes to the request until the results are finalized. This monitoring might be done by the system of the provider that submitted the request for prior authorization, and/or the system of the provider that is expected to actually perform the authorized procedure (e.g. the family physician system or the imaging center system).

A PAS Subscription has been created to allow systems to monitor for specific requests.  In response to a subscription notification indicating that the prior authorization has been changed, there is an inquiry operation that allows for returning information about prior authorization submissions.  This operation can also be used for generic inquiries about a prior submission.

There is also guidance on monitoring in the CDex IG: [Polling vs Subscriptions](http://build.fhir.org/ig/HL7/davinci-ecdx/task-based-approach.html#polling-vs-subscriptions)

### Supporting Information
To evaluate whether a given service will be covered, a payer may need to understand additional information about the patient.  There are three main categories of such information:

1.	Attestation by the provider as to the patient's need for a specific treatment or service.  In this case, there is no specific clinical data required.  Such attestations are generally collected as answers to questions as part of FHIR QuestionnaireResponses completed within the EHR or via a SMART on FHIR application.

2.	Structured clinical data that is available through the EHR's FHIR APIs. This might include laboratory results, scores or assessments, past medications or procedures represented using the appropriate US Core profiles.  Based on discussions with payers that currently provide real-time responses for prior authorization transactions, the combination of attestation and structured clinical data may result in far more real-time answers to PA requests.

3.	Information that is traditionally not structured, or where the review process is more involved and will not be performed in real time. In this use case, additional information may be in the form of progress notes, therapy notes, diagnostic reports, etc.  This information will be exchanged as text or images using the document reference.  Where such information is necessary, the initial request will typically be 'pended', with a final decision returned later once manual review is complete.  All exchanges should meet Federal and state regulations, including any HIPAA restrictions and restrictions on sensitive data.


---

// File: input/fsh/Bundle.fsh

Profile: PASRequestBundle
Parent: Bundle
Id: profile-pas-request-bundle
Title: "PAS Request Bundle"
Description: "PAS constraints on Bundle resource ensuring that a claim/claim update resource is present and that non-supported elements are not."
* identifier 1..1 MS
* identifier ^short = "Submitted Transaction Identifier - this number will be assigned by the originator or sender to identify the transaction within the sender's business application system"
* type = #collection
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS
* entry.resource 1..1 MS
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains Claim 1..2 MS
* entry[Claim].resource only PASClaimUpdate or PASClaim

Profile: PASInquiryRequestBundle
Parent: Bundle
Id: profile-pas-inquiry-request-bundle
Title: "PAS Inquiry Request Bundle"
Description: "PAS constraints on Bundle resource ensuring that a claim inquiry resource is present and that non-supported elements are not."
* identifier 1..1 MS
* type = #collection
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS
* entry.resource 1..1 MS
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains Claim 1..1 MS
* entry[Claim].resource MS
* entry[Claim].resource only PASClaimInquiry

Profile: PASResponseBundle
Parent: Bundle
Id: profile-pas-response-bundle
Title: "PAS Response Bundle"
Description: "PAS constraints on Bundle resource ensuring that a claim response resource is present and that non-supported elements are not."
* type = #collection (exactly)
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS
* entry.resource 1..1 MS
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains ClaimResponse 1..1 MS
* entry[ClaimResponse].resource MS
* entry[ClaimResponse].resource only PASClaimResponse

Profile: PASInquiryResponseBundle
Parent: Bundle
Id: profile-pas-inquiry-response-bundle
Title: "PAS Inquiry Response Bundle"
Description: "PAS constraints on Bundle resource ensuring that a claim inquiry response resource is present and that non-supported elements are not."
* type = #collection (exactly)
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS
* entry.resource 1..1 MS
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains ClaimResponse 0..* MS
* entry[ClaimResponse].resource MS
* entry[ClaimResponse].resource only PASClaimInquiryResponse


---

// File: input/fsh/Claim-update.fsh

Extension: CareTeamClaimScope
Id: extension-careTeamClaimScope
Description: "A flag that indicates whether the care team applies to the entire claim or a single item."
* value[x] only boolean
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "Claim.careTeam"

Extension: CertificationType
Id: extension-certificationType
Description: "A code representing the type of certification being requested (UM02)"
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000F/UM/1/02/00/1322 (required)
* valueCodeableConcept ^binding.description = "Codes indicating the type of certification. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"

Extension: LevelOfServiceCode
Id: extension-levelOfServiceCode
Description: "A code specifying the level of service being requested (UM06)"
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000E/UM/1/06/00/1338 (required)
* valueCodeableConcept ^binding.description = "Codes specifying the level of service rendered. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "Claim"

Extension: DiagnosisRecordedDate
Id: extension-diagnosisRecordedDate
Description: "The date that a diagnosis was recorded. (HIxx-4)"
* value[x] only date
* valueDate obeys FullDateRule
* ^context[+].type = #element
* ^context[=].expression = "Claim.diagnosis"

Extension: ItemTraceNumber
Id: extension-itemTraceNumber
Description: "Uniquely identifies this claim item. (2000F-TRN)"
* value[x] only PASIdentifier
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"

Extension: AuthorizationNumber
Id: extension-authorizationNumber
Description: "A string assigned by the UMO to an authorized review outcome associated with this service item."
* value[x] only string
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"

Extension: AdministrationReferenceNumber
Id: extension-administrationReferenceNumber
Description: "A string assigned by the UMO to the original disallowed review outcome associated with this service item."
* value[x] only string
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"

Extension: ServiceItemRequestType
Id: extension-serviceItemRequestType
Description: "A code that identifies the type of service being requested."
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000E/UM/1/01/00/1525 (required)
* valueCodeableConcept ^binding.description = "Codes indicating a type of request. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"

Extension: ProductOrServiceCodeEnd
Id: extension-productOrServiceCodeEnd
Description: "Used to provide the last code in a series of codes for the service being requested."
* value[x] only CodeableConcept
* valueCodeableConcept from X12278RequestedServiceType (required)
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse"

Extension: EPSDTIndicator
Id: extension-epsdtIndicator
Description: "An indicator of whether early and periodic screen for diagnosis and treatment of children is involved."
* value[x] only boolean
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"

Extension: NursingHomeResidentialStatus
Id: extension-nursingHomeResidentialStatus
Description: "A code specifying the status of a nursing home resident at the time of service. (SV209)"
* value[x] only CodeableConcept
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"
* ^context[+].type = #element
* ^context[=].expression = "Encounter"

Extension: NursingHomeLevelOfCare
Id: extension-nursingHomeLevelOfCare
Description: "A code specifying the level of care provided by a nursing home facility. (SV120, SV210)"
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000F/SV1/1/20/00/1337 (required)
* valueCodeableConcept ^binding.description = "Codes specifying the level of care provided by a nursing home facility. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse"

Extension: RevenueUnitRateLimit
Id: extension-revenueUnitRateLimit
Description: "The limit on the rate per unit of revenue for hospital accomodation. (SV206)"
* value[x] only decimal
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse"

Extension: RequestedService
Id: extension-requestedService
Description: "The details of the service being requested."
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"
* value[x] only Reference(PASMedicationRequest or PASServiceRequest or PASDeviceRequest or PASNutritionOrder)

Extension: ConditionCode
Id: extension-conditionCode
Description: "Information to supply various patient conditions."
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* extension contains category 1..1 and indicator 1..1 and code 1..*
* extension[category].value[x] only CodeableConcept
* extension[category].valueCodeableConcept from X12278ConditionCategory (required)
* extension[category] ^short = "Condition Code Category (CRC01)"
* extension[indicator] ^short = "Certification Condition Indicator (CRC02)"
* extension[indicator].value[x] only boolean
* extension[code].value[x] only CodeableConcept
* extension[code].valueCodeableConcept from X12278ConditionCode (required)
* extension[code] ^short = "Condition Code (CRC03)"

Extension: HomeHealthCareInformation
Id: extension-homeHealthCareInformation
Description: "Information needed for home health care requests."
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* extension contains prognosis 1..1 and date 1..1
* extension[prognosis].value[x] only CodeableConcept
* extension[prognosis].valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000E/CR6/1/01/00/923 (required)
* extension[prognosis] ^short = "Prognosis Code (CR601)"
* extension[date].value[x] only date
* extension[date].valueDate obeys FullDateRule
* extension[date] ^short = "Home Health Start Date"


Profile: PASClaimUpdate
Parent: PASClaimBase
Id: profile-claim-update
Title: "PAS Claim Update"
Description: """This profile defines constraints and extensions used when update a previously submitted Claim instance.

* The Claim instance of the update Bundle SHALL reference the updated Claim instance within the `Claim.related.claim` element. Note that the presence of this reference and the requirement that referenced instances be included in the submitted Bundle implies that the instance representing the prior version of the Claim SHALL be included in the update Bundle.
* The Claim instance of the update Bundle SHALL contain within the `Claim.item` element each item requested in the updated claim and any prior versions of the claim, including requested items that have been added, modified, deleted, or left unchanged during this or previous updates.
* The Claim instance of the update Bundle SHALL contain within the `Claim.supportingInfo` element each piece of supporting documentation submitted with the updated claim and any prior versions of claim, including supporting documentation that has been added, modified, deleted, or left unchanged during this or previous updates.
* Each `Claim.item` entry that represents an item no longer being requested, whether removed in this update or a previous one, SHALL be flagged using the infoCancelledFlag modifierExtension and SHALL have the code `3` (Cancel) in the Certification Type extension.
* Each `Claim.supportingInfo` entry that is no longer to be used when evaluating the request, whether removed in this update or a previous one, SHALL be flagged using the infoCancelledFlag modifierExtension.
* Each `Claim.item` and `Claim.supportingInfo` entry that has been changed as a part of this most recent update, including removal, SHALL be flagged using the changed extension with a value of `changed`.
* Each `Claim.item` and `Claim.supportingInfo` entry that has been added as a part of this most recent update, SHALL be flagged using the changed extension with a value of `added`.
"""
* insert CommonClaimElements
* extension contains CertificationType named certificationType 0..1 MS
* extension[certificationType] ^short = "A code representing the type of certification being requested (UM02)"

* supportingInfo.extension contains InfoChanged named infoChanged 0..1 MS
* supportingInfo.extension[infoChanged] ^short = "A code indicating how the piece of information has changed."
* supportingInfo.modifierExtension contains InfoCancelledFlag named infoCancelledFlag 0..1 MS
* supportingInfo.modifierExtension[infoCancelledFlag] ^short = "Indicates that this piece of information is not to be used."
* item.extension contains InfoChanged named infoChanged 0..1 MS
* item.extension[infoChanged] ^short = "A code indicating how the piece of information has changed."
* item.modifierExtension contains InfoCancelledFlag named infoCancelledFlag 0..1 MS
* item.modifierExtension[infoCancelledFlag] ^short = "Indicates that this piece of information is not to be used."
* related 1..1 MS
* related.relationship 1..1 MS
* related.relationship = http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship#prior
* related.claim 1..1 MS

//modified
Extension: InfoChanged
Id: extension-infoChanged
Description: "A code indicating how the piece of information has changed."
* value[x] only code
* valueCode from PASInformationChangeMode (required)
* ^context[+].type = #element
* ^context[=].expression = "Claim-update.item"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"

//modified
Extension: InfoCancelledFlag
Id: modifierextension-infoCancelled
Description: "A flag indicating whether the piece of information was cancelled."
* . ^isModifier = true
* . ^isModifierReason = "Indicates that this piece of information is not to be used."
* value[x] only boolean
* ^context[+].type = #element
* ^context[=].expression = "Claim-update.item"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"

Extension: CertificationIssueDate
Id: extension-itemCertificationIssueDate
Description: "The specific date or period within which this item's preauthorization was issued."
* value[x] only date or Period
* valueDate obeys FullDateRule
* valuePeriod.start obeys FullDateRule
* valuePeriod.end obeys FullDateRule
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"

Extension: CertificationExpirationDate
Id: extension-itemCertificationExpirationDate
Description: "The specific date or period within which this item's preauthorization expires."
* value[x] only date or Period
* valueDate obeys FullDateRule
* valuePeriod.start obeys FullDateRule
* valuePeriod.end obeys FullDateRule
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"

Extension: CertificationEffectiveDate
Id: extension-itemCertificationEffectiveDate
Description: "The specific date or period within which this item's preauthorization became effective."
* value[x] only date or Period
* valueDate obeys FullDateRule
* valuePeriod.start obeys FullDateRule
* valuePeriod.end obeys FullDateRule
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"

Invariant: FullDateRule
Description: "Dates need to be a full date - YYYY-MM-DD"
Expression: "$this.toString().length() = 10"
Severity: #error


---

// File: input/fsh/Claim.fsh

Profile: PASClaimBase
Parent: Claim
Id: profile-claim-base
Title: "PAS Claim Base"
Description: "PAS constraints on Claim resource that are common to both the request and the inquiry."
* ^abstract = true
* . ^short = "Preauthorization"
* extension contains LevelOfServiceCode named levelOfServiceType 0..1 MS and
	ConditionCode named conditionCode 0..* MS and
	HomeHealthCareInformation named homeHealthCareInformation 0..1 MS
* extension[levelOfServiceType] ^short = "A code specifying the level of service being requested (UM06)"
* extension[conditionCode] ^short = "Used to indicate condition codes for various requests for service."
* extension[homeHealthCareInformation] ^short = "Used to provide required information about home health care services. (CR6)"
* identifier MS
* identifier only PASIdentifier
* identifier ^short = "Business identifier for claim"
* identifier.system ^short = "SHOULD use a scheme of 'urn:trnorg:<TRN03>'"
* status MS
* status = #active
* use MS
* use = #preauthorization
* patient MS
* patient only Reference(PASBeneficiary)
* insurer 1..1 MS
* insurer only Reference(PASInsurer)
* provider MS
* provider only Reference(PASRequestor or PASPractitionerRole)
* careTeam MS
* careTeam.sequence MS
* careTeam.provider MS
* careTeam.provider only Reference(PASOrganization or PASPractitionerRole)
* careTeam.role MS
* careTeam.qualification MS
* careTeam ^slicing.discriminator.type = #value
* careTeam ^slicing.discriminator.path = "extension('http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-careTeamClaimScope').value.ofType(boolean)"
* careTeam ^slicing.rules = #open
* careTeam ^slicing.description = "Slice based on whether the care team member belongs to the overall claim or to an individual claim item."
* careTeam contains OverallClaimMember 0..* MS and ItemClaimMember 0..* MS
* careTeam[OverallClaimMember].extension contains CareTeamClaimScope named careTeamClaimScope 1..1 MS
* careTeam[OverallClaimMember].extension[careTeamClaimScope].valueBoolean MS
* careTeam[OverallClaimMember].extension[careTeamClaimScope].valueBoolean = true (exactly)
* careTeam[OverallClaimMember] ^short = "Care Team Providers that are applicable to all services being requested.  NOTE: Only the first 14 can be sent in the X12 Request."
* careTeam[OverallClaimMember] ^comment = "NOTE: Only the first 14 can be sent in the X12 Request."
* careTeam[ItemClaimMember] ^short = "Care Team Providers that are applicable to a specific item (as referenced by that item).  NOTE: Only the first 10 can be sent in the X12 Request."
* careTeam[ItemClaimMember] ^comment = "NOTE: Only the first 10 can be sent in the X12 Request."
* careTeam[ItemClaimMember].extension contains CareTeamClaimScope named careTeamClaimScope 1..1 MS
* careTeam[ItemClaimMember].extension[careTeamClaimScope].valueBoolean MS
* careTeam[ItemClaimMember].extension[careTeamClaimScope].valueBoolean = false (exactly)
* careTeam[OverallClaimMember].role MS
* careTeam[OverallClaimMember].role from https://valueset.x12.org/x217/005010/request/2010EA/NM1/1/01/00/98 (required)
* careTeam[OverallClaimMember].role  ^binding.description = "Codes identifying an organizational entity, a physical location, property or an individual. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* careTeam[OverallClaimMember].qualification MS
* careTeam[OverallClaimMember].qualification from https://valueset.x12.org/x217/005010/request/2010EA/PRV/1/03/00/127 (required)
* careTeam[OverallClaimMember].role  ^binding.description = "Codes identifying a provider specialty. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* careTeam[ItemClaimMember].role from https://valueset.x12.org/x217/005010/request/2010F/NM1/1/01/00/98 (required)
* careTeam[ItemClaimMember].role  ^binding.description = "Codes identifying an organizational entity, a physical location, property or an individual. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* careTeam[ItemClaimMember].qualification MS
* careTeam[ItemClaimMember].qualification from https://valueset.x12.org/x217/005010/request/2010F/PRV/1/03/00/127 (required)
* careTeam[ItemClaimMember].role  ^binding.description = "Codes identifying a provider specialty. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* careTeam.extension contains CareTeamClaimScope named careTeamClaimScope 1..1 MS
* supportingInfo MS
* supportingInfo.sequence MS
* supportingInfo.category MS
* supportingInfo.category from PASSupportingInfoType (extensible)
* diagnosis MS
* diagnosis.sequence MS
* diagnosis.diagnosis[x] MS
* diagnosis.diagnosis[x] only CodeableConcept
* diagnosis.diagnosisCodeableConcept from X12278DiagnosisCodes (required)
* diagnosis.type 0..1 MS
* diagnosis.type from X12278DiagnosisType (required)
* insurance MS
* insurance.sequence MS
* insurance.focal = true
* insurance.coverage MS
* insurance.coverage only Reference(PASCoverage)
* accident MS
* accident.date MS
* accident.date obeys FullDateRule
* accident.type MS
* accident.type from https://valueset.x12.org/x217/005010/request/2000E/UM/1/05/01/1362 (required)
* accident.type ^binding.description = "Codes identifying an accompanying cause of an illness, injury or an accident. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* accident.location[x] MS
* accident.location[x] only Address
* item MS
* item.extension contains ItemTraceNumber named itemTraceNumber 0..* MS and
	AuthorizationNumber named authorizationNumber 0..1 MS and
	AdministrationReferenceNumber named administrationReferenceNumber 0..1 MS and
	ServiceItemRequestType named requestType 0..1 MS and
	CertificationType named certificationType 0..1 MS and
	ProductOrServiceCodeEnd named productOrServiceCodeEnd 0..1 MS
* item.extension[itemTraceNumber] ^short = "Uniquely identifies this claim item. (2000F-TRN)"
* item.extension[authorizationNumber] ^short = "A string assigned by the UMO to an authorized review outcome associated with this service item."
* item.extension[administrationReferenceNumber] ^short = "A string assigned by the UMO to the original disallowed review outcome associated with this service item."
* item.extension[requestType] ^short = "A code that identifies the type of service being requested."
* item.extension[certificationType] ^short = "A code representing the type of certification being requested (UM02)"
* item.extension[productOrServiceCodeEnd] ^short = "Used to provide the last code in a series of codes for the service being requested."
* item.sequence MS
* item.careTeamSequence MS
* item.diagnosisSequence MS
* item.informationSequence MS
* item.revenue MS
* item.revenue from AHANUBCRevenueCodes (required)
* item.category MS
* item.category from https://valueset.x12.org/x217/005010/request/2000F/UM/1/03/00/1365 (required)
* item.category ^binding.description = "Codes identifying the classification of service. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* item.productOrService MS
* item.productOrService from X12278RequestedServiceType (required)
* item.modifier MS
* item.modifier from X12278RequestedServiceModifierType (required)
* item.serviced[x] MS
* item.servicedDate obeys FullDateRule
* item.servicedPeriod.start obeys FullDateRule
* item.servicedPeriod.end obeys FullDateRule
* item.location[x] MS
* item.location[x] only CodeableConcept
* item.locationCodeableConcept from X12278LocationType (required)
* item.quantity MS
* item.quantity only PASQuantity
* item.quantity ^comment = "For any exchange that must be converted to an X12 request, units SHALL be restricted to international units, days, units, minutes, hours, months, or visits."
* supportingInfo ^slicing.discriminator.type = #value
* supportingInfo ^slicing.discriminator.path = "category"
* supportingInfo ^slicing.rules = #open
* supportingInfo ^slicing.description = "Slice based on the different types of supporting information that can be included in a authorization request."
* supportingInfo contains PatientEvent 0..1 MS and AdmissionDates 0..1 MS and DischargeDates 0..1 MS

* supportingInfo[PatientEvent] ^short = "Information about the dates of the event that are being requested."
* supportingInfo[PatientEvent].category = PASTempCodes#patientEvent
* supportingInfo[PatientEvent].timing[x] 1..1 MS
* supportingInfo[PatientEvent].timingDate MS
* supportingInfo[PatientEvent].timingDate obeys FullDateRule
* supportingInfo[PatientEvent].timingPeriod MS
* supportingInfo[PatientEvent].timingPeriod.start MS
* supportingInfo[PatientEvent].timingPeriod.start obeys FullDateRule
* supportingInfo[PatientEvent].timingPeriod.end MS
* supportingInfo[PatientEvent].timingPeriod.end obeys FullDateRule
* supportingInfo[PatientEvent].value[x] 0..0

* supportingInfo[AdmissionDates] ^short = "Information about the admission dates of a hospital admission being requested."
* supportingInfo[AdmissionDates].category = PASTempCodes#admissionDates
* supportingInfo[AdmissionDates].timing[x] 1..1 MS
* supportingInfo[AdmissionDates].timingDate MS
* supportingInfo[AdmissionDates].timingDate obeys FullDateRule
* supportingInfo[AdmissionDates].timingPeriod MS
* supportingInfo[AdmissionDates].timingPeriod.start MS
* supportingInfo[AdmissionDates].timingPeriod.start obeys FullDateRule
* supportingInfo[AdmissionDates].timingPeriod.end MS
* supportingInfo[AdmissionDates].timingPeriod.end obeys FullDateRule
* supportingInfo[AdmissionDates].value[x] 0..0

* supportingInfo[DischargeDates] ^short = "Information about the discharge dates of a hospital admission being requested."
* supportingInfo[DischargeDates].category = PASTempCodes#dischargeDates
* supportingInfo[DischargeDates].timing[x] 1..1 MS
* supportingInfo[DischargeDates].timingDate MS
* supportingInfo[DischargeDates].timingDate obeys FullDateRule
* supportingInfo[DischargeDates].timingPeriod MS
* supportingInfo[DischargeDates].timingPeriod.start MS
* supportingInfo[DischargeDates].timingPeriod.start obeys FullDateRule
* supportingInfo[DischargeDates].timingPeriod.end MS
* supportingInfo[DischargeDates].timingPeriod.end obeys FullDateRule
* supportingInfo[DischargeDates].value[x] 0..0



Profile: PASClaim
Parent: PASClaimBase
Id: profile-claim
Title: "PAS Claim"
Description: "PAS constraints on Claim resource mandating support for elements relevant to the prior authorization request"
* insert CommonClaimElements
* related 0..0

RuleSet: CommonClaimElements
* . ^short = "Preauthorization"
* extension contains http://hl7.org/fhir/5.0/StructureDefinition/extension-Claim.encounter named encounter 0..1 MS
* extension[encounter] ^short = "Information about a hospital claim being requested."
* extension[encounter].valueReference only Reference(PASEncounter)
* identifier 1..2 MS
* diagnosis MS
* diagnosis.extension contains DiagnosisRecordedDate named recordedDate 0..1 MS
* diagnosis.extension[recordedDate] ^short = "The date that a diagnosis was recorded. (HIxx-4)"
* item 1..* MS
* item.extension contains 
	EPSDTIndicator named epsdtIndicator 0..1 MS and
	NursingHomeResidentialStatus named nursingHomeResidentialStatus 0..1 MS and
	NursingHomeLevelOfCare named nursingHomeLevelOfCare 0..1 MS and
	RevenueUnitRateLimit named revenueUnitRateLimit 0..1 MS and
	RequestedService named requestedService 0..1 MS
* item.extension[requestType] 1..1
* item.extension[certificationType] 1..1
* diagnosis ^short = "Pertinent diagnosis information.  NOTE: Only the first 12 diagnoses can be sent in the X12 request."
* item.extension[nursingHomeResidentialStatus].valueCodeableConcept MS
* item.extension[nursingHomeResidentialStatus].valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000F/SV2/1/09/00/1345 (required)
* item.extension[nursingHomeResidentialStatus].valueCodeableConcept  ^binding.description = "Codes specifying the status of a nursing home resident at the time of service. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* item.extension[epsdtIndicator] ^short = "An indicator of whether early and periodic screen for diagnosis and treatment of children is involved."
* item.extension[nursingHomeResidentialStatus] ^short = "A code specifying the status of a nursing home resident at the time of service. (SV209)"
* item.extension[nursingHomeLevelOfCare] ^short = "A code specifying the level of care provided by a nursing home facility. (SV120, SV210)"
* item.extension[revenueUnitRateLimit] ^short = "The limit on the rate per unit of revenue for hospital accomodation. (SV206)"
* item.extension[requestedService] ^short = "The details of the service being requested."
* item.category 1..1 MS
* item.category ^short = "Since PAS requests only have item-level information, a category is required for conformance with the X12 278 request."
* item.unitPrice MS
* item.location[x] 1..1
* item obeys ImmediateLevelOfCare

* supportingInfo contains AdditionalInformation 0..* MS and MessageText 0..* MS

* supportingInfo[AdditionalInformation] ^short = "Send additional paperwork or supporting information for the request.  This can be most commonly a DocumentReference profile although any type of information is allowed."
* supportingInfo[AdditionalInformation].category = PASTempCodes#additionalInformation
* supportingInfo[AdditionalInformation].timing[x] 0..0
* supportingInfo[AdditionalInformation].value[x] 1..1 MS
* supportingInfo[AdditionalInformation].value[x] only Reference($USCoreDocumentReference or $USCoreQuestionnaireResponse or Resource)
* supportingInfo[AdditionalInformation].value[x] ^comment = "Although we allow of any type of information to be sent, when sending reference to documents, the US-Core DocumentReference profile should be used."

* supportingInfo[MessageText] ^short = "Send text messages to the UMO."
* supportingInfo[MessageText].category = PASTempCodes#freeFormMessage
* supportingInfo[MessageText].timing[x] 0..0
* supportingInfo[MessageText].value[x] 1..1 MS
* supportingInfo[MessageText].value[x] only string

Invariant: ImmediateLevelOfCare
Description: "If Certification Type is an immediate appeal, then Level of Service Code must be present"
Expression: "extension.where(url='http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-certificationType' and value.code='1').exists() implies extension.where(url='http://hl7.org/fhir/us/davinci-pas/StructureDefinition/extension-levelOfServiceCode').exists()"
Severity: #error

Profile: PASClaimInquiry
Parent: PASClaimBase
Id: profile-claim-inquiry
Title: "PAS Claim Inquiry"
Description: "PAS constraints on Claim resource when submitting an inquiry for existing authorizations."
* . ^short = "Query for Preauthorizations"
* extension contains CertificationType named certificationType 0..1 MS
* extension[certificationType] ^short = "A code representing the type of certification being requested (UM02)"
* identifier 1..1 MS
* provider ^short = "This is the submitter of the inquiry."
* billablePeriod MS
* diagnosis ^comment = "When multiple diagnoses are sent, the intermediary will need to convert the single inquiry into multiple X12 278 inquiries - one for each diagnosis code - and then make the union of the returned Prior Authorization responses."
* item.extension contains 
	CertificationIssueDate named certIssueDate 0..1 MS and
	CertificationExpirationDate named certExpirationDate 0..1 MS and
	CertificationEffectiveDate named certEffectiveDate 0..1 MS and
	ReviewActionCode named reviewActionCode 0..1 MS
* item.extension[certIssueDate] ^short = "The specific date or period within when which item's preauthorization was issued."
* item.extension[certExpirationDate] ^short = "The specific date or period within which this item's preauthorization expires."
* item.extension[certEffectiveDate] ^short = "The specific date or period within which this item's preauthorization became effective."
* item.extension[reviewActionCode] ^short = "The code describing the result of the review."



---

// File: input/fsh/ClaimOperation.fsh

Instance: ClaimSubmitOperation
InstanceOf: OperationDefinition
Description: "This operation is used to submit a PreAuthorization Claim Request for adjudication as a Bundle containing the PASClaimRequest and other referenced resources for processing. The only input parameter is the single Bundle resource with a PASClaimRequest instance (along with other referenced resources) and the only output is a single Bundle with a PASClaimResponse (and other referenced resources) or an OperationOutcome resource.  This is a variant of the FHIR Core Claim $submit operation."
Usage: #definition

* id = "Claim-submit"
* url = "http://hl7.org/fhir/us/davinci-pas/OperationDefinition/Claim-submit"
* name = "ClaimSubmit"
* title = "Submit a Prior Authorization Request for adjudication"
* status = #draft
* kind = #operation
* description = "This operation is used to submit a PreAuthorization Claim Request for adjudication as a Bundle containing the PASClaimRequest and other referenced resources for processing. The only input parameter is the single Bundle resource with a PASClaimRequest instance (along with other referenced resources) and the only output is a single Bundle with a PASClaimResponse (and other referenced resources) or an OperationOutcome resource.  This is a variant of the FHIR Core Claim $submit operation."
* code = #submit
* base = "http://hl7.org/fhir/OperationDefinition/Claim-submit"
* resource = #Claim
* system = false
* type = true
* instance = false
* inputProfile = Canonical(PASRequestBundle)
* outputProfile = Canonical(PASResponseBundle)
* parameter[0].name = #resource
* parameter[0].use = #in
* parameter[0].min = 1
* parameter[0].max = "1"
* parameter[0].documentation = "A Bundle containing a single Claim plus referenced resources."
* parameter[0].type = #Bundle
* parameter[1].name = #return
* parameter[1].use = #out
* parameter[1].min = 1
* parameter[1].max = "1"
* parameter[1].documentation = "A Bundle containing a single ClaimResponse plus referenced resources."
* parameter[1].type = #Bundle

Instance: ClaimInquiryOperation
InstanceOf: OperationDefinition
Description: "This operation is used to make a search for a Prior Authorization Response by example for a previously-submitted PreAuthorization.  This Prior Authorization $inquire operation is a query-by-example that follows the X12 278 Inquiry rules.  The only input parameter is the single Bundle resource with a PASClaimInquiry instance (along with other referenced resources) and the only output is a single Bundle with zero-to-many PASClaimInquiryResponses (and other referenced resources) or an OperationOutcome resource."
Usage: #definition

* id = "Claim-inquiry"
* url = "http://hl7.org/fhir/us/davinci-pas/OperationDefinition/Claim-inquiry"
* name = "ClaimInquiry"
* title = "Search for a Prior Authorization Response by example"
* status = #draft
* kind = #operation
* description = "This operation is used to make a search for a Prior Authorization Response by example.  This Prior Authorization $inquire operation is a query-by-example that follows the X12 278 Inquiry rules.  The only input parameter is the single Bundle resource with a PASClaimInquiry instance (along with other referenced resources) and the only output is a single Bundle with zero-to-many PASClaimInquiryResponses (and other referenced resources) or an OperationOutcome resource."
* code = #inquire
* base = "http://hl7.org/fhir/OperationDefinition/Claim-submit"
* resource = #Claim
* system = false
* type = true
* instance = false
* inputProfile = Canonical(PASInquiryRequestBundle)
* outputProfile = Canonical(PASInquiryResponseBundle)
* parameter[0].name = #resource
* parameter[0].use = #in
* parameter[0].min = 1
* parameter[0].max = "1"
* parameter[0].documentation = "A Bundle containing a single ClaimInquiry plus referenced resources."
* parameter[0].type = #Bundle
* parameter[1].name = #return
* parameter[1].use = #out
* parameter[1].min = 1
* parameter[1].max = "1"
* parameter[1].documentation = "A Bundle containing a single ClaimInquiryResponse plus referenced resources."
* parameter[1].type = #Bundle

Profile: PASSubscription
Parent: Subscription
Id: profile-subscription
Title: "PAS Subscription"
Description: "The profile for PAS subscription."
* criteria = "http://hl7.org/fhir/us/davinci-pas/SubscriptionTopic/PASSubscriptionTopic"
* criteria.extension contains http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-filter-criteria named filterCriteria 1..1 MS
* status = #active
* channel.type = #rest-hook
* channel.payload.extension contains http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-payload-content named payloadContent 1..1 MS
* channel.payload.extension[payloadContent].valueCode = #full-resource


Instance: EHRCapabilities
InstanceOf: CapabilityStatement
Title: "EHR PAS Capabilities"
Description: "Capabilities required for an EHR participating in a PAS Exchange."
Usage: #definition
* url = Canonical(EHRCapabilities)
* name = "PASEHR"
* status = #active
* experimental = false
* date = "2023-08-08"
* description = "Capabilities required for an EHR participating in a PAS Exchange."
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #json
* format[1] = #xml
* rest
  * mode = #client
  * resource[0]
    * type = #Claim
    * operation[0]
      * name = "PAS Claim Request"
      * definition = Canonical(ClaimSubmitOperation)
    * operation[1]
      * name = "PAS Claim Inquiry"
      * definition = Canonical(ClaimInquiryOperation)
  * resource[1]
    * extension[0]
      * url = "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/capabilitystatement-subscriptiontopic-canonical"
      * valueCanonical = "http://hl7.org/fhir/us/davinci-pas/SubscriptionTopic/PASSubscriptionTopic"
    * type = #Subscription
    * interaction[0]
      * code = #create
    * interaction[1]
      * code = #update
    * interaction[2]
      * code = #delete
	

Instance: IntermediaryCapabilities
InstanceOf: CapabilityStatement
Title: "Intermediary PAS Capabilities"
Description: "Capabilities required for an Intermediary participating in a PAS Exchange."
Usage: #definition
* url = Canonical(IntermediaryCapabilities)
* name = "PASIntermediary"
* status = #active
* experimental = false
* date = "2023-08-08"
* description = "Capabilities required for an Intermediary participating in a PAS Exchange."
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #json
* format[1] = #xml
* rest
  * mode = #server
  * resource[0]
    * type = #Claim
    * operation[0]
      * name = "PAS Claim Request"
      * definition = Canonical(ClaimSubmitOperation)
    * operation[1]
      * name = "PAS Claim Inquiry"
      * definition = Canonical(ClaimInquiryOperation)
  * resource[1]
    * extension[0]
      * url = "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/capabilitystatement-subscriptiontopic-canonical"
      * valueCanonical = "http://hl7.org/fhir/us/davinci-pas/SubscriptionTopic/PASSubscriptionTopic"
    * type = #Subscription
    * interaction[0]
      * code = #create
    * interaction[1]
      * code = #update
    * interaction[2]
      * code = #delete

	

---

// File: input/fsh/ClaimResponse.fsh

Profile: PASClaimResponseBase
Parent: ClaimResponse
Id: profile-claimresponse-base
Title: "PAS Claim Response Base"
Description: "PAS constraints on ClaimResponse resource that are common to both the request and the inquiry."
* ^abstract = true
* . ^short = "Response to a preauthorization"
* identifier MS
* identifier only PASIdentifier
* identifier.system ^short = "Should use a scheme of 'urn:trnorg:<TRN03>'"
* status MS
* status = #active
* use = #preauthorization
* patient MS
* patient only Reference(PASBeneficiary)
* created MS
* insurer MS
* insurer only Reference(PASInsurer)
* requestor MS
* requestor only Reference(PASRequestor or PASPractitionerRole)
* request 1..1 MS
* request only Reference(PASClaim)
* outcome MS
* preAuthPeriod MS
* item MS
* item.extension contains ItemTraceNumber named itemTraceNumber 0..* MS and
	ItemPreAuthIssueDate named preAuthIssueDate 0..1 MS and
	ItemPreAuthPeriod named preAuthPeriod 0..1 MS and
	AuthorizationNumber named previousAuthorizationNumber 0..1 MS and
	AdministrationReferenceNumber named administrationReferenceNumber 0..1 MS and
	ItemRequestedServiceDate named requestedServiceDate 0..1 MS and
	ItemAuthorizedProvider named authorizedProvider 0..* MS and
	ItemAuthorizedDetail named authorizedItemDetail 0..1 MS
* item.extension[itemTraceNumber] ^short = "Uniquely identifies this claim item. (2000F-TRN)"
* item.extension[preAuthIssueDate] ^short = "The date when this item's preauthorization was issued."
* item.extension[preAuthPeriod] ^short = "The date/period when this item's preauthorization is valid."
* item.extension[previousAuthorizationNumber] ^short = "A string assigned by the UMO to an authorized review outcome associated with this service item."
* item.extension[administrationReferenceNumber] ^short = "A string assigned by the UMO to the original disallowed review outcome associated with this service item."
* item.extension[requestedServiceDate] ^short = "The original date/period that was requested by the submitter for this item."
* item.extension[authorizedItemDetail] ^short = "The details of what has been authorized for this item."
* item.extension[authorizedProvider] ^short = "The specific provider who has been authorized to provide this item."
* item.itemSequence MS
* item.adjudication MS
* item.adjudication.extension contains ReviewAction named reviewAction 0..1 MS
* item.adjudication.extension[reviewAction] ^short = "The details of the review action that is necessary for the authorization."
* item.adjudication.category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* item.adjudication.category ^short = "This code is fixed to 'submitted' to indicate that the adjudication result is on what was submitted."
* addItem MS
  * extension contains ItemTraceNumber named itemTraceNumber 0..* MS and
    ItemPreAuthIssueDate named preAuthIssueDate 0..1 MS and
    ItemPreAuthPeriod named preAuthPeriod 0..1 MS and
    AuthorizationNumber named previousAuthorizationNumber 0..1 MS and
    AdministrationReferenceNumber named administrationReferenceNumber 0..1 MS and
    EPSDTIndicator named epsdtIndicator 0..1 MS and
    NursingHomeResidentialStatus named nursingHomeResidentialStatus 0..1 MS and
    NursingHomeLevelOfCare named nursingHomeLevelOfCare 0..1 MS and
    ProductOrServiceCodeEnd named productOrServiceCodeEnd 0..1 MS and
    RevenueCode named revenue 0..1 MS and
    RevenueUnitRateLimit named revenueUnitRateLimit 0..1 MS and
    RequestedService named requestedService 0..1 MS
  * itemSequence 1..1 MS
  * provider MS
  * provider only Reference(PASPractitioner or PASOrganization)
    * extension contains AuthorizedProviderType named providerType 0..1 MS
  * productOrService MS
  * productOrService from X12278RequestedServiceType (required)
  * modifier MS
  * modifier from X12278RequestedServiceModifierType (required)
  * serviced[x] MS
  * location[x] MS
  * quantity MS
  * quantity only PASQuantity
  * unitPrice MS
  * adjudication MS
  * adjudication.extension contains ReviewAction named reviewAction 0..1 MS
  * adjudication.extension[reviewAction] ^short = "The details of the review action that is necessary for the authorization."
  * adjudication.category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
  * adjudication.category ^short = "This code is fixed to 'submitted' to indicate that the adjudication result is on what was submitted."
* adjudication MS
* adjudication.extension contains ReviewAction named reviewAction 0..1 MS
* adjudication.extension[reviewAction] ^short = "The details of the review action that is necessary for the authorization."
* adjudication.category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* adjudication.category ^short = "This code is fixed to 'submitted' to indicate that the adjudication result is on what was submitted."

* error MS
* error.extension contains ErrorFollowupAction named followupAction 0..1 MS and ErrorElement named errorElement 0..1 MS and ErrorPath named errorPath 0..1 MS
* error.extension[followupAction] ^short = "A code representing what action must occur to resolve this error."
* error.extension[errorElement] ^short = "The specific X12 loop, segment, or element that this error information is about."
* error.extension[errorPath] ^short = "The FHIRPath expression that indicates which FHIR element that this error information is about."
* error.code MS
* error.code from X12278RejectReasonCodes (required)

Profile: PASClaimResponse
Parent: PASClaimResponseBase
Id: profile-claimresponse
Title: "PAS Claim Response"
Description: "PAS constraints on Claim resource mandating support for elements relevant to the response of a prior authorization request"
* . ^short = "Response to a preauthorization"
* item.extension contains CommunicatedDiagnosis named communicatedDiagnosis 0..* MS
* item.extension[communicatedDiagnosis] ^short = "A code representing the diagnosis that is relevant to the preauthorization."
* item.noteNumber MS
* communicationRequest MS
* communicationRequest only Reference(PASCommunicationRequest)
* processNote MS
* processNote.number 1..1 MS
* processNote.text MS

Extension: ReviewAction
Id: extension-reviewAction
Description: "The details of the review action that is necessary for the authorization."
* extension contains ReviewActionCode named code 0..1 and number 0..1 and reasonCode 0..* and secondSurgicalOpinionFlag 0..1
* extension[code] ^short = "Healthcare Services Outcome"
* extension[number].value[x] only string
* extension[number] ^short = "Item Level Review Number"
* extension[reasonCode].value[x] only CodeableConcept
* extension[reasonCode].valueCodeableConcept from X12278ReviewDecisionReasonCode (required)
* extension[reasonCode] ^short = "Certification Action Code: indicates the reason for the approved, denied, or pended services"
* extension[secondSurgicalOpinionFlag].value[x] only boolean
* extension[secondSurgicalOpinionFlag] ^short = "Whether a second surgical opinion is need for approval"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.adjudication"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item.adjudication"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem.adjudication"

Extension: ReviewActionCode
Id: extension-reviewActionCode
Description: "The code describing the result of the review."
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/response/2000F/HCR/1/01/00/306 (required)
* valueCodeableConcept ^binding.description = "Codes indicating type of action. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem.adjudication.extension"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item.adjudication.extension"
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"

Extension: ItemPreAuthIssueDate
Id: extension-itemPreAuthIssueDate
Description: "The date when this item's preauthorization was issued."
* value[x] only date
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"

Extension: ItemRequestedServiceDate
Id: extension-itemRequestedServiceDate
Description: "The original date/period that was requested by the submitter for this item."
* value[x] only dateTime or Period
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"

Extension: ItemPreAuthPeriod
Id: extension-itemPreAuthPeriod
Description: "The date/period when this item's preauthorization is valid."
* value[x] only Period
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"

Extension: RevenueCode
Id: extension-revenueCode
Description: "A revenue code that expresses what was approved which maps to X12 SV201"
* value[x] only CodeableConcept
* valueCodeableConcept from AHANUBCRevenueCodes (required)
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem"

Extension: ErrorElement
Id: extension-errorElement
Description: "The specific loop, segment, or element that this error information is about.  The string will follow the X12 format for specifying elements and is returned from the Payer.  Example: 2010A-NM103"
* value[x] only string
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.error"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.error"

Extension: ErrorPath
Id: extension-errorPath
Description: """The [FHIRPath](https://www.hl7.org/fhirpath/) expression that indicates which FHIR element that this error information is about.  The expression will start with the Bundle and can be followed to determine the specific element.

STU NOTE: We would like feedback during the STU period on whether this extension is sufficient for implementers to determine and display the errored element.

Examples: Bundle.entry[1].resource.name, Bundle.entry[0].resource.identifier[0].value
"""
* value[x] only string
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.error"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.error"

Extension: ErrorFollowupAction
Id: extension-errorFollowupAction
Description: "A code representing what action must occur to resolve this error."
* value[x] only CodeableConcept
* valueCodeableConcept from X12278FollowUpActionCodes (required)
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.error"

Extension: ItemAuthorizedDetail
Id: extension-itemAuthorizedDetail
Description: "The details of what has been authorized for this item."
* extension contains productOrServiceCode 0..1 and ProductOrServiceCodeEnd named productOrServiceCodeEnd 0..1 and modifier 0..* and unitPrice 0..1 and quantity 0..1 and EPSDTIndicator named epsdtIndicator 0..1 and NursingHomeLevelOfCare named nursingHomeLevelOfCare 0..1 and RevenueCode named revenue 0..1 and RevenueUnitRateLimit named revenueUnitRateLimit 0..1 and RequestedService named authorizedService 0..1
* extension[productOrServiceCode].value[x] only CodeableConcept
* extension[productOrServiceCode].valueCodeableConcept from X12278RequestedServiceType (required)
* extension[modifier].value[x] only CodeableConcept
* extension[modifier].valueCodeableConcept from X12278RequestedServiceModifierType (required)
* extension[unitPrice].value[x] only Money
* extension[quantity].value[x] only PASQuantity
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item"

Extension: AuthorizedProviderType
Id: extension-authorizedProviderType
Description: "The type of provider who has been authorized to provide this item."
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/response/2010EA/NM1/1/01/00/98 (required)
* valueCodeableConcept ^binding.description = "Code identifying an organization entity, a physical location, property or an individual. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.addItem.provider"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item.extension"

Extension: ItemAuthorizedProvider
Id: extension-itemAuthorizedProvider
Description: "The specific provider who has been authorized to provide this item."
* extension contains provider 0..1 and AuthorizedProviderType named providerType 0..1
* extension[provider].value[x] only Reference(PASPractitioner or PASOrganization)
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "ClaimResponse.item"

Profile: PASClaimInquiryResponse
Parent: PASClaimResponseBase
Id: profile-claiminquiryresponse
Title: "PAS Claim Inquiry Response"
Description: "PAS constraints on Claim resource mandating support for elements relevant to the response of an inquiry for details of previous authorizations."
* . ^short = "Response to a preauthorization query"
* item.extension contains CommunicatedDiagnosis named communicatedDiagnosis 0..1 MS
* item.extension[communicatedDiagnosis] ^short = "A code representing the diagnosis that is relevant to the preauthorization."


---

// File: input/fsh/CommunicationRequest.fsh

Profile: PASCommunicationRequest
Parent: CommunicationRequest
Id: profile-communicationrequest
Title: "PAS CommunicationRequest"
Description: "PAS constraints on CommunicationRequest resource mandating support for elements relevant to the prior authorization response"
* identifier MS
* identifier ^short = "Unique Identifier used in linking the Communication Request to the response (X12's Attachment Control Number)."
* status = #active (exactly)
* category MS
* category from https://valueset.x12.org/x217/005010/response/2000D/PWK/1/01/00/755 (required)
* category  ^binding.description = "Codes indicating the title or contents of a document, report or supporting item. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* medium MS
* medium from PASCommunicationRequestMedium (extensible)
* payload MS
* payload.extension contains ServiceLineNumber named serviceLineNumber 0..1 MS and CommunicatedDiagnosis named communicatedDiagnosis 0..* MS and ContentModifier named contentModifier 0..* MS
* payload.content[x] MS
* payload.content[x] only string
* requester MS
* requester only Reference(PASInsurer)
* recipient MS
* recipient only Reference(PASPractitioner or PASOrganization)
* sender MS
* sender only Reference(PASRequestor)

Extension: CommunicatedDiagnosis
Id: extension-communicatedDiagnosis
Description: "A code representing the diagnosis that is the subject of the communication"
* value[x] only CodeableConcept
* valueCodeableConcept from X12278DiagnosisCodes (required)
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "CommunicationRequest.payload"
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"

Extension: ContentModifier
Id: extension-contentModifier
Description: "A code representing a modifier of the content being requested"
* value[x] only CodeableConcept
* valueCodeableConcept from X12278DiagnosisInformationType (required)
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.payload"
* ^context[+].type = #element
* ^context[=].expression = "CommunicationRequest.payload"

Extension: ServiceLineNumber
Id: extension-serviceLineNumber
Description: "A number that links the content being requested with the claim item number."
* value[x] only positiveInt
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.payload"
* ^context[+].type = #element
* ^context[=].expression = "CommunicationRequest.payload"

---

// File: input/fsh/Coverage.fsh

Profile: PASCoverage
Parent: $USCoreCoverage
Id: profile-coverage
Title: "PAS Coverage"
Description: "PAS constraints on Coverage resource mandating support for insurance elements relevant to the prior authorization request"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-coverage|6.1.0"
* obeys self-beneficiary
* identifier MS
* status MS
* status = #active
* subscriber MS
* subscriber only Reference(PASSubscriber)
* subscriberId MS
* beneficiary MS
* beneficiary only Reference(PASBeneficiary)
* relationship MS
* relationship.coding ^slicing.discriminator.type = #value
* relationship.coding ^slicing.discriminator.path = "$this"
* relationship.coding ^slicing.rules = #open
* relationship.coding ^slicing.description = "Send an X12 code along with the FHIR code."
* relationship.coding contains X12Code 0..1 MS
* relationship.coding[X12Code] from https://valueset.x12.org/x217/005010/request/2000D/INS/1/02/00/1069 (required)
* relationship.coding[X12Code]  ^binding.description = "Codes indicating the relationship between two individuals or entities. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* payor MS
* payor only Reference(PASInsurer)


Invariant: self-beneficiary
Description: "If relationship does not equal 'self', then subscriber SHALL be present."
Expression: "$this.relationship.coding.where(code='18').count() = 0 implies $this.subscriber.exists()"
Severity: #error


---

// File: input/fsh/Encounter.fsh

Profile: PASEncounter
Parent: $USCoreEncounter
Id: profile-encounter
Title: "PAS Encounter"
Description: "PAS constraints on the Encounter resource mandating support for elements relevant to details of a requested institutional stay on the prior authorization request"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter|3.1.1"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter|6.1.0"


* extension contains PatientStatus named patientStatus 0..1 MS and
	NursingHomeResidentialStatus named nursingHomeResidentialStatus 0..1 MS
* extension[nursingHomeResidentialStatus].valueCodeableConcept MS
* extension[nursingHomeResidentialStatus].valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000E/CL1/1/04/00/1345 (required)
* extension[nursingHomeResidentialStatus].valueCodeableConcept  ^binding.description = "Codes specifying the status of a nursing home resident at the time of service. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* status MS
* status = #planned (exactly)
* type MS
* type from https://valueset.x12.org/x217/005010/request/2000E/CL1/1/01/00/1315 (required)
* type ^binding.description = "Codes indicating the priority of this admission. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* subject MS
* subject only Reference(PASBeneficiary)
* hospitalization.admitSource MS
* hospitalization.admitSource from https://valueset.x12.org/x217/005010/request/2000E/CL1/1/02/00/1314 (required)
* hospitalization.admitSource ^binding.description = "Codes indicating the source of this admission. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* location.location MS
* location.location only Reference($USCoreLocation)

Extension: PatientStatus
Id: extension-patientStatus
Description: "A code representing the status of the patient when being admitted"
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000E/CL1/1/03/00/1352 (required)
* valueCodeableConcept ^binding.description = "Codes indicating patient status as of the 'statement covers through date'.  These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "Examples"
* ^context[+].type = #element
* ^context[=].expression = "Encounter"


---

// File: input/fsh/Identifier.fsh

Profile: PASIdentifier
Parent: Identifier
Id: profile-identifier
Title: "PAS Identifier"
Description: "Constraints and extensions on Identifier allowing for a common datatype across all resource profiles."
* extension contains IdentifierSubDepartment named subDepartment 0..1 MS and IdentifierJurisdiction named jurisdiction 0..1 MS
* system 1..1 MS
* value 1..1 MS

Extension: IdentifierSubDepartment
Id: extension-identifierSubDepartment
Description: "An additional element that provides a further subdivision within the organization granting the identifier."
* value[x] only string
* ^context[+].type = #element
* ^context[=].expression = "Identifier"

Extension: IdentifierJurisdiction
Id: extension-identifierJurisdiction
Description: "An additional element that provides the assigning jurisdiction of the identifier (i.e. provider state license number or state driver's license) so that it does not need to be mapped from the identifier system."
* value[x] only CodeableConcept
* valueCodeableConcept from http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state (required)
* ^context[+].type = #element
* ^context[=].expression = "Identifier"

---

// File: input/fsh/Metric.fsh

Logical: PASMetricData
Id: PASMetricData
Title: "PAS Metric Data"
Description: "A logical model describing the information that should be captured by PAS implementers about every PAS invocation to support measures evaluating PAS implementation"
* ^status = #draft
* ^experimental = false
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status].valueCode = #informative
* source            1..1 code            "provider | intermediary | payer"            "A code to indicate which type of system collected the metric data."
* source    from MetricDataSource      (required)
* providerId        1..1 Identifier      "User invoking hook"                  "The NPI number of the user who initiated the PAS request."
* providerId.system = "http://hl7.org/fhir/sid/us-npi"
* providerId.value  1..1
* groupId           1..1 Identifier      "Healthcare org of user"              "The NPI of the hospital/clinic/other organization that initiated the PAS request."
* groupId.system    = "http://hl7.org/fhir/sid/us-npi"
* groupId.value     1..1
* payerId           1..1 Identifier      "Payer receiving hook"                "The identifier of the payer organization to whom the PAS call was made."
* payerId.system    1..1
* payerId.value     1..1
* exchange         1..* BackboneElement "Prior Authorization Exchanges" "Exchanges between providers, intermediares, and payers to support prior authorization."
  * type  1..1 code  "initial | subsequent | cancel | update | query | initialDocToPayer"   "A code indicating the type of exchange"
  * with    0..1 code  "provider | intermediary | payer"               "The destination for the exchange"
  * method    1..1 code  "x12 | restful | ihe | direct | other"          "Exchange standard used for this specific exchange.  Note: RESTful is the default for any Provider to Intermediary exchange, X12 is the defalt for any exchange between the intermediary and the payer for the X12 278, the exchange of the PAS bundle between the intermediary and the payer may be any of the methods included in the value set."
  * requestTime       1..1 instant         "Time exchange initiated"                 "For providers, the request was made.  For payers, the time the request was received.  For intermediaries time the request was received from the provider or time the request was sent to the payer."
  * responseTime      0..1 instant         "Time of exchange response"               "For providers, the response was received.  For payers, the time the response  was sent.  For intermediaries time the response  was sent to the provider or time the response was received from the payer."
  * httpResponse      1..1 code     "e.g. 200"                            "What HTTP response code was returned for the exchange invocation."
* issue 0..* BackboneElement "OperationOutcome info" "In the event of an HTTP error, if an OperationOutcome was returned, what were the issues."
  * code            1..1 code            "Error code"                          "The issue.code value from the OperationOutcome for this issue."
  * code            from IssueType             (required)
  * details         0..1 CodeableConcept "More detailed error code"            "The issue.details value from the OperationOutcome for this issue."
  * details         from OperationOutcomeCodes (example)
* aaaCodes 0..* BackboneElement "AAA codes returned" "Any AAA codes returned during the exchange."
  * loopID 1..1 code "see X12 loop IDs" "X12 loop ID."
  * aaaCode 1..1 code "approved | modified | denied" "AAA code returned with response."
* itemDetail        0..* BackboneElement "Service level item detail" "Service level detail.  One interation of the backbone for each service item in the PA exchange."
  * trn 0..1 integer      "Service Level TRN"     "Service level TRN assigned by the payer if a questionnaire is required."
  * item            1..1 CodeableConcept "eg. ICD10, HCPCS, NDC"  "The specific procedure, item, medication, appointment, nutrition that is the subject of the order."
  * assertionId     0..1  string  "Unique ID for order item"  "The unique ID for the order item returned by CRD in the coverage information."
  * initialSubmissionTime 0..1 dateTime "Date/time of the initial submission of the item" "Date/time of the initial submission of the servcie item. This may be the time of the initial PA request or the time of an updated that added the service item."
  * finalResponseTime 0..1 dateTime "Date/time of final result" "Date/time that the final result was returned for the specific service item."
  * responsesRequired 0..1 integer  "Number of responses"  "Number of responses (initial and any with result pended) for the service item."
  * aaaCodes 0..* BackboneElement "AAA codes returned" "Any AAA codes returned during the exchange."
    * loopID 1..1 code "see X12 loop IDs" "X12 loop ID."
    * aaaCode 1..1 code "approved | modified | deined" "AAA error code returned in the response."
  * locationType 0..1 code "inpatient | outpatient | home" "The site where the service will be performed."
  * result  0..1  code "approved | modified | denied | pended"  "Final result of the specific service item."
  * denialReason 0..1 code "Denial Reason" "A code specifying the reason why the item was denied."
* supportingDoc  0..1  url "Documentation submitted as part of PAS Bundle"  "The URL of the questionnaire that was the basis for the questionnaireResponse submitted as part of the PAS bundle for the specific service item."
* requestedDoc 0..* BackboneElement "Documentation requested via 278 response" "Documentation requested via 278 response."
  * docRequest 1..*  CodeableConcept "Coded requests for additional documentation" "Coded requests for documentation in the 278 response. May be LOINC codes as determined by HIPAA tab or X12 codes from the PWK01 element."
  * timeRequested 1..1 dateTime "Date/Time of initial request" "Date/Time of initial request for this item (may be part of the initial submission or part an update."
  * timeSubmitted 0..1 dateTime "Date/Time of final result" "Date/Time of final result for this item (may be part of the initial submission or part an update."
  * submissionMethod 0..1 code "CDex | portal | fax | x12 | other" "The technical method used to submit the requested additional documentation."
* exceptionSubmission 0..1 boolean "True if exchange is based on the exception grant" "Indicator that exchange was performed under an exception grant from the National Standard Group."
* businessLine  0..1 CodeableConcept "E.g. MedicareAdvantage"              "A code that indicates which type of insurance the patient is covered by."


---

// File: input/fsh/Organization.fsh

Profile: PASInsurer
Parent: PASOrganization
Id: profile-insurer
Title: "PAS Insurer Organization"
Description: "An organization who provides insurance and is the receiver of a prior authorization request."
* type MS
* type from https://valueset.x12.org/x217/005010/request/2010A/NM1/1/01/00/98 (required)
* type ^binding.description = "Codes identifying an organizational entity, a physical location, property or an individual. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."

Profile: PASRequestor
Parent: PASOrganization
Id: profile-requestor
Title: "PAS Requestor Organization"
Description: "The organization who is making a prior authorization request."
* type MS
* type from https://valueset.x12.org/x217/005010/response/2010B/NM1/1/01/00/98 (required)
* type ^binding.description = "Codes identifying an organizational entity, a physical location, property or an individual. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* address MS
* contact MS
* contact.name MS
* contact.telecom MS

Instance: TINIdentifierPattern
InstanceOf: Identifier
Usage: #inline
* system = "http://terminology.hl7.org/NamingSystem/USEIN"

Instance: PIIdentifierPattern
InstanceOf: Identifier
Usage: #inline
* type = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType#payerid

Profile: PASOrganization
Parent: $USCoreOrganization
Id: profile-organization
Title: "PAS Organization Base Profile"
Description: "A base profile for organizations in PAS"
* ^abstract = true
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|3.1.1"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0"
* identifier MS
* identifier only PASIdentifier
* identifier contains TIN 0..1 MS and PI 0..1 MS
* identifier[TIN] ^short = "The US Employer Identification Number (EIN) or Tax Identification Number (TIN)."
* identifier[TIN] = TINIdentifierPattern
* identifier[PI] ^short = "The Payer Identification Number (PI)"
* identifier[PI] = PIIdentifierPattern

Profile: PASLocation
Parent: $USCoreLocation
Id: profile-location
Title: "PAS Location Profile"
Description: "A profile on US-Core location to allow for specifying where a practitioner is working at."
* address 1..1 MS


---

// File: input/fsh/Patient.fsh

Profile: PASBeneficiary
Parent: $USCorePatient
Id: profile-beneficiary
Title: "PAS Beneficiary Patient"
Description: "A patient who is the beneficiary of an insurance plan."
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice that provides the member identifier."
* identifier contains memberIdentifier 0..1 MS
* identifier[memberIdentifier].type = http://terminology.hl7.org/CodeSystem/v2-0203#MB
* name.suffix MS
* name.prefix MS
* birthDate MS
* birthDate obeys FullDateRule
* address.district MS
* address.country MS
* multipleBirthInteger MS

Profile: PASSubscriber
Parent: $USCorePatient
Id: profile-subscriber
Title: "PAS Subscriber Patient"
Description: "A patient who is the subscriber of an insurance plan."
* extension contains MilitaryStatus named militaryStatus 0..1
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice that provides the member identifier."
* identifier contains memberIdentifier 1..1 MS
* identifier[memberIdentifier].type = http://terminology.hl7.org/CodeSystem/v2-0203#MB
* name.suffix MS
* name.prefix MS
* birthDate MS
* birthDate obeys FullDateRule
* address.district MS
* address.country MS

Extension: MilitaryStatus
Id: extension-militaryStatus
Description: "A patient's military status."
* value[x] only CodeableConcept
* value[x] from https://valueset.x12.org/x217/005010/request/2010C/INS/1/08/00/584 (required)
* value[x] ^binding.description = "Codes showing the general employment status of an employee/claimant. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "Examples"
* ^context[+].type = #element
* ^context[=].expression = "Patient"



---

// File: input/fsh/Practitioner.fsh

Profile: PASPractitioner
Parent: $USCorePractitioner
Id: profile-practitioner
Title: "PAS Practitioner"
Description: "PAS constraints on Practitioner resource mandating support for elements relevant to the care team involved in a prior authorization request"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|3.1.1"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0"
* identifier MS
* identifier only PASIdentifier
* telecom MS
* address MS

Profile: PASPractitionerRole
Parent: PractitionerRole
Id: profile-practitionerrole
Title: "PAS PractitionerRole"
Description: "PAS constraints on PractitionerRole resource mandating support for elements relevant to the care team involved in a prior authorization request"
* practitioner 1..1 MS
* practitioner only Reference(PASPractitioner)
* organization MS
* organization only Reference(PASOrganization)


---

// File: input/fsh/Quantity.fsh

Profile: PASQuantity
Parent: SimpleQuantity
Id: profile-quantity
Title: "PAS Quantity"
Description: "Constraints and extensions on SimpleQuantity which restricts the units."

* code from https://valueset.x12.org/x217/005010/request/2000F/HSD/1/01/00/673 (required)

---

// File: input/fsh/Request.fsh

Profile: PASMedicationRequest
Parent: $USCoreMedicationRequest
Id: profile-medicationrequest
Title: "PAS Medication Request"
Description: "PAS constraints on MedicationRequest resource mandating support for elements relevant to the prescriptions being requested on a prior authorization request"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|3.1.1"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|6.1.0"
* extension contains http://hl7.org/fhir/us/davinci-crd/StructureDefinition/ext-coverage-information named coverage 0..1 MS
* intent MS
* intent = #order (exactly)
* subject MS
* subject only Reference(PASBeneficiary)
* dosageInstruction.timing MS
* dosageInstruction.timing only PASTiming
* dispenseRequest MS
* dispenseRequest.quantity MS

Profile: PASServiceRequest
Parent: ServiceRequest
Id: profile-servicerequest
Title: "PAS Service Request"
Description: "PAS constraints on ServiceRequest resource mandating support for elements relevant to the generic services being requested on a prior authorization request"
* extension contains ProductOrServiceCodeEnd named serviceCodeEnd 0..1 MS and http://hl7.org/fhir/us/davinci-crd/StructureDefinition/ext-coverage-information named coverage 0..1 MS
* intent MS
* intent = #order (exactly)
* code MS
* code from X12278RequestedServiceType (required)
* quantity[x] MS
* quantity[x] only PASQuantity
* subject MS
* subject only Reference(PASBeneficiary)
* occurrence[x] MS
* occurrence[x] only PASTiming

Profile: PASNutritionOrder
Parent: NutritionOrder
Id: profile-nutritionorder
Title: "PAS Nutrition Order"
Description: "PAS constraint on Nutrition Order resource for elements relevant to the ordering of nutrition on a prior authorization request"
* extension contains http://hl7.org/fhir/us/davinci-crd/StructureDefinition/ext-coverage-information named coverage 0..1 MS
* intent MS
* intent = #order (exactly)
* patient MS
* patient only Reference(PASBeneficiary)
* oralDiet MS
* oralDiet.type MS
* oralDiet.type from X12278NutritionOralDietType (required)
* enteralFormula MS
* enteralFormula.baseFormulaType MS
* enteralFormula.baseFormulaType from X12278NutritionEnteralFormulaType (required)


Profile: PASDeviceRequest
Parent: DeviceRequest
Id: profile-devicerequest
Title: "PAS Device Request"
Description: "PAS constraints on DeviceRequest resource mandating support for elements relevant to the devices being requested on a prior authorization request"
* extension contains http://hl7.org/fhir/us/davinci-crd/StructureDefinition/ext-coverage-information named coverage 0..1 MS
* intent MS
* intent = #order (exactly)
* code[x] MS
* code[x] only CodeableConcept
* codeCodeableConcept from X12278RequestedServiceType (required)
* subject MS
* subject only Reference(PASBeneficiary)
* occurrence[x] MS
* occurrence[x] only PASTiming

Profile: PASTiming
Parent: Timing
Id: profile-datatype-timing
Title: "PAS Timing"
Description: "PAS constraints on the Timing datatype used in the various service requests."
* extension contains CalendarPattern named calendarPattern 0..1 MS and
	DeliveryPattern named deliveryPattern 0..1 MS
* repeat.bounds[x] MS
  * ^short = "The number of periods over which the service is delivered."
* repeat.bounds[x] only Duration
* repeat.period MS
* repeat.periodUnit MS

//modified
Extension: CalendarPattern
Id: extension-timingcalendarpattern
Description: "A code representing the specific days when a service is being requested"
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000F/HSD/1/07/00/678 (required)
* valueCodeableConcept  ^binding.description = "Codes which specifies the routine shipments, deliveries, or calendar pattern. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "Examples"
* ^context[+].type = #element
* ^context[=].expression = "Request"
* ^context[+].type = #element
* ^context[=].expression = "Dosage.timing"

Extension: DeliveryPattern
Id: extension-timingdeliverypattern
Description: "A code representing the specific delivery of a service being requested"
* value[x] only CodeableConcept
* valueCodeableConcept from https://valueset.x12.org/x217/005010/request/2000F/HSD/1/08/00/679 (required)
* valueCodeableConcept  ^binding.description = "Codes which specifies the time for routine shipments or deliveries
. These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^context[+].type = #element
* ^context[=].expression = "Examples"
* ^context[+].type = #element
* ^context[=].expression = "Request"
* ^context[+].type = #element
* ^context[=].expression = "Dosage.timing"

---

// File: input/fsh/Task.fsh

Profile: PASTask
Parent: Task
Id: profile-task
Title: "PAS Task"
Description: "PAS constraints on Task resource that is used to request additional documentation for prior authorizations."

* obeys AttachmentNeeded
* obeys QuestionnaireContext
* identifier 1..* MS
  * ^short = "Payers tracking identifier"
* status 1..1 MS
* status from http://hl7.org/fhir/us/davinci-hrex/ValueSet/hrex-task-status (required)
* intent 1..1 MS
* intent = #order
* code 1..1 MS
* code from PASTaskCodes (required)
* requester ..1 MS
  * ^short = "Provider ID - only send the identifier"
  * identifier 1..1 MS
* owner 0..1 MS
  * ^short = "Provider ID - only send the identifier"
  * identifier 1..1 MS
* for 1..1 MS
* for only Reference(PASBeneficiary)
* reasonCode 1..1 MS
* reasonCode = PASTempCodes#priorAuthorization
* reasonReference 1..1 MS
* reasonReference only Reference(PASClaim)
* input 2..* MS
* input ^slicing.discriminator.type = #value
* input ^slicing.discriminator.path = "type"
* input ^slicing.rules = #open
* input ^slicing.description = "Different slices for identifying different types of information for the Task."
* input contains PayerURL 1..1 MS and AttachmentsNeeded 0..* MS and QuestionnaireContext 0..* MS
* input[PayerURL].type = PASTempCodes#payer-url
* input[PayerURL].value[x] only url
* input[AttachmentsNeeded].type MS
* input[AttachmentsNeeded].type = PASTempCodes#attachments-needed
* input[AttachmentsNeeded].value[x] MS
* input[AttachmentsNeeded].value[x] only CodeableConcept
* input[AttachmentsNeeded].valueCodeableConcept from http://hl7.org/fhir/us/davinci-pas/ValueSet/pas-loinc-attachment-codes
* input[AttachmentsNeeded].valueCodeableConcept ^binding.extension.url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* input[AttachmentsNeeded].valueCodeableConcept ^binding.extension.extension[+].url = "purpose"
* input[AttachmentsNeeded].valueCodeableConcept ^binding.extension.extension[=].valueCode = #extensible
* input[AttachmentsNeeded].valueCodeableConcept ^binding.extension.extension[+].url = "valueSet"
* input[AttachmentsNeeded].valueCodeableConcept ^binding.extension.extension[=].valueCanonical = "http://hl7.org/fhir/us/davinci-pas/ValueSet/pas-pwk01-attachment-report-type-code"
* input[AttachmentsNeeded].valueCodeableConcept ^binding.extension.extension[+].url = "documentation"
* input[AttachmentsNeeded].valueCodeableConcept ^binding.extension.extension[=].valueMarkdown = "X12 codes that can be used to request additional information to support a prior authorization request."
* input[AttachmentsNeeded].extension contains PALineNumber named paLineNumber 1..1 MS

* input[QuestionnaireContext].type MS
* input[QuestionnaireContext].type = PASTempCodes#questionnaire-context
* input[QuestionnaireContext].value[x] MS
* input[QuestionnaireContext].value[x] only string
* input[QuestionnaireContext].extension contains PALineNumber named paLineNumber 1..1 MS
* restriction.period MS
* statusReason MS

Extension: PALineNumber
Id: extension-paLineNumber
Description: "A specific line number associated with the attachment request code or TRN."
* ^context.type = #element
* ^context.expression = "Task.input"
* value[x] only integer

Invariant: AttachmentNeeded
Description: "If task.code is attachment-request-code, then attachments needed slice is required."
Expression: "$this.code.coding.where(code='attachment-request-code').count() > 0 implies $this.input.type.coding.where(code='attachments-needed').count() > 0"
Severity: #error

Invariant: QuestionnaireContext
Description: "If task.code is attachment-request-questionnaire, then questionnaire context slice is required."
Expression: "$this.code.coding.where(code='attachment-request-questionnaire').count() > 0 implies $this.input.type.coding.where(code='questionnaire-context').count() > 0"
Severity: #error


---

// File: input/fsh/Terminology.fsh

/*
IG-specific terminology
*/
ValueSet: MetricDataSource
Title: "Metric Data Source"
Description: "A list of codes indicating the perspective from which metric data was captured"
* ^status = #draft
* ^experimental = false
* PASTempCodes#payer-src
* PASTempCodes#provider-src
* PASTempCodes#intermediary-src

CodeSystem: PASTempCodes
Title: "PAS Temporary Codes"
Description: "Codes temporarily defined as part of the PAS implementation guide.  These will eventually migrate into an officially maintained terminology (likely either SNOMED CT or HL7's UTG code systems)."
* ^status = #draft
* ^experimental = false
* ^caseSensitive = true
* ^hierarchyMeaning = #is-a
* ^content = #complete

// Metric data source
* #provider-src            "Provider-sourced"                  "The metric information was captured from the provider system's perspective"
* #payer-src               "Payer-sourced"                     "The metric information was captured from the payer system's perspective"
* #intermediary-src        "Intermediary-sourced"                     "The metric information was captured from the intermediary system's perspective"

// PAS Information Change Mode
* #changed "Changed" "Previously sent information has been changed."
* #added "Added" "New information that was not sent previously."

// PAS Supporting Information Type
* #patientEvent "Patient Event" "Information about the dates of the event that are being requested."
* #admissionDates "Admission Dates" "Information about the admission dates of a hospital admission being requested."
* #dischargeDates "Discharge Dates" "Information about discharge dates of a hospital admission being requested."
* #additionalInformation "Additional Information" "Send additional paperwork or supporting information for the request."
* #freeFormMessage "Free Form Message" "Send text messages to the UMO."
* #institutionalEncounter "Institutional Encounter" "Information about a hospital claim being requested."

// PAS Subscription Event
* #result-available "Result Available" "A new result for a PAS submission is now available."

// PAS Diagnosis Type
* #admitting "Admitting" "The diagnosis given as the reason why the patient was admitted to the hospital."
* #principal "Principal" "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* #patientreasonforvisit "Patient Reason For Visit" "The diagnosis given as why the patient came to the hospital."

// PAS Communication Request Medium
* #CDEX "CDex Submit-Attachment" "Via a CDex Submitt-Attachment operation"

// PAS Task Codes
* #attachment-request-code "Attach Request Code" "Attachments are identified by LOINC or PWK01 codes"
* #attachment-request-questionnaire "Attachment Request Questionnaire" "Attachments are identified by a questionnaire"

* #priorAuthorization "Prior Authorization Information Request" "Additional information is needed to determine response for a prior authorization"
* #payer-url "Payer URL" "The Payer Endpoint URL needed to submit attachments"
* #attachments-needed "Attachments Needed" "Communicates what attachments are needed"
* #questionnaire-context "Questionnaire Context" "Communicates the context of questionnaires that are needed"

ValueSet: PASTaskCodes
Title: "PAS Task Codes"
Description: "The code for the task that is request additional information."
* ^experimental = false
* PASTempCodes#attachment-request-code
* PASTempCodes#attachment-request-questionnaire


ValueSet: PASInformationChangeMode
Title: "PAS Information Change Mode Value Set"
Description: "The mode by which a piece of information has changed."
* ^experimental = false
* PASTempCodes#changed
* PASTempCodes#added

ValueSet: PASSupportingInfoType
Title: "PAS Supporting Info Type Value Set"
Description: "Types of supporting information for a Prior Authorization Claim."
* ^experimental = false
* PASTempCodes#patientEvent
* PASTempCodes#admissionDates
* PASTempCodes#dischargeDates
* PASTempCodes#additionalInformation
* PASTempCodes#freeFormMessage
* PASTempCodes#institutionalEncounter

ValueSet: PASCommunicationRequestMedium
Title: "PAS Communication Medium Value Set"
Description: "Types of channels that a communication request can be made"
* ^experimental = false
* ^copyright = "These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* codes from system https://codesystem.x12.org/005010/756
* PASTempCodes#CDEX

/*
X12 ValueSets
*/
ValueSet: AHANUBCRevenueCodes
Title: "AHA NUBC Revenue Value Set"
Description: "These codes are used to convey specific accomodation, ancillary service or unique billing calculations or arrangements. They are listed within the UB-04 Data Specifications Manual and maintained by the National Uniform Billing Committee (NUBC)."
* ^experimental = false
* ^copyright = "The Official UB-04 Data Specifications Manual, copyrighted by the American Hospital Association, is the only official source of UB-04 billing information adopted by the National Uniform Billing Committee. No other publication—governmental or private/commercial—can be considered authoritative.  See their website for licensing terms and conditions."
* codes from system https://www.nubc.org/CodeSystem/RevenueCodes

ValueSet: X12278RejectReasonCodes
Title: "X12 278 Reject Reason Value Set"
Description: "The complete set of codes that are used to indicate the reason why something was rejected."
* ^experimental = false
* ^copyright = "These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* codes from system https://codesystem.x12.org/005010/901

ValueSet: X12278FollowUpActionCodes
Title: "X12 278 Follow Up Action Value Set"
Description: "The complete set of codes that are used to indicate any follow-up actions that are allowed for a reject reason."
* ^experimental = false
* ^copyright = "These codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* codes from system https://codesystem.x12.org/005010/889

ValueSet: X12278DiagnosisCodes
Title: "X12 278 Diagnosis Code Value Set"
Description: "The complete set of codes that can be used to convey a patient diagnosis.  This includes codes from ICD-10-CM, ICD-9-CM and Diagnosis Related Group codes."
* ^experimental = false
* codes from system http://terminology.hl7.org/CodeSystem/icd9cm
* codes from system http://hl7.org/fhir/sid/icd-10-cm
* codes from system https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software
* codes from system http://uri.hddaccess.com/cs/apdrg
* codes from system http://uri.hddaccess.com/cs/aprdrg

ValueSet: X12278DiagnosisType
Title: "X12 278 Diagnosis Type Value Set"
Description: "This set of codes is used to identify the type of diagnosis that is being conveyed in the prior authorization."
* ^experimental = false
* PASTempCodes#admitting
* PASTempCodes#principal
* PASTempCodes#patientreasonforvisit

ValueSet: X12278LocationType
Title: "X12 278 Health Care Service Location Type Value Set"
Description: "This set of codes identifies where services were, or may be, performed.  The codes are taken from NUBC Bill Type and from CMS Place of Service codes."
* ^experimental = false
* codes from system https://www.nubc.org/CodeSystem/TypeOfBill
* codes from system https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set

ValueSet: X12278RequestedServiceType
Title: "X12 278 Requested Service Type"
Description: "This set of codes identifies what service is being requested.  For queries, if the query is not searching for a specific service type, the not-applicable data absent reason code can be used.  It is a combination of X12 Service Type codes, CPT (HCPCS I) and HCPCS II procedure code modifiers, ICD-9 Procedure codes, ICD-10 Procedure codes, and NDC Drug codes.  NOTE: HCPCS Level 1 Codes are the CPT codes so either code system could be used to send the codes.  When receiving the codes from an X12 system, the system returned will be HCPCS even if it was initially sent as a CPT code."
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved.
X12 codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^experimental = false
* http://terminology.hl7.org/CodeSystem/data-absent-reason#not-applicable
* codes from system https://codesystem.x12.org/005010/1365
* codes from system http://www.ama-assn.org/go/cpt
* codes from system http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
* codes from system http://terminology.hl7.org/CodeSystem/icd9cm
* codes from system http://www.cms.gov/Medicare/Coding/ICD10
* codes from system http://hl7.org/fhir/sid/ndc

ValueSet: X12278RequestedServiceModifierType
Title: "X12 278 Requested Service Modifier Type"
Description: "This set of codes identifies modifiers to the type of service being requested.  It is a combination of CPT (HCPCS I) and HCPCS II procedure code modifiers.  NOTE: HCPCS Level 1 Codes are the CPT codes so either code system could be used to send the codes.  When receiving the codes from an X12 system, the system returned will be HCPCS even if it was initially sent as a CPT code."
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved."
* ^experimental = false
* codes from system http://www.ama-assn.org/go/cpt
* codes from system http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets

ValueSet: X12278DiagnosisInformationType
Title: "X12 278 Diagnosis Information Type"
Description: "LOINC codes that convey the type of information that is being requested about the diagnosis."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false
* codes from system http://loinc.org where CLASS = http://loinc.org#LP7763-8

ValueSet: X12278ReviewDecisionReasonCode
Title: "X12 278 Review Decision Reason Codes"
Description: "Codes used to identify the reason for the health care service review outcome."
* ^copyright = "This value set contains codes maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^experimental = false
* codes from system https://codesystem.x12.org/external/886

ValueSet: X12278ConditionCategory
Title: "X12 278 CRC Condition Category"
Description: "This set of codes identifies the category of a patient's condition."
* ^copyright = "X12 codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^experimental = false
* codes from system https://codesystem.x12.org/005010/1136

ValueSet: X12278ConditionCode
Title: "X12 278 CRC Condition Code"
Description: "This set of codes identifies a patient's conditions."
* ^copyright = "X12 codes are listed within an X12 implementation guide (TR3) and maintained by X12. All X12 work products are copyrighted. See their website for licensing terms and conditions."
* ^experimental = false
* codes from system https://codesystem.x12.org/005010/1321

ValueSet: X12278NutritionOralDietType
Title: "X12 278 Nutrition Oral Diet Type"
Description: "This set of codes identifies oral diet codes."
* ^experimental = false
* codes from system http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets

ValueSet: X12278NutritionEnteralFormulaType
Title: "X12 278 Nutrition Enteral Formula Type"
Description: "This set of codes identifies enteral formula codes."
* ^experimental = false
* codes from system http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets


---

// File: input/fsh/USCoreAliases.fsh

// Profiles
Alias:   $USCoreCondition = http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
Alias:   $USCoreCoverage = http://hl7.org/fhir/us/core/StructureDefinition/us-core-coverage
Alias:   $USCoreDiagnosticReportLab = http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab
Alias:   $USCoreDocumentReference = http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference
Alias:   $USCoreEncounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias:   $USCoreImmunization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization
Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCoreMedicationRequest = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest
Alias:   $USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias:   $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   $USCoreProcedure = http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure
Alias:   $USCoreObservationLab = http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab
Alias:   $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   $USCoreQuestionnaireResponse = http://hl7.org/fhir/us/core/StructureDefinition/us-core-questionnaireresponse

// Extensions
Alias:   $USCoreBirthSex = http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex
Alias:   $USCoreRace = http://hl7.org/fhir/us/core/StructureDefinition/us-core-race
Alias:   $USCoreEthnicity = http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity

Alias: $HumanLanguageExtension = http://hl7.org/fhir/StructureDefinition/language

Alias: $compliesWithProfile = http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile

---

// File: input/fsh/Examples.fsh

Instance: ReferralAuthorizationBundleExample
InstanceOf: PASRequestBundle
Title: "Referral Authorization Bundle Example"
Description: "An example of a Claim bundle requesting prior authorization of a referral."
* identifier.system = "http://example.org/SUBMITTER_TRANSACTION_IDENTIFIER"
* identifier.value = "A12345"
* type = #collection
* timestamp = 2005-05-02T11:01:00+05:00
* entry[Claim].fullUrl = "http://example.org/fhir/Claim/ReferralAuthorizationExample"
* entry[Claim].resource = ReferralAuthorizationExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Coverage/InsuranceExample"
* entry[3].resource = InsuranceExample
* entry[4].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[4].resource = SubscriberExample
* entry[5].fullUrl = "http://example.org/fhir/ServiceRequest/ReferralRequestExample"
* entry[5].resource = ReferralRequestExample
* entry[6].fullUrl = "http://example.org/fhir/PractitionerRole/ReferralPractitionerRoleExample"
* entry[6].resource = ReferralPractitionerRoleExample
* entry[7].fullUrl = "http://example.org/fhir/Practitioner/ReferralPractitionerExample"
* entry[7].resource = ReferralPractitionerExample
* entry[8].fullUrl = "http://example.org/fhir/Location/ReferralLocationExample"
* entry[8].resource = ReferralLocationExample

Instance: ReferralAuthorizationExample
InstanceOf: PASClaim
Title: "Referral Authorization Example"
Description: "An example of a Claim resource requesting prior authorization of a referral."
* extension[levelOfServiceType].valueCodeableConcept = https://codesystem.x12.org/005010/1338#U "Urgent"
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* identifier.extension[jurisdiction].valueCodeableConcept = https://www.usps.com/#MA
* identifier.extension[subDepartment].valueString = "223412"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2005-05-02T11:01:00+05:00
* insurer = Reference(InsurerExample)
* provider = Reference(UMOExample)
* priority = http://terminology.hl7.org/CodeSystem/processpriority#normal
* diagnosis.sequence = 1
* diagnosis.diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#G89.4
* diagnosis.extension[recordedDate].valueDate = "2021-05-10"
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(InsuranceExample)
* item.extension[itemTraceNumber].valueIdentifier.system = "http://example.org/ITEM_TRACE_NUMBER"
* item.extension[itemTraceNumber].valueIdentifier.value = "1122334"
* item.extension[authorizationNumber].valueString = "1122445"
* item.extension[administrationReferenceNumber].valueString = "9988311"
* item.extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#SC "Specialty Care Review"
* item.extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item.extension[requestedService].valueReference = Reference(ReferralRequestExample)
* item.extension[epsdtIndicator].valueBoolean = false
* item.extension[nursingHomeResidentialStatus].valueCodeableConcept = https://codesystem.x12.org/005010/1345#2 "Newly Admitted"
* item.extension[nursingHomeLevelOfCare].valueCodeableConcept = https://codesystem.x12.org/005010/1337#2 "Intermediate Care Facility (ICF)"
* item.extension[revenueUnitRateLimit].valueDecimal = 100.00
* item.sequence = 1
* item.careTeamSequence = 1
* item.diagnosisSequence = 1
* item.category = https://codesystem.x12.org/005010/1365#3 "Consultation"
* item.productOrService = https://codesystem.x12.org/005010/1365#3 "Consultation"
* item.locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11
* careTeam.sequence = 1
* careTeam.extension[careTeamClaimScope].valueBoolean = true
* careTeam.provider = Reference(ReferralPractitionerRoleExample)

Instance: ReferralAuthorizationResponseBundleExample
InstanceOf: PASResponseBundle
Title: "Referral Authorization Response Bundle Example"
Description: "An example of a ClaimResponse bundle approving the authorization of a referral."
* type = #collection
* timestamp = 2005-05-02T11:02:00+05:00
* entry[ClaimResponse].fullUrl = "http://example.org/fhir/ClaimResponse/PractitionerRequestorResponseExample"
* entry[ClaimResponse].resource = PractitionerRequestorResponseExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[3].resource = SubscriberExample
* entry[4].fullUrl = "http://example.org/fhir/Practitioner/ReferralPractitionerExample"
* entry[4].resource = ReferralPractitionerExample

Instance: ReferralPendingAuthorizationResponseBundleExample
InstanceOf: PASResponseBundle
Title: "Referral Pending Authorization Response Bundle Example"
Description: "An example of a ClaimResponse bundle with a pending authorization of a referral."
* type = #collection
* timestamp = 2005-05-02T11:02:00+05:00
* entry[ClaimResponse].fullUrl = "http://example.org/fhir/ClaimResponse/PractitionerRequestorPendingResponseExample"
* entry[ClaimResponse].resource = PractitionerRequestorPendingResponseExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[3].resource = SubscriberExample
* entry[4].fullUrl = "http://example.org/fhir/Practitioner/ReferralPractitionerExample"
* entry[4].resource = ReferralPractitionerExample

Instance: RejectionResponseBundleExample
InstanceOf: PASResponseBundle
Title: "Rejection Response Bundle Example"
Description: "An example of a ClaimResponse bundle showing the rejection of a request."
* type = #collection
* timestamp = 2005-05-02T11:02:00+05:00
* entry[ClaimResponse].fullUrl = "http://example.org/fhir/ClaimResponse/RejectionResponseExample"
* entry[ClaimResponse].resource = RejectionResponseExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[3].resource = SubscriberExample

Instance: ErrorResponseBundleExample
InstanceOf: PASResponseBundle
Title: "Error Response Bundle Example"
Description: "An example of a ClaimResponse bundle with errors."
* type = #collection
* timestamp = 2005-05-02T11:02:00+05:00
* entry[ClaimResponse].fullUrl = "http://example.org/fhir/ClaimResponse/ErrorResponseExample"
* entry[ClaimResponse].resource = ErrorResponseExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[3].resource = SubscriberExample
* entry[4].fullUrl = "http://example.org/fhir/Claim/ReferralAuthorizationExample"
* entry[4].resource = ReferralAuthorizationExample

Instance: ErrorResponseExample
InstanceOf: PASClaimResponse
Title: "Error Response Example"
Description: "An example of a ClaimResponse with errors."
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2005-05-02T11:02:00+05:00
* insurer = Reference(InsurerExample)
* requestor = Reference(UMOExample)
* request = Reference(ReferralAuthorizationExample)
* outcome = #error
* error[0].code = https://codesystem.x12.org/005010/901#04
* error[1].code = https://codesystem.x12.org/005010/901#T4
* error[1].extension[errorElement].valueString = "2010A-NM103"
* error[1].extension[errorPath].valueString = "Bundle.entry[1].Organization.name"
* error[1].extension[followupAction].valueCodeableConcept = https://codesystem.x12.org/005010/889#C

Instance: RejectionResponseExample
InstanceOf: PASClaimResponse
Title: "Rejection Response Example"
Description: "An example of a ClaimResponse that is rejected."
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2005-05-02T11:02:00+05:00
* insurer = Reference(InsurerExample)
* requestor = Reference(UMOExample)
* request = Reference(HomecareAuthorizationUpdateExample)
* outcome = #error
* error[+].code = https://codesystem.x12.org/005010/901#33
* error[=].extension[errorElement].valueString = "2000E"
* error[=].extension[followupAction].valueCodeableConcept = https://codesystem.x12.org/005010/889#N
* processNote[+].text = "Updates are not allowed. A new auth request must be submitted."
* processNote[=].number = 1

Instance: PractitionerRequestorResponseExample
InstanceOf: PASClaimResponse
Title: "Authorization Response with Practitioner Requestor Example"
Description: "An example of a ClaimResponse where the requestor is a Practitioner."
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2005-05-02T11:02:00+05:00
* insurer = Reference(InsurerExample)
* requestor = Reference(ReferralPractitionerRoleExample)
* request = Reference(ReferralAuthorizationExample)
* outcome = #complete
* item.itemSequence = 1
* item.extension[requestedServiceDate].valuePeriod.start = 2005-05-02
* item.extension[requestedServiceDate].valuePeriod.end = 2005-06-02
* item.extension[preAuthIssueDate].valueDate = 2005-05-02
* item.extension[preAuthPeriod].valuePeriod.start = 2005-05-02
* item.extension[preAuthPeriod].valuePeriod.end = 2005-06-02
* item.extension[authorizedProvider].extension[provider].valueReference = Reference(ReferralPractitionerExample)
* item.extension[authorizedItemDetail].extension[productOrServiceCode].valueCodeableConcept = https://codesystem.x12.org/005010/1365#3 "Consultation"
* item.extension[authorizedItemDetail].extension[unitPrice].valueMoney.value = 100
* item.extension[authorizedItemDetail].extension[unitPrice].valueMoney.currency = #USD
* item.extension[authorizedItemDetail].extension[quantity].valueQuantity.value = 1
* item.adjudication.category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* item.adjudication.extension[reviewAction].extension[number].valueString = "AUTH0001"
* item.adjudication.extension[reviewAction].extension[code].valueCodeableConcept = https://codesystem.x12.org/005010/306#A1 "Certified in total"

Instance: PractitionerRequestorAdditionalContentResponseExample
InstanceOf: PASClaimResponse
Title: "Authorization Response with Practitioner Requestor and Additional Content Example"
Description: "An example of a ClaimResponse where the requestor is a Practitioner."
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2005-05-02T11:02:00+05:00
* insurer = Reference(InsurerExample)
* requestor = Reference(ReferralPractitionerRoleExample)
* request = Reference(ReferralAuthorizationExample)
* outcome = #complete
* item.itemSequence = 1
* item.extension[requestedServiceDate].valuePeriod.start = 2005-05-02
* item.extension[requestedServiceDate].valuePeriod.end = 2005-06-02
* item.extension[preAuthIssueDate].valueDate = 2005-05-02
* item.extension[preAuthPeriod].valuePeriod.start = 2005-05-02
* item.extension[preAuthPeriod].valuePeriod.end = 2005-06-02
* item.extension[authorizedProvider].extension[provider].valueReference = Reference(ReferralPractitionerExample)
* item.extension[authorizedItemDetail].extension[productOrServiceCode].valueCodeableConcept = https://codesystem.x12.org/005010/1365#3 "Consultation"
* item.extension[authorizedItemDetail].extension[unitPrice].valueMoney.value = 100
* item.extension[authorizedItemDetail].extension[unitPrice].valueMoney.currency = #USD
* item.extension[authorizedItemDetail].extension[quantity].valueQuantity.value = 1
* item.adjudication.category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* item.adjudication.extension[reviewAction].extension[number].valueString = "AUTH0001"
* item.adjudication.extension[reviewAction].extension[code].valueCodeableConcept = https://codesystem.x12.org/005010/306#A1 "Certified in total"
* addItem
  * itemSequence = 2
  * extension[revenue].valueCodeableConcept = https://www.nubc.org/CodeSystem/RevenueCodes#0202
  * provider.extension[providerType].valueCodeableConcept = https://codesystem.x12.org/005010/98#P3
  * provider = Reference(ReferralPractitionerExample)
  * productOrService = https://codesystem.x12.org/005010/1365#3
  * quantity.value = 1
  * unitPrice.value = 100
  * unitPrice.currency = #USD
  * adjudication.category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
  * adjudication.extension[reviewAction].extension[number].valueString = "AUTH0001"
  * adjudication.extension[reviewAction].extension[code].valueCodeableConcept = https://codesystem.x12.org/005010/306#A1 "Certified in total"

Instance: PractitionerRequestorPendingResponseExample
InstanceOf: PASClaimResponse
Title: "Pending Authorization Response with Practitioner Requestor Example"
Description: "An example of a ClaimResponse where the requestor is a Practitioner and the response is pended."
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2005-05-02T11:02:00+05:00
* insurer = Reference(InsurerExample)
* requestor = Reference(ReferralPractitionerRoleExample)
* request = Reference(ReferralAuthorizationExample)
* outcome = #complete
* item.itemSequence = 1
* item.extension[administrationReferenceNumber].valueString = "PEND0001"
* item.adjudication.category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* item.adjudication.extension[reviewAction].extension[code].valueCodeableConcept = https://codesystem.x12.org/005010/306#A4 "Pending"

Instance: HomecareAuthorizationBundleExample
InstanceOf: PASRequestBundle
Title: "Homecare Authorization Bundle Example"
Description: "An example of a Claim bundle requesting prior authorization of a home healthcare service."
* identifier.system = "http://example.org/SUBMITTER_TRANSACTION_IDENTIFIER"
* identifier.value = "B56789"
* type = #collection
* timestamp = 2005-05-02T14:30:00+05:00
* entry[Claim].fullUrl = "http://example.org/fhir/Claim/HomecareAuthorizationExample"
* entry[Claim].resource = HomecareAuthorizationExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Coverage/InsuranceExample"
* entry[3].resource = InsuranceExample
* entry[4].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[4].resource = SubscriberExample

Instance: HomecareAuthorizationExample
InstanceOf: PASClaim
Title: "Homecare Authorization Example"
Description: "An example of a Claim resource requesting prior authorization of a home healthcare service."
* extension[homeHealthCareInformation].extension[prognosis].valueCodeableConcept = https://codesystem.x12.org/005010/923#1
* extension[homeHealthCareInformation].extension[date].valueDate = "2005-05-02"
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2019-07-20T11:01:00+05:00
* insurer = Reference(InsurerExample)
* provider = Reference(UMOExample)
* priority = http://terminology.hl7.org/CodeSystem/processpriority#normal
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(InsuranceExample)
* item.extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#HS "Health Services Review"
* item.extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item.sequence = 1
* item.category = https://codesystem.x12.org/005010/1365#42 "Home Health Care"
* item.productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#G0154
* item.locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11
* item[1].sequence = 2
* item[1].category = https://codesystem.x12.org/005010/1365#42 "Home Health Care"
* item[1].productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#B4184
* item[1].extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#HS "Health Services Review"
* item[1].extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item[1].locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11

Instance: HomecareAuthorizationUpdateBundleExample
InstanceOf: PASRequestBundle
Title: "Homecare Authorization Update Bundle Example"
Description: "An example of a Claim bundle updating a previously sent prior authorization request."
* identifier.system = "http://example.org/SUBMITTER_TRANSACTION_IDENTIFIER"
* identifier.value = "A12345"
* type = #collection
* timestamp = 2005-05-02T11:01:00+05:00
* entry[Claim].fullUrl = "http://example.org/fhir/Claim/HomecareAuthorizationUpdateExample"
* entry[Claim].resource = HomecareAuthorizationUpdateExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Coverage/InsuranceExample"
* entry[3].resource = InsuranceExample
* entry[4].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[4].resource = SubscriberExample
* entry[5].fullUrl = "http://example.org/fhir/Claim/HomecareAuthorizationExample"
* entry[5].resource = HomecareAuthorizationExample

Instance: HomecareAuthorizationUpdateExample
InstanceOf: PASClaimUpdate
Title: "Homecare Authorization Update Example"
Description: "An example of a Claim resource updating a prior authorization."
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099-UPDATE"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2019-07-20T11:01:00+05:00
* insurer = Reference(InsurerExample)
* provider = Reference(UMOExample)
* priority = http://terminology.hl7.org/CodeSystem/processpriority#normal
* related.claim = Reference(HomecareAuthorizationExample)
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(InsuranceExample)
* item.extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#HS "Health Services Review"
* item.extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item.sequence = 1
* item.category = https://codesystem.x12.org/005010/1365#42 "Home Health Care"
* item.productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#G0154
* item.locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11
* item[1].sequence = 2
* item[1].modifierExtension[infoCancelledFlag].valueBoolean = true
* item[1].category = https://codesystem.x12.org/005010/1365#42 "Home Health Care"
* item[1].productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#B4184
* item[1].extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#HS "Health Services Review"
* item[1].extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#3 "Cancel"
* item[1].locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11
* item[2].sequence = 3
* item[2].extension[infoChanged].valueCode = #added
* item[2].category = https://codesystem.x12.org/005010/1365#42 "Home Health Care"
* item[2].productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#B4185
* item[2].extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#HS "Health Services Review"
* item[2].extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item[2].locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11

Instance: HomecareAuthorizationDifferentialBundleExample
InstanceOf: PASRequestBundle
Title: "Homecare Authorization Differential Update Bundle Example"
Description: "An example of a Claim bundle changing elements of a previously sent prior authorization request."
* identifier.system = "http://example.org/SUBMITTER_TRANSACTION_IDENTIFIER"
* identifier.value = "A12345"
* type = #collection
* timestamp = 2005-05-02T11:01:00+05:00
* entry[Claim].fullUrl = "http://example.org/fhir/Claim/HomecareAuthorizationDifferentialExample"
* entry[Claim].resource = HomecareAuthorizationDifferentialExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Coverage/InsuranceExample"
* entry[3].resource = InsuranceExample
* entry[4].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[4].resource = SubscriberExample
* entry[5].fullUrl = "http://example.org/fhir/Claim/HomecareAuthorizationExample"
* entry[5].resource = HomecareAuthorizationExample

Instance: HomecareAuthorizationDifferentialExample
InstanceOf: PASClaimUpdate
Title: "Homecare Authorization Differential Update Example"
Description: "An example of a Claim resource updating a prior authorization."
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ObservationValue#SUBSETTED
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099-UPDATE-DIFF"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2019-07-20T11:01:00+05:00
* insurer = Reference(InsurerExample)
* provider = Reference(UMOExample)
* priority = http://terminology.hl7.org/CodeSystem/processpriority#normal
* related.claim = Reference(HomecareAuthorizationExample)
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(InsuranceExample)
* item[0].sequence = 2
* item[0].modifierExtension[infoCancelledFlag].valueBoolean = true
* item[0].category = https://codesystem.x12.org/005010/1365#42 "Home Health Care"
* item[0].productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#B4184
* item[0].extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#HS "Health Services Review"
* item[0].extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item[0].locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11
* item[1].sequence = 3
* item[1].extension[infoChanged].valueCode = #added
* item[1].category = https://codesystem.x12.org/005010/1365#42 "Home Health Care"
* item[1].productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#B4185
* item[1].extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#HS "Health Services Review"
* item[1].extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item[1].locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11

Instance: MedicalServicesAuthorizationBundleExample
InstanceOf: PASRequestBundle
Title: "Medical Services Authorization Bundle Example"
Description: "An example of a Claim bundle requesting Medical Services Reservation."
* identifier.system = "http://example.org/SUBMITTER_TRANSACTION_IDENTIFIER"
* identifier.value = "5269367"
* type = #collection
* timestamp = 2005-05-02T11:01:00+05:00
* entry[Claim].fullUrl = "http://example.org/fhir/Claim/MedicalServicesAuthorizationExample"
* entry[Claim].resource = MedicalServicesAuthorizationExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Coverage/InsuranceExample"
* entry[3].resource = InsuranceExample
* entry[4].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[4].resource = SubscriberExample

Instance: MedicalServicesAuthorizationExample
InstanceOf: PASClaim
Title: "Medical Services Authorization Example"
Description: "An example of a Claim resource requesting prior authorization of Medical Services Reservation."
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2005-05-02T11:01:00+05:00
* insurer = Reference(InsurerExample)
* provider = Reference(UMOExample)
* priority = http://terminology.hl7.org/CodeSystem/processpriority#normal
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(InsuranceExample)
* item.extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#IN "Initial Medical Services Reservation"
* item.extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item.extension[authorizationNumber].valueString = "1122344"
* item.extension[administrationReferenceNumber].valueString = "33441122"
* item.sequence = 1
* item.category = https://codesystem.x12.org/005010/1365#1 "Medical Care"
* item.productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#99212 "Established Office Visit"
* item.servicedDate = "2005-05-10"
* item.locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11

Instance: PASClaimInquiryBundleExample
InstanceOf: PASInquiryRequestBundle
Title: "PAS Inquiry Request Bundle Example"
Description: "An example of a Claim bundle inquiring about prior authorizations."
* identifier.system = "http://example.org/SUBMITTER_TRANSACTION_IDENTIFIER"
* identifier.value = "5269367"
* type = #collection
* timestamp = 2005-05-02T11:01:00+05:00
* entry[Claim].fullUrl = "http://example.org/fhir/Claim/PASClaimInquiryExample"
* entry[Claim].resource = PASClaimInquiryExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Coverage/InsuranceExample"
* entry[3].resource = InsuranceExample
* entry[4].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[4].resource = SubscriberExample

Instance: PASClaimInquiryExample
InstanceOf: PASClaimInquiry
Title: "PAS Claim Inquiry Example"
Description: "An example of a Claim resource used to search for prior authorizations that match the example."
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2019-07-20T11:01:00+05:00
* insurer = Reference(InsurerExample)
* provider = Reference(UMOExample)
* priority = http://terminology.hl7.org/CodeSystem/processpriority#normal
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(InsuranceExample)
* item.extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#HS "Health Services Review"
* item.extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item.sequence = 1
* item.productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#G0154
* item[1].sequence = 2
* item[1].productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#B4184
* item[1].extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#HS "Health Services Review"
* item[1].extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item[1].extension[certIssueDate].valueDate = "2019-07-01"
* item[1].extension[certEffectiveDate].valueDate = "2019-07-01"
* item[1].extension[certExpirationDate].valueDate = "2019-07-31"
* item[1].extension[reviewActionCode].valueCodeableConcept = https://codesystem.x12.org/005010/306#A1 "Certified in total"
* item[1].extension[productOrServiceCodeEnd].valueCodeableConcept = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#B4190

Instance: PASClaimInquiryResponseBundleExample
InstanceOf: PASInquiryResponseBundle
Title: "PAS Inquiry Response Bundle Example"
Description: "An example of a ClaimResponse bundle returning a response to a claims inquiry."
* identifier.system = "http://example.org/SUBMITTER_TRANSACTION_IDENTIFIER"
* identifier.value = "5269367"
* type = #collection
* timestamp = 2005-05-02T11:01:00+05:00
* entry[ClaimResponse].fullUrl = "http://example.org/fhir/ClaimResponse/PASClaimInquiryResponseExample"
* entry[ClaimResponse].resource = PASClaimInquiryResponseExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Coverage/InsuranceExample"
* entry[3].resource = InsuranceExample
* entry[4].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[4].resource = SubscriberExample
* entry[5].fullUrl = "http://example.org/fhir/Claim/ReferralAuthorizationExample"
* entry[5].resource = ReferralAuthorizationExample

Instance: PASClaimInquiryResponseExample
InstanceOf: PASClaimInquiryResponse
Title: "PAS Claim Inquiry ResponseExample"
Description: "An example of a ClaimResponse resource that is a response to a claims inquiry."
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "111099"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "9012345678"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2019-07-20T11:01:00+05:00
* insurer = Reference(InsurerExample)
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(InsuranceExample)
* request = Reference(ReferralAuthorizationExample)
* outcome = #complete
* item.itemSequence = 1
* item.extension[requestedServiceDate].valuePeriod.start = 2005-05-02
* item.extension[requestedServiceDate].valuePeriod.end = 2005-06-02
* item.adjudication.category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* item.adjudication.extension[reviewAction].extension[number].valueString = "AUTH0001"
* item.adjudication.extension[reviewAction].extension[code].valueCodeableConcept = https://codesystem.x12.org/005010/306#A1 "Certified in total"

Instance: UMOExample
InstanceOf: PASRequestor
Title: "Submit Claim Requestor Example"
Description: "A sample organization that is requesting a prior authorization."
* active = true
* type = https://codesystem.x12.org/005010/98#X3
* name = "DR. JOE SMITH CORPORATION"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "8189991234"
* address.line = "111 1ST STREET"
* address.city = "SAN DIEGO"
* address.state = "CA"
* address.country = "US"
* address.postalCode = "92101"

Instance: InsurerExample
InstanceOf: PASInsurer
Title: "Submit Claim Insurer Example"
Description: "A sample payor organization."
* active = true
* type = https://codesystem.x12.org/005010/98#PR
* name = "MARYLAND CAPITAL INSURANCE COMPANY"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1234567893"

Instance: ReferralPractitionerRoleExample
InstanceOf: PASPractitionerRole
Title: "Submit Claim Referral Practitioner Role Example"
Description: "A sample practitioner role instance."
* practitioner = Reference(ReferralPractitionerExample)
* location = Reference(ReferralLocationExample)

Instance: ReferralLocationExample
InstanceOf: PASLocation
Title: "Submit Claim Referral Location Example"
Description: "A sample location."
* name = "REFERRAL CLINIC"
* address.line = "111 1ST STREET"
* address.city = "SAN DIEGO"
* address.state = "CA"
* address.country = "US"
* address.postalCode = "92101"

Instance: ReferralPractitionerExample
InstanceOf: PASPractitioner
Title: "Submit Claim Referral Practitioner Example"
Description: "A sample practitioner who is being referred to."
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1234567893"
* name.family = "WATSON"
* name.given = "SUSAN"
* telecom.system = #phone
* telecom.value = "4029993456"

Instance: InsuranceExample
InstanceOf: PASCoverage
Title: "Submit Claim Insurance Example"
Description: "Sample insurance for a prior authorization."
* status = #active
* subscriberId = "1122334455"
* beneficiary = Reference(SubscriberExample)
* relationship.coding[+] = http://terminology.hl7.org/CodeSystem/subscriber-relationship#self
* relationship.coding[+] = https://codesystem.x12.org/005010/1069#18
* payor = Reference(InsurerExample)

Instance: SubscriberExample
InstanceOf: PASSubscriber
Title: "Submit Claim Subscriber Example"
Description: "Sample patient who is a subscriber of an insurance plan."
* identifier[memberIdentifier].system = "http://example.org/MIN"
* identifier[memberIdentifier].value = "12345678901"
* name.family = "SMITH"
* name.given = "JOE"
* gender = #male
* extension[militaryStatus].valueCodeableConcept = https://codesystem.x12.org/005010/584#RU

Instance: BeneficiaryExample
InstanceOf: PASBeneficiary
Title: "Submit Claim Beneficiary Example"
Description: "Sample patient who is a beneficiary of an insurance plan."
* identifier[memberIdentifier].system = "http://example.org/MIN"
* identifier[memberIdentifier].value = "12345678902"
* name.family = "SMITH"
* name.given = "JESSE"
* gender = #female
* birthDate = 1947-01-18
* address.country = "US"
* multipleBirthInteger = 1

Instance: ReferralRequestExample
InstanceOf: PASServiceRequest
Title: "Submit Claim Referral Request Example"
Description: "A sample referral request that is the subject of a prior authorization."
* status = #active
* intent = #order
* subject = Reference(SubscriberExample)
* code = https://codesystem.x12.org/005010/1365#3 "Consultation"
* quantityQuantity = 1 '1' "visit"

Instance: CommunicationRequestExample
InstanceOf: PASCommunicationRequest
Title: "Communication Request Example"
Description: "A sample communication request asking for more information about a specific diagnosis."
* status = #active
* category = https://codesystem.x12.org/005010/755#15 "Justification for Admissions"
* payload.extension[serviceLineNumber].valuePositiveInt = 1
* payload.extension[communicatedDiagnosis].valueCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#G89.4
* payload.extension[contentModifier].valueCodeableConcept = http://loinc.org#18804-5
* payload.contentString = "18657-7"

Instance: DeviceRequestExample
InstanceOf: PASDeviceRequest
Title: "Device Request Example"
Description: "A sample device request for a wheelchair."
* intent = #order
* status = #active
* codeCodeableConcept = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#E1223
* subject = Reference(BeneficiaryExample)
* authoredOn = 2005-06-02
* requester = Reference(ReferralPractitionerExample)

Instance: NutritionOrderExample
InstanceOf: PASNutritionOrder
Title: "Nutrition Order Example"
Description: "A sample nutrition order."
* intent = #order
* patient = Reference(BeneficiaryExample)
* status = #active
* oralDiet.type = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#B4150
* dateTime = "2005-06-02"

Instance: MedicationRequestExample
InstanceOf: PASMedicationRequest
Title: "Medication Request Example"
Description: "A sample medication request to prescribe a specific drug."
* intent = #order
* status = #active
* medicationCodeableConcept = http://hl7.org/fhir/sid/ndc#0777-3105-02
* subject = Reference(BeneficiaryExample)
* authoredOn = 2005-06-02
* requester = Reference(ReferralPractitionerExample)
* dosageInstruction.timing = TimingExample
* dispenseRequest.quantity = 300 'mg' "mg"

Instance: TimingExample
InstanceOf: PASTiming
Usage: #inline
Title: "Timing Datatype Example"
Description: "An example of a Timing with patterns."
* extension[calendarPattern].valueCodeableConcept = https://codesystem.x12.org/005010/678#L "Monday through Thursday"
* extension[deliveryPattern].valueCodeableConcept = https://codesystem.x12.org/005010/679#D "A.M."

Instance: SurgicalEncounterExample
InstanceOf: PASEncounter
Title: "Encounter Example"
Description: "An example of encounter details for a surgical admission request."
* extension[patientStatus].valueCodeableConcept = https://www.nubc.org/CodeSystem/PatDischargeStatus#30 "Still a patient"
* status = #planned
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* type = https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit#2
* subject = Reference(SubscriberExample)
* period.start = "2020-07-02"
* period.end = "2020-07-09"
* hospitalization.admitSource = https://www.nubc.org/CodeSystem/PointOfOrigin#5

Instance: SurgicalRequestBundleExample
InstanceOf: PASRequestBundle
Title: "Surgical Admission Request Bundle Example"
Description: "An example of a Claim bundle requesting prior authorization of a surgical service."
* identifier.system = "http://example.org/SUBMITTER_TRANSACTION_IDENTIFIER"
* identifier.value = "16139462398"
* type = #collection
* timestamp = 2020-06-24T07:34:00+05:00
* entry[Claim].fullUrl = "http://example.org/fhir/Claim/SurgicalAuthorizationRequestExample"
* entry[Claim].resource = SurgicalAuthorizationRequestExample
* entry[1].fullUrl = "http://example.org/fhir/Organization/UMOExample"
* entry[1].resource = UMOExample
* entry[2].fullUrl = "http://example.org/fhir/Organization/InsurerExample"
* entry[2].resource = InsurerExample
* entry[3].fullUrl = "http://example.org/fhir/Coverage/InsuranceExample"
* entry[3].resource = InsuranceExample
* entry[4].fullUrl = "http://example.org/fhir/Patient/SubscriberExample"
* entry[4].resource = SubscriberExample
* entry[5].fullUrl = "http://example.org/fhir/Encounter/SurgicalEncounterExample"
* entry[5].resource = SurgicalEncounterExample
* entry[6].fullUrl = "http://example.org/fhir/PractitionerRole/SurgicalPractitionerRoleExample"
* entry[6].resource = SurgicalPractitionerRoleExample
* entry[7].fullUrl = "http://example.org/fhir/Practitioner/SurgicalPractitionerExample"
* entry[7].resource = SurgicalPractitionerExample
* entry[8].fullUrl = "http://example.org/fhir/Location/SurgicalLocationExample"
* entry[8].resource = SurgicalLocationExample

Instance: SurgicalAuthorizationRequestExample
InstanceOf: PASClaim
Title: "Surgical Request Authorization Example"
Description: "An example of a Claim resource requesting prior authorization of a surgical service."
* extension[levelOfServiceType].valueCodeableConcept = https://codesystem.x12.org/005010/1338#E "Elective"
* extension[encounter].valueReference = Reference(SurgicalEncounterExample)
* extension[conditionCode].extension[category].valueCodeableConcept = https://codesystem.x12.org/005010/1136#07
* extension[conditionCode].extension[indicator].valueBoolean = true
* extension[conditionCode].extension[code].valueCodeableConcept = https://codesystem.x12.org/005010/1321#09
* identifier.system = "http://example.org/PATIENT_EVENT_TRACE_NUMBER"
* identifier.value = "16139462398"
* identifier.assigner.identifier.system = "http://example.org/USER_ASSIGNED"
* identifier.assigner.identifier.value = "3030240928"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#institutional
* use = #preauthorization
* patient = Reference(SubscriberExample)
* created = 2020-06-24T07:34:00+05:00
* insurer = Reference(InsurerExample)
* provider = Reference(UMOExample)
* priority = http://terminology.hl7.org/CodeSystem/processpriority#normal
* diagnosis.sequence = 1
* diagnosis.diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#C18.9
* diagnosis.extension[recordedDate].valueDate = "2020-06-24"
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(InsuranceExample)
* supportingInfo[AdmissionDates].sequence = 1
* supportingInfo[AdmissionDates].timingPeriod.start = "2020-07-02"
* supportingInfo[AdmissionDates].timingPeriod.end = "2020-07-09"
* item.extension[itemTraceNumber].valueIdentifier.system = "http://example.org/ITEM_TRACE_NUMBER"
* item.extension[itemTraceNumber].valueIdentifier.value = "1122334"
* item.extension[authorizationNumber].valueString = "1122445"
* item.extension[administrationReferenceNumber].valueString = "9988311"
* item.extension[requestType].valueCodeableConcept = https://codesystem.x12.org/005010/1525#AR "Admission Review"
* item.extension[certificationType].valueCodeableConcept = https://codesystem.x12.org/005010/1322#I "Initial"
* item.sequence = 1
* item.careTeamSequence = 1
* item.diagnosisSequence = 1
* item.category = https://codesystem.x12.org/005010/1365#2 "Surgical"
* item.productOrService = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#33510 "Under Venous Grafting Only for Coronary Artery Bypass"
* item.locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
* careTeam.sequence = 1
* careTeam.extension[careTeamClaimScope].valueBoolean = true
* careTeam.provider = Reference(SurgicalPractitionerRoleExample)

Instance: SurgicalPractitionerRoleExample
InstanceOf: PASPractitionerRole
Title: "Submit Claim Surgical Practitioner Role Example"
Description: "A sample practitioner role instance."
* practitioner = Reference(ReferralPractitionerExample)
* location = Reference(ReferralLocationExample)

Instance: SurgicalLocationExample
InstanceOf: PASLocation
Title: "Submit Claim Surgical Location Example"
Description: "A sample location."
* name = "REFERRAL CLINIC"
* address.line = "111 1ST STREET"
* address.city = "SAN DIEGO"
* address.state = "CA"
* address.country = "US"
* address.postalCode = "92101"

Instance: SurgicalPractitionerExample
InstanceOf: PASPractitioner
Title: "Submit Claim Surgical Practitioner Example"
Description: "A sample practitioner who is being referred to."
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1234567893"
* name.family = "WATSON"
* name.given = "SUSAN"
* telecom.system = #phone
* telecom.value = "4029993456"

Instance: AdditionalInformationTaskExample
InstanceOf: PASTask
Title: "Additional Information Task Example"
Description: "An example of a PAS Task requesting additional information."
* identifier.system = "http://example.org/ITEM_TRACE_NUMBER"
* identifier.value = "1122334"
* status = http://hl7.org/fhir/task-status#requested
* intent = #order
* code = PASTempCodes#attachment-request-code
* requester.identifier.system = "http://hl7.org/fhir/sid/us-npi"
* requester.identifier.value = "789312"
* owner.identifier.system = "http://hl7.org/fhir/sid/us-npi"
* owner.identifier.value = "789312"
* for = Reference(BeneficiaryExample)
* reasonCode
* reasonReference = Reference(MedicalServicesAuthorizationExample)
* input[PayerURL].valueUrl = "http://example.org/payerURL"
* input[AttachmentsNeeded].valueCodeableConcept = http://loinc.org#28570-0
* input[AttachmentsNeeded].extension[paLineNumber].valueInteger = 1

Instance: PASSubscriptionExample
InstanceOf: PASSubscription
Title: "PAS Subscription example for a specific provider"
Description: "An example of a PAS Subscription submission for a specific provider."
* criteria.extension[filterCriteria].valueString = "orgIdentifier=http://hl7.org/fhir/sid/us-npi|1234567893"
* channel.endpoint = "http://example.org/send-me-subscription-notifications"
* channel.payload = #application/fhir+json
* channel.payload.extension[payloadContent].valueCode = #full-resource
* reason = "Receive notifications about claim responses for my organization."

Instance: PASSubscriptionNotification
InstanceOf: Bundle
Title: "PAS Subscription Notification example"
Description: "An example of a PAS Subscription Notification"
* type = #history
* timestamp = 2020-05-29T11:44:33.188-05:00
* entry[+].fullUrl = "http://example.org/Parameters/SubscriptionNotificationParameters"
* entry[=].resource = SubscriptionNotificationParameters
* entry[=].request.method = #GET
* entry[=].request.url = "https://example.org/Subscription/PAS/$status"
* entry[=].response.status = "200"
* entry[+].fullUrl = "http://example.org/Bundle/ReferralAuthorizationResponseBundleExample"
* entry[=].resource = ReferralAuthorizationResponseBundleExample
* entry[=].request.method = #GET
* entry[=].request.url = "https://example.org/Bundle/ReferralAuthorizationResponseBundleExample"
* entry[=].response.status = "200"

Instance: SubscriptionNotificationParameters
InstanceOf: Parameters
Title: "PAS Subscription Notification Parameters"
Description: "An example of the parameters going back for a PAS subscription notification"
* parameter[+]
  * name = "subscription"
  * valueReference = Reference(PASSubscription)
* parameter[+]
  * name = "topic"
  * valueCanonical = "http://hl7.org/fhir/us/davinci-pas/SubscriptionTopic/PASSubscriptionTopic|2.1.0"
* parameter[+]
  * name = "type"
  * valueCode = #event-notification
* parameter[+]
  * name = "notification-event"
  * part[+]
    * name = "event-number"
    * valueString = "2"
  * part[+]
    * name = "timestamp"
    * valueInstant = "2020-05-29T11:44:33.188-05:00"
  * part[+]
    * name = "focus"
    * valueReference.reference = "http://example.org/Bundle/ReferralAuthorizationResponseBundleExample"


---

