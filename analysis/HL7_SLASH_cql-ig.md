# cql-ig: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to standardize how Clinical Quality Language (CQL) is used with FHIR (Fast Healthcare Interoperability Resources) in various healthcare contexts. It provides a universal approach for representing CQL logic within FHIR resources, applicable to areas like clinical decision support, quality reporting, and computable guidelines. The goal is to provide a consistent and broadly applicable way to use CQL with FHIR. It is targeted at authors creating CQL-based FHIR artifacts and integrators building systems that handle such artifacts.

2.  **How does this IG improve upon previous approaches?** This IG consolidates and generalizes previous efforts related to using CQL with FHIR from multiple implementation guides, such as the Quality Measure IG, FHIR Clinical Guidelines, and the Canonical Resource Management Infrastructure IG. It extracts the common aspects of CQL support into a single, broadly applicable guide. This reduces redundancy and promotes consistency across different use cases by centralizing conformance requirements and guidance.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   Defining how CQL libraries are represented as FHIR Library resources, including CQL content, ELM (Expression Logical Model), and related metadata.
    *   Specifying how CQL expressions are used within FHIR resources.
    *   Providing conformance requirements for FHIR type mapping to CQL types, including lists and tuples.
    *   Defining profiles for representing CQL evaluation results, ModelInfo, and translator options.
    *   Establishing guidelines for terminology usage (code systems, value sets, direct-reference codes) within CQL and FHIR.
    *   Providing patterns for handling missing information, negation, and using FHIR primitives, choices, slices, and extensions in CQL.
    *   Defining operations for CQL evaluation services.
    *   Use of the `dataRequirement` element to identify data needed for a CQL library, including use of `cqf-isSelective` and `cqf-fhirQueryPattern` to further define how data requirements can be met.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG builds upon existing HL7 standards such as FHIR and CQL, providing guidance for their use in clinical settings. It aims to support the development of computable clinical content that can be used to meet various reporting and decision support needs. It also references other HL7 standards and implementation guides, such as the Clinical Practice Guideline (CPG) IG and the Quality Improvement Profile (QI-Core) IG.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    *   **Authors:** Developers of CQL-based FHIR Knowledge Artifacts, such as clinical decision support rules, quality measures, and clinical guidelines.
    *   **Integrators:** Developers of systems that author, publish, distribute, and implement CQL-based FHIR Knowledge Artifacts. This includes developers of EHRs, quality reporting systems, and clinical decision support platforms.
    *   **Patients:** While not direct users, they indirectly benefit from improved quality of care and more consistent and evidence-based clinical processes enabled by the use of this IG.
