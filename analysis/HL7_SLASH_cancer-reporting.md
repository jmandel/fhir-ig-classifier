# cancer-reporting: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG), "Cancer Pathology Data Sharing," addresses the primary interoperability challenge of transmitting structured cancer pathology data from Laboratory Information Systems (LIS) to Electronic Health Records (EHRs) and Central Cancer Registries (CCRs). It aims to solve the problem of non-discrete data formats (e.g., PDFs) currently used in pathology reporting, which hinder data exchange and analysis. The IG provides a standardized data model, defined data items, and corresponding code and value sets specific to cancer pathology synoptic reports, enabling structured data collection and exchange. Its scope is bounded to cancer pathology reporting, with a focus on leveraging the College of American Pathologists' (CAP) electronic Cancer Protocols (eCPs) and aligning with the NAACCR Volume V standard for cancer registries.

## Technical Foundation

The IG's technical foundation is built upon FHIR Release 4 and leverages profiles from US Core 6.1.0. It defines six core profiles:

-   **US Pathology Exchange Content Bundle:** A collection bundle for reporting to CCRs.
-   **US Pathology Composition:** Represents a laboratory report.
-   **US Pathology Diagnostic Report:** Captures data from an eCP form (derived from US Core DiagnosticReport).
-   **US Pathology Specimen:** Defines a pathology specimen (derived from FHIR R4 Specimen).
-   **US Pathology Service Request:** Represents a request for pathological analysis (derived from US Core ServiceRequest).
-   **US Pathology Related Practitioner Role:** Defines pathology-related practitioner roles (derived from US Core PractitionerRole).

It also defines one value set (US Pathology Provider Types) and one code system (US Pathology Code System). The IG supports both RESTful API and FHIR Messaging paradigms. It includes constraints like `path-reporting-1`, which mandates that `effectiveDateTime` include the month and day.

## Technical Essence

This IG defines a FHIR R4-based framework for structured cancer pathology reporting, leveraging US Core profiles and IHE SDC/eCP Observation patterns. A `USPathologyExchangeBundle` (collection) orchestrates the reporting process, containing a `USPathologyComposition` that references a `USPathologyDiagnosticReport`. The DiagnosticReport, derived from `USCoreDiagnosticReportProfileNoteExchange`, links to `USPathologySpecimen`, `USPathologyServiceRequest`, and `USPathologyRelatedPractitionerRole` instances. Crucially, it references `USPathologyGrouperObservation` instances, which represent sections from an eCP form. Each Grouper Observation, in turn, has `hasMember` references to `ObservationSDCeCC` instances representing individual questions and answers from the eCP. The `ObservationSDCeCC` profile captures question/answer pairs, handling multi-select questions with multiple Observations sharing the same question code but different values. `Observation.component` stores additional text or numeric entries from follow-up fields. The `USPathologyCodeSystem` and `USPathologyProviderTypes` ValueSet provide standardized codes for report sections and provider roles, respectively. This structure enables the granular capture and exchange of discrete data elements from eCP forms, facilitating interoperable cancer pathology reporting.

## Implementation Approach

The IG is designed to be implemented within LIS and EHR systems, supporting two primary workflows: LIS to CCR via EHR and LIS to CCR directly. It emphasizes the integration of CAP eCPs into the LIS workflow. Implementers must ensure systems can populate all Must Support elements and handle missing data according to the defined rules. The IG adopts US Core's definitions of Must Support and Missing Data. Systems claiming conformance must support elements with minimum cardinality >= 1 and/or flagged as Must Support. Privacy and security are addressed by referencing general FHIR security guidelines and applicable laws and policies.

## Ecosystem Context

The target systems for this IG are LIS, EHRs, and CCRs within the US Realm. The primary users are architects, developers, business analysts, and policy managers of these systems. The IG aligns with the NAACCR Volume V standard and the IHE SDC eCP on FHIR IG, aiming to operate in conjunction with the latter for data capture from eCPs. It is sponsored by HL7 O&O and Public Health Work Groups and acknowledges ongoing discussions about LOINC vs. SNOMED terminologies in cancer pathology. The primary use cases involve transmitting structured pathology data as FHIR resource bundles to CCRs, either directly from the LIS or via an EHR intermediary, promoting structured data collection and exchange for continuity of care, standardized cancer reporting, and research.
