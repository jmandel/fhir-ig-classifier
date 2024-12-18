# davinci-ra: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the lack of standardization in exchanging risk adjustment coding gap information between payers and providers. It also tackles the need for a feedback mechanism from providers back to payers regarding these coding gaps.
-   **Key clinical/business problems it solves:** It aims to reduce the administrative burden on providers by standardizing risk adjustment coding gap reports, improving the accuracy and completeness of risk adjustment data, and enabling better communication between payers and providers. It also introduces the concept of digital Condition Categories (dCCs) to automate the coding process.
-   **Intended scope and boundaries:** The IG focuses on the exchange format of risk adjustment coding gap reports and the feedback loop for providers to communicate actions taken or submit data to close gaps. It does not define how payers determine coding gaps, manage them internally, or define suspecting processes. It also touches upon the concept of dCCs but leaves their full specification for future versions.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `Risk Adjustment Coding Gap Report` (based on `MeasureReport`), `Risk Adjustment Data Exchange MeasureReport`, `Risk Adjustment Model Measure`, `Patient Group`, `RA Parameters ccRemark Patch Profile`.
    -   **Extensions:** `ra-clinicalDataCollectionDeadline`, `ra-ccRemark`, `ra-ccType`, `ra-confidenceScale`, `ra-dxCode`, `ra-evidenceStatus`, `ra-evidenceStatusDate`, `ra-groupReference`, `ra-hierarchicalStatus`, `ra-payerCodingGapReportId`, `ra-reportingVendor`.
-   **Notable operations and interactions:**
    -   `$ra.evaluate-measure` (DRAFT): Evaluates digital Condition Categories to generate a `Risk Adjustment Coding Gap Report Bundle`.
    -   `$submit-data`: Used by providers to submit clinical data to payers for gap closure or invalidation.
    -   RESTful queries using `GET` to retrieve `MeasureReport` resources and their evaluated resources.
    -   `POST` to send `Risk Adjustment Coding Gap Report` to providers.
    -   `PATCH` to update `MeasureReport` with `Condition Category Remark`.
    -   `PUT` to update the full `MeasureReport` with added remarks.
-   **Key terminology and value sets:**
    -   **Code Systems:** `Condition Category Code`, `Suspect Type`, `Evidence Status`, `Hierarchical Status`, `Coding Gap Remark`, `Reason Code`.
    -   **Value Sets:** `Condition Category Code`, `Suspect Type`, `Evidence Status`, `Hierarchical Status`, `Coding Gap Remark`, `Reason Code`.
-   **Significant patterns and constraints:**
    -   The `Risk Adjustment Coding Gap Report` uses `MeasureReport.group` to represent Condition Categories (CCs) and includes extensions for `suspectType`, `evidenceStatus`, `evidenceStatusDate`, and `hierarchicalStatus`.
    -   `MeasureReport.evaluatedResource` references supporting evidence (e.g., US Core resources) for each CC.
    -   The `Risk Adjustment Data Exchange MeasureReport` allows providers to submit clinical data (e.g., C-CDA documents via `DocumentReference`) linked to the original coding gap report.
    -   The `ra-ccRemark` extension allows for adding remarks to `MeasureReport.group`, including author, timestamp, free text, coded remark, reason code, related data identifier, qualifying diagnosis codes, and a list of qualifying diagnoses.
    -   The `Assisted` and `Generated` approaches provide flexibility in generating the `Risk Adjustment Coding Gap Report`, catering to varying levels of FHIR maturity.

## Technical Essence

This IG defines a standardized `MeasureReport`-based structure for communicating risk adjustment coding gaps, leveraging `MeasureReport.group` to represent Condition Categories (CCs) with extensions for `suspectType` (historic, suspected, net-new), `evidenceStatus` (open-gap, closed-gap, pending, invalid), `evidenceStatusDate`, and `hierarchicalStatus`.  `MeasureReport.evaluatedResource` links to supporting clinical evidence, typically US Core resources. Providers can use `PATCH` to add `ra-ccRemark` extensions to `MeasureReport.group`, detailing actions taken (e.g., `assessed-present`, `deferred`) with author, timestamp, free text, coded remark, reason code, and related data identifier. Alternatively, providers can submit a `Risk Adjustment Data Exchange MeasureReport` using `$submit-data`, referencing a `DocumentReference` (e.g., C-CDA) or other FHIR resources in `evaluatedResource` to close or invalidate gaps, optionally linking back to the original report via `payerCodingGapReportId`. The draft `$ra.evaluate-measure` operation outlines a future path for generating reports by evaluating CQL-based digital Condition Categories (dCCs) against patient data.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  **Report Generation:** Payers generate `Risk Adjustment Coding Gap Report` using either the `Assisted` (CSV-based) or `Generated` (FHIR resource-based) approach.
    2.  **Report Query:** Providers or Payers query for `MeasureReport` resources using `GET`, including evaluated resources.
    3.  **Add Remark to Condition Category:** Providers add `ra-ccRemark` to `MeasureReport.group` using `PATCH` or `PUT` to communicate actions taken.
    4.  **Submit Data to Payer:** Providers use `$submit-data` with a `Risk Adjustment Data Exchange MeasureReport` to send clinical data for gap closure/invalidation.
-   **Important requirements and guardrails:**
    -   Adherence to defined profiles and extensions.
    -   Proper use of terminology and value sets.
    -   Security and privacy should follow HRex guidance, with systems using standard authentication and authorization approaches (e.g., SMART).
-   **Notable design choices and patterns:**
    -   Use of `MeasureReport` as the core structure for coding gap reports.
    -   Leveraging `MeasureReport.group` and extensions for detailed CC information.
    -   Flexibility in report generation approaches.
    -   `PATCH` operation for efficient remark updates.

## Ecosystem Context

-   **Target systems and users:** Payers and providers involved in risk adjustment, including their respective IT systems and clinical/administrative staff.
-   **Relationship to other standards/IGs:** Relies on FHIR R4, US Core STU3.1.1, and potentially the Da Vinci Member Attribution (ATR) List IG.
-   **Relevant jurisdictions or programs:** Primarily relevant to US healthcare, particularly programs like Medicare Advantage, Medicaid, and the Affordable Care Act that utilize risk adjustment models.
-   **Primary use cases and scenarios:**
    1.  Payers generating and sending standardized risk adjustment coding gap reports to providers.
    2.  Providers querying for and receiving these reports.
    3.  Providers adding remarks to coding gaps to indicate actions taken during patient encounters.
    4.  Providers submitting clinical data to payers to close or invalidate coding gaps.
    5.  (Future) Automated generation of coding gap reports using dCCs.
