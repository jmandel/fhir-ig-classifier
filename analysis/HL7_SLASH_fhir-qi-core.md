# fhir-qi-core: Analysis

## 1. Objectives and Context

The QI-Core (Quality Improvement Core) Implementation Guide aims to standardize how healthcare data is represented and exchanged for quality improvement initiatives. It focuses on creating interoperable applications for quality measurement (e.g., evaluating performance on healthcare metrics) and clinical decision support (e.g., providing guidance for best practices). 

**Context:** This IG was developed in the US Realm to harmonize how quality measures and clinical decision support tools access and use healthcare data.

**Target Audience:**  The primary audience includes developers of quality measures, clinical decision support tools, and electronic health record (EHR) systems.

## 2. Improvements Over Previous Approaches

- **Harmonization:** QI-Core leverages the US Core Data for Interoperability (USCDI) and aligns with the FHIR standard, promoting consistency across different systems and reducing the need for custom data mapping.
- **Negation Profiles:**  Introduces standardized profiles for representing negated actions or events (e.g., medication not administered, procedure not done), improving the accuracy of quality measurement and decision support.
- **Simplified Conformance:** Reduces the number of "must support" elements, focusing on those essential for quality improvement use cases, making it easier for systems to conform to the IG.
- **CQL Support:** Provides a model information library specifically for QI-Core, facilitating the use of Clinical Quality Language (CQL) in expressing quality measures and decision support logic.

## 3. Key Features and Technical Approaches

- **FHIR Profiles:** Defines a set of profiles based on FHIR resources, extending and constraining them to meet quality improvement requirements.
- **Extensions:** Introduces QI-Core specific extensions to capture additional data elements needed for quality improvement.
- **Terminology Bindings:**  Standardizes terminology by requiring the use of specific value sets and vocabularies.
- **Negation Rationale Patterns:**  Establishes standardized patterns for representing reasons why actions or events were not performed.
- **CQL Integration:** Provides a ModelInfo library for QI-Core, enabling developers to write CQL expressions that directly reference QI-Core profiles and extensions.

## 4. Relation to Healthcare Standards and Regulations

- **FHIR:** QI-Core is built upon the HL7 FHIR standard, ensuring compatibility with a widely adopted healthcare data exchange standard.
- **US Core:**  Derives from and extends the US Core profiles, aligning with the US Realm's efforts to standardize data for interoperability.
- **USCDI:** Incorporates requirements from the US Core Data for Interoperability, including support for specific data classes and elements.
- **QDM:** Provides a mapping from the Quality Data Model (QDM), a common reference model for electronic clinical quality measures (eCQMs), to QI-Core, facilitating the transition to FHIR-based quality measurement.

## 5. Primary Users and Beneficiaries

- **Measure Developers:** Can use QI-Core to create FHIR-based quality measures that are interoperable and computable.
- **Decision Support Developers:** Can leverage QI-Core to develop standardized clinical decision support tools that integrate seamlessly with EHR systems.
- **EHR Vendors:** Can implement QI-Core profiles to ensure their systems can exchange data for quality improvement purposes.
- **Healthcare Providers:** Benefit from improved quality measurement and decision support, leading to better patient care and outcomes.
- **Patients:** Ultimately benefit from enhanced quality of care and improved health outcomes resulting from the use of QI-Core in quality improvement initiatives. 
