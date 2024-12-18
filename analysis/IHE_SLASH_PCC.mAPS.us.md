# PCC.mAPS.us: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of creating a standardized, interoperable Antepartum Summary for the US Realm. It focuses on aggregating significant events, diagnoses, and plans of care derived from visits over the course of an antepartum episode, ensuring consistent data exchange between different healthcare systems.
-   **Key clinical/business problems it solves:** The IG solves the problem of fragmented and inconsistent antepartum care information. By providing a structured summary, it facilitates better care coordination, reduces medical errors, and improves patient outcomes by ensuring that all providers have access to a comprehensive view of the patient's pregnancy history.
-   **Intended scope and boundaries:** The scope is limited to the antepartum period, covering care prior to and leading up to delivery in the United States. It defines the structure and content of the Antepartum Summary but does not delve into specific implementation details of individual systems.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `IHE.PCC.APS.Composition.US`: The core profile defining the structure of the Antepartum Summary document, extending the base `IHE.PCC.APS.Composition`.
    -   Numerous profiles for specific observations relevant to antepartum care, such as `GestationalAge`, `FetalBodyWeightPalpation`, `DomesticViolenceRisk`, `DateOfLastMenstralPeriod`, and many more. These are based on US Core and ODH profiles where applicable.
    -   `IHEadvanceDirectives`: A profile based on `Consent` to represent advance directives in the IHE defined method.
-   **Notable operations and interactions:** The IG does not define specific operations or interactions. It implies the use of standard FHIR interactions for creating, updating, and retrieving resources.
-   **Key terminology and value sets:**
    -   SNOMED CT (`$sct`)
    -   LOINC (`$loinc`)
    -   UCUM (`$ucum`)
    -   M49 (`$m49.htm`)
    -   Valuesets from US Core and ODH are referenced as needed.
-   **Significant patterns and constraints:**
    -   The `IHE.PCC.APS.Composition.US` profile mandates specific sections like `sectionPlanOfCare`, `ChiefComplaint`, `ReviewOfSystems`, `PhysicalExams`, and `Payors`.
    -   `mustSupport` is used extensively, equivalent to IHE's **R2** constraint, indicating that source actors shall populate these elements if supported and available.
    -   Profiles constrain observations to specific codes and value sets relevant to antepartum care.

## Technical Essence

This IG defines a US-specific Antepartum Summary as a FHIR Composition (`IHE.PCC.APS.Composition.US`) that aggregates critical pregnancy data. The Composition mandates sections like Plan of Care, Chief Complaint, Review of Systems, Physical Exams, and Payors, each referencing a collection of profiled resources. These resources include US Core and ODH profiles, as well as custom profiles for antepartum-specific observations like Gestational Age, Fetal Body Weight, and various lab results.  The IG leverages SNOMED CT, LOINC, and UCUM for coding.  Each observation profile specifies required codes (e.g., `GestationalAge` uses LOINC code `18185-9`) and value sets. The Composition's `mustSupport` elements, mirroring IHE's R2, dictate that source systems must populate these elements when available and permitted. The IG implicitly relies on standard FHIR create/read interactions for data exchange.

## Implementation Approach

-   **Critical workflows and interactions:** The IG implies workflows involving the creation and maintenance of the Antepartum Summary document throughout the pregnancy. Healthcare providers would create and update individual resources (e.g., Observations, Conditions, Procedures) linked to the Composition.
-   **Important requirements and guardrails:** Implementers must ensure that all resources conform to the defined profiles. The `mustSupport` elements are critical for data completeness. Systems must handle both the presence and absence of optional data gracefully.
-   **Notable design choices and patterns:** The use of a Composition resource to aggregate various observations and other resources is a key design choice. The extensive use of `mustSupport` emphasizes the importance of populating key data elements.

## Ecosystem Context

-   **Target systems and users:** The target systems are EHRs, clinical information systems, and other health IT systems used by obstetricians, midwives, and other healthcare providers involved in antepartum care in the US.
-   **Relationship to other standards/IGs:** This IG builds upon the IHE mAPS profile and heavily utilizes US Core and ODH profiles. It also references the base IHE PCC domain.
-   **Relevant jurisdictions or programs:** This IG is specifically designed for the US Realm, aligning with US-specific coding systems and healthcare practices.
-   **Primary use cases and scenarios:** The primary use case is to provide a comprehensive and standardized summary of a patient's antepartum care, facilitating information exchange between providers and supporting continuity of care. This includes scenarios like transferring care between providers, consultations, and emergency situations where access to the patient's pregnancy history is crucial.
