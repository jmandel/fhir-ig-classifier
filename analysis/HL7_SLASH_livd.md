# livd: Analysis

## 1. Objectives and Context

This implementation guide (IG) aims to standardize the way in vitro diagnostic (IVD) test results are coded and communicated between IVD devices (like lab analyzers) and Laboratory Information Systems (LIS). It defines a consistent format for IVD manufacturers to publish suggested mappings between their proprietary test codes and standard codes like LOINC and SNOMED CT. This helps laboratories configure their LIS systems more accurately and efficiently, enabling better data exchange and interoperability for analytics and clinical decision support.

## 2. Improvements over Previous Approaches

The IG provides a structured, machine-readable format for IVD test code mappings based on FHIR, improving upon previous ad-hoc approaches that relied on spreadsheets or manual lookups. This facilitates automated processing and integration of mapping data into LIS and other systems.  The IG also includes additional contextual information from manufacturers, like specimen and result descriptions, to aid laboratories in selecting the most appropriate LOINC code.

## 3. Key Features and Technical Approaches

- **FHIR-based:** The IG leverages FHIR resources like Bundle, Composition, DeviceDefinition, ObservationDefinition, ConceptMap, ValueSet, and CodeSystem to represent LIVD data.
- **Profiles:**  Specific profiles are defined to constrain and guide the use of these FHIR resources for LIVD purposes.
- **Mapping Guidance:** The IG includes mechanisms to represent mappings between vendor-specific codes and standard codes, along with contextual information to aid in mapping selection.
- **Offline Capability:** By embedding relevant LOINC and SNOMED CT fragments, the IG allows offline mapping without requiring access to external terminology services.

## 4. Relation to Healthcare Standards and Regulations

- **LOINC:** The IG strongly promotes the use of LOINC for coding IVD test results, aligning with recommendations from organizations like the Office of the National Coordinator for Health Information Technology (ONC) in the US.
- **SNOMED CT:** The IG also supports the use of SNOMED CT for coding non-quantitative result values, recognizing its importance in certain contexts.
- **CLIA:** While not directly addressing CLIA regulations, the IG facilitates standardized coding practices that can contribute to better compliance.

## 5. Primary Users and Beneficiaries

- **IVD Manufacturers:** They use the IG to create and publish standardized LIVD catalogs.
- **Laboratories:** They benefit from easier and more accurate LIS configuration, leading to improved data quality and interoperability.
- **LIS Vendors:** They can implement support for the LIVD format, streamlining integration with IVD devices.
- **Patients:**  Standardized coding improves data accuracy and consistency, ultimately contributing to better patient care through improved analytics and decision support.
