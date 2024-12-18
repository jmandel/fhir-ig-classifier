# how-to-publish: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG does not directly address clinical or data exchange interoperability challenges. Instead, it focuses on the technical process of publishing FHIR implementation guides using the HL7 IG Publisher's `-go-publish` feature. It addresses challenges related to making IGs publicly accessible, discoverable, and properly versioned.
-   **Key clinical/business problems it solves:** The IG solves the problem of making FHIR IGs available to a wider audience beyond the author, ensuring they are properly registered with FHIR tooling feeds, and providing a mechanism for managing multiple releases and versions. It also addresses the issue of canonical URL resolution for published IGs.
-   **Intended scope and boundaries:** The scope is limited to the publication process using the HL7 IG Publisher. It does not cover IG authoring, general IG Publisher usage, or related tooling like SUSHI. It assumes the user has a website for publication and is familiar with basic IG Publisher and `git` usage.

## Technical Foundation

-   **Core profiles and extensions:** The IG includes a simple example profile `MyPatient` derived from the base `Patient` resource. This profile adds a cardinality constraint to the `name` element, requiring it to be present (1..*) and marked as a Must Support element.
-   **Notable operations and interactions:** The IG does not define any custom operations or interactions. The primary interaction is the publication process itself, which involves running the IG Publisher with specific parameters and uploading the generated output to a web server.
-   **Key terminology and value sets:** No specific terminology or value sets are defined within the IG.
-   **Significant patterns and constraints:** The IG demonstrates the use of a `publication-request.json` file to provide metadata for the publication process, including the package ID, version, path, mode, status, sequence, description, and other relevant information. It also highlights the importance of a well-defined directory structure for staging the publication output.

## Technical Essence

This IG provides a blueprint for publishing FHIR IGs using the HL7 IG Publisher's `-go-publish` functionality. It leverages a `publication-request.json` file to define metadata for each release, including version, publication path, and status. The IG Publisher, when invoked with `-go-publish`, processes this metadata along with the IG's source (including the ImplementationGuide resource or `sushi-config.yaml`) to generate a structured output in a designated webroot directory. This output includes the IG content itself, organized by version, along with updated registry feeds (e.g., `package-feed.xml`, `publication-feed.xml`, `package-registry.json`). The process also involves updating the central `fhir-ig-list.json` registry to make the IG discoverable by FHIR tooling. The IG defines a specific directory structure for staging the publication, including customizable templates for the history and index pages. The example `MyPatient` profile demonstrates a basic resource modification, but the core focus is on the publication mechanics rather than resource modeling.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves preparing the IG for publication (updating the ImplementationGuide resource, creating `publication-request.json`), running the IG Publisher with `-go-publish`, and uploading the generated output to a web server. Another critical interaction is updating the `fhir-ig-list.json` registry to register the published IG.
-   **Important requirements and guardrails:** The IG requires a specific directory structure for the publication workspace, including directories for templates, webroot, history, and the IG registry. It also requires a `publish-setup.json` file to configure the website structure and layout rules. The canonical URL of the IG must align with the publication location for proper resolution.
-   **Notable design choices and patterns:** The IG uses a template-based approach for generating the history and index pages, allowing customization of the look and feel. It also uses RSS feeds for publishing package and publication information. The use of `publication-request.json` provides a structured way to manage publication metadata.

## Ecosystem Context

-   **Target systems and users:** The target users are FHIR IG authors who want to publish their IGs using the HL7 IG Publisher. The target systems are web servers hosting the published IGs and FHIR tooling that consumes the registry feeds.
-   **Relationship to other standards/IGs:** The IG is related to the HL7 IG Publisher and the broader FHIR ecosystem. It references the FHIR specification (R4) and relies on the IG Publisher's functionality.
-   **Relevant jurisdictions or programs:** The IG is not specific to any jurisdiction or program. It is relevant to any organization or individual publishing FHIR IGs.
-   **Primary use cases and scenarios:** The primary use case is publishing FHIR IGs to a website, making them accessible to a wider audience, and registering them with FHIR tooling. The IG also covers scenarios like publishing multiple versions of an IG and managing the history of published versions.
