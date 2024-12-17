File: repos/HL7_SLASH_davinci-alerts/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/sushi/configuration/                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.davinci-alerts

extension:
  - url: >-
      http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
  - url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm'
    valueInteger: 2
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: inm


canonical: 'http://hl7.org/fhir/us/davinci-alerts'
name: DaVinciUnsolicitedNotifications
title: Da Vinci Unsolicited Notifications
status: active
publisher:
  name: HL7 International / Infrastructure And Messaging
  url: 'http://www.hl7.org/Special/committees/inm'
  email: inm@lists.hl7.org 
jurisdiction: 'urn:iso:std:iso:3166#US'
copyright: >-
  Used by permission of HL7 International, all rights reserved Creative Commons License
description: >-
  This implementation guide describes a method for the communication of relevant notifications to support the real-time exchange of information that impacts patient care and value based or risk based services. Providers and Payers may need to be notified when activities occur that impact a patient’s care. This may be as traditional as a notification of an admission or transfer to or discharge from a care setting. It also includes notifications about changes in treatment such as a new or different medication, or changes in patient status like a new diagnosis. These notifications provide information that can improve care management and care coordination as well as act as the trigger for quality programs and other patient focused activities (for example, risk adjustment). By allowing the patient’s healthcare providers to be better informed and able to take actions and intervene earlier, the twin goals of better patient care and reduced cost of care may be met.

license: CC0-1.0
date: 2024-12-06
version: 1.1.0-preview
fhirVersion: 4.0.1

dependencies:

  hl7.fhir.us.core:
    version: 7.0.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore7
    reason: |
      Needed for systems supporting USCDI v4
  hl7.fhir.us.core.v610:
    version: 6.1.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore6
    reason: |
      Needed for systems supporting USCDI v3
  hl7.fhir.us.core.v311:
    version: 3.1.1
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore3
    reason: |
      Needed for systems supporting USCDI v1

  hl7.fhir.us.davinci-hrex:
    version: 1.1.0-ballot  # 1.1.0 for publication
    id: hrex


groups:
  BaseDaVinciNotificationProfiles:
    name: Base Da Vinci Notification Profiles
    description: These define the base constraints on FHIR resources for systems conforming to this implementation guide. Other Da Vinci Notification Profiles are based on them.
    resources:
      - StructureDefinition/notifications-messageheader
      - StructureDefinition/notifications-bundle

  DaVinciADTNotificationProfiles:
    name: Da Vinci Admission/Discharge/Transfer Notification Profiles
    description: Operations associated with CDex admission/discharge/transfer notifications
    resources:
      - StructureDefinition/admit-notification-messageheader
      - StructureDefinition/discharge-notification-messageheader
      - StructureDefinition/transfer-notification-messageheader
      - StructureDefinition/adt-notification-condition
      - StructureDefinition/adt-notification-coverage
      - StructureDefinition/adt-notification-encounter

  ValueSets:
    name: 'Terminology: Value Sets'
    description: These define sets of codes used by systems conforming to this implementation guide.
    resources:
      - ValueSet/notification-event
      - ValueSet/notification-admit-event
      - ValueSet/notification-discharge-event
      - ValueSet/notification-transfer-event

  CodeSystems:
    name: 'Terminology: Code Systems'
    description: >-
      These define new code systems used by systems conforming to this implementation guide.

      *The code systems defined here are not part of the base FHIR specification and future versions of this guide will migrate them to VSAC or another standard centralized US Realm terminology authority.*
    resources:
      - CodeSystem/notification-event

  BundleExamples:
    name: Bundle Examples 
    description: These are Bundle example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.
    resources:
      - Bundle/admit-notification-message-bundle-01
      - Bundle/admit-notification-message-bundle-02
      - Bundle/discharge-notification-message-bundle-01
      - Bundle/transfer-notification-message-bundle-01
      - Bundle/admit-notification-intermediate-translate-bundle
      - Bundle/admit-notification-intermediate-transmit-bundle

  # ConditionExamples:
  #   name: Condition Examples 
  #   description: These are Condition example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.
  #   resources:
  #     - Condition/adt-notification-condition-01

  # CoverageExamples:
  #   name: Coverage Examples 
  #   description: These are Coverage example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.
  #   resources:
  #     - Coverage/adt-notification-coverage-01

  # EncounterExamples:
  #   name: Encounter Examples 
  #   description: These are Encounter example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.
  #   resources:
  #     - Encounter/adt-notification-encounter-01

  # MessageHeaderExamples:
  #   name: MessageHeader Examples 
  #   description: These are MessageHeader example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.
  #   resources:
  #     - MessageHeader/admit-notification-messageheader-01
  #     - MessageHeader/admit-notification-messageheader-02
  #     - MessageHeader/discharge-notification-messageheader-01
  #     - MessageHeader/transfer-notification-messageheader-01

  CapabilityStatement:
    name: CapabilityStatements 
    description: |-
     There are **3 Capability Statements** defining computable definitions of FHIR conformance expectations of the RESTful transactions and specific profiles for each of the Da Vinci Notification Roles. They provide the base conformance rules that may be used for system compatibility testing, code generation, or as the basis for a conformance assessment.

     The following table summarizes how these CapabilityStatements applies to the Da Vinci Notification Roles

      |Role|server-mode|client-mode|
      | --- | :---: | :---: |
      |Sender |-| Da Vinci Notification Sender|
      |Intermediary |Da Vinci Notification Receiver| Da Vinci Notification Forwarder|
      |Recipient |Da Vinci Notification Receiver |-|
      {: .grid}
    resources:
      - CapabilityStatement/notification-sender
      - CapabilityStatement/notification-receiver
      - CapabilityStatement/notification-forwarder

pages:
  index.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
    title: Home
  # exchanging.md:
  #   extension:
  #   - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
  #     valueCode: informative
  #   title: Architectural Approach
  scope.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
    title: Scope and Usage
  roles.md: 
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
    title: Roles and Actors
  workflow.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
    title: Workflow
  guidance.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    title: Framework
  usecases.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    title: Admit/Discharge/Transfer Use Case
  security.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    title: Privacy, Safety, and Security
  downloads.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
    title: Downloads
  changes.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: informative
    title: Change Log
  ImplementationGuide-hl7.fhir.us.davinci-alerts.md:
    title: Unsolicited Notification ImplementationGuide Resource
parameters:  # see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
  path-resource:
    - input/resources
    - fsh-generated/resources
  path-pages:
    - input/pagecontent
    - input/intro-notes
    - fsh-generated/includes
    #- input/summaries
  path-expansion-params: '../../input/_resources/exp-params.json'  # for using US ed of SNOMED
  path-data: 
    - input/resources-yaml
  active-tables: false
  apply-contact: true
  apply-jurisdiction: true
  apply-publisher: true
  apply-version: true
  show-inherited-invariants: true
  usage-stats-opt-out: true
  # excludexml: false
  # excludejson: false
  # excludettl: true
  # excludemap: true
  # suppressed-ids: DocumentReference/discharge-summary
  # produce-jekyll-data: true #add all resources to data for access by Jekyll/liquid in pages DOES NOT WORK
  tabbed-snapshots: false
  validation: check-aggregation
  auto-oid-root: '2.16.840.1.113883.4.642.40.47'
  # generate: #what does this do - todo: remove and see4
  #   - xml
  #   - json
  # no-narrative:
  #   - Patient/example-targeted-provenance

  # no-validate:
  #   - 'StructureDefinition/*'
  # version-comparison:
  #    - 1.0.0

  # html-exempt:  # These pages are generated by the cli validator for comparison between Argo and US Core
  #   - comparison-argo/vs-observation-status-us-core-observation-smoking-status-status.html
  # ipa-comparison: 
  #   - '{current}'
copyrightyear: '2024+'
#releaselabel: CI Build
releaselabel: STU 1.1 Preview  # for publication
# releaselabel: Ballot

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided ig-data/input/includes/menu.xml file, delete the "menu" property below.     │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  IG Home: index.html
  Background:
    Da Vinci Overview: http://hl7.org/about/davinci
    Da Vinci Guiding Principles: https://hl7.org/fhir/us/davinci-hrex/2024Sep/davinci-guiding-principles.html
    # Architectural Approach: exchanging.html
  Specification:
    Scope and Usage: scope.html
    Roles and Actors: roles.html
    Workflow: workflow.html
    Framework: guidance.html
    Privacy, Safety, and Security: security.html
    Admit/Discharge/Transfer Use Case: usecases.html
  FHIR Artifacts:
    Artifacts Summary: artifacts.html
    Base Da Vinci Notification Profiles: artifacts.html#1
    Da Vinci Admission/Discharge/Transfer Notification Profiles: artifacts.html#2
    Value Sets: artifacts.html#3
    Code Systems: artifacts.html#4
    Bundle Examples : artifacts.html#5
    Capability Statement : artifacts.html#6
    Concept Maps: artifacts.html#7
  Base Specs:
    FHIR R4 Spec: https://hl7.org/fhir/R4/index.html
    HRex 1.1.0: https://hl7.org/fhir/us/davinci-hrex/STU1.1/index.html
    US Core 3.1.1: https://hl7.org/fhir/us/core/STU3.1.1/index.html
    US Core 6.1.0: https://hl7.org/fhir/us/core/STU6.1/index.html
    US Core 7.0.0: https://hl7.org/fhir/us/core/STU7/index.html
  Support:

   Discussion Forum: https://chat.fhir.org/#narrow/channel/205917-Da-Vinci-Alerts
   Project Page: https://confluence.hl7.org/pages/viewpage.action?pageId=51225442  
   Implementer Support: https://confluence.hl7.org/display/DVP/Notifications+Implementer+Support
   Specification Dashboard: https://jira.hl7.org/secure/Dashboard.jspa?selectPageId=11905
   Propose a Change: https://jira.hl7.org/secure/
   Downloads: downloads.html
  Change Log: changes.html


---

// File: input/pagecontent/all-examples.md


Available for download [here](downloads.html)

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

{% include example-list-generator.md %}
<!-- ================================================ -->


---

// File: input/pagecontent/changes.md


The Da Vinci Unsolicited Notifications Implementation Guide was  supported by the [Da Vinci] initiative.

### Version {{site.data.ig.version}}

- Publication Date: *TBD*
- url: <https://hl7.org/fhir/us/davinci-alerts/STU1.1>
- Based on FHIR version : 4.0.1

#### What's new in Version {{site.data.ig.version}} of Da Vinci Unsolicited Notifications:

{% include whats-new-1.1.0-snapshot.md %}

#### Updates and Corrected Errata in Version {{site.data.ig.version}}:

**Tracker Status**: **Summary** **Jira Issue** **Link to Updated Content**

1. **Applied**: Update security page [FHIR-26135](https://jira.hl7.org/browse/FHIR-26135) See change [Here](security.html)
2. **Applied**: Question on Bundle Size [FHIR-26173](https://jira.hl7.org/browse/FHIR-26173) See change [Here](guidance.html#what-is-in-the-message-bundle)
3. **Applied**: Add Device as sender and author in MessageHeader [FHIR-26209](https://jira.hl7.org/browse/FHIR-26209) See changes [Here](StructureDefinition-notifications-messageheader.html) and [Here](Bundle-admit-notification-message-bundle-02.html)
4. **Applied**: Clarify terminology migration plans [FHIR-26226](https://jira.hl7.org/browse/FHIR-26226) See change [Here](artifacts.html#4)
5. **Applied**: Correct Transfer-notification-messageheader profile name [FHIR-29684](https://jira.hl7.org/browse/FHIR-29684) See change [Here](StructureDefinition-transfer-notification-messageheader.html)
6. **Applied**: Use realistic NPI format for Practitioner example [FHIR-37495](https://jira.hl7.org/browse/FHIR-37495) See change [Here](Bundle-admit-notification-message-bundle-01.html)
7. **Applied**: Consideration of FAST's Hybrid Intermediary IG [FHIR-38032](https://jira.hl7.org/browse/FHIR-38032) See change [Here](roles.html)
8. **Applied**: Clarify that request is an event [FHIR-39546](https://jira.hl7.org/browse/FHIR-39546) See changes [Here](scope.html) and [Here](roles.html)
9. **Applied**: Fix typo and add links [FHIR-39548](https://jira.hl7.org/browse/FHIR-39548) See change [Here](guidance.html#formally-defining-the-da-vinci-notification-message)
10. **Applied**: Define Acronym HIN [FHIR-39547](https://jira.hl7.org/browse/FHIR-39547) See change [Here](roles.html)
11. **Applied**: Copy editing changes prior to comment period to ensure accuracy, clarity, and readability. [FHIR-48964](https://jira.hl7.org/browse/FHIR-48964)
11.  **Applied**: Technical QA changes change to examples and conformance artifacts to meet the ig publication validation rules [FHIR-48966](https://jira.hl7.org/browse/FHIR-48966)
12. **Pre-Applied**: Alignment with Proposed Da Vinci standard pages/menu items. [FHIR-48965](https://jira.hl7.org/browse/FHIR-48965) For example see changes [Here](index.html#how-to-read-this-guide)
13. **Pre-Applied**: Supports US-Core 3.1.1, 6.1.0, and 7.0.0 [FHIR-48963](https://jira.hl7.org/browse/FHIR-48963)

### Version 1.0.0

- Publication Date: 2020-10-15
- url: <https://hl7.org/fhir/us/davinci-alerts/STU1/>
- Based on FHIR version : 4.0.1

The first official published version of the Da Vinci Unsolicited Notifications IG for FHIR R4.

1. Applied all resolutions from STU1 Ballot

  1. Various Technical Corrections and corrections to typographical errors and grammar.
  1. Update and correct examples
  1. Remove MessageDefintion and GraphDefinition profile and references to them ([FHIR-26130](https://jira.hl7.org/browse/FHIR-26130), [FHIR-26106](https://jira.hl7.org/browse/FHIR-26106)).
  1. Update Guidance on [Errors and ReliableDeliver](https://hl7.org/fhir/us/davinci-alerts/STU1/guidance.html#reliable-delivery) ([FHIR-26165](https://jira.hl7.org/browse/FHIR-26165), [FHIR-26201](https://jira.hl7.org/browse/FHIR-26201) [FHIR-26285](https://jira.hl7.org/browse/FHIR-26285),[FHIR-26190](https://jira.hl7.org/browse/FHIR-26190),[FHIR-26176](https://jira.hl7.org/browse/FHIR-26176)).
  1. Update [Scope and Usage](https://hl7.org/fhir/us/davinci-alerts/STU1/index.html#scope-and-usage)([FHIR-26200](https://jira.hl7.org/browse/FHIR-26200), [FHIR-26182](https://jira.hl7.org/browse/FHIR-26182) #[FHIR-26132](https://jira.hl7.org/browse/FHIR-26132),#[FHIR-26129](https://jira.hl7.org/browse/FHIR-26129),[FHIR-26184](https://jira.hl7.org/browse/FHIR-26184)).
  1. Update [Precondition and Assumption](https://hl7.org/fhir/us/davinci-alerts/STU1/guidance.html#preconditions-and-assumptions)([FHIR-26200](https://jira.hl7.org/browse/FHIR-26200),#[FHIR-26132](https://jira.hl7.org/browse/FHIR-26132) #[FHIR-26129](https://jira.hl7.org/browse/FHIR-26129),#[FHIR-26117](https://jira.hl7.org/browse/FHIR-26117),[FHIR-26121](https://jira.hl7.org/browse/FHIR-26121)).
  1. Update introduction to the [The Da Vinci Notification Message Bundl](https://hl7.org/fhir/us/davinci-alerts/STU1/guidance.html#the-da-vinci-notification-message-bundle)([FHIR-26200](https://jira.hl7.org/browse/FHIR-26200)).
  1. Update [Use Case Backgroun](https://hl7.org/fhir/us/davinci-alerts/STU1/usecases.html#use-case-background)([FHIR-26182](https://jira.hl7.org/browse/FHIR-26182),[FHIR-26116](https://jira.hl7.org/browse/FHIR-26116)).
  1. Clarify how Intermediary [forwards message](https://hl7.org/fhir/us/davinci-alerts/STU1/guidance.html#forwarding-notifications-using-this-framework) within framework and add [Notification Forwarder CapabilityStatement] ([FHIR-26177](https://jira.hl7.org/browse/FHIR-26177))
  1. Clarify [Intermediary rol](https://hl7.org/fhir/us/davinci-alerts/STU1/index.html#roles-and-actors) ([FHIR-26148](https://jira.hl7.org/browse/FHIR-26148))
  1. Clarify how to [sort incoming message](https://hl7.org/fhir/us/davinci-alerts/STU1/guidance.html#sending-unsolicited-notifications) (#[FHIR-26132](https://jira.hl7.org/browse/FHIR-26132))
  1. Add [Transfer notification use cas](https://hl7.org/fhir/us/davinci-alerts/STU1/usecases.html). (#[FHIR-26909](https://jira.hl7.org/browse/FHIR-26909))
  1. Flatten and Remove child concept for admit and discharge from the [Da Vinci Notification Event CodeSystem]. ([FHIR-26268](https://jira.hl7.org/browse/FHIR-26268),[FHIR-26178](https://jira.hl7.org/browse/FHIR-26178),[FHIR-26179](https://jira.hl7.org/browse/FHIR-26179),[FHIR-26180](https://jira.hl7.org/browse/FHIR-26180), [FHIR-26136](https://jira.hl7.org/browse/FHIR-26136))
  1. Clarify why [Da Vinci Notifications Bundle Profile] has min=0 constraints. ([FHIR-26289](https://jira.hl7.org/browse/FHIR-26289))
  1. Update [Da Vinci Notifications MessageHeader Profile] to require use of references. ([FHIR-26286](https://jira.hl7.org/browse/FHIR-26286))
  1. Update section on [formal message definition] (guidance.html#formally-defining-the-da-vinci-notification-message)([FHIR-26224](https://jira.hl7.org/browse/FHIR-26224)).
  1. Updates to [Security](https://hl7.org/fhir/us/davinci-alerts/STU1/security.html) page ([FHIR-26195](https://jira.hl7.org/browse/FHIR-26195), [FHIR-26194](https://jira.hl7.org/browse/FHIR-26194),[FHIR-26134](https://jira.hl7.org/browse/FHIR-26134), (https://jira.hl7.org/browse/FHIR-26134), [FHIR-26139](https://jira.hl7.org/browse/FHIR-26139)).
  1. Add `id` element to [Da Vinci Notifications MessageHeader Profile] ([FHIR-26168](https://jira.hl7.org/browse/FHIR-26168)).
  1. Add `id` and 'timestamp element to [Da Vinci Notifications Bundle Profile] profiles. ([FHIR-26168](https://jira.hl7.org/browse/FHIR-26168), [FHIR-26156](https://jira.hl7.org/browse/FHIR-26156)).
  1. Update [Da Vinci Admit Notification MessageHeader Profile],
[Da Vinci Discharge Notification MessageHeader Profile], and
[Da Vinci Transfer Notification MessageHeader Profile] with extensible bindings instead of pattern definitions ([FHIR-26163](https://jira.hl7.org/browse/FHIR-26163)).
  1. Remove detailed summaries from profiles ([FHIR-26161](https://jira.hl7.org/browse/FHIR-26161)).
  1. Clarify for the [Da Vinci Admit/Transfer/Discharge Notification Encounter Profile] that the link is from Condition to Encounter ([FHIR-26158](https://jira.hl7.org/browse/FHIR-26158)).
  1. Added section on [Data Query](https://hl7.org/fhir/us/davinci-alerts/STU1/guidance.html#fetching-additional-data). ([FHIR-26121](https://jira.hl7.org/browse/FHIR-26121))
  1. Updated [STU Note](https://hl7.org/fhir/us/davinci-alerts/STU1/guidance.html#introduction) regarding subscriptions ([FHIR-26100](https://jira.hl7.org/browse/FHIR-26100), [FHIR-26171](https://jira.hl7.org/browse/FHIR-26171)).
  1. Added [About This Guid](https://hl7.org/fhir/us/davinci-alerts/STU1/index.html#about-this-guide) section referring to Da Vinci and Da Vinci Guiding Principles ([FHIR-26114](https://jira.hl7.org/browse/FHIR-26114),[FHIR-26127](https://jira.hl7.org/browse/FHIR-26127), [FHIR-26131](https://jira.hl7.org/browse/FHIR-26131)).
  1. Update to Must Support Section ([FHIR-26124](https://jira.hl7.org/browse/FHIR-26124), [FHIR-26155](https://jira.hl7.org/browse/FHIR-26155)).
  1. Remove Query Requester CapabilityStatement and Query Responder CapabilityStatement ([FHIR-26155](https://jira.hl7.org/browse/FHIR-26155)).
  1. Clarify intent of [future scenario](https://hl7.org/fhir/us/davinci-alerts/STU1/index.html#scenarios) ([FHIR-26133](https://jira.hl7.org/browse/FHIR-26133)).
  1. Clarify intent of MessageHeader.author ([FHIR-26138](https://jira.hl7.org/browse/FHIR-26138)).
  1. Simplify sequence diagrams ([FHIR-26147](https://jira.hl7.org/browse/FHIR-26147)).
  1. Clarify approach to messaging in Framework ([FHIR-26098](https://jira.hl7.org/browse/FHIR-26098)).
  1. Correct Conformance expectations for [Notification Sender CapabilityStatement] ([FHIR-28357](https://jira.hl7.org/browse/FHIR-28357))

### Version 0.2.0

- Publication Date: 2019-12-22
- url: <https://hl7.org/fhir/us/davinci-alerts/2020Feb/>
- Based on FHIR version : 4.0.1

1. This Implementation Guide was originally named *Da Vinci Alerts Implementation Guide* - after review by several HL7 workgroups, it was felt that the term "alerts" has a specific meaning to many people that was not the same as the contents of this guide.  Therefore the title of this IG has been changed to *Da Vinci Unsolicited Notifications Implementation Guide*.  Be aware that there are several technical artifacts such as the canonical base, the npm package name and the history page url that cannot be changed and still retain the word "alerts" in their paths.
1. Implemented FHIR Messaging paradigm instead of using a custom operation to transact notifications.
    1. Replaced the Da Vinci Alert Bundle Profile with a message bundle, the Da Vinci Notifications Bundle.
    1. Replaced the `$notify` custom operation with the FHIR `$process-message` operation to transact the Da Vinci Notifications Bundle directly to Recipients and Intermediaries.
    1. Replaced existing Profiles with Profiles, MessagedDefinitions and GraphDefinition to support FHIR messaging and the Admit/Discharge use case.
    1. Replaced existing examples to support FHIR messaging and the Admit/Discharge use case.
    1. Replaced existing CapabilityStatements to support FHIR messaging and the Admit/Discharge use case.
    1. Various changes and updates to the documentation and figures to provide specific guidance for using FHIR messaging and implementation of the Admit/Discharge use case.

### Version 0.1.0

- **DEPRECATED: Note that this version (0.1.0) should *not* be used, it was pulled from the ballot after publication and has been replaced by version 0.2.0

---

{% include link-list.md %}


---

// File: input/pagecontent/downloads.md

### Package File

The following package file includes an NPM package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and URLs in the IG, etc., defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all the rules for validating the profiles. Implementers will still need to be familiar with the specification content and profiles that apply to make a conformant implementation. See the [validating profiles and resources] documentation in FHIR for more information.

- [Package(compressed folder)](package.tgz){::download="true"}

### Downloadable Copy of Specification

A downloadable version of this IG for local hosting is available:

- [Downloadable Copy(compressed folder)](full-ig.zip)

### Examples

All the examples in this Implementation Guide are available for download:

- [XML(compressed folder)](examples.xml.zip)
- [JSON(compressed folder)](examples.json.zip)

### Consolidated CSV and Excel File Representations of Profiles

All the profile information for the {{site.data.fhir.ig.title}} in a single CSV or Excel file, which may be helpful to testers and analysts to review element properties across profiles in a single table:

- [CSV(compressed folder)](csvs.zip)
- [Excel(compressed folder)](excels.zip)

### Schematrons

Schematrons are also available for download:

- [Schematrons(compressed folder)](schematrons.zip)

### Implementation Guide Details

The following link to the [ImplementationGuide] resource defines the technical details of this publication, including dependencies and  publishing parameters:

- [Unsolicited Notification ImplementationGuide Resource]

### Other Downloads

The following links allow you to download various parts of other referenced implementation guides for local use:

- The full [FHIR R4 core] specifications and other [FHIR core downloads]
- A [validator] that can be used to check FHIR resource instance validity and [instructions on how to use it]

{% include link-list.md %}

---

// File: input/pagecontent/guidance.md


### Introduction

FHIR resources can be used to transport patient information relevant to a specific event (e.g. admission, transfer, discharge, change in treatment, new diagnosis) to another provider or the health plan. These resources can communicate the details of who, when, what and where care was delivered and help to ensure timely follow-up as needed.  To reiterate, the intent of this guide is to provide a framework to create notifications that can provide enough information to Recipient and/or Intermediary for them to be able understand what the notification is about and complete enough to enable them to determine if and what additional steps they need to take in response to the notification.

This guide follows a simplified [FHIR messaging paradigm] for notifications employing both the FHIR Messaging Bundle and RESTful interaction using the [`$process-message`] operation for exchanging data.  Note that Da Vinci Notifications allow implementers to use only these FHIR messaging components in the same manner as a [FHIR RESTful operation] without having to fully implement the FHIR messaging framework.   But it is also compatible with FHIR messaging as implemented.

The following framework documents how to use [FHIR messaging] to define the contents of the notification and how to "push" these unrequested notification messages using the `$process-message` operation directly to Recipients and Intermediaries.  The [Admit/Discharge/Transfer Use case] demonstrates how to implement an unsolicited notification scenario using the framework.

This project recognizes the existing FHIR (R2-R4) subscriptions framework as well as  revisions to the *Subscription* resource for FHIR R5 for event based subscriptions using *SubscriptionTopic* and *SubscriptionStatus* and *Bundles* of type `subscription-notification`.  It is anticipated that an equivalent subscription based notification paradigm can be implemented as an alternate to the unsolicited messaging based approach documented here.  After FHIR R5 subscription resources are finalized and an implementation guide to enable the implementation of R5-style subscription in FHIR F4 is completed, a future version of this guide will add subscriptions as an alternative workflow.
{:.stu-note}

### Preconditions and Assumptions


<div class="row">
<div class="col-sm-6" markdown="1" style="background-color: Lightcyan;">
**Preconditions**

- There is an event or request that drives the generation of the Notification.
- A Notification will be generated for each patient separately.
  - The event can be for one or more patients.
- The Sender has access to the Recipients/Intermediary FHIR endpoints.
  - Typically the discovery and management of this is an 'out-of-band' process
- System level trust exists between the actors (refer to the [Privacy, Safety, and Security] Page for additional guidance).
  - Clients have been authorized by the servers.
- A secure information transport mechanism exists between the actors (refer to the [Privacy, Safety, and Security] Page for additional guidance).
- Patient consent allows exchange of data between the relevant systems.
  - It is assumed that consent is managed elsewhere.
- Trading partners (in other words: Senders, Intermediaries, and Recipients) will use data use agreements (DUAs), business associate agreements (BAAs) and/or contracts to specify the use cases and scope and potential reuse or repurposing of data shared between two parties. These agreements can be directly between trading partners or at a trusted exchange level. See the [HL7 Da Vinci Guiding Principles] for further details.
  - Any such agreement should clearly indicate how the Intermediary will handle sensitive information, determine what to remove, and how it will notify the recipient of the removal.

----

</div>
<div class="col-sm-6" markdown = "1" style="background-color: WhiteSmoke;">
**Assumptions**

---

- Based on FHIR R4 and US Core R4 profiles where applicable.
- The Sender shall provide structured data whenever possible.
- Notifications are transacted to the `$process-message` operation endpoint.
- The Da Vinci Notification Message Bundle Profile is the FHIR object that is exchanged for all notification transactions.
- Considerations for sensitive data when triggering a Notification need to be taken into account and hence not all events may trigger a notification.

---

</div>

</div>
<br/>

### The Da Vinci Notification Message Bundle

For every notification, the object that is exchanged is a [FHIR message Bundle]. It consists of a Bundle identified by the type "message", with the first resource in the bundle being a [MessageHeader] resource. The MessageHeader resource has a code - the message event - that identifies the reason for the notification. The Recipient/Intermediary may determine how to process the Notification based this event code.  The MessageHeader also carries additional notification metadata. The other resources in the bundle depend on the notification scenario and form a network through their relationships with each other - either through a direct reference to another resource or through a chain of intermediate references.

#### The Da Vinci Notification Message Event Code


The message event codes identify the purpose for the notification.  For this framework a set of concepts describing the purpose of the Da Vinci unsolicited notification has been created.

{% include list-simple-codesystems.xhtml %}

These concepts represent a 'starter set' and will be supplemented with additional concepts in the future. Note that there is no HL7 v2 messaging equivalent to these codes. However when available, a relationship between concepts in the notification event codes and concepts used in the notification "focus" resource is documented. For example concepts that correspond to the admission transfer and discharge events.

#### What is in the Message Bundle


<!--
The message bundle **SHALL** include the MessageHeader resource and the resources referenced by `MessageHeader.focus` element. It **SHOULD** include all resources needed for the Receiver or Intermediary to be able to process the message as expected by the the message event *provided that all included resources have a traversal path following Reference or canonical links either to or from the MessageHeader*.
-->
For all Da Vinci Notification Message Bundles, the following resources are mandatory (i.e., data MUST be present) or must be supported if the data is present in the source system (see [Must Support] definition below).  These requirements are illustrated in Figure 3 below.  See the [Admit/Discharge/Transfer Use Case] for an example of the required resources for a particular scenario.

**Each Bundle must have:**

1. *MessageHeader*
1. The event or request resource referenced by `MessageHeader.focus`
  - For example, the *Encounter* for admissions notification

**Each Bundle must support:**

1. US Core *Organization*, *Practitioner*, or *PractionerRole* referenced by `MessageHeader.sender`
1. US Core *Organization*, *Practitioner*, or *PractionerRole* referenced by `MessageHeader.responsible`
1. US Core *Practitioner*, or *PractionerRole* referenced by `MessageHeader.author`
    - This is the individual who authorized the event (e.g., the clinician who authorized the admit/discharge)
1. *All* resources directly referenced by the `MessageHeader.focus` resource. Implementers should carefully consider what information they are willing to share and only include those reference elements for the use case in the focus resources. This can be formally defined by profiling the focus resource.  For example the Admit/Discharge/Transfer use case focal resource is the [Da Vinci Admit/Discharge/Transfer Notification Encounter Profile].

   Implementers that use FHIR as their persistence layer may need to modify those resources before assembling the message bundle to avoid sending sensitive or unnecessary data.
   {:.highlight-note}

1.  *All* resources needed for the Receiver or Intermediary to be able to interpret the notification and process the message *provided* that the resources have a traversal path to or from `MessageHeader.focus` resource.  These requirements are use case specific and need to be determined by the implementation community based on their data requirements.

<div class="bg-success" markdown="1">
**Bundle Size: **

For high-volume systems, implementers may have concerns about notification bundle size. Senders **SHOULD** consider message bundle size when creating a profile to decide what to include in the bundle to avoid large file size errors. There is documented standard approach to handling message bundles that are too big to process, but Recipients (and Intermediaries) **SHOULD** consider this when implementing this guide (e.g., send an error in the operation outcome message).


</div><!-- new-content -->

#### How to define the Message Bundle


The set of resources within the message and their relationship to each other can be represented as an interconnected graph of resources as Figure 3 below illustrates (Note that this is a simplified and incomplete representation of the possible resources in notification message bundle. See [Figure 9] for an example of a resource graph for the admission/transfer/discharge scenarios):  

{% include img-portrait.html img="generic_message_graph.svg" caption="Figure 3" %}

#### Formally Defining the Da Vinci Notification Message


The Da Vinci Notification Message can be formally defined in FHIR using a set of FHIR Profiles that constrain links to the message Bundle. The base [Da Vinci Notifications MessageHeader Profile] and [Da Vinci Notifications Bundle Profile] are used to define the base constraints for all notification scenarios.

All the profiles that populate the Bundle get enforced by their references and the [aggregation] element which is constrained to 'bundled'.  This means these references can only point to resources within the same bundle.  Therefore, starting with the MessageHeader profile, the profiled resources within the bundle form a chain of links that define the bundle.

A use case specific Notification Bundle is defined by starting with base constraints in the [Da Vinci Notifications MessageHeader Profile] and [Da Vinci Notifications Bundle Profile] and creating a more tightly constrained MessageHeader Profile. Resources that are referenced within the Bundle are profiled to complete the Bundle definition.  Depending on the use case, existing profiles may be used or new profiles defined.

See the Admit/Discharge/Transfer use case for an example of using FHIR Profiles to define the Bundle.

<!--
##### MessageDefinition and GraphDefinition


The [MessageDefinition] defines the event and focus resource of the Message as well as other metadata. The [GraphDefinition] is referenced by the MessageDefinition and it defines the forward and reverse links (paths) between the resources (profiles) that populate the messaging Bundle. This guide defines the following profiles to be used as "blueprints" to create MessageDefinition and GraphDefinition instances for Da Vinci Notifications:

- [Da Vinci Notifications MessageDefinition Profile]
- [Da Vinci Notifications GraphDefinition Profile]

A use case specific Da Vinci Notification Bundles is defined using the base constraints defined in the [Da Vinci Notifications MessageHeader Profile] and use case specific MessageDefinition and GraphDefinition instances. Resource profiles are referenced by the GraphDefinition instance. Depending on the use case, existing profiles (for example, US Core Profiles) may be used or new profiles defined.

See the Admit/Discharge/Transfer use case for an example of using MessageDefinition and GraphDefinition to define the Bundle.
-->

[MessageDefinition] and [GraphDefinition] resources are an alternative to profiling the message bundle's contents.However, at the time of this publication, the implementation community, reference implementations, and validation tooling does not fully support them. FHIR profiling is the more mature mechanism broadly supported by the implementation community, reference implementations, and validation tooling. However, there is no mechanism to enforce profiles in a message on a reverse link because "reverse links" cannot be traversed forward from the MessageHeader. It may also require more artifacts than using MessageDefinition/GraphDefinition.
{:.stu-note}

### Sending Unsolicited Notifications

As shown in Figure 4, when an event or request triggers a notification, the Sender creates a Da Vinci Notification Message Bundle and notifies the Recipient or Intermediary using the `$process-message` operation.

{% include img-portrait.html img="$process_message_wf.svg" caption="Figure 4" %}

- For this guide there is no expectation for a notification response message to be returned from the Recipient or Intermediary to the Sender. Therefore, the $process-message input parameters "async" and "response-url" are not used and the body of this operation is the message bundle itself.
- In the context of the `$process-message` operation, the Recipient/Intermediary is treated as a ["black box"] and simply accepts and processes the submitted data and there are no further expectations beyond the http level response as defined in the FHIR specification.
  - The Receiver/Intermediary may sort and filter notifications based on the `MessageHeader.event` codes. For example, `notification-admit` can be used to filter for patient admission notifications.
- There is no expectation that the data submitted represents all the data required by the Notification Recipient/Intermediary, only that the data is known to be relevant to the triggering event. The Notification Recipient/Intermediary can optionally fetch additional information from the patient's medical record using FHIR RESTful searches.  The endpoint for this search may be known or supplied via the $process-message operation payload.

#### Fetching Additional Data

As illustrated in steps 5-8 in the sequence diagram (Figure 4), the Intermediary or Receiver **MAY** fetch additional data from the Sender after it successfully receives and processes the notification optionally searches and processes the search results.  Refer to the [US Core] Implementation Guide for provider access to patient data.

This guide does not specify a standard discovery process for obtaining the Sender's FHIR endpoint.  Once a suitable approach has been agreed upon and published, it will be referenced in a future version of this guide
{:.stu-note}

#### Additional Intermediary Steps

After the Intermediary successfully receives and processes the notification and optionally searches and processes the search results, it redistributes the data to the end users.  It **MAY** use this framework (in other words, FHIR messaging and the `$process-message` operation) or some other messaging protocol such as Direct, SMS or V2 messaging to forward the notification.  Note that the Intermediary **MAY** customize the content based on the end user (for example, withholding data that a particular care team member does not need).

##### Forwarding Notifications Using This Framework

The sequence diagram in Figure 5 illustrates the steps when forwarding the notification using the Da Vinci Notifications framework.

{% include img-portrait.html img="forwarding_message_wf.svg" caption="Figure 5" %}


{{ site.data.capabilitystatement-notification-forwarder.rest[0]resource[5].documentation }}

{{ site.data.capabilitystatement-notification-forwarder.rest[0]resource[10].documentation }}

    Examples:

    Bundle Content Unchanged

    ~~~json
    {% include adt-notification-provenance-01.json %}
    ~~~

    See the [Admit Notification Intermediate Transmit Bundle] for a complete example of this use case.

    Bundle Content Changed

    ~~~json
    {% include adt-notification-provenance-02.json %}
    ~~~

    See the [Admit Notification Intermediate Translate Bundle] for a complete example of this use case.

#### `$process-message` Operation


The `$process-message` operation is invoked by the Sender using the `POST` syntax:

`POST [base]/$process-message`

The body of the operation is the Da Vinci Notification Message Bundle containing:

  1. The MessageHeader which is the first resource in the bundle and contains the the message event code - that identifies the nature of the notification.
  1. The other resources in the bundle depend on the notification use case and are defined by either the MessageDefinition and GraphDefinition or FHIR Profiles as described above.

An HTTP Status success code is returned on successful submission.


See the Admit/Discharge/Transfer scenario [Example Transactions] for an example of using the `$process-message` operation to send a Da Vinci Notification Message Bundle.

#### Reliable Delivery

Upon receiving a message, the Receiver/Intermediary may return one of several status codes which is documented in [`$process-message`] definition.  For successful transactions  `200`, `202`, or `204` **SHALL** be used. Using a `200` or `204` response to indicate the message is received and processable is preferred over `202` indicating the message is simply received.  If an error occurs, an [OperationOutcome] **SHOULD** be returned with details documenting the error. Parties should consider impact of failure to send and decide what additional steps to undertake. The following table defines the Sender behavior in response to the following error codes:

|Error Code|Sender Behavior|
|---|---|
|`401`,`404` +/- OperationOutcome| do not attempt to resend the message without addressing the error|
|`429` +/- OperationOutcome  |resend message but slow down traffic|
|`500+` +/- OperationOutcome |may retry resending the message one or more times|
{:.grid}

Note that any mechanism of communicating an error *after* the Receiver/Intermediary has already responded to the Sender will be "out of band".  IF the message cannot be processed and thus the sender address cannot be obtained from the MessageHeader, the sender address could be discovered by inspection of other layers of transport such as is described by the [FHIR at Scale Taskforce (FAST)] authentication piece for server authorization.  See the messaging documentation in FHIR Specification for additional guidance on [reliable delivery].

### Must Support

#### Profiles
All elements in the Da Vinci Notification profiles have a [MustSupport flag]. Systems claiming to conform to a profile must "support" the element as defined below:

##### Must Support Definition for Notification Transactions Between the Sender and  Intermediary/Recipient


*Must Support* on any data element SHALL be interpreted as follows:

* As part of the notification message as specified by the [Notification Sender CapabilityStatement], the  Sender SHALL be capable of including the data elements defined in the Da Vinci Notification profiles that have a MustSupport flag.

- The Recipient/Intermediary SHALL be capable of processing resource instances containing the data elements without generating an error or causing the application to fail. In other words Recipient/Intermediary SHOULD be capable of processing the data elements (display, store, etc).

- When receiving a notification from the Sender, the  Recipient/Intermediary SHALL interpret missing data elements within resource instances as data not present in the Sender's systems.

- If a particular data element is missing and the Sender knows the precise reason for the absence of data, then the Sender **SHALL** provide the reason for the missing information using "null" values from the value set where they exist or using the dataAbsentReason extension (The assumption is that system implementers will, wherever possible, automate the population of missing values with "null" values without requiring - but providing the option for - manual entry).

- Notification Recipient/Intermediary SHALL be able to process resource instances containing data elements asserting missing information without generating an error or causing the application to fail.

##### Must Support Definition for Notification Transactions Between the Intermediary and Recipient


*Must Support* on any data element SHALL be interpreted as follows:

- When the Intermediary is sending Da Vinci Notifications, its capabilities are specified by the [Notification Forwarder CapabilityStatement]. The Intermediary SHALL be capable of including the data elements defined in the Da Vinci Notification profiles that have a MustSupport flag.

- The  Recipient SHALL be capable of processing resource instances containing the data elements defined in the Da Vinci Notification profiles that have a MustSupport flag without generating an error or causing the application to fail. In other words, the Recipient SHOULD be capable of processing the data elements (displaying, storing, etc).

- If a particular data element is missing and the Sender knows the precise reason for the absence of data, then the Sender **MAY** remove the data elements in the resource instance when distributing the alert notification. The Intermediary **SHOULD** provide the reason for the missing information using "null" values from the value set where they exist or using the dataAbsentReason extension (The assumption is that system implementers will, wherever possible, automate the population of missing values with "null" values without requiring - but providing the option for - manual entry).

- The Recipient SHALL be able to process resource instances containing missing data elements and data elements asserting missing information without generating an error or causing the application to fail.

##### Must Support Definition for Optional Data Query Transactions


Refer to the [US Core Must Support] rules for data query transactions to fetch additional data.

---

{% include link-list.md %}


---

// File: input/pagecontent/ImplementationGuide-hl7.fhir.us.davinci-alerts.md

{% assign ig-resource1 = 'ImplementationGuide-' | append: site.data.ig.id %}  
{% assign ig-resource2 = 'ImplementationGuide/' | append: site.data.ig.id %}


|||
|---|---|
|*Official URL*: {{ site.data.ig.url }}|*Version*: {{ site.data.ig.version }}|
|*NPM package name*: {{ site.data.ig.packageId }}|*ComputableName*: {{ site.data.ig.name }}|
|*Copyright/Legal*: Used by permission of HL7 International, all rights reserved Creative Commons License|Standards status: {{ site.data.resources[ig-resource2].status.standards-status }}<br />Maturity Level: {{ site.data.resources[ig-resource2].status.fmm }}
{:.grid}

{{ site.data.ig.description }}

- [XML]({{ig-resource1}}.xml)
- [JSON]({{ig-resource1}}.json)

### Cross Version Analysis

{% capture cross-version-analysis %}{% include cross-version-analysis.xhtml %}{% endcapture %}{{ cross-version-analysis | remove: '<p>' | remove: '</p>'}}

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}


### Parameter Settings

The following [IG Parameters](https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters) are set for this Implementation Guide:

{% for p in site.data.ig.definition.parameter %}
- code: {{p.code}}<br/>value: {{p.value }}
{%- endfor -%}



---

// File: input/pagecontent/index.md

<div class="stu-note" markdown="1">

{% include whats-new-1.1.0-snapshot.md %}

</div><!-- stu-note -->

Where possible, new and updated pre-publishing content are highlighted with green text and background - **This highlighting will be removed prior to publication**
{:.new-content}

Key updates and detailed changes between this and prior versions are available on the [Change Log] page.
{:.stu-note}

This implementation guide describes a method for the communication of relevant notifications to support the real-time exchange of information that impacts patient care and value based or risk based services.  Providers and Payers may need to be notified when activities occur that impact a patient's care. This may be as traditional as a notification of an admission or transfer to or discharge from a care setting. It also includes notifications about changes in treatment such as a new or different medication, or  changes in patient status like a new diagnosis. These notifications provide information that can improve care management and care coordination as well as act as the trigger for quality programs and other patient focused activities (for example, risk adjustment).  By allowing the patient's healthcare providers to be better informed and able to take actions and intervene earlier, the twin goals of better patient care and reduced cost of care may be met.

The [2019 CMS 45 CFR Part 156 NPRM] focuses on hospitalization notifications due to significant issues that can occur if a patient is not followed appropriately after acute care. The HL7 Da Vinci Project has responded to this need by supporting the effort to provide a FHIR based standard for adoption by both providers and payers.  It is anticipated that the burden of communicating the notification is also reduced by using FHIR.   This Guide defines a FHIR messaging based paradigm and framework to establish consistently adoptable and reproducible methods to exchange notifications. This framework is applied to the patient admission, transfer, and discharge events to generate unsolicited notifications to the care team.

### About This Guide

This Implementation Guide is supported by the [Da Vinci] initiative which is a private effort to accelerate the adoption of Health Level Seven International Fast Healthcare Interoperability Resources (HL7® FHIR®) as the standard to support and integrate value-based care (VBC) data exchange across communities. Like all Da Vinci Implementation Guides, it follows the [HL7 Da Vinci Guiding Principles] for exchange of patient health information.  The guide is based upon the prior work from the [US Core] and [Da Vinci Health Record Exchange (HRex)] Implementation Guides. Changes to this specification are managed by the sponsoring HL7 [Infrastructure and Messaging (INM)] workgroup and are incorporated as part of the standard HL7 balloting process. You can suggest changes to this specification by creating a *change request tracker* by clicking on the [Propose a Change] link at the bottom of any page.

<div class="bg-success" markdown="1">

### How to read this Guide

This Guide is divided into several pages which are listed at the top of each page in the menu bar.

- **[IG Home]**\: The home page provides the introduction and background for the Da Vinci Unsolicited Notifications Project.
- **Background**\: This menu item links to:
     - The Da Vinci Overview page provides an overview of the Da Vinci project, guidance on how to get involved, and where to find the use-case-specific IGs.
    - The Da Vinci Guiding Principles page describes key principles that underlie all Da Vinci interoperability.
- **Specification**\:
  - [Scope and Usage]\: This page delineates the Da Vinci Unsolicited Notifications use case.
  - [Roles and Actors]\: This page defines the roles and actors for Da Vinci Unsolicited Notifications.
  - [Workflow]\: This page documents the general notification workflow between unsolicited notification senders and receivers.
  - [Framework]\: This page defines the set of FHIR transactions and the FHIR artifacts used in a general framework to enable unsolicited notifications to care team members.
  - [Privacy, Safety, and Security]\: General security requirements and recommendations for {{site.title}} actors.
  - [Admit/Discharge/Transfer Use Case]\: Unsolicited notifications for the Admission/Transfer/Discharge use cases are defined using the Da Vinci Unsolicited Notifications framework.
- **[FHIR Artifacts]**\: This page introduces and provides links to the profiles, Operations, ValueSets and other FHIR artifacts used in this implementation guide.
- **Base Specs**\: This menu item links to the FHIR core specification and the US core specs underlying this IG.
- **Support**\: This menu item links to support and guidance, download links for this IG, and guidance on tools and support for Da Vinci implementers.
- **[Change Log]**\: This page documents the changes across the versions of Da Vinci Unsolicited Notifications implementation guide.

</div><!-- new-content -->

### Credits

 **This Implementation Guide was made possible by the thoughtful contributions of the following people and organizations:**

 - *The twenty-two founding [Da Vinci Project](http://www.hl7.org/about/davinci/index.cfm?ref=common) member organizations.*

 - *Eric Haas, Health eData Inc*
 - *Riki Merrick Vernetzt, LLC*
 - *Linda Michaelsen, Optum*
 - *Lloyd Mckenzie, Gevity*
 - *Robert Dieterle, EnableCare*
 - *Viet Nguyen, Stratametrics*
 - *Jocelyn Keegan, Point of Care Partners*

 ---

[^1]: [FHIR at Scale Taskforce (FAST)] is an ongoing initiatives to address how to define this secure infrastructure.

<br />

{% include link-list.md %}


---

// File: input/pagecontent/roles.md


<div class="strike" markdown="1">

### Roles

- **Sender** - the system responsible for sending the notifications, typically operated by the facility or organization where the event occurred
  - <span class="bg-success" markdown="1">Events may include requests or orders (for example, ordering a test for an infectious disease).</span><!-- new-content -->
- **Recipient** – the system responsible for receiving generated notifications from Senders
  - It is the responsibility of the Receiver to filter and sort the Da Vinci notifications it receives
<!-- - **Interested Entity** – a system that is interested in receiving notificationss for specific events, providers, patients or other predefined criteria -->
- **Intermediary** (e.g. ClearingHouse or HIE/HIN)– a system that can act as a central point to receive notifications from multiple Senders and distribute them to Recipients based on previously defined forwarding policies.
  - The Intermediary has the role and functional requirements of a Da Vinci Notifications Recipient
  - The Intermediary has the role and functional requirements of a Da Vinci Notifications Sender if it is forwarding messages using the framework defined in this guide.
  - <span class="bg-success" markdown="1">The FAST project's [Hybrid/Intermediary Exchange Implementation Guide] is out of scope for this guide. Although it provides guidance for enabling FHIR REST interactions across one or more intermediaries, it *does not* provide guidance for the use of FHIR Messaging.</span><!-- new-content -->

See the Da Vinci Notifications [Capability Statements] for details on the RESTful transactions and specific profiles applicable to each of these actors.

### Actors

</div>

There are many potential actors for the roles listed above:

<div class="row">
<div class="col-sm-4" markdown="1" style="background-color: Lightcyan;">

**Sender** - the system responsible for sending the notifications, typically operated by the facility or organization where the event occurred

---

- Hospital Information System (HIS) at Acute/Inpatient Facility
- EHR or Practice Management (PM) system at an Ambulatory/Outpatient (Specialist/PCP) office
- Post Acute Facility EHR or PM
- Health Plan and Contracted Entities

---
</div>

<div class="col-sm-4" markdown = "1" style="background-color: WhiteSmoke;">

**Intermediary**  – the system responsible for receiving generated notifications from Senders

---

- Health Information Exchange (HIE)
- <span class="bg-success" markdown="1">Health Information Network (HIN)</span><!-- new-content -->
- Clinically Integrated Network (CIN) systems
- National Networks (CareQuality, CommonWell, etc.)
- Specialized Notification Aggregators
- Health Plan and Contracted Entities

---

</div>
<div class="col-sm-4" markdown = "1" style="background-color: Lightcyan;">

**Recipient**  – the system responsible for receiving generated notifications from Senders

---

- Hospital Information System (HIS) at Acute/Inpatient Facility
- EHR or Practice Management (PM) system at an Ambulatory/Outpatient (Specialist/PCP) office
- Post Acute Facility EHR or PM
- Population Health Management systems
- Care Management/Care Coordination systems
- Health Plan and Contracted Entities

---

</div>

</div>

{% include link-list.md %}

---

// File: input/pagecontent/scope.md

### Scope

<span class="bg-success" markdown="1">The goal of this Implementation Guide is to define a technical framework for sending unsolicited notifications to the appropriate actors when triggered by an event.</span><!-- new-content --> Note that the information being communicated is a *notification* and not an *alert* which often has the expectation that something needs to be done. The assumption is that data is being transferred but not the responsibility.  The data recipient determines the action it takes based upon the information it receives.  The notifications should provide enough information to understand what the notification is about and to enable the Recipient to determine if and what additional steps they need to take in response to the notification.  For example, additional steps may include:

- a request for more information from the Sender through a FHIR RESTful query
- creation of an encounter record in the receiving system with appropriate provenance
- making the information available to CDS and other local services.

The following table summarizes the technical scope of this guide:

<div class="row">
<div class="col-sm-6" markdown="1" style="background-color: Lightcyan;">
**In Scope**

---

-  Define a common FHIR messaging Bundle that is exchanged for all Notifications.
-  Define the FHIR transactions and minimum operational behavior for the relevant Actors
- Define how to define and share the minimal data elements needed to support the information needs for an initial set of notifications and use cases starting with the patient admission and discharge event.  
-  Define how users requiring more data may follow up with additional queries.
- Describe basic Security and Privacy considerations

----

</div>
<div class="col-sm-6" markdown = "1" style="background-color: WhiteSmoke;">
**Out Of Scope**

---

- The business rules and workflow surrounding when a notification is triggered  
   - These are considered implementation specific details and include both what and exactly when an event occurs and who it is about and who gets the notification.
   - This includes notifications that are not associated with a particular event
- Creation and Management of the list of Recipients/Intermediaries[^1]
- How the Intermediary determines further processing of notification data
- Creation of the FHIR equivalent of v2 Messaging
- Distribution beyond FHIR Endpoints (e.g. SMS, email)
- Bidirectional Work, such as Gaps in Care
- Any notification that requires workflow management such as Task
- Complex content such as image files or scanned documents
- Besides the standard http response, the Recipient's workflow upon receipt of the notification.


---

</div>

</div>

<!--
The triggering of a notification allow for the appropriate notification to be sent at the appropriate time to provide important information to the end users without overwhelming the them causing "notification fatigue".
-->

### Scenarios

Notifications can be generated for many scenarios.

This Implementation Guide focus is the *Admission Transfer and Discharge* Scenario.  However, the framework defined in this guide is intended to support other scenarios such as those listed below.  There is no plan to publish additional use cases in this implementation guide. Additional scenarios may be published as supplemental non-balloted informative documents or use case specific Implementation Guides.

<div class="row">
<div class="col-sm-6" markdown="1" style="background-color: Lightcyan;">
**Initial Scenarios**

- Emergency and Inpatient Admissions
- Admission for Observation
- Admission for special services, such as outpatient surgery
- Encounter/Visit Notification for ambulatory services
- Transfer From emergency room to an inpatient status
- Transfer from inpatient to another facility like an inpatient rehab facility
- Discharges/Visit ends

---

</div>
<div class="col-sm-6" markdown = "1" style="background-color: WhiteSmoke;">
**Potential Future Scenarios**

---

-   Lab Results
-   Problem with Treatment -- such as drug recall, device recall/issue
-   Public Health Notification
-   Scheduled Appointment/Pre-Admit
-   Referral
-   Ordered Device/Biometric/Patient (i.e. Fit Bit)
-   Treatment Start/End
-   Change in Social Determinants of Health
-   Birth/Death
-   Coverage Start/End
-   Notification of Prior Authorization (Pended to Approved/Denied)
-   Pharmacy (Pickup, Restock, Dispense)
-   Notification of New Condition
-   Worker's Compensation Visits and Services
-   Changes in Care Team

---

</div>

</div>

{% include link-list.md %}

---

// File: input/pagecontent/searchparameters.md


   searchparameters page


---

// File: input/pagecontent/security.md

<div class="bg-success" markdown="1">
### Da Vinci HRex Security and Privacy Requirements

This implementation guide inherits all of the mandatory requirements and recommendations defined in the [HRex Security and Privacy] specification.   Implementers **SHALL** read and adhere to the guidance for the following topics:

- Da Vinci's Guiding Principles
- Statutes, Regulations
- Clinical Safety Guidelines
- FHIR Security and Implementation Guidance
- Security/Privacy-Related Technologies, Including Explicit Consent and Security - Labels
- Exchange Security
- Additionally Protected Information
- Security Contexts for Da Vinci IGs

### Supplemental Guidance
 
- [SMART Backend Services] **SHOULD** be used for system level authorization between Actors.
- A future workflow is likely to use the [FHIR at Scale Taskforce (FAST)] National Directory and a common trust framework for discovery and registration.
</div><!-- new-content -->

---

{% include link-list.md %}

---

// File: input/pagecontent/StructureDefinition-admit-notification-messageheader-intro.md


{% assign base_id = {{include.id}} %}
{% assign profile_url = {{site.data.structuredefinitions.[base_id].url}} %}



### Mandatory and Must Support Data Elements

The following data-elements are mandatory (i.e., data MUST be present) or must be supported if the data is present in the sending system ([Must Support] definition). They are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition] below provides the  formal summary, definitions, and  terminology requirements.

**Each {{{base_type}} must have:**

1. An event code of "notification-admit"
1. An event focus reference to the Da Vinci Admit/Discharge/Transfer Notification Encounter Profile which will be bundled in the message

{% include examples-note.md %}


{% include link-list.md %}


---

// File: input/pagecontent/StructureDefinition-adt-notification-condition-intro.md


{% assign base_id = {{include.id}} %}
{% assign profile_url = {{site.data.structuredefinitions.[base_id].url}} %}
 

### Mandatory and Must Support Data Elements

The following data-elements are mandatory (i.e., data MUST be present) or must be supported if the data is present in the sending system ([Must Support] definition). They are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition] below provides the  formal summary, definitions, and  terminology requirements.

**Each {{base_type}} must have:**

1. A reference to Da Vinci Admit/Discharge/Transfer Notification Encounter Profile which will be bundled in the message

**Additional Profile specific implementation guidance:**

- Note that for the admission/transfer/discharge scenario, `Condition.encounter` is a "reverse link" to the Encounter resource and cannot be traversed from the MessageHeader within the Message Bundle.
- The `reference` attribute is required for `Condition.encounter` so there is no question how to find the resource inside the bundle - the use of *only* an `identifier` attribute (in other words, a logical reference) is not permitted.

{% include examples-note.md %}

{% include link-list.md %}


---

// File: input/pagecontent/StructureDefinition-adt-notification-coverage-intro.md


{% assign base_id = {{include.id}} %}
{% assign profile_url = {{site.data.structuredefinitions.[base_id].url}} %}



### Mandatory and Must Support Data Elements

The following data-elements are mandatory (i.e., data MUST be present) or must be supported if the data is present in the sending system ([Must Support] definition). They are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition] below provides the  formal summary, definitions, and  terminology requirements.

**Each {{base_type}} must have:**

1. A beneficiary
1. A reference to a payor

**Each {{base_type}} must support:**

1. A business identifier
1. A subscriber id

**Additional Profile specific implementation guidance:**

- Note that for the admission/transfer/discharge scenario, the `Coverage.beneficiary` is a "reverse link" to the Patient resource and cannot be traversed from the MessageHeader within the Message Bundle.  There is no mechanism to enforce profiles in a message on a reverse link except via GraphDefinition.
- The `Coverage.payor` references the [HRex Organization Profile] profile to mandate an identifier and support additional identifier types.

{% include examples-note.md %}

{% include link-list.md %}


---

// File: input/pagecontent/StructureDefinition-adt-notification-encounter-intro.md


{% assign base_id = {{include.id}} %}
{% assign profile_url = {{site.data.structuredefinitions.[base_id].url}} %}



### Mandatory and Must Support Data Elements

The following data-elements are mandatory (i.e., data MUST be present) or must be supported if the data is present in the sending system ([Must Support] definition). They are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition] below provides the  formal summary, definitions, and  terminology requirements.

**Each {{base_type}} must have:**

1. A reference(s) to US Core Patient which will be bundled in the message

**Each {{base_type}} must support:**

1. A reference(s) to US Core Practitioner which will be bundled in the message
1. A reference(s) to US Core Location which will be bundled in the message

**Additional Profile specific implementation guidance:**

- Following [US Core guidance] the [Da Vinci Admit/Discharge/Transfer Notification Condition Profile] resource references the Encounter resource instead using `Encounter.diagnosis.condition` to create a forward link from the encounter to the related diagnoses.
- The `reference` attribute is required for `Encounter.subject`, `Encounter.participant.individual`, and `Encounter.location.location` so there is no question how to find the resource inside the bundle - the use of *only* an `identifier` attribute (in other words, a logical reference) is not permitted.

{% include examples-note.md %}

{% include link-list.md %}

---

// File: input/pagecontent/StructureDefinition-discharge-notification-messageheader-intro.md

{% assign base_id = {{include.id}} %}
{% assign profile_url = {{site.data.structuredefinitions.[base_id].url}} %}



### Mandatory and Must Support Data Elements

The following data-elements are mandatory (i.e., data MUST be present) or must be supported if the data is present in the sending system ([Must Support] definition). They are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition] below provides the  formal summary, definitions, and  terminology requirements.

**Each {{{base_type}} must have:**

1. An event code of "notification-discharge"
1. An event focus reference to the Da Vinci Admit/Discharge/Transfer Notification Encounter Profile which will be bundled in the message

{% include examples-note.md %}

{% include link-list.md %}

---

// File: input/pagecontent/StructureDefinition-notifications-bundle-intro.md

{% assign base_id = {{include.id}} %}
{% assign profile_url = {{site.data.structuredefinitions.[base_id].url}} %}



### Mandatory and Must Support Data Elements

The following data-elements are mandatory (i.e., data MUST be present) or must be supported if the data is present in the sending system ([Must Support] definition). They are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition] below provides the  formal summary, definitions, and  terminology requirements.

**Each {{{base_type}} must have:**

1. A logical id
1. A type code of "message"
1. A timestamp
1. An entry for the MessageHeader
1. An entry for the event or request resource reference by 'MessageHeader.focus'

**Additional Profile specific implementation guidance:**

The elements `Bundle.total`, `Bundle.entry.search`, `Bundle.entry.request`, and `Bundle.entry.response` are Cardinality = 0..0 (in other words, constrained out) because of the invariants `bdl-1`.`bdl-3`.`bdl-3`. and `bdl-4` defined in the FHIR Bundle resource.


{% include examples-note.md %}

{% include link-list.md %}


---

// File: input/pagecontent/StructureDefinition-notifications-messageheader-intro.md

{% assign base_id = {{include.id}} %}
{% assign profile_url = {{site.data.structuredefinitions.[base_id].url}} %}



### Mandatory and Must Support Data Elements

The following data-elements are mandatory (i.e., data MUST be present) or must be supported if the data is present in the sending system ([Must Support] definition). They are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition] below provides the  formal summary, definitions, and  terminology requirements.

**Each {{{base_type}} must have:**

1. A logical id
1. A code for the type of event
1. The message source application
1. A reference to the event's focus resource(s) which will be bundled in the message

**Each {{base_type}} must support:**

1. A destination
1. A reference to the sender which will be bundled in the message
1. A reference to author which will be bundled in the message
1. A reference to responsible party which will be bundled in the message

**Additional Profile specific implementation guidance:**

- The `destination.endpoint` and `source.endpoint` can be in any form of url the server understands (usually, https: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point
- The `reference` attribute is required for `MessageHeader.sender`, `MessageHeader.author`, `MessageHeader.responsible`, and `MessageHeader.focus` so there is no question how to find the resource inside the bundle - the use of *only* an `identifier` attribute (in other words, a logical reference) is not permitted.
- <span class="bg-success" markdown="1">This profile uses the [Alternate Reference] extension to allow a Device to be a sender or author, because in some automated systems there may be no human provider involved in certain notifications.  This pattern aligns with [FHIR R5 MessageHeader] for these elements.  See the [Admit Notification Message Bundle 02] for how this is implemented.</span><!-- new-content -->

{% include examples-note.md %}

{% include link-list.md %}


---

// File: input/pagecontent/StructureDefinition-transfer-notification-messageheader-intro.md

{% assign base_id = {{include.id}} %}
{% assign profile_url = {{site.data.structuredefinitions.[base_id].url}} %}

### Mandatory and Must Support Data Elements

The following data-elements are mandatory (i.e., data MUST be present) or must be supported if the data is present in the sending system ([Must Support] definition). They are presented below in a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition] below provides the  formal summary, definitions, and  terminology requirements.

**Each {{{base_type}} must have:**

1. An event code of "notification-transfer"
1. An event focus reference to the Da Vinci Admit/Discharge/Transfer Notification Encounter Profile which will be bundled in the message

{% include examples-note.md %}

{% include link-list.md %}

---

// File: input/pagecontent/usecases.md


###  Introduction

This use case demonstrates how the Da Vinci Notifications IG framework is used to define the Da Vinci Notification Bundle for admissions, transfers, and discharges and how to send a notification between a Sender and a Recipient/Intermediary.

### Use Case Background

The intent of this use case is to focus on the beginning and end of patient encounters.  The following list illustrates the type of events that this use case covers.[^2]

- admission to the emergency department
- admission to a hospital or equivalent facility as an inpatient
- admission to to a health care facility for a predetermined length of time, usually less than 24 hours
- admission to a hospital or equivalent facility for observation
- admission to a healthcare facility on a nonresident basis for example, for an outpatient medical procedure or surgery
- transfer from the emergency room to an inpatient status
- discharge to the patient's home environment
- discharge or transfer to a long-term care facility
- discharge or transfer to a post-acute care rehabilitation facility
- notification that the patient expired during the encounter

Having the ability to send notifications to update physicians and care management teams when a patient has a significant encounters (such as inpatient, ER visits, surgery etc.) is key to improving patient care.  The intent of these notifications is *not* to replace existing data exchange mechanisms, for example the discharge summary; but rather to notify of the event and provide enough data to gather more information, if desired. These notifications improve post-discharge transitions, promote communication between providers and encourage follow up care. The expectation for this use case is that the business rules for triggering the notification is the same that is used for an HL7 V2 ADT A01 message.  Figure 6 illustrates how some of the admit, transfer and discharge data elements corresponded to the resource in the message bundle.

<div markdown ="1" class="bg-info">
Transfer notifications should only be used if:
- Your organization calls it a "transfer" when the patient moves from the emergency room to an inpatient status
- Your organizations calls it a "transfer" when a patient moves from inpatient to another facility like an inpatient rehab facility.

You should not use transfer notifications:
- If your facility only uses *admit* and *discharge* transactions for the above scenarios
- For bed changes within the same facility, i.e. ICU to a step-down.
</div>

{% include img-portrait.html img="bundle_graphic.svg" caption="Figure 6" %}

<!--
The Provider is notified when:

- A Patient is admitted to the hospital for inpatient or emergency care
- A Patient is discharged from the hospital
- A Patient is transferred from one care unit to another
-->

### FHIR Resources for Admission, Transfer, and Discharge Notifications

To carry information regarding admission, transfer, and discharge event messages, the required resources for the message Bundle need to be defined.  The core components of the Bundle are defined in the [Framework] page and include the *MessageHeader* and the "root" resource represented by the  `MessageHeader.focus`.  For admission, transfer and discharge, the *Encounter* is the focus of the event as shown in {{ foo | filter: bar }}igure 7. For this scenario, the Da Vinci Admit/Discharge/Transfer Notification Encounter Profile - which is based on the US Core Encounter Profile - is used:

{% include img-portrait.html img="admit_message_graph1.svg" caption="Figure 7" %}

The other "required if present" resources defined in the framework are those referenced by `MessageHeader.author`, `MessageHeader.responsible`, `MessageHeader.sender` and those referenced by the Da Vinci Admit/Discharge/Transfer Notification Encounter Profile. These combine to make up a 'generic' Encounter message bundle structure illustrated in Figure 8 below:


{% include img-portrait.html img="admit_message_graph2.svg" caption="Figure 8" %}

The following additional resources (or rather profiles) have been determined to be "required if present" by the Da Vinci community to fulfill the data item requirements specific to admissions and discharge.

- US Core Condition Encounter Diagnosis Profile
- Da Vinci Admit/Discharge/Transfer Notification Coverage

{: #figure-9}
Adding these additional components results in the following resource graph showing all the required resources and their relationships for the admission and discharge notification use case shown in Figure 9:

{% include img-portrait.html img="admit_message_graph3.svg" caption="Figure 9" %}

An alternate representation of this graph is a table with each row representing an "edge" - an ordered pair of the form (source profile, target profile):

{:.grid}
{% include graphdefinition-adt-narrative-table.md %}


Note that an Admit/Discharge/Transfer Bundle may contain more or less resources than this graph illustrates since:  
a) having additional resources in the message bundle is not prohibited as long as the resources are reference by or reference another resource in the message bundle and  
b) not all the resources listed above may be present in the source system. For example, including a diagnosis on an admit/transfer/discharge notification allows the recipient to determine if additional action is required, but an encounter diagnosis may not be available until well after discharge. (For a more detailed discussion of when required resources may be absent, see the section on [Must Support])
{:.highlight-note}

### Admit/Discharge/Transfer Message Profiles

The following FHIR Profiles can be used to formally define this resource graph for the admission, transfer, and discharge events.  Note that except for the first profile listed below, these profiles constrain their references to other profiles within the same bundle.

- [Da Vinci Notifications Bundle Profile]
- [Da Vinci Admit Notification MessageHeader Profile]
- [Da Vinci Transfer Notification MessageHeader Profile]
- [Da Vinci Discharge Notification MessageHeader Profile]
- [Da Vinci Admit/Discharge/Transfer Notification Condition Profile]
- [Da Vinci Admit/Discharge/Transfer Notification Coverage Profile]
- [Da Vinci Admit/Discharge/Transfer Notification Encounter Profile]

<!--
#### MessageDefinition and GraphDefinition
{:.no_toc}

The Following MessageDefinition and GraphDefinition can be used to formally define this resource graph for the admission, transfer and discharge event:

**MessageDefinition**

{% include list-simple-messagedefinitions.xhtml %}

**GraphDefinition**

{% include list-simple-graphdefinitions.xhtml %}

-->
<!--
- \* it is questionable whether Encounter.diagnosis.condition has been implemented by the EHR vendors - need to discuss with vendors.
- \** There is no Practitioner.endpoint element and an extension may be needed to implement.
- \*** MessageDefinition is used to formally define the Message content for a given event (e.g, an inpatient admission, transfer, or discharge).  It defines the event and the focal and non focal Resources/Profiles that make up the message:
-->

### Examples

Da Vinci Notification Bundles such as these examples can be assembled based on any of the above definitions.

{% include list-simple-bundles.xhtml %}

### Pushing Unsolicited Admit/Discharge/Transfer Notification

In the interaction shown in Figure 10, the HealthCare facility is acting in the role of the Notification Sender and the Notification Recipient can be any of the actors listed on the home page.  To notify the Notification Recipients/Intermediary of an admit or discharge event, the Notification Sender uses $process-message operation to submit the Notification Message to appropriate FHIR endpoints. Not shown in Figure 10 is that when the Intermediary successfully receives and processes the notifications, it subsequently forwards the data to the end users.

{% include img-portrait.html img="$process_message_admit_wf.svg" caption="Figure 10" %}

---

#### Example Transactions

The following example transactions show examples of using the `$process-message` operation to send a notification messages.

{% include examplebutton_default.html example="process-message-admit-example" b_title = "Click Here To See Example Da Vinci Admission Notification Message" %}

{% include examplebutton_default.html example="process-message-transfer-example" b_title = "Click Here To See Example Da Vinci Transfer Notification Message" %}

{% include examplebutton_default.html example="process-message-discharge-example" b_title = "Click Here To See Example Da Vinci Discharge Notification Message" %}

---

[^2]: Based on the [V3 Value SetActEncounterCode]  and [Discharge disposition] value sets.

<div class="bg-success" markdown="1">

### Direct ADT to Da Vinci Notification Mappings

Since May 1, 2021, CMS has required that hospitals send notifications
electronically for admit, transfer, and discharge events to the patient's
care team members, for which most implementations currently use HL7 V2 ADT
messages (V2). As a result, [DirectTrust](https://directtrust.org/who-we-are),
a consensus body of forty organizations and individuals representing the
care continuum collaborated in creating an Implementation Guide
using [Direct Secure
Messaging](https://directtrust.org/what-we-do/direct-secure-messaging) for
both senders and receivers. The [Event Notifications via the Direct
Standard®](https://directtrust.org/standards/event-notifications-via-direct)
defines the necessary data element to cover the CMS rules, maps those to
the V2 elements in several ADT message structures and provides the value
sets for coded elements.

The following table shows the mapping between the Direct ADT message elements and their respective elements in Da Vinci Notification Mappings for the Admit-Transfer-Discharge Use case. In addition, the [Direct ADT to Da Vinci Alerts ConceptMap] maps the value set concepts between the two product families. A more detailed mapping can be downloaded as an [excel](tables/DirectToDaVinciMap.xlsx) file.

{% include adt-mapping-table-generator.md %}

</div><!-- new-content -->

{% include link-list.md %}


---

// File: input/pagecontent/workflow.md

### Workflow Overview

See the [Framework] page for a detailed description of the technical workflow and API guidance.
{:.highlight-note}

Figure 1 below illustrates the general notification workflow of a Sender sending an unsolicited notification to a Receiver or Intermediary when triggered by an event or request.

{% include img.html img="notification_wf1.svg" caption="Figure 1" %}

1. An event or request triggers a notification to be sent from a Sender (aka source application) to a Recipient or Intermediary (aka destination application).  The notification includes common information shared across all Da Vinci notifications and use case dependent information.
2. The Sender notifies the Recipient by sending an "unsolicited" notification to the Recipient's FHIR endpoint.
3. The notification is processed according the Receiver or Intermediary internal business rules.

### Intermediary Workflow

Figure 2 shows the process where an Intermediary, having previously received a notification, forwards the notification to the Recipient. In this case, the Intermediary is responsible for the redistribution of the data.  Note that it may customize the data based on end user needs.  Although not represented in the figure, there may be multiple Intermediaries.

{% include img.html img="notification_wf2.svg" caption="Figure 2" %}

{% include link-list.md %}


---

// File: input/_resources/README.md

This folder contains 'private' resources used for publishing and hidden from the reader.  Won't show up in the IG.


---

// File: input/history/history.md

---
title: Version History
layout: default
active: history
---

[Short descripton of guide here.]

This table provides a list of all the versions of FHIR versions of the {{site.data.fhir.igName}} Implementation Guide that are available. See [FHIR Releases and Versioning](http://build.fhir.org/versions.html#versions) for a description of how the versioning of this Implementation Guide is managed.  As well, this guide follow the general definitions and guidelines outlined in [Rules for Inter-version change](http://build.fhir.org/versions.html#change):

|Date|Version|Description|
|---|---|---|
|**Current Versions**|
|n/a|n/a|No published version yet|
|[current](#)|(last commit)|Current Development build (may be incoherent and change rapidly)|
|**STU1 sequence**|
|[mmm yyyy](#)|0.1.0| Release n.n.n|


---

// File: input/includes/adt-mapping-table-generator.md

<!-- This liquid script creates the Direct ADT notifications mapping table. The source table for it is the file input/data/DirectToDaVinciMap.csv
-->

{% assign rows = site.data.DirectToDaVinciMap %}

<table class="grid" markdown="1">
{% for item in rows %}
    {% if forloop.first %}
        <thead>
        <tr>
        <!-- <th>Row #</th> -->
        <th>Direct Trust ADT Message Data Element</th>
        <th>Da Vinci Notification Message Element</th>
        <th>Mapping Comments</th>
        </tr>
        </thead>
        <tbody>
    {% endif %}

    {% assign adt = item["V2 Segment Name"] | append: "-"] | append: item[" V2 Field Identifier"] | append: " "] | append: item["Data element name"] %} 
    {% assign dv_notification_path = item["joined"] %}
    {% assign comments = item["FHIR Value set, other notes"] %}
    <tr>
    <!-- <td>{{forloop.index}}</td> -->
    <td>{{adt}}</td>
    <td>{{dv_notification_path | safe }}</td>
    <td>{{comments}}</td>
    </tr>
    
    {% if forloop.last %}
        </tbody>
        </table>
    {% endif %}
{% endfor %}




---

// File: input/includes/capstatements.md


There are 3 Capability Statements defining computable definitions of FHIR conformance expectations of the RESTful transactions and specific profiles for each of the Da Vinci Notification Roles. They provide the base conformance rules that may be used for system compatibility testing, code generation, or as the basis for a conformance assessment.

{% include list-simple-capabilitystatements.xhtml %}

<br />

### The following table summarizes how these CapabilityStatements applies to the Da Vinci Notification Roles

|Role|server-mode|client-mode|
| --- | :---: | :---: |
|Sender |-| Da Vinci Notification Sender|
|Intermediary |Da Vinci Notification Receiver| Da Vinci Notification Forwarder|
|Recipient |Da Vinci Notification Receiver |-|
{: .grid}

<br />


---

// File: input/includes/graphdefinition-adt-narrative-table.md


|Link|Source Profile|Path|Target Profile |Min|Max|
|---|---|---|---|---|---|
|1|Da Vinci Notification MessageHeader Profile|MessageHeader.focus|Da Vinci Admit/Discharge/Transfer Notification Encounter Profile|1|1|
|2|Da Vinci Admit/Discharge/Transfer Notification Encounter Profile|Encounter.location|US Core Location Profile|1|*|
|3|Da Vinci Admit/Discharge/Transfer Notification Encounter Profile|Encounter.participant.individual|US Core Practitioner Profile|0|*|
|4|Da Vinci Admit/Discharge/Transfer Notification Encounter Profile|Encounter.subject|US Core Patient Profile|1|1|
|5|Da Vinci Admit/Discharge/Transfer Notification Coverage Profile|Coverage.beneficary|US Core Patient Profile|0|1|
|6|US Core Condition Encounter Diagnosis Profile|Condition.encounter|Da Vinci Admit/Discharge/Transfer Notification Encounter Profile|0|*|
|7|Da Vinci Notification MessageHeader Profile|MessageHeader.sender|US Core Practitioner Profile\|US Core PractitionerRole Profile\|US Core Organization Profile|0|1|
|8|Da Vinci Notification MessageHeader Profile|MessageHeader.responsible|US Core Practitioner Profile\|US Core PractitionerRole Profile\|US Core Organization Profile|0|1|
|9|Da Vinci Notification MessageHeader Profile|MessageHeader.author|US Core Practitioner Profile\|US Core PractitionerRole Profile|0|1|


---

// File: input/includes/link-list.md

<!-- FHIR Core Resources -->
{% include r4-link-list.md %}
<!-- IG Pages (Including IG Artifacts -->
{% include page-link-list.md %}
["black box"]: https://en.wikipedia.org/wiki/Black_box
[2019 CMS 45 CFR Part 156 NPRM]: https://www.federalregister.gov/d/2020-05050
[Admit Notification Intermediate Transmit Bundle]:Bundle-admit-notification-intermediate-transmit-bundle.html
[Alternate Reference]: http://hl7.org/fhir/StructureDefinition/alternate-reference
[Argonaut Clinical Data Subscriptions]: http://argonautwiki.hl7.org/index.php?title=Argonaut_2019_Projects#Clinical_Data_Subscriptions
[Basic Provenance for HIE Redistribution and Transformation]: {{site.data.fhir.uscore7}}/basic-provenance.html#hie-redistribution
[Bundle Admit Notification Message Bundle 01]: Bundle-admit-notification-message-bundle-01.html
[Bundle Discharge Notification Message Bundle 01]: Bundle-discharge-notification-message-bundle-01.html
[Bundle]: {{site.data.fhir.path}}bundle.html
[Capability Statements]: artifacts.html#1
[Da Vinci Admit Notification Message Definition]: MessageDefinition-notification-admit.html
[Da Vinci Discharge Notification Message Definition]: MessageDefinition-notification-discharge.html
[Da Vinci Health Record Exchange (HRex)]: http://hl7.org/fhir/us/davinci-hrex/index.html
[Da Vinci Notification Event CodeSystem]: CodeSystem-notification-event.html
[Da Vinci Notifications CapabilityStatements]: capstatements.html
[Da Vinci Notifications GraphDefinition Profile]: StructureDefinition-notifications-graphdefinition.html
[Da Vinci Notifications MessageDefinition Profile]: StructureDefinition-notifications-messagedefinition.html
[Da Vinci Notifications Must Support Extension]: StructureDefinition-extension-mustSupport.html
[Da Vinci]: http://www.hl7.org/about/davinci/index.cfm?ref=common
[Discharge disposition]: http://hl7.org/fhir/ValueSet/encounter-discharge-disposition
[Downloads]: downloads.html "Downloads Page"
[Dynamic Registration for SMART Apps]: http://www.udap.org/udap-dynamic-client-registration.html
[ElementDefinition.mustSupport]: {{site.data.fhir.path}}elementdefinition-definitions.html#ElementDefinition.mustSupport
[Endpoint]: {{site.data.fhir.path}}bundle.html
[Example Transaction]: usecases.html#example-transaction
[Examples Transactions]: usecases.html#example-transactions
[Examples]: artifacts.html#5
[FHIR Artifacts]: artifacts.html
[FHIR Bulk Data Access (Flat FHIR)]: http://hl7.org/fhir/uv/bulkdata/STU1/
[FHIR Data Segmentation for Privacy project]: https://www.hl7.org/special/Committees/projman/searchableProjectIndex.cfm?action=edit&ProjectNumber=1549
[FHIR Messaging paradigm]: {{site.data.fhir.path}}messaging.html
[FHIR R4 core]: {{site.data.fhir.path}}fhir-spec.zip
[FHIR R5 MessageHeader]: http://hl7.org/fhir/R5/messageheader.html
[FHIR RESTful operation]: {{site.data.fhir.path}}operations.html
[FHIR Subscription Based Notification]: guidance.html#fhir-subscription-based-notification
[FHIR at Scale Taskforce (FAST)]: https://confluence.hl7.org/display/FAST/FAST+Projects
[FHIR core downloads]: {{site.data.fhir.path}}downloads.html
[FHIR message Bundle]: {{site.data.fhir.path}}bundle.html#message
[FHIR messaging]: {{site.data.fhir.path}}messaging.html
[FHIR security guidance]:{{site.data.fhir.path}}security.html
[Formal Profile Definition]: #profile
[Framework]: guidance.html  "General Framework Page"
[HL7 Da Vinci Guiding Principles]: https://confluence.hl7.org/display/DVP/Da+Vinci+Clinical+Advisory+Council+Members?preview=/66940155/66942916/Guiding%20Principles%20for%20Da%20Vinci%20Implementation%20Guides.pdf
[HRex Organization Profile]: {{site.data.fhir.hrex}}/StructureDefinition-hrex-organization.html
[HRex Security and Privacy]: {{site.data.fhir.hrex}}/security.html
[Hybrid/Intermediary Exchange Implementation Guide]: http://hl7.org/fhir/us/exchange-routing/index.html
[IG Home]: index.html "Home Page"
[Infrastructure and Messaging (INM)]: http://www.hl7.org/Special/committees/inm/index.cfm
[Message Definitions]: bundles.html "Bundle Definitions Page"
[Messageheader Admit Notification Messageheader 01]: MessageHeader-admit-notification-messageheader-01.html
[Messageheader Discharge Notification Messageheader 01]: MessageHeader-discharge-notification-messageheader-01.html
[Must Support]: guidance.html#must-support
[MustSupport flag]: {{site.data.fhir.path}}profiling.html#mustsupport
[NotificationAdmitDischarge]: GraphDefinition-admit-discharge.html
[Operations]: artifacts.html
[Profiles]: artifacts.html#2
[Profiling]: {{site.data.fhir.path}}profiling.html
[Propose a Change]: https://jira.hl7.org/issues/?filter=12844&jql=project%20%3D%20FHIR%20AND%20Specification%20%3D%20%22US%20Da%20Vinci%20Alerts%20(FHIR)%20%5BFHIR-us-davinci-alerts%5D%22
[Push Alert Notification]: guidance.html#push-alert-notification
[R5 cross-version extension]: {{site.data.fhir.path}}security.html
[SMART Application Launch Framework Implementation Guide Release 1.0.0]: http://www.hl7.org/fhir/smart-app-launch/
[SMART Backend Services]: https://www.hl7.org/fhir/smart-app-launch/backend-services.html#backend-services
[Standard error responses]: {{site.data.fhir.path}}messageheader-operation-process-message.html
[Terminology]: artifacts.html#3
[US Core Condition Encounter Diagnosis Profile]: {{site.data.fhir.uscore7}}StructureDefinition-us-core-condition-encounter-diagnosis.html
[US Core Encounter Profile]: {{site.data.fhir.uscore7}}StructureDefinition-us-core-encounter.html
[US Core Location Profile]: {{site.data.fhir.uscore7}}StructureDefinition-us-core-location.html
[US Core Must Support]: {{site.data.fhir.uscore7}}/must-support.html
[US Core Patient Profile]: {{site.data.fhir.uscore7}}StructureDefinition-us-core-patient.html
[US Core Provenance Profile]: {{site.data.fhir.uscore7}}/StructureDefinition-us-core-provenance.html
[US Core guidance]: {{site.data.fhir.uscore7}}/StructureDefinition-us-core-condition-encounter-diagnosis.html#mandatory-and-must-support-data-elements
[US Core]: {{site.data.fhir.uscore7}}/index.html
[V3 Value SetActEncounterCode]: http://terminology.hl7.org/ValueSet/v3-ActEncounterCode
[`$process-message`]: {{site.data.fhir.path}}messageheader-operation-process-message.html
[`collection`]: {{site.data.fhir.path}}http.html#collection
[aggregation]: {{site.data.fhir.path}}elementdefinition-definitions.html#ElementDefinition.type.aggregation
[figure 9]: usecases.html#figure-9
[instructions on how to use it]: https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator
[notifications by messaging]: {{site.data.fhir.path}}subscription.html#messaging
[operation]: {{site.data.fhir.path}}operations.html
[reliable delivery]: {{site.data.fhir.path}}messaging.html#reliable
[validator]: https://fhir.github.io/latest-ig-validator/org.hl7.fhir.validator.jar


---

// File: input/includes/page-link-list.md

[Table of Contents]: toc.html
[Home]: index.html
[Scope and Usage]: scope.html
[Roles and Actors]: roles.html
[Workflow]: workflow.html
[Framework]: guidance.html
[Admit/Discharge/Transfer Use Case]: usecases.html
[Privacy, Safety, and Security]: security.html
[Downloads]: downloads.html
[Change Log]: changes.html
[Unsolicited Notification ImplementationGuide Resource]: ImplementationGuide-hl7.fhir.us.davinci-alerts.html
[Artifacts Summary]: artifacts.html
[Da Vinci Notifications Bundle Profile]: StructureDefinition-notifications-bundle.html
[Da Vinci Notifications Bundle Profile - Definitions]: StructureDefinition-notifications-bundle-definitions.html
[Da Vinci Notifications Bundle Profile - Mappings]: StructureDefinition-notifications-bundle-mappings.html
[Da Vinci Notifications Bundle Profile - Testing]: StructureDefinition-notifications-bundle-testing.html
[Da Vinci Notifications Bundle Profile - Examples]: StructureDefinition-notifications-bundle-examples.html
[Da Vinci Notifications Bundle Profile - XML Representation]: StructureDefinition-notifications-bundle.profile.xml.html
[Da Vinci Notifications Bundle Profile - JSON Representation]: StructureDefinition-notifications-bundle.profile.json.html
[Da Vinci Notifications Bundle Profile - TTL Representation]: StructureDefinition-notifications-bundle.profile.ttl.html
[Da Vinci Notifications MessageHeader Profile]: StructureDefinition-notifications-messageheader.html
[Da Vinci Notifications MessageHeader Profile - Definitions]: StructureDefinition-notifications-messageheader-definitions.html
[Da Vinci Notifications MessageHeader Profile - Mappings]: StructureDefinition-notifications-messageheader-mappings.html
[Da Vinci Notifications MessageHeader Profile - Testing]: StructureDefinition-notifications-messageheader-testing.html
[Da Vinci Notifications MessageHeader Profile - XML Representation]: StructureDefinition-notifications-messageheader.profile.xml.html
[Da Vinci Notifications MessageHeader Profile - JSON Representation]: StructureDefinition-notifications-messageheader.profile.json.html
[Da Vinci Notifications MessageHeader Profile - TTL Representation]: StructureDefinition-notifications-messageheader.profile.ttl.html
[Da Vinci Admit Notification MessageHeader Profile]: StructureDefinition-admit-notification-messageheader.html
[Da Vinci Admit Notification MessageHeader Profile - Definitions]: StructureDefinition-admit-notification-messageheader-definitions.html
[Da Vinci Admit Notification MessageHeader Profile - Mappings]: StructureDefinition-admit-notification-messageheader-mappings.html
[Da Vinci Admit Notification MessageHeader Profile - Testing]: StructureDefinition-admit-notification-messageheader-testing.html
[Da Vinci Admit Notification MessageHeader Profile - XML Representation]: StructureDefinition-admit-notification-messageheader.profile.xml.html
[Da Vinci Admit Notification MessageHeader Profile - JSON Representation]: StructureDefinition-admit-notification-messageheader.profile.json.html
[Da Vinci Admit Notification MessageHeader Profile - TTL Representation]: StructureDefinition-admit-notification-messageheader.profile.ttl.html
[Da Vinci Admit/Discharge/Transfer Notification Condition Profile]: StructureDefinition-adt-notification-condition.html
[Da Vinci Admit/Discharge/Transfer Notification Condition Profile - Definitions]: StructureDefinition-adt-notification-condition-definitions.html
[Da Vinci Admit/Discharge/Transfer Notification Condition Profile - Mappings]: StructureDefinition-adt-notification-condition-mappings.html
[Da Vinci Admit/Discharge/Transfer Notification Condition Profile - Testing]: StructureDefinition-adt-notification-condition-testing.html
[Da Vinci Admit/Discharge/Transfer Notification Condition Profile - XML Representation]: StructureDefinition-adt-notification-condition.profile.xml.html
[Da Vinci Admit/Discharge/Transfer Notification Condition Profile - JSON Representation]: StructureDefinition-adt-notification-condition.profile.json.html
[Da Vinci Admit/Discharge/Transfer Notification Condition Profile - TTL Representation]: StructureDefinition-adt-notification-condition.profile.ttl.html
[Da Vinci Admit/Discharge/Transfer Notification Coverage Profile]: StructureDefinition-adt-notification-coverage.html
[Da Vinci Admit/Discharge/Transfer Notification Coverage Profile - Definitions]: StructureDefinition-adt-notification-coverage-definitions.html
[Da Vinci Admit/Discharge/Transfer Notification Coverage Profile - Mappings]: StructureDefinition-adt-notification-coverage-mappings.html
[Da Vinci Admit/Discharge/Transfer Notification Coverage Profile - Testing]: StructureDefinition-adt-notification-coverage-testing.html
[Da Vinci Admit/Discharge/Transfer Notification Coverage Profile - XML Representation]: StructureDefinition-adt-notification-coverage.profile.xml.html
[Da Vinci Admit/Discharge/Transfer Notification Coverage Profile - JSON Representation]: StructureDefinition-adt-notification-coverage.profile.json.html
[Da Vinci Admit/Discharge/Transfer Notification Coverage Profile - TTL Representation]: StructureDefinition-adt-notification-coverage.profile.ttl.html
[Da Vinci Admit/Discharge/Transfer Notification Encounter Profile]: StructureDefinition-adt-notification-encounter.html
[Da Vinci Admit/Discharge/Transfer Notification Encounter Profile - Definitions]: StructureDefinition-adt-notification-encounter-definitions.html
[Da Vinci Admit/Discharge/Transfer Notification Encounter Profile - Mappings]: StructureDefinition-adt-notification-encounter-mappings.html
[Da Vinci Admit/Discharge/Transfer Notification Encounter Profile - Testing]: StructureDefinition-adt-notification-encounter-testing.html
[Da Vinci Admit/Discharge/Transfer Notification Encounter Profile - XML Representation]: StructureDefinition-adt-notification-encounter.profile.xml.html
[Da Vinci Admit/Discharge/Transfer Notification Encounter Profile - JSON Representation]: StructureDefinition-adt-notification-encounter.profile.json.html
[Da Vinci Admit/Discharge/Transfer Notification Encounter Profile - TTL Representation]: StructureDefinition-adt-notification-encounter.profile.ttl.html
[Da Vinci Discharge Notification MessageHeader Profile]: StructureDefinition-discharge-notification-messageheader.html
[Da Vinci Discharge Notification MessageHeader Profile - Definitions]: StructureDefinition-discharge-notification-messageheader-definitions.html
[Da Vinci Discharge Notification MessageHeader Profile - Mappings]: StructureDefinition-discharge-notification-messageheader-mappings.html
[Da Vinci Discharge Notification MessageHeader Profile - Testing]: StructureDefinition-discharge-notification-messageheader-testing.html
[Da Vinci Discharge Notification MessageHeader Profile - XML Representation]: StructureDefinition-discharge-notification-messageheader.profile.xml.html
[Da Vinci Discharge Notification MessageHeader Profile - JSON Representation]: StructureDefinition-discharge-notification-messageheader.profile.json.html
[Da Vinci Discharge Notification MessageHeader Profile - TTL Representation]: StructureDefinition-discharge-notification-messageheader.profile.ttl.html
[Da Vinci Transfer Notification MessageHeader Profile]: StructureDefinition-transfer-notification-messageheader.html
[Da Vinci Transfer Notification MessageHeader Profile - Definitions]: StructureDefinition-transfer-notification-messageheader-definitions.html
[Da Vinci Transfer Notification MessageHeader Profile - Mappings]: StructureDefinition-transfer-notification-messageheader-mappings.html
[Da Vinci Transfer Notification MessageHeader Profile - Testing]: StructureDefinition-transfer-notification-messageheader-testing.html
[Da Vinci Transfer Notification MessageHeader Profile - XML Representation]: StructureDefinition-transfer-notification-messageheader.profile.xml.html
[Da Vinci Transfer Notification MessageHeader Profile - JSON Representation]: StructureDefinition-transfer-notification-messageheader.profile.json.html
[Da Vinci Transfer Notification MessageHeader Profile - TTL Representation]: StructureDefinition-transfer-notification-messageheader.profile.ttl.html
[Da Vinci Notification Admit Event ValueSet]: ValueSet-notification-admit-event.html
[Da Vinci Notification Admit Event ValueSet - Testing]: ValueSet-notification-admit-event-testing.html
[Da Vinci Notification Admit Event ValueSet - XML Representation]: ValueSet-notification-admit-event.xml.html
[Da Vinci Notification Admit Event ValueSet - JSON Representation]: ValueSet-notification-admit-event.json.html
[Da Vinci Notification Admit Event ValueSet - TTL Representation]: ValueSet-notification-admit-event.ttl.html
[Da Vinci Notification Discharge Event ValueSet]: ValueSet-notification-discharge-event.html
[Da Vinci Notification Discharge Event ValueSet - Testing]: ValueSet-notification-discharge-event-testing.html
[Da Vinci Notification Discharge Event ValueSet - XML Representation]: ValueSet-notification-discharge-event.xml.html
[Da Vinci Notification Discharge Event ValueSet - JSON Representation]: ValueSet-notification-discharge-event.json.html
[Da Vinci Notification Discharge Event ValueSet - TTL Representation]: ValueSet-notification-discharge-event.ttl.html
[Da Vinci Notification Event ValueSet]: ValueSet-notification-event.html
[Da Vinci Notification Event ValueSet - Testing]: ValueSet-notification-event-testing.html
[Da Vinci Notification Event ValueSet - XML Representation]: ValueSet-notification-event.xml.html
[Da Vinci Notification Event ValueSet - JSON Representation]: ValueSet-notification-event.json.html
[Da Vinci Notification Event ValueSet - TTL Representation]: ValueSet-notification-event.ttl.html
[Da Vinci Notification Transfer Event ValueSet]: ValueSet-notification-transfer-event.html
[Da Vinci Notification Transfer Event ValueSet - Testing]: ValueSet-notification-transfer-event-testing.html
[Da Vinci Notification Transfer Event ValueSet - XML Representation]: ValueSet-notification-transfer-event.xml.html
[Da Vinci Notification Transfer Event ValueSet - JSON Representation]: ValueSet-notification-transfer-event.json.html
[Da Vinci Notification Transfer Event ValueSet - TTL Representation]: ValueSet-notification-transfer-event.ttl.html
[Da Vinci Event CodeSystem Notification]: CodeSystem-notification-event.html
[Da Vinci Event CodeSystem Notification - Testing]: CodeSystem-notification-event-testing.html
[Da Vinci Event CodeSystem Notification - XML Representation]: CodeSystem-notification-event.xml.html
[Da Vinci Event CodeSystem Notification - JSON Representation]: CodeSystem-notification-event.json.html
[Da Vinci Event CodeSystem Notification - TTL Representation]: CodeSystem-notification-event.ttl.html
[Admit Notification Intermediate Translate Bundle]: Bundle-admit-notification-intermediate-translate-bundle.html
[Admit Notification Intermediate Translate Bundle - XML Representation]: Bundle-admit-notification-intermediate-translate-bundle.xml.html
[Admit Notification Intermediate Translate Bundle - JSON Representation]: Bundle-admit-notification-intermediate-translate-bundle.json.html
[Admit Notification Intermediate Translate Bundle - TTL Representation]: Bundle-admit-notification-intermediate-translate-bundle.ttl.html
[Admit Notification Intermediate Transmit Bundle]: Bundle-admit-notification-intermediate-transmit-bundle.html
[Admit Notification Intermediate Transmit Bundle - XML Representation]: Bundle-admit-notification-intermediate-transmit-bundle.xml.html
[Admit Notification Intermediate Transmit Bundle - JSON Representation]: Bundle-admit-notification-intermediate-transmit-bundle.json.html
[Admit Notification Intermediate Transmit Bundle - TTL Representation]: Bundle-admit-notification-intermediate-transmit-bundle.ttl.html
[Admit Notification Message Bundle 01]: Bundle-admit-notification-message-bundle-01.html
[Admit Notification Message Bundle 01 - XML Representation]: Bundle-admit-notification-message-bundle-01.xml.html
[Admit Notification Message Bundle 01 - JSON Representation]: Bundle-admit-notification-message-bundle-01.json.html
[Admit Notification Message Bundle 01 - TTL Representation]: Bundle-admit-notification-message-bundle-01.ttl.html
[Admit Notification Message Bundle 02]: Bundle-admit-notification-message-bundle-02.html
[Admit Notification Message Bundle 02 - XML Representation]: Bundle-admit-notification-message-bundle-02.xml.html
[Admit Notification Message Bundle 02 - JSON Representation]: Bundle-admit-notification-message-bundle-02.json.html
[Admit Notification Message Bundle 02 - TTL Representation]: Bundle-admit-notification-message-bundle-02.ttl.html
[Discharge Notification Message Bundle]: Bundle-discharge-notification-message-bundle-01.html
[Discharge Notification Message Bundle - XML Representation]: Bundle-discharge-notification-message-bundle-01.xml.html
[Discharge Notification Message Bundle - JSON Representation]: Bundle-discharge-notification-message-bundle-01.json.html
[Discharge Notification Message Bundle - TTL Representation]: Bundle-discharge-notification-message-bundle-01.ttl.html
[Transfer Notification Message Bundle]: Bundle-transfer-notification-message-bundle-01.html
[Transfer Notification Message Bundle - XML Representation]: Bundle-transfer-notification-message-bundle-01.xml.html
[Transfer Notification Message Bundle - JSON Representation]: Bundle-transfer-notification-message-bundle-01.json.html
[Transfer Notification Message Bundle - TTL Representation]: Bundle-transfer-notification-message-bundle-01.ttl.html
[Notification Forwarder CapabilityStatement]: CapabilityStatement-notification-forwarder.html
[Notification Forwarder CapabilityStatement - Testing]: CapabilityStatement-notification-forwarder-testing.html
[Notification Forwarder CapabilityStatement - XML Representation]: CapabilityStatement-notification-forwarder.xml.html
[Notification Forwarder CapabilityStatement - JSON Representation]: CapabilityStatement-notification-forwarder.json.html
[Notification Forwarder CapabilityStatement - TTL Representation]: CapabilityStatement-notification-forwarder.ttl.html
[Notification Receiver CapabilityStatement]: CapabilityStatement-notification-receiver.html
[Notification Receiver CapabilityStatement - Testing]: CapabilityStatement-notification-receiver-testing.html
[Notification Receiver CapabilityStatement - XML Representation]: CapabilityStatement-notification-receiver.xml.html
[Notification Receiver CapabilityStatement - JSON Representation]: CapabilityStatement-notification-receiver.json.html
[Notification Receiver CapabilityStatement - TTL Representation]: CapabilityStatement-notification-receiver.ttl.html
[Notification Sender CapabilityStatement]: CapabilityStatement-notification-sender.html
[Notification Sender CapabilityStatement - Testing]: CapabilityStatement-notification-sender-testing.html
[Notification Sender CapabilityStatement - XML Representation]: CapabilityStatement-notification-sender.xml.html
[Notification Sender CapabilityStatement - JSON Representation]: CapabilityStatement-notification-sender.json.html
[Notification Sender CapabilityStatement - TTL Representation]: CapabilityStatement-notification-sender.ttl.html
[Direct ADT to Da Vinci Alerts ConceptMap]: ConceptMap-direct-alerts.html
[Direct ADT to Da Vinci Alerts ConceptMap - Testing]: ConceptMap-direct-alerts-testing.html
[Direct ADT to Da Vinci Alerts ConceptMap - XML Representation]: ConceptMap-direct-alerts.xml.html
[Direct ADT to Da Vinci Alerts ConceptMap - JSON Representation]: ConceptMap-direct-alerts.json.html
[Direct ADT to Da Vinci Alerts ConceptMap - TTL Representation]: ConceptMap-direct-alerts.ttl.html


---

// File: input/includes/process-message-admit-example.md


### Examples
{:.no_toc}

**Scenario:**

'Patient Y has been admitted to Provider X 's facility.  Acting in the role of Sender, Provider X alerts Payer Z, who is acting in the Recipient role, of the admission.  The Notification is transacted as the `[$process-message]` operation. The body of the operation is a Message Bundle containing:'

1. The Message Header which is the first resource in the bundle and contains the the message event code - that identifies the nature of the notification.
1. The other resources in the bundle depend on the type of the notification use case and may be defined by FHIR Profiles.

An HTTP Status success code is returned on successful submission.

**Push Notification using the $process-message**

`POST [base]/$process-message`

**Request body**

~~~
{% include_relative Bundle-admit-notification-message-bundle-01.json %}
~~~

**Response Headers:**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**OperationOutcome:**

~~~
{% include notification-200-oo.json %}
~~~


---

// File: input/includes/process-message-discharge-example.md


### Examples
{:.no_toc}

**Scenario:**

Patient Y has been discharged from Provider X 's facility.  Acting in the role of Sender, Provider X notifies Payer Z, who is acting in the Recipient role, of the discharge.  The Notification is transacted as the `[$process-message]` operation. The body of the operation is a Message Bundle containing:

1. The Message Header which is the first resource in the bundle and contains the the message event code - that identifies the nature of the notification.
1. The other resources in the bundle depend on the type of the notification use case and may be defined by the FHIR Profiles.

An HTTP Status success code is returned on successful submission.

**Push Notification using the $process-message**

`POST [base]/$process-message`

**Request body**

~~~
{% include_relative Bundle-discharge-notification-message-bundle-01.json %}
~~~

**Response Headers:**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**OperationOutcome:**

~~~
{% include notification-200-oo.json %}
~~~


---

// File: input/includes/process-message-transfer-example.md


### Examples
{:.no_toc}

**Scenario:**

Patient Y has been moved from the Provider X 's emergency room to an inpatient status. Provider X 's considers this a "transfer" event.  Acting in the role of Sender, Provider X alerts Payer Z, who is acting in the Recipient role, of the transfer.  The Notification is transacted as the `[$process-message]` operation. The body of the operation is a Message Bundle containing:

1. The Message Header which is the first resource in the bundle and contains the the message event code - that identifies the nature of the notification.
1. The other resources in the bundle depend on the type of the notification use case and may be defined by FHIR Profiles.

An HTTP Status success code is returned on successful submission.

**Push Notification using the $process-message**

`POST [base]/$process-message`

**Request body**

~~~
{% include_relative Bundle-transfer-notification-message-bundle-01.json %}
~~~

**Response Headers:**

~~~
HTTP/1.1 200 OK
[other headers]
~~~

**OperationOutcome:**

~~~
{% include notification-200-oo.json %}
~~~


---

// File: input/includes/r4-link-list.md

[Account]: {{site.data.fhir.path}}account.html
[ActivityDefinition]: {{site.data.fhir.path}}activitydefinition.html
[AdverseEvent]: {{site.data.fhir.path}}adverseevent.html
[AllergyIntolerance]: {{site.data.fhir.path}}allergyintolerance.html
[Appointment]: {{site.data.fhir.path}}appointment.html
[AppointmentResponse]: {{site.data.fhir.path}}appointmentresponse.html
[AuditEvent]: {{site.data.fhir.path}}auditevent.html
[Basic]: {{site.data.fhir.path}}basic.html
[BiologicallyDerivedProduct]: {{site.data.fhir.path}}biologicallyderivedproduct.html
[BodyStructure]: {{site.data.fhir.path}}bodystructure.html
[CapabilityStatement]: {{site.data.fhir.path}}capabilitystatement.html
[CarePlan]: {{site.data.fhir.path}}careplan.html
[CareTeam]: {{site.data.fhir.path}}careteam.html
[CatalogEntry]: {{site.data.fhir.path}}catalogentry.html
[ChargeItem]: {{site.data.fhir.path}}chargeitem.html
[ChargeItemDefinition]: {{site.data.fhir.path}}chargeitemdefinition.html
[Claim]: {{site.data.fhir.path}}claim.html
[ClaimResponse]: {{site.data.fhir.path}}claimresponse.html
[ClinicalImpression]: {{site.data.fhir.path}}clinicalimpression.html
[CodeSystem]: {{site.data.fhir.path}}codesystem.html
[Communication]: {{site.data.fhir.path}}communication.html
[CommunicationRequest]: {{site.data.fhir.path}}communicationrequest.html
[CompartmentDefinition]: {{site.data.fhir.path}}compartmentdefinition.html
[Composition]: {{site.data.fhir.path}}composition.html
[ConceptMap]: {{site.data.fhir.path}}conceptmap.html
[Condition]: {{site.data.fhir.path}}condition.html
[Consent]: {{site.data.fhir.path}}consent.html
[Contract]: {{site.data.fhir.path}}contract.html
[Coverage]: {{site.data.fhir.path}}coverage.html
[CoverageEligibilityRequest]: {{site.data.fhir.path}}coverageeligibilityrequest.html
[CoverageEligibilityResponse]: {{site.data.fhir.path}}coverageeligibilityresponse.html
[DetectedIssue]: {{site.data.fhir.path}}detectedissue.html
[Device]: {{site.data.fhir.path}}device.html
[DeviceDefinition]: {{site.data.fhir.path}}devicedefinition.html
[DeviceMetric]: {{site.data.fhir.path}}devicemetric.html
[DeviceRequest]: {{site.data.fhir.path}}devicerequest.html
[DeviceUseStatement]: {{site.data.fhir.path}}deviceusestatement.html
[DiagnosticReport]: {{site.data.fhir.path}}diagnosticreport.html
[DocumentManifest]: {{site.data.fhir.path}}documentmanifest.html
[DocumentReference]: {{site.data.fhir.path}}documentreference.html
[EffectEvidenceSynthesis]: {{site.data.fhir.path}}effectevidencesynthesis.html
[Encounter]: {{site.data.fhir.path}}encounter.html
[Endpoint]: {{site.data.fhir.path}}endpoint.html
[EnrollmentRequest]: {{site.data.fhir.path}}enrollmentrequest.html
[EnrollmentResponse]: {{site.data.fhir.path}}enrollmentresponse.html
[EpisodeOfCare]: {{site.data.fhir.path}}episodeofcare.html
[EventDefinition]: {{site.data.fhir.path}}eventdefinition.html
[Evidence]: {{site.data.fhir.path}}evidence.html
[EvidenceVariable]: {{site.data.fhir.path}}evidencevariable.html
[ExampleScenario]: {{site.data.fhir.path}}examplescenario.html
[ExplanationOfBenefit]: {{site.data.fhir.path}}explanationofbenefit.html
[FamilyMemberHistory]: {{site.data.fhir.path}}familymemberhistory.html
[Flag]: {{site.data.fhir.path}}flag.html
[Goal]: {{site.data.fhir.path}}goal.html
[GraphDefinition]: {{site.data.fhir.path}}graphdefinition.html
[Group]: {{site.data.fhir.path}}group.html
[GuidanceResponse]: {{site.data.fhir.path}}guidanceresponse.html
[HealthcareService]: {{site.data.fhir.path}}healthcareservice.html
[ImagingStudy]: {{site.data.fhir.path}}imagingstudy.html
[Immunization]: {{site.data.fhir.path}}immunization.html
[ImmunizationEvaluation]: {{site.data.fhir.path}}immunizationevaluation.html
[ImmunizationRecommendation]: {{site.data.fhir.path}}immunizationrecommendation.html
[ImplementationGuide]: {{site.data.fhir.path}}implementationguide.html
[InsurancePlan]: {{site.data.fhir.path}}insuranceplan.html
[Invoice]: {{site.data.fhir.path}}invoice.html
[Library]: {{site.data.fhir.path}}library.html
[Linkage]: {{site.data.fhir.path}}linkage.html
[List]: {{site.data.fhir.path}}list.html
[Location]: {{site.data.fhir.path}}location.html
[Measure]: {{site.data.fhir.path}}measure.html
[MeasureReport]: {{site.data.fhir.path}}measurereport.html
[Media]: {{site.data.fhir.path}}media.html
[Medication]: {{site.data.fhir.path}}medication.html
[MedicationAdministration]: {{site.data.fhir.path}}medicationadministration.html
[MedicationDispense]: {{site.data.fhir.path}}medicationdispense.html
[MedicationKnowledge]: {{site.data.fhir.path}}medicationknowledge.html
[MedicationRequest]: {{site.data.fhir.path}}medicationrequest.html
[MedicationStatement]: {{site.data.fhir.path}}medicationstatement.html
[MedicinalProduct]: {{site.data.fhir.path}}medicinalproduct.html
[MedicinalProductAuthorization]: {{site.data.fhir.path}}medicinalproductauthorization.html
[MedicinalProductContraindication]: {{site.data.fhir.path}}medicinalproductcontraindication.html
[MedicinalProductIndication]: {{site.data.fhir.path}}medicinalproductindication.html
[MedicinalProductIngredient]: {{site.data.fhir.path}}medicinalproductingredient.html
[MedicinalProductInteraction]: {{site.data.fhir.path}}medicinalproductinteraction.html
[MedicinalProductManufactured]: {{site.data.fhir.path}}medicinalproductmanufactured.html
[MedicinalProductPackaged]: {{site.data.fhir.path}}medicinalproductpackaged.html
[MedicinalProductPharmaceutical]: {{site.data.fhir.path}}medicinalproductpharmaceutical.html
[MedicinalProductUndesirableEffect]: {{site.data.fhir.path}}medicinalproductundesirableeffect.html
[MessageDefinition]: {{site.data.fhir.path}}messagedefinition.html
[MessageHeader]: {{site.data.fhir.path}}messageheader.html
[MetadataResource]: {{site.data.fhir.path}}metadataresource.html
[MolecularSequence]: {{site.data.fhir.path}}molecularsequence.html
[NamingSystem]: {{site.data.fhir.path}}namingsystem.html
[NutritionOrder]: {{site.data.fhir.path}}nutritionorder.html
[Observation]: {{site.data.fhir.path}}observation.html
[ObservationDefinition]: {{site.data.fhir.path}}observationdefinition.html
[OperationDefinition]: {{site.data.fhir.path}}operationdefinition.html
[OperationOutcome]: {{site.data.fhir.path}}operationoutcome.html
[Organization]: {{site.data.fhir.path}}organization.html
[OrganizationAffiliation]: {{site.data.fhir.path}}organizationaffiliation.html
[Patient]: {{site.data.fhir.path}}patient.html
[PaymentNotice]: {{site.data.fhir.path}}paymentnotice.html
[PaymentReconciliation]: {{site.data.fhir.path}}paymentreconciliation.html
[Person]: {{site.data.fhir.path}}person.html
[PlanDefinition]: {{site.data.fhir.path}}plandefinition.html
[Practitioner]: {{site.data.fhir.path}}practitioner.html
[PractitionerRole]: {{site.data.fhir.path}}practitionerrole.html
[Procedure]: {{site.data.fhir.path}}procedure.html
[Provenance]: {{site.data.fhir.path}}provenance.html
[Questionnaire]: {{site.data.fhir.path}}questionnaire.html
[QuestionnaireResponse]: {{site.data.fhir.path}}questionnaireresponse.html
[RelatedPerson]: {{site.data.fhir.path}}relatedperson.html
[RequestGroup]: {{site.data.fhir.path}}requestgroup.html
[ResearchDefinition]: {{site.data.fhir.path}}researchdefinition.html
[ResearchElementDefinition]: {{site.data.fhir.path}}researchelementdefinition.html
[ResearchStudy]: {{site.data.fhir.path}}researchstudy.html
[ResearchSubject]: {{site.data.fhir.path}}researchsubject.html
[RiskAssessment]: {{site.data.fhir.path}}riskassessment.html
[RiskEvidenceSynthesis]: {{site.data.fhir.path}}riskevidencesynthesis.html
[Schedule]: {{site.data.fhir.path}}schedule.html
[SearchParameter]: {{site.data.fhir.path}}searchparameter.html
[ServiceRequest]: {{site.data.fhir.path}}servicerequest.html
[Slot]: {{site.data.fhir.path}}slot.html
[Specimen]: {{site.data.fhir.path}}specimen.html
[SpecimenDefinition]: {{site.data.fhir.path}}specimendefinition.html
[StructureDefinition]: {{site.data.fhir.path}}structuredefinition.html
[StructureMap]: {{site.data.fhir.path}}structuremap.html
[Subscription]: {{site.data.fhir.path}}subscription.html
[Substance]: {{site.data.fhir.path}}substance.html
[SubstanceNucleicAcid]: {{site.data.fhir.path}}substancenucleicacid.html
[SubstancePolymer]: {{site.data.fhir.path}}substancepolymer.html
[SubstanceProtein]: {{site.data.fhir.path}}substanceprotein.html
[SubstanceReferenceInformation]: {{site.data.fhir.path}}substancereferenceinformation.html
[SubstanceSourceMaterial]: {{site.data.fhir.path}}substancesourcematerial.html
[SubstanceSpecification]: {{site.data.fhir.path}}substancespecification.html
[SupplyDelivery]: {{site.data.fhir.path}}supplydelivery.html
[SupplyRequest]: {{site.data.fhir.path}}supplyrequest.html
[Task]: {{site.data.fhir.path}}task.html
[TerminologyCapabilities]: {{site.data.fhir.path}}terminologycapabilities.html
[TestReport]: {{site.data.fhir.path}}testreport.html
[TestScript]: {{site.data.fhir.path}}testscript.html
[ValueSet]: {{site.data.fhir.path}}valueset.html
[VerificationResult]: {{site.data.fhir.path}}verificationresult.html
[VisionPrescription]: {{site.data.fhir.path}}visionprescription.html


---

// File: input/includes/schematron-list-generator.md

{% for p in site.static_files %}
  {% if p.name contains '.sch' %}
  {% assign title = p.name | remove: '.sch' | split: '-' %}
- [{% for word in title  %}{{ word | capitalize }} {% endfor %}]({{ p.path | remove: '/' }})
  {% endif %}
{% endfor %}


---

// File: input/includes/whats-new-1.1.0-snapshot.md

This Snapshot version of The Da Vinci Clinical Data Exchange (CDex) Implementation Guide is the proposed STU update of this guide. It is published for community review before the final publication of version 1.1.0. The sponsoring HL7 International Payer/Provider Information Exchange Work Group members agreed to and voted on the resolution of the community comments and edits to this guide. Below is an overview of significant changes in this version:

1. Support for [US Core 6.1.0](https://hl7.org/fhir/us/core/STU6.1/) and US [Core 7.0.0](https://hl7.org/fhir/us/core/STU7/)
2. [A new crossmapping](usecases.html#direct-adt-to-da-vinci-notification-mappings) between the [Direct ADT](https://directtrust.org/what-we-do/direct-secure-messaging) message elements and the Da Vinci Notification Admit-Transfer-Discharge Message Bundle.
3. Changes to the menu bar, external links to support and guidance, and rearrangement of the guide's contents to align with proposed Da Vinci standard pages and menu items.
4. Implementers submitted multiple trackers since the publication of version 1.0.0. We have addressed them and applied the changes where applicable.

---

// File: input/data/capabilitystatement-notification-forwarder.yml

id: notification-forwarder
text:
  div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h2 id=\"title\">Notification Forwarder CapabilityStatement</h2><ul><li>Implementation Guide Version: 1.0.0</li><li>FHIR Version: 4.0.1</li><li>Supported formats: xml, json</li><li>Published: 2020-08-24</li><li>Published by: HL7 International - Infrastructure and Messaging Work Group</li></ul><p><p>This CapabilityStatement describes the expected capabilities of a Da Vinci Intermediary when forwarding Unsolicited Notifications transacted with the <code>$process-message</code> in the client mode.</p></p><h3 class=\"no_toc\" id=\"igs\">SHALL Support the Following Implementation Guides:</h3><ul><li><a href=\"http%3A//hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core%7C3.1.1\">http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core|3.1.1</a></li></ul><h3 id=\"behavior\">FHIR RESTful Capabilities</h3><p>The Da Vinci Notification Intermediary <strong>SHALL</strong>:</p><ol><li>Support the notification framework defined in this Guide for the Intermediary forwarding notifications.</li><li>Implement the RESTful behavior according to the FHIR specification.</li><li>Support json source formats for all Da Vinci Notification interactions.</li><li>Declare a CapabilityStatement identifying the scenarios, transactions and profiles supported.</li></ol><p>The Da Vinci Notifications Intermediary <strong>SHOULD</strong>:</p><ol><li>Support the admission/discharge use case defined in this Guide.</li><li>Support xml source formats for all Da Vinci Notification interactions.</li><li>Identify the Da Vinci or US Core profiles supported as part of the FHIR <code>meta.profile</code> attribute for each instance.</li></ol><p id=\"security\"><strong>Security:</strong></p><ol><li>For general security consideration refer to the <a href=\"http://build.fhir.org/secpriv-module.html\">Security and Privacy Considerations</a>.</li><li>For security considerations specific to this guide refer to the  <a href=\"security.html\">Security</a> page for requirements and recommendations.</li></ol><p><strong>Summary of System Wide Operations</strong></p><li><strong>SHALL</strong> support the\t<a href=\"http://hl7.org/fhir/OperationDefinition/MessageHeader-process-message\"><code>$process-message</code></a> operation.</li><h3 class=\"no_toc\" id=\"resource--details\">RESTful Capabilities by Resource/Profile:</h3><p><strong>Summary of Search Criteria</strong></p><table class=\"grid\"><thead><tr><th>Resource Type</th><th>Supported Profiles</th><th>Supported Searches</th><th>Supported <code>_includes</code></th><th>Supported <code>_revincludes</code></th><th>Supported Operations</th></tr></thead><tbody><tr><td><a href=\"#bundle\">Bundle</a></td><td><a href=\"StructureDefinition-notifications-bundle.html\">Da Vinci Notifications Bundle Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#condition\">Condition</a></td><td><a href=\"StructureDefinition-adt-notification-condition.html\">Da Vinci Admit/Transfer/Discharge Notification Condition Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#coverage\">Coverage</a></td><td><a href=\"StructureDefinition-adt-notification-coverage.html\">Da Vinci Admit/Transfer/Discharge Notification Coverage Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#encounter\">Encounter</a></td><td><a href=\"StructureDefinition-adt-notification-encounter.html\">​Da Vinci Admit/Transfer/Discharge Notification Encounter Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#location\">Location</a></td><td><a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-location\">US Core Location Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#messageheader\">MessageHeader</a></td><td><a href=\"StructureDefinition-notifications-messageheader.html\">Da Vinci Notifications MessageHeader Profile</a>, \n\n\t\t\t\t\t\t<a href=\"StructureDefinition-admit-notification-messageheader.html\">Da Vinci Admit Notification MessageHeader Profile</a>, \n\n\t\t\t\t\t\t<a href=\"StructureDefinition-transfer-notification-messageheader.html\">Da Vinci Transfer Notification MessageHeader Profile</a>, \n\n\t\t\t\t\t\t<a href=\"StructureDefinition-discharge-notification-messageheader.html\">Da Vinci Discharge Notification MessageHeader Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#organization\">Organization</a></td><td><a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization\">US Core Organization Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#patient\">Patient</a></td><td><a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient\">US Core Patient Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#practitioner\">Practitioner</a></td><td><a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner\">US Core Practitioner Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#practitionerrole\">PractitionerRole</a></td><td><a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole\">US Core PractitionerRole Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr><tr><td><a href=\"#provenance\">Provenance</a></td><td><a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance\">US Core Provenance Profile</a></td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td><td>\n              \n            </td><td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</td></tr></tbody></table><br></br><h4 class=\"no_toc\" id=\"bundle\">Bundle</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"StructureDefinition-notifications-bundle.html\">Da Vinci Notifications Bundle Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a Bundle resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/Bundle/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"condition\">Condition</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"StructureDefinition-adt-notification-condition.html\">Da Vinci Admit/Transfer/Discharge Notification Condition Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>Required resource type to carry information regarding admission and discharge event in the Da Vinci Notification message bundle</p></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a Condition resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/Condition/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"coverage\">Coverage</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"StructureDefinition-adt-notification-coverage.html\">Da Vinci Admit/Transfer/Discharge Notification Coverage Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>Required resource type to carry information regarding admission and discharge event in the Da Vinci Notification message bundle</p></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a Coverage resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/Coverage/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"encounter\">Encounter</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"StructureDefinition-adt-notification-encounter.html\">​Da Vinci Admit/Transfer/Discharge Notification Encounter Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>Required resource type to carry information regarding admission and discharge event in the Da Vinci Notification message bundle</p></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a Encounter resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/Encounter/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"location\">Location</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-location\">US Core Location Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>Required resource type to carry information regarding admission and discharge event in the Da Vinci Notification message bundle</p></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a Location resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/Location/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"messageheader\">MessageHeader</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"StructureDefinition-notifications-messageheader.html\">Da Vinci Notifications MessageHeader Profile</a>, \n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"StructureDefinition-admit-notification-messageheader.html\">Da Vinci Admit Notification MessageHeader Profile</a>, \n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"StructureDefinition-transfer-notification-messageheader.html\">Da Vinci Transfer Notification MessageHeader Profile</a>, \n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"StructureDefinition-discharge-notification-messageheader.html\">Da Vinci Discharge Notification MessageHeader Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>Forwarding notifications using the Da Vinci Unsolicited Notifications framework is a point to point FHIR RESTful transaction. The intermediary <strong>SHALL</strong> always modify the MessageHeader as described below and <strong>MAY</strong> change the other contents of the bundle per agreement between the Intermediary and Sender or Receiver.  When forwarding the notification, the Intermediary <strong>SHALL</strong>:</p><ol><li>Create a new message bundle with a new <code>Bundle.id</code> and new<code>MessageHeader.id</code></li><li>Update the <code>MessageHeader.sender</code> to reflect the Intermediary as the new Sender</li><li>Replace the resource in the Bundle with the resource referenced by the updated <code>MessageHeader.sender</code> element.</li><li>Update the <code>MessageHeader.destination</code> to reflect the new Recipient/Intermediary.</li></ol></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a MessageHeader resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/MessageHeader/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"organization\">Organization</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization\">US Core Organization Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>Required resource type to carry information regarding admission and discharge event in the Da Vinci Notification message bundle</p></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a Organization resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/Organization/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"patient\">Patient</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient\">US Core Patient Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>Required resource type to carry information regarding admission and discharge event in the Da Vinci Notification message bundle</p></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a Patient resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/Patient/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"practitioner\">Practitioner</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner\">US Core Practitioner Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>Required resource type to carry information regarding admission and discharge event in the Da Vinci Notification message bundle</p></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a Practitioner resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/Practitioner/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"practitionerrole\">PractitionerRole</h4><p>Conformance Expectation:\t<strong>SHOULD</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole\">US Core PractitionerRole Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>Required resource type to carry information regarding admission and discharge event in the Da Vinci Notification message bundle</p></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>MAY</strong> be capable of fetching a PractitionerRole resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/PractitionerRole/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><h4 class=\"no_toc\" id=\"provenance\">Provenance</h4><p>Conformance Expectation:\t<strong>SHALL</strong></p><p>Supported Profiles:\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance\">US Core Provenance Profile</a>\n\t\t\t\t\n\t\t\t\t</p><p>Resource Specific Documentation:</p><blockquote><p>The Provenance resource is required to record changes to the Vinci Notification message bundle when forwarding the notification. The Intermediary <strong>SHALL</strong> add a <a href=\"https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-provenance.html\">US Core Provenance Profile</a> to the message bundle. The <code>Provenance.target</code> references the MessageHeader and following the guidance provided in <a href=\"https://www.hl7.org/fhir/us/core/basic-provenance.html#hie-redistribution\">Basic Provenance for HIE Redistribution and Transformation</a>:</p><ul><li><code>Provenance.agent.type</code> = \"author\" set to the Sender</li><li>If <em>no</em> change to the bundle contents:\n<code>Provenance.agent.type</code> = \"transmitter\" set to the Intermediary</li><li>If changes to the bundle contents:\n<code>Provenance.agent.type</code> = \"assembler\" set to the Intermediary</li></ul></blockquote><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>search-type</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>read</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>vread</code>.</li><li><strong>MAY</strong> support \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>create</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>update</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>patch</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>delete</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-instance</code>, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<code>history-type</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>\n\t\t\t\t\tA Client <strong>SHOULD</strong> be capable of fetching a Provenance resource using:\n\t\t\t\t\t<br></br>\n\t\t\t\t\t\t<code class=\"highlighter-rouge\">GET [base]/Provenance/[id]</code>\n\t\t\t\t</li><br></br><!-- Only SHOULDs for include for now the capability statement does not create the primitive extensios for this yet --><!-- Only SHALLs for revinclude for now the capability statement does not create the primitive extensios for this yet --></ul><hr></hr><br></br></div>"
  status: generated
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
date: '2020-08-24'
description: >-
  This CapabilityStatement describes the expected capabilities of a Da Vinci
  Intermediary when forwarding Unsolicited Notifications transacted with the
  `$process-message` in the client mode.
experimental: false
fhirVersion: 4.0.1
format:
  - xml
  - json
implementationGuide:
  - >-
    http://hl7.org/fhir/us/davinci-alerts/ImplementationGuide/hl7.fhir.us.davinci-alerts|1.0.0
  - 'http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core|3.1.1'
jurisdiction:
  - coding:
      - code: US
        system: 'urn:iso:std:iso:3166'
kind: requirements
name: NotificationForwarderCapabilityStatement
patchFormat:
  - application/json-patch+json
publisher: HL7 International - Infrastructure and Messaging Work Group
rest:
  - documentation: >-
      The Da Vinci Notification Intermediary **SHALL**:


      1. Support the notification framework defined in this Guide for the
      Intermediary forwarding notifications.

      1. Implement the RESTful behavior according to the FHIR specification.

      1. Support json source formats for all Da Vinci Notification interactions.

      1. Declare a CapabilityStatement identifying the scenarios, transactions
      and profiles supported.


      The Da Vinci Notifications Intermediary **SHOULD**:


      1. Support the admission/discharge use case defined in this Guide.

      1. Support xml source formats for all Da Vinci Notification interactions.

      1. Identify the Da Vinci or US Core profiles supported as part of the FHIR
      `meta.profile` attribute for each instance.
    mode: client
    operation:
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        definition: 'http://hl7.org/fhir/OperationDefinition/MessageHeader-process-message'
        name: process-message
    resource:
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
        type: Bundle
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        documentation: >-
          Required resource type to carry information regarding admission and
          discharge event in the Da Vinci Notification message bundle
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
        type: Condition
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        documentation: >-
          Required resource type to carry information regarding admission and
          discharge event in the Da Vinci Notification message bundle
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
        type: Coverage
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        documentation: >-
          Required resource type to carry information regarding admission and
          discharge event in the Da Vinci Notification message bundle
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
        type: Encounter
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        documentation: >-
          Required resource type to carry information regarding admission and
          discharge event in the Da Vinci Notification message bundle
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-location'
        type: Location
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        documentation: >-
          Forwarding notifications using the Da Vinci Unsolicited Notifications
          framework is a point to point FHIR RESTful transaction. The
          intermediary **SHALL** always modify the MessageHeader as described
          below and **MAY** change the other contents of the bundle per
          agreement between the Intermediary and Sender or Receiver.  When
          forwarding the notification, the Intermediary **SHALL**:


          1. Create a new message bundle with a new `Bundle.id` and
          new`MessageHeader.id`

          1. Update the `MessageHeader.sender` to reflect the Intermediary as
          the new Sender

          1. Replace the resource in the Bundle with the resource referenced by
          the updated `MessageHeader.sender` element.

          1. Update the `MessageHeader.destination` to reflect the new
          Recipient/Intermediary.
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/transfer-notification-messageheader
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/discharge-notification-messageheader
        type: MessageHeader
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        documentation: >-
          Required resource type to carry information regarding admission and
          discharge event in the Da Vinci Notification message bundle
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'
        type: Organization
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        documentation: >-
          Required resource type to carry information regarding admission and
          discharge event in the Da Vinci Notification message bundle
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'
        type: Patient
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        documentation: >-
          Required resource type to carry information regarding admission and
          discharge event in the Da Vinci Notification message bundle
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'
        type: Practitioner
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHOULD
        documentation: >-
          Required resource type to carry information regarding admission and
          discharge event in the Da Vinci Notification message bundle
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - >-
            http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
        type: PractitionerRole
      - extension:
          - url: >-
              http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
            valueCode: SHALL
        documentation: >-
          The Provenance resource is required to record changes to the Vinci
          Notification message bundle when forwarding the notification. The
          Intermediary **SHALL** add a [US Core Provenance
          Profile]((https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-provenance.html)
          to the message bundle. The `Provenance.target` references the
          MessageHeader and following the guidance provided in [Basic Provenance
          for HIE Redistribution and
          Transformation](https://www.hl7.org/fhir/us/core/basic-provenance.html#hie-redistribution):


          - `Provenance.agent.type` = "author" set to the Sender

          - If *no* change to the bundle contents:
                `Provenance.agent.type` = "transmitter" set to the Intermediary
          - If changes to the bundle contents:
                 `Provenance.agent.type` = "assembler" set to the Intermediary
        interaction:
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: create
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: SHOULD
            code: search-type
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: SHOULD
            code: read
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: SHOULD
            code: vread
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: update
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: patch
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: delete
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-instance
          - extension:
              - url: >-
                  http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
                valueCode: MAY
            code: history-type
        supportedProfile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance'
        type: Provenance
    security:
      description: >
        1. For general security consideration refer to the [Security and Privacy
        Considerations](http://build.fhir.org/secpriv-module.html).

        1. For security considerations specific to this guide refer to the
        [Security](security.html) page for requirements and recommendations.
status: active
title: Notification Forwarder CapabilityStatement
url: >-
  http://hl7.org/fhir/us/davinci-alerts/CapabilityStatement/notification-forwarder
version: 1.0.0
resourceType: CapabilityStatement


---

// File: input/data/ig.yml

resourceType: ImplementationGuide
id: hl7.fhir.us.davinci-alerts
extension:
- url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
  valueCode: trial-use
- url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
  valueInteger: 2
- url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
  valueCode: inm
url: http://hl7.org/fhir/us/davinci-alerts/ImplementationGuide/hl7.fhir.us.davinci-alerts
version: 1.1.0-preview
name: DaVinciUnsolicitedNotifications
title: Da Vinci Unsolicited Notifications
status: active
date: '2024-12-06'
publisher: HL7 International / Infrastructure And Messaging
contact:
- name: HL7 International / Infrastructure And Messaging
  telecom:
  - system: url
    value: http://www.hl7.org/Special/committees/inm
  - system: email
    value: inm@lists.hl7.org
description: "This implementation guide describes a method for the communication of\
  \ relevant notifications to support the real-time exchange of information that impacts\
  \ patient care and value based or risk based services. Providers and Payers may\
  \ need to be notified when activities occur that impact a patient\u2019s care. This\
  \ may be as traditional as a notification of an admission or transfer to or discharge\
  \ from a care setting. It also includes notifications about changes in treatment\
  \ such as a new or different medication, or changes in patient status like a new\
  \ diagnosis. These notifications provide information that can improve care management\
  \ and care coordination as well as act as the trigger for quality programs and other\
  \ patient focused activities (for example, risk adjustment). By allowing the patient\u2019\
  s healthcare providers to be better informed and able to take actions and intervene\
  \ earlier, the twin goals of better patient care and reduced cost of care may be\
  \ met."
jurisdiction:
- coding:
  - code: US
    system: urn:iso:std:iso:3166
copyright: Used by permission of HL7 International, all rights reserved Creative Commons
  License
packageId: hl7.fhir.us.davinci-alerts
license: CC0-1.0
fhirVersion:
- 4.0.1
dependsOn:
- id: uscore7
  packageId: hl7.fhir.us.core
  uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
  version: 7.0.0
  extension:
  - url: http://hl7.org/fhir/5.0/StructureDefinition/extension-ImplementationGuide.dependsOn.reason
    valueMarkdown: 'Needed for systems supporting USCDI v4

      '
- id: uscore6
  packageId: hl7.fhir.us.core.v610
  uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
  version: 6.1.0
  extension:
  - url: http://hl7.org/fhir/5.0/StructureDefinition/extension-ImplementationGuide.dependsOn.reason
    valueMarkdown: 'Needed for systems supporting USCDI v3

      '
- id: uscore3
  packageId: hl7.fhir.us.core.v311
  uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
  version: 3.1.1
  extension:
  - url: http://hl7.org/fhir/5.0/StructureDefinition/extension-ImplementationGuide.dependsOn.reason
    valueMarkdown: 'Needed for systems supporting USCDI v1

      '
- id: hrex
  packageId: hl7.fhir.us.davinci-hrex
  uri: http://hl7.org/fhir/us/davinci-hrex/ImplementationGuide/hl7.fhir.us.davinci-hrex
  version: 1.1.0-ballot
definition:
  grouping:
  - id: BaseDaVinciNotificationProfiles
    name: Base Da Vinci Notification Profiles
    description: These define the base constraints on FHIR resources for systems conforming
      to this implementation guide. Other Da Vinci Notification Profiles are based
      on them.
  - id: DaVinciADTNotificationProfiles
    name: Da Vinci Admission/Discharge/Transfer Notification Profiles
    description: Operations associated with CDex admission/discharge/transfer notifications
  - id: ValueSets
    name: 'Terminology: Value Sets'
    description: These define sets of codes used by systems conforming to this implementation
      guide.
  - id: CodeSystems
    name: 'Terminology: Code Systems'
    description: 'These define new code systems used by systems conforming to this
      implementation guide.

      *The code systems defined here are not part of the base FHIR specification and
      future versions of this guide will migrate them to VSAC or another standard
      centralized US Realm terminology authority.*'
  - id: BundleExamples
    name: Bundle Examples
    description: These are Bundle example instances that show what data produced and
      consumed by systems conforming with this implementation guide might look like.
  - id: CapabilityStatement
    name: CapabilityStatements
    description: "There are **3 Capability Statements** defining computable definitions\
      \ of FHIR conformance expectations of the RESTful transactions and specific\
      \ profiles for each of the Da Vinci Notification Roles. They provide the base\
      \ conformance rules that may be used for system compatibility testing, code\
      \ generation, or as the basis for a conformance assessment.\n\nThe following\
      \ table summarizes how these CapabilityStatements applies to the Da Vinci Notification\
      \ Roles\n\n |Role|server-mode|client-mode|\n | --- | :---: | :---: |\n |Sender\
      \ |-| Da Vinci Notification Sender|\n |Intermediary |Da Vinci Notification Receiver|\
      \ Da Vinci Notification Forwarder|\n |Recipient |Da Vinci Notification Receiver\
      \ |-|\n {: .grid}"
  resource:
  - reference:
      reference: Bundle/admit-notification-intermediate-translate-bundle
    description: Admit Notification Intermediate Translate Bundle example
    name: Admit Notification Intermediate Translate Bundle
    exampleCanonical: http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
    groupingId: BundleExamples
  - reference:
      reference: Bundle/admit-notification-intermediate-transmit-bundle
    description: Admit Notification Intermediate Transmit Bundle example
    name: Admit Notification Intermediate Transmit Bundle
    exampleCanonical: http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
    groupingId: BundleExamples
  - reference:
      reference: Bundle/admit-notification-message-bundle-01
    description: Admit Notification Message Bundle example
    name: Admit Notification Message Bundle 01
    exampleCanonical: http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
    groupingId: BundleExamples
  - reference:
      reference: Bundle/admit-notification-message-bundle-02
    description: This Admit Notification Message Bundle example illustrates referencing
      a Device for the author and sender in the MessageHeader.
    name: Admit Notification Message Bundle 02
    exampleCanonical: http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
    groupingId: BundleExamples
  - reference:
      reference: StructureDefinition/admit-notification-messageheader
    description: The Da Vinci Admit Notification MessageHeader Profile builds on the
      [Da Vinci Notifications MessageHeader Profile](StructureDefinition-notifications-messageheader.html)
      and sets minimum expectations for the FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html)
      resource to record the necessary context for Da Vinci admit notification messaging
      scenario.  The event code is "notification-admit" and the focus of the event
      is the Encounter.
    exampleBoolean: false
    name: Da Vinci Admit Notification MessageHeader Profile
    groupingId: DaVinciADTNotificationProfiles
  - reference:
      reference: StructureDefinition/adt-notification-condition
    description: The Da Vinci Admit/Discharge/Transfer Notification Condition Profile
      is based on the US Core Condition Encounter Diagnosis Profile and and complies
      with US Core versions 3.1.1, 6.1.0, and 7.0.0. It adds the mandatory `Condition.encounter`
      element which references the [Da Vinci Admit/Discharge/Transfer Notification
      Encounter Profile](StructureDefinition-adt-notification-encounter.html) in the
      same message Bundle.
    exampleBoolean: false
    name: Da Vinci Admit/Discharge/Transfer Notification Condition Profile
    groupingId: DaVinciADTNotificationProfiles
  - reference:
      reference: StructureDefinition/adt-notification-coverage
    description: 'The Da Vinci Admit/Discharge/Transfer Notification Coverage Profile
      is based on the [HRex Coverage Profile](http://build.fhir.org/ig/HL7/davinci-ehrx/StructureDefinition-hrex-coverage.html)
      and constrains the Patient resource referenced by the `Coverage.beneficiary`
      element to be found in the same message Bundle.

      The Da Vinci Admit/Discharge/Transfer Notification Coverage Profile is based
      on the US Core Coverage Profile and complies with US Core versions 6.1.0, and
      7.0.0.  It constrains the resources referenced by the `Coverage.beneficiary`
      element to the US Core Patient Profile. It also constrains the referenced resource
      to be an entry in the message Bundle that it populates.'
    exampleBoolean: false
    name: Da Vinci Admit/Discharge/Transfer Notification Coverage Profile
    groupingId: DaVinciADTNotificationProfiles
  - reference:
      reference: StructureDefinition/adt-notification-encounter
    description: The Da Vinci Admit/Discharge/Transfer Notification Encounter Profile
      is based on the US Core Encounter Profile and complies with US Core versions
      3.1.1, 6.1.0, and 7.0.0.  It constrains the resources referenced by the `Encounter.Subject`
      to the US Core Patient Profile ,`Encounter.participant.individual` to the US
      Core Practitioner Profile and `Encounter.Location` to the US Core Location Profile.
      It also constrains these referenced resources to be entries in the message Bundle
      that it populates.
    exampleBoolean: false
    name: Da Vinci Admit/Discharge/Transfer Notification Encounter Profile
    groupingId: DaVinciADTNotificationProfiles
  - reference:
      reference: StructureDefinition/discharge-notification-messageheader
    description: The Da Vinci Discharge Notification MessageHeader Profile  builds
      on  the [Da Vinci Notifications MessageHeader Profile](StructureDefinition-notifications-messageheader.html)
      and sets  minimum expectations for the FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html)
      resource to record the necessary context for Da Vinci discharge notification
      messaging scenario.  The event code is "notification-discharge" and the focus
      of the event is the Encounter.
    exampleBoolean: false
    name: Da Vinci Discharge Notification MessageHeader Profile
    groupingId: DaVinciADTNotificationProfiles
  - reference:
      reference: CodeSystem/notification-event
    description: Concepts describing the purpose of the Da Vinci Unsolicited Notification.
      Note these concepts are 'pre-coordinated' to represent the concept of notification
      message *AND* the event that triggers the notification.
    exampleBoolean: false
    name: Da Vinci Event CodeSystem Notification
    groupingId: CodeSystems
  - reference:
      reference: ValueSet/notification-admit-event
    description: Concepts describing Da Vinci Unsolicited Admit Notification notification
      events.
    exampleBoolean: false
    name: Da Vinci Notification Admit Event ValueSet
    groupingId: ValueSets
  - reference:
      reference: ValueSet/notification-discharge-event
    description: Concepts describing Da Vinci Unsolicited Notification discharge notification
      events.
    exampleBoolean: false
    name: Da Vinci Notification Discharge Event ValueSet
    groupingId: ValueSets
  - reference:
      reference: ValueSet/notification-event
    description: Concepts describing the purpose of the Da Vinci Unsolicited Notification.
    exampleBoolean: false
    name: Da Vinci Notification Event ValueSet
    groupingId: ValueSets
  - reference:
      reference: ValueSet/notification-transfer-event
    description: Concepts describing Da Vinci Unsolicited Notification transfer notification
      events.
    exampleBoolean: false
    name: Da Vinci Notification Transfer Event ValueSet
    groupingId: ValueSets
  - reference:
      reference: StructureDefinition/notifications-bundle
    description: The Da Vinci Notifications Bundle Profile constrains the FHIR [Bundle](http://hl7.org/fhir/R4/bundle.html)
      resource to the Da Vinci notification messaging framework.
    exampleBoolean: false
    name: Da Vinci Notifications Bundle Profile
    groupingId: BaseDaVinciNotificationProfiles
  - reference:
      reference: StructureDefinition/notifications-messageheader
    description: The Da Vinci Notifications MessageHeader Profile sets minimum expectations
      for the FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html) resource
      to record the necessary context for Da Vinci notification messaging using FHIR
      resources.  It references the focus of the use case event or request as well
      as other information related to the action typically transmitted in a [Bundle](http://hl7.org/fhir/R4/bundle.html)
      resource in which the MessageHeader resource instance is the first resource
      in the Bundle.
    exampleBoolean: false
    name: Da Vinci Notifications MessageHeader Profile
    groupingId: BaseDaVinciNotificationProfiles
  - reference:
      reference: StructureDefinition/transfer-notification-messageheader
    description: The Da Vinci Transfer Notification MessageHeader Profile builds on
      the [Da Vinci Notifications MessageHeader Profile](StructureDefinition-notifications-messageheader.html)
      and sets minimum expectations for the FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html)
      resource to record the necessary context for Da Vinci transfer notification
      messaging scenario.  The event code is "notification-transfer" and the focus
      of the event is the Encounter.
    exampleBoolean: false
    name: Da Vinci Transfer Notification MessageHeader Profile
    groupingId: DaVinciADTNotificationProfiles
  - reference:
      reference: ConceptMap/direct-alerts
    description: "Since May 1, 2021 CMS requires that hospitals send notifications\
      \ electronically for admit, transfer and discharge events to the patient's care\
      \ team members, for which most implementations currently use V2 ADT messages.\
      \ As a result DirectTrust, a consensus body of forty organizations and individuals\
      \ representing the care continuum, collaborated in creating an Implementation\
      \ Guide using Direct Secure Messaging for both senders and receivers. The Event\
      \ Notifications via the Direct Standard\xAE defines the necessary data element\
      \ to cover the CMS rules, maps those to the V2 elements in several ADT message\
      \ structures and provides the value sets for coded elements.\n\nThese V2 elements\
      \ have been mapped them to their respective location in this DaVinci FHIR IG\
      \ for the Admit-Transfer-Discharge Use case. In addition, the value set concepts\
      \ between the two product families have been mapped, where possible.\n\nThis\
      \ ConceptMap summarizes the Direct ADT message to the Da Vinci Notification\
      \ Terminology Mappings. Complete mappings can be downloaded as an excel file\
      \ at https://hl7.org/fhir/us/davinci-alerts/tables/DirectToDaVinciMap.xlsx.\n"
    exampleBoolean: false
    name: Direct ADT to Da Vinci Alerts ConceptMap
  - reference:
      reference: Bundle/discharge-notification-message-bundle-01
    description: Discharge Notification Message Bundle example
    name: Discharge Notification Message Bundle
    exampleCanonical: http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
    groupingId: BundleExamples
  - reference:
      reference: CapabilityStatement/notification-forwarder
    description: This CapabilityStatement describes the expected capabilities of a
      Da Vinci Intermediary when forwarding Unsolicited Notifications transacted with
      the `$process-message` in the client mode.
    exampleBoolean: false
    name: Notification Forwarder CapabilityStatement
    groupingId: CapabilityStatement
  - reference:
      reference: CapabilityStatement/notification-receiver
    description: This CapabilityStatement describes the expected capabilities of a
      server that is capable of receiving a Da Vinci Unsolicited Notification transacted
      with the `$process-message` operation.
    exampleBoolean: false
    name: Notification Receiver CapabilityStatement
    groupingId: CapabilityStatement
  - reference:
      reference: CapabilityStatement/notification-sender
    description: This CapabilityStatement describes the expected capabilities of a
      Da Vinci Sender when sending Unsolicited Notifications transacted with the `$process-message`
      in the client mode.
    exampleBoolean: false
    name: Notification Sender CapabilityStatement
    groupingId: CapabilityStatement
  - reference:
      reference: Bundle/transfer-notification-message-bundle-01
    description: Transfer Notification Message Bundle example
    name: Transfer Notification Message Bundle
    exampleCanonical: http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
    groupingId: BundleExamples
  page:
    nameUrl: toc.html
    title: Table of Contents
    generation: html
    page:
    - nameUrl: index.html
      title: Home
      generation: markdown
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    - nameUrl: scope.html
      title: Scope and Usage
      generation: markdown
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    - nameUrl: roles.html
      title: Roles and Actors
      generation: markdown
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    - nameUrl: workflow.html
      title: Workflow
      generation: markdown
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    - nameUrl: guidance.html
      title: Framework
      generation: markdown
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
    - nameUrl: usecases.html
      title: Admit/Discharge/Transfer Use Case
      generation: markdown
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
    - nameUrl: security.html
      title: Privacy, Safety, and Security
      generation: markdown
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: trial-use
    - nameUrl: downloads.html
      title: Downloads
      generation: markdown
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    - nameUrl: changes.html
      title: Change Log
      generation: markdown
      extension:
      - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
        valueCode: informative
    - nameUrl: ImplementationGuide-hl7.fhir.us.davinci-alerts.html
      title: Unsolicited Notification ImplementationGuide Resource
      generation: markdown
  parameter:
  - code: copyrightyear
    value: 2024+
  - code: releaselabel
    value: STU 1.1 Preview
  - code: path-resource
    value: input/resources
  - code: path-resource
    value: fsh-generated/resources
  - code: path-pages
    value: input/pagecontent
  - code: path-pages
    value: input/intro-notes
  - code: path-pages
    value: fsh-generated/includes
  - code: path-expansion-params
    value: ../../input/_resources/exp-params.json
  - code: path-data
    value: input/resources-yaml
  - code: active-tables
    value: 'false'
  - code: apply-contact
    value: 'true'
  - code: apply-jurisdiction
    value: 'true'
  - code: apply-publisher
    value: 'true'
  - code: apply-version
    value: 'true'
  - code: show-inherited-invariants
    value: 'true'
  - code: usage-stats-opt-out
    value: 'true'
  - code: tabbed-snapshots
    value: 'false'
  - code: validation
    value: check-aggregation
  - code: auto-oid-root
    value: 2.16.840.1.113883.4.642.40.47
  - code: path-history
    value: http://hl7.org/fhir/us/davinci-alerts/history.html


---

// File: input/data/types.yml

example_types:  # for matching type to Type
- Account
- ActivityDefinition
- AdverseEvent
- AllergyIntolerance
- Appointment
- AppointmentResponse
- AuditEvent
- Basic
- Binary
- BiologicallyDerivedProduct
- BodyStructure
- Bundle
- CarePlan
- CareTeam
- CatalogEntry
- ChargeItem
- ChargeItemDefinition
- Claim
- ClaimResponse
- ClinicalImpression
- Communication
- CommunicationRequest
- Composition
- Condition
- Consent
- Contract
- Coverage
- CoverageEligibilityRequest
- CoverageEligibilityResponse
- DetectedIssue
- Device
- DeviceDefinition
- DeviceMetric
- DeviceRequest
- DeviceUseStatement
- DiagnosticReport
- DocumentManifest
- DocumentReference
- DomainResource
- EffectEvidenceSynthesis
- Encounter
- Endpoint
- EnrollmentRequest
- EnrollmentResponse
- EpisodeOfCare
- EventDefinition
- Evidence
- EvidenceVariable
- ExplanationOfBenefit
- FamilyMemberHistory
- Flag
- Goal
- Group
- GuidanceResponse
- HealthcareService
- ImagingStudy
- Immunization
- ImmunizationEvaluation
- ImmunizationRecommendation
- InsurancePlan
- Invoice
- ItemInstance
- Library
- Linkage
- List
- Location
- Measure
- MeasureReport
- Media
- Medication
- MedicationAdministration
- MedicationDispense
- MedicationKnowledge
- MedicationRequest
- MedicationStatement
- MedicinalProduct
- MedicinalProductAuthorization
- MedicinalProductContraindication
- MedicinalProductIndication
- MedicinalProductIngredient
- MedicinalProductInteraction
- MedicinalProductManufactured
- MedicinalProductPackaged
- MedicinalProductPharmaceutical
- MedicinalProductUndesirableEffect
- MessageHeader
- NutritionOrder
- Observation
- ObservationDefinition
- OperationOutcome
- Organization
- OrganizationAffiliation
- Parameters
- Patient
- PaymentNotice
- PaymentReconciliation
- Person
- PlanDefinition
- Practitioner
- PractitionerRole
- Procedure
- ProcessRequest
- ProcessResponse
- Provenance
- Questionnaire
- QuestionnaireResponse
- RelatedPerson
- RequestGroup
- ResearchDefinition
- ResearchElementDefinition
- ResearchStudy
- ResearchSubject
- Resource
- RiskAssessment
- RiskEvidenceSynthesis
- Schedule
- Sequence
- ServiceRequest
- Slot
- Specimen
- SpecimenDefinition
- Subscription
- Substance
- SubstanceNucleicAcid
- SubstancePolymer
- SubstanceProtein
- SubstanceReferenceInformation
- SubstanceSourceMaterial
- SubstanceSpecification
- SupplyDelivery
- SupplyRequest
- Task
- TestReport
- TestScript
- UserSession
- VerificationResult
- VisionPrescription
conformance_types:
  - StructureDefinition
  - ValueSet
  - CodeSystem
  - ConceptMap
  - CapabilityStatement
  - OperationDefinition
  - SearchParameter
  - ImplementationGuide
  - NamingSystem
  - TerminologyCapabilities
  - MessageDefinition
  - CompartmentDefinition
  - StructureMap
  - GraphDefinition
  - ExampleScenario
resource_types:
  - Account
  - ActivityDefinition
  - AdverseEvent
  - AllergyIntolerance
  - Appointment
  - AppointmentResponse
  - AuditEvent
  - Basic
  - Binary
  - BiologicallyDerivedProduct
  - BodyStructure
  - Bundle
  - CapabilityStatement
  - CarePlan
  - CareTeam
  - CatalogEntry
  - ChargeItem
  - ChargeItemDefinition
  - Claim
  - ClaimResponse
  - ClinicalImpression
  - CodeSystem
  - Communication
  - CommunicationRequest
  - CompartmentDefinition
  - Composition
  - ConceptMap
  - Condition
  - Consent
  - Contract
  - Coverage
  - CoverageEligibilityRequest
  - CoverageEligibilityResponse
  - DetectedIssue
  - Device
  - DeviceDefinition
  - DeviceMetric
  - DeviceRequest
  - DeviceUseStatement
  - DiagnosticReport
  - DocumentManifest
  - DocumentReference
  - DomainResource
  - EffectEvidenceSynthesis
  - Encounter
  - Endpoint
  - EnrollmentRequest
  - EnrollmentResponse
  - EpisodeOfCare
  - EventDefinition
  - Evidence
  - EvidenceVariable
  - ExampleScenario
  - ExplanationOfBenefit
  - FamilyMemberHistory
  - Flag
  - Goal
  - GraphDefinition
  - Group
  - GuidanceResponse
  - HealthcareService
  - ImagingStudy
  - Immunization
  - ImmunizationEvaluation
  - ImmunizationRecommendation
  - ImplementationGuide
  - InsurancePlan
  - Invoice
  - ItemInstance
  - Library
  - Linkage
  - List
  - Location
  - Measure
  - MeasureReport
  - Media
  - Medication
  - MedicationAdministration
  - MedicationDispense
  - MedicationKnowledge
  - MedicationRequest
  - MedicationStatement
  - MedicinalProduct
  - MedicinalProductAuthorization
  - MedicinalProductContraindication
  - MedicinalProductIndication
  - MedicinalProductIngredient
  - MedicinalProductInteraction
  - MedicinalProductManufactured
  - MedicinalProductPackaged
  - MedicinalProductPharmaceutical
  - MedicinalProductUndesirableEffect
  - MessageDefinition
  - MessageHeader
  - NamingSystem
  - NutritionOrder
  - Observation
  - ObservationDefinition
  - OperationDefinition
  - OperationOutcome
  - Organization
  - OrganizationAffiliation
  - Parameters
  - Patient
  - PaymentNotice
  - PaymentReconciliation
  - Person
  - PlanDefinition
  - Practitioner
  - PractitionerRole
  - Procedure
  - ProcessRequest
  - ProcessResponse
  - Provenance
  - Questionnaire
  - QuestionnaireResponse
  - RelatedPerson
  - RequestGroup
  - ResearchDefinition
  - ResearchElementDefinition
  - ResearchStudy
  - ResearchSubject
  - Resource
  - RiskAssessment
  - RiskEvidenceSynthesis
  - Schedule
  - SearchParameter
  - Sequence
  - ServiceRequest
  - Slot
  - Specimen
  - SpecimenDefinition
  - StructureDefinition
  - StructureMap
  - Subscription
  - Substance
  - SubstanceNucleicAcid
  - SubstancePolymer
  - SubstanceProtein
  - SubstanceReferenceInformation
  - SubstanceSourceMaterial
  - SubstanceSpecification
  - SupplyDelivery
  - SupplyRequest
  - Task
  - TerminologyCapabilities
  - TestReport
  - TestScript
  - UserSession
  - ValueSet
  - VerificationResult
  - VisionPrescription


---

// File: input/includes-yaml/adt-notification-provenance-01.yml

id: adt-notification-provenance-01
resourceType: Provenance
meta:
  profile:
    - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance'
target:
  - reference: MessageHeader/messageheader-no-change-scenario-01
recorded: '2020-07-31T16:56:43-07:00'
agent:
  - type:
      coding:
        - system: 'http://terminology.hl7.org/CodeSystem/provenance-participant-type'
          code: author
          display: Author
    who:
      reference: Organization/dv-notification-sender-01
  - type:
      coding:
        - system: >-
            http://hl7.org/fhir/us/core/CodeSystem/us-core-provenance-participant-type
          code: transmitter
          display: Transmitter
    who:
      reference: Organization/dv-notification-intermediary-01


---

// File: input/includes-yaml/adt-notification-provenance-02.yml

id: adt-notification-provenance-02
resourceType: Provenance
meta:
  profile:
    - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance'
target:
  - reference: MessageHeader/messageheader-change-scenario-02
recorded: '2020-07-31T16:56:43-07:00'
activity:
  text: Message removed content from original
agent:
  - type:
      coding:
        - system: 'http://terminology.hl7.org/CodeSystem/provenance-participant-type'
          code: author
          display: Author
    who:
      reference: Organization/dv-notification-sender-01
  - type:
      coding:
        - system: >-
            http://hl7.org/fhir/us/core/CodeSystem/us-core-provenance-participant-type
          code: assembler
          display: Assembler
    who:
      reference: Organization/dv-notification-intermediary-01


---

// File: input/includes-yaml/notification-200-oo.yml

id: intermediary-response
issue:
  - code: informational
    details:
      text: The message was received and the message has been fully processed
    severity: information
resourceType: OperationOutcome
text:
  div: >-
    <div><p><b>Operation Outcome for :</b></p><p>All OK</p><table
    class="grid"><tr><td><b>Severity</b></td><td><b>Location</b></td><td><b>Details</b></td><td><b>Diagnostics</b></td><td><b>Type</b></td></tr><tr><td>information</td><td/><td>The
    message was received and the message has been fully
    processed</td><td/><td>informational</td></tr></table></div>
  status: generated


---

// File: input/resources-yaml/CodeSystem-notification-event.yml

resourceType: CodeSystem
id: notification-event
url: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
version: 1.0.0
name: NotificationEventCodeSystem
title: Da Vinci Event CodeSystem Notification
status: active
experimental: false
date: '2019-07-12'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: Concepts describing the purpose of the Da Vinci Unsolicited Notification. Note these concepts are 'pre-coordinated' to represent the concept of notification message *AND* the event that triggers the notification.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
copyright: >-
  This Content is created by the Da Vinci project and HL7. No copyright
  acknowledgement is needed, nor are there any license terms to adhere to.
caseSensitive: true
hierarchyMeaning: is-a
content: complete
count: 23
# ======== Remove Property since not using and causing a qa warning ==========
# property:
#   - code: abstract
#     uri: 'http://hl7.org/fhir/us/davinci-alerts/concept-properties'
#     description: >-
#       True if an element is considered 'abstract' - in other words, the code is
#       not for use as a real concept.
#     type: boolean
# ==============================================================================
concept:
  - code: notification-refill-request
    display: Prescription Refill Request Notification
    definition: >-
      The purpose or content of the notification is a prescription refill
      request.
  - code: notification-progress-update
    display: Progress Update Notification
    definition: The purpose or content of the notification is a progress update.
  - code: notification-appointment-reminder
    display: Appointment Reminder Notification
    definition: The purpose or content of the notification is an appointment reminder.
  - code: notification-phone-consult
    display: Phone Consult Notification
    definition: The purpose or content of the notification is a phone consult.
  - code: notification-summary-report
    display: Summary Report Notification
    definition: The purpose or content of the notification is a summary report.
  - code: notification-admit
    display: Admit Notification
    definition: The purpose or content of the notification is about a patient who is seen by a care provider to receive treatment and/or care at a hospital (e.g. hospital admission process).
  - code: notification-discharge
    display: Discharge Notification
    definition: The purpose or content of the notification is about a patient who is discharged when they longer need to receive care and can go home, are sent to another facility or hospital, or to another facility-type in the same hospital.
  - code: notification-transfer
    display: Transfer Notification
    definition: The purpose or content of a notification about a patient who is transferred to another facility or hospital or to another department in the same hospital.
  - code: notification-referral
    display: Referral Notification
    definition: >-
      The purpose or content of the notification about a referral for
      consultation.
  - code: notification-tx-change
    display: Treatment Change Notification
    definition: >-
      The purpose or content of the notification about a change in treatment -
      either the start or the end.
  - code: notification-lab-report
    display: Laboratory Report Notification
    definition: >-
      The purpose or content of the notification about lab results being
      available.
  - code: notification-tx-issue
    display: Treatment Issue Notification
    definition: >-
      The purpose or content of the notification is about a problem related to the treatment the patient is receiving such as drug or device recall or reported issue.
  - code: notification-ordered-device
    display: Ordered Device Notification
    definition: >-
      The purpose or content of the notification about a device having been
      ordered for the patient.
  - code: notification-prior-auth-notice
    display: Prior Authorization Notice Notification
    definition: >-
      The purpose or content of the notification about a change to the Prior
      Authorization (Pended to Approved/Denied).
  - code: notification-new-condition
    display: New Condition Notification
    definition: >-
      The purpose or content of the notification about a new diagnosis /
      condition.
  - code: notification-care-team-change
    display: Care Team Change Notification
    definition: >-
      The purpose or content of the notification about changes occurring in the
      care team.
  - code: notification-coverage-change
    display: Coverage Change Notification
    definition: >-
      The purpose or content of the notification is about changes in insurance coverage, e.g. the start or the end of coverage for the patient.
  - code: notification-social-determinants-change
    display: Social Determinants Change Notification
    definition: >-
      The purpose or content of the notification about change in the social
      circumstances of the patient (Social Determinants of Health).
  - code: notification-public-health
    display: Public Health Notification
    definition: The purpose or content of the notification about a Public Health event.
  - code: notification-outpatient-visit
    display: Outpatient Visit Notification
    definition: >-
      The purpose or content of the notification about the start of an outpatient
      encounter.
  - code: notification-vitals
    display: Vital Statistics Notification
    definition: >-
      The purpose or content of the notification about either the birth or death
      of the patient.
  - code: notification-pharmacy
    display: Pharmacy Notification
    definition: >-
      The purpose or content of the notification about a change in prescription
      status for a medication at the pharmacy (Pickup, Restock, Dispense).
  - code: notification-workers-comp
    display: Workers Comp Notification
    definition: >-
      The purpose or content of the notification about healthcare services that
      are rendered under Workman's Compensation rules.


---

// File: input/resources-yaml/conceptmap-direct-alerts.yml

resourceType: ConceptMap
id: direct-alerts
url: http://hl7.org/fhir/us/davinci-alerts/ConceptMap/direct-alerts
name: DirectAlerts
title: Direct ADT to Da Vinci Alerts ConceptMap
status: active
experimental: false
date: 2024-10-29
description: "Since May 1, 2021 CMS requires that hospitals send notifications electronically
  for admit, transfer and discharge events to the patient's care team members, for
  which most implementations currently use V2 ADT messages. As a result DirectTrust,
  a consensus body of forty organizations and individuals representing the care continuum,
  collaborated in creating an Implementation Guide using Direct Secure Messaging for
  both senders and receivers. The Event Notifications via the Direct Standard\xAE
  defines the necessary data element to cover the CMS rules, maps those to the V2
  elements in several ADT message structures and provides the value sets for coded
  elements.\n\nThese V2 elements have been mapped them to their respective location
  in this DaVinci FHIR IG for the Admit-Transfer-Discharge Use case. In addition,
  the value set concepts between the two product families have been mapped, where
  possible.\n\nThis ConceptMap summarizes the Direct ADT message to the Da Vinci Notification
  Terminology Mappings. Complete mappings can be downloaded as an excel file at https://hl7.org/fhir/us/davinci-alerts/tables/DirectToDaVinciMap.xlsx.\n"
copyright: "\n1. This material contains content from LOINC (http://loinc.org). LOINC
  is copyright \\\\xA9 1995-2020, Regenstrief Institute, Inc. and the Logical Observation
  # Identifiers Names and Codes (LOINC) Committee and is available at no cost under
  the license at http://loinc.org/license. LOINC\\\\xAE is a registered United States
  trademark of Regenstrief Institute, Inc.\n2. This value set includes content from
  SNOMED CT, which is copyright \xA9 2002+ International Health Terminology Standards
  Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and
  HL7. Implementer use of SNOMED CT is not covered by this agreement."
sourceUri: https://directtrust.org/what-we-do/direct-secure-messaging
targetUri: http://hl7.org/fhir/us/davinci-alerts/ImplementationGuide/hl7.fhir.us.davinci-alerts
group:
- source: http://loinc.org
  target: http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event
  element:
  - code: 86530-3
    display: Visit notification
    target:
    - code: notification-referral
      equivalence: equivalent
  - code: 86532-9
    display: Admission notification
    target:
    - code: notification-admit
      equivalence: equivalent
      comment: Alerts terminology doesn't distinguish types of sevice locations
  - code: 98141-5
    display: Emergency department Admission notification
    target:
    - code: notification-admit
      equivalence: equivalent
  - code: 79429-7
    display: Hospital Admission notification
    target:
    - code: notification-admit
      equivalence: equivalent
      comment: Alerts terminology doesn't distinguish between in and out patients
  - code: 79430-5
    display: Hospital Discharge notification
    target:
    - equivalence: unmatched
      comment: In DaVinci the notifications are not indicating the current treatment
        facility type/location, but rather the discharge to location - can expand
        the valueset, since binding is extensible
  - code: 80110-0
    display: Emergency department Visit notification
    target:
    - equivalence: unmatched
      comment: In DaVinci the notifications are not differentiating between visit
        and admit for ER - can expand the valueset, since binding is extensible
  - code: 98143-1
    display: Emergency department Arrival notification
    target:
    - equivalence: unmatched
      comment: In DaVinci the notifications are not differentiating between arrival
        and admit for ER - can expand the valueset, since binding is extensible
  - code: 86532-9
    display: Admission notification
    target:
    - equivalence: unmatched
  - code: 98144-9
    display: Emergency department Departure notification
    target:
    - equivalence: unmatched
      comment: In DaVinci the notifications are not differentiating between departure
        and discharge for ER - can expand the valueset, since binding is extensible
  - code: 86531-1
    display: Discharge notification
    target:
    - code: notification-discharge
      equivalence: equivalent
  - code: 98142-3
    display: Emergency department Discharge notification
    target:
    - equivalence: unmatched
      comment: In DaVinci the notifications are not indicating the current treatment
        facility type/location, but rather the discharge to location - can expand
        the valueset, since binding is extensible
  - code: 98145-6
    display: Outpatient Visit notification
    target:
    - code: notification-outpatient-visit
      equivalence: equivalent
- source: http://terminology.hl7.org/CodeSystem/v2-0004
  target: http://terminology.hl7.org/CodeSystem/v3-ActCode
  element:
  - code: E
    display: Emergency
    target:
    - code: EMER
      display: emergency
      equivalence: equivalent
  - code: I
    display: Inpatient
    target:
    - code: IMP
      display: inpatient encounter
      equivalence: equivalent
  - code: O
    display: Outpatient
    target:
    - code: AMB
      display: ambulatory
      equivalence: equivalent
  - code: P
    display: Preadmit
    target:
    - code: PRENC
      display: pre-admission
      equivalence: equivalent
  - code: R
    display: Recurring patient
    target:
    - equivalence: unmatched
      comment: 'Since binding is extensible, can extend valueset definition to include
        CHR : Chronic from https://hl7.org/fhir/R4/v3/ActCode/cs.html#v3-ActCode-_ActMedicalServiceCode'
  - code: B
    display: Obstetrics
    target:
    - equivalence: unmatched
      comment: 'Since binding is extensible, can extend valueset definition to include
        OBS : Obstetrics from https://hl7.org/fhir/R4/v3/ActCode/cs.html#v3-ActCode-_ActMedicalServiceCode'
  - code: C
    display: Commercial Account
    target:
    - equivalence: unmatched
      comment: Need more information to know how this is used in ADT to find the proper
        translation
  - code: N
    display: Not Applicable
    target:
    - equivalence: unmatched
      comment: 'Since binding is extensible, can extend valueset definition to include
        NA : not applicable from https://terminology.hl7.org/CodeSystem-v3-NullFlavor.html'
  - code: U
    display: Unknown
    target:
    - equivalence: unmatched
      comment: 'Since binding is extensible, can extend valueset definition to include
        UNK : unknown from https://terminology.hl7.org/CodeSystem-v3-NullFlavor.html'
  - code: I
    display: Inpatient
    target:
    - code: ACUTE
      display: inpatient acute
      equivalence: equivalent
      comment: If this is needed in Direct Trust, can consider expanding the value
        set
  - code: I
    display: Inpatient
    target:
    - code: NONAC
      display: inpatient non-acute
      equivalence: equivalent
      comment: If this is needed in Direct Trust, can consider expanding the value
        set
- source: ''
  target: http://terminology.hl7.org/CodeSystem/v3-ActCode
  element:
  - code: S
    display: Short Stay
    target:
    - code: SS
      display: short stay
      equivalence: equivalent
      comment: S is an extension to the base PV1-2 patientClass  value set in V2
  - code: V
    display: Observation
    target:
    - code: OBSENC
      display: observation encounter
      equivalence: equivalent
      comment: V is an extension to the base PV1-2 patientClass  value set in V2
- source: http://terminology.hl7.org/CodeSystem/v2-0443
  target: http://terminology.hl7.org/CodeSystem/v3-ParticipationType
  element:
  - code: AD
    display: Admitting
    target:
    - code: ADM
      display: admitter
      equivalence: equivalent
      comment: Also in PV1-17 Admitting Doctor in v2
  - code: AT
    display: Attending
    target:
    - code: ATND
      display: attender
      equivalence: equivalent
      comment: Also in PV1-7 Attending Doctor in v2
  - code: CP
    display: Consulting Provider
    target:
    - code: CON
      display: consultant
      equivalence: equivalent
      comment: Also in PV1-9 Consulting Doctor
  - code: FHCP
    display: Family Health Care Professional
    target:
    - equivalence: unmatched
      comment: participant type valueset binding is extensible, so could add in "FHCP"
        from https://terminology.hl7.org/2.1.0/CodeSystem-v2-0443.html
  - code: PP
    display: Primary Care Provider
    target:
    - equivalence: unmatched
      comment: participant type valueset binding is extensible, so could add in "PP"
        from https://terminology.hl7.org/2.1.0/CodeSystem-v2-0443.html
  - code: RP
    display: Referring Provider
    target:
    - code: REF
      display: referrer
      equivalence: equivalent
      comment: Also in PV1-8 Referring doctor in v2
  - code: RT
    display: Referred to Provider
    target:
    - code: REFT
      display: Referred to
      equivalence: equivalent
- source: ''
  target: http://terminology.hl7.org/CodeSystem/v3-ParticipationType
  element:
  - code: TF
    display: Treating Facility
    target:
    - code: LOC
      display: location
      equivalence: equivalent
      comment: TF  is an extension to the base ROL-3 providerRole value set in V2
- source: http://terminology.hl7.org/CodeSystem/v2-0001
  target: http://hl7.org/fhir/administrative-gender
  element:
  - code: F
    display: Female
    target:
    - code: female
      display: Female
      equivalence: equivalent
  - code: M
    display: Male
    target:
    - code: male
      display: Male
      equivalence: equivalent
  - code: O
    display: Other
    target:
    - code: other
      display: Other
      equivalence: equivalent
  - code: U
    display: Unknown
    target:
    - code: unknown
      display: Unknown
      equivalence: equivalent
  - code: A
    display: Ambiguous
    target:
    - code: other
      display: Other
      equivalence: equivalent
      comment: Since the binding in USCorePatient is required, will have to map to
        "other"
  - code: N
    display: Not Applicable
    target:
    - code: other
      display: Other
      equivalence: equivalent
      comment: Since the binding in USCorePatient is required, will have to map to
        "other"
  - code: X
    display: Non-Binary
    target:
    - code: other
      display: Other
      equivalence: equivalent
      comment: Since the binding in USCorePatient is required, will have to map to
        "other"
- source: http://terminology.hl7.org/CodeSystem/v2-0200
  target: http://hl7.org/fhir/name-use
  element:
  - code: N
    display: Nickname
    target:
    - code: nickname
      display: Nickname
      equivalence: equivalent
  - code: D
    display: Customary Name
    target:
    - code: usual
      display: Usual
      equivalence: equivalent
  - code: L
    display: Official Registry Name
    target:
    - code: official
      display: Official
      equivalence: equivalent
  - code: TEMP
    display: Temporary Name
    target:
    - code: temp
      display: Temp
      equivalence: equivalent
  - code: S
    display: Pseudonym
    target:
    - code: anonymous
      display: Anonymous
      equivalence: equivalent
  - code: BAD
    display: Bad Name
    target:
    - code: old
      display: Old
      equivalence: equivalent
  - code: M
    display: Maiden Name
    target:
    - code: maiden
      display: Name changed for Marriage
      equivalence: equivalent
  - code: O
    display: Other
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: A
    display: Assigned
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: B
    display: Birth name
    target:
    - code: maiden
      display: Name changed for Marriage
      equivalence: equivalent
  - code: C
    display: Adopted Name
    target:
    - code: official
      display: Official
      equivalence: equivalent
  - code: F
    display: Fathers Name
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: I
    display: Licensing Name
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: K
    display: Business name
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: MSK
    display: Masked
    target:
    - code: anonymous
      display: Anonymous
      equivalence: equivalent
  - code: NAV
    display: Temporarily Unavailable
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: NB
    display: Newborn Name
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: NOUSE
    display: No Longer To Be Used
    target:
    - code: old
      display: Old
      equivalence: equivalent
  - code: P
    display: Name of Partner/Spouse
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: R
    display: Registered Name
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: REL
    display: Religious
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
  - code: T
    display: Indigenous/Tribal
    target:
    - code: official
      display: Official
      equivalence: equivalent
  - code: U
    display: Unknown
    target:
    - equivalence: unmatched
      comment: Not mapable, since binding in USCorePatient is required
- source: http://terminology.hl7.org/CodeSystem/v2-0007
  target: http://snomed.info/sct
  element:
  - code: A
    display: Accident
    target:
    - equivalence: unmatched
      comment: "Include codes from AMA (I have no license to see, so could not include)
        and http: //snomed.info/sct where concept is-a 308335008 (Patient encounter
        procedure)\n Not sure this is the right mapping - concepts seem not alinged\n
        Need to take to PA to find out how folks are currently using https://terminology.hl7.org/5.2.0/CodeSystem-v2-0007.html
        values - and then decide, if these need to be updated to match what US Core
        is doing (much more granular)\n in CDA use https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.80.32/expansion/Latest"
  - code: E
    display: Emergency
    target:
    - code: '4525004'
      display: Emergency department patient visit
      equivalence: equivalent
  - code: L
    display: Labor and Delivery
    target:
    - equivalence: unmatched
      comment: "Include codes from AMA (I have no license to see, so could not include)
        and http: //snomed.info/sct where concept is-a 308335008 (Patient encounter
        procedure)\n Not sure this is the right mapping - concepts seem not alinged\n
        Need to take to PA to find out how folks are currently using https://terminology.hl7.org/5.2.0/CodeSystem-v2-0007.html
        values - and then decide, if these need to be updated to match what US Core
        is doing (much more granular)\n in CDA use https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.80.32/expansion/Latest"
  - code: R
    display: Routine
    target:
    - code: '308335008'
      display: Patient encounter procedure
      equivalence: equivalent
  - code: N
    display: Newborn (Birth in healthcare facility)
    target:
    - equivalence: unmatched
      comment: "Include codes from AMA (I have no license to see, so could not include)
        and http: //snomed.info/sct where concept is-a 308335008 (Patient encounter
        procedure)\n Not sure this is the right mapping - concepts seem not alinged\n
        Need to take to PA to find out how folks are currently using https://terminology.hl7.org/5.2.0/CodeSystem-v2-0007.html
        values - and then decide, if these need to be updated to match what US Core
        is doing (much more granular)\n in CDA use https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.80.32/expansion/Latest"
  - code: U
    display: Urgent
    target:
    - equivalence: unmatched
      comment: "Include codes from AMA (I have no license to see, so could not include)
        and http: //snomed.info/sct where concept is-a 308335008 (Patient encounter
        procedure)\n Not sure this is the right mapping - concepts seem not alinged\n
        Need to take to PA to find out how folks are currently using https://terminology.hl7.org/5.2.0/CodeSystem-v2-0007.html
        values - and then decide, if these need to be updated to match what US Core
        is doing (much more granular)\n in CDA use https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.80.32/expansion/Latest"
  - code: C
    display: Elective
    target:
    - equivalence: unmatched
      comment: "Include codes from AMA (I have no license to see, so could not include)
        and http: //snomed.info/sct where concept is-a 308335008 (Patient encounter
        procedure)\n Not sure this is the right mapping - concepts seem not alinged\n
        Need to take to PA to find out how folks are currently using https://terminology.hl7.org/5.2.0/CodeSystem-v2-0007.html
        values - and then decide, if these need to be updated to match what US Core
        is doing (much more granular)\n in CDA use https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.88.12.80.32/expansion/Latest"
- source: http://terminology.hl7.org/CodeSystem/v2-0052
  target: http://terminology.hl7.org/CodeSystem/diagnosis-role
  element:
  - code: A
    display: Admitting
    target:
    - code: AD
      display: Admission diagnosis
      equivalence: equivalent
  - code: W
    display: Working
    target:
    - equivalence: unmatched
      comment: Since binding is extensible, can extend valueset, should submit UTG
        proposal to add to code system
  - code: F
    display: Final
    target:
    - code: DD
      display: Discharge diagnosis
      equivalence: equivalent
- source: http://terminology.hl7.org/CodeSystem/v2-0063
  target: http://terminology.hl7.org/CodeSystem/v3-RoleCode
  element:
  - code: MTH
    target:
    - code: MTH
      display: Mother
      equivalence: equivalent
      comment: This is described specifically for the maternal health use case
- source: http://terminology.hl7.org/CodeSystem/v2-0201
  target: http://hl7.org/fhir/contact-point-use
  element:
  - code: PRN
    display: Primary Residence Number
    target:
    - code: home
      display: Home
      equivalence: equivalent
      comment: FHIR doesn't distinguish types of homes for contacts
  - code: ORN
    display: Other Residence Number
    target:
    - code: home
      display: Home
      equivalence: equivalent
      comment: FHIR doesn't distinguish types of homes for contacts
  - code: WPN
    display: Work Number
    target:
    - code: work
      display: Work
      equivalence: equivalent
  - code: VHN
    display: Vacation Home Number
    target:
    - code: home
      display: Home
      equivalence: equivalent
      comment: FHIR doesn't distinguish types of homes for contacts
  - code: ASN
    display: Answering Service Number
    target:
    - equivalence: unmatched
  - code: EMR
    display: Emergency Number
    target:
    - equivalence: unmatched
      comment: unsure how to map this
  - code: PRS
    display: Personal
    target:
    - equivalence: unmatched
      comment: unsure how to map this
- source: http://terminology.hl7.org/CodeSystem/v2-0201
  target: http://hl7.org/fhir/contact-point-system
  element:
  - code: NET
    display: Network (email) Address
    target:
    - code: email
      display: Email
      equivalence: equivalent
      comment: would need to map to different datatype element and use different value
        set
  - code: BPN
    display: Beeper Number
    target:
    - code: pager
      display: Pager
      equivalence: equivalent
      comment: would need to map to different datatype element and use different value
        set
- source: http://terminology.hl7.org/CodeSystem/v2-0201
  target: ''
  element:
  - code: DSM
    display: Direct Secure Messaging
    target:
    - equivalence: unmatched
      comment: does not map at the vocabulary level - maps to extension in US Core
        = https://hl7.org/fhir/us/core/StructureDefinition-us-core-direct.html


---

// File: input/resources-yaml/StructureDefinition-admit-notification-messageheader.yml

resourceType: StructureDefinition
id: admit-notification-messageheader
url: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader
version: 1.0.0
name: AdmitNotificationMessageHeader
title: Da Vinci Admit Notification MessageHeader Profile
status: active
experimental: false
date: '2019-11-12T00:00:00-08:00'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  The Da Vinci Admit Notification MessageHeader Profile builds on the [Da Vinci
  Notifications MessageHeader Profile](StructureDefinition-notifications-messageheader.html) and sets minimum expectations for the
  FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html) resource to record the necessary context for Da Vinci
  admit notification messaging scenario.  The event code is "notification-admit"
  and the focus of the event is the Encounter.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
fhirVersion: 4.0.1
kind: resource
abstract: false
type: MessageHeader
baseDefinition: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
derivation: constraint
differential:
  element:
    - id: MessageHeader
      path: MessageHeader
      mustSupport: false
    - id: MessageHeader.eventCoding
      path: MessageHeader.eventCoding
      min: 1
      max: '1'
      type:
        - code: Coding
      mustSupport: true
      binding:
        strength: extensible
        valueSet: >-
          http://hl7.org/fhir/us/davinci-alerts/ValueSet/notification-admit-event
    - id: MessageHeader.focus
      path: MessageHeader.focus
      slicing:
        discriminator:
          - type: profile
            path: $this.resolve()
        rules: open
      min: 1
      max: '*'
      mustSupport: true
    - id: 'MessageHeader.focus:admit-notification'
      path: MessageHeader.focus
      sliceName: admit-notification
      min: 1
      max: '*'
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter'
          aggregation:
            - bundled
      mustSupport: true


---

// File: input/resources-yaml/StructureDefinition-adt-notification-condition.yml

resourceType: StructureDefinition
id: adt-notification-condition
# ======= add to support 3 US Core Versions ========
extension:
  - url: >-
      http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile
    valueCanonical: >-
      http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition|3.1.1
  - url: >-
      http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile
    valueCanonical: >-
      http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis|6.1.0
# =========================================================
url: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
version: 1.0.0
name: ADTNotificationConditionProfile
title: Da Vinci Admit/Discharge/Transfer Notification Condition Profile
status: active
experimental: false
date: '2019-11-12T00:00:00-08:00'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  The Da Vinci Admit/Discharge/Transfer Notification Condition Profile is based on the US Core Condition Encounter Diagnosis Profile and and complies with US Core versions 3.1.1, 6.1.0, and 7.0.0. It adds the mandatory `Condition.encounter` element which references the [Da Vinci Admit/Discharge/Transfer Notification Encounter Profile](StructureDefinition-adt-notification-encounter.html) in the same message Bundle.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
fhirVersion: 4.0.1
kind: resource
abstract: false
type: Condition
baseDefinition: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis'
derivation: constraint
differential:
  element:
    - id: Condition
      path: Condition
    - id: Condition.encounter
      path: Condition.encounter
      min: 1
      max: '1'
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter'
          aggregation:
            - bundled
      mustSupport: true
    - id: Condition.encounter.reference
      path: Condition.encounter.reference
      min: 1
      max: '1'
      mustSupport: true


---

// File: input/resources-yaml/StructureDefinition-adt-notification-coverage.yml

resourceType: StructureDefinition
id: adt-notification-coverage
# ======= add to support 3 US Core Versions ========
extension:
  - url: >-
      http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile
    valueCanonical: >-
      http://hl7.org/fhir/us/core/StructureDefinition/us-core-coverage|6.1.0
# =========================================================

url: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
version: 1.0.0
name: ADTNotificationCoverageProfile
title: Da Vinci Admit/Discharge/Transfer Notification Coverage Profile
status: active
experimental: false
date: '2020-08-24'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  The Da Vinci Admit/Discharge/Transfer Notification Coverage Profile is based on the [HRex
  Coverage Profile](http://build.fhir.org/ig/HL7/davinci-ehrx/StructureDefinition-hrex-coverage.html) and constrains the Patient resource referenced by the
  `Coverage.beneficiary` element to be found in the same message Bundle.

  The Da Vinci Admit/Discharge/Transfer Notification Coverage Profile is based on the US Core
  Coverage Profile and complies with US Core versions 6.1.0, and 7.0.0.  It constrains the resources referenced by the
  `Coverage.beneficiary` element to the US Core Patient
  Profile. It also constrains the referenced resource to be an entry in the message Bundle that it populates.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
fhirVersion: 4.0.1
kind: resource
abstract: false
type: Coverage
baseDefinition: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-coverage'
derivation: constraint
differential:
  element:
    - id: Coverage
      path: Coverage
    - id: Coverage.beneficiary
      path: Coverage.beneficiary
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'

          aggregation:
            - bundled


---

// File: input/resources-yaml/StructureDefinition-adt-notification-encounter.yml

resourceType: StructureDefinition
id: adt-notification-encounter
# ======= add to support 3 US Core Versions ========
extension:
  - url: >-
      http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile
    valueCanonical: >-
      http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter|3.1.1
  - url: >-
      http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile
    valueCanonical: >-
      http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter|6.1.0
# =========================================================
url: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
version: 1.0.0
name: ADTNotificationEncounterProfile
title: Da Vinci Admit/Discharge/Transfer Notification Encounter Profile
status: active
experimental: false
date: '2019-11-12T00:00:00-08:00'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  The Da Vinci Admit/Discharge/Transfer Notification Encounter Profile is based on the US Core
  Encounter Profile and complies with US Core versions 3.1.1, 6.1.0, and 7.0.0.  It constrains the resources referenced by the
  `Encounter.Subject` to the US Core Patient
  Profile ,`Encounter.participant.individual` to the US Core Practitioner
  Profile and `Encounter.Location` to the US Core Location
  Profile. It also constrains these referenced resources to be entries in the message Bundle that it populates.

jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
fhirVersion: 4.0.1
kind: resource
abstract: false
type: Encounter
baseDefinition: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter'
derivation: constraint
differential:
  element:
    - id: Encounter
      path: Encounter
    - id: Encounter.subject
      path: Encounter.subject
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'
          aggregation:
            - bundled
      mustSupport: true
    - id: Encounter.subject.reference
      path: Encounter.subject.reference
      min: 1
      max: '1'
      mustSupport: true
    - id: Encounter.participant
      path: Encounter.participant
    - id: Encounter.participant.individual
      path: Encounter.participant.individual
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'

          aggregation:
            - bundled
      mustSupport: true
    - id: Encounter.participant.individual.reference
      path: Encounter.participant.individual.reference
      min: 1
      max: '1'
      mustSupport: true
    - id: Encounter.location
      path: Encounter.location
      mustSupport: true
    - id: Encounter.location.location
      path: Encounter.location.location
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-location'
          aggregation:
            - bundled
      mustSupport: true
    - id: Encounter.location.location.reference
      path: Encounter.location.location.reference
      min: 1
      max: '1'
      mustSupport: true


---

// File: input/resources-yaml/StructureDefinition-discharge-notification-messageheader.yml

resourceType: StructureDefinition
id: discharge-notification-messageheader
url: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/discharge-notification-messageheader
version: 1.0.0
name: DischargeNotificationMessageHeader
title: Da Vinci Discharge Notification MessageHeader Profile
status: active
experimental: false
date: '2019-11-12T00:00:00-08:00'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  The Da Vinci Discharge Notification MessageHeader Profile  builds on  the [Da Vinci
  Notifications MessageHeader Profile](StructureDefinition-notifications-messageheader.html) and sets  minimum expectations for
  the FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html) resource to record the necessary context for Da Vinci
  discharge notification messaging scenario.  The event code is "notification-discharge" and the focus of the event is the Encounter.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
fhirVersion: 4.0.1
kind: resource
abstract: false
type: MessageHeader
baseDefinition: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
derivation: constraint
differential:
  element:
    - id: MessageHeader
      path: MessageHeader
      mustSupport: false
    - id: MessageHeader.eventCoding
      path: MessageHeader.eventCoding
      min: 1
      max: '1'
      type:
        - code: Coding
      mustSupport: true
      binding:
        strength: extensible
        valueSet: >-
          http://hl7.org/fhir/us/davinci-alerts/ValueSet/notification-discharge-event
    - id: MessageHeader.focus
      path: MessageHeader.focus
      slicing:
        discriminator:
          - type: profile
            path: $this.resolve()
        rules: open
      min: 1
      max: '*'
      mustSupport: true
    - id: 'MessageHeader.focus:discharge-notification'
      path: MessageHeader.focus
      sliceName: discharge-notification
      min: 1
      max: '*'
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter'
          aggregation:
            - bundled
      mustSupport: true


---

// File: input/resources-yaml/StructureDefinition-notifications-bundle.yml

resourceType: StructureDefinition
id: notifications-bundle
url: 'http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle'
version: 0.2.1
name: NotificationsBundle
title: Da Vinci Notifications Bundle Profile
status: active
experimental: false
date: '2019-11-15T00:00:00+00:00'
publisher: Health eData Inc
description: >-
  The Da Vinci Notifications Bundle Profile constrains the FHIR [Bundle](http://hl7.org/fhir/R4/bundle.html)
  resource to the Da Vinci notification messaging framework.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
        display: United States of America
fhirVersion: 4.0.1
kind: resource
abstract: false
type: Bundle
baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Bundle'
derivation: constraint
differential:
  element:
    - id: Bundle
      path: Bundle
      mustSupport: false
    - id: Bundle.id
      path: Bundle.id
      min: 1
      mustSupport: true
    - id: Bundle.type
      path: Bundle.type
      type:
        - code: code
      fixedCode: message
      mustSupport: true
    - id: Bundle.timestamp
      path: Bundle.timestamp
      min: 1
      mustSupport: true
    - id: Bundle.total
      path: Bundle.total
      min: 0
      max: '0'
      mustSupport: false
      comment: This element is constrained to min = 0 because of the invariant `bdl-1`
    - id: Bundle.entry
      path: Bundle.entry
      slicing:
        discriminator:
          - type: type
            path: resource
        rules: open
      min: 2
      max: '*'
      mustSupport: true
    - id: Bundle.entry.search
      path: Bundle.entry.search
      min: 0
      max: '0'
      mustSupport: false
      comment: This element is constrained to min = 0 because of the invariant `bdl-2`
    - id: Bundle.entry.request
      path: Bundle.entry.request
      min: 0
      max: '0'
      mustSupport: false
      comment: This element is constrained to min = 0 because of the invariant `bdl-3`
    - id: Bundle.entry.response
      path: Bundle.entry.response
      min: 0
      max: '0'
      mustSupport: false
      comment: This element is constrained to min = 0 because of the invariant `bdl-4`
    - id: 'Bundle.entry:messageheader'
      path: Bundle.entry
      sliceName: messageheader
      min: 1
      max: '1'
      mustSupport: true
    - id: 'Bundle.entry:messageheader.resource'
      path: Bundle.entry.resource
      min: 1
      max: '1'
      type:
        - code: MessageHeader
          profile:
            - >-
              http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
      mustSupport: true


---

// File: input/resources-yaml/StructureDefinition-notifications-messageheader.yml

resourceType: StructureDefinition
id: notifications-messageheader
url: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
version: 1.0.0
name: NotificationsMessageHeader
title: Da Vinci Notifications MessageHeader Profile
status: active
experimental: false
date: '2019-11-13T00:00:00-08:00'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  The Da Vinci Notifications MessageHeader Profile sets minimum expectations for
  the FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html) resource to record the necessary context for Da Vinci
  notification messaging using FHIR resources.  It references the focus of the
  use case event or request as well as other information related to the action
  typically transmitted in a [Bundle](http://hl7.org/fhir/R4/bundle.html) resource in which the MessageHeader
  resource instance is the first resource in the Bundle.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
fhirVersion: 4.0.1
kind: resource
abstract: false
type: MessageHeader
baseDefinition: 'http://hl7.org/fhir/StructureDefinition/MessageHeader'
derivation: constraint
differential:
  element:
    - id: MessageHeader
      path: MessageHeader
      mustSupport: false
    - id: MessageHeader.id
      path: MessageHeader.id
      min: 1
      mustSupport: true

    - id: MessageHeader.eventCoding
      path: MessageHeader.eventCoding
      min: 1
      max: '1'
      type:
        - code: Coding
      mustSupport: true
      binding:
        strength: extensible
        valueSet: 'http://hl7.org/fhir/us/davinci-alerts/ValueSet/notification-event'
    - id: MessageHeader.destination
      path: MessageHeader.destination
      min: 0
      max: '1'
      mustSupport: true
    - id: MessageHeader.destination.endpoint
      path: MessageHeader.destination.endpoint
      min: 1
      max: '1'
      mustSupport: true
    - id: MessageHeader.sender
      path: MessageHeader.sender
      min: 0
      max: '1'
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|3.1.1'
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0'
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|7.0.0'
            - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-practitionerrole'
            - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization'
          aggregation:
            - bundled
      mustSupport: true

#=========== extension for sender to include Device ==============
    - id: 'MessageHeader.sender.extension:Device'
      path: MessageHeader.sender.extension
      sliceName: Device
      short: Device as a sender
      min: 0
      max: '1'
      type:
        - code: Extension
          profile:
            - 'http://hl7.org/fhir/StructureDefinition/alternate-reference'
      mustSupport: true

    - id: 'MessageHeader.sender.extension:Device.value[x]'
      path: MessageHeader.sender.extension.value[x]
      min: 1
      max: '1'
      type:
        - code: Reference
          targetProfile:
            - >-
              http://hl7.org/fhir/StructureDefinition/Device
          aggregation:
            - bundled
      mustSupport: true
#===============================

    - id: MessageHeader.sender.reference
      path: MessageHeader.sender.reference
      min: 0
      max: '1'
      mustSupport: true

    - id: MessageHeader.author
      path: MessageHeader.author
      min: 0
      max: '1'
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|3.1.1'
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0'
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|7.0.0'
            - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-practitionerrole'
          aggregation:
            - bundled
      mustSupport: true

#=========== extension for author to include Device ==============
    - id: 'MessageHeader.author.extension:Device'
      path: MessageHeader.author.extension
      sliceName: Device
      short: Device as a author
      min: 0
      max: '1'
      type:
        - code: Extension
          profile:
            - 'http://hl7.org/fhir/StructureDefinition/alternate-reference'
      mustSupport: true

    - id: 'MessageHeader.author.extension:Device.value[x]'
      path: MessageHeader.author.extension.value[x]
      min: 1
      max: '1'
      type:
        - code: Reference
          targetProfile:
            - >-
              http://hl7.org/fhir/StructureDefinition/Device
          aggregation:
            - bundled
      mustSupport: true
#===============================

    - id: MessageHeader.author.reference
      path: MessageHeader.author.reference
      min: 0
      max: '1'
      mustSupport: true



    - id: MessageHeader.source
      path: MessageHeader.source
      mustSupport: true
    - id: MessageHeader.responsible
      path: MessageHeader.responsible
      min: 0
      max: '1'
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|3.1.1'
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0'
            - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|7.0.0'
            - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-practitionerrole'
            - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization'
          aggregation:
            - bundled
      mustSupport: true
    - id: MessageHeader.responsible.reference
      path: MessageHeader.responsible.reference
      min: 1
      max: '1'
      mustSupport: true
    - id: MessageHeader.response
      path: MessageHeader.response
      min: 0
      max: '0'
      mustSupport: false
    - id: MessageHeader.focus
      path: MessageHeader.focus
      min: 1
      max: '*'
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/StructureDefinition/Resource'
          aggregation:
            - bundled
      mustSupport: true
    - id: MessageHeader.focus.reference
      path: MessageHeader.focus.reference
      min: 1
      max: '1'
      mustSupport: true


---

// File: input/resources-yaml/StructureDefinition-transfer-notification-messageheader.yml

resourceType: StructureDefinition
id: transfer-notification-messageheader
url: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/transfer-notification-messageheader
version: 1.0.0
name: TransferNotificationMessageHeader
title: Da Vinci Transfer Notification MessageHeader Profile
status: active
experimental: false
date: '2020-08-17T13:51:55-07:00'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  The Da Vinci Transfer Notification MessageHeader Profile builds on the [Da Vinci
  Notifications MessageHeader Profile](StructureDefinition-notifications-messageheader.html) and sets minimum expectations for
  the FHIR [MessageHeader](http://hl7.org/fhir/R4/messageheader.html) resource to record the necessary context for Da Vinci
  transfer notification messaging scenario.  The event code is "notification-transfer" and the focus of the event is the Encounter.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
fhirVersion: 4.0.1
kind: resource
abstract: false
type: MessageHeader
baseDefinition: >-
  http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
derivation: constraint
differential:
  element:
    - id: MessageHeader
      path: MessageHeader
      mustSupport: false
    - id: MessageHeader.eventCoding
      path: MessageHeader.eventCoding
      min: 1
      max: '1'
      type:
        - code: Coding
      mustSupport: true
      binding:
        strength: extensible
        valueSet: >-
          http://hl7.org/fhir/us/davinci-alerts/ValueSet/notification-transfer-event
    - id: MessageHeader.focus
      path: MessageHeader.focus
      slicing:
        discriminator:
          - type: profile
            path: $this.resolve()
        rules: open
      min: 1
      max: '*'
      mustSupport: true
    - id: 'MessageHeader.focus:transfer-notification'
      path: MessageHeader.focus
      sliceName: transfer-notification
      min: 1
      max: '*'
      type:
        - code: Reference
          targetProfile:
            - 'http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter'
          aggregation:
            - bundled
      mustSupport: true


---

// File: input/resources-yaml/ValueSet-notification-admit-event.yml

resourceType: ValueSet
id: notification-admit-event
url: 'http://hl7.org/fhir/us/davinci-alerts/ValueSet/notification-admit-event'
version: 1.0.0
name: NotificationAdmitEventValueSet
title: Da Vinci Notification Admit Event ValueSet
status: active
experimental: false
date: '2019-07-12'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  Concepts describing Da Vinci Unsolicited Admit Notification notification
  events.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
purpose: Provide Notification Receivers with coded notification context
copyright: >-
  This Content is created by the Da Vinci project and HL7. No copyright
  acknowledgement is needed, nor are there any license terms to adhere to
compose:
  include:
    - system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
      filter:
        - property: concept
          op: is-a
          value: notification-admit


---

// File: input/resources-yaml/ValueSet-notification-discharge-event.yml

resourceType: ValueSet
id: notification-discharge-event
url: 'http://hl7.org/fhir/us/davinci-alerts/ValueSet/notification-discharge-event'
version: 1.0.0
name: NotificationDischargeEventValueSet
title: Da Vinci Notification Discharge Event ValueSet
status: active
experimental: false
date: '2019-07-12'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  Concepts describing Da Vinci Unsolicited Notification discharge notification
  events.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
purpose: Provide Notification Receivers with coded notification context
copyright: >-
  This Content is created by the Da Vinci project and HL7. No copyright
  acknowledgement is needed, nor are there any license terms to adhere to
compose:
  include:
    - system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
      filter:
        - property: concept
          op: is-a
          value: notification-discharge


---

// File: input/resources-yaml/ValueSet-notification-event.yml

resourceType: ValueSet
id: notification-event
url: 'http://hl7.org/fhir/us/davinci-alerts/ValueSet/notification-event'
version: 1.0.0
name: NotificationEventValueSet
title: Da Vinci Notification Event ValueSet
status: active
experimental: false
date: '2019-07-12'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: Concepts describing the purpose of the Da Vinci Unsolicited Notification.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
purpose: Provide Notification Receivers with coded notification context
copyright: >-
  This Content is created by the Da Vinci project and HL7. No copyright
  acknowledgement is needed, nor are there any license terms to adhere to
compose:
  include:
    - system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'


---

// File: input/resources-yaml/ValueSet-notification-transfer-event.yml

resourceType: ValueSet
id: notification-transfer-event
url: 'http://hl7.org/fhir/us/davinci-alerts/ValueSet/notification-transfer-event'
version: 1.0.0
name: NotificationTransferEventValueSet
title: Da Vinci Notification Transfer Event ValueSet
status: active
experimental: false
date: '2019-07-12'
publisher: HL7 International - Infrastructure and Messaging Work Group
contact:
  - telecom:
      - system: url
        value: 'http://www.hl7.org/Special/committees/inm/index.cfm'
description: >-
  Concepts describing Da Vinci Unsolicited Notification transfer notification
  events.
jurisdiction:
  - coding:
      - system: 'urn:iso:std:iso:3166'
        code: US
purpose: Provide Notification Receivers with coded notification context
copyright: >-
  This Content is created by the Da Vinci project and HL7. No copyright
  acknowledgement is needed, nor are there any license terms to adhere to
compose:
  include:
    - system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
      filter:
        - property: concept
          op: is-a
          value: notification-transfer


---

// File: input/includes/examples-note.md


### Examples

For examples of this profile within a bundle, see these message Bundles examples:

{% for example in site.data.example_profile_list -%}
{% if example[1] contains profile_url -%}
- [{{example[0]}}]
{% endif -%}
{% endfor %} 


---

// File: input/data/example_profile_list.yml


# ================================================================================================
# This file is generated by the python script at 
# `https://github.com/Healthedata1/MyNotebooks/blob/master/utils/Add_meta.ipynblist_meta_profiles.ipynb`
# ================================================================================================


Admit Notification Intermediate Translate Bundle:
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Admit Notification Intermediate Transmit Bundle:
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
- http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Admit Notification Message Bundle 01:
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
- http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization
Admit Notification Message Bundle 02:
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
- http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization
Discharge Notification Message Bundle:
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/discharge-notification-messageheader
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
- http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization
Transfer Notification Message Bundle:
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/transfer-notification-messageheader
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
- http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition
- http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
- http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization


---

// File: input/examples-yaml/admit-notification-intermediate-translate-bundle.yml

id: admit-notification-intermediate-translate-bundle
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString:  Admit Notification Intermediate Translate Bundle
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown:  Admit Notification Intermediate Translate Bundle example

  profile:
    - >-
      http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
entry:
  - fullUrl: 'urn:uuid:5ef532e2-e105-11ea-a6e7-0aa89ff15e09'
    resource:
      id: 5ef532e2-e105-11ea-a6e7-0aa89ff15e09
      meta:
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader
      author:
        display: Dr. Janeth814 Jakubowski832
        reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      destination:
        - endpoint: 'https://example.org/Endpoints/my-destination'
          name: My Destination
      eventCoding:
        code: notification-admit
        display: Admit Notification
        system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
      focus:
        - display: Admit Notification(Unknown (qualifier value))
          reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      responsible:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      sender:
        display: Da Vinci Intermediary
        reference: 'urn:uuid:4f7c997a-d6a4-11ea-814c-b5baa7182d44'
      source:
        contact:
          system: phone
          value: +1-800-555-5555
        endpoint: 'https://example.org/Endpoints/P999'
        name: Da Vinci Intermediary Source Application
        software: Acme Patient Manager
        version: 3.1.45.AABB
      resourceType: MessageHeader
  - fullUrl: 'urn:uuid:5ef59a0c-e105-11ea-a6e7-0aa89ff15e09'
    resource:
      id: 5ef59a0c-e105-11ea-a6e7-0aa89ff15e09
      meta:
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance'
      activity:
        coding:
          - code: amend
            display: Amend (Update) Record Lifecycle Event
            system: 'http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle'
        text: Remove Coverage and Forward the Bundle
      agent:
        - onBehalfOf:
            reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
          type:
            coding:
              - code: author
                display: Author
                system: >-
                  http://terminology.hl7.org/CodeSystem/provenance-participant-type
          who:
            reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
        - type:
            coding:
              - code: assembler
                display: Assembler
                system: >-
                  http://terminology.hl7.org/CodeSystem/provenance-participant-type
          who:
            reference: 'urn:uuid:4f7c997a-d6a4-11ea-814c-b5baa7182d44'
      recorded: '2020-08-18T03:46:17.181063Z'
      target:
        - reference: urn:uuid:5ef532e2-e105-11ea-a6e7-0aa89ff15e09
      resourceType: Provenance
  - fullUrl: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
    resource:
      id: 5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82
      meta:
        lastUpdated: '2020-04-28T21:32:21.199+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter'
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
        source: '#DlfWMd7j9EX8TaLI'
        versionId: '54'
      class:
        code: EMER
        system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode'
      identifier:
        - system: 'http://example.org'
          value: Elden718Halvorson12420181021T2122150700
      location:
        - location:
            display: HOLY FAMILY HOSPITAL
            reference: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
      participant:
        - individual:
            display: Dr. Janeth814 Jakubowski832
            reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      period:
        end: '2018-10-21T22:22:15-07:00'
        start: '2018-10-21T21:22:15-07:00'
      serviceProvider:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      status: in-progress
      subject:
        display: Mr. Elden718 Halvorson124
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      type:
        - coding:
            - code: '261665006'
              display: Unknown (qualifier value)
              system: 'http://snomed.info/sct'
          text: Unknown (qualifier value)
      resourceType: Encounter
  - fullUrl: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
    resource:
      id: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
      meta:
        lastUpdated: '2020-04-28T20:27:52.935+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      extension:
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2106-3
                display: White
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: White
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2186-5
                display: Not Hispanic or Latino
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: Not Hispanic or Latino
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName'
          valueString: Marge692 Yost751
        - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'
          valueCode: M
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-birthPlace'
          valueAddress:
            city: Rockland
            country: US
            state: Massachusetts
      address:
        - extension:
            - extension:
                - url: latitude
                  valueDecimal: 42.757779285956644
                - url: longitude
                  valueDecimal: -71.14760946593316
              url: 'http://hl7.org/fhir/StructureDefinition/geolocation'
          city: Methuen
          country: US
          line:
            - 715 Crona Corner
          postalCode: 01844
          state: MA
      birthDate: '2000-10-15'
      communication:
        - language:
            coding:
              - code: en-US
                display: English (Region=United States)
                system: 'urn:ietf:bcp:47'
            text: English
      gender: male
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hospital.smarthealthit.org'
          type:
            coding:
              - code: MR
                display: Medical Record Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Medical Record Number
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hl7.org/fhir/sid/us-ssn'
          type:
            coding:
              - code: SS
                display: Social Security Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Social Security Number
          value: 999-87-1037
        - system: 'urn:oid:2.16.840.1.113883.4.3.25'
          type:
            coding:
              - code: DL
                display: Driver's license number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Driver's License
          value: S99952689
      maritalStatus:
        coding:
          - code: S
            display: Never Married
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus'
        text: Never Married
      multipleBirthBoolean: false
      name:
        - family: Halvorson124
          given:
            - Elden718
          prefix:
            - Mr.
          use: official
      telecom:
        - system: phone
          use: home
          value: 555-903-1143
      resourceType: Patient
  - fullUrl: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
    resource:
      id: 09188b81-0d1d-453c-b0fa-203ef88c794c
      meta:
        lastUpdated: '2020-04-28T20:27:53.156+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-location'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      address:
        city: METHUEN
        country: US
        line:
          - 70 EAST STREET
        postalCode: 01844
        state: MA
      managingOrganization:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      name: HOLY FAMILY HOSPITAL
      position:
        latitude: 42.742751
        longitude: -71.178588
      status: active
      telecom:
        - system: phone
          value: '9786870156'
      resourceType: Location
  - fullUrl: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
    resource:
      id: 0000016f-57cb-cdac-0000-00000000014a
      meta:
        lastUpdated: '2020-04-28T20:27:53.186+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      gender: female
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9999999995'
      name:
        - family: Jakubowski832
          given:
            - Janeth814
          prefix:
            - Dr.
      telecom:
        - extension:
            - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-direct'
              valueBoolean: true
          system: email
          use: work
          value: Janeth814.Jakubowski832@example.com
      resourceType: Practitioner
  - fullUrl: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
    resource:
      id: a9f20dc1-5147-3789-bcef-bbecb41c5983
      meta:
        lastUpdated: '2020-04-28T20:27:52.708+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: a9f20dc1-5147-3789-bcef-bbecb41c5983
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9941339100'
      name: HOLY FAMILY HOSPITAL
      telecom:
        - system: phone
          value: '9786870156'
      type:
        - coding:
            - code: prov
              display: Healthcare Provider
              system: 'http://terminology.hl7.org/CodeSystem/organization-type'
          text: Healthcare Provider
      resourceType: Organization
  - fullUrl: 'urn:uuid:4ac41715-fcbd-421c-8796-9b2c9706dd3f'
    resource:
      id: 4ac41715-fcbd-421c-8796-9b2c9706dd3f
      meta:
        lastUpdated: '2020-04-28T20:28:00.008+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition'
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
        source: '#cabiJIK51sD2iz4N'
        versionId: '10'
      category:
        - coding:
            - code: encounter-diagnosis
              display: Encounter Diagnosis
              system: 'http://terminology.hl7.org/CodeSystem/condition-category'
      clinicalStatus:
        coding:
          - code: active
            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical'
      code:
        coding:
          - code: '1234'
            display: Examplitis
            system: 'http://example.org/fhir/conditions'
        text: Examplitis
      encounter:
        reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      onsetDateTime: '2018-10-21T21:22:15-07:00'
      recordedDate: '2018-10-21T21:22:15-07:00'
      subject:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      verificationStatus:
        coding:
          - code: confirmed
            system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status'
      resourceType: Condition
  - fullUrl: 'urn:uuid:4f7c997a-d6a4-11ea-814c-b5baa7182d44'
    resource:
      id: 4f7c997a-d6a4-11ea-814c-b5baa7182d44
      meta:
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'
      active: true
      address:
        - city: Chicago
          line:
            - 1 Main
          postalCode: '60007'
          state: IL
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '0000010005'
      name: Acme Message Sender
      telecom:
        - system: phone
          use: work
          value: 1-800-555-5555
      resourceType: Organization
timestamp: '2020-08-18T03:46:17.181063Z'
type: message
resourceType: Bundle


---

// File: input/examples-yaml/admit-notification-intermediate-transmit-bundle.yml

id: admit-notification-intermediate-transmit-bundle
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString:  Admit Notification Intermediate Transmit Bundle
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown:  Admit Notification Intermediate Transmit Bundle example
  profile:
    - >-
      http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
entry:
  - fullUrl: 'urn:uuid:2f5fb9f0-e103-11ea-a0c8-0aa89ff15e09'
    resource:
      id: 2f5fb9f0-e103-11ea-a0c8-0aa89ff15e09
      meta:
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader
      author:
        display: Dr. Janeth814 Jakubowski832
        reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      destination:
        - endpoint: 'https://example.org/Endpoints/my-destination'
          name: My Destination
      eventCoding:
        code: notification-admit
        display: Admit Notification
        system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
      focus:
        - display: Admit Notification(Unknown (qualifier value))
          reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      responsible:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      sender:
        display: Da Vinci Intermediary
        reference: 'urn:uuid:4f7c997a-d6a4-11ea-814c-b5baa7182d44'
      source:
        contact:
          system: phone
          value: +1-800-555-5555
        endpoint: 'https://example.org/Endpoints/P999'
        name: Da Vinci Intermediary Source Application
        software: Acme Patient Manager
        version: 3.1.45.AABB
      resourceType: MessageHeader
  - fullUrl: 'urn:uuid:2f5fddea-e103-11ea-a0c8-0aa89ff15e09'
    resource:
      id: 2f5fddea-e103-11ea-a0c8-0aa89ff15e09
      meta:
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance'
      activity:
        coding:
          - code: transmit
            display: Transmit Record Lifecycle Event
            system: 'http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle'
        text: Forward the message bundle
      agent:
        - onBehalfOf:
            reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
          type:
            coding:
              - code: author
                display: Author
                system: >-
                  http://terminology.hl7.org/CodeSystem/provenance-participant-type
          who:
            reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
        - type:
            coding:
              - code: transmitter
                display: Transmitter
                system: >-
                  http://hl7.org/fhir/us/core/CodeSystem/us-core-provenance-participant-type
          who:
            reference: 'urn:uuid:4f7c997a-d6a4-11ea-814c-b5baa7182d44'
      recorded: '2020-08-18T03:30:38.388714Z'
      target:
        - reference: urn:uuid:2f5fb9f0-e103-11ea-a0c8-0aa89ff15e09
      resourceType: Provenance
  - fullUrl: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
    resource:
      id: 5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82
      meta:
        lastUpdated: '2020-04-28T21:32:21.199+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter'
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
        source: '#DlfWMd7j9EX8TaLI'
        versionId: '54'
      class:
        code: EMER
        system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode'
      identifier:
        - system: 'http://example.org'
          value: Elden718Halvorson12420181021T2122150700
      location:
        - location:
            display: HOLY FAMILY HOSPITAL
            reference: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
      participant:
        - individual:
            display: Dr. Janeth814 Jakubowski832
            reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      period:
        end: '2018-10-21T22:22:15-07:00'
        start: '2018-10-21T21:22:15-07:00'
      serviceProvider:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      status: in-progress
      subject:
        display: Mr. Elden718 Halvorson124
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      type:
        - coding:
            - code: '261665006'
              display: Unknown (qualifier value)
              system: 'http://snomed.info/sct'
          text: Unknown (qualifier value)
      resourceType: Encounter
  - fullUrl: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
    resource:
      id: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
      meta:
        lastUpdated: '2020-04-28T20:27:52.935+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      extension:
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2106-3
                display: White
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: White
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2186-5
                display: Not Hispanic or Latino
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: Not Hispanic or Latino
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName'
          valueString: Marge692 Yost751
        - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'
          valueCode: M
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-birthPlace'
          valueAddress:
            city: Rockland
            country: US
            state: Massachusetts
      address:
        - extension:
            - extension:
                - url: latitude
                  valueDecimal: 42.757779285956644
                - url: longitude
                  valueDecimal: -71.14760946593316
              url: 'http://hl7.org/fhir/StructureDefinition/geolocation'
          city: Methuen
          country: US
          line:
            - 715 Crona Corner
          postalCode: 01844
          state: MA
      birthDate: '2000-10-15'
      communication:
        - language:
            coding:
              - code: en-US
                display: English (Region=United States)
                system: 'urn:ietf:bcp:47'
            text: English
      gender: male
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hospital.smarthealthit.org'
          type:
            coding:
              - code: MR
                display: Medical Record Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Medical Record Number
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hl7.org/fhir/sid/us-ssn'
          type:
            coding:
              - code: SS
                display: Social Security Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Social Security Number
          value: 999-87-1037
        - system: 'urn:oid:2.16.840.1.113883.4.3.25'
          type:
            coding:
              - code: DL
                display: Driver's license number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Driver's License
          value: S99952689
      maritalStatus:
        coding:
          - code: S
            display: Never Married
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus'
        text: Never Married
      multipleBirthBoolean: false
      name:
        - family: Halvorson124
          given:
            - Elden718
          prefix:
            - Mr.
          use: official
      telecom:
        - system: phone
          use: home
          value: 555-903-1143
      resourceType: Patient
  - fullUrl: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
    resource:
      id: 09188b81-0d1d-453c-b0fa-203ef88c794c
      meta:
        lastUpdated: '2020-04-28T20:27:53.156+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-location'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      address:
        city: METHUEN
        country: US
        line:
          - 70 EAST STREET
        postalCode: 01844
        state: MA
      managingOrganization:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      name: HOLY FAMILY HOSPITAL
      position:
        latitude: 42.742751
        longitude: -71.178588
      status: active
      telecom:
        - system: phone
          value: '9786870156'
      resourceType: Location
  - fullUrl: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
    resource:
      id: 0000016f-57cb-cdac-0000-00000000014a
      meta:
        lastUpdated: '2020-04-28T20:27:53.186+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      gender: female
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9999999995'
      name:
        - family: Jakubowski832
          given:
            - Janeth814
          prefix:
            - Dr.
      telecom:
        - extension:
            - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-direct'
              valueBoolean: true
          system: email
          use: work
          value: Janeth814.Jakubowski832@example.com
      resourceType: Practitioner
  - fullUrl: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
    resource:
      id: a9f20dc1-5147-3789-bcef-bbecb41c5983
      meta:
        lastUpdated: '2020-04-28T20:27:52.708+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: a9f20dc1-5147-3789-bcef-bbecb41c5983
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9941339100'
      name: HOLY FAMILY HOSPITAL
      telecom:
        - system: phone
          value: '9786870156'
      type:
        - coding:
            - code: prov
              display: Healthcare Provider
              system: 'http://terminology.hl7.org/CodeSystem/organization-type'
          text: Healthcare Provider
      resourceType: Organization
  - fullUrl: 'urn:uuid:4ac41715-fcbd-421c-8796-9b2c9706dd3f'
    resource:
      id: 4ac41715-fcbd-421c-8796-9b2c9706dd3f
      meta:
        lastUpdated: '2020-04-28T20:28:00.008+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition'
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
        source: '#cabiJIK51sD2iz4N'
        versionId: '10'
      category:
        - coding:
            - code: encounter-diagnosis
              display: Encounter Diagnosis
              system: 'http://terminology.hl7.org/CodeSystem/condition-category'
      clinicalStatus:
        coding:
          - code: active
            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical'
      code:
        coding:
          - code: '1234'
            display: Examplitis
            system: 'http://example.org/fhir/conditions'
        text: Examplitis
      encounter:
        reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      onsetDateTime: '2018-10-21T21:22:15-07:00'
      recordedDate: '2018-10-21T21:22:15-07:00'
      subject:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      verificationStatus:
        coding:
          - code: confirmed
            system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status'
      resourceType: Condition
  - fullUrl: 'urn:uuid:cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:52.686+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      beneficiary:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'

      # =========== Added to comply with US Core ==============
      relationship:
        coding:
          - system: 'http://terminology.hl7.org/CodeSystem/subscriber-relationship'
            code: self
        text: Self
      # =========================================================

      payor:
        - display: Blue Cross Blue Shield
          reference: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
      status: active
      subscriberId: '12345'
      type:
        text: Blue Cross Blue Shield
      resourceType: Coverage
  - fullUrl: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:53.069+00:00'
        profile:
          - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      active: true
      address:
        - city: Chicago
          line:
            - Michigan Plaza
          postalCode: '60007'
          state: IL
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '0000010005'
      name: Blue Cross Blue Shield
      telecom:
        - system: phone
          use: work
          value: 1-800-262-2583
      resourceType: Organization
  - fullUrl: 'urn:uuid:4f7c997a-d6a4-11ea-814c-b5baa7182d44'
    resource:
      id: 4f7c997a-d6a4-11ea-814c-b5baa7182d44
      meta:
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'
      active: true
      address:
        - city: Chicago
          line:
            - 1 Main
          postalCode: '60007'
          state: IL
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '0000010005'
      name: Da Vinci Intermediary
      telecom:
        - system: phone
          use: work
          value: 1-800-555-5555
      resourceType: Organization
timestamp: '2020-08-18T03:30:38.388714Z'
type: message
resourceType: Bundle


---

// File: input/examples-yaml/admit-notification-message-bundle-01.yml

id: admit-notification-message-bundle-01
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString:  Admit Notification Message Bundle 01
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown:  Admit Notification Message Bundle example
  profile:
    - >-
      http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
entry:
  - fullUrl: 'urn:uuid:31ab7fe2-e0ad-11ea-bf7c-864d2e68a322'
    resource:
      id: 31ab7fe2-e0ad-11ea-bf7c-864d2e68a322
      meta:
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader
      author:
        display: Dr. Janeth814 Jakubowski832
        reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      destination:
        - endpoint: https://example.org/Endpoints/DaVinci-Notifications-Intermediary
          name: Intermediary-Simulator
      eventCoding:
        code: notification-admit
        display: Admit Notification
        system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
      focus:
        - display: Admit Notification(Unknown (qualifier value))
          reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      responsible:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      sender:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      source:
        contact:
          system: phone
          value: +1 (555) 123 4567
        endpoint: 'https://example.org/Endpoints/P456'
        name: Acme Central Patient Registry
        software: FooBar Patient Manager
        version: 3.1.45.AABB
      resourceType: MessageHeader
  - fullUrl: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
    resource:
      id: 5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82
      meta:
        lastUpdated: '2020-04-28T21:32:21.199+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter'
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
        source: '#DlfWMd7j9EX8TaLI'
        versionId: '54'
      class:
        code: EMER
        system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode'
      identifier:
        - system: 'http://example.org'
          value: Elden718Halvorson12420181021T2122150700
      location:
        - location:
            display: HOLY FAMILY HOSPITAL
            reference: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
      participant:
        - individual:
            display: Dr. Janeth814 Jakubowski832
            reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      period:
        end: '2018-10-21T22:22:15-07:00'
        start: '2018-10-21T21:22:15-07:00'
      serviceProvider:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      status: in-progress
      subject:
        display: Mr. Elden718 Halvorson124
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      type:
        - coding:
            - code: '261665006'
              display: Unknown (qualifier value)
              system: 'http://snomed.info/sct'
          text: Unknown (qualifier value)
      resourceType: Encounter
  - fullUrl: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
    resource:
      id: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
      meta:
        lastUpdated: '2020-04-28T20:27:52.935+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      extension:
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2106-3
                display: White
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: White
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2186-5
                display: Not Hispanic or Latino
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: Not Hispanic or Latino
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName'
          valueString: Marge692 Yost751
        - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'
          valueCode: M
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-birthPlace'
          valueAddress:
            city: Rockland
            country: US
            state: Massachusetts
      address:
        - extension:
            - extension:
                - url: latitude
                  valueDecimal: 42.757779285956644
                - url: longitude
                  valueDecimal: -71.14760946593316
              url: 'http://hl7.org/fhir/StructureDefinition/geolocation'
          city: Methuen
          country: US
          line:
            - 715 Crona Corner
          postalCode: 01844
          state: MA
      birthDate: '2000-10-15'
      communication:
        - language:
            coding:
              - code: en-US
                display: English (Region=United States)
                system: 'urn:ietf:bcp:47'
            text: English
      gender: male
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hospital.smarthealthit.org'
          type:
            coding:
              - code: MR
                display: Medical Record Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Medical Record Number
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hl7.org/fhir/sid/us-ssn'
          type:
            coding:
              - code: SS
                display: Social Security Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Social Security Number
          value: 999-87-1037
        - system: 'urn:oid:2.16.840.1.113883.4.3.25'
          type:
            coding:
              - code: DL
                display: Driver's license number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Driver's License
          value: S99952689
      maritalStatus:
        coding:
          - code: S
            display: Never Married
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus'
        text: Never Married
      multipleBirthBoolean: false
      name:
        - family: Halvorson124
          given:
            - Elden718
          prefix:
            - Mr.
          use: official
      telecom:
        - system: phone
          use: home
          value: 555-903-1143
      resourceType: Patient
  - fullUrl: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
    resource:
      id: 09188b81-0d1d-453c-b0fa-203ef88c794c
      meta:
        lastUpdated: '2020-04-28T20:27:53.156+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-location'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      address:
        city: METHUEN
        country: US
        line:
          - 70 EAST STREET
        postalCode: 01844
        state: MA
      managingOrganization:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      name: HOLY FAMILY HOSPITAL
      position:
        latitude: 42.742751
        longitude: -71.178588
      status: active
      telecom:
        - system: phone
          value: '9786870156'
      resourceType: Location
  - fullUrl: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
    resource:
      id: 0000016f-57cb-cdac-0000-00000000014a
      meta:
        lastUpdated: '2020-04-28T20:27:53.186+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      gender: female
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9999999995'
      name:
        - family: Jakubowski832
          given:
            - Janeth814
          prefix:
            - Dr.
      telecom:
        - extension:
            - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-direct'
              valueBoolean: true
          system: email
          use: work
          value: Janeth814.Jakubowski832@example.com
      resourceType: Practitioner
  - fullUrl: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
    resource:
      id: a9f20dc1-5147-3789-bcef-bbecb41c5983
      meta:
        lastUpdated: '2020-04-28T20:27:52.708+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: a9f20dc1-5147-3789-bcef-bbecb41c5983
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9941339100'
      name: HOLY FAMILY HOSPITAL
      telecom:
        - system: phone
          value: '9786870156'
      type:
        - coding:
            - code: prov
              display: Healthcare Provider
              system: 'http://terminology.hl7.org/CodeSystem/organization-type'
          text: Healthcare Provider
      resourceType: Organization
  - fullUrl: 'urn:uuid:4ac41715-fcbd-421c-8796-9b2c9706dd3f'
    resource:
      id: 4ac41715-fcbd-421c-8796-9b2c9706dd3f
      meta:
        lastUpdated: '2020-04-28T20:28:00.008+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition'
        source: '#cabiJIK51sD2iz4N'
        versionId: '10'
      category:
        - coding:
            - code: encounter-diagnosis
              display: Encounter Diagnosis
              system: 'http://terminology.hl7.org/CodeSystem/condition-category'
      clinicalStatus:
        coding:
          - code: active
            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical'
      code:
        coding:
          - code: '1234'
            display: Examplitis
            system: 'http://example.org/fhir/conditions'
        text: Examplitis
      encounter:
        reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      onsetDateTime: '2018-10-21T21:22:15-07:00'
      recordedDate: '2018-10-21T21:22:15-07:00'
      subject:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      verificationStatus:
        coding:
          - code: confirmed
            system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status'
      resourceType: Condition
  - fullUrl: 'urn:uuid:cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:52.686+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      beneficiary:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'

      # =========== Added to comply with US Core ==============
      relationship:
        coding:
          - system: 'http://terminology.hl7.org/CodeSystem/subscriber-relationship'
            code: self
        text: Self
      # =========================================================

      payor:
        - display: Blue Cross Blue Shield
          reference: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
      status: active
      subscriberId: '12345'
      type:
        text: Blue Cross Blue Shield
      resourceType: Coverage
  - fullUrl: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:53.069+00:00'
        profile:
          - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      active: true
      address:
        - city: Chicago
          line:
            - Michigan Plaza
          postalCode: '60007'
          state: IL
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '0000010005'
      name: Blue Cross Blue Shield
      telecom:
        - system: phone
          use: work
          value: 1-800-262-2583
      resourceType: Organization
timestamp: '2020-08-17T17:15:12.011868Z'
type: message
resourceType: Bundle


---

// File: input/examples-yaml/admit-notification-message-bundle-02.yml

id: admit-notification-message-bundle-02
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString:  Admit Notification Message Bundle 02
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown: This Admit Notification Message Bundle example illustrates referencing a Device for the author and sender in the MessageHeader.
  profile:
    - >-
      http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
entry:
  - fullUrl: 'urn:uuid:358887d7-8538-45c1-ba51-b4c500eb5263'
    resource:
      id: 358887d7-8538-45c1-ba51-b4c500eb5263
      meta:
        extension:
        - url: http://hl7.org/fhir/StructureDefinition/instance-name
          valueString:  Admit Notification Messageheader with Device
        - url: http://hl7.org/fhir/StructureDefinition/instance-description
          valueMarkdown:  Admit Notification Messageheader example referencing a Device for the author and sender
        profile:
          #- >-
            #http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/admit-notification-messageheader

      #=========== extension for author to include Device ==============
      author:
          extension:
            - url: http://hl7.org/fhir/StructureDefinition/alternate-reference
              valueReference:
                reference: 'urn:uuid:554fb743-38f0-459c-9069-237644374b87'
          display: automated authoring device

      #===============================

      destination:
        - endpoint: https://example.org/Endpoints/DaVinci-Notifications-Intermediary
          name: DaVinci-Notifications-Intermediary
      eventCoding:
        code: notification-admit
        display: Admit Notification
        system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
      focus:
        - display: Admit Notification(Unknown (qualifier value))
          reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      responsible:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'

      #=========== extension for sender to include Device ==============
      sender:
          extension:
            - url: http://hl7.org/fhir/StructureDefinition/alternate-reference
              valueReference:
                reference: 'urn:uuid:554fb743-38f0-459c-9069-237644374b87'
          display: automated sending device
      #===============================
      source:
        contact:
          system: phone
          value: +1 (555) 123 4567
        endpoint: 'https://example.org/Endpoints/P456'
        name: Acme Central Patient Registry
        software: FooBar Patient Manager
        version: 3.1.45.AABB
      resourceType: MessageHeader


  - fullUrl: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
    resource:
      id: 5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82
      meta:
        lastUpdated: '2020-04-28T21:32:21.199+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter'
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
        source: '#DlfWMd7j9EX8TaLI'
        versionId: '54'
      class:
        code: EMER
        system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode'
      identifier:
        - system: 'http://example.org'
          value: Elden718Halvorson12420181021T2122150700
      location:
        - location:
            display: HOLY FAMILY HOSPITAL
            reference: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
      participant:
        - individual:
            display: Dr. Janeth814 Jakubowski832
            reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      period:
        end: '2018-10-21T22:22:15-07:00'
        start: '2018-10-21T21:22:15-07:00'
      serviceProvider:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      status: in-progress
      subject:
        display: Mr. Elden718 Halvorson124
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      type:
        - coding:
            - code: '261665006'
              display: Unknown (qualifier value)
              system: 'http://snomed.info/sct'
          text: Unknown (qualifier value)
      resourceType: Encounter


  - fullUrl: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
    resource:
      id: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
      meta:
        lastUpdated: '2020-04-28T20:27:52.935+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      extension:
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2106-3
                display: White
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: White
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2186-5
                display: Not Hispanic or Latino
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: Not Hispanic or Latino
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName'
          valueString: Marge692 Yost751
        - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'
          valueCode: M
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-birthPlace'
          valueAddress:
            city: Rockland
            country: US
            state: Massachusetts
      address:
        - extension:
            - extension:
                - url: latitude
                  valueDecimal: 42.757779285956644
                - url: longitude
                  valueDecimal: -71.14760946593316
              url: 'http://hl7.org/fhir/StructureDefinition/geolocation'
          city: Methuen
          country: US
          line:
            - 715 Crona Corner
          postalCode: 01844
          state: MA
      birthDate: '2000-10-15'
      communication:
        - language:
            coding:
              - code: en-US
                display: English (Region=United States)
                system: 'urn:ietf:bcp:47'
            text: English
      gender: male
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hospital.smarthealthit.org'
          type:
            coding:
              - code: MR
                display: Medical Record Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Medical Record Number
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hl7.org/fhir/sid/us-ssn'
          type:
            coding:
              - code: SS
                display: Social Security Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Social Security Number
          value: 999-87-1037
        - system: 'urn:oid:2.16.840.1.113883.4.3.25'
          type:
            coding:
              - code: DL
                display: Driver's license number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Driver's License
          value: S99952689
      maritalStatus:
        coding:
          - code: S
            display: Never Married
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus'
        text: Never Married
      multipleBirthBoolean: false
      name:
        - family: Halvorson124
          given:
            - Elden718
          prefix:
            - Mr.
          use: official
      telecom:
        - system: phone
          use: home
          value: 555-903-1143
      resourceType: Patient



  - fullUrl: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
    resource:
      id: 09188b81-0d1d-453c-b0fa-203ef88c794c
      meta:
        lastUpdated: '2020-04-28T20:27:53.156+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-location'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      address:
        city: METHUEN
        country: US
        line:
          - 70 EAST STREET
        postalCode: 01844
        state: MA
      managingOrganization:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      name: HOLY FAMILY HOSPITAL
      position:
        latitude: 42.742751
        longitude: -71.178588
      status: active
      telecom:
        - system: phone
          value: '9786870156'
      resourceType: Location

  - fullUrl: 'urn:uuid:554fb743-38f0-459c-9069-237644374b87'
    resource:
      resourceType: Device
      id: 554fb743-38f0-459c-9069-237644374b87
      identifier:
          - system: 'http://example.org/fhir/device-ids'
            value: '12345'
      type:
          text: Authoring Software
      deviceName:
        - name: Acme Authoring Device
          type: manufacturer-name
      manufacturer: Acme   
      version:
          - value: 10.24-02
      contact:
          - system: url
            value: 'http://example.org/'

  - fullUrl: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
    resource:
      id: 0000016f-57cb-cdac-0000-00000000014a
      meta:
        lastUpdated: '2020-04-28T20:27:53.186+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      gender: female
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9999999995'
      name:
        - family: Jakubowski832
          given:
            - Janeth814
          prefix:
            - Dr.
      telecom:
        - extension:
            - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-direct'
              valueBoolean: true
          system: email
          use: work
          value: Janeth814.Jakubowski832@example.com
      resourceType: Practitioner


  - fullUrl: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
    resource:
      id: a9f20dc1-5147-3789-bcef-bbecb41c5983
      meta:
        lastUpdated: '2020-04-28T20:27:52.708+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: a9f20dc1-5147-3789-bcef-bbecb41c5983
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9941339100'
      name: HOLY FAMILY HOSPITAL
      telecom:
        - system: phone
          value: '9786870156'
      type:
        - coding:
            - code: prov
              display: Healthcare Provider
              system: 'http://terminology.hl7.org/CodeSystem/organization-type'
          text: Healthcare Provider
      resourceType: Organization

  - fullUrl: 'urn:uuid:4ac41715-fcbd-421c-8796-9b2c9706dd3f'
    resource:
      id: 4ac41715-fcbd-421c-8796-9b2c9706dd3f
      meta:
        lastUpdated: '2020-04-28T20:28:00.008+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition'
        source: '#cabiJIK51sD2iz4N'
        versionId: '10'
      category:
        - coding:
            - code: encounter-diagnosis
              display: Encounter Diagnosis
              system: 'http://terminology.hl7.org/CodeSystem/condition-category'
      clinicalStatus:
        coding:
          - code: active
            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical'
      code:
        coding:
          - code: '1234'
            display: Examplitis
            system: 'http://example.org/fhir/conditions'
        text: Examplitis
      encounter:
        reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      onsetDateTime: '2018-10-21T21:22:15-07:00'
      recordedDate: '2018-10-21T21:22:15-07:00'
      subject:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      verificationStatus:
        coding:
          - code: confirmed
            system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status'
      resourceType: Condition

  
  - fullUrl: 'urn:uuid:cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:52.686+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      beneficiary:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'

      # =========== Added to comply with US Core ==============
      relationship:
        coding:
          - system: 'http://terminology.hl7.org/CodeSystem/subscriber-relationship'
            code: self
        text: Self
      # =========================================================

      payor:
        - display: Blue Cross Blue Shield
          reference: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
      status: active
      subscriberId: '12345'
      type:
        text: Blue Cross Blue Shield
      resourceType: Coverage

  
  - fullUrl: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:53.069+00:00'
        profile:
          - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      active: true
      address:
        - city: Chicago
          line:
            - Michigan Plaza
          postalCode: '60007'
          state: IL
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '0000010005'
      name: Blue Cross Blue Shield
      telecom:
        - system: phone
          use: work
          value: 1-800-262-2583
      resourceType: Organization


timestamp: '2020-08-17T17:15:12.011868Z'
type: message
resourceType: Bundle


---

// File: input/examples-yaml/discharge-notification-message-bundle-01.yml

id: discharge-notification-message-bundle-01
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString:  Discharge Notification Message Bundle
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown:  Discharge Notification Message Bundle example
  profile:
    - >-
      http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
entry:
  - fullUrl: 'urn:uuid:df0bb058-e0bb-11ea-a11a-864d2e68a322'
    resource:
      id: df0bb058-e0bb-11ea-a11a-864d2e68a322
      meta:
        profile:
          # - >-
          #   http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/discharge-notification-messageheader
      author:
        display: Dr. Janeth814 Jakubowski832
        reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      destination:
        - endpoint: https://example.org/Endpoints/DaVinci-Notifications-Intermediary
          name: Intermediary-Simulator
      eventCoding:
        code: notification-discharge
        display: Discharge Notification
        system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
      focus:
        - display: Discharge Notification(Examplotomy Encounter)
          reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      responsible:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      sender:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      source:
        contact:
          system: phone
          value: +1 (555) 123 4567
        endpoint: 'https://example.org/Endpoints/P456'
        name: Acme Central Patient Registry
        software: FooBar Patient Manager
        version: 3.1.45.AABB
      resourceType: MessageHeader
  - fullUrl: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
    resource:
      id: 5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82
      meta:
        lastUpdated: '2020-04-28T21:32:34.376+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter'
        source: '#TtGHW1V3SxiqqQj4'
        versionId: '56'
      class:
        code: IMP
        system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode'
      hospitalization:
        dischargeDisposition:
          coding:
            - code: '1'
              display: Discharge to Home or Self Care (Routine Discharge)
              system: 'http://www.nubc.org/patient-discharge'
          text: Discharge to Home or Self Care (Routine Discharge)
      identifier:
        - system: 'http://example.org'
          value: Elden718Halvorson12420181021T2122150700
      location:
        - location:
            display: HOLY FAMILY HOSPITAL
            reference: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
      participant:
        - individual:
            display: Dr. Janeth814 Jakubowski832
            reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      period:
        end: '2018-10-23T22:22:15-07:00'
        start: '2018-10-21T21:22:15-07:00'
      serviceProvider:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      status: finished
      subject:
        display: Mr. Elden718 Halvorson124
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      type:
        - coding:
            - code: '1234'
              display: Examplotomy Encounter
              system: 'http://example.org/fhir/encounters'
          text: Examplotomy Encounter
      resourceType: Encounter
  - fullUrl: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
    resource:
      id: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
      meta:
        lastUpdated: '2020-04-28T20:27:52.935+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      extension:
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2106-3
                display: White
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: White
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2186-5
                display: Not Hispanic or Latino
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: Not Hispanic or Latino
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName'
          valueString: Marge692 Yost751
        - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'
          valueCode: M
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-birthPlace'
          valueAddress:
            city: Rockland
            country: US
            state: Massachusetts
      address:
        - extension:
            - extension:
                - url: latitude
                  valueDecimal: 42.757779285956644
                - url: longitude
                  valueDecimal: -71.14760946593316
              url: 'http://hl7.org/fhir/StructureDefinition/geolocation'
          city: Methuen
          country: US
          line:
            - 715 Crona Corner
          postalCode: 01844
          state: MA
      birthDate: '2000-10-15'
      communication:
        - language:
            coding:
              - code: en-US
                display: English (Region=United States)
                system: 'urn:ietf:bcp:47'
            text: English
      gender: male
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hospital.smarthealthit.org'
          type:
            coding:
              - code: MR
                display: Medical Record Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Medical Record Number
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hl7.org/fhir/sid/us-ssn'
          type:
            coding:
              - code: SS
                display: Social Security Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Social Security Number
          value: 999-87-1037
        - system: 'urn:oid:2.16.840.1.113883.4.3.25'
          type:
            coding:
              - code: DL
                display: Driver's license number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Driver's License
          value: S99952689
      maritalStatus:
        coding:
          - code: S
            display: Never Married
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus'
        text: Never Married
      multipleBirthBoolean: false
      name:
        - family: Halvorson124
          given:
            - Elden718
          prefix:
            - Mr.
          use: official
      telecom:
        - system: phone
          use: home
          value: 555-903-1143
      resourceType: Patient
  - fullUrl: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
    resource:
      id: 09188b81-0d1d-453c-b0fa-203ef88c794c
      meta:
        lastUpdated: '2020-04-28T20:27:53.156+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-location'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      address:
        city: METHUEN
        country: US
        line:
          - 70 EAST STREET
        postalCode: 01844
        state: MA
      managingOrganization:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      name: HOLY FAMILY HOSPITAL
      position:
        latitude: 42.742751
        longitude: -71.178588
      status: active
      telecom:
        - system: phone
          value: '9786870156'
      resourceType: Location
  - fullUrl: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
    resource:
      id: 0000016f-57cb-cdac-0000-00000000014a
      meta:
        lastUpdated: '2020-04-28T20:27:53.186+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      gender: female
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9999999995'
      name:
        - family: Jakubowski832
          given:
            - Janeth814
          prefix:
            - Dr.
      telecom:
        - extension:
            - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-direct'
              valueBoolean: true
          system: email
          use: work
          value: Janeth814.Jakubowski832@example.com
      resourceType: Practitioner
  - fullUrl: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
    resource:
      id: a9f20dc1-5147-3789-bcef-bbecb41c5983
      meta:
        lastUpdated: '2020-04-28T20:27:52.708+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: a9f20dc1-5147-3789-bcef-bbecb41c5983
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9941339100'
      name: HOLY FAMILY HOSPITAL
      telecom:
        - system: phone
          value: '9786870156'
      type:
        - coding:
            - code: prov
              display: Healthcare Provider
              system: 'http://terminology.hl7.org/CodeSystem/organization-type'
          text: Healthcare Provider
      resourceType: Organization
  - fullUrl: 'urn:uuid:4ac41715-fcbd-421c-8796-9b2c9706dd3f'
    resource:
      id: 4ac41715-fcbd-421c-8796-9b2c9706dd3f
      meta:
        lastUpdated: '2020-04-28T20:28:00.008+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition'
        source: '#cabiJIK51sD2iz4N'
        versionId: '10'
      category:
        - coding:
            - code: encounter-diagnosis
              display: Encounter Diagnosis
              system: 'http://terminology.hl7.org/CodeSystem/condition-category'
      clinicalStatus:
        coding:
          - code: active
            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical'
      code:
        coding:
          - code: '1234'
            display: Examplitis
            system: 'http://example.org/fhir/conditions'
        text: Examplitis
      encounter:
        reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      onsetDateTime: '2018-10-21T21:22:15-07:00'
      recordedDate: '2018-10-21T21:22:15-07:00'
      subject:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      verificationStatus:
        coding:
          - code: confirmed
            system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status'
      resourceType: Condition
  - fullUrl: 'urn:uuid:cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:52.686+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      beneficiary:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'

      # =========== Added to comply with US Core ==============
      relationship:
        coding:
          - system: 'http://terminology.hl7.org/CodeSystem/subscriber-relationship'
            code: self
        text: Self
      # =========================================================

      payor:
        - display: Blue Cross Blue Shield
          reference: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
      status: active
      subscriberId: '12345'
      type:
        text: Blue Cross Blue Shield
      resourceType: Coverage
  - fullUrl: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:53.069+00:00'
        profile:
          - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      active: true
      address:
        - city: Chicago
          line:
            - Michigan Plaza
          postalCode: '60007'
          state: IL
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '0000010005'
      name: Blue Cross Blue Shield
      telecom:
        - system: phone
          use: work
          value: 1-800-262-2583
      resourceType: Organization
timestamp: '2020-08-17T19:00:15.888493Z'
type: message
resourceType: Bundle


---

// File: input/examples-yaml/transfer-notification-message-bundle-01.yml

id: transfer-notification-message-bundle-01
meta:
  extension:
  - url: http://hl7.org/fhir/StructureDefinition/instance-name
    valueString:  Transfer Notification Message Bundle
  - url: http://hl7.org/fhir/StructureDefinition/instance-description
    valueMarkdown:  Transfer Notification Message Bundle example
  profile:
    - >-
      http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-bundle
entry:
  - fullUrl: 'urn:uuid:7a5df5f4-e0bb-11ea-834a-864d2e68a322'
    resource:
      id: 7a5df5f4-e0bb-11ea-834a-864d2e68a322
      meta:
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/notifications-messageheader
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/transfer-notification-messageheader
      author:
        display: Dr. Janeth814 Jakubowski832
        reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      destination:
        - endpoint: https://example.org/Endpoints/DaVinci-Notifications-Intermediary
          name: Intermediary-Simulator
      eventCoding:
        code: notification-transfer
        display: Transfer Notification
        system: 'http://hl7.org/fhir/us/davinci-alerts/CodeSystem/notification-event'
      focus:
        - display: Transfer Notification(Examplotomy Encounter)
          reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      responsible:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      sender:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      source:
        contact:
          system: phone
          value: +1 (555) 123 4567
        endpoint: 'https://example.org/Endpoints/P456'
        name: Acme Central Patient Registry
        software: FooBar Patient Manager
        version: 3.1.45.AABB
      resourceType: MessageHeader
  - fullUrl: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
    resource:
      id: 5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82
      meta:
        lastUpdated: '2020-04-28T21:32:28.234+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-encounter
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter'
        source: '#XuOGgQteQKG8lTEO'
        versionId: '55'
      class:
        code: IMP
        system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode'
      hospitalization:
        admitSource:
          coding:
            - code: emd
              display: From accident/emergency department
              system: 'http://terminology.hl7.org/CodeSystem/admit-source'
          text: Transfer from accident/emergency department
      identifier:
        - system: 'http://example.org'
          value: Elden718Halvorson12420181021T2122150700
      location:
        - location:
            display: HOLY FAMILY HOSPITAL
            reference: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
      participant:
        - individual:
            display: Dr. Janeth814 Jakubowski832
            reference: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
      period:
        end: '2018-10-21T22:22:15-07:00'
        start: '2018-10-21T21:22:15-07:00'
      serviceProvider:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      status: in-progress
      subject:
        display: Mr. Elden718 Halvorson124
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      type:
        - coding:
            - code: '1234'
              display: Examplotomy Encounter
              system: 'http://example.org/fhir/encounters'
          text: Examplotomy Encounter
      resourceType: Encounter
  - fullUrl: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
    resource:
      id: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
      meta:
        lastUpdated: '2020-04-28T20:27:52.935+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      extension:
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2106-3
                display: White
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: White
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
        - extension:
            - url: ombCategory
              valueCoding:
                code: 2186-5
                display: Not Hispanic or Latino
                system: 'urn:oid:2.16.840.1.113883.6.238'
            - url: text
              valueString: Not Hispanic or Latino
          url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName'
          valueString: Marge692 Yost751
        - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'
          valueCode: M
        - url: 'http://hl7.org/fhir/StructureDefinition/patient-birthPlace'
          valueAddress:
            city: Rockland
            country: US
            state: Massachusetts
      address:
        - extension:
            - extension:
                - url: latitude
                  valueDecimal: 42.757779285956644
                - url: longitude
                  valueDecimal: -71.14760946593316
              url: 'http://hl7.org/fhir/StructureDefinition/geolocation'
          city: Methuen
          country: US
          line:
            - 715 Crona Corner
          postalCode: 01844
          state: MA
      birthDate: '2000-10-15'
      communication:
        - language:
            coding:
              - code: en-US
                display: English (Region=United States)
                system: 'urn:ietf:bcp:47'
            text: English
      gender: male
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hospital.smarthealthit.org'
          type:
            coding:
              - code: MR
                display: Medical Record Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Medical Record Number
          value: 06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b
        - system: 'http://hl7.org/fhir/sid/us-ssn'
          type:
            coding:
              - code: SS
                display: Social Security Number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Social Security Number
          value: 999-87-1037
        - system: 'urn:oid:2.16.840.1.113883.4.3.25'
          type:
            coding:
              - code: DL
                display: Driver's license number
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203'
            text: Driver's License
          value: S99952689
      maritalStatus:
        coding:
          - code: S
            display: Never Married
            system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus'
        text: Never Married
      multipleBirthBoolean: false
      name:
        - family: Halvorson124
          given:
            - Elden718
          prefix:
            - Mr.
          use: official
      telecom:
        - system: phone
          use: home
          value: 555-903-1143
      resourceType: Patient
  - fullUrl: 'urn:uuid:09188b81-0d1d-453c-b0fa-203ef88c794c'
    resource:
      id: 09188b81-0d1d-453c-b0fa-203ef88c794c
      meta:
        lastUpdated: '2020-04-28T20:27:53.156+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-location'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      address:
        city: METHUEN
        country: US
        line:
          - 70 EAST STREET
        postalCode: 01844
        state: MA
      managingOrganization:
        display: HOLY FAMILY HOSPITAL
        reference: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
      name: HOLY FAMILY HOSPITAL
      position:
        latitude: 42.742751
        longitude: -71.178588
      status: active
      telecom:
        - system: phone
          value: '9786870156'
      resourceType: Location
  - fullUrl: 'urn:uuid:0000016f-57cb-cdac-0000-00000000014a'
    resource:
      id: 0000016f-57cb-cdac-0000-00000000014a
      meta:
        lastUpdated: '2020-04-28T20:27:53.186+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      gender: female
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9999999995'
      name:
        - family: Jakubowski832
          given:
            - Janeth814
          prefix:
            - Dr.
      telecom:
        - extension:
            - url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-direct'
              valueBoolean: true
          system: email
          use: work
          value: Janeth814.Jakubowski832@example.com
      resourceType: Practitioner
  - fullUrl: 'urn:uuid:a9f20dc1-5147-3789-bcef-bbecb41c5983'
    resource:
      id: a9f20dc1-5147-3789-bcef-bbecb41c5983
      meta:
        lastUpdated: '2020-04-28T20:27:52.708+00:00'
        profile:
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '4'
      active: true
      address:
        - city: METHUEN
          country: US
          line:
            - 70 EAST STREET
          postalCode: 01844
          state: MA
      identifier:
        - system: 'https://github.com/synthetichealth/synthea'
          value: a9f20dc1-5147-3789-bcef-bbecb41c5983
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '9941339100'
      name: HOLY FAMILY HOSPITAL
      telecom:
        - system: phone
          value: '9786870156'
      type:
        - coding:
            - code: prov
              display: Healthcare Provider
              system: 'http://terminology.hl7.org/CodeSystem/organization-type'
          text: Healthcare Provider
      resourceType: Organization
  - fullUrl: 'urn:uuid:4ac41715-fcbd-421c-8796-9b2c9706dd3f'
    resource:
      id: 4ac41715-fcbd-421c-8796-9b2c9706dd3f
      meta:
        lastUpdated: '2020-04-28T20:28:00.008+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-condition
          - 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition'
        source: '#cabiJIK51sD2iz4N'
        versionId: '10'
      category:
        - coding:
            - code: encounter-diagnosis
              display: Encounter Diagnosis
              system: 'http://terminology.hl7.org/CodeSystem/condition-category'
      clinicalStatus:
        coding:
          - code: active
            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical'
      code:
        coding:
          - code: '1234'
            display: Examplitis
            system: 'http://example.org/fhir/conditions'
        text: Examplitis
      encounter:
        reference: 'urn:uuid:5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82'
      onsetDateTime: '2018-10-21T21:22:15-07:00'
      recordedDate: '2018-10-21T21:22:15-07:00'
      subject:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'
      verificationStatus:
        coding:
          - code: confirmed
            system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status'
      resourceType: Condition
  - fullUrl: 'urn:uuid:cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac2fe-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:52.686+00:00'
        profile:
          - >-
            http://hl7.org/fhir/us/davinci-alerts/StructureDefinition/adt-notification-coverage
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      beneficiary:
        reference: 'urn:uuid:06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b'

      # =========== Added to comply with US Core ==============
      relationship:
        coding:
          - system: 'http://terminology.hl7.org/CodeSystem/subscriber-relationship'
            code: self
        text: Self
      # =========================================================

      payor:
        - display: Blue Cross Blue Shield
          reference: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
      status: active
      subscriberId: '12345'
      type:
        text: Blue Cross Blue Shield
      resourceType: Coverage
  - fullUrl: 'urn:uuid:cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172'
    resource:
      id: cc6ac93e-2bf4-11ea-a5f5-a4d18ccf5172
      meta:
        lastUpdated: '2020-04-28T20:27:53.069+00:00'
        profile:
          - 'http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-organization'
        source: '#pPvYTutotnO7vQfK'
        versionId: '10'
      active: true
      address:
        - city: Chicago
          line:
            - Michigan Plaza
          postalCode: '60007'
          state: IL
      identifier:
        - system: 'http://hl7.org/fhir/sid/us-npi'
          value: '0000010005'
      name: Blue Cross Blue Shield
      telecom:
        - system: phone
          use: work
          value: 1-800-262-2583
      resourceType: Organization
timestamp: '2020-08-17T18:57:26.887078Z'
type: message
resourceType: Bundle


---

