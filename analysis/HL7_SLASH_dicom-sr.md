# dicom-sr: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG) addresses the interoperability challenge of bridging DICOM Structured Reports (SR), specifically TID 1500 Measurement Reports, with the broader healthcare ecosystem that uses HL7 FHIR. It solves the problem of integrating imaging-derived quantitative and qualitative observations, typically encapsulated in DICOM SR, into non-imaging systems like EMRs and reporting applications that natively support FHIR. The IG's scope is intentionally limited to a one-way transformation from DICOM SR to FHIR, focusing on the Observation resource and a small set of related resources. It does not aim to create a complete DICOM SR from FHIR resources or to cover other DICOM SR templates beyond TID 1500. The IG also does not specify the creation of FHIR DiagnosticReport or Composition resources, acknowledging that use case-specific requirements may necessitate further transformation beyond the scope of this guide.

## Technical Foundation

The technical foundation of this IG rests on several core FHIR R5 profiles:

-   **Observation Profiles:**
    -   `ImagingMeasurementGroup`: Represents DICOM SR measurement group templates (TID 1410, 1411, 1501).
    -   `ImagingMeasurement`: Represents individual imaging measurements from DICOM SR measurement templates (TID 300, 1419).
    -   `DerivedImagingMeasurement`: Represents derived measurements from DICOM SR template TID 1420.
    -   `ImagingQualitativeEvaluation`: Represents qualitative evaluations from DICOM SR templates TID 1500 and 1501.
-   **ImagingSelection Profiles:**
    -   `ImageRegion2d`, `ImageRegion3d`: Represent 2D and 3D image regions (CID 111030).
    -   `ReferencedSegment`, `ReferencedSegmentationFrame`: Represent referenced segments and segmentation frames (CID 121191, 121214).
    -   `RegionInSpace`, `VolumeSurface`: Represent regions in space and volume surfaces (CID 130488, 121231).
    -   `RealWorldValueMap`, `IllustrationOfRoi`, `VisualExplanation`: Represent real-world value maps, ROI illustrations, and visual explanations (CID 126100, 121200, 130401).
-   **Device Profiles:**
    -   `AlgorithmIdentification`: Represents DICOM SR template TID 4019 for algorithm identification.
    -   `GeneralEquipment`: Represents the DICOM General Equipment Module.
-   **BodyStructure Profiles:**
    -   `FindingSite`: Represents finding site content items (CID SCT#363698007).
    -   `TrackingIdentifiers`: Represents DICOM SR observation tracking identifiers.

The IG defines several key value sets, primarily drawing from DICOM, SNOMED CT, LOINC, and NCI Thesaurus, to ensure consistent terminology mapping. Notable operations involve searching for existing Patient, ImagingStudy, and ServiceRequest resources based on DICOM identifiers and creating new Observation, Device, BodyStructure, and ImagingSelection resources based on the DICOM SR content.

## Technical Essence

This IG's core functionality revolves around a deterministic mapping from DICOM SR TID 1500 Measurement Report content items to FHIR Observation resources, leveraging ImagingSelection for spatial context and Device for equipment/algorithm details. Each `ImagingMeasurementGroup` Observation represents a DICOM Measurement Group container, with `hasMember` relationships to child `ImagingMeasurement` (for numerical measurements) and `ImagingQualitativeEvaluation` (for coded/text evaluations) Observations. `DerivedImagingMeasurement` Observations model derived measurements, linked to source `ImagingMeasurementGroup` Observations via `derivedFrom`. `ImagingSelection` resources, profiled for specific DICOM CIDs, provide detailed spatial references (e.g., `ImageRegion2d`, `ReferencedSegment`) and are linked to Observations via the `focus` element. Device resources, either `GeneralEquipment` or `AlgorithmIdentification`, capture equipment and algorithm details, with `AlgorithmIdentification` instances linked to a parent `GeneralEquipment` device. The `code` element of each Observation maps to the DICOM Concept Name, while `valueQuantity` or `valueCodeableConcept` represent the measurement or evaluation value. The mapping process involves traversing the DICOM SR content tree, creating corresponding FHIR resources, and establishing relationships based on the DICOM SR structure and semantics. Identifiers from the DICOM SR (e.g., Patient ID, Study Instance UID, Accession Number) are used to link the created FHIR resources to existing Patient, ImagingStudy, and ServiceRequest resources, assumed to be present in the target FHIR server.

## Implementation Approach

The IG is designed to be implemented as a one-way transformation process, likely within a middleware or integration engine. Implementations will need to:

1.  Retrieve the DICOM SR Measurement Report.
2.  Parse the DICOM SR content, navigating the content tree.
3.  Search for existing FHIR resources (Patient, ImagingStudy, ServiceRequest) based on DICOM identifiers.
4.  Create new FHIR resources (Observation, Device, BodyStructure, ImagingSelection) based on the mapping rules defined in the IG.
5.  Establish relationships between the created resources (e.g., `hasMember`, `derivedFrom`, `focus`, `device`).
6.  Store the created FHIR resources in a FHIR server.

The IG provides detailed mapping tables (ConceptMaps) that specify how DICOM attributes and content items should be mapped to FHIR resource elements. Implementers will need to translate these mappings into code that can process DICOM SR data and generate the corresponding FHIR resources. The IG also includes examples of DICOM SR data and the corresponding FHIR resources, which can be used for testing and validation.

## Ecosystem Context

This IG targets systems and users involved in the exchange and utilization of imaging-derived measurements and qualitative evaluations. The primary target systems include:

-   **Imaging Modalities and Analysis Systems:** Systems that create DICOM SR Measurement Reports.
-   **EMRs, Reporting Applications, and other Clinical Systems:** Systems that consume and utilize imaging results.
-   **FHIR Gateways and Integration Engines:** Systems that facilitate the exchange of data between DICOM and FHIR environments.

The primary users include:

-   **Clinicians:** Radiologists, sonographers, and other healthcare professionals who interpret and utilize imaging results.
-   **Software Developers:** Developers of imaging modalities, analysis systems, EMRs, reporting applications, and integration engines.
-   **Data Analysts and Researchers:** Individuals who utilize imaging data for research and analysis.

The IG is related to other standards and IGs, including:

-   **DICOM:** The primary standard for medical imaging, including Structured Reporting.
-   **HL7 FHIR:** The primary standard for healthcare data exchange.
-   **IHE Radiology Technical Framework:** Provides guidance on integrating imaging workflows into the broader healthcare enterprise.
-   **FHIRcast:** A standard for sharing FHIR resources in real-time, which can be used in conjunction with this IG to distribute imaging results.

The IG is relevant to jurisdictions and programs that promote interoperability and data sharing in healthcare, particularly those focused on imaging and radiology. The primary use cases include:

1.  **Extracting imaging results for use in reporting:** Enabling reporting applications to incorporate imaging measurements and qualitative evaluations into clinical reports.
2.  **Extracting imaging results for FHIRcast content sharing:** Facilitating real-time sharing of imaging results with other systems and users via FHIRcast.
3.  **Integrating imaging results into EMRs:** Making imaging measurements and qualitative evaluations available within the EMR for clinical decision support and longitudinal patient care.
4.  **Enabling data analytics and research:** Providing a standardized way to extract and utilize imaging data for research and analysis.
