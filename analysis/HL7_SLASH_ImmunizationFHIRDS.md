# ImmunizationFHIRDS: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG), titled "Immunization Decision Support Forecast (ImmDS)," addresses the interoperability challenges associated with exchanging immunization evaluation and forecasting data between healthcare systems and Clinical Decision Support (CDS) engines. It aims to standardize the interface layer, enabling systems to query a CDS engine for a patient's evaluated immunization history and forecast, regardless of the engine's underlying implementation.

**Primary Interoperability Challenges:**

-   Lack of a standardized interface for querying immunization CDS engines.
-   Existence of multiple proprietary interfaces, leading to costly and complex implementations.

**Key Clinical/Business Problems Solved:**

-   Provides a consistent and interchangeable interface for accessing CDS engines.
-   Enables health information systems to choose their preferred CDS engine.
-   Facilitates consistent testing and verification of CDS engine outputs.
-   Reduces implementation costs and complexity by standardizing the interface.

**Intended Scope and Boundaries:**

-   Defines a standard interface for querying a CDS engine for a patient's evaluated immunization history and forecast.
-   Specifies the input parameters (patient demographics, immunization history) and output parameters (immunization evaluations, recommendations).
-   Out of scope: The internal logic of the CDS engine, mechanisms for executing v2 queries and responses.

## Technical Foundation

**Core Profiles and Extensions:**

-   **ImmDSPatient:** Based on US Core Patient, requires birthDate.
-   **ImmDSImmunization:** Based on US Core Immunization, requires patient reference to ImmDSPatient.
-   **ImmDSImmunizationEvaluation:** Based on ImmunizationEvaluation, requires patient reference, date, targetDisease, doseStatus, and optionally doseStatusReason.
-   **ImmDSImmunizationRecommendation:** Based on ImmunizationRecommendation, requires patient reference, and for each recommendation: vaccineCode, forecastStatus, and dateCriterion.

**Notable Operations and Interactions:**

-   **\$immds-forecast:** A custom operation to request an immunization forecast.
    -   Input: assessmentDate (date), patient (Patient), immunization (0..\* Immunization).
    -   Output: evaluation (0..\* ImmunizationEvaluation), recommendation (1 ImmunizationRecommendation).

**Key Terminology and Value Sets:**

-   **TargetDisease:** A value set containing SNOMED CT codes for vaccine-preventable diseases.
-   **ForecastStatus:** A code system defining forecast statuses (e.g., Complete, Not Complete, Immune).
-   **ForecastReason:** A code system defining reasons for the forecast status (e.g., Complete, Maximum Age Exceeded).
-   **StatusReason:** A code system defining reasons for the evaluation status (e.g., Expired, Too Young, Too Old).
-   **CVX:**  Uses the standard CVX code system for vaccine codes.
-   **dateCriterion:** Uses standard LOINC codes for date criteria (e.g., Date vaccine due, Earliest date to give).

**Significant Patterns and Constraints:**

-   The IG leverages US Core profiles as a foundation.
-   It defines a custom operation for requesting the forecast.
-   It uses standard code systems (SNOMED CT, LOINC, CVX) where possible.
-   It defines custom code systems for forecast status, forecast reason, and evaluation status reason.
-   Jurisdiction is constrained to the United States.

## Technical Essence

This IG defines a FHIR-based interface for immunization decision support, centered around the `\$immds-forecast` operation. This operation accepts an `assessmentDate`, a `Patient` resource (constrained to `ImmDSPatient` profile requiring `birthDate`), and a list of `Immunization` resources (constrained to `ImmDSImmunization` profile). It returns a set of `ImmunizationEvaluation` resources (constrained to `ImmDSImmunizationEvaluation` profile, each referencing an input `Immunization`, specifying `targetDisease` from the `TargetDisease` valueset, `doseStatus` from a standard FHIR valueset, and optionally `doseStatusReason` from the `StatusReason` codesystem) and a single `ImmunizationRecommendation` resource (constrained to `ImmDSImmunizationRecommendation` profile). The `ImmunizationRecommendation` contains multiple `recommendation` components, each specifying `vaccineCode` (from `CVXVS`), `forecastStatus` (from `ForecastStatus` codesystem), optionally `forecastReason` (from `ForecastReason` codesystem), and multiple `dateCriterion` components using standard LOINC codes to indicate due dates, earliest/latest dates, and overdue dates. This design enables a standardized request/response pattern for obtaining evaluated immunization histories and forecasts, abstracting the underlying CDS engine's logic.

## Implementation Approach

**Critical Workflows and Interactions:**

-   A system (e.g., EHR, IIS) initiates the `$immds-forecast` operation, providing the patient's demographics and immunization history.
-   The CDS engine receives the request, processes the data, and returns the evaluated history and forecast.
-   The initiating system receives the response and integrates the information into its workflow.

**Important Requirements and Guardrails:**

-   Implementers must adhere to the defined profiles and operation definition.
-   Systems must support the specified code systems and value sets.
-   Security considerations outlined in FHIR Security and the FHIR Implementer's Safety Checklist should be followed.
-   The minimum necessary demographics payload should be determined during implementation.
-   Exchange of sensitive fields may be limited by local policy or requirements, and the data absent reason extension may be used.

**Notable Design Choices and Patterns:**

-   The use of a custom operation provides a clear and specific entry point for the interaction.
-   The reliance on US Core profiles ensures a degree of alignment with existing FHIR implementations.
-   The definition of custom code systems allows for flexibility and extensibility.

## Ecosystem Context

**Target Systems and Users:**

-   Immunization Information Systems (IIS)
-   Electronic Health Record (EHR) systems
-   Health Information Exchanges (HIEs)
-   School medical record systems
-   Clinicians
-   Public health agencies

**Relationship to Other Standards/IGs:**

-   Builds upon FHIR R4.
-   Leverages US Core profiles.
-   May interact with systems using v2 messaging.

**Relevant Jurisdictions or Programs:**

-   Primarily focused on the United States.
-   Potentially applicable to other jurisdictions with similar immunization programs.

**Primary Use Cases and Scenarios:**

-   EHR querying an IIS for a patient's immunization status and forecast.
-   IIS user interface displaying a patient's immunization history and forecast.
-   Public health functions, such as generating up-to-date reports or reminder/recall activities.
-   Standardizing the interface between various health information systems and CDS engines.
