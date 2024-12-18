# laboratory: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The primary challenge addressed by this IG is the lack of harmonization in representing laboratory reports across Europe. It tackles issues related to the use of different terminologies for test coding (LOINC, NPU, SNOMED CT), specimen types, anatomic specifications, and other coded elements. It also addresses the need for a standardized approach to representing laboratory report structure and status management.
-   **Key clinical/business problems it solves:** This IG aims to facilitate the exchange of laboratory reports within Europe, supporting the European Health Data Space (EHDS) and MyHealth@EU initiatives. It enables consistent representation of laboratory data, improving the quality and comparability of test results, which is crucial for clinical decision-making, patient care, and public health surveillance. It also aims to streamline the transition from existing CDA-based solutions to FHIR.
-   **Intended scope and boundaries:** The IG focuses on common laboratory reports within core fields of in-vitro diagnostics, such as clinical biochemistry, hematology, immunohematology, microbiology, and immunology. It excludes specialized domains like histopathology and medical genetics. The current version focuses on common rules applicable to all in-scope situations, without specifying domain-specific profiles (e.g., microbiology). It considers results on human and non-human specimens, as well as non-human specimens paired with a human subject.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `BundleLabReportEu`, `DiagnosticReportLabEu`, `CompositionLabReportEu`, `PatientEuCore`, `ObservationResultsLaboratoryEu`, `SpecimenEu`, `ServiceRequestLabEu`, `HumanNameEu`, `AddressEu`, `BodyStructureEuLab`, `QuantityEuLab`, `RatioEuLab`.
    -   **Extensions:** `DiagnosticReportReference`, `ObservationCertifiedRefMaterialCodeable`, `ObservationCertifiedRefMaterialIdentifer`, `DeviceLabTestKit`, `information-recipient`, `obligation`, `humanname-mothers-family`, `humanname-fathers-family`, `patient-birthPlace`, `patient-mothersMaidenName`, `event-statusReason`, `procedure-method`, `workflow-supportingInfo`, `diagnostic-report-composition-r5`, `specimen-feature-r5`, `specimen-feature-type-r5`, `specimen-collection-device-r5`, `specimen-collection-body-site-r5`, `specimen-collection-body-site-reference-r5`, `bodySite-reference`, `bodyStructure-laterality-r5`, `event-performerFunction`, `iso21090-ADXP-streetName`, `iso21090-ADXP-houseNumber`, `iso21090-ADXP-postBox`, `iso21090-SC-coding`, `iso21090-uncertainty`, `iso21090-uncertaintyType`, `patient-birthPlace`, `patient-animal`, `specimen-container-device-r5`, `observation-analysis-time`, `sexForClinicalUse`, `recordedSexOrGender`, `workflow-supportingInfo`, `observation-triggeredBy-r5`, `observation-value-r5`.
-   **Notable operations and interactions:** The IG does not define specific operations but implies the use of standard FHIR interactions for searching, retrieving, and creating resources.
-   **Key terminology and value sets:**
    -   **Code Systems:** LOINC, NPU, SNOMED CT, UCUM, v2, v3, ICD-10, ISO 3166, ATC, ORPHA, EDQM, AJCC, DICOM, ICCC3, ICD-O-3, NIAID, PEI, NIBISC.
    -   **Value Sets:** `LabCertifiedReferenceMaterialVS`, `LabLateralityEuVs`, `LaboratoryLocalCS`, `LabOrderCodesEuVs`, `LabReportTypesEuVs`, `LabSiteQualifierEuVs`, `LabSpecialtyEuVs`, `LabSpeciesTypesEuVs`, `LabSpecimenAdditiveEu`, `LabSpecimenContainerEu`, `LabSpecimenTypesEuVs`, `LabStudyTypesEuVs`, `LabTechniqueEuVs`, `LaboratoryResultStandardEuVs`, `LoincVs`, `NpuVs`.
-   **Significant patterns and constraints:**
    -   A laboratory report is represented as a `Bundle` of type `document`, with a mandatory `Composition` resource and a mandatory `DiagnosticReport` resource.
    -   The `Composition` defines the report structure and provides a means for assembling the report as a document.
    -   The `DiagnosticReport` refers to the `Composition` using the `extension:diagnosticReport-reference` extension in R4, and the pre-adopted R5 `DiagnosticReport.composition` element.
    -   `Observation` resources represent individual test results or groups of results (panels).
    -   `Specimen` resources describe the collected specimens.
    -   `ServiceRequest` resources represent the laboratory orders.
    -   The IG pre-adopts some R5 elements and rules, such as the rules for including resources in a document Bundle.
    -   The IG defines a set of obligations for different actors (Creator, Repository, Consumer) on specific data elements within profiles.

## Technical Essence

This IG defines a FHIR R4 document-based approach for representing laboratory reports, leveraging a `Bundle` containing a mandatory `Composition` and `DiagnosticReport`. The `Composition` structures the report, while the `DiagnosticReport` provides the core clinical context. The `DiagnosticReport` links to the `Composition` via the pre-adopted R5 `DiagnosticReport.composition` element, or alternatively via the `DiagnosticReportReference` extension in R4. Individual test results or result groups are represented as `Observation` resources, profiled by `ObservationResultsLaboratoryEu`, which are linked to the `DiagnosticReport` via `DiagnosticReport.result`. `Specimen` resources, profiled by `SpecimenEu`, detail specimen information. The IG mandates the use of LOINC or NPU for test coding, SNOMED CT for specimen types and body sites, and UCUM for units of measure. It pre-adopts R5 document bundle inclusion rules, allowing resources referenced by the `DiagnosticReport` to be included in the bundle. Obligations for actors (Creator, Repository, Consumer) are defined on specific data elements within profiles, using the `obligation` extension.

## Implementation Approach

-   **Critical workflows and interactions:** The IG supports workflows related to creating, sending, storing, querying, and consuming laboratory reports. It implies the use of standard FHIR interactions for these operations.
-   **Important requirements and guardrails:**
    -   Consistency between `DiagnosticReport` and `Composition` statuses is crucial.
    -   The `Composition` must include a reference to the `DiagnosticReport`.
    -   The `Bundle` must include only resources that are part of the graph of resources that reference or are referenced from the composition set, either directly or indirectly.
    -   Obligations defined for each actor (Creator, Repository, Consumer) must be considered during implementation.
-   **Notable design choices and patterns:**
    -   The use of a document Bundle to represent a legally signed laboratory report.
    -   The pre-adoption of R5 rules for document Bundle content.
    -   The use of both `DiagnosticReport` and `Composition` to balance document and RESTful paradigms.
    -   The definition of obligations to specify functional capabilities for different actors.

## Ecosystem Context

-   **Target systems and users:** Laboratory information systems (LIS), electronic health record (EHR) systems, public health systems, and other systems that produce, exchange, or consume laboratory reports. Target users include clinicians, laboratory professionals, public health officials, and patients.
-   **Relationship to other standards/IGs:** This IG builds upon the base FHIR R4 specification and references other IGs like the International Patient Summary (IPS). It is designed to be coherent with national IGs and the future European EHR exchange format (E-EHRxF).
-   **Relevant jurisdictions or programs:** Primarily the European Union, with a focus on supporting cross-border exchange through MyHealth@EU and the proposed European Health Data Space (EHDS) regulation.
-   **Primary use cases and scenarios:**
    -   Sharing laboratory reports between healthcare providers within and across European countries.
    -   Supporting clinical decision-making based on standardized laboratory data.
    -   Enabling public health surveillance and research.
    -   Facilitating patient access to their laboratory results.
    -   Managing laboratory report statuses (e.g., preliminary, final, amended, corrected, appended, cancelled, entered-in-error).
    -   Supporting various laboratory report scenarios, including complete, partial, preliminary, updated, cancelled, and error reports.
