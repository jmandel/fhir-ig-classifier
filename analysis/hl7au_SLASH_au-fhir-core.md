# au-fhir-core: Analysis

## 1. Objectives and Context

The AU Core FHIR Implementation Guide (IG) aims to standardize the exchange of core digital health and administrative information in Australia using the HL7 FHIR standard. It defines a common set of data elements, profiles, and API interactions to facilitate interoperability between healthcare systems. The IG caters to various stakeholders involved in the Australian healthcare ecosystem, including healthcare providers, software vendors, and government agencies.

## 2. Improvements over Previous Approaches

The IG leverages the Australian Core Data for Interoperability (AUCDI) project, which established a consensus on essential data elements for healthcare delivery. AU Core builds upon AUCDI by providing a concrete implementation framework using FHIR, enabling standardized data exchange based on agreed-upon clinical requirements.

## 3. Key Features and Technical Approaches

- **Profiles and Extensions:** AU Core defines FHIR profiles for common resources like Patient, Encounter, Condition, and Observation. These profiles specify mandatory and "Must Support" elements, ensuring consistent representation of crucial information.
- **Capability Statements:** The IG defines capability statements for "AU Core Requester" and "AU Core Responder" actors, outlining the expected FHIR API interactions and search capabilities for data exchange.
- **Terminology:** AU Core relies on established terminologies like SNOMED CT-AU, AMT, and LOINC to ensure semantic interoperability and consistent coding of medical concepts.
- **Contained Resources:** The IG encourages the use of contained resources to represent medication information within a FHIR transaction, streamlining data exchange.
- **Missing and Suppressed Data:** AU Core provides clear guidelines on handling missing or suppressed data using DataAbsentReason codes, addressing privacy and data availability concerns.

## 4. Relationship to Healthcare Standards and Regulations

AU Core aligns with international FHIR standards and considers national regulations and guidelines, such as those related to privacy, security, and consent. It draws inspiration from international implementation guides like International Patient Access and US Core, promoting global interoperability. The IG also incorporates Australian-specific requirements, like the use of the Individual Healthcare Identifier (IHI).

## 5. Primary Users and Beneficiaries

- **Healthcare Providers:** Benefit from standardized data exchange, enabling seamless information sharing between different healthcare settings, improving care coordination and patient safety.
- **Software Vendors:** Gain a clear framework for developing interoperable healthcare systems, reducing development costs and fostering innovation.
- **Government Agencies:** Can leverage AU Core to implement national healthcare initiatives, such as electronic health records and data registries, promoting data-driven policymaking.
- **Patients:** Ultimately benefit from improved healthcare quality, safety, and efficiency resulting from standardized data exchange. AU Core's emphasis on privacy and security safeguards sensitive patient information.
