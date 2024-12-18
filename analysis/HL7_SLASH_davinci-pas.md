# davinci-pas: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The Da Vinci Prior Authorization Support (PAS) IG primarily addresses the inefficient and burdensome process of obtaining prior authorizations (PAs) for healthcare services in the US. It tackles challenges related to manual data entry, lack of standardization, and limited real-time communication between providers and payers.
-   **Key clinical/business problems it solves:** PAS aims to reduce administrative burden for providers, accelerate the PA process, improve patient care by enabling faster treatment decisions, and reduce costs for both providers and payers through automation. It also aims to improve the accuracy and completeness of PA requests.
-   **Intended scope and boundaries:** The IG focuses on enabling direct submission of PA requests from Electronic Health Record (EHR) systems using FHIR, while remaining compliant with HIPAA X12 278 requirements. It supports PA for services, devices, and medications covered under medical benefits. It does not cover medications under pharmacy benefits handled by other processes (e.g., NCPDP SCRIPT). It also does not support all use cases of the X12 278, specifically excluding certain segments related to ambulance, chiropractic, DME, oxygen therapy, functional limitations, activities permitted, mental status, spinal manipulation, home oxygen, home health care, patient event transport, and dental services.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **PASClaim:** Core profile for submitting PA requests, based on the FHIR Claim resource. Includes extensions for X12 mappings like `CertificationType`, `LevelOfServiceCode`, `DiagnosisRecordedDate`, `ItemTraceNumber`, and others.
    -   **PASClaimResponse:** Core profile for receiving PA responses, based on the FHIR ClaimResponse resource. Includes extensions like `ReviewAction`, `ItemPreAuthIssueDate`, `ItemPreAuthPeriod`, and `ErrorElement`.
    -   **PASRequestBundle/PASResponseBundle:** Profiles for bundling Claim/ClaimResponse with referenced resources.
    -   **PASCommunicationRequest:** Profile for requesting additional information.
    -   **PASTask:** Profile for conveying PAS X12 278 Response information to CDex.
    -   **PASSubscription:** Profile for subscribing to updates on PA requests.
    -   **PASOrganization, PASPractitioner, PASCoverage, PASPatient:** Profiles for relevant entities involved in the PA process.
-   **Notable operations and interactions:**
    -   **Claim-submit:** Operation for submitting a PA request as a FHIR Bundle.
    -   **Claim-inquiry:** Operation for querying the status of a previously submitted PA request.
-   **Key terminology and value sets:**
    -   X12 value sets for various codes (e.g., `X12278RequestedServiceType`, `X12278DiagnosisCodes`, `X12278RejectReasonCodes`).
    -   AHA NUBC Revenue Codes.
    -   LOINC codes for attachments.
    -   Temporary code systems for PAS-specific concepts (e.g., `PASTempCodes`).
-   **Significant patterns and constraints:**
    -   Synchronous request-response pattern for initial PA submission.
    -   Asynchronous updates via Subscription for pended responses.
    -   Mapping between FHIR resources and X12 278/275 transactions.
    -   Use of extensions to capture X12-specific data elements.
    -   Requirement for intermediaries to handle X12 conversion for HIPAA compliance.
    -   Support for updating and canceling PA requests.

## Technical Essence

The PAS IG defines a FHIR-based mechanism for prior authorization, centered around `Claim` and `ClaimResponse` profiles tailored for PA requests and responses.  `PASClaim` instances, bundled with referenced resources like `Patient`, `Coverage`, and `ServiceRequest` in a `PASRequestBundle`, are submitted via the `Claim-submit` operation.  Responses are returned as `PASClaimResponse` instances within a `PASResponseBundle`, indicating approval, denial, or pending status.  X12 data elements are captured using extensions like `CertificationType` and `ReviewAction`.  Intermediaries translate between FHIR Bundles and X12 278 transactions, ensuring HIPAA compliance.  `Claim-inquiry` enables status checks, while `PASSubscription` facilitates updates on pended requests.  `PASTask` is used to request additional information, leveraging CDex for document exchange.  The IG mandates specific value sets for coding diagnoses, services, and review actions, primarily drawing from X12 and other industry-standard terminologies.  Crucially, the design assumes a synchronous initial exchange, with asynchronous updates for pended responses, and supports workflows for updating and canceling requests.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  Provider system determines PA is required (optionally using CRD).
    2.  Provider system gathers necessary information (optionally using DTR).
    3.  Provider system constructs a `PASRequestBundle` containing a `PASClaim` and referenced resources.
    4.  Provider system invokes the `Claim-submit` operation on an intermediary's endpoint.
    5.  Intermediary translates the FHIR Bundle to X12 278, submits it to the payer, receives the X12 278 response, and translates it back to a `PASResponseBundle`.
    6.  Intermediary returns the `PASResponseBundle` to the provider system.
    7.  If the response is pended, the provider system subscribes to updates using `PASSubscription`.
    8.  Provider system can query the status using `Claim-inquiry`.
    9.  Provider system can update or cancel the PA request using a modified `Claim-submit`.
-   **Important requirements and guardrails:**
    -   Support for synchronous `Claim-submit` operation with a maximum 15-second response time.
    -   Support for `PASSubscription` for asynchronous updates.
    -   Compliance with US Core profiles where applicable.
    -   Adherence to specified value sets for coding.
    -   Ability to handle X12 mappings via extensions.
    -   Support for conveying both full and differential updates to PA requests.
-   **Notable design choices and patterns:**
    -   Use of FHIR Bundle for packaging requests and responses.
    -   Leveraging existing FHIR operations (`Claim-submit`, `Claim-inquiry`).
    -   Employing a subscription mechanism for updates.
    -   Defining specific profiles for each resource involved in the PA process.
    -   Using extensions to capture X12-specific data.

## Ecosystem Context

-   **Target systems and users:** EHR systems, practice management systems, pharmacy systems (for medical benefit drugs), payers, intermediaries, and clearinghouses. Users include clinicians, administrative staff, and payer personnel.
-   **Relationship to other standards/IGs:**
    -   Relies on FHIR R4.
    -   Builds upon US Core 3.1.1, 6.1.0, and 7.0.0.
    -   Integrates with Da Vinci CRD and DTR IGs for determining PA requirements and gathering documentation.
    -   References the Subscriptions R5 Backport IG.
    -   Aligns with HIPAA X12 278/275 transaction standards.
    -   References the Da Vinci HRex IG for security and privacy.
-   **Relevant jurisdictions or programs:** Primarily the United States healthcare system, particularly within the context of value-based care initiatives and CMS regulations.
-   **Primary use cases and scenarios:**
    -   Submitting a PA request for a referral, medical service, device, or medication.
    -   Receiving a real-time or pended response to a PA request.
    -   Checking the status of a pended PA request.
    -   Updating or canceling a previously submitted PA request.
    -   Requesting additional information to support a PA request.
    -   Receiving notifications about changes to a PA request's status.
