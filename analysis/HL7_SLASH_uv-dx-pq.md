# uv-dx-pq: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of representing and exchanging structured quality data related to pharmaceutical products and substances, specifically focusing on analytical procedures used in quality control. It aims to standardize the representation of information found in the Common Technical Document (CTD) Module 3: Quality, sections 3.2.P.5 (Control of Drug Product) and 3.2.S.4 (Control of Drug Substance).
-   **Key clinical/business problems it solves:** It solves the problem of inconsistent and non-interoperable representation of analytical procedures, enabling efficient data exchange between pharmaceutical manufacturers, regulatory bodies, and other stakeholders. This standardization facilitates regulatory submissions, quality control processes, and data analysis across different systems and organizations.
-   **Intended scope and boundaries:** The scope is limited to the representation of analytical procedures for drug products and substances. It includes details about sample preparation, analysis methods, calculations, reporting, and associated parameters. It does not cover other aspects of pharmaceutical quality, such as manufacturing processes or stability testing, beyond what is directly relevant to the analytical procedures.

## Technical Foundation

-   **Core profiles and extensions:** The IG defines a core profile `Bundle-analytical-procedure-pq` for representing analytical procedures. It uses `PlanDefinition` as the primary resource to describe the procedure, with references to `SubstanceDefinition`, `ObservationDefinition`, `SpecimenDefinition`, and `DeviceDefinition`. Key extensions include `Extension-process-parameters-pq` for defining process parameters and `Extension-qualified-value-target-pq` for specifying target values in observation definitions.
-   **Notable operations and interactions:** The IG primarily focuses on data representation and does not specify any custom operations. Standard FHIR interactions like read and search are expected to be used for retrieving and querying the data.
-   **Key terminology and value sets:** The IG utilizes existing FHIR terminologies like `plan-definition-type`, `manufacturing-participant-role`, and `process-parameter`. It also defines a local code system `cs-local-codes-drug-pq-example` for specific concepts like "Assay" and "Identification".
-   **Significant patterns and constraints:** The IG follows a pattern of using `PlanDefinition` to describe the overall analytical procedure, with nested `action` elements representing individual steps. `ObservationDefinition` resources are used to define specific tests and their acceptance criteria. `SubstanceDefinition` is used to represent substances involved in the process, including the substance being analyzed, diluents, and resulting materials.

## Technical Essence

This IG defines a structured representation of pharmaceutical analytical procedures using a `Bundle` profile (`Bundle-analytical-procedure-pq`) that contains a `PlanDefinition` resource as the central element. The `PlanDefinition` describes the procedure's steps using nested `action` elements, which can include process parameters defined via the `Extension-process-parameters-pq`. Each action can reference `ObservationDefinition` resources that specify individual tests, their codes, and acceptance criteria using `qualifiedValue` with ranges and target values defined by `Extension-qualified-value-target-pq`. `SubstanceDefinition` resources are used to represent the substance under analysis, diluents, and resulting materials, with roles defined using the `manufacturing-participant-role` code system. `SpecimenDefinition` resources describe sample handling and storage conditions. `DeviceDefinition` can be used to specify equipment used in the analysis. The IG leverages standard FHIR search and retrieval operations for data access.

## Implementation Approach

-   **Critical workflows and interactions:** Implementations would primarily involve creating and consuming `Bundle` resources conforming to the `Bundle-analytical-procedure-pq` profile. This includes populating the `PlanDefinition` with actions, referencing relevant `ObservationDefinition`, `SubstanceDefinition`, `SpecimenDefinition`, and `DeviceDefinition` resources.
-   **Important requirements and guardrails:** Implementations must ensure that the `PlanDefinition` accurately reflects the analytical procedure, including all steps, parameters, and associated tests. `ObservationDefinition` resources must be properly linked and include appropriate acceptance criteria. `SubstanceDefinition` resources should be used consistently to represent all substances involved.
-   **Notable design choices and patterns:** The use of `PlanDefinition` as the core resource provides a structured way to represent the workflow of the analytical procedure. The use of nested `action` elements allows for a hierarchical representation of the process steps. The reliance on standard FHIR resources and operations promotes interoperability and simplifies implementation.

## Ecosystem Context

-   **Target systems and users:** The target systems include pharmaceutical manufacturing systems, laboratory information management systems (LIMS), regulatory submission systems, and quality control databases. The target users are pharmaceutical manufacturers, quality control personnel, regulatory agencies, and researchers involved in drug development and quality assessment.
-   **Relationship to other standards/IGs:** This IG is related to other FHIR IGs in the pharmaceutical domain, such as those dealing with medicinal products and substances. It also aligns with the CTD standard, specifically Module 3: Quality.
-   **Relevant jurisdictions or programs:** This IG is relevant to jurisdictions and programs that require or utilize CTD submissions for drug approval, such as the FDA, EMA, and other national regulatory agencies.
-   **Primary use cases and scenarios:** The primary use cases include:
    -   Submitting analytical procedures as part of regulatory submissions.
    -   Exchanging analytical procedure data between different systems within a pharmaceutical company.
    -   Sharing analytical procedure data with external partners, such as contract research organizations (CROs).
    -   Analyzing and comparing analytical procedures across different products or manufacturers.
    -   Supporting quality control processes by providing a standardized representation of analytical methods.
