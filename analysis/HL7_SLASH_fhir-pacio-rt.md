# fhir-pacio-rt: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The PACIO Re-Assessment Timepoints (RT) IG tackles the challenge of representing longitudinal patient data within extended post-acute care (PAC) admissions. These admissions often span months or years, making it difficult to track the evolution of a patient's condition and care over time using a single Encounter resource. The IG introduces a structured approach to subdivide these lengthy encounters into smaller, more manageable time blocks called "re-assessment timepoints."
-   **Key clinical/business problems it solves:** By structuring extended PAC encounters into timepoints, the IG facilitates:
    -   **Improved care coordination:** Clinicians can more easily access and understand relevant patient information for specific periods, supporting better decision-making.
    -   **Enhanced data analysis:** Timepoints enable more granular analysis of patient progress and outcomes over the course of a PAC admission.
    -   **Streamlined auditing and billing:** Payers can more efficiently audit specific billing periods by focusing on relevant timepoints.
    -   **Better patient engagement:** Patients can more easily understand their care journey by viewing information organized into meaningful time blocks.
-   **Intended scope and boundaries:** The IG focuses on structuring PAC encounters into re-assessment timepoints. It leverages existing US Core profiles and extends the Encounter resource to represent these timepoints. The IG is specifically designed for the US Realm and is intended for use in settings like home health and skilled nursing facilities (SNFs). It does not define new clinical data elements but rather provides a framework for organizing existing data.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **ReassessmentTimepointsEncounter:** A profile based on US Core Encounter, representing a single re-assessment timepoint. Key elements include `identifier`, `status`, `class`, `type` (entity defining the timepoint, e.g., payer), `serviceType` (driving assessment, e.g., MDS), `subject` (patient), `period`, `reasonCode`, `location`, `serviceProvider`, and `partOf` (parent encounter).
    -   **BasedOnClinicalImpression extension:** An extension on `Encounter.basedOn` to link a timepoint to the ClinicalImpression resources representing the formal assessments that define its boundaries.
-   **Notable operations and interactions:**
    -   The IG defines several search parameters for retrieving ReassessmentTimepointsEncounter resources, including `part-of` (to find timepoints within a parent encounter), `date` (to filter by timepoint period), `patient`, `_id`, `episode-of-care`, `based-on`, `diagnosis`, `reason-reference`, `service-provider`, and `status`.
-   **Key terminology and value sets:**
    -   **TimepointEntityTypeValueSet:** Codes describing entities that define timepoints (e.g., `payer`, `regulatory-state`, `provider`).
    -   **TimepointServiceTypeValueSet:** Codes for types of assessments driving timepoints (e.g., `oasis`, `mds`).
    -   **TimepointStatusValueSet:** Codes for the status of a timepoint (e.g., `in-progress`, `finished`, `planned`).
    -   **TimepointClassValueSet:** Codes for the classification of a timepoint, extending `ActEncounterCode` (e.g., `SNF`).
-   **Significant patterns and constraints:**
    -   Re-assessment timepoints are represented as Encounter resources that are children of a parent Encounter representing the overall PAC admission.
    -   Timepoints are linked to ClinicalImpression resources, which in turn reference Observation instances representing formal assessments.
    -   The `period` element defines the start and end dates of the timepoint.
    -   The `type` and `serviceType` elements specify the entity and assessment type that define the timepoint.
    -   Must Support requirements are defined for key elements, ensuring consistent implementation.

## Technical Essence

The PACIO Re-Assessment Timepoints IG defines a hierarchical structure for representing longitudinal patient data in post-acute care settings. It extends the US Core Encounter profile to create `ReassessmentTimepointsEncounter` resources, each representing a discrete time block within a broader PAC encounter. These timepoints are linked via the `partOf` element to a parent US Core Encounter representing the entire admission. Each timepoint is further associated, using a custom `BasedOnClinicalImpression` extension on `basedOn`, with one or more `ClinicalImpression` resources that document the formal assessments (e.g., MDS, OASIS) performed at the timepoint's boundaries. These `ClinicalImpression` resources, in turn, reference `Observation` instances containing the assessment results. The IG mandates specific search parameters, including `part-of` and `date` in combination, to efficiently retrieve timepoints within a given encounter and time range. Timepoints are typed using custom value sets for `type` (entity defining the timepoint) and `serviceType` (assessment type), enabling filtering and categorization. This structure allows for granular representation of patient data over time, facilitating analysis, reporting, and care coordination within the context of extended PAC admissions.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   **Creating timepoints:** When a formal assessment is performed, a new ReassessmentTimepointsEncounter is created, linked to the parent Encounter and the ClinicalImpression representing the assessment.
    -   **Retrieving timepoints:** Clients can query for timepoints within a specific Encounter using the `part-of` search parameter, optionally combined with `date` to filter by time period.
    -   **Accessing assessment data:** Clients can follow links from the timepoint to the associated ClinicalImpression and then to the Observation resources containing assessment results.
-   **Important requirements and guardrails:**
    -   Servers SHALL support TLS 1.2 or higher for secure communication.
    -   Servers SHALL implement at least one of the specified authentication/authorization mechanisms (e.g., US Core security requirements, SMART on FHIR).
    -   Servers SHALL be capable of populating all Must Support elements in ReassessmentTimepointsEncounter.
    -   Clients SHALL be capable of processing and displaying Must Support elements.
-   **Notable design choices and patterns:**
    -   The use of a hierarchical Encounter structure to represent timepoints within a parent Encounter.
    -   The use of ClinicalImpression as a linking mechanism between timepoints and formal assessments.
    -   The definition of specific search parameters to facilitate efficient retrieval of timepoints.

## Ecosystem Context

-   **Target systems and users:**
    -   **Systems:** EHRs, PAC provider systems, payer systems, health information exchanges (HIEs), quality reporting agencies.
    -   **Users:** Clinicians, care coordinators, patients, payers, quality improvement professionals, researchers.
-   **Relationship to other standards/IGs:**
    -   Builds upon US Core profiles, particularly US Core Encounter and US Core Patient.
    -   Leverages concepts from other PACIO IGs, such as Functional Status and Cognitive Status.
-   **Relevant jurisdictions or programs:**
    -   US Realm
    -   PACIO Project
-   **Primary use cases and scenarios:**
    -   **Payer audit:** Payers can audit specific billing periods by retrieving relevant timepoints and associated assessment data.
    -   **Discharge to home health care:** Home health agencies can access a patient's SNF stay data, structured into timepoints, to understand their recovery trajectory and plan care accordingly.
    -   **Quality reporting:** Timepoints can be used to track patient progress and outcomes over time for quality reporting purposes.
    -   **Clinical decision support:** Timepoints can provide clinicians with a more granular view of patient data, supporting better-informed decisions.
    -   **Patient engagement:** Patients can access their data organized into meaningful time blocks, improving their understanding of their care journey.
