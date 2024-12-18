# ebm: Analysis

## Core Purpose & Scope

**Primary interoperability challenges this IG addresses:**

-   Standardizes the representation of evidence-based medicine (EBM) concepts in FHIR, enabling consistent exchange and integration of scientific knowledge.
-   Provides a common framework for describing citations, research study designs, statistical findings, certainty assessments, and recommendations.
-   Addresses the lack of standardized FHIR resources for representing complex EBM concepts like study eligibility criteria, endpoint analysis plans, and evidence synthesis.

**Key clinical/business problems it solves:**

-   Facilitates the creation, sharing, and reuse of computable knowledge artifacts for clinical decision support, guideline development, and quality measurement.
-   Improves the transparency and reproducibility of evidence synthesis and guideline development processes.
-   Enables the integration of EBM knowledge into clinical workflows and electronic health records (EHRs).
-   Supports the development of learning health systems by enabling the systematic collection and analysis of real-world evidence.

**Intended scope and boundaries:**

-   Covers the representation of scientific knowledge, including citations, study designs, research results, assessments, evidence synthesis, judgments, recommendations, and compositions.
-   Focuses on syntactic and semantic interoperability using FHIR resources, profiles, and value sets.
-   Primarily targets developers of systems using FHIR for data exchange of scientific knowledge and authors of specialized IGs in this domain.
-   Does not cover clinical decision support logic or algorithms, but provides the foundation for representing the knowledge used by such systems.
-   Does not define specific clinical guidelines or recommendations but provides a framework for representing them in a computable format.

## Technical Foundation

**Core profiles and extensions:**

-   **Evidence:** Profiles like `SingleStudyEvidence`, `EvidenceSynthesisEvidence`, `ComparativeEvidence`, and `NonComparativeEvidence` define how to represent different types of evidence, including variables, statistics, and certainty assessments. Extensions like `StatisticModelExpression` are used for complex statistical models.
-   **EvidenceVariable:** Profiles like `VariableDefinition` and `GroupAssignment` define how to represent variables used in statistical analyses, including handling and categorization.
-   **Group:** Profiles like `GroupR6`, `CohortDefinition`, `StudyEligibilityCriteria`, and `ExposureDefinition` define how to represent groups and their characteristics, including eligibility criteria and definitions of exposures and outcomes. Extensions like `CharacteristicTiming` are used for complex timing expressions.
-   **Citation:** Profiles like `JournalArticleCitation`, `BookCitation`, and `DatabaseCitation` define how to represent different types of citations, including identifiers, publication forms, and classifications.
-   **ArtifactAssessment:** Profiles like `Comment`, `Classification`, `Rating`, `CertaintyOfEvidence`, and `RecommendationJustification` define how to represent assessments of resources, including comments, classifications, ratings, and justifications.
-   **Composition:** Profiles like `EvidenceReport`, `ComparativeEvidenceReport`, `Guideline`, and `Recommendation` define how to represent different types of EBM documents and reports, including sections and entries.

**Notable operations and interactions:**

-   The IG does not define specific operations but relies on standard FHIR interactions like create, read, update, and search for managing resources.
-   The use of references between resources (e.g., `Evidence` referencing `EvidenceVariable` and `Group`) enables the linking of related information and the creation of complex knowledge artifacts.

**Key terminology and value sets:**

-   **Scientific Evidence Code System (SEVCO):** Provides codes for classifying evidence, study designs, statistical methods, and other EBM concepts.
-   **Recommendation Justification Code System:** Provides codes for classifying recommendation justifications.
-   **Evidence Based Medicine on FHIR Implementation Guide Code System:** Provides codes specific to this IG, such as codes for different types of evidence reports and composition sections.
-   **EvidenceVariableRoleSubtype Value Set:** Provides codes for subtyping the role of variables in statistical analyses.
-   **EvidenceReportSectionCode Value Set:** Provides codes for classifying sections within evidence reports.
-   **Recommendation Justification Classifier Codes Value Set:** Provides codes for classifying recommendation justifications.
-   **Risk Of Bias Type Value Set:** Provides codes for classifying types of risk of bias.

**Significant patterns and constraints:**

-   Extensive use of profiles to constrain and extend base FHIR resources for EBM-specific needs.
-   Use of extensions to add features from FHIR R6 to R5 resources, such as `variableRoleCode` and `roleSubtype` extensions on `Evidence.variableDefinition`.
-   Use of `CodeableConcept` and `Reference` datatypes to represent coded concepts and links to other resources.
-   Use of `Composition` resource to structure complex documents and reports.
-   Use of `relatedArtifact` to link related resources, such as linking an `Evidence` resource to its source `Citation`.
-   Constraints on cardinality and resource types to ensure consistency and validity of EBM knowledge representation.

## Technical Essence

This IG defines a comprehensive framework for representing EBM knowledge in FHIR by profiling core resources like `Evidence`, `EvidenceVariable`, `Group`, `Citation`, `ArtifactAssessment`, and `Composition`. It leverages extensions to bridge R5 and R6 features, particularly in `Group` and `EvidenceVariable` for defining characteristics and variable roles. `Evidence` profiles specify populations, exposures, outcomes, and covariates using references to `Group` and `EvidenceVariable` profiles, while `statistic` elements capture quantitative results with extensions for model expressions. `Certainty` is represented via `ArtifactAssessment`. `Group` profiles, enhanced with extensions like `characteristicExpression` and `combinationMethod`, define cohorts and eligibility criteria. `Citation` profiles detail bibliographic information, while `ArtifactAssessment` profiles capture comments, classifications, and ratings. `Composition` profiles structure complex reports like `EvidenceReport` and `Guideline`, using sections and entries to link to other resources. The IG mandates specific code systems like SEVCO for consistent terminology. Essentially, this IG enables the creation of a computable knowledge graph where `Evidence` links to variables, populations, and statistics, `Group` defines cohorts and criteria, `Citation` provides source information, `ArtifactAssessment` captures evaluations, and `Composition` assembles these into structured reports, all while bridging R5 and R6 capabilities through strategic extensions.

## Implementation Approach

**Critical workflows and interactions:**

-   **Creating and updating EBM resources:** Implementers will need to support the creation and updating of resources based on the defined profiles, ensuring that all required elements and constraints are met.
-   **Linking related resources:** Implementers will need to manage references between resources, such as linking `Evidence` to `EvidenceVariable`, `Group`, and `Citation` resources.
-   **Searching and retrieving EBM resources:** Implementers will need to support searching for resources based on various criteria, such as study design, population, intervention, outcome, and certainty.
-   **Generating reports and documents:** Implementers may need to generate human-readable reports or documents based on the structured data in `Composition` resources.
-   **Integrating with clinical decision support systems:** Implementers may need to integrate EBM knowledge represented in FHIR with clinical decision support systems to provide evidence-based recommendations at the point of care.

**Important requirements and guardrails:**

-   **Conformance to profiles:** Implementations must conform to the defined profiles, ensuring that all required elements, extensions, and value sets are used correctly.
-   **Validation:** Implementations should validate resources against the profiles to ensure data quality and consistency.
-   **Terminology binding:** Implementations must use the specified code systems and value sets for coded elements.
-   **Reference management:** Implementations must handle references between resources correctly, ensuring that referenced resources exist and are of the correct type.

**Notable design choices and patterns:**

-   **Profiling over extension:** The IG primarily uses profiling to constrain and extend base FHIR resources, rather than creating new resources. This promotes interoperability and reuse of existing FHIR infrastructure.
-   **Bridging R5 and R6:** The use of extensions to add R6 features to R5 resources allows implementers to leverage the latest FHIR developments while maintaining compatibility with R5 systems.
-   **Modular design:** The use of separate profiles for different EBM concepts allows for flexibility and extensibility. Implementers can choose to implement only the profiles that are relevant to their specific needs.
-   **Human-readable summaries:** The use of `description`, `assertion`, and `note` elements in `Evidence` and other resources allows for the inclusion of human-readable summaries alongside structured data.

## Ecosystem Context

**Target systems and users:**

-   **Clinical decision support systems:** To provide evidence-based recommendations at the point of care.
-   **Guideline development tools:** To create and manage computable clinical practice guidelines.
-   **Quality measurement systems:** To assess the quality of care based on evidence-based measures.
-   **Research repositories:** To store and share research studies and their findings.
-   **EHR systems:** To integrate EBM knowledge into clinical workflows and patient records.
-   **Systematic review tools:** To support the process of conducting systematic reviews and meta-analyses.
-   **Researchers, clinicians, guideline developers, quality improvement professionals, and informaticians.**

**Relationship to other standards/IGs:**

-   **CPGonFHIR:** The `RecommendationPlan` profile is designed to be compatible with the CPGonFHIR IG, enabling the representation of recommendations in a way that can be used by both EBM and clinical decision support systems.
-   **US Core:** The IG builds upon US Core profiles and value sets where applicable.
-   **QI-Core:** The IG can be used in conjunction with QI-Core to represent quality measures based on EBM knowledge.

**Relevant jurisdictions or programs:**

-   **Global:** The IG is intended to be applicable globally, as EBM is a global movement.
-   **Specific countries or regions:** The IG may be adapted or extended to meet the specific needs of particular countries or regions.
-   **Organizations involved in EBM:** Organizations like the Cochrane Collaboration, the GRADE Working Group, and the Agency for Healthcare Research and Quality (AHRQ) may find this IG useful.

**Primary use cases and scenarios:**

-   **Creating a computable representation of a clinical practice guideline:** A guideline developer can use the `Guideline` and `Recommendation` profiles to represent the guideline's recommendations, along with links to the supporting evidence represented using `Evidence`, `EvidenceVariable`, and `Group` resources.
-   **Developing a clinical decision support rule based on EBM knowledge:** A CDS developer can use the `Evidence` and `EvidenceVariable` resources to represent the evidence supporting a particular recommendation, and link this evidence to a `PlanDefinition` resource that defines the CDS rule.
-   **Conducting a systematic review:** A researcher can use the `SystematicReview` profile to represent the study design, the `SearchStrategy` profile to represent the search strategy, and the `Evidence` and `EvidenceVariable` resources to represent the findings of the included studies.
-   **Assessing the quality of care:** A quality improvement professional can use the `Evidence` and `EvidenceVariable` resources to represent the evidence base for a quality measure, and link this evidence to a `Measure` resource that defines the measure.
-   **Integrating EBM knowledge into an EHR:** An EHR vendor can use the IG to represent EBM knowledge within the EHR, allowing clinicians to access evidence-based recommendations at the point of care.
