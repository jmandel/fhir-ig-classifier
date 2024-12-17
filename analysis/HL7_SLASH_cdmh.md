# cdmh: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The CDMH FHIR IG primarily addresses the challenge of harmonizing and translating observational data from four different Common Data Models (CDMs) - PCORnet, i2b2/ACT, OMOP, and Sentinel - into a standardized FHIR format. This enables interoperability between these disparate research networks and facilitates broader access to and utilization of real-world data (RWD).
-   **Key clinical/business problems it solves:** The IG solves the problem of data silos in clinical research by enabling researchers to query multiple research networks using a single interface and view consolidated results. It also allows data partners to participate in multiple research programs without requiring new infrastructure, promoting data sharing and collaboration.
-   **Intended scope and boundaries:** The scope of this IG is limited to mapping and translating the results obtained from queries on the four CDMs into FHIR format. It does not cover the querying process itself or the extraction of data from EHRs to populate the CDMs. The IG focuses on leveraging existing PCORTF investments like US-Core and DAF-Research.

## Technical Foundation

-   **Core profiles and extensions:** The IG leverages US-Core profiles where they overlap with CDMH requirements. For data elements not marked as "MUST SUPPORT" in US-Core but present in the base resource, the IG still uses the US-Core profile and adds the needed elements. Extensions are added to US-Core profiles for data elements not present in the base resource. New profiles and extensions are to be added as needed based on pilot implementation feedback.
-   **Notable operations and interactions:** The IG defines a capability statement for a "Result Translator" actor, which is responsible for translating data from the four CDMs to FHIR using the mappings provided. The Result Translator may also support querying of the results using FHIR APIs.
-   **Key terminology and value sets:** The IG depends on US-Core published code systems and value sets, as well as those published or referenced by the HL7 FHIR standard. It does not introduce any new code systems or value sets.
-   **Significant patterns and constraints:** The IG specifies mandatory FHIR elements that must be populated, even if not directly mapped to CDM elements. These include specific codes for resource status, actuality, and category. The IG also provides guidance on handling date/time representations and vocabulary mappings, which require semantic transformations during translation.

## Technical Essence

The CDMH IG defines a translation layer for converting observational data from four major CDMs (PCORnet, i2b2/ACT, OMOP, Sentinel) into FHIR R4. It achieves this by providing detailed mappings between each CDM's data elements and corresponding FHIR resources, profiles, and extensions, primarily leveraging US-Core profiles. The IG mandates a "Result Translator" actor capable of performing these translations, optionally supporting FHIR API queries on the translated data. Key to the translation process are specific handling of date/time formats and vocabulary mappings, requiring semantic transformations to ensure accurate representation. For instance, FHIR's `dateTime` must be decomposed and reconstructed to match CDM date/time structures, and FHIR `CodeableConcept` elements must be mapped to OMOP's `concept_id` using external guidance. The IG also specifies mandatory FHIR elements (e.g., `status`, `category`) to be populated with specific codes during translation, even when not directly mapped from the source CDM. Identifiers from FHIR resources are used to generate ID elements in the CDMs, or stored in CDM-specific source value elements if IDs are auto-generated, ensuring linkage between FHIR and CDM representations.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves a researcher using a portal to compose and distribute queries, receive results from data partners, and view the translated results in FHIR format. The Result Translator plays a crucial role in converting CDM data to FHIR.
-   **Important requirements and guardrails:** Implementers must adhere to the specified mappings and handle date/time and vocabulary transformations as outlined. Mandatory FHIR elements must be populated with the specified values. The IG emphasizes the use of open-source translators built using the provided mappings.
-   **Notable design choices and patterns:** The choice of BRIDG as an intermediary model (for mapping CDMs to BRIDG, then BRIDG to FHIR) simplifies the system design and allows for centralized conversion to multiple CDMs. The use of US-Core profiles and extensions promotes standardization and reusability.

## Ecosystem Context

-   **Target systems and users:** The target systems are research networks using the four CDMs, and the target users are researchers from public and private sectors, including FDA, NIH, CDC, biopharmaceutical industry, and patient-centered outcomes researchers.
-   **Relationship to other standards/IGs:** The IG complements the DAF-Research FHIR IG by providing CDM-to-FHIR mappings. It leverages US-Core profiles and plans to harmonize with DAF-Research in subsequent updates. It also relates to other PCORTF investments like SDC, PRO FHIR, and Women's Health Technologies CRN FHIR IGs.
-   **Relevant jurisdictions or programs:** The IG is relevant to the US data infrastructure for a Learning Health System (LHS) and is a multi-agency collaboration led by the FDA, involving NCI, NCATS, ONC, and NLM.
-   **Primary use cases and scenarios:** The primary use case is enabling researchers to query multiple research networks with disparate data models using a single interface and view consolidated results in FHIR format. This facilitates research using real-world data (RWD) for patient-centered outcomes research and other purposes.
