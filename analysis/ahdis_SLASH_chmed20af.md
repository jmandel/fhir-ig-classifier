# CHMED: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of interoperable exchange of medication information in Switzerland, specifically focusing on the eMediplan format. It aims to bridge the gap between the existing eMediplan format (CHMED23A) and the FHIR standard, enabling seamless data exchange between systems using these different formats.
-   **Key clinical/business problems it solves:** It solves the problem of fragmentation in medication data exchange by providing a standardized FHIR-based format (CHMED) for representing eMediplan information. This facilitates better communication between healthcare providers, improves patient safety by reducing medication errors, and supports the development of integrated eHealth solutions. It also provides a converter between the eMediplan format and the CHMED format.
-   **Intended scope and boundaries:** The scope is limited to the specification of two primary exchange formats: Medication Card document (CARD) for a patient's current medication overview and Medication Prescription document (PRE) for prescription information. It focuses on mapping the eMediplan ChMed23A format to FHIR resources and profiles, defining necessary extensions, and providing examples. It does not cover broader aspects of medication management beyond these two exchange formats. It also includes the mapping of the new complex structured dosing (posology) of the eMedication Plan ChMed23A.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** CHMED PractitionerRole, Practitioner, Organization, Medication, Medication Card document (Bundle), Medication Card Composition, MedicationStatement, First Day of Last Menstruation (Observation), Premature Baby (Observation), Time of Gestation (Observation), Risks (Condition), Body Weight (Observation), Body Height (Observation), Patient (CARD and PRE), Medication Prescription document (Bundle), Medication Prescription Composition, MedicationRequest, Dosage.
    -   **Extensions:** CHMED Extension (for additional information), CHMED Recipient (GLN of the recipient), CHMED sic (sic erat scriptum), CHMED Dose Quantity To, CHMED Posology Detail Object Type, CHMED Timed Dosage Object Type.
-   **Notable operations and interactions:** The IG primarily focuses on document creation and exchange using the `$document` operation.
-   **Key terminology and value sets:**
    -   **ValueSets:** CHMED Risk Categories, CHMED Risks (CDSCODE), UnitCode, EDQM - RouteOfAdministration, CHMED Method of Administration, CHMED Posology Detail Object Type, CHMED Timed Dosage Object Type, CHMED Relative to Meal.
    -   **CodeSystems:** CHMED Risk Categories, CHMED Risks, CHMED Posology Detail Object Type, CHMED Timed Dosage Object Type, CHMED Method of Administration (CDTYP62).
-   **Significant patterns and constraints:** The IG follows the FHIR document paradigm, using Bundle and Composition resources to structure the exchange formats. It defines specific profiles for each resource involved, with constraints mapped from the eMediplan format. It leverages extensions to capture eMediplan-specific data elements not directly represented in core FHIR.

## Technical Essence

CHMED defines a FHIR R4 based representation of the Swiss eMediplan, enabling interoperability between systems using the eMediplan format and those using FHIR. It specifies two document types: Medication Card (CARD) and Medication Prescription (PRE), both represented as FHIR Bundles. The CARD Bundle contains a Composition referencing MedicationStatements for current medications, and Observations/Conditions for patient health concerns like last menstruation date, premature birth, gestation time, risks, body weight, and height. The PRE Bundle contains a Composition referencing MedicationRequests for prescribed medications. Both document types can include an embedded PDF representation in a Binary resource. CHMED defines profiles for all involved resources (Practitioner, Organization, Patient, Medication, etc.), constraining them to the eMediplan context. Key extensions include CHMED Extension for generic additional information, CHMED Recipient for the prescription's electronic recipient GLN, and CHMED Sic to indicate deliberate prescription choices. Dosage instructions leverage the CHMED Dosage profile, extending FHIR Dosage with extensions like CHMED Posology Detail Object Type and CHMED Timed Dosage Object Type to capture complex dosing schedules from the eMedication Plan ChMed Posology. The IG mandates specific value sets for risk categories, risks, units, routes of administration, methods of administration, posology detail object types, and timed dosage object types, primarily sourced from the Swiss INDEX database and SNOMED CT.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves generating either a Medication Card or Medication Prescription document as a FHIR Bundle, populating it with profiled resources and extensions based on the eMediplan data, and exchanging it using the `$document` operation.
-   **Important requirements and guardrails:** Implementers must adhere to the defined profiles and extensions, ensuring data elements are mapped correctly from the eMediplan format. They must use the specified value sets and code systems. Validation against the profiles is crucial. The "mustSupport" flag is interpreted as defined by CH EMED.
-   **Notable design choices and patterns:** The use of FHIR documents and the `$document` operation is a key design choice. The definition of specific profiles for each resource, along with extensions, follows a consistent pattern throughout the IG.

## Ecosystem Context

-   **Target systems and users:** The target systems are any eHealth systems in Switzerland that need to exchange medication information, particularly those involved in creating, sharing, or consuming eMediplans. The users are healthcare professionals (physicians, pharmacists, etc.) and patients.
-   **Relationship to other standards/IGs:** CHMED depends on and extends the [CH EMED](http://fhir.ch/ig/ch-emed/index.html) IG, which defines the Swiss eMedication format in the context of the EPR. It also references [CH Core](http://fhir.ch/ig/ch-core/index.html) for core profiles like GLN identifier.
-   **Relevant jurisdictions or programs:** This IG is specifically designed for the Swiss eHealth ecosystem and is relevant to programs and initiatives related to eMediplan adoption in Switzerland.
-   **Primary use cases and scenarios:** The primary use cases are generating a Medication Card document at the end of a hospital stay or encounter to provide a patient's current medication overview and creating a Medication Prescription document during the prescription process. The IG provides examples for these use cases.
