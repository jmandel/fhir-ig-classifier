# nhsn-dqm: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the electronic submission of surveillance data to the National Healthcare Safety Network (NHSN) using FHIR. It focuses on enabling the reporting of digital quality measures (dQMs) to NHSN, thereby reducing manual data entry and improving data quality.
-   **Key clinical/business problems it solves:** The IG solves problems related to the burden of manual data reporting, data accuracy, validity, and timeliness in public health surveillance. It aims to improve the efficiency of data collection for NHSN, enabling more effective monitoring of healthcare-associated infections, patient safety events, and other key metrics.
-   **Intended scope and boundaries:** The scope of this IG is to define the framework for reporting dQM data to NHSN. It includes specifications for data exchange, measure evaluation, and report submission. It is not intended to define how to operationalize implementing reporting a specific NHSN dQM, but provides two example measures: an acute care hospital (ACH) dQM and an automated bed capacity data collection measure. The IG does not define the specific dQMs themselves; those will be hosted separately by NHSN.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `NHSNMeasureBundle`: Defines a Bundle for distributing Measure resources and related artifacts.
    -   `NHSNMeasureReportBundle`: Defines a Bundle for submitting MeasureReport resources and supporting data to NHSN.
    -   `NHSNSubmittingOrganization`: Extends `USCoreOrganizationProfile` to include an NHSN Org ID.
    -   `NHSNSubmittingDevice`: Includes information about the device or software submitting the report Bundle.
    -   `PatientsOfInterestList`: Defines a List of Patient resources considered for inclusion in NHSN Measure reporting.
    -   `HealthcareCapacityCodeSystem`: Defines coded concepts for Healthcare Capacity reporting to NHSN.
-   **Notable operations and interactions:**
    -   `$evaluate-measure`: Used by the dQM Evaluation Engine to evaluate data against a measure.
    -   HTTP GET: Used to retrieve Measure Bundles from the Measure Source.
    -   HTTP POST/PUT: Used to submit MeasureReport Bundles to the MeasureReport Recipient.
-   **Key terminology and value sets:**
    -   `AcuteCareHospitalEncounterStatus`: Defines status codes for acute care hospital encounters.
    -   `AcuteCareHospitalEncounterClass`: Defines class codes for acute care hospital encounters.
    -   `HealthcareCapacityCodeSystem`: Defines codes for reporting healthcare capacity.
    -   Relies on standard terminologies like SNOMED CT, ICD-10-CM, LOINC, and RxNorm.
-   **Significant patterns and constraints:**
    -   Uses a Bundle-based approach for both measure distribution and report submission.
    -   Employs Must Support flags to indicate required data elements.
    -   Defines invariants to enforce data integrity and consistency within Bundles.
    -   Leverages existing profiles from US Core, DEQM, and CQF Measures.

## Technical Essence

This IG defines a FHIR-based framework for reporting digital quality measures (dQMs) to the NHSN. It leverages a pull-based model where a dQM Evaluation Engine retrieves `NHSNMeasureBundle` resources containing `CRMIShareableMeasure` and related artifacts from an NHSN Measure Source. The engine then queries a Data Source, typically a US Core-conformant FHIR server, for patient data based on a pre-defined `PatientsOfInterestList`. It evaluates the retrieved data against the measure logic, generating `DEQMIndividualMeasureReportProfile` and `DEQMSubjectListMeasureReport` resources. These reports, along with referenced patient data, are packaged into an `NHSNMeasureReportBundle` and submitted via HTTP POST to an NHSN MeasureReport Recipient, which acts as a `DEQMReceiverServer`. The `NHSNMeasureReportBundle` must contain all referenced resources and adhere to specific structural constraints, including the presence of `NHSNSubmittingOrganization` and `NHSNSubmittingDevice`. The IG defines profiles for key resources like `Patient`, `Encounter`, `Condition`, `Observation`, `MedicationAdministration`, and `Procedure`, often extending US Core or QICore profiles. Terminology bindings enforce the use of standard code systems like SNOMED CT, ICD-10-CM, LOINC, and RxNorm for specific data elements.

## Implementation Approach

-   **Critical workflows and interactions:** The IG outlines three primary workflows: "Pull from NHSN," "Push to NHSN," and "Aggregate and Push to NHSN." These workflows involve interactions between the dQM Evaluation Engine, Data Source, Measure Source, and MeasureReport Recipient.
-   **Important requirements and guardrails:**
    -   Data Sources must provide a FHIR API supporting read access to resources required by the measures.
    -   dQM Evaluation Engines must implement the `$evaluate-measure` operation.
    -   MeasureReport Recipients must support the `$validate` operation and accept `NHSNMeasureReportBundle` resources.
    -   Submitted Bundles must be self-contained and adhere to defined profiles and invariants.
-   **Notable design choices and patterns:**
    -   The use of separate actors (dQM Evaluation Engine, Data Source, etc.) allows for flexible deployment models.
    -   The reliance on existing IGs (US Core, DEQM, CQF Measures) promotes interoperability and reuse.
    -   The specification of detailed reporting scenarios provides concrete guidance for implementers.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are EHRs, health information exchanges (HIEs), and public health reporting systems. The users include healthcare providers, quality improvement professionals, and public health officials.
-   **Relationship to other standards/IGs:** This IG builds upon several existing standards and IGs, including FHIR R4, US Core, DEQM, CQF Measures, and potentially SANER in the future.
-   **Relevant jurisdictions or programs:** The IG is primarily relevant to the United States, specifically for reporting to the CDC's National Healthcare Safety Network.
-   **Primary use cases and scenarios:** The IG supports various use cases, including reporting of healthcare-associated infections, patient safety events, and bed capacity data. The example measures provided (ACH dQM and Bed Capacity) illustrate the application of the framework to specific reporting scenarios.
