# ca-baseline: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to establish a baseline set of FHIR profiles, value sets, and code sets for use in Canada to improve interoperability between different Canadian healthcare systems. It addresses the problem of siloed FHIR implementations across different jurisdictions (provinces and territories) by providing a common set of profiles for resources like Patient, Medication, and Observation, thereby reducing the need for vendors to start from scratch for each integration project. It is intended for Canadian implementation guide authors, implementers, standards experts, and vendors.

2.  **How does this IG improve upon previous approaches?** This IG improves upon previous approaches by creating a national set of baseline FHIR profiles. Previously, a lack of such a set led to inconsistent adoption and profiling of FHIR resources across various projects, contexts, and jurisdictions. This inconsistency increased development costs and hindered interoperability. This IG aims to reduce these inconsistencies by providing a common starting point for all Canadian FHIR implementations. It also incorporates constraints from existing Canadian and International implementation guides, relaxing or extending them as necessary for the Canadian context.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   A set of FHIR profiles for various resources (e.g., Patient, AllergyIntolerance, Medication, Observation, Practitioner, etc.) with minimum mandatory elements, extensions, and terminology requirements.
    *   A "Must Support" definition that aims to identify elements expected across the majority of Canadian Implementation Guides, without impeding implementations from tightening the definition for their own use cases.
    *   A maturity level system (FMM) to indicate the stability of artifacts.
    *   A development process involving substreams focused on Entity, Medication, and Clinical profiles, with community reviews and due diligence against existing Canadian FHIR implementations.
    *   Use of Canadian terminologies (e.g., CCDD, PCLOCD).
    *   Adoption of existing FHIR vital signs profiles without modification.
    *   Providing a package file for use with FHIR tools.

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG is intended to align with pan-Canadian standards where possible. It is a stepping stone towards a more formal "Canadian Core" with stricter conformance, potentially enforced through contractual agreements and jurisdictional procurement practices. It references and builds upon international standards like US Core, IPS, and IHE MHD, adapting them for the Canadian context. It also acknowledges the need for security considerations in FHIR transactions and references relevant FHIR security guidelines.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users of this IG are:
    *   **Implementation guide authors:** They can use the profiles as a starting point for their own guides, inheriting constraints and preferred value sets.
    *   **Vendors:** They can align their systems to the baseline profiles, reducing the effort required for each jurisdiction's implementation.
    *   **Implementors:** They can use the profiles as a base for project-specific implementation guides.
    *   **Standards experts:** They can participate in the development and review of the profiles.
    The ultimate beneficiary of improved interoperability is the **patient**, who will benefit from more seamless data exchange and improved care coordination.
