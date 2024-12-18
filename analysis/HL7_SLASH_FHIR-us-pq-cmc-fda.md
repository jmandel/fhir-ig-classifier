# FHIR-us-pq-cmc-fda: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of standardizing the submission of Pharmaceutical Quality/Chemistry, Manufacturing, and Controls (PQ/CMC) data to the US Food and Drug Administration (FDA). It aims to replace the current document-centric process with a structured, machine-readable format using FHIR, enabling more efficient and accurate data exchange.
-   **Key clinical/business problems it solves:** By standardizing PQ/CMC data, the IG aims to streamline the FDA's review process for drug product applications, potentially accelerating the approval of new drugs. It also improves data quality and consistency, reducing errors and ambiguities in submissions.
-   **Intended scope and boundaries:** The IG's scope is currently limited to solid oral dosage forms (SODF) and covers specific sections of the ICH Common Technical Document (CTD) Module 3, including Description and Composition of the Drug Product (3.2.P.1), General Substance Information (3.2.S.1), Control of Materials (3.2.S.2.3), and Specification (3.2.S.4.1; 3.2.P.4.1; 3.2.P.5.1). Future stages will expand to other dosage forms and CTD sections. Co-packaged products with diluents are currently out of scope.

## Technical Foundation

-   **Core profiles and extensions:** The IG defines numerous profiles on FHIR R5 resources, including Bundle, Composition, MedicinalProductDefinition, ManufacturedItemDefinition, Ingredient, SubstanceDefinition, Organization, PlanDefinition, and PackagedProductDefinition. Key extensions include `pq-amount-ratio`, `pq-product-batch-ingredient-extension`, `pq-specification-status-extension`, `pq-hierarchical-level-extension`, and `pq-target-range`.
-   **Notable operations and interactions:** The IG primarily focuses on document exchange using FHIR Bundle resources of type "document". Interactions are designed to fit within the eCTD v4.0 framework, with bundles representing specific CTD sections.
-   **Key terminology and value sets:** The IG leverages several terminologies, including NCI Thesaurus (NCIT), UNII, UNIPROT, CAS, UCUM, SNOMED CT, and custom value sets for specific domains like product part types, release profiles, and test categories.
-   **Significant patterns and constraints:** The IG uses a consistent pattern of representing eCTD sections as Bundle resources containing Composition resources that reference other profiled resources. Invariants enforce data integrity and consistency, such as requiring specific identifiers (UNII, DUNS), mandating the presence of certain elements based on dosage form or substance type, and defining relationships between different parts of the submission.

## Technical Essence

This IG defines a FHIR R5 based framework for submitting PQ/CMC data to the FDA within the eCTD v4.0 context. Each eCTD section is represented as a Bundle of type "document", with a Composition resource acting as the index. Key profiles include `DrugProductDescription` (on `MedicinalProductDefinition`) detailing the drug product, `FinishedProduct` (on `ManufacturedItemDefinition`) describing the product's composition, and `QualitySpecification` (on `PlanDefinition`) outlining tests and acceptance criteria. Substance information is captured using profiles like `DrugSubstanceNomenclatureStructure` and `ExcipientRaw` (on `SubstanceDefinition`). Organizations are represented using the `CodedOrganization` profile. The IG uses extensions like `pq-amount-ratio` to handle specific data representation needs. Invariants enforce constraints such as requiring UNII for certain substance categories and ensuring consistency between related elements. The design emphasizes structured data capture and validation, leveraging FHIR's capabilities for representing complex relationships and enforcing data integrity.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves creating FHIR bundles representing specific eCTD sections, populating them with data according to the defined profiles, and submitting them as part of an eCTD package. The IG provides detailed guidance on how to structure the bundles and populate the resources.
-   **Important requirements and guardrails:** Implementations must adhere to the defined profiles and extensions, ensuring data consistency and validity. Invariants enforce critical constraints, such as requiring specific identifiers and ensuring relationships between resources are correctly represented. The IG also specifies the use of specific terminologies and value sets.
-   **Notable design choices and patterns:** The use of Bundle resources to represent eCTD sections and Composition resources to index the content is a key design choice. The IG also uses a consistent pattern of referencing related resources within the bundle using literal references. The use of extensions allows for capturing domain-specific data elements not covered by the base FHIR resources.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are those used by biopharmaceutical companies to prepare and submit drug product applications to the FDA, and the FDA's systems for receiving and reviewing these submissions. The target users are regulatory affairs professionals, CMC scientists, and FDA reviewers.
-   **Relationship to other standards/IGs:** The IG is built on FHIR R5 and aligns with the ICH CTD and eCTD standards. It also relates to other HL7 projects, such as the Pharmaceutical Quality (Industry) project, which focuses on CMC data exchange between companies and their partners.
-   **Relevant jurisdictions or programs:** The IG is specifically designed for submissions to the US FDA.
-   **Primary use cases and scenarios:** The primary use case is the submission of PQ/CMC data to the FDA as part of a drug product application. The IG supports various scenarios, such as submitting information about a new drug product, updating existing information, and providing responses to FDA requests.
