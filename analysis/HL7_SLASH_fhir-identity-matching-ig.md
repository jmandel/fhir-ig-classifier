# fhir-identity-matching-ig: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to improve patient matching and digital identity management in healthcare by providing guidance for cross-organizational data exchange. It focuses on using the FHIR $match operation with enhanced constraints to ensure accurate patient identification. The context is interoperability among healthcare organizations and between organizations and patients, addressing the need for reliable patient matching in various workflows.

2.  **How does this IG improve upon previous approaches?**
    This IG improves upon previous approaches by introducing standardized levels of identity assurance (IALs) for attributes used in patient matching, moving beyond a simple reliance on demographics. It defines "Digital Identifiers" with specific requirements for validation, uniqueness, and management. It also introduces weighted values for various patient data elements used in matching, allowing for a more nuanced assessment of match quality. The IG also profiles the FHIR Patient resource to indicate the quality of the data included in a match request, and defines additional requirements for matching when a consumer is the requester.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Profiling the FHIR $match operation (as $IDI-match) with constraints for cross-organizational use.
    *   Defining three levels of IDI-Patient profiles (Base, L0, L1) representing different levels of data quality and required data elements for matching.
    *   Establishing a minimum weight for match input data based on identity assurance levels.
    *   Defining a "Digital Identifier" with strict requirements for uniqueness, validation, and association to a person.
    *   Guidance for identity verification processes, aligned with NIST 800-63A, with specific adaptations for healthcare.
    *   Use of a FHIR Bundle (IDIMatchBundle) for match responses, containing both Patient and Organization resources.
    *   Use of a B2B with User Authorization Extension Object for transactions that include a user.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    The IG builds upon HL7 FHIR standards by profiling existing resources and operations. It aligns with NIST 800-63-3 Digital Identity Guidelines, adapting them for healthcare-specific needs. It also references HIPAA for the context of treatment, payment, and operations and patient right of access, but does not specify conditions for sharing personally identifiable information (PII). It also references UDAP security protocols for B2B transactions.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are:
    *   Healthcare organizations that need to exchange patient data, including hospitals, clinics, and payers.
    *   Identity providers that issue and manage digital identities.
    *   Application developers who create apps that access or share health data.
    *   Patients, who benefit from more accurate matching, leading to better care coordination and access to their health information, and ultimately benefit from a more secure and private way to manage their digital identities.
    *   Authorized Representatives who are acting on behalf of patients
