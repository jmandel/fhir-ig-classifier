# au-fhir-core: Analysis

## Core Purpose & Scope

The **AU Core Implementation Guide (IG)** addresses the primary interoperability challenge of standardizing the exchange of core digital health and administrative information within the Australian healthcare context. It aims to solve problems related to data fragmentation and inconsistent representation by defining a minimum set of requirements for FHIR-based interfaces. The IG's scope is bounded to foundational data elements and interactions necessary for provider and patient information systems, serving as a baseline for more specialized use cases. It specifically focuses on enabling the recording, updating, searching, and retrieval of core health information, aligning with the Australian Core Data for Interoperability (AUCDI) initiative.

## Technical Foundation

The AU Core IG builds upon the FHIR R4 specification and leverages AU Base profiles where available.

**Core Profiles:**

-   **Patient:** Includes demographics, identifiers (IHI, Medicare, DVA), communication preferences, and extensions for indigenous status, gender identity, and pronouns.
-   **Practitioner:** Supports practitioner details, qualifications, and identifiers (HPI-I).
-   **PractitionerRole:** Defines roles, specialties, locations, and contact information, linking to Practitioner and Organization.
-   **Organization:** Represents healthcare organizations with identifiers (HPI-O, ABN), address, and contact details.
-   **Location:** Defines physical locations with address, type, and operational status.
-   **Condition:** Represents problems, diagnoses, and health concerns, supporting status, category, severity, and onset.
-   **AllergyIntolerance:** Captures allergies and adverse reactions, including substance, manifestation, and criticality.
-   **Procedure:** Documents procedures performed, including status, code, body site, and performer.
-   **Immunization:** Records immunizations administered, including vaccine code, status, and administration details.
-   **MedicationRequest:** Supports medication orders and prescriptions, including medication, dosage, and dispensing information.
-   **Medication:** Identifies medicinal products, including form, strength, and manufacturer.
-   **Observation:** Includes various observation profiles for vital signs (Blood Pressure, Body Height, Body Temperature, Body Weight, Heart Rate, Respiration Rate, Waist Circumference), diagnostic results (Pathology, Diagnostic), and smoking status.

**Notable Extensions:**

-   **AU Core Sex Assigned At Birth:** Profiles the core FHIR extension `Person Recorded Sex Or Gender` to represent sex assigned at birth.
-   **Australian Indigenous Status:** (from AU Base)
-   **Individual Pronouns:** (from core FHIR)
-   **Individual Gender Identity:** (from core FHIR)

**Key Terminology and Value Sets:**

-   SNOMED CT (Australian extension)
-   LOINC
-   Australian Medicines Terminology (AMT)
-   Australian Immunisation Register Vaccine Codes
-   PBS Item Codes
-   ActEncounterCode - AU Extended (from AU Base)
-   Australian Pronouns (from NCTS)
-   Gender Identity Response (from NCTS)
-   Biological Sex (from NCTS)

**Significant Patterns and Constraints:**

-   **Must Support:** Elements are marked as "Must Support" with specific obligations defined using obligation codes (e.g., `SHALL:populate-if-known`, `SHALL:no-error`).
-   **Missing Data:** Guidance provided for representing missing data using the `DataAbsentReason` extension or appropriate codes from value sets.
-   **Suppressed Data:** Guidance provided for handling suppressed data due to privacy or security reasons.
-   **Contained Resources:** Encouraged for representing medicinal product identification within the context of a referencing resource.
-   **Choice of Data Types:** Profiles specify allowed data types for elements like `Observation.effective[x]` and `Procedure.performed[x]`.
-   **Choice of Identifiers:** Profiles define supported identifier types (e.g., IHI, Medicare, DVA for Patient).
-   **Choice of Terminology:** Profiles specify supported value sets for elements like `Immunization.vaccineCode` and `Medication.code`.

## Technical Essence

The AU Core IG defines a minimal interoperability baseline for Australian healthcare by profiling FHIR resources to constrain core data elements and interactions. It mandates support for key identifiers (IHI, HPI-O, HPI-I, Medicare, DVA, ABN) and leverages AU Base for Australian-specific extensions like Indigenous Status.  Profiles enforce "Must Support" on critical elements with obligations for Responders to populate if known and for Requesters to handle without error.  Missing or suppressed data is managed via `DataAbsentReason` or specific codes.  Medication information encourages contained resources for product identification.  Observations are profiled for vital signs, diagnostic results, and smoking status, with specific guidance on coding and handling components.  Search interactions are defined using SHALL and SHOULD requirements, emphasizing patient-centric queries with support for chained parameters and multiple value searches.  Terminology bindings leverage SNOMED CT-AU, LOINC, AMT, and other relevant code systems. The IG mandates TLS 1.2+ for secure communication and recommends SMART App Launch for authentication.

## Implementation Approach

The IG is designed for implementation through two approaches: "Profile Only Support" for systems using AU Core profiles without RESTful interactions, and "Profile Support + Interaction Support" for systems implementing both profiles and RESTful interactions defined in the CapabilityStatements. Implementers must declare conformance to one or both approaches. Critical workflows involve querying for patient demographics, conditions, allergies, medications, immunizations, procedures, and observations. Responders must populate "Must Support" elements if known and handle missing/suppressed data appropriately. Requesters must handle "Must Support" elements without error and support specified search parameters. The IG emphasizes patient-centric searches and provides guidance on representing communication preferences, body site/laterality, and medicine information.

## Ecosystem Context

The AU Core IG targets Australian healthcare providers, software vendors, and government agencies involved in digital health information exchange. It is closely related to the AU Base IG, inheriting its foundational elements and extending them with conformance requirements. It also aligns with the AUCDI initiative, providing a technical framework for implementing its data requirements. The IG considers international standards like IPA, IPS, and US Core for compatibility. Primary use cases include patient summary exchange, eReferrals, medication management, and population health reporting. The IG is intended to be used as a foundation for more specific use case IGs within the Australian healthcare ecosystem.
