# ITI.SVCM: Analysis

## Core Purpose & Scope

The IHE IT Infrastructure Technical Framework Supplement: Sharing Valuesets, Codes, and Maps (SVCM) addresses the interoperability challenge of accessing and managing centrally managed terminologies and mappings between code systems. It solves the problem of inconsistent or outdated terminology usage across healthcare systems by providing a standardized, lightweight interface for retrieving uniform nomenclature. The intended scope is limited to the retrieval and utilization of value sets, code systems, and concept maps, excluding patient-specific data exchange.

## Technical Foundation

The technical foundation of SVCM is built upon HL7 FHIR R4.

-   **Core Profiles:** SVCMValueSet, SVCMCodeSystem, SVCMConceptMap, which extend the base FHIR ValueSet, CodeSystem, and ConceptMap resources respectively. It also defines several AuditEvent profiles for auditing the various transactions.
-   **Notable Operations:**
    -   `Query Value Set [ITI-95]` (search and read on ValueSet)
    -   `Query Code System [ITI-96]` (search and read on CodeSystem)
    -   `Expand Value Set [ITI-97]` ($expand on ValueSet)
    -   `Lookup Code [ITI-98]` ($lookup on CodeSystem)
    -   `Validate Code [ITI-99]` ($validate-code on ValueSet and CodeSystem)
    -   `Query Concept Map [ITI-100]` (search and read on ConceptMap)
    -   `Translate Code [ITI-101]` ($translate on ConceptMap)
-   **Key Terminology and Value Sets:** Leverages standard FHIR search parameters and operations. It does not define specific value sets but provides a framework for their management.
-   **Significant Patterns and Constraints:**
    -   Mandates the use of `url` element in ValueSet, CodeSystem, and ConceptMap for identification, allowing for URNs when URLs are not feasible.
    -   Requires support for JSON and XML formats.
    -   Specifies required search parameters for each resource type.
    -   Defines audit event profiles for each transaction.
    -   Requires CapabilityStatements for both Terminology Consumer and Repository actors.

## Technical Essence

SVCM defines a RESTful FHIR interface for terminology management, enabling Terminology Consumers to query, retrieve, expand, validate, and translate codes using a Terminology Repository. Consumers initiate transactions via HTTP GET requests, specifying resource types (ValueSet, CodeSystem, ConceptMap) and search parameters. The Repository responds with FHIR resources, constrained by SVCM profiles. For instance, a `Query Value Set` involves searching ValueSets using parameters like `_id`, `_lastUpdated`, `status`, `identifier`, `name`, `description`, `reference`, `title`, `url`, and `version`. `Expand Value Set` utilizes the `$expand` operation with parameters like `url`, `filter`, and `date` to retrieve a full list of codes. `Translate Code` leverages the `$translate` operation on ConceptMaps, requiring parameters like `url`, `source`, `code`, `system`, and `target` to map codes between value sets. Audit events, profiled for each transaction, capture details like the operation type, timestamp, involved agents (client and server), and the queried resource or parameters.

## Implementation Approach

SVCM implementation involves deploying a FHIR Terminology Repository that supports the defined profiles and operations. Terminology Consumers, such as EHR systems, interact with the Repository via RESTful APIs. Key workflows include:

1.  **Discovery:** Consumers query for available ValueSets, CodeSystems, and ConceptMaps using search parameters.
2.  **Retrieval:** Consumers retrieve specific resources using their IDs.
3.  **Expansion:** Consumers request an expanded list of codes from a ValueSet.
4.  **Lookup:** Consumers retrieve details for a specific code.
5.  **Validation:** Consumers validate if a code exists within a ValueSet or CodeSystem.
6.  **Translation:** Consumers translate codes between different code systems using ConceptMaps.

Implementers must ensure support for required search parameters, operations, and data formats (JSON/XML). Security considerations mandate the use of ATNA Secure Node or Secure Application for the Terminology Repository.

## Ecosystem Context

SVCM targets healthcare systems, including EHRs, CPOE systems, and other applications that require access to standardized terminologies. It relates to other IHE profiles like SVS (Sharing Value Sets) and CMAP (Concept Mapping), providing a FHIR-based alternative. It also aligns with broader HL7 FHIR standards for terminology services. The primary use cases involve ensuring consistent terminology usage across systems, supporting clinical decision support, and facilitating data exchange and analysis. SVCM is particularly relevant in jurisdictions or programs that mandate the use of standardized terminologies for reporting and interoperability.
