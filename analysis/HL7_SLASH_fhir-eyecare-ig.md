# fhir-eyecare-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The lack of universal implementation guidance for FHIR in ophthalmology, leading to data silos and hindering data exchange for clinical care and research. Specifically, it addresses the need for standardized representation of ophthalmic clinical data, diagnostic tests, and procedures.
-   **Key clinical/business problems it solves:** Enables seamless data sharing between ophthalmic devices, electronic medical records (EMRs), and other systems. This facilitates clinical workflows, such as collaborative glaucoma care and cataract surgery outcome tracking, and supports research by enabling data aggregation and analysis across different institutions and systems. It also aims to improve patient care by enabling better-informed clinical decisions and facilitating patient access to their health data.
-   **Intended scope and boundaries:** The IG focuses on representing the comprehensive ophthalmic clinical lexicon in FHIR format. It defines profiles, extensions, and value sets for common ophthalmic observations, conditions, procedures, and diagnostic reports. It primarily targets data exchange within the ophthalmology domain but acknowledges the need for integration with broader healthcare systems. The IG does not cover all possible ophthalmic concepts but provides a foundation for future expansion.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Observations:** `observation-base` (constrained for ophthalmic observations), `observation-iop` (intraocular pressure), `observation-visual-acuity`, `observation-eye-region-finding` (other clinical observations), `observation-visual-field`, `observation-oct-macula`, `observation-oct-rnfl`.
    -   **Conditions:** `condition-base` (ophthalmic diagnoses).
    -   **Procedures:** `procedure-base` (ophthalmic procedures).
    -   **Diagnostic Reports:** `diagnostic-report-base` (constrained for ophthalmic diagnostic reports), `diagnostic-report-visual-field`, `diagnostic-report-oct-macula`, `diagnostic-report-oct-rnfl`.
    -   **Body Structure:** `body-structure-eye` (ocular anatomical location).
    -   **Extension:** `ext-myExtension` (placeholder for custom extensions).
-   **Notable operations and interactions:** The IG does not explicitly define specific operations but implies support for standard FHIR interactions like read, write, search, and history for the defined profiles.
-   **Key terminology and value sets:**
    -   **ValueSets:** `observation-final-status`, `body-site-eye`, `qualifiers`, `observable-entities`, `observation-visual-acuity`, `iop-methods`, `observation-visual-acuity-methods`, `observation-visual-field`, `observation-oct-macula`, `observation-oct-rnfl`, `conditions`, `procedures`.
    -   **CodeSystems:** `qualifiers`, `iop-methods`, `visual-field-observations`.
    -   Leverages SNOMED CT, LOINC, ICD-10, and CPT for terminology.
-   **Significant patterns and constraints:**
    -   **Observation.status:** Restricted to 'final' or 'amended'.
    -   **Observation.category:** Fixed to 'exam'.
    -   **Observation.subject:** Limited to individual patients.
    -   **Must Support:** Defined for producers and consumers, requiring the ability to populate and process specific data elements.
    -   **Ocular Anatomical Location:** Uses a specialized `body-structure-eye` profile with a unique value set for `locationQualifier` to accurately describe ophthalmic anatomical sites.

## Technical Essence

This IG establishes a FHIR framework for ophthalmology by defining a core set of profiles for Observations, Conditions, Procedures, and Diagnostic Reports, tailored to the specific needs of eye care. It introduces a specialized `body-structure-eye` profile to precisely capture ocular anatomical locations using a unique `locationQualifier` value set, refining the standard BodyStructure resource. Ophthalmic Observations are constrained to the 'exam' category and 'final' or 'amended' status, with specific profiles for IOP, Visual Acuity, and other clinical findings. Diagnostic Reports are similarly profiled for common tests like Visual Fields and OCT scans. The IG leverages SNOMED CT, LOINC, ICD-10, and CPT for terminology, defining custom value sets and code systems where needed. Producers must populate all Must Support elements, while consumers must process them without error, including handling missing information. This design enables standardized representation and exchange of key ophthalmic data, supporting both clinical workflows and research.

## Implementation Approach

-   **Critical workflows and interactions:** The IG supports workflows like collaborative glaucoma care (sharing observations and diagnostic reports between optometrists and ophthalmologists) and cataract surgery outcome tracking (collecting pre-, intra-, and post-operative data). It implies the use of standard FHIR interactions for data exchange.
-   **Important requirements and guardrails:** Producers must be capable of populating all Must Support elements in the defined profiles. Consumers must be able to process these elements without error and accept instances with additional elements. Consumers must also handle missing information for Must Support elements.
-   **Notable design choices and patterns:** The use of a specialized `body-structure-eye` profile for accurate anatomical location description is a key design choice. The definition of Must Support for both producers and consumers ensures a minimum level of interoperability. The IG follows a pattern of defining base profiles with common constraints and then creating specialized profiles for specific observation types and diagnostic tests.

## Ecosystem Context

-   **Target systems and users:** EMRs, diagnostic devices, picture archiving and communication systems (PACS), research databases, and personal health record applications. Users include ophthalmologists, optometrists, researchers, patients, and payers.
-   **Relationship to other standards/IGs:** The IG builds upon the base FHIR specification (R4) and references other relevant standards like DICOM for imaging data. It mentions potential integration with US Core Patient and AU Base Patient profiles.
-   **Relevant jurisdictions or programs:** The IG is intended for international use, with endorsements from organizations in the US, Australia, and the UK. It was developed in collaboration with HL7 and various industry vendors.
-   **Primary use cases and scenarios:** Collaborative glaucoma care, cataract surgery outcome tracking, ophthalmic research, and enabling AI deployment in ophthalmology. The IG also highlights the importance of data exchange for shared care, audit, and benchmarking.
