# ch-epr-term: Analysis

## Core Purpose & Scope

The **ch-epr-term** Implementation Guide (IG) addresses the primary interoperability challenge of standardizing terminology used within the Swiss healthcare system, specifically for the core profiles, various exchange formats, and the Swiss electronic patient record (EPR). It solves the key clinical and business problems of inconsistent terminology use, enabling semantic interoperability across different systems and organizations. The IG's scope is focused on defining Swiss-specific terminology, including Code Systems, Value Sets, Concept Maps, and Naming Systems, used in various Swiss healthcare contexts. It explicitly excludes defining profiles or implementation details beyond terminology.

## Technical Foundation

The technical foundation of ch-epr-term is built upon FHIR R4 (v4.0.1). It defines:

-   **No core profiles or extensions**: The IG focuses solely on terminology.
-   **No notable operations or interactions**: The IG does not specify any operations.
-   **Key terminology and value sets**:
    -   Code Systems: Includes Swiss-specific codes like `ch-vacd-swissmedic-cs` (Swissmedic Authorized Vaccines), `ch-vacd-myvaccines-cs` (Old Swiss Vaccines), `ch-vacd-recommendation-categories-cs` (Swiss Immunization Recommendation Categories), `ch-vacd-recommendation-forecast-status-cs` (Swiss Recommendation Forecast Status), `ech-7-cantonflabbreviation` (eCH-0007 Canton Abbreviation incl. FL), `bfs-medstats-25-mainguarantor` (BFS main guarantor), `mainguarantor` (main guarantor), `servicerequest-category`, and codes from CH AllergyIntolerance.
    -   Value Sets: Defines value sets for Swiss vaccination plans (`ch-vacd-ch-vaccination-plan-immunizations-vs`), recommendation categories (`ch-vacd-recommendation-categories-vs`), target diseases and illnesses undergone for immunization (`ch-vacd-targetdiseasesandillnessesundergoneforimmunization-vs`), vaccines (`ch-vacd-vaccines-vs`, `ch-vacd-vaccines-snomedct-vs`), route of administration (`ch-vacd-route-of-administration-vs`), recommendation forecast status (`ch-vacd-recommendation-forecast-status-vs`), EDQM administration methods (`edqm-administrationmethod`), and various value sets from CH Core and CH AllergyIntolerance.
    -   Concept Maps: Provides mappings between different code systems, such as `ch-vacd-targetdiseases-vaccines-cm` (TargetDisease To VaccineCode Mapping), `ch-vacd-vaccines-sct-sm-cm` (Snomed CT VaccineCode To SwissMedic VaccineCode), and `ch-vacd-vaccines-sct-targetdiseases-cm` (Snomed CT VaccineCode To TargetDisease).
-   **Significant patterns and constraints**: The IG primarily uses standard FHIR resources for terminology management (CodeSystem, ValueSet, ConceptMap, NamingSystem). It leverages SNOMED CT, EDQM, and Swiss-specific codes.

## Technical Essence

ch-epr-term is a terminology-focused FHIR R4 IG that defines a set of Swiss-specific CodeSystems, ValueSets, and ConceptMaps to standardize terminology usage in the Swiss EPR and related exchange formats. It defines a CodeSystem for Swissmedic authorized vaccines (`ch-vacd-swissmedic-cs`) with codes and display names in multiple Swiss languages. It also defines a CodeSystem for old Swiss vaccines (`ch-vacd-myvaccines-cs`). It includes ValueSets for recommendation categories, target diseases, and vaccines, referencing both SNOMED CT and the Swissmedic CodeSystem. ConceptMaps are defined to map between SNOMED CT vaccine codes and Swissmedic codes, as well as between vaccine codes and target disease codes. The IG also includes a ValueSet for EDQM administration methods and incorporates terminology from CH Core and CH AllergyIntolerance. The core functionality is to provide a single source of truth for Swiss-specific terminology, enabling consistent use of codes across different systems. An implementer could recreate the core functionality by defining these FHIR terminology resources, populating them with the specified codes, and establishing the mappings defined in the ConceptMaps.

## Implementation Approach

The IG is intended to be implemented by systems that need to use or exchange Swiss-specific terminology. Implementers would use the defined CodeSystems, ValueSets, and ConceptMaps to ensure consistent coding.

-   **Critical workflows and interactions**: The IG does not define specific workflows but implies that systems will use the defined terminology resources for encoding and decoding data related to vaccinations, allergies, and other relevant clinical concepts.
-   **Important requirements and guardrails**: Implementers must adhere to the specified codes and mappings. They should also be aware of the copyright and licensing terms for SNOMED CT content.
-   **Notable design choices and patterns**: The IG follows standard FHIR patterns for defining terminology resources. It uses multiple languages for display names in CodeSystems and ValueSets, reflecting the multilingual nature of Switzerland.

## Ecosystem Context

-   **Target systems and users**: The primary target systems are those involved in the Swiss EPR and other Swiss healthcare systems that exchange clinical data. Users include healthcare providers, patients, and software developers.
-   **Relationship to other standards/IGs**: The IG builds upon FHIR R4 and references other standards like SNOMED CT and EDQM. It also depends on `ihe.formatcode.fhir` and `hl7.terminology`. It complements other Swiss IGs like CH Core, CH EMED, CH AllergyIntolerance, CH VACD, and CH eTOC by providing a unified terminology foundation.
-   **Relevant jurisdictions or programs**: The IG is specific to Switzerland and the Swiss EPR program.
-   **Primary use cases and scenarios**: The primary use cases involve encoding and decoding clinical data related to vaccinations, allergies, and other concepts where Swiss-specific terminology is needed. This includes recording immunizations, documenting allergies, generating reports, and exchanging data between different systems within the Swiss healthcare ecosystem.
