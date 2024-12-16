# sdc: Analysis

## 1. Objectives and Context

This FHIR Implementation Guide (IG) focuses on **Structured Data Capture (SDC)**, aiming to standardize how healthcare forms and questionnaires are created, filled out, and processed using FHIR resources. It's designed for developers building systems that handle healthcare forms, enabling interoperability and reducing redundant data entry.

## 2. Improvements over Previous Approaches

The IG introduces a more robust extraction process using the `definitionExtract` extension, replacing the limited `sdc-questionnaire-itemContextExtension`. This allows for specifying resource profiles and `bundle.entry.request` properties during extraction, enabling more comprehensive data mapping.

## 3. Key Features and Technical Approaches

* **Standardized Profiles:** The IG defines profiles for core FHIR resources like Questionnaire, QuestionnaireResponse, CapabilityStatement, and ValueSet, tailored for SDC use cases.
* **Modular Questionnaires:**  It supports modular questionnaires, allowing reuse of questions and dynamic assembly based on context.
* **Data Extraction:**  Provides mechanisms to extract data from completed questionnaires into standard FHIR resources, enabling interoperability and data analysis.
* **Auto-population:** Leverages FHIRPath, CQL, and FHIR Query expressions to pre-populate questionnaires with existing patient data, streamlining data entry.
* **Adaptive Questionnaires:**  Enables dynamic questionnaires where the next question depends on previous answers.
* **Advanced Rendering:**  Provides extensions to control the appearance and behavior of forms, enhancing user experience.

## 4. Relation to Broader Standards and Regulations

The IG aligns with FHIR standards and leverages terminologies like LOINC and SNOMED CT. It supports regulatory requirements by enabling data capture for specific forms like the US Surgeon General - Family Health Portrait.

## 5. Primary Users and Beneficiaries

* **Developers:**  Software developers building systems that handle healthcare forms, including EHRs, patient portals, and research applications.
* **Healthcare Providers:**  Benefit from streamlined data entry, reduced errors, and improved data quality.
* **Patients:**  Experience less redundant data entry and potentially more engaging forms.
* **Researchers:**  Gain access to standardized, extractable data for analysis. 
