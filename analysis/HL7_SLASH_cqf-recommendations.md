# cqf-recommendations: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG), "Clinical Practice Guidelines" (CPG), addresses the interoperability challenges of representing, sharing, and executing clinical practice guidelines in a computable format. It solves key clinical and business problems by enabling the creation of standardized, machine-readable guidelines that can be integrated into clinical workflows to support evidence-based decision-making, quality measurement, and care coordination. The IG's scope is focused on defining the structure and content of computable guidelines, including recommendations, strategies, pathways, and related artifacts like metrics and case reports. It sets boundaries by not addressing local workflow implementations or native EHR builds, focusing instead on the abstract representation of guideline logic and data.

## Technical Foundation

The technical foundation of this IG rests on several key FHIR resources and concepts:

-   **Core Profiles and Extensions:**
    -   `PlanDefinition`: Used to represent guidelines, pathways, strategies, and recommendations, leveraging the `action` element to define steps and logic.
    -   `ActivityDefinition`: Defines activities within guidelines, such as communication requests, medication requests, and service requests.
    -   `Library`: Contains CQL logic used for eligibility criteria, decision support rules, and data extraction.
    -   `Measure`: Represents quality measures derived from guideline recommendations.
    -   `Questionnaire` and `QuestionnaireResponse`: Used for data collection and assessment activities.
    -   `Task`: Represents tasks within the guideline workflow, such as collecting information or generating reports.
    -   `CarePlan`: Represents the patient-specific care plan, instantiated from a pathway or strategy.
    -   `EpisodeOfCare`: Used to represent a CPGCase, which is a specific case of a patient enrolled in a particular pathway.
    -   Extensions: Defines numerous extensions to capture guideline-specific metadata, such as `cpg-rationale`, `cpg-strengthOfRecommendation`, and `cpg-qualityOfEvidence`.
-   **Notable Operations and Interactions:**
    -   `PlanDefinition/$apply`: Operation to apply a PlanDefinition to a specific patient, resulting in a `CarePlan` or `RequestGroup`.
    -   `ActivityDefinition/$apply`: Operation to apply an ActivityDefinition to a specific patient, resulting in a request resource.
    -   `Library/$evaluate`: Operation to evaluate a CQL library.
    -   `$data-requirements`: Operation to determine the data requirements for a given resource.
-   **Key Terminology and Value Sets:**
    -   `cpg-activity-type-cs`: Defines types of activities within a guideline.
    -   `cpg-casefeature-type-cs`: Defines types of case features.
    -   `cpg-casefeature-pertinence-cs`: Defines the pertinence of a case feature.
    -   `cpg-recommendation-direction-cs`: Defines the direction of a recommendation (e.g., for or against).
    -   `cpg-common-persona-cs`: Defines common personas involved in guideline recommendations.
    -   `cpg-common-process-cs`: Defines common processes in guideline-based care.
-   **Significant Patterns and Constraints:**
    -   **Event-Condition-Action (ECA) Rules:** Recommendations are modeled as ECA rules within `PlanDefinition.action`, using `trigger`, `condition`, and `action` elements.
    -   **Activity Flow:** Defines a standardized pattern for activity lifecycle management, using `status` and `intent` elements of request resources.
    -   **Composite Artifacts:** Guidelines, pathways, and strategies are represented as composite artifacts, built from multiple interconnected resources.
    -   **Separation of Concerns:** The IG emphasizes the separation of case (patient data), plan (guideline logic), and workflow (implementation details).
    -   **Eligibility and Enrollment:** Pathways and strategies define eligibility criteria and support various enrollment mechanisms (automatic, prompted, manual).

## Technical Essence

This IG enables computable guidelines through a core design centered on `PlanDefinition` as the primary orchestrator. Each guideline is a `PlanDefinition` composed of nested `action` elements representing recommendations, strategies, and pathways. Recommendations are modeled as ECA rules within `action`, with `trigger` defining the event, `condition` using CQL in a referenced `Library` to evaluate applicability based on patient data (CPGCaseFeatures), and `action` specifying the proposed activity via an `ActivityDefinition` or a nested `PlanDefinition`. Strategies and pathways are also `PlanDefinition` instances, with `action` elements defining their steps and referencing other `PlanDefinition` or `ActivityDefinition` resources.  `cpg-rationale`, `cpg-strengthOfRecommendation`, and `cpg-qualityOfEvidence` extensions provide critical metadata. The `CarePlan` resource, instantiated via `PlanDefinition/$apply`, represents the patient-specific care plan. `EpisodeOfCare` is used to represent a CPGCase, which is a specific case of a patient enrolled in a particular pathway. Activities are managed following a standardized lifecycle using `status` and `intent`, detailed in the Activity Flow. The `Library` resource, containing CQL, is used extensively for defining data requirements, eligibility criteria, and decision logic. Value sets like `cpg-activity-type-cs` and `cpg-recommendation-direction-cs` provide controlled vocabularies. The IG mandates specific usage patterns for `relatedAction` within `PlanDefinition` to ensure consistent execution semantics.

## Implementation Approach

The IG is designed to be implemented using a combination of FHIR servers, CQL engines, and clinical decision support (CDS) systems.

-   **Critical Workflows and Interactions:**
    -   Guideline execution is triggered by events (e.g., encounter start) or direct invocation.
    -   `PlanDefinition/$apply` is used to generate patient-specific recommendations.
    -   `ActivityDefinition/$apply` is used to generate specific requests based on recommendations.
    -   CQL libraries are evaluated to determine data requirements and apply decision logic.
    -   Activity status is tracked and updated based on the defined activity flow.
    -   Care plans are created and updated based on applied guidelines and patient-specific data.
-   **Important Requirements and Guardrails:**
    -   Implementers must adhere to the defined activity flow and execution semantics.
    -   `PlanDefinition` actions must be sequenced using `relatedAction` with `before-start` relationships.
    -   Eligibility and enrollment criteria must be carefully implemented to ensure appropriate guideline application.
    -   Data requirements must be accurately determined and satisfied.
-   **Notable Design Choices and Patterns:**
    -   The use of `PlanDefinition` as the primary orchestrator enables a hierarchical and modular approach to guideline representation.
    -   The reliance on CQL for decision logic allows for complex and expressive rules.
    -   The separation of case, plan, and workflow facilitates flexibility and adaptability to different implementation contexts.
    -   The use of extensions for guideline-specific metadata ensures that critical information is captured and conveyed.

## Ecosystem Context

-   **Target Systems and Users:** EHRs, CDS systems, quality measurement systems, clinical research platforms, public health agencies. Target users include clinicians, informaticians, guideline developers, quality improvement professionals, and researchers.
-   **Relationship to Other Standards/IGs:**
    -   Builds on core FHIR resources and operations.
    -   References the Clinical Reasoning module and the [EBM on FHIR IG](http://hl7.org/fhir/uv/ebm/2024May/index.html).
    -   Uses CQL for expressing clinical logic.
    -   Aligns with the [Quality Measure IG](http://hl7.org/fhir/us/cqfmeasures/STU3/index.html) for defining quality measures.
    -   Related to CDS Hooks for triggering and integrating CDS.
    -   Leverages [BPM+](https://www.omg.org/bpmn/) concepts for workflow representation.
-   **Relevant Jurisdictions or Programs:** Applicable to any jurisdiction or program that uses clinical practice guidelines, with a focus on US initiatives like the [Opioid Prescribing Guidelines](https://www.cdc.gov/opioids/healthcare-professionals/prescribing/guideline/index.html) and the [GIN-McMaster Guideline Development Checklist](https://cebgrade.mcmaster.ca/guidelinechecklist_online.html).
-   **Primary Use Cases and Scenarios:**
    -   Real-time clinical decision support at the point of care.
    -   Automated quality measurement and reporting.
    -   Guideline-driven care coordination and care planning.
    -   Clinical research and evidence generation.
    -   Public health surveillance and reporting.
    -   Development and dissemination of computable guidelines.
    -   Rapid response to public health emergencies.
