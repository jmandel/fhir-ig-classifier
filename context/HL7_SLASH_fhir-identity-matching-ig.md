File: repos/HL7_SLASH_fhir-identity-matching-ig/sushi-config.yaml

# ╭────────────────────ImplementationGuide-hl7.fhir.us.udap-security.json──────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.html#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.identity-matching
canonical: http://hl7.org/fhir/us/identity-matching
name: DigitalIdentity
title: "Interoperable Digital Identity and Patient Matching"
status: active
license: "CC0-1.0"
version: 2.0.0-ballot
fhirVersion: 4.0.1
copyrightYear: 2021+
releaseLabel: STU2 Ballot
date: 2024-07-30
jurisdiction: "urn:iso:std:iso:3166#US"
publisher:
  name: HL7 International / Patient Administration
  url: http://www.hl7.org/Special/committees/pafm
dependencies:
  hl7.fhir.us.core: 6.1.0

extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  #<<< must include a http://hl7.org/fhir/StructureDefinition/structuredefinition-wg extension that identifies the workgroup responsible for the IG. This is the authoritative element.
    valueCode: pa  # <<< The value must be the code for the workgroup
  # - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
  #   valueCode: trial-use

parameters:
  show-inherited-invariants: false
  apply-jurisdiction: true
  apply-publisher: true
  active-tables: false
  apply-contact: true
  apply-version: true
  usage-stats-opt-out: true
  excludexml: false
  excludettl: true
  excludemap: true

pages:
  index.md:
    title: Home
  guidance-on-identity-assurance.md:
    title: Guidance on Identity Assurance
  patient-matching.md:
    title: Patient Matching
  digital-identity.md:
    title: Digital Identity
  use-cases.md:
    title: Use Cases
  industry-initiatives.md:
    title: Industry Initiatives
  downloads.md:
  glossary.md:
    title: Glossary


# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Guidance on Identity Assurance: guidance-on-identity-assurance.html
  Patient Matching: patient-matching.html
  Digital Identity: digital-identity.html
  Implementation:
    Artifacts: artifacts.html
    Use Cases: use-cases.html
    Industry Initiatives: industry-initiatives.html
    Downloads: downloads.html
  Glossary: glossary.html

  


---

// File: input/pagecontent/consumer-matching.md

### Overview   

This guidance is intended to apply to other consumer matching workflows including non-FHIR transactions. Use of other (non-FHIR, non $match) matching methods (implementations) that result in comparable or higher matching rates is not precluded by this guidance. Realizing that a better-formed match request produces the most reliable results, this implementation guide (IG) also includes a [Guidance on Identity Assurance] section as a companion resource to this best practice patient matching. 

> **NOTE:** As security is generally out of scope for this guide, the conditions required to share personally identifiable information (PII) or to authorize an organization's or an individual’s, including the patient’s own, access to the results of a match request are not specified completely in this guide, nor should they be inferred.  However, patient-initiated workflows (for example, "patient request" purpose of use) **SHALL** always include explicit end-user authorization.    

&emsp;    

### Match Requirements 

When transmitting identity attributes to third parties with whom sharing PII is permitted, such as:  

- within an OpenID Connect user profile, another user information request to an Identity Provider, or the resultant assertion/claim,  
- within an HL7 B2B with User Authorization Extension Object, or  
- as part of a match or search request, 

and a level of identity assurance is indicated, each included identity attribute **SHALL** either have been verified at the identity level of assurance asserted by the transmitting party (for example, the match requestor) or be consistent with other evidence used in that identity verification process completed by that party. If a level of assurance is not explicitly asserted, the combination of identity attributes submitted **SHOULD** be consistent with, and sufficient to on their own  resolve to the identity of a unique person in the real world. Specifically, identity verification **SHALL** be performed at IAL1.5 or higher level of identity assurance per this IG's [Guidance on Identity Assurance] (e.g., a first name, last name, date of birth [DOB], mobile number, and home street address have been verified as belonging to the individual OR a first name, last name, and a Digital Identifier compliant with this IG have been verified as belonging to the individual), consistent with the practices of NIST 800-63A using Fair or stronger evidence and/or credit bureau type records (or equivalent), and consistent with [Guidance on Identity Assurance].  

As a best practice, identity verification **SHOULD** be at a minimum of IAL2 or  [LoA-3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-2.pdf) for professionals who are end users of health IT systems and for an implementer's overall operations.  

Individual Access (or if protected health information [PHI] or PII will be returned, other than to a Covered Entity in a Treatment, Payment, or Operations workflow) is outside the scope of this IG's Patient Matching requirements. Instead, responders to such queries **SHALL** authenticate the individual before returning PHI or PII. 

Security best practices, including transaction authorization, are generally out of scope for this IG; however implementers also **SHALL NOT** allow patients to request a match directly. A trusted system may request a match on a patient’s behalf and use it to inform the patient, especially to:  

- Recognize that the patient already has an account (when a record represents an account) 
- Recognize that a patient may have multiple identities within the system, leading to a fragmented medical record 
- Recognize that a patient’s identity might have spurious records from other people mixed in 
- Help remediate these situations without exposing PHI/PII 

For sharing immunization records only, patient matching **MAY** be performed using identity attributes verified at IAL1.2 or higher by both requesting party and responder. 

#### Match on Identities 

While FHIR systems often expect to have only one Patient Resource per actual patient, some systems may normally have many records for the same patient, typically originating from many disparate systems such as clinics, insurance companies, labs, etc. In this scenario, the Patient resources are typically already linked via automatic matching into sets of Patient Resources using [Patient.link](https://www.hl7.org/fhir/patient-definitions.html#Patient.link), where each set represents a specific patient in the opinion of the MPI system. In such a system, the patient match **should** be performed against the sets of records as opposed to the individual records. For example, if five records are currently believed to represent the same patient, a search for that patient would find the set of five and consider that as one candidate as opposed to five candidates. Moreover, that search would benefit from all of the information in the set. For example, consider a set of five linked Patient records currently in the system and a Patient input to a $match operation that includes a name, birthdate, telephone and [MBI](https://build.fhir.org/ig/HL7/fhir-identity-matching-ig/glossary.html) such that the $match input Patient: 

- name matches Patient 1 but is somewhat different from Patients 2-5 
- birthdate matches all five of them 
- telephone matches Patient 3 and is not present in Patients 1,2,4,5 
- MBI matches Patient 5 and is absent in patients 1-4 

Then the strength of the match for that single candidate should consider all the matching information as opposed to either each record individually or some aggregation of the information in the records that tries to subset it to the “correct” information only (a “golden” record). 

Asking for at most four results to be returned in a match request may mean more than four actual Patient resources returned, if the responding system has not mapped one identity to one record. This results in two options: 

1. In this case, only the requested number of identities are returned and the requester can ask for all resources or some subset, as needed.  
2. All applicable records are returned; a different threshold on number of records returned could be considered instead. 

    Note that a collection of records together can make them more valuable than one of the records may appear on its own.  *Feedback is welcome on the use of MatchGrade extension to help provide additional detail.*   

> **NOTE:** Although some systems may employ referential matching capabilities or other industry-established practices, methods for determining match and the use of any specific algorithms to produce results in which a responder is sufficiently confident to appropriately release are out of scope for this IG. 

#### B2B with User Authorization Extension Object 

The B2B with User Authorization Extension Object is used by client apps following the client_credentials flow to provide additional information regarding the context under which the request for data is authorized. The client app constructs a JSON object containing the following keys and values and includes this object in the extensions object of the Authentication  JSON Web Token (JWT), as per [UDAP Security 5.2.1.1](http://hl7.org/fhir/us/udap-security/STU1/b2b.html#b2b-authorization-extension-object), as the value associated with the key name hl7-b2b-user. The same requirements for use of hl7-b2b apply in the use of hl7-b2b-user.

<table class="table">
  <thead>
    <th colspan="3">B2B with User Authorization Extension Object<br>Key Name: "hl7-b2b-user"</th>
  </thead>
  <tbody>
    <tr>
      <td><code>version</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        String with fixed value: <code>"1"</code>
      </td>
    </tr>
    <tr>
      <td><code>purpose_of_use</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        An array of one or more strings, each containing a code identifying a purpose for which the data is being requested. For US Realm, trust communities <strong>SHOULD</strong> constrain the allowed values, and are encouraged to draw from the HL7 <a href="http://terminology.hl7.org/ValueSet/v3-PurposeOfUse">PurposeOfUse</a> value set, but are not required to do so to be considered conformant. See <a href="http://hl7.org/fhir/us/udap-security/STU1/b2b.html#preferred-format-for-identifiers-and-codes">UDAP Security 5.2.1.2</a> for the preferred format of each code value string array element.
      </td>
    </tr>
    <tr>
      <td><code>user_person</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        FHIR Person resource with all required fields populated as per Person Resource Profile for FAST ID
      </td>
    </tr>
    <tr>
      <td><code>consent_policy</code></td>
      <td><span class="label label-warning">optional</span></td>
      <td>
        An array of one or more strings, each containing a URI identifiying a privacy consent directive policy or other policy consistent with the value of the <code>purpose_of_use</code> parameter.
      </td>
    </tr>
    <tr>
      <td><code>consent_reference</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        An array of one or more strings, each containing an absolute URL consistent with a <a href="https://www.hl7.org/fhir/R4/references.html#literal">literal reference</a> to a FHIR <a href="https://www.hl7.org/fhir/R4/consent.html">Consent</a> or <a href="https://www.hl7.org/fhir/R4/documentreference.html">DocumentReference</a> resource containing or referencing a privacy consent directive relevant to a purpose identified by the <code>purpose_of_use</code> parameter and the policy or policies identified by the <code>consent_policy</code> parameter. The issuer of this Authorization Extension Object <strong>SHALL</strong> only include URLs that are resolvable by the receiving party. If a referenced resource does not include the raw document data inline in the resource or as a contained resource, then it <strong>SHALL</strong> include a URL to the attachment data that is resolvable by the receiving party. Omit if <code>consent_policy</code> is not present.
      </td>
    </tr>
  </tbody>
</table>

Example Person Resource Profile for FAST ID:

&emsp;   

### Verification 

It is helpful to know the date verification of attributes was performed, in the case of address and mobile number since those attributes change. Future versions of this IG will likely include a grammar for indicating verification date in match transactions, as well the evidence used to verify individual demographic attributes or entire identities. This information may also be applied to Patient Weighted Input Information. 

The identity verification level performed to establish matching attributes is another meaningful piece of information to convey in a transaction; for an example of how to include level of identity and authentication assurance in an OpenID Connect user profile, see the section on [Digital Identity]. 

When attributes like email address and telephone number are verified as associated with a patient, that information helps to bootstrap new portal account creation and (later) account recovery.  

An API from USPS may be helpful in verifying individual street addresses in future versions of this IG.  

Currently, National Provider Identifier (NPI) records can be used to verify provider names, addresses, and telephone numbers. 

&emsp;&emsp; 

 

{% include link-list.md %} 


---

// File: input/pagecontent/digital-identity.md

### Overview 

Digital Identity is the unique representation of a subject engaged in an online transaction. Digital Identities involved in healthcare transactions can correspond to Patients, Providers, Payers, and other healthcare actors. The combination of a legal, distinct, verified organization name and the state in which it is verified uniquely establishes [Organizational Identity](guidance-on-identity-assurance.html#organizational-identity). A Digital Identity **SHALL** always be unique in the context of a digital service compliant with this IG, but does not necessarily need to uniquely identify the subject in all contexts. Specifically, such a digital service **SHALL NOT** require that a human subject’s real-life identity is evident from their credentials (the Digital Identifier plus an associatied authenticator(s)) or from the Digital Identifier on its own.  

In an effort to address matching errors by prioritizing the use of Digital Identifiers, this section of the IG defines Digital Identifiers suitable for use in person matching where high confidence in the Digital Identity associated with such an identifier is needed. Though there are benefits in having just one such credential, an individual's choice to use multiple Digital Identifiers each from a different service, also referred to as an Identity Provider or Assigner, is also consistent with the IG’s requirements. This section of the IG also describes Enterprise Identifiers which are the next best option when a Digital Identifier is unavailable or has not yet been established. In this context, "Enterprise Identifiers" are identifiers issued by assigners who have not implemented the stricter requirements necessary for Digital Identifiers. For example, a clinic that leverages insurance member IDs for identifiers and therefore requires additional demographics to be provided during a match request to the insurance company because the identifier is not 1:1 with a unique identity. 

&emsp;&emsp;   

### Requirements for Digital Identifiers for Individuals  

- Identifier **SHALL** be capable of a validation process. Acceptable validation methods include 1) the user authenticates themselves at a level of authentication assurance commensurate with that of the credential itself and the credential is confirmed to originate from a trusted Identity Provider -- authentication assurance **SHALL** be AAL2 or greater for any [identity assurance level](guidance-on-identity-assurance.html) greater than IAL1; 2) relying party queries the Identity Provider's system to confirm demographics associated with the individual in a privacy-preserving way, for example by presenting a cryptographic hash of first name, last name, date of birth (DOB) and home street address including zip code or city and state along with the Identifier; or 3) authenticated individual authorizes sharing of demographics with the relying party. Acceptable verification methods include: 1) Identifier matches an Identifier previously associated to the medical record or 2) the Individual Profile Photo associated with an OpenID Connect Credential bound to the Identifier is consistent with this IG and NIST 800-63A requirements on the use of biometrics and is a visual match to the individual or to a government-issued photo ID previously associated with the individual during a documented identity verification event and saved in their record. 

- A documented identity verification process, performed by the Identity Provider directly and not using a third party or third-party Trusted Referee, at a minimum **SHALL** establish that a unique individual is represented by each Identifier and includes a Declaration of Identity attestation by the individual (such that it is fraudulent to claim a false identity). This requires the Identity Provider to follow a process that is [IAL1.5 or higher](guidance-on-identity-assurance.html). As future guidance may require an indication of individual attribute verification status, for example, a flag indicating whether an address was verified, and the verification date, Identity Providers **SHOULD** capture sufficient detail in their Identity Proofing records that their systems can differentiate between verified and unverified identity attributes.  

-  Identifier **SHALL** be a version 4 (random) Globally Unique IDentifier (GUID or UUID as per [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122)) that remains unique to the person for all time within the assigner’s system: the UUID **SHALL NOT** be assigned to a different person later, and a different UUID **SHALL NOT** be assigned to that same person by the assigner.  

- Each Digital Identifier **SHALL** correspond 1:1 with a unique person on the Identity Provider's (assigner's) system: more than one Identifier **SHALL NOT** be generated within the assigner's system for the same individual, as that would lead to mismatches on individual identity and potential patient safety issues. In-person processes and remote equivalents exist for binding a strong credential to a Person record. As one example, a digital credential from a third-party Identity Provider can be associated with a record when IAL2-verified First Name, Last Name, Home Street Address, and Date of Birth exist in both places and can be matched within the record and a Declaration of Identity was made to both the Identity Provider and the managing organization responsible for the Person record. In the case of a professional credential associated with an organization, the individual also attested to their legal authority to act as a representative of the organization and the Identity Provider verified the uniqueness of the organization and its existence, including at the claimed street address, at the same or a higher level of identity assurance. At a minimum, the organization name and state of existence are recorded by the Identity Provider along with any attested entity type, and may be included with other verified demographics about the individual. 

- Identifier **SHALL NOT** ever be reassigned to a different individual except in the case of name changes.  

- The individual identity verification process **SHALL** require the individual to attest that any attributes they provide correspond to their own identity. Legal names **SHALL** be used and the use of work addresses or phone numbers or other attributes not belonging to the individual **SHOULD** be discouraged.  

- The email address and mobile number provided **SHALL** be under the individual's exclusive control if used to secure the Identifier or an associated credential. 

- Identifier **SHOULD** be “FHIR-ready”: The Identifier can be associated with an OpenID Connect credential with OAuth 2.0 authentication capabilities initiated through <a href="http://hl7.org/fhir/smart-app-launch/history.html">HL7 SMART App Launch IG</a> on its own, or with [UDAP Consumer-Facing](https://hl7.org/fhir/us/udap-security/consumer.html) or [UDAP Tiered OAuth for User Authentication](https://hl7.org/fhir/us/udap-security/user.html) with UDAP JWT-Based Authentication, asserted in a [UDAP Business-to-Business](https://hl7.org/fhir/us/udap-security/b2b.html)) transaction within an Authorization Extension Object, or shared in another trusted context. Assigners which manage patient health records **SHALL** associate a patient with their Identifier using Patient.identifier where Identifier.system = `"http://hl7.org/fhir/us/identity-matching/ns/HL7Identifier"`, corresponding to the [Identity-HL7-Identifier naming system](NamingSystem-Identity-HL7-Identifier.html), to establish these identifiers within their own systems. The match responder **SHALL** return the appropriate matching patient when a query from a trusted party includes an Identifier as a search parameter or in a match request. When it exists, the Identifier **SHOULD** appear in OpenID Connect identity claims made to trusted healthcare relying parties; note, however, that the Identifier defined in this IG is distinct from the OpenID Connect subject identifier, as the following example demonstrates (Details about the identifier may be updated as it becomes more broadly adopted or is officially registered): 

```json 
{ 
   ... 
   "iss":"https://generalhospital.example.com/as", 
   "sub":"328473298643", 
   "hl7_identifier":"123e4567-e89b-12d3-a456-426614174000a", 
   "amr":"http://udap.org/code/auth/aal2", 
   "acr":"http://udap.org/code/id/ial2", 
   "name": "Jane Doe", 
   "given_name": "Jane", 
   "family_name": "Doe", 
   "birthdate": "1979-01-01", 
   "address": { 
     "street_address": "1234 Hollywood Blvd.", 
     "locality": "Los Angeles", 
     "region": "CA", 
     "postal_code": "90210", 
     "country": "US"}, 
   "phone_number": "+1 (555) 777-1234", 
   "email": "janedoe@example.com", 
   "picture":"https://generalhospital.example.com/fhir/Patient?identifier=https://generalhospital.example.com/issuer1|123e4567-e89b-12d3-a456-426614174000a" 
} 
``` 

Alternatively, the HL7 Identifier may be included as a FHIR Identifier in the Resource referenced by the  [SMART fhirUser claim](https://hl7.org/fhir/smart-app-launch/scopes-and-launch-context.html) using the [Identity-HL7-Identifier](NamingSystem-Identity-HL7-Identifier.html). 

- The combination of Identifier plus its Assigner (if any) **SHALL NOT** be reassigned for an individual; therefore, the Identifier **SHALL** be protected like a Social Security Number, and terms between the Identity Provider and its users **SHALL** also require this, and **SHALL NOT** be shared other than for patient matching purposes in a healthcare setting. The Identifier itself **SHALL NOT** be used as an OpenID Connect identifier and **SHALL NOT** be programmatically derived or otherwise possible to deduce from the OpenID Connect identifier since the OpenID Connect identifier may need to be re-issued from time to time, and individuals may want to use their OpenID Connect credential to authenticate themselves in other settings in which they do not wish to share personally identifiable information (PII). Identity Providers **SHALL NOT** enable an individual to authorize sharing of the Identifier with an endpoint that is not a trusted organization. For Identifiers assigned at any identity assurance level greater than IAL1, Identity Providers which establish a mechanism for proof of control of the credential **SHALL** associate with the Identifier an [authenticator meeting NIST AAL2 or higher authentication assurance](https://pages.nist.gov/800-63-3/sp800-63b.html) that can be reset, in lieu of or supplemental to the OpenID Connect 1.0 workflow.    

- The Identifier and any associated credentials **SHALL** be managed consistent with [NIST 800-63A Digital Identity Guidelines](https://pages.nist.gov/800-63-3/) except as specified otherwise in this IG. 

&emsp;&emsp;   

### Digital Identifier Workflow Example 

Patient completes an [IAL 1.8](guidance-on-identity-assurance.html) or greater identity verification process with a healthcare organization at registration and/or check-in, and the resultant Digital Identifier is then associated with the patient’s record in that organization's electronic health record (EHR). The process includes collection and verification of (at a minimum, verification of the control of) a personal mobile number and email address belonging to the patient. The Identity Provider binds the Digital Identifier to an OpenID Connect credential with AAL2 authentication assurance. The patient subsequently authenticates to their insurance company's system using this credential, after which the insurance company uses the Digital Identifier in a match request to the healthcare organization. Because this strong identity assurance credential has been used to authenticate the individual to both systems, and the patient authorizes sharing of PII from the Identity Provider to the healthcare organization for identity resolution, the healthcare organization can confidently share the correct patient data with the requesting party. If needed, the health system can contact the account holder out of band for additional information or can request real-time identity verification.  

&emsp;&emsp;  

### Requirements for Enterprise Identifiers 

Locally-established business identifiers used in cross-organizational matching, including temporary identifiers, SHALL correspond to unique identities in the real world.  In other words, business identifiers used in cross-organizational matching **SHALL** be chosen such that the identifer was not previously used for a different individual and **SHALL NOT** be reassigned to a different person in the future. NOTE that these are examples of what can be used for matching and may not meet all the requirements required of a Digital Identifier as defined in this IG. 

Additionally, the following **SHALL** also be required for Enterprise Identifiers: 

- Unique for the individual person (i.e., not the same identifier for entire family) within organizational boundaries of the exchange partner  
- “assigner” plus “identifier”/ (number) is not reusable for a different person 
- Capble of being stored as an identifier along with its assigner in FHIR Patient resource and therefore used in matching or other transactions  
- Identifiers with date issued, expiration date, or other validity period will contain this metadata when available. 

Assigners **SHOULD** avoid the letters I and O in identifiers, as they are difficult to differentiate from numbers 1 and 0. 

&emsp;&emsp;   

### Enterprise Identifier Workflow Example 

Patient provides their identifier(s) to a healthcare organization at registration and/or check-in, and the identifier(s) is/are then associated with the patient’s record. As an alternative to such an in-person binding to the record, patient rosters could be shared that describe how to associate each patient medical record number and insurance identifier pairing, for example, to manage identities at scale. 

&emsp;&emsp;   

### Miscellaneous Established Identifiers 

Absent a Digital Identifier or Enterprise Identifier as described above, other identifiers are helpful in best practice person matching, for example: 

- Social Security Numbers/Last 4 
- Driver's License Numbers 
- Military ID Numbers 
- Passport Numbers 
- Individual National Provider Identifier 

&emsp;&emsp;   

### Miscellaneous Identifier Workflow Example 

As these Miscellaneous Identifiers are increasingly collected, they are useful on their own or along with Enterprise Identifiers in improving probabilistic [Patient Matching](patient-matching.html) as described elsewhere in this IG.  

{% include link-list.md %} 


---

// File: input/pagecontent/downloads.md

### Package File 

The following package file includes an NPM package file used by many FHIR tools. It includes all the value sets, profiles, extensions, list of pages and URLs in the implementation guide (IG), etc. for this version of the IG. This file contains all of the rules about what makes the profiles valid and should be the first choice when generating any implementation artifacts. Implementers will still need to be familiar with the contents of this specification and the applicable profiles to make a conformant implementation. See the overview on validating [FHIR profiles and resources](http://hl7.org/fhir/R4/validation.html): 

[Package](package.tgz) 

  &emsp;&emsp;   
  &emsp;&emsp;   

### Downloadable Copy of Entire Specification 

The following zip file contains a downloadable version of this IG that can be hosted locally: 

[Downloadable Copy](full-ig.zip) 

  &emsp;&emsp;   
  &emsp;&emsp;     



  #### Cross Version Analysis 

{% include cross-version-analysis.xhtml %} 

#### Dependency Table 

{% include dependency-table-short.xhtml %} 

#### Globals Table 

{% include globals-table.xhtml %} 

#### IP Statements 

{% include ip-statements.xhtml %} 

---

// File: input/pagecontent/glossary.md

**Authenticator Assurance Level (AAL)**:  A measure of the strength of an authentication mechanism and, therefore, the confidence in it, as defined in [NIST 800-63A](https://pages.nist.gov/800-63-3/sp800-63a.html) in terms of three levels: AAL1 (Some confidence), AAL2 (High confidence), AAL3 (Very high confidence). 

**Credential**: An object or data structure that authoritatively binds an identity, via an identifier or identifiers, and (optionally) additional attributes to at least one authenticator possessed and controlled by a cardholder or subscriber. 

Sources: NIST SP 800-63-3, NIST SP 1800-17c 

**Credential Service Provider (CSP)**: A trusted entity that issues or registers subscriber tokens and issues electronic credentials to subscribers. The CSP may encompass registration authorities (RAs) and verifiers that it operates. A CSP may be an independent third party or may issue credentials for its own use. 

Source(s): NIST SP 800-63-3 

**Digital Identity**: Digital Identity referred to in this guide means the technology and processes that support personal identity as it pertains to electronic health information. Digital health identity includes not just identifiers, but also components such as matching, identity vetting (also referred to as proofing or verification), identity authentication, authorization and access control, as well as other technologies and processes. 

**Golden Record**: The golden record encompasses all the data in every system of record within a particular organization. A system of record is an information storage and retrieval system that serves as the authoritative source for a particular data element in a system containing multiple sources of the same element. 

NOTE: A Golden Record captures all the correct and current information for a Patient while suppressing information that is thought to be out-of-date or incorrect. Often, such a Golden Record simply omits older inconsistent information such as an address. 

**Identity Assurance Level (IAL)**: A category that conveys the degree of confidence that the applicant’s claimed identity is their real identity, more and more superseding LoA. 

**Knowledge Based Verification (KBV)**:  A process that involves questions related to financial transactions tied to a Social Security Number (SSN). KBV SHALL NOT be used as a substitute for the in-person or remote unsupervised match of the individual to the government issued photo ID at this level or higher and MAY only be used if necessary as an addition to a photo ID comparison process, when required to resolve to a unique identity. 

**Level of Assurance (LoA)**: Describes four levels of identity assurance (LoA1-4) and references NIST 800-63-2 technical standards and guidelines, which are developed for agencies to use in identifying the appropriate authentication technologies that meet their requirements. 

**Manual Stewardship**: Manual stewardship refers to the act or process of people contributing to the partitioning of records into identities/people. A matching system generally does the bulk of this partitioning, but humans may become involved especially when the automatic matching appears to be in error. These errors include both inappropriately merging records from different people into a single identity or by having records for a single person divided into more than one identity. 

**Medicare Beneficiary Identifier (MBI)**: An alphanumeric code assigned by the Centers for Medicare and Medicaid Services (CMS) to Medicare beneficiaries for purposes of identifying a covered individual for purposes of Medicare transactions like billing, eligibility status, and claim status. The MBI appears on a beneficiary identification card and replaces the Health Insurance Claim Numbers (HICNs), which included the beneficiary's Social Security Number. The MBI is a unique, randomly generated, non-intelligent 11-character code made up only of numbers and uppercase letters (no special characters). The MBI doesn’t use the letters S, L, O, I, B, and Z to avoid confusion between some letters and numbers (e.g., between “0” and “O”).  

**Patient Matching**: Patient matching helps address interoperability by determining whether records - both those held within a single facility and those in different healthcare organizations – correctly refer to a specific individual. Matching methods use demographic information, such as name and date of birth. 

**Patient Mediated**: Patient or their authorized representative authorizes access to their data by a third party when it is under patient’s management and not the data creator’s management (e.g., a consumer app enables the patient to manage their own data) 

**Strengths of Identity Evidence**: The quality requirements (UNACCEPTABLE, WEAK, FAIR, STRONG, and SUPERIOR) for identity evidence collected during identity proofing.  See the [Table 5-1 Strengths of Identity Evidence](https://pages.nist.gov/800-63-3/sp800-63a.html#63aSec5-Table1) 

**Unified Data Access Profiles (UDAP)**: Published by [UDAP.org](https://www.UDAP.org) to increase confidence in open API transactions through the use of trusted identities and verified attributes. UDAP use cases support standards-based security, privacy, and scalable interoperability through reusable identities, leveraging Dynamic Client Registration, JWT-based client authentication and Tiered OAuth.  

{% include link-list.md %} 


---

// File: input/pagecontent/guidance-on-identity-assurance.md

### Overview

This section provides best practices that **SHALL** be used in addition to NIST 800-63-3 Digital Identity Guidelines for practical application in healthcare settings. These procedures can be used to achieve Identity Assurance Level 2 (IAL2) and other [identity assurance levels](glossary.html) between IAL1 and IAL2 in typical healthcare settings, considering the [identity evidence](glossary.html) generally available across all patient populations. The authors have been mindful of health equity considerations and have considered in the development of this guidance sensitive populations such as pediatric patients and persons experiencing housing insecurity. As a result, the guidance reflects an understanding of the prevalence of shared addresses (when shelters and last known hospitalization are used as a home street address) and other cases where identity evidence typically needed for IAL2 may not be available. 

### Best Practices for Identity Verification

Any system of an Identity Provider conforming to this IG **SHALL** also conform to the NIST 800-63-3 Digital Identity Guidelines except as adapted in this guide and **SHALL** publicly post their identity verification (and authentication, if authentication is offered) policy in a manner that is easily discoverable online, additionally referencing this IG if attesting to be compliant with it. Specifically, IAL1.6 and IAL1.8 requirements are intended to be consistent with NIST 800-63A identity verification procedures for IAL2 identity assurance, however, with different required identity evidence, data collection, and other procedural clarifications as indicated in the IG.

The identity verification policy **SHALL** describe the practices, consistent with this guide, used by employees or agents of Identity Provider's organization to verify and manage identities, along with whether and how those employees and agents may perform as Trusted Referees, though others **SHALL NOT** do so, and how personal information is managed by the Identity Provider. 

Identity Providers **SHALL NOT** rely on third parties as Trusted Referees or Trusted Agents, to vouch for individuals, or to perform identity verification including on behalf of another person as is generally permitted under NIST 800-63-3 Digital Identity Guidelines. 

Additionally, the IG aims to align with NIST guidelines for using Mobile Driver's Licenses (mDLs) as a means for authentication and/or identity verification of individuals. Note that as of this time, it is known that the identity assurance levels of mDLs may vary from state to state.

NOTE: The IALs defined below are not currently specified in a code system or value set within this implementation guide (IG). 

The intermediate identity assurance levels (IAL1.2-1.8) described below have NOT been endorsed by NIST in any capacity, though the team has requested their feedback. 

To verify an individual’s identity at one of the levels below, the Identity Provider  **SHALL** collect the following information from the individual: 
{:.bg-info}
- Full Legal Name (the name that the person was officially known by at the time of issuance of the supporting evidence; not permitted are pseudonyms, aliases, an initial for surname, or initials for both First and Last names unless the actual First and/or Last name is in fact a single letter) 
- Home Street Address (1) 
- Date of Birth 
- Email Address  
- Mobile Number (preferred; if a mobile number is not available, collect an alternative number for the individual) 
{:.bg-info}
{:.bg-info}
In some cases, data collected for identity verification cannot be verified in the typical ways. For example, persons experiencing homelessness may provide any temporary address such as a shelter, hospital, community resource center, or other location, or may provide any portion of an address that is known (e.g., zip code).
Unless explicitly required otherwise at certain levels, at a minimum, control of the email address and mobile number **SHOULD** be verified at every level of assurance listed below through the use of an Enrollment Code as per [NIST SP 800-63A](https://pages.nist.gov/800-63-3/sp800-63a.html) section 4.6.
NOTE: Implementers are encouraged to promote the availability of free mobile number services that support long term use, since these may facilitate [patient matching](glossary.html) and [credential](glossary.html) management; these services may be particularly helpful for those facing housing insecurity or who may be too young to have established credit bureau type records.
{:.bg-info}

The Identity Provider **SHALL** also verify the First Name, Last Name, Home Street Address, Date of Birth, and any other verifiable demographics which they will claim have been verified, using the required evidence listed below and corresponding to the desired level of identity assurance, and completing other required steps as follows:  
{:.bg-info}

- **IAL1** requirements:  
  - Declaration of Identity attestation by the individual indicates that submitted information represents their own identity.
{:.bg-info}

​       

- **IAL1.2** requirements: 
  - An unspecified ID was used to verify name and birth date.
  - Declaration of Identity attestation by the individual indicates that submitted information represents their own identity.  

​    

- **IAL1.4** requirements:
  - A US state-issued photo ID or nationally-issued photo ID was used to verify first name, last name, and date of birth.
  - Declaration of Identity attestation by the individual indicates that submitted information represents their own identity  
{:.bg-info}

​    

- **IAL1.5** requirements:
  - Two of the following were used to verify first name, last name, date of birth, and home street address: 1) US state-issued photo ID, nationally-issued photo ID, or unique [Digital Identifier](https://build.fhir.org/ig/HL7/fhir-identity-matching-ig/digital-identity.html#requirements-for-digital-identifiers); 2) insurance card; 3) medical record.
  - PLUS if claimed address cannot be verified using those two pieces of evidence along with credit bureau type records:
    ​    verify the individual's control of an email address **OR** Fair or stronger evidence confirms the email address belongs to the individual 
    ​	      **OR**
    ​    verify the individual's control of a mobile number **OR** Fair or stronger evidence confirms the mobile number belongs to the individual
    ​	      **OR**
    ​    verify an Individual Profile Photo previously associated with the identity 
  - In cases when an Identity Provider is unable to verify their control of either a mobile phone number or an email address that an individual claims to be associated with their identity, identity assurance does not meet IAL1.5
  - Declaration of Identity attestation by the individual indicates that all submitted information including first name, last name, date of birth, and home street address represents their own identity 

IAL1.5 identity verification is the lowest level of identity assurance that can establish a unique human identity that exists in the real world. IAL1.5 is expected to map to many existing systems’ procedures for enabling patient electronic access to data at a single health system (2). Although this level of identity verification may be relevant to prevent duplicates in medical record systems and has a role in verifying demographic information used in patient matching between HIPAA Covered Entities, the lack of in-person or virtual match of an individual to a photo on identity evidence or of their control of an authenticator associated with evidence or Digital Identity generally does not provide high confidence in the identity of the individual.

​    

- **IAL1.6** requirements: 
  - US state- or nationally-issued photo ID confirmed by comparison to individual   
  - Declaration of Identity attestation by the individual indicates that all submitted information including first name, last name, date of birth, and home street address represents their own identity   
  - Verify the individual's physical residential Address of Record 
  - Send a notice of identity verification, including an email or telephone contact information for the Identity Provider, by postal mail to the verified Address of Record, or to an email address or mobile number that had already been registered to the person in the Identity Provider’s system OR that appears on a utility bill in their name that is additionally submitted as identity evidence and is consistent with other evidence. The absence of multiple pieces of identity evidence in IAL1.6 is mitigated by this notice.
{:.bg-info}

​    

- **IAL1.8** requirements: 
  - Two Fair or stronger pieces of evidence were used to verify first name, last name, date of birth, and home street address--for example: 
      - Two of:  1) US state-issued driver's license or other Fair or stronger photo ID confirmed by comparison to individual and consistent with other demographics submitted by the individual; 2) medical record number (and the medical record number issuer can verify that the number is consistent with other demographics submitted by the individual); or 3) insurance card (and information on card is consistent with other demographics submitted by the individual) OR 
      - US state- or nationally-issued photo ID confirmed by comparison to individual plus mobile number billed to the individual 
  - Declaration of Identity attestation by the individual indicates that all submitted information including first name, last name, date of birth, and home street address represents their own identity. 
  - Verify the individual's physical residential Address of Record 
  - Notice, including an email or telephone contact information for the Identity Provider, is either sent by postal mail to the verified Address of Record or sent via SMS to the mobile number verified as billed to the individual by name.

​    

- **IAL2** requirements: 

  - One Strong plus two Fair or stronger pieces of evidence (for example: State driver's license confirmed by comparison to individual, a Fair or stronger photo ID confirmed by comparison to individual, and one other piece of Fair or stronger evidence verified) OR one Superior/Very Strong piece of evidence (for example: Government-issued passport, REAL ID, Enhanced ID, or US Military ID); this photo ID is confirmed by comparison to the individual.  
  - Declaration of Identity attestation by the individual indicates that all submitted information including first name, last name, date of birth, and home street address represents their own identity. 
  - Verify the individual's physical residential Address of Record. 
  - Notice, including an email or telephone contact information for the Identity Provider, is either sent by postal mail to the verified Address of Record or sent via SMS to the mobile number verified as billed to the individual. 
{:.bg-info}

​     

**Additional Examples of Strong Evidence:** 
(1) US State- or territory-issued regular (not REAL ID or Enhanced ID) driver's license or ID card including a photograph

**Additional Examples of Fair Evidence:** 
(1) Other ID card including a photograph and issued by a federal, state, or local government agency or entity 
(2) A copy of a utility bill (gas, electric, water, cable TV, or internet, etc.) indicating the individual's name and home address 
(3) A mobile phone number billed to individual (a copy of the bill is one way to verify this)  
(4) An individual National Provider Identifier (NPI) in individual's name (if they are a provider) 
(5) A bank or credit card statement from a US-based financial institution indicating the individual's name and home address 
(6) A state medical license (if they are a provider) 
(7) Original or certified copy of birth certificate 
(8) US Social Security Card 

In healthcare settings, additional demographics may also be collected and used in matching (for example, ethnicity, administrative gender, and sex assigned at birth). Refer to the Patient Matching section for any additional verification steps or assertions that may be required before including such attributes in a match request, or using them to process such a request on the responder's side.  

**Organizational Identity**, when relevant, is verified through an attestation by an individual, whose identity is also verified at a level of assurance commensurate with that of the credential desired, that they are an authorized representative of that unique legal organizational entity. The legal existence of the organization **SHALL** also be verified along with the organization's street address included in the individual's attestation, through government records or equivalent, as well as the control of any hostname or other electronic endpoint presence that will be asserted in a credential or otherwise bound to the organizational identity.

NOTE: Although implementers, lacking more specific requirements that may exist in network participation agreements, likely want to perform their own risk analyses to determine the appropriate IAL for various use cases (for example, a patient’s access to their own data or a HIPAA Covered Entity's access to health data for Treatment, Payment, or Operations), this IG provides example use cases in which certain input match invariants, match input data, and IALs are deemed appropriate based on industry feedback received. The guide also specifically cites recommended IALs for professional users and administrators in section 3.2. 

### Individual Profile Photo

An Individual Profile Photo associated with an identity **SHALL** be verified during identity verification or a subsequent, authenticated event that confirms the match between the photo and the individual, i.e., as in 800-63 where the photo taken during a proofing event is confirmed as matching with the photo on the individual's identity evidence for IAL2 remote unsupervised or is confirmed to match the individual when identity verification is performed in person. The photo can be used to prevent errors in matching or in identity resolution. 

### Use of Social Security Number (SSN)

Social Security Number (on its own without presenting the card itself) does not have a role as evidence in IALs beyond IAL1.5 except as may be needed for identity resolution above and beyond other required evidence.  

### Use of Knowledge-Based Verification (KBV)

Knowledge-Based Verification (KBV) is a process that involves questions related to financial transactions tied to a Social Security Number (SSN). KBV **SHALL NOT** be used as a substitute for the in-person or remote unsupervised match of the individual to the government issued photo ID at IAL1.6 or higher, and **MAY** only be used if necessary as an addition to a photo ID comparison process, when required to resolve to a unique identity.

From 800-63: 

- KBV **SHALL NOT** be used for in-person (physical or supervised remote) identity verification. 
- KBV (sometimes referred to as knowledge-based authentication) has historically been used to verify a claimed identity by testing the knowledge of the applicant against information obtained from public databases. The [CSP](glossary.html) (referred to in this IG as an Identity Provider) MAY use KBV to resolve to a unique, claimed identity. 
- KBV can be used to verify one Fair piece of evidence 
- NIST 800-63A contains additional restrictions on the use of KBV for identity verification at IAL2 in section 5.3.2 Knowledge-Based Verification Requirements.

### Authorized Representatives

There are two primary actors that engage in the process of requesting health data from an external source:

- Patient – the subject of the data query being sent in a match request
- User – The individual who is being authenticated to initiate a match request

The Patient and the User may not be the same individual in a transaction. An individual who has been authorized to access another individual's health data is called an Authorized Representative. Instances where an Authorized Representative is present include, but are not limited to:

- B2C Proxy User – An authorized representative is allowed to access a patient’s health record (e.g. a parent accessing their child’s records in a special case of [Patient-Directed B2C](use-cases.html#patient-directed-b2c)).
- See the [Use Cases](use-cases.html) tab for additional examples.

An authorized representative's identity **MUST** be verified and sufficient demographics **MUST** be collected if matching on the identity of the representative is to be performed, and at [IAL 1.8](guidance-on-identity-assurance.html) or higher if the match on identity will, if confidence in authentication exists, ultimately authorize access to data. In all cases whether the representative is, if any local policies are also met, authorized to access data on behalf of a patient is outside the scope of this IG. The B2C workflow with credentials at the responding organization is already broadly used as per the <a href="http://hl7.org/fhir/smart-app-launch/history.html">HL7 SMART App Launch IG</a>.


### Organizational Identity

Organizational Identity is important for relying parties such as responders to use when considering the source of a data request (for example as explicitly included in a requester's signed assertion) in their authorization decision, or to know the identity of a FHIR server or identity service--especially for the purpose of audit logging. When a transaction includes a claim of Organizational Identity in the digital certificate used to sign the claim or within another assertion such as a token request, the following details MUST be included:

- Verified Legal Name of Organization responsible for data in the aspect of the transaction they are performing
- State where Organization was verified
- Street Address verified for Organization (if information more granular than State is shared)
- Entity Type specified in an attestation by the organization’s representative (either HIPAA Covered Entity, Business Associate of a HIPAA Covered Entity, Healthcare Entity that agrees to protect patient information consistent with HIPAA but is not a Covered Entity or Business Associate, Patient/Consumer, or Non-Declared)

When the Entity Type is a Covered Entity or Business Associate, the correct type **SHALL** be stated transparently in a transaction. Additionally, if a Covered Entity is participating in a transaction they must obtain their own credentials and a Business Associate **SHALL NOT** use the credentials of a Covered Entity.

When the requirements above are also met, the individual identity verification of the organization's representative **SHALL** be used to establish the identity assurance level for the Organizational Identity.


**References:**  
&nbsp;&nbsp;&nbsp;&nbsp;[UDAP Levels of Assurance](https://www.udap.org/udap-identity-assurance-levels)  
&nbsp;&nbsp;&nbsp;&nbsp;[NIST 800-63A](https://pages.nist.gov/800-63-3/sp800-63-3.html)  
&nbsp;&nbsp;&nbsp;&nbsp;[SMART candidate Code System for existing NIST levels plus IAL1.2 and IAL1.4](http://hl7.org/fhir/uv/shc-vaccination/2021Sep/ValueSet-identity-assurance-level.html)  

(1) This IG provides a number of alternatives to Home Address verification since it may be difficult to verify or to match on the home address of a youth or of a person who is experiencing housing insecurity. This can also be an issue for multi-family dwellings when a unit number is not specified or cannot be verified. 
(2) [Patient Records Electronic Access Playbook](https://www.ama-assn.org/system/files/2020-02/patient-records-playbook.pdf), [Patient IAL2 as in TEFCA](https://www.healthit.gov/sites/default/files/page/2019-04/FINALTEFCAQTF41719508version.pdf) and [Kantara "IAL2 Light" proposal to NIST (1 STRONG or 3 FAIR)](https://github.com/usnistgov/800-63-4/files/6481076/IAL.1.Update.-.Kantara.comments.docx). 

{% include link-list.md %}


---

// File: input/pagecontent/index.md

<div class="stu-note" markdown="1"> 

This Identity-focused FHIR implementation guide (IG) has been established upon the recommendations of ONC's FHIR at Scale Task Force (FAST) Identity Team and has been adapted from solution documents previously published by the team. The IG’s primary objective is to provide guidance on identity verification and patient matching as used in workflows pertinent to FHIR exchange and to facilitate cross-organizational and cross-network interoperability. 

 

The IG may provide a foundation for future digital identity management requirements. 
</div> 

 

&emsp;&emsp;   
### About This Guide 

This IG profiles the FHIR patient $match operation for use in cross-organizational workflows and serves as a set of best practices for person matching and identity management in similar FHIR transactions, as well as in other non-FHIR transaction types. 

The requirements described in this guide are intended to align with the solutions originally proposed by the ONC FHIR at Scale Task Force’s Identity Tiger Team. 
{:.bg-info} 

This guide is divided into several pages which are listed in the menu bar. 

- [Home]\: The home page provides the introduction and background for this project and general requirements that apply to all workflows described in this guide. 
- [Guidance on Identity Assurance]\: This page describes best practices for individual and organizational identity verification in the most common workflows necessary to support healthcare-related transactions. 
- [Patient Matching]\: This page describes the appropriate usage of person matching for cross-organizational exchange. 
- [Digital Identity]\: This page provides best practices for individual and organizational identity management in the healthcare context. 
- [Artifacts]\: This page provides additional conformance artifacts for FHIR resources.
- [Use Cases]\: This page provides workflows around core Identity concepts, as well as Use Case workflows that highlight different types of healthcare transactions. 
- [Industry Initiatives]\: This page includes a compilation of industry-wide digital identity and patient matching projects.

{% include link-list.md %} 

&emsp;&emsp;   
### Executive Summary 

This IG provides guidance to enhance current workflows that support person matching and digital identity, and envisions a path for both providing more specific guidance and incorporating emerging identity concepts over time. This specification contributes to a long-term goal of establishing Digital Identity that is suited for interoperable use by providing guidance on identity assurance so that these best practices for attribute and evidence verification can serve as a foundation for better person matching. The IG also profiles the patient $match operation for cross-organizational use and highlights best practices for using verified matching attributes (i.e., demographics and other personal information) when responding to a match request, managing and using Digital Identifiers, and interpreting match results. 

This guide will address the two concepts of patient matching and Digital Identity with care to differentiate between the two distinct disciplines and the workflows usually unique to one concept or the other:   

> **Identity.**  Digital health identity refers to the technology and processes that support personal identity as it pertains to electronic health information. Digital health identity includes identifiers as well as components such as matching, identity verification (also referred to as proofing or vetting), identity authentication, authorization and access control, and other technologies and processes.  

> **Patient Matching.**  Patient Matching and record linkage help address interoperability by determining whether records—both those held within a single facility and those in different healthcare organizations—correctly refer to a specific individual. Matching methods generally rely on demographic information, such as name and date of birth. 

Research has shown that matching is improved when higher-quality demographics are provided in the match request; verifying the identity of an individual at a specific identity assurance level (IAL1, IAL2, etc.), and that any match input data is consistent with the identity verification event, is a method that improves this quality so that we can measure in a standard way the data included in a match request. For this reason, this IG will provide both guidance on how to implement and improve identity assurance and how to leverage identity assurance in matching. 

When the identity of the person who is authenticated in a transaction is known with high confidence, this information can be used in an access decision, e.g., Patient-Directed Exchange. This allows implementers to rely on user authentication in this workflow instead of probabilistic matching, which becomes increasingly convenient as federated identity services proliferate. This also reduces the number of credentials an individual needs to maintain. 

As a secondary effect, digital credentials with high-confidence identity and authentication assurance and a globally unique identifier associated with the individual, even in Business-to-Business matching (where the patient is not authenticated as being present in the transaction), emulate the perfect matching described in the paragraph above. Attempting to match on such a unique identifier is a preferred best practice over matching with demographics alone. 

When identity verification has been completed for an individual, the process of verifying that demographic attributes are consistent with a unique individual in the real world makes the attributes more meaningful in match requests and improves match quality when probabilistic matching must be used.

&emsp;&emsp; 

### Testing 

For readers that are looking to test an implementation of this guide, additional testing resources can be found on the [Implementer Support page](https://confluence.hl7.org/display/FAST/FAST+Implementer+Support) of the HL7 FAST Confluence site.   

&emsp;&emsp; 


(1)  <a href="https://www.justassociates.com/application/files/1414/9134/1517/PIIWhitePaper.pdf">Patient Identity Integrity White Paper</a>  HIMSS, December 2009   
(2)  <a href="https://www.gao.gov/assets/gao-19-197.pdf">Approaches and Challenges to Electronically Matching Patients’ Records across Providers</a>  GAO, January 2019   
(3)  <a href="https://sequoiaproject.org/resources/patient-matching/">The Sequoia Project</a>     
(4)  <a href="https://www.rand.org/content/dam/rand/pubs/research_reports/RR2200/RR2275/RAND_RR2275.pdf">Defining and Evaluating Patient-Empowered Approaches to Improving Record Matching</a>  RAND, 2018 

&emsp;&emsp;   

### Credits   
<style> 
table, th, td  
{ 
  border: 1px solid White;  
  padding: 2px 
} 
</style> 
|  |    |    | 
| <u><b>Primary Authors:</b></u>&emsp; |Julie Maas  | EMR Direct        | 
|   |Carmen Smiley  | ONC        | 
|   |Aaron Nusstein  | Lantana Consulting Group 
|   |Jeff Brown  | Lantana Consulting Group 
|   |         |  | 
| <u><b>Contributors:</b></u>&emsp;  |Paul Vaughan  | Optum        | 
|   | Vijey Kris Sridharan | United Healthcare | 
|   | Jim St. Clair | MyLigo | 
|   | Catherine Schulten | Walmart | 
|   | Ryan Howells | Leavitt Partners | 
|   | Rita Torkzadeh | Independent Consultant | 

&emsp;&emsp;   
This IG was made possible by the thoughtful contributions and feedback of the following additional people and organizations: 

The members of the ONC FHIR at Scale Taskforce (FAST) Identity Team 

The members of the HL7 Patient Administration Work Group 

 

 

 


---

// File: input/pagecontent/industry-initiatives.md

This section is an ongoing compilation of industry-wide (including international) digital identity and patient matching projects. These initiatives are about solving identity and matching. The current NIST 800-63 standard, a measure for evaluating identity verification and authentication assurance, is not listed on this page.

### Digital Identity and Patient Matching Projects

[AHIMA Naming Policy Recommendations white paper](https://ahima.org/media/blfdriqj/326_21_namingpolicywhitepaper_final.pdf?oid=302787)

[Canadian Digital Identity Ecosystem](https://diacc.ca/trust-framework/)'s [Digital Trust And Identity](https://ciostrategycouncil.com/standards/103_1_2020/) and National Technical Specification for digital credentials and digital trust services

[CARIN Digital Identity](https://www.carinalliance.com/our-work/digitalidentity/)

[DirectTrust Guidance for Authentication of Individual Identity](https://directtrust.app.box.com/s/wr4qa2pqbetxyp78sbtfci5jlzofis67/file/1025491591524)  

[ECRI Health IT Safe Practices: Toolkit for the Safe Use of Health IT for Patient Identification](https://www.ecri.org/Resources/HIT/Patient%20ID/Patient_Identification_Toolkit_final.pdf)

[Finland](https://vm.fi/en/digital-identity) and Germany Self-sovereign Identity-based Collaboration in the EU

[Global Assured Identity Network (GAIN)](https://gainforum.org/)

[OpenID for Identity Assurance](https://openid.net/wg/ekyc-ida/) 

[Patient ID Now Coalition Framework for a National Strategy on Patient Identity](https://patientidnow.org/)  (The Framework identified nine areas for definition of a national patient identity strategy)

----

### IHE Profiles & other standards for Patient Identity Management 

[CARIN digital insurance card for member IDs](https://confluence.hl7.org/display/CAR/CARIN+IG+for+Digital+Insurance+Card)  

[Direct Standard - Implementation Guide for Expressing Context in Direct Messaging](http://wiki.directproject.org/w/images/4/40/Implementation_Guide_for_Expressing_Context_in_Direct_Messaging_v1.1.pdf)  

[Overview: IHE whitepaper on Document Sharing Health Information Exchanges](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html#5-patient-identity-management)

IHE Trial Implmentation Resources

&nbsp;&nbsp;&nbsp;&nbsp;[IHE - Patient Demographics Query for Mobile (PDQm)](https://profiles.ihe.net/ITI/PDQm/index.html)  

&nbsp;&nbsp;&nbsp;&nbsp;[IHE - Patient Identifier Cross-reference for Mobile (PIXm)](https://profiles.ihe.net/ITI/PIXm/index.html)  

&nbsp;&nbsp;&nbsp;&nbsp;[IHE - Patient Master Identity Registry (PMIR)](https://profiles.ihe.net/ITI/PMIR/index.html)

IHE Final Text Profiles (normative)

&nbsp;&nbsp;&nbsp;&nbsp;[IHE - Cross-Community Patient Discovery (XCPD)](https://profiles.ihe.net/ITI/TF/Volume1/ch-27.html)  

&nbsp;&nbsp;&nbsp;&nbsp;[IHE - Patient Administration Management (PAM)](https://profiles.ihe.net/ITI/TF/Volume1/ch-14.html)

&nbsp;&nbsp;&nbsp;&nbsp;[IHE - Patient Demographics Query (PDQ)](https://profiles.ihe.net/ITI/TF/Volume1/ch-8.html)

&nbsp;&nbsp;&nbsp;&nbsp;[IHE - Patient Identifier Cross-Referencing (PIX)](https://profiles.ihe.net/ITI/TF/Volume1/ch-5.html)  


{% include link-list.md %}



---

// File: input/pagecontent/patient-matching.md

### Overview 

This section of the guide extends the existing HL7 FHIR patient [$match](https://www.hl7.org/fhir/patient-operation-match.html) for cross-organizational use by authorized, trusted parties. The IG profiles the operation [$IDI-match] to account for these additional constraints.

The best practices and suggested weights are based on this team's original research which included the sources cited on the [Home](index.html) tab as well as FAST webinar feedback, FAST subject matter expert (SME) sessions, HL7 FHIR Connectathon events, and FAST Identity team participants' additional suggestions made to the FAST Identity solution document; this work has been ongoing since spring 2018.   

This guidance also applies to other matching workflows and to non-FHIR transactions. This guidance does not intend to prohibit the use of matching methods that produce comparable or higher matching rates. Realizing that a better-formed match request produces the most reliable results, this implementation guide (IG) also includes a [Guidance on Identity Assurance] section as a companion resource to this best practice patient matching. 

> **NOTE:** As security is generally out of scope for this guide, the conditions required to share personally identifiable information (PII) or to authorize an organization's or an individual’s, including the patient’s own, access to the results of a match request are not specified completely in this guide, nor should they be inferred.  However, patient-initiated workflows (for example, "patient request" purpose of use) **SHALL** always include explicit end-user authorization. 

### Match Requirements 

When transmitting identity attributes to third parties with whom sharing PII is permitted, such as:  

- within an OpenID Connect user profile, another user information request to an Identity Provider, or the resultant assertion/claim,  
- within an HL7 B2B with User Authorization Extension Object, or  
- as part of a match or search request,

and a level of identity assurance is indicated, each included identity attribute **SHALL** either have been verified at the identity assurance level asserted by the transmitting party (for example, the match requester) or be consistent with other evidence used in the identity verification process completed by that party. If a level of assurance is not explicitly asserted, the combination of identity attributes submitted **SHOULD** be consistent with, and sufficient to on their own resolve to the identity of a unique person in the real world. Specifically, identity verification **SHALL** be performed at IAL1.5 or higher level of identity assurance per this IG's [Guidance on Identity Assurance] (e.g., a first name, last name, date of birth, mobile number, email address, and home street address have been verified as belonging to the individual OR a first name, last name, and Digital Identifier compliant with this IG have been verified as belonging to the individual), consistent with the practices of NIST 800-63A using Fair or stronger evidence and/or credit bureau type records (or equivalent), and consistent with the [Guidance on Identity Assurance].  

As a best practice, identity verification **SHOULD** be at a minimum of IAL2 or [LoA-3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-2.pdf) for professionals who are end users of health IT systems and for an implementer's overall operations.  

Individual Access (or if protected health information [PHI] or PII will be returned, other than to a HIPAA Covered Entity in a Treatment, Payment, or Operations workflow) is outside the scope of this IG's Patient Matching requirements. Instead, responders to such queries **SHALL** authenticate the individual before returning PHI or PII. 

Security best practices, including transaction authorization, are generally out of scope for this IG; however implementers also **SHALL NOT** allow patients to request a match directly. A trusted system may request a match on a patient’s behalf and use it to inform the patient, especially to:  

- Recognize that the patient already has an account (when a record represents an account) 
- Recognize that a patient may have multiple identities within the system, leading to a fragmented medical record 
- Recognize that a patient’s identity might have spurious records from other people mixed in 
- Help remediate these situations without exposing PHI/PII. 

For sharing immunization records only, patient matching **MAY** be performed using identity attributes verified at IAL1.2 or higher by both requesting party and responder. 

The expectation for the use of the "IDI" profiles is:

The system making the call to [$IDI-match] ("the client") **SHALL** assert their intent and ability to supply valuable input information to support the searching algorithm by specifying, and conforming to, a particular level of data inclusion identified by one of the profiles. A Master Patient Index (MPI) (i.e., a "server" system providing the match capability) will leverage the client's assertion by validating conformance and providing a warning(s) or throwing a full exception if invariant-level testing fails. In addition, the server may potentially direct the logical code flow for matching based on the verified assurance of data quality input, as well as possible assistance in internal match scoring processes. While any designs of the server are outside the scope of this IG, the profiles of the Patient resource are intended to communicate the claimed data quality between the client and server that may be used in a variety of ways.

Historical address information is known to be useful to matching; the same requirements and guidance for the verification of current demographics **SHALL** apply to historical demographics.

#### Match on Identities 

While FHIR systems are often expected to contain only one Patient Resource per actual patient, some systems may contain many records for the same patient, typically originating from many disparate systems such as clinics, insurance companies, labs, etc. In this scenario, the Patient resources are typically already linked via automatic matching into sets of Patient Resources using [Patient.link](https://www.hl7.org/fhir/patient-definitions.html#Patient.link), where each set represents a specific patient from the perspective of the MPI system. In such a system, the patient match **SHOULD** be performed against the sets of records as opposed to the individual records. For example, if five records are currently believed to represent the same patient, a search for that patient would find the set of five and consider that as one candidate as opposed to five candidates. Moreover, that search would benefit from all of the information in the set. For example, consider a set of five linked Patient records currently in the system and Patient information input to a match request that includes a first name and last name, date of birth, telephone and [MBI](glossary.html) such that the match input information about the Patient: 

- first name and last name match Patient 1 but are somewhat different from Patients 2-5 
- date of birth matches all five of them 
- telephone matches Patient 3 and is not present in Patients 1,2,4, and 5 
- MBI matches Patient 5 and is absent in patients 1-4 

Then the strength of the match for that single candidate should consider all the matching information as opposed to either each record individually or some aggregation of the information in the records that tries to subset it to the “correct” information only (a “golden” record). 

Asking for at most four results to be returned in a match request may mean more than four actual Patient resources returned, if the responding system has not mapped one identity to one record. This results in two options: 

1. In this case, only the requested number of identities are returned and the requester can ask for all resources or some subset, as needed.  
2. All applicable records are returned; a different threshold on number of records returned could be considered instead. 

Note that a collection of records together can make them more valuable than one of the records may appear on its own.  *Feedback is welcome on the use of MatchGrade extension to help provide additional detail.*   

> **NOTE:** Although some systems may employ referential matching capabilities or other industry-established practices, methods for determining match and the use of any specific algorithms to produce results in which a responder is sufficiently confident to appropriately return results are out of scope for this IG. 

#### Consumer Match 

The term "match" used in this Implementation Guide always involves matching demographics and/or an identifier to a unique person; usually that person is the patient a transaction is about (the person whose data is being requested). In workflows where health data is not being released to a HIPAA Covered Entity, this guidance involves matching on demographics for the requester who is the patient, their authorized representative, or another third party who may as well be an unknown consumer. Under those conditions, the match confidence must meet a higher minimum bar and the additional requirements in this section **SHALL** apply. 

The quality of the match, along with the user's consent, verified demographics stored by responder for the authorized representative(s) of the patient, and identity and authentication assurance levels, inform the responder's decision about whether to authorize access to data subsequent to this Consumer Match and is based on verified attributes provided by the requester who, for example via OIDC on the wire, **SHALL** also be evaluated by the responder to confirm it is trusted to have authenticated the individual corresponding to those demographics. 

In an even more specific workflow, the patient whose data is being requested is different from the user who is the requester; in this case a high-confidence match on the patient's demographics is required in addition to user-level matching on the authorized representative as described in the previous paragraph. This second Consumer Match **SHALL** meet the same recommended minimum bar as the match performed on the user's demographics--in both cases match input weight of at least 10, including L1 invariant data (or equivalent), and IAL1.8/AAL2 identity and authentication assurance. 

The B2B with User Authorization Extension Object **SHALL** be used by client apps following client credentials grant to provide additional information regarding the context under which the client is requesting authorization. The client app constructs a JSON object containing the following keys and values and includes this object in the extensions object of the Authentication JSON Web Token (JWT), as per [UDAP Security 5.2.1.1](http://hl7.org/fhir/us/udap-security/STU1/b2b.html#b2b-authorization-extension-object), as the value associated with the key name hl7-b2b-user. The same requirements for use of hl7-b2b apply in the use of hl7-b2b-user.

<table class="table">
  <thead>
    <th colspan="3">B2B with User Authorization Extension Object<br>Key Name: "hl7-b2b-user"</th>
  </thead>
  <tbody>
    <tr>
      <td><code>version</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        String with fixed value: <code>"1"</code>
      </td>
    </tr>
    <tr>
      <td><code>purpose_of_use</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        An array of one or more strings, each containing a code identifying a purpose for which the data is being requested. For US Realm, trust communities <strong>SHOULD</strong> constrain the allowed values, and are encouraged to draw from the HL7 <a href="http://terminology.hl7.org/ValueSet/v3-PurposeOfUse">PurposeOfUse</a> value set, but are not required to do so to be considered conformant. See <a href="http://hl7.org/fhir/us/udap-security/STU1/b2b.html#preferred-format-for-identifiers-and-codes">UDAP Security 5.2.1.2</a> for the preferred format of each code value string array element.
      </td>
    </tr>
    <tr>
      <td><code>user_person</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        FHIR Person resource with all required fields populated as per Person Resource Profile for FAST ID
      </td>
    </tr>
    <tr>
      <td><code>consent_policy</code></td>
      <td><span class="label label-warning">optional</span></td>
      <td>
        An array of one or more strings, each containing a URI identifiying a privacy consent directive policy or other policy consistent with the value of the <code>purpose_of_use</code> parameter.
      </td>
    </tr>
    <tr>
      <td><code>consent_reference</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        An array of one or more strings, each containing an absolute URL consistent with a <a href="https://www.hl7.org/fhir/R4/references.html#literal">literal reference</a> to a FHIR <a href="https://www.hl7.org/fhir/R4/consent.html">Consent</a> or <a href="https://www.hl7.org/fhir/R4/documentreference.html">DocumentReference</a> resource containing or referencing a privacy consent directive relevant to a purpose identified by the <code>purpose_of_use</code> parameter and the policy or policies identified by the <code>consent_policy</code> parameter. The issuer of this Authorization Extension Object <strong>SHALL</strong> only include URLs that are resolvable by the receiving party. If a referenced resource does not include the raw document data inline in the resource or as a contained resource, then it <strong>SHALL</strong> include a URL to the attachment data that is resolvable by the receiving party. Omit if <code>consent_policy</code> is not present.
      </td>
    </tr>
  </tbody>
</table>

Example [Person Resource Profile for FAST ID](StructureDefinition-FASTIDUDAPPerson.html).

&emsp;   

### Verification 

It is helpful to know the date that attributes were verified, particularly in the case of address and mobile number since those attributes change over time. Future versions of this IG will likely include a grammar for indicating verification date in match transactions, as well as the evidence that may be used to verify individual demographic attributes or entire identities. This information may also be applied to Patient Weighted Input Information. 

The identity verification level performed to establish matching attributes is another meaningful piece of information to convey in a transaction; for an example of how to include the level of identity and authentication assurance in an OpenID Connect user profile, see the section on [Digital Identity]. 

When attributes like email address and telephone number are verified as associated with a patient, that information helps to bootstrap new account creation and (if needed) account recovery.  

An API from USPS may be helpful in verifying individual street addresses in future versions of this IG.  

Currently, National Provider Identifier (NPI) records can be used to verify provider names, addresses, and telephone numbers. 

&emsp;     

### Recommended Best Practices 

It is a best practice to include all known (required + optional) patient matching attributes in a match request (e.g., USCDI Patient Demographics); the table below indicates examples of attributes and levels of verification for consideration in different use cases: 

| **Minimum Included Attributes**                     | **Attribute Verification in B2B TPO  Workflow**               | **Attribute Verification in App-Mediated B2B with Patient User Workflow**      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ((First Name and Last Name) or DOB) and unique Enterprise Identifier | IAL1.5; onlyCertainMatches and count=1  required for patient care delivery, coverage determination, or  billing/operations | N/A; see below instead                              |
| First, Last, DOB, full (normalized as a best practice) street address | Same as above | N/A; see below instead |
| First, Last, DOB, Digital Identifier      | Same as above    | Identifier is established based on [IAL1.8  requirements](guidance-on-identity-assurance.html#best-practices-for-identity-verification) and First, Last are consistent with evidence |
| First, Last, DOB, Current Address, City, State, Medical Record Number and Assigner    | Same as above             | Verifiable patient attributes within a match request are consistent with the IAL1.8 or greater  identity verification event |
| First, Last, DOB, Current Address, Zip, Insurance Member ID, Payer ID             | Same as above       | Verifiable patient attributes within a match request are consistent with the IAL1.8 or greater  identity verification event |
| First, Last, DOB, mobile number and email address          | Same as above      | Verifiable patient attributes within a match request are consistent with the IAL1.8 or greater  identity verification event except mobile number control may be used for  verification if mobile number was not one of the two Fair pieces of evidence |

Patient Match is not expected to enforce the minimum included attributes listed above. However, when a minimum combination of attributes is supplied, Patient Match **SHOULD** find matching candidates if they exist. Under the hood, this is a requirement on the indexing capability for Patient Match to locate candidates before evaluating them. When something less than the minimum is supplied, Patient Match **MAY** return no candidates, even if matching candidates exist.  

- For example, a bare name might theoretically match no candidates or an overwhelming number of candidates. In this case, Patient Match may return no candidates, even if matching data exists. A simple phone number may or may not be enough for Patient Match to find candidates - that is left up to the implementation. 

Patient Match is expected to supply a Patient resource conforming to the Patient profile(s) defined within this IG to [$IDI-match] and entering as much information as possible is encouraged. However, requesters **SHOULD NOT** include elements whose value is unknown, since that may eliminate potential matches where the responder's system contains that information. More information helps find the right candidate and disambiguate cases where there are several candidates. This implies that Patient Match is not simply a matter of finding a candidate that exactly matches all the given demographics.  Requiring a match on every included attribute tends to discourage entering more information because the user cannot know exactly which demographics will appear in the existing Identities.  

- For example, a user should enter an address even if they are worried the patient has moved and the search will fail to find the patient at the old address. 

When onlyCertainMatches are requested, responders **SHOULD** return only results which are an exact match on Last Name and First Name, where exact means there is at most a single character or two character (for example, a transposition error) difference between the Name in the match request and the name associated with the Identity(ies) or the set of records identified as matches in the responding system. Ideally the industry will work toward developing a reliable, publicly-available list of nickname associations and common misspellings that, combined with stepped up best practices in identity verification by both requesters and responders, would support requiring such exact matches in future versions of this IG. 

Patient Match **SHOULD** be in terms of groups of records that have been partitioned prior to the Patient Match call into Identities -- groups of records that are thought to represent people.  

- For example, a candidate Identity that has the right address in one record, the right name in another, and the right telephone in another could be a strong candidate, even though no single record contains all the given information.   

Names are verified at a point in time and previous names are often useful in matching. However, best practices include periodic reverification, and it is generally expected that First and Last names reflect current names. Best practice data stewardship expects previous names to be designated as such within the Patient resource. Appropriate use of Patient.name.use and Patient.name.period are expected for use of previous names. 

Although it is possible to request a match with only First or only Last Name and still be compliant with this IG, the example [Invariants](artifacts.html) highlight minimum thresholds for the primary use cases where this is expected to occur. 

To request a match on a patient with a single legal name, known as a mononymous individual, requesters **SHOULD** use that name in the Last name field and leave the First name NULL. 

When it is permitted by [$IDI-match] or other match transaction types, and if the requester is using a profile that includes these, additional matching information can be included as input extensions or contained resources within the Patient resource. For example, current occupation data for health attributes from Resource Profile: Past Or Present Job as per the [Occupational Data for Health (ODH)](http://hl7.org/fhir/us/odh/) set of profiles on Observation resource, **SHOULD** be included by requesters since this information is useful to matching. 

Patient Match need not support wildcards, unlike the usual FHIR search mechanism. 
 
The section below provides example weight values that a match requester can use along with specialized patient resource profiles to indicate their intent to follow pre-defined minimum match input requirements.  

<div class="stu-note" markdown="1"> 
The workgroup invites suggestions from commenters regarding the use of Artificial Intelligence and Referential Matching in identity and matching. For example, should attributes not claimed by an individual be added to a record, match input request, and/or match result based on identity management resources even if those attributes were not part of a Declaration of Identity assertion by the individual? In what cases would this be acceptable? Is the guidance different when resources are authoritative or are derived from authoritative sources (such as credit bureau type records)? Are there other generative workflows or types of intelligent systems for which guidance would be helpful?
</div> 

&emsp; 


### Patient Weighted Input Information 

&emsp;&emsp;*(The information and values included here serve as an example of weights that may be adopted to achieve various threshold levels responders' systems may choose to require when performing person matching with a desired degree of certainty.)* 

Providing an agreed-upon value for matching (i.e., "weight") to specific Patient information elements included in a match request allows for a degree of matching capability either through profiling the Patient resource or through other potential mechanisms within the guidance.   

<style>
table, th, td 
{
  border: 1px solid Silver; 
  padding: 5px
}
th {
  background: Azure; 
}
</style>


| **Weight** | **Match Input Element(s)**                  |
| :----------: | ---------------------------- |
| 5          | Passport Number (PPN) and issuing country, Driver’s License Number (DL) or other State ID Number and (in either case) Issuing US State or Territory, or Digital Identifier (max weight of 10 for this category, even if multiple ID Numbers included) |
| 4          | Address (including line plus zip or city and state), telecom email, telecom phone, identifier (other than Passport Number, DL, other State ID, or Digital Identifier--for example, last 4 of SSN, Insurance Member Identifier along with Payer Identifier, or Medical Record Number along with Assigner) or [Individual Profile Photo](guidance-on-identity-assurance.html#individual-profile-photo) (max weight of 5 for inclusion of 2 or more of these) |
| 3          | First Name and Last Name       |
| 2          | Date of Birth       |
|0          | SSN (complete) |
|0          | Insurance Member Identifier |
|0          | SSN (last 5) |
|0          | Insurance Subscriber Identifier |
|0          | Previous First Name & Last Name       |
|0          | Nickname or Alias       |
|0          | First Name       |
|0          | Last Name       |
|0          | Middle Name (Including initial)       |
|0          | Address City and State       |
|0          | Address Zip        |
|0          | Sex (Assigned at Birth)       |
|0          | Sexual Orientation       |

&emsp;&emsp;

In cases where Address is not a single-family residence–for example, an apartment building without unit number, hospital, or homeless shelter–the alternative inputs are particularly important. 

This guide provides multiple profiles of the Patient resource to support varying levels of information to be provided to the [$IDI-match] operation.  Patient Match **SHALL** support a minimum requirement that the *[IDI Patient]* profile be used (base level with no information "weighting" included).  More robust matching quality will necessitate stricter data inclusion requirements and, as such, Patient Match **SHOULD** use profiles supporting a higher level of data inclusion requirements (i.e., whereas *[IDI Patient L0]* may be suitable for use cases in which returning multiple match results is acceptable, *[IDI Patient L1]* indicates an input weight threshold that is expected to only result in matches on the individual whose identity was verified at the minimum level required by this IG for consumer-facing match requests (IAL1.8/AAL2) and that attributes provided in the match request are confirmed to be consistent with). 

Trust communities may have specific requirements about minimum attributes, but in the absence of such requirements, the minimum attribute requirements of the L0 invariant are intended to reflect what may be appropriate for probabilistic searches in which requesters are HIPAA Covered Entities, and the minimum attribute requirements of the L1 invariant are intended to reflect what may be appropriate for deterministic searches in which requesters are potentially returning PHI to the consumer/patient who is the subject of a query (or their authorized representative).  

This IG does not intend to set requirements on the use of HumanName.family and HumanName.given in lieu of HumanName.text, though for purposes of clarity we generally refer to First name and Last name (Surname) since some requirements depend on that level of granularity. Systems compliant with this IG **SHALL** recognize that [HumanName.text](https://www.hl7.org/fhir/datatypes-definitions.html#HumanName.text) may be provided instead of or in lieu of HumanName.family and HumanName.given. 

<font color="Black"><b>NOTE:</b> It is important to remember that this weighted information guidance is ONLY applicable to the Patient resource instance provided as input to a match request and does not pertain in any way to the matching process or results returned from it. Data elements with weight indicated as "0" are known to be valuable in matching but were not identified as contributors to the defined example weight input tiers.</font>  

&emsp;    

### Golden Records 

The concept of matching Identities is best kept separate from the notion of a [Golden Record](glossary.html). Many organizations use a Golden Record to capture all the correct and current information for a Patient while suppressing information that is thought to be out-of-date or incorrect. Often, such a Golden Record simply omits older inconsistent information such as an address. While the FHIR Patient resource can represent both current and old names, addresses and telecoms, its restriction on birthDate limits the representation to only one. A record partitioning system behind Patient Match may decide that two records with different birthDates represent the same person, but may not be able to know which of the birthDates is correct. Ideally, Patient Match would be able to find and appropriately evaluate such a candidate, regardless of which birthDate appears on the Golden Record. 

At this time, we are not expecting match responders to organize identities according to the same standards match requesters are today, though in a future version of this IG we do expect responding systems to organize records on unique individual identities as established in the Guidance on Identity Assurance and Patient Matching sections of this guide. 

- Matching and searching **SHOULD** be identity-to-identity, not Record-to-Record. 
- Match output **SHOULD** contain every record of every candidate identity, subject to volume limits 
- Linkage between records **SHOULD** be indicated by the Patient.link field 
- Records **SHOULD** be ordered first by identity, then by score vs. the input 
- Identities (sets of records) **SHOULD** be ordered by score vs. the input as per: "The response from an 'mpi' query is a bundle containing patient records, ordered from most likely to least likely."   

If a match implementation supports creating a Golden Record to summarize the identity, match output **SHOULD** contain that record as well. 

- For example, it may have an opinion on the patient's current address and consolidate demographics that were distributed across records. 

A match implementation **SHOULD** enable [Manual Stewardship](glossary.html) of the partitioning based on identity. 

- This involves specifying not just the current state, but constraints on future states of the partitioning as records arrive or are updated. 
- While this document does not describe the form or process for such manual stewardship, it is suggested that the output of [$IDI-match] should support such contribution by providing the information on the records such that the doctor (or other authenticated user trusted with PII for specific people of interest) might spot the problem. 

Example: Suppose that a doctor at a clinic looks up a new patient in their regional health information exchange (HIE) to get a more complete medical record and sees a surprising diagnosis. This could arise due to several possibilities: 1) the patient has a diagnosis that was unknown to the doctor, 2) the HIE has another patient’s record mixed into the identity of the patient of interest (an error in partitioning), 3) the clinician is simply looking at the wrong patient’s information. In all three cases, the patient’s care might be improved if the doctor reviews the set of records that constitute the identity. If the problem is the second case above, both the care of this patient and perhaps others might be improved if the doctor could contribute to how these records are partitioned. 

A match implementation **SHOULD** partition its records into identities in real time as they arrive. Doing so: 

- Enables manual stewardship 
- Improves the quality of matching  
- Improves the quality of searching 

This is especially helpful in regard to situations where only a single unambiguous match is desired via onlyCertainMatches. 

A match output **SHOULD** reveal a presence or lack of manual stewardship. 

- Currently this could be supported via extensions 
- The IG authors request feedback from implementers regarding future guidance that may be needed in the case of a FHIR system that contains both records from many sources and Golden Records from the match implementation itself, i.e., are both types of matches returned? 

&emsp;&emsp;   

### Scoring Matches & Responder's System Match Output Quality Score 
<div class="stu-note" markdown="1">

The information and values included here are a first published Standard for Trial Use. Feedback is invited on the quality levels themselves, on the combinations of matching elements included, and on whether this publicly available definition of a search quality score (note that this is not intended to be a match probability) should be returned by responders in lieu of a locally-computed match confidence. 
</div> 

Scoring **SHOULD** be as probabilistic as possible; however search scoring algorithms vary and stakeholders have expressed interest in better informing the score shared across organizational boundaries in a [$IDI-match] response. The group, therefore, seeks feedback on [$IDI-match] implementers' interest in using either the new Score indicated below or a similar option which would include attribute-specific match result information from the [$IDI-match] responder (exact match, partial match, soundex match, etc.) for each demographic element relevant to matching within the Patient resource.  

Common correlations such as families **SHALL** be modeled (specific recommendations are invited). 

Scores **SHOULD** be computed, not guessed, whenever possible. 

The table below which designates a grading of match quality **SHOULD** be used to inform responder's search quality scoring algorithm, so that the search score returned by a responder is meaningful to the requester (This grading score **SHOULD** be conveyed within the Bundle.entry.search.score element); feedback is requested on the ability of a responder to compute and return such a score, as well as the potential value of such a quality score to requesters. The Good level generally corresponds to traits the [Sequoia Initiative](https://sequoiaproject.org/resources/patient-matching/) estimates to be 95-98% unique, and Very Good corresponds to traits that are 98-99.7% unique. Superior matches include matching information that is even more likely to indicate a unique individual, while Best matches involve a match on a government- or industry-assigned identifier.  

<style>
table, th, td 
{
  border: 1px solid Silver; 
  padding: 5px
}
th {
  background: Azure; 
}
</style>


| **Quality** |  **Score** | **Element(s) Matching in Responder's System**                  |
| :----------: | :----------: | ---------------------------- |
|Best       |  .99       | Responder's MRN/MPI or known Digital Identifier       |
|           |            | First Name & Last Name & Driver's License Number and Issuing US State |
|           |            | First Name & Last Name & Passport Number and Issuing Country |
|           |            | First Name & Last Name & Insurance Member Identifier and Payer ID      |
|           |            | First Name & Last Name & Date of Birth & Insurance Subscriber Identifier and Payer ID      |
|           |            | First Name & Last Name & Date of Birth & Social Security Number       |
|Superior   |  .8        | First Name & Last Name & Insurance Subscriber Identifier and Payer ID       |
|           |            | First Name & Last Name & Date of Birth & Address line & Zip (first 5)       |
|           |            | First Name & Last Name & Date of Birth & Address line & City & State       |
|           |            | First Name & Last Name & Date of Birth & email       |
|Very Good  |  .7        | First Name & Last Name & Date of Birth & Sex (Assigned at Birth) & SSN (last 4)       |
|           |            | First Name & Last Name & Date of Birth & Sex (Assigned at Birth) & Phone       |
|           |            | First Name & Last Name & Date of Birth & Sex (Assigned at Birth) & Zip (first 5)       |
|           |            | First Name & Last Name & Date of Birth & Sex (Assigned at Birth) & Middle Name      |
|           |            | First Name & Last Name & Date of Birth & phone       |
|Good       |    .6      | First Name & Last Name & Date of Birth & Sex (Assigned at Birth) & Middle Name (initial)      |
|           |            | First Name & Last Name & Date of Birth & Sex (Assigned at Birth)      |
|           |            | First Name & Last Name & Date of Birth       |

Recognizing and scoring identifier matches can be quite sophisticated in several ways. Our guidance above is geared toward simplistic scenarios where the system or assigner is specified, corresponds, and is recognized as a system that identifies individual people. However, in some cases, scoring an Identifier may depend on the type of system (from the Identifier.type field) without knowing or recognizing the exact system. Also, cross-system identifier scoring can be appropriate in some situations. While ostensibly unique identifiers such as a PPN should generally score higher, non-unique identifiers can be valuable as scoring lower. Note that some healthcare insurance identifiers identify the family as opposed to an individual. Scoring an identifier match where the system or type is not given or not recognized, or the identifier context is otherwise unknown, should be avoided due to the possibility that it identifies a broad group of unknown size such as all employees of a large organization, all members of an insurance plan, or when the assignor is unknown. 

The scoring system used may be validated by the organization using it to determine its accuracy so that the level of effort to manually close identity matching is known and scoring factors that are missing are added to the score based on experience to refine the score and reduce the level of manually matching that needs to be done--over time this process should result in minimal manual matching. 

This scoring system has not been widely implemented/tested. Implementers are encouraged to report suggestions to the Identity team via Jira tickets on ways to improve the scoring methodology over time based on their experience. The team will consider such input for updating the scoring match system for the next version. 

Future versions of this IG will include language about additional considerations regarding permitted transposition errors, edit distances, and the use of soundex and special characters. 
&emsp;    

&emsp;&emsp;   

### Exception Handling 

<div class="stu-note" markdown="1"> 

The group requests feedback on any specific exception handling conditions that might arise and should be communicated to requesters or responders. For example, conditions under which a "Match request not conformant", "Match request not sufficiently specific," "Match request not authorized," "ID expired or no longer valid," "ID elements inconsistent," or other exception MAY be used. 

</div>

&emsp;&emsp;

### Privacy Considerations

<div class="stu-note" markdown="1"> 

Applicable federal and state laws, as well as any relevant community agreements, may exist and provide some restrictions on the content included in a match request and in the patient results or error messages returned by a responder. The authors request feedback on any additional privacy considerations that should be included in this IG. 

</div> 
&emsp;&emsp;   

### Benchmarking 

<div class="stu-note" markdown="1"> 

Benchmarking of patient matching has been a suggestion made previously by stakeholders. The group requests specific suggestions related to industry-wide benchmarking of best practice matching, including what stakeholders find it relevant to measure in such an activity, how results are shared, and the resources such as synthesized or actual population data that may be used in benchmarking initiatives. Organizations benchmarking matching quality that implement this IG to enhance their performance are encouraged to report their findings via Jira tickets. The team will consider such input for exception handling guidance in the next version. 

</div> 

 

{% include link-list.md %} 


---

// File: input/pagecontent/use-cases.md

This section provides a detailed description on identity workflows outlined in this IG. We have divided these workflows into two groups: Core Identity workflows and Use Case workflows. 

### Core Identity Workflows

#### Identity Proofing Workflow

Pre-Conditions: The individual is not known by an organization at the required level of assurance, the organization's documented identity verification process was not used, or the process was not completed by an individual in the organization's workforce.

Workflow:

1.	Establish the level of assurance required based on risk assessment and the sensitivity of the resources being accessed. (IAL2 if this individual is a HIPAA Covered Entity engaging in B2B transactions, IAL1.5 if the individual is a patient or authorized representative of a patient whose demographics will be matched for sharing with HIPAA Covered Entity organizations, or IAL1.8 if this individual is a patient or authorized representative of a patient whose demographics will be matched for sharing with anyone who is not a HIPAA Covered Entity
2.	Gather sufficient evidence to verify the identity of the individual.
3.	Confirm that the provided evidence is genuine and accurate by validating the authenticity of identity documents using trusted sources or databases and information on the evidence.
4.	Ensure the person presenting the identity evidence is the legitimate owner of that identity, according to [this guidance](guidance-on-identity-assurance.html#best-practices-for-identity-verification) and [NIST 800-63] Digital Identity Guidelines, and the intended level of assurance
5.	Consider Digital Identity Creation, including generating an identifier and binding the identity to a credential, as part of this same encounter--this allows the individual to authenticate themselves without repeating the entire identity verification process.

Outcome: The individual's identity has been successfully verified.

#### Match Workflow

Pre-conditions:

- Requesting system can generate a FHIR Patient resource conformant to one of the IDI profiles (Base, L0, L1) established in this guide.
- Requesting and receiving systems are capable of communication via FHIR API
- Requester, either a human or a system, is authenticated and authorized to perform the action
- Receiving system can run both weighting and scoring processes found on the [Patient Matching] page

Workflow:

1.	The requesting system initiates a match request to the receiving system’s FHIR endpoint.
2.	The receiving system runs a weighting algorithm to determine if the Patient resource found in the request meets the minimum value asserted in the IDI profile and required for the workflow (imperfect matching with L0 invariant, input weight score of at least 9, and attributes verified at IAL1.5, is permitted when data will be returned to a HIPAA Covered Entity; when a single high confidence match is required, L1 invariant with input weight score of at least 10 and attributes verified at IAL1.8 and AAL2 authentication of the individual--claimed by a trusted requester and consistent with the Digital Identity guidance--may initiate a Consumer Match appropriate for access to health data when the requester is not a HIPAA Covered Entity).
3.	The receiving system intakes the match request and runs their own matching algorithm against the database of identities they manage to determine if there are one or more matches.
4.	The receiving system replies to the requesting system with the relevant Patient resource(s) in a FHIR Bundle.

Outcome: Requesting system has obtained a valid FHIR Bundle containing either matched FHIR Patient resource(s) or a “No Match Found” response if the receiving system was unable to locate any matching Patient resources.

#### Digital Identity Creation
Actors: patient (or authorized representative), Identity Provider

Workflow:

1.	Individual completes an IAL1.8 or greater identity verification process per Identity Proofing workflow
2.	The Identity Provider generates and binds a Digital Identifier to an OpenID Connect credential with AAL2 authentication assurance. 
3.	The resultant Digital Identifier can then be associated with the individual in that organization's system and shared, when authorized, with other systems able to validate an Identity Provider assertion and successfully perform a Consumer Match.

&emsp;&emsp;

### Use Case Workflows  

#### Patient-Directed B2C

Actors: Authorized Representative (User) OR Patient, Patient Chosen App, Authorization Server, FHIR Server, Identity Provider

Description: Patient or their authorized representative authorizes a third-party application to access patient’s data as in the SMART App Launch workflow (or equivalent) using their credentials at the data holder organization or other trusted credentials from a third-party Identity Provider (for example, as in Unified Data Access Profiles (UDAP) Tiered OAuth for User Authentication to authenticate the user.)

Pre-Conditions:
- The patient (and user) has been registered and verified by a physician’s office (or other provider)
- The patient (and user) is known by the Identity Provider
- The Identity Provider is trusted by the physician’s office (if a third party is used)

Workflow:
1.	A user wishes to access their accessible health information through an app of their choice
2.	User authorizes data flow to their chosen app
3.	User authenticates with credentials issued by the practice OR the user is prompted to log into the physician’s data source through the authentication process of a different Identity Provider’s compliant Digital Identity (in either case following SMART, etc. as usual)
4.	User completes necessary prompts, creating a credential with the identity Provider if it did not exist or resetting the credential if needed.
5.	If a trusted, third-party Identity Provider is being used, the usual requirements for a Consumer Match exist and the responder must match the Digital Identifier asserted by the Identity Provider, or another combination of demographics with input weight score of 10 or greater consistent with this guidance, against the identities of individuals they manage. 

<div>
<figure class="figure">
    <img src="patient-directed-b2c.png" alt="Patient-Directed B2C" title="Patient-Directed B2C" class="img-responsive img-rounded center-block" width="75%">
    <figcaption class="figure-caption"><strong>Patient-Directed B2C</strong></figcaption>
</figure>
<p></p>
</div>

&emsp;&emsp;   

#### Patient-Mediated B2C

Actors: User (individual or third-party system), Patient or Authorized Representative, Patient PHR App, App’s Authorization Server, App’s FHIR Server, Identity Provider

Description: A patient or their authorized representative authorizes access to their data by a third party when the data are under the patient’s management and not the data creator’s (e.g., a consumer app enables the patient to manage their own data).

Workflow:
1.	Digital Identity Creation is performed by the PHR App for the individual. In addition or instead, the individual may use a Digital Identity managed by a trusted Identity Provider to authenticate themselves to the PHR App.   
2.	When the individual attempts to authorize User's ccess to the patient’s health data, they do so using SMART App Launch, including an explicit authorization, and either a Digital Identity managed by a trusted Identity Provider or credentials of equivalent identity and authentication assurance managed by the PHR App itself 
3.	Whether the PHR App's own or a trusted, third-party Identity Provider’s assertions are used to authenticate the individual, the requirements for a Consumer Match apply and the responding PHR App matches either the Digital Identifier or a combination of demographics with input weight score of 10 or greater, consistent with this guidance, against the identities they manage. If a successful Consumer Match is found, the PHR App may provision a credential, reset an authenticator, or know which individual is being authenticated when relying on a trusted Identity Provider.
4.	If an appropriate individual was authenticated and consents to information sharing, health data can be returned to the User.

<div>
<figure class="figure">
    <img src="patient-mediated-b2c.png" alt="Patient-Mediated B2C" title="Patient-Mediated B2C" class="img-responsive img-rounded center-block" width="75%">
    <figcaption class="figure-caption"><strong>Patient-Mediated B2C</strong></figcaption>
</figure>
<p></p>
</div>

#### Patient-Directed B2C Using Digital Identity

Description: This is a special case of Patient-Directed exchange in which a third-party Identity Provider is used. The use case involves health data access such as in TEFCA Individual Access Services, but could also be used in different cases where patient authentication is required, such as consent management or request for restrictions (part of View, download, and transmit to 3rd party).

Actors: Patient or Authorized Representative, Third-Party requester (for example, Insurance Company), Healthcare Organization, Identity Provider

1.	The patient authenticates to their insurance company’s system using the credential associated with their Digital Identifier and authorizes the Identity Provider to share their identifier with the insurance company as representative of their identity.
2.	The insurance company uses the Digital Identifier in a match request to the healthcare organization.
3.	Because this strong identity assurance credential has been used to authenticate the individual to both systems, the individual authorizes sharing of PII from the Identity Provider to the healthcare organization for identity resolution, and authorization to share health data with the insurance company is obtained, the health system can confidently share the correct patient data with the requesting party.
4.	If needed, the health system can contact the account holder out of band for additional information or can request real-time identity verification if the Digital Identity is not yet known to them.

&emsp;&emsp;   

#### App-Mediated B2B with Patient User (includes B2B Patient Request workflows)

Actors: User (Authorized Representative or Patient), B2B App, Authorization Server, FHIR Server

Description: In this use case, a patient or their authorized representative uses a patient-facing app, not necessarily operated by a HIPAA Covered Entity, to exercise their HIPAA Right of Access. The user’s identity is verified in accordance with this guide. This use case which relies on [UDAP Business-to-Business](https://hl7.org/fhir/us/udap-security/STU1/) security model in FHIR transactions may be limited to a match with or without endpoint lookup (record location) or may also include a health data request. In other words, the user is attempting to access patient id(s) corresponding to one or more endpoints and/or the patient’s health data at those endpoints without using a credential they obtained from the data creator or intermediary data holder. Note that this use case can be implemented for record location at one or more endpoints and a different use case employed for access to health data. Trust in the requesting party is essential to having confidence in the requester's assertions, since ultimately this is a B2C transaction. When performed by a trusted participant under TEFCA, this use case is also referred to as an Individual Access Services.

Pre-conditions: requester can meet Consumer Match requirements for the Patient AND (if different individuals) the Authorized Representative--sufficient demographics with input weight score of 10 or greater are available for match input and were verified at IAL1.8 or greater; if the individual has a credential it is AAL2 or greater.

Workflow:
1.	A user would like to access a patient’s records via an app that is trusted by the responder. The user logs into the application to do so, with a Digital Identity or equivalent (IAL1.8/AAL2) credentials.
2.	When the user initiates the query, the application undergoes a UDAP B2B with User Authentication process, using a B2B credential to establish trust with the responder.
3.	The identity of the user is evaluated by the Authorization Server against their database of patients and authorized representatives to determine, if a Consumer Match exists, which patients’ data this individual may access. 
4.	When authentication is complete, the application creates a match request with the demographics available for the patient in the query, again meeting Consumer Match requirements--match input weight score of 10 or greater, IAL1.8 and L1.
5.	The responder will undergo a weighting adjudication to determine the strength of the match request.
6.	If sufficient, the responder will then run a match against their patient database
7.	If a Consumer Match on the patient results, the resultant Patient resource will be returned in a FHIR Bundle

<div>
<figure class="figure">
    <img src="b2b-with-patient-user.png" alt="B2B with Patient User" title="B2B with Patient User" class="img-responsive img-rounded center-block" width="75%">
    <figcaption class="figure-caption"><strong>B2B with Patient User</strong></figcaption>
</figure>
<p></p>
</div>

&emsp;&emsp;   

#### B2B Treatment Payment Operations (TPO) / Coverage Determination / etc.

Actors: B2B App, Authorization Server, FHIR Server

Note: The workflow between these use cases is similar, except for the purpose of use: 

-	a covered entity with an exchange purpose of treatment, healthcare payment, or healthcare operations
-	a covered entity with an exchange purpose of eligibility determination

Examples of B2B exchange relevant to this IG include record location and other patient matching use cases for queries and messaging enabled for trusted organizations by community or point to point access. Relevant B2B exchanges also include TEFCA Facilitated FHIR, TEFCA Brokered FHIR, TEFCA Broadcast Query, TEFCA Targeted Query, TEFCA Message Delivery, TEFCA Population-Level Data Exchange, and associated patient discovery and matching services.

Pre-conditions: The requester and the responder have established trust and are able to exchange information. Requester and Responder have patient demographics for use in matching that were verified at IAL1.5 or higher. requester has sufficient verified demographics (input weight score of 9 or greater).

Workflow:
1.	The requesting system authenticates itself to the responding system via UDAP B2B Authentication and Authorization steps.
2.	The requesting sends a match request per the Match Workflow including L0 patient resource with attributes verified at IAL1.5 at minimum – Step 1
3.	The responding system receives, matches, and returns a FHIR Bundle per the Match Workflow – Steps 2-4

<div>
<figure class="figure">
    <img src="b2b.png" alt="B2B Treatment Payment Operations (TPO) / Coverage Determination / etc." title="B2B Treatment Payment Operations (TPO) / Coverage Determination / etc." class="img-responsive img-rounded center-block" width="75%">
    <figcaption class="figure-caption"><strong>B2B Treatment Payment Operations (TPO) / Coverage Determination / etc.</strong></figcaption>
</figure>
<p></p>
</div>

&emsp;&emsp;   

{% include link-list.md %} 

---

// File: input/fsh/README.md

# digital-identity-fsh
Digital Identity using FHIR Shorthand


---

// File: input/includes/link-list.md

[Table of Contents]: toc.html
[Home]: index.html
[Patient Matching]: patient-matching.html
[Industry Initiatives]: industry-initiatives.html
[Guidance on Identity Assurance]: guidance-on-identity-assurance.html
[Digital Identity]: digital-identity.html
[Use Cases]: use-cases.html
[Guidance Matching]: guidance-matching.html
[Artifacts]: artifacts.html
[Glossary]: glossary.html
[IDI Patient]: StructureDefinition-IDI-Patient.html
[IDI Patient L0]: StructureDefinition-IDI-Patient-L0.html
[IDI Patient L1]: StructureDefinition-IDI-Patient-L1.html
[Multiple Digital Identity Patient Example]: StructureDefinition-Multiple-Digital-Identity-Patient-Example.html
[$IDI-match]: StructureDefinition-idi-match-bundle.html
[Person Resource Profile for FAST ID]: StructureDefinition-FASTIDPerson.html
[NIST 800-63]: https://pages.nist.gov/800-63-3/

[Patient-Directed B2C Diagram]: patient-directed-b2c.png
{:style="float: none;"}

[B2B Diagram]: b2b.png
{:style="float: none;"}

[B2B with Patient User Diagram]: b2b-with-patient-user.png
{:style="float: none;"}

[Patient-Mediated B2C Diagram]: patient-mediated-b2c.png
{:style="float: none;"}



---

// File: input/fsh/Aliases.fsh

Alias:   $IdentifierType = http://terminology.hl7.org/CodeSystem/v2-0203


---

// File: input/fsh/Bundle.fsh

Profile: IDIMatchBundle
Parent: Bundle
Id: idi-match-bundle
Title: "IDI Match Bundle"
Description: "Bundle requirements for responders of a $IDI-match request."

* identifier 1..1 MS
* identifier.assigner 1..1 MS
* type = #collection (exactly)
* entry 1..* MS
* entry.fullUrl 1..1 MS
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains
    organization 1..1 MS and
    patient 0..* MS 

* entry[organization] ^short = "Entry in the bundle - will have the payer organization and may have provider organization(s)"
* entry[organization].resource 1..1 MS
* entry[organization].resource only USCoreOrganizationProfile
* entry[organization].resource ^short = "Bundle entry for responding organization"

* entry[patient] ^short = "Entry in the bundle - will have the patient subject of care and may be a separate subscriber"
* entry[patient].resource 1..1 MS
* entry[patient].resource only USCorePatientProfile
* entry[patient].resource ^short = "Bundle entry for matched Patient"


---

// File: input/fsh/CodeSystems_ValueSets.fsh

//////////////////////////////
// Code Systems and Value Sets
//////////////////////////////
Alias: $IDTYPESVS = http://hl7.org/fhir/ValueSet/identifier-type

CodeSystem: IdentityIdentifierCodeSystem
Id: Identity-Identifier-cs
Title: "Identity Identifier Code System"
Description: "Defining codes for describing specialized identifiers to be used in Patient resource for $match."
* #STID "State Level Identifier" "Represents any appropriate identifier corresponding to a state- or territory-issued photo ID that is not a Driver's License. This code will likely be migrated to THO at some point in the future."
* ^caseSensitive = true
* ^experimental = false
* #SSN4 "SSN Last 4" "Represents the last four digits of US Social Security Number. This code may be migrated to THO at some point in the future."
* ^caseSensitive = false
* ^experimental = false

ValueSet: IdentityIdentifierValueSet
Id: Identity-Identifier-vs
Title: "Identity Identifier Value Set"
Description: "Codes describing various identifiers to be used in Patient resource for $match."
* include codes from system IdentityIdentifierCodeSystem
* include codes from valueset $IDTYPESVS
* ^experimental = false


---

// File: input/fsh/Invariants.fsh

Invariant:  idi-1
Description: "One of identifier or telecom or family and given names or address or birthdate SHALL be present"
Expression:  "identifier.exists() or telecom.exists() or (name.family.exists() and name.given.exists()) or (address.line.exists() and address.city.exists()) or birthDate.exists()"
Severity:   #error

Invariant:  idi-2
Description: "Either the given or family name SHALL be present"
Expression: "given.exists() or family.exists()"
Severity:   #error

//==========================================================================================================
// Weighted values:
// ----------------
//     5	Digital Identifier, Passport Number (PPN) and issuing country, Driver’s License Number (DL) and Issuing US State, or other State ID Number and Issuing US State (max weight of 10 for this category, even if multiple Numbers included)
//     4	Address (including line plus zip or city and state), telecom email, telecom phone, identifier (other than Digital Identifier, passport, DL or other state ID--for example, Insurance Member Identifier along with Payer Identifier, Medical Record Number and assigner, or SSN Last 4) OR Individual Profile Photo (i.e. max weight of 5 for any combination of 2 or more of these)
//     3	First Name & Last Name
//     2  Date of Birth
// 
// Base Invariant:
// ---------------
//     ((identifier.type.coding.exists(code = 'PPN') and identifier.value.exists()).toInteger()*10) +
//     ((identifier.type.coding.exists(code = 'DL' or code = 'STID') and identifier.value.exists()).toInteger()*10) +
//     ((((address.exists(use = 'home') and address.line.exists() and address.city.exists()).toInteger() + (identifier.type.coding.exists(code != 'PPN' and code != 'DL')).toInteger() + ((telecom.exists(system = 'email') and telecom.value.exists()) or (telecom.exists(system = 'phone') and telecom.value.exists())).toInteger() + (photo.exists()).toInteger()) > 1).toInteger() * 4) +
//     ((name.family.exists() and name.given.exists()).toInteger()*4)

Invariant:   idi-L0
Description: "Combined weighted values of included elements must have a minimum value of 9 (see Patient Weighted Elements table). Note that the logic for computing weights is somewhat imperfect, particularly considering that it does not confirm that exactly the expected coded type is the one that exists in a match request; this is acceptable because it will not in itself lead to mismatches, though it may give requestors an overly-optimistic sense of their input quality."
Expression:  "((identifier.type.coding.exists(code = 'PPN' or code = 'DL' or code = 'STID') or identifier.exists(system='http://hl7.org/fhir/us/identity-matching/ns/HL7Identifier')) and identifier.value.exists()).toInteger()*10 +
               iif(((address.exists(use = 'home') and address.line.exists() and (address.postalCode.exists() or (address.state.exists() and address.city.exists()))).toInteger() + 
                  (identifier.type.coding.exists(code != 'PPN' and code != 'DL' and code != 'STID') and identifier.value.exists()).toInteger() +
                  (telecom.exists(system = 'email') and telecom.value.exists()).toInteger() + 
                  (telecom.exists(system = 'phone') and telecom.value.exists()).toInteger() + 
                  (photo.exists()).toInteger())
                  =1,4,iif(((address.exists(use = 'home') and address.line.exists() and (address.postalCode.exists() or (address.state.exists() and address.city.exists()))).toInteger() + 
                  (identifier.type.coding.exists(code != 'PPN' and code != 'DL' and code != 'STID') and identifier.value.exists()).toInteger() +
                  (telecom.exists(system = 'email') and telecom.value.exists()).toInteger() + 
                  (telecom.exists(system = 'phone') and telecom.value.exists()).toInteger() + 
                  (photo.exists()).toInteger())
                  >1,5,0)) + 
               (name.family.exists() and name.given.exists()).toInteger()*3 + 
               (birthDate.exists().toInteger()*2)
             >= 9"
Severity:    #error

Invariant:   idi-L1
Description: "Requestors asserting compliance with this Invariant level are also thereby indicating that all included demographics are consistent with an identity verification event performed as part of a documented process that is compliant with this IG. Combined weighted values of included elements must have a minimum value of 10 (see Patient Weighted Elements table). Note that the logic for computing weights is somewhat imperfect, particularly considering that it does not confirm that exactly the expected coded type is the one that exists in a match request; this is acceptable because it will not in itself lead to mismatches, though it may give requestors an overly-optimistic sense of their input quality."
Expression:  "((identifier.type.coding.exists(code = 'PPN' or code = 'DL' or code = 'STID') or identifier.exists(system='http://hl7.org/fhir/us/identity-matching/ns/HL7Identifier')) and identifier.value.exists()).toInteger()*10 +
               iif(((address.exists(use = 'home') and address.line.exists() and (address.postalCode.exists() or (address.state.exists() and address.city.exists()))).toInteger() + 
                  (identifier.type.coding.exists(code != 'PPN' and code != 'DL' and code != 'STID') and identifier.value.exists()).toInteger() +
                  (telecom.exists(system = 'email') and telecom.value.exists()).toInteger() + 
                  (telecom.exists(system = 'phone') and telecom.value.exists()).toInteger() + 
                  (photo.exists()).toInteger())
                  =1,4,iif(((address.exists(use = 'home') and address.line.exists() and (address.postalCode.exists() or (address.state.exists() and address.city.exists()))).toInteger() + 
                  (identifier.type.coding.exists(code != 'PPN' and code != 'DL' and code != 'STID') and identifier.value.exists()).toInteger() +
                  (telecom.exists(system = 'email') and telecom.value.exists()).toInteger() + 
                  (telecom.exists(system = 'phone') and telecom.value.exists()).toInteger() + 
                  (photo.exists()).toInteger())
                  >1,5,0)) + 
               (name.family.exists() and name.given.exists()).toInteger()*3 + 
               (birthDate.exists().toInteger()*2)
             >= 10"
Severity:    #error


---

// File: input/fsh/NamingSystems.fsh

//////////////////////////////
// Naming Systems
//////////////////////////////

Instance: Identity-HL7-Identifier
InstanceOf: NamingSystem
Usage: #definition
* name = "HL7Identifier"
* description = "Digital Identifier to assist in patient matching."
* status = #draft
* kind = #identifier
* date = "2023-02-20"

* uniqueId.type = #uri
* uniqueId.value = "http://hl7.org/fhir/us/identity-matching/ns/HL7Identifier"


---

// File: input/fsh/Operations.fsh

Instance: IDIMatchOperation
InstanceOf: OperationDefinition
Description: "This extension of the $match operation is further constrained to meet the additional requirements found in this IG. One of the IDI Patient profiles outline in this guide (IDI-Patient, IDI-Patient-L0, IDI-Patient-L1) SHALL be used as the input for the match request. An IDI-Match-Bundle will be returned to the requesting entity. This Bundle will contain the full URLs of the sourced information, an Organization resource, and any matched Patient resources."
Usage: #definition

* id = "IDI-match"
* url = "http://hl7.org/fhir/us/identity-matching/OperationDefinition/IDI-match"
* name = "IDIMatch"
* title = "IDI Match Operation"
* status = #draft
* kind = #operation
* description = "This extension of the $match operation is further constrained to meet the additional requirements found in this IG. One of the IDI Patient profiles outline in this guide (IDI-Patient, IDI-Patient-L0, IDI-Patient-L1) SHALL be used as the input for the match request. An IDI-Match-Bundle will be returned to the requesting entity. This Bundle will contain the full URLs of the sourced information, an Organization resource, and any matched Patient resources."
* code = #idi-match
* base = "http://hl7.org/fhir/us/identity-matching/OperationDefinition/IDI-match"
* resource = #Patient
* system = false
* type = true
* instance = false
* inputProfile = "http://hl7.org/fhir/us/identity-matching/StructureDefinition/idi-match-input-parameters"
* outputProfile = "http://hl7.org/fhir/us/identity-matching/StructureDefinition/idi-match-output-parameters"

* parameter[0].name = #IDIPatient
* parameter[0].use = #in
* parameter[0].min = 1
* parameter[0].max = "1"
* parameter[0].documentation = "A Patient resource that is being requested in the match operation. The requester must use one of the IDI Patient profiles for the resource in their submission."
* parameter[0].type = #Patient

* parameter[1].name = #IDIMatchBundle
* parameter[1].use = #out
* parameter[1].min = 1
* parameter[1].max = "1"
* parameter[1].documentation = "When successful, a Bundle resource containing Patient resources of a high confidence match is returned to the requestor. In addition, an Organization resource of the responding entity will be included in the Bundle for error reporting purposes. When the responding server is unable to return a match, a response of 'No Match Found' will be returned."
* parameter[1].type = #Bundle

---

// File: input/fsh/Parameters.fsh

Profile:        IDIMatchInputParameters
Parent:         Parameters
Id:             idi-match-input-parameters
Title:          "IDI Match Input Parameters"
Description:    "The Parameters profile used to define the inputs of the $IDI-match operation using an IDI-Patient profile for submission."

* ^status = #active
* parameter ^slicing.discriminator.type = #pattern
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.description = "Slice based on $this pattern"
* parameter 1..1 MS
* parameter contains 
	  IDIPatient 0..1 MS
* parameter[IDIPatient].name = "patient"
* parameter[IDIPatient].resource 1..1 MS
* parameter[IDIPatient].resource only IDI-Patient or IDI-Patient-L0 or IDI-Patient-L1


Profile:        IDIMatchOutputParameters
Parent:         Parameters
Id:             idi-match-output-parameters
Title:          "IDI Match Output Parameters"
Description:    "The Parameters profile used to define the outputs of the $IDI-match operation."

* ^status = #active
* parameter ^slicing.discriminator.type = #pattern
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.description = "Slice based on $this pattern"
* parameter 1..1 MS
* parameter contains 
	  IDIMatchBundle 1..1 MS
* parameter[IDIMatchBundle].name = "bundle"
* parameter[IDIMatchBundle].resource 1..1 MS
* parameter[IDIMatchBundle].resource only idi-match-bundle

---

// File: input/fsh/Patient.fsh

Profile: IDIPatient
Parent: Patient
Id: IDI-Patient
Title: "IDI Patient"
Description: "(Base Level) The goal of this profile is to describe a data-minimized version of Patient used to convey information about the patient for Identity Matching utilizing the $match operation.  Only requires that 'some valuable data' be populated within the Patient resource and utilizes no weighting of element values."

* . ^short = "Patient information to be supplied to $match operation"
* . ^definition = "Demographics and other administrative information about an individual which can be utilized within the $match operation."
* obeys idi-1

* meta.profile ^slicing.discriminator.type = #pattern
* meta.profile ^slicing.discriminator.path = "$this"
* meta.profile ^slicing.description = "Slice based on pattern"
* meta.profile ^slicing.ordered = false
* meta.profile ^slicing.rules = #open
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile SHALL be used by the Server to hint/assert/declare that this instance conforms to the stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). "
* meta.profile contains assertedProfile 0..1
* meta.profile[assertedProfile] = "http://hl7.org/fhir/us/identity-matching/StructureDefinition/IDI-Patient"

* identifier.type 1..1
* identifier.value 1..1
* identifier.type from IdentityIdentifierValueSet (extensible)

* name obeys idi-2

//=================================================================================================================================
// Level 0 Weighting
//
Profile: IDIPatientL0
Parent: Patient
Id: IDI-Patient-L0
Title: "IDI Patient L0"
Description: "(Level 0 weighting) The goal of this profile is to describe a data-minimized version of Patient used to convey information about the patient for Identity Matching utilizing the $match operation, and prescribe a minimum set of data elements which meet a combined 'weighted level' of at least 9"

* . ^short = "Patient information to be supplied to $match operation conforming to Level 0 weighting of information"
* . ^definition = "Demographics and other administrative information about an individual which can be utilized within the $match operation meeting a minimum combined weighting a step above the base level. The goal of this profile is to describe a data-minimized version of Patient used to convey information about the patient for Identity Matching utilizing the $match operation, and prescribe a minimum set of data elements, when consistent with identity verification performed at IAL1.5 or greater, which meet a combined ‘weighted level’ of at least 9"
* obeys idi-L0

* meta.profile ^slicing.discriminator.type = #pattern
* meta.profile ^slicing.discriminator.path = "$this"
* meta.profile ^slicing.description = "Slice based on pattern"
* meta.profile ^slicing.ordered = false
* meta.profile ^slicing.rules = #open
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile SHALL be used by the Server to hint/assert/declare that this instance conforms to the stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). "
* meta.profile contains assertedProfile 0..1
* meta.profile[assertedProfile] = "http://hl7.org/fhir/us/identity-matching/StructureDefinition/IDI-Patient-L0"

* identifier.type 1..1
* identifier.value 1..1
* identifier.type from IdentityIdentifierValueSet (extensible)

* name obeys idi-2

//=================================================================================================================================
// Level 1 Weighting
//
Profile: IDIPatientL1
Parent: Patient
Id: IDI-Patient-L1
Title: "IDI Patient L1"
Description: "(Level 1 weighting) The goal of this profile is to describe a data-minimized version of Patient used to convey information about the patient for Identity Matching utilizing the $match operation, and prescribe a minimum set of data elements which meet a combined 'weighted level' of at least 10 and using attributes that are consistent with an identity that has been verified by the match requestor"

* . ^short = "Patient information to be supplied to $match operation conforming to Level 1 weighting of information"
* . ^definition = "Demographics and other administrative information about an individual which can be utilized within the $match operation meeting a minimum combined weighting higher than previous levels. The goal of this profile is to describe a data-minimized version of Patient used to convey information about the patient for Identity Matching utilizing the $match operation, and prescribe a minimum set of data elements, when consistent with identity verification performed at IAL1.8 or greater, which meet a combined ‘weighted level’ of at least 10"
* obeys idi-L1

* meta.profile ^slicing.discriminator.type = #pattern
* meta.profile ^slicing.discriminator.path = "$this"
* meta.profile ^slicing.description = "Slice based on pattern"
* meta.profile ^slicing.ordered = false
* meta.profile ^slicing.rules = #open
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile SHALL be used by the Server to hint/assert/declare that this instance conforms to the stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). "
* meta.profile contains assertedProfile 0..1
* meta.profile[assertedProfile] = "http://hl7.org/fhir/us/identity-matching/StructureDefinition/IDI-Patient-L1"

* identifier.type 1..1
* identifier.value 1..1
* identifier.type from IdentityIdentifierValueSet (extensible)

* name obeys idi-2

//====================================================================================================
// FAST Identity UDAP Person
//
Profile: FASTIDUDAPPerson
Parent: Person
Id: FASTIDUDAPPerson
Title: "FAST Identity UDAP Person"
Description: "Profile on Person for use with the Interoperable Digital Identity and Patient Matching IG"
* name.family 1..
* name.given 1..
* telecom ^slicing.discriminator.type = #pattern
* telecom ^slicing.discriminator.path = "system"
* telecom ^slicing.rules = #open
* telecom ^slicing.description = "Forcing both a phone and an email contact"
* telecom contains
    tphone 1..* and
    email 1..*
* telecom[tphone].system 1..
* telecom[tphone].system = #phone
* telecom[email].system 1..
* telecom[email].system = #email
* birthDate 1..
* address.line 1..
* address.city 1..
* address.state 1..
* address.postalCode 1..

---

// File: input/fsh/Examples.fsh

Instance: Patient1
InstanceOf: IDIPatient
Description: "Example of Patient used as input to $match operation"
Usage: #example

* meta.profile = Canonical(IDI-Patient)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* id = "ExamplePatient"
* active = true

* identifier[0].type.coding.code = #MB
* identifier[0].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[0].value = "1234-234-1243-12345678901"
* identifier[0].system = "https://www.xyzhealthplan.com/fhir/memberidentifier"

* name[0].family = "Beegood"
* name[0].given[0] = "Johnny"

* telecom[0].system = #phone
* telecom[0].value = "301-555-2112"
* telecom[0].use = #mobile 

* gender = #male

* birthDate = "1986-05-01"

* address[0].type = #physical
* address[0].line[0] = "123 Main Street"
* address[0].city = "Pittsburgh"
* address[0].state = "PA"
* address[0].postalCode = "12519"

* maritalStatus = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK

//====================================================================================================

Instance: Patient-L0
InstanceOf: IDIPatientL0
Description: "Example of Patient used as input to $match operation meeting Level 0 information conformance"
Usage: #example

* meta.profile = Canonical(IDI-Patient-L0)
* meta.lastUpdated = "2021-11-01T13:26:22.0314215+00:00"
* language = #en-US
* id = "ExamplePatientL0"
* active = true

* identifier[0].type.coding.code = #MR
* identifier[0].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[0].value = "4004-202-9999-12345678901"
* identifier[0].system = "https://www.xyzhealthplan.com/fhir/memberidentifier"

* name[0].family = "Paeshent"
* name[0].given[0] = "Nancy"

* gender = #female

* birthDate = "1988-02-11"

* address[0].type = #physical
* address[0].line[0] = "321 South Maple Street"
* address[0].city = "Scranton"
* address[0].state = "PA"
* address[0].postalCode = "18503"

* maritalStatus = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK

//====================================================================================================

Instance: Patient-L1
InstanceOf: IDIPatientL1
Description: "Example of Patient used as input to $match operation meeting Level 1 information conformance"
Usage: #example

* meta.profile = Canonical(IDI-Patient-L1)
* meta.lastUpdated = "2021-11-01T13:26:22.0314215+00:00"
* language = #en-US
* id = "ExamplePatientL1"
* active = true

* identifier[0].type.coding.code = #DL
* identifier[0].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[0].value = "3902-16532901"
* identifier[0].system = "http://terminology.hl7.org/NamingSystem/NorthCarolinaDLN"
* identifier[0].assigner[0].display[0] = "North Carolina"

* name[0].family = "Case"
* name[0].given[0] = "Justin"

* telecom[0].system = #phone
* telecom[0].value = "726-555-2900"
* telecom[0].use = #mobile 

* gender = #female

* birthDate = "1992-05-17"

* address[0].type = #physical
* address[0].line[0] = "418 Teapot Lane"
* address[0].city = "Raleigh"
* address[0].state = "NC"
* address[0].postalCode = "27513"

* maritalStatus = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK

//====================================================================================================

Instance: patient-multi-digital-identifier
InstanceOf: Patient
Description: "Example of Patient where the individual has mulitple Digital Identifiers assigned to them from three different entities: a hospital, a payer, and an IdP."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
* identifier[0].system = "http://hospital.abc.org"
* identifier[=].value = "a5c2498f-9b62-4c97-8dc3-03a20b0f5412"
* identifier[=].assigner = Reference(Organization/abc-hospital)
* identifier[+].system = "http://payer.xyz.org"
* identifier[=].value = "40e31ed2-4d16-4416-a66d-c3e84f8a4812"
* identifier[=].assigner = Reference(Organization/xyz-payer)
* identifier[+].system = "http://idp.def.org"
* identifier[=].value = "db0cfc86-58e4-467c-b1d7-78571598ee15"
* identifier[=].assigner = Reference(Organization/def-idp)
* active = true
* name.family = "Huberdeau"
* name.given = "Honk"
* telecom[0].system = #phone
* telecom[=].value = "555-555-5555"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "honk.huberdeau@example.com"
* gender = #male
* birthDate = "1980-01-10"
* address.line = "999 Not Real Street"
* address.city = "Columbus"
* address.state = "OH"
* address.postalCode = "43210"
* address.country = "US"

//====================================================================================================

Instance: abc-hospital
InstanceOf: Organization
Description: "Example of Organization used as a hospital for digital identifier"
Usage: #example
* identifier[0].use = #official
* identifier[=].system = "urn:oid:2.16.528.1"
* identifier[=].value = "91654"
* identifier[+].use = #usual
* identifier[=].system = "urn:oid:2.16.840.1.113883.2.4.6.1"
* identifier[=].value = "17-0112278"
* name = "Burgers University Medical Center"
* contact[0].telecom.system = #phone
* contact[=].telecom.value = "022-655 2300"
* contact[=].telecom.use = #work
* contact[+].address.use = #work
* contact[=].address.line = "Galapagosweg 91"
* contact[=].address.city = "Den Burg"
* contact[=].address.postalCode = "9105 PZ"
* contact[=].address.country = "NLD"
* contact[+].address.use = #work
* contact[=].address.line = "PO Box 2311"
* contact[=].address.city = "Den Burg"
* contact[=].address.postalCode = "9100 AA"
* contact[=].address.country = "NLD"
* contact[+].telecom.system = #phone
* contact[=].telecom.value = "022-655 2334"
* contact[+].telecom.system = #phone
* contact[=].telecom.value = "022-655 2335"

//====================================================================================================

Instance: xyz-payer
InstanceOf: Organization
Description: "Example of Organization used as a payer for digital identifier"
Usage: #example
* identifier.system = "urn:oid:2.16.840.1.113883.3.19.2.3"
* identifier.value = "666666"
* name = "XYZ Insurance"
* alias = "ABC Insurance"
* contact.telecom[0].system = #phone
* contact.telecom[=].value = "+1 555 234 3523"
* contact.telecom[=].use = #work
* contact.telecom[+].system = #email
* contact.telecom[=].value = "info@xyz-payer.org"
* contact.telecom[=].use = #work

//====================================================================================================

Instance: def-idp
InstanceOf: Organization
Description: "Example of Organization used as an identity provider for digital identifier"
Usage: #example
* identifier.system = "http://www.secureidp.com/units"
* identifier.value = "SecureIdp"
* name = "Secure Idp"
* contact.telecom[0].system = #phone
* contact.telecom[=].value = "+1 555 234 3523"
* contact.telecom[=].use = #work
* contact.telecom[+].system = #email
* contact.telecom[=].value = "gastro@acme.org"
* contact.telecom[=].use = #work

//====================================================================================================

Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203

Instance: MATCHOperationResponse
InstanceOf: IDIMatchBundle
Description: "Example of $MATCH operation response with patient and organization"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/identity-matching/StructureDefinition/idi-match-bundle"
* identifier.assigner = Reference(http://example.org/Organization/OrgExample)
* type = #collection

* entry[0].fullUrl = "https://example.com/base/Organization/OrgExample"
* entry[=].resource = OrgExample
* entry[+].fullUrl = "https://example.com/base/Patient/PatExample"
* entry[=].resource = PatExample

Instance: OrgExample
InstanceOf: USCoreOrganizationProfile
Usage: #inline
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p class=\"res-header-id\"><b>Generated Narrative: Organization Insurance Company</b></p><a name=\"OrgExample\"> </a><p><b>name</b>: Insurance Compaany</p><p><b>address</b>: 688 Asylum Street Hartford CT 06155</p></div>"
* active = true
* type = $organization-type#pay "Payer"
* name = "Insurance Company"
* telecom.system = #phone
* telecom.value = "860-547-5001"
* telecom.use = #work
* address.line = "688 Asylum Street"
* address.city = "Hartford"
* address.state = "CT"
* address.postalCode = "06155"
* address.country = "US"

Instance: PatExample
InstanceOf: USCorePatientProfile
Usage: #inline
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p class=\"res-header-id\"><b>Generated Narrative: Person PatExample</b></p><a name=\"PatExample\"> </a><p><b>name</b>: Johnny Beegood (Official)</p><p><b>birthDate</b>: 1986-05-01</p><p><b>address</b>: 123 Main Street Pittsburgh PA 12519 (physical)</p></div>"
* identifier.type = $v2-0203#MB
* identifier.system = "https://www.xyzhealthplan.com/fhir/memberidentifier"
* identifier.value = "1234-234-1243-12345678901"
* active = true
* name.family = "Beegood"
* name.given = "Johnny"
* gender = #male
* birthDate = "1986-05-01"
* address.type = #physical
* address.line = "123 Main Street"
* address.city = "Pittsburgh"
* address.state = "PA"
* address.postalCode = "12519"




//====================================================================================================

Instance: FASTIDUDAPPerson-Example
InstanceOf: FASTIDUDAPPerson
Description: "Example of Person profile for use with the Interoperable Digital Identity and Patient Matching"
Usage: #example
* name.use = #official
* name.family = "Chalmers"
* name.given[0] = "Peter"
* name.given[+] = "James"
* telecom[0].system = #phone
* telecom[=].value = "(03) 5555 6473"
* telecom[=].use = #work
* telecom[+].system = #email
* telecom[=].value = "Jim@example.org"
* telecom[=].use = #work
* birthDate = "1974-12-25"
* address.use = #work
* address.line = "534 Erewhon St"
* address.city = "PleasantVille"
* address.state = "Vic"
* address.postalCode = "3999"

//====================================================================================================

Instance: IDIMatchInputParameters-Example
InstanceOf: IDIMatchInputParameters
Description: "Example of IDI-Patient profile for submission as input parameter for $IDI-match operation"
Usage: #example
* parameter[0].name = "patient"
* parameter[=].resource.resourceType = "Patient"
* parameter[=].resource.text.status = #generated
* parameter[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p class=\"res-header-id\"><b>Generated Narrative: Example Patient</b></p><a name=\"ExamplePatient\"> </a><p><b>name</b>: ExamplePatient</p><p><b>address</b>: Peter Chalmers</p></div>"
* parameter[=].resource.id = "ExamplePatient"
* parameter[=].resource.name.use = #official
* parameter[=].resource.name.family = "Chalmers"
* parameter[=].resource.name.given[0] = "Peter"
* parameter[=].resource.name.given[+] = "James"


//====================================================================================================

Instance: IDIMatchOutputParameters-Example
InstanceOf: IDIMatchOutputParameters
Description: "Example of IDI-Patient profile for used to define the outputs of the $IDI-match operation"
Usage: #example
* parameter[0].name = "bundle"
* parameter[=].resource = MATCHOperationResponse

---

