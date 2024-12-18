# allergy: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the exchange of allergy and intolerance information within the Belgian healthcare system. It focuses on ensuring consistent representation of patient allergies, including causative agents, clinical status, verification status, reactions, and associated metadata.
-   **Key clinical/business problems it solves:** The IG aims to improve patient safety by facilitating accurate and reliable sharing of allergy information between different healthcare providers and systems. This can help prevent adverse drug reactions, improve care coordination, and support clinical decision-making. It also aims to streamline administrative processes related to allergy management.
-   **Intended scope and boundaries:** The scope is limited to the representation of allergy and intolerance information for patient dossiers within Belgium. It does not cover other types of clinical information or workflows beyond allergy management. The IG specifically focuses on the exchange of allergy records, not on the internal storage or processing of this data within individual systems.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **BeAllergyIntolerance:** The core profile, based on the FHIR AllergyIntolerance resource, defines how allergy information should be structured and exchanged.
    -   **BeExtAllergyType:** An extension to specify the type of allergy or intolerance, as the base resource's `type` field is constrained to 0..0.
    -   **BePatient:** Profile based on the FHIR Patient resource, used to represent the patient who has the allergy.
    -   **BePractitioner, BePractitionerRole:** Profiles used to represent the healthcare professional who recorded or is responsible for the allergy information.
-   **Notable operations and interactions:** The IG does not define specific operations or interactions beyond the standard FHIR create, read, update, and search operations for the profiled resources.
-   **Key terminology and value sets:**
    -   **BeAllergyIntoleranceCode:** A value set that combines causative agent codes (from BeCausativeAgent) and "no allergy" codes (from BeNoAllergy) for use in the `AllergyIntolerance.code` element.
    -   **BeCausativeAgent:** A value set containing SNOMED CT codes for non-medication causative agents.
    -   **BeNoAllergy:** A value set with a single SNOMED CT code for "No known allergy."
    -   **BeVSAllergyIntoleranceType:** A value set for allergy/intolerance types, including codes for non-allergic hypersensitivity.
    -   **BeRiskManifestation:** A value set containing SNOMED CT codes for clinical manifestations of allergic reactions.
    -   **BeExposureRoute:** A value set with SNOMED CT codes for exposure routes.
    -   **BeNSAllergy:** A naming system defining a URI for unique allergy identifiers in Belgium.
-   **Significant patterns and constraints:**
    -   The `AllergyIntolerance.type` element is constrained to 0..0, with the allergy type specified using the `BeExtAllergyType` extension.
    -   The `AllergyIntolerance.code` element must use the `BeAllergyIntoleranceCode` value set, which includes codes for both causative agents and "no known allergy."
    -   Medication-related allergies are indicated using CNK, ATC, or CTI-extended codes.
    -   The `AllergyIntolerance.recorder` element must reference a `BePractitioner`, `BePractitionerRole`, or `BePatient`.
    -   The `AllergyIntolerance.identifier` element must include a unique identifier from the `BeNSAllergy` naming system.
    -   The `AllergyIntolerance.reaction.manifestation` element must use the `BeRiskManifestation` value set.
    -   The `AllergyIntolerance.reaction.exposureRoute` element uses the `BeExposureRoute` value set.

## Technical Essence

This IG defines a Belgian-specific allergy exchange model centered around a constrained `BeAllergyIntolerance` profile. Each allergy record is uniquely identified using a `BeNSAllergy` URI and linked to a `BePatient`. The causative agent is coded using `BeAllergyIntoleranceCode`, which encompasses SNOMED CT codes for non-medication agents (from `BeCausativeAgent`) and a "no known allergy" code (from `BeNoAllergy`), while medication allergies leverage CNK, ATC, or CTI-extended codes. The base resource's `type` field is disallowed, replaced by the mandatory `BeExtAllergyType` extension, drawing from `BeVSAllergyIntoleranceType`. Clinical and verification statuses are mandatory, using standard FHIR value sets. Reactions are detailed with manifestations coded from `BeRiskManifestation` and optional exposure routes from `BeExposureRoute`. The `recorder` must be a `BePractitioner`, `BePractitionerRole`, or `BePatient`, ensuring accountability.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves creating and sharing `BeAllergyIntolerance` resources. Systems will need to be able to generate these resources based on local data and consume them from other systems. Search operations will likely be used to retrieve allergy information for specific patients.
-   **Important requirements and guardrails:**
    -   Implementers must ensure that all mandatory elements and extensions are populated correctly.
    -   Terminology bindings must be adhered to, particularly for `code`, `reaction.manifestation`, and `reaction.exposureRoute`.
    -   Unique identifiers from the `BeNSAllergy` naming system must be used.
    -   The `recorder` element must be populated with a valid reference.
-   **Notable design choices and patterns:**
    -   The use of an extension for allergy type instead of the base resource's `type` element is a significant design choice, likely driven by the need for a more comprehensive set of allergy types.
    -   The inclusion of "no known allergy" codes in the `BeAllergyIntoleranceCode` value set allows for the explicit representation of the absence of allergies.
    -   The requirement for a `recorder` ensures that there is a clear responsibility for the accuracy of the allergy information.

## Ecosystem Context

-   **Target systems and users:** The target systems are likely electronic health record (EHR) systems, pharmacy systems, and other clinical information systems used within the Belgian healthcare system. The target users are healthcare providers, including physicians, nurses, and pharmacists.
-   **Relationship to other standards/IGs:** This IG builds upon the core FHIR R4 specification. It also references the Belgian eHealth platform's core profiles (e.g., `hl7.fhir.be.core`) and medication-related naming systems.
-   **Relevant jurisdictions or programs:** This IG is specifically designed for use within Belgium and is likely aligned with national eHealth initiatives and regulations.
-   **Primary use cases and scenarios:**
    -   Sharing allergy information between a general practitioner and a specialist.
    -   Retrieving a patient's allergy list during a hospital admission.
    -   Checking for potential drug allergies before prescribing a new medication.
    -   A patient recording their own allergies using a personal health record application.
    -   Using allergy information for clinical studies (with GDPR considerations for patient-reported allergies).
