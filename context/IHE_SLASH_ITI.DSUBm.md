File: repos/IHE_SLASH_ITI.DSUBm/sushi-config.yaml

# sushi-config.yaml is documented https://fshschool.org/docs/sushi/configuration/
# ───────────────────────────────────────────────────
# the id should be lowercase made up of "ihe." + {domain acronym} + "." + {profile acronym/short-name}
# e.g. ihe.iti.mhds, or ihe.iti.basicaudit
id: ihe.iti.dsubm
canonical: https://profiles.ihe.net/ITI/DSUBm
version: 1.0.1-current
name: IHE_ITI_DSUBm
title: "Document Subscription for Mobile (DSUBm)"
description:  profile describes the use of document subscription and notification mechanisms for RESTful applications. 
releaseLabel: ci-build
#releaseLabel: Trial-Implementation
#releaseLabel: ballot
#date: 2024-02-29
status: active
publisher:
  ## Find your domain contact on the https://www.ihe.net/ihe_domains page
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
  hl7.fhir.uv.subscriptions-backport.r4:
    version: 1.1.x
    uri: http://hl7.org/fhir/uv/subscriptions-backport/ImplementationGuide/hl7.fhir.uv.subscriptions-backport 
  ihe.iti.mhd: 
    version: 4.2.x
    uri: https://profiles.ihe.net/ITI/MHD/ImplementationGuide/ihe.iti.mhd
  ihe.iti.balp:
    id: iheitibasicaudit
    uri: https://profiles.ihe.net/ITI/BALP/ImplementationGuide/ihe.iti.balp
    version: 1.1.x
  # hl7.terminology.r5: 5.3.0
  # hl7.fhir.uv.extensions: current



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


# list every examplehere with a name, description and that exampleBoolean is true; These are used to populate the artifacts page, and are needed to eliminate build warnings 
# You may delay filling out this section until you approach publication as it is merely a nice to have and eliminates build warnings -- If you do this then you will need above the autoload-resources true
#resources:
# Subscription/Subscription:
#  Patient/my-example-patient:
#    name: My Example Patient
#    description: An example Patient
#    exampleBoolean: true
#  Patient/bad-example: omit


    
#  Subscription/DSUBm-Subscription:
#    name: my example Subscription
#    description: aAn example of Subscription

groups:
  CanonicalSubscriptionTopic:
    name: Canonical SubscriptionTopic
    description: Artifacts related to Basic resource representing the possible topic used in DSUBm 
    resources:
      - SubscriptionTopic/DSUBm-SubscriptionTopic-Folder-Subscription-for-Full-Events
      - SubscriptionTopic/DSUBm-SubscriptionTopic-SubmissionSet-MultiPatient
      - SubscriptionTopic/DSUBm-SubscriptionTopic-Folder-Subscription-MinUpdateOpt
      - SubscriptionTopic/DSUBm-SubscriptionTopic-Folder-Subscription-UpdateOpt
      - SubscriptionTopic/DSUBm-SubscriptionTopic-DocumentReference-PatientDependent
      - SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-PatientDependent-MinUpdate
      - SubscriptionTopic/DSUBm-SubscriptionTopic-DocumentReference-MultiPatient
      - SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-MultiPatient-MinUpdate
      - SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-PatientDependent-AllEvents
      - SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-MultiPatient-AllEvents
      - SubscriptionTopic/DSUBm-SubscriptionTopic-Basic-Folder-Subscription
      - SubscriptionTopic/DSUBm-SubscriptionTopic-SubmissionSet-PatientDependent


pages:
# itemize here each narrative page. Include assigned section numbers when appropriate. The order they appear here is the order they will appear in the TOC and on the next/prev navigation.
  index.md:
    title: Document Subscription for Mobile (DSUBm) Home
    generation: markdown
  volume-1.md:
    title: 1:54 Document Subscription for Mobile (DSUBm)
    generation: markdown
  ITI-110.md:
    title: 2:3.110 Resource Subscription [ITI-110]
    generation: markdown
  ITI-111.md:
    title: 2:3.111 Resource Publish [ITI-111]
    generation: markdown
  ITI-112.md:
    title: 2:3.112 Resource Notify [ITI-112]
    generation: markdown
  ITI-113.md:
    title: 2:3.113 Resource Subscription Search [ITI-113]
    generation: markdown
  ITI-114.md:
    title: 2:3.114 Resource SubscriptionTopic Search [ITI-114]
    generation: markdown
  testplan.md:
    title: "Test Plan"
    generation: markdown
  other.md:
    title: Changes to Other IHE Specifications
    generation: markdown
  download.md:
    title: "Download and Analysis"
    generation: markdown
  issues.md:
    title: Significant Changes and Issues
    generation: markdown

menu:
  DSUBm Home: index.html
  Volume 1:
#    Introduction: volume-1.html
    Actors and Transactions: volume-1.html#1541-dsubm-actors-transactions-and-content-modules
    Actor Options: volume-1.html#1542-actor-options
    Required Groupings: volume-1.html#1543-required-actor-groupings
    Overview: volume-1.html#1544-dsubm-overview
    Security Considerations: volume-1.html#1545-security-considerations
    Cross-Profile Considerations: volume-1.html#1546-cross-profile-considerations
  Volume 2:
    "Resource Subscription [ITI-110]": ITI-110.html
    "Resource Publish [ITI-111]": ITI-111.html
    "Resource Notify [ITI-112]": ITI-112.html
    "Resource Subscription Search [ITI-113]": ITI-113.html
    "Resource SubscriptionTopic Search [ITI-114]": ITI-114.html
  Artifacts: artifacts.html
  Other:
    Changes to Other IHE Specifications: other.html
    Download and Analysis: download.html
    Test Plan: testplan.html

---

// File: input/pagecontent/download.md


You can also download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on the [IHE ITI.DSUBm Github Repo](https://github.com/IHE/ITI.DSUBm).

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

The Document Subscription for Mobile (DSUBm) Profile describes the use of document subscription and notification mechanisms for RESTful applications. In a similar way to the [DSUB](https://profiles.ihe.net/ITI/TF/Volume1/ch-26.html) Profile, a subscription is made in order to receive a notification when a document publication event matches the criteria expressed in the subscription. 

This profile can be applied in a RESTful-only environment as [MHDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-50.html#50) but it can also be used with different non-mobile profiles such as [XDS.b](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) and [DSUB](https://profiles.ihe.net/ITI/TF/Volume1/ch-26.html). This profile intends to grant the same functionality as the [DSUB](https://profiles.ihe.net/ITI/TF/Volume1/ch-26.html) Profile and its supplements regarding Document subscription but also adding some other functionalities (e.g., Subscription Search).

This profile intends to be compliant with [Subscriptions R5 Backport](http://hl7.org/fhir/uv/subscriptions-backport/STU1.1/).


<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide
This guide is organized into the following sections:

- Volume 1: Actors, Transactions and Use Cases
   - [Actors, Transactions, and Content](volume-1.html#1541-dsubm-actors-transactions-and-content-modules)
   - [Actor Options](volume-1.html#1542-actor-options)
   - [Actor Required Groupings](volume-1.html#1543-required-actor-groupings)
   - [Overview](volume-1.html#1544-dsubm-overview)
   - [Security Considerations](volume-1.html#1545-security-considerations)
   - [Cross Profile Considerations](volume-1.html#1546-cross-profile-considerations)
- Volume 2: Transaction Detail
   - [Resource Subscription [ITI-110]](ITI-110.html)
   - [Resource Publish [ITI-111]](ITI-111.html)
   - [Resource Notify [ITI-112]](ITI-112.html)
   - [Resource Subscription Search [ITI-113]](ITI-113.html)
   - [Resource SubscriptionTopic Search [ITI-114]](ITI-114.html)

- Other
   - [Changes to Other IHE Specifications](other.html)
   - [Download and Analysis](download.html)
   - [Test Plan](testplan.html)   

See also the [Table of Contents](toc.html) and the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words: “REQUIRED”, “REQUIRED NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “recommended”, “MAY”, and “OPTIONAL” according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Required Support

The use of ```RequiredSupport``` in StructureDefinition profiles equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).

RequiredSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor SHALL populate the elements marked with RequiredSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit. 
The consuming actors SHOULD handle these elements being populated or being absent/empty. 
Note that sometimes RequiredSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.


---

// File: input/pagecontent/issues.md


## Significant Changes

Significant Changes From Previous Public Comment Version:

- Passed from R4B to R4 version of FHIR
- Profiling the SubscriptionTopic as Basic resource
- Profiling the SubscriptionStatus as Parameter resource
- Eliminated the duplication of MHD artifacts
- Profiled AuditEvent for the transactions
- Closed some Open Issues

## Issues

### Submit an Issue

IHE welcomes [New Issues](https://github.com/IHE/ITI.DSUBm/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues can be submitted to the [Public Comment form](https://www.ihe.net/ITI_Public_Comments/).

As issues are submitted they will be managed at [DSUBm GitHub Issues](https://github.com/IHE/ITI.DSUBm/issues), where discussion and workarounds can be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. 
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).


### Open Issues

- **[DSUBm_003](https://github.com/IHE/ITI.DSUBm/issues/11)**: The DUSBm Profile proposed changes to the [DSUB](https://profiles.ihe.net/ITI/TF/Volume1/ch-26.html) Profile in order to extend DSUB with a RESTfull search functionality of the subscriptions. See [here](other.html) for the proposed changes. Is this functionality something useful to extend DSUB or are the proposed changes too challenging?

- **[DSUBm_005](https://github.com/IHE/ITI.DSUBm/issues/13)**: The [Resource Subscription Search [ITI-113]](ITI-113.html) define the $events operation that permits to retrieve from the Resource Notification Broker the events associated to a Subscription. This operation could be use to retrieve punctually the missed event when, for example, a connection problem occur and the Resource Notification Recipient does note receive the notification. But, this operation requires the Resource Notification Broker to be capable of maintain previous events associated with the Subscriptions. Should the supporting of this operation be required for the Resource Notification Broker or should be maintain optional?

- **[DSUBm_007](https://github.com/IHE/ITI.DSUBm/issues/15)**: The DSUBm Profile proposes notifications in a push mechanism. The [Extensions to the Document Metadata Subscription (DSUB)](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_DSUB_Extensions.pdf)
Profile also include a pull modality for the notification. Should the DSUBm Profile also include a Pull Notification mechanism or is it sufficient to search (e.g., using [Find Document Lists [ITI-66]](https://profiles.ihe.net/ITI/MHD/ITI-66.html) or [Find Document References [ITI-67]](https://profiles.ihe.net/ITI/MHD/ITI-67.html) transactions) on the resources combining query parameters and proper interval of time? At the moment no specific request have been already submitted for this implementation. If the pull notification is needed and a real use case is provided, it is possible to send change proposal during the public comment period. We propose here a possible way to utilize a pure Pull Notification modality using the $events operation of the [Resource Subscription Search [ITI-113]](ITI-113.html) transaction. A possible use case is represented below:

    Ms. Smith is a doctor that, during the patient visit, uses a mobile app in order to see the exam reports produced for the current patient. When the doctor switches the context to the current patient, the app retrieves the notification regarding the new documents that were produced since the last time the app was used for that specific patient.
    During the first visit, Dr. Smith subscribes for documents produced for Mr. Jones. 
    Before the second visit, some medical reports has been produced for Mr. Jones.
    When Mr. Jones shows up for the second visit, the app, used by Dr. Smith, will retrieve the notifications that were produced between the end of the last visit for Mr. Jones and the start of the current visit. Dr. Smith, based on the notifications retrieved by the app, will retrieve only some of the documents.  

    **Document Subscription with Pull Notification for Mobile Device in MHDS Environment Process Flow**

    <figure>
    {%include usecase7-processflow.svg%}
    <figcaption><b>Document Subscription with Pull Notification for Mobile Device in MHDS Environment</b></figcaption>
    </figure>
    <br clear="all">

    **Pre-conditions**:

    The assumption is that the visit app is working in a MHDS Environment. In the central infrastructure, the MHDS Registry is grouped by the Resource Notification Publisher and Resource Notification Broker. The Resource Notification Broker is supporting the Pull notification and is grouped with a Resource Notification Recipient. 

    **Main Flow**:

    1. The visit app during the first visit performs a patient-dependent subscription in order to subscribe for the documents produced for the new patient ([ITI-110] Resource Subscription). In the subscription a local endpoint is indicated in order to explicit that the notification are going to be retrieved with pull modality. 
    2. After the first visit a medical report has been produced ([ITI-65] Provide Document Bundle).
    3. The Resource Notification Publisher deliver a publication event to the Resource Notification Broker([ITI-111] Resource Publish). 
    4. The Resource Notification Broker seeing that the publication event is matching the criteria subscription expressed in the first step, and, recognizing that a local endpoint has been used in the subscription produce a notification towards the grouped Resource Notification Recipient ([ITI-112] Resource Notify). 
    5. At the start of the second visit, when Dr.smith choose Mr. Jones on the Visit app the app will retrieve any notification produced and stashed in the Broker([ITI-113] Resource Subscription Search) using the `$events` operation.
    6. The Visit App will retrieve the Document described in the notification. ([ITI-68] Retrieve Document). 


### Closed Issues
- **[DSUBm_001](https://github.com/IHE/ITI.DSUBm/issues/9)**: This profile defines a Subscription framework using R4B version of FHIR, in order to improve the subscription functional from the R4 version. Are there any compelling arguments to use R4 version of FHIR?

DECISION: based on discussions and survey on FHIR version, decided to switch to R4 version.

- **[DSUBm_002](https://github.com/IHE/ITI.DSUBm/issues/10)**: The AuditEvents for each transaction are not yet profiled because the IG publisher, at the moment, does not allow to further constrain a profile coming from a different FHIR version of the IG.

DECISION: switched from R4B to R4 and proceeded to profile AuditEvent.

- **[DSUBm_004](https://github.com/IHE/ITI.DSUBm/issues/12)**: For the [Resource Notify [ITI-112]](ITI-112.html) transaction, DSUBm defines the expected action for the Resource Notification Broker in order to define a common way to manage errors and connection problems that may occur for all the different type of notifications. Considering the various infrastructure capabilities with which the subscription framework could be implemented, should the expected action be revised? Is it appropriate to define the number of attempts after the first error for the [Heartbeat Notification Message](ITI-112.html#2311243-heartbeat-notification-request-message) and the [Event Notification Message](ITI-112.html#2311245-event-notification-request-message)? Are there other points to focus on?

DECISION: based on discussions and comments on GitHub, decided that it is not necessary to specify further considerations.

- **[DSUBm_006](https://github.com/IHE/ITI.DSUBm/issues/14)**: If the following resources are directly used (with dependency) from MHD Profile: 

    - Minimal DocumentReference 
    - Minimal SubmissionSet
    - Minimal Folder
      
    there are the following errors in the QA report : 
        
        - The reference http://hl7.org/fhir/ValueSet/identifier-use|4.0.1 could not be resolved
        - The reference http://hl7.org/fhir/ValueSet/list-status|4.0.1 could not be resolved
        - The reference http://hl7.org/fhir/ValueSet/list-mode|4.0.1 could not be resolved
        - The reference http://hl7.org/fhir/ValueSet/c80-doc-typecodes could not be resolved
        - The reference http://hl7.org/fhir/ValueSet/document-classcodes could not be resolved
        - The reference http://hl7.org/fhir/ValueSet/document-relationship-type|4.0.1 could not be resolved
        - The constraint 'dom-3' has an expression 'contained.where((('#'+id in (%resource.descendants().reference &#124; %resource.descendants().as(canonical) &#124; %resource.descendants().as(uri) &#124; %resource.descendants().as(url))) or descendants().where(reference = '#').exists() or descendants().where(as(canonical) = '#').exists() or descendants().where(as(canonical) = '#').exists()).not()).trace('unmatched', id).empty()', which differs from the earlier expression provided of 'contained.where(((id.exists() and ('#'+id in (%resource.descendants().reference &#124; %resource.descendants().as(canonical) &#124; %resource.descendants().as(uri) &#124; %resource.descendants().as(url)))) or descendants().where(reference = '#').exists() or descendants().where(as(canonical) = '#').exists() or descendants().where(as(uri) = '#').exists()).not()).trace('unmatched', id).empty()' (invariants are allowed to repeat, but cannot differ)

    The TEMPORARY SOLUTION for now is to replicate some MHD content that is used in DSUBm in R4B. (files in folder "DSUBm_DocumentRelatedResources")

DECISION: switched from R4B to R4, not needed anymore.    

---

// File: input/pagecontent/ITI-110.md

This section corresponds to the Resource Subscription [ITI-110] transaction of the IHE Technical Framework. The Resource Subscription [ITI-110] transaction is used by the Resource Notification Subscriber and Resource Notification Broker Actors to submit a subscription in order to receive a notification.

### 2:3.110.1 Scope

The Resource Subscription [ITI-110] transaction passes a Resource Subscription Request from a Resource Notification Subscriber to a Resource Notification Broker. This transaction can be used to **create a new Subscription** or to **update an existing Subscription**. The update of the subscription is intended to be used only to **unsubscribe (deactivate)** an existing Subscription or **re-activate** an already existing Subscription (in case of errors or deactivation). 

### 2:3.110.2 Actors Roles

**Table 2:3.110.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Resource Notification Subscriber](volume-1.html#154112-resource-notification-subscriber)    | Sends the Subscription request to the Resource Notification Broker |
| [Resource Notification Broker](volume-1.html#154111-resource-notification-broker) | Receives and processes the Subscription request |
{: .grid}

### 2:3.110.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0.1](https://www.hl7.org/FHIR/R4)

### 2:3.110.4 Messages

<figure>
{%include ITI-110-seq.svg%}
<figcaption><b>Figure 2:3.110.4-1: Resource Subscription [ITI-110] Interactions</b></figcaption>
</figure>
<br clear="all">

#### 2:3.110.4.1 Create Subscription Request Message
This message uses the HTTP POST method on the target Resource Notification Broker endpoint to submit the Subscription resource.

##### 2:3.110.4.1.1 Trigger Events

This method is invoked when the Resource Notification Subscriber needs to submit a new subscription resource to the Resource Notification Broker. The Resource Notification Subscriber SHALL have already discovered the SubscriptionTopics supported by the Resource Notification Broker in order to create a subscription. The discovery SHOULD be performed by the [Resource SubscriptionTopic Search [ITI-114]](ITI-114.html) transaction or MAY be performed by any other methods that are out of the scope of this profile.

##### 2:3.110.4.1.2 Message Semantics

The Resource Notification Subscriber SHALL initiate an HTTP request according to the requirements defined in the HL7® FHIR® standard for the "[create](https://hl7.org/fhir/R4/http.html#create)" interaction. The message uses an HTTP POST method to submit a Subscription FHIR Resource as specified in [3.110.5.2.1 Subscription Resource paragraph](#231104121-subscription-resource).

The Resource Notification Subscriber SHALL submit the FHIR Subscription resource in either XML format or JSON format thus the media type of the HTTP body SHALL be either `application/fhir+json` or `application/fhir+xml` respectively.

The Subscription is sent to the base URL as defined in FHIR. See [http://hl7.org/fhir/R4/http.html](https://hl7.org/fhir/R4/http.html) for the definition of "HTTP" access methods and "base."

It is possible to use HTTP protocol or HTTPS protocol. The HTTPS protocol is highly recommended.

###### 2:3.110.4.1.2.1 Subscription Resource

The Subscription resource SHALL be compliant with the [Subscription](https://hl7.org/fhir/R4/Subscription.html) resource and SHALL be compliant with the [Profile: R4/B Topic-Based Subscription](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription). 

The `Subscription.criteria` element SHALL include the canonical URL to a `Basic` resource that represents the Topic that the Subscription resource is related to. The `Subscription.criteria` element SHALL support the [FilterBy Criteria extension](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/StructureDefinition-backport-filter-criteria.html#root). This extension SHALL be used to narrow the subscription triggering events defined in the topic represented in the `Basic` resource.  

All the Subscription resources SHALL support the following extensions:

- [channel type]( http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-channel-type)
- [payload content](http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-payload-content)

The Resource Notification Subscriber SHALL indicate in the `Subscription.payload.content` element the level of detail of the future notification that the Resource Notification Broker will send. The payload content extension defines three types of payload: 

- `empty` = No resource content is transmitted in the notification payload.
- `id-only` = Only the resource id is transmitted in the notification payload.
- `full-resource` = The entire resource is transmitted in the notification payload.

All the Subscription resources SHALL have `Subscription.status="requested"`, `channel.type = "rest-hook"`, and `channel.endpoint` SHALL contain the URL that identifies where the Resource Notification Recipient receives the notification.

All the Subscription resources MAY have `Subscription.end` element set, indicating the instant when the subscription automatically terminates.

For documents, different types of subscription resources MAY be submitted to the Resource Notification Broker.

This profile defines the following types of Subscriptions with related SubscriptionTopics, which the Resource Notification Broker SHALL support and the Resource Notification Subscriber SHALL support at least one of them:

  | Subscription type | SubscriptionTopic |
  |-------------------+----------------|
  | [Patient-Dependent DocumentReference Subscription](StructureDefinition-DSUBm-DocumentReference-PatientDependent-Subscription.html)  |[Patient-Dependent DocumentReference SubscriptionTopic](ITI-110.html#23110461-patient-dependent-documentreference-subscription-topic) |
  | [Multi-Patient DocumentReference Subscription](StructureDefinition-DSUBm-DocumentReference-MultiPatient-Subscription.html) |[Multi-Patient DocumentReference SubscriptionsTopic](#23110462-multi-patient-documentreference-subscriptions-topic)|
  | [Patient-Dependent SubmissionSet Subscription](StructureDefinition-DSUBm-SubmissionSet-PatientDependent-Subscription.html)  | [Patient-Dependent SubmissionSet SubscriptionTopic](#23110463-patient-dependent-submissionset-subscription-topic) |
  | [Multi-Patient SubmissionSet Subscription](StructureDefinition-DSUBm-SubmissionSet-MultiPatient-Subscription.html) |[Multi-Patient SubmissionSet SubscriptionTopic](#23110464-multi-patient-submissionset-subscription-topic) |
  {: .grid}

<a name="2311041211-subscription-with-documentreference-subscription-for-minimal-update-option"></a>
2:3.110.4.1.2.1.1 Subscription with DocumentReference Subscription for Minimal Update Option

When supporting the DocumentReference Subscription for Minimal Update Option, this profile also defines the following types of Subscriptions with related SubscriptionTopics:

  | Subscription type | SubscriptionTopic |
  |-------------------+----------------|
  | [Patient-Dependent DocumentReference Subscriptions with DocumentReference Subscription for Minimal Update Option](StructureDefinition-DSUBm-DocumentReference-PatientDependent-Subscription-MinUpdate.html)  |[Patient-Dependent DocumentReference SubscriptionTopic with DocumentReference Subscription for Minimal Update Option](#231104611-patient-dependent-documentreference-subscription-subscription-with-documentreference-subscription-for-minimal-update-option-topic) |
  | [Multi-Patient DocumentReference Subscription DocumentReference Subscription for Minimal Update Option](StructureDefinition-DSUBm-DocumentReference-MultiPatient-Subscription-MinUpdate.html) |[Multi-Patient DocumentReference SubscriptionTopic with DocumentReference Subscription for Minimal Update Option](#231104621-multi-patient-documentreference-subscription-subscription-with-documentreference-subscription-for-minimal-update-option-topic)|
  {: .grid}

<a name="2311041212-subscription-with-documentreference-subscription-for-full-events-option"></a>
2:3.110.4.1.2.1.2 Subscription with DocumentReference Subscription for Full Events Option

When supporting the DocumentReference Subscription for Full Events Option, this profile also defines the following types of Subscriptions with related SubscriptionTopics:

  | Subscription type | SubscriptionTopic |
  |-------------------+----------------|
  | [Patient-Dependent DocumentReference Subscriptions with DocumentReference Subscription for Full Events Option](StructureDefinition-DSUBm-DocumentReference-PatientDependent-Subscription-AllEvents.html)  |[Patient-Dependent DocumentReference SubscriptionTopic with DocumentReference Subscription for Full Events Option](#231104612-patient-dependent-documentreference-subscription-subscription-with-documentreference-subscription-for-full-events-option-topic) |
  | [Multi-Patient DocumentReference Subscription with DocumentReference Subscription for Full Events Option](StructureDefinition-DSUBm-DocumentReference-MultiPatient-Subscription-AllEvents.html) |[Multi-Patient DocumentReference SubscriptionTopic with DocumentReference Subscription for Full Events Option](#231104622-multi-patient-documentreference-subscription-subscription-with-documentreference-subscription-for-full-events-option-topic)|
  {: .grid}

<a name="2311041213-subscription-with-basic-folder-subscription-option"></a>
2:3.110.4.1.2.1.3 Subscription with Basic Folder Subscription Option

When supporting the Basic Folder Subscription Option, this profile also defines the following types of Subscriptions with related SubscriptionTopics:

  | Subscription type | SubscriptionTopic |
  |-------------------+----------------|
  | [Basic Folder Subscriptions](StructureDefinition-DSUBm-Basic-Folder-Subscription.html) |[Basic Folder SubscriptionTopic](#23110465-basic-folder-subscription-topic) |
  {: .grid}

<a name="2311041214-subscription-with-folder-subscription-for-minimal-update-option"></a>
2:3.110.4.1.2.1.4 Subscription with Folder Subscription for Minimal Update Option

When supporting the Folder Subscription for Minimal Update Option, this profile also defines the following types of Subscriptions with related SubscriptionTopics:

  | Subscription type | SubscriptionTopic |
  |-------------------+----------------|  
  | [Folder Subscriptions with Folder Subscription for Minimal Update Option](StructureDefinition-DSUBm-Folder-Subscription-MinUpdateOpt.html) |[Folder SubscriptionTopic with Folder Subscription for Minimal Update Option](#231104651-folder-subscription-with-folder-subscription-for-minimal-update-option-topic) |
  {: .grid}

<a name="2311041215-subscription-with-folder-subscription-for-update-option"></a>
2:3.110.4.1.2.1.5 Subscription with Folder Subscription for Update Option

When supporting the Folder Subscription for Update Option, this profile also defines the following types of Subscriptions with related SubscriptionTopics:

  | Subscription type | SubscriptionTopic |
  |-------------------+----------------|
  | [Folder Subscriptions with Folder Subscription for Update Option](StructureDefinition-DSUBm-Folder-Subscription-UpdateOpt.html) |[Folder SubscriptionTopic with Folder Subscription for Update Option](#231104652-folder-subscription-with-folder-subscription-for-update-option-topic) |
  {: .grid}

<a name="2311041216-subscription-with-folder-subscription-for-full-events-option"></a>
2:3.110.4.1.2.1.6 Subscription with Folder Subscription for Full Events Option

When supporting the Folder Subscription for Full Events Option, this profile also defines the following types of Subscriptions with related SubscriptionTopics:

  | Subscription type | SubscriptionTopic |
  |-------------------+----------------|
  | [Folder Subscriptions with Folder Subscription for Full Events Option](StructureDefinition-DSUBm-Folder-Subscription-for-Full-Events.html) |[Folder SubscriptionTopic with Folder Subscription for Full Events Option](#231104653-folder-subscription-with-folder-subscription-for-full-events-option-topic) |
  {: .grid}

##### 2:3.110.4.1.3 Expected Actions

Upon receiving the request message the Resource Notification Broker SHALL verify the following conditions: 

- the `Basic` resource (that represents the topic which the  `Subscription` resource is related to) referred in the `Subscription.criteria` element received in the Subscription resource is valid;
- all requested filters are defined in the requested topic;
- the channel-type is `rest-hook`;
- the channel endpoint is valid for the channel provided (i.e., it is a valid URL, according with the data type);
- the payload configuration is known and implemented by the server;
- the payload configuration is valid for the channel type requested (e.g., complies with the Resource Notification Broker security policy);
- the termination time (`Subscription.end`), if present, express a valid timestamp in the future.

The Resource Notification Broker shall enforce all the [Security Considerations.](#231106-security-considerations)

The Resource Notification Broker MAY enforce to not duplicate a Subscription on the basis of the information transmitted in the request message (e.g., criteria, endpoint, user authentication, etc.) in order to prevent multiple Subscriptions and Notifications.

Based on the outcome of the conditions above, the Resource Notification Broker SHALL accept or reject the subscription resource received. If one or more of the conditions are false the Resource Notification Broker SHALL reject the Subscription resource and respond with an error message, which is defined in [Subscription Error Response Message [ITI-110]](#2311045-subscription-error-response-message). 
Otherwise, the Resource Notification Broker SHALL accept the Subscription resource, create the subscription, respond with a success message, which is defined in [Create Subscription Response Message [ITI-110]](#2311042-create-subscription-response-message) and proceed to performing the handshake process.

The Resource Notification Broker SHALL support the handshake process to verify that the endpoint that identifies the Resource Notification Recipient, in the `Subscription.channel.endpoint` element of the subscription resource, is reachable before effectively activating the subscription.
The Resource Notification Broker SHALL set initial status to `requested`, pending verification of the nominated endpoint URL. Then, the Resource Notification Broker SHALL send to the Resource Notification Recipient a [Handshake Notification Message [ITI-112]](ITI-112.html#2311241-handshake-notification-request-message). After a successful handshake notification has been sent and accepted, the Resource Notification Broker SHALL update the status to `active`. Any errors in the initial handshake SHALL result in the status being changed to `error`. Note that the Resource Notification Subscriber SHOULD implement the [Subscription Search [ITI-113]](ITI-113.html) transaction in order to verify the activation of the subscription. 

When the `Subscription` resource uses the `heartbeatPeriod`, if accepted, the Resource Notification Broker SHOULD send one [Heartbeat Notification Message [ITI-112]](ITI-112.html#2311243-heartbeat-notification-request-message) per interval on the accepted and active subscription.

Once the Subscription is activated, the Resource Notification Broker SHALL monitor resources based on the Subscription criteria and, if matches, SHALL send the appropriate Resource Notification Recipient a [Event Notification Message [ITI-112]](ITI-112.html#2311245-event-notification-request-message).

Further considerations needs to be done, for the activation of a Subscription, considering DSUBm as an interface for a DSUB environment.

###### 2:3.110.4.1.3.1 Expected Actions with DSUBm as an interface for DSUB

If the Resource Notification Broker is grouped with DSUB Document Metadata Subscriber and DSUB Document Metadata Notification Recipient, considering [DSUBm as an interface for DSUB](volume-1.html#15463-dsubm-as-an-interface-for-dsub) model, if the subscription is accepted, the Resource Notification Broker SHALL also trigger a [Subscribe Request message](https://profiles.ihe.net/ITI/TF/Volume2/ITI-52.html#3.52.4.2) towards the DSUB Document Metadata Notification Broker from the DSUB Document Metadata Subscriber with an Document Metadata Subscribe [ITI-52] transaction.

The mapping between the Subscription resource contained in the Resource Subscription [ITI-110] transaction and the Document Metadata Subscribe [ITI-52] transaction SHALL be as following:

- If the Subscription resource has a `Subscription.payload = "full-resource"` the Document Metadata Subscribe [ITI-52]  transaction SHALL have a ["ihe:FullDocumentEntry" Topic Expression](https://profiles.ihe.net/ITI/TF/Volume2/ITI-52.html#3.52.5.2.2). Otherwise a ["ihe:MinimalDocumentEntry" Topic Expression](https://profiles.ihe.net/ITI/TF/Volume2/ITI-52.html#3.52.5.1.2) SHALL be used.

- Depending on the type of the Subscription, the AdHocQuery/@id attribute and the Filters parameter of the Document Metadata Subscribe [ITI-52] transaction SHALL be set as follows:

  | Subscription type | AdHocQuery/@id | Filter parameter |
  |-------------------+--------------+------------|
  | Patient-Dependent DocumentReference Subscriptions  | `urn:uuid:aa2332d0-f8fe-11e0-be50-0800200c9a66` | Mapping based on [Table 2:3.110.4.7-1](#table-docRef) |
  | Multi-Patient DocumentReference Subscriptions | `urn:uuid:742790e0-aba6-43d6-9f1fe43ed9790b79` | Mapping based on [Table 2:3.110.4.7-1](#table-docRef) |
  | Patient-Dependent SubmissionSet Subscriptions  | `urn:uuid:fbede94e-dbdc-4f6b-bc1f-d730e677cece`| Mapping based on [Table 2:3.110.4.7-2](#table-submiss)|
  | Multi-Patient SubmissionSet Subscriptions| `urn:uuid:868cad3d-ec09-4565-b66c-1be10d034399`|Mapping based on [Table 2:3.110.4.7-2](#table-submiss) |
  | Basic Folder Subscriptions | `urn:uuid:9376254e-da05-41f5-9af3-ac56d63d8ebd`|Mapping based on [Table 2:3.110.4.7-3](#table-folder) |
  {: .grid}

- If the Subscription resource has the `Subscription.end` element set, the Document Metadata Subscribe [ITI-52] transaction SHALL have a `wsnt:InitialTerminationTime` element set.

When the Document Metadata Subscribe [ITI-52] transaction has a successful result, the Resource Notification Broker SHALL maintain the coupling between the Subscription Resource id and the webservice endpoint present in the `Address` element of the Document Metadata Subscribe [ITI-52] response message, in order to be capable of managing a later unsubscribe.

If the DSUB Document Metadata Notification Broker sends an assigned duration for the subscription, the Resource Notification Broker SHALL associate the assigned duration with the accepted subscription request and eventually unsubscribe towards the DSUB Document Metadata Notification Broker when expired.

#### 2:3.110.4.2 Create Subscription Response Message

The Resource Notification Broker sends a Resource Subscription Response Message to respond to a Create Subscription Request Message.  

##### 2:3.110.4.2.1 Trigger Events

When the Resource Notification Broker has finished successfully evaluating the subscription received and the operation, the Resource Notification Broker sends this message to the Resource Notification Subscriber acknowledging the result of the creation of the resource. 

##### 2:3.110.4.2.2 Message Semantics
The Resource Notification Broker SHALL respond with an `HTTP 201 Created` status code as indicated for "[create](https://hl7.org/fhir/R4/http.html#create)" and the Resource Notification Broker SHALL return the entire resource in which the status SHALL be `requested`. If the Resource Notification Broker has assigned a termination time, the element `end` SHALL be set.

##### 2:3.110.4.2.3 Expected Actions

The Resource Notification Subscriber processes the response according to application-defined rules.

For the Subscription creation:

  - If the Resource Notification Subscriber had not indicated a requested duration for the subscription, the Resource Notification Broker MAY send an assigned duration for the subscription (if any), using the `Subscription.end` element.

  - If the Resource Notification Broker sends an assigned duration for the subscription, the Resource Notification Subscriber SHALL associate the assigned duration with the accepted subscription request.

  - The Resource Notification Subscriber SHALL associate the accepted subscription request with the subscription id assigned by the Resource Notification Broker in order to be able to send cancellations for existing subscriptions.

#### 2:3.110.4.3 Update Subscription Request Message
This message uses the HTTP PUT method on the target Resource Notification Broker endpoint to update an existing Subscription resource in order to:
- unsubscribe, or
- re-activate it.

##### 2:3.110.4.3.1 Trigger Events

This method is invoked when the Resource Notification Subscriber needs to:
- unsubscribe an already existing subscription
- re-activate an already existing subscription

so it sends an update of the Subscription resource to the Resource Notification Broker.

##### 2:3.110.4.3.2 Message Semantics

The Resource Notification Subscriber SHALL initiate an HTTP request according to requirements defined in the HL7® FHIR® standard for "[update](https://hl7.org/fhir/R4/http.html#update)" interaction. The message uses an HTTP PUT method to update a Subscription FHIR Resource previously created (see section [2:3.110.4.1 Create Subscription Request Message](#2311041-create-subscription-request-message)). 

The `Subscription.id` element SHALL be valued with the id of the Subscription to be updated.
 
In order to unsubscribe, the Subscription Resource SHALL have `status=off`.

In order to re-activate an already existing Subscription, the Subscription Resource SHALL have `status=requested`.

The Resource Notification Subscriber SHALL submit the FHIR Subscription resource in either XML format or JSON format thus the media type of the HTTP body SHALL be either `application/fhir+json` or `application/fhir+xml` respectively.

The Resource Subscription message is sent to the base URL as defined in FHIR. See [http://hl7.org/fhir/R4/http.html](https://hl7.org/fhir/R4/http.html) for the definition of “HTTP” access methods and “base”.

It is possible to use HTTP protocol or HTTPS protocol. The HTTPS protocol is highly recommended.

##### 2:3.110.4.3.3 Expected Actions

Upon receiving the request message the Resource Notification Broker SHALL verify the following conditions: 

- that the Subscription resource to be updated exists (Prevent Update as Create);
- the Subscription.status sended is `off` or the Subscription.status sended is `requested` and the actual Subscription.status is `error` or `off`. 

The Resource Notification Broker SHALL enforce all the [Security Considerations](#231106-security-considerations).

Based on the outcome of the conditions above the Resource Notification Broker SHALL accept or reject the update of the subscription resource received. If all the conditions are true the Resource Notification Broker SHALL:
- in case of unsubscribe, update the Subscription resource and deactivate the subscription (`status=off`). When deactivated, the Resource Notification Broker SHOULD sent a [Subscription Deactivation Notification [ITI-112]](ITI-112.html#2311247-subscription-deactivation-notification-request-message) to the Resource Notification Recipient. No other notification SHALL be sent.
- in case of re-activation of an already existing subscription, follow the Expected Actions which are reported in Section [2:3.110.4.1.3 Expected Actions](#23110413-expected-actions).

Further considerations needs to be done in the following paragraph, considering DSUBm as an interface for DSUB environment.

###### 2:3.110.4.3.3.1 Expected Actions with DSUBm as an interface for DSUB for unsubscribe

If the Resource Notification Broker is grouped with DSUB Document Metadata Subscriber and DSUB Document Metadata Notification Recipient, considering [DSUBm as an interface for DSUB](volume-1.html#15463-dsubm-as-an-interface-for-dsub) model, if the update of the subscription is accepted, the Resource Notification Broker SHALL trigger the Document Metadata Subscriber to send an [Unsubscribe Request message](https://profiles.ihe.net/ITI/TF/Volume2/ITI-52.html#3.52.4.3) towards the Document Metadata Notification Broker with an [ITI-52] Document Metadata Subscribe transaction. The message SHALL be sent to the webservice endpoint previously associated to the Subscription id (see section [2:3.110.4.1.3.1 Expected Actions](#231104131-expected-actions-with-dsubm-as-an-interface-for-dsub) section). 

###### 2:3.110.4.3.3.2 Expected Actions with DSUBm as an interface for DSUB for re-activation

If the Resource Notification Broker is grouped with DSUB Document Metadata Subscriber and DSUB Document Metadata Notification Recipient, considering [DSUBm as an interface for DSUB](volume-1.html#15463-dsubm-as-an-interface-for-dsub) model, when the update is for re-activate errored Subscription (Subscription.status sended is `requested` and the actual Subscription.status is `error`) this grouping does not require further Expected Actions.

Instead, for this grouping, when the update is for re-activate turned off Subscription (Subscription.status sended is `requested` and the actual Subscription.status is `off`) the Resource Notification Broker SHALL consider the re-activation like a new Subscription that SHALL be propagated to the DSUB Document Metadata Notification Broker. So, the Resource Notification Broker SHALL trigger a [Subscribe Request message](https://profiles.ihe.net/ITI/TF/Volume2/ITI-52.html#3.52.4.2) towards the DSUB Document Metadata Notification Broker from the DSUB Document Metadata Subscriber with an Document Metadata Subscribe [ITI-52] transaction, following what is defined in Section [Expected Actions with DSUBm as an interface for DSUB](#231104131-expected-actions-with-dsubm-as-an-interface-for-dsub). 

#### 2:3.110.4.4 Update Subscription Response Message

The Resource Notification Broker sends a Resource Subscription Response Message to respond to an Update Subscription Request Message.  

##### 2:3.110.4.4.1 Trigger Events

When the Resource Notification Broker has finished successfully evaluating the subscription received and the operation, the Resource Notification Broker sends this message to the Resource Notification Subscriber acknowledging the result the update of the resource. 

##### 2:3.110.4.4.2 Message Semantics
The Resource Notification Broker SHALL respond with an `HTTP 200 OK` status code as indicated for "[update](https://hl7.org/fhir/R4/http.html#update)" and the Resource Notification Broker SHALL return the entire resource in which the status SHALL be `off` for subscription deactivation or `requested` for subscription re-activation from error.

##### 2:3.110.4.4.3 Expected Actions

The Resource Notification Subscriber processes the response according to application-defined rules.

#### 2:3.110.4.5 Subscription Error Response Message

The Resource Notification Broker sends a Resource Subscription Response Message to respond in case of error to an Create Subscription Request Message or to an Update Subscription Request Message.  

##### 2:3.110.4.5.1 Trigger Events

When the Resource Notification Broker has finished evaluating the Subscription received and the operation, evaluating that it cannot proceeds due to error(s), the Resource Notification Broker sends this message to the Resource Notification Subscriber acknowledging the result the creation or the update of the resource. 

##### 2:3.110.4.5.2 Message Semantics

The Resource Notification Broker SHALL respond with an appropriate HTTP failure status code, based on the issue found. Further specifics, including the use of the [OperationOutcome](https://hl7.org/fhir/R4/operationoutcome.html) resource in the response message, SHALL follow what is indicated in "[create](https://hl7.org/fhir/R4/http.html#create)" and "[rejecting-updates](https://hl7.org/fhir/R4/http.html#rejecting-updates)" sections of FHIR core, based on the operation that is occurring on the Subscription resource. 

##### 2:3.110.4.5.3 Expected Actions

The Resource Notification Subscriber processes the response according to application-defined rules.

#### 2:3.110.4.6 Subscription Topic and Filter Expressions

This section clarifies the Subscription Topics and the filter parameters for each type of Subscription that this profile defines. 

Further, for each type of subscription, the events for which subscriptions are possible are specified that the Resource Notification Broker SHALL evaluate. The Resource Notification Broker becomes aware of such events either via a Resource Publish [ITI-111] transaction, or via other mechanisms not specified by this profile.

<a name="Patient-Dependent DocumentReference Subscription Topic"> </a>

##### 2:3.110.4.6.1 Patient-Dependent DocumentReference Subscription Topic

For this type of subscription, the stream of events for which subscriptions are possible is limited to events representing the **creation** of DocumentReference Resources related to Documents. Note that these events could be determined by Document Entry Objects creation in XDS environment. Note that these creation events could be happened with other events.

For this type of subscription, the possible subscription filter parameters are:

- `author.given` and `author.family`
- `category`
- `event`
- `facility`
- `format`
- `patient`
- `patient.identifier`
- `security-label`
- `setting`
- `type`
- `status`

For the definition of these parameters see [ITI-67 Query Search Parameters](https://profiles.ihe.net/ITI/MHD/ITI-67.html#23674121-query-search-parameters).

At least one of the patient or patient.identifier parameters SHALL be used.

With the exception of status and patient or patient.identifier, all parameters MAY be multi-valued.

The canonical URL of this SubscriptionTopic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-DocumentReference-PatientDependent`.

The Resource Notification Broker SHALL support all the filter parameters that are expressed in the SubscriptionTopic. The Resource Notification Broker SHALL determine if there is a Subscription which matches any of the DocumentReference resources in an event. The evaluation performed is likely a search operation using the criteria in the Subscription. If it matches, the Resource Notification Broker SHALL send an [Event Notification Message [ITI-112]](ITI-112.html#2311245-event-notification-request-message). If the `Subscription.payload.content` includes resources, the DocumentReference resources SHALL be present.

The canonical instance of this SubscriptionTopic is reported here: [Patient-Dependent DocumentReference SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-DocumentReference-PatientDependent.html).

###### 2:3.110.4.6.1.1 Patient-Dependent DocumentReference Subscription Subscription with DocumentReference Subscription for Minimal Update Option Topic

When supporting the [DocumentReference Subscription for Minimal Update Option](volume-1.html#15421-documentreference-subscription-for-minimal-update-option), this Subscription Topic extends the [Patient-Dependent DocumentReference SubscriptionTopic](ITI-110.html#23110461-patient-dependent-documentreference-subscription-topic) in this way:

- the stream of events for which subscriptions are possible also **includes** events representing **only the update of the "status" and the deletion** of DocumentReference resources related to Documents. Note that these events could be determined by Document Entry Objects updated or deleted in an XDS environment.

The canonical URL of this SubscriptionTopic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-DocReference-PatientDependent-MinUpdate`.

The canonical instance of this SubscriptionTopic is reported here: [Patient-Dependent DocumentReference SubscriptionTopic with DocumentReference Subscription for Minimal Update Option](SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-PatientDependent-MinUpdate.html).

###### 2:3.110.4.6.1.2 Patient-Dependent DocumentReference Subscription Subscription with DocumentReference Subscription for Full Events Option Topic

When supporting the [DocumentReference Subscription for Full Events Option](volume-1.html#15422-documentreference-subscription-for-full-events-option), this Subscription Topic extends the [Patient-Dependent DocumentReference SubscriptionTopic](#23110461-patient-dependent-documentreference-subscription-topic) in this way:

- the stream of events for which subscriptions are possible also **includes** events representing **the update and the deletion** of DocumentReference Resources related to Documents. Note that these events could be determined by Document Entry Objects updated or deleted in an XDS environment.

The canonical URL of this SubscriptionTopic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-DocReference-PatientDependent-AllEvents`.

The canonical instance of this SubscriptionTopic is reported here: [Patient-Dependent DocumentReference SubscriptionTopic with Updates to document sharing resources Option](SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-PatientDependent-AllEvents.html).

##### 2:3.110.4.6.2 Multi-Patient DocumentReference Subscriptions Topic

For this type of subscription, the stream of events for which subscriptions are possible is limited to events representing the **creation** of DocumentReference Resources related to Documents. Note that these events could be determined from Document Entry Objects created in an XDS environment. Note that these creation events could happen with other events.

For this type of subscription, the possible subscription filter parameters are:

- `author.given` and `author.family`
- `category`
- `event`
- `facility`
- `format`
- `security-label`
- `setting`
- `type`
- `status`

For the definition of these parameters see [ITI-67 Query Search Parameters](https://profiles.ihe.net/ITI/MHD/ITI-67.html#23674121-query-search-parameters).

With the exception of status, all parameters MAY be multi-valued.

The canonical URL of this SubscriptionTopic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-DocumentReference-MultiPatient`.

The Resource Notification Broker SHALL support all the filter parameters that are expressed in the SubscriptionTopic. The Resource Notification Broker SHALL determine if there is a Subscription which matches any of the DocumentReference resources in an event. The evaluation performed is likely a search operation using the criteria in the Subscription. If it matches, the Resource Notification Broker SHALL send a [Event Notification Message [ITI-112]](ITI-112.html#2311245-event-notification-request-message). If the `Subscription.payload.content` includes resources, the DocumentReference resources SHALL be present.

The canonical instance of this SubscriptionTopic is reported here: [Multi-Patient DocumentReference SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-DocumentReference-MultiPatient.html).


###### 2:3.110.4.6.2.1 Multi-Patient DocumentReference Subscription Subscription with DocumentReference Subscription for Minimal Update Option Topic

When the [DocumentReference Subscription for Minimal Update Option](volume-1.html#15421-documentreference-subscription-for-minimal-update-option) is supported, the following Subscription Topic extends the [Multi-Patient DocumentReference Subscriptions Topic](#23110462-multi-patient-documentreference-subscriptions-topic) in this way:

- the stream of events for which subscriptions are possible also **includes** events representing **only the update of the "status" and the deletion** of DocumentReference Resources related to Documents. Note that these events could be determined by Document Entry Objects updated or deleted in an XDS environment.

The canonical URL of this SubscriptionTopic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-DocReference-MultiPatient-MinUpdate`.

The canonical instance of this extended SubscriptionTopic is reported here: [Multi-Patient DocumentReference SubscriptionTopic with DocumentReference Subscription for Minimal Update Option](SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-MultiPatient-MinUpdate.html).

###### 2:3.110.4.6.2.2 Multi-Patient DocumentReference Subscription Subscription with DocumentReference Subscription for Full Events Option Topic

When the [DocumentReference Subscription for Full Events Option](volume-1.html#15422-documentreference-subscription-for-full-events-option) is supported, the following Subscription Topic extends the [Multi-Patient DocumentReference Subscriptions Topic](#23110462-multi-patient-documentreference-subscriptions-topic) in this way:

- the stream of events for which subscriptions are possible also **includes** events representing **the update and the deletion** of DocumentReference Resources related to Documents. Note that these events could be determined by Document Entry Objects updated or deleted in an XDS environment.

The canonical URL of this SubscriptionTopic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-DocReference-MultiPatient-AllEvents`.

The canonical instance of this extended SubscriptionTopic is reported here: [Multi-Patient DocumentReference SubscriptionTopic with DocumentReference Subscription for Full Events Option](SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-MultiPatient-AllEvents.html).

##### 2:3.110.4.6.3 Patient-Dependent SubmissionSet Subscription Topic

For this type of subscription, the stream of events for which subscriptions are possible is limited to events representing the **creation** of SubmissionSet type List Resources related to SubmissionSet. Note that these events could be determined from SubmissionSet Objects created in an XDS environment. Note that these creation events could be happened with other events.

For this type of subscription, the possible subscription filter parameters are:

- `code`
- `patient`
- `patient.identifier`
- `source.given` and `source.family`
- `sourceId`
- `intendedRecipient`

For the definition of these parameters see [ITI-66 Query Search Parameters](https://profiles.ihe.net/ITI/MHD/ITI-66.html#23664121-query-search-parameters).

At least one of the patient or patient.identifier parameters SHALL be used.

Only the source.given, source.family, sourceId and intendedRecipient parameters MAY be multi-valued.

The canonical URL of this Subscription Topic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-SubmissionSet-PatientDependent`.

The Resource Notification Broker SHALL support all the filter parameters that are expressed in the SubscriptionTopic. The Resource Notification Broker SHALL determine if there is a Subscription which matches any of the SubmissionSet type List resources in an event. The evaluation performed is likely a search operation using the criteria in the Subscription. If it matches, the Resource Notification Broker SHALL send an [Event Notification Message [ITI-112]](ITI-112.html#2311245-event-notification-request-message). If the `Subscription.payload.content` includes resources, the SubmissionSet type List resources SHALL be present.

The canonical instance of this SubscriptionTopic is reported here: [Patient-Dependent SubmissionSet SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-SubmissionSet-PatientDependent.html).

##### 2:3.110.4.6.4 Multi-Patient SubmissionSet Subscription Topic

For this type of subscription, the stream of events for which subscriptions are possible is limited to events representing the **creation** of SubmissionSet type List Resources related to SubmissionSet. Note that these events could be determined from SubmissionSet Objects creation in an XDS environment. Note that these creation events could happen with other events.

For this type of subscription, the possible subscription filter parameters are:

- `code`
- `source.given` and `source.family`
- `sourceId`
- `intendedRecipient`

For the definition of these parameters see [ITI-66 Query Search Parameters](https://profiles.ihe.net/ITI/MHD/ITI-66.html#23664121-query-search-parameters).

All the parameters MAY be multi-valued.

The canonical URL of this SubscriptionTopic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-SubmissionSet-MultiPatient`.

The Resource Notification Broker SHALL support all the filter parameters that are expressed in the SubscriptionTopic. The Resource Notification Broker SHALL determine if there is a Subscription which matches any of the SubmissionSet type List resources in an event. The evaluation performed is likely a search operation using the criteria in the Subscription. If it matches, the Resource Notification Broker SHALL send an [Event Notification Message [ITI-112]](ITI-112.html#2311245-event-notification-request-message). If the `Subscription.payload.content` includes resources, the SubmissionSet type List resources SHALL be present.

The canonical instance of this SubscriptionTopic is reported here: [Multi-Patient SubmissionSet SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-SubmissionSet-MultiPatient.html).

##### 2:3.110.4.6.5 Basic Folder Subscription Topic
When the [Basic Folder Subscription Option](volume-1.html#15423-basic-folder-subscription-option) is supported, this type of subscription is admitted. For this type of subscription, the stream of events for which subscriptions are possible is limited to events representing **the creation of Folder type List Resources and the update to insert new documents in Folder**. Note that these events could be determined from Folder Objects created or updated and Association Object creation in an XDS environment. Note that these creation or updating events could happen with other events.

For this type of subscription, the possible subscription filter parameters are:

- `code`
- `patient`
- `patient.identifier`
- `identifier`
- `designationType`
- `status`

For the definition of these parameters see [ITI-66 Query Search Parameters](https://profiles.ihe.net/ITI/MHD/ITI-66.html#23664121-query-search-parameters).

At least one of the patient or patient.identifier parameters SHALL be used.

Only the identifier and designationType parameters MAY be multi-valued.

The canonical URL of this SubscriptionTopic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-Basic-Folder-Subscription`.

The Resource Notification Broker SHALL support all the filter parameters that are expressed in the SubscriptionTopic. The Resource Notification Broker SHALL determine if there is a Subscription which matches any of the Folder type List resources in an event. The evaluation performed is likely a search operation using the criteria in the Subscription. If it matches, the Resource Notification Broker SHALL send an [Event Notification Message [ITI-112]](ITI-112.html#2311245-event-notification-request-message). If the `Subscription.payload.content` includes resources, the Folder type List resources SHALL be present.

The canonical instance of this SubscriptionTopic is reported here: [Basic Folder SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-Basic-Folder-Subscription.html).

###### 2:3.110.4.6.5.1 Folder Subscription with Folder Subscription for Minimal Update Option Topic

When the [Folder Subscription for Minimal Update Option](volume-1.html#15424-folder-subscription-for-minimal-update-option) is supported, this Subscription Topic extends the [Basic Folder Subscription Topic](#23110465-basic-folder-subscription-topic) in this way:

- the stream of events for which subscriptions are possible **includes** also events representing the **update to remove documents and update of the "status"** of Folder type List Resources related to Folders. Note that these events could be determined from Folder Objects update or Association Objects update or delete in an XDS environment.

The canonical URL of this Subscription Topic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-Folder-Subscription-MinUpdateOpt`.

The canonical instance of this SubscriptionTopic is reported here: [Folder SubscriptionTopic with Folder Subscription for Minimal Update Option](SubscriptionTopic-DSUBm-SubscriptionTopic-Folder-Subscription-MinUpdateOpt.html).

###### 2:3.110.4.6.5.2 Folder Subscription with Folder Subscription for Update Option Topic

When the [Folder Subscription for Update Option](volume-1.html#15425-folder-subscription-for-update-option) is supported, this Subscription Topic extends the [Basic Folder Subscription Topic](#23110465-basic-folder-subscription-topic) in this way:

- the stream of events for which subscriptions are possible **includes** also events representing **all the updates** of Folder type List Resources related to Folders. Note that these events could be determined from Folder Objects update or Association Objects creation, update or delete in an XDS environment.

The canonical URL of this Subscription Topic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-Folder-Subscription-UpdateOpt`.

The canonical instance of this SubscriptionTopic is reported here: [Folder SubscriptionTopic with Folder Subscription for Minimal Update Option](SubscriptionTopic-DSUBm-SubscriptionTopic-Folder-Subscription-UpdateOpt.html).

###### 2:3.110.4.6.5.3 Folder Subscription with Folder Subscription for Full Events Option Topic

When the [Folder Subscription for Full Events Option](volume-1.html#15426-folder-subscription-for-full-events-option) is supported, this Subscription Topic extends the [Basic Folder Subscription Topic](#23110465-basic-folder-subscription-topic) in this way:

- the stream of events for which subscriptions are possible **includes** also events representing **all the updates and the deletion** of Folder type List Resources related to Folders. Note that these events could be determined from Folder Objects update or deletion, or Association Objects creation, update or delete in an XDS environment.

The canonical URL of this Subscription Topic that SHALL be used in the `Subscription.criteria` element is `https://profiles.ihe.net/ITI/DSUBm/DSUBm-SubscriptionTopic-Folder-Subscription-for-Full-Events`.

The canonical instance of this SubscriptionTopic is reported here: [Folder SubscriptionTopic with Folder Subscription for Full Events Optionn](SubscriptionTopic-DSUBm-SubscriptionTopic-Folder-Subscription-for-Full-Events.html).


#### 2:3.110.4.7 Mapping between DSUBm Criteria and DSUB subscription Filters. 
If the Resource Notification Broker is grouped with Document Metadata Subscriber and Document Metadata Notification Recipient, considering [DSUBm as an interface for DSUB](volume-1.html#15463-dsubm-as-an-interface-for-dsub) model, the `Subscription.criteria` available parameters in the Subscription resource SHALL be mapped with the DSUB filter Expression. 

<a name="table-docRef"> </a>

**Table 2:3.110.4.7-1: DSUBm DocumentReference subscription criteria mapping to DSUB DocumentEntry Filters**

| **DSUBm<br>Subscription.criteria** 	| **DSUB <br>DocumentEntry Filters**      	|
|------------------------------------------------	|---------------------------------------------	|
| author.given / author.family                   	| $XDSDocumentEntryAuthorPerson               	|
| category                                       	| $XDSDocumentEntryClassCode                  	|
| event                                          	| $XDSDocumentEntryEventCodeList              	|
| facility                                       	| $XDSDocumentEntryHealthcareFacilityTypeCode 	|
| format                                         	| $XDSDocumentEntryFormatCode                 	|
| patient or patient.identifier                  	| $XDSDocumentEntryPatientId                  	|
| security-label                                 	| $XDSDocumentEntryConfidentialityCode        	|
| type                                           	| $XDSDocumentEntryTypeCode                   	|
| status                                         	| none                                        	|
{: .grid}


<a name="table-submiss"> </a>

**Table 2:3.110.4.7-2: DSUBm SubmissionSet subscription criteria mapping to DSUB DocumentEntry Filters**

| **DSUBm<br>Subscription.criteria** |    **DSUB <br>SubmissionSet Filters**   |
|------------------------------------------------|---------------------------------------------|
| code                                           | none               |
| patient or patient.identifier                  | $XDSSubmissionSetPatientId                  |
| source.given or source.family                  | $XDSSubmissionSetAuthorPerson              |
| sourceId                                       | $XDSSubmissionSetSourceId              |
| intendedRecipient                              | $XDSSubmissionSetIntendedRecipient |
{: .grid}

<a name="table-folder"> </a>

**Table 2:3.110.4.7-3: DSUBm Folder subscription criteria mapping to DSUB DocumentEntry Filters**

| **DSUBm<br>Subscription.criteria** |    **DSUB <br>Folder Filters**   |
|------------------------------------------------|---------------------------------------------|
| code                                           | none             |
| patient or patient.identifier                  | $XDSFolderPatientId                 |
| identifier                                     | $XDSFolderUniqueId              |
| designationType                                | $XDSFolderCodeList |
| status                                         | none                                        |
{: .grid}
 
### 2:3.110.5 CapabilityStatement Resource
The Resource Notification Subscriber implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Subscriber ar listed in Section [1:54.1.1.2 Resource Notification Subscriber](volume-1.html#154112-resource-notification-subscriber).

The Resource Notification Broker implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Broker ar listed in Section [1:54.1.1.1 Resource Notification Broker](volume-1.html#154111-resource-notification-broker).


### 2:3.110.6 Security Considerations 
See [DSUBm Security Considerations](volume-1.html#1545-security-considerations). 

The Resource Notification Broker SHALL control that the Resource Notification Subscriber is acceptable and authorized to create or update a Subscription Resource. It's highly RECOMMENDED that the Resource Notification Subscriber SHOULD use some form of authentication method when creating or updating a Subscription.
The Resource Notification Broker SHALL also be aware and enforce any agreed policy in order to control that the Subscription criteria received, that describe the notification event, are permitted to the authenticated Resource Notification Subscriber. For example a veterinary clinical record MAY be allowed to request a subscription but the Resource Notification Broker SHALL verify that the Subscription is related only to documents produced for animal subjects and SHALL reject any subscription made for documents produced for human subjects. 

If there is a policy that needs to be enforced in order to control which subscriber can Subscribe or Unsubscribe then, the Resource Notification Broker might maintain a whitelist of acceptable senders for the ITI-110 transactions. 
The Resource Notification Broker MAY enforce some control on the `channel.endpoint` element of the Subscription resource received in order to control where the notification will be sent. The Resource Notification Broker might maintain an allow-list of acceptable endpoints or trusted certificate authorities for rest-hook channels.
The Resource Notification Broker MAY control the `Subscription.payload` element of Subscription resource received in order to mitigate the risk of disclosing sensitive information. For example, if the Subscription criteria includes sensitive documents, the Resource Notification Broker MAY allow just 'id-only' payloads. In this way further authorization mechanisms SHALL be enforced when the Resource Notification Recipient tries to retrieve the information using the id. 

#### 2:3.110.6.1 Security Audit Considerations

The Resource Notification Subscriber, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for: 
- [Resource Notification Subscriber Subscription Create](StructureDefinition-IHE.DSUBm.ResourceSubscriptionPatient.Audit.Subscriber.html) when a patient-dependent subscribe interaction is performed;
- [Resource Notification Subscriber Subscription Create](StructureDefinition-IHE.DSUBm.ResourceSubscription.Audit.Subscriber.html) when a multi-patient subscribe interaction is performed;
- [Resource Notification Subscriber Subscription Update](StructureDefinition-IHE.DSUBm.UpdateResourceSubscriptionPatient.Audit.Subscriber.html) when a patient-dependent unsubscribe interaction is performed;
- [Resource Notification Subscriber Subscription Update](StructureDefinition-IHE.DSUBm.UpdateResourceSubscription.Audit.Subscriber.html) when a multi-patient unsubscribe interaction is performed.

The Resource Notification Broker, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for: 
- [Resource Notification Broker Subscription Create](StructureDefinition-IHE.DSUBm.ResourceSubscriptionPatient.Audit.Broker.html) when a patient-dependent subscribe interaction is performed;
- [Resource Notification Broker Subscription Create](StructureDefinition-IHE.DSUBm.ResourceSubscription.Audit.Broker.html) when a multi-patient subscribe interaction is performed;
- [Resource Notification Broker Subscription Update](StructureDefinition-IHE.DSUBm.UpdateResourceSubscriptionPatient.Audit.Broker.html) when a patient-dependent unsubscribe interaction is performed;
- [Resource Notification Broker Subscription Update](StructureDefinition-IHE.DSUBm.UpdateResourceSubscription.Audit.Broker.html) when a multi-patient unsubscribe interaction is performed.



---

// File: input/pagecontent/ITI-111.md

This section corresponds to the Resource Publish [ITI-111] transaction of the IHE Technical Framework. The Resource Publish [ITI-111] transaction is used by the Resource Notification Publisher and Resource Notification Broker Actors. This transaction is used to communicate events about DocumentReference, Folder type List and SubmissionSet type List Resources. 

### 2:3.111.1 Scope

The Resource Publish [ITI-111] transaction delivers information from the Resource Notification Publisher to the Resource Notification Broker about events regarding DocumentReference, Folder type List and SubmissionSet type List resources. This information can be evaluated by the Resource Notification Broker against active Subscriptions and which MAY trigger a notification.

### 2:3.111.2 Actors Roles

**Table 2:3.111.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Resource Notification Publisher](volume-1.html#154113-resource-notification-publisher)    | Publishes information to the Resource Notification Broker when applicable events occur about DocumentReference, Folder type List and SubmissionSet type List resources for which a subscription MAY exist |
| [Resource Notification Broker](volume-1.html#154111-resource-notification-broker) | Receives and processes information about events for which there MAY be a subscription |
{: .grid}

### 2:3.111.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0.1](https://www.hl7.org/FHIR/R4)

### 2:3.111.4 Messages

<figure>
{%include ITI-111-Publish-seq.svg%}
<figcaption><b>Figure 2:3.111.4-1: Resource Publish [ITI-111] Interactions</b></figcaption>
</figure>
<br clear="all">

#### 2:3.111.4.1 Resource Publish Request Message
This method uses an HTTP POST method on the target Resource Notification Broker endpoint to communicate a event that MAY have a subscription.

##### 2:3.111.4.1.1 Trigger Events

When an event occurs for which a Subscription MAY exist, the Resource Notification Publisher will trigger a Resource Publish Request message to the Resource Notification Broker. 
The basic events that could trigger this message are:
- creation of a DocumentReference Resource;  
- creation of a SubmissionSet type List Resource.

Note that these events could be determined by DocumentEntry and SubmissionSet Objects events in an XDS environment.

###### 2:3.111.4.1.1.1 DocumentReference Subscription for Minimal Update Option Trigger Events

When the Resource Notification Publisher supports the [DocumentReference Subscription for Minimal Update Option](volume-1.html#15421-documentreference-subscription-for-minimal-update-option), in addition to the basic events, events that could trigger this message also are:
- update of the status of a DocumentReference Resource,
- deletion of a DocumentReference Resource.

Note that also these events could be determined by DocumentEntry Objects events in an XDS environment.

###### 2:3.111.4.1.1.2 DocumentReference Subscription for Full Events Option Trigger Events

When the Resource Notification Publisher supports the [DocumentReference Subscription for Full Events Option](volume-1.html#15422-documentreference-subscription-for-full-events-option), in addition to the basic events, events that could trigger this message also are:
- update of a DocumentReference Resource,
- deletion of a DocumentReference Resource.

Note that also these events could be determined by DocumentEntry Objects events in an XDS environment.

###### 2:3.111.4.1.1.3 Basic Folder Subscription Option Trigger Events

When the Resource Notification Publisher supports the [Basic Folder Subscription Option](volume-1.html#15423-basic-folder-subscription-option), in addition to the basic events, events that could trigger this message also are:
- creation of a Folder type List Resource,
- update of a Folder type List Resource to insert a new document in the Folder.

Note that also these events could be determined by Folder and Association Objects events in an XDS environment.

###### 2:3.111.4.1.1.4 Folder Subscription for Minimal Update Option Trigger Events

When the Resource Notification Publisher supports the [Folder Subscription for Minimal Update Option](volume-1.html#15424-folder-subscription-for-minimal-update-option), in addition to the basic events, events that could trigger this message also are:
- creation of a Folder type List Resource,
- only the update of a Folder type List Resource to insert a new document in the Folder,
- only the update of a Folder type List Resource to remove a document from the Folder,
- only the update of a Folder type List Resource to update the "status".

Note that also these events could be determined by Folder and Association Objects events in an XDS environment.

###### 2:3.111.4.1.1.5 Folder Subscription for Update Option Trigger Events

When the Resource Notification Publisher supports the [Folder Subscription for Update Option](volume-1.html#15425-folder-subscription-for-update-option), in addition to the basic events, events that could trigger this message also are:
- creation of a Folder type List Resource,
- update of a Folder type List Resource.

Note that also these events could be determined by Folder and Association Objects events in an XDS environment.

###### 2:3.111.4.1.1.6 Folder Subscription for Full Events Option Trigger Events

When the Resource Notification Publisher supports the [Folder Subscription for Full Events Option](volume-1.html#15426-folder-subscription-for-full-events-option), in addition to the basic events, events that could trigger this message also are:
- creation of a Folder type List Resource,
- update of a Folder type List Resource,
- deletion of a Folder type List Resource.

Note that also these events could be determined by Folder and Association Objects events in an XDS environment.

##### 2:3.111.4.1.2 Message Semantics

The Resource Notification Publisher SHALL initiate a FHIR "transaction" using a "create" action by sending an HTTP POST request method composed of a FHIR Bundle Resource containing: one `SubmissionSet type List Resource`;  zero or more `DocumentReference Resources`; zero or more `Folder type List Resources`. 

The Bundle resource SHALL contain all the FHIR resources related to the event that has occurred in the `Bundle.entry` element.

The media type of the HTTP body SHALL be either `application/fhir+json` or `application/fhir+xml`.

See [http://hl7.org/fhir/R4/http.html#transaction](http://hl7.org/fhir/R4/http.html#transaction) for complete requirements of a transaction. See [http://hl7.org/fhir/R4/bundle-transaction.html](http://hl7.org/fhir/R4/bundle-transaction.html) for example of a transaction Bundle.

The Provide Document Bundle message is sent to the base URL as defined in FHIR. See [http://hl7.org/fhir/R4/http.html](http://hl7.org/fhir/R4/http.html) for the definition of “HTTP” access methods and “base”.

It is possible to use HTTP protocol or HTTPS protocol. The HTTPS protocol is highly recommended.

For complete information on constructing a FHIR Bundle Resource, see [http://hl7.org/fhir/R4/bundle.html](http://hl7.org/fhir/R4/bundle.html).


For the basic events, the FHIR Bundle SHALL be conform to the [Minimal Metadata Bundle](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html) of Provide Document Bundle [ITI-65] transaction of [MHD](https://profiles.ihe.net/ITI/MHD/index.html) Profile.


###### 2:3.111.4.1.2.1 DocumentReference Subscription for Minimal Update Option Bundle

When supported the [DocumentReference Subscription for Minimal Update Option](volume-1.html#15421-documentreference-subscription-for-minimal-update-option) the FHIR Bundle that SHALL be used for transmitting the [DocumentReference Subscription for Minimal Update Trigger Events](#231114111-documentreference-subscription-for-minimal-update-option-trigger-events) SHALL have the following constraints:

 - [Extended Publishing Bundle](StructureDefinition-IHE.DSUBm.ResourceBundle.html):
    - SHALL be a Transaction Bundle
    - all resources SHALL be compliant with minimal constraints
    - SHALL convey at least one of:
        - [SubmissionSet type List](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.SubmissionSet.html)
        - [DocumentReference](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.DocumentReference.html)
        - [Folder type List](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.Folder.html)
    - MAY convey at most one [SubmissionSet type List](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.SubmissionSet.html)
    - MAY convey one or more [DocumentReference](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.DocumentReference.html)
    - MAY convey one or more [Folder type List](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.Folder.html)
    - MAY convey one [Patient](https://hl7.org/fhir/R4/patient.html)
    - for each `entry` of SubmissionSet type List, DocumentReference and Folder type List, the `request.method` element SHALL be valued according with the event regarding the resource 

###### 2:3.111.4.1.2.2 DocumentReference Subscription for Full Events Option Bundle

When the [DocumentReference Subscription for Full Events Option](volume-1.html#15422-documentreference-subscription-for-full-events-option) is supported the FHIR Bundle that SHALL be used for transmitting the [DocumentReference Subscription for Full Events Option Trigger Events](#231114112-documentreference-subscription-for-full-events-option-trigger-events) SHALL be the [Extended Publishing Bundle](StructureDefinition-IHE.DSUBm.ResourceBundle.html).

###### 2:3.111.4.1.2.3 Subscription with Basic Folder Subscription Option Bundle

When the [Basic Folder Subscription Option](volume-1.html#15423-basic-folder-subscription-option) is supported the FHIR Bundle that SHALL be used for transmitting the [Subscription with Basic Folder Subscription Option Trigger Events](#231114113-basic-folder-subscription-option-trigger-events) SHALL be conform to the [Minimal Metadata Bundle](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html) of Provide Document Bundle [ITI-65] transaction of [MHD](https://profiles.ihe.net/ITI/MHD/index.html) Profile.

###### 2:3.111.4.1.2.4 Folder Subscription for Minimal Update Option Bundle

When the [Folder Subscription for Minimal Update Option](volume-1.html#15424-folder-subscription-for-minimal-update-option) is supported the FHIR Bundle that SHALL be used for transmitting the [Folder Subscription for Minimal Update Option Trigger Events](#231114114-folder-subscription-for-minimal-update-option-trigger-events) SHALL be conform to the [Minimal Metadata Bundle](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html) of Provide Document Bundle [ITI-65] transaction of [MHD](https://profiles.ihe.net/ITI/MHD/index.html) Profile.

###### 2:3.111.4.1.2.5 Folder Subscription for Update Option Bundle

When the [Folder Subscription for Update Option](volume-1.html#15425-folder-subscription-for-update-option) is supported the FHIR Bundle that SHALL be used for transmitting the [Folder Subscription for Update Option Trigger Events](#231114115-folder-subscription-for-update-option-trigger-events) SHALL be conform to the [Minimal Metadata Bundle](https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html) of Provide Document Bundle [ITI-65] transaction of [MHD](https://profiles.ihe.net/ITI/MHD/index.html) Profile.

###### 2:3.111.4.1.2.6 Folder Subscription for Full Events Option Bundle

When the [Folder Subscription for Full Events Option](volume-1.html#15426-folder-subscription-for-full-events-option) is supported the FHIR Bundle that SHALL be used for transmitting the [Folder Subscription for Full Events Option Trigger Events](#231114116-folder-subscription-for-full-events-option-trigger-events) SHALL be the [Extended Publishing Bundle](StructureDefinition-IHE.DSUBm.ResourceBundle.html). 

##### 2:3.111.4.1.3 Expected Actions

The Resource Notification Broker SHALL accept both media types `application/fhir+json` and `application/fhir+xml`.

The Resource Notification Broker SHALL process the bundle atomically as specified in [http://hl7.org/fhir/R4/http.html#transaction](http://hl7.org/fhir/R4/http.html#transaction).

The Resource Notification Broker SHALL validate the Bundle first against the FHIR specification. Guidance on what FHIR considers a valid Resource can be found at [http://hl7.org/fhir/R4/validation.html](http://hl7.org/fhir/R4/validation.html).

If necessary for processing, the Resource Notification Broker SHALL retrieve Resources referenced by absolute URLs in the FHIR Bundle Resource.

If the Resource Notification Broker validations failed, the Resource Notification Broker SHALL return an error, as documented in [Resource Publish Response Message](#Resource-Publish-Response-Message). 

If the validation of the Resource Publish Request Message is completed, the Resource Notification Broker SHALL evaluate the DocumentReference, the Folder type List and the SubmissionSet type List Resources that are present in the Bundle against the active Subscriptions. The Resource Notification Broker MAY not care about the other resources present in the Bundle. If there are matching subscriptions, the Resource Notification Broker SHALL send the [Event Notification Message [ITI-112]](ITI-112.html#2311245-event-notification-request-message) to the appropriate Resource Notification Recipient.

<a name="Resource-Publish-Response-Message"> </a>

#### 2:3.111.4.2 Resource Publish Response Message

The Resource Notification Broker sends a Resource Publish Response Message to respond to a Resource Publish Request Message.

##### 2:3.111.4.2.1 Trigger Events

The Resource Notification Broker has received a Resource Publish Request Message.

##### 2:3.111.4.2.2 Message Semantics

The Resource Notification Broker SHALL return a Bundle, with `type` set to `transaction-response`, that contains one entry for each entry in the request, in the same order as received, with the Bundle.entry.response.outcome indicating the results of processing the entry. TheResource Notification Broker SHALL comply with FHIR [http://hl7.org/fhir/R4/bundle.html#transaction-response](http://hl7.org/fhir/R4/bundle.html#transaction-response) and [http://hl7.org/fhir/R4/http.html#transaction-response](http://hl7.org/fhir/R4/http.html#transaction-response).

To indicate success the overall http `200` response is used. The `Bundle.entry.response.status` SHALL be `201` and the location element SHALL be populated if the Resource has been created or deleted. The `Bundle.entry.response`.status SHALL be `200` and the location element SHALL be populated if the Resource has been updated.

##### 2:3.111.4.2.3 Expected Actions

The Resource Notification Publisher processes the results according to application-defined rules.

### 2:3.111.5 CapabilityStatement Resource
The Resource Notification Publisher implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Publisher are listed in Section [1:54.1.1.3 Resource Notification Publisher](volume-1.html#154113-resource-notification-publisher).

The Resource Notification Broker implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Broker are listed in Section [1:54.1.1.1 Resource Notification Broker](volume-1.html#154111-resource-notification-broker).


### 2:3.111.6 Security Considerations

See [DSUBm Security Considerations](volume-1.html#1545-security-considerations). 

It is highly RECOMMENDED that the Resource Notification Publisher SHOULD use some form of authentication method when sending the Resource Publish Request Message. The Resource Notification Broker SHOULD always verify the authentication token used in this transaction before considering the message received.  

#### 2:3.111.6.1 Security Audit Considerations

The Resource Notification Publisher, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for [Resource Notification Publisher Publish](StructureDefinition-IHE.DSUBm.ResourcePublish.Audit.Publisher.html), when performing this transaction.

The Resource Notification Broker, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for [Resource Notification Broker Publish](StructureDefinition-IHE.DSUBm.ResourcePublish.Audit.Broker.html), when performing this transaction.


---

// File: input/pagecontent/ITI-112.md

This section corresponds to the Resource Notify [ITI-112] transaction of the IHE Technical Framework. The Resource Notify [ITI-112] transaction is used by the Resource Notification Broker and Resource Notification Recipient.

### 2:3.112.1 Scope

The Resource Notify [ITI-112] transaction delivers a notification from the Resource Notification Broker to the Resource Notification Recipient about an event which matches an existing subscription.

The notifications from the Resource Notification Broker also include the Handshake Notification and the Heartbeat Notification in order to verify the reachability of the Resource Notification Recipient in the subscription activation process and during the existence of the subscription itself. 

Further, the Subscription Deactivation Notification can be sent to inform about the deactivation of the Subscription.

### 2:3.112.2 Actors Roles

**Table 2:3.112.3-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Resource Notification Broker](volume-1.html#154111-resource-notification-broker)    | Sends the Notification Bundle Request to the Resource Notification Recipient |
| [Resource Notification Recipient](volume-1.html#154114-resource-notification-recipient) | Receives the notification |
{: .grid}

### 2:3.112.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0.1](https://www.hl7.org/FHIR/R4)

### 2:3.112.4 Messages

<figure>
{%include ITI-112-Notification-seq.svg%}
<figcaption><b>Figure 2:3.112.4-1: Resource Notify [ITI-112] Interactions</b></figcaption>
</figure>
<br clear="all">

<!-- handshake-->
#### 2:3.112.4.1 Handshake Notification Request Message
This message uses the HTTP POST method on the target Resource Notification Recipient endpoint to submit the Handshake Notification.

##### 2:3.112.4.1.1 Trigger Events
In order to verify the reachability of the Resource Notification Recipient in the subscription activation process, after receiving a [Create Subscription Request Message [ITI-110]](ITI-110.html#2311041-create-subscription-request-message), the Resource Notification Broker will trigger this message to the corresponding Resource Notification Recipient.

##### 2:3.112.4.1.2 Message Semantics

The Resource Notification Broker SHALL initiate an HTTP POST request message to submit a Bundle FHIR Resource.

The Bundle resource SHALL be compliant with [Bundle](https://hl7.org/fhir/R4/Bundle.html) and SHALL be compliant with [R4B Topic-Based Subscription Notification Bundle](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/StructureDefinition-backport-subscription-notification.html).

The Resource Notification Subscriber actor SHALL submit the FHIR Bundle resource in either XML format or JSON format thus the media type of the HTTP body SHALL be either `application/fhir+json` or `application/fhir+xml` respectively. The format SHALL match the MIME type on the `Subscription.channel.payload` element.

The Bundle is sent to the URL present in the `Subscription.channel.endpoint` element, that identifies where the Resource Notification Recipient receives the notification.

It is possible to use HTTP protocol or HTTPS protocol. The HTTPS protocol is highly recommended.

The Bundle Resource sent by the Resource Notification Broker SHALL have:

- [Handshake Notification](StructureDefinition-IHE.DSUBm.HandshakeNotification.html)
    - the `Bundle.type` element set to `history`;
    - only one `Bundle.entry` with the [Handshake Subscription Status](StructureDefinition-IHE.DSUBm.SubscriptionStatus-Handshake.html) resource and the `Bundle.entry.request` element SHALL be filled out to match a request to the $status operation;
    - no other entry SHALL be present.


##### 2:3.112.4.1.3 Expected Actions

The Resource Notification Recipient processes the message according to application-defined rules and produces a [Handshake Notification Response](#2311242-handshake-notification-response-message).

If the Resource Notification Broker has not been able to send the [Handshake Notification Message](#2311241-handshake-notification-request-message) because of connection problem, it SHALL NOT activate the Subscription and set the `Subscription.status=error`.

If the Resource Notification Broker has been able to send the Handshake Notification Message but it has not received any [Handshake Notification Response](#2311242-handshake-notification-response-message) from the Resource Notification Recipient, it SHALL NOT activate the Subscription and set the `Subscription.status=error`.

Further consideration on managing errors are reported in Section [2:3.112.4.9 Handling Errors in Notification](#2311249-handling-errors-in-notification).

#### 2:3.112.4.2 Handshake Notification Response Message

The Resource Notification Recipient sends a Handshake Notification Response to respond to an [Handshake Notification Message](#2311241-handshake-notification-request-message).

##### 2:3.112.4.2.1 Trigger Events

When the Resource Notification Recipient receives the [Handshake Notification Message](#2311241-handshake-notification-request-message) from the Resource Notification Broker, it send this message to acknowledging the reception of the notification.

##### 2:3.112.4.2.2 Message Semantics

When the Resource Notification Recipient has processed the request it SHALL return an HTTP response with an overall status code. 

If the processing of the request message is successful the Resource Notification Recipient SHALL return a `200 OK` HTTP status code and the http response body SHALL be empty.

Otherwise the Resource Notification Recipient SHALL return a status code `4xx` or `5xx`, according to application-defined rules. In this case, the http response body MAY contain an [OperationOutcome](https://hl7.org/fhir/R4/operationoutcome.html) Resource with the description of the problem.

##### 2:3.112.4.2.3 Expected Actions

The Resource Notification Broker processes the message according to application-defined rules.

If the Resource Notification Broker receives a positive response, it SHALL activate the Subscription that triggered the handshake process, setting the `Subscription.status=active`. 

If the Resource Notification Broker receives a negative response (based on HTTP status), it SHALL NOT activate the Subscription and it SHALL set the `Subscription.status=error`.

Further consideration on managing errors are reported in Section [2:3.112.4.9 Handling Errors in Notification](#2311249-handling-errors-in-notification).

<!-- heartbeat-->
#### 2:3.112.4.3 Heartbeat Notification Request Message

This message uses the HTTP POST method on the target Resource Notification Recipient endpoint to submit the Heartbeat Notification in order to verify the reachability of the Resource Notification Recipient.

##### 2:3.112.4.3.1 Trigger Events

In order to verify the reachability of the Resource Notification Recipient during the existence of the Subscription, after its activation, the Resource Notification Broker will trigger this message to the corresponding Resource Notification Recipient. If in the Subscription the `heartbeatPeriod` element is set, the Resource Notification Broker SHOULD attempt to send a Heartbeat Notification Message after each interval set in that element.

##### 2:3.112.4.3.2 Message Semantics

The Resource Notification Broker SHALL initiate an HTTP POST request message to submit a Bundle FHIR Resource.


The Bundle resource SHALL be compliant with [Bundle](https://hl7.org/fhir/R4/Bundle.html) and SHALL be compliant with [R4 Topic-Based Subscription Notification Bundle](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/StructureDefinition-backport-subscription-notification.html).

The Resource Notification Subscriber SHALL submit the FHIR Bundle resource in either XML format or JSON format thus the media type of the HTTP body SHALL be either `application/fhir+json` or `application/fhir+xml` respectively. The format SHALL match the MIME type on the `Subscription.channel.payload` element.

The Bundle is sent to the URL present in `Subscription.channel.endpoint` element, that identifies where the Resource Notification Recipient receives the notification.

It is possible to use HTTP protocol or HTTPS protocol. The HTTPS protocol is highly recommended.

The Bundle Resource sent by the Resource Notification Broker SHALL have:

- [Heartbeat Notification](StructureDefinition-IHE.DSUBm.HeartbeatNotification.html)
    - the `Bundle.type` element set to `history`;
    - in the first entry the [Heartbeat Subscription Status](StructureDefinition-IHE.DSUBm.SubscriptionStatus-Heartbeat.html) resource and the `request` element SHALL be filled out to match a request to the $status operation;
    - no other entry SHALL be present.    
    

##### 2:3.112.4.3.3 Expected Actions

The Resource Notification Recipient processes the message according to application-defined rules and produces a [Heartbeat Notification Response](#2311244-heartbeat-notification-response-message).

If the Resource Notification Broker has not been able to send the [Heartbeat Notification Message](#2311243-heartbeat-notification-request-message) because of connection problem, it SHOULD immediately set the `Subscription.status=error` or it could do that after a reasonable number of times. This SHOULD be done based on the capability of the connection infrastructure.

If the Resource Notification Broker has been able to send the Heartbeat Notification Message but it has not received any [Heartbeat Notification Response Message](#2311244-heartbeat-notification-response-message) from the Resource Notification Recipient, it SHOULD immediately set the `Subscription.status=error` or it could do that after a reasonable number of times. This SHOULD be done based on the capability of the connection infrastructure.

Further consideration on managing errors are reported in Section [2:3.112.4.9 Handling Errors in Notification](#2311249-handling-errors-in-notification).

#### 2:3.112.4.4 Heartbeat Notification Response Message

The Resource Notification Recipient sends a Heartbeat Notification Response to respond to a [Heartbeat Notification Message](#2311243-heartbeat-notification-request-message).

##### 2:3.112.4.4.1 Trigger Events

When the Resource Notification Recipient receives the [Heartbeat Notification Message](#2311243-heartbeat-notification-request-message) from the Resource Notification Broker, it send this message to acknowledge the reception of the notification.

##### 2:3.112.4.4.2 Message Semantics

When the Resource Notification Recipient has processed the request it SHALL return an HTTP response with an overall status code. 

If the processing of the request message is successful the Resource Notification Recipient SHALL return a `200 OK` HTTP status code and the http response body SHALL be empty.

Otherwise the Resource Notification Recipient SHALL return a status code `4xx` or `5xx`, according to application-defined rules. In this case, the http response body MAY contain an [OperationOutcome](https://hl7.org/fhir/R4/operationoutcome.html) Resource with the description of the problem.

##### 2:3.112.4.4.3 Expected Actions

The Resource Notification Broker processes the message according to application-defined rules.

If the Resource Notification Broker receives a negative response (based on the HTTP status or the OperationOutcome received), it SHOULD immediately set the `Subscription.status=error` or it could do that after a reasonable number of times. This SHOULD be done based on the capability of the connection infrastructure.

Further consideration on managing errors are reported in Section [2:3.112.4.9 Handling Errors in Notification](#2311249-handling-errors-in-notification).

<!-- event-->
#### 2:3.112.4.5 Event Notification Request Message

This message uses the HTTP POST method on the target Resource Notification Recipient endpoint to submit the Event Notification.

##### 2:3.112.4.5.1 Trigger Events

When an event occurs where the topics of the event match the filter requirements of one or more active Subscriptions, the Resource Notification Broker SHALL trigger this message to the corresponding Resource Notification Recipient.

##### 2:3.112.4.5.2 Message Semantics

The Resource Notification Broker SHALL initiate an HTTP POST request message to submit a Bundle FHIR Resource.

The Bundle resource SHALL be compliant with [Bundle](https://hl7.org/fhir/R4/Bundle.html) and SHALL be compliant with the [R4 Topic-Based Subscription Notification Bundle](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/StructureDefinition-backport-subscription-notification.html).

The Resource Notification Subscriber SHALL submit the FHIR Bundle resource in either XML format or JSON format thus the media type of the HTTP body SHALL be either `application/fhir+json` or `application/fhir+xml` respectively. The format SHALL match the MIME type on the `Subscription.channel.payload` element.

The Bundle is sent to the URL present in `Subscription.channel.endpoint` element, that identifies where the Resource Notification Recipient receives the notification.

It is possible to use HTTP protocol or HTTPS protocol. The HTTPS protocol is highly recommended.

The Bundle Resource sent by the Resource Notification Broker SHALL have:

- [Event Notification](StructureDefinition-IHE.DSUBm.EventNotification.html)
    - the `Bundle.type` element set to `history`;
    - in the first entry the [Notification Subscription Status](StructureDefinition-IHE.DSUBm.SubscriptionStatus-Event.html) resource and the `request` element SHALL be filled out to match a request to the $status operation;
    - zero or more additional entries, with either URLs or resources representing content, depending on the `Subscription.payload.content` and the `notificationShape` defined in the Topic of the Subscription; for additional entries, the request SHOULD be filled out in a way that makes sense given the Subscription (e.g., a POST or PUT operation on the resource, matching the event happened to that resource that trigger the notification). However, a Resource Notification Broker MAY choose to simply include a GET to the relevant resource instead.

When the payload content includes the resources, the notification shape SHALL be based on the definitions from the Topic of the Subscription:

- the resource that is the trigger for the Topic SHALL be included by the Resource Notification Broker.
- any other resource MAY be included by the Resource Notification Broker; in order to include resource that could be of interest for the Resource Notification Recipient, the Resource Notification Broker SHOULD follow what is defined by the Topic of the Subscription for the notification shape. 

Note that Resource Notification Broker SHOULD attempt to provide the resources described in the topic, however Resource Notification Recipient SHALL expect that any resource beyond the focus resource are not guaranteed to be present.


##### 2:3.112.4.5.3 Expected Actions

The Resource Notification Recipient processes the message according to application-defined rules and produces an [Event Notification Response](#2311246-event-notification-response-message).

If the Resource Notification Broker has not been able to send the [Event Notification Message](#2311245-event-notification-request-message) because of connection problem, it SHOULD immediately set the `Subscription.status=error` or it could do that after a reasonable number of times. This SHOULD be done based on the capability of the connection infrastructure.

If the Resource Notification Broker has been able to send the Event Notification Message but it has not received any [Event Notification response Message](#2311246-event-notification-response-message) from the Resource Notification Recipient, it SHOULD immediately set the `Subscription.status=error` or it could do that after a reasonable number of times. This SHOULD be done based on the capability of the connection infrastructure.

Further consideration on managing errors are reported in Section [2:3.112.4.9 Handling Errors in Notification](#2311249-handling-errors-in-notification).

#### 2:3.112.4.6 Event Notification Response Message

The Resource Notification Recipient sends an Event Notification Response to respond to an [Event Notification Message](#2311245-event-notification-request-message).

##### 2:3.112.4.6.1 Trigger Events

When the Resource Notification Recipient receives the [Event Notification Message](#2311245-event-notification-request-message) from the Resource Notification Broker, it send this message to acknowledge the reception of the notification.

##### 2:3.112.4.6.2 Message Semantics

When the Resource Notification Recipient has processed the request it SHALL return an HTTP response with an overall status code. 

If the processing of the request message is successful the Resource Notification Recipient SHALL return a `200 OK` HTTP status code and the http response body SHALL be empty.

Otherwise the Resource Notification Recipient SHALL return a status code `4xx` or `5xx`, according to application-defined rules. In this case, the http response body MAY contain an [OperationOutcome](https://hl7.org/fhir/R4/operationoutcome.html) Resource with the description of the problem.

##### 2:3.112.4.6.3 Expected Actions

The Resource Notification Broker processes the message according to application-defined rules.

If the Resource Notification Broker receives a negative response (based on the HTTP status or the OperationOutcome received), it SHOULD immediately set the `Subscription.status=error` or it could do that after a reasonable number of times. This SHOULD be done based on the capability of the connection infrastructure.

Further consideration on managing errors are reported in Section [2:3.112.4.9 Handling Errors in Notification](#2311249-handling-errors-in-notification).

#### 2:3.112.4.7 Subscription Deactivation Notification Request Message

This message uses the HTTP POST method on the target Resource Notification Recipient endpoint to submit the notification.

##### 2:3.112.4.7.1 Trigger Events

When a Subscription deactivation occurs the Resource Notification Broker SHOULD trigger this message to the corresponding Resource Notification Recipient, in order to inform that the Subscription is no longer active.
The deactivation, `Subscription.status=off`, could be performed:
- by the Resource Notification Broker at the termination time, or
- by the Resource Notification Broker after too many errors in notification, or
- with the [ITI-110] Resource Subscription transaction, by the same Resource Notification Subscriber that made the subscription or by another Resource Notification Subscriber. 

##### 2:3.112.4.7.2 Message Semantics

The Resource Notification Broker SHALL initiate an HTTP POST request message to submit a Bundle FHIR Resource. 

The Bundle resource SHALL be compliant with [Bundle](https://hl7.org/fhir/R4/Bundle.html) and SHALL be compliant with the [R4 Topic-Based Subscription Notification Bundle](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/StructureDefinition-backport-subscription-notification.html).

The Resource Notification Subscriber SHALL submit the FHIR Bundle resource in either XML format or JSON format thus the media type of the HTTP body SHALL be either `application/fhir+json` or `application/fhir+xml` respectively. The format SHALL match the MIME type on the `Subscription.channel.payload` element.

The Bundle is sent to the URL present in `Subscription.channel.endpoint` element, that identifies where the Resource Notification Recipient receives the notification.

It is possible to use HTTP protocol or HTTPS protocol. The HTTPS protocol is highly recommended.

The Bundle Resource sent by the Resource Notification Broker SHALL have:

- [Subscription Deactivation Notification](StructureDefinition-IHE.DSUBm.SubscriptionDeactivationNotification.html)
    - the `Bundle.type` set to `history`;
    - in the first entry the [Deactivation Subscription Status](StructureDefinition-IHE.DSUBm.SubscriptionStatus-Deactivation.html) resource and the `request` element SHALL be filled out to match a request to the $status operation;
    - no other entry SHALL be present.


##### 2:3.112.4.7.3 Expected Actions

The Resource Notification Recipient processes the message according to application-defined rules and produces an [Subscription Deactivation Response](#2311248-subscription-deactivation-notification-response-message).

If the Resource Notification Recipient is grouped with the Resource Notification Subscriber, the Resource Notification Subscriber SHOULD be aware if this notification received is related to its own unsubscribe, if it is related to an unsubscribe performed by another Resource Notification Subscriber, or it is related to deactivation performed by the Resource Notification Broker at the expiration time of the Subscription, and then proceeds according to its application-defined rules.


<!-- response 4-->

#### 2:3.112.4.8 Subscription Deactivation Notification Response Message

The Resource Notification Recipient sends an Event Notification Response to respond to a [Subscription Deactivation Message](#2311247-subscription-deactivation-notification-request-message).

##### 2:3.112.4.8.1 Trigger Events

When the Resource Notification Recipient receives the [Subscription Deactivation Message](#2311247-subscription-deactivation-notification-request-message) from the Resource Notification Broker, it send this message to acknowledge the reception of the notification.

##### 2:3.112.4.8.2 Message Semantics

When the Resource Notification Recipient has processed the request it SHALL return an HTTP response with an overall status code. 

If the processing of the request message is successful the Resource Notification Recipient SHALL return a `200 OK` HTTP status code and the http response body SHALL be empty.

Otherwise the Resource Notification Recipient SHALL return a status code `4xx` or `5xx`, according to application-defined rules. In this case, the http response body MAY contain an [OperationOutcome](https://hl7.org/fhir/R4/operationoutcome.html) Resource with the description of the problem.

##### 2:3.112.4.8.3 Expected Actions
The Resource Notification Broker processes the message according to application-defined rules.

#### 2:3.112.4.9 Handling Errors in Notification

After setting the `Subscription.status=error`, the Resource Notification Broker SHOULD continue to send other [Heartbeat Notification Request Message](#2311243-heartbeat-notification-request-message) with `status=error` and it MAY continue to send other [Event Notification Request Message](#2311245-event-notification-request-message) (if events occur) with `status=error`. The RECOMMENDED way for the Resource Notification Broker to proceed is to continue to send [Heartbeat Notification Request Message](#2311243-heartbeat-notification-request-message) and [Event Notification Request Message](#2311245-event-notification-request-message) for a implementation defined number of times, and evaluating if errors continue to occur in notifications before totally deactivating the Subscription, setting the `Subscription.status=off`. This SHOULD be done based on the capability of the connection infrastructure. Note that, if the Resource Notification Broker is grouped with DSUB Document Metadata Subscriber and DSUB Document Metadata Notification Recipient, considering [DSUBm as an interface for DSUB](volume-1.html#15463-dsubm-as-an-interface-for-dsub) model, when it deactivates the Subscription it SHALL follow what is define in Section [2:3.110.4.3.3.1 Expected Actions with DSUBm as an interface for DSUB for unsubscribe](ITI-110.html#231104331-expected-actions-with-dsubm-as-an-interface-for-dsub-for-unsubscribe).

If the Resource Notification Recipient is grouped with the Resource Notification Subscriber in an application, the Resource Notification Subscriber MAY handle errors or broken connections by using the $events and $status operations on the transaction Resource Subscription Search [ITI-113] and following what is defined in [Detecting Errors as a Subscriber](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/errors.html#detecting-errors-as-a-subscriber), [Broken Communication](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/errors.html#broken-communication) and [Recovering from Errors](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/errors.html#recovering-from-errors) sections of the [Subscriptions R5 Backport](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/index.html). Moreover, once the application has returned to a functional state, Resource Notification Subscriber SHOULD request the subscription is re-activated sending a [Update Subscription Request Message](ITI-110.html#2311043-update-subscription-request-message) to the Resource Notification Broker.

### 2:3.112.5 CapabilityStatement Resource
The Resource Notification Broker implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Broker are listed in Section [1:54.1.1.1 Resource Notification Broker](volume-1.html#154111-resource-notification-broker).

The Resource Notification Recipient implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Recipient are listed in Section [1:54.1.1.4 Resource Notification Recipient](volume-1.html#154114-resource-notification-recipient).


### 2:3.112.6 Security Considerations

See [DSUBm Security Considerations](volume-1.html#1545-security-considerations). 

The Resource Notification Broker SHOULD confirm that the Resource Notification Recipient is still authorized to receive the information that it is searching for. To assess if a Resource Notification Recipient is still  authorized to receive the information the Resource Notification Broker MAY utilize additional policy defined between the actors in order to prevent the sending of notifications in particular cases. If an authorization token is used to verify the authorization of a Recipient to receive notifications, the Resource Notification Broker SHALL also verify that this token has not been revoked before sending the Notification Bundle Request message. 

It is highly RECOMMENDED that the Resource Notification Broker SHOULD use some form of authentication method when sending a notification Message and the Resource Notification Recipient SHOULD always verify the authentication token used in this transaction. 

The Resource Notification Recipient SHOULD also be defensive and robust to a malicious client that MAY send a large volume of fake notifications with empty notifications, which would cause the Resource Notification Recipient to send many (potentially expensive) queries to a server.

#### 2:3.112.6.1 Security Audit Considerations

The Resource Notification Broker, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for [Resource Notification Broker Notify](StructureDefinition-IHE.DSUBm.ResourceNotify.Audit.Broker.html), when performing this transaction.

The Resource Notification Recipient, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for [Resource Notification Recipient Notify](StructureDefinition-IHE.DSUBm.ResourceNotify.Audit.Recipient.html), when performing this transaction.


---

// File: input/pagecontent/ITI-113.md

This section corresponds to the Resource Subscription Search [ITI-113] transaction of the IHE Technical Framework. The Resource Subscription Search [ITI-113] transaction is used by the Resource Notification Subscriber and Resource Notification Broker Actors. The Resource Subscription Search [ITI-113] transaction is used to query Subscriptions and get back the results. 

### 2:3.113.1 Scope

The Resource Subscription Search [ITI-113] transaction passes a Resource Subscription Search message from a Resource Notification Subscriber to a Resource Notification Broker in order to discover Subscriptions, to be aware of Subscriptions status, or to be aware of previous events related to Subscriptions.

### 2:3.113.2 Actors Roles

**Table 2:3.113.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Resource Notification Subscriber](volume-1.html#154112-resource-notification-subscriber)     | Sends the query request to the Resource Notification Broker |
| [Resource Notification Broker](volume-1.html#154111-resource-notification-broker) | Receives the query and responds |
{: .grid}

### 2:3.113.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0.](https://www.hl7.org/FHIR/R4)

### 2:3.113.4 Messages

<figure>
{%include ITI-113-Subscription-seq.svg%}
<figcaption><b>Figure 2:3.113.4-1: Resource Subscription Search [ITI-113] interactions</b></figcaption>
</figure>
<br clear="all">

#### 2:3.113.4.1 Subscription Search Request Message
The Resource Notification Subscriber Request Message is a parameterized `HTTP GET` that queries the Resource Notification Broker for information about Subscriptions.

##### 2:3.113.4.1.1 Trigger Events

A Resource Notification Subscriber sends this message to the Resource Notification Broker when it needs to discover one or more Subscription Resources that are not known. 

##### 2:3.113.4.1.2 Message Semantics

The Resource Notification Subscriber sends an `HTTP GET` request to the Resource Notification Broker. 

This request SHALL comply with requirements specified in the HL7<sup>®</sup>
FHIR<sup>®</sup> standard <https://hl7.org/fhir/R4/http.html#search>.

The search target URL follows the FHIR HTTP specification <https://hl7.org/fhir/R4/http.html>, addressing the Subscription Resources that the Resource Notification Subscriber is interested to discover. 

The Resource Notification Subscriber Request Message can be expressed by addressing the Subscription Resource with different parameters at the URL:
 
>GET  \[base\]/Subscription?\[Parameters\]

The Resource Notification Subscriber SHOULD support and MAY supply, and the Resource Notification Broker SHALL be capable of processing all parameters reported in Table 3.113.5.2-1. All parameter values SHALL be appropriately encoded per [RFC3986](https://tools.ietf.org/html/rfc3986) “percent” encoding rules. Note that percent encoding does restrict the character set to a subset of ASCII characters which is used for encoding all other characters used in the URL. Resource Notification Broker MAY choose to support additional parameters beyond the subset listed below. Any additional parameters supported SHALL be supported according to [Search parameters](https://hl7.org/fhir/R4/subscription.html#search) section and also the [search parameter](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/artifacts.html#behavior-search-parameters) included in the [Subscription R5 Backport Implementation Guide](http://hl7.org/fhir/uv/subscriptions-backport/STU1.1/). Such additional parameters are considered out of scope for this transaction. Any additional parameters not supported SHOULD be ignored. 

FHIR defines methods of supporting multiple parameter values in an AND and OR relationship. The Resource Notification Broker SHALL support both AND and OR relationships. See FHIR specification on Composite Search Parameters [https://hl7.org/fhir/R4/search.html#combining](https://hl7.org/fhir/R4/search.html#combining).

**Table 2:3.113.4.1.2-1: Subscription Search Request Message Search Parameters**

|Name	|Type	|	Description |
|--------------|----------------|-----------|
|_id |string | The id of the Subscription|
|status	|token	|The current state of the subscription|
|url	|uri		|The URI that will receive the notifications|
|filter-criteria|string|This SearchParameter enables query of subscriptions by filter criteria|
|topic|uri|This SearchParameter enables query of subscriptions by canonical topic-url|
{: .grid}

The Resource Notification Subscriber MAY provide the optional parameter "_format" to specify the desired MIME-types in the response message. The Resource Notification Broker SHOULD accept `application/fhir+xml` and `application/fhir+json` as _format parameters.  For example, indicating `application/fhir+json` could result in the response from the Resource Notification Broker being a json FHIR Bundle with all the content encoded as FHIR resources.

###### 2:3.113.4.1.2.1 Subscription Search Request Message Examples

Search for all active subscriptions with `endpoint=X` without knowing the type of subscription: 
>GET  \[base\]/Subscription?status=active&channel.endpoint=X

Search for all the subscriptions made for documents produced for a specific patient with `patientId = Y`:
>GET  \[base\]/Subscription?filter-criteria=documentReference%3Fsubject=Y

Search for all the subscriptions that are referring to a specific SubscriptionTopic resource with `id=1234`:
>GET  \[base\]/Subscription?criteria=http://hl7.org/SubscriptionTopic/1234

##### 2:3.113.4.1.3 Expected Actions

The Resource Notification Broker who received the message SHALL process the request and respond with a Resource Subscription Search Response Message. 

After receiving a Subscription Search request, the Resource Notification Broker SHALL return a Bundle with the Subscription Resources that matches the query parameters in the request message.

#### 2:3.113.4.2 Subscription Search Response Message

The Resource Notification Broker returns an HTTP status code appropriate to the processing as well as a Bundle containing a list of the matching Subscription resources.

##### 2:3.113.4.2.1 Trigger Events

The Resource Notification Broker completed the processing of the Subscription Search Request Message.

##### 2:3.113.4.2.2 Message Semantics

The response SHALL adhere to the FHIR Bundle constraints specified in ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles)

Based on the query results, the Resource Notification Broker will either return an error or success. Guidance on handling Access Denied related to the use of 200, 403, and 404 can be found in ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results). When the Resource Notification Broker needs to report an error, it SHALL use HTTP error response codes and SHOULD include a FHIR OperationOutcome with more details on the failure. See FHIR https://hl7.org/fhir/R4/http.html and https://hl7.org/fhir/R4/operationoutcome.html.

If the Resource Subscription Search message is processed successfully, whether or not any Subscription Resources are found based on the request parameters, the response SHALL be an `HTTP 200` status code. The Resource Subscription Search Response message SHALL be a Bundle Resource that SHALL have:

 - the `Bundle.type` element valued `searchset` 
 - zero or more entries containing the Subscription Resources; 
 - zero or one OperationOutcome Resource that contains warnings, if the Resource Subscription Broker is sending warnings. 
 
 More information about search response can be found at [http://hl7.org/fhir/R4/http.html#search](http://hl7.org/fhir/R4/http.html#search).


##### 2:3.113.4.2.3 Expected Actions

The Resource Notification Subscriber SHALL process the results according to application-defined rules.

#### 2:3.113.4.3 Subscription Status Search Request Message

The Subscription Status Search Request Message is a parametrized `HTTP GET` that allows to search or retrieve, from the Resource Notification Broker, information about the status of the Subscriptions.

##### 2:3.113.4.3.1 Trigger Events

This message can be used by the Resource Notification Subscriber to be aware of the status of one or more Subscriptions, using the $status operation. 

##### 2:3.113.4.3.2 Message Semantics

The Resource Notification Subscriber sends an `HTTP GET` request to the Resource Notification Broker. 

The Resource Notification Subscriber Request Message SHALL be a FHIR operation request as defined in FHIR (http://hl7.org/fhir/operations.html) with the $status operation definition and the input parameters in Table 3.113.6.2-1, in order to be aware of the Subscriptions status.

The URL for this operation is one of:

>GET  \[base\]/Subscription/$status

>GET  \[base\]/Subscription/\[id\]/$status

**Table 2:3.113.4.3.2-1: Subscription Status Search Request Message Parameters**

|Name	|Cardinality|Type	|	Description |
|-----------|------|----------------|-----------|
|id	| 0..* |id	|	At the Instance level, this parameter is ignored. At the Resource level, one or more parameters containing a FHIR id for a Subscription to get status information for. In the absence of any specified ids, the server returns the status for all Subscriptions available to the caller. Multiple values are joined via OR (e.g., "id1" OR "id2")|
|status	| 0..* |code	|	At the Instance level, this parameter is ignored. At the Resource level, a Subscription status to filter by (e.g., "active"). In the absence of any specified status values, the server does not filter contents based on the status. Multiple values are joined via OR (e.g., "error" OR "off")|
{: .grid}

The Resource Notification Subscriber MAY provide the optional parameter "_format" to specify the desired MIME-types in the response message. The Resource Notification Broker SHOULD accept `application/fhir+xml` and `application/fhir+json` as _format parameters.  For example, indicating `application/fhir+json` could result in the response from the Resource Notification Broker being a json FHIR Bundle with all the content encoded as json FHIR resources.

###### 2:3.113.4.3.2.1 Subscription Status Search Request Message examples

Get all the SubscriptionStatus resources for all the subscription that are active `status=active`:
>GET  \[base\]/Subscription/$status?status=active

Get the SubscriptionStatus for the subscription with `id=1234`:
>GET  \[base\]/Subscription/1234/$status

##### 2:3.113.4.3.3 Expected Actions

The Resource Notification Broker who received the message SHALL process the request and respond with a Resource Subscription Search Response Message. 

After receiving a Subscription Status Search Request Message, the Resource Notification Broker SHALL return a Bundle with the SubscriptionStatus Resources related to the Subscriptions that matched the query parameters in the request message.


#### 2:3.113.4.4 Subscription Status Search Response Message

The Resource Notification Broker returns an HTTP status code appropriate to the processing as well as a Bundle containing a list of the matching SubscriptionStatus resources.

##### 2:3.113.4.4.1 Trigger Events

The Resource Notification Broker completed the processing of the Subscription Status Search Request Message.

##### 2:3.113.4.4.2 Message Semantics

The response SHALL adhere to the FHIR Bundle constraints specified in ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles)

Based on the query results, the Resource Notification Broker will either return an error or success. Guidance on handling Access Denied related to the use of 200, 403, and 404 can be found in ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results). When the Resource Notification Broker needs to report an error, it SHALL use HTTP error response codes and SHOULD include a FHIR OperationOutcome with more details on the failure. See FHIR https://hl7.org/fhir/R4/http.html and https://hl7.org/fhir/R4/operationoutcome.html.

If the $status operation request is processed successfully the response SHALL be an `HTTP 200` status code. The Resource Subscription Search Response message SHALL be a Bundle Resource that SHALL have:

- [SubscriptionStatus Bundle](StructureDefinition-IHE.DSUBm.StatusOperation-Bundle.html)
    - the `Bundle.type` element valued `searchset` 
    - zero or more entries containing the [SubscriptionStatus](StructureDefinition-IHE.DSUBm.SubscriptionStatus-StatusOperation.html) Resources for the $status operation; 
    - zero or one OperationOutcome Resource that contains warnings, if the Resource Subscription Broker is sending warnings. 
 
##### 2:3.113.4.4.3 Expected Actions

The Resource Notification Subscriber SHALL process the results according to application-defined rules.

#### 2:3.113.4.5 Subscription Events Search Request Message

The Resource Notification Subscriber Request Message is a parametrized `HTTP GET` that allows to retrieve, from the Resource Notification Broker, the events about a specific Subscription that have occurred.

##### 2:3.113.4.5.1 Trigger Events

When the Subscription Resource is known, this message can be used by the Resource Notification Subscriber to be aware of previous events related to that Subscription, using the $events operation.

##### 2:3.113.4.5.2 Message Semantics

The Resource Notification Subscriber sends an `HTTP GET` request to the Resource Notification Broker. 

The Subscription Events Search Request Message SHALL be a FHIR operation request as defined in FHIR (http://hl7.org/fhir/operations.html) with the $events operation definition and the input parameters in Table 3.113.7.2-1, in order to be aware of previous events related to a Subscription.

The URL for this operation is:

>GET  \[base\]/Subscription/\[id\]/$events

**Table 2:3.113.4.5.2-1: Subscription Events Search Request Message Parameters**

|Name	|Cardinality|Type	|	Description |
|--------------|----------|----------------|-----------|
|eventsSinceNumber| 0..1	|string	|	The starting event number, inclusive of this event (lower bound)	|
|eventsUntilNumber| 0..1	|string	|The ending event number, inclusive of this event (upper bound)	|
|content| 0..1	|code	|Requested content style of returned data. Codes from backport-content-value-set (e.g., empty, id-only, full-resource). This is a hint to the server what a client would prefer, and MAY be ignored	|
{: .grid}

The Resource Notification Subscriber MAY provide the optional parameter "_format" to specify the desired MIME-types in the response message. The Resource Notification Broker SHOULD accept `application/fhir+xml` and `application/fhir+json` as _format parameters.  For example, indicating `application/fhir+json` could result in the response from the Resource Notification Broker being a json FHIR Bundle with all the content encoded as json FHIR resources.

##### 2:3.113.4.5.3 Expected Actions

The Resource Notification Broker who received the message SHALL process the request and respond with a Resource Subscription Events Search Response Message. 

After receiving a Subscription Events Search Request Message, the Resource Notification Broker SHALL return a Bundle with the SubscriptionStatus Resource and the previous events related to the Subscription that match the query parameters in the request message. The Resource Notification Broker MAY use implementation-specific criteria to restrict availability of events (e.g., most recent 10 events, events within the past 30 days, only the events from the last $events operation performed by a Resource Notification Subscriber, etc.).

#### 2:3.113.4.6 Subscription Events Search Response Message

The Resource Notification Broker returns an HTTP status code appropriate to the processing as well as a Bundle containing the events.

##### 2:3.113.4.6.1 Trigger Events

The Resource Notification Broker completed the processing of the Subscription Events Search Request Message.

##### 2:3.113.4.6.2 Message Semantics

The response SHALL adhere to the FHIR Bundle constraints specified in ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles)

Based on the query results, the Resource Notification Broker will either return an error or success. Guidance on handling Access Denied related to the use of 200, 403, and 404 can be found in ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results). When the Resource Notification Broker needs to report an error, it SHALL use HTTP error response codes and SHOULD include a FHIR OperationOutcome with more details on the failure. See FHIR https://hl7.org/fhir/R4/http.html and https://hl7.org/fhir/R4/operationoutcome.html.

If the $events operation request is processed successfully the response SHALL be an `HTTP 200` status code. The Resource Subscription Search Response message SHALL be a Bundle Resource that SHALL have:

- [SubscriptionEvent Bundle](StructureDefinition-IHE.DSUBm.EventsOperation-Bundle.html)
    - the `Bundle.type` element valued `history` 
    - in the first the first entry the [SubscriptionStatus](StructureDefinition-IHE.DSUBm.SubscriptionStatus-EventsOperation.html) for the $events operation;
    - zero or more additional entries, with either URLs or resources representing contents, depending on the `content` query parameter in the request and the `Subscription.payload.content` and the `notificationShape` element defined in the Topic of the Subscription. 


##### 2:3.113.4.6.3 Expected Actions

The Resource Notification Subscriber SHALL process the results according to application-defined rules.



#### 2:3.113.4.7 Subscription Read Request Message
The Resource Notification Subscriber Request Message is an `HTTP GET` that retrieve a known Subscription from the Resource Notification Broker.

##### 2:3.113.4.7.1 Trigger Events

A Resource Notification Subscriber sends this message to the Resource Notification Broker when it needs to retrieve one Subscription Resources with a known resource id. 

##### 2:3.113.4.7.2 Message Semantics

The Resource Notification Subscriber sends an `HTTP GET` request to the Resource Notification Broker. 

This request SHALL comply with requirements specified in the HL7<sup>®</sup>
FHIR<sup>®</sup> standard <https://hl7.org/fhir/R4/http.html#read>. 

The Resource Notification Subscriber Request Message SHALL be expressed by addressing the Subscription Resource URL, providing the resource id of the Subscription being retrieved. The target is formatted as:
 
>GET  \[base\]/Subscription/\[id\]


###### 2:3.113.4.7.2.1 Subscription Read Request Message example

Read the Subscriptions with `id=1234`:
>GET  \[base\]/Subscription/1234

##### 2:3.113.4.7.3 Expected Actions
The Resource Notification Broker who received the message SHALL retrieve the Subscription record indicated by the Resource id on the HTTP GET supplied by the Resource Notification Subscriber.

#### 2:3.113.4.8 Subscription Read Response Message

The Resource Notification Broker returns an HTTP status code appropriate to the processing as well as the matching Subscription resources.
The Resource Notification Broker SHALL respond to the retrieve request bas on the outcome of the interaction.

##### 2:3.113.4.8.1 Trigger Events

The Resource Notification Broker completed the processing of the Subscription Read Request Message.

##### 2:3.113.4.8.2 Message Semantics

The Subscription Read Response Message is sent from the Resource Notification Broker to the Resource Notification Subscriber as a single Subscription Resource.

See ITI TF-2: [Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format handling. See ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for guidance for Access Denied.

If the Resource Notification Broker is unable to produce a response in the requested format, it SHALL respond with an `HTTP 400` error indicating that it was unable to fulfill the request. The Resource Notification Broker MAY be capable of servicing requests for response formats not listed, but SHALL, at minimum, be capable of producing XML and JSON encodings.

##### 2:3.113.4.8.3 Expected Actions

The Resource Notification Subscriber SHALL process the results according to application-defined rules.


### 2:3.113.5 CapabilityStatement Resource

The Resource Notification Subscriber implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Subscriber are listed in Section [1:54.1.1.2 Resource Notification Subscriber](volume-1.html#154112-resource-notification-subscriber).

The Resource Notification Broker implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Broker are listed in Section [1:54.1.1.1 Resource Notification Broker](volume-1.html#154111-resource-notification-broker).

### 2:3.113.6 Security Considerations

See [DSUBm Security Considerations](volume-1.html#1545-security-considerations). 

The implementers SHOULD be aware that a specific Resource Notification Subscriber MAY acquire sensitive information if searching for Subscriptions created by other Subscribers. 
The Resource Notification Broker SHOULD follow an implementing policy in order to allow or prohibit the search for Subscription resources created by other Subscribers. 

It is highly RECOMMENDED that the Resource Notification Subscriber SHOULD use some form of authentication method when searching for existing Subscription. The Resource Notification Broker SHOULD always verify the authentication token used in this transaction before returning the information requested. 

#### 2:3.113.6.1 Security Audit Considerations

The Resource Notification Subscriber, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for:
- [Resource Notification Subscriber SubscriptionTopic Query](StructureDefinition-IHE.DSUBm.SubscriptionSearch.Audit.Subscriber.html), when a search interaction is performed;
- [Resource Notification Subscriber SubscriptionTopic Read](StructureDefinition-IHE.DSUBm.SubscriptionRead.Audit.Subscriber.html), when a read interaction is performed.

The Resource Notification Broker, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for:
- [Resource Notification Broker SubscriptionTopic Query](StructureDefinition-IHE.DSUBm.SubscriptionSearch.Audit.Broker.html), when a search interaction is performed;
- [Resource Notification Broker SubscriptionTopic Read](StructureDefinition-IHE.DSUBm.SubscriptionRead.Audit.Broker.html), when a read interaction is performed.


---

// File: input/pagecontent/ITI-114.md

This section corresponds to the Resource SubscriptionTopic Search [ITI-114] transaction of the IHE Technical Framework.

### 2:3.114.1 Scope

The Resource SubscriptionTopic Search [ITI-114] is used by the Resource Notification Subscriber to Resource Notification Broker Actors, in order to search for a `Basic` resource to be used as subscription topic in a `Subscription` resource.

### 2:3.114.2 Actors Roles

**Table 2:3.114.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Resource Notification Subscriber](volume-1.html#154112-resource-notification-subscriber)     | Sends the query request to the Resource Notification Broker |
| [Resource Notification Broker](volume-1.html#154111-resource-notification-broker) | Receives the query and responds |
{: .grid}

### 2:3.114.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0.1](https://www.hl7.org/FHIR/R4)

### 2:3.114.4 Messages

<figure>
{%include ITI-114-SubscriptionTopic-seq.svg%}
<figcaption><b>Figure 2:3.114.4-1: Resource SubscriptionTopic Search [ITI-114] interactions</b></figcaption>
</figure>
<br clear="all">

#### 2:3.114.4.1 Resource SubscriptionTopic Search Request Message
The Resource Notification Subscriber Request Message is a parametrized `HTTP GET` that allows to search for a list of `Basic` resources (that are representing the subscription topics) managed by the Resource Notification Broker, based on a set of search parameters.

##### 2:3.114.4.1.1 Trigger Events

A Resource Notification Subscriber sends this message to the Resource Notification Broker when it needs to discover a `Basic` resource (that are representing the subscription topics). This normally happens before the Subscriber creates a `Subscription`.

##### 2:3.114.4.1.2 Message Semantics

The Resource Notification Subscriber sends an HTTP GET request to the Resource Notification Broker. This request SHALL comply with requirements specified in the HL7<sup>®</sup>
FHIR<sup>®</sup> standard <https://hl7.org/fhir/R4/http.html#search>.

The Resource Notification Subscriber Request Message SHALL be expressed by addressing the `Basic` Resource in the path as follows:

> GET \[base\]/Basic?code=SubscriptionTopic&\[Parameters\]

The Resource Notification Subscriber SHOULD support and MAY supply, and the Resource Notification Broker SHALL be capable of processing all parameters reported in Table 2:3.114.4.1.2-1. All parameter values SHALL be appropriately encoded per [RFC3986](https://tools.ietf.org/html/rfc3986) “percent” encoding rules. Note that percent encoding does restrict the character set to a subset of ASCII characters which is used for encoding all other characters used in the URL. Resource Notification Broker MAY choose to support additional parameters beyond the subset listed below. Any additional parameters supported SHALL be supported according to [Search Parameters](https://hl7.org/fhir/R4/subscriptiontopic.html#search) section. Such additional parameters are considered out of scope for this transaction. Any additional parameters not supported SHOULD be ignored.

In the query string the search parameter `code` is REQUIRED and it SHALL be valued as `code=SubscriptionTopic`.

FHIR defines methods of supporting multiple parameter values in an AND and OR relationship. The Resource Notification Broker SHALL support both AND and OR relationships. See FHIR specification on Composite Search Parameters [https://hl7.org/fhir/R4/search.html#combining](https://hl7.org/fhir/R4/search.html#combining).


**Table 2:3.114.4.1.2-1: Resource SubscriptionTopic Search Request Message Search Parameters**

|Name	|Type	|	Description |
|--------------|----------------|-----------|
|code| token | Kind of Resource (MANDATORY parameter valued  `code=SubscriptionTopic` ) |
|_id| string | The id of the `Basic` resource|
|[resource](SearchParameter-SubscriptionTopic-resource.html)	|uri	|	Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape, and canFilterBy for matches.|
|[derived-or-self](SearchParameter-SubscriptionTopic-derived-or-self.html) |uri |	A server defined search that matches either the url or derivedFrom|
|[status](SearchParameter-SubscriptionTopic-status.html)	| token	| The RECOMMENDED value SHOULD be `active` when searching for available `Basic` resources 	|
|[url](SearchParameter-SubscriptionTopic-url.html)	|	uri	| Logical canonical URL to reference this `Basic` (globally unique)	|
{: .grid}

The Resource Notification Subscriber MAY provide the optional parameter "_format" to specify the desired MIME-types in the response message. The Resource Notification Broker SHOULD accept `application/fhir+xml` and `application/fhir+json` as _format parameters.  For example, indicating `application/fhir+json` could result in the response from the Resource Notification Broker being a json FHIR Bundle with all the content encoded as FHIR resources.

##### 2:3.114.4.1.3 Expected Actions

The Resource Notification Broker who received the message SHALL process the request, according to application-defined rules, and also evaluate if the Resource Notification Subscriber can access the information. 

If the access is granted, the Resource Notification Broker SHALL produce a response in which SHALL be present at least the following `Basic` Resources (that are representing the subscription topics), if parameters match:

- [Patient-Dependent DocumentReference SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-DocumentReference-PatientDependent.html)
- [Multi-Patient DocumentReference SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-DocumentReference-MultiPatient.html)
- [Patient-Dependent SubmissionSet SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-SubmissionSet-PatientDependent.html)
- [Multi-Patient SubmissionSet SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-SubmissionSet-MultiPatient.html)

If the Resource Notification Broker supports the [DocumentReference Subscription for Minimal Update Option](volume-1.html#15421-documentreference-subscription-for-minimal-update-option), the following `Basic` resources SHALL also be present in the response, if parameters match:

- [Patient-Dependent DocumentReference SubscriptionTopic with DocumentReference Subscription for Minimal Update Option](SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-PatientDependent-MinUpdate.html)
- [Multi-Patient DocumentReference SubscriptionTopic with DocumentReference Subscription for Minimal Update Option](SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-MultiPatient-MinUpdate.html)

If the Resource Notification Broker supports the [DocumentReference Subscription for Full Events Option](volume-1.html#15422-documentreference-subscription-for-full-events-option), the following `Basic` resources SHALL also be present in the response, if parameters match:

- [Patient-Dependent DocumentReference SubscriptionTopic with Updates to document sharing resources Option](SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-PatientDependent-AllEvents.html)
- [Multi-Patient DocumentReference SubscriptionTopic with DocumentReference Subscription for Full Events Option](SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-MultiPatient-AllEvents.html)

If the Resource Notification Broker supports the [Basic Folder Subscription Option](volume-1.html#15423-basic-folder-subscription-option), the following `Basic` resources SHALL also be present in the response, if parameters match:

- [Basic Folder SubscriptionTopic](SubscriptionTopic-DSUBm-SubscriptionTopic-Basic-Folder-Subscription.html)

If the Resource Notification Broker supports the [Folder Subscription for Minimal Update Option](volume-1.html#15424-folder-subscription-for-minimal-update-option), the following `Basic` resources SHALL also be present in the response, if parameters match:

- [Folder SubscriptionTopic with Folder Subscription for Minimal Update Option](SubscriptionTopic-DSUBm-SubscriptionTopic-Folder-Subscription-MinUpdateOpt.html)

If the Resource Notification Broker supports the [Folder Subscription for Update Option](volume-1.html#15425-folder-subscription-for-update-option), the following `Basic` resources SHALL also be present in the response, if parameters match:

- [Folder SubscriptionTopic with Folder Subscription for Minimal Update Option](SubscriptionTopic-DSUBm-SubscriptionTopic-Folder-Subscription-UpdateOpt.html)

If the Resource Notification Broker supports the [Folder Subscription for Full Events Option](volume-1.html#15426-folder-subscription-for-full-events-option), the following `Basic` resources SHALL also be present in the response, if parameters match:

- [Folder SubscriptionTopic with Folder Subscription for Full Events Option](SubscriptionTopic-DSUBm-SubscriptionTopic-Folder-Subscription-for-Full-Events.html)

#### 2:3.114.4.2 Resource SubscriptionTopic Search Response Message

The Resource Notification Broker returns an HTTP status code appropriate to the processing as well as a Bundle containing a list of the `Basic` resources (that are representing the subscription topics).

#### 2:3.114.4.2.1 Trigger Events

The Resource Notification Broker completed the processing of the request message.

#### 2:3.114.4.2.2 Message Semantics

Based on the query results, the Resource Notification Broker will either return an error or success. Guidance on handling Access Denied related to the use of 200, 403, and 404 can be found in ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results). When the Resource Notification Broker needs to report an error, it SHALL use HTTP error response codes and SHOULD include a FHIR OperationOutcome with more details on the failure. See FHIR [https://hl7.org/fhir/R4/http.html](https://hl7.org/fhir/R4/http.html) and [https://hl7.org/fhir/R4/operationoutcome.html](https://hl7.org/fhir/R4/operationoutcome.html).

If the Resource SubscriptionTopic Search message is processed successfully, the HTTP status code SHALL be 200. The Resource SubscriptionTopic Search Response message SHALL be a Bundle Resource containing the `Basic` Resources. If the Resource Notification Broker is sending warnings, the Bundle Resource SHALL also contain an OperationOutcome Resource that contains those warnings.

The response SHALL adhere to the FHIR Bundle constraints specified in ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles)

#### 2:3.114.4.2.3 Expected Actions

The Resource Notification Subscriber SHALL process the results according to application-defined rules and be aware of the subscription topic supported by the Resource Notification Broker.

#### 2:3.114.4.3 SubscriptionTopic Read Request Message
The Resource Notification Subscriber Request Message is an `HTTP GET` that retrieve a known Basic resource representing the subscription topic from the Resource Notification Broker.

##### 2:3.114.4.3.1 Trigger Events

A Resource Notification Subscriber sends this message to the Resource Notification Broker when it needs to retrieve one Basic resource representing the subscription topic with a known resource id. 

##### 2:3.114.4.3.2 Message Semantics

The Resource Notification Subscriber sends an `HTTP GET` request to the Resource Notification Broker. 

This request SHALL comply with requirements specified in the HL7<sup>®</sup>
FHIR<sup>®</sup> standard <https://hl7.org/fhir/R4/http.html#read>. 

The Resource Notification Subscriber Request Message SHALL be expressed by addressing the Basic Resource URL, providing the resource id of the Basic resource being retrieved. The target is formatted as:
 
>GET  \[base\]/Basic/\[id\]


###### 2:3.114.4.3.2.1 SubscriptionTopic Read Request Message example

Read the Basic resource, representing a subscription topic, with `id=1234`:
>GET  \[base\]/Basic/1234

##### 2:3.114.4.3.3 Expected Actions
The Resource Notification Broker who received the message SHALL retrieve the Basic record indicated by the Resource id on the HTTP GET supplied by the Resource Notification Subscriber.

#### 2:3.114.4.4 SubscriptionTopic Read Response Message

The Resource Notification Broker returns an HTTP status code appropriate to the processing as well as the matching Basic resources.
The Resource Notification Broker SHALL respond to the retrieve request bas on the outcome of the interaction.

##### 2:3.114.4.4.1 Trigger Events

The Resource Notification Broker completed the processing of the SubscriptionTopic Read Request Message.

##### 2:3.114.4.4.2 Message Semantics

The SubscriptionTopic Read Response Message is sent from the Resource Notification Broker to the Resource Notification Subscriber as a single Subscription Resource.

See ITI TF-2: [Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for more details on response format handling. See ITI TF-2: [Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.7-guidance-on-access-denied-results) for guidance for Access Denied.

If the Resource Notification Broker is unable to produce a response in the requested format, it SHALL respond with an `HTTP 400` error indicating that it was unable to fulfill the request. The Resource Notification Broker MAY be capable of servicing requests for response formats not listed, but SHALL, at minimum, be capable of producing XML and JSON encodings.

##### 2:3.114.4.4.3 Expected Actions

The Resource Notification Subscriber SHALL process the results according to application-defined rules.



### 2:3.114.5 CapabilityStatement Resource
The Resource Notification Subscriber implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Subscriber are listed in Section [1:54.1.1.2 Resource Notification Subscriber](volume-1.html#154112-resource-notification-subscriber).

The Resource Notification Broker implementing this transaction SHALL provide a CapabilityStatement Resource as described in [ITI TF-2: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
The possible CapabilityStatements for the Resource Notification Broker are listed in Section [1:54.1.1.1 Resource Notification Broker](volume-1.html#154111-resource-notification-broker).

### 2:3.114.6 Security Considerations

See [DSUBm Security Considerations](volume-1.html#1545-security-considerations). 

#### 2:3.114.6.1 Security Audit Considerations

The Resource Notification Subscriber, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for:
- [Resource Notification Subscriber SubscriptionTopic Query](StructureDefinition-IHE.DSUBm.SubscriptionTopicSearch.Audit.Subscriber.html), when a search interaction is performed;
- [Resource Notification Subscriber SubscriptionTopic Read](StructureDefinition-IHE.DSUBm.SubscriptionTopicRead.Audit.Subscriber.html), when a read interaction is performed.

The Resource Notification Broker, when grouped with [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application Actor, SHALL be able to record fundamental AuditEvents for:
- [Resource Notification Broker SubscriptionTopic Query](StructureDefinition-IHE.DSUBm.SubscriptionTopicSearch.Audit.Broker.html), when a search interaction is performed;
- [Resource Notification Broker SubscriptionTopic Read](StructureDefinition-IHE.DSUBm.SubscriptionTopicRead.Audit.Broker.html), when a read interaction is performed.


---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE profiles or the General Introduction appendices and is not a part of the DSUBm Profile. The content here will be incorporated into the target narrative at a future time, usually when DSUBm Profile goes normative.
</div>

## IHE Technical Frameworks Document Metadata Subscription (DSUB) Profile

|------------------------------------------------|
| Editor: Apply the following updates to DSUB Table 26.1-1 |
| Note for the Editor: Be aware of a possible previous integration of DSUB supplement (Extensions to the Document Metadata Subscription (DSUB) Profile)  |
{:.grid .bg-info}

**Table 1:26.1-1: DSUBm Profile - Actors and Transactions**

|---------|---------------|------------------------|-----------------|-----------------------------------|
| **Actors**  | **Transactions**  | **Optionality**  |       **Reference**           |
| Document Metadata Notification Broker    | Document Metadata Subscribe    | R    | ITI TF-2: 3.52     |  
|                                          | Document Metadata Notify   | R    | ITI TF-2: 3.53     | 
|                                          | Document Metadata Publish    | O    | ITI TF-2: 3.54    |  
|                                          | **<u>Resource Subscription Search</u>** | **<u>O (Note 1)</u>**  | **<u>ITI TF-2: 3.113</u>**     | 
| Document Metadata Subscriber              |Document Metadata Subscribe |R |ITI TF-2: 3.52| 
|                                          | **<u>Resource Subscription Search</u>**   | **<u>O (Note 1)</u>**  | **<u>ITI TF-2: 3.113</u>**     | 
|Document Metadata Publisher |Document Metadata Publish | R | ITI TF-2: 3.54 |
|Document Metadata Notification Recipient | Document Metadata Notify | R | ITI TF-2:3.53|
{: .grid .table-striped}

|------------------------------------------------|
| Editor: Add this Note to DSUB below Table 26.1-1 |
| Note for the Editor: Be aware of a possible previous integration of DSUB supplement (Extensions to the Document Metadata Subscription (DSUB) Profile)  |
{:.grid .bg-info}

*Note 1: The Document Metadata Notification Broker and the Document Metadata Subscriber SHALL support the Resource Subscription Search [ITI-113] transaction if they supports the Subscription Search Option (see Section 26.2.2).*

|------------------------------------------------|
| Editor: add to DSUB Sections 26.2.2  |
| Note for the Editor: Be aware of a possible previous integration of DSUB supplement (Extensions to the Document Metadata Subscription (DSUB) Profile)  |
{:.grid .bg-info}

### 26.2.2 Subscription Search Option

The Document Metadata Notification Broker that support this option SHALL support the Resource Subscription Search [ITI-113] transaction. With this option the Document Metadata Notification Broker SHALL be capable of return a list of Subscription Resources that match the search parameter, on the base of the subscription it has received with the Document Metadata Subscribe [ITI-52] transaction and that it has tracked. It SHOULD support the %status operation and it MAY support the $events operation Resource Subscription Search [ITI-113] transaction.

The Document Metadata Subscriber that support this option SHALL support the Resource Subscription Search [ITI-113] transaction. With this option the Document Metadata Subscriber can search the subscription towards the Document Metadata Notification Broker. With this option the Document Metadata Subscriber SHALL support the search and/or read of Subscription Resource. It MAY support the %status operation and it MAY support the $events operation of the Resource Subscription Search [ITI-113] transaction.

## IHE Technical Frameworks General Introduction Appendix A: Actors

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}

| Actor                            | Definition                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------|
| Resource Notification Broker     | Receives the Resource Subscription transaction containing a subscription request or a subscription cancellation |
| Resource Notification Publisher  | Sends a Resource Publish transaction to the Resource Notification Broker when an event occurs for which a subscription MAY exist |
| Resource Notification Recipient  | Receives the notification about an event when the subscription filters specified for this Document Resource Notification Recipient are satisfied |
| Resource Notification Subscriber | Initiates and terminates subscriptions on behalf of a Resource Notification Recipient |
{:.grid .table-striped}

## IHE Technical Frameworks General Introduction Appendix B: Transactions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}

| Transaction                                 | Definition                                                                              |
| ------------------------------------------- | --------------------------------------------------------------------------------------- |
| Resource Subscription [ITI-110] | Passes a Resource Subscription Request from a Resource Notification Subscriber to a Resource Notification Broker. |
| Resource Publish [ITI-111] | Delivers information from the Resource Notification Publisher to the Resource Notification Broker about events regarding DocumentReference, Folder type List and SubmissionSet type List resources |
| Resource Notify [ITI-112] | Delivers a notification from the Resource Notification Broker to the Resource Notification Recipient about an event which matches an existing subscription |
| Resource Subscription Search [ITI-113] | Passes a Resource Subscription Search message from a Resource Notification Subscriber to a Resource Notification Broker in order to discover Subscriptions, to be aware of Subscriptions status or to be aware of previous events related to Subscriptions |
| Resource SubscriptionTopic Search [ITI-114] | Used by the Resource Notification Subscriber to Resource Notification Broker actors, in order to search for a SubscriptionTopic to be used in a Subscription |
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

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-Basic-Folder-Subscription-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above. 

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-Basic-Folder-Subscription`
</div>


---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-MultiPatient-AllEvents-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above. 

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-MultiPatient-AllEvents`
</div>


---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-MultiPatient-MinUpdate-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above. 

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
``
</div>


---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-PatientDependent-AllEvents-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above. 

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-PatientDependent-AllEvents`
</div>

---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-DocReference-PatientDependent-MinUpdate-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above. 

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-PatientDependent-MinUpdate`
</div>

---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-DocumentReference-MultiPatient-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above. 

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocumentReference-MultiPatient`
</div>

---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-DocumentReference-PatientDependent-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above. 

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocumentReference-PatientDependent`
</div>

---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-Folder-Subscription-for-Full-Events-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above.

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-Folder-Subscription-for-Full-Events`
</div>

---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-Folder-Subscription-MinUpdateOpt-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above. 

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-Folder-Subscription-MinUpdateOpt`
</div>

---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-Folder-Subscription-UpdateOpt-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above.

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-Folder-Subscription-UpdateOpt`
</div>

---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-SubmissionSet-MultiPatient-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above.

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-SubmissionSet-MultiPatient`
</div>

---

// File: input/pagecontent/SubscriptionTopic-DSUBm-SubscriptionTopic-SubmissionSet-PatientDependent-intro.md

<div markdown="1" class="dragon">

Be aware that this resource is a Basic resource that is displayed in the XML and JSON as a SubscriptionTopic resource by the IG publisher. In order to see the Basic resource see the raw xml and the raw json sections above. 

<!-- add the canonical uri of the basic -->
The canoncial url for this resource is the following one: 
`https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-SubmissionSet-PatientDependent`
</div>

---

// File: input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time. For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>

DSUBm specifies actors and transactions to grant functionalities for subscribing for patient document for RESTfull application. The transactions between actors specify semantics of the data exchanged. The DSUBm test plan focuses on these semantics and on the expected actions on both client-side and server-side actors.

## Introduction

The DSUBm implementation could occur in Document Sharing environments like MHDS and XDS, as far as an interface for DSUB, as shown in Section [1:54.6 Cross-Profile Considerations](volume-1.html#1546-cross-profile-considerations). But DSUBm is not limited to these profiles. Also, the systems implementation of DSUBm actors could be different according with their own implementation scenario.

Some possible scenarios of DSUBm implementation are presented in the [Use Case Section in Volume 1](volume-1.html#1544-dsubm-overview).

Overall test plan leverages the Profiles and Examples shown on the [Artifacts Summary](artifacts.html). The [Profiles](artifacts.html#structures-resource-profiles) listed are describing the constraints that would be adhered to by actors claiming conformance to this implementation guide. Thus, any applicable Resources that are known to have been published by an app or server REQUIRED be conformant to these profiles as appropriate.

The Examples listed in [Example Instances](artifacts.html#example-example-instances) are example instances. Some are conformant to the profiles. Other examples that either assist with the structure of the examples (e.g., Patient and Encounter) or are examples that SHOULD be able to handle in various ways. 

### High-level Test Scope

##### Resource Subscription [ITI-110](ITI-110.html) Transaction

###### Resource Notification Subscriber

The Resource Notification Subscriber SHALL be able to show that is able to communicate to a Resource Notification Broker to create or update subscriptions as indicated in [ITI-110](ITI-110.html), for all the subscription topic defined in the basic implementation (i.e., no option supported).
The Resource Notification Subscriber SHALL send a message defined in accordance to the message semantics, process the response message and follow the expected actions defined for the messages in the following [interactions](ITI-110.html#231104-messages):
- Subscribe
- Update  

###### Resource Notification Broker

The Resource Notification Broker SHALL be able to show that it is able to respond to a Resource Notification Subscriber that is creating or updating subscriptions as indicated in [ITI-110](ITI-110.html), for all the subscription topics defined in the basic implementation (i.e., no option supported).
The Resource Notification Broker SHALL process the request message received, follow the expected actions defined and produce a related response message in accordance to the message semantics for the messages in the following [interactions](ITI-110.html#231104-messages):
- Subscribe
- Update  

##### Resource Publish [ITI-111](ITI-111.html) Transaction

###### Resource Notification Publisher

The Resource Notification Publisher SHALL be able to show that it is able to communicate to a Resource Notification Broker indicating that an event as occurred, as indicated in [ITI-111](ITI-111.html).
The Resource Notification Publisher SHALL send a message defined in accordance to the message semantics, process the response message and follow the expected actions defined for the messages in the [interaction](ITI-111.html#231114-messages).

###### Resource Notification Broker

The Resource Notification Broker, if supporting transaction [ITI-111](ITI-111.html), SHALL be able to show that is able to respond to a Resource Notification Publisher that is communicating a publish event as indicated in [ITI-111](ITI-111.html).
The Resource Notification Broker SHALL process the request message received, follow the expected actions defined and produce a related response message in accordance to the message semantics for the messages in the [interaction](ITI-111.html#231114-messages).

##### Resource Notify [ITI-112](ITI-112.html) Transaction

###### Resource Notification Broker

The Resource Notification Broker SHALL be able to show that it is able to send the notifications messages to a Resource Notification Recipient as indicated in [ITI-112](ITI-112.html).
The Resource Notification Broker SHALL send a message defined in accordance to the message semantics, process the response message and follow the expected actions defined for the messages in the following [interactions](ITI-112.html#231124-messages):
- Event Notification  
- Handshake Notification
and if supported:
- Heartbeat Notification
- Subscription Deactivation Notification

The Resource Notification Broker SHOULD demonstrate to follow what is indicated in [Handling Errors in Notification](ITI-112.html#2311249-handling-errors-in-notification) or if something more specific is implemented.

###### Resource Notification Recipient
The Resource Notification Recipient SHALL be able to show that it is able to respond to a Resource Notification Broker that is sending notification messages as indicated in [ITI-112](ITI-112.html).
The Resource Notification Recipient SHALL process the request message received, follow the expected actions defined and produce a related response message in accordance to the message semantics for the messages in the following [interactions](ITI-112.html#231124-messages):
- Event Notification  
- Handshake Notification
- Heartbeat Notification
- Subscription Deactivation Notification

##### Resource Subscription Search [ITI-113](ITI-113.html) Transaction

###### Resource Notification Subscriber

The Resource Notification Subscriber SHALL be able to show that it is able to communicate to a Resource Notification Broker for searching the existing subscriptions as indicated in [ITI-113](ITI-113.html).
The Resource Notification Subscriber SHALL send a message defined in accordance to the message semantics, process the response message and follow the expected actions defined for the messages in the following [interactions](ITI-113.html#231134-messages):
- Subscription Search
- Subscription Read
and if supported:
- Subscription Status Search
- Subscription Events Search

###### Resource Notification Broker

The Resource Notification Broker SHALL be able to show that it is able to respond to a Resource Notification Subscriber that is searching the existing subscriptions as indicated in [ITI-113](ITI-113.html).
The Resource Notification Broker SHALL process the request message received, follow the expected actions defined and produce a related response message in accordance to the message semantics for the messages in the following [interactions](ITI-113.html#231134-messages):
- Subscription Search
- Subscription Read
- Subscription Status Search
and if supported:
- Subscription Events Search

##### Resource SubscriptionTopic Search [ITI-114](ITI-114.html) Transaction

###### Resource Notification Subscriber

The Resource Notification Subscriber SHALL be able to show that it is able to communicate to a Resource Notification Broker for searching the subscription topics available as indicated in [ITI-114](ITI-114.html).
The Resource Notification Subscriber SHALL send a message defined in accordance to the message semantics, process the response message and follow the expected actions defined for the messages in the following [interactions](ITI-114.html#231144-messages):
- SubscriptionTopic Search
- SubscriptionTopic Read

###### Resource Notification Broker

The Resource Notification Broker SHALL be able to show that it is able to respond to a Resource Notification Subscriber that is searching the subscription topics available as indicated in [ITI-114](ITI-114.html).
The Resource Notification Broker SHALL process the request message received, follow the expected actions defined and produce a related response message in accordance to the message semantics for the messages in the following [interactions](ITI-114.html#231144-messages):
- SubscriptionTopic Search
- SubscriptionTopic Read

#### Option

In case that an actor declares support to one or more [option](volume-1.html#1542-actor-options), then the test plan SHALL include for every transaction a specific test for every topic and every event for each topic inside that supported option. 

### Unit Test Procedure

Unit Tests in this context is where an SUT is tested against a simulator or validator. A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or MAY be a specially designed test-bench. Where a reference implementation is used the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator MAY be a simulator, but MAY also be a standalone tool used to validate only a message encoding. Some reference implementations MAY be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Integration Test Procedure

Integration Tests in this context is where two SUT of paired actors test against each other. In this case, the subset of tests that can be tested is the intersection. Testing only this intersection is necessary but not sufficient. The testing required also include the capability of the client to exercise the test scenarios that this SUT can test, to determine that failure-modes are handled properly by both SUT.




---

// File: input/pagecontent/volume-1.md

## 1:54.1 DSUBm Actors, Transactions, and Content Modules

This section defines the actors and transactions in this implementation guide.

- Actors
  - [Resource Notification Broker](#154111-resource-notification-broker)
  - [Resource Notification Subscriber](#154112-resource-notification-subscriber)
  - [Resource Notification Publisher](#154113-resource-notification-publisher)
  - [Resource Notification Recipient](#154114-resource-notification-recipient)  
- Transactions
  - [Resource Subscription [ITI-110]](ITI-110.html)
  - [Resource Publish [ITI-111]](ITI-111.html)
  - [Resource Notify [ITI-112]](ITI-112.html)
  - [Resource Subscription Search [ITI-113]](ITI-113.html)
  - [Resource SubscriptionTopic Search [ITI-114]](ITI-114.html)

Figure 1:54.1-1 shows the actors directly involved in the DSUBm Profile and the relevant transactions between them.

<figure>
{%include ActorsAndTransactions.svg%}
<figcaption><b>Figure 1:54.1-1: DSUBm Actor Diagram</b></figcaption>
</figure>
<br clear="all">

Table 1:54.1-1 lists the transactions for each actor directly involved in the DSUBm Profile. To claim compliance with this profile, an actor SHALL support all REQUIRED transactions (labeled "R") and MAY support the optional transactions (labeled "O").

**Table 1:54.1-1: DSUBm Profile - Actors and Transactions**

|---------|---------------|------------------------|-----------------|-----------------------------------|
| **Actors**  | **Transactions**  | **Initiator or Responder** | **Optionality**                   |
| [Resource Notification Broker](#154111-resource-notification-broker)     | [Resource Subscription [ITI-110]](ITI-110.html)     | Responder    | R      | 
|                                | [Resource Publish [ITI-111]](ITI-111.html)           | Responder    | O     |
|                                | [Resource Notify [ITI-112]](ITI-112.html)           | Initiator    | R      | 
|                                | [Resource Subscription Search [ITI-113]](ITI-113.html)      | Responder    | R | 
|                                | [Resource SubscriptionTopic Search [ITI-114]](ITI-114.html)  | Responder    | R | 
| [Resource Notification Subscriber](#154112-resource-notification-subscriber) | [Resource Subscription [ITI-110]](ITI-110.html)             | Initiator    | R  | 
|                                | [Resource Subscription Search [ITI-113]](ITI-113.html)      | Initiator    | O   |
|                                | [Resource SubscriptionTopic Search [ITI-114]](ITI-114.html)  | Initiator    | O | 
| [Resource Notification Publisher](#154113-resource-notification-publisher)  | [Resource Publish [ITI-111]](ITI-111.html)               | Initiator    | R     |
| [Resource Notification Recipient](#154114-resource-notification-recipient)  | [Resource Notify [ITI-112]](ITI-112.html)             | Responder    | R     | 
{: .grid}

### 1:54.1.1 Actors

The actors in this profile are described in more detail in the following sections.

#### 1:54.1.1.1 Resource Notification Broker

The Resource Notification Broker receives the Resource Subscription transaction containing a subscription request or a subscription cancellation. It keeps track of all subscriptions it receives, including the time limits of subscriptions. Based on the subscription criteria, this actor sends notifications to interested subscribers when events occur. This actor MAY receive Resource Publish transactions representing the stream of events against which the existing subscriptions are matched. It supports the search and retrieval of Subscription and SubscriptionTopic resources.

The following CapabilityStatements define the actor capabilities given the various options:

- FHIR Capability Statement for [Resource Notification Broker](CapabilityStatement-IHE.DSUBm.ResourceNotificationBroker.html)

- FHIR Capability Statement for [Resource Notification Broker](CapabilityStatement-IHE.DSUBm.ResourceNotificationBroker.DocRef.MinUpd.html) that supports the [DocumentReference Subscription for Minimal Update Option](volume-1.html#15421-documentreference-subscription-for-minimal-update-option)

- FHIR Capability Statement for [Resource Notification Broker](CapabilityStatement-IHE.DSUBm.ResourceNotificationBroker.DocRef.FullEvents.html) that supports the [DocumentReference Subscription for Full Events Option](volume-1.html#15422-documentreference-subscription-for-full-events-option)

- FHIR Capability Statement for [Resource Notification Broker](CapabilityStatement-IHE.DSUBm.ResourceNotificationBroker.Folder.Basic.html) that supports the [Basic Folder Subscription Option](#15423-basic-folder-subscription-option)

- FHIR Capability Statement for [Resource Notification Broker](CapabilityStatement-IHE.DSUBm.ResourceNotificationBroker.Folder.MinUpd.html) that supports the [Folder Subscription for Minimal Update Option](#15424-folder-subscription-for-minimal-update-option)

- FHIR Capability Statement for [Resource Notification Broker](CapabilityStatement-IHE.DSUBm.ResourceNotificationBroker.Folder.Upd.html) that supports the [Folder Subscription for Update Option](#15425-folder-subscription-for-update-option)

- FHIR Capability Statement for [Resource Notification Broker](CapabilityStatement-IHE.DSUBm.ResourceNotificationBroker.Folder.FullEvents.html) that supports the [Folder Subscription for Full Events Option](#15426-folder-subscription-for-full-events-option)

#### 1:54.1.1.2 Resource Notification Subscriber

The Resource Notification Subscriber initiates and terminates subscriptions on behalf of a Resource Notification Recipient. It can perform a Resource Subscription Search transaction to the Resource Notification Broker for existing subscription search. It also can perform a Resource SubscriptionTopic Search transaction to the Resource Notification Broker for searching the SubscriptionTopic resources.

The following CapabilityStatements define the actor capabilities given the various options:

- FHIR Capability Statement for [Resource Notification Subscriber](CapabilityStatement-IHE.DSUBm.ResourceNotificationSubscriber.html)

- FHIR Capability Statement for [Resource Notification Subscriber](CapabilityStatement-IHE.DSUBm.ResourceNotificationSubscriber.DocRef.MinUpd.html) that supports the [DocumentReference Subscription for Minimal Update Option](volume-1.html#15421-documentreference-subscription-for-minimal-update-option)

- FHIR Capability Statement for [Resource Notification Subscriber](CapabilityStatement-IHE.DSUBm.ResourceNotificationSubscriber.DocRef.FullEvents.html) that supports the [DocumentReference Subscription for Full Events Option](volume-1.html#15422-documentreference-subscription-for-full-events-option)

- FHIR Capability Statement for [Resource Notification Subscriber](CapabilityStatement-IHE.DSUBm.ResourceNotificationSubscriber.Folder.Basic.html) that supports the [Basic Folder Subscription Option](#15423-basic-folder-subscription-option)

- FHIR Capability Statement for [Resource Notification Subscriber](CapabilityStatement-IHE.DSUBm.ResourceNotificationSubscriber.Folder.MinUpd.html) that supports the [Folder Subscription for Minimal Update Option](#15424-folder-subscription-for-minimal-update-option)

- FHIR Capability Statement for [Resource Notification Subscriber](CapabilityStatement-IHE.DSUBm.ResourceNotificationSubscriber.Folder.Upd.html) that supports the [Folder Subscription for Update Option](#15425-folder-subscription-for-update-option)

- FHIR Capability Statement for [Resource Notification Subscriber](CapabilityStatement-IHE.DSUBm.ResourceNotificationSubscriber.Folder.FullEvents.html) that supports the [Folder Subscription for Full Events Option](#15426-folder-subscription-for-full-events-option)

#### 1:54.1.1.3 Resource Notification Publisher

The Resource Notification Publisher sends a Resource Publish transaction to the Resource Notification Broker when an event occurs for which a subscription MAY exist. Note that this profile does not specify how the Resource Notification Publisher becomes aware of those events.

The following CapabilityStatements define the actor capabilities given the various Options:

- FHIR Capability Statement for [Resource Notification Publisher](CapabilityStatement-IHE.DSUBm.ResourceNotificationPublisher.html)

- FHIR Capability Statement for [Resource Notification Publisher](CapabilityStatement-IHE.DSUBm.ResourceNotificationPublisher.DocRef.MinUpd.html) that supports the [DocumentReference Subscription for Minimal Update Option](volume-1.html#15421-documentreference-subscription-for-minimal-update-option)

- FHIR Capability Statement for [Resource Notification Publisher](CapabilityStatement-IHE.DSUBm.ResourceNotificationPublisher.DocRef.FullEvents.html) that supports the [DocumentReference Subscription for Full Events Option](volume-1.html#15422-documentreference-subscription-for-full-events-option)

- FHIR Capability Statement for [Resource Notification Publisher](CapabilityStatement-IHE.DSUBm.ResourceNotificationPublisher.Folder.Basic.html) that supports the [Basic Folder Subscription Option](#15423-basic-folder-subscription-option)

- FHIR Capability Statement for [Resource Notification Publisher](CapabilityStatement-IHE.DSUBm.ResourceNotificationPublisher.Folder.MinUpd.html) that supports the [Folder Subscription for Minimal Update Option](#15424-folder-subscription-for-minimal-update-option)

- FHIR Capability Statement for [Resource Notification Publisher](CapabilityStatement-IHE.DSUBm.ResourceNotificationPublisher.Folder.Upd.html) that supports the [Folder Subscription for Update Option](#15425-folder-subscription-for-update-option)

- FHIR Capability Statement for [Resource Notification Publisher](CapabilityStatement-IHE.DSUBm.ResourceNotificationPublisher.Folder.FullEvents.html) that supports the [Folder Subscription for Full Events Option](#15426-folder-subscription-for-full-events-option)

#### 1:54.1.1.4 Resource Notification Recipient

The Resource Notification Recipient receives the notification about an event when the subscription filters specified for this Document Resource Notification Recipient are satisfied.

FHIR Capability Statement for [Resource Notification Recipient](CapabilityStatement-IHE.DSUBm.ResourceNotificationRecipient.html).

### 1:54.1.2 Transaction Descriptions

The transactions in this profile are summarized in the sections below.

#### 1:54.1.2.1 Resource Subscription [ITI-110]

This transaction is used for subscribing to Documents, by using a particular set of filters, or to unsubscribe, using `Subscription` resources.

For more details see the detailed [[ITI-110] transaction description](ITI-110.html).

#### 1:54.1.2.2 Resource Publish [ITI-111]

This transaction delivers information from the Resource Notification Publisher to the Resource Notification Broker about an event that MAY have a subscription.

For more details see the detailed [[ITI-111] transaction description](ITI-111.html).

#### 1:54.1.2.3 Resource Notify [ITI-112]

This transaction is used for sending notifications to a Resource Notification Recipient related to a subscription.

For more details see the detailed [[ITI-112] transaction description](ITI-112.html).

#### 1:54.1.2.4 Resource Subscription Search [ITI-113]

This transaction is used for searching existing `Subscription` resources.

For more details see the detailed [[ITI-113] transaction description](ITI-113.html).

#### 1:54.1.2.5 Resource SubscriptionTopic Search [ITI-114]

This transaction is used for searching existing `SubscriptionTopic` resources.

For more details see the detailed [[ITI-114] transaction description](ITI-114.html).

## 1:54.2 Actor Options

Optional functionality that MAY be implemented for each actor in this implementation guide are listed in Table 1:54.2-1 below. Dependencies 
between options when applicable are specified in notes.

**Table 1:54.2-1: Actor Options**

| **Actors** | **Option Name** |
|---------|-------------|-------------|
| [Resource Notification Broker](#154111-resource-notification-broker) | [DocumentReference Subscription for Minimal Update](#15421-documentreference-subscription-for-minimal-update-option) |
|                              | [DocumentReference Subscription for Full Events](#15422-documentreference-subscription-for-full-events-option) |
|                              | [Basic Folder Subscription](#15423-basic-folder-subscription-option) |
|                              | [Folder Subscription for Minimal Update](#15424-folder-subscription-for-minimal-update-option) |
|                              | [Folder Subscription for Update](#15425-folder-subscription-for-update-option) |
|                              | [Folder Subscription for Full Events](#15426-folder-subscription-for-full-events-option) |
| [Resource Notification Subscriber](#154112-resource-notification-subscriber) | [DocumentReference Subscription for Minimal Update](#15421-documentreference-subscription-for-minimal-update-option) |
|                              | [DocumentReference Subscription for Full Events](#15422-documentreference-subscription-for-full-events-option) |
|                              | [Basic Folder Subscription](#15423-basic-folder-subscription-option) |
|                              | [Folder Subscription for Minimal Update](#15424-folder-subscription-for-minimal-update-option) |
|                              | [Folder Subscription for Update](#15425-folder-subscription-for-update-option) |
|                              | [Folder Subscription for Full Events](#15426-folder-subscription-for-full-events-option) |
| [Resource Notification Publisher](#154113-resource-notification-publisher) |  [DocumentReference Subscription for Minimal Update](#15421-documentreference-subscription-for-minimal-update-option) |
|                              | [DocumentReference Subscription for Full Events](#15422-documentreference-subscription-for-full-events-option) |
|                              | [Basic Folder Subscription](#15423-basic-folder-subscription-option) |
|                              | [Folder Subscription for Minimal Update](#15424-folder-subscription-for-minimal-update-option) |
|                              | [Folder Subscription for Update](#15425-folder-subscription-for-update-option) |
|                              | [Folder Subscription for Full Events](#15426-folder-subscription-for-full-events-option) |
| [Resource Notification Recipient](#154114-resource-notification-recipient) | none |
{: .grid}


#### 1:54.2.1 DocumentReference Subscription for Minimal Update Option

This option extends the basic trigger events considered for a DocumentReference Subscription.  


This option extends the triggers for the creation of a DocumentReference resource to also include updates of the document “status” and delete events of a DocumentReference Resource.


This option limited the Update events because Resource Notification Brokers that are not operating as native FHIR servers might not have the ability to notify for all possible update events.

The Resource Notification Broker that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.1 Subscription with DocumentReference Subscription for Minimal Update Option](ITI-110.html#2311041211-subscription-with-documentreference-subscription-for-minimal-update-option) and the related SubscriptionTopic, accepting this type of Subscription sent from a Resource Notification Subscriber.

The Resource Notification Subscriber that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.1 Subscription with DocumentReference Subscription for Minimal Update Option](ITI-110.html#2311041211-subscription-with-documentreference-subscription-for-minimal-update-option).

The Resource Notification Publisher that declares support for this option SHALL implement the Resource Publish [ITI-111] transaction for the trigger events defined in [Section 2:3.111.4.1.1.1 DocumentReference Subscription for Minimal Update Option Trigger Events](ITI-111.html#231114111-documentreference-subscription-for-minimal-update-option-trigger-events) and to communicate the stream of events to the Resource Notification Broker as defined in [Section 2:3.111.4.1.2.1 DocumentReference Subscription for Minimal Update Option Bundle](ITI-111.html#231114121-documentreference-subscription-for-minimal-update-option-bundle).

#### 1:54.2.2 DocumentReference Subscription for Full Events Option

This option extends the basic trigger events considered for a DocumentReference Subscription.  

This option extends the triggers for the creation of a DocumentReference resource to include all possible update events and delete events of a DocumentReference Resource.

The Resource Notification Broker that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.2 Subscription with DocumentReference Subscription for Full Events Option](ITI-110.html#2311041212-subscription-with-documentreference-subscription-for-full-events-option), and the related SubscriptionTopic, accepting this type of Subscription sent from a Resource Notification Subscriber.

The Resource Notification Subscriber that declares support for this option SHALL support the Subscription defined in [Section 2:3.110.4.1.2.1.2 Subscription with DocumentReference Subscription for Full Events Option](ITI-110.html#2311041212-subscription-with-documentreference-subscription-for-full-events-option).

The Resource Notification Publisher that declares support for this option SHALL implement the Resource Publish [ITI-111] transaction for the trigger events defined in Section in [Section 2:3.111.4.1.1.2 DocumentReference Subscription for Full Events Option Trigger Events](ITI-111.html#231114112-documentreference-subscription-for-full-events-option-trigger-events) and to communicate the stream of events to the Resource Notification Broker as defined in [Section 2:3.111.4.1.2.2 DocumentReference Subscription for Full Events Option Bundle](ITI-111.html#231114122-documentreference-subscription-for-full-events-option-bundle).

#### 1:54.2.3 Basic Folder Subscription Option

This option allows subscriptions to Folder type List resources and describes the basic trigger events considered for a Folder Subscription.

This option includes triggers about the creation and limited update events on a Folder type List resource. The limited update event considered is the insertion of a new document in the Folder. 

This option limits the update events to reduce the effort on the Resource Notification Broker. This limitation has been introduced because the Resource Notification Brokers that are not operating as native FHIR servers might not have the ability to notify for all the possible update events.

The Resource Notification Broker that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.3 Subscription with Basic Folder Subscription Option](ITI-110.html#2311041213-subscription-with-basic-folder-subscription-option), and the related SubscriptionTopic, accepting this type of Subscription sent from a Resource Notification Subscriber.

The Resource Notification Subscriber that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.3 Subscription with Basic Folder Subscription Option](ITI-110.html#2311041213-subscription-with-basic-folder-subscription-option).

The Resource Notification Publisher that declares support for this option SHALL also implement in the Resource Publish [ITI-111] transaction the trigger events defined in [Section 2:3.111.4.1.1.3 Basic Folder Subscription Option Trigger Events](ITI-111.html#231114113-basic-folder-subscription-option-trigger-events) and to communicate the stream of events to the Resource Notification Broker as defined in [Section 2:3.111.4.1.2.3 Subscription with Basic Folder Subscription Option Bundle](ITI-111.html#231114123-subscription-with-basic-folder-subscription-option-bundle).

#### 1:54.2.4 Folder Subscription for Minimal Update Option

This option allows subscriptions to Folder type List resources and extends the basic trigger events considered for a Folder Subscription.  

This option includes triggers about the creation of a Folder type List resource and the update of a Folder type List resource. The update of this resource considers only the following possible events: 
- Insertion of a new document in the Folder 
- Removal of a document from the Folder 
- Update of the "status"

This option limits the triggers related to update events for Folder Subscription in order to reduce the effort on the Resource Notification Brokers considering only the most common update events on Folder objects. This limitation has been introduced because the Resource Notification Brokers that are not operating as native FHIR servers might not have the ability to notify for all Update events.

The Resource Notification Broker that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.4 Subscription with Folder Subscription for Minimal Update Option](ITI-110.html#2311041214-subscription-with-folder-subscription-for-minimal-update-option), and the related SubscriptionTopic, accepting this type of Subscription sent from a Resource Notification Subscriber.

The Resource Notification Subscriber that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.4 Subscription with Folder Subscription for Minimal Update Option](ITI-110.html#2311041214-subscription-with-folder-subscription-for-minimal-update-option).

The Resource Notification Publisher that declares support for this option SHALL also implement in the Resource Publish [ITI-111] transaction the trigger events defined in [Section 2:3.111.4.1.1.4 Folder Subscription for Minimal Update Option Trigger Events](ITI-111.html#231114114-folder-subscription-for-minimal-update-option-trigger-events) and to communicate the stream of events to the Resource Notification Broker as defined in [Section 2:3.111.4.1.2.4 Folder Subscription for Minimal Update Option Bundle](ITI-111.html#231114124-folder-subscription-for-minimal-update-option-bundle).

#### 1:54.2.5 Folder Subscription for Update Option

This option allows subscriptions to Folder type List resources and extends the trigger events considered for a Folder Subscription.  

This option includes the creation of a Folder type List Resource and all possible update events of a Folder type List Resource events. (The delete event of a Folder is not included.)

The Resource Notification Broker that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.5 Subscription with Folder Subscription for Update Option](ITI-110.html#2311041215-subscription-with-folder-subscription-for-update-option), and the related SubscriptionTopic, accepting this type of Subscription sent from a Resource Notification Subscriber.

The Resource Notification Subscriber that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.5 Subscription with Folder Subscription for Update Option](ITI-110.html#2311041215-subscription-with-folder-subscription-for-update-option).

The Resource Notification Publisher that declares support for this option SHALL also implement in the Resource Publish [ITI-111] transaction the trigger events defined in [Section 2:3.111.4.1.1.5 Folder Subscription for Update option Trigger Events](ITI-111.html#231114115-folder-subscription-for-update-option-trigger-events) and to communicate the stream of events to the Resource Notification Broker as defined in [Section 2:3.111.4.1.2.5 Folder Subscription for Update option Bundle](ITI-111.html#231114125-folder-subscription-for-update-option-bundle).

#### 1:54.2.6 Folder Subscription for Full Events Option

This option allows subscriptions to Folder type List resources and extends the trigger events considered for a Folder Subscription.  

This option includes as triggers all the possible events on a Folder resource.
This option includes as triggers: the creation of a Folder type List Resource, all possible update events of a Folder type List resource and the delete event of a Folder type List resource.

The Resource Notification Broker that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.6 Subscription with Folder Subscription for Full Events Option](ITI-110.html#2311041216-subscription-with-folder-subscription-for-full-events-option), and the related SubscriptionTopic, accepting this type of Subscription sent from a Resource Notification Subscriber.

The Resource Notification Subscriber that declares support for this option SHALL implement the Subscription defined in [Section 2:3.110.4.1.2.1.6 Subscription with Folder Subscription for Full Events Option](ITI-110.html#2311041216-subscription-with-folder-subscription-for-full-events-option).

The Resource Notification Publisher that declares support for this option SHALL also implement in the Resource Publish [ITI-111] transaction the trigger events defined in [Section 2:3.111.4.1.1.6 Folder Subscription for Full Events Option Trigger Events](ITI-111.html#231114116-folder-subscription-for-full-events-option-trigger-events) and to communicate the stream of events to the Resource Notification Broker as defined in [Section 2:3.111.4.1.2.6 Folder Subscription for Full Events Option Bundle](ITI-111.html#231114126-folder-subscription-for-full-events-option-bundle).


#### 1:54.2.7 Overview on Events and Options

This section covers a practical overview of the events on patient documents that are considered in this profile and the options that allow these events to be notified. Additionally, the transactions which link these events in the principal document sharing environment, [Mobile Health Document Sharing](https://profiles.ihe.net/ITI/TF/Volume1/ch-50.html#50) and [XDS.b](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html).

Table 1:54.2.7-1 shows the events related to the DocumentReference and SubmissionSet type List resources. The "Basic implementation" is an implementations with actors that have not declared support for any option. Table 1:54.2.7-2 shows the events related to the Folder type List resources.

**Table 1:54.2.7-1: Events and Options Overview for DocumentReference and SubmissionSet type List resources**

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">Event</th>
    <th class="tg-fymr">MHDS environment transaction</th>
    <th class="tg-fymr">XDS environment transaction</th>
    <th class="tg-fymr">Basic implementation</th>
    <th class="tg-fymr"> DocumentReference Subscription for Minimal Update Option</th>
    <th class="tg-fymr">DocumentReference Subscription for Full Events Option</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Creation of a new SubmissionSet (i.e., the creation of a SubmissionSet type List resource)</td>
    <td class="tg-0pky">Provide Document Bundle <a href="https://profiles.ihe.net/ITI/MHD/ITI-65.html"><span>[ITI-65]</span></a></td>
    <td class="tg-0pky">Register Document Set-b <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-42.html"><span>[ITI-42]</span></a><br><br>Register On-Demand Document Entry <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-61.html"><span>[ITI-61]</span></a></td>
    <td class="tg-c3ow">X</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">New document available (i.e., creation of a DocumentReference resource)</td>
    <td class="tg-0pky">Provide Document Bundle <a href="https://profiles.ihe.net/ITI/MHD/ITI-65.html"><span>[ITI-65]</span></a></td>
    <td class="tg-0pky">Register Document Set-b <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-42.html"><span>[ITI-42]</span></a><br><br>Register On-Demand Document Entry <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-61.html"><span>[ITI-61]</span></a></td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
  </tr>
  <tr>
    <td class="tg-0pky">Update of the metadata status of a document (i.e., update of the DocumentReference status)</td>
    <td class="tg-0pky">Provide Document Bundle <a href="https://profiles.ihe.net/ITI/MHD/ITI-65.html"><span>[ITI-65]</span></a></td>
    <td class="tg-0pky">Register Document Set-b <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-42.html"><span>[ITI-42]</span></a><br><br><br><br>Register On-Demand Document Entry <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-61.html"><span>[ITI-61]</span></a><br><br>Update Document Set <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-57.html"><span>[ITI-57]</span></a></td>
    <td class="tg-0pky"></td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
  </tr>
  <tr>
    <td class="tg-0pky">Delete of a document (i.e., delete of a DocumentReference resource)</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky">Remove Metadata <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-62.html"><span>[ITI-62]</span></a></td>
    <td class="tg-0pky"></td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
  </tr>
  <tr>
    <td class="tg-0pky">Update of all the metadata of a document (i.e., update of the DocumentReference resource)</td>
    <td class="tg-0pky">Provide Document Bundle <a href="https://profiles.ihe.net/ITI/MHD/ITI-65.html"><span>[ITI-65]</span></a></td>
    <td class="tg-0pky">Register Document Set-b <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-42.html"><span>[ITI-42]</span></a><br><br><br><br>Register On-Demand Document Entry <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-61.html"><span>[ITI-61]</span></a><br><br>Update Document Set <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-57.html"><span>[ITI-57]</span></a><br><br>Restricted Update Document Set <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-92.html"><span>[ITI-92]</span></a></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-c3ow">X</td>
  </tr>
</tbody>
</table>

**Table 1:54.2.7-2: Events and Options Overview for Folder type List resource**

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">Event</th>
    <th class="tg-fymr">MHDS environment transaction</th>
    <th class="tg-fymr">XDS environment transaction</th>
    <th class="tg-fymr">Basic Folder Subscription Option</th>
    <th class="tg-fymr">Folder Subscription for Minimal Update Option</th>
    <th class="tg-fymr">Folder Subscription for Update Option</th>
    <th class="tg-fymr">Folder Subscription for Full Events option</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Creation of a new Folder (i.e., the creation of a Folder type List resource)</td>
    <td class="tg-0pky">Provide Document Bundle <a href="https://profiles.ihe.net/ITI/MHD/ITI-65.html"><span>[ITI-65]</span></a></td>
    <td class="tg-0pky">Register Document Set-b <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-42.html"><span>[ITI-42]</span></a><br><br>Register On-Demand Document Entry <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-61.html"><span>[ITI-61]</span></a></td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
  </tr>
  <tr>
    <td class="tg-0pky">Insert a new document in a Folder (i.e., update a Folder type List resource with a new DocumentReference link)</td>
    <td class="tg-0pky">Provide Document Bundle <a href="https://profiles.ihe.net/ITI/MHD/ITI-65.html"><span>[ITI-65]</span></a></td>
    <td class="tg-0pky">Register Document Set-b <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-42.html"><span>[ITI-42]</span></a><br><br>Update Document Set <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-57.html"><span>[ITI-57]</span></a><br><br>Register On-Demand Document Entry <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-61.html"><span>[ITI-61]</span></a></td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
  </tr>
  <tr>
    <td class="tg-0pky">Removal of a document from a Folder (i.e., update a Folder type List resource erasing a DocumentReference link)</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky">Update Document Set <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-57.html"><span>[ITI-57]</span></a><br><br>Remove Metadata <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-62.html"><span>[ITI-62]</span></a></td>
    <td class="tg-0pky"></td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
  </tr>
  <tr>
    <td class="tg-0pky">Update of the metadata status of a Folder (i.e., update of the Folder type List status)</td>
    <td class="tg-0pky">Provide Document Bundle <a href="https://profiles.ihe.net/ITI/MHD/ITI-65.html"><span>[ITI-65]</span></a></td>
    <td class="tg-0pky">Update Document Set <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-57.html"><span>[ITI-57]</span></a></td>
    <td class="tg-0pky"></td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
  </tr>
  <tr>
    <td class="tg-0pky">Update of a Folder (i.e., the update of a Folder type List resource)</td>
    <td class="tg-0pky">Provide Document Bundle <a href="https://profiles.ihe.net/ITI/MHD/ITI-65.html"><span>[ITI-65]</span></a></td>
    <td class="tg-0pky">Register Document Set-b <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-42.html"><span>[ITI-42]</span></a><br><br>Update Document Set <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-57.html"><span>[ITI-57]</span></a><br><br>Register On-Demand Document Entry <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-61.html"><span>[ITI-61]</span></a></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-c3ow">X</td>
    <td class="tg-c3ow">X</td>
  </tr>
    <tr>
    <td class="tg-0pky">Delete of a Folder (i.e. the Delete of a Folder type List resource)</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky">Remove Metadata <a href="https://profiles.ihe.net/ITI/TF/Volume2/ITI-62.html"><span>[ITI-62]</span></a></td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
    <td class="tg-c3ow"></td>
    <td class="tg-c3ow">X</td>
  </tr>
</tbody>
</table>

## 1:54.3 Required Actor Groupings
This profile does not mandate grouping with other actors.

## 1:54.4 DSUBm Overview

This section shows how the transactions and content modules of the profile are combined to address the use cases.

### 1:54.4.1 Concepts

The DSUBm profile enables mobile subscriptions for patient documents.
The subscription mechanism is very flexible and can be adapted to many use cases depending on the type of subscription used and the environment in which DSUBm is implemented, especially where that environment works for sharing these documents. Other IHE profiles, chiefly [Cross-Enterprise Document Sharing (XDS.b)](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) and [Mobile access to Health Documents (MHD)](https://profiles.ihe.net/ITI/MHD), describe sharing of patient documents, and many of the sharing document concepts used in this profile are explained there. Also, for more information on IHE Document Sharing, see the [Health Information Exchange: Enabling Document Sharing Using IHE Profiles](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) White Paper.

In the following use cases, different subscription types are presented. These subscriptions can be explicit for a specific patient (patient-dependent subscription) or can be expressed without a specific patient; hence, covering all patients (in this case they are referred as multi-patient subscriptions). 
The use cases cover both a fully mobile environment, for example MHDS implementations (see [Mobile Health Document Sharing](https://profiles.ihe.net/ITI/TF/Volume1/ch-50.html#50)) and environments in which the main infrastructure is [XDS.b](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html).
These use cases present also the possibility in which DSUB and DSUBm coexist and both are available to the users.

### 1:54.4.2 Use Cases

#### 1:54.4.2.1 Use Case \#1: Document Subscription for mobile applications in MHDS Environment

The availability of a document is notified to Hospital systems, where the main sharing infrastructure is based on MHDS.

##### 1:54.4.2.1.1 Document Subscription for mobile applications in MHDS Environment Use Case Description

Mr. Smith, a cardiac patient, is hospitalized in the cardiology ward at the Goodcare General Hospital. Dr. Roose, who is the only doctor working in this ward at that moment, prescribes some blood tests to decide which medicine is suitable for the patient.
The medicine will be administrated by Nurse Davis only after Dr. Roose's ePrescription.

In order to be notified when the laboratory report is ready, the software of Dr. Roose submits a subscription for all the laboratory reports that will be produced for Mr. Smith during his hospitalization.
Meanwhile Nurse Davis, that works in the cardiology ward, is waiting to receive the notification of the ePrescription on her tablet, to know what medication has to be given to her patients in the cardiology ward. 

When the laboratory has produced the report for Mr. Smith, Dr. Roose is promptly notified and, once he has examined the report, he can make an ePrescription for the correct medicine that is needed to be given to the patient.
Once the ePrescription has been created a notification is sent to Nurse Davis’s tablet. After downloading the ePrescription, the nurse can give Mr. Smith the medication that Dr. Roose prescribed.

At the end of Mr. Smith's hospitalization, Dr. Roose's software automatically unsubscribes from the laboratory documents. 

##### 1:54.4.2.1.2 Document Subscription for mobile applications in MHDS Environment Process Flow

<figure>
{%include usecase1-processflow.svg%}
<figcaption><b>1:54.4.2.1.2-1: Document Subscription for Mobile Applications in MHDS Environment in DSUBm</b></figcaption>
</figure>
<br clear="all">

**Pre-conditions**:

The assumption is that systems share the information in an MHDS Environment. A Central Infrastructure is implemented in the environment where the MHDS Registry is grouped with the DSUBm Resource Notification Broker. The systems share and retrieve the documents by implementing an MHD Document Source and/or MHD Document Consumer.

**Main Flow**:

1. The nurse tablet has already performed a subscription for documents produced in the cardiology field in order to be updated with all the documents that involve the cardiology ward operability. (Resource Subscription [ITI-110], multi-patient DocumentReference Subscription)
2. After requiring the blood tests to the Laboratory System the Hospital EHR performs a subscription to the Central Infrastructure in order to inform Dr. Roose when the results will be available. (Resource Subscription [ITI-110], indicating the patient and the typeCode in the criteria)
3. When the Laboratory System has completed the analysis, the results are sent to the Central Infrastructure. (Provide Document Bundle [ITI-65])
4. Since the publication event of the medical report meets the subscription criteria performed by Hospital EHR, the Central Infrastructure will send a notification to the Hospital EHR. (Resource Notify [ITI-112])
5. After receiving the notification on the Hospital EHR, Dr. Roose can retrieve and consult the analysis results on the Hospital EHR in order to decide which medicine is suitable for the patient. (Retrieve Document [ITI-68])
6. Dr. Roose from the Hospital EHR makes an ePrescription for the chosen medication. A document is submitted to the Central Infrastructure. (Provide  Document Bundle [ITI-65])
7. Since the publication event of the ePrescription meets the subscription criteria performed by Nurse Tablet, the Central Infrastructure will send a notification to the Nurse Tablet. (Resource Notify [ITI-112])
8. The Nurse upon, seeing the notification on his tablet, can retrieve the document in order to know which medication to prepare for administration. (Retrieve Document [ITI-68])
9. At the end of the clinical event when the patient is discharged, the Hospital EHR performs an automated un-subscription. (Resource Subscription [ITI-110])


#### 1:54.4.2.2 Use Case \#2: Document Subscription for mobile application in MHDS Environment using Folder Subscription

The update of a collection of documents (Folder), using a patient national Electronic Healthcare Record (EHR), notifies a mobile Diabetological Healthcare Record (DHR).

##### 1:54.4.2.2.1 Document Subscription for Mobile Application in MHDS Environment using Folder Subscription Use Case Description

Dr. Rooney is taking care of Ms. Williams, a newly discovered type 2 diabetic patient. In order to start and adjust over time the therapy the doctor and the patient will perform a visit every month for the next 2 years. 
During the first visit, Dr. Rooney uses the mobile DHR application to create a Folder for the patient and makes a subscription to it on the National Electronic Healthcare Record (EHR) in order to be notified of any updates regarding Ms. Williams's clinical data. After the visit, the patient is sent home with the standard therapy.
Between the first and second visit, the patient is not feeling well and is admitted in the emergency department where some blood tests are performed and the acute symptoms are taken care of. 
When the blood tests are published on the EHR a notification is sent to the mobile DHR used by Dr. Rooney and the new update is retrieved.
During the second visit, Dr. Rooney uses the latest clinical information and adjusts the therapy. 
A few days after the second visit Ms. Williams is admitted again into the emergency room. Other tests are performed and the medical report is updated in the EHR. A new notification is sent to the mobile DHR used by Dr. Rooney and the new update is retrieved.
During the third visit, Ms. Williams decides that a different physician will take charge of her therapy. Therefore, Dr. Rooney closes the episode of care for Ms. Williams on his mobile DHR and the subscription to the EHR is deleted.

##### 1:54.4.2.2.2 Document Subscription for Mobile Application in MHDS Environment using Folder Subscription Process Flow

<figure>
{%include usecase2-processflow.svg%}
<figcaption><b>1:54.4.2.2.2-2: Document Subscription for Mobile Application in MHDS Environment using Folder Subscription in DSUBm</b></figcaption>
</figure>
<br clear="all">

**Pre-conditions**:

The assumption is that systems share the information in an MHDS Environment. The national EHR of a patient has been maintained thanks to the implementation of an MHDS Registry and it is grouped by the DSUBm Resource Notification Broker. The systems share and retrieve the documents by implementing MHD Document Source and/or MHD Document Consumer. The Resource Notification Subscriber has implemented the Resource Subscription Search [ITI-113] transaction. The Resource Notification Subscriber and the Resource Notification Broker support the [Folder Subscription for Minimal Update Option](#15424-folder-subscription-for-minimal-update-option).

**Main Flow**:

1. During the first visit a document subscription is needed. The mobile DHR application searches the Resource Notification Broker for the supported SubscriptionTopic resource.(Resource SubscriptionTopic Search [ITI-114]) 
2. At the end of the first visit, the mobile DHR application performs a Folder Subscription to the EHR, and therapy A is prescribed to Ms. Williams. (Resource Subscription [ITI-110]) 
3. After some days during an emergency a blood test analysis is performed on Ms. Williams and the medical record is produced on the national EHR. (Provide Document Bundle [ITI-65])
4. A notification is sent to the DHR since the publication of the medical record generated an updated version of the folder in the EHR. (Resource Notify [ITI-112])
5. When the DHR receives the notification, the mobile application retrieves the resource by sending a Retrieve Document [ITI-68] to the Electronic HealthCare Record. The clinical data in the DHR is updated. 
6. After some days during the second visit, Dr. Rooney uses the updated clinical data to adjust the therapy from A to B.
7. After some days during an emergency event other analyses are performed on Ms. Williams and the medical record is produced on the national EHR. (Provide Document Bundle [ITI-65])
8. A notification is sent to the DHR since the publication of the medical record generated an updated version of the folder in the EHR. (Resource Notify [ITI-112])
9. When the DHR receives the notification, the mobile application retrieves the resource by sending a Retrieve Document [ITI-68] to the Electronic HealthCare Record. The clinical data in the DHR is updated. 
10. During the third visit, the mobile DHR searches for the subscription performed on the folder present on the EHR. (Resource Subscription Search [ITI-113])
11. The mobile DHR unsubscribes from the folder subscription. (Resource Subscription [ITI-110])

#### 1:54.4.2.3 Use Case \#3: Document Subscription for Mobile Device in XDS on FHIR Environment

The availability of a specific document for a Patient shared in an XDS on FHIR infrastructure is sent to his personal mobile device.

##### 1:54.4.2.3.1 Document Subscription for Mobile Device in XDS on FHIR Environment Use Case Description

Mr. Brown went to see his doctor. During the examination, the doctor considered it important to check the blood test results before making a medication prescription. Meanwhile, Mr. Brown is sent home because he has already submitted a subscription in order to receive a notification on his mobile app when the prescription is ready.

When the doctor was notified that the blood test results were ready, he retrieved them and, after checking them, the doctor prescribed the medication to Mr. Brown. Mr. Brown receives a notification on his phone when the prescription is ready (created). From the app, he can now retrieve the prescription required to purchase the medication in the local pharmacy.

##### 1:54.4.2.3.2 Document Subscription for Mobile Device in XDS on FHIR Environment Process Flow

<figure>
{%include usecase3-processflow.svg%}
<figcaption><b>Figure 1:54.4.2.3.2-1: Document Subscription for Mobile Device in XDS on FHIR Environment in DSUBm</b></figcaption>
</figure>
<br clear="all">

**Pre-conditions**:
The assumption is that systems share the information in an XDS on FHIR Environment. In the central infrastructure, the XDS Registry is grouped with the DSUBm Resource Notification Publisher. The system shares and retrieves the documents by implementing an MHD Document Source and/or MHD Document Consumer thanks to an MHD interface on XDS (see the XDS on FHIR Option of the MHD Profile). Since the Mobile Device is interested in only the creation of DocumentReference resources, no additional option is supported by the DSUBm actors.

**Main Flow**:

1. After the first login, the mobile app for the prescription performs an automatic patient-dependent DocumentReference Subscription on the Notification Broker in order to be informed when a prescription is ready ([ITI-110] Resource Subscription with the following criteria: patient and typeCode).
2. When the doctor makes the ePrescription a document is produced on the Repository and the metadata are sent to the Central Infrastructure. (Register Document Set-b [ITI-42])
3. The Central Infrastructure, having stored the metadata of the prescription, generates a message to inform the broker about the publication event. (Resource Publish [ITI-111])
4. Since the publication event of the prescription meets the subscription criteria the Central Infrastructure will send a notification to the mobile app. (Resource Notify [ITI-112])
5. When the user sees the notification on his app it is possible to retrieve the document. The app retrieves the resource by sending a Retrieve Document [ITI-68] to the XDS FHIR interface. 
6. Upon receiving the Retrieve Document [ITI-68] the XDS FHIR interface retrieves the document from the XDS Repository. (Retrieve Document Set [ITI-43])
7. With the downloaded ePrescription the patient can now go to the local pharmacy to acquire the prescribed medication showing his mobile device.

#### 1:54.4.2.4 Use Case \#4: Document Subscription for Mobile Device in XDS on FHIR Environment Extending DSUB with DSUBm

The availability of documents for a Patient is sent to a mobile device.

##### 1:54.4.2.4.1 Document Subscription for Mobile Device in XDS on FHIR Environment extending DSUB with DSUBm Use Case Description

Mr. Wayne has a prescription for a radiographic exam and he needs to book a Radiology Appointment. With a phone call to the local hospital, an appointment is proposed and Mr. Wayne accepts the slot. After some minutes, the radiology booking system produces a document for the booking reservation. 
Since Mr. Wayne is a user of the booking mobile app, a subscription has been already made to the Central Infrastructure in order to receive a notification when the booking reservation is produced.
When the notification arrives on Mr. Wayne's mobile device, he can consult the information regarding his appointment. 

##### 1:54.4.2.4.2 Document Subscription for Mobile Device in XDS on FHIR Environment Extending DSUB with DSUBm Process Flow

<figure>
{%include usecase4-processflow.svg%}
<figcaption><b>Figure 1.54.4.2.4.2-1: Document Subscription for Mobile Device in XDS on FHIR Environment extending DSUB with DSUBm in DSUBm</b></figcaption>
</figure>
<br clear="all">

**Pre-conditions**:

The assumption is that systems share the information in an XDS on FHIR Environment. In the central infrastructure, the XDS Registry is grouped with the DSUB Document Metadata Publisher/Document Metadata Broker. The DSUBm extends the DSUB subscription to mobile systems grouping the Resource Notification Broker with the DSUB Document Metadata Subscriber and DSUB Document Metadata Recipient. The systems share and retrieve the documents by implementing the MHD Document Source and/or MHD Document Consumer thanks to an MHD interface on XDS (see XDS on FHIR Option of MHD Profile). 

**Main Flow**:

1. The mobile app performs a patient-dependent DocumentReference subscription specific for a subset of documents that includes the booking reservation documents. (Resource Subscription [ITI-110])
2. The DSUB interface translates the mobile subscription to a Document Metadata Subscribe [ITI-52] for the booking reservation that will be produced for the patient. 
3. After some time a document for the booking reservation is produced and the metadata are stored in the Central Infrastructure. (Register Document Set-b [ITI-42])
4. Since the publication event meets the subscription criteria the Central Infrastructure will send a notification to the DSUB interface. (Document Metadata Notify [ITI-53])
5. The DSUB interface translates the notification received in a mobile notification in order to reach the mobile device. (Resource Notify [ITI-112])
6. The Mobile Device will try to retrieve the booking reservation in order to display the appointment information. A Retrieve Document [ITI-68] is sent to the DSUB FHIR Interface.
7. Upon receiving the Retrieve Document [ITI-68] the DSUB FHIR Interface will try to recover the document Retrieve Document Set [ITI-43] and will return it to the Resource Device information.
8. The Mobile Device can now use the appointment information.

#### 1:54.4.2.5 Use Case \#5: Document Subscription for Mobile Alert System

The availability of a specific document is notified in a Mobile Alert System with a multi-patient subscription.

##### 1:54.4.2.5.1 Document Subscription for Mobile Alert System Use Case Description

Dr. Gordon is a new medic hired by the geriatric ward of the Goodcare General Hospital. In this facility, there is a Mobile Alert System in order to mitigate the spreading of highly contagious diseases. In order to do this, each employee has an app on his personal mobile device that is connected to the mobile Alert System. When a highly contagious disease is reported inside the geriatric ward, an alert is spread to follow immediately the specific quarantine protocol expected for the reported disease. 

##### 1:54.4.2.5.2 Document Subscription for Mobile Alert System Process Flow

<figure>
{%include usecase5-processflow.svg%}
<figcaption><b>Figure 1:54.4.2.5.2-1: Document Subscription for Mobile Alert System in DSUBm</b></figcaption>
</figure>
<br clear="all">

**Pre-conditions**:

The assumption is that systems share the information in an XDS on FHIR Environment. In the central infrastructure, the XDS Registry is grouped with the DSUB Document Metadata Publisher. The Notification Manager System manages both mobile and non-mobile subscriptions, grouping DSUB Document Metadata Broker with the Resource Notification Broker. The systems share and retrieve the documents by implementing MHD Document Source and/or MHD Document Consumer thanks to an MHD interface on XDS (see XDS on FHIR Option of MHD Profile).

**Main Flow**:

1. The Mobile Alert System performs a multi-patient DocumentReference subscription to the Notification Manager in order to be informed when a specific medical report is produced and a highly contagious disease is reported inside the geriatric ward. (Resource Subscription [ITI-110], using a multi-patient Subscription with the indication of the related eventCodeList to the disease of interest).
2. When an analysis is conducted and a highly contagious disease is reported a specific document is published inside the Central infrastructure. (Register Document Set-b [ITI-42])
3. The Central Infrastructure produces for every document a publication event that is transmitted to the Notification Manager. (Document Metadata Publish [ITI-54])
4. The Notification Manager uses internal mapping to translate the publication event into a mobile event. If this publication event satisfies the subscription parameters explained in Step 1 a notification is sent to the Mobile Alert System. (Resource Notify [ITI-112])
5. The Mobile Alert System will try to retrieve the document in order to inform the user of the specific information regarding the exposure and quarantine protocol to be followed. The Mobile Alert System sends a Retrieve Document [ITI-68] to the Central Infrastructure. 
6. Upon receiving the Retrieve Document [ITI-68] the Central Infrastructure will try to recover the document Retrieve Document Set [ITI-43] and will return to the Mobile Alert System the mobile version of the document.
7. The Mobile Alert System uses the information retrieved in order to send a Mobile Report Alert [ITI-84] to the Mobile device.
8. The Mobile Alert System is updated in order to respond to a new disease that is not included in the current subscription. The system is updated by: 
  - deactivating the existing subscription (Resource Subscription [ITI-110] - Update Subscription)
  - a new subscription is sent to the Notification Manager in order to be informed of all the diseases including the new one recently discovered (Resource Subscription [ITI-110], multi-patient expressed with the updated eventCodeList for two diseases of interest)

#### 1:54.4.2.6 Use Case \#6: Document Subscription for Mobile Device in XDS on FHIR Environment with availabilityStatus update 

The availability of a new document containing an error in the metadata is sent to a personal mobile device. The author of the document deprecates the document and a new notification is sent to communicate the update.

##### 1:54.4.2.6.1 Document Subscription for Mobile Device in XDS on FHIR Environment with availabilityStatus update Use Case Description

Mr. Adam uses an app on his phone to consult his diagnostic reports emitted after doctor visits or diagnostics exams during his hospitalization. 
After one radiographic exam a report has been produced. Due to a human error, this report contains some errors and is sent to Mr. Adam's phone. When Mr. Adam looks at the information related to this document he understands that an error has occurred. After a couple seconds Mr. Adam receives a second notification generated by the update of the metadata of the document that was previously submitted. Mr. Adam understands that it was a mistake made by the doctor and now the document has been deprecated so there is no need to ask the hospital for more information regarding the first notification. 

##### 1:54.4.2.6.2 Document Subscription for Mobile Device in XDS on FHIR Environment with availabilityStatus update Process Flow

<figure>
{%include usecase6-processflow.svg%}
<figcaption><b>1:54.4.2.6.2-1: Document Subscription for Mobile Device in XDS on FHIR Environment with availabilityStatus update in DSUBm</b></figcaption>
</figure>
<br clear="all">

**Pre-conditions**:

The assumption is that systems share the information in an XDS on FHIR Environment. In the central infrastructure, the XDS Registry is grouped with the Resource Notification Publisher/Resource Notification Broker. The system shares and retrieves the documents by implementing an MHD Document Source and/or MHD Document Consumer thanks to an MHD interface on XDS (see the XDS on FHIR Option of the MHD Profile). The Resource Notification Broker, Resource Notification Publisher and Resource Notification Subscriber are supporting the [DocumentReference Subscription for Minimal Update Option](#15421-documentreference-subscription-for-minimal-update-option).

**Main Flow**:

1. The app performs a patient-dependent DocumentReference subscription specific for reports by specifying a list of possible classCodes and considering creation and update of documents.(Resource Subscription
[ITI-110])
2. The Radiographic System produces a report containing an error. (Provide and Register Document Set-b [ITI-41])
3. The Central Infrastructure, having stored the metadata of the report, generates a message to inform the broker about the publication event. (Resource Publish [ITI-111])
4. The publication event matches the subscription criteria of the subscription created at step 1. The first notification is sent. (Resource Notify [ITI-112]) 
5. When the user sees the notification on his app it is possible to retrieve the document. The app will try to retrieve the resource by sending a Retrieve Document [ITI-68] to the XDS FHIR interface.
6. Upon receiving the Retrieve Document [ITI-68] the XDS FHIR interface tries to retrieve the document from the XDS Repository. (Retrieve Document Set [ITI-43])
7. Mr. Adam notices that the report contains an error.
8. After a couple of seconds, the Radiographic System changes the availabilityStatus of the document. (Update Document Set-b [ITI-57])
9. The Central Infrastructure, having stored the metadata of the report, generates a message and inform the broker about the second publication event. (Resource Publish [ITI-111])
10. The second publication event is an update of the document metadata and it matches the subscription criteria requested at step 1. The second notification is sent to Mr.Adam that now has the confirmation that the first notification was wrong. (Resource Notify [ITI-112]) 

#### 1:54.4.2.7 Use Case \#7: Document Subscription for Mobile Device in XDS on FHIR Environment with document metadata update

The availability of an updated metadata document (shared in an XDS on FHIR infrastructure) for a Patient is notified to a personal mobile device.

##### 1:54.4.2.7.1 Document Subscription for Mobile Device in XDS on FHIR Environment with document metadata update Use Case Description

Ms. Fox uses an app on her phone to consult her diagnostic reports, emitted after doctor visits or diagnostics exams. 
After one radiographic exam, a report has been produced but the doctor that produced the report wants to have a consultation with a specialist before letting it be visible to the patient.
So that, after the consultation of the report by the specialist and sure that there are no further issues, the report is visible to the patient.
Thus, Ms. Fox receives the notification on her app and consults the reports.

##### 1:54.4.2.7.2 Document Subscription for Mobile Device in XDS on FHIR Environment with document metadata update Process Flow

<figure>
{%include usecase7-processflow.svg%}
<figcaption><b>1:54.4.2.7.2-1: Document Subscription for Mobile Device in XDS on FHIR Environment with document metadata update in DSUBm</b></figcaption>
</figure>
<br clear="all">

**Pre-conditions**:

The assumption is that systems share the information in an XDS on FHIR Environment. In the central infrastructure, the XDS Registry is grouped with the Resource Notification Publisher/Resource Notification Broker. The system shares and retrieves the documents by implementing MHD Document Source and/or MHD Document Consumer thanks to an MHD interface on XDS (see the XDS on FHIR Option of the MHD Profile). The Resource Notification Broker, Resource Notification Publisher and Resource Notification Subscriber are supporting the [DocumentReference Subscription for Full Events Option](#15422-documentreference-subscription-for-full-events-option).

**Main Flow**:

1. The mobile app performs a patient-dependent DocumentReference subscription specific for reports by specifying a list of possible confidentiality codes, based on the community accordance, in this case, equal to "N". ([Resource Subscription ITI-110])
2. When the doctor makes the report, not visible to the patient, a document is produced on the Repository and the metadata are sent to the Central Infrastructure, in this case with a confidentiality code different from "N". (Register Document Set-b [ITI-42])
3. The Central Infrastructure, having stored the metadata of the report, generates a message to inform the broker about the publication event (Resource Publish [ITI-111] ), but since the publication event doesn't match any active subscription criteria, any notification is sent.
4. After the consultation, the confidentiality code metadata of the report is updated "N" to the Central Infrastructure. (Update Document Set [ITI-57])
5. The Central Infrastructure, having updated the metadata of the document, generates a message to inform the broker about the update event. (Resource Publish [ITI-111])
6. Since the metadata update event meets the subscription criteria, the Central Infrastructure will send a notification to the mobile app. (Resource Notify [ITI-112])
7. When the user sees the notification on his app it is possible to retrieve the document. The app will try to retrieve the resource by sending a Retrieve Document [ITI-68] to the XDS FHIR interface.
8. Upon receiving the Retrieve Document [ITI-68], the XDS FHIR interface tries to retrieve the document from the XDS Repository. (Retrieve Document Set [ITI-43])
9. Downloaded the document, Ms. Fox can view the report.

#### 1:54.4.2.8 Use Case \#8: SubmissionSet Subscription in a XDS Environment where DSUBm is Grouped with DSUB

In this use case, a system desires to subscribe to a submissionSet with a specific intended recipient of clinical information. A source of clinical content can identify the intended target for a submissionSet using the `XDSSubmissionSet.IntendedRecipient` metadata attribute.

##### 1:54.4.2.8.1 Patient-dependent SubmissionSet Subscription in an Infrastructure where DSUBm is Grouped with DSUB Use Case Description

Dr. Brown is a clinician and can request exams for many patients. He works in multiple hospital and due to his obligations he is not always connected and available to review the documents that are produced from other hospitals. So the doctor uses a mobile app in order to get notifications for documents produced from other hospital that are intended for him (the subscription created has the intendedRecipient as Subscription criteria). 
Mr. White attends a consultation with Dr. Brown, who requests a Laboratory Report for the patient. The app that the doctor is using creates a mobile subscription with an intendedRecipient of Dr. Brown. This mobile subscription is replicated by a middleware (DSUB/FHIR interface) in order to intercept XDS documents with the same filter criteria of the mobile subscription created by the app. 
The patient receives the exam in a Clinical Laboratory. The Laboratory Information System produces a report and submits the document in the Document Sharing Infrastructure identifying Dr. Brown as the intended Recipient for the submission. This publishing event matches the existing subscription performed by the middleware and a notification is sent to the middleware. 
The middleware converts the notification in a mobile notification that is sent to  Dr. Brown’s mobile system (identified as the Resource Notification Recipient in the mobile subscription created). 
Dr. Brown, after seeing the notification on his app, can access the EMR system, retrieve the laboratory report, quickly analyze the report published, and make other clinical decisions in an efficient way. 

##### 1:54.4.2.8.2 Patient-dependent SubmissionSet Subscription in an Infrastructure where DSUBm is Grouped with DSUB Process Flow

<figure>
{%include usecase8-processflow.svg%}
<figcaption><b>1:54.4.2.8.2-1: Patient-dependent SubmissionSet Subscription in an Infrastructure where DSUBm is grouped with DSUB</b></figcaption>
</figure>
<br clear="all">

**Pre-conditions**:

The assumption is that systems share the information in an XDS Environment where a DSUB and DSUBm are used a the same time. In the central infrastructure, the XDS Registry is grouped with an XDS document Repository and the Document Notification Publisher. The DSUB Document Metadata Subscriber and the DSUB Document Metadata Recipient are grouped with a DSUBm Resource Notification Broker. 

**Main Flow**:

1. The mobile app performs a patient-dependent SubmissionSet subscription specific to documents produced for Mr. White that have Dr. Brown as the intended Recipient. (Resource Subscription [ITI-110])  
2. When the DSUB/FHIR interface receives the Subscription, it creates a DSUB subscription with equivalent filter criteria. (Document Metadata Subscribe [ITI-52])
3. The Laboratory Information System produces the report for Mr. White's exams. (Provide and Register Document Set-b [ITI-41])
4. The Central Infrastructure propagates to the DSUB Broker a Publication Event. (Document Metadata Publish [ITI-54])
5. The DSUB Broker matches the publication with all the available subscriptions and a notification is triggered for the subscription created at step 2. (Document Metadata Notify [ITI-53])
6. The DSUB/FHIR interface receives the notification and the subscription created at step 1 is triggered since the document had Dr. Brown as the intended recipient. (Resource Notify [ITI-112])  
7. When Dr. Brown receives the notification, he accesses his system in order to consult the new document produced. 
8. From his system, Dr. Brown searches for the document that was submitted with the submissionSet that he received. (Registry Stored Query [ITI-18]) 
9. The doctor can now retrieve the document and consult it. (Retrieve Document Set-b [ITI-43]) 

## 1:54.5 Security Considerations

This profile requires actors to audit the transactions that create subscriptions and send notifications, grouping with an [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) Secure Node or Secure Application is strongly RECOMMENDED in order to track the subscriptions and the notification sent.
For further considerations about Audit record refer to [BALP Profile](https://profiles.ihe.net/ITI/BALP/).
User authentication/authorization represents another important factor to consider in order to avoid malicious creation/updating of subscriptions. Grouping DSUBm actors with actors in the Internet User Authorization (IUA) Profile enables deployments to mitigate these security issues.
See ITI TF-2x: [Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations). 

The reader SHOULD also consider the information included in [Safety and Security](https://build.fhir.org/ig/HL7/fhir-subscription-backport-ig/safety_security.html) section of the Subscription Backport IG.

## 1:54.6 Cross-Profile Considerations

The DSUBm actor and transaction model is very flexible. Integration with other IHE profiles is possible and highly RECOMMENDED in order to utilize the subscription/notification mobile feature in different types of environments. In this section, some information about possible cross-profile interaction is presented. 

### 1:54.6.1 MHDS - Mobile Health Document Sharing 

Within a RESTfull infrastructure that is implementing the MHDS model there are two possible groupings. 

#### 1:54.6.1.1 MHDS - Mobile Health Document Sharing Grouping 1
In the first proposed grouping:

- MHDS Document Registry will most likely be grouped with a Resource Notification Publisher because all publication events are submitted to the MHDS Document Registry. 
- The MHD Document Consumer will most likely be grouped with a Resource Notification Recipient. This grouping makes sense since the receiver of the notification is most likely the user of the information.

<a name="fig_MHDS"> </a>
<figure>
{%include model_MHDS.svg%}
<figcaption><b>Figure 1:54.6.1.1-1: DSUBm Actors Grouped with MHDS Actors Showing the First of the Two Possible Groupings. 
</b></figcaption>
</figure>
<br clear="all">

#### 1:54.6.1.2 MHDS - Mobile Health Document Sharing Grouping 2
In the second proposed grouping:

- MHDS Document Registry will likely be grouped with a Resource Notification Broker.
- The MHD Document Consumer, will likely be grouped with a Resource Notification Subscriber.

<a name="fig_MHDS2"> </a>
<figure>
{%include model_MHDS2.svg%}
<figcaption><b>Figure 1:54.6.1.2-1: DSUBm actors grouped with MHDS actors showing the second of the two possible groupings. 
</b></figcaption>
</figure>
<br clear="all">

### 1:54.6.2 XDS.b - Cross-Enterprise Document Sharing

Within an XDS infrastructure there are two possible groupings. 

### 1:54.6.2.1 XDS.b - Cross-Enterprise Document Sharing Grouping 1

In the first proposed grouping:

- XDS Document Registry will most likely be grouped with a Resource Notification Publisher because all publication events are submitted to the XDS Document Registry. 
- XDS Document Consumer will most likely be grouped with a Resource Notification Recipient. This grouping makes sense since the receiver of the notification is most likely the user of the information.

If in the infrastructure is also implemented the "XDS on FHIR Option" of MHD for a mobile interface:

- MHD Document Consumer will most likely be grouped with a Resource Notification Recipient. This grouping makes sense since the receiver of the notification is most likely the user of the information.
- MHD Document Consumer will likely be grouped with a Resource Notification Subscriber.

<a name="fig_MHD"> </a>
<figure>
{%include model_MHD.svg%}
<figcaption><b>Figure 1:54.6.2.1-1: DSUBm Actors Grouped with XDS Actors and MHD Actors
</b></figcaption>
</figure>
<br clear="all">

Note that in this scenario, developers SHOULD be aware about what events on DocumentEntry, Folder, Association, and SubmissionSet Objects could determine events on DocumentReference, Folder type List, and SubmissionSet type List resources and the supporting of "Updates to document sharing resources" Option.

### 1:54.6.2.2 XDS.b - Cross-Enterprise Document Sharing Grouping 2
In the second proposed grouping:

- XDS Document Registry will likely be grouped with a Resource Notification Broker.
- XDS Document Consumer will likely be grouped with a Resource Notification Subscriber.

<a name="fig_MHD2"> </a>
<figure>
{%include model_MHD2.svg%}
<figcaption><b>Figure 1:54.6.2.2-1: DSUBm Actors Grouped with XDS Actors 
</b></figcaption>
</figure>
<br clear="all">

Note that in this scenario, developers SHOULD be aware about what events on DocumentEntry, Folder, Association, and SubmissionSet Objects could determine events on DocumentReference, Folder type List, and SubmissionSet type List resources and the supporting of "Updates to document sharing resources" Option.

### 1:54.6.3 DSUBm as an Interface for DSUB 
Document Metadata Subscriber and the Document Metadata Notification Recipient will most likely be grouped with a Resource Notification Broker creating the mobile DSUB interface that translates Resource Subscription [ITI-110] into Document Metadata Subscribe [ITI-52] and Document Metadata Notify [ITI-53] into Resource Notify [ITI-112]. The existing DSUB Document Metadata Notification Broker is unaware of the presence of the functionality introduced by the DSUBm Profile and therefore can maintain its already implemented logic.  
<figure>
{%include model_DSUBonFHIR.svg%}
<figcaption><b>Figure 1:54.6.3-1: DSUBm Actors Grouped with DSUB:  DSUBm as an Interface for DSUB 
</b></figcaption>
</figure>
<br clear="all">

Note that in this scenario, developers SHOULD be aware about the usage of `status` parameter in the Subscriptions and about implementation of DSUB supplement Folder Subscription Option and Patient-Independent Subscription Option.


---

// File: input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: $LOINC = http://loinc.org
Alias: $Payload = urn:ietf:bcp:13

/* in R4 see also
Alias: $fhir-types = http://hl7.org/fhir/resource-types
Alias: $fhir-types = http://hl7.org/fhir/ValueSet/all-types
*/
Alias: $webHookEndpoint = https://example.org/Endpoints/endpoint1

Alias: $base = https://profiles.ihe.net/ITI/DSUBm

Alias: $query-types = http://example.org/query-types

Alias: $resourceTrigger = http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.resourceTrigger
Alias: $url = http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.url
Alias: $canFilterBy = http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.canFilterBy
Alias: $notificationShape = http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.notificationShape
Alias: $status = http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.status

/*
CodeSystem:  DSUBmFhirType
Title: "DSUBm Fhir Type"
Description:  "To use in the Basic.code to indicate that the Basic resources is used as a SubscriptionTopic."
* ^caseSensitive = true
* ^experimental = false
* #SubscriptionTopic "SubscriptionTopic resource"


ValueSet: DSUBmFhirTypeVS
Title: "DSUBm List Types ValueSet"
Description: "ValueSet of the DSUBm List Types allowed"
* ^experimental = false
* DSUBmFhirType#SubscriptionTopic
*/



---

// File: input/fsh/Audit/audit_iti-110.fsh

Profile:        AuditCreateResourceSubscriptionPatientSubscriber
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.DSUBm.ResourceSubscriptionPatient.Audit.Subscriber
Title:          "Audit Event for a Subscribe message in a Resource Subscription transaction with a patient-dependent Subscription made by the Subscriber"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Subscribe in a Resource Subscription transaction happens, as recorded by the Subscriber.
- Build off of the IHE BasicAudit Create event
- add the ITI-110 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slice for transaction is available
- source is the client

"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti110 1..1
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "the reference to the Subscription"

Profile:        AuditCreateResourceSubscriptionSubscriber
Parent:         IHE.BasicAudit.Create
Id:             IHE.DSUBm.ResourceSubscription.Audit.Subscriber
Title:          "Audit Event for a Subscribe message in a Resource Subscription transaction with a multi-patient Subscription made by the Subscriber"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Subscribe in a Resource Subscription transaction happens, as recorded by the Subscriber.
- Build off of the IHE BasicAudit Create event
- add the ITI-110 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slice for transaction is available
- source is the client


"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti110 1..1
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "the reference to the Subscription"


Profile:        AuditCreateResourceSubscriptionPatientBroker
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.DSUBm.ResourceSubscriptionPatient.Audit.Broker
Title:          "Audit Event for a Subscribe message in a Resource Subscription transaction with a patient-dependent Subscription made by the Broker"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Subscribe in a Resource Subscription transaction happens, as recorded by the Broker.
- Build off of the IHE BasicAudit Create event
- add the ITI-110 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slice for transaction is available
- source is the server


"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti110 1..1
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "the reference to the Subscription"

Profile:        AuditCreateResourceSubscriptionBroker
Parent:         IHE.BasicAudit.Create
Id:             IHE.DSUBm.ResourceSubscription.Audit.Broker
Title:          "Audit Event for a Subscribe message in a Resource Subscription transaction with a multi-patient Subscription made by the Broker"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Subscribe in a Resource Subscription transaction happens, as recorded by the Broker.
- Build off of the IHE BasicAudit Create event
- add the ITI-110 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slice for transaction is available
- source is the server

"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti110 1..1
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "the reference to the Subscription"

//UNSUBSCRIBE 
Profile:        AuditUpdateResourceSubscriptionPatientSubscriber
Parent:         IHE.BasicAudit.PatientUpdate
Id:             IHE.DSUBm.UpdateResourceSubscriptionPatient.Audit.Subscriber
Title:          "Audit Event for a Unsubscribe message in a Resource Subscription transaction with a patient-dependent Subscription made by the Subscriber"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Unsubscribe in a Resource Subscription transaction happens, as recorded by the Subscriber.
- Build off of the IHE BasicAudit Update event
- add the ITI-110 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slice for transaction is available
- source is the client


"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti110 1..1
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "the reference to the Subscription"

Profile:        AuditUpdateResourceSubscriptionSubscriber
Parent:         IHE.BasicAudit.Update
Id:             IHE.DSUBm.UpdateResourceSubscription.Audit.Subscriber
Title:          "Audit Event for a Unsubscribe message in a Resource Subscription transaction with a multi-patient Subscription made by the Subscriber"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Unsubscribe in a Resource Subscription transaction happens, as recorded by the Subscriber.
- Build off of the IHE BasicAudit Update event
- add the ITI-110 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slice for transaction is available
- source is the client


"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti110 1..1
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "the reference to the Subscription"

Profile:        AuditUpdateResourceSubscriptionPatientBroker
Parent:         IHE.BasicAudit.PatientUpdate
Id:             IHE.DSUBm.UpdateResourceSubscriptionPatient.Audit.Broker
Title:          "Audit Event for a Unsubscribe message in a Resource Subscription transaction with a patient-dependent Subscription made by the Broker"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Subscribe in a Resource Subscription transaction happens, as recorded by the Broker.
- Build off of the IHE BasicAudit Update event
- add the ITI-110 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slice for transaction is available
- source is the server


"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti110 1..1
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "the reference to the Subscription"

Profile:        AuditUpdateResourceSubscriptionBroker
Parent:         IHE.BasicAudit.Update
Id:             IHE.DSUBm.UpdateResourceSubscription.Audit.Broker
Title:          "Audit Event for a Unsubscribe message in a Resource Subscription transaction with a multi-patient Subscription made by the Broker"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Subscribe in a Resource Subscription transaction happens, as recorded by the Broker.
- Build off of the IHE BasicAudit Update event
- add the ITI-110 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slice for transaction is available
- source is the server
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti110 1..1
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "the reference to the Subscription"

---

// File: input/fsh/Audit/audit_iti-112.fsh

Profile:        AuditCreateResourceNotifyRecipient
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.DSUBm.ResourceNotify.Audit.Recipient
Title:          "Audit Event for a Resource Notify transaction generated by the Resource Notification Recipient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource Subscription transaction happens.
- Build off of the IHE BasicAudit Create event
- add the ITI-112 as a subtype
- SHALL have a Resource Notification Recipient agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Bundle reference
- entity slice for transaction is available
- source is the server


"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti112 1..1
* subtype[iti112] = urn:ihe:event-type-code#ITI-112 "Resource Notify"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Notification Broker"
* agent[server] ^short = "Resource Notification Recipient"
* entity[data] ^short = "the reference to the Bundle"
* entity[data].what only Reference(Bundle)


Profile:        AuditCreateResourceNotifyBroker
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.DSUBm.ResourceNotify.Audit.Broker
Title:          "Audit Event for a Resource Notify transaction., generated by the Resource Notification Broker"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource Notify transaction happens.
- Build off of the IHE BasicAudit Create event
- add the ITI-112 as a subtype
- SHALL have a Resource Notification Recipient agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Bundle reference
- entity slice for transaction is available
- source is the server


"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti112 1..1
* subtype[iti112] = urn:ihe:event-type-code#ITI-112 "Resource Notify"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Notification Recipient"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "the reference to the Bundle"
* entity[data].what only Reference(Bundle)

---

// File: input/fsh/Audit/audit_iti-113.fsh


Profile:        AuditSearchSubscriptionSearchSubscriber
Parent:         IHE.BasicAudit.Query
Id:             IHE.DSUBm.SubscriptionSearch.Audit.Subscriber
Title:          "Audit Event for Subscription Search message in a Subscription Search transaction made by the Resource Notification Subscriber"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource Notification Subscriber in a Subscription Search transaction happens, as recorded by the Subscriber.
- Build off of the IHE BasicAudit Query event
- add the ITI-113 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slices for query is REQUIRED
- entity slice for transaction is available
- source is the client
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti113 1..1
* subtype[iti113] = urn:ihe:event-type-code#ITI-113 "Resource Subscription Search"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[query] ^short = "Search Parameters"

Profile:        AuditSearchSubscriptionSearchBroker
Parent:         IHE.BasicAudit.Query
Id:             IHE.DSUBm.SubscriptionSearch.Audit.Broker
Title:          "Audit Event for Subscription Search message in a Subscription Search transaction received by the Resource Notification Broker"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource Notification Subscriber in a Subscription Search transaction happens, as recorded by the Broker.
- Build off of the IHE BasicAudit Query event
- add the ITI-110 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for query is REQUIRED
- entity slice for transaction is available
- source is the server

"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti113 1..1
* subtype[iti113] = urn:ihe:event-type-code#ITI-113 "Resource Subscription Search"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[query] ^short = "Search Parameters"





Profile:        AuditSearchSubscriptionReadSubscriber
Parent:         IHE.BasicAudit.Read
Id:             IHE.DSUBm.SubscriptionRead.Audit.Subscriber
Title:          "Audit Event for Subscription Search message in a Subscription Search transaction made by the Resource Notification Subscriber"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource Notification Subscriber in a Subscription Search transaction happens, as recorded by the Subscriber.
- Build off of the IHE BasicAudit Read event
- add the ITI-113 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for the Subscription reference
- entity slices for query is REQUIRED
- entity slice for transaction is available
- source is the client
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti113 1..1
* subtype[iti113] = urn:ihe:event-type-code#ITI-113 "Resource Subscription Search"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "Read resource"

Profile:        AuditSearchSubscriptionReadBroker
Parent:         IHE.BasicAudit.Read
Id:             IHE.DSUBm.SubscriptionRead.Audit.Broker
Title:          "Audit Event for Subscription Search message in a Subscription Search transaction received by the Resource Notification Broker"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource Notification Subscriber in a Subscription Search transaction happens, as recorded by the Broker.
- Build off of the IHE BasicAudit Read event
- add the ITI-113 as a subtype
- SHALL have a Resource Notification Subscriber agent
- SHALL have a Resource Notification Broker agent
- entity slices for query is REQUIRED
- entity slice for transaction is available
- source is the server

"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti113 1..1
* subtype[iti113] = urn:ihe:event-type-code#ITI-113 "Resource Subscription Search"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "Read resource"



---

// File: input/fsh/Audit/audit_iti-114.fsh

Profile:        AuditQueryResourceSubscriptionTopicSearchSubscriber
Parent:         IHE.BasicAudit.Query
Id:             IHE.DSUBm.SubscriptionTopicSearch.Audit.Subscriber
Title:          "Audit Event for Resource SubscriptionTopic Search Transaction by the Resource Notification Subscriber"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource SubscriptionTopic Search Transaction happens, as recorded by the Resource Notification Subscriber.
- Build off of the IHE BasicAudit Query event
- add the ITI-114 as a subtype
- client is Resource Notification Subscriber
- server is Resource Notification Broker
- entity slices for query is REQUIRED
- entity slice for transaction is available
- source is the client

"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti114 1..1
* subtype[iti114] = urn:ihe:event-type-code#ITI-114 "Resource SubscriptionTopic Search"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[query] ^short = "Search Parameters"


Profile:        AuditQueryResourceSubscriptionTopicSearchBroker
Parent:         IHE.BasicAudit.Query
Id:             IHE.DSUBm.SubscriptionTopicSearch.Audit.Broker
Title:          "Audit Event for Resource SubscriptionTopic Search Transaction by the Resource Notification Broker"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource SubscriptionTopic Search Transaction happens, as recorded by the Resource Notification Broker.
- Build off of the IHE BasicAudit Query event
- add the ITI-114 as a subtype
- client is Resource Notification Subscriber
- server is Resource Notification Broker
- entity slices for query is REQUIRED
- entity slice for transaction is available
- source is the server

"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti114 1..1
* subtype[iti114] = urn:ihe:event-type-code#ITI-114 "Resource SubscriptionTopic Search"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[query] ^short = "Search Parameters"





Profile:        AuditQueryResourceSubscriptionTopicReadSubscriber
Parent:         IHE.BasicAudit.Read
Id:             IHE.DSUBm.SubscriptionTopicRead.Audit.Subscriber
Title:          "Audit Event for Resource SubscriptionTopic Search Transaction by the Resource Notification Subscriber"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource SubscriptionTopic Read Transaction happens, as recorded by the Resource Notification Subscriber.
- Build off of the IHE BasicAudit Read event
- add the ITI-114 as a subtype
- client is Resource Notification Subscriber
- server is Resource Notification Broker
- entity slices for query is REQUIRED
- entity slice for transaction is available
- source is the client

"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti114 1..1
* subtype[iti114] = urn:ihe:event-type-code#ITI-114 "Resource SubscriptionTopic Search"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "Read resource"


Profile:        AuditQueryResourceSubscriptionTopicReadBroker
Parent:         IHE.BasicAudit.Read
Id:             IHE.DSUBm.SubscriptionTopicRead.Audit.Broker
Title:          "Audit Event for Resource SubscriptionTopic Search Transaction by the Resource Notification Broker"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Resource SubscriptionTopic Read Transaction happens, as recorded by the Resource Notification Broker.
- Build off of the IHE BasicAudit Read event
- add the ITI-114 as a subtype
- client is Resource Notification Subscriber
- server is Resource Notification Broker
- entity slices for query is REQUIRED
- entity slice for transaction is available
- source is the server

"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti114 1..1
* subtype[iti114] = urn:ihe:event-type-code#ITI-114 "Resource SubscriptionTopic Search"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Notification Subscriber"
* agent[server] ^short = "Resource Notification Broker"
* entity[data] ^short = "Read resource"

---

// File: input/fsh/Audit/audit-iti-111.fsh


Profile:        AuditResourcePublishBroker
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.DSUBm.ResourcePublish.Audit.Broker
Title:          "Audit Event for Resource Publish Transaction at Broker"
Description:    "Defines constraints on the AuditEvent Resource to record when a Resource Publish Transaction happens at the Broker.
- Import event
- SHALL have source of itself
- SHALL have a publisher agent
- SHALL have a broker agent
- MAY have user, app, organization agent(s)
- SHALL have a patient entity
"
* modifierExtension 0..0
* subtype 2..
* subtype contains iti111 1..1
* subtype[iti111] = urn:ihe:event-type-code#ITI-111 "Resource Publish"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Resource Publisher"
* agent[server] ^short = "Resource Broker"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "Bundle of the Resource Publish transaction"
* entity[data].what only Reference(Bundle)


Profile:        AuditResourcePublishPublisher
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.DSUBm.ResourcePublish.Audit.Publisher
Title:          "Audit Event for Resource Publish Transaction at Publisher"
Description:    "Defines constraints on the AuditEvent Resource to record when a Resource Publish Transaction happens at the Publisher.
- Export event
- SHALL have source of itself
- SHALL have a publisher agent
- SHALL have a broker agent
- MAY have user, app, organization agent(s)
- SHALL have a patient entity
"
* modifierExtension 0..0
* subtype 2..
* subtype contains iti111 1..1
* subtype[iti111] = urn:ihe:event-type-code#ITI-111 "Resource Publish"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Resource Publisher"
* agent[server] ^short = "Resource Broker"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "Bundle of the Resource Publish transaction"
* entity[data].what only Reference(Bundle)



---

// File: input/fsh/Capabilities/ResourceNotificationBroker/ResourceNotificationBroker_basic_capability.fsh

Instance: IHE.DSUBm.ResourceNotificationBroker
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Broker Actor"
Usage: #definition
* description = """
The DSUBm Resource Notification Broker Actor CapabilityStatement requirements expresses the requirements that SHALL be provided.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- MAY support the ITI-111 transaction
- SHALL support the ITI-112 transaction:
  - SHALL support Handshake Notification
  - SHOULD support Heartbeat Notification
  - SHALL support Event Notification
  - SHOULD support Subscription Deactivation Notification
- SHALL support the ITI-113 transaction: 
    - SHALL support the following [Search Parameters](ITI-113.html#23113412-message-semantics)
      - _id
      - status
      - url
      - filter-criteria
      - topic
    - SHALL support the DSUBm $status operation  
    - SHOULD support the DSUBm $events operation  
- SHALL support the ITI-114 transaction:
    - SHALL support the following [Search Parameters](ITI-114.html#23114412-message-semantics)
      - code
      - _id
      - resource
      - derived-or-self
      - status
      - url

"""

* name = "IHE_DSUBm_ResourceNotificationBroker"
* title = "IHE DSUBm ResourceNotificationBroker"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "DSUBm Resource Notification Broker provides capability to receive subscription, receive the stream of events, receive Subscription and SubscriptionTopic Resource search"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = Canonical(DSUBm-DocumentReference-PatientDependent-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-DocumentReference-MultiPatient-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-SubmissionSet-PatientDependent-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-SubmissionSet-MultiPatient-Subscription)
    * documentation = """
    Resource Subscription [ITI-110](ITI-110.html) and Resource Subscription Search [ITI-113](ITI-113.html)
    """
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """    
  * resource[1]
    * type = #Basic
    * documentation = """
Resource SubscriptionTopic Search [ITI-114](ITI-114.html):
The Resource Notification Broker Actor SHALL support the canonical instances of SubscriptionTopic presented in the DSUBm profile.
See [here](artifacts.html#canonical-subscriptiontopic)
"""
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html"  
* rest[+]
  * mode = #client
  * documentation = "DSUBm Resource Notification Broker provides capability to send notification"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[+]
    * type = #Bundle
    * supportedProfile[+] = Canonical(IHE.DSUBm.EventNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HandshakeNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HeartbeatNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.SubscriptionDeactivationNotification)
    * documentation = """[Resource Notify [ITI-112]](ITI-112.html)"""


---

// File: input/fsh/Capabilities/ResourceNotificationBroker/ResourceNotificationBroker_BasicFolderSubscription.fsh

Instance: IHE.DSUBm.ResourceNotificationBroker.Folder.Basic
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Broker Actor implementing Basic Folder Subscription option"
Usage: #definition
* description = """
The DSUBm Resource Notification Broker Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Basic Folder Subscription option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.3 Subscription with Basic Folder Subscription option](ITI-110.html#2311041213-subscription-with-basic-folder-subscription-option), and the related SubscriptionTopic
- MAY support the ITI-111 transaction
- SHALL support the ITI-112 transaction:
  - SHALL support Handshake Notification
  - SHOULD support Heartbeat Notification
  - SHALL support Event Notification
  - SHOULD support Subscription Deactivation Notification
- SHALL support the ITI-113 transaction: 
    - SHALL support the following [Search Parameters](ITI-113.html#23113412-message-semantics)
      - _id
      - status
      - url
      - filter-criteria
      - topic
    - SHALL support the DSUBm $status operation  
    - SHOULD support the DSUBm $events operation  
- SHALL support the ITI-114 transaction:
    - SHALL support the following [Search Parameters](ITI-114.html#23114412-message-semantics)
      - code
      - _id
      - resource
      - derived-or-self
      - status
      - url

"""

* name = "IHE_DSUBm_ResourceNotificationBroker_Folder_Basic"
* title = "IHE DSUBm ResourceNotificationBroker Folder Basic"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "DSUBm Resource Notification Broker provides capability to receive subscription, receive the stream of events, receive Subscription and SubscriptionTopic Resource search"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = Canonical(DSUBm-DocumentReference-PatientDependent-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-DocumentReference-MultiPatient-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-SubmissionSet-PatientDependent-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-SubmissionSet-MultiPatient-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-Basic-Folder-Subscription)
    * documentation = """Resource Subscription [ITI-110](ITI-110.html) and Resource Subscription Search [ITI-113](ITI-113.html)"""
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """    
  * resource[1]
    * type = #Basic
    * documentation = """
Resource SubscriptionTopic Search [ITI-114](ITI-114.html):
The Resource Notification Broker Actor SHALL support the canonical instances of SubscriptionTopic presented in the DSUBm profile.
See [here](artifacts.html#canonical-subscriptiontopic)
"""
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html"  
* rest[+]
  * mode = #client
  * documentation = "DSUBm Resource Notification Broker provides capability to send notification"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[+]
    * type = #Bundle
    * supportedProfile[+] = Canonical(IHE.DSUBm.EventNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HandshakeNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HeartbeatNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.SubscriptionDeactivationNotification)
    * documentation = """Resource Notify [ITI-112](ITI-112.html)"""


---

// File: input/fsh/Capabilities/ResourceNotificationBroker/ResourceNotificationBroker_DocumentReferenceSubscriptionforFullEvents.fsh

Instance: IHE.DSUBm.ResourceNotificationBroker.DocRef.FullEvents
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Broker Actor implementing DocumentReference Subscription for Full Events option"
Usage: #definition
* description = """
The DSUBm Resource Notification Broker Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing DocumentReference Subscription for Full Events option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.2 Subscription with DocumentReference Subscription for Full Events option](ITI-110.html#2311041212-subscription-with-documentreference-subscription-for-full-events-option), and the related SubscriptionTopic
- MAY support the ITI-111 transaction
- SHALL support the ITI-112 transaction:
  - SHALL support Handshake Notification
  - SHOULD support Heartbeat Notification
  - SHALL support Event Notification
  - SHOULD support Subscription Deactivation Notification
- SHALL support the ITI-113 transaction: 
    - SHALL support the following [Search Parameters](ITI-113.html#23113412-message-semantics)
      - _id
      - status
      - url
      - filter-criteria
      - topic
    - SHALL support the DSUBm $status operation  
    - SHOULD support the DSUBm $events operation  
- SHALL support the ITI-114 transaction:
    - SHALL support the following [Search Parameters](ITI-114.html#23114412-message-semantics)
      - code
      - _id
      - resource
      - derived-or-self
      - status
      - url

"""

* name = "IHE_DSUBm_ResourceNotificationBroker_DocRef_FullEvents"
* title = "IHE DSUBm ResourceNotificationBroker DocRef FullEvents"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "DSUBm Resource Notification Broker provides capability to receive subscription, receive the stream of events, receive Subscription and SubscriptionTopic Resource search"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription-AllEvents"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription-AllEvents"
    * documentation = """Resource Subscription [ITI-110](ITI-110.html)and Resource Subscription Search [ITI-113](ITI-113.html)"""
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * name = "events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * name = "status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """    
  * resource[1]
    * type = #Basic
    * documentation = """
Resource SubscriptionTopic Search [ITI-114](ITI-114.html):
The Resource Notification Broker Actor SHALL support the canonical instances of SubscriptionTopic presented in the DSUBm profile.
See [here](artifacts.html#canonical-subscriptiontopic)
"""
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition-IHE.DSUBm.ResourceBundle.html"  
* rest[+]
  * mode = #client
  * documentation = "DSUBm Resource Notification Broker provides capability to send notification"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[+]
    * type = #Bundle
    * supportedProfile[+] = Canonical(IHE.DSUBm.EventNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HandshakeNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HeartbeatNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.SubscriptionDeactivationNotification)
    * documentation = """Resource Notify [ITI-112](ITI-112.html)"""


---

// File: input/fsh/Capabilities/ResourceNotificationBroker/ResourceNotificationBroker_DocumentReferenceSubscriptionforMinimalUpdate.fsh

Instance: IHE.DSUBm.ResourceNotificationBroker.DocRef.MinUpd
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Broker Actor implementing DocumentReference Subscription for Minimal Update Option"
Usage: #definition
* description = """
The DSUBm Resource Notification Broker Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing DocumentReference Subscription for Minimal Update Option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.1 Subscription with DocumentReference Subscription for Minimal Update option](ITI-110.html#2311041211-subscription-with-documentreference-subscription-for-minimal-update-option), and the related SubscriptionTopic
- MAY support the ITI-111 transaction
- SHALL support the ITI-112 transaction:
  - SHALL support Handshake Notification
  - SHOULD support Heartbeat Notification
  - SHALL support Event Notification
  - SHOULD support Subscription Deactivation Notification
- SHALL support the ITI-113 transaction: 
    - SHALL support the following [Search Parameters](ITI-113.html#23113412-message-semantics)
      - _id
      - status
      - url
      - filter-criteria
      - topic
    - SHALL support the DSUBm $status operation  
    - SHOULD support the DSUBm $events operation  
- SHALL support the ITI-114 transaction:
    - SHALL support the following [Search Parameters](ITI-114.html#23114412-message-semantics)
      - code
      - _id
      - resource
      - derived-or-self
      - status
      - url

"""

* name = "IHE_DSUBm_ResourceNotificationBroker_DocRef_MinUpd"
* title = "IHE DSUBm ResourceNotificationBroker DocRef MinUpd"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "DSUBm Resource Notification Broker provides capability to receive subscription, receive the stream of events, receive Subscription and SubscriptionTopic Resource search"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription-MinUpdate"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription-MinUpdate"
    * documentation = """Resource Subscription [ITI-110](ITI-110.html) and Resource Subscription Search [ITI-113](ITI-113.html)"""
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL      
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD   
      * name = "events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL       
      * name = "status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """    
  * resource[1]
    * type = #Basic
    * documentation = """
Resource SubscriptionTopic Search [ITI-114](ITI-114.html):
The Resource Notification Broker Actor SHALL support the canonical instances of SubscriptionTopic presented in the DSUBm profile.
See [here](artifacts.html#canonical-subscriptiontopic)
"""
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition-IHE.DSUBm.ResourceBundle.html"  
* rest[+]
  * mode = #client
  * documentation = "DSUBm Resource Notification Broker provides capability to send notification"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[+]
    * type = #Bundle
    * supportedProfile[+] = Canonical(IHE.DSUBm.EventNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HandshakeNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HeartbeatNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.SubscriptionDeactivationNotification)
    * documentation = """Resource Notify [ITI-112](ITI-112.html)"""


---

// File: input/fsh/Capabilities/ResourceNotificationBroker/ResourceNotificationBroker_FolderSubscriptionforFullEvents.fsh

Instance: IHE.DSUBm.ResourceNotificationBroker.Folder.FullEvents
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Broker Actor implementing Folder Subscription for Full Events option"
Usage: #definition
* description = """
The DSUBm Resource Notification Broker Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Folder Subscription for Full Events option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.6 Subscription with Folder Subscription for Full Events option](ITI-110.html#2311041216-subscription-with-folder-subscription-for-full-events-option), and the related SubscriptionTopic
- MAY support the ITI-111 transaction
- SHALL support the ITI-112 transaction:
  - SHALL support Handshake Notification
  - SHOULD support Heartbeat Notification
  - SHALL support Event Notification
  - SHOULD support Subscription Deactivation Notification
- SHALL support the ITI-113 transaction: 
    - SHALL support the following [Search Parameters](ITI-113.html#23113412-message-semantics)
      - _id
      - status
      - url
      - filter-criteria
      - topic
    - SHALL support the DSUBm $status operation  
    - SHOULD support the DSUBm $events operation  
- SHALL support the ITI-114 transaction:
    - SHALL support the following [Search Parameters](ITI-114.html#23114412-message-semantics)
      - code
      - _id
      - resource
      - derived-or-self
      - status
      - url

"""

* name = "IHE_DSUBm_ResourceNotificationBroker_Folder_FullEvents"
* title = "IHE DSUBm ResourceNotificationBroker Folder FullEvents"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "DSUBm Resource Notification Broker provides capability to receive subscription, receive the stream of events, receive Subscription and SubscriptionTopic Resource search"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-Folder-Subscription-for-Full-Events"
    * documentation = """Resource Subscription [ITI-110](ITI-110.html) and Resource Subscription Search [ITI-113](ITI-113.html)"""
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL   
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD      
      * name = "events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """    
  * resource[1]
    * type = #Basic
    * documentation = """
Resource SubscriptionTopic Search [ITI-114](ITI-114.html):
The Resource Notification Broker Actor SHALL support the canonical instances of SubscriptionTopic presented in the DSUBm profile.
See [here](artifacts.html#canonical-subscriptiontopic)
"""
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition-IHE.DSUBm.ResourceBundle.html"  
* rest[+]
  * mode = #client
  * documentation = "DSUBm Resource Notification Broker provides capability to send notification"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[+]
    * type = #Bundle
    * supportedProfile[+] = Canonical(IHE.DSUBm.EventNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HandshakeNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HeartbeatNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.SubscriptionDeactivationNotification)
    * documentation = """Resource Notify [ITI-112](ITI-112.html)"""


---

// File: input/fsh/Capabilities/ResourceNotificationBroker/ResourceNotificationBroker_FolderSubscriptionforMinimalUpdate.fsh

Instance: IHE.DSUBm.ResourceNotificationBroker.Folder.MinUpd
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Broker Actor implementing Folder Subscription for Minimal Update option"
Usage: #definition
* description = """
The DSUBm Resource Notification Broker Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Folder Subscription for Minimal Update option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.4 Subscription with Folder Subscription for Minimal Update option](ITI-110.html#2311041214-subscription-with-folder-subscription-for-minimal-update-option), and the related SubscriptionTopic
- MAY support the ITI-111 transaction
- SHALL support the ITI-112 transaction:
  - SHALL support Handshake Notification
  - SHOULD support Heartbeat Notification
  - SHALL support Event Notification
  - SHOULD support Subscription Deactivation Notification
- SHALL support the ITI-113 transaction: 
    - SHALL support the following [Search Parameters](ITI-113.html#23113412-message-semantics)
      - _id
      - status
      - url
      - filter-criteria
      - topic
    - SHALL support the DSUBm $status operation  
    - SHOULD support the DSUBm $events operation  
- SHALL support the ITI-114 transaction:
    - SHALL support the following [Search Parameters](ITI-114.html#23114412-message-semantics)
      - code
      - _id
      - resource
      - derived-or-self
      - status
      - url

"""

* name = "IHE_DSUBm_ResourceNotificationBroker_Folder_MinUpd"
* title = "IHE DSUBm ResourceNotificationBroker Folder MinUpd"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "DSUBm Resource Notification Broker provides capability to receive subscription, receive the stream of events, receive Subscription and SubscriptionTopic Resource search"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = Canonical(DSUBm-DocumentReference-PatientDependent-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-DocumentReference-MultiPatient-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-SubmissionSet-PatientDependent-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-SubmissionSet-MultiPatient-Subscription)
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-Folder-Subscription-MinUpdateOpt"
    * documentation = """Resource Subscription [ITI-110](ITI-110.html) and Resource Subscription Search [ITI-113](ITI-113.html)"""
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD         
      * name = "events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """    
  * resource[1]
    * type = #Basic
    * documentation = """
Resource SubscriptionTopic Search [ITI-114](ITI-114.html):
The Resource Notification Broker Actor SHALL support the canonical instances of SubscriptionTopic presented in the DSUBm profile.
See [here](artifacts.html#canonical-subscriptiontopic)
"""
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html"  
* rest[+]
  * mode = #client
  * documentation = "DSUBm Resource Notification Broker provides capability to send notification"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[+]
    * type = #Bundle
    * supportedProfile[+] = Canonical(IHE.DSUBm.EventNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HandshakeNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HeartbeatNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.SubscriptionDeactivationNotification)
    * documentation = """Resource Notify [ITI-112](ITI-112.html)"""


---

// File: input/fsh/Capabilities/ResourceNotificationBroker/ResourceNotificationBroker_FolderSubscriptionforUpdate.fsh

Instance: IHE.DSUBm.ResourceNotificationBroker.Folder.Upd
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Broker Actor implementing DocumentReference Subscription for Update Option"
Usage: #definition
* description = """
The DSUBm Resource Notification Broker Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing DocumentReference Subscription for Update Option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.5 Subscription with Folder Subscription for Update option](ITI-110.html#2311041215-subscription-with-folder-subscription-for-update-option), and the related SubscriptionTopic
- MAY support the ITI-111 transaction
- SHALL support the ITI-112 transaction:
  - SHALL support Handshake Notification
  - SHOULD support Heartbeat Notification
  - SHALL support Event Notification
  - SHOULD support Subscription Deactivation Notification
- SHALL support the ITI-113 transaction: 
    - SHALL support the following [Search Parameters](ITI-113.html#23113412-message-semantics)
      - _id
      - status
      - url
      - filter-criteria
      - topic
    - SHALL support the DSUBm $status operation  
    - SHOULD support the DSUBm $events operation  
- SHALL support the ITI-114 transaction:
    - SHALL support the following [Search Parameters](ITI-114.html#23114412-message-semantics)
      - code
      - _id
      - resource
      - derived-or-self
      - status
      - url

"""

* name = "IHE_DSUBm_ResourceNotificationBroker_Folder_Upd"
* title = "IHE DSUBm ResourceNotificationBroker Folder Upd"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "DSUBm Resource Notification Broker provides capability to receive subscription, receive the stream of events, receive Subscription and SubscriptionTopic Resource search"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = Canonical(DSUBm-DocumentReference-PatientDependent-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-DocumentReference-MultiPatient-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-SubmissionSet-PatientDependent-Subscription)
    * supportedProfile[+] = Canonical(DSUBm-SubmissionSet-MultiPatient-Subscription)
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-Folder-Subscription-UpdateOpt"
    * documentation = """Resource Subscription [ITI-110](ITI-110.html) and Resource Subscription Search [ITI-113](ITI-113.html)"""
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD         
      * name = "events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
      * documentation = """ The Response Bundle SHALL be conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """    
  * resource[1]
    * type = #Basic
    * documentation = """
Resource SubscriptionTopic Search [ITI-114](ITI-114.html):
The Resource Notification Broker Actor SHALL support the canonical instances of SubscriptionTopic presented in the DSUBm profile.
See [here](artifacts.html#canonical-subscriptiontopic)
"""
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL         
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html"  
* rest[+]
  * mode = #client
  * documentation = "DSUBm Resource Notification Broker provides capability to send notification"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[+]
    * type = #Bundle
    * supportedProfile[+] = Canonical(IHE.DSUBm.EventNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HandshakeNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.HeartbeatNotification)
    * supportedProfile[+] = Canonical(IHE.DSUBm.SubscriptionDeactivationNotification)
    * documentation = """Resource Notify [ITI-112](ITI-112.html)"""

---

// File: input/fsh/Capabilities/ResourceNotificationPublisher/ResourceNotificationPublisher_basic_capability.fsh

Instance: IHE.DSUBm.ResourceNotificationPublisher
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Publisher Actor"
Usage: #definition
* description = """
The DSUBm Resource Notification Publisher Actor CapabilityStatement requirements expresses the requirements that SHALL be provided.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-111 transaction for the basic trigger events

"""

* name = "IHE_DSUBm_ResourceNotificationPublisher"
* title = "IHE DSUBm ResourceNotificationPublisher"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification Publisher provides capability to send publication events"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html"  


---

// File: input/fsh/Capabilities/ResourceNotificationPublisher/ResourceNotificationPublisher_BasicFolderSubscription.fsh

Instance: IHE.DSUBm.ResourceNotificationPublisher.Folder.Basic
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Publisher Actor implementing Basic Folder Subscription option"
Usage: #definition
* description = """
The DSUBm Resource Notification Publisher Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Basic Folder Subscription option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-111 transaction for the basic trigger events
- SHALL be able to support in the Resource Publish [ITI-111] transaction the triggers events defined in Section [2:3.111.4.1.1.3 Basic Folder Subscription option Trigger Events](ITI-111.html#231114113-basic-folder-subscription-option-trigger-events) and to comunicate the stream of events to the Resource Notification Broker as defined in Section [2:3.111.4.1.2.3 Subscription with Basic Folder Subscription option Bundle](ITI-111.html#231114123-subscription-with-basic-folder-subscription-option-bundle)
"""

* name = "IHE_DSUBm_ResourceNotificationPublisher_Folder_Basic"
* title = "IHE DSUBm ResourceNotificationPublisher Folder Basic"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification Publisher provides capability to send publication events"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html"  


---

// File: input/fsh/Capabilities/ResourceNotificationPublisher/ResourceNotificationPublisher_DocumentReferenceSubscriptionforFullEvents.fsh

Instance: IHE.DSUBm.ResourceNotificationPublisher.DocRef.FullEvents
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Publisher Actor implementing DocumentReference Subscription for Full Events option"
Usage: #definition
* description = """
The DSUBm Resource Notification Publisher Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing DocumentReference Subscription for Full Events option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-111 transaction for the basic trigger events
- SHALL be able to support in the Resource Publish [ITI-111] transaction the triggers events defined in Section [2:3.111.4.1.1.2 DocumentReference Subscription for Full Events option Trigger Events](ITI-111.html#231114112-documentreference-subscription-for-full-events-option-trigger-events) and to comunicate the stream of events to the Resource Notification Broker as defined in Section [2:3.111.4.1.2.2 DocumentReference Subscription for Full Events option Bundle](ITI-111.html#231114122-documentreference-subscription-for-full-events-option-bundle)
"""

* name = "IHE_DSUBm_ResourceNotificationPublisher_DocRef_FullEvents"
* title = "IHE DSUBm ResourceNotificationPublisher DocRef FullEvents"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification Publisher provides capability to send publication events"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition-IHE.DSUBm.ResourceBundle.html"  


---

// File: input/fsh/Capabilities/ResourceNotificationPublisher/ResourceNotificationPublisher_DocumentReferenceSubscriptionforMinimalUpdate.fsh

Instance: IHE.DSUBm.ResourceNotificationPublisher.DocRef.MinUpd
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Publisher Actor implementing DocumentReference Subscription for Minimal Update Option"
Usage: #definition
* description = """
The DSUBm Resource Notification Publisher Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing DocumentReference Subscription for Minimal Update Option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-111 transaction for the basic trigger events
- SHALL be able to support in the Resource Publish [ITI-111] transaction the triggers events defined in Section [2:3.111.4.1.1.1 DocumentReference Subscription for Minimal Update option Trigger Events](ITI-111.html#231114111-documentreference-subscription-for-minimal-update-option-trigger-events) and to comunicate the stream of events to the Resource Notification Broker as defined in Section [2:3.111.4.1.2.1 DocumentReference Subscription for Minimal Update option Bundle](ITI-111.html#231114121-documentreference-subscription-for-minimal-update-option-bundle)
"""

* name = "IHE_DSUBm_ResourceNotificationPublisher_DocRef_MinUpd"
* title = "IHE DSUBm ResourceNotificationPublisher DocRef MinUpd"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification Publisher provides capability to send publication events"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition-IHE.DSUBm.ResourceBundle.html"  


---

// File: input/fsh/Capabilities/ResourceNotificationPublisher/ResourceNotificationPublisher_FolderSubscriptionforFullEvents.fsh

Instance: IHE.DSUBm.ResourceNotificationPublisher.Folder.FullEvents
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Publisher Actor implementing Folder Subscription for Full Events option"
Usage: #definition
* description = """
The DSUBm Resource Notification Publisher Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Folder Subscription for Full Events option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-111 transaction for the basic trigger events
- SHALL be able to support in the Resource Publish [ITI-111] transaction the triggers events defined in Section [2:3.111.4.1.1.6 Folder Subscription for Full Events option Trigger Events](ITI-111.html#231114116-folder-subscription-for-full-events-option-trigger-events) and to comunicate the stream of events to the Resource Notification Broker as defined in Section [2:3.111.4.1.2.6 Folder Subscription for Full Events option Bundle](ITI-111.html#231114126-folder-subscription-for-full-events-option-bundle)
"""

* name = "IHE_DSUBm_ResourceNotificationPublisher_Folder_FullEvents"
* title = "IHE DSUBm ResourceNotificationPublisher Folder FullEvents"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification Publisher provides capability to send publication events"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition-IHE.DSUBm.ResourceBundle.html"  


---

// File: input/fsh/Capabilities/ResourceNotificationPublisher/ResourceNotificationPublisher_FolderSubscriptionforMinimalUpdate.fsh

Instance: IHE.DSUBm.ResourceNotificationPublisher.Folder.MinUpd
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Publisher Actor implementing Folder Subscription for Minimal Update option"
Usage: #definition
* description = """
The DSUBm Resource Notification Publisher Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Folder Subscription for Minimal Update option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-111 transaction for the basic trigger events
- SHALL be able to support in the Resource Publish [ITI-111] transaction the triggers events defined in Section [2:3.111.4.1.1.4 Folder Subscription for Minimal Update option Trigger Events](ITI-111.html#231114114-folder-subscription-for-minimal-update-option-trigger-events) and to comunicate the stream of events to the Resource Notification Broker as defined in Section [2:3.111.4.1.2.4 Folder Subscription for Minimal Update option Bundle](ITI-111.html#231114124-folder-subscription-for-minimal-update-option-bundle)
"""

* name = "IHE_DSUBm_ResourceNotificationPublisher_Folder_MinUpd"
* title = "IHE DSUBm ResourceNotificationPublisher Folder MinUpd"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification Publisher provides capability to send publication events"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html"  


---

// File: input/fsh/Capabilities/ResourceNotificationPublisher/ResourceNotificationPublisher_FolderSubscriptionforUpdate.fsh

Instance: IHE.DSUBm.ResourceNotificationPublisher.Folder.Upd
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Publisher Actor implementing Folder Subscription for Update option"
Usage: #definition
* description = """
The DSUBm Resource Notification Publisher Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Folder Subscription for Update option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-111 transaction for the basic trigger events
- SHALL be able to support in the Resource Publish [ITI-111] transaction the triggers events defined in Section [2:3.111.4.1.1.5 Folder Subscription for Update option Trigger Events](ITI-111.html#231114115-folder-subscription-for-update-option-trigger-events) and to comunicate the stream of events to the Resource Notification Broker as defined in Section [2:3.111.4.1.2.5 Folder Subscription for Update option Bundle](ITI-111.html#231114125-folder-subscription-for-update-option-bundle)
"""

* name = "IHE_DSUBm_ResourceNotificationPublisher_Folder_Upd"
* title = "IHE DSUBm ResourceNotificationPublisher Folder Upd"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification Publisher provides capability to send publication events"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html"  


---

// File: input/fsh/Capabilities/ResourceNotificationRecipient/ResourceNotificationRecipient_capability.fsh

Instance: IHE.DSUBm.ResourceNotificationRecipient
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Recipient Actor"
Usage: #definition
* description = """
The DSUBm Resource Notification Recipient Actor CapabilityStatement requirements expresses the requirements that SHALL be provided.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-112 transaction

"""

* name = "IHE_DSUBm_ResourceNotificationRecipient"
* title = "IHE DSUBm ResourceNotificationRecipient"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "DSUBm Resource Notification Recipient provides capability to receive notification ."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[+]
    * type = #Bundle
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/IHE.DSUBm.EventNotification"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/IHE.DSUBm.HandshakeNotification"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/IHE.DSUBm.HeartbeatNotification"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/IHE.DSUBm.SubscriptionDeactivationNotification"
    * documentation = """Resource Notify [ITI-112](ITI-112.html)"""
/*  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/IHE.DSUBm.ResourceNotify.EventNotification"
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/IHE.DSUBm.ResourceNotify.HandshakeNotification"
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/IHE.DSUBm.ResourceNotify.HeartbeatNotification"
  * interaction[+]
    * code = #transaction
    * documentation = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/IHE.DSUBm.ResourceNotify.SubscriptionDeactivationNotification"
  */  


---

// File: input/fsh/Capabilities/ResourceNotificationSubscriber/ResourceNotificationSubscriber_basic_capability.fsh

Instance: IHE.DSUBm.ResourceNotificationSubscriber
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Subscriber Actor"
Usage: #definition
* description = """
The DSUBm Resource Notification Subscriber Actor CapabilityStatement requirements expresses the requirements that SHALL be provided.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHOULD implement the ITI-113 transaction; if implemented: 
  - [Search Parameters that SHOULD be supported](ITI-113.html#23113412-message-semantics)
    - _id
    - status
    - url
    - filter-criteria
    - topic
  - SHOULD support the DSUBm $status operation  
  - SHOULD support the DSUBm $events operation  
- SHOULD implement the ITI-114 transaction; if implemented: 
  - [Search Parameters that SHALL be supported](ITI-114.html#23114412-message-semantics)
    - code
  - [Search Parameters that SHOULD be supported](ITI-114.html#23114412-message-semantics)
    - _id
    - resource
    - derived-or-self
    - status
    - url


"""

* name = "IHE_DSUBm_ResourceNotificationSubscriber"
* title = "IHE DSUBm ResourceNotificationSubscriber"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification subscriber provides capability to create/deactivate subscription and optionally to search for Subscription and SubscritptionTopic resources"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    * documentation = """Resource Subscription [ITI-110](ITI-110.html) and Resource Subscription Search [ITI-113](ITI-113.html)"""
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * name = "$events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * name = "$status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"    
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """
  * resource[1]
    * type = #Basic
    * documentation = """Resource SubscriptionTopic Search [ITI-114](ITI-114.html)"""
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD   
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD    
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  

---

// File: input/fsh/Capabilities/ResourceNotificationSubscriber/ResourceNotificationSubscriber_BasicFolderSubscription.fsh

Instance: IHE.DSUBm.ResourceNotificationSubscriber.Folder.Basic
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Subscriber Actor implementing Basic Folder Subscription option"
Usage: #definition
* description = """
The DSUBm Resource Notification Subscriber Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Basic Folder Subscription option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.3 Subscription with Basic Folder Subscription option](ITI-110.html#2311041213-subscription-with-basic-folder-subscription-option), and the related SubscriptionTopic
- SHOULD implement the ITI-113 transaction; if implemented: 
  - [Search Parameters that SHOULD be supported](ITI-113.html#23113412-message-semantics)
    - _id
    - status
    - url
    - filter-criteria
    - topic
  - SHOULD support the DSUBm $status operation  
  - SHOULD support the DSUBm $events operation  
- SHOULD implement the ITI-114 transaction; if implemented: 
  - [Search Parameters that SHALL be supported](ITI-114.html#23114412-message-semantics)
    - code
  - [Search Parameters that SHOULD be supported](ITI-114.html#23114412-message-semantics)
    - _id
    - resource
    - derived-or-self
    - status
    - url


"""

* name = "IHE_DSUBm_ResourceNotificationSubscriber_Folder_Basic"
* title = "IHE DSUBm ResourceNotificationSubscriber Folder Basic"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification subscriber provides capability to create/deactivate subscription and optionally to search for Subscription and SubscritptionTopic resources"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-Basic-Folder-Subscription"
    * documentation = "Resource Subscription [ITI-110] and Resource Subscription Search [ITI-113]"
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * name = "$events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * name = "$status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"    
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """
  * resource[1]
    * type = #Basic
    * documentation = "Resource SubscriptionTopic Search [ITI-114]"
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  

---

// File: input/fsh/Capabilities/ResourceNotificationSubscriber/ResourceNotificationSubscriber_DocumentReferenceSubscriptionforFullEvents.fsh

Instance: IHE.DSUBm.ResourceNotificationSubscriber.DocRef.FullEvents
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Subscriber Actor implementing DocumentReference Subscription for Full Events option"
Usage: #definition
* description = """
The DSUBm Resource Notification Subscriber Actor CapabilityStatement requirements expresses the requirements that SHALL be provided  when implementing DocumentReference Subscription for Full Events option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.2 Subscription with DocumentReference Subscription for Full Events option](ITI-110.html#2311041212-subscription-with-documentreference-subscription-for-full-events-option), and the related SubscriptionTopic
- SHOULD implement the ITI-113 transaction; if implemented: 
  - [Search Parameters that SHOULD be supported](ITI-113.html#23113412-message-semantics)
    - _id
    - status
    - url
    - filter-criteria
    - topic
  - SHOULD support the DSUBm $status operation  
  - SHOULD support the DSUBm $events operation  
- SHOULD implement the ITI-114 transaction; if implemented: 
  - [Search Parameters that SHALL be supported](ITI-114.html#23114412-message-semantics)
    - code
  - [Search Parameters that SHOULD be supported](ITI-114.html#23114412-message-semantics)
    - _id
    - resource
    - derived-or-self
    - status
    - url


"""

* name = "IHE_DSUBm_ResourceNotificationSubscriber_DocRef_FullEvent"
* title = "IHE DSUBm ResourceNotificationSubscriber DocRef FullEvents"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification subscriber provides capability to create/deactivate subscription and optionally to search for Subscription and SubscritptionTopic resources"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription-AllEvents"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription-AllEvents"
    * documentation = "Resource Subscription [ITI-110] and Resource Subscription Search [ITI-113]"
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * name = "$events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * name = "$status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"    
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """
  * resource[1]
    * type = #Basic
    * documentation = "Resource SubscriptionTopic Search [ITI-114]"
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  

---

// File: input/fsh/Capabilities/ResourceNotificationSubscriber/ResourceNotificationSubscriber_DocumentReferenceSubscriptionforMinimalUpdate.fsh

Instance: IHE.DSUBm.ResourceNotificationSubscriber.DocRef.MinUpd
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Subscriber Actor DocumentReference Subscription for Minimal Update Option"
Usage: #definition
* description = """
The DSUBm Resource Notification Subscriber Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing DocumentReference Subscription for Minimal Update Option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.1 Subscription with DocumentReference Subscription for Minimal Update option](ITI-110.html#2311041211-subscription-with-documentreference-subscription-for-minimal-update-option), and the related SubscriptionTopic
- SHOULD implement the ITI-113 transaction; if implemented: 
  - [Search Parameters that SHOULD be supported](ITI-113.html#23113412-message-semantics)
    - _id
    - status
    - url
    - filter-criteria
    - topic
  - SHOULD support the DSUBm $status operation  
  - SHOULD support the DSUBm $events operation  
- SHOULD implement the ITI-114 transaction; if implemented: 
  - [Search Parameters that SHALL be supported](ITI-114.html#23114412-message-semantics)
    - code
  - [Search Parameters that SHOULD be supported](ITI-114.html#23114412-message-semantics)
    - _id
    - resource
    - derived-or-self
    - status
    - url


"""

* name = "IHE_DSUBm_ResourceNotificationSubscriber_DocRef_MinUpd"
* title = "IHE DSUBm ResourceNotificationSubscriber DocRef MinUpd"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification subscriber provides capability to create/deactivate subscription and optionally to search for Subscription and SubscritptionTopic resources"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription-MinUpdate"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription-MinUpdate"
    * documentation = "Resource Subscription [ITI-110] and Resource Subscription Search [ITI-113]"
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * name = "$events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * name = "$status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"    
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """
  * resource[1]
    * type = #Basic
    * documentation = "Resource SubscriptionTopic Search [ITI-114]"
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  

---

// File: input/fsh/Capabilities/ResourceNotificationSubscriber/ResourceNotificationSubscriber_FolderSubscriptionforFullEvents.fsh

Instance: IHE.DSUBm.ResourceNotificationSubscriber.Folder.FullEvents
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Subscriber Actor implementing Folder Subscription for Full Events option"
Usage: #definition
* description = """
The DSUBm Resource Notification Subscriber Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Folder Subscription for Full Events option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.6 Subscription with Folder Subscription for Full Events option](ITI-110.html#2311041216-subscription-with-folder-subscription-for-full-events-option), and the related SubscriptionTopic
- SHOULD implement the ITI-113 transaction; if implemented: 
  - [Search Parameters that SHOULD be supported](ITI-113.html#23113412-message-semantics)
    - _id
    - status
    - url
    - filter-criteria
    - topic
  - SHOULD support the DSUBm $status operation  
  - SHOULD support the DSUBm $events operation  
- SHOULD implement the ITI-114 transaction; if implemented: 
  - [Search Parameters that SHALL be supported](ITI-114.html#23114412-message-semantics)
    - code
  - [Search Parameters that SHOULD be supported](ITI-114.html#23114412-message-semantics)
    - _id
    - resource
    - derived-or-self
    - status
    - url


"""

* name = "IHE_DSUBm_ResourceNotificationSubscriber_Folder_FullEvents"
* title = "IHE DSUBm ResourceNotificationSubscriber Folder FullEvents"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification subscriber provides capability to create/deactivate subscription and optionally to search for Subscription and SubscritptionTopic resources"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-Folder-Subscription-for-Full-Events" 
    * documentation = "Resource Subscription [ITI-110] and Resource Subscription Search [ITI-113]"
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * name = "$events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * name = "$status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"    
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """
  * resource[1]
    * type = #Basic
    * documentation = "Resource SubscriptionTopic Search [ITI-114]"
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  

---

// File: input/fsh/Capabilities/ResourceNotificationSubscriber/ResourceNotificationSubscriber_FolderSubscriptionforMinimalUpdate.fsh

Instance: IHE.DSUBm.ResourceNotificationSubscriber.Folder.MinUpd
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Subscriber Actor implementing Folder Subscription for Minimal Update option"
Usage: #definition
* description = """
The DSUBm Resource Notification Subscriber Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing Folder Subscription for Minimal Update option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.4 Subscription with Folder Subscription for Minimal Update option](ITI-110.html#2311041214-subscription-with-folder-subscription-for-minimal-update-option), and the related SubscriptionTopic
- SHOULD implement the ITI-113 transaction; if implemented: 
  - [Search Parameters that SHOULD be supported](ITI-113.html#23113412-message-semantics)
    - _id
    - status
    - url
    - filter-criteria
    - topic
  - SHOULD support the DSUBm $status operation  
  - SHOULD support the DSUBm $events operation  
- SHOULD implement the ITI-114 transaction; if implemented: 
  - [Search Parameters that SHALL be supported](ITI-114.html#23114412-message-semantics)
    - code
  - [Search Parameters that SHOULD be supported](ITI-114.html#23114412-message-semantics)
    - _id
    - resource
    - derived-or-self
    - status
    - url


"""

* name = "IHE_DSUBm_ResourceNotificationSubscriber_Folder_MinUpd"
* title = "IHE DSUBm ResourceNotificationSubscriber Folder MinUpd"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification subscriber provides capability to create/deactivate subscription and optionally to search for Subscription and SubscritptionTopic resources"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-Folder-Subscription-MinUpdateOpt"
    * documentation = "Resource Subscription [ITI-110] and Resource Subscription Search [ITI-113]"
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * name = "$events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * name = "$status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"    
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """
  * resource[1]
    * type = #Basic
    * documentation = "Resource SubscriptionTopic Search [ITI-114]"
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  

---

// File: input/fsh/Capabilities/ResourceNotificationSubscriber/ResourceNotificationSubscriber_FolderSubscriptionforUpdate.fsh

Instance: IHE.DSUBm.ResourceNotificationSubscriber.Folder.Upd
InstanceOf: CapabilityStatement
Title: "DSUBm Resource Notification Subscriber Actor implementing DocumentReference Subscription for Update Option"
Usage: #definition
* description = """
The DSUBm Resource Notification Subscriber Actor CapabilityStatement requirements expresses the requirements that SHALL be provided when implementing DocumentReference Subscription for Update Option.

- Using FHIR R4
- SHALL support both json and xml encoding
- SHOULD use a security framework. Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)
- SHALL support the ITI-110 transaction and support the basic type of Subscription and related SubscriptionTopic
- SHALL be able to support the Subscription defined in Section [2:3.110.4.1.2.1.5 Subscription with Folder Subscription for Update option](ITI-110.html#2311041215-subscription-with-folder-subscription-for-update-option), and the related SubscriptionTopic
- SHOULD implement the ITI-113 transaction; if implemented: 
  - [Search Parameters that SHOULD be supported](ITI-113.html#23113412-message-semantics)
    - _id
    - status
    - url
    - filter-criteria
    - topic
  - SHOULD support the DSUBm $status operation  
  - SHOULD support the DSUBm $events operation  
- SHOULD implement the ITI-114 transaction; if implemented: 
  - [Search Parameters that SHALL be supported](ITI-114.html#23114412-message-semantics)
    - code
  - [Search Parameters that SHOULD be supported](ITI-114.html#23114412-message-semantics)
    - _id
    - resource
    - derived-or-self
    - status
    - url


"""

* name = "IHE_DSUBm_ResourceNotificationSubscriber_Folder_Upd"
* title = "IHE DSUBm ResourceNotificationSubscriber Folder Upd"
* status = #active
* experimental = false
* date = "2023-10-27"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "DSUBm Resource Notification subscriber provides capability to create/deactivate subscription and optionally to search for Subscription and SubscritptionTopic resources"
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"   
  * resource[0]
    * type = #Subscription
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-DocumentReference-MultiPatient-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-PatientDependent-Subscription"
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-SubmissionSet-MultiPatient-Subscription"
    
    * supportedProfile[+] = "https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-Folder-Subscription-UpdateOpt"
    * documentation = "Resource Subscription [ITI-110] and Resource Subscription Search [ITI-113]"
    * interaction[+].code = #read
    * interaction[+].code = #create
    * interaction[+].code = #update
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_id"
      * type = #string
      * documentation = "The id of the Subscription"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "The current state of the subscription"
    * searchParam[+]
      * name = "url"
      * type = #uri
      * documentation = "The URI that will receive the notifications"
    * searchParam[+]
      * name = "filter-criteria"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
      * type = #string
      * documentation = "This SearchParameter enables query of subscriptions by filter criteria"          
    * searchParam[+]
      * name = "topic"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
      * type = #uri
      * documentation = "This SearchParameter enables query of subscriptions by canonical topic-url"   
    * operation[+]
      * name = "$events"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events"  
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-EventsOperation-Bundle """
    * operation[+]
      * name = "$status"
      * definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"    
      * documentation = """ This operation is OPTIONAL for the RESOURCE NOTIFICATION SUBSCRIBER; if supported, the Resource Notification Subscriber SHALL support in response a Bundle that is conformed with https://profiles.ihe.net/ITI/DSUBm/StructureDefinition/DSUBm-StatusOperation-Bundle """
  * resource[1]
    * type = #Basic
    * documentation = "Resource SubscriptionTopic Search [ITI-114]"
    * interaction[0]
      * code = #read
    * interaction[1]
      * code = #search-type
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHALL
      * name = "code"
      * type = #token
      * documentation = "Kind of Resource"    
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "_id"
      * type = #string
      * documentation = "The id of the SubscriptionTopic"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "resource"
      * type = #uri
      * documentation = "Allowed Data type or Resource (reference to definition) for this definition, searches resourceTrigger, eventTrigger, and notificationShape for matches."
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "derived-or-self"
      * type = #uri
      * documentation = "A server defined search that matches either the url or derivedFrom"
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "status"
      * type = #token
      * documentation = "SHOULD be valued with `active`"      
    * searchParam[+]
      * extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
      * extension.valueCode = #SHOULD
      * name = "url"
      * type = #uri
      * documentation = "Logical canonical URL to reference this SubscriptionTopic (globally unique)"           
  

---

// File: input/fsh/common.fsh

ValueSet:    DSUBmPayload
Id:          payload-content-value-set
Title:       "DSUBm payload admitted Value Set"
Description: "Codes to represent the admitted payload MIME type chosen when creating subscription"
* ^experimental = false
* include $Payload#application/fhir+json "JSON payload"
* include $Payload#application/fhir+xml "XML payload"

Invariant: DSUBm-trigger
Severity: #error
Description: "SHALL have a resourceTrigger and SHALL NOT have an eventTrigger"
Expression: "resourceTrigger.exists() and eventTrigger.exists().not()"
XPath: "exists(f:resourceTrigger) and exists(f:eventTrigger).not()"

Invariant: DSUBm-Multipatient
Severity: #error
Description: "the canFilterBy SHALL NOT use the patient as a filter "
Expression: "where(resource='DocumentReference').select(filterParameter = 'patient').allFalse()" 

Invariant: DSUBm-PatientDependentRule
Severity: #error
Description: "SHALL have at least one canfilterBy for DocumentReference with filterParameter = 'patient'"
Expression: "canFilterBy.where(resource='DocumentReference' or resource='Folder').select(filterParameter = 'patient').anyTrue()"

/*
Invariant: DSUBm-PatientDependentRule-Subscription
Severity: #error
Description: "the PatientDependent Subscription SHALL include the patient in the criteria.extension.valueString element."
Expression: "value.contains('patient=')"

Invariant: DSUBm-MultiPatientRule-Subscription
Severity: #error
Description: "the MultiPatient Subscription SHALL NOT include the patient in the criteria.extension.valueString element."
Expression: "value.contains('patient=').not()"
*/
Invariant: Folder-PatientDependent
Severity: #error
Description: "the Subscription for Folder SHALL include the resource LIST and the patient"
Expression: "value.contains('List?') and (value.contains('code=folder') or value.contains('code=https%3A%2F%2Fprofiles.ihe.net%2FITI%2FDSUBm%2FCodeSystem%2FDSUBmlistTypesR4%7Cfolder') ) and value.contains('patient')"

Invariant: SubmissionSet-PatientDependent
Severity: #error
Description: "the Subscription for SubmissionSet SHALL include the resource LIST and the patient"
Expression: "value.contains('List?') and (value.contains('code=submissionset') or value.contains('code=https%3A%2F%2Fprofiles.ihe.net%2FITI%2FDSUBm%2FCodeSystem%2FDSUBmlistTypesR4%7Csubmissionset') ) and value.contains('patient')"

Invariant: SubmissionSet-MultiPatient
Severity: #error
Description: "the Subscription for Folder SHALL include the resource LIST and no reference to the patient"
Expression: "value.contains('List?') and (value.contains('code=submissionset') or value.contains('code=https%3A%2F%2Fprofiles.ihe.net%2FITI%2FDSUBm%2FCodeSystem%2FDSUBmlistTypesR4%7Csubmissionset') ) and value.contains('patient').not()"

Invariant: DocumentReference-PatientDependent
Severity: #error
Description: "the Subscription for DocumentReference SHALL include the resource DocumentReference and the patient parameter"
Expression: "value.contains('DocumentReference?') and value.contains('patient')"

Invariant: DocumentReference-MultiPatient
Severity: #error
Description: "the Subscription for DocumentReference SHALL include the resource DocumentReference and no reference to the patient parameter"
Expression: "value.contains('DocumentReference?') and value.contains('patient').not()"

Invariant: val-audit-source
Description: "The Audit Source is this agent too."
Expression: "$this.who = %resource.source.observer"
Severity: #error

/*
ValueSet: DSUBmInteractionTrigger
Title: "Restful-interaction available for resource"
Description: "A ValueSet of the allowed Restful-interaction used for defining resourceTriggers."
* ^experimental = false
* http://hl7.org/fhir/restful-interaction#create
* http://hl7.org/fhir/restful-interaction#update
* http://hl7.org/fhir/restful-interaction#delete
*/


---

// File: input/fsh/DeactivationNotification.fsh

Profile:     SubscriptionDeactivationNotification
Parent:      Bundle
Id:          IHE.DSUBm.SubscriptionDeactivationNotification
Title:       "Subscription Deactivation Notification Bundle"
Description: "Profile on the Bundle resource for Subscription Deactivation Notification."
* type = #history
* entry 1..1 
* entry.resource 1..1 MS
* entry.resource only SubscriptionStatus_Deactivation
* obeys backport-notification-bundle-1
* entry.request.method = #GET 
* entry.request.url ^short = "SHALL be filled out to match a request to the $status operation for the Subscription relates to the notification"


---

// File: input/fsh/EventNotification.fsh

Profile:        ResourceNotify_EventNotification
Parent:         Bundle
Id:             IHE.DSUBm.EventNotification
Title:          "Event Notification Bundle"
Description:    "Profile on the Bundle resource for transaction ITI-112 Resource Notify for Event Notification."
* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[0].path = "resource"
* entry ^slicing.discriminator[1].type = #value
* entry ^slicing.discriminator[1].path = "request.method"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slicing based on the profile conformance of the entry. All notification bundle MUST have a SubscriptionStatus as the first entry."
* entry and entry.resource MS
* obeys backport-notification-bundle-1
* entry contains 
    SubscriptionStatus 1..1 and
    SubmissionSet 0..* and
    DocumentRefs 0..* and
    Folders 0..* and
    Patient 0..1 
* entry[SubscriptionStatus].resource only SubscriptionStatus_NotificationEvent
* entry[SubmissionSet].resource only
    IHE.MHD.Minimal.SubmissionSet
* entry[SubmissionSet] ^short = "the SubmissionSet"
* entry[SubmissionSet] ^definition = "The SubmissionSet defines who submitted it, why they submitted it, when they submitted, what is in it, and where it is destine."
* entry[SubmissionSet].resource 1..1
* entry[DocumentRefs].resource only 
    IHE.MHD.Minimal.DocumentReference
* entry[DocumentRefs] ^short = "the DocumentReference resources"
* entry[DocumentRefs] ^definition = "any new DocumentReference that are part of the SubmissionSet. These might be new or other associations."
* entry[DocumentRefs].resource 1..1
* entry[DocumentRefs].request 1..1
* entry[DocumentRefs].request.method from DSUBmPublishBundleActions
* entry[Folders].resource only 
    IHE.MHD.Minimal.Folder
* entry[Folders] ^short = "Folders"
* entry[Folders] ^definition = "any Folders being created or updated"
* entry[Folders].resource 1..1
* entry[Folders].request 1..1
* entry[Folders].request.method from DSUBmPublishBundleActions
* entry[Patient].resource ^type.code = "Patient"
* entry[Patient].resource ^type.profile = Canonical(Patient)
* entry[Patient] ^short = "the Patient"
* entry[Patient] ^definition = "the Patient"
* entry[Patient].resource 1..1
* entry[Patient].request.method from MHDprovidePatientActions

---

// File: input/fsh/HandshakeNotificationMessage.fsh

Profile:     HandshakeNotification
Parent:      Bundle
Id:          IHE.DSUBm.HandshakeNotification
Title:       "Handshake Notification Bundle"
Description: "Profile on the Bundle resource to enable R5-style topic-based subscription Handshake Notification."
* type = #history
* entry 1..1 
* entry.resource 1..1 MS
* entry.resource only SubscriptionStatus_Handshake
* obeys backport-notification-bundle-1
* entry.request.method = #GET 
* entry.request.url ^short = "SHALL be filled out to match a request to the $status operation for the Subscription relates to the notification"


Invariant:   backport-notification-bundle-1
Description: "A notification bundle REQUIRED have a Parameters as the first entry showing the status of the subscription related to the notification"
Expression:  "entry.first().resource.is(Parameters)"
Severity:    #error
XPath:       "f:entry[1]/f:resource/f:Parameters"

---

// File: input/fsh/HeartbeatNotification.fsh


Profile:     HeartbeatNotification
Parent:      Bundle
Id:          IHE.DSUBm.HeartbeatNotification
Title:       "Heartbeat Notification Bundle"
Description: "Profile on the Bundle resource to enable R5-style topic-based subscription Heartbeat Notification."
* type = #history
* entry 1..1 
* entry.resource 1..1 MS
* entry.resource only SubscriptionStatus_Heartbeat
* obeys backport-notification-bundle-1
* entry.request.method = #GET 
* entry.request.url ^short = "SHALL be filled out to match a request to the $status operation for the Subscription relates to the notification"



---

// File: input/fsh/Operation_events.fsh


Profile:     ResourceNotify_Events
Parent:      Bundle
Id:          IHE.DSUBm.EventsOperation-Bundle
Title:       "Bundle response for $events"
Description: "Profile on the Bundle resource for the response of $events operation."
* type = #history
* entry 0..*
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.ordered = false 
* entry ^slicing.description = "Slice based on resource"
* entry contains SubscriptionStatus 0..1 and 
    SubmissionSet 0..* and
    DocumentRefs 0..* and
    Folders 0..* and
    Patient 0..1 

* entry[SubscriptionStatus].resource only SubscriptionStatus_EventsOperation
* entry[SubscriptionStatus].request.method = #GET 
* entry[SubscriptionStatus].request.url ^short = "SHALL be filled out to match a request to the $status operation for the Subscription relates to the notification"
* entry[SubmissionSet].resource only SubmissionSet
* entry[SubmissionSet] ^short = "the SubmissionSet"
* entry[SubmissionSet] ^definition = "The SubmissionSet defines who submitted it, why they submitted it, when they submitted, what is in it, and where it is destine."
* entry[SubmissionSet].resource 1..1

* entry[DocumentRefs].resource only MinimalDocumentReference
* entry[DocumentRefs] ^short = "the DocumentReference resources"
* entry[DocumentRefs] ^definition = "any new DocumentReference that are part of the SubmissionSet. These might be new or other associations"
* entry[DocumentRefs].resource 1..1
* entry[DocumentRefs].request 1..1
* entry[DocumentRefs].request.method from DSUBmPublishBundleActions

* entry[Folders].resource only Folder
* entry[Folders] ^short = "Folders"
* entry[Folders] ^definition = "any Folders being created or updated"
* entry[Folders].resource 1..1
* entry[Folders].request 1..1
* entry[Folders].request.method from DSUBmPublishBundleActions

* entry[Patient].resource ^type.code = "Patient"
* entry[Patient].resource ^type.profile = Canonical(Patient)
* entry[Patient] ^short = "the Patient"
* entry[Patient] ^definition = "the Patient"
* entry[Patient].resource 1..1
* entry[Patient].request.method from MHDprovidePatientActions




---

// File: input/fsh/Operation_status.fsh



Profile:     ResourceNotify_Status
Parent:      Bundle
Id:          IHE.DSUBm.StatusOperation-Bundle
Title:       "Bundle response for $status"
Description: "Profile on the Bundle resource for the response of $status operation."
* type = #searchset
* entry 0..*
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.ordered = false 
* entry ^slicing.description = "Slice based on resource"
* entry contains SubscriptionStatus 0..* MS and OperationOutcome 0..* MS
* entry[SubscriptionStatus].resource only SubscriptionStatus_StatusOperation
//* entry[SubscriptionStatus].request.method = #GET 
//* entry[SubscriptionStatus].request.url ^short = "SHALL be filled out to match a request to the $status operation for the Subscription relates to the notification"





---

// File: input/fsh/ResourcePublish_Bundle.fsh

Profile: ResourcePublishBundle
Parent: Bundle
/*Parent:         IHE.MHD.Minimal.ProvideBundle*/
Id:             IHE.DSUBm.ResourceBundle
Title:          "Resource Publish Bundle"
Description:    "A profile for the Bundle used in the  ITI-111 Resource Publish transaction. This profile extends the MHD Minimal.ProvideBundle profile.
The DSUBm Actors SHOULD consider the following entry in the Bundle: 
- SubmissionSet
- DocumentRefs
- Folders
- Patient (if present)

and the update or delete of DocumentReference and/or Folders 
"

* meta.profile 1..*
* type = #transaction
* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[0].path = "resource"
* entry ^slicing.discriminator[1].type = #value
* entry ^slicing.discriminator[1].path = "request.method"
* entry ^slicing.rules = #closed
* entry ^slicing.description = "Slicing based on the profile conformance of the entry"
* entry and entry.resource MS
* entry contains 
    SubmissionSet 0..1 and
    DocumentRefs 0..* and
    Folders 0..* and
    Patient 0..1
* entry[SubmissionSet].resource only
    IHE.MHD.Minimal.SubmissionSet
* entry[SubmissionSet] ^short = "the SubmissionSet"
* entry[SubmissionSet] ^definition = "The SubmissionSet defines who submitted it, why they submitted it, when they submitted, what is in it, and where it is destine."
* entry[SubmissionSet].resource 1..1
* entry[SubmissionSet].request 1..1
* entry[SubmissionSet].request.method = #POST
* entry[DocumentRefs].resource only 
    IHE.MHD.Minimal.DocumentReference
* entry[DocumentRefs] ^short = "the DocumentReference resources"
* entry[DocumentRefs] ^definition = "any new DocumentReference that are part of the SubmissionSet. These might be new or other associations"
* entry[DocumentRefs].resource 1..1
* entry[DocumentRefs].request 1..1
* entry[DocumentRefs].request.method  from DSUBmPublishBundleActions
* entry[Folders].resource only 
    IHE.MHD.Minimal.Folder
* entry[Folders] ^short = "Folders"
* entry[Folders] ^definition = "any Folders being created or updated"
* entry[Folders].resource 1..1
* entry[Folders].request 1..1
* entry[Folders].request.method from DSUBmPublishBundleActions
* entry[Patient].resource ^type.code = "Patient"
* entry[Patient].resource ^type.profile = Canonical(Patient)
* entry[Patient] ^short = "the Patient"
* entry[Patient] ^definition = "the Patient"
* entry[Patient].resource 1..1
* entry[Patient].request.method from MHDprovidePatientActions


// added PUT e DELETE DocumentReference
//added DELETE Folder to Valueset 
ValueSet: DSUBmPublishBundleActions
Title: "DSUBm Update to document sharing resources actions ValueSet"
Description: "A ValueSet of the allowed actions in a ITI-111 Resource Publish for the Folder List type and the DocumentReference resources."
* ^experimental = false
* http://hl7.org/fhir/http-verb#POST
* http://hl7.org/fhir/http-verb#PUT
* http://hl7.org/fhir/http-verb#DELETE

---

// File: input/fsh/SearchParameters.fsh

// resource 
Instance: SubscriptionTopic-resource
InstanceOf: SearchParameter
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "https://profiles.ihe.net/ITI/DSUBm/SearchParameter/SubscriptionTopic-resource"
* version = "4.0.1"
* name = "Resource"
* status = #active
* experimental = false
* description = "Allowed resource for this definition"
* code = #resource
* base = #Basic
* type = #uri
* expression = "where(code.coding.exists(code = 'SubscriptionTopic' and system = 'http://hl7.org/fhir/fhir-types' )).select(extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.resourceTrigger').extension('resource').value | extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.canFilterBy').extension('resource').value | extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.notificationShape').extension('resource').value | extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.eventTrigger').extension('resource').value)"


//status
Instance: SubscriptionTopic-status
InstanceOf: SearchParameter
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "https://profiles.ihe.net/ITI/DSUBm/SearchParameter/SubscriptionTopic-status"
* version = "4.0.1"
* name = "Status"
* status = #active
* experimental = false
* description = "A server defined search that matches the url"
* code = #url
* base = #Basic
* type = #uri
* expression = "(extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.status').value.ofType(string))"

//url
Instance: SubscriptionTopic-url
InstanceOf: SearchParameter
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "https://profiles.ihe.net/ITI/DSUBm/SearchParameter/SubscriptionTopic-url"
* version = "4.0.1"
* name = "Url"
* status = #active
* experimental = false
* description = "A server defined search that matches the url"
* code = #url
* base = #Basic
* type = #uri
* expression = "(extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.url').value.ofType(uri))"

//derived-or-self
Instance: SubscriptionTopic-derived-or-self
InstanceOf: SearchParameter
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "https://profiles.ihe.net/ITI/DSUBm/SearchParameter/SubscriptionTopic-derived-or-self"
* version = "4.0.1"
* name = "DerivedOrSelf"
* status = #active
* experimental = false
* description = "A server defined search that matches the url or derivedFrom url"
* code = #derived-or-self
* base = #Basic
* type = #uri
* expression = "(extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.url').value.ofType(string)) | (extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.derivedFrom').value.ofType(string))"




---

// File: input/fsh/Subscription/Minimum_Subscriptions_for_DSUBm_profile/Subscription_DocumentReference_Basic.fsh

Profile: DSUBm_DocumentReference_PatientDependent_Subscription
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-DocumentReference-PatientDependent-Subscription
Title:       "Subscription for DocumentReference Patient-Dependent"
Description:  "Resource Subscription for DSUBm profile for DocumentReference with the indication of the patient
- the criteria element SHALL contain the URL of a canonical instance of SubscriptionTopic for the creation of DocumentReference Resources
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys DocumentReference-PatientDependent
* criteria.extension ^short = "The criteria.extension SHALL have at least one of the patient or patient.identifier parameter as a subscription criteria."
//* criteria = Canonical(DSUBm-SubscriptionTopic-DocumentReference-PatientDependent)
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocumentReference-PatientDependent"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload


//------------------

Profile: DSUBm_DocumentReference_MultiPatient_Subscription
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-DocumentReference-MultiPatient-Subscription
Title:       "Subscription for DocumentReference Multi-Patient"
Description:  "Resource Subscription for DSUBm profile for DocumentReference without the indication of the patient
- the criteria element SHALL contain the URL of an instance of SubscriptionTopic for the creation of DocumentReference Resources
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys DocumentReference-MultiPatient
* criteria.extension ^short = "The criteria.extension SHALL NOT have the patient or the patient.identifier parameter as a subscription criteria."
//* criteria = Canonical(DSUBm-SubscriptionTopic-DocumentReference-MultiPatient)
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocumentReference-MultiPatient"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload

---

// File: input/fsh/Subscription/Minimum_Subscriptions_for_DSUBm_profile/Subscription_SubmissionSet_Basic.fsh

Profile: DSUBm_SubmissionSet_PatientDependent_Subscription
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-SubmissionSet-PatientDependent-Subscription
Title:       "Subscription for SubmissionSet Patient-Dependent"
Description:  "Resource Subscription for DSUBm profile for SubmissionSet with the indication of the patient
- the criteria element SHALL contain the URL of an instance of SubscriptionTopic for the creation of SubmissionSet type List Resources
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys SubmissionSet-PatientDependent
* criteria.extension ^short = "The criteria.extension SHALL have at least one of the patient or patient.identifier parameter as a subscription criteria. The code parameter SHALL be used and SHALL indicates the List of type SubmissionSet."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-SubmissionSet-PatientDependent"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload




//----------------------------------


Profile: DSUBm_SubmissionSet_MultiPatient_Subscription
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription
Id: DSUBm-SubmissionSet-MultiPatient-Subscription
Title:       "Subscription for SubmissionSet Multi-Patient"
Description:  "Resource Subscription for DSUBm profile for SubmissionSet without the indication of the patient
- the criteria element SHALL contain the URL of an instance of SubscriptionTopic for the creation of SubmissionSet type List Resources
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys SubmissionSet-MultiPatient
* criteria.extension ^short = "The criteria.extension SHALL NOT have the patient or the patient.identifier parameter as a subscription criteria. The code parameter SHALL be used and SHALL indicates the List of type SubmissionSet."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-SubmissionSet-MultiPatient"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload

---

// File: input/fsh/Subscription/Subscriptions_for DocumentReference_Options/DocumentReference_Subscription_for_Full_Events_Option.fsh

Profile: DSUBm_DocumentReference_PatientDependent_Subscription_AllEvents
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-DocumentReference-PatientDependent-Subscription-AllEvents
Title:       "Subscription for DocumentReference Patient-Dependent with DocumentReference Subscription for Full Events Option"
Description:  "Resource Subscription for DSUBm profile for DocumentReference with the indication of the patient
- the criteria element SHALL contain the URL of a canonical instance of SubscriptionTopic for the creation, update or deletion of DocumentReference Resources
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys DocumentReference-PatientDependent
* criteria.extension ^short = "The criteria.extension SHALL have at least one of the patient or patient.identifier parameter as a subscription criteria."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-PatientDependent-AllEvents"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload


//------------------

Profile: DSUBm_DocumentReference_MultiPatient_Subscription_AllEvents
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-DocumentReference-MultiPatient-Subscription-AllEvents
Title:       "Subscription for DocumentReference Multi-Patient with DocumentReference Subscription for Full Events Option"
Description:  "Resource Subscription for DSUBm profile for DocumentReference without the indication of the patient
- the criteria element SHALL contain the URL of a canonical instance of SubscriptionTopic for the creation, update or deletion of DocumentReference Resources
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys DocumentReference-MultiPatient
* criteria.extension ^short = "The criteria.extension SHALL NOT have the patient or the patient.identifier parameter as a subscription criteria."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-MultiPatient-AllEvents"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload

---

// File: input/fsh/Subscription/Subscriptions_for DocumentReference_Options/DocumentReference_Subscription_for_Minimal_Update_Option.fsh

Profile: DSUBm_DocumentReference_PatientDependent_Subscription_MinUpdate
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-DocumentReference-PatientDependent-Subscription-MinUpdate
Title:       "Subscription for DocumentReference Patient-Dependent with DocumentReference Subscription for Minimal Update Option"
Description:  "Resource Subscription for DSUBm profile for DocumentReference with the indication of the patient
- the criteria element SHALL contain the URL of a canonical instance of SubscriptionTopic for creation, deletion and update only in the \"status\" of a DocumentReference
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys DocumentReference-PatientDependent
* criteria.extension ^short = "The criteria.extension SHALL have at least one of the patient or patient.identifier parameter as a subscription criteria."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-PatientDependent-MinUpdate"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload


//------------------

Profile: DSUBm_DocumentReference_MultiPatient_Subscription_MinUpdate
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-DocumentReference-MultiPatient-Subscription-MinUpdate
Title:       "Subscription for DocumentReference Multi-Patient with DocumentReference Subscription for Minimal Update Option"
Description:  "Resource Subscription for DSUBm profile for DocumentReference without the indication of the patient
- the criteria element SHALL contain the URL of a canonical instance of SubscriptionTopic for creation, deletion and update only in the \"status\" of a DocumentReference
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys DocumentReference-MultiPatient
* criteria.extension ^short = "The criteria.extension SHALL NOT have the patient or the patient.identifier parameter as a subscription criteria."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-DocReference-MultiPatient-MinUpdate"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload

---

// File: input/fsh/Subscription/Subscriptions_for Folder_Options/Basic_Folder_Subscription_Option.fsh

Profile: DSUBm_Basic_Folder_Subscription
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-Basic-Folder-Subscription
Title:       "Subscription for Folder Patient-Dependent with Basic Folder Subscription Option"
Description:  "Resource Subscription for DSUBm profile for Folder with the indication of the patient
- the criteria element SHALL contain the URL of a canonical instance of SubscriptionTopic for creation of a Folder type List Resource and the update to insert new documents in the Folder
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys Folder-PatientDependent
* criteria.extension ^short = "The criteria.extension SHALL have at least one of the patient or patient.identifier parameter as a subscription criteria. The code parameter SHALL be used and SHALL indicates the List of type Folder."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-Basic-Folder-Subscription"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload





---

// File: input/fsh/Subscription/Subscriptions_for Folder_Options/Folder_Subscription_for_Full_Events_Option.fsh

Profile: DSUBm_Folder_Subscription_for_Full_Events
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-Folder-Subscription-for-Full-Events
Title:       "Subscription for Folder Patient-Dependent with Folder Subscription for Full Events Option"
Description:  "Resource Subscription for DSUBm profile for Folder with the indication of the patient
- the criteria element SHALL contain the URL of a canonical instance of SubscriptionTopic for creation, update or deletion of a Folder type List Resource
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys Folder-PatientDependent
* criteria.extension ^short = "The criteria.extension SHALL have at least one of the patient or patient.identifier parameter as a subscription criteria. The code parameter SHALL be used and SHALL indicates the List of type Folder."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-Folder-Subscription-for-Full-Events"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload





---

// File: input/fsh/Subscription/Subscriptions_for Folder_Options/Folder_Subscription_for_Minimal_Update_Option.fsh

Profile: DSUBm_Folder_Subscription_MinUpdateOpt
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-Folder-Subscription-MinUpdateOpt
Title:       "Subscription for Folder Patient-Dependent with Folder Subscription for Minimal Update Option"
Description:  "Resource Subscription for DSUBm profile for Folder with the indication of the patient
- the criteria element SHALL contain the URL of a canonical instance of SubscriptionTopic for creation of a Folder type List Resource, the update to insert or remove documents in the Folder and the update of the status
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys Folder-PatientDependent
* criteria.extension ^short = "The criteria.extension SHALL have at least one of the patient or patient.identifier parameter as a subscription criteria. The code parameter SHALL be used and SHALL indicates the List of type Folder."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-Folder-Subscription-MinUpdateOpt"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload





---

// File: input/fsh/Subscription/Subscriptions_for Folder_Options/Folder_Subscription_for_Update_Option.fsh

Profile: DSUBm_Folder_Subscription_UpdateOpt
Parent: http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription 
Id: DSUBm-Folder-Subscription-UpdateOpt
Title:       "Subscription for Folder Patient-Dependent with Folder Subscription for Update Option"
Description:  "Resource Subscription for DSUBm profile for Folder with the indication of the patient
- the criteria element SHALL contain the URL of a canonical instance of SubscriptionTopic for creation or update of a Folder type List Resource
"
* criteria 1..1 
* criteria ^short = "Canonical URL for the SubscriptionTopic."
* criteria.extension obeys Folder-PatientDependent
* criteria.extension ^short = "The criteria.extension SHALL have at least one of the patient or patient.identifier parameter as a subscription criteria. The code parameter SHALL be used and SHALL indicates the List of type Folder."
* criteria = "https://profiles.ihe.net/ITI/DSUBm/SubscriptionTopic/DSUBm-SubscriptionTopic-Folder-Subscription-UpdateOpt"
* channel.type = #rest-hook 
* channel.endpoint 1..1 MS SU  
* channel.endpoint ^short = "The endpoint SHOULD be the endpoint that the Resource Notification Recipient is receiving the notifications."
* channel.payload from DSUBmPayload





---

// File: input/fsh/SubscriptionStatus/SubscriptionStatus.fsh

Profile:        SubscriptionStatus_NotificationEvent
Parent:         http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription-status-r4
Id:             IHE.DSUBm.SubscriptionStatus-Event
Title:          "SubscriptionStatus for the notification event"
Description:    "Profile on the SubscriptionStatus resource for the event notification"
* parameter[type].value[x] = #event-notification 
* parameter[eventsSinceSubscriptionStart] 1..1
* parameter[eventsSinceSubscriptionStart] ^short = "Servers SHALL include this value when sending event notifications in order to allow clients to detect missing events."
* parameter[eventsSinceSubscriptionStart].value[x] 1..1
* parameter[notificationEvent] 1..1
* parameter[notificationEvent] ^short = "Servers SHALL include this value when sending event notifications in order to allow clients to detect missing events. This value is inclusive of this notification (e.g., the first event notification sent would include one (1) in this element)."
//* parameter[notificationEvent].value[x] 1..1



Profile:        SubscriptionStatus_Handshake
Parent:         http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription-status-r4
Id:             IHE.DSUBm.SubscriptionStatus-Handshake
Title:          "SubscriptionStatus for the handshake event"
Description:    "Profile on the SubscriptionStatus resource to be used in the handshake notification"
* parameter[status].valueCode = #requested
* parameter[type].valueCode = #handshake

Profile:        SubscriptionStatus_Heartbeat
Parent:         http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription-status-r4
Id:             IHE.DSUBm.SubscriptionStatus-Heartbeat
Title:          "SubscriptionStatus for the heartbeat event"
Description:    "Profile on the SubscriptionStatus resource for the heartbeat notification"
* parameter[type].valueCode = #heartbeat

Profile:        SubscriptionStatus_Deactivation
Parent:         http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription-status-r4
Id:             IHE.DSUBm.SubscriptionStatus-Deactivation
Title:          "SubscriptionStatus for the Subscription Deactivation Notification event"
Description:    "Profile on the SubscriptionStatus resource the Subscription Deactivation Notification"
* parameter[status].valueCode = #off
* parameter[type].valueCode = #event-notification 


Profile:        SubscriptionStatus_StatusOperation
Parent:         http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription-status-r4
Id:             IHE.DSUBm.SubscriptionStatus-StatusOperation
Title:          "SubscriptionStatus for the status operation"
Description:    "Profile on the SubscriptionStatus resource for the $status operation"
* parameter[status] ^short = "Current status of the relevant subscription"
* parameter[type].valueCode = #query-status
* parameter[eventsSinceSubscriptionStart] 1..1
* parameter[eventsSinceSubscriptionStart].value[x] ^short = "This value is REQUIRED because clients MAY use it to know if there are missing notifications. Note: this value SHALL NOT be incremented by sending a query-status notification."
//* parameter[eventsSinceSubscriptionStart].value[x] 0..1
* parameter[notificationEvent] 0..0



Profile:        SubscriptionStatus_EventsOperation
Parent:         http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription-status-r4
Id:             IHE.DSUBm.SubscriptionStatus-EventsOperation
Title:          "SubscriptionStatus for the $events operation"
Description:    "Profile on the SubscriptionStatus resource for the $events operation"
* parameter[status] ^short = "recommended. SHOULD be valued with the current status of the relevant subscription"
* parameter[type].valueCode = #query-event
* parameter[eventsSinceSubscriptionStart] 0..1
* parameter[eventsSinceSubscriptionStart].value[x] ^short = "recommended. This value is allows clients to know if they are missing notifications. Note: this value SHALL NOT be incremented by sending a query-event bundle."
* parameter[notificationEvent] 1..*
* parameter[notificationEvent].part[eventTimestamp].value[x] 0..1 
//* parameter[notificationEvent].part[eventTimestamp].value[x] ^short = "RECOMMENDED so that clients can discover when an event actually occurred, timestamp is recommended."



---

// File: input/images-source/ActorsAndTransactions.plantuml

@startuml
agent "Resource Notification Publisher" as Publisher
agent "Resource Notification Broker" as Broker
agent "Resource Notification Subscriber" as Subscriber
agent "Resource Notification Recipient" as Recipient

Publisher --> Broker : "Resource Publish [ITI-111]"
Subscriber --> Broker : "Resource Subscription [ITI-110]"
Subscriber --> Broker : "Resource Subscription Search [ITI-113]"
Subscriber --> Broker : "Resource SubscriptionTopic Search [ITI-114]"
Broker --> Recipient : "Resource Notify [ITI-112]"
@enduml


---

// File: input/images-source/ITI-110-seq.plantuml

@startuml
hide footbox
participant "Resource Notification Subscriber" as  Subscriber
participant "Resource Notification Broker" as  Broker


== Subscribe ==
Subscriber -> Broker : [[ITI-110.html#2311041-create-subscription-request-message Create Subscription Request Message]]
activate Broker
alt if successfully evaluated
Broker --> Subscriber : [[ITI-110.html#2311042-create-subscription-response-message Create Subscription Response Message]]
else if unsuccessfully evaluated
Broker --> Subscriber : [[ITI-110.html#2311045-subscription-error-response-message Subscription Error Response Message]]
deactivate Broker
end

== Update ==
Subscriber -> Broker: [[ITI-110.html#2311043-update-subscription-request-message Update Subscription Request Message]]
activate Broker
alt if successfully evaluated
Broker --> Subscriber: [[ITI-110.html#2311044-update-subscription-response-message Update Subscription Response Message]]
else if unsuccessfully evaluated
Broker --> Subscriber : [[ITI-110.html#2311045-subscription-error-response-message Subscription Error Response Message]]
deactivate Broker
end

@enduml


---

// File: input/images-source/ITI-111-Publish-seq.plantuml

@startuml
hide footbox

participant "Resource Notification Publisher" as  Publisher
participant "Resource Notification Broker" as  Broker



Publisher -> Broker : [[ITI-111.html#2311141-resource-publish-request-message Resource Publish Request Message]]
activate Broker
Broker --> Publisher : [[ITI-111.html#2311142-resource-publish-response-message Resource Publish Response Message]]
deactivate Broker

@enduml

---

// File: input/images-source/ITI-112-Notification-seq.plantuml

@startuml
hide footbox

participant "Resource Notification Broker" as  Broker
participant "Resource Notification Recipient" as  Recipient

== Handshake Notification ==
Broker -> Recipient : [[ITI-112.html#2311241-handshake-notification-request-message Handshake Notification Request Message]]
activate Recipient
Recipient --> Broker : [[ITI-112.html#2311242-handshake-notification-response-message Handshake Notification Response Message]]
deactivate Recipient

== Heartbeat Notification ==
Broker -> Recipient : [[ITI-112.html#2311243-heartbeat-notification-request-message Heartbeat Notification Request Message]] 
activate Recipient
Recipient --> Broker : [[ITI-112.html#2311244-heartbeat-notification-response-message Heartbeat Notification Response Message]] 
deactivate Recipient

== Event Notification ==
Broker -> Recipient :  [[ITI-112.html#2311245-event-notification-request-message Event Notification Request Message]]
activate Recipient
Recipient --> Broker :  [[ITI-112.html#2311246-event-notification-response-message Event Notification Response Message]]
deactivate Recipient

== Subscription Deactivation Notification ==
Broker -> Recipient :  [[ITI-112.html#2311247-subscription-deactivation-notification-request-message Subscription Deactivation Notification Request Message]]
activate Recipient
Recipient --> Broker : [[ITI-112.html#2311248-subscription-deactivation-notification-response-message Subscription Deactivation Notification Response Message]]
deactivate Recipient

@enduml

---

// File: input/images-source/ITI-113-Subscription-seq.plantuml

@startuml
hide footbox
participant "Resource Notification Subscriber" as  Subscriber
participant "Resource Notification Broker" as  Broker


== Subscription Search ==
Subscriber -> Broker :  [[ITI-113.html#2311341-subscription-search-request-message Subscription Search Request Message]] 
activate Broker
Broker --> Subscriber : [[ITI-113.html#2311342-subscription-search-response-message Subscription Search Response Message]] 
deactivate Broker

== Subscription Status Search ==
Subscriber -> Broker : [[ITI-113.html#2311343-subscription-status-search-request-message Subscription Status Search Request Message]] 
activate Broker
Broker --> Subscriber : [[ITI-113.html#2311344-subscription-status-search-response-message Subscription Status Search Response Message]] 
deactivate Broker

== Subscription Events Search ==
Subscriber -> Broker : [[ITI-113.html#2311345-subscription-events-search-request-message Subscription Events Search Request Message]] 
activate Broker
Broker --> Subscriber : [[ITI-113.html#2311346-subscription-events-search-response-message Subscription Events Search Response Message]] 
deactivate Broker

== Subscription Read ==
Subscriber -> Broker : [[ITI-113.html#2311347-subscription-read-request-message Subscription Read Request Message]] 
activate Broker
Broker --> Subscriber : [[ITI-113.html#2311348-subscription-read-response-message Subscription Read Response Message]] 

deactivate Broker

@enduml


---

// File: input/images-source/ITI-114-SubscriptionTopic-seq.plantuml

@startuml
hide footbox
participant "Resource Notification Subscriber" as  Subscriber
participant "Resource Notification Broker" as  Broker



== SubscriptionTopic Search ==
Subscriber -> Broker : 1. [[ITI-114.html#2311441-resource-subscriptiontopic-search-request-message Resource SubscriptionTopic Search Request Message]]
activate Broker
Broker --> Subscriber : 2. [[ITI-114.html#2311442-resource-subscriptiontopic-search-response-message Resource SubscriptionTopic Search Response Message]]
deactivate Broker

== SubscriptionTopic Read ==

Subscriber -> Broker : 1. [[ITI-114.html#2311443-subscriptiontopic-read-request-message SubscriptionTopic Read Request Message]]
activate Broker
Broker --> Subscriber : 2. [[ITI-114.html#2311444-subscriptiontopic-read-response-message SubscriptionTopic Read Response Message]]
deactivate Broker
@enduml


---

// File: input/images-source/model_DSUB.plantuml

@startuml
skinparam svgDimensionStyle false
skinparam componentStyle rectangle

hide footbox
/' title "DSUBm grouped with DSUB: Notification Manager" '/

card "XDS Document Source" as Source
card "XDS Document Repository" as Repo

card  Central [
  <b>Central Infrastructure
  ----
  XDS Docment Registry
  ....
  DSUB Document Metadata Publisher
]

card Broker [
  <b>Notification Manager
  ----
  DSUB Document Metadata Notification Broker
  ....
  DSUBm Resource Notification Broker
]

card Subscriber [
  <b>Subscriber
  ----
  DSUB Document Metadata Subscriber
  ....
  DSUBm Resource Notification Subscriber
]

card "DSUB Document Metadata Notification Recipient" as DSUB_Recipient 



Subscriber -l-> Broker: ITI-113
Subscriber -l-> Broker: ITI-52


Source -u-> Repo: ITI-41
Repo -r-> Central: ITI-42
Central -d-> Broker: ITI-54
Broker-d-> DSUB_Recipient: ITI-53
@enduml

---

// File: input/images-source/model_DSUBonFHIR.plantuml

@startuml
skinparam svgDimensionStyle false
skinparam componentStyle rectangle

hide footbox
/' title "DSUBm grouped with DSUB: DSUB on FHIR" '/

card "XDS Document Source" as Source
card "XDS Document Repository" as Repo

card  Central [
  <b>Central Infrastructure
  ----
  XDS Document Registry
  ....
  DSUB Document Metadata Publisher
]

card "DSUB Document Metadata Notification Broker" as Broker 

card  DSUBFHIR [
  <b>DSUB/FHIR interface
  ----
DSUB Document Metadata Subscriber
....
DSUB Document Metadata Notification Recipient
....
DSUBm Resource Notification Broker
]

card "DSUBm Resource Notification Subscriber" as Subsciber 
card "DSUBm Resource Notification Recipient" as Recipient 

Subsciber -u-> DSUBFHIR: ITI-110
DSUBFHIR -d-> Broker: ITI-52

Source -u-> Repo: ITI-41
Repo -r-> Central: ITI-42
Central -d-> Broker: ITI-54

Broker-r->DSUBFHIR: ITI-53
DSUBFHIR -d-> Recipient: ITI-112



@enduml

---

// File: input/images-source/model_MHD.plantuml

@startuml
skinparam svgDimensionStyle false
skinparam componentStyle rectangle



hide footbox
/' title "DSUBm grouped with MHD grouping 1" '/


card "XDS Document Repository" as XDS_Repo 
card "Document Administrator" as DOC_Administrator
card  Registry [
  <b> Document Registry
  ----
  XDS Document Registry 
  ....
  DSUBm Resource Notification  Publisher
]
card "DSUBm Resource Notification Broker" as DSUBm_Broker
card "DSUBm Resource Notification Subscriber" as DSUBm_Subscriber


card  Consumer_XDS[
  <b>XDS Document Consumer System
  ----
  XDS Document Consumer
  ....
  DSUBm Resource Notification Recipient
]

card  Consumer_MHD[
  <b>MHD Document Consumer System
  ----
  MHD Document Consumer
  ....
  DSUBm Resource Notification Recipient
  ....
  DSUBm Resource Notification Subscriber
]


DOC_Administrator --> Registry: ITI-57
DOC_Administrator --> Registry: ITI-62

XDS_Repo -d-> Registry: ITI-42
Registry -d-> DSUBm_Broker: ITI-111
Consumer_MHD -l-> DSUBm_Broker: ITI-110
DSUBm_Subscriber -r-> DSUBm_Broker: ITI-110
DSUBm_Broker -r-> Consumer_MHD: ITI-112
DSUBm_Broker --> Consumer_XDS: ITI-112
/'
card  ConsumerInterface [
  <b> MHD to XDS Consumer Interface
  ----
  MHD Document Recipient
  ....
  XDS Document Consumer 
]
Consumer -u-> ConsumerInterface: ITI-68
ConsumerInterface --> XDS_Repo: ITI-43
ConsumerInterface --> Registry: ITI-18
'/

@enduml

---

// File: input/images-source/model_MHD2.plantuml

@startuml
skinparam svgDimensionStyle false
skinparam componentStyle rectangle



hide footbox
/' title "DSUBm grouped with MHD grouping 2" '/


card "XDS Document Repository" as XDS_Repo 
card "Document Administrator" as DOC_Administrator
card  Registry [
  <b> Document Registry
  ----
  XDS Document Registry 
  ....
  DSUBm Resource Notification  Broker
]
card "DSUBm Resource Notification Recipient" as DSUBm_Recipient


card  Consumer_XDS[
  <b>XDS Document Consumer System
  ----
  XDS Document Consumer
  ....
  DSUBm Resource Notification Subscriber
]



DOC_Administrator --> Registry: ITI-57
DOC_Administrator --> Registry: ITI-62

XDS_Repo -d-> Registry: ITI-42

Consumer_XDS -u-> Registry: ITI-110
Registry -r-> DSUBm_Recipient: ITI-112

@enduml

---

// File: input/images-source/model_MHDS.plantuml

@startuml
skinparam svgDimensionStyle false
skinparam componentStyle rectangle

hide footbox
/' title "DSUBm grouped with MHDS grouping 1" '/


card "DSUBm Resource Notification Subscriber" as DSUBm_Subsciber 
card "DSUBm Resource Notification Broker" as DSUBm_Broker

card  Registry [
  <b>MHDs Document Registry
  ----
  MHD Document Responder
  ....
  MHD Document Recipient
  ....
  DSUBm Resource Notification Publisher
]

card Publisher [
  <b>Document Publisher System
  ----
  MHD Document Source
]

card  Consumer [
  <b>Document Consumer System
  ----
  MHD Document Consumer
  ....
  DSUBm Resource Notification Recipient
]


Publisher -r-> Registry: ITI-65
Registry -d->DSUBm_Broker: ITI-111
DSUBm_Subsciber -u-> DSUBm_Broker: ITI-110
DSUBm_Broker -r-> Consumer : ITI-112


@enduml

---

// File: input/images-source/model_MHDS2.plantuml

@startuml
skinparam svgDimensionStyle false
skinparam componentStyle rectangle

hide footbox
/' title "DSUBm grouped with MHDS  grouping 2 " '/


card "DSUBm Resource Notification Recipient" as DSUBm_Recipient


card  Registry [
  <b>MHDs Document Registry
  ----
  MHD Document Responder
  ....
  MHD Document Recipient
  ....
  DSUBm Resource Notification Broker
]

card Publisher [
  <b>Document Publisher System
  ----
  MHD Document Source
]

card  Consumer [
  <b>Document Consumer System
  ----
  MHD Document Consumer
  ....
  DSUBm Resource Notification Subscriber
]


Publisher -r-> Registry: ITI-65
Consumer -l-> Registry: ITI-110
Registry -d->DSUBm_Recipient: ITI-112

@enduml

---

// File: input/images-source/usecase1-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox

/'title "Subscription with DSUBm on MHDs infrastructure: Laboratory Results and ePrescription"'/
participant HospitalEHR [
    =Hospital EHR
    ----
    [MHD Document Source]
    [DSUBm Resource Notification Subscriber]
    [DSUBm Resource Notification Recipient]
    [MHD Document Consumer]
] 

participant MHDsDocumentRegistry [
    =Central Infrastructure
    ----
    [MHDs Document Registry]
    [DSUBm Resource Notification Broker]
    ] 


participant LaboratorySystem [
    =Laboratory System
    ----
    [MHD Document Source]
] 

participant NurseTablet [
    =Nurse Tablet
    ----
    [DSUBm Resource Notification Subscriber]
    [DSUBm Resource Notification Recipient]
    [MHD Document Consumer]
] 
autonumber "<b>"
NurseTablet -> MHDsDocumentRegistry:   Resource Subscription [ITI-110]
activate MHDsDocumentRegistry
deactivate MHDsDocumentRegistry
autonumber stop
HospitalEHR --> LaboratorySystem:  Laboratory Order Request
autonumber 2 "<b>"
HospitalEHR -> MHDsDocumentRegistry:  Resource Subscription [ITI-110]
activate MHDsDocumentRegistry
deactivate MHDsDocumentRegistry




LaboratorySystem -> MHDsDocumentRegistry: Provide Document Bundle [ITI-65]
activate MHDsDocumentRegistry

MHDsDocumentRegistry -> HospitalEHR : Resource Notify [ITI-112]
activate HospitalEHR
HospitalEHR -> MHDsDocumentRegistry:  Retrieve Document [ITI-68]
deactivate MHDsDocumentRegistry
HospitalEHR -> MHDsDocumentRegistry: Provide Document Bundle [ITI-65]
deactivate HospitalEHR

activate MHDsDocumentRegistry
MHDsDocumentRegistry -> NurseTablet : Resource Notify [ITI-112]
deactivate MHDsDocumentRegistry
activate NurseTablet
NurseTablet -> MHDsDocumentRegistry: Retrieve Document [ITI-68]
activate MHDsDocumentRegistry
deactivate MHDsDocumentRegistry
autonumber stop
NurseTablet -> NurseTablet: proceed with medication administration
deactivate NurseTablet

autonumber 9 "<b>"
group Unsubscribe
  HospitalEHR ->MHDsDocumentRegistry: Resource Subscription [ITI-110]
  activate MHDsDocumentRegistry
  deactivate MHDsDocumentRegistry
  
end

@enduml


---

// File: input/images-source/usecase2-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
/'title "Folder Subscription with DSUBm on MHDs infrastructure" '/

participant DHR [
    = Diabetological Healthcare Record
    ----
    [MHD Document Consumer]
    [DSUBm Resource Notification Subscriber]
    [DSUBm Resource Notification Recipient]
] 



participant Central [
    =Electronic Healthcare Record
    ----
    [MHDs Document Registry]
    [DSUBm Resource Notification Broker]
] 

participant ER [
    =Emergency Room
    ----
    [MHD Document Source]
] 




DHR -> DHR: First visit (therapy A)
autonumber "<b>"
activate DHR
DHR -> Central: Resource SubscriptionTopic Search [ITI-114]
DHR -> Central: Resource Subscription [ITI-110]
deactivate DHR
ER->Central:  Provide Document Bundle [ITI-65]
activate Central 
Central -> DHR: Resource Notify [ITI-112]
deactivate Central
activate DHR

DHR -> Central: Retrieve Document [ITI-68]
activate Central
deactivate DHR 
deactivate Central


DHR -> DHR: Second visit (therapy B)
ER->Central:  Provide Document Bundle [ITI-65]
activate Central 
Central -> DHR: Resource Notify [ITI-112]
deactivate Central
activate DHR

DHR -> Central: Retrieve Document [ITI-68]

activate Central
deactivate DHR 
deactivate Central

autonumber stop 
DHR -> DHR: Third visit. (Unsubscribe)
activate DHR
autonumber 10 "<b>"
DHR -> Central: Resource Subscription Search [ITI-113]
DHR -> Central: Resource Subscription [ITI-110]	
deactivate DHR

@enduml

---

// File: input/images-source/usecase3-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
/'title "Subscription with DSUBm on MHD on FHIR infrastructure from Mobile Device" '/

participant Repository [
    =Integrated Document Source Repository
    ----
    [XDS Document Source]
    [XDS Document Repository]  
] 

participant Central [
    =Central Infrastructure
    ----
    [XDS Document Registry]
    [DSUBm Resource Notification Publisher]
] 

participant Broker [
    =Notification Broker
    ----
    [DSUBm Resource Notification Broker]
] 

participant XDSonFHIR [
    =XDS FHIR Interface
    ----
    [XDS Document Consumer]
    [MHD Document Responder]
] 

participant MobileDevice [
    =Mobile Device
    ----
    [MHD Document Consumer]
    [DSUBm Resource Notification Subscriber]
    [DSUBm Resource Notification Recipient]
] 
autonumber 1 "<b>"
MobileDevice -> Broker: Resource Subscription [ITI-110]
activate Central
deactivate Central

Repository -> Central: Register Document Set-b [ITI-42]
activate Central
Central -> Broker :  Resource Publish [ITI-111]
deactivate Central
activate Broker
Broker -> MobileDevice: Resource Notify [ITI-112]
deactivate Broker

activate MobileDevice
MobileDevice -> XDSonFHIR: Retrieve Document [ITI-68]
activate XDSonFHIR
XDSonFHIR -> Repository: Retrieve Document Set [ITI-43]
activate Repository
deactivate XDSonFHIR
deactivate Repository
MobileDevice -> MobileDevice: prepare the ePrescription\nto be used in the local pharmacy
deactivate MobileDevice


@enduml

---

// File: input/images-source/usecase4-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
/'title "Subscription with DSUBm on DSUB on FHIR infrastructure from Mobile Device" '/
participant Repository [
    =Integrated Document Source Repository
    ----
    [XDS Document Source]
    [XDS Document Repository]  
] 

participant Central [
    =Central Infrastructure
    ----
    [XDS Document Registry]
    [DSUB Document Metadata Broker]
    [XDS Document Consumer]
    [MHD Document Responder]
] 

participant DSUBonFHIR [
    =DSUB/FHIR Interface
    ----
    [DSUB Document Metadata Subscriber]
    [DSUB Document Metadata Notification Recipient]
    [DSUBm Resource Notification Broker]
    ] 

participant MobDevice [
    =Mobile Device
    ----
    [DSUBm Resource Notification Subscriber]
    [DSUBm Resource Notification Recipient]
    [MHD Document Consumer]
] 

autonumber 1 "<b>"
MobDevice -> DSUBonFHIR: Resource Subscription [ITI-110]
activate DSUBonFHIR
DSUBonFHIR -> Central: Document Metadata Subscribe [ITI-52]
activate Central
deactivate Central
deactivate DSUBonFHIR

Repository -> Central: Register Document Set-b [ITI-42]
activate Central

Central -> DSUBonFHIR: Document Metadata Notify [ITI-53]
deactivate Central

activate DSUBonFHIR
DSUBonFHIR -> MobDevice: Resource Notify [ITI-112]
deactivate DSUBonFHIR
activate MobDevice
MobDevice -> Central: Retrieve Document [ITI-68]
activate Central
Central -> Repository: Retrieve Document Set [ITI-43]
activate Repository
deactivate Repository
deactivate Central
MobDevice -> MobDevice: review the appointment data
deactivate MobDevice


@enduml

---

// File: input/images-source/usecase5-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
/'title "Subscription with DSUBm on DSUB infrastructure from Mobile Device" '/


participant Repository [
    =Integrated Document Source Repository
    ----
    [XDS Document Source]
    [XDS Document Repository]  
] 

participant Central [
    =Central Infrastructure
    ----
    [XDS Document Registry]
    [DSUBm Resource Notification Publisher]
    [XDS Document Consumer]
    [MHD Document Responder]
] 

participant Broker [
    =Notification Manager
    ----
    [DSUBm Resource Notification Broker]
] 


participant MobDevice [
    =Mobile Alert System 
    ----
    [DSUBm Resource Notification Subscriber]
    [DSUBm Resource Notification Recipient] 
    [MHD Document Consumer]
    [mACM Alert Reporter]
] 

participant Device [
    =Mobile Device
    ----
    [mACM Alert Aggregator]
] 

autonumber "<b>"
MobDevice -> Broker: Resource Subscription [ITI-110]
activate Broker
deactivate Broker
Repository -> Central: Register Document Set-b [ITI-42]
activate Central
Central -> Broker:  Document Metadata Publish [ITI-54]
deactivate Central
activate Broker
autonumber stop 
Broker -> Broker: internal logic\ntransalte into a mobile publication event
autonumber 4 "<b>"
Broker  -> MobDevice: Mobile Notify [ITI-112]
deactivate Broker

activate MobDevice
MobDevice -> Central: Retrieve Document [ITI-68]
activate Central
Central -> Repository: Retrieve Document Set [ITI-43]
activate Repository
deactivate Repository
deactivate Central
MobDevice -> Device: Mobile Report Alert [ITI-84]
deactivate MobDevice

group Update Subscription
  autonumber stop
  autonumber 8 "<b>"
  MobDevice -> Broker: a. Resource Subscription [ITI-110] (unsubscribe)
  activate Broker
  deactivate Broker
  autonumber 8 "<b>"
  MobDevice -> Broker: b. Resource Subscription [ITI-110] (subscribe)
  activate Broker
  deactivate Broker
end  

@enduml

---

// File: input/images-source/usecase6-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox

/'title "Subscription with DSUBm on XDS on FHIR infrastructure with update "'/

participant Source [
    =Radiographic System
    ----
    [XDS Document Source]
] 

participant Registry [
    =Central Infrastructure
    ----
    [XDS Document Registry]
    [XDS Document Repository]
    [DSUBm Resource Notification Publisher]
    ] 

participant Broker [
    =Notification Broker
    ----
    [DSUBm Resource Notification Broker]
] 

participant XDSonFHIR [
    =XDS FHIR Interface
    ----
    [XDS Document Consumer]
    [MHD Document Responder]
] 


participant App [
    = Mobile Device
    ----
    [DSUBm Resource Notification Subscriber]
    [DSUBm Resource Notification Recipient]
    [MHD Document Consumer]
] 

autonumber "<b>"
App -> Broker: Resource Subscription [ITI-110]
activate Broker
deactivate Broker

Source -> Registry: Provide Document Set-b [ITI-41]
activate Registry
Registry -> Broker: Resource Publish [ITI-111]
deactivate Registry
activate Broker
Broker -> App: Resource Notify [ITI-112]
deactivate Broker
activate App 
deactivate Broker
App -> XDSonFHIR: Retrieve Document [ITI-68]
activate XDSonFHIR
XDSonFHIR -> Registry: Retrieve Document Set [ITI-43]
activate Registry
deactivate XDSonFHIR
deactivate Registry
App -> App: Noticed anomaly in metadata
deactivate App


Source ->Registry: Update Document Set [ITI-57]
activate Registry
Registry -> Broker: Resource Publish [ITI-111]
deactivate Registry
activate Broker
Broker -> App: Resource Notify [ITI-112]
deactivate Broker



@enduml

---

// File: input/images-source/usecase7-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
/'title "Subscription with DSUBm on MHD on FHIR infrastructure from Mobile Device" '/

participant Repository [
    =Integrated Document Source Repository
    ----
    [XDS Document Source]
    [XDS Document Repository] 
    [XDS Document Administrator]   
] 

participant Central [
    =Central Infrastructure
    ----
    [XDS Document Registry]
    [DSUBm Resource Notification Publisher]
] 

participant Broker [
    =Notification Broker
    ----
    [DSUBm Resource Notification Broker]
] 

participant XDSonFHIR [
    =XDS FHIR Interface
    ----
    [XDS Document Consumer]
    [MHD Document Responder]
] 

participant MobileDevice [
    =Mobile Device
    ----
    [MHD Document Consumer]
    [DSUBm Resource Notification Subscriber]
    [DSUBm Resource Notification Recipient]
] 
autonumber 1 "<b>"
MobileDevice -> Central: Resource Subscription [ITI-110]
activate Central
deactivate Central


Repository -> Central: Register Document Set-b [ITI-42]
activate Central
Central -> Broker :  Resource Publish [ITI-111]
deactivate Central

Repository -> Central: Update Document Set [ITI-57]
activate Central
Central -> Broker :  Resource Publish [ITI-111]
deactivate Central
activate Broker
Broker -> MobileDevice: Resource Notify [ITI-112]
deactivate Broker
activate MobileDevice
MobileDevice -> XDSonFHIR: Retrieve Document [ITI-68]
activate XDSonFHIR
XDSonFHIR -> Repository: Retrieve Document Set [ITI-43]
activate Repository
deactivate XDSonFHIR
deactivate Repository
MobileDevice -> MobileDevice: Report view
deactivate MobileDevice


@enduml

---

// File: input/images-source/usecase8-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
/' title "patientDependent Subscription" '/

participant Source [
 = Laboratory Information System
 ----
 [XDS Document Source] 
]

participant Central [
  =Central Infrastructure
  ----
  [XDS Document Registry]
  [XDS Document Repository]
  [DSUB Document Metadata Publisher]
]

participant Broker [
 = DSUB Broker
 ----
 [DSUB Document Metadata Subscriber]
]

participant DSUBFHIR [
  =DSUB/FHIR interface
  ----
  [DSUB Document Metadata Subscriber]
  [DSUB Document Metadata Notification Recipient]
  [DSUBm Resource Notification Broker]
]

participant Subscriber [
  = EMR app
  ----
  [DSUBm Resource Notification Subscriber]
  [DSUBm Resource Notification Recipient]
  [XDS Document Consumer]
] 



autonumber "<b>"
Subscriber -> DSUBFHIR: Resource Subscription [ITI-110]
activate DSUBFHIR

DSUBFHIR -> Broker:Document Metadata Subscribe [ITI-52]
deactivate DSUBFHIR
activate Broker



Source -> Central: Provide and Register Document Set-b [ITI-41] 
deactivate Broker
deactivate Broker
activate Central


Central -> Broker: Document Metdata Publish [ITI-54]
deactivate Central
activate Broker 


Broker -> DSUBFHIR: Document Metdata Notify [ITI-53]
deactivate Broker
activate DSUBFHIR


DSUBFHIR ->Subscriber: Resource Notify [ITI-112]
deactivate DSUBFHIR

Subscriber --> Subscriber: Dr. Brown access to his System
Activate Subscriber
Subscriber -> Central: Registry Stored Query [ITI-18]
activate Central
Subscriber -> Central: Retrieve Document Set-b [ITI-43]
deactivate Central
deactivate Subscriber
@enduml

---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/ITI.DSUBm/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/ITI.DSUBm/issues

---

// File: input/fsh/Examples/ex-Audit-iti-110.fsh

//iti-110
//create
//subscriber patient
Instance: ex-resorceSubscription-subscriber-create-patientDep
InstanceOf: AuditCreateResourceSubscriptionPatientSubscriber
Title: "Audit Example of ITI-110 at Subscriber for Create Interaction when patient-dependent"
Description: "Audit Example for a Resource Subscription Transaction for Create Interaction from Subscriber perspective when patient-dependent"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(Subscription/ex-DocumentReference-PatientDependent-Subscription)

//subscriber no patient
Instance: ex-resorceSubscription-subscriber-create-multiPat
InstanceOf: AuditCreateResourceSubscriptionSubscriber
Title: "Audit Example of ITI-110 at Subscriber for Create Interaction when multi-patient"
Description: "Audit Example for a Resource Subscription Transaction for Create Interaction from Subscriber perspective when multi-patient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(Subscription/ex-DocumentReference-MultiPatient-Subscription)

//broker patient
Instance: ex-resorceSubscription-broker-create-patientDep
InstanceOf: AuditCreateResourceSubscriptionPatientBroker
Title: "Audit Example of ITI-110 for Create Interaction at Broker when patient-dependent"
Description: "Audit Example for a Resource Subscription Transaction for Create Interaction from Broker perspective when patient-dependent"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(Subscription/ex-DocumentReference-PatientDependent-Subscription)


//broker NO patient
Instance: ex-resorceSubscription-broker-create-multiPat
InstanceOf: AuditCreateResourceSubscriptionBroker
Title: "Audit Example of ITI-110 for Create Interaction at Broker when multi patient"
Description: "Audit Example for a Resource Subscription Transaction for Create Interaction from Broker perspective when multi patient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(Subscription/ex-DocumentReference-MultiPatient-Subscription)

// update
//create
//subscriber patient
Instance: ex-resorceSubscription-subscriber-update-patientDep
InstanceOf: AuditUpdateResourceSubscriptionPatientSubscriber
Title: "Audit Example of ITI-110 at Subscriber for update Interaction when patient-dependent"
Description: "Audit Example for a Resource Subscription Transaction for update Interaction from Subscriber perspective when patient-dependent"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(Subscription/ex-DocumentReference-PatientDependent-Subscription)

//subscriber no patient
Instance: ex-resorceSubscription-subscriber-update-multiPat
InstanceOf: AuditUpdateResourceSubscriptionSubscriber
Title: "Audit Example of ITI-110 at Subscriber for update Interaction when multi-patient"
Description: "Audit Example for a Resource Subscription Transaction for update Interaction from Subscriber perspective when multi-patient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(Subscription/ex-DocumentReference-MultiPatient-Subscription)

//broker patient
Instance: ex-resorceSubscription-broker-update-patientDep
InstanceOf: AuditUpdateResourceSubscriptionPatientBroker
Title: "Audit Example of ITI-110 for update Interaction at Broker when patient-dependent"
Description: "Audit Example for a Resource Subscription Transaction for update Interaction from Broker perspective when patient-dependent"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(Subscription/ex-DocumentReference-PatientDependent-Subscription)


//broker NO patient
Instance: ex-resorceSubscription-broker-update-multiPat
InstanceOf: AuditUpdateResourceSubscriptionBroker
Title: "Audit Example of ITI-110 for update Interaction at Broker when multi patient"
Description: "Audit Example for a Resource Subscription Transaction for update Interaction from Broker perspective when multi patient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyUpdate] = http://hl7.org/fhir/restful-interaction#update "update"
* subtype[iti110] = urn:ihe:event-type-code#ITI-110 "Resource Subscription"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[data].what = Reference(Subscription/ex-DocumentReference-MultiPatient-Subscription)



---

// File: input/fsh/Examples/ex-Audit-iti-111.fsh

//iti-111

Instance: ex-AuditResourcePublishPublisher
InstanceOf: AuditResourcePublishPublisher
Title: "Audit Example of ITI-111 at Publisher"
Description: "Audit Example for a Resource Publish Transaction from Publisher perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
* subtype[iti111] = urn:ihe:event-type-code#ITI-111 "Resource Publish"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
//reference da sistemare
* entity[data].what = Reference(Bundle/ex-ResourcePublish)



Instance: ex-AuditResourcePublishBroker
InstanceOf: AuditResourcePublishBroker
Title: "Audit Example of ITI-111 at Broker"
Description: "Audit Example for a Resource Publish Transaction from Broker perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
* subtype[iti111] = urn:ihe:event-type-code#ITI-111 "Resource Publish"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
//reference da sistemare
* entity[data].what = Reference(Bundle/ex-ResourcePublish)


---

// File: input/fsh/Examples/ex-Audit-iti-112.fsh

//iti-112

Instance: ex-AuditCreateResourceNotifyRecipient
InstanceOf: AuditCreateResourceNotifyRecipient
Title: "Audit Example of ITI-112 at Recipient"
Description: "Audit Example for a Resource Publish Notify from Recipient perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
* subtype[iti112] = urn:ihe:event-type-code#ITI-112 "Resource Notify"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
//reference da sistemare
* entity[data].what = Reference(Bundle/ex-EventNotification)



Instance: ex-AuditCreateResourceNotifyBroker
InstanceOf: AuditCreateResourceNotifyBroker
Title: "Audit Example of ITI-112 at Broker"
Description: "Audit Example for a Resource Publish Notify from Broker perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subtype[anyCreate] = http://hl7.org/fhir/restful-interaction#create "create"
* subtype[iti112] = urn:ihe:event-type-code#ITI-112 "Resource Notify"
* recorded = 2024-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer.display = "myMachine.example.org"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
//reference da sistemare
* entity[data].what = Reference(Bundle/ex-EventNotification)


---

