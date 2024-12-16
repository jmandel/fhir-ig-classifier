# fhir-ipa: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG, the International Patient Access (IPA) API specification, aims to enable applications acting on behalf of patients to access their health information from clinical record systems using a FHIR R4 based API. The context is a global need for patients to have secure and reliable access to their health data, regardless of the specific healthcare provider or system. The goal is to establish a minimal set of access methods and content rules applicable worldwide.

2.  **How does this IG improve upon previous approaches?**
    This IG establishes a standard for RESTful access to patient records using modern authorization standards, specifically SMART App Launch, and defines a set of minimal expectations regarding the content. It contrasts with the International Patient Summary (IPS), which focuses on the content of a clinical summary document. IPA provides a mechanism for accessing a full record, whereas IPS defines a summary document. IPA also emphasizes that a client should be able to access a full record, rather than just a summary of one.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Use of FHIR R4 resources and RESTful API interactions.
    *   Mandatory use of SMART App Launch for secure access.
    *   Profiles for core clinical resources (Patient, Condition, Medication, Immunization, AllergyIntolerance, Observation, DocumentReference).
    *   Defined "Must Support" elements with explicit obligations for servers and clients.
    *   Guidance on handling missing data using DataAbsentReason extensions.
    *   Support for searching patient data, including required and recommended parameters.
    *   Support for the [$docref operation](OperationDefinition-docref.html) to retrieve patient documents.
    *   Emphasis on JSON as the primary exchange format.
    *   Support for `Patient.link` for linked patient records.
    *   Defines two actors: IPA Server and IPA Client.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    The IG builds upon the FHIR standard and relies on the SMART App Launch specification, which profiles OAuth 2.0. It acknowledges that national specifications will likely build upon or refine the profiles in this IG to meet local laws, regulations, and practices. It also recognizes the relationship with the International Patient Summary (IPS) standard, noting that IPA content rules are generally a subset of IPS rules.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are:
    *   Patients, who can use applications to access their health data from different providers.
    *   Developers of patient-facing applications who need a standard for accessing patient records.
    *   Implementers of clinical record systems who need to expose their data via a standard API.
    *   National specification authors who can refine this base specification to meet jurisdictional requirements.
    *   Payers and other users who need access to patient data.
