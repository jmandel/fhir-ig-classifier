# CDA-core-sd: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to represent the HL7 Clinical Document Architecture (CDA) R2.0 specification using FHIR Logical Models expressed as FHIR StructureDefinition instances. Its primary goal is to support the Consolidated CDA specification, which uses these logical structures for its templates. It also serves as a base for other CDA-based guides. The context is the exchange of clinical documents, and it is intended for implementers of systems that need to create, validate, or process CDA documents.

2.  **How does this IG improve upon previous approaches?** This IG provides an alternative approach to validating CDA documents by using FHIR validators in addition to the traditional CDA schemas. It also provides a representation of CDA structures using FHIR StructureDefinitions, which allows for a more flexible and potentially interoperable approach to managing the structures. The IG also incorporates SDTC extensions with a defined namespace, which allows for additional interoperability with systems using these extensions.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   Representation of CDA classes and V3 datatypes as FHIR StructureDefinitions.
    *   Inclusion of the Narrative Block schema and associated elements like `<content>`, `<linkHtml>`, etc.
    *   Incorporation of SDTC extensions with the `urn:hl7-org:sdtc` namespace.
    *   Provision of an example CDA document and a transformed version using a CDA stylesheet.
    *   FHIRPath supplements for evaluating expressions within CDA profiles.
    *   Use of IG Parameters to control Schematron generation.
    *   Use of ValueSets and CodeSystems to define allowable coded content.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG is based on the HL7 CDA R2.0 specification, which is a standard for exchanging clinical documents. It is intended to support specifications like Consolidated CDA. It also references the HL7 RIM and V3 datatypes. By representing CDA using FHIR, it aligns with the growing adoption of FHIR as a standard for healthcare data exchange.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users are implementers and developers of healthcare information systems that need to create, validate, or process CDA documents. This includes software vendors, healthcare organizations, and standards organizations that are working with CDA. While patients don't directly use the IG, they indirectly benefit from the improved interoperability and consistency of clinical documents that this guide enables.
