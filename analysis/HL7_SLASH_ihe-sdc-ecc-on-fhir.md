# ihe-sdc-ecc-on-fhir: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**
    This IG aims to enable the transmission of data from electronic Cancer Protocols (eCPs), formerly known as electronic Cancer Checklists (eCCs), using FHIR resources. It focuses on a form-driven workflow where data captured from IHE Structured Data Capture (SDC) forms is encoded and transmitted as FHIR Observations, DiagnosticReports, and DocumentReferences. The context is the need to standardize the exchange of cancer-related data. The objective is to allow systems to share data captured in SDC forms in a structured, interoperable way using FHIR.

2.  **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**
    This IG improves upon previous approaches by providing a structured method for mapping data from IHE SDC XML forms to FHIR resources, particularly Observations. This allows for the structured capture of Question and Answer Sets, with explicit guidance on handling different question types (e.g., ListItems, text, numerical). It also specifies how to represent the hierarchical relationships between questions and sections. Additionally, it allows for the transport of the IHE SDC form itself (either blank or completed) as a Base64 encoded attachment within a FHIR DocumentReference. By using FHIR, it creates a standard for data exchange that can be more easily integrated into existing healthcare systems.

3.  **What are the key features and technical approaches of this IG?**
    Key features and technical approaches include:
    *   **Observation-Based Extraction:** Mapping IHE SDC questions and answers to FHIR Observations, using `Observation.code` for the question ID and `Observation.value[x]` for the answer.
    *   **Hierarchical Representation:** Using `Observation.derivedFrom` to represent parent questions and `Observation.hasMember` for child questions, maintaining the form's structure.
    *   **Section Grouping:** Representing sections using Observation groupers, with child questions captured in `Observation.hasMember`.
    *   **ListItem Mapping:** Using `Observation.valueCodeableConcept` to capture ListItem answers, with the `ListItem @ID` as coding and @altText, @rptTxt, or @title as text.
    *   **DocumentReference Transport:** Using FHIR DocumentReference to transport IHE SDC forms as Base64 encoded attachments.
    *   **DiagnosticReport Profile:** Utilizing a profile of DiagnosticReport to group the results of the SDC form, with links to a human readable presentation using the presentedForm element.
    *   **ConceptMap Resource:** Using ConceptMap to map SDC IDs to standardized terminologies like SNOMED CT, to improve semantic interoperability.
    *   **Must Support:** Specifying mandatory elements that should be sent if available, ensuring proper data transmission.
    *   **Specific Profiles:** Defining profiles for DiagnosticReport, DocumentReference, and Observation to capture SDC/eCP data.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is aligned with IHE SDC and HL7 FHIR standards. It builds upon the IHE SDC Technical Framework and is designed to complement the HL7 FHIR SDC Implementation Guide. By using FHIR resources, it promotes interoperability by adhering to established healthcare standards. It also acknowledges the use of SNOMED CT, a standard clinical terminology. The IG is designed to support a number of different reporting requirements such as cancer registries, quality measurements, guideline concordance, and auto-population of forms.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    Primary users and beneficiaries include:
    *   **Form Designers:** Those creating IHE SDC forms, as this IG provides guidance on how their forms will be mapped to FHIR.
    *   **Systems Developers and Integrators:** Those implementing systems that need to capture, transmit, or process data from IHE SDC forms within FHIR.
    *   **Clinical Informaticists:** Those analyzing and using the data captured from IHE SDC forms.
    *   **Public Health Agencies:** Specifically cancer registries, which can benefit from standardized data collection and transmission.
    *   **Healthcare Institutions:** Those seeking to improve data management, quality measurement, and clinical guideline adherence.
    *   **Potentially Patients:** Indirectly, as the improved data collection and transmission could lead to better care coordination, more accurate diagnoses, and more efficient clinical workflows.
