File: repos/HL7_SLASH_fhircast-docs/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration/                    │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.fhircast
canonical: http://hl7.org/fhir/uv/fhircast
name: FHIRcast
title: FHIRcast
description: "FHIRcast synchronizes healthcare applications in real time to show the same clinical content to a common user."
status: draft
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  #<<< must include a http://hl7.org/fhir/StructureDefinition/structuredefinition-wg extension that identifies the workgroup responsible for the IG. This is the authoritative element.
    valueCode: inm  # <<< The value must be the code for the workgroup
license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
fhirVersion: 4.0.1 # https://www.hl7.org/fhir/valueset-FHIR-version.html
version: 3.0.0-ballot
copyrightYear: 2017+
releaseLabel: ci-build #STU 3 Ballot  # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
publisher:
  name: HL7 International / Infrastructure And Messaging
  url: http://www.hl7.org/Special/committees/inm
  email: inm@lists.HL7.org 
contact:
  - name: HL7 International / Infrastructure And Messaging
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/inm
      - system: email
        value: inm@lists.HL7.org 
dependencies:
  hl7.fhir.uv.ipa: 1.0.0
pages:
  index.md: 
    title: Introduction
  2_Specification.md:
    title: FHIRcast Specification
    2-1-SessionDiscovery.md:
      title: Session Discovery
    2-2-FhircastScopes.md:
      title: OAuth 2.0 Authorization Scopes
    2-3-Events.md:
      title: Event Format
    2-4-Subscribing.md:
      title: Subscribing to Events
    2-5-EventNotification.md:
      title: Event Notification
    2-6-RequestContextChange.md:
      title: Request Context Change
    2-7-Conformance.md:
      title: Conformance
    2-8-Extensions.md:
      title: Extensions
    2-9-GetCurrentContext.md:
      title: Get Current Context
    2-10-ContentSharing.md:
      title: Content Sharing
       
  3_Events.md:
    title: Event Library
    3-1-0-eventstructures.md:
      title: FHIRcast Event Definitions
      3-1-1-template.md:
        title: Event Template
      3-1-2-eventmaturitymodel.md:
        title: Event Maturity Model
    3-2-0-infrastructureevents.md:
      title: Infrastructure Events
      3-2-1-SyncError.md:
        title: SyncError Event
      3-2-2-UserLogout.md:
        title: UserLogout Event
      3-2-3-UserHibernate.md:
        title: UserHibernate Event
      3-2-5-Home-open.md:
        title: Home-open Event
    3-3-0-patientevents.md:
      title: Patient Events
      3-3-1-Patient-open.md:
        title: Patient-open Event
      3-3-2-Patient-close.md:
        title: Patient-close Event
    3-4-0-encounterevents.md:
      title: Encounter Events
      3-4-1-Encounter-open.md:
        title: Encounter-open Event
      3-4-2-Encounter-close.md:
        title: Encounter-close Event
    3-5-0-imagingstudyevents.md:
      title: ImagingStudy Events
      3-5-1-ImagingStudy-open.md:
        title: ImagingStudy-open Event
      3-5-2-ImagingStudy-close.md:
        title: ImagingStudy-close Event
    3-6-0-diagnosticreportevents.md:
      title: DiagnosticReport Events
      3-6-1-DiagnosticReport-open.md:
        title: DiagnosticReport-open Event
      3-6-2-DiagnosticReport-close.md:
        title: DiagnosticReport-close Event
      3-6-3-DiagnosticReport-update.md:
        title: DiagnosticReport-update Event
      3-6-4-DiagnosticReport-select.md:
        title: DiagnosticReport-select Event

  4_Scenarios.md:
    title: Scenarios
    4-1-launch-scenarios.md:
      title: Application Launch Scenarios and Session Discovery
    4-2-syncconsiderations.md:
      title: Synchronization Considerations
    4-3-security-considerations.md:
      title: Security Considerations
    4-4-multitab-considerations.md:
      title: Multi-tab Considerations
    4-5-multi-anchor-considerations.md:
      title: Multi-anchor Considerations
    4-6-fhircast-event-content-sharing.md:
      title: FHIRcast Event-based Content Sharing

  5_glossary.md:
    title: Glossary

  6_change-log.md:
    title: Specification Information

  7_design-notes.md:
    title: Design Notes

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  TOC: toc.html
  Specification: 
    Introduction: 2_Specification.html
    Session Discovery: 2-1-SessionDiscovery.html
    OAuth 2.0 Authorization Scopes: 2-2-FhircastScopes.html
    Event Format: 2-3-Events.html
    Subscribing to Events: 2-4-Subscribing.html
    Event Notification: 2-5-EventNotification.html
    Request Context Change: 2-6-RequestContextChange.html
    Conformance: 2-7-Conformance.html
    Extensions: 2-8-Extensions.html
    Get Current Context: 2-9-GetCurrentContext.html
    Content Sharing: 2-10-ContentSharing.html
  Events: 
    Introduction: 3_Events.html
    FHIRcast Event Definitions: 3-1-0-eventstructures.html
    Event Template: 3-1-1-template.html
    Event Maturity Model: 3-1-2-eventmaturitymodel.html
    Infrastructure Events: 3-2-0-infrastructureevents.html
    Patient Events: 3-3-0-patientevents.html
    Encounter Events: 3-4-0-encounterevents.html
    ImagingStudy Events: 3-5-0-imagingstudyevents.html
    DiagnosticReport Events: 3-6-0-diagnosticreportevents.html
  Scenarios: 
    Introduction: 4_Scenarios.html
    Application Launch Scenarios and Session Discovery: 4-1-launch-scenarios.html
    Synchronization Considerations: 4-2-syncconsiderations.html 
    Security Considerations: 4-3-security-considerations.html
    Multi-tab Considerations: 4-4-multitab-considerations.html
    Multi-anchor Considerations: 4-5-multi-anchor-considerations.html
    FHIRcast Event-based Content Sharing: 4-6-fhircast-event-content-sharing.html

  Glossary: 5_glossary.html
  Artifacts: artifacts.html


---

// File: input/pagecontent/2_Specification.md

This chapter consists of the following sections:

[2.1 Session Discovery](2-1-SessionDiscovery.html) |
[2.2 FHIRcast Scopes](2-2-FhircastScopes.html) |
[2.3 Event Format](2-3-Events.html) |
[2.4 Subscribing to Events](2-4-Subscribing.html) |
[2.5 Event Notification](2-5-EventNotification.html) |
[2.6 Request Context Change](2-6-RequestContextChange.html) |
[2.7 Conformance](2-7-Conformance.html) |
[2.8 Extensions](2-8-Extensions.html) |
[2.9 Get Current Context](2-9-GetCurrentContext.html) |
[2.10 Content Sharing](2-10-ContentSharing.html) |

The FHIRcast specification describes the APIs used by disparate healthcare applications to synchronize user interfaces (UI) in real time; allowing them to show the same clinical context and content to a user.


Once an application [knows about](2-1-SessionDiscovery.html) the session (Hub topic), the application [subscribes](2-4-Subscribing.html) to specific workflow-related [events](2-3-Events.html) for the given session. The application is then [notified](2-5-EventNotification.html) when those workflow-related events occur; for example, when the clinician opens a patient's chart in another application subscribed to the same session. A Subscriber may also [initiate context changes](2-6-RequestContextChange.html) by accessing APIs defined in this specification; for example, closing the patient's chart. A Subscriber [unsubscribes from the session](2-4-Subscribing.html#unsubscribe) to no longer receive session events. The notification events describing the workflow event are defined as a simple JSON wrapper around one or more FHIR resources.

FHIRcast recommends the [HL7 SMART on FHIR launch protocol](http://www.hl7.org/fhir/smart-app-launch) for both session discovery and API authentication. FHIRcast enables a Subscriber to receive notifications over a WebSocket connection. This protocol is modeled on the [W3C WebSub RFC](https://www.w3.org/TR/websub/), such as its use of GET vs POST interactions and a Hub for managing subscriptions. The Hub exposes APIs for subscribing and unsubscribing, requesting context changes, sharing content, and distributing event notifications. The flow diagram presented below illustrates the series of interactions specified by FHIRcast, their origination, and their outcome.

<figure>
  {% include FHIRcastOverviewForAbstract.svg %}
  <figcaption><b>Figure: FHIRcast Overview</b></figcaption>
  <p></p>
</figure>


All data exchanged through the HTTP APIs SHALL be formatted, sent, and received as [JSON](https://tools.ietf.org/html/rfc8259) structures (unless otherwise specified), and SHALL be transmitted over channels secured using the Hypertext Transfer Protocol (HTTP) over Transport Layer Security (TLS), also known as HTTPS which is defined in [RFC2818](https://tools.ietf.org/html/rfc2818). FHIR resources exchanged in FHIRcast messages use FHIR-specific JSON serialization [FHIR json](https://www.hl7.org/fhir/json.html).

All data exchanged through WebSockets SHALL be formatted, sent, and received as [JSON](https://tools.ietf.org/html/rfc8259) structures, and SHALL be transmitted over Secure Web Sockets (WSS) as defined in [RFC6455](https://tools.ietf.org/html/rfc6455).


---

// File: input/pagecontent/2-1-SessionDiscovery.md

<!-- ## Session Discovery -->

A session is an abstract concept representing a shared workspace, such as user's login session over multiple applications or a shared view of one application distributed to multiple users. FHIRcast requires a session to have a unique and opaque identifier. This identifier is exchanged as the value of the `hub.topic` parameter. Before establishing a subscription, an application must know the `hub.topic` and the `hub.url` which contains the base URL of the Hub.

Systems SHOULD use SMART on FHIR to authorize, authenticate, and exchange initial shared context. If using SMART, following a [SMART on FHIR EHR launch](http://www.hl7.org/fhir/smart-app-launch#ehr-launch-sequence) or [SMART on FHIR standalone launch](http://www.hl7.org/fhir/smart-app-launch/#standalone-launch-sequence), the application SHALL request and, if authorized, SHALL be granted one or more [FHIRcast OAuth 2.0 scopes](2-2-FhircastScopes.html). Accompanying this scope grant, the authorization server SHALL supply the `hub.url` and `hub.topic` SMART launch parameters alongside the access token and other parameters appropriate to establish initial shared context. Per SMART, when the `openid` scope is granted, the authorization server additionally sends the current user's identity in an `id_token`.

Although FHIRcast works best with the SMART on FHIR launch and authorization process, implementation-specific launch, authentication, and authorization protocols may be possible. If not using SMART on FHIR, the mechanism enabling the application to discover the `hub.url` and `hub.topic` is not defined in FHIRcast. See [other launch scenarios](4-1-launch-scenarios.html#alternate-application-launch) for guidance.


---

// File: input/pagecontent/2-10-ContentSharing.md


FHIRcast also defines content exchange between clients subscribed to the same topic using FHIRcast messages.  Content is exchanged using FHIR resources contained in the most recently opened context which serves as the anchor context of exchanged information (see [`anchor context`](5_glossary.html)).

FHIR resources are used to carry the information being shared. These resources are entries in the `Bundle` resource inside the `updates` key. One and only one `Bundle` SHALL be present in a `[FHIR resource]-update` request (see [FHIRcast Content Update Bundle](StructureDefinition-fhircast-content-update-bundle.html)). No resource SHALL appear multiple times in the update `Bundle`.

The [FHIR transaction interaction](http://hl7.org/fhir/http.html#transaction) defines how multiple actions can be grouped together and performed as one, such that all information being created or updated is contained in an entry’s resource (i.e., information is passed by value). For example, an `Observation` resource usually contains all relevant information regarding that observation. While it is possible to communicate content by reference even within a transaction bundle, implementer experimentation is needed for increased use of references to resources not contained in the `Bundle`.  

A key concept of the content sharing events is that the content is shared in a transactional manner.  The diagram below shows a series of operations beginning with a `[FHIR resource]-open` request followed by three `[FHIR resource]-update` requests.  The content in an anchor context is built up by the successive `[FHIR resource]-update` requests which contain only changes to the current state.  These changes are propagated by the Hub to all Subscribers using `[FHIR resource]-update` events containing only the changes to be made.

At any time a Subscriber MAY issue a [`GET Context`](2-9-GetCurrentContext.html) request to the Hub in order to retrieve the current context along with all attributes provided in the current context's resources and any content in the anchor context.

{% include img.html img="TransactionalUpdates.png" caption="Figure: Transactional Content Sharing Approach" %}

In order to avoid lost updates and other out of sync conditions, the Hub serves as the transaction coordinator.  It fulfills this responsibility by creating a version of the content's state with each update operation.  If an operation is requested by a Subscriber which provides an incorrect version, this request is rejected.  This approach is similar to the version concurrency approach used by [FHIR versions and managing resource contention](https://www.hl7.org/fhir/http.html#concurrency).  Additionally, many of the FHIRcast content sharing concepts have similarities to the [FHIR messaging mechanisms](https://www.hl7.org/fhir/messaging.html) and where possible the approaches and structures are aligned.

FHIR resources are used to convey the structured information being exchanged in `[FHIR resource]-update` operations.  However, it is possible that these resources are never persisted in a FHIR server.  During the exchange of information, the content (FHIR resource instances) is often very dynamic in nature with a user creating, modifying, and even removing information which is being exchanged.  For example, a measurement made in an imaging application could be altered many times before it is finalized and it could be removed.

### Responsibilities of a FHIRcast Hub and a Subscriber

Support of content sharing by a Hub is optional.  If supporting content sharing, a FHIRcast Hub SHALL fulfill additional responsibilities:

1. Assign and maintain an anchor context's `context.versionId` when processing a `[FHIR resource]-open` request - the `context.versionId` does not need to follow any convention but SHALL be unique in the scope of a topic  
2. Reject `[FHIR resource]-update` request if the version does not match the current `context.versionId`. A request can be rejected by returning a 4xx/5xx HTTP Status Code or a 202 HTTP status code followed by a SyncError.
3. Assign and maintain a new `context.versionId` for the anchor context's content and provide the new `context.versionId` along with the `context.priorVersionId` in the event corresponding to the validated update request
4. Process each `[FHIR resource]-update` request in an atomic fashion and maintain FHIR resource content
5. When a `[FHIR resource]-close` request is received, the Hub should dispose of the content for the current anchor context (i.e., the context being closed by this request) since the Hub has no responsibility to persist the content

A Hub is not responsible for structurally validating FHIR resources.  While a Hub must be able to successfully parse FHIR resources sufficiently to perform its required capabilities (e.g., find the `id` of a resource), a Hub is not responsible for additional structural checking.  If the Hub does reject an update request, for any reason, it SHALL reject the entire request - it SHALL NOT accept some changes specified in the bundle and reject others.

A Hub is not responsible for any long-term persistence of shared information and should purge the content when a `[FHIR resource]-close` request is received. The Hub MAY forward a `[FHIR resource]-select` event to all Subscribers in support of content sharing.

Additionally, a Hub is not responsible to prevent applications participating in exchanging structured information from causing inconsistencies in the information exchanged.  For example, an inconsistency could arise if an application removes from the anchor context's content a resource which is referenced by another resource.  The Hub may check `[FHIR resource]-update` requests for such inconsistencies and MAY reject the request with an appropriate error message; however, it is not required to do so.  Additionally, a Hub MAY check for inconsistencies which it deems to be critical but not perform exhaustive validation. For example, a Hub could validate that the content in a `DiagnosticReport` anchor context always includes at least one primary imaging study.

Clients wishing to exchange structured information SHALL:

1. Handle FHIRcast events for anchor context types it supports: [FHIR resource]-[open\|update\|close\|select]
2. Use a `[FHIR resource]-open` request to open a new resource which becomes the anchor context
3. Make a `[FHIR resource]-update` request when appropriate. The `[FHIR resource]-update` request contains a `Bundle` resource which is a collection of resources that are atomically processed by the Hub with the anchor context's content being adjusted appropriately
4. Maintain the current `context.versionId` of the anchor context provided by the Hub so that a subsequent `[FHIR resource]-update` request may provide the current `context.versionId` which will be validated by the Hub
5. Appropriately process [FHIR resource]-[open\|update\|close] events; note that a Subscriber may choose to ignore the contents of a `[FHIR resource]-update` event but should still track the `context.versionId` for subsequent use
6. If a `[FHIR resource]-update` request fails with the Hub, the Subscriber may issue a [`GET Context`](2-9-GetCurrentContext.html) request to the Hub in order to retrieve the current content in the anchor context and its current `context.versionId`

### Processing Update Events

Exchange of information is made transactionally using change sets in the `[FHIR resource]-update` event (i.e., the complete current state of the content is not provided in the `Bundle` resource in the `updates` key).  Therefore, it is essential that applications interested in the current state of exchanged information process all events and process the events in the order in which they were successfully received by the Hub.  Each `[FHIR resource]-update` event posted to the Hub SHALL be processed atomically by the Hub (i.e., all entries in the request's `Bundle` should be processed prior to the Hub accepting another request).

The Hub plays a critical role in helping Subscribers stay synchronized with the current state of exchanged information and, as described in [Request For Context Change](https://build.fhir.org/ig/HL7/fhircast-docs/2-6-RequestContextChange.html#request-context-change), responds to a FHIRcast event with either a synchronous HTTP status or an HTTP 202 [Accepted] followed by either a SyncError or a broadcast of the FHIRcast event. On receiving a `[FHIR resource]-update` request the Hub SHALL examine the `context.versionId` of the anchor context. The Hub SHALL compare the `context.versionId` of the incoming request with the `context.versionId` the Hub previously assigned to the anchor context (i.e, the `context.versionId` assigned by the Hub when the previous `[FHIR resource]-open` or `[FHIR resource]-update` request was processed).  If the incoming `context.versionId` and last assigned `context.versionId` do not match, the Hub SHALL reject the request and SHOULD do so by returning a 4xx HTTP Status Code. Note that if the Hub rejects the request for any reason, the entire request is rejected - the Hub SHALL NOT accept some updates requested in the `Bundle` resource while reject other updates requested in the `Bundle`.
 
If the `context.versionId` values match, the Hub proceeds with processing each of the FHIR resources in the Bundle and SHALL process all Bundle entries in an atomic manner.  After updating its copy of the current state of exchanged information, the Hub SHALL assign a new `context.versionId` to the anchor context and use this new `context.versionId` in the `[FHIR resource]-update` event it forwards to subscribed applications.  The Hub SHALL also include the `context.priorVersionId` in the distributed event which receiving applications MAY use to ensure they are apply the updates to the proper context version. The distributed update event SHALL contain a Bundle resource with the same Bundle `id` which was contained in the request.

`[FHIR resource]-update` events MAY also update attributes of the anchor context or associated context resources.  For example, a Subscriber might wish to update the `status` attribute of the anchor context resource.

When a `[FHIR resource]-update` event is received by a Subscriber, the application should respond as is appropriate for its clinical use.  For example, an image reading application may choose to ignore an observation describing a patient's blood pressure.  Since transactional change sets are used during information exchange, no problems are caused by applications deciding to ignore exchanged information not relevant to their function.  However, they should read and retain the `context.versionId` of the anchor context provided in the event for later use.

#### Experimental Capability – Update events outside of current context

{% include infonote.html text='Implementer feedback on safety and complexity vs value of content updates (1) to a report other than the one being authored, and/or (2) outside of a user session entirely. Also, why shouldn\'t this interaction simply use standard RESTful FHIR?' %}

This capability is deemed experimental due to low production adoption and evaluation of potential risk patient safety. This capability may change or be removed in future versions of this specification. 

Towards enabling greater workflow flexibility and greater convenience of subscribers, Subscribers MAY send a [FHIR resource]-update event, that is unrelated to the current context (e.g. an update event in which the anchor context referenced differs from the current context). Subscribers SHALL NOT send select events unrelated to the current context.

If the event recipient supports receiving and processing update events outside of the current context, the event SHALL be processed in scope of the referenced context (not the current context) following the same rules as if the referenced context were the current context.

If the event recipient does not support update events outside of the current context, the recipient SHALL respond with an appropriate [event notification](2-5-EventNotification.html#event-notification-response).

### Content Creation and Reopen Scenario

{% include infonote.html text='Implementer feedback on the generation and general handling of a resource\'s identifiers, including its logical `id` is requested. As the result of a content sharing session, a new FHIR resource could be persisted to a clinical database, such that it\'s available even after the session ends. Should the logical id associated with that resource during the FHIRcast session also persist? If so, how should id conflicts be resolved? Additionally, would this impact the ability of Subscribers who participated in a content sharing session to [reopen](2-10-1-ContentSharingFHIRcastMessaging.html#content-creation-and-reopen-scenario) a content sharing session including the state of content at the time of the prior close of the session?' %}

When a Subscriber creates a FHIR resource which it asks be added to the anchor context's content, it SHALL create an `id` for the resource (see: [Resource.id](http://hl7.org/fhir/resource.html)).  Two approaches to populating the resource's `id` are possible:

1. The Subscriber persists the resource in a FHIR server prior to adding the resource to the anchor context's content.  Since the FHIR server provides an `id` for the resource this `id` SHOULD be used for the resource's `id` in addition to the resource's entry in the update bundle's `fullUrl` attribute when adding the resource to the anchor context's content.
2. The resource has not yet been persisted in a FHIR server or will never be persisted in a FHIR server by the Subscriber adding the resource to the anchor context's content.  In this case, the Subscriber SHOULD use a mechanism to generate the `id` such that it will be globally unique (e.g., a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)).

If the same anchor context is reopened and used for a content sharing session, the same [Resource.id](http://hl7.org/fhir/resource.html) used during the initial content sharing session should be used by any Subscriber adding the same resource to this reopened content sharing session.  Hence, should any Subscriber participating in a content sharing session decide to persist a resource after the content sharing session is closed, it SHOULD ensure that the original [Resource.id](http://hl7.org/fhir/resource.html) and the `fullUrl` attribute of the resource's entry in the update bundle (if populated) is part of the persisted resource.  This enables a Subscriber to add the resource to a reopened content sharing session with the original [Resource.id](http://hl7.org/fhir/resource.html) or to identify (match) resources added to a reopened content sharing session with the resource in the original content sharing session.

For further discussion on the reopening of content sharing sessions see Section [4.6 FHIRcast Event-based Content Sharing](4-6-fhircast-event-content-sharing.html).


---

// File: input/pagecontent/2-2-FhircastScopes.md

FHIRcast defines OAuth 2.0 access scopes that correspond directly to [FHIRcast events](3_Events.html). These scopes associate read or write permissions to an event. Applications that need to receive workflow related events SHOULD ask for `read` scopes. Applications that request context changes SHOULD ask for `write` scopes.

Expressed in [Extended Backus-Naur Form](https://www.iso.org/obp/ui/#iso:std:iso-iec:14977:ed-1:v1:en) (EBNF) notation, the FHIRcast syntax for OAuth 2.0 access scopes is:

```ebnf
FhircastScopes ::= fhircast  '/' ( FHIRcast-event-name | '*' ) '.' ( 'read' | 'write' | '*' )
```

{% include img.html img="FhircastScopes.png" caption="Figure: Syntax for FHIRcast scopes" %}

Note the [FHIRcast event format](2-3-Events.html#event-name) contains a noun-verb, for example: `Patient-open`. So, a requested scope of `fhircast/Patient-open.read` would authorize the subscribing application to receive a notification when the patient in context changed. Similarly, a scope of  `fhircast/Patient-open.write` authorizes the subscribing application to [request a context change](2-5-EventNotification.html).


---

// File: input/pagecontent/2-3-Events.md

FHIRcast describes a workflow event subscription and notification scheme with the goal of improving a clinician's workflow across multiple disparate applications. The set of events defined in this specification is not a closed set; anyone is able to define new events to fit specific use cases and are encouraged to propose those events to the community for standardization.

New events are proposed in a prescribed format using the [event template](3-1-1-template.html) by submitting a [pull request](https://github.com/fhircast/docs/tree/master). FHIRcast events are versioned, and mature according to the [event maturity model](3-1-2-eventmaturitymodel.html).

FHIRcast context events do not communicate previous contexts. For a given event, open and close events are complete replacements of previous communicated context change events, not "deltas". Understanding a context change event SHALL NOT require receiving a previous or future event.

### Event Definition Format

Each event definition specifies a single event name, a description of the workflow in which the event occurs, and contextual information associated with the event. FHIR is the interoperable data model used by FHIRcast. The context information associated with an event is communicated as subsets of FHIR resources. Resources are formatted in [the fhir+json json representation as defined by the base FHIR specification](https://www.hl7.org/fhir/json.html). Event notifications SHALL include resources matching the profiles indicated in the context from the event definition.

All events are documented in the [standard event catalog](3_Events.html) and SHALL be defined in the following format.

{:.grid}
Field | Optionality | Type | Description
--- | --- | --- | ---
`hub.topic` | Required | string | The session topic given in the subscription request. MAY be a Universally Unique Identifier ([UUID](https://tools.ietf.org/html/rfc4122)).
`hub.event` | Required | string | The event that triggered this notification, taken from the list of events from the subscription request.
`context`   | Required | array | An array of named FHIR objects corresponding to the user's context after the given event has occurred.
`versionId`   | Conditional| string | A string displaying the context's version ID. `versionId` SHALL be present for *-update events.
`priorVersionId`   | Optional | string | A string displaying the context's previous version ID.

The notification's `hub.event` and `context` fields inform the Subscriber of the current state of the user's session. The `hub.event` is a user workflow event, from the [Event Catalog](3_Events.html) (or an organization-specific event in reverse-domain name notation). The `context` is an array of named FHIR resources (similar to [CDS Hooks's context](https://cds-hooks.hl7.org/1.0/#http-request_1) field) that describe the current content of the user's session. Each event in the [Event Catalog](3_Events.html) defines what context is included in the notification. The context contains zero, one, or more FHIR resources. Subscribers SHALL accept a full FHIR resource as defined in the Event Catalog.

The Subscriber requesting a context change SHALL ensure consistency of the FHIR resources in the `context` array.  For example, the Hub will not check that the Patient resource in an Encounter-open `context` array is in fact the patient associated with the encounter in the real world.

### Event name

The event name defines the event. Most FHIRcast events conform to an extensible syntax based upon FHIR resources.

Patterned after the SMART on FHIR scope syntax and expressed in EBNF notation, the FHIRcast syntax for context change related events is:

```ebnf
EventName ::= (FHIRresource) ('-') ( 'open' | 'close' | 'update' | 'select' )
```

{% include img.html img="EventName.png" caption="Figure: Event-name specification" %}

The `FHIRresource` indicates the focus of the event; the `suffix` defines the type of event.

Event names are unique and case-insensitive. It is RECOMMENDED to use [Upper-Camel](https://en.wikipedia.org/wiki/Camel_case) case.

Implementers may define their own events. Such proprietary events SHALL be named with reverse domain notation (e.g. `org.example.patient_transmogrify`). Reverse domain notation SHALL NOT be used by a standard event catalog. Proprietary events SHALL NOT contain a dash ("-"). Note that this specification uses an asterisk to refer to categories of events (e.g. `*-open` for all open events), but that this syntax is not supported when interacting with a Hub.


### Context

Describes the set of contextual data associated with this event. Only data logically and necessarily associated with the purpose of this workflow related event should be represented in context. An event SHALL contain all required data fields, MAY contain optional data fields and SHALL NOT contain any additional fields. Events defined in the standard event catalog or by implementers SHALL contain only valid JSON and MAY contain FHIR resources.

All fields available within an event's context SHALL be defined in a table where each field is described by the following attributes:

- **Key**: The name of the field in the context JSON object. Event authors SHOULD name their context fields to be consistent with other existing events when referring to the same context field. The key name SHALL be lower case and implementations SHALL treat them as case-sensitive.
- **Cardinality**: Indicates the optionality and maximum resources instances allowed in an event's context
- **FHIR operation to generate context**: A FHIR read or search string illustrating the intended content of the event.
- **Description**: A functional description of the context value. If this value can change according to the FHIR version in use, the description SHOULD describe the value for each supported FHIR version.

The key used for indicating a context change event's FHIR resource SHALL be the lower-case resourceType of the resource as defined in the [resource type valueset](http://build.fhir.org/valueset-version-independent-resource-types.html). For example, the [patient-open](3-3-1-Patient-open.html) event uses the `patient` key to signal the new Patient in context. Note that due to legacy reasons, some events deviate from this pattern. The resources to include are defined in the corresponding event definition in the [event catalog](3_Events.html).


References to resources other than anchor resources SHALL be named any string which is not a value from the resource type valueset.

In the case in which other events are deriveable from the event in question, additional non-anchor FHIR resources included in the event SHALL be named what they are named in the deriveable event.

The Hub SHALL only return FHIR resources that the Subscriber is authorized to receive with the existing OAuth 2.0 access_token's granted `fhircast/` scopes.

### Event types

The FHIRcast specification supports many different events. These events are defined in the [event catalog](3_Events.html). The events can be grouped in different types. The following sections define the characteristics of these different event-types.

#### Context-change events

FHIRcast context-change events that describe context changes SHALL conform to the following extensible syntax. Patterned after the SMART on FHIR scope syntax and expressed in EBNF notation, the FHIRcast syntax for context-change related event names is:

```ebnf
ContextChangeEventName ::= ( FHIRresource ) '-' ( 'open' | 'close' )
```

{% include img.html img="ContextEventName.png" caption="Figure: Context Event-name specification" %}

Context change events SHALL include the resource the context change relates to. Common FHIR resources are: Patient, Encounter, ImagingStudy, and DiagnosticReport.

In the case the resource refers to other FHIR resources that represent their own context, these can be included as well. For example, an [`Encounter-open`](3-4-1-Encounter-open.html) also refers to the patient that is the subject of the Encounter. What resources to include is defined in the corresponding event definition in the [event catalog](3_Events.html).

FHIRcast defines profiles for FHIR resources used in `*-open` and `*-close` events documented in the [`event catalog`](3_Events.html).  Each resource used to establish context has a profile for when that resource is used in an `*-open` event and a different profile for when that resource is used in a `*-close` event.  The profiles for *-`open` events mandate more attributes than those for `*-close` events since all Subscribers need enough information to identify the appropriate information associated with the context resource(s) in their application enabling them to participate in a common context.

FHIRcast does not mandate that contextual subjects have any FHIR persistance; sufficient information to establish a common context may simply be exchanged using FHIR resources as the structure to hold the necessary information without the resources ever existing in a FHIR server (in fact it may be that there is no FHIR server in the infrastructure associated with any Subscriber synchronizing in a FHIRcast topic).  As this is an FHIR R4 implementation guide, all profiles and examples conform to FHIR R4 resource specifications. Where relevant/required, notes have been added to the description of the resource profiles indicating how to use the resources in a FHIRcast session using FHIR R5-based resources.

__`*-open` Event Resource Profiles:__
* [`Patient`](StructureDefinition-fhircast-patient-open.html)
* [`Encounter`](StructureDefinition-fhircast-encounter-open.html)
* [`ImagingStudy`](StructureDefinition-fhircast-imaging-study-open.html)
* [`DiagnosticReport`](StructureDefinition-fhircast-diagnostic-report-open.html)

__`*-close` Event Resource Profiles:__
* [`Patient`](StructureDefinition-fhircast-patient-close.html)
* [`Encounter`](StructureDefinition-fhircast-encounter-close.html)
* [`ImagingStudy`](StructureDefinition-fhircast-imaging-study-close.html)
* [`DiagnosticReport`](StructureDefinition-fhircast-diagnostic-report-close.html)

FHIRcast supports all events that follow this format. The most common events definitions have been provided in the [event catalog](3_Events.html).

#### Infrastructure events

This event category contains events required to maintain a FHIRcast session. The main events in this category are:

| [`SyncError`](3-2-1-SyncError.html) | indicates refusal to follow context or inability to deliver an event
| [`UserLogout`](3-2-2-UserLogout.html) | signals that the users session has ended.
| [`UserHibernate`](3-2-2-UserHibernate.html) | signals that the user temporarily suspended their session due to a session time-out or other reason.

#### Content sharing events

Content sharing events use the suffix `update`. The format of content sharing event names is:

```ebnf
ContentSharingEventName ::= ( FHIRresource ) '-' ( 'update' )
```

{% include img.html img="ContentSharingEventName.png" caption="Figure: Content sharing event-name specification" %}

`*-update` events provide a mechanism to share content in the context of an `anchor context` (see [`anchor context`](5_glossary.html)). `*-update` events update the content within the specified anchor context; said another way, most `*-update` events are not changing the `anchor context` resource rather creating, modifying, or removing the content within the `anchor context`.  A Subscriber shares content related to the anchor context by providing FHIR resource(s) in a `Bundle` contained in the `updates` key of a `*-update` event. See [`Content Sharing`](2-10-ContentSharing.html) for a comprehensive description of `*-update` events. The FHIRresource indicates the anchor context in which content is being shared.

The `context` element in an update event SHALL contain at least two fields. One with the name of the `FHIRresource` which holds the anchor context and one named `updates` holding a single `Bundle` resource with entries holding the content being shared.  The `Bundle` resource SHALL conform to the [FHIRcast content update Bundle](StructureDefinition-fhircast-content-update-bundle.html) profile. 

FHIRcast supports all events that follow this format. The most common events definitions have been provided in the [event catalog](3_Events.html). For an example see [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html).

#### Selection events - Experimental


Selection events use the suffix `select`. The format of selection event names is:

```ebnf
SelectionEventName ::= ( FHIRresource  ) '-' ( 'select' )
```

{% include img.html img="SelectionEventName.png" caption="Figure: Selection Event-name specification" %}

`*-select` events provide a mechanism to select content in the context an `anchor context` (see [`anchor context`](5_glossary.html)).  `*-select` events select content resources within the `anchor context`, not the `anchor context` itself (making the `anchor context` the current context is performed by the corresponding `*-open` event).  The `context` array in a select event contains two attributes.  The FHIR resource which is the `anchor context`, and a select array indicating the content resource(s) that are selected.  If the Subscriber wants to indicate that no resource is selected, the select attribute is an empty array.

FHIRcast supports all events that follow this format. The most common events definitions have been provided in the [event catalog](3_Events.html). For an example see [`DiagnosticReport-select`](3-6-4-DiagnosticReport-select.html).


---

// File: input/pagecontent/2-4-Subscribing.md

Subscribing and unsubscribing to a topic is how applications establish their connection and determine which events the Hub will distribute to them.

Subscribing consists of different exchanges:

[Subscription Request](#subscription-request) | Subscriber requests a subscription at the `hub.url` URL.
[Subscription Response](#subscription-confirmation) | The Hub confirms that the subscription was requested by the Subscriber.
[Subscription Confirmation](#subscription-confirmation) | The subscribing application confirms the subscription.
[Subscription Denial](#subscription-denial) | The Hub indicates that the subscription has ended.
[Unsubscribing](#unsubscribe) | Subscriber indicates that it wants to unsubscribe.

Any content returned from subscription requests SHALL be returned as `application/json`.

### Subscription

#### Subscription Request

To create a subscription, the subscribing application SHALL perform an HTTP POST to the Hub's base URL (as specified in `hub.url`) with the parameters in the table below. Each parameter SHALL appear at most one time; parameters that accept multiple values use a comma-delimited syntax and explicitly state support in their description. This request SHALL have a `Content-Type` header of `application/x-www-form-urlencoded` and SHALL use the following parameters in its body, formatted accordingly:

{:.grid}
Field                  | Optionality | Type     | Description
---------------------- | ----------- | -------- | ------------
`hub.channel.type`     | Required    | *string* | The Subscriber SHALL specify the channel type of `websocket`. Subscription requests without this field SHOULD be rejected by the Hub.
`hub.mode`             | Required    | *string* | The literal string `subscribe`.
`hub.topic`            | Required    | *string* | The identifier of the session that the Subscriber wishes to subscribe to. 
`hub.events`           | Conditional | *string* | A comma-separated list of event types for which the Subscriber wants to subscribe. The list is treated as a set, so repeated elements SHOULD NOT be used and hubs SHALL treat multiple values as a single instance.
`hub.lease_seconds`    | Optional    | *number* | Number of seconds for which the Subscriber would like to have the subscription active, given as a positive decimal integer. Hubs MAY choose to respect this value or not, depending on their own policies, and MAY set a default value if the Subscriber omits the parameter. If using OAuth 2.0, the Hub SHALL limit the subscription lease seconds to be less than or equal to the access token's expiration.
`hub.channel.endpoint` | Conditional | *string* | The WSS URL identifying an existing WebSocket subscription.
`subscriber.name`      | Optional    | *string* | An optional description of the Subscriber that will be used in `SyncError` notifications when an event is refused or cannot be delivered.

If OAuth 2.0 authentication is used, this POST request SHALL contain the Bearer access token in the HTTP Authorization header.

Hubs SHALL allow subscribers to re-request subscriptions that are already activated. Each subsequent and verified request to a Hub to subscribe or unsubscribe SHALL override the previous subscription state for a specific (`hub.topic`, `hub.channel.endpoint` url) combination. For example, a Subscriber MAY modify its subscription by sending a subscription request (`hub.mode=subscribe`) with a different `hub.events` value with the same topic and endpoint url, in which case the Hub SHALL replace the subscription’s previous `hub.events` with the newly provided list of events.

Hubs and Subscribers SHALL be case insensitive for event-names.

The application that creates the subscription might not be the same system as the server connecting to the WSS URL (e.g., a federated authorization model could exist between these two systems). However, in FHIRcast, the Hub assumes that the same authorization and access rights apply to both the Subscriber and the system receiving notifications.

{% include infonote.html text='The spec uses GET vs POST to differentiate between the confirmation/denial of the subscription request and delivering the content. While this is not considered "best practice" from a web architecture perspective, it does make implementation of the callback URL simpler. Since the POST body of the content distribution request may be any arbitrary content type and only includes the actual content of the document, using the GET vs POST distinction to switch between handling these two modes makes implementations simpler.' %}


##### Initial Subscription Request Example

In this example, the subscribing application creates an initial subscription and asks to be notified of the `Patient-open` and `Patient-close` events.

```text
POST https://hub.example.com HTTP/1.1
Host: hub.example.com
Authorization: Bearer i8hweunweunweofiwweoijewiwe
Content-Type: application/x-www-form-urlencoded

hub.channel.type=websocket&hub.mode=subscribe&hub.topic=fdb2f928-5546-4f52-87a0-0648e9ded065&hub.events=Patient-open,Patient-close
```

#### Subscription Response

Upon receiving subscription or unsubscription requests, the Hub SHALL respond to a subscription request with an appropriate HTTP response.

If a Hub refuses the request or finds any errors in the subscription request, an appropriate HTTP error response code (4xx or 5xx) SHALL be returned. In the event of an error, the Hub SHOULD return a description of the error in the response body as plain text, to be used by the client developer to understand the error. This is not meant to be shown to the end user. Hubs MAY decide to reject some subscription requests based on their own policies. For example, a Hub may require that all applications subscribe to the same set of events in lieu of [deriving open events](2-5-EventNotification.html#hub-generated-open-events).


In the case of an acceptable subscription request, an HTTP 202 "Accepted" response is returned. This indicates that the request was received and will now be verified by the Hub. The HTTP body of the response SHALL consist of a JSON object containing an element name of `hub.channel.endpoint` and a value for the WSS URL. The WebSocket WSS URL SHALL be cryptographically random, unique, and unguessable.



##### Subscription Response Example

```json
HTTP/1.1 202 Accepted

{   
 "hub.channel.endpoint": "wss://hub.example.com/ee30d3b9-1558-464f-a299-cbad6f8135de"
}
```

#### Subscription Confirmation

To confirm a subscription request, upon the Subscriber establishing a WebSocket connection to the `hub.channel.endpoint` WSS URL, the Hub SHALL send a confirmation over the WebSocketchannel. This confirmation includes the following elements:

{:.grid}
Field               | Optionality | Type | Description
------------------- | ----------- | --- | ---
`hub.mode`          | Required    | *string* | The literal string `subscribe`.
`hub.topic`         | Required    | *string* | The session topic given in the corresponding subscription request.
`hub.events`        | Required    | *string* | A comma-separated list of events from the Event Catalog corresponding to the events string given in the corresponding subscription request. Note that the granted events may be the same as, a subset, or a superset of those requested.
`hub.lease_seconds` | Required    | *number* | The Hub-determined number of seconds that the subscription will stay active before expiring, measured from the time the verification request was made from the Hub to the Subscriber. If provided to the Subscriber, the Hub SHALL unsubscribe the Subscriber once `lease_seconds` has expired, close the WebSocket connection, and MAY send a subscription denial. If the Subscriber wishes to continue the subscription it MAY resubscribe.

Once the subscription is confirmed, the application is subscribed. 

##### Subscription Confirmation Example

```json
{
  "hub.mode": "subscribe",
  "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
  "hub.events": "Patient-open,Patient-close",
  "hub.lease_seconds": 7200
}
```

#### Successful Subscription Sequence

<figure>
  {% include SuccessfulWebSocketSubscriptionSequence.svg %}
  <figcaption><b>Figure: Successful WebSocket Subscription Sequence</b></figcaption>
  <p></p>
</figure>

1. Subscriber sends subscription request via HTTP/S POST
1. Hub accepts the Subscribe request and responds with the endpoint URL
1. Subscriber connects to the endpoint URL via WebSockets
1. Hub sends the confirmation message over the WebSocket connection
1. (Optional) Hub sends any existing open-context events (e.g., `Patient-open`)
1. Either Hub or Subscriber send events as they occur

### Current context notification upon successful subscription

Upon the successful creation of a new subscription, the Subscriber will receive notifications for subsequent workflow steps, according to the `hub.events` specified in the subscription. Any previously established context is unknown to the newly subscribed application. To improve user experience, Hubs SHALL follow a successful subscription with an event notification informing the new Subscriber of the most recent \*-open event per anchor type for which no \*-close event has occurred, according to the Subscriber's subscription.  Hubs SHALL NOT send a Subscriber events to which it is not subscribed.

Although these event notifications are triggered by a successful subscription, they are indistinguishable from a normal, just-occurred workflow event triggered notification, as specified in [Event Notification](2-5-EventNotification.html). Note that the `timestamp` in the event notification is the time at which the event occurred and not the time at which the notification is generated.
  
### Subscription Denial

If (and when) a subscription is denied, the Hub SHALL inform the Subscriber. This can occur when a subscription is requested for a variety of reasons, or it can occur after a subscription had already been accepted because the Hub no longer supports that subscription (e.g. it has expired).

To deny a `WebSocket` subscription, the Hub sends a JSON object to the Subscriber through the established WebSocket connection holding the fields indicated below.

{:.grid}
Field        | Optionality | Type     | Description
------------ | ----------- | -------- | ---
`hub.mode`   | Required    | *string* | The literal string `denied`.
`hub.topic`  | Required    | *string* | The topic given in the corresponding subscription request. 
`hub.events` | Required    | *string* | A comma-separated list of events from the Event Catalog corresponding to the events string given in the corresponding subscription request, which are being denied.
`hub.reason` | Optional    | *string* | The Hub may include a reason. A subscription MAY be denied by the Hub at any point (even if it was previously accepted). The Subscriber SHOULD then consider that the subscription is not possible anymore.

#### `WebSocket` Subscription Denial Example

```json
{
   "hub.mode": "denied",
   "hub.topic": "fba7b1e2-53e9-40aa-883a-2af57ab4e2c",
   "hub.events": "Patient-open,Patient-close",
   "hub.reason": "session unexpectedly stopped"
}
```

#### Subscription Denial Sequence

<figure>
  {% include DeniedSubscriptionSequence.svg %}
  <figcaption><b>Figure: Denied Subscription Sequence</b></figcaption>
  <p></p>
</figure>

1. Subscriber requests a subscription via HTTP/S POST
1. Hub refuses the Subscribe request via HTTP response
1. Subscriber requests a subscription via HTTP/S POST
1. Hub accepts the Subscribe request and responds with the endpoint URL
1. Subscriber connects to the endpoint URL via WebSockets
1. Hub sends a denial message over the WebSocket connection and closes the connection
1. Subscriber sends subscription request via HTTP/S POST
1. Hub accepts the Subscribe request and responds with the endpoint URL
1. Subscriber connects to the endpoint URL via WebSockets
1. Hub sends the confirmation message over the WebSocket connection
1. The Hub MAY send a denial message at any time and close the connection

### Unsubscribe

Once a Subscriber no longer wants to receive event notifications, it SHALL unsubscribe from the session. An unsubscribe cannot alter an existing subscription, only cancel it. Note that the unsubscribe request is performed over HTTP(s), even while subscriptions notifications use WebSockets. Unsubscribes will destroy the WebSocket which cannot be reused. A subsequent subscription SHALL be done over a newly created and communicated WebSocket endpoint.

#### Unsubscribe Request

To unsubscribe, the Subscriber SHALL perform an HTTP POST to the Hub's base URL (as specified in `hub.url`) with the parameters in the table below. Each parameter SHALL appear at most one time; parameters that accept multiple values use a comma-delimited syntax and explicitly state support in their description. This request SHALL have a `Content-Type` header of `application/x-www-form-urlencoded` and SHALL use the following parameters in its body, formatted accordingly:

{:.grid}
Field                  | Optionality | Type     | Description
---------------------- | ----------- | -------- | -----------
`hub.channel.type`     | Required    | *string* | The (un)Subscriber SHALL specify a channel type of `websocket`. Subscription requests without this field SHOULD be rejected by the Hub.
`hub.mode`             | Required    | *string* | The literal string `unsubscribe`.
`hub.topic`            | Required    | *string* | The identifier of the session that the Subscriber wishes to subscribe to or unsubscribe from.
`hub.channel.endpoint` | Required    | *string* | The WSS URL identifying an existing WebSocket subscription.

##### Unsubscribe Request Example

```text
POST https://hub.example.com HTTP/1.1
Host: hub
Authorization: Bearer i8hweunweunweofiwweoijewiwe
Content-Type: application/x-www-form-urlencoded

hub.channel.type=websocket&hub.channel.endpoint=wss%3A%2F%2Fhub.example.com%2Fee30d3b9-1558-464f-a299-cbad6f8135de%0A&hub.mode=unsubscribe&hub.topic=fdb2f928-5546-4f52-87a0-0648e9ded065
```

#### Unsubscribe Response

Upon receiving an unsubscribe request, if a Hub encounters any errors or refuses the request, it SHALL return an appropriate HTTP error response code (4xx or 5xx) along with a description of the error in the response body as plain text. This information is intended to be used by the client developer for troubleshooting and is not meant to be shown to the end user. Hubs may choose to reject unsubscribe requests based on their own policies.

When an unsubscribe request is accepted, the Hub SHALL respond with an HTTP 202 "Accepted" response. This indicates that the request has been received and will be processed by the Hub. The response SHALL include a JSON object in the body, containing the key hub.channel.endpoint with the WSS URL value of the WebSocket subscription. Additionally, the Hub SHALL send a Subscription Denial over the WebSocket.

##### Unsubscribe Response Example


```json
{   
 "hub.channel.endpoint": "wss://hub.example.com/ee30d3b9-1558-464f-a299-cbad6f8135de"
}
```

#### Unsubscription Sequence

 <figure>
  {% include UnsubscriptionSequence.svg %}
  <figcaption><b>Figure: Unsubscription sequence</b></figcaption>
  <p></p>
</figure>

1. A successful connection is established (see [Subscription Confirmation Example](#subscription-confirmation-example))
1. Events are sent by the Hub and/or Subscriber
1. The Subscriber sends an Unsubscribe request via HTTP/S POST
1. Hub accepts the Unsubscribe request and responds with the endpoint URL
1. Hub sends a denial message over the WebSocket connection and closes the connection


---

// File: input/pagecontent/2-5-EventNotification.md

The Hub SHALL notify Subscribers of workflow-related events to which the Subscriber is subscribed. The notification is a JSON object communicated over the `WebSocket` channel.

### Event Notification

The event notification interaction include the following fields:

{:.grid}
Field       | Optionality | Type | Description
----------- | ----------- | ---- | ------------
`timestamp` | Required    | *string* | ISO 8601-2 timestamp in UTC describing the time at which the event occurred.
`id`        | Required    | *string* | Event identifier used to recognize retried notifications. This id SHALL be unique for the Hub, for example a UUID.
`event`     | Required    | *object* | A JSON object describing the event see [Event Definition](2-3-Events.html).

The timestamp SHOULD be used by subscribers to establish message affinity (message ordering) through the use of a message queue. Subscribers SHALL ignore messages with older timestamps than the message that established the current context. The event identifier MAY be used to differentiate retried messages from user actions.

#### Event Notification Request Example

```json
{
	"timestamp": "2018-01-08T01:37:05.14",
	"id": "q9v3jubddqt63n1",
	"event": {
		"hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
		"hub.event": "Patient-open",
		"context": [{
			"key": "patient",
			"resource": {
				"resourceType": "Patient",
				"id": "ewUbXT9RWEbSj5wPEdgRaBw3",
				"identifier": [{
					"value": "530002010",
					"type": {
						"coding": [{
							"system": "http://terminology.hl7.org/CodeSystem/v2-0203",
							"value": "MR",
							"display": "Medication Record Number"
						}]
					}
				}]
			}
		}]
	}
}
```

### Event Notification Response

The Subscriber SHALL respond to the event notification with an appropriate HTTP status code. In the case of a successful notification, the Subscriber SHALL respond with any of the response codes indicated below:

{:.grid}
Code  |          | Description
----- | -------- | ---
200   | OK       | The Subscriber is able to implement the context change.
202   | Accepted | The Subscriber has successfully received the event notification, but has not yet taken action. If the Subscriber decides to refuse the event, it will send a [`SyncError`](3-2-1-SyncError.html) event. Subscribers are RECOMMENDED to do so within 10 seconds after receiving the context event.
409   | Conflict | The Subscriber refuses to follow the context change. The Hub SHALL send a [`SyncError`](3-2-1-SyncError.html) indicating the event was refused.
4xx   | Other Client Error | For Subscriber errors other than a 409; Subscribers can return other appropriate 4xx HTTP statuses. The Hub SHALL send a [`SyncError`](3-2-1-SyncError.html) indicating the event was refused.
500   | Server Error | There is an issue in the Subscriber preventing it from processing the event. The Hub SHALL send a [`SyncError`](3-2-1-SyncError.html) indicating the event was not delivered.
5xx   | Other Server Error | If the Subscriber is able to more specifically identify the server error preventing it from processing the event, it can send a 5xx status other than 500. The Hub SHALL send a [`SyncError`](3-2-1-SyncError.html) indicating the event was not delivered.

The Hub MAY use these statuses to track synchronization state.

#### Event Notification Response Example

The `id` of the event notification and the HTTP status code is communicated from the Subscriber to Hub through the existing WebSocket channel, wrapped in a JSON object. Since the WebSocket channel does not have a synchronous request/response, this `id` is necessary for the Hub to correlate the response to the correct notification.

{:.grid}
Field    | Optionality | Type     | Description
-------- | ----------- | -------- | ---
`id`     | Required    | *string* | Event identifier from the event notification to which this response corresponds.
`status` | Required    | *numeric HTTP status code* | Numeric HTTP response code to indicate success or failure of the event notification within the Subscriber. Any 2xx code indicates success, any other code indicates failure.

```json
{
  "id": "q9v3jubddqt63n1",
  "status": "200"
}
```

### Event Notification Sequence

<figure>
  {% include EventNotificationSequence.svg %}
  <figcaption><b>Figure: Event Notification Sequence</b></figcaption>
  <p></p>
</figure>

### Event Notification Errors

If the Subscriber cannot follow the context of the event, for instance due to an error or a deliberate choice to not follow a context, the Subscriber SHALL communicate the error to the Hub in one of two ways.

* Responding to the event notification with an HTTP error status code as described in [Event Notification Response](#event-notification-response).
* Responding to the event notification with an HTTP 202 (Accepted) as described above, then, once experiencing the error or refusing the change, send a [`SyncError`](3-2-1-SyncError.html) event to the Hub. If the Subscriber cannot determine whether it will follow context within 10 seconds after reception of the event it SHOULD send a [`SyncError`](3-2-1-SyncError.html) event.

If the Hub receives an error notification from a Subscriber, it SHALL generate a [`SyncError`](3-2-1-SyncError.html) event to the other Subscribers of that topic. [`SyncError`](3-2-1-SyncError.html) events are like other events in that they need to be subscribed to in order for a Subscriber to receive the notifications and they have the same structure as other events, the context being a single FHIR `OperationOutcome` resource.

The figure below illustrates the Event Notification Error Sequence.

<figure>
  {% include EventNotificationErrorSequence.svg %}
  <figcaption><b>Figure: Event Notification Error Sequence</b></figcaption>
  <p></p>
</figure>

More information on the source of notification errors and how to resolve them can be found in [Synchronization Considerations](4-2-syncconsiderations.html).

### Hub Generated `SyncError` Events

In addition to distributing [`SyncError`](3-2-1-SyncError.html) events sent by one Subscriber to other Subscribers, the Hub MAY generate and communicate [`SyncError`](3-2-1-SyncError.html) events to Subscribers under the following conditions: 

1. A Subscriber's WebSocket connection is closed with any Connection Close Reason other than 1000 (normal closure) or 1001 (going away) (see [WebSocket RFC](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) and [WebSocket Status Codes](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4))

2. A Subscriber does not [respond](https://build.fhir.org/ig/HL7/fhircast-docs/2-5-EventNotification.html#event-notification-response) to a FHIRcast event within 10 seconds or an order of magnitude lower than the subscription time-out.

{% include questionnote.html text='Implementer input is solicited on the amount and specificity of time, in the above.' %}

 As with all FHIRcast events, [`SyncError`](3-2-1-SyncError.html) events are distributed only to Subscribers which have subscribed to them.

Upon communicating a `SyncError` resulting from an unresponsive Subscriber, the Hub SHALL unsubscribe the Subscriber. A subscriber should be considered unresponsive following a non-zero number of consective Hub-generated syncerrors. 

The Hub SHALL NOT generate [`SyncError`](3-2-1-SyncError.html) events in the following situations:

1. A Subscriber closes its WebSocket connection to the Hub with a [Connection Close Reason](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1) of 1000 (normal closure) or 1001 (going away).  

During a normal shutdown of a Subscriber, it SHALL unsubscribe, and provide a WebSocket Connection Close Reason of 1000 and not rely upon the Hub recognizing and unsubscribing it as an unresponsive Subscriber.

{% include questionnote.html text='Implementer feedback is solicited on Hub Generated `SyncError` Events particularly on the following topics:' %}

> * after the first time a Hub has distributed a [`SyncError`](3-2-1-SyncError.html) indicating that a Subscriber is not responsive, should the nonresponsive Subscriber be automatically unsubscribed (removed from the Hub's list of Subscribers of the topic)?  This would avoid [`SyncError`](3-2-1-SyncError.html) events being sent after subsequent operations; however, it may conflict with the approach of [`SyncError`](3-2-1-SyncError.html) events generated by the Hub only being distributed to Subscribers of the event which triggered the [`SyncError`](3-2-1-SyncError.html) event to be generated.
>* should [`SyncError`](3-2-1-SyncError.html) events generated by the Hub be distributed only to Subscribers of the event which triggered the [`SyncError`](3-2-1-SyncError.html) event to be generated?  However, this could conflict with automatically unsubscribing a non-responsive Subscriber after the initial [`SyncError`](3-2-1-SyncError.html) is generated and distributed.
>* should all FHIRcast requests trigger  [`SyncError`](3-2-1-SyncError.html) events to be generated by the Hub for an unresponsive Subscriber or only when a context change is requested ([FHIR Resource]-open or [FHIR Resource]-close)?

### Hub Generated `open` Events

{% include questionnote.html text='This capability is experimental.' %}


If a Hub grants subscriptions to different sets of `hub.events` to different Subscribers for the same session, the Hub is responsible for generation of implied open events. Close events are typically not generated by the Hub.  When distributing a received event, a Hub SHALL ensure open events for the referenced resource types of the received event are also sent to subscribers. Hubs SHOULD either support derived events or require that Subscribers are subscribed to the same context. Hubs SHOULD NOT generate and send duplicative events.


---

// File: input/pagecontent/2-6-RequestContextChange.md

Similar to the Hub's notifications to the Subscriber, the Subscriber MAY request context changes with an HTTP POST to the `hub.url`. The Hub SHALL either accept this context change by responding with any successful HTTP status or reject it by responding with any 4xx or 5xx HTTP status. Similar to event notifications, described above, the Hub MAY also respond with a 202 (Accepted) status, process the request, and then later, instead of broadcasting the context change, responds with a `SyncError` event in order to reject the request. In this specific case in which the context change is rejected by the Hub and not broadcasted, the `SyncError` would only be sent to the requesting Subscriber. The Subscriber SHALL be capable of gracefully handling a rejected context request. 

Once a requested context change is accepted, the Hub SHALL broadcast the context notification to all Subscribers, including the original requesting Subscriber. The requesting Subscriber can use the broadcasted notification as confirmation of their request. The Hub reusing the request's `id` is further confirmation to the requesting Subscriber that the event is a result of their request.

<figure>
  {% include EventNotificationSequence.svg %}
  <figcaption><b>Figure: Event Notification Sequence</b></figcaption>
  <p></p>
</figure>

### Request Context Change body

The format of the Request Context Change request is presented below.

{:.grid}
Field       | Optionality | Type     | Description
----------- | ----------- | -------- | ---
`timestamp` | Required    | *string* | ISO 8601-2 timestamp in UTC describing the time at which the event occurred.
`id`        | Required    | *string* | Event identifier, which MAY be used to recognize retried notifications. This id SHALL be uniquely generated by the Subscriber and could be a UUID. Following an accepted context change request, the Hub SHALL re-use this value in the broadcasted event notification.
`event`     | Required    | *object* | A JSON object describing the event as defined in [Event Definition](2-3-Events.html).

Hubs and Subscribers SHALL be case insensitive for event-names.

A Subscriber that initiates a context change and receives a `SyncError` related to a context change event it sent, SHOULD resend this event at regular intervals until sync is reestablished or another, newer, event has been received. It is recommended to wait at least 10 seconds before resending the event. Note that such resend will use the timestamp of the original event to prevent race conditions.

### Request Context Change example

#### Request

```text
POST https://hub.example.com HTTP/1.1
Host: hub
Authorization: Bearer i8hweunweunweofiwweoijewiwe
Content-Type: application/json

{
  "timestamp": "2018-01-08T01:40:05.14",
  "id": "wYXStHqxFQyHFELh",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "Patient-close",
    "context": [
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "798E4MyMcpCWHab9",
          "identifier": [
             {
               "type": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "value": "MR",
                            "display": "Medical Record Number"
                         }
                        "text": "MRN"
                      ]
                  }
              }
          ]
        }
      }
    ]
  }
}
```

#### Response

```text
HTTP/1.1 202 Accepted
```


---

// File: input/pagecontent/2-7-Conformance.md

The FHIRcast specification can be described as a set of capabilities and any specific FHIRcast Hub may implement a subset of these capabilities. A FHIRcast Hub declares support for FHIRcast and specific capabilities by exposing an extension on the FHIR CapabilityStatement resource as described below. 


### Wellknown Endpoint

To support various architectures, including multiple decentralized FHIRcast hubs, the Hub exposes a `.well-known` endpoint containing additional information about the capabilities of that Hub. A Hub's supported events, version, and other capabilities can be exposed as a Well-Known Uniform Resource Identifiers (URIs) ([RFC5785](https://tools.ietf.org/html/rfc5785)) JSON document.

Hubs SHALL serve a JSON document at the location formed by appending `/.well-known/fhircast-configuration` to their `hub.url`. Contrary to RFC5785 Appendix B.4, the `.well-known` path component may be appended even if the `hub.url` endpoint already contains a path component.

A simple JSON document is returned using the `application/json` mime type, with the following key/value pairs:

{:.grid}
Field              | Optionality | Type  | Description
------------------ | ----------- | ----- | ---
`eventsSupported`  | Required    | array | Array of FHIRcast events supported by the Hub.
`websocketSupport` | Required    | boolean | SHALL have the static value: `true` - indicating support for websockets. FYI to Implementers: Given that websocket support is the only defined communication method in FHIRcast versions STU3 and was required in STU2, it's likely that this element will become Optional and then Deprecated in the future.
`fhircastVersion`  | Optional | string | `STU1`, `STU2`, or `STU3` - indicating support for a specific version of FHIRcast. Hubs SHOULD indicate the version of FHIRcast supported.
`getCurrentSupport` | Optional | boolean | `true` or `false` - indicating support for the "[Get Current Context](2-9-GetCurrentContext.html)" API.
`fhirVersion`  | Optional | string | `DSTU1`, `DSTU2`, `STU3`, `R4`, `R4B`, or `R5` - indicating the specific version of FHIR for this Hub.

A field of `webhookSupport` SHALL be ignored.

#### Wellknown endpoint discovery example

In this example the Hub URL is "www.hub.example.com/".

##### Wellknown endpoint discovery Request

```text
GET /.well-known/fhircast-configuration HTTP/1.1
Host: www.hub.example.com
```

#### Wellknown endpoint discovery Response

```text
HTTP/1.1 200 OK
Content-Type: application/json

{
  "eventsSupported": ["Patient-open", "Patient-close", "SyncError", "com.example.researchstudy-transmogrify"],
  "websocketSupport": true,
  "fhircastVersion": "STU3"
}
```

### FHIR Capability Statement

To supplement or optionally identify the location of a FHIRcast hub, a FHIR server MAY declare support for FHIRcast using the FHIRcast extension on its FHIR CapabilityStatement's `rest` element. Note that client-side Hubs without a client-side FHIR server likely will not support communicating the url of a hub in this extension. See [the FHIRcast CapabilityStatement profile](StructureDefinition-fhircast-capabilitystatement.html).

### FHIR Resource Structures

FHIRcast defines profiles for various FHIR resource structures used in the specification, see [`summary of artifacts`](artifacts.html).

#### Must Support

In the context of FHIRcast, must support (MS) on any data element SHALL be interpreted to mean [FHIR’s MustSupport](https://www.hl7.org/fhir/conformance-rules.html#mustSupport). Generally, implementations are expected to:
* if known and possible, populate supported data elements as part of the event notifications as specified by the FHIRcast profiles.
* interpret missing, supported data elements within resource instances as data not present in the sending systems (or for which the requestor is unauthorized).


---

// File: input/pagecontent/2-8-Extensions.md

The specification is not prescriptive about support for extensions. However, to support extensions, the specification reserves the name `extension` and will never define an element with that name, allowing implementations to use it to provide custom behavior and information. The value of an extension element SHALL be a pre-coordinated JSON object. For example, an extension on a notification could look like this:

```json
{
 "context": [{
   "key": "patient",
   "resource": {
    "resourceType": "Patient",
    "id": "ewUbXT9RWEbSj5wPEdgRaBw3"
   }
  },
  {
   "key": "extension",
   "data": {
    "user-timezone": "+1:00"
   }
  }
 ]
}
```


---

// File: input/pagecontent/2-9-GetCurrentContext.md

{% include questionnote.html text='Implementer feedback is solicited on the GetCurrentContext operation.' %}

In some situations, Subscribers may want to verify the current context. This section defines a method in which the current context can be retrieved using a GET call. The Hub responds to this GET request with the most recently communicated open event. 

Hubs MAY support returning the current context of a session, as defined below.

### Get Current Context Request

The requester makes an HTTP GET call to the following URL:

GET `base-hub-URL/{topic}`

### Get Current Context Response

This method returns an object containing the current context of a topic; where the current context is the most recent *-open event according to the Subscriber's subscription.  The current context is made up of one or more "top-level" contextual resources and the type of the anchor context SHALL be in the `context.type` field.  For example, if the current context was established using a [`Patient-open`](3-3-1-Patient-open.html) request the returned object will contain `context.type: "Patient"`.  If the current context was created by a [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) request the returned object will contain `context.type: "DiagnosticReport"`.  If there is no context currently established, the `context.type` SHALL contain an empty string and the `context` SHALL be an empty array.

If an established context is closed without another being opened, the Hub SHALL return an empty context (which as specified above is indicated by returning an empty string for the `context.type` and an empty array in `context`).  See [Multi-tab Considerations](4-4-multitab-considerations.html) for additional discussion on multiple context scenarios.

{:.grid}
Field | Optionality | Type | Description
----- | --- | --- | ---
`context.type` | Required | string | ResourceType of the context element or an empty string if no context is currently established.
`context.versionId` | Required | string | The versionId of the current context. Each time the context changes, a different versionId is generated.
`context`   | Required | array | The context array of the corresponding context element as was supplied in the most recent `-open` event or an empty array if no context is currently established.

### Content Sharing Support

If a Hub supports content sharing, the Hub returns the current content in a `content` key in the `context` array.  There SHALL be one and only one `Bundle` resource which SHALL have a `type` of `collection`.  No entry in the `Bundle` SHALL contain a `request` attribute.  The `Bundle` SHALL contain no entries if there is no content associated with the current context.

#### Context

{:.grid}
Key | Optionality | FHIR operation to generate context | Description
--- | --- | --- | ---
`content` | REQUIRED if content sharing is supported | not applicable | Current content of the anchor context or a `Bundle` resource with no entries if no content is associated with the current context. The `Bundle` resource SHALL conform to the [FHIRcast get current content Bundle](StructureDefinition-fhircast-get-current-content-bundle.html) profile.

### Examples

#### Get Context Response Example

The following example shows a response to the get context request when the current context was created by a [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) request.  The response contains version "023fe970-a6d9-442f-a499-dfb71f1edba6" of the anchor context's content which contains a single `Observation` resource. 

```json
{
  "context.type": "DiagnosticReport",
  "context.versionId": "023fe970-a6d9-442f-a499-dfb71f1edba6",
  "context": [
    {
      "key": "report",
      "resource": {
        "resourceType": "DiagnosticReport",
        "id": "40012366",
        "status": "unknown",
        "subject": {
          "reference": "Patient/ewUbXT9RWEbSj5wPEdgRaBw3"
        },
        "imagingStudy": [
          {
            "reference": "ImagingStudy/8i7tbu6fby5ftfbku6fniuf"
          }
        ]
      }
    },
    {
      "key": "patient",
      "resource": {
        "resourceType": "Patient",
        "id": "ewUbXT9RWEbSj5wPEdgRaBw3",
        "identifier": [
          {
            "system": "urn:oid:1.2.840.114350",
            "value": "185444"
          }
        ]
      }
    },
    {
      "key": "study",
      "resource": {
        "resourceType": "ImagingStudy",
        "description": "CHEST XRAY",
        "started": "2010-01-30T23:00:00.000Z",
        "status": "available",
        "id": "8i7tbu6fby5ftfbku6fniuf",
        "identifier": [
          {
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                  "code": "ACSN"
                }
              ]
            },
            "value": "342123458"
          },
          {
            "system": "urn:dicom:uid",
            "value": "urn:oid:2.16.124.113543.6003.1154777499.38476.11982.4847614254"
          }
        ],
        "subject": {
          "reference": "Patient/ewUbXT9RWEbSj5wPEdgRaBw3"
        }
      }
    },
    {
      "key": "content",
      "resource": {
        "resourceType": "Bundle",
        "id": "8i7tbu6fby5fuuey7133eh",
        "type": "collection",
        "entry": [
          {
            "resource": {
              "resourceType": "Observation",
              "id": "435098234",
              "partOf": {
                "reference": "ImagingStudy/8i7tbu6fby5ftfbku6fniuf"
              },
              "status": "preliminary",
              "subject": {
                "reference": "Patient/ewUbXT9RWEbSj5wPEdgRaBw3"
              },
              "category": {
                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                "code": "imaging",
                "display": "Imaging"
              },
              "code": {
                "coding": [
                  {
                    "system": "http://www.radlex.org",
                    "code": "RID49690",
                    "display": "simple cyst"
                  }
                ]
              },
              "issued": "2020-09-07T15:02:03.651Z"
            }
          }
        ]
      }
    }
  ]
}
```
The following example shows the returned structure when no context is established:

```json
{
  "context.type": "",
  "context": []
}
```


---

// File: input/pagecontent/3_Events.md

Section [2.3 Events](2-3-Events.html) defines the events and event types supported by FHIRcast. The events that are supported by a Hub are communicated using the conformance endpoint (see [Conformance](2-7-Conformance.html)).

Although [2.3 Events](2-3-Events.html) provides the base definition of the events, many commonly used events extend on this base definition. Such extension include the definition of profiles on the resources used in context elements and the definition of additional context elements. 

This chapter contains the definition of these events and their event maturity level.  

The sections in this chapter are:

| **3.1 Definitions** |
| [3.1.1 Event template](3-1-1-template.html) |
| [3.1.2 Event maturity model](3-1-2-eventmaturitymodel.html) |

| **3.2 Infrastructure Events** |
| [3.2.1 SyncError event](3-2-1-SyncError.html) |
| [3.2.2 UserLogout.html event](3-2-2-UserLogout.html) |
| [3.2.3 UserHibernate.html event](3-2-3-UserHibernate.html) |
| [3.2.4 Home-open Event](3-2-5-Home-open.html) |

| **3.3 Patient Events** |
| [3.3.1 Patient-open event](3-3-1-Patient-open.html) |
| [3.3.2 Patient-close event](3-3-2-Patient-close.html) |

| **3.4 Encounter Events** |
| [3.4.1 Encounter-open event](3-4-1-Encounter-open.html) |
| [3.4.2 Encounter-close event](3-4-2-Encounter-close.html) |

| **3.5 ImagingStudy Events** |
| [3.5.1 ImagingStudy-open event](3-5-1-ImagingStudy-open.html) |
| [3.5.2 ImagingStudy-close event](3-5-2-ImagingStudy-close.html) |

| **3.6 DiagnosticReport Events** |
| [3.6.1 DiagnosticReport-open Event](3-6-1-DiagnosticReport-open.html) |
| [3.6.2 DiagnosticReport-close Event](3-6-2-DiagnosticReport-close.html) |
| [3.6.3 DiagnosticReport-update Event](3-6-3-DiagnosticReport-update.html) |
| [3.6.4 DiagnosticReport-select Event](3-6-4-DiagnosticReport-select.html) |


---

// File: input/pagecontent/3-1-0-eventstructures.md

Definitions of FHIRcast event structure and the event maturity model.

| **Definitions** |
| [Event template](3-1-1-template.html) |
| [Event maturity model](3-1-2-eventmaturitymodel.html) |


---

// File: input/pagecontent/3-1-1-template.md

This section presents the template to use for defining new events. 

### Event-name: [FHIR resource]-[suffix]

eventMaturity | [0 - Draft](3-1-2-eventmaturitymodel.html)

### Workflow

Describe when this event occurs in a workflow. Describe how the context fields relate to one another. Event creators SHOULD include as much detail and clarity as possible to minimize any ambiguity or confusion amongst implementors.

### Context

Define context values that are provided when this event occurs, and indicate whether they must be provided, and the FHIR query used to generate the resource.

{:.grid}
Key | Optionality | Description
----- |  ---- | ---- 
`example` | REQUIRED | Describe the context value
`FHIRresource` | OPTIONAL | Describe the context value

### Examples

```json
{
  "timestamp": "2018-01-08T01:37:05.14",
  "id": "q9v3jubddqt63n1",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "Patient-open",
    "context": [
      {
        "key": "key-from-above",
        "resource": {
          "resourceType": "resource-type-from-above"
        }
      },
      {
        "key": "encounter",
        "resource": {
          "resourceType": "Encounter"
        } 
      }
    ]
  }
}
```

## Change Log

Changes made to an event's definition SHALL be documented in a change log to ensure event consumers can track what has been changed over the life of an event. The change log SHALL contain the following elements:

- Version: The version of the change
- Description: A description of the change and its impact

For example:

{:.grid}
Version | Description
------- | ----
1.1     | Added new context FHIR object
1.0.1   | Clarified workflow description
1.0     | Initial Release


---

// File: input/pagecontent/3-1-2-eventmaturitymodel.md

The intent of the FHIRcast Event Maturity Model is to attain broad community engagement and consensus before an event is labeled as mature, and to ensure that the event is necessary, implementable, and worthwhile to the systems that would reasonably be expected to use it. Implementer feedback should drive the maturity of new events. Diverse participation in open developer forums and events, such as HL7 FHIR Connectathons, is necessary to achieve significant implementer feedback. The below criteria will be evaluated with these goals in mind. 

{:.grid}
Maturity Level | Maturity title | Requirements
--- | --- | ---
0 | Draft | Event is correctly named and defined per the [FHIRcast event template](3-1-1-template.html). 
1 | Submitted  | _The above, and …_ Event definition is written up as a pull request using the [Event template](3-1-1-template.html) and community feedback is solicited from the community (e.g. the zulip FHIRcast stream](https://chat.fhir.org/#narrow/stream/179271-FHIRcast)).
2 | Tested | _The above, and …_ The event has been tested and successfully supports interoperability among at least one Hub and two independent Subscribers using semi-realistic data and scenarios (e.g. at an HL7 FHIR Connectathon). The github pull request defining the event is approved and published.
3 | Considered |  _The above, and …_ At least 3 distinct organizations recorded ten distinct implementer comments (including a github or jira issue, tracker item, or comment on the event definition page), including at least two Hubs and three Subscribers. The event has been tested at minimum two HL7 FHIR Connectathons.
4 | Documented | _The above, and …_ The HL7 workgroup agrees that the artifact is sufficiently stable to require implementer consultation for subsequent non-backward compatible changes.  The event is implemented in the standard FHIRcast reference implementation and multiple prototype projects. The Event specification SHALL: (1) Identify a broad set of example contexts in which the event may be used with a minimum of three, but as many as 10. (2) Clearly differentiate the event from similar events or other standards to help an implementer determine if the event is correct for their scenario. (3) Explicitly document example scenarios when the event should not be used.
5 | Mature | _The above, and ..._ The event has been implemented in production in at least two Hubs and three independent Subscribers. An HL7 working group ballots the event and the event has passed an HL7 STU ballot.
6 | Normative | _The above, and ..._ the responsible HL7 working group and the sponsoring working group agree the material is ready to lock down and the event has passed an HL7 normative ballot

As each event progresses through a process of being defined, tested, implemented, used in production environments, and balloted, the event's formal maturity level increases. Each event has its own maturity level, which SHALL be defined in the event's definition and correspond to this Event Maturity Model.


---

// File: input/pagecontent/3-2-0-infrastructureevents.md

Supporting events used in basic FHIRcast interactions.

| **Infrastructure Events** |
| [SyncError event](3-2-1-SyncError.html) |
| [UserLogout event](3-2-2-UserLogout.html) |
| [UserHibernate event](3-2-3-UserHibernate.html) |



---

// File: input/pagecontent/3-2-1-SyncError.md

### Event-name: SyncError

eventMaturity | [2 - Tested](3-1-2-eventmaturitymodel.html)

### Workflow

A synchronization error has been detected and this is indicated to Subscribers. 

Unlike most of FHIRcast events, `SyncError` is an infrastructural event and does not follow the `FHIR-resource`-`[open|close]` syntax and is directly referenced in the [underlying specification](2_Specification.html).

A `SyncError` is sent by a Subscriber when:
1. It responds to a context change event with a 202 indicating the context change is accepted but has not yet occurred, and later the Subscriber decides to refuse the context (see: [`Event Notification Response`](2-5-EventNotification.html#event-notification-response)). 

In these events the field `issue.severity` is SHALL be set to `warning` as is specified in [Operation outcome for Subscriber generated sync-errors](StructureDefinition-fhircast-subscriber-operation-outcome-syncerrror.html). `SyncError` is not used when a Subscriber responds to an `*-update` or `*-select` event.


A `SyncError` is broadcast by the Hub when one of the following conditions occur:
1. A Subscriber encounters an error when following a context, returning a server error (50X) to the Hub (see: [`Event Notification Response`](2-5-EventNotification.html#event-notification-response)).
2. A Subscriber decides not to follow a context, returning a server conflict (409) to the Hub (see: [`Event Notification Response`](2-5-EventNotification.html#event-notification-response)).
3. The Hub detects a connection issue with a Subscriber (see: [`Hub Generated SyncError Events`](2-5-EventNotification.html#hub-generated-syncerror-events)).

In these events the field `issue.severity` SHALL beset to `warning` as is specified in [Operation outcome for Hub generated sync-errors](StructureDefinition-fhircast-hub-operation-outcome-syncerrror.html).


### Context
 
The `context` array SHALL contain a single FHIR OperationOutcome based on the profile [Operation outcome for sync-errors](StructureDefinition-fhircast-operation-outcome-syncerror.html).


### Example

```json
{
  "timestamp": "2018-01-08T01:37:05.14",
  "id": "q9v3jubddqt63n1",
  "event": {
    "hub.topic": "7544fe65-ea26-44b5-835d-14287e46390b",
    "hub.event": "syncerror",
    "context": [
      {
        "key": "operationoutcome",
        "resource": {
          "resourceType": "OperationOutcome",
          "issue": [
            {
              "severity": "warning",
              "code": "processing",
              "diagnostics": "Acme Product failed to follow context",
              "details": {
                "coding": [
                  {
                    "system": "https://fhircast.hl7.org/events/syncerror/eventid",
                    "code": "fdb2f928-5546-4f52-87a0-0648e9ded065"
                  },
                  {
                    "system": "https://fhircast.hl7.org/events/syncerror/eventname",
                    "code": "Patient-open"
                  },
                  {
                    "system": "https://fhircast.hl7.org/events/syncerror/subscriber",
                    "code": "Acme Product"
                  },
                  {
                    "system": "http://example.com/events/syncerror/your-error-code-system",
                    "code": "FHIRcast sync error"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
```

### Change Log

{:.grid}
| Version | Description |
| ------- | ------------- |
| 1.0     | Initial Release |
| 2.0     | Require id of event syncerror is about, in `OperationOutcome.details.coding.code` |
| 2.1     | Clarify scenarios, make the OperationOutcome resource required, and specify explicit `severity` codes |


---

// File: input/pagecontent/3-2-2-UserLogout.md

### Event-name: UserLogout

eventMaturity | [1 - Submitted](3-1-2-eventmaturitymodel.html)

### Workflow

A Subscriber indicates that the User's session has ended, perhaps by exiting the Subscriber through a logout, session time-out or other reason. Upon receiving a `UserLogout` event, the application SHOULD logout the user or respond with a `SyncError`.

Unlike most of FHIRcast events, `UserLogout` is a statically named event and therefore does not follow the regular FHIRcast syntax.

Implementers are encouraged to consider if and when their application should logout the user upon receiving an userLogout event, and if so, how to preserve application state.

If a Subscriber decides that it will not logout the current user it SHOULD send a [SyncError](3-2-1-SyncError.html) with appropriate details indicating why the Subscriber chose not to logout the current user. 

### Context

The context SHOULD contain a Parameters resource according to the following profile [Logout Context](StructureDefinition-fhircast-logout.html).

### Examples

```json
{
  "timestamp": "2019-11-25T13:16:00.00",
  "id": "35d0b1d4-de45-4b5b-a0e9-9c51b21ee71a",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065", 
    "hub.event": "userLogout", 
    "context": [{
      "key": "parameters",
      "resource" : {
        "resourceType": "Parameters",
        "parameter":[{
          "name": "code",
          "valueCoding": {
            "system": "http://hl7.org/fhir/uv/fhircast/CodeSystem/fhircast-logout-codesystem",
            "code" : "user-initiated",
            "display": "The user initiated the logour and suggests all Subscribers should logout."
          }
        }]
      }
    }] 
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ---- | ----
| 1.0 | Initial Release


---

// File: input/pagecontent/3-2-3-UserHibernate.md

### Event-name: UserHibernate

eventMaturity | [1 - Submitted](3-1-2-eventmaturitymodel.html)

### Workflow

User temporarily suspended their session due to a session time-out or other reason. The user's session will eventually resume.
 
Unlike most of FHIRcast events, `UserHibernate` is a statically named event and therefore does not follow the `FHIR-resource`-`[open|close]` syntax.

### Context

The context SHOULD contain a Parameters resource according to the following profile [Hibernate Context](StructureDefinition-fhircast-hibernate.html).

### Examples

```json
{
  "timestamp": "2019-11-25T13:16:00.00",
  "id": "35d0b1d4-de45-4b5b-a0e9-9c51b21ee71a",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "userHibernate",
    "context": [{
      "key": "parameters",
      "resource" : {
        "resourceType": "Parameters",
        "parameter":[{
          "name": "code",
          "valueCoding": {
            "system": "http://hl7.org/fhir/uv/fhircast/CodeSystem/fhircast-hibernate-codesystem",
            "code" : "user-initiated",
            "display" : "The user initiated the hibernation."
          }
        }]
      }
    }]
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ------- | ----
| 1.0     | Initial Release


---

// File: input/pagecontent/3-2-5-Home-open.md

### Home-open

eventMaturity | [1 - Submitted](3-1-2-eventmaturitymodel.html)

### Workflow

The user has opened or switched back to the application's home page or tab which does not have any FHIR related context.

Unlike most of FHIRcast events, `Home-open` is representing the lack of a FHIR resource context and therefore does not fully follow the `FHIR-resource`-`[open|close]` syntax.

The order of patients can be different between different applications (like a late application joining being temporarily out of sync).

### Context

The context is empty.

### Example

```json
{
  "timestamp": "2019-11-25T13:16:00.00",
  "id": "35d0b1d4-de45-4b5b-a0e9-9c51b21ee71a",
  "event": {
  "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065", 
  "hub.event": "home-open", 
  "context": [] 
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ---- | ----
| 1.0 | Initial Release


---

// File: input/pagecontent/3-3-0-patientevents.md

Events used when establishing patient contexts.

| **Patient Events** |
| --- |
| [Patient-open event](3-3-1-Patient-open.html) |
| [Patient-close event](3-3-2-Patient-close.html) |


---

// File: input/pagecontent/3-3-1-Patient-open.md

### Event name: Patient-open

eventMaturity | [3 - Considered](3-1-2-eventmaturitymodel.html)

### Workflow

User opened a patient's medical record. The indicated patient is now the current patient in context. 

### Context

{:.grid}
Key | Cardinality | Description
----- | -------- | ---- 
`patient` | 1..1 | FHIR Patient resource describing the patient now in context.

The following profile provides guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in a Patient open request:

* [Patient for Open Events](StructureDefinition-fhircast-patient-open.html)

Other attributes of the Patient resource (or resource extensions) may be present in the provided resource; however, attributes not called out in the profile are not required by the FHIRcast standard.

### Examples

```json
{
  "timestamp": "2023-04-01T010:38:04.16",
  "id": "6efe28b2-7f8b-4cbc-bc59-a21a902f7e04",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "Patient-open",
    "context": [
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ],
          "name" : [
            {
              "use" : "official",
              "family" : "Smith",
              "given" : [
                "John"
              ],
              "prefix" : [
                "Dr."
              ],
              "suffix" : [
                "Jr.",
                "M.D."
              ]
            }
          ],
          "gender" : "male",
          "birthDate" : "1978-11-03"
        }
      }
    ]
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ---- | ----
| 1.0 | Initial Release
| 1.1 | Deprecate encounter element in favor of dedicated `encounter-open` event
| 1.2 | Reference context resource profiles and update example to be compliant with the profiles


---

// File: input/pagecontent/3-3-2-Patient-close.md

### Event-name: Patient-close

eventMaturity | [3 - Considered](3-1-2-eventmaturitymodel.html)

### Workflow

User closed the patient's medical record. A previously opened and in context patient is no longer open nor in context.

### Context

{:.grid}
Key | Cardinality | Description
----- | -------- | ---- 
`patient` | 1..1 | FHIR Patient resource describing the patient previously in context that is being closed.

The following profiles provide guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in a Patient close request:

* [Patient for Close Events](StructureDefinition-fhircast-patient-close.html)

Other attributes of the Patient resource (or resource extensions) may be present in the provided resource; however, attributes not called out in the profile are not required by the FHIRcast standard.

### Examples

```json
{
  "timestamp": "2023-04-01T010:50:22.16",
  "id": "112d5571-10e6-4912-8fd8-322da7926ae8",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "Patient-close",
    "context": [
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ]
        }
      }
    ]
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ---- | ----
| 1.0 | Initial Release
| 1.1 | Deprecate encounter element in favor of dedicated `encounter-close` event
| 1.2 | Reference context resource profiles and update example to be compliant with the profiles


---

// File: input/pagecontent/3-4-0-encounterevents.md

Events used when establishing encounter contexts.

| **Encounter Events** |
| --- |
| [Encounter-open event](3-4-1-Encounter-open.html) |
| [Encounter-close event](3-4-2-Encounter-close.html) |


---

// File: input/pagecontent/3-4-1-Encounter-open.md

### Event-name: Encounter-open

eventMaturity | [2 - Tested](3-1-2-eventmaturitymodel.html)

### Workflow

User opened patient's medical record in the context of a single encounter. The indicated encounter and its patient are now in context.

### Context

{:.grid}
Key | Cardinality |Description
----- | -------- |---- 
`encounter` | 1..1 | FHIR Encounter resource describing the encounter now in context.
`patient` | 1..1 | FHIR Patient resource describing the patient whose encounter is now in context.

The following profiles provide guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in an Encounter open request:

* [Encounter for Open Events](StructureDefinition-fhircast-encounter-open.html)
* [Patient for Open Events](StructureDefinition-fhircast-patient-open.html)

Other attributes of the Encounter and Patient resources (or resource extensions) may be present in the provided resources; however, attributes not called out in the profiles are not required by the FHIRcast standard.

### Examples

```json
{
  "timestamp": "2023-04-01T010:54:10.23",
  "id": "c6a3e2eb-16b4-4eb8-b48b-7eb6c924919b",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "Encounter-open",
    "context": [
      {
        "key": "encounter",
        "resource": {
          "resourceType": "Encounter",
          "id": "8cc652ba-770e-4ae1-b688-6e8e7c737438",
          "identifier": [
            {
              "use" : "official",
              "system" : "http://myhealthcare.com/visits",
              "value" : "r2r22345"
            }
          ],
          "status" : "unknown",
          "class" : {
            "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code" : "AMB"
          },
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          }
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ],
          "name" : [
            {
              "use" : "official",
              "family" : "Smith",
              "given" : [
                "John"
              ],
              "prefix" : [
                "Dr."
              ],
              "suffix" : [
                "Jr.",
                "M.D."
              ]
            }
          ],
          "gender" : "male",
          "birthDate" : "1978-11-03"
        }
      }
    ]
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ---- | ----
| 1.0 | Initial Release
| 1.1 | Reference context resource profiles and update example to be compliant with the profiles


---

// File: input/pagecontent/3-4-2-Encounter-close.md

### Event-name: Encounter-close

eventMaturity | [2 - Tested](3-1-2-eventmaturitymodel.html)

### Workflow

User closed a patient's medical record encounter context. A previously open and in context patient encounter is no longer open nor in context. 

### Context

{:.grid}
Key | Cardinality | Description
----- | -------- | ---- 
`encounter` | 1..1 | FHIR Encounter resource describing the encounter previously in context that is being closed.
`patient` | 1..1 | FHIR Patient resource describing the patient associated with the encounter being closed.

The following profiles provide guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in an Encounter close request:

* [Encounter for Close Events](StructureDefinition-fhircast-encounter-close.html)
* [Patient for Close Events](StructureDefinition-fhircast-patient-close.html)

Other attributes of the Encounter and Patient resources (or resource extensions) may be present in the provided resources; however, attributes not called out in the profiles are not required by the FHIRcast standard.

### Examples

```json
{
  "timestamp": "2023-04-01T010:58:32.35",
  "id": "96e847ed-4889-47e8-9f96-1458f50f405d",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "Encounter-close",
    "context": [
      {
        "key": "encounter",
        "resource": {
          "resourceType": "Encounter",
          "id": "8cc652ba-770e-4ae1-b688-6e8e7c737438",
          "identifier": [
            {
              "use" : "official",
              "system" : "http://myhealthcare.com/visits",
              "value" : "r2r22345"
            }
          ],
          "status" : "unknown",
          "class" : {
            "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code" : "AMB"
          },
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          }
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ]
        }
      }
    ]
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ---- | ----
| 1.0 | Initial Release
| 1.1 | Reference context resource profiles and update example to be compliant with the profiles


---

// File: input/pagecontent/3-5-0-imagingstudyevents.md

Events used when establishing imaging study contexts.

| **ImagingStudy Events** |
| ----------------------- |
| [ImagingStudy-open event](3-5-1-ImagingStudy-open.html) |
| [ImagingStudy-close event](3-5-2-ImagingStudy-close.html) |


---

// File: input/pagecontent/3-5-1-ImagingStudy-open.md

### Event-name: ImagingStudy-open

eventMaturity | [2 - Tested](3-1-2-eventmaturitymodel.html)

### Workflow

User opened an imaging study. The newly opened image study is now the current imaging study in context.  When the image study's subject is a patient, this patient SHALL be provided in the event.

### Context

{:.grid}
Key | Cardinality | Description
----- | -------- | ---- 
`study` | 1..1 | FHIR ImagingStudy resource describing the image study now in context.
`encounter` | 0..1 | A FHIR Encounter resource may be associated with the image study.
`patient` | 0..1 | FHIR Patient resource describing the patient whose image study is currently in context.  A Patient SHALL be present if there is a patient associated with the image study.  Note there are rare cases in which the ImagingStudy.subject references a resource which is not a patient; for example a calibration study would reference the device being calibrated.

The following profiles provide guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in an ImagingStudy open request:

* [ImagingStudy for Open Events](StructureDefinition-fhircast-imaging-study-open.html)
* [Encounter for Open Events](StructureDefinition-fhircast-encounter-open.html)
* [Patient for Open Events](StructureDefinition-fhircast-patient-open.html)

Other attributes of the ImagingStudy, Encounter, and Patient resources (or resource extensions) may be present in the provided resources; however, attributes not called out in the profiles are not required by the FHIRcast standard.

### Examples
  
```json
{
  "timestamp": "2023-04-01T011:03:04.08",
  "id": "bfbe806f-7f94-47bc-b6b8-4c0cf4d4ef7d",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "ImagingStudy-open",
    "context": [
      {
        "key": "study",
        "resource": {
          "resourceType": "ImagingStudy",
          "id": "e25c1d31-20a2-41f8-8d85-fe2fdeac74fd",
          "identifier": [
            {
              "system" : "urn:dicom:uid",
              "value" : "urn:oid:1.2.840.83474.8.231.875.3.15.661594731"
            },
            {
              "type" : {
                "coding" : [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "ACSN"
                  }
                ]
              },
              "system" : "urn:oid:2.16.840.1.113883.19.5",
              "value" : "GH339884",
              "assigner" : {
                "reference" : "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                  "display" : "My Healthcare Provider"
              }
            }
          ],
          "status": "unknown",
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          }
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ],
          "name" : [
            {
              "use" : "official",
              "family" : "Smith",
              "given" : [
                "John"
              ],
              "prefix" : [
                "Dr."
              ],
              "suffix" : [
                "Jr.",
                "M.D."
              ]
            }
          ],
          "gender" : "male",
          "birthDate" : "1978-11-03"
        }
      }
    ]
  }
}
```

<!---
This is an example for FHIR R5 using the basedOn array for the accession
```json
{
  "timestamp": "2023-04-01T011:03:04.08",
  "id": "bfbe806f-7f94-47bc-b6b8-4c0cf4d4ef7d",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "ImagingStudy-open",
    "context": [
      {
        "key": "study",
        "resource": {
          "resourceType": "ImagingStudy",
          "id": "e25c1d31-20a2-41f8-8d85-fe2fdeac74fd",
          "identifier": [
            {
              "system" : "urn:dicom:uid",
              "value" : "urn:oid:1.2.840.83474.8.231.875.3.15.661594731"
            }
          ],
          "status": "unknown",
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          },
          "basedOn" : [
            {
              "type" : "ServiceRequest",
              "identifier" : {
                "type" : {
                  "coding" : [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                      "code" : "ACSN"
                    }
                  ]
                },
                "system" : "urn:oid:2.16.840.1.113883.19.5",
                "value" : "GH339884",
                "assigner" : {
                  "reference" : "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                  "display" : "My Healthcare Provider"
                }
              }
            }
          ]
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ],
          "name" : [
            {
              "use" : "official",
              "family" : "Smith",
              "given" : [
                "John"
              ],
              "prefix" : [
                "Dr."
              ],
              "suffix" : [
                "Jr.",
                "M.D."
              ]
            }
          ],
          "gender" : "male",
          "birthDate" : "1978-11-03"
        }
      }
    ]
  }
}
--->

### Change Log

{:.grid}
| Version | Description
| ------- | ----
| 1.0 | Initial Release
| 1.1 | Reference context resource profiles and update example to be compliant with the profiles


---

// File: input/pagecontent/3-5-2-ImagingStudy-close.md

### Event-name: ImagingStudy-close

eventMaturity | [2 - Tested](3-1-2-eventmaturitymodel.html)

### Workflow

User closed an imaging study. A previously open and in context image study is no longer open nor in context. When the ImagingStudy refers to a Patient this patient SHALL be indicated in the event.

### Context

{:.grid}
Key | Cardinality | Description
----- | -------- |  ---- 
`study` | 1..1 | FHIR ImagingStudy resource describing the image study previously in context that is being closed.
`encounter` | 0..1 | A FHIR Encounter resource may be associated with the image study.
`patient` | 0..1 | FHIR Patient resource describing the patient associated with the image study being closed.  A Patient SHALL be present if there is a patient associated with the image study.

The following profiles provide guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in an ImagingStudy close request:

* [ImagingStudy for Close Events](StructureDefinition-fhircast-imaging-study-close.html)
* [Encounter for Close Events](StructureDefinition-fhircast-encounter-close.html)
* [Patient for Close Events](StructureDefinition-fhircast-patient-close.html)

Other attributes of the ImagingStudy, Encounter, and Patient resources (or resource extensions) may be present in the provided resources; however, attributes not called out in the profiles are not required by the FHIRcast standard.

### Examples

```json
{
  "timestamp": "2023-04-01T011:13:12.42",
  "id": "bccaeba4-494a-459b-adf3-be0cf29dd2a0",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "ImagingStudy-close",
    "context": [
      {
        "key": "study",
        "resource": {
          "resourceType": "ImagingStudy",
          "id": "e25c1d31-20a2-41f8-8d85-fe2fdeac74fd",
          "identifier": [
            {
              "system" : "urn:dicom:uid",
              "value" : "urn:oid:1.2.840.83474.8.231.875.3.15.661594731"
            },
            {
              "type" : {
                "coding" : [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "ACSN"
                  }
                ]
              },
              "system" : "urn:oid:2.16.840.1.113883.19.5",
              "value" : "GH339884",
              "assigner" : {
                "reference" : "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                  "display" : "My Healthcare Provider"
              }
            }
          ],
          "status": "unknown",
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          }
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ]
        }
      }
    ]
  }
}
```

<!---
This is an example for FHIR R5 using the basedOn array for the accession
```json
{
  "timestamp": "2023-04-01T011:13:12.42",
  "id": "bccaeba4-494a-459b-adf3-be0cf29dd2a0",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "ImagingStudy-close",
    "context": [
      {
        "key": "study",
        "resource": {
          "resourceType": "ImagingStudy",
          "id": "e25c1d31-20a2-41f8-8d85-fe2fdeac74fd",
          "identifier": [
            {
              "system" : "urn:dicom:uid",
              "value" : "urn:oid:1.2.840.83474.8.231.875.3.15.661594731"
            }
          ],
          "status": "unknown",
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          },
          "basedOn" : [
            {
              "type" : "ServiceRequest",
              "identifier" : {
                "type" : {
                  "coding" : [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                      "code" : "ACSN"
                    }
                  ]
                },
                "system" : "urn:oid:2.16.840.1.113883.19.5",
                "value" : "GH339884",
                "assigner" : {
                  "reference" : "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                  "display" : "My Healthcare Provider"
                }
              }
            }
          ]
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ]
        }
      }
    ]
  }
}
```
--->

### Change Log

{:.grid}
| Version | Description
| ------- | ----
| 1.0 | Initial Release
| 1.1 | Reference context resource profiles and update example to be compliant with the profiles


---

// File: input/pagecontent/3-6-0-diagnosticreportevents.md

Events used when establishing diagnostic report contexts and exchanging content in the context of a diagnostic report.

| **DiagnosticReport Events** |
| --- |
| [DiagnosticReport-open Event](3-6-1-DiagnosticReport-open.html) |
| [DiagnosticReport-close Event](3-6-2-DiagnosticReport-close.html) |
| [DiagnosticReport-update Event](3-6-3-DiagnosticReport-update.html) |
| [DiagnosticReport-select Event](3-6-4-DiagnosticReport-select.html) |


---

// File: input/pagecontent/3-6-1-DiagnosticReport-open.md

### Event-name: DiagnosticReport-open

eventMaturity | [2 - Tested](3-1-2-eventmaturitymodel.html)

### Workflow

User opened a report.  The newly opened report is now the current report in context.  If a Hub supports content sharing, the report is also in the role of an [`anchor context`](5_glossary.html)

### Context

{:.grid}
Key | Cardinality | Description
----- | -------- | ---- 
`report` | 1..1 | FHIR DiagnosticReport resource describing the report now in context.
`encounter` | 0..1 | A FHIR Encounter resource may be associated with the report
`study` | 0..* | FHIR ImagingStudy resource(s) describing the image study (or image studies) which are the subject of the report now in context.  For non-imaging related uses of FHIRcast there may be no image study related to the report.  In radiology or other image related uses of FHIRcast, at least one imaging study would be the subject of a report and SHALL be included in the event's context.  
`patient` | 1..1 | FHIR Patient resource describing the patient whose report is currently in context. This Patient SHALL be the subject referenced by the DiagnosticReport and any ImagingStudy resources present in the context. 

The following profiles provide guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in a DiagnosticReport open request:

* [DiagnosticReport for Open Events](StructureDefinition-fhircast-diagnostic-report-open.html)
* [ImagingStudy for Open Events](StructureDefinition-fhircast-imaging-study-open.html)
* [Encounter for Open Events](StructureDefinition-fhircast-encounter-open.html)
* [Patient for Open Events](StructureDefinition-fhircast-patient-open.html)

Other attributes of the DiagnosticReport, ImagingStudy, Encounter, and Patient resources (or resource extensions) may be present in the provided resources; however, attributes not called out in the profiles are not required by the FHIRcast standard.

#### Content Sharing Support

If a Hub supports content sharing, when it distributes a `DiagnosticReport-open` event the Hub associates a `context.versionId` with the [`anchor context`](5_glossary.html).  Subscribers SHALL submit this `context.versionId` in subsequent [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) requests.  If a Subscriber is not subscribed to the [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) event the `context.versionId` can be safely ignored.


### Examples

#### DiagnosticReport-open Example Request

The following example shows a report being opened that contains a single primary study.

```json
{
  "timestamp": "2023-04-01T011:14:24.31",
  "id": "6930b943-39fc-447f-8099-92d17650a375",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "DiagnosticReport-open",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "2402d3bd-e988-414b-b7f2-4322e86c9327",
          "status": "unknown",
          "basedOn" : [
            {
              "type" : "ServiceRequest",
              "identifier" : {
                "type" : {
                  "coding" : [
                    {
                      "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                      "code" : "ACSN"
                    }
                  ]
                },
                "system" : "urn:oid:2.16.840.1.113883.19.5",
                "value" : "GH339884",
                "assigner" : {
                  "reference" : "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                  "display" : "My Healthcare Provider"
                }
              }
            }
          ],
          "code" : {
            "coding" : [
              {
                "system" : "http://loinc.org",
                "code" : "19005-8",
                "display": "Radiology Imaging study [Impression] (narrative)"
              }
            ]
          },
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          },
          "study": [
            {
              "reference": "ImagingStudy/e25c1d31-20a2-41f8-8d85-fe2fdeac74fd"
            }
          ]
        }
      },
      {
        "key": "study",
        "resource": {
          "resourceType": "ImagingStudy",
          "id": "e25c1d31-20a2-41f8-8d85-fe2fdeac74fd",
          "identifier": [
            {
              "system" : "urn:dicom:uid",
              "value" : "urn:oid:1.2.840.83474.8.231.875.3.15.661594731"
            }
          ],
          "status": "unknown",
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          },
          "basedOn" : [
            {
              "type" : "ServiceRequest",
              "identifier" : {
                "type" : {
                  "coding" : [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                      "code" : "ACSN"
                    }
                  ]
                },
                "system" : "urn:oid:2.16.840.1.113883.19.5",
                "value" : "GH339884",
                "assigner" : {
                  "reference" : "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                  "display" : "My Healthcare Provider"
                }
              }
            }
          ]
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ],
          "name" : [
            {
              "use" : "official",
              "family" : "Smith",
              "given" : [
                "John"
              ],
              "prefix" : [
                "Dr."
              ],
              "suffix" : [
                "Jr.",
                "M.D."
              ]
            }
          ],
          "gender" : "male",
          "birthDate" : "1978-11-03"
        }
      }
    ]
  }
}
```

#### DiagnosticReport-open Event Example

The event distributed by the Hub includes a context version in the `context.versionId` event attribute which will be used by Subscribers to make subsequent [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) requests.

```json
{
  "timestamp": "2023-04-01T011:14:24.31",
  "id": "6930b943-39fc-447f-8099-92d17650a375",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "DiagnosticReport-open",
    "context.versionId": "b9574cb0-e9e5-4be1-8957-5fcb51ef33c1",
    "context": [
      ... as above ...
    ]
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ------- | ----
| 0.1 | Initial draft
| 0.5 | Connectathon trials and initial fielded solutions based on draft STU3
| 1.0 | Reference context resource profiles and update example to be compliant with the profiles


---

// File: input/pagecontent/3-6-2-DiagnosticReport-close.md

### Event-name: DiagnosticReport-close

eventMaturity | [2 - Tested](3-1-2-eventmaturitymodel.html)

### Workflow

User closed a report. A previously open and in context report is no longer open nor in context.

### Context

{:.grid}
Key | Cardinality | Description
----- | -------- | ---- 
`report` | 1..1 | FHIR DiagnosticReport resource describing the report previously in context that is being closed.
`encounter` | 0..1 | A FHIR Encounter resource may be associated with the report
`study` | 0..* | FHIR ImagingStudy resource(s) describing any image study that was opened as part of the report context that is being closed.
`patient` | 1..1 | FHIR Patient resource describing the patient associated with the report being closed.

The following profiles provide guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in DiagnosticReport close request:

* [DiagnosticReport for Close Events](StructureDefinition-fhircast-diagnostic-report-close.html)
* [ImagingStudy for Close Events](StructureDefinition-fhircast-imaging-study-close.html)
* [Encounter for Close Events](StructureDefinition-fhircast-encounter-close.html)
* [Patient for Close Events](StructureDefinition-fhircast-patient-close.html)

Other attributes of the DiagnosticReport, ImagingStudy, Encounter, and Patient resources (or resource extensions) may be present in the provided resources; however, attributes not called out in the profiles are not required by the FHIRcast standard.

#### Content Sharing Support

If a Hub supports content sharing, after it distributes the `DiagnosticReport-close` event to all Subscribers, the Hub should remove any content associated with the anchor context from its working memory.


### Examples

#### DiagnosticReport-close Example

```json
{
  "timestamp": "2023-04-01T011:18:52.21",
  "id": "1d35d190-2fc9-45df-a9c4-fd0de885544c",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "DiagnosticReport-close",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "2402d3bd-e988-414b-b7f2-4322e86c9327",
          "identifier" : [
            {
              "use" : "official",
              "system" : "http://myhealthcare.com/reporting-system",
              "value" : "GH339884.RPT.0001"
            }
          ],
          "status": "unknown",
          "basedOn" : [
            {
              "type" : "ServiceRequest",
              "identifier" : {
                "type" : {
                  "coding" : [
                    {
                      "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                      "code" : "ACSN"
                    }
                  ]
                },
                "system" : "urn:oid:2.16.840.1.113883.19.5",
                "value" : "GH339884",
                "assigner" : {
                  "reference" : "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                  "display" : "My Healthcare Provider"
                }
              }
            }
          ],
          "code" : {
            "coding" : [
              {
                "system" : "http://loinc.org",
                "code" : "19005-8",
                "display": "Radiology Imaging study [Impression] (narrative)"
              }
            ]
          },
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          },
          "imagingStudy": [
            {
              "reference": "ImagingStudy/e25c1d31-20a2-41f8-8d85-fe2fdeac74fd"
            }
          ]
        }
      },
      {
        "key": "study",
        "resource": {
          "resourceType": "ImagingStudy",
          "id": "e25c1d31-20a2-41f8-8d85-fe2fdeac74fd",
          "identifier": [
            {
              "system" : "urn:dicom:uid",
              "value" : "urn:oid:1.2.840.83474.8.231.875.3.15.661594731"
            }
          ],
          "status": "unknown",
          "subject": {
            "reference": "Patient/503824b8-fe8c-4227-b061-7181ba6c3926"
          },
          "basedOn" : [
            {
              "type" : "ServiceRequest",
              "identifier" : {
                "type" : {
                  "coding" : [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                      "code" : "ACSN"
                    }
                  ]
                },
                "system" : "urn:oid:2.16.840.1.113883.19.5",
                "value" : "GH339884",
                "assigner" : {
                  "reference" : "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                  "display" : "My Healthcare Provider"
                }
              }
            }
          ]
        }
      },
      {
        "key": "patient",
        "resource": {
          "resourceType": "Patient",
          "id": "503824b8-fe8c-4227-b061-7181ba6c3926",
          "identifier" : [
            {
              "use" : "official",
              "type" : {
                "coding" : [
                  {
                    "system" : "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code" : "MR"
                  }
                ]
              },
              "system": "urn:oid:2.16.840.1.113883.19.5",
              "value": "4438001",
              "assigner": {
                "reference": "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc",
                "display": "My Healthcare Provider"
              }
            }
          ]
        }
      }
    ]
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ------- | ----
| 0.1 | Initial draft
| 0.5 | Connectathon trials and initial fielded solutions based on draft STU3
| 1.0 | Reference context resource profiles and update example to be compliant with the profiles


---

// File: input/pagecontent/3-6-3-DiagnosticReport-update.md

### Event-name: DiagnosticReport-update

eventMaturity | [2 - Tested](3-1-2-eventmaturitymodel.html)

 The `DiagnosticReport-update` event is used by Subscribers to support content sharing in communication with a Hub which also supports content sharing.  A `DiagnosticReport-update` request will be posted to the Hub when a Subscriber desires to add, change, or remove exchanged information in the anchor context.  For a `DiagnosticReport-update`, the [`anchor context`](5_glossary.html) is the `DiagnosticReport` context established by the corresponding `DiagnosticReport-open`.  One or more update requests MAY occur while the anchor context is open.

The updates include:

* adding, updating, or removing FHIR resources contained in the DiagnosticReport
* updating attribute values of the DiagnosticReport or associated context resources (Patient and/or ImagingStudy resources)

#### Context

{:.grid}
Key | Cardinality | Description
----- | -------- | ---- 
`report` | 1..1 | FHIR DiagnosticReport resource specifying the [`anchor context`](5_glossary.html) in which the update is being made.  Note the mandatory elements defined in the [DiagnosticReport update profile](StructureDefinition-fhircast-diagnostic-report-update.html). Other attributes may be present in the DiagnosticReport resource if their values have changed or were newly populated.
`patient` | 0..1 | Present if one or more attributes in the Patient resource associated with the report have changed.
`study` | 0..1 | Present if one or more attributes in the ImagingStudy resource associated with the report have changed
`updates` | 1..1 | Contains a single `Bundle` resource holding changes to be made to the current content of the [`anchor context`](5_glossary.html)

The following profiles provide guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in a DiagnosticReport-update request:

* [Diagnostic Report for Update Events](StructureDefinition-fhircast-diagnostic-report-update.html)
* [Content Update Bundle](StructureDefinition-fhircast-content-update-bundle.html)

#### Supported Update Request Methods

Each `entry` in the `updates` Bundle resource SHALL contain one of the below `method` values in an entry's `request` attribute.  No resource SHALL appear multiple times in the `updates` Bundle.  One and only one [transaction `Bundle`](https://www.hl7.org/fhir/http.html#transaction) SHALL be present in a `DiagnosticReport-update` request.

{:.grid}
Request Method | Operation
--- | ---
`PUT` | Add a new resource or update a resource already existing in the content
`DELETE` | Remove an existing resource

#### Number of Entries in Transaction Bundle

FHIRcast doesn't prescribe a limit on the number of entries in the transaction Bundle; however, implementers should expect a limit for production-grade software. Generally, the upper range of entries in a FHIRcast transaction bundle is in the *dozens*. Recipients SHOULD return an error when they receive a FHIRcast event notification that is too large to support. Specifically, recipients SHALL either synchronously return an HTTP error status of [HTTP 413 - Content Too Large](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413), or asynchronously a `syncerror` with an `OperationOutcome.issue.code` = "[too-long](https://hl7.org/fhir/R4/valueset-issue-type.html)".


#### Examples

##### App adds ImagingStudy and Observation to DiagnosticReport

The following example shows adding an imaging study and a new observation to the existing diagnostic report context.  The `context.versionId` matches the `context.versionId` provided by the Hub in the most recent `DiagnosticReport-open` or `DiagnosticReport-update` event. The `report` key in the `context` array holds the `id` of the diagnostic report and is required in all `DiagnosticReport-update` events.  The `Bundle` in the `updates` key holds the addition (PUT) of an imaging study, adds (PUT) an observation derived from this study, and updates the DiagnosticReport to reference these new resources, in addition to the pre-existing result ("No significant lymphadenopathy").

```json
{
  "timestamp": "2019-09-10T14:58:45.988Z",
  "id": "cc4d016a-f516-4ce7-8f1a-e0baf0beb94d",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "DiagnosticReport-update",
    "context.versionId": "b9574cb0-e9e5-4be1-8957-5fcb51ef33c1",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "2402d3bd-e988-414b-b7f2-4322e86c9327",
          "status": "unknown",
          "code" : {
            "coding" : [
              {
                "system" : "http://loinc.org",
                "code" : "19005-8",
                "display": "Radiology Imaging study [Impression] (narrative)"
              }
            ]
          }
        }
      },
      {
        "key": "updates",
        "resource": {
          "resourceType": "Bundle",
          "type": "transaction",
          "entry": [
            {
              "request": {
                "method": "PUT"
              },
              "resource": {
                "resourceType": "ImagingStudy",
                "description": "CHEST XRAY",
                "started": "2010-02-14T01:10:00.000Z",
                "id": "7e9deb91-0017-4690-aebd-951cef34aba4",
                "identifier": [
                  {
                    "type": {
                      "coding": [
                        {
                          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                          "code": "ACSN"
                        }
                      ]
                    },
                    "value": "3478116342"
                  },
                  {
                    "system": "urn:dicom:uid",
                    "value": "urn:oid:2.16.124.113543.6003.1154777499.30276.83661.3632298176"
                  }
                ]
              }
            },
            {
              "request": {
                "method": "PUT"
              },
              "resource": {
                "resourceType": "Observation",
                "id": "40afe766-3628-4ded-b5bd-925727c013b3",
                "partOf": {
                  "reference": "ImagingStudy/7e9deb91-0017-4690-aebd-951cef34aba4"
                },
                "status": "preliminary",
                "category": {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "imaging",
                  "display": "Imaging"
                },
                "code": {
                  "coding": [
                    {
                      "system": "http://www.radlex.org",
                      "code": "RID49690",
                      "display": "simple cyst"
                    }
                  ] 
                },
                "issued": "2020-09-07T15:02:03.651Z"
              }
            },
            {
              "request": {
                "method": "PUT"
              },
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "2402d3bd-e988-414b-b7f2-4322e86c9327",
                "imagingStudy": [
                  {
                    "reference": "ImagingStudy/7e9deb91-0017-4690-aebd-951cef34aba4"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/1e057514-e069-4eb1-aed9-5e70c693fe28",
                    "display": "No significant lymphadenopathy"
                  },
                  {
                    "reference": "Observation/40afe766-3628-4ded-b5bd-925727c013b3",
                    "display": "Microcalcifications in left breast"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
```

##### Hub broadcasts with new `versionid`

The Hub distributes the corresponding event to all Subscribers. The Hub replaces the `context.versionId` in the request with a new `context.versionId` generated by the Hub.  The prior version, `context.priorVersionId` of the context enables continuity.  If the value of `context.priorVersionId` is not in agreement with the `context.versionId` last received by a Subscriber, the Subscriber can [retrieve the current context](2-9-GetCurrentContext.html). 

```json
{
  "timestamp": "2019-09-10T14:58:45.988Z",
  "id": "cc4d016a-f516-4ce7-8f1a-e0baf0beb94d",
   "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "DiagnosticReport-update",
    "context.versionId": "efcac43a-ed38-49e4-8d79-73f78290292a",
    "context.priorVersionId": "b9574cb0-e9e5-4be1-8957-5fcb51ef33c1",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "2402d3bd-e988-414b-b7f2-4322e86c9327",
          "status": "unknown",
          "code" : {
            "coding" : [
              {
                "system" : "http://loinc.org",
                "code" : "19005-8",
                "display": "Radiology Imaging study [Impression] (narrative)"
              }
            ]
          }
        }
      },
      {
        "key": "updates",
        "resource": {
          "resourceType": "Bundle",
          "type": "transaction",
          "entry": [
            {
              "request": {
                "method": "PUT"
              },
              "resource": {
                "resourceType": "ImagingStudy",
                "description": "CHEST XRAY",
                "started": "2010-02-14T01:10:00.000Z",
                "id": "7e9deb91-0017-4690-aebd-951cef34aba4",
                "identifier": [
                  {
                    "type": {
                      "coding": [
                        {
                          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                          "code": "ACSN"
                        }
                      ]
                    },
                    "value": "3478116342"
                  },
                  {
                    "system": "urn:dicom:uid",
                    "value": "urn:oid:2.16.124.113543.6003.1154777499.30276.83661.3632298176"
                  }
                ]
              }
            },
            {
              "request": {
                "method": "PUT"
              },
              "resource": {
                "resourceType": "Observation",
                "id": "40afe766-3628-4ded-b5bd-925727c013b3",
                "partOf": {
                  "reference": "ImagingStudy/7e9deb91-0017-4690-aebd-951cef34aba4"
                },
                "status": "preliminary",
                "category": {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "imaging",
                  "display": "Imaging"
                },
                "code": {
                  "coding": [
                    {
                      "system": "http://www.radlex.org",
                      "code": "RID49690",
                      "display": "simple cyst"
                    }
                  ] 
                },
                "issued": "2020-09-07T15:02:03.651Z"
              }
            },
            {
              "request": {
                "method": "PUT"
              },
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "2402d3bd-e988-414b-b7f2-4322e86c9327",
                "imagingStudy": [
                  {
                    "reference": "ImagingStudy/7e9deb91-0017-4690-aebd-951cef34aba4"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/1e057514-e069-4eb1-aed9-5e70c693fe28",
                    "display": "No significant lymphadenopathy"
                  },
                  {
                    "reference": "Observation/40afe766-3628-4ded-b5bd-925727c013b3",
                    "display": "Microcalcifications in left breast"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
```

##### App later deletes Observation from DiagnosticReport

The following example shows a request to delete an observation from a content sharing session.

```json
{
  "timestamp": "2019-09-10T15:02:33.343Z",
  "id": "d30734f1-3c7d-4fe4-a343-fbf4d80faddb",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "DiagnosticReport-update",
    "context.versionId": "efcac43a-ed38-49e4-8d79-73f78290292a",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "2402d3bd-e988-414b-b7f2-4322e86c9327",
          "status": "unknown",
          "code" : {
            "coding" : [
              {
                "system" : "http://loinc.org",
                "code" : "19005-8",
                "display": "Radiology Imaging study [Impression] (narrative)"
              }
            ]
          }
        }
      },
      {
        "key": "updates",
        "resource": {
          "resourceType": "Bundle",
          "type": "transaction",
          "entry": [
            {
              "fullUrl": "Observation/40afe766-3628-4ded-b5bd-925727c013b3",
              "request": {
                "method": "DELETE"
              }
            },
            {
              "request": {
                "method": "PUT"
              },
              "resource": {
                "resourceType": "DiagnosticReport",
                "id": "2402d3bd-e988-414b-b7f2-4322e86c9327",
                "imagingStudy": [
                  {
                    "reference": "ImagingStudy/7e9deb91-0017-4690-aebd-951cef34aba4"
                  }
                ],
                "result": [
                  {
                    "reference": "Observation/1e057514-e069-4eb1-aed9-5e70c693fe28",
                    "display": "No significant lymphadenopathy"
                  }
                ]
              }
          ]
        }
      }
    ]
  }
}
```

#### Change Log

{:.grid}
| Version | Description
| ------- | ----
| 0.1 | Initial draft
| 1.0 | Updated for STU3


---

// File: input/pagecontent/3-6-4-DiagnosticReport-select.md

### Event-name: DiagnosticReport-select

eventMaturity | [2 - Tested](3-1-2-eventmaturitymodel.html)

### Workflow
A `DiagnosticReport-select` request will be made to the Hub when a Subscriber desires to indicate that one or more FHIR resources contained in the DiagnosticReport context's content are to be made visible, in focus, or otherwise "selected". It is assumed that a FHIR resource (e.g., Observation) with the specified `id` is contained in the specified [`anchor context's`](5_glossary.html) content, the Hub MAY or MAY NOT provide validation of its presence.

This event allows other Subscribers to adjust their UIs as appropriate.  For example, a reporting system may indicate that the user has selected a particular observation associated with a measurement value. After receiving this event an image reading application which created the measurement may wish to change its user display such that the image from which the measurement was acquired is visible.

If one or more resources are noted as selected, any other resource which had been selected is assumed to be no longer selected (i.e., an implicit unselect of any previously selected resource).  Additionally, a Subscriber may indicate that all selections have been cleared by posting a `DiagnosticReport-select` with an empty `select` array. 

### Context

{:.grid}
Key | Cardinality | Description
----- | -------- | ---- 
`report` | 1..1 | FHIR DiagnosticReport resource specifying the [`anchor context`](5_glossary.html) in which the selection is being made.  Note that only the resource.resourceType and resource.id of the [`anchor context`](5_glossary.html) are required to be present.
`select` | 1..1 | Contains zero or more references to selected resources in a `resources` array. If a reference to a resource is present in the `resources` array, there is an implicit unselect of any previously selected resource. If no resource references are present in the `resources` array, this is an indication that any previously selected resource is now unselected.

The following profile provides guidance as to which resource attributes should be present and considerations as to how each attribute should be valued in a DiagnosticReport-select request:

* [Diagnostic Report for Select Events](StructureDefinition-fhircast-diagnostic-report-select.html)

### Examples

#### DiagnosticReport-select Example

The following example shows the selection of a single Observation resource in an anchor context of a diagnostic report.

```json
{
  "timestamp": "2019-09-10T14:58:45.988Z",
  "id": "78ef1125-7f8b-4cbc-bc59-a2a02f7e04",
  "event": {
    "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
    "hub.event": "DiagnosticReport-select",
    "context": [
      {
        "key": "report",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "2402d3bd-e988-414b-b7f2-4322e86c9327",
          "status": "unknown",
          "code" : {
            "coding" : [
              {
                "system" : "http://loinc.org",
                "code" : "19005-8",
                "display": "Radiology Imaging study [Impression] (narrative)"
              }
            ]
          }
        }
      },
      {
        "key": "select",
        "resources": [
          {
            "resourceType": "Observation",
            "id": "40afe766-3628-4ded-b5bd-925727c013b3"
          }
        ]
      }
    ]
  }
}
```

### Change Log

{:.grid}
| Version | Description
| ------- | ----
| 0.1 | Initial draft
| 1.0 | Updated for STU3


---

// File: input/pagecontent/4_Scenarios.md

This chapter contains informative discussion on various FHIRcast scenarios:

[4.1 Application Launch Scenarios and Session Discovery](4-1-launch-scenarios.html) |
[4.2 Synchronization Considerations](4-2-syncconsiderations.html) |
[4.3 Security Considerations](4-3-security-considerations.html) |
[4.4 Multi-tab Considerations](4-4-multitab-considerations.html) |
[4.5 Multi-anchor Considerations](4-5-multi-anchor-considerations.html) |
[4.6 FHIRcast Event-based Content Sharing](4-6-fhircast-event-content-sharing.html) |


---

// File: input/pagecontent/4-1-launch-scenarios.md

{% include infonote.html text='This page contains guidance to implementers and is not part of the <a href="2_Specification.html">normative-track</a>.' %}

A FHIRcast Hub uses a unique `hub.topic` session id to identify a single session across the Hub, subscribing and driving applications (i.e. Subscribers) which are engaged in the shared session. The `hub.topic` must be known by an application for it to subscribe to the session. Typically, the Hub defines the `hub.topic`.


The [HL7 SMART on FHIR app launch specification](http://www.hl7.org/fhir/smart-app-launch) enables the launched, synchronizing application to discover the `hub.topic`, because the SMART OAuth 2.0 server provides it during the OAuth 2.0 handshake as a SMART launch parameter. Use of SMART requires either that a synchronizing application supports the SMART on FHIR specification and specifically either be launched from the driving app or use the Hub's authorization server's login page.

Once the `hub.topic` and URL to the Hub (`hub.url`) are known by the synchronizing application, the subscription and workflow event notification process proceeds per the FHIRcast specification, regardless of the specific application launch mechanism used.

Use of the SMART on FHIR OAuth 2.0 profile simplifies, secures, and standardizes FHIRcast context synchronization. While more creative approaches, such as the alternate application launch and shared session identifier generation algorithm are possible to use with FHIRcast, care must be taken by the implementer to ensure synchronization and to protect against PHI loss, session hijacking, and other security risks. Specifically, the `hub.topic` session identifier must be unique and specific to the session.

### SMART on FHIR

FHIRcast extends SMART on FHIR to support clinical context synchronization between disparate, full featured healthcare applications which cannot be embedded within one another.
This section defines the extensions on SMART On FHIR that allow for integration of FHIRcast with applications launched using SMART on FHIR.

The application can request the authorization to send and/or receive FHIRcast events using the OAuth2.0 [FHIRcast scopes](2-2-FhircastScopes.html). During the OAuth2.0 handshake, the application is granted one or more FHIRcast scopes. The EHR’s authorization server returns the Hub URL and any relevant session topics as SMART launch parameters.

{:.grid}
| SMART launch parameter | Optionality | Type | Description |
| --- | --- | --- | --- |
| `hub.url` | Required | string | The base URL of the EHR's hub. |
| `hub.topic` | Optional | string | The session topic identifier.|

The application requests one or more FHIRcast scopes, depending upon its need to learn about specific workflow events or to direct the workflow itself.

```text
Location: https://ehr/authorize?
            response_type=code&
            client_id=app-client-id&
            redirect_uri=https%3A%2F%2Fapp%2Fafter-auth&
            launch=xyz123&
            scope=fhircast%2FImagingStudy-open.read+launch+patient%2FObservation.read+patient%2FPatient.read+openid+profile&
            state=98wrghuwuogerg97&
            aud=https://ehr/fhir
```

Following the OAuth2.0 handshake, the authorization server returns the FHIRcast SMART launch parameters alongside the `access_token`.

```json
{
  "access_token": "i8hweunweunweofiwweoijewiwe",
  "token_type": "bearer",
  "expires_in": 3600,
  "scope": "patient/Observation.read patient/Patient.read",
  "state": "98wrghuwuogerg97",
  "intent": "client-ui-name",
  "patient":  "123",
  "encounter": "456",
  "hub.url" : "https://hub.example.com",
  "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065"
}
```

The application then [subscribes](2-4-Subscribing.html) to the identified session.

Two different launch scenarios are supported. For each launch scenario, the application discovers the session topic to which it subscribes.

#### EHR Launch: User SSO's into app from EHR

The simplest launch scenario is the [SMART on FHIR EHR launch](http://www.hl7.org/fhir/smart-app-launch/#ehr-launch-sequence), in which the subscribing application is launched from an EHR authenticated session. The application requests both the `launch` and desired FHIRcast scopes (for example, `fhircast/ImagingStudy-open.read`) and receives information about the user and session as part of the launch. The application subsequently subscribes to the launching user's session.

In this scenario, the EHR authorizes the application to synchronize. The EHR provides a session topic as a SMART launch parameter which belongs to the EHR's current user.

#### Standalone launch: User authenticates to EHR to authorize synchronization

> This is an advanced scenario and is likely to not be widely supported.  Implementer feedback is solicited.

If the application can't be launched from the EHR, for example, it's opening on a different machine, it may be able to use the standard [SMART on FHIR standalone launch](http://www.hl7.org/fhir/smart-app-launch/#standalone-launch-sequence).

In this scenario, the user authorizes the application to synchronize to its session by authenticating to the EHR's authorization server. The application requests desired FHIRcast scopes and the EHR provides a session topic as a SMART launch parameter which belongs to the EHR's authorizing user.

#### Dynamic Registration for Native apps: Following SMART launch, parent application registers dynamic application which participates in FHIRcast session

{% include questionnote.html text='Implementer feedback is solicited.' %}

OAuth 2.0 dynamic registration for native applications is an appropriate technology for issuing distinct credentials and application identity to an instance of an application. FHIRcast does not specify how the `hub.topic` and `hub.url` should be communicated to a dynamic application if and when its parent performed the SMART app launch. Generally, this will be the responsibility of the native application implementer in the absence of other guidance. 

#### SMART Launch Example

 An example of the launch parameters presented to the application in the token response of a SMART on FHIR launch is presented below.

```json
{
  "access_token": "i8hweunweunweofiwweoijewiwe",
  "token_type": "bearer",
  "patient":  "123",
  "expires_in": 3600,
  "encounter": "456",
  "imagingstudy": "789",
  "hub.url" : "https://hub.example.com",
  "hub.topic": "fdb2f928-5546-4f52-87a0-0648e9ded065",
}
```

Note that the SMART launch parameters include the Hub's base URL and the session identifier in the `hub.url` and `hub.topic` fields.

### Alternate application launch

In practice, even enterprise applications are often launched from within a clinician's workflow through a variety of bespoke Web and desktop technologies. For example, an EHR might launch a desktop application on the same machine by specifying the executable on the Windows shell and passing contextual information as command line switches to the executable. Similarly, bespoke Microsoft COM APIs, shared polling of designated filesystem directories or Web service ticketing APIs are also commonly used in production environments.  The use of OAuth 2.0 strengthens and standardizes the security and interoperability of integrations. In the absence of OAuth 2.0 support, these alternate application launch mechanisms can also be used to share a session topic and therefore initiate a shared FHIRcast session.

A fictitious example Windows shell integration invokes a PACS system at system startup by passing some credentials, user identity, and the FHIRcast session identifier (`hub.topic`) and hub base URL (`hub.url`).

```text
C:\Windows\System32\PACS.exe /credentials:<secured credentials> /user:jsmith /hub.url:https://hub.example.com /hub.topic:2e5e1b95-5c7f-4884-b19a-0b058699318b
```

An additional example is a simple (and relatively insecure) web application launch extended with the addition of `hub.url` and `hub.topic` query parameters.

```text
GET https://app.example.com/launch.html?user=jsmith&hub.url=https%3A%2F%2Fhub.example.com&hub.topic=2e5e1b95-5c7f-4884-b19a-0b058699318b
```

Similarly, any bespoke application launch mechanism can establish a FHIRcast session by adding the `hub.url` and `hub.topic` parameters into the existing contextual information shared during the launch.  Once launched, the application subscribes to the session and receives notifications following the standardized FHIRcast interactions.

### No application launch

In a scenario in which the user manually starts two or more applications, the applications do not have the capability to establish a shared session topic. Since there's no "application launch", with its corresponding ability to exchange contextual information, the unique and session-specific `hub.topic` must be calculated by both the driving application's Hub and the subscribing application. The synchronizing application could use a shared algorithm and secret to generate the `hub.topic`.

A bespoke session topic generation algorithm could encrypt the current user's username and a nonce with a shared secret to a pre-configured base URL. In this contrived example, a base URL and secret are securely configured on the subscribing application. The subscribing application generates and appends a nonce to the current user's Active Directory username, encrypts that string with the shared secret according to an agreed upon encryption algorithm, and finally appends that encrypted string to the base URL. The resulting URL is unique to the current user and unguessable to a middle man due to the shared secret.

```text
https://hub.example/com/AES256(username+nonce, shared secret)
```


---

// File: input/pagecontent/4-2-syncconsiderations.md

{% include infonote.html text='This page contains guidance to implementers and is not part of the <a href="2_Specification.html">normative-track</a>; however, implementers are strongly encouraged to read and understand its content towards successful synchronization.' %}

FHIRcast describes a mechanism for synchronizing distinct applications. Sometimes things go wrong, and applications fail to synchronize or become out of sync. For example, the user within the EHR opens a new patient's record, but a Subscriber fails to process the update and continues displaying the initial patient.

### Scenarios

Depending upon the expectations of the user and the error handling of the applications in use, this scenario is potentially risky. Identified below are several distinct synchronization scenarios, ranging from lowest level of expected synchronization to highest. Each scenario suggests a level of risk resulting from potential context synchronization failure, based upon the user's ability to distinguish between disparate applications. Implementers must assess and determine the appropriate response to potential synchronization failure given their application's workflows and users.

Also note that synchronization failure is a worst-case scenario and should rarely occur in production.

#### Machine-to-machine-to-machine: Different machines, different times

**Scenario**: Clinician walks away from her desktop EHR and accesses an app on her mobile device which synchronizes to the EHR's hibernated session.

{:.grid}
| Consideration | Risk |
|---------------|------|
|Synchronization failure significance | low |
|Performance expectations|negligible|
|User inability to distinguish between synchronized applications| n/a|

**Summary**: This serial or sequential use-case is a convenience synchronization and the clinical risk for synchronization failure is low.

#### Cross device: Different machines, same time

**Scenario**: Clinician accesses her desktop EHR as well as an app on her mobile device at the same time. Mobile device synchronizes with the EHR desktop session.

{:.grid}
|Consideration|Risk|
|--|--|
|Synchronization failure significance|medium|
|Performance expectations|low|
|User inability to distinguish between synchronized applications|low|

**Summary**: The user clearly distinguishes between the applications synchronized on multiple devices and therefore clinical risk for a synchronization failure depends upon the workflow and implementer's goals. User manual action may be appropriate when synchronization fails.

#### Same machine, same time

**Scenario**: Clinician is accessing two or more applications on the same machine in a single workflow.  

{:.grid}
|Consideration|Risk|
|--|--|
|Synchronization failure significance| medium|
|Performance expectations|high|
|User inability to distinguish between synchronized applications| medium|

**Summary**: Although, the applications are distinguishable from one another, the workflow requires rapidly accessing one then another application. Application responsivity to synchronization is particularly important. Synchronization failure may introduce clinical risk and therefore user notification of synchronization failure is suggested.

#### Embedded apps: Same machine, same time, same UI

**Scenario**: Clinician accesses multiple applications within a single user interface.

{:.grid}
|Consideration|Risk|
|--|--|
|Synchronization failure significance|very high|
|Performance expectations|high|
|User inability to distinguish between synchronized applications|very high|

**Summary**: Disparate applications indistinguishable from one another require the greatest amount of context synchronization. Clinical risk of synchronization failure is critical. Application responsivity to synchronization should be high. Synchronization failure may introduce clinical risk and therefore user notification of synchronization failure is suggested.

#### Multiple machines, multiple synchronized applications, same time

**Scenario**: Clinician accesses multiple applications on different monitors and machines at the same time. Each application fulfills a specific role. A typical example of such set-up is a radiology workstation.

{:.grid}
|Consideration | Risk |
|--|--|
| Synchronization failure significance | very high |
| Performance expectations | high |
| User inability to distinguish between synchronized applications | very high |

**Summary**: Different applications that work together require the greatest amount of context synchronization. Clinical risk of synchronization failure is critical. Application responsivity to synchronization should be high. Synchronization failure may introduce clinical risk and therefore user notification of synchronization failure is likely required.

### Synchronization error situations

FHIRcast is based on a subscription model where each Subscriber receives notifications of the updated state of the topic to which the Subscriber is subscribed. There is no explicit requirement for a Subscriber to follow the context of another Subscriber. The subscription model also implies that it is the Subsribers' responsibility to maintain a contextual synchronization or to notify end users whenever the contextual synchronization is lost.
However, as noted in above scenarios, there may be risk associated with the end user expectation of having two tightly synchronized applications if they fall out of sync.

There are in some cases good reasons for a Subscriber not to follow the subscribed context and this section will outline some of the recommended approaches.

#### Blocking action on Subscriber preventing context synchronization

Many applications go into edit mode or start a modal dialog that locks the system from changing context without user intervention. Examples can be when modifying texts, reports, annotating images or performing administrative tasks. The application may then decline to follow the context of the topic to which the Subscriber is subscribed to prevent loss of end user data.

{:.grid}
|System|Failure mode|Possible actions|
|--|--|--|
| Subscriber | Modal dialog open in UI, unable to change case without losing end user data | Present end user with clear indication that contextual synchronization is lost. Respond with a http status code of 409 conflict. |
| Subscriber | Unable to change context | Client responds with a http status code of 409 conflict. If client is unable to determine inability to follow context, it responds with a 202 Accepted and sends a `SyncError` when the context change is refused, stating the source and reason for change. |
| Subscriber | Ask user whether context can be changed, user refuses. | The Subscriber responds to the initial event with a 202 Accepted and sends a `SyncError` when the context change is refused, stating the source and reason for change. |
| Subscriber | Ask user whether context can be changed, user does not react in time. | The Subscriber responds to the initial event with a 202 Accepted. When the user does not respond within 10 second,  it sends a `SyncError`. Context change is refused, stating the source and reason for change. |
| Hub | One of the Subscribers cannot follow context | Update all Subscribers with a SyncError event |

#### Failure of Subscriber preventing context synchronization

Although not intended, applications do fail. In this case the event is received by the Subscriber, but some internal error prevents the Subscriber from processing the event.

{:.grid}
|System|Failure mode|Possible actions|
|--|--|--|
| Subscriber | Internal error state prevents processing of the event. | If possible, present end user with clear indication that contextual synchronization is lost. Respond with a http status code of 50X. |
| Hub | One of the Subscribers cannot follow context | Update all Subscribers with SyncError event using information from the subscriber.name field from the original subscription of the Subscriber which failed to follow the context change. |

#### Connection is lost

This error scenario is the Hub losing contact with a Subscriber. This may be due to a Subscriber crash or a network failure. In these cases, the Subscriber would not be aware of the fact that the context has changed or that the context change events are not received.

{:.grid}
|System|Failure mode|Possible actions|
|--|--|--|
| Subscriber | Websocket connection is closed and cannot be reopened. | Present a clear indication to the end-user that the connection has been lost. Resubscribe to the topic. If supported by the Hub, receive [current context upon resubscription](2-4-Subscribing.html#current-context-notification-upon-successful-subscription) or retrieve the context using [Get Current Context](2-9-GetCurrentContext.html). |
| Hub | Subscriber failed to respond to an event | Update all Subscribers with a SyncError event using information from the `subscriber.name` field from the original subscription of the Subscriber which failed to respond to an event |

#### Race condition during launch

Once an application is launched with initial context, for example, the currently in context patient, the application must subscribe before it receives notifications of updated context. Between the instant of launch and the instant of a confirmed subscription, it is technically possible for context to change, such that the newly launched application joins a session with stale contextual information. In most scenarios, this problem is likely noticeable by the end user. This error situation is mitigated by the Hub sending the last relevant event(s) when a Subscriber (re)subscribes. Thus, an application could use [Get Current Context](2-9-GetCurrentContext.html) when the Hub does not support sending the last relevant event(s).

#### `SyncError` event received from Hub

In the scenarios where the Hub is aware of a synchronization error, it is advisable for the Hub to signal this to all Subscribers to minimize any patient risk associated with having one or more Subscribers out of sync.

{:.grid}
| System | Failure mode | Possible actions |
|--|--|--|
| Subscriber | SyncError event received from Hub | Present end user with clear indication that contextual synchronization is lost |

#### Subscription has expired

The Subscriber's subscription has expired causing it no longer receive event. The Subscriber can prevent this situation by resubscribing before the subscription expires.

{:.grid}
| System | Failure mode | Possible actions |
|--|--|--|
| Subscriber | Subscription has expired | Present a clear indication to the end-user that the subscription has expired. Resubscribe to the topic. If supported by the Hub, receive [current context upon resubscription](2-4-Subscribing.html#current-context-notification-upon-successful-subscription) or retrieve the context using [Get Current Context](2-9-GetCurrentContext.html). |
| Hub | None | The hub cannot distinguish between an intentional and unintentional subscription expiration. So the Hub cannot mitigate this situation. |

#### Race condition between context changes

Two or more Subscribers are sending context change events shortly after each other causing the events to cross.

{:.grid}
| System | Failure mode | Possible actions |
|--|--|--|
| Subscriber | Receive older events | Ensure that the timestamp is checked and that events older than the event that triggered the current context state are ignored. |
| Subscriber | Conflicting events | When a Subscriber detects an event with a suggested context change that is sent shortly after its own event, it should compare the timestamp of these events and treat the most recent event as current. It should also not respond with a resend of its context change without querying the user to prevent triggering an endless context switch waterfall. |
| Hub | None | The Hub cannot and should not be involved in distinguishing between an intentional and unintentional event expiration. So the Hub cannot mitigate this situation. |

#### Synchronization considerations for userLogout, userHibernate

Most synchronization failure considerations revolve around the possibility of introducing incorrect information into the clinical decision making process. In addition to these considerations, failures to synchronize userLogout and userHibernate events must also take into consideration the risk of unsecured, unattended health applications, risking data breach and user impersonation.

Distinct scenarios, related to userLogout and userHibernate:

1. User logs out of application A, then takes action in application B.
Negligible risk. User does not expect synchronization.
2. User hibernates application A, then takes action in application B.
Negligible risk. User does not expect synchronization.
3. Application A automatically hibernates without user action, user takes action in application B.
Application A should consider reacting to events when hibernated; perhaps with a SyncError.
4. User logs out of application A, walks away from workstation, application B remains open and unsecured.
Negligible risk. Per typical application security best practices, applications should automatically secure following a period of un-use. Following an automatic secure, user remains logged into application B. 
5. User hibernates application A, walks away from workstation, application B remains open and unsecured.
Negligible risk. Per typical application security best practices, application should automatically secure following a period of un-use.

### Re-establishing sync

The situations in which a sync error can occur are indicated in the previous section. Once a sync error situation occurs, applications need to be able to recover from it.

#### Subscribers that initiate a context change

A Subscriber that initiates a context change and receives a `SyncError` related to a context change event it sent, ought to resend this event at regular intervals until sync is reestablished or another, newer, event has been received. It is recommended to wait at least 10 seconds before resending the event. Note that such resend will use the timestamp of the original event to prevent race conditions.


#### Subscriber that follow context change

A Subscriber that follows context change should monitor new events or re-sends of the old event. When an event is received with a timestamp equal or newer than the event that caused the `SyncError`, it assumes sync is restored unless a new `SyncError` is received.

#### Subscriber that lose the connection to the Hub

Subscriber that lose the connection to the Hub should resubscribe to the topic. Once resubscribed and the most recent relevant event has been received, the Subscriber can assume that sync is restored.

#### Hubs

A Hub that sends a `SyncError` event (e.g. after it is not able to deliver an event) may resend this event regularly until the sync has been reestablished or a newer event has been received.

### Open topics

* Should a Subscriber get all SyncError's or only those related to events to which it subscribed?
* Does a Hub send an `SyncError` for each Subscriber that cannot be reached or refused, or is the Hub allowed to combine them in one.



---

// File: input/pagecontent/4-3-security-considerations.md

{% include infonote.html text='This page contains guidance to implementers and is not part of the <a href="2_Specification.html">normative-track.</a>' %}


FHIRcast enables the synchronization of healthcare applications user interfaces in real-time through the exchange of a workflow event to a small number of disparate applications. The notification message which describes the workflow event is a simple json wrapper around one or more FHIR resources. These FHIR resources can contain Protected Health Information (PHI).

### Actors

* Subscribing application
* Hub
* Authorization Server
* Resource server

FHIRcast ties SMART as the authorization layer together with a WebSub mechanism for subscription and event notification.

### Sources of Risk

1. The FHIRcast Hub pushes PHI to a dynamic URL specified by the authenticated application.
1. An application's credentials or a Hub's lack of authentication could be used by a malicious system to control the user's session.
1. FHIRcast recommends the use of SMART on FHIR, but does not require it. Implementation-specific launch, authentication, and authorization protocols may be possible. These alternate protocols should be scrutinized by implementers for additional security risks.

### SMART on FHIR

[SMART on FHIR](http://www.hl7.org/fhir/smart-app-launch/) profiles [OAuth 2.0's authorization code grant type](https://tools.ietf.org/html/rfc6749#section-1.3.1) and extends it by introducing an "[EHR Launch Sequence](http://www.hl7.org/fhir/smart-app-launch/#ehr-launch-sequence)". The Argonaut Project performed a formal security review of SMART on FHIR, resulting in a [Risk Assessment report](http://argonautwiki.hl7.org/images/e/ed/%282015May26%29RiskAssessment_ReportV1.pdf).

FHIRcast builds on SMART by introducing a new [syntax for standard OAuth 2.0 scopes](2-2-FhircastScopes.html), as well as two new SMART launch parameters of `hub.url` and `hub.topic`.

* [HL7 SMART on FHIR specification](http://www.hl7.org/fhir/smart-app-launch/)
* [Argonaut Risk Assessment report](http://argonautwiki.hl7.org/images/e/ed/%282015May26%29RiskAssessment_ReportV1.pdf).
* [OAuth 2.0 Threat Model and Security Considerations](https://tools.ietf.org/html/rfc6819)

### Access to non-authorized content

Access to non-authorized content is a critical issue in healthcare data exchange, as it can lead to privacy breaches and unauthorized use of sensitive information. In the FHIRcast event-based communication model, various types of content can be shared among applications that are connected to a session, such as updates to the current context, selected resources, and exchanged resources.

To ensure that only authorized applications can access and share content, the FHIRcast specification includes a mechanism for checking authorization when a Subscriber subscribes to a session. This mechanism ensures that each application can only receive events that it is granted authorization to access. The responsibility of providing a valid set of authorizations lies with the authorization server.

### WebSocket Security Considerations

It is recommended that Subscribers use and Hubs should only accept connections made over the secure _wss://_ WebSocket protocol and not the unsecured _ws://_ WebSocket protocol.

The WebSocket standard defines an `Origin` header, sent from the client to the server and intended to contain the url of the client. Subscribers using WebSockets may be running in a Web browser, in which case the Web browser enforces origin reporting to the Hub, or native applications in which the origin reported to the Hub can not be trusted. Therefore, a Hub exposing a WebSocket connection may not rely upon the origin sent by the Subscriber.

While native application Subscribers can send any standard HTTP headers, notably including _Authorization: Bearer_, Web browser-based subscribers are limited to only HTTP Basic Auth or cookies. Therefore, the typical use of the OAuth 2.0 access_token for bearer authentication does not consistently work with WebSockets. FHIRcast describes a "ticket"-based authentication system, in which the `hub.topic` provided to the Subscriber as part of the secured SMART app launch serves not only as a unique session identifier, but also as an "authorization ticket". This authorization ticket effectively acts as a bearer token. The Hub should therefore take care to generate opaque and unique `hub.topic` values.

* [The WebSocket Protocol RFC 6455](https://tools.ietf.org/html/rfc6455)
* [Heroku's excellent explanation of WebSocket security](https://devcenter.heroku.com/articles/websocket-security)

Unauthorized access to Websockets is also addressed by providing a Subscriber unique unguessable WebSocket endpoint with a limited lifetime.


---

// File: input/pagecontent/4-4-multitab-considerations.md

{% include infonote.html text='This page contains guidance to implementers and is not part of the <a href="2_Specification.html">normative-track.</a>' %}


### Considerations for application with simultaneous contexts

Just as a modern Web browser supports multiple pages loaded, but only a single in active use at a given time, some healthcare applications support multiple, distinct patient charts loaded even though only a single chart is interacted with at a given time. Other applications in healthcare may only support a single patient (or study or ...) context being loaded in the application at a given time. It's important to be able to synchronize the context between two Subscribers supporting these different behaviors. For convenience, we refer to these two types of application behavior as "multi-tab" and "single tab".

### Single and Multiple Tab Applications

Applications can have different capabilities and layouts, but with FHIRcast they should still be able to stay in sync. A potential situation that could cause confusion is when a single and a multi-tab application work together. While the below guidance describes a patient chart as the primary concept for synchronization, the same guidance applies for other concepts.  

Let's start with a simple case.

#### Opening and Closing a Patient

The diagrams below show two applications without any context, followed by a `Patient-open` event communicated to the other application resulting in same patient being opened in the receiving application. When the patient is closed, a `Patient-close` event is triggered leading to the patient being closed in the other application as well.

{% include img.html img="PatientOpenAndClose.png" caption="Figure: Simple patient open and close example" %}

#### Opening Multiple Patients

As illustrated below, context synchronization is maintained between multiple and single-tabbed applications even across multiple contexts being opened. The initial `Patient-open` works as expected by synchronizing the two applicationss for Patient 1. When the multi-tab application opens a second patient (without closing the first) the single-tab application follows the context change, resulting in the applications staying in sync. Even when the user is working within the multi-tab application, the single-tab application can still stay in sync with the current context.

{% include img.html img="MultiplePatientOpens.png" caption="Figure: Multiple patient open example" %}

### Considerations with the [Get Current Context](2-9-GetCurrentContext.html) Operation

Multiple contexts may be present in the Hub; however, only one of these contexts is the current context.  Specifically, the context for which the last `-open` event has occurred is the current context.  This is the context returned by the Hub when a Subscriber calls the [Get Current Context](2-9-GetCurrentContext.html) operation. In the above example, Patient 1 and Patient 2 contexts exist simultaneously; however, Patient 2 was last opened therefore is the current context.  If, as in the above example, the Patient 2 context is closed there exists no current context (see the specification in [Get Current Context](2-9-GetCurrentContext.html)).  It is the responsibility of some Subscriber to make an `-open` request for Patient 1 in order for Patient 1 to become the current context.  The FHIRcast specification indicates that there is no current context without an `-open` event; hence, in the absence of an `-open` event after a `-close` occurs, the behavior expected of applications is not defined.

### Considerations on Maintaining Multiple Contexts

The specification deliberatively prescribes maintaining contexts for which an `-open` event has occurred but no `-close` event.  The rationale for this approach is driven by:

*  Applications may expend considerable network and compute resources to display information indicated by an open context.  Retrieving this information upon each `-open` that would occur if the user frequently switches tabs (as in the above examples) would require the application incur that expense on each tab switch.  By explicitly stating that a context which was opened but which has not been closed is considered to remain present in the Hub, applications so choosing can reflect this behavior in their business logic and UI.  When a `-close` event occurs, applications should reflect this state as is appropriate to the application's requirements.  In the above example, when Patient 2 is closed applications chose to remove the tab related to Patient 2.  If both Patient 1 and Patient 2 `-open` events have occurred (in that order), a subsequent Patient 1 open would not cause applications to remove the Patient 2 tab rather indicate that Patient 1 is now the current context.
*  When applications are participating in a content sharing session, maintaining multiple open contexts means that Hubs and participating applications retain the content state of open contexts.  Content state is released only upon a `-close` of the anchor context in which the content sharing is taking place.  This avoids substantial application overhead and coordination.

Recall that the multi-tab example is only one scenario in which the multiple contexts approach is valid.  Another scenario would be if a user has opened multiple imaging studies and is frequently changing between the studies which were opened.  The network and compute resource consumption for opening and reopening imaging studies is significant and may be avoided with the multiple context approach.  Applications may decide to support only a single context, in which case they would imply a close __in their application__ upon receiving an `-open` event.  A subsequent `-open` event for the context which they implicitly closed would require that application to retrieve the necessary resources related to this context.

### Considerations on Applications Issuing `-close` Events

Upon closing of an application or the user choosing to close a subject, the application with which the user is interacting has the choice to send or not send a `-close` event for the current context.  Typically making this decision is appropriate when an application knows it is being driven by another application; for example, when another application is providing some type of worklist functionality.

Often an application knowing that it is being driven by an external actor removes the ability for users to close a subject; for example, an imaging application could assume that an external actor is responsible for the closing of subjects and remove the UI element(s) enabling a user to close the current image study.  However, an application may choose to retain this capability.  When the capability to close subjects is retained, the application could decide to not send a `-close` event if it considers this close to be local to itself.  If an application decides not to send a `-close` event, to ensure a consistent context for the user, the application should not establish a new local context without receiving or sending an `-open` event.

### Recommendations

* When synchronizing with a multi-tab application, receiving multiple, sequential `-open` events (for example, `Patient-open`) does not indicate a synchronization error.
* Multi-tab applications should differentiate between the closing versus inactivating of contexts, by not communicating the inactivation of a context through a `-close` event.
* Single-tab applications should not send a `-close` event as the result of receiving subsequent `-open` events, unless the intent is to limit all applications in the session to a single "tab"
* Multi-tab applications should consider closing all contexts between disconnecting and re-subscribing to prevent "orphaning" a tab.

### Launching A Context-Less Tab

Many applications can have a "home" or "default" tab that contains no clinical context, but may hold useful application features. In some cases other applications may want to subscribe to and be notified when another application has switched to the no context tab. The [Event Library](3_Events.html)'s [Home-open event](3-2-5-Home-open.html) represents a user switching to this context-less tab.


---

// File: input/pagecontent/4-5-multi-anchor-considerations.md

{% include infonote.html text='This page contains guidance to implementers and is not part of the <a href="2_Specification.html">normative-track.</a>' %}


### Apples & oranges: considerations for synchronizing applications that talk past one another

Some healthcare applications know about apples, some oranges. When the orange application doesn't understand what the apple application is saying: the Hub should help translate.

### Applications understand each other
For many context synchronization scenarios, all participating applications are subscribed to and understand all of the events used in the session. For example all of the applications in a session understand [`Patient-open`](3-3-1-Patient-open.html) and [`Patient-close`](3-3-2-Patient-close.html) events and those are the only events used in the session.

### Applications don't understand each other
However, it may make sense to synchronize applications that don't subscribe to and understand the same FHIRcast events. For example, some specialized healthcare applications deal exclusively with billing charges or imaging studies and don't have the concept of a patient outside of a charge or study. A PACS may not send or even understand a [`Patient-open`](3-3-1-Patient-open.html), only [`ImagingStudy-open`](3-5-1-ImagingStudy-open.html). Similarly, a generalized healthcare application may understand [`Patient-open`](3-3-1-Patient-open.html) events, but not more specialized events, such as [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) events. 

### Implied events

FHIRcast event definitions specify the related FHIR resources that are contextully relevent to the event. An *-open event implies additional open events, one for each of the resource types referenced in the context. 

For example, an [`Encounter-open`](3-4-1-Encounter-open.html) implies a [`Patient-open`](3-3-1-Patient-open.html), because the `Encounter-open`'s context includes not just an encounter resource, but also a patient resource. Similarly, [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) implies [`Patient-open`](3-3-1-Patient-open.html) and possibly an [`ImagingStudy-open`](3-5-1-ImagingStudy-open.html) (if an ImagingStudy is supplied in the [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) event).

### Hub derives open events

{% include questionnote.html text='Implementer input is solicited. Is the absence of guidance from the specification problematic? If so, why? and how would you recommend we solve this?' %}

The Hub is responsible for identifying and sending these implied *-open events. When distributing a received event, the Hub is responsible for generating and communicating open events for the resource types referenced by the received event. It is important that Hubs do not generate and send duplicative events. 


See details in the specification about:
* Hubs can [reject subscriptions](2-4-Subscribing.html#subscription-response) according to their own internal business logic.
* Hubs are [required](2-5-EventNotification.html#hub-generated-open-events) to derive and send open events. 

### Hub may or may not derive close events

{% include questionnote.html text='Implementer input is solicited. Is the absence of guidance from the specification problematic? If so, why? and how would you recommend we solve this?' %}

A close event may or may not imply the closure of referenced resource types (see [multi-tab considerations](4-4-multitab-considerations.html)). FHIRcast does not currently prescribe this behavior. 



---

// File: input/pagecontent/4-6-fhircast-event-content-sharing.md

{% include infonote.html text='This page contains guidance to implementers and is not part of the <a href="2_Specification.html">normative-track.</a>' %}

### Example of Content Sharing in an Anchor Context
The content that is interacted with during a FHIRcast content-sharing session can be considered a shared, non-persisted "cache" of FHIR data. This "cache" begins the session empty, except for the anchor context. Content is then added using FHIRcast *-update events from the session's subscribers. Upon a *-close event, FHIRcast doesn't place any requirements on persisting the content.

From a workflow perspective, each subscriber is responsible for determining if FHIRcast session-created content should persist. Subscribers should provide previously existing content to a FHIRcast session anchored by a relevant context.

An example of content sharing is provided for a use case where a `DiagnosticReport` is the anchor context (see [`anchor context`](5_glossary.html)).  However, the pattern of the example holds when other FHIR resource types are the anchor context.

#### Diagnostic Report Content Sharing Basics

When reporting applications integrate with PACS and/or RIS applications, a radiologist's (or other clinician's) workflow is centered on the final deliverable, a diagnostic report. In radiology, the imaging study (exam) is an integral resource with the report referencing one or more imaging studies. Structured data, many times represented by a FHIR `Observation` resource, may also be captured as part of a report.  In addition to basic context synchronization, a diagnostic report centered workflow builds upon the basic FHIRcast operations to support near real-time exchange of structured information between applications participating in a diagnostic report context.  Also, the `DiagnosticReport` resource contains certain attributes (such as report status), that are useful to PACS/RIS applications.  Participating applications may include clients such as reporting applications, PACS, EHRs, workflow orchestrators, and interactive AI applications.

Exchanged content need not have an independent existence. For example, a radiologist may use the PACS viewer to create a measurement. The PACS application sends this measurement as an `Observation` to other Subscribers (through interactions with a FHIRcast Hub) for consideration. If the radiologist determines the measurement is useful in another application (and accurate), it may then become an `Observation` to be included in the diagnostic report. 
 
Structured information may be added, changed, or removed quite frequently during the lifetime of a context. Exchanged information is transitory and it is not required that the information exchanged during the collaboration is persisted. However, as required by their use cases, each participating application may choose to persist information in their own structures which may or may not be expressed as a FHIR resource. Even if stored in the form of a FHIR resource, the resource may or may not be stored in a system which provides access to the information through a FHIR server and associated FHIR operations (i.e., it may be persisted only in storage specific to a given application).

<figure>
  {% include ContentExchangeBasic.svg %}
  <figcaption><b>Figure: Basics of content sharing</b></figcaption><p></p>
</figure>

#### Example Use Case

A frequent scenario which illustrates a diagnostic report centered workflow involves an EHR, an image reading application, a reporting application, and an advanced quantification application.  The EHR, image reading application, and reporting application are authenticated, authorized, and subscribed to the same topic using a FHIRcast Hub with the EHR establishing a patient context, see messages 1 through 7 in the below sequence diagram.

In an EHR a clinical users opens a patient with the EHR sending a [`Patient-open`](3-3-1-Patient-open.html) request to the Hub (messages 1 and 2).  The Hub notes the context and if it supports content sharing assigns a version to the context then distributes the [`Patient-open`](3-3-1-Patient-open.html) events (messages 3 and 4a, 4b, and 4c). The reporting application reacts to the patient context in some manner such as displaying available reports and imaging studies associated with the patient while storing the version of the patient context in case content is shared in this anchor context (message 5).  The imaging application is not interested in patient contexts so it ignores the event entirely (message 6) while the EHR identifies the Patient-open event as one it triggered and stores the version of the context provided by the Hub in case it would like to contribute content in this context (message 7).

Next the clinical user decides to create diagnostic report using the reporting application, see messages 8 through 14 in the below sequence diagram.

Using a reporting application, a clinical user creates a report by choosing an imaging study as the primary subject of the report (message 8).  The reporting application creates a report and then opens a diagnostic report context by posting a [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) request to the Hub (message 9). The Hub notes the context, assigns a version to the context and then distributes a [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) event with the generated `context.versionId` to subscribed applications (messages 10, 11a, 11b, and 11c). On receiving the [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) event from the Hub, an EHR decides not to react to this event noticing that the patient context has not changed (message 14). The image reading application responds to the event by opening the imaging study referenced in the diagnostic report anchor context (message 13) while the reporting application identifies the [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) event as one it triggered and stores the version of the context provided by the Hub (message 12).

<figure>
  {% include ContentExchangeOpenReport.svg %}
  <figcaption><b>Figure: Opening a Diagnosticreport Context</b></figcaption><p></p>
</figure>
After opening a report, the clinical user takes a measurement using the imaging reading application (message 1 in the below sequence diagram) which then shares this measurement by making a [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) request to the hub (message 2). The Hub validates that the `context.versionId` provided in the request is correct, updates its content, generates a new `context.versionId` (message 3). If the `context.versionId` provided in the request is not correct the Hub rejects the request (response to message 2). The Hub then distributes `DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) events which contain the newly generated `context.versionId` and the `priorVersionId` to all subscribed applications (messages 4a, 4b, and 4c). The reporting application receives the measurement through a [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) event from the Hub and adds this information to the report if the `context.versionId` it currently holds matches the `context.priorVersionId` provided in the event (message 7). If the `context.priorVersionId` does not match the `context.versionId` of the content known to the reporting application, it may resynchronize its content by requesting the current context from the Hub (message 8).

As the clinical user continues the reporting process they select a measurement or other structured information in the reporting application, the reporting application may note this selection by posting a [`DiagnosticReport-select`]( 3-6-4-DiagnosticReport-select.html) request to the Hub. Upon receiving the [`DiagnosticReport-select`]( 3-6-4-DiagnosticReport-select.html) event the image reading application may navigate to the image on which this measurement was acquired.

<figure>
  {% include ContentExchangeShareContent.svg %}
  <figcaption><b>Figure: Create a Measurement</b></figcaption><p></p>
</figure>

At some point the image reading application (automatically or through user interaction) may determine that an advanced quantification application should be used and launches this application including the appropriate FHIRcast topic (messages 1 and 2 in the below sequence diagram).  The advanced quantification application then subscribes to the topic and requests the current context including any already exchanged structured information by making a [`GET Context`](2-9-GetCurrentContext.html) request to the Hub which returns the current context including existing content in the response (messages 3 and 4).  The user interacts with the advanced quantification application which then adds content to the anchor context (messages 6 through 13).

<figure>
  {% include ContentExchangeAdvancedQuantification.svg %}
  <figcaption><b>Figure: Newly Subscribed Application Contributes Content</b></figcaption><p></p>
</figure>

Finally, the clinical user closes the report in the reporting application. The reporting application makes a [`DiagnosticReport-close`](3-6-2-DiagnosticReport-close.html) request. Upon receipt of the [`DiagnosticReport-close`](3-6-2-DiagnosticReport-close.html) event both the imaging reading application and advanced quantification application close all relevant image studies.

<figure>
  {% include ContentExchangeClosure.svg %}
  <figcaption><b>Figure: Report is stored and context is closed</b></figcaption><p></p>
</figure>

The Hub purges the context including content and the reporting application persists all relevant content.

### Discussion on Reopening Anchor Context Scenario

Often a context in which content has been shared may be reopened (meaning an [`anchor context`](5_glossary.html) has been reopened).  An example of this scenario is when a DiagnosticReport was opened and used as an [`anchor context`](5_glossary.html), the corresponding report was then closed without reaching a final signoff state, and subsequently the report was reopened.

To appropriately handle the scenario of reopening a specific context (e.g., a report), it is necessary that all Subscribers be able to identify specific content from the original sharing session with that same content in the new content sharing session.  The consistent use in each FHIR resource of its [Resource.id](http://hl7.org/fhir/resource.html) and the `fullUrl` attribute of the resource's entry in the update bundle (if populated) enables Subscribers to consistently identify content across multiple sharing sessions.

In order to illustrate this consistent handling, consider two Observation resources added to a DiagnosticReport [`anchor context`](5_glossary.html) by two different Subscribers (a reporting application "Reporting" and an imaging reading application "Imaging").

Reporting opens a DiagnosticReport as an [`anchor context`](5_glossary.html) (using a [DiagnosticReport-open Event](3-6-1-DiagnosticReport-open.html)) when a report is being initially created.  Imaging opens an ImagingStudy which Reporting has included in the [DiagnosticReport-open Event](3-6-1-DiagnosticReport-open.html).

Imaging adds Observation A to the content sharing session (using a [DiagnosticReport-update Event](3-6-3-DiagnosticReport-update.html)) without storing this information in a persistent FHIR server.  Imaging is responsible to generate a globally unique (e.g., a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)) [Resource.id](http://hl7.org/fhir/resource.html) and providing this as the [Resource.id](http://hl7.org/fhir/resource.html) in Observation A's entry in the [FHIRcast update bundle](StructureDefinition-fhircast-content-update-bundle.html) with the entry's `request.method` attribute having a value of `PUT`.  Both the FHIRcast Hub and Reporting add this Observation to their working memory including the [Resource.id](http://hl7.org/fhir/resource.html) value provided by Imaging.

Reporting adds Observation B to the content sharing session (using a [DiagnosticReport-update Event](3-6-3-DiagnosticReport-update.html)) after it stores the Observation resource in a FHIR server.  The FHIR server assigns a [Resource.id](http://hl7.org/fhir/resource.html) to Observation B and the full URL for retrieving the Observation is known.  Reporting provides the `fullUrl` attribute and the [Resource.id](http://hl7.org/fhir/resource.html) in Observation B's entry in the [FHIRcast update bundle](StructureDefinition-fhircast-content-update-bundle.html) with the entry's `request.method` attribute having a value of `PUT`.  Both the FHIRcast Hub and Imaging add this Observation to their working memory including the [Resource.id](http://hl7.org/fhir/resource.html) and `fullUrl` values provided by Reporting.

To complete this initial content sharing portion of the reopen scenario, the DiagnosticReport [`anchor context`](5_glossary.html) is closed (by a [DiagnosticReport-close Event](3-6-2-DiagnosticReport-close.html)).  At least one of the Subscribers likely persists the structured information exchanged in the content sharing session (in the above example this is Observations A and B).  Regardless of the persistence mechanisms used (e.g., persistence in a FHIR server or storage in a SQL or non-SQL database), each actor should ensure the [Resource.id](http://hl7.org/fhir/resource.html) and `fullUrl` (if populated) used in the initial content sharing session is stored with the persisted structured information.  For example, an application persisting Observations A and B in a FHIR server could use an `identifier` value with a known `system` to retain the [Resource.id](http://hl7.org/fhir/resource.html) of Observation A as provided by Imaging.

If the same DiagnosticReport [`anchor context`](5_glossary.html) is reopened (by a [DiagnosticReport-open Event](3-6-1-DiagnosticReport-open.html)), content from the initial content sharing session may be added to the reestablished content sharing session by one or more Subscribers.  For example, it is possible that only Reporting populates the reopened DiagnosticReport [`anchor context`](5_glossary.html) (using a [DiagnosticReport-update Event](3-6-3-DiagnosticReport-update.html)) or both Reporting and Imaging could populate the session.  In any circumstance, if all Subscribers use the [Resource.id](http://hl7.org/fhir/resource.html) and `fullUrl` (if populated) from the initial content sharing session all Subscribers are able to identify specific content from the original sharing session with that same content in the new content sharing session without any logic specific to the population of structured information in the reopened [`anchor context`](5_glossary.html).  Note that the FHIRcast Hub is not expected to provide a persistence mechanism, hence it plays no role in populating the reopened content sharing session.

A few additional notes are relevant to the reopen scenario:

1. Any modifications to structured information performed outside of a content sharing session that includes all Subscribers who persisted structured information from the initial content sharing session could lead to inconsistencies requiring resolution by an end user.  For example, if Observation A was deleted by a user in Imaging with the deletion occurring outside of a content sharing session which includes Reporting; when a joint session is reestablished, Observation A may be added to the new content sharing session by Reporting and hence require the user to again delete Observation A.  Ideally, no modification of structured information that was acquired during a content sharing session is permitted in the absence of a reopened content sharing session with as many of the originally participating Subscribers as possible.
2. There is no requirement that all Subscribers persist structured information that is exchanged during a content sharing session.  For such applications the need to retain [Resource.id](http://hl7.org/fhir/resource.html) values is not relevant.
3. Applications may decide to use attributes in a FHIR resource to hold private information.  If a resource holding private information is added to a reopened content sharing session by another subscriber, this private information may no longer be present.  For example, if Imaging uses an extension in Observation A, Reporting may persist Observation A in a database structure that has no provision for the extension.  Upon reopening the content sharing session, if Reporting is the Subscriber which adds Observation A to the content sharing session then information in the extension will not be present.  Imaging must have some provision to retain the information in the extension as appropriate. 
4. It is likely that during content exchange most resources will not be persisted in a FHIR server at least until after the initial close.  Hence, the `fullUrl` attribute may never be used; however, it should be supported to cover all possibilities.


---

// File: input/pagecontent/5_glossary.md


{:.grid}
Term | Description
---- | ---
**Anchor Context** | a context that is used as a container for shared content, typical anchor contexts are FHIR resources such as `ImagingStudy` and `DiagnosticReport`
**Container** | the set of resources related to an anchor resource consisting of the resource itself, all resources referring to the resource and all resources the anchor resource refers to.
**Content** | FHIR resources created during a user's interaction with the anchor context and shared with other Subscribers; shared content either directly or indirectly references the anchor context - for example, if the anchor context is a `DiagnosticReport` the user may make a measurement resulting in a FHIR observation containing measurement information which is shared with other Subscribers.
**Context** | a FHIR resource associated with a session which indicates a subject on which applications should synchronize as appropriate to their functionality
**Current Context** | the context associated with a session that is active at a given time, that is the context of the last *-open for which no *-close has occurred.
**Hub** | handles subscription requests, session change requests, and distributes events to Subscribers
**Session Event** | a user initiated workflow event, communicated to Subscribers, containing the current context or shared content
**Subscriber** | an application which subscribes to and requests or receives session events
**Topic** | an identifier of a session


---

// File: input/pagecontent/6_change-log.md

# Revision History
All changes to the FHIRcast specification are tracked in the [specification's HL7 github repository](https://github.com/HL7/fhircast-docs/commits/master). Further, issues may be submitted and are tracked in [jira](https://jira.hl7.org/browse/FHIR-25651?filter=12642) or (historically as) [github issues](https://github.com/HL7/fhircast-docs/issues).   For the reader's convenience, the below table additionally lists significant changes to the specification.

## xxxx Significant changes as part of the STU2 publication included: 
* removal of the Heartbeat event

## 20200715 Significant changes as part of the STU2 publication included: 

* Introduction of WebSockets as the preferred communication mechanism over webhooks.
* Creation of a FHIR CapabilityStatement extension to support Hub capability discovery. 
* Additional, required information on `SyncError` OperationOutcome (namely communication of the error'd event's id and event name). 
* Websocket WSS URL communicated in HTTP body, instead of `Content-Location` HTTP header.
* Subscribers should differentiate between immediately applied context changes and mere successfully received notifications with HTTP code responses of 200 and 202, respectively.

## 20240401 Change Log STU2 to STU3

### Spec format moved to FHIR Implementation Guide
[FHIRcast STU2](https://fhircast.hl7.org/specification/STU2/) was the last version of FHIRcast published with our bespoke mkdocs publication pipeline. STU3 and beyond will be published as proper FHIR IGs, including the use of FHIR profiles.

#### New events added to event library
* home-open
* heartbeat
* encounter-open
* encounter-close
* imagingstudy-open
* imagingstudy-close
* diagnosticreport-open
* diagnosticreport-close
* diagnosticreport-update
* diagnosticreport-select

#### Get Current Context RESTful API is added as optional

The [Get Current Context API](2-9-GetCurrentContext.html) was added to the specification.

#### FHIRcast starts to become a "base specification"

With the addition of update and select events, the scope of the FHIRcast specification significantly increases beyond context synchronization. In part this has lead to this FHIRcast publication specifying capabilities which require additional specification to be applied to specific interoperability use-cases. 

### Changes to Context Synchronization
#### Remove `webhook` channel
In STU1 and STU2, FHIRcast supported a `webhook` channel (URL callbacks). As part of FHIRcast STU3, support for `webhooks` was removed in favor of `websockets` as the single communication method. The field `hub.channel.type` was used to indicate the channel type to use for event notification. This field has been retained in order to support backward compatibility as well as facilitate potentially adding new channels in the future. Similarly, the conformance statement related to WebSocketsupport was retained.

#### New context synchronization events
* home-open
* encounter-open
* encounter-close
* heartbeat

#### Hub Generated `open` events

Significant complexity is created if/when subscribers support subsets of the FHIRcast context synchronization events used during a context synchronization session. If a hub permits subscribers to subscribe to subsets of one another's events, the hub is required to "generate" or "derive open events. This is required in the specification of [Event Notifications](2-5-EventNotification.html#hub-generated-open-events) and discussed in [Multi-anchor considerations](4-5-multi-anchor-considerations.html)

### `update` events (aka Content Sharing)

STU3 introduces the concept of content sharing.
### `select` events

STU3 introduces the (experimental) concept of _selection_.

## Questions to implementers
Scattered throughout the FHIRcast specification are the  questions to implementers, the following hyperlink directly to them:
* [2-4-Subscribing.html#current-context-notification-upon-successful-subscription](2-4-Subscribing.html#current-context-notification-upon-successful-subscription)
* [2-5-EventNotification.html#hub-generated-syncerror-events](2-5-EventNotification.html#hub-generated-syncerror-events)
* [2-9-GetCurrentContext.html#get-current-context](2-9-GetCurrentContext.html#get-current-context)
* [4-1-launch-scenarios.html#dynamic-registration-for-native-apps-following-smart-launch-parent-application-registers-dynamic-application-which-participates-in-fhircast-session](4-1-launch-scenarios.html#dynamic-registration-for-native-apps-following-smart-launch-parent-application-registers-dynamic-application-which-participates-in-fhircast-session)
* [4-5-multi-anchor-considerations.html#hub-derives-open-events](4-5-multi-anchor-considerations.html#hub-derives-open-events)
* [4-5-multi-anchor-considerations.html#hub-may-or-may-not-derive-close-events](4-5-multi-anchor-considerations.html#hub-may-or-may-not-derive-close-events)


# FHIR Publication Details

## Intellectual Property Statements

{% include ip-statements.xhtml %}

## Cross Version Analysis

{% include cross-version-analysis.xhtml %}

## Package Dependencies

{% include dependency-table.xhtml %}

## Global Profile Definitions

{% include globals-table.xhtml %}


---

// File: input/pagecontent/7_design-notes.md

This section contains various design decisions that might be relevant to understand the FHIRcast specification.

### Remove `webhook` channel

Originally, FHIRcast supported a `webhook` channel (URL callbacks). As part of FHIRcast STU3, support for `webhooks` was removed in favor of `websockets` as the single communication method.

The field `hub.channel.type` was used to indicate the channel type to use for event notification. This field has been retained in order to support backward compatibility as well as facilitate potentially adding new channels in the future.

Similarly, the conformance statement related to WebSocketsupport was retained.

### Content sharing approach

Two base use cases for content-exchange were identified during use case analysis. One employs a transactional, event-based exchange mechanism while the second uses content sharing content persisted in a FHIR server. It is also possible to use both methods concurrently. A detailed description of these approaches is found in the content sharing section of the specification.


---

// File: input/pagecontent/index.md

### Overview

FHIRcast synchronizes healthcare applications in real time to ensure the user acts on the same clinical information across these applications. For example, a radiologist often works in three disparate applications at the same time (a radiology information system, a PACS and a dictation system), in this case, each of these three systems needs to display the same study or patient at the same time.

FHIRcast isn't limited to radiology use-cases. Modeled after the common event notification design pattern and specifically [WebSub](https://www.w3.org/TR/websub/), FHIRcast naturally extends the SMART on FHIR launch protocol to achieve tight integration between disparate, full-featured applications.

FHIRcast builds on the [CCOW](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=1) abstract model to specify an http-based and simple context synchronization specification that doesn't require a separate context manager. FHIRcast is intended to be both less sophisticated, and more implementer-friendly than CCOW and therefore is not a one-to-one replacement of CCOW, although it solves many of the same problems.

Adopting the WebSub terminology, FHIRcast describes an application  as a Subscriber synchronizing with a Hub (which may be an EHR or other system).  Any user-facing application can synchronize with FHIRcast. While less common, bidirectional communication between multiple applications is also possible.

#### Why?

The large number of vendor-specific or proprietary context synchronization methods in production limit the industry's ability to enhance the very large number of integrations currently in production. In practice, these integrations are decentralized and simple.

### How it works and an example scenario

A radiologist working in the reporting system clicks a button to open the dictation system. The dictation app is authorized and subscribes to the radiologist's session. Each time the radiologist opens a patient's chart in the reporting system, the dictation app will be notified of the current patient and therefore presents the corresponding patient information on its own UI. The reporting system and dictation app share the same session's context.

{% include img.html img="colorful overview diagram.png" caption="Figure: FHIRcast Overview" %}

By convention a driving application is the application which opens a context.  The driving application could be an EHR, a PACS, a worklist, or any other clinical workflow system.  A driving application may or may not launch other applications; to launch other applications the driving application may use the [SMART App Launch](https://hl7.org/fhir/smart-app-launch) mechanism.  As part of a [SMART App Launch](https://hl7.org/fhir/smart-app-launch), an application requests appropriate [FHIRcast OAuth 2.0 scopes](2-2-FhircastScopes.html) and receives the location of the Hub and a unique `hub.topic` session identifier.

 An application subscribes to specific workflow events for the topic during its subscription request.  The Hub verifies the subscription then notifies the subscribed application when the requested workflow events occur; for example, by the clinician opening a patient’s chart a `Patient-open` event would be sent. An application unsubscribes from a topic when it no longer wants to receive notifications.  Note that subscribed applications other than the driving application could send a close event for an open context; however, such a scenario may not desirable in many workflows.

Note that:

* Event notifications are thin json wrappers around FHIR resources.
* An application can request context changes by sending an event notification to the Hub's `hub.topic` session identifier. The HTTP response status indicates success or failure.
* The [Event Catalog](3_Events.html) documents the workflow events that can be communicated in FHIRcast. Each event will always carry the same type of FHIR resources.

### Reading the Specification
Much of this implementation guide is descriptive in how Subscribers and the FHIRcast Hub interact in various scenarios.  The normative portion of this implementation guide is contained in Sections [2: Specification](2_Specification.html), [3: Event Library](3_Events.html), and [8: Artifacts](artifacts.html).  Other portions of the specification are informative and are labeled as such.

### Relation to FHIR Subscriptions
FHIRcast is focused on providing notifications when key elements in the context change (i.e., when the current Patient, Encounter, ImagingStudy, etc. is changed). Notable differences in the scenarios addressed by FHIRcast and FHIR Subscriptions:

* FHIRcast is designed to be used by multiple applications perhaps with the same user and typically on the same device - Subscriptions are designed to be used by multiple distinct systems, often outside of a user workflow
* FHIRcast sends only single-event notifications - Subscriptions allow servers to batch multiple notifications in high-frequency scenarios
* FHIRcast is designed around short-lived sessions - Subscriptions are intended to be long-lived resources

### Get involved
* Check out our [awesome community contributions on github](https://github.com/fhircast)
* [Log issues](https://jira.hl7.org/secure/CreateIssue.jspa), [submit a PR!](https://github.com/fhircast/docs)
* [Converse at chat.fhir.org](https://chat.fhir.org/#narrow/stream/179271-FHIRcast)


---

// File: input/fsh/CapabilityStatement.fsh

Profile: FHIRcastCapabilityStatement
Parent: CapabilityStatement
Id: fhircast-capabilitystatement
Description: "CapabilityStatment stating support for FHIRcast. To supplement or optionally identify the location of a FHIRcast hub, a FHIR server MAY declare support for FHIRcast using the FHIRcast extension on its FHIR CapabilityStatement’s rest element."
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* implementationGuide ^slicing.rules = #open
* implementationGuide ^slicing.description = "Encourage FHIRcast IG to be listed"
* implementationGuide ^slicing.discriminator.type = #value
* implementationGuide ^slicing.discriminator.path = "$this"
* implementationGuide 0..*
* implementationGuide contains fhircast 0..1
* implementationGuide[fhircast] = "http://hl7.org/fhir/uv/fhircast/ImplementationGuide/hl7.fhir.uv.fhircast|3.0.0"
* rest ^slicing.rules = #open
* rest ^slicing.discriminator.type = #value
* rest ^slicing.discriminator.path = "mode"
* rest ^slicing.description = "Slice stating support for FHIRcast extension. Note that this extension might not be supportable by client-side Hubs."
* rest contains client 0..1 and server 0..1
* rest[client].mode = #client
* rest[server].mode = #server
* rest[server].extension contains FHIRcastConfigurationExtension named fhircast 0..1 MS

Extension: FHIRcastConfigurationExtension
Id: fhircast-configuration-extension
Title: "FHIRcast extension"
Context: CapabilityStatement.rest
Description: """
Extension in CapabilityStatement stating the location of the FHIRcast hub to be used with this FHIR server.
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* value[x] 0..0
* extension contains hubUrl 1..1 MS
* extension[hubUrl]
  * url 1..1 MS
    * ^fixedUri = "hub.url"
  * value[x] only url 


Instance: FHIRcastCapabilityStatement-Example
InstanceOf: FHIRcastCapabilityStatement
Description: "Example instance of a CapabilityStatement with FHIRcast extension."
Usage: #example
* id = "fhircast-capabilitystatement-example"
* status = #active
* date = "2024-04-04"
* kind = #instance
* fhirVersion = #4.0.1
* format[+] = #json
* format[+] = #xml
* software
  * name = "FHIR server software supporting FHIRcast"
* implementation
  * description = "Instance of FHIR server software supporting FHIRcast"
* implementationGuide[fhircast] = "http://hl7.org/fhir/uv/fhircast/ImplementationGuide/hl7.fhir.uv.fhircast|3.0.0"
* description = """
Example instance of a CapabilityStatement with FHIRcast extension.
"""
* rest[server]
  * extension[fhircast]
    * extension[hubUrl]
      * valueUrl = "http://my-fhircast-hub-url"
  * resource[+]
    * type = #Patient
    * interaction[+]
      * code = #read
    


---

// File: input/fsh/FHIRcastCodeSystem.fsh

CodeSystem: FHIRcastCodeSystem
Id: fhircast-codesystem
Title: "FHIRcast related Terminology."
Description: """
    This codesystem defines terminology that is used within the FHIRcast specification.
"""
* ^experimental = false
* ^caseSensitive = true
* ^version = "0.1.0"
* ^status = #active
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* #user-initiated "User initiated action."
      "The user initiated the action."
* #system-timeout "System initiated action due to timeout"
      "The system on which the Subscriber running has reached a pre-specified length of inactivity such that it is initiating the logout."
* #system-initiated "System initiated action"
      "The system on which the Subscriber running is initiating the action for a reason other than timeout."


---

// File: input/fsh/FHIRcastContentUpdateBundle.fsh

Profile: FHIRcastContentUpdateBundle
Parent: Bundle
Id: fhircast-content-update-bundle
Title: "FHIRcast Content Update Bundle"
Description: """
    Defines the structure of a Bundle that carries content updates that are
    communicated in FHIRcast `-update` messages. The bundle can only contain
    requests of type PUT and DELETE.  
    POST is not allowed as the content sharing mechanism cannot indicate the 
    id of the created resource using a POST operation.
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* type MS
* type = #transaction
* link 0..0
* entry MS
* entry ^slicing.discriminator.type = #value
* entry ^slicing.discriminator.path = "request.method"
* entry ^slicing.rules = #open
* entry ^slicing.ordered = false   // can be omitted, since false is the default
* entry ^slicing.description = "Slice defining each method"
* entry contains put 0..* MS and delete 0..* MS
* entry[put]
  * fullUrl MS
  * fullUrl 0..1
  * resource 1..1
  * search 0..0
  * request 1..1
    * method = #PUT
    * url 1..1
  * response 0..0
* entry[delete]
  * fullUrl MS
  * fullUrl 1..1
  * resource 0..0
  * search 0..0
  * request 1..1
    * method = #DELETE
    * url 1..1
  * response 0..0

Instance:  ImaginStudyUpdateExample
InstanceOf: ImagingStudy
Usage: #inline
* id = "7e9deb91-0017-4690-aebd-951cef34aba4"
* description = "CHEST XRAY"
* started = "2010-02-14T01:10:00.000Z"
* status = #available
* subject = Reference( PatientExample )
* identifier[+]
  * type
    * coding = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN
  * value = "3478116342"
* identifier[+]
  * system = "urn:dicom:uid"
  * value =  "urn:oid:2.16.124.113543.6003.1154777499.30276.83661.3632298176"

Instance: ObservationUpdateExample
InstanceOf: Observation
Usage: #inline
* id = "40afe766-3628-4ded-b5bd-925727c013b3"
* partOf = Reference(ImaginStudyUpdateExample)
* status = #preliminary
* category = http://terminology.hl7.org/CodeSystem/observation-category#imaging  "Imaging"
* code = http://radlex.org#RID49690 "simple cyst"
* effectiveDateTime = "2020-09-07T15:02:03.651Z"
* issued = "2020-09-07T15:02:03.651Z"
* subject = Reference(PatientExample)
* performer = Reference(PractitionerExample)
   

Instance: FHIRcastContentUpdateBundle-Example
InstanceOf: FHIRcastContentUpdateBundle
Usage: #example
Description: "Example of a content update bundle"
* type = #transaction
* entry[put][+]
  * fullUrl = "urn:7e9deb91-0017-4690-aebd-951cef34aba4"
  * request.method = #PUT
  * request.url = "http://huburl/topic/fhir"
  * resource = ImaginStudyUpdateExample
* entry[put][+]
  * fullUrl = "urn:40afe766-3628-4ded-b5bd-925727c013b3"
  * request.url = "http://huburl/topic/fhir"
  * request.method = #PUT
  * resource = ObservationUpdateExample
  

---

// File: input/fsh/FHIRcastDiagnosticReportClose.fsh

Profile: FHIRcastDiagnosticReportClose
Parent: DiagnosticReport
Id: fhircast-diagnostic-report-close
Title: "FHIRcast DiagnosticReport for Close Events"
Description:
"""
Provides guidance as to which DiagnosticReport attributes should be present and considerations as to how each attribute should be valued in all [FHIR resource]-close events.

**FHIR R4 versus FHIR R5**
In the FHIR R4 DiagnosticReport resource image study references would be placed in the `imagingStudy` attribute.  In a FHIR R5 (or above) DiagnosticReport this attribute has been renamed `study` since the allowed reference types has been expanded to include references to GenomicStudy resources.  This is obviously a breaking change.

In FHIRcast deployments based on FHIR R5, the attribute `study` SHALL be used rather than the `imagingStudy` attribute.

Additionally FHIR R5 includes a `supportingInfo` attribute. While not yet formally provided for in FHIR R5, it has been recommended that the next release of FHIR allow an ImagingStudy reference be included in this attribute so that the DiagnosticReport could indicate one or more image studies were consulted during the creation of the report. As such in FHIR R5 deployments, this field is considered labeled as must support.
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided. The provided `id` SHALL be the same DiagnosticReport id which was provided in the [FHIR resource]-open event (see also [FHIRcast DiagnosticReport for Open Events](StructureDefinition-fhircast-diagnostic-report-open.html)).
"""
* identifier 0..* MS
* identifier ^short = "At least one identifier of the DiagnosticReport SHOULD be provided in an [FHIR resource]-close request."
* identifier ^definition = 
"""
At least one `identifier` of the DiagnosticReport SHOULD be provided in a [FHIR resource]-close request. This could be a business identifier provided in the [DiagnosticReport-open](3-6-1-DiagnosticReport-open.html) event or a business identifier provided subsequently in a [DiagnosticReport-update](3-6-3-DiagnosticReport-update.html) event.
"""
* basedOn 0..* MS
* basedOn ^short = "At least one business identifier of the DiagnosticReport SHOULD be provided in a [FHIR resource]-open request (see detailed description)."
* basedOn ^definition =
"""
The accession number of the order which directly or in directly triggered the report to be created SHOULD be included as a business identifier if it is known.  The accession number is stored as Reference.identifier using the ServiceRequest Reference type and the “ACSN” identifier type.
"""
* imagingStudy ^short = "Imaging study (or studies) which are the subject of this report"
* imagingStudy ^definition =
"""
If the report is created as part of an imaging scenario, at least one imaging study would likely be the subject of the report and included in the event's context.  In this case a reference to the ImagingStudy (or references to the ImagingStudy's) in the event's context SHOULD be present in the `imagingStudy` array if known.
"""
* subject 1..1
* subject only Reference(FHIRcastPatientClose)
* subject ^short = "Reference to the patient associated with the report"
* subject ^definition = 
"SHALL be valued with a reference to the Patient resource which is present in the [FHIR resource]-close event."

Instance: FHIRcastDiagnosticReportClose-Example
InstanceOf: FHIRcastDiagnosticReportClose
Usage: #example
Description: "Example of a DiagnosticReport which could be used in a [FHIR resource]-close event.  Note that due to limitation of tools used to publishing the specification the below resource `id` is appended with '-close'.  The specification requires that the resource `id` in the [FHIR resource]-close be identical to the resource `id` provided in the corresponding [FHIR resource]-open; hence in the real world the '-close' suffix would not be present."
* id = "2402d3bd-e988-414b-b7f2-4322e86c9327-close"
* status = http://terminology.hl7.org/fhir/ValueSet/diagnostic-report-status#final
* code = http://loinc.org#19005-8 "Radiology Imaging study [Impression] (narrative)"
* identifier.use = http://terminology.hl7.org/fhir/ValueSet/identifier-use#official
* identifier.value = "GH339884.RPT.0001"
* identifier.system = "http://myhealthcare.com/reporting-system"
* subject = Reference(FHIRcastPatientClose-Example)
* conclusionCode = http://snomed.info/sct#368009 "Heart valve disorder"


---

// File: input/fsh/FHIRcastDiagnosticReportOpen.fsh

Profile: FHIRcastDiagnosticReportOpen
Parent: DiagnosticReport
Id: fhircast-diagnostic-report-open
Title: "FHIRcast Diagnostic Report for Open Events"
Description:
"""
Provides guidance as to which DiagnosticReport attributes should be present and considerations as to how each attribute should be valued in all [FHIR resource]-open events.

At least one business identifier of the DiagnosticReport SHALL be provided in a [FHIR resource]-open request.

Typically the report is associated with an order from an information system.  In this case the accession number of the order is provided in the DiagnosticReport's `basedOn` array attribute as a reference using a ServiceRequest reference type and the “ACSN” identifier type.  The accession number SHALL be included as a business identifier if it is known.

A reporting system may also include its own identifier and should use an appropriate identifier type and system when supplying such a business identifier.

In radiology reports or other image related uses of FHIRcast, at least one imaging study would likely be the subject of the report and included in the event's context.  In this case, the reference to one or more ImagingStudy resources would be provided.

**FHIR R4 versus FHIR R5**
In the FHIR R4 DiagnosticReport resource image study references would be placed in the `imagingStudy` attribute.  In a FHIR R5 (or above) DiagnosticReport this attribute has been renamed `study` since the allowed reference types has been expanded to include references to GenomicStudy resources.  This is obviously a breaking change.

In FHIRcast deployments based on FHIR R5, the attribute `study` SHALL be used rather than the `imagingStudy` attribute.

Additionally FHIR R5 includes a `supportingInfo` attribute. While not yet formally provided for in FHIR R5, it has been recommended that the next release of FHIR allow an ImagingStudy reference be included in this attribute so that the DiagnosticReport could indicate one or more image studies were consulted during the creation of the report. As such in FHIR R5 deployments, this field is considered labeled as must support.
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided. It may be the `id` associated with the resource as persisted in a FHIR server.  If the resource is not stored in a FHIR server, the Subscriber requesting the context change SHOULD use a mechanism to generate the `id` such that it will be globally unique (e.g., a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)).  When a [FHIR resource]-close event including this report is requested, the Subscriber requesting the context be closed SHALL use the same DiagnosticReport `id` which was provided in the [FHIR resource]-open event (see also [FHIRcast DiagnosticReport for Close Events](StructureDefinition-fhircast-diagnostic-report-close.html)).
"""
* identifier 0..* MS
* identifier ^short = "A business identifier of the DiagnosticReport may be provided as part of the [FHIR resource]-open request (see detailed description)."
* identifier ^definition = 
"""
The Study Instance UID SHALL be included as a business identifier if it is known.  In FHIR, the Study Instance UID of an ImagingStudy is stored in the `identifier` array using the Identifier system of `urn:dicom:uid` and prefix the UID value with `urn:oid:`.
"""
* status 1..1
* status ^short = "Status of the DiagnosticReport, note this may not be known and hence have a value of `unknown`; however, is included since it is required by FHIR"
* status ^definition = 
"""
While initially the `status` of the report may begin as `unknown` or `preliminary` (or something else), throughout the lifecycle of the context the report's status may transition.  For example, a reporting application may enable a clinician to sign the report.  In such a situation this change in status could become final and would be communicated through a [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html)
event prior to the DiagnosticReport context being closed by a DiagnosticReport-close event.  
"""
* subject 1..1
* subject only Reference(FHIRcastPatientOpen)
* subject ^short = "Reference to the Patient resource associated with the DiagnosticReport"
* subject ^definition =
"""
A reference to the FHIR Patient resource describing the patient whose report is currently in context SHALL be present.
"""
* basedOn 0..* MS
* basedOn ^short = "At least one business identifier of the DiagnosticReport SHALL be provided in a [FHIR resource]-open request (see detailed description)."
* basedOn ^definition =
"""
The accession number of the order which directly or in directly triggered the report to be created SHALL be included as a business identifier if it is known.  The accession number is stored as Reference.identifier using the ServiceRequest Reference type and the “ACSN” identifier type.
"""
* imagingStudy only Reference(FHIRcastImagingStudyOpen)
* imagingStudy ^short = "Imaging study (or studies) which are the subject of this report"
* imagingStudy ^definition =
"""
If the report is created as part of an imaging scenario, at least one imaging study would likely be the subject of the report and included in the event's context.  In this case a reference to the ImagingStudy (or references to the ImagingStudy's) in the event's context SHALL be present in the `imagingStudy` array if known.
"""
* obeys business-identifier

Invariant:   business-identifier
Description: "identifier array or basedOn array SHALL contain at least one element"
Expression:  "identifier.exists() or basedOn.exists()"
Severity:    #error
XPath:       "f:identifier or f:basedOn"

Instance: FHIRcastDiagnosticReportOpen-Example
InstanceOf: FHIRcastDiagnosticReportOpen
Usage: #example
Description: "Example of a DiagnosticReport which could be used in a [FHIR resource]-open event"
* id = "2402d3bd-e988-414b-b7f2-4322e86c9327"
* status = http://terminology.hl7.org/fhir/ValueSet/diagnostic-report-status#unknown
* subject = Reference(FHIRcastPatientOpen-Example)
* code = http://loinc.org#19005-8 "Radiology Imaging study [Impression] (narrative)"
* basedOn[0].type = "ServiceRequest"
* basedOn[=].identifier.type.coding = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN
* basedOn[=].identifier.system = "urn:oid:2.16.840.1.113883.19.5"
* basedOn[=].identifier.value = "GH339884"
* basedOn[=].identifier.assigner.reference = "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc"
* basedOn[=].identifier.assigner.display = "My Healthcare Provider"
* imagingStudy = Reference(FHIRcastImagingStudyOpen-Example)

---

// File: input/fsh/FHIRcastDiagnosticReportSelect.fsh

Profile: FHIRcastDiagnosticReportSelect
Parent: DiagnosticReport
Id: fhircast-diagnostic-report-select
Title: "FHIRcast Diagnostic Report for Select Events"
Description:
"""
Provides guidance as to which `DiagnosticReport` attributes should be present and considerations as to how each attribute should be valued in [`DiagnosticReport-select`](3-6-4-DiagnosticReport-select.html) events.

The `DiagnosticReport` in [`DiagnosticReport-select`](3-6-4-DiagnosticReport-select.html) events enables verification that the selected content in the [`DiagnosticReport-select`](3-6-4-DiagnosticReport-select.html) event belongs to the DiagnosticReport which is the current anchor context.

Hence, the only required attributes of `DiagnosticReport` in the [`DiagnosticReport-select`](3-6-4-DiagnosticReport-select.html) event is the resources' `id`, as well as its `status` and `code` since these attributes are required by FHIR.  Other attributes of the `DiagnosticReport` MAY be valued but would serve no purpose in the [`DiagnosticReport-select`](3-6-4-DiagnosticReport-select.html) event.

"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided.
"""
* status 1..1
* status ^short = "Status of the DiagnosticReport, note this may not be known and hence have a value of `unknown`; however, is included since it is required by FHIR"
* status ^definition = 
"""
While initially the `status` of the report may begin as `unknown` or `preliminary` (or something else), throughout the lifecycle of the context the report's status may transition.  For example, a reporting application may enable a clinician to sign the report.  In such a situation this change in status could become final and would be communicated through a [`DiagnosticReport-select`](3-6-4-DiagnosticReport-select.html) event prior to the DiagnosticReport context being closed by a DiagnosticReport-close event.  
"""

Instance: FHIRcastDiagnosticReportSelect-Example
InstanceOf: FHIRcastDiagnosticReportSelect
Usage: #example
Description: "Example of a `DiagnosticReport` which could be used in a [`DiagnosticReport-select`](3-6-4-DiagnosticReport-select.html) event.  Note that due to limitation of tools used to publishing the specification the below resource `id` is appended with '-select'.  The specification requires that the resource `id` in the [FHIR resource]-select be identical to the resource `id` provided in the corresponding [FHIR resource]-open; hence in the real world the '-select' suffix would not be present."
* id = "2402d3bd-e988-414b-b7f2-4322e86c9327-select"
* status = http://terminology.hl7.org/fhir/ValueSet/diagnostic-report-status#unknown
* code = http://loinc.org#19005-8 "Radiology Imaging study [Impression] (narrative)"


---

// File: input/fsh/FHIRcastDiagnosticReportUpdate.fsh

Profile: FHIRcastDiagnosticReportUpdate
Parent: DiagnosticReport
Id: fhircast-diagnostic-report-update
Title: "FHIRcast Diagnostic Report for Update Events"
Description:
"""
Provides guidance as to which `DiagnosticReport` attributes should be present and considerations as to how each attribute should be valued in [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) events.

The `DiagnosticReport` in [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) events serves two purposes.  First its presence enables verification that the content in the [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) event's Bundle attribute belongs to the DiagnosticReport which is the current anchor context.  Additionally, attributes of the DiagnosticReport which is the current anchor context may be updated in a [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) event.

Hence, the only required attributes of `DiagnosticReport` in the [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) event is the resources' `id`, as well as its `status` since this attribute is required by FHIR.  Other attributes of the `DiagnosticReport` MAY be valued if they have changed from their original values or no value had been provided in the [`DiagnosticReport-open`](3-6-1-DiagnosticReport-open.html) event.

"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided.
"""
* status 1..1
* status ^short = "Status of the DiagnosticReport, note this may not be known and hence have a value of `unknown`; however, is included since it is required by FHIR"
* status ^definition = 
"""
While initially the `status` of the report may begin as `unknown` or `preliminary` (or something else), throughout the lifecycle of the context the report's status may transition.  For example, a reporting application may enable a clinician to sign the report.  In such a situation this change in status could become final and would be communicated through a [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html)
event prior to the DiagnosticReport context being closed by a DiagnosticReport-close event.  
"""

Instance: FHIRcastDiagnosticReportUpdate-Example
InstanceOf: FHIRcastDiagnosticReportUpdate
Usage: #example
Description: "Example of a `DiagnosticReport` which could be used in a [`DiagnosticReport-update`](3-6-3-DiagnosticReport-update.html) event.  Note that due to limitation of tools used to publishing the specification the below resource `id` is appended with '-update'.  The specification requires that the resource `id` in the [FHIR resource]-update be identical to the resource `id` provided in the corresponding [FHIR resource]-open; hence in the real world the '-update' suffix would not be present."
* id = "2402d3bd-e988-414b-b7f2-4322e86c9327-update"
* status = http://terminology.hl7.org/fhir/ValueSet/diagnostic-report-status#unknown
* code = http://loinc.org#19005-8 "Radiology Imaging study [Impression] (narrative)"


---

// File: input/fsh/FHIRcastEncounterClose.fsh

Profile: FHIRcastEncounterClose
Parent: Encounter
Id: fhircast-encounter-close
Title: "FHIRcast Encounter for Close Events"
Description: "Provides guidance as to which Encounter attributes should be present and considerations as to how each attribute should be valued in all [FHIR resource]-close events."
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided. The provided `id` SHALL be the same Encounter id which was provided in the corresponding [FHIR resource]-open event (see also [FHIRcast Encounter for Open Events](StructureDefinition-fhircast-encounter-open.html)).
"""
* identifier 0..* MS
* identifier ^short = "At least one identifier of the Encounter SHOULD be provided in a [FHIR resource]-close request."
* identifier ^definition = 
"At least one `identifier` of the Encounter SHOULD be provided in a [FHIR resource]-close request. Providing one or more of the `indentifier` values for the Encounter which was provided in the corresponding [FHIR resource]-open event enables Subscribers to perform identity verification according to their requirements."
* status ^short = "Status of the encounter.  Note that the `status` attribute is required by the FHIR specification but may not be of significant interest when used in FHIRcast"
* status ^definition = 
"""
Status of the encounter.  Note that the `status` attribute is required by the FHIR specification; however, the actual status of an encounter may not be known nor of signficant interest when closing an encounter context.  Hence, the `status` attribute may frequently have a value of `unknown`.
"""
* class ^short = "Classification of the encounter.  Note that the `class` attribute is required by the FHIR specification but may not be of significant interest when used in FHIRcast"
* class ^definition = 
"""
Class of the encounter.  Note that the `class` attribute is required by the FHIR specification; however, an encounter's class is generally not of significant interest when closing a context, hence the value of the `class` attribute should usually be ignored.  Starting with FHIR R5, the `class` attribute is optional and will be removed from this profile in a FHIRcast specification based on FHIR R5 or above.
"""
* subject 1..1
* subject only Reference(FHIRcastPatientClose)
* subject ^short = "Reference to the patient associated with the encounter"
* subject ^definition = 
"SHALL be valued with a reference to the Patient resource which is present in the [FHIR resource]-close event."

Instance: FHIRcastEncounterClose-Example
InstanceOf: FHIRcastEncounterClose
Usage: #example
Description: "Example of an encounter which could be used in a [FHIR resource]-close event.  Note that due to limitation of tools used to publishing the specification the below resource `id` is appended with '-close'.  The specification requires that the resource `id` in the -close be identical to the resource `id` provided in the corresponding -open; hence in the real world the '-close' suffix would not be present."
* id = "8cc652ba-770e-4ae1-b688-6e8e7c737438-close"
* status = http://terminology.hl7.org/fhir/ValueSet/encounter-status#unknown
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* identifier.use = http://terminology.hl7.org/fhir/ValueSet/identifier-use#official
* identifier.value = "r2r22345"
* identifier.system = "http://myhealthcare.com/visits"
* subject = Reference(FHIRcastPatientClose-Example)


---

// File: input/fsh/FHIRcastEncounterOpen.fsh

Profile: FHIRcastEncounterOpen
Parent: Encounter
Id: fhircast-encounter-open
Title: "FHIRcast Encounter for Open Events"
Description: "Provides guidance as to which Encounter attributes should be present and considerations as to how each attribute should be valued in all [FHIR resource]-open events."
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided. It may be the `id` associated with the resource as persisted in a FHIR server.  If the resource is not stored in a FHIR server, the Subscriber requesting the context change SHOULD use a mechanism to generate  the `id` such that it will be globally unique (e.g., a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)). When a [FHIR resource]-close event including this encounter is requested, the Subscriber requesting the context be closed SHALL use the same Encounter `id` which was provided in the [FHIR resource]-open event (see also [FHIRcast Encounter for Close Events](StructureDefinition-fhircast-encounter-close.html)).
"""
* identifier 1..*
* identifier ^short = "At least one identifier of the Encounter SHALL be provided in a [FHIR resource]-open request."
* identifier ^definition = 
"""
At least one `identifier` of the Encounter SHALL be provided in a [FHIR resource]-open request. The Subscriber making the open request should not assume that all Subscribers will be able to resolve the resource id or access a FHIR server where the resource may be stored; hence, the provided `identifier` (or identifiers) should be a value by which all Subscribers will likely be able to identify the Encounter.
"""
* status ^short = "Status of the encounter.  Note that the `status` attribute is required by the FHIR specification but may not be of significant interest when used in FHIRcast"
* status ^definition = 
"""
Status of the encounter.  Note that the `status` attribute is required by the FHIR specification; however, the actual status of an encounter may not be known nor of signficant interest when establishing a context.  Hence, the `status` attribute may frequently have a value of `unknown`.
"""
* class ^short = "Classification of the encounter.  Note that the `class` attribute is required by the FHIR specification but may not be of significant interest when used in FHIRcast"
* class ^definition = 
"""
Class of the encounter.  Note that the `class` attribute is required by the FHIR specification; however, the class of an encounter may not be known by all Subscribers in a FHIRcast topic.  Since an encounter's class is generally not of significant interest when used in FHIRcast, the value of the `class` attribute should usually be ignored.  Starting with FHIR R5, the `class` attribute is optional and will be removed from this profile in a FHIRcast specification based on FHIR R5 or above.
"""
* subject 1..1
* subject only Reference(FHIRcastPatientOpen)
* subject ^short = "Reference to the patient associated with the encounter"
* subject ^definition = 
"""
SHALL be valued with a reference to the Patient resource which is present in the [FHIR resource]-open event.
"""

Instance: FHIRcastEncounterOpen-Example
InstanceOf: FHIRcastEncounterOpen
Usage: #example
Description: "Example of an encounter which could be used in a [FHIR resource]-open event"
* id = "8cc652ba-770e-4ae1-b688-6e8e7c737438"
* status = http://terminology.hl7.org/fhir/ValueSet/encounter-status#unknown
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* identifier.use = http://terminology.hl7.org/fhir/ValueSet/identifier-use#official
* identifier.value = "r2r22345"
* identifier.system = "http://myhealthcare.com/visits"
* subject = Reference(FHIRcastPatientOpen-Example)

---

// File: input/fsh/FHIRcastImagingStudyClose.fsh

Profile: FHIRcastImagingStudyClose
Parent: ImagingStudy
Id: fhircast-imaging-study-close
Title: "FHIRcast ImagingStudy for Close Events"
Description:
"""
Provides guidance as to which ImagingStudy attributes should be present and considerations as to how each attribute should be valued in all [FHIR resource]-close events.

It is recommended that the image study business identifiers provided in the corresponding [FHIR resource]-open event are provided in the [FHIR resource]-close event.  Providing these business identifiers enables Subscribers to perform identity verification according to their requirements.  See [FHIRcast ImagingStudy for Open Events](StructureDefinition-fhircast-imaging-study-open.html) for details on the business identifiers of an ImagingStudy.
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided. The provided `id` SHALL be the same ImagingStudy resource id which was provided in the corresponding [FHIR resource]-open event (see also [FHIRcast ImagingStudy for Open Events](StructureDefinition-fhircast-imaging-study-open.html)).
"""

* identifier 0..* MS
* identifier ^short = "At least one business identifier of the ImagingStudy SHOULD be provided in a [FHIR resource]-close request (see detailed description)."
* identifier ^definition = 
"""
The Study Instance UID SHOULD be included as a business identifier if it is known.  If a Study Instance UID was provided in the corresponding [FHIR resource]-open event, then the same Study Instance UID SHOULD be provided in the [FHIR resource]-close event.

The accession number of the order which triggered the image procedure to be performed SHOULD be included as a business identifier if it is known.  If an accession number was provided in the corresponding [FHIR resource]-open event, then the same accession number SHOULD be provided in the [FHIR resource]-close event.
"""

// The indentifier sequence below should be used and with 0..* when FHIRcast transitions to FHIR R5 or above since it would be valid to provide only the accession number in the basedOn sequence
// * identifier 0..* MS
// * identifier ^short = "At least one business identifier of the ImagingStudy SHOULD be provided in a [FHIR resource]-close request (see detailed description)."
// * identifier ^definition = 
// """
// The Study Instance UID SHOULD be included as a business identifier if it is known.  If a Study Instance UID was provided in the corresponding [FHIR resource]-open event, then the same Study Instance UID SHOULD be provided in the [FHIR resource]-close event.
// """

* status 1..1
* status ^short = "Status of the ImagingStudy, note this may be not be known and hence have a value of `unknown`; however, `status` is included since it is required by the FHIRcast"
* subject 1..1
* subject only Reference(FHIRcastPatientClose or Device or Group)
* subject ^short = "Reference to the Patient resource associated with the ImagingStudy (see detailed description if the image study's subject is not a patient)"
* subject ^definition =
"""
A reference to the FHIR Patient resource describing the patient associated with the imaging study being closed.  Note there are rare cases in which the ImagingStudy subject references a resource
which is not a patient.  Regardless, the subject reference present in the corresponding [FHIR resource]-open event SHALL be provided in the [FHIR resource]-close event.
"""

// The basedOn sequence below should be used when FHIRcast transitions to FHIR R5 or above
// * basedOn 0..1 MS
// * basedOn ^short = "At least one business identifier of the ImagingStudy SHOULD be provided in a [FHIR resource]-close request (see detailed description)."
// * basedOn ^definition =
// """
// The accession number of the order which triggered the image procedure to be performed SHOULD be included as a business identifier if it is known.  If an accession number was provided in the corresponding [FHIR resource]-open event, then the same accession number SHOULD be provided in the [FHIR resource]-close event.
// """

Instance: FHIRcastImagingStudyClose-Example
InstanceOf: FHIRcastImagingStudyClose
Usage: #example
Description: "Example of an imaging study which could be used in a [FHIR resource]-close event.  Note that due to limitation of tools used to publishing the specification, the below resource `id` is appended with '-close'.  The specification requires that the resource `id` in the [FHIR resource]-close be identical to the resource `id` provided in the corresponding [FHIR resource -open; hence in the real world the '-close' suffix would not be present."
* id = "e25c1d31-20a2-41f8-8d85-fe2fdeac74fd-close"
* status = http://terminology.hl7.org/fhir/ValueSet/imagingstudy-status#unknown
* identifier[0].system = "urn:dicom:uid"
* identifier[=].value = "urn:oid:1.2.840.83474.8.231.875.3.15.661594731"

// This identifier slice shows the FHIR R4 approach and should be removed when the FHIRcast specification transitions to R5 or above
* identifier[+].type.coding = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN
* identifier[=].system = "urn:oid:2.16.840.1.113883.19.5"
* identifier[=].value = "GH339884"
* identifier[=].assigner.reference = "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc"
* identifier[=].assigner.display = "My Healthcare Provider"

* subject = Reference(FHIRcastPatientClose-Example)

// FHIR R5 Example should use the below for providing an accession number value
// * basedOn[0].type = "ServiceRequest"
// * basedOn[=].identifier.type.coding.system = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN
// * basedOn[=].identifier.system = "urn:oid:2.16.840.1.113883.19.5"
// * basedOn[=].identifier.value = "GH339884"
// * basedOn[=].identifier.assigner.reference = "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc"
// * basedOn[=].identifier.assigner.display = "My Healthcare Provider"


---

// File: input/fsh/FHIRcastImagingStudyOpen.fsh

Profile: FHIRcastImagingStudyOpen
Parent: ImagingStudy
Id: fhircast-imaging-study-open
Title: "FHIRcast ImagingStudy for Open Events"
Description:
"""
Provides guidance as to which ImagingStudy attributes should be present and considerations as to how each attribute should be valued in all [FHIR resource]-open events.

At least one business identifier of the ImagingStudy SHALL be provided in a [FHIR resource]-open request.  Two business identifiers are typically associated with an image study.  Imaging systems such as a PACS viewer, advanced visualization workstation, etc. typically identify an image study by its DICOM Study Instance UID (which in DICOM is identified with a (0020,000D) tag).  Likewise, information systems often identify an image study through the accession number of the order which triggered the image procedure to be performed.

The Study Instance UID SHALL be included as a business identifier if it is known.  In FHIR, the Study Instance UID of an ImagingStudy is provided in the `identifier` array using the identifier system of `urn:dicom:uid` and prefixing the UID value with `urn:oid:`.

The accession number SHALL be included as a business identifier if it is known.

**FHIR R4 versus FHIR R5**

Relative to FHIR R4, the ImagingStudy resource's change relevant to FHIRcast is the guidance FHIR R5 provides in specifying the accession number.  In FHIR R4, the guidance is to provide the accession number in the `identifier` array.  In FHIR R5, the accession number is provided in the ImagingStudy's `basedOn` array as a reference using a ServiceRequest reference type.

Since this version of FHIRcast promotes the use of FHIR R4 resources, the guidance to provide the accession number in the `identifier` array SHOULD be used and this approach is shown in all ImagingStudy examples in the FHIRcast specification.  However, if Subscribers agree to use FHIR R5 resources, the FHIR R5 recommendation MAY be used.

For a more detailed explanation of these business identifiers, see the [FHIR R4 implementation notes of the FHIR ImagingStudy resource](https://hl7.org/fhir/R4B/imagingstudy.html) (and the [FHIR R5 implementation notes of the FHIR ImagingStudy resource](https://hl7.org/fhir/R5/imagingstudy.html)). Ideally both the accession number and Study Instance UID are available and present in an ImagingStudy resource used in FHIRcast.  The presence of both business identifiers ensures that all Subscribers will be able to be able to identify the appropriate imaging study.
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided. It may be the `id` associated with the resource as persisted in a FHIR server.  If the resource is not stored in a FHIR server, the Subscriber requesting the context change SHOULD use a mechanism to generate the `id` such that it will be globally unique (e.g., a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)).  When a [FHIR resource]-close event including this image study is requested, the Subscriber requesting the context be closed SHALL use the same ImagingStudy resource `id` which was provided in the [FHIR resource]-open event (see also [FHIRcast ImagingStudy for Close Events](StructureDefinition-fhircast-imaging-study-close.html)).
"""

// This identifier attribute documentation shows the FHIR R4 approach and should be removed when the FHIRcast specification transitions to R5 or above
* identifier 1..*
* identifier ^short = "At least one business identifier of the ImagingStudy SHALL be provided in a [FHIR resource]-open request (see this event's detailed description for more information)."
* identifier ^definition = 
"""
The Study Instance UID SHALL be included as a business identifier if it is known.  In FHIR, the Study Instance UID of an ImagingStudy is stored in the `identifier` array using the identifier system of `urn:dicom:uid` and prefixing the UID value with `urn:oid:`.

The accession number of the order which triggered the image procedure to be performed SHALL be included as a business identifier if it is known.  The accession number is provided using the “ACSN” identifier type.
"""
// The indentifier sequence below should be used and with 0..* when FHIRcast transitions to FHIR R5 or above since it would be valid to provide only the accession number in the basedOn array
// * identifier 0..*
// * identifier ^short = "At least one business identifier of the ImagingStudy SHALL be provided in a [FHIR resource]-open request (see this event's detailed description for more information)."
// * identifier ^definition = 
// """
// The Study Instance UID SHALL be included as a business identifier if it is known.  In FHIR, the Study Instance UID of an ImagingStudy is stored in the `identifier` array using the identifier system of `urn:dicom:uid` and prefixing the UID value with `urn:oid:`.
// """

* status 1..1
* status ^short = "Status of the ImagingStudy, note this may not be known and hence have a value of `unknown`; however, `status` is included since it is required by the FHIR standard"
* subject 1..1
* subject only Reference(FHIRcastPatientOpen or Device or Group)
* subject ^short = "Reference to the Patient resource associated with the ImagingStudy (see detailed description if the image study's subject is not a patient)"
* subject ^definition =
"""
A reference to the FHIR Patient resource describing the patient whose imaging study is currently in context.  A patient SHALL be present if there is a patient associated with the study.  Note there are rare cases in which the ImagingStudy.subject references a resource which is not a patient; for example a calibration study.  A reference to the related non-Patient subject of the study SHALL be present in the ImagingStudy resource as it is required by the FHIR specification but is not required to be present in the [FHIR resource]-open event's context.  For example, a reference to a Device resource could be provided as the subject (note, if no FHIR Device FHIR resource instance is available it is allowed to provide only a `display` value in the `reference`) but not provided in the FHIRcast event's `context` array.
"""
// The basedOn sequence below should be used when FHIRcast transitions to FHIR R5 or above
// * basedOn 0..1
// * basedOn ^short = "At least one business identifier of the ImagingStudy SHALL be provided in a [FHIR resource]-open request (see detailed description)."
// * basedOn ^definition =
// """
// The accession number of the order which triggered the image procedure to be performed SHALL be included as a business identifier if it is known.  The accession number is provided as Reference.identifier using the ServiceRequest Reference type and the “ACSN” identifier type.  The ServiceRequest SHALL be the only entry in the `basedOn` array.
// """

Instance: FHIRcastImagingStudyOpen-Example
InstanceOf: FHIRcastImagingStudyOpen
Usage: #example
Description: "Example of an imaging study which could be used in a [FHIR resource]-open event"
* id = "e25c1d31-20a2-41f8-8d85-fe2fdeac74fd"
* status = http://terminology.hl7.org/fhir/ValueSet/imagingstudy-status#unknown

* identifier[0].system = "urn:dicom:uid"
* identifier[=].value = "urn:oid:1.2.840.83474.8.231.875.3.15.661594731"

// This identifier slice shows the FHIR R4 approach and should be removed when the FHIRcast specification transitions to R5 or above
* identifier[+].type.coding = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN
* identifier[=].system = "urn:oid:2.16.840.1.113883.19.5"
* identifier[=].value = "GH339884"
* identifier[=].assigner.reference = "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc"
* identifier[=].assigner.display = "My Healthcare Provider"

* subject = Reference(FHIRcastPatientOpen-Example)

// FHIR R5 Example should use the below for providing an accession number value
// * basedOn[0].type = "ServiceRequest"
// * basedOn[=].identifier.type.coding = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN
// * basedOn[=].identifier.system = "urn:oid:2.16.840.1.113883.19.5"
// * basedOn[=].identifier.value = "GH339884"
// * basedOn[=].identifier.assigner.reference = "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc"
// * basedOn[=].identifier.assigner.display = "My Healthcare Provider"

---

// File: input/fsh/FHIRcastObservation.fsh

Alias: Loinc = http://loinc.org

Profile: FHIRcastObservation
Parent: Observation
Id: fhircast-observation
Title: "FHIRcast Observation"
Description: "Defines the minimum set of attributes which an application wanting to share observation content must support"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* subject 1..1
* hasMember MS
* derivedFrom MS

Instance: FHIRcastObservation-Example
InstanceOf: FHIRcastObservation
Usage: #example
Description: "Example of a simple observation which could be exchanged using FHIRcast"
* id = "435098234"
* derivedFrom.identifier.system = "urn:dicom:uid"
* derivedFrom.identifier.value = "urn:oid:2.16.124.113543.6003.1154777499.30276.83661.3632298176"
* status = #preliminary
* code = Loinc#45651-7 "Pathological bone fracture [Minimum Data Set]"
* issued = "2020-09-07T15:02:03.651Z"
* valueCodeableConcept.coding = Loinc#LA33-6 "Yes"
* subject = Reference( FHIRcastPatientOpen-Example )
* performer = Reference( PractitionerExample )
* effectiveDateTime = "2024-03-19"


---

// File: input/fsh/FHIRcastPatientClose.fsh

Profile: FHIRcastPatientClose
Parent: Patient
Id: fhircast-patient-close
Title: "FHIRcast Patient for Close Events"
Description: "Provides guidance as to which Patient attributes should be present and considerations as to how each attribute should be valued in all [FHIR resource]-close events."
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided. The provided `id` SHALL be the same Patient resource id which was provided in the corresponding [FHIR resource]-open event (see also [FHIRcast Patient for Open Events](StructureDefinition-fhircast-patient-open.html)).
"""
* identifier 0..* MS
* identifier ^short = "At least one identifier of the Patient SHOULD be provided in a [FHIR resource]-close request."
* identifier ^definition = 
"""
At least one `identifier` of the Patient SHOULD be provided in a [FHIR resource]-close request. Providing one or more of the `indentifier` values for the Patient which was provided in the corresponding [FHIR resource]-open event enables Subscribers to perform identity verification according to their requirements.
"""

Instance: FHIRcastPatientClose-Example
InstanceOf: FHIRcastPatientClose
Usage: #example
Description: "Example of a patient which could be used in a [FHIR resource]-close event. Note that due to limitation of tools used to publishing the specification, the below resource `id` is appended with '-close'. The specification requires that the resource `id` in the [FHIR resource]-close be identical to the resource `id` provided in the corresponding [FHIR resource]-open; hence in the real world the '-close' suffix would not be present."
* id = "503824b8-fe8c-4227-b061-7181ba6c3926-close"
* identifier[0].use = http://hl7.org/fhir/identifier-use#official
* identifier[=].type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* identifier[=].system = "urn:oid:2.16.840.1.113883.19.5"
* identifier[=].value = "4438001"
* identifier[=].assigner.reference = "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc"
* identifier[=].assigner.display = "My Healthcare Provider"


---

// File: input/fsh/FHIRcastPatientOpen.fsh

Profile: FHIRcastPatientOpen
Parent: Patient
Id: fhircast-patient-open
Title: "FHIRcast Patient for Open Events"
Description: "Provides guidance as to which Patient attributes should be present and considerations as to how each attribute should be valued in all [FHIR resource]-open events."
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* id 1..1 
* id ^short = "A logical id of the resource SHALL be provided."
* id ^definition =
"""
A logical id of the resource SHALL be provided. It may be the `id` associated with the resource as persisted in a FHIR server.  If the resource is not stored in a FHIR server, the Subscriber requesting the context change SHOULD use a mechanism to generate the `id` such that it will be globally unique (e.g., a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)).  When a [FHIR resource]-close event including this patient is requested, the Subscriber requesting the context be closed SHALL use  the same Patient `id` which was provided in the [FHIR resource]-open event (see also [FHIRcast Patient for Close Events](StructureDefinition-fhircast-patient-close.html)). Additionally, this `id` SHALL be the `id` used in the `subject` attribute's Patient reference in all resources containing a `subject` attribute in a given [FHIR resource]-open event.
"""
* identifier 1..*
* identifier ^short = "At least one identifier of the Patient SHALL be provided in a [FHIR resource]-open request."
* identifier ^definition = 
"""
At least one `identifier` of the Patient SHALL be provided in a [FHIR resource]-open request. The Subscriber making the open request should not assume that all Subscribers will be able to resolve the resource `id` or access a FHIR server where the resource may be stored; hence, the provided `identifier` (or identifiers) should be a value by which all Subscribers will likely be able to identify the Patient (e.g., a patient's MRN or MPI identifier).
"""
* name 0..1
* name ^short = "Name of the patient which may be used for identity verification"
* name ^definition =
"""
The Subscriber making the open request SHOULD provide a value for the `name` attribute, if it is available, so that Subscribers may perform identity verification according to their requirements.
"""
* gender 0..1
* gender ^short = "Gender of the patient which may be used for identity verification"
* gender ^definition =
"""
The Subscriber making the open request SHOULD provide a value for the `gender` attribute, if it is available, so that Subscribers may perform identity verification according to their requirements.
"""
* birthDate 0..1
* birthDate ^short = "Birth date of the patient which may be used for identity verification"
* birthDate ^definition =
"""
The Subscriber making the open request SHOULD provide a value for the `birthDate` attribute, if it is available, so that Subscribers may perform identity verification according to their requirements
"""

Instance: FHIRcastPatientOpen-Example
InstanceOf: FHIRcastPatientOpen
Usage: #example
Description: "Example of a patient which could be used in a [FHIR resource]-open event"
* id = "503824b8-fe8c-4227-b061-7181ba6c3926"
* identifier[0].use = http://hl7.org/fhir/identifier-use#official
* identifier[=].type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* identifier[=].system = "urn:oid:2.16.840.1.113883.19.5"
* identifier[=].value = "4438001"
* identifier[=].assigner.reference = "Organization/a92ac1be-fb34-49c1-be58-10928bd271cc"
* identifier[=].assigner.display = "My Healthcare Provider"
* name.use = http://terminology.hl7.org/fhir/ValueSet/name-use#official
* name.given = "John"
* name.family = "Smith"
* name.prefix = "Dr."
* name.suffix[0] = "Jr."
* name.suffix[1] = "M.D."
* gender = http://terminology.hl7.org/fhir/ValueSet/administrative-gender#male
* birthDate = "1978-11-03"


---

// File: input/fsh/FHIRcastSyncErrorContext.fsh

Profile: FhircastSyncErrorOperationOutcome
Parent:  OperationOutcome
Id: fhircast-operation-outcome-syncerror
Title: "OperationOutcome for sync-error events"
Description: """
Defines the structure of OperationOutcomes to be used in sync-error events. The content of the 
OperationOutcomes contains information that is used to determine the cause of the sync-error. 
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* issue MS
* issue 1..*
* issue ^slicing.rules = #open
* issue ^slicing.ordered = false   // can be omitted, since false is the default
* issue ^slicing.description = "FHIRcast specific information"
* issue ^slicing.discriminator.type = #value
* issue ^slicing.discriminator.path = "code"
* issue contains fhircast 1..1
* issue[fhircast].code = #processing
* issue[fhircast].details 1..1 MS
* issue[fhircast].details.coding ^slicing.discriminator.type = #value
* issue[fhircast].details.coding ^slicing.discriminator.path = "system"
* issue[fhircast].details.coding ^slicing.rules = #open
* issue[fhircast].details.coding ^slicing.ordered = false   // can be omitted, since false is the default
* issue[fhircast].details.coding ^slicing.description = "Detailed information on syncerror cause."
* issue[fhircast].details.coding 3..*
* issue[fhircast].details.coding contains eventid 1..1 and eventname 1..1 and subscribername 1..1
* issue[fhircast].details.coding[eventid].system = "https://fhircast.hl7.org/events/syncerror/eventid"
* issue[fhircast].details.coding[eventid].code ^short = "The event id of the related event."
* issue[fhircast].details.coding[eventname].system = "https://fhircast.hl7.org/events/syncerror/eventname"
* issue[fhircast].details.coding[eventname].code ^short = "The event eventname of the related event."
* issue[fhircast].details.coding[subscribername].system = "https://fhircast.hl7.org/events/syncerror/subscribername"
* issue[fhircast].details.coding[subscribername].code ^short = "The subscribername of the subscriber causing the event."
* issue[fhircast].diagnostics 1..1 MS
* issue[fhircast].diagnostics ^short = "This field SHALL contain a human readable description of the source and reason for the error."

Profile: FhircastHubSyncErrorOperationOutcome
Parent:  FhircastSyncErrorOperationOutcome
Id: fhircast-hub-operation-outcome-syncerrror
Title: "OperationOutcome for Hub generated sync-error events"
Description: """
Defines the structure of an OperationOutcome to be used in sync-error events created by the Hub.
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* issue[fhircast].severity = #warning

Profile: FhircastSubscriberSyncErrorOperationOutcome
Parent:  FhircastSyncErrorOperationOutcome
Id: fhircast-subscriber-operation-outcome-syncerrror
Title: "OperationOutcome for Subscriber generated sync-error events"
Description: """
Defines the structure of an OperationOutcome to be used in sync-error events send by a Suscriber indicting refusal 
to follow context.
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* issue[fhircast].severity = #warning

Instance: FhircastHubSyncErrorOperationOutcome-Example
InstanceOf: FhircastHubSyncErrorOperationOutcome
Usage: #example
Description: "Example OperationOutcome as present in sync-error events"
* issue[fhircast]
  * severity = #warning
  * code = #processing
  * diagnostics = "Subscriber Acme Product could not be reached."
  * details
    * coding[+]
      * system = "https://fhircast.hl7.org/events/syncerror/eventid"
      * code = #fdb2f928-5546-4f52-87a0-0648e9ded065
    * coding[+] 
      * system = "https://fhircast.hl7.org/events/syncerror/eventname"
      * code = #Patient-open
    * coding[+]
      * system = "https://fhircast.hl7.org/events/syncerror/subscribername"
      * code = #"Acme Product"
    * coding[+] = http://example.com/events/syncerror/your-error-code-system#"FHIRcast sync error"


Instance: FhircastSubscriberSyncErrorOperationOutcome-Example
InstanceOf: FhircastSubscriberSyncErrorOperationOutcome
Usage: #example
Description: "Example OperationOutcome as present in sync-error events"
* issue[fhircast]
  * severity = #warning
  * code = #processing
  * diagnostics = "Acme Product refused to follow context"
  * details
    * coding[+]
      * system = "https://fhircast.hl7.org/events/syncerror/eventid"
      * code = #fdb2f928-5546-4f52-87a0-0648e9ded065
    * coding[+] 
      * system = "https://fhircast.hl7.org/events/syncerror/eventname"
      * code = #Patient-open
    * coding[+]
      * system = "https://fhircast.hl7.org/events/syncerror/subscribername"
      * code = #"Acme Product"
    * coding[+] = http://example.com/events/syncerror/your-error-code-system#"FHIRcast sync error"



---

// File: input/fsh/FHIRcastUserHibernateContext.fsh

Profile: FHIRcastHibernateContext
Parent: Parameters
Id: fhircast-hibernate
Title: "FHIRcast context for userHibernate events."
Description: "Contains the rationale behind the userHibernate event"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* ^experimental = false
* parameter 1..* MS
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.ordered = false   // can be omitted, since false is the default
* parameter ^slicing.description = "Reason for hibernation."
* parameter contains code 1..1 and hub 0..1
* parameter[code]
  * name = "code"
  * ^short = "Coded reason."
  * ^definition = "The reason the Subscriber sends a userHibernate event."
  * value[x] 1..1
  * value[x] only Coding
  * valueCoding from FHIRcastHibernateReason (extensible)
  * value[x] ^short = "Coded reason."
  * resource 0..0
  * part 0..0
* parameter[hub] 
  * ^short = "Whether the system hosting the Hub will hibernate."
  * ^definition = "If `true`, the hub will hibernate and FHIRcast synchronization is suspended."
  * name = "hub"
  * value[x] 1..1
  * value[x] only boolean
    * ^short = "`true` when system hosting hub will hibernate."
  * resource 0..0
  * part 0..0

ValueSet: FHIRcastHibernateReason
Title: "Reasons for sending a userHibernate event."
Description: "This valueset lists possible reasons a hibernate event is send to other Subscribers."
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* ^experimental = false
* FHIRcastCodeSystem#user-initiated "User initiated hibernate."
* FHIRcastCodeSystem#system-timeout "System initiated logout due to a timeout."
* FHIRcastCodeSystem#system-initiated "System initiated logout for reason other than timeout."

Instance: FHIRcastHibernateContext-Example
InstanceOf: FHIRcastHibernateContext
Description: "Example of FHIRcast hibernate event context."
Usage: #example
* parameter[code]
  * name = "code"
  * valueCoding = FHIRcastCodeSystem#user-initiated


---

// File: input/fsh/FHIRcastUserLogoutContext.fsh

Profile: FHIRcastLogoutContext
Parent: Parameters
Id: fhircast-logout
Title: "FHIRcast context for logout events."
Description: "Contains the rationale behind the userLogout event"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* ^experimental = false
* parameter 1..* MS
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.ordered = false   // can be omitted, since false is the default
* parameter ^slicing.description = "Reason for logout."
* parameter contains code 1..1
* parameter[code].name = "code"
* parameter[code] ^short = "Coded reason."
* parameter[code] ^definition = "The reason the Subscriber logout as code."
* parameter[code].value[x] 1..1
* parameter[code].value[x] only Coding
* parameter[code].valueCoding from FHIRcastLogoutReason (extensible)
* parameter[code].value[x] ^short = "Coded reason."
* parameter[code].resource 0..0
* parameter[code].part 0..0

ValueSet: FHIRcastLogoutReason
Title: "Reasons for sending a logout event."
Description: "This valueset lists possible reasons a user logs out and send a logout event to other Subscribers."
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* ^experimental = false
* FHIRcastCodeSystem#user-initiated "User initiated logout."
* FHIRcastCodeSystem#system-timeout "System initiated logout due to a timeout."
* FHIRcastCodeSystem#system-initiated "System initiated logout for reason other than timeout."

Instance: FHIRcastLogoutContext-Example
InstanceOf: FHIRcastLogoutContext
Description: "Example FHIRcast logout event context."
Usage: #example
* parameter[code]
  * name = "code"
  * valueCoding = FHIRcastCodeSystem#user-initiated


---

// File: input/fsh/GetCurrentContextBundle.fsh

Profile: FHIRcastGetCurrentContentBundle
Parent: Bundle
Id: fhircast-get-current-content-bundle
Title: "FHIRcast Get Current Content Bundle"
Description: """
    Defines the structure of a Bundle that carries current content state
    resulting from various FHIRcast `-update` messages. 
"""
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension[0].valueCode = #inm
* type MS
* type = #collection
* link 0..0
* entry MS
* entry 0..*
  * link 0..0
  * fullUrl MS
  * fullUrl 0..1
  * resource MS
  * resource 0..1
  * search 0..0
  * request 0..0
  * response 0..0

Instance: FHIRcastGetCurrentContentBundleExampleObservation
InstanceOf: Observation
Usage: #inline
* id = "435098234"
* partOf = Reference( ImagingStudyExample )
* status = #preliminary
* subject = Reference( PatientExample )
* performer = Reference( PractitionerExample )
* effectiveDateTime = "2020-09-07T15:02:03.651Z"
* category = http://terminology.hl7.org/CodeSystem/observation-category#imaging "Imaging"
* code = http://radlex.org#RID49690 "simple cyst"
* issued = "2020-09-07T15:02:03.651Z"

Instance: FHIRcastGetCurrentContentBundle-Example
InstanceOf: FHIRcastGetCurrentContentBundle
Usage: #example
Description: "Example response to the get current context."
* id = "8i7tbu6fby5fuuey7133eh"
* type = #collection
* entry[+]
  * fullUrl = "urn:Observation/435098234"
  * resource =  FHIRcastGetCurrentContentBundleExampleObservation
  

---

// File: input/fsh/ReferredToResources.fsh

Instance: OrganizationExample
InstanceOf: Organization
Usage: #example
Description: "Placeholder resource representing an Organization."
* id = "a92ac1be-fb34-49c1-be58-10928bd271cc"
* name = "Example Organization"

Instance: PractitionerExample
InstanceOf: Practitioner
Usage: #example
Description: "Placeholder resource representing a Practitioner"
* id = "d2bb499c-3021-4c20-a97b-e62469e9e5f5"

Instance: PatientExample
InstanceOf: Patient
Usage: #example
Description: "Placeholder resource representing a Patient"
* id = "19762ea6-4920-47a2-bf52-4027cb7adf92"

Instance: ImagingStudyExample
InstanceOf: ImagingStudy
Usage: #example
Description: "Placeholder resource representing an ImagingStudy"
* id = "8i7tbu6fby5ftfbku6fniuf"
* status = #available 
* subject = Reference( PatientExample )

---

// File: input/images-source/ContentExchangeAdvancedQuantification.plantuml

@startuml
skinparam shadowing false
skinparam lifelineStrategy nosolid
hide footbox

actor Clinician
participant "EHR App\n(Subscriber)" as EHR
participant "Reporting\nApplication\n(Subscriber)" as RepApp
participant Hub
participant "Image Reading\nApplication\n(Subscriber)" as App1
participant "Advanced\nQuantification\nApplication\n(Subscriber)" as App2

Clinician -> App1: 1: Open Advanced Quantification Application
activate App1
group Add New Subscriber to Existing Content Sharing Session
|||
App1 -> App2++: 2: Open with FHIRcast Topic
deactivate App1
App2 -> Hub: 3: Subscribe to Topic
activate Hub
|||
App2 -> Hub: 4: Get Current Context (includes existing content if any)
deactivate Hub
App2 -> App2++--: 5: Adjust to Context\n and Store versionId
end
deactivate App2
...
Clinician -> App2: 6: Generate Finding
activate App2
group New Subscriber Adds Finding
App2 -\ Hub++: 7: DiagnosticReport-update
note right Hub: with versionId
Hub -> Hub++--: 8: Update Content and Generate New versionId
Hub -\ EHR: 9a DiagnosticReport-update
note right EHR: with versionId and priorVersionId
activate EHR
EHR -> EHR++--: 10: Ignore
Hub -\ App1: 9b DiagnosticReport-update
deactivate EHR
activate App1
note left App1: with versionId and priorVersionId
App1 -> App1++--: 11: Update Content\n and Store versionId
Hub -\ RepApp: 9c DiagnosticReport-update
deactivate App1
activate RepApp
note right RepApp: with versionId\nand priorVersionId
RepApp -> RepApp++--: 11: Update Content\n and Store versionId
Hub -\ App2: 9d DiagnosticReport-update
deactivate RepApp
deactivate Hub
note left App2: with versionId and priorVersionId
App2 -> App2++--: 13 Store versionId
end

@enduml

---

// File: input/images-source/ContentExchangeBasic.plantuml

@startuml
skinparam shadowing false
skinparam lifelineStrategy nosolid
hide footbox

actor Clinician
participant "App1\n(Subscriber)" as App1
participant Hub
participant "App2\n(Subscriber)" as App2

Clinician -> App1: Open Report
group FHIRcast: Open Report
activate App1
App1 -> Hub: DiagnosticReport-open
activate Hub
Hub -> Hub++--: Store Context and Generate versionId
App1 <-- Hub: 202 Accepted
|||
deactivate App1
Hub -\ App1: DiagnosticReport-open
note right App1: with versionId
Hub -\ App2: DiagnosticReport-open
note left App2: with versionId
deactivate Hub
end
...
Clinician -> App2: Make Observation
group FHIRcast: Make Observation
activate App2
App2 -> Hub: DiagnosticReport-update
activate Hub
note right Hub: with versionId and Observation
Hub -> Hub++--: Update Content and Generate New versionId
App2 <-- Hub: 202 Accepted
deactivate App2
|||
Hub -\ App1: DiagnosticReport-update
note right App1: with Observation, versionId,\nand priorVersionId
Hub -\ App2: DiagnosticReport-update
note left App2: with Observation, versionId,\nand priorVersionId
deactivate Hub
end
...
Clinician -> App2: Close report
group FHIRcast: Close Report
activate App2
App2 -> Hub: DiagnosticReport-close
activate Hub
App2 <-- Hub: 202 Accepted
deactivate App2
|||
Hub -\ App1: DiagnosticReport-close
Hub -\ App2: DiagnosticReport-close
App2 -> App2: Persist content
Hub -> Hub++--: Purge Context including Content
end
deactivate Hub

@enduml

---

// File: input/images-source/ContentExchangeClosure.plantuml

@startuml
skinparam shadowing false
skinparam lifelineStrategy nosolid
hide footbox
autonumber

actor Clinician
participant "EHR App\n(Subscriber)" as EHR
participant "Reporting\nApplication\n(Subscriber)" as RepApp
participant Hub
participant "Image Reading\nApplication\n(Subscriber)" as App1
participant "Advanced\nQuantification\nApplication\n(Subscriber)" as App2

group Close report
  Clinician -> RepApp: Close report 
  RepApp -> Hub: DiagnosticReport-close  
  activate Hub
  Hub -\ RepApp: DiagnosticReport-close
  activate RepApp
  Hub -\ App1: DiagnosticReport-close
  activate App1
  App1 -> App1: close imaging study 
  activate App1
  deactivate App1
  deactivate App1
  Hub -\ App2: DiagnosticReport-close
  activate App2
  App2 -> App2: close imaging study 
  activate App2
  deactivate App2
  deactivate App2
  
  RepApp -> RepApp: persist content
  activate RepApp
  deactivate RepApp
  deactivate RepApp
  Hub -> Hub: Purge Context including content
  activate Hub
  deactivate Hub
  deactivate Hub
end

@enduml

---

// File: input/images-source/ContentExchangeFHIR.plantuml

@startuml

component "FHIRcast\nHub" as Hub
component "FHIR\nserver" as FHIRserver
component Subscriber as Subscriber1
component Subscriber as Subscriber2
component Subscriber as Subscriber3

Subscriber1 -down-> Hub: fhircast
Subscriber1 -down-> FHIRserver: FHIR
Subscriber2 -down-> Hub: fhircast
Subscriber2 -down-> FHIRserver: FHIR
Subscriber3 -down-> Hub: fhircast
Subscriber3 -down-> FHIRserver: FHIR

@enduml

---

// File: input/images-source/ContentExchangeHybrid.plantuml

@startuml

node Hybrid {
    component "FHIRcast\nHub" as Hub
    component "FHIR\nserver" as FHIRserver
}
component Subscriber as Subscriber1
component Subscriber as Subscriber2
component Subscriber as Subscriber3

Subscriber1 -down-> Hub: fhircast
Subscriber1 -down-> FHIRserver: FHIR
Subscriber2 -down-> Hub: fhircast
Subscriber2 -down-> FHIRserver: FHIR
Subscriber3 -down-> Hub: fhircast
Subscriber3 -down-> FHIRserver: FHIR

@enduml

---

// File: input/images-source/ContentExchangeOpenReport.plantuml

@startuml
skinparam shadowing false
skinparam lifelineStrategy nosolid
hide footbox

actor Clinician
participant "EHR App\n(Subscriber)" as EHR
participant "Reporting\nApplication\n(Subscriber)" as RepApp
participant Hub
participant "Image Reading\nApplication\n(Subscriber)" as App1

Clinician -> EHR: 1: Open a Patient\nSummary
group FHIRcast: Open Patient
activate EHR
EHR -> Hub: 2: Patient-open
activate Hub
deactivate EHR
Hub -> Hub++--: 3: Store Context and Generate\nversionId
Hub -\ RepApp: 4a: Patient-open
note right RepApp: with versionId
activate RepApp
RepApp -> RepApp++--: 5: React and store\nversionId
activate App1
Hub -\ App1: 4b: Patient-open
note left App1: with versionId
deactivate RepApp
App1 -> App1++--: 6: ignore
activate EHR
Hub -\ EHR: 4c: Patient-open
note right EHR: with versionId
deactivate Hub
deactivate App1
EHR -> EHR++--: 7: Store versionId
end
deactivate EHR
...

Clinician -> RepApp: 8: create report
group FHIRcast: Open Report
activate RepApp
RepApp-> Hub: 9: DiagnosticReport-open
activate Hub
deactivate RepApp
Hub -> Hub++--: 10: Store Context and generate\nversionId
Hub -\ RepApp: 11a: DiagnosticReport-open
note right RepApp: with versionId
activate RepApp
RepApp -> RepApp++--: 12: store versionID
Hub -\ App1: 11b: DiagnosticReport-open
note left App1: with versionId
deactivate RepApp
activate App1
App1 -> App1++--: 13: react and\nstore versionID
Hub -\ EHR: 11c: DiagnosticReport-open
note right EHR: with versionId
deactivate App1
activate EHR
deactivate Hub
EHR -> EHR++--: 14: ignore
end
deactivate EHR

@enduml

---

// File: input/images-source/ContentExchangeShareContent.plantuml

@startuml
skinparam shadowing false
skinparam lifelineStrategy nosolid
hide footbox

actor Clinician
participant "EHR App\n(Subscriber)" as EHR
participant "Reporting\nApplication\n(Subscriber)" as RepApp
participant Hub
participant "Image Reading\nApplication\n(Subscriber)" as App1

Clinician -> App1: 1: make measurement
App1 -> Hub++: 2: DiagnosticReport-update
note right Hub: with versionId

group FHIRcast: Add Measurement
|||
group Validate Update Request
else versionId incorrect
Hub --> App1:2: Reject DiagnosticReport-update
else VersionId correct
Hub -> Hub++--: 3: Update Content \nand Generate New versionId
Hub -\ EHR: 4a: DiagnosticReport-update
activate EHR
note right EHR: with versionId and priorVersionId
EHR -> EHR++--: 5: Ignore
Hub -\ App1: 4b: DiagnosticReport-update
deactivate EHR
note left App1: with versionId and priorVersionId
activate App1
App1 -> App1++--: 6: Store versionId
Hub -\ RepApp: 4c:DiagnosticReport-update
deactivate App1
note right RepApp: with versionId and priorVersionId
activate RepApp
group Validate Current Version
else priorVersion Correct
RepApp -> RepApp++--: 7: Update Content and\nStore versionId
else priorVersion Incorrect
RepApp -> Hub: 8a: Get Current Context
deactivate Hub
RepApp -> RepApp++--: 8b: Update Content and\nStore versionId
end
deactivate RepApp
|||
end
end
|||
Clinician -> RepApp: 9: Select a Measurement
group FHIRcast: Select Measurement
RepApp -> Hub: 10: DiagnosticReport-select
activate Hub
Hub -\ EHR: 11a: DiagnosticReport-select
activate EHR
EHR -> EHR++--: 12: Ignore
Hub -\ App1: 11b: DiagnosticReport-select
deactivate EHR
activate App1
App1 -> App1++--: Adjust UI
Hub -\ RepApp: 11c: DiagnosticReport-select
deactivate App1
activate RepApp
deactivate Hub
end
deactivate RepApp
@enduml


---

// File: input/images-source/DeniedSubscriptionSequence.plantuml

@startuml

skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 40
skinparam LifelineStrategy solid

title WebSocket subscription denial flow diagram

participant "App\n(Subscriber)" as Subscriber
participant "FHIRcast\nHub" as Hub

autonumber

group Denial Workflows
else Reject Subscribe Request
  Subscriber -> Hub++: POST Subscribe
  Subscriber <-- Hub--: 4xx (Client error)
  |||

else Reject Before Confirmation
  Subscriber -> Hub++: POST Subscribe
  Subscriber <-- Hub: 202 Accepted [<wss URL>]
  Subscriber -> Hub: connect to <wss URL>>
  Subscriber <-- Hub--: WSS: denial
  |||

else Reject After Confirmation
  Subscriber -> Hub++: POST Subscribe
  Subscriber <-- Hub: 202 Accepted [<wss URL>]
  Subscriber -> Hub: connect to <wss URL>>
  Subscriber <-- Hub: WSS: confirmation
  ...
  Subscriber <-- Hub--: WSS: denial
  |||
end

' note right of Subscriber
'     App Subscribes to Hub. Hub 
'     denies Subscription. This denial
'     may occur at any time once
'     the App has established wss
'     connection, even after initial 
'     confirmation.
' end note

@enduml


---

// File: input/images-source/EventNotificationErrorSequence.plantuml

@startuml
title Event notification error flow diagram

participant "Driving App\n" as Controller
participant "FHIRcast\nHub" as Hub
participant "App1\n(Subscriber)" as Subscriber1
participant "App2\n(Subscriber)" as Subscriber2

Controller -> Hub: request context change

note over Controller
    Hub is notified of 
    a context change.
end note

Hub -> Controller++: Event Notification
note over Controller: context change is confirmed
Hub <-- Controller--: { "id": "q9v3jubddqt63n1", "status": "200"}

Hub -> Subscriber1++: Event Notification
note over Subscriber1
     Application is unable to 
     follow context and 
     responds with a 409 'conflict'
end note
Hub <-- Subscriber1--: { "id": "q9v3jubddqt63n1", "status": "409"}

Hub -> Subscriber2++: Event Notification
note over Subscriber2: context is changed
Hub <-- Subscriber2--: { "id": "q9v3jubddqt63n1", "status": "200"}

note over Hub
    Subscribing applications are made aware 
    that one of the subscribed applicationsis out
    of sync. Clien can choose to rollback, notify 
    user or with an implementation specific response.
end note

Hub -> Subscriber1: Event notification [SyncError]
Hub -> Controller: Event notification [SyncError]
Hub -> Subscriber2: Event notification [SyncError]
@enduml


---

// File: input/images-source/EventNotificationSequence.plantuml

@startuml
title Event notification flow diagram

participant "Driving App\n" as Controller

participant "FHIRcast\nHub" as Hub
participant "App1\n(Subscriber)" as Subscriber1
participant "App2\n(Subscriber)" as Subscriber2

Controller -> Hub: request context change

note over Controller
    Hub is notified of 
    a context change.
end note

Hub -> Controller++: Event Notification
note over Controller: context change is confirmed
Hub <-- Controller--: { "id": "q9v3jubddqt63n1", "status": "200"}

Hub -> Subscriber1++: Event Notification
note over Subscriber1: context is changed
Hub <-- Subscriber1--: { "id": "q9v3jubddqt63n1", "status": "200"}

Hub -> Subscriber2++: Event Notification
note over Subscriber2: context is changed
Hub <-- Subscriber2--: { "id": "q9v3jubddqt63n1", "status": "200"}

@enduml


---

// File: input/images-source/FHIRcastOverviewForAbstract.plantuml

@startuml

title FHIRcast interactions

participant "Driving\nApplication 1" as DrivingApp1
participant "App\n(Subscriber)" as Subscriber
participant "FHIRcast\nHub" as Hub
participant "Driving\nApplication 2" as DrivingApp2

DrivingApp1 -> Subscriber: App launch
Subscriber -> Hub: Subscribe
DrivingApp2 -> Hub: request change context
Hub --> Subscriber: context notification
Hub --> DrivingApp1: context notification
Hub --> DrivingApp2: context notification
Subscriber -> Hub: Unsubscribe
@enduml

---

// File: input/images-source/SuccessfulWebSocketSubscriptionSequence.plantuml

@startuml

title Successful WebSocket subscription flow diagram

participant "App\n(Subscriber)" as Subscriber
participant "FHIRcast\nHub" as Hub

' group Successful Workflow
' else Reject Subscribe Request
' end

autonumber

Subscriber -> Hub++: POST Suscribe
Subscriber <-- Hub: 202 Accepted [<wss URL>]
Subscriber -> Hub: connect to <wss URL>>
Subscriber <-- Hub: WSS: confirmation

group Optional (Recommended)
else Hub sends existing open context events
Subscriber <- Hub: <resource>-open
...
end

Subscriber <-> Hub: Events...
...

' note right of Hub
'     App Subscribes to Hub. 
'     Hub creates a WebSocket
'     and sends confirmation to 
'     subscription once app connects.
' end note

' Hub --> Subscriber--: WSS: denial

@enduml


---

// File: input/images-source/UnsubscriptionSequence.plantuml

@startuml

title Unsubscription flow diagram

participant "App\n(Subscriber)" as Subscriber
participant "FHIRcast\nHub" as Hub

autonumber

Subscriber <-> Hub++: Successful Subscription
Subscriber <--> Hub: Events...
...

Subscriber -> Hub: POST Unsubscribe
Subscriber <-- Hub: 202 Accepted [<wss URL>]

' note right of Hub
'     App unsubscribes to Hub. Hub 
'     removes app from subscribed apps 
'     and closes the WebSocket (if any).
' end note


Subscriber <- Hub--: WSS: denial

@enduml


---

