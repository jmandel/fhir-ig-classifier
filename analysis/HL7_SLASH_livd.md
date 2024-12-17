# livd: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG) addresses the interoperability challenges related to mapping In Vitro Diagnostic (IVD) test codes and result values to standardized terminologies, specifically LOINC and SNOMED CT. It solves the problem of inconsistent representation of IVD tests and results across different laboratories and systems, which hinders data aggregation, analytics, and clinical decision support. The IG's primary goal is to provide a standardized format for IVD manufacturers to publish suggested LOINC mappings for their tests and SNOMED CT/LOINC mappings for their coded result values, facilitating consistent adoption by laboratories. The scope is limited to the publication format and does not include order mapping, long-term storage solutions, regulatory implications, or specific transmission protocols.

## Technical Foundation

The IG is built on FHIR R4 and leverages several core FHIR resources:

-   **Profiles:**
    -   `LIVDBundle`: Packages all resources in a LIVD catalog.
    -   `LIVDCatalog`: Based on `Composition`, organizes the publication metadata and references to other resources.
    -   `LIVDDeviceDefinition`: Based on `DeviceDefinition`, represents the IVD devices.
    -   `LIVDObservationDefinition`: Based on `ObservationDefinition`, represents the IVD tests performed.
    -   `LIVDTestCodeConceptMap`: Based on `ConceptMap`, maps vendor test codes to LOINC codes.
    -   `LIVDResultValueConceptMap`: Based on `ConceptMap`, maps vendor result value codes to LOINC or SNOMED CT codes.
    -   `LIVDCodeSystemFragmentLOINC`: Based on `CodeSystem`, contains a subset of LOINC codes and properties used in the mappings.
    -   `LIVDCodeSystemFragmentSNOMED`: Based on `CodeSystem`, contains a subset of SNOMED CT codes used in the mappings.
    -   `LIVDCodeSystemFragmentVendorResult`: Based on `CodeSystem`, contains a subset of vendor result codes used in the mappings.
    -   `LIVDValueSet`: Based on `ValueSet`, defines subsets of codes used in the mappings.
-   **Extensions:**
    -   `ext-device`: Links `ObservationDefinition` to `DeviceDefinition`.
    -   `ext-analyte`: Links `DeviceDefinition.capability` to `ObservationDefinition` for measurable analytes.
    -   `ext-vendorReferenceIdentifier`: Adds a vendor reference identifier to `ObservationDefinition`.
    -   `ext-region`: Specifies the applicable region for the `Composition`.
-   **Terminology and Value Sets:**
    -   LOINC: Used for test codes and result values.
    -   SNOMED CT: Used for result values.
    -   Custom value sets for bundle types, section types, and device types.

## Technical Essence

This IG defines a FHIR R4-based publication format for IVD test and result value mappings. A `LIVDBundle` (type: `collection`) contains a `LIVDCatalog` (`Composition`) that provides publication metadata (publisher, version, language, region) and organizes references to other resources. `LIVDDeviceDefinition` (`DeviceDefinition`) instances describe IVD devices, linked to `LIVDObservationDefinition` (`ObservationDefinition`) instances representing tests via the `ext-analyte` extension. `LIVDTestCodeConceptMap` (`ConceptMap`) instances map vendor test codes (from `ObservationDefinition.code`) to LOINC codes, including contextual information like specimen and result descriptions in `dependsOn` elements. `LIVDResultValueConceptMap` instances map vendor result value codes to either LOINC or SNOMED CT codes, with mappings grouped by target code system. `LIVDCodeSystemFragmentLOINC` and `LIVDCodeSystemFragmentSNOMED` (`CodeSystem`) instances provide subsets of LOINC and SNOMED CT codes and properties used in the mappings, enabling offline processing. `LIVDValueSet` instances define subsets of codes used in the mappings. The IG mandates specific cardinalities and data types for various elements, ensuring consistency and completeness of the mapping information.

## Implementation Approach

The IG is intended to be implemented as follows:

1.  **Creation:** IVD manufacturers create LIVD catalogs, potentially generating them from spreadsheets or other internal formats.
2.  **Publication:** Manufacturers publish the catalogs as electronic inserts, downloadable files, or via FHIR APIs.
3.  **Aggregation (Optional):** Intermediaries may aggregate catalogs from multiple vendors.
4.  **Consumption:** Laboratories access the catalogs through various means (download, API query) and use the suggested mappings to configure their LIS, associating vendor test codes and result values with corresponding LOINC and SNOMED CT codes.
5.  **Display:** LIS or other systems display the mapping information to users, considering licensing requirements for LOINC and SNOMED CT, and potentially offering alternative language versions.

**Critical workflows:**

-   Manufacturer publishes a new or updated LIVD catalog.
-   Laboratory staff configures a new device or test in their LIS, using the LIVD catalog to guide LOINC/SNOMED CT code selection.
-   LIS queries for LIVD catalog entries for a specific device.

**Important requirements:**

-   GUIDs are encouraged for identifiers to facilitate merging and duplicate identification.
-   LOINC license terms must be adhered to when displaying LOINC content.
-   Mappings are suggestions and not suitable for automated configuration.

## Ecosystem Context

-   **Target systems:** Laboratory Information Systems (LIS), clinical middleware, terminology servers, databases.
-   **Target users:** Laboratory personnel, IVD manufacturers, LIS vendors, terminology providers.
-   **Relationship to other standards/IGs:**
    -   Based on FHIR R4.
    -   References LOINC and SNOMED CT.
    -   Aligns with the IHE Laboratory Analytical Workflow (LAW) profile.
-   **Relevant jurisdictions or programs:** Primarily U.S. (FDA, ONC, CDC), but also international.
-   **Primary use cases:**
    -   Facilitating the mapping of IVD test results to standardized terminologies in LIS.
    -   Improving consistency and accuracy of LOINC/SNOMED CT code assignment across laboratories.
    -   Enabling data aggregation and analytics based on standardized test and result representations.
    -   Supporting clinical decision support tools that rely on standardized laboratory data.
