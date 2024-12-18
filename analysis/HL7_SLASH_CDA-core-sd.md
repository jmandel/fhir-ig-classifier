# CDA-core-sd: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of representing the HL7 Clinical Document Architecture (CDA) R2.0 specification using FHIR resources. It aims to bridge the gap between the widely adopted CDA standard and the newer FHIR standard, enabling the use of FHIR tools and infrastructure for CDA document validation and processing. It also supports the Consolidated CDA (C-CDA) specification by defining its templates using FHIR logical models.
-   **Key clinical/business problems it solves:** It facilitates the integration of CDA-based systems with FHIR-based systems, promoting interoperability and data exchange between different healthcare environments. By enabling FHIR validation of CDA documents, it enhances data quality and consistency. It also allows leveraging FHIR's capabilities for data analysis and processing of CDA content.
-   **Intended scope and boundaries:** The scope is the representation of the CDA R2.0 specification using FHIR logical models expressed as FHIR StructureDefinition instances. It includes the Overview, Implementation Notes, and Narrative Block information from the CDA specification. It does not replace the CDA specification itself but serves as a complementary guide for using FHIR with CDA. It does not cover document management aspects, only the exchange markup.

## Technical Foundation

-   **Core profiles and extensions:** The IG defines FHIR StructureDefinition instances for all CDA classes (e.g., `ClinicalDocument`, `Act`, `Observation`, `Procedure`, etc.) and V3 data types (e.g., `AD`, `CD`, `CE`, `II`, `TS`, etc.). It incorporates approved SDTC extensions (e.g., `sdtcTelecom` in `CustodianOrganization`) within the `urn:hl7-org:sdtc` namespace.
-   **Notable operations and interactions:** The IG does not define specific operations or interactions. However, it enables the use of standard FHIR operations for validation and processing of CDA documents represented as FHIR resources.
-   **Key terminology and value sets:** The IG references numerous value sets and code systems from the CDA specification, including those for act codes, observation codes, participation types, and data type components. It also includes a new code system for IG Parameters related to CDA validation.
-   **Significant patterns and constraints:** The IG defines constraints on FHIR resources to align with CDA requirements. It introduces a new FHIRPath function `hasTemplateIdOf([ProfileUrl])` to evaluate template IDs within CDA documents. It also specifies the use of `%resource` to refer to the root `ClinicalDocument` in FHIRPath expressions.

## Technical Essence

This IG meticulously maps the HL7 CDA R2.0 specification to FHIR by defining StructureDefinitions for each CDA class and V3 data type, enabling FHIR-based validation and processing of CDA documents. It leverages FHIR's profiling mechanism to represent CDA's structural and semantic constraints, including the incorporation of SDTC extensions. Key to this mapping is the use of FHIR's `CodeableConcept`, `Reference`, and other core data types to represent CDA's coded elements and relationships. The IG introduces a custom FHIRPath function, `hasTemplateIdOf`, to facilitate template-based validation within the FHIR ecosystem. For instance, a CDA `ClinicalDocument` is represented as a FHIR `StructureDefinition` with elements mapped to corresponding FHIR resource elements, such as `ClinicalDocument.code` mapping to `CodeableConcept` and `ClinicalDocument.recordTarget` mapping to `Reference(PatientRole)`. The IG also defines StructureDefinitions for CDA's complex data types like `AD` (address) and `II` (identifier), ensuring a comprehensive representation of CDA's data model in FHIR. This approach allows implementers to use FHIR validators and tooling to process CDA documents, effectively bridging the gap between CDA and FHIR ecosystems.

## Implementation Approach

-   **Critical workflows and interactions:** The IG supports workflows involving the creation, validation, and processing of CDA documents using FHIR tools. It enables the transformation of CDA documents into FHIR resources for integration with FHIR-based systems.
-   **Important requirements and guardrails:** Implementers must adhere to the defined StructureDefinitions and constraints when representing CDA documents in FHIR. They should use the provided FHIRPath supplements for template ID evaluation. The IG emphasizes that the CDA specification takes precedence in case of any discrepancies.
-   **Notable design choices and patterns:** The use of FHIR StructureDefinitions to represent CDA classes and data types is a key design choice. The inclusion of the `hasTemplateIdOf` function and the specification of `%resource` context in FHIRPath are notable patterns for CDA-specific validation.

## Ecosystem Context

-   **Target systems and users:** The IG targets systems that need to process or exchange CDA documents, including EHRs, EMRs, health information exchanges (HIEs), and other healthcare applications. Users include developers, implementers, and healthcare organizations working with CDA and FHIR.
-   **Relationship to other standards/IGs:** The IG is directly related to the HL7 CDA R2.0 specification and the Consolidated CDA specification. It complements other FHIR IGs that deal with clinical documents or healthcare data exchange.
-   **Relevant jurisdictions or programs:** The IG is relevant to any jurisdiction or program that uses CDA for clinical document exchange, particularly those adopting FHIR for interoperability.
-   **Primary use cases and scenarios:** The primary use cases include validating CDA documents using FHIR validators, transforming CDA documents into FHIR resources for integration with FHIR-based systems, and leveraging FHIR's capabilities for data analysis and processing of CDA content. It also supports scenarios where C-CDA templates are defined and validated using FHIR.
