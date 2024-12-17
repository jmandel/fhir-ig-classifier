# fhir-ips: Analysis

## Core Purpose & Scope

The **International Patient Summary (IPS) Implementation Guide (IG)** addresses the primary interoperability challenge of sharing a minimal, standardized set of patient health information for unplanned, cross-border care. It solves the key clinical problem of providing essential patient data to clinicians in different countries, enabling them to make informed decisions during unscheduled care encounters. The IG's scope is intentionally limited to a "minimal and non-exhaustive" dataset, focusing on core clinical information that is specialty-agnostic and condition-independent, yet clinically relevant. The boundaries are set by the use case of unplanned care, although the IG acknowledges potential applicability to other scenarios.

## Technical Foundation

The technical foundation of the IPS IG rests on FHIR R4 and is built using a document-centric approach.

**Core Profiles and Extensions:**

-   **`Bundle-uv-ips`:** Defines the IPS document as a FHIR `Bundle` of type `document`.
-   **`Composition-uv-ips`:** Specifies the structure of the IPS document, including required and optional sections (e.g., Allergies, Medications, Problems).
-   **`Patient-uv-ips`:** Constrains the `Patient` resource for representing the subject of the summary.
-   Profiles for core clinical resources: `AllergyIntolerance`, `Condition`, `MedicationStatement`, `MedicationRequest`, `Immunization`, `Procedure`, `Observation` (with specialized profiles for laboratory, radiology, pregnancy, social history, and vital signs), `DeviceUseStatement`, `DiagnosticReport`, `Flag`, `CarePlan`, `ClinicalImpression`, `Consent`, `DocumentReference`, `ImagingStudy`, `Medication`, `Organization`, `Practitioner`, `PractitionerRole`, and `Specimen`.
-   Key extensions: `allergyintolerance-abatement`, `data-absent-reason`, `flag-priority`, `composition-section-note`, and a custom extension for translations within `Coding` elements.

**Notable Operations and Interactions:**

-   **`$summary`:** A custom operation defined on the `Patient` resource to generate an IPS document.
-   **`$docref`:** An operation defined in the International Patient Access (IPA) guide, recommended for generating a persisted IPS document.

**Key Terminology and Value Sets:**

-   **SNOMED CT:** Primary terminology, with a focus on the IPS Terminology subset for global use.
-   **LOINC:** Used for observations, document sections, and problem types.
-   **UCUM:** Required for units of measure.
-   **EDQM Standard Terms:** Used for dose forms and routes of administration.
-   **ISO 3166:** Used for country codes.
-   Custom value sets for specific concepts like allergy reactions, problem types, and medication codes.

**Significant Patterns and Constraints:**

-   **Document-centric approach:** The IPS is defined as a FHIR document (`Bundle` with a `Composition`).
-   **Open slicing:** Most slices are open, allowing for flexibility in including resources beyond the defined IPS profiles.
-   **Must Support:** Elements are marked as Must Support to indicate required data for IPS conformance.
-   **Empty Sections & Missing Data:** Guidance is provided for handling missing data using `emptyReason` in `Composition.section` or specific codes within resources (e.g., SNOMED CT codes for "no known allergy").
-   **Narrative Requirements:** Each section in the `Composition` must have human-readable narrative text (`Composition.section.text`) to ensure a consistent fallback for displaying information, especially in cross-border scenarios.
-   **Medication Representation:** Allows for either `MedicationStatement` or `MedicationRequest` to represent medication information.
-   **Provenance:** While not profiled, the use of `Provenance` resources is encouraged for adding contextual information.

## Technical Essence

The IPS IG defines a FHIR document (`Bundle`) containing a `Composition` resource that structures a patient summary. The `Composition` mandates sections for Allergies, Problems, and Medications, with optional sections for Immunizations, Results, Procedures, Devices, and others. Each section references profiled resources like `AllergyIntolerance`, `Condition`, `MedicationStatement` (or `MedicationRequest`), and `Observation`.  `Observation` is further specialized into profiles for lab results (using LOINC and SNOMED CT), radiology (referencing `ImagingStudy`), pregnancy, social history (tobacco/alcohol use), and vital signs.  Crucially, the IG mandates the use of SNOMED CT as the primary terminology (with the IPS Terminology subset for global use), UCUM for units, and provides specific guidance for representing "no known" information. The `$summary` operation on `Patient` is defined to generate the IPS document, while `$docref` is suggested for creating persisted instances. The IG uses open slicing extensively, allowing flexibility in including resources beyond the core IPS profiles. Each section requires a human-readable narrative (`Composition.section.text`) for fallback display.

## Implementation Approach

The IPS IG is designed to be implemented by systems that generate and consume patient summaries.

**Critical Workflows and Interactions:**

-   **IPS Generation:** Systems can generate an IPS document using the `$summary` operation or by creating a persisted IPS using `$docref`.
-   **Data Inclusion:** Implementers should consider industry best practices for determining which data is relevant for inclusion in the summary, especially for required sections (allergies, problems, medications).
-   **Data Consumption:** Systems consuming IPS documents should be able to process the profiled resources and display the information to clinicians.

**Important Requirements and Guardrails:**

-   **Conformance to Profiles:** Systems must conform to the defined IPS profiles for each resource type.
-   **Terminology Usage:** SNOMED CT is the primary terminology, with specific guidance for using the IPS Terminology subset. LOINC, UCUM, and EDQM Standard Terms are also mandated for specific elements.
-   **Handling of Missing Data:** Systems must be able to handle missing data using the specified mechanisms (`emptyReason` or specific codes).
-   **Narrative Generation:** Systems must generate human-readable narrative for each section in the `Composition`.

**Notable Design Choices and Patterns:**

-   **Document-centric approach:** Facilitates exchange and persistence of the patient summary as a single unit.
-   **Open slicing:** Provides flexibility for implementers to include additional information beyond the core IPS dataset.
-   **Focus on unplanned care:** The IG is designed for the use case of unplanned, cross-border care, but can be adapted for other scenarios.

## Ecosystem Context

**Target Systems and Users:**

-   EHR systems
-   Health Information Exchanges (HIEs)
-   Personal Health Record (PHR) systems
-   Clinicians involved in cross-border care

**Relationship to Other Standards/IGs:**

-   **ISO 27269:** The IPS standard that this IG is based on.
-   **HL7 CDA R2 IPS IG:** An alternative representation of the IPS using CDA.
-   **International Patient Access (IPA) IG:** Provides guidance on accessing individual resources and documents from compatible FHIR servers, including the `$docref` operation.
-   **IHE sIPS:** Provides guidance on the sharing of IPS.
-   **US Core:** Provides a foundation for FHIR implementation in the US and may influence national adaptations of the IPS.
-   **FHIR Clinical Documents:** A developing IG that will provide guidance on aligning CDA and FHIR documents, which may influence future versions of the IPS IG.

**Relevant Jurisdictions or Programs:**

-   European eHealth Network
-   Global Digital Health Partnership (GDHP)
-   National implementations of the IPS (e.g., in the US, Canada, and European countries)

**Primary Use Cases and Scenarios:**

-   **Unplanned, cross-border care:** A patient traveling to another country needs emergency medical care, and the treating clinicians need access to essential health information.
-   **Planned cross-border care:** A patient is referred to a specialist in another country, and the specialist needs access to the patient's medical history.
-   **Migration:** A patient moves to another country, and their new healthcare providers need access to their medical records.
-   **Disaster relief:** Medical teams responding to a disaster in another country need access to patient summaries for affected individuals.
