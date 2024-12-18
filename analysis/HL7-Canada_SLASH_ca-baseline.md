# ca-baseline: Analysis

## Core Purpose & Scope

**Primary interoperability challenges this IG addresses:**

-   Lack of a national set of baseline FHIR profiles, leading to inconsistent implementations across jurisdictions and projects.
-   Difficulty for vendors and implementers to align with Canadian-specific FHIR requirements.
-   Siloed FHIR implementations that hinder widespread adoption and efficacy of mHealth, CDS Hooks, and SMART on FHIR applications.

**Key clinical/business problems it solves:**

-   Provides a common starting point for Canadian FHIR implementation guides, reducing development effort and promoting consistency.
-   Offers vendors a stepping stone to align their systems with Canadian concepts, reducing implementation costs and time.
-   Facilitates interoperability by exposing a set of commonly supported data elements, code systems, and value sets.

**Intended scope and boundaries:**

-   Not use-case driven; focuses on what is commonly supported across Canada, not what ought to be supported.
-   Implementers are not expected to build applications purely against the Canadian Baseline Profiles but rather against jurisdiction or project-specific IGs derived from it.
-   Defines a set of requirements that all Canadian Implementation Guides should be capable of incorporating.

## Technical Foundation

**Core profiles and extensions:**

-   **Profiles:** AllergyIntolerance, Condition, Device (Implantable & Medical/Non-medical), DiagnosticReport (Laboratory Results & Note), DocumentReference, Encounter, Goal, Immunization, ImmunizationRecommendation, Location, Medication, MedicationAdministration, MedicationDispense, MedicationRequest, MedicationStatement, Observation (General & Laboratory Results), Organization, Patient, Practitioner (General & Registry), PractitionerRole (General & Registry), Procedure, ServiceRequest.
-   **Vital Signs Profiles** (adopted from base FHIR without modification): BMI, BP, BodyHeight, BodyWeight, BodyTemp, HeartRate, OxygenSat, RespRate.
-   **Extensions:** ext-birthsex, ext-estimated, ext-servicelanguage, ext-versioncode, ext-deceased, ext-nofixedaddress, ext-rolestatus, ext-statusreason.

**Notable operations and interactions:**

-   Primarily focused on defining resource structures; operations and interactions are not explicitly defined.

**Key terminology and value sets:**

-   **Code Systems:** SNOMED CT, pCLOCD, CCDD, Canadian URI Registry.
-   **Value Sets:** Health Concern Code, EncounterType, InterventionCodeSubsetOperatingRoomProcedure, QualifiedRoleType, HealthcareProviderRoleType, PractitionerSpecialty, prescriptionmedicinalproduct.

**Significant patterns and constraints:**

-   Lightweight Must Support definition: "Vendors in Canada have the base capability to support the elements, with the expectation that business rules, regulations, etc. can determine what of these elements is used and how."
-   Cardinality and Must Support table defining expectations for query and create/update scenarios.
-   Focus on minimal constraints, aligning with US Core where possible but making adjustments for the Canadian context.
-   Preferred binding strengths for many value sets, allowing flexibility while encouraging standardization.

## Technical Essence

The CA Baseline IG establishes a foundational set of FHIR R4 profiles tailored for the Canadian healthcare landscape, emphasizing minimal constraints and broad applicability across diverse use cases. It leverages US Core as a starting point, adapting profiles like Patient, Observation, and Medication to incorporate Canadian-specific identifiers (e.g., Jurisdictional Health Number via `Patient.identifier`, using `ext-versioncode`), terminologies (e.g., `pCLOCD` for lab observations, `prescriptionmedicinalproduct` for medications), and extensions (e.g., `ext-servicelanguage` for locations and organizations). Profiles enforce minimal cardinality and Must Support requirements, focusing on essential elements like `Patient.birthDate` and `Observation.code`. A unique "lightweight" Must Support definition is employed, indicating basic support capability without prescribing specific client/server actions. Value sets are often bound with "preferred" strength, promoting the use of Canadian standards like `HealthcareProviderRoleType` for `PractitionerRole.code` while allowing flexibility. The IG does not define specific operations but focuses on resource structure, enabling derived IGs to build upon this baseline with stricter conformance rules as needed.

## Implementation Approach

**Critical workflows and interactions:**

-   Derivation of jurisdiction or project-specific implementation guides from the CA Baseline profiles.
-   Alignment of vendor systems to the baseline profiles as a starting point for Canadian implementations.

**Important requirements and guardrails:**

-   Must Support definition requires vendors to have the base capability to support flagged elements.
-   Cardinality constraints define minimum and maximum occurrences of elements.
-   Preferred binding strengths encourage the use of specified value sets.

**Notable design choices and patterns:**

-   Minimal constraints to maximize applicability across different use cases and jurisdictions.
-   Alignment with US Core to reduce developer effort and promote North American interoperability.
-   Use of extensions to socialize emerging Canadian concepts without being overly prescriptive.

## Ecosystem Context

**Target systems and users:**

-   Canadian implementation guide authors.
-   Implementers and vendors developing FHIR-based systems in Canada.
-   Jurisdictional health authorities.

**Relationship to other standards/IGs:**

-   Builds upon US Core, adapting it for the Canadian context.
-   References existing Canadian implementation guides (e.g., eReferral, PPR, PrescribeIT).
-   Aligns with pan-Canadian standards where possible.

**Relevant jurisdictions or programs:**

-   All Canadian provinces and territories.
-   Canada Health Infoway.

**Primary use cases and scenarios:**

-   Foundation for more specific implementation guides.
-   Alignment of vendor systems to a common set of Canadian FHIR requirements.
-   Facilitating interoperability across different jurisdictions and projects.
