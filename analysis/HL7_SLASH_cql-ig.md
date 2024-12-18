# cql-ig: Analysis

## Core Purpose & Scope

This Implementation Guide (IG) addresses the interoperability challenges associated with using Clinical Quality Language (CQL) with FHIR resources. It provides a universal realm specification for expressing clinical logic in a broad range of healthcare use cases, including clinical decision support, quality reporting, public health, and computable clinical guidelines. The IG's primary goal is to standardize the use of CQL with FHIR, enabling consistent and unambiguous interpretation of clinical logic across different systems and contexts. The scope is intentionally broad, encompassing any use case involving CQL libraries or expressions evaluating against FHIR resources. It defines profiles, extensions, operations, and capabilities to facilitate the authoring, publishing, distribution, and implementation of CQL-based FHIR knowledge artifacts.

## Technical Foundation

The IG is built upon several core technical components:

-   **Profiles:**
    -   `CQLLibrary`, `ELMJSONLibrary`, `ELMXMLLibrary`: Represent CQL libraries and their compiled Expression Logical Model (ELM) equivalents in FHIR.
    -   `CQLModelInfo`: Represents CQL Model Information as a FHIR Library resource.
    -   `CQLCapabilityStatement`: Describes a system's CQL evaluation capabilities.
    -   `CQLEvaluationResult`: Structures the result of evaluating logic.
    -   `CQLImplementationGuide`, `CQLStructureDefinition`: Support ModelInfo configuration.
    -   `CQLOptions`, `CQLModelInfoSettings`: Represent CQL translation and ModelInfo settings.
-   **Extensions:**
    -   `cqf-cqlOptions`: Specifies translator options.
    -   `cqf-modelInfo-isIncluded`, `cqf-modelInfo-isRetrievable`, `cqf-modelInfo-label`, `cqf-modelInfo-primaryCodePath`: Configure ModelInfo generation.
    -   `cqf-cqlType`, `cqf-defaultValue`, `cqf-directReferenceCode`, `cqf-fhirQueryPattern`, `cqf-inputParameters`, `cqf-isEmptyList`, `cqf-isSelective`, `cqf-notDoneValueSet`, `cqf-supportedCqlVersion`, `cqf-valueFilter`: Provide additional CQL-related capabilities.
-   **Operations:**
    -   `$cql`: Evaluates a CQL expression directly.
    -   `Library/$evaluate`: Evaluates a specified CQL library.
-   **Terminology:**
    -   Leverages standard code systems (e.g., SNOMED CT, LOINC) and defines specific value sets for use within the IG.
-   **Patterns and Constraints:**
    -   Defines naming conventions for libraries, identifiers, and data types.
    -   Specifies how to represent CQL constructs (e.g., code systems, value sets, parameters) in FHIR.
    -   Provides guidance on handling missing information, negation, and terminology usage.
    -   Outlines requirements for using ELM and ModelInfo.

## Technical Essence

This IG standardizes the use of CQL with FHIR by defining a comprehensive framework for representing, evaluating, and exchanging CQL-based logic. It leverages FHIR Library resources to encapsulate CQL libraries, their compiled ELM representations (in XML or JSON), and associated ModelInfo.  Libraries are identified using a canonical URL structure based on a defined CQL namespace (typically derived from the IG's package ID).  The IG mandates specific profiles for these libraries (`CQLLibrary`, `ELMJSONLibrary`, `ELMXMLLibrary`, `CQLModelInfo`) and defines extensions to configure translator options (`cqlOptions`) and ModelInfo generation (`cqf-modelInfo-*`).  Evaluation is supported through `$cql` and `Library/$evaluate` operations, with results structured using the `CQLEvaluationResult` profile.  The IG specifies detailed mappings between CQL and FHIR types, including handling of lists and tuples.  Data requirements are expressed using `dataRequirement` elements, with extensions like `cqf-isSelective` and `cqf-fhirQueryPattern` providing additional guidance.  Terminology usage is standardized, requiring canonical URLs for code systems and value sets, and promoting the use of the `in` operator for value set membership testing.  Negation is addressed through patterns involving `status`, `statusReason`, and `doNotPerform` elements, as well as the `cqf-notDoneValueSet` extension.  ModelInfo generation from profiles is automated, with extensions controlling inclusion, retrievability, labeling, and primary code paths.  Essentially, this IG provides a blueprint for packaging, configuring, and executing CQL logic within the FHIR ecosystem, ensuring interoperability and consistency across implementations.

## Implementation Approach

The IG is designed to be implemented by both authors of CQL-based knowledge artifacts and integrators building systems that support these artifacts.

-   **Critical Workflows:**
    -   Authoring CQL libraries and defining associated FHIR resources (e.g., PlanDefinition, Measure).
    -   Translating CQL to ELM using specified translator options.
    -   Generating ModelInfo from FHIR profiles and extensions.
    -   Packaging CQL, ELM, and ModelInfo into FHIR Library resources.
    -   Evaluating CQL expressions or libraries using the `$cql` or `Library/$evaluate` operations.
    -   Retrieving and processing evaluation results.
-   **Important Requirements:**
    -   Adherence to defined profiles and extensions.
    -   Use of canonical URLs for libraries, code systems, and value sets.
    -   Proper handling of library versioning and dependencies.
    -   Consistent use of naming conventions.
    -   Consideration of translator options and ELM suitability.
-   **Notable Design Choices:**
    -   Use of FHIR Library as the primary container for CQL logic.
    -   Leveraging extensions to configure translator options and ModelInfo generation.
    -   Defining specific profiles for different types of libraries (CQL, ELM, ModelInfo).
    -   Providing detailed guidance on handling negation and missing information.

## Ecosystem Context

-   **Target Systems:** Systems involved in authoring, publishing, distributing, and implementing FHIR knowledge artifacts, including clinical decision support systems, quality measurement systems, and research platforms.
-   **Target Users:** Authors of CQL-based logic, implementers of FHIR systems, and clinical informaticists.
-   **Relationship to Other Standards/IGs:**
    -   Relies on the base FHIR specification (R4).
    -   Builds upon and refines concepts from previous IGs, including Clinical Guidelines, Quality Measures, QI-Core, and CRMI.
    -   References the CQL specification.
    -   Relates to the HL7 Cross-Paradigm Specification: Representing Negatives.
    -   Leverages standard terminologies like SNOMED CT and LOINC.
-   **Jurisdictions/Programs:** Universal realm, applicable to any healthcare context using CQL with FHIR.
-   **Primary Use Cases:**
    -   Defining and evaluating quality measures.
    -   Implementing clinical decision support rules.
    -   Creating computable clinical guidelines.
    -   Supporting public health reporting.
    -   Conducting research studies.
    -   Defining eligibility criteria for clinical trials.
