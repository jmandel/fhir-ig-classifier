# PCC.mAPS: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the lack of standardized structure for aggregating and exchanging antepartum care summaries, including significant events, diagnoses, and plans of care derived from visits over the course of an antepartum episode. It focuses on enabling consistent representation of pregnancy-related data for supporting care prior to and leading up to delivery.
-   **Key clinical/business problems it solves:** Improves continuity of care by providing a comprehensive summary of a patient's pregnancy status to antepartum care providers. Facilitates information exchange between different healthcare settings (e.g., obstetrician's office, specialists, hospitals) and potentially with patients' personal health records (PHRs). Supports public health reporting and research efforts related to pregnancy.
-   **Intended scope and boundaries:** The IG defines the structure and content of a FHIR-based Antepartum Summary document. It inherits from the International Patient Summary (IPS) and extends it with specific pregnancy-related observations and sections. The scope is limited to the antepartum period and does not cover labor and delivery or postpartum care, although it acknowledges potential use as a source for those summaries.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `IHE.PCC.mAPS.Composition`: The core profile defining the structure of the Antepartum Summary document. It includes sections for medications, allergies, problems, procedures, immunizations, results, vital signs, social history, pregnancy history, plan of care, and more.
    -   Numerous profiles for specific pregnancy-related observations, such as `PregnancyHistory`, `DateOfFirstPrenatalVisit`, `NumberOfPrenatalVisitsForThisPregnancy`, `GestationalAge`, `DeliveryDateClinicalEstimate`, and many others.
    -   Profiles for social history observations relevant to pregnancy, such as `SmokingTobaccoUseFrequency`, `AlcoholUseFrequency`, `Homelessness`, and `DomesticViolenceRisk`.
    -   `AntepartumVisitSummaryFlowsheetBattery`: A profile for a battery of observations typically collected during antepartum visits.
-   **Notable operations and interactions:** The IG does not define specific FHIR operations. It relies on existing document sharing mechanisms defined in the IHE Document Sharing Health Information Exchange.
-   **Key terminology and value sets:**
    -   LOINC codes for document type (57055-6 Antepartum summary) and various observations.
    -   SNOMED CT codes for conditions, procedures, and social history observations.
    -   Custom value sets for specific concepts like `Antepartum.History.of.Past.Illness.VS`, `Antepartum.Family.History.and.Genetic.Screening.VS`, `Antepartum.Laboratory.VS`, `Antepartum.Education.VS`, and others.
-   **Significant patterns and constraints:**
    -   The `Composition` profile uses a section-based structure, with each section containing specific resource types (e.g., `MedicationStatement`, `AllergyIntolerance`, `Condition`, `Procedure`, `Observation`).
    -   `MustSupport` is used extensively to indicate required elements that content creators should populate if the information is available and permitted by security and consent rules.
    -   The `PregnancyHistory` and `MenstrualStatus` profiles use the `hasMember` element to link related observations, creating a structured representation of pregnancy-related data.

## Technical Essence

This IG defines a FHIR R4 Antepartum Summary document (`IHE.PCC.mAPS.Composition`) built upon the IPS foundation, extending it with pregnancy-specific sections and observations. The core structure is a `Composition` resource with sections for medications, allergies, problems, procedures, immunizations, results, vital signs, social history, pregnancy history, plan of care, family medical history, advance directives, payors, antepartum education, and an antepartum visit summary flowsheet. Each section mandates specific resource types, often constrained by IPS or custom profiles. Key to this IG is the detailed modeling of pregnancy history using an `Observation` resource (`PregnancyHistory`) that aggregates related observations via `hasMember`, including number of live births, preterm births, abortions, ectopic pregnancies, and more. Similarly, `MenstrualStatus` uses `hasMember` to link observations like date of last menstrual period, menses regularity, and hCG+. Social history is captured using profiles like `SmokingTobaccoUseFrequency` and `AlcoholUseFrequency`, with value sets defining units of measure. The `AntepartumVisitSummaryFlowsheetBattery` profile aggregates a set of observations commonly collected during visits, such as gestational age, fetal body weight, fundal height, and fetal heart rate. Constraints enforce the use of specific LOINC and SNOMED CT codes for observations and conditions, ensuring semantic interoperability.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Content Creator creates the `IHE.PCC.mAPS.Composition` resource, populating it with relevant data from the patient's record.
    -   Content Creator shares the document using IHE Document Sharing mechanisms.
    -   Content Consumer retrieves and consumes the document, either viewing it, importing the entire document, or importing discrete data elements.
-   **Important requirements and guardrails:**
    -   Content Creators must populate elements marked with `MustSupport` if the data is available and permitted.
    -   Content Consumers should be able to handle both the presence and absence of `MustSupport` elements.
    -   Conformance to the defined profiles is crucial for interoperability.
-   **Notable design choices and patterns:**
    -   The use of `hasMember` to create structured observations for pregnancy history and menstrual status.
    -   The reliance on existing IHE Document Sharing mechanisms for exchange.
    -   The extensive use of `MustSupport` to guide data population.

## Ecosystem Context

-   **Target systems and users:**
    -   Systems: EHRs, clinical information systems, PHRs, public health reporting systems.
    -   Users: Obstetricians, Maternal-Fetal Medicine specialists, nurses, midwives, public health officials, researchers, patients.
-   **Relationship to other standards/IGs:**
    -   Inherits from and extends the HL7 FHIR International Patient Summary (IPS).
    -   References IHE profiles like Patient Demographics Query for Mobile (PDQm) and Observation Data for Health (ODH).
    -   Potentially related to IHE profiles for Labor and Delivery Summary and Birth and Fetal Death Reporting (BFDRE).
-   **Relevant jurisdictions or programs:** While not explicitly stated, the IG is likely relevant to any jurisdiction or program focused on improving maternal health and pregnancy care. The inclusion of a US Realm National Extension suggests a focus on the United States.
-   **Primary use cases and scenarios:**
    -   Sharing antepartum summaries between providers during pregnancy care.
    -   Facilitating consultations with specialists.
    -   Supporting transitions of care to the hospital for delivery.
    -   Enabling patient access to their pregnancy information.
    -   Supporting public health reporting and research.
