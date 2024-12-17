# davinci-pdex-formulary: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of standardizing the exchange of drug formulary information between health insurers and other stakeholders, particularly patients/consumers. It focuses on enabling consistent access to formulary data, including drug tiers, cost-sharing details, and coverage limitations.
-   **Key clinical/business problems it solves:** The IG aims to improve transparency in prescription drug costs and coverage for patients. It facilitates informed decision-making for patients and providers by providing standardized access to formulary information, enabling cost comparisons across different insurance plans, and supporting the identification of lower-cost alternatives.
-   **Intended scope and boundaries:** The scope is limited to the exchange of drug formulary information. It assumes that the FHIR endpoint for a particular formulary is known to the user and does not address endpoint discovery. It also acknowledges the limitations of the FHIR MedicationKnowledge resource and the need for its co-evolution with the FormularyDrug profile.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **PayerInsurancePlan:** Based on the FHIR InsurancePlan resource, it defines the health insurance product, including coverage benefits, coverage area, and contact information. It references a Formulary for drug coverage details.
    -   **Formulary:** Also based on InsurancePlan, it provides general information about a formulary and acts as an organizing construct for associated FormularyItem resources.
    -   **FormularyItem:** Based on the Basic resource, it describes a drug's relationship to a formulary, including drug tier, prior authorization requirements, and other coverage constraints.
    -   **FormularyDrug:** Based on MedicationKnowledge, it provides information about a prescribable drug, including its RxNorm code and dose form.
    -   **Key Extensions:** FormularyReference, PriorAuthorization, StepTherapyLimit, QuantityLimit, PharmacyBenefitType, DrugTierID, AvailabilityStatus, AvailabilityPeriod, AdditionalCoverageInformation.
-   **Notable operations and interactions:** The IG defines a RESTful API for querying formulary data. It supports both authenticated and unauthenticated access, with different requirements for each. Key interactions involve searching for InsurancePlans, Formularies, FormularyItems, and FormularyDrugs using defined search parameters.
-   **Key terminology and value sets:**
    -   **DrugTierCS:** Codes for medication drug tiers in health plans.
    -   **PharmacyBenefitTypeCS:** Codes for pharmacy benefit types.
    -   **BenefitCostTypeCS:** Types of out-of-pocket costs (copay, coinsurance).
    -   **InsuranceItemTypeCS:** Types of insurance items (formulary-item).
    -   **CostShareOptionCS:** Codes qualifying the type of cost share amount.
    -   **RxNorm:** Used for drug identification.
-   **Significant patterns and constraints:** The IG uses a combination of InsurancePlan, Basic, and MedicationKnowledge resources to represent formulary data. It defines specific search parameters to facilitate common queries. It also includes constraints on resource relationships and data elements, such as requiring RxNorm codes for drugs and specifying the use of extensions for formulary-specific information.

## Technical Essence

This IG defines a RESTful API for accessing drug formulary data using a core set of profiles: `PayerInsurancePlan` and `Formulary` (both based on `InsurancePlan`), `FormularyItem` (based on `Basic`), and `FormularyDrug` (based on `MedicationKnowledge`). `PayerInsurancePlan` represents a health insurance product with drug coverage, referencing a `Formulary` via the `FormularyReference` extension. `Formulary` acts as a container for `FormularyItem` resources, each linked to a `FormularyDrug` via `Basic.subject`. `FormularyItem` details drug-specific coverage information like tier (`DrugTierID` extension), prior authorization (`PriorAuthorization` extension), and pharmacy benefit type (`PharmacyBenefitType` extension). `FormularyDrug` represents a drug with RxNorm `code` and `doseForm`. Cost-sharing is modeled in `PayerInsurancePlan.plan.specificCost`, with slices for `copay` and `coinsurance`, qualified by `CostShareOptionCS`. Searching is enabled via parameters like `drug-name`, `drug-tier`, `pharmacy-benefit-type`, and `formulary`. The API supports authenticated access for member-specific data and unauthenticated access for public formulary information, with provisions for bulk data export using the Bulk Data IG.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   **Authenticated API:** Accessing formulary data integrated with PHI/PII requires authorized, authenticated transactions as described in the HRex IG.
    -   **Unauthenticated API:** Accessing public formulary data without PHI/PII may be supported without authentication.
    -   **Searching:** Clients can search for InsurancePlans by coverage type, formulary coverage, and coverage area. They can also search for FormularyItems by formulary, drug tier, pharmacy benefit type, drug name, and drug code. FormularyDrugs can be searched by drug name, code, and dose form.
    -   **Bulk Data:** Servers may support bulk data export for retrieving formulary data not related to an individual.
-   **Important requirements and guardrails:**
    -   Servers SHALL conform to the HRex guidelines on privacy, safety, and security.
    -   Servers SHALL meet the capability statement requirements in the US Drug Formulary Server Capability Statement.
    -   Servers SHALL support specific search parameters and resource relationships as defined in the IG.
    -   Servers SHOULD provide appropriate disclaimers regarding the interpretation and use of formulary data.
-   **Notable design choices and patterns:**
    -   Use of InsurancePlan, Basic, and MedicationKnowledge resources to represent formulary data.
    -   Definition of specific search parameters for common queries.
    -   Support for both authenticated and unauthenticated access.
    -   Use of extensions to capture formulary-specific information.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are health insurer systems and third-party applications used by consumers/members/patients. The target users are patients, consumers, and healthcare providers seeking information about drug coverage and costs.
-   **Relationship to other standards/IGs:** This IG builds upon the FHIR R4 standard, the Da Vinci PDex Plan Net, and US Core. It inherits conformance expectations from HRex and references US Core for must-support requirements. It also relates to the Bulk Data IG for bulk data export.
-   **Relevant jurisdictions or programs:** This IG is primarily intended for use within the United States. It aligns with the goals of the Da Vinci project to improve data exchange in the US healthcare system.
-   **Primary use cases and scenarios:**
    -   **Medication Copay Under Health Plan:** A member determines the plan-level estimated costs of their medications under their current health plan.
    -   **Shopping for Health Plans:** A consumer compares drug coverage across different health plans to determine the lowest plan-level estimated cost based on their medications.
    -   **Accessing Formulary Information:** Patients, providers, and other stakeholders can access standardized formulary data to understand drug coverage, tiers, and cost-sharing details.
