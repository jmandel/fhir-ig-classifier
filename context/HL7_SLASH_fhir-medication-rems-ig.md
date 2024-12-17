File: repos/HL7_SLASH_fhir-medication-rems-ig/sushi-config.yaml

# documentation: https://fshschool.org/docs/sushi/configuration/
# 
id: hl7.fhir.us.medication-rems
canonical: http://hl7.org/fhir/us/medication-rems
name: REMS
title: US Medication Risk Evaluation and Mitigation Strategies (REMS) FHIR IG
description: FHIR implementation options and guidance for medication REMS participants
status: active # draft | active | retired | unknown
version: 1.0.0
fhirVersion: 4.0.1 # https://www.hl7.org/fhir/valueset-FHIR-version.html
copyrightYear: 2023+
releaseLabel: STU1 # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use | STU1 Ballot
license: CC0-1.0 
jurisdiction: urn:iso:std:iso:3166#US "United States of America"
publisher:
  name: HL7 International / Pharmacy
  url: http://www.hl7.org/Special/committees/medication
dependencies:
  hl7.fhir.us.core:
    id: uscore
    version: 3.1.1
    reason: |
      Defines U.S. EHR expectations on a range of resources that will be passed to and/or queried by REMS CDS servers
  hl7.fhir.uv.smart-app-launch:
    id: SmartAppLaunch
    version: 2.2.0
    reason: |
      Defines base expectations and profiles for SMART app launch requirements
#
#
pages:
  index.md:
    title: REMS IG Home Page
  process.md:
    title: REMS Steps and Terminology
  roles.md:
    title: Participant Roles and Needs
  use-cases.md:
    title: Use Cases
  event-triggers.md:
    title: REMS Interaction Events and Triggers
  future-directions.md:
    title: Future Directions
  credits.md:
    title: Credits
  technical-background.md:
    title: Technical Background
  specification.md:
    title: Formal Specification
  cds-cards.md:
    title: CDS Hooks Card Profiles
  downloads.xml:
    title: Downloads

# menu:
#   Home: index.html
#   Background:
#     Use Cases: use-cases.html
#     Technical: technical-background.html
#   Specification: specification.html 
#   Artifacts: artifacts.html
# 
# 
contact:
  - name: Frank McKinney
    telecom:
      - system: email # phone | fax | email | pager | url | sms | other
        value: frank.mckinney@pocp.com
      - system: email # phone | fax | email | pager | url | sms | other
        value: fm@frankmckinney.com
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: phx
auto-oid-root: 2.16.840.1.113883.4.642.40.34

# * modifierExtension
# * experimental
# * useContext
# * copyright
# * packageId
#
#
# ╭──────────────────────────────────────────SUSHI flags───────────────────────────────────────────╮
# │  The flags below configure aspects of how SUSHI processes FSH.                                 │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
#
# FSHOnly: false
#
#
# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#
# applyExtensionMetadataToRoot: true
#
#
# The instanceOptions property is used to configure certain aspects of how SUSHI processes instances.
# See the individual option definitions below for more detail.
#
# instanceOptions:
#   Determines for which types of Instances SUSHI will automatically set meta.profile
#   if InstanceOf references a profile:
#
#   setMetaProfile: always # always | never | inline-only | standalone-only
#
#
#   Determines for which types of Instances SUSHI will automatically set id
#   if InstanceOf references a profile:
#
#   setId: always # always | standalone-only


---

// File: input/pagecontent/CapabilityStatement-provider-system-intro.md

This section describes base system capabilities a Provider System must support to be conformant with the Medication REMS FHIR IG.

Additional behavior and data population expectations are defined in the [Technical Background](technical-background.html), [Formal Specification](specification.html) and [CDS Hooks Card Profiles](cds-cards.html) sections.

### SMART App Capabilities
The Provider System:
- **SHALL** support the [SMART App Launch Implementation Guide](http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch)
- **SHALL** support the [EHR-based app launch](https://hl7.org/fhir/smart-app-launch/app-launch.html#launch-app-ehr-launch) interaction pattern
- **SHALL** support the [standalone app launch](https://hl7.org/fhir/smart-app-launch/app-launch.html#launch-app-standalone-launch) interaction pattern

<p></p>

### CDS Hooks Capabilities

The Provider System:
- **SHALL** support the [CDS Hooks 2.0 Implementation Guide](https://cds-hooks.hl7.org/2.0/)
- **SHALL** support immediate provider actions in response to a CDS Hook suggestion or action
- **SHOULD** support CDS suggestions with associated actions to defer the launch of SMART application

<p></p>

### FHIR RESTful Capabilities

The Provider System:
- **SHOULD** enable a REMS Administrator’s SMART app to create a DocumentReference resource associated to the patient
- **SHALL** support the JSON source format
- **SHOULD** support the XML source format

<p></p>

### Security

- Communication security implemented by the Provider System SHALL conform with the guidelines stated in [FHIR Security](https://www.hl7.org/fhir/security.html) for all exchanges covered in this IG.
- For general security considerations refer to [FHIR Security and Privacy Considerations](https://www.hl7.org/fhir/secpriv-module.html). 

<br />



---

// File: input/pagecontent/cds-cards.md

This page gives guidelines for populating and returning CDS Hooks response Cards in a REMS workflow. 

[Cards](https://cds-hooks.hl7.org/2.0/#cds-service-response) are how REMS Administrator Systems return information and requested actions (e.g., launching a SMART app) to the provider in response to requests triggered during the prescriber's workflow. 

REMS Administrator Systems dynamically create these Cards for each CDS Hooks request based on conditions including:
- the prescribed drug's REMS program
- the status of required REMS steps at the time of the event
- REMS information needs associated with the current point in the patient's treatment. 

This guidance is based on [the CDS Hooks specification](https://cds-hooks.hl7.org/2.0/#card-attributes) as applied to the REMS workflow. In addition, this guide aims to provide direction that is consistent with that given in the Da Vinci Coverage Requirements Discovery (CRD) IG to the extent possible (as described further [here](technical-background.html#consistency-with-the-da-vinci-burden-reduction-igs)).

<p></p>

### General Card Population Guidance
All Card types, including the Suggestion type containing a system Action as described in the [Deferred SMART Application Launch](#deferred-smart-application-launch-suggestion) section  below, are presented to the provider within the workflow of their Provider System. They:
- display information
- offer links that the provider may follow to external information
- give the provider the option to complete a task by launching a SMART app immediately 
- or give the provider the option to place the SMART app step in their work queue to be completed in the future.

In all cases, Cards interrupt the provider's workflow and will be welcomed by the provider only when they are pertinent to the situation, when their benefit outweighs the disruption to the provider's thought process, and when their content can be quickly understood and acted upon.

<p></p>

**General guidelines for a REMS Administrator System returning Cards:**

*  The `Card.indicator` denotes the urgency or importance of what the Card conveys. It **SHOULD** be populated from the perspective of _clinical importance and/or risk_ to the patient, versus importance from an administrative perspective. For example, while a REMS Administrator might perceive a provider not being registered for a REMS Program as very important and urgent from the perspective of being able to prescribe and dispense a REMS drug, it would be, at most, a `warning` to the user according to the conventions for presenting Cards. The indicator value, `critical`, must be reserved for reporting the risk of life or death or other serious clinical outcomes. Most REMS responses **SHOULD** be marked as `info`.

*  The `Card.source.label` **SHOULD** be populated with the name of the REMS program that the user and patient would recognize. In general this would be based on the name of the drug being requested.  

*  Because providers' time is limited, information returned in Cards must be quickly understandable and pertinent to the request context, the current state of the patient's treatment and the status of REMS requirements. Specifically:

    *  `Card.summary` **SHOULD** provide consise but actionable information. "Not Enrolled" would not be very helpful, because it is not complete enough to identify the problem fully and would require a further step by the provider to learn who or what is not registered. "Provider must enroll in the Drug X REMS program" or "Patient must enroll before taking Drug X" would be better.

    *  `Card.detail` **SHOULD** present information in the order of importance to the provider, with the most critical details first and less critical information following.

    *  `Card.detail` **SHOULD** provide sufficient context for the provider to quickly understand the purpose or content of presented links. In addition, the detail should provide a clear sense of how the provider will be expected to use or interact with the link or app after they open it. This will enable the provider to determine whether they need to take action immediately during the workflow versus deferring until later.

    *  The number of Cards should be manageable. Consider whether user workflow will be faster with separate Cards for each link or a single Card having multiple links. Typically, it's best to use the smallest number of Cards that can convey the information and requested actions.

    *  When providing links, keep document size short and/or provide linking directly to the section that is relevant for the context to minimize the time needed for the provider to read the critical information.

    *  While links are permitted in the markdown content of `Card.detail`, support for this is not universal, so links **SHOULD** also be provided in `Card.link`. This also provides a consistent place for users to access all relevant links.

* Provider Systems might not support all Card capabilities; therefore Card options **SHOULD** provide sufficient information for a user to take appropriate actions manually if automated support isn't available.

<p></p>

### Potential REMS CDS Hooks Response Types
Note: While the Card types and content described below are what REMS Administrators will typically return in a REMS workflow, implementers are not limited to these options.

<p></p>

#### External Reference
This response type presents a Card with one or more links to external web pages, PDFs, or other resources that provide relevant information with regards to the REMS program the CDS Hook was executed for. A link might provide information about the program, requirements for safe use,  printable forms, etc. Typically, these references would be links to information available from the REMS Administrator's website or other authoritative sources.  The Card **SHALL** have at least one `Card.link`.  The `Link.type` **SHALL** have a type of "absolute".

When reasonable, an "External Reference" Card **SHOULD** contain a summary of the actionable information from the external reference.

For example, this CDS Hooks [Card](https://cds-hooks.hl7.org/2.0/#cds-service-response) contains five [Links](https://cds-hooks.hl7.org/2.0/#link) - a link to an overview website, a link to a PDF containing a guide for the medication itself, a link to PDF that specifics the REMS program information, a link to a PDF that contains adverse event management and a link to a provider enrollment form.  

{% raw %}
<pre class="json" style="white-space: pre;"><code class="language-json">{
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.uuid">uuid</a>" : "urn:uuid:07bc9814-9d2a-11ee-8c90-0242ac120002",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.summary">summary</a>" : "DRUG-X REMS Program and Requirements",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.detail">detail</a>" : "Learn about the DRUG-X REMS Program and Requirements",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.indicator">indicator</a>" : "info",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source">source</a>" : {
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.label">label</a>" : "DRUG-X REMS Program Administrator",
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.url">url</a>" : "https://example.org/DRUG-X",
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.topic">topic</a>" : {
      "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.system">system</a>" : "http://hl7.org/fhir/us/davinci-crd/CodeSystem/temp",
      "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.code">code</a>" : "guideline",
      "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.display">display</a>" : "Guideline"
    }
  },
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links">links</a>" : [
    {
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.label">label</a>" : "DRUG-X REMS Program Overview" ,
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.url">url</a>" : "https://example.org/DRUG-X/Overview",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.type">type</a>" : "absolute"
    },
    {
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.label">label</a>" : "DRUG-X REMS Medication Guide",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.url">url</a>" : "https://example.org/DRUG-X/MedicationGuide.pdf",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.type">type</a>" : "absolute"
    },
    {
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.label">label</a>" : "DRUG-X REMS Program Requirements",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.url">url</a>" : "https://example.org/DRUG-X/RemsProgramRequirements.pdf",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.type">type</a>" : "absolute"
    },
    {
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.label">label</a>" : "DRUG-X Adverse Reaction Management Guide",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.url">url</a>" : "https://example.org/DRUG-X/AdverseReactionManagment.pdf",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.type">type</a>" : "absolute"
    },
    {
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.label">label</a>" : "Provider Enrollment Form",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.url">url</a>" : "https://example.org/DRUG-X/ProviderEnrollmentForm.pdf",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.type">type</a>" : "absolute"
    }
  ]
}</code></pre>
{% endraw %}

As much as technically possible, links provided **SHOULD** take the user to the specific place in the documentation relevant to the current hook context to minimize provider reading and navigation time.

<p></p>

#### Instructions
This response type presents a Card with textual guidance or instructions to display to the provider. The text might provide information related to updated REMS guidelines, notifying the user of a need to update a self-assessment or even something as simple as "No REMS requirements currently require action". 

Instructions **SHOULD** reflect the current status of the patient's and provider's participation in the REMS program--providing only applicable direction at the time of the request. The instruction text **SHOULD** be concise and simple for the provider to consume, omitting any general guidance that is not relevant to the situation. To accomplish this, the text returned might need to be generated uniquely each time a hook is fired.

Care should be taken not to overuse this return type with information that is not truly relevant. 

This example CDS Hook [Card](https://cds-hooks.hl7.org/2.0/#cds-service-response) just contains a message:

{% raw %}
<pre class="json" style="white-space: pre;"><code class="language-json">{
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.summary">summary</a>" : "Provider Mary Zhang must re-enroll in the DRUG-X REMS program by December 15",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.detail">detail</a>" : "Your enrollment in the DRUG-X REMS program must be renewed annually. The deadline for Mary Zhang MD is December 15",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.indicator">indicator</a>" : "info",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source">source</a>" : {
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.label">label</a>" : "DRUG-X Rems Program",
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.url">url</a>" : "https://example.org/DRUG-X",
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.icon">icon</a>" : "https://example.org/img/icon-100px.png"
  }
}</code></pre>
{% endraw %}

<p></p>

#### Launch SMART application
Unlike External References, SMART apps can be launched within the Provider System workflow and use data from the Provider System to support their features. They allow interaction between the REMS Administrator and Provider System and can be authorized to access patient clinical data to help guide the interactive experience and minimize data entry. Apps can provide a wide variety of functions in the REMS workflow, including patient enrollment, providing education, collecting periodic clinical information required by the REMS, etc. 

Card population for this response type is similar to the [External Reference](#external-reference) response type, except with the `Link.type` set to "smart" instead of "absolute". The `Link.appContext` will typically also be present, providing context information that is useful to the app, which will be included when the EHR launches it.

For example, the Card below contains a SMART App [Link](https://cds-hooks.hl7.org/2.0/#link) to enroll the patient into the REMS program:

{% raw %}
<pre class="json" style="white-space: pre;"><code class="language-json">{
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.uuid">uuid</a>" : "urn:uuid:353cd963-2ecd-46f9-958b-ed7d2bbf6e01",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.summary">summary</a>" : "Launch DRUG-X REMS Patient Enrollment App",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.indicator">indicator</a>" : "info",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source">source</a>" : {
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.label">label</a>" : "DRUG-X REMS Administrator",
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.url">url</a>" : "https://example.org/DRUG-X",
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.icon">icon</a>" : "https://example.org/img/icon-100px.png"
  },
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links">links</a>" : [
    {
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.label">label</a>" : "DRUG-X REMS Patient Enrollment Application",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.url">url</a>" : "https://example.org/DRUG-X/smart-app",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.type">type</a>" : "smart",
      "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.links.appContext">appContext</a>" : "{\"providerSystemPatientId\":\"123\"}"
    }
  ]
}</code></pre>
{% endraw %}

<p></p>

**Note regarding app registration.** To be made available to providers within a Provider System, SMART apps need to first be approved by the provider organization and, typically, also the associated software vendor.  

<p></p>

#### Deferred SMART Application Launch Suggestion
This response type can be used to present a Card that indicates there is a SMART application that can be launched at a future time to satisfy a REMS step.  A recommended use within the REMS workflow is to defer launching of a SMART app for enrolling the provider or patient into the REMS program.

This is accomplished by including a `suggestion` within a CDS Card that includes a `create` action for a Task resource. 

Note that this `suggestion` may reside within the same Card that contains a `link` to launch the app immediately, giving the provider a choice of launching the app now or later.

The Task resource: 
  - is based on either the [Task EHR Launch](https://hl7.org/fhir/smart-app-launch/StructureDefinition-task-ehr-launch.html) or [Task EHR Standalone](https://hl7.org/fhir/smart-app-launch/StructureDefinition-task-standalone-launch.html) profiles from the [SMART App Launch IG](https://hl7.org/fhir/smart-app-launch)
- has a `Task.code` of either  `launch-app-ehr` or `launch-app-standalone` 
- points to the SMART application to launch using a `Task.input` element with a `Task.input.type.coding.code` value of `smartonfhir-application`
- includes an additional `Task.input` element with a `Task.input.type.coding.code` of `smartonfhir-appcontext` which will hold the application context to use to launch the SMART application with. 

This guide defines a [Task profile which further tailors the resource for use in the REMS workflow](StructureDefinition-medication-rems-task-smart-launch.html).
 
The example below shows a CDS Hook [Suggestion](https://cds-hooks.hl7.org/2.0/#suggestion) containing a SMART application launch Task as the Card's [Action](https://cds-hooks.hl7.org/2.0/#action).  

<!-- TODO include Binary-CRDServiceResponse2-form-json-html.xhtml -->
{% raw %}
<pre class="json" style="white-space: pre;"><code class="language-json">{
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.uuid">uuid</a>" : "urn:uuid:353cd963-2ecd-46f9-958b-ed7d2bbf6e01",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.summary">summary</a>" : "Defer DRUG-X patient enrollment until later,
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.indicator">indicator</a>" : "info",
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source">source</a>" : {
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.label">label</a>" : "DRUG-X REMS Administrator",
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.url">url</a>" : "https://example.org/DRUG-X",
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.source.icon">icon</a>" : "https://example.org/img/icon-100px.png"
  },
  "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.suggestions">suggestions</a>" : {
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.suggestions.label">label</a>" : "Put the DRUG-X enrollment app in your work queue to complete later",
    "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.suggestions.actions">actions</a>" : [
      {
        "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.suggestions.actions.type">type</a>" : "create",
        "<a href="https://build.fhir.org/ig/FHIR/fhir-tools-ig//StructureDefinition-CDSHooksResponse.html#CDSHooksResponse.cards.suggestions.actions.description">description</a>" : "Add deferred SMART Launch for DRUG-X to the work queue",
        "<a href="http://hl7.org/fhir/R4/task.html#Task">resource</a>" : {
          "<a href="http://hl7.org/fhir/R4/task.html">resourceType</a>" : "Task",
          "<a href="http://hl7.org/fhir/R4/task.html#Task.status">status</a>" : "requested",
          "<a href="http://hl7.org/fhir/R4/task.html#Task.intent">intent</a>" : "proposal",
          "<a href="http://hl7.org/fhir/R4/task.html#Task.code">code</a>" : {
            "<a href="http://hl7.org/fhir/R4/datatypes.html#CodeableConcept#CodeableConcept.coding">coding</a>" : [
              {
                "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.system">system</a>" : "http://hl7.org/fhir/smart-app-launch/CodeSystem/smart-codes",
                "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.code">code</a>" : "launch-app-ehr",
                 "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.description">display</a>" : "Launch application using the SMART EHR launch"
              }
            ]
          },
          "<a href="http://hl7.org/fhir/R4/task.html#Task.description">description</a>" : "Complete DRUG-X REMS enrollment",
          "<a href="http://hl7.org/fhir/R4/task.html#Task.for">for</a>" : {
            "<a href="http://hl7.org/fhir/R4/references.html#Reference#Reference.reference">reference</a>" : "http://example.org/fhir/Patient/123"
          },
          "<a href="http://hl7.org/fhir/R4/task.html#Task.authoredOn">authoredOn</a>" : "2024-02-13",
          "<a href="http://hl7.org/fhir/R4/task.html#Task.for">requester</a>" : {
            "<a href="http://hl7.org/fhir/R4/references.html#Reference#Reference.reference">reference</a>" : "http://example.org/fhir/Organization/rems-administrator/100",
            "<a href="http://hl7.org/fhir/R4/references.html#Reference#Reference.reference">display</a>" : "DRUG-X REMS Administrator"        
          },
          "<a href="http://hl7.org/fhir/R4/task.html#Task.input">input</a>" : [
            {
              "<a href="http://hl7.org/fhir/R4/task.html#Task.input.type">type</a>" : {
                "<a href="http://hl7.org/fhir/R4/datatypes.html#CodeableConcept#CodeableConcept.coding">coding</a>" : [
                  {
                    "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.system">system</a>" : "http://hl7.org/fhir/smart-app-launch/CodeSystem/smart-codes",
                    "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.code">code</a>" : "smartonfhir-application",
                    "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.description">display</a>" : "SMART on FHIR application URL."
                  }
                ]
              },
              "<a href="http://hl7.org/fhir/R4/task.html#Task.input.value[x]">valueString</a>" : "https://example.org/DRG-X/smart-application"
            },
            {
              "<a href="http://hl7.org/fhir/R4/task.html#Task.input.type">type</a>" : {
                "<a href="http://hl7.org/fhir/R4/datatypes.html#CodeableConcept#CodeableConcept.coding">coding</a>" : [
                  {
                    "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.system">system</a>" : "http://hl7.org/fhir/smart-app-launch/CodeSystem/smart-codes",
                    "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.code">code</a>" : "smartonfhir-appcontext",
                    "<a href="http://hl7.org/fhir/R4/datatypes.html#Coding#Coding.description">display</a>" : "Application context related to this launch."                  
                   }
                 ]
               },
               "<a href="http://hl7.org/fhir/R4/task.html#Task.input.value[x]">valueString</a>" : "{\"providerSystemPatientId\":\"123\"}"
            }
          ]
        }
      }
    ]
  }
}
</code></pre>
{% endraw %}

<p></p>
<p></p>

---

// File: input/pagecontent/credits.md

This Implementation Guide is the result of the efforts of the CodeX REMS Integration Use Case, with the support and active participation of the following participants:
- Bristol Meyers Squibb
- InfoWerks
- MITRE
- Otsuka
- Point-of-Care Partners
- Syneos
- UBC
- US Food and Drug Administration (FDA)

<p></p>

Our thanks to these organizations and to the individuals not explicitly listed who contributed their time, enthusiasm and expertise to this work.

<p></p>
<p></p>


---

// File: input/pagecontent/DocumentReference-example-rems-docref-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">DocumentReference</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">example-rems-docref-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_DocumentReference_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_DocumentReference_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent"><b>REMS information for August Samuels</b><br />On March 9, 2024<br />Patient Name: August Samuels<br />Patient REMS ID: 0354600<br />Patient enrollment status: Enrolled March 9, 2024<br />Prescriber Name: Mary Patel<br />Prescriber REMS ID: 0354035500 (NPI)<br />Medication: Zombify 10mg Tablet<br />Initial dispense authorization number: 30550221</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">current</span></span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://loinc.org</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">51851-4</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Administrative note</span></span></span><br><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">REMS administrative note</span></span></span><br><span style="display:inline-block"><span class="emph1">category</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://loinc.org</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">51851-4</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Administrative note</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Patient/example-patient-123</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">date</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2024-03-09T15:29:46+00:00</span></span></span><br><span style="display:inline-block"><span class="emph1">description</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">REMS Patient Information Note</span></span></span><br><span style="display:inline-block"><span class="emph1">content</span><span style="display:inline-block"><span class="emph2">attachment</span></span></span><span style="display:inline-block"><span class="emph3">contentType</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">text/plain</span></span></span><span style="display:inline-block"><span class="emph3">data</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">UkVNUyBpbmZvcm1hdGlvbiBmb3IgQXVndXN0IFNhbXVlbHMgW3RleHQgdHJ1bmNhdGVkXQ==</span></span></span><span style="display:inline-block"><span class="emph3">title</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">REMS information for August Samuels on March 9, 2024</span></span></span><br><span style="display:inline-block"><span class="emph2">format</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:ihe:iti:xds:2017:mimeTypeSufficient</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">mimeType Sufficient</span></span></span><br><span style="display:inline-block"><span class="emph1">context</span><span style="display:inline-block"><span class="emph2">period</span></span></span><span style="display:inline-block"><span class="emph3">start</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2024-03-09T08:00:00+11:00</span></span></span></div>

<hr>

---

// File: input/pagecontent/event-triggers.md

### Triggering CDS Hooks During Patient Care
CDS Hooks enumerates a small set of system trigger events, referred to as ["hooks"](https://cds-hooks.hl7.org/2.0/) that represent points in a Provider System workflow at which CDS Hooks requests will be made to the external CDS Server (the REMS Administrator in this guide's scenarios). 

This guide does not limit the hooks that may be used in REMS workflows, but those that may be most useful in REMS scenarios include (in order of applicability):
- [`order-sign`](https://cds-hooks.org/hooks/order-sign) which occurs at the point in the ordering process when the prescriber finalizes the prescription
- [`order-select`](https://cds-hooks.org/hooks/order-select) which occurs after the clinician selects the medication at the start of the ordering process
- [`patient-view`](https://cds-hooks.org/hooks/patient-view/) which occurs when the user opens a patient's record; typically called only once at the beginning of a user's interaction with a specific patient's record
- [`encounter-start`](https://cds-hooks.org/hooks/encounter-start) which is invoked when the user is initiating a new encounter. In an inpatient setting, this would be the time of admission. In an outpatient/community environment, this would be the time of patient-check-in for a face-to-face or equivalent for a virtual/telephone encounter

<p> </p>

Note that more than one hook might be utilized during an encounter, each for a particular purpose. For example, during the order flow...
- the `order-select` hook might be used to enable the REMS Administrator to alert the provider early in the ordering process that they are not authorized to prescribe the REMS drug
- the `order-sign` hook might be used to prompt patient enrollment once the prescription details have been finalized.

Additional considerations when selecting which hook events to configure:
- If multiple hooks are configured for the same workflow, they must be used for distinct purposes and should not result in duplicate alerts or requests to the provider
- Hooks should be used in a way that avoids enabling the provider to take actions before they are appropriate, for example, completing patient enrollment if it is not yet sure that an order will be written.

<p></p>

#### Configuring hooks based on workflow and patient information
REMS drug therapies tend to be complex and prescribing them may involve more pre-steps (labs, assessments, etc.) than a typical ambulatory prescription. The right time to initiate REMS interactions might not be limited to the Provider System order flow (where the `order-select` and `order-sign` hooks fire) and may require that the CDS Hooks exchange with the REMS Administrator occur before the prescriber begins an order (potentially utilizing the `encounter-start` or `patient-view` hooks).

After a patient has begun therapy, `appointment-start` or `patient-view` hooks may be useful during follow-up appointments.
 
Additional clinical information may also need to be considered when determining when/whether to send a CDS Hooks request to the Administrator. Additional configuration within the Provider System to limit when a hook executes may be needed; for example, setting up the `patient-view` hook so that a CDS request is transmitted only when the patient has the REMS drug, a certain condition or other particular information in their medical record. This type of configuration is not addressed by the CDS Hooks standard and capabilities may vary by Provider System.

<p></p>

#### Configuring hooks based on the medication
Because each medication is supported by one REMS Administrator among multiple, the Provider System must be configured to call the correct CDS Server based on the medication being considered.

Similar to clinical "filtering" of hooks described in the section above, this type of configuration is not addressed by the CDS Hooks standard and must be addressed according to the capabilities of the Provider System.

Future opportunities to address configuration challenges are discussed in the [Future Directions section](future-directions.html#provider-system-configuration-for-many-drugs-and-rems-programs).
 
<p></p>
<p></p>

---

// File: input/pagecontent/future-directions.md

### Future Directions
This guide reflects initial efforts to establish guidance for using FHIR to automate data exchange and facilitate system interactions between providers and REMS Administrators. The REMS community intends to continue work toward system integration to improve the process for patients, providers and others involved in the treatment of patients with a REMS drugs. 

Support for additional scenarios and stakeholders such as those described below may be covered in future versions of this guide.

<p></p>

### Possible Additional Scenarios
#### Checking a patient's REMS status systematically
A provider, pharmacy or other REMS stakeholder checks the status of REMS requirements associated with a patient's prescription. Information is returned in structured form that the requesting system can use to trigger next steps, etc.
 
<p></p>

#### Patient enrollment using a patient-directed application
A provider prescribes a medication that has a REMS for a patient and fills out the required patient enrollment forms. The patient receives a notification to attest that they have received any required education/documentation required by the REMS as well as the accuracy of the information contained on the forms. 

The patient logs into their provider's patient portal and launches an application to fill out the required information and submits the results back to the REMS Administration system.

<p></p>

#### Validation that a pharmacy enrolled in a REMS program
A provider prescribes a medication that has a REMS for a patient. The provider asks the patient what their preferred pharmacy is.  Before sending the prescription to the pharmacy, the EMR queries the REMS Administration systems to determine if the pharmacy is enrolled in the REMS if required and can dispense the medication.  The REMS Administration system sends back a notification stating if the pharmacy can dispense the medication.  An alert is displayed in the user interface of the EMR if the pharmacy is incapable of dispensing the medication. 

<p></p>

#### Additional support for ongoing patient care
Once the patient has started on the REMS drug, REMS activities may include monitoring programs and additional authorization steps, and many participants may be involved during this period. New scenarios related to ongoing care may be identified and addressed in future versions of this guide, potentially providing additional visibility of pertinent information or improved communication between stakeholders through use of FHIR.

<p></p>

#### Incorporate CDS Hooks or SMART App Launch features that become available in the future
As the CDS Hooks and SMART App Launch standards continue to evolve and respond to implementers' experience, new features such as additional CDS "hook" events or additional SMART App Launch options might become available. Future releases of this guide may utilize new features in those standards to support REMS workflows.

<p></p>

### Greater data and process integration

Further data and process integration between REMS stakeholders may be pursued in future versions of this guide, potentially including: 
- capturing discrete REMS data elements in the Provider System in a way that enables them to be systematically populated into the e-prescription
- establish standard mappings between NCPDP and FHIR prescription information models
- further integrating CDS Hooks / SMART app data exchange with medication prescribing workflows in the Provider System
- leveraging well-supported, existing pharmacy-to-provider exchange patterns such as the NCPDP RxChangeRequest to enable questions and other requests related to REMS.

<p></p>

### Other Challenges to REMS Automation
In addition to supporting additional workflow scenarios, work is needed to address technical challenges that cause setup and maintenance work for stakeholders and may hinder broad implementation of the FHIR approaches described here.

<p></p>

#### Provider System configuration for many drugs and REMS programs
**Easing Health System Configuration.** Future versions of this guide may include approaches for reducing the burden on health systems to configure their Provider Systems to support REMS workflows. Future approaches may support:
- maintaining CDS Hooks configuration to direct requests to different REMS Administrator Systems for different drugs
- maintaining SMART app configuration for many REMS Administrators' apps
- maintaining changes to configuration when:
  - new REMS programs are established
  - REMS programs move from one Administrator to another
  - REMS drug identifiers (used to configure CDS Hooks triggers) change or are added due to new product variations, discontinuation or other reasons

<p></p>

**Intermediary Role.** Future approaches may include support for intermediary roles that can provide a single endpoint for multiple drugs and associated REMS programs--potentially addressing configuration challenges noted above.


<p></p>
<p></p>

---

// File: input/pagecontent/index.md

### Overview
A Risk Evaluation and Mitigation Strategy (REMS) is a drug safety program that the United States Food and Drug Administration (FDA) requires for medications with serious safety concerns. REMS are designed to reinforce medication use behaviors and actions that support the safe use of the medication. While all medications have labeling that informs health care stakeholders about medication risks, only [a small number of medications require REMS programs](https://www.accessdata.fda.gov/scripts/cder/rems/index.cfm).

This implementation guide focuses on provider workflows during the ordering of REMS medications and associated patient encounters. It defines information exchanges to support those events, including interactions between... 
- the provider and the REMS Administrator that manages the associated program
- the provider and the pharmacy to which the prescription is sent for dispensing
- the pharmacist or other involved party and the REMS Administrator, to learn the status of REMS steps associated with a patient prescription and/or additional REMS requirements for which they are responsible (discuss)

The guide describes the use of FHIR features including CDS Hooks and SMART App Launch to exchange REMS-related information between providers and REMS Administrators during patient care, and it provides guidance for including REMS-related information in the resulting prescription sent to the pharmacy in an NCPDP SCRIPT transaction.

The goal of this guide is to establish information exchange conventions that support...
- notifying providers and patients of REMS requirements early in the ordering process
- satisfying REMS information needs using data from the patient's electronic record where possible--minimizing manual data entry
- capturing information about a specific patient's participation in a REMS program--including identifiers or other information assigned by the REMS Administrator--in the Provider System
- reducing prescription fulfillment delays by completing up-front REMS steps before the order is sent to the pharmacy and including relevant REMS information in the prescription
- enabling those involved in fulfilling the prescription to learn of their responsibilities and the status of other REMS requirements.

... with the aim of ensuring safe use in a way that gets the medication to the patient quicker.

<p></p>

### Content and organization
The implementation guide is organized into the following sections:
* [REMS Steps and Terminology](process.html) provides the high-level set of steps and timeframes the IG uses as the context for its guidance. It also describes how REMS steps fit within e-prescribing workflows and provides guidance for integrating related FHIR and NCPDP SCRIPT exchanges
* [Participant Roles and Needs](roles.html) identifies the REMS program participants, the systems they use, and their needs addressed by this implementation guide
* [Use Cases](use-cases.html) introduces the REMS workflows, identifies the participants and scenarios covered by the guide, and describes how the associated systems interact to support the process goals
* [REMS Interaction Events and Triggers](event-triggers.html) provides guidance for initiating interactions between the Provider System (e.g., an EHR) and REMS Administrator System at appropriate points in the patient's care
* [Future Directions](future-directions.html) discusses REMS flows and features that are not covered in this version of the IG, but are the focus of continued efforts
* [Technical Background](technical-background.html) describes the specifications this implementation guide relies on and indicates what developers should read and understand prior to implementing this specification, including US Core profiles used in this IG.. It also provides background and rationale for key aspects of the IG's approach, and describes how approaches used in this guide relate to those employed in the Da Vinci "Burden Reduction" guides
* [Formal Specification](specification.html) provides detailed implementation requirements and conformance expectations related to:
  *  this IG's use of CDS Hooks conventions for triggering exchanges and exchanging information in different scenarios
  *  guidance related to the SMART on FHIR app launch process and associated workflows
  *  REMS-specific and general FHIR requirements related to security and patient privacy
* [CDS Hooks Card Profiles](cds-cards.html) formally defines content for CDS Hooks cards and system actions returned in REMS flows
* [Artifacts](artifacts.html) introduces and provides links to the FHIR resource profiles and other FHIR artifacts defined in this implementation guide
* [Downloads](downloads.html) allows download of this and other specifications as well as other useful files
* [Credits](credits.html) identifies the individuals and organizations involved in developing this implementation guide

<p></p>

### Dependencies 
This implementation guide relies on the following other specifications: 

* [CDS Hooks 2.0](https://cds-hooks.hl7.org/2.0/) - The official standard for trial use publication of CDS Hooks that defines the CDS Hooks protocol and interfaces used by this implementation guide
* [SMART on FHIR 2.1](https://hl7.org/fhir/smart-app-launch/STU2.1) - The specification provides a reliable, secure authorization protocol for SMART apps launched from a clinical system or standalone application to support REMS information capture and data exchange
* [FHIR R4](http://hl7.org/fhir/R4/) - The current official version of FHIR as of the time this implementation guide was published
* [US Core](http://hl7.org/fhir/us/core) - The current published version of US Core profiles based on FHIR R4

<p></p>

### Sponsoring HL7 Workgroup  
[Pharmacy](https://confluence.hl7.org/display/PHAR)

<p></p>

### Co-Sponsors 
[Clinical Decision Support](https://confluence.hl7.org/display/CDS)
[Biomedical Research & Regulation](https://confluence.hl7.org/display/BRR)

<p></p>

### Authors

<table class="grid">
    <tbody>
	  <tr>
		<td colspan="2">HL7 Pharmacy Work Group</td>
  	  </tr>
	  <tr>
		<td>Frank McKinney</td>
		<td><a href="mailto:fm@frankmckinney.com">fm@frankmckinney.com</a></td>
	  </tr>
	  <tr>
		<td>Robert Dingwell</td>
		<td><a href="mailto:bobd@mitre.com">bobd@mitre.com</a></td>
	  </tr>
	</tbody>
  </table>

<p></p>

### Dependencies
{% include dependency-table-short.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
{% include ip-statements.xhtml %}


---

// File: input/pagecontent/process.md

### Process Steps and Timeframes
REMS program requirements vary widely for different medications. Some programs focus on making providers and patients aware of potential risks, while others require additional steps, authorizations, reporting, or other actions at the start of treatment or during ongoing therapy.

This IG uses the following generalized set of timeframes and steps to provide context to its guidance. The aim is to provide enough detail to give direction and make necessary distinctions--but generalize enough so that references to a step or timeframe can cover the range of specific actions that participants might take for different REMS programs.

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure: Generalized REMS Process Flow</strong></figcaption>
  <br />
  <p>
  <img src="flow.png" style="float:none">  
  </p>
</figure>
</div>
<p></p>

<p></p>
Additional details and possible variations for each step in the process flow are shown below.
<p></p>

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure: REMS Process Activities</strong></figcaption>
  <br />
  <p>
  <img src="steps.png" style="float:none">  
  </p>
</figure>
</div>
<p></p>


### Process Focus Areas

**Reusable Patterns.** This guide establishes information sharing patterns that can be applied at multiple points in the REMS process outlined above. These patterns enable a REMS participant to implement a standard "interface" that can be called multiple times during a patient's therapy--using the same basic methods but with varying inputs and response content depending on the situation.
- see [Technical Background](technical-background.html) for more about the guide's architectural approach.

**Prescriber Focus.** The primary focus of this implementation guide is improving information exchange and minimizing manual steps for the prescriber. The exchange patterns defined in the guide can be used at the start of therapy and at later encounters during the patient's treatment. 
 
**Potential to Support Other Participants' Needs**. It is possible that the patterns described in this guide might be adaptable to interactions between REMS Administrators and other parties involved in fulfilling a REMS prescription, such as pharmacists or distributors. While the guidance contained here was not tested for use by participants other than prescriber systems and REMS Administrators, other REMS stakeholders are free to adapt it to their needs where possible.


<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure: Implementation Guide Focus Areas</strong></figcaption>
  <p>
  <img src="focus-areas.png" style="float:none">  
  </p>
</figure>
</div>
<p></p>



### Terms Used in This Guide
Below are terms and wording conventions used throughout this implementation guide.

- "REMS" and "REMS program" are used interchangeably to refer to a Risk Evaluation and Mitigation Strategy (REMS) -- a drug safety program that the United States Food and Drug Administration (FDA) requires for medications with serious safety concerns.
- The terms “medication” and “drug” refer to prescription drugs and prescription biologics.
- The guide uses “prescriber” throughout to represent the health care provider that orders the REMS drug , their staff, or another authorized party acting on their behalf to perform REMS-related activities.
- The guide uses “pharmacist” throughout to represent the dispensing pharmacist, other authorized pharmacy staff, the associated certified pharmacy or health care facility or operating organization.

<p></p>

### REMS Within the E-Prescribing Process
Nearly all drug prescriptions in the United States are transmitted electronically to pharmacies. Those data exchanges and related medication management interactions are conducted using a set of federally-named standards and other conventions that enable consistent, nationwide exchange. This guide does not redefine the means for transmitting a drug request from the provider to a pharmacy and prescriber systems are expected to continue using named standards such as NCPDP SCRIPT for transmission of electronic REMS prescriptions.

<p></p>

#### Conveying REMS information in the electronic prescription

By populating REMS-related data elements in the electronic prescription, the prescriber's system can improve the receiving pharmacist's workflow and reduce dispensing obstacles. The REMS-related elements below are supported in the currently-adopted NCPDP SCRIPT NewRx prescription specification (v2017071).

Provider Systems are encouraged to transmit these REMS data elements when possible, though this guide does not require it--as that may not be supported by current prescribing system processes.

<p></p>

<table class="grid">
<thead>
<tr>
<th style="min-width:300px">REMS Information</th>
<th style="min-width:400px">NCPDP SCRIPT NewRx Element</th>
</tr>
</thead>
<tbody>
<tr>
<td>Patient ID</td>
<td>REMSPatientID</td>
</tr>
<tr>
<td>Prescriber ID</td>
<td>REMSHealthcareProviderEnrollmentID</td>
</tr>
<tr>
<td>Facility ID</td>
<td>REMSHealthcareSettingEnrollmentID</td>
</tr>
<tr>
<td>Dispense authorization</td>
<td>REMSAuthorizationNumber</td>
</tr>
<tr>
<td>Patient Risk Category</td>
<td>REMSPatientRiskCategory</td>
</tr>
<tr>
<td>Indication that prescriber REMS requirements are met</td>
<td>PrescriberCheckedREMS <br />(value: "A" - Prescriber has checked REMS and the provider&rsquo;s actions have been completed)</td>
</tr>
</tbody>
</table>
<!-- DivTable.com -->

<p></p>

#### Transmitting the prescription after the prescriber's REMS steps are satisfied

If a prescription for a REMS drug is transmitted before the required REMS steps have been met, the receiving pharmacy will not be allowed to dispense it until steps are taken to satisfy the unmet requirements. Resolving the situation typically involves manual activities such as phone calls or faxes between the pharmacy and clinic, and frustration for the patient as they wait to pick up their medication.

In order to prevent delays for the patient and additional work for the pharmacist, the prescriber system should not transmit the prescription to the pharmacy until all prescribing-time REMS requirements have been met. 

While holding a REMS prescription in this way benefits the downstream fulfillment process, this guide recognizes that current prescribing workflows may not support this behavior and does not strictly require it.

<p></p>
<p></p>


---

// File: input/pagecontent/roles.md

### REMS Participant Roles
Risk Evaluation and Mitigation Strategies (REMS) require providers, patients and others to perform certain actions to ensure the safe use of certain high-risk medications. Each REMS has a REMS administrator that ensures these required actions are being taken. 

#### Human Roles
Below is an outline of those who play a role in the parts of the REMS process currently covered by this guide:
- The **REMS Administrator** is an organization that establishes a REMS program for safe use of a particular drug, and then ensures that patients, prescribers, pharmacists, and others involved in the medication use process follow REMS requirements. The REMS Administrator may be the manufacturer or a third-party vendor working on behalf of the manufacturer, and may perform a variety of functions such the following: 
  - build and operate a centralized database or repository for patient enrollment, prescriber and pharmacy certifications, and wholesaler enrollments 
  - host a website or web portal that participants, such as patients, prescribers, pharmacies, and wholesalers, use to enroll and certify in the program
  - provide the technological means for pharmacies and other dispensers to perform the necessary verifications at the point of dispensing 
  - perform critical functions in the daily operations of a REMS which directly impact patient access to the drug (e.g., REMS contact center)
  - implement training and certification of health care providers to prescribe or dispense the medication
  - ensure that educational material and patient agreements that providers provide and use to counsel patients are available
  - enroll the patient into the REMS, with their agreement to follow safe use conditions
  - obtain patient status information and other clinical information demonstrating that participants are meeting REMS requirements
  - report REMS participation and outcomes to the FDA.

- The **prescriber** (including another provider or staff that acts as the prescriber's agent) may perform a variety of functions at the start of therapy or at later points in the patient's treatment, such the following: 
  - receive information about the REMS drug risks and the REMS requirements from the manufacturer or REMS administrator
  - complete training and other certification steps with the REMS Administrator to be authorized to prescribe the REMS drug
  - counsel patients and facilitate enrollment of the patient into the REMS prior to the start of therapy (such as staff completing a patient enrollment form)
  - provide information to the REMS Administrator on the patient status and other clinical information 
  - perform specified clinical assessments at the start of therapy or at later points in the patient’s treatment.
  
  _Note: The guide uses “prescriber�? throughout to represent the health care provider that orders the REMS drug , their staff, or another authorized party acting on their behalf to perform REMS-related activities._
  
- The **patient's** participation in the REMS program may include:  
  - receiving information or counseling about the risks associated with the REMS drug, actions they need to take to use the REMS drug safely (e.g., obtain lab tests),  symptoms to watch for and report to their provider and actions they need to take to mitigate those risks (e.g., decrease dose or stop medication)
  - acknowledging their understanding that their prescriber will enroll them into the REMS prior to the start of therapy
  - providing certain information to their prescriber or the REMS administrator during their treatment.

- The **pharmacist** or another dispensing provider in a certified pharmacy or certified health care setting may perform a variety of functions, such the following:
  - receive information about the REMS drug risks and the REMS requirements from the manufacturer or REMS administrator
  - determine any REMS-related actions that must be taken prior to dispensing it to the patient. This may include verifying the steps that the prescriber or other “upstream�? participant has yet to complete (e.g., confirming that patient enrollment and prescribing steps were completed)
  - complete training and other certification steps with the REMS Administrator to be authorized to dispense the REMS (as an individual pharmacist or on behalf of the pharmacy organization) 
  - provide education to the patient or perform other steps required by the applicable REMS 
  - send the REMS Administrator patient prescription or clinical information or assessments at the time of dispensing.
  
  _Note: The guide uses “pharmacist�? throughout to represent the dispensing pharmacist, other authorized pharmacy staff, the associated certified pharmacy or health care facility or operating organization._
  
- **Other fulfilling parties** such as a drug distributor or wholesaler may also have responsibilities related to their role in getting a REMS drug to the patient. For example: 
  - a drug distributor may need to ensure that pharmacies and healthcare settings are certified prior to shipping the REMS drug. 
  - the patient’s insurance company will confirm that REMS steps have been completed before paying for the treatment.

  _Note: While the workflows and needs of these parties have not been considered and addressed fully in this implementation guide, their roles may benefit from some of its features, such as the method for checking the status of REMS drug prescriptions that they are helping fulfill._

<p></p>

#### System Roles
- The **REMS Administrator System** may: 
  - transmit program guidance and requirements to Provider Systems
  - obtain patient and provider statements and other patient information from a Provider System (e.g., the prescriber's EHR) and using SMART on FHIR apps
  - interact with REMS participants in ways not currently covered by this guide, including through portals used by REMS participants to access information or enroll in a REMS
- The prescriber's **Provider System,** e.g., an EHR (electronic health record) may:
  - systematically notify the REMS Administrator and supply REMS-related information... 
    - when determining whether to start the patient on the REMS drug
    - at the start of therapy--during ordering
    - during ongoing therapy. Depending on the program, this can include information at the time of re-ordering the drug or periodically providing treatment information to the REMS Administrator
  - enables a standalone, provider-facing REMS Administrator application to access a patient's information with the provider's authorization
  - _[to be discussed]_ enables a non-provider support staff-focused REMS Administrator application to access patient information through predefined system-level authorization in order to assist the patient during enrollment or later in their care journey
  - may periodically check for status of the REMS requirements including those to be performed by the pharmacist or other fulfilling parties.
- The pharmacy information management system (PIMS) other fulfilling party's **fulfiller's system**:
  - may systematically notify the REMS Administrator to check for status of the patient's REMS requirements or supply REMS-related information during fulfillment upon...
    - receiving a REMS drug prescription for an initial dispense or refill
    - receiving a request for some other fulfillment-related action.

<p></p>

#### Intermediary Role
A data exchange intermediary may participate in the process on behalf of one or more REMS Administrators...
  - acting as a CDS Server fielding CDS requests related to one or more REMS drugs
  - hosting SMART apps supporting one or more REMS drugs.

An intermediary that provides a single connecting point for multiple REMS drugs will simplify setup work for the Provider System--reducing the number of different CDS Hooks endpoints and SMART apps that need to be configured to support that set of REMS drugs.

This guide does not provide direction for implementing an intermediary role serving these REMS interactions. A future version may add guidance in this area.

<p></p>

### REMS Participant Needs
This guide supports a set of scenarios involving interaction between prescribers, patients, pharmacists, and REMS Administrators. The list below outlines participants' needs, and the [Use Cases section](use-cases.html) further details the related process scenarios.

* **REMS Administrators** need to: 
  * Supply program certification, education and enrollment materials to prescribers and patients
  * Obtain information and statements from the prescriber and patient during patient enrollment--prior to starting use of the drug
  * Obtain treatment information and assessments from the prescriber _[and patient (discuss)]_ while the patient is taking the drug
  * _Alert prescribers about patient treatment, risks or missed REMS requirements while the patient is taking the drug (* discuss *)_  

* **Prescribers** need to:
  * Enroll to prescribe a drug covered by a REMS
  * Facilitate enrollment of a patient in a REMS program so that they can be given the drug
  * Attest that patient REMS education or other requirements have been completed _[discuss...]_
  * Provide periodic patient updates to the REMS Administrator 
  * Periodically check the status of a patient's REMS requirements including those performed by other parties

* For certain drugs, **Prescribers and REMS Administrators** need to coordinate steps leading to the patient receiving the drug according to the provisions of the REMS. This may include:
  * the REMS Administrator sharing information about pharmacies that are enrolled in the REMS program and able to dispense the drug
  * scheduling drug fulfillment and administration activities
  * _[To be discussed further]_

* **Patients** need to: 
  * Provide or confirm enrollment information
  * Receive relevant documentation or information
  * _Provide updates on their experience taking the drug (including reactions or adverse events) or changes to conditions that affect their eligibility to take the drug (such as pregnancy status) [discuss]_ 

* **Pharmacists and other fulfilling parties** need to:
  * Enroll to participate in a REMS program
  * Attest that patient REMS education or other requirements have been completed _[discuss...]_
  * Periodically check the status of a patient's REMS program requirements including those performed by other parties

This implementation guide defines FHIR-based approaches that participants in the REMS based workflows described above can use to interact with each other to streamline REMS process.  

<p></p>

#### Prescriber focus versus other roles and systems

This initial release of the guide primarily serves the responsibilities of the prescriber of a REMS drug, or another provider acting as an agent of the prescriber. Because of that, the Provider System in the guide's workflows will typically be an EHR, and interactions will most frequently occur in patient encounters when the prescriber is determining whether to treat the patient with the REMS drug, ordering a prescription, or later monitoring the patient's treatment. 

Many EHRs support a subset of CDS Hooks and SMART launch features today, which supports this guide's aim to adopt FHIR features that stakeholders can begin using immediately.

While the prescriber may participate directly in the system flows described in this guide, others may be authorized to perform aspects of the prescriber role on their behalf. A prescriber's agent typically will use the same Provider System as the prescriber, though potentially might interact in the guide's workflows using a different system.

While the IG's initial focus is on the prescriber role, its contributors believe that its guidance may be adaptable to the needs of other REMS stakeholders involved in fulfilling or administering the REMS prescription or otherwise supporting the patient's treatment.

Nothing stated in this guide is intended to preclude other REMS stakeholders from implementing its guidance, and the term, Provider System, used throughout the guide is not limited to representing a prescriber's EHR.

<p></p>


---

// File: input/pagecontent/specification.md

### Pre-reading
Before reading this formal specification, implementers are encouraged to first familiarize themselves with other key portions of this implementation guide:

* The [Participant Roles and Needs](roles.html) section overviews the real world people and organizations who participate in REMS programs and defines the system roles referenced in the specification below.

* The [REMS Steps and Terminology](process.html) and [Use Cases](use-cases.html) sections describe the process context and goals behind the interactions defined below

* The [Technical Background](technical-background.html) page identifies related specifications that this guide depends on. 


### Conformance Conventions
This implementation guide uses the following terms to set expectations for implementers to conform to specific behaviors and information content it defines:

* **SHALL** indicates requirements that must be met to be conformant with the specification.

* **SHOULD** indicates behaviors that are strongly recommended (and which could result in interoperability issues or sub-optimal behavior if not adhered to), but which are not strictly required for an implementation to be considered conformant to this version of the guide.

* **MAY** describes optional behaviors that implementers are free to consider but where there is no recommendation for or against adoption.

<p></p>

### Provider System and REMS Administrator System Interactions

This implementation guide establishes two basic interaction patterns between a Provider System and REMS Administrator System that can be applied at multiple points in treating a patient with a REMS drug:
- **Preferred approach:** Interaction initiated by the Provider System during the provider's workflow
- **Additional / transitional approach**: Provider uses an external REMS Administrator application that accesses patient data in the Provider System using standalone SMART app launch. This provides a transitional bridge for REMS provider portals that exist today, and for circumstances where interaction with the REMS Administrator may more naturally occur within its external system.

#### Interaction initiated by the Provider System during the provider's workflow
This interaction is initiated by the Provider System during the provider's workflow, using CDS Hooks and, optionally, EHR-based SMART App Launch. 

- Provider Systems **SHALL** support this interaction approach because it offers the greatest opportunity to raise and address REMS requirements when related care activities occur. 
- REMS Administrators **SHOULD** implement this interaction approach.

<p></p>

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure: REMS Within the Provider System Workflow</strong></figcaption>
  <p>
  <img src="ehr-launch-sequence.png" style="float:none">  
  </p>
</figure>
</div>
<p></p>

<p></p>

#### Interaction between an external REMS Administrator application and the Provider System
In this interaction, a provider uses an external REMS Administrator application that accesses patient data in a Provider System using standalone SMART app launch. 

- Provider Systems **SHALL** support this interaction approach to provide a transitional bridge from REMS Administrator portals that exist today or for circumstances where interaction with the REMS Administrator may more naturally occur within its external system. 
- REMS Administrators **MAY** support this interaction approach.

<p></p>

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure: REMS Interactions with a Standalone SMART App - Examples</strong></figcaption>
  <p>
  <img src="standalone-launch-sequence.png" style="float:none">  
  </p>
</figure>
</div>
<p></p>

<p></p>

#### CDS Hooks and SMART App Launch patterns may be applied at multiple points in a patient's care

The guide does not strictly require that either of these patterns be implemented at particular workflow events. Implementers are free to choose when and how they apply these interactions. However, implementers **SHOULD** support these interactions whenever possible to:

- notify the provider that a REMS program exists for a drug being considered or ordered
- alert the provider of unmet REMS requirements 
- provide information to educate the provider or patient, or assist with their REMS responsibilities 
- enroll the patient into the REMS program at the earliest opportunity
- make the provider aware of REMS requirements or information needs during the course of treatment
- supply the REMS Administrator with needed patient, provider or treatment information electronically from the Provider System--without human intervention--where possible, to reduce the burden on participants and prevent care delays
- and save REMS Administrator-supplied information about the patient's participation in the REMS program to the patient's record in the Provider System.

In particular, this guide strongly recommends leveraging the CDS Hooks and SMART app launch workflow at the start of the patient's therapy to raise patient enrollment requirements and enable them to be completed quickly, minimizing manual data entry and preventing a possible delay in treatment. 

<p></p>

#### Support for immediate provider actions in response to a REMS Interaction

Many EHRs support a subset of CDS Hooks and SMART launch features today to bring alerts and information into the prescriber's workflow at appropriate times--to be acted upon immediately. 

The guide makes use of these features to notify the prescriber of pertinent REMS information, for example that there's a REMS program for a drug being considered or that the prescriber's REMS enrollment has lapsed. The provider's response in these situations may be to simply acknowledge the information before continuing with their workflow.

A provider may also take the opportunity to complete a REMS requirement returned in a CDS Hooks response immediately through use of a SMART app. Use of the guide's patterns can minimize the time needed from the provider in such a circumstance--to complete a patient enrollment form, for example--by the REMS Administrator prefilling or hiding questions that were satisfied by data provided in the preceding CDS Hooks interaction. 

Provider Systems **SHALL** support immediate provider responses to Cards returned .

<p></p>

#### Support for deferred SMART app launch

In other cases, a provider action may not be able to be completed immediately upon receiving it in a CDS Hooks response, and instead may need to be deferred until a later time. The guide leverages an approach where the REMS Administrator's CDS Hooks response includes a `suggestion` Card containing a Task resource enabling the provider to launch the indicated SMART app later, as described in the [CDS Hooks Card Profiles section](cds-cards.html#deferred-smart-application-launch-suggestion).

Provider Systems **SHOULD** support `suggestion` cards with associated `actions` to defer the launch of SMART application, and **SHOULD** provide the REMS Administrator's CDS server sufficient OAuth scopes to enable the app to create a Task to enable the deferred launch, as [described here](cds-cards.html#deferred-smart-application-launch-suggestion).

<p></p>

#### Enabling the Provider System user to manually launch the SMART app

In some situations, it may be helpful for the prescriber or other provider assisting in the care of a REMS patient to manually launch the associated REMS Administrator SMART app, independent of a CDS Hooks interaction. 

Provider Systems and REMS Administrators **MAY** support manual launch of the REMS Administrator SMART application.

When a Provider System provides this support, it **SHALL** provide patient context during launch.

<p></p>

#### Support for saving REMS information to the patient's record

The REMS Administrator SMART app **MAY** save information about the patient's REMS participation to the Provider System's patient record. Saving of REMS information is typically most effective during the provider’s interaction with a SMART app because it can be timed to occur after activities that might change the patient's status or information--for example by completing patient enrollment. 

To enable this to occur, the Provider System **SHOULD** authorize a REMS Administrator's SMART app with sufficient OAuth scopes to enable the app to create a DocumentReference resource associated to the patient. [This guidance in the SMART App Launch IG](https://hl7.org/fhir/smart-app-launch/scopes-and-launch-context.html) provides details for assigning scopes during app launch.

If using this capability, the REMS Administrators **SHOULD** follow [US Core DocumentReference guidance](https://hl7.org/fhir/us/core/StructureDefinition-us-core-documentreference.html) when creating this resource. 

In addition to the US Core requirements, this guide recommends populating DocumentReference.type with the LOINC value `51851-4` (Administrative note).

See an [example DocumentReference](DocumentReference-example-rems-docref-1.html) that illustrates this guidance.

<p></p>

### Data Exchange During CDS Hooks Interactions
<p></p>

The REMS Administrator will typically need information about the patient, provider and drug to support a REMS interaction, regardless of the REMS program or point in the patient's care.

But individual programs may require sharing additional patient clinicals or other info with the REMS Administrator as part of the Hooks interaction so that it can determine how best to respond.

<p></p>

#### Prefetch

Supplying a consistent set of FHIR resources in the CDS Hooks request is needed to provide sufficient context to enable the REMS Administrator to respond--regardless of the medication or situation.

The Provider System **SHOULD** support include the following FHIR resources as prefetch data within CDS Hooks requests submitted to a REMS Administrator's CDS service. The REMS Administrator’s CDS service **SHALL** query the Provider System to retrieve the resources below if not provided in the CDS request.
  - **Practitioner**, to identify the provider participating in the triggering event
  - **Patient**, to identify the patient being treated
  - **MedicationRequest** for the REMS drug (which may be draft or completed, depending on when the CDS request is triggered) and other patient medications
  - **Medication** if referenced by the MedicationRequest

For example: 

{% raw %}
<pre class="json" style="white-space: pre;"><code class="language-json">{
  ...
    "prefetch" : {
      "patient": "Patient/{{context.patientId}}",
      "practitioner": "{{context.userId}}",
      "medicationRequests": "MedicationRequest?subject={{context.patientId}}&_include=MedicationRequest:medication"  
    }
}</code></pre>
{% endraw %}

<p></p>

### Query During CDS Hooks
- In addition, the Provider System is expected to provide sufficient authorization during the CDS Hooks exchange to enable the REMS Administrator to retrieve related patient information including...
  - lab results
  - vital signs
  - conditions
  - concurrent and past medications
  - procedures
  - etc. 

Provider Systems **SHALL** enable the REMS Administrator to query for additional patient clinical or other information during the CDS exchange, for example to retrieve lab results or other diagnostics specific to a REMS drug program

<p></p>
  
### Security and Privacy

#### FHIR Privacy and Security Guidance
Implementers are expected to...
- follow core [FHIR security principles](https://www.hl7.org/fhir/security.html).
 
- protect patient privacy as described in [FHIR Security and Privacy Considerations](https://www.hl7.org/fhir/secpriv-module.html).

<p></p>
  
### REMS Workflow-Related Privacy and Security

Provider Systems and REMS Administrators **SHALL** follow guidance defined in...
- the CDS Hooks [Security and Safety](https://cds-hooks.hl7.org/2.0/#security-and-safety) section
- [SMART App Launch  Implementation Guide](https://hl7.org/fhir/smart-app-launch).
 
<p></p>
<p></p>




---

// File: input/pagecontent/StructureDefinition-medication-rems-task-smart-launch-intro.md

**Important elements in this profile:**

- **Task.code**
  - The value, `launch-app-ehr` defines this task as one that places the specified SMART app in the provider's work queue
- **Task.for**
  - Patient reference that SHOULD be populated if the requested use of the SMART app is related to a particular patient
- **Task.requester**
  - The organization requesting that this task be performed SHOULD be provided
- **Task.owner**
  - A reference to the provider in whose work queue to add the SMART app launch task SHOULD be populated
- **Task.reasonReference**
  - The medication request for the REMS drug that this task relates to SHOULD be populated if this task is related to a specific prescription
- **Input.type = `smartonfhir-application`**
  - Indicates that this input holds the URL of the SMART app to be launched
- **Input.type = `smartonfhir-appcontext`**
  - Indicates that this input holds app context information to be used by the SMART application. This content will be included as `appContext` in the token response as is specified [here in the CDS Hooks specification](https://cds-hooks.org/specification/current/#link)

<p></p>



---

// File: input/pagecontent/Task-medication-rems-task-smart-launch-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Task</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">medication-rems-task-smart-launch-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/medication-rems/StructureDefinition/medication-rems-task-smart-launch</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Task_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Task_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent"><p><b>Generated Narrative: Task</b><a name="medication-rems-task-smart-launch-1"></a></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource Task "medication-rems-task-smart-launch-1" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-medication-rems-task-smart-launch.html">Medication REMS Task - SMART Launch</a></p></div><p><b>status</b>: requested</p><p><b>intent</b>: proposal</p><p><b>code</b>: Launch application using the SMART EHR launch <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://hl7.org/fhir/smart-app-launch/STU2.2/CodeSystem-smart-codes.html">SMART on FHIR terminology.</a>#launch-app-ehr)</span></p><p><b>description</b>: Complete DRUG-X REMS Registration</p><p><b>for</b>: <a href="Patient-example-patient-123.html">Patient/example-patient-123</a> " SAMUELS"</p><p><b>authoredOn</b>: 2024-02-13</p><blockquote><p><b>input</b></p><p><b>type</b>: SMART on FHIR application URL. <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://hl7.org/fhir/smart-app-launch/STU2.2/CodeSystem-smart-codes.html">SMART on FHIR terminology.</a>#smartonfhir-application)</span></p><p><b>value</b>: <a href="https://example.org/DRUG-X/smart-application">https://example.org/DRUG-X/smart-application</a></p></blockquote><blockquote><p><b>input</b></p><p><b>type</b>: Application context related to this launch. <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://hl7.org/fhir/smart-app-launch/STU2.2/CodeSystem-smart-codes.html">SMART on FHIR terminology.</a>#smartonfhir-appcontext)</span></p><p><b>value</b>: {"providerSystemPatientId":"123"}</p></blockquote></span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">requested</span></span></span><br><span style="display:inline-block"><span class="emph1">intent</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">proposal</span></span></span><br><span style="display:inline-block"><span class="emph1">code</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/smart-app-launch/CodeSystem/smart-codes</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">launch-app-ehr</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Launch application using the SMART EHR launch</span></span></span><br><span style="display:inline-block"><span class="emph1">description</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Complete DRUG-X REMS Registration</span></span></span><br><span style="display:inline-block"><span class="emph1">for</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Patient/example-patient-123</span></span><br><span style="display:inline-block"><span class="emph1">authoredOn</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2024-02-13</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">input[1]</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/smart-app-launch/CodeSystem/smart-codes</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">smartonfhir-application</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">SMART on FHIR application URL.</span></span></span><br><span style="display:inline-block"><span class="emph2">valueUrl</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">https://example.org/DRUG-X/smart-application</span></span></span><br><span style="display:inline-block"><span class="emph1">input[2]</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/smart-app-launch/CodeSystem/smart-codes</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">smartonfhir-appcontext</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Application context related to this launch.</span></span></span><br><span style="display:inline-block"><span class="emph2">valueString</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">{&quot;providerSystemPatientId&quot;:&quot;123&quot;}</span></span></span></span></div>

<hr>

---

// File: input/pagecontent/technical-background.md

### CDS Hooks

This guide makes use of the CDS Hooks standard, which enables interactions between the Provider System and REMS Administrator System to be initiated based on events within the provider's workflow.

Implementers are to refer to the [CDS Hooks specification](https://cds-hooks.hl7.org/2.0) for general guidance. This guide provides additional REMS-specific usage direction to be applied in addition to the base CDS Hooks standard. 

<p></p>

### SMART on FHIR Application Launch

This guide bases its approach for integrating REMS Administrator applications into the provider workflow on the [SMART App Launch specification](https://hl7.org/fhir/smart-app-launch).

Implementers are to refer to that implementation guide for general guidance related to [EHR-based app launch](https://hl7.org/fhir/smart-app-launch/app-launch.html#launch-app-ehr-launch), [standalone app launch](https://hl7.org/fhir/smart-app-launch/app-launch.html#launch-app-standalone-launch) and [deferred launch of a SMART app provided in a CDS Hooks response](https://hl7.org/fhir/smart-app-launch/task-launch.html). 

This guide provides additional REMS-specific usage direction to be applied in addition to the base SMART App Launch specification. 

<p></p>

### US Core Profiles

Resources not profiled in this implementation guide that are exchanged as part of a REMS Interaction **SHOULD** conform to [US Core profiles](https://www.hl7.org/fhir/us/core/profiles-and-extensions.html) where applicable profiles exist. 

These include, but are not limited to, the FHIR resources included in the prefetch content submitted with a CDS Hooks request:

- [Patient](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html)
- [Practitioner](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html)
- [MedicationRequest](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html)
- [Medication](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medication.html)

... as well as the [DocumentReference](https://hl7.org/fhir/us/core/StructureDefinition-us-core-documentreference.html) containing patient REMS information returned by the REMS Administrator in a CDS Hooks response.

<p></p>

### Consistency with the Da Vinci Burden Reduction IGs

This guide aims to be consistent in its guidance with other FHIR implementation guides likely to be implemented by REMS stakeholders. 

Certain interactions described in this guide are similar to the provider / payer interactions defined in the [Da Vinci Coverage Requirements Discovery \(CRD\) IG](https://hl7.org/fhir/us/davinci-crd).

In particular, the Da Vinci CRD Implementation Guide was used as the basis for this guide's [guidance on using CDS Hooks response Cards](cds-cards.html), with the aim of being as consistent as possible with the CRD IG's direction while providing guidance tailored specifically to REMS workflows. 

The Card examples were minimally adjusted from examples in the CRD IG, only to the extent needed to illustrate REMS-related alerts, documentation, and actions rather than the coverage-related information returned in CRD's scenarios. 

Note that the Da Vinci CRD specification outlines additional return types beyond those called out in this IG related to use of FHIR Questionnaires and for other payer-related purposes. While this guide does not identify analogous REMS uses for these response types, there is nothing within this specification that precludes their use within a REMS workflow.

<p></p>
<p></p>




<p></p>
<p></p>


---

// File: input/pagecontent/use-cases.md

### Use Case Background

REMS programs vary widely with respect to the steps and requirements they impose on the patient and providers, as described below. Because different drugs' programs impact patient care activities in different ways and at different steps, this guide doesn't attempt to describe a fixed set of use case scenarios that cover all variations. Instead, it defines basic patterns for interaction between a Provider System and REMS Administrator System that can be applied at multiple points in treating a patient with a REMS drug.

Before reading this section, it will be helpful to review [Participant Roles and Needs](roles.html) for descriptions of the actors and systems referenced below, and [REMS Steps and Terminology](process.html) for an overview of how REMS steps might fit into a given patient's care.

<p></p>

### Variations Across REMS Programs
REMS requirements for providers, patients and other participants vary considerably between drugs, based on the nature of the risk each drug presents and other aspects of its use. For example:
- Some REMS programs include an enrollment step where the patient confirms their understanding of the risks associated with the drug and commits to certain behaviors before starting treatment. 
- Other REMS programs are limited to providing educational information to the patient. 
- Some, but not all, REMS programs require prescribers or pharmacists to complete training and enrollment steps before treating a patient with or dispensing the drug.
- Some REMS programs require labs or other diagnostics to be performed prior to or during treatment.
- REMS programs require varying levels of coordination with the REMS Administrator on treatment activities.

In addition, real world treatment situations for individual patients will differ due to other factors. For example: 
- One prescriber may complete their training and enrollment for a REMS program through an offline process in advance of treating patients with the drug, versus another prescriber that learns of the enrollment requirement while writing their first prescription for the drug.
- REMS requirements that apply when starting the patient's initial therapy may or may not be required during subsequent rounds of therapy.

As a result, the scenario descriptions in this section will include aspects that don't apply to all REMS programs or treatment situations. The guide's FHIR approaches are intended to be applied if they fit a particular drug's program and applicable workflow conditions.

<p></p>

### Provider System Contexts
This guide supports scenarios encountered in two different system contexts, where the provider is either:
- **within the Provider System workflow,** performing a patient care activity using their Provider System (e.g., their EHR), during which the Provider System connects with the REMS Administrator System to notify it of the care event, provide patient information and/or request program information
- **visiting an external REMS Administrator web application** outside of the workflow of their Provider System--and the application retrieves information from the Provider System to support its workflow.

The interaction options differ between these contexts, and each can be useful.

<p></p>

#### Interaction Within the Provider System Workflow
This guide recommends initiating exchanges with the REMS Administrator System from within the Provider System workflow wherever possible--to enable interactions to be triggered based on relevant treatment actions and to avoid the need for the provider to manually navigate to external applications, maintain separate login credentials, etc. 

However, there are situations where starting therapy with a REMS drug may involve steps prior to the provider entering the Provider System's order flow or where it may otherwise not be possible to initiate exchange with the REMS Administrator System based on Provider System activities. In these cases, the interaction may be initiated from an external REMS Administrator App using standalone SMART app launch.

<p></p>

### Use Case One: Prescriber and REMS Administrator Interact from Within the Provider System Workflow
When seeing a patient, the prescriber decides to prescribe a drug, and is alerted by the Provider System that the drug has a REMS program. At an appropriate point in the workflow (e.g., when the prescriber starts creating the medication order, at the start of a related encounter, etc.), the Provider System connects with the REMS Administrator System and enables the prescriber to interact with it. 

At the start of this interaction, the Provider System supplies patient, provider and medication information to the REMS Administrator. 
- This step is accomplished using a CDS Hooks call triggered by an appropriate "hook" event in the provider workflow such as "order-select". 
- "Prefetch" data containing Practitioner, Patient and MedicationRequest FHIR resources is included in the request.

Depending on the drug and other variables described in the previous section, the REMS Administrator System responds to the CDS Hooks request with information about the REMS program, a [SMART app](https://www.hl7.org/fhir/smart-app-launch) to gather needed information, alerts about steps the prescriber must take before ordering the drug, etc. 

The Provider System then presents the returned information, gives the prescriber the option to open the REMS Administrator's SMART app (if one was returned) or to place the app into their work queue to launch later. When the provider launches the SMART app, it first retrieves information that it needs from the patient record in the Provider System--reducing manual data entry for the provider. The prescriber reviews the pre-filled data, makes adjustments as needed, and then completes any other app steps.

Note that in some situations, the REMS Administrator will have no information or requests to return. For example, the REMS Administrator may determine that there are no unmet REMS requirements to be addressed at the time of the interaction. In this case, the Provider System will receive an empty response and allow the prescriber's workflow to continue without interruption. 

<p></p>

**Use Case One Scenarios**

Below are possible response scenarios (which are detailed further in [this section of the IG](specification.html#interaction-initiated-by-the-provider-system-during-the-providers-workflow)). Note that at a given point in a patient's care, more than one of these might apply.

<p></p>

#### The prescriber must complete REMS program training or enrollment before prescribing the drug

In this scenario, the REMS Administrator notifies the provider of the need and may...

  - provide a URL to an external enrollment portal or training material
  - provide a SMART app in which the prescriber enrolls (presented within their Provider System's workflow)
    
#### The patient is not eligible for the proposed therapy

If the patient's information indicate that treatment with the proposed drug is not appropriate, the REMS Administrator alerts the provider and optionally provides a URL link to additional related information.

####  The patient must complete REMS enrollment or other requirements

The REMS Administrator alerts the provider to patient requirements that must be met before proceeding with treatment, such as education or enrollment. The Administrator may optionally include...
  - a URL where education or other info can be found
  - a SMART app in which to complete the patient's enrollment

#### Information is required to satisfy a REMS requirement

The REMS Administrator may request information required to meet REMS program requirements, such as a lab result or patient status information.

Along with notifying the provider of the need, the REMS Administrator may optionally:

  - Search for the needed information in the patient record within the Provider System, using permissions given in the CDS request
  - Propose a lab or diagnostic order to meet the requirement (using a CDS Hooks "suggestion" card)
  - Request additional info using a SMART app

#### The REMS Administrator has information that can be stored in the Provider System

The REMS Administrator may return information about the patient's participation in the REMS program to be saved to the patient's record in the Provider System. 

- This can be accomplished using a CDS `systemAction` that saves a note containing the information in the form of a FHIR DocumentReference.

#### The REMS Administrator has no information to return
If the REMS Administrator does not wish to present any information or requests to the prescriber, it may return an empty response. In this scenario, the Provider System will not interrupt the provider's workflow with REMS-related information.

#### The REMS Administrator has other alerts, information or steps

The REMS Administrator may recognize the opportunity to share other information or request other actions beyond those described above.

This implementation guide does not constrain information or requests that a REMS Administrator may return in its CDS Hooks response. Other alerts, resources or information gathering steps may be implemented, as needed.

<p></p>

### Use Case Two: Provider Using an External REMS Administrator Application

In this variation, the provider accesses an external REMS Administrator application from outside the Provider System workflow. In a process facilitated by the provider, the external application retrieves patient, provider and drug information from the Provider System using [standalone SMART launch](https://hl7.org/fhir/smart-app-launch/STU2.1/app-launch.html#launch-app-standalone-launch).

During that application's workflow:
- The provider opens a web browser that is not part of the Provider System and navigates to the REMS Administrator's web site 
- On a web page on the REMS Administrator's site, the provider indicates the Provider System used in the facility where the provider treats the patient
- The external REMS Administrator System initiates the "standalone SMART app launch" process with the selected Provider System
- The provider interacts with the Provider System during launch, signing in and optionally, locating the patient 
- The Provider System grants the external system access to appropriate patient data
- The external system retrieves patient, provider, drug and other clinical information as needed to support the associated REMS program.
 - Using the retrieved information, the external REMS Administrator System may:
   - determine the patient's eligibility for treatment using the drug
   - update its existing patient enrollment or initiate a new enrollment
   - determine if additional REMS steps or information is needed from the provider
   - share current patient REMS IDs, authorizations, status or other information with the Provider System.

<p></p>
<p></p>


---

// File: input/fsh/aliases.fsh

// Aliases used throughout the IG

Alias: $smart-launch-task = http://hl7.org/fhir/smart-app-launch/StructureDefinition/task-ehr-launch
Alias: $smart-codes = http://hl7.org/fhir/smart-app-launch/CodeSystem/smart-codes
Alias: $smart-launch-types = http://hl7.org/fhir/smart-app-launch/ValueSet/smart-launch-types
Alias: $smart-launch-info = http://hl7.org/fhir/smart-app-launch/ValueSet/smart-launch-info
Alias: $us-core-patient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias: $us-core-documentreference = http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference
Alias: $us-core-documentreference-category = http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category
Alias: $loinc = http://loinc.org
Alias: $formatcode = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode

---

// File: input/fsh/DocumentReference-example-rems-docref-1.fsh

Instance: example-rems-docref-1
InstanceOf: $us-core-documentreference
Usage: #example
Description: "Example of a US Core document reference containing a patient's REMS program information"
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><b>REMS information for August Samuels</b><br />On March 9, 2024<br /><br />Patient Name: August Samuels<br />Patient REMS ID: 0354600<br />Patient enrollment status: Enrolled March 9, 2024<br /><br />Prescriber Name: Mary Patel<br />Prescriber REMS ID: 0354035500 (NPI)<br /><br />Medication: Zombify 10mg Tablet<br />Initial dispense authorization number: 30550221<br /><br /></div>"
* status = #current
* type = $loinc#51851-4 "Administrative note"
* type.text = "REMS administrative note"
* category = $loinc#51851-4 "Administrative note"
* subject = Reference(Patient/example-patient-123) "August Samuels"
* date = "2024-03-09T15:29:46Z"
* description = "REMS Patient Information Note"
* content.attachment.contentType = #text/plain
* content.attachment.data = "UkVNUyBpbmZvcm1hdGlvbiBmb3IgQXVndXN0IFNhbXVlbHMgW3RleHQgdHJ1bmNhdGVkXQ=="
* content.attachment.title = "REMS information for August Samuels on March 9, 2024"
* content.format = $formatcode#urn:ihe:iti:xds:2017:mimeTypeSufficient "mimeType Sufficient"
* context.period.start = "2024-03-09T08:00:00+11:00"


---

// File: input/fsh/medication-rems-capabilitystatement-provider-system.fsh

Instance: provider-system
InstanceOf: CapabilityStatement
Usage: #definition
Title: "Medication REMS Capability Statement - Provider System"
Description: "This CapabilityStatement describes the expected capabilities of a Provider System that conforms to the conventions of the Medication REMS FHIR implementation guide."
* url = "http://hl7.org/fhir/us/medication-rems/CapabilityStatement/provider-system"
* version = "1.0.0"
* name = "MedicationRemsCapabilityStatementProviderSystem"
* status = #active
* experimental = false
* date = "2024-04-01T00:00:00-05:00"
* publisher = "HL7 International - Pharmacy"
* contact[0].name = "HL7 International - Pharmacy"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* contact[+].name = "Frank McKinney"
* contact[=].telecom[0].system = #email
* contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@frankmckinney.com"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* description = "This CapabilityStatement describes the expected capabilities of a Provider System that conforms to the conventions of the Medication REMS FHIR implementation guide."
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #xml
* format[+] = #json
* patchFormat = #application/json-patch+json
* implementationGuide[0] = "http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHALL
* implementationGuide[+] = "https://cds-hooks.hl7.org/2.0/"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
* rest.mode = #server
* rest.documentation = "When participating in exchanges described in the Medication REMS FHIR IG, the Provider System **SHALL** 1. Implement RESTful behavior according to the FHIR specification. 1. Support the JSON source format. \nWhen participating in exchanges described in the Medication REMS FHIR IG, the Provider System **SHOULD**: 2. Support the XML source format."
* rest.security.description = "1. Communication security implemented by the Provider System SHALL conform with the guidelines stated in [FHIR Security](https://www.hl7.org/fhir/security.html) for all exchanges covered in this IG. 2. For general security considerations refer to [FHIR Security and Privacy Considerations](https://www.hl7.org/fhir/secpriv-module.html)."

---

// File: input/fsh/medication-rems-capabilitystatement-rems-administrator-system.fsh

Instance: rems-administrator-system
InstanceOf: CapabilityStatement
Usage: #definition
Title: "Medication REMS Capability Statement - REMS Administrator System"
Description: "This CapabilityStatement describes the expected capabilities of a REMS Administrator System that conforms to the conventions of the Medication REMS FHIR implementation guide."
* url = "http://hl7.org/fhir/us/medication-rems/CapabilityStatement/rems-administrator-system"
* version = "1.0.0"
* name = "MedicationRemsCapabilityStatementRemsAdministratorSystem"
* status = #active
* experimental = false
* date = "2024-04-01T00:00:00-05:00"
* publisher = "HL7 International - Pharmacy"
* contact[0].name = "HL7 International - Pharmacy"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* contact[+].name = "Frank McKinney"
* contact[=].telecom[0].system = #email
* contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@frankmckinney.com"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* description = "This CapabilityStatement describes the expected capabilities of a REMS Administrator System that conforms to the conventions of the Medication REMS FHIR implementation guide."
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #xml
* format[+] = #json
* patchFormat = #application/json-patch+json
* implementationGuide[0] = "http://hl7.org/fhir/smart-app-launch/ImplementationGuide/hl7.fhir.uv.smart-app-launch"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHALL
* implementationGuide[+] = "https://cds-hooks.hl7.org/2.0/"
* implementationGuide[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* implementationGuide[=].extension.valueCode = #SHOULD
* rest.mode = #server
* rest.documentation = "When participating in exchanges described in the Medication REMS FHIR IG, the REMS Administrator System **SHALL** 1. Implement RESTful behavior according to the FHIR specification. 2. Support the JSON source format. \nWhen participating in exchanges described in the Medication REMS FHIR IG, the REMS Administrator System **SHOULD**: 1. Support the XML source format."
* rest.security.description = "1. Communication security implemented by the REMS Administrator System SHALL conform with the guidelines stated in [FHIR Security](https://www.hl7.org/fhir/security.html) for all exchanges covered in this IG. 2. For general security considerations refer to [FHIR Security and Privacy Considerations](https://www.hl7.org/fhir/secpriv-module.html)."

---

// File: input/fsh/medication-rems-task-smart-launch.fsh

Profile: MedicationRemsTaskSmartLaunch
Parent: $smart-launch-task
Id: medication-rems-task-smart-launch
Title: "Medication REMS Task - SMART Launch"
Description: "This profile defines a Task to be returned in a REMS Administrator's CDS Hooks response - enabling the provider or staff to launch a SMART app from their work queue."
* ^meta.lastUpdated = "2024-03-10T00:00:00-05:00"
* ^url = "http://hl7.org/fhir/us/medication-rems/StructureDefinition/medication-rems-task-smart-launch"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-03-10T00:00:00-05:00"
* ^publisher = "HL7 International - Pharmacy"
* ^contact[0].name = "HL7 International - Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* id 1.. MS
* intent 1.. MS
* intent = #proposal (exactly)
* for 0.. MS
* for ^label = "Related Patient"
* for ^short = "Related Patient in the provider system"
* for ^comment = "SHOULD be populated if the requested use of the SMART app is related to a particular patient"
* authoredOn 1.. MS
* requester 0..1 MS
* requester only Reference(Organization)
* requester ^comment = "The organization requesting that this task be performed SHOULD be provided"
* owner only Reference(Practitioner)
* owner MS
* owner ^label = "Provider"
* owner ^short = "Provider"
* owner ^comment = "The provider in whose work queue to add the SMART app launch task SHOULD be populated"
* owner ^min = 0
* reasonReference only Reference(MedicationRequest)
* reasonReference MS
* reasonReference ^label = "Related medication request"
* reasonReference ^short = "Related medication request"
* reasonReference ^definition = "The medication request for the REMS drug that this task relates to SHOULD be populated if this task is related to a specific prescription"
* reasonReference ^min = 0
* reasonReference.reference 1.. MS
* reasonReference.reference ^label = "MedicationRequest reference"
* reasonReference.reference ^short = "MedicationRequest reference"
* reasonReference.reference ^definition = "Reference to the related MedicationRequest resource"

Instance: medication-rems-task-smart-launch-1
InstanceOf: medication-rems-task-smart-launch
Usage: #example
* status = #requested
* intent = #proposal
* code = $smart-codes#launch-app-ehr "Launch application using the SMART EHR launch"
* description = "Complete patient enrollment using the DRUG-X REMS SMART app"
* for = Reference(Patient/example-patient-123) "August Samuels"
* authoredOn = "2024-02-13"
* input[0].type = $smart-codes#smartonfhir-application "SMART on FHIR application URL."
* input[=].valueUrl = "https://example.org/DRUG-X/smart-application"
* input[+].type = $smart-codes#smartonfhir-appcontext "Application context related to this launch."
* input[=].valueString = "{\"providerSystemPatientId\":\"123\"}"

---

// File: input/fsh/Patient-example-patient-123.fsh

Instance: example-patient-123
InstanceOf: $us-core-patient
Usage: #example
Description: "Example of a US Core patient"
* identifier.system = "http://example.org/patient-id"
* identifier.value = "123"
* name.family = "Samuels"
* name.given = "August"
* gender = #male
* birthDate = "1989-03-12"
* address.line[0] = "10023 Oakways Ln"
* address.state = "Concord"
* address.state = "MA"
* address.postalCode = "01742"


---

