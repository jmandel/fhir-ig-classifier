# carin-bb: Analysis

## 1. Objectives and Context

The CARIN IG for Blue Button® (Consumer Directed Payer Data Exchange) aims to standardize how health plans share patient claims and encounter data with consumer-facing applications. This allows patients to access and manage their healthcare information through third-party apps, promoting transparency and patient empowerment. The IG is designed to meet or exceed the capabilities of CMS Blue Button 2.0, extending its functionality to commercial payers, Medicare Advantage plans, Medicaid, CHIP, and QHPs. 

## 2. Improvements over Previous Approaches

This IG leverages FHIR R4, building upon US Core 3.1.1 and 6.1 profiles.  It introduces "Basis" profiles for EOBs, separating financial data requirements, which benefits other IGs like Da Vinci PDex that may not need financial details. It also aligns with the latest versions of several CodeSystems (e.g., CMS Present on Admission Indicator, ADA Tooth Surface Codes), ensuring consistency with broader healthcare standards.

## 3. Key Features and Technical Approaches

* **FHIR R4 Profiles:** The IG defines profiles for key resources like ExplanationOfBenefit, Patient, Coverage, Practitioner, and Organization, tailoring them for payer data exchange.
* **EOB Specialization:** It includes distinct EOB profiles for Inpatient, Outpatient, Pharmacy, and Professional/NonClinician services, addressing specific data elements for each claim type.
* **Supporting Information:** The `supportingInfo` element is extensively used to capture data not readily represented in the base FHIR resources, accommodating the nuances of payer data.
* **Adjudication Details:** The IG emphasizes capturing comprehensive adjudication information, including network status, payment status, and adjustment reasons, providing transparency into claim processing. 
* **Search Parameters:**  It defines specific search parameters to facilitate efficient retrieval of EOB data based on criteria like service dates, patient, and provider.
* **SMART App Launch:**  The IG leverages the SMART App Launch framework to ensure secure and authorized access to patient data by third-party applications.

## 4. Relation to Healthcare Standards and Regulations

* **HIPAA:**  The IG aligns with HIPAA's Individual Right of Access (45 CFR 164.524), enabling patients to access their health information.
* **CMS Interoperability and Patient Access Final Rule:** The IG directly addresses the requirements of this rule, mandating payers to provide claims and encounter data through APIs.
* **USCDI:**  The IG leverages and extends US Core profiles, incorporating data elements from the United States Core Data for Interoperability (USCDI).
* **NCPDP:** The IG utilizes CodeSystems and data elements from the National Council for Prescription Drug Programs (NCPDP) for pharmacy claims.
* **UB-04:** The IG incorporates data elements and codes from the UB-04 claim form for institutional claims.
* **CMS-1500:** The IG incorporates data elements and codes from the CMS-1500 claim form for professional claims.

## 5. Primary Users and Beneficiaries

* **Patients:** Patients are the primary beneficiaries, gaining access to their claims and encounter data through consumer-friendly applications.
* **Third-Party Application Developers:**  Developers can use the IG to build applications that retrieve and present payer data to patients in a standardized manner.
* **Health Plans:** Payers can use the IG to guide the development of their APIs, ensuring compliance with regulations and interoperability with consumer applications.
* **Researchers and Policymakers:** The standardized data exchange facilitated by the IG can support research and policy analysis in healthcare. 
