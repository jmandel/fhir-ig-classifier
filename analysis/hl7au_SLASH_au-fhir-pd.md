# au-fhir-pd: Analysis

## 1. Objectives and Context
The "Australian Profile for Provider Directory Services" (au-fhir-pd) IG aims to standardize how healthcare provider directory information is exchanged in Australia using the FHIR standard. This is crucial for secure messaging between healthcare systems, enabling them to find the correct recipient and their preferred communication method (e.g., secure messaging endpoint). It's designed for software systems that both provide and consume provider directory information, ensuring they can seamlessly interact.

## 2. Improvements over Previous Approaches
The latest version (TBD) introduces several improvements, including:
- **Enhanced Identifier Management:** Consolidates vendor directory identifiers into a dedicated profile and introduces a profile for secure messaging delivery target identifiers, improving consistency and reducing redundancy.
- **Stronger Identifier Requirements:** Mandates the use of specific identifier types for organizations, practitioners, and healthcare services, enhancing data quality and interoperability.
- **Refined Search Capabilities:** Differentiates between "must support" and "should support" search parameters, clarifying expectations for directory service providers and consumers.
- **Updated FHIR Version:** Aligns profiles with FHIR version 4.0.1, incorporating the latest features and enhancements.
- **Improved Example Data:** Corrects and enhances example data to better illustrate the use of the profiles.
- **Alignment with HL7 AU Practices:** Adopts the current HL7 Australia publication structure and format.

## 3. Key Features and Technical Approaches
- **Resource Profiling:** Defines specific profiles for FHIR resources like Practitioner, Organization, HealthcareService, and Endpoint, tailoring them to the Australian context and secure messaging requirements.
- **Identifier Standardization:** Emphasizes the use of standardized identifiers like HPI-O, HPI-I, and Medicare Provider Number, enabling accurate identification of healthcare providers and organizations.
- **Endpoint Management:** Defines a profile for secure messaging endpoints, ensuring directory services include information about how to communicate securely with providers.
- **Search Parameter Extensions:** Introduces custom search parameters to enable querying based on secure messaging endpoint characteristics.
- **Capability Statements:** Specifies the expected FHIR capabilities of both directory service providers and consumers, ensuring interoperability.
- **Federation Support:** Outlines requirements for federated directory services, enabling the combination of data from multiple sources.

## 4. Relation to Broader Standards and Regulations
The IG aligns with Australian healthcare standards and regulations, particularly those related to secure messaging ([ATS 5822—2010](https://infostore.saiglobal.com/en-au/Standards/Product-Details-129644_SAIG_AS_AS_274353/?productID=129644_SAIG_AS_AS_274353)). It also references and leverages terminologies and identifiers defined by national bodies like the Australian Digital Health Agency (e.g., NCTS, HPI-O, HPI-I).

## 5. Primary Users and Beneficiaries
- **Software Developers:** Implementers of provider directory services and client applications that interact with these directories.
- **Healthcare Organizations:** Providers of healthcare services who need to be listed in directories for secure messaging purposes.
- **Healthcare Professionals:** Practitioners who need to be searchable in directories and reachable via secure messaging.
- **Healthcare System Integrators:** Organizations responsible for connecting different healthcare systems and ensuring interoperability.
- **Patients (Indirectly):** Benefit from improved communication and coordination of care facilitated by secure messaging. 
