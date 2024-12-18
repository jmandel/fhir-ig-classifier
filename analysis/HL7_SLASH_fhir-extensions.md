# fhir-extensions: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily focuses on defining extensions and providing guidance for their use within the FHIR ecosystem. It also addresses the need for custom validation rules and their reporting via OperationOutcome.
-   **Key clinical/business problems it solves:** It facilitates the extension of FHIR resources to capture data elements not covered by the base specification, enabling greater flexibility and customization for specific use cases. It also provides a standardized way to define and report custom validation rules, improving data quality and consistency.
-   **Intended scope and boundaries:** The scope includes defining a set of core extensions, providing guidance on inter-version conversion extensions, and establishing a framework for registering additional extensions. It also covers the definition and reporting of custom validation rules using FHIRPath and OperationOutcome. The IG does not define specific code systems or value sets but provides a mechanism to list them.

## Technical Foundation

-   **Core profiles and extensions:**
    -   The IG defines a base URI for extensions: `http://hl7.org/fhir/StructureDefinition/`.
    -   It introduces the `patient-interpreterRequired` extension to indicate the need for an interpreter in various contexts (Patient, RelatedPerson, Practitioner, Encounter).
    -   It defines the `targetConstraint` extension for custom validation rules, including properties like `key`, `severity`, `expression`, `human`, and `location`.
-   **Notable operations and interactions:**
    -   The IG does not define specific operations but implies the use of standard FHIR interactions for creating, updating, and retrieving resources with extensions.
    -   It emphasizes the use of OperationOutcome for reporting validation rule violations.
-   **Key terminology and value sets:**
    -   The IG does not define specific code systems or value sets but provides placeholders (`codesystem-list.xhtml` and `valueset-list.xhtml`) for their inclusion.
-   **Significant patterns and constraints:**
    -   The `targetConstraint` extension uses FHIRPath for defining validation rules (`expression`) and specifying the location of the error (`location`).
    -   It establishes a mapping between constraint properties and OperationOutcome issue properties for standardized reporting.

## Technical Essence

This IG provides a framework for extending FHIR resources and defining custom validation rules. Extensions are defined under the base URI `http://hl7.org/fhir/StructureDefinition/`. The `patient-interpreterRequired` extension indicates interpreter needs. The `targetConstraint` extension enables custom validation using FHIRPath expressions (`expression`) linked to human-readable messages (`human`) and error locations (`location`). Validation results are reported via OperationOutcome, mapping constraint properties to issue properties (e.g., `severity` to `issue.severity`, `key` to `issue.details.coding.code`). The `location` FHIRPath, evaluated on the target resource, pinpoints error locations in the `issue.expression`. When `location` is absent, the answer path is used. This design allows for flexible resource extension and standardized, detailed reporting of custom validation rule violations.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Implementers will define extensions as needed, adhering to the base URI.
    -   They will use the `targetConstraint` extension to define custom validation rules on Questionnaire resources.
    -   Validation engines will evaluate these rules and generate OperationOutcome resources with detailed issue information.
    -   User interfaces can leverage the `location` property to highlight errors in the context of the validated resource.
-   **Important requirements and guardrails:**
    -   Extensions must be registered, either in this specification or on the HL7 FHIR registry.
    -   Validation rules must adhere to the defined structure of the `targetConstraint` extension.
    -   OperationOutcome resources must follow the specified property mappings for consistent reporting.
-   **Notable design choices and patterns:**
    -   The use of FHIRPath for both validation rule definition and error location specification provides a powerful and flexible mechanism.
    -   The standardized mapping to OperationOutcome ensures interoperability in reporting validation results.

## Ecosystem Context

-   **Target systems and users:**
    -   Systems that need to capture data beyond the core FHIR specification.
    -   Systems that require custom validation rules to ensure data quality.
    -   Developers implementing FHIR extensions and validation logic.
    -   Users interacting with systems that display validation errors.
-   **Relationship to other standards/IGs:**
    -   This IG builds upon the core FHIR specification and provides a foundation for other IGs to define their own extensions and validation rules.
    -   It complements the HL7 FHIR registry, which serves as a central repository for extensions.
-   **Relevant jurisdictions or programs:**
    -   Not explicitly specified, but applicable to any context where FHIR is used and extensions or custom validation are needed.
-   **Primary use cases and scenarios:**
    -   Capturing specialized clinical data not covered by the base FHIR resources.
    -   Enforcing data quality rules specific to a particular organization or use case.
    -   Providing detailed feedback to users about validation errors, improving data entry accuracy.
    -   Indicating the need for an interpreter for a patient, related person, practitioner, or during an encounter.
