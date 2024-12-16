# dk-medcom-core: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to define a core set of FHIR profiles (MedComCore profiles) for use in Danish healthcare when exchanging information about patients, organizations, encounters, care teams, and practitioners. It provides a base expectation for these resources, intended to be used across various MedCom standards. The context is Danish healthcare interoperability, and it's for implementers of MedCom standards.

2.  **How does this IG improve upon previous approaches?**
    The IG does not explicitly state how it improves upon previous approaches. However, it is implied that by providing a common set of core profiles, it creates a more standardized way of exchanging data in Danish healthcare. The IG introduces specific profiles and extensions for Danish concepts, such as CPR numbers and SOR identifiers, which suggests an aim to better handle local needs.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Defining FHIR profiles that constrain the base FHIR resources (e.g., `MedComCorePatient`, `MedComCoreOrganization`).
    *   Using extensions to handle Danish specific identifiers (CPR numbers and eCPR numbers) and other local concepts.
    *   Defining invariants to enforce data quality, such as UUID formats for identifiers.
    *   Specifying usage of ValueSets and CodeSystems from MedCom's terminology server and other sources for standardized coding.
    *   Providing guidance on how to handle attachments in `DiagnosticReport` and `Media` resources.
    *   Defining the use of status and class codes for encounters and status codes for observations.
    *   Describing the use of `EpisodeOfCare` identifiers, including LPR3 identifiers.
    *   Defining how to handle messaging contact points.
    *   Specifying how to handle sender information with an extension.
    *   Defining an assigned identifier for media attachments.
    *   Defining which mime types are permitted for attachments.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is built upon the FHIR standard and HL7 Denmark's DK-core profiles, which are a Danish implementation of FHIR. It also references terminology from the Danish healthcare system, such as SOR identifiers and LPR3 identifiers. It aims to enable interoperability within the Danish healthcare system by providing structure to the exchange of data. The IG also specifies the use of security labels on patient consent.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    Primary users are:
    *   IT vendors and developers implementing MedCom standards in Denmark.
    *   Healthcare professionals who utilize systems that exchange data using these profiles.
    Beneficiaries include:
    *   Patients, as the IG aims to improve data exchange and interoperability, resulting in better coordination of care and more efficient healthcare processes.
    *   The Danish healthcare system by enabling better data exchange and interoperability.
