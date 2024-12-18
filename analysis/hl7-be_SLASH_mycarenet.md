# mycarenet: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the interoperability challenges related to the exchange of electronic agreement requests and responses within the Belgian healthcare system, specifically for physiotherapy and speech therapy services. It focuses on standardizing the format and content of these requests and responses to ensure seamless communication between healthcare providers and insurance organizations.
-   **Key clinical/business problems it solves:** The IG solves the problem of inefficient and error-prone paper-based processes for managing agreements between healthcare providers and insurers. It streamlines the agreement process, reduces administrative burden, improves accuracy, and enables faster processing of requests and responses. It also facilitates better tracking and management of agreements.
-   **Intended scope and boundaries:** The scope of this IG is limited to the electronic agreement flows for physiotherapy and speech therapy within the MyCareNet platform in Belgium. It defines the structure and content of FHIR resources used in these flows, including Claim, ClaimResponse, Bundle, MessageHeader, ServiceRequest, and others. It does not cover other types of healthcare services or other aspects of the MyCareNet platform.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** BeMyCareNetEagreementClaim, BeMyCareNetEagreementClaimResponse, BeMyCareNetEagreementDemand, BeMyCareNetEagreementDemandReply, BeMyCareNetEagreementServiceRequest, BeMyCareNetMessageHeader, BeMyCareNetOperationOutcome, BeMyCareNetCoverage.
    -   **Extensions:** BeExtItemPatientFee, BeExtItemReimbursement, BeExtSystem.
-   **Notable operations and interactions:** The IG defines a RESTful interaction pattern using FHIR Bundles to encapsulate messages for agreement requests, responses, and consultations. Key interactions include submitting an agreement demand (Bundle with MessageHeader, Claim, ServiceRequest, etc.), receiving a decision (Bundle with MessageHeader, ClaimResponse), and consulting existing agreements (Bundle with MessageHeader, Parameters).
-   **Key terminology and value sets:**
    -   **Value Sets:** BeEAgreementAdjudicationReason, BeMessageEAgreement, BeProductOrServiceNihdiEAgreement, BeVSDecisionValues, BeVSEAgreementErrors, BeVSHolderCode1, BeVSHolderCode2.
    -   **Code Systems:** MyCareNetAgreementErrors, MyCareNetAgreementTypes, MyCareNetAnnexTypes, MyCareNetDecisionValues, MyCareNetMessageEvents, MyCareNetRefusalValues, NIHDIPhysiotherapyPathologySituationCode.
-   **Significant patterns and constraints:** The IG enforces specific constraints on resource elements, such as requiring specific code systems for certain fields (e.g., agreement types, decision values) and mandating the presence of certain elements (e.g., patient, provider, insurer). It also defines specific search parameters for querying ClaimResponses. Invariant `BeInvCT1CT2` ensures Coverage resources contain both CT1 and CT2 values. Invariant `mcn-2` mandates supportingInfo and contained resources if an identifier is absent in a ServiceRequest.

## Technical Essence

This IG enables electronic agreement workflows for physiotherapy and speech therapy in Belgium via FHIR resources, primarily Claim and ClaimResponse, conveyed within Bundles. A typical flow involves a provider submitting a `BeMyCareNetEagreementDemand` Bundle containing a `BeMyCareNetMessageHeader` (with `message-events` codes), a `BeMyCareNetEagreementClaim` (profiled for `kine` or `logo` with `use` set to `preauthorization` and `type` to `professional`), a `BeMyCareNetEagreementServiceRequest` (referencing a `BeMyCareNetEagreementServiceRequestBinary` for supporting documents), and relevant Patient, Practitioner, PractitionerRole, and Organization resources. The insurer responds with a `BeMyCareNetEagreementDemandReply` Bundle, including a `BeMyCareNetMessageHeader`, a `BeMyCareNetEagreementClaimResponse` (with `preAuthRef` and `preAuthPeriod` for approved agreements, `addItem` for detailed adjudication, and `outcome` indicating the decision), and potentially an `BeMyCareNetOperationOutcome` for errors. The `subType` element in both Claim and ClaimResponse, using the `agreement-types` codesystem, specifies the type of agreement (e.g., `physiotherapy-fa`, `speechtherapy-assessment`).  Consultation of agreements is performed using a `BeMyCareNetEagreementConsult` Bundle with a Parameters resource specifying search criteria, and the response is a `BeMyCareNetEagreementConsultReply` Bundle containing a searchset Bundle of matching ClaimResponse resources.

## Implementation Approach

-   **Critical workflows and interactions:** The core workflow involves the submission of an eAgreement demand by a healthcare provider, followed by a response from the insurer indicating approval, rejection, or a request for more information. Another critical workflow is the consultation of existing eAgreements.
-   **Important requirements and guardrails:** Implementations must adhere to the defined FHIR profiles and extensions, ensuring that required elements are present and that appropriate code systems and value sets are used. They must also handle the specific error codes defined in the `BeMyCareNetOperationOutcome` profile.
-   **Notable design choices and patterns:** The use of FHIR Bundles to encapsulate messages and the reliance on standard FHIR resources like Claim and ClaimResponse are notable design choices. The IG also leverages extensions to capture MyCareNet-specific data elements.

## Ecosystem Context

-   **Target systems and users:** The target systems are the MyCareNet platform and the systems used by healthcare providers (e.g., hospitals, clinics) and insurance organizations in Belgium. The target users are healthcare providers (physiotherapists, speech therapists), their administrative staff, and insurance organization personnel involved in processing agreement requests.
-   **Relationship to other standards/IGs:** This IG builds upon the Belgian eHealth FHIR specifications and leverages standard FHIR resources and interactions. It is specifically designed for the MyCareNet platform and its requirements.
-   **Relevant jurisdictions or programs:** This IG is relevant to the Belgian healthcare system and is specifically designed for use within the MyCareNet program.
-   **Primary use cases and scenarios:** The primary use cases are the electronic submission and processing of agreement requests for physiotherapy and speech therapy services, as well as the consultation of existing agreements. Scenarios include a physiotherapist requesting an agreement for a patient's treatment, an insurer approving or rejecting the request, and a provider querying for all agreements related to a specific patient.
