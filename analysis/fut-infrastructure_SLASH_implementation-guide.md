# implementation-guide: Analysis

1. **Objectives:** This IG aims to define a set of FHIR profiles and extensions for use in the Danish eHealth domain. It focuses on standardizing the representation of various healthcare concepts and workflows, such as action guidance, activity definitions, appointments, care plans, clinical impressions, communications, devices, and more. The context is the Danish healthcare system, and it's intended for use by healthcare providers, patients, and potentially other stakeholders in the eHealth ecosystem.

2. **Improvements:** The IG introduces new profiles and extensions that add specific eHealth functionality not present in the base FHIR specification or other common profiles. For example, `ehealth-actionguidance` introduces a specific type for action guidance. The IG also specifies constraints on existing FHIR resources, such as appointment participants and message categories. Additionally, the IG defines invariants for specific resources, such as ensuring that responsible parties in an appointment are also participants. These constraints and invariants enhance data quality and interoperability within the defined context.

3. **Key Features and Approaches:** Key features include:
    *   **Profile-based approach:**  Extensive use of FHIR profiles to constrain and extend base resources, such as `ehealth-activitydefinition`, `ehealth-appointment`, `ehealth-careplan`, etc.
    *   **Extension usage:** A large number of custom extensions are defined to capture domain-specific data, like `ehealth-responsible`, `ehealth-legalBasis`, `ehealth-sharingPolicy`, and many others.
    *   **Value sets and code systems:**  Reliance on custom value sets and code systems (e.g., `http://ehealth.sundhed.dk/vs/action-guidance-types`, `http://ehealth.sundhed.dk/vs/appointmenttype-codes`, etc.) for controlled vocabularies.
    *   **Invariants and constraints:** The use of FHIR invariants and slicing to enforce specific rules and data structures within the profiles.
    *   **Specific resource types:** The IG covers a wide range of FHIR resource types, including those related to workflow (Task, ServiceRequest), clinical (Observation, Condition, ClinicalImpression), and administrative (Organization, Patient, Practitioner).

4. **Relation to Standards and Regulations:** This IG builds upon the HL7 FHIR standard. It aligns with the FHIR R4 version and leverages core resources and datatypes, while extending them to fulfill specific requirements within the Danish eHealth domain. The IG uses value sets like `http://hl7.org/fhir/ValueSet/publication-status` and `http://hl7.org/fhir/ValueSet/request-status`, demonstrating alignment with broader FHIR standards. It also incorporates Danish-specific code systems and value sets like those under `http://ehealth.sundhed.dk/`. The IG also mentions legal basis in the `ehealth-legalBasis` extension, indicating awareness of regulatory compliance.

5. **Primary Users/Beneficiaries:**
    *   **Healthcare Providers:** Practitioners, care teams, and organizations using systems conforming to this IG will benefit from increased interoperability and standardized data exchange.
    *   **Patients:**  Patients may indirectly benefit from improved coordination of care and better access to their health information, especially in areas where the IG defines patient-facing aspects of healthcare workflows.
    *   **System Developers:**  Developers working on eHealth solutions within Denmark will use this IG for guidance on implementation, ensuring that their systems comply with the defined standards.
