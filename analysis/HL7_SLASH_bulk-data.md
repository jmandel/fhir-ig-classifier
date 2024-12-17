# bulk-data: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of efficiently exporting large volumes of FHIR data from a FHIR server to a client system. It tackles the limitations of existing FHIR APIs, which are inefficient for large-scale data transfers, by defining a standardized approach for bulk data export.
-   **Key clinical/business problems it solves:** It enables efficient data sharing for various use cases, including populating research databases, calculating quality measures, closing gaps in care by displaying claims data in EHRs, backing up FHIR servers, and exporting terminology or provider data. It also supports public health surveillance and electronic case reporting.
-   **Intended scope and boundaries:** The IG focuses on defining the APIs for requesting, monitoring, and retrieving bulk data exports. It does not cover legal frameworks for data sharing, real-time data exchange, data transformations, patient matching, or FHIR group management.

## Technical Foundation

-   **Core profiles and extensions:** The IG does not define specific profiles but references the use of the Patient Compartment as a guide for resources to be returned in Patient and Group level exports. It defines a custom extension to be used in the Complete Status response to allow for server-specific information.
-   **Notable operations and interactions:** The IG defines a set of operations based on the FHIR Asynchronous Request Pattern:
    -   **Kick-off Request:** Initiates the export process (`$export`, `Patient/$export`, `Group/[id]/$export`).
    -   **Status Request:** Allows clients to poll for the status of the export.
    -   **Delete Request:** Enables clients to cancel an export or signal that files can be deleted.
    -   **Output File Request:** Retrieves the generated data files.
-   **Key terminology and value sets:**
    -   **IncludeAssociatedDataCodeSystem/ValueSet:** Defines codes for the `includeAssociatedData` parameter, allowing clients to specify the inclusion of associated data like Provenance resources.
-   **Significant patterns and constraints:**
    -   Uses the FHIR Asynchronous Request Pattern for managing long-running export operations.
    -   Employs newline-delimited JSON (NDJSON) as the primary output format.
    -   Recommends the use of SMART Backend Services Authorization for access management.
    -   Defines specific requirements for handling attachments and deleted resources.

## Technical Essence

This IG defines a FHIR-based bulk data export mechanism leveraging the Asynchronous Request Pattern. Clients initiate exports via `$export` operations on the system, `Patient`, or `Group` level, optionally specifying parameters like `_outputFormat` (defaulting to `application/fhir+ndjson`), `_since`, `_type`, `_elements`, `patient`, `includeAssociatedData`, and `_typeFilter`. Servers respond with a `202 Accepted` and a `Content-Location` header pointing to a status endpoint. Clients poll this endpoint, receiving `202 Accepted` while processing and `200 OK` upon completion, along with a JSON manifest. This manifest includes `transactionTime`, `request`, `requiresAccessToken`, `output` (array of file URLs with `type` and optional `count`), `deleted` (array of file URLs with transaction bundles for deleted resources), `error` (array of file URLs with `OperationOutcome` resources), and an optional `extension` object for server-specific data. Clients then retrieve files via GET requests to the provided URLs, potentially requiring authorization tokens. The `includeAssociatedData` parameter, bound to a custom ValueSet, controls the inclusion of related resources like Provenance, while `_typeFilter` allows for finer-grained filtering using FHIR search queries.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  Client initiates a bulk data export request (GET or POST).
    2.  Server responds with a status URL.
    3.  Client polls the status URL, handling in-progress, error, and complete responses.
    4.  Upon completion, the client retrieves data files using URLs from the manifest.
    5.  Client may send a DELETE request to the status URL to cancel or clean up.
-   **Important requirements and guardrails:**
    -   All exchanges must be secured using TLS 1.2 or later.
    -   Servers should implement OAuth 2.0 with SMART Backend Services Authorization.
    -   Servers should handle rate limiting and denial-of-service risks.
    -   Servers must limit data returned to authorized resources.
    -   Servers should provide clear capability documentation.
-   **Notable design choices and patterns:**
    -   Use of NDJSON for efficient data streaming.
    -   Leveraging the FHIR Asynchronous Request Pattern for managing long-running operations.
    -   Providing a mechanism for conveying deleted resources.
    -   Allowing servers to include custom extensions in the completion response.

## Ecosystem Context

-   **Target systems and users:** EHR systems, data warehouses, research databases, payers, ACOs, public health agencies, and any system needing to export or consume large FHIR datasets. Developers of backend services and FHIR resource servers are the primary users of this IG.
-   **Relationship to other standards/IGs:**
    -   Builds upon HL7 FHIR, NDJSON, TLS, OAuth 2.0, and SMART Backend Services Authorization.
    -   References the US Core Implementation Guide and the Blue Button Implementation Guide as examples of potential data sets.
-   **Relevant jurisdictions or programs:** While not explicitly tied to a specific jurisdiction, the IG mentions the US Core Data for Interoperability and references the Blue Button program, suggesting relevance to the US healthcare ecosystem.
-   **Primary use cases and scenarios:**
    -   Exporting US Core Data for Interoperability.
    -   Exporting a Common Financial Data Set (e.g., ExplanationOfBenefit, Coverage, Claim).
    -   Exporting terminology data (CodeSystem, ValueSet).
    -   Exporting provider data (Practitioner, Location, Organization).
    -   Public health surveillance and electronic case reporting.
