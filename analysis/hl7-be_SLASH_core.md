# core: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**
    This IG, "hl7-be_SLASH_core," aims to define a core set of FHIR profiles, code systems, and value sets for use within the Belgian eHealth ecosystem. Its objective is to standardize the representation of fundamental healthcare data elements, such as patients, practitioners, organizations, addresses, and documents. This provides a common language for different systems to interoperate. It's designed to be a foundation for more specific implementation guides.

2.  **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**
    The IG introduces structured FHIR profiles for core resources like `BePatient`, `BePractitioner`, `BeOrganization`, `BeAddress` and `BeDocumentReference`, which previously may have been managed in disparate or unstructured ways. It includes specific code systems (`BeCSCareLocation`, `Cdfedcountry`, `CivilState`, `ContactPerson`, `HCParty`) and value sets (`BeVSCareLocation`, `BeVSCdHcParty`, `BeVSGenderAtBirth`, `BeVSPatientRelationshipType`, `be-civilstate`, `be-contactperson`) to standardize data representation for Belgian context. It also includes specific extensions like `BeExtGenderAtBirth` and `BeExtCodeableReference` to address specific needs. This approach replaces ad-hoc data representations with a standardized, interoperable approach. The use of invariants like `be-inv-CBE`, `be-inv-NIHDI`, and `be-inv-SSIN` adds data quality rules that were not previously defined. The IG explicitly references the Belgian National Register of Persons, establishing a clear context and source of data.

3.  **What are the key features and technical approaches of this IG?**
    The key features of this IG include:
    *   **FHIR Profiles:** It defines profiles for core FHIR resources like `Patient`, `Practitioner`, `Organization`, `Location`, `Consent`, `Group`, `DocumentReference`, `Provenance`, and `Communication`, adapting them for the Belgian context.
    *   **Code Systems and Value Sets:** It introduces custom code systems (`BeCSCareLocation`, `Cdfedcountry`, `CivilState`, `ContactPerson`, `HCParty`) and value sets (`BeVSCareLocation`, `BeVSCdHcParty`, `BeVSGenderAtBirth`, `BeVSPatientRelationshipType`, `be-civilstate`, `be-contactperson`) to standardize coded data elements.
    *   **Extensions:** It defines extensions like `BeExtCodeableConcept`, `BeExtCodeableReference`, `BeExtGenderAtBirth`, `BeExtRecorder`, and `BeExtSimpleNote` to add specific data elements to FHIR resources.
    *   **Invariants:** It defines invariants to enforce data quality for specific identifiers (CBE, NIHDI, SSIN).
    *   **Logical Models:** It provides logical models (`BeModelPatient`, `BeModelPatientDocument`, `BeModelConsent`, `BeModelGroup`) to represent conceptual views of data.
     * **Naming Systems:** It defines naming systems for various identifiers (`be-cbe`, `be-ehp`, `be-insurancenumber`, `be-insurancymembership`, `be-nihdi`, `be-ns-nihdi-organization`, `be-ns-nihdi-professional`, `be-ssin`, `BeNSNihdiNomenclature`).
     * **Examples:** It includes example instances of resources to illustrate their intended use.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    The IG explicitly aligns with HL7 FHIR standards and leverages existing code systems like SNOMED CT and LOINC. The code systems and value sets are specific to the Belgian context, indicating compliance with local regulations and requirements for data representation and exchange. It mentions the Belgian National Register of Persons (Ministry of the Interior) as a source of information, suggesting alignment with national data governance. The inclusion of `m49.htm` codes for jurisdiction and ISO 3166 codes for countries demonstrates adherence to international standards.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users of this IG are:
    *   **Healthcare IT System Developers:** Those building or integrating healthcare systems in Belgium will use these profiles, code systems, and value sets to ensure interoperability.
    *   **Healthcare Providers:** Practitioners and organizations will benefit from standardized data exchange, which will improve care coordination and information access.
    *   **Patients:** While not direct users of the IG itself, patients indirectly benefit from improved data interoperability and more efficient healthcare delivery.
    *   **eHealth Platform:** As the publisher, the eHealth platform will use the IG to guide their standards and infrastructure.
