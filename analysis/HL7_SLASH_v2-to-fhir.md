# v2-to-fhir: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of transforming HL7 v2 messages into FHIR resources, enabling the integration of legacy v2-based systems with modern FHIR-based systems. It provides a standardized approach to mapping v2 message structures, segments, data types, and vocabulary to their FHIR equivalents.
-   **Key clinical/business problems it solves:** The IG facilitates data exchange between systems using different HL7 standards, promoting semantic interoperability. It enables the use of v2 data in FHIR-based applications, supporting clinical decision support, data analytics, and care coordination. It also helps organizations transition from v2 to FHIR without requiring a complete overhaul of existing systems.
-   **Intended scope and boundaries:** The IG focuses on mapping HL7 v2 messages to FHIR R4. It covers commonly used v2 message structures (e.g., ADT, ORM, ORU, VXU, MDM, SIU) and their associated segments and data types. The initial scope supports the FHIR messaging paradigm but is not prescriptive of any particular FHIR workflow. The IG provides mappings for HL7 defined tables, user-defined tables, and external tables used in v2. It does not account for constraints applied in specific HL7 implementation guides or local variations not compliant with the base standard.

## Technical Foundation

-   **Core profiles and extensions:** The IG defines profiles for the HL7 FHIR ConceptMap, which describes the data maintained in Concept Maps for each of the message, segment, data type, and vocabulary mapping. It also defines a profile for the HL7 FHIR Bundle, which establishes the basic structure/content of an HL7 FHIR message resulting from an HL7 v2 message. The IG does not define any custom extensions.
-   **Notable operations and interactions:** The IG does not define any custom operations or interactions. It primarily focuses on the transformation of v2 messages into FHIR bundles.
-   **Key terminology and value sets:** The IG provides mappings from v2 tables to FHIR value sets. Key mappings include:
    -   v2 Table 0001 (Administrative Sex) to FHIR AdministrativeGender
    -   v2 Table 0002 (Marital Status) to FHIR v3 MaritalStatus
    -   v2 Table 0003 (Event Type) to FHIR EncounterStatus and v2 0003
    -   v2 Table 0004 (Patient Class) to FHIR EncounterStatus and v3 ActCode
    -   v2 Table 0006 (Religion) to FHIR v3 ReligiousAffiliation
    -   v2 Table 0007 (Admission Type) to FHIR v2 0007
    -   v2 Table 0127 (Allergen Type) to FHIR AllergyIntoleranceCategory, AllergyIntoleranceType, and v2 0127
    -   v2 Table 0128 (Allergy Severity) to FHIR AllergyIntoleranceCriticality and CodesystemReactionEventSeverity
    -   v2 Table 0190 (Address Type) to FHIR AddressType and AddressUse
    -   v2 Table 0203 (Identifier Type) to FHIR v2 0203
    -   v2 Table 0487 (Specimen Type) to FHIR v2 0487
    -   v2 Table 0488 (Specimen Collection Method) to FHIR v2 0488
-   **Significant patterns and constraints:** The IG uses CSV files to define the mappings, which are then used to generate FHIR ConceptMap resources. The mappings are organized by message, segment, data type, and table. The IG provides detailed guidance on how to handle cardinality mismatches, vocabulary mapping challenges, and other implementation considerations.

## Technical Essence

This IG provides a comprehensive framework for transforming HL7 v2 messages into FHIR R4 bundles using a series of detailed mappings defined in CSV files and represented as ConceptMap resources. Each v2 message type (e.g., ADT_A01, ORM_O01) is mapped to a FHIR Bundle profile, with each segment (e.g., PID, PV1, ORC, OBR) mapped to a specific FHIR resource (e.g., Patient, Encounter, ServiceRequest, DiagnosticReport). Data type mappings handle the transformation of v2 data types (e.g., CE, CX, XAD, XCN) to their FHIR equivalents (e.g., CodeableConcept, Identifier, Address, HumanName). Vocabulary mappings link v2 table values to FHIR value sets, addressing code system differences. Conditions are defined using a custom ANTLR grammar and FHIRPath to specify when a particular mapping should be applied. The IG emphasizes a declarative approach, with mappings defined in a structured, tabular format that can be processed by a transformation engine. The resulting FHIR bundle includes a MessageHeader resource derived from the MSH segment and Provenance resources that capture the origin of the message and the transformation process.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves receiving a v2 message, parsing it, applying the relevant message, segment, data type, and vocabulary mappings, and generating a FHIR bundle. The resulting bundle can then be used in various FHIR workflows, such as messaging or RESTful interactions.
-   **Important requirements and guardrails:** Implementers must ensure that all resources within the generated bundle have unique IDs. They must also handle cases where v2 elements have a larger maximum cardinality than their mapped FHIR attributes. Vocabulary mapping requires careful consideration of value set binding strengths and the potential need for local extensions.
-   **Notable design choices and patterns:** The IG uses a modular approach, with separate mappings for messages, segments, data types, and tables. This allows for reuse of mappings across different message types. The use of CSV files for defining mappings provides a human-readable and easily editable format. The IG also includes detailed implementation considerations to guide developers in addressing common challenges.

## Ecosystem Context

-   **Target systems and users:** The IG targets systems that need to exchange data between v2-based and FHIR-based environments. This includes hospitals, clinics, laboratories, public health agencies, and other healthcare organizations. Users include system developers, integrators, and informaticians.
-   **Relationship to other standards/IGs:** The IG is related to other HL7 standards, including v2 and FHIR. It complements existing FHIR implementation guides by providing a bridge between v2 and FHIR.
-   **Relevant jurisdictions or programs:** The IG is relevant to any jurisdiction or program that uses HL7 v2 and is transitioning to FHIR. It can be used to support national and regional health information exchange initiatives.
-   **Primary use cases and scenarios:** The IG supports various use cases, including:
    -   Integrating legacy v2 systems with FHIR-based applications
    -   Populating FHIR repositories with data from v2 messages
    -   Enabling clinical decision support and data analytics using v2 data
    -   Facilitating care coordination across different systems and organizations
    -   Supporting public health reporting and surveillance
    -   Migrating from HL7 v2 to FHIR
