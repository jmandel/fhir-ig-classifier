# fhir-gender-harmony: Analysis

## Core Purpose & Scope

This Implementation Guide (IG) addresses the critical interoperability challenges surrounding the accurate and consistent representation of sex and gender-related information in healthcare systems. It aims to solve clinical and business problems stemming from the ambiguous and inconsistent use of existing sex and gender fields, which can lead to miscommunication, medical errors, and inadequate care, particularly for transgender and gender-diverse individuals. The IG's scope is focused on defining a harmonized model for representing **Gender Identity (GI)**, **Sex Parameter for Clinical Use (SPCU)**, **Recorded Sex or Gender (RSG)**, **Pronouns**, and **Name to Use (NtU)** across HL7 product families (FHIR, CDA, and V2). It provides guidance on how to use these elements to improve clarity and consistency in clinical documentation and data exchange, while also acknowledging the importance of privacy and cultural sensitivity. The IG explicitly excludes defining or modeling sexual orientation, titles/honorifics, and detailed privacy/sensitivity rules, deferring these to other projects or jurisdictional guidelines.

## Technical Foundation

The technical foundation of this IG rests on FHIR R5 extensions, with backward compatibility considerations for earlier FHIR versions. The core building blocks include:

-   **Extensions:**
    -   `individual-genderIdentity`: Represents a person's gender identity, allowing for multiple identities over time.
    -   `patient-sexParameterForClinicalUse`:  Indicates the sex parameter to be used for clinical decision-making, allowing for context-specific values and links to supporting observations.
    -   `individual-pronouns`: Specifies the pronouns to be used when referring to an individual.
    -   `individual-recordedSexOrGender`: Captures various recorded sex or gender concepts, including type, source, and validity period.
-   **Operations and Interactions:** The IG does not define specific operations but emphasizes the use of standard FHIR interactions for creating, updating, and querying resources containing these extensions.
-   **Key Terminology and Value Sets:**
    -   `GenderIdentity`: A minimum value set based on SNOMED CT, extensible to accommodate jurisdictional needs.
    -   `SexForClinicalUseCategory`: A required value set with values like "Male-typical", "Female-typical", "Specified", and "Unknown".
    -   `Pronouns`: An example value set based on LOINC, providing a minimal set of English pronouns.
    -   `Recorded Sex or Gender Type`: A value set to specify the type of recorded sex or gender.
-   **Significant Patterns and Constraints:** The IG promotes the use of extensions on relevant resources (e.g., Patient, Practitioner) for most concepts, while SPCU can be applied to any resource type. It emphasizes the importance of validity periods for tracking changes over time and allows for comments to provide additional context.

## Technical Essence

This IG defines a set of FHIR R5 extensions to capture nuanced sex and gender information. The `individual-genderIdentity` extension, applicable to Patient, Practitioner, RelatedPerson, and Person resources, allows for multiple gender identities with associated validity periods and comments, using an extensible value set based on SNOMED CT. The `patient-sexParameterForClinicalUse` extension, applicable to any resource, provides a context-specific sex parameter (e.g., "Male-typical", "Female-typical") with an optional validity period, comment, and links to supporting observations, using a required value set. The `individual-pronouns` extension, applicable to the same resources as gender identity, captures preferred pronouns using an example value set based on LOINC. The `individual-recordedSexOrGender` extension captures various recorded sex or gender concepts, including type, source document, acquisition date, and validity period. Implementers would use these extensions alongside existing FHIR elements like `HumanName.use` for "Name to Use" and `Patient.gender` for administrative sex/gender, carefully considering the specific use case and jurisdictional requirements. The IG emphasizes using extensions for pre-adoption in prior FHIR versions and provides guidance on mapping these concepts to CDA and V2.

## Implementation Approach

The IG is designed to be implemented by integrating the defined FHIR extensions into existing clinical systems and workflows. Key interactions involve:

-   **Collecting** sex and gender information from patients through user interfaces or other means, ensuring sensitivity and respect for patient preferences.
-   **Storing** this information using the appropriate extensions on relevant FHIR resources, such as Patient for gender identity and pronouns, and clinical resources like DiagnosticReport or Observation for SPCU.
-   **Exchanging** this information with other systems using standard FHIR interactions, ensuring that the context and meaning of each element are clearly communicated.
-   **Utilizing** the information for clinical decision support, patient care, and administrative purposes, while respecting privacy and security considerations.

The IG emphasizes the importance of considering the specific use case and context when choosing which elements to use and how to populate them. It also highlights the need for careful consideration of terminology, particularly when mapping between different code systems or value sets.

## Ecosystem Context

This IG targets a broad range of systems and users within the healthcare ecosystem, including:

-   **EHRs, LIS, IS, and other clinical systems**
-   **Governmental and regulatory bodies**
-   **Standards Development Organizations (SDOs)**
-   **Researchers**
-   **Patients and their advocates**

It relates to other standards and IGs, such as:

-   **FHIR R5:** The core FHIR specification, which provides the foundation for the extensions defined in this IG.
-   **HL7 v2.9.1:** The V2 standard, which includes new segments for gender harmony concepts.
-   **CDA:** The CDA standard, which includes templates for representing sex and gender information.
-   **DICOM, X12, NCPDP, SNOMED, LOINC:** Other relevant standards and terminology systems.
-   **US Core:** The US Core Implementation Guide, which includes extensions for sex assigned at birth.
-   **Jurisdictional IGs:** Country-specific IGs that may define additional requirements or guidance.

The primary use cases for this IG include:

-   **Improving the accuracy and consistency of sex and gender information in clinical documentation and data exchange.**
-   **Supporting affirmative care for transgender and gender-diverse individuals.**
-   **Facilitating research and quality improvement initiatives.**
-   **Enabling better communication between patients and providers.**
-   **Harmonizing the representation of sex and gender across different HL7 product families and other standards.**
