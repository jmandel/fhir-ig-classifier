# davinci-pcde: Analysis

## 1. Objectives and Context

This implementation guide (IG), titled **Da Vinci Payer Coverage Decision Exchange (PCDE)**, aims to standardize the exchange of patient treatment information between health insurance payers when a patient switches insurance plans. 

**Context:** Currently, when patients change insurance, their new payer often lacks information about ongoing treatments, leading to interruptions in care, administrative burdens, and potential risks to patient health. 

**Objectives:** The IG seeks to streamline the transfer of information about active treatments, prior authorizations, and supporting clinical data from the old payer (original payer) to the new payer. This aims to:

* **Improve continuity of care:** Ensure patients experience minimal disruption in their treatments during insurance transitions.
* **Reduce administrative burden:** Minimize the need for patients and providers to resubmit information already available to the old payer.
* **Reduce costs:** Avoid unnecessary duplication of tests and procedures.
* **Enhance patient safety and quality of care:** Prevent gaps in treatment and potential medical errors.

## 2. Improvements over Previous Approaches

The IG improves upon previous approaches by:

* **Establishing a standardized data exchange process:** This replaces ad-hoc methods like phone calls, faxes, or non-standardized data transfers, enabling automated and efficient information sharing.
* **Leveraging FHIR standards:** This ensures interoperability between different payer systems, regardless of their internal technologies.
* **Providing a structured document format:** The FHIR document approach facilitates human review and interpretation of the transferred information, while also supporting future automation.

## 3. Key Features and Technical Approaches

* **FHIR-based data exchange:** The IG relies on the HL7 FHIR standard for representing and exchanging healthcare information.
* **Task-based workflow:** The new payer initiates a request for information using a FHIR Task resource, which the old payer updates with status and links to the generated document.
* **Subscription or polling for status updates:** The new payer can monitor the progress of the request using FHIR subscriptions or by polling the Task resource.
* **FHIR document structure:** The transferred information is organized as a FHIR document bundle, containing a Composition resource that outlines the document structure and sections, along with CarePlan, Claim, Prior Authorization, and other relevant resources.
* **Focus on active treatments:** The document emphasizes information about ongoing treatments, including medications, procedures, medical equipment, and disease management programs.
* **Support for prior authorizations and supporting information:** The document can include details about prior authorizations, past treatments, lab results, and other clinical information relevant to the active treatments.

## 4. Relation to Healthcare Standards and Regulations

* **HL7 FHIR:** The IG is built upon the HL7 FHIR standard, promoting interoperability in healthcare data exchange.
* **US Core Data for Interoperability (USCDI):** The IG aligns with the USCDI, which defines a set of standardized data elements for interoperability.
* **CMS Interoperability and Patient Access Rule:** While not explicitly mandated by the final rule, the IG addresses the need for payer-to-payer data exchange to support care continuity, a goal highlighted in the proposed rule.
* **Privacy and Security:** The IG inherits requirements and guidance from the Da Vinci Health Record Exchange (HRex) IG regarding privacy and security of patient data, ensuring compliance with regulations like HIPAA.

## 5. Primary Users and Beneficiaries

* **Patients:** Patients are the primary beneficiaries, as the IG aims to ensure they experience seamless transitions of care and avoid disruptions in their treatments when switching insurance.
* **New payers (receiving payers):** They benefit from receiving structured information about a patient's ongoing treatments, enabling them to make informed coverage decisions and avoid unnecessary delays or denials of care.
* **Original payers (sending payers):** They benefit from a standardized process for responding to requests for information, reducing administrative burden and potential errors.
* **Providers:** They benefit indirectly from reduced administrative burden and improved communication between payers, which can lead to more efficient care coordination.
* **Healthcare system as a whole:** The IG contributes to a more interoperable and patient-centered healthcare system by improving data exchange and care coordination. 
