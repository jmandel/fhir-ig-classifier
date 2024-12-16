# mycarenet: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to standardize the electronic exchange of agreement-related information for healthcare services within the MyCareNet system in Belgium. The context is the healthcare system where various stakeholders (service providers, insurers, prescribers, and patients) need to communicate about the approval, rejection, or need for more information regarding healthcare service agreements. The objective is to create a common framework to facilitate these communications and make them more efficient.

2.  **How does this IG improve upon previous approaches?**
    The IG provides a structured, standardized approach to agreement flows, which were previously handled via paper or other non-standard electronic methods. It introduces specific codesystems, value sets, profiles, and logical models for different aspects of the agreement process (e.g., types of agreements, error codes, decision values, etc). This standardization is intended to reduce ambiguity and errors in data exchange, and it improves interoperability between different parties in the MyCareNet system.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   **CodeSystems:** Defines controlled vocabularies for various concepts like holder codes (BeCSHolderCode1, BeCSHolderCode2), agreement types (MyCareNetAgreementTypes), annex types (MyCareNetAnnexTypes), decision values (MyCareNetDecisionValues), message events (MyCareNetMessageEvents), refusal values (MyCareNetRefusalValues), waiting for information values (MyCareNetWaitingForInformationValues), and physiotherapy pathology situation codes (NIHDIPhysiotherapyPathologySituationCode).
    *   **ValueSets:** Groups codes from the code systems for specific purposes (e.g., BeVSDecisionValues, BeVSEagreementErrors).
    *   **Logical Models:** Defines structured data models for agreement requests and responses (BeModelEAgreement, BeModelEAgreementResponse).
    *   **Profiles:** Constrains FHIR resources to meet specific MyCareNet requirements (e.g., BeMyCareNetCoverage, BeMyCareNetEagreementClaim, BeMyCareNetEagreementClaimResponse).
    *   **Extensions:** Adds custom data elements to existing FHIR resources (BeExtItemPatientFee, BeExtItemReimbursement, BeExtSystem).
    *   **Search Parameters:** Defines how to search for specific resources (e.g., BeSPClaimResponsePreAuthRef, BeSPClaimResponseSubType).
    *   **ConceptMaps:** Maps between external codes and internal codes(BeCMISOToothSnomedCT).
    *   **Invariants**: Defines rules for data validity (e.g. BeInvCT1CT2, mcn-2).

    The technical approach uses FHIR's resource-based approach, defining profiles for core resources like `Claim`, `ClaimResponse`, `Coverage`, `Bundle`, `MessageHeader`, `OperationOutcome`, `ServiceRequest` and others.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is built upon the FHIR standard, adhering to HL7 specifications. It also incorporates codes from SNOMED CT. It uses data and codes delivered by the NIHDI (Nationaal Intermutualistisch College)/CIN(Collège Intermutualiste National), aligning with Belgian healthcare regulations. The IG also references the official federal FHIR IG published by the eHealth platform.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are healthcare service providers (e.g., physiotherapists, speech therapists), prescribers, and insurance organizations within the Belgian healthcare system. Patients indirectly benefit through faster and more accurate agreement processing, which can reduce delays in receiving care and help with costs. While patients are not direct users of the IG, their data is a key part of the information exchanged.
