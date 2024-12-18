# ITI.mCSD: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The IHE ITI Mobile Care Services Discovery (mCSD) IG primarily addresses the challenge of discovering and querying care services resources in a federated, potentially multi-jurisdictional environment. It focuses on enabling mobile and lightweight applications to find and update information about organizations, locations, practitioners, healthcare services, and their relationships. It also addresses the discovery of endpoints for electronic communication, particularly within IHE Document Sharing environments.
-   **Key clinical/business problems it solves:** mCSD solves problems related to finding appropriate care providers, locating facilities, understanding service availability, and managing health system resources. It supports use cases such as provider lookup during emergencies, cross-jurisdictional site management, master facility list maintenance, and health information exchange (HIE) membership and endpoint discovery.
-   **Intended scope and boundaries:** The scope of mCSD includes defining RESTful transactions for querying and retrieving care services resources, as well as obtaining updates on changes to these resources. It focuses on the discovery aspect and explicitly excludes the creation, update, and deletion of resources, which are considered out of scope. It also provides guidance on representing organizational hierarchies and affiliations, particularly in the context of electronic communication endpoints.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** mCSD defines profiles for Organization, Location, Practitioner, PractitionerRole, HealthcareService, Endpoint, and OrganizationAffiliation. Specialized profiles exist for FacilityOrganization, FacilityLocation, JurisdictionOrganization, JurisdictionLocation, LocationDistance, EndpointDocShare, and OrganizationAffiliationDocShare.
    -   **Extensions:** Key extensions include `location-boundary-geojson` (for geographic boundaries), `ihe-endpointspecifictype` (for detailed endpoint types beyond FHIR core), `MCSDPurposeOfUse` (for specifying the purpose of use for Endpoints and Organizations), and an example hierarchy code system extension.
-   **Notable operations and interactions:**
    -   **Find Matching Care Services \[ITI-90\]:** A FHIR search operation on mCSD resources, supporting both GET and POST, with specific parameters defined for each resource type.
    -   **Request Care Services Updates \[ITI-91\]:** A FHIR history operation, using the `_since` parameter, to retrieve updates on mCSD resources.
    -   **Retrieve Care Services Resource:** An HTTP GET to retrieve a single Care Services Resource with a known resource identifier.
-   **Key terminology and value sets:**
    -   **MCSDOrganizationLocationTypes:** Defines codes for "facility" and "jurisdiction".
    -   **MCSDEndpointTypes:** Defines IHE-specific endpoint types, particularly for Document Sharing actors (e.g., XCA, XDS, MHD).
    -   **MCSDOrgAffTypes:** Defines types of OrganizationAffiliation, including "DocShare-federate" to indicate electronic accessibility.
    -   **MCSDEndpointIdentifierTypes:** Defines types for Endpoint identifiers, such as "HCID" (Home Community Identifier).
    -   **MCSDOrganizationIdentifierTypes:** Defines types for Organization identifiers, such as "HCID" and "AuthOrgId".
-   **Significant patterns and constraints:**
    -   Pairing of Location and Organization to define Facilities and Jurisdictions.
    -   Use of `managingOrganization` in Location to link to the paired Organization.
    -   Use of `partOf` in Organization and Location for hierarchical relationships.
    -   Use of OrganizationAffiliation to represent non-hierarchical relationships, particularly for HIE membership and electronic routing.
    -   Specific constraints on Endpoint resources for Document Sharing environments, including the use of `connectionType`, `extension:specificType`, `payloadType`, and `payloadMimeType`.
    -   Requirement for a `type` of "facility" or "jurisdiction" for Facility and Jurisdiction resources, respectively.
    -   Support for both JSON and XML formats.
    -   Audit Event logging for \[ITI-90\] and \[ITI-91\] transactions.

## Technical Essence

mCSD leverages FHIR R4 to enable federated discovery of care services. It defines a core set of profiles: `Organization`, `Location`, `Practitioner`, `PractitionerRole`, `HealthcareService`, `Endpoint`, and `OrganizationAffiliation`, with specialized profiles for facilities and jurisdictions.  `ITI-90` allows searching these resources using a rich set of parameters, including `:contains` and `:exact` modifiers for strings, and standard parameters like `_id` and `_lastUpdated`. `ITI-91` provides updates via the `_history` operation with `_since`. Facilities and Jurisdictions are represented by paired `Location` and `Organization` resources, linked via `Location.managingOrganization`. Hierarchies are modeled using `Organization.partOf` and `Location.partOf`.  `OrganizationAffiliation` models non-hierarchical relationships, with a specific code `DocShare-federate` indicating electronic accessibility via the affiliation's endpoint. `Endpoint` resources are profiled to support IHE Document Sharing, using `connectionType` from a custom value set (`MCSDEndpointTypesCoreDocShareVS`) and a detailed type in `extension:specificType` (`MCSDEndpointTypesVS`). `Endpoint.identifier` is recommended for Home Community IDs. Audit events are defined for both query and update transactions, capturing details of the request and response.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Care Services Selective Consumers query Care Services Selective Suppliers using \[ITI-90\] to find matching resources based on various criteria.
    -   Care Services Update Consumers use \[ITI-91\] to request updates from Care Services Update Suppliers, receiving a history of changes since a specified time.
    -   Selective Consumers may use Retrieve Care Services Resource to fetch individual resources by ID.
    -   Federated deployments involve multiple levels of Update Suppliers and Consumers, with Consumers potentially acting as Suppliers for higher levels.
    -   Endpoint discovery involves traversing Organization, OrganizationAffiliation, and Endpoint resources to find suitable electronic communication endpoints.
-   **Important requirements and guardrails:**
    -   Suppliers must publish a CapabilityStatement detailing supported search parameters and interactions.
    -   All references to resources in responses must be populated with accessible URLs.
    -   Facility and Jurisdiction resources must have a specific `type` code.
    -   Endpoint resources for Document Sharing must adhere to specific constraints.
    -   Audit events must be recorded for \[ITI-90\] and \[ITI-91\] transactions.
-   **Notable design choices and patterns:**
    -   Use of paired Location and Organization for Facilities and Jurisdictions.
    -   Explicit representation of electronic accessibility in OrganizationAffiliation using the "DocShare-federate" code.
    -   Detailed specification of Endpoint resources for Document Sharing, including the use of a custom extension for specific endpoint types.
    -   Guidance on traversing organizational structures to find suitable endpoints.

## Ecosystem Context

-   **Target systems and users:** mCSD targets systems involved in care services discovery, including Electronic Medical Records (EMRs), Health Information Exchanges (HIEs), Master Facility Lists (MFLs), Human Resources Information Systems (HRISs), and Logistics Management Information Systems (LMISs). Users include healthcare providers, patients, health system managers, and emergency responders.
-   **Relationship to other standards/IGs:** mCSD relates to IHE profiles such as Aggregate Data Exchange (ADX), Care Services Discovery (CSD), Health Provider Directory (HPD), and Mobile Alert Communication Management (mACM). It also references the HL7 FHIR standard and builds upon concepts from the IHE ITI Technical Framework. It complements the HL7 VhDir IG by providing a mechanism for representing and searching complex directory structures.
-   **Relevant jurisdictions or programs:** mCSD is relevant to jurisdictions implementing national or regional health information infrastructure, such as the US (with references to PEPFAR's DATIM and ONC TEFCA).
-   **Primary use cases and scenarios:**
    -   **Practitioner Query:** Finding a specialist based on location and specialty.
    -   **Provider Lookup During an Emergency Event:** Verifying credentials of healthcare workers during emergencies.
    -   **Cross-jurisdictional Site Management:** Reporting and managing data from multiple, potentially overlapping, jurisdictions.
    -   **Master Facility List:** Maintaining a central list of facilities with multiple hierarchies.
    -   **Health Information Exchange (HIE) Membership Discovery:** Identifying organizations participating in an HIE.
    -   **Health Information Exchange (HIE) Endpoint Discovery:** Locating electronic endpoints for exchanging clinical information within an HIE.
