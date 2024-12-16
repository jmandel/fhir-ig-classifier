# PCC.QEDm: Analysis

## 1. Objectives and Context

The IHE PCC.QEDm (Query for Existing Data for Mobile) Implementation Guide (IG) aims to standardize how mobile health applications can query and retrieve specific clinical data elements from healthcare systems. It leverages the FHIR (Fast Healthcare Interoperability Resources) standard to define a RESTful API for querying various types of clinical data, such as observations, allergies, conditions, medications, immunizations, procedures, encounters, and their provenance.

The IG is designed for mobile application developers and healthcare system vendors who want to enable secure and interoperable data exchange between mobile apps and electronic health records (EHRs) or other health information systems.

## 2. Improvements Over Previous Approaches

The PCC.QEDm IG improves upon the previous HL7v3-based QED profile by adopting the more modern and lightweight FHIR standard, which is better suited for mobile applications and RESTful architectures. It simplifies data exchange by using standard HTTP methods and reducing the need for complex libraries and protocols.

## 3. Key Features and Technical Approaches

- **RESTful API:** QEDm defines a RESTful API using HTTP GET requests for querying clinical data based on specific search parameters.
- **FHIR Resources:** It leverages standard FHIR resources like Observation, AllergyIntolerance, Condition, Medication, etc., to represent clinical data elements.
- **Search Parameters:** The IG specifies mandatory and optional search parameters for each resource type, enabling granular data retrieval.
- **Provenance Option:** It includes an option for retrieving provenance information, linking data elements back to their source documents, enhancing data traceability and context.
- **Security Considerations:** QEDm emphasizes security and privacy by recommending user authentication (e.g., IUA, SMART-app-launch) and audit logging using the FHIR AuditEvent resource.

## 4. Relation to Healthcare Standards and Regulations

The PCC.QEDm IG aligns with the FHIR standard, a widely adopted healthcare data exchange standard developed by HL7 International. It also references other IHE profiles like MHD (Mobile Health Documents) and mXDE (Mobile Cross-Enterprise Document Data Element Extraction) for document sharing and provenance.

By promoting secure data exchange and audit logging, QEDm supports compliance with healthcare privacy regulations like HIPAA (Health Insurance Portability and Accountability Act) in the US and similar regulations in other jurisdictions.

## 5. Primary Users and Beneficiaries

- **Mobile Application Developers:** The IG provides a standardized way to integrate mobile apps with healthcare systems for accessing clinical data.
- **Healthcare System Vendors:** It guides vendors in implementing FHIR-based APIs that support mobile app integration.
- **Healthcare Providers:** They benefit from mobile apps that can access and display patient data, improving care coordination and decision-making.
- **Patients:** Patients can use mobile apps to access their own health information, track their conditions, and manage their medications, leading to greater engagement in their healthcare. 
