# vulcan-rwd: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to define a minimal set of FHIR resources and elements from Electronic Health Records (EHRs) that can be used in a consistent and interoperable way for clinical research purposes, especially for retrospective analysis of existing data. It focuses on real-world data (RWD) from EHRs to support clinical research and regulatory submissions. The intended users are researchers, pharmaceutical companies, and regulatory agencies needing to access and analyze EHR data for research purposes.

2.  **How does this IG improve upon previous approaches?** This IG builds upon the International Patient Access (IPA) project, which provides a baseline dataset and access mechanisms. By creating profiles based on IPA, this IG aims to be more interoperable than regional guides while still being able to be constrained to regional needs. It also defines a minimal set of data elements required for clinical research, focusing on what is necessary for specific research questions, instead of attempting to capture all possible data.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   Defining profiles for resources like `Encounter`, `Procedure`, `MedicationDispense`, `MedicationAdministration`, and `Observation` (Laboratory Results) that are important for RWD but not fully covered by IPA.
    *   Specifying must-support data elements for each profile, ensuring that implementers provide essential data for research use.
    *   Utilizing search parameters to allow for efficient querying of EHR data based on clinical needs.
    *   Focusing on two phases: cohort building based on inclusion/exclusion criteria (though not defining the criteria in FHIR), and then retrieving healthcare data for specific patients.
    *   Providing guidance on handling missing data through the use of Data Absent Reason extensions and exception codes.
    *   Providing a set of example ValueSets for common research terms (e.g., ACS, Crohn's, Diabetes, COVID).

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG is based on the HL7 FHIR standard. It relies on the IPA guide for access and basic resource definitions, while aiming to be interoperable across different regions. It is intended to support the use of real-world data for regulatory submissions, linking to the need for RWE in healthcare decision-making. It also recognizes a relationship with the Vulcan Schedule of Activities project and other projects like FHIR to CDISC and FHIR to OMOP.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users are researchers, pharmaceutical companies, and regulatory agencies. Patients are indirectly beneficiaries by improving the research process and generating Real World Evidence that may improve clinical care and new treatments. This IG does not have a direct patient interaction.
