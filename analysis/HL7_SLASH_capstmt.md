# capstmt: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The IG addresses the challenge of describing and negotiating specific FHIR implementation features beyond the basic resource and interaction support defined in a CapabilityStatement. It tackles the problem of increasingly large and complex CapabilityStatements by allowing for a more granular and flexible approach to feature declaration and discovery.
-   **Key clinical/business problems it solves:** It enables applications to precisely communicate their capabilities, allowing clients to determine if a server supports specific features required for their use cases. This facilitates better interoperability by enabling applications to tailor their interactions based on the specific features supported by their peers. It also allows for more efficient use of resources by avoiding unnecessary data transfer and processing.
-   **Intended scope and boundaries:** The IG focuses on defining a framework for describing, declaring, and querying application features related to FHIR interactions. It introduces the concept of "FeatureDefinitions" and provides mechanisms for associating features with specific resources, operations, and contexts within a FHIR implementation. The scope is limited to software behaviors that affect FHIR exchange and interoperability.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **FeatureCapabilityStatement:** A profile on CapabilityStatement that allows for feature extensions at various levels (rest, security, resource, interaction, searchParam, operation, messaging, document).
    -   **Feature:** An extension to document features using code/value pairs. It includes `definition` (Canonical(FeatureDefinition)) and `value` elements.
    -   **FeatureDefinition:** A logical model (potentially a future resource) defining a feature, including its URL, value type, allowed contexts, and optional qualifiers.
    -   **FeatureQueryInputParameters:** A Parameters profile defining the inputs for the `$feature-query` operation, including `name`, `context`, and `value`.
    -   **FeatureQueryOutputParameters:** A Parameters profile defining the outputs of the `$feature-query` operation, including `name`, `context`, `value`, `answer`, and `processing-status`.
-   **Notable operations and interactions:**
    -   **`$feature-query`:** A custom operation to query for features supported by a server. It accepts input parameters specifying the feature name, context, and desired value, and returns information about the server's support for the queried feature.
    -   **GET requests with `feature` parameter:** Clients can query for features using the `feature` parameter in GET requests to the `/metadata` endpoint.
    -   **HTTP Header `Required-Features`:** Clients can include feature assertions in the `Required-Features` HTTP header to indicate mandatory features for processing a request.
-   **Key terminology and value sets:**
    -   **CapabilityFeatureCS:** A CodeSystem defining codes for various capability features (e.g., `feature-header`, `security-cors`, `versioning`, `readHistory`).
    -   **CapabilityFeatureValueCS:** A CodeSystem defining values for capability features (e.g., `true`, `false`, `no-version`, `versioned`, `versioned-update`).
    -   **ProcessingStatusCS:** A CodeSystem defining codes for feature-query processing status (e.g., `all-ok`, `unknown`, `feature`, `context`, `unauthorized`).
    -   **CapabilityFeatureVS:** A ValueSet including codes from `CapabilityFeatureCS` and `http://hl7.org/fhir/restful-interaction`.
    -   **CapabilityFeatureValueVS:** A ValueSet including codes from `CapabilityFeatureValueCS`.
    -   **ProcessingStatusVS:** A ValueSet including codes from `ProcessingStatusCS`.
-   **Significant patterns and constraints:**
    -   Features are defined using `FeatureDefinition` instances, which specify the feature's URL, value type, allowed contexts, and qualifiers.
    -   Features are declared using the `Feature` extension, which can be applied to various elements within a CapabilityStatement.
    -   The `$feature-query` operation allows for flexible querying of features based on name, context, and value.
    -   The `Required-Features` HTTP header enables clients to specify mandatory features for a request.

## Technical Essence

This IG defines a feature negotiation framework built around a `FeatureDefinition` logical model that specifies a feature's unique `url`, `valueType` (e.g., boolean, code), allowed `context` (FHIR element paths), and optional `qualifier` elements. Applications declare supported features via a `Feature` extension, attachable to various CapabilityStatement elements, containing a `definition` (Canonical URL to a FeatureDefinition) and a typed `value`. Feature discovery is primarily enabled through a `$feature-query` operation using `FeatureQueryInputParameters` (with `name`, optional `context`, and optional `value` parts) and returning `FeatureQueryOutputParameters` (with corresponding `name`, `context`, `value`, boolean `answer` indicating match if input value was provided, and a `processing-status` code). Servers can optionally support a `Required-Features` HTTP header for mandatory feature negotiation on specific requests. This design allows for granular, extensible, and context-aware feature declaration and discovery, enabling clients to dynamically adapt to server capabilities beyond basic resource and interaction support.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  **Feature Definition:** Implementers define features using the `FeatureDefinition` model, specifying the feature's URL, value type, allowed contexts, and qualifiers.
    2.  **Feature Declaration:** Servers declare supported features in their CapabilityStatement using the `Feature` extension, applied to the relevant elements (e.g., rest, resource, interaction).
    3.  **Feature Query:** Clients use the `$feature-query` operation or the `feature` parameter in GET requests to query for specific features, optionally specifying the context and desired value.
    4.  **Feature Negotiation:** Clients can use the `Required-Features` HTTP header to indicate mandatory features for a request. Servers supporting this header must check for the specified features and return a 501 error if they are not supported.
-   **Important requirements and guardrails:**
    -   Servers SHOULD NOT populate their default CapabilityStatement with many features unless explicitly requested.
    -   Clients SHOULD use the `$feature-query` operation instead of downloading entire CapabilityStatements.
    -   Servers declaring support for the Application Feature Framework SHALL support the defined functionality (e.g., `$feature-query` operation).
-   **Notable design choices and patterns:**
    -   The use of a logical model (`FeatureDefinition`) for defining features allows for flexibility and extensibility.
    -   The `$feature-query` operation provides a standardized way to query for features.
    -   The `Required-Features` HTTP header enables dynamic feature negotiation on a per-request basis.

## Ecosystem Context

-   **Target systems and users:** FHIR servers and clients that need to communicate and negotiate specific implementation features beyond basic resource and interaction support.
-   **Relationship to other standards/IGs:** This IG complements the core FHIR specification and the CapabilityStatement resource. It provides a mechanism for extending the CapabilityStatement to describe more granular implementation details. It may also impact the TerminologyCapabilities resource in the future.
-   **Relevant jurisdictions or programs:** This IG is applicable globally, as indicated by the jurisdiction set to "World" (http://unstats.un.org/unsd/methods/m49/m49.htm#001).
-   **Primary use cases and scenarios:**
    -   A client needs to determine if a server supports versioned updates for a specific resource.
    -   A client wants to know if a server supports a particular search parameter with a specific modifier.
    -   A client requires a server to support a specific security feature (e.g., CORS) for a particular interaction.
    -   An application wants to declare that it conforms to a specific national specification or testing protocol.
