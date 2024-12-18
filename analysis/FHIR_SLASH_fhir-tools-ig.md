# fhir-tools-ig: Analysis

## Core Purpose & Scope

This Implementation Guide (IG) focuses on defining extensions and configurations for the FHIR IG Publisher, specifically to support the representation and processing of logical models and non-FHIR resource formats. It does not address clinical or business problems directly but rather provides technical infrastructure for handling data formats beyond standard FHIR resources. The scope is limited to extending the IG Publisher's capabilities and defining conventions for representing logical models and external formats like CDS Hooks and CDA within the FHIR ecosystem.

## Technical Foundation

The IG's technical foundation rests on several key elements:

-   **Extensions:** It defines a set of extensions to `StructureDefinition` for managing type choices, extension behavior, JSON-specific properties, and XML-specific properties within logical models.
-   **Page Factories:** It introduces a mechanism for automatically generating pages in the IG based on lists of items (e.g., types, resources, versions). This is controlled by a JSON configuration file specifying the item type, source file, variables, output file names, parent page, generation, and page title.
-   **Logical Model Representation:** It outlines how logical models representing non-FHIR JSON and XML formats can be defined using `StructureDefinition` and the specified extensions.
-   **Type Specifiers:** It details the use of `xsi:type` and a custom `type-specifier` extension to determine the type of an element within a logical model.
-   **Extension Styles:** It defines an `elementdefinition-extension-style` extension to control how extensions are managed in logical models, including options for no extensions, FHIR extensions, or named elements.
-   **JSON and XML Format Control:** It introduces extensions like `elementdefinition-json-name`, `json-property-key`, `json-empty-behavior`, `json-nullable`, `structuredefinition-xml-type`, `elementdefinition-xml-name`, `elementdefinition-namespace`, and `structuredefinition-xml-no-order` to manage the specific representation of data in JSON and XML formats.
-   **Date/Time Formats:** It allows for specifying alternative date/time formats beyond the default XML schema date/time type using the `elementdefinition-date-format` extension.

## Technical Essence

This IG extends the FHIR IG Publisher to support logical models and non-FHIR formats by defining a suite of `StructureDefinition` extensions. For type selection in choices, it supports `xsi:type` and a `type-specifier` extension with a FHIRPath expression and canonical URL. Extension handling is controlled via an `elementdefinition-extension-style` extension, allowing "none," "fhir-extensions," or "named-elements." JSON representation is managed with extensions for property names, object representation of arrays using a key, and handling of empty or null values. XML representation is similarly controlled with extensions for schema type, element name, namespace, and element ordering. Date/time formats can be customized using an `elementdefinition-date-format` extension. Page factories automate IG page generation based on item lists (types, resources, etc.), using a JSON configuration to define source files, variable replacements (e.g., lowercase, uppercase, version-title, tla), output file names, parent page, and page title.

## Implementation Approach

Implementation involves extending the FHIR IG Publisher to recognize and process the defined extensions within `StructureDefinition` resources representing logical models. The IG Publisher must be able to:

-   Parse and apply the type specifier extensions to determine element types during logical model processing.
-   Handle the different extension styles defined by the `elementdefinition-extension-style` extension.
-   Generate JSON and XML representations according to the specified format control extensions.
-   Implement the page factory mechanism, including parsing the JSON configuration, iterating through item lists, performing variable replacements, and generating output files with appropriate content and structure.
-   Support the specified date/time format alternatives.

## Ecosystem Context

-   **Target Systems and Users:** The primary users are developers and architects working with FHIR and needing to represent or process data in formats beyond standard FHIR resources. Target systems include tools and platforms that consume or produce data in formats like CDS Hooks and CDA.
-   **Relationship to Other Standards/IGs:** This IG complements other FHIR IGs by providing a mechanism to integrate non-FHIR formats into the FHIR ecosystem. It has a close relationship with standards like CDS Hooks and CDA, enabling their representation within FHIR.
-   **Relevant Jurisdictions or Programs:** This IG is not specific to any particular jurisdiction or program but is broadly applicable to any context where FHIR is used alongside other data formats.
-   **Primary Use Cases and Scenarios:** The primary use cases involve representing existing JSON and XML formats as logical models within FHIR, enabling their documentation, validation, and processing using FHIR tools. This is particularly relevant for integrating systems that rely on non-FHIR formats with FHIR-based systems.
