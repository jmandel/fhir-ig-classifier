# ITI.PDQm: Analysis

## 1. Objectives and Context

The ITI.PDQm (Patient Demographics Query for Mobile) Implementation Guide aims to define a lightweight, RESTful interface for accessing patient demographic data from a central source. It leverages technologies readily available to mobile and web applications, such as HTTP, REST, JSON, and XML. The goal is to enable seamless integration of patient demographics into various healthcare applications, including:

- Health portals exposing data to browser plugins
- Medical devices requiring patient context
- Mobile applications used by physicians
- Web-based EHR/EMR systems needing dynamic updates

## 2. Improvements over Previous Approaches

This IG replaces a previous PDF-based specification (Rev 2.2) with a FHIR-based implementation guide. Key improvements include:

- **Formalized FHIR profiles:**  Defines structured profiles for Patient resources, ensuring data consistency and interoperability.
- **Enhanced security:** Introduces the Patient Demographics Match (ITI-119) transaction based on the FHIR $match operation, offering more robust patient matching capabilities and better support for security features like ATNA and IUA.
- **Streamlined workflows:** Addresses issues related to deprecated patient identifiers, search parameter combinations, and response handling, improving the efficiency and reliability of data exchange.

## 3. Key Features and Technical Approaches

- **RESTful API:** Leverages HTTP verbs (GET, POST) for querying and retrieving data.
- **FHIR resources:** Uses FHIR resources, primarily Patient, Bundle, and OperationOutcome, for data representation and exchange.
- **Search parameters:** Defines a specific set of search parameters to facilitate querying based on common demographic attributes.
- **Patient matching:** Introduces ITI-119 based on FHIR $match operation, enabling more sophisticated patient matching algorithms.
- **Security integration:** Supports ATNA for audit logging and IUA for user and app authentication and authorization.

## 4. Relation to Healthcare Standards and Regulations

The IG aligns with:

- **HL7 FHIR:** Adheres to the FHIR standard for data representation and exchange, ensuring interoperability with other FHIR-based systems.
- **IHE Profiles:** Complements existing IHE profiles like PDQ and PDQv3, offering a FHIR-based alternative for patient demographics query.
- **Security standards:** Incorporates ATNA and IUA to address security and privacy concerns in line with healthcare regulations.

## 5. Primary Users and Beneficiaries

- **Healthcare providers:** Benefit from streamlined access to patient demographics, enabling better informed clinical decisions and improved patient care.
- **Healthcare application developers:** Gain clear specifications for integrating patient demographics into their applications, fostering interoperability and reducing development costs.
- **Patients:** Indirectly benefit from improved data accuracy, privacy protection, and more efficient healthcare processes. 
