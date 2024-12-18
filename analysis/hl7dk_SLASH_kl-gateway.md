# kl-gateway: Analysis

## Core Purpose & Scope

**Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of standardized reporting of health and eldercare data from Danish municipalities to the KL Gateway. It focuses on enabling consistent data exchange related to citizen conditions, goals, planned and completed interventions, and follow-up observations, using a subset of FSIII and FKI data.

**Key clinical/business problems it solves:** The IG solves the problem of inconsistent and non-interoperable data reporting from municipalities, enabling efficient data aggregation and analysis at a national level. This supports improved care coordination, quality monitoring, and resource allocation in the Danish healthcare system.

**Intended scope and boundaries:** The scope is limited to the reporting of a specific subset of FSIII and FKI data to the KL Gateway. It does not cover all aspects of FSIII or FKI, nor does it address data exchange beyond the specific reporting use case. The IG explicitly excludes training and rehabilitation data. It is designed as a transitional version, allowing for a smooth implementation of the FSIII simplification, with support for both old and new FSIII terminology during a transition period.

## Technical Foundation

**Core profiles and extensions:**
-   **KLGatewayCareDeliveryReport:** A Bundle profile serving as the primary reporting structure, containing resources related to a single citizen.
-   **KLGatewayCareCitizen:** Based on `dk-core-patient`, used to identify the citizen with CPR-number and managing organization (SOR code). Includes `deceasedBoolean` to indicate if the citizen is dead.
-   **KLGatewayCareCondition:** Based on `Condition`, represents FSIII "tilstande" (conditions) with severity (FSIII "funktionsniveau") for home care conditions. Uses `category` to indicate if a condition is in focus.
-   **KLGatewayCareGoal:** Based on `Goal`, describes FSIII "forventet tilstand" (expected condition) linked to a home care condition.
-   **KLGatewayCarePlannedIntervention:** Based on `CarePlan`, represents planned interventions (FSIII "indsatser") with start/end times and optional links to conditions.
-   **KLGatewayCareCompletedIntervention:** Based on `Procedure`, represents completed interventions, including acute or unplanned activities.
-   **KLGatewayCareGeneralEncounter:** Based on `Encounter`, used for reporting planned follow-up dates for Conditions and delivered PlannedInterventions.
-   **KLGatewayCareFollowUpObservation:** Based on `Observation`, documents the outcome of a follow-up encounter (FSIII "resultat af opfølgning").
-   **KLGatewayCareCitizensOwnObservation:** Based on `Observation`, captures the citizen's own assessment of performance or importance of a condition.
-   **KLGatewayCareMatterOfInterestObservation:** Based on `Observation`, captures information about matters of interest (FSIII "områder").
-   **KLGatewayCareFollowUpEncounterExtension:** Extension to link a `Condition` or `CarePlan` to a follow-up `Encounter`. Deprecated after the transition period.
-   **DeliveryType:** Extension to specify the context of how a treatment-activity is delivered.
-   **KLGatewayCareFindingContextAtRiskExtension:** Extension to represent the context at risk for a given matter of interest.

**Notable operations and interactions:** The primary interaction is the submission of a `KLGatewayCareDeliveryReport` bundle to the KL Gateway, which is validated upon receipt. The gateway supports search, update, vread, and read operations on the Bundle resource.

**Key terminology and value sets:**
-   FSIII (urn:oid:1.2.208.176.2.21) for conditions, interventions, goal types, and matter of interest values.
-   KL Common Codes for goal categories, target measures, encounter types, and delivery types.
-   LocallyDefinedInterventions code system for locally defined level 3 interventions.
-   Value sets for severities, citizen observation codes/results, follow-up codes, and matter of interest values.

**Significant patterns and constraints:**
-   The `KLGatewayCareDeliveryReport` must contain exactly one `KLGatewayCareCitizen`.
-   Home care conditions require severity, while nursing conditions do not.
-   Goals must address home care conditions.
-   Planned interventions must have a start date and may reference conditions.
-   Completed interventions must have a start date and may reference conditions and an encounter.
-   Follow-up observations must reference at least one condition or planned intervention (only condition after transition).
-   Encounters must have a start date and type.
-   Validation rules are enforced for data types, code systems, and resource relationships.
-   Warning (to be changed to error) if data about deceased citizen is reported.

## Technical Essence

This IG defines a streamlined reporting mechanism for Danish municipal health and eldercare data to a central gateway, leveraging FHIR Bundle as a container for a curated set of resources. Each report focuses on a single citizen, identified by their CPR number and the managing organization's SOR code, using the `KLGatewayCareCitizen` profile. Care provision is captured through `KLGatewayCareCondition`, which mandates FSIII condition codes and, for home care, severity levels. `KLGatewayCareGoal` links expected outcomes to these conditions. Planned care activities are represented by `KLGatewayCarePlannedIntervention`, detailing FSIII intervention codes, start/end times, and optional references to relevant conditions. `KLGatewayCareCompletedIntervention` captures ad-hoc or unplanned care events. `KLGatewayCareGeneralEncounter` is used for both planned follow-up dates, referencing conditions, and for reporting the delivery of planned interventions, referencing the interventions. `KLGatewayCareFollowUpObservation` documents the outcome of follow-ups, referencing conditions or planned interventions. The IG enforces referential integrity within the bundle, ensuring that referenced resources are present and conform to the defined profiles. The entire reporting process is driven by periodic (at least daily) submission of `KLGatewayCareDeliveryReport` bundles to the gateway, which performs immediate validation against the IG's constraints.

## Implementation Approach

**Critical workflows and interactions:** The primary workflow involves the periodic generation and submission of `KLGatewayCareDeliveryReport` bundles to the KL Gateway. These bundles contain a snapshot of the current information for each changed citizen, including all registrations that have changed since the previous report.

**Important requirements and guardrails:**
-   Source systems must generate reports at least daily.
-   Reports must conform to the defined profiles and constraints.
-   Resource IDs must be universally unique.
-   All referenced resources must be included in the report.
-   The gateway validates reports upon receipt and returns errors if found.
-   Must support markers are used according to the FHIR specification.

**Notable design choices and patterns:**
-   Use of a Bundle to encapsulate all information related to a single citizen.
-   Versioning of resources to track changes over time.
-   Use of extensions to capture specific data elements not covered by base FHIR resources.
-   Emphasis on structured data using code systems and value sets.
-   Clear separation between planned and completed interventions.
-   Use of `GeneralEncounter` for both follow-up and delivery reporting.

## Ecosystem Context

**Target systems and users:** The primary target systems are the record systems used by Danish municipalities to manage health and eldercare data. The users are primarily care practitioners and administrators within these municipalities. The KL Gateway acts as the central recipient of the reported data.

**Relationship to other standards/IGs:** The IG builds upon the Danish core profiles (`hl7.fhir.dk.core`) and aligns with the shared information model (FKI) for data in Danish municipalities. It utilizes FSIII as the primary terminology for conditions, interventions, and goals.

**Relevant jurisdictions or programs:** The IG is specifically designed for the Danish healthcare system and is relevant to all Danish municipalities.

**Primary use cases and scenarios:**
-   Reporting of citizen conditions, goals, and interventions from municipalities to the KL Gateway.
-   Monitoring of care delivery and outcomes at a national level.
-   Supporting quality improvement initiatives and resource allocation decisions.
-   Facilitating data exchange between municipalities and other stakeholders.
-   Error reporting for data reported to KL Gateway.
