# fhir-mdi-ig: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to standardize the exchange of information to and from medicolegal death investigation (MDI) systems. It focuses on interoperability between MDI case management systems (CMS), forensic toxicology laboratory information management systems (LIMS), and electronic death registration systems (EDRS) used by vital records offices (VROs). The objective is to provide MDI CMS developers with technical specifications and best practices for standardized MDI data exchange, promoting consistent and secure information sharing within the MDI community and with their stakeholders.

2. **How does this IG improve upon previous approaches?**
    This IG introduces a standardized FHIR-based approach to data exchange, replacing disparate methods like paper and fax. It provides specific profiles for MDI-specific data, such as cause of death, injury details, and toxicology results, which were lacking in previous approaches. By using FHIR, it leverages existing healthcare standards to improve interoperability with other systems. It also defines specific operations (e.g. $document) and search parameters to streamline access to necessary data. The IG addresses the need for bi-directional data exchange.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Use of FHIR R4.0.1, US Core, VRDR, and VRCL profiles.
    *   Defines specific profiles for Composition, DiagnosticReport, Observation, Specimen, Practitioner, Organization, and Patient resources tailored for MDI data.
    *   Uses extensions to capture additional MDI-specific data, such as tracking numbers and cremation clearance status.
    *   Specifies ValueSets and CodeSystems for MDI-specific terminology.
    *   Supports RESTful API and Messaging paradigms for data exchange.
    *   Provides specific guidance for data exchange scenarios, such as MDI to EDRS, Toxicology to MDI, and death certificate review.
    *   Includes guidance on handling missing data and required fields.
    *   Defines CapabilityStatements to specify system conformance.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG builds upon the FHIR R4.0.1 standard and utilizes U.S. Core, VRDR, and VRCL profiles. This aligns with broader healthcare standards used by EHR vendors, hospitals, and other health care providers. The use of LOINC and SNOMED CT for coding also ensures alignment with standard terminologies. It also addresses the need for standardized data in death investigations, which is important for public health and public safety reporting. The IG is aligned with the goals of the Office of the National Coordinator for Health Information Technology (ONC) criteria in the health IT certification process.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    Primary users and beneficiaries include:
    *   Architects and developers of MDI case management systems, forensic toxicology LIMS, and EDRS.
    *   Medical examiners, coroners, and death investigators.
    *   Forensic toxicology laboratory staff.
    *   Jurisdictional vital records offices.
    *   Public health and public safety agencies that rely on MDI data.
    *   While not direct users, patients' families may indirectly benefit from more efficient and accurate death investigations and reporting.
