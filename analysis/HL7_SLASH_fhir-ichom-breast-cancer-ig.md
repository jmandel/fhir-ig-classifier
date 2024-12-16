# fhir-ichom-breast-cancer-ig: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to represent the ICHOM (International Consortium for Health Outcomes Measurement) Breast Cancer Patient-Centered Outcome Measure Set in a machine-readable format using HL7 FHIR. The context is the need for interoperable data exchange for collecting and reporting breast cancer outcomes. The intended audience includes healthcare IT systems developers, clinical informaticists, and clinical research experts, with the goal of improving healthcare for patients with breast cancer.

2.  **How does this IG improve upon previous approaches?** This IG provides a structured, standardized, and machine-readable FHIR representation of the ICHOM breast cancer outcome measures. This allows for interoperable data exchange, which is an improvement over previous approaches that might have relied on non-standardized or proprietary methods for collecting and reporting outcome data. The IG explicitly maps the ICHOM measures to FHIR resources and questionnaires, facilitating consistent data collection and reporting.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   **FHIR R4:** The IG uses the R4 version of the FHIR standard.
    *   **Profiles:** It defines FHIR profiles for various resources like Patient, Observation, Procedure, and Condition to represent ICHOM measures.
    *   **Questionnaires:** It includes FHIR Questionnaires for both patient-reported and clinical-reported outcomes.
    *   **ValueSets and CodeSystems:** It defines FHIR ValueSets and CodeSystems using SNOMED CT, LOINC, and custom codes to ensure standardized terminology.
    *   **Mappings:** Provides mappings between ICHOM measures and FHIR resources.
    *   **Must Support:** Uses "Must Support" to indicate required data elements.
    *   **Extensions:** Uses FHIR extensions when needed to capture data that the core resources do not cover.
    *   **Example Resources:** Includes examples of resources and questionnaires to show how to use the IG.

4.  **How does this IG relate to broader healthcare standards and regulations?** The IG aligns with several broader healthcare standards including, but not limited to, Breast Radiology Reporting, mCODE, QI-Core, US Core, International Patient Summary, and International Patient Access. This ensures the IG is interoperable and follows guidelines for use in the broader healthcare ecosystem. It uses standard terminologies like SNOMED CT and LOINC. It does not directly address specific regulations but can be used as part of a system that is compliant with relevant regulations.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** Primary users include health informaticists and IT professionals working within healthcare provider organizations, and clinical research informatics experts. Patients are indirect beneficiaries, as the IG aims to facilitate better data collection and reporting leading to improved healthcare outcomes for them. Patients also directly benefit through the use of the patient reported outcome questionnaires.
