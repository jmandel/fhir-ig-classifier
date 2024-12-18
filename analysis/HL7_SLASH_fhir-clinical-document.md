# fhir-clinical-document: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the lack of a standardized approach to representing clinical documents in FHIR. It tackles the inconsistencies arising from numerous existing Bundle and Composition profiles used for clinical documents, many derived from the HL7 Clinical Document Architecture (CDA) standard.
-   **Key clinical/business problems it solves:** It provides a common, universal starting point for creating FHIR clinical document specifications, enabling consistent representation and exchange of clinical documents. It also supports the migration from CDA to FHIR-based clinical documents.
-   **Intended scope and boundaries:** This IG defines a canonical representation of a clinical document in FHIR, focusing on the universal realm. It derives from core FHIR Documents guidance and aligns with CDA, but is not a mirror image. The current version focuses on FHIR artifacts reflecting the CDA Header, including header attributes, participants (excluding entities), relationships (excluding related Acts), body choice, section attributes, section participants (excluding RIM entities), and section relationships (excluding RIM Acts). Future updates may expand beyond current CDA capabilities.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `ClinicalDocumentBundle`: Profile on Bundle, requiring type `#document`, a globally unique identifier, and a timestamp. It mandates at least one entry, which must be a `ClinicalDocumentComposition`.
    -   `ClinicalDocumentComposition`: Profile on Composition, specifying constraints for document metadata and relationships. It includes extensions like `DataEntererExtension`, `InformantExtension`, `InformationRecipientExtension`, `ParticipantExtension`, `ConsentExtension`, and `OrderExtension`. It also backports the R5 `Composition.version` extension.
    -   Notable extensions include `DataEntererExtension`, `InformantExtension`, `InformationRecipientExtension`, and `ParticipantExtension` which are based on CDA constructs and use a pattern of sub-extensions for type, function, time, and party.
-   **Notable operations and interactions:**
    -   `convert-to-transaction-bundle`: An operation to convert a FHIR Clinical Document (Bundle of type `document`) into a FHIR transaction bundle (Bundle of type `transaction`). This addresses the issue that many FHIR servers are only designed to parse specific bundle types.
    -   Mentions the use of the `StructureMap` based Transform Operation for transforming CDA to FHIR Clinical Documents.
    -   References the `$document` Core Operation for requesting a FHIR Document based on a Composition.
-   **Key terminology and value sets:**
    -   `ClinicalDocParticipantTypesVs`: A value set defining participant types for clinical documents, derived from `v3-ParticipationType`.
    -   `ClinicalDocInformationRecipientVs`: A value set for information recipient types.
    -   `ClinicalDocParticipantVs`: A value set for participant types not used in other slices.
    -   Uses standard code systems like LOINC (`$LNC`), SNOMED CT (`$SCT`), UCUM (`$UCUM`), and RxNorm (`$RXN`).
-   **Significant patterns and constraints:**
    -   The IG enforces constraints like `clindoc-first-degree` (requiring all first-degree Composition references to be in the Bundle) and `clindoc-timestamp-ge-compoDate` (ensuring Bundle timestamp is on or after Composition date).
    -   Defines specific slicing for `entry` in `ClinicalDocumentBundle` and `attester` and `relatesTo` in `ClinicalDocumentComposition`.
    -   Specifies cardinality constraints for various elements, such as `identifier`, `timestamp`, `entry`, `subject`, `author`, `custodian`, and `section`.

## Technical Essence

This IG standardizes FHIR Clinical Documents as Bundles of type `document` containing a specialized Composition resource and its referenced resources. The Composition, profiled as `ClinicalDocumentComposition`, mandates a globally unique identifier, status, type, subject, date, author, title, and custodian. It leverages extensions to capture CDA-aligned concepts like data enterer, informant, information recipient, and other participants, each detailed with type, function, time, and party sub-extensions. The Composition also includes sections, each with a code, title, and text, and can reference other resources via `entry`. Document succession is managed through `relatesTo`, with codes for `replaces` and `appends`, referencing the target document's Bundle identifier. The `convert-to-transaction-bundle` operation facilitates processing by transforming the document Bundle into a transaction Bundle. In essence, the IG defines a structured, extensible framework for representing and exchanging clinical documents in FHIR, bridging the gap between CDA and FHIR while leveraging core FHIR resource patterns and operations.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Creation and exchange of FHIR Clinical Documents as Bundles.
    -   Document replacement and addendum using `Composition.relatesTo`.
    -   Conversion of a document Bundle to a transaction Bundle using the `convert-to-transaction-bundle` operation.
    -   Transformation of CDA documents to FHIR Clinical Documents using StructureMap.
-   **Important requirements and guardrails:**
    -   Adherence to the defined profiles and extensions.
    -   Compliance with specified constraints and cardinality rules.
    -   Proper use of `relatesTo` for document succession management.
    -   Rendering of attested narrative from `Composition.section.text`, with optional rendering of `Composition.text` and structured fields.
-   **Notable design choices and patterns:**
    -   Use of Bundle of type `document` as the primary container for FHIR Clinical Documents.
    -   Backporting of R5 `Composition.version` for version tracking.
    -   Detailed modeling of participants using extensions with a consistent pattern.
    -   Mapping of CDA NonXMLBody to `Composition.section` with a reference to a DocumentReference or Binary.

## Ecosystem Context

-   **Target systems and users:** Systems and users involved in the creation, exchange, and consumption of clinical documents, including EHRs, clinical document management systems, and other healthcare IT systems.
-   **Relationship to other standards/IGs:** This IG is heavily influenced by the HL7 CDA standard and aims to provide a FHIR-based alternative. It also borrows from the International Patient Summary (IPS) IG and the C-CDA on FHIR IG. It is intended to replace the current FHIR R4 and R5 Core Clinical Document guidance.
-   **Relevant jurisdictions or programs:** This is a universal realm guide, intended for use worldwide.
-   **Primary use cases and scenarios:**
    -   Exchange of clinical documents between healthcare providers and organizations.
    -   Migration from CDA-based clinical documents to FHIR-based clinical documents.
    -   Storage and management of clinical documents in FHIR repositories.
    -   Supporting various document types, including discharge summaries, progress notes, and consultation reports.
    -   Handling document succession, including replacement and addendum scenarios.
    -   Rendering of clinical documents for human readability.
