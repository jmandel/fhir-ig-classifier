# cancer-reporting: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**

    This IG aims to standardize the electronic exchange of cancer pathology data between pathology laboratories, hospital systems, and central cancer registries (CCRs). It defines how to structure and transmit pathology data using FHIR resource bundles, operating within the context of public health reporting in the US. The primary objective is to promote interoperability and improve the efficiency of data sharing for continuity of care, structured storage, standardized cancer reporting, and research. The intended audience includes architects and developers of clinical and pathology laboratory health record systems, as well as cancer registry systems.

2.  **How does this IG improve upon previous approaches?**

    This IG provides an alternative to the HL7 Version 2.5.1 message or HL7 CDA document approach for transmitting pathology data. It addresses the issue of non-discrete data formats (e.g., PDF) often used for synoptic cancer pathology reports flowing from Laboratory Information Systems (LISs) to EHRs. By defining a standard based on FHIR, it aims to maintain the discrete nature of cancer pathology data during exchange, enhancing interoperability and scalability.

3.  **What are the key features and technical approaches of this IG?**

    The key features and technical approaches include:
    *   Definition of 6 FHIR profiles: US Pathology Exchange Content Bundle, US Pathology Composition, US Pathology Diagnostic Report, US Pathology Specimen, US Pathology Service Request, and US Pathology Related Practitioner Role.
    *   Definition of 1 value set (US Pathology Provider Types) and 1 code system (US Pathology Section Codes).
    *   Leveraging FHIR R4 and aligning with US Core profiles.
    *   Use of FHIR resource bundles to structure and transmit pathology data.
    *   Support for both RESTful API and FHIR Messaging paradigms.
    *   Conversion of all resources to FSH (FHIR Shorthand) format.
    *   Removal of references to MedMorph.
    *   Deprecation of Message Bundle and Message Header profiles.

4.  **How does this IG relate to broader healthcare standards and regulations?**

    This IG is directly related to the NAACCR Standards for Cancer Registries Volume V, providing a FHIR-based alternative to the HL7 V2 message format defined therein. It aligns with broader interoperability initiatives, such as the ONC's Cures Act Final Rule, which requires certified HIT vendors to implement FHIR-based APIs. It also aligns with the IHE Structured Data Capture (SDC) standard, specifically the IHE SDC eCP on FHIR, for collecting data from electronic Cancer Protocols (eCPs).

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**

    The primary users of this IG are:
    *   Architects and developers of clinical and pathology laboratory health record systems.
    *   Cancer registry systems in the US.
    *   Pathology laboratories.
    *   Hospital systems.
    *   Researchers who rely on cancer pathology data.

    The beneficiaries include:
    *   Clinicians, who will have access to more structured and interoperable pathology data.
    *   Central Cancer Registries (CCRs), which will receive standardized data for public health reporting.
    *   Patients, who may benefit from improved continuity of care and research advancements facilitated by better data sharing.
    *   Researchers, who will gain access to discrete data elements for cancer research.
