# PCC.mAPS.us: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG, "Mobile Antepartum Summary," aims to define a standardized structure for aggregating important information from antepartum (prenatal) care visits in the United States. It focuses on creating a summary of events, diagnoses, and care plans during pregnancy to support healthcare providers. The context is mobile access to this summary, ensuring providers have critical patient information readily available. It is intended for use in the US realm.

2.  **How does this IG improve upon previous approaches?**
    The IG improves upon previous approaches by providing a defined structure for an antepartum summary, including elements like Estimated Due Dates, Visit Summary Flowsheets, allergies, advance directives, care plans, and selected histories. This structure aggregates data from ambulatory office visits. Prior approaches may have lacked this level of standardization.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   A defined "Antepartum Summary" Composition profile using FHIR, specifying the structure and content of the summary.
    *   Use of US Core profiles for various resources such as Patient, Practitioner, AllergyIntolerance, Condition, Observation etc.
    *   Specific profiles for observations related to pregnancy, like "DeliveryDateEstimatedFromLMP", "PregnancyHistory", "MenstrualStatus", and "GestationalAge".
    *   Inclusion of sections for medication summaries, allergies, problems, chief complaints, procedure histories, immunizations, results, vital signs, review of systems, physical exams, past illness history, history of infection, plan of care, social history, pregnancy history, advance directives, payors, antepartum education, and antepartum visit summary flowsheet.
    *   Use of LOINC and SNOMED CT codes for standardized representation of clinical concepts.
    *   Use of `mustSupport` to indicate required elements.
    *   Examples of various resources, demonstrating how the profiles are used in practice.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG leverages FHIR (Fast Healthcare Interoperability Resources), a widely adopted standard for health data exchange. It aligns with the US Core Implementation Guide for patient data. It utilizes standard terminologies such as LOINC, SNOMED CT, and UCUM. The IG does not explicitly mention specific regulations but implies alignment with US healthcare data standards and interoperability initiatives. It also uses IHE profiles for advance directives.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are antepartum care providers (e.g., obstetricians, midwives), who will use the summary to access a patient's pregnancy information. Patients benefit indirectly through better-coordinated and informed care during their pregnancy.
