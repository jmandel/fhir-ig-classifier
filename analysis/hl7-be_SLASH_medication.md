# medication: Analysis

1. **What is this IG trying to achieve, in what context, and for whom?**
   This IG aims to standardize the exchange of medication information in Belgium, specifically focusing on medication dispenses and medication records. It provides logical models, profiles, and terminology for representing and exchanging this data between healthcare providers and systems. The objective is to enable a comprehensive view of a patient's medication history and current treatment, supporting use cases such as registering dispenses, consulting medication records, and compiling medication information from various sources.

2. **How does this IG improve upon previous approaches?**
   This IG introduces structured data models and profiles for medication dispense and medication record information. It establishes a common way to represent medication data, using FHIR resources. It also defines specific terminologies (like CNK codes and medication types) and provides a way to link dispenses to prescriptions. The logical models and profiles provide a structured approach for data capture and exchange, which was not present in a unified way. The use of FHIR standards also allows for interoperability with other FHIR-based systems.

3. **What are the key features and technical approaches of this IG?**
   Key features include:
    *   **Logical Models:** Defines logical models for `BeMedicationDispense` and `BeMedicationLine`, outlining the data elements and their relationships for medication dispensing and medication records respectively.
    *   **FHIR Profiles:** Provides FHIR profiles (`BeMedicationDispense`, `BEMedicationLine`) that constrain and extend the base FHIR resources, tailoring them to the Belgian context.
    *   **Terminology:** Defines value sets and code systems (`BEMLMedicationTypeVS`, `MedicationExposureCategoryVS`, `MedicationLineOrigintypeVS`) for controlled vocabularies related to medication types, exposure categories, and origins.
    *   **Naming Systems:** Defines naming systems for CNK codes, prescription IDs, and product package types (`be-ns-cnk-codes`, `be-ns-prescription-ids`, `be-ns-product-package-type`).
    *   **Examples:** Includes example instances for `MedicationDispense` to illustrate how the profiles should be used.
    *   **Use Cases:** Describes several use cases related to dispense and medication record processes.
    *   **KMEHR Mapping:** Includes a logical model for KMEHR Medication Schema, for comparison and mapping purposes.
    *   **Extensions:** Uses extensions to add specific information such as exposure category, dispense request needed, adherence, and translation.

4. **How does this IG relate to broader healthcare standards and regulations?**
   This IG builds upon the HL7 FHIR standard, using its core resources and extension mechanisms. It references the SNOMED CT terminology and uses ISO country codes. It also aligns with the Belgian eHealth platform's standards. It uses the concept of a Session GUID (SGUID) and a Dispense GUID (DGUID) which are specific to the Belgian context. It also leverages existing coding systems from the eHealth platform, such as NIHDI numbers for healthcare providers.

5. **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
   The primary users and beneficiaries include:
    *   **Pharmacists:** To register medication dispenses and access patient medication records.
    *   **Physicians (GPs):** To access and manage patient medication records and prescriptions.
    *   **Hospitals:** To manage medication dispensing and patient medication records within the hospital setting.
    *   **Healthcare IT vendors:** To implement systems that conform to this IG for exchanging medication information.
    *   **Patients:** Indirectly benefit from the improved coordination of care and the availability of an accurate medication overview.
