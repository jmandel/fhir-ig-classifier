# ITI.mCSD: Analysis

1.  **Objectives and Context:** This IG, Mobile Care Services Discovery (mCSD), aims to enable the discovery of care services resources (like organizations, facilities, practitioners, and services) in a federated environment using RESTful queries. It provides a way for systems to find information about available care services and their related resources. The context is eHealth architectures that require flexible and decentralized discovery of resources. The target audience includes implementers of systems needing to find and use information about care services.

2.  **Improvements:** This IG improves upon previous approaches by providing a standardized, RESTful way to discover care services resources. It moves beyond simple hierarchical or static listings, allowing for dynamic relationships and flexible queries. It also addresses the limitations of FHIR R4's Endpoint.connectionType by introducing a detailed code system and extension for more specific endpoint types. This was needed because of the limited set of connection types available from the FHIR core. The IG also introduces OrganizationAffiliation to represent non-hierarchical relationships, which was not clearly supported previously, and explicitly models federated access through the "DocShare-federate" code.

3.  **Key Features and Technical Approaches:**
    *   **RESTful Interface:** Uses standard FHIR RESTful interactions for querying care service resources.
    *   **Resource Profiles:** Defines profiles for FHIR resources like Organization, Location, Practitioner, HealthcareService, Endpoint, and OrganizationAffiliation, constraining and extending them for mCSD use cases.
    *   **Flexible Queries:** Supports a wide range of search parameters on the resources, including location-based distance searches and reverse includes for related resources.
    *   **Endpoint Discovery:** Provides detailed guidance on using Endpoint resources for electronic communication, including a custom code system for IHE endpoint types and an extension for more specific endpoint details.
    *   **Organization Affiliations:** Uses OrganizationAffiliation to represent non-hierarchical relationships between organizations, particularly for document sharing, and clarifies use cases for both hierarchical and non-hierarchical relationships.
    *   **Audit Events:** Includes AuditEvent profiles for recording events related to read, query and update operations as specified for BALP.
    *   **Federated Access:** Defines a "DocShare-federate" code for OrganizationAffiliation that explicitly means electronic access to participating organizations through the affiliation's endpoint, as opposed to implied access through hierarchy.
    *   **Purpose of Use:** Introduces an extension to specify the purpose of use for Endpoints and Organizations and a search parameter to find them by the purpose of use code.
    *   **Specific Code Systems:** Defines code systems for Organization/Location types, Endpoint types, and OrganizationAffiliation types.
    *   **Support for Updates:** Implements a mechanism for consumers to request updates to the care services resources, since a previous update.

4.  **Relationship to Broader Standards:** This IG is based on HL7 FHIR Release 4 and leverages several existing IHE profiles. It uses codes and terminologies from HL7 and IHE. It specifically integrates with the Basic Audit Log Pattern (BALP) for auditing. It also references the WHO's work on Master Facility Lists. It aims to be compatible with other directory IGs like VhDir, while focusing on the representation and search of complex structures.

5.  **Primary Users and Beneficiaries:**
    *   **Implementers:** System developers building eHealth systems that need to discover care services information.
    *   **Healthcare Providers:** Doctors, nurses, and other healthcare workers who need to locate services and resources.
    *   **Health Information Exchanges (HIEs):** Organizations that manage and share health information.
    *   **Public Health Agencies:** Organizations that manage public health programs and facilities.
    *   **Emergency Responders:** Individuals needing to quickly access lists of credentialed providers at emergency sites.
    *   **Data Reporting Systems:** Systems that need to aggregate data across multiple sites.
    *   **Patients:** Indirectly benefit by enabling more efficient access to care services through improved interoperability.
