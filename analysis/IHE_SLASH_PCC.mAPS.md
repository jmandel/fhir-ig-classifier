# PCC.mAPS: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG, titled "Mobile Antepartum Summary" (mAPS), aims to define a standardized way to aggregate and share critical information related to a patient's pregnancy before delivery. It provides a structured summary of significant events, diagnoses, and care plans derived from antepartum visits. The context is the need for a comprehensive and portable summary of pregnancy-related information to support care providers in making informed decisions. It is intended for use in mobile or other settings where quick access to a summary of pregnancy information is needed.

2.  **How does this IG improve upon previous approaches?** This IG represents a shift from previous approaches by defining a FHIR-based structure for the Antepartum Summary, moving from the CDA format to the more modern FHIR framework. The IG also uses the International Patient Summary (IPS) as a base profile to allow for better interoperability. This FHIR-based approach facilitates better data exchange and integration with modern healthcare systems. The IG also attempts to model previously defined concepts into a FHIR model.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   Defines two primary actors: a "Content Creator" that generates the Antepartum Summary (APS) document and a "Content Consumer" that consumes it.
    *   Specifies the structure of the APS document as a FHIR Composition resource with clearly defined sections (e.g., Medications, Allergies, Problems, Social History, Pregnancy History, Plan of Care, etc.).
    *   Uses LOINC codes for document type and section codes, SNOMED CT codes for clinical concepts, and UCUM codes for units of measure.
    *   Employs FHIR profiles to constrain the resources used within the APS document (e.g., Observation, Condition, Procedure, etc.).
    *   Provides example instances of resources and the composition to aid implementation and validation.
    *   Defines specific value sets for coded elements to promote consistency.
    *   Defines options for the consumer including "View", "Document Import", and "Discrete Data Import".
    *   Uses the IPS profile as a base to conform to international specifications.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG aligns with IHE's established patterns for document sharing and leverages FHIR, a standard for healthcare data exchange. It also utilizes existing terminologies, such as LOINC, SNOMED CT, and UCUM, which are widely used in healthcare. The IG aims to improve interoperability by providing a standardized way to represent and exchange pregnancy-related information, which is important for regulatory compliance and quality of care. The IG also leverages, and conforms with the IPS, a global standard for health information sharing.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users of this IG are healthcare providers involved in antepartum care (e.g., obstetricians, midwives, nurses, and maternal-fetal medicine specialists). The beneficiaries include:
    *   **Patients:** They benefit from improved coordination of care, access to their information, and reduced risk of errors due to better information availability. Patients may use the document directly, or incorporate it into their own PHR.
    *   **Care Providers:** They benefit from a more complete and accessible summary of a patient's pregnancy history, which can improve decision-making and patient outcomes.
    *   **Healthcare Organizations:** They benefit from a standards-based approach to data sharing and improved interoperability between different systems.
    *   **Public Health Agencies:** They benefit from the aggregation of data for research and reporting.
