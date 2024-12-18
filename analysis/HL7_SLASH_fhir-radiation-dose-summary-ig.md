# fhir-radiation-dose-summary-ig: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG) addresses the interoperability challenge of sharing minimal radiation dose information from dose management systems to interconnected systems like RIS and EHRs. It primarily solves the clinical and business problem of incorporating radiation dose summaries into imaging reports, as mandated by certain regulations (e.g., California Senate Bill No. 1237, French order of 22 September 2006). The IG's scope is limited to summarizing dose information from a single irradiation act (which may contain multiple irradiation events) related to diagnostic imaging procedures (CT, XA, DX, RF, MG, NM) and radiopharmaceutical administrations. It explicitly excludes cumulative dose calculations, radiotherapy, practitioner exposure, and enhanced dose data like SSDE and organ dose.

## Technical Foundation

The IG's technical foundation rests on FHIR R4 and leverages the `fhir.dicom` package. It defines several core profiles:

-   **RadiationDoseSummary:** An `Observation` profile that provides an overview of an irradiation act, including contextual information (patient, device, practitioner, imaging study) and dose measurements.
-   **RadiationSummaryReport:** A `Composition` profile that structures a report document referencing the `RadiationDoseSummary`, `IndicationObservation`, and `PregnancyStatus` resources.
-   **IndicationObservation:** An `Observation` profile to capture indications related to the performed procedure.
-   **ModalityDevice:** A `Device` profile to represent irradiating modalities.
-   **ObservationPregnancyStatusUvIps:** An `Observation` profile from the International Patient Summary (IPS) IG to provide the pregnancy status of the patient.

Notable operations include `POST` for creating `RadiationDoseSummary` resources and `GET` for searching and retrieving them. Key terminology includes value sets for isotopes, procedure types, radiopharmaceuticals, and radiation dose summary component types, drawing heavily from DICOM CIDs and code systems like LOINC and SNOMED CT. The IG mandates specific identifier patterns, such as using `urn:dicom:uid` for DICOM UIDs.

## Technical Essence

This IG defines a FHIR-based framework for exchanging radiation dose summaries, centered around the `RadiationDoseSummary` profile, an `Observation` that aggregates minimal dose information from a single irradiation act. This profile links to an `ImagingStudy` via `partOf`, references the irradiated `Patient` and authorizing `Practitioner`, and identifies the `ModalityDevice`. Dose measurements are encoded as `component` elements, each with a `code` from a defined value set and a `valueQuantity` or `valueCodeableConcept`. The `RadiationSummaryReport` profile, a `Composition`, aggregates the `RadiationDoseSummary` with optional `IndicationObservation` and `PregnancyStatus` resources. Systems must support `POST` of `RadiationDoseSummary` resources, typically bundled with related resources, and `GET` for searching based on patient, device, date, and identifiers. DICOM identifiers are mandated, with specific patterns for UIDs (e.g., `urn:dicom:uid` for `study-instance-uid`). The `valueString` element of `RadiationDoseSummary` allows for a textual representation of the dose summary, based on a locally defined template.

## Implementation Approach

The IG outlines two primary implementation scenarios: 1) RDSR summary to FHIR, where a Radiation Dose Summary Producer (RDSP) extracts data from DICOM RDSRs, queries a FHIR server for contextual resources, and `POST`s a `RadiationDoseSummary` resource; and 2) Grouping RDSP and FHIR Server, where a combined RDSP/FHIR server manages both dose data extraction and FHIR resource hosting. The RDSP must validate generated resources against the defined profiles. The FHIR server must support searching `RadiationDoseSummary` resources based on patient, device, date, and identifiers. The IG emphasizes the use of DICOM identifiers for referencing resources and mandates TLS 1.2 or higher for secure communication.

## Ecosystem Context

The primary target systems are Dose Management Systems (acting as RDSPs), FHIR Servers, and Radiology Information Systems/Electronic Health Records (acting as RDSCs). The IG is relevant to healthcare providers, particularly in radiology and nuclear medicine, and aligns with regulations in jurisdictions like California and France. It relates to other standards like DICOM (for RDSR structure and terminology) and IHE REM (for dose data collection). The primary use case is the incorporation of radiation dose summaries into imaging reports, facilitating compliance with reporting requirements and enhancing clinical documentation. The IG is sponsored by the HL7 Imaging Integration and Clinical Quality Information Work Groups.
