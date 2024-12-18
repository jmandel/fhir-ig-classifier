# cardx-htn-mng: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The IG primarily addresses the lack of standardized data exchange for Self-Measured Blood Pressure (SMBP) monitoring data between patients, personal health devices, intermediary platforms, and Electronic Health Record (EHR) systems. It focuses on enabling the flow of computable SMBP data to support hypertension management.
-   **Key clinical/business problems it solves:** The IG aims to improve hypertension diagnosis, management, and outcomes by facilitating the collection and exchange of SMBP data. This can lead to better blood pressure control, reduced clinician burden, and more complete reporting. It also supports clinical workflows for SMBP programs, enabling remote monitoring and treatment adjustments.
-   **Intended scope and boundaries:** The IG's scope is currently limited to the exchange of SMBP data from personal health devices to intermediary platforms and then to EHRs. It does not cover the exchange of data from EHRs back to intermediary platforms. The IG focuses on a universal realm approach, aiming for broad applicability across different geographic regions and healthcare systems.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **SelfMeasuredBloodPressure:** A profile based on FHIR's `Observation` resource, representing a single blood pressure measurement taken in a non-clinical setting. It mandates the use of LOINC code `85354-9` and requires `performer` to be a `Patient`.
    -   **AverageSMBP:** A profile based on FHIR's `Observation` resource, representing the calculated average of two or more SMBP readings. It defines the `NumberOfMeasurements` extension to indicate the number of readings used in the calculation. It uses LOINC code `96607-7` and requires `performer` to be a `Patient`.
    -   **SMBPAssociatedHeartRate:** A profile based on FHIR's `Observation` resource, representing a heart rate measurement taken concurrently with an SMBP reading. It mandates the use of LOINC code `8867-4` and requires `performer` to be a `Patient`.
    -   **NumberOfMeasurements Extension:** An extension to count the number of measurements used in a calculation, such as Average Blood Pressure.
-   **Notable operations and interactions:**
    -   The IG supports `POST` operations for Device Gateways to send SMBP data to Personal Health Intermediaries.
    -   It supports `POST` operations for Personal Health Intermediaries to send average SMBP data to EHRs.
    -   It supports `GET` operations for EHRs to retrieve average SMBP data and associated individual readings.
    -   It supports `search-type` operations for both clients and servers.
-   **Key terminology and value sets:**
    -   **LOINC:** Used for coding blood pressure and heart rate observations.
    -   **UCUM:** Used for units of measure (e.g., `mm[Hg]` for blood pressure, `/min` for heart rate).
    -   **SMBPStatusVS:** A value set constraining the `Observation.status` to codes relevant for SMBP (`final`, `entered-in-error`, `unknown`).
    -   **NumericResultInterpretationNom:** A value set for interpretations associated with measured values (e.g., `Abnormal`, `Higher Than Normal`).
-   **Significant patterns and constraints:**
    -   The IG mandates the use of specific LOINC codes for different types of blood pressure observations.
    -   It requires the `performer` to be a `Patient` for all SMBP-related observations.
    -   It defines specific constraints for representing systolic and diastolic components in both `SelfMeasuredBloodPressure` and `AverageSMBP` profiles.
    -   It uses the `derivedFrom` element in `AverageSMBP` to link to the individual `SelfMeasuredBloodPressure` observations used in the calculation.

## Technical Essence

This IG defines a streamlined approach to capturing and exchanging self-measured blood pressure data for hypertension management. It leverages FHIR's `Observation` resource, creating three core profiles: `SelfMeasuredBloodPressure`, `AverageSMBP`, and `SMBPAssociatedHeartRate`. `SelfMeasuredBloodPressure` uses LOINC code `85354-9` and mandates `Patient` as the `performer`, capturing individual readings with systolic and diastolic components (LOINC `8480-6` and `8462-4` respectively) in `mm[Hg]`. `AverageSMBP` (LOINC `96607-7`) calculates the mean of multiple `SelfMeasuredBloodPressure` instances, linked via `derivedFrom`, and includes a custom `NumberOfMeasurements` extension. Systolic and diastolic means are represented using LOINC codes `96608-5` and `96609-3`, respectively. `SMBPAssociatedHeartRate` captures concurrent heart rate (LOINC `8867-4`) in `/min`, also with `Patient` as `performer`. The IG specifies `POST` for data submission to intermediaries and EHRs, and `GET` for EHR retrieval. Capability statements define `SHALL` support for `SelfMeasuredBloodPressure` and `AverageSMBP` profiles for both clients and servers, with `SHOULD` support for `SMBPAssociatedHeartRate`.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  A patient takes their blood pressure using a validated device.
    2.  The device transmits the data to a Device Gateway.
    3.  The Device Gateway (or Personal Health Intermediary) ensures the correct LOINC codes and UCUM units are used and that the patient is the performer.
    4.  The Device Gateway `POST`s the `SelfMeasuredBloodPressure` and `SMBPAssociatedHeartRate` observations to a Personal Health Intermediary.
    5.  The Personal Health Intermediary calculates the `AverageSMBP` based on a defined protocol.
    6.  The Personal Health Intermediary `POST`s the `AverageSMBP` and its `derivedFrom` individual readings to an EHR.
    7.  The EHR uses `GET` to retrieve the `AverageSMBP` and associated observations.
-   **Important requirements and guardrails:**
    -   Systems must support the specified LOINC codes and UCUM units.
    -   The `performer` must be the `Patient` for all SMBP-related observations.
    -   Systems must be able to handle the `NumberOfMeasurements` extension.
    -   EHRs must be able to link `AverageSMBP` observations to their constituent `SelfMeasuredBloodPressure` observations via `derivedFrom`.
-   **Notable design choices and patterns:**
    -   The use of `derivedFrom` to link average observations to individual readings.
    -   The use of a custom extension (`NumberOfMeasurements`) to provide context for average calculations.
    -   The clear separation of roles between Device Gateways, Personal Health Intermediaries, and EHRs.

## Ecosystem Context

-   **Target systems and users:**
    -   **Patients:** Individuals with hypertension enrolled in SMBP programs.
    -   **Clinicians:** Healthcare providers managing hypertension.
    -   **Personal Health Devices:** Devices used for SMBP monitoring.
    -   **Personal Health Intermediaries:** Platforms that manage and aggregate patient health data.
    -   **Device Gateways:** Systems that capture and share blood pressure data from devices.
    -   **Electronic Health Record Systems:** Systems used by clinicians to manage patient data, including patient portals.
-   **Relationship to other standards/IGs:**
    -   The IG aligns with FHIR R4 and builds upon the `Observation` resource.
    -   It aligns with US Core 3.1.1 and aims to align with future releases.
    -   It relates to the "Vital Signs with Qualifying Elements" IG.
    -   It relates to the "FHIR Write" specification for writing back vital signs observations.
    -   It relates to the "Personal Health Device IG" for generating observations from personal health devices.
-   **Relevant jurisdictions or programs:**
    -   The IG adopts a universal realm approach, making it applicable globally.
    -   It is relevant to initiatives like CDC Million Hearts and the AHA's National Hypertension Control Initiative.
-   **Primary use cases and scenarios:**
    -   **Scenario 1:** A patient's SMBP data is transmitted from a device to a Personal Health Intermediary.
    -   **Scenario 2:** A Personal Health Intermediary calculates an average SMBP and sends it to an EHR, which then retrieves the data.
    -   Supporting remote monitoring of patients enrolled in SMBP programs.
    -   Facilitating data exchange between patients, devices, intermediary platforms, and EHRs to improve hypertension management.
