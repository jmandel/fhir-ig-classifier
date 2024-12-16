# kl-children: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to standardize the reporting of children's health data from Danish municipal health nurses to KL Gateway. The context is the Danish healthcare system, specifically focusing on preventive child health services provided by municipalities. The objective is to create a uniform way of reporting data about children, their families, and the interventions they receive, ensuring interoperability between different municipal systems and the KL Gateway.

2.  **How does this IG improve upon previous approaches?** This IG improves upon previous approaches by providing specific, structured profiles for reporting data, including:
    *   Mandatory and optional data elements for different types of encounters.
    *   Specific codes and ValueSets for different types of observations and interventions.
    *   FHIR invariants to ensure data consistency and completeness.
    *   Clear definitions of how data from the Danish municipal information model (FKI) should be mapped to FHIR resources.
    *   Standardized use of coded values and UCUM units.
    *   Specific guidance on the use of dataAbsentReason for missing values, and how to report errors.
    This structured approach reduces ambiguity and ensures consistent data reporting.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   **Profiles:** Defines specific profiles for resources like `Citizen`, `Encounter`, `Observation`, `QuestionnaireResponse`, `Intervention`, and `Location`, inheriting from core Danish and HL7 FHIR profiles.
    *   **ValueSets:** Uses ValueSets to constrain code systems for various data elements, including encounter types, intervention codes, and observation results, ensuring consistent terminology.
    *   **Invariants:** Implements FHIR invariants to enforce data quality and consistency, especially regarding mandatory observations for specific encounter types.
    *   **Extensions:** Includes custom extensions for capturing additional information, such as the source of information (`FindingInformer`), and the intervention that an encounter is based on (`BasedOnInterventionExtension`).
    *   **Code Systems:** Uses external code systems like SNOMED CT, LOINC, UCUM, and internal FBOE and KL code systems.
    *   **Bundles:** Defines a `DeliveryReport` profile, a Bundle resource, to group and send related resources for reporting purposes.
    *   **Incremental Delivery:** Defines a `IncrementalDelivery` profile, a Bundle resource, to deliver all delivery reports since last update.
    *   **Questionnaire Support**: Defines Questionnaire profiles, that describes the data types, and minimum and maximum values for items in the questionnaire.
    *   **Specific Guidance**: Provides specific guidance on how to use the profiles.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG is built on the HL7 FHIR standard, and is compliant with the Danish core profiles. It incorporates terminologies from SNOMED CT, LOINC, and UCUM, which are widely used in healthcare. It also refers to regulations and guidelines from the Danish Health Authorities (Sundhedsstyrelsen) and Socialstyrelsen (Danish National Board of Social Services), especially concerning the reporting of data to the National Child Health Register. It also specifies how to report data according to Fælleskommunal standard for forebyggende sundhedsydelser til børn og unge (FBU).

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users are the health nurses (sundhedsplejersker) in Danish municipalities who document and report data about children and their families. Beneficiaries include:
    *   **Municipalities:** By standardizing data reporting, the IG facilitates better data exchange between different municipal systems, and the national database.
    *   **Researchers and policymakers:** The standardized data will enable more comprehensive and consistent data analysis, supporting research and policymaking related to children's health and well-being.
    *   **Children and families:** While not direct users, patients benefit from the improved data management, that may contribute to better targeted interventions and healthcare services.
    *   **Vendors:** Vendors that implement electronic health record systems in municipalities can use this standard to ensure interoperability.
