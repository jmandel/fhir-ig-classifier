# davinci-vbpr: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The Da Vinci Value-Based Performance Reporting (VBPR) IG tackles the lack of standardization in the format and exchange of value-based performance reports between payers and providers. It addresses issues like inconsistent data formats, lack of common definitions, and the time-intensive nature of data retrieval from various portals.
-   **Key clinical/business problems it solves:** VBPR aims to improve the transparency and efficiency of value-based contracts by standardizing performance reporting. This standardization reduces the administrative burden on providers, minimizes errors, and facilitates better tracking of performance against contractual measures. It also promotes cost containment and quality improvement by providing timely insights into financial and quality performance.
-   **Intended scope and boundaries:** The initial scope of this STU1 version focuses on defining a standard exchange format for payer-generated value-based financial and quality performance reports sent to providers. It supports Medicare Advantage, commercial, and other types of value-based contracts. The IG does not cover the creation and reconciliation of attributed member lists, calculation of population performance, or incentive calculations. It also does not address member-level performance reporting.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **VBP MeasureReport:** The central profile, representing a value-based performance report. It includes extensions for alternate measure scores, payment streams, service periods, and baselines.
    -   **VBP Quality MeasureReport:** Derived from DEQM Summary MeasureReport, it represents quality measure data with extensions for thresholds and scores (e.g., star ratings).
    -   **VBP Measure:** Derived from CQFM Composite Measure, it represents value-based contract information, including quality measures, line of business, program models, and payment streams.
    -   **VBP Bundle:** Used to package the MeasureReport and related resources.
    -   **Key Extensions:** Alternate MeasureScore, Baseline, Group Reference, Line of Business, Organization Subject, Paid Through Date, Payment Stream, Program Model, Quality Program, Service Period, Star Score, Threshold.
-   **Notable operations and interactions:** The IG defines a RESTful interaction pattern where providers (clients) can request and retrieve value-based performance MeasureReports from payers (servers). It supports read, search, create, update, patch, and delete operations on Measure and MeasureReport resources.
-   **Key terminology and value sets:**
    -   **Performance Metric:** Defines types of value-based performance metrics (e.g., average risk score, capitation, medical cost).
    -   **VBP Measure Population Type:** Adds calculated-denominator and calculated-numerator to the base Measure Population Type.
    -   **Payment Stream:** Defines payment models (e.g., care coordination fee, shared savings).
    -   **HCPLAN Framework:** Categorizes alternative payment models.
    -   **Threshold Type:** Defines types of thresholds (e.g., star ratings, HEDIS percentiles).
    -   **Measure Stratifier Example:** Provides example stratifiers (e.g., facility, tax ID, geography).
-   **Significant patterns and constraints:**
    -   The `MeasureReport.group` element corresponds to a performance metric, with `group.code` bound to the Performance Metric value set.
    -   Stratification is supported using `MeasureReport.group.stratifier`.
    -   Quality measure data is represented using the VBP Quality MeasureReport profile, referenced via `MeasureReport.evaluatedResource`.
    -   The `MeasureReport.subject` is always an organization, represented using the Organization Subject extension.
    -   Must Support flags are used to indicate critical elements that implementations must understand and process.

## Technical Essence

The VBPR IG defines a framework for exchanging value-based performance reports using a specialized `MeasureReport` profile. Each `MeasureReport.group` represents a performance metric, identified by a code from an extensible value set, with its value in `measureScore` (or `altMeasureScore` for non-Quantity types). Payment streams, service periods, and baselines are conveyed via extensions on the group. Stratification is supported through `group.stratifier`. Quality measure data is encapsulated in referenced `vbp-quality-measurereport` instances, which extend DEQM's `summary-measurereport-deqm` with threshold and score extensions. A `vbp-measure` profile, derived from `CQFMCompositeMeasure`, defines the contract-level details, including a list of quality measures with weights and contractual status. The IG mandates a RESTful API for exchanging these reports, with servers supporting operations like create, read, update, and search on `MeasureReport` and `Measure` resources.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves payers generating `vbp-performance-measurereport` instances based on contract terms defined in `vbp-measure` resources. Providers then periodically retrieve these reports from payers using RESTful interactions.
-   **Important requirements and guardrails:** Implementations must support the defined profiles and extensions, including the use of specific code systems and value sets. The Must Support flags highlight mandatory elements. Servers must support specific search parameters on `MeasureReport`, including `category`, `subject-organization`, `date`, `measure`, and `period`.
-   **Notable design choices and patterns:** The use of `MeasureReport` as the core resource provides a standardized structure for reporting. The extension mechanism allows for flexibility in representing various performance metrics and payment models. The reliance on existing profiles like DEQM Summary MeasureReport and CQFM Composite Measure promotes reuse and consistency.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are payer and provider systems involved in value-based contracting. Users include clinicians, administrators, and analysts responsible for managing and evaluating performance.
-   **Relationship to other standards/IGs:** VBPR builds upon FHIR R4, US Core STU 3.1.1, DEQM, and CQF Measures. It leverages concepts and structures from these IGs to ensure consistency and interoperability.
-   **Relevant jurisdictions or programs:** The IG is relevant to the US healthcare system, particularly programs involving value-based purchasing, such as Medicare Advantage and other alternative payment models.
-   **Primary use cases and scenarios:** The main use case is the periodic exchange of value-based performance reports from payers to providers. This includes reporting on financial metrics, quality measures, utilization, and other contractually defined performance indicators. The reports support performance monitoring, incentive calculations, and quality improvement initiatives.
