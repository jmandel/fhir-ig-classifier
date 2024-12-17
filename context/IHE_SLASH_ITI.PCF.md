File: repos/IHE_SLASH_ITI.PCF/sushi-config.yaml

# sushi-config.yaml is documented https://fshschool.org/docs/sushi/configuration/
# ───────────────────────────────────────────────────
id: ihe.iti.pcf
canonical: https://profiles.ihe.net/ITI/PCF
version: 1.1.1-current
name: IHE_ITI_PCF
title: "Privacy Consent on FHIR (PCF)"
description: The Privacy Consent on FHIR (PCF) Profile provides support for patient privacy consents and access control where a FHIR API is used to access Document Sharing Health Information Exchanges.
releaseLabel: ci-build
#releaseLabel: ballot
#releaseLabel: Trial-Implementation
#date: 2024-02-23
status: active
publisher:
  - name: IHE IT Infrastructure Technical Committee
  - url: https://www.ihe.net/ihe_domains/it_infrastructure/
  - email: iti@ihe.net
contact:
  - name: IHE IT Infrastructure Technical Committee
    telecom:
      - system: email
        value: iti@ihe.net
license:  CC-BY-4.0
# using R4B as the consent resource had a technical correction to eliminate a build error
fhirVersion: 4.0.1
#fhirVersion: 4.3.0
jurisdiction: 'http://unstats.un.org/unsd/methods/m49/m49.htm#001'
#copyright: IHE http://www.ihe.net/Governance/#Intellectual_Property
copyrightYear: 2023+
extension:
  - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-uri
    extension:
      - url: uri
        valueUri: https://profiles.ihe.net/ITI/PCF/Policy-basic-normal
      - url: target
        valueUrl: volume-1.html
      - url: use
        valueString: "Permit for clinicians that have authorization for Treatment use, but does not authorize other access. This presumes that basic user access control can differentiate legitimate clinical users and purposes of use."
  - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-uri
    extension:
      - url: uri
        valueUri: https://profiles.ihe.net/ITI/PCF/Policy-all-normal
      - url: target
        valueUrl: volume-1.html
      - url: use
        valueString: "Permit for all authorized uses. This presumes that basic user access control will only allow authorized users and purposes of use."
  - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-uri
    extension:
      - url: uri
        valueUri: https://profiles.ihe.net/ITI/PCF/Policy-break-glass-only
      - url: target
        valueUrl: volume-1.html
      - url: use
        valueString: "Deny for all use, except when the user is a clinician with authorization to declare a medical patient-safety override (a.k.a. Break-Glass)."
  - url: http://hl7.org/fhir/tools/StructureDefinition/implementationguide-resource-uri
    extension:
      - url: uri
        valueUri: https://profiles.ihe.net/ITI/PCF/Policy-deny
      - url: target
        valueUrl: volume-1.html
      - url: use
        valueString: "Deny all."

dependencies:
  us.nlm.vsac: 
    version: 0.9.0
    uri: http://fhir.org/packages/us.nlm.vsac/ImplementationGuide/us.nlm.vsac
  ihe.iti.balp:
    id: iheitibasicaudit
    uri: https://profiles.ihe.net/ITI/BALP/ImplementationGuide/ihe.iti.balp
    version: 1.1.x

parameters:  # see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
  path-resource:
    - input/resources
    - fsh-generated/resources
    - input/examples
  show-inherited-invariants: 'false'
  usage-stats-opt-out: 'false'
  logging: progress
  shownav: 'true'
  active-tables: 'false'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'
  path-binary: input/binary
  excludettl: 'true'

resources:
  # These SLS valueSets are examples, and should not be part of the normative resources.
  ValueSet/SlsSensitivePSY:
    exampleBoolean: true
  ValueSet/SlsSensitiveETH:
    exampleBoolean: true
  ValueSet/SlsSensitiveETHUD:
    exampleBoolean: true
  ValueSet/SlsSensitiveOPIOIDUD:
    exampleBoolean: true
  ValueSet/SlsSensitiveSDV:
    exampleBoolean: true
  ValueSet/SlsSensitiveHIV:
    exampleBoolean: true

groups:
  BasicConsent:
    name: Explicit Basic Consent
    description: Artifacts related to [Explicit Basic option](volume-1.html#15322-explicit-basic-option)
    resources:
#      - StructureDefinition/IHE.PCF.consentFoundation
      - StructureDefinition/IHE.PCF.consentBasic
      - ValueSet/BasicPurposeVS
      - Consent/ex-consent-basic-ink
      - Consent/ex-consent-basic-treat
      - Consent/ex-consent-expired-treat
      - Consent/ex-consent-basic-reject
      - Consent/ex-consent-basic-research
      - Consent/ex-consent-basic-treat-infant
      - DocumentReference/ex-documentreference
      - DocumentReference/ex-consent-ink
      - Binary/B-ink
      - Organization/ex-organization
      - Patient/ex-patient
      - Practitioner/ex-clerk
      - Provenance/ex-provenance-consent-basic-treat
      - Provenance/ex-provenance2-consent-basic-treat
  IntermediateConsent:
    name: Explicit Intermediate Consent
    description: Artifacts related to [Explicit Intermediate](volume-1.html#15323-explicit-intermediate-options) option
    resources:
      - StructureDefinition/IHE.PCF.consentIntermediate
      - Consent/ex-consent-intermediate-timeframe
      - Consent/ex-consent-intermediate-not-timeframe
      - Consent/ex-consent-intermediate-authoredby
      - Consent/ex-consent-intermediate-not-authoredby
      - Consent/ex-consent-intermediate-encounter
      - Consent/ex-consent-intermediate-not-encounter
      - Consent/ex-consent-intermediate-data
      - Consent/ex-consent-intermediate-not-data
      - Consent/ex-consent-intermediate-purpose
      - Consent/ex-dissent-intermediate-break-glass
      - Encounter/ex-encounter
      - Practitioner/ex-practitioner
      - Group/ex-privilegedUsers
      - Organization/ex-org-researcher
  AdvancedConsent:
    name: Explicit Advanced Consent
    description: Artifacts related to [Explicit Advanced](volume-1.html#15324-explicit-advanced-option) option
    resources:
      - StructureDefinition/IHE.PCF.consentAdvanced
      - ValueSet/AdvancedSecurityTagVS
      - Consent/ex-consent-advanced-normal
      - Consent/ex-consent-advanced-normal-restricted
      - Consent/ex-consent-advanced-normal-not-restricted
      - Consent/ex-consent-advanced-normal-focused-restricted
      - Consent/ex-consent-advanced-normal-focused-psy
      - Consent/ex-consent-advanced-normal-focused-psy-or-sdv
      - Consent/ex-consent-advanced-normal-break-glass-restricted
  SLS:
    name: Security Labeling Service resources
    description: Artifacts to support a [Security Labeling Service (SLS)](ch-P.html#SLS)
    resources:
      - ValueSet/SlsSensitivePSY
      - ValueSet/SlsSensitiveETH
      - ValueSet/SlsSensitiveETHUD
      - ValueSet/SlsSensitiveOPIOIDUD
      - ValueSet/SlsSensitiveSDV
      - ValueSet/SlsSensitiveHIV
      - Observation/ex-alcoholUse
      - Observation/ex-bloodSugar
      - Observation/ex-bloodPressure
      - Observation/ex-weight
      - Observation/ex-weight-2




pages:
# itemize here each narrative page. Include assigned section numbers when appropriate
  index.md:
    title: "Privacy Consent on FHIR (PCF) Home"
    generation: markdown
  volume-1.md:
    title: "1:53 Privacy Consent on FHIR"
    generation: markdown
  ch-P.md:
    title: "1:Appendix P: Privacy Access Policies (Informative)"
    generation: markdown
  ITI-108.md:
    title: "2:3.108 Access Consent [ITI-108]"
    generation: markdown
  content.md:
    title: "3:5.8 Privacy Consent Patterns"
    generation: markdown
  other.md:
    title: "Changes to Other IHE Specifications"
    generation: markdown
  download.md:
    title: "Download and Analysis"
    generation: markdown
  testplan.md:
    title: "Test Plan"
    generation: markdown
  issues.md:
    title: "Significant Changes & Issues"
    generation: markdown
    
menu:
  PCF Home: index.html
  Volume 1:
    "Introduction" : volume-1.html
    "Actors and Transactions" : volume-1.html#actors-and-transactions
    "Actor Options" : volume-1.html#actor-options
    "Required Groupings" : volume-1.html#required-groupings
    "Overview" : volume-1.html#overview
    "Security Considerations" : volume-1.html#security-considerations
    "Cross-Profile Considerations" : volume-1.html#other-grouping
    "Appendix P: Privacy Access Policies" : ch-P.html
  Volume 2:
    "Access Consent [ITI-108]" : ITI-108.html
  Volume 3:
    "Consent Patterns" : content.html
  Artifacts: artifacts.html
  Other: 
    "Changes to Other IHE Specifications" : other.html
    "Updates to ITI-71" : other.html#updates-to-iti-71
    "Download and Analysis" : download.html
    "Test Plan" : testplan.html




---

// File: input/pagecontent/ch-P.md


|------------------------------------------------|
| Editor, replace existing Volume 1 Appendix P with the following.<br/>This appendix exists in the Final Text Technical Framework but only covers BPPC. This version expands on the scope and updates the details. |
{:.grid .bg-info}

Privacy policies are an important part of an organization's overall risk management strategy. They help to protect the organization from potential legal liability, as well as from reputational damage. Privacy policies should be aligned with other policies within the organization, such as data security policies, employee training policies, and incident response plans.

Privacy policies should be reviewed and updated regularly to ensure that they reflect the latest legal and regulatory requirements. They should also be communicated to employees and customers in a clear and concise way.

Here are some of the other policies within an organization that privacy policies relate to:

- Data security policies: Data security policies outline the steps that an organization will take to protect its data from unauthorized access, use, disclosure, disruption, modification, or destruction. Privacy policies should be aligned with data security policies to ensure that the organization is taking all necessary steps to protect the privacy of its customers' data.
- Employee training policies: Employee training policies outline the training that employees will receive on topics such as data privacy, security, and compliance. Privacy policies should be included in employee training programs to ensure that employees are aware of the organization's privacy practices and how to comply with them.
- Incident response plans: Incident response plans outline the steps that an organization will take in the event of a data breach or other security incident. Privacy policies should be included in incident response plans to ensure that the organization is prepared to respond to a privacy incident in a timely and effective manner.

This appendix provides information about Privacy Policies and when consent could be automated and consequently when the BPPC, APPC, or PCF Profiles could be used. 

**Concepts** (this set of concepts is a non-exhaustive subset of terms relevant to Privacy Consent and the definitions given here have been simplified for that scope.):

- **Trust Domain** - Systems and entities that are trusted due to membership in a domain, where this membership includes agreement with the policies of the trust domain. A Trust Domain often spans multiple domains, such as a Health Information Exchange or a Federation of Health Information Domains. An example is the [XDS Affinity Domain](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) or the [XCA Community](https://profiles.ihe.net/ITI/TF/Volume1/ch-18.html).
- **Patient Privacy Policy Domain** - The domain (Trust Domain) for which a Patient Privacy Policy applies. The Patient Privacy Policy Domain may cover an Organization, Health Information Exchange or a defined set of Communities. The Patient Privacy Policy Domain is a Trust Domain.
- **Domain Privacy Policy** / **Overarching Policy** - Defines acceptable use of private data within the domain. The overarching policy are defined and enforced in the broader context of a law, regulation, or organizational policy that defines the scope, authority, and limitations. Within the Domain Privacy Policy will be a set of Patient Privacy Policies, that are used at the Privacy Consent level. The Domain Privacy Policy is responsible for defining users, roles, classifications, and the possible parameters the patient will be offered during the Privacy Consent Ceremony. The Domain Privacy Policy must address the appropriate use of data when no Consent has been captured, how conflicting policies are to be resolved, and when a restriction may cause a patient or operator safety concern (e.g., Break-Glass).
- **Patient Privacy Policy** - A Patient Privacy Policy explains appropriate use of data/documents in a way that provides choices to the patient. The Patient Privacy Policy sits within the Domain Privacy Policy. A Patient Privacy Policy will identify who has access to information, and what information is governed by the policy (e.g., under what conditions will **data** be marked as containing that type of information). The Patient Privacy Policy may be a consent policy, dissent policy, authorization policy, etc.
- **Patient Privacy Consent Resource** - (a.k.a. Privacy Consent) A record resource that follows the BPPC profile or the PCF profile and captures the act of the consent ceremony and the details. The Consent references the basis Patient Privacy Policy. The Consent may be agreement with the policy, dissent with the policy, or may contain further constraints and authorizations based on the Patient Privacy Policy.
- **Patient Privacy Policy Identifier** - A Patient Privacy Policy Domain-assigned globally unique identifier that identifies the Patient Privacy Policy.
- **Patient Identified Data** -  Are data about an identified Patient. This may be health information, but for the purposes of this appendix it is any personally identifiable information (PII).
- **Data Holder** / **Custodian** - A controlling entity of some set of Patient Identifiable Data.
- **Patient** / **Subject of data** / **Consumer** - The patient is the human-subject of health-related data. The use of the term patient is not to imply only subjects under current treatment.
- **Privacy Consent** - (a.k.a. Consent) Binding agreement between the Patient / Subject of the data and the Data Holder as to the appropriate use of data. The consent may include constraints and obligations. The agreement may be executed by delegates, and the agreement may include other parties that are held to the terms. Consent term is used here in broad definition not limited by the definition of consent in regulation or laws.
- **Privacy Consent Ceremony** - All the steps leading up to and including the acceptance by the Patient and Custodian of the terms of a Privacy Consent. The ceremony is responsible for assuring the patient is well informed and understands the terms. The ceremony may include many people and tools.
- **Privacy Parameters** - Rules that are allowed to be specified by the patient as deviations from the Patient Privacy Policy. Such as limiting access to data published in a date range, data published by a given author, or data with a specific kind of restricted health sensitivity.
- **Privacy Preferences** - Published by the Patient as desired privacy conditions. These preferences may be used during a Consent ceremony to inform the privacy conditions.
- **Data Access Requests** - Defined interactions in which data are shared within a Trust Domain in keeping with the Patient Privacy Consent terms. Requests for data to leave the control of the Data Holder. Most requests will be from within a broader Trust Domain, but some requests may be to parties outside a Trust Domain.
- **Authentic Requests** - Requests that can be proven to be from within the trust domain. Authentic Requests carry well-defined parameters of the request including identity of data recipient, purpose of use the data will be used, and the data characteristics scope.
- **Data Classification** -  Patient identifiable data is considered health information and is subject to a set of constraints as given to normal health information.
- **Security Labeling Service** - A service that classifies data into a defined set of sensitivity classifications. See [below](#SLS) for further discussion and deployment models.
- **Normal Health Data** - The majority of Patient Identified Data are health information and is considered more sensitive than non-health information, this data would be classified as Normal Health Data. Normal Health Data is sensitive.
- **Restricted Health Data** - Some Patient Identifiable Data are considered more sensitive and is classified as Restricted Health Data. Data may be considered Restricted by regulation or laws, or may be deemed by the patient to be more sensitive. Some examples of restricted health data are data that describes a stigmatizing sensitive health topic such as mental health, drug abuse, sexual health, or other.
- **Users** - An identifiable agent, usually human, that has some defined role within the Organization within which they operate. A User may be the Patient herself, a patient related party, clinician, researcher, billing clerk, etc. These different functional roles will have different needs to access data. For example, registration clerks may need to be able to access patient demographics, billing, and contacts but would not need access to clinical content.

The Privacy Policy includes appropriate access rules that define conditions on various factor(s) for example:

- the kinds of data being managed;
- the kinds of use of these data that could be allowed;
- the kinds of users for which privacy policies and consent rules would apply;
- the safety risk to privacy risk management;
- the subject of the data;
- role of users or organizations for which the data may be disclosed to;
- type of data disclosed;
- security level in which the disclosure takes place (weak authentication vs. strong authentication);
- type of purpose for which the data is disclosed;
- timeframe of use (period of validity of the consent, window of disclosure...);
- etc.

Some Privacy Consent needs require a more basic record, where as other Consents require intermediate or advanced needs. The more advanced need must support both the recording of the patient specific parameters and the ability to distinguish the accesses that would be impacted by those specific parameters.

<a name="privacy-preferences"> </a>

The Privacy Consent Ceremony and the development of the Privacy Policies is not constrained or described by IHE. The Privacy Preferences is a potential way to improve the Patient Experience by allowing the Patient to express their desired privacy conditions and parameters. These Privacy Preferences would not be enforceable as they are as statement of desire and not agreed to by a Data Holder. The Consent ceremony could take these preferences as input, and thus, present the terms that the Data Holder is willing to enforce. Thus, at the end of the Consent Ceremony there would be a Patient Privacy Consent Resource that expresses the terms that the Data Holder and Patient have agreed to.

<figure>
{%include preferences-workflow.svg%}
<figcaption><b>Figure P-1: Preferences to Enforcement Possible Workflow</b></figcaption>
</figure>
<br clear="all">

A domain's Privacy Consent Policies could result in various actions, for example:

- limitation on the fact that specific documents exist at all
- limitation of collection and recording of data
- limitation of the access to specific documents by specific users
- display of a warning note (either concerning this access or to inform that further disclosure is not allowed, limited to some defined population, needed further consent...)
- collection of new consent (oral consent, patient authentication, electronically signed consent, paper consent...)

## P.1 Consents in a sensitivity labeled and role based access control environment

There is always a need to have overarching policies that define for a user what kind of activities and data access is allowed. This overarching policy would define all of the access control rules that are independent from any patient choice. Within an organization these overarching policies would include activities allowed, such as not allowing a janitor to prescribe drugs. One possible implementation may have a collection of roles vs. object types that would form an access control matrix. An example of a simple access control matrix is shown in the table below, where an `X` indicates that the given role would have access to the given object type.

**Table P-1: Sample Access Control Policies**

| Object Type vs Functional Role | Billing Information | Administrative Information | Dietary Restrictions | General Clinical Information | Sensitive Clinical Information | Research Information | Mediated by Direct Care Provider |
|---------------------------------| - | - | - | - | - | - | - |
| Administrative Staff            | X | X
| Dietary Staff                   |   | X | X |
| General Care Provider           |   | X | X | X |
| Direct Care Provider            |   | X | X | X | X |   | X |
| Emergency Care Provider         |   | X | X | X | X |   | X |
| Researcher                      |   |   |   |   |   | X |
| Patient or Legal Representative | X | X | X | X | X |   |   |
| Janitor                         |
{:.grid}

Within a trust domain, they will define a similar matrix, and that matrix results in a single Domain Privacy Policy. This vocabulary must then be configured in the Access Control and Enforcement Points. Using the example above, the Domain Privacy Policy might look like.

**Table P-2: Patient Privacy Policies When Expressed by Document Sensitivity**

| Privacy Consent Policy | Description |
|------------------------| -- |
| Billing Information    | May be accessed by administrative staff and the patient or their legal representative.
| Administrative Information | May be accessed by administrative or dietary staff or general, direct or emergency care providers, the patient or their legal representative.
| Dietary Restrictions | May be accessed by dietary staff, general, direct or emergency care providers, the patient or their legal representative.
| General Clinical Information | May be accessed by general, direct or emergency care providers, the patient or their legal representative.
| Sensitive Information | May be accessed by direct or emergency care providers, the patient or their legal representative.
| Research Information | May be accessed by researchers.
| Mediated by Direct Care Provider | May be accessed by direct or emergency care providers.
| Janitors | Shall not have access to any data.
{:.grid}

This method can be used to define the Patient Privacy Policy. Variations may also be defined, covering the differences between Patient Privacy Policy available and the effects of a Patient rejecting the Patient Privacy Policy.

Note that a Patient Privacy policy will focus on who has access to data. Other Consents, like Consent-to-Treat or Medical-Advanced-Directives (living wills), focus more on authorization for activities.

### P.1.1 Consents in a Role Based Access Control (RBAC) Environment

The above closely matches Role Based Access Control (RBAC), where users are grouped into one or more roles. These groupings might be based on where the user reports to or works, called 'structural roles,' or may be indicated by what the user is currently doing, called 'functional roles'. Regardless of if a role is a structural or functional role, it may authorize activities and access to data. These roles will have rules associated with them, like the matrix above. Thus, when any request is being made by a user, their roles are compared to the data access request to determine if the data should be given.

RBAC works well when object types are clearly needed or forbidden by a given role. This is often the case in many industries.

### P.1.2 Consents in an Attribute Based Access Control (ABAC) Environment

Healthcare struggles with RBAC as some data needs to have different rules due to the data values, rather than the kind of data. The most clear example of this comes with Restricted sensitivity data, but is also true within Normal sensitive data. As shown above, there is some need for Dietary Staff, providing the hospital rooms with meals, to know some of the healthcare indicators such as allergies and current recovery status. Thus, the Dietary Staff needs access to some Normal sensitive data but not other Normal sensitive data. One could just write policy that tells Dietary Staff to not look at any data they should not be looking at, and possibly watch the audit logs for deviations from this policy. This might work within an organization, but will not work very well within a network Trust Domain.

Attribute Based Access Control (ABAC) is where users are given clearances, which at this level are not too much different than roles. The big difference is that these clearances provide access to data based on the attributes of the data. So for example, with the Dietary Staff their clearance may give them access to a subset of observations, where that subset is a list of types of observation.

The use of ABAC in a Consent enables Consent policies to have rules based on things like:

- The timeframe within which the data was authored
- The Individual or Organization that authored the data
- The identifier of data
- The relationship this data has with an identified encounter or care-plan

The ultimate use of ABAC is when the data have been classified by the data sensitivity and confidentiality. The classification of data is a hard task, see [Security Labeling Service](#SLS) below. However, if data is classified, then the classification can be used in ABAC. Many classification tags systems place the tag in a common place that is independent of the object type. For example in XDS, there is a metadata element `confidentialityCode` that can carry the sensitivity and confidentiality classification of the data regardless of the format of the data. In FHIR, there is a `meta.security` element that is at the top of all kinds of FHIR resources, that can carry this classification. In both of these cases the Access Control decision and enforcement does not need to look at the kind of the data, it simply looks at the classification.

In a Consent these attribute parameters can enable various consent provisions:

- I allow all my data to be shared with the national network for treatment purposes, except for the data recorded in 2004
- I allow all my data to be used by any treatment purpose, but any other purpose can only get normal data
- I authorize clinical research project betty to access the data associated with my care-plan identified as 1234

### P.1.3 References

The following list of references is provided as good references to understand the terms and concepts presented here. These references are not required by IHE.

- ISO/TS 21298 "Health informatics – Functional and structural roles"
- ISO/TS 22600 "Health Informatics – Privilege Management and Access Controls"
- CEN prEN 13606-4 "Health informatics — Electronic health record communication — Part 4: Security requirements and distribution rules"

## P.2 Possible checklist for implementations

The following are some steps that a domain implementing privacy should consider.

### P.2.1 General (before anything else)

- Granularity of classification of data:
  - Granularity of document: all documents, document by type, each document.
  - Granularity smaller than document: sections within documents, each data element (FHIR Resource), sub elements.
  - Granularity of user: all users, user role, individual user.
- Depth of classification implementation:
  - Is the existence (metadata) about a protected resource that can't be read by the user?
  - Is the user informed that there are data they are not being shown?
  - What level of Consent parameters is allowed?
- How to identify users, objects, and policy?
- Obligations and Refrain policies:
  - Are there actions that should be forbidden (Refrain) or mandated (Obligation)?
    - Some examples: Do not Print, Do not Persist, Must encrypt before storing, Must get additional Consent before further disclosure, etc.
  - Can these Obligations and Refrains be incorporated into the overall Policy, or the meaning of a Consent Policy
  - Using Obligations or Refrains at the transactional level is not well implemented and often not necessary when it can be imposed at the policy level.
- Trust Domain support:
  - What capability do the members in a Trust Domain support?
- Remediation and Investigation
  - Define the policy for addressing privacy breaches

### P.2.2 While implementing Consent Management

- Definition of codes to be used. Depending on site / hardware, document type, author, patient.
- Implementing options:
  - possibility of a list to choose from and how the list is constituted (out of all the possible value, out of the value acknowledged by patient...)
  - possibility to change default codes prior to publication
  - possibility to use different format depending on the confidentiality policy (only non-downloadable image, pdf, word...)
- Later modification of policy (possible directly when requesting a document or have to be validated before)

### P.2.3 Prior to publication

- What elements should be checked before publication:
  - existence of a policy
  - existence of the policy used
  - existence of a consent for that policy
  - What additional information should be given (general consent policy, patient's specific consent policy...?)

### P.2.4 Prior to allowing access to a document

- What elements should be checked before publication:
  - accessing user role
  - existence of the policy used vs. accessing user
- Specific accesses and impact on confidentiality policy:
  - emergency (specific policy, short cut of confidentiality policy...)
  - break glass
- What additional information should be given (general consent policy, patient' specific consent policy...)

### P.2.5 Continued Management

- Review of Access Denied to be sure that they are appropriate
- Review of Break-Glass instances to be sure that they are appropriate
- Mechanism to address complaints that access was allowed at some time in the past.
  - This would need to address any changes in the Patient Consent record during that time
    - Where the record changed, is there FHIR _history support to give access to older version?
    - Where the record changed, is there AuditEvent or Provenance to indicate why it changed and when and by whom?
  
## P.3 Potential obligations and refrains

The full scope of privacy policies is potentially infinite. The following are some considerations of obligations and refrains that a Patient Privacy Policy may require of an Access Control Enforcement Point. Where Obligations are activities that must be done, and Refrains are activities that must not be done. Many of these obligations and refrains have been given codes in the HL7 Security Control ValueSets.

[Obligation](https://terminology.hl7.org/ValueSet-v3-ObligationPolicy.html)  - Security label metadata that segments an IT resource by conveying the mandated workflow action that an information custodian, receiver, or user must perform. For Example: Encrypt, mask, comply with policy
[Refrain](https://terminology.hl7.org/ValueSet-v3-RefrainPolicy.html) - Security label metadata that segments an IT resource by conveying actions which an information custodian, receiver, or user is not permitted to perform unless otherwise authorized or permitted under specified circumstances. For Example: Do not disclose without consent, no reuse.

Obligations may also be expressed in oAuth scopes such as those defined in [SMART-App-Launch](https://www.hl7.org/fhir/smart-app-launch).

<a name="FHIR-Explainer"> </a>

## P.4 Explainer of FHIR Consent Model

This section includes explanation of some example scenarios and points at example
Consent resources for them.
These example scenarios are provided for educational use only, they are not an
endorsement of these scenarios.

### P.4.1 Notice of Privacy Policy

Some realms only require that the patient be given access to the organizations privacy policy.
In these realms, the patient is not given the choice to accept, reject, or change the terms of the privacy policy.
The expectation is that the patient can stop the engagement with the healthcare provider if they don't like the privacy policy (yes, we know this is a fallacy in many situations).

These realms may use the Consent resource to indicate that the ceremony of providing access to the privacy policy has happened, when it happened, who presented the policy, and which version of the policy was presented. The specific version of privacy policy recorded can also be helpful to know when a given patient needs to be presented with the new version of the privacy policy.

- status - would indicate `active`
- category - would indicate `patient consent` specifically a `notice of privacy practices`
- subject - would indicate the **Patient** resource reference for the given patient
- dateTime - would indicate **when** the privacy policy was presented
- grantor - would indicate **who** presented the privacy policy
- grantee - would indicate the **Patient** resource if the patient was presented, a **RelatedPerson** for parent or guardian
- controller - would indicate the **Organization** who presented  the privacy policy, and which is going to enforce that privacy policy
- policyText - would indicate the **privacy policy** that was presented. Usually the **url** to the version specific policy
- provision.type - `permit` - given there is no way to deny, this would be fixed at permit.

Other elements would not be needed.

#### example

Given:

- Patient: Peter James Chalmers
- dateTime: March 11, 2022 at 12:22 pm
- grantee: is the patient
- grantor: Registration Desk Clerk - John Moehrke
- controller: Burgers MC
- policyText: policy at https://example.org/privacy-policy-v1.html

sushi:

```fs
Instance: example-notice
InstanceOf: Consent
Title: "Example of a Notice of Privacy Policy"
* status = #active
* category[+] = https://loinc.org#59284-0 "Patient Consent"
* category[+] = http://terminology.hl7.org/CodeSystem/consentcategorycodes#npp
* dateTime = 2022-03-11T12:22
* subject = Reference(Patient/example)
* grantee = Reference(Patient/example)
* grantor = Reference(Practitioner/example-clerk)
* controller = Reference(Organization/f001)
* policyText = Reference(DocumentReference/example-privacy-policy-v1)
* provision.type = #permit
```

support resources

```fs
Instance: example-privacy-policy-v1
InstanceOf: DocumentReference
Title: "Burgers Organization privacy policy"
* status = #current
* docStatus = #final
* type = https://loinc.org#57017-6 "Privacy policy Organization Document"
* category = https://loinc.org#57017-6 "Privacy policy Organization Document"
* content.attachment.contentType = application-pdf
* content.attachment.url = https://example.org/privacy-policy-v1.html

Instance: example-clerk
InstanceOf: Practitioner
Title: "Registration Desk Clerk example"
* active = true
* name.text = "John Moehrke"
```

#### Security / Privacy Considerations

Organizations that never allow a patient to be in a `deny` mode never need to look at Consent for access-control reasons as there is no difference if the Patient has been given notice or not. In these cases the Consent is there for record keeping only. See Change to opt-out below.

### P.4.2 Basic signed acknowledgement

This section covers the most basic of privacy consents, that simply records an acknowledgement to a given privacy policy permitting data sharing.
This is only slightly different than the Notice of Privacy Policy, in that with this example, there is some evidence captured from the ceremony.
Such as a patient initialing or signing a form indicating they have received the Privacy Policy.
Similar to the Notice of Privacy Policy, the Patient is not given a choice to reject or change the terms of the privacy policy.
The specific version of privacy policy recorded can also be helpful to know when a given patient needs to be presented with the new version of the privacy policy.

The Consent is the same as with Notice of Privacy Policy with the following additions:

- sourceReference - would hold a **DocumentReference** that has an image of the form that the patient signed. This image may be scanned copy of the ink on paper signature from the patient, or may be a digitally captured signature from the patient.

Other elements would not be needed.

#### example

Given: the same example attributes as above with the addition of a signed form. Thus the only addition is the sourceReference, which points at a scanned image of the signature in a DocumentReference resource.

sushi:

```fs
Instance: example-acknowledge
InstanceOf: Consent
Title: "Example of an acknowledged Notice of Privacy Policy"
* status = #active
* category[+] = https://loinc.org#59284-0 "Patient Consent"
* category[+] = http://terminology.hl7.org/CodeSystem/consentcategorycodes#npp
* dateTime = 2022-03-11T12:22
* subject = Reference(Patient/example)
* grantee = Reference(Patient/example)
* grantor = Reference(Practitioner/example-clerk)
* controller = Reference(Organization/f001)
* policyText = Reference(DocumentReference/example-privacy-policy-v1)
* provision.type = #permit
* sourceReference = Reference(DocumentReference/example-signed-acknowledgement-20220311)
```

support resources

```fs
Instance: example-signed-acknowledgement
InstanceOf: DocumentReference
Title: "Patient Peter James Chalmers signed an acknowledgement of the Privacy Policy"
* status = #current
* docStatus = #final
* type = https://loinc.org#57016-8 "Privacy policy acknowledgement Document"
* content.attachment.contentType = application-pdf
* content.attachment.data =  "SGVsbG8gV29ybGQ="
```

#### Security / Privacy Considerations

Organizations that never allow a patient to be in a `deny` mode never need to look at Consent for access-control reasons as there is no difference if the Patient has signed a consent or not. In these cases the Consent is there for record keeping only. See Change to opt-out below.

### P.4.3 Change to deny sharing

This section covers the case where a basic permit has been used, but for some reason the authorization is revoked or rejected.
An example might be where the organization does allow the patient to reject a previously permitted action, and the patient has expressed they want to deny sharing now.
Another example might be where legal action has happened compelling an organization to revoke the consent.

The example scenario here describes methods where there would be only one Consent on record for a given Patient.
Thus the current status would be simply discoverable by looking for the Consent for a given Patient and checking the `.status` element and `.provision.type`.
This logic presumes that where no Consent is found, that an implied `permit` is the default.
Thus one must look for both the existence of a Consent for the given Patient, and that the Consent.provision.type is `permit`.

Alternatives are shown:

1. One possibly is that the existing Consent instance is revised to change the `.status` to `inactive`. When this is done the `.lastUpdated` will automatically indicate the date and time this change happened.
2. If more details are needed, this change to the Consent instance could be tracked with an AuditEvent and/or a Provenance resource to indicate who made the change, what change was made, why the change was made, and other details as necessary.
3. Advanced alternative possibility is to record a new Consent with the details of the change in `Consent.status`, the existing Consent would be marked as `inactive` same as above, and the AuditEvent and/or Provenance would further indicate the new Consent replaces the old Consent. Shown below using Provenance.

Note that at some point after this, the consent may go back to `active`. This transition would follow the same process with the .status changes in the other direction.

#### example

Alternative 1 is not shown, as it is simply changing the .status.

##### Alternative 2

Given:

- existing Consent resource `example-acknowledge` is revised as Alternative 1
  - for visibility the examples assumes that the server supports versioning. This is not required of the alternative.
- Provenance states
  - who - Lawyer David Pyke
  - when - March 3rd, 2022 at 4:56pm
  - why - Legal hold

sushi:

```fs
Instance: example-change-consent
InstanceOf: Provenance
Title: "Consent revoked"
* target = Reference(Consent/example-acknowledge/_history/2)
* entity.what = Reference(Consent/example-acknowledge/_history/1)
* entity.role = #revision
* dateTime = 2022-03-11T16:56
* activity = http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle#hold
* patient = Reference(Patient/example)
* agent.type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#enterer
* agent.who = Reference(Practitioner/example-lawyer)
 
Instance: example-lawyer
InstanceOf: Practitioner
Title: "Corporate Lawyer example"
* active = true
* name.text = "David Pyke"
```

#### Security Considerations

That organizations that never allow a patient to be in a `deny` mode never need to look at Consent for access control reasons as there is no difference if the Patient has been given notice, or signed anything.
In these cases, the Consent is there for record keeping only.
With the support for Change to opt-out, there is now a need for access-control to always look for Consent status.
The most simple access-control will simply look for the existence of a Consent, check that it is `.status = active`, and that it is `.provision.type = deny`; if it is anything else then the access-control rule is that which is represented by the privacy policy.

### P.4.4 Some patient specific provisions

The above examples were recording blanket agreement or disagreement by a given patient to a given policy. This is not as flexible as the Consent resource can support. The Consent resource can also record deviations and special cases. These are recorded in the `.provisions` structure. The root level `.provision` simply sets the context as shown above. There is nested `.provision`(s) that can exist within the root level `.provision`, and even within other nested `.provisions`.  Each level of nesting would contain the exceptions to the rules set down in the prior level, thus each successive level of nesting reverses the `permit` vs `deny`. In this way one can encode situations where broad sharing is allowed, but not sharing with Dr. Bob. The following is an example fragment of just the `.provision`. Note that the second nested provision is a `deny` provision with the only other element populated is the actor.reference of Dr. Bob.

```fs
...
* provision.type = #permit
* provision.provision[0].type = #deny
* provision.provision[0].actor[0].reference = Reference(example-dr-bob)

Instance: example-dr-bob
InstanceOf: Practitioner
Title: "Dr. Bob"
* active = true
* name.text = "Dr. Bob"
```

#### AND relationship between elements

Each `.provision` has elements that describe the setting for that `permit` or `deny`. Each element within a given `.provision` is in an AND relationship with the other elements in that given `.provision`. An element that is not populated indicates that for that kind of element there is no constraint. Thus in the above example, the `deny` provision for Dr. Bob has none of the other elements in that `.provision` filled out, so this means that Dr. Bob is forbidden access regardless of the `role` he might take on, or the `purpose` of use, or the `action`, or the `class` of data, or the `dataPeriod` timeframe of the data, etc.

Thus to say that Dr. Bob is not to get access to the data, except for patient directed purpose of use; one would have a Deny of all access by Dr. Bob, and a nested Permit of Dr. Bob AND patient directed purpose of use AND normal confidentiality data (not restricted). 

```fs
...
* provision.type = #deny
* provision.provision[0].type = #permit
* provision.provision[0].actor[0].reference = Reference(example-dr-bob)
* provision.provision[0].purpose = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT "patient requested"
* provision.provision[0].securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N "normal"

```

#### OR relationship within an element

Repetitions within an element are in an OR relationship. Thus to say that Dr. Bob is allowed this access, not just patient requested, but also family requested, and power of attorney; one would just put them all as alternatives on the purpose element.

```fs
...
* provision.type = #deny
* provision.provision[0].type = #permit
* provision.provision[0].actor[0].reference = Reference(example-dr-bob)
* provision.provision[0].purpose[0] = http://terminology.hl7.org/CodeSystem/v3-ActReason#PATRQT "patient requested"
* provision.provision[0].purpose[1] = http://terminology.hl7.org/CodeSystem/v3-ActReason#FAMRQT "family requested"
* provision.provision[0].purpose[2] = http://terminology.hl7.org/CodeSystem/v3-ActReason#PWATRNY "power of attorney"
* provision.provision[0].securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N "normal"

```

### P.4.5 time scoped provisions

The `provision.period` is used to indicate that this provision is only active during a period of time. This is useful to indicate that Dr. Bob should be denied access until 2024, because I will be moving away from Dr. Bob in 2022.

```fs
...
* provision.type = #permit
* provision.provision[0].type = #deny
* provision.provision[0].period.end = 2024
* provision.provision[0].actor[0].reference = Reference(example-dr-bob)
```

#### timeframe for data

The provision elements are very powerful. We are not going to explain examples of all of them.

The `provision.dataPeriod` element is very useful, as it is not uncommon for a patient to remember a timeframe when they had a specifically sensitive healthcare episode. Thus it is easy to give a timeframe, where any data that was authored or last updated within that timeframe would be the context of that provision. The further advantage of this mechanism is that there is no indication of why or what is sensitive; just a timeframe.

For example, deny access to any data authored or last updated in 2018. This will block all data, regardless of what kind of data, or who is asking for the data.

<a name="SLS"> </a>

## P.5 Security Labeling Service Models

Data may be "Normal" medical data or "Restricted" medical data. The distinction here focused purely on data classification for stigmatizing sensitive topics. The discussion below focuses on FHIR, but the same can apply to [Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) metadata `confidentiailtyCode` tag.

The various clinical Resources in FHIR are very complex and highly variable. Although [Observation]({{site.data.fhir.path}}observation.html) is the most often used Resource, sensitive data may exist in ANY other FHIR resource including [Allergies]({{site.data.fhir.path}}allergyintolerance.html), [Procedures]({{site.data.fhir.path}}servicerequest.html), [CarePlan]({{site.data.fhir.path}}careplan.html), [Medication]({{site.data.fhir.path}}medicationstatement.html), [Problems]({{site.data.fhir.path}}condition.html), [DiagnosticReport]({{site.data.fhir.path}}diagnosticreport.html), [ImagingStudy]({{site.data.fhir.path}}imagingstudy.html), [Genetics]({{site.data.fhir.path}}molecularsequence.html), etc... By assessing the [sensitivity classification]({{site.data.fhir.path}}security-labels.html) and placing that assessment into a [well-known location found in all FHIR Resources]({{site.data.fhir.path}}security-labels.html#rsl) - `.meta.security`, the Access Control does not need to be aware of the kind of FHIR Resource, it can just process the data as a DomainResource and simply look at the `.meta.security` element.

The following example fragment shows data tagged with both alcohol use sensitive data and thus that the confidentiality evaluation is Restricted. The complete [Observation of Alcohol Use](Observation-ex-alcoholUse.html) example.

```fs
...
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActCode#ETHUD
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* code = http://loinc.org#74013-4
* valueQuantity = 5 '{wine glasses}/d' 
...
```

The classification of the data may be a manual process, but that is not a very scalable solution. The [HL7 Security Workgroup](http://www.hl7.org/Special/committees/secure/index.cfm) proposes that the classification of data into sensitive topics is the role of the [Security Labeling Service (SLS)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=360). The SLS inspects the data, and may use the context of the data to identify the sensitivity classification. It is expected that most data will not be considered sensitive, or "Normal".

### P.5.1 Data tagging Considerations

Some data are direct and clearly in a sensitive category. But there can be indirect relationships, such as three medications prescribed together are a clear indication of a sensitive category but are not individually sensitive.

Some data may also not be sensitive in the coding, but rather sensitive in the narrative, this would be poor data quality but it is a reality that should be considered. Thus an SLS may need to include some Natural Language Processing to find sensitive human words in narrative.

Some approaches use well-defined ValueSets, where others use a list of words. The list of words can be search across the data without regard for the data structure, which has the benefit of not needing to have the SLS data schema aware. The list of words can be codes, such as SNOMED numeric codes.

### P.5.2 Architecture approaches to data tagging

When the SLS is executed is a systems design decision. General alternatives are:

#### Pre Tagging data
Tagging the data as it is created, updated, or imported.

<div>
{%include sls-batch.svg%}
</div>
<br clear="all">

Which has the advantage that the access to the data does not need to assess the data, it just uses the existing sensitivity tag.

<div>
{%include sls-pre.svg%}
</div>
<br clear="all">

This solution is likely to be more performant on use of data, but may not have as accurate sensitivity tags due to the dynamic nature of policies around sensitivity, and dynamic nature of data relationships. This solution also requires that the EHR database support data tags.

#### Use time tagging data

Alternative is that the data are temporarily tagged prior to use, thus the sensitivity is freshly determined and used only for that access enforcement.

<div>
{%include sls-query.svg%}
</div>
<br clear="all">

This solution does not require that the EHR database be updated to support tagging of data, but may incur a performance impact on data use.

### P.5.3 Example ValueSets

One way to understand a very basic SLS is that it looks for clinical codes in the data. It might do this using ValueSets, but likely would need to do this in a more performing way. The following are some examples of ValueSets of codes that when these codes are found within data, that the data could be considered of the identified sensitivity classification. ValueSets like this should not be considered authoritative or stable, as the sensitive classes are dynamic in nature and thus the ValueSets you use would need to be revised on a regular basis. Thus these valueSets might be used as advice, but the content of them needs to be vetted and adjusted to meet current understanding and the practice of medicine within your organization.

- [Set of codes that indicate ETH (alcohol and drug)](ValueSet-SlsSensitiveETH.html)
  - [Set of codes that indicate ETHUD (alcohol)](ValueSet-SlsSensitiveETHUD.html)
  - [Set of codes that indicate OPIOIDUD (drugs)](ValueSet-SlsSensitiveOPIOIDUD.html)
- [Set of codes that indicate PSY](ValueSet-SlsSensitivePSY.html)
- [Set of codes that indicate SDV](ValueSet-SlsSensitiveSDV.html)
- [Set of codes that indicate HIV](ValueSet-SlsSensitiveHIV.html)

Note these ValueSets are also focused on directly identifying codes. These ValueSets do not address when different objects may be normal sensitive alone, but when they appear in a patient record the combination is sensitive. These ValueSets also do not address narrative text that might indicate sensitivity.

For example since these valueSets were originally authored ICD10 and ICD11 codeSystems have been published and are used. Thus the valueSets indicating codes in ICD9 may still find data in historic records, but to catch new data there would need to be codes from ICD10 or ICD11 defined.

### P.5.4 Example Data with tags

The following examples show where the sensitivity tag is maintained.

- [Observation of Alcohol Use](Observation-ex-alcoholUse.html) marked with `ETHUD`
- [Observation of a Blood Sugar](Observation-ex-bloodSugar.html) not marked sensitive

### P.5.5 Example of Search Set Bundle Processing

Given the using the model of "Query/Use enforcement" discussed above. The raw output from a FHIR search would include all observations, and they would not have security tags. That would look like:

<figure>
{%include pre-sls-searchset.svg%}
<figcaption><b>P.5.5-1 Figure: Search Set Bundle before SLS tagging</b></figcaption>
</figure>
<br clear="all">

This Bundle would then be processed by the SLS and sensitivity and confidentiality tags would be added:

<figure>
{%include post-sls-searchset.svg%}
<figcaption><b>P.5.5-2 Figure: Search Set Bundle after SLS tagging</b></figcaption>
</figure>
<br clear="all">

The tagged Bundle would then be processed by the policy enforcement point. In the following example the policy enforcement point is instructed to remove any Alcohol use Disorder information. Thus the first entry would be removed and the total decremented. The result would look like:

<figure>
{%include post-sls-enforcement-searchset.svg%}
<figcaption><b>P.5.5-3 Figure: Search Set Bundle post enforcement to remove Alchol Use Disorder</b></figcaption>
</figure>
<br clear="all">


---

// File: input/pagecontent/Consent-ex-consent-advanced-normal-break-glass-restricted-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued:
- For most users the **result** will be no different than consent to [allow NORMAL data access](Consent-ex-consent-advanced-normal.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal.html#notes)
- For the break-glass authored users that have declared break-glass the **result** will be no different than consent to [allow NORMAL and RESTRICTED data access](Consent-ex-consent-advanced-normal-restricted.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal-restricted.html#notes)


---

// File: input/pagecontent/Consent-ex-consent-advanced-normal-focused-psy-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. This case allows treatment access to normal data, and carves out mental health data as accessible only to [Practitioner](Practitioner-ex-practitioner.html). The oAuth token would be expressing a general permit for most users to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

For Users that are not [Practitioner](Practitioner-ex-practitioner.html), the token **result** will be no different than consent to [allow NORMAL data access](Consent-ex-consent-advanced-normal.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal.html#notes)

For the User [Practitioner](Practitioner-ex-practitioner.html), the token **result** will be:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to just normal data would need to be expressed:
  - First as a forbid everything
  - Second as a permit normal data
  - Third is to permit Mental Health data

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-authoredby"],
    "residual" : [
      {
        "type" : "forbid",
      },{
        "type" : "permit",
        "securityLabel" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            "code" : "N"
        }]
      },{
        "type" : "permit",
        "securityLabel" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code" : "PSY"
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-advanced-normal-focused-psy-or-sdv-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. This case allows treatment access to normal data, and carves out mental health data and sexual health data as accessible only to [Practitioner](Practitioner-ex-practitioner.html). The oAuth token would be expressing a general permit for most users to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

For Users that are not [Practitioner](Practitioner-ex-practitioner.html), the token **result** will be no different than consent to [allow NORMAL data access](Consent-ex-consent-advanced-normal.html).
  - ITI-71 [access token](Consent-ex-consent-advanced-normal.html#notes)

For the User [Practitioner](Practitioner-ex-practitioner.html), the token **result** will be:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to just normal data would need to be expressed:
  - First as a forbid everything
  - Second as a permit normal data
  - Third is to permit Mental Health data and Sexual Health Data

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-authoredby"],
    "residual" : [
      {
        "type" : "forbid",
      },{
        "type" : "permit",
        "securityLabel" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            "code" : "N"
        }]
      },{
        "type" : "permit",
        "securityLabel" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code" : "PSY"
          },{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            "code" : "SDV"
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-advanced-normal-focused-restricted-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued:
- For most users the **result** will be no different than consent to [allow NORMAL data access](Consent-ex-consent-advanced-normal.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal.html#notes)
- For the given [Practitioner](Practitioner-ex-practitioner.html) the **result** will be no different than consent to [allow NORMAL and RESTRICTED data access](Consent-ex-consent-advanced-normal-restricted.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal-restricted.html#notes)


---

// File: input/pagecontent/Consent-ex-consent-advanced-normal-not-restricted-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case, given that the restriction to normal data is at the root, it means that nothing BUT normal data is allowed. This case also has explicit deny on restricted data. This restriction would be implied, but here it is explicit, so we will show how to make it explicit in the oAuth token. The oAuth token would be expressing a general permit for the given user to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to just normal data would need to be expressed:
  - First as a forbid everything
  - Second as a permit normal data
  - Third is a redundant forbid of restricted data

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-authoredby"],
    "residual" : [
      {
        "type" : "forbid",
      },{
        "type" : "permit",
        "securityLabel" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            "code" : "N"
        }]
      },{
        "type" : "forbid",
        "securityLabel" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            "code" : "R"
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-advanced-normal-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case, given that the restriction to normal data is at the root, it means that nothing BUT normal data is allowed. The oAuth token would be expressing a general permit for the given user to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below.
- The restriction to just normal data would need to be expressed:
  - First as a forbid everything
  - Second as a permit normal data

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-authoredby"],
    "residual" : [
      {
        "type" : "forbid",
      },{
        "type" : "permit",
        "securityLabel" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            "code" : "N"
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-advanced-normal-restricted-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case, given that the restriction to normal data is at the root, it means that nothing BUT normal data is allowed. The oAuth token would be expressing a general permit for the given user to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to just normal data would need to be expressed:
  - First as a forbid everything
  - Second as a permit normal data

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-authoredby"],
    "residual" : [
      {
        "type" : "forbid",
      },{
        "type" : "permit",
        "securityLabel" : [{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            "code" : "N"
        },{
            "system" : "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            "code" : "R"
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-basic-ink-notes.md

#### IUA Access Token

The [ITI-71](other.html#updates-to-iti-71) processing is exactly the same as [Basic Consent to sharing for Treatment policy](Consent-ex-consent-basic-treat.html#notes).


---

// File: input/pagecontent/Consent-ex-consent-basic-reject-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) is requested then ITI-71 responds with an error response as defined in the OAuth 2.1 Authorization Framework [OAuth 2.1, Section 5.2].


---

// File: input/pagecontent/Consent-ex-consent-basic-treat-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following PCF specific element to inform the **Consent Enforcement Point**. 

In this case there is no residual, as the Consent expresses that authorization be given for a given purpose of use. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources. No token would be issued by ITI-71 for users not authorized, or requests beyond the set of purpose of use.

- The restriction to the given purpose (FooBar) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The consent is indicated in the `ihe_pcf`
  - no `residual` element is provided, indicating that no residual rules need be enforced

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-basic-treat"]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-expired-treat-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) is requested prior to expiration, then the resulting token would be the same as [Basic Consent to sharing for Treatment policy](Consent-ex-consent-basic-treat.html#notes). If the request is after expiration, then [ITI-71] responds with an error response as defined in the OAuth 2.1 Authorization Framework [OAuth 2.1, Section 5.2].


---

// File: input/pagecontent/Consent-ex-consent-intermediate-authoredby-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case, given that the authored by filter is at the root, it means that nothing BUT the information authored by the given practitioner is allowed. The oAuth token would be expressing a general permit for the given user to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to data authored by the given practitioner would need to be expressed:
  - First as a forbid everything
  - Second as a permit that which is authored by the given practitioner

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-authoredby"],
    "residual" : [
      {
        "type" : "forbid",
      },{
        "type" : "permit",
        "data" : [{
            "meaning" : "authoredby",
            "reference" : {
            "reference" : "http://example.org/fhir/Practitioner/ex-practitioner"
            }
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-intermediate-data-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case, given that the data filter is at the root, it means that nothing BUT the data is allowed. The oAuth token would be expressing a general permit for the given user to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to the given set of data would need to be expressed:
  - First as a forbid everything
  - Second as a permit that specific data

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-data"],
    "residual" : [
      {
        "type" : "forbid",
      },{
        "type" : "permit",
        "data" : [{
            "meaning" : "instance",
            "reference" : {
            "reference" : "http://example.org/fhir/Encounter/ex-encounter"
            }
        },{
            "meaning" : "instance",
            "reference" : {
            "reference" : "http://example.org/fhir/Observation/ex-weight-2"
            }
        },{
            "meaning" : "instance",
            "reference" : {
            "reference" : "http://example.org/fhir/Observation/ex-weight"
            }
        },{
            "meaning" : "instance",
            "reference" : {
            "reference" : "http://example.org/fhir/Observation/ex-bloodPressure"
            }
        },{
            "meaning" : "instance",
            "reference" : {
            "reference" : "http://example.org/fhir/Observation/ex-bloodSugar"
            }
        },{
            "meaning" : "instance",
            "reference" : {
            "reference" : "http://example.org/fhir/Observation/ex-alcoholUse"
            }
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-intermediate-encounter-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case, given that the encounter filter is at the root, it means that nothing BUT the information related to the encounter is allowed. The oAuth token would be expressing a general permit for the given user to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to data related to the encounter would need to be expressed:
  - First as a forbid everything
  - Second as a permit that data related to the encounter

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-encounter"],
    "residual" : [
      {
        "type" : "forbid",
      },
      {
        "type" : "permit",
        "data" : [{
            "meaning" : "related",
            "reference" : {
            "reference" : "http://example.org/fhir/Encounter/ex-encounter"
            }
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-intermediate-not-authoredby-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case the oAuth token and scope will address a general permit, and thus the `residual` need only express the forbid to information authored by the given practitioner.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to forbid data authored by the given practitioner would be expressed

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-not-authoredby"],
    "residual" : [
      {
        "type" : "deny",
        "data" : [{
            "meaning" : "authoredby",
            "reference" : {
            "reference" : "http://example.org/fhir/Practitioner/ex-practitioner"
            }
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-intermediate-not-data-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case one resource should be forbidden. The oAuth token would be expressing a general permit for the given user to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to the given one data resource would need to be expressed:

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-not-data"],
    "residual" : [
      {
        "type" : "forbid",
        "data" : [{
            "meaning" : "instance",
            "reference" : {
            "reference" : "http://example.org/fhir/Observation/ex-alcoholUse"
            }
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-intermediate-not-encounter-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case the oAuth token and scope will address a general permit, and thus the `residual` need only express the forbid to information related to the encounter.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to forbid data related to the given encounter

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-not-encounter"],
    "residual" : [
      {
        "type" : "forbid",
        "data" : [{
            "meaning" : "related",
            "reference" : {
            "reference" : "http://example.org/fhir/Encounter/ex-encounter"
            }
        }]
      }
    ]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-intermediate-not-timeframe-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case the oAuth token and scope will address a general permit, and thus the `residual` need only express the forbid to information authored in a given timeframe.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to forbid data authored in the given timeframe

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-not-encounter"],
    "residual" : [{
        "type" : "forbid",
        "dataPeriod" : {
          "start" : "2022-01-01",
          "end" : "2022-12-31"
        }
    }]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-intermediate-purpose-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

In this case there is no residual, as the Consent expresses that authorization be given only to a given Research organization for a given purpose of use. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources. No token would be issued by ITI-71 for users not a part of the Research organization, or requests by that organization that are not purpose FooBar.

- The restriction to the given purpose (FooBar) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The consent is indicated in the `ihe_pcf`
  - no `residual` element is provided, indicating that no residual rules need be enforced

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://example.org/policies/purposeOfUse",
        "code" : "FooBar"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-purpose"]
  }
}
```


---

// File: input/pagecontent/Consent-ex-consent-intermediate-timeframe-notes.md

#### IUA Access Token

Provided an [ITI-71](other.html#updates-to-iti-71) results in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

Given that the token will express the permit portion, the `residual` would need to express the refinement. In this case, given that the timeframe filter is at the root, it means that nothing BUT the information authored in that timeframe is allowed. The oAuth token would be expressing a general permit for the given user to the given patient data. Possibly with scope restrictions based on other business rules, such as a subset of actions (CRUDE) and resources.

The token would need to include an `ihe_pcf` extension to point at this consent, and that would include a `residual` to express the refinement. Shown as followed:

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The restriction to data timeframe would need to be expressed:
  - first `forbid` all data
  - second `permit` data authored in the given timeframe

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-timeframe"],
    "residual" : [
      {
        "type" : "forbid",
      }, {
        "type" : "permit",
        "dataPeriod" : {
          "start" : "2022-01-01",
          "end" : "2022-12-31"
        }
      }
    ]
  }
}
```



---

// File: input/pagecontent/Consent-ex-dissent-intermediate-break-glass-notes.md

#### IUA Access Token

This Consent denies all access except for break-glass; thus any access request that has not declared break-glass purposeOfUse (BTG), or for which the user is not authorized to declare break-glass; would be rejected and not given any access token. This rejection would be recognized by users that know that they are authorized to break-glass that they might choose to declare a break-glass safety concern. There might be more refined user-interface or user-experience than this, but specification of that user-interface is out of the scope of PCF.

Provided an [ITI-71](other.html#updates-to-iti-71) is requested by an authorized user with PurposeOfUse indicating break-glass, then this would result in a PERMIT access token issued. That token would have the following residual element to inform the **Consent Enforcement Point** that it needs to restrict the results.

- The restriction to the given purpose (FooBar) would be expressed in the `ihe_iua` extension
  - The other `ihe_iua` extension parameters are not shown below
- The consent is indicated in the `ihe_pcf`
  - no `residual` element is provided, indicating that no residual rules need be enforced

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "BTG"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "http://example.org/fhir/Patient/ex-patient",
    "doc_id" : ["http://example.org/fhir/Consent/ex-consent-intermediate-dissent-break-glass"]
  }
}
```


---

// File: input/pagecontent/content.md

The following are the FHIR Consent profiling for the PCF profile. The FHIR Consent fundamentals are [explained in Appendix P](ch-P.html#FHIR-Explainer).

### 3:5.8.1 Foundation Policies

The [Foundation Consent](StructureDefinition-IHE.PCF.consentBasic.html) Content Profile indicates the common constraints for all of PCF. There are no examples of this as there is no intended use of this profile.

<a name="basic"> </a>

### 3:5.8.2 Basic

Using [Basic Consent](StructureDefinition-IHE.PCF.consentBasic.html) Content Profile

Examples for this Resource Profile:

- [Basic Consent to sharing for Treatment policy](Consent-ex-consent-basic-treat.html)
  - ITI-71 [access token](Consent-ex-consent-basic-treat.html#notes)
- [Basic Consent with an Ink signature](Consent-ex-consent-basic-ink.html)
  - ITI-71 [access token](Consent-ex-consent-basic-ink.html#notes)
- [Basic Consent that Rejects the base policy given](Consent-ex-consent-basic-reject.html) -- This could also be a representation of a situation when the patient has changed to rejection of a prior agreement
  - ITI-71 [access token](Consent-ex-consent-basic-reject.html#notes)
- [Consent that has expired](Consent-ex-consent-expired-treat.html)
  - ITI-71 [access token](Consent-ex-consent-expired-treat.html#notes)


<a name="intermediate"> </a>

### 3:5.8.3 Intermediate

Using [Intermediate Consent](StructureDefinition-IHE.PCF.consentIntermediate.html) Content Profile

Examples for this Resource Profile:

- restricted Consent to data [authored in a timeframe](Consent-ex-consent-intermediate-timeframe.html)
  - ITI-71 [access token](Consent-ex-consent-intermediate-timeframe.html#notes)
- restricted **exception** to data [authored in a timeframe](Consent-ex-consent-intermediate-not-timeframe.html)
  - ITI-71 [access token](Consent-ex-consent-intermediate-not-timeframe.html#notes)
- restricted consent to a [named set of data](Consent-ex-consent-intermediate-data.html)
  - ITI-71 [access token](Consent-ex-consent-intermediate-data.html#notes)
- restricted **exception** to a [named set of data](Consent-ex-consent-intermediate-not-data.html)
  - ITI-71 [access token](Consent-ex-consent-intermediate-not-data.html#notes)
- restricted consent to [data authored by a Practitioner](Consent-ex-consent-intermediate-authoredby.html)
  - ITI-71 [access token](Consent-ex-consent-intermediate-authoredby.html#notes)
- restricted **exception** to [data authored by a Practitioner](Consent-ex-consent-intermediate-not-authoredby.html)
  - ITI-71 [access token](Consent-ex-consent-intermediate-not-authoredby.html#notes)
- restricted consent to data [related to an encounter](Consent-ex-consent-intermediate-encounter.html)
  - ITI-71 [access token](Consent-ex-consent-intermediate-encounter.html#notes)
- restricted **exception** to data [related to an encounter](Consent-ex-consent-intermediate-not-encounter.html)
  - ITI-71 [access token](Consent-ex-consent-intermediate-not-encounter.html#notes)
- restricted consent to specific [intermediate purpose of use](Consent-ex-consent-intermediate-purpose.html)
  - ITI-71 [access token](Consent-ex-consent-intermediate-purpose.html#notes)
- [Dissent except for Break-Glass](Consent-ex-dissent-intermediate-break-glass.html).
  - ITI-71 [access token](Consent-ex-dissent-intermediate-break-glass.html#notes)

#### 3:5.8.3.1 Example of Intermediate by ID Search Set Bundle Processing

Given using Intermediate consent that identifies one Observation with id=1 not be shared. Like [named set of data](Consent-ex-consent-intermediate-not-data.html). The [Consent Authorization Server](volume-1.html#consentAuthorizationServer) would provide ITI-71 [access token](Consent-ex-consent-intermediate-not-data.html#notes) which is communicated to the [Consent Enforcement Point](volume-1.html#consentEnforcementPoint). The [Consent Enforcement Point](volume-1.html#consentEnforcementPoint) would first allow the Search to happen, and the raw output from a FHIR search would include all observations including the forbidden Observation.  That would look like:

<figure>
{%include pre-sls-searchset.svg%}
<figcaption><b>3:5.8.3.1-1 Figure: Search Set Bundle before enforcement</b></figcaption>
</figure>
<br clear="all">

The Bundle would then be processed by the [Consent Enforcement Point](volume-1.html#consentEnforcementPoint), which will remove any Observations with id=1. Thus the first entry would be removed and the total decremented. The result would look like the following and be what is returned by the Grouped Server:

<figure>
{%include post-id-enforcement-searchset.svg%}
<figcaption><b>3:5.8.4.1-3 Figure: Search Set Bundle post enforcement to remove Alcohol Use Disorder</b></figcaption>
</figure>
<br clear="all">

<a name="advanced"> </a>

### 3:5.8.4 Advanced

Using [Advanced Consent](StructureDefinition-IHE.PCF.consentAdvanced.html) Content Profile

Examples for this Resource Profile:

- Consent to [allow NORMAL data access](Consent-ex-consent-advanced-normal.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal.html#notes)
- Consent to [allow NORMAL and RESTRICTED data access](Consent-ex-consent-advanced-normal-restricted.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal-restricted.html#notes)
- Consent to [allow NORMAL data access but not RESTRICTED](Consent-ex-consent-advanced-normal-not-restricted.html) -- This adds the not restricted which should not be needed as the root only authorizes NORMAL
  - ITI-71 [access token](Consent-ex-consent-advanced-normal-not-restricted.html#notes)
- Consent to [allow NORMAL data access, and some access to RESTRICTED](Consent-ex-consent-advanced-normal-focused-restricted.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal-focused-restricted.html#notes)
- Consent to [allow NORMAL data access, and some access to Mental Health](Consent-ex-consent-advanced-normal-focused-psy.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal-focused-psy.html#notes)
- Consent to [allow NORMAL data access, and some access to Mental Health and Sexual Health](Consent-ex-consent-advanced-normal-focused-psy-or-sdv.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal-focused-psy-or-sdv.html#notes)
- Consent to [allow NORMAL data access, and break-glass access to RESTRICTED](Consent-ex-consent-advanced-normal-break-glass-restricted.html)
  - ITI-71 [access token](Consent-ex-consent-advanced-normal-break-glass-restricted.html#notes)

#### 3:5.8.4.1 Example of Advanced Search Set Bundle Processing

Given using Advanced consent that identifies that no Alcohol Use Disorder information shall be shared, and using the SLS model of "Query/Use enforcement" discussed in [Appendix P: Security Labeling Service Models](ch-P.html#p5-security-labeling-service-models). Note that there are other SLS architecture models, the "Query/Use enforcement" is being used only for illustrative purposes. The [Consent Authorization Server](volume-1.html#consentAuthorizationServer) would provide ITI-71 an Access Token indicating no Alcohol Use Disorder information is allowed is communicated to the [Consent Enforcement Point](volume-1.html#consentEnforcementPoint). The [Consent Enforcement Point](volume-1.html#consentEnforcementPoint) would first allow the Search to happen, and the raw output from a FHIR search would include all observations including the forbidden Observation.  That would look like:

<figure>
{%include pre-sls-searchset.svg%}
<figcaption><b>3:5.8.4.1-1 Figure: Search Set Bundle before SLS tagging</b></figcaption>
</figure>
<br clear="all">

In the "Query/Use enforcement" the Bundle would then be processed by the SLS and sensitivity and confidentiality tags would be added:

<figure>
{%include post-sls-searchset.svg%}
<figcaption><b>3:5.8.4.1-2 Figure: Search Set Bundle after SLS tagging</b></figcaption>
</figure>
<br clear="all">

The tagged Bundle would then be processed by the [Consent Enforcement Point](volume-1.html#consentEnforcementPoint), which will remove any Alcohol use Disorder information. Thus the first entry would be removed and the total decremented. The result would look like the following and be what is returned by the Grouped Server:

<figure>
{%include post-sls-enforcement-searchset.svg%}
<figcaption><b>3:5.8.4.1-3 Figure: Search Set Bundle post enforcement to remove Alcohol Use Disorder</b></figcaption>
</figure>
<br clear="all">

Note that the data returned may have the resulting security tags that the SLS applied, or those tags may be removed prior to the Grouped Server returning the results to the Grouped Client. This exposure of the tags is a policy decision that the PCF does not mandate.


---

// File: input/pagecontent/download.md


You can download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [IHE ITI.PCF Github Repo](https://github.com/IHE/ITI.PCF).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/index.md


The Privacy Consent on FHIR (PCF) Profile provides support for patient privacy consents and access control where a FHIR API is used to access Document Sharing Health Information Exchanges.

This includes refinement of the consent handling defined in [MHDS](https://profiles.ihe.net/ITI/MHDS). The scope does not intend to cover all consent use cases, such as the consent use cases for within an organization, or more advanced consents that may be addressed in future versions of PCF.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide

This guide is organized into the following sections:

- Volume 1: Profiles
  - [Introduction](volume-1.html)
  - [Actors, Transactions, and Content](volume-1.html#actors-and-transactions)
  - [Actor Options](volume-1.html#actor-options)
  - [Actor Required Groupings](volume-1.html#required-groupings)
  - [Overview](volume-1.html#overview)
  - [Security Considerations](volume-1.html#security-considerations)
  - [Cross Profile Considerations](volume-1.html#other-grouping)
  - [Appendix P: Privacy Access Policies](ch-P.html)
- Volume 2: Transaction Detail
  - [Get Access Token \[ITI-71\]](other.html#updates-to-iti-71)
  - [Incorporate Access Token \[ITI-72\]](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72)
  - [Introspect Token \[ITI-102\]](https://profiles.ihe.net/ITI/IUA/index.html#3102-introspect-token-iti-102)
  - [Get Authorization Server Metadata \[ITI-103\]](https://profiles.ihe.net/ITI/IUA/index.html#3103-get-authorization-server-metadata-iti-103)
  - [Access Consent \[ITI-108\]](ITI-108.html)
- Volume 3: Metadata and Content
  - [Privacy Consent Patterns](content.html)
- Other
  - [Changes to Other IHE Specification](other.html)
  - [Updates to ITI-71](other.html#updates-to-iti-71)
  - [Test Plan](testplan.html)
  - [Download and Analysis](download.html)

See also the [Table of Contents](toc.html) and
the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words: Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Must Support

The use of ```mustSupport``` in StructureDefinition profiles equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).

mustSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor shall populate the elements marked with MustSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit.
The consuming actors should handle these elements being populated or being absent/empty.
Note that sometimes mustSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.


---

// File: input/pagecontent/issues.md


## Significant Changes

### Release 1.1.0

- Build for FHIR R4 rather than R4B to better support marketplace that is using R4 and not R4B. This also enables PCF to be depended upon by other IGs that further refine the Consent profiling.
- fix bug in the oAuth token fragment for not-authoredBy Consent
- fixes to new warnings from IG publisher such as requirement for all examples of vital signas to be compliant with vital signs profiles from FHIR core

### Release 1.0.0

- Public Comment resolution
- Change from SEX to SDV
- Provide guidance on methods of managing changes to a persons Consent
- Relax some restrictions on Consent elements that were not justified
- Add example of consent to clinical trial data use
- Add example of delegate consenting onbehalf of the patient

## Issues

During development, the [readme in the github repo carries development and questions](https://github.com/IHE/ITI.PCF/blob/master/README.md)

### Submit an Issue

IHE welcomes [New Issues](https://github.com/IHE/ITI.PCF/issues/new/choose)
from the GitHub community. For those without GitHub access, issues may be
submitted at [ITI Public Comments](https://www.ihe.net/ITI_Public_Comments/).

As issues are submitted they will be managed on the
[PCF GitHub Issues](https://github.com/IHE/ITI.PCF/issues), where discussion and
workarounds will be found. These issues, when critical, will be processed using the normal
[IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting.
It is important to note that as soon as a Change Proposal is approved, it carries the same
weight as a published Implementation Guide (i.e., it is testable at an
[IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time
it is approved, even if it will not be integrated until several months later).

### Open Issues and Questions

- [PCF_18: Advanced required sensitivity codes](https://github.com/IHE/ITI.PCF/issues/18)
  - In the Advanced is a required subset of ConfidentialityCodes (N, R), and Sensitivity codes (ETH, ETHUD, OPIOIDUD, PSY, SDV, and HIV). Is this enough? Is this too many? What should be required of the PCF? Note that required in the PCF does not mean that a deployment implementation must use all of these codes.
  - There is likely no minimal set that is universally globally required. After public comment the current list of Sensitivity Codes that are mandatory is likely to be trimmed.  Should the sensitivity classifications that are moved out of the mandatory requirement still listed as a useful mention?
- [PCF_19: Should Basic include agent authored by the Consent](https://github.com/IHE/ITI.PCF/issues/19)
  - The Basic Explicit Option includes the ability for the Consent to identify a list of agents (device, relatedPerson, Practitioner, or Organization) that would be authorized by the Consent. This was supported by BPPC, so was considered Basic. However this has been identified as an unusual need today and thus would be more appropriate to be in the Intermediate group. Please comment on if you find this needed and agree that it should be in Basic, or if this support should be in Intermediate.
- [PCF_20: Should PCF include break-glass when there is no clear way to declare break-glass](https://github.com/IHE/ITI.PCF/issues/20)
  - There is support in a Consent for provisions when break-glass is declared, and there are support for conveying break-glass between the decision and enforcement. However, there is no clear way to declare break-glass, or to inform a client that the user is authorized to declare break-glass and would get access to more data.
  - There are many ways envisioned to declare break-glass:
    - oAuth access token request (ITI-71) includes the purposeOfUse of BTG, in addition to normal purposeOfUse (e.g., Treatment, Payment, Operations).
    - oAuth access token request (ITI-71) has a user-interface that would ask the user to declare break-glass. Unclear when this user-interface would engage, as it clearly can't engage every request.
    - some non-security method such as the http Category, as outlined in a [dragon note on the FHIR specification]({{site.data.fhir.path}}security-labels.html#break-the-glass).
    - Indication given in FHIR OperationOutcome that some data was filtered that would not need to be filtered if break-glass was declared.
    - Other non standard method.
- [PCF_21: Should Provenance be recommended or required?](https://github.com/IHE/ITI.PCF/issues/21)
  - ITI-108 includes requirements to record AuditEvents, using BALP pattern. This is considered sufficient to track inappropriate changes, and is referenced in the Security Considerations. Should there also be requirements to record Provenance on Create, Update, and Delete in addition to AuditEvent?
- [PCF_22: Multi-Generation possibilities](https://github.com/IHE/ITI.PCF/issues/39) 
  - The first release of PCF has many use-cases and applicability; but there are specific use-cases that are not included. These were excluded due to unclear how realistic they are. They are in theory useful, but not clear how soon they would be implemented in real-world products. So we await market showing interest in these or other use-cases.

### Closed Issues

None


---

// File: input/pagecontent/ITI-108.md

This section corresponds to transaction [ITI-108] of the IHE Technical Framework. Transaction [ITI-108] is used by the Consent Recorder, Consent Authorization Server, and Consent Registry Actors.

### 2:3.108.1 Scope

The Access Consent transaction is used to find Consent Resources that satisfy a set of parameters, retrieve an instance of a Consent Resource, Create a new Consent Resource, or to Update an existing Consent Resource. This transaction is made up of discrete http RESTful interactions (aka messages): Create, Read, Update, Delete, and Search. The Consent resource is intended to be compliant with the PCF defined [Actor Options](volume-1.html#actor-options) and PCF defined [Consent Resource constraints](content.html). The ITI-108 transaction does not require compliance to the  to these profiles of the [Consent Resource constraints](content.html), although the Consent Registry Actor could be configured to assure compliance.

The Access Consent transaction is focused on fundamental RESTful interactions. The [Consent Recorder](CapabilityStatement-IHE.PCF.consentRecorder.html) Actor has a more [nuanced interaction between the patient and the organization](ch-P.html#privacy-preferences), and possibly with others like a delegate of the patient with authorization to act on behalf of the patient. This nuanced interaction may also consider Privacy Preferences, current Consent rules, and organization rules. The PCF does not impose any specific behaviour at the  [Consent Recorder](CapabilityStatement-IHE.PCF.consentRecorder.html) actor. There is an impact on the use of the Access Consent transaction when there is an existing Consent that is being changed. This change must follow some workflow imposed by the organization capturing the consent. This change will utalize the Access Consent transaction, specifically the Create, Update, and/or Delete interaction. There are a few patterns that the organization may chose to follow:

1. Revise the existing FHIR Consent instance. That is to use the Update interaction to change the Consent. In this environment one must be able to understand the previous Consent rules in order to understand previous enforcements and the AuditEvent logged. The  [Consent Registry](CapabilityStatement-IHE.PCF.consentRegistry.html) may be using FHIR version support, thus all Updates create a history of the past.
2. Add a new FHIR Consent, and update the old FHIR Consent to indicate it is inactive. The history is clear, and this model does not require the  [Consent Registry](CapabilityStatement-IHE.PCF.consentRegistry.html) to have implemented FHIR version support, although it is still useful.
3. Add a new FHIR Consent, and delete the old FHIR Consent. The implementation of [FHIR delete]({{site.data.fhir.path}}http.html#delete) is often implemented logically, thus the previous Consent Resource instance is available administratively. The use of delete should only be used with careful consideration of longterm lifecycle management and accountability.

### 2:3.108.2 Actors Roles

**Table 2:3.108.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Consent Recorder](volume-1.html#consentRecorder)     | Searches and Retrieves existing Consents, and Creates or Updates existing Consents |
| [Consent Registry](volume-1.html#consentRegistry)     | Maintains Consent Resources, and responds to Search and Retrieve requests |
| [Consent Authorization Server](volume-1.html#consentAuthorizationServer) | Searches and Retrieves existing Consents so that authorization decisions can be made |
{: .grid}

#### 2:3.108.2.1 CapabilityStatement Resource

Server implementing this transaction shall provide a CapabilityStatement Resource as described in ITI TF-2x: Appendix Z.3 indicating the transaction has been implemented.

- Requirements CapabilityStatement for [Consent Recorder](CapabilityStatement-IHE.PCF.consentRecorder.html)
- Requirements CapabilityStatement for [Consent Registry](CapabilityStatement-IHE.PCF.consentRegistry.html)
- Requirements CapabilityStatement for [Consent Authorization Server](CapabilityStatement-IHE.PCF.consentAuthorizationServer.html)

### 2:3.108.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0]({{site.data.fhir.path}})

### 2:3.108.4 Messages / Interactions

<figure>
{%include ITI-108-seq.svg%}
<figcaption><b>Figure 2:3.108.4-1: Access Consent Interactions</b></figcaption>
</figure>
<br clear="all">

#### 2:3.108.4.1 Search Request

The Consent Recorder or Consent Authorization Server uses this request to find available Consent Resources given some search parameters.

##### 2:3.108.4.1.1 Trigger Events

When the Consent Recorder or Consent Authorization Server needs to discover available Consent Resources given some search parameters.

##### 2:3.108.4.1.2 Message Semantics

The Consent Recorder or Consent Authorization Server executes an HTTP search against the Consent Registry Consent URL. The search target follows the FHIR HTTP specification, addressing the Consent Resource [{{site.data.fhir.path}}http.html]({{site.data.fhir.path}}http.html):
```
[base]/Consent?<query>
```
This URL is configurable by the Consent Registry and is subject to the following constraints:

The `<query>` represents a series of encoded name-value pairs representing the filter for the query, as specified in Section [Query Search Parameters](#231084121-query-search-parameters), as well as control parameters to modify the behavior of the Consent Registry such as response format, or pagination.

The Consent Recorder or Consent Authorization Server Actor may use GET or POST based searches. The Consent Registry shall support both GET and POST based searches [{{site.data.fhir.path}}http.html#search]({{site.data.fhir.path}}http.html#search).

###### 2:3.108.4.1.2.1 Query Search Parameters

The Consent Recorder or Consent Authorization Server may supply, and the Consent Registry shall be capable of processing, all query parameters listed below. All query parameter values shall be appropriately encoded per RFC3986 “percent” encoding rules. Note that percent encoding does restrict the character set to a subset of ASCII characters which is used for encoding all other characters used in the URL.

The Consent Recorder or Consent Authorization Server shall include search parameter `patient` or `patient.identifier`, and `status`. The Consent Registry must implement the parameters described below. The Consent Registry may choose to support additional query parameters beyond the subset listed below. Any additional query parameters supported shall be supported according to the core FHIR specification. Such additional parameters are considered out of scope for this transaction. Any additional parameters not supported should be ignored. See [{{site.data.fhir.path}}search.html#errors]({{site.data.fhir.path}}search.html#errors).

**actor**:
This parameter is of type Reference. This parameter would be used to look for Consent Resources that explicitly identify an actor for which there is a provision. Note that the absence of an explicit actor does not mean an absence of applicability of Consent resources.

**patient**:
This parameter is of type Reference(Patient). The Consent Recorder or Consent Authorization Server may get this reference using the [PDQm](https://profiles.ihe.net/ITI/TF/Volume1/ch-38.html) or [PIXm](https://profiles.ihe.net/ITI/TF/Volume1/ch-41.html) Profile. When the patient parameter is used, the Patient reference would need to be accessible to both the Consent Recorder or Consent Authorization Server and the Consent Registry.

**patient.identifier**:
This parameter, of type token, specifies an identifier associated with the patient to which the Consent Resource is assigned.  See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type. This use of **patient.identifier** follows the [FHIR Chaining Parameters]({{site.data.fhir.path}}search.html#chaining) search methodology.

**status**:
This parameter, of type token, specifies the status of the Consent Resource. The use of this parameter can eliminate Consent resources that are in states that are not of interest, such as draft or inactive.

###### 2:3.108.4.1.2.2 Populating Expected Response Format

The FHIR standard provides encodings for responses as either XML or JSON. The Consent Registry shall support both message encodings, whilst the Consent Recorder or Consent Authorization Server shall support one and may support both.

See [ITI TF-2x: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for details.

##### 2:3.108.4.1.3 Expected Actions

The Consent Registry shall process the query to discover the Consent entries that match the search parameters given.

#### 2:3.108.4.2 Search Response

The Consent Registry returns a HTTP Status code appropriate to the processing as well as a Bundle of the matching Consent Resources.

##### 2:3.108.4.2.1 Trigger Events

The Consent Registry has processed has processed the search interaction.

##### 2:3.108.4.2.2 Message Semantics

Based on the query results, the Consent Registry will either return an error or success. Guidance on handling Access Denied related to use of 200, 403 and 404 can be found in [ITI TF-2x: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

When the Consent Registry needs to report an error, it shall use HTTP error response codes and should include a FHIR OperationOutcome with more details on the failure. See FHIR [{{site.data.fhir.path}}http.html]({{site.data.fhir.path}}http.html) and [{{site.data.fhir.path}}operationoutcome.html]({{site.data.fhir.path}}operationoutcome.html).

If the search interaction is processed successfully, whether or not any Consent Resources are found, the HTTP status code shall be 200. The search response message shall be a Bundle Resource containing zero or more Consent Resources. If the Consent Registry is sending warnings, the Bundle Resource shall also contain an OperationOutcome Resource that contains those warnings.

The response shall adhere to the FHIR Bundle constraints specified in [ITI TF-2x: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles). 

###### 2:3.108.4.2.2.1 Consent Resource Contents

The Consent Resources returned shall be compliant with the FHIR specification [{{site.data.fhir.path}}consent.html]({{site.data.fhir.path}}consent.html).

The Consent Resources returned should be compliant with the IHE restrictions on the Consent Resource.

##### 2:3.108.4.2.3 Expected Actions

The Consent Recorder or Consent Authorization Server shall process the results according to application-defined rules. The Consent Recorder or Consent Authorization Server should be robust as the response may contain Consent Resources that match the query parameters but are not compliant with the IHE Consent constraints defined here.

#### 2:3.108.4.3 Create Request

The Consent Recorder has a need to create a new Consent Resource.

##### 2:3.108.4.3.1 Trigger Events

A new Consent Resource needs to be recorded.

##### 2:3.108.4.3.2 Message Semantics

The [FHIR create interaction]({{site.data.fhir.path}}http.html#create) is used. See [{{site.data.fhir.path}}http.html#create]({{site.data.fhir.path}}http.html#create).

[Update as Create]({{site.data.fhir.path}}http.html#upsert) is not required but may be supported by the actors beyond the scope of this transaction.

##### 2:3.108.4.3.3 Expected Actions

The Consent Registry shall handle the create request according to policy. See the discussion in the [FHIR create interaction]({{site.data.fhir.path}}http.html#create).

#### 2:3.108.4.4 Create Response

The Consent Recorder has received an Create Request and needs to return a response.

##### 2:3.108.4.4.1 Trigger Events

The Consent Registry has processed the [FHIR create interaction]({{site.data.fhir.path}}http.html#create).

##### 2:3.108.4.4.2 Message Semantics

See the [FHIR create interaction]({{site.data.fhir.path}}http.html#create). The success or failure of the create interaction is indicated by the http response code (e.g., 400, 200, etc.).

##### 2:3.108.4.4.3 Expected Actions

There is no defined expected actions to be taken by the Consent Recorder, however user interface and workflow may be affected by the response code.

#### 2:3.108.4.5 Read Request

The Consent Recorder or Consent Authorization Server have a Consent `id` and need to retrieve the current Consent resource instance. The `id` may have been discovered via some undefined method. For example an authorization token request may be referring to a Consent by `id`. Note that search can also be used given an `id`, but will result in a Bundle, whereas the Read Request returns only the Consent resource.

##### 2:3.108.4.5.1 Trigger Events

A specific Consent is needed and the `id` is known.

##### 2:3.108.4.5.2 Message Semantics

The [FHIR read interaction]({{site.data.fhir.path}}http.html#read) or [FHIR vread interaction]({{site.data.fhir.path}}http.html#vread) are used. See [{{site.data.fhir.path}}http.html#vread]({{site.data.fhir.path}}http.html#vread) and [{{site.data.fhir.path}}http.html#vread]({{site.data.fhir.path}}http.html#vread). The Consent Registry shall support both interactions.

##### 2:3.108.4.5.3 Expected Actions

The Consent Registry shall handle the read or vread request according to policy. See the discussion in the [FHIR read interaction]({{site.data.fhir.path}}http.html#read) and [{{site.data.fhir.path}}http.html#vread]({{site.data.fhir.path}}http.html#vread).

#### 2:3.108.4.6 Read Response

The Consent Recorder has received a read or vread request and needs to return a response.

##### 2:3.108.4.6.1 Trigger Events

The Consent Recorder has processed the [FHIR read interaction]({{site.data.fhir.path}}http.html#read) or [FHIR vread interaction]({{site.data.fhir.path}}http.html#vread).

##### 2:3.108.4.6.2 Message Semantics

See the [FHIR read interaction]({{site.data.fhir.path}}http.html#read) and [FHIR vread interaction]({{site.data.fhir.path}}http.html#vread). The success or failure of the read interaction is indicated by the http response code (e.g., 404, 200, etc.).

##### 2:3.108.4.6.3 Expected Actions

There is no defined expected actions to be taken, however user interface and workflow may be affected by the response code.

#### 2:3.108.4.7 Update Request

The Consent Recorder has a need to update an identified existing Consent Resource. This might be because the terms of a Consent has changed, or might be because a `Consent.status` needs to be updated, such as to mark a Consent as `inactive`.

##### 2:3.108.4.7.1 Trigger Events

The Consent Recorder has a need to update an identified existing Consent Resource.

##### 2:3.108.4.7.2 Message Semantics

The [FHIR update interaction]({{site.data.fhir.path}}http.html#update) is used. See [{{site.data.fhir.path}}http.html#update]({{site.data.fhir.path}}http.html#update).

[Update as Create]({{site.data.fhir.path}}http.html#upsert), [Conditional update]({{site.data.fhir.path}}http.html#cond-update), and [Patch]({{site.data.fhir.path}}http.html#patch) are not required but may be supported by the actors beyond the scope of this transaction.

##### 2:3.108.4.7.3 Expected Actions

The Consent Registry shall handle the update request according to policy. See the discussion in the [FHIR update interaction]({{site.data.fhir.path}}http.html#update).

#### 2:3.108.4.8 Update Response

The Consent Recorder has received an Update Request and needs to return a response.

##### 2:3.108.4.8.1 Trigger Events

The Consent Recorder has processed the [FHIR update interaction]({{site.data.fhir.path}}http.html#update).

##### 2:3.108.4.8.2 Message Semantics

See the [FHIR update interaction]({{site.data.fhir.path}}http.html#update). The success or failure of the update interaction is indicated by the http response code (e.g., 400, 200, etc.).

##### 2:3.108.4.8.3 Expected Actions

There is no defined expected actions to be taken by the Consent Recorder, however user interface and workflow may be affected by the response code.

#### 2:3.108.4.9 Delete Request

The Consent Recorder could use this interaction to delete a Consent Resource. Note that Delete may not be supported, and thus the use of Update to a `Consent.status` to `inactive` may be the more proper policy. Note that when a Consent Resource is [created in error]({{site.data.fhir.path}}lifecycle.html#error), the use of Update to a `Consent.status` of `entered-in-error` may be preferred.

##### 2:3.108.4.9.1 Trigger Events

The Consent Recorder has a need to delete an identified existing Consent Resource.

##### 2:3.108.4.9.2 Message Semantics

The [FHIR delete interaction]({{site.data.fhir.path}}http.html#delete) is used. See [{{site.data.fhir.path}}http.html#delete]({{site.data.fhir.path}}http.html#delete).

[Conditional Delete]({{site.data.fhir.path}}http.html#3.1.0.7.1) is not required but may be supported by the actors beyond the scope of this transaction.

##### 2:3.108.4.9.2 Expected Actions

The Consent Registry shall handle the delete request according to policy. See the discussion in the [FHIR delete interaction]({{site.data.fhir.path}}http.html#delete).

#### 2:3.108.4.10 Delete Response

The Consent Recorder has received a Delete Request and needs to return a response.

##### 2:3.108.4.10.1 Trigger Events

The Consent Recorder has processed the [FHIR delete interaction]({{site.data.fhir.path}}http.html#delete).

##### 2:3.108.4.10.2 Message Semantics

See the [FHIR delete interaction]({{site.data.fhir.path}}http.html#delete). The success or failure of the delete interaction is indicated by the http response code (e.g., 405, 200, etc.).

##### 2:3.108.4.10.3 Expected Actions

There is no defined expected actions to be taken by the Consent Recorder, however user interface and workflow may be affected by the response code.

### 2:3.108.5 Security Considerations

See [PCF Security Considerations](volume-1.html#security-considerations).

This transaction should not return information that the Consent Recorder or Consent Authorization Server is not authorized to access. Where authorization here is inclusive of system, app, and user according to local policy, patient consents, and security layering. However, the transaction may return Consent resources that have Reference elements that may not have access to. This is to say that the authorization need only be to the content returned in the Bundle. There may be references (URLs) for which the content is not authorized. This is considered proper as the client would need to retrieve the content pointed to by those references, and at that time the proper authorization decision would be made on that context and content. In this way it is possible for a client to get Consent resources that are pointing at data that the client is not authorized to retrieve. Thus, the URLs used must be carefully crafted so as to not expose sensitive data in the URL value.

#### 2:3.108.5.1 Security Audit Considerations

Recording audit logs is important for Security, Privacy, and data integrity assurance.

##### 2:3.108.5.1.1 Consent Recorder Audit

The Consent Recorder when grouped with ATNA Secure Node or Secure Application shall be able to record a [Patient specific REST event AuditEvent as defined](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities) in [IHE Basic Audit Log Patterns (BALP)](https://profiles.ihe.net/ITI/BALP/index.html).

##### 2:3.108.5.1.2 Consent Authorization Server Audit

The Consent Authorization Server when grouped with ATNA Secure Node or Secure Application shall be able to record a [Patient specific REST event AuditEvent as defined](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities) in [IHE Basic Audit Log Patterns (BALP)](https://profiles.ihe.net/ITI/BALP/index.html).

##### 2:3.108.5.1.2 Consent Registry Audit

The Consent Recorder when grouped with ATNA Secure Node or Secure Application shall be able to record a [Patient specific REST event AuditEvent as defined](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities) in [IHE Basic Audit Log Patterns (BALP)](https://profiles.ihe.net/ITI/BALP/index.html).


---

// File: input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE profiles or the General Introduction appendices and is not a part of the PCF Profile. The content here will be incorporated into the target narrative at a future time, usually when PCF Profile goes normative.
</div>

## IHE Technical Frameworks General Introduction Appendix A: Actors

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}

| Actor                         | Definition                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------|
| Consent Recorder | responsible for the capturing of consent from the Patient given policies available |
| Consent Registry | holds Consent resources |
| Consent Authorization Server | makes authorization decisions based on a given access requested context |
| Consent Enforcement Point | enforces consent decisions made by the **Consent Authorization Server** Actor |
{:.grid .table-striped}


## IHE Technical Frameworks General Introduction Appendix B: Transactions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                    | Definition                                                                              |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| [Access Consent] (ITI-108.html) \[ITI-71\]] |  used to Create, Read, Update, Delete, and Search on Consent resources |
{:.grid .table-striped}

## IHE Technical Frameworks General Introduction Appendix D: Glossary

|------------------------------------------------|
| Editor, add the following new or modified terms to the [IHE Technical Frameworks General Introduction Appendix D](https://profiles.ihe.net/GeneralIntro/ch-D.html): |
{:.grid .bg-info}

| Term                         | Definition                                                    | Acronyms/Abbreviations | Synonyms    |
| ---------------------------- | --------------------------------------------------------------| -----------------------| ------------|
**Trust Domain** | Systems and entities that are trusted due to membership in a domain, where this membership includes agreement with the policies of the trust domain. A Trust Domain often spans multiple domains, such as a Health Information Exchange or a Federation of Health Information Domains. An example is the [XDS Affinity Domain](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html), or the [XCA Community](https://profiles.ihe.net/ITI/TF/Volume1/ch-18.html).
**Patient Privacy Policy Domain** | The domain (Trust Domain) for which a Patient Privacy Policy applies. The Patient Privacy Policy Domain may cover an Organization, Health Information Exchange, or a defined set of Communities. The Patient Privacy Policy Domain is a Trust Domain.
**Domain Privacy Policy** / **Overarching Policy** | Defines acceptable use of private data within the domain. The overarching policy are defined and enforced in the broader context of a law, regulation, or organizational policy that defines the scope, authority, and limitations. Within the Domain Privacy Policy will be a set of Patient Privacy Policies, that are used at the Privacy Consent level. The Domain Privacy Policy is responsible for defining users, roles, classifications, and the possible parameters the patient will be offered during the Privacy Consent Ceremony. The Domain Privacy Policy must address the appropriate use of data when no Consent has been captured, how conflicting policies are to be resolved, and when a restriction may cause a patient or operator safety concern (e.g., Break-Glass).
**Patient Privacy Policy** | A Patient Privacy Policy explains appropriate use of data/documents in a way that provides choices to the patient. The Patient Privacy Policy sits within the Domain Privacy Policy. A Patient Privacy Policy will identify who has access to information, and what information is governed by the policy (e.g., under what conditions will **data** be marked as containing that type of information). The Patient Privacy Policy may be a consent policy, dissent policy, authorization policy, etc.
**Patient Privacy Consent Resource** | (a.k.a., Privacy Consent) A record resource that follows the BPPC profile or the PCF profile and captures the act of the consent ceremony and the details. The Consent references the basis Patient Privacy Policy. The Consent may be agreement with the policy, dissent with the policy, or may contain further constraints and authorizations based on the Patient Privacy Policy.
**Patient Privacy Policy Identifier** | A Patient Privacy Policy Domain-assigned globally unique identifier that identifies the Patient Privacy Policy.
**Patient Identified Data** |  Are data about an identified Patient. This may be health information, but for the purposes of this Appendix it is any personally identifiable information (PII).
**Data Holder** / **Custodian** | A controlling entity of some set of Patient Identifiable Data.
**Patient** / **Subject of data** / **Consumer** | The patient is the human-subject of health-related data. The use of the term patient is not to imply only subjects under current treatment.
**Privacy Consent** | (a.k.a., Consent) Binding agreement between the Patient / Subject of the data and the Data Holder as to the appropriate use of data. The consent may include constraints and obligations. The agreement may be executed by delegates, and the agreement may include other parties that are held to the terms. Consent term is used here in broad definition not limited by the definition of consent in regulation or laws.
**Privacy Consent Ceremony** | All the steps leading up to and including the acceptance by the Patient and Custodian of the terms of a Privacy Consent. The ceremony is responsible for assuring the patient is well informed and understands the terms. The ceremony may include many people and tools.
**Privacy Parameters** | Rules that are allowed to be specified by the patient as deviations from the Patient Privacy Policy. Such as limiting access to data published in a date range, data published by a given author, or data with a specific kind of restricted health sensitivity.
**Privacy Preferences** | Published by the Patient as desired privacy conditions. These preferences may be used during a Consent ceremony to inform the privacy conditions.
**Data Access Requests** | Defined interactions in which data are shared within a Trust Domain in keeping with the Patient Privacy Consent terms. Requests for data to leave the control of the Data Holder. Most requests will be from within a broader Trust Domain, but some requests may be to parties outside a Trust Domain.
**Authentic Requests** | Requests that can be proven to be from within the trust domain. Authentic Requests carry well-defined parameters of the request including identity of data recipient, purpose of use the data will be used, and the data characteristics scope.
**Data Classification** |  Patient identifiable data is considered health information and is subject to a set of constraints as given to normal health information.
**Security Labeling Service** | A service that classifies data into a defined set of sensitivity classifications.
**Normal Health Data** | The majority of Patient Identified Data are health information and is considered more sensitive than non-health information, this data would be classified as Normal Health Data. Normal Health Data is sensitive.
**Restricted Health Data** | Some Patient Identifiable Data are considered more sensitive and is classified as Restricted Health Data. Data may be considered Restricted by regulation or laws, or may be deemed by the patient to be more sensitive. Some examples of restricted health data are data that describes a stigmatizing sensitive health topic such as mental health, drug abuse, sexual health, or other.
**Users** | An identifiable agent, usually human, that has some defined role within the Organization within which they operate. A User may be the Patient herself, a patient related party, clinician, researcher, billing clerk, etc. These different functional roles will have different needs to access data. For example, registration clerks may need to be able to access patient demographics, billing, and contacts but would not need access to clinical content.
{:.grid .table-striped}

## Updates to \[ITI-71\]

|------------------------------------------------|
| Editor, Update the IUA [Transaction \[ITI-71\]](https://profiles.ihe.net/ITI/IUA/index.html#371-get-access-token-iti-71) as follows, adding section 3.71.4.2.2.1.4 |
{:.grid .bg-info}

###### 3.71.4.2.2.1.4 Privacy Consent on FHIR grouping

When grouped with the PCF Consent Authorization Server, and where the Access Decision includes consideration of Privacy Consent, the following `ihe_pcf` oAuth extension shall be included.

The Authorization Server and Resource Server shall support the following `extensions` parameter:

- `patient_id`: 1..1 Patient identifier related to the Patient Privacy Policy Identifier. Its value should be the patient identifier in CX syntax or as a FHIR full URL.
- `doc_id`: 1..* Patient Privacy Policy Acknowledgment Document. Its value should  be an URN or as a FHIR full URL.
- `acp`: 0..* Patient Privacy Policy Identifier. This is usually the URL from the `Consent.policy.uri` which is either a coded form and/or a human readable form. The URL would follow http negotiate to return the appropriate format given the mime-type negotiation.
- `residual`: 0..* Given that the oAuth token and scope identifies what is overall allowed, the `residual` carries residual rules from the PCF Consent Authorization Server to be enforced by the PCF Consent Enforcement Point.
  - `type` : 1..1 type of this rule, either forbid or permit
  - `securityLabel` : 0..* Security Labels that define affected resources
  - `dataPeriod` : 0..* Timeframe for data controlled by this rule
  - `data` : 0..* Data controlled by this rule
    - `meaning` : 1..1 Data controlled by this rule relationship to reference
    - `reference` : 1..1 Referenced data

If present, the claims shall be wrapped in an `extensions` object with key `ihe_pcf` and a JSON value object containing the claims. Shown as a JSON Template:

```
"extensions" : {  
  "ihe_pcf" : {  
    "patient_id": { Reference(Patient)}, // who the consent subject is
    "doc_id": [{ Reference(Consent)}], // what the consent(s) were used
    "acp": ["<uri>"], // basis policy the consent(s) are built upon
    "residual" : [{
      "type" : "<code>", // forbid | permit
      "securityLabel" : [{ Coding }], // Security Labels that define affected resources
      "dataPeriod" : { Period }, // Timeframe for data controlled by this rule
      "data" : [{ // Data controlled by this rule
        "meaning" : "<code>", // R!  instance | related | dependents | authoredby
        "reference" : { Reference(Any) } // R!  The actual data reference
      }],
    }]
  }
}
```

Given that the token is authorizing access to the defined Scope, then the `residual` is focused on results that would be forbidden to be returned (forbid). Note that `forbid` is not identical to `Consent.provision.type` of `deny` but is related:

- the oAuth scope indicates the gross data that is permitted
- residual `forbid` indicates data that is forbidden, and shall not be returned
- residual `permit` overrides an explicit residual `forbid`
- if no `forbid` applies, then the data is allowed to flow back to the requester

Example: Given [Consent allowing data authored within a timeframe](Consent-ex-consent-intermediate-timeframe.html), which limits access to only data authored within 2022. This is a root `.provision` restriction. Note that the purpose restriction is handled in the [\[ITI-71\]](https://profiles.ihe.net/ITI/IUA/index.html#371-get-access-token-iti-71) `purpose_of_use`, so the `residual` need only address the `dataPeriod`.

```json
  "provision" : {
    "type" : "permit",
    "dataPeriod" : {
      "start" : "2022-01-01",
      "end" : "2022-12-31"
    }
  }
```

- The restriction to the given purpose (Treatment, Payment, and Operations) would be expressed in the `ihe_iua` extension.
  - The other `ihe_iua` extension parameters are not shown below.
- The restriction to data timeframe would need to be expressed:
  - first `forbid` all data
  - second `permit` data authored in the given timeframe

```json
"extensions" : {
  "ihe_iua" : {
    ...
    "purpose_of_use" : [{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "TREAT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HPAYMT"
      },{
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        "code" : "HOPERAT"
    }]
  }
  "ihe_pcf" : {
    "patient_id" : "Patient/ex-patient",
    "doc_id" : ["Consent/ex-consent-intermediate-timeframe"],
    "residual" : [{
        "type" : "forbid",
      },{
        "type" : "permit",
        "dataPeriod" : {
          "start" : "2022-01-01",
          "end" : "2022-12-31"
        }
      }
    ]
  }
}
```


---

// File: input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype. We expect the maturity of the content will improve over time. For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>


**TODO: fill in the goals of the testing. **

## Introduction

Overall test plan leverages the Profiles, and Examples shown on the [Artifacts Summary](artifacts.html). The [Profiles](artifacts.html) listed are describing the constraints that would be adhered to by actors claiming conformance to this implementation guide. Thus any applicable Resources that are known to have been published by an app or server MUST be conformant to these profiles as appropriate.

The Examples listed in [Example Instances](artifacts.html) are example instances. Some are conformant to the profiles. Other examples that either assist with the structure of the examples (e.g., Patient and Encounter) or are examples that should be able to handle in various ways.

This section will be filled in as the IHE Connectathon need drives the creation of the test plans, test procedures, test tools, and reporting.

**TODO: include actor based tests, include positive and edge cases. **

### Unit Test Procedure

Unit Tests in this context is where a SUT is tested against a simulator or validator. A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Where a reference implementation is used the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria.

### Integration Test Procedure

Integration Tests in this context is where two SUT of paired actors test against each other. In this case, the subset of tests that can be tested is the intersection. Testing only this intersection is necessary but not sufficient. The testing must also include the capability of the client to exercise the test scenarios that this SUT can test, to determine that failure-modes are handled properly by both SUT.


---

// File: input/pagecontent/volume-1.md

The **Privacy Consent on FHIR (PCF)** builds upon a basic Identity and Authorization model of [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) to provide consent-based access control. The Privacy Consent on FHIR is thus focused only on Access Control decisions regarding the parameters of the data subject (patient) privacy consent. The Privacy Consent on FHIR leverages these basic Identity and Authorization decisions as context setting for the authorization decision and enforcement. For example, a user that would never be allowed access would be denied access at the IUA level without invoking PCF, and where PCF will further evaluate authorization based on Privacy Consents.

This is to say that PCF does not define:

- how one identifies the patient, this is the role of other Implementation Guides like [PDQm](https://profiles.ihe.net/ITI/PDQm/index.html), [PIXm](https://profiles.ihe.net/ITI/PIXm/index.html), [PIMR](https://profiles.ihe.net/ITI/PMIR/index.html), [etc.](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#5-patient-identity-management);
- how the patient experiences the ceremony of the consent act, this is systems design, user interface design, and [policy language](ch-P.html);
- how one asks for data or communicates data, this is the role of other Implementation Guides like [MHD](https://profiles.ihe.net/ITI/MHD/index.html), [MHDS](https://profiles.ihe.net/ITI/MHDS/index.html), [QEDm/mXDE](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#4-consuming-data-as-fhir-resources), etc.;
- how one tags data with security/privacy sensitivity labels, this is the role of a systems design that might utilize a [Security labeling Service](ch-P.html#SLS); and
- how users or applications are identified and foundationally authorized, this is the role of other Implementation Guides like [IUA](https://profiles.ihe.net/ITI/IUA/index.html), and OpenID-Connect.

But PCF enhances and relies upon these other Implementation Guides to protect sensitive resources according to Patient-specific Consents.

<a name="actors-and-transactions"> </a>

## 1:53.1 PCF Actors, Transactions, and Content Modules

This section defines the actors and transactions in this implementation guide.

The figure below shows the actors directly involved in the PCF Profile and the relevant transactions between them.
Internet User Authorization ([IUA](https://profiles.ihe.net/ITI/IUA/index.html)) is shown as the PCF-specific actors are reliant on IUA actors.

<figure>
{%include ActorsAndTransactions.svg%}
<figcaption><b>Figure 1:53.1-1: PCF Actor Diagram</b></figcaption>
</figure>
<br clear="all">

The actors participate in the following transactions.

**Table 1:53.1-1: PCF Profile - Actors and Transactions**

| Actors                       | Transactions                      | Direction | Optionality | Reference      |
|------------------------------|-----------------------------------|-----------|-------------|----------------|
| [Consent Recorder](#consentRecorder)  | Access Consent                    | Initiator | R           | [ITI TF-2: 3.108](ITI-108.html) |
| [Consent Registry](#consentRegistry)  | Access Consent                    | Responder | R           | [ITI TF-2: 3.108](ITI-108.html) |
| [Consent Authorization Server](#consentAuthorizationServer) | Access Consent                    | Initiator | R (Note 1)           | [ITI TF-2: 3.108](ITI-108.html) |
| [Consent Enforcement Point](#consentEnforcementPoint) | none |  |  |  |
{: .grid}

Note 1: Consent Authorization Server, when operating only in an Implicit environment, does not need to demonstrate use of ITI-108.

The following is a repeat of the IUA actors and transactions for clarity. The PCF Implementation Guide places grouping requirements and behavior upon the IUA actors relative to the grouped PCF Actors.

**Table 1:53.1-2: IUA Profile - Actors and Transactions**

| Actors                       | Transactions                      | Direction | Optionality | Reference      |
|------------------------------|-----------------------------------|-----------|-------------|----------------|
| [IUA: Authorization Client](https://profiles.ihe.net/ITI/IUA/index.html#34111-authorization-client)         | Get Access Token                  | Initiator | R           | [ITI TF-2: 3.71](other.html#updates-to-iti-71) |
|                              | Incorporate Access Token          | Initiator | R           | [ITI TF-2: 3.72](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72) |
|                              | Get Authorization Server metadata | Initiator | O           | [ITI TF-2: 3.103](https://profiles.ihe.net/ITI/IUA/index.html#3103-get-authorization-server-metadata-iti-103) |
| [IUA: Authorization Server](https://profiles.ihe.net/ITI/IUA/index.html#34112-authorization-server)  | Get Access Token                  | Responder | R           | [ITI TF-2: 3.71](other.html#updates-to-iti-71) |
|                              | Introspect Token                  | Responder | O (Note 1)  | [ITI TF-2: 3.102](https://profiles.ihe.net/ITI/IUA/index.html#3102-introspect-token-iti-102) |
|                              | Get Authorization Server metadata | Responder | O           | [ITI TF-2: 3.103](https://profiles.ihe.net/ITI/IUA/index.html#3103-get-authorization-server-metadata-iti-103) |
| [IUA: Resource Server](https://profiles.ihe.net/ITI/IUA/index.html#34113-resource-server)    | Introspect Token                  | Initiator | O (Note 1)     | [ITI TF-2: 3.102](https://profiles.ihe.net/ITI/IUA/index.html#3102-introspect-token-iti-102) |
|                              | Incorporate Access Token          | Responder | R           | [ITI TF-2: 3.72](https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72) |
|                              | Get Authorization Server metadata | Initiator | O           | [ITI TF-2: 3.103](https://profiles.ihe.net/ITI/IUA/index.html#3103-get-authorization-server-metadata-iti-103) |
{: .grid}

Note 1: Authorization Server or Resource Server Actors shall support at least one of the following options: JWT Token, or Token Introspection.

### 1:53.1.1 Actors

The actors in this profile are described in more detail in the sections below.

<a name="consentRecorder"> </a>

#### 1:53.1.1.1 Consent Recorder

The **Consent Recorder** is responsible for the capturing of consent from the Patient given policies available. This actor is responsible for assuring that:

- the Patient fully understood the terms of the Consent, and
- the Consent terms agreed to are acceptable to the organization responsible and the abilities of the **Consent Authorization Server** and **Consent Enforcement Point** Actors.

The **Consent Recorder** may utilize other resources to interact with the Patient, and to capture the evidence of the Consent ceremony. The interaction with the Patient can be a very complex system that utilizes applications, web user interface, and forms; but may also be a paper process that results in ink signatures on paperwork. The workflow leading up to the **Consent Recorder** may also use FHIR Resources such as a FHIR Questionnaire or a DocumentReference / Binary. Where a DocumentReference and Binary are used to capture the Consent ceremony, the preservation should utilize the [MHD](https://profiles.ihe.net/ITI/MHD) implementation guide.

[FHIR Capability Statement for Consent Recorder](CapabilityStatement-IHE.PCF.consentRecorder.html)

<a name="consentRegistry"> </a>

#### 1:53.1.1.2 Consent Registry

The **Consent Registry** holds Consent resources. This includes active, inactive, and expired Consents. The **Consent Registry** does not have special understanding of the Consent other than as a FHIR `Consent` Resource. It, thus, is not responsible for assuring that the Consent terms are acceptable or enforceable; this is the responsibility of the **Consent Recorder**.

[FHIR Capability Statement for Consent Registry](CapabilityStatement-IHE.PCF.consentRegistry.html)

<a name="consentAuthorizationServer"> </a>

#### 1:53.1.1.3 Consent Authorization Server

The **Consent Authorization Server** makes authorization decisions based on a given access requested context (e.g., oAuth, query/operation parameters), organizational policies, and current active `Consent` resources. The **Consent Authorization Server** is often implemented utilizing other authorization services, taking input from the user identity (e.g., Open-ID-Connect), and application identity and authorization (e.g., IUA). These predicate authorizations provide the security context upon which the Privacy `Consent` constraints are applied. The result is an authorization token used to request access resources, and is used by the **Consent Enforcement Point**.

<a name="consentEnforcementPoint"> </a>

#### 1:53.1.1.4 Consent Enforcement Point

The **Consent Enforcement Point** enforces consent decisions made by the **Consent Authorization Server**. This includes deny, permit, and permit with filtering of results. The **Consent Enforcement Point** must be grouped with an **IUA Resource Server** and is invoked when the authorization token includes consent-based rules to be enforced.

### 1:53.1.2 Transaction Descriptions

The transactions in this profile are summarized in the sections below.

#### 53.1.2.1 ITI-108 Access Consent transaction

This transaction is used to Create, Read, Update, Delete, and Search on Consent resources.

For more details see the detailed [Access Consent](ITI-108.html).

#### 1:53.1.2.2 Implied Enforcement

The **Consent Enforcement Point** is invoked by the **IUA Resource Server** when there is consent rules to be enforced. There is no externally defined transaction but the **Consent Enforcement Point** indirectly gets the consent rules to be enforced from the **IUA Resource Server**, thereby implicitly learning the details of the token. How this is done, and how the enforcement is achieved is a Systems Design concern outside the scope of an Interoperability specification such as PCF.

<a name="actor-options"> </a>

## 1:53.2 PCF Actor Options

Options that may be selected for each actor in this implementation guide, are listed in Table 1:53.2-1 below. Dependencies
between options when applicable are specified in notes.

**Table 1:53.2-1**

| Actor              | Option Name |
|--------------------|-------------|
| Consent Recorder    | Explicit Basic  |
| Consent Recorder    | Explicit Intermediate Data Timeframe |
| Consent Recorder    | Explicit Intermediate Data by id |
| Consent Recorder    | Explicit Intermediate Data Author |
| Consent Recorder    | Explicit Intermediate Data Relationship |
| Consent Recorder    | Explicit Intermediate Additional PurposeOfUse |
| Consent Recorder    | Explicit Advanced |
| Consent Registry   | none |
| Consent Authorization Server    | Implicit   |
| Consent Authorization Server    | Explicit Basic  |
| Consent Authorization Server    | Explicit Intermediate Data Timeframe |
| Consent Authorization Server    | Explicit Intermediate Data by id |
| Consent Authorization Server    | Explicit Intermediate Data Author |
| Consent Authorization Server    | Explicit Intermediate Data Relationship |
| Consent Authorization Server    | Explicit Intermediate Additional PurposeOfUse |
| Consent Authorization Server    | Explicit Advanced |
| Consent Enforcement Point   | Implicit  |
| Consent Enforcement Point   | Explicit Basic  |
| Consent Enforcement Point   | Explicit Intermediate Data Timeframe |
| Consent Enforcement Point   | Explicit Intermediate Data by id |
| Consent Enforcement Point   | Explicit Intermediate Data Author |
| Consent Enforcement Point   | Explicit Intermediate Data Relationship |
| Consent Enforcement Point   | Explicit Intermediate Additional PurposeOfUse |
| Consent Enforcement Point   | Explicit Advanced |
{: .grid}

Note 1: Explicit Intermediate Options and Explicit Advanced Option require that Explicit Basic Option is selected.

Three levels of maturity are defined which are incrementally more difficult to implement: Support for these Basic, Intermediate, and Advanced policies is support for the ability to provide these capabilities. The actual policy provided to the Patient would be some subset of this support that the data custodian is willing to enforce.

When the Implicit Consent Option is not declared to be implemented, then PCF expects "Deny all" or "Permit all authorized uses" for the overarching policy.

### 1:53.2.1 Implicit Consent Option

The Implicit Policy Option indicates that there is a default policy that is used when there is no Consent found on file for a given patient. This Implicit Policy shall support the following "overarching" policies:

| canonical URI | Definition |
|---------------|----------- |
`https://profiles.ihe.net/ITI/PCF/Policy-basic-normal` | Permit for clinicians that have authorization for Treatment use, but does not authorize other access. This presumes that basic user access control can differentiate legitimate clinical users and purposes of use.
`https://profiles.ihe.net/ITI/PCF/Policy-all-normal` | Permit for all authorized uses. This presumes that basic user access control will only allow authorized users and purposes of use.
`https://profiles.ihe.net/ITI/PCF/Policy-break-glass-only` | Deny for all use, except when the user is a clinician with authorization to declare a medical patient-safety override (a.k.a. Break-Glass).
`https://profiles.ihe.net/ITI/PCF/Policy-deny` |  Deny all.
{: .grid}

Other overarching policies may also be implemented, but their behavior is not defined in PCF.

The operational environment chooses which of these policies they will use, so in operational use only one of these is in effect as the "implicit policy".

Neither the definition of permitted use, nor how break-glass is declared is defined here. These are  policy expectations of the environment and are expected to be configured into the IUA authorization decisions and enforcement.

Implicit Consent Option has no ability to have Patient-specific parameters. When Patient-specific parameters are needed, Explicit options are required.


### 1:53.2.2 Explicit Basic Option

The Explicit Basic Option allows for patient-specific consent to be recorded and changed. This option sets the foundation for consents that expire, and consents that change based on agreements between the organization and the patient. The lack of a consent for a given patient would be covered by the Implicit Consent Option in place. 

Typically the Implicit Consent Option is either a Deny-All or a Permit-All-Authorized-Uses. The Deny-All sets the groundwork for an environment where Consent is required for any activity to happen (often called OPT-IN). The Permit-All-Authorized-Uses sets the groundwork for an environment where Consent can be used to refine or dissent (often called OPT-OUT). In all cases, once a Consent is recorded then the terms of the Consent override any Implicit policy.

The Explicit Basic Option indicates that there is support for a basic set of patient-specific parameters. The following set of patient-specific parameters may be used to permit or deny:

1. The overarching policy that the patient and organization have agreed upon. An environment can use the overarching policies defined above, or define policies specific to its local needs. For example, in an Implicit Deny-All, the Explicit Consents might be based on the Permit-All-Authorized-Users policy.
2. The timeframe for which the consent applies, enabling consents that have a time limit.
3. Who is permitted/denied: This may be a device, relatedPerson, Practitioner, or Organization. This parameter enables the naming of agents that should be allowed access or denied access. This presumes that the identified agent is appropriately identified (provisioned) and authorized to make the request; typically through some application authorization and role-based access control. The user identity is mapped to a FHIR agent type Resource using the agent type Resource `.identifier` element (e.g., `Practitioner.identifier` would hold the user id).
4. Purpose of use permitted/denied: There are a number of PurposeOfUse that are available to be explicably identified as an authorized purposeOfUse or denied purposeOfUse. This presumes that the requesting user has the authorization to request for the requested purposeOfUse. That is to say that the Consent Authorization Server does not determine whether the user/client is authorized to make the purposeOfUse declaration and this must be previously decided by the security context (see cascaded oAuth) --  Treatment, Payment, or Operations.

See [Basic Consent](content.html#basic) Content Profile

### 1:53.2.3 Explicit Intermediate options

The following Options shall be used in conjunction with **Explicit Basic Option**, and may be used with **Explicit Advanced Option**. The Explicit Intermediate Options can be implemented and/or used individually or combined. When combined within one parameter, the logic provided by each option is combined. The data scoping Explicit Intermediate options are not expected to be found combined on one parameter, but may be combined within a Consent providing different data scoping capability. For example, a consent that indicates that a data timeframe is used to deny insurance access, with a different parameter indicting that a data relationship is allowed access to a research project.

See [Intermediate Consent](content.html#intermediate) Content Profile.

#### 1:53.2.3.1 Explicit Intermediate Data Timeframe Option

This data scoping option provides for the Consent to have one or more permit/deny parameter that indicates a timeframe within which data has been authored or last updated.

#### 1:53.2.3.2 Explicit Intermediate Data by id Option

This data scoping option provides for the Consent to have one or more permit/deny parameter that indicates a FHIR Resources by `.id` value.

#### 1:53.2.3.3 Explicit Intermediate Data Author Option

This data scoping option provides for the Consent to have one or more permit/deny parameter that indicates data is subject to the rule by way of an indicated author. This option is useful when the consent provision is limiting access to data that was authorized by a given doctor.

#### 1:53.2.3.4 Explicit Intermediate Data Relationship Option

This data scoping option provides for the Consent to have one or more permit/deny parameter that indicates data is subject to the rule by way of that data being related in a given way to a given identified data object. This option is useful for indicating a consent provision that is limiting/authorizing access to data that was created as part of an encounter, care plan, or episode of care.

#### 1:53.2.3.5 Explicit Intermediate Additional PurposeOfUse Option

This option provides for the Consent to have one or more permit/deny parameter that indicates a purposeOfUse that is not listed in the **Explicit Basic Option** vocabulary. This would tend to be used with Clinical Research projects, where the purposeOfUse is a code assigned to a specific Clinical Research Project. This may also be used for other purposeOfUse codes. Where **Explicit Basic Option** has some well-known purposeOfUse codes, this option is used for other codes.

One specific use of this Option is to enable Break-Glass access. Where the Consent can have a permission explicitly allowing the PurposeOfUse of Break-Glass (#BTG). In this case the Consent would have restrictions, that can be overridden by an authorized Break-Glass. The logic that determines that the given user is authorized, and has declared Break-Glass is out-of-scope of this implementation guide as it is very user-interface- and policy-specific. So, only the encoding in the Consent, and the encoding in the Access Token is defined here.

### 1:53.2.4 Explicit Advanced Option

The Explicit Advanced Option indicates that there is support for an advanced set of patient-specific parameters. The Advanced policies allow for Patient-specific permit/deny parameters on sensitive health topics and require the use of security-tagged data. The security-tagged data might be implemented either using a [Security Labeling Service](ch-P.html#SLS) that is not defined here, or other systems design. This option is required to support sensitive health topic segmentation such as substance abuse, mental health, sexuality and reproductive health, etc.

See [Advanced Consent](content.html#advanced) Content Profile.

<a name="required-groupings"> </a>

## 1:53.3 PCF Required Actor Groupings

PCF leverages other IHE Profiles for the critical functionality they provide. This includes [Audit Trails and Node Authentication (ATNA)](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) to provide system security and audit infrastructure, [Basic Audit Log Patterns (BALP)](https://profiles.ihe.net/ITI/BALP/index.html) to provide audit log patterns for privacy and security sensitive access control activities, and [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) to provide the oAuth interaction pattern between clients that want to access protected resources and the needs to protect those resources.

### 1:53.3.1 Consent Recorder

The **Consent Recorder** shall be grouped with an ATNA [Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html#9.1.1.2), a BALP [Audit Creator](https://profiles.ihe.net/ITI/BALP/volume-1.html#152111-audit-creator), and shall record the [BALP RESTful activities](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities).

### 1:53.3.1 Consent Registry

The **Consent Registry** shall be grouped with an ATNA [Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html#9.1.1.2), a BALP [Audit Creator](https://profiles.ihe.net/ITI/BALP/volume-1.html#152111-audit-creator), and shall record the [BALP RESTful activities](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities).

### 1:53.3.1 Consent Authorization Server

The **Consent Authorization Server** shall be grouped with an IUA: **Authorization Server**. The IUA **Authorization Server** takes care of the IUA transactions and invokes the **Consent Authorization Server** when a request for a token, that would be impacted by a Patient Privacy Consent, is invoked.

The IUA Authorization Server shall implement the **JWT Token**, or **Token Introspection** options, and should implement the **Get Authorization Server Metadata** option. There is no use of the IUA Authorization Server **SAML Token** option.

Note that PCF [adds requirements to the ITI-71](other.html#updates-to-iti-71) transaction to carry in the token extensions informed from the consents. These oAuth extensions affect JWT encoding and response from use of the Introspect Token Transaction.

The **Consent Authorization Server** shall be grouped with an ATNA [Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html#9.1.1.2), a BALP [Audit Creator](https://profiles.ihe.net/ITI/BALP/volume-1.html#152111-audit-creator), and shall record the [BALP RESTful activities](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities).

### 1:53.3.2 Consent Enforcement Point

The **Consent Enforcement Point** shall be grouped with an IUA: **Resource Server**.  The IUA **Resource Server** takes care of the IUA transactions and invokes the **Consent Enforcement Point** when a token includes enforcement rules informed by Patient Privacy Consent. 

The IUA Resource Server shall implement the **JWT Token**, or **Token Introspection** options, and should implement the **Get Authorization Server Metadata** option. There is no use of the IUA Authorization Server **SAML Token** option.

Note that PCF [adds requirements to the ITI-71](other.html#updates-to-iti-71) transaction to carry in the token extensions informed from the consents. These oAuth extensions affect JWT encoding and response from use of the Introspect Token Transaction.

The **Consent Enforcement Point** shall be grouped with an ATNA [Secure Application](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html#9.1.1.2), a BALP [Audit Creator](https://profiles.ihe.net/ITI/BALP/volume-1.html#152111-audit-creator), and shall record the [BALP RESTful activities](https://profiles.ihe.net/ITI/BALP/content.html#3573-restful-activities). Only one BALP RESTful activity AuditEvent needs to be recorded within the Grouped Server.

<a name="overview"> </a>

## 1:53.4 PCF Overview

The PCF Profile enables authorized access to data according to terms agreed by the Patient and the Organization protecting the data. These terms represent Privacy controls on the use of the data. The Privacy controls augment an overarching policy upon which these Privacy controls build. The writing of overarching policies, and the act of informing the patient and capturing their agreement is a predicate to the use cases of the PCF.

### 1:53.4.1 Concepts

Consent is a patient-specific set of parameters that work within an overarching policy. For a discussion of policy, consent policy, and other concepts see [Appendix P: Privacy Access Policies](ch-P.html). The concepts outlined in [Appendix P: Privacy Access Policies](ch-P.html) are critical to understanding this implementation guide.

### 1:53.4.2 Use Cases

PCF defines some transactions and some content. The content specifications define the variations on Consent that are used to enable consent parameters. The transactions utilize the content and carry out the privacy protection defined within a patient-specific consent.

#### 1:53.4.2.1 Use Case \#1: Capture new consent

When a patient does not have a consent on file, and there is a need to capture consent, the Capture New Consent use case is used to record the details of the Consent ceremony.

##### 1:53.4.2.1.1 Capture New Consent Use Case Description

```Gherkin
Scenario Outline: Capture New Consent Use Case
  Given an Organization controlling some Patient-identifiable Data 
  And they have written and published Patient Privacy Policies
  And there is no consent on file for a given Patient
  When they present their Patient Privacy Policies to a given Patient
  And the Patient either agrees, disagrees, or adds acceptable parameters
  Then a Consent is captured by the **Consent Recorder** and stored in the **Consent Registry**
```

Note: the above use case is written in [Gherkin](https://cucumber.io/docs/gherkin/), a use case language optimized for automated testing.

The Consent details are specific to the Patient Privacy Policy, the parameters agreed to in the ceremony, and the Consent profile (Basic, Intermediate, Advance) that was used.

##### 1:53.4.2.1.2 Capture New Consent Process Flow

The following flow shows the activities involved in the Capture new Consent flow.

<figure>
{%include usecase1-processflow.svg%}
<figcaption><b>Figure 1:53.4.2.1-1: Capture new Consent</b></figcaption>
</figure>
<br clear="all">

The diagrammed steps:

1. Query for existing Consent. This step may not be necessary but is important to establish the Capture New Consent use case from the Update Existing Consent use case.
2. None is found. Given that no existing Consent exists, there are no preconditions, just default expectations for the workflow.
3. Consult with the Patient. There is some interaction with the Patient. Within this interaction the patient needs to be appropriately informed of the details of the Patient Privacy Policy and the parameters the patient can control. This user Interface might use a FHIR Questionnaire resulting in a QuestionnaireResponse as documentation of the ceremony. This User Interface might use some other technical means, or might be a paper process.  This User Interface is not constrained by the PCF.
4. The results of the ceremony are captured to the satisfaction of the controlling Organization.  This might be a QuestionnaireResponse, or a scanned image of the signed paperwork recorded using a DocumentReference (See [MHD](https://profiles.ihe.net/ITI/MHD/index.html))
5. The Consent resource constrained by the Consent constraints defined in Volume 3 is then saved to the **Consent Registry** using Transaction [ITI-108].
6. An [AuditEvent is recorded](https://profiles.ihe.net/ITI/BALP/index.html) by both **Consent Recorder** and **Consent Registry** Actors to support [Security and Privacy audit analysis use-cases](https://profiles.ihe.net/ITI/BALP/volume-1.html#1524-basicaudit-overview).

#### 1:53.4.2.2 Use Case \#2: Update Existing Consent

When a patient has an existing consent on file, and there is a need to capture a new consent. The Update Existing Consent use case is used to record the details of the new Consent ceremony and assure that the previous consent is no longer used.

##### 1:53.4.2.2.1 Update Existing Consent Use Case Description

```Gherkin
Scenario Outline: Update Existing Consent use Case
  Given an Organization controlling some Patient-identifiable Data 
  And they have written and published Patient Privacy Policies
  And there is a consent on file for a given Patient
  When they present their Patient Privacy Policies to a given Patient
  And the Patient either agrees, disagrees, or adds acceptable parameters
  Then a Consent is captured by the **Consent Recorder** and stored in the **Consent Registry**
  And the new Consent overwrites or invalidates the previous Consent
```

The Consent details are specific to the Patient Privacy Policy, the parameters agreed to in the ceremony, and the Consent profile (Basic, Intermediate, Advance) that was used.

##### 1:53.4.2.2.2 Update Existing Consent Process Flow

The following flow shows the activities involved in the Update Existing Consent flow.

<figure>
{%include usecase2-processflow.svg%}
<figcaption><b>Figure 1:53.4.2.2-1: Update Existing Consent Flow</b></figcaption>
</figure>
<br clear="all">

The diagrammed steps:

1. Query for existing Consent. This step may not be necessary but is important to establish the Capture New Consent use case from the Update Existing Consent use case. This step is also useful to retrieve the current Consent parameters so that the User Interface can start with appropriate settings informed by the past.
2. A Consent is found. More than one Consent may be found, for which the PCF does not address how to address this case. The overarching policy would need to be consulted.
3. Consult with the Patient. There is some interaction with the Patient. Within this interaction the patient needs to be appropriately informed of the details of the Patient Privacy Policy and the parameters the patient can control. This user Interface might use a FHIR Questionnaire resulting in a QuestionnaireResponse as documentation of the ceremony. This User Interface might use some other technical means, or might be a paper process.  This User Interface is not constrained by the PCF.
4. The results of the ceremony are captured to the satisfaction of the controlling Organization.  This might be a QuestionnaireResponse, or a scanned image of the signed paperwork recorded using a DocumentReference (See [MHD](https://profiles.ihe.net/ITI/MHD/index.html)).
5. The Consent resource constrained by the Consent constraints defined in Volume 3 is then saved to the **Consent Registry** using Transaction [ITI-108]. This is typically a FHIR Update action so as to replace the previous Consent. It is also possible to delete the previous and save the Consent as a new instance.
6. An [AuditEvent is recorded](https://profiles.ihe.net/ITI/BALP/index.html) by both **Consent Recorder** and **Consent Registry** Actors to support [Security and Privacy audit analysis use-cases](https://profiles.ihe.net/ITI/BALP/volume-1.html#1524-basicaudit-overview).

#### 1:53.4.2.3 Use Case \#3: Consent Access Control

Given that an application needs access to resources, the following use case assures that any data made available is authorized by the Consent. Note that this use case presumes that business rules and security access control are incorporated into either the foundational oAuth flow, or some other process outside of this flow.

##### 1:53.4.2.3.1 Consent Access Control Use Case Description

```Gherkin
Scenario Outline: Consent Access Control Use Case
  Given an Organization controlling some Patient-identifiable Data 
  And they have written and published Patient Privacy Policies
  And there is a consent on file for a given Patient
  When a request for patient-identifiable data is made
  Then the Consents are used by the **Consent Authorization Server** as stored in the **Consent Registry** to make Access Control Decisions
  And the **Consent Enforcement Point** assures that only data authorized by the Consent Access Control Decision are allowed to be exposed.
```

The Consent details are specific to the Patient Privacy Policy, the parameters agreed to in the ceremony, and the Consent profile (Basic, Intermediate, Advance) that was used.

##### 1:53.4.2.3.2 Consent Access Control Process Flow

The following flow shows the activities involved in the Consent Access Control flow.

<figure>
{%include usecase3-processflow.svg%}
<figcaption><b>Figure 1:53.4.2.3-1: Consent Access Control Flow</b></figcaption>
</figure>
<br clear="all">

The diagrammed steps:

1. a **IUA Authorization Client**, an abstraction of an app and possibly a user, requests an Access Token of the **IUA Authorization Server** with some defined patient, user, app, and data parameters. This is the access request context upon which the **Consent Authorization Server** will make Consent Access Control Decisions.
2. The **IUA Authorization Server** gets user identity information, if available (e.g., by using one or more Open-ID Connect authority) adding any details to the access request context --> Note that failure to identify a user may be a failure-mode.
3. The **IUA Authorization Server** invokes the **Consent Authorization Server** passing any predicate access token, if available, adding any details to the access request context --> Note that failure to get an authorization token may be a failure-mode.
4. The **Consent Authorization Server** looks for Patient Consents at the **Consent Registry** Actor(s). The access request context may be used to limit the Consent resources returned.
5. The **Consent Authorization Server** receives the available consents. --> Note that no consent found means that the active default Implicit policy is enforced.
6. The **Consent Authorization Server** determines the best match or matches of Consents returned to the access control request context (patient, user, app, purposeOfUse, data parameters, etc.).
7. The **Consent Authorization Server** makes the Access Control Decision based on the Consents.
8. The **Consent Authorization Server** provides the consent decisions to the **IUA Authorization Server**.
9. The **IUA Authorization Server** combines the Consent Access Control Decision with the decisions returned in step 2 and 3.
10. The **IUA Authorization Server** encodes the combined Access Control Decision into an oAuth token. This is typically just associating the conditions of the Access Control Decision with the opaque oAuth token returned, such that, later in step 13, the ITI-102 transaction can be used to get the details. This combined Access Control decision indicates what is permitted or denied and any obligations or refrains that must be applied.
11. The **IUA Authorization Server** returns this combined token to the **IUA Authorization Client**. --> Note that failure-modes will not return a success token but rather an access-denied response.
12. The **IUA Authorization Client** encapsulates the given oAuth token, using ITI-72, to indicate the authorization given where the grouped transaction is as defined by the data access implementation guide that is grouped. Meaning the transaction is otherwise as defined elsewhere. The **IUA Resource Server** receives the ITI-72 and extracts the oAuth token.
<!-- the above sentences are hard to parse -->
13. The **IUA Resource Server** may request introspection using [ITI-102].
14. The **IUA Authorization Server** includes details from the **Consent Authorization Server** decision.
15. The **IUA Authorization Server** returns the token details. ITI-102 is augmented here to communicate the Consent Access Control decision details.
16. The **IUA Resource Server** calls upon the **Consent Enforcement Point** to enforce the token. The **Consent Enforcement Point** may be able to enforce some of the Consent Access Control prior to retrieving the data requested, such as where the Consent Access Control decision would forbid a kind of FHIR Resource.
17. The **Consent Enforcement Point** would use undefined means to retrieve the requested data from the FHIR Server. This may be by executing the grouped transaction with privileged access.
18. The **Consent Enforcement Point** would inspect the results and further enforce the Consent Access Control decision. This might be to filter out specific resources that could not have been filtered out in other ways.
19. The **IUA Resource Server** returns the authorized data to the **IUA Authorization Client**.

Not shown, for simplicity of the diagram, is the recording [AuditEvent](https://profiles.ihe.net/ITI/BALP/index.html) by all actors to support [Security and Privacy audit analysis use-cases](https://profiles.ihe.net/ITI/BALP/volume-1.html#1524-basicaudit-overview).

#### 1:53.4.2.4 Implicit Consent Content

These use cases will outline the justification for the alternatives within the **Implicit Consent Option**.

**Pre-conditions**:

Given there is no consent for a given patient. This may be because:

- no consent is available, or
- that there is no mechanism to capture consent, or
- that the existence of a consent does not impact Access Control, such as when consent is used to simply flag that this patient has been presented with the privacy policy.

**Main Flow**:

- The Business has chosen one of the defined **Implicit Consent Option** alternatives
- There is no Access Control use of any Consent resource in **Implicit Consent Option**

**Post-conditions**:

- The alternative protects access (see below)

##### 1:53.4.2.4.1 Permit Clinical Treatment

Permits access by clinicians that have authorization for Treatment use, but does not authorize other access. This presumes that basic user access control can differentiate legitimate clinical users and legitimate clinical purpose.

**Pre-conditions**:

The controlling Organization has identified Clinical roles that would have access for Treatment, and has mechanisms in place to prevent any inappropriate use.

**Main Flow**:

- Business Access Control prevents inappropriate users, applications, purposes, and activities. Allowing only access by Clinical users under Treatment purpose.
- There is no Access Control use of the Consent resource

**Post-conditions**:

Business Access Controls control appropriate access, thus clinical users get access for clinical treatment need.

##### 1:53.4.2.4.2 Permit All Authorized

Permits access by all authorized users. This presumes that basic user access control will only allow authorized users and for authorized purpose of use.

**Pre-conditions**:

The controlling Organization has identified various roles that would have access for a given purpose, and has mechanisms in place to prevent any inappropriate use. This is distinct from the previous use case in that the roles and the purpose are not limited to Clinical and Treatment.

**Main Flow**:

- Business Access Control prevents inappropriate users, applications, purposes, and activities.
- There is no Access Control use of the Consent resource

**Post-conditions**:

Business Access Controls control appropriate access.

##### 1:53.4.2.4.3 Deny All

Deny all uses without exceptions. This is an unusual setting for a purely Implicit consent environment, but is intended to be paired with an Explicit consent. When paired with an Explicit consent, the **Deny All** functions as the default policy when no explicit consent is on record. This might also be used in a system that is designed simply to record data with no access to that data (e.g., an Audit log repository).

**Pre-conditions**:

The controlling Organization has controls in place to prevent all access.

**Main Flow**:

- Business Access Control prevents all access by any users, applications, purposes, and activities.
- There is no Access Control use of the Consent resource

**Post-conditions**:

Business Access Controls control appropriate access.

#### 1:53.4.2.5 Basic Consent Content

The **Basic Consent** content provides for recording that a Consent has been given and this content is the basis of all explicit consent options. The goal of a basic consent content is to express how a Consent is recorded, Updated, Removed, and Expired. The basic consent content also shows how one finds relevant Consent instances, and determines if they are still valid.

**Pre-conditions**:

- The controlling Organization has identified various roles and the kinds of purpose of use those roles are authorized to participate in. 

- The Controlling Organization defines the default policy to be used when no consent is found, possibly choosing from the **Implicit Consent** Options policies. 

- The Controlling Organization defines the policy to be used with the **Explicit Basic** option, the policy that will be enforced when the patient has agreed to a consent.

**Main Flow**:

- The Business Access Control prevents inappropriate users, applications, purposes, and activities
- when a consent is found to apply to the user / application and purpose of use (given patient, organization, and policy)
  - And that consent has not expired
    - When that consent is a Permit of the access requested
      - Then Access Control allows access
    - When that consent is a Deny
      - Then Access Control enforces the deny policy
- When no consent is found or has expired
  - Then Access Control enforces the chosen default policy

**Post-conditions:**

Appropriate use is allowed, inappropriate use is denied

**Content:**

The following set of patient specific parameters may be used to permit or deny:

1. The overarching policy that the patient and organization have agreed upon. Where there is a defined set of behavior defined by overarching policies as defined in the **Implicit Consent Option**.
2. The timeframe for which the consent applies. Enabling consents that have a time limit.
3. Who is permitted/denied: This may be a device, relatedPerson, Practitioner, or Organization. This parameter enables the naming of agents that should be allowed access or denied access. This presumes that the identified agent is appropriately identified (provisioned) and authorized to make the request; typically through some application authorization and role-based access control. The user identity is mapped to a FHIR agent type Resource using the agent type Resource `.identifier` element (e.g., Practitioner.identifier would hold the user id).
4. Purpose of use permitted/denied: There are a number of PurposeOfUse that are available to be explicably identified as an authorized purposeOfUse or denied purposeOfuse. This presumes that the requesting user has the authorization to request for the requested purposeOfUse. That is to say that the Consent Authorization Server does not determine whether the user/client is authorized to make the purposeOfUse declaration; this must be previously decided by the security context (see cascaded oAuth) --  Treatment, Payment, and Operations.

#### 1:53.4.2.6 Intermediate Consent Contents

The **Intermediate Consent** contents shall be used in conjunction with **Basic Consent** content, and may be used with **Advanced Consent** content. Whereas the **Basic Consent** is used to record the fundamental aspects of the Consent ceremony, the **Intermediate Consent** contents can be used independently or together.

**Pre-conditions**:

- The controlling Organization has identified various roles and the purpose of use in which those roles are authorized to participate.

- The Controlling Organization defines the default policy to be used when no consent is found, possibly choosing from the **Implicit Consent** option policies.

- The Controlling Organization defines the policy to be used with the **Explicit Basic** option, the policy that will be enforced when the patient agrees to a consent. 

- The controlling Organization provides for the patient to choose from the intermediate parameters that the controlling organization is willing to enforce, recognizing that some parameters may not be appropriate or allowed. 

- The **Consent Recorder** is responsible for assuring that the recorded Consent is enforceable and appropriate.

**Main Flow**:

- Given The Business Access Control prevents inappropriate users, applications, purposes, and activities
  - And an appropriate user / application requests access for an appropriate purpose and activity
  - And the data is tagged with appropriate sensitivity and confidentiality vocabulary
- **Consent Authorization Server**
  - when a consent is found to apply to the user / application and purpose of use (given patient, organization, and policy)
    - And that consent has not expired
      - The overall policy identified by Consent will be recognized to determine the overall Permit/Deny
      - The provisions will be recognized for any applicability to the requested access
  - decision of either Deny authorization, or return a Permit with appropriate scope restrictions. The scope restrictions may match the requested scope, or may have been impacted by the Consent parameters.

**Post-conditions:**

- **Consent Enforcement Point** assures only appropriate use is allowed, inappropriate use is denied

##### 1:53.4.2.6.1 Intermediate Data Timeframe Content

This data scoping content provides for the Consent to have one or more permit/deny parameter that indicates a timeframe within which data has been authored or last updated.

The use case would be where a patient knows that there was a period of time where they received care, and for which the patient indicates they want to segment out that data for permit or deny. The user interface is not defined here or constrained.

##### 1:53.4.2.6.2 Intermediate Data by id Content

This data scoping content provides for the Consent to have one or more permit/deny parameter that indicates a FHIR Resources by `.id` value.

The use case would be where a patient knows specific data artifacts that the patient indicates they want to segment out for permit or deny. The user interface is not defined here or constrained.

##### 1:53.4.2.6.3 Intermediate Data Author Content

This data scoping content provides for the Consent to have one or more permit/deny parameter that indicates that data is subject to the rule by way of a given author. This content is useful when the consent provision is limiting access to data that was authorized by a given practitioner.

The use case would be where a patient wants to segment out data authored by an author known to the patient (organization or practitioner) for permit or deny. Note that this capability depends on proper recording and attribution of data to the author. The user interface is not defined here or constrained.

##### 1:53.4.2.6.4 Intermediate Data Relationship Content

This data scoping content provides for the Consent to have one or more permit/deny parameter that indicates that data is subject to the rule by way of that data being related in a given way to a given identified data object. This content is useful for indicating a consent provision that is limiting/authorizing access to data that was created as part of an encounter, care plan, or episode of care.

The use case would be where a patient knows an encounter, care plan, or episode of care that can identify the data that the patient wants to segment out for permit or deny. Note that this capability depends on proper attribution of the data to the encounter, care plan, or episode of care. The user interface is not defined here or constrained.

##### 1:53.4.2.6.5 Intermediate Additional PurposeOfUse Content

This content provides for the Consent to have one or more permit/deny parameter that indicates a purposeOfUse not listed in the **Basic Consent** vocabulary. This would tend to be used with Clinical Research projects, where the purposeOfUse is a code assigned to a specific Clinical Research Project. This may also be used for other purposeOfUse codes. Whereas **Basic Consent** has some well-known purposeOfUse codes, this content is used for other codes.

The use case would be where a patient authorizes a purposeOfUse beyond those defined in the **Basic Consent**. An example would be a Privacy Consent allowing an identified clinical research project to have access to the patient data.

This would also be used to indicate that the Consent has provisions enabling Break-Glass access using the PurposeOfUse for Break-Glass (BTG). The Consent and Access Token encodings are defined, but the rules around who is authorized and how they declare Break-Glass are not defined as they are dependent on User-Interface, User-Experience, and Policy.

#### 1:53.4.2.7 Advanced Consent Content

The **Advanced Consent** contents shall be used in conjunction with **Basic Consent** content, and may be used with **Intermediate Consent** content.  Whereas the **Basic Consent** is used to record the fundamental aspects of the Consent ceremony, the **Advanced Consent** Content provides for parameters in a Consent that express rules around data classified by sensitivity and confidentiality.

Support for the Advanced Consent relies on the data being tagged with sensitivity codes and confidentiality codes. This data tagging is not defined in PCF. There are a few established ways to get the data tagged including using a [Security labeling Service](ch-P.html#SLS), which has a few established architectures. The implementation of security tagging is a systems design requirement on the **Consent Enforcement Point**.

**Pre-conditions**:

- The controlling Organization has identified various roles and purposes of use in which those roles are authorized to participate. 

- The Controlling Organization defines the default policy to be used when no consent is found, possibly choosing from the **Implicit Consent** option policies. 

- The Controlling Organization defines the policy to be used with the **Explicit Basic** option, the policy that will be enforced when the patient has agreed to a consent. 

- The controlling Organization provides for the patient to choose from the intermediate parameters that the controlling organization is willing to enforce, recognizing that some parameters may not be appropriate or allowed. 

- The **Consent Recorder** is responsible for assuring that the recorded Consent is enforceable and appropriate.

**Main Flow**:

- Given The Business Access Control prevents inappropriate users, applications, purposes, and activities
  - And an appropriate user / application requests access for an appropriate purpose and activity
  - And the data are tagged with appropriate sensitivity and confidentiality vocabulary
- **Consent Authorization Server**
  - when a consent is found to apply to the user / application and purpose of use (given patient, organization, and policy)
    - And that consent has not expired
      - The overall policy identified by Consent will be recognized relative to the overall Permit/Deny
      - The provisions will be recognized for any applicability to the requested access
  - decision of either Deny authorization, or return a Permit with appropriate scope restrictions. The scope restrictions may match the requested scope, or may have been impacted by the Consent parameters.

**Post-conditions:**

- **Consent Enforcement Point** assures only appropriate use is allowed, inappropriate use is denied

**Content:**

The **Advanced Consent** content utilizes sensitivity codes and confidentiality codes. The Consent would include parameters that would indicate for a given sensitivity/confidentiality code the conditions on Permit or Deny.

The typical use case would be where the patient will allow normal confidentiality data to be used for some purpose such as Treatment, but indicates that data tagged as restricted confidentiality not be used.

At a minimum the following stigmatizing [Sensitivity](https://terminology.hl7.org/ValueSet-v3-InformationSensitivityPolicy.html) classifications shall be implemented as parameters:

- `ETH` -- Substance Abuse including Alcohol
  - `ETHUD` -- Alcohol substance abuse
  - `OPIOIDUD` -- Opioid drug abuse
- `PSY` -- Psychiatry Disorder
- `SDV` -- Sexual Assault, Abuse, or Domestic Violence 
- `HIV` -- HIV/AIDS

At a minimum the following [ConfidentialityCodes](https://terminology.hl7.org/ValueSet-v3-Confidentiality.html) shall be implemented as parameters:

- `N` Normal and
- `R` Restricted

The ConfidentialityCode may be assigned to data by various ways. Where data have a stigmatizing sensitivity classification, the ConfidentialityCode shall be Restricted, otherwise the data are Normal. Other methods of determining the ConfidentialityCode for data are allowed.

<a name="security-considerations"> </a>

## 1:53.5 PCF Security Considerations

See ITI TF-2x: [Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

A change to [any policy](ch-P.html) needs to be carefully managed, especially the [Domain Privacy Policy / Overarching Policy](ch-P.html). A change to Overarching Policy may have no impact on the Consent, or may invalidate all Consents. The Overarching Policy identification is a foundational element of a Consent, and thus when the Overarching policy terms change, one can identify all Consents that were based on the prior **Patient Privacy Policy Identifier**. In some cases, such as jurisdictional rules backed by laws, the Overarching Policy may change, effectively changing the effect of the rules of a Consent based on that Overarching Policy.

The [Basic Audit Log Patterns](https://profiles.ihe.net/ITI/BALP/index.html) defines the audit log patterns, these audit log patterns can be recorded using the [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html) [ATX:TLS Syslog](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html#9.2.7.2), [ATX: UDP Syslog](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html#9.2.7.3), or [ATX: FHIR Feed](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_RESTful-ATNA.pdf).

Security and Privacy office should use the [BALP profiled AuditEvent](https://profiles.ihe.net/ITI/BALP/index.html) to track changes and uses of the Consent resources. The AuditEvent is required of [PCF when grouped with ATNA](ITI-108.html#2310851-security-audit-considerations). The Provenance resource recording is not required of PCF as the use case need would be satisfied by the AuditEvent record. However an implementation may choose to use Provenance on Create/Update/Delete in addition to AuditEvent. Examples of [a Provenance of create](Provenance-ex-provenance-consent-basic-treat.html) and [a Provenance of update](Provenance-ex-provenance2-consent-basic-treat.html) are provided. The use of Provenance is discussed in [Appendix P.4.3](ch-P.html#p43-change-to-deny-sharing).

Security office should monitor the audit log for uses of break-glass, and follow up to confirm it was a legitimate use of break-glass per policy.

Security office should monitor audit logs for access denied, and follow up to confirm that it was a legitimate denial of an access request. Possibly further investigating why the request was initiated.

Technical failures (failure-modes) where some technical or infrastructure is not performing nominally should be handled carefully. There are healthcare treatment cases where these failure-modes should result in allowing access to prefer patient and operator safety over privacy, where other less life-critical use cases should prefer preserving privacy and denying access.

<a name="other-grouping"> </a>

## 1:53.6 PCF Cross-Profile Considerations

This implementation guide is expected to be used in conjunction with other implementation guides (Profiles) that provide access to Patient-specific data such as [Mobile Health Document Sharing (MHDS)](https://profiles.ihe.net/ITI/MHDS/index.html) or the [PCC](https://profiles.ihe.net/PCC/index.html) Query for Existing Data for Mobile (QEDm). These other implementation guides would have their [appropriate actors grouped as shown in Figure 1:53.1-1](volume-1.html#1531-pcf-actors-transactions-and-content-modules) as "Grouped Client" and "Grouped Server".


---

// File: input/fsh/Aliases.fsh

Alias: SCT = http://snomed.info/sct
Alias: UCUM = http://unitsofmeasure.org
Alias: LOINC = http://loinc.org



---

// File: input/fsh/capability.fsh

Instance: IHE.PCF.consentRecorder
InstanceOf: CapabilityStatement
Title: "PCF Consent Recorder Actor"
Usage: #definition
* description = """
CapabilityStatement for the Consent Recorder Actor 

Explain
- uses [Access Consent \[ITI-108\]](ITI-108.html) to record new or updated Consent Resources
"""
* url = "https://profiles.ihe.net/ITI/PCF/CapabilityStatement/IHE.PCF.consentRecorder"
* name = "IHE_PCF_consentRecorder"
* title = "IHE PCF Consent Recorder"
* status = #active
* experimental = false
* date = "2023-02-14"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "PCF Consent Recorder provides capability to record a Privacy Consent."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #Consent
    * documentation = """
PCF transaction [Access Consent \[ITI-108\]](ITI-108.html)
"""
    * interaction[+].code = #create
    * interaction[+].code = #read
    * interaction[+].code = #update
    * interaction[+].code = #delete
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_lastUpdated"
      * type = #date
      * documentation = "When the resource version last changed"
    * searchParam[+]
      * name = "_id"
      * type = #token
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "Whether the Consent record is active"
    * searchParam[+]
      * name = "patient"
      * type = #reference
      * documentation = "The Patient"
  * interaction.code = #search-system


Instance: IHE.PCF.consentRegistry
InstanceOf: CapabilityStatement
Title: "PCF Consent Registry Actor"
Usage: #definition
* description = """
CapabilityStatement for Consent Registry Actor.

Explain
- provides [Access Consent \[ITI-108\]](ITI-108.html) to store and support access to Privacy Consent Resources
"""
* url = "https://profiles.ihe.net/ITI/PCF/CapabilityStatement/IHE.PCF.consentRegistry"
* name = "IHE_PCF_consentRegistry"
* title = "IHE PCF Consent Registry"
* status = #active
* experimental = false
* date = "2023-02-14"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #server
  * documentation = "PCF Consent Registry actor provides capability to record, search, and manage Consents."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #Consent
    * documentation = """
PCF transaction [Access Consent \[ITI-108\]](ITI-108.html)
"""
    * interaction[+].code = #create
    * interaction[+].code = #read
    * interaction[+].code = #update
    * interaction[+].code = #delete
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_lastUpdated"
      * type = #date
      * documentation = "When the resource version last changed"
    * searchParam[+]
      * name = "_id"
      * type = #token
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "Whether the Consent record is active"
    * searchParam[+]
      * name = "patient"
      * type = #reference
      * documentation = "The Patient"
    * searchParam[+]
      * name = "patient.identifier"
      * type = #token
    * searchParam[+]
      * name = "actor"
      * type = #token      
  * interaction.code = #search-system

Instance: IHE.PCF.consentAuthorizationServer
InstanceOf: CapabilityStatement
Title: "PCF Consent Authorization Server Actor"
Usage: #definition
* description = """
CapabilityStatement for the Consent Authorization Server Actor 

Explain
- is a Client that uses [Access Consent \[ITI-108\]](ITI-108.html) to retrieve current Privacy Consent and make access control decisions based upon them
"""
* url = "https://profiles.ihe.net/ITI/PCF/CapabilityStatement/IHE.PCF.consentAuthorizationServer"
* name = "IHE_PCF_consentAuthorizationServer"
* title = "IHE PCF Consent Authorization Server"
* status = #active
* experimental = false
* date = "2023-02-14"
* kind = #requirements
* fhirVersion = #4.0.1
* format[+] = #application/fhir+xml
* format[+] = #application/fhir+json
* rest
  * mode = #client
  * documentation = "PCF Consent Authorization Server makes authorization decisions based on the existing Privacy Consent."
  * security
    * description = "Recommend [ATNA](https://profiles.ihe.net/ITI/TF/Volume1/ch-9.html), encouraged [IHE-IUA](https://profiles.ihe.net/ITI/IUA/index.html) or [SMART-app-launch](http://www.hl7.org/fhir/smart-app-launch/)"
  * resource[+]
    * type = #Consent
    * documentation = """
PCF transaction [Access Consent \[ITI-108\]](ITI-108.html)
"""
    * interaction[+].code = #read
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "_lastUpdated"
      * type = #date
      * documentation = "When the resource version last changed"
    * searchParam[+]
      * name = "_id"
      * type = #token
      * documentation = "Logical id of this artifact"
    * searchParam[+]
      * name = "status"
      * type = #token
      * documentation = "Whether the Consent record is active"
    * searchParam[+]
      * name = "patient"
      * type = #reference
      * documentation = "The Patient"
    * searchParam[+]
      * name = "patient.identifier"
      * type = #token
    * searchParam[+]
      * name = "actor"
      * type = #token      
  * interaction.code = #search-system



---

// File: input/fsh/consent.fsh


RuleSet:        FoundationConsent
/*
Using a RuleSet so that the foundational constraints are consistent and show up in the profiles

- status 1..1 - would indicate active
- scope 1..1 - #patient-privacy
- category 1..1 - would indicate patient consent, specifically a delegation of authority
- identifier 0..1 - no defined use in PCF. This could carry business identifiers assigned to the consent instance
- patient 1..1 - would indicate the Patient resource reference for the given patient
- dateTime 1..1 - would indicate when the privacy policy was presented
- performer 1.. - would indicate the Patient resource if the patient was presented, a RelatedPerson for parent or guardian
- organization 1.. - would indicate the Organization that presented the privacy policy, and that is going to enforce that privacy policy
- source 1..1 - would point at the specific signed consent by the patient
- policy.uri 1..1 - would indicate the privacy policy that was presented. Usually, the url to the version-specific policy
- provision.type 1..1 - permit indicates agreement with the policy, deny would indicate rejection.
- provision.actor 0..* - would indicate those being granted permit / denied access, if empty then all in the community
- provision.actor.role - fixed value IRCP to indicate information recipient.
- provision.purpose - would indicate some set of authorized purposeOfUse
- provision.period MS - would indicate a sunset for the consent if applicable, empty means no expiration
- provision.provisions are allowed

Not defined in PCF, but allowed
- policy.authority - **not used** in PCF
- policyRule - **not used** in PCF

Not allowed in PCF
- provision.provision.provisions - **NOT allowed**, no clear use-case need and would add complexity
- verification - **not used** in PCF, unclear the use-case need
- provision.action - **not used** in PCF. The purpose is sufficient.
- provision.class - **not used** in PCF, unclear the use-case need
- provision.code - **not used** in PCF, unclear the use-case need

Not constrained here as constrained by derived profiles (basic, intermediate, advanced)
- securityLabel
*/
* status 1..1
* scope 1..1
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category 1..
// TODO should we define a category for basic vs intermediary vs advanced
* patient 1..1
* dateTime 1..1
* performer 1..
* organization 1..
* source[x] 1..1
* policy.uri 1..1
//* policy.authority
//* policyRule
* verification 0..0
* provision 1..1 MS
* provision.type 1..1
* provision.period MS
* provision.purpose MS
* provision.actor MS
* provision.actor.role = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP
* provision.action 0..0
* provision.class 0..0
* provision.code 0..0
* provision.provision.provision 0..0



Profile:        BasicConsent
Parent:         Consent
Id:             IHE.PCF.consentBasic
Title:          "IHE PCF Explicit Basic Consent"
Description:    """
Explicit Basic Consent 

- status 1..1 - would indicate active
- scope 1..1 - #patient-privacy
- category 1..1 - would indicate patient consent, specifically a delegation of authority
- identifier 0..1 - no defined use in PCF. This could carry business identifiers assigned to the consent instance
- patient 1..1 - would indicate the Patient resource reference for the given patient
- dateTime 1..1 - would indicate when the privacy policy was presented
- performer 1.. - would indicate the Patient resource if the patient was presented, a RelatedPerson for parent or guardian
- organization 1.. - would indicate the Organization that presented the privacy policy, and that is going to enforce that privacy policy
- source 1..1 - would point at the specific signed consent by the patient
- policy.uri 1..1 - would indicate the privacy policy that was presented. Usually, the url to the version-specific policy
- provision.type 1..1 - permit indicates agreement with the policy, deny would indicate rejection.
- provision.actor 0..* - would indicate those being granted permit / denied access, if empty then all in the community
- provision.actor.role - fixed value IRCP to indicate information recipient.
- provision.purpose - would indicate some set of authorized purposeOfUse
- provision.period MS - would indicate a sunset for the consent if applicable, empty means no expiration
- provision.provisions are allowed

Not defined in PCF, but allowed
- policy.authority - **not used** in PCF
- policyRule - **not used** in PCF

Not allowed in PCF
- provision.provision.provisions - **NOT allowed**, no clear use-case need and would add complexity
- verification - **not used** in PCF, unclear the use-case need
- provision.action - **not used** in PCF. The purpose is sufficient.
- provision.class - **not used** in PCF, unclear the use-case need
- provision.code - **not used** in PCF, unclear the use-case need

Specifics of Basic:
- provision.purpose - would indicate some set of authorized purposeOfUse only Treatment, Payment, or Operations, see Intermediate
- provision.securityLabel is not allowed, see Intermediate
- provision.dataPeriod is not allowed, see Intermediate
- provision.data is nto allowed, see Intermediate
- provision.provision are NOT allowed, see Intermediate
"""
* insert FoundationConsent
* provision.securityLabel 0..0
* provision.purpose from BasicPurposeVS (extensible)
* provision.dataPeriod 0..0
* provision.data 0..0
* provision.provision 0..0

ValueSet: BasicPurposeVS
Title: "Basic Purpose ValueSet"
Description: "ValueSet of the PurposeOfUse minimally extensible by Basic Option"
* ^experimental = false
* http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT


Profile:        IntermediateConsent
Parent:         Consent
Id:             IHE.PCF.consentIntermediate
Title:          "IHE PCF Explicit Intermediate Consent"
Description:    """
Explicit Intermediate Consent 

- all elements allowed by Basic are allowed here, plus the following
- restriction at the root `.provision` apply to the whole Consent
  - restrictions at the `.provision.provision` are exceptions to the base consent
  - no `.provision.provision.provisions` are allowed
- data authored in a timeframe is specified in the `.dataPeriod` element
- explicit data objects are indicated in the `.data` element with `.meaning` of `#instance`
- data with relationship to an object are indicated in a `.data` element with `.meaning` of `#related`
- data authored by a given actor is indicated in the `.data` element with `.meaning` of `#authoredby`
- purposes of use activities are indicated in the `.purpose` element
- `securityLabel` is not allowed, see Advanced
"""
* insert FoundationConsent
* provision.provision MS
* provision.provision.provision 0..0
* provision.securityLabel 0..0
* provision.dataPeriod MS
* provision.provision.dataPeriod MS
* provision.data MS
* provision.data ^slicing.discriminator.type = #value
* provision.data ^slicing.discriminator.path = "meaning"
* provision.data ^slicing.rules = #closed
* provision.data contains 
  iData 0..* and
  rData 0..* and 
  aData 0..*
* provision.data[iData].meaning = #instance
* provision.data[rData].meaning = #related
* provision.data[rData].reference only Reference(Encounter or CarePlan or EpisodeOfCare)
* provision.data[aData].meaning = #authoredby
* provision.data[aData].reference only Reference(Practitioner or PractitionerRole or Organization or Device or Group or CareTeam or Patient or RelatedPerson)
* provision.provision.data MS
* provision.provision.data ^slicing.discriminator.type = #value
* provision.provision.data ^slicing.discriminator.path = "meaning"
* provision.provision.data ^slicing.rules = #closed
* provision.provision.data contains 
  iDataP 0..1 and
  rDataP 0..1 and 
  aDataP 0..1
* provision.provision.data[iDataP].meaning = #instance
* provision.provision.data[rDataP].meaning = #related
* provision.provision.data[rDataP].reference only Reference(Encounter or CarePlan or EpisodeOfCare)
* provision.provision.data[aDataP].meaning = #authoredby
* provision.provision.data[aDataP].reference only Reference(Practitioner or PractitionerRole or Organization or Device or Group or CareTeam or Patient or RelatedPerson)
* provision.purpose MS 
* provision.provision.purpose MS


Profile:        AdvancedConsent
Parent:         Consent
Id:             IHE.PCF.consentAdvanced
Title:          "IHE PCF Explicit Advanced Consent"
Description:    """
Explicit Advanced Consent 

- all elements allowed by Basic and Intermediate are allowed here, plus the following
- `securityLabel` indicates sensitivity or confidentiality tags on data
  - Only codes from [Avanced Security Tag ValueSet](ValueSet-AdvancedSecurityTagVS.html)
"""
* insert FoundationConsent
* provision.provision MS
* provision.provision.provision 0..0
* provision.securityLabel  from AdvancedSecurityTagVS (extensible)
* provision.provision.securityLabel  from AdvancedSecurityTagVS (extensible)

ValueSet: AdvancedSecurityTagVS
Title: "Advanced Security Tag ValueSet"
Description: """
ValueSet of the security tags allowed in Advanced Consent Option

At a minimum the following stigmatizing [Sensitivity](https://terminology.hl7.org/ValueSet-v3-InformationSensitivityPolicy.html) classifications shall be implemented as parameters:

- `ETH` -- Substance Abuse including Alcohol
  - `ETHUD` -- Alcohol substance abuse
  - `OPIOIDUD` -- Opioid drug abuse
- `PSY` -- Psychiatry Disorder / Mental Health
- `SDV` -- Sexual Assault, Abuse, or Domestic Violence
- `HIV` -- HIV/AIDS

At a minimum the following [ConfidentialityCodes](https://terminology.hl7.org/ValueSet-v3-Confidentiality.html) shall be implemented as parameters:

- `N` Normal and
- `R` Restricted
"""
* ^experimental = false
* http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* http://terminology.hl7.org/CodeSystem/v3-ActCode#ETH
* http://terminology.hl7.org/CodeSystem/v3-ActCode#ETHUD
* http://terminology.hl7.org/CodeSystem/v3-ActCode#OPIOIDUD
* http://terminology.hl7.org/CodeSystem/v3-ActCode#PSY
* http://terminology.hl7.org/CodeSystem/v3-ActCode#SDV
* http://terminology.hl7.org/CodeSystem/v3-ActCode#HIV
 




Instance: ex-documentreference
InstanceOf: DocumentReference
Title: "DocumentReference Consent Paperwork example"
Description: """
DocumentReference example of the paperwork of the Consent

This is showing an example of a document that is purely text.
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* type = http://loinc.org#64292-6 "Release of information consent"
* subject = Reference(Patient/ex-patient)
* author = Reference(Organization/ex-organization)
* description = "The captured signed document"
* content.attachment.title = "Hello World"
* content.attachment.contentType = #text/plain
* content.attachment.data = "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLg=="
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.




Instance: ex-consent-basic-treat
InstanceOf: BasicConsent
Title: "Consent for purpose of treatment example"
Description: """
Consent for purposes of use involved in treatment: Treatment/Payment/Operations

This is a BasicConsent example:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT


Instance: ex-provenance-consent-basic-treat
InstanceOf: Provenance
Title: "Provenance of Create of a basic consent"
Description: "Given a Consent is created, and AuditEvent is not seen as sufficient, This example provides an example of Provenance that would be equivilant."
Usage: #example
* target = Reference(Consent/ex-consent-basic-treat)
* occurredDateTime = "2022-06-13"
* recorded = "2022-06-13T01:02:03-05:00"
* activity = http://terminology.hl7.org/CodeSystem/v3-DataOperation#CREATE
* agent.type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#performer
* agent.who = Reference(Practitioner/ex-clerk)

Instance: ex-provenance2-consent-basic-treat
InstanceOf: Provenance
Title: "Provenance of Update of a basic consent"
Description: "Given a Consent is updated, and AuditEvent is not seen as sufficient, This example provides an example of Provenance that would be equivilant."
Usage: #example
* target = Reference(Consent/ex-consent-basic-treat)
* occurredDateTime = "2022-06-13"
* recorded = "2022-06-13T01:02:04-05:00"
* activity = http://terminology.hl7.org/CodeSystem/v3-DataOperation#UPDATE
* agent.type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#performer
* agent.who = Reference(Practitioner/ex-clerk)
* entity.role = #revision
* entity.what = Reference(Consent/ex-consent-basic-treat)


Instance: ex-consent-basic-treat-infant
InstanceOf: BasicConsent
Title: "Consent for access for treatment example given by mother to infants data"
Description: """
Consent for purposes of use involved in Treatment/Payment/Operations, to an infants data, given by the mother

This is a BasicConsent example:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the mother
  - same pattern is used when the performer is an adult child giving consent onbehalf of elderly mother, or a power-of-attorney giving access to a disabled patient's data.
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-mother)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT


Instance: ex-consent-basic-ink
InstanceOf: BasicConsent
Title: "Consent for treatment example with ink signature"
Description: """
Consent for purposes of use involved in treatment: Treatment/Payment/Operations

This is a BasicConsent example:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference -- Ink signature on paper
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-consent-ink)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT


Instance: ex-consent-expired-treat
InstanceOf: BasicConsent
Title: "Consent for treatment example with expiration"
Description: """
Consent that includes an expiration.

This is a BasicConsent, that has expired, example:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO
- **provision period end was at December 31, 2022 -- thus this Consent has expired.**
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.period.end = "2022-12-31"

Instance: ex-consent-basic-reject
InstanceOf: BasicConsent
Title: "Dissent for treatment example"
Description: """
Dissent for purposes of use involved in treatment: Treatment/Payment/Operations

This is a BasicConsent example:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- **base provision is #deny -- rejecting the indicated policy**
- base provision includes TPO so as to be clear this is a consent about TPO
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #deny
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT



Instance: ex-consent-basic-research
InstanceOf: BasicConsent
Title: "Consent for any Healthcare Research example"
Description: """
Consent for any healthcare research purpose

This is a BasicConsent:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes HRESCH to indicate all Healthcare Research

Note that in this case the HRESCH is not part of the extensible ValueSet for BasicConsent, but because it is not within that ValueSet then it is allowed as extensible. Also note that HRESCH is a top level (ontological) code covering all possible forms of healthcare research. Thus the Permit on this top level concept is a Permit on all sub concepts including specific projects that the organization defines within this top level concept.
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2023-06-24"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/researchPrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HRESCH



Instance: ex-consent-ink
InstanceOf: DocumentReference
Title: "Binary example using DocumentReference"
Description: "Example of a scanned image of an ink signature in binary using DocumentReference."
* status = #current
* content.attachment.url = "Binary/B-ink"
* content.attachment.contentType = #image/png


// binary throws a File Type error that DocumentReference does not
// likely needs a IG extension - implementationguide-resource-format
Instance: B-ink
InstanceOf: Binary
Title: "Binary example using Binary"
Description: "Example of a binary ink signed document."
* contentType = #image/png
* data = "ig-loader-ink.png"







Instance: ex-consent-intermediate-timeframe
InstanceOf: IntermediateConsent
Title: "Consent allowing data authored within a timeframe"
Description: """
Consent allowing data authored within a timeframe

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Intermediate part:
- access only data authored within 2022
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.dataPeriod.start = 2022-01-01
* provision.dataPeriod.end = 2022-12-31


Instance: ex-consent-intermediate-not-timeframe
InstanceOf: IntermediateConsent
Title: "Consent allowing most sharing but NOT data authored within a timeframe"
Description: """
Consent allowing most sharing of data but NOT data authored within a timeframe

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Intermediate part:
- permit form most uses
- a sub-provision denying access to data authored within 2022
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.provision.type = #deny
* provision.provision.dataPeriod.start = 2022-01-01
* provision.provision.dataPeriod.end = 2022-12-31



Instance: ex-consent-intermediate-authoredby
InstanceOf: IntermediateConsent
Title: "Consent allowing data authored by a practitioner"
Description: """
Consent allowing data authored by

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Intermediate part:
- Permits access to data authored by [practitioner 1](Practitioner-ex-practitioner.html)
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.data[aData].meaning = #authoredby
* provision.data[aData].reference = Reference(Practitioner/ex-practitioner)


Instance: ex-consent-intermediate-not-authoredby
InstanceOf: IntermediateConsent
Title: "Consent allowing most sharing but NOT data authored by a practitioner"
Description: """
Consent allowing most sharing of data but NOT data authored by a practitioner

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Intermediate part:
- a sub-provision denying access to data authored by ex-practitioner
  - [practitioner 1](Practitioner-ex-practitioner.html)
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.provision.type = #deny
* provision.provision.data[aDataP].meaning = #authoredby
* provision.provision.data[aDataP].reference = Reference(Practitioner/ex-practitioner)


Instance: ex-consent-intermediate-encounter
InstanceOf: IntermediateConsent
Title: "Consent allowing data authored related to an encounter"
Description: """
Consent allowing data authored related to an encounter

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Intermediate part:
- authored within an encounter
  - [encounter 1](Encounter-ex-encounter.html)
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.data[rData].meaning = #related
* provision.data[rData].reference = Reference(Encounter/ex-encounter)


Instance: ex-consent-intermediate-not-encounter
InstanceOf: IntermediateConsent
Title: "Consent allowing most sharing but NOT data related to an encounter"
Description: """
Consent allowing most sharing of data but NOT data related to an encounter

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Intermediate part:
- a sub-provision denying access to data authored within an encounter
  - [encounter 1](Encounter-ex-encounter.html)
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.provision.type = #deny
* provision.provision.data[rDataP].meaning = #related
* provision.provision.data[rDataP].reference = Reference(Encounter/ex-encounter)




Instance: ex-consent-intermediate-data
InstanceOf: IntermediateConsent
Title: "Consent allowing specific data"
Description: """
Consent allowing specific data

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Intermediate part:
- with specific data itemized.
  - [alcohol use 1](Observation-ex-alcoholUse.html)
  - [blood sugar 1](Observation-ex-bloodSugar.html)
  - [blood pressure 1](Observation-ex-bloodPressure.html)
  - [weight 1](Observation-ex-weight.html)
  - [weight 2](Observation-ex-weight-2.html)
  - [encounter 1](Encounter-ex-encounter.html)
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.data[iData][+].meaning = #instance
* provision.data[iData][=].reference = Reference(Encounter/ex-encounter)
* provision.data[iData][+].meaning = #instance
* provision.data[iData][=].reference = Reference(Observation/ex-weight-2)
* provision.data[iData][+].meaning = #instance
* provision.data[iData][=].reference = Reference(Observation/ex-weight)
* provision.data[iData][+].meaning = #instance
* provision.data[iData][=].reference = Reference(Observation/ex-bloodPressure)
* provision.data[iData][+].meaning = #instance
* provision.data[iData][=].reference = Reference(Observation/ex-bloodSugar)
* provision.data[iData][+].meaning = #instance
* provision.data[iData][=].reference = Reference(Observation/ex-alcoholUse)


Instance: ex-consent-intermediate-not-data
InstanceOf: IntermediateConsent
Title: "Consent allowing most sharing but NOT specific data"
Description: """
Consent allowing most sharing of data but NOT specific data

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Intermediate part:
- a sub-provision denying access to a specific data instance
  - [alcohol use 1](Observation-ex-alcoholUse.html)
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.provision.type = #deny
* provision.provision.data[iDataP][+].meaning = #instance
* provision.provision.data[iDataP][=].reference = Reference(Observation/ex-alcoholUse)



Instance: ex-org-researcher
InstanceOf: Organization
Title: "Example Organization doing the FooBar Research"
Description: "The Organization that is allowed access for FooBar research project"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* active = true
* name = "research house org"


Instance: ex-consent-intermediate-purpose
InstanceOf: IntermediateConsent
Title: "Consent allowing data access for a given intermediate purpose"
Description: """
Consent allowing data access for a given intermediate purpose

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- base provision is #permit -- accepting the policy

This is the Intermediate part:
- Intermediate PurposeOfUse are those that fall outside the basic purposeOfUse valueset
- In this case the PurposeOfUse will be for a Clinical Research Project -- FooBar
- given that the intermediate purpose is a Clinical Research project, then the policy URI will also be different
- allowing a given purpose beyond the basic purpose valueSet
- Given this is a research project, also have included the research organization as actor
  - [research org](Organization-ex-org-researcher.html)
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "https://profiles.ihe.net/ITI/PCF/Policy-basic-normal"
* provision.type = #permit
* provision.purpose[+] = http://example.org/policies/purposeOfUse#FooBar
* provision.actor.reference = Reference(Organization/ex-org-researcher)
* provision.actor.role = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP


Instance: ex-dissent-intermediate-break-glass
InstanceOf: IntermediateConsent
Title: "Consent forbid data access except for Break-Glass"
Description: """
Consent forbid data access except for Break-Glass

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- base policy is Policy-break-glass-only
- base provision is #deny access given the overriding policy

This is the Intermediate part:
- sub-provision permits users on the managed group of authorized to break-glass
  - Note that the consent would not need to point at the group as it would be understood. But I point at a group for illustrative purposes.
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "https://profiles.ihe.net/ITI/PCF/Policy-break-glass-only"
* provision.type = #deny
* provision.provision.type = #permit
* provision.provision.purpose = http://terminology.hl7.org/CodeSystem/v3-ActReason#BTG
* provision.provision.actor.reference = Reference(Group/ex-privilegedUsers)
* provision.provision.actor.role = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP


Instance: ex-privilegedUsers
InstanceOf: Group
Title: "Those users that the organization authorizes to use Break-Glass"
Description: "This is a managed list of users that are authorzed to Break-Glass. The list is managed by the treatment Organization."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* active = true
* type = #practitioner
* actual = true
* name = "Those users that the organization authorizes to use Break-Glass"
* managingEntity = Reference(Organization/ex-organization)
* member.entity = Reference(Practitioner/ex-practitioner)


Instance: ex-consent-advanced-normal
InstanceOf: AdvancedConsent
Title: "Consent allowing NORMAL data access"
Description: """
Consent allowing NORMAL data access 

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Advanced part:
- Normal data only
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N


Instance: ex-consent-advanced-normal-restricted
InstanceOf: AdvancedConsent
Title: "Consent allowing NORMAL and RESTRICTED data access"
Description: """
Consent allowing NORMAL and RESTRICTED data access 

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Advanced part:
- Normal and Restricted data only
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R


Instance: ex-consent-advanced-normal-not-restricted
InstanceOf: AdvancedConsent
Title: "Consent allowing NORMAL but not RESTRICTED data access"
Description: """
Consent allowing NORMAL data access but NOT RESTRICTED. The exclusion of RESTRICTED should not be needed, given permit is only Normal

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Advanced part:
- Normal data only
- Not Restricted data only
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* provision.provision.type = #deny
* provision.provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R



Instance: ex-consent-advanced-normal-focused-restricted
InstanceOf: AdvancedConsent
Title: "Consent allowing NORMAL and focused RESTRICTED data access"
Description: """
Consent allowing NORMAL data access but only focused RESTRICTED.

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Advanced part:
- Normal data only
- only [Practitioner](Practitioner-ex-practitioner.html) gets Restricted data only
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* provision.provision.type = #permit
* provision.provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* provision.provision.actor.reference = Reference(Practitioner/ex-practitioner)
* provision.provision.actor.role = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP



Instance: ex-consent-advanced-normal-focused-psy
InstanceOf: AdvancedConsent
Title: "Consent allowing NORMAL and focused Mental Health data access"
Description: """
Consent allowing NORMAL data access but only focused Mental Health Abuse.

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Advanced part:
- Normal data only
- only [Practitioner](Practitioner-ex-practitioner.html) gets Mental Health data only
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* provision.provision.type = #permit
* provision.provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-ActCode#PSY
* provision.provision.actor.reference = Reference(Practitioner/ex-practitioner)
* provision.provision.actor.role = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP




Instance: ex-consent-advanced-normal-focused-psy-or-sdv
InstanceOf: AdvancedConsent
Title: "Consent allowing NORMAL and focused access to Mental Health or Sexual Health data"
Description: """
Consent allowing NORMAL and focused access to Mental Health or Sexual Health data.

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Advanced part:
- Normal data only
- only [Practitioner](Practitioner-ex-practitioner.html) gets Mental Health or Sexual Health data
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* provision.provision.type = #permit
* provision.provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-ActCode#PSY
* provision.provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-ActCode#SDV
* provision.provision.actor.reference = Reference(Practitioner/ex-practitioner)
* provision.provision.actor.role = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP


Instance: ex-consent-advanced-normal-break-glass-restricted
InstanceOf: AdvancedConsent
Title: "Consent allowing NORMAL and break-glass access to RESTRICTED data"
Description: """
Consent allowing NORMAL and break-glass access to RESTRICTED (e.g., Mental Health or Sexual Health) data.

This is the Basic part:
- status is active - so it should be enforced
- scope is privacy 
- category is LOINC 59284-0 Consent
- date indicated when the consent is recorded
- patient is identified
- performer is the patient
- organization is identified
- source indicate a DocumentReference (with included text of the policy)
- policy url is to a base policy
- base provision is #permit -- accepting the policy
- base provision includes TPO so as to be clear this is a consent about TPO

This is the Advanced part:
- Normal data only
- only break-glass gets RESTRICTED data
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active
* scope = http://terminology.hl7.org/CodeSystem/consentscope#patient-privacy
* category[+] = http://loinc.org#59284-0 "Consent"
* patient = Reference(Patient/ex-patient)
* dateTime = "2022-06-13"
* performer = Reference(Patient/ex-patient)
* organization = Reference(Organization/ex-organization)
* sourceReference = Reference(DocumentReference/ex-documentreference)
* policy.uri = "http://example.org/policies/basePrivacyConsentPolicy.txt"
* provision.type = #permit
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#TREAT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HPAYMT
* provision.purpose[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HOPERAT
* provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* provision.provision.type = #permit
* provision.provision.purpose = http://terminology.hl7.org/CodeSystem/v3-ActReason#BTG
* provision.provision.securityLabel[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* provision.provision.actor.reference = Reference(Group/ex-privilegedUsers)
* provision.provision.actor.role = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP




---

// File: input/fsh/ex-patient.fsh

Instance:   ex-patient
InstanceOf: Patient
Title: "Example Patient"
Description: "The patient from which all the example relate"
// history - http://playgroundjungle.com/2018/02/origins-of-john-jacob-jingleheimer-schmidt.html
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].use = #usual
* name[=].family = "Smith"
* name[=].given = "Jack"
* name[+].use = #old
* name[=].family = "Schnidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingle"
* name[=].given[+] = "Heimer"
* name[=].period.end = "1960"
* name[+].use = #official
* name[=].family = "Smith"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingleheimer"
* name[=].period.start = "1960-01-01"
* gender = #male
* birthDate = "1923-07-25"
* address.state = "WI"
* address.country = "USA"

Instance: ex-mother
InstanceOf: Patient
Title: "Mother of John"
Description: "The patient resource describing the mother"
// history - https://www.reddit.com/r/CasualConversation/comments/acw803/who_exactly_is_john_jacob_jingleheimer_schmidt/
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].use = #usual
* name[=].family = "Schmidt"
* name[=].given[+] = "Katie"
* name[+].use = #official
* name[=].family = "Schmidt"
* name[=].given[+] = "Katherine"
* name[=].given[+] = "Irene"
* gender = #female
* address.country = "IR"

---

// File: input/fsh/ex-sensitive.fsh




Instance: ex-alcoholUse
InstanceOf: Observation
Title: "Observation - SH: Alcohol Use"
Description: """
This example Observation resource to represent alcohol use assessment in a patient summary.

- SLS assessed this as ETHUD
- SLS added Restricted due to the ETHUD assessment
"""
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActCode#ETHUD
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* status = #final
* code = http://loinc.org#74013-4
* subject = Reference(Patient/ex-patient)
* performer = Reference(Practitioner/ex-author)
* effectiveDateTime = 2022-06-13
* valueQuantity = 5 '{wine glasses}/d' "glasses of wine"
* encounter = Reference(Encounter/ex-encounter)



Instance:   ex-bloodSugar
InstanceOf: Observation
Title: "Example of an MHV blood sugar R4 observation"
Description: """
holding typical health values

- SLS assessed this as not sensitvie
- SLS added Normal due to not sensitive
"""
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#laboratory
* code = http://loinc.org#2339-0 "Glucose [Mass/volume] in Blood"
* subject = Reference(Patient/ex-patient)
* performer = Reference(Practitioner/ex-author)
* effectiveDateTime = 2020-12-04T23:50:50-05:00
* valueQuantity = 99 'mg/dL' "mg/dL"
// no comments in this one as comments is only in DSTU2
* note.text = "a bit low, no indicated method, no indicated eating"
* encounter = Reference(Encounter/ex-encounter)



Instance:   ex-bloodPressure
InstanceOf: http://hl7.org/fhir/StructureDefinition/bp
Title: "Example of a blood pressure R4 observation, minimal"
Description:      "holding typical values"
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* status = #final
* category[VSCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* code.coding[BPCode] = LOINC#85354-9 
* subject = Reference(Patient/ex-patient)
* performer = Reference(Practitioner/ex-author)
* effectiveDateTime = 2004-12-25T23:50:50-05:00
* component[SystolicBP].code.coding[SBPCode] = LOINC#8480-6 "Systolic blood pressure"
* component[SystolicBP].valueQuantity = 140.0 'mm[Hg]' "mm[Hg]"
* component[DiastolicBP].code.coding[DBPCode] = LOINC#8462-4 "Diastolic blood pressure"
* component[DiastolicBP].valueQuantity = 90.0 'mm[Hg]' "mm[Hg]"
* note.text = "a minimal blood pressure"
* encounter = Reference(Encounter/ex-encounter)



Instance:   ex-weight
InstanceOf: http://hl7.org/fhir/StructureDefinition/bodyweight
Title: "Example of a bodyWeight R4 observation"
Description: """
Sample for demonstration purposes of a common weight Observation
- marked as compliant with IHE.ToDo.bodyWeight profile
- marked as test data
- status of final
- category vital-signs
- code of loinc body weight
- subject of the example patient
- effective time of December 25th, 2004
- weight 185 pounds
- note: a bit heavy
"""
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* status = #final
* category[VSCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs
* code = http://loinc.org#29463-7
* subject = Reference(Patient/ex-patient)
* performer = Reference(Practitioner/ex-author)
* effectiveDateTime = 2004-12-25T23:50:50-05:00
* valueQuantity = 185 '[lb_av]' "pounds"
* note.text = "a bit heavy"
* encounter = Reference(Encounter/ex-encounter)



Instance:   ex-weight-2
InstanceOf: http://hl7.org/fhir/StructureDefinition/bodyweight
Title: "Example of an valid FHIR bodyWeight R4 observation, but not compliant with the profile"
Description: """
Sample for demonstration purposes of a common weight Observation.
- Given that this is not compliant, it is thus not declaring that it is compliant, it is just an Observation
- marked as test data
- status of final
- category of vital-signs
- code of loinc 29463-7 and 3141-9
- also code of snomed 27113001
- subject of the example patient
- linked to an encounter
- effectiveDateTime = March 28, 2016
- weight 280 lbs
- note: a bit heavy, about 280 lbs
"""
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* status = #final
* category[VSCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs
* code.text = "body weight"
* code.coding[BodyWeightCode] = LOINC#29463-7
* subject = Reference(Patient/ex-patient)
* performer = Reference(Practitioner/ex-author)
* encounter = Reference(Encounter/example)
* effectiveDateTime = 2016-03-28
* valueQuantity = 280 '[lb_av]' "pounds"
* note.text = "a bit heavy, about 280 lbs"
* encounter = Reference(Encounter/ex-encounter)


Instance:   ex-encounter
InstanceOf: Encounter
Title: "Example Encounter"
Description:      "holding typical values"
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* subject = Reference(Patient/ex-patient)
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#HH

Instance: ex-practitioner
InstanceOf: Practitioner
Title: "Dummy Practitioner example"
Description: "Dummy Practitioner example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* telecom.system = #email
* telecom.value = "Practitioner@example.com"

Instance: ex-author
InstanceOf: Practitioner
Title: "Dummy Authoring Practitioner example"
Description: "Dummy Practitioner example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* telecom.system = #email
* telecom.value = "Author@example.com"


Instance: ex-clerk
InstanceOf: Practitioner
Title: "Clerk Practitioner example"
Description: "Clerk Practitioner example used as an example Clerk managing Consents"
Usage: #example
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* telecom.system = #email
* telecom.value = "Clerk@example.org"




Instance: ex-organization
InstanceOf: Organization
Title: "Example Organization holding the data"
Description: "The Organization that holds the data, and enforcing any Consents"
Usage: #example
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* meta.security[+] = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* active = true
* name = "somewhere org"



---

// File: input/fsh/SLS.fsh



// SAMSHA big valueset - https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1142.58/expansion/Latest
// http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.1
// my personal NLM apiKey=10b69906-5814-406b-83bc-ed27260bda38
//
// Note that 58 is the overall grouper
// Note there is no 31, 37, 61, 62, 63, 64
// Note that tobacco is not included as not considered a protected sensitvive topic: 51, 52, 53, 54
// Note additional beyond 58: 65, 67


// history entries follow https://confluence.hl7.org/display/FHIR/IG+Publisher+Documentation#IGPublisherDocumentation-HistoryEntries

Instance:   SlsSensitive-initial-history
InstanceOf: Provenance
Title: "Initial creation of ValueSets PSY, ETH, SDV, and HIV"
Usage: #definition
* target[+] = Reference(ValueSet/SlsSensitivePSY)
* target[+] = Reference(ValueSet/SlsSensitiveETH)
* target[+] = Reference(ValueSet/SlsSensitiveSDV)
* target[+] = Reference(ValueSet/SlsSensitiveHIV)
* recorded = "2023-01-30T13:00:00.0000Z"
* occurredDateTime = "2022-07-27"
* reason = http://terminology.hl7.org/CodeSystem/v3-ActReason#METAMGT
* reason.text = "Initial ValueSet as per the C2S layout"
* activity = http://terminology.hl7.org/CodeSystem/v3-DataOperation#CREATE
* agent[+].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#author
* agent[=].who.display = "John Moehrke"
* agent[+].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#verifier
* agent[=].who.display = "John F. Moehrke"


Instance:   SlsSensitive-update-history
InstanceOf: Provenance
Title: "touchup of ValueSets PSY, ETH, SDV, and HIV"
Usage: #definition
* target[+] = Reference(ValueSet/SlsSensitivePSY)
* target[+] = Reference(ValueSet/SlsSensitiveETH)
* target[+] = Reference(ValueSet/SlsSensitiveSDV)
* target[+] = Reference(ValueSet/SlsSensitiveHIV)
* recorded = "2023-01-31T13:00:00.0000Z"
* occurredDateTime = "2023-01-31"
* reason = http://terminology.hl7.org/CodeSystem/v3-ActReason#METAMGT
* reason.text = "Administrative touchup to add history"
* activity = http://terminology.hl7.org/CodeSystem/v3-DataOperation#UPDATE
* agent[+].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#author
* agent[=].who.display = "John Moehrke"


Instance:   SlsSensitive-split-history
InstanceOf: Provenance
Title: "Split ETH into ETHUD and OPIOIDUD"
Usage: #definition
* target[+] = Reference(ValueSet/SlsSensitiveETHUD)
* target[+] = Reference(ValueSet/SlsSensitiveOPIOIDUD)
* recorded = "2023-02-01T13:00:00.0000Z"
* occurredDateTime = "2023-02-01"
* reason = http://terminology.hl7.org/CodeSystem/v3-ActReason#METAMGT
* reason.text = "Split the ETH into ETHUD (only alcohol) and OPIOIDUD (only drug)"
* activity = http://terminology.hl7.org/CodeSystem/v3-DataOperation#CREATE
* agent[+].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#author
* agent[=].who.display = "John Moehrke"
* entity[+].what = Reference(ValueSet/SlsSensitiveETH)
* entity[=].role = #source








ValueSet: SlsSensitivePSY
Title: "clinical codes that indicate PSY"
Description: """
codes that when found in data would indicate the data is likely PSY related

PSY - psychiatry disorder information sensitivity

??should this include MH (Mental Health), PSYTHPN (psychotherapy note), and SUD (subsance use)??

* **SAMSHA C2S Mental Health Disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.32 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.33 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.34 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.35 // RXNORM
  * ValueSet 2.16.840.1.113762.1.4.1142.36 // SNOMED-CT
"""
//*  http://loinc.org#74013-4

// SAMSHA C2S Mental Health Disorders
* ^experimental = true
* ^status = #draft
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.32 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.33 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.34 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.35 // RXNORM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.36 // SNOMED-CT



ValueSet: SlsSensitiveETH
Title: "clinical codes that indicate ETH"
Description: """
codes that when found in data would indicate the data is likely ETH related

ETH - substance abuse information sensitivity (alcohol or drug-abuse information)

* **SAMSHA  C2S Alcohol Use Disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.1 // SNOMEDCD
  * ValueSet 2.16.840.1.113762.1.4.1142.2 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.3 // RXNORM
  * ValueSet 2.16.840.1.113762.1.4.1142.4 // ICD10CD
  * ValueSet 2.16.840.1.113762.1.4.1142.5 // LOINC
* **SAMSHA C2S Amphetamine Use Disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.10 // RXNORM
  * ValueSet 2.16.840.1.113762.1.4.1142.11 // SNOMED-CT
  * ValueSet 2.16.840.1.113762.1.4.1142.6 // HCPCS
  * ValueSet 2.16.840.1.113762.1.4.1142.7 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.8 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.9 // LOINC
* **SAMSHA C2S Cannabis Use Disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.12 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.13 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.14 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.15 // SNOMED-CT
* **SAMSHA C2S Cocaine Use Disorder**
  * ValueSet 2.16.840.1.113762.1.4.1142.16 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.17 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.18 // SNOMED-CT
* **SAMSHA C2S Hallucinogens**
  * ValueSet 2.16.840.1.113762.1.4.1142.19 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.20 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.21 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.22 // SNOMED-CT
* **SAMSHA C2S Inhalants**
  * ValueSet 2.16.840.1.113762.1.4.1142.28 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.29 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.30 // SNOMED-CT
* **SAMSHA C2S Opioids**
  * ValueSet 2.16.840.1.113762.1.4.1142.38 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.39 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.40 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.41 // RXNORM
  * ValueSet 2.16.840.1.113762.1.4.1142.42 // SNOMED-CT
  * ValueSet 2.16.840.1.113762.1.4.1142.59 // CPT
* **SAMSHA C2S Other Psychoactive Substance Use Disorder**
  * ValueSet 2.16.840.1.113762.1.4.1142.43 // SNOMED-CT
  * ValueSet 2.16.840.1.113762.1.4.1142.44 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.45 // ICD10CM
* **SAMSHA C2S Sedative Hypnotic, or anxiolytic related disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.46 // SNOMED-CT
  * ValueSet 2.16.840.1.113762.1.4.1142.47 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.48 // ICD9CM
* **SAMSHA C2S Substance use Information Sensitivity**
  * ValueSet 2.16.840.1.113762.1.4.1142.55 // HCPCS
  * ValueSet 2.16.840.1.113762.1.4.1142.56 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.57 // RXNORM
* **SAMSHA Test C2S Alcohol Use Disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.65 // SNOMED-CT
"""
* ^experimental = true
* ^status = #draft
// SAMSHA  C2S Alcohol Use Disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.1 // SNOMEDCD
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.2 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.3 // RXNORM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.4 // ICD10CD
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.5 // LOINC
// SAMSHA C2S Amphetamine Use Disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.10 // RXNORM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.11 // SNOMED-CT
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.6 // HCPCS
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.7 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.8 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.9 // LOINC
// SAMSHA C2S Cannabis Use Disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.12 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.13 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.14 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.15 // SNOMED-CT
// SAMSHA C2S Cocaine Use Disorder
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.16 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.17 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.18 // SNOMED-CT
// SAMSHA C2S Hallucinogens
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.19 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.20 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.21 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.22 // SNOMED-CT
// SAMSHA C2S Inhalants
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.28 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.29 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.30 // SNOMED-CT
// SAMSHA C2S Opioids
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.38 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.39 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.40 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.41 // RXNORM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.42 // SNOMED-CT
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.59 // CPT
// SAMSHA C2S Other Psychoactive Substance Use Disorder
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.43 // SNOMED-CT
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.44 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.45 // ICD10CM
// SAMSHA C2S Sedative Hypnotic, or anxiolytic related disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.46 // SNOMED-CT
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.47 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.48 // ICD9CM
// SAMSHA C2S Substance use Information Sensitivity
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.55 // HCPCS
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.56 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.57 // RXNORM
// SAMSHA Test C2S Alcohol Use Disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.65 // SNOMED-CT



ValueSet: SlsSensitiveETHUD
Title: "clinical codes that indicate ETHUD"
Description: """
codes that when found in data would indicate the data is likely ETHUD related

ETHUD - alcohol abuse information sensitivity (alcohol abuse information)

* **SAMSHA  C2S Alcohol Use Disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.1 // SNOMEDCD
  * ValueSet 2.16.840.1.113762.1.4.1142.2 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.3 // RXNORM
  * ValueSet 2.16.840.1.113762.1.4.1142.4 // ICD10CD
  * ValueSet 2.16.840.1.113762.1.4.1142.5 // LOINC
* **SAMSHA Test C2S Alcohol Use Disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.65 // SNOMED-CT
"""
* ^experimental = true
* ^status = #draft
// SAMSHA  C2S Alcohol Use Disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.1 // SNOMEDCD
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.2 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.3 // RXNORM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.4 // ICD10CD
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.5 // LOINC
// SAMSHA Test C2S Alcohol Use Disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.65 // SNOMED-CT




ValueSet: SlsSensitiveOPIOIDUD
Title: "clinical codes that indicate OPIOIDUD"
Description: """
codes that when found in data would indicate the data is likely OPIOIDUD related

OPIOIDUD - Opioid substance abuse information sensitivity (drug-abuse information)

* **SAMSHA C2S Amphetamine Use Disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.10 // RXNORM
  * ValueSet 2.16.840.1.113762.1.4.1142.11 // SNOMED-CT
  * ValueSet 2.16.840.1.113762.1.4.1142.6 // HCPCS
  * ValueSet 2.16.840.1.113762.1.4.1142.7 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.8 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.9 // LOINC
* **SAMSHA C2S Cannabis Use Disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.12 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.13 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.14 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.15 // SNOMED-CT
* **SAMSHA C2S Cocaine Use Disorder**
  * ValueSet 2.16.840.1.113762.1.4.1142.16 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.17 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.18 // SNOMED-CT
* **SAMSHA C2S Hallucinogens**
  * ValueSet 2.16.840.1.113762.1.4.1142.19 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.20 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.21 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.22 // SNOMED-CT
* **SAMSHA C2S Inhalants**
  * ValueSet 2.16.840.1.113762.1.4.1142.28 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.29 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.30 // SNOMED-CT
* **SAMSHA C2S Opioids**
  * ValueSet 2.16.840.1.113762.1.4.1142.38 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.39 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.40 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.41 // RXNORM
  * ValueSet 2.16.840.1.113762.1.4.1142.42 // SNOMED-CT
  * ValueSet 2.16.840.1.113762.1.4.1142.59 // CPT
* **SAMSHA C2S Other Psychoactive Substance Use Disorder**
  * ValueSet 2.16.840.1.113762.1.4.1142.43 // SNOMED-CT
  * ValueSet 2.16.840.1.113762.1.4.1142.44 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.45 // ICD10CM
* **SAMSHA C2S Sedative Hypnotic, or anxiolytic related disorders**
  * ValueSet 2.16.840.1.113762.1.4.1142.46 // SNOMED-CT
  * ValueSet 2.16.840.1.113762.1.4.1142.47 // ICD10CM
  * ValueSet 2.16.840.1.113762.1.4.1142.48 // ICD9CM
* **SAMSHA C2S Substance use Information Sensitivity**
  * ValueSet 2.16.840.1.113762.1.4.1142.55 // HCPCS
  * ValueSet 2.16.840.1.113762.1.4.1142.56 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.57 // RXNORM
"""
* ^experimental = true
* ^status = #draft
// SAMSHA C2S Amphetamine Use Disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.10 // RXNORM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.11 // SNOMED-CT
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.6 // HCPCS
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.7 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.8 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.9 // LOINC
// SAMSHA C2S Cannabis Use Disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.12 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.13 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.14 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.15 // SNOMED-CT
// SAMSHA C2S Cocaine Use Disorder
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.16 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.17 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.18 // SNOMED-CT
// SAMSHA C2S Hallucinogens
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.19 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.20 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.21 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.22 // SNOMED-CT
// SAMSHA C2S Inhalants
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.28 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.29 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.30 // SNOMED-CT
// SAMSHA C2S Opioids
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.38 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.39 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.40 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.41 // RXNORM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.42 // SNOMED-CT
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.59 // CPT
// SAMSHA C2S Other Psychoactive Substance Use Disorder
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.43 // SNOMED-CT
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.44 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.45 // ICD10CM
// SAMSHA C2S Sedative Hypnotic, or anxiolytic related disorders
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.46 // SNOMED-CT
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.47 // ICD10CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.48 // ICD9CM
// SAMSHA C2S Substance use Information Sensitivity
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.55 // HCPCS
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.56 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.57 // RXNORM




ValueSet: SlsSensitiveSDV
Title: "clinical codes that indicate SDV"
Description: """
SDV - Sexual assault, abuse or domestic violence

??should this also include SEX (sexuality and reproductive health information sensitivity), PREGNANT (pregnancy), STD (sexually transmitted disease)? The SAMSHA valuesets seem to be labeled as if they are only about sexuality and reproductive health, but do include sexual abuse and sexually transmitted disease.

* **SAMSHA C2S Sexuality and reproductive health information sensitivity**
  * ValueSet 2.16.840.1.113762.1.4.1142.49 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.50 // RXNORM
"""
* ^experimental = true
* ^status = #draft
// SAMSHA C2S Sexuality and reproductive health information sensitivity
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.49 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.50 // RXNORM



ValueSet: SlsSensitiveHIV
Title: "clinical codes that indicate HIV"
Description: """
HIV/AIDS information

* **SAMSHA C2S HIV/AIDS Information**
  * ValueSet 2.16.840.1.113762.1.4.1142.23 // HCPCS
  * ValueSet 2.16.840.1.113762.1.4.1142.24 // ICD9CM
  * ValueSet 2.16.840.1.113762.1.4.1142.25 // LOINC
  * ValueSet 2.16.840.1.113762.1.4.1142.26 // RXNORM
  * ValueSet 2.16.840.1.113762.1.4.1142.27 // SNOMED-CT
  * ValueSet 2.16.840.1.113762.1.4.1142.60 // CPT
* **SAMSHA Test C2S HIV/AIDS Information Sensitivity**
  * ValueSet 2.16.840.1.113762.1.4.1142.67 // SNOMEDCD
"""
* ^experimental = true
* ^status = #draft
// SAMSHA C2S HIV/AIDS Information
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.23 // HCPCS
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.24 // ICD9CM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.25 // LOINC
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.26 // RXNORM
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.27 // SNOMED-CT
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.60 // CPT
// SAMSHA Test C2S HIV/AIDS Information Sensitivity
* codes from valueset http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1142.67 // SNOMEDCD



---

// File: input/images-source/ActorsAndTransactions.plantuml

@startuml
skinparam svgDimensionStyle false
agent "[[#consentRecorder Consent Recorder]]" as capture
agent "[[#consentRegistry Consent Registry]]" as registry
capture -down-> registry : "Access Consent (CRUDS) [[ITI-108.html ITI-108]]"

frame "Grouped Decider" {
agent decider [
[[https://profiles.ihe.net/ITI/IUA/index.html#34112-authorization-server IUA: Authorization Server]]
] 
agent cdecider [
[[#consentAuthorizationServer Consent Authorization Server]]
] 
decider -down-* cdecider
}
cdecider -left-> registry: "Access Consent (SR) [[ITI-108.html ITI-108]]"


frame "Grouped Client" {
agent "Other FHIR client" as otherClient
agent "[[https://profiles.ihe.net/ITI/IUA/index.html#34111-authorization-client IUA: Authorization Client]]" as client 
}
frame "Grouped Server" {
agent enforcer [
[[https://profiles.ihe.net/ITI/IUA/index.html#34113-resource-server IUA: Resource Server]]
]
agent cenforcer [
[[#consentEnforcementPoint Consent Enforcement Point]]
]
agent "Other FHIR server" as otherServer
enforcer -down-* cenforcer
cenforcer -down-* otherServer
}

otherClient -down-* client: "other"
client -down-> decider : "IUA Get Access Token [[other.html#updates-to-iti-71 _ITI-71_]]\nIUA: Get Authorization Server Metadata [[https://profiles.ihe.net/ITI/IUA/index.html#3103-get-authorization-server-metadata-iti-103 ITI-103]]"

client -down-> enforcer : "IUA: Incorporate Access Token [[https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72 ITI-72]]"
decider <-right- enforcer : "IUA: Introspect Token [[https://profiles.ihe.net/ITI/IUA/index.html#3102-introspect-token-iti-102 ITI-102]]\nIUA: Get Authorization Server Metadata [[https://profiles.ihe.net/ITI/IUA/index.html#3103-get-authorization-server-metadata-iti-103 ITI-103]]"
cdecider <.left. cenforcer : implied
@enduml


---

// File: input/images-source/ITI-108-seq.plantuml

@startuml 
hide footbox

participant "[[volume-1.html#consentRecorder Consent Recorder]]" as capture
participant "[[volume-1.html#consentRegistry Consent Registry]]" as registry
participant "[[volume-1.html#consentAuthorizationServer Consent Authorization Server]]" as decider


group Access Consent - Search (ITI-108) 
capture -> registry: 3.108.4.1 Access Consent - Search - Request
capture <-- registry: 3.108.4.2 Access Consent - Search - Response
decider -> registry: 3.108.4.1 Access Consent - Search - Request
decider <-- registry: 3.108.4.2 Access Consent - Search - Response
end

group Access Consent - Create (ITI-108) 
capture -> registry: 3.108.4.3 Access Consent - Create - Request
capture <-- registry: 3.108.4.4 Access Consent - Create - Response
end

group Access Consent - Read (ITI-108) 
capture -> registry: 3.108.4.5 Access Consent - Read - Request
capture <-- registry: 3.108.4.6 Access Consent - Read - Response
decider -> registry: 3.108.4.5 Access Consent - Read - Request
decider <-- registry: 3.108.4.6 Access Consent - Read - Response
end

group Access Consent - Update (ITI-108) 
capture -> registry: 3.108.4.7 Access Consent - Update - Request
capture <-- registry: 3.108.4.8 Access Consent - Update - Response
end

group Access Consent - Delete (ITI-108) 
capture -> registry: 3.108.4.9 Access Consent - Delete - Request
capture <-- registry: 3.108.4.10 Access Consent - Delete - Response
end

@enduml


---

// File: input/images-source/post-enforcement-searchset.plantuml

@startuml
title Search Set Bundle post enforcement to remove Alchol Use Disorder

package "Search Set Bundle"  {
  class Bundle

  Bundle o-down- Observation2
  Bundle o-down- Observation3
  Bundle o-down- Observation4
  Bundle o-down- Observation5
}

class Bundle {
    {method} Searched for all Observations for given Patient
    {method} total 4
}

class Observation2 {
    {field} Normal Confidentiality
    {field} id=2
    {method} Blood sugar 99
}
class Observation3 {
    {field} Normal Confidentiality
    {field} id=3
    {method} Blood Pressure 140/90
}
class Observation4 {
    {field} Normal Confidentiality
    {field} id=4
    {method} Weight 185 pounds
}
class Observation5 {
    {field} Normal Confidentiality
    {field} id=5
    {method} Weight 280 pounds
}
@enduml

---

// File: input/images-source/post-id-enforcement-searchset.plantuml

@startuml
title Search Set Bundle post enforcement to remove Alcohol Use Disorder

package "Search Set Bundle"  {
  class Bundle

  Bundle o-down- Observation2
  Bundle o-down- Observation3
  Bundle o-down- Observation4
  Bundle o-down- Observation5
}

class Bundle {
    {method} Searched for all Observations for given Patient
    {method} total 4
}

class Observation2 {
    {field} id=2
    {method} Blood sugar 99
}
class Observation3 {
    {field} id=3
    {method} Blood Pressure 140/90
}
class Observation4 {
    {field} id=4
    {method} Weight 185 pounds
}
class Observation5 {
    {field} id=5
    {method} Weight 280 pounds
}
@enduml

---

// File: input/images-source/post-sls-enforcement-searchset.plantuml

@startuml
title Search Set Bundle post enforcement to remove Alchol Use Disorder

package "Search Set Bundle"  {
  class Bundle

  Bundle o-down- Observation2
  Bundle o-down- Observation3
  Bundle o-down- Observation4
  Bundle o-down- Observation5
}

class Bundle {
    {method} Searched for all Observations for given Patient
    {method} total 4
}

class Observation2 {
    {field} Normal Confidentiality
    {field} id=2
    {method} Blood sugar 99
}
class Observation3 {
    {field} Normal Confidentiality
    {field} id=3
    {method} Blood Pressure 140/90
}
class Observation4 {
    {field} Normal Confidentiality
    {field} id=4
    {method} Weight 185 pounds
}
class Observation5 {
    {field} Normal Confidentiality
    {field} id=5
    {method} Weight 280 pounds
}
@enduml

---

// File: input/images-source/post-sls-searchset.plantuml

@startuml
title Search Set Bundle after SLS tagging

package "Search Set Bundle"  {
  class Bundle
  Bundle o-down- Observation1
  Bundle o-down- Observation2
  Bundle o-down- Observation3
  Bundle o-down- Observation4
  Bundle o-down- Observation5
}

class Bundle {
    {method} Searched for all Observations for given Patient
    {method} total 5
}
class Observation1 {
    {field} Alchol Use Disorder
    {field} Restricted Confidentiality
    {field} id=1
    {method} Alcohol per day 5
}
class Observation2 {
    {field} Normal Confidentiality
    {field} id=2
    {method} Blood sugar 99
}
class Observation3 {
    {field} Normal Confidentiality
    {field} id=3
    {method} Blood Pressure 140/90
}
class Observation4 {
    {field} Normal Confidentiality
    {field} id=4
    {method} Weight 185 pounds
}
class Observation5 {
    {field} Normal Confidentiality
    {field} id=5
    {method} Weight 20 stone
}
@enduml

---

// File: input/images-source/pre-sls-searchset.plantuml

@startuml
title Search Set Bundle before SLS tagging

package "Search Set Bundle"  {
  class Bundle
  Bundle o-down- Observation1
  Bundle o-down- Observation2
  Bundle o-down- Observation3
  Bundle o-down- Observation4
  Bundle o-down- Observation5
}

class Bundle {
    {method} Searched for all Observations for given Patient
    {method} total 5
}
class Observation1 {
    {field} id=1
    {method} Alcohol per day 5
}
class Observation2 {
    {field} id=2
    {method} Blood sugar 99
}
class Observation3 {
    {field} id=3
    {method} Blood Pressure 140/90
}
class Observation4 {
    {field} id=4
    {method} Weight 185 pounds
}
class Observation5 {
    {field} id=5
    {method} Weight 280 pounds
}
@enduml

---

// File: input/images-source/preferences-workflow.plantuml


@startuml
skinparam svgDimensionStyle false
title Preferences to Enforcement

:Patient: --> (Pref)
"Privacy Preferences" as (Pref)

package "Patient Privacy Policy Domain" {
"Consent Admin" as Admin
"Clinical User" as Clin

Admin <-- (Pref)
Admin --> (Privacy Consent)
note left of (Privacy Consent) : Patient Privacy Policy

Clin <--> (Access Controlled)
(Access Controlled) <-- (Privacy Consent)
(Patient Identified Data) -up-> (Access Controlled)
}
@enduml

---

// File: input/images-source/sls-batch.plantuml


@startuml
title Pre categorize data within the EHR database

database "EHR" as ehr 
component "SLS" as sls 

ehr -right--> sls : Batch/New/Update
sls -left--> ehr : tagged results

@enduml

---

// File: input/images-source/sls-pre.plantuml

@startuml
title Query/Use enforcement based on pre-calculated SLS 

database "EHR" as ehr 
agent "App" as app 
control "ACE" as ace

app -down--> ehr : Queries
ehr -right--> ace : tagged results
ace -left--> app : enforce rules

@enduml


---

// File: input/images-source/sls-query.plantuml

@startuml
title Real-Time sensitivty classification at Use/Query/Export

database "EHR" as ehr 
component "SLS" as sls 
agent "App" as app 
control "ACE" as ace


app -down--> ehr : Queries/Uses/Export
ehr -right--> sls : Query results
sls -up--> ace : tagged results
ace -left--> app : enforce rules

@enduml



---

// File: input/images-source/usecase1-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
autonumber
title "Capture new Consent"
participant "Consent Recorder" as capture
participant "Consent Registry" as registry
activate capture
capture ->o registry : [[ITI-108.html ITI-108]] - Query for existing Consent
activate registry
registry --> capture : None found
capture -> capture : Consult with Patient
note left of capture: May use FHIR Questionnaire\nor any kind of User Experience
capture -> capture : Capture Patient conditions and acceptance
note left of capture: Preserve documentation:\n- QuestionnaireResponse\n- DocumentReference (MHD)\n- other
capture ->o registry : [[ITI-108.html ITI-108]] - Create Consent pointing at documentation
note over capture, registry : Record AuditEvent
deactivate registry
deactivate capture 
@enduml


---

// File: input/images-source/usecase2-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
autonumber
title "Update Existing Consent"
participant "Consent Recorder" as capture
participant "Consent Registry" as registry
activate capture
capture ->o registry : [[ITI-108.html ITI-108]] - Query for existing Consent
activate registry
registry --> capture : Some Found
capture -> capture : Consult with Patient, using existing details
note left of capture: May use FHIR Questionnaire\nor any kind of User Experience
capture -> capture : Capture Patient conditions and acceptance
note left of capture: Preserve documentation:\n- QuestionnaireResponse\n- DocumentReference (MHD)\n- other
capture ->o registry : [[ITI-108.html ITI-108]] - Update Consent pointing at documentation
note over capture, registry : Record AuditEvent
deactivate registry
deactivate capture 
@enduml


---

// File: input/images-source/usecase3-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
autonumber
title "Consent Access Control"
participant "[[https://profiles.ihe.net/ITI/IUA/index.html#34111-authorization-client IUA: Authorization Client]]" as client
box "Grouped Decider"
participant "[[#consentAuthorizationServer Consent Authorization Server]]" as cdecider
participant "[[https://profiles.ihe.net/ITI/IUA/index.html#34112-authorization-server IUA: Authorization Server]]" as decider
end box
box "Grouped Server"
participant "IUA: Resource Server" as server
participant "[[#consentEnforcementPoint Consent Enforcement Point]]" as enforcer
participant "FHIR Server" as fhir
end box
participant "[[#consentRegistry Consent Registry]]" as registry
participant "Open-ID-Connect" as oidc

activate client
client ->o decider : IUA Get Access Token [[other.html#updates-to-iti-71 _ITI-71_]]
activate decider
decider --> oidc : Get authorized user using Open-ID-Connect

activate cdecider
decider --> cdecider : Include Consents 
activate registry
cdecider ->o registry : [[ITI-108.html ITI-108]] - Query for existing Consent
registry --> cdecider : Return the Consents found
note over registry : Record AuditEvent
deactivate registry

cdecider -> cdecider : Match provisions to request context
cdecider -> cdecider : Make Consent focused Access Control Decision
decider <-- cdecider : Include consent decisions
decider -> decider : Combine Access Control decisions
decider -> decider : Encode combined decision in oAuth token
note over decider : Record AuditEvent

decider --> client:  Decision to be Enforced
client ->o server : "IUA: Incorporate Access Token [[https://profiles.ihe.net/ITI/IUA/index.html#372-incorporate-access-token-iti-72 ITI-72]]"
activate server
server -->o decider : "IUA: Introspect Token [[https://profiles.ihe.net/ITI/IUA/index.html#3102-introspect-token-iti-102 ITI-102]]"
decider --> cdecider: Include Consent details 
server <-- decider: Return token details
activate enforcer
server --> enforcer: Enforce authorization decision

enforcer --> fhir : execute request
server <-- enforcer: Enforce authorization decision
deactivate enforcer
client <- server : Returned authoried results
deactivate server
deactivate cdecider
deactivate decider 

note over server : Record AuditEvent
deactivate server

note over client : Record AuditEvent
deactivate client 
@enduml


---

// File: input/data/features.yml

---
disable_autonumbering: true
feedback:
  - active: true
    dashboard:
      label: New Issue
      url: https://github.com/IHE/ITI.PCF/issues/new/choose
  - active: true
    dashboard:
      label: Issues
      url: https://github.com/IHE/ITI.PCF/issues

---

