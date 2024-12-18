# ig-tooling: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the exchange of patient summary information within the Austrian healthcare system, ensuring consistency and interoperability between different healthcare providers and systems. It specifically focuses on creating an Austrian-specific profile for the International Patient Summary (IPS).
-   **Key clinical/business problems it solves:** It solves the problem of fragmented and inconsistent patient data by providing a standardized format for sharing essential patient information, such as demographics, medical diagnoses, medications, allergies, procedures, and diagnostic results. This facilitates better care coordination, reduces medical errors, and improves patient safety, particularly in cross-border or emergency care scenarios.
-   **Intended scope and boundaries:** The scope is limited to defining the structure, format, and standards for the Austrian Patient Summary (Austrian PS). It leverages the IPS and the HL7® Austria FHIR® Core Implementation Guide as its foundation. The IG does not define new clinical workflows but rather provides the technical specifications for exchanging patient summary data within existing workflows.

## Technical Foundation

-   **Core profiles and extensions:** The IG defines several core profiles derived from either the general FHIR resources (in absence of a corresponding profile in the HL7® Austria FHIR® Core implementation guide) or the IPS profiles. Key profiles include `AtIpsBundle`, `AtIpsComposition`, `AtIpsPatient`, `AtIpsAllergyIntolerance`, `AtIpsCondition`, `AtIpsMedicationStatement`, `AtIpsMedicationRequest`, `AtIpsProcedure`, `AtIpsObservationResults`, and others. The `imposeProfile` extension is extensively used to ensure IPS conformity.
-   **Notable operations and interactions:** The IG primarily focuses on the structure of the patient summary document (Bundle) and does not define specific operations or interactions beyond standard FHIR create, read, update, and delete operations.
-   **Key terminology and value sets:** The IG utilizes standard terminologies such as LOINC, SNOMED CT, v2, and v3 code systems. It also references Austrian-specific code systems like `asp-liste` and `elga-laborparameterergaenzung`.
-   **Significant patterns and constraints:** The `AtIpsBundle` profile defines a document-type bundle with specific constraints on the contained resources, including a mandatory `AtIpsComposition` and `AtIpsPatient`. The `AtIpsComposition` profile further defines sections like `sectionMedications`, `sectionAllergies`, `sectionProblems`, etc., with specific LOINC codes and constraints on the resources that can be referenced within each section.

## Technical Essence

This IG defines an Austrian-specific profile for the International Patient Summary (IPS) by creating a FHIR R4 Bundle (`AtIpsBundle`) that mandates an `AtIpsComposition` and `AtIpsPatient`. The `AtIpsComposition` structures the summary into sections like Medications, Allergies, Problems, etc., using LOINC codes and referencing specific profiles for each section's content (e.g., `AtIpsMedicationStatement`, `AtIpsAllergyIntolerance`, `AtIpsCondition`). Each profile, such as `AtIpsAllergyIntolerance`, is derived from the base FHIR resource or the corresponding IPS profile, using the `imposeProfile` extension to enforce IPS conformity. The IG leverages standard terminologies like LOINC and SNOMED CT, alongside Austrian-specific code systems. The core design enforces a structured document model where the Composition acts as a table of contents, linking to detailed resources that conform to specific profiles, ensuring a consistent and interoperable representation of the Austrian Patient Summary.

## Implementation Approach

-   **Critical workflows and interactions:** The IG supports the creation and exchange of patient summary documents. Implementers would generate `AtIpsBundle` instances containing the required resources according to the defined profiles. These bundles can then be exchanged between systems using standard FHIR interactions.
-   **Important requirements and guardrails:** Implementers must adhere to the defined profiles and constraints. The `AtIpsBundle` must contain an `AtIpsComposition` and `AtIpsPatient`. The `AtIpsComposition` sections must use the specified LOINC codes and reference only the allowed resource types. All resources must conform to their respective profiles, including the use of the `imposeProfile` extension for IPS conformity.
-   **Notable design choices and patterns:** The IG uses a document-centric approach, with the `AtIpsBundle` representing the complete patient summary. The `AtIpsComposition` acts as a table of contents, organizing the summary into sections. The use of the `imposeProfile` extension ensures that the Austrian profiles are also compliant with the broader IPS standard.

## Ecosystem Context

-   **Target systems and users:** The target systems are healthcare IT systems within Austria, including EHRs, PHRs, and other clinical information systems. The users are healthcare providers, patients, and other stakeholders involved in the exchange of patient information.
-   **Relationship to other standards/IGs:** The IG is built upon the IPS and the HL7® Austria FHIR® Core Implementation Guide. It extends and profiles these standards to meet the specific needs of the Austrian healthcare system.
-   **Relevant jurisdictions or programs:** The IG is specifically designed for the Austrian healthcare context, with support from ELGA GmbH, the Austrian eHealth infrastructure provider.
-   **Primary use cases and scenarios:** The primary use case is the exchange of patient summary information between healthcare providers within Austria. This includes scenarios such as referrals, hospital admissions/discharges, and cross-border care. The IG also supports a visualization contest for students to develop innovative ways to present the IPS data.
