# case-reporting: Analysis

## 1. Objectives and Context

This implementation guide (IG) aims to standardize electronic case reporting (eCR) using the FHIR standard. It seeks to improve public health surveillance by enabling the automated and efficient exchange of reportable condition information between healthcare providers and public health agencies (PHAs). The IG provides a framework for two primary transactions:

- **Electronic Initial Case Report (eICR):**  This transaction allows healthcare providers to electronically submit initial case reports to PHAs, triggered by specific criteria.
- **Reportability Response (RR):** This transaction serves as a response from PHAs to healthcare providers, acknowledging receipt of the eICR, confirming reportability, and providing guidance or requests for additional information.

The IG also defines an **electronic Reporting and Surveillance Distribution (eRSD)** transaction to facilitate the distribution of reporting guidelines, trigger codes, and decision support rules from PHAs to healthcare providers.

## 2. Improvements over Previous Approaches

This FHIR-based IG enhances previous approaches to eCR by:

- **Leveraging FHIR:** It adopts the modern FHIR standard, promoting interoperability and simplifying implementation compared to older standards like CDA.
- **Automating Triggering:** It enables automated triggering of eICRs based on defined criteria, reducing manual effort and improving timeliness.
- **Supporting Bidirectional Communication:** It facilitates two-way communication between healthcare providers and PHAs through the RR transaction, allowing for clarification, guidance, and follow-up.
- **Standardizing Data Elements:** It defines a consistent set of data elements for eCR, ensuring data quality and facilitating data analysis.
- **Aligning with US Core:** It aligns with the US Core Data for Interoperability (USCDI) standards, promoting wider adoption and data sharing.

## 3. Key Features and Technical Approaches

- **Profiles and Extensions:** The IG defines FHIR profiles and extensions to constrain existing FHIR resources and add specific data elements for eCR.
- **Trigger Codes:** It uses Reportable Condition Trigger Codes (RCTC) to identify potentially reportable events, enabling automated triggering of eICRs.
- **Decision Support Rules:** It supports the distribution of complex decision support rules from PHAs to healthcare providers, allowing for more accurate and efficient reportability determinations.
- **FHIR Messaging and RESTful Transport:** It supports both FHIR Messaging and basic RESTful transport mechanisms, providing flexibility for different implementation scenarios.
- **Jurisdiction Determination:** It provides a mechanism for determining the appropriate jurisdiction for reporting based on patient and provider location information.

## 4. Relation to Healthcare Standards and Regulations

This IG aligns with several healthcare standards and regulations, including:

- **FHIR R4:** The IG is based on the FHIR R4 standard, ensuring compatibility with a widely adopted healthcare data exchange standard.
- **US Core:** It aligns with the US Core Data for Interoperability (USCDI), promoting data sharing and consistency with national standards.
- **Public Health Reporting Requirements:** It supports compliance with legal requirements for reporting reportable conditions to PHAs.

## 5. Primary Users and Beneficiaries

- **Healthcare Providers:** The IG enables healthcare providers to automate and streamline eCR processes, reducing administrative burden and improving data accuracy.
- **Public Health Agencies:** PHAs benefit from more complete, timely, and standardized case reports, enhancing surveillance efforts, outbreak detection, and response.
- **Patients:**  Patients benefit indirectly from improved public health surveillance, leading to better disease control, prevention, and ultimately, improved population health.
- **EHR Vendors:** EHR vendors can use the IG to develop eCR capabilities in their systems, ensuring interoperability and compliance with standards.
- **Intermediaries (HIEs, HINs):**  Health Information Exchanges (HIEs) and Health Information Networks (HINs) can leverage the IG to facilitate the secure and efficient exchange of eCR data between healthcare providers and PHAs.

Overall, this FHIR-based eCR IG aims to modernize and improve public health surveillance by providing a standardized, automated, and interoperable framework for electronic case reporting.
