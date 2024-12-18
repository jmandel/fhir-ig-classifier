# fhir-ichom-breast-cancer-ig: Analysis

## Core Purpose & Scope

**Primary interoperability challenges this IG addresses:**

-   Standardizes the representation of the ICHOM Breast Cancer Patient-Centered Outcome Measure Set using HL7 FHIR.
-   Facilitates interoperable collection and exchange of patient-reported and clinical-reported outcomes data related to breast cancer.
-   Enables consistent data collection, reporting, and benchmarking of breast cancer outcomes across different healthcare systems and applications.

**Key clinical/business problems it solves:**

-   Provides a machine-readable format for the ICHOM Breast Cancer Set, enabling its integration into electronic health records (EHRs) and other health IT systems.
-   Supports value-based healthcare by enabling the measurement and comparison of patient-centered outcomes.
-   Facilitates quality improvement initiatives, research, and shared decision-making by providing standardized data on breast cancer outcomes.

**Intended scope and boundaries:**

-   Focuses on representing the ICHOM Breast Cancer Set variables in FHIR.
-   Includes both patient-reported outcomes (via FHIR Questionnaires) and clinical-reported outcomes (via discrete FHIR resources).
-   Does not define specific interaction patterns for information exchange (out of scope).
-   Does not address security measures, leaving that responsibility to implementers.

## Technical Foundation

**Core profiles and extensions:**

-   **BreastCancerPatient:** Extends the Patient resource to include ICHOM-specific demographic factors like education level, ethnicity, and race.
-   **PrimaryBreastCancerCondition, SecondaryBreastCancerCondition:** Profiles of the Condition resource to represent primary and secondary breast cancer diagnoses.
-   **BodyHeight, BodyWeight, MenopausalStatus:** Profiles of the Observation resource to capture baseline clinical factors.
-   **Histotype, GermlineMutation, TumorGrade, InvasionGrade, TumorSize, LymphNodesResected, LymphNodesInvolved, ERStatus, PRStatus, HERStatus, MammaprintScore, OncotypeScore, EndopredictonScore:** Profiles of the Observation resource to capture tumor factors.
-   **BreastCancerStageGroup, TNMPrimaryTumorStage, TNMRegionalNodalStage, TNMDistantMetastases:** Profiles of the Observation resource for TNM staging, aligned with mCODE.
-   **BreastCancerSurgery, AxillaSurgery, AxillaryClearance, ReconstructionSurgery, Radiotherapy, Chemotherapy, Hormonaltherapy, TargetedTherapy, BestSupportiveCare, Immunotherapy, TreatmentPlan, TreatmentPlanFollowed, TreatmentPlanNotFollowed:** Profiles of Procedure and CarePlan resources to capture treatment variables.
-   **ReoperationSurgery, Complication:** Profiles of Procedure and Condition resources to capture disutility of care.
-   **DeathAttributableBC, RecurrenceMethod:** Profiles of the Observation resource to capture survival and disease control data.
-   **Questionnaires:** Multiple questionnaires for collecting patient-reported and clinical-reported outcomes at different time points (baseline, 6 months, annual follow-up).
-   **Extensions:** EducationLevel, Race, Ethnicity, DueToEx, ProcedureMethodEx, VariableEx, InitialExpressionEx, MinQuantityEx, MaxQuantityEx, UnitOptionEx, ObservationExtractEx, ObservationLinkPeriodEx, CalculatedExpressionEx, HiddenEx, SexForClinicalUse.

**Notable operations and interactions:**

-   While specific interaction patterns are out of scope, the IG implies the use of standard FHIR operations like `create`, `read`, `update`, and `search` to manage resources and questionnaires.

**Key terminology and value sets:**

-   **SNOMED CT:** Extensively used for clinical concepts.
-   **LOINC:** Used for laboratory and clinical observations.
-   **UCUM:** Used for units of measure.
-   **ICD-10:** Implied use for diagnosis coding.
-   **Custom CodeSystems:** TreatmentTypesCodeSystem, BreastSurgeryTypesCodeSystem, ReconstructionTypeCodeSystem, ImplantLocationCodeSystem, ComplicationImpactCodeSystem, ComplicationTypeCodeSystem, RecurrenceCodeSystem, RecurrenceMethodCodeSystem, PatientTreatPrefCodeSystem, TreatmentPlanComplianceCodeSystem, TreatmentPlanFollowedCodeSystem, TreatmentPlanNotFollowedCodeSystem, MolecularProfilingCodeSystem, AgreementResponseCodeSystem, SatisfactionResponseCodeSystem.
-   **Custom ValueSets:** RelationshipStatusVS, EducationLevelVS, MenopausalStatusVS, HistologicalTypeVS, GermlineMutationVS, GradingVS, TNMStageGroupVS, TNMPrimaryTumorVS, TNMRegionalNodesVS, TNMDistantMetastasesVS, EstrogenStatusVS, ProgesteroneStatusVS, HER2ReceptorStatusVS, MolecularProfilingStatusVS, BodyWeightVS, LateralityVS, LateralityNewCancerVS, TreatmentTypeVS, RecommendedTreatmentTypeVS, BreastSurgeryTypeVS, AxillaSurgeryVS, ReconstructionTypeVS, ImplantLocationVS, TherapyIntentVS, LocationRadiotherapyVS, ChemoTherapyTypeVS, HormonalTherapyTypeVS, TargetedTherapyVS, TreatmentPlanFollowedVS, TreatmentPlanNotFollowedVS, PatientEducationVS, PatientTreatPrefVS, TreatmentPlanComplianceVS, ReoperationTypeVS, InvolvedMarginsReoperationTypeVS, ComplicationImpactVS, ComplicationTypeVS, NoYesUnknownVS, RecurrenceVS, RecurrenceMethodVS, AgreementResponseVS, SatisfactionResponseVS, SACQPatientComorbidityHistory.

**Significant patterns and constraints:**

-   **Must Support:** Used to indicate elements mapped to measure set variables, requiring population if data is available.
-   **Data Absent Reason:** Used when an element cannot be populated due to unavailability in the source system.
-   **ValueSet bindings:** Extensively used to constrain the allowed values for coded elements.
-   **Questionnaire design:** Follows a structured approach, grouping questions by time point and source (clinical or patient-reported).
-   **EnableWhen:** Used in questionnaires to conditionally display questions based on answers to previous questions.

## Technical Essence

This IG defines a comprehensive FHIR representation of the ICHOM Breast Cancer Set using a combination of resource profiles and questionnaires. Profiles leverage standard FHIR resources like Patient, Observation, Condition, Procedure, and CarePlan, extending them with ICHOM-specific data elements and constraints. For instance, the `BreastCancerPatient` profile extends `Patient` with extensions for education level, ethnicity, and race. Tumor factors are captured through a series of `Observation` profiles, such as `Histotype`, `TumorGrade`, and `TNMPrimaryTumorStage`, each bound to specific value sets (e.g., `HistologicalTypeVS`, `GradingVS`, `TNMPrimaryTumorVS`). Treatments are represented using `Procedure` profiles like `BreastCancerSurgery` and `Chemotherapy`, constrained by value sets like `BreastSurgeryTypeVS` and `ChemoTherapyTypeVS`. Questionnaires, structured by time points (baseline, 6 months, annual), utilize `enableWhen` logic to dynamically control question visibility based on prior responses. For example, questions about reconstruction surgery are only shown if the patient received a mastectomy. Data is expected to be populated using standard FHIR create and update operations, with `Must Support` flags indicating mandatory elements. The IG relies heavily on SNOMED CT for clinical concepts, LOINC for observations, and UCUM for units, while also defining numerous custom code systems and value sets to capture ICHOM-specific terminology.

## Implementation Approach

**Critical workflows and interactions:**

-   **Data collection:** Clinicians and patients populate questionnaires at defined time points.
-   **Data extraction:** Data from questionnaires and existing EHR data is mapped to the defined FHIR profiles.
-   **Data storage:** FHIR resources are stored in a FHIR server or repository.
-   **Data reporting:** Data is queried and aggregated to generate reports on patient outcomes.
-   **Data exchange:** Data can be exchanged with other systems using standard FHIR APIs.

**Important requirements and guardrails:**

-   Implementers must ensure that all "Must Support" elements are populated if data is available.
-   The "Data Absent Reason" extension must be used when a "Must Support" element cannot be populated.
-   ValueSet bindings must be strictly adhered to.
-   Questionnaire `enableWhen` logic must be correctly implemented.

**Notable design choices and patterns:**

-   Use of both profiles and questionnaires to capture different types of data.
-   Extensive use of value sets to ensure data consistency and interoperability.
-   Alignment with existing FHIR standards and profiles (e.g., mCODE for TNM staging).

## Ecosystem Context

**Target systems and users:**

-   EHR systems
-   Clinical research databases
-   Patient-reported outcome platforms
-   Health information exchanges
-   Clinicians, researchers, patients, and healthcare administrators

**Relationship to other standards/IGs:**

-   **mCODE:** Alignment on TNM staging profiles.
-   **US Core:** Alignment on demographic information.
-   **IPS:** Alignment on patient and procedure profiles.
-   **IPA:** Alignment on patient, observation, and condition profiles.
-   **QI-Core:** General alignment.
-   **Breast Radiology Reporting:** General alignment.

**Relevant jurisdictions or programs:**

-   Global applicability, as ICHOM is an international organization.

**Primary use cases and scenarios:**

-   Tracking and comparing patient outcomes within and across healthcare organizations.
-   Informing treatment decisions and facilitating shared decision-making.
-   Supporting value-based healthcare initiatives.
-   Facilitating clinical research on breast cancer outcomes.
-   Enabling the creation of dashboards and reports for quality improvement.
