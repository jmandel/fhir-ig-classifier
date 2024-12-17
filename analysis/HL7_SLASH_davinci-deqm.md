# davinci-deqm: Analysis

## Core Purpose & Scope

The Data Exchange for Quality Measures (DEQM) Implementation Guide (IG) addresses the interoperability challenges of exchanging data for quality measurement and reporting in the US Realm, though much of its content is applicable more broadly. It aims to standardize data collection and submission, reducing the burden of manual data transformation between systems. The IG focuses on enabling automatic data collection and submission for quality measures, supporting value-based care data exchange. Its scope includes data exchange between producers (e.g., providers) and consumers (e.g., payers), individual and summary measure reporting, and gaps in care reporting. It does not address subscription-based exchange in this version.

## Technical Foundation

The DEQM IG builds upon FHIR R4 and leverages several core profiles and extensions:

-   **Core Profiles:**
    -   `DEQM Data Exchange MeasureReport Profile`
    -   `DEQM Individual MeasureReport Profile`
    -   `DEQM Summary MeasureReport Profile`
    -   `DEQM Subject List MeasureReport Profile`
    -   `DEQM Gaps In Care Bundle Profile`
    -   `DEQM Gaps In Care Composition Profile`
    -   `DEQM Gaps In Care DetectedIssue Profile`
    -   `DEQM Gaps In Care Group Profile`
    -   `DEQM Care Gap Guidance Response`
-   **Extensions:** `DEQM Measure Scoring`, `DEQM Alternate Score Type`, `DEQM Reporter Group`, `DEQM Reporting Vendor`, `DEQM Certification Identifier`, `DEQM Submit Data Update Type`, `DEQM Criteria Reference`, `DEQM Gap Status`, `DEQM Data Location`, `DEQM Group Improvement Notation`, `DEQM Reporting Program`, `DEQM Supplemental Data`, `DEQM Calculated Date`, `DEQM Measure Report Population Description`, `DEQM Numerator Membership`, `DEQM Denominator Membership`, `DEQM Measure Population Membership`.
-   **Operations:** `$care-gaps`, `$deqm.collect-data`, `$bulk-submit-data`, `$evaluate`, `$deqm.submit-data`.
-   **Key Terminology and Value Sets:** The IG defines several value sets and code systems related to gaps in care, measure scoring, and reporting programs, and references external code systems like LOINC and SNOMED CT.
-   **Significant Patterns and Constraints:** The IG emphasizes the use of FHIR operations for data exchange, defines specific profiles for different reporting scenarios, and provides guidance on handling incremental and snapshot updates. It also specifies constraints on the use of contained resources and defines a pattern for representing gaps in care.

## Technical Essence

The DEQM IG standardizes quality data exchange via FHIR operations, primarily `$submit-data` and `$collect-data`, using a specialized `Data Exchange MeasureReport` profile that references a `Measure` and includes relevant patient data as `Parameters` resources. For reporting, `Individual` and `Summary MeasureReport` profiles convey measure results, with the former including evaluated resources and the latter providing aggregate counts. The `$care-gaps` operation returns a `Parameters` resource containing a `Bundle` of `Composition` resources, each referencing `Individual MeasureReport` and `DetectedIssue` resources with a `gapStatus` modifier extension to indicate open or closed gaps. The IG mandates specific extensions like `measureScoring` and `reportingProgram` on `MeasureReport` and defines patterns for handling incremental/snapshot updates via the `submitDataUpdateType` extension and the `lastReceivedOn` parameter in `$collect-data`. Data requirements are discoverable via the `$data-requirements` operation on a `Measure`.

## Implementation Approach

The IG outlines workflows for data exchange, individual reporting, summary reporting, and gaps in care reporting. Implementations should support both `Submit Data` and `Collect Data` operations, handling incremental and snapshot updates as defined. The `care-gaps` operation is crucial for identifying and communicating care gaps. The IG emphasizes the use of standard FHIR transactions (POST) for submitting reports and bundles. It also provides guidance on handling missing data, duplicate data, and using contained resources. The use of the `X-Provenance` header is recommended for associating the provider with submitted data.

## Ecosystem Context

The DEQM IG targets healthcare providers, payers, quality reporting programs, and health information exchanges within the US Realm. It relates to other standards and IGs like US Core, QI-Core, and the FHIR Clinical Quality Framework. It is relevant to quality improvement programs like the Merit-based Incentive Payment System (MIPS) and Hospital Quality Reporting programs. The primary use cases include medication reconciliation, colorectal cancer screening, venous thromboembolism prophylaxis, and gaps in care reporting. The IG aims to support value-based care initiatives by facilitating standardized and automated quality data exchange.
