# kl-gateway-rehab: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**
    This IG aims to standardize the reporting of rehabilitation data from Danish municipalities to the KL Gateway, specifically focusing on interventions related to §140 of the Danish Health Act. The context is the documentation made by physiotherapists in Danish municipalities, and the goal is to create a structured way to report this data. The objective is to enable a consistent and interoperable way to share information about rehabilitation processes, interventions, and patient status for reporting purposes.

2.  **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**
    The IG provides specific profiles and constraints on FHIR resources, such as `CarePlan`, `Condition`, `Encounter`, `ServiceRequest`, and `Patient` (as `klgateway-140-citizen`) to standardize the data being reported. It also includes specific ValueSets and CodeSystems to ensure consistent use of codes, especially for interventions and conditions. The profiles are tailored specifically for the KL Gateway, and is documented to align with the Danish core profiles and the shared information model (FKI) for municipalities, which suggests an improvement over less structured or ad-hoc approaches. The use of invariants also ensures data integrity.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   **Profiles:** Defines specific profiles for FHIR resources (`CarePlan`, `Condition`, `Encounter`, `Organization`, `Patient`, `ServiceRequest`, `Bundle`) with constraints on cardinality, data types, and value sets.
    *   **ValueSets and CodeSystems:** Includes custom ValueSets and CodeSystems to control the vocabulary used for specific data elements, such as intervention types, status reasons, and delivery types.
    *   **Extensions:** Defines custom extensions like `BasedOnServiceRequestExtension`, `BasedOnCarePlanExtension`, `DeliveryType`, and `PreconditionDate` to add specific context and information not available in standard FHIR resources.
    *   **Invariants:** Uses invariants to enforce business rules and data integrity, such as requiring a status reason when an intervention is cancelled.
    *   **Bundles:** Employs `Bundle` resources (`KLGateway140DeliveryReport`, `KLGateway140IncrementalDelivery`) to group related resources for reporting.
    *   **Danish Descriptions:** Adds Danish language short descriptions for fields to make the profiles more easily understood by Danish users.
    *   **Examples:** Provides detailed examples of each profile populated with data to show how the profiles should be used.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    The IG is based on FHIR, which is a widely accepted standard for healthcare data exchange. It also aims for compliance with Danish core profiles, and the shared information model (FKI), indicating alignment with national standards. The specific use case is the reporting of data according to §140 in the Danish Health Act.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are:
    *   **Physiotherapists and other healthcare professionals** in Danish municipalities, who are responsible for documenting and reporting rehabilitation data.
    *   **The KL Gateway system**, which receives and processes the reported data.
    *   **Administrators and analysts** who use the data for reporting and performance evaluation.
    *   **Patients** indirectly benefit through improved data quality and efficiency in the delivery of rehabilitation services, as well as better monitoring of their progress.
