# capstmt: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to provide a way for applications to describe their FHIR interface capabilities, including specific behaviors and features, and to enable clients to query these capabilities. It addresses the problem of the increasing complexity of the CapabilityStatement resource and the need for more granular feature negotiation. The context is FHIR-based interoperability, and it is intended for developers of FHIR applications, system administrators, and potentially other applications that need to understand the specific capabilities of FHIR servers and clients.

2.  **How does this IG improve upon previous approaches?** This IG improves upon previous approaches by moving away from adding more boolean flags and coded elements directly to the CapabilityStatement resource, which has become too large and complex. It introduces a terminological approach to feature definition and negotiation, allowing for more flexibility in querying and identifying supported features. It addresses the lack of subsetting and negotiation capabilities in the existing CapabilityStatement resource. It also allows for features to be specific to contexts.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   **Feature Definitions:** Using a logical structure (FeatureDefinition) to define features, including their URL, value type, context, and qualifiers.
    *   **Feature Declaration:** Using an extension (`feature`) to declare supported features in resources like CapabilityStatement, using a code to identify the feature and a value.
    *   **Feature Query:** Using a `$feature-query` operation and HTTP headers to query a server for supported features. This operation takes parameters specifying the feature name, context, and expected value and returns the matching features with their values and a processing status.
    *   **Feature Negotiation:** Support for negotiating specific features using both the `$feature-query` operation and `Required-Features` HTTP headers.
    *   **Feature Scope:** Features can be declared at different levels of scope within the CapabilityStatement, such as at the resource level or interaction level.
    *   **Contextual Features:** Features can be defined for specific contexts within a CapabilityStatement, for example, only for the CodeSystem resource.

4.  **How does this IG relate to broader healthcare standards and regulations?** The IG is built upon the FHIR standard, which is a widely adopted standard for healthcare data exchange. The IG uses the FHIR CapabilityStatement, OperationDefinition and Parameters resources. The IG also uses the m49 standard for jurisdiction.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users are developers of FHIR applications and system administrators who need to understand and manage the specific capabilities of FHIR systems. Patients are not directly impacted by this IG, but they indirectly benefit from improved interoperability and more robust FHIR applications that can correctly handle their healthcare data.
