# fhir-pacio-rt: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to structure and organize long-term post-acute care (PAC) admissions into smaller, more manageable blocks of time called "re-assessment timepoints." This is in the context of settings like skilled nursing facilities (SNFs) and home health agencies (HHAs), where patient encounters can span months or years, and where care evolves significantly over time. It's intended to help both providers and other stakeholders more easily navigate and understand the progression of care during these extended admissions.

2.  **How does this IG improve upon previous approaches?** Previous approaches lack a FHIR structure to break down long PAC admissions into meaningful sub-units reflecting changes in care. This IG introduces a new structure, ReassessmentTimepointsEncounter, that allows for the segmentation of long encounters based on payer or regulatory requirements, or internal processes. It enables linking clinical data (e.g., functional status, cognitive assessments) to specific time periods, improving the ability to track care changes over time, which was not previously possible.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   Defining a new `ReassessmentTimepointsEncounter` profile based on the US Core Encounter Profile.
    *   Using `ClinicalImpression` resources to link clinical data (observations) to specific timepoints.
    *   Defining new CodeSystems and ValueSets to classify timepoints by entity type, service type, and status.
    *   Using extensions to link the timepoints to specific assessment results and other relevant resources
    *   Specifying search parameters to support querying for timepoints based on parent encounters, patients, dates, and status.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG builds upon the HL7 FHIR R4 standard and the US Core Implementation Guide. It incorporates concepts from existing assessment instruments like MDS and OASIS, which are used in Medicare-regulated post-acute care settings. It also defines code systems that align with existing terminology such as LOINC and SNOMED. The IG also addresses security and privacy concerns related to the exchange of patient data.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users are:
    *   Architects and developers of healthcare IT systems in the US that exchange clinical data in post-acute care settings.
    *   Business analysts and policy managers who need to understand FHIR profiles.
    *   Quality reporting agencies, standards development organizations, payers, and providers who need to access and use clinical data from post-acute care settings.
    *   Patients may indirectly benefit through improved data accessibility for their care providers, but there is no direct patient-facing functionality described in the IG.
