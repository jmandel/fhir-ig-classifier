# au-fhir-pd: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of locating and addressing healthcare providers and services for secure messaging in an Australian context. It focuses on enabling consistent search and retrieval of provider directory information to facilitate secure communication.
-   **Key clinical/business problems it solves:** It solves the problem of disparate and inconsistent provider directories by providing a standardized way to discover and access provider information, including secure messaging endpoints. This improves care coordination, reduces administrative burden, and enhances the efficiency of healthcare communication.
-   **Intended scope and boundaries:** The scope is limited to provider directory services for secure messaging. It defines a subset of FHIR resources and interactions necessary for this purpose, including organizations, practitioners, practitioner roles, healthcare services, locations, and endpoints. It does not cover broader directory services or other aspects of healthcare communication beyond secure messaging.

## Technical Foundation

-   **Core profiles and extensions:** The IG defines profiles for Organization, Practitioner, PractitionerRole, HealthcareService, Location, and Endpoint. It mandates specific identifier types for each resource, such as HPI-O for organizations and HPI-I for practitioners. It also defines new profiles for Vendor Directory Identifier and Secure Messaging Delivery Target Identifier. It references extensions from the AU Base IG, such as `au-receivingfacility` and `au-receivingapplication` for Endpoint.
-   **Notable operations and interactions:** The IG specifies support for `read` and `search` interactions at the instance and type levels, respectively. It defines mandatory and optional search parameters for each resource type, including chained searches and includes. It also specifies requirements for paging and bundle result support.
-   **Key terminology and value sets:** The IG defines a value set for Australian Service Interfaces and a code system for Australian Endpoint Payload Types. It also references value sets and code systems from the AU Base IG and the core FHIR specification.
-   **Significant patterns and constraints:** The IG mandates the presence of at least one known identifier type for each resource. It also specifies constraints on the use of endpoints, requiring that PractitionerRoles and HealthcareServices explicitly reference their associated endpoints. It defines specific search parameter support requirements for each resource type.

## Technical Essence

This IG enables a FHIR-based provider directory for secure messaging in Australia by profiling core resources like Organization, Practitioner, PractitionerRole, HealthcareService, Location, and Endpoint to carry essential identification and contact data. It mandates specific identifier types (e.g., HPI-O, HPI-I, Medicare Provider Number) and introduces new profiles for Vendor Directory Identifier and Secure Messaging Delivery Target Identifier. Interactions are limited to `read` and `search`, with detailed search parameter requirements, including chained searches (e.g., `PractitionerRole?location.address-postalcode=3010`) and includes (e.g., `_include=PractitionerRole:endpoint`). Endpoint resources are central, carrying secure messaging details like connection type (using the `smd-interfaces` code system) and payload type (using the `endpoint-payload-type` code system), along with extensions like `au-receivingfacility`. The IG mandates that PractitionerRoles and HealthcareServices directly reference their associated Endpoints, ensuring clear addressing for secure messages. Paging is required for large result sets, and specific bundle structures are defined.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves searching for PractitionerRoles or HealthcareServices based on various criteria (e.g., name, specialty, location, identifier) and retrieving associated Endpoint information for secure messaging. The IG also supports direct Endpoint lookup by secure messaging target identifier.
-   **Important requirements and guardrails:** Implementers must ensure that all resources conform to the defined profiles and include at least one mandatory identifier. They must also support the specified search parameters and interactions, including paging and bundle result handling. The IG provides specific guidance on the relationship between PractitionerRoles, HealthcareServices, Locations, and Endpoints.
-   **Notable design choices and patterns:** The IG emphasizes the use of PractitionerRole and HealthcareService as the primary searchable entities, with relationships to other resources. It also highlights the importance of Endpoint resources for secure messaging addressing. The use of chained searches and includes allows for complex queries and efficient retrieval of related information.

## Ecosystem Context

-   **Target systems and users:** The target systems are practice management systems, clinical information systems, and secure messaging clients. The users are healthcare providers, administrators, and other stakeholders involved in secure messaging.
-   **Relationship to other standards/IGs:** The IG builds upon the AU Base IG and the core FHIR specification. It also references the Australian Diagnostics and Referral Messaging guidance for HL7 V2 formatting.
-   **Relevant jurisdictions or programs:** The IG is specific to the Australian healthcare context and is relevant to programs and initiatives related to secure messaging and provider directories.
-   **Primary use cases and scenarios:** The primary use case is to enable secure messaging between healthcare providers by providing a standardized way to locate and address recipients. This includes scenarios such as sending referrals, discharge summaries, and other clinical documents. The IG also supports the federation of multiple directory services to provide a unified view of provider information.
