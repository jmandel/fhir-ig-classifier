# Vulcan-schedule-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG tackles the challenge of representing and exchanging clinical study Schedule of Activities (SoA) data in a standardized, interoperable manner using FHIR. It focuses on enabling the seamless flow of SoA information between clinical research systems and electronic health record (EHR) systems.
-   **Key clinical/business problems it solves:** The IG aims to streamline the setup and execution of clinical trials by providing a common model for SoA. This reduces site burden, improves protocol compliance, automates the creation of EDC specifications and SDTM datasets, and facilitates study scheduling and procedure tracking. It also supports retrospective data analysis for real-world evidence generation.
-   **Intended scope and boundaries:** The IG's scope is primarily focused on the SoA component of clinical trial protocols. It covers prospective and retrospective study types, including randomized clinical trials and observational studies. The current version prioritizes a minimal viable solution, with future plans to address more complex scenarios like adaptive trials, protocol deviations, and enhanced SoA headers. It leverages the FHIR workflow patterns for defining, requesting, and manifesting activities.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `ResearchStudySoa`: Profiles the `ResearchStudy` resource to represent a study with SoA scheduling information.
    -   `StudyProtocolSoa`: Profiles `PlanDefinition` to represent the entire set of visits and activities for a study protocol.
    -   `StudyVisitSoa`: Abstract profile for `PlanDefinition` to represent a study visit.
    -   `PlannedStudyVisitSoa`: Profiles `StudyVisitSoa` for planned visits.
    -   `StudyActivitySoa`: Profiles `ActivityDefinition` to represent a scheduled activity.
    -   `AcceptableOffsetRangeSoa`: Extension to add an acceptable offset range to `PlanDefinition.action.relatedAction`, enabling flexible scheduling.
-   **Notable operations and interactions:** The IG does not define specific operations but relies on standard FHIR interactions for resource creation, retrieval, and updates. The workflow involves using `PlanDefinition` and `ActivityDefinition` to define the SoA, and resources like `CarePlan`, `ServiceRequest`, `Encounter`, `Procedure`, and `Observation` to track execution.
-   **Key terminology and value sets:** The IG utilizes standard FHIR value sets for concepts like research study phase, primary purpose type, and organization type. It also references external terminologies like SNOMED CT, NCIt, MeSH, and PubChem for coding clinical concepts.
-   **Significant patterns and constraints:** The IG employs a hierarchical structure using `PlanDefinition` to represent the study protocol, visits, and activities. It leverages the `action` and `relatedAction` elements to define relationships and timing between activities. Constraints are applied to ensure that resources conform to the defined profiles.

## Technical Essence

This IG defines a FHIR-based model for representing clinical trial Schedules of Activities (SoAs) using a hierarchical structure of `PlanDefinition` and `ActivityDefinition` resources. The `StudyProtocolSoa` profile, a specialized `PlanDefinition`, serves as the root, containing nested `StudyVisitSoa` (also `PlanDefinition`) instances representing individual study visits via its `action` elements. Each `StudyVisitSoa` further details planned activities through its own `action` elements, referencing `StudyActivitySoa` (`ActivityDefinition`) instances. Timing relationships between activities are expressed using `action.relatedAction`, with an `AcceptableOffsetRangeSoa` extension providing flexibility by specifying an acceptable range around a target date, in addition to the standard `offsetDuration`. `ResearchStudySoa` profiles the `ResearchStudy` resource to link the study to its protocol (`StudyProtocolSoa`). The IG leverages standard FHIR workflow resources like `CarePlan`, `ServiceRequest`, `Encounter`, `Procedure`, and `Observation` to track the execution of the defined SoA, although it does not prescribe specific operations. This core design enables the standardized representation and exchange of SoA data, facilitating interoperability between clinical research and EHR systems.

## Implementation Approach

-   **Critical workflows and interactions:** The IG outlines a workflow where the SoA is defined using `PlanDefinition` and `ActivityDefinition`. This definition is then used to generate resources like `CarePlan` and `ServiceRequest` to schedule activities for individual patients. `Encounter`, `Procedure`, and `Observation` resources are used to record the actual execution of the activities.
-   **Important requirements and guardrails:** Implementers must ensure that resources conform to the defined profiles. The `relatedAction` element, along with the `AcceptableOffsetRangeSoa` extension, must be used correctly to specify timing relationships and visit windows.
-   **Notable design choices and patterns:** The hierarchical structure using `PlanDefinition` is a key design choice. The use of the `relatedAction` element to define relationships between activities, and the `AcceptableOffsetRangeSoa` extension to specify visit windows, are notable patterns. The IG also provides guidance on representing investigational product administration using medication resources.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are clinical research systems (e.g., EDC, CTMS) and EHR systems. The target users include study builders, site staff, researchers, and regulatory bodies.
-   **Relationship to other standards/IGs:** The IG aligns with the CDISC ODM standard for representing clinical trial data. It also relates to other Vulcan IGs, such as the Retrieval of Real World Data for Clinical Research IG.
-   **Relevant jurisdictions or programs:** The IG is relevant to any jurisdiction or program that conducts clinical trials, particularly those involving the exchange of data between research and healthcare systems.
-   **Primary use cases and scenarios:** The IG supports use cases such as automated study setup, participant scheduling, protocol compliance tracking, and retrospective data analysis for real-world evidence. The examples provided, based on the H2Q-MC-LZZT study, illustrate how the IG can be used to represent a real-world clinical trial SoA.
