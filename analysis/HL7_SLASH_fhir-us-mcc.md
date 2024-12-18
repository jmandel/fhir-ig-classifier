# fhir-us-mcc: Analysis

## Core Purpose & Scope

The FHIR US Multiple Chronic Conditions (MCC) Implementation Guide (IG) addresses the interoperability challenges associated with managing patients with multiple chronic conditions, particularly in the context of care planning. It aims to solve the clinical and business problems of fragmented, poorly coordinated, and inefficient care for individuals with complex health needs by enabling the standardized representation, exchange, and aggregation of care plan information. The IG's scope is focused on defining FHIR R4 profiles, structures, extensions, transactions, and value sets needed to represent, query for, and exchange care plan information, with an emphasis on coded content to support care planning activities for patients with MCC. The initial version focuses on conditions such as Chronic Kidney Disease, Type 2 diabetes mellitus, common cardiovascular diseases, chronic pain, and Long Covid. The IG does not define consent and subscription in the current version but identifies them as important considerations for future development.

## Technical Foundation

The technical foundation of the MCC IG is built upon US Core profiles, extending and constraining them to meet the specific needs of MCC care planning. Key technical building blocks include:

-   **Core Profiles:** The IG defines 21 foundational profiles that conform to US Core Profiles where available, adding constraints or extensions pertinent to their representation within a dynamic FHIR care plan. These include profiles for CarePlan, Condition, Goal, Observation, Procedure, ServiceRequest, MedicationRequest, and others.
-   **Extensions:** The IG defines several extensions to capture additional information not covered by the base FHIR resources or US Core profiles, such as the `resource-pertainsToGoal` extension to link resources to specific goals.
-   **Interactions:** The IG supports standard FHIR interactions such as create, read, update, and search. It emphasizes the use of RESTful interactions for exchanging care plan information.
-   **Terminology and Value Sets:** The IG leverages the National Library of Medicine's (NLM) Value Set Authority Center (VSAC) for value sets, providing libraries of value sets pertinent to the base profiles for representing chronic conditions, related interventions, goals, and outcomes. Key terminologies include LOINC, SNOMED CT, ICD-10-CM, and CPT.
-   **Significant Patterns and Constraints:** The IG emphasizes the use of resource references to link related resources within a CarePlan, avoiding in-line representation to prevent double documentation. It also defines specific patterns for representing SDOH data, leveraging the Gravity Project's work.

## Technical Essence

The MCC IG extends US Core to enable dynamic care planning for patients with multiple chronic conditions by defining a core MCC CarePlan profile that aggregates references to other constrained profiles like Condition, Goal, Observation, Procedure, and ServiceRequest. This CarePlan acts as a central hub, linking health concerns (Conditions) to patient-specific Goals, which are further supported by Interventions (Procedures, ServiceRequests, MedicationRequests) and tracked through Outcomes (Observations). The IG heavily utilizes resource referencing to connect these elements, avoiding redundant data entry. For instance, a Goal to "Lower high BMI count" would be linked to a Condition representing "Obesity" and referenced by interventions like "Referral to dietitian." Value sets from VSAC, primarily LOINC and SNOMED CT, are used extensively to code conditions, procedures, observations, and goals, facilitating standardized data exchange. The IG also defines extensions like `resource-pertainsToGoal` to explicitly link resources to specific goals, enhancing the semantic richness of the care plan. Implementers would essentially create a network of interconnected FHIR resources, anchored by the MCC CarePlan, using these profiles, extensions, and value sets to represent a comprehensive, dynamic, and interoperable eCare plan.

## Implementation Approach

The IG is meant to be implemented by healthcare technology systems, including EHRs, PHRs, and care coordination platforms, to support the generation, exchange, and updating of electronic care plans. Critical workflows include:

-   **Care Plan Generation:** Aggregating patient data from various sources (EHRs, patient-reported outcomes, etc.) to create a comprehensive MCC CarePlan instance.
-   **Care Team Identification:** Using the MCCCareTeam profile to identify and manage the patient's care team members, including caregivers.
-   **Goal Setting:** Defining patient-centered goals using the MCCGoal profile, linked to health concerns and interventions.
-   **Intervention Planning:** Documenting planned interventions using ServiceRequest and Procedure profiles, linked to specific goals and health concerns.
-   **Outcome Measurement:** Recording observations and assessments using relevant profiles (e.g., MCCObservationSDOHAssessment, MCCClinicalResultObservation) to track progress towards goals.
-   **Care Plan Updates:** Dynamically updating the CarePlan as new information becomes available or patient status changes.

The IG emphasizes the use of resource references to link related resources, avoiding in-line representation to prevent double documentation. It also provides guidance on using the `_include` and `_revinclude` search parameters to retrieve related resources efficiently.

## Ecosystem Context

The MCC IG targets healthcare providers, patients, caregivers, payers, and researchers involved in the care of individuals with multiple chronic conditions. It is particularly relevant to the US healthcare system, building upon US Core and addressing the needs of programs like the Patient-Centered Outcomes Research Trust Fund. The IG is closely related to other standards and IGs, including US Core, the Gravity Project (for SDOH data), and IHE's Dynamic Care Planning (DCP) profile. The primary use cases include:

-   Compiling patient data from multiple sources into a consolidated care plan.
-   Facilitating communication and coordination among care team members.
-   Supporting patient engagement and self-management.
-   Enabling data aggregation for population health management, quality improvement, and research.

The IG is designed to be used in conjunction with other FHIR-based systems and applications, promoting interoperability and data exchange across the healthcare ecosystem.
