# fetal_records: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The primary challenge this IG addresses is the lack of consistent rules for representing and exchanging data related to a fetus in FHIR. It tackles the ambiguity surrounding which FHIR resource to use for a fetus, how to identify it, and how to relate fetal data to the mother's data.
-   **Key clinical/business problems it solves:** It enables standardized communication of fetal data between systems, facilitating better tracking of fetal development, improved care coordination, and more accurate data collection for research and vital statistics. It also clarifies when to consider the fetus as a separate resource from the mother.
-   **Intended scope and boundaries:** The IG focuses on the ante-natal (prenatal) period, specifically addressing the communication of data when a fetus is involved in the healthcare process. It is out of scope to dictate how fetal data should be stored in systems or to mandate the use of specific terminologies. Legal, religious, or political issues are also explicitly excluded.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **IBCMFetalPatient:** A profile based on the FHIR Patient resource, representing a fetal record. It includes the mandatory `patient-fetalStatus` extension to indicate the status of the fetus.
-   **Notable operations and interactions:** The IG does not define specific operations but focuses on the structure and content of resources exchanged in various scenarios, such as medication requests, result reporting, and data transfer.
-   **Key terminology and value sets:**
    -   `$loinc`: For laboratory and clinical observations.
    -   `$sct` (SNOMED CT): For clinical findings, procedures, and conditions.
    -   `$v2-0203`: For identifier types.
    -   `$v3-RoleCode`: For relationships like "Mother".
    -   `$condition-clinical-code`: For the clinical status of conditions.
    -   `$condition-category`: For categorizing conditions.
    -   `$observation-category`: For categorizing observations.
-   **Significant patterns and constraints:**
    -   The `IBCMFetalPatient` profile mandates the `gender`, `identifier`, and `extension[fetalStatus]` elements.
    -   Invariant `ibcm-pat-1` ensures that `Patient.birthDate` is only present when `patient-bornStatus` is absent or set to 'born'.

## Technical Essence

This IG defines a standardized approach to representing fetal data in FHIR by profiling the `Patient` resource as `IBCMFetalPatient`, distinguished by the mandatory `patient-fetalStatus` extension. It leverages `RelatedPerson` to link the fetus to the mother, using `v3-RoleCode#MTH`. Fetal identifiers are recommended, especially in multiple-fetus scenarios, and can be derived from various methods, including extending the mother's ID or using a pregnancy identifier algorithm. The IG emphasizes relating data to the appropriate subject (mother, fetus, or pregnancy) and provides examples using `Condition`, `Observation`, `DiagnosticReport`, `Procedure`, and `MedicationRequest` resources. `IBCMFetalPatient` is the subject for fetus-specific data, while the mother remains the subject for maternal data. `DiagnosticReport` and `Procedure` resources are used to link observations and procedures to the appropriate subject. The IG uses standard terminologies like LOINC and SNOMED CT for coding clinical concepts.

## Implementation Approach

-   **Critical workflows and interactions:** The IG outlines three primary workflows: medication requests for the fetus, result reporting related to the fetus, and data transfer involving fetal information. These workflows involve interactions between order placers (e.g., EHR systems) and order performers (e.g., ultrasound systems, lab systems).
-   **Important requirements and guardrails:** Systems communicating fetal data must support the `IBCMFetalPatient` profile and the `patient-fetalStatus` extension. Receiving systems should be implemented first to ensure they can process the new FHIR resource before sending systems start using it. A persistent identifier for the fetus is recommended throughout the pregnancy episode.
-   **Notable design choices and patterns:** The choice of extending the `Patient` resource simplifies integration with existing FHIR resources. The use of `RelatedPerson` to link the fetus to the mother provides a clear relationship context. The examples demonstrate how to use standard FHIR resources to represent various clinical scenarios involving the fetus.

## Ecosystem Context

-   **Target systems and users:** The target systems are IT systems used in child health and obstetrics, including EHRs, ultrasound systems, and laboratory systems. The target users are IT developers building these systems and stakeholders involved in providing healthcare to pregnant women and fetuses, such as midwives, obstetricians, neonatologists, and governmental institutions.
-   **Relationship to other standards/IGs:** The IG aligns with the broader FHIR standard and references other relevant IGs, such as the US BFDR (Birth and Fetal Death Reporting) IG.
-   **Relevant jurisdictions or programs:** The IG is designed to be internationally applicable, although it acknowledges that specific data collection requirements may vary by country.
-   **Primary use cases and scenarios:** The IG focuses on three primary use cases: medication requests for the fetus, result reporting related to the fetus, and data transfer involving fetal information. These use cases are illustrated with detailed examples.
