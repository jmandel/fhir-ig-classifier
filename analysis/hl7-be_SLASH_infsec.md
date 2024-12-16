# infsec: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to define how to handle pseudonymization and ensure data integrity within FHIR resources, specifically in the context of the Belgian eHealth platform. It seeks to provide a standardized way to replace sensitive data with pseudonyms, allowing for data linkage while protecting privacy. It also addresses the need for computable and semantic integrity of stored resources by including profile and version information. The intended audience is developers and implementers working with the Belgian eHealth platform.

2.  **How does this IG improve upon previous approaches?**
    The IG introduces a standardized way to mark pseudonymized fields using a specific extension (`BeExtPseudonymization`) and defines different pseudonymization formats (direct and encrypted). It also provides a mechanism to handle long texts (larger than 32 bytes) using an encrypted pseudonymization approach and a key stored in the resource's meta section. Furthermore, it introduces the `BeExtIntendedProfile` extension to explicitly state the intended profile and version of a resource, addressing the need for semantic integrity. The IG also addresses content negotiation for pseudonymization using the `Accept-Be-Pseudo` and `Content-Be-Pseudo` HTTP headers.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Use of the `BeExtPseudonymization` extension to mark pseudonymized fields.
    *   Two pseudonymization formats: "direct" for short texts and "encrypted" for long texts.
    *   A `BeExtKeyPseudonymization` extension to hold the pseudonymized key for encrypted fields.
    *   Use of urn-style prefixes (`urn:be:fgov:pseudo:v1`, `urn:be:fgov:pseudo:v2`, `urn:be:fgov:pseudo-encrypted:v1`) to identify pseudonymized values.
    *   The `BeExtIntendedProfile` extension to specify the intended profile and version.
    *   Content negotiation using custom HTTP headers (`Accept-Be-Pseudo` and `Content-Be-Pseudo`).
    *   Use of CodeSystems (`BeCSPseudonymizationType`, `BeCSPseudonymizationVersion`) and ValueSets (`BeVSPseudonymizationType`) to define the types and versions of pseudonymization.
    *   A FHIR invariant `BeInvUrlAndVersionCanonical` that enforces the presence of both a URL and a version in the `valueCanonical` of extensions using that type.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is specifically aligned with the Belgian eHealth platform and its requirements for pseudonymization and data integrity. It addresses GDPR concerns by implementing pseudonymization techniques. It builds upon the FHIR standard by using extensions and profiles and provides guidance on how to implement these features in a secure and interoperable way. It also refers to RFC 6648 for the design of the custom headers.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are developers and implementers working with the Belgian eHealth platform who need to handle sensitive data, ensuring both privacy and interoperability. Patients indirectly benefit from this IG as it contributes to the secure handling of their health data. The IG does not directly involve patient interaction.
