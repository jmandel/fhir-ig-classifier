# fhir-medmorph: Analysis

## 1. Objectives and Context

The MedMorph Reference Architecture (RA) Implementation Guide (IG) aims to simplify and standardize how healthcare data is collected and shared for research and public health purposes in the US. It seeks to reduce the burden on healthcare providers (e.g., doctors, hospitals) while making electronic data more readily available to researchers and public health agencies (e.g., CDC, state cancer registries). 

The IG achieves this by defining a common framework and technical approach for extracting data from electronic health records (EHRs) and other data sources, processing it (e.g., de-identification), and securely submitting it to the appropriate recipients. This framework is designed to support various use cases, including public health reporting (e.g., disease surveillance, cancer registries, health surveys) and research data sharing. 

## 2. Improvements over Previous Approaches

The MedMorph RA IG improves upon previous approaches by:

* **Standardizing data exchange:** It leverages the HL7 FHIR standard, promoting interoperability and reducing the need for custom data mappings and transformations.
* **Automating data collection:** It defines "Knowledge Artifacts" that automatically trigger data extraction and reporting based on specific events and conditions in clinical workflows, minimizing manual effort and provider burden.
* **Harmonizing with existing public health initiatives:** It aligns with and expands upon the architecture of the Electronic Case Reporting (eCR) FHIR IG and aims to harmonize with the US Public Health (PH) Profiles Library, promoting consistency and reducing profile proliferation.
* **Addressing broader use cases:** It extends beyond reportable conditions (the focus of eCR) to support research use cases and potentially other types of data exchange in the future.


## 3. Key Features and Technical Approaches

* **FHIR-based:** The IG relies heavily on the HL7 FHIR R4 standard for data representation and exchange.
* **Modular architecture:** It defines a flexible architecture with distinct actors (e.g., Data Source, HDEA, Trust Service Provider, Data Receiver) and workflows (e.g., Provisioning, Notification, Report Creation, Data Submission).
* **Knowledge Artifacts:** These machine-processable artifacts define the rules and logic for automated data extraction and reporting, based on an Event, Condition, Action (ECA) paradigm.
* **SMART on FHIR:** It uses SMART on FHIR Backend Services Authorization for secure system-to-system communication between actors.
* **Subscriptions and Notifications:** It leverages FHIR Subscriptions (where supported) or a custom RESTful API for notifying the HDEA about relevant events in the Data Source.
* **Trust Services:** It defines the role of a Trust Service Provider for performing de-identification, anonymization, and other data transformations as needed.


## 4. Relation to Healthcare Standards and Regulations

The MedMorph RA IG aligns with several healthcare standards and regulations, including:

* **HL7 FHIR:** It is based on the FHIR R4 standard, a widely adopted standard for healthcare data exchange.
* **US Core IG:** It leverages US Core profiles for data elements commonly used in the US healthcare system, promoting interoperability and compliance with the ONC Cures Act certification criteria.
* **Bulk Data Access IG:** It utilizes the Bulk Data Access IG for retrieving large datasets for research purposes, supporting efficient data sharing.
* **SMART App Launch IG:** It employs SMART App Launch for secure authorization and access to healthcare data, ensuring privacy and security.
* **ONC 2015 Edition and 2015 Edition Cures Update:** It aligns with these regulations by promoting interoperability and standardized data exchange.
* **TEFCA:** It supports the goals of TEFCA by facilitating trusted data exchange between healthcare organizations and public health/research entities.
* **HIPAA Privacy Rule:** It addresses privacy concerns by defining the role of Trust Service Providers for de-identification and outlining appropriate data handling practices.


## 5. Primary Users and Beneficiaries

The primary users and beneficiaries of this IG include:

* **Public health agencies:** They can use the IG to automate data collection for disease surveillance, case reporting, health surveys, and other public health activities.
* **Researchers:** They can leverage the IG to access de-identified healthcare data for research studies, accelerating discoveries and improving patient outcomes.
* **Healthcare providers:** They benefit from reduced reporting burden and streamlined data sharing processes.
* **Healthcare organizations:** They can implement the IG to improve data exchange capabilities and support public health and research initiatives.
* **Patients:** They indirectly benefit from improved public health surveillance, advancements in medical research, and potentially better healthcare outcomes resulting from data-driven insights.


The IG also benefits developers of EHRs and other health IT systems, standards organizations, and implementers of content IGs for specific use cases. 
