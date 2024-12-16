# fhir-medication-rems-ig: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to improve the process of prescribing and dispensing medications that have a Risk Evaluation and Mitigation Strategy (REMS) by streamlining information exchange between healthcare providers and REMS administrators. The context is the electronic prescribing workflow, where providers need to fulfill REMS requirements before a patient can receive a medication. The IG aims to ensure safe medication use, reduce delays, and minimize manual data entry.

2.  **How does this IG improve upon previous approaches?** This IG improves upon previous approaches by standardizing the electronic exchange of REMS-related information using FHIR, CDS Hooks, and SMART App Launch. This includes:
    *   Automating the notification of REMS requirements to providers early in the ordering process.
    *   Reducing manual data entry by leveraging data from the patient's electronic health record.
    *   Capturing REMS participation information in the Provider System.
    *   Enabling the completion of REMS steps before the order is sent to the pharmacy.
    *   Including relevant REMS information in the electronic prescription (NCPDP SCRIPT).

3.  **What are the key features and technical approaches of this IG?** Key features and technical approaches include:
    *   Using CDS Hooks to initiate interactions between Provider Systems (e.g., EHRs) and REMS Administrator Systems at relevant workflow points.
    *   Leveraging SMART App Launch to enable providers to interact with REMS Administrator applications for tasks like enrollment and education.
    *   Defining a Task profile (`MedicationRemsTaskSmartLaunch`) for deferred SMART app launches.
    *   Specifying the use of FHIR resources like `Patient`, `Practitioner`, `MedicationRequest`, `Medication`, and `DocumentReference`.
    *   Providing guidance on the content of CDS Hooks response Cards, including the inclusion of SMART app links and deferred actions.
    *   Prefetching FHIR resources in CDS Hooks requests to provide context to the REMS Administrator.
    *   Recommending the use of US Core profiles.
    *   Specifying the use of LOINC code `51851-4` for `DocumentReference.type`.
    *   Providing guidance on security and patient privacy.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG relies on and builds upon existing healthcare standards and regulations, including:
    *   CDS Hooks 2.0 for triggering interactions.
    *   SMART on FHIR 2.1 for secure app launch.
    *   FHIR R4 as the base data exchange standard.
    *   US Core profiles for standardized resource representations.
    *   NCPDP SCRIPT standard for electronic prescriptions.
    *   FHIR Security principles and privacy considerations.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users and beneficiaries of this IG are:
    *   **Prescribers:** The IG aims to streamline their workflow, reduce manual data entry, and ensure they fulfill REMS requirements, thus enabling quicker and safer access to REMS drugs for their patients.
    *   **REMS Administrators:** The IG provides a standardized way to interact with provider systems, collect necessary information, and manage REMS programs more efficiently.
    *   **Patients:** The IG intends to reduce prescription fulfillment delays and ensure safe medication use, ultimately benefitting patient access to their medications.
    *  **Pharmacists:** While not the primary focus, the IG's approach to including REMS information in prescriptions and ensuring REMS steps are completed prior to dispensing will reduce their workload.
