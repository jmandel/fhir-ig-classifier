# fhir-tools-ig: Analysis

1. **Objectives:** This IG aims to provide a way to represent and handle data formats beyond standard FHIR resources and data types, specifically focusing on logical models that map to existing JSON and XML formats. It provides alternative rules for how these logical models are structured and processed. The context is the need to work with data that doesn't fit the standard FHIR model directly. The target audience is those who need to represent non-FHIR data using FHIR-like structures (logical models).

2. **Improvements:** The IG introduces extensions that allow logical models to be customized for specific data formats, such as specifying how types are chosen (using `xsi:type` or type specifiers) and how extensions are handled (including named elements). It addresses the limitations of standard FHIR when mapping to existing JSON and XML formats. The standard FHIR approach for handling extensions is to use a url/value pair, but this IG allows for extensions to be defined as named elements. It also introduces rules for how to handle empty arrays and null objects in JSON, and how to order elements in XML, as well as specifying alternative date/time formats.

3. **Key Features and Approaches:**
    * **Type Handling Extensions:** Uses `xsi:type` or type specifiers (via FHIRPath expressions) to determine types in logical models where standard FHIR type handling isn't applicable.
    * **Extension Management:** Defines an `elementdefinition-extension-style` extension to manage extensions, allowing for no extensions, standard FHIR extensions, or named-element extensions.
    * **JSON Customization:** Includes extensions (`elementdefinition-json-name`, `json-property-key`, `json-empty-behavior`, `json-nullable`) to control how JSON is generated and parsed for logical models.
    * **XML Customization:** Includes extensions (`structuredefinition-xml-type`, `elementdefinition-xml-name`, `elementdefinition-namespace`, `structuredefinition-xml-no-order`) to control how XML is generated and parsed for logical models.
    * **Date/Time Formats:** Introduces the `elementdefinition-date-format` extension to specify alternative date/time formats, beyond the default XML schema date/time.
    * **Page Factories:** Provides a mechanism using page factory control files to generate multiple pages based on a list of items.

4. **Relation to Broader Standards:** This IG builds upon the FHIR standard, extending it to support formats beyond its typical scope. It does so by defining extensions to the FHIR StructureDefinition resources, which allows for the description of logical models in a way that is consistent with FHIR, but also allows for the description of non-FHIR data models. It also has a focus on supporting common data formats used in healthcare, such as CDA (using XML extensions) and CDSHooks (using JSON extensions).

5. **Users/Beneficiaries:** The primary users are implementers who need to work with data formats outside of standard FHIR resources, but still wish to use FHIR tooling and structures. This includes developers mapping existing JSON and XML formats into logical models, and those working with CDA and CDSHooks formats. Patients are not directly mentioned as a primary user group.
