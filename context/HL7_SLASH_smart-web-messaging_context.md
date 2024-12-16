File: repos/HL7_SLASH_smart-web-messaging/input/fsh/LaunchStatusCode.fsh

CodeSystem:     LaunchStatusCode
Id:             launch-status-code-system
Title:          "LaunchStatusCode"
Description:    "An enumerated set of launch result states."
* ^caseSensitive = true
* #success "Successful"
    "A requested activity launch was successful."
* #error "Failure"
    "A requested activity launch failed."


---

File: repos/HL7_SLASH_smart-web-messaging/input/pagecontent/activity-catalog.md

{::comment}

  LINKS, which allow the markdown to simplify links to [link name]

{:/comment}
[CDS Hooks `appointment-book`]: https://cds-hooks.org/hooks/appointment-book/
[CDS Hooks `order-sign`]: https://cds-hooks.org/hooks/order-sign/
[FHIR Appointment]: https://www.hl7.org/fhir/appointment.html
[FHIR Bundle]: https://www.hl7.org/fhir/bundle.html
[FHIR Condition]: https://www.hl7.org/fhir/condition.html

These activities serve as navigation targets for `ui.launchActivity` messages.
They are designed to describe navigation points within an EHR environment. We
focus on defining common activities that are likely to exist across multiple EHR
systems, rather than creating a fine-grained EHR-specific workflow model. It's
important to note that this is an extensible set; while we define a set of
standardized activities using "bare" keywords like `order-sign`, any EHR may
support custom activities using fully-qualified URIs like
`https://my-ehr/custom-activity-name`.

Standardized activities follow the same naming convention as CDS Hooks, with
`noun-verb` form. In addition to following the same naming convention, we'll
align with the actual names of existing CDS Hooks activities where feasible.

### Conformance Language
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this specification are to
be interpreted as described in RFC2119.


### `appointment-book`
See [CDS Hooks `appointment-book`]


#### Parameters

| Name                   | Optionality | Description |
| ---------------------- | ----------- | ----------- |
| `appointmentLocations` | REQUIRED    | [FHIR Bundle] of [FHIR Appointment] resource locations in draft status, and any other supporting data. |
{:.grid}

### `order-review`
See [CDS Hooks `order-sign`] for a similar operation.


#### Parameters

| Name                  | Optionality | Description |
| --------------------- | ----------- | ----------- |
| `draftOrderLocations` | REQUIRED    | array of draft order locations (references to) already existing in the scratchpad. See the `scratchpad.*` operations. |
{:.grid}

### `problem-review`
Allow the EHR user to add a new problem to the patient's problem list.


#### Parameters

| Name              | Optionality | Description |
| ----------------- | ----------- | ----------- |
| `problemLocation` | REQUIRED    | Reference to a pre-existing [FHIR Condition] resource which is used by the EHR to pre-populate the data entry screen presented to the user. |
{:.grid}


---

File: repos/HL7_SLASH_smart-web-messaging/input/pagecontent/alternatives-considered.md


In deciding on `postMessage`, we considered several alternative techniques:

### `window.postMessage` (**selected option**)
Details: Message channel abstraction built on `postMessage`; see proposal above.

* **Pros**
  * good for queries with async responses
  * works for bidirectional messaging

* **Cons**
  * web apps only (not native mobile)
  * IE<=10 [may be broken](https://stackoverflow.com/questions/16226924/is-cross-origin-postmessage-broken-in-ie10) with apps in new tabs -- but iframed apps probably work fine


### Redirect to an "I'm done" URL
Details: This is how the pre-1.0 CDS Hooks specification worked, and how the original sandbox worked

* **Pros**
  * simple browser construct
  * might work for native mobile apps too

* **Cons**
  * hard to pass detailed payloads
  * hard to authenticate payloads.
  * enforces the user seeing a blank page
  * doesn't allow a response payload
  * doesn't allow EHR to send messages to the app (one-way channel only)


### Pass along JS or decorate web browser control with a method
Details: For example, the access token response could include a values like
`"js_to_load": "https://otherdomain.example.org/ehr/actionPerformer.js"`, and the app would create a  `<script
src="https://otherdomain.example.org/ehr/actionPerformer.js"/>` tag to load the relevant code. Then the app would have access to `smartMessaging.send()`, with a list of functions and contracts...

* **Pros**
  * gives EHRs flexibility for diverse architectures
  * works with web and mobile apps

* **Cons**
  * opens up a large attack surface.
  * Nobody wants to get security review for this.


### EHR hosts a HTTP API endpoint
Details: This is effectively a standalone REST API endpoint for managing messages

* **Pros**
  * lots of experience, well understood security properties.
  * works with web and native apps

* **Cons**
  * EHR needs to route messages from its server back to the frontend
  * EHR UI needs to understand inbound messages
  * EHR can't easily send messages back to the app; it's a one-way channel unless you add in (long) polling


### EHR hosts a Web Socket endpoint
Details: This is similar to the standalone REST API endpoint option

* **Pros**
  * works with web and native apps

* **Cons**
  * EHR needs to route messages from its server back to the frontend
  * EHR UI needs to understand inbound messages
  * Inconsistent/spotty browser support (?)


### SignalR, `socket.io`
Details: Rely on a full-fledged library that supports multiple modalities of exchange with fallbacks

* **Pros**
  * enables bidirectional communication

* **Cons**
  * not a standard; this pushes implementation details that we can't control


### FHIRCast
Details: Same tech as HTTP API (+experimental Websockets)

* **Pros**
  * handles context synchronization

* **Cons**
  * EHR needs to route messages from its server back to the frontend
  * EHR UI needs to understand inbound messages
  * Unsuitable for static apps (app needs a REST API endpoint for async responses or incoming messages)


---

File: repos/HL7_SLASH_smart-web-messaging/input/pagecontent/index.md

{::comment}

  COMMON TERMS, which will reveal a hover-text definition in the IG when viewed.
  
  NOTE: When adding an abbreviation to this list, also add the same abbreviation
  to the List of Abbreviations section near the end of this IG.

{:/comment}
*[API]: Application Programming Interface
*[CDS]: Clinical Decision Support
*[CPOE]: Computerized Physician Order Entry
*[CRUD]: Create Read Update Delete
*[EHR]: Electronic Health Record
*[EHRs]: Electronic Health Record
*[OAuth]: An open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.
*[UX]: User Experience

{::comment}

  LINKS, which enable the markdown to simply reference [link name] for short.

{:/comment}
[Activity Catalog]: ./activity-catalog.html
[Alternatives Considered]: ./alternatives-considered.html
[`Bundle.entry.response`]: https://hl7.org/fhir/bundle-definitions.html#Bundle.entry.response.location
[CDS Hooks]: https://cds-hooks.hl7.org/1.0
[CDS Hooks Action]: https://cds-hooks.hl7.org/1.0/#action
[FHIR]: https://hl7.org/fhir/
[FHIR Coding]: https://www.hl7.org/fhir/datatypes.html#Coding
[FHIR CodeableConcept]: https://hl7.org/fhir/datatypes.html#CodeableConcept
[FHIR OperationOutcome]: https://www.hl7.org/fhir/operationoutcome.html
[FHIRCast]: https://fhircast.org
[HTML5]: https://html.spec.whatwg.org/multipage
[HTML5's Web Messaging]: https://html.spec.whatwg.org/multipage/web-messaging.html
[JSON (RFC7159)]: https://tools.ietf.org/html/rfc7159
[`MessageEvent`]: https://html.spec.whatwg.org/multipage/comms.html#messageevent
[OAuth]: https://oauth.net/
[OAuth 2.0]: https://oauth.net/2/
[OAuth scopes]: https://oauth.net/2/scope/
[RESTful FHIR API]: https://hl7.org/fhir/http.html
[RFC2119]: https://tools.ietf.org/html/rfc2119
[SMART App Launch]: https://hl7.org/fhir/smart-app-launch
[SMART applications]: https://hl7.org/fhir/smart-app-launch/index.html
[`window.postMessage`]: https://html.spec.whatwg.org/multipage/web-messaging.html#posting-messages

SMART Web Messaging enables tight UI integration between EHRs and embedded SMART apps via [HTML5's Web Messaging].  SMART Web Messaging allows applications to push unsigned orders, note snippets, risk scores, or UI suggestions directly to the clinician's EHR session.  Built on the browser's javascript [`window.postMessage`] function, SMART Web Messaging is a simple, native API for health apps embedded within the user's workflow.

### Why
Clinical workflow systems (such as EHRs) may be able to launch [SMART applications] in a few different ways: automatically at specific points in the workflow, by user interaction in the UI, or in response to a suggestion from a [CDS Hooks Service](https://cds-hooks.hl7.org/1.0/#cds-hooks-anatomy) (or *other* decision support service).  Once launched, web applications are often embedded within an iframe of the main UI.  In this model, the new application appears in close proximity to a patient's chart and can work with the EHR via [RESTful FHIR API].  These RESTful APIs are great for [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on a logical FHIR Server endpoint, but they don't enable tight workflow integration or access to draft FHIR resources that may only exist in memory on the EHR client.

For these embedded apps, there are some key use cases that SMART and CDS Hooks don't address today:

* Communicating a decision made by the clinician within the SMART app, such as:
  * placing an order
  * annotating a procedure with an appropriateness score or a radiation count
  * transmitting a textual note snippet
  * suggesting a diagnosis or a condition to the patient's chart
* Interrogating the orders scratchpad / shopping cart, currently only known within the ordering provider's [CPOE](https://en.wikipedia.org/wiki/Computerized_physician_order_entry) session.
* Allowing an app to communicate [UX](https://en.wikipedia.org/wiki/User_experience)-relevant results back to the EHR, for example, automatic navigation to a native EHR activity, or sending an "I'm done" signal.

Additionally, SMART Web Messaging enables other interesting capabilities.  For example:
* Saving app-specific session or state identifiers to the EHR for later retrieval (continuing sessions).
* Interacting with the EHR's FHIR server through this messaging channel (enabling applications that cannot access the FHIR server directly, e.g. those hosted on the internet).

### How
SMART Web Messaging builds on [HTML5's Web Messaging] specification, which allows web pages to communicate across domains. In JavaScript, calls to
[`window.postMessage`] can pass data between windows by dispatching [`MessageEvent`] objects.

The following sequence diagram outlines several of the key events that take place leading up to a successful app invocation of an EHR launched activity via SMART Web Messaging messages.  For simplicity, the full details of the SMART App Launch sequence are abbreviated and the only details shown are the fields needed for conformant SMART Web Messaging.

<div>
  {%include post-message.svg%}
</div>

Refer to the [SMART Web Messaging](./smart-web-messaging.html) technical documentation page for details on the specification.

### Underlying Standards

* [CDS Hooks]
* [FHIR] 
* [HTML5]
* [JSON (RFC7159)]
* [SMART App Launch]

SMART Web Messaging is designed for compatibility with FHIR R4 and above.


---

File: repos/HL7_SLASH_smart-web-messaging/input/pagecontent/smart-web-messaging.md

Considerations{::comment}

  COMMON TERMS, which will reveal a hover-text definition in the IG when viewed.

  NOTE: When adding an abbreviation to this list, also add the same abbreviation
  to the List of Abbreviations section near the end of this IG.

{:/comment}
*[API]: Application Programming Interface
*[CDS]: Clinical Decision Support
*[CPOE]: Computerized Physician Order Entry
*[CRUD]: Create Read Update Delete
*[EHR]: Electronic Health Record
*[EHRs]: Electronic Health Record
*[OAuth]: An open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.
*[UX]: User Experience

{::comment}

  LINKS, which enable the markdown to simply reference [link name] for short.

{:/comment}
[Activity Catalog]: ./activity-catalog.html
[Alternatives Considered]: ./alternatives-considered.html
[`Bundle.entry.response`]: https://hl7.org/fhir/bundle-definitions.html#Bundle.entry.response.location
[CDS Hooks]: https://cds-hooks.hl7.org/1.0
[CDS Hooks Action]: https://cds-hooks.hl7.org/1.0/#action
[FHIR]: https://hl7.org/fhir/
[FHIR Coding]: https://www.hl7.org/fhir/datatypes.html#Coding
[FHIR CodeableConcept]: https://hl7.org/fhir/datatypes.html#CodeableConcept
[FHIR OperationOutcome]: https://www.hl7.org/fhir/operationoutcome.html
[FHIR batch/transaction interaction]:  https://www.hl7.org/fhir/http.html#transaction
[FHIRCast]: https://fhircast.org
[HTML5]: https://html.spec.whatwg.org/multipage
[HTML5's Web Messaging]: https://html.spec.whatwg.org/multipage/web-messaging.html
[Introduction]: ./index.html
[JSON (RFC7159)]: https://tools.ietf.org/html/rfc7159
[`MessageEvent`]: https://html.spec.whatwg.org/multipage/comms.html#messageevent
[OAuth]: https://oauth.net/
[OAuth 2.0]: https://oauth.net/2/
[OAuth scopes]: https://oauth.net/2/scope/
[RESTful FHIR API]: https://hl7.org/fhir/http.html
[RFC2119]: https://tools.ietf.org/html/rfc2119
[SMART applications]: https://hl7.org/fhir/smart-app-launch/index.html
[`window.postMessage`]: https://html.spec.whatwg.org/multipage/web-messaging.html#posting-messages

SMART Web Messaging enables tight UI integration between EHRs and embedded SMART apps via [HTML5's Web Messaging].  SMART Web Messaging allows applications to push unsigned orders, note snippets, risk scores, or UI suggestions directly to the clinician's EHR session.  Built on the browser's javascript [`window.postMessage`] function, SMART Web Messaging is a simple, native API for health apps embedded within the user's workflow.

Refer to the [Introduction] page for an overview, if needed.

### Conformance Language
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this specification are to be interpreted as described in [RFC2119].

### SMART Web Messaging
SMART Web Messaging builds on [HTML5's Web Messaging] specification, which
allows web pages to communicate across domains.  In JavaScript, calls to
[`window.postMessage`] can pass data between windows by dispatching
[`MessageEvent`] objects.

A [`window.postMessage`]-based messaging approach allows flexible,
standards-based integration that works across windows, frames and domains, and
should be readily supportable in browser controls for any EHR capable of
embedding a web application.

Request messages can originate from an app or from the EHR unless
otherwise specified. Each request message can lead to any number of response
messages, unless otherwise specified. All response messages include a
`responseToMessageId` field, which correlates to the `messageId` field sent in a
request message.  See the following sections for more details.


#### Request Parameters
For the purposes of SMART Web Messaging, a [`window.postMessage`] call from a
caller SHALL contain a JSON message object with the following properties:

| Property          | Optionality  | Type   | Description |
| ----------------- | ------------ | ------ | ----------- |
| `messagingHandle` | REQUIRED     | string | The content of the `smart_web_messaging_handle` property of the [OAuth] access token response JSON payload.  ([Details below.](#authorization-with-smart-scopes)). |
| `messageId`       | REQUIRED     | string | A unique ID for this message generated by the application. |
| `messageType`     | REQUIRED     | string | The type of this message (e.g., `ui.done`, `scratchpad.update`, `status.handshake`, etc). |
| `payload`         | REQUIRED     | object | The message content as specified by the `messageType`.  See below. |
{:.grid}

The caller SHALL pass this message object to [`window.postMessage`] using a
valid `targetOrigin` parameter.
The `targetOrigin` of the EHR is provided to the app during the SMART launch
sequence in the launch context parameter `smart_web_messaging_origin`.  The EHR
is provided with the `targetOrigin` of the app when the app is registered with
the EHR during app configuration.
Callers SHOULD NOT use `"*"` for the `targetOrigin` parameter for [security reasons](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#Security_concerns).

#### Response Properties
The receiver SHALL send a response message with the following properties:

| Property              | Optionality  | Type   | Description |
| --------------------- | ------------ | ------ | ----------- |
| `messageId`           | REQUIRED     | string | A unique ID for this message generated by the caller. |
| `responseToMessageId` | REQUIRED     | string | The `messageId` of the received message that this message is in response to. |
| `additionalResponsesExpected` | OPTIONAL     | boolean | If `true`, indicates that the recipient can expect additional responses to arrive with the same `responseToMessageId`. If `false` or if this property is omitted, the recipient can expect that no additional responses will arrive. |
| `payload`             | REQUIRED     | object | The message content as specified by the `messageType` of the request message.  See [below](#response-payload). |
{:.grid}

#### Response Payload
The response message `payload` properties will vary based on the request `messageType`.  See message types below for details.

#### Response Target Origin
It is assumed that the EHR already knows the set of allowed web origins for each
app, to be used in Web Messaging.  After launching an app, the EHR SHOULD NOT process
Web Messages originating from an origin outside this set.  If the app navigates
users to an origin outside of this set, it SHOULD NOT depend on Web Messages
reaching the EHR.

#### Extensions

Extensions MAY appear at any point in Request Payload or Response Payload. Extensions use the same syntax and semantics as in the FHIR Core specification. That is, an `extension[]` array containing FHIR Extension elements MAY be included on any element (including extensions on primitives).


### Establish Connection Status: `status.*` Message Type

#### Handshake
The purpose of the handshake is to allow apps and EHRs to determine, just after
launch time, if web messaging is enabled in the other; and possibly to discover
what capabilities the other supports.

The app or the EHR MAY initiate a handshake message sequence, using the
value `status.handshake` as the value for the `messageType` and an empty object
for the `payload`.  The receiver of a handshake request message SHOULD respond
exactly once with an appropriate handshake response message, and MAY provide an
OPTIONAL `error` [FHIR Coding] parameter.

Extensions MAY be used for handshake requests and responses, and MAY be used to
advertise capabilities.

##### Example Handshake Sequence

An example handshake request from an app to the EHR client is presented below.

```js
// When a SMART app is launched embedded in an iframe, window.parent and window.self
// are different objects, with window.parent being the recipient that the SMART app
// needs to reach via SMART Web Messaging.
// When a SMART app is launched standalone, window.parent and window.self are the same.
// In that case, window.opener will be the recipient that the SMART app needs to address.
const ehrWindow = window.parent !== window.self ? window.parent : window.opener;

// Read the smart_web_messaging_origin property from the launch context (alongside the access_token).
// This value provides the app with the EHR client's expected target origin.
const targetOrigin = "<smart_web_messaging_origin> from SMART launch context";

// The smart_web_messaging_handle is a launch context property also alongside the access_token.
const message = {
  "messagingHandle": "<smart_web_messaging_handle> from SMART launch context",
  "messageId":       "<some new uid>",
  "messageType":     "status.handshake",
  "payload":         {}  // See below.
};

ehrWindow.postMessage(message, targetOrigin);
```

The message is received in the EHR and handled as shown below.

```js
window.addEventListener("message", function(event) {
  if (event.origin !== "<the expected app origin>") {
    return;  // Ignore unknown origins.
  }

  // Verify the provided messaging handle is valid.
  if (!messagingHandleIsValid(event.data.messagingHandle)) {
    return;  // Or handle the error some other way.
  }

  // Handle a status.handshake request.
  if (event.data.messageType === "status.handshake") {
    event.source.postMessage({
      messageId: "<some new uid>",
      responseToMessageId: event.data.messageId,
      payload: {},
    }, event.origin);
  }
//...
});
```


### Influence the EHR UI: `ui.*` Message Type
An embedded SMART app may improve the clinician's user experience by attempting
to close itself when appropriate, or by requesting the EHR automatically
navigate the user to an appropriate 'next' activity.  Messages that affect the
EHR UI will have a `messageType` that matches the pattern `ui.*`.

The `ui` category includes messages: `ui.done` and `ui.launchActivity`.

The `ui.done` message type signals the EHR to close the activity hosting the
SMART app.

The `ui.launchActivity` message type signals the EHR to navigate the user to another
activity without closing the SMART app.

Here are some helpful, guiding principles for the intended use of `launchActivity`.
  * `launchActivity` doesn't modify EHR data itself, but it *can* hint the EHR to
    navigate the user to a place in the EHR workflow where the *user* could modify
    EHR data.
  * Data can be passed from the app to the EHR as hints, within the `launchActivity`
    payload.
  * For supported resource types, it's better to pass in a scratchpad resource ID
    rather than duplicating resource content when providing a hint to `launchActivity`.

#### Request Payload for `ui.done` and `ui.launchActivity`

| Property             | Optionality | Type   | Description |
| -------------------- | ----------- | ------ | ----------- |
| `activityType`       | REQUIRED for `ui.launchActivity`, PROHIBITED for `ui.done` | string | Navigation hint; see description below. |
| `activityParameters` | REQUIRED for `ui.launchActivity`, PROHIBITED for `ui.done` | object | Navigation hint; see description below. |
{:.grid}

The `activityType` property conveys an activity type drawn from the SMART Web
Messaging [Activity Catalog]. In general, these activities follow the same
naming conventions as entries in the CDS Hooks catalog (`noun-verb`), and will
align with CDS Hooks catalog entries where feasible. The `activityType` property
conveys a navigation target such as `problem-review` or `order-review`, indicating
where EHR should go to after the ui message has been handled. An activity MAY
specify additional parameters that can be included in the call as additional
properties.

EHRs and Apps MAY implement activities *not specified* in the [Activity Catalog] and
that all activities in the catalog are OPTIONAL.

The `activityParameters` property conveys parameters specific to an activity
type. See the SMART Web Messaging [Activity Catalog] for details.

An example of a `ui.done` message from an app to the EHR is shown below:

```js
ehrWindow.postMessage({
  "messageId": "<some new uid>",
  "messagingHandle": "<smart_web_messaging_handle> from SMART launch context",
  "messageType": "ui.done",
  "payload": {}
}, targetOrigin);
```

A SMART app can use the `ui.launchActivity` message type to request
navigation to a different activity *without* closing the app:

```js
ehrWindow.postMessage({
  "messageId": "<some new uid>",
  "messagingHandle": "<smart_web_messaging_handle> from SMART launch context",
  "messageType": "ui.launchActivity",
  "payload": {
    "activityType": "problem-review",
    "activityParameters": {
      // Each ui activity defines its optional and required params.  See the
      // Activity Catalog for more details.
      "problemLocation": "Condition/123"
    }
  }
}, targetOrigin);
```

#### Response Payload for `ui.done` and `ui.launchActivity`

| Property  | Optionality | Type    | Description |
| --------- | ----------- | ------- | ----------- |
| `status`  | REQUIRED    | `code` | Either `success` or `failure`.  Details link: [`LaunchStatusCode`](CodeSystem-launch-status-code-system.html) |
| `statusDetail` | OPTIONAL | [FHIR CodeableConcept] | Populated with a description of the response status code. |
{:.grid}

The EHR SHALL respond exactly once to each `ui` request message.  The response payload includes a
`status` parameter and an optional `statusDetail` [FHIR CodeableConcept]:

```js
clientAppWindow.postMessage({
  "messageId": "<some new uid>",
  "responseToMessageId": "<uid from the client's request>",
  "payload": {
    "status": "success",
    "statusDetail": {
      "text": "string explanation for user (optional)"
    }
  }
}, clientAppOrigin);
```

### EHR Scratchpad Interactions: `scratchpad.*` Message Type
While interacting with an embedded SMART app, a clinician may make decisions
that should be implemented in the EHR with minimal clicks.  SMART Web Messaging
exposes an API to the clinician's scratchpad within the EHR, which may contain
FHIR resources unavailable on the [RESTful FHIR API].

For example, the proposed CDS Hooks decision workflow can be implemented through
SMART Web Messaging.

All messages affecting the scratchpad have a `messageType` matching the pattern
`scratchpad.*`.

SMART Web Messaging is designed to be compatible with CDS Hooks, and to
implement the CDS Hooks decisions flow.  For any [CDS Hooks Action] array, you
can create a list of SMART Web Messaging API calls:

* [CDS Hooks Action] `type` is used to populate the response `messageType`
  * `create`→ `scratchpad.create`
  * `update`→ `scratchpad.update`
  * `delete`→ `scratchpad.delete`
* [CDS Hooks Action] `resource`: used to populate the `payload.resource`

#### What is a Scratchpad?

References to a "scratchpad" refer to an EHR capability
where FHIR-structured data can be stored without the expectation of being
persisted "permanently" in a FHIR server. The scratchpad can be thought of as a
shared memory area, consisting of "temporary" FHIR resources that can be
accessed and modified by either an app or the EHR itself.  Each resource on the
scratchpad has a temporary unique id (its scratchpad "location").

A common use of the scratchpad is to hold the contents of a clinician's
"shopping cart" -- i.e., data that only exist during the clinician's session
and may not have been finalized or made available through in the EHR's FHIR
API. At the end of a user's session, selected data from the scratchpad can be
persisted to the EHR's FHIR server (e.g., a "checkout" experience, following
the shopping cart metaphor).


#### `scratchpad` Operations
Scratchpad operations are conducted through an exchange of a *request* from an
application and a *response* from an EHR.

The sections below detail the request and response payload requirements.  For
each of the response section below, the provided table includes only
the most commonly used response payload fields; for full details, see the
[FHIR specification](https://hl7.org/fhir/bundle-definitions.html#Bundle.entry.response).

The EHR SHALL respond exactly once to each `scratchpad` request message.

##### `scratchpad.create`

###### Request `payload`

| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `resource`            | REQUIRED    | object | Conveys resource content as per the [CDS Hooks Action] `payload.resource`. |
{:.grid}

###### Response `payload`

| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `status`              | REQUIRED    | string | An HTTP response code (i.e. "200 OK"). |
| `location`            | REQUIRED if a new resource has been added to the scratchapd. | string | Takes the form `resourceType/id`. |
| `outcome`             | OPTIONAL    | object | [FHIR OperationOutcome] resulting from the message action. |
{:.grid}



###### Examples

The following example creates a new `ServiceRequest` in the EHR's scratchpad:

```js
// From app -> EHR
ehrWindow.postMessage({
  "messageId": "<some new uid>",
  "messagingHandle": "<smart_web_messaging_handle> from SMART launch context",
  "messageType": "scratchpad.create",
  "payload": {
    "resource": {
      "resourceType": "ServiceRequest",
      "status": "draft",
      // additional details as needed
    }
  }
}, ehrOrigin);
```

The EHR then performs the requested operation, creating an object in an internal
scratchpad and assigning it id `123` before finally responding with:

```js
// From EHR -> app
appWindow.postMessage({
  "messageId": "<some new uid>",
  "responseToMessageId": "<corresponding request messageId>",
  "payload": {
    "status": "201 Created",
    "location": "ServiceRequest/123"
  }
}, appOrigin);
```

##### `scratchpad.read`

The `scratchpad.read` operation allows for selection of either a single resource
from the scratchpad by requesting its `location` handle, or for selection of the
*entire* contents of the scratchpad by omitting `location` from the operation
parameter list.

###### Request `payload`

| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `location`            | OPTIONAL    | string | Takes the form `resourceType/id` when provided.  |
{:.grid}

###### Response `payload`

| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `resource`            | CONDITIONAL | object | A single Resource returned when a `scratchpad.read` request specifies a `location`. |
| `scratchpad`          | CONDITIONAL | object | A list of Resources returned when a `scratchpad.read` request specifies no `location`, requesting all resources on the scratchpad. |
| `outcome`             | OPTIONAL    | object | [FHIR OperationOutcome] resulting from the message action. |
{:.grid}

A response payload SHALL NOT populate both the `resource` and `scratchpad`
attribute - their inclusion in the response is mutually exclusive.

The value of the scratchpad `location` of any Resource accessible through the
scratchpad can be determined by concatenating the `resourceType` and `id`
fields, delimiting them with a forward slash.

All resources returned from a `scratchpad.read` operation SHALL include both
`resourceType` and `id` values.

###### Examples

---

This example shows how an app might request the contents of a single resource
from the scratchpad, `ServiceRequest/123`.

```js
// From app -> EHR
ehrWindow.postMessage({
  "messageId": "<some new uid>",
  "messagingHandle": "<smart_web_messaging_handle> from SMART launch context",
  "messageType": "scratchpad.read",
  "payload": {
    "location": "ServiceRequest/123"
  }
}, ehrOrigin);
```

Assuming the resource exists, the EHR could return it to the app like this:

```js
// From EHR -> app
appWindow.postMessage({
  "messageId": "<some new uid>",
  "responseToMessageId": "<corresponding request messageId>",
  "payload": {
    "resource": {
      "resourceType": "ServiceRequest",
      "id": "123",
      "status": "draft",
      "intent": "proposal",
      "subject": {
        "reference": "http://example.com/Patient/123"
      }
    }
  }
}, appOrigin);
```

---

This example shows how an app might inspect the entire contents of the
scratchpad.

```js
// From app -> EHR
ehrWindow.postMessage({
  "messageId": "<some new uid>",
  "messagingHandle": "<smart_web_messaging_handle> from SMART launch context",
  "messageType": "scratchpad.read"
}, ehrOrigin);
```

The EHR could then respond with the full contents of the scratchpad in one
array.

```js
// From EHR -> app
appWindow.postMessage({
  "messageId": "<some new uid>",
  "responseToMessageId": "<corresponding request messageId>",
  "payload": {
    "scratchpad": [
      {
        "resourceType": "ServiceRequest",
        "id": "1",
        "status": "draft",
        "intent": "proposal",
        "subject": {
          "reference": "http://example.com/Patient/123"
        }
      },
      {
        "resourceType": "MedicationRequest",
        "id": "1",
        "status": "draft",
        "intent": "proposal",
        "medicationCodeableConcept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "108761006",
              "display": "Capecitabine-containing product"
            }
          ]
        },
        "subject": {
          "reference": "http://example.com/Patient/123"
        }
      }
    ]
  }
}, appOrigin);
```

Or, if the scratchpad had no entries, the EHR could respond with this:

```js
// From EHR -> app
appWindow.postMessage({
  "messageId": "<some new uid>",
  "responseToMessageId": "<corresponding request messageId>"
}, appOrigin);
```

---


##### `scratchpad.update`

###### Request `payload`

| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `resource`            | REQUIRED    | object | Conveys resource content as per CDS Hooks Action's `payload.resource`. |
{:.grid}

The `resource` SHALL specify a `resourceType` and an `id`.

###### Response `payload`

| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `status`              | REQUIRED    | string | An HTTP response code (i.e. "200 OK"). |
| `outcome`             | OPTIONAL    | object | [FHIR OperationOutcome] resulting from the message action. |
{:.grid}

###### Examples

This example shows an update to a draft prescription in the context of a CDS
Hooks request:

```js
// app -> EHR: Update to a better, cheaper alternative prescription
ehrWindow.postMessage({
  "messageId": "<some new uid>",
  "messagingHandle": "<smart_web_messaging_handle> from SMART launch context",
  "messageType": "scratchpad.update",
  "payload": {
    "resource": {
      "resourceType": "MedicationRequest",
      "id": "123",
      "status": "draft"
      // additional details as needed
    }
  }
}, ehrOrigin);
```

The EHR then performs the requested update, modifying an object in the
scratchpad before finally responding with:

```js
// From EHR -> app
appWindow.postMessage({
  "messageId": "<some new uid>",
  "responseToMessageId": "<corresponding request messageId>",
  "payload": {
    "status": "200 OK"
  }
}, appOrigin);
```

##### `scratchpad.delete`

###### Request `payload`

| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `location`            | REQUIRED    | string | Takes the form `resourceType/id`.  |
{:.grid}

###### Response `payload`

| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `status`              | REQUIRED    | string | An HTTP response code (i.e. "200 OK"). |
| `outcome`             | OPTIONAL    | object | [FHIR OperationOutcome] resulting from the message action. |
{:.grid}

###### Examples

For the app to delete `MedicationRequest/456` from the EHR's scratchpad, the app should issue this message:

```js
// app -> EHR
ehrWindow.postMessage({
  "messageId": "<some new uid>",
  "messagingHandle": "<smart_web_messaging_handle> from SMART launch context",
  "messageType": "scratchpad.delete",
  "payload": {
    "location": "MedicationRequest/456"
  }
}, ehrOrigin);
```

Assuming the delete operation completed, the EHR could respond with:

```js
// From EHR -> app
appWindow.postMessage({
  "messageId": "<some new uid>",
  "responseToMessageId": "<corresponding request messageId>",
  "payload": {
    "status": "200 OK"
  }
}, appOrigin);
```


### EHR FHIR Server Interactions: `fhir.http` Message Type

In many cases, apps will be able to establish a direct HTTPS connections to an
EHR's FHIR server. Such connections provide a widely supported mechanism for
apps to interact with non-ephemeral state in the EHR. In some circumstances,
however, Web Messaging may be available even when direct HTTPS connections are
unavailable. In such cases, SMART Web Messaging requests with the `fhir.http`
message type can be used as an alternative to direct HTTPS connections.

A `fhir.http` request message can invoke any FHIR interaction that the EHR
supports. The semantics are identical to those defined in the core [FHIR
batch/transaction interaction].  That is, a SMART Web Messaging request with the
`fhir.http` type behaves like an HTTP POST to the EHR FHIR Server's
batch/transaction endpoint.  With this message type, apps can submit CRUDS
requests or other FHIR interaction requests to the EHR by assembling an
appropriate request `Bundle`.

The EHR SHALL respond exactly once to each `fhir.http` request message.

##### `fhir.http`

###### Request `payload`

| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `bundle`            | REQUIRED    | object | FHIR Bundle with one or more entries that include `Bundle.entry.request`. Request semantics for batch and transaction bundles are as defined in the core [FHIR batch/transaction interaction].|
{:.grid}

###### Response `payload`


| Property              | Optionality | Type   | Description |
| --------------------- | ----------- | ------ | ----------- |
| `bundle`            | CONDITONAL    | object | REQUIRED if no `outcome` is supplied. FHIR Bundle with one or more entries that include `Bundle.entry.response`. Response semantics for batch and transaction bundles are as defined in the core [FHIR batch/transaction interaction].|
| `outcome`             | OPTIONAL    | object | [FHIR OperationOutcome] explaining why the request could not be processed. |
{:.grid}

##### Example

This example shows a request to create a new Patient record directly in an EHR's
FHIR server. Note that a batch request is used even though there is only a
single Patient being created; this is because `batch`-type Bundles provide a
consistent and general-purpose way to describe any FHIR HTTP interaction.

```js
// app -> EHR: Create a new patient
ehrWindow.postMessage({
  "messageId": "<some new uid>",
  "messagingHandle": "<smart_web_messaging_handle> from SMART launch context",
  "messageType": "fhir.http",
  "payload": {
    "bundle": {
      "resourceType": "Bundle",
      "type": "batch",
      "entry": [{
        "request": {
          "method": "POST",
          "url": "Patient"
        },
        "resource": {
          "birthDate": "1974-12-25",
          "gender": "male",
          "name": [{
            "family": "Chalmers",
            "given": ["Peter", "James"]
          }]
        }
      }]
    }
  }
}, ehrOrigin);
```

The EHR then processes the request, storing a new patient record before finally responding with:

```js
// From EHR -> app
appWindow.postMessage({
  "messageId": "<some new uid>",
  "responseToMessageId": "<corresponding request messageId>",
  "payload": {
    "bundle": {
      "resourceType": "Bundle",
      "type": "batch-response",
      "entry": [{
        "response": {
          "status": "201 Created",
          "location": "Patient/123"
        }
      }]
    }
  }
}, appOrigin);
```

### Authorization with SMART Scopes
SMART Web Messaging enables capabilities that can be authorized via
[OAuth scopes], within the `messaging/` category.  Authorization is at the level
of message groups (e.g., `messaging/ui`) rather than specific messages (e.g.,
`launchActivity`).  For example, a SMART app that performs dosage adjustments to
in-progress orders might request the following scopes:

* `patient/MedicationRequest.read`: enable access to existing prescribed medications
* `messaging/scratchpad`: enable access to draft orders (including meds) on the EHR scratchpad
* `messaging/ui`: enable access to EHR navigation (e.g., to signal when the app is "done")

At the time of launch, the app receives a `smart_web_messaging_handle` alongside
the [OAuth] `access_token`.  This `smart_web_messaging_handle` is used to
correlate [`window.postMessage`] requests to the authorization context.  We
define this as a distinct parameter from the access token itself because in many
app architectures, the access token will only live server-side, and the
`smart_web_messaging_handle` is explicitly designed to be safely pushed up to
the browser environment.  (It confers limited permissions, and is entirely
focused on the Web Messaging interactions without enabling full REST API
access.)  A server MAY restrict the use of a single `smart_web_messaging_handle`
to requests from a single app window, and SHOULD apply logic to invalidate the
handle when appropriate (e.g., the server might invalidate the handle when the
user session ends).

EHR implementations MAY include additional constraints on authorization beyond these
coarse-grained scopes.  We encourage further experimentation in this direction, and will look
to implementer experience to determine whether we can standardize more granular controls.

*Note on security goals: We include a `smart_web_messaging_handle` in the request to ensure that a SMART app launch has been completed prior to any SMART Web Messaging API calls.  Requiring this parameter is part of a defense-in-depth strategy to mitigate some cross-site-scripting (XSS) attacks.*

#### Scope examples

```text
 Location: https://ehr/authorize?
  response_type=code&
  client_id=app-client-id&
  redirect_uri=https%3A%2F%2Fapp%2Fafter-auth&
  launch=xyz123&
  scope=launch+patient%2FMedicationRequest.read+messaging%2Fui+openid+profile&
  state=98wrghuwuogerg97&
  aud=https://ehr/fhir
```

Following the [OAuth 2.0] handshake, the authorization server returns the
authorized SMART launch parameters alongside the `access_token`.  Note the
`scope`, `smart_web_messaging_handle`, and `smart_web_messaging_origin` values:

```json
 {
  "access_token": "i8hweunweunweofiwweoijewiwe",
  "token_type": "bearer",
  "expires_in": 3600,
  "scope": "patient/Observation.read patient/Patient.read messaging/ui",
  "smart_web_messaging_handle": "bws8YCbyBtCYi5mWVgUDRqX8xcjiudCo",
  "smart_web_messaging_origin": "https://ehr.example.org",
  "state": "98wrghuwuogerg97",
  "patient":  "123",
  "encounter": "456"
}
```

### Limitations
The use of web messaging requires the app to be a web application, which is
either embedded within an iframe or launched in a new tab/window.

SMART Web Messaging is not a context synchronization specification (see
[FHIRCast]).  Rather, it's a collection of functions available to a web app
embedded within an EHR which supports tight workflow integration.

### Alternatives Considered
Several design approaches were considered when first designing this
specification, and some of those candidate designs are captured for posterity
in the section linked below.

See [Alternatives Considered].

### Security Considerations
In the current proposal, we provide infrastructure for servers to correlate Web
Messaging requests with a specific SMART App Launch context, through the
`smart_web_messaging_handle`.  However, we do not require that servers make use of
this property.  Refer to the historical [discussion and rationale here](https://github.com/HL7/smart-web-messaging/pull/4)
for background context.

### List of Abbreviations
The following acronyms and abbreviations are used throughout the document and
are provided here for the benefit of printed-copy IG implementers and readers.

| Abbreviation | Meaning |
| ------------ | ------- |
| API   | Application Programming Interface |
| CDS   | Clinical Decision Support |
| CPOE  | Computerized Physician Order Entry |
| CRUD  | Create Read Update Delete |
| EHR   | Electronic Health Record |
| [OAuth] | An open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords. |
| UX    | User Experience |
{:.grid}


---

