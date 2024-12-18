# dental-data-exchange: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG) addresses the lack of a standardized method for exchanging discrete dental observations between dental providers and between medical and dental providers. It aims to solve the problem of limited interoperability between dental and medical Electronic Health Record (EHR) systems, which hinders care coordination and whole-person care. The IG focuses on enabling bi-directional exchange of dental information, specifically for dental referral and consultation notes. It defines a data model, data items, and corresponding code and value sets to facilitate this exchange. The scope is bounded by the requirements developed by the Dental Summary Exchange Project of the HL7 Payer/Provider Information Exchange Work Group (PIE WG) and is specific to the US Realm.

## Technical Foundation

The technical foundation of this IG rests on FHIR Release 4 and leverages several existing profiles and standards:

-   **Core Profiles:**
    -   Dental Bundle
    -   Dental Referral Note (based on C-CDA on FHIR Referral Note)
    -   Dental Service Request
    -   Dental Consult Note (based on C-CDA on FHIR Consultation Note)
    -   Dental Condition (derived from US Core Condition)
    -   Dental Finding (derived from US Core Observation)
    -   Dental Communication
    -   Dental Procedure (derived from US Core Procedure)
-   **Extensions:** No new extensions are defined.
-   **Operations and Interactions:** The IG supports RESTful API and Document Bundle paradigms.
-   **Key Terminology and Value Sets:**
    -   Dental Reason For Referral
    -   Dental Observation Codes ValueSet
    -   Dental Anatomy
    -   Oral Cavity Area ValueSet
    -   Tooth Identification ValueSet
    -   Dental Category
    -   SNODENT (Systematized Nomenclature of Dentistry)
    -   CDT (Current Dental Terminology)
    -   SNOMED CT
    -   LOINC
    -   ICD-10-CM
-   **Significant Patterns and Constraints:** The IG emphasizes the distinction between medical and dental problems, recommending the use of the Dental Condition profile for dental-specific diagnoses and the US Core Condition profile for conditions relevant to medical providers. It also provides guidance on incorporating SNODENT concepts alongside SNOMED CT and ICD-10, using CDT and CPT for planned procedures and encounters, and handling dental images as results.

## Technical Essence

This IG defines a FHIR-based framework for dental data exchange centered around Dental Referral Note and Dental Consult Note document bundles, both derived from their C-CDA on FHIR counterparts. It introduces specialized profiles: Dental Condition, extending US Core Condition to capture dental-specific diagnoses using SNODENT codes alongside SNOMED CT, and Dental Finding, extending US Core Observation for dental measurements and assessments. The Dental Service Request profile details planned dental procedures, preferably using CDT codes. The IG mandates the inclusion of a globally unique referral identifier within the Dental Consult Note, referencing the original ServiceRequest for correlation. Implementers must support all MustSupport elements and handle missing data according to US Core guidelines. Dental observations are categorized as either relevant to medical providers (using US Core Condition) or specific to dental care (using Dental Condition and Dental Finding within the Dental Finding section).

## Implementation Approach

The IG is designed to be implemented by medical and dental health record systems, medical and dental providers, and payer systems in the US Realm.

-   **Critical Workflows:** The IG supports four primary workflows: Medical to Dental Referral, Dental to Medical Consultation, Dental to Dental Referral, and Dental to Dental Consultation.
-   **Requirements and Guardrails:** Implementers must have FHIR implemented for US Core and C-CDA. Sending systems must populate all MustSupport elements if the information exists, and receiving systems must be able to process resource instances without errors, even with missing data.
-   **Design Choices and Patterns:** The IG distinguishes between prior work (US Core Procedure with status 'completed') and current procedures. It recommends conveying dental caries risk assessments in the US Core Condition or Dental Condition profile and patient self-management goals in the US Core Goal profile.

## Ecosystem Context

-   **Target Systems and Users:** The primary target systems are medical and dental EHRs and EDRs, and the users are medical and dental providers, as well as payer systems.
-   **Relationship to Other Standards/IGs:** This IG builds upon US Core, C-CDA on FHIR, Da Vinci HRex, and ODH profiles. It also references ANS/ADA Specification Number 1084 and is informed by the MORE Care initiative.
-   **Relevant Jurisdictions or Programs:** The IG is specific to the US Realm and is relevant to programs focused on dental-medical integration and value-based care.
-   **Primary Use Cases and Scenarios:** The four use cases (Medical to Dental Referral, Dental to Medical Consult, Dental to Dental Referral, and Dental to Dental Consult) represent common dental information exchange patterns, including referrals between primary care and dental providers, referrals between general dentists and specialists, and the exchange of consultation notes.
