# cdmh: Analysis

## 1. Objectives and Context

The Common Data Models Harmonization (CDMH) FHIR Implementation Guide (IG) aims to standardize how observational data from different research networks is translated into the FHIR format. This is important for patient-centered outcomes research (PCOR) and other research purposes. Currently, different networks (like PCORNet, i2b2/ACT, OMOP, and Sentinel) use their own data models, making it difficult to combine and analyze data across networks. This IG aims to solve this problem by providing a common way to represent data from these different models using FHIR.

**In simple terms:** Imagine each research network speaks a different language. This IG is like creating a universal translator so they can all understand each other, making it easier to do research with data from all networks.

## 2. Improvements over Previous Approaches

This IG improves upon previous approaches by:

* **Enabling researchers to query multiple research networks using a single format (FHIR).** This eliminates the need for researchers to learn the specific formats of each network.
* **Allowing data partners to keep their existing data models while still participating in broader research initiatives.** This reduces the burden on individual networks to adopt new infrastructure.
* **Leveraging FHIR's standardized approach for data exchange and APIs.** This promotes interoperability and allows for easier integration with other FHIR-based systems.

## 3. Key Features and Technical Approaches

* **Mappings:** The IG defines specific mappings between data elements in the different CDMs (PCORNet, i2b2/ACT, OMOP, Sentinel) and corresponding FHIR resources and profiles. These mappings are the core of the IG, enabling the translation between formats.
* **BRIDG as Intermediary:** The IG uses the Biomedical Research Integrated Domain Group (BRIDG) model as an intermediary step in the mapping process. CDMs are mapped to BRIDG, and then BRIDG is mapped to FHIR. This simplifies the overall mapping process and facilitates data submission to the FDA.
* **US Core Profile Leverage:** The IG leverages the US Core FHIR profiles wherever possible, promoting consistency with broader FHIR implementations. For elements not covered by US Core, the IG defines extensions to ensure all necessary data can be represented.
* **Implementation Guidance:** The IG provides specific guidance on handling semantic differences between the CDMs and FHIR, such as date/time representations and vocabulary mappings. This helps ensure accurate and consistent translation.

## 4. Relation to Broader Standards and Regulations

* **FHIR Standard:** The IG is fundamentally based on the HL7 FHIR standard, aligning with a widely adopted standard for healthcare data exchange.
* **US Core Implementation Guide:** The IG builds upon the US Core IG, which defines a set of commonly used FHIR resources and profiles for the US healthcare context.
* **DAF-Research Implementation Guide:** The IG complements the Data Access Framework Research (DAF-Research) IG, which focuses on data extraction workflows. CDMH provides the mappings necessary for DAF-Research to operate across different CDMs.
* **FDA Data Submission:** The use of BRIDG as an intermediary model aligns with FDA requirements for data submission, facilitating regulatory compliance.

## 5. Primary Users and Beneficiaries

* **Researchers:** The primary beneficiaries are researchers who can access and analyze data from multiple networks more easily using a standardized FHIR format.
* **Data Partners (Research Networks):** These networks benefit from being able to participate in broader research initiatives without having to change their existing data models.
* **Developers:** Developers can use the IG to build tools and applications that can work with data from different research networks, fostering innovation in the PCOR space.
* **Ultimately, Patients:** By facilitating PCOR, the IG indirectly benefits patients as research findings can lead to improvements in healthcare quality and outcomes. 
