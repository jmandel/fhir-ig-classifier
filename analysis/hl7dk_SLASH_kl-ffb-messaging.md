# kl-ffb-messaging: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of exchanging social care information related to the Danish "Fælles Faglige Begrebsmodel" (FFB) - a common conceptual model for social care - between municipal authorities and service providers within the Danish healthcare ecosystem. It focuses on enabling the electronic ordering of care plans and related information.
-   **Key clinical/business problems it solves:** It aims to streamline the process of ordering and managing social care services for citizens, improving efficiency, reducing administrative burden, and enhancing the quality and coordination of care. It solves the problem of inconsistent and non-standardized communication between the ordering and providing parties.
-   **Intended scope and boundaries:** The scope is limited to the exchange of FFB-related messages, specifically focusing on orders for care plans, including citizen objectives, intervention purposes, intervention goals, target groups, conditions, follow-up encounters, information gathering, diagnoses, evaluations, matters of interest, and related documents. It does not cover all aspects of social care but focuses on the initial ordering process.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `KLMessagingFFBOrderMessage`, `KLMessagingFFBOrderMessageHeader`, `KLMessagingFFBOrderCarePlan`, `KLMessagingFFBIntervention`, `KLMessagingFFBInformationGathering`, `KLMessagingFFBCitizen`, `KLMessagingFFBOrganization`, `KLMessagingFFBAccount`, `KLMessagingFFBDocumentReference`, `KLMessagingFFBRelatedCarePlan`, `KLMessagingFFBServicePerformer`, `KLMessagingFFBCitizenObjective`, `KLMessagingFFBInterventionPurpose`, `KLMessagingFFBInterventionGoal`, `KLMessagingFFBTargetGroup`, `KLMessagingFFBCondition`, `KLMessagingFFBFollowUp`, `KLMessagingFFBDiagnosis`, `KLMessagingFFBEvaluation`, `KLMessagingFFBMatterOfInterest`, `KLMessagingFFBRelatedPerson`, `KLMessagingFFBConsent`, `KLMessagingFFBGuardian`, `KLMessagingFFBParticipatingOrganization`, `KLMessagingFFBAccountOwner`.
    -   **Extensions:** `KLMessagingFFBActingMunicipalityExtension`, `KLMessagingFFBGuardianshipFormExtension`, `KLMessagingFFBParticipationDescriptionExtension`.
-   **Notable operations and interactions:** The IG primarily defines a message-based interaction pattern for sending orders. The core interaction is the transmission of a `Bundle` of type `message` containing a `MessageHeader` and various resources related to the order.
-   **Key terminology and value sets:**
    -   `$KLCommon`, `$FFB`, `$messageEvent`, `$v2-0203`, `$v2-0131`, `$v3-RoleCode`, `$v3-ActCode`, `$municipalityCodes`, `$consentScope`, `$consentpolicycodes`, `$goalStatus`, `$conditionClinical`.
    -   `KLMessagingFFBRelationshipTypeValues`, `KLMessagingFFBGuardianshipFormValues`, `KLMessagingConsentPolicyValues`, `KLMessagingFFBParticipantRoleValues`.
-   **Significant patterns and constraints:**
    -   The IG heavily utilizes the `Bundle` resource to encapsulate the entire order message.
    -   It defines specific profiles for core resources like `CarePlan`, `Goal`, `Condition`, `ClinicalImpression`, `Organization`, `Patient`, `RelatedPerson`, `Consent`, `Account`, and `DocumentReference`, tailoring them to the FFB context.
    -   It enforces constraints on cardinality, data types, and code systems for various elements within these profiles.
    -   It uses extensions to capture FFB-specific information not covered by standard FHIR elements.

## Technical Essence

This IG defines a message-based exchange of social care orders using FHIR R4, centered around a `Bundle` of type `message`. The `MessageHeader` specifies the `ffb-order` event and references `CarePlan`, `InformationGathering`, `Account`, and `DocumentReference` resources as its focus. The `OrderCarePlan` profile mandates `status`, `intent`, `subject` (referencing a profiled `Citizen`), `author` (referencing a profiled `Organization`), `addresses` (referencing profiled `TargetGroup`), and `goal` (referencing profiled `CitizenObjective`, `InterventionPurpose`, and `InterventionGoal`). `InterventionGoal` further references profiled `Condition` resources. `InformationGathering` references profiled `Evaluation`, `MatterOfInterest`, `Diagnosis`, and `Condition` resources.  `Citizen` is profiled with mandatory `name`, `address`, `telecom`, and `contact` elements. `Account` is profiled with mandatory `status`, `identifier`, and `owner`. `DocumentReference` is profiled with mandatory `status`, `description`, and `content`. The IG defines extensions for `ActingMunicipality`, `GuardianshipForm`, and `ParticipationDescription`. Key value sets include `KLMessagingFFBRelationshipTypeValues`, `KLMessagingFFBGuardianshipFormValues`, and `KLMessagingFFBParticipantRoleValues`, supplementing standard FHIR and v2/v3 code systems.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves an authority organization sending an order message (a `Bundle`) to a provider organization. This message contains a `MessageHeader` and all necessary resources, including the `CarePlan`, `Citizen`, `Organization`, and supporting information. The provider organization receives and processes the order, potentially sending back acknowledgments or status updates (not explicitly defined in this IG).
-   **Important requirements and guardrails:**
    -   Messages must conform to the defined profiles and extensions.
    -   The `MessageHeader` must correctly identify the message event as `ffb-order`.
    -   The `CarePlan` must include all mandatory elements and reference the appropriate supporting resources.
    -   Organizations must be identified using appropriate identifiers (e.g., EAN, CVR).
    -   Terminologies and value sets must be used as specified.
-   **Notable design choices and patterns:**
    -   The use of a single `Bundle` to encapsulate the entire order simplifies the exchange process.
    -   The reliance on existing FHIR resources like `CarePlan`, `Goal`, and `Condition` promotes interoperability with other FHIR-based systems.
    -   The use of extensions allows for capturing FFB-specific data elements.

## Ecosystem Context

-   **Target systems and users:** The target systems are those used by Danish municipal authorities (ordering parties) and social care service providers (receiving parties). Users are likely to be healthcare professionals, social workers, and administrative staff involved in the ordering and delivery of social care services.
-   **Relationship to other standards/IGs:** This IG builds upon the core FHIR R4 specification and references other Danish IGs like `hl7.fhir.dk.core` and `dk.fhir.ig.kl.common.caresocial`. It also leverages standard code systems like v2 and v3. It is specifically designed to align with the Danish FFB model.
-   **Relevant jurisdictions or programs:** This IG is specifically designed for use within the Danish healthcare system, particularly in the context of social care services managed by municipalities.
-   **Primary use cases and scenarios:**
    -   A municipality ordering a care plan for a citizen requiring social care services.
    -   A service provider receiving and processing the order, including reviewing the care plan, citizen information, and supporting documents.
    -   Exchange of information about citizen objectives, intervention goals, conditions, and evaluations between the municipality and the service provider.
    -   Managing consent for related persons to access citizen information.
    -   Specifying account information for billing purposes.
    -   Attaching relevant documents to the order.
