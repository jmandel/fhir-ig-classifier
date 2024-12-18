# smart-web-messaging: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of tight UI integration between EHRs and embedded SMART apps, particularly the lack of standardized mechanisms for apps to communicate decisions, interact with draft resources, and influence EHR navigation. It goes beyond the capabilities of FHIR's RESTful API and CDS Hooks by enabling real-time, bidirectional communication within the user's workflow.
-   **Key clinical/business problems it solves:** It enables apps to directly contribute to clinical workflows by pushing unsigned orders, note snippets, risk scores, or UI suggestions to the EHR. This facilitates streamlined decision-making, reduces clicks, and improves the overall user experience for clinicians. It also allows apps to interact with the EHR's "scratchpad" (draft resources), enabling workflows like order placement and problem list management.
-   **Intended scope and boundaries:** The scope is limited to web applications launched within an EHR context, either embedded in an iframe or in a new tab/window. It focuses on defining a messaging protocol built on HTML5's `window.postMessage` and does not address context synchronization (like FHIRCast). The IG defines a set of standardized activities but allows for EHR-specific custom activities.

## Technical Foundation

-   **Core profiles and extensions:** This IG does not define specific FHIR profiles but leverages existing FHIR resources like `Bundle`, `Condition`, `ServiceRequest`, and `MedicationRequest`. It uses FHIR extensions for request and response payloads.
-   **Notable operations and interactions:** The core interactions are based on message passing using `window.postMessage`. Key message types include `status.*` (handshake), `ui.*` (UI influence), `scratchpad.*` (scratchpad interaction), and `fhir.http` (FHIR server interaction).
-   **Key terminology and value sets:** The IG defines a `LaunchStatusCode` CodeSystem with values `success` and `error` to indicate the outcome of UI activity launches. It also introduces an "Activity Catalog" with standardized activity types like `appointment-book`, `order-review`, and `problem-review`, aligning with CDS Hooks naming conventions.
-   **Significant patterns and constraints:** The messaging pattern involves a request message from the app or EHR and a response message. All messages include a `messageId` for correlation, and responses include a `responseToMessageId`. The `smart_web_messaging_handle` is used to link messages to the authorization context.

## Technical Essence

This IG defines a secure, bidirectional communication channel between a SMART app and its launching EHR using `window.postMessage`.  At launch, the app receives a `smart_web_messaging_handle` and the EHR's `smart_web_messaging_origin` alongside the OAuth access token.  Apps send JSON messages with a unique `messageId`, the `messagingHandle`, `messageType` (e.g., `ui.launchActivity`, `scratchpad.create`, `fhir.http`), and a `payload` specific to the message type.  The EHR responds with a `messageId`, `responseToMessageId` (matching the request's `messageId`), and a `payload` containing operation results or requested data.  `ui.*` messages allow apps to request EHR navigation to predefined activities (e.g., `order-review`) or signal completion (`ui.done`). `scratchpad.*` messages enable CRUD operations on draft FHIR resources within the EHR's temporary storage, identified by `resourceType/id` locations. `fhir.http` messages allow apps to submit FHIR batch/transaction bundles to the EHR's FHIR server, effectively acting as a proxy for direct FHIR API access. Authorization is managed via `messaging/*` OAuth scopes, granting access to message groups.

## Implementation Approach

-   **Critical workflows and interactions:** The handshake (`status.handshake`) establishes messaging capability. Apps can then influence the EHR UI (`ui.done`, `ui.launchActivity`), interact with the scratchpad (`scratchpad.create`, `scratchpad.read`, `scratchpad.update`, `scratchpad.delete`), and access the FHIR server (`fhir.http`).
-   **Important requirements and guardrails:** EHRs must validate the `smart_web_messaging_handle` and the message origin. Apps must use the correct `targetOrigin` for `postMessage`. Response messages must correlate with request messages using `messageId` and `responseToMessageId`.
-   **Notable design choices and patterns:** The use of `window.postMessage` provides a browser-native, cross-domain messaging solution. The `smart_web_messaging_handle` provides a mechanism to link messages to the authorization context without exposing the access token to the browser. The Activity Catalog provides a standardized set of navigation targets.

## Ecosystem Context

-   **Target systems and users:** The target systems are EHRs that can embed web applications and SMART apps launched within those EHRs. The primary users are clinicians who interact with these apps within their workflow.
-   **Relationship to other standards/IGs:** This IG complements SMART App Launch and CDS Hooks. It leverages HTML5's Web Messaging and FHIR's RESTful API. It is designed to be compatible with FHIR R4 and above.
-   **Relevant jurisdictions or programs:** The IG is published by HL7 International - FHIR Infrastructure WG and is applicable globally, as indicated by the jurisdiction "World".
-   **Primary use cases and scenarios:** The primary use cases involve apps assisting with order entry, problem list management, appointment booking, and other clinical tasks by directly interacting with the EHR's UI and draft resources. For example, an app could suggest a diagnosis and, upon user acceptance, add it to the problem list via a `scratchpad.create` message followed by a `ui.launchActivity` message to navigate the user to the problem list view.
