# ITI.Scheduling: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of enabling standardized, cross-organizational, and patient-initiated scheduling of healthcare appointments using FHIR APIs. It focuses on interoperability between disparate systems, particularly in scenarios where patients need to schedule appointments across different healthcare organizations or when patients directly initiate appointment scheduling.
-   **Key clinical/business problems it solves:** The IG solves problems related to inefficient appointment scheduling processes, such as manual coordination between organizations, delays in scheduling follow-up appointments, and lack of patient involvement in the scheduling process. It aims to improve patient care by ensuring timely access to appointments and streamlining the scheduling workflow for both providers and patients.
-   **Intended scope and boundaries:** The scope is limited to FHIR-based interactions for finding potential appointments, holding appointments, booking appointments, and finding existing appointments. It specifically focuses on the use of `Schedule`, `Slot`, and `Appointment` resources. The management of `Schedule` and `Slot` resources is considered out of scope, as the server is responsible for the business logic determining appointment attributes. The IG does not cover mechanisms for patient and provider identification, leaving that to be addressed by other profiles like IHE PDQm.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `ihe-sched-appt`: Profile on the `Appointment` resource.
    -   `ihe-sched-avail-bundle`: Profile on the `Bundle` resource for returning search results.
    -   Several AuditEvent profiles for auditing transactions: `IHE.Scheduling.FindPotential.Audit.Recipient`, `IHE.Scheduling.FindPotential.Audit.Source`, `IHE.Scheduling.Hold.Audit.Recipient`, `IHE.Scheduling.Hold.Audit.Source`, `IHE.Scheduling.Book.Audit.Recipient`, `IHE.Scheduling.Book.Audit.Source`.
-   **Notable operations and interactions:**
    -   `$find`: Operation to find potential appointments based on various criteria.
    -   `$hold`: Operation to temporarily hold a selected appointment.
    -   `$book`: Operation to book, modify, or cancel an appointment.
    -   FHIR Search on the `Appointment` resource to find existing appointments.
-   **Key terminology and value sets:**
    -   [Practice Setting Code ValueSet](https://hl7.org/fhir/R4/valueset-c80-practice-codes.html)
    -   [Appointment Reason Code ValueSet](https://hl7.org/fhir/R4/v2/0276/index.html)
    -   [Service Category ValueSet](https://hl7.org/fhir/R4/valueset-service-category.html)
    -   [Service Type ValueSet](https://hl7.org/fhir/R4/valueset-service-type.html)
    -   `AppointmentStatus` codesystem.
-   **Significant patterns and constraints:**
    -   The IG mandates the use of ATNA for security and audit trails, and recommends the use of IUA or SMART-on-FHIR for user authentication.
    -   It defines specific search parameters for the `Appointment` resource and constraints on the `Bundle` resource for returning search results.
    -   The `$book` operation is versatile, supporting appointment creation, modification, and cancellation through different parameter combinations.

## Technical Essence

This IG defines a FHIR-based scheduling workflow centered around the `Appointment` resource, leveraging custom operations `$find`, `$hold`, and `$book` for a streamlined, interoperable scheduling process. The `$find` operation, utilizing `Parameters` resource, accepts criteria like `start`, `end`, `practitioner`, `patient`, and `specialty` to return a `searchset` `Bundle` of potential `Appointment` resources. The optional `$hold` operation, taking an `appt-id` or `appt-resource` as input, temporarily reserves a specific `Appointment`, setting its status to `pending`. The `$book` operation manages appointment lifecycle, accepting `appt-id`, `appt-resource`, `cancelled-appt-id`, `patient-id`, and `comment` to create, modify, or cancel appointments, returning an `Appointment` `Bundle`.  Existing appointments are discoverable via standard FHIR search on the `Appointment` resource, with required support for `patient` and `date` parameters. Audit events, based on IHE Basic Audit, are mandated for all transactions, capturing details like client, server, patient, and appointment.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  Scheduling Client identifies the patient.
    2.  Client uses `$find` to retrieve potential appointments from the Scheduling Server.
    3.  (Optionally) Client uses `$hold` to reserve a specific appointment.
    4.  Client uses `$book` to finalize the appointment.
    5.  Client uses FHIR Search to find existing appointments.
-   **Important requirements and guardrails:**
    -   Servers SHALL support both GET and POST based searches for the `Appointment` resource.
    -   Servers SHALL honor the `_count` and `_include` parameters in search requests.
    -   Servers SHALL include a `total` attribute in the `Bundle` response for searches.
    -   Audit events SHALL be recorded for all transactions, following the specified AuditEvent profiles.
-   **Notable design choices and patterns:**
    -   The use of operations instead of direct manipulation of `Schedule` and `Slot` resources simplifies the client's interaction and delegates complex business logic to the server.
    -   The `$book` operation's flexibility allows for a single endpoint to handle various appointment management tasks.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are EHRs, practice management systems, patient portals, and other healthcare applications involved in appointment scheduling. The users include healthcare providers, administrative staff, and patients.
-   **Relationship to other standards/IGs:** The IG is built upon FHIR R4 and references the Argonaut Scheduling Implementation Guide. It recommends grouping with IHE PDQm for patient demographics and IHE mCSD for service discovery. It can also be used in conjunction with the 360X profile for referral workflows. It requires ATNA and recommends IUA or SMART-on-FHIR.
-   **Relevant jurisdictions or programs:** While not explicitly tied to a specific jurisdiction, the IG is designed for international use and does not have dependencies on national profiles.
-   **Primary use cases and scenarios:**
    -   Provider-facing scheduling: Scheduling follow-up appointments during hospital discharge, scheduling specialty visits.
    -   Patient-facing scheduling: Patients scheduling appointments through a patient portal, especially in cross-organizational scenarios like urgent care visits while traveling.
