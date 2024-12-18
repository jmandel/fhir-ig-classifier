# lab: Analysis

## Core Purpose & Scope

- **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the exchange of laboratory reports within the Belgian healthcare system using FHIR. It focuses on ensuring consistent representation of laboratory data, including patient demographics, specimen details, observations, and diagnostic reports.
- **Key clinical/business problems it solves:** It solves the problem of inconsistent and non-interoperable laboratory data exchange, enabling seamless sharing of lab results between different healthcare providers and systems. This improves care coordination, reduces errors, and enhances patient safety. It also facilitates public health reporting and research by providing a standardized format for laboratory data.
- **Intended scope and boundaries:** The scope is limited to laboratory reports within the Belgian healthcare context. It defines profiles for core resources like `DiagnosticReport`, `Observation`, `Specimen`, `Patient`, `Practitioner`, `Organization`, and `ServiceRequest`. It does not cover other types of diagnostic reports (e.g., radiology, pathology) or broader clinical workflows beyond the exchange of lab results.

## Technical Foundation

- **Core profiles and extensions:**
    - `BeLaboratoryReport`: Based on `DiagnosticReport`, defines the structure for a Belgian laboratory report.
    - `BeObservationLaboratory`: Based on `Observation`, defines how to represent laboratory observations, including qualifiers and reference ranges.
    - `BeSpecimenLaboratory`: Based on `Specimen`, defines how to represent specimen information.
    - `BePatient`, `BePractitioner`, `BeOrganization`, `BePractitionerRole`: Profiles for core entities involved in the laboratory reporting process, based on the core FHIR resources.
    - `BeExtNote`: Extension to add coded annotations to resources.
    - `BeReferenceRangeComment`: Extension to add comments to `Observation.referenceRange`.
- **Notable operations and interactions:** The IG primarily focuses on the exchange of laboratory reports as FHIR documents (using `Bundle` of type `document`) or as a collection of individual resources. It implies the use of standard FHIR RESTful interactions (e.g., `POST`, `GET`) for creating and retrieving these resources.
- **Key terminology and value sets:**
    - LOINC: For coding laboratory tests and observations.
    - SNOMED CT: For coding various clinical concepts, including specimen types, collection methods, and body sites.
    - HL7 v2 Table 0074: For categorizing laboratory reports.
    - Belgian-specific code systems: `cd-hcparty` for healthcare party types, and custom naming systems for identifiers (e.g., `be-ns-lab-report-bundle-id`).
    - Value sets: `be-vs-coded-annotation-types`, `be-vs-observation-interpretation`.
- **Significant patterns and constraints:**
    - The `BeLaboratoryReport` profile mandates the use of `identifier`, `status`, `category`, `code`, `subject`, `effectiveDateTime`, `issued`, `performer`, `resultsInterpreter`, `specimen`, and `result` elements.
    - The `BeObservationLaboratory` profile mandates the use of `status`, `code`, `subject`, `effectiveDateTime`, `performer`, and `value[x]` elements.
    - The `BeSpecimenLaboratory` profile mandates the use of `status`, `type`, and `receivedTime` elements.
    - The IG requires the use of specific code systems (e.g., LOINC, SNOMED CT) for certain elements.
    - It defines specific extensions for adding coded annotations and comments to reference ranges.

## Technical Essence

This IG defines a Belgian national profile for laboratory reporting using FHIR. It mandates a `Bundle` of type `document` or `collection` containing a `Composition` resource (`BeLaboratoryReportComposition`) referencing a `DiagnosticReport` (`BeLaboratoryReport`). The `DiagnosticReport` references `Observation` resources (`BeObservationLaboratory`) representing individual lab results, linked to `Specimen` resources (`BeSpecimenLaboratory`).  `BeObservationLaboratory` uses LOINC codes for `code.coding`, SNOMED CT for `bodySite` and `method`, and allows for qualifiers via `component` elements (e.g., relative time, substance amount). `referenceRange` is used with a custom extension for comments. Identifiers leverage Belgian-specific naming systems (e.g., `be-ns-lab-report-diagnostic-report-id`). The `Composition` resource provides document-level metadata and references the `DiagnosticReport`. The IG mandates specific cardinality and data types for core elements within these profiles, ensuring consistent representation of laboratory data.

## Implementation Approach

- **Critical workflows and interactions:** The primary workflow involves a laboratory information system (LIS) generating a FHIR `Bundle` containing a `Composition` resource that references a `DiagnosticReport` and related `Observation` and `Specimen` resources. This bundle is then transmitted to a receiving system (e.g., an electronic health record (EHR) or another LIS) via standard FHIR RESTful interactions.
- **Important requirements and guardrails:** Implementers must adhere to the defined profiles and extensions, ensuring that mandatory elements are populated and that the specified code systems are used. They must also ensure the uniqueness of identifiers, particularly the `BeLabReportDiagnosticReportId`.
- **Notable design choices and patterns:** The use of a `Bundle` of type `document` or `collection` facilitates the exchange of complete laboratory reports as a single unit. The use of profiles and extensions ensures consistency and allows for the inclusion of Belgian-specific requirements. The reliance on standard FHIR resources and interactions promotes interoperability with other FHIR-based systems.

## Ecosystem Context

- **Target systems and users:** The primary target systems are LISs, EHRs, and other healthcare IT systems involved in the exchange of laboratory data within Belgium. The users are healthcare providers, laboratories, and potentially patients.
- **Relationship to other standards/IGs:** This IG builds upon the core FHIR specification and references other relevant standards, such as HL7 v2 and LOINC. It is also related to the broader Belgian eHealth standards and the KMEHR (Kind Messages for Electronic Healthcare Records) standard.
- **Relevant jurisdictions or programs:** This IG is specifically designed for the Belgian healthcare system and is relevant to the Belgian eHealth program.
- **Primary use cases and scenarios:** The primary use case is the electronic exchange of laboratory reports between different healthcare providers and systems. This includes scenarios such as a laboratory sending results to a hospital, a general practitioner receiving results from a laboratory, and a patient accessing their lab results through a patient portal.
