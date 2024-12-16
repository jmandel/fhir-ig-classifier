# kl-ffb-reporting: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to standardize the delivery of social care data from vendor-specific systems to a common gateway within the Danish municipality context. It focuses on a subset of the Danish standard for social care (FFB), specifically structured information about conditions and care plans, omitting free text. The objective is to enable consistent reporting of citizen data for social care, aligning with the Danish core profiles and the shared information model (FKI), using the VUM (Voksenudredningsmetoden) method.

2.  **How does this IG improve upon previous approaches?**
    This IG improves upon previous approaches by focusing on structured data, omitting free text, which facilitates machine-readable reporting. It enforces specific validations on the data, ensuring consistency and accuracy. It defines profiles for specific resources (e.g., Citizen, Condition, CarePlan) to ensure a standardized way of reporting social data, and it also introduces the concept of delivery reports, which are bundles of resources containing a snapshot of the current information for each changed citizen.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   **Profile-based approach:** Defines profiles for FHIR resources like Citizen, ServiceRequest, Condition, CarePlan, etc., to enforce specific data structures and constraints.
    *   **Delivery Reports:** Uses Bundle resources to package data for a specific citizen, including all related resources that have changed.
    *   **Structured Data Focus:** Emphasizes structured data by excluding free text.
    *   **Code Systems and Value Sets:** Utilizes specific code systems and value sets (e.g., FFB codes, SNOMED CT) for consistent data representation.
    *   **Validation:** Enforces validation rules to ensure data quality and consistency, including cardinality, code usage, and resource relationships.
    *   **Use of Extensions:** Employs extensions to add specific data elements like municipality case numbers and follow-up dates.
    *   **Snapshot Reporting:**  Requires a snapshot of all relevant data for the day, not just the current state, including changes like start and end dates of interventions.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG aims to align with the Danish core profiles and the current work on the shared information model (FKI) for data in the Danish municipalities. It utilizes FHIR R4, a global healthcare standard, and incorporates SNOMED CT, which is a global clinical terminology. While aiming for compliance with Danish standards, it is a subset of the full FFB model with restrictions.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users of this IG are:
    *   **Vendor-specific solution providers:** Those who develop and maintain systems for social care data, who need to implement reporting capabilities according to the defined profiles.
    *   **Municipalities:** The primary beneficiaries, as they receive standardized, structured data enabling better analysis and reporting of social care services.
    *   **Social care practitioners:** who document the data, as this document defines a common way of documenting and reporting data.
    *   **The citizens (patients):** Indirectly benefit from improved data quality and more efficient social care planning and delivery.
