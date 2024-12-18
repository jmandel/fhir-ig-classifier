# FHIR-IG-Human-Services-Directory: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG tackles the lack of standardized data exchange for human and social services directories. It bridges the gap between community-based organizations (CBOs) providing social services and healthcare systems, payers, and consumers seeking these services. The primary challenge is enabling seamless discovery and access to information about services addressing social determinants of health (SDOH).
-   **Key clinical/business problems it solves:** The IG facilitates social care referrals by enabling healthcare providers to search for and identify appropriate community services for their patients. It also empowers consumers to directly find services and helps payers coordinate care by connecting members to community resources. By standardizing data exchange, it reduces fragmentation and improves the efficiency of connecting individuals to services that can improve health outcomes and reduce healthcare costs.
-   **Intended scope and boundaries:** The IG focuses on read-only (GET) queries of a single human services directory by FHIR-enabled applications. It defines a RESTful API for obtaining data from a FHIR-enabled Human and Social Service Resource Directory. It supports profiles for Organization, HealthcareService, and Location, with an optional Endpoint profile. The current version (STU 1) does not support PUT or POST operations, eligibility assessment, federated queries, user feedback mechanisms, or a standardized taxonomy for service classification. It also does not include individual providers, focusing on organizations and their services.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** HSDOrganization (based on US Core Organization), HSDLocation (based on US Core Location), HSDHealthcareService (based on FHIR R4 HealthcareService).
    -   **Extensions:** Accessibility, LocationBoundaryGeojson, OrgDescription, Qualification, ContactDepartment, ServiceContactInfo.
-   **Notable operations and interactions:** The IG primarily focuses on RESTful search operations (GET) using defined search parameters. It supports read, search-type, and optionally vread interactions.
-   **Key terminology and value sets:**
    -   **Value Sets:** HumanServiceCategoryVS, HumanServiceTypeVS, HumanServiceProgramVS, HumanServiceCharacteristicVS, NonIndividualSpecialtiesVS. These are example value sets, acknowledging the lack of a universally accepted human services taxonomy.
    -   **Code Systems:** HumanServiceProgramCS, HumanServiceCharacteristicCS.
-   **Significant patterns and constraints:**
    -   The IG aligns with the DaVinci PDEX Plan Net Provider Directory IG, reusing and adapting its profiles and extensions.
    -   It mandates the use of the `active` flag in HSDOrganization and HSDHealthcareService profiles.
    -   It specifies Must Support elements and their interpretation for API and application actors.
    -   It emphasizes privacy considerations, prohibiting the transmission of consumer-identifying information in queries.

## Technical Essence

This IG defines a FHIR R4 API for read-only access to human services directories, enabling discovery of CBOs, their locations, and services. It leverages three core profiles: HSDOrganization, HSDLocation, and HSDHealthcareService, aligned with but not directly derived from US Core and Plan-Net profiles. HSDOrganization represents CBOs, using extensions like OrgDescription and Qualification, with a required `active` flag. HSDLocation details service locations, incorporating Accessibility and LocationBoundaryGeojson extensions. HSDHealthcareService describes services, referencing HSDOrganization and HSDLocation, with `category` and `type` elements bound to example value sets (HumanServiceCategoryVS, HumanServiceTypeVS). Search is enabled via defined SearchParameters on each profile, supporting queries by name, address, type, program, and other criteria. The IG mandates specific interpretations of Must Support elements and includes guidance on handling missing data. It suggests returning FHIR bundles that include requested resources and all related resources to minimize "chatty" interactions. The IG does not specify a standard taxonomy, allowing implementers to use existing systems like 211 LA or Open Eligibility.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves a FHIR-enabled application (e.g., EHR, consumer app) querying a human services directory server using defined search parameters. The server responds with a FHIR bundle containing matching resources (Organization, Location, HealthcareService) and related resources.
-   **Important requirements and guardrails:**
    -   Implementers SHALL support the HSDOrganization, HSDHealthcareService, and HSDLocation profiles.
    -   Implementers SHALL NOT require or send consumer-identifying information in queries.
    -   Implementers SHALL interpret Must Support elements as defined in the IG.
    -   Implementers SHOULD support the use of the `_lastUpdated` search parameter for detecting updates.
-   **Notable design choices and patterns:**
    -   The IG suggests returning a FHIR bundle with all related resources to reduce the number of API calls.
    -   It provides a mapping between HSDS (Human Services Data Specification) and FHIR profiles to facilitate implementation for those familiar with HSDS.
    -   It uses extensions to capture additional information not present in the base FHIR resources.

## Ecosystem Context

-   **Target systems and users:** The IG targets healthcare providers, payers, consumers, and CBOs. Systems include EHRs, care management platforms, consumer-facing applications, and human services directory systems.
-   **Relationship to other standards/IGs:** The IG aligns with the DaVinci PDEX Plan Net Provider Directory IG, US Core, and the Validated Healthcare Directory IG (VHDir). It also acknowledges the Gravity Project's SDOH Clinical Care IG, although there is no direct relationship in the current scope.
-   **Relevant jurisdictions or programs:** The IG is a US Realm standard and references CMS's Interoperability and Patient Access Final Rule. It also mentions the Administration for Community Living (ACL) Social Care Referrals Challenge.
-   **Primary use cases and scenarios:**
    -   Healthcare providers searching for social services to refer patients.
    -   Consumers searching for community resources.
    -   Payers coordinating care and connecting members to social services.
    -   CBOs making their services discoverable through a standardized API.
