# kl-children: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG), named KLChildren, addresses the interoperability challenges associated with reporting data from the Danish health promotion and disease prevention program for children (Sundhedsplejen) to the FK Gateway. It aims to solve the problem of standardizing the exchange of children's health data originating from health nurses' documentation in Danish municipalities, ensuring compliance with Danish core profiles and the shared information model (FKI) for municipal data. The IG's scope is specifically limited to the information required for reporting to the KL Gateway, encompassing data related to children and their parents, encounters with health nurses, interventions, observations, and questionnaire responses. It does not extend to other aspects of the broader healthcare system.

## Technical Foundation

The technical foundation of the KLChildren IG is built upon FHIR version 4.0.1. It defines a set of core profiles, including:

-   **KLGatewayChildrenDeliveryReport:** A Bundle profile for grouping and transmitting reports.
-   **KLGatewayChildrenCitizen:** A Patient profile for identifying the subject of the report (child or parent) using the Danish personal identification number (CPR-nummer) and the managing organization's SOR code.
-   **KLGatewayChildrenRelatedParent:** A RelatedPerson profile for representing the relationship between a child and their parents.
-   **KLGatewayChildrenEncounter:** An Encounter profile for documenting visits between children/parents and health nurses, including encounter type, class, start/end times, and location (e.g., school code).
-   **KLGatewayChildrenLocation:** A Location profile for identifying the school of the child using the Danish institution identifier.
-   **KLGatewayChildrenIntervention:** A CarePlan profile for documenting need-based interventions planned for a child or parent.
-   **KLGatewayChildrenQuestionnaire:** A Questionnaire profile used for all questionnaires in the IG, including extensions for minimum and maximum values.
-   **KLGatewayChildrenQuestionnaireResponse:** A QuestionnaireResponse profile for reporting answers to questionnaires, referencing the Questionnaire using a canonical reference.
-   **Observation profiles:** A set of Observation profiles for documenting various health data, including indicators (e.g., social interaction, parent-child relationship), exam results, weight, height, head circumference, and feeding observations.

The IG utilizes several key terminology and value sets, including:

-   **SNOMED CT:** For clinical concepts like body weight, head circumference, and clinical history/examination observables.
-   **LOINC:** For laboratory and clinical test results like body height and weight.
-   **FBOE:** A municipality-owned code system for encounter types, intervention codes, and observation codes specific to the children's database.
-   **KLCommonCodes:** For codes related to care and social services.
-   **UCUM:** For units of measure.
-   **Custom ValueSets:** For specific domains like encounter class codes, finding informer codes, health nurse interventions, health nurse conditions, encounter types, parent types, body height observables, feeding results, indicator codes, observation units, and exam results.

Significant patterns and constraints include:

-   Mandatory observations for specific encounter types, with dataAbsentReason used when data is missing.
-   Use of FHIR invariants to enforce data integrity rules.
-   Specific constraints on attributes, data types, and cardinalities for each profile.
-   Fixed codes for certain observation types.
-   Use of decimal points with specific precision for certain measurements.

## Technical Essence

The KLChildren IG defines a FHIR-based data exchange model for reporting children's health data from Danish municipalities to the KL Gateway. It leverages a Bundle profile (KLGatewayChildrenDeliveryReport) to encapsulate a set of resources representing a report. Each report includes a Citizen (Patient) identified by a CPR-nummer and managing organization's SOR code, potentially linked to a RelatedParent (RelatedPerson) for parent-child relationships. Encounters (KLGatewayChildrenEncounter) are documented with type, class, start/end times, and optionally a Location (KLGatewayChildrenLocation) for school codes. Interventions are captured using CarePlans (KLGatewayChildrenIntervention) with specific codes and optional reason codes. Observations are extensively used, with specialized profiles for indicators (e.g., KLGatewayChildrenIndicatorSocialInteraction), exam results (KLGatewayChildrenExamResult), weight (KLGatewayChildrenBodyWeight), height (KLGatewayChildrenBodyHeight), head circumference (KLGatewayChildrenHeadCircumference), and feeding (KLGatewayChildrenFeedingObservation). Questionnaires (KLGatewayChildrenQuestionnaire) and their responses (KLGatewayChildrenQuestionnaireResponse) are also supported, with specific profiles for instruments like ADBB, AIMS, EPDS, PUF, SDQ, and TOPI. The IG enforces data integrity through FHIR invariants, mandating specific observations for certain encounter types and requiring dataAbsentReason when values are missing. It relies heavily on SNOMED CT, LOINC, FBOE, and custom value sets for terminology, ensuring consistent coding of clinical concepts and administrative data.

## Implementation Approach

The IG is designed to be implemented by systems that collect and report children's health data from Danish municipalities. Implementers must ensure that their systems can generate FHIR resources conforming to the defined profiles. Key workflows include:

1.  **Data Collection:** Health nurses collect data during encounters with children and parents, including observations, questionnaire responses, and intervention planning.
2.  **Data Mapping:** Collected data is mapped to the appropriate FHIR resources and profiles defined in the IG.
3.  **Report Generation:** A KLGatewayChildrenDeliveryReport Bundle is created, containing the relevant Citizen, RelatedParent, Encounter, Location, Intervention, QuestionnaireResponse, and Observation resources.
4.  **Validation:** The generated Bundle is validated against the IG's profiles and invariants to ensure data integrity.
5.  **Transmission:** The validated Bundle is transmitted to the FK Gateway.

Important requirements and guardrails include:

-   Adherence to the specified profiles and their constraints.
-   Use of the defined terminology and value sets.
-   Inclusion of mandatory observations for specific encounter types.
-   Proper use of dataAbsentReason when data is missing.
-   Handling of entered-in-error scenarios using appropriate status codes.

## Ecosystem Context

The KLChildren IG targets systems used by health nurses in Danish municipalities and the FK Gateway, which receives and processes the reported data. It is specifically designed for the Danish healthcare context and is relevant to the national health promotion and disease prevention program for children. The IG is related to other Danish standards, such as the Danish core profiles and the FKI shared information model. It also aligns with international standards like FHIR, SNOMED CT, and LOINC.

The primary use cases include:

-   Reporting of standard encounters (e.g., pregnancy visits, newborn visits, school health examinations) and associated observations.
-   Reporting of need-based interventions for children and parents.
-   Reporting of questionnaire responses for instruments like EPDS and SDQ.
-   Tracking of children's growth and development through weight, height, and head circumference measurements.
-   Monitoring of feeding practices for infants.
-   Identification of potential health issues and social challenges through indicators and exam results.

The IG facilitates the standardized exchange of children's health data, enabling better monitoring, analysis, and decision-making at the municipal and national levels.
