# fhir-clinical-document: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**
    This IG aims to provide a standardized way to represent clinical documents in FHIR. It serves as a universal starting point for creating FHIR-based clinical document specifications, intended for those migrating from CDA or creating new FHIR documents. It defines what a FHIR Clinical Document is and how it should be structured, ensuring consistency and interoperability in the exchange of clinical information. The context is the increasing adoption of FHIR in healthcare and the need for a consistent way to represent documents.

2.  **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**
    This IG addresses the lack of a clear canonical pattern for FHIR clinical documents. It aims to resolve mapping discrepancies between CDA and FHIR that exist across numerous existing Bundle and Composition profiles. It also provides a universal realm guide to facilitate consistency worldwide, which many existing profiles and IGs do not. This IG is based on FHIR core documents guidance, adding more guidance and constraints, as well as borrowing from other IGs such as the International Patient Summary and C-CDA on FHIR. It offers a more detailed and specific approach compared to the FHIR core guidance alone.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Defining a FHIR Clinical Document as a Bundle of type "document" with a Composition as the first entry.
    *   Specifying the use of Composition.text for document metadata and Composition.section.text for attested narrative.
    *   Providing guidance on the rendering of narrative content using standard web browsers.
    *   Defining extensions for participants (data enterer, informant, information recipient, other participants), consent, and orders.
    *   Specifying document succession management using Composition.relatesTo.
    *   Use of slicing to differentiate between attesters.
    *   Use of invariants to enforce business rules.
    *   Providing an operation to convert a document bundle to a transaction bundle.
    *   Providing mappings to CDA elements.
    *   Use of value sets to constrain participant types.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is primarily related to the HL7 Clinical Document Architecture (CDA) standard. It seeks to provide a path for migrating CDA-based clinical documents to FHIR. It aligns with FHIR core guidance for documents, but adds specific constraints for clinical documents. It references other IGs, like the International Patient Summary, showing its relationship to other FHIR efforts. The IG has also taken security guidance from FHIR Core.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users of this IG are:
    *   Implementers of FHIR systems who need to exchange clinical documents.
    *   Developers creating FHIR clinical document specifications.
    *   Organizations migrating from CDA to FHIR.
    *   FHIR server developers who need to support the exchange of clinical documents.
    *   FHIR client developers who need to display and process clinical documents.
    Indirectly, patients benefit from improved interoperability and data exchange, as it can lead to better coordinated care and more readily available clinical information.
