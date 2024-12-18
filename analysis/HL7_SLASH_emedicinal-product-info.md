# emedicinal-product-info: Analysis

## Core Purpose & Scope

**Primary interoperability challenges this IG addresses:**

-   Lack of a standardized, structured format for electronic Medicinal Product Information (ePI), which hinders efficient exchange and use of this critical data across systems and jurisdictions.
-   Difficulty in searching, accessing, and personalizing ePI content due to its current unstructured, often PDF-based, format.
-   Limited ability to integrate ePI with other health data sources, such as Electronic Health Records (EHRs) and wearable devices.

**Key clinical/business problems it solves:**

-   Improves patient access to trustworthy, up-to-date medicinal product information tailored to their needs.
-   Facilitates the creation of aggregated, cross-industry ePI content, enabling more personalized and integrated patient solutions.
-   Streamlines the exchange of medicinal product information between regulators, industry, healthcare providers, and patients.
-   Supports regulatory compliance by providing a structured format aligned with health authority requirements.

**Intended scope and boundaries:**

-   **In Scope:**
    -   ePI for human pharmaceutical, radiopharmaceutical, and biologic medicinal products (prescription and physician-administered).
    -   Over-the-counter (non-prescription) drugs.
    -   Investigational and authorized medicinal products.
    -   Medical devices co-packed with a biopharmaceutical product.
    -   13 FHIR resources: List, Bundle, Composition, Organization, Regulated Authorization, Medicinal Product Definition, Administrable Product Definition, Manufactured Item Definition, Ingredient, Substance Definition, Packaged Product Definition, Clinical Use Definition, Binary.
-   **Out of Scope:**
    -   Self-care products, natural health products, medical devices, food, and veterinary drugs.

## Technical Foundation

**Core profiles and extensions:**

-   **Profiles:** The IG defines profiles for 13 core FHIR resources, including:
    -   `Bundle-uv-epi`: Constrains the Bundle resource to represent an ePI document, requiring a Composition as the first entry and allowing other resources like Organization, RegulatedAuthorization, etc.
    -   `Composition-uv-epi`: Defines the structure of the ePI document, including section headings, narrative text, and references to other resources.
    -   `MedicinalProductDefinition-uv-epi`, `AdministrableProductDefinition-uv-epi`, `ManufacturedItemDefinition-uv-epi`, `Ingredient-uv-epi`, `SubstanceDefinition-uv-epi`, `PackagedProductDefinition-uv-epi`: Profiles for representing detailed product information.
    -   `ClinicalUseDefinition-contraindication-uv-epi`, `ClinicalUseDefinition-indication-uv-epi`, `ClinicalUseDefinition-interaction-uv-epi`, `ClinicalUseDefinition-undesirableEffect-uv-epi`, `ClinicalUseDefinition-warning-uv-epi`: Profiles for structured clinical use information.
    -   `Organization-uv-epi`, `RegulatedAuthorization-uv-epi`: Profiles for representing organizations and regulatory authorizations.
-   **Extensions:** No specific extensions are defined in this analysis, but the profiles constrain existing elements and reference value sets.

**Notable operations and interactions:**

-   The IG defines two capability statements: `simple-vulcan-epi-server` and `advanced-vulcan-epi-server`.
-   The `advanced-vulcan-epi-server` supports a wide range of operations, including search, create, read, update, delete, history, patch, and validate for various resources.
-   It also supports specific operations like `upload-external-code-system`, `apply-codesystem-delta-remove`, `apply-codesystem-delta-add`, `install`, `uninstall`, `validate-code`, `invalidate-expansion`, and `expand`.

**Key terminology and value sets:**

-   **Value Sets:** The IG references several value sets, including:
    -   `VsAdministrableDoseForm`, `VsUnitofPresentation`, `VsRouteOfAdministration`, `VsIngredientRole`, `VsSubstance`, `VsCountry`, `VsAtcClassification`, `VsSectionCode`, `VsMeddra`.
    -   SPOR (Substances, Products, Organisations and Referentials) code systems for various aspects of medicinal product information.
-   **Code Systems:** The IG defines aliases for various code systems, including HL7 systems (e.g., `administrable-dose-form`, `manufactured-dose-form`) and external systems (e.g., `meddra`, `iso3166`, `ncithesaurus`, `loinc`, `edqm`, `sct`, `atc`, `ginas`, `ucum`, `phpid`).

**Significant patterns and constraints:**

-   **Document Bundle:** The `Bundle-uv-epi` profile mandates a `type` of "document" and requires a `Composition-uv-epi` resource as the first entry.
-   **Composition Structure:** The `Composition-uv-epi` profile defines a hierarchical structure for ePI content using sections and sub-sections, with coded section headings and narrative text.
-   **Product Information:** The IG uses a set of interconnected resources to represent detailed product information, including `MedicinalProductDefinition`, `AdministrableProductDefinition`, `ManufacturedItemDefinition`, `Ingredient`, `SubstanceDefinition`, and `PackagedProductDefinition`.
-   **Clinical Use Information:** The `ClinicalUseDefinition` resource is profiled to capture structured data on indications, contraindications, interactions, undesirable effects, and warnings.
-   **Invariants:** The IG defines an invariant `bdl-epi-1` to ensure that an ePI document has only one Composition resource.

## Technical Essence

This IG defines a FHIR-based framework for representing and exchanging ePI documents as structured data. It leverages a core set of FHIR resources, primarily a `Bundle` of type "document" containing a single `Composition` resource that structures the ePI content into sections and subsections with coded headings (using `VsSectionCode`) and narrative text. The `Composition` references other resources within the `Bundle`, including `Organization` for stakeholders, `RegulatedAuthorization` for licensing information, and a network of interconnected resources (`MedicinalProductDefinition`, `AdministrableProductDefinition`, `ManufacturedItemDefinition`, `Ingredient`, `SubstanceDefinition`, `PackagedProductDefinition`) to represent detailed product characteristics. `ClinicalUseDefinition` is profiled to capture structured clinical information like indications, contraindications, interactions, warnings, and undesirable effects, referencing `VsMeddra` for coding. Images are handled as Base64 encoded `Binary` resources. The IG mandates a persistent `Bundle.identifier` for all versions of an ePI and a unique `Composition.identifier` for each version. The `Bundle.timestamp` reflects the original authorization date. The design emphasizes a modular approach, allowing for different levels of structured data (Type 1, 2, 3) based on regional or use-case needs.

## Implementation Approach

**Key aspects of how the IG is meant to be implemented:**

-   **Modular Design:** Implementers can choose to implement Type 1, 2, or 3 ePI documents based on their specific needs and regulatory requirements. Type 1 focuses on narrative content, Type 2 adds product information, and Type 3 includes structured clinical use information.
-   **Document Creation:** The IG outlines steps to create ePI documents, starting with converting images to Base64 and creating `Binary` resources. Then, a `Composition` resource is created to capture section headings, text, and references to other resources. Finally, a `Bundle` resource is created to gather all resources for a specific ePI document.
-   **Resource Relationships:** Implementers must establish relationships between resources, such as referencing `RegulatedAuthorization` from the `Composition`, and linking `Ingredient` to `ManufacturedItemDefinition` and `SubstanceDefinition`.
-   **Terminology Usage:** The IG specifies the use of various code systems and value sets for coding elements like section headings, product characteristics, and clinical use information. Implementers must ensure proper mapping and usage of these terminologies.
-   **Validation:** The IG includes invariants and profiles to ensure the validity and consistency of ePI documents. Implementers should use FHIR validation tools to verify compliance with these constraints.

**Critical workflows and interactions:**

-   Creation of ePI documents by pharmaceutical companies or marketing authorization holders.
-   Submission of ePI documents to regulatory authorities for review and approval.
-   Exchange of ePI documents between systems, such as EHRs, pharmacy systems, and patient-facing applications.
-   Retrieval and display of ePI content to healthcare professionals and patients.

**Important requirements and guardrails:**

-   Adherence to the defined profiles and invariants.
-   Use of specified code systems and value sets.
-   Proper handling of images as Base64 encoded `Binary` resources.
-   Maintenance of persistent identifiers for ePI documents and unique identifiers for each version.

**Notable design choices and patterns:**

-   Use of a `Bundle` resource to represent the entire ePI document.
-   Hierarchical structure of the `Composition` resource to organize ePI content.
-   Interconnected resources to represent detailed product information.
-   Structured representation of clinical use information using `ClinicalUseDefinition`.

## Ecosystem Context

**Target systems and users:**

-   **Systems:** EHRs, pharmacy systems, regulatory authority systems, patient-facing applications, clinical decision support systems, drug information databases.
-   **Users:** Patients, healthcare professionals (physicians, pharmacists, nurses), regulatory authorities, pharmaceutical companies, marketing authorization holders, researchers.

**Relationship to other standards/IGs:**

-   **FHIR:** This IG is built on the FHIR standard and leverages core FHIR resources and concepts.
-   **IPS (International Patient Summary):** The IG mentions an invariant `bdl-ips-1`, suggesting a potential relationship or consideration of the IPS IG.
-   **IDMP (Identification of Medicinal Products):** The IG aligns with IDMP principles by providing structured data on medicinal products.
-   **SPOR (Substances, Products, Organisations and Referentials):** The IG references SPOR code systems for various aspects of medicinal product information.

**Relevant jurisdictions or programs:**

-   **Global:** The IG aims to provide a common global approach for structuring medicinal product information.
-   **Specific regions:** The IG mentions the USA, European Union, and Japan as examples of regions that could derive their own ePI profiles from this base IG.
-   **HL7 Vulcan Accelerator:** The IG was developed under the auspices of the HL7 Vulcan Accelerator's Electronic Product Information project team.
-   **Innovative Medicines Initiative's (IMI) Gravitate-Health project:** The IG was also developed in collaboration with the Gravitate-Health project.

**Primary use cases and scenarios:**

-   **Patient access to ePI:** Patients can access up-to-date, trustworthy ePI through various channels, such as mobile apps and patient portals.
-   **Clinical decision support:** Healthcare professionals can access structured ePI data within EHRs to support prescribing and dispensing decisions.
-   **Regulatory review:** Regulatory authorities can efficiently review and approve ePI submissions in a standardized format.
-   **Pharmacovigilance:** Structured ePI data can be used to monitor and analyze adverse events and other safety information.
-   **Research:** Researchers can leverage structured ePI data for various research purposes, such as drug repurposing and comparative effectiveness studies.
