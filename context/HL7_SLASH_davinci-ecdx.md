File: repos/HL7_SLASH_davinci-ecdx/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/sushi/configuration/                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.davinci-cdex
extension:
  - url: >-
      http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
  - url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm'
    valueInteger: 2
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: claims

definition:
  extension:
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency  #<<<<< these are to inform the publisher link checker that links to this IG mostly in the change log are valid
      valueCode: hl7.fhir.us.davinci-cdex#2.0.0 
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency  #<<<<< these are to inform the publisher link checker that links to this IG mostly in the change log are valid
      valueCode: hl7.fhir.us.davinci-cdex#2.0.0-ballot
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.davinci-cdex#1.1.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.davinci-cdex#1.0.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.davinci-cdex#0.2.0
    - url: http://hl7.org/fhir/tools/StructureDefinition/ig-link-dependency
      valueCode: hl7.fhir.us.davinci-cdex#0.1.0

canonical: http://hl7.org/fhir/us/davinci-cdex
name: DaVinciCDex
title: Da Vinci Clinical Data Exchange (CDex)
status: active

publisher:
  name: HL7 International / Payer/Provider Information Exchange Work Group
  url: 'http://www.hl7.org/Special/committees/claims'
  email: pie@lists.hl7.org

jurisdiction: 'urn:iso:std:iso:3166#US'
copyright: >-
  Used by permission of HL7 International all rights reserved Creative Commons License
description: >-
  This IG provides detailed guidance that helps implementers use FHIR-based interactions to support specific exchanges of clinical data between providers and payers (or other providers).
license: CC0-1.0
date: '2024-11-01'
version: 2.1.0
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
    uri: 'http://hl7.org/fhir/us/davinci-hrex/ImplementationGuide/hl7.fhir.us.davinci-hrex'
    version: current #1.1.0 for publication
    id: hrex
  hl7.fhir.us.davinci-pas:
    uri: 'http://hl7.org/fhir/us/davinci-pas/ImplementationGuide/hl7.fhir.us.davinci-pas'
    version: current  #2.1.0 for publication
    id: pas
  hl7.fhir.us.carin-bb:
    uri: 'http://hl7.org/fhir/us/carin-bb/ImplementationGuide/hl7.fhir.us.carin-bb'
    version: 2.0.0
    id: c4bb
  hl7.fhir.us.davinci-dtr:
    uri: 'http://hl7.org/fhir/us/davinci-dtr/ImplementationGuide/hl7.fhir.us.davinci-dtr'
    version: current  #2.1.0 for publication
    id: dtr
  hl7.fhir.uv.sdc:
    uri: 'http://hl7.org/fhir/uv/sdc/ImplementationGuide/hl7.fhir.uv.sdc'
    version: 3.0.0
    id: sdc

  hl7.fhir.extensions.r4: 
    version: 4.0.1
  
  hl7.fhir.uv.subscriptions-backport.r4:
    version: 1.1.0
    uri: http://hl7.org/fhir/uv/subscriptions-backport/ImplementationGuide/hl7.fhir.uv.subscriptions-backport 
    id: backport

# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the default groups that
# are provided by the templating framework, but if authors want to
# use their own instead, they can use the mechanism below.  This will
# create IG.definition.grouping entries and associate the individual
# resource entries with the corresponding groupIds.
groups:

  CapabilityStatements:
    name: CDex Capability Statements
    description: The following artifacts define the specific capabilities that different types of systems are expected to have in order to comply with this implementation guide. Systems conforming to this implementation guide are expected to declare conformance to one or more of the following capability statements.
    resources:
      - CapabilityStatement/data-consumer-client
      - CapabilityStatement/data-consumer-server
      - CapabilityStatement/data-source-client
      - CapabilityStatement/data-source-server

  AttachmentsProfiles:
    name: Attachments Profiles
    description: Profiles Associated with CDex Attachments Transactions
    resources:
      - StructureDefinition/cdex-task-attachment-request
      - StructureDefinition/cdex-practitionerrole
      - StructureDefinition/cdex-patient-demographics
      - StructureDefinition/cdex-parameters-submit-attachment
  AttachmentsOperations:
    name: Attachments Operations
    description: Operations Associated with CDex Attachments Transactions
    resources:
      - OperationDefinition/submit-attachment
  AttachmentsTerminology:
    name: Attachments Terminology
    description: ValueSets Associated with CDex Attachments Transactions
    resources:
      - ValueSet/cdex-claim-use
      - ValueSet/cdex-loinc-attachment-codes
      - ValueSet/cdex-pwk01-attachment-report-type-code
  AttachmentsExamples:
    name: Attachments Examples 
    description: Examples Associated with CDex Attachments Transactions
    resources:
      - Task/cdex-task-example19
      - Task/cdex-task-example20
      - Task/cdex-task-example22
      - Task/cdex-task-example23
      - Task/cdex-task-example24
      - Task/cdex-task-example25
      - Task/cdex-task-example28
      - Task/cdex-task-example29
      - Parameters/cdex-parameters-example1
      - Parameters/cdex-parameters-example2
      - Parameters/cdex-parameters-example3
      - Parameters/cdex-parameters-example4
      - Parameters/cdex-parameters-example5
  TaskBasedProfiles:
    name: Task Based Approach Profiles
    description: Profiles Associated with CDex Task Based Approach Transactions
    resources:
      - StructureDefinition/cdex-task-data-request
  TaskBasedTerminology:
    name: Task Based Approach Terminology
    description: ValueSets Associated with CDex Task Based Approach Transactions
    resources:
      - ValueSet/cdex-work-queue
      - ValueSet/cdex-data-request-task-code


  # TaskBasedSubscriptionTopic:
  #   name: Task Based Subscription Topic
  #   description: Basic resource representing the subscription for Task updates
  #   resources:
  #     - SubscriptionTopic/cdex-task-update


  TaskBasedExamples:
    name: Task Based Approach Examples
    description: Examples Associated with CDex Task Based Approach Transactions
    resources:
      - Task/cdex-task-example1
      - Task/cdex-task-example2
      - Task/cdex-task-example3
      - Task/cdex-task-example4
      - Task/cdex-task-example5
      - Task/cdex-task-example6
      - Task/cdex-task-example7
      - Task/cdex-task-example8
      - Task/cdex-task-example9
      - Task/cdex-task-example10
      - Task/cdex-task-example11
      - Task/cdex-task-example12
      - Task/cdex-task-example13
      - Task/cdex-task-example14
      - Task/cdex-task-example15
      - Task/cdex-task-example16
      - Task/cdex-task-example17
      - Task/cdex-task-example18
      - Task/cdex-task-example21
      - Task/cdex-task-example26
      - Task/cdex-task-example27
      - Task/cdex-task-example30
      - Task/cdex-task-example31
  DirectQueryExamples:
    name: Direct Query Examples
    description: Examples Associated with CDex Direct Query (FHIR RESTful search) Approach Transactions
    resources:
        - Bundle/cdex-searchbundle-scenario1-example
        - Bundle/cdex-searchbundle-provenance-example
        - Bundle/cdex-searchbundle-scenario3-example
        - Bundle/cdex-searchbundle-scenario2-example

  QuestionnaireProfiles:
    name: Questionnaire Profiles
    description: Questionnaire profiles used in both CDex Attachments and Task Based Approach Transactions
    resources:
      - StructureDefinition/cdex-sdc-questionnaireresponse  
  QuestionnaireExamples:
    name: Questionnaire Examples
    description: Questionnaire examples used in both CDex Attachments and Task Based Approach Transactions
    resources:
      - Questionnaire/cdex-questionnaire-example1
      - QuestionnaireResponse/cdex-questionnaireresponse-example1
      - QuestionnaireResponse/cdex-questionnaireresponse-example2

  SignatureProfiles:
    name: Signature Profiles
    description: Profiles Associated with CDex Signatures
    resources:
      - StructureDefinition/cdex-signature
      - StructureDefinition/cdex-signature-bundle
      # - StructureDefinition/cdex-sdc-questionnaireresponse
  SignatureTerminology:
    name: Signature Terminology
    description: ValueSets Associated with CDex Signatures
    resources:
      - ValueSet/cdex-identifier-types
  SignatureExamples:
    name: Signature Examples
    description: Examples Associated with CDex Signatures (Several examples are in Task Based and Attachments Examples groupings as well)
    resources:
      - Bundle/cdex-searchbundle-digital-sig-example
      - Bundle/cdex-document-digital-sig-example
      - Bundle/cdex-electronic-sig-example
      - Questionnaire/cdex-questionnaire-example2
      - QuestionnaireResponse/cdex-questionnaireresponse-example3
      - QuestionnaireResponse/cdex-questionnaireresponse-example4
  CommonTerminology:
    name: Common Terminology
    description: ValueSets and CodeSystems used in both CDex Attachments and Task Based Approach Transactions
    resources:
      - ValueSet/cdex-POU
      - CodeSystem/cdex-temp
  InlineExamples:
    name: Inline Examples 
    description: These examples are used in the inline example scenarios throughout the guide. They are listed here so the implementation guide's publication tooling can validate them against the CDex profile definitions.  Since they are used to illustrate "over-the-wire" transactions, the rendered narrative and id elements are often absent.
    resources:
      - Task/cdex-task-inline-example1
      - Task/cdex-task-inline-example4
      - Task/cdex-task-inline-example6
      - Task/cdex-task-inline-example21
      - Task/cdex-task-inline-example10
      - Task/cdex-task-inline-example11
      - Task/cdex-task-inline-example13
      - Task/cdex-task-inline-example15
      - Task/cdex-task-inline-example17
      - Task/cdex-task-inline-example19
      - Task/cdex-task-inline-example22 # updated version of 26 are inline in scenario 10 and not validated
      - Task/cdex-task-inline-example26  # updated version of 26 are inline in scenario 10 and not validated
      - Subscription/cdex-task-inline-scenario1-subscription-requested
      - Subscription/cdex-task-inline-scenario1-subscription-active
      - Bundle/cdex-task-inline-scenario1-subscription-notification
      - Bundle/cdex-bundle-inline-example-858p
      - Condition/cdex-condition-inline-example-858
      - Provenance/cdex-provenance-inline-example-858
      - CommunicationRequest/cdex-task-inline-communicationrequest-example1
      - QuestionnaireResponse/cdex-questionnaireresponse-inline-example1
      - OperationOutcome/cdex-operationoutcome-inline-example1
      - CapabilityStatement/cdex-capabilitystatement-inline-example

pages:
  index.md:
    # extension:
    # - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    #   valueCode: trial-use
    title: IG Home
  background.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
  # specification.md:
  #   exchanging-clinical-data.md:
  direct-query.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
  task-based-approach.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
  task-based-conformance.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    title: Conforming to CDex Task Based Approach
  attachments.md:
    # extension:
    # - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    #   valueCode: trial-use
  solicited-unsolicited-attachments.md:
    # extension:
    # - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    #   valueCode: trial-use
    title: Solicited and Unsolicited Attachments
  sending-attachments.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
  requesting-attachments-code.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    title: Requesting Attachments Using Attachments Codes
  requesting-attachments-questionnaire.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    title: Requesting Attachments Using Questionnaires
  burden-reduction.md:
    # extension:
    # - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    #   valueCode: trial-use
    title: Using CDex Attachments with DaVinci PAS
  attachments-conformance.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    title: Conforming to CDex Attachments
  signatures.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
  signed-searchset-bundle-example.md:
  signed-document-bundle-example.md:
  security.md:
    extension:
    - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
      valueCode: trial-use
    title: Security and Privacy
  downloads.md:
    # extension:
    # - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    #   valueCode: trial-use
  ImplementationGuide-hl7.fhir.us.davinci-cdex.md:
    # extension:
    # - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    #   valueCode: trial-use
    title: CDex ImplementationGuide Resource
  changes.md:
    # extension:
    # - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    #   valueCode: trial-use
    title: Change Log

parameters:
  path-resource:
    - input/resources
    - fsh-generated/resources
    - input/examples
    # - input/fexamples-inline
  path-pages:
    - input/pagecontent
    - input/intro-notes
    - fsh-generated/includes
  path-expansion-params: '../../input/_resources/exp-params.json'  # for using US ed of SNOMED
  # path-liquid: # list of relative paths that contains liquid templates for generating narrative
  #   - liquid
  active-tables: 'false'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'
  show-inherited-invariants: 'false'
  usage-stats-opt-out: 'true'
  # excludexml: 'false'
  # excludejson: 'false'
  excludettl: 'true'
  # excludemap: 'true'
  # excludeexample: 'true'
  generate:
    - xml
    - json
  version-comparison:
     - 1.0.0
     - 1.1.0
     - 2.0.0
  bundle-references-resolve: false
  no-narrative:
    - Parameters/cdex-parameters-example4
    - Parameters/cdex-parameters-example5
    - Parameters/cdex-parameters-example1
    - Parameters/cdex-parameters-example2
    - Parameters/cdex-parameters-example3
    - Task/cdex-task-inline-example1
    - Task/cdex-task-inline-example4
    - Task/cdex-task-inline-example6
    - Task/cdex-task-inline-example21
    - Task/cdex-task-inline-example22
    - Task/cdex-task-inline-example26
    - Task/cdex-task-inline-example10
    - Task/cdex-task-inline-example11
    - Task/cdex-task-inline-example13
    - Task/cdex-task-inline-example15
    - Task/cdex-task-inline-example17
    - Task/cdex-task-inline-example19
    - Subscription/cdex-task-inline-scenario1-subscription-requested
    - Subscription/cdex-task-inline-scenario1-subscription-active
    - QuestionnaireResponse/cdex-questionnaireresponse-inline-example1
    - Bundle/cdex-task-inline-scenario1-subscription-notification
    - Bundle/cdex-bundle-inline-example-858p

  suppressed-ids: Parameters/cdex-parameters-example1,Parameters/cdex-parameters-example2,Parameters/cdex-parameters-example3,Parameters/cdex-parameters-example4,Parameters/cdex-parameters-example5,Task/cdex-task-inline-example1,Subscription/cdex-task-inline-scenario1-subscription-requested,Task/cdex-task-inline-example4,Task/cdex-task-inline-example6,Task/cdex-task-inline-example21,Task/cdex-task-inline-example10,Task/cdex-task-inline-example11,Task/cdex-task-inline-example13,Task/cdex-task-inline-example15,Task/cdex-task-inline-example17,Task/cdex-task-inline-example26,QuestionnaireResponse/cdex-questionnaireresponse-inline-example1,Task/cdex-task-inline-example19,Task/cdex-task-inline-example22,OperationOutcome/cdex-operationoutcome-inline-example1
  
  tabbed-snapshots: 'true'
  auto-oid-root: '2.16.840.1.113883.4.642.40.21'
copyrightyear: '2024+'
# releaselabel: CI Build
releaselabel: STU2
# releaselabel: Ballot

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided ig-data/input/includes/menu.xml file, delete the "menu" property below.     │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  IG Home: #index.html
    Introduction: index.html
    About This Guide: index.html#about-this-guide
    How to read this Guide: index.html#how-to-read-this-guide
    Credits: index.html#credits
  Background: # background.html
    About the Da Vinci Project: background.html
    What Do Payers Do with Clinical Information: background.html#what-do-payers-do-with-clinical-information
    Provider to Provider Data Exchange: background.html#provider-to-provider-data-exchange
    What Information is Needed: background.html#what-information-is-needed
    Where Does CDEX Fit in the Da Vinci Project: background.html#where-does-cdex-fit-in-the-da-vinci-project
    Workflow Overview: background.html#workflow-overview
    Architectural Approach: background.html#architectural-approach
  Direct Query: # direct-query.html
    Introduction: direct-query.html
    Benefits: direct-query.html#benefits
    Sequence Diagram: direct-query.html#sequence-diagram
    Discovery of Patient FHIR IDs: direct-query.html#discovery-of-patient-fhir-ids
    Direct Query Transaction Scenarios: direct-query.html#direct-query-transaction-scenarios
    Provenance: direct-query.html#provenance
    Signatures: direct-query.html#signatures
  Task Based Approach: #task-based-approach.html
    Introduction: task-based-approach.html
    Benefits: task-based-approach.html#benefits
    The Task Resource: task-based-approach.html#the-task-resource
    Sequence Diagram: task-based-approach.html#sequence-diagram
    Discovery of Identifiers: task-based-approach.html#discovery-of-identifiers
    Task State Machine: task-based-approach.html#task-state-machine
    Fetching the Data: task-based-approach.html#fetching-the-data
    Task Based Transaction Scenarios: task-based-approach.html#example-transactions-based-on-query-code-and-free-text-inputs
    Using Questionnaire as Task Input: task-based-approach.html#using-questionnaire-as-task-input
    When The Task Cannot Be Completed: task-based-approach.html#when-the-task-cannot-be-completed
    Polling vs Subscriptions: task-based-approach.html#polling-vs-subscriptions
    Formal Authorization: task-based-approach.html#formal-authorization
    Provenance: task-based-approach.html#provenance
    Signatures: task-based-approach.html#signatures
    Conforming to CDex Task Based Approach: task-based-conformance.html
  Attachments:
    Solicited and Unsolicited Attachments: solicited-unsolicited-attachments.html
    Sending Attachments: sending-attachments.html
    Requesting Attachments Using Attachment Codes: requesting-attachments-code.html
    Requesting Attachments Using Questionnaires: requesting-attachments-questionnaire.html
    Using CDex Attachments with DaVinci PAS: burden-reduction.html
    Conforming to CDex Attachments: attachments-conformance.html
  Signatures: # signatures.html
    About Signatures: signatures.html
    The Signer: signatures.html#the-signer
    What is Signed: signatures.html#what-is-signed
    CDex Enveloped Signatures: signatures.html#cdex-enveloped-signatures
    Electronic Signatures: signatures.html#electronic-signatures
    Digital Signatures: signatures.html#digital-signatures
  Security and Privacy: security.html
  FHIR Artifacts:
    Artifacts Summary: artifacts.html
    CDex Capability Statements: artifacts.html#1
    Attachments Profiles: artifacts.html#2
    Attachments Operations: artifacts.html#3
    Attachments Terminology: artifacts.html#4
    Attachments Examples: artifacts.html#5
    Task Based Approach Profiles: artifacts.html#6
    Task Based Approach Terminology: artifacts.html#7
    Task Based Approach Examples: artifacts.html#8
    Direct Query Examples: artifacts.html#9
    Questionnaire Profiles: artifacts.html#10
    Questionnaire Examples: artifacts.html#11
    Signature Profiles: artifacts.html#12
    Signature Terminology: artifacts.html#13
    Signature Examples: artifacts.html#14
    Common Terminology: artifacts.html#15
    Inline Examples: artifacts.html#16
  Support:
   Discussion Forum: https://chat.fhir.org/#narrow/stream/180805-Da-Vinci-CDex
   Project Page: https://confluence.hl7.org/pages/viewpage.action?pageId=40738757   
   Implementer Support: https://confluence.hl7.org/display/DVP/CDex+Implementer+Support?src=contextnavpagetreemode
   Specification Dashboard: https://jira.hl7.org/secure/Dashboard.jspa?selectPageId=11801
   Propose a Change: https://jira.hl7.org/secure/
   Downloads: downloads.html
  Change Log: changes.html

---

// File: input/pagecontent/attachments-conformance.md

{% capture X %}<span style="color:red; font-size:1.5em">&#10008;</span>{% endcapture %}
{% capture OK %}<span style="color:green; font-size:1.5em">&#10004;</span>{% endcapture %}



### Introduction

CDex attachments are intended to be compatible with the X12n transactions and designed to work for both solicited and unsolicited claims and prior authorization. Refer to the CDex [CapabilityStatements] resources for conformance expectations for the various actors and roles. The tables below show:
- The CDex Attachments interaction for each role and the conformance resource and terminology that makes it unique to help clarify the different use cases. 
- The optional and required capabilities for CDex Attachments transactions.
- The optional and required `$submit-attachment` Parameters

Systems may choose some or all of these capabilities and implement any combination of unsolicited or solicited attachments for prior authorization, claims, or both. Therefore, in contrast to the expectations in the CDex CapabilityStatements, they should define what they support in their local capability statement in one or more of the following ways:

1. (Preferred) Formally derived implementable profile from [CDex Task Attachment Request Profile]
2. Document their systems' capabilities for requesting attachments in `CapabilityStatement.rest.resource.documentation` for the Task resource.
3. (Preferred) Formal [OperationDefinition] derived from [`$submit-attachment`]
4. Document their systems' capabilities for submitting attachments in `CapabilityStatement.rest.documentation`

### Provider Conformance

#### Provider in Role of Data Source Server

Data Source Server|Unsolicited Claims|Solicited Claims|Unsolicited Prior Authorization|Solicited Prior Authorization
|:---:|:---:|:---:|:---:|:---:|
CDex Task Attachment Request Profile |{{X}}|{{OK}}|{{X}}|{{OK}}
 Task.reasonCode Terminology|-|`claim`|-|`preauthorization`
{:.grid}

#### Provider in Role of Data Source Client

Data Source Client|Unsolicited Claims|Solicited Claims|Unsolicited Prior Authorization|Solicited Prior Authorization
|:---:|:---:|:---:|:---:|:---:|
Submit Attachment Operation|{{OK}}|{{OK}}|{{OK}}|{{OK}}
 AttachTo parameter Terminology|`claim`|`claim`|`preauthorization`|`preauthorization`
{:.grid}

### Payer Conformance

#### Payer Data Consumer Server Role

Data Consumer Client|Unsolicited Claims|Solicited Claims|Unsolicited Prior Authorization|Solicited Prior Authorization
|:---:|:---:|:---:|:---:|:---:|
Submit Attachment Operation|{{OK}}|{{OK}}|{{OK}}|{{OK}}
 AttachTo parameter Terminology|`claim`|`claim`|`preauthorization`|`preauthorization`
{:.grid}

#### Payer Data Consumer Client Role

Data Consumer Server|Unsolicited Claims|Solicited Claims|Unsolicited Prior Authorization|Solicited Prior Authorization
|:---:|:---:|:---:|:---:|:---:|
CDex Task Attachment Request Profile |{{X}}|{{OK}}|{{X}}|{{OK}}
 Task.reasonCode Terminology|-|`claim`|-|`preauthorization`
{:.grid}

{{OK}}: Conformance resource used in the transaction  
{{X}}: Conformance resource not used in the transaction

### Capabilities for Requesting Attachments

|Capability|Must Support*|Optional|
|:---:|:---:|:---:|
|Requesting Attachments Using Attachment Codes|{{OK}}||
|Requesting Attachments Using Questionnaire||{{OK}}|
|Signatures|{{OK}}||
|Representing The Purpose Of Use (POU) For The Requested Data||{{OK}}|
|Ability to submit attachments data in multiple submissions||{{OK}}|
{:.grid}

\* See the next section

### CDex Must Support Definition

{% include must-support.md %}

### $submit-attachment Parameters for Sending Attachments

|Parameter|Required|Optional|
|:---:|:---:|:---:|
|TrackingId|{{OK}}||
|AttachTo|{{OK}}(see above)|
|PayerId||{{OK}}|
|OrganizationId|{{OK}}||
|ProviderId|{{OK}}||
|MemberId|{{OK}}||
|ServiceDate|{{OK}}(claims)|{{OK}}(prior authorization)|
|Attachment.LineItem||{{OK}}|
|Attachment.Code||{{OK}}(It SHOULD be present when submitting unsolicited attachments)|
|Attachment.Content|{{OK}}(DocumentReference, QuestionnaireResponse if support Requesting Attachments Using Questionnaire|{{OK}}(Servers SHOULD support other FHIR types)|
|Attachment.Final||{{OK}}|
{:.grid}

{% include link-list.md %}


---

// File: input/pagecontent/attachments.md


<!-- Stub page to allow for nesting attachment pages in table of contents -->

- [Solicited and Unsolicited Attachments]
- [Sending Attachments]
- [Requesting Attachments Using Attachment Codes]
- [Requesting Attachments Using Questionnaires]
- [Using CDex Attachments with DaVinci PAS]
- [Conforming to CDex Attachments]

{% include link-list.md %}

---

// File: input/pagecontent/background.md

### About the Da Vinci Project

Da Vinci is a private sector initiative that addresses the needs of the Value-Based Care Community by leveraging the HL7 FHIR platform. For more information about the Da Vinci Project, its use cases, members, and updates, see the [Da Vinci Overview]

### What Do Payers Do with Clinical Information

Payers require clinical data from providers who order or provide services. They use this data to document prior authorization, process and audit claims, and confirm medical necessity and appropriateness. In addition, payers use clinical data to create risk profiles for members for value-based care contracts and population health adjustments. Quality reporting requirements and quality care scoring require clinical data for evaluating clinical performance and outcomes. Payers may also collect this clinical information to assist providers with care planning options.

#### Example Scenarios

- Payer requests *attachments* for a claim submission or prior authorization.
  - For example, additional documentation to support medical necessity or a coverage rule.
- Payer requests additional documentation to support a claims audit.
- Payer requests patient health record information to support their Risk Adjustment submissions to the Centers for Medicare and Medicaid Services (CMS).
- Payer requests patient health record information to support their member records.
- Payer requests additional information related to quality reporting.
- Payers request patient health record information to meet new regulatory requirements (for example, promoting patient access).

### Provider to Provider Data Exchange

 Providers commonly need and request information about their patients from other providers. Although this guide focuses on payer-to-provider interactions, the technical exchange is no different from a provider-to-provider interaction.

#### Example Scenarios

 - The referred-to provider solicits additional clinical information from the referring provider to support the performance of the requested service.
 - The referring provider needs the results from the referred-to provider.

### What Information is Needed

A sampling of the type of information needed by Payers includes:

- Medical records - for example, a progress note or visit summary
- C-CDA documents of various types
- Medications
- Laboratory results
- Clinical Assessments for Diagnoses
- Vital Signs - for example, Blood Pressure measurements
- Narrative - such as written or transcribed clinical notes

For Security and Privacy considerations, refer to the [Security and Privacy] page.

### Where Does CDEX Fit in the Da Vinci Project

[Da Vinci Use Cases] are interrelated, currently with five categories that have emerged: Quality Improvement, Coverage/Burden Reduction, Member Access, Process Improvement, and Clinical Data Exchange.  A table that summarizes the many areas of functional overlap between this guide and other Da Vinci guides is available [here](https://confluence.hl7.org/display/DVP/CDEX+Overlap+with+Other+DaVinci+IGs). CDex is not intended to supersede other Da Vinci guides, which focus on a particular use case and define how to share clinical information. However, CDex may be used to request clinical data from a provider when:

- An alternative is needed to cover some aspects of an exchange. For example, suppose the provider's data release process does not allow the automatic request for information specified in a use case specific IG. In that case, CDex provides an asynchronous process that allows manual review before releasing the information. However, implementers should not use this transaction when there is a requirement for real-time response to facilitate patient care. 
- There is a specific exchange that is not already addressed by one of the other IGs 

 The use of CDex **SHALL NOT** be considered compliant with any use case specific IG where CDex is not explicitly required as part of the supported exchanges. 

### Workflow Overview

FHIR offers numerous architectural approaches for sharing data between systems. Each has pros and cons; the most appropriate one depends on the circumstances under which systems exchange data. (Review the [Architectural Approach](#architectural-approach) section below for more detail.)  This guide focuses on **three** FHIR transaction approaches for requesting information:

1. **[Direct Query]:** A Payer or external Provider system directly queries the Provider system for specific data using the standard FHIR RESTful search.
2. **[Task Based Approach]:** A Payer or external Provider system requests data using the FHIR *Task* resource. The Provider system supplies the data. Human involvement may be needed to find/aggregate/filter/approve it.
3. **[Solicited and Unsolicited Attachments]** The payer system requests attachments (additional documentation) for claims or prior authorization using the FHIR *Task* resource. The Provider system uses a “push” based FHIR operation to submit attachments to the Payer.

<div markdown="1" class="stu-note">

Payers may request data for many patients/members or anticipate large payloads from the Provider. For example, they ask for detailed clinical information about their members. Implementers may consider using the [Bulk Data Access IG] and the [FHIR Asynchronous Request Patterns] for these requests. However, more implementation experience with this use case is needed to provide specific guidance in this guide.
</div><!-- stu-note -->

#### Direct Query and Task-Based Workflows

Figure 3 below illustrates the exchange of clinical data between a Payer (or Provider) system and a Provider system using the *Direct Query* and *Task-Based* workflows.  

{% include img.html img="workflow-overview.svg" caption="Figure 3" %}

##### Actors and Roles

- The Payer or External Provider System acts as a *data consumer*.
- The Provider system acts as a *data source*.
- A human practitioner is involved in approving/filtering the information provided.
  - A pre-existing agreement could be in place that allows data to be shared *without* human intervention.

##### Steps

1. The data consumer initiates a request for information.
1. The data source retrieves the requested data.
1. A human practitioner may review the data before sending it back to the data consumer.
1. The data is sent back to the data consumer.

#### Solicited and Unsolicited Attachments Workflows

This specification divides attachments for claims or prior authorization into solicited and unsolicited workflows. Both are illustrated below.

##### Actors and Roles

- The Payer system acts as a *data consumer*.
- The Provider system acts as a *data source*.

##### Unsolicited Attachments Workflow

Figure 4 below illustrates the exchange of clinical data between a Provider system and a Payer system using the *Unsolicited Attachments* workflow.

{% include img.html img="workflow-unsolicited-attachments.svg" caption="Figure 4" %}

###### Steps

1. The Provider submits the attachments and metadata for the association to the claim or prior authorization (for example, member id and claim id).
   - attachments are submitted **without an explicit request** as *unsolicited* attachments. 
2. The Payer system accepts attachments. (This guide does not cover the payer's method for associating attachments to claims or prior authorizations and processing them.)
##### Solicited Attachments Workflow

Figure 5 below illustrates the exchange of clinical data between a Payer system and a Provider system using the *Solicited Attachments* workflow.

{% include img.html img="workflow-solicited-attachments.svg" caption="Figure 5" %}

###### Steps

1. For *solicited* attachments, the Payer initiates a request for attachments for a claim or prior authorization.
    - This can be a FHIR or non-FHIR-based transaction
2. The Provider submits the attachments and metadata (for example, member id and claim id) for the association to the claim or prior authorization.
3. The Payer system accepts attachments. (This guide does not cover the payer's method for associating attachments to claims or prior authorizations and processing them.)



### Architectural Approach

All Da Vinci IGs that define [CapababilityStatements]({{site.data.fhir.path}}capabilitystatement.html) setting expectations for support for specific FHIR interactions, operations, or other exchange mechanisms include this section explaining the IG's choice of exchange architecture in terms of the [Approaches to Exchanging FHIR Data](https://hl7.org/fhir/exchanging.html) page documented in the FHIR version R5 specification.

#### Direct Query

Direct Query is the standard FHIR RESTful search and is the simplest, most adopted, and reusable approach for clinical data exchange between a Data Consumer and a Data Source.

##### Decision Tree

- Consumer initiates? - **Yes** - The CDex Data Consumer systems initiate the transaction when it needs clinical information from the CDex Data Source.
- Direct Connection? - **Yes** - It was presumed that CDex Data Consumer systems could connect directly with the CDex Data Source system.
- Human intervention? - **No** - There was no expectation the CDex Data Source would need human intervention to return the information. 
- Is data pre-existing? - **Yes** - Generally, it was presumed the CDex Data Source has data about a patient/member.
- Return FHIR resources? - **Yes** - The CDex Data Source could return FHIR resources.
- Ad-hoc query? - **Yes** - It was presumed that CDex Data Consumer would create Ad-hoc RESTful queries to get the data from the CDex Data Source.
- Synchronous? - **Yes** - It was presumed that the RESTful queries are *synchronous*.

#### Task-Based Workflow

Although not as widely adopted as the FHIR RESTful approach, the Task-Based approach is a highly reusable clinical data exchange between a Data Consumer and a Data Source. See the [Task Based Approach] page for its benefits over Direct Query and when to use it.

##### Decision Tree

- Consumer initiates? - **Yes** - The CDex Data Consumer systems initiate the transaction when clinical information from the CDex Data Source is needed.
- Direct Connection? - **Yes** - It was presumed that CDex Data Consumer systems could connect directly with the CDex Data Source system to create Tasks and fetch resources.
- Human intervention? - **Yes** - There was an expectation the CDex Data Source may need human intervention to return the information. 
- Is data pre-existing? - **Yes** - Generally, it was presumed the CDex Data Source has data about a patient/member.
- Return FHIR resources? - **Yes** - The CDex Data Source could return FHIR resources.
- Ad-hoc query? - **Yes** - It was presumed that CDex Data Consumer would create an Ad-hoc data request using `Task.input` to get the data from the CDex Data Source.
- Synchronous? - **No** - It was presumed that the Task-based queries are *asynchronous*.
- Subscription capability? - **Maybe** - It was presumed that the CDex Data Consumer would use *polling* or *subscriptions*  to determine when the Task is completed.

#### Solicited and Unsolicited Attachments Workflow

##### Sending Attachments Using a FHIR Process Operation

The CDex Data Source  (i.e., the Provider) uses the [`$submit-attachment`] operation to *push* clinical data to the CDex Data Consumer (i.e., the Payer) in both solicited and solicited attachment transactions. This transaction is specialized to the CDex Attachments use case and is not reusable for other clinical data exchanges.

###### Decision Tree

- Push? - **Yes** - It was presumed that the CDex Data Source would *push* the clinical data to the CDex Data Consumer.
- Configured by consumer? - **No** - It was presumed that the CDex Data Consumer would share all the clinical data for all transactions.
- Direct Connection? - **Yes** - It was presumed that CDex Data Source systems could connect directly with the CDex Data Consumer system.
- Data source directs consumer persistence? - **No** - It was presumed that the CDex Data Consumer is unaware of the existing data and would share all the clinical data for all transactions.
- Is message-like? - **No** - It was presumed that there is no need for explicit support for routing and that Operations are a lighter-weight solution.

##### Requesting Attachment using Task

Requesting Attachment using Task is a specialization of the [Task-Based Workflow](#task-based-workflow) transaction. In contrast to the Task Based Workflow, it is not reusable for other clinical data exchanges. Additionally, the CDex Data Source (i.e., the Provider) *pushes* the data to the Payer-supplied endpoint using the [`$submit-attachment`] operation documented in the [Sending Attachments Using a FHIR Process Operation](#sending-attachments-using-a-fhir-process-operation) section above.

###### Decision Tree

- Consumer initiates? - **Yes** -  The CDex Data Consumer systems initiate the transaction when clinical information from the CDex Data Source is needed.
- Direct Connection? - **Yes** - It was presumed that CDex Data Consumer systems could connect directly with the CDex Data Source system to create Tasks and fetch resources.
Human intervention? **Yes** - There was an expectation the CDex Data Source may need human intervention to return the information. 
- Is data pre-existing? - **Yes** - Generally, it was presumed the CDex Data Source has data about a patient/member.
- Return FHIR resources? - **Yes** - The CDex Data Source could return FHIR resources.
- Ad-hoc query? - **Yes** - It was presumed that CDex Data Consumer would create Ad-hoc data requests using `Task.input` to get the data from the CDex Data Source.
- Synchronous? - **No** - It was presumed that the Task-based queries are *asynchronous*.
- Push? - **Yes** - It was presumed that the CDex Data Source would *push* the clinical data to the CDex Data Consumer when the Task is complete. See the decision tree in the [Sending Attachments Using a FHIR Process Operation](#sending-attachments-using-a-fhir-process-operation) section above.

<!-- ### Implementer Support

The [CDex Implementer Support page] provides further context on the detailed representation of the clinical data and data payload in a provider-to-payer exchange. FHIR examples demonstrating representation of this guidance are provided to illustrate the points made in the guide. It is possible that some of this content will be merged into the CRD FHIR Implementation Guides (IG) in a future release. -->

{% include link-list.md %}


---

// File: input/pagecontent/burden-reduction.md



### Introduction

The Da Vinci Burden Reduction Implementation Guides (IGs), [Da Vinci Coverage Requirements Discovery (CRD)], [Da Vinci Documentation Templates and Rules (DTR)], and [Da Vinci Prior Authorization Support (PAS)], support an integrated workflow to enable automated submission of required documentation and prior authorization from EHR and payer systems respectively.  In [Da Vinci Prior Authorization Support (PAS)], a final decision is expected to be generated immediately and automatically in most cases. However, a payer may request additional information (aka attachments) from the Provider to support a prior authorization request. See the [Request for Additional Information] section in the PAS Implementation Guide.

### Differences between PAS and CDex

The PAS guide leverages CDex to request additional information for prior authorization:

- PAS and CDex use the [`$submit-attachment`] operation to push the attachments to the Payer.
- PAS and CDex request attachments using Codes or Questionnaires.
- PAS and CDex Use Task as a context parameter to launch a Smart on FHIR DTR app.

However, there are several key differences:

||PAS|CDEX|
|---|---|---|
|FHIR resource use by Payer/Intermediary to request additional information | [PAS Claim Response Bundle] | [CDex Task Attachment Request Profile]
|Primary function of Task | Launch context for DTR SMART on FHIR App. | Communicate request for additional information
|Author of Task | Provider | Payer|
|Task Profile | [PAS Task] | [CDex Task Attachment Request Profile]
{:.grid}

###  When to Use PAS or CDex for Requesting Attachments for Prior Authorization

The decision tree in Figure 1 below summarizes when to Use PAS or CDex for requesting attachments for prior authorization:

{% include img.html img="pas_cdex_decision_tree.svg" caption="Figure 1" %} 

1. Use PAS when implementing Da Vinci Burden reduction for prior authorization, the initial authorization request is 'pended', and additional information is requested from the Provider with an X12 278 Response or [PAS Response Bundle].
1. Use CDex when the Provider uses another channel to request a prior authorization (e.g., fax, portal, phone).
2. Use CDex if the Payer makes subsequent requests for additional information after using PAS for the initial request.

{% include link-list.md %}



---

// File: input/pagecontent/changes.md

### Version = 2.1.0
- Publication Date: 2024-11-1
- URL: <https://hl7.org/fhir/us/davinci-cdex/STU2.1>
- Based on FHIR version: 4.0.1

This STU Update of The Da Vinci Clinical Data Exchange (CDex) Implementation Guide is the fourth published version of this guide. The sponsoring HL7 International Payer/Provider Information Exchange Work Group members agreed to and voted on the resolution of the community review comments and edits to this guide.

#### What's new in Version 2.1.0 of CDex:

See the 2.1.0-snapshot version below

#### Changes:

These changes are the result of the community review of the 2.1.0-snapshot version

**Status: Summary (Jira Issue) Link to Change**

1. **Applied**: (Enhancement) Add guidance that should not bypass BR guides [FHIR-48404](https://jira.hl7.org/browse/FHIR-48404) [See Changes Here](solicited-unsolicited-attachments.html) and [See Changes Here](burden-reduction.html)
2. **Applied**: (Enhancement) Require adherence to Da Vinci Guiding Principles [FHIR-48406](https://jira.hl7.org/browse/FHIR-48406) [See Changes Here](index.html#about-this-guide)
3. **Applied**: (Enhancement) Update Figure [FHIR-48384](https://jira.hl7.org/browse/FHIR-48384) [See Changes Here](background.html#where-does-cdex-fit-in-the-da-vinci-project)
4. **Applied**: (Clarification) Remove conflicting guidance on Quality Measure and Risk Adjustment [FHIR-48841](https://jira.hl7.org/browse/FHIR-48841)

### Version = 2.1.0-snapshot
- Publication Date: 2024-09-11
- URL: <https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot>
- Based on FHIR version: 4.0.1

This Snapshot version of The Da Vinci Clinical Data Exchange (CDex) Implementation Guide is the proposed STU update of this guide and is published for community review prior to final publication of version 2.1.0. The members of the sponsoring HL7 International Payer/Provider Information Exchange Work Group agreed to and voted on the resolution of the community comments and edits to this guide.

#### What's new in Version 2.1.0-snapshot of CDex:

1. Support for [US Core 6.1.0](https://hl7.org/fhir/us/core/STU6.1/) and [US Core 7.0.0](https://hl7.org/fhir/us/core/STU7/).
2. Updated guidance on [Using CDex Attachments with DaVinci PAS](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/burden-reduction.html#using-cdex-attachments-with-davinci-pas) page to align with Da Vinci PAS v 2.0.1 Guide's, [Request for Additional Information](https://hl7.org/fhir/us/davinci-pas/STU2/additionalinfo.html) page.
3. A new section on [topic-based subscriptions](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/task-based-approach.html#subscription) based on the [Subscription R5 Backport Implementation Guide](http://hl7.org/fhir/uv/subscriptions-backport/STU1.1/index.html) implementation guide.
4. Updated guidance on [discovery of patient ids](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/direct-query.html#discovery-of-patient-fhir-ids) based on FAST's [Interoperable Digital Identity and Patient Matching](https://hl7.org/fhir/us/identity-matching/index.html) implementation guide.
5. Version 2.0.0 *Draft* content about using Questionnaires with the Task-based Approach and Attachments updated to *Trial Use*.
6. A  new [design section](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/background.html#architectural-approach) explains the IG’s choice of exchange architecture in terms of the [Approaches to Exchanging FHIR Data](https://hl7.org/fhir/exchanging.html) page.
7. [Task state diagram](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/task-based-approach.html#task-state-machine) for the CDex Task profiles.

#### Changes:

These changes are the result of the trackers listed below.

**Status: Summary (Jira Issue) Link to Change**

1. **Applied:** (Correction) Update diagram to "Provider submitted requested attachments to the *Payer*"  [FHIR-38604](https://jira.hl7.org/browse/FHIR-38604) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/solicited-unsolicited-attachments.html#solicited-attachments)
3. **Applied:** (Enhancement) Add profile for $submit-attachment Parameters resource [FHIR-41336](https://jira.hl7.org/browse/FHIR-41336) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-parameters-submit-attachment.html)
4. **Applied:** (Correction) Update `meta.tag.system` cardinality to 1..1 [FHIR-43618](https://jira.hl7.org/browse/FHIR-43618) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-task-data-request.html)
5.  **Applied:** (Clarification) Clarify when to use CDex vs PAS for attachments [FHIR-44870](https://jira.hl7.org/browse/FHIR-44870) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/burden-reduction.html)
6.  **Applied:** (Enhancement) Include PWK01 attachment codes [FHIR-44871](https://jira.hl7.org/browse/FHIR-44871) See Changes:
   - [CDex LOINC Attachment Codes Value Set](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/ValueSet-cdex-loinc-attachment-codes.html)
   - [CDex PWK01 Attachment Report Type Code Value Set](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/ValueSet-cdex-pwk01-attachment-report-type-code.html)
   - [CDex Task Attachment Request Profile](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-task-attachment-request.html)
   - [CDex Parameters Submit Attachment Profile](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-parameters-submit-attachment.html)
   - [Requesting Attachments Using Attachments Codes](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/requesting-attachments-code.html)
7.  **Applied:** (Enhancement) Correct X12 278 Data Element Mappings [FHIR-44875](https://jira.hl7.org/browse/FHIR-44875) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/requesting-attachments-code.html#data-elements-for-requesting-attachments)
8.  **Applied:** (Clarification) Change Task.input "payer-url" to "PayerURL" to align with PAS Task [FHIR-44883](https://jira.hl7.org/browse/FHIR-44883) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-task-attachment-request.html) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/Task-cdex-task-example19.html)
9.  **Applied:** (Clarification) Change Task.input "code" to "AttachmentsNeeded" to align with PAS Task [FHIR-44884](https://jira.hl7.org/browse/FHIR-44884) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-task-attachment-request.html) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/Task-cdex-task-example19.html)
10. **Applied:** (Clarification) Change Task.input "questionnaire" slice to "QuestionnaireContext" to align with PAS Task [FHIR-44885](https://jira.hl7.org/browse/FHIR-44885) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-task-attachment-request.html) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/Task-cdex-task-example22.html)
11. **Applied:** (Clarification) Fix X12 277RFAI-v6020 mapping for Line Items [FHIR-45298](https://jira.hl7.org/browse/FHIR-45298) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/requesting-attachments-code.html#data-elements-for-requesting-attachments)
12. **Applied:** (Correction) Add Business Status to Task [FHIR-45299](https://jira.hl7.org/browse/FHIR-45299) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/requesting-attachments-questionnaire.html)
13. **Applied:** (Correction) Remove self referencing instantiates in CapabilityStatements [FHIR-45322](https://jira.hl7.org/browse/FHIR-45322) See Changes:
   - [Data Consumer Client CapabilityStatement](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/CapabilityStatement-data-consumer-client.html)
   - [Data Consumer Server CapabilityStatement](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/CapabilityStatement-data-consumer-server.html)
   - [Data Source Client CapabilityStatement](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/CapabilityStatement-data-source-client.html)
   - [Data Source Server CapabilityStatement](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/CapabilityStatement-data-source-server.html)
14. **Applied:** (Enhancement) Update Version 2.0.0 Draft content to Trial Use [FHIR-45409](https://jira.hl7.org/browse/FHIR-45409)
15. **Applied:** (Enhancement) update to support topic based subscriptions [FHIR-45628](https://jira.hl7.org/browse/FHIR-45628) See Changes:
   - [Polling vs Subscriptions](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/task-based-approach.html#polling-vs-subscriptions)
   - [Data Consumer Client CapabilityStatement](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/CapabilityStatement-data-consumer-client.html)
   - [Data Source Server CapabilityStatement](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/CapabilityStatement-data-source-server.html)
   - [Inline Subscription Task Scenario1 Subscription Requested](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/Subscription-cdex-task-inline-scenario1-subscription-requested.html)
   - [Inline Subscription Task Scenario1 Subscription Active](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/Subscription-cdex-task-inline-scenario1-subscription-active.html)
   - [Inline Subscription Task Scenario1 Subscription Notification](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/Bundle-cdex-task-inline-scenario1-subscription-notification.html)
   - [CDex Capabilitystatement Inline Example](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/CapabilityStatement-cdex-capabilitystatement-inline-example.html)
16. **Applied:**(Enhancement) Add design section to background page [FHIR-45884](https://jira.hl7.org/browse/FHIR-45884) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/background.html#architectural-approach)
17. **Applied:**(Enhancement) Add Task State diagram to specification [FHIR-46004](https://jira.hl7.org/browse/FHIR-46004) See Changes:
   - [Task State Machine](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/task-based-approach.html#task-state-machine)
   - [Requesting Attachments Using Attachment Codes](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/requesting-attachments-code.html#requesting-attachments-using-fhir)
   - [Requesting Attachments Using Questionnaires](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/requesting-attachments-questionnaire.html#requesting-attachments-using-fhir)
18. **Applied:**(Enhancement) Change Task.input:QuestionnaireContext max from 1 to * [FHIR-46093](https://jira.hl7.org/browse/FHIR-46093) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-task-attachment-request-definitions.html#diff_Task.input:QuestionnaireContext) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/requesting-attachments-questionnaire.html)
19. **Applied:**(Enhancement) Add Task Based approach as an option for the discovery of a member’s FHIR_ID [FHIR-45982](https://jira.hl7.org/browse/FHIR-45982) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/direct-query.html#discovery-of-patient-fhir-ids)
20. **Applied:**(Enhancement) Remove FAST STU note and add guidance on using FAST's The Interoperable Digital Identity and Patient Matching guide [FHIR-45985](https://jira.hl7.org/browse/FHIR-45985) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/direct-query.html#discovery-of-patient-fhir-ids) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/task-based-approach.html#discovery-of-identifiers)
21. **Applied:**(Enhancement) Add "Support" menu item [FHIR-46349](https://jira.hl7.org/browse/FHIR-46349) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/index.html)
22. **Applied**: (Enhancement) Support both US-Core 3.1.1 and 6.1.0 [FHIR-46507](https://jira.hl7.org/browse/FHIR-46507)
23. **Applied**: (Enhancement) Add link to flowcharts images to downloads page [FHIR-46508](https://jira.hl7.org/browse/FHIR-46508) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/downloads.html#example-flow-chart-diagrams)
24. **Applied**: (Correction) Copy editing changes prior to comment period to ensure accuracy, clarity, and readability. [FHIR-46509](https://jira.hl7.org/browse/FHIR-46509) For example, See Changes: 
 - [How To Read This Guide](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/index.html#how-to-read-this-guide)
 - [Sensitive and Confidential Data](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/security.html#sensitive-and-confidential-data)
25. **Applied**: (Correction) Fix Typo and ordering in Task Data Request Profile [FHIR-46294](https://jira.hl7.org/browse/FHIR-46294) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-task-data-request.html)
26. **Applied**: (Correction) Add Task.authoredOn to list of mandatory elements in the CDex Task Data Request Profile description. [FHIR-46296](https://jira.hl7.org/browse/FHIR-46296) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/StructureDefinition-cdex-task-data-request.html)
27. **Applied**: (Correction) Change page statuses [FHIR-46563](https://jira.hl7.org/browse/FHIR-46563) For example [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/security.html)
28. **Applied**: (Enhancement) Add endpoint discovery guidance for *Unsolicited* Attachments [FHIR-46443](https://jira.hl7.org/browse/FHIR-46443) [See Changes Here](https://hl7.org/fhir/us/davinci-cdex/STU2.1-snapshot/sending-attachments.html#submit-attachment-operation)
29. **Applied**: (Enhancement) Support both US-Core 3.1.1 and 6.1.0 and 7.0.0 [FHIR-47303](https://jira.hl7.org/browse/FHIR-47303)

### Version = 2.0.0
- Publication Date: 2023-01-30
- URL: <http://hl7.org/fhir/us/davinci-cdex/STU2>
- Based on FHIR version: 4.0.1

This STU2 version of The Da Vinci Clinical Data Exchange (CDex) Implementation Guide is the third published version of this guide and is the result of the 2022 September HL7 balloting process. The resulting resolution of the community comments and edits to this guide has been agreed to and voted on by the members of the sponsoring HL7 International Patient Care and Payer/Provider Information Exchange Work Groups.

#### What's new in Version 2.0.0 of CDex:

1. New [Requesting Attachments Using Questionnaires](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-questionnaire.html) functionality. In prior versions, CDex supported requested attachments using the request model of LOINC attachment codes, and the provider typically submitted CCDA or PDF documents in response. In this version, CDex aligns with DTR functionality and provide the ability to request attachment using Questionnaire, CQL, and QuestionnaireResponse as supported by DTR when there is no transition into/out of X12 transactions in the interactions. In addition, this approach will enable specific requests for missing data and avoid unnecessary document formats, yet still provide the ability for signature attestation if required.
2. New Task-Based transactions functionality for [Using Questionnaire as Task Input](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#using-questionnaire-as-task-input). In prior versions, CDex Task Based Approach supported requests using the request model of FHIR RESTful query syntax, codes, and free-text. As a result, the provider typically returned references to FHIR Bundles. Similar to the Attachments updates, this added functionality leverages DTR and enables specific requests for missing data, avoiding unnecessary use of Bundles.
3. Improved navigation:
   - Menu Bar drop-downs for all the pages to allow faster navigation to a specific topic
   - Re-organization of [FHIR Artifacts](https://hl7.org/fhir/us/davinci-cdex/STU2/artifacts.html) by transaction type. This version has several FHIR artifacts and dozens of examples grouped by Attachments, Task-Based Approach, and Signatures.
4. [Conforming to CDex Attachments](https://hl7.org/fhir/us/davinci-cdex/STU2/attachments-conformance.html) and [Conforming to CDex Task Based Approach](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-conformance.html), including interactions for each role and the conformance resource and terminology that makes them unique.
5. After receiving many comments on CDex POU support, the [CDex Purpose of Use Value Set](https://hl7.org/fhir/us/davinci-cdex/STU2/ValueSet-cdex-POU.html) now includes a hierarchy to the base "Treatment", "Payment", or "Health Care Operations" (TPO) concepts.
6. More examples, including examples of failed signature verifications, signed QuestionnaireResponse, and requesting Attachments for prior authorization using Questionnaire.

#### Changes:

These changes are the result of over 60 trackers listed below. They include the 2022 September HL7 balloting process and non-ballot issues.

##### September 2022 ballot and non-ballot comments and links to the updated content are below:

**Status: Summary (Jira Issue) Link to Change**

1. **Applied**: Correct $submit-attachment input parameter Typo. ([FHIR-37956](https://jira.hl7.org/browse/FHIR-37956)) and ([FHIR-38175](https://jira.hl7.org/browse/FHIR-38175)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/OperationDefinition-submit-attachment.html)
2. **Applied**: Correct claim flow diagram typo ([FHIR-38060](https://jira.hl7.org/browse/FHIR-38060)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/solicited-unsolicited-attachments.html#solicited-attachments)
4. **Applied**: Added missing service line item extension to CDex Task Attachment Request Profile ([FHIR-38070](https://jira.hl7.org/browse/FHIR-38070)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/StructureDefinition-cdex-task-attachment-request.html)
5. **Applied**: Document POU ValueSet Hierarchy to TPO ([FHIR-38142](https://jira.hl7.org/browse/FHIR-38142)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/ValueSet-cdex-POU.html)
6. **Applied**: DS4P should be evaluated before required ([FHIR-38144](https://jira.hl7.org/browse/FHIR-38144)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/security.html#sensitive-and-confidential-data)
7. **Applied**: Correct capitalization ([FHIR-38145](https://jira.hl7.org/browse/FHIR-38145)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/solicited-unsolicited-attachments.html)
9. **Applied**: Change 277 to: “277 Request for Additional Information (RFAI)” ([FHIR-38152](https://jira.hl7.org/browse/FHIR-38152)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#step-by-step-solicited-attachment-transaction)
10. **Applied**: Update sentence ([FHIR-38153](https://jira.hl7.org/browse/FHIR-38153)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html)
11. **Applied**: Correct Typo ([FHIR-38154](https://jira.hl7.org/browse/FHIR-38154)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#requesting-attachments-using-fhir)
12. **Applied**: Modify sentence ([FHIR-38155](https://jira.hl7.org/browse/FHIR-38155)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#step-by-step-solicited-attachment-transaction)
13. **Applied**: Change X12n 277 *message* to X12n 277 *RFAI transaction*. ([FHIR-38156](https://jira.hl7.org/browse/FHIR-38156)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#step-by-step-solicited-attachment-transaction)
14. **Applied**: Update Data Elements table ([FHIR-38172](https://jira.hl7.org/browse/FHIR-38172)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#data-elements-for-requesting-attachments) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#data-elements-for-requesting-attachments)
15. **Applied**: Update Data Elements table ([FHIR-38174](https://jira.hl7.org/browse/FHIR-38174)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#data-elements-for-requesting-attachments)
17. **Applied**:Change X12n 275 *message* to X12n 275 *transaction* ([FHIR-38177](https://jira.hl7.org/browse/FHIR-38177)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#step-by-step-solicited-attachment-transaction)
18. **Applied**:Change *all* documents to *submitted* documents ([FHIR-38178](https://jira.hl7.org/browse/FHIR-38178)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#step-by-step-solicited-attachment-transaction)
19. **Applied**: Remove HIPAA compliance language ([FHIR-38179](https://jira.hl7.org/browse/FHIR-38179)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#verifying-patient-identity)
20. **Applied**: Change *Claim* to *claim or prior authorization* ([FHIR-38184](https://jira.hl7.org/browse/FHIR-38184)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#verifying-patient-identity)
21. **Applied**: Normalize term “prior authorization” ([FHIR-38186](https://jira.hl7.org/browse/FHIR-38186)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html)
22. **Applied**: Update Grammar ([FHIR-38187](https://jira.hl7.org/browse/FHIR-38187)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#supply-the-requested-attachments-for-each-line-item-and-code)
23. **Applied**: Clarify that signature support is not required ([FHIR-38188](https://jira.hl7.org/browse/FHIR-38188)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/signatures.html) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/sending-attachments.html#signatures)
24. **Applied**: Clarify in operation that either an OrganizationId or ProviderId is required. Allow for both Ids to be sent in request.([FHIR-38189](https://jira.hl7.org/browse/FHIR-38189)) See Changes:[
   - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/OperationDefinition-submit-attachment.html) 
   - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/StructureDefinition-cdex-practitionerrole.html)
   - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/StructureDefinition-cdex-task-attachment-request.html) 
   - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#identifying-the-payer-provider-and-patient)
25. **Applied**: Change Task service date input parameter to min = 0 and required only for claims ([FHIR-38191](https://jira.hl7.org/browse/FHIR-38191)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/StructureDefinition-cdex-task-attachment-request.html) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#date-of-service-for-the-claim) 
26. **Applied**: Clarify conformance expectations ([FHIR-38192](https://jira.hl7.org/browse/FHIR-38192)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/attachments-conformance.html) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-conformance.html)
27. **Applied**: Clarify patient account number ([FHIR-38194](https://jira.hl7.org/browse/FHIR-38194)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#data-elements-for-requesting-attachments)
28. **Applied**: Task Infrastructure Elements ([FHIR-38195](https://jira.hl7.org/browse/FHIR-38195)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#task-status-intent-and-code-elements)
30. **Applied**: Separate solicited and unsolicited attachments workflows ([FHIR-38210](https://jira.hl7.org/browse/FHIR-38210)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/background.html#workflow-overview)
31. **Applied**: Make LOINC code display and text consistent ([FHIR-38233](https://jira.hl7.org/browse/FHIR-38233)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Parameters-cdex-parameters-example1.json.html)
32. **Applied**: Fix Typo in example ([FHIR-38236](https://jira.hl7.org/browse/FHIR-38236))w See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Parameters-cdex-parameters-example4.html)
33. **Applied**: Clarify Attachment Scope ([FHIR-38240](https://jira.hl7.org/browse/FHIR-38240)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/solicited-unsolicited-attachments.html)
34. **Applied**: Expand Attachments and Task based approach to support Questionnaires and DTR ([FHIR-38241](https://jira.hl7.org/browse/FHIR-38241)) See Changes:
    - Pages:
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#using-questionnaire-as-task-input)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-questionnaire.html)
    - Conformance Artifacts:
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/StructureDefinition-cdex-task-attachment-request.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/ValueSet-cdex-attachment-task-code.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/StructureDefinition-cdex-task-data-request.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/ValueSet-cdex-data-request-task-code.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/CodeSystem-cdex-temp.html)
    - Examples:
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example22.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example23.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example24.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example25.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example26.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example27.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example28.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example29.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example30.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Task-cdex-task-example31.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Parameters-cdex-parameters-example5.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Questionnaire-cdex-questionnaire-example1.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/Questionnaire-cdex-questionnaire-example2.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/QuestionnaireResponse-cdex-questionnaireresponse-example1.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/QuestionnaireResponse-cdex-questionnaireresponse-example2.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/QuestionnaireResponse-cdex-questionnaireresponse-example3.html)
      - [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/QuestionnaireResponse-cdex-questionnaireresponse-example4.html)
35. **Applied**: Clarify when human involvement needed ([FHIR-38242](https://jira.hl7.org/browse/FHIR-38242)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#sequence-diagram)
36. **Applied**: Add link to PAS Guidance on pended results ([FHIR-38244](https://jira.hl7.org/browse/FHIR-38244)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/burden-reduction.html)
37. **Applied**: Add POU for Attachment Request as optional input parameter ([FHIR-38245](https://jira.hl7.org/browse/FHIR-38245)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/StructureDefinition-cdex-task-attachment-request.html) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#purpose-of-use-for-the-request) 
38. **Applied**: Correct operation name ([FHIR-38253](https://jira.hl7.org/browse/FHIR-38253)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#data-elements-for-requesting-attachments)
39. **Applied**: Change *only accepts* to *only accept*([FHIR-38255](https://jira.hl7.org/browse/FHIR-38255)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/OperationDefinition-submit-attachment.html)
40. **Applied**: Clarify use of cdex-temp code system ([FHIR-38259](https://jira.hl7.org/browse/FHIR-38259)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/ValueSet-cdex-POU.html) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/CodeSystem-cdex-temp.html)
41. **Applied**: Clarify use of data tagging ([FHIR-38286](https://jira.hl7.org/browse/FHIR-38286)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/security.html#sensitive-and-confidential-data)
42. **Applied**: Updated X12 element mappings and X12 required citations ([FHIR-38287](https://jira.hl7.org/browse/FHIR-38287)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#data-elements-for-requesting-attachments) and Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/sending-attachments.html#data-elements-for-sending-attachments)
43. **Applied**: Clarify how to find patient FHIR ID ([FHIR-38318](https://jira.hl7.org/browse/FHIR-38318)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/direct-query.html#discovery-of-patient-fhir-ids)
44. **Applied**: Clarify X12 Compatibility ([FHIR-38326](https://jira.hl7.org/browse/FHIR-38326)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/sending-attachments.html#sending-attachments)
45. **Applied**: Add Qualifier to Signed Document Bundle ([FHIR-38327](https://jira.hl7.org/browse/FHIR-38327)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/signatures.html#step-by-step-examples)
46. **Applied**: Remove words *transaction layer* ([FHIR-38328](https://jira.hl7.org/browse/FHIR-38328)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/sending-attachments.html#technical-workflow)
47. **Applied**: Word change *analogs* to *fields* ([FHIR-38330](https://jira.hl7.org/browse/FHIR-38330)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/sending-attachments.html#data-elements-for-sending-attachments)
48. **Applied**: Correct rendering of CCDA ([FHIR-38367](https://jira.hl7.org/browse/FHIR-38367)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#surgical-notes-as-ccda-documents)
49. **Applied**: removed '*' from button bar ([FHIR-38368](https://jira.hl7.org/browse/FHIR-38368)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#example-of-a-signed-task-based-transaction)
50. **Applied**: Change *follows* to *adheres to* ([FHIR-38576](https://jira.hl7.org/browse/FHIR-38576)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/index.html#about-this-guide)
51. **Applied**: Revise section 'what Do Payers Do with Clinical Information?' ([FHIR-38578](https://jira.hl7.org/browse/FHIR-38578)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/background.html)
52. **Applied**: Clarify when CDex is used instead of other guides ([FHIR-38585](https://jira.hl7.org/browse/FHIR-38585)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/background.html#where-does-cdex-fit-in-the-da-vinci-project)
53. **Applied**: Remove the HIE paragraph ([FHIR-38588](https://jira.hl7.org/browse/FHIR-38588)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/background.html#actors-and-roles)
54. **Applied**: Create failed signature example transaction ([FHIR-38596](https://jira.hl7.org/browse/FHIR-38596)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/sending-attachments.html#signatures)
55. **Applied**: Clarify benefits of POU element ([FHIR-38598](https://jira.hl7.org/browse/FHIR-38598)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/#)
56. **Applied**: change SHOULD to SHALL ([FHIR-38599](https://jira.hl7.org/browse/FHIR-38599)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#task-reason)
57. **Applied**: Correct Preconditions and Assumptions ([FHIR-38600](https://jira.hl7.org/browse/FHIR-38600)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#scenario-2)
58. **Applied**: Correct Preconditions and Assumptions ([FHIR-38601](https://jira.hl7.org/browse/FHIR-38601)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#scenario-2)
59. **Applied**: Update polling frequency guidance([FHIR-38602](https://jira.hl7.org/browse/FHIR-38602)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/task-based-approach.html#polling)
60. **Applied**: Remove trading partner agreement statement ([FHIR-38603](https://jira.hl7.org/browse/FHIR-38603)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/solicited-unsolicited-attachments.html#unsolicited-attachments)
61. **Applied**: Clarify association comment and assign FMM levels to guide  ([FHIR-38605](https://jira.hl7.org/browse/FHIR-38605)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/background.html#steps-2)
62. **Applied**: Clarify Profile relationship to X12  ([FHIR-38612](https://jira.hl7.org/browse/FHIR-38612)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/requesting-attachments-code.html#cdex-attachment-request-profile)
63. **Applied**: Change $submit-attachment's Attachment input parameter to min=1. ([FHIR-38632](https://jira.hl7.org/browse/FHIR-38632)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/OperationDefinition-submit-attachment.html)
64. **Applied**: Change Tracking-id.system to Must Support; and $submit-attachment TrackingId to type Identifier. ([FHIR-39337](https://jira.hl7.org/browse/FHIR-39337)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/OperationDefinition-submit-attachment.html) and [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/StructureDefinition-cdex-task-attachment-request.html)
65. **Applied**: Update NPI codesystem  ([FHIR-39626](https://jira.hl7.org/browse/FHIR-39626)) See Changes [Here](https://hl7.org/fhir/us/davinci-cdex/STU2/ValueSet-cdex-identifier-types.html)

### Version = 2.0.0-ballot
- Publication Date: 2022-08-01
- URL: <http://hl7.org/fhir/us/davinci-cdex/2022Sep/>
- Based on FHIR version: 4.0.1

#### Changes:
Da Vinci CDEX 2022 September Ballot. This ballot is restricted to the *Draft* content in the STU 1.1.0 version of CDex. The draft content includes 1) requesting and sending attachments and 2) communicating the purpose of use in Task Based Queries.

### Version = 1.1.0
- Publication Date: 2022-08-01
- URL: <https://hl7.org/fhir/us/davinci-cdex/STU1.1/>
- Based on FHIR version: 4.0.1

This STU1.1 version of The Da Vinci Clinical Data Exchange (CDex) Implementation Guide is the second published version of this guide and is the result of the 2022 May HL7 balloting process. The resulting resolution of the community comments and edits to the guide has been agreed to and voted on by the members of the sponsoring HL7 International Patient Care and Payer/Provider Information Exchange Work Groups.

#### What’s new in Version 1.1.0 of CDex:

- <span class="bg-warning">This content is DRAFT and is open for review.</span> An [Attachments](https://hl7.org/fhir/us/davinci-cdex/STU1.1/attachments.html) section  documenting how to exchange attachments for claims or prior authorization.
    - A [Solicited and Unsolicited Attachments](https://hl7.org/fhir/us/davinci-cdex/STU1.1/solicited-unsolicited-attachments.html) page documents the differences and similarities between solicited and unsolicited attachments workflows and the CDex transactions that can be used for each.
    - A [Sending Attachments](https://hl7.org/fhir/us/davinci-cdex/STU1.1/sending-attachments.html) page that documents a FHIR-based approach for sending attachments for claims or prior authorization directly to a Payer.
    - A [Requesting Attachments](https://hl7.org/fhir/us/davinci-cdex/STU1.1/requesting-attachments.html) page to document a FHIR-based approach for requesting attachments for claims or prior authorization from a Provider.
    - A [Using CDex Attachments with DaVinci PAS](https://hl7.org/fhir/us/davinci-cdex/STU1.1/requesting-attachments.html) page that illustrates where in the PAS workflow the Payer could use CDEX to request attachments and the Provider could use CDEX to submit attachments.
- [Signatures](https://hl7.org/fhir/us/davinci-cdex/STU1.1/signatures.html) page sections for each transaction in CDex to provide specific guidance and rules to exchange *signed* data using FHIR and non-FHIR signatures. 
- A [Change Log](https://hl7.org/fhir/us/davinci-cdex/STU1.1/changes.html) page to document the changes across the versions of CDex
- More [examples](https://hl7.org/fhir/us/davinci-cdex/STU1.1/artifacts.html#6) and example scenarios
  
#### Changes:

These changes are the result of almost 60 trackers listed below. They include the 2022 May HL7 balloting process, non-ballot issue, and *Draft* new content to meet anticipated Attachments legislation and rules. 

##### May 2022 Ballot comments and links to the updated content are below::

**Status: Summary (Jira Issue) Link to Change**

1. **Applied:** Typo ([FHIR-36819](https://jira.hl7.org/browse/FHIR-36819))
2. **Applied:** Typo ([FHIR-36820](https://jira.hl7.org/browse/FHIR-36820))
3. **Applied:** Typo ([FHIR-36821](https://jira.hl7.org/browse/FHIR-36821))
6. **Applied:** Add guidance when Signatures fail verification ([FHIR-36842](https://jira.hl7.org/browse/FHIR-36842)) See Changes:   
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/direct-query.html#signatures)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#signatures)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/sending-attachments.html#signatures)
7. **Applied:** Add link to Example of Completed Task Request for Signed Data([FHIR-36844](https://jira.hl7.org/browse/FHIR-36844)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/Task-cdex-task-example18.html)
8. **Applied:** Clarification on who is signing([FHIR-36845](https://jira.hl7.org/browse/FHIR-36845)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/direct-query.html#signatures)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#signatures)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/sending-attachments.html#signatures)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/signatures.html)
9. **Applied:** Clarify system level signatures ([FHIR-36847](https://jira.hl7.org/browse/FHIR-36847)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/direct-query.html#signatures)
10. **Applied:** Add example FlowSheets for each Transaction ([FHIR-36854](https://jira.hl7.org/browse/FHIR-36854)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/downloads.html)
11. **Applied:** Typo ([FHIR-36917](https://jira.hl7.org/browse/FHIR-36917))
12. **Applied** Update Figure ([FHIR-36918](https://jira.hl7.org/browse/FHIR-36918)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/background.html#attachments-workflow)
13. **Applied** Clarify purpose for additional information ([FHIR-36919](https://jira.hl7.org/browse/FHIR-36919)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/attachments.html)
14. **Applied:** Typo ([FHIR-36921](https://jira.hl7.org/browse/FHIR-36921))
15. **Applied:** Typo ([FHIR-36922](https://jira.hl7.org/browse/FHIR-36922))
16. **Applied** Clarify Figure 4 and associated text in 2.6.2 ([FHIR-36985](https://jira.hl7.org/browse/FHIR-36985)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/background.html#attachments-workflow)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/solicited-unsolicited-attachments.html)
18. **Applied:** Add non-document based attachment scenario ([FHIR-36995](https://jira.hl7.org/browse/FHIR-36995)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/sending-attachments.html#scenario-2-laboratory-results-attachments)
19. **Applied:** Clarify association of data ([FHIR-36996](https://jira.hl7.org/browse/FHIR-36996)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/attachments.html)
20. **Applied:** Document using CDex Attachments with DaVinci PAS ([FHIR-36997](https://jira.hl7.org/browse/FHIR-36997)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/burden-reduction.html)
21. **Applied:** Replace EHR with Source HIT ([FHIR-36999](https://jira.hl7.org/browse/FHIR-36999)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/index.html#how-to-read-this-guide)
23. **Applied:** Remove "preferred" approach from direct query ([FHIR-37166](https://jira.hl7.org/browse/FHIR-37166)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/direct-query.html)
24. **Applied:** Clarify H&P in diagram is object or behavior ([FHIR-37225](https://jira.hl7.org/browse/FHIR-37225)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/background.html#attachments-workflow)
25. **Applied:** Clarify roles in attachments diagram([FHIR-37226](https://jira.hl7.org/browse/FHIR-37226)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/background.html#attachments-workflow)
26. **Applied:** Typo ([FHIR-37227](https://jira.hl7.org/browse/FHIR-37227))
27. **Applied:** Typo ([FHIR-37229](https://jira.hl7.org/browse/FHIR-37229))
28. **Applied:** Typo ([FHIR-37233](https://jira.hl7.org/browse/FHIR-37233))
29. **Applied:** Clarify Figure 7 step 4 text to match the description ([FHIR-37234](https://jira.hl7.org/browse/FHIR-37234)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/sending-attachments.html#technical-workflow)
30. **Applied:** Typo ([FHIR-37235](https://jira.hl7.org/browse/FHIR-37235))
31. **Applied:** Rewrite introduction to Signature ([FHIR-37243](https://jira.hl7.org/browse/FHIR-37243)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/signatures.html)
33. **Applied:** Add best practice guidance for signatures ([FHIR-37246](https://jira.hl7.org/browse/FHIR-37246)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#data-sourceresponder-requirements)
34. **Applied:** Remove "preferred" ([FHIR-37248](https://jira.hl7.org/browse/FHIR-37248))
35. **Applied:** Use term Data Consumer consistently and Define how terms used in guide([FHIR-37250](https://jira.hl7.org/browse/FHIR-37250)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/index.html#how-to-read-this-guide)
36. **Applied:** Re-write Signature sections([FHIR-37251](https://jira.hl7.org/browse/FHIR-37251)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/direct-query.html#signatures)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#signatures)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/sending-attachments.html#signatures)
42. **Applied:** Rewrite introduction to Signature ([FHIR-37253](https://jira.hl7.org/browse/FHIR-37253)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/signatures.html)
44. **Applied:** Update Polling Guidance ([FHIR-37260](https://jira.hl7.org/browse/FHIR-37260)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#polling-vs-subscriptions)

##### Non-Ballot Issues and links to the updated content are below::

**Status: Summary (Jira Issue) Link to Change**

1. **Applied:** Recommendation for exchanging purpose of use. ([FHIR-30824](https://jira.hl7.org/browse/FHIR-30824)) See Changes:
  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html)
  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#purpose-of-use)
  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/security.html#general-considerations)
  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/security.html#purpose-of-use)
3. **Applied** Make Task.reasonReference.identifer 0…1 MS ([FHIR-35151](https://jira.hl7.org/browse/FHIR-35151)) See Changes:
  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/StructureDefinition-cdex-task-data-request.html)
  - [Various examples such as Here](https://hl7.org/fhir/us/davinci-cdex/STU1.1/Task-cdex-task-example1.html)
  - [Various example scenarios such as Here](https://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#step-1---post-task-to-provider-endpoint)
6. **Applied:** Create page for change log ([FHIR-36727](https://jira.hl7.org/browse/FHIR-36727)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/changes.html)
7. **Applied:** Change re-associate to associate ([FHIR-36733](https://jira.hl7.org/browse/FHIR-36733)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/attachments.html)
8.  **Applied:** Fix Typo([FHIR-36736](https://jira.hl7.org/browse/FHIR-36736)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/signed-searchset-bundle-example.html)
9.  **Applied:** Clarify the relation between CDEX and HRex ([FHIR-36741](https://jira.hl7.org/browse/FHIR-36741)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/index.html#about-this-guide)
10. **Applied:** Submit Attachment AttachTo text correction ([FHIR-36756](https://jira.hl7.org/browse/FHIR-36756)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/OperationDefinition-submit-attachment.html)
12. **Applied:** Clarify that signature element should reference an Organization or Practitioner as signer ([FHIR-36846](https://jira.hl7.org/browse/FHIR-36846)) See Changes:
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/StructureDefinition-cdex-signature-bundle.html)`
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/signatures.html#digital-signature-rules-for-cdex-fhir-bundles)
13. **Applied:** Fix grammar([FHIR-36848](https://jira.hl7.org/browse/FHIR-36848)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/direct-query.html#signatures)
14. **Applied:** Fix formatting Error to separate several entries([FHIR-36853](https://jira.hl7.org/browse/FHIR-36853)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/signatures.html#digital-signatures)
15. **Applied:** Fix capitalization([FHIR-36896](https://jira.hl7.org/browse/FHIR-36896)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/attachments.html)
16. **Applied:** Adds links to operation consistently ([FHIR-36897](https://jira.hl7.org/browse/FHIR-36897)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/attachments.html)
17. **Applied:** Rewrite digital signature functional requirements: ([FHIR-36905](https://jira.hl7.org/browse/FHIR-36905)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/signatures.html#digital-signatures)
18. **Applied:** Add conformance Verbs to Submit Attachment operation page ([FHIR-36906](https://jira.hl7.org/browse/FHIR-36906)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/OperationDefinition-submit-attachment.html)
19. **Applied:** Missing examples  ([FHIR-37245](https://jira.hl7.org/browse/FHIR-37245)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/Bundle-cdex-document-digital-sig-example.html)
20. **Applied:** Rewrite background on section on Payers([FHIR-37252](https://jira.hl7.org/browse/FHIR-37252)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/background.html#what-do-payers-do-with-clinical-information)
21. **Applied:** Clarify support for XML with signatures ([FHIR-37264](https://jira.hl7.org/browse/FHIR-37264)) See Changes:
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/signatures.html#digital-signature-rules-for-cdex-fhir-bundles)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/CapabilityStatement-data-consumer-client.html#behavior)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/CapabilityStatement-data-consumer-server.html#behavior)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/CapabilityStatement-data-source-client.html#behavior)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/CapabilityStatement-data-source-server.html#behavior)
22. **Applied:** Add clarification on how to handle reads when signatures are needed ([FHIR-37265](https://jira.hl7.org/browse/FHIR-37265)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/direct-query.html#signatures)
23. **Applied:** Update $submit-attachments diagram to show 200 w/ OperationOutcome ([FHIR-37271](https://jira.hl7.org/browse/FHIR-37271)) See Changes:
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/sending-attachments.html#technical-workflow)
    - [Here]sending-attachments.html#scenario-1b-ccda-document-attachments-submitted-prior-to-claim)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/OperationDefinition-submit-attachment.html)
24. **Applied:** Add PayerId to $submit-attachments ([FHIR-37331](https://jira.hl7.org/browse/FHIR-37331)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/OperationDefinition-submit-attachment.html)
25. **Applied:** Clarify that claim's attachment submitter is same as claim submitter ([FHIR-37332](https://jira.hl7.org/browse/FHIR-37332)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/sending-attachments.html#data-elements-for-sending-attachments)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/requesting-attachments.html#identifying-the-payer-provider-and-patient)
29. **Applied:** Add "Request Attachments" content as Draft ([FHIR-37563](https://jira.hl7.org/browse/FHIR-37563)) See Changes:
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/background.html#attachments-workflow)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/solicited-unsolicited-attachments.html)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/sending-attachments.html)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/requesting-attachments.html)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/burden-reduction.html)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/ValueSet-cdex-claim-use.html)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/OperationDefinition-submit-attachment.html)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/StructureDefinition-cdex-patient-demographics.html)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/StructureDefinition-cdex-task-attachment-request.html)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/Task-cdex-task-example19.html)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/Task-cdex-task-example20.html)
30. **Applied:** Add CCDA example and Correct PDF example ([FHIR-37655](https://jira.hl7.org/browse/FHIR-37655)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#scenario-2)
31. **Applied:** Rewrite section on Discovery of FHIR IDs ([FHIR-37652] (https://jira.hl7.org/browse/FHIR-37652)) See Changes:  
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#discovery-of-providers-payer-and-patient-ids)
    - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/direct-query.html#discovery-of-patient-fhir-ids) 
32. **Applied:** Document how implementers locate the proper identifier ([FHIR-37651](https://jira.hl7.org/browse/FHIR-37651)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/OperationDefinition-submit-attachment.html)
33. **Applied:** Clarify how to fetch data if can not perform a direct query. ([FHIR-37649](https://jira.hl7.org/browse/FHIR-37649)) See Changes [Here](http://hl7.org/fhir/us/davinci-cdex/STU1.1/task-based-approach.html#fetching-the-data)

---

### Version = 1.1.0-ballot
- Publication Date: 2022-03-25
- Based on FHIR version : 4.0.1

#### Changes:
 Da Vinci CDEX 2022 May Ballot. This ballot is restricted to the *Draft content* in the STU 1.0 version of CDex.  The draft content includes handling of Attachments and Digital Signatures.

---

### Version = 1.0.0
- Publication Date: 2022-03-25
- URL: <https://hl7.org/fhir/us/davinci-cdex/STU1/>
- Based on FHIR version : 4.0.1


#### Changes:
 This STU1 version of Da Vinci Clinical Data Exchange (CDex) Implementation Guide is the first published version of this guide and is the result of the June 2019 and January 2021 HL7 balloting process. The resulting resolution of the community comments and edits to the guide has been agreed to and voted on by the members of the sponsoring HL7 International Patient Care Work Group.

January 2021 Ballot comments and links to the updated content are below::

**Status: Summary (Jira Issue) Link to Change**

1. **Applied**: CDex documents require signature, but do not explain how used ([FHIR-26855](https://jira.hl7.org/browse/FHIR-26855)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/signatures.html)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/direct-query.html#signatures)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html#signatures
)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/attachments.html#signatures)
2. **Applied**: Add reference to C-CDA on FHIR ([FHIR-28158](https://jira.hl7.org/browse/FHIR-28158)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html#home)
3. **Applied**: Provide another example of a use case not covered by another Da Vinci IG ([FHIR-30146](https://jira.hl7.org/browse/FHIR-30146)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html##where-does-cdex-fit-in-the-da-vinci-project)
4. **Applied**: Fix link and expectations to CapabilityStatements ([FHIR-30147](https://jira.hl7.org/browse/FHIR-30147)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/CapabilityStatement-data-source-server.html#resource-details)
5. **Applied**: Failed task or task without result? ([FHIR-30148](https://jira.hl7.org/browse/FHIR-30148)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/CapabilityStatement-data-source-server.html#task)
6. **Applied**: add item to list of benefits ([FHIR-30440](https://jira.hl7.org/browse/FHIR-30440)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html#home)
7. **Applied**: Update section on What Payers Do with Clinical Information ([FHIR-30442](https://jira.hl7.org/browse/FHIR-30442)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#what-do-payers-do-with-clinical-information)
8. **Applied**: Update text in sequence diagrams ([FHIR-30445](https://jira.hl7.org/browse/FHIR-30445)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#steps)
9. **Applied**: Update Scenarios to include to support claim submission - Attachments. ([FHIR-30446](https://jira.hl7.org/browse/FHIR-30446)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#example-scenarios)
10. **Applied**: Update definition of clinical data and added guidance on data provenance([FHIR-30489](https://jira.hl7.org/browse/FHIR-30489)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/direct-query.html)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html#provenance)
11. **Applied**: Referennce clinical safety section in HREX ([FHIR-30490](https://jira.hl7.org/browse/FHIR-30490)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/security.html#da-vinci-hrex-security-and-privacy-requirements)
12. **Applied**: Delete use of word "complete" ([FHIR-30494](https://jira.hl7.org/browse/FHIR-30494)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#what-do-payers-do-with-clinical-information)
13. **Applied**: Explicitly reference the Da Vinci Guiding Principles in new Privacy and Security section. ([FHIR-30498](https://jira.hl7.org/browse/FHIR-30498)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/security.html)
14. **Applied**: Update Figure 1 ([FHIR-30500](https://jira.hl7.org/browse/FHIR-30500)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#where-does-cdex-fit-in-the-da-vinci-project)
15. **Applied**: Typo. ([FHIR-30812](https://jira.hl7.org/browse/FHIR-30812)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html#home)
16. **Applied**: Remove word complete. ([FHIR-30813](https://jira.hl7.org/browse/FHIR-30813)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#example-scenarios)
17. **Applied**: Corrects and clarifies direct provider to provider scenario. ([FHIR-30814](https://jira.hl7.org/browse/FHIR-30814)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#example-scenarios)
18. **Applied**: Updates to Provider to Provider use case([FHIR-30815](https://jira.hl7.org/browse/FHIR-30815)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/specification.html)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#provider-to-provider-data-exchange)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/exchanging-clinical-data.html)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#provider-to-provider)
19. **Applied**: Please clarify whether any human involvement is required, and an example, as well as define the term fulfillment as it relates to attestation. ([FHIR-30816](https://jira.hl7.org/browse/FHIR-30816)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/signatures.html)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/direct-query.html#signatures)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html#signatures
)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/attachments.html#signatures)
20. **Applied**: Rephrase. ([FHIR-30817](https://jira.hl7.org/browse/FHIR-30817)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/direct-query.html)
21. **Applied**: Clarify how subscripition mitigates risks ([FHIR-30819](https://jira.hl7.org/browse/FHIR-30819)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
22. **Applied**: Add section on termination of access to request([FHIR-30820](https://jira.hl7.org/browse/FHIR-30820)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html#how-long-is-the-data-availablehow-long-is-the-data-available)
23. **Applied**: Update how a clients set of requests is terminated([FHIR-30821](https://jira.hl7.org/browse/FHIR-30821)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html#fetching-the-datafetching-the-data)
24. **Applied**: Formalize the current scenarios ([FHIR-30826](https://jira.hl7.org/browse/FHIR-30826)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html)
25. **Applied**: replace /Patient/$everything with /Group/$export in the bulk example ([FHIR-30827](https://jira.hl7.org/browse/FHIR-30827)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/exchanging-clinical-data.html)
26. **Applied**: Remove empty pages ([FHIR-30828](https://jira.hl7.org/browse/FHIR-30828))
27. **Applied**: Clarified formal authorization use case ([FHIR-30829](https://jira.hl7.org/browse/FHIR-30829)) See Changes:
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
28. **Applied**: Data Consumer Server SHOULD support Claim. ([FHIR-30830](https://jira.hl7.org/browse/FHIR-30830)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/CapabilityStatement-data-source-server.html#claim)
29. **Applied**: Modify CapabilityStatement Rest summary table ([FHIR-30831](https://jira.hl7.org/browse/FHIR-30831)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/CapabilityStatement-data-consumer-server.html#resource--details)
30. **Applied**: Add hyperlinks. ([FHIR-30834](https://jira.hl7.org/browse/FHIR-30834)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/specification.html)
31. **Applied**: Add benefit of transition towards direct queries to Task benefits. ([FHIR-30835](https://jira.hl7.org/browse/FHIR-30835)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html
32. **Appied**: Update section on Authoization requirements ([FHIR-30836](https://jira.hl7.org/browse/FHIR-30836)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html
33. **Applied**: Typo ([FHIR-30840](https://jira.hl7.org/browse/FHIR-30840)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html#home)
34. **Applied**: Typo ([FHIR-30841](https://jira.hl7.org/browse/FHIR-30841)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html#home)
35. **Applied**: Typo ([FHIR-30842](https://jira.hl7.org/browse/FHIR-30842)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html#home)
36. **Applied**: Updated anticipated benefits of standard ([FHIR-30843](https://jira.hl7.org/browse/FHIR-30843)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html#home)
37. **Applied**: Typo ([FHIR-30844](https://jira.hl7.org/browse/FHIR-30844)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#what-do-payers-do-with-clinical-information)
38. **Applied**: Correct Grammar ([FHIR-30845](https://jira.hl7.org/browse/FHIR-30845)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#what-do-payers-do-with-clinical-information)
39. **Applied**: Correct Grammar ([FHIR-30846](https://jira.hl7.org/browse/FHIR-30846)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#what-do-payers-do-with-clinical-information)
40. **Applied**: Remove unsubstantiated claims. ([FHIR-30847](https://jira.hl7.org/browse/FHIR-30847)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#what-do-payers-do-with-clinical-information)
41. **Applied**: Remove HEDIS score claim. ([FHIR-30849](https://jira.hl7.org/browse/FHIR-30849)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#what-do-payers-do-with-clinical-information)
42. **Applied**: Relocate paragraph. ([FHIR-30850](https://jira.hl7.org/browse/FHIR-30850)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#actors-and-roles)
43. **Applied**: Remove paragraph and refer to HREX security page. ([FHIR-30851](https://jira.hl7.org/browse/FHIR-30851)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/security.html)
44. **Applied**: Typo ([FHIR-30852](https://jira.hl7.org/browse/FHIR-30852)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#where-does-cdex-fit-in-the-da-vinci-project)
45. **Applied**: Reword statement. ([FHIR-30853](https://jira.hl7.org/browse/FHIR-30853)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#where-does-cdex-fit-in-the-da-vinci-project)
46. **Applied**: Typo ([FHIR-30854](https://jira.hl7.org/browse/FHIR-30854)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#example-scenarios)
47. **Applied**: Typo ([FHIR-30855](https://jira.hl7.org/browse/FHIR-30855)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#example-scenarios)
48. **Applied**: Typo ([FHIR-30856](https://jira.hl7.org/browse/FHIR-30856)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#steps)
49. **Applied**: Typo ([FHIR-30857](https://jira.hl7.org/browse/FHIR-30857)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#steps)
50. **Applied**: Updated STU-note on when authorization needed? ([FHIR-30863](https://jira.hl7.org/browse/FHIR-30863)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html#formal-authorization
51. **Applied**: Remove "?" or correct the section name if it is in question ([FHIR-30864](https://jira.hl7.org/browse/FHIR-30864)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
52. **Applied**: Typo ([FHIR-30865](https://jira.hl7.org/browse/FHIR-30865)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
53. **Applied**: Updated Purpose of Use section for Direct Query. ([FHIR-30867](https://jira.hl7.org/browse/FHIR-30867)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/direct-query.html)
54. **Applied**: Updated Sensitivity and Confidentiality protection guidance. ([FHIR-30868](https://jira.hl7.org/browse/FHIR-30868)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/security.html#sensitive-and-confidential-data)
55. **Applied**: Updated Sensitivity and Confidentiality protection guidance. ([FHIR-30869](https://jira.hl7.org/browse/FHIR-30869)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/security.html#sensitive-and-confidential-data)
56. **Applied**: clarify when attribution is not present or non-repudiable ([FHIR-30870](https://jira.hl7.org/browse/FHIR-30870)) various changes
57. **Applied**: Fix sequential numbering of figures  ([FHIR-30935](https://jira.hl7.org/browse/FHIR-30935)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/specification.html)
58. **Applied**: correct last example bullet ([FHIR-31050](https://jira.hl7.org/browse/FHIR-31050)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#provider-to-provider-data-exchange)
59. **Applied**: Remove reference to HREX CommunicationRequest plus Task transaction ([FHIR-31516](https://jira.hl7.org/browse/FHIR-31516)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
60. **Applied**: Clarify human involvement in Task transaction ([FHIR-31886](https://jira.hl7.org/browse/FHIR-31886) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
61. **Applied**: Create privacy and security page ([FHIR-31885](https://jira.hl7.org/browse/FHIR-31885) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/security.html)
62. **Applied**: Clarify when HIEs are data sources ([FHIR-31884](https://jira.hl7.org/browse/FHIR-31884))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#actors-and-roles)
63. **Applied**: Add supplemental security guidance on audit ([FHIR-31888](https://jira.hl7.org/browse/FHIR-31888))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/security.html#general-considerations)
64. **Applied**: Add supplemental security guidance on scopes([FHIR-31887](https://jira.hl7.org/browse/FHIR-31887))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/security.html#general-considerations)
65. **Applied**: Clarify human involvement needed([FHIR-31886](https://jira.hl7.org/browse/FHIR-31886))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
66. **Applied**: Provide guidance on finding organization and provider identifiers([FHIR-32841](https://jira.hl7.org/browse/FHIR-32841))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
67. **Applied**: Update how to represent Purpose of Use and reason in Task Based Query ([FHIR-31996](https://jira.hl7.org/browse/FHIR-31996))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html)
68. **Applied**: Clarify the relationship between this guide and others([FHIR-32116](https://jira.hl7.org/browse/FHIR-32116))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#where-does-cdex-fit-in-the-da-vinci-project)
69. **Applied**: Added guidance on matching patients([FHIR-32840](https://jira.hl7.org/browse/FHIR-32840))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html#discovery-of-fhir-ids)
70. **Applied**: Update to the USCDI link ([FHIR-33265](https://jira.hl7.org/browse/FHIR-33265)
71. **Applied**: Add guidance how to provide some work queue tags([FHIR-31890](https://jira.hl7.org/browse/FHIR-31890) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/task-based-approach.html#work-queues)
72. **Applied**: Add push mechanism to support Attachments for Claims and Prior Auth([FHIR-33129](https://jira.hl7.org/browse/FHIR-33129) See Changes:
  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/background.html#attachments-workflow)
  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/attachments.html)
  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1/OperationDefinition-submit-attachment.html)
73. **Applied**: Add figure to clarify relationship between cdex and hrex([FHIR-34559](https://jira.hl7.org/browse/FHIR-34559) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1/index.html#about-this-guide)

---

### Version = 0.2.0
- Publication Date: 2020-10-23
- URL: <http://hl7.org/fhir/us/davinci-cdex/2021Jan>
- Based on FHIR version : 4.0.1


#### Changes:
 Based on the 2019-06-20 ballot feedback, this IG has been completely re-written for this ballot. The refactoring has been sufficiently large that it is not practical/useful to enumerate a list of changes between this ballot version (0.2.0) and the 2019-06-20 ballot version (0.1.0).

---

### Version = 0.1.0
- Publication Date: 2019-06-18
- URL: <http://hl7.org/fhir/us/davinci-cdex/2019Jun>
- Based on FHIR version : 4.0.0


#### Changes:
 June 2019 Ballot for Da Vinci CDex

---

{% include link-list.md %}


---

// File: input/pagecontent/direct-query.md

### Introduction

For Direct Query, the Data Consumer directly queries the Data Source for specific data using the standard FHIR RESTful search. Refer to the base FHIR specification and the Da Vinci HRex Implementation Guide for more information and guidance on this interaction. For accessing the set of health data classes and data elements defined by the [ONC United States Core Data for Interoperability (USCDI)], refer to the [US Core 3.1.1], [US Core 6.1.0], or [US Core 7.0.0] Implementation guides.


### Benefits

- "Out of the Box" FHIR transaction
- Widely implemented
- Simplest workflow
- Authorization/Authentication protocols established
- No human intervention is needed

### Sequence Diagram

The sequence diagram in Figure 6 below outlines a successful interaction between the Data Consumer and Data Source to query and retrieve the requested data using a direct query:

{% include img.html img="search-sequencediagram.svg" caption="Figure 6" %}




### Discovery of Patient FHIR IDs

In addition to using a patient business identifier such as an MRN or Member ID, the FHIR Patient.id is often a prerequisite to performing FHIR RESTful Direct Queries and other transactions described in this guide. However, the requester is not required to know the FHIR Patient.id before the exchange. With sufficient demographic information or identifiers, any of the following FHIR transactions can be used to discover the FHIR Patient.id:

1. Call the patient [`$match`] operation to ask an MPI to match a patient.*
   - CDex Data Source servers **SHOULD** support the patient match operation and declare it in their CapabilityStatement.

2. Search the Patient using a Direct Query.
   - For example:
   
      `Get /Patient?identifier=[member_id]&birthdate=[date]&name=[name]&gender=[gender]`

   - CDex Data Source servers **SHALL** support resolving logical identifiers for the Patient resource.
    
3. Use the [Task Based Approach] to request the Patient resource.

<div class="bg-info" markdown="1">
*The [Interoperable Digital Identity and Patient Matching] guide extends the patient [`$match`] operation for cross-organizational use by highlighting best practices in matching attributes and their verification before responding to a patient match request or interpreting match results. It also serves as a set of best practices for patient matching in similar FHIR transactions like Direct Query or Task based approach. Implementers are encouraged to review the following sections:

- [Patient Matching]
- [Guidance on Identity Assurance]
</div><!-- bg-info"-->



### Direct Query Transaction Scenarios

The following example transactions show scenarios of using direct query to get clinical data from a Data Source.

#### Scenario 1

Payer A Seeks Insured Person/Patient B's Active Conditions from Provider C to support a claims audit.

**Preconditions and Assumptions:**

- Payer A is authorized and has the appropriate scopes to access the health records of Patient B from Provider C using FHIR RESTful queries
- Payer A knows the FHIR id of the Patient resource for Patient B
- Payer A knows the appropriate codes for searching for active conditions

Following the guidance in US Core, a search for all active conditions uses the combination of the patient and clinical-status search parameters:

`GET [base]/Condition?patient=[FHIR id]&clinical-status=active,recurrance,remission`

{% include examplebutton_default.html example="direct-query1-scenario" b_title = "Click Here To See Example Direct Query for Patient's Active Conditions" %}

---

#### Scenario 2

Payer A Seeks Insured Person/Patient B's glycated hemoglobin (HbA1c) test results after 2020-01-01 from Provider C.

**Preconditions and Assumptions:**

- Payer A is authorized and has the appropriate scopes to access the health records of Patient B from Provider C using FHIR RESTful Queries
- Payer A knows the FHIR id of the Patient resource for Patient B
- Payer A knows the appropriate LOINC codes for searching for HbA1c test results (e.g., 4548-5 *Hemoglobin A1c/Hemoglobin.total in Blood*)

Following the guidance in US Core searches for all HbA1c test results by a date range using the combination of the patient and code and date search parameters:

`GET [base]/Observation?patient=[FHIR id]&code=[code]&date=gt[date]`

{% include examplebutton_default.html example="direct-query2-scenario" b_title = "Click Here To See Example Direct Query for Patient's HbA1c Results after 2020-01-01" %}

---

#### Scenario 3

Payer A Seeks Insured Person/Patient B's latest Progress notes from Provider C to support a claim submission.

**Preconditions and Assumptions:**

- Payer A is authorized and has the appropriate scopes to access the health records of Patient B from Provider C using FHIR RESTful Queries
- Payer A knows the FHIR id of the Patient resource for Patient B
- Payer A knows the appropriate LOINC codes for searching for Progress note CCDA documents (11506-3 *History & Physical Note*)
- Provider C supports the standard FHIR search parameters, `_search` and `_count` (if this is not the case, then the Payer can search using the date parameter and select the most recent Progress notes from the query results.)

Getting the latest Progress note is typically a two-step process:

1. Query DocumentReference, which references the actual notes file
2. Fetch the notes file

Following the US Core Clinical Notes Guidance section, the Payer searches for the Progress note C-CDA documents using the combination of the patient and type search parameters. 
In addition, the combination of `_sort` and `_count` parameters limits the response to only the most recent data. For example, with `_sort=-period` (sort by the `date` parameter in descending order) and `_count=1`, the query returns the most current matching resource.

`GET [base]/DocumentReference?patient=[FHIR id]&type=[type-code]&_sort=-period&_count=1`

The `DocumentReference.content.attachment.url` element references the actual CCDA document, and the Payer fetches it using a RESTful GET.

`GET [base]/[url]`

{% include examplebutton_default.html example="direct-query3-scenario" b_title = "Click Here To See Example Direct Query for Patient's Latest Progress note" %}

### Provenance

To the extent that the Data Source keeps a record of the provenance of the data, the FHIR Provenance Resource can be requested as documented on US Core's [Basic Provenance] page. When returning provenance, they should use the [HRex Provenance Profile]. The following example illustrates this transaction.

#### Example of Direct Query Response Including Provenance

This example is the same as Scenario 1 above, except it includes the corresponding Provenance records.

`GET [base]/Condition?patient=[FHIR id]&clinical-status=active,recurrance,remission&_revinclude=Provenance:target`

{% include examplebutton_default.html example="direct-query1p-scenario" b_title = "Click Here To See Example Direct Query for Patient's Active Conditions and Provenance records" %}

---

### Signatures

{% include signature-support.md %}

Some data consumers may require that the data they receive be signed. When signatures are required, the following general rules apply:

{% include system-signature.md %}
- The `Bundle.signature` element on the FHIR search set Bundle is used to exchange the signature.

{% include signature-disclaimer.md %}
#### The Data Consumer/Requester Requirements

- The Data Consumer/Requester *pre-negotiates* with the Data Source/Responder whether electronic or digital signatures are required. If signatures are required, *all* search query response data will be signed by the sending organization.
- The Data Consumer/Requester follows the documentation on the [Signatures] page for validating signatures.
  - If the signatures fail verification, the Data Consumer/Requester notifies the Data Source that the signature is invalid or absent. Currently, there is no standard way to communicate this, and it needs to be done "out of band".

#### Data Source/Responder Requirements

- If signatures are required, the Data Source/Responder returns a *signed FHIR search set Bundle* using the `Bundle.signature` element for the signature signed by the organization responding to the query.
- The Data Source/Responder follows the documentation on the [Signatures] page for producing signatures.
- As discussed in the [What is Signed] section, a signed search bundle could also have individually signed entries. Therefore, if the Data Consumer incorrectly assumed there would be a signature (wet, electronic, or digital) on an individual returned object within the search set Bundle (e.g., CCDA, PDF, Image, CDA on FHIR ), they can re-request it using a Task-based request and specify that it be signed (see [Signatures for Task Based Requests]).

<div markdown="1" class="bg-warning" id="read-warning">

When signatures are required, the Data Consumer must use a [FHIR RESTful search] instead of [FHIR RESTful read]. There is no CDex support for signatures on a FHIR RESTful read because it fetches a single instance of a resource instead of a Bundle. If the Data Consumer attempts to fetch a resource with a read and a signature is required, the Data Source/Responder **SHALL** return an HTTP `400 Bad Request` *and* an OperationOutcome describing the business rule error. The following HTTP response and OperationOutcome illustrate this.

 ~~~
 HTTP/1.1 400 Bad Request
 [other headers]
 {
 "resourceType": "OperationOutcome",
 "id": "cdex-signed-read-response",
 "issue": [
 {
 "severity": "error",
 "code": "business-rule",
 "details": {
 "text": "signed FHIR RESTful read response is not supported."
 },
 "diagnostics": "Resubmit the request as a FHIR RESTful search'"
 }
 ]
 }
 ~~~

</div><!-- bg-warning -->

#### Example of *Signed* Direct Query Response

This example is the same as Scenario 1 above, except it includes a digital signature. See the [Signatures] page for a detailed explanation of how the signature was created and verified.

**Preconditions and Assumptions:**
- In addition to the Scenario 1 assumptions above, Payer A pre-negotiated with Provider B that direct query responses require digital signatures.

`GET [base]/Condition?patient=[FHIR id]&clinical-status=active,recurrance,remission`

{% include examplebutton_default.html example="direct-query1s-scenario" b_title = "Click Here To See Example Signed Direct Query Response" %}

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

### Example Flow Chart Diagrams:

These example flow chart diagrams were created to assist the TestScript and Reference Implementation development team and are provided here to assist developers in implementing CDEX transactions. They are examples only, and actual workflows may differ from them. 


 - [Example Flow Chart Diagrams (compressed folder)](flowcharts.zip)
 - [Text based source](techflow_examples.md){:.download="true"}: These textual representations of the diagrams  ( the text between the \'\'\') can be viewed and edited  using *flowchart.js*. flowchart.js is a flowchart DSL and SVG renderer that runs in the browser and terminal. For more information, see <https://flowchart.js.org/>. Alternatively, this text can be viewed directly at <https://hackmd.io/>.


### Implementation Guide Details

The following link to the [ImplementationGuide] resource defines the technical details of this publication, including dependencies and  publishing parameters:

- [CDex ImplementationGuide Resource]

### Other Downloads

The following links allow you to download various parts of other referenced implementation guides for local use:

- The full [FHIR R4 core] specifications and other [FHIR core downloads]
- A [validator] that can be used to check FHIR resource instance validity and [instructions on how to use it]

{% include link-list.md %}

---

// File: input/pagecontent/ImplementationGuide-hl7.fhir.us.davinci-cdex.md

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


<!-- {% raw %} {%include new-content-note.md %} {% endraw %} -->

### Introduction

This IG provides detailed guidance that helps implementers use FHIR-based interactions to support specific clinical data exchanges between providers and payers (or other providers). This guide documents the **Direct Query**, **Task Based**, and **Attachments** transaction approaches for requesting and sending information. Key scenarios this IG can support include:

 - Requesting and Sending attachments for claims and prior authorization
 - Requesting documentation to support payer operations such as claims audits
 - Exchanging clinical data between referring providers

In the context of this guide, "clinical data" means *any* information a provider holds in a patient's health record. The data exchange format is not limited to FHIR resources but includes C-CDA documents, PDFs, text files, and other formats. Implementers can request and receive clinical records of care such as CCD Documents or [C-CDA on FHIR Documents], clinical data sets represented by a FHIR [Bundle], FHIR [QuestionnaireResponse], and other types of FHIR resources. 

By using the FHIR standard and implementing this guide, payers can be explicit about the data they are requesting instead of general requests, which avoids sending more information than necessary. As a result, the anticipated benefit of using FHIR is a more efficient and effective exchange of health record information in several areas, such as claims management, care coordination, risk adjustment, and quality reporting.  


This IG provides several *generic* examples to illustrate the Direct Query and Task-Based approaches to exchanging clinical data. It also documents and provides examples for Requesting and Sending Attachments for claims and prior authorization. We also plan to create *Clinical Data Exchange - Supplemental Guides*, which will document and provide examples for other specific use cases.
{:.bg-info}


### About This Guide

The [Da Vinci] initiative supports this implementation guide. Da Vinci is a private effort to accelerate the adoption of Health Level Seven International Fast Healthcare Interoperability Resources (HL7® FHIR®) as the standard to support and integrate value-based care (VBC) data exchange across communities. This guide and implementers of it **SHALL** adhere to the [HL7 Da Vinci Guiding Principles] for exchanging patient health information. 


As illustrated in Figure 1 below, this version of CDex is based on FHIR R4, and much of its content is dependent upon the [[Da Vinci Health Record Exchange (HRex)], [US Core 3.1.1] (FHIR R4), [US Core 6.1.0] (FHIR R4), and , [US Core 7.0.0] (FHIR R4)implementation guides.
 For general [Background on FHIR], [Conformance Expectations], and [Security and Privacy] considerations, refer to the corresponding sections in HRex. US Core 3.1 meets regulatory requirements mandating support for [ONC United States Core Data for Interoperability V1 (USCDI V1)], US Core 6.1.0 meets regulatory requirements mandating support for [ONC United States Core Data for Interoperability V3 (USCDI V3)]], and US Core 7.0.0 meets regulatory requirements mandating support for [ONC United States Core Data for Interoperability V4 (USCDI V4)]].
 For Direct Query and Task-Based queries, US Core and HRex define the underlying content, and CDex provides additional context, definitions, and constraints. CDex provides more focused use cases by constraining profiles and extending functionality to cover gaps. For example, CDex defines all the content for Attachments.


{% include img.html img="profile-pyramid.svg" caption= "Figure 1: Relationship of CDex to Other FHIR Standards" %}

 The sponsoring HL7 [Payer/Provider Information Exchange] workgroup manages changes to this specification. Changes are incorporated as part of the standard HL7 balloting process  and version updates. You can suggest changes to this specification by clicking the [Propose a Change] link at the bottom of any page to create a *change request tracker*.

### How To Read This Guide

This guide uses the following terms to document the CDex transactions:

Data Consumer
: The term "Data Consumer" means both payer and provider systems when they request data.

Data Source
: The term "Data Source", refers to an EHR, HIM, Practice Management System, Population Health, Registration, or other HIT system that stores the data and responds to data requests.

Payer
: "Payer" refers to the payer system (or an intermediary on behalf of a payer) and is used when they are requesting data.

Provider
: "Provider" refers to the provider system and can be the Data Source or the Data Consumer.

Attachments
: This guide uses the terms "attachments" and "additional information" to mean additional information needed for claims and prior authorization.  In the context of requesting and sending attachments using attachment codes, attachments are limited to the documents defined by the [LOINC Document Ontology] and [X12] attachment codes.  When requesting and sending attachments using [Questionnaire], attachments mean *any* additional information.

This guide is divided into several pages listed at the top of each page in the menu bar.

- [IG Home]\: The home page introduces the Da Vinci Clinical Data Exchange Project and Implementation Guide.
- [Background]\: This page provides background for the Da Vinci Clinical Data Exchange Project and summarizes its scope.
- [Direct Query]\: Documents how to exchange clinical data using the standard FHIR RESTful search.
- [Task Based Approach]\: Documents exchanging clinical data using the FHIR Task resource. This approach supports asynchronous workflows and may require human involvement.
- [Attachments]\: Documents exchanging attachments for claims or prior authorization using FHIR.
    - [Solicited and Unsolicited Attachments]\: Documents the differences and similarities between solicited and unsolicited attachments workflows and the CDex transactions for each.
    - [Sending Attachments]\: This page documents a FHIR-based approach for sending attachments for claims or prior authorization directly to a Payer.
    - [Requesting Attachments Using Attachment Codes]\: This page documents a FHIR-based approach for requesting attachments using LOINC attachment codes.
    - [Requesting Attachments Using Questionnaires]\: This page documents the CDex Attachments transaction for requesting additional data for claims or prior authorization from a Provider using 
FHIR Questionnaire and QuestionnaireResponse.
    - [Using CDex Attachments with DaVinci PAS]\: This page summarizes the similarities and differences between CDEX and the [Da Vinci Prior Authorization Support (PAS)] guide.
    - [Conforming to CDex Attachments]\: Summary of interactions for each role and the conformance resource and terminology that makes them unique. 
- [Signatures]\: This page provides specific guidance and rules to exchange *signed* data using FHIR and non-FHIR signatures.
- [Security and Privacy]\: This page provides general expectations to ensure the security, privacy, and safety of Da Vinci CDex exchanges.
- [FHIR Artifacts]\: This page lists all the FHIR resources (for example, FHIR Profiles, Operations, Valuesets)  that are defined and used within this guide.
- Support\: This page includes links to the FHIR core specification and the US Core spec, as well as a [Downloads] page of IG tools and artifacts for Da Vinci implementers.<!-- new-content -->
- [Change Log]\: This page documents the changes across the versions of CDex.

---

### Credits

*This Implementation Guide was made possible by the contributions of the [Da Vinci] Project member organizations and project management staff, the [Payer/Provider Information Exchange] Work Group, and the [Patient Care] Work Group.*

*Author:*

- *Eric Haas, Health eData Inc*

*CDex Core Team:*

- *Lloyd Mckenzie, Accenture/Dogwood Health Consulting*
- *Robert Dieterle, EnableCare*
- *Christol Green, Elevance Health*
- *Durwin Day, - Health Care Service Corporation*

*Project Management and Coordination:*
- *Viet Nguyen, Stratametrics, LLC*
- *Vanessa Candelora, Point of Care Partners*
- *Crystal Kallem, Point of Care Partners*
- *Yan Heras, Optimum eHealth LLC*

*Reference Implementation and TestScripts:*
- *Karell Ruiz, HealthLX*
- *Joel Walker, HealthLX*
- *David Riddle, HealthLX*
- *Carie Hammond, Aegis*

*Special thanks go to the numerous individuals who have participated in conference calls, ballots, and reviews of this IG:*

- *Celine Lefebvre, AMA*
- *Andrea Preisler, AHA*
- *Isaac Vetter, Epic*
- *Brett Stringham, Optum*
- *Chris Johnson, Blue Cross and Blue Shield of Alabama*
- *Diederik Muylwyk, Smile CDR*
- *Nick Radov, Optum*
- *Linda Michaelson, Optum*
- *Peter Gunter, VA*
- *Scott Fradkin, Flexion*
- *Andrew Barbieri, Epic*
- *Hans Buitendijk, Oracle*
- *Kyle Johnsen, Epic*
- *Liora Alschuler, Lantana*
- *Mitra Rocca, FDA*
- *Rob McClure, MD Partners, Inc.*
- *Ron G. Parker, Canada Health Infoway*
- *Spencer Utley, Epic*
- *Scott Rossignol, eHealth Exchange*

---

<br />

{% include link-list.md %}


---

// File: input/pagecontent/requesting-attachments-code.md

This page documents a FHIR-based approach for requesting attachments for claims and prior authorization from a Provider.\*  This transaction is used for *solicited* attachments and uses the combination of a Task-based [CDex Task Attachment Request Profile] to request attachments and the [`$submit-attachment`] operation to submit the attachments to the Payer as documented in the [Sending Attachments] page. It is intended to be compatible with the X12n 277 Request for Additional Information (RFAI) and 278 response transactions. For more information on X12 defined transactions, see [X12 Transaction Sets]. 

\* {% include see-conf.md %}

### Requesting Attachments Background 

In the current state of healthcare data exchange, the Payer requests additional documentation to support a claim or prior authorization using an X12 transaction, fax, portal, or other capabilities. The Provider can submit these *solicited* attachments using Non-FHIR methods or can use the [`$submit-attachment`] operation to "push" the attachments directly to the Payer, as documented in the [Sending Attachments] page:

{% include img.html img="request-attachments-nonfhir-sequencediagram.svg" caption=" Figure 14: Request Attachment Sequence Diagram For Non-FHIR Requests" %}




### Requesting Attachments Using FHIR
 
{% include task-based-sections-to-review.md %}

### Requesting Attachments Using Attachment Codes


The CDex Task Attachment Request Profile defines a specific `Task.code` that communicates that the Payer is requesting attachments for a claim or prior authorization using:
- attachment codes or 
- additional data using FHIR Questionnaires.

Systems using CDex Attachments [*must support*] requesting attachments using attachment codes. ({% include see-conf.md %}) The rest of this page documents *solicited* attachment transactions using attachment codes. Using FHIR Questionnaires to request additional data is optional and covered on the [Requesting Attachments Using Questionnaires] page.

Requesting attachments using attachment codes defined by the LOINC Document Ontology or, for prior authorization, [X12] PWK01 Report Type Codes is a HIPAA-based request model. The Payer communicates the missing information for a claim or prior authorization with these codes, which typically represent data in document form (e.g., a PDF or CCDA). The sequence diagram in Figure 15 below summarizes the interaction between the Payer and Provider to request and receive attachments using the combination of the [CDex Task Attachment Request Profile] using attachment codes and the [`$submit-attachment`] operation.

{% include img.html img="request-attachments-cdex-sequencediagram.svg" caption="Figure 15" %}



### Data Elements for Requesting Attachments

When requesting attachments, the following data elements are needed to associate an attachment to a claim or prior authorization. They are mapped to the [CDex Task Attachment Request Profile] elements and the corresponding x12n 277 Request for Additional Information (RFAI) and x12n 278 response elements in the following table. {% include X12_IP.md %}  

{% include requests-277_278.md %}

### *Step-by-Step* Solicited Attachment Transaction

In the following sections, A detailed look at an example *Solicited* attachment transaction illustrates how the Payer uses the CDex Task Attachment Request Profile to communicate the required data elements to the Provider and how they use the $submit-attachment to communicate the response back to the Payer.
{: .bg-info}

In this scenario, a Provider creates a claim and sends it to the Payer. The Payer reviews the claim and responds with a request for supporting documentation/attachments using the  CDex Attachment Request Profile. The flow diagram for this transaction is shown in Figure 16 below:

{% include img.html img="cdex-request-attach-claim-flow.svg" caption=" Figure 16: CDex Request Attachments for Claims Using Attachments Codes" %}

 In addition to the information needed to submit and associate the attachments to the claim successfully, the Payer supplies the following information to complete the adjudication of the claim:

- The attachment code(s) for the requested documents.  These codes are [LOINC attachment codes] or, for prior authorization, [X12] PWK01 Report Type Codes 
- What line numbers on the claim the requested attachment (s) are for

After receiving the attachment request, the Provider collects the documentation and returns it using the [`$submit-attachment`] operation, posting it to the endpoint supplied in the request. The table below summarizes the mapping between the CDex Request Attachment Profile elements and the [`$submit-attachment`] parameters: 


{% include attachments_to_requests.md %}


#### Payer Requests Attachments for Claim

The Payer POSTs the CDex Task Attachment Request Profile to the Provider endpoint.

~~~
POST [base]/Task
~~~

**Request Body**

##### Task Resource

<!-- The request body's various elements are annotated to show how the Payer communicates each data element to the Provider. -->

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=0 count=2 linenumber=true rel=true %}
~~~

##### Verifying Patient Identity

The following data elements are used to verify the patient's identity. (This guide does not cover how the Provider system verifies the patient's identity.) They are communicated in a  *contained* Patient resource using the [CDex Patient Demographics Profile]. The contained Patient is referenced in `Task.for.reference` using a fixed reference value of "#patient".

|Data|HRex Patient Demographics Profile.|
|---|---|
|Member ID or Patient Account No.*|`Patient.identifier`|
|Patient Name|`Patient.name`|
|Patient DOB (optional)|`Patient.birthDate`|
{: .grid}

\* Patient Account Number is a Provider assigned identifier 


~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=2 count=22 linenumber=true rel=true %}
~~~

##### Supplying the Provider ID(s)

The Payer communicates the provider ID as a unique organization/location identifier (e.g., Type 2 NPI) or a unique provider identifier (e.g., Type 1 NPI) or both in a *contained* PractitionerRole resource using the [CDex PractitionerRole Profile]. The contained PractitionerRole is referenced in `Task.owner.reference` using a fixed reference value of "#practitionerrole".

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=24 count=16 linenumber=true rel=true %}
~~~

##### Supplying the Tracking ID

The mandatory `Task.identifier` *tracking-id* slice element represents the Payer tracking identifier. The tracking-id (the "re-association tracking control number") is an identifier that ties the attachments back to the claim or prior authorization. The Provider will echo it back to the Payer when submitting the attachments. 


~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=40 count=12 linenumber=true rel=true %}
~~~

##### Task *status* *intent* and *code* Elements

These required Task infrastructure elements:

- `Task.status`
- `Task.intent`
- `Task.code`

convey what the task is about, its status, and the intent of the request. The `Task.status` value of "request" is typical when POSTing the Task-based attachment request. The status will change as the Task moves through the workflow based on the [Task state machine]. `Task.intent` is fixed to "order".

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=52 count=2 linenumber=true rel=true %}
~~~

##### Task *code* Element

The `Task.code` communicates that the Payer is requesting attachments for a claim or prior authorization using a code or data request questionnaire. If the code is "attachment-request-code", as it is in this scenario, the provider system returns attachment(s) identified by the attachment code(s) in the "code" input parameter. If the code is "attachment-request-questionnaire", the provider system uses Documentation Templates and Rules (DTR) to complete the Questionnaire referenced in the "questionnaire" input parameter. The provider system uses the $submit-attachment operation to return the information to the endpoint provided in the `Task.input` "payer-url" parameter.

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=54 count=7 linenumber=true rel=true %}
~~~

##### Identifying the Payer, Provider, and Patient


The Payer directs the attachment request to the same Provider who submitted the claim or prior authorization. Business identifiers are used to identify the Patient, the Payer, and the Provider who submitted the claim. The Provider echoes them back to the Payer when submitting the attachments.

As discussed above, the Patient ID is in the contained Patient resource, referenced by the `Task.for` element, and the Provider ID is in the contained PractitionerRole resource referenced by the `Task.owner` element. The Provider ID can be a Practitioner identifier (i.e., a Type1 NPI), a Practitioner's Organization identifier (i.e., a Type2 NPI), or both.

(note the various Task dates in the request fragment below)


|Actor|CDex Request Attachment Task Profile Element|
|---|---|
|payer ID|`Task.requester.identifier`|
|provider ID|(contained)PractitionerRole.practitioner. identifier or PractitionerRole.Organization.identifier|
|patient member ID or Patient Account No|(contained)Patient.identifier|
{: .grid}

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=61 count=14 linenumber=true rel=true %}
~~~

##### Claim Information

The Task communicates whether the attachments are for a claim or prior authorization, and the Payer identifies the claim or prior authorization with its business identifier.

|Data|CDex Request Attachment Task Profile Element|
|---|---|
|Claim or Prior Authorization|`Task.reasonCode`|
|Claim or Prior Authorization ID|`Task.reasonReference.identifier`|
{: .grid}

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=75 count=14 linenumber=true rel=true %}
~~~

##### Attachment Due Date

The Payer communicates the due date for submitting the attachment in the `Task.restriction.period` element. Note that `Task.restriction.period.end` represents the time when the Provider should have submitted the attachments.

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=89 count=5 linenumber=true rel=true %}
~~~

##### Communicating What Attachments are Needed

The Payer supplies the attachment codes to communicate what attachments are needed. They may also provide the *line item numbers* to match the attachment to a line item in the claim or prior authorization. This information is represented in the `Task.input` "code" parameter. For example, the code snippet below shows a single request for line item 1 using a LOINC attachment code (for prior authorization, [X12] PWK01 Report Type Codes may also be used). When submitting the attachments, the Provider returns the codes and line items to the Payer.

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=94 count=20 linenumber=true rel=true %}
~~~

##### Communicating the Signature Requirements

This `Task.input` "signature-flag" may indicate that the Provider must sign the attachments. For more information about using signatures in CDex, see the [Signatures] and [Sending Attachments] pages.

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=114 count=9 linenumber=true rel=true %}
~~~



##### Supplying the $submit-attachment Operation Endpoint

The Payer supplies the URL endpoint in the `Task.input` "payer-url" parameter. The Provider System uses this endpoint for the [`$submit-attachment`] operation. Note that it is not necessarily a FHIR RESTful server endpoint.

<!-- If no url endpoint is supplied the attachments are provided either as references or contained Task resources and the requester needs to poll/subscribe to the Task to retrieve when done. -->

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=123 count=9 linenumber=true rel=true %}
~~~



##### Date of Service for the claim

This `Task.input` element represents the service date or the service's starting date for the claim or prior authorization. If the attachment is for a claim, it **SHALL** be present and precise to the day. It is optional if the attachment is for a prior authorization.  

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=132 count=9 linenumber=true rel=true %}
~~~


##### Purpose of Use for the Request

This optional `Task.input` element represents the request's purpose of use (POU). This example supports a request for a claim, "CLMATTCH". When requesting attachments for prior authorization, it would be "COVAUTH".

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example19.json' start=141 count=21 linenumber=true rel=true %}
~~~


#### Provider Submits Solicited Attachments

When the Task is completed, the Provider POSTs the [`$submit-attachment`] operation and its payload to the Payer's endpoint communicated in the `Task.input` "payer-url" parameter. The operation payload contains the requested attachments and echoes many data elements sent in the request. The table in the introduction to this section summarizes the mapping between the CDex Request Attachment Profile elements and the [`$submit-attachment`] parameters. The documentation below describes and demonstrates the [`$submit-attachment`] parameters.

|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|Payer URL|"payer-url"Task.input|(operation endpoint)|
{:.grid}

**Request**

~~~
POST [base]/$submit-attachment
~~~

**Request Body**

##### The Submit Attachment Operation Payload

The attachments and metadata needed to associate the attachment to the claim or prior authorization are in the [`$submit-attachment`] payload, a [Parameters] resource.

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example3.json' start=0 count=3 linenumber=true rel=true %}
~~~

##### Tracking ID and Indicating a Claim or Prior Authorization
The "TrackingId" parameter represents the identifier that ties the attachments to the claim or prior authorization. It is often referred to as the "re-association tracking control number". The operation must indicate whether the attachments are for claim or prior authorization. These data elements are taken from the CDex request as follows:

|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|TrackingID|Task.identifier|TrackingId|
|Use|Task.reasonCode|AttachTo|
{:.grid}

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example3.json' start=3 count=10 linenumber=true rel=true %}
~~~   

##### Identifying the Payer, Provider, Organization, and Patient

As documented above, The Payer uses business identifiers to identify itself, the Patient, the Provider (i.e., the practitioner), and the Organization (i.e., the provider organization) who submitted the claim or prior authorization. The Provider uses these same identifiers when submitting the attachments.

|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|Payer ID|Task.requester.identifier|PayerId|
|Organization ID|PractitionerRole.organization.identifier|OrganizationId|
|Provider ID|PractitionerRole.practitioner.identifier|ProviderId|
|Member ID|Patient.identifier|MemberId|
{:.grid}

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example3.json' start=13 count=28 linenumber=true rel=true %}
~~~ 


##### The Service Date

The service date parameter is taken from the "service-date" `Task.input` element in the CDex Attachment request.

|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|Date of Service|“service-date” Task.input|ServiceDate|
{:.grid}

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example3.json' start=41 count=4 linenumber=true rel=true %}
~~~ 


##### Supply the Requested Attachments for Each Line Item and Code

The requested attachments, the corresponding coded requests, and line item numbers are communicated as "Attachment" parameter parts. The attachment is communicated as a FHIR resource in the `Attachment.Content` parameter part, often a [DocumentReference] containing Base64 encoded FHIR and non-FHIR documents. The attachment code(s) in the `Task.input` "code" slice defines the document(s) that are to be returned via submit_attachment and are communicated in the `Attachment.Code`. Line item numbers associated with a requested item are sent in the `Attachment.LineItem` parameter part.

|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|line item(s)|“code”Task.input.extension|Attachment.LineItem|
|Attachment Code|“code”Task.input|Attachment.Code|
|Attachments|-|Attachment.Content
{:.grid}

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example3.json' start=45 count=65 linenumber=true rel=true %}
~~~



### Complete *Solicited* Attachment Transaction

The example below shows the complete *solicited* attachment transaction. A Payer uses the CDex Task Attachment Request Profile to request the attachment using an attachment code, and the Provider uses the [`$submit-attachment`] operation to submit the attachments to the Payer:

{% include examplebutton_default.html example="solicited-attachment-scenario-1.md" b_title = "Click Here To See FHIR Based Solicited Attachment Example" %}

### Signatures

Refer to the [Signatures section](sending-attachments.html#signatures) on the Sending Attachments page.

<br/><br/>

{% include link-list.md %}

---

// File: input/pagecontent/requesting-attachments-questionnaire.md



This page documents an *optional* solicited attachments transaction for requesting additional claims or prior authorization data from a Provider using FHIR [Questionnaire].\* The Payer uses the Task-based [CDex Task Attachment Request Profile] to request a Provider to complete one or more questionnaires. The Provider launches [Da Vinci DTR] to complete the questionnaires and, as documented in the [Sending Attachments] page, submits the completed questionnaires to the Payer using the [`$submit-attachment`] operation. In contrast to [Requesting Attachments Using Attachment Codes], a HIPAA-based request model using attachment codes, it supports using FHIR Questionnaire to define in more detail what data is missing. As a result, it avoids unnecessary documents. In addition, it leverages [Da Vinci DTR] functionality to fill out the FHIR Questionnaire, reducing the time spent reviewing documentation requirements.

\* {% include see-conf.md %}



### Requesting Attachments Using FHIR

{% include task-based-sections-to-review.md %}

### Requesting Attachments Using FHIR Questionnaires



 In contrast to [Requesting Attachments Using Attachment Codes], when a Payer references one or more FHIR Questionnaires  as input parameters, the Task represents a request for the Provider to complete the questionnaires. The [CDex Task Attachment Request Profile] defines a specific `Task.code` that directs the Provider to launch a [Da Vinci - Documentation Templates and Rules (DTR)] application to use the Payer provided Questionnaires and results from any CQL execution to generate and complete a  QuestionnaireResponse. Figure 17 below summarizes the steps for requesting and completing a questionnaire using CDex Attachments and DTR, and the sequence diagram in the following section illustrates these transactions in more detail:

{% include img.html img="attachments-task-Q-summary.svg" caption = "Figure 17" %}

**Step 1:** The Payer POSTs a Task to the Provider. The Task is a request to complete a questionnaire.

**Step 2:** If the `Task.code` is "attachment-request-questionnaire", the Provider launches DTR and shares the Task as a launch parameter (i.e., DTR has access to read and update the Task and access to other resources to complete the QuestionnaireResponse in Step 3)

**Step 3:** DTR fetches the Task, which contains the link to the Questionnaire. Then, it fetches the Questionnaire (and any CQL rules defined within it) and completes the QuestionnaireResponse. Refer to the [Da Vinci DTR] Implementation Guide for more information on how it generates a QuestionnaireResponse.

**Step 4:** DTR creates and updates the QuestionnaireResponse directly to the Data Source's FHIR Server and updates `Task.output` to reference the QuestionnaireResponse it created..

**Step 5:**  When the QuestionnaireResponse is completed, the Provider "pushes"  the QuestionnaireResponse directly to the Payer-defined endpoint using the $submit-attachments operation. See the [Sending Attachments] page for Implementation Guide for more information on this transaction.

**Step 6:** The Provider updates the Task to "completed" when complete - e.g., when the data has been submitted or the information gathered.


#### Using [Da Vinci DTR] to Complete the Questionnaire

The sequence diagram in Figure 18 below depicts the FHIR RESTful transactions and processes involved between the Payer, Provider, and DTR application application needed to request, fill, and return one or more questionnaires using using CDex Attachments.  It references a "DTR Launch". If the DTR is a native EHR application, the launch is implementation specific. If DTR is a SMART on FHIR Application, the next ([DTR SMART App Launch]) section documents the launch sequence and parameters.

{% include img.html img="attachments-task-Q-sequencediagram.svg" caption = "Figure 18" %}

##### DTR SMART App Launch

The sequence diagram in Figure 19 below depicts the transactions between the DTR Client, FHIR Server, and DTR application needed to launch a DTR SMART App.

Preconditions and Assumptions:
- The DTR Client and FHIR Server are Provider (Data Source) roles.
- If the DTR is a native EHR application, the launch is implementation specific and this diagram does not apply.
- A User kicks off [Smart Version 2.0.0 EHR launch flow].

<!-- {% raw %} {% include img.html img= "SMART App Launch for DTR from CDEX.png" caption=" Figure 19: My Notes on SMART App Launch for DTR from CDEX" %} {% endraw %} -->

{% include img.html img="dtr-launch.svg" caption="Figure 19" %}

**Step 1 (Optional):** The DTR App registers with DTR Client (may be out of band)

**Step 2,3:** If the `Task.code` is "attachment-request-questionnaire" (or "data-request-questionnaire" for the Task Based Approach), a User initiates [Smart Version 2.0.0 EHR launch flow] to launch DTR (for example, clicks a button to launch DTR) and DTR Client sends a launch request to the DTR App

**Step 4:** The DTR App retrieves the `.well-known/smart-configuration` from FHIR Server.

**Step 5:** The DTR App requests an authorization code with the following scopes:
  - "launch"
  - "launch/patient"
  - "launch/task"
  - "patient/*.rs"
  - "patient/Task.u"
  - "patient/QuestionnaireResponse.cu"
  
**Step 6,7:** Assuming the authorization is granted, The DTR app requests an access token

**Step 8:** The DTR App obtains an access token and the launch contexts in the "fhirContext" array, including a local reference to the Task in step 2.

**Step 9:** The DTR App uses the Task reference obtained in step 8 to fetch the Task, Questionnaire(s), and other resources it needs to fill out a QuestionnaireResponse(s). See the [previous section](#using-da-vinci-dtr-to-complete-the-questionnaire) (or [this section](task-based-approach.html#using-da-vinci-dtr-to-complete-the-questionnaire) on the Task Based Approach page) for more detailed transactions.

### Data Elements for Requesting Attachments

The [Requesting Attachments Using Attachment Codes] page documents the data elements needed to associate an attachment to a claim or prior authorization.  However, there is no "Attachment Code" Data element when using Questionnaires to collect attachments-related data.

### *Step-by-Step* Solicited Attachment Transaction

<div class="bg-info" markdown="1">

In the following sections, A detailed look at an example *Solicited* attachment transaction illustrates how:
- The Payer uses a FHIR Questionnaire to communicate to the Provider what additional attachments-related data is needed.
- The Payer uses the CDex Task Attachment Request Profile to communicate to the Provider to complete the Questionnaire.
- The Provider launches DTR to fill out the FHIR Questionnaire using QuestionnaireResponse.
- The DTR completes the QuestionaireResponse and updates the Task.
- The Provider uses the $submit-attachment operation to communicate the completed QuestionnaireResponse to the Payer.
</div><!-- bg-info -->

In this scenario, a Provider creates a prior authorization and sends it to the Payer. The Payer reviews the prior authorization and responds with a request to fill out a questionnaire for attachments-related data using the *CDex Attachment Request Profile*. After receiving the attachment request, the Provider launches DTR, which completes a QuestionnaireResponse. The Provider returns the QuestionnaireResponse using the [`$submit-attachment`] operation, posting it to the endpoint supplied in the request. The flow diagram in figure 20 below illustrates the scenario.


{% include img.html img="cdex-request-questionnaire-priorauth-flow.svg" caption=" Figure 20: CDex Request Attachment for Prior-Auth Using Questionnaires" %}

In addition to the information needed to submit and associate the attachments to the claim successfully, the Payer supplies the following details about what information is necessary to complete the adjudication of the claim:

- A link to the Questionnaire(s)
- Line numbers on the claim the requested attachment(s) are for
- The specific purpose of use (POU) for the request

The table below summarizes the mapping between the CDex Request Attachment Profile elements and the [`$submit-attachment`] parameters:

{% include q-attachments_to_requests.md %}

#### Payer Requests Attachments for Prior Authorization

In the first FHIR transaction, the Payer POSTs the CDex Task Attachment Request Profile to the Provider endpoint.

~~~
POST [base]/Task
~~~

**Request Body**

##### Task Resource

<!-- The request body's various elements are annotated to show how each data element is communicated to the Provider. -->

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=0 count=2 linenumber=true rel=true %}
~~~

##### Verifying Patient Identity

The following data elements are used to verify the patient's identity. (This guide does not cover how the Provider system verifies the patient's identity.) They are communicated in a  *contained* Patient resource using the [CDex Patient Demographics Profile]. The contained Patient is referenced in `Task.for.reference` using a fixed reference value of "#patient".

|Data|HRex Patient Demographics Profile.|
|---|---|
|Member ID or Patient Account No.*|`Patient.identifier`|
|Patient Name|`Patient.name`|
|Patient DOB (optional)|`Patient.birthDate`|
{: .grid}

\* Patient Account Number is a Provider assigned identifier
 

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=2 count=35 linenumber=true rel=true %}
~~~

##### Supplying the Provider ID(s)

The Payer communicates the provider ID as either a unique organization/location identifier (e.g., Type 2 NPI), unique provider identifier (e.g., Type 1 NPI), or both in a *contained* PractitionerRole resource using the [CDex PractitionerRole Profile]. This contained PractitionerRole is referenced in `Task.owner.reference` using a fixed reference value of "#practitionerrole".

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=37 count=15 linenumber=true rel=true %}
~~~

##### Supplying the Tracking ID

The mandatory `Task.identifier` *tracking-id* slice element represents the Payer tracking identifier. The tracking-id (the "re-association tracking control number") is an identifier that ties the attachments back to the claim or prior authorization. The Provider will echo it back to the Payer when submitting the attachments. 


~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=53 count=12 linenumber=true rel=true %}
~~~

##### Task *status* and *intent* Elements

These required Task infrastructure elements:

- `Task.status`
- `Task.intent`

convey the task status and the intent of the request.  The `Task.status` value of "request" is typical when POSTing the Task-based attachment request. The status will change as the Task moves through the workflow based on the [Task state machine]. `Task.intent` is fixed to "order".

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=65 count=2 linenumber=true rel=true %}
~~~

##### Task *code* Element

The `Task.code` communicates that the Payer is requesting attachments for a claim or prior authorization using a code or data request questionnaire. If the code is "attachment-request-code", the provider system returns attachment(s) identified by the attachment code(s) in the "code" input parameter. If the code is "attachment-request-questionnaire", as it is in this scenario, the provider system uses Documentation Templates and Rules (DTR) to complete the Questionnaire referenced in the "questionnaire" input parameter. The provider system uses the $submit-attachment operation to return the information to the endpoint provided in the `Task.input` "payer-url" parameter.

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=67 count=7 linenumber=true rel=true %}
~~~

##### Identifying the Payer, Provider, and Patient

The attachment request will be directed to the same Provider who submitted the claim or prior authorization. Business identifiers are used to identify the Patient, the Payer, and the Provider who submitted the claim, and these identifiers are echoed back to the Payer when submitting the attachments.

As discussed above, the patient ID is in the contained Patient resource, referenced by the `Task.for` element, and the provider ID is in the contained PractitionerRole resource, referenced by the `Task.owner` element. The provider ID can be a Practitioner identifier (i.e., a Type1 NPI), the Practitioner's Organization identifier (i.e., a Type2 NPI), or both.

(note the various Task dates in the request fragment below)

|Actor|CDex Request Attachment Task Profile Element|
|---|---|
|payer ID|`Task.requester.identifier`|
|provider ID|(contained)PractitionerRole.practitioner. identifier or PractitionerRole.Organization.identifier|
|patient member ID or Patient Account No|(contained)Patient.identifier|
{: .grid}

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=74 count=14 linenumber=true rel=true %}
~~~

##### Claim Information

The Task communicates whether the attachments are for a claim or prior authorization, and the Payer identifies the claim or prior authorization with its business identifier.

|Data|CDex Request Attachment Task Profile Element|
|---|---|
|Claim or Prior Authorization|`Task.reasonCode`|
|Claim or Prior Authorization ID|`Task.reasonReference.identifier`|
{: .grid}

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=88 count=16 linenumber=true rel=true %}
~~~

##### Attachment Due Date

The Payer communicates the due date for submitting the attachment in the `Task.restriction.period` element. Note that `Task.restriction.period.end` represents the time when the Provider should have submitted the attachments.

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=102 count=5 linenumber=true rel=true %}
~~~

##### Using Questionnaire to Communicate What Attachments Data is Needed

In this scenario, the Payer supplies the URL of a questionnaire (FHIR Questionnaire) to communicate what attachments-related data is needed. They may also provide the *line item numbers* to match the attachment to a line item in the claim or prior authorization.  This information is represented in the "questionnaire" `Task.input` element. The Provider launches the Documentation Templates and Rules (DTR) application to complete the Questionnaire. The code snippet below contains a URL to a Home Oxygen Therapy Questionnaire.

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=107 count=13 linenumber=true rel=true %}
~~~

<!-- {% raw %} ##### Communicating the Signature Requirements

This `Task.input` "signature-flag" may indicate that the Provider must sign the attachments. For more information about using signatures in CDex, see the [Signatures] and [Sending Attachments] pages.

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=154 count=11 linenumber=true rel=true %}
~~~ {% endraw %} -->

##### Supplying the $submit-attachment Operation Endpoint

The Payer supplies the URL endpoint in the `Task.input` "payer-url" parameter. The Provider System uses this endpoint for the [`$submit-attachment`] operation to send the completed QuestionnaireResponse. Note that it is not necessarily a FHIR RESTful server endpoint.

<!-- If no URL endpoint is supplied, the attachments are provided either as references or contained Task resources, and the requester needs to poll/subscribe to the Task to retrieve when done. -->

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=120 count=11 linenumber=true rel=true %}
~~~

<!-- {% raw %} ##### Date of Service for the Claim

This `Task.input` element represents the service date or the service's starting date for the claim or prior authorization.  It is optional if the attachment is for a prior authorization.  If the attachment is for a claim, it **SHALL** be present and precise to the day. 

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=174 count=13 linenumber=true rel=true %}
~~~ {% endraw %} -->

##### Purpose of Use for the Request

This optional `Task.input` element represents the request's purpose of use (POU).  This example supports a request for prior authorization, "COVAUTH".  When requesting attachments for a claim, it would be "CLMATTCH".

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start=129 count=21 linenumber=true rel=true %}
~~~

#### Provider Launches DTR

The Payer used a Questionnaire to ask for specific attachments-related data. They indicated it with a `Task.code` "attachment-request-questionnaire" and supplied the URL of the questionnaire (FHIR Questionnaire) as an input parameter. Becasue these conditions are met, the Payer launches [Da Vinci DTR], a SMART on FHIR App or native EHR application. If the Provider launches a DTR within an EHR native application, skip to the step [DTR App Updates Task](#dtr-app-updates-task) below. If the Provider Launches DTR as a SMART on FHIR Application, it follows the [DTR SMART App Launch] with the Task as the launch content. The next several steps describe the DTR SMART App functionality.

##### DTR SMART App Fetches Task

A reference to the Task is passed to the DTR App as part of the DTR launch. The DTR App fetches the Task and inspects it for the Questionnaire URL.

**Request**

~~~
GET [base]/Task/cdex-task-example22
~~~

**Response Body**

~~~
{% include_relative includelines filename='Task-cdex-task-inline-example22.json' start="0,112" count="2,8" linenumber=true rel=true %}....
~~~

##### DTR SMART App Fetches Questionnaire

Upon discovery of the Questionnaire URL, the DTR App fetches the Questionnaire.

**Request**

~~~
GET http://example.org/FHIR/Questionnare/cdex-questionnaire-example1
~~~

**Response Body**

~~~
{% include_relative includelines filename='Questionnaire-cdex-questionnaire-example1.json' linenumber=true rel=true %}
~~~

##### DTR App Fills QuestionnaireResponse

To complete the Questionnaire, the DTR App retrieves FHIR resources from EHRs, runs rules (such as [CQL]) for form population, and completes a QuestionnaireResponse.  See the [Da Vinci DTR] Implementation Guide for more information.

{% include img-small.html img="fill-form-icon.svg" %}

##### DTR App POSTs QuestionnaireResponse to Provider FHIR Server

The completed QuestionnaireResponse is saved in the Provider's FHIR Server.

**Request**

~~~
POST [base]/$QuestionnaireResponse
~~~

**Request Body**

~~~
{% include_relative includelines filename='QuestionnaireResponse-cdex-questionnaireresponse-inline-example1.json' linenumber=true rel=true %}
~~~

##### DTR App Updates Task

The DTR SMART App or EHR native application Updates `Task.output` to Reference the completed QuestionnaireResponse.


~~~
PUT [base]/Task/cdex-task-example-22
~~~

**Request Body**

~~~
{% include_relative includelines filename='cdex-task-inline-example22-updated.json' start="0,202" count="3,15" linenumber=true %}
~~~


#### Provider Submits Solicited Attachments

When the Task is completed, the Provider POSTs the [`$submit-attachment`] operation and its payload to the Payer's endpoint communicated in the `Task.input` "payer-url" parameter. The operation payload contains the completed QuestionnaireResponse(s) and echoes many data elements sent in the request. The table in the introduction to this section summarizes the mapping between the CDex Request Attachment Profile elements and the [`$submit-attachment`] parameters. The documentation below describes and demonstrates the [`$submit-attachment`] parameters.

|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|Payer URL|"payer-url"Task.input|(operation endpoint)|
{:.grid}

**Request**

~~~
POST [base]/$submit-attachment
~~~

**Request Body**

##### The Submit Attachment Operation Payload

The attachments and metadata needed to associate the attachment to the claim or prior authorization are in the [`$submit-attachment`] payload, a [Parameters] resource.

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example5.json' start=0 count=3 linenumber=true rel=true %}
~~~

##### Tracking ID and Indicating a Claim or Prior Authorization
The TrackingId parameter represents the identifier that ties the attachments to the claim or prior authorization. It is often referred to as the "re-association tracking control number". The operation must indicate whether the attachments are for claim or prior authorization. These data elements are taken from the CDex request as follows:

|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|TrackingID|Task.identifier|TrackingId|
|Use|Task.reasonCode|AttachTo|
{:.grid}

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example5.json' start=3 count=11 linenumber=true rel=true %}
~~~   

##### Identifying the Payer, Provider, Organization, and Patient

As documented above, The Payer uses business identifiers to identify itself, the Patient, the Provider (i.e., the practitioner), and the Organization (i.e., the provider organization) who submitted the claim or prior authorization. The Provider uses these same identifiers when submitting the attachments.

|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|Payer ID|Task.requester.identifier|PayerId|
|Organization ID|PractitionerRole.organization.identifier|OrganizationId|
|Provider ID|PractitionerRole.practitioner.identifier|ProviderId|
|Member ID|Patient.identifier|MemberId|
{:.grid}

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example5.json' start=14 count=28 linenumber=true rel=true %}
~~~ 


<!-- {% raw %} ##### The Service Date

The service date parameter is taken from the "service-date" `Task.input` element in the CDex Attachment request.


|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|Date of Service|“service-date” Task.input|ServiceDate|
{:.grid}

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example5.json' start=42 count=4 linenumber=true rel=true %}
~~~  {% endraw %} -->


##### Supply the QuestionnaireResponse

The completed QuestionnaireResponse and line item numbers are communicated as "Attachment" parameter parts. The QuestionnaireResponse is in the `Attachment.Content` parameter part as an inline FHIR resource, and the line item numbers associated with it are sent in the `Attachment.LineItem` parameter part.

|Data Element|CDex Request Attachment Task Profile Element|CDex #submit-attachment Parameter|
|---|---|---|
|line item(s)|“code”Task.input.extension|Attachment.LineItem|
|QuestionnaireResponse|-|Attachment.content
{:.grid}

~~~
{% include_relative includelines filename='Parameters-cdex-parameters-example5.json' start=42 count=69 linenumber=true rel=true %}
~~~



### Complete *Solicited* Attachment Transaction

The example below shows the complete *solicited* attachment transaction. A Payer uses the CDex Task Attachment Request Profile to request the attachment using an attachment code, and the Provider uses the [`$submit-attachment`] operation to submit the attachments to the Payer:

{% include examplebutton_default.html example="solicited-attachment-scenario-2.md" b_title = "Click Here To See FHIR Based Solicited Attachment Example" %}

### Signatures

Refer to the [Signatures section](sending-attachments.html#signatures) on the Sending Attachments page.

<br/><br/>

{% include link-list.md %}

---

// File: input/pagecontent/security.md

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

#### General Considerations



1. User scopes **SHALL** be used as defined in [SMART App Launch] to restrict access to the relevant patients for a given Data Consumer. Organizational user access scopes are typically pre-negotiated and documented via business agreements. Data Sources shall translate these agreements into the appropriate SMART App Launch scopes.

1. Audit mechanisms need to be in place so that exchange mechanisms *with or without human intervention* can be subject to review/oversight.

#### Purpose of Use



The purpose for which data may be used by or on behalf of an organization is known as the Purpose of Use (POU). It is an integral part of the data-sharing agreement between Data Consumers and Data Sources because privacy policies and consent directives dictate data requests' responses. Typically, a single POU is assigned for a client application when the app is registered and broadly defined POU types such as those listed in the [NHIN Purpose Of Use Code System]. For example, a Payer's typical POU is "OPERATIONS," and a Provider's typical POU is "TREATMENT". Therefore, it is implicit when the Data Consumer makes a direct query or an "automatically fulfilled" Task to the Data Source using that app.

For CDex Task-based queries, the Data Consumer and Data Source **MAY** communicate the POU for the requested data for each Task using codes from the [CDex Purpose of Use Value Set] in the POU `Task.input` element. This element is intended to define a new way to exchange data with dynamically defined POUs.


#### Sensitive and Confidential Data

If a data-consuming system requests sensitive information, the data source must decide whether the requester is authorized to access some or all of this information. For example, suppose the level of confidentiality protection required for some or all of the information requested by a data-consuming system is more stringent than the "default" confidentiality protection provided for HIPAA PHI. In that case, the data source needs to be able to decide whether to provide the information at all or whether to filter the information.

The [FHIR Data Segmentation for Privacy] (ballot version) standardizes how guidance for applying security labels in FHIR. Once ONC or CMS adopts it or a suitable approach by regulation, a future version of this guide will reference it. In the interim, implementers should consult with their compliance department to determine requirements and how best to satisfy them, whether with in-band or out-of-band communications.

{% include link-list.md %}


---

// File: input/pagecontent/sending-attachments.md



This page documents a FHIR-based approach to sending attachments for claims or prior authorization directly to a Payer.\* This transaction is used for both *solicited* and *unsolicited* attachments. It is intended to be compatible with the X12n 275 transaction, the X12 N 837I and 837P for claims purposes, and the 278 response for authorizations (for more information on X12 defined transactions, see [X12 Transaction Sets]). Compatibility assumes that the appropriate identifiers are supported in the submission to facilitate the association of the attachment with the claim submission or authorization request. 

{% include see-conf.md %}

### `$submit-attachment` Operation

This guide defines [`$submit-attachment`], a simple RESTful interaction for exchanging attachments using a FHIR [Operation]. {{ site.data.resources.['OperationDefinition/submit-attachment']['description'] }}

See the [`$submit-attachment`] operation definition for further details.

<div class="stu-note " markdown="1">
Based upon additional testing, we intend to to upgrade the Endpoint Discovery Strategy guidance (**SHOULD**) to  a requirement (**SHALL**) in the next version of CDex
</div><!-- stu-note -->

### Technical Workflow

As shown below in Figure 13, the attachments are "pushed" using the [`$submit-attachment`] operation directly to the Payer or an Intermediary.


{% include img.html img="attachments-sequencediagram.svg" caption="Figure 13" %}


1. The Provider assembles the attachments and metadata to associate the attachments to a claim or prior authorization
2. The Provider invokes [`$submit-attachment`] operation to submit attachments to the Payer
3. The Payer responds with an HTTP response that accepts or rejects the transaction.
   - The Payer **SHOULD** return an informational OperationOutcome with the HTTP accept response if the attachments can not be associated with a *current* claim or prior authorization and are being held for association with a *future* claim or prior authorization. An OperationOutcome example is used in Scenario 1b below.
4. The Payer associates the attachments to the claim or prior authorization and processes the claim.


### Data Elements for Sending Attachments

When sending attachments, the following data elements are needed to associate an attachment to a claim or prior authorization. They are mapped to the [`$submit-attachment`] parameters and their corresponding x12n 275 elements in the following table. {% include X12_IP.md %}  

{% include attachments_to_275.md %}

For *solicited* attachments, the Payer sends the same data elements in the request for attachments. See the [Requesting Attachments Using Attachment Codes] and [Requesting Attachments Using Questionnaires] pages for a detailed discussion on how these data elements are used in the CDex Attachment Request Profile to request attachments and in the [`$submit-attachment`] response to the Payer.

### Examples

In the following examples, a Provider creates a claim and sends *unsolicited attachments* using the FHIR operation, [`$submit-attachment`]. For *solicited attachments* examples, see the [Requesting Attachments Using Attachment Codes] and [Requesting Attachments Using Questionnaires] pages.

`POST [base]/$submit-attachment`

##### Scenario 1a: CCDA Document Attachments

- Based on the Payer's pre-defined rules, the Provider submits C-CDA Documents as additional documentation for a claim.
  - Typically, when the attachments are C-CDA documents, as in this scenario, they are already digitally signed and supply provenance information. Therefore, FHIR signatures and external Provenance resources are not needed.
- The Provider knows the Payer's endpoint for sending attachments. Note that the Provider can POST the [`$submit-attachment`] operation to endpoints that are not FHIR RESTful servers.
- An unsolicited workflow implies that the *Provider* assigns the claim and line item identifiers upon claim generation.
- The Payer associates attachments to the claim.

{% include examplebutton_default.html example="unsolicited-attachment-scenario1a.md" b_title = "Click Here To See Example CCDA Document Attachments" %}

#### Scenario 1b: CCDA Document Attachments Submitted *Prior* to claim

This scenario is the same as Scenario 1a above, except the attachments are submitted *prior* to the claim. The Payer accepts the attachments and returns an OperationOutcome informing the Provider system that the attachments are waiting for the claim.

{% include examplebutton_default.html example="unsolicited-attachment-scenario1b.md" b_title = "Click Here To See Example CCDA Document Attachments" %}

##### Scenario 2: Laboratory Results Attachments

 This scenario is the same as Scenario 1a, except the Provider submits laboratory results supporting a claim. There are multiple attachments, each populated with a FHIR Observation resource. If a signature were required, the provider system would convert it to a signed FHIR document, as shown in the example in the signatures section.

{% include examplebutton_default.html example="unsolicited-attachment-scenario2.md" b_title = "Click Here To See Example Laboratory Results Attachments" %}

---

### Signatures

{% include signature-support.md %}

Some data consumers may require that the data they receive be signed. When signatures are required, the following general rules apply:

{% include human-signature.md %}
{% include inherently-signed.md %}

{% include signature-disclaimer.md %}

#### The Payer Requirements

- For *Unsolicited* Attachments, the Payer *pre-negotiates* with the Provider whether electronic or digital signatures are required. If signatures are required, *all* attachments will be signed by the provider submitting them.
- For *Solicited* Attachments, the Payer *pre-negotiates* with the Provider whether electronic or digital signatures are required for:
  1. *all* attachments
  2. or *only* for attachments where the attachment request communicates the signature requirement using the `Task.input` "signature" input parameter.
- The Payer/Requester follows the documentation on the [Signatures] page to validate signatures.
  - If the signatures fail verification when processing the [`$submit-attachment`] operation, the Data Source/Responder **SHALL** return an HTTP `400 Bad Request` *and* an OperationOutcome declaring that the signature was invalid.

#### Provider Requirements

{% include data-source-sig-rules.md %}

- In this example, the Provider submits a patient's active conditions to the Payer to support a claim.
Unlike Scenario 1, which uses DocumentReference resources to index the C-CDA attachment, FHIR resources representing the patient's active conditions are transformed into a digitally signed FHIR Document bundle.
- See the [Signatures] page for a detailed explanation of how the signature was created and verified.

{% include examplebutton_default.html example="unsolicited-attachment-scenario3.md" b_title = "Click Here To See Example Signed FHIR Resource Attachments" %}

#### Example: The Signature Cannot Be Verified

This example is the same as the previous one, except the digital signature cannot be verified.  However, the interaction it illustrates would be the same whether the attachment was a digitally signed C-CDA, FHIR Document, or QuestionnaireResponse.

- In this example, the Provider submits the patient's active conditions to the Payer to support a claim.
- Unlike the previous example, the Payer cannot verify the signature because the certificate is expired.
- An HTTP `400 Bad Request` and OperationOutcome are returned.

{% include examplebutton_default.html example="unsolicited-attachment-scenario7.md" b_title = "Click Here To See an Example Where a Signature Cannot Be Verified" %}

#### Example: Signature Missing

This example is the same as Scenario 1 above, except a digital signature is required but is absent.  The interaction it illustrates would be the same whether the attachment was a digitally signed C-CDA, FHIR Document, or QuestionnaireResponse.

- The Provider submits CCDA Documents as additional documentation for a claim.
- The attachment is an *unsigned* CCDA document, and the Payer requires a digital signature in this scenario.
- An HTTP `400 Bad Request` and OperationOutcome are returned.

{% include examplebutton_default.html example="unsolicited-attachment-scenario4.md" b_title = "Click Here To See an Example Where the Signature is Missing" %}

{% include link-list.md %}


---

// File: input/pagecontent/signatures.md


### About Signatures

{% include signature-support.md %}

Data Consumers such as Payers may require signatures from a Data Source to attest to the information being exchanged. For example, for a Centers for Medicare and Medicaid Services (CMS) worker to adequately review a Provider's claim, the submitted information needs to be signed.[^first][^second]  In direct query transactions without human intervention, Data Consumers may require signatures from Data Sources attesting that they supplied the information. To comply with these signature requirements, this page documents how to create and verify FHIR Digital Signatures when using CDex Transactions. 
 
### The Signer

As illustrated in the table below, the signatory depends on the transaction. For synchronous or automated transactions, it is a system-level signature; for asynchronous transactions involving a human, it is a provider signature. 

||Direct Query|Task Based Query|Attachments|
|---|---|---|---|
|System Level|X|X||
|Human Provider||X|X|
{:.grid}

System-level and provider signatures represent different levels of attestation:

{% include human-signature.md %}
{% include system-signature.md %}

{% include signature-disclaimer.md %}


### What is Signed

The data returned in CDEX is not limited to FHIR resources but may also include C-CDA documents, PDFs, text files, and other formats. Depending on the data type and format returned, the signature may be in the actual payload or a [FHIR Signature] in the Bundle that envelopes the payload. The following table summarizes what artifacts are signed:

|Data Type Returned|Location of Signature|
|---|---|
|Non-FHIR data formats attached to or referenced by DocumentReference (e.g., CCDA)|Referenced or attached data|
|FHIR Documents (e.g., CCDA on FHIR, Task-based request\*, Unsolicited Attachment\*)|Document Bundle|
|FHIR Search Bundle (e.g., a query response)|Search Bundle|
|FHIR QuestionnaireResponse (e.g., a query response) |QuestionnaireResponse |
|Combination of above  (e.g., FHIR Search Bundle, FHIR Documents, or binary files referenced by DocumentReference)|Combination of Above|
{:.grid}

\* A *signed [FHIR Document]* is sent for task-based requests and some attachments transactions when the artifact would otherwise, if unsigned, be individual FHIR resources.

The corresponding sections on signatures for [Direct Query], [Task Based Approach], [Sending attachments], [Requesting Attachments Using Attachment Codes], and [Requesting Attachments Using Questionnaires] document how to indicate the signature requirement and how to respond with signed transactions. The sections below define the requirements for using *FHIR Signatures* to sign a Bundle or QuestionnaireResponse with electronic or digital signatures. Refer to the appropriate specifications for guidance on signing other documents, such as CDA or CCDA on FHIR Documents.

### CDex *Enveloped* Signatures

Signatures in CDex are an element in the signed Bundle or QuestionnaireResponse resource. This type of signature is referred to as an [enveloped signature]. The FHIR Bundle is the envelope for Bundles, and the signature populates the [`Bundle.signature`] element. For QuestionnaireResponse, The envelope can be the resource, individual `QuestionnaireResponse.item` elements, or both, and the signature populates the QuestionnaireResponse's signature extension.\* The enveloped signatures must avoid including the signature element in calculating the digital signature.

\* When using a FHIR Questionnaire to request data, the [DTR SDC Questionnaire] Profile is used to profile the Questionnaire. Both [CDex Task Attachment Request Profile] and the [DTR SDC Questionnaire] profile have the overlapping capability to indicate that a signature is required. Signers must meet both the Task *and* Questionnaire signature expectations. The Task's signature input parameter represents the need for a verification signature for the QuestionnaireResponse. The [DTR Standard Questionnaire] profile supports many reasons for signatures, including verification signatures using the FHIR standard [signatureRequired] extension at the QuestionnaireResponse resource or `QuestionnareiResponse.item` level.
{:.bg-warning}

#### CDex Signature Profiles

This guide defines three profiles for using signatures:

1. [CDex Signature Profile] 
2. [CDex Signature Bundle Profile]
3. [CDex SDC QuestionnaireResponse Profile]

##### CDex Signature Datatype Profile

{{ site.data.resources.['StructureDefinition/cdex-signature']['description'] }}

See the [CDex Signature Profile] formal definition for further details.

##### CDex Signature Bundle Profile

{{ site.data.resources.['StructureDefinition/cdex-signature-bundle']['description'] }}

See the [CDex Signature Bundle Profile] formal definition for further details.


##### CDex SDC Questionnaire Response Profile

{{ site.data.resources.['StructureDefinition/cdex-sdc-questionnaireresponse']['description'] }}

See the [CDex SDC QuestionnaireResponse Profile] formal definition for further details.



### Electronic Signatures

>The term "electronic signature" means an electronic sound, symbol, or process attached to or logically associated with a contract or other record and executed or adopted by a person with the intent to sign the record.[^third]

The various forms of electronic signatures include:
- a typed-out name
- a graphical image that represents a handwritten signature
- a digitized handwritten signature
- digital signature using encryption technology

This guide specifies how to implement digital signatures in the following sections. Specific guidance for other electronic signatures is an implementation detail that is out of scope for this guide.

#### Electronic Signature Example

In this example, a `Bundle.signature` is added to a FHIR Document. The electronic signature is a JPG Image that represents this handwritten signature:

{% include img.html img="jh-signature.jpg" %}

{% include examplebutton_default.html example="electronic-sig-example.md" b_title = "Click Here To See Electronic Signature Example" %}

### Digital Signatures

*Digital Signatures* are a type of *Electronic signature* that meet the following functional requirements:

1. authentication  - They verify the identity of a person.
2. integrity -  They ensure the signed document has not been altered.
3. non-repudiation - The signer can not dispute their authorship (For example, if there is subsequent legal activity related to the signed document).

Digital Signatures employ encryption technology and a digital certificate issued by a certification authority (CA). The encryption ensures the signee has attested to the integrity of the data. A certificate issued by a CA that the Data Consumer trusts, ensures that the Data Consumer can trust that the signature is authentic and non-repudiable.

#### Digital Signature Rules For CDEX FHIR Bundle and QuestionnaireResponse 

1. **SHALL** use the [CDex Signature Bundle Profile] or [CDex SDC QuestionnaireResponse Profile] 
2. **SHALL** use JSON Web Signature (JWS)(see [RFC 7515])
    >JSON Web Signature (JWS) is a means of representing content secured with digital signatures or Hash-based Message Authentication Codes (HMACs) using JSON data structures. Cryptographic algorithms and identifiers used with this specification are enumerated in the separate JSON Web Algorithms (JWA). [^fourth]

    Implementers that support XML must be aware that JSON Web Signatures can only be created and validated in the original native JSON. Transforms to and from XML will invalidate signatures.
    {:.bg-warning} 

3. [JSON Signature rules](http://hl7.org/fhir/datatypes.html#JSON) specified in the FHIR specification. (reproduced below for reader convenience):
    >When the signature is a JSON Digital Signature (contentType = application/jose), the following rules apply:
    >- The Signature.data is base64 encoded JWS-Signature [RFC 7515: JSON Web Signature (JWS)]
    >- The signature is a [Detached] Signature (where the content that is signed is removed from the JWS)
    >- When FHIR Resources are signed, the signature is across the [Canonical JSON] form of the resource(s)
    >- The Signature **SHOULD** use the hashing algorithm SHA256. The signature validation policy will apply to the signature and determine the acceptability
    >- The Signature **SHALL** include a "CommitmentTypeIndication" element for the purpose(s) of the signature. The Purpose can be the action being attested to or the role associated with the signature. The value shall come from ASTM E1762-95(2013). The `Signature.type` shall contain the same values as the CommitmentTypeIndication element.

    There is no "CommitmentTypeIndication" element in JWS, and a tracker ([FHIR-36158]) has been logged to update the FHIR specification. As documented in the CDex Profiles, `Signature.type` shall contain the value "1.2.840.10065.1.12.1.5" (Verification Signature).
    {:.stu-note}

4. Additional JWS rules for this guide:
    - **SHALL** support JWS compact serialization format for single signatures
        - Note that the complete JWS is in the form *Header.Payload.Signature* with a period `.` character between the base64_url encoded parts. This `Signature.data` value must be base64 encoded *again* as indicated above. Otherwise, it will fail validation since the base64Binary regex: (\s*([0-9a-zA-Z\+\=]){4}\s*)+ does not include the period `.` character.
    - **SHOULD** support [JWS JSON Serialization] format to represent multiple signatures with identical parameter values except `"x5c"`.
        - The signer may have more than one certificate (for example, the signer participates in more than one trust community)
    - **SHALL** use [X.509 certificates] to verify the identity of the entity signing the Bundle or QuestionnaireResponse
         - The KeyUsage **SHOULD** include 'DigitalSignature'
         - The Issuer **SHOULD** be a trusted CA for the Consumer
         - The Subject (or Subject Alternative Name (SAN)) **SHOULD** match the Data Source
         - The Validity Dates **SHOULD** be appropriate/long enough as determined by the business partners.
    - **SHALL** use the IETF JSON Canonicalization Scheme (JCS) (see [RFC 8785]) to generate the canonical form of the resource. JCS is a well-documented standardized canonicalization algorithm with multiple open-source implementations across several programming languages.
        - The `id`, `meta`, and `signature` elements on the root Bundle resource **SHALL** be removed before canonicalization. In other words, everything in a Bundle is signed *except* for these elements.
        - For signatures representing the entire QuestionnaireResponse, the `id`, `meta`, and the signature extension on the root QuestionnaireResponse resource **SHALL** be removed before canonicalization. In other words, everything in a QuestionnaireResponse is signed *except* for these elements. 
        - For signatures representing an item in the QuestionnaireResponse, the `id` and the signature extension on the item resource **SHALL** be removed before canonicalization. In other words, everything in the `QuestionnaireResponse.item` is signed *except* for these elements. 

##### Sender/Signer Steps

The following steps outline the process for creating the Signature.

1. Prepare JWS Header
    1. **SHALL** have `"alg": "RS256"` (preferred) or some other JSON Web Algorithms (JWA) (see [RFC 7518])
    2. **SHALL** have `"kty": "RS"`
    3. **SHALL** have `"x5c"` (X.509 certificate chain) equal to an array of one or more base64-encoded (not base64url-encoded) DER representations of the public certificate or certificate chain (see [RFC 7517]).
The public key is listed in the first certificate in the `"x5c"` specified by the entry's "Modulus" and "Exponent" parameters.
1. Prepare JWS Payload
    1. Prepare a valid FHIR Bundle or QuestionnaireResponse or QuestionnaireResponse.item 
    2. Remove the `id` and `meta` elements.
    3. Canonicalize the Bundle or QuestionnaireResponse or QuestionnaireResponse.item 
    4. base64_url encode the payload
2. Create the JWS signature using the supported algorithm.
3. Remove the payload element from the JWS.
4. base64 encode the JWS
5. Add the Signature element to the Bundle or the signature extension in the QuestionnaireResponse or QuestionnaireResponse.item and populate the mandatory Signature datatype elements and actual signature content:
    -  `Signature.type`  - Fixed to code =  "1.2.840.10065.1.12.1.5" [(Verification Signature)](http://hl7.org/fhir/valueset-signature-type.html)
    -  `Signature.when` - System timestamp when signature created
    -  `Signature.who`  -  Reference or identifier of the organization or practitioner who signed it
    -  `Signature.data`  - base64 encoded JWS
6. Send data to the consumer:
   1. The search set Bundle is returned directly as the payload for direct queries.
   2. For Task-based requests and Attachments, the document Bundle or QuestionnaireResponse is used

##### Receiver/Validation Steps

The following steps outline the process for verifying the Signature.

1. Retrieve and store the Bundle or QuestionnaireResponse :
   1. The search set Bundle is the response for a direct query.
   2. For Task-based requests, the completed `Task.output` is either:
      -  a contained FHIR Document that must be extracted from the containing Task resource.
      -  a reference to a FHIR Document that must be fetched from the referenced endpoint.
   3. A FHIR Document Bundle or QuestionnaireResponse is submitted as part of the operation payload for Attachments.
2. Remove the `id`, `meta` and `Bundle.signature` element from the Bundle resource or the signature extension(s) from the QuestionnaireResponse or QuestionnaireResponse.item. 
3. Canonicalize the resource.
4. Transform the canonicalized JSON to a base64-url format.
5. Get the base64 encoded JWS  from the `signature.data`  element
6. Base64 decode the encoded JWS
7. Insert the base64 encoded Bundle, QuestionnaireResponse, or QuestionnaireResponse.item into the JWS payload element.
8. Obtain the public key from the first certificate in the JWS header `"x5c"` key
    - base64 decode the key value
    - Use the "Subject Public Key Info"
9. Verify Issuer, Validity Dates, Subject, and KeyUsage of the certificate,
10. Validate the JWS using the public key or the X.509 Certificate

##### Step-by-Step Examples

Although [*self-signed* certificates] are used for these examples, they are not recommended for production systems.
{:.bg-warning}

In these examples, a detached JWS signature is created using a signer's private key and self-signed certificate. Then, the `Bundle.signature` element is added to the Bundle with the base64 encoded JWS Signature as the `signature.data` property value. Finally, the signature is verified.

- [Signed SearchSet Bundle Example] : FHIR search-set bundle signatures occur when performing direct queries where signatures are required on the returned results.   In this case, the digital signature represents a system-level attestation by the sending organization that they are the source of the information.

- [Signed Document Bundle Example] : FHIR Document bundle signatures occur when performing Task-based requests or Attachment transactions where signatures are required. The returned results are individual FHIR resources (in other words, not C-CDA, C-CDA on FHIR, or other binary formats referenced by DocumentReference). In this case, the digital signature represents a practitioner attesting that the information is true and accurate to the best of their knowledge.

---

[^first]: MLN Fact Sheet: Complying with Medicare Signature Requirements MLN Fact Sheet <https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/Downloads/Signature_Requirements_Fact_Sheet_ICN905364.pdf>
[^second]: CMS signature requirements outlined in the Medicare Program Integrity Manual (CMS Pub.100-08), Chapter 3, Section 3.3.2.4. <https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Downloads/pim83c03.pdf#page=44>
[^third]: "15 U.S. Code § 7006 - Definitions", LII / Legal Information Institute". Law.cornell.edu. Retrieved 2021-10-06. <https://www.law.cornell.edu/uscode/text/15/7006#5>
[^fourth]: [RFC 7515] Jones, M., et al., "JSON Web Signature (JWS)", RFC 7515, ISSN: 2070-1721, May 2015, <https://tools.ietf.org/html/rfc7515>


{% include link-list.md %}


---

// File: input/pagecontent/signed-document-bundle-example.md


<!-- # Da Vinci CDEX Digital Signature Document Bundle Example -->

This is a Jupyter Notebook which uses openSSL, Python 3.7, and the Python jcs and jose libraries to create a JSON Web Signature (JWS) (see RFC 7515), attach it to a FHIR Bundle and validate it. Its source code be found [here](https://github.com/HL7/davinci-ecdx/blob/master/CDEX-Signatures/Digsig_Document_Bundle_Example.ipynb)

*Although self-signed certificates are used for the purpose of these examples, they are not recommended for production systems.*

### Sender/Signer Steps

**1. Generate RSA256 public and private keys for signing the bundle**

*DO THIS STEP ONLY ONCE*

**2. Create a self-signed certificate for authenticating the signer**

create the public and private keys and cert using openssl on the command line.

1. pre-configure the self-signed cert with a configuration file

~~~
[req]
default_bit = 4096
distinguished_name = req_distinguished_name
prompt = no
x509_extensions = v3_ca

[req_distinguished_name]
countryName             = US
stateOrProvinceName     = California
localityName            = Sausalito
organizationName        = HealtheData1
commonName              = Eric Haas, DVM
emailAddress            = ehaas@healthedata1.org

[v3_ca]
basicConstraints = CA:TRUE
keyUsage=nonRepudiation, digitalSignature, keyEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = www.healthedatainc.com
~~~

2\. generate the public and private keys and cert

~~~
!openssl genrsa -out private-key.pem 3072
!openssl rsa -in private-key.pem -pubout -out public-key.pem
!openssl req -new -x509 -key private-key.pem -outform DER -out cert.der -days 360 -config cert.config
~~~

*For the purpose of this example display the keys (normally would never share the private key)*


```python
!cat private-key.pem
!echo
!cat public-key.pem
```


<pre style="border:0; overflow-wrap:break-word;">
-----BEGIN RSA PRIVATE KEY-----
MIIG4wIBAAKCAYEA6SnEpKADOrFttfr1k3iFThsddDFmrEMu1R4nes8qlwATPs53
wZ13p8lNI9RU7z5kXzg6Dg11bj1MA6JoQh4fm3JVvSjNqOet3MUShLwZ2h67I8Oc
jZsTuWIxEW4bR3UHqpLXcN1WBEUfR6MSztxZLM0dvdh0weMVt8lpVd4E5DEKMz0n
CSh92xvD6qugGDyewuGASJVEnQTFZd6p3hH4O37sYhX16H3U1Zu6zIohu1/c+Nz3
4pamnorH5rUcQJUcBDV6x9zrzgz8i9K05xvArGwF2FSDJnXR3uGRfaZYfebI+KTE
4S7XCV/6PVxy44exJmcoCR1hEKuD8BcGXZm3H4Qpjq/PB/AW1K7v+1es27BtTdQl
pZ3ZW1c5y/tyDDq/JF2h3Gp6n3JIBVeBK534xSatTiGgJrDI/OcTJI8ly8nCy/7u
Z9qOgYPd/1EX6rjqEiBjgkduQ2mc6cNpN7O6BPXTMBFl7X14GLYdm5Y8ubRR9Bo6
TpMdO4+2U+R58Z5bAgMBAAECggGANf/QZPgSB2PULtNCULcW2HH7Lk/KoZaloAHt
zslv6azAyEj0/0hCz/8U+HlSel4OzOauu1ZunetgUW8pijaDx3KBXN+4UafmYjzZ
/xe5PQTk/nFtLnZ96O9OweSoOLJn5h8/+gmoxDBmACdKUdJCbNfMTY117Pl0rC3f
UV2r8FVTMW62Pa69ByO1CgJZf4N6mVO0bBr12w+hz+fzm1S6Er1gbY78dq29vwLk
Dj7ndQfMm25Bkp6lVA58IXhMZMCjXSbei1aHxYBXAcAJP5bouiAxqnb2rZ5QM1W1
CpLuJ0HbGGl0y6aWZenV/C5JEDKqqh62KUGPnTeJLgpJpnuK59y7K+0dcFFKji5C
0d61lTaOKxHz3X11043j9+pJYJ8bEpxwimO+1i6boBNrB++i5cC8UKxK0Zw6o3HW
Xfko57EJR6oCiWeorgHZTF6wud4WlRkOMrt7EkrhbPQF8lcahCKGCwI63wxcCtE6
Wf784Dto+kQSQj6+G2V385utiXExAoHBAP95t1kQdTQl3ASwA3wvnU1oRzsj83DS
Qrg2vhJlhTUwKIsxKYIvL/KQQFsd4/ejr5nGurlAcFsRlA6cR94LXL2DWvvy52uP
r1UeOPeJ7DiFu2IY8ehtX9wEbt1dLYkgwTmkwASQIJsaNCgMH+1y5jcWdWGmHqf8
Y4z3/JerrT1FRT/Sgsp34HrzeCAajyRLK/qzDU1ieXYWVMnv+ZGEl5DFMvFRf0dP
IJHT7uuHdAvXw1tRcvsYtGIdiHyNDGjcpQKBwQDppFL2n50Fx3oWanXIspWS4Whq
PgBm2wTz5o+LGQIRj0m6qD5q+/mXdxxzj8zY3qlkQj1YGT2Bog9cYL2+PuNqnHeq
coi6uVf0zruq9XcrCoYs5sT4GT57LdRQK3xtGXURFbrVc/wjn7rU1/XhqThQADGx
cHvUVc37Pkvirf0/hAkW3KwOBEsXn8IYJ5JydBOm957NvoEAGCcI9tc0FM7xl4I7
CMzSYl+i/tXy/sec45Y514LXun8Tvm09uj8Qnv8CgcBX7HDwgxyDLQBy0IzygYSW
rmvNa8sNqh9yPMzfkfbtXjyl4u6RMmJDDehIM5pQkRIPT3jV5tqETSFygdCuF6T8
SCfZDDkfKJ1EIxmh/+K/dS8PTNx8jJ/wHcp1/up8BjzZ9Nxs9ZlzJ+qJWdrnIqMe
lGkjiUOFtvQgAPz6ygfeTWfO1klTGzyzs/VEvz9CU2i4aEUMu/ZncLoPobp3nXV4
SpYEvXKbfR0Ncy4H+18x8Dj4xahXyKHUHqvpibWapU0CgcEAinvgxNd0neFPZwvx
BmV7rJS4bAiV+mElPV/SgzLue/P/Uoi4fncdyH5MOd7pHz5TDt8INzi2sSiajDm3
HZVu/FkDwN6kVnDXRn5m0/0shjF1uBWMeDWWSDKw3lf4Jz5omhjUJgLaV08s0U20
Ku4/N4P18GNoskGtlpalKhXQvp4HOSrRPHmk/Lqvs9t4vSg6IcQxt2eMVL78HB8b
DX6r7pzMDyu3I5g1cYo0zBPhwwdOmrg3kKC1A8HiRC0phjOHAoHAbayWoC7XWsKx
1XzirFof87u47oEAcu0VlOJOwCr270J2Q1jyLMRCvgNQYvZz6nTJt0jcXazZrBTQ
jkwHgb7kFFSTqrE3Uj8Bmm6O+WnoY2+zi4leSe8yz3SRpLL1w9S1p40XQGLJhIX+
GJr5shr9osadWap/vzl244Do4Od/NMehLl6ibyu1UteRexDp8JjyUBwAAC50kMYP
OavUzEG9Ymb4t4yNjaso6C7ZNVcbJTJeI1A153p0uH3xJqFefai2
-----END RSA PRIVATE KEY-----

-----BEGIN PUBLIC KEY-----
MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEA6SnEpKADOrFttfr1k3iF
ThsddDFmrEMu1R4nes8qlwATPs53wZ13p8lNI9RU7z5kXzg6Dg11bj1MA6JoQh4f
m3JVvSjNqOet3MUShLwZ2h67I8OcjZsTuWIxEW4bR3UHqpLXcN1WBEUfR6MSztxZ
LM0dvdh0weMVt8lpVd4E5DEKMz0nCSh92xvD6qugGDyewuGASJVEnQTFZd6p3hH4
O37sYhX16H3U1Zu6zIohu1/c+Nz34pamnorH5rUcQJUcBDV6x9zrzgz8i9K05xvA
rGwF2FSDJnXR3uGRfaZYfebI+KTE4S7XCV/6PVxy44exJmcoCR1hEKuD8BcGXZm3
H4Qpjq/PB/AW1K7v+1es27BtTdQlpZ3ZW1c5y/tyDDq/JF2h3Gp6n3JIBVeBK534
xSatTiGgJrDI/OcTJI8ly8nCy/7uZ9qOgYPd/1EX6rjqEiBjgkduQ2mc6cNpN7O6
BPXTMBFl7X14GLYdm5Y8ubRR9Bo6TpMdO4+2U+R58Z5bAgMBAAE=
-----END PUBLIC KEY-----
</pre>

Show the Certificate in DER Format


```python
!openssl x509 -in cert.der -inform DER -text
```

<pre style="border:0; overflow-wrap:break-word;">
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 16322561221100825744 (0xe28562f33047ec90)
    Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=US, ST=California, L=Sausalito, O=HealtheData1, CN=Eric Haas, DVM/emailAddress=ehaas@healthedata1.org
        Validity
            Not Before: Oct 27 17:42:04 2021 GMT
            Not After : Oct 22 17:42:04 2022 GMT
        Subject: C=US, ST=California, L=Sausalito, O=HealtheData1, CN=Eric Haas, DVM/emailAddress=ehaas@healthedata1.org
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (3072 bit)
                Modulus:
                    00:e9:29:c4:a4:a0:03:3a:b1:6d:b5:fa:f5:93:78:
                    85:4e:1b:1d:74:31:66:ac:43:2e:d5:1e:27:7a:cf:
                    2a:97:00:13:3e:ce:77:c1:9d:77:a7:c9:4d:23:d4:
                    54:ef:3e:64:5f:38:3a:0e:0d:75:6e:3d:4c:03:a2:
                    68:42:1e:1f:9b:72:55:bd:28:cd:a8:e7:ad:dc:c5:
                    12:84:bc:19:da:1e:bb:23:c3:9c:8d:9b:13:b9:62:
                    31:11:6e:1b:47:75:07:aa:92:d7:70:dd:56:04:45:
                    1f:47:a3:12:ce:dc:59:2c:cd:1d:bd:d8:74:c1:e3:
                    15:b7:c9:69:55:de:04:e4:31:0a:33:3d:27:09:28:
                    7d:db:1b:c3:ea:ab:a0:18:3c:9e:c2:e1:80:48:95:
                    44:9d:04:c5:65:de:a9:de:11:f8:3b:7e:ec:62:15:
                    f5:e8:7d:d4:d5:9b:ba:cc:8a:21:bb:5f:dc:f8:dc:
                    f7:e2:96:a6:9e:8a:c7:e6:b5:1c:40:95:1c:04:35:
                    7a:c7:dc:eb:ce:0c:fc:8b:d2:b4:e7:1b:c0:ac:6c:
                    05:d8:54:83:26:75:d1:de:e1:91:7d:a6:58:7d:e6:
                    c8:f8:a4:c4:e1:2e:d7:09:5f:fa:3d:5c:72:e3:87:
                    b1:26:67:28:09:1d:61:10:ab:83:f0:17:06:5d:99:
                    b7:1f:84:29:8e:af:cf:07:f0:16:d4:ae:ef:fb:57:
                    ac:db:b0:6d:4d:d4:25:a5:9d:d9:5b:57:39:cb:fb:
                    72:0c:3a:bf:24:5d:a1:dc:6a:7a:9f:72:48:05:57:
                    81:2b:9d:f8:c5:26:ad:4e:21:a0:26:b0:c8:fc:e7:
                    13:24:8f:25:cb:c9:c2:cb:fe:ee:67:da:8e:81:83:
                    dd:ff:51:17:ea:b8:ea:12:20:63:82:47:6e:43:69:
                    9c:e9:c3:69:37:b3:ba:04:f5:d3:30:11:65:ed:7d:
                    78:18:b6:1d:9b:96:3c:b9:b4:51:f4:1a:3a:4e:93:
                    1d:3b:8f:b6:53:e4:79:f1:9e:5b
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints:
                CA:TRUE
            X509v3 Key Usage:
                Digital Signature, Non Repudiation, Key Encipherment
            X509v3 Subject Alternative Name:
                DNS:www.healthedatainc.com
    Signature Algorithm: sha256WithRSAEncryption
         0a:e3:14:36:af:5a:cb:ef:9e:e5:80:bb:40:53:bd:e2:b7:f3:
         c4:64:27:17:71:a4:95:93:40:5e:62:2b:ec:f5:46:76:21:98:
         d8:64:f1:ff:d4:6d:1c:2c:13:2b:39:0b:fb:2b:ca:a2:37:99:
         f5:d5:4a:f3:0a:c6:56:24:64:3b:f8:d4:c9:9f:8a:71:64:68:
         91:48:ec:e7:d9:dc:24:64:4c:49:24:71:b5:e0:90:ba:3b:78:
         85:fd:be:fe:a5:7e:7f:6b:0c:42:d1:2b:c0:f1:37:d2:f6:ea:
         45:85:0d:34:d0:55:11:0a:5a:43:1f:da:70:90:d4:bf:db:fb:
         b2:31:e2:24:3a:97:c1:0f:ab:ce:3f:79:88:70:08:69:e1:07:
         a8:5f:cc:b3:6d:a9:d9:b7:99:ba:ab:c8:40:a7:8c:97:eb:2f:
         56:a1:ed:8a:ec:d6:9c:5e:14:e9:52:26:a6:4a:f8:6c:79:7b:
         7a:05:7d:1f:a9:7a:4f:64:8c:92:3e:aa:0d:4e:5e:f4:d8:34:
         66:52:d3:b6:8b:2c:84:12:e6:a2:91:7b:7b:b1:f2:ad:31:00:
         99:f3:8f:29:07:b4:12:0f:44:da:ea:f3:c6:a0:6e:1b:9e:24:
         e7:41:b6:27:41:62:3e:c4:09:02:11:62:34:6c:12:83:84:b7:
         1f:25:43:1b:bb:9e:29:dd:0b:f7:7c:0a:38:d3:98:1a:f3:0a:
         8b:30:87:07:ea:4a:bc:43:09:a1:9f:32:f6:e8:81:f8:71:57:
         72:9f:51:68:9a:89:f7:b1:e9:65:31:2f:fa:58:82:a7:63:d2:
         5f:37:0a:d2:bd:b9:49:cc:a3:17:a7:4b:a2:e2:b6:48:1d:f4:
         c4:0b:c9:f2:d1:39:f3:8f:a3:a9:0e:82:19:e7:14:f5:78:ef:
         94:08:ee:25:d0:ab:0d:e5:4f:b2:39:27:ec:e3:d7:1b:ef:17:
         65:4e:f3:a8:76:4d:99:75:f5:61:8e:07:e6:b8:04:27:8f:25:
         ad:4a:cf:dc:8f:11
-----BEGIN CERTIFICATE-----
MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYD
VQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRv
MRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZN
MSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAy
NzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
DApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0
aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEW
FmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAw
ggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXen
yU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5
YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3b
G8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43Pfilqae
isfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJ
X/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlb
VznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6B
g93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07
j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYD
VR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOC
AYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwT
KzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+
/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAI
aeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SM
kj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2
J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB
+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+j
qQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP
3I8R
-----END CERTIFICATE-----
</pre>

Show the Certificate in PEM format


```python
!openssl x509 -in cert.der -inform DER -outform PEM -out cert.pem
!cat cert.pem
```

<pre style="border:0; overflow-wrap:break-word;">
-----BEGIN CERTIFICATE-----
MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYD
VQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRv
MRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZN
MSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAy
NzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
DApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0
aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEW
FmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAw
ggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXen
yU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5
YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3b
G8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43Pfilqae
isfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJ
X/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlb
VznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6B
g93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07
j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYD
VR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOC
AYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwT
KzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+
/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAI
aeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SM
kj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2
J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB
+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+j
qQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP
3I8R
-----END CERTIFICATE-----
</pre>

**3. Create JWS to Attach to Bundle**

**3.1. Prepare Header**

 note the base64 DER is Cert PEM file wihout the footer and header and line returns


```python
with open('cert.pem') as f:
    der = (f.read())  # base64 DER is PEM wihout the footer and header and line returns
der = der.replace('-----BEGIN CERTIFICATE-----','')
der = der.replace('-----END CERTIFICATE-----','')
der = der.replace('\n','')
```


```python
header = {"alg": "RS256","kty": "RS", "x5c": [der]}
header
```




<pre style="border:0; overflow-wrap:break-word;">
{'alg': 'RS256',
 'kty': 'RS',
 'x5c': ['MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRvMRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZNMSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAyNzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEWFmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAwggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXenyU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3bG8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43PfilqaeisfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJX/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlbVznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6Bg93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYDVR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOCAYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwTKzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAIaeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SMkj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+jqQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP3I8R']}
</pre>


**3.2. Prepare Payload**

The payload is the base64_url form of the canonicalized version of the document Bundle before attaching the signature


 Canonicalize the bundle using IETF JSON Canonicalization Scheme (JCS) before adding the signature element:

- Remove the id and meta elements if present before canonicalization
- The base64_url of the payload entry is combined with 3.3 below using the jws.sign method.


```python
from jcs import canonicalize #package for a JCS (RFC 8785) compliant canonicalizer.
from json import loads
document_bundle = r'''{
  "resourceType": "Bundle",
  "id": "cdex-document-digital-sig-example",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "CDEX Document with Digital Signature Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "Digital signature example showing how it is used to sign a FHIR Document.  The CDEX use case would be the target resource in response to a Task-based request where an digital signature was required.  If no signature was required, the response would typically be in the form of an individual resource."
      }
    ]
  },
  "identifier": {
    "system": "urn:ietf:rfc:3986",
    "value": "urn:uuid:c173535e-135e-48e3-ab64-38bacc68dba8"
  },
  "type": "document",
  "timestamp": "2021-10-25T20:16:29-07:00",
  "entry": [
    {
      "fullUrl": "urn:uuid:17a80a8d-4cf1-4deb-a1fd-2db1130e5f76",
      "resource": {
        "resourceType": "Composition",
        "id": "17a80a8d-4cf1-4deb-a1fd-2db1130e5f76",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource \"17a80a8d-4cf1-4deb-a1fd-2db1130e5f76\" </p></div><p><b>status</b>: final</p><p><b>type</b>: Medical records <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://loinc.org/\">LOINC</a>#11503-0)</span></p><p><b>encounter</b>: <a href=\"#Encounter_5ce5c83a-000f-47d2-941c-039358cc9112\">See above (urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112: Example Encounter)</a></p><p><b>date</b>: 2021-10-25T20:16:29-07:00</p><p><b>author</b>: <a href=\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\">See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: Example Practitioner)</a></p><p><b>title</b>: Active Conditions</p><h3>Attesters</h3><table class=\"grid\"><tr><td>-</td><td><b>Mode</b></td><td><b>Time</b></td><td><b>Party</b></td></tr><tr><td>*</td><td>legal</td><td>2021-10-25T20:16:29-07:00</td><td><a href=\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\">See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: Example Practitioner)</a></td></tr></table></div>"
        },
        "status": "final",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11503-0"
            }
          ],
          "text": "Medical records"
        },
        "subject": {
          "reference": "urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece",
          "display": "Example Patient"
        },
        "encounter": {
          "reference": "urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112",
          "display": "Example Encounter"
        },
        "date": "2021-10-25T20:16:29-07:00",
        "author": [
          {
            "reference": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc",
            "display": "Example Practitioner"
          }
        ],
        "title": "Active Conditions",
        "attester": [
          {
            "mode": "legal",
            "time": "2021-10-25T20:16:29-07:00",
            "party": {
              "reference": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc",
              "display": "Example Practitioner"
            }
          }
        ],
        "section": [
          {
            "title": "Active Condition 1",
            "entry": [
              {
                "reference": "urn:uuid:014a68ec-d691-49e0-b980-91b0d924e570"
              }
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc",
      "resource": {
        "resourceType": "Practitioner",
        "id": "0820c16d-91de-4dfa-a3a6-f140a516a9bc",
        "meta": {
          "lastUpdated": "2013-05-05T16:13:03Z"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource \"0820c16d-91de-4dfa-a3a6-f140a516a9bc\" Updated \"2013-05-05T16:13:03Z\" </p></div><p><b>name</b>: John Hancock </p></div>"
        },
        "name": [
          {
            "family": "Hancock",
            "given": [
              "John"
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece",
      "resource": {
        "resourceType": "Patient",
        "id": "970af6c9-5bbd-4067-b6c1-d9b2c823aece",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource \"970af6c9-5bbd-4067-b6c1-d9b2c823aece\" </p></div><p><b>active</b>: true</p><p><b>name</b>: CDEX Example Patient</p></div>"
        },
        "active": true,
        "name": [
          {
            "text": "CDEX Example Patient",
            "family": "Patient",
            "given": [
              "CDEX Example"
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "urn:uuid:014a68ec-d691-49e0-b980-91b0d924e570",
      "resource": {
        "resourceType": "Condition",
        "id": "014a68ec-d691-49e0-b980-91b0d924e570",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource \"014a68ec-d691-49e0-b980-91b0d924e570\" </p></div><p><b>identifier</b>: id: 1</p><p><b>clinicalStatus</b>: Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/3.0.0/CodeSystem-condition-clinical.html\">Condition Clinical Status Codes</a>#active)</span></p><p><b>category</b>: Problem <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#55607006; <a href=\"https://loinc.org/\">LOINC</a>#75326-9)</span></p><p><b>code</b>: Type 2 Diabetes Mellitus <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#44054006)</span></p><p><b>subject</b>: <a href=\"#Patient_970af6c9-5bbd-4067-b6c1-d9b2c823aece\">See above (urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece)</a></p><p><b>onset</b>: 2006-01-01</p><p><b>asserter</b>: <a href=\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\">See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc)</a></p></div>"
        },
        "identifier": [
          {
            "system": "urn:oid:1.3.6.1.4.1.22812.4.111.0.4.1.2.1",
            "value": "1"
          }
        ],
        "clinicalStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
              "code": "active"
            }
          ]
        },
        "category": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "55607006",
                "display": "Problem"
              },
              {
                "system": "http://loinc.org",
                "code": "75326-9",
                "display": "Problem"
              }
            ]
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "44054006",
              "display": "Type 2 Diabetes Mellitus"
            }
          ]
        },
        "subject": {
          "reference": "urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"
        },
        "onsetDateTime": "2006",
        "asserter": {
          "reference": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112",
      "resource": {
        "resourceType": "Encounter",
        "id": "5ce5c83a-000f-47d2-941c-039358cc9112",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource \"5ce5c83a-000f-47d2-941c-039358cc9112\" </p></div><p><b>status</b>: finished</p><p><b>class</b>: emergency (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code EMER = 'emergency', stated as 'null')</p><p><b>type</b>: Unknown (qualifier value) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#261665006)</span></p><p><b>subject</b>: <a href=\"#Patient_970af6c9-5bbd-4067-b6c1-d9b2c823aece\">See above (urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece: CDEX Example Patient)</a></p><h3>Participants</h3><table class=\"grid\"><tr><td>-</td><td><b>Individual</b></td></tr><tr><td>*</td><td><a href=\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\">See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: John Hancock)</a></td></tr></table><p><b>period</b>: 2021-10-25T20:10:29-07:00 --&gt; 2021-10-25T20:16:29-07:00</p><p><b>serviceProvider</b>: <a href=\"#Organization_e37f004b-dc10-422b-b833-cdaa10a055a3\">See above (urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3: CDEX Example Organization)</a></p></div>"
        },
        "status": "finished",
        "class": {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "EMER"
        },
        "type": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "261665006",
                "display": "Unknown (qualifier value)"
              }
            ],
            "text": "Unknown (qualifier value)"
          }
        ],
        "subject": {
          "reference": "urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece",
          "display": "CDEX Example Patient"
        },
        "participant": [
          {
            "individual": {
              "reference": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc",
              "display": "John Hancock"
            }
          }
        ],
        "period": {
          "start": "2021-10-25T20:10:29-07:00",
          "end": "2021-10-25T20:16:29-07:00"
        },
        "serviceProvider": {
          "reference": "urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3",
          "display": "CDEX Example Organization"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3",
      "resource": {
        "resourceType": "Organization",
        "id": "e37f004b-dc10-422b-b833-cdaa10a055a3",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource \"e37f004b-dc10-422b-b833-cdaa10a055a3\" </p></div><p><b>active</b>: true</p><p><b>name</b>: CDEX Example Organization</p><p><b>telecom</b>: ph: (+1) 555-555-5555, <a href=\"mailto:customer-service@example.org\">customer-service@example.org</a></p><p><b>address</b>: 1 CDEX Lane Boston MA 01002 USA </p></div>"
        },
        "active": true,
        "name": "CDEX Example Organization",
        "telecom": [
          {
            "system": "phone",
            "value": "(+1) 555-555-5555"
          },
          {
            "system": "email",
            "value": "customer-service@example.org"
          }
        ],
        "address": [
          {
            "line": [
              "1 CDEX Lane"
            ],
            "city": "Boston",
            "state": "MA",
            "postalCode": "01002",
            "country": "USA"
          }
        ]
      }
    }
  ]
}'''
document_bundle = loads(document_bundle) #convert to Python object
document_bundle_id = document_bundle.pop("id") # remove id
document_bundle_meta = document_bundle.pop("meta") # remove meta
payload = canonicalize(document_bundle)
payload
```

<pre style="border:0; overflow-wrap:break-word;">
b'{"entry":[{"fullUrl":"urn:uuid:17a80a8d-4cf1-4deb-a1fd-2db1130e5f76","resource":{"attester":[{"mode":"legal","party":{"display":"Example Practitioner","reference":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"},"time":"2021-10-25T20:16:29-07:00"}],"author":[{"display":"Example Practitioner","reference":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"}],"date":"2021-10-25T20:16:29-07:00","encounter":{"display":"Example Encounter","reference":"urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112"},"id":"17a80a8d-4cf1-4deb-a1fd-2db1130e5f76","resourceType":"Composition","section":[{"entry":[{"reference":"urn:uuid:014a68ec-d691-49e0-b980-91b0d924e570"}],"title":"Active Condition 1"}],"status":"final","subject":{"display":"Example Patient","reference":"urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"},"text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"17a80a8d-4cf1-4deb-a1fd-2db1130e5f76\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;status&lt;/b&gt;: final&lt;/p&gt;&lt;p&gt;&lt;b&gt;type&lt;/b&gt;: Medical records &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"https://loinc.org/\\"&gt;LOINC&lt;/a&gt;#11503-0)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;encounter&lt;/b&gt;: &lt;a href=\\"#Encounter_5ce5c83a-000f-47d2-941c-039358cc9112\\"&gt;See above (urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112: Example Encounter)&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;date&lt;/b&gt;: 2021-10-25T20:16:29-07:00&lt;/p&gt;&lt;p&gt;&lt;b&gt;author&lt;/b&gt;: &lt;a href=\\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: Example Practitioner)&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;title&lt;/b&gt;: Active Conditions&lt;/p&gt;&lt;h3&gt;Attesters&lt;/h3&gt;&lt;table class=\\"grid\\"&gt;&lt;tr&gt;&lt;td&gt;-&lt;/td&gt;&lt;td&gt;&lt;b&gt;Mode&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;Time&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;Party&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;*&lt;/td&gt;&lt;td&gt;legal&lt;/td&gt;&lt;td&gt;2021-10-25T20:16:29-07:00&lt;/td&gt;&lt;td&gt;&lt;a href=\\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: Example Practitioner)&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;","status":"generated"},"title":"Active Conditions","type":{"coding":[{"code":"11503-0","system":"http://loinc.org"}],"text":"Medical records"}}},{"fullUrl":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc","resource":{"id":"0820c16d-91de-4dfa-a3a6-f140a516a9bc","meta":{"lastUpdated":"2013-05-05T16:13:03Z"},"name":[{"family":"Hancock","given":["John"]}],"resourceType":"Practitioner","text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"0820c16d-91de-4dfa-a3a6-f140a516a9bc\\" Updated \\"2013-05-05T16:13:03Z\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;name&lt;/b&gt;: John Hancock &lt;/p&gt;&lt;/div&gt;","status":"generated"}}},{"fullUrl":"urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece","resource":{"active":true,"id":"970af6c9-5bbd-4067-b6c1-d9b2c823aece","name":[{"family":"Patient","given":["CDEX Example"],"text":"CDEX Example Patient"}],"resourceType":"Patient","text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"970af6c9-5bbd-4067-b6c1-d9b2c823aece\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;active&lt;/b&gt;: true&lt;/p&gt;&lt;p&gt;&lt;b&gt;name&lt;/b&gt;: CDEX Example Patient&lt;/p&gt;&lt;/div&gt;","status":"generated"}}},{"fullUrl":"urn:uuid:014a68ec-d691-49e0-b980-91b0d924e570","resource":{"asserter":{"reference":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"},"category":[{"coding":[{"code":"55607006","display":"Problem","system":"http://snomed.info/sct"},{"code":"75326-9","display":"Problem","system":"http://loinc.org"}]}],"clinicalStatus":{"coding":[{"code":"active","system":"http://terminology.hl7.org/CodeSystem/condition-clinical"}]},"code":{"coding":[{"code":"44054006","display":"Type 2 Diabetes Mellitus","system":"http://snomed.info/sct"}]},"id":"014a68ec-d691-49e0-b980-91b0d924e570","identifier":[{"system":"urn:oid:1.3.6.1.4.1.22812.4.111.0.4.1.2.1","value":"1"}],"onsetDateTime":"2006","resourceType":"Condition","subject":{"reference":"urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"},"text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"014a68ec-d691-49e0-b980-91b0d924e570\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;identifier&lt;/b&gt;: id: 1&lt;/p&gt;&lt;p&gt;&lt;b&gt;clinicalStatus&lt;/b&gt;: Active &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"http://terminology.hl7.org/3.0.0/CodeSystem-condition-clinical.html\\"&gt;Condition Clinical Status Codes&lt;/a&gt;#active)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;category&lt;/b&gt;: Problem &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"https://browser.ihtsdotools.org/\\"&gt;SNOMED CT&lt;/a&gt;#55607006; &lt;a href=\\"https://loinc.org/\\"&gt;LOINC&lt;/a&gt;#75326-9)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;code&lt;/b&gt;: Type 2 Diabetes Mellitus &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"https://browser.ihtsdotools.org/\\"&gt;SNOMED CT&lt;/a&gt;#44054006)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;subject&lt;/b&gt;: &lt;a href=\\"#Patient_970af6c9-5bbd-4067-b6c1-d9b2c823aece\\"&gt;See above (urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece)&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;onset&lt;/b&gt;: 2006-01-01&lt;/p&gt;&lt;p&gt;&lt;b&gt;asserter&lt;/b&gt;: &lt;a href=\\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc)&lt;/a&gt;&lt;/p&gt;&lt;/div&gt;","status":"generated"}}},{"fullUrl":"urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112","resource":{"class":{"code":"EMER","system":"http://terminology.hl7.org/CodeSystem/v3-ActCode"},"id":"5ce5c83a-000f-47d2-941c-039358cc9112","participant":[{"individual":{"display":"John Hancock","reference":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"}}],"period":{"end":"2021-10-25T20:16:29-07:00","start":"2021-10-25T20:10:29-07:00"},"resourceType":"Encounter","serviceProvider":{"display":"CDEX Example Organization","reference":"urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3"},"status":"finished","subject":{"display":"CDEX Example Patient","reference":"urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"},"text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"5ce5c83a-000f-47d2-941c-039358cc9112\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;status&lt;/b&gt;: finished&lt;/p&gt;&lt;p&gt;&lt;b&gt;class&lt;/b&gt;: emergency (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code EMER = \'emergency\', stated as \'null\')&lt;/p&gt;&lt;p&gt;&lt;b&gt;type&lt;/b&gt;: Unknown (qualifier value) &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"https://browser.ihtsdotools.org/\\"&gt;SNOMED CT&lt;/a&gt;#261665006)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;subject&lt;/b&gt;: &lt;a href=\\"#Patient_970af6c9-5bbd-4067-b6c1-d9b2c823aece\\"&gt;See above (urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece: CDEX Example Patient)&lt;/a&gt;&lt;/p&gt;&lt;h3&gt;Participants&lt;/h3&gt;&lt;table class=\\"grid\\"&gt;&lt;tr&gt;&lt;td&gt;-&lt;/td&gt;&lt;td&gt;&lt;b&gt;Individual&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;*&lt;/td&gt;&lt;td&gt;&lt;a href=\\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: John Hancock)&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;p&gt;&lt;b&gt;period&lt;/b&gt;: 2021-10-25T20:10:29-07:00 --&gt; 2021-10-25T20:16:29-07:00&lt;/p&gt;&lt;p&gt;&lt;b&gt;serviceProvider&lt;/b&gt;: &lt;a href=\\"#Organization_e37f004b-dc10-422b-b833-cdaa10a055a3\\"&gt;See above (urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3: CDEX Example Organization)&lt;/a&gt;&lt;/p&gt;&lt;/div&gt;","status":"generated"},"type":[{"coding":[{"code":"261665006","display":"Unknown (qualifier value)","system":"http://snomed.info/sct"}],"text":"Unknown (qualifier value)"}]}},{"fullUrl":"urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3","resource":{"active":true,"address":[{"city":"Boston","country":"USA","line":["1 CDEX Lane"],"postalCode":"01002","state":"MA"}],"id":"e37f004b-dc10-422b-b833-cdaa10a055a3","name":"CDEX Example Organization","resourceType":"Organization","telecom":[{"system":"phone","value":"(+1) 555-555-5555"},{"system":"email","value":"customer-service@example.org"}],"text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"e37f004b-dc10-422b-b833-cdaa10a055a3\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;active&lt;/b&gt;: true&lt;/p&gt;&lt;p&gt;&lt;b&gt;name&lt;/b&gt;: CDEX Example Organization&lt;/p&gt;&lt;p&gt;&lt;b&gt;telecom&lt;/b&gt;: ph: (+1) 555-555-5555, &lt;a href=\\"mailto:customer-service@example.org\\"&gt;customer-service@example.org&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;address&lt;/b&gt;: 1 CDEX Lane Boston MA 01002 USA &lt;/p&gt;&lt;/div&gt;","status":"generated"}}}],"identifier":{"system":"urn:ietf:rfc:3986","value":"urn:uuid:c173535e-135e-48e3-ab64-38bacc68dba8"},"resourceType":"Bundle","timestamp":"2021-10-25T20:16:29-07:00","type":"document"}'
</pre>



**3.3 Create Signature using private key and the RS256 algorithm to get the JWS compact serialization format**

note the signature is displayed with the parts labeled and separated with line breaks for easier viewing.


```python
from jose import jws
with open('private-key.pem') as f:
    private_key = (f.read())

signature = jws.sign(payload,private_key,algorithm='RS256',headers=header)

labels = ['header', 'payload', 'signature']
for i,j in enumerate(signature.split('.')):
    print(f'{labels[i]}:')
    print(f'{j}')
    print()
```

<pre style="border:0; overflow-wrap:break-word;">
header:
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ

payload:
eyJlbnRyeSI6W3siZnVsbFVybCI6InVybjp1dWlkOjE3YTgwYThkLTRjZjEtNGRlYi1hMWZkLTJkYjExMzBlNWY3NiIsInJlc291cmNlIjp7ImF0dGVzdGVyIjpbeyJtb2RlIjoibGVnYWwiLCJwYXJ0eSI6eyJkaXNwbGF5IjoiRXhhbXBsZSBQcmFjdGl0aW9uZXIiLCJyZWZlcmVuY2UiOiJ1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMifSwidGltZSI6IjIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDAifV0sImF1dGhvciI6W3siZGlzcGxheSI6IkV4YW1wbGUgUHJhY3RpdGlvbmVyIiwicmVmZXJlbmNlIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIn1dLCJkYXRlIjoiMjAyMS0xMC0yNVQyMDoxNjoyOS0wNzowMCIsImVuY291bnRlciI6eyJkaXNwbGF5IjoiRXhhbXBsZSBFbmNvdW50ZXIiLCJyZWZlcmVuY2UiOiJ1cm46dXVpZDo1Y2U1YzgzYS0wMDBmLTQ3ZDItOTQxYy0wMzkzNThjYzkxMTIifSwiaWQiOiIxN2E4MGE4ZC00Y2YxLTRkZWItYTFmZC0yZGIxMTMwZTVmNzYiLCJyZXNvdXJjZVR5cGUiOiJDb21wb3NpdGlvbiIsInNlY3Rpb24iOlt7ImVudHJ5IjpbeyJyZWZlcmVuY2UiOiJ1cm46dXVpZDowMTRhNjhlYy1kNjkxLTQ5ZTAtYjk4MC05MWIwZDkyNGU1NzAifV0sInRpdGxlIjoiQWN0aXZlIENvbmRpdGlvbiAxIn1dLCJzdGF0dXMiOiJmaW5hbCIsInN1YmplY3QiOnsiZGlzcGxheSI6IkV4YW1wbGUgUGF0aWVudCIsInJlZmVyZW5jZSI6InVybjp1dWlkOjk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZSJ9LCJ0ZXh0Ijp7ImRpdiI6IjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI-PHA-PGI-R2VuZXJhdGVkIE5hcnJhdGl2ZTwvYj48L3A-PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTBlNzsgcGFkZGluZzogNnB4OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQgIzhkYTFiNDsgYm9yZGVyLXJhZGl1czogNXB4OyBsaW5lLWhlaWdodDogNjAlXCI-PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHhcIj5SZXNvdXJjZSBcIjE3YTgwYThkLTRjZjEtNGRlYi1hMWZkLTJkYjExMzBlNWY3NlwiIDwvcD48L2Rpdj48cD48Yj5zdGF0dXM8L2I-OiBmaW5hbDwvcD48cD48Yj50eXBlPC9iPjogTWVkaWNhbCByZWNvcmRzIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vbG9pbmMub3JnL1wiPkxPSU5DPC9hPiMxMTUwMy0wKTwvc3Bhbj48L3A-PHA-PGI-ZW5jb3VudGVyPC9iPjogPGEgaHJlZj1cIiNFbmNvdW50ZXJfNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyXCI-U2VlIGFib3ZlICh1cm46dXVpZDo1Y2U1YzgzYS0wMDBmLTQ3ZDItOTQxYy0wMzkzNThjYzkxMTI6IEV4YW1wbGUgRW5jb3VudGVyKTwvYT48L3A-PHA-PGI-ZGF0ZTwvYj46IDIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDA8L3A-PHA-PGI-YXV0aG9yPC9iPjogPGEgaHJlZj1cIiNQcmFjdGl0aW9uZXJfMDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjXCI-U2VlIGFib3ZlICh1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmM6IEV4YW1wbGUgUHJhY3RpdGlvbmVyKTwvYT48L3A-PHA-PGI-dGl0bGU8L2I-OiBBY3RpdmUgQ29uZGl0aW9uczwvcD48aDM-QXR0ZXN0ZXJzPC9oMz48dGFibGUgY2xhc3M9XCJncmlkXCI-PHRyPjx0ZD4tPC90ZD48dGQ-PGI-TW9kZTwvYj48L3RkPjx0ZD48Yj5UaW1lPC9iPjwvdGQ-PHRkPjxiPlBhcnR5PC9iPjwvdGQ-PC90cj48dHI-PHRkPio8L3RkPjx0ZD5sZWdhbDwvdGQ-PHRkPjIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDA8L3RkPjx0ZD48YSBocmVmPVwiI1ByYWN0aXRpb25lcl8wODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmNcIj5TZWUgYWJvdmUgKHVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYzogRXhhbXBsZSBQcmFjdGl0aW9uZXIpPC9hPjwvdGQ-PC90cj48L3RhYmxlPjwvZGl2PiIsInN0YXR1cyI6ImdlbmVyYXRlZCJ9LCJ0aXRsZSI6IkFjdGl2ZSBDb25kaXRpb25zIiwidHlwZSI6eyJjb2RpbmciOlt7ImNvZGUiOiIxMTUwMy0wIiwic3lzdGVtIjoiaHR0cDovL2xvaW5jLm9yZyJ9XSwidGV4dCI6Ik1lZGljYWwgcmVjb3JkcyJ9fX0seyJmdWxsVXJsIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIiwicmVzb3VyY2UiOnsiaWQiOiIwODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMiLCJtZXRhIjp7Imxhc3RVcGRhdGVkIjoiMjAxMy0wNS0wNVQxNjoxMzowM1oifSwibmFtZSI6W3siZmFtaWx5IjoiSGFuY29jayIsImdpdmVuIjpbIkpvaG4iXX1dLCJyZXNvdXJjZVR5cGUiOiJQcmFjdGl0aW9uZXIiLCJ0ZXh0Ijp7ImRpdiI6IjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI-PHA-PGI-R2VuZXJhdGVkIE5hcnJhdGl2ZTwvYj48L3A-PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTBlNzsgcGFkZGluZzogNnB4OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQgIzhkYTFiNDsgYm9yZGVyLXJhZGl1czogNXB4OyBsaW5lLWhlaWdodDogNjAlXCI-PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHhcIj5SZXNvdXJjZSBcIjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliY1wiIFVwZGF0ZWQgXCIyMDEzLTA1LTA1VDE2OjEzOjAzWlwiIDwvcD48L2Rpdj48cD48Yj5uYW1lPC9iPjogSm9obiBIYW5jb2NrIDwvcD48L2Rpdj4iLCJzdGF0dXMiOiJnZW5lcmF0ZWQifX19LHsiZnVsbFVybCI6InVybjp1dWlkOjk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZSIsInJlc291cmNlIjp7ImFjdGl2ZSI6dHJ1ZSwiaWQiOiI5NzBhZjZjOS01YmJkLTQwNjctYjZjMS1kOWIyYzgyM2FlY2UiLCJuYW1lIjpbeyJmYW1pbHkiOiJQYXRpZW50IiwiZ2l2ZW4iOlsiQ0RFWCBFeGFtcGxlIl0sInRleHQiOiJDREVYIEV4YW1wbGUgUGF0aWVudCJ9XSwicmVzb3VyY2VUeXBlIjoiUGF0aWVudCIsInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiOTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlXCIgPC9wPjwvZGl2PjxwPjxiPmFjdGl2ZTwvYj46IHRydWU8L3A-PHA-PGI-bmFtZTwvYj46IENERVggRXhhbXBsZSBQYXRpZW50PC9wPjwvZGl2PiIsInN0YXR1cyI6ImdlbmVyYXRlZCJ9fX0seyJmdWxsVXJsIjoidXJuOnV1aWQ6MDE0YTY4ZWMtZDY5MS00OWUwLWI5ODAtOTFiMGQ5MjRlNTcwIiwicmVzb3VyY2UiOnsiYXNzZXJ0ZXIiOnsicmVmZXJlbmNlIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIn0sImNhdGVnb3J5IjpbeyJjb2RpbmciOlt7ImNvZGUiOiI1NTYwNzAwNiIsImRpc3BsYXkiOiJQcm9ibGVtIiwic3lzdGVtIjoiaHR0cDovL3Nub21lZC5pbmZvL3NjdCJ9LHsiY29kZSI6Ijc1MzI2LTkiLCJkaXNwbGF5IjoiUHJvYmxlbSIsInN5c3RlbSI6Imh0dHA6Ly9sb2luYy5vcmcifV19XSwiY2xpbmljYWxTdGF0dXMiOnsiY29kaW5nIjpbeyJjb2RlIjoiYWN0aXZlIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb25kaXRpb24tY2xpbmljYWwifV19LCJjb2RlIjp7ImNvZGluZyI6W3siY29kZSI6IjQ0MDU0MDA2IiwiZGlzcGxheSI6IlR5cGUgMiBEaWFiZXRlcyBNZWxsaXR1cyIsInN5c3RlbSI6Imh0dHA6Ly9zbm9tZWQuaW5mby9zY3QifV19LCJpZCI6IjAxNGE2OGVjLWQ2OTEtNDllMC1iOTgwLTkxYjBkOTI0ZTU3MCIsImlkZW50aWZpZXIiOlt7InN5c3RlbSI6InVybjpvaWQ6MS4zLjYuMS40LjEuMjI4MTIuNC4xMTEuMC40LjEuMi4xIiwidmFsdWUiOiIxIn1dLCJvbnNldERhdGVUaW1lIjoiMjAwNiIsInJlc291cmNlVHlwZSI6IkNvbmRpdGlvbiIsInN1YmplY3QiOnsicmVmZXJlbmNlIjoidXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlIn0sInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiMDE0YTY4ZWMtZDY5MS00OWUwLWI5ODAtOTFiMGQ5MjRlNTcwXCIgPC9wPjwvZGl2PjxwPjxiPmlkZW50aWZpZXI8L2I-OiBpZDogMTwvcD48cD48Yj5jbGluaWNhbFN0YXR1czwvYj46IEFjdGl2ZSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQ6IExpZ2h0R29sZGVuUm9kWWVsbG93OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQga2hha2lcIj4gKDxhIGhyZWY9XCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy8zLjAuMC9Db2RlU3lzdGVtLWNvbmRpdGlvbi1jbGluaWNhbC5odG1sXCI-Q29uZGl0aW9uIENsaW5pY2FsIFN0YXR1cyBDb2RlczwvYT4jYWN0aXZlKTwvc3Bhbj48L3A-PHA-PGI-Y2F0ZWdvcnk8L2I-OiBQcm9ibGVtIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vYnJvd3Nlci5paHRzZG90b29scy5vcmcvXCI-U05PTUVEIENUPC9hPiM1NTYwNzAwNjsgPGEgaHJlZj1cImh0dHBzOi8vbG9pbmMub3JnL1wiPkxPSU5DPC9hPiM3NTMyNi05KTwvc3Bhbj48L3A-PHA-PGI-Y29kZTwvYj46IFR5cGUgMiBEaWFiZXRlcyBNZWxsaXR1cyA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQ6IExpZ2h0R29sZGVuUm9kWWVsbG93OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQga2hha2lcIj4gKDxhIGhyZWY9XCJodHRwczovL2Jyb3dzZXIuaWh0c2RvdG9vbHMub3JnL1wiPlNOT01FRCBDVDwvYT4jNDQwNTQwMDYpPC9zcGFuPjwvcD48cD48Yj5zdWJqZWN0PC9iPjogPGEgaHJlZj1cIiNQYXRpZW50Xzk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZVwiPlNlZSBhYm92ZSAodXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlKTwvYT48L3A-PHA-PGI-b25zZXQ8L2I-OiAyMDA2LTAxLTAxPC9wPjxwPjxiPmFzc2VydGVyPC9iPjogPGEgaHJlZj1cIiNQcmFjdGl0aW9uZXJfMDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjXCI-U2VlIGFib3ZlICh1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMpPC9hPjwvcD48L2Rpdj4iLCJzdGF0dXMiOiJnZW5lcmF0ZWQifX19LHsiZnVsbFVybCI6InVybjp1dWlkOjVjZTVjODNhLTAwMGYtNDdkMi05NDFjLTAzOTM1OGNjOTExMiIsInJlc291cmNlIjp7ImNsYXNzIjp7ImNvZGUiOiJFTUVSIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlIn0sImlkIjoiNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyIiwicGFydGljaXBhbnQiOlt7ImluZGl2aWR1YWwiOnsiZGlzcGxheSI6IkpvaG4gSGFuY29jayIsInJlZmVyZW5jZSI6InVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYyJ9fV0sInBlcmlvZCI6eyJlbmQiOiIyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwIiwic3RhcnQiOiIyMDIxLTEwLTI1VDIwOjEwOjI5LTA3OjAwIn0sInJlc291cmNlVHlwZSI6IkVuY291bnRlciIsInNlcnZpY2VQcm92aWRlciI6eyJkaXNwbGF5IjoiQ0RFWCBFeGFtcGxlIE9yZ2FuaXphdGlvbiIsInJlZmVyZW5jZSI6InVybjp1dWlkOmUzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhMyJ9LCJzdGF0dXMiOiJmaW5pc2hlZCIsInN1YmplY3QiOnsiZGlzcGxheSI6IkNERVggRXhhbXBsZSBQYXRpZW50IiwicmVmZXJlbmNlIjoidXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlIn0sInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyXCIgPC9wPjwvZGl2PjxwPjxiPnN0YXR1czwvYj46IGZpbmlzaGVkPC9wPjxwPjxiPmNsYXNzPC9iPjogZW1lcmdlbmN5IChEZXRhaWxzOiBodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGUgY29kZSBFTUVSID0gJ2VtZXJnZW5jeScsIHN0YXRlZCBhcyAnbnVsbCcpPC9wPjxwPjxiPnR5cGU8L2I-OiBVbmtub3duIChxdWFsaWZpZXIgdmFsdWUpIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vYnJvd3Nlci5paHRzZG90b29scy5vcmcvXCI-U05PTUVEIENUPC9hPiMyNjE2NjUwMDYpPC9zcGFuPjwvcD48cD48Yj5zdWJqZWN0PC9iPjogPGEgaHJlZj1cIiNQYXRpZW50Xzk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZVwiPlNlZSBhYm92ZSAodXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlOiBDREVYIEV4YW1wbGUgUGF0aWVudCk8L2E-PC9wPjxoMz5QYXJ0aWNpcGFudHM8L2gzPjx0YWJsZSBjbGFzcz1cImdyaWRcIj48dHI-PHRkPi08L3RkPjx0ZD48Yj5JbmRpdmlkdWFsPC9iPjwvdGQ-PC90cj48dHI-PHRkPio8L3RkPjx0ZD48YSBocmVmPVwiI1ByYWN0aXRpb25lcl8wODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmNcIj5TZWUgYWJvdmUgKHVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYzogSm9obiBIYW5jb2NrKTwvYT48L3RkPjwvdHI-PC90YWJsZT48cD48Yj5wZXJpb2Q8L2I-OiAyMDIxLTEwLTI1VDIwOjEwOjI5LTA3OjAwIC0tJmd0OyAyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwPC9wPjxwPjxiPnNlcnZpY2VQcm92aWRlcjwvYj46IDxhIGhyZWY9XCIjT3JnYW5pemF0aW9uX2UzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhM1wiPlNlZSBhYm92ZSAodXJuOnV1aWQ6ZTM3ZjAwNGItZGMxMC00MjJiLWI4MzMtY2RhYTEwYTA1NWEzOiBDREVYIEV4YW1wbGUgT3JnYW5pemF0aW9uKTwvYT48L3A-PC9kaXY-Iiwic3RhdHVzIjoiZ2VuZXJhdGVkIn0sInR5cGUiOlt7ImNvZGluZyI6W3siY29kZSI6IjI2MTY2NTAwNiIsImRpc3BsYXkiOiJVbmtub3duIChxdWFsaWZpZXIgdmFsdWUpIiwic3lzdGVtIjoiaHR0cDovL3Nub21lZC5pbmZvL3NjdCJ9XSwidGV4dCI6IlVua25vd24gKHF1YWxpZmllciB2YWx1ZSkifV19fSx7ImZ1bGxVcmwiOiJ1cm46dXVpZDplMzdmMDA0Yi1kYzEwLTQyMmItYjgzMy1jZGFhMTBhMDU1YTMiLCJyZXNvdXJjZSI6eyJhY3RpdmUiOnRydWUsImFkZHJlc3MiOlt7ImNpdHkiOiJCb3N0b24iLCJjb3VudHJ5IjoiVVNBIiwibGluZSI6WyIxIENERVggTGFuZSJdLCJwb3N0YWxDb2RlIjoiMDEwMDIiLCJzdGF0ZSI6Ik1BIn1dLCJpZCI6ImUzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhMyIsIm5hbWUiOiJDREVYIEV4YW1wbGUgT3JnYW5pemF0aW9uIiwicmVzb3VyY2VUeXBlIjoiT3JnYW5pemF0aW9uIiwidGVsZWNvbSI6W3sic3lzdGVtIjoicGhvbmUiLCJ2YWx1ZSI6IigrMSkgNTU1LTU1NS01NTU1In0seyJzeXN0ZW0iOiJlbWFpbCIsInZhbHVlIjoiY3VzdG9tZXItc2VydmljZUBleGFtcGxlLm9yZyJ9XSwidGV4dCI6eyJkaXYiOiI8ZGl2IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPjxwPjxiPkdlbmVyYXRlZCBOYXJyYXRpdmU8L2I-PC9wPjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJhY2tncm91bmQtY29sb3I6ICNkOWUwZTc7IHBhZGRpbmc6IDZweDsgbWFyZ2luOiA0cHg7IGJvcmRlcjogMXB4IHNvbGlkICM4ZGExYjQ7IGJvcmRlci1yYWRpdXM6IDVweDsgbGluZS1oZWlnaHQ6IDYwJVwiPjxwIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMHB4XCI-UmVzb3VyY2UgXCJlMzdmMDA0Yi1kYzEwLTQyMmItYjgzMy1jZGFhMTBhMDU1YTNcIiA8L3A-PC9kaXY-PHA-PGI-YWN0aXZlPC9iPjogdHJ1ZTwvcD48cD48Yj5uYW1lPC9iPjogQ0RFWCBFeGFtcGxlIE9yZ2FuaXphdGlvbjwvcD48cD48Yj50ZWxlY29tPC9iPjogcGg6ICgrMSkgNTU1LTU1NS01NTU1LCA8YSBocmVmPVwibWFpbHRvOmN1c3RvbWVyLXNlcnZpY2VAZXhhbXBsZS5vcmdcIj5jdXN0b21lci1zZXJ2aWNlQGV4YW1wbGUub3JnPC9hPjwvcD48cD48Yj5hZGRyZXNzPC9iPjogMSBDREVYIExhbmUgQm9zdG9uIE1BIDAxMDAyIFVTQSA8L3A-PC9kaXY-Iiwic3RhdHVzIjoiZ2VuZXJhdGVkIn19fV0sImlkZW50aWZpZXIiOnsic3lzdGVtIjoidXJuOmlldGY6cmZjOjM5ODYiLCJ2YWx1ZSI6InVybjp1dWlkOmMxNzM1MzVlLTEzNWUtNDhlMy1hYjY0LTM4YmFjYzY4ZGJhOCJ9LCJyZXNvdXJjZVR5cGUiOiJCdW5kbGUiLCJ0aW1lc3RhbXAiOiIyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwIiwidHlwZSI6ImRvY3VtZW50In0

signature:
JAET6A3W8KXfOYOE-gM4yfSmN0uMInsj3CrMUtQRcOKZ4V4I9-aZxavMXUnuoIznKj9rBir-O8tFCfjbLjrkXv4SVVuuLiFOW4YigjRYH_Dg4LuwiT72kYGoRYVH14rqSVYCOEBVnWAVT25xAJ05Lu5z2Z5JQ5ReuLIjXd8rSYZbpLaF8jBxKWFBo_L2_6RtqTdNo3OkRYgtP5NgiwtOIyoWBw-XBaXAtFtNdWCU14vOk_tJJ0Sg6lYojE881qWUsi1BgFWfswa1xJXIa8XcpA_-kdTvlYiO2ZJOqXuyJt2_xjA9AV4mx3Tmmxl7q6xcgyOlQBKLBUWJUGET_1ddHdVV6uIC_93OyO9FL_Szw3iWElGLtXerLbEHGlDmR8OJU--NaJCeyDVnbYAeLEkeSu6Kpc0K_nrZzvr8Rn-_nI3C1UjXSN24th_sOkYbQ63NsFgifJlyY8uLS-uu6jWd3Wadydq7J6haX9BB9wtB0bRWzqYutvCYlvygxzFAD9ui
</pre>


**3.4. Create detached payload by removing the payload from the JWS**

note the signature is displayed with the parts labeled and separated with line breaks for easier viewing then as compact serialization format


```python
split_sig = signature.split('.')
split_sig[1] = ''
signature = '.'.join(split_sig)
for i,j in enumerate(signature.split('.')):
    print(f'{labels[i]}:')
    print(f'{j}')
    print()
print(f'\nSignature in compact serialization format:\n{"="*80}\n{signature}')
```

<pre style="border:0; overflow-wrap:break-word;">
header:
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ

payload:


signature:
JAET6A3W8KXfOYOE-gM4yfSmN0uMInsj3CrMUtQRcOKZ4V4I9-aZxavMXUnuoIznKj9rBir-O8tFCfjbLjrkXv4SVVuuLiFOW4YigjRYH_Dg4LuwiT72kYGoRYVH14rqSVYCOEBVnWAVT25xAJ05Lu5z2Z5JQ5ReuLIjXd8rSYZbpLaF8jBxKWFBo_L2_6RtqTdNo3OkRYgtP5NgiwtOIyoWBw-XBaXAtFtNdWCU14vOk_tJJ0Sg6lYojE881qWUsi1BgFWfswa1xJXIa8XcpA_-kdTvlYiO2ZJOqXuyJt2_xjA9AV4mx3Tmmxl7q6xcgyOlQBKLBUWJUGET_1ddHdVV6uIC_93OyO9FL_Szw3iWElGLtXerLbEHGlDmR8OJU--NaJCeyDVnbYAeLEkeSu6Kpc0K_nrZzvr8Rn-_nI3C1UjXSN24th_sOkYbQ63NsFgifJlyY8uLS-uu6jWd3Wadydq7J6haX9BB9wtB0bRWzqYutvCYlvygxzFAD9ui


Signature in compact serialization format:
================================================================================
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ..JAET6A3W8KXfOYOE-gM4yfSmN0uMInsj3CrMUtQRcOKZ4V4I9-aZxavMXUnuoIznKj9rBir-O8tFCfjbLjrkXv4SVVuuLiFOW4YigjRYH_Dg4LuwiT72kYGoRYVH14rqSVYCOEBVnWAVT25xAJ05Lu5z2Z5JQ5ReuLIjXd8rSYZbpLaF8jBxKWFBo_L2_6RtqTdNo3OkRYgtP5NgiwtOIyoWBw-XBaXAtFtNdWCU14vOk_tJJ0Sg6lYojE881qWUsi1BgFWfswa1xJXIa8XcpA_-kdTvlYiO2ZJOqXuyJt2_xjA9AV4mx3Tmmxl7q6xcgyOlQBKLBUWJUGET_1ddHdVV6uIC_93OyO9FL_Szw3iWElGLtXerLbEHGlDmR8OJU--NaJCeyDVnbYAeLEkeSu6Kpc0K_nrZzvr8Rn-_nI3C1UjXSN24th_sOkYbQ63NsFgifJlyY8uLS-uu6jWd3Wadydq7J6haX9BB9wtB0bRWzqYutvCYlvygxzFAD9ui
</pre>

**4. base64 the JWS and add the Signature element to the Bundle**

this is what would be contained and/or referenced by TASK over-the-wire


```python
from base64 import b64encode
from json import loads,dumps
b64_jws = b64encode(signature.encode()).decode()
sig_element = {
            "type": [  # Signature.type = Verification Signature
              {
                "system": "urn:iso-astm:E1762-95:2013",
                "code": "1.2.840.10065.1.12.1.5",
                "display": "Verification Signature"
              }
            ],
            "when": "2021-10-05T22:42:19-07:00", #system timestamp when signature created
            "who": { #Reference to the Practitioner who signed and attested to the Bundle
              "reference": "Practitioner/123"    
            },
            "onBehalfOf": { #Reference to the Organization
              "reference": "Organization/123"   
            },
            "data": b64_jws,
             }

document_bundle = loads(payload)
document_bundle['id'] = document_bundle_id # add id back in
document_bundle['meta'] = document_bundle_meta # add meta back in
document_bundle['signature'] = sig_element
print(dumps(document_bundle, indent=2))
```

<pre style="border:0; overflow-wrap:break-word;">
{
  "entry": [
    {
      "fullUrl": "urn:uuid:17a80a8d-4cf1-4deb-a1fd-2db1130e5f76",
      "resource": {
        "attester": [
          {
            "mode": "legal",
            "party": {
              "display": "Example Practitioner",
              "reference": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"
            },
            "time": "2021-10-25T20:16:29-07:00"
          }
        ],
        "author": [
          {
            "display": "Example Practitioner",
            "reference": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"
          }
        ],
        "date": "2021-10-25T20:16:29-07:00",
        "encounter": {
          "display": "Example Encounter",
          "reference": "urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112"
        },
        "id": "17a80a8d-4cf1-4deb-a1fd-2db1130e5f76",
        "resourceType": "Composition",
        "section": [
          {
            "entry": [
              {
                "reference": "urn:uuid:014a68ec-d691-49e0-b980-91b0d924e570"
              }
            ],
            "title": "Active Condition 1"
          }
        ],
        "status": "final",
        "subject": {
          "display": "Example Patient",
          "reference": "urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"
        },
        "text": {
          "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"&gt;&lt;p style=\"margin-bottom: 0px\"&gt;Resource \"17a80a8d-4cf1-4deb-a1fd-2db1130e5f76\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;status&lt;/b&gt;: final&lt;/p&gt;&lt;p&gt;&lt;b&gt;type&lt;/b&gt;: Medical records &lt;span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"&gt; (&lt;a href=\"https://loinc.org/\"&gt;LOINC&lt;/a&gt;#11503-0)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;encounter&lt;/b&gt;: &lt;a href=\"#Encounter_5ce5c83a-000f-47d2-941c-039358cc9112\"&gt;See above (urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112: Example Encounter)&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;date&lt;/b&gt;: 2021-10-25T20:16:29-07:00&lt;/p&gt;&lt;p&gt;&lt;b&gt;author&lt;/b&gt;: &lt;a href=\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: Example Practitioner)&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;title&lt;/b&gt;: Active Conditions&lt;/p&gt;&lt;h3&gt;Attesters&lt;/h3&gt;&lt;table class=\"grid\"&gt;&lt;tr&gt;&lt;td&gt;-&lt;/td&gt;&lt;td&gt;&lt;b&gt;Mode&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;Time&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;Party&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;*&lt;/td&gt;&lt;td&gt;legal&lt;/td&gt;&lt;td&gt;2021-10-25T20:16:29-07:00&lt;/td&gt;&lt;td&gt;&lt;a href=\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: Example Practitioner)&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;",
          "status": "generated"
        },
        "title": "Active Conditions",
        "type": {
          "coding": [
            {
              "code": "11503-0",
              "system": "http://loinc.org"
            }
          ],
          "text": "Medical records"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc",
      "resource": {
        "id": "0820c16d-91de-4dfa-a3a6-f140a516a9bc",
        "meta": {
          "lastUpdated": "2013-05-05T16:13:03Z"
        },
        "name": [
          {
            "family": "Hancock",
            "given": [
              "John"
            ]
          }
        ],
        "resourceType": "Practitioner",
        "text": {
          "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"&gt;&lt;p style=\"margin-bottom: 0px\"&gt;Resource \"0820c16d-91de-4dfa-a3a6-f140a516a9bc\" Updated \"2013-05-05T16:13:03Z\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;name&lt;/b&gt;: John Hancock &lt;/p&gt;&lt;/div&gt;",
          "status": "generated"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece",
      "resource": {
        "active": true,
        "id": "970af6c9-5bbd-4067-b6c1-d9b2c823aece",
        "name": [
          {
            "family": "Patient",
            "given": [
              "CDEX Example"
            ],
            "text": "CDEX Example Patient"
          }
        ],
        "resourceType": "Patient",
        "text": {
          "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"&gt;&lt;p style=\"margin-bottom: 0px\"&gt;Resource \"970af6c9-5bbd-4067-b6c1-d9b2c823aece\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;active&lt;/b&gt;: true&lt;/p&gt;&lt;p&gt;&lt;b&gt;name&lt;/b&gt;: CDEX Example Patient&lt;/p&gt;&lt;/div&gt;",
          "status": "generated"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:014a68ec-d691-49e0-b980-91b0d924e570",
      "resource": {
        "asserter": {
          "reference": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"
        },
        "category": [
          {
            "coding": [
              {
                "code": "55607006",
                "display": "Problem",
                "system": "http://snomed.info/sct"
              },
              {
                "code": "75326-9",
                "display": "Problem",
                "system": "http://loinc.org"
              }
            ]
          }
        ],
        "clinicalStatus": {
          "coding": [
            {
              "code": "active",
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical"
            }
          ]
        },
        "code": {
          "coding": [
            {
              "code": "44054006",
              "display": "Type 2 Diabetes Mellitus",
              "system": "http://snomed.info/sct"
            }
          ]
        },
        "id": "014a68ec-d691-49e0-b980-91b0d924e570",
        "identifier": [
          {
            "system": "urn:oid:1.3.6.1.4.1.22812.4.111.0.4.1.2.1",
            "value": "1"
          }
        ],
        "onsetDateTime": "2006",
        "resourceType": "Condition",
        "subject": {
          "reference": "urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"
        },
        "text": {
          "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"&gt;&lt;p style=\"margin-bottom: 0px\"&gt;Resource \"014a68ec-d691-49e0-b980-91b0d924e570\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;identifier&lt;/b&gt;: id: 1&lt;/p&gt;&lt;p&gt;&lt;b&gt;clinicalStatus&lt;/b&gt;: Active &lt;span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"&gt; (&lt;a href=\"http://terminology.hl7.org/3.0.0/CodeSystem-condition-clinical.html\"&gt;Condition Clinical Status Codes&lt;/a&gt;#active)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;category&lt;/b&gt;: Problem &lt;span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"&gt; (&lt;a href=\"https://browser.ihtsdotools.org/\"&gt;SNOMED CT&lt;/a&gt;#55607006; &lt;a href=\"https://loinc.org/\"&gt;LOINC&lt;/a&gt;#75326-9)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;code&lt;/b&gt;: Type 2 Diabetes Mellitus &lt;span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"&gt; (&lt;a href=\"https://browser.ihtsdotools.org/\"&gt;SNOMED CT&lt;/a&gt;#44054006)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;subject&lt;/b&gt;: &lt;a href=\"#Patient_970af6c9-5bbd-4067-b6c1-d9b2c823aece\"&gt;See above (urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece)&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;onset&lt;/b&gt;: 2006-01-01&lt;/p&gt;&lt;p&gt;&lt;b&gt;asserter&lt;/b&gt;: &lt;a href=\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc)&lt;/a&gt;&lt;/p&gt;&lt;/div&gt;",
          "status": "generated"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112",
      "resource": {
        "class": {
          "code": "EMER",
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode"
        },
        "id": "5ce5c83a-000f-47d2-941c-039358cc9112",
        "participant": [
          {
            "individual": {
              "display": "John Hancock",
              "reference": "urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"
            }
          }
        ],
        "period": {
          "end": "2021-10-25T20:16:29-07:00",
          "start": "2021-10-25T20:10:29-07:00"
        },
        "resourceType": "Encounter",
        "serviceProvider": {
          "display": "CDEX Example Organization",
          "reference": "urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3"
        },
        "status": "finished",
        "subject": {
          "display": "CDEX Example Patient",
          "reference": "urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"
        },
        "text": {
          "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"&gt;&lt;p style=\"margin-bottom: 0px\"&gt;Resource \"5ce5c83a-000f-47d2-941c-039358cc9112\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;status&lt;/b&gt;: finished&lt;/p&gt;&lt;p&gt;&lt;b&gt;class&lt;/b&gt;: emergency (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code EMER = 'emergency', stated as 'null')&lt;/p&gt;&lt;p&gt;&lt;b&gt;type&lt;/b&gt;: Unknown (qualifier value) &lt;span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"&gt; (&lt;a href=\"https://browser.ihtsdotools.org/\"&gt;SNOMED CT&lt;/a&gt;#261665006)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;subject&lt;/b&gt;: &lt;a href=\"#Patient_970af6c9-5bbd-4067-b6c1-d9b2c823aece\"&gt;See above (urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece: CDEX Example Patient)&lt;/a&gt;&lt;/p&gt;&lt;h3&gt;Participants&lt;/h3&gt;&lt;table class=\"grid\"&gt;&lt;tr&gt;&lt;td&gt;-&lt;/td&gt;&lt;td&gt;&lt;b&gt;Individual&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;*&lt;/td&gt;&lt;td&gt;&lt;a href=\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: John Hancock)&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;p&gt;&lt;b&gt;period&lt;/b&gt;: 2021-10-25T20:10:29-07:00 --&gt; 2021-10-25T20:16:29-07:00&lt;/p&gt;&lt;p&gt;&lt;b&gt;serviceProvider&lt;/b&gt;: &lt;a href=\"#Organization_e37f004b-dc10-422b-b833-cdaa10a055a3\"&gt;See above (urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3: CDEX Example Organization)&lt;/a&gt;&lt;/p&gt;&lt;/div&gt;",
          "status": "generated"
        },
        "type": [
          {
            "coding": [
              {
                "code": "261665006",
                "display": "Unknown (qualifier value)",
                "system": "http://snomed.info/sct"
              }
            ],
            "text": "Unknown (qualifier value)"
          }
        ]
      }
    },
    {
      "fullUrl": "urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3",
      "resource": {
        "active": true,
        "address": [
          {
            "city": "Boston",
            "country": "USA",
            "line": [
              "1 CDEX Lane"
            ],
            "postalCode": "01002",
            "state": "MA"
          }
        ],
        "id": "e37f004b-dc10-422b-b833-cdaa10a055a3",
        "name": "CDEX Example Organization",
        "resourceType": "Organization",
        "telecom": [
          {
            "system": "phone",
            "value": "(+1) 555-555-5555"
          },
          {
            "system": "email",
            "value": "customer-service@example.org"
          }
        ],
        "text": {
          "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"&gt;&lt;p style=\"margin-bottom: 0px\"&gt;Resource \"e37f004b-dc10-422b-b833-cdaa10a055a3\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;active&lt;/b&gt;: true&lt;/p&gt;&lt;p&gt;&lt;b&gt;name&lt;/b&gt;: CDEX Example Organization&lt;/p&gt;&lt;p&gt;&lt;b&gt;telecom&lt;/b&gt;: ph: (+1) 555-555-5555, &lt;a href=\"mailto:customer-service@example.org\"&gt;customer-service@example.org&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;address&lt;/b&gt;: 1 CDEX Lane Boston MA 01002 USA &lt;/p&gt;&lt;/div&gt;",
          "status": "generated"
        }
      }
    }
  ],
  "identifier": {
    "system": "urn:ietf:rfc:3986",
    "value": "urn:uuid:c173535e-135e-48e3-ab64-38bacc68dba8"
  },
  "resourceType": "Bundle",
  "timestamp": "2021-10-25T20:16:29-07:00",
  "type": "document",
  "id": "cdex-document-digital-sig-example",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "CDEX Document with Digital Signature Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "Digital signature example showing how it is used to sign a FHIR Document.  The CDEX use case would be the target resource in response to a Task-based request where an digital signature was required.  If no signature was required, the response would typically be in the form of an individual resource."
      }
    ]
  },
  "signature": {
    "type": [
      {
        "system": "urn:iso-astm:E1762-95:2013",
        "code": "1.2.840.10065.1.12.1.5",
        "display": "Verification Signature"
      }
    ],
    "when": "2021-10-05T22:42:19-07:00",
    "who": {
      "reference": "Practitioner/123"
    },
    "onBehalfOf": {
      "reference": "Organization/123"
    },
    "data": "ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXQwZVNJNklsSlRJaXdpZEhsd0lqb2lTbGRVSWl3aWVEVmpJanBiSWsxSlNVVXpla05EUVRCbFowRjNTVUpCWjBsS1FVOUxSbGwyVFhkU0szbFJUVUV3UjBOVGNVZFRTV0l6UkZGRlFrTjNWVUZOU1VkT1RWRnpkME5SV1VSV1VWRkhSWGRLVmxWNlJWUk5Ra1ZIUVRGVlJVTkJkMHRSTWtaellWZGFkbU50TlhCWlZFVlRUVUpCUjBFeFZVVkNkM2RLVlRKR01XTXlSbk5oV0ZKMlRWSlZkMFYzV1VSV1VWRkxSRUY0U1ZwWFJuTmtSMmhzVWtkR01GbFVSWGhHZWtGV1FtZE9Wa0pCVFUxRWExWjVZVmROWjFOSFJtaGplWGRuVWtaYVRrMVRWWGRKZDFsS1MyOWFTV2gyWTA1QlVXdENSbWhhYkdGSFJtaGpNRUp2V2xkR2MyUkhhR3hhUjBZd1dWUkZkV0l6U201TlFqUllSRlJKZUUxVVFYbE9la1V6VGtSSmQwNUdiMWhFVkVsNVRWUkJlVTFxUlROT1JFbDNUa1p2ZDJkWk1IaERla0ZLUW1kT1ZrSkJXVlJCYkZaVVRWSk5kMFZSV1VSV1VWRkpSRUZ3UkZsWGVIQmFiVGw1WW0xc2FFMVNTWGRGUVZsRVZsRlJTRVJCYkZSWldGWjZXVmQ0Y0dSSE9IaEdWRUZVUW1kT1ZrSkJiMDFFUldoc1dWZDRNR0ZIVmtWWldGSm9UVlJGV0UxQ1ZVZEJNVlZGUVhkM1QxSllTbkJaZVVKSldWZEdla3hEUWtWV2F6QjRTbFJCYWtKbmEzRm9hMmxIT1hjd1FrTlJSVmRHYlZadldWZEdlbEZIYUd4WlYzZ3dZVWRXYTFsWVVtaE5VelYyWTIxamQyZG5SMmxOUVRCSFExTnhSMU5KWWpORVVVVkNRVkZWUVVFMFNVSnFkMEYzWjJkSFMwRnZTVUpuVVVSd1MyTlRhMjlCVFRaelZ6SXhLM1pYVkdWSlZrOUhlREV3VFZkaGMxRjVOMVpJYVdRMmVubHhXRUZDVFN0NmJtWkNibGhsYm5sVk1Hb3hSbFIyVUcxU1prOUViMDlFV0ZaMVVGVjNSRzl0YUVOSWFDdGlZMnhYT1V0Tk1tODFOak5qZUZKTFJYWkNibUZJY25OcWR6VjVUbTE0VHpWWmFrVlNZbWgwU0dSUlpYRnJkR1IzTTFaWlJWSlNPVWh2ZUV4UE0wWnJjM3BTTWpreVNGUkNOSGhYTTNsWGJGWXpaMVJyVFZGdmVsQlRZMHBMU0ROaVJ6aFFjWEUyUVZsUVNqZERORmxDU1d4VlUyUkNUVlpzTTNGdVpVVm1aemRtZFhocFJtWlliMlprVkZadE4zSk5hV2xITjFnNWVqUXpVR1pwYkhGaFpXbHpabTEwVW5oQmJGSjNSVTVZY2tnelQzWlBSRkI1VERCeVZHNUhPRU56WWtGWVdWWkpUVzFrWkVobE5GcEdPWEJzYURrMWMybzBjRTFVYUV4MFkwcFlMMjg1V0VoTWFtZzNSVzFhZVdkS1NGZEZVWEUwVUhkR2QxcGtiV0pqWm1oRGJVOXlPRGhJT0VKaVZYSjFMemRXTm5waWMwY3hUakZEVjJ4dVpHeGlWbnB1VENzelNVMVBjamhyV0dGSVkyRnVjV1pqYTJkR1ZqUkZjbTVtYWtaS2NURlBTV0ZCYlhOTmFqZzFlRTFyYW5sWVRIbGpURXd2ZFRWdU1tODJRbWM1TXk5VlVtWnhkVTl2VTBsSFQwTlNNalZFWVZwNmNIY3lhek56TjI5Rk9XUk5kMFZYV0hSbVdHZFpkR2d5WW14cWVUVjBSa2d3UjJwd1QydDRNRGRxTjFwVU5VaHVlRzVzYzBOQmQwVkJRV0ZPUVUxRU5IZEVRVmxFVmxJd1ZFSkJWWGRCZDBWQ0wzcEJURUpuVGxaSVVUaEZRa0ZOUTBKbFFYZEpVVmxFVmxJd1VrSkNiM2RIU1VsWFpETmtNMHh0YUd4WlYzZ3dZVWRXYTFsWVVtaGhWelZxVEcxT2RtSlVRVTVDWjJ0eGFHdHBSemwzTUVKQlVYTkdRVUZQUTBGWlJVRkRkVTFWVG5FNVlYa3JLMlUxV1VNM1VVWlBPVFJ5Wm5wNFIxRnVSak5IYTJ4YVRrRlliVWx5TjFCV1IyUnBSMWt5UjFSNEx6bFNkRWhEZDFSTGVtdE1LM2wyUzI5cVpWbzVaRlpMT0hkeVIxWnBVbXRQTDJwVmVWb3JTMk5YVW05clZXcHpOVGx1WTBwSFVrMVRVMUo0ZEdWRFVYVnFkRFJvWmpJckwzRldLMll5YzAxUmRFVnlkMUJGTXpCMlluRlNXVlZPVGs1Q1ZrVlJjR0ZSZUM5aFkwcEVWWFk1ZGpkemFraHBTa1J4V0hkUkszSjZhamsxYVVoQlNXRmxSVWh4Umk5TmN6SXljREppWlZwMWNYWkpVVXRsVFd3cmMzWldjVWgwYVhWNlYyNUdORlUyVmtsdGNHdHlOR0pJYkRkbFoxWTVTRFpzTmxReVUwMXJhalp4UkZVMVpUbE9aekJhYkV4VWRHOXpjMmhDVEcxdmNFWTNaVGRJZVhKVVJVRnRaazlRUzFGbE1FVm5PVVV5ZFhKNmVIRkNkVWMxTkdzMU1FY3lTakJHYVZCelVVcEJhRVpwVGtkM1UyYzBVek5JZVZaRVJ6ZDFaVXRrTUV3NU0zZExUMDVQV1VkMlRVdHBla05JUWl0d1MzWkZUVXB2V2poNU9YVnBRaXRJUmxoamNEbFNZVXB4U2prM1NIQmFWRVYySzJ4cFEzQXlVRk5ZZW1OTE1ISXlOVk5qZVdwR05tUk1iM1ZMTWxOQ016QjRRWFpLT0hSRk5UZzBLMnB4VVRaRFIyVmpWVGxZYW5ac1FXcDFTbVJEY2tSbFZsQnphbXR1TjA5UVdFY3JPRmhhVlRkNmNVaGFUbTFZV0RGWldUUklOWEpuUlVvME9HeHlWWEpRTTBrNFVpSmRmUS4uSkFFVDZBM1c4S1hmT1lPRS1nTTR5ZlNtTjB1TUluc2ozQ3JNVXRRUmNPS1o0VjRJOS1hWnhhdk1YVW51b0l6bktqOXJCaXItTzh0RkNmamJManJrWHY0U1ZWdXVMaUZPVzRZaWdqUllIX0RnNEx1d2lUNzJrWUdvUllWSDE0cnFTVllDT0VCVm5XQVZUMjV4QUowNUx1NXoyWjVKUTVSZXVMSWpYZDhyU1laYnBMYUY4akJ4S1dGQm9fTDJfNlJ0cVRkTm8zT2tSWWd0UDVOZ2l3dE9JeW9XQnctWEJhWEF0RnROZFdDVTE0dk9rX3RKSjBTZzZsWW9qRTg4MXFXVXNpMUJnRldmc3dhMXhKWElhOFhjcEFfLWtkVHZsWWlPMlpKT3FYdXlKdDJfeGpBOUFWNG14M1RtbXhsN3E2eGNneU9sUUJLTEJVV0pVR0VUXzFkZEhkVlY2dUlDXzkzT3lPOUZMX1N6dzNpV0VsR0x0WGVyTGJFSEdsRG1SOE9KVS0tTmFKQ2V5RFZuYllBZUxFa2VTdTZLcGMwS19uclp6dnI4Um4tX25JM0MxVWpYU04yNHRoX3NPa1liUTYzTnNGZ2lmSmx5WTh1TFMtdXU2aldkM1dhZHlkcTdKNmhhWDlCQjl3dEIwYlJXenFZdXR2Q1lsdnlneHpGQUQ5dWk="
  }
}

</pre>

### Receiver/Verifier Steps

**1. Remove the `Bundle.signature` element from the Search Bundle resource**

- For this example using the python dictionary object from above, but in real life, it would be contained and/or Referenced by TASK over-the-wire. Therefore it would need to be 'decontained' and/or fetched and stored in order to perform these next steps.


```python
try:
  recd_signature = document_bundle.pop("signature")
except:
  pass
recd_signature
```




<pre style="border:0; overflow-wrap:break-word;">
{'type': [{'system': 'urn:iso-astm:E1762-95:2013',
   'code': '1.2.840.10065.1.12.1.5',
   'display': 'Verification Signature'}],
 'when': '2021-10-05T22:42:19-07:00',
 'who': {'reference': 'Practitioner/123'},
 'onBehalfOf': {'reference': 'Organization/123'},
 'data': 'ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXQwZVNJNklsSlRJaXdpZEhsd0lqb2lTbGRVSWl3aWVEVmpJanBiSWsxSlNVVXpla05EUVRCbFowRjNTVUpCWjBsS1FVOUxSbGwyVFhkU0szbFJUVUV3UjBOVGNVZFRTV0l6UkZGRlFrTjNWVUZOU1VkT1RWRnpkME5SV1VSV1VWRkhSWGRLVmxWNlJWUk5Ra1ZIUVRGVlJVTkJkMHRSTWtaellWZGFkbU50TlhCWlZFVlRUVUpCUjBFeFZVVkNkM2RLVlRKR01XTXlSbk5oV0ZKMlRWSlZkMFYzV1VSV1VWRkxSRUY0U1ZwWFJuTmtSMmhzVWtkR01GbFVSWGhHZWtGV1FtZE9Wa0pCVFUxRWExWjVZVmROWjFOSFJtaGplWGRuVWtaYVRrMVRWWGRKZDFsS1MyOWFTV2gyWTA1QlVXdENSbWhhYkdGSFJtaGpNRUp2V2xkR2MyUkhhR3hhUjBZd1dWUkZkV0l6U201TlFqUllSRlJKZUUxVVFYbE9la1V6VGtSSmQwNUdiMWhFVkVsNVRWUkJlVTFxUlROT1JFbDNUa1p2ZDJkWk1IaERla0ZLUW1kT1ZrSkJXVlJCYkZaVVRWSk5kMFZSV1VSV1VWRkpSRUZ3UkZsWGVIQmFiVGw1WW0xc2FFMVNTWGRGUVZsRVZsRlJTRVJCYkZSWldGWjZXVmQ0Y0dSSE9IaEdWRUZVUW1kT1ZrSkJiMDFFUldoc1dWZDRNR0ZIVmtWWldGSm9UVlJGV0UxQ1ZVZEJNVlZGUVhkM1QxSllTbkJaZVVKSldWZEdla3hEUWtWV2F6QjRTbFJCYWtKbmEzRm9hMmxIT1hjd1FrTlJSVmRHYlZadldWZEdlbEZIYUd4WlYzZ3dZVWRXYTFsWVVtaE5VelYyWTIxamQyZG5SMmxOUVRCSFExTnhSMU5KWWpORVVVVkNRVkZWUVVFMFNVSnFkMEYzWjJkSFMwRnZTVUpuVVVSd1MyTlRhMjlCVFRaelZ6SXhLM1pYVkdWSlZrOUhlREV3VFZkaGMxRjVOMVpJYVdRMmVubHhXRUZDVFN0NmJtWkNibGhsYm5sVk1Hb3hSbFIyVUcxU1prOUViMDlFV0ZaMVVGVjNSRzl0YUVOSWFDdGlZMnhYT1V0Tk1tODFOak5qZUZKTFJYWkNibUZJY25OcWR6VjVUbTE0VHpWWmFrVlNZbWgwU0dSUlpYRnJkR1IzTTFaWlJWSlNPVWh2ZUV4UE0wWnJjM3BTTWpreVNGUkNOSGhYTTNsWGJGWXpaMVJyVFZGdmVsQlRZMHBMU0ROaVJ6aFFjWEUyUVZsUVNqZERORmxDU1d4VlUyUkNUVlpzTTNGdVpVVm1aemRtZFhocFJtWlliMlprVkZadE4zSk5hV2xITjFnNWVqUXpVR1pwYkhGaFpXbHpabTEwVW5oQmJGSjNSVTVZY2tnelQzWlBSRkI1VERCeVZHNUhPRU56WWtGWVdWWkpUVzFrWkVobE5GcEdPWEJzYURrMWMybzBjRTFVYUV4MFkwcFlMMjg1V0VoTWFtZzNSVzFhZVdkS1NGZEZVWEUwVUhkR2QxcGtiV0pqWm1oRGJVOXlPRGhJT0VKaVZYSjFMemRXTm5waWMwY3hUakZEVjJ4dVpHeGlWbnB1VENzelNVMVBjamhyV0dGSVkyRnVjV1pqYTJkR1ZqUkZjbTVtYWtaS2NURlBTV0ZCYlhOTmFqZzFlRTFyYW5sWVRIbGpURXd2ZFRWdU1tODJRbWM1TXk5VlVtWnhkVTl2VTBsSFQwTlNNalZFWVZwNmNIY3lhek56TjI5Rk9XUk5kMFZYV0hSbVdHZFpkR2d5WW14cWVUVjBSa2d3UjJwd1QydDRNRGRxTjFwVU5VaHVlRzVzYzBOQmQwVkJRV0ZPUVUxRU5IZEVRVmxFVmxJd1ZFSkJWWGRCZDBWQ0wzcEJURUpuVGxaSVVUaEZRa0ZOUTBKbFFYZEpVVmxFVmxJd1VrSkNiM2RIU1VsWFpETmtNMHh0YUd4WlYzZ3dZVWRXYTFsWVVtaGhWelZxVEcxT2RtSlVRVTVDWjJ0eGFHdHBSemwzTUVKQlVYTkdRVUZQUTBGWlJVRkRkVTFWVG5FNVlYa3JLMlUxV1VNM1VVWlBPVFJ5Wm5wNFIxRnVSak5IYTJ4YVRrRlliVWx5TjFCV1IyUnBSMWt5UjFSNEx6bFNkRWhEZDFSTGVtdE1LM2wyUzI5cVpWbzVaRlpMT0hkeVIxWnBVbXRQTDJwVmVWb3JTMk5YVW05clZXcHpOVGx1WTBwSFVrMVRVMUo0ZEdWRFVYVnFkRFJvWmpJckwzRldLMll5YzAxUmRFVnlkMUJGTXpCMlluRlNXVlZPVGs1Q1ZrVlJjR0ZSZUM5aFkwcEVWWFk1ZGpkemFraHBTa1J4V0hkUkszSjZhamsxYVVoQlNXRmxSVWh4Umk5TmN6SXljREppWlZwMWNYWkpVVXRsVFd3cmMzWldjVWgwYVhWNlYyNUdORlUyVmtsdGNHdHlOR0pJYkRkbFoxWTVTRFpzTmxReVUwMXJhalp4UkZVMVpUbE9aekJhYkV4VWRHOXpjMmhDVEcxdmNFWTNaVGRJZVhKVVJVRnRaazlRUzFGbE1FVm5PVVV5ZFhKNmVIRkNkVWMxTkdzMU1FY3lTakJHYVZCelVVcEJhRVpwVGtkM1UyYzBVek5JZVZaRVJ6ZDFaVXRrTUV3NU0zZExUMDVQV1VkMlRVdHBla05JUWl0d1MzWkZUVXB2V2poNU9YVnBRaXRJUmxoamNEbFNZVXB4U2prM1NIQmFWRVYySzJ4cFEzQXlVRk5ZZW1OTE1ISXlOVk5qZVdwR05tUk1iM1ZMTWxOQ016QjRRWFpLT0hSRk5UZzBLMnB4VVRaRFIyVmpWVGxZYW5ac1FXcDFTbVJEY2tSbFZsQnphbXR1TjA5UVdFY3JPRmhhVlRkNmNVaGFUbTFZV0RGWldUUklOWEpuUlVvME9HeHlWWEpRTTBrNFVpSmRmUS4uSkFFVDZBM1c4S1hmT1lPRS1nTTR5ZlNtTjB1TUluc2ozQ3JNVXRRUmNPS1o0VjRJOS1hWnhhdk1YVW51b0l6bktqOXJCaXItTzh0RkNmamJManJrWHY0U1ZWdXVMaUZPVzRZaWdqUllIX0RnNEx1d2lUNzJrWUdvUllWSDE0cnFTVllDT0VCVm5XQVZUMjV4QUowNUx1NXoyWjVKUTVSZXVMSWpYZDhyU1laYnBMYUY4akJ4S1dGQm9fTDJfNlJ0cVRkTm8zT2tSWWd0UDVOZ2l3dE9JeW9XQnctWEJhWEF0RnROZFdDVTE0dk9rX3RKSjBTZzZsWW9qRTg4MXFXVXNpMUJnRldmc3dhMXhKWElhOFhjcEFfLWtkVHZsWWlPMlpKT3FYdXlKdDJfeGpBOUFWNG14M1RtbXhsN3E2eGNneU9sUUJLTEJVV0pVR0VUXzFkZEhkVlY2dUlDXzkzT3lPOUZMX1N6dzNpV0VsR0x0WGVyTGJFSEdsRG1SOE9KVS0tTmFKQ2V5RFZuYllBZUxFa2VTdTZLcGMwS19uclp6dnI4Um4tX25JM0MxVWpYU04yNHRoX3NPa1liUTYzTnNGZ2lmSmx5WTh1TFMtdXU2aldkM1dhZHlkcTdKNmhhWDlCQjl3dEIwYlJXenFZdXR2Q1lsdnlneHpGQUQ5dWk='}
</pre>


**2. Canonicalize the bundle using IETF JSON Canonicalization Scheme (JCS):**

- Remove the id and meta elements if present before canonicalization


```python
document_bundle_id = document_bundle.pop("id") # remove id
document_bundle_meta = document_bundle.pop("meta") # remove meta
canonical_bundle = canonicalize(document_bundle)
canonical_bundle
```




<pre style="border:0; overflow-wrap:break-word;">

b'{"entry":[{"fullUrl":"urn:uuid:17a80a8d-4cf1-4deb-a1fd-2db1130e5f76","resource":{"attester":[{"mode":"legal","party":{"display":"Example Practitioner","reference":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"},"time":"2021-10-25T20:16:29-07:00"}],"author":[{"display":"Example Practitioner","reference":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"}],"date":"2021-10-25T20:16:29-07:00","encounter":{"display":"Example Encounter","reference":"urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112"},"id":"17a80a8d-4cf1-4deb-a1fd-2db1130e5f76","resourceType":"Composition","section":[{"entry":[{"reference":"urn:uuid:014a68ec-d691-49e0-b980-91b0d924e570"}],"title":"Active Condition 1"}],"status":"final","subject":{"display":"Example Patient","reference":"urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"},"text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"17a80a8d-4cf1-4deb-a1fd-2db1130e5f76\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;status&lt;/b&gt;: final&lt;/p&gt;&lt;p&gt;&lt;b&gt;type&lt;/b&gt;: Medical records &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"https://loinc.org/\\"&gt;LOINC&lt;/a&gt;#11503-0)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;encounter&lt;/b&gt;: &lt;a href=\\"#Encounter_5ce5c83a-000f-47d2-941c-039358cc9112\\"&gt;See above (urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112: Example Encounter)&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;date&lt;/b&gt;: 2021-10-25T20:16:29-07:00&lt;/p&gt;&lt;p&gt;&lt;b&gt;author&lt;/b&gt;: &lt;a href=\\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: Example Practitioner)&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;title&lt;/b&gt;: Active Conditions&lt;/p&gt;&lt;h3&gt;Attesters&lt;/h3&gt;&lt;table class=\\"grid\\"&gt;&lt;tr&gt;&lt;td&gt;-&lt;/td&gt;&lt;td&gt;&lt;b&gt;Mode&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;Time&lt;/b&gt;&lt;/td&gt;&lt;td&gt;&lt;b&gt;Party&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;*&lt;/td&gt;&lt;td&gt;legal&lt;/td&gt;&lt;td&gt;2021-10-25T20:16:29-07:00&lt;/td&gt;&lt;td&gt;&lt;a href=\\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: Example Practitioner)&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;","status":"generated"},"title":"Active Conditions","type":{"coding":[{"code":"11503-0","system":"http://loinc.org"}],"text":"Medical records"}}},{"fullUrl":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc","resource":{"id":"0820c16d-91de-4dfa-a3a6-f140a516a9bc","meta":{"lastUpdated":"2013-05-05T16:13:03Z"},"name":[{"family":"Hancock","given":["John"]}],"resourceType":"Practitioner","text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"0820c16d-91de-4dfa-a3a6-f140a516a9bc\\" Updated \\"2013-05-05T16:13:03Z\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;name&lt;/b&gt;: John Hancock &lt;/p&gt;&lt;/div&gt;","status":"generated"}}},{"fullUrl":"urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece","resource":{"active":true,"id":"970af6c9-5bbd-4067-b6c1-d9b2c823aece","name":[{"family":"Patient","given":["CDEX Example"],"text":"CDEX Example Patient"}],"resourceType":"Patient","text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"970af6c9-5bbd-4067-b6c1-d9b2c823aece\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;active&lt;/b&gt;: true&lt;/p&gt;&lt;p&gt;&lt;b&gt;name&lt;/b&gt;: CDEX Example Patient&lt;/p&gt;&lt;/div&gt;","status":"generated"}}},{"fullUrl":"urn:uuid:014a68ec-d691-49e0-b980-91b0d924e570","resource":{"asserter":{"reference":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"},"category":[{"coding":[{"code":"55607006","display":"Problem","system":"http://snomed.info/sct"},{"code":"75326-9","display":"Problem","system":"http://loinc.org"}]}],"clinicalStatus":{"coding":[{"code":"active","system":"http://terminology.hl7.org/CodeSystem/condition-clinical"}]},"code":{"coding":[{"code":"44054006","display":"Type 2 Diabetes Mellitus","system":"http://snomed.info/sct"}]},"id":"014a68ec-d691-49e0-b980-91b0d924e570","identifier":[{"system":"urn:oid:1.3.6.1.4.1.22812.4.111.0.4.1.2.1","value":"1"}],"onsetDateTime":"2006","resourceType":"Condition","subject":{"reference":"urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"},"text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"014a68ec-d691-49e0-b980-91b0d924e570\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;identifier&lt;/b&gt;: id: 1&lt;/p&gt;&lt;p&gt;&lt;b&gt;clinicalStatus&lt;/b&gt;: Active &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"http://terminology.hl7.org/3.0.0/CodeSystem-condition-clinical.html\\"&gt;Condition Clinical Status Codes&lt;/a&gt;#active)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;category&lt;/b&gt;: Problem &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"https://browser.ihtsdotools.org/\\"&gt;SNOMED CT&lt;/a&gt;#55607006; &lt;a href=\\"https://loinc.org/\\"&gt;LOINC&lt;/a&gt;#75326-9)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;code&lt;/b&gt;: Type 2 Diabetes Mellitus &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"https://browser.ihtsdotools.org/\\"&gt;SNOMED CT&lt;/a&gt;#44054006)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;subject&lt;/b&gt;: &lt;a href=\\"#Patient_970af6c9-5bbd-4067-b6c1-d9b2c823aece\\"&gt;See above (urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece)&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;onset&lt;/b&gt;: 2006-01-01&lt;/p&gt;&lt;p&gt;&lt;b&gt;asserter&lt;/b&gt;: &lt;a href=\\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc)&lt;/a&gt;&lt;/p&gt;&lt;/div&gt;","status":"generated"}}},{"fullUrl":"urn:uuid:5ce5c83a-000f-47d2-941c-039358cc9112","resource":{"class":{"code":"EMER","system":"http://terminology.hl7.org/CodeSystem/v3-ActCode"},"id":"5ce5c83a-000f-47d2-941c-039358cc9112","participant":[{"individual":{"display":"John Hancock","reference":"urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc"}}],"period":{"end":"2021-10-25T20:16:29-07:00","start":"2021-10-25T20:10:29-07:00"},"resourceType":"Encounter","serviceProvider":{"display":"CDEX Example Organization","reference":"urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3"},"status":"finished","subject":{"display":"CDEX Example Patient","reference":"urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece"},"text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"5ce5c83a-000f-47d2-941c-039358cc9112\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;status&lt;/b&gt;: finished&lt;/p&gt;&lt;p&gt;&lt;b&gt;class&lt;/b&gt;: emergency (Details: http://terminology.hl7.org/CodeSystem/v3-ActCode code EMER = \'emergency\', stated as \'null\')&lt;/p&gt;&lt;p&gt;&lt;b&gt;type&lt;/b&gt;: Unknown (qualifier value) &lt;span style=\\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\\"&gt; (&lt;a href=\\"https://browser.ihtsdotools.org/\\"&gt;SNOMED CT&lt;/a&gt;#261665006)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;subject&lt;/b&gt;: &lt;a href=\\"#Patient_970af6c9-5bbd-4067-b6c1-d9b2c823aece\\"&gt;See above (urn:uuid:970af6c9-5bbd-4067-b6c1-d9b2c823aece: CDEX Example Patient)&lt;/a&gt;&lt;/p&gt;&lt;h3&gt;Participants&lt;/h3&gt;&lt;table class=\\"grid\\"&gt;&lt;tr&gt;&lt;td&gt;-&lt;/td&gt;&lt;td&gt;&lt;b&gt;Individual&lt;/b&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;*&lt;/td&gt;&lt;td&gt;&lt;a href=\\"#Practitioner_0820c16d-91de-4dfa-a3a6-f140a516a9bc\\"&gt;See above (urn:uuid:0820c16d-91de-4dfa-a3a6-f140a516a9bc: John Hancock)&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;p&gt;&lt;b&gt;period&lt;/b&gt;: 2021-10-25T20:10:29-07:00 --&gt; 2021-10-25T20:16:29-07:00&lt;/p&gt;&lt;p&gt;&lt;b&gt;serviceProvider&lt;/b&gt;: &lt;a href=\\"#Organization_e37f004b-dc10-422b-b833-cdaa10a055a3\\"&gt;See above (urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3: CDEX Example Organization)&lt;/a&gt;&lt;/p&gt;&lt;/div&gt;","status":"generated"},"type":[{"coding":[{"code":"261665006","display":"Unknown (qualifier value)","system":"http://snomed.info/sct"}],"text":"Unknown (qualifier value)"}]}},{"fullUrl":"urn:uuid:e37f004b-dc10-422b-b833-cdaa10a055a3","resource":{"active":true,"address":[{"city":"Boston","country":"USA","line":["1 CDEX Lane"],"postalCode":"01002","state":"MA"}],"id":"e37f004b-dc10-422b-b833-cdaa10a055a3","name":"CDEX Example Organization","resourceType":"Organization","telecom":[{"system":"phone","value":"(+1) 555-555-5555"},{"system":"email","value":"customer-service@example.org"}],"text":{"div":"&lt;div xmlns=\\"http://www.w3.org/1999/xhtml\\"&gt;&lt;p&gt;&lt;b&gt;Generated Narrative&lt;/b&gt;&lt;/p&gt;&lt;div style=\\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\\"&gt;&lt;p style=\\"margin-bottom: 0px\\"&gt;Resource \\"e37f004b-dc10-422b-b833-cdaa10a055a3\\" &lt;/p&gt;&lt;/div&gt;&lt;p&gt;&lt;b&gt;active&lt;/b&gt;: true&lt;/p&gt;&lt;p&gt;&lt;b&gt;name&lt;/b&gt;: CDEX Example Organization&lt;/p&gt;&lt;p&gt;&lt;b&gt;telecom&lt;/b&gt;: ph: (+1) 555-555-5555, &lt;a href=\\"mailto:customer-service@example.org\\"&gt;customer-service@example.org&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;address&lt;/b&gt;: 1 CDEX Lane Boston MA 01002 USA &lt;/p&gt;&lt;/div&gt;","status":"generated"}}}],"identifier":{"system":"urn:ietf:rfc:3986","value":"urn:uuid:c173535e-135e-48e3-ab64-38bacc68dba8"},"resourceType":"Bundle","timestamp":"2021-10-25T20:16:29-07:00","type":"document"}'

</pre>



**3. Transform canonicalize Bundle to a base64 format using the Base64-URL algorithm.**


```python
from base64 import urlsafe_b64encode
recd_b64_canonical_bundle  = urlsafe_b64encode(canonical_bundle).decode()
recd_b64_canonical_bundle = recd_b64_canonical_bundle.replace("=","")  #remove padding since decode package doesn't use them
recd_b64_canonical_bundle
```




<pre style="border:0; overflow-wrap:break-word;">

'eyJlbnRyeSI6W3siZnVsbFVybCI6InVybjp1dWlkOjE3YTgwYThkLTRjZjEtNGRlYi1hMWZkLTJkYjExMzBlNWY3NiIsInJlc291cmNlIjp7ImF0dGVzdGVyIjpbeyJtb2RlIjoibGVnYWwiLCJwYXJ0eSI6eyJkaXNwbGF5IjoiRXhhbXBsZSBQcmFjdGl0aW9uZXIiLCJyZWZlcmVuY2UiOiJ1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMifSwidGltZSI6IjIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDAifV0sImF1dGhvciI6W3siZGlzcGxheSI6IkV4YW1wbGUgUHJhY3RpdGlvbmVyIiwicmVmZXJlbmNlIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIn1dLCJkYXRlIjoiMjAyMS0xMC0yNVQyMDoxNjoyOS0wNzowMCIsImVuY291bnRlciI6eyJkaXNwbGF5IjoiRXhhbXBsZSBFbmNvdW50ZXIiLCJyZWZlcmVuY2UiOiJ1cm46dXVpZDo1Y2U1YzgzYS0wMDBmLTQ3ZDItOTQxYy0wMzkzNThjYzkxMTIifSwiaWQiOiIxN2E4MGE4ZC00Y2YxLTRkZWItYTFmZC0yZGIxMTMwZTVmNzYiLCJyZXNvdXJjZVR5cGUiOiJDb21wb3NpdGlvbiIsInNlY3Rpb24iOlt7ImVudHJ5IjpbeyJyZWZlcmVuY2UiOiJ1cm46dXVpZDowMTRhNjhlYy1kNjkxLTQ5ZTAtYjk4MC05MWIwZDkyNGU1NzAifV0sInRpdGxlIjoiQWN0aXZlIENvbmRpdGlvbiAxIn1dLCJzdGF0dXMiOiJmaW5hbCIsInN1YmplY3QiOnsiZGlzcGxheSI6IkV4YW1wbGUgUGF0aWVudCIsInJlZmVyZW5jZSI6InVybjp1dWlkOjk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZSJ9LCJ0ZXh0Ijp7ImRpdiI6IjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI-PHA-PGI-R2VuZXJhdGVkIE5hcnJhdGl2ZTwvYj48L3A-PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTBlNzsgcGFkZGluZzogNnB4OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQgIzhkYTFiNDsgYm9yZGVyLXJhZGl1czogNXB4OyBsaW5lLWhlaWdodDogNjAlXCI-PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHhcIj5SZXNvdXJjZSBcIjE3YTgwYThkLTRjZjEtNGRlYi1hMWZkLTJkYjExMzBlNWY3NlwiIDwvcD48L2Rpdj48cD48Yj5zdGF0dXM8L2I-OiBmaW5hbDwvcD48cD48Yj50eXBlPC9iPjogTWVkaWNhbCByZWNvcmRzIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vbG9pbmMub3JnL1wiPkxPSU5DPC9hPiMxMTUwMy0wKTwvc3Bhbj48L3A-PHA-PGI-ZW5jb3VudGVyPC9iPjogPGEgaHJlZj1cIiNFbmNvdW50ZXJfNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyXCI-U2VlIGFib3ZlICh1cm46dXVpZDo1Y2U1YzgzYS0wMDBmLTQ3ZDItOTQxYy0wMzkzNThjYzkxMTI6IEV4YW1wbGUgRW5jb3VudGVyKTwvYT48L3A-PHA-PGI-ZGF0ZTwvYj46IDIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDA8L3A-PHA-PGI-YXV0aG9yPC9iPjogPGEgaHJlZj1cIiNQcmFjdGl0aW9uZXJfMDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjXCI-U2VlIGFib3ZlICh1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmM6IEV4YW1wbGUgUHJhY3RpdGlvbmVyKTwvYT48L3A-PHA-PGI-dGl0bGU8L2I-OiBBY3RpdmUgQ29uZGl0aW9uczwvcD48aDM-QXR0ZXN0ZXJzPC9oMz48dGFibGUgY2xhc3M9XCJncmlkXCI-PHRyPjx0ZD4tPC90ZD48dGQ-PGI-TW9kZTwvYj48L3RkPjx0ZD48Yj5UaW1lPC9iPjwvdGQ-PHRkPjxiPlBhcnR5PC9iPjwvdGQ-PC90cj48dHI-PHRkPio8L3RkPjx0ZD5sZWdhbDwvdGQ-PHRkPjIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDA8L3RkPjx0ZD48YSBocmVmPVwiI1ByYWN0aXRpb25lcl8wODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmNcIj5TZWUgYWJvdmUgKHVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYzogRXhhbXBsZSBQcmFjdGl0aW9uZXIpPC9hPjwvdGQ-PC90cj48L3RhYmxlPjwvZGl2PiIsInN0YXR1cyI6ImdlbmVyYXRlZCJ9LCJ0aXRsZSI6IkFjdGl2ZSBDb25kaXRpb25zIiwidHlwZSI6eyJjb2RpbmciOlt7ImNvZGUiOiIxMTUwMy0wIiwic3lzdGVtIjoiaHR0cDovL2xvaW5jLm9yZyJ9XSwidGV4dCI6Ik1lZGljYWwgcmVjb3JkcyJ9fX0seyJmdWxsVXJsIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIiwicmVzb3VyY2UiOnsiaWQiOiIwODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMiLCJtZXRhIjp7Imxhc3RVcGRhdGVkIjoiMjAxMy0wNS0wNVQxNjoxMzowM1oifSwibmFtZSI6W3siZmFtaWx5IjoiSGFuY29jayIsImdpdmVuIjpbIkpvaG4iXX1dLCJyZXNvdXJjZVR5cGUiOiJQcmFjdGl0aW9uZXIiLCJ0ZXh0Ijp7ImRpdiI6IjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI-PHA-PGI-R2VuZXJhdGVkIE5hcnJhdGl2ZTwvYj48L3A-PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTBlNzsgcGFkZGluZzogNnB4OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQgIzhkYTFiNDsgYm9yZGVyLXJhZGl1czogNXB4OyBsaW5lLWhlaWdodDogNjAlXCI-PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHhcIj5SZXNvdXJjZSBcIjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliY1wiIFVwZGF0ZWQgXCIyMDEzLTA1LTA1VDE2OjEzOjAzWlwiIDwvcD48L2Rpdj48cD48Yj5uYW1lPC9iPjogSm9obiBIYW5jb2NrIDwvcD48L2Rpdj4iLCJzdGF0dXMiOiJnZW5lcmF0ZWQifX19LHsiZnVsbFVybCI6InVybjp1dWlkOjk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZSIsInJlc291cmNlIjp7ImFjdGl2ZSI6dHJ1ZSwiaWQiOiI5NzBhZjZjOS01YmJkLTQwNjctYjZjMS1kOWIyYzgyM2FlY2UiLCJuYW1lIjpbeyJmYW1pbHkiOiJQYXRpZW50IiwiZ2l2ZW4iOlsiQ0RFWCBFeGFtcGxlIl0sInRleHQiOiJDREVYIEV4YW1wbGUgUGF0aWVudCJ9XSwicmVzb3VyY2VUeXBlIjoiUGF0aWVudCIsInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiOTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlXCIgPC9wPjwvZGl2PjxwPjxiPmFjdGl2ZTwvYj46IHRydWU8L3A-PHA-PGI-bmFtZTwvYj46IENERVggRXhhbXBsZSBQYXRpZW50PC9wPjwvZGl2PiIsInN0YXR1cyI6ImdlbmVyYXRlZCJ9fX0seyJmdWxsVXJsIjoidXJuOnV1aWQ6MDE0YTY4ZWMtZDY5MS00OWUwLWI5ODAtOTFiMGQ5MjRlNTcwIiwicmVzb3VyY2UiOnsiYXNzZXJ0ZXIiOnsicmVmZXJlbmNlIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIn0sImNhdGVnb3J5IjpbeyJjb2RpbmciOlt7ImNvZGUiOiI1NTYwNzAwNiIsImRpc3BsYXkiOiJQcm9ibGVtIiwic3lzdGVtIjoiaHR0cDovL3Nub21lZC5pbmZvL3NjdCJ9LHsiY29kZSI6Ijc1MzI2LTkiLCJkaXNwbGF5IjoiUHJvYmxlbSIsInN5c3RlbSI6Imh0dHA6Ly9sb2luYy5vcmcifV19XSwiY2xpbmljYWxTdGF0dXMiOnsiY29kaW5nIjpbeyJjb2RlIjoiYWN0aXZlIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb25kaXRpb24tY2xpbmljYWwifV19LCJjb2RlIjp7ImNvZGluZyI6W3siY29kZSI6IjQ0MDU0MDA2IiwiZGlzcGxheSI6IlR5cGUgMiBEaWFiZXRlcyBNZWxsaXR1cyIsInN5c3RlbSI6Imh0dHA6Ly9zbm9tZWQuaW5mby9zY3QifV19LCJpZCI6IjAxNGE2OGVjLWQ2OTEtNDllMC1iOTgwLTkxYjBkOTI0ZTU3MCIsImlkZW50aWZpZXIiOlt7InN5c3RlbSI6InVybjpvaWQ6MS4zLjYuMS40LjEuMjI4MTIuNC4xMTEuMC40LjEuMi4xIiwidmFsdWUiOiIxIn1dLCJvbnNldERhdGVUaW1lIjoiMjAwNiIsInJlc291cmNlVHlwZSI6IkNvbmRpdGlvbiIsInN1YmplY3QiOnsicmVmZXJlbmNlIjoidXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlIn0sInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiMDE0YTY4ZWMtZDY5MS00OWUwLWI5ODAtOTFiMGQ5MjRlNTcwXCIgPC9wPjwvZGl2PjxwPjxiPmlkZW50aWZpZXI8L2I-OiBpZDogMTwvcD48cD48Yj5jbGluaWNhbFN0YXR1czwvYj46IEFjdGl2ZSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQ6IExpZ2h0R29sZGVuUm9kWWVsbG93OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQga2hha2lcIj4gKDxhIGhyZWY9XCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy8zLjAuMC9Db2RlU3lzdGVtLWNvbmRpdGlvbi1jbGluaWNhbC5odG1sXCI-Q29uZGl0aW9uIENsaW5pY2FsIFN0YXR1cyBDb2RlczwvYT4jYWN0aXZlKTwvc3Bhbj48L3A-PHA-PGI-Y2F0ZWdvcnk8L2I-OiBQcm9ibGVtIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vYnJvd3Nlci5paHRzZG90b29scy5vcmcvXCI-U05PTUVEIENUPC9hPiM1NTYwNzAwNjsgPGEgaHJlZj1cImh0dHBzOi8vbG9pbmMub3JnL1wiPkxPSU5DPC9hPiM3NTMyNi05KTwvc3Bhbj48L3A-PHA-PGI-Y29kZTwvYj46IFR5cGUgMiBEaWFiZXRlcyBNZWxsaXR1cyA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQ6IExpZ2h0R29sZGVuUm9kWWVsbG93OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQga2hha2lcIj4gKDxhIGhyZWY9XCJodHRwczovL2Jyb3dzZXIuaWh0c2RvdG9vbHMub3JnL1wiPlNOT01FRCBDVDwvYT4jNDQwNTQwMDYpPC9zcGFuPjwvcD48cD48Yj5zdWJqZWN0PC9iPjogPGEgaHJlZj1cIiNQYXRpZW50Xzk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZVwiPlNlZSBhYm92ZSAodXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlKTwvYT48L3A-PHA-PGI-b25zZXQ8L2I-OiAyMDA2LTAxLTAxPC9wPjxwPjxiPmFzc2VydGVyPC9iPjogPGEgaHJlZj1cIiNQcmFjdGl0aW9uZXJfMDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjXCI-U2VlIGFib3ZlICh1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMpPC9hPjwvcD48L2Rpdj4iLCJzdGF0dXMiOiJnZW5lcmF0ZWQifX19LHsiZnVsbFVybCI6InVybjp1dWlkOjVjZTVjODNhLTAwMGYtNDdkMi05NDFjLTAzOTM1OGNjOTExMiIsInJlc291cmNlIjp7ImNsYXNzIjp7ImNvZGUiOiJFTUVSIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlIn0sImlkIjoiNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyIiwicGFydGljaXBhbnQiOlt7ImluZGl2aWR1YWwiOnsiZGlzcGxheSI6IkpvaG4gSGFuY29jayIsInJlZmVyZW5jZSI6InVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYyJ9fV0sInBlcmlvZCI6eyJlbmQiOiIyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwIiwic3RhcnQiOiIyMDIxLTEwLTI1VDIwOjEwOjI5LTA3OjAwIn0sInJlc291cmNlVHlwZSI6IkVuY291bnRlciIsInNlcnZpY2VQcm92aWRlciI6eyJkaXNwbGF5IjoiQ0RFWCBFeGFtcGxlIE9yZ2FuaXphdGlvbiIsInJlZmVyZW5jZSI6InVybjp1dWlkOmUzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhMyJ9LCJzdGF0dXMiOiJmaW5pc2hlZCIsInN1YmplY3QiOnsiZGlzcGxheSI6IkNERVggRXhhbXBsZSBQYXRpZW50IiwicmVmZXJlbmNlIjoidXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlIn0sInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyXCIgPC9wPjwvZGl2PjxwPjxiPnN0YXR1czwvYj46IGZpbmlzaGVkPC9wPjxwPjxiPmNsYXNzPC9iPjogZW1lcmdlbmN5IChEZXRhaWxzOiBodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGUgY29kZSBFTUVSID0gJ2VtZXJnZW5jeScsIHN0YXRlZCBhcyAnbnVsbCcpPC9wPjxwPjxiPnR5cGU8L2I-OiBVbmtub3duIChxdWFsaWZpZXIgdmFsdWUpIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vYnJvd3Nlci5paHRzZG90b29scy5vcmcvXCI-U05PTUVEIENUPC9hPiMyNjE2NjUwMDYpPC9zcGFuPjwvcD48cD48Yj5zdWJqZWN0PC9iPjogPGEgaHJlZj1cIiNQYXRpZW50Xzk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZVwiPlNlZSBhYm92ZSAodXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlOiBDREVYIEV4YW1wbGUgUGF0aWVudCk8L2E-PC9wPjxoMz5QYXJ0aWNpcGFudHM8L2gzPjx0YWJsZSBjbGFzcz1cImdyaWRcIj48dHI-PHRkPi08L3RkPjx0ZD48Yj5JbmRpdmlkdWFsPC9iPjwvdGQ-PC90cj48dHI-PHRkPio8L3RkPjx0ZD48YSBocmVmPVwiI1ByYWN0aXRpb25lcl8wODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmNcIj5TZWUgYWJvdmUgKHVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYzogSm9obiBIYW5jb2NrKTwvYT48L3RkPjwvdHI-PC90YWJsZT48cD48Yj5wZXJpb2Q8L2I-OiAyMDIxLTEwLTI1VDIwOjEwOjI5LTA3OjAwIC0tJmd0OyAyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwPC9wPjxwPjxiPnNlcnZpY2VQcm92aWRlcjwvYj46IDxhIGhyZWY9XCIjT3JnYW5pemF0aW9uX2UzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhM1wiPlNlZSBhYm92ZSAodXJuOnV1aWQ6ZTM3ZjAwNGItZGMxMC00MjJiLWI4MzMtY2RhYTEwYTA1NWEzOiBDREVYIEV4YW1wbGUgT3JnYW5pemF0aW9uKTwvYT48L3A-PC9kaXY-Iiwic3RhdHVzIjoiZ2VuZXJhdGVkIn0sInR5cGUiOlt7ImNvZGluZyI6W3siY29kZSI6IjI2MTY2NTAwNiIsImRpc3BsYXkiOiJVbmtub3duIChxdWFsaWZpZXIgdmFsdWUpIiwic3lzdGVtIjoiaHR0cDovL3Nub21lZC5pbmZvL3NjdCJ9XSwidGV4dCI6IlVua25vd24gKHF1YWxpZmllciB2YWx1ZSkifV19fSx7ImZ1bGxVcmwiOiJ1cm46dXVpZDplMzdmMDA0Yi1kYzEwLTQyMmItYjgzMy1jZGFhMTBhMDU1YTMiLCJyZXNvdXJjZSI6eyJhY3RpdmUiOnRydWUsImFkZHJlc3MiOlt7ImNpdHkiOiJCb3N0b24iLCJjb3VudHJ5IjoiVVNBIiwibGluZSI6WyIxIENERVggTGFuZSJdLCJwb3N0YWxDb2RlIjoiMDEwMDIiLCJzdGF0ZSI6Ik1BIn1dLCJpZCI6ImUzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhMyIsIm5hbWUiOiJDREVYIEV4YW1wbGUgT3JnYW5pemF0aW9uIiwicmVzb3VyY2VUeXBlIjoiT3JnYW5pemF0aW9uIiwidGVsZWNvbSI6W3sic3lzdGVtIjoicGhvbmUiLCJ2YWx1ZSI6IigrMSkgNTU1LTU1NS01NTU1In0seyJzeXN0ZW0iOiJlbWFpbCIsInZhbHVlIjoiY3VzdG9tZXItc2VydmljZUBleGFtcGxlLm9yZyJ9XSwidGV4dCI6eyJkaXYiOiI8ZGl2IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPjxwPjxiPkdlbmVyYXRlZCBOYXJyYXRpdmU8L2I-PC9wPjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJhY2tncm91bmQtY29sb3I6ICNkOWUwZTc7IHBhZGRpbmc6IDZweDsgbWFyZ2luOiA0cHg7IGJvcmRlcjogMXB4IHNvbGlkICM4ZGExYjQ7IGJvcmRlci1yYWRpdXM6IDVweDsgbGluZS1oZWlnaHQ6IDYwJVwiPjxwIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMHB4XCI-UmVzb3VyY2UgXCJlMzdmMDA0Yi1kYzEwLTQyMmItYjgzMy1jZGFhMTBhMDU1YTNcIiA8L3A-PC9kaXY-PHA-PGI-YWN0aXZlPC9iPjogdHJ1ZTwvcD48cD48Yj5uYW1lPC9iPjogQ0RFWCBFeGFtcGxlIE9yZ2FuaXphdGlvbjwvcD48cD48Yj50ZWxlY29tPC9iPjogcGg6ICgrMSkgNTU1LTU1NS01NTU1LCA8YSBocmVmPVwibWFpbHRvOmN1c3RvbWVyLXNlcnZpY2VAZXhhbXBsZS5vcmdcIj5jdXN0b21lci1zZXJ2aWNlQGV4YW1wbGUub3JnPC9hPjwvcD48cD48Yj5hZGRyZXNzPC9iPjogMSBDREVYIExhbmUgQm9zdG9uIE1BIDAxMDAyIFVTQSA8L3A-PC9kaXY-Iiwic3RhdHVzIjoiZ2VuZXJhdGVkIn19fV0sImlkZW50aWZpZXIiOnsic3lzdGVtIjoidXJuOmlldGY6cmZjOjM5ODYiLCJ2YWx1ZSI6InVybjp1dWlkOmMxNzM1MzVlLTEzNWUtNDhlMy1hYjY0LTM4YmFjYzY4ZGJhOCJ9LCJyZXNvdXJjZVR5cGUiOiJCdW5kbGUiLCJ0aW1lc3RhbXAiOiIyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwIiwidHlwZSI6ImRvY3VtZW50In0'

</pre>



**4. Get the base64 encoded JWS  from the `Bundle.signature.data`  element**


```python
recd_b64_jws = recd_signature['data']
recd_b64_jws
```




<pre style="border:0; overflow-wrap:break-word;">
'ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXQwZVNJNklsSlRJaXdpZEhsd0lqb2lTbGRVSWl3aWVEVmpJanBiSWsxSlNVVXpla05EUVRCbFowRjNTVUpCWjBsS1FVOUxSbGwyVFhkU0szbFJUVUV3UjBOVGNVZFRTV0l6UkZGRlFrTjNWVUZOU1VkT1RWRnpkME5SV1VSV1VWRkhSWGRLVmxWNlJWUk5Ra1ZIUVRGVlJVTkJkMHRSTWtaellWZGFkbU50TlhCWlZFVlRUVUpCUjBFeFZVVkNkM2RLVlRKR01XTXlSbk5oV0ZKMlRWSlZkMFYzV1VSV1VWRkxSRUY0U1ZwWFJuTmtSMmhzVWtkR01GbFVSWGhHZWtGV1FtZE9Wa0pCVFUxRWExWjVZVmROWjFOSFJtaGplWGRuVWtaYVRrMVRWWGRKZDFsS1MyOWFTV2gyWTA1QlVXdENSbWhhYkdGSFJtaGpNRUp2V2xkR2MyUkhhR3hhUjBZd1dWUkZkV0l6U201TlFqUllSRlJKZUUxVVFYbE9la1V6VGtSSmQwNUdiMWhFVkVsNVRWUkJlVTFxUlROT1JFbDNUa1p2ZDJkWk1IaERla0ZLUW1kT1ZrSkJXVlJCYkZaVVRWSk5kMFZSV1VSV1VWRkpSRUZ3UkZsWGVIQmFiVGw1WW0xc2FFMVNTWGRGUVZsRVZsRlJTRVJCYkZSWldGWjZXVmQ0Y0dSSE9IaEdWRUZVUW1kT1ZrSkJiMDFFUldoc1dWZDRNR0ZIVmtWWldGSm9UVlJGV0UxQ1ZVZEJNVlZGUVhkM1QxSllTbkJaZVVKSldWZEdla3hEUWtWV2F6QjRTbFJCYWtKbmEzRm9hMmxIT1hjd1FrTlJSVmRHYlZadldWZEdlbEZIYUd4WlYzZ3dZVWRXYTFsWVVtaE5VelYyWTIxamQyZG5SMmxOUVRCSFExTnhSMU5KWWpORVVVVkNRVkZWUVVFMFNVSnFkMEYzWjJkSFMwRnZTVUpuVVVSd1MyTlRhMjlCVFRaelZ6SXhLM1pYVkdWSlZrOUhlREV3VFZkaGMxRjVOMVpJYVdRMmVubHhXRUZDVFN0NmJtWkNibGhsYm5sVk1Hb3hSbFIyVUcxU1prOUViMDlFV0ZaMVVGVjNSRzl0YUVOSWFDdGlZMnhYT1V0Tk1tODFOak5qZUZKTFJYWkNibUZJY25OcWR6VjVUbTE0VHpWWmFrVlNZbWgwU0dSUlpYRnJkR1IzTTFaWlJWSlNPVWh2ZUV4UE0wWnJjM3BTTWpreVNGUkNOSGhYTTNsWGJGWXpaMVJyVFZGdmVsQlRZMHBMU0ROaVJ6aFFjWEUyUVZsUVNqZERORmxDU1d4VlUyUkNUVlpzTTNGdVpVVm1aemRtZFhocFJtWlliMlprVkZadE4zSk5hV2xITjFnNWVqUXpVR1pwYkhGaFpXbHpabTEwVW5oQmJGSjNSVTVZY2tnelQzWlBSRkI1VERCeVZHNUhPRU56WWtGWVdWWkpUVzFrWkVobE5GcEdPWEJzYURrMWMybzBjRTFVYUV4MFkwcFlMMjg1V0VoTWFtZzNSVzFhZVdkS1NGZEZVWEUwVUhkR2QxcGtiV0pqWm1oRGJVOXlPRGhJT0VKaVZYSjFMemRXTm5waWMwY3hUakZEVjJ4dVpHeGlWbnB1VENzelNVMVBjamhyV0dGSVkyRnVjV1pqYTJkR1ZqUkZjbTVtYWtaS2NURlBTV0ZCYlhOTmFqZzFlRTFyYW5sWVRIbGpURXd2ZFRWdU1tODJRbWM1TXk5VlVtWnhkVTl2VTBsSFQwTlNNalZFWVZwNmNIY3lhek56TjI5Rk9XUk5kMFZYV0hSbVdHZFpkR2d5WW14cWVUVjBSa2d3UjJwd1QydDRNRGRxTjFwVU5VaHVlRzVzYzBOQmQwVkJRV0ZPUVUxRU5IZEVRVmxFVmxJd1ZFSkJWWGRCZDBWQ0wzcEJURUpuVGxaSVVUaEZRa0ZOUTBKbFFYZEpVVmxFVmxJd1VrSkNiM2RIU1VsWFpETmtNMHh0YUd4WlYzZ3dZVWRXYTFsWVVtaGhWelZxVEcxT2RtSlVRVTVDWjJ0eGFHdHBSemwzTUVKQlVYTkdRVUZQUTBGWlJVRkRkVTFWVG5FNVlYa3JLMlUxV1VNM1VVWlBPVFJ5Wm5wNFIxRnVSak5IYTJ4YVRrRlliVWx5TjFCV1IyUnBSMWt5UjFSNEx6bFNkRWhEZDFSTGVtdE1LM2wyUzI5cVpWbzVaRlpMT0hkeVIxWnBVbXRQTDJwVmVWb3JTMk5YVW05clZXcHpOVGx1WTBwSFVrMVRVMUo0ZEdWRFVYVnFkRFJvWmpJckwzRldLMll5YzAxUmRFVnlkMUJGTXpCMlluRlNXVlZPVGs1Q1ZrVlJjR0ZSZUM5aFkwcEVWWFk1ZGpkemFraHBTa1J4V0hkUkszSjZhamsxYVVoQlNXRmxSVWh4Umk5TmN6SXljREppWlZwMWNYWkpVVXRsVFd3cmMzWldjVWgwYVhWNlYyNUdORlUyVmtsdGNHdHlOR0pJYkRkbFoxWTVTRFpzTmxReVUwMXJhalp4UkZVMVpUbE9aekJhYkV4VWRHOXpjMmhDVEcxdmNFWTNaVGRJZVhKVVJVRnRaazlRUzFGbE1FVm5PVVV5ZFhKNmVIRkNkVWMxTkdzMU1FY3lTakJHYVZCelVVcEJhRVpwVGtkM1UyYzBVek5JZVZaRVJ6ZDFaVXRrTUV3NU0zZExUMDVQV1VkMlRVdHBla05JUWl0d1MzWkZUVXB2V2poNU9YVnBRaXRJUmxoamNEbFNZVXB4U2prM1NIQmFWRVYySzJ4cFEzQXlVRk5ZZW1OTE1ISXlOVk5qZVdwR05tUk1iM1ZMTWxOQ016QjRRWFpLT0hSRk5UZzBLMnB4VVRaRFIyVmpWVGxZYW5ac1FXcDFTbVJEY2tSbFZsQnphbXR1TjA5UVdFY3JPRmhhVlRkNmNVaGFUbTFZV0RGWldUUklOWEpuUlVvME9HeHlWWEpRTTBrNFVpSmRmUS4uSkFFVDZBM1c4S1hmT1lPRS1nTTR5ZlNtTjB1TUluc2ozQ3JNVXRRUmNPS1o0VjRJOS1hWnhhdk1YVW51b0l6bktqOXJCaXItTzh0RkNmamJManJrWHY0U1ZWdXVMaUZPVzRZaWdqUllIX0RnNEx1d2lUNzJrWUdvUllWSDE0cnFTVllDT0VCVm5XQVZUMjV4QUowNUx1NXoyWjVKUTVSZXVMSWpYZDhyU1laYnBMYUY4akJ4S1dGQm9fTDJfNlJ0cVRkTm8zT2tSWWd0UDVOZ2l3dE9JeW9XQnctWEJhWEF0RnROZFdDVTE0dk9rX3RKSjBTZzZsWW9qRTg4MXFXVXNpMUJnRldmc3dhMXhKWElhOFhjcEFfLWtkVHZsWWlPMlpKT3FYdXlKdDJfeGpBOUFWNG14M1RtbXhsN3E2eGNneU9sUUJLTEJVV0pVR0VUXzFkZEhkVlY2dUlDXzkzT3lPOUZMX1N6dzNpV0VsR0x0WGVyTGJFSEdsRG1SOE9KVS0tTmFKQ2V5RFZuYllBZUxFa2VTdTZLcGMwS19uclp6dnI4Um4tX25JM0MxVWpYU04yNHRoX3NPa1liUTYzTnNGZ2lmSmx5WTh1TFMtdXU2aldkM1dhZHlkcTdKNmhhWDlCQjl3dEIwYlJXenFZdXR2Q1lsdnlneHpGQUQ5dWk='
</pre>



**5. Base64 decode the encoded JWS**

note the signature is displayed with the parts labeled and separated with line breaks for easier viewing


```python
from base64 import b64decode
recd_jws = b64decode(recd_b64_jws.encode()).decode()
for i,j in enumerate(recd_jws.split('.')):
    print(f'{labels[i]}:')
    print(f'{j}')
    print()
```

<pre style="border:0; overflow-wrap:break-word;">
header:
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ

payload:


signature:
JAET6A3W8KXfOYOE-gM4yfSmN0uMInsj3CrMUtQRcOKZ4V4I9-aZxavMXUnuoIznKj9rBir-O8tFCfjbLjrkXv4SVVuuLiFOW4YigjRYH_Dg4LuwiT72kYGoRYVH14rqSVYCOEBVnWAVT25xAJ05Lu5z2Z5JQ5ReuLIjXd8rSYZbpLaF8jBxKWFBo_L2_6RtqTdNo3OkRYgtP5NgiwtOIyoWBw-XBaXAtFtNdWCU14vOk_tJJ0Sg6lYojE881qWUsi1BgFWfswa1xJXIa8XcpA_-kdTvlYiO2ZJOqXuyJt2_xjA9AV4mx3Tmmxl7q6xcgyOlQBKLBUWJUGET_1ddHdVV6uIC_93OyO9FL_Szw3iWElGLtXerLbEHGlDmR8OJU--NaJCeyDVnbYAeLEkeSu6Kpc0K_nrZzvr8Rn-_nI3C1UjXSN24th_sOkYbQ63NsFgifJlyY8uLS-uu6jWd3Wadydq7J6haX9BB9wtB0bRWzqYutvCYlvygxzFAD9ui
</pre>


**6. reattach the payload - the base64 encoded Bundle - into the JWS payload element.**

note the signature is displayed with the parts labeled and separated with line breaks for easier viewing


```python
split_sig = recd_jws.split('.')
split_sig[1] = recd_b64_canonical_bundle
recd_jws = '.'.join(split_sig)
for i,j in enumerate(recd_jws.split('.')):
    print(f'{labels[i]}:')
    print(f'{j}')
    print()
```

<pre style="border:0; overflow-wrap:break-word;">
header:
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ

payload:
eyJlbnRyeSI6W3siZnVsbFVybCI6InVybjp1dWlkOjE3YTgwYThkLTRjZjEtNGRlYi1hMWZkLTJkYjExMzBlNWY3NiIsInJlc291cmNlIjp7ImF0dGVzdGVyIjpbeyJtb2RlIjoibGVnYWwiLCJwYXJ0eSI6eyJkaXNwbGF5IjoiRXhhbXBsZSBQcmFjdGl0aW9uZXIiLCJyZWZlcmVuY2UiOiJ1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMifSwidGltZSI6IjIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDAifV0sImF1dGhvciI6W3siZGlzcGxheSI6IkV4YW1wbGUgUHJhY3RpdGlvbmVyIiwicmVmZXJlbmNlIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIn1dLCJkYXRlIjoiMjAyMS0xMC0yNVQyMDoxNjoyOS0wNzowMCIsImVuY291bnRlciI6eyJkaXNwbGF5IjoiRXhhbXBsZSBFbmNvdW50ZXIiLCJyZWZlcmVuY2UiOiJ1cm46dXVpZDo1Y2U1YzgzYS0wMDBmLTQ3ZDItOTQxYy0wMzkzNThjYzkxMTIifSwiaWQiOiIxN2E4MGE4ZC00Y2YxLTRkZWItYTFmZC0yZGIxMTMwZTVmNzYiLCJyZXNvdXJjZVR5cGUiOiJDb21wb3NpdGlvbiIsInNlY3Rpb24iOlt7ImVudHJ5IjpbeyJyZWZlcmVuY2UiOiJ1cm46dXVpZDowMTRhNjhlYy1kNjkxLTQ5ZTAtYjk4MC05MWIwZDkyNGU1NzAifV0sInRpdGxlIjoiQWN0aXZlIENvbmRpdGlvbiAxIn1dLCJzdGF0dXMiOiJmaW5hbCIsInN1YmplY3QiOnsiZGlzcGxheSI6IkV4YW1wbGUgUGF0aWVudCIsInJlZmVyZW5jZSI6InVybjp1dWlkOjk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZSJ9LCJ0ZXh0Ijp7ImRpdiI6IjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI-PHA-PGI-R2VuZXJhdGVkIE5hcnJhdGl2ZTwvYj48L3A-PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTBlNzsgcGFkZGluZzogNnB4OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQgIzhkYTFiNDsgYm9yZGVyLXJhZGl1czogNXB4OyBsaW5lLWhlaWdodDogNjAlXCI-PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHhcIj5SZXNvdXJjZSBcIjE3YTgwYThkLTRjZjEtNGRlYi1hMWZkLTJkYjExMzBlNWY3NlwiIDwvcD48L2Rpdj48cD48Yj5zdGF0dXM8L2I-OiBmaW5hbDwvcD48cD48Yj50eXBlPC9iPjogTWVkaWNhbCByZWNvcmRzIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vbG9pbmMub3JnL1wiPkxPSU5DPC9hPiMxMTUwMy0wKTwvc3Bhbj48L3A-PHA-PGI-ZW5jb3VudGVyPC9iPjogPGEgaHJlZj1cIiNFbmNvdW50ZXJfNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyXCI-U2VlIGFib3ZlICh1cm46dXVpZDo1Y2U1YzgzYS0wMDBmLTQ3ZDItOTQxYy0wMzkzNThjYzkxMTI6IEV4YW1wbGUgRW5jb3VudGVyKTwvYT48L3A-PHA-PGI-ZGF0ZTwvYj46IDIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDA8L3A-PHA-PGI-YXV0aG9yPC9iPjogPGEgaHJlZj1cIiNQcmFjdGl0aW9uZXJfMDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjXCI-U2VlIGFib3ZlICh1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmM6IEV4YW1wbGUgUHJhY3RpdGlvbmVyKTwvYT48L3A-PHA-PGI-dGl0bGU8L2I-OiBBY3RpdmUgQ29uZGl0aW9uczwvcD48aDM-QXR0ZXN0ZXJzPC9oMz48dGFibGUgY2xhc3M9XCJncmlkXCI-PHRyPjx0ZD4tPC90ZD48dGQ-PGI-TW9kZTwvYj48L3RkPjx0ZD48Yj5UaW1lPC9iPjwvdGQ-PHRkPjxiPlBhcnR5PC9iPjwvdGQ-PC90cj48dHI-PHRkPio8L3RkPjx0ZD5sZWdhbDwvdGQ-PHRkPjIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDA8L3RkPjx0ZD48YSBocmVmPVwiI1ByYWN0aXRpb25lcl8wODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmNcIj5TZWUgYWJvdmUgKHVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYzogRXhhbXBsZSBQcmFjdGl0aW9uZXIpPC9hPjwvdGQ-PC90cj48L3RhYmxlPjwvZGl2PiIsInN0YXR1cyI6ImdlbmVyYXRlZCJ9LCJ0aXRsZSI6IkFjdGl2ZSBDb25kaXRpb25zIiwidHlwZSI6eyJjb2RpbmciOlt7ImNvZGUiOiIxMTUwMy0wIiwic3lzdGVtIjoiaHR0cDovL2xvaW5jLm9yZyJ9XSwidGV4dCI6Ik1lZGljYWwgcmVjb3JkcyJ9fX0seyJmdWxsVXJsIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIiwicmVzb3VyY2UiOnsiaWQiOiIwODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMiLCJtZXRhIjp7Imxhc3RVcGRhdGVkIjoiMjAxMy0wNS0wNVQxNjoxMzowM1oifSwibmFtZSI6W3siZmFtaWx5IjoiSGFuY29jayIsImdpdmVuIjpbIkpvaG4iXX1dLCJyZXNvdXJjZVR5cGUiOiJQcmFjdGl0aW9uZXIiLCJ0ZXh0Ijp7ImRpdiI6IjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI-PHA-PGI-R2VuZXJhdGVkIE5hcnJhdGl2ZTwvYj48L3A-PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTBlNzsgcGFkZGluZzogNnB4OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQgIzhkYTFiNDsgYm9yZGVyLXJhZGl1czogNXB4OyBsaW5lLWhlaWdodDogNjAlXCI-PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHhcIj5SZXNvdXJjZSBcIjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliY1wiIFVwZGF0ZWQgXCIyMDEzLTA1LTA1VDE2OjEzOjAzWlwiIDwvcD48L2Rpdj48cD48Yj5uYW1lPC9iPjogSm9obiBIYW5jb2NrIDwvcD48L2Rpdj4iLCJzdGF0dXMiOiJnZW5lcmF0ZWQifX19LHsiZnVsbFVybCI6InVybjp1dWlkOjk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZSIsInJlc291cmNlIjp7ImFjdGl2ZSI6dHJ1ZSwiaWQiOiI5NzBhZjZjOS01YmJkLTQwNjctYjZjMS1kOWIyYzgyM2FlY2UiLCJuYW1lIjpbeyJmYW1pbHkiOiJQYXRpZW50IiwiZ2l2ZW4iOlsiQ0RFWCBFeGFtcGxlIl0sInRleHQiOiJDREVYIEV4YW1wbGUgUGF0aWVudCJ9XSwicmVzb3VyY2VUeXBlIjoiUGF0aWVudCIsInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiOTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlXCIgPC9wPjwvZGl2PjxwPjxiPmFjdGl2ZTwvYj46IHRydWU8L3A-PHA-PGI-bmFtZTwvYj46IENERVggRXhhbXBsZSBQYXRpZW50PC9wPjwvZGl2PiIsInN0YXR1cyI6ImdlbmVyYXRlZCJ9fX0seyJmdWxsVXJsIjoidXJuOnV1aWQ6MDE0YTY4ZWMtZDY5MS00OWUwLWI5ODAtOTFiMGQ5MjRlNTcwIiwicmVzb3VyY2UiOnsiYXNzZXJ0ZXIiOnsicmVmZXJlbmNlIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIn0sImNhdGVnb3J5IjpbeyJjb2RpbmciOlt7ImNvZGUiOiI1NTYwNzAwNiIsImRpc3BsYXkiOiJQcm9ibGVtIiwic3lzdGVtIjoiaHR0cDovL3Nub21lZC5pbmZvL3NjdCJ9LHsiY29kZSI6Ijc1MzI2LTkiLCJkaXNwbGF5IjoiUHJvYmxlbSIsInN5c3RlbSI6Imh0dHA6Ly9sb2luYy5vcmcifV19XSwiY2xpbmljYWxTdGF0dXMiOnsiY29kaW5nIjpbeyJjb2RlIjoiYWN0aXZlIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb25kaXRpb24tY2xpbmljYWwifV19LCJjb2RlIjp7ImNvZGluZyI6W3siY29kZSI6IjQ0MDU0MDA2IiwiZGlzcGxheSI6IlR5cGUgMiBEaWFiZXRlcyBNZWxsaXR1cyIsInN5c3RlbSI6Imh0dHA6Ly9zbm9tZWQuaW5mby9zY3QifV19LCJpZCI6IjAxNGE2OGVjLWQ2OTEtNDllMC1iOTgwLTkxYjBkOTI0ZTU3MCIsImlkZW50aWZpZXIiOlt7InN5c3RlbSI6InVybjpvaWQ6MS4zLjYuMS40LjEuMjI4MTIuNC4xMTEuMC40LjEuMi4xIiwidmFsdWUiOiIxIn1dLCJvbnNldERhdGVUaW1lIjoiMjAwNiIsInJlc291cmNlVHlwZSI6IkNvbmRpdGlvbiIsInN1YmplY3QiOnsicmVmZXJlbmNlIjoidXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlIn0sInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiMDE0YTY4ZWMtZDY5MS00OWUwLWI5ODAtOTFiMGQ5MjRlNTcwXCIgPC9wPjwvZGl2PjxwPjxiPmlkZW50aWZpZXI8L2I-OiBpZDogMTwvcD48cD48Yj5jbGluaWNhbFN0YXR1czwvYj46IEFjdGl2ZSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQ6IExpZ2h0R29sZGVuUm9kWWVsbG93OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQga2hha2lcIj4gKDxhIGhyZWY9XCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy8zLjAuMC9Db2RlU3lzdGVtLWNvbmRpdGlvbi1jbGluaWNhbC5odG1sXCI-Q29uZGl0aW9uIENsaW5pY2FsIFN0YXR1cyBDb2RlczwvYT4jYWN0aXZlKTwvc3Bhbj48L3A-PHA-PGI-Y2F0ZWdvcnk8L2I-OiBQcm9ibGVtIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vYnJvd3Nlci5paHRzZG90b29scy5vcmcvXCI-U05PTUVEIENUPC9hPiM1NTYwNzAwNjsgPGEgaHJlZj1cImh0dHBzOi8vbG9pbmMub3JnL1wiPkxPSU5DPC9hPiM3NTMyNi05KTwvc3Bhbj48L3A-PHA-PGI-Y29kZTwvYj46IFR5cGUgMiBEaWFiZXRlcyBNZWxsaXR1cyA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQ6IExpZ2h0R29sZGVuUm9kWWVsbG93OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQga2hha2lcIj4gKDxhIGhyZWY9XCJodHRwczovL2Jyb3dzZXIuaWh0c2RvdG9vbHMub3JnL1wiPlNOT01FRCBDVDwvYT4jNDQwNTQwMDYpPC9zcGFuPjwvcD48cD48Yj5zdWJqZWN0PC9iPjogPGEgaHJlZj1cIiNQYXRpZW50Xzk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZVwiPlNlZSBhYm92ZSAodXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlKTwvYT48L3A-PHA-PGI-b25zZXQ8L2I-OiAyMDA2LTAxLTAxPC9wPjxwPjxiPmFzc2VydGVyPC9iPjogPGEgaHJlZj1cIiNQcmFjdGl0aW9uZXJfMDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjXCI-U2VlIGFib3ZlICh1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMpPC9hPjwvcD48L2Rpdj4iLCJzdGF0dXMiOiJnZW5lcmF0ZWQifX19LHsiZnVsbFVybCI6InVybjp1dWlkOjVjZTVjODNhLTAwMGYtNDdkMi05NDFjLTAzOTM1OGNjOTExMiIsInJlc291cmNlIjp7ImNsYXNzIjp7ImNvZGUiOiJFTUVSIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlIn0sImlkIjoiNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyIiwicGFydGljaXBhbnQiOlt7ImluZGl2aWR1YWwiOnsiZGlzcGxheSI6IkpvaG4gSGFuY29jayIsInJlZmVyZW5jZSI6InVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYyJ9fV0sInBlcmlvZCI6eyJlbmQiOiIyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwIiwic3RhcnQiOiIyMDIxLTEwLTI1VDIwOjEwOjI5LTA3OjAwIn0sInJlc291cmNlVHlwZSI6IkVuY291bnRlciIsInNlcnZpY2VQcm92aWRlciI6eyJkaXNwbGF5IjoiQ0RFWCBFeGFtcGxlIE9yZ2FuaXphdGlvbiIsInJlZmVyZW5jZSI6InVybjp1dWlkOmUzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhMyJ9LCJzdGF0dXMiOiJmaW5pc2hlZCIsInN1YmplY3QiOnsiZGlzcGxheSI6IkNERVggRXhhbXBsZSBQYXRpZW50IiwicmVmZXJlbmNlIjoidXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlIn0sInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyXCIgPC9wPjwvZGl2PjxwPjxiPnN0YXR1czwvYj46IGZpbmlzaGVkPC9wPjxwPjxiPmNsYXNzPC9iPjogZW1lcmdlbmN5IChEZXRhaWxzOiBodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGUgY29kZSBFTUVSID0gJ2VtZXJnZW5jeScsIHN0YXRlZCBhcyAnbnVsbCcpPC9wPjxwPjxiPnR5cGU8L2I-OiBVbmtub3duIChxdWFsaWZpZXIgdmFsdWUpIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vYnJvd3Nlci5paHRzZG90b29scy5vcmcvXCI-U05PTUVEIENUPC9hPiMyNjE2NjUwMDYpPC9zcGFuPjwvcD48cD48Yj5zdWJqZWN0PC9iPjogPGEgaHJlZj1cIiNQYXRpZW50Xzk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZVwiPlNlZSBhYm92ZSAodXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlOiBDREVYIEV4YW1wbGUgUGF0aWVudCk8L2E-PC9wPjxoMz5QYXJ0aWNpcGFudHM8L2gzPjx0YWJsZSBjbGFzcz1cImdyaWRcIj48dHI-PHRkPi08L3RkPjx0ZD48Yj5JbmRpdmlkdWFsPC9iPjwvdGQ-PC90cj48dHI-PHRkPio8L3RkPjx0ZD48YSBocmVmPVwiI1ByYWN0aXRpb25lcl8wODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmNcIj5TZWUgYWJvdmUgKHVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYzogSm9obiBIYW5jb2NrKTwvYT48L3RkPjwvdHI-PC90YWJsZT48cD48Yj5wZXJpb2Q8L2I-OiAyMDIxLTEwLTI1VDIwOjEwOjI5LTA3OjAwIC0tJmd0OyAyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwPC9wPjxwPjxiPnNlcnZpY2VQcm92aWRlcjwvYj46IDxhIGhyZWY9XCIjT3JnYW5pemF0aW9uX2UzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhM1wiPlNlZSBhYm92ZSAodXJuOnV1aWQ6ZTM3ZjAwNGItZGMxMC00MjJiLWI4MzMtY2RhYTEwYTA1NWEzOiBDREVYIEV4YW1wbGUgT3JnYW5pemF0aW9uKTwvYT48L3A-PC9kaXY-Iiwic3RhdHVzIjoiZ2VuZXJhdGVkIn0sInR5cGUiOlt7ImNvZGluZyI6W3siY29kZSI6IjI2MTY2NTAwNiIsImRpc3BsYXkiOiJVbmtub3duIChxdWFsaWZpZXIgdmFsdWUpIiwic3lzdGVtIjoiaHR0cDovL3Nub21lZC5pbmZvL3NjdCJ9XSwidGV4dCI6IlVua25vd24gKHF1YWxpZmllciB2YWx1ZSkifV19fSx7ImZ1bGxVcmwiOiJ1cm46dXVpZDplMzdmMDA0Yi1kYzEwLTQyMmItYjgzMy1jZGFhMTBhMDU1YTMiLCJyZXNvdXJjZSI6eyJhY3RpdmUiOnRydWUsImFkZHJlc3MiOlt7ImNpdHkiOiJCb3N0b24iLCJjb3VudHJ5IjoiVVNBIiwibGluZSI6WyIxIENERVggTGFuZSJdLCJwb3N0YWxDb2RlIjoiMDEwMDIiLCJzdGF0ZSI6Ik1BIn1dLCJpZCI6ImUzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhMyIsIm5hbWUiOiJDREVYIEV4YW1wbGUgT3JnYW5pemF0aW9uIiwicmVzb3VyY2VUeXBlIjoiT3JnYW5pemF0aW9uIiwidGVsZWNvbSI6W3sic3lzdGVtIjoicGhvbmUiLCJ2YWx1ZSI6IigrMSkgNTU1LTU1NS01NTU1In0seyJzeXN0ZW0iOiJlbWFpbCIsInZhbHVlIjoiY3VzdG9tZXItc2VydmljZUBleGFtcGxlLm9yZyJ9XSwidGV4dCI6eyJkaXYiOiI8ZGl2IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPjxwPjxiPkdlbmVyYXRlZCBOYXJyYXRpdmU8L2I-PC9wPjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJhY2tncm91bmQtY29sb3I6ICNkOWUwZTc7IHBhZGRpbmc6IDZweDsgbWFyZ2luOiA0cHg7IGJvcmRlcjogMXB4IHNvbGlkICM4ZGExYjQ7IGJvcmRlci1yYWRpdXM6IDVweDsgbGluZS1oZWlnaHQ6IDYwJVwiPjxwIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMHB4XCI-UmVzb3VyY2UgXCJlMzdmMDA0Yi1kYzEwLTQyMmItYjgzMy1jZGFhMTBhMDU1YTNcIiA8L3A-PC9kaXY-PHA-PGI-YWN0aXZlPC9iPjogdHJ1ZTwvcD48cD48Yj5uYW1lPC9iPjogQ0RFWCBFeGFtcGxlIE9yZ2FuaXphdGlvbjwvcD48cD48Yj50ZWxlY29tPC9iPjogcGg6ICgrMSkgNTU1LTU1NS01NTU1LCA8YSBocmVmPVwibWFpbHRvOmN1c3RvbWVyLXNlcnZpY2VAZXhhbXBsZS5vcmdcIj5jdXN0b21lci1zZXJ2aWNlQGV4YW1wbGUub3JnPC9hPjwvcD48cD48Yj5hZGRyZXNzPC9iPjogMSBDREVYIExhbmUgQm9zdG9uIE1BIDAxMDAyIFVTQSA8L3A-PC9kaXY-Iiwic3RhdHVzIjoiZ2VuZXJhdGVkIn19fV0sImlkZW50aWZpZXIiOnsic3lzdGVtIjoidXJuOmlldGY6cmZjOjM5ODYiLCJ2YWx1ZSI6InVybjp1dWlkOmMxNzM1MzVlLTEzNWUtNDhlMy1hYjY0LTM4YmFjYzY4ZGJhOCJ9LCJyZXNvdXJjZVR5cGUiOiJCdW5kbGUiLCJ0aW1lc3RhbXAiOiIyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwIiwidHlwZSI6ImRvY3VtZW50In0

signature:
JAET6A3W8KXfOYOE-gM4yfSmN0uMInsj3CrMUtQRcOKZ4V4I9-aZxavMXUnuoIznKj9rBir-O8tFCfjbLjrkXv4SVVuuLiFOW4YigjRYH_Dg4LuwiT72kYGoRYVH14rqSVYCOEBVnWAVT25xAJ05Lu5z2Z5JQ5ReuLIjXd8rSYZbpLaF8jBxKWFBo_L2_6RtqTdNo3OkRYgtP5NgiwtOIyoWBw-XBaXAtFtNdWCU14vOk_tJJ0Sg6lYojE881qWUsi1BgFWfswa1xJXIa8XcpA_-kdTvlYiO2ZJOqXuyJt2_xjA9AV4mx3Tmmxl7q6xcgyOlQBKLBUWJUGET_1ddHdVV6uIC_93OyO9FL_Szw3iWElGLtXerLbEHGlDmR8OJU--NaJCeyDVnbYAeLEkeSu6Kpc0K_nrZzvr8Rn-_nI3C1UjXSN24th_sOkYbQ63NsFgifJlyY8uLS-uu6jWd3Wadydq7J6haX9BB9wtB0bRWzqYutvCYlvygxzFAD9ui
</pre>


**7. Obtain public Key from the first certificate in JWS header `"x5c"` key**

- base64 decode the key value
- Verify Issuer, Validity Dates, Subject,and KeyUsage of certificate,
- Get the “Subject Public Key Info” from the cert to verify the signature


```python
recd_header = jws.get_unverified_header(recd_jws)
recd_header
```




<pre style="border:0; overflow-wrap:break-word;">
{'alg': 'RS256',
 'kty': 'RS',
 'typ': 'JWT',
 'x5c': ['MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRvMRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZNMSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAyNzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEWFmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAwggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXenyU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3bG8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43PfilqaeisfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJX/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlbVznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6Bg93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYDVR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOCAYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwTKzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAIaeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SMkj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+jqQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP3I8R']}
</pre>



```python
recd_cert = b64decode(recd_header['x5c'][0])
with open('recd_cert.der', 'wb') as f:
    f.write(recd_cert)
!openssl x509 -in recd_cert.der -inform DER -text
```

<pre style="border:0; overflow-wrap:break-word;">
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 16322561221100825744 (0xe28562f33047ec90)
    Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=US, ST=California, L=Sausalito, O=HealtheData1, CN=Eric Haas, DVM/emailAddress=ehaas@healthedata1.org
        Validity
            Not Before: Oct 27 17:42:04 2021 GMT
            Not After : Oct 22 17:42:04 2022 GMT
        Subject: C=US, ST=California, L=Sausalito, O=HealtheData1, CN=Eric Haas, DVM/emailAddress=ehaas@healthedata1.org
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (3072 bit)
                Modulus:
                    00:e9:29:c4:a4:a0:03:3a:b1:6d:b5:fa:f5:93:78:
                    85:4e:1b:1d:74:31:66:ac:43:2e:d5:1e:27:7a:cf:
                    2a:97:00:13:3e:ce:77:c1:9d:77:a7:c9:4d:23:d4:
                    54:ef:3e:64:5f:38:3a:0e:0d:75:6e:3d:4c:03:a2:
                    68:42:1e:1f:9b:72:55:bd:28:cd:a8:e7:ad:dc:c5:
                    12:84:bc:19:da:1e:bb:23:c3:9c:8d:9b:13:b9:62:
                    31:11:6e:1b:47:75:07:aa:92:d7:70:dd:56:04:45:
                    1f:47:a3:12:ce:dc:59:2c:cd:1d:bd:d8:74:c1:e3:
                    15:b7:c9:69:55:de:04:e4:31:0a:33:3d:27:09:28:
                    7d:db:1b:c3:ea:ab:a0:18:3c:9e:c2:e1:80:48:95:
                    44:9d:04:c5:65:de:a9:de:11:f8:3b:7e:ec:62:15:
                    f5:e8:7d:d4:d5:9b:ba:cc:8a:21:bb:5f:dc:f8:dc:
                    f7:e2:96:a6:9e:8a:c7:e6:b5:1c:40:95:1c:04:35:
                    7a:c7:dc:eb:ce:0c:fc:8b:d2:b4:e7:1b:c0:ac:6c:
                    05:d8:54:83:26:75:d1:de:e1:91:7d:a6:58:7d:e6:
                    c8:f8:a4:c4:e1:2e:d7:09:5f:fa:3d:5c:72:e3:87:
                    b1:26:67:28:09:1d:61:10:ab:83:f0:17:06:5d:99:
                    b7:1f:84:29:8e:af:cf:07:f0:16:d4:ae:ef:fb:57:
                    ac:db:b0:6d:4d:d4:25:a5:9d:d9:5b:57:39:cb:fb:
                    72:0c:3a:bf:24:5d:a1:dc:6a:7a:9f:72:48:05:57:
                    81:2b:9d:f8:c5:26:ad:4e:21:a0:26:b0:c8:fc:e7:
                    13:24:8f:25:cb:c9:c2:cb:fe:ee:67:da:8e:81:83:
                    dd:ff:51:17:ea:b8:ea:12:20:63:82:47:6e:43:69:
                    9c:e9:c3:69:37:b3:ba:04:f5:d3:30:11:65:ed:7d:
                    78:18:b6:1d:9b:96:3c:b9:b4:51:f4:1a:3a:4e:93:
                    1d:3b:8f:b6:53:e4:79:f1:9e:5b
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints:
                CA:TRUE
            X509v3 Key Usage:
                Digital Signature, Non Repudiation, Key Encipherment
            X509v3 Subject Alternative Name:
                DNS:www.healthedatainc.com
    Signature Algorithm: sha256WithRSAEncryption
         0a:e3:14:36:af:5a:cb:ef:9e:e5:80:bb:40:53:bd:e2:b7:f3:
         c4:64:27:17:71:a4:95:93:40:5e:62:2b:ec:f5:46:76:21:98:
         d8:64:f1:ff:d4:6d:1c:2c:13:2b:39:0b:fb:2b:ca:a2:37:99:
         f5:d5:4a:f3:0a:c6:56:24:64:3b:f8:d4:c9:9f:8a:71:64:68:
         91:48:ec:e7:d9:dc:24:64:4c:49:24:71:b5:e0:90:ba:3b:78:
         85:fd:be:fe:a5:7e:7f:6b:0c:42:d1:2b:c0:f1:37:d2:f6:ea:
         45:85:0d:34:d0:55:11:0a:5a:43:1f:da:70:90:d4:bf:db:fb:
         b2:31:e2:24:3a:97:c1:0f:ab:ce:3f:79:88:70:08:69:e1:07:
         a8:5f:cc:b3:6d:a9:d9:b7:99:ba:ab:c8:40:a7:8c:97:eb:2f:
         56:a1:ed:8a:ec:d6:9c:5e:14:e9:52:26:a6:4a:f8:6c:79:7b:
         7a:05:7d:1f:a9:7a:4f:64:8c:92:3e:aa:0d:4e:5e:f4:d8:34:
         66:52:d3:b6:8b:2c:84:12:e6:a2:91:7b:7b:b1:f2:ad:31:00:
         99:f3:8f:29:07:b4:12:0f:44:da:ea:f3:c6:a0:6e:1b:9e:24:
         e7:41:b6:27:41:62:3e:c4:09:02:11:62:34:6c:12:83:84:b7:
         1f:25:43:1b:bb:9e:29:dd:0b:f7:7c:0a:38:d3:98:1a:f3:0a:
         8b:30:87:07:ea:4a:bc:43:09:a1:9f:32:f6:e8:81:f8:71:57:
         72:9f:51:68:9a:89:f7:b1:e9:65:31:2f:fa:58:82:a7:63:d2:
         5f:37:0a:d2:bd:b9:49:cc:a3:17:a7:4b:a2:e2:b6:48:1d:f4:
         c4:0b:c9:f2:d1:39:f3:8f:a3:a9:0e:82:19:e7:14:f5:78:ef:
         94:08:ee:25:d0:ab:0d:e5:4f:b2:39:27:ec:e3:d7:1b:ef:17:
         65:4e:f3:a8:76:4d:99:75:f5:61:8e:07:e6:b8:04:27:8f:25:
         ad:4a:cf:dc:8f:11
-----BEGIN CERTIFICATE-----
MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYD
VQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRv
MRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZN
MSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAy
NzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
DApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0
aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEW
FmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAw
ggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXen
yU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5
YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3b
G8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43Pfilqae
isfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJ
X/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlb
VznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6B
g93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07
j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYD
VR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOC
AYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwT
KzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+
/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAI
aeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SM
kj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2
J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB
+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+j
qQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP
3I8R
-----END CERTIFICATE-----
</pre>

**10. Verify Signature using the public key or the X.509 Certificate**

Alternatively:
1. visit https://jwt.io.
1. At the top of the page, select "RS256" for the algorithm.
1. Paste the JWS value printed below into the “Encoded” field.
1. The plaintext JWT will be displayed in the “Decoded:Payload” field.
1. The X509 Cert above will appear in the "Verify Signature" box.
1. If verified, a “Signature Verified” message will appear  in the bottom left hand corner.


```python
recd_jws
```




<pre style="border:0; overflow-wrap:break-word;">
'eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ.eyJlbnRyeSI6W3siZnVsbFVybCI6InVybjp1dWlkOjE3YTgwYThkLTRjZjEtNGRlYi1hMWZkLTJkYjExMzBlNWY3NiIsInJlc291cmNlIjp7ImF0dGVzdGVyIjpbeyJtb2RlIjoibGVnYWwiLCJwYXJ0eSI6eyJkaXNwbGF5IjoiRXhhbXBsZSBQcmFjdGl0aW9uZXIiLCJyZWZlcmVuY2UiOiJ1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMifSwidGltZSI6IjIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDAifV0sImF1dGhvciI6W3siZGlzcGxheSI6IkV4YW1wbGUgUHJhY3RpdGlvbmVyIiwicmVmZXJlbmNlIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIn1dLCJkYXRlIjoiMjAyMS0xMC0yNVQyMDoxNjoyOS0wNzowMCIsImVuY291bnRlciI6eyJkaXNwbGF5IjoiRXhhbXBsZSBFbmNvdW50ZXIiLCJyZWZlcmVuY2UiOiJ1cm46dXVpZDo1Y2U1YzgzYS0wMDBmLTQ3ZDItOTQxYy0wMzkzNThjYzkxMTIifSwiaWQiOiIxN2E4MGE4ZC00Y2YxLTRkZWItYTFmZC0yZGIxMTMwZTVmNzYiLCJyZXNvdXJjZVR5cGUiOiJDb21wb3NpdGlvbiIsInNlY3Rpb24iOlt7ImVudHJ5IjpbeyJyZWZlcmVuY2UiOiJ1cm46dXVpZDowMTRhNjhlYy1kNjkxLTQ5ZTAtYjk4MC05MWIwZDkyNGU1NzAifV0sInRpdGxlIjoiQWN0aXZlIENvbmRpdGlvbiAxIn1dLCJzdGF0dXMiOiJmaW5hbCIsInN1YmplY3QiOnsiZGlzcGxheSI6IkV4YW1wbGUgUGF0aWVudCIsInJlZmVyZW5jZSI6InVybjp1dWlkOjk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZSJ9LCJ0ZXh0Ijp7ImRpdiI6IjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI-PHA-PGI-R2VuZXJhdGVkIE5hcnJhdGl2ZTwvYj48L3A-PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTBlNzsgcGFkZGluZzogNnB4OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQgIzhkYTFiNDsgYm9yZGVyLXJhZGl1czogNXB4OyBsaW5lLWhlaWdodDogNjAlXCI-PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHhcIj5SZXNvdXJjZSBcIjE3YTgwYThkLTRjZjEtNGRlYi1hMWZkLTJkYjExMzBlNWY3NlwiIDwvcD48L2Rpdj48cD48Yj5zdGF0dXM8L2I-OiBmaW5hbDwvcD48cD48Yj50eXBlPC9iPjogTWVkaWNhbCByZWNvcmRzIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vbG9pbmMub3JnL1wiPkxPSU5DPC9hPiMxMTUwMy0wKTwvc3Bhbj48L3A-PHA-PGI-ZW5jb3VudGVyPC9iPjogPGEgaHJlZj1cIiNFbmNvdW50ZXJfNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyXCI-U2VlIGFib3ZlICh1cm46dXVpZDo1Y2U1YzgzYS0wMDBmLTQ3ZDItOTQxYy0wMzkzNThjYzkxMTI6IEV4YW1wbGUgRW5jb3VudGVyKTwvYT48L3A-PHA-PGI-ZGF0ZTwvYj46IDIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDA8L3A-PHA-PGI-YXV0aG9yPC9iPjogPGEgaHJlZj1cIiNQcmFjdGl0aW9uZXJfMDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjXCI-U2VlIGFib3ZlICh1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmM6IEV4YW1wbGUgUHJhY3RpdGlvbmVyKTwvYT48L3A-PHA-PGI-dGl0bGU8L2I-OiBBY3RpdmUgQ29uZGl0aW9uczwvcD48aDM-QXR0ZXN0ZXJzPC9oMz48dGFibGUgY2xhc3M9XCJncmlkXCI-PHRyPjx0ZD4tPC90ZD48dGQ-PGI-TW9kZTwvYj48L3RkPjx0ZD48Yj5UaW1lPC9iPjwvdGQ-PHRkPjxiPlBhcnR5PC9iPjwvdGQ-PC90cj48dHI-PHRkPio8L3RkPjx0ZD5sZWdhbDwvdGQ-PHRkPjIwMjEtMTAtMjVUMjA6MTY6MjktMDc6MDA8L3RkPjx0ZD48YSBocmVmPVwiI1ByYWN0aXRpb25lcl8wODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmNcIj5TZWUgYWJvdmUgKHVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYzogRXhhbXBsZSBQcmFjdGl0aW9uZXIpPC9hPjwvdGQ-PC90cj48L3RhYmxlPjwvZGl2PiIsInN0YXR1cyI6ImdlbmVyYXRlZCJ9LCJ0aXRsZSI6IkFjdGl2ZSBDb25kaXRpb25zIiwidHlwZSI6eyJjb2RpbmciOlt7ImNvZGUiOiIxMTUwMy0wIiwic3lzdGVtIjoiaHR0cDovL2xvaW5jLm9yZyJ9XSwidGV4dCI6Ik1lZGljYWwgcmVjb3JkcyJ9fX0seyJmdWxsVXJsIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIiwicmVzb3VyY2UiOnsiaWQiOiIwODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMiLCJtZXRhIjp7Imxhc3RVcGRhdGVkIjoiMjAxMy0wNS0wNVQxNjoxMzowM1oifSwibmFtZSI6W3siZmFtaWx5IjoiSGFuY29jayIsImdpdmVuIjpbIkpvaG4iXX1dLCJyZXNvdXJjZVR5cGUiOiJQcmFjdGl0aW9uZXIiLCJ0ZXh0Ijp7ImRpdiI6IjxkaXYgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI-PHA-PGI-R2VuZXJhdGVkIE5hcnJhdGl2ZTwvYj48L3A-PGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTBlNzsgcGFkZGluZzogNnB4OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQgIzhkYTFiNDsgYm9yZGVyLXJhZGl1czogNXB4OyBsaW5lLWhlaWdodDogNjAlXCI-PHAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHhcIj5SZXNvdXJjZSBcIjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliY1wiIFVwZGF0ZWQgXCIyMDEzLTA1LTA1VDE2OjEzOjAzWlwiIDwvcD48L2Rpdj48cD48Yj5uYW1lPC9iPjogSm9obiBIYW5jb2NrIDwvcD48L2Rpdj4iLCJzdGF0dXMiOiJnZW5lcmF0ZWQifX19LHsiZnVsbFVybCI6InVybjp1dWlkOjk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZSIsInJlc291cmNlIjp7ImFjdGl2ZSI6dHJ1ZSwiaWQiOiI5NzBhZjZjOS01YmJkLTQwNjctYjZjMS1kOWIyYzgyM2FlY2UiLCJuYW1lIjpbeyJmYW1pbHkiOiJQYXRpZW50IiwiZ2l2ZW4iOlsiQ0RFWCBFeGFtcGxlIl0sInRleHQiOiJDREVYIEV4YW1wbGUgUGF0aWVudCJ9XSwicmVzb3VyY2VUeXBlIjoiUGF0aWVudCIsInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiOTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlXCIgPC9wPjwvZGl2PjxwPjxiPmFjdGl2ZTwvYj46IHRydWU8L3A-PHA-PGI-bmFtZTwvYj46IENERVggRXhhbXBsZSBQYXRpZW50PC9wPjwvZGl2PiIsInN0YXR1cyI6ImdlbmVyYXRlZCJ9fX0seyJmdWxsVXJsIjoidXJuOnV1aWQ6MDE0YTY4ZWMtZDY5MS00OWUwLWI5ODAtOTFiMGQ5MjRlNTcwIiwicmVzb3VyY2UiOnsiYXNzZXJ0ZXIiOnsicmVmZXJlbmNlIjoidXJuOnV1aWQ6MDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjIn0sImNhdGVnb3J5IjpbeyJjb2RpbmciOlt7ImNvZGUiOiI1NTYwNzAwNiIsImRpc3BsYXkiOiJQcm9ibGVtIiwic3lzdGVtIjoiaHR0cDovL3Nub21lZC5pbmZvL3NjdCJ9LHsiY29kZSI6Ijc1MzI2LTkiLCJkaXNwbGF5IjoiUHJvYmxlbSIsInN5c3RlbSI6Imh0dHA6Ly9sb2luYy5vcmcifV19XSwiY2xpbmljYWxTdGF0dXMiOnsiY29kaW5nIjpbeyJjb2RlIjoiYWN0aXZlIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb25kaXRpb24tY2xpbmljYWwifV19LCJjb2RlIjp7ImNvZGluZyI6W3siY29kZSI6IjQ0MDU0MDA2IiwiZGlzcGxheSI6IlR5cGUgMiBEaWFiZXRlcyBNZWxsaXR1cyIsInN5c3RlbSI6Imh0dHA6Ly9zbm9tZWQuaW5mby9zY3QifV19LCJpZCI6IjAxNGE2OGVjLWQ2OTEtNDllMC1iOTgwLTkxYjBkOTI0ZTU3MCIsImlkZW50aWZpZXIiOlt7InN5c3RlbSI6InVybjpvaWQ6MS4zLjYuMS40LjEuMjI4MTIuNC4xMTEuMC40LjEuMi4xIiwidmFsdWUiOiIxIn1dLCJvbnNldERhdGVUaW1lIjoiMjAwNiIsInJlc291cmNlVHlwZSI6IkNvbmRpdGlvbiIsInN1YmplY3QiOnsicmVmZXJlbmNlIjoidXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlIn0sInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiMDE0YTY4ZWMtZDY5MS00OWUwLWI5ODAtOTFiMGQ5MjRlNTcwXCIgPC9wPjwvZGl2PjxwPjxiPmlkZW50aWZpZXI8L2I-OiBpZDogMTwvcD48cD48Yj5jbGluaWNhbFN0YXR1czwvYj46IEFjdGl2ZSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQ6IExpZ2h0R29sZGVuUm9kWWVsbG93OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQga2hha2lcIj4gKDxhIGhyZWY9XCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy8zLjAuMC9Db2RlU3lzdGVtLWNvbmRpdGlvbi1jbGluaWNhbC5odG1sXCI-Q29uZGl0aW9uIENsaW5pY2FsIFN0YXR1cyBDb2RlczwvYT4jYWN0aXZlKTwvc3Bhbj48L3A-PHA-PGI-Y2F0ZWdvcnk8L2I-OiBQcm9ibGVtIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vYnJvd3Nlci5paHRzZG90b29scy5vcmcvXCI-U05PTUVEIENUPC9hPiM1NTYwNzAwNjsgPGEgaHJlZj1cImh0dHBzOi8vbG9pbmMub3JnL1wiPkxPSU5DPC9hPiM3NTMyNi05KTwvc3Bhbj48L3A-PHA-PGI-Y29kZTwvYj46IFR5cGUgMiBEaWFiZXRlcyBNZWxsaXR1cyA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQ6IExpZ2h0R29sZGVuUm9kWWVsbG93OyBtYXJnaW46IDRweDsgYm9yZGVyOiAxcHggc29saWQga2hha2lcIj4gKDxhIGhyZWY9XCJodHRwczovL2Jyb3dzZXIuaWh0c2RvdG9vbHMub3JnL1wiPlNOT01FRCBDVDwvYT4jNDQwNTQwMDYpPC9zcGFuPjwvcD48cD48Yj5zdWJqZWN0PC9iPjogPGEgaHJlZj1cIiNQYXRpZW50Xzk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZVwiPlNlZSBhYm92ZSAodXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlKTwvYT48L3A-PHA-PGI-b25zZXQ8L2I-OiAyMDA2LTAxLTAxPC9wPjxwPjxiPmFzc2VydGVyPC9iPjogPGEgaHJlZj1cIiNQcmFjdGl0aW9uZXJfMDgyMGMxNmQtOTFkZS00ZGZhLWEzYTYtZjE0MGE1MTZhOWJjXCI-U2VlIGFib3ZlICh1cm46dXVpZDowODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmMpPC9hPjwvcD48L2Rpdj4iLCJzdGF0dXMiOiJnZW5lcmF0ZWQifX19LHsiZnVsbFVybCI6InVybjp1dWlkOjVjZTVjODNhLTAwMGYtNDdkMi05NDFjLTAzOTM1OGNjOTExMiIsInJlc291cmNlIjp7ImNsYXNzIjp7ImNvZGUiOiJFTUVSIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92My1BY3RDb2RlIn0sImlkIjoiNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyIiwicGFydGljaXBhbnQiOlt7ImluZGl2aWR1YWwiOnsiZGlzcGxheSI6IkpvaG4gSGFuY29jayIsInJlZmVyZW5jZSI6InVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYyJ9fV0sInBlcmlvZCI6eyJlbmQiOiIyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwIiwic3RhcnQiOiIyMDIxLTEwLTI1VDIwOjEwOjI5LTA3OjAwIn0sInJlc291cmNlVHlwZSI6IkVuY291bnRlciIsInNlcnZpY2VQcm92aWRlciI6eyJkaXNwbGF5IjoiQ0RFWCBFeGFtcGxlIE9yZ2FuaXphdGlvbiIsInJlZmVyZW5jZSI6InVybjp1dWlkOmUzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhMyJ9LCJzdGF0dXMiOiJmaW5pc2hlZCIsInN1YmplY3QiOnsiZGlzcGxheSI6IkNERVggRXhhbXBsZSBQYXRpZW50IiwicmVmZXJlbmNlIjoidXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlIn0sInRleHQiOnsiZGl2IjoiPGRpdiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48cD48Yj5HZW5lcmF0ZWQgTmFycmF0aXZlPC9iPjwvcD48ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllMGU3OyBwYWRkaW5nOiA2cHg7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCAjOGRhMWI0OyBib3JkZXItcmFkaXVzOiA1cHg7IGxpbmUtaGVpZ2h0OiA2MCVcIj48cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBweFwiPlJlc291cmNlIFwiNWNlNWM4M2EtMDAwZi00N2QyLTk0MWMtMDM5MzU4Y2M5MTEyXCIgPC9wPjwvZGl2PjxwPjxiPnN0YXR1czwvYj46IGZpbmlzaGVkPC9wPjxwPjxiPmNsYXNzPC9iPjogZW1lcmdlbmN5IChEZXRhaWxzOiBodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YzLUFjdENvZGUgY29kZSBFTUVSID0gJ2VtZXJnZW5jeScsIHN0YXRlZCBhcyAnbnVsbCcpPC9wPjxwPjxiPnR5cGU8L2I-OiBVbmtub3duIChxdWFsaWZpZXIgdmFsdWUpIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZDogTGlnaHRHb2xkZW5Sb2RZZWxsb3c7IG1hcmdpbjogNHB4OyBib3JkZXI6IDFweCBzb2xpZCBraGFraVwiPiAoPGEgaHJlZj1cImh0dHBzOi8vYnJvd3Nlci5paHRzZG90b29scy5vcmcvXCI-U05PTUVEIENUPC9hPiMyNjE2NjUwMDYpPC9zcGFuPjwvcD48cD48Yj5zdWJqZWN0PC9iPjogPGEgaHJlZj1cIiNQYXRpZW50Xzk3MGFmNmM5LTViYmQtNDA2Ny1iNmMxLWQ5YjJjODIzYWVjZVwiPlNlZSBhYm92ZSAodXJuOnV1aWQ6OTcwYWY2YzktNWJiZC00MDY3LWI2YzEtZDliMmM4MjNhZWNlOiBDREVYIEV4YW1wbGUgUGF0aWVudCk8L2E-PC9wPjxoMz5QYXJ0aWNpcGFudHM8L2gzPjx0YWJsZSBjbGFzcz1cImdyaWRcIj48dHI-PHRkPi08L3RkPjx0ZD48Yj5JbmRpdmlkdWFsPC9iPjwvdGQ-PC90cj48dHI-PHRkPio8L3RkPjx0ZD48YSBocmVmPVwiI1ByYWN0aXRpb25lcl8wODIwYzE2ZC05MWRlLTRkZmEtYTNhNi1mMTQwYTUxNmE5YmNcIj5TZWUgYWJvdmUgKHVybjp1dWlkOjA4MjBjMTZkLTkxZGUtNGRmYS1hM2E2LWYxNDBhNTE2YTliYzogSm9obiBIYW5jb2NrKTwvYT48L3RkPjwvdHI-PC90YWJsZT48cD48Yj5wZXJpb2Q8L2I-OiAyMDIxLTEwLTI1VDIwOjEwOjI5LTA3OjAwIC0tJmd0OyAyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwPC9wPjxwPjxiPnNlcnZpY2VQcm92aWRlcjwvYj46IDxhIGhyZWY9XCIjT3JnYW5pemF0aW9uX2UzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhM1wiPlNlZSBhYm92ZSAodXJuOnV1aWQ6ZTM3ZjAwNGItZGMxMC00MjJiLWI4MzMtY2RhYTEwYTA1NWEzOiBDREVYIEV4YW1wbGUgT3JnYW5pemF0aW9uKTwvYT48L3A-PC9kaXY-Iiwic3RhdHVzIjoiZ2VuZXJhdGVkIn0sInR5cGUiOlt7ImNvZGluZyI6W3siY29kZSI6IjI2MTY2NTAwNiIsImRpc3BsYXkiOiJVbmtub3duIChxdWFsaWZpZXIgdmFsdWUpIiwic3lzdGVtIjoiaHR0cDovL3Nub21lZC5pbmZvL3NjdCJ9XSwidGV4dCI6IlVua25vd24gKHF1YWxpZmllciB2YWx1ZSkifV19fSx7ImZ1bGxVcmwiOiJ1cm46dXVpZDplMzdmMDA0Yi1kYzEwLTQyMmItYjgzMy1jZGFhMTBhMDU1YTMiLCJyZXNvdXJjZSI6eyJhY3RpdmUiOnRydWUsImFkZHJlc3MiOlt7ImNpdHkiOiJCb3N0b24iLCJjb3VudHJ5IjoiVVNBIiwibGluZSI6WyIxIENERVggTGFuZSJdLCJwb3N0YWxDb2RlIjoiMDEwMDIiLCJzdGF0ZSI6Ik1BIn1dLCJpZCI6ImUzN2YwMDRiLWRjMTAtNDIyYi1iODMzLWNkYWExMGEwNTVhMyIsIm5hbWUiOiJDREVYIEV4YW1wbGUgT3JnYW5pemF0aW9uIiwicmVzb3VyY2VUeXBlIjoiT3JnYW5pemF0aW9uIiwidGVsZWNvbSI6W3sic3lzdGVtIjoicGhvbmUiLCJ2YWx1ZSI6IigrMSkgNTU1LTU1NS01NTU1In0seyJzeXN0ZW0iOiJlbWFpbCIsInZhbHVlIjoiY3VzdG9tZXItc2VydmljZUBleGFtcGxlLm9yZyJ9XSwidGV4dCI6eyJkaXYiOiI8ZGl2IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPjxwPjxiPkdlbmVyYXRlZCBOYXJyYXRpdmU8L2I-PC9wPjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJhY2tncm91bmQtY29sb3I6ICNkOWUwZTc7IHBhZGRpbmc6IDZweDsgbWFyZ2luOiA0cHg7IGJvcmRlcjogMXB4IHNvbGlkICM4ZGExYjQ7IGJvcmRlci1yYWRpdXM6IDVweDsgbGluZS1oZWlnaHQ6IDYwJVwiPjxwIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMHB4XCI-UmVzb3VyY2UgXCJlMzdmMDA0Yi1kYzEwLTQyMmItYjgzMy1jZGFhMTBhMDU1YTNcIiA8L3A-PC9kaXY-PHA-PGI-YWN0aXZlPC9iPjogdHJ1ZTwvcD48cD48Yj5uYW1lPC9iPjogQ0RFWCBFeGFtcGxlIE9yZ2FuaXphdGlvbjwvcD48cD48Yj50ZWxlY29tPC9iPjogcGg6ICgrMSkgNTU1LTU1NS01NTU1LCA8YSBocmVmPVwibWFpbHRvOmN1c3RvbWVyLXNlcnZpY2VAZXhhbXBsZS5vcmdcIj5jdXN0b21lci1zZXJ2aWNlQGV4YW1wbGUub3JnPC9hPjwvcD48cD48Yj5hZGRyZXNzPC9iPjogMSBDREVYIExhbmUgQm9zdG9uIE1BIDAxMDAyIFVTQSA8L3A-PC9kaXY-Iiwic3RhdHVzIjoiZ2VuZXJhdGVkIn19fV0sImlkZW50aWZpZXIiOnsic3lzdGVtIjoidXJuOmlldGY6cmZjOjM5ODYiLCJ2YWx1ZSI6InVybjp1dWlkOmMxNzM1MzVlLTEzNWUtNDhlMy1hYjY0LTM4YmFjYzY4ZGJhOCJ9LCJyZXNvdXJjZVR5cGUiOiJCdW5kbGUiLCJ0aW1lc3RhbXAiOiIyMDIxLTEwLTI1VDIwOjE2OjI5LTA3OjAwIiwidHlwZSI6ImRvY3VtZW50In0.JAET6A3W8KXfOYOE-gM4yfSmN0uMInsj3CrMUtQRcOKZ4V4I9-aZxavMXUnuoIznKj9rBir-O8tFCfjbLjrkXv4SVVuuLiFOW4YigjRYH_Dg4LuwiT72kYGoRYVH14rqSVYCOEBVnWAVT25xAJ05Lu5z2Z5JQ5ReuLIjXd8rSYZbpLaF8jBxKWFBo_L2_6RtqTdNo3OkRYgtP5NgiwtOIyoWBw-XBaXAtFtNdWCU14vOk_tJJ0Sg6lYojE881qWUsi1BgFWfswa1xJXIa8XcpA_-kdTvlYiO2ZJOqXuyJt2_xjA9AV4mx3Tmmxl7q6xcgyOlQBKLBUWJUGET_1ddHdVV6uIC_93OyO9FL_Szw3iWElGLtXerLbEHGlDmR8OJU--NaJCeyDVnbYAeLEkeSu6Kpc0K_nrZzvr8Rn-_nI3C1UjXSN24th_sOkYbQ63NsFgifJlyY8uLS-uu6jWd3Wadydq7J6haX9BB9wtB0bRWzqYutvCYlvygxzFAD9ui'
</pre>




```python
!openssl x509 -in recd_cert.der -inform DER -pubkey -noout > recd-public-key.pem
with open('recd-public-key.pem') as f:
<pre style="border:0; overflow-wrap:break-word;">
pem_public = f.read()
</pre>
pem_public
```




<pre style="border:0; overflow-wrap:break-word;">
'-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEA6SnEpKADOrFttfr1k3iF\nThsddDFmrEMu1R4nes8qlwATPs53wZ13p8lNI9RU7z5kXzg6Dg11bj1MA6JoQh4f\nm3JVvSjNqOet3MUShLwZ2h67I8OcjZsTuWIxEW4bR3UHqpLXcN1WBEUfR6MSztxZ\nLM0dvdh0weMVt8lpVd4E5DEKMz0nCSh92xvD6qugGDyewuGASJVEnQTFZd6p3hH4\nO37sYhX16H3U1Zu6zIohu1/c+Nz34pamnorH5rUcQJUcBDV6x9zrzgz8i9K05xvA\nrGwF2FSDJnXR3uGRfaZYfebI+KTE4S7XCV/6PVxy44exJmcoCR1hEKuD8BcGXZm3\nH4Qpjq/PB/AW1K7v+1es27BtTdQlpZ3ZW1c5y/tyDDq/JF2h3Gp6n3JIBVeBK534\nxSatTiGgJrDI/OcTJI8ly8nCy/7uZ9qOgYPd/1EX6rjqEiBjgkduQ2mc6cNpN7O6\nBPXTMBFl7X14GLYdm5Y8ubRR9Bo6TpMdO4+2U+R58Z5bAgMBAAE=\n-----END PUBLIC KEY-----\n'
</pre>




```python
try:
    verify = jws.verify(recd_jws, pem_public , algorithms=['RS256'])
    print('#     #                                                ### ')
    print('#     #  ######  #####   #  ######  #  ######  #####   ### ')
    print('#     #  #       #    #  #  #       #  #       #    #  ### ')
    print('#     #  #####   #    #  #  #####   #  #####   #    #   #  ')
    print(' #   #   #       #####   #  #       #  #       #    #      ')
    print('  # #    #       #   #   #  #       #  #       #    #  ### ')
    print('   #     ######  #    #  #  #       #  ######  #####   ### ')
    print('                                                           ')

except Exception as e:
    print('#    #   ####   #####      #    #  ######  #####   #  ######  #  ######  #####       ###          #   ')
    print('##   #  #    #    #        #    #  #       #    #  #  #       #  #       #    #       #          #    ')
    print('# #  #  #    #    #        #    #  #####   #    #  #  #####   #  #####   #    #           #####  #    ')
    print('#  # #  #    #    #        #    #  #       #####   #  #       #  #       #    #       #          #    ')
    print('#   ##  #    #    #         #  #   #       #   #   #  #       #  #       #    #      ###          #   ')
    print('#    #   ####     #          ##    ######  #    #  #  #       #  ######  #####        #            ## ')
    print('                ')
    print(f"not verified: {e}")
```

<pre style="border:0; overflow-wrap:break-word;">
#     #                                                ###
#     #  ######  #####   #  ######  #  ######  #####   ###
#     #  #       #    #  #  #       #  #       #    #  ###
#     #  #####   #    #  #  #####   #  #####   #    #   #  
 #   #   #       #####   #  #       #  #       #    #      
  # #    #       #   #   #  #       #  #       #    #  ###
   #     ######  #    #  #  #       #  ######  #####   ###
</pre>


---

// File: input/pagecontent/signed-searchset-bundle-example.md


<!-- # Da Vinci CDEX Digital Signature SearchSet Bundle Example -->

This is a Jupyter Notebook which uses openSSL, Python 3.7, and the Python jcs and jose libraries to create a JSON Web Signature (JWS)(see RFC 7515), attach it to a FHIR Bundle and validate it. Its source code be found [here](https://github.com/HL7/davinci-ecdx/blob/master/CDEX-Signatures/Digsig_Document_Bundle_Example.ipynb)

*Although self-signed certificates are used for the purpose of these examples, they are not recommended for production systems.*

### Sender/Signer Steps

**1. Generate RSA256 public and private keys for signing the bundle**

*DO THIS STEP ONLY ONCE*

**2. Create a self-signed certificate for authenticating the signer**

create the public and private keys and cert using openssl on the command line.

1. pre-configure the self-signed cert with a configuration file

~~~
[req]
default_bit = 4096
distinguished_name = req_distinguished_name
prompt = no
x509_extensions = v3_ca

[req_distinguished_name]
countryName             = US
stateOrProvinceName     = California
localityName            = Sausalito
organizationName        = HealtheData1
commonName              = Eric Haas, DVM
emailAddress            = ehaas@healthedata1.org

[v3_ca]
basicConstraints = CA:TRUE
keyUsage=nonRepudiation, digitalSignature, keyEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = www.healthedatainc.com
~~~

2\. generate the public and private keys and cert

~~~
!openssl genrsa -out private-key.pem 3072
!openssl rsa -in private-key.pem -pubout -out public-key.pem
!openssl req -new -x509 -key private-key.pem -outform DER -out cert.der -days 360 -config cert.config
~~~

*For the purpose of this example display the keys (normally would never share the private key)*


```python
!cat private-key.pem
!echo
!cat public-key.pem
```

<pre style="border:0; overflow-wrap:break-word;">
-----BEGIN RSA PRIVATE KEY-----
MIIG4wIBAAKCAYEA6SnEpKADOrFttfr1k3iFThsddDFmrEMu1R4nes8qlwATPs53
wZ13p8lNI9RU7z5kXzg6Dg11bj1MA6JoQh4fm3JVvSjNqOet3MUShLwZ2h67I8Oc
jZsTuWIxEW4bR3UHqpLXcN1WBEUfR6MSztxZLM0dvdh0weMVt8lpVd4E5DEKMz0n
CSh92xvD6qugGDyewuGASJVEnQTFZd6p3hH4O37sYhX16H3U1Zu6zIohu1/c+Nz3
4pamnorH5rUcQJUcBDV6x9zrzgz8i9K05xvArGwF2FSDJnXR3uGRfaZYfebI+KTE
4S7XCV/6PVxy44exJmcoCR1hEKuD8BcGXZm3H4Qpjq/PB/AW1K7v+1es27BtTdQl
pZ3ZW1c5y/tyDDq/JF2h3Gp6n3JIBVeBK534xSatTiGgJrDI/OcTJI8ly8nCy/7u
Z9qOgYPd/1EX6rjqEiBjgkduQ2mc6cNpN7O6BPXTMBFl7X14GLYdm5Y8ubRR9Bo6
TpMdO4+2U+R58Z5bAgMBAAECggGANf/QZPgSB2PULtNCULcW2HH7Lk/KoZaloAHt
zslv6azAyEj0/0hCz/8U+HlSel4OzOauu1ZunetgUW8pijaDx3KBXN+4UafmYjzZ
/xe5PQTk/nFtLnZ96O9OweSoOLJn5h8/+gmoxDBmACdKUdJCbNfMTY117Pl0rC3f
UV2r8FVTMW62Pa69ByO1CgJZf4N6mVO0bBr12w+hz+fzm1S6Er1gbY78dq29vwLk
Dj7ndQfMm25Bkp6lVA58IXhMZMCjXSbei1aHxYBXAcAJP5bouiAxqnb2rZ5QM1W1
CpLuJ0HbGGl0y6aWZenV/C5JEDKqqh62KUGPnTeJLgpJpnuK59y7K+0dcFFKji5C
0d61lTaOKxHz3X11043j9+pJYJ8bEpxwimO+1i6boBNrB++i5cC8UKxK0Zw6o3HW
Xfko57EJR6oCiWeorgHZTF6wud4WlRkOMrt7EkrhbPQF8lcahCKGCwI63wxcCtE6
Wf784Dto+kQSQj6+G2V385utiXExAoHBAP95t1kQdTQl3ASwA3wvnU1oRzsj83DS
Qrg2vhJlhTUwKIsxKYIvL/KQQFsd4/ejr5nGurlAcFsRlA6cR94LXL2DWvvy52uP
r1UeOPeJ7DiFu2IY8ehtX9wEbt1dLYkgwTmkwASQIJsaNCgMH+1y5jcWdWGmHqf8
Y4z3/JerrT1FRT/Sgsp34HrzeCAajyRLK/qzDU1ieXYWVMnv+ZGEl5DFMvFRf0dP
IJHT7uuHdAvXw1tRcvsYtGIdiHyNDGjcpQKBwQDppFL2n50Fx3oWanXIspWS4Whq
PgBm2wTz5o+LGQIRj0m6qD5q+/mXdxxzj8zY3qlkQj1YGT2Bog9cYL2+PuNqnHeq
coi6uVf0zruq9XcrCoYs5sT4GT57LdRQK3xtGXURFbrVc/wjn7rU1/XhqThQADGx
cHvUVc37Pkvirf0/hAkW3KwOBEsXn8IYJ5JydBOm957NvoEAGCcI9tc0FM7xl4I7
CMzSYl+i/tXy/sec45Y514LXun8Tvm09uj8Qnv8CgcBX7HDwgxyDLQBy0IzygYSW
rmvNa8sNqh9yPMzfkfbtXjyl4u6RMmJDDehIM5pQkRIPT3jV5tqETSFygdCuF6T8
SCfZDDkfKJ1EIxmh/+K/dS8PTNx8jJ/wHcp1/up8BjzZ9Nxs9ZlzJ+qJWdrnIqMe
lGkjiUOFtvQgAPz6ygfeTWfO1klTGzyzs/VEvz9CU2i4aEUMu/ZncLoPobp3nXV4
SpYEvXKbfR0Ncy4H+18x8Dj4xahXyKHUHqvpibWapU0CgcEAinvgxNd0neFPZwvx
BmV7rJS4bAiV+mElPV/SgzLue/P/Uoi4fncdyH5MOd7pHz5TDt8INzi2sSiajDm3
HZVu/FkDwN6kVnDXRn5m0/0shjF1uBWMeDWWSDKw3lf4Jz5omhjUJgLaV08s0U20
Ku4/N4P18GNoskGtlpalKhXQvp4HOSrRPHmk/Lqvs9t4vSg6IcQxt2eMVL78HB8b
DX6r7pzMDyu3I5g1cYo0zBPhwwdOmrg3kKC1A8HiRC0phjOHAoHAbayWoC7XWsKx
1XzirFof87u47oEAcu0VlOJOwCr270J2Q1jyLMRCvgNQYvZz6nTJt0jcXazZrBTQ
jkwHgb7kFFSTqrE3Uj8Bmm6O+WnoY2+zi4leSe8yz3SRpLL1w9S1p40XQGLJhIX+
GJr5shr9osadWap/vzl244Do4Od/NMehLl6ibyu1UteRexDp8JjyUBwAAC50kMYP
OavUzEG9Ymb4t4yNjaso6C7ZNVcbJTJeI1A153p0uH3xJqFefai2
-----END RSA PRIVATE KEY-----

-----BEGIN PUBLIC KEY-----
MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEA6SnEpKADOrFttfr1k3iF
ThsddDFmrEMu1R4nes8qlwATPs53wZ13p8lNI9RU7z5kXzg6Dg11bj1MA6JoQh4f
m3JVvSjNqOet3MUShLwZ2h67I8OcjZsTuWIxEW4bR3UHqpLXcN1WBEUfR6MSztxZ
LM0dvdh0weMVt8lpVd4E5DEKMz0nCSh92xvD6qugGDyewuGASJVEnQTFZd6p3hH4
O37sYhX16H3U1Zu6zIohu1/c+Nz34pamnorH5rUcQJUcBDV6x9zrzgz8i9K05xvA
rGwF2FSDJnXR3uGRfaZYfebI+KTE4S7XCV/6PVxy44exJmcoCR1hEKuD8BcGXZm3
H4Qpjq/PB/AW1K7v+1es27BtTdQlpZ3ZW1c5y/tyDDq/JF2h3Gp6n3JIBVeBK534
xSatTiGgJrDI/OcTJI8ly8nCy/7uZ9qOgYPd/1EX6rjqEiBjgkduQ2mc6cNpN7O6
BPXTMBFl7X14GLYdm5Y8ubRR9Bo6TpMdO4+2U+R58Z5bAgMBAAE=
-----END PUBLIC KEY-----
</pre>

Display DER Format of Certificate


```python
!openssl x509 -in cert.der -inform DER -text
```

<pre style="border:0; overflow-wrap:break-word;">
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 16322561221100825744 (0xe28562f33047ec90)
    Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=US, ST=California, L=Sausalito, O=HealtheData1, CN=Eric Haas, DVM/emailAddress=ehaas@healthedata1.org
        Validity
            Not Before: Oct 27 17:42:04 2021 GMT
            Not After : Oct 22 17:42:04 2022 GMT
        Subject: C=US, ST=California, L=Sausalito, O=HealtheData1, CN=Eric Haas, DVM/emailAddress=ehaas@healthedata1.org
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (3072 bit)
                Modulus:
                    00:e9:29:c4:a4:a0:03:3a:b1:6d:b5:fa:f5:93:78:
                    85:4e:1b:1d:74:31:66:ac:43:2e:d5:1e:27:7a:cf:
                    2a:97:00:13:3e:ce:77:c1:9d:77:a7:c9:4d:23:d4:
                    54:ef:3e:64:5f:38:3a:0e:0d:75:6e:3d:4c:03:a2:
                    68:42:1e:1f:9b:72:55:bd:28:cd:a8:e7:ad:dc:c5:
                    12:84:bc:19:da:1e:bb:23:c3:9c:8d:9b:13:b9:62:
                    31:11:6e:1b:47:75:07:aa:92:d7:70:dd:56:04:45:
                    1f:47:a3:12:ce:dc:59:2c:cd:1d:bd:d8:74:c1:e3:
                    15:b7:c9:69:55:de:04:e4:31:0a:33:3d:27:09:28:
                    7d:db:1b:c3:ea:ab:a0:18:3c:9e:c2:e1:80:48:95:
                    44:9d:04:c5:65:de:a9:de:11:f8:3b:7e:ec:62:15:
                    f5:e8:7d:d4:d5:9b:ba:cc:8a:21:bb:5f:dc:f8:dc:
                    f7:e2:96:a6:9e:8a:c7:e6:b5:1c:40:95:1c:04:35:
                    7a:c7:dc:eb:ce:0c:fc:8b:d2:b4:e7:1b:c0:ac:6c:
                    05:d8:54:83:26:75:d1:de:e1:91:7d:a6:58:7d:e6:
                    c8:f8:a4:c4:e1:2e:d7:09:5f:fa:3d:5c:72:e3:87:
                    b1:26:67:28:09:1d:61:10:ab:83:f0:17:06:5d:99:
                    b7:1f:84:29:8e:af:cf:07:f0:16:d4:ae:ef:fb:57:
                    ac:db:b0:6d:4d:d4:25:a5:9d:d9:5b:57:39:cb:fb:
                    72:0c:3a:bf:24:5d:a1:dc:6a:7a:9f:72:48:05:57:
                    81:2b:9d:f8:c5:26:ad:4e:21:a0:26:b0:c8:fc:e7:
                    13:24:8f:25:cb:c9:c2:cb:fe:ee:67:da:8e:81:83:
                    dd:ff:51:17:ea:b8:ea:12:20:63:82:47:6e:43:69:
                    9c:e9:c3:69:37:b3:ba:04:f5:d3:30:11:65:ed:7d:
                    78:18:b6:1d:9b:96:3c:b9:b4:51:f4:1a:3a:4e:93:
                    1d:3b:8f:b6:53:e4:79:f1:9e:5b
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints:
                CA:TRUE
            X509v3 Key Usage:
                Digital Signature, Non Repudiation, Key Encipherment
            X509v3 Subject Alternative Name:
                DNS:www.healthedatainc.com
    Signature Algorithm: sha256WithRSAEncryption
         0a:e3:14:36:af:5a:cb:ef:9e:e5:80:bb:40:53:bd:e2:b7:f3:
         c4:64:27:17:71:a4:95:93:40:5e:62:2b:ec:f5:46:76:21:98:
         d8:64:f1:ff:d4:6d:1c:2c:13:2b:39:0b:fb:2b:ca:a2:37:99:
         f5:d5:4a:f3:0a:c6:56:24:64:3b:f8:d4:c9:9f:8a:71:64:68:
         91:48:ec:e7:d9:dc:24:64:4c:49:24:71:b5:e0:90:ba:3b:78:
         85:fd:be:fe:a5:7e:7f:6b:0c:42:d1:2b:c0:f1:37:d2:f6:ea:
         45:85:0d:34:d0:55:11:0a:5a:43:1f:da:70:90:d4:bf:db:fb:
         b2:31:e2:24:3a:97:c1:0f:ab:ce:3f:79:88:70:08:69:e1:07:
         a8:5f:cc:b3:6d:a9:d9:b7:99:ba:ab:c8:40:a7:8c:97:eb:2f:
         56:a1:ed:8a:ec:d6:9c:5e:14:e9:52:26:a6:4a:f8:6c:79:7b:
         7a:05:7d:1f:a9:7a:4f:64:8c:92:3e:aa:0d:4e:5e:f4:d8:34:
         66:52:d3:b6:8b:2c:84:12:e6:a2:91:7b:7b:b1:f2:ad:31:00:
         99:f3:8f:29:07:b4:12:0f:44:da:ea:f3:c6:a0:6e:1b:9e:24:
         e7:41:b6:27:41:62:3e:c4:09:02:11:62:34:6c:12:83:84:b7:
         1f:25:43:1b:bb:9e:29:dd:0b:f7:7c:0a:38:d3:98:1a:f3:0a:
         8b:30:87:07:ea:4a:bc:43:09:a1:9f:32:f6:e8:81:f8:71:57:
         72:9f:51:68:9a:89:f7:b1:e9:65:31:2f:fa:58:82:a7:63:d2:
         5f:37:0a:d2:bd:b9:49:cc:a3:17:a7:4b:a2:e2:b6:48:1d:f4:
         c4:0b:c9:f2:d1:39:f3:8f:a3:a9:0e:82:19:e7:14:f5:78:ef:
         94:08:ee:25:d0:ab:0d:e5:4f:b2:39:27:ec:e3:d7:1b:ef:17:
         65:4e:f3:a8:76:4d:99:75:f5:61:8e:07:e6:b8:04:27:8f:25:
         ad:4a:cf:dc:8f:11
-----BEGIN CERTIFICATE-----
MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYD
VQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRv
MRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZN
MSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAy
NzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
DApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0
aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEW
FmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAw
ggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXen
yU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5
YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3b
G8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43Pfilqae
isfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJ
X/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlb
VznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6B
g93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07
j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYD
VR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOC
AYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwT
KzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+
/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAI
aeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SM
kj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2
J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB
+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+j
qQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP
3I8R
-----END CERTIFICATE-----
</pre>

Display PEM Format of Certificate


```python
!openssl x509 -in cert.der -inform DER -outform PEM -out cert.pem
!cat cert.pem
```

<pre style="border:0; overflow-wrap:break-word;">
-----BEGIN CERTIFICATE-----
MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYD
VQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRv
MRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZN
MSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAy
NzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
DApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0
aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEW
FmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAw
ggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXen
yU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5
YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3b
G8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43Pfilqae
isfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJ
X/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlb
VznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6B
g93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07
j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYD
VR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOC
AYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwT
KzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+
/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAI
aeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SM
kj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2
J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB
+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+j
qQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP
3I8R
-----END CERTIFICATE-----
</pre>

**3. Create JWS to Attach to Bundle**

**3.1. Prepare Header**

 note the base64 DER is Cert PEM file wihout the footer and header and line returns


```python
with open('cert.pem') as f:
    der = (f.read())  # base64 DER is PEM wihout the footer and header and line returns
der = der.replace('-----BEGIN CERTIFICATE-----','')
der = der.replace('-----END CERTIFICATE-----','')
der = der.replace('\n','')
```


```python
header = {"alg": "RS256","kty": "RS", "x5c": [der]}
header
```


<pre style="border:0; overflow-wrap:break-word;">
{'alg': 'RS256',
 'kty': 'RS',
 'x5c': ['MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRvMRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZNMSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAyNzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEWFmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAwggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXenyU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3bG8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43PfilqaeisfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJX/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlbVznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6Bg93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYDVR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOCAYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwTKzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAIaeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SMkj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+jqQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP3I8R']}
</pre>


**3.2. Prepare Payload**

The payload is the base64_url form of the canonicalized version of the  searchset Bundle before attaching the signature


Canonicalize the bundle using IETF JSON Canonicalization Scheme (JCS) before adding the signature element:

- Remove the id and meta elements if present before canonicalization
- The base64_url of the payload entry is combined with 3.3 below using the jws.sign method.

```python
from jcs import canonicalize #package for a JCS (RFC 8785) compliant canonicalizer.
from json import loads
searchset_bundle = r'''{
  "resourceType": "Bundle",
  "id": "d88e2910-3c95-469d-b1f4-ab5553b471fb",
  "meta": {
    "lastUpdated": "2020-10-23T04:54:56.048+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [ {
    "relation": "self",
    "url": "http://hapi.fhir.org/baseR4/Condition?patient=06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b&clinical-status=active,recurrance,remission"
  } ],
  "entry": [ {
    "fullUrl": "http://hapi.fhir.org/baseR4/Condition/4ac41715-fcbd-421c-8796-9b2c9706dd3f",
    "resource": {
      "resourceType": "Condition",
      "id": "4ac41715-fcbd-421c-8796-9b2c9706dd3f",
      "meta": {
        "versionId": "10",
        "lastUpdated": "2020-04-28T20:28:00.008+00:00",
        "source": "#cabiJIK51sD2iz4N",
        "profile": [ "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition" ]
      },
      "clinicalStatus": {
        "coding": [ {
          "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
          "code": "active"
        } ]
      },
      "verificationStatus": {
        "coding": [ {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "confirmed"
        } ]
      },
      "category": [ {
        "coding": [ {
          "system": "http://terminology.hl7.org/CodeSystem/condition-category",
          "code": "encounter-diagnosis",
          "display": "Encounter Diagnosis"
        } ]
      } ],
      "code": {
        "coding": [ {
          "system": "http://snomed.info/sct",
          "code": "1234",
          "display": "Examplitis"
        } ],
        "text": "Examplitis"
      },
      "subject": {
        "reference": "https://example.org/Patient/06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b"
      },
      "encounter": {
        "reference": "https://example.org/Encounter/5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82"
      },
      "onsetDateTime": "2018-10-21T21:22:15-07:00",
      "recordedDate": "2018-10-21T21:22:15-07:00"
    },
    "search": {
      "mode": "match"
    }
  } ]
}
'''
searchset_bundle = loads(searchset_bundle) #convert to Python object
searchset_bundle_id = searchset_bundle.pop("id") # remove id
searchset_bundle_meta = searchset_bundle.pop("meta") # remove meta
payload = canonicalize(searchset_bundle)
payload
```




<pre style="border:0; overflow-wrap:break-word;">
b'{"entry":[{"fullUrl":"http://hapi.fhir.org/baseR4/Condition/4ac41715-fcbd-421c-8796-9b2c9706dd3f","resource":{"category":[{"coding":[{"code":"encounter-diagnosis","display":"Encounter Diagnosis","system":"http://terminology.hl7.org/CodeSystem/condition-category"}]}],"clinicalStatus":{"coding":[{"code":"active","system":"http://terminology.hl7.org/CodeSystem/condition-clinical"}]},"code":{"coding":[{"code":"1234","display":"Examplitis","system":"http://snomed.info/sct"}],"text":"Examplitis"},"encounter":{"reference":"https://example.org/Encounter/5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82"},"id":"4ac41715-fcbd-421c-8796-9b2c9706dd3f","meta":{"lastUpdated":"2020-04-28T20:28:00.008+00:00","profile":["http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"],"source":"#cabiJIK51sD2iz4N","versionId":"10"},"onsetDateTime":"2018-10-21T21:22:15-07:00","recordedDate":"2018-10-21T21:22:15-07:00","resourceType":"Condition","subject":{"reference":"https://example.org/Patient/06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b"},"verificationStatus":{"coding":[{"code":"confirmed","system":"http://terminology.hl7.org/CodeSystem/condition-ver-status"}]}},"search":{"mode":"match"}}],"link":[{"relation":"self","url":"http://hapi.fhir.org/baseR4/Condition?patient=06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b&clinical-status=active,recurrance,remission"}],"resourceType":"Bundle","total":1,"type":"searchset"}'
</pre>



**3.3 Create Signature using private key and the RS256 algorithm to get the JWS compact serialization format**

note the signature is displayed with the parts labeled and separated with line breaks for easier viewing.


```python
from jose import jws
with open('private-key.pem') as f:
    private_key = (f.read())

signature = jws.sign(payload,private_key,algorithm='RS256',headers=header)

labels = ['header', 'payload', 'signature']
for i,j in enumerate(signature.split('.')):
    print(f'{labels[i]}:')
    print(f'{j}')
    print()
```

<pre style="border:0; overflow-wrap:break-word;">
header:
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ

payload:
eyJlbnRyeSI6W3siZnVsbFVybCI6Imh0dHA6Ly9oYXBpLmZoaXIub3JnL2Jhc2VSNC9Db25kaXRpb24vNGFjNDE3MTUtZmNiZC00MjFjLTg3OTYtOWIyYzk3MDZkZDNmIiwicmVzb3VyY2UiOnsiY2F0ZWdvcnkiOlt7ImNvZGluZyI6W3siY29kZSI6ImVuY291bnRlci1kaWFnbm9zaXMiLCJkaXNwbGF5IjoiRW5jb3VudGVyIERpYWdub3NpcyIsInN5c3RlbSI6Imh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29uZGl0aW9uLWNhdGVnb3J5In1dfV0sImNsaW5pY2FsU3RhdHVzIjp7ImNvZGluZyI6W3siY29kZSI6ImFjdGl2ZSIsInN5c3RlbSI6Imh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29uZGl0aW9uLWNsaW5pY2FsIn1dfSwiY29kZSI6eyJjb2RpbmciOlt7ImNvZGUiOiIxMjM0IiwiZGlzcGxheSI6IkV4YW1wbGl0aXMiLCJzeXN0ZW0iOiJodHRwOi8vc25vbWVkLmluZm8vc2N0In1dLCJ0ZXh0IjoiRXhhbXBsaXRpcyJ9LCJlbmNvdW50ZXIiOnsicmVmZXJlbmNlIjoiaHR0cHM6Ly9leGFtcGxlLm9yZy9FbmNvdW50ZXIvNWZlNjJjZDUtYmZjZi00ZDNiLWExZTktODBkNmY3NWQ2ZjgyIn0sImlkIjoiNGFjNDE3MTUtZmNiZC00MjFjLTg3OTYtOWIyYzk3MDZkZDNmIiwibWV0YSI6eyJsYXN0VXBkYXRlZCI6IjIwMjAtMDQtMjhUMjA6Mjg6MDAuMDA4KzAwOjAwIiwicHJvZmlsZSI6WyJodHRwOi8vaGw3Lm9yZy9maGlyL3VzL2NvcmUvU3RydWN0dXJlRGVmaW5pdGlvbi91cy1jb3JlLWNvbmRpdGlvbiJdLCJzb3VyY2UiOiIjY2FiaUpJSzUxc0QyaXo0TiIsInZlcnNpb25JZCI6IjEwIn0sIm9uc2V0RGF0ZVRpbWUiOiIyMDE4LTEwLTIxVDIxOjIyOjE1LTA3OjAwIiwicmVjb3JkZWREYXRlIjoiMjAxOC0xMC0yMVQyMToyMjoxNS0wNzowMCIsInJlc291cmNlVHlwZSI6IkNvbmRpdGlvbiIsInN1YmplY3QiOnsicmVmZXJlbmNlIjoiaHR0cHM6Ly9leGFtcGxlLm9yZy9QYXRpZW50LzA2ZTFmMGRkLTVmYmUtNDQ4MC05YmI0LTZiNTRlYzAyZDMxYiJ9LCJ2ZXJpZmljYXRpb25TdGF0dXMiOnsiY29kaW5nIjpbeyJjb2RlIjoiY29uZmlybWVkIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb25kaXRpb24tdmVyLXN0YXR1cyJ9XX19LCJzZWFyY2giOnsibW9kZSI6Im1hdGNoIn19XSwibGluayI6W3sicmVsYXRpb24iOiJzZWxmIiwidXJsIjoiaHR0cDovL2hhcGkuZmhpci5vcmcvYmFzZVI0L0NvbmRpdGlvbj9wYXRpZW50PTA2ZTFmMGRkLTVmYmUtNDQ4MC05YmI0LTZiNTRlYzAyZDMxYiZjbGluaWNhbC1zdGF0dXM9YWN0aXZlLHJlY3VycmFuY2UscmVtaXNzaW9uIn1dLCJyZXNvdXJjZVR5cGUiOiJCdW5kbGUiLCJ0b3RhbCI6MSwidHlwZSI6InNlYXJjaHNldCJ9

signature:
rE5gfhbdbkmuYpKPb87Tpg1nRdRJTyNfWAOmXR2AA63FGKz2br_aAFtXj2UwIVHjp_AmgOZrpKmUFZnibBRcRTBUVfPWVrgRHleP1Dd1QL2qiaz0Pxw38odIVKQw88pFXBfIASsnrFMEJ_x07XQLWaXLOcEYVBb2s1SoULIW_McJCeCVKEnhrrsmNhXvAHLxYm2y8lUdTYYMH7rCM2FEIglavxLA4QI1nPv5i5ZwSOZDI1OoPtK4dHbbvggsKnAtBJL890AJ7JD9h1QTmw8vSWjydCBNilgGiyffPmfSGXFvGQ9tEcETHW0NlUEF649Zt-k71aMhkjooCsRwM9Dmb4STqO7Fy0MzWbvdi6K46W_rf77gv75Xr_cQyvSubWumRTMompgG1qOz5LbClfKHoWWyIzBxM2u7wqBukJTAIm10DSDgFg79-5oLPIDOj19VYsnLcyYFdYIx2G3gkBhcbExDdytlKGIZ8YvIEojDfNibC3wLWwNvmptBww-hPdT7
</pre>

**3.4. Create detached payload by removing the payload from the JWS**

note the signature is displayed with the parts labeled and separated with line breaks for easier viewing then as compact serialization format


```python
split_sig = signature.split('.')
split_sig[1] = ''
signature = '.'.join(split_sig)
for i,j in enumerate(signature.split('.')):
    print(f'{labels[i]}:')
    print(f'{j}')
    print()
print(f'\nSignature in compact serialization format:\n{"="*80}\n{signature}')
```

<pre style="border:0; overflow-wrap:break-word;">
header:
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ

payload:


signature:
rE5gfhbdbkmuYpKPb87Tpg1nRdRJTyNfWAOmXR2AA63FGKz2br_aAFtXj2UwIVHjp_AmgOZrpKmUFZnibBRcRTBUVfPWVrgRHleP1Dd1QL2qiaz0Pxw38odIVKQw88pFXBfIASsnrFMEJ_x07XQLWaXLOcEYVBb2s1SoULIW_McJCeCVKEnhrrsmNhXvAHLxYm2y8lUdTYYMH7rCM2FEIglavxLA4QI1nPv5i5ZwSOZDI1OoPtK4dHbbvggsKnAtBJL890AJ7JD9h1QTmw8vSWjydCBNilgGiyffPmfSGXFvGQ9tEcETHW0NlUEF649Zt-k71aMhkjooCsRwM9Dmb4STqO7Fy0MzWbvdi6K46W_rf77gv75Xr_cQyvSubWumRTMompgG1qOz5LbClfKHoWWyIzBxM2u7wqBukJTAIm10DSDgFg79-5oLPIDOj19VYsnLcyYFdYIx2G3gkBhcbExDdytlKGIZ8YvIEojDfNibC3wLWwNvmptBww-hPdT7


Signature in compact serialization format:
================================================================================
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ..rE5gfhbdbkmuYpKPb87Tpg1nRdRJTyNfWAOmXR2AA63FGKz2br_aAFtXj2UwIVHjp_AmgOZrpKmUFZnibBRcRTBUVfPWVrgRHleP1Dd1QL2qiaz0Pxw38odIVKQw88pFXBfIASsnrFMEJ_x07XQLWaXLOcEYVBb2s1SoULIW_McJCeCVKEnhrrsmNhXvAHLxYm2y8lUdTYYMH7rCM2FEIglavxLA4QI1nPv5i5ZwSOZDI1OoPtK4dHbbvggsKnAtBJL890AJ7JD9h1QTmw8vSWjydCBNilgGiyffPmfSGXFvGQ9tEcETHW0NlUEF649Zt-k71aMhkjooCsRwM9Dmb4STqO7Fy0MzWbvdi6K46W_rf77gv75Xr_cQyvSubWumRTMompgG1qOz5LbClfKHoWWyIzBxM2u7wqBukJTAIm10DSDgFg79-5oLPIDOj19VYsnLcyYFdYIx2G3gkBhcbExDdytlKGIZ8YvIEojDfNibC3wLWwNvmptBww-hPdT7
</pre>

**4. base64 the JWS and add the Signature element to the Bundle**

this is what would be returned in response to a direct query over-the-wire


```python
from base64 import b64encode
from json import loads,dumps
b64_jws = b64encode(signature.encode()).decode()
sig_element = {
            "type": [  # Signature.type = Verification Signature
              {
                "system": "urn:iso-astm:E1762-95:2013",
                "code": "1.2.840.10065.1.12.1.5",
                "display": "Verification Signature"
              }
            ],
            "when": "2021-10-05T22:42:19-07:00", #system timestamp when signature created
            "who": { #Reference to the Organization who signed the Bundle
              "reference": "Organization/123"
            },
            "data": b64_jws,
             }

searchset_bundle = loads(payload)
searchset_bundle['id'] = searchset_bundle_id # add id back in
searchset_bundle['meta'] = searchset_bundle_meta # add meta back in
searchset_bundle['signature'] = sig_element
print(dumps(searchset_bundle, indent=2))
```

<pre style="border:0; overflow-wrap:break-word;">
{

  "entry": [
    {
      "fullUrl": "http://hapi.fhir.org/baseR4/Condition/4ac41715-fcbd-421c-8796-9b2c9706dd3f",
      "resource": {
        "category": [
          {
            "coding": [
              {
                "code": "encounter-diagnosis",
                "display": "Encounter Diagnosis",
                "system": "http://terminology.hl7.org/CodeSystem/condition-category"
              }
            ]
          }
        ],
        "clinicalStatus": {
          "coding": [
            {
              "code": "active",
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical"
            }
          ]
        },
        "code": {
          "coding": [
            {
              "code": "1234",
              "display": "Examplitis",
              "system": "http://snomed.info/sct"
            }
          ],
          "text": "Examplitis"
        },
        "encounter": {
          "reference": "https://example.org/Encounter/5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82"
        },
        "id": "4ac41715-fcbd-421c-8796-9b2c9706dd3f",
        "meta": {
          "lastUpdated": "2020-04-28T20:28:00.008+00:00",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
          ],
          "source": "#cabiJIK51sD2iz4N",
          "versionId": "10"
        },
        "onsetDateTime": "2018-10-21T21:22:15-07:00",
        "recordedDate": "2018-10-21T21:22:15-07:00",
        "resourceType": "Condition",
        "subject": {
          "reference": "https://example.org/Patient/06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b"
        },
        "verificationStatus": {
          "coding": [
            {
              "code": "confirmed",
              "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status"
            }
          ]
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ],
  "link": [
    {
      "relation": "self",
      "url": "http://hapi.fhir.org/baseR4/Condition?patient=06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b&clinical-status=active,recurrance,remission"
    }
  ],
  "resourceType": "Bundle",
  "total": 1,
  "type": "searchset",
  "id": "d88e2910-3c95-469d-b1f4-ab5553b471fb",
  "meta": {
    "lastUpdated": "2020-10-23T04:54:56.048+00:00"
  },
  "signature": {
    "type": [
      {
        "system": "urn:iso-astm:E1762-95:2013",
        "code": "1.2.840.10065.1.12.1.5",
        "display": "Verification Signature"
      }
    ],
    "when": "2021-10-05T22:42:19-07:00",
    "who": {
      "reference": "Organization/123"
    },
    "data": "ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXQwZVNJNklsSlRJaXdpZEhsd0lqb2lTbGRVSWl3aWVEVmpJanBiSWsxSlNVVXpla05EUVRCbFowRjNTVUpCWjBsS1FVOUxSbGwyVFhkU0szbFJUVUV3UjBOVGNVZFRTV0l6UkZGRlFrTjNWVUZOU1VkT1RWRnpkME5SV1VSV1VWRkhSWGRLVmxWNlJWUk5Ra1ZIUVRGVlJVTkJkMHRSTWtaellWZGFkbU50TlhCWlZFVlRUVUpCUjBFeFZVVkNkM2RLVlRKR01XTXlSbk5oV0ZKMlRWSlZkMFYzV1VSV1VWRkxSRUY0U1ZwWFJuTmtSMmhzVWtkR01GbFVSWGhHZWtGV1FtZE9Wa0pCVFUxRWExWjVZVmROWjFOSFJtaGplWGRuVWtaYVRrMVRWWGRKZDFsS1MyOWFTV2gyWTA1QlVXdENSbWhhYkdGSFJtaGpNRUp2V2xkR2MyUkhhR3hhUjBZd1dWUkZkV0l6U201TlFqUllSRlJKZUUxVVFYbE9la1V6VGtSSmQwNUdiMWhFVkVsNVRWUkJlVTFxUlROT1JFbDNUa1p2ZDJkWk1IaERla0ZLUW1kT1ZrSkJXVlJCYkZaVVRWSk5kMFZSV1VSV1VWRkpSRUZ3UkZsWGVIQmFiVGw1WW0xc2FFMVNTWGRGUVZsRVZsRlJTRVJCYkZSWldGWjZXVmQ0Y0dSSE9IaEdWRUZVUW1kT1ZrSkJiMDFFUldoc1dWZDRNR0ZIVmtWWldGSm9UVlJGV0UxQ1ZVZEJNVlZGUVhkM1QxSllTbkJaZVVKSldWZEdla3hEUWtWV2F6QjRTbFJCYWtKbmEzRm9hMmxIT1hjd1FrTlJSVmRHYlZadldWZEdlbEZIYUd4WlYzZ3dZVWRXYTFsWVVtaE5VelYyWTIxamQyZG5SMmxOUVRCSFExTnhSMU5KWWpORVVVVkNRVkZWUVVFMFNVSnFkMEYzWjJkSFMwRnZTVUpuVVVSd1MyTlRhMjlCVFRaelZ6SXhLM1pYVkdWSlZrOUhlREV3VFZkaGMxRjVOMVpJYVdRMmVubHhXRUZDVFN0NmJtWkNibGhsYm5sVk1Hb3hSbFIyVUcxU1prOUViMDlFV0ZaMVVGVjNSRzl0YUVOSWFDdGlZMnhYT1V0Tk1tODFOak5qZUZKTFJYWkNibUZJY25OcWR6VjVUbTE0VHpWWmFrVlNZbWgwU0dSUlpYRnJkR1IzTTFaWlJWSlNPVWh2ZUV4UE0wWnJjM3BTTWpreVNGUkNOSGhYTTNsWGJGWXpaMVJyVFZGdmVsQlRZMHBMU0ROaVJ6aFFjWEUyUVZsUVNqZERORmxDU1d4VlUyUkNUVlpzTTNGdVpVVm1aemRtZFhocFJtWlliMlprVkZadE4zSk5hV2xITjFnNWVqUXpVR1pwYkhGaFpXbHpabTEwVW5oQmJGSjNSVTVZY2tnelQzWlBSRkI1VERCeVZHNUhPRU56WWtGWVdWWkpUVzFrWkVobE5GcEdPWEJzYURrMWMybzBjRTFVYUV4MFkwcFlMMjg1V0VoTWFtZzNSVzFhZVdkS1NGZEZVWEUwVUhkR2QxcGtiV0pqWm1oRGJVOXlPRGhJT0VKaVZYSjFMemRXTm5waWMwY3hUakZEVjJ4dVpHeGlWbnB1VENzelNVMVBjamhyV0dGSVkyRnVjV1pqYTJkR1ZqUkZjbTVtYWtaS2NURlBTV0ZCYlhOTmFqZzFlRTFyYW5sWVRIbGpURXd2ZFRWdU1tODJRbWM1TXk5VlVtWnhkVTl2VTBsSFQwTlNNalZFWVZwNmNIY3lhek56TjI5Rk9XUk5kMFZYV0hSbVdHZFpkR2d5WW14cWVUVjBSa2d3UjJwd1QydDRNRGRxTjFwVU5VaHVlRzVzYzBOQmQwVkJRV0ZPUVUxRU5IZEVRVmxFVmxJd1ZFSkJWWGRCZDBWQ0wzcEJURUpuVGxaSVVUaEZRa0ZOUTBKbFFYZEpVVmxFVmxJd1VrSkNiM2RIU1VsWFpETmtNMHh0YUd4WlYzZ3dZVWRXYTFsWVVtaGhWelZxVEcxT2RtSlVRVTVDWjJ0eGFHdHBSemwzTUVKQlVYTkdRVUZQUTBGWlJVRkRkVTFWVG5FNVlYa3JLMlUxV1VNM1VVWlBPVFJ5Wm5wNFIxRnVSak5IYTJ4YVRrRlliVWx5TjFCV1IyUnBSMWt5UjFSNEx6bFNkRWhEZDFSTGVtdE1LM2wyUzI5cVpWbzVaRlpMT0hkeVIxWnBVbXRQTDJwVmVWb3JTMk5YVW05clZXcHpOVGx1WTBwSFVrMVRVMUo0ZEdWRFVYVnFkRFJvWmpJckwzRldLMll5YzAxUmRFVnlkMUJGTXpCMlluRlNXVlZPVGs1Q1ZrVlJjR0ZSZUM5aFkwcEVWWFk1ZGpkemFraHBTa1J4V0hkUkszSjZhamsxYVVoQlNXRmxSVWh4Umk5TmN6SXljREppWlZwMWNYWkpVVXRsVFd3cmMzWldjVWgwYVhWNlYyNUdORlUyVmtsdGNHdHlOR0pJYkRkbFoxWTVTRFpzTmxReVUwMXJhalp4UkZVMVpUbE9aekJhYkV4VWRHOXpjMmhDVEcxdmNFWTNaVGRJZVhKVVJVRnRaazlRUzFGbE1FVm5PVVV5ZFhKNmVIRkNkVWMxTkdzMU1FY3lTakJHYVZCelVVcEJhRVpwVGtkM1UyYzBVek5JZVZaRVJ6ZDFaVXRrTUV3NU0zZExUMDVQV1VkMlRVdHBla05JUWl0d1MzWkZUVXB2V2poNU9YVnBRaXRJUmxoamNEbFNZVXB4U2prM1NIQmFWRVYySzJ4cFEzQXlVRk5ZZW1OTE1ISXlOVk5qZVdwR05tUk1iM1ZMTWxOQ016QjRRWFpLT0hSRk5UZzBLMnB4VVRaRFIyVmpWVGxZYW5ac1FXcDFTbVJEY2tSbFZsQnphbXR1TjA5UVdFY3JPRmhhVlRkNmNVaGFUbTFZV0RGWldUUklOWEpuUlVvME9HeHlWWEpRTTBrNFVpSmRmUS4uckU1Z2ZoYmRia211WXBLUGI4N1RwZzFuUmRSSlR5TmZXQU9tWFIyQUE2M0ZHS3oyYnJfYUFGdFhqMlV3SVZIanBfQW1nT1pycEttVUZabmliQlJjUlRCVVZmUFdWcmdSSGxlUDFEZDFRTDJxaWF6MFB4dzM4b2RJVktRdzg4cEZYQmZJQVNzbnJGTUVKX3gwN1hRTFdhWExPY0VZVkJiMnMxU29VTElXX01jSkNlQ1ZLRW5ocnJzbU5oWHZBSEx4WW0yeThsVWRUWVlNSDdyQ00yRkVJZ2xhdnhMQTRRSTFuUHY1aTVad1NPWkRJMU9vUHRLNGRIYmJ2Z2dzS25BdEJKTDg5MEFKN0pEOWgxUVRtdzh2U1dqeWRDQk5pbGdHaXlmZlBtZlNHWEZ2R1E5dEVjRVRIVzBObFVFRjY0OVp0LWs3MWFNaGtqb29Dc1J3TTlEbWI0U1RxTzdGeTBNeldidmRpNks0NldfcmY3N2d2NzVYcl9jUXl2U3ViV3VtUlRNb21wZ0cxcU96NUxiQ2xmS0hvV1d5SXpCeE0ydTd3cUJ1a0pUQUltMTBEU0RnRmc3OS01b0xQSURPajE5VllzbkxjeVlGZFlJeDJHM2drQmhjYkV4RGR5dGxLR0laOFl2SUVvakRmTmliQzN3TFd3TnZtcHRCd3ctaFBkVDc="
  }
}
</pre>

### Receiver/Verifier Steps

**1. Remove the `Bundle.signature` element from the Search Bundle resource**
- For this example using the python dictionary object from above. In a transaction, it would need to be stored unaltered in order to perform these next steps.


```python
try:
  recd_signature = searchset_bundle.pop("signature")
except:
  pass
recd_signature
```




<pre style="border:0; overflow-wrap:break-word;">
{'type': [{'system': 'urn:iso-astm:E1762-95:2013',
   'code': '1.2.840.10065.1.12.1.5',
   'display': 'Verification Signature'}],
 'when': '2021-10-05T22:42:19-07:00',
 'who': {'reference': 'Organization/123'},
 'data': 'ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXQwZVNJNklsSlRJaXdpZEhsd0lqb2lTbGRVSWl3aWVEVmpJanBiSWsxSlNVVXpla05EUVRCbFowRjNTVUpCWjBsS1FVOUxSbGwyVFhkU0szbFJUVUV3UjBOVGNVZFRTV0l6UkZGRlFrTjNWVUZOU1VkT1RWRnpkME5SV1VSV1VWRkhSWGRLVmxWNlJWUk5Ra1ZIUVRGVlJVTkJkMHRSTWtaellWZGFkbU50TlhCWlZFVlRUVUpCUjBFeFZVVkNkM2RLVlRKR01XTXlSbk5oV0ZKMlRWSlZkMFYzV1VSV1VWRkxSRUY0U1ZwWFJuTmtSMmhzVWtkR01GbFVSWGhHZWtGV1FtZE9Wa0pCVFUxRWExWjVZVmROWjFOSFJtaGplWGRuVWtaYVRrMVRWWGRKZDFsS1MyOWFTV2gyWTA1QlVXdENSbWhhYkdGSFJtaGpNRUp2V2xkR2MyUkhhR3hhUjBZd1dWUkZkV0l6U201TlFqUllSRlJKZUUxVVFYbE9la1V6VGtSSmQwNUdiMWhFVkVsNVRWUkJlVTFxUlROT1JFbDNUa1p2ZDJkWk1IaERla0ZLUW1kT1ZrSkJXVlJCYkZaVVRWSk5kMFZSV1VSV1VWRkpSRUZ3UkZsWGVIQmFiVGw1WW0xc2FFMVNTWGRGUVZsRVZsRlJTRVJCYkZSWldGWjZXVmQ0Y0dSSE9IaEdWRUZVUW1kT1ZrSkJiMDFFUldoc1dWZDRNR0ZIVmtWWldGSm9UVlJGV0UxQ1ZVZEJNVlZGUVhkM1QxSllTbkJaZVVKSldWZEdla3hEUWtWV2F6QjRTbFJCYWtKbmEzRm9hMmxIT1hjd1FrTlJSVmRHYlZadldWZEdlbEZIYUd4WlYzZ3dZVWRXYTFsWVVtaE5VelYyWTIxamQyZG5SMmxOUVRCSFExTnhSMU5KWWpORVVVVkNRVkZWUVVFMFNVSnFkMEYzWjJkSFMwRnZTVUpuVVVSd1MyTlRhMjlCVFRaelZ6SXhLM1pYVkdWSlZrOUhlREV3VFZkaGMxRjVOMVpJYVdRMmVubHhXRUZDVFN0NmJtWkNibGhsYm5sVk1Hb3hSbFIyVUcxU1prOUViMDlFV0ZaMVVGVjNSRzl0YUVOSWFDdGlZMnhYT1V0Tk1tODFOak5qZUZKTFJYWkNibUZJY25OcWR6VjVUbTE0VHpWWmFrVlNZbWgwU0dSUlpYRnJkR1IzTTFaWlJWSlNPVWh2ZUV4UE0wWnJjM3BTTWpreVNGUkNOSGhYTTNsWGJGWXpaMVJyVFZGdmVsQlRZMHBMU0ROaVJ6aFFjWEUyUVZsUVNqZERORmxDU1d4VlUyUkNUVlpzTTNGdVpVVm1aemRtZFhocFJtWlliMlprVkZadE4zSk5hV2xITjFnNWVqUXpVR1pwYkhGaFpXbHpabTEwVW5oQmJGSjNSVTVZY2tnelQzWlBSRkI1VERCeVZHNUhPRU56WWtGWVdWWkpUVzFrWkVobE5GcEdPWEJzYURrMWMybzBjRTFVYUV4MFkwcFlMMjg1V0VoTWFtZzNSVzFhZVdkS1NGZEZVWEUwVUhkR2QxcGtiV0pqWm1oRGJVOXlPRGhJT0VKaVZYSjFMemRXTm5waWMwY3hUakZEVjJ4dVpHeGlWbnB1VENzelNVMVBjamhyV0dGSVkyRnVjV1pqYTJkR1ZqUkZjbTVtYWtaS2NURlBTV0ZCYlhOTmFqZzFlRTFyYW5sWVRIbGpURXd2ZFRWdU1tODJRbWM1TXk5VlVtWnhkVTl2VTBsSFQwTlNNalZFWVZwNmNIY3lhek56TjI5Rk9XUk5kMFZYV0hSbVdHZFpkR2d5WW14cWVUVjBSa2d3UjJwd1QydDRNRGRxTjFwVU5VaHVlRzVzYzBOQmQwVkJRV0ZPUVUxRU5IZEVRVmxFVmxJd1ZFSkJWWGRCZDBWQ0wzcEJURUpuVGxaSVVUaEZRa0ZOUTBKbFFYZEpVVmxFVmxJd1VrSkNiM2RIU1VsWFpETmtNMHh0YUd4WlYzZ3dZVWRXYTFsWVVtaGhWelZxVEcxT2RtSlVRVTVDWjJ0eGFHdHBSemwzTUVKQlVYTkdRVUZQUTBGWlJVRkRkVTFWVG5FNVlYa3JLMlUxV1VNM1VVWlBPVFJ5Wm5wNFIxRnVSak5IYTJ4YVRrRlliVWx5TjFCV1IyUnBSMWt5UjFSNEx6bFNkRWhEZDFSTGVtdE1LM2wyUzI5cVpWbzVaRlpMT0hkeVIxWnBVbXRQTDJwVmVWb3JTMk5YVW05clZXcHpOVGx1WTBwSFVrMVRVMUo0ZEdWRFVYVnFkRFJvWmpJckwzRldLMll5YzAxUmRFVnlkMUJGTXpCMlluRlNXVlZPVGs1Q1ZrVlJjR0ZSZUM5aFkwcEVWWFk1ZGpkemFraHBTa1J4V0hkUkszSjZhamsxYVVoQlNXRmxSVWh4Umk5TmN6SXljREppWlZwMWNYWkpVVXRsVFd3cmMzWldjVWgwYVhWNlYyNUdORlUyVmtsdGNHdHlOR0pJYkRkbFoxWTVTRFpzTmxReVUwMXJhalp4UkZVMVpUbE9aekJhYkV4VWRHOXpjMmhDVEcxdmNFWTNaVGRJZVhKVVJVRnRaazlRUzFGbE1FVm5PVVV5ZFhKNmVIRkNkVWMxTkdzMU1FY3lTakJHYVZCelVVcEJhRVpwVGtkM1UyYzBVek5JZVZaRVJ6ZDFaVXRrTUV3NU0zZExUMDVQV1VkMlRVdHBla05JUWl0d1MzWkZUVXB2V2poNU9YVnBRaXRJUmxoamNEbFNZVXB4U2prM1NIQmFWRVYySzJ4cFEzQXlVRk5ZZW1OTE1ISXlOVk5qZVdwR05tUk1iM1ZMTWxOQ016QjRRWFpLT0hSRk5UZzBLMnB4VVRaRFIyVmpWVGxZYW5ac1FXcDFTbVJEY2tSbFZsQnphbXR1TjA5UVdFY3JPRmhhVlRkNmNVaGFUbTFZV0RGWldUUklOWEpuUlVvME9HeHlWWEpRTTBrNFVpSmRmUS4uckU1Z2ZoYmRia211WXBLUGI4N1RwZzFuUmRSSlR5TmZXQU9tWFIyQUE2M0ZHS3oyYnJfYUFGdFhqMlV3SVZIanBfQW1nT1pycEttVUZabmliQlJjUlRCVVZmUFdWcmdSSGxlUDFEZDFRTDJxaWF6MFB4dzM4b2RJVktRdzg4cEZYQmZJQVNzbnJGTUVKX3gwN1hRTFdhWExPY0VZVkJiMnMxU29VTElXX01jSkNlQ1ZLRW5ocnJzbU5oWHZBSEx4WW0yeThsVWRUWVlNSDdyQ00yRkVJZ2xhdnhMQTRRSTFuUHY1aTVad1NPWkRJMU9vUHRLNGRIYmJ2Z2dzS25BdEJKTDg5MEFKN0pEOWgxUVRtdzh2U1dqeWRDQk5pbGdHaXlmZlBtZlNHWEZ2R1E5dEVjRVRIVzBObFVFRjY0OVp0LWs3MWFNaGtqb29Dc1J3TTlEbWI0U1RxTzdGeTBNeldidmRpNks0NldfcmY3N2d2NzVYcl9jUXl2U3ViV3VtUlRNb21wZ0cxcU96NUxiQ2xmS0hvV1d5SXpCeE0ydTd3cUJ1a0pUQUltMTBEU0RnRmc3OS01b0xQSURPajE5VllzbkxjeVlGZFlJeDJHM2drQmhjYkV4RGR5dGxLR0laOFl2SUVvakRmTmliQzN3TFd3TnZtcHRCd3ctaFBkVDc='}

</pre>

**2. Canonicalize the bundle using IETF JSON Canonicalization Scheme (JCS):**

- Remove the id and meta elements if present before canonicalization


```python
searchset_bundle_id = searchset_bundle.pop("id") # remove id
searchset_bundle_meta = searchset_bundle.pop("meta") # remove meta
canonical_bundle = canonicalize(searchset_bundle)
canonical_bundle
```




<pre style="border:0; overflow-wrap:break-word;">
b'{"entry":[{"fullUrl":"http://hapi.fhir.org/baseR4/Condition/4ac41715-fcbd-421c-8796-9b2c9706dd3f","resource":{"category":[{"coding":[{"code":"encounter-diagnosis","display":"Encounter Diagnosis","system":"http://terminology.hl7.org/CodeSystem/condition-category"}]}],"clinicalStatus":{"coding":[{"code":"active","system":"http://terminology.hl7.org/CodeSystem/condition-clinical"}]},"code":{"coding":[{"code":"1234","display":"Examplitis","system":"http://snomed.info/sct"}],"text":"Examplitis"},"encounter":{"reference":"https://example.org/Encounter/5fe62cd5-bfcf-4d3b-a1e9-80d6f75d6f82"},"id":"4ac41715-fcbd-421c-8796-9b2c9706dd3f","meta":{"lastUpdated":"2020-04-28T20:28:00.008+00:00","profile":["http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"],"source":"#cabiJIK51sD2iz4N","versionId":"10"},"onsetDateTime":"2018-10-21T21:22:15-07:00","recordedDate":"2018-10-21T21:22:15-07:00","resourceType":"Condition","subject":{"reference":"https://example.org/Patient/06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b"},"verificationStatus":{"coding":[{"code":"confirmed","system":"http://terminology.hl7.org/CodeSystem/condition-ver-status"}]}},"search":{"mode":"match"}}],"link":[{"relation":"self","url":"http://hapi.fhir.org/baseR4/Condition?patient=06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b&clinical-status=active,recurrance,remission"}],"resourceType":"Bundle","total":1,"type":"searchset"}'
</pre>



**3. Transform canonicalize Bundle to a base64 format using the Base64-URL algorithm.**


```python
from base64 import urlsafe_b64encode
recd_b64_canonical_bundle  = urlsafe_b64encode(canonical_bundle).decode()
recd_b64_canonical_bundle = recd_b64_canonical_bundle.replace("=","") #remove end padding to normalize
recd_b64_canonical_bundle
```




<pre style="border:0; overflow-wrap:break-word;">
'eyJlbnRyeSI6W3siZnVsbFVybCI6Imh0dHA6Ly9oYXBpLmZoaXIub3JnL2Jhc2VSNC9Db25kaXRpb24vNGFjNDE3MTUtZmNiZC00MjFjLTg3OTYtOWIyYzk3MDZkZDNmIiwicmVzb3VyY2UiOnsiY2F0ZWdvcnkiOlt7ImNvZGluZyI6W3siY29kZSI6ImVuY291bnRlci1kaWFnbm9zaXMiLCJkaXNwbGF5IjoiRW5jb3VudGVyIERpYWdub3NpcyIsInN5c3RlbSI6Imh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29uZGl0aW9uLWNhdGVnb3J5In1dfV0sImNsaW5pY2FsU3RhdHVzIjp7ImNvZGluZyI6W3siY29kZSI6ImFjdGl2ZSIsInN5c3RlbSI6Imh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29uZGl0aW9uLWNsaW5pY2FsIn1dfSwiY29kZSI6eyJjb2RpbmciOlt7ImNvZGUiOiIxMjM0IiwiZGlzcGxheSI6IkV4YW1wbGl0aXMiLCJzeXN0ZW0iOiJodHRwOi8vc25vbWVkLmluZm8vc2N0In1dLCJ0ZXh0IjoiRXhhbXBsaXRpcyJ9LCJlbmNvdW50ZXIiOnsicmVmZXJlbmNlIjoiaHR0cHM6Ly9leGFtcGxlLm9yZy9FbmNvdW50ZXIvNWZlNjJjZDUtYmZjZi00ZDNiLWExZTktODBkNmY3NWQ2ZjgyIn0sImlkIjoiNGFjNDE3MTUtZmNiZC00MjFjLTg3OTYtOWIyYzk3MDZkZDNmIiwibWV0YSI6eyJsYXN0VXBkYXRlZCI6IjIwMjAtMDQtMjhUMjA6Mjg6MDAuMDA4KzAwOjAwIiwicHJvZmlsZSI6WyJodHRwOi8vaGw3Lm9yZy9maGlyL3VzL2NvcmUvU3RydWN0dXJlRGVmaW5pdGlvbi91cy1jb3JlLWNvbmRpdGlvbiJdLCJzb3VyY2UiOiIjY2FiaUpJSzUxc0QyaXo0TiIsInZlcnNpb25JZCI6IjEwIn0sIm9uc2V0RGF0ZVRpbWUiOiIyMDE4LTEwLTIxVDIxOjIyOjE1LTA3OjAwIiwicmVjb3JkZWREYXRlIjoiMjAxOC0xMC0yMVQyMToyMjoxNS0wNzowMCIsInJlc291cmNlVHlwZSI6IkNvbmRpdGlvbiIsInN1YmplY3QiOnsicmVmZXJlbmNlIjoiaHR0cHM6Ly9leGFtcGxlLm9yZy9QYXRpZW50LzA2ZTFmMGRkLTVmYmUtNDQ4MC05YmI0LTZiNTRlYzAyZDMxYiJ9LCJ2ZXJpZmljYXRpb25TdGF0dXMiOnsiY29kaW5nIjpbeyJjb2RlIjoiY29uZmlybWVkIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb25kaXRpb24tdmVyLXN0YXR1cyJ9XX19LCJzZWFyY2giOnsibW9kZSI6Im1hdGNoIn19XSwibGluayI6W3sicmVsYXRpb24iOiJzZWxmIiwidXJsIjoiaHR0cDovL2hhcGkuZmhpci5vcmcvYmFzZVI0L0NvbmRpdGlvbj9wYXRpZW50PTA2ZTFmMGRkLTVmYmUtNDQ4MC05YmI0LTZiNTRlYzAyZDMxYiZjbGluaWNhbC1zdGF0dXM9YWN0aXZlLHJlY3VycmFuY2UscmVtaXNzaW9uIn1dLCJyZXNvdXJjZVR5cGUiOiJCdW5kbGUiLCJ0b3RhbCI6MSwidHlwZSI6InNlYXJjaHNldCJ9'
</pre>



**4. Get the base64 encoded JWS  from the `Bundle.signature.data`  element**


```python
recd_b64_jws = recd_signature['data']
recd_b64_jws
```




<pre style="border:0; overflow-wrap:break-word;">
'ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXQwZVNJNklsSlRJaXdpZEhsd0lqb2lTbGRVSWl3aWVEVmpJanBiSWsxSlNVVXpla05EUVRCbFowRjNTVUpCWjBsS1FVOUxSbGwyVFhkU0szbFJUVUV3UjBOVGNVZFRTV0l6UkZGRlFrTjNWVUZOU1VkT1RWRnpkME5SV1VSV1VWRkhSWGRLVmxWNlJWUk5Ra1ZIUVRGVlJVTkJkMHRSTWtaellWZGFkbU50TlhCWlZFVlRUVUpCUjBFeFZVVkNkM2RLVlRKR01XTXlSbk5oV0ZKMlRWSlZkMFYzV1VSV1VWRkxSRUY0U1ZwWFJuTmtSMmhzVWtkR01GbFVSWGhHZWtGV1FtZE9Wa0pCVFUxRWExWjVZVmROWjFOSFJtaGplWGRuVWtaYVRrMVRWWGRKZDFsS1MyOWFTV2gyWTA1QlVXdENSbWhhYkdGSFJtaGpNRUp2V2xkR2MyUkhhR3hhUjBZd1dWUkZkV0l6U201TlFqUllSRlJKZUUxVVFYbE9la1V6VGtSSmQwNUdiMWhFVkVsNVRWUkJlVTFxUlROT1JFbDNUa1p2ZDJkWk1IaERla0ZLUW1kT1ZrSkJXVlJCYkZaVVRWSk5kMFZSV1VSV1VWRkpSRUZ3UkZsWGVIQmFiVGw1WW0xc2FFMVNTWGRGUVZsRVZsRlJTRVJCYkZSWldGWjZXVmQ0Y0dSSE9IaEdWRUZVUW1kT1ZrSkJiMDFFUldoc1dWZDRNR0ZIVmtWWldGSm9UVlJGV0UxQ1ZVZEJNVlZGUVhkM1QxSllTbkJaZVVKSldWZEdla3hEUWtWV2F6QjRTbFJCYWtKbmEzRm9hMmxIT1hjd1FrTlJSVmRHYlZadldWZEdlbEZIYUd4WlYzZ3dZVWRXYTFsWVVtaE5VelYyWTIxamQyZG5SMmxOUVRCSFExTnhSMU5KWWpORVVVVkNRVkZWUVVFMFNVSnFkMEYzWjJkSFMwRnZTVUpuVVVSd1MyTlRhMjlCVFRaelZ6SXhLM1pYVkdWSlZrOUhlREV3VFZkaGMxRjVOMVpJYVdRMmVubHhXRUZDVFN0NmJtWkNibGhsYm5sVk1Hb3hSbFIyVUcxU1prOUViMDlFV0ZaMVVGVjNSRzl0YUVOSWFDdGlZMnhYT1V0Tk1tODFOak5qZUZKTFJYWkNibUZJY25OcWR6VjVUbTE0VHpWWmFrVlNZbWgwU0dSUlpYRnJkR1IzTTFaWlJWSlNPVWh2ZUV4UE0wWnJjM3BTTWpreVNGUkNOSGhYTTNsWGJGWXpaMVJyVFZGdmVsQlRZMHBMU0ROaVJ6aFFjWEUyUVZsUVNqZERORmxDU1d4VlUyUkNUVlpzTTNGdVpVVm1aemRtZFhocFJtWlliMlprVkZadE4zSk5hV2xITjFnNWVqUXpVR1pwYkhGaFpXbHpabTEwVW5oQmJGSjNSVTVZY2tnelQzWlBSRkI1VERCeVZHNUhPRU56WWtGWVdWWkpUVzFrWkVobE5GcEdPWEJzYURrMWMybzBjRTFVYUV4MFkwcFlMMjg1V0VoTWFtZzNSVzFhZVdkS1NGZEZVWEUwVUhkR2QxcGtiV0pqWm1oRGJVOXlPRGhJT0VKaVZYSjFMemRXTm5waWMwY3hUakZEVjJ4dVpHeGlWbnB1VENzelNVMVBjamhyV0dGSVkyRnVjV1pqYTJkR1ZqUkZjbTVtYWtaS2NURlBTV0ZCYlhOTmFqZzFlRTFyYW5sWVRIbGpURXd2ZFRWdU1tODJRbWM1TXk5VlVtWnhkVTl2VTBsSFQwTlNNalZFWVZwNmNIY3lhek56TjI5Rk9XUk5kMFZYV0hSbVdHZFpkR2d5WW14cWVUVjBSa2d3UjJwd1QydDRNRGRxTjFwVU5VaHVlRzVzYzBOQmQwVkJRV0ZPUVUxRU5IZEVRVmxFVmxJd1ZFSkJWWGRCZDBWQ0wzcEJURUpuVGxaSVVUaEZRa0ZOUTBKbFFYZEpVVmxFVmxJd1VrSkNiM2RIU1VsWFpETmtNMHh0YUd4WlYzZ3dZVWRXYTFsWVVtaGhWelZxVEcxT2RtSlVRVTVDWjJ0eGFHdHBSemwzTUVKQlVYTkdRVUZQUTBGWlJVRkRkVTFWVG5FNVlYa3JLMlUxV1VNM1VVWlBPVFJ5Wm5wNFIxRnVSak5IYTJ4YVRrRlliVWx5TjFCV1IyUnBSMWt5UjFSNEx6bFNkRWhEZDFSTGVtdE1LM2wyUzI5cVpWbzVaRlpMT0hkeVIxWnBVbXRQTDJwVmVWb3JTMk5YVW05clZXcHpOVGx1WTBwSFVrMVRVMUo0ZEdWRFVYVnFkRFJvWmpJckwzRldLMll5YzAxUmRFVnlkMUJGTXpCMlluRlNXVlZPVGs1Q1ZrVlJjR0ZSZUM5aFkwcEVWWFk1ZGpkemFraHBTa1J4V0hkUkszSjZhamsxYVVoQlNXRmxSVWh4Umk5TmN6SXljREppWlZwMWNYWkpVVXRsVFd3cmMzWldjVWgwYVhWNlYyNUdORlUyVmtsdGNHdHlOR0pJYkRkbFoxWTVTRFpzTmxReVUwMXJhalp4UkZVMVpUbE9aekJhYkV4VWRHOXpjMmhDVEcxdmNFWTNaVGRJZVhKVVJVRnRaazlRUzFGbE1FVm5PVVV5ZFhKNmVIRkNkVWMxTkdzMU1FY3lTakJHYVZCelVVcEJhRVpwVGtkM1UyYzBVek5JZVZaRVJ6ZDFaVXRrTUV3NU0zZExUMDVQV1VkMlRVdHBla05JUWl0d1MzWkZUVXB2V2poNU9YVnBRaXRJUmxoamNEbFNZVXB4U2prM1NIQmFWRVYySzJ4cFEzQXlVRk5ZZW1OTE1ISXlOVk5qZVdwR05tUk1iM1ZMTWxOQ016QjRRWFpLT0hSRk5UZzBLMnB4VVRaRFIyVmpWVGxZYW5ac1FXcDFTbVJEY2tSbFZsQnphbXR1TjA5UVdFY3JPRmhhVlRkNmNVaGFUbTFZV0RGWldUUklOWEpuUlVvME9HeHlWWEpRTTBrNFVpSmRmUS4uckU1Z2ZoYmRia211WXBLUGI4N1RwZzFuUmRSSlR5TmZXQU9tWFIyQUE2M0ZHS3oyYnJfYUFGdFhqMlV3SVZIanBfQW1nT1pycEttVUZabmliQlJjUlRCVVZmUFdWcmdSSGxlUDFEZDFRTDJxaWF6MFB4dzM4b2RJVktRdzg4cEZYQmZJQVNzbnJGTUVKX3gwN1hRTFdhWExPY0VZVkJiMnMxU29VTElXX01jSkNlQ1ZLRW5ocnJzbU5oWHZBSEx4WW0yeThsVWRUWVlNSDdyQ00yRkVJZ2xhdnhMQTRRSTFuUHY1aTVad1NPWkRJMU9vUHRLNGRIYmJ2Z2dzS25BdEJKTDg5MEFKN0pEOWgxUVRtdzh2U1dqeWRDQk5pbGdHaXlmZlBtZlNHWEZ2R1E5dEVjRVRIVzBObFVFRjY0OVp0LWs3MWFNaGtqb29Dc1J3TTlEbWI0U1RxTzdGeTBNeldidmRpNks0NldfcmY3N2d2NzVYcl9jUXl2U3ViV3VtUlRNb21wZ0cxcU96NUxiQ2xmS0hvV1d5SXpCeE0ydTd3cUJ1a0pUQUltMTBEU0RnRmc3OS01b0xQSURPajE5VllzbkxjeVlGZFlJeDJHM2drQmhjYkV4RGR5dGxLR0laOFl2SUVvakRmTmliQzN3TFd3TnZtcHRCd3ctaFBkVDc='
</pre>



**5. Base64 decode the encoded JWS**

note the signature is displayed with the parts labeled and separated with line breaks for easier viewing


```python
from base64 import b64decode
recd_jws = b64decode(recd_b64_jws.encode()).decode()
for i,j in enumerate(recd_jws.split('.')):
    print(f'{labels[i]}:')
    print(f'{j}')
    print()
```

<pre style="border:0; overflow-wrap:break-word;">
header:
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ

payload:


signature:
rE5gfhbdbkmuYpKPb87Tpg1nRdRJTyNfWAOmXR2AA63FGKz2br_aAFtXj2UwIVHjp_AmgOZrpKmUFZnibBRcRTBUVfPWVrgRHleP1Dd1QL2qiaz0Pxw38odIVKQw88pFXBfIASsnrFMEJ_x07XQLWaXLOcEYVBb2s1SoULIW_McJCeCVKEnhrrsmNhXvAHLxYm2y8lUdTYYMH7rCM2FEIglavxLA4QI1nPv5i5ZwSOZDI1OoPtK4dHbbvggsKnAtBJL890AJ7JD9h1QTmw8vSWjydCBNilgGiyffPmfSGXFvGQ9tEcETHW0NlUEF649Zt-k71aMhkjooCsRwM9Dmb4STqO7Fy0MzWbvdi6K46W_rf77gv75Xr_cQyvSubWumRTMompgG1qOz5LbClfKHoWWyIzBxM2u7wqBukJTAIm10DSDgFg79-5oLPIDOj19VYsnLcyYFdYIx2G3gkBhcbExDdytlKGIZ8YvIEojDfNibC3wLWwNvmptBww-hPdT7
</pre>


**6. reattach the payload - the base64 encoded Bundle - into the JWS payload element. **

note the signature is displayed with the parts labeled and separated with line breaks for easier viewing


```python
split_sig = recd_jws.split('.')
split_sig[1] = recd_b64_canonical_bundle
recd_jws = '.'.join(split_sig)
for i,j in enumerate(recd_jws.split('.')):
    print(f'{labels[i]}:')
    print(f'{j}')
    print()
```

<pre style="border:0; overflow-wrap:break-word;">
header:
eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ

payload:
eyJlbnRyeSI6W3siZnVsbFVybCI6Imh0dHA6Ly9oYXBpLmZoaXIub3JnL2Jhc2VSNC9Db25kaXRpb24vNGFjNDE3MTUtZmNiZC00MjFjLTg3OTYtOWIyYzk3MDZkZDNmIiwicmVzb3VyY2UiOnsiY2F0ZWdvcnkiOlt7ImNvZGluZyI6W3siY29kZSI6ImVuY291bnRlci1kaWFnbm9zaXMiLCJkaXNwbGF5IjoiRW5jb3VudGVyIERpYWdub3NpcyIsInN5c3RlbSI6Imh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29uZGl0aW9uLWNhdGVnb3J5In1dfV0sImNsaW5pY2FsU3RhdHVzIjp7ImNvZGluZyI6W3siY29kZSI6ImFjdGl2ZSIsInN5c3RlbSI6Imh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29uZGl0aW9uLWNsaW5pY2FsIn1dfSwiY29kZSI6eyJjb2RpbmciOlt7ImNvZGUiOiIxMjM0IiwiZGlzcGxheSI6IkV4YW1wbGl0aXMiLCJzeXN0ZW0iOiJodHRwOi8vc25vbWVkLmluZm8vc2N0In1dLCJ0ZXh0IjoiRXhhbXBsaXRpcyJ9LCJlbmNvdW50ZXIiOnsicmVmZXJlbmNlIjoiaHR0cHM6Ly9leGFtcGxlLm9yZy9FbmNvdW50ZXIvNWZlNjJjZDUtYmZjZi00ZDNiLWExZTktODBkNmY3NWQ2ZjgyIn0sImlkIjoiNGFjNDE3MTUtZmNiZC00MjFjLTg3OTYtOWIyYzk3MDZkZDNmIiwibWV0YSI6eyJsYXN0VXBkYXRlZCI6IjIwMjAtMDQtMjhUMjA6Mjg6MDAuMDA4KzAwOjAwIiwicHJvZmlsZSI6WyJodHRwOi8vaGw3Lm9yZy9maGlyL3VzL2NvcmUvU3RydWN0dXJlRGVmaW5pdGlvbi91cy1jb3JlLWNvbmRpdGlvbiJdLCJzb3VyY2UiOiIjY2FiaUpJSzUxc0QyaXo0TiIsInZlcnNpb25JZCI6IjEwIn0sIm9uc2V0RGF0ZVRpbWUiOiIyMDE4LTEwLTIxVDIxOjIyOjE1LTA3OjAwIiwicmVjb3JkZWREYXRlIjoiMjAxOC0xMC0yMVQyMToyMjoxNS0wNzowMCIsInJlc291cmNlVHlwZSI6IkNvbmRpdGlvbiIsInN1YmplY3QiOnsicmVmZXJlbmNlIjoiaHR0cHM6Ly9leGFtcGxlLm9yZy9QYXRpZW50LzA2ZTFmMGRkLTVmYmUtNDQ4MC05YmI0LTZiNTRlYzAyZDMxYiJ9LCJ2ZXJpZmljYXRpb25TdGF0dXMiOnsiY29kaW5nIjpbeyJjb2RlIjoiY29uZmlybWVkIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb25kaXRpb24tdmVyLXN0YXR1cyJ9XX19LCJzZWFyY2giOnsibW9kZSI6Im1hdGNoIn19XSwibGluayI6W3sicmVsYXRpb24iOiJzZWxmIiwidXJsIjoiaHR0cDovL2hhcGkuZmhpci5vcmcvYmFzZVI0L0NvbmRpdGlvbj9wYXRpZW50PTA2ZTFmMGRkLTVmYmUtNDQ4MC05YmI0LTZiNTRlYzAyZDMxYiZjbGluaWNhbC1zdGF0dXM9YWN0aXZlLHJlY3VycmFuY2UscmVtaXNzaW9uIn1dLCJyZXNvdXJjZVR5cGUiOiJCdW5kbGUiLCJ0b3RhbCI6MSwidHlwZSI6InNlYXJjaHNldCJ9

signature:
rE5gfhbdbkmuYpKPb87Tpg1nRdRJTyNfWAOmXR2AA63FGKz2br_aAFtXj2UwIVHjp_AmgOZrpKmUFZnibBRcRTBUVfPWVrgRHleP1Dd1QL2qiaz0Pxw38odIVKQw88pFXBfIASsnrFMEJ_x07XQLWaXLOcEYVBb2s1SoULIW_McJCeCVKEnhrrsmNhXvAHLxYm2y8lUdTYYMH7rCM2FEIglavxLA4QI1nPv5i5ZwSOZDI1OoPtK4dHbbvggsKnAtBJL890AJ7JD9h1QTmw8vSWjydCBNilgGiyffPmfSGXFvGQ9tEcETHW0NlUEF649Zt-k71aMhkjooCsRwM9Dmb4STqO7Fy0MzWbvdi6K46W_rf77gv75Xr_cQyvSubWumRTMompgG1qOz5LbClfKHoWWyIzBxM2u7wqBukJTAIm10DSDgFg79-5oLPIDOj19VYsnLcyYFdYIx2G3gkBhcbExDdytlKGIZ8YvIEojDfNibC3wLWwNvmptBww-hPdT7
</pre>


**7. Obtain public Key from the first certificate in JWS header `"x5c"` key**

- base64 decode the key value
- Verify Issuer, Validity Dates, Subject,and KeyUsage of certificate,
- Get the “Subject Public Key Info” from the cert to verify the signature


```python
recd_header = jws.get_unverified_header(recd_jws)
recd_header
```




<pre style="border:0; overflow-wrap:break-word;">
{'alg': 'RS256',
   'kty': 'RS',
   'typ': 'JWT',
   'x5c': ['MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRvMRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZNMSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAyNzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEWFmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAwggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXenyU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3bG8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43PfilqaeisfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJX/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlbVznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6Bg93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYDVR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOCAYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwTKzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAIaeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SMkj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+jqQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP3I8R']}
</pre>



```python
recd_cert = b64decode(recd_header['x5c'][0])
with open('recd_cert.der', 'wb') as f:
    f.write(recd_cert)
!openssl x509 -in recd_cert.der -inform DER -text
```

<pre style="border:0; overflow-wrap:break-word;">
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 16322561221100825744 (0xe28562f33047ec90)
    Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=US, ST=California, L=Sausalito, O=HealtheData1, CN=Eric Haas, DVM/emailAddress=ehaas@healthedata1.org
        Validity
            Not Before: Oct 27 17:42:04 2021 GMT
            Not After : Oct 22 17:42:04 2022 GMT
        Subject: C=US, ST=California, L=Sausalito, O=HealtheData1, CN=Eric Haas, DVM/emailAddress=ehaas@healthedata1.org
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (3072 bit)
                Modulus:
                    00:e9:29:c4:a4:a0:03:3a:b1:6d:b5:fa:f5:93:78:
                    85:4e:1b:1d:74:31:66:ac:43:2e:d5:1e:27:7a:cf:
                    2a:97:00:13:3e:ce:77:c1:9d:77:a7:c9:4d:23:d4:
                    54:ef:3e:64:5f:38:3a:0e:0d:75:6e:3d:4c:03:a2:
                    68:42:1e:1f:9b:72:55:bd:28:cd:a8:e7:ad:dc:c5:
                    12:84:bc:19:da:1e:bb:23:c3:9c:8d:9b:13:b9:62:
                    31:11:6e:1b:47:75:07:aa:92:d7:70:dd:56:04:45:
                    1f:47:a3:12:ce:dc:59:2c:cd:1d:bd:d8:74:c1:e3:
                    15:b7:c9:69:55:de:04:e4:31:0a:33:3d:27:09:28:
                    7d:db:1b:c3:ea:ab:a0:18:3c:9e:c2:e1:80:48:95:
                    44:9d:04:c5:65:de:a9:de:11:f8:3b:7e:ec:62:15:
                    f5:e8:7d:d4:d5:9b:ba:cc:8a:21:bb:5f:dc:f8:dc:
                    f7:e2:96:a6:9e:8a:c7:e6:b5:1c:40:95:1c:04:35:
                    7a:c7:dc:eb:ce:0c:fc:8b:d2:b4:e7:1b:c0:ac:6c:
                    05:d8:54:83:26:75:d1:de:e1:91:7d:a6:58:7d:e6:
                    c8:f8:a4:c4:e1:2e:d7:09:5f:fa:3d:5c:72:e3:87:
                    b1:26:67:28:09:1d:61:10:ab:83:f0:17:06:5d:99:
                    b7:1f:84:29:8e:af:cf:07:f0:16:d4:ae:ef:fb:57:
                    ac:db:b0:6d:4d:d4:25:a5:9d:d9:5b:57:39:cb:fb:
                    72:0c:3a:bf:24:5d:a1:dc:6a:7a:9f:72:48:05:57:
                    81:2b:9d:f8:c5:26:ad:4e:21:a0:26:b0:c8:fc:e7:
                    13:24:8f:25:cb:c9:c2:cb:fe:ee:67:da:8e:81:83:
                    dd:ff:51:17:ea:b8:ea:12:20:63:82:47:6e:43:69:
                    9c:e9:c3:69:37:b3:ba:04:f5:d3:30:11:65:ed:7d:
                    78:18:b6:1d:9b:96:3c:b9:b4:51:f4:1a:3a:4e:93:
                    1d:3b:8f:b6:53:e4:79:f1:9e:5b
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints:
                CA:TRUE
            X509v3 Key Usage:
                Digital Signature, Non Repudiation, Key Encipherment
            X509v3 Subject Alternative Name:
                DNS:www.healthedatainc.com
    Signature Algorithm: sha256WithRSAEncryption
         0a:e3:14:36:af:5a:cb:ef:9e:e5:80:bb:40:53:bd:e2:b7:f3:
         c4:64:27:17:71:a4:95:93:40:5e:62:2b:ec:f5:46:76:21:98:
         d8:64:f1:ff:d4:6d:1c:2c:13:2b:39:0b:fb:2b:ca:a2:37:99:
         f5:d5:4a:f3:0a:c6:56:24:64:3b:f8:d4:c9:9f:8a:71:64:68:
         91:48:ec:e7:d9:dc:24:64:4c:49:24:71:b5:e0:90:ba:3b:78:
         85:fd:be:fe:a5:7e:7f:6b:0c:42:d1:2b:c0:f1:37:d2:f6:ea:
         45:85:0d:34:d0:55:11:0a:5a:43:1f:da:70:90:d4:bf:db:fb:
         b2:31:e2:24:3a:97:c1:0f:ab:ce:3f:79:88:70:08:69:e1:07:
         a8:5f:cc:b3:6d:a9:d9:b7:99:ba:ab:c8:40:a7:8c:97:eb:2f:
         56:a1:ed:8a:ec:d6:9c:5e:14:e9:52:26:a6:4a:f8:6c:79:7b:
         7a:05:7d:1f:a9:7a:4f:64:8c:92:3e:aa:0d:4e:5e:f4:d8:34:
         66:52:d3:b6:8b:2c:84:12:e6:a2:91:7b:7b:b1:f2:ad:31:00:
         99:f3:8f:29:07:b4:12:0f:44:da:ea:f3:c6:a0:6e:1b:9e:24:
         e7:41:b6:27:41:62:3e:c4:09:02:11:62:34:6c:12:83:84:b7:
         1f:25:43:1b:bb:9e:29:dd:0b:f7:7c:0a:38:d3:98:1a:f3:0a:
         8b:30:87:07:ea:4a:bc:43:09:a1:9f:32:f6:e8:81:f8:71:57:
         72:9f:51:68:9a:89:f7:b1:e9:65:31:2f:fa:58:82:a7:63:d2:
         5f:37:0a:d2:bd:b9:49:cc:a3:17:a7:4b:a2:e2:b6:48:1d:f4:
         c4:0b:c9:f2:d1:39:f3:8f:a3:a9:0e:82:19:e7:14:f5:78:ef:
         94:08:ee:25:d0:ab:0d:e5:4f:b2:39:27:ec:e3:d7:1b:ef:17:
         65:4e:f3:a8:76:4d:99:75:f5:61:8e:07:e6:b8:04:27:8f:25:
         ad:4a:cf:dc:8f:11
-----BEGIN CERTIFICATE-----
MIIE3zCCA0egAwIBAgIJAOKFYvMwR+yQMA0GCSqGSIb3DQEBCwUAMIGNMQswCQYD
VQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJU2F1c2FsaXRv
MRUwEwYDVQQKDAxIZWFsdGhlRGF0YTExFzAVBgNVBAMMDkVyaWMgSGFhcywgRFZN
MSUwIwYJKoZIhvcNAQkBFhZlaGFhc0BoZWFsdGhlZGF0YTEub3JnMB4XDTIxMTAy
NzE3NDIwNFoXDTIyMTAyMjE3NDIwNFowgY0xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
DApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYXVzYWxpdG8xFTATBgNVBAoMDEhlYWx0
aGVEYXRhMTEXMBUGA1UEAwwORXJpYyBIYWFzLCBEVk0xJTAjBgkqhkiG9w0BCQEW
FmVoYWFzQGhlYWx0aGVkYXRhMS5vcmcwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAw
ggGKAoIBgQDpKcSkoAM6sW21+vWTeIVOGx10MWasQy7VHid6zyqXABM+znfBnXen
yU0j1FTvPmRfODoODXVuPUwDomhCHh+bclW9KM2o563cxRKEvBnaHrsjw5yNmxO5
YjERbhtHdQeqktdw3VYERR9HoxLO3FkszR292HTB4xW3yWlV3gTkMQozPScJKH3b
G8Pqq6AYPJ7C4YBIlUSdBMVl3qneEfg7fuxiFfXofdTVm7rMiiG7X9z43Pfilqae
isfmtRxAlRwENXrH3OvODPyL0rTnG8CsbAXYVIMmddHe4ZF9plh95sj4pMThLtcJ
X/o9XHLjh7EmZygJHWEQq4PwFwZdmbcfhCmOr88H8BbUru/7V6zbsG1N1CWlndlb
VznL+3IMOr8kXaHcanqfckgFV4ErnfjFJq1OIaAmsMj85xMkjyXLycLL/u5n2o6B
g93/URfquOoSIGOCR25DaZzpw2k3s7oE9dMwEWXtfXgYth2bljy5tFH0GjpOkx07
j7ZT5HnxnlsCAwEAAaNAMD4wDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCBeAwIQYD
VR0RBBowGIIWd3d3LmhlYWx0aGVkYXRhaW5jLmNvbTANBgkqhkiG9w0BAQsFAAOC
AYEACuMUNq9ay++e5YC7QFO94rfzxGQnF3GklZNAXmIr7PVGdiGY2GTx/9RtHCwT
KzkL+yvKojeZ9dVK8wrGViRkO/jUyZ+KcWRokUjs59ncJGRMSSRxteCQujt4hf2+
/qV+f2sMQtErwPE30vbqRYUNNNBVEQpaQx/acJDUv9v7sjHiJDqXwQ+rzj95iHAI
aeEHqF/Ms22p2beZuqvIQKeMl+svVqHtiuzWnF4U6VImpkr4bHl7egV9H6l6T2SM
kj6qDU5e9Ng0ZlLTtosshBLmopF7e7HyrTEAmfOPKQe0Eg9E2urzxqBuG54k50G2
J0FiPsQJAhFiNGwSg4S3HyVDG7ueKd0L93wKONOYGvMKizCHB+pKvEMJoZ8y9uiB
+HFXcp9RaJqJ97HpZTEv+liCp2PSXzcK0r25ScyjF6dLouK2SB30xAvJ8tE584+j
qQ6CGecU9XjvlAjuJdCrDeVPsjkn7OPXG+8XZU7zqHZNmXX1YY4H5rgEJ48lrUrP
3I8R
-----END CERTIFICATE-----
</pre>

**10. Verify Signature using the public key or the X.509 Certificate**

Alternatively:
1. visit https://jwt.io.
1. At the top of the page, select "RS256" for the algorithm.
1. Paste the JWS value printed below into the “Encoded” field.
1. The plaintext JWT will be displayed in the “Decoded:Payload” field.
1. The X509 Cert above will appear in the "Verify Signature" box.
1. If verified, a “Signature Verified” message will appear  in the bottom left hand corner.


```python
recd_jws
```




<pre style="border:0; overflow-wrap:break-word;">
'eyJhbGciOiJSUzI1NiIsImt0eSI6IlJTIiwidHlwIjoiSldUIiwieDVjIjpbIk1JSUUzekNDQTBlZ0F3SUJBZ0lKQU9LRll2TXdSK3lRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdOTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHQTFVRUNBd0tRMkZzYVdadmNtNXBZVEVTTUJBR0ExVUVCd3dKVTJGMWMyRnNhWFJ2TVJVd0V3WURWUVFLREF4SVpXRnNkR2hsUkdGMFlURXhGekFWQmdOVkJBTU1Ea1Z5YVdNZ1NHRmhjeXdnUkZaTk1TVXdJd1lKS29aSWh2Y05BUWtCRmhabGFHRmhjMEJvWldGc2RHaGxaR0YwWVRFdWIzSm5NQjRYRFRJeE1UQXlOekUzTkRJd05Gb1hEVEl5TVRBeU1qRTNOREl3TkZvd2dZMHhDekFKQmdOVkJBWVRBbFZUTVJNd0VRWURWUVFJREFwRFlXeHBabTl5Ym1saE1SSXdFQVlEVlFRSERBbFRZWFZ6WVd4cGRHOHhGVEFUQmdOVkJBb01ERWhsWVd4MGFHVkVZWFJoTVRFWE1CVUdBMVVFQXd3T1JYSnBZeUJJWVdGekxDQkVWazB4SlRBakJna3Foa2lHOXcwQkNRRVdGbVZvWVdGelFHaGxZV3gwYUdWa1lYUmhNUzV2Y21jd2dnR2lNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJqd0F3Z2dHS0FvSUJnUURwS2NTa29BTTZzVzIxK3ZXVGVJVk9HeDEwTVdhc1F5N1ZIaWQ2enlxWEFCTSt6bmZCblhlbnlVMGoxRlR2UG1SZk9Eb09EWFZ1UFV3RG9taENIaCtiY2xXOUtNMm81NjNjeFJLRXZCbmFIcnNqdzV5Tm14TzVZakVSYmh0SGRRZXFrdGR3M1ZZRVJSOUhveExPM0Zrc3pSMjkySFRCNHhXM3lXbFYzZ1RrTVFvelBTY0pLSDNiRzhQcXE2QVlQSjdDNFlCSWxVU2RCTVZsM3FuZUVmZzdmdXhpRmZYb2ZkVFZtN3JNaWlHN1g5ejQzUGZpbHFhZWlzZm10UnhBbFJ3RU5YckgzT3ZPRFB5TDByVG5HOENzYkFYWVZJTW1kZEhlNFpGOXBsaDk1c2o0cE1UaEx0Y0pYL285WEhMamg3RW1aeWdKSFdFUXE0UHdGd1pkbWJjZmhDbU9yODhIOEJiVXJ1LzdWNnpic0cxTjFDV2xuZGxiVnpuTCszSU1PcjhrWGFIY2FucWZja2dGVjRFcm5makZKcTFPSWFBbXNNajg1eE1ranlYTHljTEwvdTVuMm82Qmc5My9VUmZxdU9vU0lHT0NSMjVEYVp6cHcyazNzN29FOWRNd0VXWHRmWGdZdGgyYmxqeTV0RkgwR2pwT2t4MDdqN1pUNUhueG5sc0NBd0VBQWFOQU1ENHdEQVlEVlIwVEJBVXdBd0VCL3pBTEJnTlZIUThFQkFNQ0JlQXdJUVlEVlIwUkJCb3dHSUlXZDNkM0xtaGxZV3gwYUdWa1lYUmhhVzVqTG1OdmJUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FZRUFDdU1VTnE5YXkrK2U1WUM3UUZPOTRyZnp4R1FuRjNHa2xaTkFYbUlyN1BWR2RpR1kyR1R4LzlSdEhDd1RLemtMK3l2S29qZVo5ZFZLOHdyR1ZpUmtPL2pVeVorS2NXUm9rVWpzNTluY0pHUk1TU1J4dGVDUXVqdDRoZjIrL3FWK2Yyc01RdEVyd1BFMzB2YnFSWVVOTk5CVkVRcGFReC9hY0pEVXY5djdzakhpSkRxWHdRK3J6ajk1aUhBSWFlRUhxRi9NczIycDJiZVp1cXZJUUtlTWwrc3ZWcUh0aXV6V25GNFU2VkltcGtyNGJIbDdlZ1Y5SDZsNlQyU01rajZxRFU1ZTlOZzBabExUdG9zc2hCTG1vcEY3ZTdIeXJURUFtZk9QS1FlMEVnOUUydXJ6eHFCdUc1NGs1MEcySjBGaVBzUUpBaEZpTkd3U2c0UzNIeVZERzd1ZUtkMEw5M3dLT05PWUd2TUtpekNIQitwS3ZFTUpvWjh5OXVpQitIRlhjcDlSYUpxSjk3SHBaVEV2K2xpQ3AyUFNYemNLMHIyNVNjeWpGNmRMb3VLMlNCMzB4QXZKOHRFNTg0K2pxUTZDR2VjVTlYanZsQWp1SmRDckRlVlBzamtuN09QWEcrOFhaVTd6cUhaTm1YWDFZWTRINXJnRUo0OGxyVXJQM0k4UiJdfQ.eyJlbnRyeSI6W3siZnVsbFVybCI6Imh0dHA6Ly9oYXBpLmZoaXIub3JnL2Jhc2VSNC9Db25kaXRpb24vNGFjNDE3MTUtZmNiZC00MjFjLTg3OTYtOWIyYzk3MDZkZDNmIiwicmVzb3VyY2UiOnsiY2F0ZWdvcnkiOlt7ImNvZGluZyI6W3siY29kZSI6ImVuY291bnRlci1kaWFnbm9zaXMiLCJkaXNwbGF5IjoiRW5jb3VudGVyIERpYWdub3NpcyIsInN5c3RlbSI6Imh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29uZGl0aW9uLWNhdGVnb3J5In1dfV0sImNsaW5pY2FsU3RhdHVzIjp7ImNvZGluZyI6W3siY29kZSI6ImFjdGl2ZSIsInN5c3RlbSI6Imh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vY29uZGl0aW9uLWNsaW5pY2FsIn1dfSwiY29kZSI6eyJjb2RpbmciOlt7ImNvZGUiOiIxMjM0IiwiZGlzcGxheSI6IkV4YW1wbGl0aXMiLCJzeXN0ZW0iOiJodHRwOi8vc25vbWVkLmluZm8vc2N0In1dLCJ0ZXh0IjoiRXhhbXBsaXRpcyJ9LCJlbmNvdW50ZXIiOnsicmVmZXJlbmNlIjoiaHR0cHM6Ly9leGFtcGxlLm9yZy9FbmNvdW50ZXIvNWZlNjJjZDUtYmZjZi00ZDNiLWExZTktODBkNmY3NWQ2ZjgyIn0sImlkIjoiNGFjNDE3MTUtZmNiZC00MjFjLTg3OTYtOWIyYzk3MDZkZDNmIiwibWV0YSI6eyJsYXN0VXBkYXRlZCI6IjIwMjAtMDQtMjhUMjA6Mjg6MDAuMDA4KzAwOjAwIiwicHJvZmlsZSI6WyJodHRwOi8vaGw3Lm9yZy9maGlyL3VzL2NvcmUvU3RydWN0dXJlRGVmaW5pdGlvbi91cy1jb3JlLWNvbmRpdGlvbiJdLCJzb3VyY2UiOiIjY2FiaUpJSzUxc0QyaXo0TiIsInZlcnNpb25JZCI6IjEwIn0sIm9uc2V0RGF0ZVRpbWUiOiIyMDE4LTEwLTIxVDIxOjIyOjE1LTA3OjAwIiwicmVjb3JkZWREYXRlIjoiMjAxOC0xMC0yMVQyMToyMjoxNS0wNzowMCIsInJlc291cmNlVHlwZSI6IkNvbmRpdGlvbiIsInN1YmplY3QiOnsicmVmZXJlbmNlIjoiaHR0cHM6Ly9leGFtcGxlLm9yZy9QYXRpZW50LzA2ZTFmMGRkLTVmYmUtNDQ4MC05YmI0LTZiNTRlYzAyZDMxYiJ9LCJ2ZXJpZmljYXRpb25TdGF0dXMiOnsiY29kaW5nIjpbeyJjb2RlIjoiY29uZmlybWVkIiwic3lzdGVtIjoiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9jb25kaXRpb24tdmVyLXN0YXR1cyJ9XX19LCJzZWFyY2giOnsibW9kZSI6Im1hdGNoIn19XSwibGluayI6W3sicmVsYXRpb24iOiJzZWxmIiwidXJsIjoiaHR0cDovL2hhcGkuZmhpci5vcmcvYmFzZVI0L0NvbmRpdGlvbj9wYXRpZW50PTA2ZTFmMGRkLTVmYmUtNDQ4MC05YmI0LTZiNTRlYzAyZDMxYiZjbGluaWNhbC1zdGF0dXM9YWN0aXZlLHJlY3VycmFuY2UscmVtaXNzaW9uIn1dLCJyZXNvdXJjZVR5cGUiOiJCdW5kbGUiLCJ0b3RhbCI6MSwidHlwZSI6InNlYXJjaHNldCJ9.rE5gfhbdbkmuYpKPb87Tpg1nRdRJTyNfWAOmXR2AA63FGKz2br_aAFtXj2UwIVHjp_AmgOZrpKmUFZnibBRcRTBUVfPWVrgRHleP1Dd1QL2qiaz0Pxw38odIVKQw88pFXBfIASsnrFMEJ_x07XQLWaXLOcEYVBb2s1SoULIW_McJCeCVKEnhrrsmNhXvAHLxYm2y8lUdTYYMH7rCM2FEIglavxLA4QI1nPv5i5ZwSOZDI1OoPtK4dHbbvggsKnAtBJL890AJ7JD9h1QTmw8vSWjydCBNilgGiyffPmfSGXFvGQ9tEcETHW0NlUEF649Zt-k71aMhkjooCsRwM9Dmb4STqO7Fy0MzWbvdi6K46W_rf77gv75Xr_cQyvSubWumRTMompgG1qOz5LbClfKHoWWyIzBxM2u7wqBukJTAIm10DSDgFg79-5oLPIDOj19VYsnLcyYFdYIx2G3gkBhcbExDdytlKGIZ8YvIEojDfNibC3wLWwNvmptBww-hPdT7'
</pre>




```python
!openssl x509 -in recd_cert.der -inform DER -pubkey -noout > recd-public-key.pem
with open('recd-public-key.pem') as f:
    pem_public = f.read()
pem_public
```




<pre style="border:0; overflow-wrap:break-word;">
'-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEA6SnEpKADOrFttfr1k3iF\nThsddDFmrEMu1R4nes8qlwATPs53wZ13p8lNI9RU7z5kXzg6Dg11bj1MA6JoQh4f\nm3JVvSjNqOet3MUShLwZ2h67I8OcjZsTuWIxEW4bR3UHqpLXcN1WBEUfR6MSztxZ\nLM0dvdh0weMVt8lpVd4E5DEKMz0nCSh92xvD6qugGDyewuGASJVEnQTFZd6p3hH4\nO37sYhX16H3U1Zu6zIohu1/c+Nz34pamnorH5rUcQJUcBDV6x9zrzgz8i9K05xvA\nrGwF2FSDJnXR3uGRfaZYfebI+KTE4S7XCV/6PVxy44exJmcoCR1hEKuD8BcGXZm3\nH4Qpjq/PB/AW1K7v+1es27BtTdQlpZ3ZW1c5y/tyDDq/JF2h3Gp6n3JIBVeBK534\nxSatTiGgJrDI/OcTJI8ly8nCy/7uZ9qOgYPd/1EX6rjqEiBjgkduQ2mc6cNpN7O6\nBPXTMBFl7X14GLYdm5Y8ubRR9Bo6TpMdO4+2U+R58Z5bAgMBAAE=\n-----END PUBLIC KEY-----\n'
</pre>




```python
try:
    verify = jws.verify(recd_jws, pem_public , algorithms=['RS256'])
    print('#     #                                                ### ')
    print('#     #  ######  #####   #  ######  #  ######  #####   ### ')
    print('#     #  #       #    #  #  #       #  #       #    #  ### ')
    print('#     #  #####   #    #  #  #####   #  #####   #    #   #  ')
    print(' #   #   #       #####   #  #       #  #       #    #      ')
    print('  # #    #       #   #   #  #       #  #       #    #  ### ')
    print('   #     ######  #    #  #  #       #  ######  #####   ### ')
    print('                                                           ')

except Exception as e:
    print('#    #   ####   #####      #    #  ######  #####   #  ######  #  ######  #####       ###          #   ')
    print('##   #  #    #    #        #    #  #       #    #  #  #       #  #       #    #       #          #    ')
    print('# #  #  #    #    #        #    #  #####   #    #  #  #####   #  #####   #    #           #####  #    ')
    print('#  # #  #    #    #        #    #  #       #####   #  #       #  #       #    #       #          #    ')
    print('#   ##  #    #    #         #  #   #       #   #   #  #       #  #       #    #      ###          #   ')
    print('#    #   ####     #          ##    ######  #    #  #  #       #  ######  #####        #            ## ')
    print('                ')
    print(f"not verified: {e}")
```

<pre style="border:0; overflow-wrap:break-word;">
#     #                                                ###
#     #  ######  #####   #  ######  #  ######  #####   ###
#     #  #       #    #  #  #       #  #       #    #  ###
#     #  #####   #    #  #  #####   #  #####   #    #   #  
 #   #   #       #####   #  #       #  #       #    #      
  # #    #       #   #   #  #       #  #       #    #  ###
   #     ######  #    #  #  #       #  ######  #####   ###
</pre>


---

// File: input/pagecontent/solicited-unsolicited-attachments.md


Currently, claims and prior authorization requests can come through [X12 transactions] or portal submissions. Payers may need additional information or "attachments" from a Provider to determine if the service being billed (for claims) or requested (for prior authorizations) is supported by medical or policy benefits. In this guide, the term "attachments" includes a subset of additional information represented in document form defined by the [LOINC Document Ontology] and [X12]. When requesting and sending attachments using [Questionnaire], attachments mean *any* additional information. Attachments for claims or prior authorization can be divided into *solicited* and *unsolicited* workflows. The sections below document the differences and similarities between these workflows and define the CDex transactions that implementers can use for solicited and unsolicited prior authorization and claims attachments. See the [Conforming to CDex Attachments] for guidance on how systems define their support for each.

The Da Vinci Burden Reduction Implementation Guides (IGs), [Da Vinci Coverage Requirements Discovery (CRD)], [Da Vinci Documentation Templates and Rules (DTR)], and [Da Vinci Prior Authorization Support (PAS)], support an integrated workflow to enable automated submission of required documentation and prior authorization from EHR and payer systems respectively. Although the PAS guide leverages CDex, implementers should follow the Burden Reduction IGs to request additional information for prior authorization. See [Using CDex Attachments with DaVinci PAS] page for more details.
{:.bg-info}

### *Unsolicited* Attachments

For *unsolicited* attachments, the Payer does not explicitly request them - instead, the Provider will submit the attachments to support a claim or prior authorization based on the Payer's predefined rules. The Provider may submit the attachments *before, at the same time as, or after* the claim or prior authorization. After submission, the Payer associates the attachment with the claim or prior authorization.

#### Example Scenarios

1. A set of predefined rules, made by the Payer or state mandates, necessitates that the Provider submit additional information without a specific request.
2. A Provider believes the Payer will need additional information to process a claim.
3. A Provider is under review and must provide additional documentation for all claims.

The flow diagram below shows this transaction:

{% include img.html img="unsolicited-flow.svg" caption="Figure 10: Unsolicited Attachments Flow Diagram" %}

See the [Sending Attachments] page for information on how Providers can use CDex to support unsolicited attachment transactions.

### *Solicited* Attachments

For a *solicited* attachment, the Provider will submit attachments to support a claim or prior authorization *in response to* a Payer's request for additional documentation. The Payer associates the submitted attachments with the claim or prior authorization. The flow diagrams below show this transaction:

{% include img.html img="solicited-claim-flow.svg" caption="Figure 11: Solicited Attachments for a Claim" %}

---

{% include img.html img="solicited-prior-auth-flow.svg" caption="Figure 12: Solicited Attachments for a Prior Authorization" %}

In addition to using CDEX to request attachments, a Payer can request them via a non-CDex-FHIR-based request such as an X12 transaction, fax, portal, or other platform. See the [Requesting Attachments Using Attachment Codes], [Requesting Attachments Using Questionnaires], and [Sending Attachments] pages for how Payers and Providers can use CDex to support  *solicited* attachment transactions.

{% include link-list.md %}

---

// File: input/pagecontent/task-based-approach.md


### Introduction

This guide uses a Task Based Approach to satisfy the Data Consumer's need to request the information it needs when it can not perform a direct query. The following factors determine whether to use this approach:

- Access to the data is restricted, and specific authorization is needed (for example, due to patient privacy concerns, the data needs to be reviewed or filtered)
- The appropriateness of the request needs to be determined
- The data needed is described in an unstructured or non-computable form. For example:
  - The Data Consumer may not know specific codes or identifiers to make a direct query
  - The Data Consumer can only request the data using free text - there is no way to describe the data in a structured format.
- The Data Consumer requests the data using FHIR [Questionnaire].  
- A Direct Query is otherwise not feasible

In most situations, a provider or designated staff must find, aggregate, filter, or approve the release of the data. However, in other use cases, mutually agreed upon data sets for specific purposes can be automatically fulfilled without human intervention.

### Benefits

- Easy ability for Task recipient to say "yes" or "no", including providing a reason for refusal.
- Allows linking the request to its associated outputs without creating a new resource
- Can use polling or subscriptions to retrieve the results
- As trust and infrastructure enable direct queries to evolve, it enables a transition strategy toward direct queries to gather data of interest
- Allows conveying the 'status' of a request in progress
   - Monitoring for status does not require a change in workflow from monitoring for final results - i.e., there is no increase in complexity for the receiver whether status updates occur or not
   - Note that fully automated processes typically will not have status updates.
- Provides the ability to represent the needed data using a FHIR [Questionnaire] 
- Provides the ability to represent the Purpose of Use in the Task
- Provides the ability to supply work queue hints to the Task recipient
- Enables referencing the object that directly leads to the task - a particular claim, for example

### The Task Resource


**For CDex Task-based transactions, the [CDex Task Data Request Profile] SHALL be used by the Data Consumer to solicit information from a system.** It represents *both* the data request and the returned data and provides information such as why it needs to be completed, who is to complete it, who is asking for it, when it is due, etc. The Task's status is updated as the task is fulfilled. For a detailed description of all the mandatory, [*must support*], and optional elements, as well as formal definitions and profile views, see the [CDex Task Data Request Profile] page.

#### Task Inputs and Outputs

`Task.input` represents the necessary information from Data Consumer to complete the task, including the specific data they request. The CDex Task Data Request Profile supports four ways to define the requested data.
  1. leveraging the [FHIR RESTful search syntax]
  2. using a code
  3. using free text
  4. referencing a FHIR [Questionnaire]

Implementers of this guide [*must support*] search syntax and coded inputs. However, free text and Questionnaire input are optional capabilities. See the [Conforming to CDex Task Based Approach] page for how systems declare what they support for the various actors and roles.
   
`Task.output` represents the requested data that is returned. This output is a FHIR reference to:
   - FHIR Search Bundle (e.g., a query response)
   - FHIR Documents (e.g., C-CDA on FHIR)
   - Other data formats attached to or referenced by a FHIR [DocumentReference] resource (e.g., a C-CDA document)
   - a FHIR [QuestionnaireResponse] 
   - Other Individual FHIR resources (e.g., Condition)


#### Purpose of Use

The current state of healthcare data exchange is typically limited to a single, well-known, and pre-established purpose-of-use (POU). The CDex Task Data Request Profile defines an optional element representing a new way to dynamically provide additional granularity for the POU using codes defined in the [CDex Purpose of Use Value Set]. The value set page documents and illustrates the hierarchy where the child concepts have an IS-A relationship with the parents that rolls up to the [45 CFR 164.506 Treatment, Payment, and Health Care Operations (TPO)] concepts.  

If the Data Source supports this element, a transaction-level POU permits more discrimination than "Treatment, Payment, or Health Care Operations (TPO)" which systems use today. It also enables a POU that differs from the default purpose of use for that data-consuming system. It allows the Data Source to make necessary decisions about whether to provide the information or whether/how to filter the information. The example transactions below illustrate the usage of the POU element.

#### Work Queues

For asynchronous requests using Task, it may be beneficial for Data Consumers and Data Sources to pre-coordinate and agree upon a set of "request tags" to communicate the general type of request being made. Then, the Data Source can use these Data Consumer supplied tags to aid in filtering and sorting Tasks. For example, assuming the Data Source has work queues based on request criteria, the Data Source could use tags to place a Task in the appropriate work queue.

The [CDex Work Queue Value Set] is a set of work queue tags that the provider may use in their workflow to process requests. The examples below illustrate how these values are communicated in `Task.meta.tag` to tag the Task with the work queue hint.

#### Task Reason

When known, `Task.reasonCode` or `Task.reasonReference` **SHALL** reference the object that directly leads to the task - a particular claim, for example.

### Sequence Diagram

The sequence diagram in Figure 7 below summarizes the fundamental interaction between the Data Consumer and Data Source when querying and retrieving data using the Task-based transaction. The following sections discuss the options and variations associated with the Task-based Exchange API.

{% include img.html img="task-sequencediagram.svg" caption="Figure 7" %}


### Discovery of Identifiers

Task-based queries require communicating a business identifier (such as a provider NPI or member ID) or a [FHIR id] to uniquely identify providers, payers, and patients. Business identifiers are used in many payer-to-provider-based transactions today, and the CDex Task Data Request Profile requires them. However, there is currently no standard way to obtain these identifiers, and implementers must get them "out of band".

The patient's [FHIR id] is a prerequisite to performing FHIR RESTful Direct Queries. See [this section](direct-query.html#discovery-of-patient-fhir-ids) for how to discover the patient's FHIR id.



### Task State Machine

Figure 8 below illustrates a "typical" state machine for CDex Task. The Data Consumer creates the Task with a status of "requested". The Data Source updates the status of the Task as appropriate. The Data Source **SHALL** support *all* the statuses in the [HRex Task Status ValueSet]. The Data Source **MAY** support additional transitions, including transitions from terminal states (e.g., back to "in-progress" from "failed" or "completed"). The Data Source **MAY** use [`Task.businessStatus`] to track intermediate business statuses for their specific implementation.

{% include img.html img="task-state-machine.svg" caption="Figure 8" %} 

### Fetching the Data



When the task is complete, its outputs are referenced by the `Task.output` element, and the `Task.status` is updated to "completed". The Task can refer to external resources, or it can refer to a search set Bundle [contained] within the Task resource itself, either of which the Data Consumer can subsequently fetch. As documented [here](direct-query.html#read-warning), when signatures are required, the Data Consumer must use a [FHIR RESTful search] instead of [FHIR RESTful read]. Note that a contained Bundle does not have an independent existence. However, by using a contained Bundle, the Data Source can provide information to Data Consumers who can not query the Data source directly via FHIR RESTful reads or searches. For example, only authorized Data Consumers can access patient data directly. Since the Data Source controls the release of information contained in the Bundle, patient privacy and security are maintained.

#### How Long is the Data Available

The Data Source determines how long the Data Consumer can access the completed Task and the referenced data. The business rules between them and other constraints, such as those based on privacy law, will limit the time the requested data is accessible.

### Example Transactions Based on Query Code and Free Text Inputs

Following the guidance in this guide and HRex, getting clinical data from the Data Source is typically a two-to-five-step process for the Data Consumer. The following example transactions show two scenarios using task-based exchanges to request and retrieve clinical data from a Data Source(HIT). The Task examples in scenario 1 use a FHIR RESTful query syntax and a free text input. The scenario 2 example uses a coded input in the Task. The following section documents an example transaction in which the Task input is a FHIR Questionnaire. 

#### Scenario 1

This scenario demonstrates these Task-based Query options:

1. FHIR RESTful query syntax vs. free text inputs
1. Polling
1. Fetching contained vs. external data

Payer A Seeks Insured Person/Patient B's Active Conditions from Provider C to support a claims audit.

##### FHIR RESTful Query Syntax

Preconditions and Assumptions:

1. {{ site.data.base-example-list[0] }}
1. {{ site.data.base-example-list[2] }}
1. {{ site.data.base-example-list[3] }}
1. {{ site.data.base-example-list[4] }}
1. {{ site.data.base-example-list[5] }} the FHIR RESTful query syntax is used for the actual request.
1. {{ site.data.base-example-list[6] }}
1. {{ site.data.base-example-list[7] }}

{% include examplebutton_default.html example="task-scenario-1a" b_title = 'Click Here To See Example Task Based Transaction (RESTful search syntax)' %}

##### Free Text

This example is the same as above, except 'Task.input' uses free text to specify the data requested.

{% include examplebutton_default.html example="task-scenario-1b" b_title = 'Click Here To See Example Task Based Transaction (free text)' %}

##### Contained Task Outputs

Preconditions and Assumptions:

This example repeats the first, except Patient B's active conditions referenced in `Task.output` are *contained* resources within the Task resource. Therefore, the Payer must only perform a single RESTful GET operation to fetch the completed Task and the requested data.

{% include examplebutton_default.html example="task-scenario-1c" b_title ='Click Here To See Example Task Based Transaction (contained output)' %}

---

#### Scenario 2

This scenario demonstrates requesting a non-FHIR document (PDF, C-CDA) using a coded input :

Payer A Seeks the insured Person/Patient B's latest progress notes from Provider C to improve care coordination.

##### Progress note Exam Notes as PDF

Payer A Seeks the Insured Person/Patient B's latest progress notes from Provider C to improve care coordination.

Preconditions and Assumptions:

1. {{ site.data.base-example-list[0] }}
1. {{ site.data.base-example-list[8] }}
1. {{ site.data.base-example-list[9] }}
1. {{ site.data.base-example-list[4] }}
2. {{ site.data.base-example-list[5] }} the LOINC attachment code 11506-3, History & Physical Note, is used for the actual request.
3. Patient B's documents referenced by Task.output are "contained resources", and the actual documents are base64 pdf files in the `DocumentReference.content.attachment.data` elements. By polling the Task, the Payer already has the data when the completed Task is fetched, and there is no need to perform an additional RESTful GET.


{% include examplebutton_default.html example="task-scenario-2a" b_title = "Click Here To See Example Task Based Transaction for Patient's Latest Progress note" %}


##### Surgical Notes as CCDA Documents

Payer A Seeks an insured Person/Patient B's operative notes from Provider C to improve care coordination.

Preconditions and Assumptions are the same as in the previous example, except the Payer POSTS a Task to the Provider endpoint requesting Patient B's operative notes using the LOINC attachment code 11504-8, Surgical operation note.

{% include examplebutton_default.html example="task-scenario-2b" b_title = "Click Here To See Example Task Based Transaction for Patient's Operative Note" %}

---

### Using Questionnaire as Task Input

The [CDex Task Data Request Profile] supports requests for more detailed data using Questionnaire. When a Data Consumer references a FHIR Questionnaire as an input parameter, the Task represents a request for the Data Source to complete the questionnaire (form). CDex defines a specific `Task.code` that directs the Data Source to launch a [Da Vinci - Documentation Templates and Rules (DTR)] application to use the Data Consumer provided Questionnaire and results from any CQL execution to generate a QuestionnaireResponse resource containing the necessary information. Figure 8 summarizes the steps for requesting and completing a questionnaire using a CDex Task-Based request and DTR. The sequence diagram in the next section illustrates these transactions in more detail:

{% include img.html img="taskbased-task-Q-summary.svg" caption="Figure 8" %} 

**Step 1:** The Data Consumer POSTs a Task directly to the Data Source. The Task is a request to complete a questionnaire.

**Step 2:** If the Task.code is "data-request-questionnaire", the Data Source launches DTR and shares the Task as a launch parameter (i.e., DTR has access to read and update the Task and access to other resources to complete the QuestionnaireResponse in Step 3)

**Step 3:** DTR fetches the Task, which contains the link to the Questionnaire. Then, it fetches the Questionnaire (and any CQL rules defined within it) and completes the QuestionnaireResponse. Refer to the [Da Vinci DTR] Implementation Guide for more information on how it generates a QuestionnaireResponse.

**Step 4:** DTR creates and updates the QuestionnaireResponse directly to the Data Source's FHIR Server and updates `Task.output` to reference the QuestionnaireResponse it created.

**Step 5:** The Data Source updates the Task to "completed" when the QuestionnaireResponse is completed. The Data Consumer retrieves the completed Task from the Data Source using polling or a previously created Subscription.

**Step 6:** The Data Consumer retrieves the QuestionnaireResponse referenced by `Task.output`.

#### Using [Da Vinci DTR] to Complete the Questionnaire

The sequence diagram in Figure 9 below depicts the FHIR RESTful transactions and processes involved between the Data Consumer, Data Source, and DTR application needed to request, fill, and return a questionnaire using the CDex Task-based approach. It references a "DTR Launch". If DTR is a native EHR application, the launch is implementation specific. If it is a SMART on FHIR Application, the [DTR SMART App Launch] section documents the launch sequence and parameters.

{% include img.html img="taskbased-task-Q-sequencediagram.svg" caption="Figure 9" %}

#### Example of Requesting Data Using A FHIR Questionnaire

Payer A Seeks documentation from Provider P for Insured Person/Patient B's Home Oxygen Therapy order as part of a claims audit.

Preconditions and Assumptions:

1. {{ site.data.base-example-list[0] }}
2. {{ site.data.base-example-list[2] }}
3. {{ site.data.base-example-list[3] }}
4. {{ site.data.base-example-list[4] }}
5. The Payer POSTS a Task to the Provider endpoint requesting the Provider to complete the referenced Questionnaire.
6. The Provider uses a  DTR SMART App or EHR native application to complete the Questionnaire.
7. {{ site.data.base-example-list[6] }}
8. The Payer fetches the QuestionnaireResponse referenced by `Task.output`.

{% include examplebutton_default.html example="task-scenario-10" b_title = 'Click Here To See Example Task Based Transaction Using Questionnaire' %}



### When The Task Cannot Be Completed

If the Data Source was unsuccessful in completing the request for data, the Task's state transitions to "failed". It is a terminal state, and no further activity for the task will occur. For example, when the requested data is unavailable, the Data Source cannot complete the task. They update the `Task.status` to "failed" and state the reason in `Task.statusReason` (for example, "no matching results"). The `Task.output` is absent since the requesting data is unavailable. The Data Consumer's business rules will determine their response to a failed request.

#### Example Unsuccessful Task Based Transaction

In this scenario, Payer A Seeks Insured Person/Patient B's glycated hemoglobin (HbA1c) test results after 2020-01-01 from Provider C.
##### Preconditions and Assumptions:

1. {{ site.data.base-example-list[0] }}
1. {{ site.data.base-example-list[10] }}
1. {{ site.data.base-example-list[11] }}
2. {{ site.data.base-example-list[15] }}
3. Payer A knows the appropriate LOINC codes (4548-4 Hemoglobin A1c/Hemoglobin.total in Blood)
4. {{ site.data.base-example-list[16] }} 


{% include examplebutton_default.html example="task-scenario-3" b_title = 'Click Here To See Example Unsuccessful Task Based Transaction' %}

---

### Polling vs Subscriptions

Task-based exchanges can take one of two forms - subscription or polling, as described in the [Exchanging with polling] and [Exchanging with FHIR Subscription] sections of the FHIR R5 core specification. The [Subscription Capabilities] section provides general guidance on polling vs. subscription.

#### Polling

Polling is a mechanism for conveying new data to a Data Consumer as (or shortly after) the data is created or updated without requiring the Data Source to be aware of the specific needs of the Data Consumer. The Data Consumer repeatedly queries the Data Source to see if there is new data. For example, in the Da Vinci CDex use case, the Data Consumer would poll the Data Source by fetching the Task resource to see if it has been updated. Polling is the *default option* if the Data Source does not support subscribing to the Task as described below.

Data consumers can poll for a single Task or across several Tasks. The frequency must be often enough that the time between when the relevant data is created and when the Data Consumer receives it is sufficiently short for the Data Consumer's needs. However, it must be infrequent enough that the   Data Source's resources are not over-taxed by the repeated query. Data Consumers **SHOULD** perform this operation in an automated/background manner after 1 minute to return automated responses and no more than every 5 minutes for the first 30 minutes and no more frequently than once every hour after that. 



#### Subscription

<!-- Subscription is a mechanism designed to allow clients to request notifications when an event occurs or data changes. It is an active notification system; a FHIR server actively sends notifications as changes occur. In the Da Vinci CDex use case, the Data Consumer subscribes to the Data Source's Server [base]/Subscription endpoint for notifications when any Task that they created is updated.

When using subscriptions in CDex, implementers **SHALL** use topic-based subscriptions as defined in the [Subscription R5 Backport Implementation Guide]. This topic-based subscription model supersedes the query-defined subscription model defined in FHIR R4 and supported in earlier versions of CDex. Systems must follow the Conformance in FHIR R4 requirements specified in the [R5 Backport Implementation Guide] and the CDex-specific conformance requirements listed below. -->

In the subscription mechanism, instead of the Data Consumer regularly querying the Data Source to see if there are changes to existing Tasks, the Data Consumer creates a Subscription instance on the Data Source server. (It's also possible for the data source to configure subscriptions for clients; in other words, it can create subscriptions administratively. However, these implementation details are out of scope for this guide.) The Subscription indicates that the Data Consumer wants to be notified about changes to Tasks and provides filters describing what subset of Tasks the Data Consumer is interested in. The Data Source will then push notifications when there are new or updated Tasks and the Data Consumer can then query for the specific Tasks that have changed.

Da Vinci CDex Data Sources who choose to support Subscription **SHALL** comply with the [Subscription R5 Backport Implementation Guide] and the Da Vinci Health Record Exchange (HRex) [Subscription requirements](https://build.fhir.org/ig/HL7/davinci-ehrx/task.html#subscription) for subscribing to Task updates. These implementation guides "pre-adopt" the FHIR R5 topic-based subscription approach in R4 implementations since most U.S. EHR vendors have agreed to support it.

##### HRex Task Subscription Topic 

The Da Vinci Health Record Exchange (HRex) guide formally defines the [HRex Task Subscription Topic](https://build.fhir.org/ig/HL7/davinci-ehrx/SubscriptionTopic-Task.html) Subscription Topic as a [SubscriptionTopic], a resource defined in FHIR 4B and later versions.

- The Data Source **SHALL** support the HRex Task Subscription Topic and **MAY** support other subscription topics.

Note that supporting the FHIR SubscriptionTopic resource nor the equivalent Basic resource versions described in the R5 Backport Implementation Guides is NOT required by this guide to support subscriptions.
{:.bg-warning}

##### Discovery

The R5 Backport Implementation Guide defines the [CapabilityStatement SubscriptionTopic Canonical] extension to allow CDex Data Consumers to discover CDex Data Sources' supported subscription topics. This extension enables servers to advertise the canonical URLs of subscription topics available to clients and allows clients to see the list of supported topics on a server. If a Data Source supports subscriptions:

- The Data Source **SHALL** support discovery of the CDex Task Update Subscription Topic canonical URL
- The Data Source **SHOULD** support discovery using the CapabilityStatement SubscriptionTopic Canonical extension and **MAY** support discovery by some other method.

The example CapabilityStatement snippet shows a Data Source advertising the CDex Task Update Subscription Topic canonical URL with the CapabilityStatement SubscriptionTopic Canonical extension:

{% include examplebutton_default.html example="advertise-topic.md" b_title = 'Click Here To See CapabilityStatement Advertising the CDex Task Update Subscription Topic' %}

<!-- 
##### Subscription Resource

To dynamically request notifications for CDex Task updates (and other topics the Data Source supports), Data Consumers RESTfully POST a Subscription resource with the Data Source. The Subscription resource **SHALL** conform to the [R4/B Topic-Based Subscription Profile].

<div class="bg-info" markdown="1">
Subscriptions need not be created dynamically by the Data Consumer. It's also possible for the Data Source to configure subscriptions for clients, in other words, create subscriptions administratively. However, these implementation details are out of scope for this guide.
</div> 

###### Channel Types

The subscription requires information about where to send notifications, such as the type of channel and the URL that describes the endpoint.

###### Payload Types

When specifying the contents of a notification, there are three options available: "empty," "id-only," and "full-resource." Because the Data Source can not guarantee who has access to the nominated subscription endpoint, the notification typically uses "id-only" to return the Task resource ID. By omitting the payload, the Data Consumer is forced to authenticate before accessing the data using a FHIR RESTful read or search, which mitigates privacy and security risks for the Data Source.

- The Data Consumer **SHALL** use the canonical URL in the `Subscription.criteria` element to subscribe to the Data Source's Server [base]/Subscription endpoint'
- The Data Source **SHOULD** support the "rest-hook" channel and **MAY** support other channel types.
- The Data Source **SHALL** support ""id-only" payload type and **MAY** support other payload types.

###### Subscription Notifications

For active CDex Task Update subscriptions, when a CDex Task Data Request Profile is updated, the Data Source **SHALL** trigger a Subscription Notification to the endpoint supplied by the Data Consumer. This notification is a Bundle resource and **SHALL** conform to the [R4 Topic-Based Subscription Notification Bundle]. The first entry contains the subscription's status information, represented by a Parameters resource. For the "id-only" payload type, Task IDs are listed in the "focus" part parameter.

-->

#### Example Task Based Transaction using Subscription

The following example repeats Scenario 1 above using Subscription instead of Polling. However, instead of the Payer polling the Task resource until the `Task.status` indicates it is completed, rejected, or failed:

1. The Payer *subscribes* to the HRex Task Subscription Topic to get notifications when the Task is updated.
2. The Payer fetches the Task resource when notified of an update.
3. When the `Task.status` is "completed", the Payer fetches Patient B's active Conditions referenced by `Task.output` as *external* resources. (This step is skipped if the status is "rejected".)

{% include examplebutton_default.html example="task-scenario-4" b_title = 'Click Here To See Example Task Based Transaction using Subscription' %}



---

### Formal Authorization

In Provider to Provider transactions, there are situations where one must supply a formal authorization for each data request. In Payer to Provider and some Provider to Provider transactions, a general data-sharing agreement makes such individual authorizations unnecessary, and the Data Consumer can use the Task alone. When a formal request for the information to be shared is needed, it is represented by either a [CommunicationRequest] or [ServiceRequest] and referenced by Task using the `Task.basedOn` element. The example below illustrates a use case with a formal authorization.

The [HL7 FHIR-I Workflow project] is working on a set of rules for when it is sufficient to use Task alone to ask for an action to be performed and when the Task needs to be accompanied by a separate formal authorization using a request resource. Their preliminary conclusion is that Task can (and even should) exist without a request resource for some situations. The FHIR-I Workflow project intends for these rules to be used in addition to the organization's business practices to assist in the decision-making of the information providers.
{:.stu-note}

#### Example Task Based Transaction with a Formal Authorization

In this scenario, a referred-to Provider Seeks Patient B's Active Conditions from referring the Provider to support performing the requested service.

##### Preconditions and Assumptions:

1. {{ site.data.base-example-list[0] }}
1. {{ site.data.base-example-list[17] }}
1. {{ site.data.base-example-list[18] }}
1. {{ site.data.base-example-list[12] }}
2. The Referred-To Provider creates a CommunicationRequest formally authorizing information to be gathered on Patient B.
   - Note that in this example, the Referred-To-Provider (Data Consumer) is both the requester and the data recipient. The requester could also be a third party.
1. The  Referred-To-Provider POSTS a Task to the Referring Provider endpoint requesting Patient B's Active Conditions. The CommunicationRequest is referenced in `Task.basedOn`. For the actual request, the FHIR RESTful query syntax is used.
3. The Referring Provider fetches and inspects the CommunicationRequest to review the authorization.
4. The Referred-To-Provider polls the Task resource until the `Task.status` indicates it is completed, rejected, or failed.
5. The Referred-To-Provider fetches Patient B's Active Conditions referenced by `Task.output` as *external* resources.

{% include examplebutton_default.html example="task-scenario-5" b_title = "Click Here To See Example Task Based Transaction with a Formal Authorization" %}

---

### Provenance

To the extent that the Data Source keeps a record of the data's provenance, the FHIR Provenance Resource can be requested using Task. The input parameter is a FHIR RESTful query syntax or free text (i.e., "give me this data and its provenance"). The examples below show how to request and receive provenance using either method. Alternatively, When `Task.output` represents individual FHIR resources, the Data Receiver could query for its associated Provenance resources when fetching the resource referenced in `Task.output` (see the Direct Query for [examples](direct-query.html#provenance)). Typically, requesting external Provenance for FHIR Documents and other formats, such as C-CDA, is unnecessary because their contents implicitly or explicitly supply their provenance.

#### Example Requests for Provenance using Task Based Transaction

The following examples repeat the first two examples in Scenario 1 above but request Patient B's active Conditions *and associated Provenance*.

{% include examplebutton_default.html example="task-scenario-6b" b_title = 'Click Here To See Example Requests for Provenance using Task (search based syntax)' %}

{% include examplebutton_default.html example="task-scenario-6a" b_title = 'Example Requests for Provenance using Task (free text)' %}

---

### Signatures

{% include signature-support.md %}

Some Data Consumers may require that the data they receive be signed. When signatures are required on the returned results, the following general rules apply:

{% include human-signature.md %}
{% include system-signature.md %}
{% include inherently-signed.md %}

{% include signature-disclaimer.md %}

#### The Data Consumer Requirements

- The Data Consumer *pre-negotiates* with the organization representing the Data Source/Responder if:
  1. electronic or digital *provider* signatures are required for *all* Task-based query response data
  2. or electronic or digital *system-level* signatures are required for *all* or *some* Task-based query response data instead of or in addition to provider signatures (for example, for automated workflows)
  3. or electronic or digital *provider* signatures are required *only* for requests that communicate the signature requirement using the `Task.input` [signature flag](StructureDefinition-cdex-task-data-request-definitions.html#Task.input:signature).
- The Data Consumer follows the documentation on the [Signatures] page for validating signatures.
   - If the signatures fail verification, the Data Consumer notifies the Data Source that the signature is invalid or absent. Currently, there is no standard way to communicate this, and it needs to be done "out of band".

#### Data Source Requirements
{% include data-source-sig-rules.md %}

#### Example of a *Signed* Task Based Transaction

The following example repeats Scenario 1 above; however, the Payer requires a signature.
  - The Provider creates a FHIR Document bundle that includes the FHIR resources representing the clinical data and signs the Bundle.
- See the [Signatures] page for a detailed explanation of how the signature was created and verified.

{% include examplebutton_default.html example="task-scenario-7" b_title = 'Click Here To See Example Signed Task Based Transaction' %}

{% include link-list.md %}


---

// File: input/pagecontent/task-based-conformance.md

{% capture X %}<span style="color:red; font-size:1.5em">&#10008;</span>{% endcapture %}
{% capture OK %}<span style="color:green; font-size:1.5em">&#10004;</span>{% endcapture %}



### Introduction

CDex Task-based transactions have many optional capabilities. Systems may choose some or all of these capabilities and implement any combination. Refer to the CDex [CapabilityStatements] resources for conformance expectations for the various actors and roles. In contrast to the expectations in the CDex CapabilityStatements, Systems should define what they support in their local capability statement in one or more of the following ways:

1. (Preferred) Formally derived implementable profile from [CDex Task Data Request Profile]
2. Document their systems' capabilities for requesting attachments in `CapabilityStatement.rest.resource.documentation` for the Task resource.
3. (Preferred) Formal [OperationDefinition] derived from [`$submit-attachment`]
4. Document their systems' capabilities for submitting attachments in `CapabilityStatement.rest.documentation`

### Actors for [CDex Task Data Request Profile]

- Data Source in the Role of Data Source Server
- Data Consumer in the Role of Data Consumer Client

### Task-based Interaction Functional Requirements

|Capability|Required|Optional|
|:---:|:---:|:---:|
|Signatures|{{OK}}||
|Polling|{{OK}}||
|Subscriptions||{{OK}}|
|Support of Provenance||{{OK}}|
{:.grid}


### Capabilities for Task-based Requests

|Capability|Must Support*|Optional|
|:---:|:---:|:---:|
|Requesting Attachments Using Attachment Codes|{{OK}}||
|Requesting Attachments Using FHIR RESTful Query Syntax|{{OK}}||
|Requesting Attachments Using Free Text||{{OK}}|
|Requesting Attachments Using Questionnaire||{{OK}}|
|Support of Contained Task Outputs||{{OK}}|
|Signatures|{{OK}}||
|Representing The Purpose Of Use (POU) For The Requested Data||{{OK}}|
|Support of Work Queues Tags||{{OK}}|
|Support of Formal Authorizations|{{OK}}||
{:.grid}

\* See the next section

### CDex Must Support Definition

{% include must-support.md %}

{% include link-list.md %}


---

// File: input/_resources/README.md

This folder contains 'private' resources used for publishing and hidden from the reader.  Won't show up in the IG.


---

// File: input/images/techflow_examples.md

---
tags: CDEX
title: CDex Flow Chart
---


# CDex Flow Chart

These example FlowCharts were created to assist the TestScript and Reference Implementation development team and are provided here to assist developers in implementing CDEX transactions.  They are example only and actual workflows may differ from them. 

Individual flowcharts ( the text between the "'''") can be viewed using *flowchart.js*.  flowchart.js is a flowchart DSL and SVG render that runs in the browser and terminal. For more information see https://flowchart.js.org/.  Alternatively this page can be viewed on https://hackmd.io/.


## Attachments

### Client
```flow
st=>start: Start
e=>end: End (Happy Path)
bad_transaction=>end: Transaction Error
bad_sig=>end: Signature invalid

oauth=>subroutine: Authentication and Authorization
get_attach_data=>subroutine: Get Attachments data
sign=>subroutine: Signature Needed:
Bundle into provider signed
Document Bundle
unsolited_claim=>operation: unsolicited claim:
provider assigns the 
tracking control number
on the prior auth and
submitted attachments
unsolited_preauth=>operation: unsolicited pre-auth:
provider assigns the 
tracking control number
on the claim and
submitted attachments
solicited_claim=>operation: solicited claim:
used payer assigned
Claim control number
solicited_preauth=>operation: solicited pre-auth:
used payer assigned 
Claim control number
get_reassoc_data=>subroutine: collect data for reassociation
get_reassoc_data=>subroutine: supply other Data elements
for reassociation to the Claim
add_claim_param=>operation: AttachTo parameter = "claim"
add_preauth_param=>operation: AttachTo parameter = "prior-authorization"
invoke_operation=>subroutine: Provider invokes
$submit-attachment operation
to submit attachments to Payer
http_200=>operation: Receive http 200 Success
http_400=>operation: Receive Error response 
=/- OperationOutcome
is_claim=>condition: Is the documentation
for a Claim?
is_solicited_claim=>condition:  Is it in response to
a request for additional
information for a claim?
is_solicited_preauth=>condition: Is it in response
to a request for additional
information by the payer?
need_sig=>condition: Is a signature needed?
is_signed=>condition: Is the attachment
data already signed
(e.g.,signed CCDA document?)
post_ok=>condition: Is transaction successful?
validate=>subroutine: Testscript: validation step(stub)

st->get_attach_data->need_sig->is_claim
is_claim(yes)->add_claim_param->is_solicited_claim(yes)->solicited_claim->get_reassoc_data->validate->oauth->invoke_operation->post_ok
is_claim(no)->add_preauth_param->is_solicited_preauth(yes)->solicited_preauth->get_reassoc_data->validate->oauth->invoke_operation->post_ok
is_claim(yes)->add_claim_param->is_solicited_claim(no)->unsolited_claim->get_reassoc_data->validate->oauth->invoke_operation->post_ok
is_claim(no)->add_preauth_param->is_solicited_preauth(no)->unsolited_preauth->get_reassoc_data->validate->oauth->invoke_operation->post_ok
need_sig(yes)->is_signed(yes)->is_claim
need_sig(yes)->is_signed(no)->sign->is_claim
need_sig(no,bottom)->is_claim
post_ok(yes)->http_200->e
post_ok(no)->http_400->bad_transaction
```


### Server
```flow
st=>start: Start
e=>end: End (Happy Path)
bad_transaction=>end: Transaction Error
bad_sig=>end: Signature invalid

request=>operation: Receive $submit-attachments
http_200=>operation: Return http 200 Success
http_400=>operation: Return 400+ Error response +/- 
OperationOutcome
oauth_ok=>condition: Is client
authenticated?
req_ok=>condition: Is valid request?
payload_ok=>condition: Is payload valid
FHIR Object
need_sig=>condition: Are signatures
required?
is_signed=>condition: Is attachment signed
FHIR Document
sig_ok=>condition: Is valid signature?
validate=>subroutine: Testscript: validation step(stub)

st->request->oauth_ok
oauth_ok(yes)->req_ok
oauth_ok(no)->http_400->bad_transaction
req_ok(yes)->payload_ok
req_ok(no)->http_400->bad_transaction
payload_ok(yes)->need_sig
payload_ok(no)->http_400->bad_transaction
need_sig(yes)->is_signed
need_sig(no,bottom)->http_200()->e
is_signed(no)->sig_ok
is_signed(yes,bottom)->http_200->e
sig_ok(yes)->http_200->e
sig_ok(no)->http_400->bad_transaction
```


## Direct Query

### Client:
```flow
st=>start: Start
e=>end: End (Happy Path)
bad_transaction=>end: Transaction Error
bad_sig=>end: Signature invalid
disc=>subroutine: Discovery of Patient FHIR_ID
oauth=>subroutine: Authentication and Authorization Workflow
search=>subroutine: Query for data
http1=>operation: Receive http 200 Success
+ SearchBundle payload
http2=>operation: Receive Error response 
=/- OperationOutcome
search_ok=>condition: Query Successful?
validate=>subroutine: Testscript: validation step(stub)
need_sig=>condition: Are signatures
required?
sig_ok=>condition: Is valid signature?
on SearchSet Bundle

st->disc->oauth->search->search_ok
search_ok(yes)->http1->validate->need_sig
search_ok(no)->http2->bad_transaction
need_sig(yes)->sig_ok
need_sig(no,bottom)->e
sig_ok(yes)->e
sig_ok(no)->bad_sig
```
### Server
```flow
st=>start: Start
e=>end: End (Happy Path)
bad_transaction=>end: Transaction Error

request=>operation: Receive FHIR Query
make_bundle=>subroutine: produce FHIR SearchSet Bundle
sign=>subroutine: Signature Needed:
organization signs
SearchSet Bundle
return_200=>operation: Return http 200 Success
payload = Searchset Bundle
return_400=>operation: Return 400+ Error response +/- 
OperationOutcome
oauth_ok=>condition: Is client
authenticated?
req_ok=>condition: Is valid request?
op_ok=>condition: Is operation 
successful?
need_sig=>condition: Are signatures
required?
validate=>subroutine: Testscript: validation step(stub)

st->request->oauth_ok
oauth_ok(yes)->req_ok
oauth_ok(no)->return_400->bad_transaction
req_ok(yes)->make_bundle->op_ok
req_ok(no)->return_400->bad_transaction
op_ok(yes)->validate->need_sig
op_ok(no)->return_400->bad_transaction
need_sig(yes)->sign->return_200->e
need_sig(no,bottom)->return_200->e

```


## Task

### Cient


```flow
st=>start: Start
e=>end: End (Happy Path)
bad_transaction=>end: Transaction Error
bad_sig=>end: Signature invalid

post=>subroutine: POST Task to Server
post_ok=>condition: Is FHIR create
transaction successful?
Receive http 200 Success
fetch_task_ok=>condition: Is FHIR read 
transaction successful?
Receive http 200 Success
fetch_data_ok=>condition: Is FHIR read 
transaction successful?
Receive http 200 Success
search_ok=>condition: Is FHIR search 
transaction successful?
Receive http 200 Success
is_polling=>condition: Client polling
the Task?
is_done=>condition: Is Task completed?
is_notified=>condition: Subscription Notification
that Task completed?
is_contained=>condition: Is Task.output contained?
need_sig=>condition: Is signature
required?
is_signed=>condition: Is attachment signed
FHIR Document
is_ok_sig=>condition: Is valid signature?

disc=>subroutine: Discovery of Patient FHIR_ID
create_task=>subroutine: Create Task resource to request Data
fetch_task=>subroutine: Get completed Task from 
FHIR Server using FHIR read
fetch_data=>subroutine: Get FHIR data referenced
in Task.output using FHIR read
search=>subroutine: Get Data referenced
in Task.output using FHIR search
validate_task1=>subroutine: Testscript: validation step(stub)
validate_task2=>subroutine: Testscript: validation step(stub)
validate_data=>subroutine: Testscript: validation step(stub)
validate_searchset=>subroutine: Testscript: validation step(stub)
validate_fhirdoc=>subroutine: Testscript: validation step(stub)
poll=>subroutine: Polls Task
subscribe=>subroutine: POST Subscription for Task Updates

st->disc->create_task->validate_task1->post->post_ok
post_ok(yes)->is_polling
post_ok(no)->bad_transaction
is_polling(yes)->poll->is_done
is_polling(no)->subscribe->is_notified(yes)->fetch_task
is_notified->fetch_task
is_done(yes)->fetch_task->fetch_task_ok
is_done(no)->poll
fetch_task_ok(yes)->validate_task2->is_contained  
fetch_task_ok(no)->bad_transaction
is_contained(yes)->need_sig
is_contained(no,bottom)->fetch_data->fetch_data_ok
fetch_data_ok(yes)->validate_data->need_sig
fetch_data_ok(no)->bad_transaction
need_sig(yes)->is_signed
need_sig(no,bottom)->e
is_signed(yes)->e
is_signed(no)->bad_sig
```
#### Create Task Resource

```flow
st=>start: Start
e=>end: End (Happy Path)
bad_transaction=>end: Transaction Error
bad_sig=>end: Signature invalid
in_data=>operation: Populate Task with Patient,date,owner,requester
in_text=>operation: Add text to Task.input
in_code=>operation: Add code to Task.input
in_search=>operation: Add search string to Task.input
in_sig=>operation: indicate signature required
in_pou=>operation: Add POU to Task.input
in_wq=>operation: Add Work Queue to Task.input
in_reason=>operation: Add reason code or reference to
Task.reasonCode/reasonReference
is_text=>condition: Is free text request?
is_code=>condition: Is coded request?
is_pou=>condition: Add Purpose of Use Code?
is_sig=>condition: Is Signature required?
is_wq=>condition: Add Work Queue Code?
is_formalauth=>condition: Is formal authorization
needed?
in_formalauth=>operation: Add reference to 
formal request resource (e.g.,CommunicationRequest
or ServiceRequest) to Task.basedOn
is_prov=>condition: Is Provenance needed?
in_prov=>operation: Add request for provenance
to request (as _include param
to search string or free text)

st->in_data->in_reason->is_text(yes)->in_text->is_sig
is_text(no)->is_code(yes)->in_code->is_sig
is_code(no)->in_search->is_sig
is_sig(yes)->in_sig->is_pou
is_sig(no,bottom)->is_pou
is_pou(yes)->in_pou->is_wq
is_pou(no,bottom)->is_wq
is_wq(yes)->in_wq->is_formalauth
is_wq(no,bottom)->is_formalauth
is_formalauth(yes)->in_formalauth->is_prov
is_formalauth(no,bottom)->is_prov
is_prov(yes)->in_prov->e
is_prov(no,bottom)->e
```

#### Subscription Flow

```flow
st=>start: Start
e=>end: End (Happy Path)
bad_transaction=>end: Transaction Error
bad_sig=>end: Signature invalid

create_subsc=>subroutine: Create Subscription resource
to notify When Task is
completed, failed, or rejected 
post=>subroutine: POST Subscription for Task Updates
oauth=>subroutine: Authentication and Authorization Workflow
post=>subroutine: POST Subscription to Server
post_ok=>condition: Is FHIR create
transaction successful?
get_notified=>inputoutput: Get notified Task status updated
cancel_subsc=>subroutine: DELETE Subscription for Task Updates
del_ok=>condition: Is FHIR delete
transaction successful?

st->create_subsc->oauth->post->post_ok

post_ok(yes)->get_notified->cancel_subsc->del_ok
post_ok(no)->bad_transaction

del_ok(yes)->e
del_ok(no)->bad_transaction
```

### Server
```flow
st=>start: Start
e=>end: End (Happy Path)
bad_transaction=>end: Transaction Error
bad_sig=>end: Signature invalid

request=>operation: Receive Task
http_200=>operation: Return http 200 Success
http_400=>operation: Return 400+ Error response +/- 
OperationOutcome
get_data=>subroutine: Get requested data
may require human intervention
validate=>subroutine: Testscript: validation step(stub)
update_taskout=>subroutine: update Task.out with 
external references to the data
update_taskout_contained=>subroutine: Populate Task.contained 
with the requested data
and reference it inTask.out
status_completed=>operation: Change Task.status to "completed"
status_failed=>operation: Change Task.status to "failed"
sign=>subroutine: Signature Needed:
Bundle into provider signed
Document Bundle

oauth_ok=>condition: Is client
authenticated?
req_ok=>condition: Is valid request?
payload_ok=>condition: Is payload valid
FHIR Object
pou_ok=>condition: Is POU(and reason)
appropriate use of data?
need_sig=>condition: Are signatures
required?
is_signed=>condition: Is attachment signed
FHIR Document
sig_ok=>condition: Is valid signature?
is_completed=>condition: Is successful in completing
the request (requested data
is available)
is_contained=>condition: Is output data 
contained in the Task?

st->request->oauth_ok

oauth_ok(yes)->req_ok
oauth_ok(no)->http_400->bad_transaction
req_ok(yes)->payload_ok
req_ok(no)->http_400->bad_transaction

payload_ok(yes)->pou_ok(yes)
payload_ok(no)->http_400->bad_transaction

pou_ok(yes)->get_data->is_completed
pou_ok(no)->http_400->bad_transaction

is_completed(yes)->is_contained
is_completed(no)->status_failed->status_failed->validate

is_contained(yes)->update_taskout_contained->status_completed->validate
is_contained(no)->update_taskout->status_completed->validate

validate->need_sig

need_sig(yes)->sign->http_200->e

need_sig(no,bottom)->http_200->e
```


## Signatures

### Creation 

```flow
st=>start: Start
e=>end: End (Happy Path)
get_cert=>subroutine: Obtain a digital certificate and keys from a third-party certificate authority (CA)
prep_base64_Der=>operation: Prepare base64 DER Certifcate - it is Cert PEM file wihout the footer and header and line returns
jws_header=>operation: Create JWS header to Attach to Bundle
header = {"alg": "RS256","kty": "RS", "x5c": [base64 DER]}
prep_bundle=>operation: Remove the id and meta element from Bundle to be signed
canon_bundle=>operation:  Canonicalize Bundle using IETF JSON Canonicalization Scheme (JCS) 
base64_url_bundle=>operation: base64_urlize the canonicalized bundle- this is the JWS payload.
creat_sig=>operation: Create Signature using private key
and RS256 algorithm to get the JWS compact serialization format
using the header and paylaod as inputs
detach=>operation: detached payload by removing the payload element
from the JWS compact serialization format
base64_jws=>operation: base64 the JWS (not base64_url!)
add_sig=>operation: Append FHIR Signature element to the Bundle be signed

st->get_cert->prep_base64_Der->jws_header->prep_bundle
prep_bundle->canon_bundle->base64_url_bundle->creat_sig->detach
detach->base64_jws->add_sig->e
```

### Validation

```flow
st=>start: Start
e=>end: End (Happy Path)
bad_sig=>end: Invalid Signature
get_cert=>subroutine: Obtain digital public key from
first certificate in JWS header "x5c" key
(or get from sender)
prep_bundle=>operation: Remove the id and meta element from Bundle to be signed
canon_bundle=>operation:  Canonicalize Bundle using IETF JSON Canonicalization Scheme (JCS). 
Signature using public key or Cert
and RS256 algorithm
reattach=>operation: Add payload to JWS compact serialization format
decode_jws=>operation: decode base64 JWS (not base64_url!)
rem_sig=>operation: Remove FHIR Signature element from the signed Bundle
base64_url_bundle=>operation: base64_urlize the canonicalized bundle- this is the JWS payload.
inspect_cert_info=>subroutine: Verify Issuer, Validity Dates, Subject, and KeyUsage of certificate
info_ok=>condition: Certificate information OK
(e.g., not expired)?
verify_sig=>operation: Verify JWS 
is_valid=>condition: Signature validates?

rem_sig->decode_jws->prep_bundle->canon_bundle
canon_bundle->base64_url_bundle->reattach->get_cert->inspect_cert_info
inspect_cert_info->info_ok(yes)->verify_sig->is_valid
inspect_cert_info->info_ok(no)->bad_sig
is_valid(yes)->e
is_valid(no)->bad_sig
```

## Testscripts

### Profile Validation

```flow
st=>start: Start
ts_o1=>subroutine: Testscript: validation step(stub)
ts_cond1=>condition: Is Payload Valid?
ts_e1=>end: Valid Payload
ts_e2=>end: Invalid Payload

st->ts_o1->ts_cond1
ts_cond1(yes)->ts_e1
ts_cond1(no)->ts_e2
```


---

// File: input/includes/advertise-topic.md


This example CapabilityStatement fragment shows a Data Source advertising the CDex Task Update Subscription Topic canonical URL with the CapabilityStatement SubscriptionTopic Canonical extension. It is used on the `CapabilityStatement.rest.resource` element for the Subscription type. (The complete example can be seen [here](CapabilityStatement-cdex-capabilitystatement-inline-example.html).)



~~~
{% include_relative includelines filename='CapabilityStatement-cdex-capabilitystatement-inline-example.json' start="0,36,135" count="2,21,2" linenumber=true rel=true %}
~~~

---

// File: input/includes/attachments_to_275.md

<!-- attachments_to_275.md
  *****************************************************************************************************
  *                                  WARNING: DO NOT EDIT THIS FILE                                   *
  *                                                                                                   *
  * This file is generated by csv_to_markdown_tabler.ipynb. Any edits you make to this file will be   *
  * overwritten                                                                                       *
  * To change the contents of this file, edit input/images/data-element-mapping.csv                     *
  *****************************************************************************************************
  -->

| Data Element | CDex $submit-attachment Parameter | X12n 275-v6020 | Submit Attachments Comments |
|-------|----|---------|--------------|
| Tracking ID | TrackingId | Loop: 2000A Segment: TRN02 | For *unsolicited* attachments, this is the provider-assigned tracking/control number. For *solicited* attachments, this is the payer-assigned tracking/control number. |
| Use | AttachTo | Claim | Choice of "claim" or "preauthorization" |
| Payer ID | PayerId | Loop: 1000A Segment: NM109 | Payer ID |
| Payer URL | (operation endpoint) | - | Payer endpoint where the attachments are submitted using the $submit-attachment operation |
| Organization ID | OrganizationId | Loop: 1000B Segment: NM109 Notes: NM108="46" | Organization of provider who submitted claim/prior authorization |
| Provider ID | ProviderId | Loop: 1000C Segment: NM109 Notes: NM108="XX" | Provider who submitted claim/prior authorization |
| Line Item(s) | Attachment.LineItem | Loop: 2000A Segment: STC10 Notes: Used to convey status of the entire claim or a specific service line | Claim/prior authorization line item numbers |
| Attachment Code<!-- new-content --> | Attachment.Code | Loop: 2000A Segment: STC01-01 | LOINC Attachment Code. For prior authorization, [X12] PWK01 Report Type Codes may also be used. |
| Date of Service | ServiceDate | Loop: 2100A Segment: DTP03 | Date of service for claim/prior authorization |
| Member ID | MemberId | Loop: 1000D Segment: NM109 Notes: NM108="MI" | Payer assigned patient identifier |
{:.grid}

The data element mapping table is available as a [CSV](data-element-mapping.csv) and [Excel](data-element-mapping.xlsx) file.

---

// File: input/includes/attachments_to_requests.md

<!-- attachments_to_requests.md
  *****************************************************************************************************
  *                                  WARNING: DO NOT EDIT THIS FILE                                   *
  *                                                                                                   *
  * This file is generated by csv_to_markdown_tabler.ipynb. Any edits you make to this file will be   *
  * overwritten                                                                                       *
  * To change the contents of this file, edit input/images/data-element-mapping.csv                     *
  *****************************************************************************************************
  -->

| Data Element | CDex $submit-attachment Parameter | CDex Request Attachment Task Profile Element |
|-------|----|---------|
| Tracking ID | TrackingId | Task.identifier |
| Use | AttachTo | Task.reasonCode |
| Payer ID | PayerId | Task.requester.identifier |
| Payer URL | (operation endpoint) | "PayerUrl" Task.input |
| Organization ID | OrganizationId | PractitionerRole.practitioner.identifier |
| Provider ID | ProviderId | PractitionerRole.organization.identifier |
| Line Item(s) | Attachment.LineItem | “AttachmentsNeeded” Task.input.extension |
| Attachment Code<!-- new-content --> | Attachment.Code | “AttachmentsNeeded” Task.input |
| Date of Service | ServiceDate | “service-date” Task.input |
| Member ID | MemberId | Patient.identifier |
{:.grid}

The data element mapping table is available as a [CSV](data-element-mapping.csv) and [Excel](data-element-mapping.xlsx) file.

---

// File: input/includes/data_elements_to_requests.md

| Data Element | CDex Request Attachment Task Profile Element |
|-----|-----|
| Tracking ID (Provider or Payer Assigned) | Task.identifier |
| Use | Task.reasonCode |
| Payer ID | Task.reasonReference.identifier |
| Payer URL | "payer-url" Task.input |
| Organization ID | - |
| Provider ID | Task.owner.identifier |
| Claim/PreAuth ID | Task.reasonReference.identifier |
| Line Item(s) | “code” Task.input.extension |
| LOINC Attachment code | “code” Task.input |
| Due Date | Task.restriction.period |
| Date of Service | “service-date” Task.input |
| Member ID | Patient.identifier |
| Patient Name | Patient.name |
| Patient Account No. | Patient.identifier |
| Date of Birth | Patient.birthDate |
{:.grid}

---

// File: input/includes/data_elements_to_submit.md

| Data Element | CDex #submit-attachment Parameter | Comments |
|-----|----|-------|
| Tracking ID (Provider or Payer Assigned) | TrackingId | Provider or Payer assigned tracking control number |
| Use | AttachTo | Choice of "claim" or "preauthorization" |
| Payer URL | (operation endpoint) | Payer endpoint where the attachments are submitted using the $submit-operation |
| Organization ID | OrganizationId | Organization of Provider who submitted claim/prior authorization |
| Provider ID | ProviderId | Provider who submitted claim/prior authorization |
| Line Item(s) | Attachment.LineItem | claim/prior authorization line item numbers |
| LOINC Attachment Code | Attachment.Code | LOINC attachment codes |
| Date of Service | ServiceDate | Date of Service for claim/prior authorization |
| Member ID | MemberId | Payer assigned patient identifier |
{:.grid}

---

// File: input/includes/data-source-sig-rules.md

- The Data Source follows the documentation on the [Signatures] page for producing signatures.
- When an electronic or digital signature is required, the Data Source returns either:
  2. document(s) that are already inherently signed
  3. FHIR resource(s) transformed into a *signed* FHIR Document.
  4. or for requests using Questionnaire, a *signed* FHIR QuestionnaireResponse. 
- if multiple documents need to be signed, systems should minimize the number of interactions required by the user
- As discussed in the [What is Signed] section, a signed FHIR document could have objects that are individually signed within it as well. Therefore, if the Consumer/Requester incorrectly assumed there would be a signature (wet, electronic, or digital) on an individual returned object (e.g., CCDA, PDF, Image, CDA on FHIR, QuestionnaireResponse ), they can *re-request* the data using a Task-based request and use the `Task.input` signature flag to indicate that the Data Source needs to sign it.

---

// File: input/includes/direct-query1-scenario.md


**Request**
~~~
GET [base]/Condition?patient=06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b&clinical-status=active,recurrance,remission
~~~

**Request Headers**

~~~
Accept: application/fhir+json
Content-Type: application/fhir+json
...(other headers)
~~~

**Response Headers**

~~~
HTTP/1.1 200 OK
Server: nginx/1.14.0 (Ubuntu)
Date: Fri, 23 Oct 2020 04:54:56 GMT
Content-Type: application/fhir+json;charset=utf-8
...(other headers)
~~~

**Response Body**

~~~
{% include_relative Bundle-cdex-searchbundle-scenario1-example.json %}
~~~


---

// File: input/includes/direct-query1p-scenario.md


**Request**
~~~
GET [base]/Condition?patient=06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b&clinical-status=active,recurrance,remission&_revinclude=Provenance:target
~~~

**Request Headers**

~~~
Accept: application/fhir+json
Content-Type: application/fhir+json
...(other headers)
~~~

**Response Headers**

~~~
HTTP/1.1 200 OK
Server: nginx/1.14.0 (Ubuntu)
Date: Fri, 23 Oct 2020 04:54:56 GMT
Content-Type: application/fhir+json;charset=utf-8
...(other headers)
~~~

**Response Body**

~~~
{% include_relative Bundle-cdex-searchbundle-provenance-example.json %}
~~~


---

// File: input/includes/direct-query1s-scenario.md


**Request**
~~~
GET [base]/Condition?patient=06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b&clinical-status=active,recurrance,remission
~~~

**Request Headers**

~~~
Accept: application/fhir+json
Content-Type: application/fhir+json
...(other headers)
~~~

**Response Headers**

~~~
HTTP/1.1 200 OK
Server: nginx/1.14.0 (Ubuntu)
Date: Fri, 23 Oct 2020 04:54:56 GMT
Content-Type: application/fhir+json;charset=utf-8
...(other headers)
~~~

**Response Body**

~~~
{% include_relative Bundle-cdex-searchbundle-digital-sig-example.json %}
~~~


---

// File: input/includes/direct-query2-scenario.md


**Request**
~~~
GET [base]/Observation?patient=06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b&code=4548-4&date=gt2020-01-01
~~~

**Request Headers**

~~~
Accept: application/fhir+json
Content-Type: application/fhir+json
...(other headers)
~~~

**Response Headers**

~~~
HTTP/1.1 200 OK
Server: nginx/1.14.0 (Ubuntu)
Date: Fri, 23 Oct 2020 18:22:45 GMT
Content-Type: application/fhir+json;charset=utf-8
...(other headers)
~~~

**Response Body**

~~~
{% include_relative Bundle-cdex-searchbundle-scenario2-example.json %}
~~~


---

// File: input/includes/direct-query3-scenario.md


**Step 1 - Search for DocumentReference**

**Request**
~~~
GET [base]/DocumentReference?patient=06e1f0dd-5fbe-4480-9bb4-6b54ec02d31b&type=34117-2&_sort=-period&_count=1`
~~~

**Request Headers**

~~~
Accept: application/fhir+json
Content-Type: application/fhir+json
...(other headers)
~~~

**Response Headers**

~~~
HTTP/1.1 200 OK
Server: nginx/1.14.0 (Ubuntu)
Date: Fri, 23 Oct 2020 18:22:45 GMT
Content-Type: application/fhir+json;charset=utf-8
...(other headers)
~~~

**Response Body**

~~~
{% include_relative Bundle-cdex-searchbundle-scenario3-example.json %}
~~~

**Step 2 - Fetch Document**

**Request**
~~~
GET [base]/Binary/cdex-example-hpnote`
~~~

**Request Headers**

~~~
...(other headers)
~~~

**Response Headers**

~~~
HTTP/1.1 200 OK
Server: nginx/1.14.0 (Ubuntu)
Date: Fri, 23 Oct 2020 22:02:15 GMT
Content-Type: application/pdf
...(other headers)
~~~

**Response Body = PDF**

<!--
<embed src="cdex-example-hpnote.pdf" type="application/pdf" frameborder = "1"/>
-->

<embed  type="application/pdf" frameborder="1" width="640" height="480" src="data:application/pdf;base64,{{site.data.cdex-task-example7.contained[0].entry[0].resource.content[0].attachment.data}}"/>


---

// File: input/includes/electronic-sig-example.md


<!-- input/includes/electronic-sig-example.md -->

~~~
{% include_relative includelines filename='Bundle-cdex-electronic-sig-example.json' linenumber=true rel=true %}
~~~

---

// File: input/includes/human-signature.md

- The signature represents a provider signature attesting that the information is true and accurate to the best of their knowledge.*

---

// File: input/includes/inherently-signed.md

- The returned information is either:
   -  inherently signed (for example, a wet signature on a PDF or a digitally signed CCDA)
   -  or Transformed into a signed [FHIR Document] with the signature in the `Bundle.signature`
  -  or a signed [QuestionnaireResponse] with the signature in the  [Signature Extension].  

---

