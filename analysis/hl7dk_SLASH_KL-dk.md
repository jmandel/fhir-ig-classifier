# KL-dk: Analysis

1. **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**
   This IG, named "FKI FHIR," aims to standardize the exchange and reporting of health and social care data from Danish municipalities. It provides a common way to represent data from home care nursing, home care, health promotion, prevention, physical rehabilitation (following FSIII documentation practices), and adult social care (following VUM and FFB documentation practices). The objective is to create a consistent data model for municipalities to use when reporting and exchanging data.

2. **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**
   The IG does not explicitly state previous approaches, but it implies that there was a lack of standardization for municipality data exchange and reporting before the creation of this IG. The guide provides a structured approach to represent the data, and it provides links to a common municipality architectural framework (Fælleskommunal rammearkitektur) and an interactive UML model. The IG also makes explicit the relationship between the data in the municipality information model (FKI) and the FHIR profiles.

3. **What are the key features and technical approaches of this IG?**
   Key features include:
    *   **FHIR Profiles:** Defines FHIR profiles for various resources, including CarePlan, Condition, Observation, Encounter, ServiceRequest, Goal, and others, tailored for the Danish municipality context.
    *   **Slicing:** Uses slicing on `code.coding` in several profiles (e.g., `KLCommonCareSocialCondition`, `KLCommonCareSocialPlannedIntervention`, `KLCommonCareSocialFocusCondition`) to allow for codes from different systems (FSIII, FFB, SNOMED CT, ICD10, ICPC2).
    *   **Value Sets:** Uses custom ValueSets (e.g., `KLConditionCodesFSIII`, `KLInterventionsFFB`, `KLEncounterTypes`) to constrain coded attributes to specific terminologies relevant in Danish municipalities.
    *   **Extensions:** Defines custom extensions (e.g., `FollowUpEncounter`, `RequesterType`, `MunicipalityCaseNumber`, `ConditionLastAssertedDate`, `SubjectConsentToLiaising`, `ConditionRank`, `BasedOnServiceRequest`, `MatterOfInterestInformer`, `ExtEventHist`) to capture municipality specific information.
    *   **Examples:** Provides example instances of the profiles.
    *   **Invariant Rules:** Defines invariant rules, e.g. a rule stating that severity is not allowed for nursing conditions, and a rule that specify how severity should correlate with other attributes.

4. **How does this IG relate to broader healthcare standards and regulations?**
    The IG is based on HL7 FHIR, which is a globally recognized standard for healthcare data exchange. It uses SNOMED CT as a terminology for some codes, which is also a global standard. It refers to Danish regulations and documentation standards like FSIII, VUM, and FFB. It also points to the use of SOR for identifying organizations.

5. **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
   The primary users are:
    *   **Danish Municipality Staff:** Professionals working in home care, nursing, health promotion, prevention, physical rehabilitation, and social care in Danish municipalities. These are the primary users who will use this implementation guide to structure and exchange data.
    *   **Software Vendors:** Vendors creating software for use in Danish municipalities, who will use this guide to implement the required FHIR profiles and data exchange capabilities.
   The primary beneficiaries are:
    *   **Danish Municipalities:** Who will be able to exchange and report data in a consistent and standardized way.
   Patients are indirectly beneficiaries, as better data exchange and reporting can improve the quality and efficiency of the care they receive. However, the IG does not specify any direct patient interaction.
