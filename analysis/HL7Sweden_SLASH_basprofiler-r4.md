# basprofiler-r4: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the representation of core healthcare data elements within Sweden, ensuring consistent use of FHIR resources for common entities like patients, practitioners, organizations, and addresses. It tackles variations in data representation across different systems and organizations.
-   **Key clinical/business problems it solves:** It facilitates data exchange and aggregation across different healthcare providers, systems, and authorities in Sweden. This supports use cases like national quality registries, care coordination, and public health reporting. It also aims to improve data quality and reduce ambiguity in data interpretation.
-   **Intended scope and boundaries:** The IG focuses on defining base profiles and extensions for FHIR resources widely used in Sweden. It sets a "lowest common denominator" for FHIR implementation in the country, providing a foundation for more specialized profiles. It does not cover specific clinical domains or workflows in detail but rather provides the building blocks for them.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** SEBasePatient, SEBasePractitioner, SEBasePractitionerRole, SEBaseOrganization, SEBaseHumanName, SEBaseLMANummer.
    -   **Extensions:** SEBaseMiddleNameExtension, SEBaseOwnFamilyExtension, SEBaseAddressPersonExtension.
-   **Notable operations and interactions:** The IG does not define specific operations or interactions. It primarily focuses on resource structure and content.
-   **Key terminology and value sets:**
    -   **Value Sets:** SEBaseMaritalStatusVS, SEBaseAddressPersonVS, SEBaseHSAVerksamhetVS, SEBaseHOSPLegitimationsYrkeVS, SEBaseSOSNYKVS, SEBaseSKRYrkeVS, SEBaseSKRYrkeSpecialtyVS, SEBaseHSABefattningVS, SecurityLabelVS, SEBaseNamePartQualifierVS.
    -   **Code Systems:** SEBaseMaritalStatusCS, SecurityLabelCS.
    -   **External Code Systems:** SNOMED CT, v3-MaritalStatus, v2-0203, urn:oid:1.2.752.129.2.2.1.3 (HSA Verksamhetskod), urn:oid:1.2.752.116.3.1.3 (HOSP), urn:oid:1.2.752.116.1.3.6 (SOSNYK), urn:oid:1.2.759.129.2.2.1.4 (HSA Befattning).
-   **Significant patterns and constraints:**
    -   Consistent use of slicing for identifiers based on system.
    -   Specific OIDs defined for Swedish identifiers (personnummer, samordningsnummer, nationelltReservnummer, HSAID, etc.).
    -   Mandatory and extensible bindings to specific Swedish code systems for concepts like marital status, organization type, practitioner qualification, and security labels.
    -   Use of extensions to capture Swedish-specific data elements like middle name, own family name, and official address type.

## Technical Essence

This IG establishes a Swedish national framework for FHIR by profiling core resources with country-specific constraints and extensions. `SEBasePatient` mandates the use of `SEBaseHumanName`, which incorporates extensions for middle name (`SEBaseMiddleNameExtension`) and explicit family name (`SEBaseOwnFamilyExtension`), and requires at least one identifier among personnummer, samordningsnummer, or nationelltReservnummer, each with a defined system OID. `SEBaseAddressPersonExtension` on `Address` enforces a required binding to `SEBaseAddressPersonVS` for official address types using SNOMED CT codes. `SEBasePractitioner` and `SEBasePractitionerRole` require an HSA identifier and slice qualification codes to include mandatory bindings to Swedish code systems for professional titles (HOSP, SOSNYK, SKR-yrke, HSA-befattning). `SEBaseOrganization` mandates an HSA identifier and an organization identifier, with an extensible binding to `SEBaseHSAVerksamhetVS` for organization type. Security is addressed through the `SecurityLabelVS` valueset, which includes codes for "sekretessmarkering" and "skyddadFolkbokforing". These profiles and extensions, combined with specific value sets and code systems, form the core of the Swedish FHIR base profiles, ensuring consistent representation of fundamental healthcare entities.

## Implementation Approach

-   **Critical workflows and interactions:** While not explicitly defined, the IG supports workflows involving patient registration, practitioner identification, organization management, and data exchange related to these entities.
-   **Important requirements and guardrails:** Implementers must adhere to the defined profiles and extensions, ensuring correct use of identifiers, code systems, and value sets. They must also handle the specific requirements for representing different types of addresses and names according to Swedish conventions.
-   **Notable design choices and patterns:** The use of extensions for Swedish-specific data elements allows for flexibility while maintaining compatibility with the base FHIR standard. The consistent use of slicing for identifiers provides a clear and structured way to manage different identifier types.

## Ecosystem Context

-   **Target systems and users:** Healthcare providers, system vendors, national health authorities, and other stakeholders involved in health information exchange in Sweden.
-   **Relationship to other standards/IGs:** This IG builds upon the core FHIR R4 specification and aligns with other national and international FHIR initiatives. It serves as a foundation for more specialized IGs within Sweden.
-   **Relevant jurisdictions or programs:** Sweden. This IG is developed and maintained by HL7 Sweden.
-   **Primary use cases and scenarios:** National quality registries, care coordination, public health reporting, patient identity management, practitioner credentialing, and other scenarios requiring standardized exchange of core healthcare data in Sweden.
