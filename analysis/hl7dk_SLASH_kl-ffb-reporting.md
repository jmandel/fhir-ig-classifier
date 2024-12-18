# kl-ffb-reporting: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardized reporting of social care data from Danish municipalities to a centralized gateway. It focuses on enabling consistent data exchange between vendor-specific solutions and the gateway, ensuring uniformity in structure and content.
-   **Key clinical/business problems it solves:** It solves the problem of fragmented and inconsistent social care data across municipalities. By standardizing the reporting format, it facilitates data aggregation, analysis, and use in population-based studies and management information systems. It also aims to align with the Danish core profiles and the shared information model (FKI) for municipal data.
-   **Intended scope and boundaries:** The scope is limited to reporting a subset of social care data as defined by the Danish standard for social care (FFB), focusing on structured information about conditions, care plans, and related entities. It excludes free-text information and does not aim to be fully compliant with the broader shared information model (FKI) but rather a restricted subset for reporting purposes. The reporting is based on the method given by VUM (Voksenudredningsmetoden).

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `KLReportingFFBCitizen`, `KLReportingFFBServiceRequest`, `KLReportingFFBInformationGathering`, `KLReportingFFBCondition`, `KLReportingFFBInterventionGoal`, `KLReportingFFBCarePlan`, `KLReportingFFBFollowUpEncounter`, `KLReportingFFBCareEvaluation`, `KLReportingFFBTargetGroup`, `KLReportingFFBIntervention`, `KLReportingFFBServicePerformer`, `KLReportingFFBFollowUp`, `KLReportingFFBDeliveryReport`.
    -   **Extensions:** `KLReportingFFBFollowUpDateExtension`, `KLReportingFFBMunicipalityCaseNumber`, `ConditionLastAssertedDate`, `ConditionRank`.
-   **Notable operations and interactions:** The primary interaction is the submission of a `KLReportingFFBDeliveryReport` (a Bundle) to the gateway. This bundle contains a snapshot of changed data for a citizen, including all relevant resources.
-   **Key terminology and value sets:**
    -   `KLNeedsAssessmentCodesFFB` (for care evaluation)
    -   `KLConditionCodesFFB` (for condition codes)
    -   `KLSeveritiesFFB` (for condition severity)
    -   `KLChangeValueCodesFFB` (for intervention goal change values)
    -   `KLFollowUpCodesFFB` (for follow-up outcomes)
    -   `KLInterventionsFFB` (for intervention codes)
    -   `KLServiceCodesFFB` (for service performer types)
    -   `KLConditionsAndTargetGroupsFFB` (for target group codes)
    -   `KLGoalTypeCodes`
    -   `KLEncounterTypes`
    -   `KLTargetMeasureCodes`
-   **Significant patterns and constraints:**
    -   The `KLReportingFFBDeliveryReport` must contain a single `KLReportingFFBCitizen` resource.
    -   All referenced resources must be included in the report (bundled references).
    -   Conditions under "Aktivitet og deltagelse" must have a severity; others must not.
    -   Intervention goals must address one primary condition and can address multiple secondary conditions, all under "Aktivitet og deltagelse".
    -   Care plans must reference a follow-up encounter if ordered and not completed.
    -   Care plans must contain a municipality case number.
    -   Interventions must reference a care plan.
    -   Follow-up observations must reference a care plan.
    -   Specific constraints are defined for each resource type, including cardinality, code system usage, and relationships between resources.

## Technical Essence

This IG defines a standardized reporting mechanism for Danish social care data, centered around a `KLReportingFFBDeliveryReport` Bundle. This Bundle aggregates a snapshot of a citizen's social care information, including a mandatory `KLReportingFFBCitizen` profile linked to various resources representing the citizen's case. Key to the report is the `KLReportingFFBInformationGathering` profile, which captures assessments and references `KLReportingFFBCondition` resources. Conditions are coded using `KLConditionCodesFFB`, and those under "Aktivitet og deltagelse" require a severity from `KLSeveritiesFFB`. `KLReportingFFBInterventionGoal` resources link to these conditions, specifying a target severity and change value. `KLReportingFFBCarePlan` resources detail care plans, referencing `KLReportingFFBTargetGroup` (coded from `KLConditionsAndTargetGroupsFFB`), `KLReportingFFBIntervention`, and `KLReportingFFBServicePerformer` resources. `KLReportingFFBCareEvaluation` provides a coded assessment of support needs, while `KLReportingFFBFollowUp` captures follow-up outcomes. The `KLReportingFFBFollowUpEncounter` profile represents scheduled follow-up encounters. All resources within the Bundle are interconnected via references, ensuring a comprehensive and linked dataset for each citizen's social care report. The IG mandates specific coding systems for various elements, ensuring consistency and interoperability.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves source systems generating and submitting `KLReportingFFBDeliveryReport` bundles to the gateway periodically (at least daily). These bundles contain a snapshot of changed data for each citizen. The gateway validates the reports against the defined profiles and returns errors if found.
-   **Important requirements and guardrails:**
    -   Delivery reports must be generated at least daily, covering all changes since the last report.
    -   Multiple reports must be submitted if the previous reporting was more than a day ago, each covering no more than one day.
    -   Resource IDs must be universally unique (e.g., UUIDs).
    -   Resources with the same ID as previously reported are considered updates.
    -   All resources must contain metadata with profile and lastUpdated information.
    -   The gateway validates the structure, cardinality, codings, and references within the report.
-   **Notable design choices and patterns:**
    -   The use of a Bundle resource to encapsulate all relevant information for a citizen.
    -   The requirement to include all referenced resources within the bundle.
    -   The use of specific profiles and extensions to enforce data constraints and relationships.
    -   The reliance on specific code systems for various elements to ensure consistency.

## Ecosystem Context

-   **Target systems and users:** The target systems are vendor-specific solutions used by Danish municipalities for managing social care data. The users are primarily the municipalities and the central gateway that receives and processes the reports. Other potential users include researchers and analysts who use the aggregated data for population-based studies and management information.
-   **Relationship to other standards/IGs:** This IG is related to the Danish core profiles and aims for compliance with the shared information model (FKI) for municipal data, although it defines a restricted subset for reporting purposes. It also references SNOMED CT for some codings.
-   **Relevant jurisdictions or programs:** This IG is specific to Denmark and is relevant to Danish municipalities and the national infrastructure for social care data.
-   **Primary use cases and scenarios:**
    -   Periodic reporting of social care data from municipalities to a central gateway.
    -   Aggregation and analysis of social care data for population-based studies.
    -   Generation of management information for monitoring and improving social care services.
    -   Facilitating data exchange between different systems involved in social care.
