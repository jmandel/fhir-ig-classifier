File: repos/HL7_SLASH_davinci-crd/sushi-config.yaml

# ╭─────────────────────────────────ImplementationGuide-fish.json──────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  https://fshschool.org/docs/sushi/configuration/#full-configuration                            │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
instanceOptions:
  setMetaProfile: never
  manualSliceOrdering: true
id: davinci-crd
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
    valueInteger: 3
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: fm
canonical: http://hl7.org/fhir/us/davinci-crd
version: 2.1.0
name: CoverageRequirementsDiscovery
title: Da Vinci - Coverage Requirements Discovery
status: active
experimental: false
publisher:
  name: HL7 International / Financial Management
contact:
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/fm
description:  Guidelines for conveying coverage requirements to clinicians when planning treatment
jurisdiction: urn:iso:std:iso:3166#US
packageId: hl7.fhir.us.davinci-crd
license: CC0-1.0
fhirVersion: 4.0.1
parameters:
  path-expansion-params: "../../input/terminology-settings.json"
  auto-oid-root: 2.16.840.1.113883.4.642.40.18
  apply-publisher: true
  apply-contact: true
  globals-in-artifacts: true
  version-comparison: 
   - 2.0.0
   - 2.1.0-preview
  shownav: true

#  path-binary: input/hooks-files
    
copyrightYear: 2019+
releaseLabel: STU 2.1


# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
dependencies:
  hl7.fhir.us.core:
    id: uscore7
    version: 7.0.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    reason: |
      Defines USCDI v4 EHR expectations on a range of resources that will be passed to and/or queried by CRD servers.  
  hl7.fhir.us.core.v610:
    id: uscore6
    version: 6.1.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    reason: |
      Defines USCDI v3 EHR expectations on a range of resources that will be passed to and/or queried by CRD servers
  hl7.fhir.us.core.v311:
    id: uscore3
    version: 3.1.1
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    reason: |
      Defines USCDI v1 EHR expectations on a range of resources that will be passed to and/or queried by CRD servers.  
  hl7.fhir.uv.sdc:
    id: sdc
    version: 3.0.0
    reason: |
      Defines expectations for Questionnaires prompted for by cards
  hl7.fhir.us.davinci-hrex:
    id: hrex
    version: 1.1.0
    reason: |
      Defines common conformance rules across all Da Vinci IGs, as well as additional constraints and profiles beyond U.S. Core
  hl7.fhir.extensions.r5:
    id: r5ext
    version: 4.0.1
    reason: |
      Makes available certain R5 elements for use as part of this R4 IG
  us.nlm.vsac:
    id: vsac
    uri: http://fhir.org/packages/us.nlm.vsac/ImplementationGuide/us.nlm.vsac
    version: 0.19.0
    reason: |
      Uses the latest version of the VSAC codes
pages:
  index.md:
    title: CRD IG Home Page
  background.md:
    title: Reading this IG
  usecases.md:
    title: Use Cases
  credits.md:
    title: Project and Participants
  burden.md:
    title: Burden Reduction
  epa.md:
    title: ePA Coordinators
  conformance.md:
    title: Conformance Expectations
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
  security.md:
    title: Privacy, Safety, and Security
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
  foundation.md:
    title: Foundational Requirements
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
  deviations.md:
    title: CDS Hook Deviations and Enhancements
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
  hooks.md:
    title: Supported Hooks
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
  cards.md:
    title: CDS Hook Response Profiles
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
  implementation.md:
    title: Implementation Considerations
    extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
  metrics.md:
    title: CRD Metrics
  allartifacts.md:
    title: FHIR Artifacts
    artifacts.html:
      title: Artifact List
  downloads.md:
    title: Downloads
  history.md:
    title: Change History
groups:
  -str-logicalmodel-hooks:
    name: "Structures: CDS Hooks Extensions"
    description: "Models that define extensions on CDS Hooks JSON structures"
    resources:
      - CDSHookServicesExtensionConfiguration
      - CDSHookServiceResponseExtensionIfNoneExist
      - CDSHookServiceResponseExtensionAssociatedResource
      - CDSHookServiceRequestExtensionRequestConfig
  -ex-example-hooks:
    name: "Example: CDS Hooks Examples"
    description: "Examples of CDS Hooks JSON instances"
resources:
  Binary/CRDServices:
    groupingId: "-ex-example-hooks"
    name: "Example CRD Services Response"
    description: "An example of a CRD services response"
    extension:
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-format
        valueCode: application/json
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-logical
        valueCanonical: http://hl7.org/fhir/tools/StructureDefinition/CDSHooksServices
  Binary/CRDServiceRequest:
    groupingId: "-ex-example-hooks"
    name: "Example CRD Service Requestion with MedicationRequests"
    description: "An example of a CRD request for order-sign with MedicationRequests"
    extension:
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-format
        valueCode: application/json
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-logical
        valueCanonical: http://hl7.org/fhir/tools/StructureDefinition/CDSHooksRequest
  Binary/CRDServiceRequest2:
    groupingId: "-ex-example-hooks"
    name: "Example CRD Service Request with ServiceRequests"
    description: "An example of a CRD request for order-sign with ServiceRequests"
    extension:
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-format
        valueCode: application/json
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-logical
        valueCanonical: http://hl7.org/fhir/tools/StructureDefinition/CDSHooksRequest
  Binary/CRDServiceResponse:
    groupingId: "-ex-example-hooks"
    name: "Example CRD Service Response"
    description: "An example of a CRD response with links"
    extension:
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-format
        valueCode: application/json
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-logical
        valueCanonical: http://hl7.org/fhir/tools/StructureDefinition/CDSHooksResponse
  Binary/CRDServiceResponse2:
    groupingId: "-ex-example-hooks"
    name: "Example CRD Service Response - Coverage Information"
    description: "An example CRD response with Coverage Information extension"
    extension:
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-format
        valueCode: application/json
      - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-logical
        valueCanonical: http://hl7.org/fhir/tools/StructureDefinition/CDSHooksResponse
  Bundle/search-request:
    name: "Example EHR search"
    description: "Sample of an CRD service searching an EHR that does not support prefetch"
  Bundle/search-response:
    name: "Example EHR response"
    description: "The response to a CRD service query for information not returned in prefetch"



---

// File: input/pagecontent/allartifacts.md

Compliance with this implementation guide requires compliance with several profiles, extensions, and value sets. This page provides an overview of where these artifacts can be found.

The FHIR artifacts used by CRD are organized according to whether the content was developed as part of the US Core implementation guides or are specific to this CRD implementation guide.

As a result, there are 2 different lists of artifacts: one for this Da Vinci implementation guide and one for the US Core implementation guide.

### Artifact Lists
<table>
  <tr>
    <td><a href="artifacts.html">CRD-Specific Artifacts</a></td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.ver.uscore3}}/profiles.html">US Core 3.1 artifacts</a></td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.ver.uscore6}}/profiles-and-extensions.html">US Core 6.1 artifacts</a></td>
  </tr>
  <tr>
    <td><a href="{{site.data.fhir.ver.uscore7}}/profiles-and-extensions.html">US Core 7.0 artifacts</a></td>
  </tr>
</table>

Additional information about the use of these artifacts, Coverage Requirements Discovery (CRD), and the use of US Core can be found in the [Conformance section](conformance.html#profiles).

These FHIR artifacts define the clinical data that can be provided by CRD clients when invoking CDS Hooks, queried (or retrieved using [prefetch](foundation.html#prefetch)) from CRD clients by CRD servers and/or returned to client systems by hook services within [cards](cards.html).

The artifacts are of four types:

* [Profiles]({{site.data.fhir.path}}profiling.html) constrain FHIR resources to reflect CRD requirements
* [Extensions]({{site.data.fhir.path}}extensibility.html) define additional data elements that can be conveyed as part of a resource
* [Code Systems]({{site.data.fhir.path}}codesystem.html) define terminologies to be used in one or more of the profiles
* [Value Sets]({{site.data.fhir.path}}valueset.html) define the specific subsets of both CRD-defined and other code systems that must be (or are recommended to be) used within one or more profile elements

For this implementation guide, [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) means that CRD clients must be capable of exposing the data to at least some CRD servers. CRD servers are not obligated to make use of Must Support elements when performing their coverage requirements discovery.

<!-- Todo: examples, capabilitystatement, TestScenario? -->

---

// File: input/pagecontent/background.md

### Underlying Technologies
This guide is based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard, as well as the [CDS Hooks](https://cds-hooks.hl7.org) and [SMART on FHIR](http://hl7.org/fhir/smart-app-launch/index.html) specifications, which build additional capabilities on top of FHIR. This architecture is intended to maximize the number of provider systems that conform to this guide, as well as to allow for easy growth and extensibility of system capabilities in the future.

Implementers of this specification therefore need to understand some basic information about these referenced specifications.

#### FHIR

This implementation guide uses terminology, notations and design principles that are specific to FHIR. Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this implementation guide.

* [FHIR Overview]({{site.data.fhir.path}}overview.html)
* [Developer's Introduction]({{site.data.fhir.path}}overview-dev.html) (or [Clinical Introduction]({{site.data.fhir.path}}overview-clinical.html))
* [FHIR Data Types]({{site.data.fhir.path}}datatypes.html)
* [Using Codes]({{site.data.fhir.path}}terminologies.html)
* [References Between Resources]({{site.data.fhir.path}}references.html)
* [How to Read Resource & Profile Definitions]({{site.data.fhir.path}}formats.html) and additional [IG reading guidance](https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html)
* [Base Resource]({{site.data.fhir.path}}resource.html)

This implementation guide supports the [R4]({{site.data.fhir.path}}index.html) version of the FHIR standard and builds on the US Core [3.1 (USCDI v1)]({{site.data.fhir.ver.uscore3}}), [6.1 (USCDI v3)]({{site.data.fhir.ver.uscore6}}) and [7.0 (USCDI v4)]({{site.data.fhir.ver.uscore7}}) implementation guides and implementers need to familiarize themselves with the profiles in those guides. The profiles in this IG conform with all three releases of US Core. CRD clients **SHALL** support at least one of the three profiles (and versions of US Core). CRD servers **SHALL** be able to handle all three.

This IG also draws on content from the [Davinci Health Record Exchange (HRex)]({{site.data.fhir.ver.hrex}}) and [Structured Data Capture (SDC)]({{site.data.fhir.ver.sdc}}) implementation guides.

Implementers should also familiarize themselves with the FHIR resources used within the guide:

<table>
  <thead>
    <tr>
      <th>Resource</th>
      <th>Relevance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><a href="{{site.data.fhir.path}}appointment.html">Appointment</a></td><td>One of the resources that can trigger payer decision support</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}binary.html">Binary</a></td><td>Used to represent example instances of CDS Hook JSON structions</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}bundle.html">Bundle</a></td><td>Used when delivering collections of resources in a CDS Hook call, also used for queries</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}capabilitystatement.html">CapabilityStatement</a></td><td>Used to define conformance expectations for this guide</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}codesystem.html">CodeSystem</a></td><td>Used to define custom codes specific to this guide</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}conceptmap.html">ConceptMap</a></td><td>Used to map location codes between terminologies</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}coverage.html">Coverage</a></td><td>Used to identify the member and the relevant insurance coverage to a payer</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}communicationrequest.html">CommunicationRequest</a></td><td>One of the resources that can trigger payer decision support</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}device.html">Device</a></td><td>Supporting information for device requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}devicerequest.html">DeviceRequest</a></td><td>One of the resources that can trigger payer decision support</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}encounter.html">Encounter</a></td><td>Oner of the resources that can trigger payer decision support, and also provides context for other resources</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}location.html">Location</a></td><td>Supporting information for encounters and request resources</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}organization.html">Organization</a></td><td>Used when identifying providers in Encounters, Tasks, and all requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}medication.html">Medication</a></td><td>Supporting information for medication requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}medicationrequest.html">MedicationRequest</a></td><td>One of the resources that can trigger payer decision support</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}nutritionorder.html">NutritionOrder</a></td><td>One of the resources that can trigger payer decision support</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}patient.html">Patient</a></td><td>Demographic information relevant to all requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}practitioner.html">Practitioner</a></td><td>Used when identifying providers in Encounters, Tasks, and all requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}practitionerrole.html">PractitionerRole</a></td><td>Used when identifying providers in Encounters, Tasks, and all requests</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}questionnaire.html">Questionnaire</a></td><td>Used to support capture of additional information when not using DTR</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}servicerequest.html">ServiceRequest</a></td><td>One of the resources that can trigger payer decision support</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}structuredefinition.html">StructureDefinition</a></td><td>Used when profiling resource, defining extensions, and defining profiles and extensions on CDS Hook models</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}task.html">Task</a></td><td></td></tr>
    <tr><td><a href="{{site.data.fhir.path}}valueset.html">ValueSet</a></td><td>Used to define collections of codes used by CRD profiles</td></tr>
    <tr><td><a href="{{site.data.fhir.path}}visionprescription.html">VisionPrescription</a></td><td>One of the resources that can trigger payer decision support</td></tr>
  </tbody>
</table>

#### CDS Hooks
Provider systems will use the specification and workflows defined by [CDS Hooks 2.0](https://cds-hooks.hl7.org/2.0) to initiate Coverage Requirements Discovery with the payers. Implementers must be familiar with all aspects of this specification.

#### SMART on FHIR
SMART on FHIR is expected to be used in two principal ways:

##### *Ad Hoc* Coverage Requirements Discovery
CDS Hooks provides a mechanism for payers to advise clinicians on coverage requirements as part of their regular workflow: when ordering medications, making referrals, scheduling appointments, discharging patients, etc. However, sometimes clinicians may be interested in learning about coverage requirements without going through the workflow steps within their CRD client. In this case, they don't want to actually create a referral, they just want to ask the question "what would the requirements or recommendations be if I *wanted* to create a referral?

Such recommendations might be from decision support (such as ImmunizationRecommendation or a CarePlan with an intent of 'proposed') or from standard protocols (e.g. "this patient is due for a pap smear").  In such cases, the EHR can support automated generation of 'draft' requests (such as MedicationRequest or ServiceRequest) based on the decision support or protocol resources and use them when invoking CRD.  Alternatively, the EHR might support launching a SMART on FHIR app that would capture the key information needed to drive a CRD response.

Discussion of how a SMART on FHIR app can be used to trigger CDS Hooks from within an CRD client to perform such what-if scenarios can be found [here](foundation.html#smart-on-fhir-hook-invocation).

##### Apps for Decision Support
Payers may recommend the launch of SMART apps that are relevant to the activity the user is performing. For example, an app might help guide order creation for specialized patient needs, help evaluate alternative therapies, determine whether complementary therapy is necessary/appropriate, etc. These might have clinical or administrative purposes. Recommendations for such apps would be returned by the [SMART app response ype](cards.html#launch-smart-application-response-type).

### Architectural Approach
The approach taken to meet the requirements of the CRD use-case was selected after evaluating the various interoperability choices provided by FHIR. Specifically, the project team evaluated the possible architectural approaches as described in the HRex specification's [Approaches to Exchanging FHIR Data]({{site.data.fhir.ver.hrex}}/exchanging.html) guide. The following bullets describe the path choices driven by use-case requirements:

* *Direct connection?* - Yes - it was presumed that CRD client systems could connect directly either with the payer or with a payer-provided service.
* *Consumer initiates?* - Yes - the provider system needing decision support would trigger the support, because only the provider system would know when support was needed.
* *Human intervention?* - No - there was no expectation that a human would need to be involved on the data source (payer) side to determine what guidance should be provided. The requirement was for real-time guidance, which meant any guidance provided had to be automatic.
* *Is data pre-existing?* - No - in decision support, we're generating context-specific guidance that didn't previously exist, even if some of the resources pointed to might have been pre-existing.
* *CDS Hooks?* - Yes - CDS Hooks were a good fit for the workflow we needed. There was no need to define custom operations or messages to meet our use cases.

NOTE: Because of the sensitivity around disclosure of clinical information to payer-controlled systems during the clinical workflow process, this IG imposes a number of safeguards around the use of the selected CDS Hooks technology to help ensure that providers and their systems have an appropriate degree of control over disclosure and that information can't be used in inappropriate ways.

---

// File: input/pagecontent/burden.md

{% include burdenReduction.md %}

### Systems
The CRD implementation guide defines the responsibilities of the two types of systems involved in a CRD solution:

**CRD clients** are typically systems that healthcare providers use at the point of care including electronic medical records systems, pharmacy systems, and other provider and administrative systems used for ordering, documenting, and executing patient-related services. Users of these systems need coverage requirements information to support care planning.

**CRD servers** (or servers) are systems that act on behalf of payer organizations to share information with healthcare providers about rules and requirements related to healthcare products and services covered by a patient's health plan. A CRD server will provide coverage information related to one or more insurance plans. CRD servers are a type of CDS service as defined in the CDS Hooks Specification.

### Users
The 'CDS' in 'CDS Hooks' stands for 'Clinical Decision Support'. However, the mechanism actually supports a variety of types of decision support and the responsible HL7 work group has confirmed that conveying guidance that isn't strictly clinical, and providing guidance to non-clinical users (clerks, schedulers, etc.) is appropriate. Because all decision support provided by a CRD server is fully automated, there will be no human intervention on the payer side. If an automated system doesn't have enough information to provide guidance without human input, then no guidance will be provided.



---

// File: input/pagecontent/cards.md

CDS Hooks defines two different mechanisms for services to respond to a hook call: cards and system actions. This page profiles (constrains) the general rules for these responses from the CDS Hooks specification to reflect how they must be used when complying with this CRD specification.

### General Card and SystemAction rules

In addition to the [guidance provided in the CDS Hooks specification](https://cds-hooks.hl7.org/2.0/#card-attributes), the following additional guidance applies to CRD services when constructing cards:

*  The `Card.indicator` **SHOULD** be populated from the perspective of the clinical decision maker, not the payer. While failure to procure a prior authorization might be 'critical' from the perspective of payment, it would be - at best - a 'warning' from the perspective of clinical care. 'critical' must be reserved for reporting life or death or serious clinical outcomes. Issues where the proposed course of action will negatively affect the ability of the payer or patient to be reimbursed would generally be a 'warning'. Most Coverage Requirements **SHOULD** be marked as 'info'.

*  All `Card.suggestion` elements **SHALL** populate the Suggestion.uuid element.

*  The `Card.source.label` **SHOULD** be populated with an insurer name that the user and patient would recognize (i.e., the responsible insurer on the patient's insurance card), including in situations where coverage recommendations are being returned by a benefits manager or intermediary operating the CRD Service on behalf of the payer. If an insurer is providing recommendations from another authority (e.g., a clinical society), the society's name and logo might be displayed, though usually only with the permission of that organization.

*  `Card.source.topic` **SHALL** be populated, and has an [extensible](http://www.hl7.org/fhir/terminologies.html#extensible) binding to the ValueSet <a href="ValueSet-cardType.html">CRD Response Types.</a> The rationale is to allow CRD clients to filter or track the usage of different types of cards.

*  Users are busy. Time spent reading a payer-returned card is time taken from reviewing other information or interacting with the patient. If not useful or relevant, users will quickly learn to ignore - or even demand the disabling of - payer-provided alerts. Therefore, information must be delivered efficiently and be tuned to provide maximum relevance. Specifically:

    *  `Card.summary` **SHOULD** provide actionable information. "Coverage alert" would not be very helpful. "Drug not covered. Covered alternatives available" or "Prior authorization required" would be better.

    *  `Card.detail` and/or external links **SHOULD** only be provided when coverage recommendations can't be clearly provided in the 140-character limit of `Card.summary`.

    *  `Card.detail` **SHOULD** provide graduated information, with critical information being provided in the first paragraph and less critical information towards the end of the page.

    *  `Card.detail` **SHOULD** provide enough context that a user can determine whether it is worth their time to launch an app or follow an external link, ideally providing a sense of where to look for and how to use whatever link or app they launch in the specific context of the order they're making.

    *  Keep the number of cards manageable. Consider whether user workflow will be faster with separate cards for each link or a single card having multiple links. Typically it is best to use the smallest number of cards that still support descriptive and actionable summaries.

    *  When providing links, don't send the user to the first page of a large document. Keep document size short and/or link directly to the section that is relevant for the context.

    *  While links are permitted in the markdown content of `Card.detail`, support for this is not universal, so links **SHOULD** also be provided in `Card.link`. This also provides a consistent place for users to access all relevant links.

* CRD client systems might not support all card capabilities, therefore card options **SHOULD** provide sufficient information for a user to perform record changes manually if automated support isn't available.

* Where <a href="https://cds-hooks.hl7.org/2.0/#system-action">systemActions</a> are used, CRD services **SHOULD NOT** return equivalent information in a card for user display. It is the responsibility of the CRD client to determine how best to present the results of the newly created or revised records.

### Potential CRD Response Types
The sections below describe the different types of [responses](https://cds-hooks.hl7.org/2.0/#cds-service-response) that CRD services can use when returning coverage requirements to CRD clients, including CRD-specific profiles on cards to describe CRD-expected behavior. It is possible that some CRD services and CRD clients will support response patterns other than those listed here, but such behavior is outside the scope of this specification. Future versions of this specification might standardize additional response types.

Of the response types in this guide, conformant CRD clients **SHALL** support the [External Reference](#external-reference-response-type), [Instructions](#instructions-response-type), and [Coverage Information](#coverage-information-response-type) responses and **SHOULD** support the remaining types.

CRD services **SHALL**, at minimum, demonstrate an ability to return the same as those listed as ‘SHALL’ for clients above. Also see specific support expectations for the [coverage information response type](#coverage-information-response-type).

NOTE: Support for a response type does not mean that all orders, appointments, etc. will necessarily receive card guidance, merely that it must be able to return those response types for at least a subset of CRD invocations.

Provision of and acceptance of decision support cards outside the coverage and documentation requirements space is optional (for both server and client). CRD services that provide decision support for domains outside of coverage and/or documentation requirements are expected to only provide decision support that the CRD client cannot do alone. To minimize duplicate alerts and provider burden, CRD services that provide decision support for domains outside of coverage and/or documentation requirements **SHOULD** take reasonable steps to check that the CRD client does not have the information within its store that would allow it to detect the issue itself. If the information already exists in the CRD client, then the obligation is on the CRD client to manage the issue detection and reporting in its own manner and CRD services should not get involved.

Response types are listed from least sophisticated to most sophisticated, and potentially more useful or powerful. As a rule, the more a response can automate manual processes and the more context-specific the behavior is, the more useful the decision support will be to the clinician and the more likely it will be used.

Notes:
* CRD clients will provide resources, such as MedicationRequest, in the context object of the CDS Hook request. These resources might be temporary in the context in which the CDS Hook is triggered, such as when a proposed medication order is being reviewed. In this case, the CDS client must maintain a stable identifier for these temporary resources to allow CRD responses to refer to them in CDS Hook actions.

* Hook responses may contain multiple cards and/or system actions corresponding to a mixture of the response types defined in this IG. For example, providing links, textual guidance, as well as suggestions for alternative orders.

* The response types listed here are *not* the same as the [Configuration Options](deviations.html#configuration-options-extension) specified above. A single response type could correspond to multiple configuration options. For example, [External Reference](#external-reference-response-type) could apply to clinical practice guidelines, prior authorization requirements, claims attachment requirements, and other things. Similarly, one configuration option could be satisfied with multiple response types. For example, required prior authorization forms could include both [External References](#external-reference-response-type) and explicit [Request Form Completion](#request-form-completion-response-type) responses.

### External Reference Response Type
This response type presents a card with one or more links to external web pages, PDFs, or other resources that provide relevant coverage information. The links might provide clinical guidelines, prior authorization requirements, printable forms, etc. Typically, these references would be links to information available from the payer's website, though pointers to other authoritative sources are possible too. CRD services **SHALL NOT** use these cards to direct users to a portal for the purpose of initiating prior authorization or determining coverage. Use the [Coverage Information](#coverage-information-response-type) response instead.

The card **SHALL** have at least one `Card.link`. The `Link.type` **SHALL** have a type of "absolute".

When reasonable, an "External Reference" card **SHOULD** contain a summary of the actionable information from the external reference in the `detail` element.

For example, this CDS Hooks [Card](https://cds-hooks.hl7.org/2.0/#cds-service-response) contains two [Links](https://cds-hooks.hl7.org/2.0/#link) - a standard and a printer-friendly version.

{% fragment Binary/CRDServiceResponse JSON BASE:cards.where(links.exists()) %}

<p>As much as technically possible, links provided <strong>SHOULD</strong> be 'deep' links that take the user to the specific place in the documentation relevant to the current hook context to minimize provider reading and navigation time.</p>


### Instructions Response Type
This response type presents a card with textual guidance to display to the user making the decisions. The text might provide clinical guidelines, suggested changes, or rules around prior authorization. It can be generated in a more sophisticated context for the payer, while remaining easy to consume for the provider because it allows returned information to be tuned to the specific context of the order/encounter that triggered the hook. In some cases, the text returned might be generated uniquely each time a hook is fired. CRD services **SHALL NOT** use these cards to direct users to a portal for the purpose of initiating prior authorization or determining coverage. Use the [Coverage Information](#coverage-information-response-type) response instead.

This example CDS Hook [card](https://cds-hooks.hl7.org/2.0/#cds-service-response) just contains a message:

{% fragment Binary/CRDServiceResponse JSON BASE:cards.where(source.topic.where(code='clinical-reminder').exists()) %}

### Coverage Information Response Type
This response type uses a <a href="https://cds-hooks.hl7.org/2.0/#system-action">systemAction</a> to automatically update the order or other resource in the CRD client with an extension that conveys information related to the coverage of the order. As discussed on the [home page](index.html#cmsdiscretion), the functionality of this response type has been enhanced to allow directly returning a prior authorization number as part of a CRD response.  Regardless of the content, this response type **SHALL NOT** use a card.

Support expectations for this hook by CDS services are as follows:

1. Payers **SHALL** support supplying coverage information for all primary hooks: order-sign, order-dispatch, and appointment-book.
2. Payers **MAY** support supplying coverage information for all other hooks.
3. Payers **SHALL** supply coverage information for all hooks where they support it unless the EHR sends a configuration option asking them not to.
4. If coverage information is evaluated, a system action **SHALL** be returned for each in-scope request resource unless that request resource already has a coverage-information extension and the payer has no new information to add.

A new FHIR [coverage-information](StructureDefinition-ext-coverage-information.html) extension is defined that allows assertions around coverage and prior authorization to also be captured computably, including what assertion is made, what coverage the assertion is made with respect to, when the assertion was made, and - optionally - a trace ID that can be used for audit purposes.

Assertions about coverage, prior authorization requirements, etc. are contingent on the eventual claim for the ordered service being aligned with payer expectations. Because the order/appointment/etc. will not have the same information that would typically be included in a formal request for prior authorization or pre-determination, the payer will need to infer from the order what billing codes, qualifiers, dollar amounts, etc. would typically be involved. In some cases, the answer might differ depending on factors such as in/out of network, when the service is delivered, etc. These qualifiers around when the coverage assertion is considered valid **SHALL** be included as part of the annotation.

If a CRD service has provided limitations about when a coverage assertion applies that turn out to not be consistent with what the provider intends to do (e.g., payer says "covered if billed as X", but provider intends to bill as Y), then the provider can always use the normal prior authorization process to solicit an authorization that more precisely aligns with their expectations for how the service will eventually be billed.

If a CRD client submits a claim related to an order for which it has received a coverage-information extension for the coverage type associated with the claim, that claim **SHALL** include the `coverage-assertion-id` and, if applicable, the `satisfied-pa-id` in the X12 837 K3 segment. Further details about the specific location of each element will be available in the X12 specifications. These identifiers will provide the necessary context to allow the payer to respect any commitments made as part of the CRD call and also to link together CRD results and eventual claims for analytics purposes.

In some cases, multiple *coverage-information* extension repetitions may be added by the CRD service. This might represent different guidance for different coverages the service supports for the same patient or different expectations (related to coverage, prior auth, or additional information) for different billing codes, different qualifiers (e.g., in-network vs out-of-network), etc. If multiple extension repetitions are present, all repetitions referencing differing insurance (coverage-information.coverage) **SHALL** have distinct coverage-assertion-ids and satisfied-pa-ids, if present. Where multiple repetitions apply to the same coverage, they **SHALL** have the same coverage-assertion-ids and satisfied-pa-ids (if present). It is possible that some repetitions for a coverage might have satisfied prior authorization with an ID, while others will not.

Systems **MAY** make calls related to orders even if there is already a coverage assertion recorded on the order. There is always the possibility that context has changed or new information available in the order will result in a new decision or additional guidance. The payer might also have other useful information not related to coverage or authorization. Information about the order or context might change between an initial `order-select` or `order-sign` and a subsequent `order-dispatch` or other hook invocation.

However, payers **SHALL NOT** send a system action to update the order unless something is new. Payers **SHOULD** take into account the previous decision in deciding how much processing is necessary before returning a response.

If a *coverage-information* extension indicates the need to collect additional information (via 'doc-needed'), the extension **SHOULD** include a reference to the questionnaire(s) to be completed. If the payer supports Da Vinci DTR, the indicated forms will be the ones completed within the DTR form filler.  If no Questionnaires are specified, DTR will determine the needed forms itself.  For systems that don't support DTR (e.g. because the coverage isn't subject to regulation mandating DTR), the indicated Questionnaire canonicals can be used to determine data to be gathered in some other (non-DTR) way.

When a *coverage-information* response type indicates that additional clinical documentation is needed and the CRD client supports DTR, CRD clients **SHALL** ensure that clinical users have an opportunity to launch their DTR solution as part of the current workflow. Where a *coverage-information* response indicates that additional administrative documentation is needed, CRD clients **SHOULD** allow clinical users to have an opportunity to launch their DTR solution, but **SHOULD** make it clear that the information to be captured is non-clinical.

NOTE: Launching DTR does not necessarily mean launching a SMART on FHIR application. Some CRD clients might incorporate DTR client functionality natively rather than using an app.

When invoking CRD, there may be situations where 'needed' information is not available.  For example, the date of birth might be 'unknown' and there might only be a subscriber id but not a member id.  Alternatively, the payer may not be able to find a member with the specified identifier.  In such situations, this is NOT considered an error with the CDS Hook invocation.  A successful response with a coverage-information system action is still necessary.

The CRD service **SHOULD** either prompt for the additional needed information using DTR or return a coverage-information extension indicating that the patient is not covered with a reason indicating the issue (e.g. the member could not be found/resolved).

If the payer does not support DTR for the type of information needed, the CRD service **MAY** provide a 'link' or 'information' card pointing to the forms or portal to use to capture the additional information. The link **SHOULD NOT** require user authentication (i.e., no log-on needed) when accessing downloadable forms. For portal links, it is preferred if a separate logon is not needed (e.g., with temporary/high-entropy links). Forms downloaded from provided links can then be submitted as part of the prior authorization (e.g., PAS), claim submission, etc. based on the identified documentation purpose.

While using portals or other non-questionnaire data capture is not recommended or preferred, it may be necessary as a transitional measure. Future versions of this IG are likely to mandate that questionnaires be included when additional information is required. This transitional accommodation is not intended to relax regulatory or legislative requirements that require the use of DTR.

If the CRD service is unable to resolve the patient, the Coverage Information **SHALL** indicate "not covered" with a reason of 'Member Not Found'.

If the CRD is able to resolve the patient but they do not have active coverage, the Coverage Information **SHALL** indicate "not covered" with a reason of 'No Active Coverage'.

When using this response type, the proposed order or appointment being updated **SHALL** comply with the following profiles:

<table class="grid">
  <thead>
    <tr>
      <th>CRD Profiles</th>
      <th>US Core Profiles</th>
    </tr>
  </thead>
  <tr>
    <td><a href="StructureDefinition-profile-appointment-with-order.html">profile-appointment-with-order</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-appointment-no-order.html">profile-appointment-no-order</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-devicerequest.html">profile-devicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-medicationrequest.html">profile-medicationrequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-nutritionorder.html">profile-nutritionorder</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-servicerequest.html">profile-servicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-visionprescription.html">profile-visionprescription</a></td>
    <td/>
  </tr>
</table>

For example, this card indicates that a prior authorization has been satisfied for a planned procedure:

{% fragment Binary/CRDServiceResponse JSON BASE:systemActions ELIDE:resource.children().where(is(Extension).not()) %}

CRD clients and services **SHALL** support the new CDS Hooks system action functionality to cause annotations to automatically be stored on the relevant request, appointment, etc. without any user intervention. In this case, the discrete information propagated into the order extension **SHALL** be available to the user for viewing. However, this might be managed with icons, flyovers, or alternate mechanisms than traditional CDS Hook card rendering. The key consideration is that the user is aware that the information is available and can easily access it. Client implementations will be responsible for ensuring that the only changes made to the CRD client record are to add the annotations contemplated here. CRD clients **MAY** be configured to not execute system actions under some circumstances, for example if the order has been cancelled or abandoned.

The information added to the order here is often going to be relevant/important not only to the creator of the order, but also to its eventual performer. This guide does not define how information around coverage is conveyed from the ordering system to the performing system. However, the [Post-acute Orders implementation guide](http://hl7.org/fhir/us/dme-orders) does provide a mechanism for electronic sharing of orders and could be used to convey the additional notes or extensions envisioned here as well.

Payers with existing tools that process prior authorization requests may have dependencies on data elements that are not found in the clinical orders being submitted as part of CRD such as service type or modifier codes. In these cases, payers **SHOULD** attempt to infer values for these elements based on elements that are present. For example 'service type' can often be inferred based on the nature of the service, the location, the performer, etc. In situations where the inferred element has an impact on the results, payers should document that as part of their 'coverage-information' extension. In situations where inference is not possible and an element must be known, the payer may indicate that formal prior authorization is necessary. This situation should be minimized as much as possible.

### Propose Alternate Request Response Type
This response type can be used by payers to present a card with suggested alternatives to the current proposed therapy. This might be updating the order to change certain information or proposing to replace the order completely with one or more alternatives. This might be used to propose a change to a first-line treatment, to alter therapy frequency or drug dosage to be consistent with coverage guidelines, to propose covered products or services as substitutes for a non-covered service, or to propose therapeutically equivalent treatments that will have a lower cost to the patient.

Multiple alternatives can be proposed by providing multiple suggestions. Each suggestion **SHOULD** contain either a single "update" action to revise the existing proposed order; or a "delete" action for the current proposed order and a "create" action for the new proposed order. In some cases, additional "create" actions might be needed if there is a need to convey a non-[contained]({{site.data.fhir.path}}references.html#contained) Medication, Device, or other resource. The "delete" action resource element is not expected to adhere to any profile, as it is only expected to contain the "id" property of the resource being replaced. Any other elements will be ignored.

The choice of "update" vs. "delete + create" **SHOULD** be based on how significant the change is and how relevant other decision support on the original request will still be. If cards returned by other service providers might still be relevant (e.g., because there was just a small change in dose or frequency), then performing an update will allow updates from other decision support cards to also be applied. If the change is significant enough that other decision support will not be relevant, a "delete + create" will allow the client to suppress decision support cards that no longer apply.

When using this response type, the proposed orders (and any associated resources) **SHALL** comply with the following profiles:

<table class="grid">
  <thead>
    <tr>
      <th>CRD Profiles</th>
      <th>US Core Profiles</th>
    </tr>
  </thead>
  <tr>
    <td><a href="StructureDefinition-profile-device.html">profile-device</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-devicerequest.html">profile-devicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-encounter.html">profile-encounter<sup>†</sup></a></td>
    <td/>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medication.html">us-core-medication</a></td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-medicationrequest.html">profile-medicationrequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-nutritionorder.html">profile-nutritionorder</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-servicerequest.html">profile-servicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-visionprescription.html">profile-visionprescription</a></td>
    <td/>
  </tr>
</table>
<sup>†</sup> Only used if updating an Encounter (e.g., to add a note)

For example, this card proposes replacing the draft prescription for a brand-name drug (shown only as the 'resourceType' and 'id' from the `draftOrders` entry) and instead creating an equivalent prescription with a lower-cost medication.

{% fragment Binary/CRDServiceResponse2 JSON BASE:cards.where(source.topic.where(code='therapy-alternatives-req').exists()).suggestions EXCEPT:id | medication BASE:actions.resource %}

### Identify Additional Orders Response Type
This response type can be used to present a card that recommends the introduction of additional orders as companions or prerequisites for the current order. For example, the payer might recommend that certain lab tests be ordered along with a medication that is known to affect liver function. This will normally involve additional 'create' actions. The fact that there is no 'delete' for the original order conveys that these are supplemental actions rather than replacement actions. As with the [Propose Alternate Request](#propose-alternate-request-response-type) response type, in some cases multiple resources will need to be created to convey the full suggestion such as 'medication', 'device', etc.

When using this response type, the proposed orders and any associated resources **SHALL** comply with the following profiles:

<table class="grid">
  <thead>
    <tr>
      <th>CRD Profiles</th>
      <th>US Core Profiles</th>
    </tr>
  </thead>
  <tr>
    <td><a href="StructureDefinition-profile-communicationrequest.html">profile-communicationrequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-device.html">profile-device</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-devicerequest.html">profile-devicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.uscore6}}/StructureDefinition-us-core-medication.html">us-core-medication</a></td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-medicationrequest.html">profile-medicationrequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-nutritionorder.html">profile-nutritionorder</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-servicerequest.html">profile-servicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-visionprescription.html">profile-visionprescription</a></td>
    <td/>
  </tr>
</table>

This example proposes adding a monthly test to check liver function:

{% fragment Binary/CRDServiceResponse2 JSON BASE:cards.where(source.topic.where(code='clinical-reminder').exists()).suggestions %}

### Request Form Completion Response Type
NOTE: DTR is the preferred solution where forms are needed for capture of information for payer purposes including, but not limited to, prior authorization, claims submission, or audit because of its ability to minimize data entry burden. This response type **SHOULD** only be used when DTR is not available or applicable.

This response type can be used to present a card that indicates that there are forms that need to be completed. The indicated forms might indicate additional documentation that must be submitted for prior authorization, attachments for claims submission, documentation that must be completed and retained as proof that clinical need protocols have been followed, or that must otherwise be retained and available for future audits. While forms can also be expressed as static or active PDFs referenced by [External References](#external-reference-response-type), or within a [SMART Application](#launch-smart-application-response-type), this response type provides the form definition as a FHIR Questionnaire and creates a Task within the CRD client allowing the completion of the form to be appropriately scheduled and/or delegated. Alternatively, the provider could choose to execute the task and fill out the form immediately if that makes more sense from a clinical workflow perspective.

This suggestion will always include a create action for the Task. The Task will point to the Questionnaire to be completed using a `Task.input` element with a `Task.input.type` of "questionnaire" and the canonical URL for the questionnaire in `Task.input.valueCanonical`. Additional `Task.input` elements will provide information about how the completed questionnaire is to be submitted to the payer with a service endpoint if required. The `Task.code` will always include the CRD-specific `complete-questionnaire` code. The reason for completion will be conveyed in `Task.reasonCode`. The Questionnaire might also be included with a separate conditional create action or it might be excluded with the presumption it will already be available or retrievable by the client via its canonical URL, either from the original source or from a local registry.

Instead of using a card, CRD services **MAY** opt to use a <a href="https://cds-hooks.hl7.org/2.0/#system-action">systemAction</a> instead. CRD clients supporting this response type **SHALL** support either approach.

When using this response type, the proposed orders (and any associated resources) **SHALL** comply with the following profiles:

<table class="grid">
  <thead>
    <tr>
      <th>CRD Profiles</th>
      <th>US Core Profiles</th>
    </tr>
  </thead>
  <tr>
    <td><a href="StructureDefinition-profile-taskquestionnaire.html">profile-taskquestionnaire</a></td>
    <td/>
  </tr>
</table>

No profile is provided for the questionnaires pointed to by the Task. CRD services **SHOULD** use questionnaires that are compliant with either the [Argonaut questionnaire profiles](https://github.com/argonautproject/questionnaire) (for forms to be completed within the CRD client) or the [Structured Data Capture (SDC) profiles](http://hl7.org/fhir/uv/sdc/index.html) (for more sophisticated forms to be created within a SMART on FHIR app or through an external service). 

Note:
* Where CRD services use the SDC profiles, they have the option of indicating an endpoint for submission of the questionnaire using Task.input or the SDC Questionnaire.endpoint extension to specify a service endpoint to submit completed questionnaires. If an endpoint is specified in both locations, both apply.
* CRD clients **SHOULD** retain a copy of all completed forms for future reference.

The following is an example CDS Hook [Suggestion](https://cds-hooks.hl7.org/2.0/#suggestion), where the specified questionnaire is either expected to be available within the CRD client or available for retrieval through its canonical URL. As such, the [Action](https://cds-hooks.hl7.org/2.0/#action) only contains the FHIR [Task]({{site.data.fhir.path}}task.html) resource. An example showing inclusion of both the Task and the referenced Questionnaire can be found [above](deviations.html#if-none-exist).

{% fragment Binary/CRDServiceResponse2 JSON BASE:cards.where(source.topic.where(code='123').exists()).suggestions EXCEPT:url BASE:actions.where(resource is Questionnaire).resource %}

### Create or Update Coverage Records Response Type
This response type is used when the CRD service is aware of additional coverage that is relevant to the current/proposed activity or has updates or corrections to make to the information held by the CRD client. For example, the CRD client might be aware that a patient has coverage with a provider, but not know the plan number, member identifier, or other relevant information. This response allows the CRD service to convey that information to the CRD client and link it to the current/proposed action. In theory, this type of response could also be used to convey corrected/additional prior authorization information the payer was aware of, however that functionality is out of scope for this release of the implementation guide.

Instead of using a card, CRD services **MAY** opt to use a <a href="https://cds-hooks.hl7.org/2.0/#system-action">systemAction</a> instead. CRD clients supporting this response type **SHALL** support either approach. If receiving a system action, a CRD client **MAY** opt to place the new or updated record in a holding area for human review rather than directly modifying their source of truth.

NOTE: This functionality is somewhat redundant with the capabilities of the X12 270/271 transactions. This CRD capability **SHALL NOT** be used in situations where regulation dictates the use of the X12 functionality.

This response will contain a single suggestion. The primary action will either be a suggestion to update an existing coverage instance (if the CRD client already has one) or to create a new coverage instance if the CRD service is aware of coverage that the CRD client is not. In addition, the suggestion could include updates on all relevant request resources to add or remove links to coverage instances, reflecting which coverages are relevant to which types of requests.

For example, this CDS Hook [card](https://cds-hooks.hl7.org/2.0/#cds-service-response) includes a single [suggestion](https://cds-hooks.hl7.org/2.0/#suggestion) with an [action](https://cds-hooks.hl7.org/2.0/#action) to update the [Coverage]({{site.data.fhir.path}}coverage.html).

{% fragment Binary/CRDServiceResponse2 JSON BASE:cards.where(source.topic.where(code='insurance').exists()).suggestions %}


If returning a card rather than a system action, this card type **SHOULD NOT** be returned for hook types that are likely to be triggered by clinical users rather than administrative staff. Cards of this type would be appropriate for hooks such as encounter-start or appointment-book, but would not be appropriate for order-select or order-sign.

### Launch SMART Application Response Type
SMART apps allow more sophisticated interaction between payers and providers. They provide full control over user interface, workflow, etc. With permission, they can also access patient clinical data to help guide the interactive experience and minimize data entry. Apps can provide a wide variety of functions, including eligibility checking, guiding users through form entry, providing education, etc.

All such apps will need to go through the approval processes for the client's provider organization and typically also the associated software vendor. This response type can cause the launching of such apps to occur in the context in which they are relevant to patient care and/or to payment-related decision making.

This response type is just a modified version of the [External Reference](#external-reference-response-type) response type. However, the `Link.type` will be "smart" instead of "absolute". The `Link.appContext` will typically also be present. 

NOTE: This mechanism is no longer to be used for launching [DTR applications](http://hl7.org/fhir/us/davinci-dtr). That process is now handled entirely through the [Coverage Information](#coverage-information-response-type) response type above. It can still be used for launching other types of SMART apps not focused on gathering data for payer use with questionnaires.

For example, this [card](https://cds-hooks.hl7.org/2.0/#cds-service-response) contains a SMART app [link](https://cds-hooks.hl7.org/2.0/#link) to perform an opioid assessment:

{% fragment Binary/CRDServiceResponse2 JSON BASE:cards.where(source.topic.where(code='guideline').exists()) %}


---

// File: input/pagecontent/CodeSystem-temp-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

<div class="added-content" markdown="1">
This code system contains codes that are expected to be formally proposed as codes in other 'official' code systems in the future such as LOINC, SNOMED, etc. or as part of code systems managed in [http://terminology.hl7.org](http://terminology.hl7.org).  The canonical URL (and possibly the codes themselves) for all codes appearing in this code system **ARE** expected to change in a future release.  Implementers should prepare for this transition when they write their code, allowing for the possibility of checking for both the old and new code and ensuring it is straightforward to transmit both the old and new code when the time comes.  Concept maps will likely be available to assist with this transition.
</div>

---

// File: input/pagecontent/conformance.md

This implementation guide uses specific terminology such as **SHALL**, **SHOULD**, **MAY** to flag statements that have relevance for the evaluation of conformance with the guide.  As well, profiles in this implementation guide make use of the [mustSupport]({{site.data.fhir.path}}profiling.html#mustsupport) element.  Base expectations for the intepretations of these terms are set in the [FHIR core specification]({{site.data.fhir.path}}conformance-rules.html#conflang) and general Da Vinci-wide expectations are [defined in HRex]({{site.data.fhir.ver.hrex}}/conformance.html).

Additional conformance expectations specific to this guide are as follows:

### Conformance to this IG
In order to conform to this implementation guide, in addition to adhering to any relevant 'SHALL' statements, a system **SHALL** conform to at least one of the CapabilityStatements listed here:
* CRD clients - at least one of [CRD Client USCDI 1](CapabilityStatement-crd-client3.1.html), [CRD Client USCDI 3](CapabilityStatement-crd-client6.1.html), or [CRD Client USCDI 4](CapabilityStatement-crd-client7.0.html)
* CRD servers - [CRD Server USCDI 1, 3, 4](CapabilityStatement-crd-server.html)

### MustSupport
Profiles in this implementation guide make use of the [mustSupport]({{site.data.fhir.path}}profiling.html#mustsupport) element.

For data provided from CRD clients:

* If the CRD client maintains the data element and surfaces it to users, then it **SHALL** be exposed in their FHIR interface when the data exists and privacy constraints permit.

* CRD servers **SHALL** leverage mustSupport elements as available and appropriate to provide decision support.

For responses provided by CRD servers:

* CRD servers **SHALL** populate the element if an appropriate value exists. 

* CRD clients **SHALL** make the data available to the appropriate user (clinical or administrative) or leverage the data within their workflow as necessary to follow the intention of the provided decision support.

NOTE: These requirements are somewhat different from US Core and HRex because the implementation needs are different. In US Core, there is generally an expectation for clients to modify code and persistence layers to add support for 'mustSupport' elements in profiles. This expectation does not hold for CRD. However, CRD does require surfacing elements in the FHIR interface if the system maintains the element.

Also see the mustSupport rules for the [HRex]({{site.data.fhir.ver.hrex}}/conformance.html#mustsupport) and [US Core]({{site.data.fhir.ver.uscore7}}/must-support.html) implementation guides, which apply to content adhering to data elements profiled in those guides.

### Profiles
This specification makes significant use of [FHIR profiles]({{site.data.fhir.path}}profiling.html), search parameter definitions, and terminology artifacts to describe the content to be shared as part of CDS Hook calls. The implementation guide supports FHIR [R4]({{site.data.fhir.path}}) with profiles listed for each type of hook.

The full set of profiles defined in this implementation guide can be found by following the links on the [Artifacts](allartifacts.html) page.

### US Core
This implementation guide also leverages the [US Core 3.1]({{site.data.fhir.ver.uscore3}}), [US Core 6.1]({{site.data.fhir.ver.uscore6}}), and [US Core 7.0]({{site.data.fhir.ver.uscore7}}) set of profiles defined by HL7 for sharing non-veterinary EHR individual health data in the United States. Where US Core profiles exist, this guide either leverages them directly or uses them as a base for any additional constraints needed to support the coverage requirements discovery use case. Where no constraints are needed, this IG does not define additional profiles, as all US Core profiles are deemed to be part of this IG and available for use in CRD communications. For example, the US Core Observation and Condition profiles are likely to be of interest in at least some CRD scenarios and may be used by solutions conformant to this guide.

Where US Core profiles do not yet exist (e.g., for several of the 'Request' resources), profiles have been created that try to align with existing US Core profiles in terms of elements exposed and terminologies used.

Note that, in some cases, the US Core profiles require support for data elements that are not necessarily relevant to the CRD use case. The authors of this IG believe that leveraging existing standard interfaces will promote greater (and quicker) interoperability than would a more finely-tuned custom interface. CRD clients might still choose to restrict what information is exposed to CRD servers based on their internal data access and governance rules.

Conformance expectations with respect to US Core in this IG are the same as [those defined in HRex]({{site.data.fhir.ver.hrex}}/conformance.html#uscore).


---

// File: input/pagecontent/credits.md

### Da Vinci
{% include davinci.md %}

### The Da Vinci CRD project
CRD is part of a set of projects in the [Burden Reduction](burden.html) space that was first initiated by Da Vinci members in May of 2019.  Project participants have included major EHR vendors, payers, provider organizations, and others involved in the prior authorization space.  The first standard for trial use version of the specification was published in 2020 and the specification has undergone considerable testing at various connectathons, pilots, and production implementations since then.  Further details about the project, including minutes of meetings can be found on the [project Confluence page](https://confluence.hl7.org/pages/viewpage.action?pageId=21857602).

### Credits
Technical Lead and Primary Author:
* Lloyd McKenzie (Dogwood Health Consulting)

Additional Authors:
* Raman Dhanoa (Dogwood Health Consulting)
* Russell Buchanan (Gevity Consulting/Accenture)

Project leads:
* Robert Dieterle (Enable Care, LLC)
* Viet Nguyen (Stratametrics, LLC)

Project management and coordination:
* Crystal Kalem (Point of Care Partners)
* Vanessa Candelora (Point of Care Partners)
* Jocelyn Keegan (Point of Care Partners)

Technical support and guidance:
* Grahame Grieve (Health Intersections)

This implementation guide was initiated by the twenty-two founding [Da Vinci Project](http://hl7.org/about/davinci) member organizations.

Regular project participants included:
* 1upHealth (Joe McCaffrey)
* Aegis (Richard Ettema, Carie Hammond, Jamie Parker, Sandra Vance)
* Aetna CVS (Janice Hsieh, Kathy Berne, Kiba Polk, Muhammad Ali, Ron Health, Shilpi Jain, Sudhansu Mishra)
* American Hospital Association (Andrea Preisler)
* American Medical Association (Terrence Cunningham, Celine Lefebvre, Heather McComas)
* Allscripts (Emma Jones, Jeffrey Danford)
* Availity (Ian Vankirk)
* Blue Cross Blue Shield of Alabama (Tony Benson, Kevin Lambert, Chris Johnson, Gini McGlothin, Morry Payne, Clarissa Winchester)
* Blue Cross Blue Shield North Carolina (Bhanu Vemuri)
* Blue Cross Blue Shield Tennessee (Susan Langford)
* CAQH Core (Don Taylor)
* Centers for Medicare and Medicaid Services - CMS (Jessica Czulewicz)
* Cognizant (Alyson Broxton, James Bound)
* Cognosante (Mary Kay McDaniel)
* Dogwood Health Consulting (Jean Duteau)
* Drummond (Tim Bennett)
* Edifecs (Artim Sopin)
* eHealth Exchange (Keith Brick, Scott Rossignol, Tiffanie Hickman)
* Elevance Health (Chris Cioffi)
* Epic (Danielle Friend, Kyle Johnsen, Rachael McCormick, Spencer Utley, Mathew Varghese, Isaac Vetter)
* Evernorth (Steve Whitney, Stuart Kirchner)
* Evicore (Anup Evernorth)
* Health Care Data Standards (Mary Kay McDaniel)
* HealthLX (David Riddle)
* Independent Health (Christopher Gracon)
* Infor (Brian Lind, Rob Brull)
* Kaiser Permanente (Walter Suarez)
* Lantana (Jeffrey Danford, Ruby Nash)
* Meditech (Dan Murphy)
* Mettles Solutions (Sreekanth Puram)
* Microsoft (Joshua Mandel)
* Mitre (Kathleen Connor, Jeffrey Danford, Larry Decelles, Andrew Gregorowicz, Corey Spears)
* MultiCare (Karen Ashton)
* Optum (Aaron Cruver, David Hansen, Josh Lamb, Linda Michaelsen, Nick Radov, Richa Singh, Tara Frappy)
* Oracle Health (Hans Buitendijk, Kevin Shekleton, Michelle Miller)
* Peraton (Michael Cabral)
* Philips (Bas van den Heuvel)
* RFA Ltd (Rachel Foerster)
* Smile Digital Health (Jonell Sakyi, Marie Casimina, Thao Michaels)
* Surescripts (Brian Morris)
* Quest Diagnostics (Freida Hall)
* United Healthcare (Nicholas Radov)
* U.S. Dept. of Veterans Affairs (Freida Hall, Ken Lord, MaryKay McDaniel)
* University of Utah (Kensaku Kawamoto)
* Washington State Healthcare Authority (Brittany Rowlett)
* ZeOmega (Michael Gould)

Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm and expertise to this work.


---

// File: input/pagecontent/deviations.md

CDS Hooks is a relatively new technology.  It is considered a "Standard for Trial Use" (STU), meaning that it will continue to evolve based on implementer feedback and could change in ways that are not compatible with the current draft.  As well, the initial version of the CDS Hooks specification has focused on the core architecture and a relatively simple set of capabilities.  Additional capabilities will be introduced in future versions.

To meet requirements identified by Da Vinci project participants, it is necessary to introduce additional capabilities above and beyond what is currently found in the CDS Hooks specification.  This section of the CRD implementation guide describes those additional capabilities and the mechanism the implementation guide proposes to implement them.  The purpose of these customizations is to enable testing at connectathons and to support feedback into the CDS Hooks design process.

Each capability listed here has been proposed to the CDS Hooks community and could become part of the official specification in a future release.  However, there is a significant likelihood that the way the requirements are met will vary from the syntax or even the architectural approach proposed in this guide.  Future versions of this implementation guide will be updated to align with how these requirements are addressed in future versions of the CDS Hook specification.  Until both the CDS Hooks content and the FHIR and US Core content underlying this specification are *Normative* (locked into backward compatibility mode), the CRD implementation guide will remain as STU.

This implementation guide extends/customizes CDS Hooks in 5 ways: additional hook resources, a hook configuration mechanism, additional prefetch capabilities, additional response capabilities, and the ability to link hooks to their corresponding request.  Each are described below:

### Additional Hook scope
In the [current build](https://cds-hooks.org/hooks/order-sign/), the order-sign hook can be used for both 'draft' orders that are newly created as well as for updated orders that are active.  The balloted version of the hooks this IG release is bound to are limited to draft orders.  This IG adopts the newer wording, meaning that the order-sign hook can be triggered both on newly created orders, as well as when orders are updated (changing status, changing time-frame, etc.).  The hook can also be re-triggered if there is a key change to the context, most typically the establishment of new or renewed coverage relevant to the order.

### Additional Hook resources
Two of the hooks used by this specification (`order-select` and `order-sign`) identify specific "order" resources that can be passed as part of the hook invocation.  CRD has use-cases for additional resource types to be passed to this hook.  Specifically:

* [CommunicationRequest]({{site.data.fhir.path}}communicationrequest.html) - Needed to trigger CRD when a provider requests that another provider transfer patient records or other supporting information to another organization or agency.

* [Task]({{site.data.fhir.path}}task.html) - Task is used to seek fulfillment of an order from service providers.  Because coverage can be influenced by who is asked to perform an order, coverage requirements can be relevant here.  As well, task is used to request changes to existing therapies (e.g. stopping a medication, suspending a therapy, etc.) and changes to therapy can also have impacts on coverage requirements.

The proposal to add these resources to the existing hook definitions [can be found](https://github.com/cds-hooks/docs/issues/396) on the CDS hooks [issue tracker](https://github.com/cds-hooks/docs/issues).

### New hook configuration mechanism
The CRD Servers provided by payers will support discovery of different types of coverage requirements that will return different types of information to users on [CDS Cards](https://cds-hooks.hl7.org/2.0/#cds-service-response), such as:

*  Whether authorization is required
*  Recommended alternative therapies
*  Best practices associated with the planned therapy that are expected to be adhered to
*  Forms and documentation for retention within the CRD client
*  Forms and documentation that must be provided with a prior authorization request
*  Forms and documentation that must be included with a claim submission

Not all the coverage information returned by a CRD Server will be relevant to all users of all CRD Clients. It would therefore be useful to be able to configure CRD Servers to withhold certain card types from certain provider types, user roles, or specific users.  Preferences could potentially be configured within the CRD Server or within the CRD Client.

Managing preferences within a CRD Server would require processes to support communication and management of customization requests, as well as additional complexity within the CRD Server software.  Managing preferences within the CRD Client would require it to either request specific information by invoking multiple calls to different services or by invoking a single call to the service indicating the response types desired.

The approach in this implementation guide is designed to allow the users or administrators of CRD Clients to manage and dynamically communicate desired response types to the CRD Server at the time a service is invoked.  At this time, it is not clear whether this capability will be of interest to vendors, users, or other types of CDS Services.  Therefore, rather than proposing a change to the base CDS Hook specification, this IG leverages the CDS Hook extension mechanism to provide an experimental approach to specify and control the types of information returned to users. Connectathon and implementation experience could support requesting that these changes, or some variant of them, be included in a future version of the CDS Hook specification.

Extensions will be enabled in two places:

1.  The [CDS Service Discovery Response](https://cds-hooks.hl7.org/2.0/#response) object that describes the service's capabilities will include an extension that describes what [configuration options](StructureDefinition-CDSHookServicesExtensionConfiguration.html) can be set by the CRD Client
2.  The hook's [HTTP Request](https://cds-hooks.hl7.org/2.0/#http-request_1) object will include an extension to pass specific configuration settings as part of the hook invocation


### Configuration options extension
An extension called `davinci-crd.configuration-options` will define a configuration object with an array of available configurable options within the CDS Service, where:  

*  Each option **SHALL** include four mandatory elements:
    *  A `code` that will be used when setting configuration during hook invocation, and has an ([extensible](http://www.hl7.org/fhir/terminologies.html#extensible)) binding to the <a href="ValueSet-cardType.html">CRD Card Types</a> ValueSet.
    *  A data `type` for the parameter.  At present, allowed values are "boolean" and "integer". (NOTE: These are the JSON data types and not the FHIR data types.)
    *  A display `name` for the configuration option to appear in the client's user interface when performing configuration.
    *  A `description` providing a 1-2 sentence description of the effect of the configuration option.
*  A `default` value **SHALL** also be provided to show users what to expect when an override is not specified.

CRD servers **SHALL**, at minimum, offer configuration options for each type of card they support (with a code corresponding to the <a href="ValueSet-cardType.html">CRD Card Types</a> ValueSet and a type of ‘boolean’, where setting the flag to false will result in the server not returning any cards of the specified type). This allows CRD clients to control what types of cards they wish to receive at all, or to receive in particular workflow contexts or for certain users.  This configuration mechanism also allows EHRs to minimize information overload and avoid presentation of duplicative or low-utility CRD alerts.

For example, a [CDS Discovery Response](https://cds-hooks.hl7.org/2.0/#response) from a CRD Server might look like this:

{% raw %}
{% fragment Binary/CRDServices JSON EXCEPT:services.where(hook='order-sign') EXCEPT:hook | extension BASE:services EXCEPT:`davinci-crd.configuration-options`.where(code='coverage-info' or code='max-cards') BASE:services.extension %}
{% endraw %}

Notes:

*  This version of the implementation guide provides only limited standardization of the codes, names, types, or descriptions for configuration options for CRD Servers.  Future versions of the CRD specification may standardize additional configuration options that have been identified as useful by individual payer and CRD client experimentation - thereby improving consistency in behavior across payer services to ease the burden on those performing configuration.

*  There is no mechanism to express co-occurrence rules amongst configuration options.  Guidance can be given about allowed combinations in descriptions, but payer services **SHALL** gracefully handle disallowed/nonsensical combinations.  I.e. the CRD Server must:

    *  allow for the possibility that CRD Clients might not adhere to their co-occurrence rules,

    *  include explicit checks of inbound data for adherence to rules; and

    *  indicate that CRD checking could not be done and log appropriate information to allow engagement with CRD Clients to address any payer-specific needs.

*  Codes **SHALL** be valid JSON property names and **SHALL** come from the <a href="ValueSet-cardType.html">CRD Card Types</a> list if an applicable type is in that list.

*  Codes, names, and descriptions **SHALL** be unique within a [CDS Service](https://cds-hooks.hl7.org/2.0/#response) definition.  They **SHOULD** be consistent across different hooks supported by the same payer when dealing with the same types of configuration options.

*  Payer services providing more than one type of coverage requirement information/guidance **SHOULD** expose configuration options allowing clients to dynamically control what information is returned by the service.

#### Hook configuration extension
An extension called `davinci-crd.configuration` will define a second configuration object that will contain an array of codes and values corresponding to the configuration options configured within the CRD Client.

For example, the hook [HTTP Request](https://cds-hooks.hl7.org/2.0/#http-request_1) would look like this:

{% fragment Binary/CRDServiceRequest JSON EXCEPT:hook | extension %}


Notes:

*  Where CRD Clients support the optional configuration options, the following requirements apply:
    *  CRD Clients **SHOULD** expose configuration options through a configuration screen to allow users and/or system administrators to control the types of information returned.
    *  CRD Clients **SHALL** convey configuration options when invoking the hook using the davinci-crd.configuration extension. It will be a single object whose properties will be drawn from the code values from configuration options and whose values will be of the type defined for that option.
    *  CRD Clients **SHOULD** provide an ability to leverage the dynamic configuration capabilities of payer services based on provider role, individual provider, and/or hook invocation location as best meets the needs of their users.

* Because support for some configuration is required for all CRD servers, the following requirements apply:
    *  CRD Servers **SHALL** behave in the manner prescribed by any supported configuration information received from the CRD Client.
    *  CRD Servers **SHALL NOT** require the inclusion of configuration information in a hook call (i.e. no hook invocation is permitted to fail because configuration information was not included).
    *  CRD Clients **MAY** send configuration information that CRD Servers do not support. In this case, the CRD Server **SHALL** ignore the unsupported configuration information.

*  This specification provides no guidance on exactly when/how CRD Clients are expected to manage hook configuration.  This could be done at the level of provider roles, individual providers, location from which the hook is invoked, or other means.  CRD Clients can experiment and determine what types of configuration make the most sense and at what levels they can support managing/persisting configuration information.


### Additional prefetch capabilities
One of the options supported in CDS Hooks is the ability for a service to request that certain data be [prefetched](https://cds-hooks.hl7.org/2.0/#prefetch-template) for efficiency reasons and to simplify processing for the CDS service.  However, there is a limit in that, in the current CDS Hooks specification, prefetch can only use hook context information that is expressed as a simple key value.  It cannot leverage context information passed as resources.

A [proposal](https://github.com/cds-hooks/docs/issues/377) has been submitted suggesting how to address this issue.  The work group responsible for the specification has proposed adopting a modified version of this proposal that does not include _include support.  This version of the implementation guide pre-adopts that proposal.

Specifically, where a hook defines a context element that consists of a resource or collection of resources (e.g. [order-select.draftOrders](https://cds-hooks.hl7.org/hooks/order-select/2020May/order-select.html#context) or [order-sign.draftOrders](https://cds-hooks.hl7.org/hooks/order-sign/2020May/order-sign#context)), systems **SHALL** support a limited subset of [X-FHIR-Query]({{site.data.fhir.ver.sdc}}/expressions.html#x-fhir-query-enhancements).

The limitations on the XPath expressions that can be used are as follows:
* variables are limited to 'context' and the data elements reachable from it. (e.g. `_id={{context.draftOrders.entry.resource.ofType(ServiceRequest).location.id()}}`)
* functions are limited to today(), ofType(), resolve(), and a new function read() (discussed below)
* addition or subtraction of 'days' (e.g. `lt{{today() - 7 days}}`)

Additional restrictions on prefetch in general are that only the following are expected to be supported:
* instance level read interactions (for resources with known ids such as Patient, Practitioner, or Encounter)
* type level search interactions; e.g. patient={{context.patientId}}
* Resource references (e.g. patient={{context.patientId}})
* token search parameters using equality (e.g. code=4548-4) and optionally the :in modifier (no other modifiers for token parameters)
* date search parameters on date, dateTime, instant, or Period types only, and using only the prefixes eq, lt, gt, ge, le
* the _count parameter to limit the number of results returned
* the _sort parameter to allow for most recent and first queries

Prefetches can depend on the results of prior prefeches.  In this case, the result of the prior prefetch can be expressed as a variable using the name specified in the prefetch.  For example, if one prefetch value was defined as:
  `"encounter": "Encounter?_id={{%context.encounterId}}"`
then a subsequent prefetch could be defined as:
  `"practitioners" : "Practitioner?_id=%encounter.participant.individual.resolve().ofType(Practitioner).id"`
  
NOTE: Dependencies on other prefetches should be minimized as it limits what queries can be perfomred in parallel.  Prefetches with dependencies **SHALL** be listed after the prefetches they depend on.

Recognizing these tokens doesn't mean the client must support prefetch or the requested prefetch query, only that it recognizes the token, doesn't treat it as an error and - if it supports the query - substitutes the token correctly.

For example, a prefetch for `order-sign` might look like this:

{% raw %}
{% fragment Binary/CRDServices JSON BASE:services.where(hook='order-sign') EXCEPT:prefetch %}
{% endraw %}


This might result in an executed query that looks like this: `Practitioner?_id=2347,10948,5881`


### Additional response capabilities
CDS Hooks supports suggestions that involve multiple actions.  Coverage Requirements Discovery uses this in one situation where additional capabilities will be needed:

*  Creating a Task to complete a Questionnaire; and

In this case, the creation of the Questionnaire needs to be conditional - it **SHOULD** only occur if that specific Questionnaire version doesn't already exist, and the payer service **SHALL** query to determine if the client has a copy of the Questionnaire before sending the request.  This capability is supported in FHIR's [transaction]({{site.data.fhir.path}}http.html#transaction)  
functionality.  However, not all the capabilities/guidance included there has been incorporated into CDS Hooks 'suggestions', in part to keep the specification simpler.

For this release of the implementation guide, these requirements will be handled as follows:

#### if-none-exist
The `suggestion.action` object will use an extension to carry the if-none-exist query, as per FHIR's [conditional create]({{site.data.fhir.path}}http.html#ccreate) functionality.  The extension property will be `davinci-crd.if-none-exist`.  

For example, this [CDS Hook Suggestion](https://cds-hooks.hl7.org/2.0/#suggestion) contains two [Actions](https://cds-hooks.hl7.org/2.0/#action) - one referencing an HL7 [Questionnaire]({{site.data.fhir.path}}questionnaire.html) and the other the [Task]({{site.data.fhir.path}}task.html) to complete the Questionnaire.  The Questionnaire will only be created if it didn't already exist:

{% fragment Binary/CRDServiceResponse2 JSON BASE:cards.where(source.topic.where(code='123').exists()).suggestions.actions.where(resource is Questionnaire) EXCEPT:url | version BASE:resource %}


#### Linkage between created resources
The linkage between resources by `id` in different Actions within a single Suggestion doesn't require any extension to CDS Hooks, but it does require additional guidance.  For the purposes of this implementation guide, the inclusion of the `id` element in 'created' resources and references in created and updated resources within multi-action suggestions **SHALL** be handled as per FHIR's [transaction processing rules]({{site.data.fhir.path}}http.html#trules). I.e. Treating each requested action as being an entry in a FHIR transaction bundle where the base URL is the base URL of the CRD Client's server.  POST corresponds to an `action.type` of 'create' and PUT corresponds to an action.type of 'update'.  Specifically, this means that if a FHIR Reference points to the resource type and `id` of a resource of another 'create' Action in the same Suggestion, then the reference to that resource **SHALL** be updated by the server to point to the `id` assigned by the client when performing the 'create'.  CRD Clients **SHALL** perform 'creates' in an order that ensures that referenced resources are created prior to referencing resources.

For example, the following [CDS Hook Suggestion](https://cds-hooks.hl7.org/2.0/#suggestion) will cause the creation of a new [ServiceRequest]({{site.data.fhir.path}}servicerequest.html) that will be pointed to by a newly created ([DeviceRequest]({{site.data.fhir.path}}devicerequest.html) resource):

{% fragment Binary/CRDServiceResponse JSON BASE:cards.where(source.topic.where(code='therapy-alternatives-opt').exists()).suggestions ELIDE:actions.where(type='delete') EXCEPT:id | basedOn BASE:actions.resource %}

Note: Sending existing prior authorizations is not in scope for this version of the IG.

### Linking cards to requests
Some CDS hooks have a single context.  [encounter-start](hooks.html#encounter-start) and [encounter-discharge](hooks.html#encounter-discharge) are tied to their respective encounter and there is no question as to which encounter a returned card is associated with.  However, the [appointment-book](hooks.html#appointment-book), [order-select](hooks.html#order-select), and [order-sign](hooks.html#order-sign) hooks all allow passing in multiple resources as part of the hook invocation.  Each card returned in the hook response might be associated with only one of the referenced appointment or order resources, or a subset of them.  A CRD client might wish to be able to track *what* resource(s) a card was associated with.  This might be for audit, to control how or where the card is rendered on the screen, to allow the card to be directly associated with the triggering resource, or to enable various other workflow considerations.

This implementation guide defines a standard extension - `davinci-associated-resource` -  that can appear on any card that provides a local reference to the appointment, order, or other context resource to which the card is 'pertinent'.  It is optional and has a value consisting of 1..* local references referring to the resource type and resource id of the resource being linked.

If a hook service is invoked on a collection of resources, all cards returned that are specific to only a subset of the resources passed as context **SHALL** disambiguate in the `detail` element which resources they're associated with in a human-friendly way.  Typically, this means using test name, drug name, or some other mechanism rather than a bare identifier as identifiers might not be visible to the end user for resources that are not yet fully 'created'.  As well, cards **SHOULD** include this new extension to allow computable linkage.

{% fragment Binary/CRDServiceResponse2 JSON BASE:cards.where(source.topic.where(code='therapy-alternatives-req').exists()) EXCEPT:extension | summary | indicator %}


### Controlling hook invocation
Provider systems **SHALL** only invoke hooks on payer services where the patient record indicates active coverage with the payer associated with the service.  Providers **MAY** limit hook invocation to only those payers that are believed to potentially have relevant information related to the current action - for example, clinical guidance, contraindication detection, etc.  This might be more payers than just those that are likely to provide coverage for the services referred to by the hook.  

To avoid confusion for providers, where a patient has multiple active coverages that could be relevant to the current order/appointment/etc., CRD clients **SHALL** select from those coverages which is most likely to be primary and only solicit coverage information for that one payer.  If they invoke CRD on other payers, CRD clients **SHALL** ensure that card types that return coverage information are disabled for those 'likely secondary' payers. In situations where a CRD client determines that there are different primary coverages for different items in the same order action, they MAY choose to send separate CRD calls (each with its own access token) for the collection of services pertinent to that Coverage.  Alternatively, the client can submit all requests in a single call with the Coverage that is most broadly applicable.

NOTE: There is no expectation that CRD clients will only make calls to payer services that are 'known' to provide coverage for the proposed service.  In some cases, the EHR will not know at time of order entry which payer(s) will have claims submitted to them.  Also, a payer with active coverage might have information relevant to the order even if a claim will never be submitted to them (e.g. contraindications) or require a formal declaration of non-coverage, even though that declaration is a given.

Where the patient has multiple active coverages that the CRD client deems appropriate to call the respective CRD servers for, the CRD client **SHALL** invoke all CRD server calls in parallel and display results simultaneously to ensure timely response to user action.


---

// File: input/pagecontent/downloads.md

### Links

This implementation guide is web-based and is intended to be browsed online. However, for the convenience of implementers, both this implementation guide, various sub-packages of it, and some of the source specifications are available for download. The following links allow you to download various parts of this implementation guide and other referenced implementation guides for local use.

* This [full IG](full-ig.zip)
* The [resource definitions](definitions.json.zip) from this IG for use with the FHIR validator (see below)
* The full [FHIR R4 core]({{site.data.fhir.path}}fhir-spec.zip) specifications and other [FHIR core downloads]({{site.data.fhir.path}}downloads.html)
* The [CDS Hooks](https://github.com/cds-hooks/docs/archive/master.zip) specification
* The [SMART on FHIR](http://www.hl7.org/fhir/smart-app-launch/full-ig.zip) specification
* A [validator](https://fhir.github.io/latest-ig-validator/org.hl7.fhir.validator.jar) that can be used to check FHIR resource instance validity and [instructions on how to use it](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator)

{% include cross-version-analysis-inline.xhtml %}

---

// File: input/pagecontent/epa.md

The current CRD, [DTR](http://hl7.org/fhir/us/davinci-dtr), [PAS](http://hl7.org/fhir/us/davinci-pas), and [CDex](http://hl7.org/fhir/us/davinci-cdex) supporting the electronic Prior Authorization (ePA) workflow only focus on the interactions between the provider Health Information Technology (HIT) in total and the payer HIT in total, not the necessary interactions among the respective HIT solutions that make up the provider and payer HIT environment that need to participate in the ePA workflow.

Organizations might need a variety of combinations of HIT components to support new prior authorization regulatory requirements. The U.S. Office of the National Coordinator for Health Information (ONC) is considering a certification process where certified software can use generic (or generically referenced) relied-upon software to meet certain requirements and can clearly specify the capabilities they rely on without the need to test each permutation of relied-upon software with which they support the ePA workflow. Further guidance is needed for the interactions necessary within each of the provider and payer HIT configurations based on the functions/roles of those HIT solutions, and requires the relied upon software approach using predictable, standards-based capabilities to participate in an ePA workflow and for HIT that provides full support for ePA workflow through its certified HIT.

The following drawing demonstrates the CRD workflow exchanges between an integrated provider HIT environment and an integrated payer HIT environment in the upper portion. The lower portion of the CRD workflow drawing represents the potential for electronic Prior Authorization (ePA) coordinator functionality to play a role between the provider HIT and the payer HIT. It should be noted that the exchanges between the provider HIT (including any ePA) and the payer HIT (including any ePA) **SHALL** replicate all of the defined exchanges between provider and payer (represented by the green and orange arrows). The red and purple arrows are representative of information exchange between the Provider ePA and the Provider systems (red arrows) or the information exchange between the Payer ePA and the Payer systems (purple arrows).

<div>
	<img src="epA-workflow.png" alt="Complex diagram showing the components of an integrated provider solution communicating with an integrated payer solution, followed by a diagram that breaks the payer and provider functions into primary systems plus 'ePA coordinator' systems that handle the CDS Hooks communication and exposes the interactions between the primary provider and primary payer systems and their respective ePA coordinator systems."/>
	<b>Figure 1</b> - CRD workflow with and without ePA coordinators
</div>


The following drawing provides additional detail regarding the exchanges between a provider ePA coordinator, multiple provider HIT systems and the payer. The boxes below the workflow drawing indicate the activities of the various components. From left to right: 

* the provider HIT systems,
* the provider ePA coordinator, and
* the payer HIT.

The numbered workflow in the provider ePA coordinator box indicates the inputs from the provider HIT systems that are involved in creating the exchanges between the provider and the Payer. This includes:

1. Information required for authentication with the payer
2. CDS Hooks request, including how an access token is managed
3. Ability to query for additional patient information
4. CDS Hooks response

<div>
  <img src="ePA-coord-detail.png" alt="A diagram that presents the coordinator workflows showing how the provider and payer systems might themselves not be monolithic and indicating which internal interactions would be with each system."/>
  <b>Figure 2</b> - Provider ePA coordinator detail
</div>

The following graphic and table provides an example of the type of interactions that will need to be supported between an ePA coordinator and the various provider HIT components. These interactions include:

1. Initiating the CDS Hooks exchange
2. Providing access to the patient record via a FHIR API
3. Retrieving coverage information
4. Retrieving required and allowed clinical and administrative information
5. Returning the CDS Hooks response (cards and systems actions)

The table briefly describes each action along with:

* Provider systems affected
* Provider API requirements
* ePA coordinator API requirements
* Comments regarding each transaction

<div>
  <img src="ePA-coord-interactions.png" alt="Further detail regarding the interactions between provider system components, goes through each interaction and provides details about the API requirements for each."/>
  <b>Figure 3</b> - Provider ePA coordinator interactions
</div>

The above graphics and descriptions outline the relevant interactions that will be further documented in subsequent releases of this IG as implementations of various combinations of HIT further inform the specifications.


---

// File: input/pagecontent/foundation.md

This foundational page defines general context, considerations, and core requirements that apply to use of this implementation guide, regardless of which portions of the IG are implemented. It includes base conformance expectations, security and privacy rules, etc.

<!--
defines specific requirements for systems wishing to conform to this Coverage Requirements Discovery implementation guide. The bulk of the section focuses on the implementation of the [CDS Hooks Specification](https://cds-hooks.hl7.org/2.0) to meet CRD use cases. It also describes the use of [SMART on FHIR](http://hl7.org/fhir/smart-app-launch/index.html) and provides guidance on privacy, security, and other implementation requirements.
-->

The requirements and expectations described here are not intended to be exhaustive. The purpose of this implementation guide is to establish a baseline of expected behavior that communication partners can rely on and then build upon. Future versions of this specification will evolve based on implementer feedback. Therefore, CRD servers and CRD clients **MAY** mutually agree to support additional hooks, additional card patterns, additional resources, additional extensions, etc. not found in this specification. Although CRD servers and CRD clients are not required to support any capabilities defined beyond this specification, the intent is to support innovations that extend the specification in a manner that allows payers and providers to adopt those extensions in a mutually agreeable way.

### Pre-reading
Before reading this formal specification, implementers are encouraged to first familiarize themselves with some of the key background portions of this implementation guide:

* The [Reading this IG](background.html) page, which provides guidance for those who may be new to FHIR, reading FHIR IGs, or understanding some of the other key technologies used in this guide.

* The [Use Cases](usecases.html) page, which provides context for what this formal specification is trying to accomplish and will give a sense of both the business context and general process flow enabled by the formal specification below.

* The [Burden Reduction](burden.html) page, which provides information about how this guide works together with other Da Vinci guides in the burden reduction space.

### Performance
Depending on their location within the workflow, CDS Hooks may be processed in a synchronous manner. This means that the user who is performing the business action that triggers the hook might be blocked from continuing the action until cards have been returned by the CDS service. For example, a CRD client might not allow progress of an 'order sign' business action until decision support has been returned from all order-sign services and the user has had a chance to interact with any cards they deem relevant. The corollary to this is that services must respond to hook invocations quickly to avoid impeding clinician workflow - and turning the intended benefit of CRD into a detriment.

This specification sets a target duration in which CRD services are expected to return their CDS Hooks response after being invoked. CRD services **SHALL** return responses for all supported hooks and **SHALL** respond within the required time 90% of the time. (That is, all [primary](hooks.html#hook-categories) hooks and any [supporting](hooks.html#hook-categories) hooks where they opt to support the hook.) For most hooks, this target time is 5 seconds. It extends to 10 seconds for [Appointment Book](hooks.html#appointment-book) and for [Order Dispatch](hooks.html#order-dispatch) and [Order Sign](hooks.html#order-sign) hooks that are sent at least 24 hours after the last hook invocation for the same order(s) because there is no opportunity to cache data in those cases.

The authors of this IG acknowledge that this may limit the payer from providing full responses to all calls where a response is theoretically possible. Systems should provide the best information they can in a timely fashion and rely on other layers of the payment and adjudication process to catch issues that require longer processing. For example, if a system is able to provide a response on eligibility within the time window, but not on whether prior authorization is needed, it can return cards indicating the service is covered, but that DTR is needed (to determine prior authorization requirements). Where a payer responds with a coverage information extension indicating doc-needed of 'clinical', 'admin', or 'patient' and the payer supports DTR, they **SHOULD** support gathering the additional information via DTR. This expectation is intended to change to **SHALL** in a future release.

The expectation of CRD is that CRD services **SHOULD** query all data necessary to make their coverage determination decisions if that data is available for query in the EHR and that data is not returned in prefetch.  Coverage determination decisions are: whether the service is covered, whether prior authorization is required, and whether additional information needs to be gathered.  It is not acceptable for a CRD service to rely exclusively on DTR as a mechanism to retrieve data.  DTR is for data retrieval that requires human intervention or review.  There may be circumstances where time constraints prevent all needed data from being retrieved, in which case DTR retrieval of data that would not typically need human review may be necessary.  However, this should never be the design objective.  This query requirement may be tightened to 'SHALL' in a future release.

CRD services are encouraged to leverage hooks fired earlier in the workflow (even if they do not provide decision support in response to those hooks) as an opportunity to begin caching relevant information for use when providing responses to later hooks. For example, when an 'Encounter Start' hook fires, the CRD service can retrieve and cache the patient's current coverage information and details about their specific plans, limits, etc. When an 'Order Select' fires, the service can cache information about coverage and authorization rules associated with the ordered service. Potentially relevant information such as past labs, prior therapies, or relevant diagnoses can also be retrieved from the EHR. As a result, when an 'Order Sign' or 'Order Dispatch' hook fires, the CRD service should have almost all information needed to render an immediate decision, allowing response times to be met much more easily.

A determination that additional information is needed (e.g., via DTR) is considered to be a valid response. Where a payer responds with a coverage information doc-needed code of 'clinical', 'admin', or 'patient' and the payer supports DTR, they **SHOULD** support gathering the additional information via DTR. This expectation is intended to change to **SHALL** in a future release.

CRD clients **SHALL** provide a mechanism for providers to bypass a CRD process that is taking longer than the aforementioned time limit to ensure users are not blocked from proceeding with their business flow. Where a CRD client opts to not block users from proceeding for responses that come back in a period of time shorter than the target time window in this guide (i.e., 5s or 10s), the client must ensure that users are made aware of the information when it is available. For responses that come back in a time period that exceeds this duration, CRD clients **MAY** ignore the resulting cards and/or system actions.

<blockquote class="stu-note">
<p>Payers and healthcare IT system vendors are both encouraged to provide feedback around whether this timing expectation strikes the appropriate balance between allowing appropriate decision support and allowing timely progress of workflow. This evaluation should consider what systems will need to be involved in the decision support process, what external calls might be needed, what caching strategies are viable, etc.
</p></blockquote>

### Accuracy
CDS services **SHALL** ensure that the guidance returned with respect to coverage and prior authorizations (e.g., assertions that a service is covered, or prior authorization is not necessary) is as accurate as guidance that would be provided by other means (e.g., portals, phone calls). Also, such guidance should allow for possible variances in coding and submission. (See [Impact on payer processes](implementation.html#impact-on-payer-processes) on the Implementation Considerations page.)

### Terminology
When invoking CDS Hooks, resources reflecting the clinical/business representation of the order, appointment, encounter, etc. will be transmitted to the CRD server. These data representations will generally make use of codes to describe the type of service or product being ordered, booked, or performed. These codes will draw from the code systems used at this stage of the business process and will typically be clinical codes rather than billing codes. That said, it is always possible to send multiple codings within a CodeableConcept. Where the selected code is not already a billing code and CRD clients are able to automatically determine what the corresponding billing code is, they **SHOULD** send a Coding with the billing code alongside the clinical code to reduce the risk of the receiving payer making a different translation.

### Appropriate use of hooks
CDS Hooks are intended to improve healthcare provider care-planning processes by allowing relevant and useful information to be inserted into provider workflows. At the same time, inserting additional information into a provider's workflow will add cognitive load, even if the information is not acted upon, and therefore must be done judiciously.

Payers and service providers **SHALL** ensure that CDS Hooks return only messages and information relevant and useful to the intended recipient.

### CRD Servers
Payers may have multiple back-end functions that handle different types of decision support and/or different types of services. If a payer supports [endpoint discovery]({{site.data.fhir.ver.hrex}}/endpoint-discovery.html), they **SHALL** have at most a single endpoint for each coverage (e.g., Medicare, Medicaid, or commercial) they provide coverage under. In FHIR, a coverage instance essentially corresponds with the identification information on an insurance card, irrespective of the types of coverage available under that card. If a payer does not support endpoint discovery, they **SHALL** expose only one CRD endpoint capable of handling all coverages. All CRD requests for the patient coverage, irrespective of type of service, will be sent to a single endpoint. CRD servers are free to route the information from their endpoint(s) to back-end services as needed. This routing may evolve over time and should have no impact on CRD client calls.

Initial setup of connectivity between client and payer will have a manual component to establish security credentials and a trust relationship (unless both parties are part of a shared trust network).  Dynamic endpoint discovery allows for the potential for the use of different endpoints for different coverages and/or evolution of what endpoints are used for different coverage over time without changing security credential or legal agreement expectations.

### Enabling a CRD Server
When a CRD client configures itself to support a payer's CRD service, it will need to identify which payer(s) the service supports. This is needed to ensure that the CRD client only sends CRD calls to services that the patient has current coverage for. The CRD service is responsible for any internal routing based on which processing organization handles the decisions. For this purpose, payer means the organization listed on the member's insurance card.

Provider and EHR vendor organizations **MAY** leverage the [payer registry](http://hl7.org/fhir/us/davinci-pdex-plan-net) developed by PDex (which will eventually fold into the [national directory under FAST](https://confluence.hl7.org/display/FAST/National+Healthcare+Directory)) as a means of determining which endpoints exist for which payers as candidates for configuration. Once plans are in the national directory, CRD clients **SHOULD** include that plan identifier as a way to uniquely identify that plan.

All CRD clients will need to be configured to support communicating to a particular CRD server. This configuration process includes the following:

* Confirming that the CRD server can legitimately act on behalf of one or more payers
* Confirming that the CRD server can be trusted to receive and handle PHI
* Determining which hook(s) to enable for that CRD server
* Determining what scopes to provide the CRD server for access tokens issued to the service

In order to initiate this process, the payer responsible for a given CRD server must communicate with the relevant CRD client software vendor or provider organization and share the following information:

* The URL of their server
* Which hook types it supports
* What scopes it needs to perform its full function (and why)

### CRD Access Tokens
When a CRD client invokes a CRD server via CDS Hooks, it will provide an access token that allows the CRD server to retrieve additional patient information. The base rules for this token are defined in the [CDS Hooks specification](https://cds-hooks.hl7.org/2.0/#passing-the-access-token-to-the-cds-service). This specification imposes some additional constraints:

* The CRD client **SHALL** limit the scopes provided in their access token as narrowly as feasible to reflect the data requirements identified by the CRD service as necessary to perform their decision support.

* Such access tokens **SHOULD** have an expiration time of no longer than 30 seconds which should be sufficient for even 'parallel' decision support with something like 'Order Select' where a user is continuing to work while the decision support call is processing.

### Additional Data Retrieval
The context information provided as part of hook invocation will often not be enough for a CRD server to fully determine coverage requirements. This section of the guide describes a common set of queries that define data that most, if not all, CRD servers will need in order to perform their requirements assessment.

For this release of the IG, conformant CRD clients **SHOULD** support the CDS Hooks [prefetch](https://cds-hooks.hl7.org/2.0/#prefetch-template) capability and be able to perform all the prefetch queries defined perform all the queries defined in the [prefetch](#prefetch) section below.  Where prefetch is not supported, CRD clients **SHOULD** implement interfaces to [_include]({{site.data.fhir.path}}search.html#include) resources not available in the system's database. That is, if some of the data is stored in a separate system, it should ideally still be retrievable via `_include` in queries executed against the client. Each payer will define the prefetch requests for their CRD server based on the information they require to provide coverage requirements. They **MAY** include more and/or less than described in this section. Prefetch requests **SHOULD** only include information that is always expected to be needed for each hook invocation. When information is only needed for certain invocations of the hook (e.g., for specific types of medications or services), that information **SHALL** only be retrieved by query using the provided token, never requested universally via prefetch. Not all CRD clients will support all prefetch requests. 

<blockquote class="stu-note">
In future releases of this specification, the requirements in this section might become a **SHALL**. Implementers are encouraged to provide feedback about this possibility based on their initial implementation experience.</blockquote>

The base requirement for these queries, whether based on Encounter or one of the request resources, is to bring back the following associated resources:

*  Patient
*  Relevant Coverage
*  Authoring Practitioner
*  Authoring Organization
*  Requested performing Practitioner (if specified)
*  Requested performing Organization (if specified)
*  Requested Location (if specified)
*  Associated Medication (if any)
*  Associated Device (if any)

Not all these will be relevant for all resource types. Different resources have differently named data elements and search parameters for them. In some cases, support only exists as extensions or does not exist at all. Where necessary, this implementation guide defines additional extensions to support retrieval of these elements. The intention is for both extensions and search parameters to eventually migrate into the core FHIR specification.

There are two possible mechanisms that can be used by the service to gather the information needed: prefetch and querying the CRD client to retrieve additional resources. Both mechanisms are defined as part of the [CDS Hooks specification](https://cds-hooks.hl7.org/2.0/#providing-fhir-resources-to-a-cds-service). In some cases, a mixture of both approaches might be necessary.

#### Prefetch
Prefetch is an optional capability of CDS Hooks that allows the client to perform certain query functions on behalf of the CRD server and provide the results in the initial hook invocation. This allows the client to optimize query performance and can simplify functionality for the CRD server.

In addition to the [base prefetch capabilities](https://cds-hooks.hl7.org/2.0/#prefetch-template) defined in the CDS Hooks specification, systems that support prefetch **SHOULD** support the [additional prefetch capabilities](deviations.html#additional-prefetch-capabilities) defined in this specification. The following table defines the standard prefetch queries for this implementation guide that **SHOULD** be supported for each type of resource. CRD clients **MAY** support only the resources needed to implement the relevant CDS Hooks and order types. Those search parameters with hyperlinks are defined as part of this implementation guide. The remainder are defined within their respective version of the FHIR core specification.

CRD client implementations **SHOULD NOT** expect standardized prefetch key names. CRD clients supporting prefetch **SHALL** inspect the CDS Hooks discovery endpoint to determine exact prefetch key names and queries.

In most cases, payers will require information about a patient’s coverage. As mentioned in [Controlling Hook Invocation](deviations.html#controlling-hook-invocation), whether returned as part of prefetch or returned via query, Coverage **SHALL** be limited to a single instance. How this happens is up to the CRD client.  The limitation of there only being one coverage applies regardless of whether the Coverage instance is being returned as part of prefetch or if Coverage is being searched using the token provided as part of hook invocation.  Regardless of method of invocation, there **SHALL** be exactly one Coverage instance returned.

Coverage prefetch will look like this:

{% raw %}
{% fragment Binary/CRDServices JSON BASE:services.where(hook='appointment-book') EXCEPT:prefetch.where(key='coverage') %}
{% endraw %}

A recommended set of prefetch expectations for all hook types can be found [here](Binary-CRDServices.html).

Other information will need to be retrieved using queries that are more specific to the type of hook being invoked and the resources passed with it.  The table below lists the queries to retrieve common key information for each type of context resource if not using prefetch.  Note that the queries use `draftOrders` as the context, which will hold for order-select and order-sign hooks, but will need to be `dispatchedOrders` for order-dispatch hooks.

{% raw %}
<table class="grid">
  <thead>
    <tr>
      <th>Resource</th>
      <th>Query</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tr>
    <td>Appointment</td>
    <td>
      <code>Appointment?_id={{context.appointments.Appointment.id}}<br/>
      &_include=Appointment:patient<br/>
      &_include=Appointment:practitioner:PractitionerRole<br/>
      &_include:iterate=PractitionerRole:organization<br/>
      &_include:iterate=PractitionerRole:practitioner<br/>
      &_include=Appointment:location<br/><br/>
      Coverage?patient={{context.patient}}</code>
    </td>
    <td>No requester</td>
  </tr>
  <tr>
    <td>DeviceRequest</td>
    <td>
      <code>DeviceRequest?_id={{context.draftOrders.DeviceRequest.id}}<br/>
      &_include=DeviceRequest:patient<br/>
      &_include=DeviceRequest:performer<br/>
      &_include=DeviceRequest:requester<br/>
      &_include=DeviceRequest:device<br/>
      &_include:iterate=PractitionerRole:organization<br/>
      &_include:iterate=PractitionerRole:practitioner<br/><br/>
      Coverage?patient={{context.patient}}</code>
    </td>
    <td>No performing location</td>
  </tr>
  <tr>
    <td>Encounter</td>
    <td>
      <code>Encounter?_id={{context.encounterId}}<br/>
      &_include=Encounter:patient<br/>
      &_include=Encounter:service-provider<sup>†</sup><br/>
      &_include=Encounter:practitioner<br/>
      &_include=Encounter:location<br/><br/>
      Coverage?patient={{context.patient}}</code>
    </td>
    <td>No requester</td>
  </tr>
  <tr>
    <td>MedicationRequest</td>
    <td>
      <code>MedicationRequest?_id={{context.draftOrders.MedicationRequest.id}}<br/>
      &_include=MedicationRequest:patient<br/>
      &_include=MedicationRequest:intended-dispenser<br/>
      &_include=MedicationRequest:requester:PractitionerRole<br/>
      &_include=MedicationRequest:medication<br/>
      &_include:iterate=PractitionerRole:organization<br/>
      &_include:iterate=PractitionerRole:practitioner</br>
      Coverage?patient={{context.patient}}</code>
    </td>
    <td>No performing location</td>
  </tr>
  <tr>
    <td>NutritionOrder</td>
    <td>
      <code>NutritionOrder?_id={{context.draftOrders.NutritionOrder.id}}<br/>
      &_include=NutritionOrder:patient<br/>
      &_include=NutritionOrder:provider<br/>
      &_include=NutritionOrder:requester<br/>
      &_include:iterate=PractitionerRole:organization<br/>
      &_include:iterate=PractitionerRole:practitioner<br/>
      &_include=NutritionOrder:encounter<br/>
      &_include:iterate=Encounter:location<br/>
      Coverage?patient={{context.patient}}</code>
    </td>
    <td>Location only through request encounter</td>
  </tr>
  <tr>
    <td>ServiceRequest</td>
    <td>
      <code>ServiceRequest?_id={{context.draftOrders.ServiceRequest.id}}<br/>
      &_include=ServiceRequest:patient<br/>
      &_include=ServiceRequest:performer<br/>
      &_include=ServiceRequest:requester<br/>
      &_include:iterate=PractitionerRole:organization<br/>
      &_include:iterate=PractitionerRole:practitioner</br>
      Coverage?patient={{context.patient}}</code>
    </td>
    <td>No performer location</td>
  </tr>
</table>
<p>
<sup>†</sup> The service-provider search type is only relevant if the CRD client supports the 'serviceProvider' element, which is not 'mustSupport'.
</p>
{% endraw %}

#### FHIR Resource Access
If information needed is not provided by prefetch, the CRD server can query the client directly using the [FHIR resource access](https://cds-hooks.hl7.org/2.0/#fhir-resource-access) mechanism defined in the CDS Hooks specification.

This can be done either by using individual queries or by invoking a batch of separate queries. In either case, the HTTP call that performs the query or executes the batch must pass the `fhirAuthorization.access_token` in the authorization header as defined in the [CDS Hooks specification](https://cds-hooks.hl7.org/2.0/#fhir-resource-access).  (Note that if the CRD client does not support _include, it may be necessary to perform separate queries in sequence in order to retrieve related resources.)

The following two examples show a batch query that could retrieve all CRD-relevant resources as well as the structure of the corresponding batch response.

**Query Batch Request**<br/>
This query presumes that an `order-sign` hook has been invoked and the following information has been passed in as context:
* The patient identifier 123
* The encounter identifier 987
* Two ServiceRequests with different PractitionerRole performers (ABC and DEF)

{% fragment Bundle/search-request JSON %}

Note: This query also presumes that all this information would be relevant to the CRD server in the decisions it needed to make. In practice, the service would only query the information needed to determine coverage requirements. Also, the service will only be able to query data where the scopes made available in the `fhirAuthorization.scope` permit the desired queries.

The Batch bundle uses a mixture of read and search operations to retrieve the relevant resources.

**Query Batch Response**<br/>
The response is a batch response Bundle, with each entry containing either a single resource (in response to a read) or a search response Bundle with the results of the previous search. Each entry in the response bundle corresponds to the GET entry in the request Bundle.

{% fragment Bundle/search-response JSON EXCEPT:id|practitioner BASE:entry.resource.where(($this is Bundle).not()) | entry.resource.entry.resource %}

#### Error Handling
The use of an HTTP 412 response to the CDS Hook invocation is for situations where the requested prefetch was not provided and the CRD service was unable to invoke the queries itself.  It **SHALL NOT** to be used in situations where the prefetch was provided or the query was successfully performed but the record in question did not have all the data the payer might have needed/desired.  Indicating additional information through DTR is the preferred approach when managing situations where the needed information isn't queryable from the EHR.  Similarly, HTTP 4xx or 5xx responses are only appropriate if there was an internal failure of the service, not if the payer business rules for "needed data" were not met.  Error codes indicate that there is a technical issue that should be fixed.

#### Query Notes
*  Conformant CRD clients **SHOULD** be able to perform all of the queries defined in the [prefetch](#prefetch) section above and, where needed, **SHOULD** implement interfaces to [_include]({{site.data.fhir.path}}search.html#include) resources not available in the client's database.

* Executing these queries in either batch or prefetch will bring back some redundant information such as information that was already known to the CRD client and included in the request. Examples of this redundant information include returning the original request, returning Encounter and Appointment resources found in the hook contexts, and returning Patient, Practitioner, Organization, and Coverage resources that are common for different request types for the order-sign hook. This redundancy is the cost of using the prefetch mechanism or batch mechanism. Payers seeking greater efficiency can perform direct queries that are more tuned at the cost of needing to make multiple service calls.

* Queries use the defined search parameter names from the respective FHIR specification versions. If parties processing these queries have varied from these standard search parameter names (as indicated by navigating their CapabilityStatements), the CRD server will be responsible for translating the parameters into the CRD client's local names. For example, if a particular CRD client's CapabilityStatement indicates that the parameter name (that corresponds to HL7's Encounter search criteria) is named 'visit' on the client's server, the service will have to construct its search URL accordingly.

* When full prefetch as defined here is not supported, CRD clients **SHOULD**, at minimum, support the batch query syntax shown [above](#fhir-resource-access). CRD servers **MAY** choose to support the batch query mechanism, perform client-specific queries as necessary, or return no results when a client does not support its prefetch requirements.

* While these queries attempt to bring back all the potentially relevant information, not all information will necessarily exist for all requests or events, particularly at the time the hook is called. CRD servers **SHALL** provide what coverage requirements they can based on the information available.

* When processing data from query responses, always check the 'self' link to ensure that the server executed what was requested and processed the data as necessary - or try querying by a different mechanism (e.g. multiple queries rather than relying on `_include`).

### SMART on FHIR Hook Invocation
In addition to the real-time decision support provided by CDS Hooks, providers will sometimes need to seek coverage requirements information without invoking the workflow of their provider system to actively create an order, appointment, encounter, etc. A few real-world examples where hooks may be invoked this way include exploring a "what if" scenario, answering a patient question related to whether a service would be covered, and retrieving a guidance document they had seen in a previous card.

The solution to this need to perform coverage discovery at any time is the use of a SMART on FHIR app. Many CRD clients already support SMART on FHIR. That standard allows independently-developed applications to be launched from within the CRD client (possibly within the user interface) and to interact with its data. Clients may choose to use SMART on FHIR apps to invoke coverage requirements discovery from CRD servers for "what if" scenarios, using a CRD client's existing SMART on FHIR interface. Alternatively, they can develop such functionality internally.

CRD clients conforming with this specification **SHALL** support the SMART on FHIR interface, **SHALL** allow launching of SMART apps from within their application, and **SHALL** be capable of providing the SMART app access to information it exposes to CRD servers using the CDS Hooks interface.

NOTES:

* The use of SMART to explore "what if" scenarios is distinct from the use of SMART envisioned in CDS Hooks:
    * Rather than launching a SMART app based on a returned card, a SMART app is used here to invoke a CDS hook to artificially simulate a workflow in the CRD client that would normally trigger a hook.
    * When a SMART app is launched, draft orders within a CRD client will not typically be available to the app to submit to the CRD server. Information for consideration in the "what if" scenario will need to be entered into the app directly.
    * When a CRD server returns cards, any instructions associated with the cards will be displayed in the app, but it may not be able to execute the instructions within the cards.
* Exploration of "what if" scenarios using the app is intended to work for all the hooks. This might be accomplished using separate SMART apps for different types of orders or processes (e.g., distinct what if apps for ordering drugs, ordering labs, doing referrals, scheduling appointments) or a single SMART app that prompts the user to identify the scenario they are interested in exploring prior to invoking the hook.
* The app/CRD client **MAY** choose to use configuration options to control what types of calls are available.

In the specific case of order-based hooks, "what if" **SHOULD** use the Order Sign hook, but **SHALL** use the configuration option that prevents the return of an unsolicited determination and **MAY** use configuration options to prevent the return of other irrelevant types of cards (e.g., duplicate therapy).

### Additional Considerations
1. When CRD clients pass resources to a CRD server as part of context, the resources **SHALL** have an ID and that ID **SHALL** be usable as a target for references in resources manipulated by CDS Hook actions and/or by SMART apps. This does not mean that the IDs passed to CRD server must persist, but rather that the CRD client must handle adjustments to any references made to them (or provide necessary redirects) ensuring that any references made to the in-memory resource will remain valid. This also means that CRD clients will need to support the creation or updating of resources that include references to resources that might, at the time, only exist in memory and not yet be available as persistent entities.

2. The receipt of coverage requirements (be it "no requirements" or specific requirements or recommendations) has financial implications for both healthcare providers and payers. If a provider receives a message of "no requirements" and subsequently has a claim denied because of unmet requirements, it will be necessary for both sides to be able to confirm whether a "no requirements" response was sent and what information was in the hook invocation that led to that response. Therefore, in addition to any logging performed for security purposes, both CRD clients and CRD servers **SHALL** retain logs of all CRD-related hook invocations and their responses for access in the event of a dispute. Systems can use the Suggestion.uuid element to aid in log reconciliation. Organizations **SHALL** have processes to ensure logs can be accessed by appropriate authorized users to help resolve discrepancies or issues in a timely manner.<p>NOTE: Because the information in these logs will often contain PHI, access to the logs themselves will need to be restricted and logged for security purposes.</p>

3. CRD clients that invoke CDS hooks multiple times during the creation, editing, and review phase are responsible for managing the resulting cards and determining what to display to the user. CRD clients **SHOULD** ensure that multiple cards with the same advice are handled in a way that will not create a burden on the user.

4. Most implementation guides provide JSON, XML, and Turtle representations of artifacts. However, because this guide is primarily using CDS Hooks (which only supports JSON) and SMART on FHIR (which primarily uses JSON), this implementation guide only publishes the JSON version of artifacts.

5. The examples in this guide use whitespace for readability. Conformant systems **SHOULD** omit non-significant whitespace for performance reasons.

6. Examples provided within this specification strive to be realistic, but might not reflect accurate/current coverage requirements.

---

// File: input/pagecontent/history.md

This page describes the primary releases of the specification and summarizes the content for each:

### Release 2.1.0
* [FHIR-47329](https://jira.hl7.org/browse/FHIR-47329), [FHIR-48622](https://jira.hl7.org/browse/FHIR-48622) - Added support for USCDI v4 (US Core 7.0.0) and clarify language about what multi-US-Core release implementation means
* [FHIR-48352](https://jira.hl7.org/browse/FHIR-48352) - Set mustSupport expectations for practitioner, practitionerRole and organization for multi-target relationships
* [FHIR-48430](https://jira.hl7.org/browse/FHIR-48430) - Set clearer expectations for handling failure states
* [FHIR-48559](https://jira.hl7.org/browse/FHIR-48559) - Make ability to bypass CRD services that are running too long a 'SHALL'
* [FHIR-48560](https://jira.hl7.org/browse/FHIR-48560) - Make clear that clients need to constrain scopes provided to what's needed
* [FHIR-48722](https://jira.hl7.org/browse/FHIR-48722) - Collapse the 2 Encounter profiles (USCDI 1, USCDI 3+4) into one

### Release 2.1.0-preview
Significant Coverage Information changes:
* [FHIR-46088](https://jira.hl7.org/browse/FHIR-46088) - Set MS expectations (and general expectations too)
* [FHIR-46460](https://jira.hl7.org/browse/FHIR-46460) - Remove 'response' element
* [FHIR-46089](https://jira.hl7.org/browse/FHIR-46089) - Tightened invariants around info-needed
* [FHIR-44410](https://jira.hl7.org/browse/FHIR-44410) - Add support for policy links and information as qualifiers
* [FHIR-45440](https://jira.hl7.org/browse/FHIR-45440) - Added new configuration option for 'wanting information' ServiceRequest and one not
* [FHIR-44909](https://jira.hl7.org/browse/FHIR-44909) - Added support for additional information from patient

Significant other changes:
* [FHIR-46440](https://jira.hl7.org/browse/FHIR-46640), [FHIR-46603](https://jira.hl7.org/browse/FHIR-46603) - Set expectations for endpoints and endpoint discovery
* [FHIR-45551](https://jira.hl7.org/browse/FHIR-45551) - Removed the CRD Practitioner profile (use HRex instead)
* [FHIR-46254](https://jira.hl7.org/browse/FHIR-46254) - Define a Task profile for order-dispatch hook
* [FHIR-44891](https://jira.hl7.org/browse/FHIR-44891) - Clarified expectations for mandatory hook support
* [FHIR-46006](https://jira.hl7.org/browse/FHIR-46006) - Added PractitionerRole to Appointment profile
* [FHIR-44527](https://jira.hl7.org/browse/FHIR-44527) - Corrected contexts for order-dispatch
* [FHIR-46120](https://jira.hl7.org/browse/FHIR-46120), [FHIR-43435](https://jira.hl7.org/browse/FHIR-43435) - Made Location.type MS and require it to be present in the hierarchy
* [FHIR-46383](https://jira.hl7.org/browse/FHIR-46383) - Prohibit use of CRD to point to portal launch
* [FHIR-43182](https://jira.hl7.org/browse/FHIR-43182) - Add expiration date to Coverage-Information
* [FHIR-45295](https://jira.hl7.org/browse/FHIR-45295) - Relax expections on Request statuses to not have to be 'draft'
* [FHIR-44388](https://jira.hl7.org/browse/FHIR-44388) - Split Appointment profile into two - one pointing to 
* [FHIR-45230](https://jira.hl7.org/browse/FHIR-45230) - Relaxed 'reason' constraints in profiles to align with US Core
* [FHIR-46793](https://jira.hl7.org/browse/FHIR-46793) - Set expectations for CRD clients to query data when possible

A variety of minor corrections and clarifications to wording and examples.


### Release 2.0.1
Corrected the embedded JSON examples to be technically correct and in line with other rules in the specification

### Release 2.0.0
A number of additional changes and enhancements.  Key differences are:
* Renamed the 'Annotate' card to [Coverage Information](cards.html#coverage-information-response-type) and made it a system action rather than a card
* Removed the Unsolicited determination card type
* Added system action as an optional feature of the [form completion](cards.html#request-form-completion-response-type) and [update coverage information](cards.html#create-or-update-coverage-records-response-type) cards
* Removed guidance on deferring card actions (as it's no longer terribly relevant for CRD and SMART now defines a mechanism)
* Added additional properties to the [coverage-information](StructureDefinition-ext-coverage-information.html) extension including the ability to specify questionnaires and draft responses for DTR, authorized billing codes, dependencies on other orders, and other details.
* Removed support for 'de-identified' invocation of CRD
* Corrected ServiceRequest.location to be 0..1 instead of 1..1
* Dropped expectation for coverage information to be conveyed as part of orders
* Changed language to make clear that CRD does not provide prior authorizations
* Tightened general conformance expectations 
* A few additional corrections and numerous clarifications and refinements

### Release 1.1.0
Added a number of enhancements and some changes to approach.  Key differences are:

* [Clarified](burden.html#users) that CRD results can be returned to non-clinical users
* Highlighted the [challenges](implementation.html#impact-on-payer-processes) of CRD data coming in a different form and set of codes than payers have traditionally dealt with
* Explicit expectations with respect to [performance](foundation.html#performance) and [accuracy](foundation.html#accuracy) of CRD Servers
* Expectations around client ability to [flag sensitive orders](foundation.html#appropriate-use-of-hooks)
* Specified a starter set of codes for [configuration options](deviations.html#configuration-options-extension) and mandated the appearance of those codes in cards in a new [topic](cards.html) element
* Made support for a [minimal set of configuration options](deviations.html#configuration-options-extension) mandatory
* Added an extension to [link cards to requests](deviations.html#linking-cards-to-requests)
* Introduced the new [order-dispatch](hooks.html#order-dispatch) hook
* Added the Annotate and Unsolicited Determination card types
* Revamped how [Prefetch](foundation.html#prefetch) handles retrieving a patient's coverage information
* Provided explicit guidance around deferring card actions
* Added a section on registering DTR apps with CRD
* Updated to support CRD 2.0, which included changes to the 'topic' element within cards
* Added support for system actions and made their use mandatory for updates to orders and coverage
* Added a definition of [mustSupport](conformance.html#mustsupport) for this guide
* Acknowledged that CRD clients can be made up of [multiple systems](index.html#systems)
* Removed constraint prohibiting [ServiceRequest.doNotPerform])(StructureDefinition-profile-servicerequest.html#profile)
* Added guidance on [enabling a CRD server](foundation.html#enabling-a-crd-server)
* Added guidance on [CRD access tokens](foundation.html#crd-access-tokens)
* Clarified expectations about [controlling hook invocation](deviations.html#controlling-hook-invocation)
* Provided guidance on [external references](cards.html#external-reference-response-type)
* Corrected cardType codes to use the IG temporary code system, as it is likely that long-term these codes won't all live as part of the IG
* Added CapabilityStatements describing CRD client and CRD Server responsibilities


As well there were various other adjustments to specification language, profiles, and examples to align with these changes and to correct minor typos or improve wording.


### Release 1.0.0
Initial release of the CRD specification.

---

// File: input/pagecontent/hooks.md

Each CDS Hook corresponds to a point in the workflow/business process within a CRD Client system where a specific type of decision support is relevant.  For example, the `order-select` hook **SHOULD** fire whenever a user of a CRD Client creates a new order or referral.  In many CRD Clients, the same hook might fire in multiple different workflows.  (For example, an CRD client might have different screens for ordering regular medications vs. vaccinations vs. chemotherapy, not to mention distinct screens for lab orders, imaging orders and referrals.  An order-select hook might be initiated from any or all of these screens/workflows.)

Within this implementation guide, CDS Hooks are used by CRD Clients to perform coverage requirements discovery from CRD Servers used by patients' payers.  Six hooks are identified that cover the main situations where coverage requirements discovery is likely to be needed: [appointment-book](#appointment-book), [encounter-start](#encounter-start), [encounter-discharge](#encounter-discharge), [order-dispatch](#order-dispatch), [order-select](#order-select), and [order-sign](#order-sign).  Payers and respective CRD Servers will vary between patients.  CRD Clients conforming to this implementation guide **SHALL** be able to determine the correct payer CRD Service to use for each request.

Not all CRD Clients will support all hook types or order resource types.  For example, community CRD client systems will not likely support `encounter-discharge`.  Community pharmacy systems would not likely support `appointment-book`.  Some EHRs might not support VisionPrescription when using order-sign.  CRD Clients conforming to this implementation guide **SHALL** support at least one of the hooks and (for order-centric hooks), at least one of the order resource types listed below and **SHOULD** support all that apply to the context of their system.  Future releases of this specification may increase expectations to support additional hooks.

Similarly, not all payers will necessarily provide coverage that is relevant to all hook types or order resource types.  For example, a payer that only provides drug coverage would be unlikely to have coverage information to return on an `encounter-discharge` event or a VisionPrescription order.  CRD Servers conforming to this implementation guide **SHALL** provide a service for all hooks and order resource types required of CRD clients by this implementation guide unless the server has determined that the hook will not be reasonably useful in determining coverage or documentation expectations for the types of coverage provided.

CRD Clients and CRD Servers **MAY** choose to support additional hooks available in the registry on the [CDS Hooks continuous integration build](https://cds-hooks.org) or custom hooks defined elsewhere.  In these cases, systems **SHOULD** adhere to the conformance expectations defined in this specification for any hooks listed here.

In the absence of guidance from the CDS Hooks specification, CRD Servers are expected to conform to the following rules when responding to requests from a CRD Client:

* If the CRD Server encounters an error when processing the request, the system **SHALL** return an appropriate error HTTP Response Code, starting with the digit "4" or "5", indicating that there was an error.
* The CRD Server **SHOULD** provide an OperationOutcome for internal issue tracking by the client system.
* The CRD Client **MAY** display to the user that the Coverage Requirements Discovery Service is unavailable.  If additional information (e.g. number to call) is available, it **MAY** also be included in the message to the user.
* While any 4xx or 5xx response code could be raised, the CRD Server **SHALL** use the 400 and 422 codes in a manner consistent with the FHIR RESTful Create Action, specifically:
    * 400 - Bad Request - The request is not parsable as JSON or is not valid against the CRD specification.  Also used if a CRD service receives a call where the primary Coverage (either provided by prefetch or queried by the payer) does not have a payer.identifier that identifies a payer that is handled by that CRD service endpoint, the server SHALL return a 400 error and SHOULD provide an OperationOutcome.  This includes situations where no Coverage is accessible, multiple Coverages are accessible, or the provided Coverage does not have a payer.identifier at all.
    * 422 - Unprocessable Entity - The request is valid JSON, but is not conformant to CDS Hooks, FHIR resources, or required profiles

### Hook Categories
The hooks supported by this guide can be categorized into two types: 'primary' hooks and 'supporting' hooks.

The 'primary' hooks are [Appointment Book](#appointment-book), [Orders Sign](#order-sign), and [Order Dispatch](#order-dispatch).  CRD Servers **SHALL**, at minimum, return a [Coverage Information](StructureDefinition-ext-coverage-information.html) system action for these hooks, even if the response indicates that further information is needed or that the level of detail provided is insufficient to determine coverage.

The 'secondary' hooks are [Orders Select](#order-select), [Encounter Start](#encounter-start), and [Encounter Discharge](#encounter-discharge).  These hooks **MAY** return cards or system actions, but are not expected to, and CRD clients are free to ignore any cards or actions returned.  (CRD clients **SHOULD** use the [configuration options](deviations.html#new-hook-configuration-mechanism) to instruct CRD servers to not even try to return cards if they do not intend to display/process them.)  If Coverage Information is returned for these hooks, it **SHALL NOT** include messages indicating a need for [clinical](ValueSet-AdditionalDocumentation.html) or [administrative](ValueSet-AdditionalDocumentation.html) information, as such information is expected to be made available later in the process and therefore such guidance is not useful.

The following sections describe the hooks covered by this implementation guide as well as any constraints, profiles, and resources expected to be supported by conformant implementations.

The hooks listed on the CDS hooks website are subject to update by the community at any time until they go through the ballot process.  However, all substantive changes are noted in the *Change Log* section at the bottom of the page describing each hook.  For each hook listed below, this specification identifies a specific version.  For the sake of interoperability, implementers are expected to adhere to the interface defined in the specified version of each hook, though compatible changes from future versions can also be supported.  CRD Servers **SHALL** handle unrecognized context elements by ignoring them.

Below is a summary diagram that outlines all the hooks, indicating when responses are mandatory or optional, and provides insights into what contributes to caching and attribution.

Note: Any hook can theoretically be used to assert a relationship from a member attribution perspective.   The two hooks highlighted are the most appropriate ones as they could theoretically allow information to flow from the payer as part of the 'current' care delivery.  Hooks later in the workflow would typically be too late to allow data to flow in a way that would allow that information to be taken into account in the current care event.

{::options parse_block_html="false" /}
<figure>
  <img height="800px" src="hooks.png" alt="Hooks Diagram"/>
  <figcaption><b>    Figure 2: Hooks Summary Diagram</b></figcaption>
  <p></p>
</figure>
{::options parse_block_html="true" /}

### appointment-book
This hook is described in the CDS Hook specification [here](https://cds-hooks.hl7.org/hooks/appointment-book/2023SepSTU1Ballot/appointment-book/).  This version of the CRD implementation guide refers to version 1.0 of the hook.

This hook would be triggered when the user of a CRD Client books a future appointment for a patient with themselves, with someone else within their organization, or with another organization.  (Note that whether the CRD Client will create an appointment - triggering the `appointment-book` hook - or a ServiceRequest - triggering an `order-select` or `order-sign` hook - can vary depending on the service being booked and the organizations involved.)

Potentially relevant CRD advice related to this hook might include:

* Requirements related to the intended location and/or participants (e.g. warnings about out-of-network)

* Requirements related to the service being booked (e.g. Is prior authorization needed? Is the service covered? Is the indication appropriate? Is special documentation required?)

* Requirements related to the timing of the service (e.g. is the coverage still expected to be in effect? is the service too soon since the last service of that type?)

* Reminders about additional services that are recommended to be scheduled or booked for the same patient - either as part of the scheduled encounter or as part of additional appointments that could be created at the same time

While this hook supports userIds of Patient and RelatedPerson, for CRD purposes it is enough to support Practitioner and PractitionerRole.  Support for Patient and RelatedPerson as users is optional.  (Note that Practitioner and PractitionerRole include both licensed healthcare professionals as well as administrative staff.)

The profiles expected to be used for the resources resolved to by the userId, patientId and encounterId and in the `appointments` context elements are as follows:

<table class="grid">
  <thead>
    <tr>
      <th>CRD Profiles</th>
      <th>HRex &amp; US Core Profiles</th>
    </tr>
  </thead>
  <tr>
    <td><a href="StructureDefinition-profile-appointment-with-order.html">profile-appointment-with-order</a> or <a href="StructureDefinition-profile-appointment-no-order.html">profile-appointment-no-order</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-encounter.html">profile-encounter</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-patient.html">profile-patient</a></td>
    <td/>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-practitioner.html">US Core practitioner</a></td>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.hrex}}/StructureDefinition-hrex-practitionerrole.html">hrex-practitionerrole</a></td>
  </tr>
</table>

Notes: 
* CRD Servers **MAY** use this hook as a basis for associating a patient with a particular practitioner from a payer attribution perspective.
* CRD clients and servers **SHALL**, at minimum, support returning and processing the [Coverage Information](StructureDefinition-ext-coverage-information.html) system action for all invocations of this hook.

### encounter-start
This hook is described in the CDS Hook specification [here](https://cds-hooks.hl7.org/hooks/encounter-start/2023SepSTU1Ballot/encounter-start/).  This version of the CRD implementation guide refers to version 1.0 of the hook.

This hook would be triggered when a patient is admitted, a patient arrives for an out-patient visit, and/or when a provider first engages with a patient during an encounter.  The `encounter-start` hook serves a similar purpose to the [appointment-book](#appointment-book) hook, though it provides less lead time to react to recommendations. If the purpose of the appointment is to perform a service that requires a 2-week prior authorization process, it is more efficient to identify prior-authorization requirements proactively through the use of the appointment-book hook to prevent the patient from showing up for an appointment that will need to be canceled and rescheduled.  

The advice returned for this hook would include the same sorts of advice as provided for using [appointment-book](#appointment-book).  However, the hook is still necessary because not all encounters will be the result of appointments, not all systems that schedule appointments will necessarily have checked for coverage requirements, and the patient's circumstances and/or coverage as well as the payer's guidelines could have evolved since the appointment was scheduled.

Note that Practitioner and PractitionerRole include both licensed healthcare professionals, as well as administrative staff.

The profiles expected to be used for the resources resolved to by the userId, patientId, and encounterId context references are as follows:


<table class="grid">
  <thead>
    <tr>
      <th>CRD Profiles</th>
      <th>HRex &amp; US Core Profiles</th>
    </tr>
  </thead>
  <tr>
    <td><a href="StructureDefinition-profile-encounter.html">profile-encounter</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-patient.html">profile-patient</a></td>
    <td/>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-practitioner.html">US Core practitioner</a></td>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.hrex}}/StructureDefinition-hrex-practitionerrole.html">hrex-practitionerrole</a></td>
  </tr>
</table>

Notes: 
* CRD Servers **MAY** use this hook as a basis for associating a patient with a particular practitioner from a payer attribution perspective.

### encounter-discharge
This hook is described in the CDS Hook specification [here](https://cds-hooks.hl7.org/hooks/encounter-discharge/2023SepSTU1Ballot/encounter-discharge/).  This version of the CRD implementation guide refers to version 1.0 of the hook.

This hook would generally be specific to an in-patient encounter and would fire when a provider is performing the discharge process within the CRD Client.

Potentially relevant CRD advice related to this hook might include:

* Verifying that documentation requirements for the services performed have been met to ensure the services provided can be reimbursed

* Ensuring that required follow-up planning is complete and appropriate transfer of care has been arranged, particularly for accountable care models

The profiles expected to be used for the resources resolved to by the userId, patientId, and encounterId context references are as follows:

<table class="grid">
  <thead>
    <tr>
      <th>CRD Profiles</th>
      <th>HRex &amp; US Core Profiles</th>
    </tr>
  </thead>
  <tr>
    <td><a href="StructureDefinition-profile-encounter.html">profile-encounter</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-patient.html">profile-patient</a></td>
    <td/>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-practitioner.html">US Core practitioner</a></td>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.hrex}}/StructureDefinition-hrex-practitionerrole.html">hrex-practitionerrole</a></td>
  </tr>
</table>

### order-dispatch
This hook is described in the CDS Hook specification [here](https://cds-hooks.hl7.org/hooks/order-dispatch/2023SepSTU1Ballot/order-dispatch/).  This version of the CRD implementation guide refers to version 1.0 of the hook.

This is a new hook that allows for decision support to be provided when the intended performer of a service is not chosen when the order is written, but instead at some later time-point, quite frequently by someone other than the practitioner who wrote the order.  Because knowing 'who' will perform the service is often relevant when determining coverage and prior authorization requirements, and because it is also a useful point for providing guidance such as suggesting alternative "in-network" providers, this is a useful point in client workflow to provide decision support.

This hook will fire at some point after (possibly well after) the [order-sign](#order-sign) hook fires.  It only passes the patient id, order id, performer, and (optionally) the Task that describes the fulfillment request as part of the context.  This specification does not require use of the Task resource.

This hook allows multiple resource types to be present. Resources provided could all be the same type or be a mixture of types.  Coverage requirements **SHOULD** be limited only to those resources that are included in the `dispatchedOrders` context, though the content of other resources **SHOULD** also be considered before making recommendations about what additional actions are necessary.  (I.e. don't recommend an action if there's already an order to perform that action.)  

The different relevant resource types are as follows (support can vary between clients):

**CommunicationRequest**: Used when a provider requests that another provider transfer patient records or other supporting information to another organization or agency.

**DeviceRequest**: Used for durable medical equipment orders, such as wheelchairs, prosthetics, diabetic supplies, etc.  It can also be used to order glasses and other vision-correction devices.

**MedicationRequest**: Used to order inpatient and outpatient medications.<sup>*</sup>  Can also be used to order vaccinations.

**ServiceRequest**: Used to order a referral, lab tests, diagnostic imaging, and sometimes to schedule a future appointment (also see [appointment-book](#appointment-book)).

**NutritionOrder**: Used to order the preparation of specific meal types.  Generally used for in-patient care, but potentially also relevant for homecare.

<sup>*</sup> - Note: in the medication space, regulations may mandate alternate standards for some of the functionality covered by CRD for certain classes of medications.  E.g. NCPDP Script


CRD responses might include:

* Information about preauthorization and clinical documentation requirements, including forms to be completed

* Alternative performers (e.g. in-network providers)


There are no constraints or special rules related to this hook beyond the profiles expected to be used for the resources resolved to by the `patientId` or `encounterId` or in the `dispatchedOrders` context element:

<table class="grid">
  <thead>
    <tr>
      <th>CRD Profiles</th>
      <th>HRex &amp; US Core Profiles</th>
    </tr>
  </thead>
  <tr>
    <td><a href="StructureDefinition-profile-devicerequest.html">profile-devicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-encounter.html">profile-encounter</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-medicationrequest.html">profile-medicationrequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-nutritionorder.html">profile-nutritionorder</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-patient.html">profile-patient</a></td>
    <td/>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-practitioner.html">US Core practitioner</a></td>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.hrex}}/StructureDefinition-hrex-practitionerrole.html">hrex-practitionerrole<sup>†</sup></a></td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-servicerequest.html">profile-servicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-task-dispatch.html">profile-task-dispatch</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-visionprescription.html">profile-visionprescription</a></td>
    <td/>
  </tr>
</table>

<sup>†</sup> While this hook does not explicitly list PractitionerRole as an expected resource type for userId, it is not prohibited and is included to allow linking the user to a Practitioner in a specific role acting on behalf of a specific Organization.



Notes: 
* CRD Servers **MAY** use this hook as a basis for associating a patient with a particular practitioner from a payer attribution perspective.
* CRD clients and servers **SHALL**, at minimum, support returning and processing the [Coverage Information](StructureDefinition-ext-coverage-information.html) system action for all invocations of this hook.


### order-select
This hook is described in the CDS Hook specification [here](https://cds-hooks.hl7.org/hooks/order-select/2023SepSTU1Ballot/order-select/).  This version of the CRD implementation guide refers to version 1.0 of the hook.

Support for this hook is optional, as not all information will necessarily be available when this hook is invoked.  Therefore, the [Order Sign](#order-sign) and [Order Dispatch](#order-dispatch) hooks are more critical to implement because they fire when information is required to be more complete and also represent the 'end' of the user engagement in their respective processes.  That said, the "Order Select" hook is still quite useful.

First, because it fires earlier in the user's system interactions, it provides an opportunity for CRD services to initiate back-end queries that might take time to complete so that relevant information is already retrieved and cached before Order Sign is reached.  This increases performance and makes it easier for CRD services to respond in the required timeframe.

Second, where a CRD service is able to provide guidance to providers earlier in the process (e.g. upon selection of a service but before entering detailed instructions), it can help to make the provider experience more efficient.  (If a provider knows up-front that a service won't be paid for but an alternative would be, they might be happier if they can save the time on entering full details before finding this out.)  Not all providers or EHRs will necessarily want to receive 'proactive' decision support during the order entry process.  EHRs can be configured as to what types of cards they're interested in receiving back for this hook, including no cards at all if the hook is being invoked solely for performance/caching reasons.

This hook allows multiple resource types to be present. Resources provided could all be the same type or be a mixture of types.  Coverage requirements **SHOULD** be limited only to those resources that are included in the `selections` context, though the content of other resources **SHOULD** also be considered before making recommendations about what additional actions are necessary.  (I.e. don't recommend an action if there's already a draft order to perform that action.)  

The different relevant resource types are as follows (support can vary between clients):

**CommunicationRequest**: Used when a provider requests that another provider transfer patient records or other supporting information to another organization or agency.

**DeviceRequest**: Used for durable medical equipment orders, such as wheelchairs, prosthetics, diabetic supplies, etc.  It can also be used to order glasses and other vision-correction devices.

**MedicationRequest**: Used to order inpatient and outpatient medications.<sup>*</sup>  Can also be used to order vaccinations.

**ServiceRequest**: Used to order a referral, lab tests, diagnostic imaging, and sometimes to schedule a future appointment (also see [appointment-book](#appointment-book)).

**NutritionOrder**: Used to order the preparation of specific meal types.  Generally used for in-patient care, but potentially also relevant for homecare.

<sup>*</sup> - Note: in the medication space, regulations may mandate alternate standards for some of the functionality covered by CRD for certain classes of medications.  E.g. NCPDP Script


CRD responses might include:

* Information about preauthorization and clinical documentation requirements, including forms to be completed

* Alternative therapies that are covered or required first-line therapies

* Potential drug-drug interactions based on existing payer knowledge

* Recommendations about in-network vs. out-of-network providers for referrals


There are no constraints or special rules related to this hook beyond the profiles expected to be used for the resources resolved to by the `patientId` or `encounterId` or in the `draftOrders` context element:

<table class="grid">
  <thead>
    <tr>
      <th>CRD Profiles</th>
      <th>HRex &amp; US Core Profiles</th>
    </tr>
  </thead>
  <tr>
    <td><a href="StructureDefinition-profile-devicerequest.html">profile-devicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-encounter.html">profile-encounter</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-medicationrequest.html">profile-medicationrequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-nutritionorder.html">profile-nutritionorder</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-patient.html">profile-patient</a></td>
    <td/>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.uscore7}}/StructureDefinition-us-core-practitioner.html">US Core practitioner</a></td>
  </tr>
  <tr>
    <td/>
    <td><a href="{{site.data.fhir.ver.hrex}}/StructureDefinition-hrex-practitionerrole.html">hrex-practitionerrole<sup>†</sup></a></td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-servicerequest.html">profile-servicerequest</a></td>
    <td/>
  </tr>
  <tr>
    <td><a href="StructureDefinition-profile-visionprescription.html">profile-visionprescription</a></td>
    <td/>
  </tr>
</table>

<sup>†</sup> While this hook does not explicitly list PractitionerRole as an expected resource type for userId, it is not prohibited and is included to allow linking the user to a Practitioner in a specific role acting on behalf of a specific Organization.

Notes: 
* While this hook is defined for use when ordering, it is still relevant when proposing (e.g. as part of a consult note) or planning (e.g. as part of a care plan) the use of an intervention.  All the 'Request' resources support differentiating between plans, proposals, and orders.  Where CRD Clients have an appropriate workflow and data capture mechanism, this hook **MAY** be used in scenarios that don't involve creating a true order.


### order-sign
This hook is described in the CDS Hook specification [here](https://cds-hooks.org/hooks/order-sign/).  This version of the CRD implementation guide refers to version 1.1 of the hook which, at the time of publication, was not available as a snapshot.  Therefore the preceding link refers to the CDS hooks current build..

This hook serves a very similar purpose to [order-select](#order-select).  The main difference is that all the listed draft orders are considered 'complete'.  That means that it's appropriate to provide warnings if there is insufficient information to determine coverage requirements.  As well, all `draftOrders` are appropriate to comment on when using order-sign as the `selections` field found in in order-select is not used in order-sign..

Use and profiles for [order-select](#order-select) also apply to `order-sign`.

Notes: 
* CRD Servers **MAY** use this hook as a basis for associating a patient with a particular practitioner from a payer attribution perspective.
* CRD clients and servers **SHALL**, at minimum, support returning and processing the [Coverage Information](StructureDefinition-ext-coverage-information.html) system action for all invocations of this hook.

---

// File: input/pagecontent/implementation.md

This page lists considerations and recommendations for implementation that fall outside the conformance expectations established by the specification. This covers content that the specification authors and project team consider to be essential business practices, good ideas, as well as concepts worthy of consideration and awareness. However, the content here doesn't define specific testable behavior.

### Suppressing Guidance

Some CRD clients might suppress certain types of payer guidance as being the 'default' presumption. For example, "Covered, no prior authorization required". In cases where CRD systems do this, there might be an issue if the CRD service becomes unable to respond and the CRD client does not clearly flag to the user that the service is not available. In that case, providers might incorrectly presume that authorization is not needed. Clients that perform such suppression of messages **SHALL** mitigate this potential for misinterpretation.

### Limitations on Accuracy

In rare situations, circumstances might change in a way that invalidates information provided by a CRD server prior to execution of an ordered service. For example, coverage is terminated or changed by the employer, or data in the record is subsequently found to be erroneous. Providers (and where provided information is shared with them, patients) will need to be aware that, irrespective of this guide's expectations for [accuracy](foundation.html#accuracy), assertions made by a CRD server are always "point-in-time" and do not constitute an irrevocable promise any more than equivalent assertions made via telephone, fax, or mail.

### Managing 

Key aspects of interoperability for this specification include agreement on how to identify payers, identify different types of coverage, etc. As yet, there is no industry-wide solution to this issue. However, HL7 is working with industry partners on viable solutions to these issues. Guidance and recommendations on how to manage consistent identity of payer concepts as well as other topics can be found in the [CRD Implementer Support](https://confluence.hl7.org/pages/viewpage.action?pageId=91991946) confluence page. Some of the guidance there may migrate to this specification and become 'SHALL' in future releases, so implementers are strongly encouraged to align with the guidance on the page in their early development.

### Impact on payer processes

CRD functionality will typically not be able to be fully implemented using payers' existing adjudication engines. The business process involved is quite different:

* Traditional adjudication engines expect a formal submission of a prior authorization request that includes all elements necessary for adjudication, including specific billing codes, modifier codes, billing diagnoses, service types, etc. The specific performer, quantity, performer, timeframe, etc. will all be known and properly specified. A specific response is expected *only* for the service described.

* With CRD, the only information available is what the clinical user specifically enters when creating a clinical order, appointment, etc. Back-end or financially-oriented users will generally not be involved at all. The user's objective is to drive the clinical process, not the billing process. The codes provided will be clinical ones and the information entered will focus on what the performer needs to execute the request, not on what a payer might want to support prior authorization. Information such as who will perform, where they will perform, when they will perform, etc. may not be known. With CRD there can be multiple contingent responses. For example "Not covered if billed as A or B, covered with prior authorization needed if billed as C or D, and no authorization required if billed as E".

* CRD isn't only seeking information about approval of a prior authorization. It also includes determining whether coverage exists, whether additional information is needed (such as DTR), etc. Legacy engines will not necessarily be set up to do this.

* The timeframes for evaluation will also differ. Many payers have an asynchronous prior authorization process where processing may take several minutes or even longer. CRD timelines are much shorter: 5 to 10 seconds, depending on circumstances.

Because of these consisderations, modifications of existing engines or even development of independent engines to support CRD is likely.

Specific strategies that may be helpful for payers include:

#### General strategies

It will be common that the amount of information provided may be insufficent for a CRD service to confidently assert whether the requested service is covered or whether prior authorization is needed. Often the answer will be something like "if it's in network, then...", "if it's done on an out-patient basis, then...", or "if it's billed under one of these 3 codes, then..." The base results will fit into one of four buckets: "not covered", "covered with prior authorization required", "covered, with prior authorization granted", or "covered with no authorization needed". Typically the "covered, with prior authorization granted" will not occur if there are multiple possible answers, as payers will not want to grant authorization if it's not clear what service will actually be billed. This means that, even in the worst case, a payer could theoretically provide a response with three coverage-information extensions, each documenting the circumstances in which that particular coverage circumstance will apply.

As much as possible, payers should endeavor to do exactly this. The specification allows payers to indicate the list of billing codes under which a particular option will hold, as well as qualifiers to indicate things such as in/out of network, performer type, etc. that apply to a particular coverage assertion.

However, in some cases the rules for determining what the coverage expectations are are too complex to reasonably express or even to evaluate without more information. In these cases, a payer has a few options:

* If the request in the CDS Hook does not indicate the performer, the timeframe and/or the location and the payer's logic dictates that this information must be known before a reasonable response can be provided, the CRD service can use the 'info-needed' element to indicate what additional information (to be provided during order-dispatch or some other later business stage) is necessary to allow the payer to provide a useful response.

* Otherwise, the 'doc-needed' element can be sent indicating that additional (DTR) questions will need to be answered to provide the CRD service enough information to evaluate coverage. 

#### Terminology

Information passed to the CRD server will typically contain clinical terminologies, might not contain billing terminologies, and will generally not include billing modifier codes or similar information often included in prior authorization requests. 

CRD servers will need to support these clinical terminologies or map them to internally-used billing terminologies when determining decision support results. Even when the code present on an order *is* a billing code such as CPT, the interpretation is different. Having a CPT code on an order does not guarantee that the same CPT code will appear on the eventual claim. CRD services will need to map "order billing codes" to "potential claim billing codes" in the same manner as they map clinical codes.

In situations where CRD clients are aware of the likely billing codes at the time of ordering, they **MAY** send these codes as additional CodeableConcept.coding repetitions to assist in server processing. If using CPT, note the ability to convey CPT modifier codes via post-coordination as described in the [Using CPT](https://terminology.hl7.org/CPT.html) page on terminology.hl7.org. However, payers cannot depend on such additional codings being present. Mappings will be required.

This guide does not define how mappings between "ordered" codes and "potential resulting billing codes" are produced. Ideally, such mappings would be informed by payer knowledge of what sorts of claims typically result from orders of a particular type. In some cases, the mappings could vary based on performing organization or practitioner. Mappings will need to evolve as clinical and billing practices evolve and as the clinical and billing terminologies change.

It is more efficient if mappings can be shared across payers and providers. This implementation guide encourages industry participants to cooperate on the development of shared mappings and/or to work with terminology developers (e.g. AMA for CPT codes) to develop shared mappings as part of their code maintenance process.

#### Service Types, Billing Diagnoses and Other Modifiers

Often when submitting a claim or prior authorization request, the billing code does not stand alone. Instead, additional codes might be present that indicate information such as the level of complexity of the patient's condition, the reason the service is being delivered, exceptional circumstances such as "off hours", etc. This information often won't be present in the clinical resource transmitted in the CDS Hooks call.

CRD services have a few options here:

1. Could potential modifiers impact the answer provided?  Often the answer will be "no". If a person doesn't have coverage for liposuction, it may not matter if it's in or out of network, or delivered 'off hours'. If coverage determination can be made without knowing the modifiers, payers are expected to provide the information.

2. Some modifiers might be inferred from other information about the order. For example, the service types such as "sleep study" or "hearing aid" might be inferrable from the location or provider the request is dispatched to if they can't be readily inferred from the code.

3. In some cases, the modifiers can be inferred from existing data about the patient. For example, if a treatment is sometimes given for diabetes treatment, and other times given for weight control, the payer could examine the record to see if there is a current condition indicating diabetes or obesity. If only one of the conditions exists, the payer can reasonably infer that as the reason for treatement (and can record their assumption as part of the coverage-information returned).

4. If modifiers are relevant to the coverage determination, there's no ability to infer their values from other information in the order or the patient's record, and the determination of potential coverage outcomes is too complex to simply return two or three alternative contingent coverage-information instances that reflect the level of coverage in different circumstances, the payer can use DTR to solicit the additional needed information.

Where a payer has made inferences beyond what's explicit in the CRD request, the response SHOULD make clear what assumptions around billing codes, in/out-of-network, delivery location were made in providing the response.  For example:

* presumed billing codes can be conveyed in the [billingCode element](StructureDefinition-ext-coverage-information-definitions.html#diff_Extension.extension:billingCode).
* limitations on quantity, period, or expectations about in-network/out-of-network can be conveyed in the [detail element](StructureDefinition-ext-coverage-information-definitions.html#diff_Extension.extension:detail).


---

// File: input/pagecontent/index.md

{% raw %}
{% endraw %}
<blockquote class="stu-note">
<p>
This STU update of the specification reflects several changes based on implementer feedback about the Coverage Requirements Discovery (hereafter,CRD) specification arising from detailed review, connectathons and implementation experience.  "STU notes" call out additional key considerations where feedback is desired.
</p>
<p>
This specification is a Standard for Trial Use.  It is expected to continue to evolve and improve through connectathon testing and feedback from early adopters.
</p>
<p>
Feedback is welcome and may be submitted through the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> indicating "US Da Vinci CRD" as the specification.
</p>
<p>
This implementation guide is dependent on other specifications.  Please submit any comments you have on these base specifications as follows:
</p>
<ul>
  <li>Feedback on CDS Hooks should be posted to the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> with "CDS Hooks" as the specification.</li>
  <li>Feedback on the FHIR Core specification should be submitted to the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> with "FHIR Core" as the specification.</li>
  <li>Feedback on the US Core profiles should be submitted to the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> with "US Core" as the specification.</li>
</ul>
<p>
Individuals interested in participating in the Coverage Requirements Discovery implementation guide project or other HL7 Da Vinci projects can find information about Da Vinci [here](http://www.hl7.org/about/davinci).
</p>
<p>
A summary of the major changes from the previous release can be found <a href="history.html">here</a>.
</p>
</blockquote>


### Overview
The process of billing a patient’s insurance provider is complex and costly, particularly in the United States. Healthcare providers work with a range of payers who fund the products and clinical services provided to patients. Each payer and plan provides its own mix of coverages for healthcare products and services, and each has its own unique process to determine whether each service is necessary and appropriate. These processes have many different requirements for documentation, prior authorization, or other approval steps. Claims submitted for payment that do not meet payer requirements will typically be denied which may result in service delay, resubmission, or appeal. These delays and additional processes may result in negative health outcomes or financial cost for patients, as well as financial and productivity losses for providers.

This Coverage Requirements Discovery (CRD) implementation guide defines a workflow in which a payer makes coverage requirement information available to a healthcare provider within the provider’s software system at the point of care where treatment decisions are made. This will help clinicians and administrative staff make informed recommendations to their patients and meet payer submission requirements. 

This implementation guide supports both Protected Health Information (PHI)-specific and non-PHI mechanisms for CRD to meet the needs and privileges of different payer organizations.  These mechanisms will allow payers to share a wide variety of information with providers in a context-sensitive manner including:

* updates to coverage information
* alternative (e.g. first-line, lower-cost, etc.) services or products
* documentation requirements and rules related to coverage
* forms and templates to complete
* indications of whether a therapy is covered and if prior authorization is required, including propagating this information into the relevant order/appointment

This implementation guide is designed to allow for initial support of basic capabilities and to subsequently build new features over time.

<a name="cmsdiscretion"> </a>
<blockquote class="stu-note" markdown="1">
The scope of this specification has increased to also support prior authorization process earlier in the workflow by allowing prior authorization to be returned during the CRD interaction.  Specifically:

On Feb 28, 2024, the Office of Burden Reduction and Health Informatics (OBRHI) National Standards Group (NSG) announced an [enforcement discretion](https://www.cms.gov/files/document/discretion-x12-278-enforcement-guidance-letter-remediated-2024-02-28.pdf) that they would not enforce the requirement to use the X12 278 for prior authorization if the covered entities were using the FHIR-based Prior Authorization API as described in the CMS Interoperability and Prior Authorization final rule (CMS-0057-F). This allows payers to return a prior authorization number for use in the X12 837 in coverage extension of the CRD and DTR IGs or as part of the all FHIR exchange of the Prior Authorization Response Bundle in the PAS IG.  For CRD, this specifically means that the satisfied-pa-id in the [Coverage Information extension](StructureDefinition-ext-coverage-information.html) can be used as an X12 prior authorization number.
</blockquote>

### Systems
This implementation guide sets expectations for two types of systems:

CRD clients are typically systems that healthcare providers use at the point of care, including electronic medical records systems, pharmacy systems, and other provider and administrative systems used for ordering, documenting, and executing patient-related services. Users of these systems need coverage requirements information to support care planning.

Examples of potential CRD clients include EHRs, EMRs, practice management systems, scheduling systems, patient registration systems, etc.  

The CRD client may actually involve multiple systems. For example, the systems that handle order entry may be different from what is used for appointment booking and different again from the system that exposes information over the FHIR interface. It is possible that a provider environment might use an intermediary to coordinate CRD client calls from multiple systems. Such an architecture is sufficient provided that:

* Calls are triggered from within the system the user is interacting with at the time the 'hook event' (entering an order, booking an appointment, etc.) occurs.
* Cards returned are displayed to the user, or in the event of system actions, user-notifications associated with the system actions are presented to the user within the same application.
* The 'access token' and FHIR endpoint exposed to the CRD service has access to all relevant data, independent of which physical data store it resides in.
* The intermediary could take on the responsibility for the FHIR interface, such as determining which payer should receive a coverage request.

There are three distinct sets of capabilities for CRD clients, one for [USCDI v1 (US-Core 3.1.1)](CapabilityStatement-crd-client3.1.html), one for [USCDI v3 (US-Core 6.1.0)](CapabilityStatement-crd-client6.1.html), and one for [USCDI v4 (US-Core 7.0.0)](CapabilityStatement-crd-client7.0.html).  Typically a client would support only one of these based on which US Core release it supports internally.  There is a single CRD server set of capabilities which must be able to handle data from any of the three supported USCDI versions.

<blockquote class="stu-note">
<p>
When CRD clients are made up of multiple systems, there will be orchestration requirements to allow each system to interact in a way that together they appear as a single monolithic system from the perspective of the CRD server. This IG provides some discussion of this on the ePA Coordinators page, though it does not yet provide any standardization about how components should interoperate to achieve the intended monolithic behavior. If there is industry interest, future releases of this IG may work to standardize some of these "intra-client" interactions.
</p>
</blockquote>

CRD servers (or servers) are systems that act on behalf of payer organizations to share information with healthcare providers about rules and requirements related to healthcare products and services covered by a patient's health plan. A CRD server will provide coverage information related to one or more insurance plans. CRD servers are a type of CDS service as defined in the CDS Hooks Specification.

There are is a single [set of capabilities for CRD servers](CapabilityStatement-crd-server.html) that spans USCDI v1 (US-Core 3.1.1) USCDI v3 (US-Core 6.1.0), and USCDI v4 (US-Core 7.0.0) expectations.  Payers will need to be handle content from any of the releases, as CRD clients will be transitioning support for the versions at different times - and in some cases may provide content that spans a mixture of versions.

### Content and Organization
This implementation guide (and the menu for it) is organized into the following sections:

* *Background* - Supporting informative pages that do not set conformance expectations
  * [Reading this IG](background.html) points to key pages in the FHIR spec and other source specifications that must be understood in order to understand this guide
  * [Use Cases](usecases.html) describes the intent of the implementation guide, gives examples of its use, and provides a high-level overview of expected process flow
  * [Project and Participants](credits.html) gives a high-level overview of Da Vinci and identifies the individuals and organizations involved in developing this implementation guide
  * [Burden Reduction](burden.html) identifies related specifications this implementation guide builds upon that developers should read and understand prior to implementing this specification
  * [ePA Coordinators](epa.html) acknowledges that neither the payer nor provider systems involved in CRD are monolithic and shows how the various components of provider and payer systems might interact with "ePA Coordinator" systems to satisfy the requirements of this IG
* *Specification* - Pages that set conformance expectations
  * [Conformance Expectations](conformance.html) defines base language and expectations for declaring conformance with the guide
  * [Privacy, Safety, and Security](security.html) covers considerations around data access, protection, and similar concepts that apply to all implementations
  * [Foundational Guidance](foundation.html) covers high-level conofmrance expectations  that apply to all implementations
  * [Deviations and Enhancements](deviations.html) covers detailed implementation requirements and conformance expectations that are independent of particular hooks or cards
  * [Supported Hooks](hooks.html) identifies the expectations for support for specific CDS hooks
  * [Hook Response Profiles](cards.html) defines patterns for CDS Hook cards and system actions that can be returned as part of this specification
  * [Implementation Guidance](implementation.html) provides recommendations for implementation that fall outside the technical scope of the specification
  * [CRD Metrics](metrics.html) provides a logical model describing how to capture data that may be relevant to measuring or reporting on CRD use
* *FHIR Artifacts*
  * [Artifacts Overview](allartifacts.html) introduces and provides links to the profiles, search parameters and other FHIR artifacts used in this implementation guide
  * Additional links point to complete lists of all artifacts defined in this guides as well as ancestor guides
* *Base Specifications* - Quick links to the various specifications this guide derives from
* *Support* - Links to help with use of this guide
  * *Discussion Forum* is a place to ask questions about the guide, discuss potential issues, and search through prior discussions
  * *Project Home* includes information about project calls, agendas, past minutes, and instructions for how to participate
  * *Implementer Support* provides information about reference implementations, resources for testing, known errata, regulatory considerations, and practical implementation pathways
  * *Project Dashoard* shows new and historical issues that have been logged against the specification, proposed dispositions, unapplied changes, etc.
  * *Propose a Change* allows formal submission of requests for change to the specification.  (Consider raising on the discussion forum first.)
  * [Downloads](downloads.html) allows download of this and other specifications, as well as other useful files

### Dependencies
This guide is based on the [FHIR R4]({{site.data.fhir.path}}) specification that is mandated for use in the U.S. as well as the [CDS Hooks 2.0](https://cds-hooks.hl7.org/2.0) and [CDS Hooks CI Build](https://cds-hooks.org/specification/current/) releases of the CDS Hooks specification.  It also leverages the [SMART on FHIR](http://hl7.org/fhir/smart-app-launch) specification for CRD clients that opt to use that approach for "what-if" scenarios.

In addition, this guide also relies on a number of parent implementation guides:

{% include dependency-table-nontech.xhtml %}

This implementation guide defines additional constraints and usage expectations above and beyond the information found in these base specifications.

### Intellectual Property Considerations
This implementation guide and the underlying FHIR specification are licensed as public domain under the [FHIR license](http://hl7.org/fhir/R4/license.html#license). The license page also describes rules for the use of the FHIR name and logo.

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/metrics.md

This Implementation Guide (IG) is one of 4 HL7 Da Vinci IGs that are designed to address the challenges of automating the exchange of information between a provider and the responsible payer to determine coverage of services, items, and referrals. In particular, these IGs standardize the exchange of information required to automate the Prior Authorization (PA) process. The specific IG are:

1. Coverage Requirements Discovery (CRD) (this IG)
2. [Documentation Templates and Rules (DTR)](http://hl7.org/fhir/us/davinci-dtr)
3. [Prior Authorization Support (PAS)](http://hl7.org/fhir/us/davinci-pas)
4. [Clinical Documentation Exchange (CDex)](http://hl7.org/fhir/us/davinci-cdex)

Each guide supports a specific set of functions and exchanges required to determine payer coverage for specific services, items, and referrals.

To maximize the value of these IGs, it is imperative that each IG is integrated into clinical workflow at the appropriate point and all of the exchanges required by each IG are fully supported by all of the participants (providers, intermediaries, and payers).

Each of these IGs recommends a set of metrics that **SHOULD** or **MAY** be collected by their respective implementations to facilitate the evaluation of adoption, functionality, processes, and improved outcomes. While there are current and proposed state requirements for prior authorization metric reporting, at the time of publication there is no requirement to report on the metrics defined here.  However, it is reasonable to believe that in the future interested entities (providers, payers, regulators, quality organizations, certification agencies, states, etc.) will ask for these metrics to evaluate the ongoing automation of the supported processes / exchanges. While this guide will not require these metrics to be captured in this release, the authors strongly suggest each implementation should do so with the expectation that collection and dissemination of these metrics may become a requirement (SHALL) in future version of these IGs.

The table below defines a set of measures with a short name, purpose, conformance, stakeholder, and collection/calculation instructions that represent what the project group designing this IG felt would be both reasonably collectable and useful in evaluating implementations of this IG.  These measures are based on the [metric data model logical model](StructureDefinition-CRDMetricData.html) also published in this IG.

### Suggested Metrics

<table class="grid">
  <thead>
    <tr style="background-color:light-grey">
      <th>Nbr</th>
      <th>Metric</th>
      <th>Metric Type</th>
      <th>Provider/Payer</th>
      <th>Calculation Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Volume/% of Orders with results (coverage info) returned</td>
      <td>Adoption Process</td>
      <td>Both</td>
      <td>
        <i>For volume:</i><br/>
          <code>CRDMetricData.exists(response.coverageInfo).count()</code><br/>
        <i>For percent:</i><br/>
          Divide volume above by <code>CRDMetricData.where(httpResponse=200).count()</code> and express as percentage
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>% by coverage response type (covered, not covered,  conditional)</td>
      <td>Segmentation</td>
      <td>Both</td>
      <td>
        <i>For volume:</i><br/>
          Iterate where $ResponseType is one of covered, not-covered, conditional
          <code>CRDMetricData.exists(response.coverageInfo.where(covered=$ResponseType)).count()</code><br/>
        <i>For percent:</i><br/>
          Divide volume above by <code>CRDMetricData.where(httpResponse=200).count()</code> and express as percentage
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Volume/% of PA required with DTR launch context</td>
      <td>Process Compliance</td>
      <td>Both</td>
      <td>
        <i>For volume:</i><br/>
          <code>CRDMetricData.exists(response.coverageInfo.where(paNeeded = "auth-needed" and questionnaire.exists())).count()</code><br/>
        <i>For percent:</i><br/>
          divide volume above by <code>CRDMetricData.exists(response.coverageInfo.where(paNeeded = 'auth-needed')).count()</code> and express as percentage
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>Volume/% of Documentation required with DTR launch context</td>
      <td>Adoption</td>
      <td>Both</td>
      <td>
        <i>For volume:</i><br/>
          <code>CRDMetricData.where(response.coverageInfo.where((docNeeded='clinical' or docNeeded='admin' or docNeeded='both') and questionnaire.exists())).count()</code><br/>
        <i>For percent:</i><br/>
          divide volume above by <code>CRDMetricData.exists(response.coverageInfo.where(docNeeded='clinical' or docNeeded='admin' or docNeeded='both')).count()</code> and express as percentage
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>Volume/% with service determination</td>
      <td>Adoption Process</td>
      <td>Both</td>
      <td>
        <i>For volume:</i><br/>
          <code>CRDMetricData.where(response.coverageInfo.exists(paNeeded = 'satisfied')).count()</code><br/>
        <i>For percent:</i><br/>
          divide volume above by <code>CRDMetricData.where(httpResponse=200).count()</code> and express as percentage
      </td>
    </tr>
    <tr>
      <td>6</td>
      <td>% in under 5 seconds</td>
      <td>Process Compliance</td>
      <td>Both</td>
      <td>
        <code>CRDMetricData.where(httpResponse=200 and (requestTime + 5 seconds > responseTime)).count() /<br/>
        CRDMetricData.where(httpResponse=200).count()</code> and express as percentage
      </td>
    </tr>
    <tr>
      <td>7</td>
      <td>Reduction in PA submission (relative to current practice)</td>
      <td>Outcome</td>
      <td>Both</td>
      <td>Needs information external to CRD metric data</td>
    </tr>
    <tr>
      <td>8</td>
      <td>All of the above by payer for provider metrics and for provider for payer metrics</td>
      <td>Segmentation</td>
      <td>Both</td>
      <td>Segmentation based on CRDMetricData.source and (CRDMetricData.payerID or CRDMetricData.groupID)</td>
    </tr>
    <tr>
      <td>9</td>
      <td>All of the above by hook type</td>
      <td>Segmentation</td>
      <td>Both</td>
      <td>Segmentation based on CRDMetricData.hookType</td>
    </tr>
  </tbody>
</table>

---

// File: input/pagecontent/security.md

Guidance and conformance expectations around privacy and security are provided by all three specifications this implementation guide relies on. Implementers **SHALL** adhere to any security and privacy rules defined by:

* FHIR Core: [Security & Privacy Module]({{site.data.fhir.path}}secpriv-module.html), [Security Principles]({{site.data.fhir.path}}security.html) and [Implementer's Checklist]({{site.data.fhir.path}}safety.html)
* HRex: [Privacy & Security]({{site.data.fhir.ver.hrex}}/security.html)
* CDS Hooks: [Security & Safety](https://cds-hooks.hl7.org/2.0/#security-and-safety)
* SMART on FHIR: [SMART App Launch](http://www.hl7.org/fhir/smart-app-launch)

In addition to these, this implementation guide imposes the following additional rules:

* As per the CDS Hooks specification, communications between CRD clients and CRD servers **SHALL** use TLS. Mutual TLS is not required by this specification but is permitted. CRD servers and CRD clients **SHOULD** enforce a minimum version and other TLS configuration requirements based on HRex rules for PHI exchange.
    * This specification does not provide guidance on certificate management between systems, though it has been proposed that [Direct](https://directtrust.org/what-we-do/direct-secure-messaging) certificates could be used for this purpose.
* CRD clients **SHALL** support running applications that adhere to the SMART on FHIR [confidential app](http://www.hl7.org/fhir/smart-app-launch#support-for-public-and-confidential-apps) profile.
* CRD servers **SHALL** use information received solely for coverage determination and decision support purposes and **SHALL NOT** retain data received over the CRD interfaces for any purpose other than audit or providing context for form completion using DTR.
* CRD clients are the final arbiters of what data can or cannot be shared with CRD servers.  It is up to clients to ensure they support their obligations as health data custodians, including legal, policy, and patient consent-based restrictions. Withholding information might limit the completeness or accuracy of coverage requirements discovery advice retrieved using the interfaces within this guide. The inability of a CRD server to provide full advice does not relieve providers of their responsibility to ensure that payer coverage requirements are met.
* CRD clients **SHALL** ensure that the resource identifiers exposed over the CRD interface are distinct from and have no determinable relationship with any business identifiers associated with those records. For example, the Patient.id element cannot be the same as or contain in some fashion a patient's social security number or medical record number.
* Access to patient information to meet decision support requirements is subject to regulations such as HIPAA "minimum necessary" and CRD clients **SHOULD** audit access to check for reasonableness and appropriateness.


---

// File: input/pagecontent/StructureDefinition-CRDMetricData-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

This model is NOT a FHIR data structure for information exchange.  Instead, it is a logical model of the information that **SHOULD** be collected and maintained for each CRD transaction.  While implementers may choose any internal storage format that is appropriate for their system, the information collected should ultimately be mapped to the information model below.  

Mapping implementation data to these elements will allow metrics (see the table on the [metrics page](metrics.html)) to be represented in a way that provides consistent responses to requirements from various interested parties (providers, payers, regulators, quality organizations, certification agencies, states, etc.) by each of the participants in the CRD exchanges.


---

// File: input/pagecontent/StructureDefinition-ext-coverage-information-notes.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### doc-needed vs. info-needed
This extension has two properties with similar names which may cause some confusion.  Each has a very distinct purpose.

'doc-needed' is used to indicate the need for additional information to be collected (typically via DTR questionnaires) in order for the payer to make decisions about coverage and prior authorization.  It indicates the type of user who will need to provide the answers.  Once those answers are provided, a decision about coverage and at least whether prior authorization is necessary should be possible.

'info-needed' is used when the information provided in the hook payload isn't even sufficient to determine what questions might be asked.  For example, it may be necessary to know the performer, the location, have a better sense on the timeframe for service delivery, etc.  In this case, the payer is indicating that a 'useful' response will need to wait until the relevant information is available.  This might be a later hook in the same system (e.g. an ''order-dispatch'' or ''appointment-book'' if needing to know the performer or location), or might mean that a decision won't be able to be made until the patient hits the ''encounter-start'' hook in the performing system.  The extension element indicates the nature of the information needed, which should give the provider an idea of where in the workflow a decision is likely.

---

// File: input/pagecontent/StructureDefinition-profile-appointment-no-order-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use either this profile and/or the [with-order](StructureDefinition-profile-appointment-with-order.html) to provide `appointments` context objects to CRD Servers when invoking the [appointment-book](hooks.html#appointment-book) hook as well as to [resolve other references](foundation.html#additional-data-retrieval) to Appointment resources.

This profile conveys the details of the appointment within the resource itself and doesn't make reference to a ServiceRequest.

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-appointment-with-order-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use either this profile and/or the [no-order](StructureDefinition-profile-appointment-no-order.html) to provide `appointments` context objects to CRD Servers when invoking the [appointment-book](hooks.html#appointment-book) hook as well as to [resolve other references](foundation.html#additional-data-retrieval) to Appointment resources.

This profile conveys the details of the appointment in an associated [ServiceRequest](StructureDefinition-profile-servicerequest.html).

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-communicationrequest-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to CommunicationRequest resources passed to CRD Servers (e.g. `selections` context references) and to populate `draftOrders` context objects when invoking the when invoking the following CDS Hooks:
* [order-select](hooks.html#order-select)
* [order-sign](hooks.html#order-sign)
* [order-dispatch](hooks.html#order-dispatch)

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-coverage-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to insurance Coverage resources passed to CRD Servers.

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-device-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to Device resources passed to CRD Servers.

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-devicerequest-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to DeviceRequest resources passed to CRD Servers (e.g. `selections` context references) and to populate `draftOrders` context objects when invoking the following CDS Hooks:
* [order-select](hooks.html#order-select)
* [order-sign](hooks.html#order-sign)
* [order-dispatch](hooks.html#order-dispatch)

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-encounter-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to Encounter resources passed to CRD Servers, including `encounterId` context references when invoking the following CDS Hooks:
* [appointment-book](hooks.html#appointment-book)
* [encounter-start](hooks.html#encounter-start)
* [encounter-discharge](hooks.html#encounter-discharge)
* [order-select](hooks.html#order-select)
* [order-sign](hooks.html#order-sign)
* [order-dispatch](hooks.html#order-dispatch)

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-location-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to insurance Location resources passed to CRD Servers.

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.

The location types codes must come from HL7-defined codes when possible.  A ConceptMap to CMS location codes is available [here](ConceptMap-HL7Location-CRDTemp.html).
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-medicationrequest-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to MedicationRequest resources passed to CRD Servers (e.g. `selections` context references) and to populate `draftOrders` context objects when invoking the when invoking the following CDS Hooks:
* [order-select](hooks.html#order-select)
* [order-sign](hooks.html#order-sign)
* [order-dispatch](hooks.html#order-dispatch)

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.

NOTE: This profile is not currently based on US Core because US Core accidentally constrained out PractitionerRole.  When a future version of US-Core adds support back in, this profile will be revised to extend the US Core profile
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-medicationrequest-notes.md

### Notes
While the codes for the medication are expected to be drawn from RxNorm, EHRs **MAY** send additional coding repetions to communicate other code systems (e.g. HCPCS J codes).  This may be necessary for the payer to appropriately  respond to coverage information regarding medications associated with medical and DME benefits.


---

// File: input/pagecontent/StructureDefinition-profile-nutritionorder-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to NutritionOrder resources passed to CRD Servers (e.g. `selections` context references) and to populate `draftOrders` context objects when invoking the when invoking the following CDS Hooks:
* [order-select](hooks.html#order-select)
* [order-sign](hooks.html#order-sign)
* [order-dispatch](hooks.html#order-dispatch)

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-organization-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-patient-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients will use this profile to [resolve references](foundation.html#additional-data-retrieval) to Patient resources passed to CRD Servers, including `patientId` context references when invoking the following CDS Hooks:
* [appointment-book](hooks.html#appointment-book)
* [encounter-start](hooks.html#encounter-start)
* [encounter-discharge](hooks.html#encounter-discharge)
* [order-select](hooks.html#order-select)
* [order-sign](hooks.html#order-sign)
* [order-dispatch](hooks.html#order-dispatch)

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-servicerequest-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to ServiceRequest resources passed to CRD Servers (e.g. `selections` context references) and to populate `draftOrders` context objects when invoking the when invoking the following CDS Hooks:
* [order-select](hooks.html#order-select)
* [order-sign](hooks.html#order-sign)
* [order-dispatch](hooks.html#order-dispatch)

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-taskdispatch.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
This profile on Task defines the additional information that may optionally be provided when invoking an [order-dispatch](hooks.html#order-dispatch) hook.

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
</br>
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-taskquestionnaire-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
This profile on Task allows a response CDS Hook Card to request a user to fill out a Questionnaire (pointed to as a Task.input).  It supports the process described in the [Deferring Card Actions](cards.html#request-form-completion-response-type) portion of the spec.

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.
</br>
<br/>


---

// File: input/pagecontent/StructureDefinition-profile-visionprescription-intro.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### Usage
<br/>
CRD Clients **SHALL** use this profile to [resolve references](foundation.html#additional-data-retrieval) to VisionPrescription resources passed to CRD Servers (e.g. `selections` context references) and to populate `draftOrders` context objects when invoking the when invoking the following CDS Hooks:
* [order-select](hooks.html#order-select)
* [order-sign](hooks.html#order-sign)
* [order-dispatch](hooks.html#order-dispatch)

Information provided in [Must Support]({{site.data.fhir.path}}profiling.html#mustsupport) elements will commonly be required for CRD Servers to perform coverage requirements discovery.

NOTE: This profile is not currently based on US Core because US Core does not yet profile the VisionPrescription resource.  If a future version of US-Core adds support for the resource, this profile will be revised to extend the US Core profile.
<br/>


---

// File: input/pagecontent/usecases.md

### Business Need

Providers need to easily discover which payer-covered services, medications (not covered by NCPDP) or devices have:
* Specific documentation requirements,
* Rules for determining the need for specific treatments/services,
* Requirements for Prior Authorization (PA) or other approvals, and
* Specific guidance.  


This implementation guide defines a FHIR API that providers can call to discover - in real time - specific payer requirements that may affect whether services or devices provided to a patient are covered by their health plan.  The Coverage Requirement Discovery may be based on:
* Plan conditions only (i.e., without Protected Health Information (PHI)), or also
* Plan member identification (PHI) and, potentially, clinical information needed to determine requirements.

When needed, the API will allow payers with authorization to query provider systems for additional patient information needed to inform the guidance provided - for example by determining what information already exists or what steps have already occurred.

The payer response to a CRD request might include:
* An indication that no coverage requirements exist
* A list of services, templates, documents, and/or rules that apply
* A URI to retrieve specific items, such as templates or forms
* The ability to launch an application to further explore or complete requirements


### Example CRD "Success" Scenarios

#### Scenario 1
Mrs. Jones is a 35-year-old, previously healthy female who is seen by Dr. Good for a new onset headache that began abruptly 2 weeks prior to her visit. Her headaches are severe at times, last several hours, have been occurring with increasing frequency, and are now occurring daily. Her physical including neurologic exam is normal. Dr. Good is concerned about an intracranial process.

Dr. Good wants to order a head CT to check for any masses. Dr. Good begins filling out the order for the CT in their EHR. In the background, the EHR initiates a call to the CRD server used by Mrs. Jones' payer providing information about the patient, her coverage and the CT order. The CRD service returns information within a few seconds identifying that a prior authorization request must be completed and submitted, as well as a list of the additional clinical documentation required (e.g., Progress Note or prior studies). It also provides a link to the required form. Dr. Good launches an app to complete the necessary paperwork to initiate a prior authorization and sends the relevant supporting information to the imaging center as part of the referral.

Note: An app may also provide Dr. Good with additional useful information, such as a list of nearby imaging centers that are on Mrs. Jones' plan.

#### Scenario 2
Mrs. Smith is a 75-year-old female on a Medicare Fee-For-Service plan with longstanding chronic obstructive pulmonary disease (COPD) who has had slowly and progressively worsening shortness of breath with activity. In the office, her room air oxygen saturation after a 5-minute walk is found to be 84%. She has additional evaluation that reveals no new findings. Dr. Good wants to initiate home oxygen therapy for Mrs. Smith.

Dr. Good is completing<sup>*</sup> an order for home oxygen therapy. The EHR initiates a query to the CRD server used by her payer that includes the code for a portable oxygen generator. An alert appears on the EHR order entry screen notifying Dr. Good that specific testing and documentation is required to substantiate the need for home oxygen therapy and specifically for a portable oxygen generator. The EHR allows Dr. Good to immediately document the required information by starting Documentation Templates and Rules (DTR).

DTR retrieves specific documentation templates which have already been populated with information from the EHR. Dr. Good completes the remaining documentation requirements that require clinical input, signs the documentation, and includes it in Mrs. Smith’s medical record. They leave the remaining portion of the documentation to be completed by their administrative staff who will find an appropriate supplier and forward the order and documentation.

<sup>*</sup> Note: This flow envisions the use of the Order Sign hook, which allows guidance to be returned while the user is in the process of signing the order. 

#### Scenario 3
Mr. Light is a 45-year-old generally healthy male who presents for an annual exam. His physical exam is normal. Dr. Good checks a basic metabolic panel and determines that Mr. Light's kidney function is diminished (Creatinine of 2.5) which is new compared to his function one year prior (Creatinine of 1). Dr. Good wants to refer Mr. Light to a nephrologist for further evaluation.

As Dr. Good is completing the referral, their EHR contacts a CRD server used by Mr. Light's health plan. The service notifies them that for the referral to be covered under Mr. Light's coverage, the physician must request prior authorization and provide specific medication documentation as part of the request. The EHR provides a link to an insurer-provided app that displays the form partly populated with information from their EHR and guides them through the process of completing the information needed for the prior authorization.

#### Scenario 4
Mrs. Abdallah is a 30-year-old female who is struggling with weight issues. Dr. Good feels that she'd be a good candidate for a dietary consult, however Mrs. Abdallah isn't sure whether her plan will cover the service and doesn't think she can afford it on her current salary. Before going through the work of writing up a formal referral, Dr. Good opts to check whether a referral would be covered. They launch an app within their EHR which auto-populates with information from the current patient. They choose "MNT/nutrition counseling" from the list of possible referral services and the app contacts Mrs. Abdallah's payer's CRD server. The server indicates that while Mrs. Abdallah does have coverage, MNT/nutrition counseling is not a benefit of her plan. Dr. Good informs Mrs. Abdallah of this and they come up with an alternate plan. Dr. Good recommends a useful series of online videos and a couple of books Mrs. Abdallah can get from the library. Dr. Good also suggests Mrs. Abdallah shop around a bit for health plans when it comes time to renew her coverage for the following year.

### CRD Workflow
The high-level workflow for CRD is envisioned to work as follows:

{::options parse_block_html="false" /}
<figure>
  <img height="300px" src="overview.png" alt="CRD Workflow diagram"/>
  <figcaption><b>    Figure 1: CRD Workflow</b></figcaption>
  <p></p>
</figure>
{::options parse_block_html="true" /}


**1. Clinical action (potentially) needed**<br/>
A healthcare provider decides that a clinical action is needed or wants to explore the coverage ramifications of taking a clinical action. Possible clinical actions include:
* Admitting a patient or starting a patient visit
* Ordering a drug, device, procedure, etc.
* Choosing when or where an existing order will be performed
* Making a referral or scheduling a future appointment
* Discharging a patient

Based on whether the provider has decided to perform the action or just wishes to explore, they will proceed to 2a or 2b.

**2a. Provider performs EHR action**<br/>
The provider uses an EHR to initiate the clinical action from step #1, entering required information (e.g., a drug, a type of referral, or appointment) into forms provided by the EHR.

**2b. Provider starts 'CRD what-if'**<br/>
The provider uses an EHR to launch a 'what if?' CRD SMART app to explore payer coverage requirements. The provider indicates the type of action they're considering into the CRD SMART app which prompts for additional information relevant to coverage determination, such as the proposed drug, type of referral or appointment, etc.

**3. Provider checks Payer CRD needs**<br/>
The EHR or CRD SMART app contacts a CRD server used by their patient's payer to find out what information is required to perform Coverage Requirements Discovery (CRD) - particularly whether the CRD server requires protected health information (PHI) to evaluate the patient's coverage requirements, or whether the patient's coverage type and the proposed clinical action is enough. Optionally, the CRD service might provide the EHR with information about configuration options, such as the option to control the types of coverage requirements returned to the user or the number of requirements returned.

Note:
* Each patient will have coverage from their own specific payer and each payer may use their own unique CRD server.
* Payer server requirements are expected to be static. The EHR or CRD SMART app may choose to cache information received.
* Modular EHR systems may need to retrieve the coverage type or other information required by the CRD server from other systems within the provider's environment.

It is up to payers to determine whether and how long to cache information such as "is member covered" and "what are coverage rules for service x", as well as if and how to check whether cached information is 'dirty' (i.e. the underlying record has changed). From a performance perspective, if follow-on hooks (i.e., Order Dispatch or a subsequent Order Sign for revisions) are invoked, there is no expectation information will be cached if no hook for that patient has fired in the last 24 hours, which is why the response time target is longer in that situation.

In the event decisions are made based on dirty cached data, the unique identifier provided with the Coverage Information extension will allow the payer to trace what information the decision was based on. Also, CRD responses are point-in-time assertions and it is possible that circumstances will change (e.g., a policy being cancelled) that will invalidate the response provided.  If a decision is based on changes within the payer's control (e.g., rules have changed for when prior authorization is required), payers **SHOULD** respect the decision that was conveyed to the CRD client.

**4. System starts CRD query**<br/>
The EHR (in the background as the provider is typing) or the CRD SMART app (once enough information has been provided) initiates a query to the CRD server providing the patient's coverage type and/or identity along with information about the proposed clinical action. The EHR might also provide the CRD server with one or more of the following:
* a 'token' to allow the CRD server to temporarily and securely request additional patient information from the EHR in step #5.
* configuration information that indicates the type of information the EHR user is interested in receiving (e.g., whether prior authorization or clinical documentation is required, or products covered, or recommendations from the health plan).

Note:
* Configuration options received in step #3 might be managed by the EHR and information provided could be specific to the context of the request, a user role, or an individual user.

**5. (Optional) Payer service gets additional data**<br/>
If additional information is needed to process the query, the CRD server may invoke the EHR's secure API, with the temporary access token provided in step #4, to request additional information from the patient's record. (In some cases, the EHR may provide information up-front based on pre-fetch requests from the payer's configuration information.) Examples include requests for information needed to assess whether the action is needed (e.g., a lab result or an allergy to a first line medication), whether recommended next steps are in place (e.g., follow-up visits scheduled, lab tests ordered to monitor effectiveness/safety), etc. The CRD server might submit multiple queries for different types of data to determine coverage requirements.

Note:
* By requesting additional information directly from the EHR, a CRD server can determine what documentation already exists and what requirements already exist and can use that information to make the most accurate assessment possible before providing cards to the user that suggest that additional documentation is necessary or that prior authorization must be requested. CRD servers should always attempt to gather what information they can automatically before providing responses that might require human action, such as completing a Questionnaire or launching DTR.

**6. Payer service returns CRD results**<br/>
Based on the information provided and/or retrieved, the payer system returns guidance to the provider. The guidance can be in several forms:
* A simple message indicating that service is covered without additional requirements
* A message describing what coverage requirements exist
* A link to external documentation that supports provided assertions that coverage does or doesn't exist, or whether prior authorization is needed.
* Links to specific forms or templates that need to be completed and/or instructions to launch DTR to gather additional information.
* An indication that prior authorization is necessary and has been approved, including information such as the prior authorization number and assumed billing codes.
* Links with recommendations to substitute the planned action with a different action and/or to add additional actions (e.g., proposals to replace a requested drug with a required first-line treatment or another drug covered by the patient's plan, to add a concurrent medication, additional diagnostic tests, etc.)

Payer requirements might include the need for prior authorization, forms that must be completed, medical documentation that must exist or be provided, recommendations on alternative therapies, etc.

**7. Provider invokes links**<br/>
If the response includes links to additional information or apps, the provider can direct the EHR to interact further with the payer system by retrieving the linked-to information or launching the provided application.

#### Considerations
* This page uses the term EHR as though it is a single monolithic system. In practice, there may be a variety of systems working together that interact as a CRD client.
* The scenario above uses the term 'healthcare provider'. Typically, that would be a physician, but in some cases, it could be a nurse, clerk, or other individual.
* The EHR would only communicate with CRD servers with which it is authenticated and has a trust relationship. 
* Similarly, the EHR would only launch apps or retrieve links that had previously been determined to be safe and trustworthy. When launched, user context should be passed to apps to avoid the need for users to log in again if they have already been authenticated by the EHR.
* The EHR would determine in which situations a payer system would be contacted for CRD purposes and what level of information the payer system would be permitted to receive, including through the payer query mechanism. The determination of what information is shared could be influenced by patient consent and other internal business rules.
* The CRD query and response will be implemented by making a CDS Hooks service call and returning a set of cards and/or system actions.

### Potential Additional Uses
While the primary purpose of this implementation guide is to ensure that healthcare providers using EHRs are aware of insurance plan requirements that might affect payment for services rendered, the CRD architecture and infrastructure can potentially be used for other purposes that enhance the provider-payer-patient relationship:
* Providing guidance to providers about lower-cost or better-covered product alternatives
* Identifying in-network providers for the delivery of services
* Making providers aware of clinical risks (e.g., potential drug-drug interactions) based on payer knowledge from previous claims
* Improving accountable care delivery by making recommendations related to clinical practice guidelines or best practices
* Expanding usage beyond EHRs to allied healthcare providers (dentistry, vision care, physiotherapy, etc.)
* Surfacing the CRD back-end to patients, their caregivers, or their healthcare providers through a web-based user interface to support exploring coverage requirements without the use of an EHR

---

// File: input/pagecontent/ValueSet-CMSMappableLocationCodes-notes.md

<!--- Text entered into this file will appear at the top of the profiles page before the Formal Views of the profile content. -->

### CMS Mapping

The 'temporary' codes defined in this value set map to the CMS codes directly.  I.e. CRDTempCodes '4 - Homeless Shelter' corresponds directly to CMS code 4 with the same meaning.  For codes that already exist in HL7-defined code systems, the mapping is as follows:

|CMS Code|CMS Label|HL7 code system URI|HL7 Code|HL7 Label|
|--------|---------|-------------------|--------|---------|
|1|Pharmacy **|http://terminology.hl7.org/CodeSystem/v3-RoleCode|PHARM|Pharmacy|
|3|School|http://terminology.hl7.org/CodeSystem/v3-RoleCode|SCHOOL|school|
|11|Office|http://terminology.hl7.org/CodeSystem/v3-RoleCode|PROFF|Provider's Office|
|15|Mobile Unit|http://terminology.hl7.org/CodeSystem/v3-RoleCode|MOBL|Mobile Unit|
|18|Place of Employment-|http://terminology.hl7.org/CodeSystem/v3-RoleCode|WORK|work site|
|21|Inpatient Hospital|http://terminology.hl7.org/CodeSystem/v3-RoleCode|HOSP|Hospital|
|23|Emergency Room – Hospital|http://terminology.hl7.org/CodeSystem/v3-RoleCode|ER|Emergency room|
|24|Ambulatory Surgical Center|http://terminology.hl7.org/CodeSystem/v3-RoleCode|SU|Surgery clinic|
|26|Military Treatment Facility|http://terminology.hl7.org/CodeSystem/v3-RoleCode|MHSP|Military Hospital|
|31|Skilled Nursing Facility|http://terminology.hl7.org/CodeSystem/v3-RoleCode|SNF|Skilled nursing facility|
|51|Inpatient Psychiatric Facility|http://terminology.hl7.org/CodeSystem/v3-RoleCode|PHU|Psychiatric hospital unit|
|54|Intermediate Care Facility/ Individuals with Intellectual Disabilities|http://terminology.hl7.org/CodeSystem/v3-RoleCode|RHII|intellectual impairment center|
|55|Residential Substance Abuse Treatment Facility|http://terminology.hl7.org/CodeSystem/v3-RoleCode|SURF|Substance use rehabilitation facility|
|56|Psychiatric Residential Treatment Center|http://terminology.hl7.org/CodeSystem/v3-RoleCode|PSYCHF|Psychatric Care Facility|
|61|Comprehensive Inpatient Rehabilitation Facility|http://terminology.hl7.org/CodeSystem/v3-RoleCode|RHU|Rehabilitation hospital unit|
|81|Independent Laboratory|http://terminology.hl7.org/CodeSystem/v3-RoleCode|MBL|medical laboratory|
|99|Other Place of Service|http://terminology.hl7.org/CodeSystem/data-absent-reason|other|Other|


---

// File: input/fsh/aliases.fsh

// Code Systems
// Code Systems - external
Alias: $cpt = http://www.ama-assn.org/go/cpt
Alias: $HCPCSReleaseCodeSets = https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
Alias: $loinc = http://loinc.org
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $raceEthnicity = urn:oid:2.16.840.1.113883.6.238
Alias: $sct = http://snomed.info/sct
// Code Systems - HL7
Alias: $fhir-types                   = http://hl7.org/fhir/data-types
Alias: $restful-interaction          = http://hl7.org/fhir/restful-interaction
Alias: $task-code                    = http://hl7.org/fhir/CodeSystem/task-code
Alias: $communication-category       = http://terminology.hl7.org/CodeSystem/communication-category
Alias: $coverage-class               = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: $diet                         = http://terminology.hl7.org/CodeSystem/diet
Alias: $dose-rate-type               = http://terminology.hl7.org/CodeSystem/dose-rate-type
Alias: $ex-visionprescriptionproduct = http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct
Alias: $location-physical-type       = http://terminology.hl7.org/CodeSystem/location-physical-type
Alias: $service-category             = http://terminology.hl7.org/CodeSystem/service-category
Alias: $service-type                 = http://terminology.hl7.org/CodeSystem/service-type
Alias: $subscriber-relationship      = http://terminology.hl7.org/CodeSystem/subscriber-relationship
Alias: $v2-0203                      = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v2-0276                      = http://terminology.hl7.org/CodeSystem/v2-0276
Alias: $v2-0360                      = http://terminology.hl7.org/CodeSystem/v2-0360
Alias: $v3-ActCode                   = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $v3-ActReason                 = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias: $v3-LocationRoleType          = http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType
Alias: $v3-NullFlavor                = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-ParticipationMode         = http://terminology.hl7.org/CodeSystem/v3-ParticipationMode
Alias: $v3-ParticipationType         = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $v3-RoleCode                  = http://terminology.hl7.org/CodeSystem/v3-RoleCode
// Code Systems - IG
Alias: $temp           = http://hl7.org/fhir/us/davinci-crd/CodeSystem/temp
Alias: $temp_1         = http://hl7.org/fhir/uv/sdc/CodeSystem/temp
Alias: $OriginValueSet = http://hl7.org/fhir/us/davinci-dtr/ValueSet/Origin-vs
// Resources
Alias: $Appointment          = http://hl7.org/fhir/StructureDefinition/Appointment
Alias: $CommunicationRequest = http://hl7.org/fhir/StructureDefinition/CommunicationRequest
Alias: $Coverage             = http://hl7.org/fhir/StructureDefinition/Coverage
Alias: $Device               = http://hl7.org/fhir/StructureDefinition/Device
Alias: $DeviceRequest        = http://hl7.org/fhir/StructureDefinition/DeviceRequest
Alias: $MedicationRequest    = http://hl7.org/fhir/StructureDefinition/MedicationRequest
Alias: $NutritionOrder       = http://hl7.org/fhir/StructureDefinition/NutritionOrder
Alias: $ServiceRequest       = http://hl7.org/fhir/StructureDefinition/ServiceRequest
Alias: $VisionPrescription   = http://hl7.org/fhir/StructureDefinition/VisionPrescription
// Extensions
Alias: $extension-CommunicationRequest.payload.content = http://hl7.org/fhir/5.0/StructureDefinition/extension-CommunicationRequest.payload.content[x]
Alias: $fmm                                            = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
Alias: $standards-status                               = http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
Alias: $compliesWithProfile                            = http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile
Alias: $typeMS                                         = http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support
// ValueSets
Alias: $USCoreMedicationCodes = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4

---

// File: input/fsh/codesystems/CRDTempCodes.fsh

CodeSystem: CRDTempCodes
Id: temp
Title: "CRD Temporary Codes"
Description: "Codes temporarily defined as part of the CRD implementation guide.  These will eventually migrate into an officially maintained terminology (likely either SNOMED CT or HL7's UTG code systems)."
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^hierarchyMeaning = #is-a
* ^content = #complete
* ^property[0].code = #abstract
* ^property[0].uri = "http://hl7.org/fhir/concept-properties#notSelectable"
* ^property[0].type = #boolean
// after-completion code
* #prior-auth-include      "Include in prior authorization"    "Include information in prior authorization"
* #initial-claim-include   "Include in initial claim"          "Include information in initial claim submission"
* #all-claims-include      "Include in all claims"             "Include information in all claim submissions"
// Task reason
* #reason-prior-auth       "Prior authorization"               "Task action is needed for prior authorization"
// Task input codes
* #after-completion-action "After-completion action"           "A task input indicating an action that should be taken after a QuestionnaireResponse has been completed on a specified Questionnaire.  (Multiple completion actions can be specified.)"
// Coverage assertion reasons
* #gold-card               "Gold card"                         "Ordering Practitioner has been granted 'gold card' status with this payer/coverage type."
* #detail-code             "Detail code"                       "The ordered code is at too high a level of granularity to make decisions about coverage/pa/etc.  Can only be present if something is 'conditional'"
// Coverage detail types
* #allowed-quantity        "Maximum quantity"                  "Indicates limitations on the number of services/products allowed (possibly per time period).  Value should be a Quantity"
* #allowed-period          "Maximum allowed period"            "Indicates the maximum period of time that can be covered in a single order.  Value should be a Period"
* #in-network-copay        "Copay for in-network"              "Indicates a percentage co-pay to expect if delivered in-network.  Value should be a Quantity."
* #out-network-copay       "Copay for out-of-network"          "Indicates a percentage co-pay to expect if delivered out-of-network.  Value should be a Quantity."
* #auth-out-network-only   "Authorization out-of-network only" "Authorization is only necessary if out-of-network.  Value should be a boolean."
* #concurrent-review       "Concurrent review"                 "Additional payer-defined documentation will be required prior to claim payment.  Value should be a boolean."
* #appropriate-use-needed  "Appropriate use"                   "Payer-defined appropriate use process must be invoked to determine coverage.  Value should be a boolean."
* #policy-link             "Policy Link"                       "A URL pointing to the specific portion of a payer policy, coverage agreement or similar authoritative document that provides a portion of the basis for the decision documented in the coverage-information.  Value should be a url."
* #instructions            "Instructions"                      "Information to display to the user that gives guidance about what steps to take in achieving the recommended actions identified by this coverage-information (e.g. special instructions about requesting authorization, details about information needed, details about data retention, etc.).  Value should be a string."
  * #instructions-clinical   "Clinical instructions"           "Instructions specifically intended for the use of clinical (rather than administrative staff)"
  * #instructions-admin      "Administrative Instructions"     "Instructions specifically intended for the use of administrative (rather than clinical staff)"
// Coverage guidance - general
* #conditional             "Conditional"                       "There is the potential for information requirements from a participant type not listed.  However, a decision on whether there in fact are additional information requirements cannot be made without more information (more detailed code, service rendering information, etc.)"
// Coverage guidance - covered
* #covered                 "Covered"                           "Regular coverage applies"
* #not-covered             "Not covered"                       "No coverage or possibility of coverage for this service)"
// Coverage guidance - doc
* #clinical                "Clinical Documentation"            "Details most likely to originate from a clinician are required to satisfy additional documentation requirements, determine coverage and/or prior auth applicability - e.g. via DTR by clinician.  Indicates that the CRD client should expose the need to launch DTR to clinical users."
* #admin                   "Administrative Documentation"      "Administrative details not likely to require clinical expertise are needed to satisfy additional documentation requirements, determine coverage and/or prior auth applicability - e.g. via DTR by back-end staff.  Indicates that while the CRD client might expose the ability to launch DTR as an option for clinical users, it should be clear that clinical input is not necessary and deferring the use of DTR to back-end staff is perfectly appropriate.  Some CRD clients might be configured (based on provider preference) to not even show clinicians the option to launch."
* #both                    "Administrative & clinical doc"     "Both clinical and administrative details are required to satisfy additional documentation requirements, determine coverage and/or prior auth applicability.  Equivalent to the union of #admin and #clinical."
* #patient                 "Administrative & clinical doc"     "Details most likely to originate from the patient or their personal representative (e.g. parent, spouse, etc.) are required to satisfy additional documentation requirements, determine coverage and/or prior auth applicability.  For example, information about household composition, accessibility considerations, etc.  This should be used when the data needs to come from the patient themselves, rather than a clinician's assessment of the patient"
// Coverage guidance - auth
* #no-auth                 "No Prior Authorization"            "The ordered service does not require prior authorization"
* #auth-needed             "Prior Authorization Needed"        "The ordered service will require prior authorization" 
  * #performpa             "Performer Prior Authorization"     "Prior authorization is needed for the service, however such prior authoriation must be initiated by the performing (rather than ordering) provider."
* #satisfied               "Authorization Satisfied"           "While prior authorization would typically be needed, the conditions evaluated by prior authorization have already been evaluated and therefore prior authorization can be bypassed"
// Coverage guidance - info needed
* #performer               "Performer Needed"                  "Information about who (specifically, or at least performer type and affiliation) is necessary to make a determination of coverage and/or prior auth expectations"
* #location                "Location Needed"                   "Information about where (specific clinic/site or organization) is necessary to make a determination of coverage and/or prior auth expectations"
* #timeframe               "Timeframe Needed"                  "Information about when the service will be performed that is more granular than the order effective period is necessary to make a determination of coverage and/or prior auth expectations"
* #contract-window         "New Contract Window"               "The target performance time for the event falls outside the contract window for the patient's current coverage.  Information will not be available until a contract is in place covering the service time period"
// Metric token use
* #used                    "Authorization Token Used"          "An authorization token was used by the payer to access additional information from the provider system as part of the CDS Hook call"
  * #rejected              "Authorization Token Rejected"      "The payer attempted to use an authorization token to access additional information from the provider system as part of the CDS Hook call, however the access request failed.  (This is not used if the request succeeded but returned no records.)"
* #not-used                "Authorization Token Not Used"      "The payer did not attempt to use an authorization token to access additional information from the provider system as part of the CDS Hook call"
// Metric data source
* #provider-src            "Provider-sourced"                  "The metric information was captured from the provider system's perspective"
* #payer-src               "Payer-sourced"                     "The metric information was captured from the payer system's perspective"
* #_cardType               "Card Type (abstract)"              "A collector for different profiles on CDS Hooks card"
  * ^property.code = #abstract
  * ^property.valueBoolean = true
// Card types
  * #coverage-info            "Coverage Information"           "Information related to the patient's coverage, including whether a service is covered, requires prior authorization, is approved without seeking prior authorization, and/or requires additional documentation or data collection"
    * #unsolicited-determ     "Unsolicited Determination"      "An unsolicited approval of the service as having prior authorization requirements met without a formal submission of a prior authorization request"
  * #claim                    "Claim"                          "Information about what steps need to be taken to submit a claim for the service"
  * #insurance                "Insurance"                      "Allows a provider to update the patient's coverage information with additional details from the payer (e.g. expiry date, coverage extensions)"
  * #limits                   "Limits"                         "Messages warning about the patient approaching or exceeding their limits for a particular type of coverage or expiry date for coverage in general"
  * #network                  "Network"                        "Providing information about in-network providers that could deliver the order (or in-network alternatives for an order directed out-of-network)"
  * #appropriate-use          "Appropriate Use"                "Guidance on whether appropriate-use documentation is needed"
  * #cost                     "Cost"                           "What is the anticipated cost to the patient based on their coverage"
  * #therapy-alternatives-opt "Optional Therapy Alternatives"  "Are there alternative therapies that have better coverage and/or are lower-cost for the patient"
  * #therapy-alternatives-req "Required Therapy Alternatives"  "Are there alternative therapies that must be tried first prior to coverage being available for the proposed therapy"
  * #clinical-reminder        "Clinical Reminder"              "Reminders that a patient is due for certain screening or other therapy (based on payer recorded date of last intervention)"
  * #duplicate-therapy        "Duplicate Therapy"              "Notice that the proposed intervention has already recently occurred with a different provider when that information isn't already available in the provider system"
  * #contraindication         "Contraindication"               "Notice that the proposed intervention may be contraindicated based on information the payer has in their record that the provider doesn't have in theirs"
  * #guideline                "Guideline"                      "Indication that there is a guideline available for the proposed therapy (with an option to view)"
  * #off-guideline            "Off Guideline"                  "Notice that the proposed therapy may be contrary to best-practice guidelines, typically with an option to view the relevant guideline"
* #_HookType               "CDS Hook Type (abstract)"          "A collector for the different types of CDS Hooks"
  * ^property.code = #abstract
  * ^property.valueBoolean = true
  * #appointment-book    "Appointment Book"
  * #encounter-start     "Encounter Start"
  * #encounter-discharge "Encounter Discharge"
  * #order-dispatch"     "Order Dispatch"
  * #order-select        "Order Select"
  * #order-sign          "Order Sign"
* #_docReason              "Additional Information Purposes"   "A collector for codes representing different reasons for capturing additional information"
  * ^property.code = #abstract
  * ^property.valueBoolean = true
  * #withpa              "Include in prior authorization"      "The information in this QuestionnaireResponse should be packaged into a Bundle and submitted as part of (or in association with) a prior authorization for the associated request resource(s)."
  * #withclaim           "Include with claim"                  "The information in this QuestionnaireResponse should be packaged into a Bundle and submitted as part of (or in association with) the insurance claim for the services ordered by the associated request resource(s)."
  * #withorder           "Include with order"                  "The information in this QuestionnaireResponse should be packaged into a Bundle and submitted along with (or referenced as supporting information to) the associated request resource(s) when transmitting the order to the fulfilling system."
  * #retain-doc          "Medical necessity"                   "The information in this QuestionnaireResponse should be retained within the EHR as supporting evidence of the medical necessity of the associated request resource(s)."
* #_cmsLocation          "CMS Location codes"                  "A collector for CMS location codes"
  * #1 "Pharmacy **" "A facility or location where drugs and other medically related items and services are sold, dispensed, or otherwise provided directly to patients."
  * #2 "Telehealth Provided Other than in Patient's Home" "The location where health services and health related services are provided or received, through telecommunication technology. Patient is not located in their home when receiving health services or health related services through telecommunication technology."
  * #3 "School" "A facility whose primary purpose is education."
  * #4 "Homeless Shelter" "A facility or location whose primary purpose is to provide temporary housing to homeless individuals (e.g., emergency shelters, individual or family shelters)."
  * #5 "Indian Health Service" "A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and non-surgical), and rehabilitation services to American Indians and Alaska Natives who do not require hospitalization. (Effective January 1, 2003)"
  * #6 "Indian Health Service" "A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and non-surgical), and rehabilitation services rendered by, or under the supervision of, physicians to American Indians and Alaska Natives admitted as inpatients or outpatients."
  * #7 "Tribal 638" "A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and non-surgical), and rehabilitation services to tribal members who do not require hospitalization. (Effective January 1, 2003)"
  * #8 "Tribal 638" "A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and non-surgical), and rehabilitation services to tribal members admitted as inpatients or outpatients."
  * #9 "Correctional Facility" "A prison, jail, reformatory, work farm, detention center, or any other similar facility maintained by either Federal, State or local authorities for the purpose of confinement or rehabilitation of adult or juvenile criminal offenders."
  * #10 "Telehealth Provided in Patient's Home" "The location where health services and health related services are provided or received, through telecommunication technology. Patient is located in their home (which is a location other than a hospital or other facility where the patient receives care in a private residence) when receiving health services or health related services through telecommunication technology."
  * #11 "Office" "Location, other than a hospital, skilled nursing facility (SNF), military treatment facility, community health center, State or local public health clinic, or intermediate care facility (ICF), where the health professional routinely provides health examinations, diagnosis, and treatment of illness or injury on an ambulatory basis."
  * #12 "Home" "Location, other than a hospital or other facility, where the patient receives care in a private residence."
  * #13 "Assisted Living Facility" "Congregate residential facility with self-contained living units providing assessment of each resident's needs and on-site support 24 hours a day, 7 days a week, with the capacity to deliver or arrange for services including some health care and other services."
  * #14 "Group Home *" "A residence, with shared living areas, where clients receive supervision and other services such as social and/or behavioral services, custodial service, and minimal services (e.g., medication administration)."
  * #15 "Mobile Unit" "A facility/unit that moves from place-to-place equipped to provide preventive, screening, diagnostic, and/or treatment services."
  * #16 "Temporary Lodging" "A short term accommodation such as a hotel, camp ground, hostel, cruise ship or resort where the patient receives care, and which is not identified by any other POS code."
  * #17 "Walk-in Retail Health Clinic" "A walk-in health clinic, other than an office, urgent care facility, pharmacy or independent clinic and not described by any other Place of Service code, that is located within a retail operation and provides, on an ambulatory basis, preventive and primary care services. (This code is available for use immediately with a final effective date of May 1, 2010)"
  * #18 "Place of Employment-" "A location, not described by any other POS code, owned or operated by a public or private entity where the patient is employed, and where a health professional provides on-going or episodic occupational medical, therapeutic or rehabilitative services to the individual. (This code is available for use effective January 1, 2013 but no later than May 1, 2013)"
  * #19 "Off Campus-Outpatient Hospital" "A portion of an off-campus hospital provider based department which provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services to sick or injured persons who do not require hospitalization or institutionalization. (Effective January 1, 2016)"
  * #20 "Urgent Care Facility" "Location, distinct from a hospital emergency room, an office, or a clinic, whose purpose is to diagnose and treat illness or injury for unscheduled, ambulatory patients seeking immediate medical attention."
  * #21 "Inpatient Hospital" "A facility, other than psychiatric, which primarily provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services by, or under, the supervision of physicians to patients admitted for a variety of medical conditions."
  * #22 "On Campus-Outpatient Hospital" "A portion of a hospital's main campus which provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services to sick or injured persons who do not require hospitalization or institutionalization. (Description change effective January 1, 2016)"
  * #23 "Emergency Room - Hospital" "A portion of a hospital where emergency diagnosis and treatment of illness or injury is provided."
  * #24 "Ambulatory Surgical Center" "A freestanding facility, other than a physician's office, where surgical and diagnostic services are provided on an ambulatory basis."
  * #25 "Birthing Center" "A facility, other than a hospital's maternity facilities or a physician's office, which provides a setting for labor, delivery, and immediate post-partum care as well as immediate care of new born infants."
  * #26 "Military Treatment Facility" "A medical facility operated by one or more of the Uniformed Services. Military Treatment Facility (MTF) also refers to certain former U.S. Public Health Service (USPHS) facilities now designated as Uniformed Service Treatment Facilities (USTF)."
  * #27 "Outreach Site/ Street" "A non-permanent location on the street or found environment, not described by any other POS code, where health professionals provide preventive, screening, diagnostic, and/or treatment services to unsheltered homeless individuals."
  * #31 "Skilled Nursing Facility" "A facility which primarily provides inpatient skilled nursing care and related services to patients who require medical, nursing, or rehabilitative services but does not provide the level of care or treatment available in a hospital."
  * #32 "Nursing Facility" "A facility which primarily provides to residents skilled nursing care and related services for the rehabilitation of injured, disabled, or sick persons, or, on a regular basis, health-related care services above the level of custodial care to other than individuals with intellectual disabilities."
  * #33 "Custodial Care Facility" "A facility which provides room, board and other personal assistance services, generally on a long-term basis, and which does not include a medical component."
  * #34 "Hospice" "A facility, other than a patient's home, in which palliative and supportive care for terminally ill patients and their families are provided."
  * #41 "Ambulance - Land" "A land vehicle specifically designed, equipped and staffed for lifesaving and transporting the sick or injured."
  * #42 "Ambulance - Air or Water" "An air or water vehicle specifically designed, equipped and staffed for lifesaving and transporting the sick or injured."
  * #49 "Independent Clinic" "A location, not part of a hospital and not described by any other Place of Service code, that is organized and operated to provide preventive, diagnostic, therapeutic, rehabilitative, or palliative services to outpatients only."
  * #50 "Federally Qualified Health Center" "A facility located in a medically underserved area that provides Medicare beneficiaries preventive primary medical care under the general direction of a physician."
  * #51 "Inpatient Psychiatric Facility" "A facility that provides inpatient psychiatric services for the diagnosis and treatment of mental illness on a 24-hour basis, by or under the supervision of a physician."
  * #52 "Psychiatric Facility-Partial Hospitalization" "A facility for the diagnosis and treatment of mental illness that provides a planned therapeutic program for patients who do not require full time hospitalization, but who need broader programs than are possible from outpatient visits to a hospital-based or hospital-affiliated facility."
  * #53 "Community Mental Health Center" "A facility that provides the following services: outpatient services, including specialized outpatient services for children, the elderly, individuals who are chronically ill, and residents of the CMHC's mental health services area who have been discharged from inpatient treatment at a mental health facility; 24 hour a day emergency care services; day treatment, other partial hospitalization services, or psychosocial rehabilitation services; screening for patients being considered for admission to State mental health facilities to determine the appropriateness of such admission; and consultation and education services."
  * #54 "Intermediate Care Facility/ Individuals with Intellectual Disabilities" "A facility which primarily provides health-related care and services above the level of custodial care to individuals but does not provide the level of care or treatment available in a hospital or SNF."
  * #55 "Residential Substance Abuse Treatment Facility" "A facility which provides treatment for substance (alcohol and drug) abuse to live-in residents who do not require acute medical care. Services include individual and group therapy and counseling, family counseling, laboratory tests, drugs and supplies, psychological testing, and room and board."
  * #56 "Psychiatric Residential Treatment Center" "A facility or distinct part of a facility for psychiatric care which provides a total 24-hour therapeutically planned and professionally staffed group living and learning environment."
  * #57 "Non-residential Substance Abuse Treatment Facility" "A location which provides treatment for substance (alcohol and drug) abuse on an ambulatory basis.  Services include individual and group therapy and counseling, family counseling, laboratory tests, drugs and supplies, and psychological testing."
  * #58 "Non-residential Opioid Treatment Facility" "A location that provides treatment for opioid use disorder on an ambulatory basis. Services include methadone and other forms of Medication Assisted Treatment (MAT). (Effective January 1, 2020)"
  * #60 "Mass Immunization Center" "A location where providers administer pneumococcal pneumonia and influenza virus vaccinations and submit these services as electronic media claims, paper claims, or using the roster billing method. This generally takes place in a mass immunization setting, such as, a public health center, pharmacy, or mall but may include a physician office setting."
  * #61 "Comprehensive Inpatient Rehabilitation Facility" "A facility that provides comprehensive rehabilitation services under the supervision of a physician to inpatients with physical disabilities. Services include physical therapy, occupational therapy, speech pathology, social or psychological services, and orthotics and prosthetics services."
  * #62 "Comprehensive Outpatient Rehabilitation Facility" "A facility that provides comprehensive rehabilitation services under the supervision of a physician to outpatients with physical disabilities. Services include physical therapy, occupational therapy, and speech pathology services."
  * #65 "End-Stage Renal Disease Treatment Facility" "A facility other than a hospital, which provides dialysis treatment, maintenance, and/or training to patients or caregivers on an ambulatory or home-care basis."
  * #71 "Public Health Clinic" "A facility maintained by either State or local health departments that provides ambulatory primary medical care under the general direction of a physician."
  * #72 "Rural Health Clinic" "A certified facility which is located in a rural medically underserved area that provides ambulatory primary medical care under the general direction of a physician."
  * #81 "Independent Laboratory" "A laboratory certified to perform diagnostic and/or clinical tests independent of an institution or a physician's office."
  * #99 "Other Place of Service" "Other place of service not identified above."


---

// File: input/fsh/extensions/CoverageInformation.fsh

Extension: CRDCoverageInformation
Id: ext-coverage-information
Title: "Coverage Information"
Description: "Captures assertions from a payer about whether the service is covered and/or requires prior authorization."
* ^version = "1.1.0-ci-build"
* ^experimental = false
* ^context[0].type = #element
* ^context[=].expression = "Appointment"
* ^context[+].type = #element
* ^context[=].expression = "CommunicationRequest"
* ^context[+].type = #element
* ^context[=].expression = "Encounter"
* ^context[+].type = #element
* ^context[=].expression = "DeviceRequest"
* ^context[+].type = #element
* ^context[=].expression = "MedicationRequest"
* ^context[+].type = #element
* ^context[=].expression = "NutritionOrder"
* ^context[+].type = #element
* ^context[=].expression = "QuestionnaireResponse"
* ^context[+].type = #element
* ^context[=].expression = "ServiceRequest"
* ^context[+].type = #element
* ^context[=].expression = "VisionPrescription"
* obeys crd-ci-q1 and crd-ci-q2 and crd-ci-q3 and crd-ci-q4 and crd-ci-q5 and crd-ci-q6 and crd-ci-q7
* . ^short = "CoverageInfo"
  * ^definition = "Indicates coverage information."
* ^extension[$fmm].valueInteger = 1
* extension contains
    coverage 1..1 MS and
    covered 1..1 MS and
    pa-needed 0..1 MS and
    doc-needed 0..* MS and
    doc-purpose 0..* MS and
    info-needed 0..* MS and
    billingCode 0..* MS and
    reason 0..* MS and
    detail 0..* MS and
    dependency 0..* MS and
    questionnaire 0..* MS and
    date 1..1 MS and
    coverage-assertion-id 1..1 MS and
    satisfied-pa-id 0..1 MS and
    contact 0..* MS and 
    expiry-date 0..1 MS
* extension[coverage] only Extension
  * ^short = "Reference to Coverage"
  * ^definition = "Reference to Coverage that assertion applies to."
  * ^comment = "This will always be a link to a Coverage resource on the CRD client's system - typically accessed via prefetch or direct query using the CDS-Hooks token.  If no coverage instance is available, the coverage-information extension cannot be returned."
  * value[x] 1..1
  * value[x] only Reference(CRDCoverage)
* extension[covered] only Extension
  * ^short = "covered | not-covered | conditional"
  * ^definition = "Indicates whether the ordered/requested service is covered under patient's plan.  This includes checking of whether the proposed service is a benefit under the patient's plan.  It **MAY** also involve checking whether the patient has reached their limits under the current plan period, but is not required to."
  * ^comment = "Details on why coverage does not exist would be conveyed in the 'reason' element."
  * value[x] 1..1
  * value[x] only code
  * value[x] from CRDCoveredInfo (required)
* extension[pa-needed] only Extension
  * ^short = "no-auth | auth-needed | satisfied | performpa | conditional"
  * ^definition = "Indicates whether prior auth will be needed for coverage to be provided"
  * ^condition[+] = crd-ci-q2
  * ^condition[+] = crd-ci-q5
  * value[x] 1..1
  * value[x] only code
  * value[x] from CRDCoveragePaDetail (required)
* extension[doc-needed] only Extension
  * ^short = "clinical | admin | patient | conditional"
  * ^definition = "Indicates whether additional documentation needs to be captured (purpose in next element)"
  * ^comment = "See additional guidance in the [notes](StructureDefinition-ext-coverage-information.html#doc-needed-vs-info-needed)"
  * value[x] 1..1
  * value[x] only code
  * value[x] from CRDAdditionalDoc (required)
* extension[doc-purpose] only Extension
  * ^short = "Documentation purpose"
  * ^condition[+] = crd-ci-q4
  * value[x] 1..1
  * value[x] only code
  * value[x] from CRDDocReason (required)
* extension[info-needed] only Extension
  * ^short = "performer | location | timeframe"
  * ^definition = "Indicates whether information about the perfomer, location, and/or performance date is needed to determine coverage information"
  * ^comment = "See additional guidance in the [notes](StructureDefinition-ext-coverage-information.html#doc-needed-vs-info-needed)"
  * ^condition[+] = crd-ci-q3
  * value[x] 1..1
  * value[x] only code
  * value[x] from CRDInformationNeeded (required)
* extension[billingCode] only Extension
  * ^short = "Billing code"
  * ^definition = "Billing code(s) that must be used in the eventual claim for the coverage assertion to hold"
  * ^comment = "Codes may include modifier codes, leveraging [CPT's post-coordination syntax](https://terminology.hl7.org/CPT.html)"
  * value[x] 1..1
  * value[x] only Coding
  * value[x] from USCLSCodes (example)
* extension[reason] only Extension
  * ^short = "Reason for assertion"
  * ^definition = "Indicates the 'reason' for the coverage assertion"
  * ^comment = "This can be used whenever the reason may not be obvious to the practitioner.  E.g. prior authorization waived because the provider is gold-carded; patient is no longer a minor and hasn't been registered as an adult dependent; patient has reached their limit for this type of service this year; etc.  Additional standard reason codes may be introduced in the future.  If no standard code applies, use text."
  * ^condition[+] = crd-ci-q7
  * value[x] 1..1
  * value[x] only CodeableConcept
  * value[x] from CRDCoverageAssertionReasons (extensible)
  * ^condition[+] = crd-ci-q6
* extension[detail] only Extension
  * ^short = "detail for assertion"
  * ^definition = "Indicates the 'detail' for the coverage assertion"
  * ^comment = "Additional information that qualifies, describes, or provides additional guidance about coverage or documentation requirements."
  * extension contains
      code 1..1 and
      value 1..1 and
      qualification 0..1
  * extension[code] ^short = "Name of name-value pair"
    * ^definition = "The type of detail or qualification expressed."
    * value[x] only CodeableConcept
    * value[x] from CRDCoverageDetailCodes (extensible)
  * extension[value] ^short = "Value of name-value pair"
    * ^definition = "The detail or qualification that applies to this coverage assertion."
    * value[x] only boolean or string or url or SimpleQuantity or Period
  * extension[qualification] ^short = "Additional info about detail"
    * ^definition = "Additional text that qualifies/expands on the computable detail.  E.g. 'Provided coverage is renewed' or 'Does not account for deductible'"
    * value[x] only string
* extension[dependency] ^short = "Resources that impact this assertion"
  * ^definition = "If present, indicates that the determination represented here is dependent on the content, determination, and possibly execution of the referenced order(s)"
  * ^requirements = "For example, the authorization decision on a request for post-surgical physiotherapy might be dependent on the order for the surgery itself.  If coverage for the surgery is not approved or the order for the surgery is cancelled, that might impact the decision on covering the physiotherapy."
  * value[x] only Reference(CRDAppointmentWithOrder or CRDAppointmentNoOrder or CRDCommunicationRequest or CRDDeviceRequest or CRDMedicationRequest or CRDNutritionOrder or CRDServiceRequest)
* extension[questionnaire] only Extension
  * ^short = "Questionnaire to complete"
  * ^definition = "A form to be filled out to gather more information."
  * ^comment = "If using DTR, this will be used by DTR to determine the Questionnaire packages to be returned.  If empty, DTR will determine the questionnaire packages itself.  If not using DTR, providing a Questionnaire url is the only way to indicate what form to complete."
  * ^condition[+] = "crd-ci-q1"
  * value[x] only canonical
    * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/Questionnaire"
* extension[date] only Extension
  * ^short = "Assertion date"
  * ^definition = "Date on which assertion was made."
  * value[x] 1..1
  * value[x] only date
* extension[coverage-assertion-id] only Extension
  * ^short = "Coverage assertion trace number"
  * ^definition = "Trace identifier to allow tracking the guidance in source system.  This identifier can also be used used to re-establish cached context information when subsequently launching DTR."
  * value[x] only string
* extension[satisfied-pa-id] only Extension
  * ^short = "Satisfied prior auth number"
  * ^definition = "An identifier indicating that prior authorization requirements have been met"
  * ^comment = "When operating under the CMS enforcement discretion, this element is a prior authorization number and can be submitted in the corresponding X12 element when submitting an eventual claim"
  * ^condition = crd-ci-q5
  * value[x] only string
* extension[contact] only Extension
  * ^short = "Contact information"
  * ^definition = "Phone number, fax number, email address, website, or other ContactPoint that can be used to ask questions/escalate issues related to a coverage assertion."
  * ^comment = "This **SHOULD** only be populated if the contact information is context-specific rather than a generic contact for the payer as a whole."
  * value[x] only ContactPoint
* extension[expiry-date] only Extension
  * ^short = "Expiration date"
  * ^definition = "Date after which the coverage assertion would no longer be valid."
  * ^comment = "In this case, mustSupport means that if the payer knows of an expiry date, they must share it.  However, if the payer never has expiry dates for their assertions, it is fine to omit."
  * value[x] 0..1
  * value[x] only date
* url only uri

Invariant: crd-ci-q1
Description: "Questionnaire is only allowed when doc-needed exists"
Severity: #error
Expression: "extension.where(url='questionnaire').exists() implies extension.where(url = 'doc-needed').exists()"

Invariant: crd-ci-q2
Description: "If covered is set to 'not-covered', then 'pa-needed' must not exist."
Severity: #error
Expression: "extension.where(url = 'covered' and value = 'not-covered').exists() implies extension.where(url = 'pa-needed').exists().not()"

Invariant: crd-ci-q3
Description: "'info-needed' SHALL exist if and only if at least one of 'covered', 'pa-needed', or 'doc-needed' is set to 'conditional'."
Severity: #error
Expression: "extension.where((url = 'covered' or url = 'pa-needed' or url = 'doc-needed') and value = 'conditional').count() >= 1 implies extension.where(url = 'info-needed').exists()"

Invariant: crd-ci-q4
Description: "If 'pa-needed' is 'satisfied', then 'Doc-purpose' can't be 'withpa'."
Severity: #error
Expression: "extension.where(url = 'pa-needed' and value = 'satisfied') and extension.where(url = 'doc-purpose').exists() implies extension.where(url = 'doc-purpose').all(value != 'withpa')"

Invariant: crd-ci-q5
Description: "'satisfied-pa-id' must exist if and only if 'pa-needed' is set to 'satisfied'."
Severity: #error
Expression: "extension.where(url = 'pa-needed' and value = 'satisfied').exists() = extension.where(url = 'satisfied-pa-id').exists()"

Invariant: crd-ci-q6
Description: "If 'info-needed' is Other, then reason must be specified"
Severity: #error
Expression: "extension.where(url = 'info-needed' and value = 'Other').exists() implies extension.where(url = 'reason').exists()"

Invariant: crd-ci-q7
Description: "If reason.coding is present and is not from the extensible value set, then reason.text must be present"
Severity: #error
Expression: "extension.where(url = 'reason').empty() or extension.where(url = 'reason').value.text.exists() or extension.where(url = 'reason').value.memberOf('http://hl7.org/fhir/us/davinci-crd/ValueSet/coverageAssertionReasons')"

---

// File: input/fsh/instances/annotated-example.fsh

Instance: annotated-example
InstanceOf: CRDMedicationRequest
Title: "MedicationRequest annotated example"
Description: "Example medication request with an annotation showing coverage expectations"
Usage: #example
* extension[Coverage-Information]
  * extension[coverage].valueReference = Reference(Coverage/example)
  * extension[covered].valueCode = $temp#conditional
  * extension[pa-needed].valueCode = $temp#satisfied
  * extension[doc-needed].valueCode = $temp#admin
  * extension[doc-purpose].valueCode = $temp#withclaim
  * extension[info-needed].valueCode = $temp#performer
  * extension[billingCode].valueCoding = $cpt#77065
  * extension[billingCode].valueCoding = $cpt#77066
  * extension[billingCode].valueCoding = $cpt#77067
  * extension[reason].valueCodeableConcept.text = "In-network required unless exigent circumstances"
  * extension[reason].valueCodeableConcept = $temp#gold-card
  * extension[detail]
    * extension[code].valueCodeableConcept = $temp#auth-out-network-only
    * extension[value].valueBoolean = true
    * extension[qualification].valueString = "Out-of-network prior auth does not apply if delivery occurs at a service site designated as 'remote'"
  * extension[questionnaire].valueCanonical = "http://example.org/some-payer/Questionnaire/123|1.3.0"
  * extension[date].valueDate = "2019-02-15"
  * extension[coverage-assertion-id].valueString = "12345ABC"
  * extension[satisfied-pa-id].valueString = "XXYYZ"
  * extension[contact].valueContactPoint
    * system = #url
    * value = "http://some-payer.org/xyz-sub-org/get-help-here.html"
  * extension[expiry-date].valueDate = "2019-08-01"
* status = #draft
* intent = #original-order
* medicationCodeableConcept = $rxnorm#616447 "mycophenolate mofetil 250 MG Oral Capsule [Cellcept]"
* subject = Reference(http://example.org/Patient/123) "Jane Smith"
* encounter = Reference(http://example.org/Encounter/ABC)
* authoredOn = "2019-02-15"
* requester = Reference(http://example.org/PractitionerRole/987) "Dr. Jones"
* note
  * authorString = "XYZ Insurance"
  * time = "2019-02-15T15:07:18-05:00"
  * text = "Unsolicited prior authorization for Jane Smith to receive 6 tablets Cellcept 250 MG Oral Capsule BID granted.  Please note prior authorization # 12345 on claim submission."
* dosageInstruction
  * text = "6 tablets every 12 hours."
  * timing.repeat
    * frequency = 1
    * period = 12
    * periodUnit = #h
  * doseAndRate.doseQuantity
    * value = 6
    * unit = "tablet"


---

// File: input/fsh/instances/crd-client.fsh

Instance: crd-client3.1
InstanceOf: CapabilityStatement
Title: "CRD Client USCDI 1"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-crd/CapabilityStatement/crd-client3.1"
* name = "CRDClient3_1"
* description = "This statement defines the expected capabilities of systems wishing to conform to the ''CRD Client'' role for USCDI 1 (US Core 3.1.1).  This role is responsible for initiating CDS Hooks calls and consuming received decision support.  It is *also* responsible for returning data requested by the CRD Server needed to provide that decision support.  This capability statement doesn't define the CDS Hooks capabilities as there is no standard way to do that as yet.  Instead, it focuses on the 'server' capabilities needed to respond to CRD Server queries.  These capabilities are based on US Core.\n\nIn addition to the U.S. core expectations, the CRD Client **SHALL** support all 'SHOULD' 'read' and 'search' capabilities listed below for resources referenced in supported hooks and order types if it does not support returning the associated resources as part of CDS Hooks pre-fetch.  The CRD Client **SHALL** also support 'update' functionality for all resources listed below where the client allows invoking hooks based on the resource."
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|3.1.1"
* insert CommonClient

Instance: crd-client6.1
InstanceOf: CapabilityStatement
Title: "CRD Client USCDI 3"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-crd/CapabilityStatement/crd-client6.1"
* name = "CRDClient6_1"
* description = "This statement defines the expected capabilities of systems wishing to conform to the ''CRD Client'' role for USCDI 3 (US-Core 6.1.0).  This role is responsible for initiating CDS Hooks calls and consuming received decision support.  It is *also* responsible for returning data requested by the CRD Server needed to provide that decision support.  This capability statement doesn't define the CDS Hooks capabilities as there is no standard way to do that as yet.  Instead, it focuses on the 'server' capabilities needed to respond to CRD Server queries.  These capabilities are based on US Core.\n\nIn addition to the U.S. core expectations, the CRD Client **SHALL** support all 'SHOULD' 'read' and 'search' capabilities listed below for resources referenced in supported hooks and order types if it does not support returning the associated resources as part of CDS Hooks pre-fetch.  The CRD Client **SHALL** also support 'update' functionality for all resources listed below where the client allows invoking hooks based on the resource."
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|6.1.0"
* insert CommonClient

Instance: crd-client7.0
InstanceOf: CapabilityStatement
Title: "CRD Client USCDI 4"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-crd/CapabilityStatement/crd-client7.0"
* name = "CRDClient7_0"
* description = "This statement defines the expected capabilities of systems wishing to conform to the ''CRD Client'' role for USCDI 4 (US-Core 7.9.0).  This role is responsible for initiating CDS Hooks calls and consuming received decision support.  It is *also* responsible for returning data requested by the CRD Server needed to provide that decision support.  This capability statement doesn't define the CDS Hooks capabilities as there is no standard way to do that as yet.  Instead, it focuses on the 'server' capabilities needed to respond to CRD Server queries.  These capabilities are based on US Core.\n\nIn addition to the U.S. core expectations, the CRD Client **SHALL** support all 'SHOULD' 'read' and 'search' capabilities listed below for resources referenced in supported hooks and order types if it does not support returning the associated resources as part of CDS Hooks pre-fetch.  The CRD Client **SHALL** also support 'update' functionality for all resources listed below where the client allows invoking hooks based on the resource."
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|7.0.0"
* insert CommonClient

RuleSet: CommonClient
* fhirVersion = #4.0.1
* status = #active
* experimental = false
* date = "2022-11-25"
* kind = #requirements
* format = #json
* rest
  * mode = #server
  * documentation = "A CRD Client provides a FHIR server endpoint, returning patient information to the CRD server, ensuring it has the needed information to perform decision support."
  * security.description = "Implementations **SHALL** meet the general security requirements documented in the [[http://hl7.org/fhir/us/davinci-hrex/STU1/security.html|HRex implementation guide]]."
  * insert CSresourceCRD(#Appointment, profile-appointment-with-order)
    * resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-appointment-no-order"
    * resource[=].versioning = #versioned-update
    * insert CSinteraction(#SHOULD, #update, [[Allows annotating the appointment in response to a card.  (Support is mandatory if the system supports Appointments)]])
  * insert CSresourceCRD(#CommunicationRequest, profile-communicationrequest)
    * resource[=].versioning = #versioned-update
    * insert CSinteraction(#SHOULD, #update, [[Allows annotating the communication request in response to a card.  (Support is mandatory if the system supports CommunicationRequests)]])
  * insert CSresourceCRD(#DeviceRequest, profile-devicerequest)
    * resource[=].versioning = #versioned-update
    * insert CSinteraction(#SHOULD, #update, [[Allows annotating the device request in response to a card.  (Support is mandatory if the system supports DeviceRequests.)]])
  * insert CSresourceCRD(#Encounter, profile-encounter)
    * insert CSinteraction(#SHOULD, #update, [[Allows annotating the encounter in response to a card.  (Support is mandatory if the system supports Encounters)]])
    * insert CSinteraction(#SHOULD, #search-type, [[Allows retrieval of the encounter for a nutrition order (including referenced location) if not retrieved as part of pre-fetch.  (Support is mandatory if not supported as part of pre-fetch.)]])
    * resource[=].versioning = #versioned-update
    * resource[=].searchInclude = "Encounter:location"
    * insert CSsearch(#SHALL, "patient", "http://hl7.org/fhir/SearchParameter/Coverage-patient", #reference, [[Allows filtering encounters based on the patient focus of the encounter]])
    * insert CSsearch(#SHALL, "_id", "http://hl7.org/fhir/SearchParameter/Resource-id", #token, [[Allows searching for a Encounter by id]])
    * insert CSsearch(#SHALL, "organization", "http://hl7.org/fhir/SearchParameter/Encounter-location", #reference, [[Allows performing an _include on Location when retrieving an Encounter]])
  * insert CSresourceCRD(#MedicationRequest, profile-medicationrequest)
    * resource[=].versioning = #versioned-update
    * insert CSinteraction(#SHOULD, #update, [[Allows annotating the medication request in response to a card.  (Support is mandatory if the system supports MedicationRequests)]])
  * insert CSresourceCRD(#NutritionOrder, profile-nutritionorder)
    * resource[=].versioning = #versioned-update
    * insert CSinteraction(#SHOULD, #update, [[Allows annotating the nutrition order in response to a card.  (Support is mandatory if the system supports NutritionOrders.)]])
  * insert CSresourceCRD(#ServiceRequest, profile-servicerequest)
    * resource[=].versioning = #versioned-update
    * insert CSinteraction(#SHOULD, #update, [[Allows annotating the service requests in response to a card.  (Support is mandatory if the system supports ServiceRequests.)]])
  * insert CSresourceCRD(#VisionPrescription, profile-visionprescription)
    * resource[=].versioning = #versioned-update
    * insert CSinteraction(#SHOULD, #update, [[Allows annotating the vision prescription in response to a card.  (Support is mandatory if the system supports VisionPrescriptions)]])
  * insert CSresourceCRD(#Coverage, profile-coverage)
    * insert CSinteraction(#SHOULD, #search-type, [[Allows retrieval of the patient's coverage information if it is not retrieved as part of pre-fetch.  (Support is mandatory if not supported as part of pre-fetch.)  Note that only coverages relevant to the payer(s) associated with the requesting CRD Server are allowed to be returned.]])
    * insert CSsearch(#SHALL, "patient", "http://hl7.org/fhir/SearchParameter/Coverage-patient", #reference, [[Allows retrieving coverages for the patient]])
    * insert CSsearch(#SHALL, "status", "http://hl7.org/fhir/SearchParameter/Coverage-status", #token, [[Allows filtering to only active coverages]])
  * insert CSresourceCRD(#Device, profile-device)
    * insert CSinteraction(#SHOULD, #read, [[Allows retrieval of the device requested in a DeviceRequest if it is not retrieved as part of pre-fetch.  (Support is mandatory if not supported as part of pre-fetch.)]])
  * insert CSresourceCRD(#Location, profile-location)
    * insert CSinteraction(#SHOULD, #read, [[Allows retrieval of the location associated with an order or appointment if not retrieved as part of pre-fetch.  (Support is mandatory if not supported as part of pre-fetch.)]])
  * insert CSresourceCRD(#Organization, profile-organization)
    * insert CSinteraction(#SHOULD, #read, [[Allows retrieval of ordering and/or performing organization's information if not retrieved as part of pre-fetch.  (Support is mandatory if not supported as part of pre-fetch.)]])
  * insert CSresourceCRD(#Patient, profile-patient)
    * insert CSinteraction(#SHOULD, #read, [[Allows retrieval of the patient demographics if patient is not retrieved as part of pre-fetch.  (Support is mandatory if not supported as part of pre-fetch.)]])
  * insert CSresource(#Practitioner, "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner")
    * insert CSinteraction(#SHOULD, #read, [[Allows retrieval of ordering and/or performing provider's information if not retrieved as part of pre-fetch.  (Support is mandatory if not supported as part of pre-fetch.)]])
  * insert CSresource(#PractitionerRole, "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-practitionerrole")
    * insert CSinteraction(#SHOULD, #search-type, [[Allows retrieval of ordering and/or performing provider's (including associated Practitioners and Organizations) if not retrieved as part of pre-fetch.  (Support is mandatory if not supported as part of pre-fetch.)]])
    * resource[=].searchInclude[+] = "PractitionerRole:organization"
    * resource[=].searchInclude[+] = "PractitionerRole:practitioner"
    * insert CSsearch(#SHALL, "_id", "http://hl7.org/fhir/SearchParameter/Resource-id", #token, [[Allows searching for a PractitionerRole by id]])
    * insert CSsearch(#SHALL, "organization", "http://hl7.org/fhir/SearchParameter/PractitionerRole-organization", #reference, [[Allows performing an _include on Organization when retrieving a PractitionerRole]])
    * insert CSsearch(#SHALL, "practitioner", "http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner", #reference, [[Allows performing an _include on Practitioner when retrieving a PractitionerRole]])
  * insert CSresourceCRD(#Task, profile-taskquestionnaire)
    * insert CSinteraction(#SHOULD, #create, [[Needed to allow support for cards returning deferrable cards and/or requests to complete Questionnaires.]])


---

// File: input/fsh/instances/crd-server.fsh

Instance: crd-server
InstanceOf: CapabilityStatement
Title: "CRD Server USCDI 1, 3, 4"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-crd/CapabilityStatement/crd-server"
* name = "CRDServer"
* status = #active
* experimental = false
* date = "2022-11-25"
* description = "This statement defines the expected capabilities of systems wishing to conform to the ''CRD Server'' role for USCDI 1 (US-Core 3.1.1), USCDI 3 (US-Core 6.1.0), and USCDI 4 (US-Core 7.0.0).  This role is responsible for responding to CDS Hooks calls and responding with appropriate decision support.  Much of its interactions will be with payer back-end systems over non-FHIR protocols.  This CapabilityStatement does not describe these 'server <-> payer' interactions.  Instead, it focuses on the ability of the CRD service to interact with the CRD client's FHIR endpoint to retrieve additional data.  All such interactions are optional, as their necessity is dependent on what types of information is needed to support payer rules, the types of coverage the payer offers, and the degree of sophistication of the decision support offered by the CRD server.  All resources and search parameters supported by US Core are fair game, though the [3.1.1](CapabilityStatement-crd-client3.1.html), [6.1.0](CapabilityStatement-crd-client6.1.html), and [7.0.0](CapabilityStatement-crd-client7.0.html) clients might vary in which resources they support."
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|3.1.1"
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|6.1.0"
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|7.0.0"
* fhirVersion = #4.0.1
* format = #json
* rest
  * mode = #client
  * documentation = "A CRD server acts as a client, soliciting patient information from the FHIR endpoint of the CRD client, retrieving additional information needed to provide decision support."
  * security.description = "Implementations **SHALL** meet the general security requirements documented in the [HRex implementation guide](http://hl7.org/fhir/us/davinci-hrex/STU1.1/security.html)."


---

// File: input/fsh/instances/med0320.fsh

Instance: med0320
InstanceOf: Medication
Usage: #inline
* code = $sct#1145423002 "Azithromycin 250 mg oral tablet"

---

// File: input/fsh/instances/Practitioner-full.fsh

Instance: Practitioner-full
InstanceOf: USCorePractitionerProfile
Title: "Practitioner full example"
Description: "An example showing a fully populated US Core Practitioner instance (used in CRD examples)"
Usage: #example
* id = "full"
* identifier[0]
  * system = "http://example.org/some-code-system"
  * value = "9941339108"
* identifier[+]
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "1234567893"
* identifier[+]
  * system = "http://terminology.hl7.org/NamingSystem/CMSCertificationNumber"
  * value = "25456"
* name.family = "Bone"
* telecom[+]
  * system = #phone
  * value = "1-234-567-8900"
* telecom[+]
  * system = #email
  * value = "bones@example.org"
* address[+]
  * line[+] = "Suite 100"
  * line[+] = "101 Some Street"
  * city = "Las Vegas"
  * state = "CA"
  * postalCode = "99999"
  * country = "U.S.A."
* address[+]
  * line[+] = "Care of Docs R Us"
  * line[+] = "123 Another Street"
  * city = "Vancouver"
  * state = "BC"
  * postalCode = "V1A 2B3"
* qualification[0].code.text = "Cardiologist"
* qualification[+].code.text = "Surgeon"

---

// File: input/fsh/instances/questionnaire-example.fsh

Instance: questionnaire-example
InstanceOf: CRDTaskQuestionnaire
Title: "Questionnaire Task example"
Description: "Example questionnaire-completion Task populated based on CRD profile"
Usage: #example
* basedOn = Reference(MedicationRequest/example)
* status = #ready
* intent = #order
* code = $temp_1#complete-questionnaire
* for = Reference(Patient/example)
* encounter = Reference(Encounter/example)
* authoredOn = "2018-08-09"
* requester = Reference(http://example.org/fhir/Organization/payer)
* reasonCode = $temp#reason-prior-auth
  * text = "Needed for prior authorization"
* input[questionnaire].valueCanonical = "http://example.org/Questionnaire/XYZ|2"
* input[responseEndpoint].valueUrl = "http://example.org/somePayer"
* input[afterCompletion].valueCodeableConcept = $temp#prior-auth-include "Include in prior authorization"

---

// File: input/fsh/instances/visionprescription-example.fsh

Instance: visionprescription-example
InstanceOf: CRDVisionPrescription
Title: "VisionPrescription example"
Description: "Example vision prescription based on CRD profile"
Usage: #example
* identifier
  * system = "http://www.happysight.com/prescription"
  * value = "15013"
* status = #draft
* created = "2014-06-15"
* patient = Reference(Patient/example)
* dateWritten = "2014-06-15"
* prescriber = Reference(Practitioner/full)
* lensSpecification[0]
  * product = $ex-visionprescriptionproduct#lens
  * eye = #right
  * sphere = -2.00
  * prism
    * amount = 0.5
    * base = #down
  * add = 2.00
* lensSpecification[+]
  * product = $ex-visionprescriptionproduct#lens
  * eye = #left
  * sphere = -1.00
  * cylinder = -0.50
  * axis = 180
  * prism
    * amount = 0.5
    * base = #up
  * add = 2.00

---

// File: input/fsh/logicals/CRDMetricData.fsh

Logical: CRDMetricData
Id: CRDMetricData
Title: "CRD Metric Data"
Description: "A logical model describing the information that should be captured by CRD implementers about every CRD invocation to support measures evaluating CRD implementation"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* ^extension[$standards-status].valueCode = #informative
* source            1..1 code            "provider-src | payer-src"            "A code to indicate which type of system collected the metric data."
* source    from MetricDataSource      (required)
  * ^comment = "Each hook should have metric data capture by both the initiating provider and the responding payer."
* hookInstance      1..1 string          "Unique hook invocation id"           "The unique id for this specific hook invocation."
  * ^comment = "Used to link the statistics for a given hook call between provider and payer systems."
* hookType          1..1 code            "order-select | order-sign +"         "The type of hook specified in the `hook` element in the CDS hooks request."
* hookType          from CDSHookType   (extensible)
* providerId        1..1 Identifier      "User invoking hook"                  "The NPI number of the user who initiated the hook request."
* providerId.system = "http://hl7.org/fhir/sid/us-npi"
* providerId.value  1..1
* groupId           1..1 Identifier      "Healthcare org of user"              "The NPI of the hospital/clinic/other organization that initiated the hook request."
* groupId.system    = "http://hl7.org/fhir/sid/us-npi"
* groupId.value     1..1
* payerId           1..1 Identifier      "Payer receiving hook"                "The identifier of the payer organization to whom the CRD call was made."
* payerId.system    1..1
* payerId.value     1..1
* requestTime       1..1 instant         "Time hook initiated"                 "For providers, the time the hook call was made.  For payers, the time the hook call was received."
* responseTime      0..1 instant         "Time of hook response"               "For providers, the time the hook response was received.  For payers, the time the hook response was returned."
* httpResponse      1..1 positiveInt     "e.g. 200"                            "What HTTP response code was returned for the hook invocation."
* issue             0..* BackboneElement "OperationOutcome info"               "In the event of an HTTP error, if an OperationOutcome is returned, what were the issues?"
  * code            1..1 code            "Error code"                          "The issue.code value from the OperationOutcome for this issue."
  * code            from IssueType               (required)
  * details         0..1 CodeableConcept "More detailed error code"            "The issue.details value from the OperationOutcome for this issue."
  * details         from OperationOutcomeCodes   (example)
    * ^requirements = "Because these codes are not standardized, they will primarily only be useful for evaluation between communication partners, not for comparison across implementations"
* tokenUse          0..1 code            "used | not-used | rejected"          "Indicates whether the provided access token was used to retrieve additional information.  Rejected indicates that when used, the access failed."
* tokenUse          from MetricTokenUse          (example)
* orderDetail       0..* CodeableConcept "Service or product code(s)"          "The code or codes defining the type of product or service from the focal Request or "
* orderDetail       from MetricOrderDetail       (extensible)
  * ^comment = "Specifically, this corresponds to: Appointment.serviceType, CommunicationRequest.payload.valueCodeableConcept, DeviceRequest.codeCodeableConcept, DeviceRequest.codeReference.resolve().udiCarrier.deviceIdentifier (expressed as a CodeableConcept), Encounter.serviceType, MedicationRequest.medicationCodeableConcept, MedicationRequest.medicationReference.resolve().code, ServiceRequest.code, VisionPrescription.lensSpecification.productType"
* resources         0..* BackboneElement "Resource types accessed"             "Information other than the 'focal' resources (orders, encounter, appointment) for the hook that were accessed by the payer."
  * type            1..1 code            "Kind of resource"                    "What kind of resource was accessed."
  * type            from ResourceType            (required)
  * profile         0..1 canonical       "Solicited profile"                   "Indicates the sub-type of data accessed in situations where multiple US-core profiles could apply (e.g. Observation).  Note: This does not mean that the data received was actually valid against the profile, merely that the search criteria used were intended to retrieve data of this type."
    * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/StructureDefinition"
  * count           1..1 positiveInt     "Number retrieved"                    "How many resources of that type were accessed."
  * prefetch        0..1 boolean         "Retrieved by prefetch?"              "Was the data retrieved by prefetch or direct query.  (If some resources of the same type were accessed both with and without prefetch, include two repetitions.)"
* response          0..* BackboneElement "Returned card/system action"         "Summary information about each card or system action returned."
  * type            0..1 code            "Type of CRD card"                    "The CRD code for the card.  Mandatory if the card corresponds to a type defined by CRD, otherwise omit."
  * type            from CRDCardType             (required)
  * focus           0..* code            "Resource tied to card"               "Indicates the type of resource(s) tied to the card."
  * engagement      0..1 code            "ignore | accept | override"          "Indicates if the user engaged with the card as per the CDS Hooks feedback mechanism."
  * coverageInfo    0..* BackboneElement "Coverage information"                "If the card is a coverage-information card, indicates additional information about the information provided in the coverage-information extension."
    * covered       0..1 code            "covered | not-covered | conditional" "Indicates whether the service is covered."
    * covered       from CRDCoveredInfo          (required)
    * paNeeded      0..1 code            "auth-needed | no-auth | satisfied +" "Indicates whether prior authorization is necessary or not, as well as considerations about applying for prior authorization."
    * paNeeded      from CRDCoveragePaDetail     (required)
    * docNeeded     0..1 code            "no-doc | clinical | admin | both +"  "Indicates whether additional information is necessary (for prior auth, claims submission, or some other purpose)."
    * docNeeded     from CRDAdditionalDoc        (required)
    * infoNeeded    0..1 code            "performer | location | timeframe"    "Indicates what additional inforamtion is necessary in order to determine authorization/coverage - which might be available on a later hook invocation."
    * infoNeeded    from CRDInformationNeeded    (required)
    * questionnaire 0..* BackboneElement "Questionnaire(s) returned"           "Information about the Questionnaire(s) returned to gather additional information (e.g. through DTR)."
      * ^requirements = "Allows linking metadata about forms identified 'to be filled out' in CRD with what is actually completed in DTR, and eventually submitted in CDex, PAS or claims"
      * reference   1..1 canonical       "Questionnaire url & version"         "The official identifier of one of the Questionnaires provided to be filled out."
        * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/Questionnaire"
      * adaptive    1..1 boolean         "Is questionnaire adaptive?"          "If true, indicates that the questionnaire is adaptive (i.e. uses the $next-question operation to determine questions)."
      * response    1..1 boolean         "Pre-pop response provided?"          "If true, indicates that the card included a partially populated QuestionnaireResponse with answers filled by the payer from pre-known data."
    * assertionId   1..1 string          "Id for coverage assertion"           "Corresponds to the coverage-assertion-id from the coverage-information extension."
      * ^requirements = "Used to link the results of CRD to metric information captured for DTR and/or PAS."
    * satisfiedId   0..1 string          "Id if PA is satisfied"               "Corresponds to the satisfied-pa-id from the coverage-information extension."
    * businessLine  0..1 CodeableConcept "E.g. MedicareAdvantage"              "A code that indicates which type of insurance this assertion applies to."
// TODO need a binding here, but don't yet have one

---

// File: input/fsh/maps/ConceptMap-HL7Location-CRDTemp.fsh


Instance: HL7Location-CRDTemp
InstanceOf: ConceptMap
Title: "HL7 Location code to CMS location code"
Description: "A mapping between the location code mandated by HL7 with the equivalent concepts in the CMS code system (where equivalents exist)"
Usage: #definition
* name = "HL7LocationCRDTempMap"
* status = #active
* experimental = false
* sourceCanonical = "http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType"
* targetCanonical = "http://hl7.org/fhir/us/davinci-crd/ValueSet/cmslocationcodes"
* group[+]
  * source = $v3-RoleCode
  * target = $temp
  * insert mapeq(#PHARM, [[Pharmacy]], #1, [[Pharmacy **]])
  * insert mapeq(#SCHOOL, [[school]], #3, [[School]])
  * insert mapeq(#PROFF, [[Provider's Office]], #11, [[Office]])
  * insert mapeq(#MOBL, [[Mobile Unit]], #15, [[Mobile Unit]])
  * insert mapeq(#WORK, [[work site]], #18, [[Place of Employment-]])
  * insert mapeq(#HOSP, [[Hospital]], #21, [[Inpatient Hospital]])
  * insert mapeq(#ER, [[Emergency room]], #23, [[Emergency Room - Hospital]])
  * insert mapeq(#SU, [[Surgery clinic]], #24, [[Ambulatory Surgical Center]])
  * insert mapwide(#MHSP, [[Military Hospital]], #26, [[Military Treatment Facility]])
  * insert mapeq(#SNF, [[Skilled nursing facility]], #31, [[Skilled Nursing Facility]])
  * insert mapwide(#NCCF, [[Nursing or custodial care facility]], #32, [[Nursing Facility]])
  * insert mapwide(#NCCF, [[Nursing or custodial care facility]], #33, [[Custodial Care Facility]])
  * insert mapwide(#AMB, [[Ambulance]], #41, [[Ambulance - Land]])
  * insert mapwide(#AMB, [[Ambulance]], #42, [[Ambulance - Air or Water]])
  * insert mapeq(#PHU, [[Psychiatric hospital unit]], #51, [[Inpatient Psychiatric Facility]])
  * insert mapeq(#RHII, [[intellectual impairment center]], #54, [[Intermediate Care Facility/ Individuals with Intellectual Disabilities]])
  * insert mapeq(#SURF, [[Substance use rehabilitation facility]], #55, [[Residential Substance Abuse Treatment Facility]])
  * insert mapeq(#PSYCHF, [[Psychatric Care Facility]], #56, [[Psychiatric Residential Treatment Center]])
  * insert mapeq(#RHU, [[Rehabilitation hospital unit]], #61, [[Comprehensive Inpatient Rehabilitation Facility]])
  * insert mapeq(#MBL, [[medical laboratory]], #81, [[Independent Laboratory]])


---

// File: input/fsh/profiles/Appointment.fsh

Profile: CRDAppointmentBase
Parent: $Appointment
Id: profile-appointment-base
Title: "CRD Base Appointment"
Description: "This profile specifies extensions and constraints on the Appointment resource to support coverage requirements discovery."
* obeys crd-apt1 and crd-apt2
* ^experimental = false
* ^abstract = true
* status MS
  * ^short = "Appointment status"
  * ^example.label = "General"
  * ^example.valueCode = #proposed
  * ^comment = "This will be 'proposed' when using an initial appointment-book, but may be 'booked' or other values for appointment-book representing edits to the appointment."
* start MS
  * ^condition[+] = crd-apt1
* end MS
  * ^condition[+] = crd-apt2
* participant MS
  * actor MS
    * ^short = "Patient, Practitioner  or Location"
  * actor only Reference(CRDPatient or USCorePractitionerProfile or USCorePractitionerRoleProfile or CRDLocation)
// TODO: Add RelatedPerson?
  * status MS
* requestedPeriod 0..1 MS
  * ^condition[+] = crd-apt1
  * ^condition[+] = crd-apt2

Invariant: crd-apt1
Description: "Must have either start or requestedPeriod.start"
Severity: #error
Expression: "start.exists() or requestedPeriod.start.exists()"

Invariant: crd-apt2
Description: "Must have either end or requestedPeriod.end"
Severity: #error
Expression: "end.exists() or requestedPeriod.end.exists()"


Profile: CRDAppointmentWithOrder
Parent: CRDAppointmentBase
Id: profile-appointment-with-order
Description: "An appointment where the details of what the appointment is being booked for are provided in the associated ServiceRequest"
* ^extension[$fmm].valueInteger = 1
* ^experimental = false
* ^abstract = true
* basedOn 1.. MS
* basedOn only Reference(CRDServiceRequest)
  * ^comment = "potentially relevant for CRD in some situations."

Profile: CRDAppointmentNoOrder
Parent: CRDAppointmentBase
Id: profile-appointment-no-order
Description: "An appointment where the details of what the appointment is being booked for are provided inline and there is no associated ServiceRequest"
* ^extension[$fmm].valueInteger = 1
* ^experimental = false
* ^abstract = true
* extension contains CRDCoverageInformation named Coverage-Information 0..* MS
* extension[Coverage-Information] ^short = "Coverage Info"
* identifier MS
* serviceCategory MS
* serviceType MS
* specialty MS
* appointmentType MS
* reasonReference MS
//* reasonReference only Reference(USCoreConditionProblemsHealthConcernsProfile or USCoreConditionUSCoreConditionEncounterDiagnosisProfile or USCoreProcedureProfile)
  * ^comment = "potentially relevant for CRD in some situations."


---

// File: input/fsh/profiles/CommunicationRequest.fsh

Profile: CRDCommunicationRequest
Parent: $CommunicationRequest
Id: profile-communicationrequest
Title: "CRD Communication Request"
Description: "This profile specifies constraints on the CommunicationRequest resource to support coverage requirements discovery."
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* extension contains CRDCoverageInformation named Coverage-Information 0..* MS
* identifier MS
* basedOn 1..1 MS
* replaces only Reference(CRDCommunicationRequest)
  * ^comment = "potentially relevant for CRD in some situations."
* status MS
  * ^example.label = "General"
  * ^example.valueCode = #draft
  * ^comment = "This will be 'draft' when using order-select or an initial order-sign, but may be 'active' or other values for order-sign representing edits to the order, for order-dispatch or when referenced by an appointment."
* doNotPerform ..0
* subject 1.. MS
* subject only Reference(CRDPatient)
* encounter only Reference(CRDEncounter)
  * ^comment = "potentially relevant for CRD in some situations."
* payload 1.. MS
  * extension contains $extension-CommunicationRequest.payload.content named codeableConcept 1..1 MS
  * extension[codeableConcept] ^comment = "If the actual communication request being authored is conveying resources or an attachment, the CRD client SHALL either determine a coded way to indicate what information sharing is being requested or shall omit sharing the CommunicationRequest - i.e. don't bother calling the hook service."
    * value[x] only CodeableConcept
* occurrence[x] MS
* authoredOn 1.. MS
* requester 1.. MS
* requester only Reference(USCorePractitionerProfile or HRexPractitionerRole)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* recipient MS
* recipient only Reference(USCorePractitionerProfile or HRexPractitionerRole or CRDOrganization)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
* sender MS
* sender only Reference(USCorePractitionerProfile or HRexPractitionerRole or CRDOrganization)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
* reasonCode MS
//* reasonReference only Reference(USCoreConditionProblemsHealthConcernsProfile or USCoreConditionUSCoreConditionEncounterDiagnosisProfile or USCoreLaboratoryResultObservationProfile)
* reasonReference MS
  * ^comment = "potentially relevant for CRD in some situations."

---

// File: input/fsh/profiles/Coverage.fsh

Profile: CRDCoverage
Parent: USCoreCoverageProfile|7.0.0
Id: profile-coverage
Title: "CRD Coverage"
Description: "This profile specifies constraints on the Coverage resource to support coverage requirements discovery."
* ^experimental = false
* . ^definition = "This profile specifies constraints on the Coverage resource to support coverage requirements discovery."
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-coverage|6.1.0"
* policyHolder MS
* policyHolder only Reference(CRDPatient or CRDOrganization)
* subscriber MS
* subscriber only Reference(CRDPatient)
* beneficiary only Reference(CRDPatient)
* dependent MS
* payor only Reference(CRDPatient or CRDOrganization)
* order MS
* network MS
* costToBeneficiary ..0


---

// File: input/fsh/profiles/Device.fsh

Profile: CRDDevice
Parent: $Device
Id: profile-device
Title: "CRD Device"
Description: "This profile specifies additional constraints on the US Core Device Profile to support coverage requirements discovery."
* ^experimental = false
* udiCarrier ..1 MS
  * deviceIdentifier MS
* property MS
  * type MS
  * valueQuantity MS
  * valueCode MS

---

// File: input/fsh/profiles/DeviceRequest.fsh

Profile: CRDDeviceRequest
Parent: $DeviceRequest
Id: profile-devicerequest
Title: "CRD Device Request"
Description: "This profile specifies extensions and constraints on the DeviceRequest resource to support coverage requirements discovery."
* ^experimental = false
* extension contains CRDCoverageInformation named Coverage-Information 0..* MS
* identifier MS
* basedOn MS
* status 1.. MS
  * ^example.label = "General"
  * ^example.valueCode = #draft
  * ^comment = "This will be 'draft' when using order-select or an initial order-sign, but may be 'active' or other values for order-sign representing edits to the order or for order-dispatch."
* code[x] MS
* code[x] only CodeableConcept or Reference(CRDDevice)
* code[x] from CRDDeviceRequests (extensible)
* parameter MS
* subject MS
* subject only Reference(CRDPatient)
* encounter only Reference(CRDEncounter)
  * ^comment = "potentially relevant for CRD in some situations."
* occurrence[x] MS
* authoredOn 1.. MS
* requester 1.. MS
* requester only Reference(USCorePractitionerProfile or HRexPractitionerRole)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* performer MS
* performer only Reference(USCorePractitionerProfile or HRexPractitionerRole)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* reasonCode MS
//* reasonReference only Reference(USCoreConditionProblemsHealthConcernsProfile or USCoreConditionUSCoreConditionEncounterDiagnosisProfile or USCoreLaboratoryResultObservationProfile)
* reasonReference MS
  * ^comment = "potentially relevant for CRD in some situations."

---

// File: input/fsh/profiles/Encounter.fsh

Profile: CRDEncounter
Parent: USCoreEncounterProfile|7.0.0
Id: profile-encounter
Title: "CRD Encounter"
Description: "This profile specifies additional extensions and constraints on the US Core Encounter profile to support coverage requirements discovery."
* ^experimental = false
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter|6.1.0"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter|3.1.1"
* extension contains CRDCoverageInformation named Coverage-Information 0..* MS
* serviceType MS
* subject only Reference(CRDPatient)
* basedOn only Reference(CRDServiceRequest)
* appointment MS
* appointment only Reference(CRDAppointmentWithOrder or CRDAppointmentNoOrder)
* length MS
* diagnosis MS
  * condition MS
* location
  * location only Reference(CRDLocation)
  * status MS
  * period MS
* participant.individual
  * ^comment = "...  While the package for US Core 3.1.1 limits references to only Practitioner, there is a patch that indicates that PractitionerRole is also permitted"
* partOf only Reference(CRDEncounter)



---

// File: input/fsh/profiles/Location.fsh

Profile: CRDLocation
Parent: USCoreLocationProfile|7.0.0
Id: profile-location
Title: "CRD Location"
Description: "This profile specifies constraints on the US Core Location profile to support coverage requirements discovery."
* obeys crd-loc1
* ^experimental = false
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-location|6.1.0"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-location|3.1.1"
* type MS
* type from CMSMappableLocationCodes (extensible)
  * ^condition[+] = crd-loc1
* address 1..
* address only Address
  * type MS
  * type from CRDLocationAddressTypes (required)
    * ^short = "physical | both"
    * ^binding.description = "Address Type for CRD"
* managingOrganization 1..
* managingOrganization only Reference(CRDOrganization)
* partOf only Reference(CRDLocation)
  * ^condition[+] = crd-loc1

Invariant: crd-loc1
Description: "Must either have a type or must have a parent (meaning there must be a type somewhere in the hierarchy)"
Severity: #error
Expression: "type.exists() or partOf.exists()"


---

// File: input/fsh/profiles/MedicationRequest.fsh

Profile: CRDMedicationRequest
Parent: USCoreMedicationRequestProfile|7.0.0
Id: profile-medicationrequest
Title: "CRD Medication Request"
Description: "This profile specifies additional constraints on the US Core MedicationRequest profile to support coverage requirements discovery."
* ^experimental = false
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|6.1.0"
* extension contains CRDCoverageInformation named Coverage-Information 0..* MS
* extension[Coverage-Information] ^short = "Coverage Info"
* identifier MS
* status MS
  * ^example.label = "General"
  * ^example.valueCode = #draft
  * ^comment = "This will be 'draft' when using order-select or an initial order-sign, but may be 'active' or other values for order-sign representing edits to the order or for order-dispatch."
* doNotPerform ..0
* reported[x] only boolean or Reference(CRDPatient or USCorePractitionerProfile or CRDOrganization)
//* reported[x] only boolean or Reference(CRDPatient or USCorePractitionerProfile or CRDOrganization)
* medication[x] from $USCoreMedicationCodes (extensible)
* encounter only Reference(CRDEncounter)
  * ^comment = "potentially relevant for CRD in some situations."
* authoredOn 1..
* requester 1.. MS
//* requester only Reference(USCorePractitionerProfile or HRexPractitionerRole)
* requester only Reference(USCorePractitionerProfile)
* performer MS
* performer only Reference(USCorePractitionerProfile or HRexPractitionerRole)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* reasonCode MS
  * ^comment = "potentially relevant for CRD in some situations."
* reasonReference MS
  * ^comment = "potentially relevant for CRD in some situations."
//* reasonReference only Reference(USCoreConditionProblemsHealthConcernsProfile or USCoreConditionUSCoreConditionEncounterDiagnosisProfile or USCoreLaboratoryResultObservationProfile)
* basedOn only Reference(CRDMedicationRequest or CRDServiceRequest)
  * ^comment = "potentially relevant for CRD in some situations."
* substitution MS
* priorPrescription MS
* priorPrescription only Reference(CRDMedicationRequest)

---

// File: input/fsh/profiles/NutritionOrder.fsh

Profile: CRDNutritionOrder
Parent: $NutritionOrder
Id: profile-nutritionorder
Title: "CRD Nutrition Order"
Description: "This profile specifies extensions and constraints on the NutritionOrder resource to support coverage requirements discovery."
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* extension contains CRDCoverageInformation named Coverage-Information 0..* MS
* extension[Coverage-Information] ^short = "Coverage Info"
* identifier MS
* status MS
  * ^example.label = "General"
  * ^example.valueCode = #draft
  * ^comment = "This will be 'draft' when using order-select or an initial order-sign, but may be 'active' or other values for order-sign representing edits to the order or for order-dispatch."
* patient MS
* patient only Reference(CRDPatient)
* encounter MS
* encounter only Reference(CRDEncounter)
  * ^comment = "potentially relevant for CRD in some situations."
* dateTime MS
* orderer 1.. MS
* orderer only Reference(USCorePractitionerProfile or HRexPractitionerRole)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* allergyIntolerance MS
* foodPreferenceModifier MS
* excludeFoodModifier MS
* oralDiet MS
* supplement MS
* enteralFormula MS

---

// File: input/fsh/profiles/Organization.fsh

Profile: CRDOrganization
Parent: HRexOrganization
Id: profile-organization
Title: "CRD Organization"
Description: "This profile specifies additional constraints on the US Core Organization profile to support coverage requirements discovery."
* ^experimental = false
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|3.1.1"
* identifier MS
  * ^comment = "If the organization has an NPI, it **SHALL** be one of the identifiers."
* partOf only Reference(CRDOrganization)
* partOf MS

---

// File: input/fsh/profiles/Patient.fsh

Profile: CRDPatient
Parent: USCorePatientProfile|7.0.0
Id: profile-patient
Title: "CRD Patient"
Description: "This profile specifies additional constraints on the US Core Patient profile to support coverage requirements discovery."
* ^experimental = false
* . ^definition = "This profile specifies additional constraints on the US Core Patient profile to support coverage requirements discovery."
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0"
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|3.1.1"
* identifier MS
  * ^slicing.discriminator[+].type = #value
  * ^slicing.discriminator[=].path = "type"
  * ^slicing.rules = #open
* identifier contains MRIdentifier 1..1 MS
* identifier[MRIdentifier].type 1.. MS
* identifier[MRIdentifier].type only CodeableConcept
* identifier[MRIdentifier].type = $v2-0203#MR
* address MS
  * state MS
  * country MS

---

// File: input/fsh/profiles/ServiceRequest.fsh

Profile: CRDServiceRequest
Parent: USCoreServiceRequestProfile|7.0.0
Id: profile-servicerequest
Title: "CRD Service Request"
Description: "This profile specifies constraints on the ServiceRequest resource to support coverage requirements discovery."
* ^experimental = false
* ^extension[$compliesWithProfile][+].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-servicerequest|6.1.0"
* extension contains CRDCoverageInformation named Coverage-Information 0..* MS
* extension[Coverage-Information] ^short = "Coverage Info"
* identifier MS
* basedOn only Reference(CRDServiceRequest or CRDMedicationRequest)
* basedOn MS
* status MS
  * ^example.label = "General"
  * ^example.valueCode = #draft
  * ^comment = "This will be 'draft' when using order-select or an initial order-sign, but may be 'active' or other values for order-sign representing edits to the order or for order-dispatch."
* doNotPerform MS
  * ^comment = "...Client systems that do not allow ordering services with 'doNotPerform' of 'true' do not need to add support for this capability.  CRD services SHALL understand this element if populated.  Typically, 'doNotPerform' orders will not result in coverage-related card responses and might not result in any decision support at all.  In some cases, a payer might have documentation or other requirements relating to doNotPerform orders that they wish to communicate."
* code 1.. MS
* code only CodeableConcept
* code from CRDServiceRequestCodes (extensible)
  * ^short = "Codes to identify requested services. (CPT, SNOMED CT or LOINC)"
  * ^binding.description = "Codes describing the type of  Service"
* quantity[x] MS
* subject MS
* subject only Reference(CRDPatient)
* encounter only Reference(CRDEncounter)
  * ^comment = "potentially relevant for CRD in some situations."
* occurrence[x] MS
* authoredOn 1.. MS
* requester 1.. MS
* requester only Reference(USCorePractitionerProfile or HRexPractitionerRole)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* performer only Reference(USCorePractitionerProfile or HRexPractitionerRole)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* performer MS
* locationReference 0..1 MS
* locationReference only Reference(CRDLocation)
* reasonCode MS
* reasonReference MS
  * ^comment = "potentially relevant for CRD in some situations."

---

// File: input/fsh/profiles/TaskDispatch.fsh

Profile: CRDTaskDispatch
Parent: Task
Id: profile-task-dispatch
Title: "CRD Dispatch Task"
Description: "This profile specifies constraints on the Task resource to capture details of dispatching a request to a particular performer."
* obeys crd-tsk-d1
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* status MS
* status = #draft (exactly)
* intent MS
* intent = #order (exactly)
* code = $task-code#fulfill
* focus 1.. MS
* focus only Reference(CRDServiceRequest)
* for 1.. MS
* for only Reference(CRDPatient)
* owner MS
* owner only Reference(USCorePractitionerProfile or HRexPractitionerRole or USCoreOrganizationProfile)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
* location MS
* location only Reference(CRDLocation)
* restriction MS
  * repetitions MS
  * period MS

Invariant: crd-tsk-d1
Description: "Must have at least one of owner and location"
Severity: #error
Expression: "owner.exists() or location.exists()"


---

// File: input/fsh/profiles/TaskQuestionnaire.fsh

Profile: CRDTaskQuestionnaire
Parent: SDCTaskQuestionnaire
Id: profile-taskquestionnaire
Title: "CRD Questionnaire Task"
Description: "This profile specifies constraints on the Task resource to support requests for form (Questionnaire) completion."
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* basedOn MS
  * ^requirements = "Allows linking the Questionnaire to the particular 'request' that triggered its creation."
//* status only code
* status MS
* status = #ready (exactly)
//* intent only code
* intent MS
* intent = #order (exactly)
* for 1.. MS
* for only Reference(CRDPatient)
* encounter MS
* encounter only Reference(CRDEncounter)
  * ^comment = "This should be set to the same encounter as specified in the launch context (if any)."
* authoredOn 1.. MS
* requester 1.. MS
* requester only Reference(CRDOrganization)
  * ^short = "Payer requesting form completion"
* owner 0..1 MS
* owner only Reference(USCorePractitionerProfile)
  * ^comment = "This can be populated within the CRD client to delegate responsibility for filling out the form to someone else."
* reasonCode MS
* reasonCode from CRDTaskReason (extensible)
  * ^requirements = "Captures additional details about why the form is needed.  E.g. \"For prior authorization\" or \"For audit documentation\"."
  * ^binding.description = "CRD Task Reason"
* input contains afterCompletion 1..* MS
* input[afterCompletion] ^definition = "Indicates the action to take after completing the form."
  * type only CodeableConcept
  * type = $temp#after-completion-action
  * type MS
  * valueCodeableConcept MS
  * valueCodeableConcept only CodeableConcept
  * valueCodeableConcept from CRDTaskAfterCompletionCode (extensible)
    * ^binding.description = "CRD After Completion"

---

// File: input/fsh/profiles/VisionPrescription.fsh

Profile: CRDVisionPrescription
Parent: $VisionPrescription
Id: profile-visionprescription
Title: "CRD Vision Prescription"
Description: "This profile defines an initial profile on the VisionPrescription resource to support coverage requirements discovery."
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* extension contains CRDCoverageInformation named Coverage-Information 0..* MS
* extension[Coverage-Information] ^short = "Coverage Info"
* identifier MS
//* status only code
* status MS
  * ^example.label = "General"
  * ^example.valueCode = #draft
  * ^comment = "This will be 'draft' when using order-select or an initial order-sign, but may be 'active' or other values for order-sign representing edits to the order or for order-dispatch."
* created MS
* patient MS
* patient only Reference(CRDPatient)
* encounter only Reference(CRDEncounter)
* encounter MS
  * ^comment = "potentially relevant for CRD in some situations."
* dateWritten MS
* prescriber 1.. MS
* prescriber only Reference(USCorePractitionerProfile or HRexPractitionerRole)
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* lensSpecification MS
  * product MS
  * eye MS
  * sphere MS
  * cylinder MS
  * axis MS
  * prism MS
    * amount MS
    * base MS
  * add MS
  * power MS
  * backCurve MS
  * diameter MS
  * duration MS

---

// File: input/fsh/shared.fsh

RuleSet: parameter(name, use, min, max, type, documentation) 
* name = {name}
* use = {use}
* min = {min}
* max = {max}
* type = {type}
* documentation = {documentation}

RuleSet: parameterComplex(name, use, min, max, documentation) 
* name = {name}
* use = {use}
* min = {min}
* max = {max}
* documentation = {documentation}

RuleSet: map(sourceCode, sourceDisplay, equivalence, targetCode, targetDisplay)
* element[+]
  * code = {sourceCode}
  * display = "{sourceDisplay}"
  * target
    * code = {targetCode}
    * display = "{targetDisplay}"
    * equivalence = {equivalence}

RuleSet: mapeq(sourceCode, sourceDisplay, targetCode, targetDisplay)
* insert map({sourceCode}, [[{sourceDisplay}]], #equivalent, {targetCode}, [[{targetDisplay}]])

RuleSet: mapnarrow(sourceCode, sourceDisplay, targetCode, targetDisplay, comment)
* insert map({sourceCode}, [[{sourceDisplay}]], #narrower, {targetCode}, [[{targetDisplay}]])
* element[=].target.comment = "{comment}"

RuleSet: mapwide(sourceCode, sourceDisplay, targetCode, targetDisplay)
* insert map({sourceCode}, [[{sourceDisplay}]], #wider, {targetCode}, [[{targetDisplay}]])

RuleSet: nomap(sourceCode, sourceDisplay)
* element[+]
  * code = {sourceCode}
  * display = "{sourceDisplay}"
  * target.equivalence = #unmatched

RuleSet: AdditionalBinding(purpose, canonical)
* ^binding.extension[$additional-binding][+].extension[purpose].valueCode = {purpose}
* ^binding.extension[$additional-binding][=].extension[valueSet].valueCanonical = {canonical}

RuleSet: CSresource(resource, profile)
* resource[+]
  * type = {resource}
  * supportedProfile = {profile}

RuleSet: CSresourceCRD(resource, profile)
* insert CSresource({resource}, "http://hl7.org/fhir/us/davinci-crd/StructureDefinition/{profile}")

RuleSet: CSinteraction(conformance, type, doc)
* resource[=].interaction
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
    * valueCode = {conformance}
  * code = {type}
  * documentation = "{doc}"

RuleSet: CSsearch(conformance, name, url, type, doc)
* resource[=].searchParam[0]
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
    * valueCode = {conformance}
  * name = {name}
  * definition = {url}
  * type = {type}
  * documentation = "{doc}"


---

// File: input/fsh/valuesets/CDSHookCardActionType.fsh

ValueSet: CDSHookCardActionType
Id: cardActions
Title: "CDS Hooks Card Suggestion Action Types Value Set"
Description: "Codes allowed for defining the type of action in a CDS Hooks suggestion"
* ^status = #active
* ^experimental = false
* $restful-interaction#create
* $restful-interaction#delete
* $restful-interaction#update

---

// File: input/fsh/valuesets/CDSHookType.fsh

ValueSet: CDSHookType
Id: cdsHookType
Title: "CDS Hook Types Value Set"
Description: "Codes identifying a type of CDS Hook"
* ^status = #active
* ^experimental = false
* include codes from system CRDTempCodes where concept is-a #_HookType

---

// File: input/fsh/valuesets/CMSLocationCodes.fsh

ValueSet: CMSLocationCodes
Id: cmslocationcodes
Title: "CMS Location Codes Value Set"
Description: "Numeric codes defined by CMS to identify types of locations"
* ^status = #active
* ^experimental = false
* include codes from system CRDTempCodes where concept is-a #_cmsLocation

---

// File: input/fsh/valuesets/CMSMappableLocationCodes.fsh

ValueSet: CMSMappableLocationCodes
Id: CMSMappableLocationCodes
Title: "CMS Mappable Location Codes"
Description: "Extends the base HL7-defined value set codes with supplementary codes needed to provide full coverage to the CMS location code set"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* include codes from valueset http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType
* include http://terminology.hl7.org/CodeSystem/data-absent-reason#unknown
* include $temp#2
* include $temp#4
* include $temp#5
* include $temp#6
* include $temp#7
* include $temp#8
* include $temp#9
* include $temp#10
* include $temp#12
* include $temp#13
* include $temp#14
* include $temp#16
* include $temp#17
* include $temp#19
* include $temp#20
* include $temp#22
* include $temp#25
* include $temp#27
* include $temp#34
* include $temp#49
* include $temp#50
* include $temp#52
* include $temp#53
* include $temp#57
* include $temp#58
* include $temp#60
* include $temp#62
* include $temp#65
* include $temp#71
* include $temp#72
* include $temp#99


---

// File: input/fsh/valuesets/CoverageInformationValuesets.fsh

ValueSet: CRDCoveredInfo
Id: coverageInfo
Title: "CRD Coverage Information Covered Value Set"
Description: "Codes defining whether the ordered/requested service is covered under patient's plan"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* CRDTempCodes#not-covered
* CRDTempCodes#covered
* CRDTempCodes#conditional

ValueSet: CRDCoveragePaDetail
Id: coveragePaDetail
Title: "CRD Coverage Information Prior Authorization Value Set"
Description: "Codes defining whether prior auth will be needed for coverage to be provided"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* CRDTempCodes#no-auth
* CRDTempCodes#auth-needed
* CRDTempCodes#satisfied
* CRDTempCodes#performpa
* CRDTempCodes#conditional

ValueSet: CRDAdditionalDoc
Id: AdditionalDocumentation
Title: "CRD Coverage Information Additional Documentation Value Set"
Description: "Codes defining whether additional documentation needs to be captured"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* CRDTempCodes#clinical
* CRDTempCodes#admin
* CRDTempCodes#patient
* CRDTempCodes#conditional

ValueSet: CRDDocReason
Id: DocReason
Title: "CRD Coverage Information Documentation Reason Value Set"
Description: "List of reasons for additional documentation"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
//* include codes from system CRDTempCodes where concept descendent-of #_docReason
* CRDTempCodes#withpa
* CRDTempCodes#withclaim
* CRDTempCodes#withorder
* CRDTempCodes#retain-doc
* $v3-NullFlavor#OTH

ValueSet: CRDInformationNeeded
Id: informationNeeded
Title: "CRD Information Needed Value Set"
Description: "Codes defining whether information about the perfomer, location, and/or performance date is needed to determine coverage information"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* CRDTempCodes#performer
* CRDTempCodes#location
* CRDTempCodes#timeframe
* CRDTempCodes#contract-window
* $v3-NullFlavor#OTH

ValueSet: CRDCoverageAssertionReasons
Id: coverageAssertionReasons
Title: "CRD Coverage Assertion Reasons"
Description: "Reasons for a coverage assertion in the coverage-information extension"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* CRDTempCodes#gold-card
* CRDTempCodes#detail-code

---

// File: input/fsh/valuesets/CRDCardType.fsh

ValueSet: CRDCardType
Id: cardType
Title: "CRD Card Types Value Set"
Description: "List of card types defined by the CRD spec"
* ^status = #active
* ^experimental = false
* include codes from system CRDTempCodes where concept descendent-of #_cardType

---

// File: input/fsh/valuesets/CRDConfigTypes.fsh

ValueSet: CRDConfigTypes
Id: configTypes
Title: "CRD Configuration Code Data Types Value Set"
Description: "Allowed data types for configuration settings in the CDS Hook configuration extension"
* ^status = #active
* ^experimental = false
* $fhir-types#boolean
* $fhir-types#integer

---

// File: input/fsh/valuesets/CRDCoverageClasses.fsh

ValueSet: CRDCoverageClasses
Id: coverageClass
Title: "CRD Coverage Classes Value Set"
Description: "Restriction of coverage classes for CRD purposes"
* ^status = #active
* ^experimental = false
* CoverageClassCodes#group
* CoverageClassCodes#subgroup
* CoverageClassCodes#plan
* CoverageClassCodes#subplan
* CoverageClassCodes#class
* CoverageClassCodes#subclass
* CoverageClassCodes#sequence

---

// File: input/fsh/valuesets/CRDCoverageDetailCodes.fsh

ValueSet: CRDCoverageDetailCodes
Id: coverageDetail
Title: "CRD Coverage Detail Codes Value Set"
Description: "Codes for name-value-pair details on a coverage assertion"
* ^status = #active
* ^experimental = false
* CRDTempCodes#allowed-quantity
* CRDTempCodes#allowed-period
* CRDTempCodes#in-network-copay
* CRDTempCodes#out-network-copay
* CRDTempCodes#auth-out-network-only
* CRDTempCodes#concurrent-review
* CRDTempCodes#appropriate-use-needed
* CRDTempCodes#policy-link
* CRDTempCodes#instructions
* CRDTempCodes#instructions-clinical
* CRDTempCodes#instructions-admin

---

// File: input/fsh/valuesets/CRDdeviceRequests.fsh

ValueSet: CRDDeviceRequests
Id: deviceRequest
Title: "CRD Device Request Codes Value Set"
Description: """Codes for ordering devices.

NOTE: This value set contains many inappropriate codes because the underlying code systems do not provide a straight-forward mechanism to select only device-related codes and, given the evolving nature of the underlying code systems, strict enumeration is not a viable approach to defining the value set."""
* ^status = #active
* ^experimental = false
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved."
* include codes from system $cpt
* include codes from system $HCPCSReleaseCodeSets

---

// File: input/fsh/valuesets/CRDLocationAddressTypes.fsh

ValueSet: CRDLocationAddressTypes
Id: locationAddressType
Title: "CRD Location Address Types Value Set"
Description: "Address codes allowed for CRD locations - those that are physical addresses"
* ^status = #active
* ^experimental = false
* AddressType#both
* AddressType#physical

---

// File: input/fsh/valuesets/CRDReasonCodes.fsh

ValueSet: CRDTaskReason
Id: taskReason
Title: "CRD Task Reason Codes Value Set"
Description: "Reasons for creating tasks in CRD"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* CRDTempCodes#reason-prior-auth

---

// File: input/fsh/valuesets/CRDServiceRequestCodes.fsh

ValueSet: CRDServiceRequestCodes
Id: serviceRequestCodes
Title: "CRD Service Request Codes Value Set"
Description: "Example value set defines a set of CPT, SNOMED CT, HCPCS Level II and LOINC codes mirroring bindings found in the US Core Procedure and Observation Lab profiles"
* ^status = #active
* ^experimental = false
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved. This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* include codes from system $cpt
* include codes from system SNOMED_CT where concept is-a #71388002
* include codes from system $HCPCSReleaseCodeSets
* include codes from system $loinc

---

// File: input/fsh/valuesets/CRDTaskAfterCompletionCode.fsh

ValueSet: CRDTaskAfterCompletionCode
Id: afterCompletionCode
Title: "CRD After Completion Code Value Set"
Description: "Actions to take after completing form"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* CRDTempCodes#prior-auth-include
* CRDTempCodes#initial-claim-include
* CRDTempCodes#all-claims-include

---

// File: input/fsh/valuesets/MetricDataSource.fsh

ValueSet: MetricDataSource
Id: metricDataSource
Title: "CRD Metric Data Source Value Set"
Description: "A list of codes indicating the perspective from which metric data was captured"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* CRDTempCodes#payer-src
* CRDTempCodes#provider-src

---

// File: input/fsh/valuesets/MetricOrderDetail.fsh

ValueSet: MetricOrderDetail
Id: orderDetail
Title: "CRD Order Detail Codes Value Set"
Description: "Detail codes for products and services that are the focus of a CRD call"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* include codes from valueset ServiceType
* include codes from valueset CRDDeviceRequests
* include codes from valueset $USCoreMedicationCodes
* include codes from valueset CRDServiceRequestCodes
* include codes from valueset ExampleVisionPrescriptionProductCodes

---

// File: input/fsh/valuesets/MetricTokenUse.fsh

ValueSet: MetricTokenUse
Id: metricTokenUse
Title: "CRD Metric Token Use"
Description: "A list of codes indicating whether an access token was used as part of CDS Hook processing"
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* CRDTempCodes#used
* CRDTempCodes#not-used
* CRDTempCodes#rejected

---

// File: input/fsh/instances/example-of-Appointment.fsh

Instance: example-of-Appointment1
InstanceOf: CRDAppointmentWithOrder
Title: "Appointment ServiceRequest example"
Description: "Example appointment tied to a SeriveRequest based on CRD profile"
Usage: #example
* id = "example1"
* status = #proposed
* appointmentType = $v2-0276#FOLLOWUP "A follow up visit from a previous appointment"
* reasonReference = Reference(http://example.org/fhir/Condition/example) "Heart problem"
* priority = 5
* description = "Discussion on the results of your recent MRI"
* start = "2013-12-10T09:00:00Z"
* end = "2013-12-10T11:00:00Z"
* created = "2013-10-10"
* comment = "Further expand on the results of the MRI and determine the next actions that may be appropriate."
* basedOn = Reference(ServiceRequest/example)
* participant[+]
  * actor = Reference(Patient/example) "Amy Baxter"
  * required = #required
  * status = #accepted
* participant[+]
  * type = $v3-ParticipationType#ATND
  * actor = Reference(Practitioner/full) "Dr Adam Careful"
  * required = #required
  * status = #accepted
* participant[+]
  * actor = Reference(Location/example) "South Wing, second floor"
  * required = #required
  * status = #accepted
* requestedPeriod
  * start = "2020-11-01"
  * end = "2020-12-15"

Instance: example-of-Appointment2
InstanceOf: CRDAppointmentNoOrder
Title: "Appointment example"
Description: "Example stand-alone appointment populated based on CRD profile"
Usage: #example
* id = "example2"
* status = #proposed
* serviceCategory = $service-category#17 "General Practice"
* serviceType = $service-type#124 "General Practice"
* specialty = $sct#394814009 "General practice (specialty)"
* appointmentType = $v2-0276#FOLLOWUP "A follow up visit from a previous appointment"
* reasonReference = Reference(http://example.org/fhir/Condition/example) "Heart problem"
* priority = 5
* description = "Discussion on the results of your recent MRI"
* start = "2013-12-10T09:00:00Z"
* end = "2013-12-10T11:00:00Z"
* created = "2013-10-10"
* comment = "Further expand on the results of the MRI and determine the next actions that may be appropriate."
* participant[+]
  * actor = Reference(Patient/example) "Amy Baxter"
  * required = #required
  * status = #accepted
* participant[+]
  * type = $v3-ParticipationType#ATND
  * actor = Reference(Practitioner/full) "Dr Adam Careful"
  * required = #required
  * status = #accepted
* participant[+]
  * actor = Reference(Location/example) "South Wing, second floor"
  * required = #required
  * status = #accepted
* requestedPeriod
  * start = "2020-11-01"
  * end = "2020-12-15"

---

// File: input/fsh/instances/example-of-CommunicationRequest.fsh

Instance: example-of-CommunicationRequest
InstanceOf: CRDCommunicationRequest
Title: "CommunicationRequest example"
Description: "Example communication request populated based on CRD profile"
Usage: #example
* id = "example"
* identifier
  * system = "http://www.jurisdiction.com/insurer/123456"
  * value = "ABC123"
* basedOn.display = "EligibilityRequest"
* replaces.display = "prior CommunicationRequest"
* groupIdentifier.value = "12345"
* status = #draft
* category = $communication-category#instruction
* priority = #routine
* medium = $v3-ParticipationMode#WRITTEN "written"
  * text = "written"
* subject = Reference(Patient/example)
* encounter = Reference(Encounter/example)
* payload
  * extension[codeableConcept].valueCodeableConcept = $loinc#65752-8 "Liver Pathology biopsy report"
  * contentString = "Liver pathology biopsy report"
* occurrenceDateTime = "2016-06-10T11:01:10-08:00"
* authoredOn = "2016-06-10T11:01:10-08:00"
* requester = Reference(Practitioner/full)
* recipient = Reference(Organization/example)
* sender = Reference(http://example.org/fhir/someOtherProvider)

---

// File: input/fsh/instances/example-of-Coverage.fsh

Instance: example-of-Coverage
InstanceOf: CRDCoverage
Title: "Coverage example"
Description: "Example identified coverage populated based on CRD profile"
Usage: #example
* id = "example"
* identifier[memberid]
  * system = "http://example.com/fhir/NampingSystem/certificate"
  * value = "12345"
* status = #active
* type = $v3-ActCode#EHCPOL "extended healthcare"
* policyHolder = Reference(http://example.org/FHIR/Organization/CBI35)
* subscriber = Reference(Patient/example)
* beneficiary = Reference(Patient/example)
* dependent = "0"
* relationship = $subscriber-relationship#self
* period
  * start = "2011-05-23"
  * end = "2012-05-23"
* payor = Reference(http://example.org/fhir/Organization/example-payer) "Payer XYZ"
* class
  * type = $coverage-class#group
  * value = "CB135"
  * name = "Corporate Baker's Inc. Local #35"

---

// File: input/fsh/instances/example-of-Device.fsh

Instance: example-of-Device
InstanceOf: CRDDevice
Title: "Device example"
Description: "Example device populated based on CRD profile"
Usage: #example
* id = "example"
* identifier
  * system = "http://goodcare.org/devices/id"
  * value = "345675"

---

// File: input/fsh/instances/example-of-DeviceRequest.fsh

Instance: example-of-DeviceRequest
InstanceOf: CRDDeviceRequest
Title: "DeviceRequest example"
Description: "Example devicerequest populated based on CRD profile"
Usage: #example
* id = "example"
* basedOn = Reference(http://example.org/fhir/ServiceRequest/someReferral)
* status = #draft
* intent = #original-order
* codeReference = Reference(Device/example)
* subject = Reference(Patient/example)
* authoredOn = "2016-06-10T11:01:10-08:00"
* requester = Reference(Practitioner/full)

---

// File: input/fsh/instances/example-of-Encounter.fsh

Instance: Encounter-example
InstanceOf: CRDEncounter
Title: "Encounter example"
Description: "Example encounter populated based on CRD profile"
Usage: #example
* id = "example"
* identifier
  * use = #official
  * system = "http://www.amc.nl/zorgportal/identifiers/visits"
  * value = "v1451"
* status = #in-progress
* class = $v3-ActCode#AMB "ambulatory"
* type = $sct#270427003 "Patient-initiated encounter"
* priority = $sct#310361003 "Non-urgent cardiological admission"
* subject = Reference(Patient/example)
* participant.individual = Reference(Practitioner/full)
* length = 140 'min' "min"
* reasonCode = $sct#34068001 "Heart valve replacement"
* hospitalization
  * preAdmissionIdentifier
    * use = #official
    * system = "http://www.amc.nl/zorgportal/identifiers/pre-admissions"
    * value = "93042"
  * admitSource = $sct#305956004 "Referral by physician"
  * dischargeDisposition = $sct#306689006 "Discharge to home"
* serviceProvider = Reference(Organization/example) "University Medical Center"

---

// File: input/fsh/instances/example-of-Location.fsh

Instance: example-of-Location
InstanceOf: CRDLocation
Title: "Location example"
Description: "Example location populated based on CRD profile"
Usage: #example
* id = "example"
* identifier.value = "B1-S.F2"
* status = #active
* name = "South Wing, second floor"
* alias[0] = "MC, SW, F2"
* alias[+] = "University Medical Center, South Wing, second floor"
* description = "Second floor of the Old South Wing, formerly in use by Psychiatry"
* mode = #instance
* type = $v3-RoleCode#HOSP
* telecom[0]
  * system = #phone
  * value = "2328"
  * use = #work
* telecom[+]
  * system = #fax
  * value = "2329"
  * use = #work
* telecom[+]
  * system = #email
  * value = "second-wing-admissions@sampleorg.com"
* telecom[+]
  * system = #url
  * value = "http://sampleorg.com/southwing"
  * use = #work
* address
  * use = #work
  * line = "Galapagosweg 91, Building A"
  * city = "San Francisco"
  * state = "CA"
  * postalCode = "94107"
  * country = "US"
* physicalType = $location-physical-type#wi "Wing"
* managingOrganization = Reference(Organization/example)
* endpoint = Reference(http://example.org/fhir/Endpoint/example)

---

// File: input/fsh/instances/example-of-MedicationRequest.fsh

Instance: example-of-MedicationRequest
InstanceOf: CRDMedicationRequest
Title: "MedicationRequest example"
Description: "Example medication request populated based on CRD profile"
Usage: #example
* id = "example"
* contained = med0320
* identifier
  * use = #official
  * system = "http://www.bmc.nl/portal/prescriptions"
  * value = "12345689"
* status = #draft
* intent = #order
* medicationReference = Reference(med0320)
* subject = Reference(Patient/example)
* encounter = Reference(Encounter/example)
* authoredOn = "2015-01-15"
* requester = Reference(Practitioner/full)
* reasonCode = $sct#11840006 "Traveler's Diarrhea (disorder)"
* note.text = "Patient told to take with food"
* dosageInstruction[0]
  * sequence = 1
  * text = "Two tablets at once"
  * additionalInstruction = $sct#311504000 "With or after food"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route"
  * method = $sct#421521009 "Swallow - dosing instruction imperative (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 2 http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB "TAB"
* dosageInstruction[+]
  * sequence = 2
  * text = "One tablet daily for 4 days"
  * additionalInstruction = $sct#311504000 "With or after food"
  * timing.repeat
    * frequency = 4
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 1 http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB "TAB"
* insurance = Reference(Coverage/example)
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * numberOfRepeatsAllowed = 1
  * quantity = 6 http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB "TAB"
  * expectedSupplyDuration = 5 'd' "days"
* substitution
  * allowedBoolean = true
  * reason = $v3-ActReason#FP "formulary policy"

---

// File: input/fsh/instances/example-of-NutritionOrder.fsh

Instance: example-of-NutritionOrder
InstanceOf: CRDNutritionOrder
Title: "NutritionOder example"
Description: "Example nutrition order populated based on CRD profile"
Usage: #example
* id = "example"
* identifier
  * system = "http://goodhealthhospital.org/nutrition-requests"
  * value = "123"
* status = #draft
* intent = #order
* patient = Reference(Patient/example)
* encounter = Reference(Encounter/example)
* dateTime = "2014-09-17"
* orderer = Reference(Practitioner/full)
* allergyIntolerance = Reference(http://example.org/fhir/AllergyIntolerance/example) "Cashew Nuts"
* foodPreferenceModifier = $diet#dairy-free
* excludeFoodModifier = $sct#227493005 "Cashew Nut"
* oralDiet
  * type[0] = $sct#15108003 "Restricted fiber diet"
    * text = "Fiber restricted diet"
  * type[+] = $sct#16208003 "Low fat diet"
    * text = "Low fat diet"
  * schedule.repeat
    * boundsPeriod.start = "2015-02-10"
    * frequency = 3
    * period = 1
    * periodUnit = #d
  * nutrient
    * modifier = $sct#256674009 "Fat"
    * amount = 50 'g' "grams"

---

// File: input/fsh/instances/example-of-Organization.fsh

Instance: example-of-Organization
InstanceOf: CRDOrganization
Title: "Organization example"
Description: "Example organization populated based on CRD profile"
Usage: #example
* id = "example"
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "1234567893"
* active = true
* name = "University Medical Center"
* telecom[0]
  * system = #phone
  * value = "+1 555 234 3523"
  * use = #work
* telecom[+]
  * system = #email
  * value = "info@acme.org"
  * use = #work
* address
  * use = #work
  * line = "Galapagosweg 91"
  * city = "San Francisco"
  * state = "CA"
  * postalCode = "94107"
  * country = "US"

---

// File: input/fsh/instances/example-of-Patient.fsh

Instance: example-of-Patient
InstanceOf: CRDPatient
Title: "Patient example"
Description: "Example patient populated based on CRD profile"
Usage: #example
* id = "example"
* extension[race]
  * extension[ombCategory].valueCoding = $raceEthnicity#2106-3 "White"
  * extension[ombCategory].valueCoding = $raceEthnicity#1002-5 "American Indian or Alaska Native"
  * extension[ombCategory].valueCoding = $raceEthnicity#2028-9 "Asian"
  * extension[detailed].valueCoding = $raceEthnicity#1586-7 "Shoshone"
  * extension[detailed].valueCoding = $raceEthnicity#2036-2 "Filipino"
  * extension[text].valueString = "Mixed"
* extension[ethnicity]
  * extension[ombCategory].valueCoding = $raceEthnicity#2135-2 "Hispanic or Latino"
  * extension[detailed].valueCoding = $raceEthnicity#2184-0 "Dominican"
  * extension[detailed].valueCoding = $raceEthnicity#2148-5 "Mexican"
  * extension[text].valueString = "Hispanic or Latino"
* extension[birthsex].valueCode = #F
* identifier[MRIdentifier]
  * use = #usual
  * type.text = "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "1032702"
* active = true
* name[+]
  * family = "Shaw"
  * given[+] = "Amy"
  * given[+] = "V."
  * period
    * start = "2016-12-06"
    * end = "2020-07-22"
* name[+]
  * family = "Baxter"
  * given[+] = "Amy"
  * given[+] = "V."
  * suffix = "PharmD"
  * period.start = "2020-07-22"
* telecom[+]
  * system = #phone
  * value = "555-555-5555"
  * use = #home
* telecom[+]
  * system = #email
  * value = "amy.shaw@example.com"
* gender = #female
* birthDate = "1987-02-20"
* address[+]
  * line = "49 Meadow St"
  * city = "Mounds"
  * state = "OK"
  * postalCode = "74047"
  * country = "US"
  * period
    * start = "2016-12-06"
    * end = "2020-07-22"
* address[+]
  * line = "183 Mountain View St"
  * city = "Mounds"
  * state = "OK"
  * postalCode = "74048"
  * country = "US"
  * period.start = "2020-07-22"

---

// File: input/fsh/instances/example-of-ServiceRequest.fsh

Instance: example-of-ServiceRequest
InstanceOf: CRDServiceRequest
Title: "ServiceRequest example"
Description: "Example service request populated based on CRD profile"
Usage: #example
* id = "example"
* basedOn = Reference(http://example.org/fhir/ServiceRequest/someReferral)
* status = #draft
* intent = #order
* code = $sct#25267002 "Insertion of intracardiac pacemaker (procedure)"
  * text = "Implant Pacemaker"
* subject = Reference(Patient/example)
* authoredOn = "2015-03-30"
* requester = Reference(Practitioner/full) "Dr. Beverly Crusher"
* performer = Reference(http://example.org/fhir/Practitioner/full2) "Dr Cecil Surgeon"
* locationReference = Reference(Location/example)
* reasonCode = $sct#48867003 "Bradycardia"

---

// File: input/fsh/instances/example-of-TaskDispatch.fsh

Instance: task-dispatch-example
InstanceOf: CRDTaskDispatch
Title: "Dispatch Task example"
Description: "Example dispatch Task populated based on CRD profile"
Usage: #example
* status = #draft
* intent = #order
* focus = Reference(ServiceRequest/example)
* for = Reference(Patient/example)
* owner = Reference(http://example.org/fhir/Practitioner/full2) "Dr Cecil Surgeon"
* restriction.period.end = "2015-06-01"


---

