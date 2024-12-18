# opioid-mme-r4: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** Standardizing the calculation of Morphine Milligram Equivalents (MME) for opioid medications across different systems and settings. It addresses the challenge of inconsistent conversion factors and calculation methods, which can lead to discrepancies in assessing opioid dosage and potential risks.
-   **Key clinical/business problems it solves:** Enables consistent and accurate assessment of opioid dosage, facilitating safer prescribing practices, monitoring of patient opioid exposure, and supporting clinical decision-making related to opioid therapy. It also supports quality measurement and reporting related to opioid use.
-   **Intended scope and boundaries:** The IG focuses on calculating MME for medications, specifically for FHIR MedicationRequest resources. It provides a base MME calculator and logic for applying it to these resources. The scope is limited to opioid medications and does not cover other types of drugs. It also does not address dosage decisions related to the management of opioid use disorder.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `MMEMedicationRequest`: A profile defining the expected data elements within a MedicationRequest resource for MME calculation.
-   **Notable operations and interactions:** The IG defines a `Prescriptions` function to normalize FHIR MedicationRequest resources into a format suitable for the base MME calculator.
-   **Key terminology and value sets:**
    -   RxNorm: Used for coding medications.
    -   UCUM: Used for units of measure.
    -   `CDCMMEClinicalConversionFactors`: A CodeSystem supplement defining conversion factors for various opioid ingredients, dose forms, and dose ranges.
    -   CDC MME Usage Context Codes: A code system defining a `task` usage context of `mme-calculation`.
-   **Significant patterns and constraints:**
    -   The MME calculator uses ingredient data to determine the daily dose, considering dose form, dose quantity, and doses per day.
    -   Conversion factors are configurable via CodeSystem supplements, allowing for flexibility in different settings.
    -   The `MMEMedicationRequest` profile specifies the required elements from MedicationRequest resources for MME calculation.
    -   The IG emphasizes cautions related to the use of MME calculations, particularly regarding dose conversions and management of opioid use disorder.

## Technical Essence

This IG defines a standardized MME calculation by leveraging RxNorm-coded MedicationRequests, normalizing them via a `Prescriptions` function into a simplified structure containing drug code, dose quantity (UCUM), and doses per day. The core logic iterates through ingredients, calculating daily dose based on dose form (patch, mass, volume, other) and applying configurable conversion factors from a CodeSystem supplement linked to RxNorm either by name or a `task` usage context of `mme-calculation`. These factors can be ingredient-specific, dose-form-specific (with optional doses-per-day modifiers), or dose-range-specific. The calculator aggregates ingredient-level MME/d values to determine the total MME/d for each drug, then summarizes across all active opioid medications. The IG provides a default set of clinical conversion factors based on CDC guidance.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  Retrieve active opioid MedicationRequest resources for a patient.
    2.  Normalize the MedicationRequest resources using the `Prescriptions` function.
    3.  Look up conversion factors using the specified CodeSystem supplement.
    4.  Calculate the MME/d for each medication using the base MME calculator.
    5.  Summarize the total MME/d across all medications.
-   **Important requirements and guardrails:**
    -   Implementations must handle the different types of conversion factors (ingredient, dose-form, dose-range).
    -   If a conversion factor cannot be determined, implementations should indicate this.
    -   Implementations must adhere to the cautions outlined in the IG, particularly regarding dose conversions and opioid use disorder.
-   **Notable design choices and patterns:**
    -   The use of CodeSystem supplements for configurable conversion factors allows for flexibility and adaptability.
    -   The `Prescriptions` function provides a standardized way to extract the necessary information from MedicationRequest resources.
    -   The base MME calculator is designed to be independent of the FHIR resource model, allowing for potential reuse in other contexts.

## Ecosystem Context

-   **Target systems and users:** Clinical decision support systems, electronic health records, pharmacy systems, and other systems involved in opioid prescribing and monitoring. Target users include clinicians, pharmacists, and other healthcare professionals.
-   **Relationship to other standards/IGs:** This IG builds upon the FHIR standard and utilizes RxNorm and UCUM for terminology. It is related to the Opioid CDS Implementation Guide, which provides tools for constructing the Access DB used in the OMTKData library creation process.
-   **Relevant jurisdictions or programs:** Primarily relevant to the United States, given the focus on CDC guidelines.
-   **Primary use cases and scenarios:**
    -   Calculating MME at the point of prescribing to inform dosage decisions.
    -   Monitoring patient opioid exposure over time.
    -   Generating alerts or warnings based on MME thresholds.
    -   Supporting quality measurement and reporting related to opioid use.
