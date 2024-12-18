# KL-dk-tools: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of standardizing the exchange and reporting of health care and social care data from Danish municipalities. It focuses on the structured representation of observations and questionnaires commonly used in municipal settings, enabling consistent data capture and sharing across different systems and organizations.
-   **Key clinical/business problems it solves:** The IG solves problems related to data fragmentation and lack of interoperability in the Danish municipal health and social care sector. By providing standardized FHIR profiles and implementation guidance, it facilitates data aggregation, analysis, and reporting at a regional and national level. This supports quality improvement initiatives, resource allocation, and policy-making. It also enables the reuse of data collected in routine care for secondary purposes, such as research and population health management.
-   **Intended scope and boundaries:** The IG's scope is limited to the Danish municipal context. It defines FHIR profiles and extensions for specific clinical tools and assessments used in this setting, including questionnaires like EQ-5D and WHO-5, and observations like blood pressure, body weight, and heart rate. It does not cover all aspects of municipal health and social care data but focuses on a subset of commonly used instruments and measurements. The IG is a derivative of the Common Municipality Information Model (FKI) and builds upon the broader Danish FHIR ecosystem.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Observation Profiles:** KLToolsCare6minwalk, KLToolsCareBloodPressure, KLToolsCareBodyHeight, KLToolsCareBodyTemperature, KLToolsCareBodyWeight, KLToolsCareConsciousness, KLToolsCareEQ5DObservationMobility, KLToolsCareEQ5DObservationHygiene, KLToolsCareEQ5DObservationActivity, KLToolsCareEQ5DObservationPain, KLToolsCareEQ5DObservationAnxiety, KLToolsCareHeartRate, KLToolsCareOxygenSaturation, KLToolsCarePainVAS, KLToolsCarePainVRS, KLToolsCareRespirationRate, KLToolsCareRSS, KLToolsCareUrinStix, KLToolsWHO5ObservationHappy1, KLToolsWHO5ObservationCalm2, KLToolsWHO5ObservationActive3, KLToolsWHO5ObservationRested4, KLToolsWHO5ObservationInterest5. These profiles are based on either KLCommonCareSocialObservation or standard HL7 profiles (e.g., bp, bodyheight).
    -   **Questionnaire Profiles:** KLToolsCareEQ5D, KLToolsCareWHO5, KLToolsQuestionnaire.
    -   **QuestionnaireResponse Profile:** KLToolsQuestionnaireResponse.
    -   **Extensions:** FindingInformer, AssociatedConditions, Technique, ExtMinValue, ExtMaxValue.
-   **Notable operations and interactions:** The IG does not define specific operations but implies standard FHIR interactions for creating, reading, updating, and searching resources, particularly Observations and QuestionnaireResponses.
-   **Key terminology and value sets:**
    -   **Code Systems:** KLToolsCodes, SCT (SNOMED CT), SKS-D, ICPC2DK, SOR, KLCommonCareSocialCodeSystem, UCUM, LOINC, NPU.
    -   **Value Sets:** WHO5AnswerCodesHappy, WHO5AnswerCodesCalm, WHO5AnswerCodesActive, WHO5AnswerCodesRested, WHO5AnswerCodesInterest, WHO5SCTfindingsHappy1, WHO5SCTfindingsCalm2, WHO5SCTfindingsActive3, WHO5SCTfindingsRested4, WHO5SCTfindingsInterest5, EQ5Dmobility, EQ5DSCTfindingsMobility, EQ5Dhygiene, EQ5DSCTfindingsHygiene, EQ5Dactivity, EQ5DSCTfindingsActivity, EQ5Dpain, EQ5DSCTfindingsPain, EQ5Danxiety, EQ5DSCTfindingsAnxiety, KLtechniquesCodes, TechniqesSCTCodes, FindingInformerCodes, VRSpain, VRSSCTfindingsPain, ConsciousnessCodes, ConsciousnessSCTFindings, BodyweightSCTobservables, BodyheightSCTobservables, HeartRateSCTobservables, OxygenSaturationSCTobservables, SystolicBloodPressureSCTObservables, DiastolicBloodPressureSCTObservables, RespirationRateSCTObservables, BodyTemperatureSCTObservables, SCTUrinStix, NPUUrinStix.
-   **Significant patterns and constraints:**
    -   Consistent use of SNOMED CT for observation codes, often in combination with LOINC or local codes.
    -   Use of extensions to capture municipality-specific information like finding informer and associated conditions.
    -   Binding to specific value sets for coded elements, often combining local codes with SNOMED CT.
    -   Requirement to specify the method used for observations, indicating whether KL procedure standards were followed.
    -   Mandatory reference from EQ-5D and WHO-5 observations to the corresponding QuestionnaireResponse.

## Technical Essence

This IG provides a framework for representing Danish municipal health and social care data using FHIR. It defines a set of Observation profiles, each tailored to a specific clinical measurement or assessment, such as blood pressure (KLToolsCareBloodPressure) or a 6-minute walk test (KLToolsCare6minwalk). These profiles typically constrain the `code` element to a specific SNOMED CT code (e.g., `SCT#75367002` for blood pressure) and may include additional LOINC or local codes. The `value[x]` element is constrained to the appropriate data type (e.g., Quantity for blood pressure, CodeableConcept for EQ-5D responses). Profiles often include extensions like `AssociatedConditions` (e.g., `SCT#106063007` for cardiovascular finding in blood pressure) and `FindingInformer` to capture municipality-specific context. The `method` element is used to indicate adherence to KL-defined procedures, using codes from `KLtechniquesCodes` and `TechniqesSCTCodes`. Questionnaire profiles, like KLToolsCareEQ5D, define a set of `item` elements, each representing a question with a specific `linkId`, `code` (often SNOMED CT), and `answerValueSet`. The KLToolsQuestionnaireResponse profile mandates the `FindingInformer` extension and allows for the `Technique` extension. Essentially, this IG provides a blueprint for consistently capturing and exchanging structured clinical data within the Danish municipal context, leveraging standard FHIR resources and extending them with domain-specific elements.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Healthcare professionals capture patient data using standardized questionnaires (e.g., EQ-5D, WHO-5) and perform clinical assessments (e.g., blood pressure measurement, 6-minute walk test).
    -   Systems create FHIR QuestionnaireResponse resources to represent the completed questionnaires, populating the `item` elements with answers and linking to the corresponding Questionnaire resource.
    -   Systems create FHIR Observation resources to represent the results of clinical assessments, populating the `code`, `value[x]`, `method`, and relevant extensions.
    -   Systems exchange these resources with other systems within the municipality or with regional/national repositories.
    -   Data is aggregated and analyzed to support quality improvement, resource allocation, and reporting.
-   **Important requirements and guardrails:**
    -   Implementers must adhere to the defined profiles and extensions, ensuring that resources are populated with the correct codes and data types.
    -   The `method` element must be used to indicate whether KL procedure standards were followed for observations.
    -   The `FindingInformer` extension must be used to specify the source of information for QuestionnaireResponses and relevant Observations.
    -   Systems must be able to handle both local codes and SNOMED CT codes, as specified in the value sets.
-   **Notable design choices and patterns:**
    -   The use of extensions to capture municipality-specific information allows for flexibility while maintaining a core set of standard FHIR elements.
    -   The requirement to link EQ-5D and WHO-5 observations to the corresponding QuestionnaireResponse provides context and traceability.
    -   The consistent use of SNOMED CT for observation codes, combined with LOINC or local codes, promotes interoperability while accommodating existing practices.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are electronic health record (EHR) systems, clinical decision support systems, and data warehouses used in Danish municipalities. The target users are healthcare professionals (e.g., nurses, therapists), administrators, and researchers working in the municipal health and social care sector.
-   **Relationship to other standards/IGs:** The IG builds upon the HL7 FHIR standard (version 4.0.1) and depends on the `hl7.fhir.dk.core`, `kl.dk.fhir.core`, and `kl.dk.fhir.term` IGs. It is a derivative of the Common Municipality Information Model (FKI) and aligns with the broader Danish FHIR ecosystem.
-   **Relevant jurisdictions or programs:** The IG is specifically designed for use in Denmark, within the context of the Danish municipal health and social care system.
-   **Primary use cases and scenarios:**
    -   Capturing and exchanging standardized data from routine clinical assessments and questionnaires.
    -   Aggregating data for quality improvement initiatives and reporting at the municipal, regional, and national levels.
    -   Supporting clinical decision-making by providing access to structured patient data.
    -   Enabling the reuse of data for research and population health management.
    -   Facilitating communication and coordination of care between different providers and settings within the municipality.
