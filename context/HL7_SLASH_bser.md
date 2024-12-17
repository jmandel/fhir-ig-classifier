File: repos/HL7_SLASH_bser/sushi-config.yaml

canonical: http://hl7.org/fhir/us/bser
title: "Bidirectional Services eReferral (BSeR)"
releaseLabel: STU2
fhirVersion: 4.0.1
FSHOnly: false
applyExtensionMetadataToRoot: false
id: hl7.fhir.us.bser
name: BSeRBidirectionalServicesEReferral
status: active
version: 2.0.0-ballot

dependencies:
  us.cdc.phinvads:
    version: 0.12.0
    uri: http://fhir.org/packages/us.cdc.phinvads/ImplementationGuide/us.cdc.phinvads
    id: uscdcphinvads
  us.nlm.vsac:
    version: 0.11.0
    uri: http://fhir.org/packages/us.nlm.vsac/ImplementationGuide/us.nlm.vsac
    id: usnlmvsac
  hl7.fhir.us.core:
    version: 5.0.1
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: hl7fhiruscore
  hl7.fhir.us.odh:
    version: 1.3.0
    uri: http://hl7.org/fhir/us/odh/ImplementationGuide/hl7.fhir.us.odh
    id: hl7fhirusodh

pages:
  index.md:
    title: Home Page
  Introduction.md:
    title: Introduction
  bser_project_team.md:
    title: BSeR Project Team
  Acknowledgements.md:
    title: Acknowledgements
  scope_and_context.md:
    title: Scope and Context
  resource_profiles.md:
    title: Resource Profiles
  referral_participant_resources.md:
    title: Referral Participant Resources
  workflow_management_resources.md:
    title: Workflow Management Resources
  referral_service_request_resources.md:
    title: Referral Service Request Resources
  referral_service_request_feedback_resources.md:
    title: Referral Service Request Feedback Resources
  service_request_and_referral_feedback_supporting_information.md:
    title: Service Request and Referral Feedback Supporting Information
  bi-directional_service_ereferral_transactions.md:
    title: Bi-directional Service eReferral Transactions
  transport_options.md:
    title: Transport Options
  adaptation_for_additional_referral_use_cases.md:
    title: Adaptation for Additional Referral Use Cases
  Downloads.md:
    title: Downloads
  change_log.md:
    title: Change Log

menu:
  Home: index.html
  Table of Contents: toc.html
  Background:
    Introduction: Introduction.html
    BSeR Project Team: bser_project_team.html
    Acknowledgements: Acknowledgements.html
    Scope and Context: scope_and_context.html
    Change Log: change_log.html
  Resource Profile Information:
    Resource Profiles: resource_profiles.html
    Referral Participant Resources: referral_participant_resources.html
    Workflow Management Resources: workflow_management_resources.html
    Referral Service Request Resources: referral_service_request_resources.html
    Referral Service Request Feedback Resources: referral_service_request_feedback_resources.html
    Service Request and Referral Feedback Supporting Information: service_request_and_referral_feedback_supporting_information.html
    Bi-directional Service e-Referral Transactions: bi-directional_service_ereferral_transactions.html
    Transport Options: transport_options.html
    Adaptation for Additional Referral Use Cases: adaptation_for_additional_referral_use_cases.html
  Downloads: Downloads.html
  Artifact Index: artifacts.html

groups:
  core-referral-architecture-profiles:
    name: Core Referral Architecture Profiles
    # description: Core Referral Architecture Profiles
    resources:
    - StructureDefinition/referral-task
    - StructureDefinition/referral-servicerequest
  workflow-management-profiles:
    name: Workflow Management Profiles
    # description: Workflow Management Profiles
    resources:
    - StructureDefinition/BSeR-ReferralMessageHeader
    - StructureDefinition/BSeR-ReferralTask
  referral-service-request-profiles:
    name: Referral Service Request Profiles
    # description: Referral Service Request Profiles
    resources:
    - StructureDefinition/BSeR-ReferralServiceRequest
    - StructureDefinition/BSeR-ReferralRequestComposition
    - StructureDefinition/BSeR-ReferralRequestDocumentBundle
    - StructureDefinition/BSeR-ReferralMessageBundle
  referral-service-request-feedback-profiles:
    name: Referral Service Request Feedback Profiles
    # description: Referral Service Request Feedback Profiles
    resources:
    - StructureDefinition/BSeR-ReferralFeedbackComposition
    - StructureDefinition/BSeR-ReferralFeedbackDocumentBundle
  supporting-information-profiles:
    name: Supporting Information Profiles (Request and Feedback)
    # description: Supporting Information Profiles (Request and Feedback)
    resources:
    - StructureDefinition/bser-bundle-batch-query-referral-supporting-info
    - StructureDefinition/bser-referral-observation
    - StructureDefinition/BSeR-TelcomCommunicationPreferences
    - StructureDefinition/BSeR-TobaccoUseCessationFeedbackMedication
  other-profiles:
    name: Other Profiles
    # description: Other Profiles
    resources:
    - StructureDefinition/BSeR-Coverage
    - StructureDefinition/BSeR-PatientConsent
  batch-query-bundle-referral-request-examples:
    name: Batch Query Bundle Referral Request Examples
    description: Examples of referral request batch query Bundles for each use case described in the BSeR IG. Each Bundle is a batch of queries for definition and/or retrieval of supporting information for a use case specific referral request.
    resources:
    - Bundle/bundle-batch-query-arthritis-request
    - Bundle/bundle-batch-query-diabetes-prevention-request
    - Bundle/bundle-batch-query-early-childhood-nutrition-request
    - Bundle/bundle-batch-query-hypertension-request
    - Bundle/bundle-batch-query-obesity-request
    - Bundle/bundle-batch-query-tobacco-use-cessation-request
  batch-query-bundle-referral-feedback-examples:
    name: Batch Query Bundle Referral Feedback Examples
    description: Examples of referral feedback batch query Bundles for each use case described in the BSeR IG. Each Bundle is a batch of queries for definition and/or retrieval of supporting information for use case specific referral feedback.
    resources:
    - Bundle/bundle-batch-query-arthritis-feedback
    - Bundle/bundle-batch-query-diabetes-prevention-feedback
    - Bundle/bundle-batch-query-early-childhood-nutrition-feedback
    - Bundle/bundle-batch-query-hypertension-feedback
    - Bundle/bundle-batch-query-obesity-feedback
    - Bundle/bundle-batch-query-tobacco-use-cessation-feedback
  # batch-response-bundle-examples:
  #   name: Batch Response Supporting Information Bundle Examples for Referral Requests
  #   description: Examples of batch query Bundles for each use case. Each Bundle is a batch of queries for definition and/or retrieval of supporting information for a use case specific referral request or referral feedback.
  #   resources:
  #   - Bundle/bundle-batch-response-arthritis-request-supp-info
  #   - Bundle/bundle-batch-response-diabetes-prevention-request-supp-info
  #   - Bundle/bundle-batch-response-early-childhood-request-supp-info
  #   - Bundle/bundle-batch-response-hypertension-request-supp-info
  #   - Bundle/bundle-batch-response-obesity-request-supp-info
  #   - Bundle/bundle-batch-response-tobacco-use-request-supp-info
  # name: Batch Response Supporting Information Bundle Examples for Referral Feedback
  #   description: Examples of batch query Bundles for each use case. Each Bundle is a batch of queries for definition and/or retrieval of supporting information for a use case specific referral request or referral feedback.
  #   resources:
  #   - Bundle/bundle-batch-query-arthritis-feedback
  #   - Bundle/bundle-batch-query-diabetes-prevention-feedback
  #   - Bundle/bundle-batch-query-early-childhood-nutrition-feedback
  #   - Bundle/bundle-batch-query-hypertension-feedback
  #   - Bundle/bundle-batch-query-obesity-feedback
  #   - Bundle/bundle-batch-query-tobacco-use-cessation-feedback
  core-referral-architecture-examples:
    name: Core Referral Architecture Examples
    # description: Core Referral Architecture Examples
    resources:
    - ServiceRequest/servicerequest-referral-servicerequest
    - Task/task-referral-task
  workflow-management-examples:
    name: Workflow Management Examples
    # description: Workflow Management Examples
    resources:
    - MessageHeader/messageheader-bser-referral-messageheader
    - Task/task-bser-referral-task
  referral-service-request-examples:
    name: Referral Service Request Examples
    # description: Referral Service Request Examples
    resources:
    - Bundle/bundle-bser-referral-message-bundle-eve-everywoman
    - Bundle/bundle-bser-referral-request-document-bundle-eve-everywoman
    - Bundle/bundle-bser-referral-request-document-bundle-baby-everybaby
    - ServiceRequest/servicerequest-bser-referral-servicerequest-arthritis
    - ServiceRequest/servicerequest-bser-referral-servicerequest-early-childhood
  referral-serivce-request-examples-composition:
    name: "Referral Service Request Examples: Composition"
    # description: "Referral Service Request Examples: Composition"
    resources:
    - Composition/composition-bser-referral-request-arthritis-everywoman
    - Composition/composition-bser-referral-request-diabetes-everywoman
    - Composition/composition-bser-referral-request-hypertension-everywoman
    - Composition/composition-bser-referral-request-obesity-everywoman
    - Composition/composition-bser-referral-request-tobacco-everywoman
    - Composition/composition-bser-referral-request-nutrition-everybaby
  referral-service-request-feedback-examples:
    name: Referral Service Request Feedback Examples
    # description: Referral Service Request Feedback Examples
    resources:
    - Bundle/bundle-bser-referral-feedback-document-bundle-eve-everywoman
  referral-service-request-feedback-examples-composition:
    name: "Referral Service Request Feedback Examples: Composition"
    # description: "Referral Service Request Feedback Examples: Composition"
    resources:
    - Composition/composition-bser-referral-feedback-arthritis-everywoman
    - Composition/composition-bser-referral-feedback-nutrition-everybaby
    # - Composition/composition-bser-referral-feedback-diabetes-everywoman
    # - Composition/composition-bser-referral-feedback-hypertension-everywoman
    # - Composition/composition-bser-referral-feedback-obesity-everywoman
    # - Composition/composition-bser-referral-feedback-tobacco-everywoman
  supporting-information-examples:
    name: Supporting Information Examples
    # description: Supporting Information Examples
    resources:
    - AllergyIntolerance/allergyintolerance-us-core-allergyint-eve-everywoman
    - Condition/condition-us-core-cphc-eve-everywoman-hypertension
    - Observation/observation-us-core-observation-lab-ha1c-eve-everywoman
    - Procedure/procedure-us-core-procedure-nicotine-replacement-eve-everywoman
    - Observation/observation-bser-referral-observation-lactation-baby-everybaby
    - Observation/observation-bser-nutritionfeedbackobs-2-baby-everybaby
    - Observation/observation-bser-nutritionobs-baby-everybaby
    - Observation/observation-bser-telcomcomm-eve-everywoman
    - Observation/observation-us-core-blood-pressure-eve-everywoman
    - Observation/observation-us-core-blood-pressure-baby-everybaby
    - Observation/observation-us-core-blood-pressure-mom-everymom
    - Observation/observation-us-core-bmi-eve-everywoman
    - Observation/observation-us-core-bmi-mom-everymom
    - Observation/observation-us-core-body-height-baby-everybaby
    - Observation/observation-us-core-body-height-eve-everywoman
    - Observation/observation-us-core-body-height-mom-everymom
    - Observation/observation-us-core-body-weight-eve-everywoman
    - Observation/observation-us-core-body-weight-baby-everybaby
    - Observation/observation-us-core-body-weight-mom-everymom
    - Observation/observation-odh-employment-status-eve-everywoman
    - Observation/observation-odh-employment-status-mom-everymom
    - Observation/observation-us-core-smokingstatus-eve-everywoman
  supporting-information-feedback-examples:
    name: Supporting Information Feedback Examples
    # description: Supporting Information Feedback Examples
    resources:
    - Medication/medication-bser-tobacco-use-cessation-feedback-eve-everywoman
    - MedicationRequest/medicationrequest-us-core-medicationrequest-eve-everywoman
    - Observation/observation-bser-tobaccousecessationfeedbackobs-1-eve-everywoman
    - Observation/observation-bser-tobaccousecessationfeedbackobs-2-eve-everywoman
    - Observation/observation-participationfeedbackobservation-1-eve-everywoman
    - Observation/observation-participationfeedbackobservation-2-eve-everywoman
    - Observation/observation-bser-referral-observation-pain-mgmt-eve-everywoman
    - Observation/observation-bser-referral-observation-endurance-eve-everywoman
  referral-participant-examples:
    name: Referral Participant Examples
    # description: Referral Participant Examples
    resources:
    - Location/location-us-core-location-st-luke
    - Organization/organization-us-core-organization-acme-lab
    - Organization/organization-us-core-organization-saint-luke
    - Patient/patient-us-core-patient-baby-everybaby
    - Patient/patient-us-core-patient-eve-everywoman
    - Patient/patient-us-core-patient-mom-everymom
    - Practitioner/practitioner-us-core-practitioner-hailey-eight
    - Practitioner/practitioner-us-core-practitioner-henry-seven
    - PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator
    - PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient
    - RelatedPerson/relatedperson-us-core-relatedperson-mom-everymom
    # - RelatedPerson/relatedperson-us-core-relatedperson-self-eve-everywoman
    - RelatedPerson/relatedperson-us-core-relatedperson-mother-eve-everywoman
  other-examples:
    name: Other Examples
    resources:
    - Consent/consent-bser-patientconsent-eve-everywoman
    - Consent/consent-bser-patientconsent-baby-everybaby
    - Coverage/coverage-bser-coverage-eve-everywoman
    - Coverage/coverage-bser-coverage-baby-everybaby
    - Observation/observation-us-core-social-history-education-eve-everywoman
    - Observation/observation-us-core-social-history-education-mom-everymom
  code-systems:
    name: Code Systems
    resources:
    - CodeSystem/TaskBusinessStatusCS
    - CodeSystem/bser
  value-sets:
    name: Value Sets
    resources:
    - ValueSet/BSeR-TelcomCommunicationPreferencesVS
    - ValueSet/TaskBusinessStatusVS
  capability-statement:
    name: Capability Statement
    resources:
    - CapabilityStatement/capabilitystatement-bser
  other:
    name: Other
    resources:
    - parameters-snomed-us

copyrightYear: 2022+
publisher:
  name: HL7 Public Health Working Group
  url: http://www.hl7.org/Special/committees/pher
  email: pher@lists.HL7.org
parameters:
  show-inherited-invariants: false
  path-expansion-params: 'Parameters-parameters-snomed-us.json'  #path is relative to [base]/fsh-generated/resources
  auto-oid-root: 2.16.840.1.113883.4.642.40.33

jurisdiction: urn:iso:std:iso:3166#US
license: CC0-1.0

---

// File: input/pagecontent/adaptation_for_additional_referral_use_cases.md

### Additional Referral Use Cases

The BSeR Implementation Guide (IG) outlines the information requirements for six specific bi-directional referral use cases. Nevertheless, the guide can be readily adapted to accommodate additional referral use cases in the future or updates to the existing ones. Each referral use case consists of two sets of resources: one for the referral request, containing information needed for the referral recipient, and the other for the referral feedback, allowing the referral initiator to receive updates on the patient's status and outcomes after the referral is completed. These resources encompass various data elements, including patient and provider demographics, patient consent, insurance coverage, and pertinent clinical information.

While certain data elements, such as patient and provider demographics, are common to all scenarios, other requirements vary between different use cases. To avoid limiting the guide to a specific set of use cases, it has been designed with extensibility in mind. This approach ensures that the IG remains flexible and adaptable to accommodate diverse referral scenarios.

[Batch query Bundles]({{site.data.fhir.path}}bundle.html#transaction) are used to store queries to both define, and, if a query paradigm is being followed, pull, use case specific data for subsequent organization into the specified resources for transmission. This [Use Case Profiles table](service_request_and_referral_feedback_supporting_information.html#use-case-profiles) shows how each BSeR use case utilizes different sets of profiles for its referral request and referral feedback needs.

The batch query Bundles are stored outside of this guide and new use cases can be added, and existing use cases updated, at any time.

The BSeR use case data needs are detailed in [examples of BSeR batch query Bundles for referral request supporting information](artifacts.html#batch-query-bundle-referral-request-examples) and [examples of BSeR batch query Bundles for referral feedback supporing information](artifacts.html#batch-query-bundle-referral-feedback-examples).

The BSeR arthritis batch query Bundle example is as follows:

<center><table><tr><td><img src="batch-query-example.png" style="width:100%;"/></td></tr></table></center>


### Additional Referral Use Case Adaptation Touchpoints

The following is a list of touchpoints within the BSeR specification where adaptation may be necessary to support additional referral use cases.

* **[BSeRReferralTask.businessStatus](StructureDefinition-BSeR-ReferralTask-definitions.html#Task.businessStatus)** If the workflow state machine associated with the referral exchange use case differs from the BSeR state machine, then it is necessary to extend the value set bound to the business status element of the referral Task to include additional states.

* **[BSeRReferralServiceRequest.reasonCode](StructureDefinition-BSeR-ReferralServiceRequest-definitions.html#diff_ServiceRequest.reasonCode)** The value set bound to the reasonCode element of the referral ServiceRequest may need to be expanded to include referral reasons for the new referral use case. Note reasonCode is optional and need only be used when the value used in ServiceRequest code is not pre-coordinated with ServiceRequest reason.

---

// File: input/pagecontent/bi-directional_service_ereferral_transactions.md

### Transaction Types

This specification defines two primary transaction types, the “Referral Request” and the “Referral Feedback”. For each "Referral Request" there may be multiple “Feedback” transactions which can be either technical or programmatic. Additionally, depending on the transaction paradigm, such as "Referral – Push" or "Referral – Notify and Pull," there may be a need for subcomponent transactions.

A referral request flows from a referral initiator to a referral recipient. The referral request transaction is comprised of the referral service request and its supporting information bundles and clinical statements. At times there may be an intermediary, such as a Community Based Organization (CBO) hub or a Health Information Exchange (HIE), between the referral initiator and the referral recipient.

A service request feedback transaction flows from the referral recipient to the referral initiator. The service request feedback transaction is comprised of the referral feedback document containing the referral activity status, supporting information bundles and clinical statements. At times there may be an intermediary between the referral recipient and the referral initiator.

### Information Exchange

The exchange of information between a referral service request initiator and a referral service request recipient is bi-directional.

### High-Level Referral Use Cases
This guide describes two high-level use cases which provide a general overview of the interactions and main actors involved, along with the major actions that occur within the context of the use case. These use cases do not delve into specific details or technical intricacies; instead, they serve as a conceptual representation of purpose and functionality.

##### Actors
 * **Patient**
 * **Referral Initiator**: Healthcare Provider
 * **Referral Recipient**: Community Based Organization (CBO), Healthcare Organization (HCO), Healthcare Provider
 * **Intermediary**: CBO Hub, Healthcare Information Exchange (HIE)
 * **Requirements Repository**: Repository containing payload data element requirements (batch queries)

#### Referral Interaction Diagrams

##### Referral - Push

<center><table><tr><td><img src="referral-push.png" style="width:100%;"/></td></tr></table></center>

#### Referral Interaction Diagram Steps

##### [Referral - Push Diagram](#referral---push) Steps

| **Category** | **Step** | **Actor(s)** | **Description** | **Resources (where applicable)** |
|--------------|----------|--------------|-----------------|----------------------------------|
| **Setup Coordination** | Policy Agreements | Referral Initiator, Referral Recipient | The Referral Initiator and Referral Recipient negotiate required policy agreements | |
| **Setup Coordination** | Addressing or Subscription Setup | Referral Initiator, Referral Recipient | The Referral Initiator and the Referral Recipient setup addressing and/or subscription requirements | |
| **Referral** | Retrieve Clinical Payload Data Requirements | Referral Initiator | Referral Initiator queries the Requirements Repository for the referral request payload data requirements specific to the use case | [BSeR Bundle Batch Query Referral Supporting Information](StructureDefinition-bser-bundle-batch-query-referral-supporting-info.html) |
| **Referral** | Query for Clinical Data Payload | Referral Initiator | Referral Initiator queries for the referral request resources specified in the payload data element requirements | Various use case specific clinical resources |
| **Referral** | Referral - Submit (Option A) | Referral Initiator | Referral Initiator submits the Message Bundle containing all the resources needed for the referral (MessageHeader, Task, ServiceRequest, all use case specific clinical resources) to the Referral Recipient | [BSeR Referral Message Bundle](StructureDefinition-BSeR-ReferralMessageBundle.html), [BSeR Referral messageHeader](StructureDefinition-BSeR-ReferralMessageHeader.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html), [BSeR ServiceRequest](StructureDefinition-BSeR-ReferralServiceRequest.html),[BSeR Coverage](StructureDefinition-BSeR-Coverage.html),[BSeR Patient Consent](StructureDefinition-BSeR-PatientConsent.html), [BSeR Referral Request Document Bundle](StructureDefinition-BSeR-ReferralRequestDocumentBundle.html), [BSeR Referral Request Composition](StructureDefinition-BSeR-ReferralRequestComposition.html) including various use case specific clinical resources |
| **Referral** | Referral - Subscription (Option B) | Referral Initiator | Referral Initiator (FHIR Server) automatically sends Subscription Notification to Referral Recipient | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Evaluation | Referral Recipient | Referral Recipient evaluates whether or not to accept the referral | |
| **Referral** | Retrieve Response Payload Data Requirements | Referral Recipient | Referral Recipient queries the Requirements Repository for the referral feedback payload data requirements specific to the use case | [BSeR Bundle Batch Query Referral Supporting Information](StructureDefinition-bser-bundle-batch-query-referral-supporting-info.html) |
| **Referral** | Referral Response(s) - Submit (Option A) | Referral Recipient | Once the requested service(s) have been performed the Referral Recipient submits the updated Task containing a Document Bundle with the use case specific referral feedback resources specified in the payload data element requirements | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html), [BSeR Referral Feedback Document Bundle](StructureDefinition-BSeR-ReferralFeedbackDocumentBundle.html) |
| **Referral** | Referral Response(s) - Subscription (Option B) | Referral Recipient | Once the requested service(s) have been performed the Referral Recipient (FHIR Server) automatically sends Subscription Notification (including Task) to Referral Initiator | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
{: .grid }

##### Referral - Notify and Pull

<center><table><tr><td><img src="referral-notify-and-pull.png" style="width:100%;"/></td></tr></table></center>

##### [Referral - Notify and Pull Diagram](#referral---notify-and-pull) Steps

| **Category** | **Step** | **Actor(s)** | **Description** | **Resources (where applicable)** |
|--------------|----------|--------------|-----------------|----------------------------------|
| **Setup Coordination** | Policy Agreements | Referral Initiator, Referral Recipient | The Referral Initiator and Referral Recipient negotiate required policy agreements | |
| **Setup Coordination** | Addressing or Subscription Setup | Referral Initiator, Referral Recipient | The Referral Initiator and the Referral Recipient setup addressing and/or subscription requirements | |
| **Referral** | Notify of Referral - Submit (Option A) | Referral Initiator | Referral Initiator submits the notification (Task) of the Referral to the Referral Recipient | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Notify of Referral - Subscription (Option B) | Referral Initiator | Referral Initiator (FHIR Server) automatically sends Subscription Notification (including Task) to Referral Recipient | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Evaluation | Referral Recipient | Referral Recipient evaluates whether or not to accept the referral | |
| **Referral** | Referral Response(s) - Submit (Option A) | Referral Recipient | Referral Recipient submits the updated Task with an accept/decline/etc. | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Referral Response(s) - Subscription (Option B) | Referral Recipient | Referral Recipient (FHIR Server) automatically sends Subscription Notification (including updated Task with an accept/decline/etc.) to Referral Initiator | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Retrieve Clinical Payload Data Requirements | Referral Recipient | Referral Recipient queries the Requirements Repository for the payload data requirements specific to the referral use case | [BSeR Bundle Batch Query Referral Supporting Information](StructureDefinition-bser-bundle-batch-query-referral-supporting-info.html) |
| **Referral** | Retrieve Service Request and Clinical Payload Data | Referral Recipient | Referral Recipient queries the Referral Initiator and receives the ServiceRequest and referenced resources, and the referral request resources specified in the payload data element requirements | [BSeR ServiceRequest](StructureDefinition-BSeR-ReferralServiceRequest.html),[BSeR Coverage](StructureDefinition-BSeR-Coverage.html),[BSeR Patient Consent](StructureDefinition-BSeR-PatientConsent.html), various use case specific clinical resources |
| **Referral** | Referral Response(s) - Submit (Option A) | Referral Recipient | Once the requested service(s) have been performed the Referral Recipient submits the updated Task containing a Document Bundle with the use case specific referral feedback resources specified in the payload data element requirements | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html), [BSeR Referral Feedback Document Bundle](StructureDefinition-BSeR-ReferralFeedbackDocumentBundle.html) |
| **Referral** | Referral Response(s) - Subscription (Option B) | Referral Recipient | Once the requested service(s) have been performed the Referral Recipient (FHIR Server) automatically sends Subscription Notification (including Task) to Referral Initiator | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
{: .grid }

##### Referral - Push (with intermediary)

<center><table><tr><td><img src="referral-push-intermediary.png" style="width:100%;"/></td></tr></table></center>

##### [Referral - Push (with intermediary) Diagram](#referral---push-with-intermediary) Steps

| **Category** | **Step** | **Actor(s)** | **Description** | **Resources (where applicable)** |
|--------------|----------|--------------|-----------------|----------------------------------|
| **Setup Coordination** | Policy Agreements | Referral Initiator, Referral Recipient | The Referral Initiator and Referral Recipient negotiate all required policy agreements | |
| **Setup Coordination** | Addressing or Subscription Setup | Referral Initiator, Referral Recipient | The Referral Initiator and the Referral Recipient setup all addressing and/or subscription requirements | |
| **Setup Coordination** | Policy Agreements | Intermediary, Referral Recipient | The Intermediary and Referral Recipient negotiate required policy agreements | |
| **Setup Coordination** | Addressing or Subscription Setup | Intermediary, Referral Recipient | The Referral Initiator and the Intermediary setup addressing and/or subscription requirements | |
| **Referral** | Retrieve Clinical Payload Data Requirements | Referral Initiator | Referral Initiator queries the Requirements Repository for the referral request payload data requirements specific to the use case | [BSeR Bundle Batch Query Referral Supporting Information](StructureDefinition-bser-bundle-batch-query-referral-supporting-info.html) |
| **Referral** | Query for Clinical Data Payload | Referral Initiator | Referral Initiator queries for the referral request resources specified in the payload data element requirements | Various use case specific clinical resources |
| **Referral** | Referral - Submit (Option A) | Referral Initiator | Referral Initiator submits the Message Bundle containing all the resources needed for the referral (MessageHeader, Task, ServiceRequest, all use case specific clinical resources) to the Intermediary | [BSeR Referral Message Bundle](StructureDefinition-BSeR-ReferralMessageBundle.html), [BSeR Referral messageHeader](StructureDefinition-BSeR-ReferralMessageHeader.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html), [BSeR ServiceRequest](StructureDefinition-BSeR-ReferralServiceRequest.html),[BSeR Coverage](StructureDefinition-BSeR-Coverage.html),[BSeR Patient Consent](StructureDefinition-BSeR-PatientConsent.html), [BSeR Referral Request Document Bundle](StructureDefinition-BSeR-ReferralRequestDocumentBundle.html), [BSeR Referral Request Composition](StructureDefinition-BSeR-ReferralRequestComposition.html) including various use case specific clinical resources |
| **Referral** | Referral - Subscription (Option B) | Referral Initiator | Referral Initiator (FHIR Server) automatically sends Subscription Notification to Intermediary | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Evaluation | Intermediary | Intermediary evaluates whether or not to accept the referral | |
| **Referral** | Referral - Submit (Option A) | Intermediary | Intermediary submits the Message Bundle containing all the resources needed for the referral (MessageHeader, Task, ServiceRequest, all use case specific clinical resources) to the Referral Recipient | [BSeR Referral Message Bundle](StructureDefinition-BSeR-ReferralMessageBundle.html), [BSeR Referral messageHeader](StructureDefinition-BSeR-ReferralMessageHeader.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html), [BSeR ServiceRequest](StructureDefinition-BSeR-ReferralServiceRequest.html),[BSeR Coverage](StructureDefinition-BSeR-Coverage.html),[BSeR Patient Consent](StructureDefinition-BSeR-PatientConsent.html), [BSeR Referral Request Document Bundle](StructureDefinition-BSeR-ReferralRequestDocumentBundle.html), [BSeR Referral Request Composition](StructureDefinition-BSeR-ReferralRequestComposition.html) including various use case specific clinical resources |
| **Referral** | Referral - Subscription (Option B) | Intermediary | Intermediary (FHIR Server) automatically sends Subscription Notification to Referral Recipient | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Evaluation | Referral Recipient | Referral Recipient evaluates whether or not to accept the referral | |
| **Referral** | Retrieve Response Payload Data Requirements | Referral Recipient | Referral Recipient queries the Requirements Repository for the referral feedback payload data requirements specific to the use case | [BSeR Bundle Batch Query Referral Supporting Information](StructureDefinition-bser-bundle-batch-query-referral-supporting-info.html) |
| **Referral** | Referral Response(s) - Submit (Option A) | Referral Recipient | Once the requested service(s) have been performed the Referral Recipient submits the updated Task containing a Document Bundle with the use case specific referral feedback resources specified in the payload data element requirements to the Intermediary | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html), [BSeR Referral Feedback Document Bundle](StructureDefinition-BSeR-ReferralFeedbackDocumentBundle.html) |
| **Referral** | Referral Response(s) - Subscription (Option B) | Referral Recipient | Once the requested service(s) have been performed the Referral Recipient (FHIR Server) automatically sends Subscription Notification (including Task) to the Intermediary | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Referral Response(s) - Submit (Option A) | Intermediary | On receipt of submit from the Referral Recipient the Intermediary submits the updated Task containing a Document Bundle with the use case specific referral feedback resources specified in the payload data element requirements to the Referral Initiator | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html), [BSeR Referral Feedback Document Bundle](StructureDefinition-BSeR-ReferralFeedbackDocumentBundle.html) |
| **Referral** | Referral Response(s) - Subscription (Option B) | Intermediary | On Subscription Notification from the Referral Recipient the Intermediary (FHIR Server) automatically sends Subscription Notification (including Task) to Referral Initiator | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
{: .grid }

##### Referral - Notify and Pull (with intermediary)

<center><table><tr><td><img src="referral-notify-and-pull-intermediary.png" style="width:100%;"/></td></tr></table></center>


##### [Referral - Notify and Pull (with intermediary) Diagram](#referral---notify-and-pull-with-intermediary) Steps

| **Category** | **Step** | **Actor(s)** | **Description** | **Resources (where applicable)** |
|--------------|----------|--------------|-----------------|----------------------------------|
| **Setup Coordination** | Policy Agreements | Referral Initiator, Intermediary | The Referral Initiator and Intermediary negotiate required policy agreements | |
| **Setup Coordination** | Addressing or Subscription Setup | Referral Initiator, Intermediary | The Referral Initiator and the Intermediary setup addressing and/or subscription requirements | |
| **Setup Coordination** | Policy Agreements | Intermediary, Referral Recipient | The Intermediary and Referral Recipient negotiate required policy agreements | |
| **Setup Coordination** | Addressing or Subscription Setup | Intermediary, Referral Recipient | The Referral Initiator and the Intermediary setup addressing and/or subscription requirements | |
| **Referral** | Notify of Referral - Submit (Option A) | Referral Initiator | Referral Initiator submits the notification (Task) of the Referral to the Intermediary | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Notify of Referral - Subscription (Option B) | Referral Initiator | Referral Initiator (FHIR Server) automatically sends Subscription Notification (including Task) to Intermediary | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Evaluation | Intermediary | Intermediary evaluates whether or not to accept the referral | |
| **Referral** | Notify of Referral - Submit (Option A) | Intermediary | Intermediary submits the notification (Task) of the Referral to the Referral Recipient | |
| **Referral** | Notify of Referral - Subscription (Option B) | Intermediary | Intermediary (FHIR Server) automatically sends Subscription Notification (including Task) to Referral Recipient | |
| **Referral** | Evaluation | Referral Recipient | Referral Recipient evaluates whether or not to accept the referral | |
| **Referral** | Referral Response(s) - Submit (Option A) | Referral Recipient | Referral Recipient submits the updated Task with an accept/decline/etc. | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Referral Response(s) - Subscription (Option B) | Referral Recipient | Referral Recipient (FHIR Server) automatically sends Subscription Notification (including updated Task with an accept/decline/etc.) to Initiator | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Referral Response(s) - Submit (Option A) | Intermediary | Intermediary submits the updated Task with an accept/decline/etc. | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Referral Response(s) - Subscription (Option B) | Intermediary | Intermediary (FHIR Server) automatically sends Subscription Notification (including updated Task with an accept/decline/etc.) to Referral Initiator | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Retrieve Clinical Payload Data Requirements | Intermediary | Intermediary queries the Requirements Repository for the payload data requirements specific to the referral use case | [BSeR Bundle Batch Query Referral Supporting Information](StructureDefinition-bser-bundle-batch-query-referral-supporting-info.html) |
| **Referral** | Retrieve Service Request and Clinical Payload Data | Intermediary | Intermediary queries the Referral Initiator and receives the ServiceRequest and associated resources, and the referral request resources specified in the payload data element requirements | [BSeR ServiceRequest](StructureDefinition-BSeR-ReferralServiceRequest.html),[BSeR Coverage](StructureDefinition-BSeR-Coverage.html),[BSeR Patient Consent](StructureDefinition-BSeR-PatientConsent.html), various use case specific clinical resources |
| **Referral** | Clinical Payload - Submit (Option A) | Intermediary | Intermediary submits the ServiceRequest and associated resources, the referral request resources, and the batch query feedback requirements specified in the payload data element requirements to the Referral Recipient | [BSeR Bundle Batch Query Referral Supporting Information](StructureDefinition-bser-bundle-batch-query-referral-supporting-info.html),[BSeR ServiceRequest](StructureDefinition-BSeR-ReferralServiceRequest.html),[BSeR Coverage](StructureDefinition-BSeR-Coverage.html),[BSeR Patient Consent](StructureDefinition-BSeR-PatientConsent.html), various use case specific clinical resources |
| **Referral** | Clinical Payload - Subscription (Option B) | Intermediary | Intermediary (FHIR Server) automatically sends Subscription Notification to Referral Recipient | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html) |
| **Referral** | Referral Response(s) - Submit (Option A) | Referral Recipient | Once the requested service(s) have been performed the Referral Recipient submits the updated Task containing a Document Bundle with the use case specific referral feedback resources specified in the payload data element requirements to the Intermediary | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html), [BSeR Referral Feedback Document Bundle](StructureDefinition-BSeR-ReferralFeedbackDocumentBundle.html) |
| **Referral** | Referral Response(s) - Subscription (Option B) | Referral Recipient | Once the requested service(s) have been performed the Referral Recipient (FHIR Server) automatically sends Subscription Notification (including Task) to Intermediary | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
| **Referral** | Referral Response(s) - Submit (Option A) | Intermediary | On receipt of submit from Referral Recipient the Intermediary submits the updated Task containing a Document Bundle with the use case specific referral feedback resources specified in the payload data element requirements to the Referral Initiator | [BSeR Task](StructureDefinition-BSeR-ReferralTask.html), [BSeR Referral Feedback Document Bundle](StructureDefinition-BSeR-ReferralFeedbackDocumentBundle.html) |
| **Referral** | Referral Response(s) - Subscription (Option B) | Intermediary | On Subscription Notification from the Referral Recipient the Intermediary (FHIR Server) automatically sends Subscription Notification (including Task) to Referral Initiator | [R4 Topic-Based Subscription Notification Bundle](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html), [BSeR Task](StructureDefinition-BSeR-ReferralTask.html) |
{: .grid }

---

// File: input/pagecontent/bser_project_team.md

### IG Development Guidance and Tooling

This guide was developed using tooling and professional guidance provided by [Lantana Consulting Group](https://www.lantanagroup.com/), the makers of [Trifolia-on-FHIR](https://trifolia-fhir.lantanagroup.com/)

The BSeR project team would like to acknowledge and express our sincere appreciation to the authors of the IHE Patient Care Coordination Technical Framework Supplement - 360 Exchange Closed Loop Referral (360X) [link](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_360X.pdf). The referral state machine expressed in this specification draws heavily upon this work.

The BSeR project team would like to acknowledge and express our sincere appreciation to the HL7 Gravity social determinants of health (SDoH) [link](https://www.hl7.org/gravity/) project team for their assistance in defining ways in which the BSeR IG can be reused and extended to cover additional referral use cases - clinical and non-clinical.

### HL7 Work Groups

The BSeR FHIR IG is a work product of the [HL7 Public Health Work Group](http://www.hl7.org/Special/committees/pher/index.cfm). The BSeR project is co-sponsored by the [Patient Care](http://www.hl7.org/Special/committees/patientcare/index.cfm) and the [Clinical Quality Information](http://www.hl7.org/Special/committees/cqi/index.cfm) work groups. The HL7 Project Insight reference number for this project is [1423](http://www.hl7.org/Special/committees/pher/projects.cfm?action=edit&ProjectNumber=1423).

### Project Lead

John W. Loonsk MD, Consulting CMIO APHL, Johns Hopkins University

### Domain Expert Representatives

*          Heather Hodge, YMCA of the USA

*          Krista Proia, CDC Diabetes Prevention Program

*          Brenna VanFrank, CDC Smoking and Health

*          Arunkumar Srinivasan PhD, Senior Health Scientist

*          Kailah Davis, Centers for Disease Control and Prevention

*          Sena Seged, Centers for Disease Control and Prevention

*          Pradeep Podila, Centers for Disease Control and Prevention

*          Jason Bonander, Deputy Chief Information Officer, Centers for Disease Control and Prevention

### Specification Developers

*          Sarah Gaunt, Lantana Consulting Group

*          Jeff Brown, Lantana Consulting Group

*          AbdulMalik Shakir Sr., Hi3 Solutions

*          Salimah Shakir, Hi3 Solutions

*          Adam Holmes, MITRE

*          Rick Geimer, Lantana Consulting Group

### Authors

<table>
<thead>
<tr>
<th>Name</th>
<th>Email/URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>HL7 International - Public Health</td>
<td><a href="http://www.hl7.org/Special/committees/pher" target="_new">http://www.hl7.org/Special/committees/pher</a></td>
</tr>
</tbody>
</table>


---

// File: input/pagecontent/change_log.md

While IG is in development see the [Change Log GoogleSheet](https://docs.google.com/spreadsheets/d/135955mMIYtMSDVfUZx_5tg0OJEykZI2sUUh4lQ83wok/edit?usp=sharing) for a list of changes (this page will be moved inside the IG prior to publication).

---

// File: input/pagecontent/Downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

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

### **Note to Ballot Commenters**

We are seeking specific feedback on the following issues:
 * Is it realistic for community-based organizations (CBOs) to offer secure subscriptions to data in their systems? How would that work when there is an intermediary? When the intermediary is a pure pass through?
 * In the Notify of Referral step in [Referral - Notify and Pull](bi-directional_service_ereferral_transactions.html#referral-notify-and-pull) should both the Task and ServiceRequest be sent, or should just the Task be sent? Should the resource(s) that is sent include all its referenced resources?
 * We believe that sometimes the Intermediary (CBO Hub or Healthcare Information Exchange (HIE)) will act on behalf of the CBO and will present the CBO with web access to the data at the intermediary and sometimes the intermediary will act as a “pass through” and full functionality will exist at the CBO. We have represented one of each option in the interaction diagrams (with intermediary). Should we represent both of these possibilities for the both transactions (Referral - Push (with intermediary) and Referral - Notify and Pull (with intermediary)) use cases?

### Overview

The Bidirectional Services eReferral (BSeR) FHIR implementation guide (IG) provides guidance for using the HL7 Fast Healthcare Interoperability Resources (FHIR) standard as an exchange format for clinical and non-clinical referrals to be communicated in the form of service requests. It is a collection of profiled FHIR resources designed for use in information exchanges supporting the placement of a service request by a referral initiating provider and the reporting of service delivery outcomes by a referral recipient provider. The goal of the BSeR project is to streamline and enhance the efficacy of the exchange of health information between health care systems and community services organizations involved in addressing chronic health conditions by establishing information exchange standards for electronic referrals and referral outcome reporting.

### How to Read This Guide

This Guide is divided into several pages which are listed at the top of each page in the menu bar.

* Home: Introduction and background for HL7 FHIR® US Public Health Profiles Library
* Background
  * [Introduction](Introduction.html): Introduction to the IG, key concepts, design requirements, provider engagement, and collaboration information
  * [BSeR Project Team](bser_project_team.html)
  * [Acknowledgements](Acknowledgements.html)
  * [Scope and Context](scope_and_context.html): Scope, context, and additional use case information
  * [Change Log](change_log.html)
* Resource Profile Information
  * [Resource Profiles](resource_profiles.html): Information about the profiles included in the IG
  * [Referral Participant Resources](referral_participant_resources.html): Information about the primary participants within the scope of the IG
  * [Workflow Management Resources](workflow_management_resources.html): Referral workflow resource information
  * [Referral Service Request Resources](referral_service_request_resources.html): Information about the referral service request and supporting information for each use case
  * [Service Request and Referral Feedback Supporting Information](service_request_and_referral_feedback_supporting_information.html): Information about the referral feedback service request and supporting information for each use case
  * [Bi-Directional Service eReferral Transactions](bi-directional_service_ereferral_transactions.html): Transactions involved in referrals
  * [Transport Options](transport_options.html): Options for transport of referrals and referral feedback
  * [Adaptation for Additional Referral Use Cases](adaptation_for_additional_referral_use_cases.html): How to use the IG outside of the use cases covered
* [Downloads](Downloads.html): Links to downloadable artifacts
* [Artifact Index](artifacts.html): A list of the FHIR artifacts (profiles, examples, value sets, and code systems) defined as part of this guide

### BSeR Project Realm

This is a U.S. Realm Specification. This guide and related materials are based on reporting specifications in U.S. jurisdictions. The two profiles referenced in the [Core Reference Architecture Profiles](artifacts.html#core-referral-architecture-profiles) are not US Specific and can be used anywhere. 

### Other Information

This guide is compliant with FHIR Release 4.

For Clinical Safety Information please refer to the [FHIR Implementer’s Safety Checklist](http://hl7.org/fhir/safety.html).

Disclaimer: All proprietary documents, guides, guidance, standards, codes, and values contained herein remain the property of their respective Standards Developing Organization (SDO). HL7 does not make any claim to ownership herein.


---

// File: input/pagecontent/Introduction.md

The Bidirectional Services eReferral (BSeR) FHIR implementation guide (IG) provides guidance for using the HL7 Fast Healthcare Interoperability Resources (FHIR) standard as an exchange format for clinical and non-clinical referrals to be communicated in the form of service requests. It is a collection of profiled FHIR resources designed for use in information exchanges supporting the placement of a service request by a referral initiating provider and the reporting of service delivery outcomes and feedback by a referral recipient provider.

### Scope

The scope of the BSeR IG is the placement of a service request referral by a referral initiator and the feedback of a service request outcome report by a referral recipient..

### Key Concepts

Key concepts adopted in the design of the BSeR FHIR Profiles are specific fit to purpose, parsimony, and closed-loop feedback to the referral initiating provider. Under the HIPAA minimum necessary standard, covered entities must make reasonable efforts to ensure that access to protected health information (PHI) is limited, per the HIPAA Privacy Rule, to the minimum amount of information necessary to fulfill or satisfy the intended purpose of a particular disclosure, request, or use. Many clinical care organizations are particularly uncomfortable sending a full clinical summary to extra-clinical programs that support specific lifestyle changes or very selective areas of general health management.

### Context

The context of the BSeR IG is the placement of a referral by a clinical practitioner to a clinical or extra-clinical practitioner requesting preventive or therapeutic services for a patient with a health related condition requiring intervention. The requested service is typically a care regime or program specifically designed to address the patients condition. The six health related used case conditions within the scope of this specification are depicted in the following diagram:
<center>
<table><tr><td><img src="BSeR IG Referral Use Cases.png" style="width:100%;"/></td></tr></table>
</center>

### Additional Referral Use Cases

See the section [Adaptation for Additional Referral Use Cases](adaptation_for_additional_referral_use_cases.html) for guidance in reusing or extending the use of the BSeR standard for use in additional referral use cases.

### Design Requirements

A critical design requirement for BSeR is to limit the exchange of clinical information from initiating providers to recipient providers to only that data necessary to fulfill the service request. To fulfill this design requirement, the BSeR implementation guide separates the designation and profiling of FHIR resources related to the service request workflow from the FHIR resources required to convey the information content necessary for the fulfillment of the service request.

### Provider Engagement

The BSeR specification also seeks to foster and reinforce provider engagement in patient outcomes, and this extends to both the referral recipient provider and the referral initiating provider as well as throughout the initiation, progress, and completion of the referral activities. The feedback transactions that close the loop can contain practical information about successful program enrollment and participation as well as information about outcomes that may be achieved.

### Collaboration

The BSeR team worked in conjunction with the [IHE Patient Care Coordination Technical Framework Supplement 360 Exchange Closed Loop Referral (360X)](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_360X.pdf) initiative to make sure that the breadth and nuances of 360x IHE referral transactions are representable in the BSeR FHIR process. The 360x team participated extensively in BSeR preparation and we thank them for their collaboration and support.

The BSeR team also has worked with the HL7 Gravity social determinants of health team to enable the use of the BSeR specification by Gravity, and other implemetation guides. Other implementation guides can reference and use the BSeR specification for their particular referral type in conjunction with extension guidance found [elsewhere](adaptation_for_additional_referral_use_cases.html) in this implementation guide. We would also like to thank the Gravity team for all of their help in making the BSeR specification more useful through the development of this generic extension approach.

---

// File: input/pagecontent/referral_participant_resources.md

The primary participants in referral functions within the scope of the BSeR FHIR IG are the referral service request initiator, referral service request recipient, and referral service request patient. The referral service request initiator and referral service request recipient are represented by the [US Core Practitioner]({{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-practitioner.html) and [US Core PractitionerRole]({{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-practitionerrole.html). The referral service request patient is the [US Core Patient]({{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-patient.html) profile.
<center><table><tr><td><img src="Participant Resources.png" style="width:100%;"/></td></tr></table></center>

### Referral Service Request Initiator

The referral initiator is the practitioner that is making the referral request and initiates the referral task. The initiator is related to an organization and a service delivery location. 
<center><table><tr><td><img src="Referral Initiator.png" style="width:100%;"/></td></tr></table></center>

### Referral Service Request Recipient

The referral recipient is the practitioner that performs services requested in a referral service request received from a referral initiator. The referral recipient owns the referral task and authors the referral feedback. The recipient is related to an organization and a service delivery location. 

<center><table><tr><td><img src="Referral Recipient.png" style="width:100%;"/></td></tr></table></center>

### Referral Service Request Patient

The referral patient is the subject of a referral service request, referral feedback composition, and clinical statements used as supporting information for referral requests and feedback. In addition to basic demographics the referral patient is the beneficiary of coverage, the subject of education level and employment status, and the target patient of a consent resource.

<center>
<table><tr><td><img src="Referral Patient.png" style="width:100%;"/></td></tr></table>
</center>

---

// File: input/pagecontent/referral_service_request_feedback_resources.md

Each referral feedback includes references to a patient (subject), referral recipient (author), feedback summary, and feedback supporting information. The feedback summary includes a reference to the referral service request. The supporting information is consistent with the scope of the referral use case as designated in the referral service request code. 

### Referral Service Request Feedback Clinical Statements

Each referral use case requires that certain information items accompany the service request feedback as supporting information. The following table indicates how referral feedback supporting information items are allocated to the BSeR referral use cases.

<table style="width:100%" border="1">
    <thead>
        <tr style="background-color:#DCDCDC">
            <th style="text-align: center; vertical-align: middle;">Profile</th>
            <th style="text-align: center; vertical-align: middle;">Concept</th>
            <th style="text-align: center; vertical-align: middle;">Code</th>
            <th style="text-align: center; vertical-align: middle;">Diabetes Prevention Feedback</th>
            <th style="text-align: center; vertical-align: middle;">Obesity Feedback</th>
            <th style="text-align: center; vertical-align: middle;">Arthritis Feedback</th>
            <th style="text-align: center; vertical-align: middle;">Hypertension Feedback</th>
            <th style="text-align: center; vertical-align: middle;">Early Childhood Nutrition Feedback</th>
            <th style="text-align: center; vertical-align: middle;">Tobacco Use Cessation Feedback</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
            <td>Blood Pressure (patient)</td>
            <td>
                <a href="https://loinc.org/85354-9/">LOINC#85354-9</a>
            </td>
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td>Body Height (patient)</td>
            <td>
                <a href="https://loinc.org/8302-2/">LOINC#8302-2</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
            <td>Body Mass Index (BMI) (patient)</td>
            <td>
                <a href="https://loinc.org/39156-5/">LOINC#39156-5</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
            <td>Body Weight (patient)</td>
            <td>
                <a href="https://loinc.org/29463-7/">LOINC#29463-7</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
            <td>Number of appointments attended</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=298057009&edition=&release=&languages=en">SNOMED CT#298057009</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
            <td>Number of appointments missed</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=298058004&edition=&release=&languages=en">SNOMED CT#298058004</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Pain</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=22253000&edition=&release=&languages=en">SNOMED CT#22253000</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Feeling frustrated</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=224973000&edition=&release=&languages=en">SNOMED CT#224973000</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Pain management</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=278414003&edition=&release=&languages=en">SNOMED CT#278414003</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Feeling isolated</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=307048004&edition=&release=&languages=en">SNOMED CT#307048004</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Range of joint movement</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=364564000&edition=&release=&languages=en">SNOMED CT#364564000</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Endurance</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=406203001&edition=&release=&languages=en">SNOMED CT#406203001</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>General healthful diet</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=435771000124106&edition=&release=&languages=en">SNOMED CT#435771000124106</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Fatigue</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=84229001&edition=&release=&languages=en">SNOMED CT#84229001</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Complies with drug therapy</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=1156699004&edition=&release=&languages=en">SNOMED CT#1156699004</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Muscle strength</td>
            <td>
                <a href="https://loinc.org/80332-1/">LOINC#80332-1</a>
            </td>
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Finding related to ability to perform breast-feeding</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=364826005&edition=&release=&languages=en">SNOMED CT#364826005</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Breastfeeding support</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=408883002&edition=&release=&languages=en">SNOMED CT#408883002</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-condition-problems-health-concerns.html">US Core Condition Problems and Health Concerns Profile</a>
            </td>
            <td>Tongue tie</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=67787004&edition=&release=&languages=en">SNOMED CT#67787004</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-medicationrequest.html">US Core MedicationRequest Profile</a>
            </td>
            <td>Cessation medications</td>
            <td><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1111.95/expansion/Latest">FDA Approved Tobacco Cessation Medications</a></td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-medicationrequest.html">US Core MedicationRequest Profile</a>
            </td>
            <td>Cessation medication use indicator</td>
            <td>n/a</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
            <td>Negotiated date for cessation of smoking</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=390901002&edition=&release=&languages=en">SNOMED CT#390901002</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
            <td>Tobacco Use Cessation Session Type</td>
            <td>
                <a href="https://loinc.org/79213-5/">LOINC#79213-5</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
            <td>Time since stopped smoking</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=228486009&edition=&release=&languages=en">SNOMED CT#228486009</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
    </tbody>
</table>

---

// File: input/pagecontent/referral_service_request_resources.md

Each referral service request includes references to a patient (subject), referral initiator (requester), referral recipient (performer), and a reference to a Bundle of supporting information consistent with the scope of the referral use case as designated in ServiceRequest.code.

### Referral Service Request Clinical Statements

Each referral use case requires that certain information items accompany the service request as supporting information. The following table indicates how service request supporting information items are allocated to BSeR referral use cases.

<table style="width:100%" border="1">
    <thead>
        <tr style="background-color:#DCDCDC">
            <th style="text-align: center; vertical-align: middle;">Profile</th>
            <th style="text-align: center; vertical-align: middle;">Concept</th>
            <th style="text-align: center; vertical-align: middle;">Code</th>
            <th style="text-align: center; vertical-align: middle;">Diabetes Prevention Request</th>
            <th style="text-align: center; vertical-align: middle;">Obesity Request</th>
            <th style="text-align: center; vertical-align: middle;">Arthritis Request</th>
            <th style="text-align: center; vertical-align: middle;">Hypertension Request</th>
            <th style="text-align: center; vertical-align: middle;">Early Childhood Nutrition Request</th>
            <th style="text-align: center; vertical-align: middle;">Tobacco Use Cessation Request</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
            <td>Blood Pressure (patient)</td>
            <td>
                <a href="https://loinc.org/85354-9/">LOINC#85354-9</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
            <td>Blood Pressure (mother)</td>
            <td>
                <a href="https://loinc.org/85354-9/">LOINC#85354-9</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td>Body Height (patient)</td>
            <td>
                <a href="https://loinc.org/8302-2/">LOINC#8302-2</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td>Body Height Lying (patient - baby)</td>
            <td><a href="https://loinc.org/8302-2/">LOINC#8302-2</a>, <a href="https://loinc.org/8306-3/">LOINC#8306-3</a></td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td>Body Height (mother)</td>
            <td>
                <a href="https://loinc.org/8302-2/">LOINC#8302-2</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
            <td>Body Mass Index (BMI) (patient)</td>
            <td>
                <a href="https://loinc.org/39156-5/">LOINC#39156-5</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
            <td>Body Mass Index (BMI) (mother)</td>
            <td>
                <a href="https://loinc.org/39156-5/">LOINC#39156-5</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
            <td>Body Weight (patient)</td>
            <td>
                <a href="https://loinc.org/29463-7/">LOINC#29463-7</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
            <td>Body Weight (mother)</td>
            <td>
                <a href="https://loinc.org/29463-7/">LOINC#29463-7</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-lab.html">US Core Laboratory Result Observation</a>
            </td>
            <td>HA1C Observation</td>
            <td>
                <a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1034.359/expansion/Latest">Hemoglobin A1C Testing (LOINC)</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-allergyintolerance.html">US Core AllergyIntolerance Profile</a>
            </td>
            <td>Allergies</td>
            <td>All allergies</td>
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-condition-problems-health-concerns.html">US Core Condition Problems and Health Concerns Profile</a>
            </td>
            <td>Diagnosis - Hypertension</td>
            <td>
                <a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.9/expansion/Latest">Hypertension Value Set</a>
            </td>
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Able to latch on to breast for feeding</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=288988007&edition=&release=&languages=en">SNOMED CT#288988007</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Maternal concern</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=270472006&edition=&release=&languages=en">SNOMED CT#270472006</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td>Nipple shield</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=335389008&edition=&release=&languages=en">SNOMED CT#335389008</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-patient.html">US Core Patient Profile</a>
            </td>
            <td>Baby's birthdate</td>
            <td>n/a</td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-patient.html">US Core Patient Profile</a>
            </td>
            <td>Baby's name</td>
            <td>n/a</td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-patient.html">US Core Patient Profile</a>
            </td>
            <td>Baby's sex</td>
            <td>n/a</td>
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td />
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-procedure.html">US Core Procedure Profile</a>
            </td>
            <td>Nicotine replacement therapy</td>
            <td style="white-space: nowrap;">
                <a href="https://browser.ihtsdotools.org/?perspective=full&conceptId1=151159008&edition=&release=&languages=en">SNOMED CT#151159008</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-smokingstatus.html">US Core Smoking Status Observation Profile</a>
            </td>
            <td>Smoking Status</td>
            <td>
                <a href="https://loinc.org/72166-2/">LOINC#72166-2</a>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-BSeR-TelcomCommunicationPreferences.html">BSeR Telcom Communication Preferences</a>
            </td>
            <td>Best day to call</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-BSeR-TelcomCommunicationPreferences.html">BSeR Telcom Communication Preferences</a>
            </td>
            <td>Best time to call</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-BSeR-TelcomCommunicationPreferences.html">BSeR Telcom Communication Preferences</a>
            </td>
            <td>Leave message indicator</td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhirusodh}}/StructureDefinition-odh-EmploymentStatus.html">ODH Employment Status</a>
            </td>
            <td>Employment status</td>
            <td>
                <a href="https://loinc.org/74165-2/">LOINC#74165-2</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
            <td>Education level</td>
            <td>
                <a href="https://loinc.org/82589-3/">LOINC#82589-3</a>
            </td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-BSeR-PatientConsent.html">BSeR Patient Consent</a>
            </td>
            <td>Patient consent</td>
            <td>n/a</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
        <tr>
            <td>
                <a href="StructureDefinition-BSeR-Coverage.html">BSeR Coverage</a>
            </td>
            <td>Insurance coverage</td>
            <td>n/a</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
            <td style="text-align: center; vertical-align: middle;">●</td>
        </tr>
    </tbody>
</table>

	
Clinical statement profiles use FHIR resource profiles to express one or more supporting information item. The above table indicates the grouping of referral service request supporting information items into clinical statement resource profiles.

---

// File: input/pagecontent/resource_profiles.md

The FHIR R4 resource profiles used in the BSeR IG are grouped into the following four packages:

### [Referral Participant Resources](referral_participant_resources.html) 

The set of FHIR resources representing the entities participating in the bi-directional exchange of referral transactions.

### [Workflow Management Resources](workflow_management_resources.html)

The set of FHIR resources used to enable the bundling of resources and managing tasks related to the bi-directional exchange of referral transactions.

### [Referral Service Request Resources](referral_service_request_resources.html)

The set of FHIR resources used in referral service request transactions.

### [Referral Service Request Feedback Resources](referral_service_request_feedback_resources.html)

The set of FHIR resources used in the service request feedback transactions.

### [Must Support]

The set of FHIR resources used in the service request feedback transactions.

---

// File: input/pagecontent/service_request_and_referral_feedback_supporting_information.md

The BSeR IG illustrates the inclusion of service request content profiles for six representative use cases. See [Adaptation for Additional Referral Use Cases](adaptation_for_additional_referral_use_cases.html) for details on extension of BSeR for use by other applications/programs.

The selected use cases have overlapping information needs that demonstrate the concepts of parsimonious partitioning and resource profile reuse.

Each referral use case is an aggregation of supporting information data items. Supporting information data items are represented with clinical profiles. In most cases, US Core profiles have been reused.

### Use Case Profiles

The following table identifies the aggregation of supporting information profiles for each use case split between referral request and referral feedback flows:


<table style="width:100%" cellspacing="0" border="1">
    <thead>
        <tr style="height: 20px">
            <th rowspan="2" style="text-align: center; vertical-align: middle; background-color:#DCDCDC">Referral Use Case</th>
            <th colspan="2" style="text-align: center; vertical-align: middle; background-color:#DCDCDC" align="center">Referral Request</th>
            <th rowspan="2" style="width:1; background-color:#DCDCDC" />
            <th colspan="2" style="text-align: center; vertical-align: middle; background-color:#DCDCDC" align="center">Referral Feedback</th>
        </tr>
        <tr style="height: 20px">
            <th style="text-align: center; vertical-align: middle; background-color:#DCDCDC">Concept</th>
            <th style="text-align: center; vertical-align: middle; background-color:#DCDCDC">Profile</th>
            <th style="text-align: center; vertical-align: middle; background-color:#DCDCDC">Concept</th>
            <th style="text-align: center; vertical-align: middle; background-color:#DCDCDC">Profile</th>
        </tr>
    </thead>
    <tbody>
        <tr style="height: 20px" border="1">
            <td rowspan="4">All</td>
            <td>Employment status</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhirusodh}}/StructureDefinition-odh-EmploymentStatus.html">ODH Employment Status</a>
            </td>
            <td rowspan="44" style="width:1; border-top-style: hidden; background-color:#DCDCDC" />
            <td />
            <td />
        </tr>
        <tr style="height: 20px">
            <td>Education level</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
            <td />
            <td />
        </tr>
        <tr style="height: 20px">
            <td>Patient consent</td>
            <td>
                <a href="StructureDefinition-BSeR-PatientConsent.html">BSeR Patient Consent</a>
            </td>
            <td />
            <td />
        </tr>
        <tr style="height: 20px">
            <td>Insurance coverage</td>
            <td>
                <a href="StructureDefinition-BSeR-Coverage.html">BSeR Coverage</a>
            </td>
            <td />
            <td />
        </tr>
        <tr style="height: 20px">
            <td rowspan="5" style="background-color:#F2F2F2">Arthritis</td>
            <td style="background-color:#F2F2F2">Blood Pressure</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Pain</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Height</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Feeling frustrated</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Mass Index (BMI)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Pain management</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Weight</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Feeling isolated</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Allergies</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-allergyintolerance.html">US Core AllergyIntolerance Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Range of joint movement</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td rowspan="6">Diabetes Prevention</td>
            <td>Blood Pressure</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
            <td>Muscle strength</td>
            <td>
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Body Height</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td>Body Height</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Body Mass Index (BMI)</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
            <td>Body Mass Index (BMI)</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Body Weight</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
            <td>Body Weight</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>HA1C Observation</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-lab.html">US Core Laboratory Result Observation</a>
            </td>
            <td>Number of appointments attended</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td />
            <td />
            <td>Number of appointments missed</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td rowspan="13" style="background-color:#F2F2F2">Early Childhood Nutrition</td>
            <td style="background-color:#F2F2F2">Blood Pressure (baby)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Number of appointments attended</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Blood Pressure (mother)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Number of appointments missed</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Height Lying (baby)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Finding related to ability to perform breast-feeding</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Height (mother)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Breastfeeding support</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Mass Index (BMI) (mother)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Tongue tie</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-condition-problems-health-concerns.html">US Core Condition Problems and Health Concerns Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Weight (baby)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
            <td style="background-color:#F2F2F2" />
            <td style="background-color:#F2F2F2" />
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Weight (mother)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
            <td style="background-color:#F2F2F2" />
            <td style="background-color:#F2F2F2" />
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Able to latch on to breast for feeding</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td style="background-color:#F2F2F2" />
            <td style="background-color:#F2F2F2" />
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Maternal concern</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td style="background-color:#F2F2F2" />
            <td style="background-color:#F2F2F2" />
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Nipple shield</td>
            <td style="background-color:#F2F2F2">
                <a href="StructureDefinition-bser-referral-observation.html">BSeR Referral Observation</a>
            </td>
            <td style="background-color:#F2F2F2" />
            <td style="background-color:#F2F2F2" />
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Baby&#39;s birthdate</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-patient.html">US Core Patient Profile</a>
            </td>
            <td style="background-color:#F2F2F2" />
            <td style="background-color:#F2F2F2" />
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Baby&#39;s name</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-patient.html">US Core Patient Profile</a>
            </td>
            <td style="background-color:#F2F2F2" />
            <td style="background-color:#F2F2F2" />
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Baby&#39;s sex</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-patient.html">US Core Patient Profile</a>
            </td>
            <td style="background-color:#F2F2F2" />
            <td style="background-color:#F2F2F2" />
        </tr>
        <tr style="height: 20px">
            <td rowspan="5">Hypertension</td>
            <td>Blood Pressure</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
            <td>Blood Pressure</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Body Height</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td>Body Height</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Body Mass Index (BMI)</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
            <td>Body Mass Index (BMI)</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Body Weight</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
            <td>Body Weight</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Diagnosis</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-condition-problems-health-concerns.html">US Core Condition Problems and Health Concerns Profile</a>
            </td>
            <td />
            <td />
        </tr>
        <tr style="height: 20px">
            <td rowspan="5" style="background-color:#F2F2F2">Obesity</td>
            <td style="background-color:#F2F2F2">Blood Pressure</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Blood Pressure</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-blood-pressure.html">US Core Blood Pressure Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Height</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Body Height</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html">US Core Body Height Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Mass Index (BMI)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Body Mass Index (BMI)</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-bmi.html">US Core BMI Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Body Weight</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
            <td style="background-color:#F2F2F2">Body Weight</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-weight.html">US Core Body Weight Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td style="background-color:#F2F2F2">Allergies</td>
            <td style="background-color:#F2F2F2">
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-allergyintolerance.html">US Core AllergyIntolerance Profile</a>
            </td>
            <td style="background-color:#F2F2F2" />
            <td style="background-color:#F2F2F2" />
        </tr>
        <tr style="height: 20px">
            <td rowspan="6">Tobacco Use Cessation</td>
            <td>Nicotine replacement therapy</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-procedure.html">US Core Procedure Profile</a>
            </td>
            <td>Number of appointments attended</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Smoking Status</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-smokingstatus.html">US Core Smoking Status Observation Profile</a>
            </td>
            <td>Number of appointments missed</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Best day to call</td>
            <td>
                <a href="StructureDefinition-BSeR-TelcomCommunicationPreferences.html">BSeR Telcom Communication Preferences</a>
            </td>
            <td>Cessation medications</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-medicationrequest.html">US Core MedicationRequest Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Best time to call</td>
            <td>
                <a href="StructureDefinition-BSeR-TelcomCommunicationPreferences.html">BSeR Telcom Communication Preferences</a>
            </td>
            <td>Negotiated date for cessation of smoking</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td>Leave message indicator</td>
            <td>
                <a href="StructureDefinition-BSeR-TelcomCommunicationPreferences.html">BSeR Telcom Communication Preferences</a>
            </td>
            <td>Tobacco Use Cessation Session type</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
        </tr>
        <tr style="height: 20px">
            <td />
            <td />
            <td>Time since stopped smoking</td>
            <td>
                <a href="{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-social-history.html">US Core Observation Social History Profile</a>
            </td>
        </tr>
    </tbody>
</table>

---

// File: input/pagecontent/StructureDefinition-BSeR-ReferralFeedbackComposition-intro.md

It contains a required section for the referral feedback summary and optional sections for each type of referral containing referral feedback. Only one of the optional sections is expected.

---

// File: input/pagecontent/StructureDefinition-BSeR-ReferralRequestComposition-intro.md

It contains a section for other supporting information including employment status and education level which can be included for any referral type. It also contains optional sections for each type of referral containing clinical supporting information and only one of these optional sections is expected.

---

// File: input/pagecontent/StructureDefinition-BSeR-ReferralServiceRequest-intro.md

It is based on the [ReferralServiceRequest](StructureDefinition-referral-servicerequest.html) profile and further constrains it as follows:
* sets requester to reference [US Core PracitionerRole]({{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-practitionerrole.html)
* sets perfomer to reference either [US Core PracitionerRole]({{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-practitionerrole.html) or [US Core Organization]({{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-organization.html)
* adds a value set constraint to reasonCode
* sets insurance to reference [BSeR Coverage](StructureDefinition-BSeR-Coverage.html)
* sets supportingInfo to reference [BSeR Referral Request Document Bundle](StructureDefinition-BSeR-ReferralRequestDocumentBundle.html) and [BSeR Patient Consent](StructureDefinition-BSeR-PatientConsent.html)



---

// File: input/pagecontent/StructureDefinition-ReferralServiceRequest-intro.md

It is based on the [US Core ServiceRequest]({{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-servicerequest.html) profile and further constrains it as follows:
* adds extension [resource-pertainsToGoal]({{site.data.fhir.path}}extension-resource-pertainstogoal.html)
* adds required and must support identifier 
    * adds slices for the ServiceRequest initiator and recipient
    * individual to US Public Health PractitionerRole
* add basedOn as must support and sets the reference to (StructureDefinition-ReferralServiceRequest.html)[Referral Service Request]
* sets intent to "order"
* adds guidance to the code element
* adds required occurrence[x] and constrains it to dateTime
* adds required must support requester
* adds required must support performer
* adds must support reasonCode and adds guidance
* adds must support reasonReference and constrains reference to [US Core Condition Problems Health Concerns]({{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-condition-problems-health-concerns.html) profile
* adds must support insurance with a slice constrained to reference [Coverage]({{site.data.fhir.path}}coverage.html)
* adds must support supportingInfo constrained to [Consent]({{site.data.fhir.path}}consent.html) or [Bundle]({{site.data.fhir.path}}bundle.html)

---

// File: input/pagecontent/StructureDefinition-ReferralTask-intro.md

The referral Task is an essential component of the electronic exchange of the referral ServiceRequest and its associated referral feedback. 

The Task.focus contains a [Referral ServiceRequest](StructureDefinition-ReferralServiceRequest.html), the Task.requester is the initiator of the Task, and a Task.owner is the recipient of the task.  Task.output contains referral feedback and the state of the referral transaction (e.g., created, accepted, in progress, or completed) is contained in Task.status.

---

// File: input/pagecontent/transport_options.md

There are two supported high-level use cases that can be used individually or in combination and that drive transport options. This flexibility is needed to support point-to-point transport as well as transport through Health Information Exchanges and Health Information Networks.

### Referral - Push Option

One option for transmitting the content in this implementation guide is a push option with the use of FHIR Messaging. FHIR Messaging involves the use of a top-level FHIR Message bundle and then a small FHIR Messaging header. FHIR Messaging enables the movement of content through an information exchange intermediary and allows, but does not require, a store and forward exchange paradigm. The FHIR messageHeader includes the identity of the ultimate intended recipient and other information helpful for message exchange. All resources should be populated in the FHIR Message bundle because subsequent retrieval of resources back through an intermediary may not be enabled.

The following profiles have been defined for the FHIR Messaging Option:

#### Profiles
<ul>
  <li><a href="StructureDefinition-BSeR-ReferralMessageBundle.html">BSeR Referral Message Bundle</a></li>
  <li><a href="StructureDefinition-BSeR-ReferralMessageHeader.html">BSeR Referral MessageHeader</a></li>
  <li><a href="StructureDefinition-BSeR-ReferralTask.html">BSeR Referral Task</a></li>
</ul>

The first resource in the <a href="StructureDefinition-BSeR-ReferralMessageBundle.html">BSeR Referral Message Bundle</a> is the <a href="StructureDefinition-BSeR-ReferralMessageHeader.html">BSeR Referral MessageHeader</a> and the focus of the <a href="StructureDefinition-BSeR-ReferralMessageHeader.html">BSeR Referral MessageHeader</a> is the <a href="StructureDefinition-BSeR-ReferralTask.html">BSeR Referral Task</a>. The focus of the <a href="StructureDefinition-BSeR-ReferralTask.html">BSeR Referral Task</a> is the <a href="StructureDefinition-BSeR-ReferralServiceRequest.html">BSeR Referral ServiceRequest</a>.


### Referral - Notify and Pull Option

The second option for transmitting the content in this implementation guide is notify and pull. In this case, a point-to-point RESTful exchange is supported.

The following profiles have been defined for the RESTful Submit Option:

#### Profiles
<ul>
  <li><a href="StructureDefinition-BSeR-ReferralTask.html">BSeR Referral Task</a></li>
</ul>

The focus of the <a href="StructureDefinition-BSeR-ReferralTask.html">BSeR Referral Task</a> is the <a href="StructureDefinition-BSeR-ReferralServiceRequest.html">BSeR Referral ServiceRequest</a>.

---

// File: input/pagecontent/workflow_management_resources.md

The BSeR referral request workflow resources are Message Bundle, Referral MessageHeader, and Referral Task.

The electronic exchange of the referral request and associated referral feedback can utilize FHIR Messaging and/or a basic RESTful Submit. 

**A message Bundle** is used when messaging is the method of electronic information exchange. It contains a messageHeader as the first entry in the Bundle, followed by the resources comprising the message content. **The messageHeader** includes a reference to the referral initiator as the message sender and the ultimate referral recipient as the message receiver. A referral Task is included as the focus of the messageHeader. 

**The referral Task** is an essential component of the electronic exchange of the referral request and its associated referral feedback. Referral Task contains the state of the referral transaction (e.g., created, accepted, in progress, or completed), references to the referral initiator (Task requester) and referral recipient (Task owner), a reference to the referral ServiceRequest (focus) and, if applicable, the referral feedback (output). 

Task and its associated references are included in general RESTful Submit even if the messageHeader and message Bundle are not utilized. 

### Trigger Events and State Transitions

Actions taken by the referral initiator such as sending a referral ServiceRequest or sending a cancellation request and actions taken by the referral recipient such as sending a referral acceptance or sending a ServiceRequest outcome are triggering events that trigger a change in state of the referral request Task. The full set of triggering events by actor and their corresponding state transitions are depicted in the following table:
<center>
<table><tr><td><img src="Harmonized State Transitions.png" style="width:100%;"/></td></tr></table></center>

### State Machine and Business Status

The following diagram is the full referral request Task state machine. Each state transition is adorned with a numeric identifier of the transition triggering event.  

<table><tr><td><img src="Task State Machine.png" style="width:100%;"/></td></tr></table>

The business states reflect a harmonization of the state machine required by BSeR and the state machine defined by the IHE Patient Care Coordination Technical Framework Supplement 360 Exchange Closed Loop Referral (360X). States reflected in the 360x state machine that relate to the interim states of in-progress referral request fulfillment activities can be added as extended value sets for the BSeR IG and are reflected in the harmonized state machine.

---

// File: input/fsh/aliases.fsh

Alias: $allergyintolerance-clinical = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical
Alias: $allergyintolerance-verification = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification
Alias: $sct = http://snomed.info/sct
Alias: $loinc = http://loinc.org
Alias: $provider-taxonomy = http://nucc.org/provider-taxonomy
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $v2-0003 = http://terminology.hl7.org/CodeSystem/v2-0003
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $dose-rate-type = http://terminology.hl7.org/CodeSystem/dose-rate-type
Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $v3-ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $consentaction = http://terminology.hl7.org/CodeSystem/consentaction
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $coverage-class = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $v3-EducationLevel = http://terminology.hl7.org/CodeSystem/v3-EducationLevel
Alias: $v2-0149 = http://terminology.hl7.org/CodeSystem/v2-0149
Alias: $v3-ObservationValue = http://terminology.hl7.org/CodeSystem/v3-ObservationValue
Alias: $task-code = http://hl7.org/fhir/CodeSystem/task-code
Alias: $resource-pertainsToGoal = http://hl7.org/fhir/StructureDefinition/resource-pertainsToGoal
Alias: $2.16.840.1.113762.1.4.1099.37 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.37
Alias: $2.16.840.1.113762.1.4.1099.38 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.38
Alias: $coverage-type = http://hl7.org/fhir/ValueSet/coverage-type
Alias: $2.16.840.1.113762.1.4.1099.39 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.39
Alias: $2.16.840.1.113762.1.4.1099.40 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.40
Alias: $v3-EducationLevel_1 = http://terminology.hl7.org/ValueSet/v3-EducationLevel
Alias: $v2-0149_1 = http://terminology.hl7.org/ValueSet/v2-0149
Alias: $2.16.840.1.113762.1.4.1099.47 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.47
Alias: $2.16.840.1.113762.1.4.1099.45 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.45
Alias: $2.16.840.1.113762.1.4.1099.46 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.46
Alias: $2.16.840.1.113762.1.4.1111.95 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1111.95
Alias: $medication-status = http://hl7.org/fhir/ValueSet/medication-status
Alias: $2.16.840.1.113762.1.4.1099.41 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1099.41
Alias: $link-type = http://hl7.org/fhir/link-type
Alias: $2.16.840.1.114222.4.11.3591 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.3591
Alias: $SubscriberRelationshipCodes = http://hl7.org/fhir/ValueSet/subscriber-relationship
Alias: $us-core-procedure-code = http://hl7.org/fhir/us/core/ValueSet/us-core-procedure-code

---

// File: input/fsh/codesystems/BSeR.fsh

CodeSystem: BSeR
Id: bser
Title: "BSeR"
Description: "BSeR code system"
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-04-12T10:40:11.758Z"
* ^status = #active
* ^experimental = false
* ^publisher = "PHWG"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^caseSensitive = false
* ^content = #complete
* #BDTC "Best Day To Call"
* #BTTC "Best Time To Call"
* #LMI "Leave Message Indicator"
* #RSRFS "CompositionSectionReferralServiceRequestFeedbackSummary"
* #RSRFSI "CompositionSectionReferralServiceRequestFeedbackSupportingInformation"
* #RSRSI "CompositionSectionReferralServiceRequestSupportingInformation"
* #OSI "Other Supporting Information"
* #ORSI "Obesity Referral Supporting Information"
* #ARSI "Arthritis Referral Supporting Information"
* #HRSI "Hypertension Referral Supporting Information"
* #ECNRSIB "Early Childhood Nutrition Referral Supporting Information Baby"
* #ECNRSIM "Early Childhood Nutrition Referral Supporting Information Mother"
* #DPRSI "Diabetes Prevention Referral Supporting Information"
* #TUCRSI "Tobacco Use Cessation Referral Supporting Information"
* #ORFSI "Obesity Referral Feedback Supporting Information"
* #ARFSI "Arthritis Referral Feedback Supporting Information"
* #HRFSI "Hypertension Referral Feedback Supporting Information"
* #ECNRFSI "Early Childhood Nutrition Referral Feedback Supporting Information"
* #DPRFSI "Diabetes Prevention Referral Feedback Supporting Information"
* #TUCRFSI "Tobacco Use Cessation Referral Feedback Supporting Information"

---

// File: input/fsh/codesystems/TaskBusinessStatusCS.fsh

CodeSystem: TaskBusinessStatusCS
Id: TaskBusinessStatusCS
Title: "Task Business Status Code System"
Description: "BSeR Task Business Status code system"
* ^meta.versionId = "4"
* ^meta.lastUpdated = "2023-05-07T20:55:42.968Z"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 PHWG"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^caseSensitive = false
* ^compositional = false
* ^versionNeeded = false
* ^content = #complete
* #2.0 "Service Request Created"
* #3.0 "Service Request Accepted"
* #4.0 "Service Request Declined"
* #5.2 "Service Request Cancellation Requested"
* #5.1.1 "Service Request Event Scheduled"
* #6.0 "Service Request Fulfillment Cancelled"
* #7.0 "Service Request Fulfillment Completed"
* #5.1.2 "Scheduled Service Request Event Unattended"
* #5.1.3 "Scheduled Service Request Event Cancelled"
* #5.1.4 "Service Request Event Completed"

---

// File: input/fsh/extensions/QueryDescription.fsh

Extension: QueryDescription
Id: query-description
Description: "This extension allows for descriptive information associated with a specific query in the batch."
* ^context[0].type = #element
* ^context[=].expression = "Bundle.entry.request"

* value[x] ^short = "Descriptive information for the query"
* value[x] only string
* value[x] 1..1


---

// File: input/fsh/instances/allergyintolerance-us-core-allergyint-eve-everywoman.fsh

Instance: allergyintolerance-us-core-allergyint-eve-everywoman
InstanceOf: USCoreAllergyIntolerance
Title: "AllergyIntolerance - Sulfonamide - Eve Everywoman"
Description: "US Core AllergyIntolerance: Sulfonamide - Eve Everywoman example"
Usage: #example
* clinicalStatus = $allergyintolerance-clinical#active
* verificationStatus = $allergyintolerance-verification#confirmed
* category = #medication
* criticality = #high
* code = $sct#387406002 "Sulfonamide (substance)"
* code.text = "sulfonamide antibacterial"
* patient = Reference(Patient/patient-us-core-patient-eve-everywoman) "Eve Everywoman"
* reaction.manifestation = $sct#271807003 "skin rash"
* reaction.manifestation.text = "skin rash"
* reaction.severity = #mild

---

// File: input/fsh/instances/bundle-batch-query-arthritis-feedback.fsh

Instance: bundle-batch-query-arthritis-feedback
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Arthritis Feedback"
Description: "This Bundle is a batch of requests to the FHIR RESTful API for referral feedback supporting information for an arthritis referral. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Each entry is used to represent a RESTful API request.This request retrieves a single Patient resource
* entry[0].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"
// Blood Pressure Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"
// Body Height Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"
// BMI Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"
// Body Weight Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"
// Ha1C Laboratory Result Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=laboratory&code=4548-4,74246-0,55454-3,41995-2,17855-8,4549-2,17856-6,62388-4,71875-9,59261-8"
// Employment Status Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"
// Education Level Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"
// Patient Consent and Consent.performer
* entry[+].request.method = #GET
* entry[=].request.url = "/Consent?patient={{patient-id}}&_include=Consent:performer"
// Insurance Coverage and Coverage.subscriber
* entry[+].request.method = #GET
* entry[=].request.url = "/Coverage?patient={{patient-id}}_include=Coverage:subscriber"

---

// File: input/fsh/instances/bundle-batch-query-arthritis-request.fsh

Instance: bundle-batch-query-arthritis-request
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Arthritis Request Supporting Information Queries"
Description: "This Bundle is a batch of queries for definition and/or retrieval of supporting information for an arthritis referral request. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Patient
* entry[0].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Patient"
* entry[=].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"

// Blood Pressure Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Blood Pressure"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"

// Body Height Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Height"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"

// BMI Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"

// Body Weight Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"

// Allergies
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Allergies"
* entry[=].request.method = #GET
* entry[=].request.url = "/AllergyIntolerance?patient={PatientID}"

// Employment Status Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Employment Status"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"

// Education Level Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Education Level"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"

---

// File: input/fsh/instances/bundle-batch-query-diabetes-prevention-feedback.fsh

Instance: bundle-batch-query-diabetes-prevention-feedback
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Diabetes Prevention Feedback"
Description: "This Bundle is a batch of requests to the FHIR RESTful API for referral feedback supporting information for a diabetes prevention referral. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Each entry is used to represent a RESTful API request.This request retrieves a single Patient resource
* entry[0].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"
// Blood Pressure Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"
// Body Height Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"
// BMI Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"
// Body Weight Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"
// Ha1C Laboratory Result Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=laboratory&code=4548-4,74246-0,55454-3,41995-2,17855-8,4549-2,17856-6,62388-4,71875-9,59261-8"
// Employment Status Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"
// Education Level Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"
// Patient Consent and Consent.performer
* entry[+].request.method = #GET
* entry[=].request.url = "/Consent?patient={{patient-id}}&_include=Consent:performer"
// Insurance Coverage and Coverage.subscriber
* entry[+].request.method = #GET
* entry[=].request.url = "/Coverage?patient={{patient-id}}_include=Coverage:subscriber"

---

// File: input/fsh/instances/bundle-batch-query-diabetes-prevention-request.fsh

Instance: bundle-batch-query-diabetes-prevention-request
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Diabetes Prevention Request Supporting Information Queries"
Description: "This Bundle is a batch of queries for definition and/or retrieval of supporting information for a diabetes prevention referral request. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Patient
* entry[0].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Patient"
* entry[=].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"

// Blood Pressure Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Blood Pressure"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"

// Body Height Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Height"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"

// BMI Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"

// Body Weight Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"

// Ha1C Laboratory Result Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Ha1C"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=laboratory&code=17855-8,17856-6,41995-2,43150-2,4548-4,4549-2,55454-3,59261-8,62388-4,71875-9,86910-7"

// Employment Status Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Employment Status"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"

// Education Level Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Education Level"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"

---

// File: input/fsh/instances/bundle-batch-query-early-childhood-nutrition-feedback.fsh

Instance: bundle-batch-query-early-childhood-nutrition-feedback
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Early Childhood Nutrition Feedback"
Description: "This Bundle is a batch of requests to the FHIR RESTful API for referral feedback supporting information for a early childhood nutrition referral. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Each entry is used to represent a RESTful API request.This request retrieves a single Patient resource
* entry[0].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"
// Blood Pressure Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"
// Body Height Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"
// BMI Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"
// Body Weight Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"
// Ha1C Laboratory Result Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=laboratory&code=4548-4,74246-0,55454-3,41995-2,17855-8,4549-2,17856-6,62388-4,71875-9,59261-8"
// Employment Status Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"
// Education Level Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"
// Patient Consent and Consent.performer
* entry[+].request.method = #GET
* entry[=].request.url = "/Consent?patient={{patient-id}}&_include=Consent:performer"
// Insurance Coverage and Coverage.subscriber
* entry[+].request.method = #GET
* entry[=].request.url = "/Coverage?patient={{patient-id}}_include=Coverage:subscriber"

---

// File: input/fsh/instances/bundle-batch-query-early-childhood-nutrition-request.fsh

Instance: bundle-batch-query-early-childhood-nutrition-request
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Early Childhood Nutrition Request Supporting Information Queries"
Description: "This Bundle is a batch of queries for definition and/or retrieval of supporting information for an early childhood nutrition referral request. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Each entry is used to represent a RESTful API request
// Patient - Baby
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Patient - Baby"
* entry[=].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id-baby}}"

// Patient - Mother
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Patient - Mother"
* entry[=].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id-mother}}"

// Blood Pressure Vital Sign Observation - Baby
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Blood Pressure - Baby"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-baby}}&category=vital-signs&code=85354-9"

// Blood Pressure Vital Sign Observation - Mother
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Blood Pressure - Mother"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-baby}}&category=vital-signs&code=85354-9"

// Body Height - Lying - Vital Sign Observation - Baby
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Height - Lying - Baby"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-baby}}&category=vital-signs&code=8302-2,8306-3"

// Body Height - Vital Sign Observation - Mother
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Height - Mother"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-baby}}&category=vital-signs&code=8302-2"

// BMI Vital Sign Observation - Mother
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index - Mother"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-mother}}&category=vital-signs&code=39156-5"

// Body Weight Observation - Baby
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index - Baby"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-baby}}&category=vital-signs&code=29463-7"

// Body Weight Observation - Mother
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index - Mother"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-mother}}&category=vital-signs&code=29463-7"

// Able to latch to breast
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Able to latch to breast"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-baby}}&code=288988007"

// Maternal concern
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Maternal concern"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-baby}}&code=270472006"

// Nipple shield
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Nipple shield"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-mother}}&code=335389008"

// Employment Status Social History Observation - Mother
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Employment Status - Mother"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-mother}}&category=social-history&code=74165-2"

// Education Level Social History Observation - Mother
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Education Level - Mother"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id-mother}}&category=social-history&code=82589-3"

---

// File: input/fsh/instances/bundle-batch-query-hypertension-feedback.fsh

Instance: bundle-batch-query-hypertension-feedback
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Hypertension Feedback"
Description: "This Bundle is a batch of requests to the FHIR RESTful API for referral feedback supporting information for a hypertension referral. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Each entry is used to represent a RESTful API request.This request retrieves a single Patient resource
* entry[0].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"
// Blood Pressure Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"
// Body Height Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"
// BMI Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"
// Body Weight Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"
// Ha1C Laboratory Result Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=laboratory&code=4548-4,74246-0,55454-3,41995-2,17855-8,4549-2,17856-6,62388-4,71875-9,59261-8"
// Employment Status Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"
// Education Level Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"
// Patient Consent and Consent.performer
* entry[+].request.method = #GET
* entry[=].request.url = "/Consent?patient={{patient-id}}&_include=Consent:performer"
// Insurance Coverage and Coverage.subscriber
* entry[+].request.method = #GET
* entry[=].request.url = "/Coverage?patient={{patient-id}}_include=Coverage:subscriber"

---

// File: input/fsh/instances/bundle-batch-query-hypertension-request.fsh

Instance: bundle-batch-query-hypertension-request
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Hypertension Request Supporting Information Queries"
Description: "This Bundle is a batch of queries for definition and/or retrieval of supporting information for a hypertension referral request. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Patient
* entry[0].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Patient"
* entry[=].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"

// Blood Pressure Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Blood Pressure"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"

// Body Height Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Height"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"

// BMI Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"

// Body Weight Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"

// Diagnosis - Hypertension
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Diagnosis - Hypertension"
* entry[=].request.method = #GET
* entry[=].request.url = "/Condition?patient={{patient-id}}&category=problem-list-item,health-concern&codein=https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.9/expansion/Latest"

// Employment Status Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Employment Status"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"

// Education Level Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Education Level"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"

---

// File: input/fsh/instances/bundle-batch-query-obesity-feedback.fsh

Instance: bundle-batch-query-obesity-feedback
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Obesity Feedback"
Description: "This Bundle is a batch of requests to the FHIR RESTful API for referral feedback supporting information for a obesity referral. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Each entry is used to represent a RESTful API request.This request retrieves a single Patient resource
* entry[0].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"
// Blood Pressure Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"
// Body Height Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"
// BMI Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"
// Body Weight Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"
// Ha1C Laboratory Result Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=laboratory&code=4548-4,74246-0,55454-3,41995-2,17855-8,4549-2,17856-6,62388-4,71875-9,59261-8"
// Employment Status Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"
// Education Level Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"
// Patient Consent and Consent.performer
* entry[+].request.method = #GET
* entry[=].request.url = "/Consent?patient={{patient-id}}&_include=Consent:performer"
// Insurance Coverage and Coverage.subscriber
* entry[+].request.method = #GET
* entry[=].request.url = "/Coverage?patient={{patient-id}}_include=Coverage:subscriber"

---

// File: input/fsh/instances/bundle-batch-query-obesity-request.fsh

Instance: bundle-batch-query-obesity-request
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Obesity Request Supporting Information Queries"
Description: "This Bundle is a batch of queries for definition and/or retrieval of supporting information for an obesity referral request. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Patient
* entry[0].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Patient"
* entry[=].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"

// Blood Pressure Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Blood Pressure"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"

// Body Height Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Height"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"

// BMI Vital Sign Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"

// Body Weight Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Body Mass Index"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"

// Allergies
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Allergies"
* entry[=].request.method = #GET
* entry[=].request.url = "/AllergyIntolerance?patient={PatientID}"

// Employment Status Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Employment Status"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"

// Education Level Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Education Level"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"

---

// File: input/fsh/instances/bundle-batch-query-tobacco-use-cessation-feedback.fsh

Instance: bundle-batch-query-tobacco-use-cessation-feedback
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Tobacco Use Cessation Feedback"
Description: "This Bundle is a batch of requests to the FHIR RESTful API for referral feedback supporting information for a tobacco use cessation referral. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Each entry is used to represent a RESTful API request.This request retrieves a single Patient resource
* entry[0].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"
// Blood Pressure Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=85354-9"
// Body Height Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=8302-2"
// BMI Vital Sign Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=39156-5"
// Body Weight Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=vital-signs&code=29463-7"
// Ha1C Laboratory Result Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=laboratory&code=4548-4,74246-0,55454-3,41995-2,17855-8,4549-2,17856-6,62388-4,71875-9,59261-8"
// Employment Status Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"
// Education Level Social History Observation
* entry[+].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"
// Patient Consent and Consent.performer
* entry[+].request.method = #GET
* entry[=].request.url = "/Consent?patient={{patient-id}}&_include=Consent:performer"
// Insurance Coverage and Coverage.subscriber
* entry[+].request.method = #GET
* entry[=].request.url = "/Coverage?patient={{patient-id}}_include=Coverage:subscriber"

---

// File: input/fsh/instances/bundle-batch-query-tobacco-use-cessation-request.fsh

Instance: bundle-batch-query-tobacco-use-cessation-request
InstanceOf: BSeRBundleBatchQueryReferralSupportingInfo
Title: "Batch Query Bundle - Tobacco Use Cessation Request Supporting Information Queries"
Description: "This Bundle is a batch of queries for definition and/or retrieval of supporting information for a tobacco use cessation referral request. Each entry is used to represent a RESTful API request."
Usage: #example

* type = #batch

// Patient
* entry[0].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Patient"
* entry[=].request.method = #GET
* entry[=].request.url = "/Patient/{{patient-id}}"

// Nicotine Replacement Therapy
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Nicotine Replacement Therapy"
* entry[=].request.method = #GET
* entry[=].request.url = "/Procedure?patient={{patient-id}}&code=151159008"

// Smoking Status Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Smoking Status"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"

// Employment Status Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Employment Status"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=74165-2"

// Education Level Social History Observation
* entry[+].request.extension.url = "http://hl7.org/fhir/us/bser/StructureDefinition/query-description"
* entry[=].request.extension.valueString = "Education Level"
* entry[=].request.method = #GET
* entry[=].request.url = "/Observation?patient={{patient-id}}&category=social-history&code=82589-3"

---

// File: input/fsh/instances/bundle-bser-referral-feedback-document-bundle-eve-everywoman.fsh

Instance: bundle-bser-referral-feedback-document-bundle-eve-everywoman
InstanceOf: BSeRReferralFeedbackDocumentBundle
Title: "Document Bundle - Eve Everywoman"
Description: "BSeR Referral Feedback Document Bundle: Eve Everywoman example"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:2be4b4e4-6df1-4cb2-a947-c70fa0eda54e"
* type = #document
* timestamp = "2020-01-07T09:25:00Z"
* entry[sliceBSeRComposition].fullUrl = "http://example.org/fhir/Composition/composition-bser-referral-feedback-arthritis-everywoman"
* entry[sliceBSeRComposition].resource = composition-bser-referral-feedback-arthritis-everywoman
* entry[1].fullUrl = "http://example.org/fhir/Observation/observation-bser-referral-observation-endurance-eve-everywoman"
* entry[=].resource = observation-bser-referral-observation-endurance-eve-everywoman
* entry[1].fullUrl = "http://example.org/fhir/Observation/observation-bser-referral-observation-pain-mgmt-eve-everywoman"
* entry[=].resource = observation-bser-referral-observation-pain-mgmt-eve-everywoman
* entry[2].fullUrl = "http://example.org/fhir/PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* entry[=].resource = practitionerrole-us-core-practitionerrole-referral-recipient
* entry[4].fullUrl = "http://example.org/fhir/Patient/patient-us-core-patient-eve-everywoman"
* entry[=].resource = patient-us-core-patient-eve-everywoman
* entry[5].fullUrl = "http://example.org/fhir/Organization/organization-us-core-organization-saint-luke"
* entry[=].resource = organization-us-core-organization-saint-luke
* entry[6].fullUrl = "http://example.org/fhir/Practitioner/practitioner-us-core-practitioner-hailey-eight"
* entry[=].resource = practitioner-us-core-practitioner-hailey-eight
* entry[7].fullUrl = "http://example.org/fhir/ServiceRequest/servicerequest-bser-referral-servicerequest-arthritis"
* entry[=].resource = servicerequest-bser-referral-servicerequest-arthritis

---

// File: input/fsh/instances/bundle-bser-referral-message-bundle-eve-everywoman.fsh

Instance: bundle-bser-referral-message-bundle-eve-everywoman
InstanceOf: BSeRReferralMessageBundle
Title: "Message Bundle - Eve Everywoman"
Description: "BSeR Referral Message Bundle: Eve Everywoman example"
Usage: #example
* type = #message
* entry[0].fullUrl = "http://example.org/fhir/MessageHeader/messageheader-bser-referral-messageheader"
* entry[=].resource = messageheader-bser-referral-messageheader
* entry[+].fullUrl = "http://example.org/fhir/ServiceRequest/servicerequest-bser-referral-servicerequest-arthritis"
* entry[=].resource = servicerequest-bser-referral-servicerequest-arthritis
* entry[+].fullUrl = "http://example.org/fhir/Patient/patient-us-core-patient-eve-everywoman"
* entry[=].resource = patient-us-core-patient-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Task/task-bser-referral-task"
* entry[=].resource = task-bser-referral-task
* entry[+].fullUrl = "http://example.org/fhir/PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* entry[=].resource = practitionerrole-us-core-practitionerrole-referral-initiator
* entry[+].fullUrl = "http://example.org/fhir/PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* entry[=].resource = practitionerrole-us-core-practitionerrole-referral-recipient
* entry[+].fullUrl = "http://example.org/fhir/Organization/organization-us-core-organization-saint-luke"
* entry[=].resource = organization-us-core-organization-saint-luke
* entry[+].fullUrl = "http://example.org/fhir/Coverage/coverage-bser-coverage-eve-everywoman"
* entry[=].resource = coverage-bser-coverage-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Bundle/bundle-bser-referral-request-document-bundle-eve-everywoman"
* entry[=].resource = bundle-bser-referral-request-document-bundle-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Consent/consent-bser-patientconsent-eve-everywoman"
* entry[=].resource = consent-bser-patientconsent-eve-everywoman

---

// File: input/fsh/instances/bundle-bser-referral-request-document-bundle-baby-everybaby.fsh

Instance: bundle-bser-referral-request-document-bundle-baby-everybaby
InstanceOf: BSeRReferralRequestDocumentBundle
Title: "Document Bundle - Baby Everybaby - Early Childhood Nutrition"
Description: "BSeR Referral Request Document Bundle: Baby Everybaby - Early Childhood Nutrition"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:2be4b4e4-6de1-4cb2-a947-c70fa0fda54c"
* type = #document
* timestamp = "2020-01-06T22:13:23Z"
* entry[0].fullUrl = "http://example.org/fhir/Composition/composition-bser-referral-request-nutrition-everybaby"
* entry[=].resource = composition-bser-referral-request-nutrition-everybaby
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-bser-nutritionobs-baby-everybaby"
* entry[=].resource = observation-bser-nutritionobs-baby-everybaby
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-blood-pressure-baby-everybaby"
* entry[=].resource = observation-us-core-blood-pressure-baby-everybaby
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-body-height-baby-everybaby"
* entry[=].resource = observation-us-core-body-height-baby-everybaby
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-body-weight-baby-everybaby"
* entry[=].resource = observation-us-core-body-weight-baby-everybaby
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-blood-pressure-mom-everymom"
* entry[=].resource = observation-us-core-blood-pressure-mom-everymom
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-body-height-mom-everymom"
* entry[=].resource = observation-us-core-body-height-mom-everymom
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-body-weight-mom-everymom"
* entry[=].resource = observation-us-core-body-weight-mom-everymom
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-bmi-mom-everymom"
* entry[=].resource = observation-us-core-bmi-mom-everymom
* entry[+].fullUrl = "http://example.org/fhir/PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* entry[=].resource = practitionerrole-us-core-practitionerrole-referral-initiator
* entry[+].fullUrl = "http://example.org/fhir/Patient/patient-us-core-patient-baby-everybaby"
* entry[=].resource = patient-us-core-patient-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Patient/patient-us-core-patient-mom-everymom"
* entry[=].resource = patient-us-core-patient-mom-everymom
* entry[+].fullUrl = "http://example.org/fhir/RelatedPerson/relatedperson-us-core-relatedperson-mom-everymom"
* entry[=].resource = relatedperson-us-core-relatedperson-mom-everymom
* entry[+].fullUrl = "http://example.org/fhir/Practitioner/practitioner-us-core-practitioner-henry-seven"
* entry[=].resource = practitioner-us-core-practitioner-henry-seven
* entry[+].fullUrl = "http://example.org/fhir/Organization/organization-us-core-organization-saint-luke"
* entry[=].resource = organization-us-core-organization-saint-luke

---

// File: input/fsh/instances/bundle-bser-referral-request-document-bundle-eve-everywoman.fsh

Instance: bundle-bser-referral-request-document-bundle-eve-everywoman
InstanceOf: BSeRReferralRequestDocumentBundle
Title: "Document Bundle - Eve Everywoman - Arthritis"
Description: "BSeR Referral Request Document Bundle: Eve Everywoman Arthritis example"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:2be4b4e4-6df1-4cb2-a947-c70fa0eda54c"
* type = #document
* timestamp = "2020-01-06T22:13:23Z"
* entry[0].fullUrl = "http://example.org/fhir/Composition/composition-bser-referral-request-arthritis-everywoman"
* entry[=].resource = composition-bser-referral-request-arthritis-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-blood-pressure-eve-everywoman"
* entry[=].resource = observation-us-core-blood-pressure-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-body-height-eve-everywoman"
* entry[=].resource = observation-us-core-body-height-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* entry[=].resource = practitionerrole-us-core-practitionerrole-referral-initiator
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-bmi-eve-everywoman"
* entry[=].resource = observation-us-core-bmi-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-social-history-education-eve-everywoman"
* entry[=].resource = observation-us-core-social-history-education-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/MedicationRequest/medicationrequest-us-core-medicationrequest-eve-everywoman"
* entry[=].resource = medicationrequest-us-core-medicationrequest-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Observation/observation-us-core-body-weight-eve-everywoman"
* entry[=].resource = observation-us-core-body-weight-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Patient/patient-us-core-patient-eve-everywoman"
* entry[=].resource = patient-us-core-patient-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/AllergyIntolerance/allergyintolerance-us-core-allergyint-eve-everywoman"
* entry[=].resource = allergyintolerance-us-core-allergyint-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Practitioner/practitioner-us-core-practitioner-henry-seven"
* entry[=].resource = practitioner-us-core-practitioner-henry-seven
* entry[+].fullUrl = "http://example.org/fhir/Organization/organization-us-core-organization-saint-luke"
* entry[=].resource = organization-us-core-organization-saint-luke
// * entry[+].fullUrl = "http://example.org/fhir/Observation/observation-odh-employment-status-eve-everywoman"
// * entry[=].resource = observation-odh-employment-status-eve-everywoman

---

// File: input/fsh/instances/capabilitystatement-bser.fsh

Instance: capabilitystatement-bser
InstanceOf: CapabilityStatement
Title: "Capability Statement -BSeR"
Description: "Capability Statement: BSeR - defines the expected capabilities for both client and server participating in BSeR exchange"
Usage: #definition
* url = "http://hl7.org/fhir/us/bser/CapabilityStatement/capabilitystatement-bser"
* version = "1.0.0"
* name = "CapabilityStatement_BSeR"
* title = "Capability Statement BSeR"
* status = #active
* experimental = false
* date = "2019-11-26"
* publisher = "HL7 Public Health Work Group"
* description = "This resource defines the expected capabilities for both client and server participating in BSeR exchange"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* jurisdiction.text = "United States of America"
* kind = #requirements
* fhirVersion = #4.0.0
* format[0] = #xml
* format[+] = #json
// * implementationGuide = "http://hl7.org/fhir/us/bser/ImplementationGuide/hl7.fhir.us.bser"
* rest[0].mode = #client
* rest[=].resource[0].type = #Observation
// * rest[=].resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-HA1C-Observation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-EducationLevel"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-ArthritisFeedbackObservation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-TobaccoUseCessationFeedbackObservation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-EarlyChildhoodNutritionObservation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-EarlyChildhoodNutritionFeedbackObservation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-TobaccoUseCessationFeedbackObservation"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/bser-referral-observation"
* rest[=].resource[=].interaction[0].code = #create
* rest[=].resource[=].interaction[+].code = #read
* rest[=].resource[=].interaction[+].code = #update
* rest[=].resource[=].interaction[+].code = #delete
* rest[=].resource[+].type = #Coverage
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-Coverage"
* rest[=].resource[=].interaction[0].code = #create
* rest[=].resource[=].interaction[+].code = #read
* rest[=].resource[=].interaction[+].code = #update
* rest[=].resource[=].interaction[+].code = #delete
* rest[=].resource[+].type = #Condition
* rest[=].resource[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-problems-health-concerns"
* rest[=].resource[=].interaction[0].code = #create
* rest[=].resource[=].interaction[+].code = #read
* rest[=].resource[=].interaction[+].code = #update
* rest[=].resource[=].interaction[+].code = #delete
* rest[=].resource[+].type = #MedicationRequest
* rest[=].resource[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
* rest[=].resource[=].interaction[0].code = #create
* rest[=].resource[=].interaction[+].code = #read
* rest[=].resource[=].interaction[+].code = #update
* rest[=].resource[=].interaction[+].code = #delete
* rest[+].mode = #server
* rest[=].resource[0].type = #Observation
// * rest[=].resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-HA1C-Observation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-EducationLevel"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-ArthritisFeedbackObservation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-TobaccoUseCessationFeedbackObservation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-EarlyChildhoodNutritionObservation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-EarlyChildhoodNutritionFeedbackObservation"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/bser-referral-observation"
// * rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-ParticipationFeedbackObservation"
* rest[=].resource[=].interaction[0].code = #create
* rest[=].resource[=].interaction[+].code = #read
* rest[=].resource[=].interaction[+].code = #update
* rest[=].resource[=].interaction[+].code = #delete
* rest[=].resource[+].type = #Coverage
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-Coverage"
* rest[=].resource[=].interaction[0].code = #create
* rest[=].resource[=].interaction[+].code = #read
* rest[=].resource[=].interaction[+].code = #update
* rest[=].resource[=].interaction[+].code = #delete
* rest[=].resource[+].type = #Condition
* rest[=].resource[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-problems-health-concerns"
* rest[=].resource[=].interaction[0].code = #create
* rest[=].resource[=].interaction[+].code = #read
* rest[=].resource[=].interaction[+].code = #update
* rest[=].resource[=].interaction[+].code = #delete
* rest[=].resource[+].type = #MedicationRequest
* rest[=].resource[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
* rest[=].resource[=].interaction[0].code = #create
* rest[=].resource[=].interaction[+].code = #read
* rest[=].resource[=].interaction[+].code = #update
* rest[=].resource[=].interaction[+].code = #delete

---

// File: input/fsh/instances/composition-bser-referral-feedback-arthritis-everywoman.fsh

Instance: composition-bser-referral-feedback-arthritis-everywoman
InstanceOf: BSeRReferralFeedbackComposition
Title: "Composition - Eve Everywoman - Arthritis Referral Feedback"
Description: "BSeR Referral Feedback Composition: Eve Everywoman - Arthritis example"
Usage: #example
* status = #final
* type = $loinc#11488-4 "Consult note"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* date = "2020-01-03T11:15:23Z"
* author.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* author.display = "Hailey Eight, MD"
* title = "Referral feedback"
* section[referralServiceRequestFeedbackSummary].title = "Referral Service Request Feedback Summary"
* section[referralServiceRequestFeedbackSummary].code = BSeR#RSRFS "CompositionSectionReferralServiceRequestFeedbackSummary"
* section[referralServiceRequestFeedbackSummary].focus.reference = "ServiceRequest/servicerequest-bser-referral-servicerequest-arthritis"
* section[arthritisReferralFeedbackSupportingInformation].title = "Arthritis Referral Feedback Supporting Information"
* section[arthritisReferralFeedbackSupportingInformation].code = BSeR#ARFSI "Arthritis Referral Feedback Supporting Information"
* section[arthritisReferralFeedbackSupportingInformation].entry.reference = "Observation/observation-bser-referral-observation-endurance-eve-everywoman"
* section[arthritisReferralFeedbackSupportingInformation].entry.reference = "Observation/observation-bser-referral-observation-pain-mgmt-eve-everywoman"

---

// File: input/fsh/instances/composition-bser-referral-feedback-nutrition-everybaby.fsh

Instance: composition-bser-referral-feedback-nutrition-everybaby
InstanceOf: BSeRReferralFeedbackComposition
Title: "Composition - Baby Everybaby - Early Childhood Nutrition Referral Feedback"
Description: "BSeR Referral Feedback Composition: Baby Everybaby - Early Childhood Nutrition example"
Usage: #example
* status = #final
* type = $loinc#11488-4 "Consult note"
* subject.reference = "Patient/patient-us-core-patient-baby-everybaby"
* subject.display = "Baby Everybaby"
* date = "2020-01-02T22:13:23Z"
* author.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* author.display = "Hailey Eight, MD"
* title = "Referral feedback"
* section[referralServiceRequestFeedbackSummary].title = "Referral Service Request Feedback Summary"
* section[referralServiceRequestFeedbackSummary].code = BSeR#RSRFS "CompositionSectionReferralServiceRequestFeedbackSummary"
* section[referralServiceRequestFeedbackSummary].focus.reference = "ServiceRequest/servicerequest-bser-referral-servicerequest-early-childhood"
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].title = "Early Childhood Nutrition Referral Feedback Supporting Information"
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].code = BSeR#ECNRFSI "Early Childhood Nutrition Referral Feedback Supporting Information"
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry[earlyChildhoodNutritionFeedbackObservation].reference = "Observation/observation-bser-referral-observation-lactation-baby-everybaby"
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry[earlyChildhoodNutritionFeedbackObservation].reference = "Observation/observation-bser-nutritionfeedbackobs-2-baby-everybaby"

---

// File: input/fsh/instances/composition-bser-referral-request-arthritis-everywoman.fsh

Instance: composition-bser-referral-request-arthritis-everywoman
InstanceOf: BSeRReferralRequestComposition
Title: "Composition - Eve Everywoman - Arthritis Referral Request"
Description: "BSeR Referral Request Composition: Eve Everywoman - Arthritis example"
Usage: #example
* status = #final
* type = $loinc#57133-1 "Referral note"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* date = "2020-01-02T22:13:23Z"
* author.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* author.display = "Henry Seven, MD"
* title = "Referral request"
* section[otherSupportingInformation].title = "Other Supporting Information"
* section[otherSupportingInformation].code = BSeR#OSI "Other Supporting Information"
// * section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-odh-employment-status-eve-everywoman"
* section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-us-core-social-history-education-eve-everywoman"
* section[arthritisReferralSupportingInformation].title = "Arthritis Referral Request Supporting Information"
* section[arthritisReferralSupportingInformation].code = BSeR#ARSI "Arthritis Referral Supporting Information"
* section[arthritisReferralSupportingInformation].entry[allergyIntolerance].reference = "AllergyIntolerance/allergyintolerance-us-core-allergyint-eve-everywoman"
* section[arthritisReferralSupportingInformation].entry[medicationRequest].reference = "MedicationRequest/medicationrequest-us-core-medicationrequest-eve-everywoman"
* section[arthritisReferralSupportingInformation].entry[bloodPressure].reference = "Observation/observation-us-core-blood-pressure-eve-everywoman"
* section[arthritisReferralSupportingInformation].entry[bodyHeight].reference = "Observation/observation-us-core-body-height-eve-everywoman"
* section[arthritisReferralSupportingInformation].entry[bodyWeight].reference = "Observation/observation-us-core-body-weight-eve-everywoman"
* section[arthritisReferralSupportingInformation].entry[bmi].reference = "Observation/observation-us-core-bmi-eve-everywoman"

---

// File: input/fsh/instances/composition-bser-referral-request-diabetes-everywoman.fsh

Instance: composition-bser-referral-request-diabetes-everywoman
InstanceOf: BSeRReferralRequestComposition
Title: "Composition - Eve Everywoman - Diabetes Prevention Referral Request"
Description: "BSeR Referral Request Composition: Eve Everywoman - Diabetes Prevention example"
Usage: #example
* status = #final
* type = $loinc#57133-1 "Referral note"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* date = "2020-01-02T22:13:23Z"
* author.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* author.display = "Henry Seven, MD"
* title = "Referral request"
* section[otherSupportingInformation].title = "Other Supporting Information"
* section[otherSupportingInformation].code = BSeR#OSI "Other Supporting Information"
// * section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-odh-employment-status-eve-everywoman"
* section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-us-core-social-history-education-eve-everywoman"
* section[diabetesPreventionReferralSupportingInformation].title = "Diabetes Prevention Referral Request Supporting Information"
* section[diabetesPreventionReferralSupportingInformation].code = BSeR#DPRSI "Diabetes Prevention Referral Supporting Information"
* section[diabetesPreventionReferralSupportingInformation].entry[hA1c].reference = "Observation/observation-us-core-observation-lab-ha1c-eve-everywoman"
* section[diabetesPreventionReferralSupportingInformation].entry[bloodPressure].reference = "Observation/observation-us-core-blood-pressure-eve-everywoman"
* section[diabetesPreventionReferralSupportingInformation].entry[bodyHeight].reference = "Observation/observation-us-core-body-height-eve-everywoman"
* section[diabetesPreventionReferralSupportingInformation].entry[bodyWeight].reference = "Observation/observation-us-core-body-weight-eve-everywoman"
* section[diabetesPreventionReferralSupportingInformation].entry[bmi].reference = "Observation/observation-us-core-bmi-eve-everywoman"

---

// File: input/fsh/instances/composition-bser-referral-request-hypertension-everywoman.fsh

Instance: composition-bser-referral-request-hypertension-everywoman
InstanceOf: BSeRReferralRequestComposition
Title: "Composition - Eve Everywoman - Hypertension Referral Request"
Description: "BSeR Referral Request Composition: Eve Everywoman - Hypertension example"
Usage: #example
* status = #final
* type = $loinc#57133-1 "Referral note"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* date = "2020-01-02T22:13:23Z"
* author.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* author.display = "Henry Seven, MD"
* title = "Referral request"
* section[otherSupportingInformation].title = "Other Supporting Information"
* section[otherSupportingInformation].code = BSeR#OSI "Other Supporting Information"
// * section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-odh-employment-status-eve-everywoman"
* section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-us-core-social-history-education-eve-everywoman"
* section[hypertensionReferralSupportingInformation].title = "Hypertension Referral Request Supporting Information"
* section[hypertensionReferralSupportingInformation].code = BSeR#HRSI "Hypertension Referral Supporting Information"
* section[hypertensionReferralSupportingInformation].entry[diagnosis].reference = "Condition/condition-us-core-cphc-eve-everywoman-hypertension"
* section[hypertensionReferralSupportingInformation].entry[bloodPressure].reference = "Observation/observation-us-core-blood-pressure-eve-everywoman"
* section[hypertensionReferralSupportingInformation].entry[bodyHeight].reference = "Observation/observation-us-core-body-height-eve-everywoman"
* section[hypertensionReferralSupportingInformation].entry[bodyWeight].reference = "Observation/observation-us-core-body-weight-eve-everywoman"
* section[hypertensionReferralSupportingInformation].entry[bmi].reference = "Observation/observation-us-core-bmi-eve-everywoman"

---

// File: input/fsh/instances/composition-bser-referral-request-nutrition-everybaby.fsh

Instance: composition-bser-referral-request-nutrition-everybaby
InstanceOf: BSeRReferralRequestComposition
Title: "Composition - Baby Everybaby - Early Childhood Nutrition Referral Request"
Description: "BSeR Referral Request Composition: Baby Everybaby - Early Childhood Nutrition example"
Usage: #example
* status = #final
* type = $loinc#57133-1 "Referral note"
* subject.reference = "Patient/patient-us-core-patient-baby-everybaby"
* subject.display = "Baby Everybaby"
* date = "2020-01-02T22:13:23Z"
* author.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* author.display = "Henry Seven, MD"
* title = "Referral request"
* section[earlyChildhoodNutritionReferralSupportingInformation].title = "Early Childhood Nutrition Referral Supporting Information Baby"
* section[earlyChildhoodNutritionReferralSupportingInformation].code = BSeR#ECNRSIB "Early Childhood Nutrition Referral Supporting Information Baby"
* section[earlyChildhoodNutritionReferralSupportingInformation].entry[earlyChildhoodNutritionObservation].reference = "Observation/observation-bser-nutritionobs-baby-everybaby"
* section[earlyChildhoodNutritionReferralSupportingInformation].entry[babyBloodPressure].reference = "Observation/observation-us-core-blood-pressure-baby-everybaby"
* section[earlyChildhoodNutritionReferralSupportingInformation].entry[babyBodyHeightLying].reference = "Observation/observation-us-core-body-height-baby-everybaby"
* section[earlyChildhoodNutritionReferralSupportingInformation].entry[babyBodyWeight].reference = "Observation/observation-us-core-body-weight-baby-everybaby"
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].code = BSeR#ECNRSIM "Early Childhood Nutrition Referral Supporting Information Mother"
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].focus.reference = "Patient/patient-us-core-patient-mom-everymom"
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry[motherBloodPressure].reference = "Observation/observation-us-core-blood-pressure-mom-everymom"
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry[motherBodyHeight].reference = "Observation/observation-us-core-body-height-mom-everymom"
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry[motherBodyWeight].reference = "Observation/observation-us-core-body-weight-mom-everymom"
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry[motherBmi].reference = "Observation/observation-us-core-bmi-mom-everymom"

---

// File: input/fsh/instances/composition-bser-referral-request-obesity-everywoman.fsh

Instance: composition-bser-referral-request-obesity-everywoman
InstanceOf: BSeRReferralRequestComposition
Title: "Composition - Eve Everywoman - Obesity Referral Request"
Description: "BSeR Referral Request Composition: Eve Everywoman - Obesity example"
Usage: #example
* status = #final
* type = $loinc#57133-1 "Referral note"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* date = "2020-01-02T22:13:23Z"
* author.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* author.display = "Henry Seven, MD"
* title = "Referral request"
* section[otherSupportingInformation].title = "Other Supporting Information"
* section[otherSupportingInformation].code = BSeR#OSI "Other Supporting Information"
* section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-odh-employment-status-eve-everywoman"
* section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-us-core-social-history-education-eve-everywoman"
* section[obesityReferralSupportingInformation].title = "Obesity Referral Request Supporting Information"
* section[obesityReferralSupportingInformation].code = BSeR#ORSI "Obesity Referral Supporting Information"
* section[obesityReferralSupportingInformation].entry[allergyIntolerance].reference = "AllergyIntolerance/allergyintolerance-us-core-allergyint-eve-everywoman"
* section[obesityReferralSupportingInformation].entry[bloodPressure].reference = "Observation/observation-us-core-blood-pressure-eve-everywoman"
* section[obesityReferralSupportingInformation].entry[bodyHeight].reference = "Observation/observation-us-core-body-height-eve-everywoman"
* section[obesityReferralSupportingInformation].entry[bodyWeight].reference = "Observation/observation-us-core-body-weight-eve-everywoman"
* section[obesityReferralSupportingInformation].entry[bmi].reference = "Observation/observation-us-core-bmi-eve-everywoman"

---

// File: input/fsh/instances/composition-bser-referral-request-tobacco-everywoman.fsh

Instance: composition-bser-referral-request-tobacco-everywoman
InstanceOf: BSeRReferralRequestComposition
Title: "Composition - Eve Everywoman - Tobacco Use Cessation Referral Request"
Description: "BSeR Referral Request Composition: Eve Everywoman - Tobacco Use Cessation example"
Usage: #example
* status = #final
* type = $loinc#57133-1 "Referral note"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* date = "2020-01-02T22:13:23Z"
* author.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* author.display = "Henry Seven, MD"
* title = "Referral request"
* section[otherSupportingInformation].title = "Other Supporting Information"
* section[otherSupportingInformation].code = BSeR#OSI "Other Supporting Information"
* section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-odh-employment-status-eve-everywoman"
* section[otherSupportingInformation].entry[employmentStatusOrEducationLevel].reference = "Observation/observation-us-core-social-history-education-eve-everywoman"
* section[tobaccoUseCessationReferralSupportingInformation].title = "Tobacco Cessation Referral Request Supporting Information"
* section[tobaccoUseCessationReferralSupportingInformation].code = BSeR#TUCRSI "Tobacco Use Cessation Referral Supporting Information"
* section[tobaccoUseCessationReferralSupportingInformation].entry[nrtAuthorizationStatus].reference = "Procedure/procedure-us-core-procedure-nicotine-replacement-eve-everywoman"
* section[tobaccoUseCessationReferralSupportingInformation].entry[smokingStatus].reference = "Observation/observation-us-core-smokingstatus-eve-everywoman"
* section[tobaccoUseCessationReferralSupportingInformation].entry[telcomCommunicationPreferences].reference = "Observation/observation-bser-telcomcomm-eve-everywoman"

---

// File: input/fsh/instances/condition-us-core-cphc-eve-everywoman-diabetes.fsh

Instance: condition-us-core-cphc-eve-everywoman-hypertension
InstanceOf: USCoreConditionProblemsHealthConcernsProfile
Title: "Condition - Hypertension - Eve Everywoman"
Description: "US Core Condition Problems Health Concerns: Hypertension - Eve Everywoman example"
Usage: #example
* category = $condition-category#problem-list-item "Problem List Item"
* code = $sct#38341003 "Hypertensive disorder, systemic arterial (disorder)"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* onsetDateTime = "2017-08-23"
* asserter.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* asserter.display = "Hailey Eight, MD"

---

// File: input/fsh/instances/consent-bser-patientconsent-baby-everybaby.fsh

Instance: consent-bser-patientconsent-baby-everybaby
InstanceOf: BSeRPatientConsent
Title: "Consent - Baby Everybaby"
Description: "BSeR Patient Consent: Baby Everybaby example"
Usage: #example
* status = #active
* scope = $consentscope#patient-privacy
* category = $v3-ActCode#INFA "information access"
* patient.reference = "Patient/patient-us-core-patient-baby-everybaby"
* patient.display = "Baby Everybaby"
* dateTime = "2019-05-23"
* performer.reference = "RelatedPerson/relatedperson-us-core-relatedperson-mom-everymom"
* performer.display = "Mom Everymom"
* policyRule = $v3-ActCode#OPTIN
* provision.type = #permit
* provision.actor.role = $v3-ParticipationType#CST
* provision.actor.reference.reference = "Organization/organization-us-core-organization-saint-luke"
* provision.action = $consentaction#access

---

// File: input/fsh/instances/consent-bser-patientconsent-eve-everywoman.fsh

Instance: consent-bser-patientconsent-eve-everywoman
InstanceOf: BSeRPatientConsent
Title: "Consent - Eve Everywoman"
Description: "BSeR Patient Consent: Eve Everywoman example"
Usage: #example
* status = #active
* scope = $consentscope#patient-privacy
* category = $v3-ActCode#INFA "information access"
* patient.reference = "Patient/patient-us-core-patient-eve-everywoman"
* patient.display = "Eve Everywoman"
* dateTime = "2019-05-23"
* performer.reference = "Patient/patient-us-core-patient-eve-everywoman"
* performer.display = "Eve Everywoman"
* policyRule = $v3-ActCode#OPTIN
* provision.type = #permit
* provision.actor.role = $v3-ParticipationType#CST
* provision.actor.reference.reference = "Organization/organization-us-core-organization-saint-luke"
* provision.action = $consentaction#access

---

// File: input/fsh/instances/coverage-bser-coverage-baby-everybaby.fsh

Instance: coverage-bser-coverage-baby-everybaby
InstanceOf: BSeRCoverage
Title: "Coverage - Baby Everybaby"
Description: "BSeR Coverage: Baby Everybaby example"
Usage: #example
* identifier[memberid].type = $v2-0203#MB "Member Number"
* identifier[memberid].system = "http://benefitsinc.com/certificate"
* identifier[memberid].value = "12345"
* status = #active
* type = $v3-ActCode#EHCPOL "extended healthcare"
* subscriber.reference = "RelatedPerson/relatedperson-us-core-relatedperson-mom-everymom"
* subscriber.display = "Mom Everymom"
* beneficiary.reference = "Patient/patient-us-core-patient-baby-everybaby"
* beneficiary.display = "Baby Everybaby"
* relationship = $v3-RoleCode#GESTM "gestational mother"
* relationship.text = "gestational mother"
* period.start = "2019-05-23"
* period.end = "2020-05-23"
* payor.reference = "Organization/organization-us-core-organization-saint-luke"
* class[group].type = $coverage-class#group
* class[group].value = "CB135"
* class[group].name = "Corporate Baker's Inc. Local #35"
* class[+].type = $coverage-class#subgroup
* class[=].value = "123"
* class[=].name = "Trainee Part-time Benefits"
* class[plan].type = $coverage-class#plan
* class[plan].value = "B37FC"
* class[plan].name = "Full Coverage: Medical, Dental, Pharmacy, Vision, EHC"
* class[+].type = $coverage-class#subplan
* class[=].value = "P7"
* class[=].name = "Includes afterlife benefits"
* class[+].type = $coverage-class#class
* class[=].value = "SILVER"
* class[=].name = "Silver: Family Plan spouse only"
* class[+].type = $coverage-class#subclass
* class[=].value = "Tier2"
* class[=].name = "Low deductible, max $20 copay"
* class[+].type = $coverage-class#sequence
* class[=].value = "9"
* class[+].type = $coverage-class#rxid
* class[=].value = "MDF12345"
* class[+].type = $coverage-class#rxbin
* class[=].value = "987654"
* class[+].type = $coverage-class#rxgroup
* class[=].value = "M35PT"
* class[+].type = $coverage-class#rxpcn
* class[=].value = "234516"
* class[+].type = $coverage-class#sequence
* class[=].value = "9"

---

// File: input/fsh/instances/coverage-bser-coverage-eve-everywoman.fsh

Instance: coverage-bser-coverage-eve-everywoman
InstanceOf: BSeRCoverage
Title: "Coverage - Eve Everywoman"
Description: "BSeR Coverage: Eve Everywoman example"
Usage: #example
* identifier[memberid].type = $v2-0203#MB "Member Number"
* identifier[memberid].system = "http://benefitsinc.com/certificate"
* identifier[memberid].value = "12345"
* status = #active
* type = $v3-ActCode#EHCPOL "extended healthcare"
* subscriber.reference = "RelatedPerson/relatedperson-us-core-relatedperson-self-eve-everywoman"
* subscriber.display = "Eve Everywoman"
* beneficiary.reference = "Patient/patient-us-core-patient-eve-everywoman"
* beneficiary.display = "Eve Everywoman"
* relationship = $v3-RoleCode#ONESELF "self"
* relationship.text = "self"
* period.start = "2019-05-23"
* period.end = "2020-05-23"
* payor.reference = "Organization/organization-us-core-organization-saint-luke"
* class[group].type = $coverage-class#group
* class[group].value = "CB135"
* class[group].name = "Corporate Baker's Inc. Local #35"
* class[+].type = $coverage-class#subgroup
* class[=].value = "123"
* class[=].name = "Trainee Part-time Benefits"
* class[plan].type = $coverage-class#plan
* class[plan].value = "B37FC"
* class[=].name = "Full Coverage: Medical, Dental, Pharmacy, Vision, EHC"
* class[+].type = $coverage-class#subplan
* class[=].value = "P7"
* class[=].name = "Includes afterlife benefits"
* class[+].type = $coverage-class#class
* class[=].value = "SILVER"
* class[=].name = "Silver: Family Plan spouse only"
* class[+].type = $coverage-class#subclass
* class[=].value = "Tier2"
* class[=].name = "Low deductible, max $20 copay"
* class[+].type = $coverage-class#sequence
* class[=].value = "9"
* class[+].type = $coverage-class#rxid
* class[=].value = "MDF12345"
* class[+].type = $coverage-class#rxbin
* class[=].value = "987654"
* class[+].type = $coverage-class#rxgroup
* class[=].value = "M35PT"
* class[+].type = $coverage-class#rxpcn
* class[=].value = "234516"
* class[+].type = $coverage-class#sequence
* class[=].value = "9"

---

// File: input/fsh/instances/location-us-core-location-st-luke.fsh

Instance: location-us-core-location-st-luke
InstanceOf: USCoreLocation
Title: "Location - Referral Center A, St. Lukes"
Description: "US Core Location: Referral Center A, St. Lukes example"
Usage: #example
* status = #active
* name = "Referral Center A, St. Lukes"
* type = $v3-RoleCode#HOSP "Hospital"
* telecom[0].system = #phone
* telecom[=].value = "(+1) (555)555-3001"
* telecom[+].system = #fax
* telecom[=].value = "(+1) (555)555-3002"
* telecom[+].system = #email
* telecom[=].value = "mail@smc.org"
* address.line = "4401 Wornall Rd,"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "64111"
* managingOrganization.reference = "Organization/organization-us-core-organization-saint-luke"

---

// File: input/fsh/instances/medication-bser-tobacco-use-cessation-feedback-eve-everywoman.fsh

Instance: medication-bser-tobacco-use-cessation-feedback-eve-everywoman
InstanceOf: BSeRTobaccoUseCessationFeedbackMedication
Title: "Medication - bupropion - Eve Everywoman"
Description: "Medication: bupropion - Eve Everywoman example"
Usage: #example
* code = $rxnorm#1801289 "bupropion HCl 150 MG Smoking Cessation 12 HR Extended Release Oral Tablet"
* status = #active

---

// File: input/fsh/instances/medicationrequest-us-core-medicationrequest-eve-everywoman.fsh

Instance: medicationrequest-us-core-medicationrequest-eve-everywoman
InstanceOf: USCoreMedicationRequestProfile
Title: "MedicationRequest - Amoxicillin - Eve Everywoman"
Description: "US Core MedicationRequest: Amoxicillin - Eve Everywoman example"
Usage: #example
* status = #active
* intent = #instance-order
* medicationCodeableConcept = $sct#27658006 "Amoxicillin-containing product"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* authoredOn = "2019-01-17"
* requester.reference = "Practitioner/practitioner-us-core-practitioner-hailey-eight"
* dosageInstruction.text = "bid"

---

// File: input/fsh/instances/messageheader-bser-referral-messageheader.fsh

Instance: messageheader-bser-referral-messageheader
InstanceOf: BSeRReferralMessageHeader
Title: "MessageHeader - Patient Referral - Saint Lukes"
Description: "BSeR Referral MessageHeader: Patient Referral - Saint Lukes example"
Usage: #example
* eventCoding = $v2-0003#I12 "REF/RRI - Patient referral"
* destination.endpoint = "http://www.saintlukeshealthsystem.org/fhir/endpoint"
* destination.receiver.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* sender.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* source.name = "Acme Central Patient Registry"
* source.software = "FooBar Patient Manager"
* source.version = "3.1.45.AABB"
* source.contact.system = #phone
* source.contact.value = "+1 (555) 123 4567"
* source.endpoint = "http://www.saintlukeshealthsystem.org/fhir"
* reason = $v2-0003#I12 "REF/RRI - Patient referral"
* focus.reference = "Task/task-bser-referral-task"

---

// File: input/fsh/instances/observation-bser-nutritionfeedbackobs-2-baby-everybaby.fsh

Instance: observation-bser-nutritionfeedbackobs-2-baby-everybaby
InstanceOf: BSeRReferralObservation
Title: "Observation - Painful lactation - Baby Everybaby"
Description: "BSeR Early Childhood Nutrition Feedback Observation: Painful lactation - Baby Everybaby example"
Usage: #example
* status = #final
* code = $sct#364826005 "Finding related to ability to perform breast-feeding (finding)"
* code.text = "Finding related to ability to perform breast-feeding (finding)"
* subject.reference = "Patient/patient-us-core-patient-baby-everybaby"
* subject.display = "Baby Everybaby"
* effectiveDateTime = "2019-01-17"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* valueCodeableConcept = $sct#247415009 "Painful lactation (finding)"
* valueCodeableConcept.text = "Painful lactation (finding)"

---

// File: input/fsh/instances/observation-bser-nutritionobs-baby-everybaby.fsh

Instance: observation-bser-nutritionobs-baby-everybaby
InstanceOf: BSeRReferralObservation
Title: "Observation - Latch to Breast - Baby Everybaby"
Description: "BSeR Early Childhood Nutrition Observation: Latch to Breast - Baby Everybaby example"
Usage: #example
* status = #final
* code = $sct#288988007 "Able to latch on to breast for feeding (finding)"
* code.text = "Able to latch on to breast for feeding (finding)"
* subject.reference = "Patient/patient-us-core-patient-baby-everybaby"
* subject.display = "Baby Everybaby"
* effectiveDateTime = "2019-01-17"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* valueBoolean = true

---

// File: input/fsh/instances/observation-bser-referral-observation-endurance-eve-everywoman.fsh

Instance: observation-bser-referral-observation-endurance-eve-everywoman
InstanceOf: BSeRReferralObservation
Title: "BSeR Referral Observation - Arthritis Feedback - Endurance Improved - Eve Everywoman"
Description: "BSeR Referral Observation: Arthritis Feedback - Endurance Improved - Eve Everywoman example"
Usage: #example
* status = #final
* category[therapy] = $observation-category#therapy
* code = $sct#406203001 "Endurance (observable entity)"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2019-01-18T22:33:22Z"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* valueCodeableConcept = $sct#268910001 "Patient's condition improved (finding)"

---

// File: input/fsh/instances/observation-bser-referral-observation-lactation-baby-everybaby.fsh

Instance: observation-bser-referral-observation-lactation-baby-everybaby
InstanceOf: BSeRReferralObservation
Title: "Observation - Feedback - Decreased lactation - Baby Everybaby"
Description: "BSeR Referral Observation: Feedback - Decreased lactation - Baby Everybaby example"
Usage: #example
* status = #final
* code = $sct#364826005 "Finding related to ability to perform breast-feeding (finding)"
* code.text = "Finding related to ability to perform breast-feeding (finding)"
* subject.reference = "Patient/patient-us-core-patient-baby-everybaby"
* subject.display = "Baby Everybaby"
* effectiveDateTime = "2019-01-17"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* valueCodeableConcept = $sct#199004 "Decreased lactation (finding)"
* valueCodeableConcept.text = "Decreased lactation (finding)"

---

// File: input/fsh/instances/observation-bser-referral-observation-pain-mgmt-eve-everywoman.fsh

Instance: observation-bser-referral-observation-pain-mgmt-eve-everywoman
InstanceOf: BSeRReferralObservation
Title: "Observation - Pain Management - Eve Everywoman"
Description: "BSeR Arthritis Feedback Observation: Pain Management - Eve Everywoman example"
Usage: #example
* status = #final
* category[therapy] = $observation-category#therapy
* code = $sct#278414003 "Pain management (procedure)"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2019-01-18T22:33:22Z"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* valueBoolean = true

---

// File: input/fsh/instances/observation-bser-telcomcomm-eve-everywoman.fsh

Instance: observation-bser-telcomcomm-eve-everywoman
InstanceOf: BSeRTelcomCommunicationPreferences
Title: "Observation - Best Day to Call - Eve Everywoman"
Description: "BSeR Telcom Comm Observation: Best Day to Call - Eve Everywoman example"
Usage: #example
* status = #final
* code = BSeR#BDTC "Best Day To Call"
* code.text = "Best Day To Call"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* valueString = "Monday"

---

// File: input/fsh/instances/observation-bser-tobaccousecessationfeedbackobs-1-eve-everywoman.fsh

Instance: observation-bser-tobaccousecessationfeedbackobs-1-eve-everywoman
InstanceOf: USCoreObservationSocialHistoryProfile
Title: "Observation - Date for cessation of smoking - Eve Everywoman"
Description: "US Core Observation Social History: Referral Feedback - Date for cessation of smoking - Eve Everywoman example"
Usage: #example
* status = #final
* category[us-core/social-history] = $observation-category#social-history "Social History"
* category[us-core/social-history].text = "Social History"
* code = $sct#390901002 "Negotiated date for cessation of smoking (observable entity)"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* valueDateTime = "2019-04-01"

---

// File: input/fsh/instances/observation-bser-tobaccousecessationfeedbackobs-2-eve-everywoman.fsh

Instance: observation-bser-tobaccousecessationfeedbackobs-2-eve-everywoman
InstanceOf: USCoreObservationSocialHistoryProfile
Title: "Observation - Tobacco free duration - Eve Everywoman"
Description: "US Core Observation Social History: Referral Feedback - Tobacco free duration - Eve Everywoman example"
Usage: #example
* status = #final
* category[us-core/social-history] = $observation-category#social-history "Social History"
* category[us-core/social-history].text = "Social History"
* code = $sct#228486009 "Time since stopped smoking (observable entity)"
* code.text = "Tobacco free duration"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* valueQuantity = 10 'mo' "month"

---

// File: input/fsh/instances/observation-odh-employment-status-eve-everywoman.fsh

Instance: observation-odh-employment-status-eve-everywoman
InstanceOf: EmploymentStatus
Title: "Observation - Eve Everywoman - Employed"
Description: "ODH Employment Status: Eve Everywoman - Employed example"
Usage: #example
* status = #final
* category = $observation-category#social-history
* code = $loinc#74165-2
* subject = Reference(Patient/patient-us-core-patient-eve-everywoman) "Eve Everywoman"
* effectivePeriod.start = "2014-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueCodeableConcept = $v3-ObservationValue#Employed "Employed"

---

// File: input/fsh/instances/observation-odh-employment-status-mom-everymom.fsh

Instance: observation-odh-employment-status-mom-everymom
InstanceOf: EmploymentStatus
Title: "Observation - Mom Everymom - Employed"
Description: "ODH Employment Status: Mom Everymom - Employed example"
Usage: #example
* status = #final
* category = $observation-category#social-history
* code = $loinc#74165-2
* subject = Reference(Patient/patient-us-core-patient-mom-everymom) "Mom Everymom"
* effectivePeriod.start = "2014-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueCodeableConcept = $v3-ObservationValue#Employed "Employed"

---

// File: input/fsh/instances/observation-participationfeedbackobservation-1-eve-everywoman.fsh

Instance: observation-participationfeedbackobservation-1-eve-everywoman
InstanceOf: USCoreObservationSocialHistoryProfile
Title: "Observation - Appointments Attended - Eve Everywoman"
Description: "US Core Observation Social History: Referral Feedback - Appointments Attended - Eve Everywoman example"
Usage: #example
* status = #final
* category[us-core/social-history] = $observation-category#social-history
* code = $sct#298057009 "Number of appointments attended (observable entity)"
* code.text = "Number of appointments attended (observable entity)"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* valueQuantity.value = 6

---

// File: input/fsh/instances/observation-participationfeedbackobservation-2-eve-everywoman.fsh

Instance: observation-participationfeedbackobservation-2-eve-everywoman
InstanceOf: USCoreObservationSocialHistoryProfile
Title: "Observation - Appointments Missed - Eve Everywoman"
Description: "US Core Observation Social History: Referral Feedback - Appointments Missed - Eve Everywoman example"
Usage: #example
* status = #final
* category[us-core/social-history] = $observation-category#social-history
* code = $sct#298058004 "Number of appointments missed (observable entity)"
* code.text = "Number of appointments missed (observable entity)"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* valueQuantity.value = 1

---

// File: input/fsh/instances/observation-us-core-blood-pressure-baby-everybaby.fsh

Instance: observation-us-core-blood-pressure-baby-everybaby
InstanceOf: USCoreBloodPressureProfile
Title: "Blood Pressure - Baby Everybaby"
Description: "US Core Blood Pressure: Baby Everybaby example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#85354-9 "Blood Pressure panel with all children optional"
* code.text = "Blood Pressure systolic & diastolic"
* subject = Reference(Patient/patient-us-core-patient-baby-everybaby) "Baby Everybaby"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* component[systolic].code = $loinc#8480-6 "Systolic Blood Pressure"
* component[systolic].valueQuantity = 90 'mm[Hg]' "mmHg"
* component[diastolic].code = $loinc#8462-4 "Diastolic Blood Pressure"
* component[diastolic].valueQuantity = 55 'mm[Hg]' "mmHg"

---

// File: input/fsh/instances/observation-us-core-blood-pressure-eve-everywoman.fsh

Instance:   observation-us-core-blood-pressure-eve-everywoman
InstanceOf: USCoreBloodPressureProfile
Title: "Observation - Blood Pressure - Eve Everywoman"
Description: "US Core Blood Pressure: Blood Pressure - Eve Everywoman example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#85354-9 "Blood Pressure panel with all children optional"
* code.text = "Blood Pressure systolic & diastolic"
* subject = Reference(Patient/patient-us-core-patient-eve-everywoman) "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* component[systolic].code = $loinc#8480-6 "Systolic Blood Pressure"
* component[systolic].valueQuantity = 107 'mm[Hg]' "mmHg"
* component[diastolic].code = $loinc#8462-4 "Diastolic Blood Pressure"
* component[diastolic].valueQuantity = 60 'mm[Hg]' "mmHg"

---

// File: input/fsh/instances/observation-us-core-blood-pressure-mom-everymom.fsh

Instance: observation-us-core-blood-pressure-mom-everymom
InstanceOf: USCoreBloodPressureProfile
Title: "Blood Pressure - Mom Everymom"
Description: "US Core Blood Pressure: Mom Everymom example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#85354-9 "Blood Pressure panel with all children optional"
* code.text = "Blood Pressure systolic & diastolic"
* subject = Reference(Patient/patient-us-core-patient-mom-everymom) "Mom Everymom"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* component[systolic].code = $loinc#8480-6 "Systolic Blood Pressure"
* component[systolic].valueQuantity = 125 'mm[Hg]' "mmHg"
* component[diastolic].code = $loinc#8462-4 "Diastolic Blood Pressure"
* component[diastolic].valueQuantity = 86 'mm[Hg]' "mmHg"

---

// File: input/fsh/instances/observation-us-core-bmi-eve-everywoman.fsh

Instance: observation-us-core-bmi-eve-everywoman
InstanceOf: USCoreBMIProfile
Title: "Observation - BMI - Eve Everywoman"
Description: "US Core BMI: Eve Everywoman example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#39156-5 "Body mass index (BMI) [Ratio]"
* code.text = "BMI"
* subject = Reference(Patient/patient-us-core-patient-eve-everywoman) "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueQuantity = 29 'kg/m2' "kg/m2"

---

// File: input/fsh/instances/observation-us-core-bmi-mom-everymom.fsh

Instance: observation-us-core-bmi-mom-everymom
InstanceOf: USCoreBMIProfile
Title: "BMI - Mom Everymom"
Description: "US Core BMI: Mom Everymom example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#39156-5 "Body mass index (BMI) [Ratio]"
* code.text = "BMI"
* subject = Reference(Patient/patient-us-core-patient-mom-everymom) "Mom Everymom"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueQuantity = 29 'kg/m2' "kg/m2"

---

// File: input/fsh/instances/observation-us-core-body-height-baby-everybaby.fsh

Instance: observation-us-core-body-height-baby-everybaby
InstanceOf: USCoreBodyHeightProfile
Title: "Observation - Body Height - Baby Everybaby"
Description: "US Core Body Height: Baby Everybaby example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs
* code.coding[0] = $loinc#8302-2 "Body height"
* code.coding[+] = $loinc#8306-3 "Body height lying"
* subject = Reference(Patient/patient-us-core-patient-baby-everybaby) "Baby Everybaby"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueQuantity = 21 '[in_i]' "in"

---

// File: input/fsh/instances/observation-us-core-body-height-eve-everywoman.fsh

Instance: observation-us-core-body-height-eve-everywoman
InstanceOf: USCoreBodyHeightProfile
Title: "Observation - Body Height - Eve Everywoman"
Description: "US Core Body Height: Eve Everywoman example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#8302-2 "Body height"
* code.text = "Body height"
* subject = Reference(Patient/patient-us-core-patient-eve-everywoman) "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueQuantity = 68 '[in_i]' "in"

---

// File: input/fsh/instances/observation-us-core-body-height-mom-everymom.fsh

Instance: observation-us-core-body-height-mom-everymom
InstanceOf: USCoreBodyHeightProfile
Title: "Body Height - Mom Everymom"
Description: "US Core Body Height: Mom Everymom example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#8302-2 "Body height"
* code.text = "Body height"
* subject = Reference(Patient/patient-us-core-patient-mom-everymom) "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueQuantity = 66 '[in_i]' "in"

---

// File: input/fsh/instances/observation-us-core-body-weight-baby-everybaby.fsh

Instance: observation-us-core-body-weight-baby-everybaby
InstanceOf: USCoreBodyWeightProfile
Title: "Body Weight - Baby Everybaby"
Description: "US Core Body Weight: Baby Everybaby example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#29463-7 "Body weight"
* code.text = "Body weight"
* subject = Reference(Patient/patient-us-core-patient-baby-everybaby) "Baby Everybaby"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueQuantity = 8 'kg' "kg"

---

// File: input/fsh/instances/observation-us-core-body-weight-eve-everywoman.fsh

Instance: observation-us-core-body-weight-eve-everywoman
InstanceOf: USCoreBodyWeightProfile
Title: "Body Weight - Eve Everywoman"
Description: "US Core Body Weight: Eve Everywoman example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#29463-7 "Body weight"
* code.text = "Body weight"
* subject = Reference(Patient/patient-us-core-patient-eve-everywoman) "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueQuantity = 65 'kg' "kg"

---

// File: input/fsh/instances/observation-us-core-body-weight-mom-everymom.fsh

Instance: observation-us-core-body-weight-mom-everymom
InstanceOf: USCoreBodyWeightProfile
Title: "Body Weight - Mom Everymom"
Description: "US Core Body Weight: Mom Everymom example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#29463-7 "Body weight"
* code.text = "Body weight"
* subject = Reference(Patient/patient-us-core-patient-mom-everymom) "Mom Everymom"
* effectiveDateTime = "2019-01-17"
* performer = Reference(Practitioner/practitioner-us-core-practitioner-henry-seven)
* valueQuantity = 85 'kg' "kg"

---

// File: input/fsh/instances/observation-us-core-observation-lab-ha1c-eve-everywoman.fsh

Instance: observation-us-core-observation-lab-ha1c-eve-everywoman
InstanceOf: USCoreLaboratoryResultObservationProfile
Title: "Observation - Ha1c - Eve Everywoman"
Description: "US Core Laboratory Result Observation: Ha1c - Eve Everywoman example"
Usage: #example
* status = #final
* category[Laboratory] = $observation-category#laboratory
* code = $loinc#4548-4 "Hemoglobin A1c/Hemoglobin.total in Blood"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2019-01-18T22:33:22Z"
* valueQuantity = 85 '%'

---

// File: input/fsh/instances/observation-us-core-smokingstatus-eve-everywoman.fsh

Instance: observation-us-core-smokingstatus-eve-everywoman
InstanceOf: USCoreSmokingStatusProfile
Title: "Smoking Status - Eve Everywoman"
Description: "US Core Smoking Status: Eve Everywoman example"
Usage: #example
* status = #final
* category[SocialHistory] = $observation-category#social-history "Social History"
* category[SocialHistory].text = "Social History"
* code = $loinc#72166-2 "Tobacco smoking status"
* code.text = "Tobacco smoking status"
* subject = Reference(Patient/patient-us-core-patient-eve-everywoman) "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* valueCodeableConcept = $sct#428041000124106
* valueCodeableConcept.text = "Current some day smoker"

---

// File: input/fsh/instances/observation-us-core-social-history-education-eve-everywoman.fsh

Instance: observation-us-core-social-history-education-eve-everywoman
InstanceOf: USCoreObservationSocialHistoryProfile
Title: "Observation - Education Level - Eve Everywoman"
Description: "US Core Observation Social History: Education Level - Eve Everywoman example"
Usage: #example
* status = #final
* category[us-core/social-history] = $observation-category#social-history "Social History"
* category[us-core/social-history].text = "Social History"
* code = $loinc#82589-3 "Highest level of education"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2019-01-17"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* valueCodeableConcept = $v3-EducationLevel#ELEM "Elementary School"
* valueCodeableConcept.text = "Elementary School"

---

// File: input/fsh/instances/observation-us-core-social-history-education-mom-everymom.fsh

Instance: observation-us-core-social-history-education-mom-everymom
InstanceOf: USCoreObservationSocialHistoryProfile
Title: "Observation - Education Level - Mom Everymom"
Description: "US Core Observation Social History: Education Level - Mom Everymom example"
Usage: #example
* status = #final
* category[us-core/social-history] = $observation-category#social-history "Social History"
* category[us-core/social-history].text = "Social History"
* code = $loinc#82589-3 "Highest level of education"
* subject.reference = "Patient/patient-us-core-patient-mom-everymom"
* subject.display = "Mom Everymom"
* effectiveDateTime = "2019-01-17"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* valueCodeableConcept = $v3-EducationLevel#ELEM "Elementary School"
* valueCodeableConcept.text = "Elementary School"

---

// File: input/fsh/instances/organization-us-core-organization-acme-lab.fsh

Instance: organization-us-core-organization-acme-lab
InstanceOf: USCoreOrganizationProfile
Title: "Organization - Acme Lab"
Description: "US Core Organization: Acme Lab example"
Usage: #example
* identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "1144221847"
* identifier[+].system = "urn:oid:2.16.840.1.113883.4.7"
* identifier[=].value = "12D4567890"
* active = true
* type = $organization-type#prov "Healthcare Provider"
* name = "Acme Labs"
* telecom[0].system = #phone
* telecom[=].value = "(+1) 734-677-7777"
* telecom[+].system = #email
* telecom[=].value = "hq@acme.org"
* address.line = "3300 Washtenaw Avenue, Suite 227"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "01002"
* address.country = "USA"

---

// File: input/fsh/instances/organization-us-core-organization-saint-luke.fsh

Instance: organization-us-core-organization-saint-luke
InstanceOf: USCoreOrganizationProfile
Title: "Organization - Saint Luke's Hospital of Kansas City"
Description: "US Core Organization: Saint Luke's Hospital of Kansas City example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1063494177"
* active = true
* type = $organization-type#prov "Healthcare Provider"
* name = "Saint Luke's Hospital of Kansas City"
* telecom[0].system = #phone
* telecom[=].value = "(816)932-2000"
* telecom[=].use = #work
* telecom[+].system = #other
* telecom[=].value = "http://www.saintlukeshealthsystem.org/locations/saint-lukes-hospital-kansas-city"
* telecom[=].use = #work
* address.line = "4401 Wornall Rd,"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "64111"

---

// File: input/fsh/instances/parameters-snomed-us.fsh

Instance: parameters-snomed-us
InstanceOf: Parameters
Title: "Parameters - US SNOMED"
Description: "Parameters - US SNOMED"
* parameter.name = "profile-url"
* parameter.valueString = "dc8fd4bc-091a-424a-8a3b-6198ef146892"
* parameter.name = "system-version"
* parameter.valueString = "http://snomed.info/sct|http://snomed.info/sct/731000124108"

---

// File: input/fsh/instances/patient-us-core-patient-baby-everybaby.fsh

Instance: patient-us-core-patient-baby-everybaby
InstanceOf: USCorePatientProfile
Title: "Patient - Baby Everybaby"
Description: "US Core Patient: Baby Everybaby example"
Usage: #example
* extension[0].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "White"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[+].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Not Hispanic or Latino"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #F
* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "9932702"
* active = true
* name.family = "Everybaby"
* name.given[0] = "Baby"
* name.given[+] = "B"
* telecom[0].system = #phone
* telecom[=].value = "1-(404)555-1212"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "baby.everybaby@example.com"
* gender = #female
* birthDate = "2019-01-15"
* address.line = "5101 Peachtree St NE"
* address.city = "Atlanta"
* address.state = "GA"
* address.postalCode = "30302"
* address.country = "US"

---

// File: input/fsh/instances/patient-us-core-patient-eve-everywoman.fsh

Instance: patient-us-core-patient-eve-everywoman
InstanceOf: USCorePatientProfile
Title: "Patient - Eve Everywoman"
Description: "US Core Patient: Eve Everywoman example"
Usage: #example
* extension[0].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "White"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[+].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Not Hispanic or Latino"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #F
* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "1032702"
* active = true
* name.family = "Everywoman"
* name.given[0] = "Eve"
* name.given[+] = "L"
* telecom[0].system = #phone
* telecom[=].value = "1-(404)555-1212"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "eve.everywoman@example.com"
* gender = #female
* birthDate = "1974-11-24"
* address.line = "5101 Peachtree St NE"
* address.city = "Atlanta"
* address.state = "GA"
* address.postalCode = "30302"
* address.country = "US"
* link.other = Reference(relatedperson-us-core-relatedperson-self-eve-everywoman)
* link.type = $link-type#seealso

---

// File: input/fsh/instances/patient-us-core-patient-mom-everymom.fsh

Instance: patient-us-core-patient-mom-everymom
InstanceOf: USCorePatientProfile
Title: "Patient - Mom Everymom"
Description: "US Core Patient: Mom Everymom example"
Usage: #example
* extension[0].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "White"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[+].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Not Hispanic or Latino"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #F
* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "5552702"
* active = true
* name.family = "Everymom"
* name.given[0] = "Mom"
* name.given[+] = "L"
* telecom[0].system = #phone
* telecom[=].value = "1-(404)555-1313"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "mom.everymom@example.com"
* gender = #female
* birthDate = "1982-11-24"
* address.line = "5101 Peachtree St NE"
* address.city = "Atlanta"
* address.state = "GA"
* address.postalCode = "30302"
* address.country = "US"
* link.other = Reference(relatedperson-us-core-relatedperson-mom-everymom)
* link.type = $link-type#seealso "See also"

---

// File: input/fsh/instances/practitioner-us-core-practitioner-hailey-eight.fsh

Instance: practitioner-us-core-practitioner-hailey-eight
InstanceOf: USCorePractitionerProfile
Title: "Practitioner - Hailey Eight"
Description: "US Core Practitioner: Hailey Eight example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339888"
* name.family = "Hailey"
* name.given = "Eight"
* name.suffix = "M.D."
* telecom.system = #email
* telecom.value = "hailey.eight@example.com"
* address.line[0] = "BMass Doctors"
* address.line[+] = "2100 North Ave"
* address.city = "Burlington"
* address.state = "MA"
* address.postalCode = "02368"
* address.country = "US"

---

// File: input/fsh/instances/practitioner-us-core-practitioner-henry-seven.fsh

Instance: practitioner-us-core-practitioner-henry-seven
InstanceOf: USCorePractitionerProfile
Title: "Practitioner - Henry Seven"
Description: "US Core Practitioner: Henry Seven example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339108"
* name.family = "Henry"
* name.given = "Seven"
* name.suffix = "M.D."
* telecom.system = #email
* telecom.value = "henry.seven@example.com"
* address.line[0] = "BMass Doctors"
* address.line[+] = "2100 North Ave"
* address.city = "Burlington"
* address.state = "MA"
* address.postalCode = "02368"
* address.country = "US"

---

// File: input/fsh/instances/practitionerrole-us-core-practitionerrole-referral-initiator.fsh

Instance: practitionerrole-us-core-practitionerrole-referral-initiator
InstanceOf: USCorePractitionerRoleProfile
Title: "PracitionerRole - Referral Initiator - Primary Care Clinis St. Luke"
Description: "US Core PracitionerRole: Referral Initiator - Primary Care Clinis St. Luke example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1111111111"
* practitioner.reference = "Practitioner/practitioner-us-core-practitioner-henry-seven"
* practitioner.display = "Henry Seven, MD"
* organization.reference = "Organization/organization-us-core-organization-saint-luke"
* code = $provider-taxonomy#261QP2300X "Primary Care Clinic/Center"
* specialty = $sct#419772000 "Family Practice"
* telecom.system = #email
* telecom.value = "henry.seven@example.com"

---

// File: input/fsh/instances/practitionerrole-us-core-practitionerrole-referral-recipient.fsh

Instance: practitionerrole-us-core-practitionerrole-referral-recipient
InstanceOf: USCorePractitionerRoleProfile
Title: "PractitionerRole - Referral Recipient - Hailey Eight"
Description: "US Core PractitionerRole: Referral Recipient: Hailey Eight example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "2222222222"
* practitioner.reference = "Practitioner/practitioner-us-core-practitioner-hailey-eight"
* practitioner.display = "Hailey Eight, MD"
* organization.reference = "Organization/organization-us-core-organization-saint-luke"
* code = $provider-taxonomy#261QP2300X "Primary Care Clinic/Center"
* specialty = $sct#419772000 "Family Practice"
* telecom.system = #email
* telecom.value = "hailey.eight@example.com"

---

// File: input/fsh/instances/procedure-us-core-procedure-nicotine-replacement-eve-everywoman.fsh

Instance: procedure-us-core-procedure-nicotine-replacement-eve-everywoman
InstanceOf: USCoreProcedureProfile
Title: "Procedure - Nicotine replacement therapy - Eve Everywoman"
Description: "US Core Procedure: Nicotine replacement therapy - Eve Everywoman example"
Usage: #example
* status = #preparation
* code = $sct#151159008 "Nicotine replacement therapy"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"

---

// File: input/fsh/instances/relatedperson-us-core-relatedperson-mom-everymom.fsh

Instance: relatedperson-us-core-relatedperson-mom-everymom
InstanceOf: USCoreRelatedPersonProfile
Title: "RelatedPerson - Gestational Mother - Mom Everymom"
Description: "US Core RelatedPerson: Gestational Mother - Mom Everymom example"
Usage: #example
* identifier.type = $v2-0203#SS
* identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* identifier.value = "444222222"
* active = true
* patient = Reference(Patient/patient-us-core-patient-baby-everybaby)
* relationship = $v3-RoleCode#GESTM "gestational mother"
* relationship.text = "Gestational Mother"
* name.family = "Everymom"
* name.given[0] = "Mom"
* name.given[+] = "L"
* telecom[0].system = #phone
* telecom[=].value = "1-(404)555-1313"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "mom.everymom@example.com"
* gender = #female
* birthDate = "1982-11-24"
* address.line = "5101 Peachtree St NE"
* address.city = "Atlanta"
* address.state = "GA"
* address.postalCode = "30302"
* address.country = "US"

---

// File: input/fsh/instances/relatedperson-us-core-relatedperson-mother-eve-everywoman.fsh

Instance: relatedperson-us-core-relatedperson-mother-eve-everywoman
InstanceOf: USCoreRelatedPersonProfile
Title: "RelatedPerson - Gestational Mother - Eve Everywoman"
Description: "US Core RelatedPerson: Gestational Mother - Eve Everywoman example"
Usage: #example
* active = true
* patient = Reference(Patient/patient-us-core-patient-baby-everybaby)
* relationship = $v3-RoleCode#GESTM "gestational mother"
* relationship.text = "Gestational Mother"
* name.family = "Everywoman"
* name.given[0] = "Eve"
* telecom[0].system = #phone
* telecom[=].value = "1-(404)555-1313"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "mom.everymom@example.com"
* gender = #female
* birthDate = "1982-11-24"
* address.line = "5101 Peachtree St NE"
* address.city = "Atlanta"
* address.state = "GA"
* address.postalCode = "30302"
* address.country = "US"

---

// File: input/fsh/instances/relatedperson-us-core-relatedperson-self-eve-everywoman.fsh

Instance: relatedperson-us-core-relatedperson-self-eve-everywoman
InstanceOf: USCoreRelatedPersonProfile
Title: "RelatedPerson - Self - Eve Everywoman"
Description: "US Core RelatedPerson: Self - Eve Everywoman example"
Usage: #example
* identifier.type = $v2-0203#SS
* identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* identifier.value = "444222222"
* active = true
* patient = Reference(Patient/patient-us-core-patient-eve-everywoman) "Eve Everywoman"
* relationship = $v3-RoleCode#ONESELF "self"
* relationship.text = "oneself"
* name.family = "Everywoman"
* name.given[0] = "Eve"
* name.given[+] = "L"
* telecom[0].system = #phone
* telecom[=].value = "1-(404)555-1212"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "eve.everywoman@example.com"
* gender = #female
* birthDate = "1974-11-24"
* address.line = "5101 Peachtree St NE"
* address.city = "Atlanta"
* address.state = "GA"
* address.postalCode = "30302"
* address.country = "US"

---

// File: input/fsh/instances/servicerequest-bser-referral-servicerequest-arthritis.fsh

Instance: servicerequest-bser-referral-servicerequest-arthritis
InstanceOf: BSeRReferralServiceRequest
Title: "ServiceRequest - Arthritis Referral - Eve Everywoman"
Description: "BSeR Referral ServiceRequest: Arthritis Referral - Eve Everywoman example"
Usage: #example
* identifier[referralInitiatorServiceRequestIdentifier].type = $v2-0203#PLAC
* identifier[referralInitiatorServiceRequestIdentifier].value = "88888888"
* identifier[referralInitiatorServiceRequestIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* identifier[referralRecipientServiceRequestIdentifier].type = $v2-0203#FILL
* identifier[referralRecipientServiceRequestIdentifier].value = "99999999"
* identifier[referralRecipientServiceRequestIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* status = #active
* intent = #order
* category = $sct#313204009 "Lifestyle education (procedure)"
* code = $sct#3457005 "Patient referral"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* occurrenceDateTime = "2020-01-09"
* authoredOn = "2020-02-14"
* requester.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* requester.display = "Henry Seven, MD"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* performer.display = "Hailey Eight, MD"
* reasonCode = $sct#3723001 "Arthritis (disorder)"
* reasonCode.text = "Arthritis (disorder)"
* insurance.reference = "Coverage/coverage-bser-coverage-eve-everywoman"
* supportingInfo[bundleSupportingInfo].reference = "Bundle/bundle-bser-referral-request-document-bundle-eve-everywoman"
* supportingInfo[consentSupportingInfo].reference = "Consent/consent-bser-patientconsent-eve-everywoman"

---

// File: input/fsh/instances/servicerequest-bser-referral-servicerequest-early-childhood.fsh

Instance: servicerequest-bser-referral-servicerequest-early-childhood
InstanceOf: BSeRReferralServiceRequest
Title: "ServiceRequest - Early Childhood Nutrition Referral - Baby Everybaby"
Description: "BSeR Referral ServiceRequest: Early Childhood Nutrition Referral - Baby Everybaby example"
Usage: #example
* identifier[referralInitiatorServiceRequestIdentifier].type = $v2-0203#PLAC
* identifier[referralInitiatorServiceRequestIdentifier].value = "88888888"
* identifier[referralInitiatorServiceRequestIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* identifier[referralRecipientServiceRequestIdentifier].type = $v2-0203#FILL
* identifier[referralRecipientServiceRequestIdentifier].value = "99999999"
* identifier[referralRecipientServiceRequestIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* status = #active
* intent = #order
* category = $sct#313204009 "Lifestyle education (procedure)"
* code = $sct#3457005 "Patient referral"
* subject.reference = "Patient/patient-us-core-patient-baby-everybaby"
* subject.display = "Baby Everybaby"
* occurrenceDateTime = "2020-01-09"
* authoredOn = "2020-02-14"
* requester.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* requester.display = "Henry Seven, MD"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* performer.display = "Hailey Eight, MD"
* reasonCode = $sct#762496003 "Acute malnutrition in infancy (disorder)"
* reasonCode.text = "Acute malnutrition in infancy (disorder)"
* insurance.reference = "Coverage/coverage-bser-coverage-baby-everybaby"
* supportingInfo[bundleSupportingInfo].reference = "Bundle/bundle-bser-referral-request-document-bundle-baby-everybaby"
* supportingInfo[consentSupportingInfo].reference = "Consent/consent-bser-patientconsent-baby-everybaby"

---

// File: input/fsh/instances/servicerequest-referral-servicerequest.fsh

Instance: servicerequest-referral-servicerequest
InstanceOf: ReferralServiceRequest
Title: "ServiceRequest - Eve Everywoman"
Description: "Referral ServiceRequest: Eve Everywoman example"
Usage: #example
* identifier[referralInitiatorServiceRequestIdentifier].type = $v2-0203#PLAC
* identifier[referralInitiatorServiceRequestIdentifier].value = "88888888"
* identifier[referralInitiatorServiceRequestIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* identifier[referralRecipientServiceRequestIdentifier].type = $v2-0203#FILL
* identifier[referralRecipientServiceRequestIdentifier].value = "99999999"
* identifier[referralRecipientServiceRequestIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* status = #active
* intent = #order
* category = $sct#313204009 "Lifestyle education (procedure)"
* code = $sct#3457005 "Patient referral"
* subject.reference = "Patient/patient-us-core-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* occurrenceDateTime = "2020-01-09"
* authoredOn = "2020-02-14"
* requester.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* requester.display = "Henry Seven, MD"
* performer.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* performer.display = "Hailey Eight, MD"
* reasonCode = $sct#3723001 "Arthritis (disorder)"
* reasonCode.text = "Arthritis (disorder)"
* insurance.reference = "Coverage/coverage-bser-coverage-eve-everywoman"
* supportingInfo[consentSupportingInfo].reference = "Consent/consent-bser-patientconsent-eve-everywoman"

---

// File: input/fsh/instances/task-bser-referraltask.fsh

Instance: task-bser-referral-task
InstanceOf: BSeRReferralTask
Title: "Task - Arthritis Referral - Eve Everywoman"
Description: "BSeR Referral Task: Eve Everywoman example"
Usage: #example
* identifier[referralInitiatorTaskIdentifier].type = $v2-0203#PLAC
* identifier[referralInitiatorTaskIdentifier].value = "66666666"
* identifier[referralInitiatorTaskIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* identifier[referralRecipientTaskIdentifier].type = $v2-0203#FILL
* identifier[referralRecipientTaskIdentifier].value = "77777777"
* identifier[referralRecipientTaskIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* status = #requested
* businessStatus = TaskBusinessStatusCS#7.0 "Service Request Fulfillment Completed"
* intent = #order
* focus.reference = "ServiceRequest/servicerequest-bser-referral-servicerequest-arthritis"
* for.reference = "Patient/patient-us-core-patient-eve-everywoman"
* authoredOn = "2020-01-15T14:43:32-04:00"
* requester.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* owner.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* output.type.text = "Arthritis referral feedback"
* output.valueReference.reference = "Bundle/bundle-bser-referral-feedback-document-bundle-eve-everywoman"

---

// File: input/fsh/instances/task-referraltask.fsh

Instance: task-referral-task
InstanceOf: ReferralTask
Title: "Task - Eve Everywoman"
Description: "Referral Task: Eve Everywoman example"
Usage: #example
* identifier[referralInitiatorTaskIdentifier].type = $v2-0203#PLAC
* identifier[referralInitiatorTaskIdentifier].value = "66666666"
* identifier[referralInitiatorTaskIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* identifier[referralRecipientTaskIdentifier].type = $v2-0203#FILL
* identifier[referralRecipientTaskIdentifier].value = "77777777"
* identifier[referralRecipientTaskIdentifier].assigner.reference = "Organization/organization-us-core-organization-saint-luke"
* status = #requested
* businessStatus = TaskBusinessStatusCS#7.0 "Service Request Fulfillment Completed"
* intent = #order
* focus.reference = "ServiceRequest/servicerequest-referral-servicerequest"
* for.reference = "Patient/patient-us-core-patient-eve-everywoman"
* authoredOn = "2020-01-15T14:43:32-04:00"
* requester.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-initiator"
* owner.reference = "PractitionerRole/practitionerrole-us-core-practitionerrole-referral-recipient"
* output.type.text = "Arthritis referral feedback"
* output.valueReference.reference = "Bundle/bundle-bser-referral-feedback-document-bundle-eve-everywoman"

---

// File: input/fsh/profiles/BSeRBundleBatchQueryReferralSupportingInfo.fsh

Profile: BSeRBundleBatchQueryReferralSupportingInfo
Parent: Bundle
Id: bser-bundle-batch-query-referral-supporting-info
Title: "BSeR Bundle Batch Query Referral Supporting Information"
Description: "This Bundle profile is of type batch, is used to contain queries to represent use case specific referral request and feedback supporting information, and allows for descriptive query information."

* meta.profile 1..*
* meta.profile ^slicing.discriminator.type = #pattern
* meta.profile ^slicing.discriminator.path = "$this"
* meta.profile ^slicing.description = "Slice based on pattern"
* meta.profile ^slicing.ordered = false
* meta.profile ^slicing.rules = #open
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile SHALL be used by the Server to hint/assert/declare that this instance conforms to the stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). "
* meta.profile contains asserted 1..1
* meta.profile[asserted] = "http://hl7.org/fhir/us/bser/StructureDefinition/bser-bundle-batch-query-referral-supporting-info"

* type = #batch

* entry 1..*
* entry.request 1..1
* entry.search 0..0
* entry.response 0..0
* entry.request.extension contains http://hl7.org/fhir/us/bser/StructureDefinition/query-description named description 0..1

---

// File: input/fsh/profiles/BSeRCoverage.fsh

Profile: BSeRCoverage
Parent: Coverage
Id: BSeR-Coverage
Title: "BSeR Coverage"
Description: "This Coverage profile represents identifiers and descriptors of an insurance plan underwriting some or all of the cost of the referral services provided."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* identifier MS
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^short = "Member ID and other identifiers"
* identifier contains memberid 0..1 MS
* identifier[memberid] ^short = "Member ID"
* identifier[memberid].type 1.. MS
* identifier[memberid].type = $v2-0203#MB
* identifier[memberid].type ^short = "Member Number identifier type"
* status MS
* status ^short = "(USCDI) active | cancelled | draft | entered-in-error"
* status ^comment = "The `Coverage.status` alone does not indicate whether an individual's coverage is terminated or that the individual is not covered. The `Coverage.period` needs to be considered as well."
* type MS
* type from $2.16.840.1.114222.4.11.3591 (extensible)
* subscriber MS
* subscriber only Reference(USCorePatientProfile or USCoreRelatedPersonProfile)
* subscriber ^definition = "The subscriber is the policy holder of the insurance plan. When the beneficiary Patient is not the subscriber use RelatedPerson."
* subscriberId MS
* subscriberId ^short = "ID assigned to the subscriber"
* subscriberId ^comment = "The identifier assigned by the Payer on the subscriber's ID card"
* beneficiary MS
* beneficiary only Reference(USCorePatientProfile)
* beneficiary ^short = "Plan beneficiary"
* beneficiary ^comment = "Identifier for a member assigned by the Payer."
* relationship 1.. MS
* relationship from $SubscriberRelationshipCodes (extensible)
* relationship ^short = "Beneficiary relationship to the subscriber"
* relationship ^comment = "Relationship of the member to the person insured (subscriber)"
* period MS
* period ^short = "Coverage start and end dates"
* period ^comment = "Date that the contract became effective and date that the contract was terminated or coverage changed."
* payor ..1 MS
* payor only Reference(USCoreOrganizationProfile or USCorePatientProfile or USCoreRelatedPersonProfile)
* payor ^short = "Issuer of the policy"
* class MS
* class ^slicing.discriminator.type = #pattern
* class ^slicing.discriminator.path = "type"
* class ^slicing.description = "Slice based on value pattern"
* class ^slicing.ordered = false
* class ^slicing.rules = #open
* class ^short = "Additional coverage classifications"
* class contains
    group 0..1 MS and
    plan 0..1 MS
* class[group] ^short = "Group"
* class[group].type = $coverage-class#group
* class[group].value MS
* class[group].value ^short = "Group Number"
* class[group].value ^comment = "Employer account identifier"
* class[group].name MS
* class[group].name ^short = "Group Name"
* class[group].name ^comment = "Name of the Employer Account (135)"
* class[plan] ^short = "Plan"
* class[plan].type = $coverage-class#plan
* class[plan].value MS
* class[plan].value ^short = "Plan Number"
* class[plan].value ^comment = "Business concept used by a health plan to describe its benefit offerings"
* class[plan].name MS
* class[plan].name ^short = "Plan Name"
* class[plan].name ^comment = "Name of the health plan benefit offering assigned to the Plan Identifier"

---

// File: input/fsh/profiles/BSeRPatientConsent.fsh

Profile: BSeRPatientConsent
Parent: Consent
Id: BSeR-PatientConsent
Title: "BSeR Patient Consent"
Description: "This Consent profile represents the consent status of the patient with regard to treatment authorization or protected health information sharing."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* status 1..1
* scope 1..1
* category 1..1
* patient 1..1
* patient only Reference(USCorePatientProfile)
* dateTime 1..1
* performer 1..1
* performer only Reference(USCorePatientProfile or USCoreRelatedPersonProfile)
* performer ^definition = "Performer is the person responding to the consent request. If the performer is different to the patient, the role of performer is played by a related person."
* provision 1..1
* provision.type 1..1

---

// File: input/fsh/profiles/BSeRReferralFeedbackComposition.fsh

Profile: BSeRReferralFeedbackComposition
Parent: Composition
Id: BSeR-ReferralFeedbackComposition
Title: "BSeR Referral Feedback Composition"
Description: "This Composition profile represents the clinical feedback included in the referral feedback document."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* identifier MS
* status MS
* type MS
* subject 1.. MS
* subject only Reference(USCorePatientProfile)
* date MS
* author 1..1 MS
* author only Reference(USCorePractitionerRoleProfile)
* title MS
* section MS
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section.code 1.. MS
* section contains
    referralServiceRequestFeedbackSummary 1..1 MS and
    obesityReferralFeedbackSupportingInformation 0..1 and
    arthritisReferralFeedbackSupportingInformation 0..1 and
    hypertensionReferralFeedbackSupportingInformation 0..1 and
    earlyChildhoodNutritionReferralFeedbackSupportingInformation 0..1 and
    diabetesPreventionReferralFeedbackSupportingInformation 0..1 and
    tobaccoUseCessationReferralFeedbackSupportingInformation 0..1
* section[referralServiceRequestFeedbackSummary].code 1.. MS
* section[referralServiceRequestFeedbackSummary].code = BSeR#RSRFS
* section[referralServiceRequestFeedbackSummary].code ^short = "CompositionSectionReferralServiceRequestFeedbackSummary"
* section[referralServiceRequestFeedbackSummary].focus 1.. MS
* section[referralServiceRequestFeedbackSummary].focus only Reference(BSeRReferralServiceRequest)
* section[referralServiceRequestFeedbackSummary].text MS
* section[referralServiceRequestFeedbackSummary].entry MS
* section[obesityReferralFeedbackSupportingInformation].code 1.. MS
* section[obesityReferralFeedbackSupportingInformation].code = BSeR#ORFSI "Obesity Referral Feedback Supporting Information"
* section[obesityReferralFeedbackSupportingInformation].entry MS
* section[obesityReferralFeedbackSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[obesityReferralFeedbackSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[obesityReferralFeedbackSupportingInformation].entry ^slicing.rules = #open
* section[obesityReferralFeedbackSupportingInformation].entry contains
    participationFeedbackObservation 0..* and
    bloodPressure 0..1 and
    bodyHeight 0..1 and
    bodyWeight 0..1 and
    bmi 0..1
* section[obesityReferralFeedbackSupportingInformation].entry[participationFeedbackObservation] only Reference(USCoreObservationSocialHistoryProfile)
* section[obesityReferralFeedbackSupportingInformation].entry[bloodPressure] only Reference(USCoreBloodPressureProfile)
* section[obesityReferralFeedbackSupportingInformation].entry[bodyHeight] only Reference(USCoreBodyHeightProfile)
* section[obesityReferralFeedbackSupportingInformation].entry[bodyWeight] only Reference(USCoreBodyWeightProfile)
* section[obesityReferralFeedbackSupportingInformation].entry[bmi] only Reference(USCoreBMIProfile)
* section[arthritisReferralFeedbackSupportingInformation].code 1.. MS
* section[arthritisReferralFeedbackSupportingInformation].code = BSeR#ARFSI "Arthritis Referral Feedback Supporting Information"
* section[arthritisReferralFeedbackSupportingInformation].entry MS
* section[arthritisReferralFeedbackSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[arthritisReferralFeedbackSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[arthritisReferralFeedbackSupportingInformation].entry ^slicing.rules = #open
* section[arthritisReferralFeedbackSupportingInformation].entry contains arthritisFeedbackObservation 0..*
* section[arthritisReferralFeedbackSupportingInformation].entry[arthritisFeedbackObservation] only Reference(BSeRReferralObservation)
* section[hypertensionReferralFeedbackSupportingInformation].code 1.. MS
* section[hypertensionReferralFeedbackSupportingInformation].code = BSeR#HRFSI "Hypertension Referral Feedback Supporting Information"
* section[hypertensionReferralFeedbackSupportingInformation].entry MS
* section[hypertensionReferralFeedbackSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[hypertensionReferralFeedbackSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[hypertensionReferralFeedbackSupportingInformation].entry ^slicing.rules = #open
* section[hypertensionReferralFeedbackSupportingInformation].entry contains
    bloodPressure 0..1 and
    bodyHeight 0..1 and
    bodyWeight 0..1 and
    bmi 0..1
* section[hypertensionReferralFeedbackSupportingInformation].entry[bloodPressure] only Reference(USCoreBloodPressureProfile)
* section[hypertensionReferralFeedbackSupportingInformation].entry[bodyHeight] only Reference(USCoreBodyHeightProfile)
* section[hypertensionReferralFeedbackSupportingInformation].entry[bodyWeight] only Reference(USCoreBodyWeightProfile)
* section[hypertensionReferralFeedbackSupportingInformation].entry[bmi] only Reference(USCoreBMIProfile)
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].code 1.. MS
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].code = BSeR#ECNRFSI "Early Childhood Nutrition Referral Feedback Supporting Information"
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry MS
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry ^slicing.rules = #open
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry contains
    earlyChildhoodNutritionFeedbackObservation 0..* and
    //medicationHistory 0..* and
    participationFeedbackObservation 0..*
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry[earlyChildhoodNutritionFeedbackObservation] only Reference(BSeRReferralObservation)
// Removing because CBOs don't have this information to feed back with
// * section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry[medicationHistory] only Reference(MedicationStatement or USCoreMedicationRequestProfile)
* section[earlyChildhoodNutritionReferralFeedbackSupportingInformation].entry[participationFeedbackObservation] only Reference(USCoreObservationSocialHistoryProfile)
* section[diabetesPreventionReferralFeedbackSupportingInformation].code 1.. MS
* section[diabetesPreventionReferralFeedbackSupportingInformation].code = BSeR#DPRFSI "Diabetes Prevention Referral Feedback Supporting Information"
* section[diabetesPreventionReferralFeedbackSupportingInformation].entry MS
* section[diabetesPreventionReferralFeedbackSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[diabetesPreventionReferralFeedbackSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[diabetesPreventionReferralFeedbackSupportingInformation].entry ^slicing.rules = #open
* section[diabetesPreventionReferralFeedbackSupportingInformation].entry contains
    participationFeedbackObservation 0..* and
    bodyHeight 0..1 and
    bodyWeight 0..1 and
    bmi 0..1
* section[diabetesPreventionReferralFeedbackSupportingInformation].entry[participationFeedbackObservation] only Reference(USCoreObservationSocialHistoryProfile)
* section[diabetesPreventionReferralFeedbackSupportingInformation].entry[bodyHeight] only Reference(USCoreBodyHeightProfile)
* section[diabetesPreventionReferralFeedbackSupportingInformation].entry[bodyWeight] only Reference(USCoreBodyWeightProfile)
* section[diabetesPreventionReferralFeedbackSupportingInformation].entry[bmi] only Reference(USCoreBMIProfile)
* section[tobaccoUseCessationReferralFeedbackSupportingInformation].code 1.. MS
* section[tobaccoUseCessationReferralFeedbackSupportingInformation].code = BSeR#TUCRFSI "Tobacco Use Cessation Referral Feedback Supporting Information"
* section[tobaccoUseCessationReferralFeedbackSupportingInformation].entry MS
* section[tobaccoUseCessationReferralFeedbackSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[tobaccoUseCessationReferralFeedbackSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[tobaccoUseCessationReferralFeedbackSupportingInformation].entry ^slicing.rules = #open
* section[tobaccoUseCessationReferralFeedbackSupportingInformation].entry contains
    tobaccoUseCessationFeedbackMedication 0..* and
    tobaccoUseCessationFeedbackObservation 0..*
* section[tobaccoUseCessationReferralFeedbackSupportingInformation].entry[tobaccoUseCessationFeedbackMedication] only Reference(BSeRTobaccoUseCessationFeedbackMedication)
* section[tobaccoUseCessationReferralFeedbackSupportingInformation].entry[tobaccoUseCessationFeedbackObservation] only Reference(USCoreObservationSocialHistoryProfile)

---

// File: input/fsh/profiles/BSeRReferralFeedbackDocumentBundle.fsh

Profile: BSeRReferralFeedbackDocumentBundle
Parent: Bundle
Id: BSeR-ReferralFeedbackDocumentBundle
Title: "BSeR Referral Feedback Document Bundle"
Description: "This Bundle profile represents an BSeR Referral Feedback Document Bundle. It contains the BSeR Referral Feedback Composition."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* id 1..1 MS
* id ^short = "BSeR Referral Feedback Document Bundle id"
* id ^definition = "BSeR Referral Feedback Document Bundle id"
* type = #document (exactly)
* type MS
* entry MS
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "$this.resource"
* entry ^slicing.rules = #open
* entry contains sliceBSeRComposition 1..1 MS
* entry[sliceBSeRComposition].resource 1.. MS
* entry[sliceBSeRComposition].resource only BSeRReferralFeedbackComposition

---

// File: input/fsh/profiles/BSeRReferralMessageBundle.fsh

Profile: BSeRReferralMessageBundle
Parent: Bundle
Id: BSeR-ReferralMessageBundle
Title: "BSeR Referral Message Bundle"
Description: "This Bundle profile represents a BSeR Referral Message Bundle. It contains the BSeR Referral MessageHeader and is for use in the BSeR messaging paradigm."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* type = #message (exactly)
* type MS
* entry MS
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "$this.resource"
* entry ^slicing.rules = #open
* entry contains
    messageHeader 1..1 MS
* entry[messageHeader].resource only BSeRReferralMessageHeader
// These shouldn't be here - moving them to ServiceRequest and Composition
// * entry[sliceEmploymentStatus].resource only EmploymentStatus
// * entry[slicePatientConsent].resource only BSeRPatientConsent
// * entry[sliceEducationLevel].resource only BSeREducationLevel

---

// File: input/fsh/profiles/BSeRReferralMessageHeader.fsh

Profile: BSeRReferralMessageHeader
Parent: MessageHeader
Id: BSeR-ReferralMessageHeader
Title: "BSeR Referral Message Header"
Description: "The FHIR MessageHeader resource is defined as \"the header for a message exchange that is either requesting or responding to an action\". In BSeR the message header is used to exchange the referral service request or the referral service request feedback."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* event[x] 1..1
* event[x] only Coding
* event[x] = $v2-0003#I12
* event[x] ^short = "REF/RRI - Patient referral"
* destination 1..1
* destination.receiver 1..1
* destination.receiver only Reference(USCorePractitionerRoleProfile)
* sender 1..1
* sender only Reference(USCorePractitionerRoleProfile)
* reason MS
* reason from $us-core-procedure-code (extensible)
* focus 1..1
* focus only Reference(BSeRReferralTask)

---

// File: input/fsh/profiles/BSeRReferralObservation.fsh

Profile: BSeRReferralObservation
Parent: Observation
Id: bser-referral-observation
Title: "BSeR Referral Observation"
Description: "This Observation profile represents a supporting information observation used in either the referral request or the referral feedback."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* status MS
* status = #final
* status ^short = "final"
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains
    therapy 1..1 MS
* category[therapy] = $observation-category#therapy
* code MS
* code ^short = "Type of observation (code / type)"
* code ^binding.strength = #preferred
* subject 1.. MS
* subject only Reference(USCorePatientProfile)
* subject ^short = "Who and/or what the observation is about"
* effective[x] only dateTime or Period or Timing or instant
* effective[x] MS
* effective[x] ^short = "Clinically relevant time/time-period for observation"
* effective[x] ^definition = "The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the \"physiologically relevant time\"."
* effective[x] ^comment = "At least a date should be present unless this observation is a historical report."
* performer only Reference(USCorePractitionerProfile or USCoreOrganizationProfile or USCorePatientProfile or USCorePractitionerRoleProfile or USCoreCareTeam or USCoreRelatedPersonProfile)
* performer MS
* performer ^short = "Who is responsible for the observation"
* value[x] only Quantity or CodeableConcept or string or boolean or integer or Range or Ratio or SampledData or time or dateTime or Period
* value[x] MS
* value[x] ^short = "Actual result"

---

// File: input/fsh/profiles/BSeRReferralRequestComposition.fsh

Profile: BSeRReferralRequestComposition
Parent: Composition
Id: BSeR-ReferralRequestComposition
Title: "BSeR Referral Request Composition"
Description: "This Composition profile represents the clinical supporting information included in the referral request document."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* status 1..1
* type 1..1
* subject 1..1
* subject only Reference(USCorePatientProfile)
* date 1..1
* author 1..1
* author only Reference(USCorePractitionerRoleProfile)
* title 1..1
* section 1..
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section.code 1..
* section contains
    otherSupportingInformation 0..1 and
    obesityReferralSupportingInformation 0..1 and
    arthritisReferralSupportingInformation 0..1 and
    hypertensionReferralSupportingInformation 0..1 and
    earlyChildhoodNutritionReferralSupportingInformation 0..1 and
    diabetesPreventionReferralSupportingInformation 0..1 and
    tobaccoUseCessationReferralSupportingInformation 0..1
* section[otherSupportingInformation] ^short = "Employment Status and Education Level"
* section[otherSupportingInformation].code 1..
* section[otherSupportingInformation].code = BSeR#OSI "Other Supporting Information"
* section[otherSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[otherSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[otherSupportingInformation].entry ^slicing.rules = #open
* section[otherSupportingInformation].entry contains
    employmentStatusOrEducationLevel 0..*
* section[otherSupportingInformation].entry[employmentStatusOrEducationLevel] only Reference(USCoreObservationSocialHistoryProfile or EmploymentStatus)
* section[obesityReferralSupportingInformation].code 1..
* section[obesityReferralSupportingInformation].code = BSeR#ORSI "Obesity Referral Supporting Information"
* section[obesityReferralSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[obesityReferralSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[obesityReferralSupportingInformation].entry ^slicing.rules = #open
* section[obesityReferralSupportingInformation].entry contains
    allergyIntolerance 0..* and
    bloodPressure 0..* and
    bodyHeight 0..* and
    bodyWeight 0..* and
    bmi 0..*
* section[obesityReferralSupportingInformation].entry[allergyIntolerance] only Reference(USCoreAllergyIntolerance)
* section[obesityReferralSupportingInformation].entry[bloodPressure] only Reference(USCoreBloodPressureProfile)
* section[obesityReferralSupportingInformation].entry[bodyHeight] only Reference(USCoreBodyHeightProfile)
* section[obesityReferralSupportingInformation].entry[bodyWeight] only Reference(USCoreBodyWeightProfile)
* section[obesityReferralSupportingInformation].entry[bmi] only Reference(USCoreBMIProfile)
* section[arthritisReferralSupportingInformation].code 1..
* section[arthritisReferralSupportingInformation].code = BSeR#ARSI "Arthritis Referral Supporting Information"
* section[arthritisReferralSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[arthritisReferralSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[arthritisReferralSupportingInformation].entry ^slicing.rules = #open
* section[arthritisReferralSupportingInformation].entry contains
    allergyIntolerance 0..* and
    medicationRequest 0..* and
    bloodPressure 0..* and
    bodyHeight 0..* and
    bodyWeight 0..* and
    bmi 0..*
* section[arthritisReferralSupportingInformation].entry[allergyIntolerance] only Reference(USCoreAllergyIntolerance)
* section[arthritisReferralSupportingInformation].entry[medicationRequest] only Reference(USCoreMedicationRequestProfile)
* section[arthritisReferralSupportingInformation].entry[bloodPressure] only Reference(USCoreBloodPressureProfile)
* section[arthritisReferralSupportingInformation].entry[bodyHeight] only Reference(USCoreBodyHeightProfile)
* section[arthritisReferralSupportingInformation].entry[bodyWeight] only Reference(USCoreBodyWeightProfile)
* section[arthritisReferralSupportingInformation].entry[bmi] only Reference(USCoreBMIProfile)
* section[hypertensionReferralSupportingInformation].code 1..
* section[hypertensionReferralSupportingInformation].code = BSeR#HRSI "Hypertension Referral Supporting Information"
* section[hypertensionReferralSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[hypertensionReferralSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[hypertensionReferralSupportingInformation].entry ^slicing.rules = #open
* section[hypertensionReferralSupportingInformation].entry contains
    diagnosis 0..* and
    bloodPressure 0..* and
    bodyHeight 0..* and
    bodyWeight 0..* and
    bmi 0..*
* section[hypertensionReferralSupportingInformation].entry[diagnosis] only Reference(USCoreConditionProblemsHealthConcernsProfile)
* section[hypertensionReferralSupportingInformation].entry[bloodPressure] only Reference(USCoreBloodPressureProfile)
* section[hypertensionReferralSupportingInformation].entry[bodyHeight] only Reference(USCoreBodyHeightProfile)
* section[hypertensionReferralSupportingInformation].entry[bodyWeight] only Reference(USCoreBodyWeightProfile)
* section[hypertensionReferralSupportingInformation].entry[bmi] only Reference(USCoreBMIProfile)
* section[earlyChildhoodNutritionReferralSupportingInformation].code 1..
* section[earlyChildhoodNutritionReferralSupportingInformation].code = BSeR#ECNRSIB "Early Childhood Nutrition Referral Supporting Information Baby"
* section[earlyChildhoodNutritionReferralSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[earlyChildhoodNutritionReferralSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[earlyChildhoodNutritionReferralSupportingInformation].entry ^slicing.rules = #open
* section[earlyChildhoodNutritionReferralSupportingInformation].entry contains
    earlyChildhoodNutritionObservation 0..* and
    babyBloodPressure 0..* and
    babyBodyHeightLying 0..* and
    babyBodyWeight 0..*
* section[earlyChildhoodNutritionReferralSupportingInformation].entry[earlyChildhoodNutritionObservation] only Reference(BSeRReferralObservation)
* section[earlyChildhoodNutritionReferralSupportingInformation].entry[babyBloodPressure] only Reference(USCoreBloodPressureProfile)
* section[earlyChildhoodNutritionReferralSupportingInformation].entry[babyBodyHeightLying] only Reference(USCoreBodyHeightProfile)
* section[earlyChildhoodNutritionReferralSupportingInformation].entry[babyBodyWeight] only Reference(USCoreBodyWeightProfile)
// Section containing information about the mother of the baby
* section[earlyChildhoodNutritionReferralSupportingInformation].section ..1
* section[earlyChildhoodNutritionReferralSupportingInformation].section ^slicing.discriminator.type = #value
* section[earlyChildhoodNutritionReferralSupportingInformation].section ^slicing.discriminator.path = "code"
* section[earlyChildhoodNutritionReferralSupportingInformation].section ^slicing.rules = #open
* section[earlyChildhoodNutritionReferralSupportingInformation].section contains
    motherInformation 0..1
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].code 1..
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].code = BSeR#ECNRSIM "Early Childhood Nutrition Referral Supporting Information Mother"
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].focus ..1
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].focus only Reference(USCorePatientProfile)
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].focus  ^short = "The mother of the baby is the focus of this section"
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry ^slicing.discriminator.type = #profile
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry ^slicing.discriminator.path = "resolve()"
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry ^slicing.rules = #open
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry contains
    motherBloodPressure 0..* and
    motherBodyHeight 0..* and
    motherBodyWeight 0..* and
    motherBmi 0..*
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry[motherBloodPressure] only Reference(USCoreBloodPressureProfile)
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry[motherBodyHeight] only Reference(USCoreBodyHeightProfile)
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry[motherBodyWeight] only Reference(USCoreBodyWeightProfile)
* section[earlyChildhoodNutritionReferralSupportingInformation].section[motherInformation].entry[motherBmi] only Reference(USCoreBMIProfile)
* section[diabetesPreventionReferralSupportingInformation].code 1..
* section[diabetesPreventionReferralSupportingInformation].code = BSeR#DPRSI "Diabetes Prevention Referral Supporting Information"
* section[diabetesPreventionReferralSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[diabetesPreventionReferralSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[diabetesPreventionReferralSupportingInformation].entry ^slicing.rules = #open
* section[diabetesPreventionReferralSupportingInformation].entry contains
    hA1c 0..* and
    bloodPressure 0..* and
    bodyHeight 0..* and
    bodyWeight 0..* and
    bmi 0..*
* section[diabetesPreventionReferralSupportingInformation].entry[hA1c] only Reference(USCoreLaboratoryResultObservationProfile)
* section[diabetesPreventionReferralSupportingInformation].entry[bloodPressure] only Reference(USCoreBloodPressureProfile)
* section[diabetesPreventionReferralSupportingInformation].entry[bodyHeight] only Reference(USCoreBodyHeightProfile)
* section[diabetesPreventionReferralSupportingInformation].entry[bodyWeight] only Reference(USCoreBodyWeightProfile)
* section[diabetesPreventionReferralSupportingInformation].entry[bmi] only Reference(USCoreBMIProfile)
* section[tobaccoUseCessationReferralSupportingInformation].code 1..
* section[tobaccoUseCessationReferralSupportingInformation].code = BSeR#TUCRSI "Tobacco Use Cessation Referral Supporting Information"
* section[tobaccoUseCessationReferralSupportingInformation].entry ^slicing.discriminator.type = #profile
* section[tobaccoUseCessationReferralSupportingInformation].entry ^slicing.discriminator.path = "resolve()"
* section[tobaccoUseCessationReferralSupportingInformation].entry ^slicing.rules = #open
* section[tobaccoUseCessationReferralSupportingInformation].entry contains
    nrtAuthorizationStatus 0..* and
    smokingStatus 0..* and
    telcomCommunicationPreferences 0..*
* section[tobaccoUseCessationReferralSupportingInformation].entry[nrtAuthorizationStatus] only Reference(USCoreProcedureProfile)
* section[tobaccoUseCessationReferralSupportingInformation].entry[smokingStatus] only Reference(USCoreSmokingStatusProfile)
* section[tobaccoUseCessationReferralSupportingInformation].entry[telcomCommunicationPreferences] only Reference(BSeRTelcomCommunicationPreferences) 

---

// File: input/fsh/profiles/BSeRReferralRequestDocumentBundle.fsh

Profile: BSeRReferralRequestDocumentBundle
Parent: Bundle
Id: BSeR-ReferralRequestDocumentBundle
Title: "BSeR Referral Request Document Bundle"
Description: "This Bundle profile represents an BSeR Referral Request Document Bundle. It contains the BSeR Referral Request Composition."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* id 1..1 MS
* id ^short = "BSeR Referral Request Document Bundle id"
* id ^definition = "BSeR Referral Request Document Bundle id"
* type = #document (exactly)
* type MS
* entry MS
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains sliceBSeRReferralRequestComposition 1..1 MS
* entry[sliceBSeRReferralRequestComposition].resource 1.. MS
* entry[sliceBSeRReferralRequestComposition].resource only BSeRReferralRequestComposition

---

// File: input/fsh/profiles/BSeRReferralServiceRequest.fsh

Profile: BSeRReferralServiceRequest
Parent: ReferralServiceRequest
Id: BSeR-ReferralServiceRequest
Title: "BSeR Referral Service Request"
Description: "This ServiceRequest profile represents a BSeR request for a referral."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* requester only Reference(USCorePractitionerRoleProfile)
* performer only Reference(USCorePractitionerRoleProfile or USCoreOrganizationProfile)
* reasonCode from $2.16.840.1.113762.1.4.1099.46 (extensible)
* insurance[insuranceCoverage] only Reference(BSeRCoverage)
* supportingInfo[bundleSupportingInfo] only Reference(BSeRReferralRequestDocumentBundle)
* supportingInfo[consentSupportingInfo] only Reference(BSeRPatientConsent)

---

// File: input/fsh/profiles/BSeRReferralTask.fsh

Profile: BSeRReferralTask
Parent: ReferralTask
Id: BSeR-ReferralTask
Title: "BSeR Referral Task"
Description: "This Task profile represents state of a task containing a BSeR referral service request."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* focus only Reference(BSeRReferralServiceRequest)
* for only Reference(USCorePatientProfile)
* output.value[x] only Reference(BSeRReferralFeedbackDocumentBundle)

---

// File: input/fsh/profiles/BSeRTelcomCommunicationPreferences.fsh

Profile: BSeRTelcomCommunicationPreferences
Parent: Observation
Id: BSeR-TelcomCommunicationPreferences
Title: "BSeR Telcom Communication Preferences"
Description: "This Observation profile represents a the patient's preference with regard to contact via telecommunication (phone/email) such as the best day to call, the best time to call, whether a message can be left."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* meta 1..1
* meta.profile 1..1
* meta.profile = "http://hl7.org/fhir/us/bser/StructureDefinition/BSeR-TelcomCommunicationPreferences" (exactly)
* status 1..1
* status = #final (exactly)
* code 1..1
* code from BSeRTelcomCommunicationPreferencesVS (extensible)
* subject 1..1
* subject only Reference(USCorePatientProfile)
* value[x] 1..1
* value[x] only string

---

// File: input/fsh/profiles/BSeRTobaccoUseCessationFeedbackMedication.fsh

Profile: BSeRTobaccoUseCessationFeedbackMedication
Parent: USCoreMedicationProfile
Id: BSeR-TobaccoUseCessationFeedbackMedication
Title: "BSeR Tobacco Use Cessation Feedback Medication"
Description: "This Medication represents a tobacco cessation medication."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* code from $2.16.840.1.113762.1.4.1111.95 (extensible)
* status 1.. MS

---

// File: input/fsh/profiles/ReferralServiceRequest.fsh

Profile: ReferralServiceRequest
Parent: USCoreServiceRequestProfile
Id: referral-servicerequest
Title: "Referral Service Request"
Description: "This ServiceRequest profile represents a request for a referral."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains $resource-pertainsToGoal named pertainsToGoal 0..* MS
* extension[pertainsToGoal] ^short = "Pertains to SDOH goal"
* extension[pertainsToGoal] ^definition = "Indicates that the resource is related to either the measurement, achievement or progress towards the referenced goal.  For example, a ServiceRequest to provide food vouchers pertainsToGoal of achieving food security."
* extension[pertainsToGoal] ^requirements = "Indicates that the service request is related to the referenced SDOHCC Goal."
* identifier 1.. MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier contains
    referralInitiatorServiceRequestIdentifier 1..1 MS and
    referralRecipientServiceRequestIdentifier 0..1 MS
* identifier[referralInitiatorServiceRequestIdentifier].type 1.. MS
* identifier[referralInitiatorServiceRequestIdentifier].type = $v2-0203#PLAC
* identifier[referralInitiatorServiceRequestIdentifier].value 1.. MS
* identifier[referralInitiatorServiceRequestIdentifier].assigner MS
* identifier[referralInitiatorServiceRequestIdentifier].assigner only Reference(USCoreOrganizationProfile)
* identifier[referralRecipientServiceRequestIdentifier].type 1.. MS
* identifier[referralRecipientServiceRequestIdentifier].type = $v2-0203#FILL
* identifier[referralRecipientServiceRequestIdentifier].value 1.. MS
* identifier[referralRecipientServiceRequestIdentifier].assigner MS
* identifier[referralRecipientServiceRequestIdentifier].assigner only Reference(USCoreOrganizationProfile)
* basedOn MS
* basedOn only Reference(ReferralServiceRequest)
* intent = #order (exactly)
* priority MS
* code ^short = "Referral or specific type of referral"
* code ^definition = "Referral or specific type of referral. If the code used describes the type of/reason for referral (such as \"Referral to diabetes prevention program\") then reasonCode may be omitted. If the code used doesn't describe the type of/reason for referral then reasonCode should contain a value."
* occurrence[x] 0..1
* requester 1.. MS
* requester ^short = "Referral Initiator"
* performer 0..1 MS
* performer ^short = "Referral Recipient"
* reasonCode MS
* reasonCode ^short = "Reason for referral"
* reasonCode ^definition = "Reason for referral. Should be present if the reason isn't pre-coordinated in the code (e.g. \"Referral\")."
* reasonCode.text 1..1 MS 
* reasonCode.text ^short = "set to the reason if there is no code otherwise set this field to the description of the code"
* reasonReference MS
// * reasonReference ^short
* insurance MS
* insurance ^slicing.discriminator.type = #profile
* insurance ^slicing.discriminator.path = "resolve()"
* insurance ^slicing.rules = #open
* insurance contains insuranceCoverage 0..* MS
* insurance[insuranceCoverage] only Reference(BSeRCoverage)
* supportingInfo MS
* supportingInfo ^slicing.discriminator.type = #profile
* supportingInfo ^slicing.discriminator.path = "resolve()"
* supportingInfo ^slicing.rules = #open
* supportingInfo contains
    consentSupportingInfo 0..* MS and
    bundleSupportingInfo 0..* MS
* supportingInfo[bundleSupportingInfo] only Reference(Bundle)
* supportingInfo[consentSupportingInfo] only Reference(Consent)
* note MS

---

// File: input/fsh/profiles/ReferralTask.fsh

Profile: ReferralTask
Parent: Task
Id: referral-task
Title: "Referral Task"
Description: "This Task profile represents the state of a task containing a referral service request."
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* identifier 0.. MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier contains
    referralInitiatorTaskIdentifier 0..1 MS and
    referralRecipientTaskIdentifier 0..1 MS
* identifier[referralInitiatorTaskIdentifier].type 1.. MS
* identifier[referralInitiatorTaskIdentifier].type = $v2-0203#PLAC
* identifier[referralInitiatorTaskIdentifier].value 1..1 MS
* identifier[referralInitiatorTaskIdentifier].assigner only Reference(USCoreOrganizationProfile)
* identifier[referralInitiatorTaskIdentifier].assigner MS
* identifier[referralRecipientTaskIdentifier].type 1.. MS
* identifier[referralRecipientTaskIdentifier].type = $v2-0203#FILL
* identifier[referralRecipientTaskIdentifier].value 1..1 MS
* identifier[referralRecipientTaskIdentifier].assigner 1..1 MS
* identifier[referralRecipientTaskIdentifier].assigner only Reference(USCoreOrganizationProfile)
* partOf MS
* partOf ^slicing.discriminator.type = #profile
* partOf ^slicing.discriminator.path = "resolve()"
* partOf ^slicing.rules = #open
* partOf contains supportedPartOf 0..* MS
* partOf[supportedPartOf] only Reference(ReferralTask)
* status MS
* statusReason MS
* statusReason.text 1..1 MS
* businessStatus 0..1 MS
* businessStatus from TaskBusinessStatusVS (extensible)
* businessStatus.text MS
* intent MS 
* intent ^short = "order"
* intent = #order (exactly)
* code 1.. MS
* code = $task-code#fulfill
* code ^short = "Fulfill the focal request"
* focus 1.. MS
* focus only Reference(ReferralServiceRequest)
* for 1.. MS
* for only Reference(USCorePatientProfile or USCoreRelatedPersonProfile or Group)
* authoredOn 1.. MS
* requester 1.. MS
* requester ^short = "Referral Initiator"
* requester only Reference(USCorePractitionerRoleProfile or USCorePractitionerProfile or USCoreOrganizationProfile)
* owner 1.. MS
* owner ^short = "Referral Recipient"
* owner only Reference(USCorePractitionerProfile or USCorePractitionerRoleProfile or USCoreOrganizationProfile or USCoreCareTeam or HealthcareService or USCorePatientProfile or Device or USCoreRelatedPersonProfile)
* note MS
* output MS
* output.value[x] MS

---

// File: input/fsh/valuesets/BSeR_TelcomCommunicationPreferencesVS.fsh

ValueSet: BSeRTelcomCommunicationPreferencesVS
Id: BSeR-TelcomCommunicationPreferencesVS
Title: "BSeR Telcom Communication Preferences VS"
Description: "BSeR Telcom Communication Preferences value set"
* ^meta.versionId = "3"
* ^meta.lastUpdated = "2023-04-12T10:44:00.045Z"
* ^status = #draft
* ^experimental = false
* ^compose.inactive = false
* BSeR#BDTC "Best Day To Call"
* BSeR#BTTC "Best Time To Call"
* BSeR#LMI "Leave Message Indicator"

---

// File: input/fsh/valuesets/TaskBusinessStatusVS.fsh

ValueSet: TaskBusinessStatusVS
Id: TaskBusinessStatusVS
Title: "Task Business Status VS"
Description: "BSeR Task Business Status value set"
* ^meta.versionId = "4"
* ^meta.lastUpdated = "2023-05-07T20:36:12.298Z"
* ^status = #draft
* ^experimental = false
* TaskBusinessStatusCS#2.0 "Service Request Created"
* TaskBusinessStatusCS#3.0 "Service Request Accepted"
* TaskBusinessStatusCS#4.0 "Service Request Declined"
* TaskBusinessStatusCS#5.2 "Service Request Cancellation Requested"
* TaskBusinessStatusCS#5.1.1 "Service Request Event Scheduled"
* TaskBusinessStatusCS#6.0 "Service Request Fulfillment Cancelled"
* TaskBusinessStatusCS#7.0 "Service Request Fulfillment Completed"
* TaskBusinessStatusCS#5.1.2 "Scheduled Service Request Event Unattended"
* TaskBusinessStatusCS#5.1.3 "Scheduled Service Request Event Cancelled"
* TaskBusinessStatusCS#5.1.4 "Service Request Event Completed"

---

