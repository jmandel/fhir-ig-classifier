# dental-data-exchange: Analysis

## 1. Objectives and Context

This FHIR Implementation Guide (IG) aims to standardize the exchange of dental data between medical and dental providers, as well as among dental providers themselves. It seeks to facilitate seamless interoperability using FHIR resources, specifically for dental referral and consultation notes. 

The context is the lack of a standard for exchanging discrete dental observations, leading to reliance on unstructured data and limited interoperability between dental and medical systems. This IG addresses this gap by defining FHIR profiles and value sets for dental data exchange.

The target audience includes:

- Architects and developers of medical and dental record systems
- Medical and dental providers
- Payer systems
- Business analysts and policy managers

## 2. Improvements over Previous Approaches

This IG leverages the existing FHIR US Core and C-CDA on FHIR standards, building upon them to address dental-specific needs. It improves upon previous approaches by:

- Defining structured data elements for dental information, drawing from the ANS/ADA 1084 standard and the CareQuest Institute’s MORE Care initiative.
- Specifying how dental data is incorporated within the C-CDA on FHIR profiles for referral and consultation notes.
- Providing detailed use case scenarios and examples to illustrate the exchange of dental information.

## 3. Key Features and Technical Approaches

- **Profiles:** The IG defines 7 FHIR profiles, including Dental Referral Note, Dental Consult Note, Dental Communication, Dental Service Request, and Dental Finding.
- **Value Sets:** 6 value sets are defined, covering dental procedures, observations, anatomy, oral cavity areas, tooth identification, and categories.
- **Use Cases:** 4 use cases demonstrate common dental information exchange patterns, such as medical to dental referral and dental to medical consultation.
- **Best Practices:** The IG outlines best practices for data exchange, such as distinguishing prior work from current procedures, incorporating SNODENT concepts, and including UDI details for devices.

## 4. Relation to Broader Standards and Regulations

The IG aligns with:

- **ANS/ADA 1084:** This standard provides a reference core data set for communication among dental and other health information systems.
- **FHIR US Core:** The IG extends and leverages the US Core profiles for various resources like Condition, Encounter, and Procedure.
- **C-CDA on FHIR:** The IG builds upon the C-CDA on FHIR profiles for Referral Note and Consultation Note.
- **SNOMED CT and SNODENT:** The IG emphasizes the use of SNOMED CT and SNODENT for coding dental concepts, promoting interoperability.
- **CDT and CPT:** The IG recommends the use of CDT and CPT codes for dental procedures and encounters.

## 5. Primary Users and Beneficiaries

- **Dental Providers:** The IG enables dentists to exchange structured dental information with medical providers and other dentists, facilitating care coordination and improving patient care.
- **Medical Providers:** Medical providers benefit from receiving structured dental information, allowing them to better understand a patient's oral health and its potential impact on their overall health.
- **Patients:** Patients ultimately benefit from improved care coordination and communication between their healthcare providers.
- **Payer Systems:** The standardized data exchange can support utilization and quality metrics for value-based care and payment models.
- **Researchers:** The structured data can be used for analyzing the connection between oral health and overall health. 
