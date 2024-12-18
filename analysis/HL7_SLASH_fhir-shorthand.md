# fhir-shorthand: Analysis

## Core Purpose & Scope

This Implementation Guide (IG) defines FHIR Shorthand (FSH), a domain-specific language for creating FHIR artifacts and Implementation Guides. It primarily addresses the challenges of efficiently and consistently authoring FHIR profiles, extensions, value sets, code systems, and other IG components. By providing a concise, human-readable syntax, FSH aims to simplify the IG development process, reduce errors, and improve the quality of FHIR specifications. The scope is limited to the FSH language itself, its syntax, semantics, and the rules for translating FSH into valid FHIR resources. It also touches upon the use of SUSHI, the reference implementation compiler for FSH.

## Technical Foundation

The technical foundation of FSH rests on its grammar, formally defined using ANTLR. Key building blocks include:

-   **Aliases:** Short names for URLs and OIDs (e.g., `$SCT` for SNOMED CT).
-   **Items:** FSH representations of FHIR artifacts, including Profiles, Extensions, ValueSets, CodeSystems, Instances, Invariants, Logicals, Mappings, Resources, and RuleSets.
-   **Keywords:** Statements like `Id`, `Title`, `Description`, `Parent`, `InstanceOf`, `Usage`, `Context`, `Characteristics`, `Expression`, `Severity`, `Source`, `Target`, and `XPath` that provide metadata for items.
-   **Rules:** Instructions for defining and constraining FHIR elements, including assignments, bindings, cardinality constraints, contains rules (for slicing and extensions), include/exclude rules (for value sets), flag rules (e.g., `MS`, `SU`), insert rules (for rule sets), and type rules.
-   **Paths:** A syntax for referencing elements within FHIR resources, including nested elements, array elements (using numerical or soft indexing), choice elements, sliced elements, and extension elements.
-   **Caret Paths:** A syntax using `^` to access elements of definitional resources (e.g., `StructureDefinition.experimental`).
-   **RuleSets:** Reusable groups of rules, optionally parameterized, that can be inserted into other FSH items.
-   **Value Sets:** Defined using include and exclude rules, referencing external code systems or value sets, or filtering codes based on properties.
-   **Code Systems:** Allow for the definition of local codes and hierarchical code systems.
-   **Logical Models:** Allow authors to define new structures representing arbitrary content, adding properties as standard elements.
-   **Custom Resources:** Allow authors to define new structures representing arbitrary content, intended to support data exchange using FHIR's RESTful API mechanisms.
-   **Mappings:** Informative mappings to other standards, using a simplified syntax compared to FHIR Mapping Language.

## Technical Essence

FSH is a declarative language for defining FHIR artifacts using a concise, text-based syntax. Profiles constrain base resources by setting cardinalities (e.g., `* subject 1..1 MS`), applying bindings (e.g., `* code from $LNC (required)`), and fixing values (e.g., `* code = $LNC#1234-5`). Extensions are defined similarly, either as standalone or inline within complex extensions. Value sets are built by including or excluding codes from external systems (e.g., `* include codes from system $SCT where concept is-a #12345`) or other value sets. Instances are created by assigning values to elements (e.g., `* name.given = "John"`). RuleSets allow for reusable rule blocks, optionally parameterized (e.g., `RuleSet: MyRuleSet(param) * ^status = #{param}`). Paths use dot notation for nested elements, bracketed indices for arrays, and caret (`^`) for metadata. Indentation can set path context (e.g., `* name * family 1..1` is equivalent to `* name.family 1..1`). A compiler like SUSHI translates FSH into standard FHIR resources in JSON format.

## Implementation Approach

Implementing FSH involves using a text editor to create `.fsh` files containing FSH definitions. These files are then processed by a FSH compiler, such as SUSHI, which validates the FSH and generates corresponding FHIR resources. The `sushi-config.yaml` file provides project-level configuration, including the canonical URL and dependencies. SUSHI can be run standalone or integrated with the HL7 FHIR IG Publisher. Key workflows include defining aliases, creating profiles and extensions, defining value sets and code systems, creating instances, and defining rule sets for reuse. The IG emphasizes the importance of following FHIR's profiling rules and using appropriate syntax for different item types.

## Ecosystem Context

FSH is designed for FHIR IG authors, tooling developers, and anyone involved in creating or maintaining FHIR specifications. It is particularly relevant for projects using source code control systems like Git, as the text-based nature of FSH facilitates version control and collaboration. FSH is closely tied to the SUSHI compiler and the HL7 FHIR IG Publisher. It is also integrated with platforms like Simplifier.net. FSH has been adopted by numerous IG development projects, as evidenced by the FSH Finder tool and the active community on chat.fhir.org. FSH is a HL7 standard, with most of the language features being normative, while some newer features are designated as Trial Use. The primary use case is to streamline and improve the quality of FHIR IG development.
