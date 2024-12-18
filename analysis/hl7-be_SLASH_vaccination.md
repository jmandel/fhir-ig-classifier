# vaccination: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the exchange of vaccination information within the Belgian healthcare system. It focuses on representing vaccination events, including details about the administered product, patient, provider, and related clinical context.
-   **Key clinical/business problems it solves:** The IG aims to improve the accuracy, completeness, and accessibility of vaccination records, supporting public health surveillance, clinical decision-making, and patient care coordination. It facilitates the exchange of vaccination data between various healthcare providers and systems, including regional child care agencies, hospitals, and general practitioners.
-   **Intended scope and boundaries:** The scope is limited to vaccination events within Belgium. It defines how to represent a vaccination event, including the product administered, patient demographics, provider information, and relevant clinical observations. It does not cover broader immunization management processes, such as scheduling or inventory management, beyond what is necessary to document a vaccination event.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **BeVaccination:** The core profile, based on the FHIR Immunization resource, defines constraints and extensions specific to Belgian vaccination reporting. Key elements include status, statusReason, vaccineCode, occurrenceDateTime, recorded, encounter, route, doseQuantity, identifier, patient, performer, and site.
    -   **BeAdministeredProduct:** An extension to capture details of the administered product, including a reference to a Medication resource or a coded representation, lot number, and expiration date.
    -   **BeVaccinationConfirmationStatus:** An extension to indicate the certainty or reliability of the vaccination information (e.g., confirmed, unconfirmed).
    -   **BeVaccinationOriginalOrder:** An extension to link the vaccination event to a related order or recommendation (e.g., MedicationRequest, CarePlan).
    -   **BeVaccinationStockFundingOrganization:** An extension to capture the organization funding the vaccine product.
    -   **BeVaccinationStockLocation:** An extension to capture the location where the vaccine product was dispensed from.
    -   **BeExtRecorder:** An extension to capture the professional that recorded the administration of the vaccine.
    -   **BeExtSimpleNote:** An extension to add a simple note to the Immunization resource.
-   **Notable operations and interactions:** The IG primarily focuses on the creation and retrieval of BeVaccination resources. It does not define specific operations or interactions beyond standard FHIR resource operations.
-   **Key terminology and value sets:**
    -   **BeVSCareLocation:** Defines codes for the location where the vaccination was administered (e.g., hospital, patient home, nursing home).
    -   **BeVSVaccinationBodySite:** Specifies body sites for vaccine administration using SNOMED CT codes.
    -   **BeVSVaccinationConfirmationStatus:** Defines codes to represent the confirmation status of the vaccination record.
    -   **BeVSVaccinationProduct:** A placeholder for future specification of vaccination product codes.
    -   **BeVSVaccinationReasonCode:** Defines codes for the reason for vaccination, including pre- or post-exposure prophylaxis.
    -   **BeVSVaccinationStatusReason:** Defines codes for the reason why a vaccination was not performed (e.g., medical precaution, out of stock).
    -   **BeVSVaccineAdministrationRoute:** Specifies routes of vaccine administration (e.g., intramuscular, subcutaneous).
    -   **BeVSVaccineCode:** Defines codes for types of vaccines administered in Belgium, including SNOMED CT codes and a generic "other" code.
    -   **BeVSVaccineTargetDisease:** A placeholder for future specification of codes for diseases targeted by vaccines.
-   **Significant patterns and constraints:**
    -   The BeVaccination profile mandates the use of specific extensions (e.g., BeAdministeredProduct, BeVaccinationConfirmationStatus) and value sets.
    -   It includes invariants to ensure data quality, such as requiring a vaccine code text if the code is "other" and validating the use of specific code systems for product codes and reaction details.
    -   The IG emphasizes the use of identifiers for patients, providers, and vaccination records.
    -   It requires the use of the BePatient, BePractitioner, BeOrganization, and BePractitionerRole profiles for related resources.

## Technical Essence

This IG defines a constrained BeVaccination profile, extending the core FHIR Immunization resource to capture Belgian-specific vaccination data. Each BeVaccination instance must include a status, vaccineCode (from BeVSVaccineCode), occurrenceDateTime, recorded date, and a patient (BePatient). The BeAdministeredProduct extension details the product, either via a Medication reference or a code from a Belgian code system (CNK, CTI Extended, or ATC), along with an optional lot number and expiration date. The BeVaccinationConfirmationStatus extension indicates the record's reliability. The performer (BePractitioner, BeOrganization, or BePractitionerRole) and optional encounter are linked. The route (BeVSVaccineAdministrationRoute) and site (BeVSVaccinationBodySite with optional BeExtLaterality) are specified. StatusReason (BeVSVaccinationStatusReason) explains non-completion. Invariants enforce data consistency, such as requiring vaccineCode text for "other" codes and validating product code systems. The IG leverages extensions like BeVaccinationOriginalOrder, BeVaccinationStockFundingOrganization, and BeVaccinationStockLocation for additional context.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves creating BeVaccination resources to document vaccination events. This includes capturing patient demographics, provider information, vaccine details, and relevant clinical observations. Retrieval of existing BeVaccination resources is also crucial for accessing vaccination history.
-   **Important requirements and guardrails:** Implementers must adhere to the constraints defined in the BeVaccination profile and use the specified extensions and value sets. They must ensure data quality by validating against the defined invariants. The use of identifiers for patients, providers, and vaccination records is essential for data linkage and interoperability.
-   **Notable design choices and patterns:** The IG leverages extensions to capture Belgian-specific data elements not present in the base Immunization resource. It uses a combination of coded values and references to other resources (e.g., Medication, Location) to represent vaccination details. The use of invariants ensures data consistency and enforces specific coding requirements.

## Ecosystem Context

-   **Target systems and users:** The target systems include electronic health record (EHR) systems, immunization registries, public health systems, and other healthcare applications used by healthcare providers, public health agencies, and patients in Belgium.
-   **Relationship to other standards/IGs:** This IG builds upon the core FHIR specification and may interoperate with other IGs that utilize the Immunization resource. It is specifically designed for the Belgian context and references Belgian-specific code systems and naming systems.
-   **Relevant jurisdictions or programs:** This IG is relevant to the Belgian healthcare system and is intended for use within Belgium.
-   **Primary use cases and scenarios:**
    -   Recording a vaccination event in an EHR system.
    -   Exchanging vaccination records between healthcare providers.
    -   Reporting vaccination data to public health agencies.
    -   Retrieving a patient's vaccination history for clinical decision-making.
    -   Supporting public health surveillance and monitoring of vaccination coverage.
    -   Facilitating patient access to their vaccination records.
    -   Documenting the location of vaccination using an Encounter resource with either the serviceProvider or location.location.type fields.
    -   Indicating pre- or postexposure prophylaxis using the reasonCode field.
