# fhir-medication-rems-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG focuses on standardizing data exchange between Provider Systems (e.g., EHRs) and REMS Administrator Systems to streamline the process of managing medications with Risk Evaluation and Mitigation Strategies (REMS). It addresses the lack of standardized communication, which often leads to manual processes, delays, and potential errors.
-   **Key clinical/business problems it solves:** The IG aims to reduce the administrative burden on providers, improve patient safety, and ensure timely access to REMS medications. It does so by automating data exchange, minimizing manual data entry, and providing clear guidance on REMS requirements within the provider's workflow.
-   **Intended scope and boundaries:** The IG primarily focuses on interactions between prescribers and REMS Administrators during the ordering of REMS medications and associated patient encounters. It defines information exchanges using CDS Hooks and SMART App Launch. While it acknowledges the role of pharmacists and other fulfilling parties, it does not fully address their workflows in this version.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `MedicationRemsTaskSmartLaunch`: Extends the SMART on FHIR Task profile to define a Task for deferred SMART app launch within a REMS workflow.
    -   Uses US Core profiles (Patient, Practitioner, MedicationRequest, Medication, DocumentReference) for representing relevant resources.
-   **Notable operations and interactions:**
    -   CDS Hooks interactions triggered by events like `order-sign`, `order-select`, `patient-view`, and `encounter-start`.
    -   SMART App Launch (both EHR-based and standalone) to integrate REMS Administrator applications into the provider workflow.
    -   Deferred SMART app launch using Task resources within CDS Hooks responses.
    -   Saving REMS information to the patient's record using DocumentReference.
-   **Key terminology and value sets:**
    -   `$smart-codes`: CodeSystem for SMART on FHIR codes (e.g., `launch-app-ehr`, `smartonfhir-application`).
    -   `$smart-launch-types`: ValueSet for SMART launch types.
    -   `$smart-launch-info`: ValueSet for SMART launch information.
    -   `$loinc`: For coding DocumentReference type and category (e.g., `51851-4` for "Administrative note").
    -   `$formatcode`: For coding DocumentReference format.
-   **Significant patterns and constraints:**
    -   Provider Systems SHALL support CDS Hooks and SMART App Launch interactions.
    -   REMS Administrators SHOULD implement CDS Hooks and MAY support standalone SMART App Launch.
    -   Prefetch data in CDS Hooks requests SHOULD include Practitioner, Patient, and MedicationRequest resources.
    -   Provider Systems SHALL enable REMS Administrators to query for additional patient information during CDS Hooks exchanges.
    -   DocumentReference resources returned by REMS Administrators SHOULD conform to US Core DocumentReference guidance.

## Technical Essence

This IG leverages CDS Hooks and SMART App Launch to facilitate REMS workflows. Provider Systems initiate CDS Hooks requests at key workflow events, including prefetch data (Patient, Practitioner, MedicationRequest). REMS Administrators respond with Cards containing information, links (absolute or SMART), or suggestions for deferred SMART app launch via Tasks. The `MedicationRemsTaskSmartLaunch` profile extends the SMART Task profile, specifying `code` as `launch-app-ehr` and including `input` elements for the SMART app URL (`smartonfhir-application`) and app context (`smartonfhir-appcontext`). Standalone SMART apps can also be launched, retrieving patient data from the Provider System. REMS Administrators can save patient REMS information to the Provider System as US Core DocumentReference resources, typically using LOINC code `51851-4` for the `type`.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Provider initiates CDS Hooks request during patient encounter or order workflow.
    -   REMS Administrator returns CDS Hooks response with Cards (information, links, or suggestions).
    -   Provider may launch SMART app immediately or defer launch via Task.
    -   SMART app retrieves patient data from Provider System and interacts with REMS Administrator.
    -   REMS Administrator may save REMS information to patient's record.
-   **Important requirements and guardrails:**
    -   Provider Systems SHALL support immediate provider actions in response to Cards.
    -   Provider Systems SHOULD support deferred SMART app launch via Task.
    -   Provider Systems SHOULD authorize REMS Administrator SMART apps to create DocumentReference resources.
    -   Security and privacy SHALL follow FHIR, CDS Hooks, and SMART App Launch guidelines.
-   **Notable design choices and patterns:**
    -   Use of CDS Hooks for event-driven interactions.
    -   Leveraging SMART App Launch for integrating REMS Administrator applications.
    -   Deferred SMART app launch pattern using Task resources.
    -   Consistent use of US Core profiles for relevant resources.

## Ecosystem Context

-   **Target systems and users:** Provider Systems (e.g., EHRs), REMS Administrator Systems, prescribers, patients, and potentially pharmacists and other fulfilling parties.
-   **Relationship to other standards/IGs:** Relies on CDS Hooks 2.0, SMART on FHIR 2.1, FHIR R4, and US Core. Aims for consistency with the Da Vinci Coverage Requirements Discovery (CRD) IG, particularly in the use of CDS Hooks response Cards.
-   **Relevant jurisdictions or programs:** United States, FDA REMS programs.
-   **Primary use cases and scenarios:**
    -   Provider alerted to REMS program during ordering process.
    -   Provider completes REMS enrollment or training.
    -   Patient completes REMS enrollment.
    -   REMS Administrator retrieves patient information to assess eligibility or gather required data.
    -   REMS Administrator saves patient REMS information to Provider System.
    -   Provider uses external REMS Administrator application with standalone SMART App Launch.
