# public-health: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the exchange of information related to population-based cancer screenings in Belgium. It focuses on representing screening schedules, invitations, participation details, results, and follow-up recommendations in a consistent, interoperable manner using FHIR.
-   **Key clinical/business problems it solves:** It aims to improve the efficiency and effectiveness of cancer screening programs by facilitating data sharing between screening information providers (e.g., cancer registries) and receivers (e.g., healthcare providers, public health agencies). This can lead to better tracking of screening participation, timely follow-up of abnormal results, and improved population health outcomes.
-   **Intended scope and boundaries:** The scope is limited to cancer screenings, specifically breast, colon, and cervical cancer. It defines the structure and content of messages related to screening events but leaves the content of patient communication and the specific mechanisms for linking resources and ensuring resource uniqueness to implementers.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `BePopulationScreeningAppointment`: Profiles `Appointment` to represent screening invitations, including start/end times and participant details (patient and location).
    -   `BePopulationScreeningEncounter`: Profiles `Encounter` to capture participation in a screening, linking to the appointment and including the period and location.
    -   `BePopulationScreeningFollowUp`: Profiles `ServiceRequest` to represent follow-up recommendations after a screening, including proposed actions and body sites.
    -   `BePopulationScreeningObservation`: Profiles `BeObservation` to record screening results, linking to the encounter and using specific value sets for results.
    -   `BePopulationScreeningPlan`: Profiles `CarePlan` to represent a longitudinal plan for a patient's screening activities.
    -   `BePopulationScreeningCommunication`: Profiles `Communication` to represent communication following a patient's screening activities.
    -   `PopulationScreeningNextInvitation`: Extension to provide the estimated date for the next screening invitation.
-   **Notable operations and interactions:** The IG defines a single transaction: "Send/Update Screening Information," where a Screening Information Provider submits a Batch Bundle containing the relevant resources to a Screening Information Receiver's FHIR endpoint using the POST method.
-   **Key terminology and value sets:**
    -   `BeVSPopulationScreeningType`: Defines the types of cancer screenings (breast, colon, cervical) using SNOMED CT codes.
    -   `BeVSPopulationScreeningResultVS`: Specifies the possible results of a screening (e.g., normal, abnormal) using SNOMED CT codes.
    -   `BeVSPopulationScreeningFollowUpAdvice`: Lists possible follow-up actions (e.g., colonoscopy) using SNOMED CT codes.
    -   `BeVSPopulationScreeningBodySiteLocation`: Defines body sites relevant to screenings using SNOMED CT codes.
    -   `BeCSPopulationScreeningNextInvitationType`: Specifies the type of the next invitation or reason for exclusion.
-   **Significant patterns and constraints:**
    -   The IG uses a `BackboneElement` in the logical model to represent invitation, participation, and next invitation details.
    -   It mandates the use of business identifiers for resources.
    -   It defines specific constraints on resource elements, such as requiring the `start` element in `BePopulationScreeningAppointment` and limiting the `subject` in `BePopulationScreeningEncounter` to a `BePatient`.

## Technical Essence

This IG defines a FHIR-based data exchange for Belgian cancer screenings centered around `Appointment`, `Encounter`, `Observation`, and `ServiceRequest` resources, profiled to represent screening events. `BePopulationScreeningAppointment` instances, linked to `BePatient` and `Location`, represent invitations. `BePopulationScreeningEncounter` captures participation, referencing the `Appointment`. `BePopulationScreeningObservation` records results using `BeVSPopulationScreeningResultVS`, linked to the `Encounter`. `BePopulationScreeningFollowUp` (a `ServiceRequest`) provides follow-up recommendations using `BeVSPopulationScreeningFollowUpAdvice` and `BeVSPopulationScreeningBodySiteLocation`. The `PopulationScreeningNextInvitation` extension on `EpisodeOfCare` indicates the next invitation's type and date using `BeCSPopulationScreeningNextInvitationType`. Screening information is exchanged as a Batch Bundle via a POST to the receiver's FHIR endpoint. The IG mandates business identifiers for resources and suggests using either `CarePlan` or `Composition` to link related resources, though this is left to implementer discretion.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves a Screening Information Provider sending a Batch Bundle containing `Appointment`, `Encounter`, `Observation`, and `ServiceRequest` resources to a Screening Information Receiver. The receiver processes the information, validates it against business rules, and updates its system accordingly.
-   **Important requirements and guardrails:** Implementers must ensure that resources have unique business identifiers. They must also handle the response from the receiver to determine the success of the submission. The IG provides guidance on using either `CarePlan` or `Composition` to link related resources but does not mandate a specific approach.
-   **Notable design choices and patterns:** The use of a Batch Bundle for transmitting multiple resources simplifies the exchange process. The IG's reliance on existing FHIR resources and profiles promotes interoperability with other FHIR-based systems. The decision to leave certain aspects, like the content of patient communication, to implementers allows for flexibility and adaptation to local needs.

## Ecosystem Context

-   **Target systems and users:** The target systems are those involved in managing and delivering cancer screening programs in Belgium, including cancer registries, healthcare providers, and public health agencies. The users are primarily healthcare professionals and administrators involved in these programs.
-   **Relationship to other standards/IGs:** This IG builds upon the Belgian Core Profiles (`hl7.fhir.be.core`, `hl7.fhir.be.core-clinical`) and the Information Security IG (`hl7.fhir.be.infsec`). It also leverages standard FHIR resources and terminology.
-   **Relevant jurisdictions or programs:** This IG is specifically designed for the Belgian healthcare context and is relevant to national and regional cancer screening programs in Belgium.
-   **Primary use cases and scenarios:** The primary use case is the exchange of information related to population-based cancer screenings, including scheduling, participation tracking, result reporting, and follow-up recommendations. Scenarios include sending invitations, recording participation details, communicating results, and providing follow-up advice.
