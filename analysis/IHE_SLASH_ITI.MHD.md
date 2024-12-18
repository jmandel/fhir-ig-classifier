# ITI.MHD: Analysis

## Core Purpose & Scope

The IHE IT Infrastructure Technical Framework Supplement: Mobile access to Health Documents (MHD) addresses the primary interoperability challenge of enabling resource-constrained devices, such as mobile applications, to participate in document sharing. It solves the clinical/business problem of accessing and exchanging health documents in environments where full-fledged XDS infrastructure may be impractical or unavailable. The intended scope is to define a simplified, RESTful API for publishing, discovering, and retrieving documents, specifically tailored for mobile and other constrained devices. It does not aim to reproduce the full scalability, flexibility, privacy, or security supported by a more robust XDS infrastructure. The boundaries are set around core document sharing functionalities, excluding metadata update operations.

## Technical Foundation

The technical foundation of MHD is built upon FHIR R4, leveraging core resources like `DocumentReference`, `List`, `Binary`, and `Bundle`.

**Core Profiles and Extensions:**

-   **DocumentReference:** Profiles for Minimal, Comprehensive, and UnContained metadata options, defining constraints for document metadata.
-   **List:** Profiles for Minimal and Comprehensive metadata options, used to represent both SubmissionSets and Folders.
-   **Bundle:** Profiles for Provide Document Bundle transactions, with variations for Minimal, Comprehensive, and UnContained metadata.
-   **AuditEvent:** Profiles for auditing various MHD transactions, based on IHE Basic Audit Log Patterns (BALP).
-   **Extensions:** `designationType` (on List), `sourceId` (on List), `intendedRecipient` (on List), `AuthorOrg` (on Practitioner), `Creation` (search parameter on DocumentReference).

**Notable Operations and Interactions:**

-   **Provide Document Bundle \[ITI-65]:** Transaction to submit a set of documents and metadata, analogous to XDS Provide and Register Document Set-b.
-   **Find Document Lists \[ITI-66]:** Transaction to query for Lists (SubmissionSets or Folders) based on various parameters.
-   **Find Document References \[ITI-67]:** Transaction to query for DocumentReferences based on various parameters.
-   **Retrieve Document \[ITI-68]:** Transaction to retrieve a document using a URL obtained from a DocumentReference.
-   **Simplified Publish \[ITI-105]:** Transaction to publish a single document with minimal metadata, expecting the recipient to create the SubmissionSet.
-   **Generate Metadata \[ITI-106]:** Operation to generate DocumentReference metadata from a provided document (CDA or FHIR Document).

**Key Terminology and Value Sets:**

-   **MHDlistTypes:** Defines codes for distinguishing between SubmissionSet and Folder List resources.
-   **DocumentReferenceStats:** Defines status codes for DocumentReference resources.
-   **AssociationType vs RelatesTo:** ConceptMap for mapping XDS Association types to FHIR DocumentReference.relatesTo codes.
-   **FhirStatus vs StatusCode:** ConceptMap for mapping FHIR status codes to ebRIM Status Type Codes.

**Significant Patterns and Constraints:**

-   Use of `contained` resources for specific metadata elements in Comprehensive profiles.
-   Support for UnContained References Option, allowing references to external resources instead of contained copies.
-   Mapping of XDS metadata attributes to FHIR resource elements.
-   Definition of RESTful interactions using HTTP methods (POST, GET) and FHIR search parameters.
-   Support for both JSON and XML encodings.

## Technical Essence

MHD defines a RESTful API for document sharing, leveraging FHIR Bundles to encapsulate transactions. A `Provide Document Bundle` transaction (ITI-65) uses a POST request with a Bundle containing a `SubmissionSet` (List with `code` = `submissionset`), one or more `DocumentReference` resources, and optionally `Folder` (List with `code` = `folder`) resources and `Binary` resources representing the documents. `DocumentReference` resources are profiled to carry XDS-equivalent metadata, with options for `Minimal`, `Comprehensive`, and `UnContained` metadata. The `Comprehensive` profile mandates `contained` resources for `author`, `authenticator`, and `sourcePatientInfo`, while `UnContained` allows external references. `DocumentReference.content.attachment.url` points to the document, either within the Bundle (as a `Binary` or FHIR Document Bundle) or externally. `Find Document Lists` (ITI-66) and `Find Document References` (ITI-67) use GET/POST searches on `List` and `DocumentReference` endpoints respectively, with parameters mapped to XDS query parameters. `Retrieve Document` (ITI-68) uses a GET request to the URL in `DocumentReference.content.attachment.url`. `Simplified Publish` (ITI-105) allows POSTing a single `DocumentReference` with the document in `attachment.data`. `Generate Metadata` (ITI-106) is a POST operation accepting a document (Binary or FHIR Document Bundle) and returning a generated `DocumentReference`. AuditEvents are defined for each transaction, based on BALP.

## Implementation Approach

Implementers would create FHIR servers supporting the defined profiles and operations. Document Source actors would construct Provide Document Bundle requests, populating the Bundle with appropriate resources based on the chosen metadata option. Document Recipient actors would validate the Bundle, persist the documents and metadata, and potentially translate the FHIR resources into an XDS representation if grouped with an XDS Document Source. Document Consumer actors would utilize the Find Document Lists, Find Document References, and Retrieve Document transactions to discover and access documents. Document Responder actors would implement these query and retrieval operations, potentially translating FHIR queries into XDS queries if grouped with an XDS Document Consumer. Security considerations include implementing ATNA audit logging and potentially grouping with IUA actors for authorization.

## Ecosystem Context

The MHD IG targets mobile applications, resource-constrained devices, and systems with simple integration needs as primary users. It is designed to interoperate with existing IHE Document Sharing profiles, particularly XDS, XCA, XDR, and XDM, allowing MHD actors to act as gateways or proxies to these infrastructures. It is also used by the MHDS Document Sharing solution. MHD is relevant to any jurisdiction or program implementing health information exchange, especially where mobile access is a priority. Primary use cases include medical devices submitting data, patient kiosks, PHR publishing, and mobile applications accessing EHRs or HIEs. It is part of the IHE IT Infrastructure domain and aligns with the broader IHE Document Sharing framework.
