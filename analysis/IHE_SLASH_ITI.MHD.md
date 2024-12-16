# ITI.MHD: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**
    This IG, Mobile access to Health Documents (MHD), aims to standardize how mobile and resource-constrained devices share health documents. It provides a consistent API for mobile applications to publish documents and query/retrieve existing documents, simplifying the integration of these devices with healthcare systems. It focuses on a subset of document sharing use cases, and simplifies the implementation for use in resource-constrained environments.

2.  **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**
    This IG simplifies the integration of mobile devices by using a RESTful API with a subset of XDS functionality. It avoids the complexity of SOAP, WSSE, MIME-Multipart, MTOM/XOP, ebRIM, and multi-depth XML. It also provides a "Simplified Publish" option for simpler use cases. It also uses FHIR R4 resources (DocumentReference, List, Binary, Bundle), and thus aligns with current HL7 FHIR standards.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    - Defining four actors: Document Source, Document Recipient, Document Consumer, and Document Responder.
    - Defining six transactions: Provide Document Bundle (ITI-65), Find Document Lists (ITI-66), Find Document References (ITI-67), Retrieve Document (ITI-68), Simplified Publish (ITI-105), and Generate Metadata (ITI-106).
    - Using FHIR R4 resources such as DocumentReference, List, Binary, and Bundle for data exchange.
    - Providing profiles for minimal, comprehensive and uncontained metadata options.
    - Defining a set of RESTful operations for document sharing.
    - Defining an optional "XDS on FHIR" option that allows grouping with XDS environments.
    - Defining an "UnContained Reference Option" to enable use-cases where known references are managed over their lifecycle.
    - Defining a "Simplified Publish" option for simpler publication use cases.
    - Defining a "Generate Metadata" option for publishing structured/coded documents.
    - Defining an "ITI-65 FHIR Documents Publish" option that supports FHIR Document Bundles as an alternative to Binary documents.
    - Using a consistent security model with guidance on OAuth and ATNA.
    - Defining a mapping between XDS and FHIR resources.
    - Defining a mapping between XDS association types and FHIR relatesTo codes.
    - Defining audit event profiles for each actor.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is based on IHE IT Infrastructure (ITI) framework, and aligns with the IHE Document Sharing concepts, specifically XDS, XDR, and XDM. It uses HL7 FHIR R4 for data representation. It also references HL7 FHIR core profiles. It includes guidance on security using ATNA and IUA. It aims to implement the concepts of XDS in a simpler manner. It also aims to be compatible with MHDS.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users/beneficiaries are:
    - Mobile and resource-constrained device application developers who need to share health documents.
    - Healthcare providers and organizations that need to integrate mobile devices into their workflows.
    - Patients who use mobile devices to access or contribute to their health records.
    - Organizations that are building document sharing infrastructure where mobile applications can participate.
