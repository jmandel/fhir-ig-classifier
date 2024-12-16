# ch-core: Analysis

## 1. Objectives and Context

The CH Core (CH Core) FHIR Implementation Guide (IG) aims to standardize the use of FHIR in Switzerland, particularly in the context of the Swiss Electronic Patient Record (EPR). Its primary objectives are to:

* **Harmonize FHIR usage:** Define a common set of FHIR resources, data types, extensions, and terminology for Swiss healthcare data exchange.
* **Support EPR interoperability:** Ensure compatibility with the technical and semantic requirements of the Swiss EPR, including metadata specifications, exchange formats, and XDS integration.
* **Facilitate data sharing:** Enable secure and standardized sharing of core patient demographics and essential healthcare information among different healthcare providers and systems in Switzerland.

## 2. Improvements over Previous Approaches

The CH Core IG builds upon existing Swiss healthcare standards and leverages FHIR's capabilities to improve data exchange. Specifically, it:

* **Adopts FHIR as a modern standard:** Replaces older, less flexible data exchange methods with FHIR, enabling better interoperability and data sharing.
* **Provides clear guidance and constraints:** Establishes specific profiles and rules for using FHIR resources and data types in the Swiss context, reducing ambiguity and promoting consistency.
* **Incorporates Swiss-specific terminology:** Integrates relevant code systems, value sets, and naming systems from eCH and BFS, ensuring semantic interoperability and accurate representation of Swiss healthcare concepts.

## 3. Key Features and Technical Approaches

* **Resource and data type profiles:** Defines CH Core profiles for essential FHIR resources (e.g., Patient, Practitioner, Encounter, Organization) and data types (e.g., Address, Identifier, HumanName), constraining their use for Swiss scenarios.
* **Swiss-specific extensions:** Introduces extensions for concepts like "Author of the content," "Accident," "BFS Discharge Decision," and others, capturing information relevant to Swiss healthcare practices.
* **Integration of Swiss terminology:**  Relies heavily on CH Term, a FHIR IG containing Swiss code systems and value sets derived from eCH and BFS, ensuring semantic interoperability and compliance with national standards.
* **Support for readable representation:** Defines a mechanism for embedding readable PDF representations within FHIR documents, addressing the requirement for human-readable formats in the Swiss EPR.

## 4. Relation to Healthcare Standards and Regulations

The CH Core IG is closely aligned with Swiss healthcare standards and regulations, including:

* **eCH standards:** Incorporates requirements from eCH-0010 (postal address), eCH-0046 (contact information), and eCH-0011 (personal data), ensuring compatibility with these widely adopted Swiss standards.
* **BFS variables for medical statistics:** Includes relevant variables from the Federal Statistics Office (BFS) for medical statistics reporting, supporting national healthcare data collection efforts.
* **Swiss EPR Annexes:** Adheres to the technical and semantic specifications outlined in the Annexes to the Swiss EPR law, particularly regarding metadata, exchange formats, and XDS integration.

## 5. Primary Users and Beneficiaries

* **Healthcare providers:** Physicians, nurses, pharmacists, and other healthcare professionals benefit from standardized data exchange, facilitating seamless information flow across care settings.
* **Healthcare institutions:** Hospitals, clinics, laboratories, and pharmacies can exchange patient data more effectively, improving care coordination and reducing administrative burden.
* **Software vendors:** Developers of electronic health record (EHR) systems, practice management software, and other healthcare IT solutions can use CH Core to ensure their products are interoperable with the Swiss healthcare ecosystem.
* **Patients:** Ultimately, patients benefit from improved data sharing and interoperability, leading to better continuity of care, reduced errors, and more informed healthcare decisions. 
