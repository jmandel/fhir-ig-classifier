# bser: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The Bidirectional Services eReferral (BSeR) IG addresses the challenge of standardizing the exchange of referral requests and feedback between healthcare providers and community-based organizations (CBOs) or other healthcare providers, particularly for chronic health conditions. It focuses on enabling a "closed-loop" referral process where the initiating provider receives updates on the patient's status and outcomes.
-   **Key clinical/business problems it solves:** BSeR aims to streamline and enhance the efficacy of referrals, improve care coordination, reduce administrative burden, and ensure that referral initiators receive timely and relevant feedback on the services provided. It also addresses the HIPAA minimum necessary standard by limiting the exchange of clinical information to only that data necessary to fulfill the service request.
-   **Intended scope and boundaries:** The IG's scope is the placement of service request referrals by a referral initiator and the feedback of service request outcome reports by a referral recipient. It specifically focuses on six use cases: arthritis, diabetes prevention, early childhood nutrition, hypertension, obesity, and tobacco use cessation. The IG is designed to be extensible to other referral use cases.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Referral Participant Resources:** Leverages US Core profiles for Patient, Practitioner, and PractitionerRole.
    -   **Workflow Management Resources:** Defines profiles for Message Bundle, Referral MessageHeader, and Referral Task.
    -   **Referral Service Request Resources:** Defines profiles for Referral ServiceRequest, Referral Request Composition, Referral Request Document Bundle, and Batch Query Bundle Referral Supporting Information.
    -   **Referral Service Request Feedback Resources:** Defines profiles for Referral Feedback Composition, Referral Feedback Document Bundle, and extends US Core Observation Social History Profile for feedback observations.
    -   **Extensions:** Defines extensions for query description, and telecom communication preferences.
-   **Notable operations and interactions:** The IG supports two primary transaction types: "Referral Request" and "Referral Feedback." It outlines two interaction paradigms: "Referral - Push" using FHIR Messaging and "Referral - Notify and Pull" using RESTful exchange.
-   **Key terminology and value sets:** Leverages SNOMED CT, LOINC, and other standard code systems. Defines custom code systems for Task Business Status and BSeR-specific concepts. Defines value sets for telecom communication preferences and task business status.
-   **Significant patterns and constraints:** The IG uses a combination of document and messaging paradigms. It emphasizes the use of Task resources to manage the referral workflow and track the status of the referral. It defines specific patterns for structuring referral requests and feedback using Composition and Bundle resources.

## Technical Essence

BSeR defines a closed-loop referral process using FHIR R4, centered around a `ReferralTask` that tracks the state of a `ReferralServiceRequest`. The `ReferralServiceRequest` is profiled to include references to a `BSeRReferralRequestDocumentBundle` (containing a `BSeRReferralRequestComposition` and supporting clinical data) and a `BSeRPatientConsent`. The `BSeRReferralRequestComposition` structures the referral request, referencing US Core profiles (e.g., `USCoreConditionProblemsHealthConcernsProfile`, `USCoreObservationSocialHistoryProfile`) and BSeR-specific profiles (e.g., `BSeRReferralObservation`) based on the use case. Referral feedback is conveyed through a `BSeRReferralFeedbackDocumentBundle` containing a `BSeRReferralFeedbackComposition`, which references the original `ReferralServiceRequest` and includes feedback observations. The IG supports both push (via `BSeRReferralMessageBundle` and `BSeRReferralMessageHeader`) and notify-and-pull (via RESTful exchange of `ReferralTask`) paradigms. Batch query Bundles are used to define and retrieve use-case-specific supporting information.

## Implementation Approach

-   **Critical workflows and interactions:** The IG outlines four primary workflows: Referral - Push, Referral - Notify and Pull, Referral - Push (with intermediary), and Referral - Notify and Pull (with intermediary). These workflows involve interactions between referral initiators, referral recipients, and optional intermediaries.
-   **Important requirements and guardrails:** Implementers must adhere to the defined profiles and extensions. The IG emphasizes the use of Task resources to manage the referral workflow and track its status. It also requires the use of specific code systems and value sets.
-   **Notable design choices and patterns:** The IG separates the designation and profiling of FHIR resources related to the service request workflow from the FHIR resources required to convey the information content necessary for the fulfillment of the service request. It uses a combination of document and messaging paradigms to support different exchange scenarios.

## Ecosystem Context

-   **Target systems and users:** The IG targets healthcare providers (referral initiators and recipients), CBOs, Health Information Exchanges (HIEs), and Health Information Networks (HINs).
-   **Relationship to other standards/IGs:** The IG builds upon US Core and references IHE Patient Care Coordination Technical Framework Supplement 360 Exchange Closed Loop Referral (360X). It also acknowledges collaboration with the HL7 Gravity project.
-   **Relevant jurisdictions or programs:** The IG is a U.S. Realm Specification and is based on reporting specifications in U.S. jurisdictions.
-   **Primary use cases and scenarios:** The IG focuses on six primary use cases: arthritis, diabetes prevention, early childhood nutrition, hypertension, obesity, and tobacco use cessation. It supports scenarios involving direct exchange between providers and CBOs, as well as scenarios involving intermediaries like HIEs.
