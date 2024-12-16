# allergy: Analysis

1. **What is this IG trying to achieve, in what context, and for whom?**
   This IG aims to define a standardized way to represent and exchange allergy and intolerance information within the Belgian healthcare system. It provides a FHIR profile for `AllergyIntolerance` resources, along with supporting value sets and extensions, to ensure consistent recording and communication of such data. The context is the Belgian federal healthcare environment, and it targets healthcare providers and systems that need to share allergy information.

2. **How does this IG improve upon previous approaches?**
   This IG introduces a structured and standardized approach to representing allergy information, using FHIR. It defines specific profiles and value sets tailored to the Belgian context, which likely improves upon previous, potentially less structured or standardized methods of data exchange. The use of an extension `BeExtAllergyType` for allergy type allows for more granularity than the base FHIR resource. It also mandates the use of specific coding systems like SNOMED CT and references to other Belgian eHealth standards like the SAM portal for medication allergies. It introduces an identifier specifically for allergies via `BeNSAllergy`.

3. **What are the key features and technical approaches of this IG?**
    *   **FHIR Profiling:** The core approach is to profile the FHIR `AllergyIntolerance` resource, creating `BeAllergyIntolerance`, with constraints and extensions specific to Belgium.
    *   **Extensions:** The IG defines a custom extension `BeExtAllergyType` to capture the type of allergy or intolerance, which is not directly represented in the base FHIR resource.
    *   **Value Sets:** It defines several value sets such as `BeCausativeAgent`, `BeExposureRoute`, `BeNoAllergy`, `BeRiskManifestation`, `BeAllergyIntoleranceCode` and `BeVSAllergyIntoleranceType` to provide controlled vocabularies for coding allergy information.
    *   **Naming System:** It defines `BeNSAllergy` as a naming system for unique identifiers of allergies.
    *   **Logical Model:** It provides a logical model, `BeModelAllergyIntolerance`, which is a simplified representation of the key data elements in the profile.
    *   **Must Support:** The profile designates certain fields as must support fields, meaning that they must be handled by conformant systems.
    *   **Invariants:** The IG specifies invariants or rules that the data must follow to maintain consistency and validity, such as `be-inv-type-verification-status` and `be-inv-asserter-person-rel-type`.
    *   **Code usage:** The IG mandates the use of specific code systems (CNK, ATC, CTI-extended) for medication-related allergies/intolerances, and a dedicated valueset for non-medication.
    *   **Recorder:** The IG specifies that the recorder SHALL always be identified by a SSIN (SSIN bis) number.

4. **How does this IG relate to broader healthcare standards and regulations?**
    This IG is explicitly designed for the Belgian healthcare system, referencing Belgian eHealth standards, NIHDI (National Institute for Health and Disability Insurance), and the FOD (Federal Public Service) Terminology Center. It leverages SNOMED CT for clinical terminology, which is a widely used international standard. It uses also some HL7 defined code systems. It takes GDPR into account, especially for the recorder, by not making the SSIN available for secondary purposes.

5. **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    *   **Healthcare Providers:** Doctors, nurses, and other healthcare professionals who need to record and access patient allergy information.
    *   **Healthcare Systems/Organizations:** Hospitals, clinics, and other healthcare organizations that need to exchange allergy information electronically.
    *   **Patients:** While not direct users of the technical specification, patients benefit from the improved accuracy and interoperability of allergy information, as it can lead to safer and more efficient care. The IG allows patients to record their own allergies.
    *   **Researchers:** The IG is designed to be used for clinical studies but takes into account the GDPR regulations by not making the SSIN available for secondary purposes.
