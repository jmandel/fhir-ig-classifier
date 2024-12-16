# physical-activity: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to standardize the exchange of information related to physical activity between different types of systems. It focuses on scenarios where patients, care managers, and service providers (like personal trainers or community fitness organizations) need to share data about a patient's physical activity levels, goals, and care plans. The context is healthcare settings and systems that support physical activity interventions. The IG is intended for use by software developers creating systems for care managers, service providers, and patient engagement.

2.  **How does this IG improve upon previous approaches?** This IG standardizes data exchange related to physical activity using FHIR, which was not previously addressed in a unified way. It defines specific profiles for resources like CarePlan, Goal, Observation, ServiceRequest, Task, and DiagnosticReport, along with specific search parameters and interactions. It also introduces specialized profiles for different types of service providers (full and light), care managers, and patient engagement systems, along with structured subscription patterns. This provides a more detailed and targeted approach than existing general-purpose FHIR profiles.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   **Role-based CapabilityStatements:** Defines distinct profiles for different actors in the physical activity ecosystem: care managers, full and light service providers, and patient engagement systems. These profiles specify which resources and interactions they SHALL, SHOULD, or MAY support.
    *   **Specialized Profiles:** Introduces specialized profiles for resources like `PAObservationEVSDaysPerWeek`, `PAObservationEVSMinutesPerDay`, `PAGoal`, `PACarePlan`, `PADiagnosticReport`, and `PATaskForReferralManagement`, all inheriting from US Core profiles where appropriate.
    *   **Subscription Framework:** Utilizes a backport of the FHIR Subscriptions framework to enable real-time notifications of resource changes, especially for tasks.
    *   **Search Parameters and Interactions:** Specifies search parameters and RESTful interactions for each resource type, allowing for targeted data retrieval and management.
    *   **Extensible Vocabulary:** Defines codesystems and valuesets for physical activity measures, interventions, and statuses, using LOINC, SNOMED CT, and custom temporary codes.
    *   **Scenario-Based Approach:** Includes example scenarios that demonstrate how different systems might interact.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG builds upon the HL7 FHIR standard and the US Core Implementation Guide, leveraging their existing profiles and infrastructure.  It uses standard terminologies like LOINC and SNOMED CT. It aims to support patient-centered care and improve data interoperability in healthcare, aligning with broader goals of healthcare data exchange. It also integrates with other IGs that provide support for the SDOH-CC.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users are:
    *   **Software Developers:** Developers creating systems for various roles in physical activity management (care managers, service providers, and patient engagement systems).
    *   **Care Managers:** Care managers who use systems to monitor and coordinate patient physical activity plans.
    *   **Service Providers:** Personal trainers and fitness organizations that provide physical activity services.
    *   **Patients:** Patients and their caregivers who use applications to track their activity and interact with their care plans, goals, and providers.
