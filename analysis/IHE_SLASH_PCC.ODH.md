# PCC.ODH: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to standardize the representation of occupational data within healthcare systems using FHIR. It seeks to facilitate clinical care by integrating work-related information, which is crucial for managing chronic conditions, identifying work-related health issues, and supporting public health reporting. The context is clinical care, population health, and public health reporting. The target audience includes clinicians, public health officials, and potentially researchers.

2.  **How does this IG improve upon previous approaches?**
    This IG provides a structured and standardized approach to work information, which previously lacked consistency across systems. This standardization is intended to enable systems to better use tools for clinical decision support, population health management, and public health activities. It uses FHIR, a widely adopted standard for health data exchange.

3.  **What are the key features and technical approaches of this IG?**
    The IG defines FHIR profiles to represent various aspects of occupational data, including employment status, retirement dates, combat zone periods, past and present jobs (including occupation, industry, work classification, schedule, duties, hazards, employer information, and related subjects), and usual work (including usual occupation, industry, duration, and related subjects). It leverages FHIR resources like Composition, Observation, and related data types. The IG utilizes concept mapping between ISCO-08 and the US SOC 2010 codes which are defined in the `IHE_PCC_ODH_ISCO08_to_SOC2010_Concept_Mapping.fsh` file.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is an international derivative of the USA specific [HL7 FHIR Profile: Occupational Data for Health (ODH), Release 1.3](https://hl7.org/fhir/us/odh/), and it is updated to FHIR R4.0.1. It aims to incorporate work information into Electronic Health Records (EHRs) and other health IT systems, aligning with ONC's recognition of the value of such data. This is intended to support clinical care and public health reporting. The IG also mentions use in the Vital Records Death Reporting (VRDR) IG, indicating its integration into other healthcare standards initiatives.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are clinicians who need work information for patient care, public health officials for reporting and analysis, and potentially researchers. Patients indirectly benefit from improved care and identification of work-related health risks. The IG also includes the ability to record work data for household members, extending the scope of beneficiaries beyond just the individual seeking care.
