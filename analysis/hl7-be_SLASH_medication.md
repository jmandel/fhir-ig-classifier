# medication: Analysis

## Core Purpose & Scope
-   **Primary interoperability challenges this IG addresses:** This IG focuses on standardizing the exchange of medication information in Belgium, addressing challenges related to fragmented medication data across different healthcare systems and settings. It aims to improve the consistency, completeness, and accessibility of medication data for various stakeholders.
-   **Key clinical/business problems it solves:** The IG tackles problems such as medication reconciliation errors, lack of visibility into a patient's complete medication history, and difficulties in coordinating medication management across different care providers. It aims to enhance patient safety, improve care coordination, and support clinical decision-making.
-   **Intended scope and boundaries:** The IG covers the exchange of medication information related to a patient's medication record, including past, present, and future medications. It encompasses concepts like medication treatment plans, prescriptions, dispenses, and medication administrations. The scope is primarily within the Belgian healthcare context, but it also considers cross-border scenarios. It does not define transport mechanisms or security protocols.

## Technical Foundation
-   **Core profiles and extensions:**
    -   `BeMedicationDispense`: Constrains the `MedicationDispense` resource to represent a dispensation record in Belgium, including details about the dispensed medication, patient, prescription, and dispenser.
    -   `BEMedicationLine`: Profiles the `MedicationStatement` resource to represent a single medication item in a patient's medication record, including details about the medication, dosage, effective period, and adherence.
    -   `BEModelMedicationDispense`: A logical model defining the structure of a dispense record, including information about the patient, dispenser, prescription, and dispensed items.
    -   `BEModelMedicationLine`: A logical model defining the structure of a medication line, including details about the medication, dosage, effective period, and adherence.
    -   `BELMMedProduct`: A logical model representing a medicinal product.
    -   Extensions: `ExposureCategory`, `DispenseRequestNeededCategory`, `DosageOverride`, `DosageOverrideReason`, `artifact-version`, `artifact-date`, `adherence`.
-   **Notable operations and interactions:** The IG primarily focuses on the exchange of medication information through RESTful interactions, including querying for medication records, creating and updating medication lines, and registering dispenses.
-   **Key terminology and value sets:**
    -   `MedicationExposureCategoryVS`: Defines the exposure purpose of a medication (e.g., therapeutic, prophylactic).
    -   `MedicationLineOrigintypeVS`: Specifies the origin of a medication treatment (e.g., ambulatory, hospital).
    -   `BEMLMedicationTypeVS`: Defines the type of medication preparation (e.g., magistral, medicinal product).
    -   `DispenserTypes`: Defines types of dispensers based on hcparty codes.
    -   Naming Systems: `BeNSCNK` (CNK product codes), `BeNSPrescriptions` (prescription IDs), `BeNSProductPackage` (product package types), `be-ns-cti-extended-code` (CTI extended codes).
-   **Significant patterns and constraints:**
    -   The `BeMedicationDispense` profile mandates the use of specific identifiers (e.g., DGUID, SGUID) and constrains the `medicationCodeableConcept` to SNOMED CT medication codes.
    -   The `BEMedicationLine` profile requires a unique identifier (VIDIS) and includes extensions for exposure category, dispense request needs, artifact version, and adherence.
    -   The logical models (`BEModelMedicationDispense`, `BEModelMedicationLine`) define the structure and relationships between different data elements in dispense records and medication lines.

## Technical Essence
This IG defines a Belgian medication record exchange based on `MedicationStatement` resources profiled as `BEMedicationLine`, each identified by a unique `VIDIS` identifier and carrying an `artifact-version` for version control. `BEMedicationLine` instances detail a single medication item, referencing a `BELMMedProduct` logical model for product details, and include `dosage` with potential overrides, `effectivePeriod`, and `adherence` extensions. Dispenses are captured via `BeMedicationDispense` profiles, referencing `MedicationDispense` and linked to `BEMedicationLine` via `context`. `BeMedicationDispense` instances are identified by a `DGUID` and a session `SGUID`, detailing the dispensed `medicationCodeableConcept` (constrained to SNOMED CT), `quantity`, `whenHandedOver`, and `authorizingPrescription`. The IG mandates specific coding systems for medication identification (CNK codes) and leverages extensions to capture nuanced information like exposure category and whether a dispense request is needed. The core exchange pattern involves querying for `BEMedicationLine` resources to retrieve a patient's medication record and posting `BeMedicationDispense` resources to register dispensation events.

## Implementation Approach
-   **Critical workflows and interactions:**
    -   Consulting a patient's medication record: Querying for `BEMedicationLine` resources associated with a specific patient.
    -   Updating a medication record: Creating or updating `BEMedicationLine` resources to reflect changes in a patient's medication treatment.
    -   Registering a dispense: Creating `BeMedicationDispense` resources to record the dispensation of medications.
    -   Compiling a medication record from different sources: Aggregating and reconciling medication information from various sources (e.g., prescriptions, dispenses) to create a consolidated medication record.
-   **Important requirements and guardrails:**
    -   Conformance to the defined profiles and extensions is crucial for interoperability.
    -   Use of mandated identifiers (e.g., VIDIS, DGUID, SGUID) is essential for uniquely identifying resources.
    -   Adherence to specified coding systems (e.g., CNK codes, SNOMED CT) ensures consistent interpretation of medication information.
    -   Versioning of medication lines (`artifact-version`) is important for tracking changes and ensuring data integrity.
-   **Notable design choices and patterns:**
    -   The use of `MedicationStatement` as the basis for the `BEMedicationLine` profile provides a flexible and comprehensive way to represent medication information.
    -   The inclusion of extensions for exposure category, dispense request needs, and adherence allows for capturing additional context and details.
    -   The logical models (`BEModelMedicationDispense`, `BEModelMedicationLine`) provide a clear and structured representation of the data elements and their relationships.

## Ecosystem Context
-   **Target systems and users:** The primary target systems are electronic health record (EHR) systems, pharmacy systems, and other healthcare applications used in Belgium. The target users include healthcare professionals (e.g., physicians, pharmacists), patients, and other stakeholders involved in medication management.
-   **Relationship to other standards/IGs:** The IG builds upon the core FHIR standard and leverages concepts from other IGs, such as the International Patient Summary (IPS). It also references the KMEHR Medication Schema, a Belgian standard for medication information exchange.
-   **Relevant jurisdictions or programs:** The IG is specifically designed for the Belgian healthcare context and aligns with national initiatives related to eHealth and medication management.
-   **Primary use cases and scenarios:**
    -   **Medication Record - Use cases:** Consulting a medication record, updating a medication record, compiling a medication record.
    -   **Dispense - Use cases:** Registering a dispense, consulting the dispenses for a given patient.
    -   **Medication Record - Extended scenarios:** Concurrent medications, protocols.
    -   The IG supports various scenarios, including medication reconciliation, prescription management, and cross-border medication information exchange.
