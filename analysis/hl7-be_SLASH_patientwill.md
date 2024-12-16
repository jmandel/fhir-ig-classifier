# patientwill: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**
    This IG aims to define a standardized way to record and exchange patient will directives in Belgium. These directives include things like do-not-resuscitate orders, refusal of specific treatments, and consent for organ donation. The context is Belgian healthcare, and it's intended for use by healthcare providers and potentially patients themselves for recording these wishes.

2.  **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**
    The provided files do not specify previous approaches. Therefore, it's not possible to determine how this IG improves upon them based on the provided information.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Use of FHIR profiles (specifically `BePatientWill`) based on the `Consent` resource.
    *   Definition of specific CodeSystems (`BeCSPatientWillCategory`, `BeCSPatientWillCode`) and ValueSets (`BeVSPatientWillCategory`, `BeVSPatientWillCode`, `BeVSPatientWillScope`) to standardize the recording of patient will categories and specific directives.
    *   Use of extensions (`BeExtSimpleNote`, `BeExtRecorder`) to add additional context.
    *   Constraints on the `Consent` resource, such as the mandatory `category` and `provision.code` elements.
    *   Specific terminology binding to defined ValueSets.
    *   A logical model (`BeModelPatientWill`) that outlines the structure of patient will information.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    *   It uses FHIR, an international standard for healthcare data exchange.
    *   It is designed for use in Belgium, as indicated by the jurisdiction codes, publisher and contact information and includes national identifiers (NISS/BIS).
    *   It references the NIHDI (National Institute for Health and Disability Insurance) which implies alignment with national healthcare policies and requirements.
    *   It uses SNOMED CT for the scope of the patient will.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are healthcare professionals in Belgium who need to record and access patient will directives. Patients are indirect beneficiaries as the IG aims to ensure their wishes are accurately recorded and available to healthcare providers. The logical model also allows for patient or patient representative recording of their wishes.
