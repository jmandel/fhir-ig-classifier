# ITI.MHDS: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This Implementation Guide (IG) aims to establish a document-sharing exchange using IHE-profiled FHIR standards. It provides a method for communities to exchange health information, including patient identification, document location and retrieval, provider directories, and security. It defines a "Document Registry" actor that acts as a central point for managing metadata and documents within the community. This is intended for healthcare organizations and communities looking to share documents electronically.

2.  **How does this IG improve upon previous approaches?**
    This IG moves away from legacy IHE profiles based on XDS and HL7 v2, and instead uses FHIR as the foundation for document sharing. This is intended to leverage more accessible technology, especially for mobile devices.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    -   A "Document Registry" actor for persisting metadata and documents.
    -   Integration with other IHE profiles for patient identity (PMIR), terminology (SVCM), provider directories (mCSD), authorization (IUA, PCF), audit logging (ATNA, BALP), and time synchronization (CT).
    -   Support for publishing, discovering, and retrieving documents using MHD transactions.
    -   Options for authorization, consent management, SVCM validation, and uncontained references.
    -   A focus on comprehensive metadata requirements for document publication.
    -   Support for both contained and uncontained references to external registries for author and patient information.
    -   Use of OAuth scopes for PurposeOfUse and patient identity management.
    -   The ability to use mXDE and QEDm to make the information in shared documents more consumable as FHIR Resources.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is built upon IHE profiles and the FHIR standard. It leverages IHE IT Infrastructure Domain resources for document sharing. It aligns with the principles described in the "Health Information Exchange: Enabling Document Sharing Using IHE Profiles" white paper. It also addresses security and privacy concerns, referencing international policies like the International Data Protection Principles and US HIPAA regulations. It also aims to comply with the Document Sharing Metadata Handbook.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are healthcare organizations and communities that need to share health documents electronically. This includes systems that publish documents (Document Sources), systems that consume documents (Document Consumers), and systems that manage patient identity, terminology, and provider directories. While patients are not direct users of the technical implementation described, they are indirect beneficiaries because this IG enables more efficient and secure sharing of their health information among authorized entities, and they have some control over how their data is shared through consent management.
