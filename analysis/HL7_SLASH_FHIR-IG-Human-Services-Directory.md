# FHIR-IG-Human-Services-Directory: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to standardize how information about human and social services is shared, enabling better access to these services. It provides a way for different systems (like healthcare, government, and community-based organizations) to exchange information about available services in a common format (FHIR), making it easier to connect people with the resources they need. The context is the need to address social determinants of health by improving access to community-based services. The target audience includes healthcare providers, payers, and consumers.

2.  **How does this IG improve upon previous approaches?** This IG improves upon previous approaches by introducing a standard FHIR interface for accessing human services directories. It provides a map between the Human Services Data Specification (HSDS) and FHIR profiles, which facilitates implementation for those familiar with HSDS. This reduces the need for implementers to have extensive FHIR expertise, promoting interoperability between disparate systems, and allowing better access to data about community-based services.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   Three new FHIR profiles specific to human services: `HSDOrganization`, `HSDLocation`, and `HSDHealthcareService`.
    *   Alignment with the DaVinci PDEX Plan Net Provider Directory IG, reusing some of its profiles and extensions, and mapping to the HSDS model.
    *   A focus on RESTful APIs for querying data, specifically HTTP GET requests.
    *   Support for searching services based on various parameters (e.g., location, organization, program, accessibility).
    *   Mandatory inclusion of a lastUpdated timestamp for tracking updates.
    *   A suggested approach for the server to respond with a FHIR bundle including the requested resource and all related resources, simplifying data retrieval.
    *   Use of extensible value sets for categories and types of services.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG aligns with the DaVinci PDEX Plan Net Provider Directory IG, which is recommended by CMS. It also leverages US Core profiles and other relevant IGs (e.g. SDOH Clinical Care IG) to promote interoperability. It supports the CMS Interoperability and Patient Access Final Rule by using FHIR as a technical standard. This alignment is intended to reduce implementation burden for healthcare providers and payers that have implemented PDEX and to enable access to social care referrals from within their clinical workflows.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users and beneficiaries include:
    *   Healthcare providers and payers seeking to make referrals to community services.
    *   Consumers (patients/clients) looking for social services in their community.
    *   Community-based organizations who will benefit from an easier way to make their services discoverable.
    *   Organizations implementing FHIR-based access to human services directories.
    *   IT developers creating innovative community platforms that need directory access.
