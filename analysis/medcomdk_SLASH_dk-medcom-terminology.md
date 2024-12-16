# dk-medcom-terminology: Analysis

1. **What is this IG trying to achieve, in what context, and for whom?**
   This IG aims to provide a centralized, accessible, and version-controlled repository of FHIR terminologies (CodeSystems, ValueSets, and ConceptMaps) used in MedCom's healthcare messaging standards within the Danish healthcare sector. It enables stakeholders to view these terminologies online and download them in various formats for use in their systems. The goal is to ensure consistent and unambiguous data exchange by providing a clear understanding of the codes used in MedCom's standards.

2. **How does this IG improve upon previous approaches?**
   Previously, CodeSystems, ValueSets, and ConceptMaps were included within the respective MedCom IGs (e.g., CareCommunication, HospitalNotification). This IG improves upon that by storing them separately on a dedicated server. This allows for independent updates and versioning of terminologies without affecting the version of the entire IG, and it maintains historical versions.

3. **What are the key features and technical approaches of this IG?**
   Key features include:
    - **Centralized Terminology Repository:** It consolidates terminologies used across different MedCom standards.
    - **Version Control:** It maintains historical versions of terminologies, allowing for traceability and stability.
    - **Online Access:** Terminologies are accessible online for viewing.
    - **Downloadable Formats:** Terminologies can be downloaded in different formats (XML, JSON, npm package).
    - **Explicit Definitions:** ValueSets are defined either intentionally (including all codes from a CodeSystem) or extensionally (explicitly listing codes).
    - **Concept Mapping:** Includes mappings between different code systems, such as mapping FHIR message names to SOREDI message names.
    - **CodeSystem Definitions:** Provides definitions of the codes used, which are often based on external code systems or defined by MedCom for specific use cases.

4. **How does this IG relate to broader healthcare standards and regulations?**
   This IG uses FHIR (Fast Healthcare Interoperability Resources) as a foundation, which is a widely adopted standard for healthcare data exchange. It also incorporates external code systems like SNOMED CT ($sct) and NPU ($NPU). It also refers to the Danish "autorisationsregistret" and "SKS Administrativt-Personaleklassifikation" for practitioner roles. The IG aligns with the broader goal of interoperability and standardized data exchange within the healthcare domain.

5. **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are vendors of healthcare IT systems, and developers implementing MedCom's standards within the Danish healthcare sector. This includes those developing systems for care communication, hospital notification, and acknowledgement messages. By ensuring consistent terminologies, the IG indirectly benefits patients by facilitating smoother and more reliable information exchange between healthcare providers. Patients are not direct users of this IG but are beneficiaries of the improved data exchange it enables.
