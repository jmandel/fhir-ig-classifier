# ITI.PDQm: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The IHE Patient Demographics Query for Mobile (PDQm) Implementation Guide addresses the challenge of providing a lightweight, RESTful interface for querying patient demographics, specifically tailored for mobile and web-based applications. It tackles the interoperability issues related to accessing patient information efficiently and securely in resource-constrained environments.
-   **Key clinical/business problems it solves:** PDQm facilitates patient identification and data retrieval in various healthcare settings, such as bedside care, physician offices, and enterprise environments with multiple patient ID domains. It enables applications to establish patient context, import demographics, and obtain identifiers from different domains, streamlining workflows and improving data accuracy.
-   **Intended scope and boundaries:** The scope of PDQm is limited to querying patient demographics using FHIR. It defines two transactions: Mobile Patient Demographics Query [ITI-78] (based on FHIR Search and Read) and Patient Demographics Match [ITI-119] (based on FHIR $match operation). It does not cover patient record creation, updating, or linking, which are addressed by other IHE profiles.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `PDQm Patient Profile`: Constrains the FHIR Patient resource, requiring `identifier`, marking several elements as Must Support (e.g., `active`, `name`, `telecom`, `birthDate`, `address`), and forbidding `modifierExtension`. It also includes the `patient-mothersMaidenName` extension.
    -   `PDQm Match Input Parameters Profile`: Defines the input parameters for the ITI-119 transaction, requiring a Patient resource conforming to the `PDQm Patient Profile for $match Input`.
    -   `PDQm Match Output Bundle Profile`: Defines the output Bundle for ITI-119, containing Patient resources conforming to the `PDQm Patient Profile` and optionally OperationOutcome resources.
    -   `AuditPdqmQueryConsumer` and `AuditPdqmQuerySupplier`: Define audit event structures for ITI-78.
    -   `AuditPdqmMatchConsumer` and `AuditPdqmMatchSupplier`: Define audit event structures for ITI-119.
-   **Notable operations and interactions:**
    -   `Mobile Patient Demographics Query [ITI-78]`: Uses FHIR Search and Read interactions to query and retrieve patient demographics.
    -   `Patient Demographics Match [ITI-119]`: Uses the FHIR $match operation to identify patient records matching supplied demographics.
-   **Key terminology and value sets:**
    -   `AdministrativeGender` (from FHIR core)
    -   `match-grade` (from FHIR core)
-   **Significant patterns and constraints:**
    -   Mandates support for both GET and POST based searches in ITI-78.
    -   Specifies required combinations of search parameters for ITI-78 (e.g., `family` and `gender`).
    -   Defines handling of deprecated patient records.
    -   Requires support for JSON and XML encodings.
    -   Specifies audit event recording requirements.
    -   Provides guidance on handling access denied scenarios.

## Technical Essence

PDQm leverages FHIR R4 to enable patient demographic queries via two primary mechanisms: a search/read-based approach (ITI-78) and an MPI-style match operation (ITI-119). ITI-78 mandates support for specific search parameter combinations on the Patient resource (e.g., `family` and `gender`, `birthdate` and `family`), with required support for both GET and POST. The `PDQm Patient Profile` enforces the presence of `identifier`, forbids `modifierExtensions`, and adds `MustSupport` to core Patient elements. ITI-119 utilizes the `$match` operation, accepting a `PDQm Patient Profile for $match Input` instance and returning a Bundle of `PDQm Patient Profile` instances, each scored and graded for match quality. Audit events are defined for both transactions, capturing query parameters and, optionally, patient references. The Patient Demographics Supplier must support ITI-78, while ITI-119 is optional. The Patient Demographics Consumer must support at least one of the two transactions.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Patient Demographics Consumer initiates a query (ITI-78) or match (ITI-119) request to the Patient Demographics Supplier.
    -   Patient Demographics Supplier processes the request and returns a Bundle of matching Patient resources or an OperationOutcome in case of errors.
    -   Patient Demographics Consumer processes the response, potentially displaying results to the user or using the information for further processing.
-   **Important requirements and guardrails:**
    -   Patient Demographics Suppliers must support ITI-78; ITI-119 is optional.
    -   Patient Demographics Consumers must support at least one of ITI-78 or ITI-119.
    -   All Patient resources returned must conform to the `PDQm Patient Profile`.
    -   Audit events must be recorded for security and accountability.
    -   Responses must be provided in either JSON or XML format.
-   **Notable design choices and patterns:**
    -   Use of FHIR Search and Read for ITI-78 provides a standardized query mechanism.
    -   Use of FHIR $match operation for ITI-119 enables more sophisticated matching logic.
    -   Constraining the Patient resource ensures consistency and simplifies implementation.
    -   Requiring `identifier` on the Patient resource facilitates cross-system referencing.

## Ecosystem Context

-   **Target systems and users:** Mobile health applications, web-based EHR/EMR systems, medical devices, health portals, and any application requiring access to patient demographics in a lightweight manner. Users include clinicians, nurses, administrative staff, and potentially patients.
-   **Relationship to other standards/IGs:** PDQm is related to the IHE PDQ and PDQv3 profiles, providing similar functionality using FHIR. It can be integrated with other IHE profiles like MHD and IUA. It is also related to HL7 FHIR, specifically the Patient resource and search/match operations.
-   **Relevant jurisdictions or programs:** PDQm is applicable globally, with potential relevance to national and regional eHealth initiatives.
-   **Primary use cases and scenarios:**
    -   Patient information entry at bedside or in physician offices.
    -   Patient demographics query in enterprises with multiple patient ID domains.
    -   Retrieving patient records using known business identifiers.
    -   Establishing patient context in mobile applications by scanning a bracelet.
    -   Providing dynamic updates of patient demographic information in web-based applications.
    -   Enabling document sharing in MHD by resolving patient identifiers.
