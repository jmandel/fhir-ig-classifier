# KL-dk-tools: Analysis

1.  **Objectives:** This IG aims to provide FHIR profiles and documentation for questionnaires and observations used in Danish municipalities for health and social care. It focuses on standardizing the representation of data related to common assessments like the 6-minute walk test, blood pressure, body measurements, consciousness, and well-being questionnaires (EQ-5D, WHO-5). The context is the delivery of health and social care in homes, nursing homes, and local facilities within Danish municipalities. The target users are the municipalities and their healthcare and social care staff.

2.  **Improvements:** This IG builds upon the Common Municipality Information Model (FKI) and the FKI FHIR profiles. It provides more specific profiles for common municipal assessments, reusing and adapting existing FHIR resources, which leads to more detailed and standardized data representation. It also includes specific extensions for indicating the source of information and associated conditions.

3.  **Key Features and Approaches:**
    *   **Profiles:** The IG defines FHIR profiles for `Observation` resources (e.g., blood pressure, body weight, 6-minute walk test, pain scores), and `Questionnaire` and `QuestionnaireResponse` resources (e.g., EQ-5D, WHO-5).
    *   **Slicing:** Uses slicing on `Observation.code.coding` and `Observation.method.coding` to allow for detailed coding using SNOMED CT and local codes.
    *   **Extensions:** Utilizes extensions such as `FindingInformer`, `AssociatedConditions`, and `Technique` to provide additional context and information for observations and questionnaire responses.
    *   **Value Sets:** Defines custom ValueSets based on local codes and SNOMED CT for questionnaire answers, techniques, finding informers, and associated conditions.
    *   **Code Systems:** Introduces a local code system `KLToolsCodes` for codes that are not part of KLCommonCareSocial or international terminologies.
    *   **Parent Profiles:** Leverages and extends existing FHIR profiles like `bp`, `bodyheight`, `bodytemp`, `bodyweight`, `heartrate`, and `oxygensat`.
    *   **Questionnaire Structure:** Defines a structured approach to questionnaires, including item types, linkIds, and answer ValueSets.
    *   **Derived Observations:** Creates profiles for observations derived from questionnaire responses, linking back to the source `QuestionnaireResponse`.
    *   **Examples:** Includes example instances for profiles to clarify implementation.

4.  **Relation to Standards:** The IG utilizes HL7 FHIR as its core standard. It incorporates SNOMED CT for clinical terminology and UCUM for units of measure. It extends existing FHIR profiles from the HL7 standard library. It also relates to the Danish municipality-specific information model (FKI) and builds on the KL-dk IG, indicating alignment with national initiatives.

5.  **Primary Users/Beneficiaries:**
    *   **Municipal Healthcare and Social Care Staff:** The primary users are healthcare professionals, social workers, and other staff in Danish municipalities who need to record and exchange data related to patient assessments.
    *   **Municipality IT Systems:** The IG is intended to facilitate interoperability between different IT systems used in Danish municipalities.
    *   **Potentially, Patients:** While not directly interacting with the IG, patients benefit from standardized data that can improve the quality and coordination of their care.
