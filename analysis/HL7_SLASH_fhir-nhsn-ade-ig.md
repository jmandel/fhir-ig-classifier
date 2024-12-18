# fhir-nhsn-ade-ig: Analysis

## Core Purpose & Scope

**Primary interoperability challenges this IG addresses:**

-   Standardized reporting of inpatient adverse drug events (ADEs), specifically hypoglycemia and hyperglycemia, from EHRs to the National Healthcare Safety Network (NHSN).
-   Enabling EHRs to serve as source systems for reporting linked blood glucose and medication administration data.

**Key clinical/business problems it solves:**

-   Improves patient safety by facilitating the tracking and analysis of medication-related hypoglycemia and hyperglycemia.
-   Supports hospital quality improvement efforts and benchmarking of glycemic management.
-   Provides a mechanism for standardized reporting of ADE data to a national network.

**Intended scope and boundaries:**

-   Focuses on inpatient settings only.
-   Excludes hypoglycemia resulting only in outpatient care.
-   Addresses ADE data collection at the patient level (individual blood glucose and medication data).
-   Does not describe the calculation of any measures for hypoglycemia or hyperglycemia rates; these are calculated subsequent to reporting.

## Technical Foundation

**Core profiles and extensions:**

-   **Composition:** Two profiles are defined, one for reporting ADE data related to hyperglycemia and one for hypoglycemia. These compositions contain linked eMAR, blood glucose data, and diabetes diagnosis data (for hyperglycemia). They also include counts of patients with diabetes or ESRD/ESLD diagnoses, irrespective of ADE occurrence.

**Notable operations and interactions:**

-   The IG implies a push-based reporting mechanism where EHRs generate and transmit Composition resources to NHSN.

**Key terminology and value sets:**

-   The IG does not explicitly define specific value sets but relies on standard terminologies for medications (e.g., RxNorm), laboratory results (e.g., LOINC), and conditions (e.g., SNOMED CT).

**Significant patterns and constraints:**

-   The Composition resources are central to the reporting mechanism.
-   The IG emphasizes the importance of linking medication administration and blood glucose data.
-   Constraints are likely to be defined within the Composition profiles to ensure data quality and consistency.

## Technical Essence

This IG defines a standardized mechanism for reporting inpatient hypoglycemia and hyperglycemia events by leveraging FHIR Composition resources. EHRs generate Composition instances, one per patient encounter, containing linked MedicationAdministration and Observation resources representing antidiabetic drug administrations and blood glucose measurements, respectively. For hyperglycemia, the Composition also includes Condition resources representing diabetes diagnoses. Additionally, the Composition includes counts of patients with diabetes or ESRD/ESLD diagnoses, irrespective of ADE occurrence, captured likely through List or Group resources. These Composition resources are then transmitted to NHSN, enabling the calculation of quality metrics and supporting benchmarking efforts. The IG implicitly relies on standard terminologies like RxNorm, LOINC, and SNOMED CT for coding medications, laboratory results, and conditions.

## Implementation Approach

**Critical workflows and interactions:**

1.  EHRs identify inpatient encounters.
2.  For each encounter, EHRs extract relevant data: medication administrations (antidiabetic drugs), blood glucose results, and diabetes diagnoses (for hyperglycemia).
3.  EHRs generate a FHIR Composition resource containing linked MedicationAdministration, Observation, and Condition (for hyperglycemia) resources.
4.  EHRs include counts of patients with diabetes or ESRD/ESLD diagnoses in the Composition.
5.  EHRs transmit the Composition resource to NHSN.

**Important requirements and guardrails:**

-   Accurate linking of medication administration and blood glucose data is crucial.
-   Data must be coded using standard terminologies.
-   EHRs must be able to identify and count patients with diabetes or ESRD/ESLD diagnoses.

**Notable design choices and patterns:**

-   The use of Composition resources provides a structured and standardized way to report ADE data.
-   The focus on linked data enables the analysis of the relationship between medication administration and blood glucose levels.

## Ecosystem Context

**Target systems and users:**

-   Target systems: EHRs in acute care hospitals.
-   Target users: Hospitals, quality improvement teams, and the CDC's National Healthcare Safety Network (NHSN).

**Relationship to other standards/IGs:**

-   Similar standards: Profiles for ICSR Transfusion and Vaccination Adverse Event Detection and Reporting, ISO/HL7 27953-2:2011.
-   Leverages HL7 FHIR and builds upon NHSN's experience with electronic reporting.

**Relevant jurisdictions or programs:**

-   United States (U.S.) hospitals.
-   Centers for Disease Control and Prevention (CDC) National Healthcare Safety Network (NHSN).

**Primary use cases and scenarios:**

-   Reporting of inpatient hypoglycemia and hyperglycemia events to NHSN.
-   Tracking and benchmarking of glycemic management in hospitals.
-   Supporting quality improvement efforts related to medication safety.
-   Calculating rates of hypoglycemic and hyperglycemic events as defined by NQF quality measures.
