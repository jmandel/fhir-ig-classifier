# infsec: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the secure and consistent implementation of pseudonymization within FHIR resources in the Belgian healthcare context. It also clarifies the use of profiles and versions for maintaining computable and semantic integrity of resources stored in a vault.
-   **Key clinical/business problems it solves:** It enables the sharing of sensitive patient data while complying with privacy regulations like GDPR by providing a standardized method for pseudonymizing information. It also ensures that the integrity of stored data is maintained, which is crucial for legal and medical purposes.
-   **Intended scope and boundaries:** The scope is limited to pseudonymization techniques for both short (<= 32 bytes) and long texts within FHIR resources. It focuses on the Belgian eHealth platform and its specific requirements for data integrity.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `BeExtPseudonymization`: A marker extension to indicate that a string field is pseudonymized. It includes fields for a marker (boolean), format (code: direct or encrypted), and version (positiveInt).
    -   `BeExtKeyPseudonymization`: An extension added to the `Meta` section of a resource to hold a pseudonymized key used for encrypting long text fields.
    -   `BeExtIntendedProfile`: An extension to specify the intended profile and version for a resource, ensuring semantic integrity.
-   **Notable operations and interactions:** The IG defines content negotiation for pseudonymization using `Accept-Be-Pseudo` and `Content-Be-Pseudo` HTTP headers. Servers can indicate supported pseudonymization versions in their CapabilityStatement.
-   **Key terminology and value sets:**
    -   `BeCSPseudonymizationType`: CodeSystem defining types of pseudonymization (direct, encrypted).
    -   `BeCSPseudonymizationVersion`: CodeSystem listing pseudonymization versions (urn:be:fgov:ehealth:pseudo:v1, urn:be:fgov:ehealth:pseudo:v2, urn:be:fgov:pseudo-encrypted:v1).
    -   `BeVSPseudonymizationType`: ValueSet including codes from `BeCSPseudonymizationType`.
-   **Significant patterns and constraints:**
    -   Pseudonymized values are marked with the `BeExtPseudonymization` extension.
    -   Short text pseudonyms can be encoded as base64 JSON or URNs (v1, v2).
    -   Long text pseudonyms use the format `urn:be:fgov:pseudo-encrypted:v1:{KID}:{JWE}` and rely on a key stored in the `BeExtKeyPseudonymization` extension.
    -   `BeExtIntendedProfile` requires both canonical URL and version to be present (Invariant: `BeInvUrlAndVersionCanonical`).

## Technical Essence

This IG defines a robust pseudonymization framework for FHIR resources within the Belgian eHealth context. For short text fields (<= 32 bytes), the original value is replaced with a pseudonym, either a base64 encoded JSON string containing cryptographic details (x, y, transitInfo) or a URN of the format `urn:be:fgov:pseudo:v1:{base64 JSON}` or `urn:be:fgov:pseudo:v2:{SEC1}:{transitInfo}`. The presence of a pseudonym is indicated by the `BeExtPseudonymization` extension, which also specifies the format (direct/encrypted) and version. For long text fields, the value is replaced with a URN of the format `urn:be:fgov:pseudo-encrypted:v1:{KID}:{JWE}`, where KID refers to a key stored in the resource's `Meta` section under the `BeExtKeyPseudonymization` extension. This key itself is pseudonymized using the short text method. Searching on pseudonymized fields is achieved by prefixing the search parameter with `urn:be:fgov:ehealth:pseudo:v1:` or `urn:be:fgov:ehealth:pseudo:v2:`. Content negotiation is supported via `Accept-Be-Pseudo` and `Content-Be-Pseudo` headers, allowing clients and servers to agree on the pseudonymization version. The `BeExtIntendedProfile` extension, containing a canonical URL with a version, is used to enforce semantic integrity by indicating the intended profile for the resource.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Clients can express their pseudonymization preferences using the `Accept-Be-Pseudo` header.
    -   Servers indicate the used pseudonymization version with the `Content-Be-Pseudo` header and list supported versions in their CapabilityStatement.
    -   Pseudonymized data is searched using the normal search parameters, prefixed with the appropriate URN.
    -   Vaults will prioritize the profile and version in `BeExtIntendedProfile` for validation.
-   **Important requirements and guardrails:**
    -   Pseudonymization should not impact resource validation.
    -   Vaults will only accept resources with the `BeExtIntendedProfile` extension.
    -   Computational and semantic integrity must be maintained for resources stored in vaults.
-   **Notable design choices and patterns:**
    -   Use of extensions to mark and manage pseudonymized data.
    -   Content negotiation for pseudonymization versions.
    -   Emphasis on the `BeExtIntendedProfile` extension for semantic integrity.

## Ecosystem Context

-   **Target systems and users:** Belgian eHealth platform, healthcare providers, and systems interacting with the platform's data vaults.
-   **Relationship to other standards/IGs:**  Relies on standard FHIR R4 and leverages concepts from other IGs through aliases (e.g., HL7 v3, SNOMED CT, LOINC).
-   **Relevant jurisdictions or programs:** Belgium, specifically the eHealth platform.
-   **Primary use cases and scenarios:**
    -   Securely sharing patient data while complying with GDPR.
    -   Maintaining the integrity of medical records stored in data vaults.
    -   Enabling research on pseudonymized data without compromising patient privacy.
    -   Facilitating data exchange between different healthcare systems within Belgium.
