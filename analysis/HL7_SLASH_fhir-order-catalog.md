# fhir-order-catalog: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the lack of standardized representation and exchange of orderable items within healthcare, specifically focusing on catalogs of medical devices, medications, and laboratory services. It tackles the challenge of representing complex catalog structures, including item hierarchies, variations, and associated metadata.
-   **Key clinical/business problems it solves:** It enables efficient discovery, selection, and ordering of medical items by providing a common information model and standardized search capabilities. This streamlines procurement, reduces errors, and improves the accuracy of order fulfillment. It also facilitates the mapping of jurisdictional device databases to FHIR resources, promoting data consistency and interoperability across different regulatory domains.
-   **Intended scope and boundaries:** The IG focuses on the representation of catalogs for medical devices, medications, and laboratory services. It defines profiles and extensions for representing catalog headers, individual items, and their relationships. It also specifies search parameters and operations for querying and retrieving catalog data. The IG does not cover the ordering process itself, nor does it address billing or payment aspects. It primarily deals with the description of orderable items, not their instances.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `CatalogHeader`: Constrains `Composition` to represent the header of a catalog.
    -   `DeviceModel`: Constrains `DeviceDefinition` to represent a model of a medical device in a catalog.
    -   `DrugKnowledge`: Constrains `MedicationKnowledge` to represent an item in a catalog of medications.
    -   `DrugPackage`: Constrains `PackagedProductDefinition` to represent a definition of a packaging in a catalog of medications.
    -   `LabServiceDefinition`, `LabProcedureDefinition`, `LabSpecimenDefinition`, `LabObservationDefinition`, `InputObservationDefinition`: Constrains `PlanDefinition` to represent laboratory services.
    -   `CatalogReference`: Extension to link items (e.g., `DeviceDefinition`, `MedicationKnowledge`, `PlanDefinition`) to their containing catalog.
-   **Notable operations and interactions:**
    -   `GET [base]/Composition?type:text=Catalog&_summary=true`: Retrieve a summary of all catalogs.
    -   `GET [base]/Composition?type:text=Catalog&category=device&_summary=true`: Retrieve a summary of all device catalogs.
    -   `GET [base]/DeviceDefinition?modelNumber=SCF332&_include:iterate=*`: Retrieve a specific device model and its supporting resources.
    -   Search operations on `DeviceDefinition`, `MedicationKnowledge`, and `PlanDefinition` using various parameters.
-   **Key terminology and value sets:**
    -   `$ATC`: WHO Anatomical Therapeutic Chemical Classification System.
    -   `$EDQM`: European Directorate for the Quality of Medicines & HealthCare Standard Terms.
    -   `$EMDN`: European Medical Device Nomenclature.
    -   `$GMDN`: Global Medical Device Nomenclature.
    -   `$LOINC`: Logical Observation Identifiers Names and Codes.
    -   `$SCT`: SNOMED CT.
    -   `$UCUM`: Unified Code for Units of Measure.
-   **Significant patterns and constraints:**
    -   Two methods for linking catalog items to the catalog:
        1.  `Composition.section.entry` referencing items (for the whole catalog).
        2.  Items referencing the `CatalogHeader` via the `CatalogReference` extension.
    -   Support for one-step and two-step search approaches for retrieving catalog items and their supporting resources.
    -   Detailed mapping of jurisdictional device databases (GUDID, EUDAMED) to `DeviceDefinition` elements.

## Technical Essence

This IG defines a FHIR-based catalog system for medical devices, medications, and lab services using `Composition` for catalog headers and specialized profiles of `DeviceDefinition`, `MedicationKnowledge`, and `PlanDefinition` for catalog items.  `DeviceModel` leverages `udiDeviceIdentifier`, `deviceName`, `modelNumber`, and classifications like `GMDN`, `SCT`, and `EMDN` for device identification. `DrugKnowledge` uses `code`, `intendedJurisdiction`, `indicationGuideline`, and `definitional` elements to describe medications, with `DrugPackage` detailing packaging. Lab services are represented through profiles of `PlanDefinition`. The `CatalogReference` extension links items to their `CatalogHeader` (a `Composition` profile).  Search is paramount, with parameters like `_lastUpdated`, `class`, `udi`, `identifier`, `model-number`, `name`, and `catalog` for `DeviceDefinition`.  `_include:iterate=*` enables retrieval of an item with all its supporting resources in a single search. Catalogs can either reference their items via `Composition.section.entry` or be referenced by items through the `CatalogReference` extension.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Clients search for catalogs using `Composition` resource with specific type and category.
    -   Clients search for specific items within a catalog using relevant search parameters on `DeviceDefinition`, `MedicationKnowledge`, or `PlanDefinition`.
    -   Clients can retrieve full details of an item, including supporting resources, using `_include:iterate=*`.
    -   Custodian systems implement RESTful APIs to support these search and retrieval operations.
-   **Important requirements and guardrails:**
    -   Custodian systems SHALL support the defined profiles and extensions.
    -   Custodian systems SHALL implement RESTful behavior according to the FHIR specification.
    -   Custodian systems SHALL support JSON format and SHOULD support XML format.
    -   Custodian systems SHALL identify supported profiles in the `meta.profile` attribute.
    -   Custodian systems SHALL support search parameters individually and in combination.
-   **Notable design choices and patterns:**
    -   Use of `Composition` to represent catalog headers provides a structured way to manage catalog metadata.
    -   The `CatalogReference` extension allows for flexible linking of items to catalogs.
    -   The `_include:iterate=*` parameter enables efficient retrieval of related resources.

## Ecosystem Context

-   **Target systems and users:**
    -   Custodian systems managing catalogs of medical devices, medications, and laboratory services.
    -   Client applications used by healthcare providers, procurement departments, and other stakeholders to browse, search, and select items from these catalogs.
-   **Relationship to other standards/IGs:**
    -   This IG builds upon core FHIR resources and concepts.
    -   It references external terminologies like ATC, EDQM, EMDN, GMDN, LOINC, SNOMED CT, and UCUM.
    -   It aligns with jurisdictional device databases like GUDID and EUDAMED.
    -   It complements the LIVD Implementation Guide for IVD testing devices.
-   **Relevant jurisdictions or programs:**
    -   US Food & Drug Administration (FDA)
    -   European Union (EUDAMED)
-   **Primary use cases and scenarios:**
    -   Browsing and searching catalogs of medical devices, medications, and laboratory services.
    -   Retrieving detailed information about specific items, including their specifications, classifications, and supporting resources.
    -   Integrating catalog data with procurement and ordering systems.
    -   Facilitating regulatory compliance by mapping jurisdictional device databases to FHIR resources.
