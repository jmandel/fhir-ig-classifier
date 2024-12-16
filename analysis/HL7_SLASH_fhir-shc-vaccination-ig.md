# fhir-shc-vaccination-ig: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to define the FHIR content of SMART Health Cards (SHCs) for representing infectious disease vaccination records and laboratory testing status. It focuses on a minimal set of patient information necessary for this specific use case, primarily for outbreak/pandemic response but also applicable to routine vaccination and testing. The context is the need for a standardized, interoperable way to digitally represent and verify vaccination and testing information. It's intended for use by issuers (e.g., health systems, pharmacies, labs), holders (patients), and verifiers (e.g., travel industry, schools).

2.  **How does this IG improve upon previous approaches?** This IG provides a standardized way to represent vaccination and lab test data within SMART Health Cards, ensuring interoperability between different issuers and verifiers. Instead of free-form data, it uses FHIR profiles to structure data, and it explicitly addresses data minimization to protect patient privacy and keep payload sizes small. This is an improvement over ad-hoc methods of representing this data and also previous methods that do not address privacy and size constraints.

3.  **What are the key features and technical approaches of this IG?**
    *   **FHIR Profiles:** It defines specific profiles for FHIR resources (Bundle, Patient, Immunization, Observation) to represent vaccination and lab test data.
    *   **Data Minimization:** It emphasizes data minimization by providing "primary" (DM) profiles with strict cardinality constraints, and "fallback" (AD) profiles with relaxed constraints that include all allowable data.
    *   **MustSupport:** It uses the `MustSupport` flag to indicate elements that should be populated when available, and that Verifiers should process when flagged as `Is-Modifier`.
    *   **Terminology Bindings:** It uses `required` terminology bindings for `MustSupport` elements to ensure implementers know which code systems can be expected.
    *   **Code Systems:** It mandates the use of specific code systems (CVX, ICD-11 MMS, SNOMED CT) for representing vaccines. It also uses LOINC for lab tests.
    *   **Resource References:** It uses `resource:#` URIs for references within Bundles.
    *   **Identity Assurance:** It provides a mechanism to indicate the level of identity assurance of the patient.
    *   **Payload Size Awareness:** It explicitly focuses on keeping payload sizes small to fit within QR code constraints of SMART Health Cards.
    *   **Invariants:** It uses invariants to enforce additional rules, such as date format and string lengths.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG builds upon the FHIR standard and the SMART Health Cards framework. It integrates with existing code systems like CVX, SNOMED CT, LOINC, and ICD-11. It also adheres to privacy-by-design principles and addresses data minimization, which are becoming increasingly important in healthcare regulations. It is not directly related to the SMART App Launch Framework, but is designed to work well with it.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    *   **Issuers:** Health systems, pharmacies, labs, and government entities who need to produce SMART Health Cards for vaccination and testing.
    *   **Holders:** Patients who receive and use SMART Health Cards to prove their vaccination or testing status.
    *   **Verifiers:** Organizations such as travel companies, schools, border control, and event venues that need to verify the authenticity and validity of SMART Health Cards.
    *   **Wallet Applications:** Developers of software that stores and presents SMART Health Cards.
