# RAD.IMR: Analysis

## Core Purpose & Scope
- **Primary interoperability challenges this IG addresses:** The IHE Radiology Interactive Multimedia Report (IMR) Implementation Guide primarily addresses the challenge of encoding, communicating, and presenting diagnostic reports containing interactive multimedia content, such as hyperlinked images, measurements, and regions of interest, in a standardized and interoperable manner. It focuses on enabling the inclusion of rich media within reports while maintaining the ability to interact with the linked content.
- **Key clinical/business problems it solves:** IMR solves the problem of static, text-based radiology reports that lack direct links to relevant images and findings. It enhances clinical communication by allowing clinicians to directly access and interact with referenced images and measurements within the report context, improving diagnostic accuracy and efficiency. It also facilitates the transition from traditional HL7 ORU report integration to a more modern, FHIR-based approach.
- **Intended scope and boundaries:** The scope of IMR is limited to radiology diagnostic reports with interactive multimedia content. It defines how to encode such reports using FHIR resources, how to store and retrieve them, and how to display them with interactive capabilities. It does not address real-time communication of multimedia content during report creation, nor does it cover report content encoding using coded values. It also does not address inter-enterprise use cases in this version.

## Technical Foundation
- **Core profiles and extensions:**
    - `IMRDiagnosticReport`: Profile on `DiagnosticReport` to represent multimedia reports, mandating the inclusion of a rendered report in HTML format (and optionally PDF) within `presentedForm`.
    - `IMRServiceRequest`: Profile on `ServiceRequest` to capture the order for an imaging procedure.
    - `IMRImagingStudy`: Profile on `ImagingStudy` to represent the imaging study subject to the report.
    - `ImagingStudyEndpoint`: Profile on `Endpoint` to specify how to retrieve a study.
    - `AssociatedStudy`: Extension on `DiagnosticReport` to reference associated studies used during reporting.
- **Notable operations and interactions:**
    - `Store Multimedia Report [RAD-141]`: Transaction for storing multimedia reports (using a FHIR transaction bundle).
    - `Display Multimedia Report [RAD-142]`: Transaction defining the display requirements for multimedia reports.
    - `Find Multimedia Report [RAD-143]`: Transaction for querying `DiagnosticReport` resources based on various parameters.
    - `Retrieve Rendered Multimedia Report [RAD-144]`: Transaction for retrieving a rendered report.
- **Key terminology and value sets:**
    - `ImagingStudyEndpointConnectionTypeVS`: Value set for endpoint connection types (e.g., `ihe-iid`, `dicom-wado-rs`).
    - `ImagingStudyEndpointPayloadTypeVS`: Value set for endpoint payload types (e.g., `Study`).
    - `IMRServiceRequestIntentVS`: Value set for service request intents (e.g., `order`, `filler-order`).
- **Significant patterns and constraints:**
    - The use of FHIR `DiagnosticReport` as the primary resource for encoding multimedia reports.
    - The requirement to include a rendered report in HTML format within `DiagnosticReport.presentedForm`.
    - The use of `ImagingSelection` resources (FHIR R5) to capture observation imaging context, including image and non-image references.
    - Constraints on `DiagnosticReport.text` to embed image references using `<span>` elements with specific attributes.
    - Constraints on `DiagnosticReport.presentedForm` to include `contentType`, `size`, and `hash` for rendered reports.

## Technical Essence
IMR leverages FHIR `DiagnosticReport` as the core resource, mandating an HTML-rendered report within `presentedForm`, either embedded or by URL.  `DiagnosticReport.text` embeds image references using `<span>` elements, each referencing an `ImagingSelection` resource (FHIR R5) that details the image context (series, instance, frame). `ImagingSelection.endpoint` guides URL construction for image retrieval, ensuring ready-to-present content. The `Store Multimedia Report [RAD-141]` transaction uses a FHIR transaction bundle to create the `DiagnosticReport` and related resources (`ServiceRequest`, `ImagingStudy`). `Find Multimedia Report [RAD-143]` enables querying `DiagnosticReport` resources, while `Retrieve Rendered Multimedia Report [RAD-144]` fetches the pre-rendered report. The design mandates that all referenced resources are standalone and identifiable, not contained.

## Implementation Approach
- **Critical workflows and interactions:**
    1. Report Creator generates a `DiagnosticReport` with multimedia content and a rendered HTML report.
    2. Report Creator stores the report using `Store Multimedia Report [RAD-141]`.
    3. Report Reader or Rendered Report Reader finds the report using `Find Multimedia Report [RAD-143]`.
    4. Report Reader processes the report and displays it, generating hyperlinks for image references.
    5. Rendered Report Reader retrieves and displays the pre-rendered report using `Retrieve Rendered Multimedia Report [RAD-144]`.
    6. User interacts with the report, clicking on hyperlinks to view images and measurements.
- **Important requirements and guardrails:**
    - Report Creator must generate a rendered HTML report and include it in `DiagnosticReport.presentedForm`.
    - Report Reader must be able to display the report and handle hyperlinks to images and measurements.
    - Rendered Report Reader must be able to retrieve and display the pre-rendered HTML report.
    - Report Repository must support storing, querying, and retrieving `DiagnosticReport` resources.
    - All referenced resources must be standalone and identifiable.
- **Notable design choices and patterns:**
    - Use of FHIR `DiagnosticReport` as the primary resource.
    - Inclusion of a pre-rendered HTML report.
    - Use of `ImagingSelection` to capture observation imaging context.
    - Reliance on hyperlinks for interactive content.

## Ecosystem Context
- **Target systems and users:**
    - Target systems include reporting systems (Report Creator), EMRs and PACS (Report Reader, Rendered Report Reader), and report repositories (Report Repository).
    - Target users are primarily radiologists and clinicians.
- **Relationship to other standards/IGs:**
    - IMR builds upon FHIR R4 and references DICOM standards (e.g., WADO-RS).
    - It relates to other IHE profiles like Basic Image Review (BIR), AI Results (AIR), and Invoke Image Display (IID).
    - It can be grouped with ITI profiles like ATNA and IUA for security.
- **Relevant jurisdictions or programs:**
    - IMR is an international standard developed under the IHE Radiology domain.
- **Primary use cases and scenarios:**
    - Reviewing a radiology report with interactive links to images and measurements.
    - Comparing a current study with a prior study that has an associated multimedia report.
    - Accessing and interacting with multimedia content within a report from an EMR or PACS.
