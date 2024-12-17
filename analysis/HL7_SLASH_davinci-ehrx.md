# davinci-ehrx: Analysis

## Core Purpose & Scope

The Da Vinci Health Record Exchange (HRex) Implementation Guide (IG) serves as a foundational guide for multiple Da Vinci IGs, defining common FHIR profiles, operations, and guidance to facilitate interoperability among US payers, providers, and other covered entities. It primarily addresses the challenge of exchanging health data in a consistent and standardized manner across various use cases within the value-based care context. The IG solves key clinical and business problems related to data sharing for care coordination, quality measurement, risk adjustment, and member access. Its scope is intentionally broad, encompassing artifacts relevant to multiple Da Vinci use cases, but it remains focused on payer-provider data exchange within the US healthcare system, including interactions with patients/members.

## Technical Foundation

HRex is built on FHIR R4 and leverages US Core 3.1.1, 6.1.0, and 7.0.0 as its foundation, supporting USCDI v1, v3, and v4 respectively.

**Core Profiles and Extensions:**

-   **HRexPatientDemographics:** Constrains Patient for member matching, requiring name, gender, and birthDate, with optional identifier.
-   **HRexCoverage:** Constrains Coverage for member matching, requiring status, subscriberId, beneficiary, and payor.
-   **HRexConsent:** Defines consent for data sharing, specifying scope, patient, performer, source, policy, and provision details.
-   **HRexOrganization:** Extends US Core Organization to mandate an identifier (NPI preferred) and support additional identifier types (TIN, CLIA).
-   **HRexPractitionerRole:** Constrains US Core PractitionerRole to use HRex Organization and Practitioner.
-   **HRexProvenance:** Extends US Core Provenance to require `occurred[x]` and mandate retention of signatures.
-   **HRexTaskDataRequest:** Defines a Task profile for asynchronously requesting data, supporting both query-based and code-based requests.
-   **CoverageDavinciWellknownLocation:** Extension to store the location of a payer's .well-known file in the Coverage resource.

**Notable Operations and Interactions:**

-   **$member-match:** A custom operation to resolve a member's identity on a target payer's system using demographic and coverage information, optionally establishing consent.

**Key Terminology and Value Sets:**

-   **HRexTempCodes:** A temporary code system for concepts like data request types and endpoint codes.
-   **HRexConsentPolicy:** Defines consent policy URIs for regular and sensitive data access.
-   **HRexEndPointName:** Specifies endpoint names for Da Vinci services in the .well-known file.
-   **HRexTaskStatus:** Defines allowed status codes for HRex Task instances.
-   **NUCC-CareTeamMemberFunction:** ConceptMap for mapping between US Core 3.1.1 and 6.1.0 PractitionerRole.code value sets.

**Significant Patterns and Constraints:**

-   Emphasis on RESTful interactions and leveraging existing FHIR mechanisms like search and operations.
-   Support for multiple US Core versions to accommodate varying regulatory requirements.
-   Use of Task for asynchronous data requests with polling and subscription-based monitoring.
-   Definition of a .well-known file for endpoint discovery and payer identifier resolution.

## Technical Essence

HRex establishes a common framework for Da Vinci data exchange by defining a core set of profiles and a `$member-match` operation.  The `$member-match` operation accepts a `Parameters` resource containing a `HRexPatientDemographics` instance (with name, gender, birthDate), a `HRexCoverage` instance (with subscriberId, beneficiary, and payor), an optional `HRexCoverage` instance representing the requesting payer's coverage, and an optional `HRexConsent` instance. The operation returns a `Parameters` resource with the target payer's unique member identifier (UMB) and optionally a RESTful reference to the corresponding Patient resource.  `HRexConsent` mandates a policy URI from the `HRexConsentPolicy` value set, either "regular" or "sensitive", and requires a provision with a start and end date, and actors specifying the source (discloser) and recipient organizations.  `HRexTaskDataRequest` supports asynchronous data requests, using either a `data-query` input with a FHIR query string or a `data-code` input with a code or text description.  Task status is monitored via polling or subscription using the `Task Subscription Topic`.  Endpoint discovery is facilitated through a `.well-known/davinci-configuration` JSON file, whose location can be obtained via an X12 271 response or stored in the `Coverage` resource using the `CoverageDavinciWellknownLocation` extension. This file contains endpoint URLs for various Da Vinci services and a payer identifier, following the `HRexWellknownDefinition` logical model.

## Implementation Approach

Implementers of HRex will primarily focus on supporting the `$member-match` operation and the defined profiles. For `$member-match`, systems must be able to receive and process the input `Parameters`, perform member matching logic, and return the appropriate response. Consent management involves storing and evaluating consent parameters, potentially using a FHIR Consent resource.  For Task-based data requests, systems must support creating, updating, and querying Task resources, as well as handling polling or subscription-based notifications. Endpoint discovery requires implementing the X12 271 interaction or consuming the .well-known file location from the Coverage resource and parsing the JSON file to obtain relevant endpoints.  Systems must also be capable of handling multiple US Core versions and validating instances against the appropriate profiles.

## Ecosystem Context

HRex targets US payers, providers, and other covered entities involved in value-based care. It is closely related to other Da Vinci IGs, providing a foundation for their specific use cases. HRex aligns with US regulations and initiatives like USCDI and TEFCA. The primary use cases include payer-to-payer data exchange, provider access to payer data, and member-mediated data exchange.  Specific scenarios include:

-   A new payer obtaining a member's unique identifier from a previous payer to facilitate data exchange.
-   A provider requesting a patient's clinical data from a payer to support care coordination.
-   A SMART app requesting access to a member's data from a payer, using the .well-known file to discover the appropriate endpoints.
-   An EHR requesting data from a payer using Task, either through polling or subscription.
-   A payer requesting specific documents from a provider using Task and a document code.
