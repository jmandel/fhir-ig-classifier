# nzbase: Analysis

## 1. Objectives and Context

This Implementation Guide (IG) aims to establish a standardized framework for exchanging healthcare information in New Zealand using the FHIR standard. It focuses on defining common extensions and terminology artifacts that are specific to the New Zealand healthcare context. The IG intends to enable interoperability between different healthcare systems within the country, facilitating seamless information sharing between providers, organizations, and potentially patients.

## 2. Improvements over Previous Approaches

The IG doesn't explicitly mention previous approaches or highlight specific improvements. However, the use of FHIR itself represents a significant advancement in healthcare interoperability compared to older, less flexible standards.

## 3. Key Features and Technical Approaches

* **Extensions:** The IG defines a variety of New Zealand-specific extensions to capture information not present in the base FHIR specification, such as District Health Board affiliation, Māori descent, domicile code, and funded healthcare programs.
* **Terminology:** It establishes ValueSets and CodeSystems to standardize the representation of coded data elements relevant to New Zealand, including ethnicity, citizenship status, and practitioner qualifications.
* **Identifiers:** It emphasizes the use of standard identifiers like NHI (National Health Identifier) and HPI (Health Practitioner Index) to ensure unambiguous identification of patients and practitioners.
* **Profiles:** It builds profiles on top of base FHIR resources (e.g., Patient, Practitioner, Organization) to constrain and guide their use in the New Zealand context, incorporating the defined extensions and terminology.

## 4. Relation to Broader Standards and Regulations

The IG aligns with the FHIR standard, promoting international interoperability. It incorporates terminologies like SNOMED CT, a widely recognized clinical terminology. It directly references New Zealand-specific standards like the NHI and HPI, demonstrating compliance with national regulations and identifier systems. The IG also references the Electronic Street Address Mapping (eSAM) standard for defining suburbs.

## 5. Primary Users and Beneficiaries

* **Healthcare Providers:** The IG enables providers (e.g., GPs, specialists, nurses) to exchange patient information accurately and efficiently across different systems, supporting coordinated care.
* **Healthcare Organizations:** It facilitates interoperability between healthcare facilities (e.g., hospitals, clinics) and administrative bodies (e.g., District Health Boards), streamlining administrative processes and information sharing.
* **Software Developers:** The IG provides a clear specification for developing healthcare applications that can seamlessly integrate with existing New Zealand systems.
* **Patients (Potential):** While not explicitly stated, the IG's focus on interoperability could eventually benefit patients by ensuring their information is readily accessible to authorized providers, empowering them in managing their health. 
