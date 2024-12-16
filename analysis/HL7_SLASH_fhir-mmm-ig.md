# fhir-mmm-ig: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to standardize the way maternal and child health data is captured, exchanged, and analyzed for research purposes. It provides a framework for researchers to aggregate, calculate, and analyze clinical information of research populations to explore the root causes of maternal and child morbidity and mortality. The context is the lack of standardized, interoperable data exchange for maternal and child health, which hinders research efforts. The primary target audience is maternal health researchers.

2.  **How does this IG improve upon previous approaches?**
    The IG addresses the issue of disparate, unconnected records by defining a standardized model to support data exchange. It uses Clinical Quality Language (CQL) expressions to capture clinical data based on population study cohort criteria. It also establishes linkages between maternal and child records via the US Core Related Person profile and Vital Records Common Profiles, which enables longitudinal tracking of health outcomes for both mother and child.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Use of FHIR's Clinical Quality Framework (CQF) and measure model.
    *   Definition of peri-natal populations of interest (POI) using CQL.
    *   Focus on longitudinal maternal care (antepartum, intrapartum, and postpartum).
    *   Linkage of maternal and child records using FHIR's Patient and RelatedPerson resources.
    *   Support for US Core profiles and Vital Records Common Profiles.
    *   Specification of data flows for measure evaluation, data aggregation, and reporting.
    *   Adoption of MustSupport rules for data elements.
    *   Reliance on the $evaluate-measure operation to calculate measure reports.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG builds upon existing HL7 FHIR standards, including US Core, Vital Records Common Profiles, and the Clinical Reasoning Module. It also relates to standards such as C-CDA and IHE. It acknowledges the importance of HIPAA and the Common Rule, although it does not provide guidance on these regulations directly, and expects implementers to adhere to all applicable laws and policies. It also relates to the SANER implementation guide, adapting some of its components for maternal health research.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are:
    *   Maternal health researchers
    *   EHR vendors, developers of software tooling for researchers, and associated information management systems
    *   Public health departments using EHR data to inform interventions.

    The beneficiaries are:
    *   Maternal health researchers who gain access to standardized data to conduct research.
    *   Potentially, patients, through improved understanding of maternal and child health, leading to better care and outcomes.
