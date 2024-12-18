# FormatCode: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of precisely identifying the technical format of a document beyond the basic encoding indicated by the mimeType. It provides a standardized vocabulary (FormatCode) to specify the detailed technical structure, profiled constraints, and content requirements of a document.
-   **Key clinical/business problems it solves:** It enables systems to accurately determine if they can process and display a document based on its technical format, ensuring interoperability and reducing ambiguity in document exchange. It also facilitates the identification of documents conforming to specific IHE Document Content Profiles.
-   **Intended scope and boundaries:** The scope is limited to defining and managing the IHE FormatCode vocabulary and its associated ValueSet. It does not define new document content profiles but provides a mechanism to identify them. It also deprecates previously used HL7 codes, directing users to the official HL7 CodeSystem.

## Technical Foundation

-   **Core profiles and extensions:** This IG does not define any FHIR profiles or extensions.
-   **Notable operations and interactions:** No specific FHIR operations or interactions are defined.
-   **Key terminology and value sets:**
    -   **CodeSystem:** `formatcode` (http://ihe.net/fhir/CodeSystem/formatcode) - Defines codes for technical document formats defined by IHE.
    -   **ValueSet:** `formatcode` (http://ihe.net/fhir/ValueSet/formatcode) - Contains the set of codes for use in FormatCode metadata.
    -   **Deprecated CodeSystem:** `http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem` -  Indicates the old canonical URI for the IHE FormatCode CodeSystem.
    -   **External CodeSystem:** `http://terminology.hl7.org/CodeSystem/v3-HL7DocumentFormatCodes` - The official HL7 CodeSystem for document format codes, replacing previously used IHE codes.
-   **Significant patterns and constraints:**
    -   FormatCode values are URNs for IHE-defined codes, prefixed with `urn:ihe:iti:` for ITI domain codes and `urn:ihe:{domain initials}:` for other IHE domains.
    -   The special code `urn:ihe:iti:xds:2017:mimeTypeSufficient` indicates that the mimeType alone is sufficient to identify the document's technical format.

## Technical Essence

This IG establishes a controlled vocabulary, `formatcode`, for precisely identifying the technical format of healthcare documents within the IHE ecosystem. The core is a FHIR CodeSystem resource defining IHE-specific codes as URNs, alongside a ValueSet resource encompassing these codes for use in document metadata. The design emphasizes a clear distinction between mimeType (encoding) and FormatCode (content structure and constraints). IHE domain-specific codes follow a standardized URN prefix pattern (`urn:ihe:iti:` or `urn:ihe:{domain initials}:`). A special code, `urn:ihe:iti:xds:2017:mimeTypeSufficient`, is provided for cases where mimeType alone suffices. The IG deprecates previously used HL7 codes, pointing implementers to the official HL7 CodeSystem for those values. The IG itself does not define any FHIR profiles or operations, focusing solely on the vocabulary definition and management.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves systems using the FormatCode ValueSet to populate the FormatCode metadata element when creating or exchanging documents. Receiving systems then use this code to determine if they can process the document based on its technical format.
-   **Important requirements and guardrails:** Implementers must use the correct URN format for IHE-defined codes and refer to the official HL7 CodeSystem for previously used HL7 codes. They should also use the `mimeTypeSufficient` code appropriately.
-   **Notable design choices and patterns:** The use of URNs for FormatCode values ensures uniqueness and facilitates decentralized management of the vocabulary. The separation of CodeSystem and ValueSet allows for flexibility in defining and using the codes.

## Ecosystem Context

-   **Target systems and users:** The target systems are those involved in exchanging healthcare documents within the IHE framework, including document repositories, registries, and consumers. The users are developers and implementers of these systems.
-   **Relationship to other standards/IGs:** This IG is closely related to IHE profiles that define document content, such as those in the ITI domain. It also interacts with the HL7 standard for document format codes.
-   **Relevant jurisdictions or programs:** This IG is relevant to any healthcare setting where IHE profiles are used for document exchange.
-   **Primary use cases and scenarios:** The primary use case is the accurate identification of document technical formats during document exchange to ensure interoperability. This includes scenarios where systems need to determine if they can process a document based on its format or when searching for documents conforming to specific IHE profiles.
