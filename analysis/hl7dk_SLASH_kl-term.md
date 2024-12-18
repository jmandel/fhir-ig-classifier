# kl-term: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the interoperability challenges related to the exchange of health and social care information within Danish municipalities. It focuses on standardizing the representation of clinical and administrative concepts, including conditions, observations, interventions, and goals, using FHIR. It also aims to bridge the gap between two existing Danish terminologies, FSIII (used in healthcare) and FFB (used in social care).
-   **Key clinical/business problems it solves:** The IG solves problems related to fragmentation of data across different systems and sectors within Danish municipalities. By providing a common terminology and FHIR-based data model, it enables better care coordination, data analysis, and reporting across health and social care domains. It supports the assessment of citizens' needs, planning and delivery of services, and follow-up on outcomes.
-   **Intended scope and boundaries:** The scope of this IG is limited to the Danish municipal context. It defines CodeSystems and ValueSets specific to the needs of Local Government Denmark, covering areas such as home care, nursing, therapy, prevention, and social services. It does not aim to cover all aspects of healthcare but focuses on the specific domains relevant to municipal services.

## Technical Foundation

-   **Core profiles and extensions:** The IG does not explicitly define any FHIR profiles or extensions. It primarily focuses on terminology.
-   **Notable operations and interactions:** No specific operations or interactions are defined in this IG.
-   **Key terminology and value sets:**
    -   **CodeSystems:** NPU (codes used in Danish municipalities), KLCommonproprietary (proprietary codes associated with KLCommonCareSocial).
    -   **ValueSets:** Numerous ValueSets are defined, categorizing concepts from FSIII and FFB terminologies. Key ValueSets include:
        -   KLConditionCodes (various categories for home care, nursing, therapy, prevention, FFB)
        -   KLTargetGroupsFFB (target groups as defined by FFB)
        -   KLSeverities (severity levels related to conditions)
        -   KLChangeValueCodes (target values for change of a condition)
        -   KLObservationCodes (SNOMED CT and NPU codes used in Danish municipalities)
        -   KLInterventions (interventions as described by FSIII and FFB)
        -   KLEncounterTypes (encounter types in Danish municipality health, social and elderly care)
        -   KLFollowUpCodes (follow-up codes used in Danish municipalities)
        -   KLInformationCodes (information codes from FSIII and FFB)
        -   KLCitizenObservationCodesFSIII (observation codes for citizens own observations as defined by FSIII)
        -   KLNeedsAssessmentCodesFFB (needs assessment codes as defined in FFB)
-   **Significant patterns and constraints:** The IG heavily relies on hierarchical ValueSets that include codes from FSIII and FFB systems based on concept relationships (descendent-of, is-a). It defines ValueSets for various aspects of care, such as conditions, interventions, observations, and follow-up codes.

## Technical Essence

This FHIR IG establishes a comprehensive terminology framework for Danish municipal health and social care by defining a set of CodeSystems and ValueSets that bridge the FSIII and FFB terminologies. It leverages FHIR's ValueSet resource to create hierarchical classifications of concepts using `include` and `exclude` clauses with `system`, `concept`, and `filter` properties, primarily employing `descendent-of` and `is-a` filters to select codes from FSIII (urn:oid:1.2.208.176.2.21) and FFB (urn:oid:1.2.208.176.2.22) systems, as well as SNOMED CT (http://snomed.info/sct) and a custom KLCommonCareSocialCodes system. For instance, `KLConditionCodesHomeCare` includes codes from FSIII where the concept is a descendent of specific FSIII codes representing different care areas. Similarly, `KLObservationCodes` includes specific SNOMED CT codes for vital signs and other observations, along with NPU codes. The IG also defines ValueSets for interventions, encounter types, follow-up codes, and other administrative concepts, all structured using this hierarchical inclusion/exclusion pattern. This design enables the creation of a unified terminology that can be used to categorize and exchange data across different municipal services, facilitating interoperability and data analysis within the Danish healthcare ecosystem.

## Implementation Approach

-   **Critical workflows and interactions:** While the IG does not explicitly define workflows, it implies support for workflows related to:
    -   Assessing citizen needs using standardized condition codes (KLConditionCodes).
    -   Planning and documenting interventions (KLInterventions).
    -   Recording observations using standardized codes (KLObservationCodes).
    -   Tracking progress and outcomes using follow-up codes (KLFollowUpCodes).
    -   Facilitating citizen self-reporting through dedicated observation codes (KLCitizenObservationCodesFSIII).
-   **Important requirements and guardrails:**
    -   Implementers must ensure that systems correctly interpret and apply the defined ValueSets.
    -   Systems should be able to handle the hierarchical nature of the ValueSets.
    -   Proper mapping between local codes and the standardized codes defined in the IG is crucial.
-   **Notable design choices and patterns:**
    -   The use of hierarchical ValueSets based on FSIII and FFB terminologies is a key design choice.
    -   The inclusion of SNOMED CT codes for specific observations provides a link to international standards.
    -   The definition of ValueSets for various aspects of care (conditions, interventions, etc.) promotes consistency in data representation.

## Ecosystem Context

-   **Target systems and users:** The target systems are those used within Danish municipalities for managing health and social care information, including electronic health records (EHRs), social care systems, and reporting systems. The target users are healthcare professionals, social workers, administrators, and other stakeholders involved in the delivery and management of municipal services.
-   **Relationship to other standards/IGs:** The IG builds upon FHIR R4 and incorporates SNOMED CT. It is specifically designed to work within the context of the Danish FSIII and FFB terminologies.
-   **Relevant jurisdictions or programs:** This IG is relevant to all Danish municipalities and is likely aligned with national initiatives related to digitalization of health and social care.
-   **Primary use cases and scenarios:**
    -   **Care coordination:** Sharing information about a citizen's conditions, interventions, and goals between different municipal services (e.g., home care, nursing, therapy).
    -   **Data analysis and reporting:** Aggregating data from different municipalities to analyze trends, evaluate outcomes, and inform policy decisions.
    -   **Quality improvement:** Using standardized data to monitor the quality of care and identify areas for improvement.
    -   **Citizen engagement:** Enabling citizens to contribute to their care plans and track their progress using standardized observation codes.
