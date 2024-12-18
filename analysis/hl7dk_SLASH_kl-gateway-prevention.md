# kl-gateway-prevention: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the exchange of data related to disease prevention and health promotion activities (§119) performed by Danish municipalities from their local systems to the KL Gateway. It focuses on enabling consistent reporting of citizen demographics, diagnoses, interventions, encounters, and care plans.
-   **Key clinical/business problems it solves:** The IG solves the problem of inconsistent and non-standardized reporting of prevention and health promotion data from municipalities to a central authority. This enables better monitoring, evaluation, and planning of public health initiatives at a national level. It also facilitates data-driven insights into the effectiveness of different interventions and the identification of best practices.
-   **Intended scope and boundaries:** The IG's scope is limited to the reporting of §119 prevention and health promotion data from Danish municipalities to the KL Gateway. It defines the structure and content of the data to be reported, but it does not cover the internal processes of the municipalities or the functionality of the KL Gateway itself. The IG is specifically designed for the Danish healthcare context and may not be directly applicable to other jurisdictions.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `KLGateway119Citizen`: Based on `dk-core-patient`, it captures citizen demographics, including CPR number and managing organization (SOR code).
    -   `KLGateway119Organization`: Based on `dk-core-organization`, it represents organizations involved in the care process, identified by SOR or FK-org codes.
    -   `KLGateway119ServiceRequest`: Represents a referral or request for §119 services, including the requesting organization, intervention code, and reason (FocusCondition).
    -   `KLGateway119FocusCondition`: Captures diagnosis codes (SKS or ICPC2) from referrals, along with clinical and verification status.
    -   `KLGateway119Condition`: Represents FSIII conditions relevant to §119 services, including clinical status, verification status, and a category indicating whether the condition is in focus.
    -   `KLGateway119PlannedIntervention`: Based on `CarePlan`, it represents planned interventions using FSIII codes, delivery type, start/stop times, and references to the citizen, ServiceRequest, and delivering organization.
    -   `KLGateway119CarePlan`: Based on `CarePlan`, it represents care pathways with a category (e.g., 'Intervention efter §119'), start/stop times, status, and references to the citizen and delivering organization.
    -   `KLGateway119Encounter`: Represents citizen encounters with health promotion staff, including encounter class, start/end times, and references to the citizen and CarePlan/PlannedIntervention.
    -   `KLGateway119DeliveryReport`: Based on `Bundle`, it encapsulates a collection of resources for a single citizen, including the citizen resource and related content.
    -   `BasedOnCarePlanExtension`: Used in `Encounter` to link to the relevant `CarePlan` or `PlannedIntervention`.
    -   `BasedOnServiceRequestExtension`: Used in `PlannedIntervention` to link to the initiating `ServiceRequest`.
    -   `DeliveryType`: Used in `PlannedIntervention` to specify whether the intervention is group-based or individual.
-   **Notable operations and interactions:** The IG primarily focuses on a push-based reporting model, where municipalities send `KLGateway119DeliveryReport` bundles to the KL Gateway.
-   **Key terminology and value sets:**
    -   `CancellationTypes`: Defines reasons for canceling a CarePlan.
    -   `ServiceTypes119`: Specifies the allowed service types for §119.
    -   `KLInterventionCodes119`: Lists the allowed FSIII intervention codes.
    -   `KLConditionCodes119`: Lists the allowed FSIII condition codes.
    -   `CarePlanCategories119`: Defines categories for §119 CarePlans.
    -   `DeliveryTypes119`: Specifies delivery context types (group or individual).
    -   `EncounterClassCodes`: Defines codes for the mode of delivery of an encounter.
-   **Significant patterns and constraints:**
    -   The IG enforces strict cardinality constraints on many elements, ensuring data completeness and consistency.
    -   It uses specific code systems (FSIII, SOR, FK-org) relevant to the Danish healthcare context.
    -   Invariants are defined to enforce business rules, such as requiring a status reason when a CarePlan is canceled.
    -   The `KLGateway119DeliveryReport` bundle must contain exactly one `KLGateway119Citizen` resource and can contain multiple instances of other profiles.

## Technical Essence

This IG defines a push-based reporting mechanism for Danish municipalities to submit §119 health promotion data to a central gateway. Municipalities construct `KLGateway119DeliveryReport` bundles, each containing a single `KLGateway119Citizen` identified by a CPR number and managing organization's SOR code. Each bundle also includes a set of resources representing the citizen's current state: `KLGateway119Organization` instances (identified by SOR or FK-org codes) for involved entities; `KLGateway119ServiceRequest` instances detailing referrals with requesting organization, intervention code ('Sundhedsfremme og forebyggelse'), and optional `KLGateway119FocusCondition` instances for diagnoses (SKS or ICPC2); `KLGateway119Condition` instances for active FSIII conditions with clinical/verification status and a problem-list-item category; `KLGateway119PlannedIntervention` instances for planned FSIII interventions, linked to `KLGateway119CarePlan` instances (if applicable) and referencing the citizen and delivering organization; and `KLGateway119Encounter` instances for citizen interactions, linked to `CarePlan`/`PlannedIntervention` via the `BasedOnCarePlanExtension`. `CarePlan` and `PlannedIntervention` instances utilize the `period` element for authorization and planned/actual end times, `status` and `intent` elements as per FHIR specifications, and `activity.detail.status` for activity-level status. `PlannedIntervention` instances must include a `DeliveryType` extension indicating group or individual delivery.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  Municipalities receive referrals/requests for §119 services, potentially via MedCom messages.
    2.  Municipalities document citizen demographics, diagnoses, interventions, encounters, and care plans in their local systems.
    3.  Municipalities generate `KLGateway119DeliveryReport` bundles containing the relevant data for each citizen.
    4.  Municipalities send the bundles to the KL Gateway at regular intervals.
-   **Important requirements and guardrails:**
    -   Strict adherence to the defined profiles and their constraints is crucial.
    -   Valid CPR numbers, SOR codes, and FK-org codes must be used.
    -   FSIII codes must be used correctly for interventions and conditions.
    -   The `KLGateway119DeliveryReport` bundle must be constructed according to the specified structure.
-   **Notable design choices and patterns:**
    -   The use of a push-based reporting model simplifies the interaction for municipalities.
    -   The reliance on existing Danish code systems (FSIII, SOR) ensures alignment with national standards.
    -   The inclusion of both `CarePlan` and `PlannedIntervention` profiles allows for flexible representation of care pathways and individual interventions.

## Ecosystem Context

-   **Target systems and users:** The target systems are the local systems used by Danish municipalities for managing health promotion and disease prevention data and the central KL Gateway. The primary users are healthcare professionals in municipalities and administrators/analysts at the national level.
-   **Relationship to other standards/IGs:** The IG builds upon the HL7 FHIR standard and leverages the Danish core profiles (`dk-core`). It also aligns with the work on a shared information model (FKI) for Danish municipalities.
-   **Relevant jurisdictions or programs:** This IG is specifically designed for the Danish healthcare system and the §119 program for health promotion and disease prevention.
-   **Primary use cases and scenarios:**
    -   Reporting of §119 activities to the KL Gateway for national monitoring and evaluation.
    -   Tracking the progress of individual citizens through care pathways.
    -   Analyzing the effectiveness of different interventions and identifying best practices.
    -   Supporting data-driven decision-making in public health planning.
