# opioid-mme-r4: Analysis

1. **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**
   This IG aims to provide a standardized, shareable implementation of a Morphine Milligram Equivalent (MME) calculator for medications. The context is opioid prescribing and safety, specifically calculating the total daily MME for patients on opioid medications. The goal is to enable consistent and accurate MME calculations across different systems and settings, using configurable conversion factors based on CDC guidance. This helps clinicians assess the overall opioid burden for patients.

2. **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**
   The IG provides configurable conversion factors through CodeSystem supplements, allowing the same calculator logic to be used in different settings and for different purposes. It supports different conversion factor types, such as by dose form and dose range, and also provides hard-coded conversion factors as a fallback. The IG also provides a FHIR profile (`MMEMedicationRequest`) which expresses the expectations for MedicationRequest resources used as input to the MME calculation. It standardizes how to determine the daily dose of a medication from FHIR MedicationRequest resources.

3. **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Configurable conversion factors using CodeSystem supplements with properties for `conversion-factor`, `dose-form-conversion-factor`, and `dose-range-conversion-factor`.
    *   A base MME calculator that processes medication information (RxNorm code, dose quantity, doses per day) to determine daily MME.
    *   A `Prescriptions` function that normalizes data from FHIR MedicationRequest resources for use with the base calculator.
    *   A `MMEMedicationRequest` profile defining the expected elements of MedicationRequest for MME calculation.
    *   Support for different types of dose units (mass, volume, tablets/sprays).
    *   Provision of a clinical conversion factor table based on CDC guidance.
    *   The ability to select conversion factors at run-time by using a `ConversionFactorSupplementName` parameter.
    *   The inclusion of OMTKData to support medication data.

4. **How does this IG relate to broader healthcare standards and regulations?**
   This IG directly relates to the CDC's opioid prescribing guidelines by using their conversion factors. It is based on the FHIR R4 standard and uses RxNorm codes for medication identification. The IG aims to support implementation of clinical decision support related to opioid prescribing. It leverages existing standards to provide a consistent and interoperable solution. The inclusion of a license with additional disclaimers related to healthcare highlight the clinical context.

5. **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
   The primary users are healthcare providers and developers of clinical decision support systems. Specifically, this includes clinicians who prescribe opioids, pharmacists who dispense them, and developers of electronic health records and other healthcare applications that require MME calculations. While not directly users, patients indirectly benefit from increased safety and consistency in opioid prescribing practices that result from the use of this IG.
