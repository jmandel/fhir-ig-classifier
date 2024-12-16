# fhir-sirb: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**

    This IG, "sIRB on FHIR", aims to standardize the exchange of research study forms between a single Institutional Review Board (sIRB) and relying institutions in multi-site clinical research studies. The context is the "NIH Policy on the Use of a Single Institutional Review Board for Multi-Site Research", which mandates a single IRB review for multi-site studies to expedite study initiation. The IG provides a set of seven standardized research study questionnaires (plus an optional "Initiate a Study" questionnaire) to be used in sIRB studies. These questionnaires are designed to replace paper forms, Word documents, or other non-integrated software, enabling a more efficient and standardized process. The primary users are researchers, study coordinators, and IRBs involved in multi-site clinical research.

2.  **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**

    Previous approaches involved ad hoc transfers of PDFs and other document formats via email or online submission, leading to manual tasks and inefficiencies. This IG utilizes FHIR-based standards to facilitate document exchange via software, potentially reducing manual tasks. It also structures the information within the forms into discrete data elements, unlike previous approaches that relied on large text boxes, enabling better integration with research study management software. The standardization of forms across institutions is another improvement, allowing for consistent data capture and exchange.

3.  **What are the key features and technical approaches of this IG?**

    The key features of this IG include:

    *   **Standardized Questionnaires:** Seven core questionnaires (Determination Letter, Protocol, Consent Form, Recruitment Materials, Adverse Medical Events, Non-Medical Events, Continuing Review) and an optional "Initiate a Study" questionnaire for pre-population.
    *   **FHIR Questionnaire and QuestionnaireResponse Resources:** The IG uses FHIR resources to represent the forms and their responses.
    *   **Structured Data Capture (SDC):** The IG leverages SDC features for form pre-population, skip logic, and data extraction.
    *   **RESTful API:** The IG outlines RESTful interactions for retrieving, submitting, and updating questionnaires and responses.
    *   **Code Systems:** The IG utilizes existing HL7 CodeSystems where possible and defines a temporary code system for sIRB-specific concepts.
    *   **Optional ResearchStudy Resource:** The IG allows for the optional use of the ResearchStudy resource to capture study details.
    *   **Client Software:** The IG defines expectations for client software that will render, populate, validate, and submit forms.
    *   **Low Implementation Burden:** The design aims for a low technical burden, especially for smaller sites, by focusing on Questionnaire and QuestionnaireResponse resources.

4.  **How does this IG relate to broader healthcare standards and regulations?**

    This IG is built upon the FHIR R4 standard and utilizes the SDC Implementation Guide. It directly addresses the requirements of the "NIH Policy on the Use of a Single Institutional Review Board for Multi-Site Research" and the Common Rule (45 CFR Part 46.114). It also utilizes existing HL7 CodeSystems and references the NCI Metathesaurus. The IG acknowledges the potential for future integration with broader healthcare standards by planning to migrate temporary codes into official terminologies like SNOMED or HL7's shared terminologies as the forms stabilize.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**

    The primary users of this IG are:

    *   **Lead Principal Investigators:** They will use the system to create and submit study applications and manage relying sites.
    *   **Relying Sites:** They will use the system to complete reliance documents, receive approved study documents, and report events.
    *   **sIRBs:** They will use the system to review study applications, communicate with investigators, and issue approvals.
    *   **Research study system developers:** They will implement the IG to enable FHIR-based exchange of sIRB forms.
    *   **Potentially, Patients:** While not direct users, patients may indirectly benefit from faster study initiation and more efficient research processes enabled by this IG.
