# ITI.PIXm: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The IHE ITI Patient Identifier Cross-referencing for Mobile (PIXm) profile addresses the challenge of cross-referencing patient identifiers across different healthcare systems, particularly for mobile and lightweight applications. It enables these applications to query a central Patient Identifier Cross-reference Manager for a patient's identifiers in various domains, facilitating data exchange and patient care coordination.
-   **Key clinical/business problems it solves:** PIXm solves the problem of fragmented patient data spread across disparate systems that use different patient identifiers. It enables a consolidated view of patient identifiers, improving patient matching accuracy, reducing medical errors, and streamlining clinical workflows. It also supports patient identity management, including updates and resolution of duplicate records.
-   **Intended scope and boundaries:** PIXm focuses on providing RESTful transactions for querying and managing patient identifiers. It is specifically designed for mobile and lightweight applications. It does not define the internal logic or algorithms used by the Patient Identifier Cross-reference Manager for cross-referencing. It also does not address the creation of "golden records" or verified patient identities, although it acknowledges that such functionality could be added as a business extension. PIXm is intended to be used in conjunction with other IHE profiles like PIX, PIXV3, or PMIR for patient identity feed and update notifications.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `PIXmPatient`: Defines constraints on the Patient resource for the Patient Identity Feed, requiring elements like identifier, name, telecom, gender, birthDate, address, and managingOrganization.
    -   `PIXmQueryParametersIn`: Defines input parameters for the `$ihe-pix` operation (sourceIdentifier, targetSystem).
    -   `PIXmQueryParametersOut`: Defines output parameters for the `$ihe-pix` operation (targetId, targetIdentifier).
    -   Several AuditEvent profiles for auditing ITI-83 and ITI-104 transactions, based on IHE Basic Audit.
-   **Notable operations and interactions:**
    -   `$ihe-pix` operation: A custom FHIR operation used to query the Patient Identifier Cross-reference Manager. It takes a `sourceIdentifier` and optional `targetSystem` parameters and returns a Parameters resource containing `targetId` and `targetIdentifier` elements.
    -   Patient Identity Feed FHIR \[ITI-104\]: Uses HTTP conditional update (PUT) to add or revise patient information, resolve duplicate patients, and optionally remove patients.
-   **Key terminology and value sets:**
    -   Relies on standard FHIR terminology and value sets.
    -   Uses IHE IT Infrastructure Technical Framework's definitions for assigning authority and identifier type.
-   **Significant patterns and constraints:**
    -   Uses RESTful interactions with HTTP GET for queries and HTTP PUT/DELETE for patient identity feeds.
    -   Employs FHIR Parameters resource for both input and output of the `$ihe-pix` operation.
    -   Defines specific error handling using OperationOutcome resources for scenarios like "source identifier not found," "source domain not recognized," and "target domain not recognized."
    -   Mandates the use of `system` and `value` in identifiers, and `assigner.display` when an assigning authority name is provided.

## Technical Essence

The PIXm IG defines a minimalist, RESTful approach to patient identifier cross-referencing, centered around a custom `$ihe-pix` operation. A client initiates a query by sending an HTTP GET to `[base]/Patient/$ihe-pix` with a mandatory `sourceIdentifier` (formatted as `system|value`) and optional `targetSystem` parameters. The Patient Identifier Cross-reference Manager, upon receiving the request, searches its internal registry (populated via separate feed mechanisms like ITI-104) and returns a FHIR Parameters resource. This resource contains `targetIdentifier` elements (each with a mandatory `system` and `value`, and `assigner.display` if available) representing business identifiers, and `targetId` elements (each a `Reference(Patient)`) representing FHIR Patient resources, all corresponding to the queried `sourceIdentifier`. Error handling is conveyed through specific HTTP status codes (404, 400, 403) and detailed OperationOutcome resources. The ITI-104 transaction utilizes conditional HTTP PUT on the Patient resource for adding, revising, and resolving patient records, with an optional DELETE for removal, all based on the `identifier` parameter. Audit logging for both transactions is meticulously specified using extensions of the IHE Basic Audit profile, capturing details like client/server roles, patient identifiers, and query parameters.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Patient Identity Source feeds patient data to the Patient Identifier Cross-reference Manager using ITI-104.
    -   Patient Identifier Cross-reference Consumer queries the Manager using the `$ihe-pix` operation (ITI-83).
    -   The Manager processes the query and returns matching identifiers.
    -   Audit events are logged for all interactions.
-   **Important requirements and guardrails:**
    -   Strict adherence to the defined input and output parameters for the `$ihe-pix` operation.
    -   Proper handling of error conditions and returning appropriate OperationOutcome resources.
    -   Implementation of audit logging as per the specified AuditEvent profiles.
    -   For ITI-104, support for conditional update and, optionally, conditional delete.
    -   Security considerations, including potential grouping with ATNA and IUA actors.
-   **Notable design choices and patterns:**
    -   Use of a custom FHIR operation for a focused, simplified interface.
    -   Leveraging existing FHIR infrastructure (Parameters, OperationOutcome, RESTful interactions).
    -   Clear separation of concerns between the query mechanism (PIXm) and the data feed mechanism (e.g., PIX, PIXV3, PMIR).

## Ecosystem Context

-   **Target systems and users:** Mobile applications, lightweight browser-based applications, and any system needing to resolve patient identifiers across different domains.
-   **Relationship to other standards/IGs:**
    -   Closely related to IHE PIX and PIXV3 profiles, providing a RESTful alternative to their query transactions.
    -   Can be used in conjunction with IHE PMIR for patient identity feed.
    -   References HL7 FHIR R4 as the underlying standard.
    -   Can be grouped with ATNA for secure node authentication and IUA for user authorization.
-   **Relevant jurisdictions or programs:** Not explicitly tied to any specific jurisdiction or program but broadly applicable in healthcare settings where patient identifier cross-referencing is needed.
-   **Primary use cases and scenarios:**
    -   Retrieving a patient's medical record number (MRN) in a hospital system based on an identifier from an external system (e.g., ambulance's mobile care system).
    -   Updating patient demographic information in the cross-reference manager.
    -   Resolving duplicate patient records.
    -   Generally, any scenario where an application needs to find corresponding patient identifiers across different systems.
