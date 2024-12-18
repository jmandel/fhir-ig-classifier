# crmi-ig: Analysis

## Core Purpose & Scope

The Canonical Resource Management Infrastructure (CRMI) Implementation Guide addresses the primary interoperability challenges of managing the lifecycle of FHIR-based knowledge artifacts, including their authoring, publishing, distribution, and implementation. It solves key clinical and business problems related to the consistent and reliable use of artifacts like value sets, profiles, libraries, decision support rules, and quality measures across different systems and over time. The IG's scope is focused on defining profiles, operations, and capability statements to facilitate artifact management, versioning, dependency tracing, and packaging, without being prescriptive about specific authoring tools or central repositories. It establishes boundaries by focusing on the infrastructure needed for artifact management rather than the specific content of the artifacts themselves.

## Technical Foundation

The technical foundation of the CRMI IG rests on several core building blocks:

-   **Core Profiles:** Shareable, Computable, Publishable, and Executable profiles for various artifact types (e.g., ActivityDefinition, Library, Measure, PlanDefinition, Questionnaire, ValueSet, CodeSystem). These profiles define the minimum expectations for each stage of the artifact lifecycle.
-   **Extensions:** Defines extensions for artifact metadata (e.g., `artifact-url`, `artifact-version`), terminology usage (e.g., `cqf-expansionParameters`), packaging and dependency tracing (e.g., `cqf-resourceType`, `cqf-scope`), and logic-related capabilities (e.g., `cqf-valueFilter`).
-   **Operations:** Defines operations for packaging (`crmi-package`), dependency tracing (`crmi-data-requirements`), terminology expansion (`crmi-valueset-expand`), and artifact authoring support (e.g., `crmi-approve`, `crmi-draft`, `crmi-release`, `crmi-review`).
-   **Terminology and Value Sets:** Leverages standard FHIR terminology resources and defines specific value sets for artifact resource types, versioning policies, and other controlled vocabularies.
-   **Patterns and Constraints:** Establishes patterns for artifact identification (using canonical URLs), versioning (using semantic versioning), and dependency management (using `relatedArtifact` and version manifests). Defines constraints on artifact status transitions and versioning policies.

## Technical Essence

The CRMI IG defines a framework for managing FHIR knowledge artifacts by establishing a set of profiles, operations, and capability statements. Artifacts are categorized into Shareable, Computable, Publishable, and Executable profiles, each adding specific metadata and structural requirements. A core pattern is the use of a "manifest" (a specialized Library resource) to manage version dependencies and expansion parameters for collections of artifacts. The `$package` operation creates bundles of artifacts and their dependencies, while `$data-requirements` determines effective data requirements. Operations like `$draft`, `$release`, `$approve`, and `$review` support artifact lifecycle management. Artifact identification relies on canonical URLs, with versioning following semantic versioning principles. The `crmi-manifestlibrary` profile defines the structure of version manifests, which use `relatedArtifact` elements to specify dependencies and the `cqf-expansionParameters` extension to control value set expansion. The IG also defines capability statements for artifact repositories and terminology services, outlining expected behaviors for searching, retrieving, and managing artifacts.

## Implementation Approach

The CRMI IG is meant to be implemented by systems involved in the authoring, publishing, distribution, and consumption of FHIR knowledge artifacts. Implementers should:

-   Adopt the defined profiles for each artifact type, ensuring that artifacts meet the minimum requirements for shareability, computability, publishability, and executability as appropriate.
-   Utilize the defined operations for packaging, dependency tracing, and terminology expansion, integrating them into their artifact management workflows.
-   Implement version manifests to manage dependencies and ensure consistent terminology expansion across different environments and over time.
-   Conform to the capability statements for artifact repositories and terminology services to enable interoperable exchange of artifacts.
-   Follow the guidance on artifact identification, versioning, and lifecycle management to ensure consistency and predictability.

## Ecosystem Context

The CRMI IG targets a broad ecosystem of systems and users, including:

-   **Target Systems:** Authoring tools, artifact repositories, terminology services, clinical decision support systems, quality measurement engines, and other systems that consume or produce FHIR knowledge artifacts.
-   **Target Users:** Modelers, terminologists, knowledge developers, and healthcare system and software developers.
-   **Relationship to Other Standards/IGs:** The CRMI IG builds upon and refactors content from other IGs, including FHIR Clinical Guidelines, Quality Measures, QI-Core, and Data Exchange for Quality Measures. It is intended to be used as a foundational layer for these and other IGs that deal with knowledge artifacts.
-   **Relevant Jurisdictions or Programs:** While the CRMI IG is universal-realm, it is particularly relevant to programs and initiatives that rely on standardized, shareable knowledge artifacts, such as value-based care programs, public health reporting, and clinical guideline development and implementation.
-   **Primary Use Cases:** Managing the lifecycle of knowledge artifacts, ensuring consistent versioning and dependency resolution, enabling artifact packaging and distribution, and supporting terminology services for artifact expansion and validation.
