# uds-plus: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The IG primarily addresses the challenge of transitioning the Uniform Data System (UDS) reporting for HRSA-funded health centers from a tabular, aggregated format to a standardized, de-identified, patient-level data submission using FHIR APIs. It also aims to improve the efficiency, quality, and timeliness of data submission.
-   **Key clinical/business problems it solves:** The IG solves the problem of limited data granularity in the current UDS reporting system. By enabling patient-level data submission, it supports more in-depth analysis by BPHC. It also aims to reduce provider reporting burden through automation and alignment with existing standards like HL7 FHIR, USCDI, and ONC regulations.
-   **Intended scope and boundaries:** The IG's scope includes defining API mechanisms, inputs, and outputs for accessing and exchanging data from EHRs/IT systems, mechanisms to start data submission workflows, provisioning mechanisms for automated triggering and submission, and trust services (de-identification) for secure data transfer. It is out of scope to change data capture screens, clinical workflows, or policies related to data sharing, consent, or regulatory compliance within health centers.

## Technical Foundation

-   **Core profiles and extensions:** The IG defines several core profiles, including `uds-plus-import-manifest`, `uds-plus-patient-reporting-parameters`, and de-identified profiles for resources like `Patient`, `Encounter`, `Condition`, `Coverage`, `Observation`, `Procedure`, `MedicationRequest`, and `MedicationStatement`. Key extensions include `uds-plus-age-extension` and those related to agricultural worker status, gender identity, and housing status.
-   **Notable operations and interactions:** The IG specifies the `$import` operation for submitting data to HRSA and a `$deidentify` operation for de-identifying data. It leverages the FHIR Bulk Data Access pattern for data extraction and status polling.
-   **Key terminology and value sets:** The IG utilizes existing value sets from US Core and defines new value sets for concepts like agricultural worker status, insurance type, and housing status. It also references UDS reporting manuals for relevant codes and values.
-   **Significant patterns and constraints:** The IG emphasizes de-identification, requiring the removal of all identifiable data elements not explicitly marked as "SUPPORTED" in the profiles. It mandates specific constraints for dates (year precision only), age reporting (special handling for >89 years), and handling of sensitive data like race, ethnicity, sexual orientation, and gender identity.

## Technical Essence

This IG enables de-identified patient-level UDS reporting via FHIR APIs by defining a `$import` operation that accepts a `Manifest` (Parameters resource) listing NDJSON files containing resources conforming to UDS-specific profiles. These profiles are derived from US Core but stripped of identifying information and constrained to year-level precision for dates. A `$deidentify` operation is implied for transforming US Core resources into these de-identified counterparts, removing all non-"SUPPORTED" elements and applying HHS de-identification guidance. The `Manifest` includes health center metadata (UEI, grant number, contact info) and resource URLs, optionally with bearer tokens for secure download. A `ReportingParameters` resource links each patient to applicable UDS tables and quality measures, indicating IPP, denominator, numerator, etc. status. Data Submitters poll a provided `Content-Location` URL for submission status, receiving `OperationOutcome` resources detailing success or errors. The IG leverages Bulk Data Access patterns for data extraction from EHRs, with a focus on Group-level export and the `_since` and `_type` parameters.

## Implementation Approach

-   **Critical workflows and interactions:** The core workflow involves a Data Submitter initiating data extraction from a Data Source (e.g., EHR), polling for completion, downloading the extracted data, de-identifying it via a Trust Service Provider, creating a manifest file with secure links to the de-identified data, submitting the manifest to HRSA's Data Receiver via `$import`, and polling for the submission status.
-   **Important requirements and guardrails:** Data Sources must support FHIR Bulk Data Access, SMART on FHIR Backend Services Authorization, and specific export parameters. Data Submitters must handle scheduling, de-identification, manifest creation, and status polling. Trust Service Providers must implement the `$deidentify` operation and adhere to HHS de-identification guidelines. Data Receivers must implement `$import`, validate submissions, and provide status updates.
-   **Notable design choices and patterns:** The IG leverages the FHIR Bulk Data Access pattern for efficient data extraction and the FHIR Async pattern for submission and status polling. It employs a manifest file to manage multiple data files and uses a Parameters resource to convey reporting parameters.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are EHRs and other IT systems used by HRSA-funded health centers, as well as HRSA's data systems. The users include health center staff, EHR vendors, and HRSA personnel.
-   **Relationship to other standards/IGs:** The IG builds upon HL7 FHIR R4, US Core, Bulk Data Access, and SMART App Launch for Backend Services. It aligns with QI Core and DEQM for quality measure reporting.
-   **Relevant jurisdictions or programs:** The IG is relevant to the US healthcare system, specifically HRSA's Health Center Program and the UDS reporting requirements.
-   **Primary use cases and scenarios:** The primary use case is the annual submission of UDS+ data by health centers to HRSA. This includes scenarios like partial submissions, incremental submissions, and re-submissions.
