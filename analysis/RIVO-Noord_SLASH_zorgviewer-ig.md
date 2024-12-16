# zorgviewer-ig: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to enable a "Zorgviewer" (Care Viewer) application that provides healthcare professionals with a 360-degree view of patient information by aggregating data from different Electronic Health Record (EHR) systems. It operates within the context of regional healthcare networks in the Netherlands, specifically focusing on the RIVO-Noord region. The goal is to improve care coordination and provide healthcare professionals with a more complete picture of their patients' health records, including data from various healthcare providers.

2.  **How does this IG improve upon previous approaches?** This IG improves upon previous approaches by providing a standardized way to access patient data across different EHR systems using FHIR. It introduces a common model for data exchange, including specific profiles for various data types (e.g., allergies, conditions, lab results, documents), and defines a workflow for initiating the Zorgviewer from within existing EHR systems. It also defines a process around patient consent, and addresses the need for security and logging. The IG aims to minimize data replication, relying on the source systems for the data and only aggregating it for display.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   **FHIR as the data exchange standard**: The IG leverages FHIR STU3 to define profiles for various healthcare data elements.
    *   **SMART-on-FHIR integration:** It uses SMART-on-FHIR for launching the Zorgviewer from within EHRs.
    *   **Building blocks architecture:** The IG defines several building blocks including "Zorgviewer Host", "Zorgviewer", "Toestemming", "Identiteit", "Zorgverlener Directory", "Authenticatie", "Logging", "Ontsluiting Bronsysteem" and "Behandelplan", each with specific responsibilities.
    *   **Consent Management:** The IG incorporates a mechanism for checking patient consent before accessing data.
    *   **Regional Services:** It utilizes regional services for patient indexing, addressing, and logging.
    *   **Audit Logging:** Logging of data access is based on NEN 7513 standards.
    *   **Data Filtering:** It supports filtering data based on the patient's position in a care pathway.
    *   **Bronsysteem Herkennen:** Each FHIR resource must include a meta-tag with the OID of the source.
    *   **Focus on Zibs:** The IG is based on the Dutch Zibs (zorginformatiebouwstenen) as data models.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG aligns with several healthcare standards and regulations, including:
    *   **HL7 FHIR:** The IG uses FHIR as its core data exchange standard.
    *   **NEN Standards:** It adheres to Dutch NEN standards for information security (NEN 7510, 7512, 7513) and interoperability (NEN 7540, 7517, 7518, 7519) related to healthcare data exchange and logging.
    *   **SMART-on-FHIR:** The IG uses the SMART-on-FHIR standard for secure application launch.
    *   **GDPR/AVG:** The IG acknowledges the importance of patient consent for data sharing and includes a consent mechanism.
    *   **MedMij:** The IG takes into account the MedMij specifications for information exchange and data sets.
    *  **BgZ (Basisgegevensset Zorg):** The IG uses the BgZ as a basis for the data sets.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users are healthcare professionals, including doctors, nurses, and other clinicians, who need a comprehensive view of patient information to provide better care. Patients indirectly benefit from this IG as it facilitates better coordination of care and more informed decision-making by healthcare providers. While patients do not directly interact with the Zorgviewer, their consent is essential for data access, and they benefit from better-coordinated care.
