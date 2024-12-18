# KL-dk: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of standardizing the exchange of health and social care data within Danish municipalities. It focuses on enabling interoperability between various municipal systems and actors involved in home care, nursing, rehabilitation, prevention, and social care.
-   **Key clinical/business problems it solves:** The IG solves problems related to fragmented and inconsistent documentation practices across Danish municipalities. It aims to improve care coordination, reporting, and data analysis by providing a common information model and standardized FHIR profiles for documenting and exchanging care-related information. It also supports adherence to national documentation frameworks like FSIII and FFB.
-   **Intended scope and boundaries:** The scope is limited to the Danish municipal health and social care sector. It covers various care settings, including home care, nursing homes, rehabilitation centers, and social care services. The IG does not extend to hospital or primary care settings outside the municipal domain. It focuses on core data elements and workflows relevant to municipal care provision and does not cover all possible FHIR resources or use cases.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `KLCommonCareSocialCarePlan`, `KLCommonCareSocialCitizensOwnObservation`, `KLCommonCareSocialCompletedIntervention`, `KLCommonCareSocialCondition`, `KLCommonCareSocialEncounter`, `KLCommonCareSocialEvaluation`, `KLCommonCareSocialFocusCondition`, `KLCommonCareSocialFollowUp`, `KLCommonCareSocialGoal`, `KLCommonCareSocialInformationGathering`, `KLCommonCareSocialMatterOfInterest`, `KLCommonCareSocialObservation`, `KLCommonCareSocialPlannedIntervention`, `KLCommonCareSocialServicePerformer`, `KLCommonCareSocialServiceRequest`, `KLCommonCitizen`, `KLCommonOrganization`, `KLCommonPractitioner`.
    -   **Extensions:** `FollowUpEncounter`, `RequesterType`, `MunicipalityCaseNumber`, `ConditionLastAssertedDate`, `SubjectConsentToLiasing`, `ConditionRank`, `BasedOnServiceRequest`, `MatterOfInterestInformer`, `ExtEventHist`.
-   **Notable operations and interactions:** The IG does not define specific operations but implies interactions related to creating, updating, and querying the profiled resources. The interactions support workflows such as service requests, care planning, information gathering, intervention delivery, and follow-up.
-   **Key terminology and value sets:**
    -   `KLConditionCodesFSIII`, `KLConditionCodesFFB`, `KLSeverities`, `KLChangeValueCodes`, `KLInformationCodes`, `KLFollowUpCodes`, `KLInterventions`, `KLEncounterTypes`, `KLServicesTypes`, `KLCarePlanCategoryCodes`, `KLGoalTypeCodes`, `KLEvaluationTypeCodes`, `KLObservationCodes`.
    -   External terminologies: SNOMED CT, LOINC, ICD-10, ICPC-2, UCUM.
-   **Significant patterns and constraints:**
    -   The IG heavily relies on slicing to constrain resource elements and enforce specific coding systems (e.g., FSIII, FFB, SNOMED CT).
    -   Mandatory elements are defined to ensure data completeness and consistency.
    -   Extensions are used to capture municipality-specific data elements and relationships.
    -   Invariants are defined to enforce business rules and data integrity.

## Technical Essence

This IG defines a comprehensive FHIR framework for Danish municipal health and social care, leveraging core FHIR resources like `CarePlan`, `Condition`, `Observation`, `Encounter`, `Procedure`, `Goal`, and `ServiceRequest`, profiled to represent specific municipal concepts. `KLCommonCareSocialCarePlan` orchestrates planned interventions (`KLCommonCareSocialPlannedIntervention`) linked to goals (`KLCommonCareSocialGoal`) and conditions (`KLCommonCareSocialCondition`, `KLCommonCareSocialFocusCondition`). `KLCommonCareSocialServiceRequest` captures requests for services, while `KLCommonCareSocialCompletedIntervention` documents delivered interventions. Information gathering is modeled using `KLCommonCareSocialInformationGathering`, which groups `KLCommonCareSocialMatterOfInterest` (representing FSIII areas/FFB themes) and `KLCommonCareSocialEvaluation`. `KLCommonCareSocialCitizensOwnObservation` captures citizen-reported outcomes. Slicing is extensively used to enforce specific coding systems (FSIII, FFB, SNOMED CT) for conditions, interventions, and observations. Extensions like `FollowUpEncounter`, `MunicipalityCaseNumber`, and `MatterOfInterestInformer` capture municipality-specific data. The IG mandates key elements like `status`, `code`, and `subject` across various resources, ensuring data consistency and supporting core workflows.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Service request handling (from citizens, healthcare providers, or internal).
    -   Care planning, including defining goals and planned interventions.
    -   Information gathering, including documenting observations, conditions, and evaluations.
    -   Intervention delivery and documentation of completed interventions.
    -   Follow-up and reassessment.
-   **Important requirements and guardrails:**
    -   Adherence to the defined profiles and extensions is crucial.
    -   Proper use of the specified coding systems (FSIII, FFB, SNOMED CT) is mandatory.
    -   Implementers must ensure data consistency and completeness as defined by mandatory elements and invariants.
    -   Systems should support the implied interactions of creating, updating, and querying the profiled resources.
-   **Notable design choices and patterns:**
    -   The use of `CarePlan` as a central resource for both overall care plans and individual planned interventions.
    -   The extensive use of slicing to constrain resource elements and enforce specific coding systems.
    -   The use of extensions to capture municipality-specific data elements.
    -   The focus on core FHIR resources to represent key concepts in the municipal care domain.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are those used within Danish municipalities for managing health and social care data, including electronic health records (EHRs), case management systems, and reporting systems. Users include healthcare professionals (nurses, therapists, social workers), administrative staff, and potentially citizens.
-   **Relationship to other standards/IGs:** The IG builds upon the core FHIR specification (R4) and references external terminologies like SNOMED CT and LOINC. It also aligns with Danish national frameworks like FSIII and FFB. It relates to the dk-core IG for foundational profiles like Patient and Organization.
-   **Relevant jurisdictions or programs:** This IG is specifically designed for the Danish municipal health and social care sector.
-   **Primary use cases and scenarios:**
    -   Documenting and sharing care plans for citizens receiving home care or social services.
    -   Recording and tracking citizen conditions, observations, and evaluations.
    -   Managing service requests and referrals.
    -   Documenting interventions delivered by municipal staff.
    -   Reporting data to national registries or for statistical analysis.
    -   Supporting care coordination and communication between different municipal actors.
