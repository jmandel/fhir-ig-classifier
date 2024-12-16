# home-lab-report: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to standardize the way at-home in-vitro test results are reported from digital platforms (like mobile apps) to downstream health systems, including public health agencies. The context is the increasing availability and use of at-home tests, particularly for COVID-19, and the need for a unified method to collect and transmit this data. The IG is for developers of apps and systems that handle at-home test results, as well as public health systems that receive this data.

2.  **How does this IG improve upon previous approaches?** This IG improves upon previous approaches by providing a standardized FHIR-based method for reporting at-home test results. Previously, at-home tests were often reported using HL7 v2 messages or other non-standard methods. The IG leverages existing standards such as US Core profiles and the FHIR standard itself to promote interoperability and ease of development. Additionally, it provides a framework which can be used for multiple condition-specific use cases instead of creating new profiles for each.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   **FHIR-based:** Uses FHIR R4 as the data exchange standard.
    *   **US Core Profiles:** Constrains and extends US Core profiles for resources like `DiagnosticReport`, `Observation`, `Patient`, `Specimen`, and `Organization`.
    *   **Framework Profiles:**  Provides base profiles for use in multiple condition-specific contexts, which reduces the need to create new profiles for each condition.
    *   **Extensions:** Defines custom extensions to capture information like proctoring details and supporting information for test results.
    *   **Message-based:** Defines a `Bundle` resource for packaging test results as messages.
    *   **Mappings:**  Includes mappings to the HL7 v2 standard for backward compatibility.
    *   **LIVD Spreadsheet:** References the CDC's LOINC In Vitro Diagnostic (LIVD) Test Code Mapping for test-specific identifiers.
    *   **Specific Use Case Profiles:** Includes specific profiles for COVID-19 testing as an example of how to use the framework profiles.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG is built on top of the HL7 FHIR standard and the US Core Implementation Guide, ensuring alignment with established healthcare interoperability standards. It references the CDC LIVD codes, which are used for lab test reporting. The IG also addresses the need for standardizing the reporting of at-home in-vitro test results, a rapidly growing area in healthcare.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users are:
    *   **App developers:** Who develop applications that collect and transmit at-home test results.
    *   **Data hubs:** That act as intermediaries to route data between apps and public health agencies.
    *   **Public health agencies:** That receive and use the data for surveillance.
    *   **Healthcare providers:** Who use this information as part of patient care.
    *   **Patients:** Indirectly benefit through improved reporting to health systems and potentially their own healthcare providers.
