# carin-rtpbc: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG) addresses the interoperability challenges surrounding real-time pharmacy benefit checks (RTPBC) from a **consumer perspective**. It focuses on enabling patients to understand their medication costs and insurance coverage in real-time. The IG solves key clinical/business problems by providing patients with transparent, accurate, and timely information about their out-of-pocket costs, coverage restrictions, and potential alternatives for prescribed medications. The intended scope is limited to medications covered under the **pharmacy benefit** portion of a patient's health insurance within the **United States**, excluding medications administered in hospital or medical procedure settings. It also initially excludes compounded medications.

## Technical Foundation

The technical foundation of this IG is built upon HL7 FHIR R4.

**Core Profiles & Extensions:**

-   **Claim (rtpbc-request-claim):** Represents the RTPBC request, using the "predetermination" mode.
-   **ClaimResponse (rtpbc-response-claimresponse):** Represents the RTPBC response, including cost, coverage, and alternative options.
-   **Patient (rtpbc-patient):** Conveys limited patient identifying information.
-   **Coverage (rtpbc-coverage):** Conveys the patient's pharmacy benefit coverage IDs.
-   **MedicationRequest (rtpbc-medicationrequest):** Conveys prescription information relevant to pricing and coverage.
-   **Organization (rtpbc-pharmacy-organization):** Represents a pharmacy.
-   **Practitioner:** Uses the US Core Practitioner profile to identify the prescriber.
-   **Bundle (rtpbc-request-bundle, rtpbc-response-bundle):** Structures the request and response messages.
-   **MessageHeader (rtpbc-request-messageheader, rtpbc-response-messageheader):** Used for messaging with $process-message.
-   **isAlternative (rtpbc-isAlternative):** Extension to indicate alternative fulfillment options in ClaimResponse.addItem.
-   **benefitRestriction (rtpbc-benefitRestriction):** Extension to convey benefit restrictions in ClaimResponse.

**Notable Operations & Interactions:**

-   **$process-message:** Operation used to submit the RTPBC request as a Bundle and receive the response as a Bundle.

**Key Terminology & Value Sets:**

-   **RTPBC Billing Unit:** Defines units for medication billing.
-   **RTPBC Country Code:** Specifies country codes.
-   **RTPBC Benefit Restriction:** Defines consumer-friendly benefit restriction codes (e.g., "covered", "not-covered", "covered-with-pa").
-   **RTPBC Error Code:** Uses NCPDP Reject Codes to communicate processing errors.
-   **RTPBC Event Type:** Defines event types for message headers.
-   **RTPBC Patient Pay Type:** Specifies different patient cost types (e.g., copay, coinsurance, cash price).
-   **RTPBC Pharmacy Type:** Uses NCPDP Pharmacy Type codes.
-   **RTPBC Prescribable Product Code:** Defines codes for specifying medication products (NDC11 or RxNorm).
-   **RTPBC State and Province Code:** Specifies state and province codes.

**Significant Patterns & Constraints:**

-   The IG leverages the "predetermination" mode of Claim and ClaimResponse resources.
-   It emphasizes the use of representative NDC11 identifiers for medications.
-   Responses are expected to be synchronous and reflect "point-in-time" information.
-   The IG mandates consistency between implementations of consumer and provider-focused benefit check processes.

## Technical Essence

This IG defines a consumer-focused real-time pharmacy benefit check using FHIR R4's `$process-message` operation. A request Bundle, led by a MessageHeader focusing on a profiled Claim resource, includes Patient, MedicationRequest, Coverage (when submitting to an insurer), Practitioner, and Organization (pharmacy) resources. The Claim uses "predetermination" mode, with `Claim.type` fixed to "pharmacy". Medications are identified using representative NDC11 or specific RxNorm codes. The response Bundle, also led by a MessageHeader, contains a ClaimResponse with `ClaimResponse.type` fixed to "pharmacy". The `ClaimResponse.item` composite details the requested medication's adjudication, while `ClaimResponse.addItem` provides alternatives, flagged by the `rtpbc-isAlternative` extension. The `rtpbc-benefitRestriction` extension conveys coverage status using a defined value set. Patient costs are detailed using codes from the `rtpbc-patient-pay-type` value set. Errors are communicated via `ClaimResponse.error` using NCPDP Reject Codes or through an OperationOutcome for system errors.

## Implementation Approach

The IG is designed to be implemented using a synchronous request-response pattern via the `$process-message` operation. Client systems (consumer apps) must gather patient, prescription, and coverage information, then construct a Bundle containing the profiled resources. Responding systems (insurers/PBMs or pricing sources) must process the request, determine patient costs and coverage, identify alternatives, and return a Bundle containing the ClaimResponse and supporting resources. Key requirements include:

-   Support for representative NDC11 medication identifiers.
-   Use of the defined benefit restriction and patient pay type codes.
-   Synchronous, real-time responses.
-   Consistency with provider-focused RTPBC implementations where applicable.
-   Handling of errors using NCPDP Reject Codes or OperationOutcome.

## Ecosystem Context

**Target Systems & Users:**

-   **Consumer applications** used by patients.
-   **Insurers/PBMs** managing pharmacy benefits.
-   **Medication pricing information sources.**

**Relationship to Other Standards/IGs:**

-   Adapts the NCPDP Real-time Prescription Benefit (RTPB) standard for consumer use.
-   Leverages US Core profiles for Practitioner and Organization.

**Relevant Jurisdictions or Programs:**

-   United States

**Primary Use Cases & Scenarios:**

-   Patients checking medication costs and coverage through their insurance.
-   Patients comparing insurance costs with cash prices and discounts.
-   Patients comparing costs at different pharmacies.
-   Patients understanding coverage restrictions (e.g., prior authorization).
