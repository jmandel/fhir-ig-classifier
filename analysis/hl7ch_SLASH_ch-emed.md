# ch-emed: Analysis

## Core Purpose & Scope

The **CH EMED (R4)** Implementation Guide (IG) addresses the interoperability challenges related to the exchange of medication information within the Swiss Electronic Patient Record (EPR) ecosystem. It aims to solve key clinical and business problems by providing a standardized, FHIR-based representation of various eMedication documents, enabling seamless information flow between healthcare providers and patients. The IG's scope is confined to the exchange of medication-related information and is built upon [CH Core](http://fhir.ch/ig/ch-core/index.html) and [CH Term](http://fhir.ch/ig/ch-term/index.html), which provide the Swiss-specific context. The IG defines the structure and content of six key document types: Medication Treatment Plan, Medication Prescription, Medication Dispense, Pharmaceutical Advice, Medication List, and Medication Card.

## Technical Foundation

The technical foundation of CH EMED rests on FHIR R4.

**Core Profiles and Extensions:**
- **Document Profiles:** Defines Bundle resources for each document type (e.g., `CHEMEDDocumentMedicationTreatmentPlan`).
- **Composition Profiles:**  Defines Composition resources tailored to each document type (e.g., `CHEMEDMedicationTreatmentPlanComposition`).
- **Entry Profiles:** Defines profiles for MedicationStatement, MedicationRequest, MedicationDispense, MedicationAdministration, and Observation, specific to their use within each document type (e.g., `CHEMEDMedicationStatement (MTP)`, `CHEMEDMedicationRequest (PRE)`).
- **Data Type Profiles:** Defines constraints on FHIR data types like Dosage (e.g., `CHEMEDDosage`, `CHEMEDDosageSplit`).
- **Extensions:** Defines extensions to capture relationships between documents and their resources, such as `CHEMEDExtTreatmentPlan`, `CHEMEDExtPrescription`, `CHEMEDExtDispense`, and `CHEMEDExtPharmaceuticalAdvice`. Also defines extensions for specific use cases like `CHEMEDExtMedicationRequestChanged`, `CHEMEDExtMedicationStatementChanged`, and `CHEMEDExtLastConsideredDocument`.

**Notable Operations and Interactions:**
- The IG primarily focuses on document exchange, implying create and read operations on Bundle resources.

**Key Terminology and Value Sets:**
- **LOINC:** Used for `Composition.type` to distinguish document types (MTP, DIS, PRE, PADV, LIST).
- **SNOMED CT:** Used for various codings, including `Composition.type` for CARD, medication ingredients, and units.
- **UCUM:** Used for units in dosage instructions.
- **EDQM - RouteOfAdministration:** Defines codes for the route of administration.
- **IHE Pharmaceutical Advice Status List:** Defines codes for actions in the Pharmaceutical Advice document (CHANGE, REFUSE, CANCEL, COMMENT).
- **ActSubstanceAdminSubstitutionCode:** Defines a ValueSet excluding 'none' for `MedicationDispense.substitution.type`.
- **UnitCode:** Defines units of presentation and administration using SNOMED CT and UCUM codes.

**Significant Patterns and Constraints:**
- **Document Bundle:** Each document is represented as a Bundle with a Composition as the first entry, referencing other entries.
- **Must Support:** Elements from the minimum data set in the IPAG report have `mustSupport` flag set to `true`, primarily in the Medication Card document.
- **Original Representation:** Medication Card and Prescription documents must be embedded as PDF/A-1 or PDF/A-2, representing the original format.
- **Authorship:** Defines how to represent the author of the document and the author of the medical decision at the document and entry levels.
- **Dosage:** Supports normal and split dosing, structured and/or narrative, with specific profiles for each.
- **Repeated Dispense:** Defines how to represent the validity period and number of repeats for prescriptions.
- **Relationship Between Documents:** Uses extensions and identifiers to link related documents and resources.

## Technical Essence

CH EMED standardizes eMedication document exchange in the Swiss EPR using FHIR R4 Bundles. Each document type (MTP, PRE, DIS, PADV, LIST, CARD) has a specific Composition profile serving as the document manifest, referencing profiled MedicationStatement, MedicationRequest, MedicationDispense, MedicationAdministration, and Observation resources as entries.  UUIDs are used for both document and resource identifiers. Relationships between documents and their resources are established through paired extensions (e.g., `ch-emed-ext-treatmentplan` with `id` and `externalDocumentId` fields) referencing these identifiers. Dosage instructions leverage `Dosage` data type, supporting structured (1-1-1-1 scheme with `timing.repeat.when` and `doseAndRate`) and narrative (`patientInstruction`) forms, with dedicated profiles for normal and split dosing.  `MedicationRequest.dispenseRequest` handles repeated dispense with `validityPeriod` and `numberOfRepeatsAllowed`. Authorship is captured at document (Composition.author: PractitionerRole, Patient, RelatedPerson, or Device) and entry levels (e.g., `MedicationStatement.informationSource`: PractitionerRole, Patient, RelatedPerson). The Medication Card and Prescription require an embedded PDF/A representation. Key ValueSets include LOINC for document type, SNOMED CT for various codings, UCUM for units, and EDQM for the route of administration.

## Implementation Approach

**Critical Workflows and Interactions:**
- **Document Creation:** Healthcare professionals create eMedication documents (MTP, PRE, DIS, PADV) using their respective systems, which generate FHIR Bundles conforming to the defined profiles.
- **Document Exchange:** These Bundles are exchanged within the Swiss EPR, likely through a central infrastructure or peer-to-peer communication.
- **Document Consumption:** Receiving systems parse the FHIR Bundles, extract relevant information, and integrate it into their workflows.
- **Medication List Generation:** The Medication List document is dynamically generated, typically by a device, aggregating information from other eMedication documents.
- **Medication Card Creation:** The Medication Card document provides a consolidated view of current medications, potentially authored by a pharmacist or device.

**Important Requirements and Guardrails:**
- **Conformance to Profiles:** All exchanged documents must conform to the defined FHIR profiles.
- **PDF/A Embedding:** Medication Card and Prescription documents must include an embedded PDF/A representation.
- **Identifier Management:** Proper generation and management of UUIDs for document and resource identifiers are crucial.
- **Terminology Adherence:** Consistent use of specified ValueSets (LOINC, SNOMED CT, UCUM, EDQM) is required.
- **Must Support Elements:** If data is known for elements marked as `mustSupport`, it must be populated.

**Notable Design Choices and Patterns:**
- **Document-Centric Approach:** The focus on document exchange aligns with the EPR paradigm.
- **Extension-Based Relationships:** Using extensions to link related documents simplifies the representation compared to complex graph structures.
- **Structured and Narrative Dosage:** Allowing both structured and narrative dosage provides flexibility for different clinical scenarios.

## Ecosystem Context

**Target Systems and Users:**
- **Systems:** Hospital information systems, pharmacy systems, physician practice management systems, EPR infrastructure components, and patient-facing applications.
- **Users:** Physicians, pharmacists, nurses, other healthcare professionals, and patients.

**Relationship to Other Standards/IGs:**
- **CH Core:** Provides the Swiss EPR context and base profiles.
- **CH Term:** Provides the Swiss terminology context.
- **IHE Pharmacy Technical Framework:**  The IG is based on several IHE Pharmacy supplements (PRE, DIS, MTP, PADV, PML).
- **HL7 CDA-CH-EMED:** The IG was initially based on this CDA specification but has since moved to FHIR.

**Relevant Jurisdictions or Programs:**
- **Switzerland:** The IG is specifically designed for the Swiss EPR.

**Primary Use Cases and Scenarios:**
- **Medication Treatment Planning:** A physician creates an MTP document to define a patient's medication regimen.
- **Prescription and Dispensing:** A physician creates a PRE document, which is used by a pharmacist to dispense medication (DIS document).
- **Pharmaceutical Advice:** A pharmacist provides advice (PADV document) on an existing medication, potentially modifying the treatment plan or prescription.
- **Medication Overview:** A patient or healthcare professional accesses the Medication List or Medication Card document to view the patient's current medication status.
- **Hospital Discharge:** A Medication Card document is generated at hospital discharge to inform the patient and subsequent care providers about the current medication.
- **Accident with Medication by Emergency Services:** Emergency medical services document medication administered during an accident.
