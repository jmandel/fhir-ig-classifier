# eLTSS: Analysis

## Core Purpose & Scope

The electronic Long-Term Services and Supports (eLTSS) Implementation Guide (IG) addresses the interoperability challenges related to the exchange of patient-centered care plan information among various stakeholders involved in long-term care. It primarily focuses on enabling the creation, sharing, and aggregation of eLTSS care plans, which are consensus-driven, dynamic plans that represent a patient's and care team members' prioritized concerns, goals, and planned interventions. The IG aims to solve key clinical and business problems such as fragmentation of care, lack of care coordination, and the burden of double documentation. The scope of the IG is bounded by the eLTSS data elements defined in the associated Data Element Library (DEL) and is intended to support the exchange of eLTSS information between various systems, including Electronic Health Records (EHRs), case management systems, and Health Information Exchanges (HIEs).

## Technical Foundation

The eLTSS IG is built upon the technical foundation of FHIR R4 and leverages US Core profiles as its base.

**Core Profiles and Extensions:**

-   **CarePlan-eltss:** The central profile, based on US Core CarePlan, defining the structure for representing eLTSS care plans. It includes references to other profiles and extensions to capture essential eLTSS data elements.
-   **Condition-eltss:** Based on US Core Condition, used to represent assessed needs and health concerns.
-   **Goal-eltss:** Based on US Core Goal, used to represent patient-centered goals.
-   **ServiceRequest-eltss:** Based on US Core ServiceRequest, used to represent requested services and supports.
-   **Observation-eltss:** Based on US Core Simple Observation, used to represent strengths, preferences, and other observations.
-   **Questionnaire-eltss:** Based on SDC Questionnaire, used to capture structured data elements related to patient choices and agreements.
-   **QuestionnaireResponse-eltss:** Based on US Core QuestionnaireResponse, used to capture responses to questionnaires.
-   **Practitioner-eltss, PractitionerRole-eltss, Location-eltss, Patient-eltss, RelatedPerson-eltss:** Based on corresponding US Core profiles, used to represent individuals and organizations involved in the care plan.
-   **Claim-eltss:** Based on the FHIR Claim resource, used to represent financial aspects of services.
-   **Contract-eltss:** Based on the FHIR Contract resource, used to represent signatures and agreements.
-   **EpisodeOfCare-eltss:** Based on the FHIR EpisodeOfCare resource, used to represent the care management context.
-   **RiskAssessment-eltss:** Based on the FHIR RiskAssessment resource, used to represent identified risks and mitigation plans.
-   **Extension:resource-pertainsToGoal:** A core extension used to link resources to specific goals.
-   **Extension:eltss-directedBy:** An extension to indicate whether a service is self-directed.
-   **Extension:RiskPlan:** An extension to link a RiskAssessment to a risk management plan document.

**Notable Operations and Interactions:**

-   **$all-eltss-careplan:** A custom operation defined to retrieve all eLTSS data associated with a given CarePlan, reducing the number of queries needed.

**Key Terminology and Value Sets:**

-   **ELTSS\_Condition\_Category\_Codes:** A custom value set for categorizing assessed needs.
-   **ELTSS\_Observation\_Codes\_temporary:** A custom value set for observation codes, including "strength" and "preference".
-   **US Core Value Sets:** Leverages various US Core value sets for clinical concepts, administrative codes, and other standard terminologies.
-   **External Value Sets:** Utilizes external value sets such as SNOMED CT, LOINC, HCPCS, and NUCC.

**Significant Patterns and Constraints:**

-   **Must Support:** Extensively uses Must Support flags to indicate required data elements based on the eLTSS DEL.
-   **Resource Referencing:** Employs resource referencing to link related resources within the CarePlan, such as linking Goals to Conditions, ServiceRequests to Goals, and Observations to CarePlans.
-   **Extension Usage:** Leverages extensions to capture data elements not directly supported by base FHIR or US Core profiles.

## Technical Essence

The eLTSS IG's core functionality revolves around a profiled CarePlan resource that acts as a hub for referencing other resources, each profiled to capture specific eLTSS data elements. The `CarePlan-eltss` profile mandates the inclusion of a `subject` (Patient-eltss), `status`, `intent`, and `category` (assess-plan). It extensively uses the `resource-pertainsToGoal` extension to link `activity.reference` (ServiceRequest-eltss, Task, etc.) and `activity.outcomeReference` to `Goal-eltss` instances, which in turn reference `Condition-eltss` (assessed needs) via `Goal.addresses`. `ServiceRequest-eltss` instances detail services, including `quantityRatio` for frequency (e.g., "2 trips/month") and link to `Claim-eltss` for financial data. `Observation-eltss` captures patient strengths and preferences using custom codes. Signatures are captured in `Contract-eltss`, referenced via `CarePlan.supportingInfo`. The `Task` resource, profiled to align with the Gravity SDOH IG's Patient Task concept, is used to track patient-initiated or informal support activities. The `$all-eltss-careplan` operation on a `CarePlan` instance ID is defined to return a Bundle containing all referenced resources, streamlining data retrieval.

## Implementation Approach

The eLTSS IG is designed to be implemented by systems that create, manage, and exchange eLTSS care plans.

**Critical Workflows and Interactions:**

-   **Care Plan Creation:** Systems will create `CarePlan-eltss` instances, populating them with references to other resources representing assessed needs, goals, services, and other relevant information.
-   **Data Aggregation:** Systems will use the `$all-eltss-careplan` operation to retrieve a comprehensive set of eLTSS data for a given CarePlan.
-   **Data Exchange:** Systems will exchange eLTSS data using FHIR RESTful interactions, including searching, fetching, and updating resources.
-   **Signature Capture:** Systems will capture and represent signatures using the `Contract-eltss` profile.

**Important Requirements and Guardrails:**

-   **Must Support:** Implementers must ensure that all elements marked as Must Support in the profiles are populated and processed correctly.
-   **Terminology Bindings:** Systems must adhere to the specified terminology bindings, including the use of custom eLTSS value sets and external terminologies.
-   **Extension Usage:** Implementers must correctly use and interpret the defined extensions, such as `resource-pertainsToGoal` and `eltss-directedBy`.

**Notable Design Choices and Patterns:**

-   **Resource Referencing:** The extensive use of resource referencing enables a modular and interconnected representation of eLTSS data.
-   **Extension-Based Data Elements:** Data elements not directly supported by base FHIR or US Core are captured using extensions.
-   **Custom Operation:** The `$all-eltss-careplan` operation simplifies data retrieval by providing a single point of access for all relevant eLTSS data.

## Ecosystem Context

**Target Systems and Users:**

-   EHR systems used by providers of long-term services and supports.
-   Case management systems used by state agencies and other organizations involved in coordinating care.
-   HIEs that facilitate the exchange of health information across different systems.
-   Patients and their caregivers who need access to their eLTSS care plans.

**Relationship to Other Standards/IGs:**

-   **US Core:** The eLTSS IG builds upon US Core profiles, extending them to meet eLTSS-specific requirements.
-   **Gravity SDOH IG:** The eLTSS IG aligns with the Gravity SDOH IG's approach to using the Task resource for patient-initiated activities.
-   **Da Vinci:** The eLTSS IG complements the Da Vinci suite of IGs by providing a mechanism for exchanging care plan information that can be linked to financial and administrative data.
-   **MCC eCare Plan IG:** The eLTSS IG aligns with the MCC eCare Plan IG's guidance on using FHIR CarePlans and Goals for multiple chronic conditions.

**Relevant Jurisdictions or Programs:**

-   State Medicaid agencies that administer long-term services and supports programs.
-   Federal agencies such as the Centers for Medicare & Medicaid Services (CMS) and the Administration for Community Living (ACL).

**Primary Use Cases and Scenarios:**

-   Creating and updating eLTSS care plans based on assessments and patient preferences.
-   Sharing eLTSS care plans between providers, payers, and patients.
-   Aggregating eLTSS data from multiple sources to create a comprehensive view of a patient's care.
-   Supporting care coordination and transitions of care.
-   Enabling patient engagement and self-management.
-   Facilitating quality measurement and improvement efforts.
