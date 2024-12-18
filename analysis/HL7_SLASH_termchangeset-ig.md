# termchangeset-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of representing and exchanging terminology change sets, specifically for CodeSystems, in a lossless and standardized manner. It focuses on enabling the communication of incremental updates to terminologies, including additions, modifications, and deletions of concepts, designations, and properties.
-   **Key clinical/business problems it solves:** It solves the problem of maintaining consistency and accuracy in terminology usage across different systems and over time. By providing a standard way to represent change sets, it facilitates the propagation of terminology updates, reducing the risk of errors and inconsistencies in clinical data and decision-making. It also supports the management of terminology evolution and versioning.
-   **Intended scope and boundaries:** The scope is limited to representing change sets for CodeSystems. It does not address ValueSets or other terminology resources. The IG primarily focuses on SNOMED CT and LOINC but provides a generic ChangeSet profile that can be adapted for other terminologies.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **ChangeSet:** A profile on CodeSystem to represent a terminology change set. It defines constraints and extensions for representing changes to concepts, designations, and properties.
    -   **LOINCChangeSet:** A specialization of ChangeSet for LOINC-specific change sets.
    -   **SNOMEDChangeSet:** A specialization of ChangeSet for SNOMED CT-specific change sets.
    -   **TerminologyChangeSetProvenance:** A profile on Provenance to capture the provenance of a terminology change set.
    -   **Extensions:**
        -   `SNOMEDDescriptionsCaseSensitivity`: Indicates the case sensitivity of a description.
        -   `SNOMEDDescriptionAcceptability`: Indicates the acceptability of a description.
        -   `SNOMEDRoleGroup`: Identifies the role group to which a property belongs.
        -   `DefiningRelationshipType`: Distinguishes between stated and inferred relationships.
        -   `ElProfileSetOperator`: Describes an axiom as being part of the Necessary vs. Sufficient set.
        -   `DescriptionDialect`: Specifies the dialect of a description.
-   **Notable operations and interactions:** The IG does not define any specific operations. It primarily focuses on the structure and content of the ChangeSet resource.
-   **Key terminology and value sets:**
    -   `CaseSignificanceVS`: Codes for case significance.
    -   `DescriptionAcceptabilityVS`: Codes for description acceptability.
    -   `DefiningRelationshipTypeVS`: Codes for defining relationship types.
    -   `ELProfileSetOperatorVS`: Codes for EL profile set operators.
    -   `DialectVS`: Codes for dialects.
-   **Significant patterns and constraints:**
    -   The ChangeSet profile uses `CodeSystem.content = #fragment` to indicate that it only contains a subset of the complete terminology.
    -   It leverages `CodeSystem.property` to define additional properties for concepts, with specific slices for SNOMED CT and LOINC.
    -   `CodeSystem.concept` is used to represent added or modified concepts, with extensions to capture SNOMED CT and LOINC-specific attributes.
    -   `CodeSystem.concept.designation` is used to represent changes to designations, with extensions for case sensitivity, acceptability, and dialect.
    -   `CodeSystem.concept.property` is used to represent changes to properties, with extensions for role group, defining relationship type, and EL profile set operator.
    -   The Provenance profile captures the authorship, timestamp, and reason for the change set, as well as the baseline version of the CodeSystem.

## Technical Essence

This IG defines a `ChangeSet` profile, derived from `CodeSystem`, to represent terminology updates as a collection of added or modified concepts, each with optional designations and properties.  `ChangeSet` instances are marked with `content = #fragment`.  Concepts are detailed using `concept.code`, `concept.display`, and `concept.definition`. Designations are captured in `concept.designation` with extensions for `caseSensitivity`, `acceptability`, and `dialect`. Properties are defined in `CodeSystem.property` and applied to concepts via `concept.property`, with extensions like `roleGroup`, `DefiningRelationshipType`, and `elProfileSetOperator` providing further semantic context, particularly for SNOMED CT. Specialized profiles, `LOINCChangeSet` and `SNOMEDChangeSet`, introduce terminology-specific properties (e.g., `COMPONENT`, `STATUS` for LOINC; `inactive`, `definitionStatusId` for SNOMED CT) and constraints. A `TerminologyChangeSetProvenance` profile, based on `Provenance`, captures the change set's metadata, including `occurredPeriod`, `reason`, `activity` (always `#UPDATE`), `agent` (author and custodian), and a reference to the baseline terminology version in `entity`.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves creating a ChangeSet instance representing the terminology updates, populating it with the modified concepts, designations, and properties, and associating it with a Provenance resource. Systems consuming the change set would then apply the updates to their local terminology store.
-   **Important requirements and guardrails:**
    -   Change sets must be valid against the ChangeSet profile and any applicable specialized profiles (e.g., LOINCChangeSet, SNOMEDChangeSet).
    -   The Provenance resource must accurately reflect the authorship, timestamp, and reason for the change set.
    -   Implementers must ensure that the change set is applied to the correct baseline version of the terminology.
-   **Notable design choices and patterns:**
    -   The use of `CodeSystem.content = #fragment` clearly distinguishes a change set from a complete terminology.
    -   The extensive use of extensions allows for capturing terminology-specific attributes without modifying the core FHIR specification.
    -   The Provenance profile provides a standardized way to track the origin and context of the change set.

## Ecosystem Context

-   **Target systems and users:** Terminology servers, clinical decision support systems, EHRs, and other systems that consume and manage terminologies. Users include terminology developers, implementers, and clinicians.
-   **Relationship to other standards/IGs:** This IG builds upon the core FHIR specification and is intended to be used in conjunction with other IGs that rely on terminologies, such as those for clinical data exchange or quality measurement. It aligns with the Tinkar information model requirements.
-   **Relevant jurisdictions or programs:** This IG is relevant to any jurisdiction or program that uses standardized terminologies, particularly SNOMED CT and LOINC.
-   **Primary use cases and scenarios:**
    -   Distributing updates to a terminology from a central authority to multiple consuming systems.
    -   Managing terminology changes within an organization or across a network of organizations.
    -   Pre-adopting new terminology content in anticipation of a formal release.
    -   Auditing and tracking terminology changes over time.
