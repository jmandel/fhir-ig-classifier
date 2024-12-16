File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/fsh/Authorization.fsh

Extension:   NotificationAuthorizationHint
Id:          notification-authorization-hint
Title:       "Authorization information relevant to a notification"
Description: "Authorization context information and value (e.g., token)."
* insert StructureJurisdiction
* insert ExtensionContext(SubscriptionStatus.notificationEvent)
* extension contains
    type 1..1 MS and
    value 0..1 MS
* extension[type] ^short = "Authorization Type"
* extension[type] ^definition = "Used by clients to determine what kind of authorization is appropriate in this context."
* extension[type].value[x] only Coding
* extension[value] ^short = "Authorization Value"
* extension[value] ^definition = "A value related to the authorization (e.g., a token)."
* extension[value].value[x] only string


// * insert ExtensionDefinition(
//     authorizationType,
//     "Authorization Type",
//     "Used by clients to determine what kind of authorization is appropriate in this context.")
// * insert ExtensionDefinition(
//     authorizationValue,
//     "Authorization Value",
//     "A value related to the authorization \(e.g.\, a token\).")



---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/fsh/BackportNotificationR4.fsh

Profile:     BackportSubscriptionNotificationR4
Parent:      Bundle
Id:          backport-subscription-notification-r4
Title:       "R4 Topic-Based Subscription Notification Bundle"
Description: "Profile on the R4 Bundle resource to enable R5-style topic-based subscription notifications in FHIR R4."
* insert StructureCommonR4
* type = #history
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.ordered = false 
* entry ^slicing.description = "Slice based on resource"
* entry contains subscriptionStatus 1..1 MS
* entry[subscriptionStatus].resource 1..1 MS
* entry[subscriptionStatus].resource only BackportSubscriptionStatusR4
* obeys backport-notification-bundle-r4-1

Invariant:   backport-notification-bundle-r4-1
Description: "A notification bundle MUST have a Parameters as the first entry"
Expression:  "(entry.first().resource.is(Parameters))"
// Expression:  "(entry.first().resource.is(Parameters)) and (entry.first().resource.conformsTo(backport-subscription-status-r4))"
Severity:    #error
XPath:       "f:entry[1]/f:resource/f:Parameters"


Profile:      BackportSubscriptionStatusR4
Parent:       Parameters
Id:           backport-subscription-status-r4
Title:        "R4 Backported R5 SubscriptionStatus"
Description:  "Profile on Parameters for topic-based subscription notifications in R4."
* insert StructureCommonR4
* . ^short = "Parameter containing subscription status information"
* parameter ^short = "Slices containing subscription status information"
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.ordered = false
* parameter ^slicing.description = "Slice on parameter name"
* parameter 
    contains subscription 1..1 MS
    and topic 0..1 MS
    and status 1..1 MS
    and type 1..1 MS
    and eventsSinceSubscriptionStart 0..1 MS
    and notificationEvent 0..* MS
    and error 0..* MS
* parameter[subscription] ^short = "Parameter containing the reference to a subscription"
* parameter[subscription].name = "subscription" (exactly)
* parameter[subscription].name ^short = "Slice discriminator: the reference to a subscription"
* parameter[subscription].value[x] 1..1 MS
* parameter[subscription].value[x] only Reference(Subscription)
* parameter[subscription].value[x] ^short      = "Reference to the Subscription responsible for this notification"
* parameter[subscription].value[x] ^definition = "The reference to the Subscription which generated this notification."
* parameter[topic] ^short = "Parameter containing the canonical reference to a subscription topic"
* parameter[topic].name = "topic" (exactly)
* parameter[topic].name ^short = "Slice discriminator: the canonical reference to a subscription topic"
* parameter[topic].value[x] 0..1 MS
* parameter[topic].value[x] only canonical
* parameter[topic].value[x] ^short      = "Canonical reference to the SubscriptionTopic this notification relates to"
* parameter[topic].value[x] ^definition = "Canonical reference to the SubscriptionTopic for the Subscription which generated this notification."
* parameter[topic].value[x] ^comment    = "This value SHOULD NOT be present when using `empty` payloads, MAY be present when using id-only payloads, and SHOULD be present when using `full-resource` payloads."
* parameter[status] ^short = "Parameter containing the subscription status"
* parameter[status].name = "status" (exactly)
* parameter[status].name ^short = "Slice discriminator: the subscription status"
* parameter[status].value[x] 1..1 MS
* parameter[status].value[x] only code
* parameter[status].value[x] from http://hl7.org/fhir/ValueSet/subscription-status
* parameter[status].value[x] ^short      = "Status of the subscription when this notification was generated"
* parameter[status].value[x] ^definition = "The status of the subscription, which marks the server state for managing the subscription."
* parameter[type] ^short = "Parameter containing the type of event for this notification"
* parameter[type].name = "type" (exactly)
* parameter[type].name ^short = "Slice discriminator: the type of event for this notification"
* parameter[type].value[x] 1..1 MS
* parameter[type].value[x] only code
* parameter[type].value[x] from http://hl7.org/fhir/ValueSet/subscription-notification-type
* parameter[type].value[x] ^short      = "The type of event being conveyed with this notificaiton."
* parameter[eventsSinceSubscriptionStart] ^short = "Parameter containing the number of events since this subscription started"
* parameter[eventsSinceSubscriptionStart].name = "events-since-subscription-start" (exactly)
* parameter[eventsSinceSubscriptionStart].name ^short = "Slice discriminator: the number of events since this subscription started"
* parameter[eventsSinceSubscriptionStart].value[x] 0..1 MS
* parameter[eventsSinceSubscriptionStart].value[x] only string
* parameter[eventsSinceSubscriptionStart].value[x] ^short      = "Events since the Subscription was created"
* parameter[eventsSinceSubscriptionStart].value[x] ^definition = "The total number of actual events which have been generated since the Subscription was created (inclusive of this notification) - regardless of how many have been successfully communicated. This number is NOT incremented for handshake and heartbeat notifications."
* parameter[notificationEvent] ^short = "Parameter containing the event notification details"
* parameter[notificationEvent].name = "notification-event" (exactly)
* parameter[notificationEvent].name ^short = "Slice discriminator: the event notification details"
* parameter[notificationEvent].part 0..* MS
* parameter[notificationEvent].name ^short = "Parameter containing notification event details"
* parameter[notificationEvent].part ^slicing.discriminator.type = #value
* parameter[notificationEvent].part ^slicing.discriminator.path = "name"
* parameter[notificationEvent].part ^slicing.rules = #open
* parameter[notificationEvent].part ^slicing.ordered = false
* parameter[notificationEvent].part ^slicing.description = "Slice on notification event parameter name"
* parameter[notificationEvent].part
    contains eventNumber 1..1 MS
    and eventTimestamp 0..1 MS
    and eventFocus 0..1 MS
    and eventAdditionalContext 0..* MS
    and eventRelatedQuery 0..* MS
    and authType 0..1 MS
    and authValue 0..1 MS
* parameter[notificationEvent].part[eventNumber] ^short = "Parameter containing the event number"
* parameter[notificationEvent].part[eventNumber].name = "event-number" (exactly)
* parameter[notificationEvent].part[eventNumber].name ^short = "Slice discriminator: the event number"
* parameter[notificationEvent].part[eventNumber].value[x] 1..1 MS
* parameter[notificationEvent].part[eventNumber].value[x] only string
* parameter[notificationEvent].part[eventNumber].value[x] ^short      = "Event number"
* parameter[notificationEvent].part[eventNumber].value[x] ^definition = "The sequential number of this event in this subscription context."
* parameter[notificationEvent].part[eventTimestamp] ^short = "Parameter containing the event timestamp"
* parameter[notificationEvent].part[eventTimestamp].name = "timestamp" (exactly)
* parameter[notificationEvent].part[eventTimestamp].name ^short = "Slice discriminator: the event timestamp"
* parameter[notificationEvent].part[eventTimestamp].value[x] 0..1 MS
* parameter[notificationEvent].part[eventTimestamp].value[x] only instant
* parameter[notificationEvent].part[eventTimestamp].value[x] ^short      = "The instant this event occurred"
* parameter[notificationEvent].part[eventTimestamp].value[x] ^definition = "The actual time this event occured on the server."
* parameter[notificationEvent].part[eventFocus] ^short = "Parameter containing the event focus"
* parameter[notificationEvent].part[eventFocus].name = "focus" (exactly)
* parameter[notificationEvent].part[eventFocus].name ^short = "Slice discriminator: the event focus"
* parameter[notificationEvent].part[eventFocus].value[x] 0..1 MS
* parameter[notificationEvent].part[eventFocus].value[x] only Reference
* parameter[notificationEvent].part[eventFocus].value[x] ^short      = "The focus of this event"
* parameter[notificationEvent].part[eventFocus].value[x] ^definition = "The focus of this event. While this will usually be a reference to the focus resource of the event, it MAY contain a reference to a non-FHIR object."
* parameter[notificationEvent].part[eventAdditionalContext] ^short = "Parameter containing additional context for this event"
* parameter[notificationEvent].part[eventAdditionalContext].name = "additional-context" (exactly)
* parameter[notificationEvent].part[eventAdditionalContext].name ^short = "Slice discriminator: additional context for this event"
* parameter[notificationEvent].part[eventAdditionalContext].value[x] 0..1 MS
* parameter[notificationEvent].part[eventAdditionalContext].value[x] only Reference
* parameter[notificationEvent].part[eventAdditionalContext].value[x] ^short      = "Additional context for this event"
* parameter[notificationEvent].part[eventAdditionalContext].value[x] ^definition = "Additional context information for this event. Generally, this will contain references to additional resources included with the event (e.g., the Patient relevant to an Encounter), however it MAY refer to non-FHIR objects."
* parameter[notificationEvent].part[eventRelatedQuery] ^short = "Parameter containing related query information for this event"
* parameter[notificationEvent].part[eventRelatedQuery].name = "related-query" (exactly)
* parameter[notificationEvent].part[eventRelatedQuery].name ^short = "Slice discriminator: related query information for this event"
* parameter[notificationEvent].part[eventRelatedQuery].part ^slicing.discriminator.type = #value
* parameter[notificationEvent].part[eventRelatedQuery].part ^slicing.discriminator.path = "name"
* parameter[notificationEvent].part[eventRelatedQuery].part ^slicing.rules = #open
* parameter[notificationEvent].part[eventRelatedQuery].part ^slicing.ordered = false
* parameter[notificationEvent].part[eventRelatedQuery].part ^slicing.description = "Slice on related query part name"
* parameter[notificationEvent].part[eventRelatedQuery].part
    contains queryType 0..1 MS
    and query 1..1 MS
* parameter[notificationEvent].part[eventRelatedQuery].part[queryType] ^short = "Parameter containing the query type"
* parameter[notificationEvent].part[eventRelatedQuery].part[queryType].name = "query-type" (exactly)
* parameter[notificationEvent].part[eventRelatedQuery].part[queryType].name ^short = "Slice discriminator: the query type"
* parameter[notificationEvent].part[eventRelatedQuery].part[queryType].value[x] 0..1 MS
* parameter[notificationEvent].part[eventRelatedQuery].part[queryType].value[x] only Coding
* parameter[notificationEvent].part[eventRelatedQuery].part[queryType].value[x] ^short      = "Query Type"
* parameter[notificationEvent].part[eventRelatedQuery].part[queryType].value[x] ^definition = "The type of information this query can be used to retrieve."
* parameter[notificationEvent].part[eventRelatedQuery].part[query] ^short = "Parameter containing the query"
* parameter[notificationEvent].part[eventRelatedQuery].part[query].name = "query" (exactly)
* parameter[notificationEvent].part[eventRelatedQuery].part[query].name ^short = "Slice discriminator: the query"
* parameter[notificationEvent].part[eventRelatedQuery].part[query].value[x] 1..1 MS
* parameter[notificationEvent].part[eventRelatedQuery].part[query].value[x] only string
* parameter[notificationEvent].part[authType] ^short = "Parameter containing the authorization hint type."
* parameter[notificationEvent].part[authType].name = "authorization-type" (exactly)
* parameter[notificationEvent].part[authType].name ^short = "Slice discriminator: the authorization hint type"
* parameter[notificationEvent].part[authType].value[x] 0..1 MS
* parameter[notificationEvent].part[authType].value[x] only Coding
* parameter[notificationEvent].part[authType].value[x] ^short      = "Authorization Hint Type"
* parameter[notificationEvent].part[authType].value[x] ^definition = "Used by clients to determine what kind of authorization is appropriate in this context."
* parameter[notificationEvent].part[authValue] ^short = "Parameter containing the authorization hint value."
* parameter[notificationEvent].part[authValue].name = "authorization-value" (exactly)
* parameter[notificationEvent].part[authValue].name ^short = "Slice discriminator: the authorization hint value"
* parameter[notificationEvent].part[authValue].value[x] 0..1 MS
* parameter[notificationEvent].part[authValue].value[x] only string
* parameter[notificationEvent].part[authValue].value[x] ^short      = "Authorization Hint Value"
* parameter[notificationEvent].part[authValue].value[x] ^definition = "A value related to the authorization (e.g., a token)."
* parameter[error] ^short = "Parameter containing errors on the subscription"
* parameter[error].name = "error" (exactly)
* parameter[error].name ^short = "Slice discriminator: errors on the subscription"
* parameter[error].value[x] 0..1 MS
* parameter[error].value[x] only CodeableConcept
* parameter[error].value[x] ^short      = "An error on the subscription"
* parameter[error].value[x] ^definition = "A record of errors that occurred when the server processed a notification."


// Instance:    BackportNotificationStatusShellR4
// InstanceOf:  BackportSubscriptionStatusR4
// Usage:       #inline
// * parameter[subscription].name = "subscription"
// * parameter[subscription].valueReference.reference = ""
// * parameter[status].name = "status"
// * parameter[status].valueCode = #active
// * parameter[type].name = "type"
// * parameter[type].valueCode = #query-status

Instance:    BackportNotificationStatusShellR4
InstanceOf:  Parameters
Usage:       #inline
* meta.profile[+] = "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription-status-r4"

RuleSet: AddParameterStatus(id, status, type, sinceStart)
// This rule set adds a status parameters, and must be called before other entries are added to a bundle
* entry[0].fullUrl  = "urn:uuid:{id}"
* entry[0].resource = BackportNotificationStatusShellR4
* entry[0].resource.id = "{id}"
* entry[0].resource.parameter[subscription].name = "subscription"
* entry[0].resource.parameter[subscription].valueReference.reference = $admissionSub
* entry[0].resource.parameter[topic].name = "topic"
* entry[0].resource.parameter[topic].valueCanonical = $admissionTopic
* entry[0].resource.parameter[status].name = "status"
* entry[0].resource.parameter[status].valueCode = {status}
* entry[0].resource.parameter[type].name = "type"
* entry[0].resource.parameter[type].valueCode = {type}
* entry[0].resource.parameter[eventsSinceSubscriptionStart].name = "events-since-subscription-start"
* entry[0].resource.parameter[eventsSinceSubscriptionStart].valueString = "{sinceStart}"
* entry[0].request.method = #GET
* entry[0].request.url = $admissionSubStatus
* entry[0].response.status = "200"

RuleSet: AddParameterStatusError(vs, code)
* entry[0].resource.parameter[error].name = "error"
* entry[0].resource.parameter[error].valueCodeableConcept = {vs}{code}

RuleSet: AddParameterStatusFirstEvent(eventNumber)
* entry[0].resource.parameter[notificationEvent].name = "notification-event"
* entry[0].resource.parameter[notificationEvent].part[eventNumber].name = "event-number"
* entry[0].resource.parameter[notificationEvent].part[eventNumber].valueString = "{eventNumber}"
* entry[0].resource.parameter[notificationEvent].part[eventTimestamp].name = "timestamp"
* entry[0].resource.parameter[notificationEvent].part[eventTimestamp].valueInstant = "2020-05-29T11:44:13.1882432-05:00"

RuleSet: AddParameterStatusEventFocus(focus)
* entry[0].resource.parameter[notificationEvent].part[eventFocus].name = "focus"
* entry[0].resource.parameter[notificationEvent].part[eventFocus].valueReference.reference = {focus}

RuleSet: AddParameterStatusEventContext(additionalContext)
* entry[0].resource.parameter[notificationEvent].part[eventAdditionalContext].name = "additional-context"
* entry[0].resource.parameter[notificationEvent].part[eventAdditionalContext].valueReference.reference = {additionalContext}


Instance:    BackportNotificationStatusExampleR4
InstanceOf:  BackportSubscriptionStatusR4
Usage:       #example
Title:       "R4 Notification: Status"
Description: "R4 Example of a topic-based subscription notification with status content."
* id       = "r4-notification-status"
* parameter[subscription].name = "subscription"
* parameter[subscription].valueReference.reference = $admissionSub
* parameter[topic].name = "topic"
* parameter[topic].valueCanonical = $admissionTopic
* parameter[status].name = "status"
* parameter[status].valueCode = #active
* parameter[type].name = "type"
* parameter[type].valueCode = #event-notification
* parameter[eventsSinceSubscriptionStart].name = "events-since-subscription-start"
* parameter[eventsSinceSubscriptionStart].valueString = "2"
* parameter[notificationEvent].name = "notification-event"
* parameter[notificationEvent].part[eventNumber].name = "event-number"
* parameter[notificationEvent].part[eventNumber].valueString = "2"
* parameter[notificationEvent].part[eventTimestamp].name = "timestamp"
* parameter[notificationEvent].part[eventTimestamp].valueInstant = "2020-05-29T11:44:13.1882432-05:00"


Instance:    BackportNotificationExampleHandshakeR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Handshake"
Description: "R4 Example of a topic-based subscription `handshake` notification."
* id        = "r4-notification-handshake"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(63c28e8a-f402-43e4-beb2-75b1c0f6833f, #requested, #handshake, 0)


Instance:    BackportNotificationExampleHeartbeatR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Heartbeat"
Description: "R4 Example of a topic-based subscription `heartbeat` notification."
* id        = "r4-notification-heartbeat"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(385b23bd-6d03-462e-894d-a0694045d65c, #active, #heartbeat, 2)


Instance:    BackportNotificationExampleEmptyR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Empty"
Description: "R4 Example of a topic-based subscription event notification with `empty` content."
* id        = "r4-notification-empty"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(9e41ff6d-5be6-4e6a-8b85-abd4e7f58400, #active, #event-notification, 2)
* insert AddParameterStatusFirstEvent(2)

Instance:    BackportNotificationExampleEmptyWithAuthR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Empty with Authoriztion"
Description: "R4 Example of a topic-based subscription event notification with `empty` content."
* id        = "r4-notification-empty-with-auth"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(7b8ccdfd-b799-480c-84a5-1d1381513edf, #active, #event-notification, 2)
* insert AddParameterStatusFirstEvent(2)
* entry[0].resource.parameter[notificationEvent].name = "notification-event"
* entry[0].resource.parameter[notificationEvent].part[authType].name = "authorization-type"
* entry[0].resource.parameter[notificationEvent].part[authType].valueCoding = http://example.org/auth#authorization_base "OAuth request token"
* entry[0].resource.parameter[notificationEvent].part[authValue].name = "authorization-value"
* entry[0].resource.parameter[notificationEvent].part[authValue].valueString = "ZGFhNDFjY2MtZGFmMi00YjZkLThiNDYtN2JlZDk1MWEyYzk2"


Instance:    BackportNotificationExampleIdOnlyR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Id Only"
Description: "R4 Example of a topic-based subscription event notification with `id-only` content."
* id        = "r4-notification-id-only"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(292d3c72-edc1-4d8a-afaa-d85e19c7f563, #active, #event-notification, 2)
* insert AddParameterStatusFirstEvent(2)
* insert AddParameterStatusEventFocus($notificationEncounter1)
// * entry[1].fullUrl = $notificationEncounter1
// * entry[1].request.method = #POST
// * entry[1].request.url    = "Encounter"
// * entry[1].response.status = "201"

Instance:    BackportNotificationExampleIdOnlyWithAuthR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Id Only with Authorization"
Description: "R4 Example of a topic-based subscription event notification with `id-only` content and authorization."
* id        = "r4-notification-id-only-with-auth"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(d5359778-3cda-46f0-8193-54bd09ad8309, #active, #event-notification, 2)
* insert AddParameterStatusFirstEvent(2)
* insert AddParameterStatusEventFocus($notificationEncounter1)
* entry[0].resource.parameter[notificationEvent].name = "notification-event"
* entry[0].resource.parameter[notificationEvent].part[authType].name = "authorization-type"
* entry[0].resource.parameter[notificationEvent].part[authType].valueCoding = http://example.org/auth#authorization_base "OAuth request token"
* entry[0].resource.parameter[notificationEvent].part[authValue].name = "authorization-value"
* entry[0].resource.parameter[notificationEvent].part[authValue].valueString = "ZGFhNDFjY2MtZGFmMi00YjZkLThiNDYtN2JlZDk1MWEyYzk2"

Instance:    BackportNotificationExampleIdOnlyWithQueryR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Id Only with Related Query"
Description: "R4 Example of a topic-based subscription event notification with `id-only` content and related queries."
* id        = "r4-notification-id-only-with-query"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(20f7e506-69ba-4895-b1f8-044dab538bc4, #active, #event-notification, 2)
* insert AddParameterStatusFirstEvent(2)
* insert AddParameterStatusEventFocus($notificationEncounter1)
* entry[0].resource.parameter[notificationEvent].name = "notification-event"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery].name = "related-query"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery].part[queryType].name = "query-type"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery].part[queryType].valueCoding = http://example.org/query-types#example "Example query"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery].part[query].name = "query"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery].part[query].valueString = "http://example.org/fhir/$example?patient=$notificationPatientId"


Instance:    BackportNotificationExampleFullResourceR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Full Resource"
Description: "R4 Example of a topic-based subscription event notification with `full-resource` content."
* id        = "r4-notification-full-resource"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(2d5afc69-6ef2-420f-a8d1-8500c99eb96c, #active, #event-notification, 2)
* insert AddParameterStatusFirstEvent(2)
* insert AddParameterStatusEventFocus($notificationEncounter1)
* entry[1].fullUrl  = $notificationEncounter1
* entry[1].resource = BackportNotificationEncounter
* entry[1].request.method = #POST
* entry[1].request.url    = "Encounter"
* entry[1].response.status = "201"

Instance:    BackportNotificationExampleFullResourceWithQueryR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Full Resource with related query"
Description: "R4 Example of a topic-based subscription event notification with `full-resource` content and related queries."
* id        = "r4-notification-full-resource-with-query"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(919ce5d0-d77c-44a7-a397-d8b2a05fd1bf, #active, #event-notification, 2)
* insert AddParameterStatusFirstEvent(2)
* insert AddParameterStatusEventFocus($notificationEncounter1)
* entry[0].resource.parameter[notificationEvent].name = "notification-event"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][0].name = "related-query"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][0].part[queryType].name = "query-type"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][0].part[queryType].valueCoding = http://example.org/query-types#example "Example query"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][0].part[query].name = "query"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][0].part[query].valueString = "http://example.org/fhir/$example?patient=$notificationPatientId"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][1].name = "related-query"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][1].part[queryType].name = "query-type"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][1].part[queryType].valueCoding = http://example.org/query-types#prescribed "Prescribed medications"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][1].part[query].name = "query"
* entry[0].resource.parameter[notificationEvent].part[eventRelatedQuery][1].part[query].valueString = "http://example.org/fhir/MedicationRequest?patient=$notificationPatientId&encounter=$notificationEncounter1Id"
* entry[1].fullUrl  = $notificationEncounter1
* entry[1].resource = BackportNotificationEncounter
* entry[1].request.method = #POST
* entry[1].request.url    = "Encounter"
* entry[1].response.status = "201"



Instance:    BackportNotificationExampleMultiResourceR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Multiple Resources"
Description: "R4 Example of a topic-based subscription event notification with `full-resource` content and a related resource."
* id        = "r4-notification-multi-resource"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(7bd91d26-c951-4520-9ac6-67f41bfbe897, #active, #event-notification, 2)
* insert AddParameterStatusFirstEvent(2)
* insert AddParameterStatusEventFocus($notificationEncounter1)
* insert AddParameterStatusEventContext($notificationPatient)
* entry[1].fullUrl  = $notificationEncounter1
* entry[1].resource = BackportNotificationEncounter
* entry[1].request.method = #POST
* entry[1].request.url    = "Encounter"
* entry[1].response.status = "201"
* entry[2].fullUrl  = $notificationPatient
* entry[2].resource = BackportNotificationPatient
* entry[2].request.method = #GET
* entry[2].request.url    = "Patient/1599eb66-431a-447c-a3de-6897fe9ae9a1"
* entry[2].response.status = "200"


Instance:    BackportNotificationExampleErrorR4
InstanceOf:  BackportSubscriptionNotificationR4
Usage:       #example
Title:       "R4 Notification: Error"
Description: "R4 Example of a topic-based subscription query-status response with an error state."
* id        = "r4-notification-error"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddParameterStatus(7bd91d26-c951-4520-9ac6-67f41bfbe897, #error, #query-status, 3)
* insert AddParameterStatusError(http://terminology.hl7.org/CodeSystem/subscription-error, #no-response)


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/fsh/BackportNotificationR4B.fsh

Profile:     BackportSubscriptionNotification
Parent:      Bundle
Id:          backport-subscription-notification
Title:       "R4B Topic-Based Subscription Notification Bundle"
Description: "Profile on the R4B Bundle resource to enable R5-style topic-based subscription notifications in FHIR R4B."
* insert StructureCommonR4B
* type = #history
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.ordered = false 
* entry ^slicing.description = "Slice based on resource"
* entry contains subscriptionStatus 1..1 MS
* entry[subscriptionStatus].resource 1..1 MS
* entry[subscriptionStatus].resource only SubscriptionStatus
* obeys backport-notification-bundle-1

Invariant:   backport-notification-bundle-1
Description: "A notification bundle MUST have a SubscriptionStatus as the first entry"
Expression:  "entry.first().resource.is(SubscriptionStatus)"
Severity:    #error
XPath:       "f:entry[1]/f:resource/f:SubscriptionStatus"

Instance:    BackportNotificationStatusShellR4B
InstanceOf:  SubscriptionStatus
Usage:       #inline
* type                    = #query-status
* subscription.reference  = $admissionSub

RuleSet: AddSubscriptionStatus(id, status, type, sinceStart)
* entry[0].fullUrl = "urn:uuid:{id}"
* entry[0].resource = BackportNotificationStatusShellR4B
* entry[0].resource.id                            = "{id}"
* entry[0].resource.subscription.reference        = $admissionSub
* entry[0].resource.topic                         = $admissionTopic
* entry[0].resource.status                        = {status}
* entry[0].resource.type                          = {type}
* entry[0].resource.eventsSinceSubscriptionStart  = "{sinceStart}"
* entry[0].request.method = #GET
* entry[0].request.url = $admissionSubStatus
* entry[0].response.status = "200"

RuleSet: AddSubscriptionStatusError(vs, code)
* entry[0].resource.error[+] = {vs}{code}

RuleSet: AddSubscriptionStatusFirstEvent(eventNumber)
* entry[0].resource.notificationEvent[+].eventNumber  = "{eventNumber}"
* entry[0].resource.notificationEvent[=].timestamp    = "2020-05-29T11:44:13.1882432-05:00"

RuleSet: AddSubscriptionStatusEventFocus(focus)
* entry[0].resource.notificationEvent[=].focus.reference = {focus}

RuleSet: AddSubscriptionStatusEventContext(additionalContext)
* entry[0].resource.notificationEvent[=].additionalContext[+].reference = {additionalContext}



Instance:    BackportNotificationStatusExample
InstanceOf:  SubscriptionStatus
Title:       "R4B Notification: Status"
Description: "R4B Example of a topic-based subscription notification with status content."
* id       = "r4b-notification-status"
* subscription.reference       = $admissionSub
* topic                        = $admissionTopic
* status                       = #active
* type                         = #event-notification
* eventsSinceSubscriptionStart = "2"
* notificationEvent[+].eventNumber = "2"
* notificationEvent[=].timestamp   = "2020-05-29T11:44:13.1882432-05:00"


Instance:    BackportNotificationExampleHandshake
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Handshake"
Description: "R4B Example of a topic-based subscription `handshake` notification."
* id        = "r4b-notification-handshake"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(9d98f2be-4067-4b90-b0ec-6d3308d75c8e, #requested, #handshake, 0)


Instance:    BackportNotificationExampleHeartbeat
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Heartbeat"
Description: "R4B Example of a topic-based subscription `heartbeat` notification."
* id        = "r4b-notification-heartbeat"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(8971bd8c-4bd2-4612-9bae-c24cf4fd9e1f, #active, #heartbeat, 2)


Instance:    BackportNotificationExampleEmpty
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Empty"
Description: "R4B Example of a topic-based subscription event notification with `empty` content."
* id        = "r4b-notification-empty"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(fbc7cb79-0502-4797-993c-399766271260, #active, #event-notification, 2)
* insert AddSubscriptionStatusFirstEvent(2)


Instance:    BackportNotificationExampleEmptyWithAuth
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Empty with Authorization Hint"
Description: "R4B Example of a topic-based subscription event notification with `empty` content and authorization."
* id        = "r4b-notification-empty-with-auth"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(3e2a2ad3-cb42-4a69-a4d5-df28f181d2b9, #active, #event-notification, 2)
* insert AddSubscriptionStatusFirstEvent(2)
* entry[0].resource.notificationEvent[0].extension[0].url = $authorizationHintExt
* entry[0].resource.notificationEvent[0].extension[0].extension[+].url = "type"
* entry[0].resource.notificationEvent[0].extension[0].extension[=].valueCoding = http://example.org/auth#authorization_base "OAuth request token"
* entry[0].resource.notificationEvent[0].extension[0].extension[+].url = "value"
* entry[0].resource.notificationEvent[0].extension[0].extension[=].valueString = "ZGFhNDFjY2MtZGFmMi00YjZkLThiNDYtN2JlZDk1MWEyYzk2"


Instance:    BackportNotificationExampleIdOnly
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Id Only"
Description: "R4B Example of a topic-based subscription event notification with `id-only` content."
* id        = "r4b-notification-id-only"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(3dd3c88d-1f7c-40ce-bf41-6b0d8186c311, #active, #event-notification, 2)
* insert AddSubscriptionStatusFirstEvent(2)
* insert AddSubscriptionStatusEventFocus($notificationEncounter1)
// * entry[1].fullUrl = $notificationEncounter1
// * entry[1].request.method = #POST
// * entry[1].request.url    = "Encounter"
// * entry[1].response.status = "201"

Instance:    BackportNotificationExampleIdOnlyWithAuth
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Id Only with Authorization Hint"
Description: "R4B Example of a topic-based subscription event notification with `id-only` content and authorization."
* id        = "r4b-notification-id-only-with-auth"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(565fc524-5653-40d1-9617-a28a9bd36e9e, #active, #event-notification, 2)
* insert AddSubscriptionStatusFirstEvent(2)
* insert AddSubscriptionStatusEventFocus($notificationEncounter1)
* entry[0].resource.notificationEvent[0].extension[0].url = $authorizationHintExt
* entry[0].resource.notificationEvent[0].extension[0].extension[+].url = "type"
* entry[0].resource.notificationEvent[0].extension[0].extension[=].valueCoding = http://example.org/auth#authorization_base "OAuth request token"
* entry[0].resource.notificationEvent[0].extension[0].extension[+].url = "value"
* entry[0].resource.notificationEvent[0].extension[0].extension[=].valueString = "ZGFhNDFjY2MtZGFmMi00YjZkLThiNDYtN2JlZDk1MWEyYzk2"


Instance:    BackportNotificationExampleIdOnlyWithQuery
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Id Only with Query"
Description: "R4B Example of a topic-based subscription event notification with `id-only` content and a related query."
* id        = "r4b-notification-id-only-with-query"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(f774b0ba-d86c-4360-9d49-f3b1561c83cc, #active, #event-notification, 2)
* insert AddSubscriptionStatusFirstEvent(2)
* insert AddSubscriptionStatusEventFocus($notificationEncounter1)
* entry[0].resource.notificationEvent[0].extension[0].url = $relatedQueryExt
* entry[0].resource.notificationEvent[0].extension[0].extension[+].url = "queryType"
* entry[0].resource.notificationEvent[0].extension[0].extension[=].valueCoding = http://example.org/query-types#example "Example query"
* entry[0].resource.notificationEvent[0].extension[0].extension[+].url = "query"
* entry[0].resource.notificationEvent[0].extension[0].extension[=].valueString = "http://example.org/fhir/$example?patient=$notificationPatientId"


Instance:    BackportNotificationExampleFullResource
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Full Resource"
Description: "R4B Example of a topic-based subscription event notification with `full-resource` content."
* id        = "r4b-notification-full-resource"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(120e93df-a9ab-4b01-b0e2-6660338e5927, #active, #event-notification, 2)
* insert AddSubscriptionStatusFirstEvent(2)
* insert AddSubscriptionStatusEventFocus($notificationEncounter1)
* entry[1].fullUrl  = $notificationEncounter1
* entry[1].resource = BackportNotificationEncounter
* entry[1].request.method = #POST
* entry[1].request.url    = "Encounter"
* entry[1].response.status = "201"

Instance:    BackportNotificationExampleFullResourceWithQuery
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Full Resource with Query"
Description: "R4B Example of a topic-based subscription event notification with `full-resource` content."
* id        = "r4b-notification-full-resource-with-query"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(1aa43532-94b7-4463-8049-338045636f7b, #active, #event-notification, 2)
* insert AddSubscriptionStatusFirstEvent(2)
* insert AddSubscriptionStatusEventFocus($notificationEncounter1)
* entry[0].resource.notificationEvent[0].extension[0].url = $relatedQueryExt
* entry[0].resource.notificationEvent[0].extension[0].extension[+].url = "queryType"
* entry[0].resource.notificationEvent[0].extension[0].extension[=].valueCoding = http://example.org/query-types#example "Example query"
* entry[0].resource.notificationEvent[0].extension[0].extension[+].url = "query"
* entry[0].resource.notificationEvent[0].extension[0].extension[=].valueString = "http://example.org/fhir/$example?patient=$notificationPatientId"
* entry[0].resource.notificationEvent[0].extension[1].url = $relatedQueryExt
* entry[0].resource.notificationEvent[0].extension[1].extension[+].url = "queryType"
* entry[0].resource.notificationEvent[0].extension[1].extension[=].valueCoding = http://example.org/query-types#prescribed "Prescribed medications"
* entry[0].resource.notificationEvent[0].extension[1].extension[+].url = "query"
* entry[0].resource.notificationEvent[0].extension[1].extension[=].valueString = "http://example.org/fhir/MedicationRequest?patient=$notificationPatientId&encounter=$notificationEncounter1Id"
* entry[1].fullUrl  = $notificationEncounter1
* entry[1].resource = BackportNotificationEncounter
* entry[1].request.method = #POST
* entry[1].request.url    = "Encounter"
* entry[1].response.status = "201"


Instance:    BackportNotificationExampleMultiResource
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Multiple Resources"
Description: "R4B Example of a topic-based subscription event notification with `full-resource` content and a related resource."
* id        = "r4b-notification-multi-resource"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(f05e460f-4d56-4fa0-8e60-502404e68be5, #active, #event-notification, 2)
* insert AddSubscriptionStatusFirstEvent(2)
* insert AddSubscriptionStatusEventFocus($notificationEncounter1)
* insert AddSubscriptionStatusEventContext($notificationPatient)
* entry[1].fullUrl  = $notificationEncounter1
* entry[1].resource = BackportNotificationEncounter
* entry[1].request.method = #POST
* entry[1].request.url    = "Encounter"
* entry[1].response.status = "201"
* entry[2].fullUrl  = $notificationPatient
* entry[2].resource = BackportNotificationPatient
* entry[2].request.method = #GET
* entry[2].request.url    = "Patient/1599eb66-431a-447c-a3de-6897fe9ae9a1"
* entry[2].response.status = "200"


Instance:    BackportNotificationExampleError
InstanceOf:  BackportSubscriptionNotification
Usage:       #example
Title:       "R4B Notification: Error"
Description: "R4B Example of a topic-based subscription query-status response with an error state."
* id         = "r4b-notification-error"
* timestamp = "2020-05-29T11:44:13.1882432-05:00"
* insert AddSubscriptionStatus(190faedc-eb83-4073-b189-55e6a49a11dd, #error, #query-status, 3)
* insert AddSubscriptionStatusError(http://terminology.hl7.org/CodeSystem/subscription-error, #no-response)


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/fsh/BackportSubscription.fsh

Profile:     BackportSubscription
Parent:      Subscription
Id:          backport-subscription
Title:       "R4/B Topic-Based Subscription"
Description: "Profile on the Subscription resource to enable R5-style topic-based subscriptions in FHIR R4 or R4B."
* insert StructureJurisdiction
* criteria 1..1 MS 
* criteria ^short = "Canonical URL for the topic used to generate events"
* criteria ^definition = "When using topic-based subscriptions, the primary criteria is always the topic, indicated by its canonical URL."
* criteria.extension 0..*
* criteria.extension contains BackportFilterCriteria named filterCriteria 0..*
* criteria.extension[BackportFilterCriteria] MS SU
* criteria.extension[BackportFilterCriteria] ^short      = "Filtering critiera applied to events"
* criteria.extension[BackportFilterCriteria] ^definition = "Search-style filters to be applied to narrow the subscription topic stream. Keys can be either search parameters appropriate to the filtering resource or keys defined within the subscription topic."
* criteria.extension[BackportFilterCriteria] ^comment    = "When multiple filters are applied, evaluates to true if all the conditions are met; otherwise it returns false. (i.e., logical AND)."
* channel.payload 1..1
* channel.payload.extension contains BackportPayloadContent named content 1..1
* channel.payload.extension[BackportPayloadContent] MS SU
* channel.payload.extension[BackportPayloadContent] ^short      = "Notification content level"
* channel.payload.extension[BackportPayloadContent] ^definition = "How much of the resource content to deliver in the notification payload. The choices are an empty payload, only the resource id, or the full resource content."
* channel.payload.extension[BackportPayloadContent] ^comment    = "Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured."
* channel.extension contains BackportHeartbeatPeriod named heartbeatPeriod 0..1
* channel.extension[BackportHeartbeatPeriod] ^short      = "Interval in seconds to send 'heartbeat' notification"
* channel.extension[BackportHeartbeatPeriod] ^definition = "If present, a 'hearbeat' notification (keepalive) is sent via this channel with an the interval period equal to this elements integer value in seconds. If not present, a heartbeat notification is not sent."
* channel.extension contains BackportTimeout named timeout 0..1
* channel.extension[BackportTimeout] ^short      = "Timeout in seconds to attempt notification delivery"
* channel.extension[BackportTimeout] ^definition = "If present, the maximum amount of time a server will allow before failing a notification attempt."
* channel.extension contains BackportMaxCount named maxCount 0..1
* channel.extension[BackportMaxCount] ^short      = "Maximum number of triggering resources included in notification bundles"
* channel.extension[BackportMaxCount] ^definition = "If present, the maximum number of triggering resources that will be included in a notification bundle (e.g., a server will not include more than this number of trigger resources in a single notification). Note that this is not a strict limit on the number of entries in a bundle, as dependent resources can be included."
* channel.type.extension contains BackportChannelType named customChannelType 0..1
* channel.type.extension[BackportChannelType] MS SU
* channel.type.extension[BackportChannelType] ^short      = "Extended channel type for notifications"
* channel.type.extension[BackportChannelType] ^definition = "The type of channel to send notifications on."
* channel.type.extension[BackportChannelType] ^comment    = "This extension allows for the use of additional channel types that were not defined in the FHIR R4 subscription definition."
* extension contains http://hl7.org/fhir/5.0/StructureDefinition/extension-Subscription.identifier named identifier 0..*


Extension:   BackportChannelType
Id:          backport-channel-type
Title:       "Backported R5 Additional Channel Types"
Description: "Additional channel types not defined before FHIR R5."
* insert StructureJurisdiction
* ^context[0].type = #element
* ^context[0].expression = "Subscription.channel.type"
* value[x] only Coding
* value[x] ^short      = "Extended channel type for notifications"
* value[x] ^definition = "The type of channel to send notifications on."
* value[x] ^comment    = "This extension allows for the use of additional channel types that were not defined in the FHIR R4 subscription definition."

Extension:   BackportFilterCriteria
Id:          backport-filter-criteria
Title:       "Backported R5 FilterBy Criteria"
Description: "Criteria for topic-based filtering (filter-by)."
* insert StructureJurisdiction
* ^context[0].type = #element
* ^context[0].expression = "Subscription.criteria"
* value[x] only string
* value[x] ^short      = "Filtering critiera applied to events"
* value[x] ^definition = "Search-style filters to be applied to narrow the subscription topic stream. Keys can be either search parameters appropriate to the filtering resource or keys defined within the subscription topic."
* value[x] ^comment    = "When multiple filters are applied, evaluates to true if all the conditions are met; otherwise it returns false. (i.e., logical AND)."

CodeSystem:  BackportContentCodeSystem
Id:          backport-content-code-system
Title:       "Backported R5 Subscription Content Code System"
Description: "Codes to represent how much resource content to send in the notification payload."
* insert StructureJurisdiction
* ^caseSensitive  = true
* ^experimental   = false
* #empty         "Empty"         "No resource content is transacted in the notification payload."
* #id-only       "Id Only"       "Only the resource id is transacted in the notification payload."
* #full-resource "Full Resource" "The entire resource is transacted in the notification payload."

ValueSet:    BackportContentValueSet
Id:          backport-content-value-set
Title:       "Backported R5 Subscription Content Value Set"
Description: "Codes to represent how much resource content to send in the notification payload."
* insert StructureJurisdiction
* ^experimental   = false
* codes from system BackportContentCodeSystem

Extension:   BackportPayloadContent
Id:          backport-payload-content
Title:       "Backport R5 Subscription Payload Content Information"
Description: "How much of the resource content to deliver in the notification payload. The choices are an empty payload, only the resource id, or the full resource content."
* insert StructureJurisdiction
* ^context[0].type = #element
* ^context[0].expression = "Subscription.channel.payload"
* value[x] only code
* valueCode from BackportContentValueSet
* value[x] ^short      = "Notification content level"
* value[x] ^definition = "How much of the resource content to deliver in the notification payload. The choices are an empty payload, only the resource id, or the full resource content."
* value[x] ^comment    = "Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured."

Extension:   BackportHeartbeatPeriod
Id:          backport-heartbeat-period
Title:       "Backport R5 Subscription Heartbeat Period"
Description: "Interval in seconds to send 'heartbeat' notifications."
* insert StructureJurisdiction
* ^context[0].type = #element
* ^context[0].expression = "Subscription.channel"
* value[x] only unsignedInt
* value[x] ^short      = "Interval in seconds to send 'heartbeat' notification"
* value[x] ^definition = "If present, a 'hearbeat' notification (keepalive) is sent via this channel with an the interval period equal to this elements integer value in seconds. If not present, a heartbeat notification is not sent."

Extension:   BackportTimeout
Id:          backport-timeout
Title:       "Backport R5 Subscription Timeout"
Description: "Timeout in seconds to attempt notification delivery."
* insert StructureJurisdiction
* ^context[0].type = #element
* ^context[0].expression = "Subscription.channel"
* value[x] only unsignedInt
* value[x] ^short      = "Timeout in seconds to attempt notification delivery"
* value[x] ^definition = "If present, the maximum amount of time a server will allow before failing a notification attempt."

Extension:   BackportMaxCount
Id:          backport-max-count
Title:       "Backported R5 Subscription MaxCount"
Description: "Maximum number of triggering resources included in notification bundles."
* insert StructureJurisdiction
* ^context[0].type = #element
* ^context[0].expression = "Subscription.channel"
* value[x] only positiveInt
* value[x] ^short      = "Maximum number of triggering resources included in notification bundles"
* value[x] ^definition = "If present, the maximum number of triggering resources that will be included in a notification bundle (e.g., a server will not include more than this number of trigger resources in a single notification). Note that this is not a strict limit on the number of entries in a bundle, as dependent resources can be included."

Instance:    BackportSubscriptionExampleAdmission
InstanceOf:  BackportSubscription
Usage:       #example
Title:       "Backported Subscription: Admission"
Description: "R4/B Example of a topic-based 'admission' subscription."
* id       = "subscription-admission"
* status   = #active
* end      = "2020-12-31T12:00:00Z"
* reason   = "R4/B Example Topic-Based Subscription for Patient Admission"
* criteria = $admissionTopic
* criteria.extension[filterCriteria].valueString       = "Encounter?patient=Patient/123"
* channel.type                                         = #rest-hook
* channel.endpoint                                     = $webHookEndpoint
* channel.extension[heartbeatPeriod].valueUnsignedInt  = 86400
* channel.extension[timeout].valueUnsignedInt          = 60
* channel.extension[maxCount].valuePositiveInt         = 20
* channel.payload                                      = #application/fhir+json
* channel.payload.extension[content].valueCode         = #id-only
* extension[http://hl7.org/fhir/5.0/StructureDefinition/extension-Subscription.identifier].valueIdentifier[0].system = "http://example.org"
* extension[http://hl7.org/fhir/5.0/StructureDefinition/extension-Subscription.identifier].valueIdentifier[=].value = "abc"

Instance:    BackportSubscriptionExampleMultiResource
InstanceOf:  BackportSubscription
Usage:       #example
Title:       "Backported Subscription: Multi-Resource"
Description: "R4/B Example of a topic-based subscription with additional context resources."
* id       = "subscription-multi-resource"
* status   = #active
* end      = "2020-12-31T12:00:00Z"
* reason   = "R4/B Example Topic-Based Subscription for Multiple Resources"
* criteria = $admissionTopic
* criteria.extension[filterCriteria].valueString       = "Patient?id=Patient/123"
* criteria.extension[filterCriteria].valueString       = "Encounter?patient=Patient/123"
* criteria.extension[filterCriteria].valueString       = "Observation?subject=Patient/123"
* channel.type                                         = #rest-hook
* channel.endpoint                                     = $webHookEndpoint
* channel.extension[heartbeatPeriod].valueUnsignedInt  = 86400
* channel.extension[timeout].valueUnsignedInt          = 60
* channel.extension[maxCount].valuePositiveInt         = 20
* channel.payload                                      = #application/fhir+json
* channel.payload.extension[content].valueCode         = #id-only

Instance:    BackportSubscriptionExampleCustomChannel
InstanceOf:  BackportSubscription
Usage:       #example
Title:       "Backported Subscription: Custom Channel"
Description: "R4/B Example of a topic-based subscription using a custom channel."
* id       = "subscription-zulip"
* status   = #active
* end      = "2020-12-31T12:00:00Z"
* reason   = "R4/B Example Topic-Based Subscription for Patient Admission via Zulip"
* criteria = $admissionTopic
* criteria.extension[filterCriteria].valueString        = "Encounter?patient=Patient/123"
* channel.type                                          = #rest-hook
* channel.type.extension[customChannelType].valueCoding = http://example.org/subscription-channel-type#zulip "Zulip Notification Channel"
* channel.endpoint                                      = $zulipEndpoint
* channel.extension[heartbeatPeriod].valueUnsignedInt   = 86400
* channel.extension[timeout].valueUnsignedInt           = 60
* channel.extension[maxCount].valuePositiveInt          = 20
* channel.payload                                       = #application/fhir+json
* channel.payload.extension[content].valueCode          = #id-only

Instance: Subscription-topic
InstanceOf: SearchParameter
Title: "Search by Canonical URL used in a topic-based subscription"
Usage: #definition
* insert ResourceJurisdiction
* url = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic"
* name = "SubscriptionTopicSearchParameter"
* status = #draft
* experimental = true
* description = "This SearchParameter enables query of subscriptions by canonical topic url."
* code = #topic
* base[0] = #Subscription
* type = #string
* expression = "Subscription.criteria"
* xpath = "f:Subscription/f:criteria"
* xpathUsage = #normal

Instance: Subscription-filter-criteria
InstanceOf: SearchParameter
Title: "Search by the filtering criteria used to narrow a topic-based subscription topic"
Usage: #definition
* insert ResourceJurisdiction
* url = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-filter-criteria"
* name = "SubscriptionFilterCriteriaSearchParameter"
* status = #draft
* experimental = true
* description = "This SearchParameter enables query of subscriptions by filter criteria."
* code = #filter-criteria
* base[0] = #Subscription
* type = #string
* expression = "extension('http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-filter-criteria').value.ofType(string)"
* xpathUsage = #normal

Instance: Subscription-custom-channel
InstanceOf: SearchParameter
Title: "Search by custom channel types used for notifications"
Usage: #definition
* insert ResourceJurisdiction
* url = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-custom-channel"
* name = "SubscriptionCustomChannelSearchParameter"
* status = #draft
* experimental = true
* description = "This SearchParameter enables query of subscriptions by additional channel type."
* code = #custom-channel
* base[0] = #Subscription
* type = #token
* expression = "extension('http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-channel-type').value.ofType(Coding)"
* xpathUsage = #normal

Instance: Subscription-identifier
InstanceOf: SearchParameter
Title: "Search by identifier on Subscription"
Usage: #definition
* insert ResourceJurisdiction
* url = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-identifier"
* name = "SubscriptionIdentifierSearchParameter"
* status = #draft
* experimental = true
* description = "This SearchParameter enables query of subscriptions by identifier."
* code = #identifier
* base[0] = #Subscription
* type = #token
* expression = "extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-Subscription.identifier').value.ofType(Identifier)"
* xpathUsage = #normal

Instance: Subscription-payload-type
InstanceOf: SearchParameter
Title: "Search by payload types used for notifications"
Usage: #definition
* insert ResourceJurisdiction
* url = "http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-payload-type"
* name = "SubscriptionPayloadTypeSearchParameter"
* status = #draft
* experimental = true
* description = "This SearchParameter enables query of subscriptions by payload type."
* code = #payload-type
* base[0] = #Subscription
* type = #token
* expression = "extension('http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-payload-content').value.ofType(code)"
* xpathUsage = #normal


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/fsh/BackportTopics.fsh

Instance:    BackportSubscriptionTopicExampleEncounterCompleteR4B
InstanceOf:  SubscriptionTopic
Usage:       #example
Title:       "Backported SubscriptionTopic: R4B Encounter Complete"
Description: "R4B example of a subscription topic for completed encounters."
* id     = "r4b-encounter-complete"
* url    = "http://hl7.org/fhir/uv/subscriptions-backport/SubscriptionTopic/r4b-encounter-complete"
* status = #draft
* resourceTrigger[+].description = "Triggered when an encounter is completed."
* resourceTrigger[=].resource    = "Encounter"
* resourceTrigger[=].supportedInteraction[+] = #create
* resourceTrigger[=].supportedInteraction[+] = #update

* resourceTrigger[=].queryCriteria.previous        = "status:not=finished"
* resourceTrigger[=].queryCriteria.resultForCreate = #test-passes
* resourceTrigger[=].queryCriteria.current         = "status=finished"
* resourceTrigger[=].queryCriteria.resultForDelete = #test-fails
* resourceTrigger[=].queryCriteria.requireBoth     = true

* resourceTrigger[=].fhirPathCriteria = "(%previous.id.empty() or (%previous.status != 'finished')) and (%current.status = 'finished')"

* canFilterBy[+].description     = "Filter based on the subject of an encounter."
* canFilterBy[=].resource        = "Encounter"
* canFilterBy[=].filterParameter = "subject"

* canFilterBy[+].description     = "Filter based on the group membership of the subject of an encounter."
* canFilterBy[=].resource        = "Encounter"
* canFilterBy[=].filterParameter = "_in"

* canFilterBy[+].description     = "Filter based on the length of an encounter."
* canFilterBy[=].resource        = "Encounter"
* canFilterBy[=].filterParameter = "length"
* canFilterBy[=].modifier[+]     = #gt
* canFilterBy[=].modifier[+]     = #lt
* canFilterBy[=].modifier[+]     = #ge
* canFilterBy[=].modifier[+]     = #le

* notificationShape[+].resource = "Encounter"
* notificationShape[=].include[+] = "Encounter:patient&iterate=Patient.link"
* notificationShape[=].include[+] = "Encounter:practitioner"
* notificationShape[=].include[+] = "Encounter:service-provider"
* notificationShape[=].include[+] = "Encounter:account"
* notificationShape[=].include[+] = "Encounter:diagnosis"
* notificationShape[=].include[+] = "Encounter:observation"
* notificationShape[=].include[+] = "Encounter:location"
* notificationShape[=].extension[+].url = $relatedQueryExt
* notificationShape[=].extension[=].extension[+].url = "queryType"
* notificationShape[=].extension[=].extension[=].valueCoding = http://example.org/query-types#prescribed "Prescribed medications"
* notificationShape[=].extension[=].extension[+].url = "query"
* notificationShape[=].extension[=].extension[=].valueString = "http://example.org/fhir/Encounter/[id]/$prescribed-medications"


Alias: $fhir-types = http://hl7.org/fhir/fhir-types

Instance:   BackportSubscriptionTopicExampleEncounterCompleteR4
InstanceOf: Basic
Usage:      #example
Title:      "Backported SubscriptionTopic: R4 Encounter Complete"
Description: "R4 example of a basic-wrapped subscription topic for completed encounters."
* id = "r4-encounter-complete"
* modifierExtension[+].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.status"
* modifierExtension[=].valueCode = #draft
* extension[0].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.url"
* extension[=].valueUri = "http://hl7.org/fhir/uv/subscriptions-backport/SubscriptionTopic/r4-encounter-complete"
* extension[+].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.version"
* extension[=].valueString = "1.2.0"
* extension[+].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.name"
* extension[=].valueString = "R4 example of a basic-converted subscription topic for completed encounters."
* extension[+].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.title"
* extension[=].valueString = "Backported SubscriptionTopic: R4 Encounter Complete"
* extension[+].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.date"
* extension[=].valueDateTime = "2019-01-01"
* extension[+].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.description"
* extension[=].valueMarkdown = "R4 example of a subscription topic for completed encounters."
* extension[+].extension[0].url = "description"
* extension[=].extension[=].valueMarkdown = "Triggered when an encounter is completed."
* extension[=].extension[+].url = "resource"
* extension[=].extension[=].valueUri = "http://hl7.org/fhir/StructureDefinition/Encounter"
* extension[=].extension[+].url = "supportedInteraction"
* extension[=].extension[=].valueCode = #create
* extension[=].extension[+].url = "supportedInteraction"
* extension[=].extension[=].valueCode = #update
* extension[=].extension[+].extension[0].url = "previous"
* extension[=].extension[=].extension[=].valueString = "status:not=finished"
* extension[=].extension[=].extension[+].url = "resultForCreate"
* extension[=].extension[=].extension[=].valueCode = #test-passes
* extension[=].extension[=].extension[+].url = "current"
* extension[=].extension[=].extension[=].valueString = "status=finished"
* extension[=].extension[=].extension[+].url = "resultForDelete"
* extension[=].extension[=].extension[=].valueCode = #test-fails
* extension[=].extension[=].extension[+].url = "requireBoth"
* extension[=].extension[=].extension[=].valueBoolean = true
* extension[=].extension[=].url = "queryCriteria"
* extension[=].extension[+].url = "fhirPathCriteria"
* extension[=].extension[=].valueString = "(%previous.id.empty() or (%previous.status != 'finished')) and (%current.status = 'finished')"
* extension[=].url = "http://hl7.org/fhir/4.3/StructureDefinition/extension-SubscriptionTopic.resourceTrigger"
* extension[+].extension[0].url = "description"
* extension[=].extension[=].valueMarkdown = "Filter based on the subject of an encounter."
* extension[=].extension[+].url = "resource"
* extension[=].extension[=].valueUri = "Encounter"
* extension[=].extension[+].url = "filterParameter"
* extension[=].extension[=].valueString = "subject"
* extension[=].url = "http://hl7.org/fhir/4.3/StructureDefinition/extension-SubscriptionTopic.canFilterBy"
* extension[+].extension[0].url = "description"
* extension[=].extension[=].valueMarkdown = "Filter based on the group membership of the subject of an encounter."
* extension[=].extension[+].url = "resource"
* extension[=].extension[=].valueUri = "Encounter"
* extension[=].extension[+].url = "filterParameter"
* extension[=].extension[=].valueString = "_in"
* extension[=].url = "http://hl7.org/fhir/4.3/StructureDefinition/extension-SubscriptionTopic.canFilterBy"
// * extension[+].extension[0].url = "description"
// * extension[=].extension[=].valueMarkdown = "Filter based on the length of an encounter."
// * extension[=].extension[+].url = "resource"
// * extension[=].extension[=].valueUri = "Encounter"
// * extension[=].extension[+].url = "filterParameter"
// * extension[=].extension[=].valueString = "length"
// * extension[=].extension[+].url = "comparator"
// * extension[=].extension[=].valueCode = #gt
// * extension[=].extension[+].url = "comparator"
// * extension[=].extension[=].valueCode = #lt
// * extension[=].extension[+].url = "comparator"
// * extension[=].extension[=].valueCode = #ge
// * extension[=].extension[+].url = "comparator"
// * extension[=].extension[=].valueCode = #le
// * extension[=].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-SubscriptionTopic.canFilterBy"
* extension[+].extension[0].url = "resource"
* extension[=].extension[=].valueUri = "Encounter"
* extension[=].extension[+].url = "include"
* extension[=].extension[=].valueString = "Encounter:patient&iterate=Patient.link"
* extension[=].extension[+].url = "include"
* extension[=].extension[=].valueString = "Encounter:practitioner"
* extension[=].extension[+].url = "include"
* extension[=].extension[=].valueString = "Encounter:service-provider"
* extension[=].extension[+].url = "include"
* extension[=].extension[=].valueString = "Encounter:account"
* extension[=].extension[+].url = "include"
* extension[=].extension[=].valueString = "Encounter:diagnosis"
* extension[=].extension[+].url = "include"
* extension[=].extension[=].valueString = "Encounter:observation"
* extension[=].extension[+].url = "include"
* extension[=].extension[=].valueString = "Encounter:location"
* extension[=].extension[+].url = "revInclude"
* extension[=].extension[=].valueString = "Encounter:subject"
* extension[=].extension[+].url = $relatedQueryExt
* extension[=].extension[=].extension[+].url = "queryType"
* extension[=].extension[=].extension[=].valueCoding = http://example.org/query-types#prescribed "Prescribed medications"
* extension[=].extension[=].extension[+].url = "query"
* extension[=].extension[=].extension[=].valueString = "http://example.org/fhir/Encounter/[id]/$prescribed-medications"
* extension[=].url = "http://hl7.org/fhir/4.3/StructureDefinition/extension-SubscriptionTopic.notificationShape"
* code = $fhir-types#SubscriptionTopic

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/fsh/Capabilities.fsh

Alias: $exp = http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation

RuleSet: CapabilityCommon
* status              = #active
* date                = "2020-11-30"
* publisher           = "HL7 International - FHIR Infrastructure Work Group"
// * contact[0].telecom[0].system = #url
// * contact[0].telecom[0].value  = "https://hl7.org/Special/committees/fiwg/index.cfm"
* kind                = #requirements
* format[0]           = #xml
* format[1]           = #json
* implementationGuide[+] = "http://hl7.org/fhir/uv/subscriptions-backport/ImplementationGuide/hl7.fhir.uv.subscriptions-backport"

RuleSet: SupportResourceNoExp (resource)
* rest.resource[+].type = #{resource}

RuleSet: SupportResource (resource, expectation)
* rest.resource[+].type = #{resource}
* rest.resource[=].extension[0].url = $exp
* rest.resource[=].extension[0].valueCode = {expectation}

RuleSet: SupportProfileNoExp (profile)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].supportedProfile[+] = "{profile}"

RuleSet: SupportProfile (profile, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].supportedProfile[+] = "{profile}"
* rest.resource[=].supportedProfile[=].extension[0].url = $exp
* rest.resource[=].supportedProfile[=].extension[0].valueCode = {expectation}

RuleSet: SupportInteractionNoExp (interaction)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].interaction[+].code = {interaction}

RuleSet: SupportInteraction (interaction, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].interaction[+].code = {interaction}
* rest.resource[=].interaction[=].extension[0].url = $exp
* rest.resource[=].interaction[=].extension[0].valueCode = {expectation}

RuleSet: SupportSearchParamNoExp (name, canonical, type)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].searchParam[+].name = "{name}"
* rest.resource[=].searchParam[=].definition = "{canonical}"
* rest.resource[=].searchParam[=].type = {type}

RuleSet: SupportSearchParam (name, canonical, type, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].searchParam[+].name = "{name}"
* rest.resource[=].searchParam[=].definition = "{canonical}"
* rest.resource[=].searchParam[=].type = {type}
* rest.resource[=].searchParam[=].extension[0].url = $exp
* rest.resource[=].searchParam[=].extension[0].valueCode = {expectation}

RuleSet: SupportOperationNoExp (name, canonical)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].operation[+].name = "{name}"
* rest.resource[=].operation[=].definition = "{canonical}"

RuleSet: SupportOperation (name, canonical, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* rest.resource[=].operation[+].name = "{name}"
* rest.resource[=].operation[=].definition = "{canonical}"
* rest.resource[=].operation[=].extension[0].url = $exp
* rest.resource[=].operation[=].extension[0].valueCode = {expectation}

Instance:      CapabilitySubscriptionServer
InstanceOf:    CapabilityStatement
Usage:         #definition
Title:         "R4B Topic-Based Subscription Server Capability Statement"
Description:   "CapabilityStatement describing the minimal required capabilities of a FHIR Server supporting backported R5 Subscriptions in R4B."
* insert ResourceCommonR4B
* id            = "backport-subscription-server"
* name          = "BackportSubscriptionCapabilityStatement"
* url           = "http://hl7.org/fhir/uv/subscriptions-backport/CapabilityStatement/backport-subscription-server"
* description   = "CapabilityStatement describing the required and optional capabilities of a FHIR Server supporting backported R5 Subscriptions in R4B."
// * text.div      = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h3 id=\"resource-details\">FHIR RESTful Capabilities by Resource/Profile:</h3><h4>Summary</h4><table class=\"grid\"><thead><tr><th>Resource Type</th><th>Supported Profiles</th><th>Supported Searches</th><th>Supported <code>_includes</code></th><th>Supported <code>_revincludes</code></th><th>Supported Operations</th></tr></thead><tbody><tr><td><a href=\"#subscriptiontopic\">SubscriptionTopic</a></td><td>-</td><td>url, derived-or-self, resource, title, trigger-description</td><td>-</td><td>-</td><td>-</td></tr><tr><td><a href=\"#subscription\">Subscription</a></td><td><a href=\"StructureDefinition-backport-subscription.html\">Backported R5 Subscription</a></td><td>url, status</td><td>-</td><td>-</td><td>$status, $events, $get-ws-binding-token</td></tr></tbody></table><h4 class=\"no_toc\" id=\"subscriptiontopic\">SubscriptionTopic</h4><p>Conformance Expectation: <strong>SHALL</strong></p><p>Interactions:</p><ul><li>A Server <strong>SHALL</strong> be capable of returning a SubscriptionTopic resource using: <code class=\"highlighter-rouge\">GET [base]/SubscriptionTopic/[id]</code></li><li>A Server <strong>SHALL</strong> be capable of searching for SubscriptionTopic resources using: <code class=\"highlighter-rouge\">GET [base]/SubscriptionTopic/?[parameters]</code></li></ul><p>Search Parameter Summary:</p><table class=\"grid\"><thead><tr><th>Conformance</th><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><strong>SHALL</strong></td><td><a href=\"http://hl7.org/fhir/subscriptiontopic.html#search\">url</a></td><td>uri</td></tr><tr><td><strong>SHALL</strong></td><td><a href=\"http://hl7.org/fhir/subscriptiontopic.html#search\">derived-or-self</a></td><td>uri</td></tr><tr><td><strong>SHOULD</strong></td><td><a href=\"http://hl7.org/fhir/subscriptiontopic.html#search\">resource</a></td><td>uri</td></tr><tr><td><strong>SHOULD</strong></td><td><a href=\"http://hl7.org/fhir/subscriptiontopic.html#search\">title</a></td><td>string</td></tr><tr><td><strong>SHOULD</strong></td><td><a href=\"http://hl7.org/fhir/subscriptiontopic.html#search\">trigger-description</a></td><td>string</td></tr></tbody></table><hr/><h4 class=\"no_toc\" id=\"subscription\">Subscription</h4><p>Conformance Expectation: <strong>SHALL</strong></p><p>Supported Profiles:</p><ul><li><strong>SHALL</strong> support: <a href=\"StructureDefinition-backport-subscription.html\">Backported R5 Subscription</a></li></ul><p>Operation Summary:</p><ul><li><strong>SHALL</strong> support the <a href=\"OperationDefinition-backport-subscription-status.html\">$status</a> operation</li><li><strong>MAY</strong> support the <a href=\"OperationDefinition-backport-subscription-events.html\">$events</a> operation , <a href=\"OperationDefinition-backport-subscription-get-ws-binding-token.html\">$get-ws-binding-token</a> operation</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHALL</strong> be capable of returning a Subscription resource using: <code class=\"highlighter-rouge\">GET [base]/Subscription/[id]</code></li><li>A Server <strong>SHOULD</strong> be capable of creating a Subscription resource using either: <code class=\"highlighter-rouge\">POST [base]/Subscription</code> or <code class=\"highlighter-rouge\">PUT [base]/Subscription/[id]</code></li><li>A Server <strong>SHOULD</strong> be capable of modifying a Subscription resource using either: <code class=\"highlighter-rouge\">PUT [base]/Subscription/[id]</code> or <code class=\"highlighter-rouge\">PATCH [base]/Subscription/[id]</code></li><li>A Server <strong>SHOULD</strong> be capable of deleting a Subscription resource using: <code class=\"highlighter-rouge\">DELETE [base]/Subscription/[id]</code></li><li>A Server <strong>SHOULD</strong> be capable of searching for Subscription resources using: <code class=\"highlighter-rouge\">GET [base]/Subscription/?[parameters]</code></li></ul><p>Search Parameter Summary:</p><table class=\"grid\"><thead><tr><th>Conformance</th><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><strong>SHOULD</strong></td><td><a href=\"http://hl7.org/fhir/subscription.html#search\">url</a></td><td>uri</td></tr><tr><td><strong>SHOULD</strong></td><td><a href=\"http://hl7.org/fhir/subscription.html#search\">status</a></td><td>token</td></tr></tbody></table><hr/></div>"
// * text.status   = #generated
// * implementationGuide[+] = "http://hl7.org/fhir/uv/subscriptions-backport/ImplementationGuide/hl7.fhir.uv.subscriptions-backport"
* insert CapabilityCommon
* rest[+].mode  = #server
* rest[=].mode.extension[http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation].valueCode = #SHALL

* insert SupportResource(SubscriptionTopic, #SHALL)
* insert SupportInteraction(#read, #SHALL)
* insert SupportInteraction(#create, #MAY)
* insert SupportInteraction(#update, #MAY)
* insert SupportInteraction(#delete, #MAY)
* insert SupportSearchParam(url, http://hl7.org/fhir/SearchParameter/SubscriptionTopic-url, #uri, #SHALL)
* insert SupportSearchParam(derived-or-self, http://hl7.org/fhir/SearchParameter/SubscriptionTopic-derived-or-self, #uri, #SHALL)
* insert SupportSearchParam(resource, http://hl7.org/fhir/SearchParameter/SubscriptionTopic-resource, #uri, #SHOULD)
* insert SupportSearchParam(title, http://hl7.org/fhir/SearchParameter/SubscriptionTopic-title, #string, #SHOULD)
* insert SupportSearchParam(trigger-description, http://hl7.org/fhir/SearchParameter/SubscriptionTopic-trigger-description, #string, #SHOULD)

* insert SupportResource(Subscription, #SHALL)
* insert SupportProfile(http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription, #SHOULD)
* insert SupportInteraction(#read, #SHALL)
* insert SupportInteraction(#create, #SHOULD)
* insert SupportInteraction(#update, #SHOULD)
* insert SupportInteraction(#delete, #SHOULD)
* insert SupportSearchParam(url, http://hl7.org/fhir/SearchParameter/Subscription-url, #uri, #SHALL)
* insert SupportSearchParam(status, http://hl7.org/fhir/SearchParameter/Subscription-status, #token, #SHOULD)
* insert SupportOperation(status, http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status, #SHALL)
* insert SupportOperation(events, http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events, #MAY)
* insert SupportOperation(get-ws-binding-token, http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-get-ws-binding-token, #MAY)

Instance:      CapabilitySubscriptionServerR4
InstanceOf:    CapabilityStatement
Usage:         #definition
Title:         "R4 Topic-Based Subscription Server Capability Statement"
Description:   "CapabilityStatement describing the minimal required capabilities of a FHIR Server supporting backported R5 Subscriptions in R4."
* insert ResourceCommonR4
* id            = "backport-subscription-server-r4"
* name          = "BackportSubscriptionCapabilityStatementR4"
* url           = "http://hl7.org/fhir/uv/subscriptions-backport/CapabilityStatement/backport-subscription-server-r4"
* description   = "CapabilityStatement describing the required and optional capabilities of a FHIR Server supporting backported R5 Subscriptions in R4."
// * text.div      = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h3 id=\"resource-details\">FHIR RESTful Capabilities by Resource/Profile:</h3><h4>Summary</h4><table class=\"grid\"><thead><tr><th>Resource Type</th><th>Supported Profiles</th><th>Supported Searches</th><th>Supported <code>_includes</code></th><th>Supported <code>_revincludes</code></th><th>Supported Operations</th></tr></thead><tbody><tr><td><a href=\"#subscription\">Subscription</a></td><td><a href=\"StructureDefinition-backport-subscription.html\">Backported R5 Subscription</a></td><td>url, status</td><td>-</td><td>-</td><td>$status, $events, $get-ws-binding-token</td></tr></tbody></table><h4 class=\"no_toc\" id=\"subscription\">Subscription</h4><p>Conformance Expectation: <strong>SHALL</strong></p><p>Supported Profiles:</p><ul><li><strong>SHALL</strong> support: <a href=\"StructureDefinition-backport-subscription.html\">Backported R5 Subscription</a></li></ul><p>Operation Summary:</p><ul><li><strong>SHALL</strong> support the <a href=\"OperationDefinition-backport-subscription-status.html\">$status</a> operation</li><li><strong>MAY</strong> support the <a href=\"OperationDefinition-backport-subscription-events.html\">$events</a> operation , <a href=\"OperationDefinition-backport-subscription-get-ws-binding-token.html\">$get-ws-binding-token</a> operation</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHALL</strong> be capable of returning a Subscription resource using: <code class=\"highlighter-rouge\">GET [base]/Subscription/[id]</code></li><li>A Server <strong>SHOULD</strong> be capable of creating a Subscription resource using either: <code class=\"highlighter-rouge\">POST [base]/Subscription</code> or <code class=\"highlighter-rouge\">PUT [base]/Subscription/[id]</code></li><li>A Server <strong>SHOULD</strong> be capable of modifying a Subscription resource using either: <code class=\"highlighter-rouge\">PUT [base]/Subscription/[id]</code> or <code class=\"highlighter-rouge\">PATCH [base]/Subscription/[id]</code></li><li>A Server <strong>SHOULD</strong> be capable of deleting a Subscription resource using: <code class=\"highlighter-rouge\">DELETE [base]/Subscription/[id]</code></li><li>A Server <strong>SHOULD</strong> be capable of searching for Subscription resources using: <code class=\"highlighter-rouge\">GET [base]/Subscription/?[parameters]</code></li></ul><p>Search Parameter Summary:</p><table class=\"grid\"><thead><tr><th>Conformance</th><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><strong>SHOULD</strong></td><td><a href=\"http://hl7.org/fhir/subscription.html#search\">url</a></td><td>uri</td></tr><tr><td><strong>SHOULD</strong></td><td><a href=\"http://hl7.org/fhir/subscription.html#search\">status</a></td><td>token</td></tr></tbody></table><hr/></div>"
// * text.status   = #generated
// * implementationGuide[+] = "http://hl7.org/fhir/uv/subscriptions-backport/ImplementationGuide/hl7.fhir.uv.subscriptions-backport"
* insert CapabilityCommon
* rest[+].mode  = #server
* rest[=].mode.extension[http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation].valueCode = #SHALL

* insert SupportResource(Subscription, #SHALL)
* insert SupportProfile(http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription, #SHOULD)
* insert SupportInteraction(#read, #SHALL)
* insert SupportInteraction(#create, #SHOULD)
* insert SupportInteraction(#update, #SHOULD)
* insert SupportInteraction(#delete, #SHOULD)
* insert SupportSearchParam(url, http://hl7.org/fhir/SearchParameter/Subscription-url, #uri, #SHALL)
* insert SupportSearchParam(status, http://hl7.org/fhir/SearchParameter/Subscription-status, #token, #SHOULD)
* insert SupportOperation(status, http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status, #SHALL)
* insert SupportOperation(events, http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events, #MAY)
* insert SupportOperation(get-ws-binding-token, http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-get-ws-binding-token, #MAY)

* insert SupportResource(Basic, #SHOULD)
* insert SupportInteraction(#read, #SHOULD)
* insert SupportInteraction(#create, #MAY)
* insert SupportInteraction(#update, #MAY)
* insert SupportInteraction(#delete, #MAY)
* insert SupportSearchParam(code, http://hl7.org/fhir/SearchParameter/clinical-code, #token, #SHOULD)


Extension:   CapabilityStatementSubscriptionTopic
Id:          capabilitystatement-subscriptiontopic-canonical
Title:       "CapabilityStatement SubscriptionTopic Canonical"
Description: "Extension used to advertise supported SubscriptionTopic canonical URLs in a CapabilityStatement."
* insert StructureJurisdiction
* ^context[0].type = #element
* ^context[0].expression = "CapabilityStatement.rest.resource"
* value[x] only canonical

Instance:     CapabilityStatement-example-r4
InstanceOf:   CapabilityStatement
Usage:        #example
Title:        "R4 CapabilityStatement: Server Example"
Description:  "R4 example of a CapabilityStatement advertising support for topic-based subscriptions and a few topics."
* insert ResourceCommonR4
* id            = "r4-capabilitystatement-example-server"
* description   = "R4 example of a CapabilityStatement advertising support for topic-based subscriptions and a few topics."
* instantiates  = "http://hl7.org/fhir/uv/subscriptions-backport/CapabilityStatement/backport-subscription-server-r4"
// * implementationGuide[+] = "http://hl7.org/fhir/uv/subscriptions-backport/ImplementationGuide/hl7.fhir.uv.subscriptions-backport"
* insert CapabilityCommon
* rest[+].mode  = #server

* insert SupportResourceNoExp(Subscription)
* rest.resource[=].extension[+].url = "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/capabilitystatement-subscriptiontopic-canonical"
* rest.resource[=].extension[=].valueCanonical = "http://example.org/topics/patient-admission"
* rest.resource[=].extension[+].url = "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/capabilitystatement-subscriptiontopic-canonical"
* rest.resource[=].extension[=].valueCanonical = "http://example.org/topics/patient-discharge"

* insert SupportProfileNoExp(http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription)
* insert SupportInteractionNoExp(#read)
* insert SupportInteractionNoExp(#create)
* insert SupportInteractionNoExp(#update)
* insert SupportInteractionNoExp(#delete)
* insert SupportSearchParamNoExp(url, http://hl7.org/fhir/SearchParameter/Subscription-url, #uri)
* insert SupportSearchParamNoExp(status, http://hl7.org/fhir/SearchParameter/Subscription-status, #token)
* insert SupportOperationNoExp(status, http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status)
* insert SupportOperationNoExp(events, http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-events)
* insert SupportOperationNoExp(get-ws-binding-token, http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-get-ws-binding-token)

* insert SupportResourceNoExp(Patient)
* insert SupportInteractionNoExp(#read)
* insert SupportInteractionNoExp(#create)
* insert SupportInteractionNoExp(#update)
* insert SupportInteractionNoExp(#delete)

* insert SupportResourceNoExp(Encounter)
* insert SupportInteractionNoExp(#read)
* insert SupportInteractionNoExp(#create)
* insert SupportInteractionNoExp(#update)
* insert SupportInteractionNoExp(#delete)

* insert SupportResourceNoExp(Observation)
* insert SupportInteractionNoExp(#read)
* insert SupportInteractionNoExp(#create)
* insert SupportInteractionNoExp(#update)
* insert SupportInteractionNoExp(#delete)

* insert SupportResourceNoExp(Basic)
* insert SupportInteractionNoExp(#read)
* insert SupportInteractionNoExp(#create)
* insert SupportInteractionNoExp(#update)
* insert SupportInteractionNoExp(#delete)
* insert SupportSearchParam(code, http://hl7.org/fhir/SearchParameter/clinical-code, #token, #SHOULD)


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/fsh/Common.fsh

Alias: $admissionTopic = http://hl7.org/SubscriptionTopic/admission
Alias: $admissionSub = https://example.org/fhir/Subscription/admission
Alias: $admissionSubStatus = https://example.org/fhir/Subscription/admission/$status

Alias: $webHookEndpoint = https://example.org/Endpoints/d7dcc004-808d-452b-8030-3a3a13cd871d
Alias: $zulipEndpoint = https://example.org/Endpoints/ZulipForwarder

Alias: $authorizationHintExt = http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/notification-authorization-hint

Alias: $relatedQueryExt = http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-related-query


RuleSet: StructureJurisdiction
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001

RuleSet: StructureCommonR4
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
// * ^fhirVersion = #4.0.1

RuleSet: StructureCommonR4B
* ^jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
// * ^fhirVersion = #4.3.0

RuleSet: ResourceJurisdiction
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001

RuleSet: ResourceCommonR4
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* fhirVersion = #4.0.1

RuleSet: ResourceCommonR4B
* jurisdiction = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* fhirVersion = #4.3.0


// The path is either the name of a resource or path to an element
RuleSet: ExtensionContext(path)
* ^context[+].type = #element
* ^context[=].expression = "{path}"

// The strings defined for short and definition should not be quoted, and any comma must be escaped with a backslash.
RuleSet: ExtensionDefinition(path, short, definition)
* extension[{path}] ^short = {short}
* extension[{path}] ^definition = {definition}


// Patient for use in notifications
Alias: $notificationPatient    = https://example.org/fhir/Patient/1599eb66-431a-447c-a3de-6897fe9ae9a1
Alias: $notificationPatientId  = 1599eb66-431a-447c-a3de-6897fe9ae9a1

Instance:    BackportNotificationPatient
InstanceOf:  Patient
Usage:       #inline
* id                = "1599eb66-431a-447c-a3de-6897fe9ae9a1"
* active            = true
* name[+].use       = #usual
* name[=].text      = "Example Patient"
* name[=].family    = "Patient"
* name[=].given[0]  = "Example"


// Encounter for use in notifications
Alias: $notificationEncounter1   = https://example.org/fhir/Encounter/86009987-eabe-42bf-8c02-b112b18cb616
Alias: $notificationEncounter1Id = 86009987-eabe-42bf-8c02-b112b18cb616

Instance:    BackportNotificationEncounter
InstanceOf:  Encounter
Usage:       #inline
* id            = "86009987-eabe-42bf-8c02-b112b18cb616"
* status        = #in-progress
* class         = http://terminology.hl7.org/CodeSystem/v3-ActCode#VR
* subject.reference = $notificationPatient
* subject.display   = "Example Patient"

// Operation common definitions
RuleSet:       OperationCommon
* jurisdiction        = http://unstats.un.org/unsd/methods/m49/m49.htm#001
* status              = #active
* date                = "2020-11-30"
* publisher           = "HL7 International - FHIR Infrastructure Work Group"
// * contact[0].telecom[0].system = #url
// * contact[0].telecom[0].value  = "https://hl7.org/Special/committees/fiwg/index.cfm"
* affectsState        = false
* version             = "0.1.1"
* kind                = #operation
* extension[0].url          = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* extension[0].valueInteger = 0
* extension[1].url          = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension[1].valueCode    = #trial-use


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/fsh/Extensions.fsh

Extension:   BackportRelatedQuery
Id:          backport-related-query
Title:       "Related query information"
Description: "Combination of coded information and query for information related to a notification event."
* insert StructureJurisdiction
* insert ExtensionContext(SubscriptionStatus.notificationEvent)
* insert ExtensionContext(SubscriptionTopic.notificationShape)
* insert ExtensionContext(Basic.extension)
// * insert ExtensionContext(Element)
* extension contains
    queryType 0..1 MS and
    query 1..1 MS
* extension[queryType] ^short = "Type of query."
* extension[queryType] ^definition = "Coded value used to describe the type of information this query can be used to retrieve."
* extension[queryType].value[x] only Coding
* extension[query] ^short = "URL for a query."
* extension[query] ^definition = "URL used via HTTP GET to perform the query."
* extension[query].value[x] only string


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/fsh/Operations.fsh

Instance:      backport-subscription-events
InstanceOf:    OperationDefinition
Usage:         #definition
Title:         "Subscription Events Operation"
Description:   "This operation is used to return historical events in the backported R5-Style Subscriptions."
* id            = "backport-subscription-events"
* name          = "R5SubscriptionEvents"
* description   = "This operation is used to search for and return notifications that have been previously triggered by a topic-based Subscription in R4."
* insert OperationCommon
* system        = false
* type          = false
* instance      = true
* code          = #events
* resource[0]   = #Subscription

* parameter[+].name          = #eventsSinceNumber
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "1"
* parameter[=].documentation = "The starting event number, inclusive of this event (lower bound)."
* parameter[=].type          = #string

* parameter[+].name          = #eventsUntilNumber
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "1"
* parameter[=].documentation = "The ending event number, inclusive of this event (upper bound)."
* parameter[=].type          = #string

* parameter[+].name          = #content
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "1"
* parameter[=].documentation = "Requested content style of returned data. Codes from backport-content-value-set (e.g., empty, id-only, full-resource). This is a hint to the server what a client would prefer, and MAY be ignored."
* parameter[=].type          = #code

* parameter[+].name          = #return
* parameter[=].use           = #out
* parameter[=].min           = 1
* parameter[=].max           = "1"
* parameter[=].documentation = "The operation returns a valid notification bundle, with the first entry being the subscription status information resource. The bundle type is \"history\"."
* parameter[=].type          = #Bundle


Instance:      backport-subscription-resend
InstanceOf:    OperationDefinition
Usage:         #definition
Title:         "Subscription Resend Operation"
Description:   "This operation is used to resend historical events in the backported R5-Style Subscriptions."
* id            = "backport-subscription-resend"
* name          = "SubscriptionResend"
* description   = "This operation is used to resend notifications that have been previously triggered by a topic-based Subscription in R4."
* insert OperationCommon
* system        = false
* type          = false
* instance      = true
* code          = #resend
* resource[0]   = #Subscription

* parameter[+].name          = #eventsSinceNumber
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "1"
* parameter[=].documentation = "The starting event number, inclusive of this event (lower bound)."
* parameter[=].type          = #string

* parameter[+].name          = #eventsUntilNumber
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "1"
* parameter[=].documentation = "The ending event number, inclusive of this event (upper bound)."
* parameter[=].type          = #string

* parameter[+].name          = #eventsSinceInstant
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "1"
* parameter[=].documentation = "The starting event date/time, inclusive of this instant (lower bound)."
* parameter[=].type          = #instant

* parameter[+].name          = #eventsUntilInstant
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "1"
* parameter[=].documentation = "The ending event date/time, inclusive of this instant (upper bound)."
* parameter[=].type          = #instant


* parameter[+].name          = #return
* parameter[=].use           = #out
* parameter[=].min           = 1
* parameter[=].max           = "1"
* parameter[=].documentation = "Outcome of this request."
* parameter[=].type          = #OperationOutcome



Instance:      backport-subscription-status
InstanceOf:    OperationDefinition
Usage:         #definition
Title:         "Subscription Status Operation"
Description:   "This operation is used to return the current status information about one or more backported R5-Style Subscriptions in R4."
* id            = "backport-subscription-status"
* name          = "R5SubscriptionStatus"
* description   = "This operation is used to return the current status information about one or more topic-based Subscriptions in R4."
* insert OperationCommon
* system        = false
* type          = true
* instance      = true
* code          = #status
* resource[0]   = #Subscription

* parameter[+].name          = #id
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "*"
* parameter[=].documentation = "At the Instance level, this parameter is ignored.  At the Resource level, one or more parameters containing a FHIR id for a Subscription to get status information for. In the absence of any specified ids, the server returns the status for all Subscriptions available to the caller. Multiple values are joined via OR (e.g., \"id1\" OR \"id2\")."
* parameter[=].type          = #id

* parameter[+].name          = #status
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "*"
* parameter[=].documentation = "At the Instance level, this parameter is ignored. At the Resource level, a Subscription status to filter by (e.g., \"active\"). In the absence of any specified status values, the server does not filter contents based on the status. Multiple values are joined via OR (e.g., \"error\" OR \"off\")."
* parameter[=].type          = #code

* parameter[+].name          = #return
* parameter[=].use           = #out
* parameter[=].min           = 1
* parameter[=].max           = "1"
* parameter[=].documentation = "The operation returns a bundle containing one or more subscription status resources, one per Subscription being queried. The Bundle type is \"searchset\"."
* parameter[=].type          = #Bundle


Instance:      backport-subscription-get-ws-binding-token
InstanceOf:    OperationDefinition
Usage:         #definition
Title:         "Get WS Binding Token for Subscription Operation"
Description:   "This operation is used to get a token for a websocket client to use in order to bind to one or more subscriptions."
* id            = "backport-subscription-get-ws-binding-token"
* name          = "R5SubscriptionGetWsBindingToken"
* description   = "This operation is used to get a token for a websocket client to use in order to bind to one or more subscriptions."
* insert OperationCommon
* system        = false
* type          = true
* instance      = true
* code          = #get-ws-binding-token
* resource[0]   = #Subscription

* parameter[+].name          = #id
* parameter[=].type          = #id
* parameter[=].use           = #in
* parameter[=].min           = 0
* parameter[=].max           = "*"
* parameter[=].documentation = "At the Instance level, this parameter is ignored. At the Resource level, one or more parameters containing a FHIR id for a Subscription to get a token for. In the absense of any specified ids, the server may either return a token for all Subscriptions available to the caller with a channel-type of websocket or fail the request."

* parameter[+].name          = #token
* parameter[=].type          = #string
* parameter[=].use           = #out
* parameter[=].min           = 1
* parameter[=].max           = "1"
* parameter[=].documentation = "An access token that a client may use to show authorization during a websocket connection."

* parameter[+].name          = #expiration
* parameter[=].type          = #dateTime
* parameter[=].use           = #out
* parameter[=].min           = 1
* parameter[=].max           = "1"
* parameter[=].documentation = "The date and time this token is valid until."

* parameter[+].name          = #subscription
* parameter[=].type          = #string
* parameter[=].use           = #out
* parameter[=].min           = 0
* parameter[=].max           = "*"
* parameter[=].documentation = "The subscriptions this token is valid for."

* parameter[+].name          = #websocket-url
* parameter[=].type          = #url
* parameter[=].use           = #out
* parameter[=].min           = 1
* parameter[=].max           = "1"
* parameter[=].documentation = "The URL the client should use to connect to Websockets."


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/channel-email.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 40
skinparam LifelineStrategy solid
autonumber

participant "FHIR Server\nREST API"     as S
participant "Client"                    as C
participant "Email Server\n(SMTP/S, Direct)" as E


group Negotiating a Subscription
  C->S: Create Subscription\n""channel.type: email""
else Without handshake
  S-->C: Success\n""Subscription.status: active""
  |||
else With handshake
  S-->C: Success\n""Subscription.status: requested""

  S->E: Message with verification, opt-in, opt-out, etc.
  return SMTP Success, e.g.:\n""250: OK""

  ...

  note right of S
    Server updates Subscription:
    ""Subscription.status: active""
  end note

end

group Email Subscription Processing
else Server sends heartbeat
    S->E: Message with readable content and attached Bundle:\n""            Bundle.type: history""\n""SubscriptionStatus.type: heartbeat""
    ...
else Server sends event-notification
    S->E: Message with readable content and attached Bundle:\n""            Bundle.type: history""\n""SubscriptionStatus.type: event-notification""
    ...
end

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/channel-messaging.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 40
skinparam LifelineStrategy solid
autonumber

participant "FHIR Server\nREST API"     as S
participant "Client"                    as C
participant "Client FHIR Server\nREST Endpoint" as E

group Subscription Negotiation
  C->S: Create Subscription\n""channel.type: message""
  return Success\n""Subscription.status: requested""

  S->>E: POST ""$process-message"" (handshake)\n""Bundle:""\n""  Bundle.type: message""\n""  entry[1]: Bundle: subscription-notification""\n""    SubscriptionStatus.type: handshake""
  return Success, e.g.:\n""200: OK""

  note right of S
    Server updates Subscription:
    ""Subscription.status: active""
  end note

end

group FHIR Messaging Subscription Processing
else Server sends heartbeat
  S->>E: POST ""$process-message"" (heartbeat)\n""Bundle:""\n""  Bundle.type: message""\n""  entry[1]: Bundle: subscription-notification""\n""    SubscriptionStatus.type: heartbeat""
  return Success, e.g.:\n""200: OK""
  ...
else Server sends event-notification
  S->>E: POST ""$process-message"" (event-notification)\n""Bundle:""\n""  Bundle.type: message""\n""  entry[1]: Bundle: subscription-notification""\n""    SubscriptionStatus.type: event-notification""
  return Success, e.g.:\n""200: OK""
  ...
end

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/channel-rest-hook.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 50
skinparam LifelineStrategy solid
autonumber

participant "FHIR Server\nREST API"     as S
participant "Client"                    as C
participant "Client Endpoint\n(HTTP/S)" as E

group Subscription Negotiation
  C->>S: Create Subscription\n""channel.type: rest-hook""
  return Success\n""Subscription.status: requested""

  S->>E: HTTP POST - Handshake\n""Bundle:""\n""            Bundle.type: history""\n""SubscriptionStatus.type: handshake""
  return HTTP Success, e.g.:\n""200: OK""

  note right of S
    Server updates Subscription:
    ""Subscription.status: active""
  end note
end

group REST Subscription Processing
else Server sends heartbeat
  S->>E: HTTP POST - Heartbeat\n""Bundle:""\n""            Bundle.type: history""\n""SubscriptionStatus.type: heartbeat""
  return HTTP Success, e.g.:\n""200: OK""
  ...
else Server sends event-notification
  S->>E: HTTP POST - Notification\n""Bundle:""\n""            Bundle.type: history""\n""SubscriptionStatus.type: event-notification""
  return HTTP Success, e.g.:\n""200: OK""
  ...
end

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/channel-websocket.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 40
skinparam LifelineStrategy solid
autonumber

participant "FHIR Server\nREST API"     as S
participant "Client"                    as C
participant "FHIR Server\nWebsocket Endpoint" as E

group Subscription Negotiation
  C->S: Create Subscription\n""channel.type: websocket""
  return Success\n""Subscription.status: active""
end

group Websocket Subscription Processing
else Client binds via initial token
  C->S: FHIR Operation:\n"".../Subscription/example/$get-ws-binding-token""
  return FHIR Parameters:\n""        token: token-abc""\n""   expiration: some-future-date-time""\n""websocket-url: wss://example.org/fhirR4ws""

  C->E: Connect\n""wss://example.org/fhirR4ws""

  C->E: ""bind-with-token token-abc""
  return Bundle:\n""            Bundle.type: history""\n""SubscriptionStatus.type: handshake""

else Sever sends heartbeat
    E->C: Bundle:\n""            Bundle.type: history""\n""SubscriptionStatus.type: heartbeat""
    ...
else Server sends event-notification
    E->C: Bundle:\n""            Bundle.type: history""\n""SubscriptionStatus.type: event-notification""
    ...
else Token is expiring soon
    C->S: FHIR Operation:\n"".../Subscription/example/$get-ws-binding-token""
    return FHIR Parameters:\n""        token: token-def""\n""   expiration: another-future-date-time""\n""websocket-url: wss://example.org/fhirR4ws""

    C o->o E: Client checks the url and establishes\na new connection if necessary

    C->E: ""bind-with-token: token-def""
    return Bundle:\n""            Bundle.type: history""\n""SubscriptionStatus.type: handshake""
    ...
else Either system may end a session
  C x-x E: Disconnect
end

deactivate E

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/error-missing-event.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 50
skinparam LifelineStrategy solid

participant "FHIR Server" as S
participant Subscriber    as C

group Normal Operation
  ...
  S -> C: Notification ""Bundle""\n""type: **event-notification**""\n""eventsSinceSubscriptionStart:  **21**""\n""notificationEvent.eventNumber: **21**""\n
  return ""200: OK""
  ...
  S -> C: Notification ""Bundle""\n""type: **event-notification**""\n""eventsSinceSubscriptionStart:  **23**""\n""notificationEvent.eventNumber: **23**""\n
  return ""200: OK""
  ...
end

note left of C
  Subscriber determines event **22** is missing
end note

group Subscriber Recovery Process
  ...
  C <-> S: FHIR API calls...
  ...
end

group Re-enable Subscription
  C -> S:Update Subscription\n""status: requested""
  return ""200: OK""
  ...
end

group Resume Normal Operation
  S -> C: Notification ""Bundle""\n""type: **event-notification**""\n""eventsSinceSubscriptionStart:  **24**""\n""notificationEvent.eventNumber: **24**""\n
  return ""200: OK""
  ...
end
@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/error-no-communication.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 50
skinparam LifelineStrategy solid

participant "FHIR Server" as S
participant Subscriber    as C

group Normal Operation
  ...
  S -> C: Notification ""Bundle""\n""type: **event-notification**""\n""eventsSinceSubscriptionStart:  **25**""\n""notificationEvent.eventNumber: **25**""\n
  return ""200: OK""
  ...
  S -> C: Notification ""Bundle""\n""type: **event-notification**""\n""eventsSinceSubscriptionStart:  **26**""\n""notificationEvent.eventNumber: **26**""\n
  return ""200: OK""
  ...
end

note left of C
  Heartbeat timeout elapses
  without a notification...
end note

group Check Subscription Status
  C -> S: ""GET .../Subscription/<id>/$status""
  return ""SubscriptionStatus""\n""status: **error**""\n""eventsSinceSubscriptionStart: **28**""
end

group Recovery Process
  ...
  C <-> S: FHIR API calls...
  ...
end

group Re-enable Subscription
  C -> S:Update Subscription\n""status: requested""
  return ""200: OK""
  ...
end

group Resume Normal Operation
  S -> C: Notification ""Bundle""\n""type: **event-notification**""\n""eventsSinceSubscriptionStart:  **29**""\n""notificationEvent.eventNumber: **29**""\n
  return ""200: OK""
  ...
end
@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/payload-comparison.plantuml

@startuml
!pragma teoz true
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 30
skinparam LifelineStrategy solid

participant "FHIR Server"   as S
participant "Empty"  as E
participant "ID Only"       as I
participant "Full Resource" as F

S -> : Send ""event-notification""

  ?-> E : ""empty""
& ?-> I : ""id-only""
& ?-> F : ""full-resource""

  E --> S: HTTP 200: OK
& I --> S:
& F --> S:

  E -> S: FHIR Search 
  S --> E: Query Results

  E -> S: Fetch FHIR Resources
& I -> S:

  S --> E: Return FHIR Resources
& S --> I:

  note over S: Additional Requests:
& note over E: **2**
& note over I: **1**
& note over F: **0**


@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/publish.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 40
skinparam LifelineStrategy solid
autonumber

participant "Originator 1" as O1
participant "Originator 2" as O2
participant "FHIR Facade"  as S
participant "External Endpoint" as E

E -> S : Subscribe:\n""rest-hook""\n""http://example.com/endpoint""
return OK

O1 -> S : POST ""$publish""\n""event-notification: abc""
return OK

S -> E : POST: ""http://example.com/endpoint""\n""event-notification""
return OK

O2 -> S : POST ""$publish""\n""event-notification: abc""
return OK

S -> E : POST: ""http://example.com/endpoint""\n""event-notification""
return OK

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/time-shifted-services.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 50
skinparam LifelineStrategy solid

participant "Referring Facility (A)" as A
participant "Servicing Facility (B)" as B

A -> B: Patient needs service
return Will Schedule

note left of B
  Contacting Patient...
  Scheduling...
  ...Service is imminent
end note

B -> A: Authorization Request
return Authorized

...

B -> A: Queries for information
return Current Patient Data

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/unstandardized-query.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 50
skinparam LifelineStrategy solid

participant "Referring Facility (A)" as A
participant "Servicing Facility (B)" as B

A -> B: Patient needs service
return OK, Need data

...

B -> A: ""GET /Coverage/$for-patient-referral""\n""  ?patient=123""\n""  &service-type=http://example.org/CodeSystem/service-type|XYZ""
return Insurance Coverage Information

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/workflow-overview.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 50
skinparam LifelineStrategy solid

split
  |Server|
  -[hidden]->
  :Implement Topics;
  :Subscription Negotiation;
  :Send Notifications;
  kill
split again
  |Client|
  -[hidden]->
  :Topic Discovery;
  :Request a Subscription;
  :Receive Notifications;
  kill
end split

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/workflow-r4.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 50
skinparam LifelineStrategy solid
autonumber

participant "FHIR R4 Server" as S
participant Client as C

group Server Implementation
  S -\\ S: Implement core Subscription functionality
  |||
  S -\\ S: Implement topics and optionally advertise
end

group Client Topic Discovery
else CapabilityStatement with Extension Discovery
  C->>S: Search for a supported ""SubscriptionTopic""\ncanonical URL in a ""CapabilityStatement"", e.g.:\n""GET .../CapabilityStatement""
  return ""CapabilityStatement"" with topic canonical URLs\nin ""rest.resource[subscription].extension[""\n"".../capabilitystatement-subscriptiontopic-canonical]""

else CapabilityStatement with Instantiates Discovery
  C->>S: Search for a known IG ""CapabilityStatement""\ninstantiated in a server ""CapabilityStatement""
  return ""CapabilityStatement"" with IG capability canonical URLs\nin the ""instantiates"" element

else CapabilityStatement with Implementation Guide Discovery
  C->>S: Search for a known IG canonical\nlisted in a server ""CapabilityStatement""
  return ""CapabilityStatement"" with IG canonical URLs\nin the ""implementationGuide"" element

  |||
end

group Client Topic Discovery
else Client Subscription Request
  create Endpoint as E
  C->E: Create, configure, or initialize\nthe necessary Endpoint
  C->>S: Create a Subscription, e.g.:\n""POST .../Subscription""
  |||
end

group Server Accepting or Rejecting a Subscription
else Valid Subscription, without Handshake
  S-->>C: Success: status = ""active""
  note right of S: Send notifications...
  ...
else Valid Subscription, with Handshake Success
  S-->>C: Success: status = ""requested""
  S->>E: Handshake
  E-->>S: Success, e.g.:\n""200: OK""
  note right of S
    Update Subscription:
    ""Subscription.status: active""
  end note
  note right of S: Send notifications...
  ...
else Valid Subscription, with Handshake Failure
  S-->>C: Success: status = ""requested""
  S->>E: Handshake
  E-->>S: Failure, e.g.:\n""404: Not Found""
  note right of S
    Update Subscription:
    ""Subscription.status: error""
  end note
  ...
else Invalid Subscription
  S-->>C: Failure, e.g.:\n""400: Bad Request""
  note right of S
    No subscription was created
  end note
end

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/images-source/workflow-r4b.plantuml

@startuml
skinparam NoteTextAlignment left
skinparam Padding 2
skinparam ParticipantPadding 50
skinparam LifelineStrategy solid
autonumber

participant "FHIR R4B Server" as S
participant Client as C

group Server Implementation
  S -\\ S: Implement core Subscription functionality
  |||
  S -\\ S: Implement topics and advertise via\n""SubscriptionTopic"" resources
end

group Client Implementation
else Client Topic Discovery
  C->>S: Search for a supported ""SubscriptionTopic"", e.g.:\n""GET .../SubscriptionTopic?[params]""
  return ""Bundle"" with matching\n""SubscriptionTopic"" resources

else Client Subscription Request
  create Endpoint as E
  C->E: Create, configure, or initialize\nthe necessary Endpoint
  C->>S: Create a Subscription, e.g.:\n""POST .../Subscription""
  |||
end

group Server Accepting or Rejecting a Subscription
else Valid Subscription, without Handshake
  S-->>C: Success: status = ""active""
  note right of S: Send notifications...
  ...
else Valid Subscription, with Handshake Success
  S-->>C: Success: status = ""requested""
  S->>E: Handshake
  E-->>S: Success, e.g.:\n""200: OK""
  note right of S
    Update Subscription:
    ""Subscription.status: active""
  end note
  note right of S: Send notifications...
  ...
else Valid Subscription, with Handshake Failure
  S-->>C: Success: status = ""requested""
  S->>E: Handshake
  E-->>S: Failure, e.g.:\n""404: Not Found""
  note right of S
    Update Subscription:
    ""Subscription.status: error""
  end note
  ...
else Invalid Subscription
  S-->>C: Failure, e.g.:\n""400: Bad Request""
  note right of S
    No subscription was created
  end note
end

@enduml

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/actors.md


Subscriptions are operations which typically involve two or three actors:

Any FHIR application may support the use of Subscriptions. In this documentation:

### Server

**Server** refers to the FHIR application or applications acting as the subscription provider. This includes the responsibilities of implementing one or more `SubscriptionTopics`, managing `Subscriptions`, and sending notifications.

Note that when using subscriptions, the FHIR server combines the roles of publisher and information distributer. Some arrangements of the 'publish and subscribe' pattern describe separate agents for the two roles. This specification makes no recommendations towards the internal architecture of server implementations.

### Client

**Client** refers to the FHIR application or applications acting as subscriber. This includes the responsibilities of acting as a FHIR client (to create a Subscription) and receiving notifications on a supported channel.

### Endpoint

**Endpoint** refers to the portion of the **client** which is responsible for receiving notifications, if applicable.  For example, when using the `rest-hook` channel type the endpoint is the HTTP server listening for notifications.

Note that while part of the client, it is often useful to refer to the endpoint separately for clarity.  This specification makes no recommendations towards the internal architecture of client implementations.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-empty-intro.md


This Bundle provides an example of an `empty` notification.  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-empty-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

Since this is an `empty` notification and does not include additional entries, no additional constraints are imposed by `Bundle` requirements.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-error-intro.md


This Bundle provides an example of an `error` notification.  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.) in the event of a processing error on the server.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-error-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

Since this is an `error` notification and does not include additional entries, no additional constraints are imposed by `Bundle` requirements.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-full-resource-intro.md


This Bundle provides an example of an `full-resource` notification.  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-full-resource-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

For additional entries, the request SHOULD be filled out in a way that makes sense given the subscription (e.g., a `POST` or `PUT` operation on the resource).  However, a server MAY choose to simply include a `GET` to the relevant resource instead.


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-id-only-intro.md


This Bundle provides an example of an `id-only` notification.  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-id-only-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

For additional entries, the request SHOULD be filled out in a way that makes sense given the subscription (e.g., a `POST` or `PUT` operation on the resource).  However, a server MAY choose to simply include a `GET` to the relevant resource instead.


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-multi-resource-intro.md


This Bundle provides an example of an `full-resource` notification that includes a related resource (e.g., the triggering resource of `Encounter` and the related `Patient`).  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4-notification-multi-resource-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

For additional entries, the request SHOULD be filled out in a way that makes sense given the subscription (e.g., a `POST` or `PUT` operation on the resource).  However, a server MAY choose to simply include a `GET` to the relevant resource instead.


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-empty-intro.md


This Bundle provides an example of an `empty` notification.  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-empty-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

Since this is an `empty` notification and does not include additional entries, no additional constraints are imposed by `Bundle` requirements.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-error-intro.md


This Bundle provides an example of an `error` notification.  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.) in the event of a processing error on the server.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-error-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

Since this is an `error` notification and does not include additional entries, no additional constraints are imposed by `Bundle` requirements.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-full-resource-intro.md


This Bundle provides an example of an `full-resource` notification.  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-full-resource-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

For additional entries, the request SHOULD be filled out in a way that makes sense given the subscription (e.g., a `POST` or `PUT` operation on the resource).  However, a server MAY choose to simply include a `GET` to the relevant resource instead.


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-id-only-intro.md


This Bundle provides an example of an `id-only` notification.  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-id-only-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

For additional entries, the request SHOULD be filled out in a way that makes sense given the subscription (e.g., a `POST` or `PUT` operation on the resource).  However, a server MAY choose to simply include a `GET` to the relevant resource instead.


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-multi-resource-intro.md


This Bundle provides an example of an `full-resource` notification that includes a related resource (e.g., the triggering resource of `Encounter` and the related `Patient`).  This `Bundle` is typical of what may be posted to a notification endpoint (e.g., a listening HTTP server, etc.).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/Bundle-r4b-notification-multi-resource-notes.md


In order to satisfy the requirements of a `history` Bundle (specifically `bdl-3` and `bdl-4`), note that `Bundle.entry.request` must exist.

For the status resource (`entry[0]`), the request is filled out to match a request to the `$status` operation.

For additional entries, the request SHOULD be filled out in a way that makes sense given the subscription (e.g., a `POST` or `PUT` operation on the resource).  However, a server MAY choose to simply include a `GET` to the relevant resource instead.


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/CapabilityStatement-backport-subscription-server-intro.md


This `CapabilityStatement` describes the expected capabilities of a FHIR R4B server supporting this Implementation Guide.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/CapabilityStatement-backport-subscription-server-r4-intro.md

This `CapabilityStatement` describes the expected capabilities of a FHIR R4 server supporting this Implementation Guide.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/channels.md


In FHIR R5, there are four channel types which were common enough to be defined in the specification, along with the ability to define additional channel types externally.  In this Implementation Guide, we define those same channel types and include the ability to define additional channel by other implementations or Implementation Guides.

#### Deciding On Channel Type

Both the FHIR specification and this guide rely on the definitions of a reduced set of channel types.  While the specification allows for additional channel type definitions, the included set attempts to cover the majority of common use cases.  Below is some guidance for implementers to consider when selecting a channel type.

##### REST-Hook

The FHIR standard makes extensive use of the RESTful model.  Given the popularity of REST and widespread adoption, most implementers should assume REST-hook as the 'default' channel type.  In general, REST-based systems are well-supported (e.g., tooling, infrastructure, documentation, etc.), and will present the lowest bar for implementation.

##### Websocket

Websockets are unique in the pre-defined channel types in being the only channel that does not require the client to have an endpoint.  Due to this property, the websocket channel is very useful for clients where creating an endpoint would be difficult or impossible (e.g., mobile clients, web-based clients, etc.).

##### Email

The Email channel is the only channel that could contest REST in popularity of non-FHIR implementations.  That said, Email communication is often high-latency and is typically used for communication to individuals - not applications.  Email channels are particularly useful in the context of these non-application use cases, such as public health notifications.  For example, if a public health agency does not have the ability or desire to build a custom RESTful solution (e.g., creating and maintaining an endpoint to receive notifications, as well as software to consume those notifications), it is straightforward to map notifications to email addresses or aliases.

##### FHIR Messaging

FHIR Messaging is a mechanism defined to allow for non-RESTful communication between FHIR servers and clients.  One common use case is when connectivity is an issue (e.g., remote sites that batch all communications when connections are available).  This channel defines how to integrate topic-based subscriptions with the FHIR Messaging model.

##### Custom Channels

For use cases that are not well-met by any of the predefined channels, the Subscriptions Framework allows for custom channel definitions.  Some examples of scenarios where custom channels may be applicable include:
* requirements for reliable (guaranteed) delivery (e.g., message queues)
* implementations using other communication protocols (e.g., protocols specific to a cloud-based provider)
* implementations using a non-standard serialization format

#### REST-Hook

To receive notifications via HTTP/S POST, a client should request a subscription with the channel type of `rest-hook` and set the endpoint to the appropriate client URL. Note that this URL must be accessible by the hosting server.

To convey an event notification, the server POSTs a `Bundle` to the client's nominated endpoint URL per the format requests in the Subscription:
* The `content-type` of the POST SHALL match the MIME type on the Subscription ([Subscription.channel.payload](http://hl7.org/fhir/subscription-definitions.html#Subscription.channel.payload)).
* Each [Subscription.channel.header](http://hl7.org/fhir/subscription-definitions.html#Subscription.channel.header) value SHALL be conveyed as an HTTP request header.
* The bundle SHALL comply with the [Backported R5 Notification Bundle Profile](StructureDefinition-backport-subscription-notification.html).

When a `Subscription` is created for a REST Hook channel type, the server SHALL set initial status to `requested`, pending verification of the nominated endpoint URL. After a successful `handshake` notification has been sent and accepted, the server SHALL update the status to `active`. Any errors in the initial `handshake` SHALL result in the status being changed to `error`.

An example workflow for establishing a <code>rest-hook</code> subscription is shown below.

<figure>
  {% include channel-rest-hook.svg %}
  <figcaption>Diagram showing a possible workflow for rest-hook subscriptions</figcaption>
</figure>


1. Client creates a `Subscription` with the `channel.type` set to `rest-hook`.
1. Server responds with a success code and creates the subscription with a state of `requested`.
1. Server performs an HTTP POST to the requested endpoint with a `handshake` notification.
1. Client Endpoint accepts the POST and returns a success HTTP code (e.g., `200`).
1. Server may send notifications of type `heartbeat` at any time.
1. Endpoints should respond with appropriate HTTP status codes (e.g., `200`).
1. Server may send notifications of type `event-notification` at any time.
1. Endpoints should respond with appropriate HTTP status codes (e.g., `200`).

##### Security Notes

HTTP is neither a secure nor an encrypted channel, nor does it provide endpoint verification. It is strongly recommended that implementations refuse requests to send notifications to URLs using the HTTP protocol (use HTTPS instead).

#### Websockets 

While the primary interface for FHIR servers is the FHIR REST API, notifications need not occur via REST. Indeed, some subscribers may be unable to expose an outward-facing HTTP server to receive triggered notifications. For example, a pure client-side Web app or mobile app may want to subscribe to a data feed. This can be accomplished using a `websocket` notification channel.

A client can declare its intention to receive notifications via Web Sockets by requesting a subscription with the channel type of `websocket`.

An example workflow for receiving notifications via websockets is shown below:

<figure>
  {% include channel-websocket.svg %}
  <figcaption>Diagram showing a possible workflow for websocket subscriptions</figcaption>
</figure>

1. Client creates a Subscription with the `channel.type` set to `websocket`.
1. Server responds with a success code and creates the subscription.
1. Client requests a websocket binding token, by invoking the `$get-ws-binding-token` operation via REST. Note: this call is intended to be repeated as necessary (e.g., prior to a token expiring, a client should request a new one).
1. Server returns `Parameters` with a `token`,`expiration`, and `websocket-url`.
1. Client connects to the server via websockets, via the returned `websocket-url` (`wss://` preferred).
1. Client sends a `bind-with-token` message via websockets, with the token provided by the server. Note: this operation can be repeated concurrently for multiple subscriptions, and serially for continued operation over a single websocket connection.
1. Server sends one or more `handshake` messages via websockets (one per Subscription included in the token). Note: some servers may additionally send one or more `event-notification` messages at this time (e.g., all messages since last connected, last 'n' messages, etc.). Clients are expected to handle either flow.
1. Server may send notifications of type `heartbeat` at any time.
1. Server may send notifications of type `event-notification` at any time.
1. If the token is expiring soon and the Client wishes to continue receiving notifications, it should invoke the `$get-ws-binding-token` operation via REST.
1. Server returns `Parameters` with a new `token`, `expiration`, and `websocket-url`.
1. If the `websocket-url` is different from the existing connection, the Client establishes a new connection to the Client Endpoint.
1. Client sends a `bind-with-token` message via websockets, with the token provided by the server. Note: this operation can be repeated concurrently for multiple subscriptions, and serially for continued operation over a single websocket connection.
1. Server sends one or more `handshake` messages via websockets (one per Subscription included in the token). Note: some servers may additionally send one or more `event-notification` messages at this time (e.g., all messages since last connected, last 'n' messages, etc.). Clients are expected to handle either flow.
1. Either the server or the client may close the websocket connection.

Notes:

* Notifications sent from the server SHALL be in the MIME Type specified by the [Subscription.channel.payload](http://hl7.org/fhir/subscription-definitions.html#Subscription.channel.payload), however, if notifications are requested for multiple subscriptions with different MIME types, the server MAY choose to send all notifications in a single MIME type.
* Notifications SHALL conform to the content level specified by the `http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-payload-content` extension.
* When receiving notifications, a connected websocket client has no responsibilities beyond reading the message (e.g., there is no acknowledgement message).

##### Security Notes

WebSocket security poses several challenges specific to the channel. When implementing websockets for notifications, please keep in mind the following list of some areas of concern:

* Authentication of WebSockets is not generically interoperable with JWT or other 'Authentication header' protocols - the [JavaScript WebSocket API](https://html.spec.whatwg.org/multipage/web-sockets.html#network) does not include the ability to include them.
* Given client limitations on concurrent WebSocket connections (commonly 6), it is recommended that a single connection be able to authenticate to multiple Subscription resources.
* Unlike HTTP/S requests, WebSockets can be long-lived. Because of this, the case of revoking access of an active connection must be considered.

#### Email

While the primary interface for FHIR servers is the FHIR REST API, notifications need not occur via REST. Indeed, some subscribers may be unable to maintain an outward-facing HTTP server to receive triggered notifications. For example, a public health organization may want to be notified of outbreaks of various illnesses. This can be accomplished using an `email` notification channel.

A client can declare its intention to receive notifications via Email by requesting a subscription with the channel type of `email` and setting the endpoint to the appropriate email URI (e.g., `mailto:public_health_notifications@example.org`).

The server will send a new message each time a notification should be sent (e.g., per event or per batch). The server will create a message based on the values present in the [Subscription.channel.payload](http://hl7.org/fhir/subscription-definitions.html#Subscription.channel.payload) and [payload content](StructureDefinition-backport-payload-content.html) fields. If a server cannot honor the requested combination, the server SHOULD reject the Subscription request rather than send unexpected email messages.

The email channel sets two guidelines about content:

* Message Body content SHALL be human readable
* Message Attachments SHOULD be machine readable

Due to these guidelines, the [Subscription.channel.payload](http://hl7.org/fhir/subscription-definitions.html#Subscription.channel.payload) refers to the content of the body of the message. Attachment type information can be appended as a MIME parameter, for example:

* text/plain: a plain-text body with no attachment
* text/html: an HTML body with no attachment
* text/plain;attach=application/fhir+json: a plain-text body with a FHIR JSON bundle attached
* text/html;attach=application/fhir+xml: an HTML body with a FHIR XML bundle attached

The [payload content](StructureDefinition-backport-payload-content.html) field SHALL be applied to any attachments and MAY be applied to body contents (depending on server implementation). However, a server must not include a body which exceeds the specified content level. For example, a server may choose to always include a standard message in the body of the message containing no PHI and vary the attachment, but cannot include PHI in the body of an email when the content is set to `empty`.

An example workflow for receiving notifications via email is shown below:

<figure>
  {% include channel-email.svg %}
  <figcaption>Diagram showing a possible workflow for email subscriptions</figcaption>
</figure>


1. Client creates a Subscription with the `channel.type` set to `email`.
1. Server may respond with a success code and create the subscription with a state of `active`.
1. Server may respond with a success code and create the subscription with a state of `requested`.
1. Server sends an initial message via the specified email server (e.g., verify the request, opt-out instructions, etc.).
1. Email Server responds with a channel appropriate response code (e.g., `250: OK`).
1. Server may send notifications of type `heartbeat` at any time.
1. Server may send notifications of type `event-notification` at any time.

##### Security Notes

Email (SMTP) is not a secure channel. Implementers must ensure that any messages containing PHI have been secured according to their policy requirements (e.g., use of a system such as [Direct](http://directproject.org/)).

#### FHIR Messaging

{:.stu-note}
Warning: This section is considered draft; feedback from topic authors is requested to refine the message-based channel.


There are times when it is desireable to use Subscriptions as a communication channel between FHIR servers that are connected via Messaging instead of REST. This can be accomplished using a `Subscription` with the channel type of `message`.

To receive notifications via messaging, a client should request a subscription with the channel type of `message` and set the endpoint to the destination FHIR server base URL. Note that this URL must be accessible by the hosting server.

The FHIR server hosting the subscription (server) will send FHIR messages to the destination FHIR server (endpoint) as needed. These messages will, as the contents of the message, have a fully-formed notification Bundle.

An example workflow for receiving notification via FHIR messaging is shown below:

<figure>
  {% include channel-messaging.svg %}
  <figcaption>Diagram showing a possible workflow for FHIR Messaging subscriptions</figcaption>
</figure>

1. Client creates a Subscription with the `channel.type` set to `message`.
1. Server responds with a success code and creates the subscription with a state of `requested`.
1. Server sends a FHIR Message to the requested endpoint with a `handshake` notification.
1. Client Endpoint accepts the Message and returns success.
1. Server may send notifications of type `heartbeat` at any time.
1. Server may send notifications of type `event-notification` at any time.

##### Security Notes

Servers MAY require that the end-point is allow-listed prior to allowing these kinds of subscriptions. Additionally, servers MAY impose authorization/authentication requirements for server to server communication (e.g., certificate pinning, etc.).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/components.md


The FHIR Topic-Based Subscription Model is composed of three parts:

* [Subscription Topic](#subscription-topics)
  * What is it?
    * Defines the **what** is used to trigger notifications
    * Defines the **filters** allowed to clients
    * Defines the **shape** of the notification
    * Always referenced by canonical URL
  * How is it defined?
    * FHIR R4: [Basic or out of scope](#subscription-topics-in-r4)
    * FHIR R4B: [SubscriptionTopic](http://hl7.org/fhir/R4B/subscriptiontopic.html) resource
* [Subscription](#subscriptions)
  * What is it?
    * Describes a request to be notified about events defined by a `SubscriptionTopic`
      * Canonical URL reference to a `SubscriptionTopic`
      * Set **filters** on events (as allowed in the referenced `SubscriptionTopic`)
    * Describe the `channel` and `endpoint` used to send notifications
    * Describe the **payload** included in notifications (MIME type, content level, etc.)
  * How is it defined?
    * FHIR R4: A [Subscription](http://hl7.org/fhir/R4/subscription.html) resource with extensions
    * FHIR R4B: A [Subscription](http://hl7.org/fhir/R4B/subscription.html) resource with extensions
* [Notification Bundle](#subscription-notifications)
  * What is it?
    * Describes the contents of a notification
    * Contains zero or more notification **payloads**
  * How is it defined?
    * FHIR R4:
      * A [Bundle](http://hl7.org/fhir/R4/bundle.html) resource with type `history`,
      * a [Parameters](http://hl7.org/fhir/R4/parameters.html) resource using the [Backport SubscriptionStatus Profile](StructureDefinition-backport-subscription-status-r4.html), and
      * zero or more additional entries, with either URLs or resources representing contents.
    * FHIR R4B:
      * A [Bundle](http://hl7.org/fhir/R4B/bundle.html) resource with type `history`,
      * a [SubscriptionStatus](http://hl7.org/fhir/subscriptionstatus.html) resource, and
      * zero or more additional entries, with either URLs or resources representing contents.

### Subscription Topics

In FHIR R4B and later, the `SubscriptionTopic` resource is used to define conceptual or computable events for `Subscription` resources. Conceptually, subscription topics specify an event or change in data that is used to trigger a notification.  Topic definitions also include the boundaries around what a Subscription can filter for and additional resources that MAY be included with notifications.

For example, a topic may define that notifications should be sent when an `Encounter` is created or updated to have the specific value of `status=in-progress`.  The topic may also specify that filters may only be applied to the Patient (`Encounter.subject` where subject is a Patient) referenced by the Encounter, and that notifications may include the relevant Patient resource.

Detailed information about the [SubscriptionTopic](http://hl7.org/fhir/subscriptiontopic.html) resource can be found on the HL7 FHIR website.

In order to make subscription topics more widely available, support for `SubscriptionTopic` resources is available via the [FHIR Registry](http://registry.fhir.org).

#### Subscription Topics in R4

`SubscriptionTopic` resources contain information that is difficult to model without an appropriate resource to start from.  Representation is possible by using a later-defined version of the resource (e.g., from FHIR R5), cross-version extensions, and the `Basic` resource type.  Earlier versions of this guide left topics out of scope while this model was being developed, but today tooling will do the conversion automatically.

In order to allow for discovery of supported subscription topics, this guide defines the [CapabilityStatement SubscriptionTopic Canonical](StructureDefinition-capabilitystatement-subscriptiontopic-canonical.html) extension.  The extension allows server implementers to advertise the canonical URLs of topics available to clients and allows clients to see the list of supported topics on a server.  The extension is expected to appear, if supported, on the `Subscription` resource entry.  Note that servers are NOT required to advertise supported topics via this extension.  Supported topics can also be advertised, for example, by the `CapabilityStatement.instantiates` or `CapabilityStatement.implementationGuide` elements of a CapabilityStatement, as defined by another Implementation Guide.  If a server supports `Basic`-wrapped versions of topics, they can be discovered by querying for `Basic` resources that have the `code` of `http://hl7.org/fhir/fhir-types|SubscriptionTopic`.  Finally, FHIR R4 servers MAY choose to leave topic discovery completely out-of-band and part of other steps, such as registration or integration.

Note that supporting `Basic` versions of topics is NOT required by this guide, and FHIR R4 servers are not required to support any form of custom topics (i.e., only supporting topics that are added by developers).  If that functionality is desired, a server may choose to expose `Basic` versions of topics or a limited R4B endpoint to enable such support.

Implementers adding server-side support for topic-based subscriptions are encouraged (but not required) to use the R4B or R5 definitions internally, in order to ease the transition to future versions.

### Subscriptions

The `Subscription` resource is used to request notifications for a specific client about a specific topic. Conceptually, a subscription is a concrete request for a single client to receive notifications per a single topic.

For example, a subscription may ask for notifications based on an 'Encounter in-progress' topic, such as the one briefly described as an example in [Subscription Topics](#subscription-topics).  The subscription requires a link to the canonical URL of the topic, such as `http://server.example.org/fhir/subscriptiontopics/encounter-in-progress`, information about the channel, such as requesting notifications via `rest-hook` to the endpoint at `http://client.example.org/notification-endpoint/abc`), and payload configuration, such as requesting that bundles are encoded as `application/fhir+json` and include only identifiers (`id-only`).  Additionally, a subscription sets the filters which are applied to determine when notifications should be sent, such as indicating that only notifications for `Patient/123` should be sent.  More details about filters can be found in the [Subscription Filters](#subscription-filters) section.

In order to support topic-based subscriptions in R4, this guide defines several extensions for use on the [R4 Subscription](http://hl7.org/fhir/subscription.html) resource.  A list of extensions defined by this guide can be found on the [Artifacts](artifacts.html#3) page. Note that the future FHIR R5 publication may define capabilities included in this specification as cross-version extensions. Since the FHIR R5 is currently under development, there are no guarantees these extensions will meet the requirements of this guide. In order to promote widespread compatibility, cross version extensions SHOULD NOT be used on R4 subscriptions to describe any elements also described by this guide

In order to link a `Subscription` to a `SubscriptionTopic` and prevent any confusion between the R4 query-based and topic-based implementations, the link to a `SubscriptionTopic` is specified in the `Subscription.criteria` field.  For more details, please see the [Subscription Profile](StructureDefinition-backport-subscription.html) in this guide.


#### Subscription Filters

While Subscription Topics are responsible for declaring the triggers for notifications (e.g., a new observation has been created, a medication dispense has occurred, etc.), the subscription itself MAY contain filters to further refine results.  For example, a topic could trigger all new observations, while a filter could indicate interest in only lab results or observations relating to a specific patient.

Information about defining filters can be found on the [R4B SubscriptionTopicResource](https://hl7.org/fhir/R4B/subscriptiontopic.html#filters).

In FHIR R5, the usage of filters matches the definition structure - i.e., elements for the `resourceType`, `filterParameter`, `modifier`, and `value`.  However, modeling that number of elements in extensions is cumbersome and a relevant syntax already exists.  The [R5 FilterBy Criteria](StructureDefinition-backport-filter-criteria.html) extension contains filter information, formatted according to the search syntax defined by the FHIR core specification.

In filter criteria strings, a `filterParameter`, as defined by the relevant `SubscriptionTopic` is used in the place of a search parameter.  A server MAY support search parameters not listed by a topic definition (e.g., if filtering is applied to a `Patient`, the server can honor filters for `Patient.name` even if the topic does not expose them), however topic authors are encouraged to explicitly list any parameters for best interoperability.

The valid formats for criteria are: 
* `[filterParameter]=[value]`
* `[filterParameter]:[modifier]=[value]`
* `[resourceType].[filterParameter]=[value]`
* `[resourceType].[filterParameter]:[modifier]=[value]`

Note that `resourceType` is only necessary for disambiguation in the case where there are filter parameters with the same code exposed for multiple resources available for filtering within a specific topic.  Even in the cases where this is true (e.g., hoisting existing search parameters), it is preferable for the topic definition to assign unique names for simplicity.

#### Subscriptions and FHIR Versions

Note that subscription notifications, by default, are made using the same FHIR version as the server.  The `Subscription.channel.payload` element can be used to specify a different FHIR version, using syntax and values defined by the [MIME Type Parameter](https://hl7.org/fhir/versioning.html#mt-version).  Servers SHALL look for this parameter during subscription negotiation and SHALL not accept requests for notification FHIR versions it cannot support (servers MAY reject or coerce, according to their policies).

For example, a request for notifications encoded as `application/fhir+json; fhirVersion=4.3` explicitly asks for notifications conforming to the FHIR R4B notification format, while a request for `application/fhir+json; fhirVersion=4.0` explicitly asks for notifications conformant to FHIR R4.  This mechanism allows for more flexibility during upgrades, ensuring that servers and clients can continue to operate across version changes.

More information about the differences in notifications can be found on the [Notifications](notifications.html) page.

#### Accepting Subscription Requests

When a FHIR Server accepts a request to create a `Subscription`, the server is indicating to the client that the server:
* is capable of detecting when events covered by the requested SubscriptionTopic occur, and
* is willing to make a simple best effort attempt at delivering a notification for each occurrence of a matching event.

When processing a request for a `Subscription`, following are *some* checks that a server SHOULD validate:
* that the `SubscriptionTopic` is valid and implemented by the server
* that all requested filters are defined in the requested topic and are implemented in the server
* that the channel type is known and implemented by the server
* that the channel endpoint is valid for the channel provided (e.g., is it a valid URL of the expected type)
* that the payload configuration is known and implemented by the server
* that the payload configuration is valid for the channel type requested (e.g., complies with the server's security policy)

### Subscription Notifications

In FHIR R5, a new type of `Bundle` has been introduced, which uses the new `SubscriptionStatus` resource to convey status information in notifications.  Support for earlier FHIR versions has been designed to offer similar functionality and serialized data.

In both FHIR R4 and R4B, notifications are based on a [history Bundle](http://hl7.org/fhir/bundle.html#history).  The first entry always contains `SubscriptionStatus` information, encoded as either a [Parameters](http://hl7.org/fhir/R4/parameters.html) resource using the [Backport SubscriptionStatus Profile](StructureDefinition-backport-subscription-status-r4.html) in FHIR R4 or a [SubscriptionStatus](http://hl7.org/fhir/subscriptionstatus.html) resource in FHIR R4B.

Note that since notifications use `history` type Bundles, all notifications need to comply with the requirements for that bundle type.  Specifically, there are two invariants on Bundle (`bdl-3` and `bdl-4`) that require a `Bundle.entry.request` element for *every* `Bundle.entry`.
* For the status resource (`entry[0]`), the request SHALL be filled out to match a request to the `$status` operation.
* For additional entries, the request SHOULD be filled out in a way that makes sense given the subscription (e.g., a `POST` or `PUT` operation on the resource, etc.).  However, a server MAY choose to simply include a `GET` to the relevant resource instead.

Detailed information about notifications, including the differences between FHIR R4 and R4B, can be found on the [Notifications](notifications.html) page.

#### Scoping Responsibilities

Unless otherwise specified by a server implementation and channel, the Subscriptions Framework does not involve guaranteed delivery of notifications. While the Subscriptions Framework is able to support such mechanisms, defining them are beyond the scope of the standard or this guide.

Servers SHOULD detect errors and take appropriate action where possible.  In general, this boundary is when the notification is delivered.  For example, during a REST-hook notification, the subscription server can detect errors up until the REST endpoint returns a HTTP status code (e.g., 200).  This does not imply that a client successfully processed (or even received) a notification - simply that the server has sent the notification successfully.

Therefore, clients SHOULD be aware of some limitations regarding delivery. In particular:
* Some notifications might not be delivered.
* Some notifications might be delivered multiple times.

In order to mitigate the impact from the above issues, the Subscriptions Framework includes mechanisms to detect both scenarios.  Details can be found on the [Errors Page](errors.html).


#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/conformance.md


This page defines how CapabilityStatements are used and the expectations for mandatory and must support elements. A conformant system SHALL support the resources as profiled by this guide.

Note that the conformance verbs - SHALL, SHOULD, MAY - used in this guide are defined by the [FHIR Conformance Rules](http://hl7.org/fhir/conformance-rules.html).

### Conformance in FHIR R4B
In order to claim conformance with this guide, a server:
* SHALL support the `Subscription` resource (read/write).
* SHALL support the `$status` operation on the `Subscription` resource.
* SHALL support the `SubscriptionTopic` resource (read/search).
* SHALL support at least one channel type, and SHOULD include one from this guide
* SHALL support at least one Payload Type

#### Conformance Artifacts
FHIR Servers claiming conformance to this Implementation Guide must conform to the expectations described in the Capability Statement appropriate to the implemented FHIR version.  For FHIR R4B servers, this guide defines the [R4B Server CapabilityStatement](CapabilityStatement-backport-subscription-server.html).

Some options of the Subscriptions Framework are not easily expressed in a `CapabilityStatement`.  In addition to the basic support in the CapabilityStatement (e.g., resources, interactions, and operations), a conformant server SHALL support at least one [Payload Type](payloads.html) and SHOULD support one [Channel Type](channels.html) listed in this IG.

Note that the future publication of FHIR R5 may define capabilities included in this specification as cross-version extensions. Since FHIR R5 is currently under development, there are no guarantees these extensions will meet the requirements of this guide. In order to promote widespread compatibility, cross version extensions SHOULD NOT be used on R4 subscriptions to describe any elements described by this guide.

##### Profile Support
Profile Support refers to the support of the profiles defined in this guide in a system exposing FHIR resources. Specifically, a conformant server:
* SHALL communicate all profile data elements that are mandatory by that profile's StructureDefinition. 
* SHOULD declare conformance with the Backport Subscription Server Capability Statement by including its official URL in the server's `CapabilityStatement.instantiates` element: `http://hl7.org/fhir/uv/subscriptions-backport/CapabilityStatement/CapabilitySubscriptionServer`.
* SHALL specify the full capability details from the CapabilityStatement it claims to implement, including declaring support for the Backport Subscription Profile by including its official URL in the server's `CapabilityStatement.rest.resource.supportedProfile` element: `http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription`


#### Must-support
In this guide, some elements are marked as [Must Support](https://www.hl7.org/fhir/conformance-rules.html#mustSupport). Elements that are flagged as MS are enumerated below, with details on what support means.

##### backport-channel-type
The [backport-channel-type](StructureDefinition-backport-channel-type.html) extension is used to allow for custom channels not described in this guide.

* Server Support

Servers supporting this guide SHALL be able to read values present in this element.  A server SHALL reject the subscription request if a client requests an unsupported channel via this element.

* Client Support

Clients supporting this guide MAY support this extension, as necessary for their use case.


##### backport-filter-criteria
The [backport-filter-criteria](StructureDefinition-backport-filter-criteria.html) extension is used to describe the actual filters used in a specific instance of a subscription.

* Server Support

Servers supporting this guide SHALL be able to read values in this extension and SHALL be able to apply filters as described by any Subscription Topics the server advertises support for.

If a server is capable of supporting filter criteria in general but unable to support criteria requested in a subscription, the server SHALL reject the subscription.

* Client Support

Clients supporting this guide SHALL be able to write values in this extension.


##### backport-payload-content
The [backport-payload-content](StructureDefinition-backport-payload-content.html) extension is used to describe the amount of detail included in notification payloads.

* Server Support

Servers supporting this guide SHALL be able to read values from this extension.  A server SHALL reject the subscription request if a client asks for a content level the server does not intend to support (e.g., does not meet security requirements).  Servers SHALL include information in notifications as described in this guide based on this value.

* Client Support

Clients supporting this guide SHALL be able to write values in this extension.


##### Notification entry: SubscriptionStatus
Notification bundles SHALL contain a FHIR R4B [SubscriptionStatus](http://hl7.org/fhir/R4B/subscriptionstatus.html) as the first entry.

* Server Support

Servers supporting this guide SHALL be able to generate a valid and correct `SubscriptionStatus` resource for each notification.  The status entry SHALL be the first entry of each notification bundle.

* Client Support

Clients supporting this guide SHALL be able to process a valid `SubscriptionStatus` resource without errors.


##### Subscription.criteria
The `Subscription.criteria` element is required (cardinality of 1..1), so any compatible implementation SHALL be able to read and/or write as necessary.  Compared with the core specification, this guide specifies that the element SHALL contain the canonical URL for the Subscription Topic.

* Server Support

Servers supporting this guide SHALL be able to read values in this element and process requests for subscription topics referenced by it.  If a server does not support a requested topic or will not honor the subscription otherwise, a server SHALL reject the subscription request.

* Client Support

Clients supporting this guide SHALL be able to write subscription topic URLs into this element.


### Conformance in FHIR R4
In order to claim conformance with this guide, a server:
* SHALL support the `Subscription` resource (read/write).
* SHALL support the `$status` operation on the `Subscription` resource.
* SHOULD support topic discovery via the [CapabilityStatement SubscriptionTopic Canonical](StructureDefinition-capabilitystatement-subscriptiontopic-canonical.html) extension
* SHALL support at least one channel type, and SHOULD include one from this guide
* SHALL support at least one Payload Type

Note that in FHIR R4, there is no representation of Subscription Topics.  Detailed discussion can be found on the [Topic-Based Subscription Components](components.html#subscription-topics-in-r4) page.

#### Conformance Artifacts
FHIR Servers claiming conformance to this Implementation Guide must conform to the expectations described in the Capability Statement appropriate to the implemented FHIR version.  For FHIR R4 servers, this guide defines the [R4 Server CapabilityStatement](CapabilityStatement-backport-subscription-server-r4.html).

Some options of the Subscriptions Framework are not easily expressed in a `CapabilityStatement`.  In addition to the basic support in the CapabilityStatement (e.g., resources, interactions, and operations), a conformant server SHALL support at least one [Payload Type](payloads.html) and SHOULD support one [Channel Type](channels.html) listed in this IG.

Note that the future publication of FHIR R5 may define capabilities included in this specification as cross-version extensions. Since FHIR R5 is currently under development, there are no guarantees these extensions will meet the requirements of this guide. In order to promote widespread compatibility, cross version extensions SHOULD NOT be used on R4 subscriptions to describe any elements described by this guide.

##### Profile Support
Profile Support refers to the support of the profiles defined in this guide in a system exposing FHIR resources. Specifically, a conformant server:
* SHALL communicate all profile data elements that are mandatory by that profile's StructureDefinition. 
* SHOULD declare conformance with the Backport Subscription Server Capability Statement by including its official URL in the server's `CapabilityStatement.instantiates` element: `http://hl7.org/fhir/uv/subscriptions-backport/CapabilityStatement/backport-subscription-server-r4`.
* SHALL specify the full capability details from the CapabilityStatement it claims to implement, including declaring support for the Backport Subscription Profile by including its official URL in the server's `CapabilityStatement.rest.resource.supportedProfile` element: `http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription`


#### Must-support
In this guide, some elements are marked as [Must Support](https://www.hl7.org/fhir/conformance-rules.html#mustSupport). Elements that are flagged as MS are enumerated below, with details on what support means.

##### backport-channel-type
The [backport-channel-type](StructureDefinition-backport-channel-type.html) extension is used to allow for custom channels not described in this guide.

* Server Support

Servers supporting this guide SHALL be able to read values present in this element.  A server SHALL reject the subscription request if a client requests an unsupported channel via this element.

* Client Support
Clients supporting this guide MAY support this extension, as necessary for their use case.


##### backport-filter-criteria
The [backport-filter-criteria](StructureDefinition-backport-filter-criteria.html) extension is used to describe the actual filters used in a specific instance of a subscription.

* Server Support

Servers supporting this guide SHALL be able to read values in this extension and SHALL be able to apply filters as described by any Subscription Topics the server advertises support for.

If a server is capable of supporting filter criteria in general but unable to support criteria requested in a subscription, the server SHALL reject the subscription.

* Client Support

Clients supporting this guide SHALL be able to write values in this extension.


##### backport-payload-content
The [backport-payload-content](StructureDefinition-backport-payload-content.html) extension is used to describe the amount of detail included in notification payloads.

* Server Support

Servers supporting this guide SHALL be able to read values from this extension.  A server SHALL reject the subscription request if a client asks for a content level the server does not intend to support (e.g., does not meet security requirements).  Servers SHALL include information in notifications as described in this guide based on this value.

* Client Support

Clients supporting this guide SHALL be able to write values in this extension.


##### Notification entry: SubscriptionStatus
Notification bundles SHALL contain a FHIR R4 [Parameters](http://hl7.org/fhir/R4/parameters.html) resource, conforming to the [R4 Backported R5 SubscriptionStatus](StructureDefinition-backport-subscription-status-r4.html) profile, as the first entry.

* Server Support

Servers supporting this guide SHALL be able to generate a valid and correct `R4 Backported R5 SubscriptionStatus` resource for each notification.  The status entry SHALL be the first entry of each notification bundle.

* Client Support

Clients supporting this guide SHALL be able to process a valid `R4 Backported R5 SubscriptionStatus` resource without errors.


##### Subscription.criteria
The `Subscription.criteria` element is required (cardinality of 1..1), so any compatible implementation SHALL be able to read and/or write as necessary.  Compared with the core specification, this guide specifies that the element SHALL contain the canonical URL for the Subscription Topic.

* Server Support

Servers supporting this guide SHALL be able to read values in this element and process requests for subscription topics referenced by it.  If a server does not support a requested topic or will not honor the subscription otherwise, a server SHALL reject the subscription request.

* Client Support

Clients supporting this guide SHALL be able to write subscription topic URLs into this element.


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/downloads.md


### Package File

The following package file includes an NPM package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the overview on [validating FHIR profiles and resources](http://hl7.org/fhir/R4/validation.html):

* [Complete Package](package.tgz)
* [R4-Specific Package](package.r4.tgz)
* [R4B-Specific Package](package.r4b.tgz)

### Examples

* [JSON](examples.json.zip)
* [XML](examples.xml.zip)

### Downloadable Copy of this Specification

A downloadable version of this IG is available so it can be hosted locally:

* [Downloadable Copy](full-ig.zip)

### Package Dependencies

{% include dependency-table.xhtml %}

### Global Profile Definitions

{% include globals-table.xhtml %}


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/errors.md


Errors can occur at any point in the processing or delivery of a notification. This page describes some common error scenarios and mechanisms used to detect and recover from them.

### Handling Errors as a Server

Error handling as a Server is intended to be simple.  A server is not expected to know the best process for every use case of every subscriber, so the focus is on allowing clients to detect there is an issue.  A server SHALL:
* Increment the `eventsSinceSubscriptionStart` counter internally.
* Update the `status` of the subscription internally.
* Continue to respond to `$status` requests.

A server MAY:
* Continue to send `heartbeat` messages (with an `error` status set).

Discovering the error state and recovering from it are responsibilities of the subscriber.  This includes resetting the `Subscription` to an `active` or `requested` status - a client is responsible for requesting re-activation of a subscription.  Note: this is important because a subscriber must make the determination of how to recover from an error state; if a server arbitrarily resets a subscription, a subscriber may not be aware of missing notifications.

### Detecting Errors as a Subscriber

There are several mechanisms available to subscribers in order to understand the current state of notification delivery. Below are some example error scenarios with details about how a subscriber can detect the problem state.

#### Missing Event

The diagram below shows how a subscriber can use the `eventsSinceSubscriptionStart` parameter on received notifications to determine that an event has been missed.

<figure>
  {% include error-missing-event.svg %}
  <figcaption>Diagram showing a missed-event detection and recovery workflow</figcaption>
</figure>

In the above sequence, the subscriber tracks the `eventsSinceSubscriptionStart` of each received notification (per `Subscription`). When the subscriber received event 23, the subscriber was aware that the last notification it received was a single notification for event 21. The subscriber then waited an amount of time to ensure that event 22 was indeed missing (and not, for example, still being processed) and started a recovery process. The recovery process itself will vary by subscriber, but should be a well-understood method for recovering in the event of errors.

### Broken Communication

The diagram below show how a subscriber can use the `heartbeatPeriod` on a `Subscription` to determine errors which prevent notifications from reaching the endpoint.

<figure>
  {% include error-no-communication.svg %}
  <figcaption>Diagram showing broken communication detection and recovery workflow</figcaption>
</figure>

In the above sequence, the subscriber is aware that the `heartbeatPeriod` has elapsed for a subscription without receiving any notifications. The subscriber then asks the server for the `$status` of the subscription, and seeing an error, begins a recovery process. As in the previous scenario, the recovery process itself will vary by subscriber, but should be a well-understood method for recovering in the event of errors.

### Recovering from Errors

Clients are responsible for devising an appropriate method for recovering from errors.  Often, this process will include a series or batch of requests that allow a client to know the current state.  For example, an application may need to query all relevant resources for a patient in order to ensure nothing has been missed.  Once an application has returned to a functional state, it should request the subscription is reactivated by updating the `status` to either `requested` or `active` as appropriate.

#### Using the $events operation

Servers MAY choose to support the `$events` operation, as defined in this IG.  The `$events` operation allows clients to request events which have occurred in the past.  Servers which implement the operation MAY use implementation-specific criteria to restrict availability of events (e.g., most recent 10 events, events within the past 30 days, etc.).

During a recovery process, clients MAY try to retrieve missing events via the `$events` operation, which should allow processing to continue as normal.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/ig_changelog.md

### STU 1.2.0

* [FHIR-43275](https://jira.hl7.org/browse/FHIR-43275): Add 'notified pull' option to notifications
  * Added `Notified Pull` section to the [Notifications](notifications.html) page
  * Added `related-query` to [Backport R5 SubscriptionStatus](StructureDefinition-backport-subscription-status-r4.html) profile
  * Added extension [backport-related-query](StructureDefinition-backport-related-query.html)
  * Updated example [Backported SubscriptionTopic: R4 Encounter Complete](Basic-r4-encounter-complete.html)
  * Updated example [Backported SubscriptionTopic: R4B Encounter Complete](SubscriptionTopic-r4b-encounter-complete.html)
  * Added example [r4-notification-id-only-with-query](Bundle-r4-notification-id-only-with-query.html)
  * Added example [r4-notification-full-resource-with-query](Bundle-r4-notification-full-resource-with-query.html)
  * Added example [r4b-notification-id-only-with-query](Bundle-r4b-notification-id-only-with-query.html)
  * Added example [r4b-notification-full-resource-with-query](Bundle-r4b-notification-full-resource-with-query.html)
* [FHIR-43082](https://jira.hl7.org/browse/FHIR-43082): Add operation to resend events
  * Added [Backport Subscription Resend Operation](OperationDefinition-backport-subscription-resend.html)
* [FHIR-41917](https://jira.hl7.org/browse/FHIR-41917): Clarify where the id is in the id-only Notification Profile
  * Added clarifying text to the [Payloads Page](payloads.html)
  * Added reference to payloads from then [Notifications Page](notifications.html)
* [FHIR-43081](https://jira.hl7.org/browse/FHIR-43081): Add authorization information to notifications
  * Added [notification-authorization-hint](StructureDefinition-notification-authorization-hint.html) extension
  * Added content to the [Safety and Security page](safety_security.html) regarding authorization in notifications.
* [FHIR-43072](https://jira.hl7.org/browse/FHIR-43072): Incorrect search parameter type
  * `http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-custom-channel` : `string` to `token`
  * `http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-payload-type` : `string` to `token`
* [FHIR-38803](https://jira.hl7.org/browse/FHIR-38803): the subscriptions backport should describe how to do notifications in R4 as well as or instead of R4B
  * Added `Basic` representation as *recommended* R4 representation of `SubscriptionTopic` resources.
* Various TCs (e.g., typos)
  * [FHIR-41024](https://jira.hl7.org/browse/FHIR-41024): 2.3.3 Workflow for R4 includes a subsection referencing R4B
  * Fixes to `CapabilityStatement` resources for correctness.
  * Fixes to FHIRPath expressions in `SearchParameter` resources for correctness.
* Added change log.

### STU 1.1.0

* Updated to support both FHIR R4 and R4B.
* Artifacts ported between versions.

### STU 1.0.0

* Initial publication based on FHIR R4B

### Development 0.1.0

* Initial design and porting to FHIR R4.

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/index.md

The Subscription R5 Backport Implementation Guide enables servers running versions of FHIR earlier than R5 to implement a subset of R5 Subscriptions in a standardized way.

### About This Guide

During the development of FHIR R5, the Subscriptions Framework has gone through a significant redesign.  Many implementers have expressed a need for functionality from the FHIR R5 version of Subscriptions to be made available in FHIR R4.

The goal of publishing this guide is to define a standard method of back-porting the R5 Subscriptions Framework for greater compatibility and adoption.

### What are Subscriptions?

The Subscriptions Framework is a mechanism designed to allow clients to ask for notifications when data changes.  It is an active notification system; a FHIR server actively sends notifications to clients as changes occur.

### Query-Defined Subscriptions (DSTU2 - R4)

There is a defined [Subscription](http://hl7.org/fhir/r4/subscription.html) resource in FHIR R4 that has been in place since DSTU2.  In those releases of FHIR, subscriptions are defined by a client dynamically by posting a Subscription resource with a criteria string. The FHIR server must then run a query against that criteria and track the query result-set for each subscription request.  Each time a change to the server's data is made, a server must re-run the query and send notifications to clients if their result-set changes (e.g., a new entry is added or removed).

The above approach works well for some use cases, but has issues which prevent it from being used in others.  Some of the issues identified include:
* Difficulty implementing the server-side logic at scale (both in terms of large datasets and many clients).
* An opaque discovery process (e.g., servers that had restrictions on queries had no way to advertise them).
* Lack of granularity in events (e.g., it was unclear why something was removed from a dataset).
* No ability to bundle notifications (e.g., servers had to send a single notification for each discrete event).
* Notifications required clients to re-query after receiving a notification.

Some of the issues would be addressable with modifications to the existing `Subscription` resource, but the FHIR Infrastructure Work Group felt that more extensive changes were needed, and so started a redesign of Subscriptions for R5.

### Topic-Based Subscriptions - FHIR R5 and Later

More than a year of focused work resulted in a new design for Subscriptions in FHIR.  The redesign focused on three main areas:

1. Moving to a topic-based model, with the definition of a `SubscriptionTopic` resource.
1. Changing the `Subscription` resource to add clarity and flexibility.
1. Restructuring notifications by adding a new `Bundle` type.

The implementer response to these changes has been positive - changes to the mechanism address the issues identified and retain all of the existing functionality.  However, many of the changes cannot be made to the FHIR specifications until the release of R5.  Implementers have expressed concern that the publication and adoption of FHIR R5 are too far in the future.

### Topic-Based Subscriptions - FHIR R4B and Later

With the publication of [FHIR R4B](https://hl7.org/fhir/R4B/), there was an opportunity to add some of the models designed for FHIR R5 into a FHIR R4-series.  Wherever possible, both those additions and this guide tries to align with FHIR R5 to lower implementer burden, however some differences are unavoidable.

In the context of FHIR R4B, this guide bridges the gap between what could be added in a [minor release](https://hl7.org/fhir/versions.html#versions) and the changes made in R5.

In order to provide topic-based subscription support in FHIR R4, this Implementation Guide supplements additions made to FHIR R4B to support the new topic-based subscriptions model.  Wherever possible, this guide tries to align with FHIR R5 to lower implementer burden, however some differences are unavoidable.

### Topic-Based Subscriptions - FHIR R4

In order to provide topic-based subscription support in FHIR R4, this Implementation Guide defines FHIR artifacts (e.g., Operations, Extensions, Profiles, etc.) to extend the existing subscription functionality present in R4.  Due to practical constraints, some functionality has been left out-of-scope for FHIR R4 support.

More information can be found on the [Topic-Based Subscription Components](components.html) page.

### Boundaries and Relationships

#### Relation to FHIRcast

[FHIRcast](http://fhircast.org) is a framework for user-activity synchronization across applications.  FHIRcast and Subscriptions are both conceptually based [W3 WebSub](https://www.w3.org/TR/websub/), and while the mechanics of two projects look similar they are fundamentally different projects used to address different use cases.  In particular:

1. What Is Communicated
    * FHIRcast is primarily concerned with context synchronization.
    * Subscriptions are focused on content synchronization.

1. User Interaction
    * FHIRcast is designed to be used by multiple applications perhaps with the same user and typically on the same device.
    * Subscriptions are designed to be used by multiple distinct systems, often outside of a user workflow.

1. Session Duration
    * FHIRcast is designed around short-lived sessions.
    * Subscriptions are intended to be long-lived resources.

1. Event Frequency
    * FHIRcast sends only single-event notifications.
    * Subscriptions allow servers to batch multiple notifications in high-frequency scenarios.

#### Relation to FHIR Messaging

FHIR [Messaging](http://hl7.org/fhir/messaging.html) is a message-based protocol which can be used for communication. When combining Messaging and Subscriptions, complete notifications are wrapped into Messaging Bundles.  More details are provided on the [channels page](channels.html#fhir-messaging).

### Change Log

A [Change log](ig_changelog.html) is provided to highlight differences between versions.

### Authors and Contributors

| **Role** | **Name** | **Organization** |
| -------- | -------- | ---------------- |
| Author | Gino Canessa | Microsoft |
| Contributor | Eric Haas | Health eData |
| Contributor | Josh Mandel | Microsoft / SMART Health IT |
| Contributor | Adam Strickland | Epic |
| Contributor | Jason Vogt | Meditech |
{: .grid }

The authors gratefully acknowledge the many contributions from numerous users and facilitators who helped shape, mature, debug, and advance Topic-Based Subscriptions:

Avery Allen,
Steve Atwood,
Brian Swinkels,
Rick Geimer,
Grahame Grieve,
Alexander Henket,
Bas van den Heuvel,
Spencer LaGesse,
Brett Marquard,
Lloyd McKenzie,
John Moehrke,
Vassil Peytchev,
Pascal Pfiffner,
David Pyke,
René Spronk,
Jenni Syed,
Cooper Thompson,
Isaac Vetter,
and
Julie Winters

The authors apologize if they have omitted any contributor from this list.

### Intellectual Property Statements

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/notifications.md

### Notifications

As described in [Topic-Based Subscription Components](components.html#subscription-notifications), **all** notifications are enclosed in a [Bundle](http://hl7.org/fhir/bundle.html) with the `type` of `history`.  Additionally, the first `entry` of the bundle SHALL be the `SubscriptionStatus` information, encoded as either a [Parameters](http://hl7.org/fhir/R4/parameters.html) resource using the [Backport SubscriptionStatus Profile](StructureDefinition-backport-subscription-status-r4.html) in FHIR R4 or a [SubscriptionStatus](http://hl7.org/fhir/subscriptionstatus.html) resource in FHIR R4B.

The notification bundle has a profile defined in this IG for each FHIR version: [R4 Topic-Based Subscription Notification Bundle](StructureDefinition-backport-subscription-notification-r4.html) and [R4B Topic-Based Subscription Notification Bundle](StructureDefinition-backport-subscription-notification.html).


For detailed information about the R4B `SubscriptionStatus` resource, please see the HL7 FHIR website:
* [SubscriptionStatus Resource](http://hl7.org/fhir/subscriptionstatus.html)
* [Notification Types](http://hl7.org/fhir/subscriptionstatus.html#notification-types)
* [Notifications and Errors](http://hl7.org/fhir/subscriptionstatus.html#errors)


### Bundle Type Considerations

In FHIR R5, a new type of `Bundle` has been introduced, which uses the new `SubscriptionStatus` resource to convey status information in notifications.  For FHIR R4, notifications are instead based on a [history Bundle](http://hl7.org/fhir/bundle.html#history), and a [SubscriptionStatus](http://hl7.org/fhir/subscriptionstatus.html) resource is used to convey related meta-information (e.g., which subscription the notification is for).

Note that since notifications use `history` type Bundles, all notifications need to comply with the requirements for that bundle type.  Specifically, there are two invariants on Bundle (`bdl-3` and `bdl-4`) that require a `Bundle.entry.request` element for *every* `Bundle.entry`.
* For the status resource (`entry[0]`), the request SHALL be filled out to match a request to the `$status` operation.
* For additional entries, the request SHOULD be filled out in a way that makes sense given the subscription (e.g., a `POST` or `PUT` operation on the resource, etc.).  However, a server MAY choose to simply include a `GET` to the relevant resource instead.

### Event Notifications and What to Include

What information is included in a notification depends on the level of information being provided (see [Payloads](payloads.html)).

In addition to general Subscription status information, each notification MAY include additional resources or references to resources (URLs or ids).  The notification shape SHALL be based on the definitions from the `SubscriptionTopic` relevant to the notification:

#### Focus Resource

Each topic trigger defines a resource type that is the focus for notifications.  For example: [SubscriptionTopic.resourceTrigger.resource](http://hl7.org/fhir/subscriptiontopic-definitions.html#SubscriptionTopic.resourceTrigger.resource) and [SubscriptionTopic.eventTrigger.resource](http://hl7.org/fhir/subscriptiontopic-definitions.html#SubscriptionTopic.eventTrigger.resource).

#### Additional Resources

Servers MAY choose to include additional resources with notifications that may be of interest to clients.  Servers SHALL conform to the payload configuration of the subscription when adding additional resources (e.g., if the subscription is `id-only`, then only ids of additional resources may be provided; if the subscription is `full-resource`, then full resources should be provided).

In order to aid servers in determining which resources may be of interest to clients, subscription topics can define a list of included resources (see [SubscriptionTopic.notificationShape.include](http://hl7.org/fhir/subscriptiontopic-definitions.html#SubscriptionTopic.notificationShape.include)).  Included resources are matches based on the type of focus resource specified.

Note that the include list MAY contain resources that do not exist in a particular context (e.g., an Encounter with no Observations) or that a user may not be authorized to access (e.g., an Observation tagged as sensitive that cannot be shared with the owner of a subscription).  Servers SHOULD attempt to provide the resources described in the topic, however clients SHALL expect that any resource beyond the focus resource are not guaranteed to be present.

### Notified Pull

#### Use Cases

##### Time Shifted Services

One presented use case is centered around a referral workflow.  The scenario is that some facility (A) is sending a referral to another facility (B) for some sort of patient service.  While Facility A knows the information that Facility B needs, Facility A does not know *when* Facility B will be performing services.  If there is a time gap (e.g., services at Facility B are running six months out), it is better for Facility B to resolve information at the time of service instead of at the time of referral.

<figure>
  {% include time-shifted-services.svg %}
  <figcaption>Workflow for referral service with a significant time delay</figcaption>
</figure>


##### Unstandardized Queries

Another use case for a 'notified pull' mechanism is a continuation of the `id-only` return data.  Specifically, in cases where the data necessary is not well-standardized, it is unreasonable to expect the referring facility to be able to construct the queries necessary to retrieve the data.  For example, in the United States, there is no standardized query to retrieve the current insurance coverage information for a patient.  The the process for retrieving that information is vendor-specific and it is unreasonable to expect a referring facility to be able to construct the queries necessary to retrieve it.

<figure>
  {% include unstandardized-query.svg %}
  <figcaption>Workflow showing how an unstandardized query can be used</figcaption>
</figure>

#### Adding Queries to Notifications

In both Use Cases described above, there are two pieces of information a subscriber needs in order to successfully use the provided queries: the URL for the query and coded information describing the query.

In this guide, the query and coded information are paired together as a `string` and a `Coding` respectively.  There are two places that need to contain this data: the topic definition and the notification itself.

##### FHIR R4

In FHIR R4, the topic definition is represented as a `Basic` resource that uses cross-version extensions to contain the information from a later-defined `SubscriptionTopic` resource (e.g., the FHIR R5 `SubscriptionTopic`).  Until FHIR R6 is published, there is no stable cross-version extension available to represent this data.  As such, this guide defines the [backport-related-query](StructureDefinition-backport-related-query.html) extension to represent the query and coded information.

Regarding notifications in FHIR R4, the information normally contained in a `SubscriptionStatus` resource, including details about notification events, is represented by a `Parameters` resource.  A `related-query` part was added to the [backport-subscription-status-r4](StructureDefinition-backport-subscription-status-r4.html) profile, inside the `notification-event` part.

For examples, please see [Backported SubscriptionTopic: R4 Encounter Complete](Basic-r4-encounter-complete.html), [R4 Notification: Id Only with Related Query](Bundle-r4-notification-id-only-with-query.html), or [R4 Notification: Full Resource with related query](Bundle-r4-notification-full-resource-with-query.html).


##### FHIR R4B and Later

In FHIR R4B and later, topic and notification information are represented in the `SubscriptionTopic` and `SubscriptionStatus` resources respectively.  Until FHIR R6 is published, there are no stable cross-version extension available to represent the elements needed for related-query data.  As such, this guide defines the [backport-related-query](StructureDefinition-backport-related-query.html) extension to represent the query and coded information.  The extension is usable on both `SubscriptionStatus.notificationEvent` and `SubscriptionTopic.notificationShape`.

For examples, please see [Backported SubscriptionTopic: R4B Encounter Complete](SubscriptionTopic-r4b-encounter-complete.html), [R4B Notification: Id Only with Query](Bundle-r4b-notification-id-only-with-query.html), or [R4B Notification: Full Resource with Query](Bundle-r4b-notification-full-resource-with-query.html).

---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/payloads.md

### Payload Types

There are three options available when specifying the contents of a Notification: `empty`, `id-only`, and `full-resource`. These options change the level of detail conveyed in the notification status entry and possible additional Bundle entries.

When deciding which payload types to support, systems SHOULD consider both ease of processing and security of PHI. Clients often prefer the highest amount of data in notifications (e.g., `full-resource`) in order to reduce their processing burden.  Servers often prefer the lowest amount of data in notifications (e.g., `empty`) in order to mitigate the risk of information leakage (though also need to balance this against additional load caused by client queries). In practice, `id-only` provides a good balance between security and performance for many real-world scenarios.

Some security guidance is included below, however implementers SHOULD use the minimum level of detail consistent with the use case and SHOULD conduct a security review to determine how the payload and channel type interact with respect to data security. 

<figure>
  {% include payload-comparison.svg %}
  <figcaption>Diagram showing the different round-trips based on payload types</figcaption>
</figure>


If a server will not honor a payload type (e.g., will not send `full-resource` over HTTP), it SHOULD reject the Subscription request, but the server MAY accept the subscription with modifications.

#### Empty

With the content type of `empty`, no information about the resources involved in triggering the notification is available via the subscription channel. This mitigates many security concerns by both removing most PHI from the notification and allows servers to consolidate authorization and authentication logic. When the client receives a notification of this type, it may query the server to fetch all the relevant resources based on the SubscriptionTopic and applicable filters. The client might include a `_since=` query parameter, supplying its last query timestamp to retrieve only the most recent resources. For example, if the notification is for a topic about patient admission, the client will generally query for recent `Encounters` for a patient or group of patients, then fetch them as needed.

When populating the `SubscriptionStatus.notificationEvent` structure for a notification with an `empty` payload, a server SHALL NOT include references to resources (e.g., [SubscriptionStatus.notificationEvent.focus](http://hl7.org/fhir/subscriptionstatus-definitions.html#SubscriptionStatus.notificationEvent.focus) and [SubscriptionStatus.notificationEvent.additionalContext](http://hl7.org/fhir/subscriptionstatus-definitions.html#SubscriptionStatus.notificationEvent.additionalContext) SHALL NOT be present).

When the content type is `empty`, notification bundles SHALL not contain `Bundle.entry` elements other than the `SubscriptionStatus` for the notification.

From a security perspective, `empty` payloads expose the lowest risk, since they contain no PHI. The trade-off is that clients need to perform queries against the server in order to discover what events have occurred, costing bot client and server additional time, data transfer, and processing.

To summarize, in an `empty` notification:
* the status contains one or more `notificationEvent` entries, but no `focus` or `additionalContext`, and
* the bundle does not contain any additional entries.

For examples, see [Bundle-r4-notification-empty](Bundle-r4-notification-empty.html) and [Bundle-r4b-notification-empty](Bundle-r4b-notification-empty.html).

#### Id Only

With the content type of `id-only`, the resources involved in triggering the notification are only available through other channels (e.g., REST API), but notifications include URLs which can be used to access those resources. This allows servers to consolidate authorization and authentication logic, while removing the need for expensive queries by clients. When a client receives a notification of this type, it may directly fetch all the relevant resources using the supplied resource ids. For example, if the notification is for a topic about patient admission, the client may fetch the `Encounter` resources for a patient or group of patients using URLs included in the notification.

When the content type is `id-only`, notification bundles SHALL include references to the appropriate focus resources in the [SubscriptionStatus.notificationEvent.focus](http://hl7.org/fhir/subscriptionstatus-definitions.html#SubscriptionStatus.notificationEvent.focus) element.  This provides clients a fixed location to consolidate IDs for all notification types.

Additionally, notification bundles MAY contain, in addition to the `SubscriptionStatus` used to convey status information, at least one `Bundle.entry` for each resource relevant to the notification. For example, a notification for a topic based on `Encounter` MAY include a reference to the `Encounter` and MAY also include additional resources deemed relevant (e.g., the linked `Patient`).

Each `Bundle.entry` for `id-only` notification SHALL contain a relevant resource URL in the `fullUrl` and `request` elements, as is required for `history` bundles.

From a security perspective, `id-only` payloads have a low risk of exposing PHI. While there is no PHI directly in the payload, some links to resources can be considered PHI. For example, if a system contains `Medication` resources using `RxNorm` codes as ids (e.g., `Medication/RX10359383`), a notification including a reference to that medication would communicate the patient has some interaction with `ciprofloxacin 500 mg 24-hour extended release tablets`.

To summarize, in an `id-only` notification:
* the status contains one or more `notificationEvent` entries, each with a `focus` or possibly one or more `additionalContext`, and
* the bundle can contain additional entries, but those entries will not have the `resource` element present.

For examples, see [Bundle-r4-notification-id-only](Bundle-r4-notification-id-only.html) and [Bundle-r4b-notification-id-only](Bundle-r4b-notification-id-only.html).


#### Full Resource

With the content type of `full-resource`, the resources involved in triggering the notification are included in the notification bundle. When a client receives a notification of this type, resources are already present in the bundle, though the client may need to fetch additional resources from the server. For example, the if the notification is for a topic about patient admission, the client may require related `Observation` resources.

When the content type is `full-resource`, notification bundles SHALL include references to the appropriate focus resources in the [SubscriptionStatus.notificationEvent.focus](http://hl7.org/fhir/subscriptionstatus-definitions.html#SubscriptionStatus.notificationEvent.focus) element.  This provides clients a fixed location to consolidate IDs for all notification types.

Notification bundles for `full-resource` subscriptions SHALL contain, in addition to the `SubscriptionStatus`, at least one `Bundle.entry` for each resource relevant to the notification. For example, a notification for a topic based on the Encounter resource SHALL include an Encounter and MAY include additional resources deemed relevant (e.g., the referenced Patient). Each `Bundle.entry` for a full-resource notification SHALL contain a relevant resource in the `entry.resource` element. If a server cannot include the resource contents due to an issue with a specific notification, the server SHALL populate the `entry.request` and/or `entry.response` elements.

From a security perspective, `full-resource` payloads should only be used when the channel is secure - notifications *will* contain PHI.

To summarize, in an `full-resource` notification:
* the status contains one or more `notificationEvent` entries, each with a `focus` or possibly one or more `additionalContext`, and
* the bundle will contain additional entries, and those entries will have the `resource` element present.

For examples, see [Bundle-r4-notification-full-resource](Bundle-r4-notification-full-resource.html) and [Bundle-r4b-notification-full-resource](Bundle-r4b-notification-full-resource.html).


---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/safety_security.md


### General Considerations

Applications are responsible for following [FHIR security guidance](http://hl7.org/fhir/security.html). Some recommendations specific to subscriptions are provided below.

A subscription is a request for future event notifications. As with any client-initiated interaction, a `Subscription` could request information a client is not allowed to see. Applications SHALL enforce authorization in accordance with their policy requirements. Applications SHOULD take a subscription's topic and filters into account when authorizing the creation of a `Subscription`, and SHOULD ensure that authorization is (still) in place when sending any event notifications.

When sending an event notification, applications can adopt various strategies to ensure that authorization is still in place. Some strategies may provide imperfect assurance (e.g., a server might rely on signed tokens with some pre-specified lifetime as evidence of authorization). In addition to these strategies, servers can mitigate the risk of disclosing sensitive information by limiting the payload types it supports (e.g., by prohibiting certain clients from requesting `full-resource` notification payloads and relying instead on `id-only` payloads).

`Subscription` resources are not intended to be secure storage for secrets (e.g., OAuth access tokens, etc.). Implementers MAY use their judgement on including limited-use secrets (e.g., a token supplied in the notification HTTP POST headers to verify that a message is from the desired source).

Each notification sent by the application could reveal information about the application and subscriber relationship, as well as sensitive administrative or clinical information. Applications are responsible for ensuring appropriate security is employed for each channel they support. The `Subscription` resource does not address these concerns directly; it is assumed that these are administered by other configuration processes. For instance, an application might maintain a allow-list of acceptable endpoints or trusted certificate authorities for rest-hook channels.

Some topic and server implementation combinations may trigger internal notification workflows when notifications should NOT be sent. For example, if a topic is designed around `Observation` resources being removed (e.g., deleted), an implementation may be triggered if an `Observation` is moved to a higher security level and is no longer available to a user. These types of situations are implementation-specific, so this note is to raise awareness of potential pitfalls when implementing subscriptions.

Subscribers should ensure an appropriate process to validate incoming messages. For example, if the `full-resource` content type is used, clients should provide a header or some other secret to the server so that messages can be verified prior to being used for health decisions. Using content types of `empty` or `id-only` can mitigate this risk, as resources must be retrieved from a trusted location prior to use.

Subscribers should be aware of, and protect against, the possibility of being used as part of an attack on a FHIR server. For example, a malicious client may send a large volume of fake notifications with `empty` notifications, which would cause the subscriber to send many (potentially expensive) queries to a server.

### Authorization within Notifications

It can be appropriate for a server to include authorization information alongside notifications.  This information could be used to inform a recipient about how authorization should be done when resolving resources from a request (e.g., when querying based on an `empty` notification or retrieving resources based on an `id-only` notification).

Depending on the channel used, notifications MAY or MAY NOT be secure from third parties.  Implementers SHOULD ensure that any authorization information included complies with security best practiced (e.g., providing a token exchanged during an OAuth workflow, along with other data such as a client authentication token, for an access token.)



---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/specification.md


This chapter details the technical specification of Topic-Based Subscriptions in FHIR R4.

1. [Actors](actors.html) - Defines the actors / systems involved in subscriptions.
1. [Topic-Based Subscription Components](components.html) - Defines and describes the components (FHIR Resources) used in subscriptions. 
1. [Workflow](workflow.html) - Provides a high-level overview of the workflow for creating a subscription and sending/receiving notifications.
1. [Channels](channels.html) - Describes the pre-defined channels used in subscriptions, how to select one, and how to extend into custom channel types.
1. [Notifications](notifications.html) - Details the contents of notifications.
1. [Payload Types](payloads.html) - Describes the different types of payloads available in notifications.
1. [Conformance](conformance.html) - Specifies minimum conformance requirements to conform with this IG.
1. [Handling Errors](errors.html) - Provides some information on detecting and handling errors for clients and servers.



---

File: repos/HL7_SLASH_fhir-subscription-backport-ig/input/pagecontent/workflow.md


This section gives an overview of the workflow for both Servers and Clients to work with Subscriptions.  Each [channel](channels.html) MAY vary slightly from this general overview - specifically around interactions involving the `Endpoint` (e.g., when using a `rest-hook` the client must pre-configure an HTTP endpoint which the server validates, but when using `websockets` the client simply connects to the server).

### Overview

The workflow for topic-based subscriptions can be broken down into three matched process steps for each a server or client:

<figure>
  {% include workflow-overview.svg %}
  <figcaption>High-level workflow overview</figcaption>
</figure>

|#|Server|Client|
|--|--|--|
|1.|Implement Topic-Based Subscriptions|Topic Discovery|
|2.|Subscription Negotiation|Request a Subscription|
|3.|Send Notifications|Receive Notifications|

### Workflow: FHIR R4B

<figure>
  {% include workflow-r4b.svg %}
  <figcaption>Sequence diagram of creating a FHIR Subscription in FHIR R4B</figcaption>
</figure>

1. Server implements the core functionality required for subscriptions (see [Conformance](conformance.html)).
1. Server implements one or more [SubscriptionTopic](http://hl7.org/fhir/R4B/subscriptiontopic.html) resources.  Implementation is specific to each topic, and will vary between servers.
1. Client asks the server for the list of supported [SubscriptionTopic](http://hl7.org/fhir/R4B/subscriptiontopic.html) resources, via querying the resource.
1. Server responds with a [searchset Bundle](http://hl7.org/fhir/R4B/bundle.html#searchset).
1. Client ensures that the endpoint is prepared (if applicable - see [Channels](channels.html)).
1. Client requests a [Subscription](http://hl7.org/fhir/R4B/subscription.html) (e.g., via `POST`, `PUT`, etc.).
1. Server MAY accept the [Subscription](http://hl7.org/fhir/R4B/subscription.html) request and mark it `active` (e.g., supported channel and payload, no handshake required).
1. Server MAY accept the [Subscription](http://hl7.org/fhir/R4B/subscription.html) request and mark it `requested` (e.g., supported channel and payload, handshake required).
1. Server sends a `handshake` bundle to the endpoint.
1. If the Endpoint responds appropriately, per the channel requirements (e.g., in REST an HTTP Success code such as 200), the Server updates the subscription to `active`.
1. Server MAY accept the [Subscription](http://hl7.org/fhir/R4B/subscription.html) request and mark it `requested` (e.g., supported channel and payload, handshake required).
1. Server sends a `handshake` bundle to the endpoint.
1. If the `handshake` fails (e.g., connection failure, bad response, etc.), the Server updates the subscription to `error`.
1. Server MAY reject the [Subscription](http://hl7.org/fhir/R4B/subscription.html) request (e.g., unsupported channel type).

Once the subscription is active, notifications will be sent according to the [Channel](channels.html).  Note that error states may occur, see [Handling Errors](errors.html) for more information.

### Workflow: FHIR R4

<figure>
  {% include workflow-r4.svg %}
  <figcaption>Sequence diagram of creating a FHIR Subscription in FHIR R4</figcaption>
</figure>

1. Server implements the core functionality required for subscriptions (see [Conformance](conformance.html)).
1. Server implements one or more subscription topics.  Implementation is specific to each topic, and will vary between servers.
1. *Optional* Client attempts topic discovery via the [CapabilityStatement SubscriptionTopic Canonical](StructureDefinition-capabilitystatement-subscriptiontopic-canonical.html) extension.
1. Server responds with its `CapabilityStatement`.
1. *Optional* Client attempts topic discovery via the `CapabilityStatement.instantiates` element.
1. Server responds with its `CapabilityStatement`.
1. *Optional* Client attempts topic discovery via the `CapabilityStatement.implementationGuide` element.
1. Server responds with its `CapabilityStatement`.
1. Client ensures that the endpoint is prepared (if applicable - see [Channels](channels.html)).
1. Client requests a [Subscription](http://hl7.org/fhir/R4/subscription.html) (e.g., via `POST`, `PUT`, etc.).
1. Server MAY accept the [Subscription](http://hl7.org/fhir/R4/subscription.html) request and mark it `active` (e.g., supported channel and payload, no handshake required).
1. Server MAY accept the [Subscription](http://hl7.org/fhir/R4/subscription.html) request and mark it `requested` (e.g., supported channel and payload, handshake required).
1. Server sends a `handshake` bundle to the endpoint.
1. If the Endpoint responds appropriately, per the channel requirements (e.g., in REST an HTTP Success code such as 200), the Server updates the subscription to `active`.
1. Server MAY accept the [Subscription](http://hl7.org/fhir/R4/subscription.html) request and mark it `requested` (e.g., supported channel and payload, handshake required).
1. Server sends a `handshake` bundle to the endpoint.
1. If the `handshake` fails (e.g., connection failure, bad response, etc.), the Server updates the subscription to `error`.
1. Server MAY reject the [Subscription](http://hl7.org/fhir/R4/subscription.html) request (e.g., unsupported channel type).

Once the subscription is active, notifications will be sent according to the [Channel](channels.html).  Note that error states may occur, see [Handling Errors](errors.html) for more information.


---

