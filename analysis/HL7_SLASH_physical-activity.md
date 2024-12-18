# physical-activity: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the lack of standardization in representing and exchanging patient physical activity data, including measures, goals, care plans, orders, and interventions. It tackles the challenge of integrating data from diverse sources, such as patient-reported outcomes, wearable devices, and electronic health records (EHRs).
-   **Key clinical/business problems it solves:** The IG aims to improve patient care by enabling better tracking and management of physical activity levels. It facilitates communication and coordination among healthcare providers, patients, and non-traditional service providers (e.g., personal trainers, fitness centers). It also supports the evaluation of interventions and the potential for reimbursement of non-traditional services.
-   **Intended scope and boundaries:** The IG focuses on standardizing the exchange of physical activity-related information. It covers measures for recording activity levels, assertions of physical activity, goals and care plans, orders for interventions, and processes for evaluating intervention success. It does not define specific clinical guidelines or protocols for physical activity interventions. It is bounded by the US Realm.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `PAObservationEVSDaysPerWeek`, `PAObservationEVSMinutesPerDay`, `PAObservationEVSMinutesPerWeek`, `PAObservationStrengthDaysPerWeek`, `PAObservationActivityMeasure`, `PAObservationActivityGroup`, `PAObservationTimeMeasure`, `PACarePlan`, `PAGoal`, `PAConditionLowPA`, `PAServiceRequest`, `PADiagnosticReport`, `PATaskForReferralManagement`, `SDOHCCTaskForPatient`, `BackportSubscription`.
    -   **Extensions:** `$pertainsToGoal`, `$observationFocus`.
-   **Notable operations and interactions:** The IG supports RESTful interactions, including `create`, `update`, `search-type`, and `history-instance`. It leverages the `$search` operation extensively for retrieving resources based on various criteria. It also utilizes the Subscription resource for notifications.
-   **Key terminology and value sets:** The IG uses LOINC for coding physical activity measures and ICD-10-CM for the "Lack of physical exercise" condition. It defines custom value sets for physical activity-related categories, goal measurements, and temporary codes.
-   **Significant patterns and constraints:** The IG heavily relies on the Observation resource for capturing physical activity data, using specific profiles for different types of measures. It leverages the CarePlan and Goal resources for planning and tracking progress. The ServiceRequest and Task resources are used for managing referrals and orders. The IG defines specific constraints on resource elements, such as cardinality, data types, and value sets.

## Technical Essence

This IG defines a comprehensive framework for representing and exchanging physical activity data using FHIR R4. It leverages US Core and SDOH Clinical Care profiles as a foundation, extending them with specialized profiles for physical activity observations, including vital signs (e.g., `PAObservationEVSDaysPerWeek`) and activity-specific measures (e.g., `PAObservationActivityMeasure`).  A `PAObservationActivityGroup` profile allows grouping related activity measures.  `PACarePlan` and `PAGoal` profiles, aligned with US Core, manage physical activity plans and goals, with `PAGoal` referencing specific measures via the `target.measure` element.  `PAServiceRequest` supports referrals and orders for interventions, with extensions to link to relevant goals (`pertainsToGoal`) and specify the observation focus (`observationFocus`).  `PATaskForReferralManagement` and `SDOHCCTaskForPatient` profiles manage referral fulfillment and patient tasks, respectively.  `PADiagnosticReport` conveys intervention summaries.  The IG mandates the use of specific LOINC codes for physical activity measures and defines custom value sets for categories and temporary codes.  Subscriptions, based on the R4 Backport, enable notifications on Task updates.  Systems are expected to support RESTful interactions, including creating, updating, and searching for these resources, with specific search parameters defined for each profile.  The IG emphasizes patient-centered care by allowing patients and caregivers to contribute to goals and care plans.

## Implementation Approach

-   **Critical workflows and interactions:** The IG supports workflows for assessing physical activity levels, creating and updating care plans and goals, ordering interventions, fulfilling referrals, and evaluating intervention success. Key interactions include creating and updating Observations, CarePlans, Goals, ServiceRequests, and Tasks, as well as searching for these resources based on various criteria.
-   **Important requirements and guardrails:** Systems must support the defined profiles and adhere to the specified constraints. They should support the required search parameters and handle the defined value sets. The IG emphasizes the importance of supporting patient-centered care and enabling patient engagement.
-   **Notable design choices and patterns:** The use of specific Observation profiles for different types of physical activity measures allows for granular data capture. The reliance on US Core and SDOH Clinical Care profiles ensures alignment with existing standards. The use of Subscriptions enables real-time monitoring of task updates.

## Ecosystem Context

-   **Target systems and users:** The IG targets EHR systems, patient engagement systems (e.g., mobile apps), and systems used by service providers (e.g., personal trainers, fitness centers). Users include clinicians, patients, caregivers, and service providers.
-   **Relationship to other standards/IGs:** The IG builds upon US Core, SDOH Clinical Care, SDC, and Subscriptions Backport R4 IGs. It aligns with USCDI and leverages standard terminologies like LOINC and ICD-10-CM.
-   **Relevant jurisdictions or programs:** The IG is designed for the US realm and is relevant to programs focused on improving population health through physical activity promotion.
-   **Primary use cases and scenarios:** The IG supports five primary scenarios: provider-patient exercise prescription, post-rehab referral, exercise program referral, personal trainer interaction, and pediatric diabetic management. These scenarios demonstrate the use of the IG's profiles and interactions in real-world contexts.
