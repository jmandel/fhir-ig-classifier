# patientwill: Analysis

## Core Purpose & Scope
-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the representation and exchange of patient wills and advance directives within the Belgian healthcare system. It focuses on ensuring consistent documentation of patient preferences regarding medical treatments, resuscitation, hospitalization, and other end-of-life decisions.
-   **Key clinical/business problems it solves:** It solves the problem of inconsistent or unavailable documentation of patient wishes, which can lead to unwanted or inappropriate medical interventions. By providing a standardized format, it aims to improve communication and respect for patient autonomy in critical care situations.
-   **Intended scope and boundaries:** The scope is limited to patient wills within the context of limitations to treatment, DNR orders, and related directives. It also includes provisions for recording agreement to participate in clinical trials. The IG explicitly states that any use case around informed consent is out of scope.

## Technical Foundation
-   **Core profiles and extensions:**
    -   **BePatientWill:** The core profile, based on the FHIR Consent resource, defines the structure for representing patient wills.
    -   **BeExtSimpleNote:** An extension for adding simple notes.
    -   **BeExtRecorder:** An extension to identify the person recording the patient will.
-   **Notable operations and interactions:** The IG does not define specific operations or interactions beyond standard FHIR resource operations (e.g., create, read, update).
-   **Key terminology and value sets:**
    -   **BeVSPatientWillCategory:** Defines categories of patient wills (e.g., resuscitation, euthanasia, organ donation).
    -   **BeVSPatientWillCode:** Provides specific codes for patient will directives (e.g., DNR levels, hospitalization preferences).
    -   **BeVSPatientWillScope:** Defines the scope of the patient will, using SNOMED CT code 385432009 (Procedure on the person).
-   **Significant patterns and constraints:**
    -   The `status` element is constrained to a fixed value of 'active'.
    -   The `scope` element is constrained to the BeVSPatientWillScope valueset (extensible).
    -   The `category` element is constrained to the BeVSPatientWillCategory valueset (required).
    -   The `patient` element is constrained to a reference to a BePatient profile.
    -   The `dateTime` element is required and represents the time the will was recorded.
    -   The `provision` element is required and contains the core patient will directive.
    -   The `provision.code` element is constrained to the BeVSPatientWillCode valueset (required).

## Technical Essence
This IG defines a `BePatientWill` profile derived from `Consent`, mandating an `active` status and a `dateTime` indicating when the will was recorded. It leverages a `BeExtRecorder` extension to capture the recorder's identity. The `patient` is a reference to a `BePatient`. The core directive is encapsulated within `provision`, with a `period` specifying validity and a `code` drawn from `BeVSPatientWillCode` valueset, detailing specific directives like DNR levels (dnr0, dnr1, dnr2, dnr3) or hospitalization preferences (hos0, hos2). The `category` from `BeVSPatientWillCategory` classifies the will's type (e.g., resuscitation, euthanasia). The `scope` is limited to SNOMED CT code 385432009. The `sourceReference` allows linking to supporting evidence, such as a signed document.

## Implementation Approach
-   **Critical workflows and interactions:** The primary workflow involves creating and updating BePatientWill resources to reflect patient wishes. Healthcare providers would record patient wills, potentially referencing supporting documentation. Consumers of the IG would retrieve and interpret these resources to understand and respect patient preferences during care delivery.
-   **Important requirements and guardrails:** Implementers must ensure that the `status` is always 'active', the `dateTime` accurately reflects the recording time, and the `provision.code` is selected from the defined BeVSPatientWillCode valueset. The `patient` element must reference a valid BePatient resource.
-   **Notable design choices and patterns:** The use of the Consent resource as a base provides a familiar structure for representing agreements and directives. The extensions for recorder and simple notes enhance the core profile with contextually relevant information.

## Ecosystem Context
-   **Target systems and users:** The target systems are likely to be electronic health record (EHR) systems, hospital information systems, and other clinical applications used within the Belgian healthcare system. The primary users are healthcare providers (doctors, nurses) and potentially patients or their representatives.
-   **Relationship to other standards/IGs:** This IG depends on the `hl7.fhir.be.core` IG, indicating a relationship with other Belgian FHIR profiles and resources. It also references international standards like SNOMED CT and LOINC.
-   **Relevant jurisdictions or programs:** The IG is specifically designed for the Belgian healthcare context, as indicated by the jurisdiction codes and references to Belgian organizations like the eHealth Platform and NIHDI.
-   **Primary use cases and scenarios:** The primary use cases involve documenting and communicating patient preferences regarding end-of-life care, resuscitation, hospitalization, and participation in clinical trials. Scenarios might include a patient expressing their wish not to be resuscitated, a doctor recording this wish in the EHR, and another doctor accessing this information during a critical care situation.
