# fhir-pacio-functional-status: Analysis

## 1. Objectives and Context

This FHIR Implementation Guide (IG) aims to standardize the exchange of functional status information, particularly for patients transitioning between post-acute care (PAC) settings (e.g., hospitals, skilled nursing facilities, home health) and home- and community-based services (HCBS). It facilitates the sharing of observations related to a patient's mobility, self-care, and domestic life functioning to improve care coordination, reduce redundant data entry, and ultimately enhance patient care.

## 2. Improvements over Previous Approaches

The IG directly addresses a significant gap identified in a 2020 study published in JAMA Network Open, which revealed that only 60% of the time, skilled nursing facilities received crucial observational information about mobility, self-care, and domestic life during patient transitions. By promoting standardized data exchange, this IG seeks to remedy this deficiency.

## 3. Key Features and Technical Approaches

- **FHIR-based Profiles:** The IG defines FHIR profiles for representing functional status observations, collections of observations, narrative history of functional status, and assistive device usage.
- **LOINC and SNOMED CT:** It emphasizes the use of standardized terminologies like LOINC and SNOMED CT for coding assessment questions, answers, and device information.
- **SMART-on-FHIR and OAuth 2.0:** It leverages SMART-on-FHIR and OAuth 2.0 for secure authentication and authorization of data access.
- **US Core Alignment:** The IG aligns with the US Core Implementation Guide, ensuring compatibility with broader US healthcare data exchange practices.

## 4. Relation to Healthcare Standards and Regulations

This IG directly supports the requirements of the Improving Medicare Post-Acute Care Transformation (IMPACT) Act of 2014, which mandates the standardization and interoperability of patient assessment data for PAC settings. It aligns with the Act's objectives of using standardized data elements within CMS assessment instruments (MDS, IRF-PAI, OASIS, FASI) and promoting interoperable data exchange between PAC providers.

## 5. Primary Users and Beneficiaries

- **PAC Providers:** Hospitals, skilled nursing facilities, home health agencies, and HCBS providers benefit from efficient data exchange, reducing administrative burden and supporting care coordination.
- **Patients and Caregivers:** Access to longitudinal functional status information empowers patients and their families to actively participate in care decisions and track progress.
- **Clinicians:**  The IG provides clinicians with a comprehensive view of a patient's functional abilities, enabling them to make informed care decisions.
- **Researchers and Payers:** Standardized data facilitates research and analysis of functional status outcomes, supporting quality improvement initiatives and payment models. 
