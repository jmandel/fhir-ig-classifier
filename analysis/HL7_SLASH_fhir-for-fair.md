# fhir-for-fair: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of making health data Findable, Accessible, Interoperable, and Reusable (FAIR) by leveraging the HL7 FHIR standard. It focuses on representing metadata for health datasets, particularly at the study and subject levels, to facilitate data discovery, access, and reuse.
-   **Key clinical/business problems it solves:** The IG aims to solve the problem of underutilized health data by providing a standardized way to describe and share datasets. This enables researchers and data scientists to more easily find and access previously collected data, fostering collaboration and accelerating research. It also addresses the need for clear data usage licenses and provenance information.
-   **Intended scope and boundaries:** The scope of this IG is limited to guidance on using HL7 FHIR to support FAIR health data implementation and assessment. It focuses on health data and does not cover other health-related artifacts like clinical guidelines or algorithms. Privacy, security, endpoint discovery, and provenance management are noted as being out of scope for this version.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `Library-uv-f4f` (Study Level Metadata), `ResearchStudy-uv-f4f` (Study Level Metadata), `DocumentManifest-uv-f4f` (Subject Level Metadata), `List-uv-f4f` (Subject Level Metadata).
    -   **Extensions:** `ExtContext`, `ExtCopyright`, `ExtLicenceCodeable`, `ExtLicenceAttachment`, `ExtRelatedContent`, `ExtSubjectOther`, `ExtClassifier`, `ExtRelatedArtifactType`, `ExtRelatedArtifactClassifier`, `ExtRelatedArtifactResourceReference`.
-   **Notable operations and interactions:** The IG emphasizes the use of FHIR's RESTful API for searching and retrieving resources representing metadata and data. It suggests using `CapabilityStatement` to describe server capabilities.
-   **Key terminology and value sets:** The IG references several standard terminologies, including SNOMED CT (`$sct`), ATC (`$atc`), UCUM (`$ucum`), and RadLex (`$radlex`). It also defines a custom value set `VsRelatedArtifactType` and code system `CsRelatedArtifactType`.
-   **Significant patterns and constraints:** The IG promotes the use of globally unique, persistent, and resolvable identifiers (GUPRIs) for resources. It suggests using both the resource's logical ID and business identifiers when referencing other resources. It also emphasizes the importance of rich metadata and recommends defining what constitutes "rich" metadata within specific communities.

## Technical Essence

This IG defines a framework for representing FAIR health data metadata using FHIR R4B resources, primarily `Library` and `ResearchStudy` for study-level metadata, and `DocumentManifest` and `List` for subject-level metadata. It extends `RelatedArtifact` to include classifiers and resource references, enabling richer relationships between resources. Study-level metadata is exemplified through profiles like `Library-uv-f4f`, which uses extensions like `ExtRelatedContent` to link to related artifacts and `ExtCopyright` to specify copyright information. Subject-level metadata, as in `DocumentManifest-uv-f4f`, uses extensions like `ExtSubjectOther` to broaden the scope of subjects beyond the standard set. The IG mandates the inclusion of GUPRIs in resource identifiers, using the `url` slice for resolvable identifiers. It leverages standard terminologies like SNOMED CT and defines custom value sets for specific needs, such as `VsRelatedArtifactType`. Implementers would create instances of these profiles, populating them with relevant metadata and linking them using resource references and identifiers, ensuring that the resources are accessible via a FHIR server supporting standard search operations.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves researchers or data providers creating instances of the defined profiles (e.g., `Library`, `ResearchStudy`, `DocumentManifest`, `List`) to represent metadata for their datasets. These resources are then published on a FHIR server, making them discoverable and accessible via the FHIR RESTful API.
-   **Important requirements and guardrails:** Implementers must ensure that resources have GUPRIs and that metadata is sufficiently rich to enable discovery. They should also adhere to the specified profiles and extensions, using appropriate terminologies and value sets.
-   **Notable design choices and patterns:** The IG emphasizes a pragmatic approach to distinguishing between data and metadata, particularly at the subject level. It suggests using extensions to enhance existing resources rather than creating entirely new ones. It also promotes an iterative approach to implementing FAIR principles.

## Ecosystem Context

-   **Target systems and users:** The target systems are FHIR servers and clients used by researchers, health data providers, technical implementers, government agencies, and the public. Target users include researchers, data scientists, clinicians, and individuals interested in accessing and using health data.
-   **Relationship to other standards/IGs:** This IG builds upon the HL7 FHIR standard and aligns with the FAIR principles. It references and extends existing FHIR resources and data types. It can be used in conjunction with other IGs that define domain-specific data models.
-   **Relevant jurisdictions or programs:** The IG is relevant to any jurisdiction or program that deals with health data sharing and reuse, particularly those that are adopting or promoting FAIR principles. Examples include the European Union's Horizon 2020 program and the Research Data Alliance (RDA).
-   **Primary use cases and scenarios:** The primary use cases involve making health datasets FAIR, enabling researchers to find, access, and reuse data for various purposes, such as conducting studies, developing algorithms, and improving healthcare delivery. The IG provides examples based on real-world cases like FAIR4Health, MIMIC-IV-ED, ImmPort, NInFEA, Leipzig Health Atlas, NFDI4Health, CEDAR, and the Personal Health Train.
