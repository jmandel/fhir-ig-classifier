File: repos/HL7_SLASH_carin-bb/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     │
# │                                                                                                │
# │  This file was generated from your existing project files and will be used for SUSHI           │
# │  configuration from now on. You may delete your package.json as it is no longer needed.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭─────────────────────────ImplementationGuide-hl7.fhir.us.carin-bb.json──────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.html#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.carin-bb
canonical: http://hl7.org/fhir/us/carin-bb
version: 2.1.0
name: CARINConsumerDirectedPayerDataExchange
title: CARIN Consumer Directed Payer Data Exchange (CARIN IG for Blue Button®)
status: active
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  #<<< must include a http://hl7.org/fhir/StructureDefinition/structuredefinition-wg extension that identifies the workgroup responsible for the IG. This is the authoritative element.
    valueCode: fm  # <<< The value must be the code for the workgroup
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
publisher:
  name: HL7 International / Financial Management
  url: http://www.hl7.org/Special/committees/fm
  email: fm@lists.HL7.org
description: CARIN Consumer Directed Payer Data Exchange (CARIN IG for Blue Button®)
license: CC0-1.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.us.core:
    id: uscore6
    version: 6.1.0
    reason: |
      Defines USCDIv3 expectations on a range of resources that will be queried by CARIN BlueButton client systems
  hl7.fhir.us.core.3.1.1:
    version: 3.1.1
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore3
    reason: |
      Defines USCDIv3 expectations on a range of resources that will be queried by CARIN BlueButton client systems
  hl7.fhir.extensions.r5: 4.0.1
  us.nlm.vsac:
    uri: http://fhir.org/packages/us.cdc.phinvads/ImplementationGuide/us.nlm.vsac
    version: 0.7.0
parameters:
  show-inherited-invariants: false
  default-jurisdiction: true
  default-publisher: true
  default-version: true
  default-contact: true
  apply-jurisdiction: false
  apply-publisher: false
  apply-version: false
  apply-contact: false
  excludettl: 'true'
  excludemap: 'true'
  special-url:
    - https://x12.org/codesystem.x12.org/ambulance-transport-reason-codes
    - https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator

copyrightYear: 2024+
releaseLabel: STU 2.1
jurisdiction: urn:iso:std:iso:3166#US

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Background:
    The CARIN Alliance: Background.html#the-carin-alliance
    Patient Protection: Background.html#patient-protection
    Relation to Other IGs: Background.html#relation-to-other-IGs
  Use Cases:
    Terms and Concepts: Use_Case.html#terms-and-concepts
    Use Cases: Use_Case.html#use-cases
  Guidance:
    Conformance Requirements: Conformance_Requirements.html
    Common Payer Consumer Data Set (CPCDS): Common_Payer_Consumer_Data_Set.html
    General Guidance: General_Guidance.html
    Terminology Licensure: Terminology_Licensure.html
  FHIR Artifacts:
    Profiles: artifacts.html#3
    Search Parameters: searchparameters.html
    Terminology: artifacts.html#5
    Capability Statement: CapabilityStatement-c4bb.html
  Security:
    General Considerations: Security_And_Privacy_Considerations.html#general-considerations
    Security Requirements: Security_And_Privacy_Considerations.html#security-requirements
  Examples:  artifacts.html#7
  
  Support:  
    Project Home: https://confluence.hl7.org/pages/viewpage.action?pageId=81008633
    Discussion Forum: https://chat.fhir.org/#narrow/stream/204607-CARIN-IG-for-Blue-Button.C2.AE
    Propose a Change: https://jira.hl7.org/secure/CreateIssueDetails!init.jspa?pid=10405&customfield_11302=FHIR-us-carin-bb&issuetype=10600
    Downloads: downloads.html
  Change Notes: change_notes.html


pages:
  index.md:
    title: Home
  Background.md:
    title: Background
  Use_Case.md:
    title: Use Case
  Conformance_Requirements.md:
    title: Conformance Requirements
  General_Guidance.md:
    title: General Guidance
  Common_Payer_Consumer_Data_Set.md:
    title: Common Payer Consumer Data Set (CPCDS)
  Terminology_Licensure.md:
    title: Terminology Licensure
  artifacts.html:
    title: Artifacts Summary
  searchparameters.md:
    title: Search Parameters
  Security_And_Privacy_Considerations.md:
    title: Security and Privacy Considerations
  downloads.md:
    title: Downloads
  change_notes.md:
    title: Change Notes
# ╭───────────────────────────────────────package-list.json────────────────────────────────────────╮
# │  To control the package-list.json using this config, uncomment and set the "history" property. │
# ╰───────────────────────────────────────────_────────────────────────────────────────────────────╯


groups:
  capability:
    name: "Behavior: Capability Statements"
    description: "The following artifacts define the specific capabilities that different types of systems are expected to have in order to comply with this implementation guide. Systems conforming to this implementation guide are expected to declare conformance to one or more of the following capability statements."
    resources:
      - CapabilityStatement/c4bb

  search:
    name: "Behavior: Search Parameters"
    description: "These define the properties by which a RESTful server can be searched. They can also be used for sorting and including related resources."
    resources:
      - SearchParameter/coverage-payor
      - SearchParameter/explanationofbenefit-billable-period-start
      - SearchParameter/explanationofbenefit-care-team
      - SearchParameter/explanationofbenefit-coverage
      - SearchParameter/explanationofbenefit-identifier
      - SearchParameter/explanationofbenefit-insurer
      - SearchParameter/practitionerrole-organization
      - SearchParameter/explanationofbenefit-patient
      - SearchParameter/practitionerrole-practitioner
      - SearchParameter/explanationofbenefit-provider
      - SearchParameter/explanationofbenefit-service-date
      - SearchParameter/explanationofbenefit-service-start-date
      - SearchParameter/explanationofbenefit-type

  abstract:
    name: "Structures: Abstract Profiles"
    description: "These are profiles on resources or data types that describe patterns used by other profiles, but cannot be instantiated directly. I.e. instances can conform to profiles based on these abstract profiles, but do not declare conformance to the abstract profiles themselves."
    resources:
      - StructureDefinition/C4BB-ExplanationOfBenefit

  basis:
    name: "Structures: Explanation of Benefits Basis Profiles"
    description: "Basis profiles that define all non-financial element requirements for ExplanationOfBenefit types. These profiles are not expected to be implemented directly within the context of the consumer directed data exchange use case defined by this guide, but rather from within the context in which external guides may define (e.g. Provider Access API of PDEX)."
    resources:
      - StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis
      - StructureDefinition/C4BB-ExplanationOfBenefit-Oral-Basis
      - StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis
      - StructureDefinition/C4BB-ExplanationOfBenefit-Pharmacy-Basis
      - StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician-Basis

  profiles:
    name: "Structures: Resource Profiles"
    description: "These define constraints on FHIR resources for systems conforming to this implementation guide."
    resources:
      - StructureDefinition/C4BB-Patient
      - StructureDefinition/C4BB-Coverage
      - StructureDefinition/C4BB-Practitioner
      - StructureDefinition/C4BB-Organization
      - StructureDefinition/C4BB-RelatedPerson
      - StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional
      - StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional
      - StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician
      - StructureDefinition/C4BB-ExplanationOfBenefit-Pharmacy
      - StructureDefinition/C4BB-ExplanationOfBenefit-Oral




resources:
  Patient/Patient1:
    name: Patient Example 1
    description: Patient Example 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Patient
  Patient/Patient2:
    name: Patient Example 2
    description: Patient Example 2
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Patient
  Coverage/Coverage1:
    name: Coverage Example 1
    description: Coverage Example1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage
  Coverage/Coverage2:
    name: Coverage Example 2
    description: Coverage Example 2
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage
  Coverage/Coverage3:
    name: Coverage Example 3
    description: Coverage Example 3
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage
  Coverage/CoverageDental1:
    name: Dental Coverage Example1
    description: Dental Coverage Example1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage
  ExplanationOfBenefit/EOBInpatient1:
    name: EOB Inpatient Example1
    description: EOB Inpatient Example 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional
  ExplanationOfBenefit/EOBInpatient2:
    name: EOB Inpatient Example 2
    description: EOB Inpatient Example 2
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional
  ExplanationOfBenefit/EOBOutpatient1:
    name: EOB Outpatient Institutional - Example 1
    description: EOB Outpatient Institutional - Example 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional
  ExplanationOfBenefit/EOBOutpatient2:
    name: EOB Outpatient Institutional - Example 2
    description: EOB Outpatient Institutional - Example 2
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional
  ExplanationOfBenefit/EOBProfessional1:
    name: EOB Professional - Example 1
    description: EOB Professional - Example 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician
  ExplanationOfBenefit/EOBProfessional2:
    name: EOB Professional - Example 2
    description: EOB Professional - Example 2
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician
  ExplanationOfBenefit/EOBProfessionalTransportation1:
    name: EOB Professional - Transportation 1
    description: EOB Professional - Transportation 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician
  ExplanationOfBenefit/EOBPharmacy1:
    name: EOB Pharmacy Example1
    description: EOB Pharmacy Example1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Pharmacy
  ExplanationOfBenefit/EOBOral1:
    name: EOB Oral Example 1
    description: EOB Oral Example 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Oral
  ExplanationOfBenefit/EOBOral2:
    name: EOB Oral Example 2
    description: EOB Oral Example 2
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Oral
  Organization/ProviderOrganization1:
    name: Provider Organization 1
    description: Provider Organization 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Organization/ProviderOrganization2:
    name: Provider Organization 2
    description: Provider Organization 2
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Organization/ProviderOrganization3:
    name: Provider Organization 3
    description: Provider Organization 3
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Organization/ProviderOrganization4:
    name: Provider Organization 4
    description: Provider Organization 4
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Organization/ProviderOrganization5:
    name: Provider Organization 5
    description: Provider Organization 5
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Organization/ProviderOrganization6:
    name: Provider Organization 6
    description: Provider Organization 6
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Organization/ProviderTransportationOrganization1:
    name: Provider Transportation Organization Example 1
    description: Provider Transportation Organization Example 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Organization/Payer1:
    name: Payer 1
    description: Payer 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Organization/Payer2:
    name: Payer 2
    description: Payer 2
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Organization/DentalPayer1:
    name: Dental Payer1
    description: Dental Payer1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization
  Practitioner/Practitioner1:
    name: Practitioner Example 1
    description: Practitioner Example 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner
  Practitioner/Practitioner2:
    name: Practitioner Example 2
    description: Practitioner Example 2
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner
  Practitioner/Practitioner3:
    name: Practitioner Example 3
    description: Practitioner Example 3
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner
  Practitioner/PractitionerDentalProvider1:
    name: Dental Provider 1
    description: Dental Provider 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner
  RelatedPerson/RelatedPerson1:
    name: Related Person 1
    description: Related Person 1
    exampleCanonical: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-RelatedPerson


---

// File: input/pagecontent/Background.md

<div>&nbsp;</div>
<a name="the-carin-alliance"></a>
### The CARIN Alliance
<p>The CARIN (Creating Access to Real-time Information Now through Consumer-Directed Exchange) Alliance is an&nbsp;<a href="http://www.hl7.org/about/fhir-accelerator/index.cfm" rel="nofollow">HL7 FHIR Accelerator program</a>&nbsp;which brings implementers together to advance the use of HL7 FHIR standards in health care. The <a href="https://www.carinalliance.com/our-work/health-plan/" rel="nofollow">CARIN Alliance Health Plan Workgroup</a> was organized to develop a FHIR-based API that could be implemented by a consumer-facing application. The CARIN for Blue Button Framework was designed to answer the challenge for health plans to &lsquo;meet or exceed&rsquo; the <a href="https://bluebutton.cms.gov/" rel="nofollow">CMS Blue Button 2.0</a> capabilities. The CMS Blue Button&reg; 2.0 project provides over 53 million Medicare fee-for-service beneficiaries access to their electronic claims information. 
The goal of the CARIN Alliance Health Plan Workgroup is to develop an agreed upon set of data fields to exchange with consumers and a FHIR-based implementation guide for health plans and consumer facing applications to use to implement the API.</p>
### Consumer-directed exchange
<p>
Consumer-directed exchange occurs when a consumer or an authorized personal representative, invokes the <a href="https://www.govregs.com/regulations/title45_chapterA_part164_subpartE_section164.524">HIPAA Individual Right of Access (45 CFR 164.524)</a> and requests the associated digital health information from a HIPAA covered entity (CE) via an application or other third-party data steward.</p>
### CMS Patient Access and Interoperability Rules
<p>The Centers for Medicare &amp; Medicaid Services (CMS) finalized on May 1st, 2020, the <a href="https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and" rel="nofollow"> Interoperability and Patient Access Final Rule</a> on patient access to health data. Under the final rule, Medicare Advantage (MA) plans, state Medicaid and Children&rsquo;s Health Insurance Program (CHIP) agencies, Medicaid and CHIP managed care plans, and qualified health plan (QHP) issuers in the federally-facilitated exchanges (FFEs) must meet certain requirements regarding patient access to their health care information, including requirements related to application programming interfaces (APIs). CMS provides&nbsp;<a href="https://www.cms.gov/Regulations-and-Guidance/Guidance/Interoperability/index" rel="nofollow">Implementation Guidance</a>&nbsp;for the following data types that make-up the Patient Access API::</p>
<p>Patient Access API:</p>
<ul>
<li>Claims &amp; Encounter Data</li>
<li>Clinical Data</li>
<li>Plan Coverage and Formularies</li>
</ul>
<p>The Consumer Directed Payer Data Exchange Implementation Guide was defined by the CARIN Alliance to meet CMS requirements to provide Claims and Encounter data. <br>
Provisioning Clinical Data is defined by the DaVinci Payer Data Exchange (PDex) (see <a href="Background.html#davinci-carin">here</a>) and US Core Implementation Guides . 
<br>Provisioning Plan Coverage and Formularies is defined by the DaVinci Payer Data Exchange US Drug Formulary Implementation Guide.
<br>The effective date of the CMS Interoperability and Patient Access rule is January 1, 2021.</p>
<a name="patient-protection"></a>
### Patient Protection
<h4>Members who want to share their health information with third parties&nbsp;and the CARIN Code of Conduct</h4>
<p>The CMS final rule states: &ldquo;An MA organization must provide in an easily accessible location on its public website and through other appropriate mechanisms through which it ordinarily communicates with current and former enrollees seeking to access their health information held by the MA organization, educational resources in non-technical, simple and easy-to-understand language." Therefore, providing member educational materials is outside the scope of this IG and the responsibility of each payer.&nbsp;</p>
<p>The CMS rule also states, &ldquo;Payers can look to industry best practices, including the CARIN Alliance&rsquo;s Code of Conduct and the <a href="https://www.healthit.gov/topic/privacy-security-and-hipaa/model-privacy-notice-mpn">ONC Model Privacy Notice</a> for other provisions to include in their attestation request that best meet the needs of their patient population."&nbsp;Although it&rsquo;s outside the scope of the IG, CMS and the CARIN Alliance are encouraging payers to have applications&nbsp;sign&nbsp;the&nbsp;<a href="https://www.carinalliance.com/our-work/trust-framework-and-code-of-conduct/">CARIN Code of Conduct</a> as part of the application registration process or visit <a href="https://myhealthapplication.com/">MyHealthApplication.com</a> to view applications that have attested to the Code of Conduct.&nbsp;Following this process can help ensure consistency in how apps are getting informed, proactive consent from members and consistency in how apps use, share, and store a member&rsquo;s health information.&nbsp;Apps that publicly attest to best practices around data governance can better be held accountable by the FTC. This enforcement mechanism will help to build consumer trust in the use of technology to manage their health. The CARIN Alliance is also developing a set of Application Registration best practices for the industry to use. For more information, please visit the&nbsp;<a href="https://www.carinalliance.com/">CARIN Alliance website</a>.</p>
<p>The&nbsp;<a href="https://www.cms.gov_files_document_patient-2Dprivacy-2Dand-2Dsecurity-2Dresources.pdf" rel="nofollow">CMS Patient Privacy and Security</a>&nbsp;resources directs that payers must educate patients about sharing their health information with third parties.</p>
<ul type="disc">
<li>Among the patient disclosures, plans are encouraged to provide information on:</li>
<ul type="circle">
<li>How an individual can safeguard their online privacy; and</li>
<li>Factors to consider when choosing a consumer-facing application.</li>
<li>How a consumer can submit complaints to the Office of Civil Rights (OCR) or the Federal Trade Commission (FTC);</li>
<li>CMS cites the CARIN Alliance Code of Conduct and the ONC Model Privacy Notice as best practices to meet these needs.</li>
</ul>
<li>Payers may not limit access to information for a patient through an application that fails to voluntarily attest to specific statements or if an enrollee chooses to disregard warnings about data use.</li>
</ul>
<p>The&nbsp;effective&nbsp;date&nbsp;of the CMS rule&nbsp;is January 1, 2021. Patient education is out of scope for this Implementation Guide.</p>
<a name="relation-to-other-IGs"></a>
### CARIN IG for Blue Button&reg; Relation to other IGs
<h4>US Core</h4>

<p>
This implementation guide supports the <a href="{{site.data.fhir.path}}index.html">R4</a> version of the FHIR standard and builds on the US Core <a href="{{site.data.fhir.ver.uscore3}}">3.1 (USCDI 1)</a> and <a href="{{site.data.fhir.ver.uscore6}}">6.1 (USCDI 3)</a> implementation guides and implementers need to familiarize themselves with the profiles in those guides.  The profiles in this IG conform with both releases of US Core.
</p>

<p>CARIN IG for Blue Button&reg; uses the ExplanationOfBenefit Resource as its primary resource. Reference Resources are Coverage, Patient, Practitioner, RelatedPerson, and Organization. Since the ExplanationOfBenefit profiles are not included in the US Core, there is no alignment requirement for these profiles. Coverage, Patient, Practitioner, RelatedPerson, and Organization are US Core Profiles. Since these are supporting / reference profiles (rather than a focus profile) in CARIN IG for Blue Button&reg;, the alignment with the US Core is on the content of these profiles, but not on the search parameters. The following diagram provides a high-level view of the relationships between resources used in this IG. It does not necessarily reflect all of the relationships/references between resources. This guide also requires the use of the US Core Provenance resource, but does not include any additional constraints and is not presented on the below diagram. <a href="CARINBBResources.png" target="_blank" rel="noopener noreferrer"><img src="CARINBBResources.png" width="1100"/></a></p>
<h4>SMART Application Launch</h4>
<p>The CARIN IG for Blue Button&reg; requires the use of the SMART App Launch Framework&rsquo;s standalone launch sequence as it will clarify that applications maintain a patient context for the duration of the connection. This authorization sequence also supports the ability for Payer Patient Access APIs to provide a patient selection widget that can be used to enable delegated access to member information. The SMART App IG also provides guidance on how to configure OAuth 2.0 servers to mediate access based on a set of rules configured to enforce institutional policy, which may include requesting end-user authorization. The SMART App IG also provides guidance on how to handle authentication.</p>
<p>The SMART App IG does not dictate the institutional policies that are implemented in the authorization server. Security mechanisms, such as those mandated by HIPAA in the US (end-user authentication, session time-out, security auditing, and accounting of disclosures) are outside the scope of this profile.</p>
<h4 id="davinci-carin">How DaVinci&rsquo;s PDex IG and the CARIN IG for Blue Button&reg; work together</h4>
<p>There are two parallel paths pursued by the CARIN Alliance and the Da Vinci Project related to providing health plan data to various stakeholders. CARIN Alliance approaches the issue primarily from a financial (claims) perspective, with some limited associated clinical data. Da Vinci Project approaches the issue primarily from a clinical perspective and leaves most financial data out of scope</p>
<p>The CARIN Alliance focused on replicating the CMS Blue Button 2.0 solution directed at providing beneficiaries access to claims information for Medicare Fee For Service (FFS) in the form of a FHIR based ExplanationOfBenefits (EOB). The CARIN Alliance Consumer-Directed Payer Data Exchange (CARIN IG for Blue Button&reg;) solution was intended to provide the same information based on commercial payer databases, at a least for Medicare Advantage products. The CMS Interoperability and Patient Access Final Rule expanded the scope of a Blue Button 2.0 equivalent to include not just Medicare Advantage but also Medicaid HMO, CHIP HMO and QHP's in the federal marketplace.</p>
<p>The Da Vinci Payer Data Exchange (PDex) solution started with the goal of providing payer sourced information to providers in the form of FHIR resources consistent with US Core profiles for FHIR Release 4 (R4). The CMS Interoperability Final Rule directs covered payers (as noted above) to make encounter information and clinical data available to members through an API defined by the ONC 21<sup>st</sup> Century Cures Act Final Rule for, at a minimum, information defined in USCDI release 1.1. Since PDex was already focused on making the same information available through a compliant API, Da Vinci expanded the scope of PDex to include not only payer to provider exchange at the request of the provider but also payer to third party application exchange at the request of the member.</p>
<img src="PDexVsCARINBB.png"  width="1100"/>
<p>In addition, the CMS Interoperability Final Rule requires a covered plan, at the member&rsquo;s request, to make their information (as defined by USCDI release 1.1, at a minimum) available to any other plan as directed by the member. This ability must exist for up to 5 years after the member leaves the plan. Da Vinci expanded the scope of the PDex Implementation Guide to support this exchange.</p>
<p>At this point we have two solutions that provide an overlapping but different set of information for the members of a health plan. The first is the CARIN IG for Blue Button&reg; which is focused on providing claims information, including the adjudication information, in the form of a FHIR EOB. The second solution is to provide all payer information related to the clinical condition and care of the patient using US Core profiles on FHIR R4 resources. In the latter case, information coming from claims is represented as USCDI V1.1 information and includes, at a minimum: encounters, providers, organizations, locations, dates of service, diagnoses (conditions), procedures and observations. This information would also include clinical information from sources other than claims maintained by the payer, such as:</p>
<ul>
<li>laboratory results received via HL7 V2 ORU transactions,</li>
<li>clinical data from HL7 consolidated CDAs,</li>
<li>information derived from HL7 V2 ADT transactions,</li>
<li>information received or extracted from immunization registries,</li>
<li>information related to medication administration from pharmacy benefit managers in pharmacy networks,</li>
<li>FHIR resources, and any other source of clinical information related to the member.</li>
</ul>
<p>Unlike the US Core 3.1.1 and US Core 6.1.0 Implementation Guides, PDex provides guidance to payers on how to make the following information available via the Patient Access API:</p>
<ul>
<li>dispensed medications (not covered in US Core)</li>
<li>medical devices that are not implantable devices (not covered in US Core)</li>
<li>CPCDS data set to US Core and PDex profiles to satisfy the requirement for exchange of USCDI V1.1 information</li>
<li>clinical data received by payers (e.g. laboratory results) from multiple sources (e.g. claims, HL7 V2, CDA) to the appropriate FHIR US Core and PDex profile data elements</li>
</ul>


---

// File: input/pagecontent/change_notes.md

CARIN Consumer Directed Payer Data Exchange (CARIN IG for Blue Button®) was developed under the <a href="https://www.carinalliance.com/">CARIN Alliance</a>.

### Changes and Updates for Version 2.1.0 (from version 2.0.0)
The current official published version of CARIN BB for FHIR R4, An update of STU2 addressing various issues and added support for US Core 6.1.0

<ul>
  <li>Changed base profile of the <a href="StructureDefinition-C4BB-Patient.html">Patient</a>, <a href="StructureDefinition-C4BB-Coverage.html">Coverage</a>, <a href="StructureDefinition-C4BB-Practitioner.html">Practitioner</a>, <a href="StructureDefinition-C4BB-Organization.html">Organization</a>, and <a href="StructureDefinition-C4BB-RelatedPerson.html">RelatedPerson</a> to <a href="https://hl7.org/fhir/us/core/STU6.1/">US Core 6.1</a> and added complies with requirements to <a href="https://hl7.org/fhir/us/core/STU3.1.1/">US Core 3.1.1</a> where there was a profile in that version (<a href="https://jira.hl7.org/browse/FHIR-46374">FHIR-46374</a>) <br/>Note: Most of the changes from US Core 3.1.1 to 6.1 are reductions in Must Support requirements, but there are a small number of breaking changes to note, including:
    <ul>
      <li>The <a href="StructureDefinition-C4BB-Coverage.html">Coverage</a> profile now requires the member identifier, if present, to have a type of <code>MB</code> from system <code>http://terminology.hl7.org/CodeSystem/v2-0203</code>. The previous version of this profile did not have specific requirements for the member ID, though the example had a member ID that matched US Core 6.1 requirements.</li>
      <li>The <a href="StructureDefinition-C4BB-Coverage.html">Coverage</a> profile now has an extensible binding to a ValueSet to Coverage.type, where there was no previous binding.</li>
      <li>The <a href="StructureDefinition-C4BB-Organization.html">Organization</a> and <a href="StructureDefinition-C4BB-Organization.html">Practitioner</a> profiles now have ID validation checks for NPI and CLIA numbers</li>
    </ul>
  </li>
  <li>Added "Basis" profiles for all EOB types that identify all data requirements excluding financial data. This is made available for other IGs (e.g. <a href="https://hl7.org/fhir/us/davinci-pdex">Da Vinci PDex</a>) that need communicate EOB information to parties other than the patient/member. This does not represent any change of conformance requirements for the existing EOB profiles. (<a href="https://jira.hl7.org/browse/FHIR-40999">FHIR-40999</a> and <a href="https://jira.hl7.org/browse/FHIR-40820">FHIR-40820</a>)</li>
  <li>Removed the NUBC Present On Admission Indicator CodeSystem "stub", Updated the NUBC Present On Admission Indicator Codes Value Set to point to the <a href="https://terminology.hl7.org/CodeSystem-presentOnAdmission.html">CMS Present on Admission Indicator CodeSystem</a>, and change the name to "CMS Present On Admission Indicator Codes Value Set" (This requires a code system change from <code>https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator</code> to <code>https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HospitalAcqCond/Coding</code> for resources claiming conformance) (<a href="https://jira.hl7.org/browse/FHIR-38278">FHIR-38278</a>)</li>
  <li>Removed the US Surface Codes System and updated the <a href="ValueSet-C4BBSurfaceCodes.html">US Surface Codes Set Value Set</a> to point to the <a href="https://terminology.hl7.org/CodeSystem-ADAToothSurfaceCodes.html">ADA Tooth Surface Codes CodeSystem</a> (This requires a code system change from <code>http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSurfaceCodes</code> to <code>http://terminology.hl7.org/CodeSystem/ADAToothSurfaceCodes</code> for resources claiming conformance) (<a href="https://jira.hl7.org/browse/FHIR-47140">FHIR-47140</a>)</li>
  <li>Corrected the ICD-9 CodeSystem url (This requires a code system change from <code>http://terminology.hl7.org/CodeSystem/icd9</code> to <code>http://hl7.org/fhir/sid/icd-9-cm</code> for resources claiming conformance) (<a href="https://jira.hl7.org/browse/FHIR-41791">FHIR-41791</a>)</li>
  <li>Removed the X12 Ambulance Transport Reason Codes (X12AmbulanceTransportReasonCodes) CodeSystem "stub". This CodeSystem is now defined in THO and the stub is no longer needed in this IG. The code system url <code>https://x12.org/codesystem.x12.org/ambulance-transport-reason-codes</code> used by implementers for conformance resources has not changed (<a href="https://jira.hl7.org/browse/FHIR-46778">FHIR-46778</a>)</li>
  <li>Corrected several invariants that either had the wrong context or an expression that returned false negatives if the element of interest had multiple iterations (<a href="https://jira.hl7.org/browse/FHIR-46276">FHIR-46276</a>)</li>
  <li>Added a <code>masked</code> Data Absent Reason Code to the <a href="ValueSet-CDCICD910CMDiagnosisCodes.html">Diagnosis Codes ValueSet</a> to allow for masking of sensitive diagnosis codes. (<a href="https://jira.hl7.org/browse/FHIR-40441">FHIR-40441</a>)</li>
  <li>Reduced <code>meta.profile</code> requirements for all profiles. <code>meta.profile</code> still required, but the invariant checking for the profile url of this guide is no longer an error, but a informational warning.  (<a href="https://jira.hl7.org/browse/FHIR-41498">FHIR-41498</a>)</li>
  <li>Fixed the expression for the <a href="SearchParameter-explanationofbenefit-service-start-date.html">Service Start Date SearchParameter</a> (<a href="https://jira.hl7.org/browse/FHIR-46376">FHIR-46376</a>)</li>
  <li>Added the ability for the ExplanationOfBenefit.provider to be an Organization for the <a href="StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral EOB Profile</a> (<a href="https://jira.hl7.org/browse/FHIR-44662">FHIR-44662</a>)</li>
  <li>Removed the inclusion of codes in <a href="ValueSet-C4BBPayerBenefitPaymentStatus.html">Benefit Payment Status</a> from the <a href="ValueSet-C4BBTotalCategoryDiscriminator.html">C4BB Total Category Discriminator Value Set</a> (<a href="https://jira.hl7.org/browse/FHIR-40245">FHIR-40245</a>)</li>
  <li>Added Guidance to the notes section of all EOB profiles describing the difference in the adjudication slice types of billing network status (billingnetworkstatus), rendering network status (renderingnetworkstatus), and benefit payment status (benefitpaymentstatus) (<a href="https://jira.hl7.org/browse/FHIR-46558">FHIR-46558</a>)</li>
  <li>Updated guidance for the <a href= "SearchParameter-explanationofbenefit-service-date.html">Service Date Search Parameter</a> to state that the search parameter is to simplify the search in case the client does not know the specific date type to search for based on EOB type. (<a href="https://jira.hl7.org/browse/FHIR-41634">FHIR-41634</a>)</li>
  <li>Clarified search removing the need for a patient search argument in the <a href = "CapabilityStatement-c4bb.html">Capability Statement</a>. (<a href="https://jira.hl7.org/browse/FHIR-41628">FHIR-41628</a>)</li>
  <li>Improved the <a href="ExplanationOfBenefit-EOBProfessional1.html">EOB Professional 1 example</a> to include more realistic amounts and a payee. (<a href="https://jira.hl7.org/browse/FHIR-43464">FHIR-43464</a>)</li>
  <li>Updated the menu structure adding support links. (<a href="https://jira.hl7.org/browse/FHIR-46270">FHIR-46270</a>)</li>

</ul>


### Changes and Updates for Version 2.0.0 (from version 1.1.0)
Balloted Release


<ul>
  <li>Added <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral ExplanationOfBenefit profile</a> and vision type to <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a> (<a href="https://jira.hl7.org/browse/FHIR-34009">FHIR-34009</a>, <a href="https://jira.hl7.org/browse/FHIR-27025">FHIR-27025</a>, <a href="https://jira.hl7.org/browse/FHIR-37706">FHIR-37706</a>, <a href="https://jira.hl7.org/browse/FHIR-37562">FHIR-37562</a>, and <a href="https://jira.hl7.org/browse/FHIR-35146">FHIR-35146</a>)
    <ul>
      <li>Added orthodontics and prosthesis to <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBSupportingInfoType.html">Supporting Info Type ValueSet</a> used as a discriminator for the EOB Oral profile supportingInfo slice discriminator (<a href="https://jira.hl7.org/browse/FHIR-34010">FHIR-34010</a>)</li>
      <li>Added <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBSurfaceCodes.html">US Surface Codes</a> for Oral ExplanationOfBenefit.item.subSite (<a href="https://jira.hl7.org/browse/FHIR-34089">FHIR-34089</a>)</li>
      <li>Added Invariants requiring all ExplanationOfBenefit.supportingInfo[additionalBodySite] instances be referred to by at least one ExplanationOfBenefit.item and require a tooth number for line items where a surface code in ExplanationOfBenefit.item.subsite exists in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral ExplanationOfBenefit profile</a> (<a href="https://jira.hl7.org/browse/FHIR-34091">FHIR-34091</a>)</li>
    </ul>
  </li>

  <li>Changed cardinality of ExplanationOfBenefit.item from 0..* to 1..* in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Base ExplanationOfBenefit profile</a> requiring ExplanationOfBenefit for all <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#structures-resource-profiles">all Resource ExplanationOfBenefit profiles</a> (<a href="https://jira.hl7.org/browse/FHIR-34114">FHIR-34114</a>) *</li>

  <li>Require item.location[x] to be only CodeableConcept in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral</a> ExplanationOfBenefit profiles (<a href="https://jira.hl7.org/browse/FHIR-32067">FHIR-32067</a>) *</li>

  <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit</a> item.location[x] from cardinality of 0..1 to 1..1 and added Must Support (<a href="https://jira.hl7.org/browse/FHIR-34148">FHIR-34148</a>) *</li>

  <li>Changed item.serviced[x] and billablePeriod cardinality (<a href="https://jira.hl7.org/browse/FHIR-31639">FHIR-31639</a> and <a href="https://jira.hl7.org/browse/FHIR-36760">FHIR-36760</a>) *
    <ul>
      <li>ExplanationOfBenefit.item.serviced[x] from 0..1 to 1..1 and billablePeriod from 0..1 to 1..1 for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional ExplanationOfBenefit profile</a></li>
      <li>ExplanationOfBenefit.item.serviced[x] and ExplanationOfBenefit.billablePeriod from 0..1 to 1..1 for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a></li>
      <li>ExplanationOfBenefit.item.serviced[x] from 0..1 to 1..1 for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy ExplanationOfBenefit profile</a></li>
    </ul>
  </li>

  <li>Changed the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy Explanation Of Benefit profile</a> serviced[x] to only be a date (<a href="https://jira.hl7.org/browse/FHIR-38668">FHIR-38668</a>) *</li>

  <li>Added Must Support to ExplanationOfBenefit.item.serviced[x] leaf elements on the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician</a> ExplanationOfBenefit profiles (<a href="https://jira.hl7.org/browse/FHIR-38669">FHIR-38669</a>) *</li>

  <li>Moved ExplanationOfBenefit.total[benefitpaymentstatus] slice to ExplanationOfBenefit.adjudication[benefitpaymentstatus] (therefore not requiring an amount property) for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient Institutional</a>, <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional</a>, <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy</a>, and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral</a> ExplanationOfBenefit profiles, changed the pattern to match other adjudication repetitions, and update the invariants appropriately(<a href="https://jira.hl7.org/browse/FHIR-33082">FHIR-33082</a>, <a href="https://jira.hl7.org/browse/FHIR-37726">FHIR-37726</a>, <a href="https://jira.hl7.org/browse/FHIR-38063">FHIR-38063</a>, and <a href="https://jira.hl7.org/browse/FHIR-35358">FHIR-35358</a>) *</li>


  <li>Changed codes term of "performing" provider to "rendering" provider in the <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBClaimCareTeamRole.html">Claim Care Team Role</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBAdjudicationDiscriminator.html">Adjudication Discriminator</a> CodeSystems and in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral ExplanationOfBenefit </a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit</a> profiles rendering provider network status (<a href="https://jira.hl7.org/browse/FHIR-37727">FHIR-37727</a>) *</li>

  <li>Changed rendering network status from ExplanationOfBenefit.supportingInfo slice to ExplanationOfBenefit.adjudication slice in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral ExplanationOfBenefit </a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit</a> profiles and changed billing network status ExplanationOfBenefit.supportingInfo slice to ExplanationOfBenefit.adjudication slice in <a href="artifacts.html#structures-resource-profiles">all non-abstract ExplanationOfBenefit profiles</a> (<a href="https://jira.hl7.org/browse/FHIR-37728">FHIR-37728</a>) *</li>

  <li>Changed provider "contracting network status" to provider "network status" by updating <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBAdjudicationDiscriminator.html">Adjudication Discriminator</a>; changing the C4BBPayerProviderContractingStatus ValueSet to <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBPayerProviderNetworkStatus.html">C4BBPayerProviderNetworkStatus ValueSet</a> with `innetwork` and `outofnetwork` codes; removing "contracted" and "notcontracted" codes in <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBPayerAdjudicationStatus.html">Payer Adjudication Status ValueSet</a>, and updating the `innetwork` and `outofnetwork` code definitions for applicability for the provider network status (<a href="https://jira.hl7.org/browse/FHIR-38059">FHIR-38059</a>) *</li>


  <li>Updated the definition of <a href="https://hl7.org/fhir/us/carin-bb/STU2/Conformance_Requirements.html#must-support">Must Support</a> to state "Health Plan API actors SHALL be capable of populating all data elements the payer maintains" which are marked as Must Support, and remove the requirement that "Consumer App actors SHOULD be capable of storing the information for other purposes" (<a href="https://jira.hl7.org/browse/FHIR-36675">FHIR-36675</a> and <a href="https://jira.hl7.org/browse/FHIR-35730">FHIR-35730</a>)</li>

  <li>Changed ExplanationOfBenefit.adjudication and ExplanationOfBenefit.item.adjudication slicing from closed to open for <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#structures-resource-profiles">all Resource ExplanationOfBenefit profiles</a> (<a href="https://jira.hl7.org/browse/FHIR-34241">FHIR-34241</a>)</li>

  <li>Add not-applicable code to <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-AMACPTCMSHCPCSProcedureCodes.html">Professional Procedure Codes ValueSet</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-ADADentalProcedureCode.html">Oral Procedure Code ValueSet</a> for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a> (with Invariant allowing only if type = vision) and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral</a> (ExplanationOfBenefit.item.productOrService) (<a href="https://jira.hl7.org/browse/FHIR-33024">FHIR-33024</a>)</li>

  <li>Removed Invariant that not allowing not-applicable code for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional ExplanationOfBenefit profile</a> item.productOrService (<a href="https://jira.hl7.org/browse/FHIR-32850">FHIR-32850</a>)</li>


  <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-Practitioner.html">Practitioner</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-Organization.html">Organization</a> profiles identifier.type in the NPI slice to use the `NPI` from CodeSystem http://terminology.hl7.org/CodeSystem/v2-0203 (<a href="https://jira.hl7.org/browse/FHIR-35712">FHIR-35712</a>) *</li>

  <li>Updated the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Base Explanation Of Benefit profile</a> to require the identifier to contain the unique claim id (<a href="https://jira.hl7.org/browse/FHIR-38660">FHIR-38660</a>) *</li>

  <li>Added Non-emergency transport information to ExplanationOfBenefit.supportingInfo slices to the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a> along with invariant rules (<a href="https://jira.hl7.org/browse/FHIR-37615">FHIR-37615</a>)</li>

  <li>Removed meta.profile requirements on <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Abstract base ExplanationOfBenefit profile</a> (<a href="https://jira.hl7.org/browse/FHIR-34504">FHIR-34504</a>)</li>

  <li>Added refillsAuthorized slice to ExplanationOfBenefit.supportingInfo of <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy ExplanationOfBenefit</a> profile (<a href="https://jira.hl7.org/browse/FHIR-33487">FHIR-33487</a>)</li>

  <li>Added to rejectreason code to <a href="CodeSystem-C4BBAdjudicationDiscriminator.html">Adjudication Discriminator</a> and changed ExplanationOfBenefit.item.adjudication denialreason slice to rejectreason with a fixed category code of rejectreason in <a href="https://build.fhir.org/ig/HL7/carin-bb/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy Explanation Of Benefit profile</a>. (<a href="https://jira.hl7.org/browse/FHIR-38062">FHIR-38062</a>) *</li>

  <li>Changed payee.party cardinality from 1..1 to 0..1 and added invariant requiring payee.party if payee.type='other' in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Base ExplanationOfBenefit profile</a> and added new <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-RelatedPerson.html">RelatedPerson profile</a> as a reference option (<a href="https://jira.hl7.org/browse/FHIR-31699">FHIR-31699</a> and <a href="https://jira.hl7.org/browse/FHIR-37740">FHIR-37740</a>)</li>

  <li>Added <a href="https://hl7.org/fhir/us/carin-bb/STU2/SearchParameter-explanationofbenefit-service-start-date.html">service-start-date search parameter</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/SearchParameter-explanationofbenefit-billable-period-start.html">billable-period-start search parameter</a> (<a href="https://jira.hl7.org/browse/FHIR-33165">FHIR-33165</a> and <a href="https://jira.hl7.org/browse/FHIR-34428">FHIR-34428</a>)</li>

  <li>Added _id search parameter for all resources and change conformance expectation for Practitioner and Organization resources to SHOULD to allow for them to be supported as contained resources in <a href="https://hl7.org/fhir/us/carin-bb/STU2/CapabilityStatement-c4bb.html">Capability Statement</a> with associated guidance and related the resources' meta.lastUpdated requirement (<a href="https://jira.hl7.org/browse/FHIR-38108">FHIR-38108</a> and <a href="https://jira.hl7.org/browse/FHIR-36676">FHIR-36676</a>)</li>

  <li>Added guidance on the expectation of _include support and interpretation of _include=ExplanationOfBenefit:* to <a href="https://hl7.org/fhir/us/carin-bb/STU2/searchparameters.html">search Parameters page</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/CapabilityStatement-c4bb.html">Capability Statement</a> including adding ExplanationOfBenefit:payee (<a href="https://jira.hl7.org/browse/FHIR-32982">FHIR-32982</a>)</li>


  <li>Added a requirement in the <a href="https://hl7.org/fhir/us/carin-bb/STU2/Conformance_Requirements.html#capabilitystatement-server-requirement">General Guidance</a> that servers SHALL include a CapabilityStatement that has a CapabilityStatement.instantiates specifying the CapabilityStatement in this specification (<a href="https://jira.hl7.org/browse/FHIR-35360">FHIR-35360</a>)</li>


  <li>Updated the <a href="https://hl7.org/fhir/us/carin-bb/STU2/CapabilityStatement-c4bb.html">CapabilityStatement</a> security section allowing unauthorized requests responses of HTTP 403 "Forbidden" or HTTP 404 "Not Found" in addition to the previously stated HTTP 401 "Unauthorized" (<a href="https://jira.hl7.org/browse/FHIR-35766">FHIR-35766</a>)</li>

  <li>Moved ExplanationOfBenefit searches documentation from read interaction to search-type interaction in <a href="https://hl7.org/fhir/us/carin-bb/STU2/CapabilityStatement-c4bb.html">Capability Statement</a> (<a href="https://jira.hl7.org/browse/FHIR-33176">FHIR-33176</a>)</li>

  <li>Removed invalid invariant from <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a> that required ExplanationOfBenefit.careTeam.provider to be an Organization reference when careTeam.role was 'site' ('site' not a code in the role ValueSet) (<a href="https://jira.hl7.org/browse/FHIR-31658">FHIR-31658</a>)</li>

  <li>Corrected invalid invariant for the CareTeam qualification being from a specific CodeSystem when the type is rendering in the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Abstract base ExplanationOfBenefit profile</a> (<a href="https://jira.hl7.org/browse/FHIR-35889">FHIR-35889</a>)</li>

  <li>Added paidbypatientcash, paidbypatientother, paidbypatienthealthaccount codes to <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBAdjudication.html">Adjudication ValueSet</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBAdjudication.html">Adjudication CodeSystem</a> (<a href="https://jira.hl7.org/browse/FHIR-33996">FHIR-33996</a> and <a href="https://jira.hl7.org/browse/FHIR-33996">FHIR-37831</a>)</li>

  <li>Updated the url for the HCPCS Level II codes in <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBEOBInstitutionalProcedureCodes.html">C4BBEOBInstitutionalProcedureCodes</a> (<a href="https://jira.hl7.org/browse/FHIR-37334">FHIR-37334</a>)</li>

  <li>Removed the fixed meta.profile slice requirement including the full version and replaced with invariant requirements requiring a meta.profile with the major and minor version included in <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#structures-resource-profiles">all non-abstract ExplanationOfBenefit profiles</a> (to allow instances from different patch versions to still validate) (<a href="https://jira.hl7.org/browse/FHIR-34223">FHIR-34223</a>)</li>

  <li>Updated from US Core 3.1.0 to 3.1.1. (<a href="https://jira.hl7.org/browse/FHIR-33177">FHIR-33177</a> and <a href="https://jira.hl7.org/browse/FHIR-35708">FHIR-35708</a>)</li>

  <li>Modified security guidance in <a href="https://hl7.org/fhir/us/carin-bb/STU2/Security_And_Privacy_Considerations.html">Security and Privacy Considerations</a> page (<a href="https://jira.hl7.org/browse/FHIR-31693">FHIR-31693</a>, <a href="https://jira.hl7.org/browse/FHIR-35729">FHIR-35729</a> and <a href="https://jira.hl7.org/browse/FHIR-35722">FHIR-35722</a>)</li>

  <li>Changed display of code other from default value of "Provider to "Other" in <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBPayeeType.html">Payee Type ValueSet</a> (<a href="https://jira.hl7.org/browse/FHIR-34020">FHIR-34020</a>)</li>

  <li>Added guidance for the use of the 11-digit NDC code for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy ExplanationOfBenefit</a> profile item.productOrService and item.detail.productOrService (<a href="https://jira.hl7.org/browse/FHIR-32660">FHIR-32660</a>)</li>

  <li>Corrected XPath expression for the <a href="https://hl7.org/fhir/us/carin-bb/STU2/SearchParameter-explanationofbenefit-service-date.html">service-date SearchParameter</a> (<a href="https://jira.hl7.org/browse/FHIR-32843">FHIR-32843</a>)</li>
  
  <li>Corrected invariant for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient Institutional</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional</a> ExplanationOfBenefit profiles to allow other adjudication slices that do not have a category.code from C4BBAdjudication ValueSet (adjudicationamounttype slice) (<a href="https://jira.hl7.org/browse/FHIR-32978">FHIR-32978</a>)</li>

  <li>Removed second extra repetition of meta.profile on all <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#7">examples</a> (<a href="https://jira.hl7.org/browse/FHIR-32428">FHIR-32428</a>)</li>

  <li>Added clearer guidance on ExplanationOfBenefit.supportingInfo[servicefacility] and ExplanationOfBenefit.item.location[x] to <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a>; ExplanationOfBenefit.item.location[x] and ExplanationOfBenefit.supportingInfo[typeofbill] to <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient Institutional</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional</a> ExplanationOfBenefit profiles (<a href="https://jira.hl7.org/browse/FHIR-34087">FHIR-34087</a>)</li>

  <li>Removed references to PractitionerRole and Location from <a href="https://hl7.org/fhir/us/carin-bb/STU2/Background.html#carin-ig-for-blue-button-relation-to-other-igs">Background Relation to other IGs</a> section (<a href="https://jira.hl7.org/browse/FHIR-33060">FHIR-33060</a>)</li>

  <li>Added clearer description of ExplanationOfBenefit.related for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Base ExplanationOfBenefit</a> profile (<a href="https://jira.hl7.org/browse/FHIR-31411">FHIR-31411</a>)</li>

  <li>Removed CodeSystems that were duplicative of those identified in terminology.hl7.org (THO). These removals are non-substantive as they do not change the CodeSystem url used in resource instance communication (<a href="https://jira.hl7.org/browse/FHIR-38285">FHIR-38285</a>)</li>

  <li>Updated element short descriptions to be more meaningful for all  <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#structures-resource-profiles">all Resource profiles</a> (<a href="https://jira.hl7.org/browse/FHIR-34091">FHIR-34091</a>)</li>

  <li>Add guidance to the <a href="https://hl7.org/fhir/us/carin-bb/STU2/General_Guidance.html#considerations-for-improving-interoperability">General Guidance</a> section providing more information on considerations payers and consumer apps should make for understanding improving rendering of the Explanation Of Benefit data. A <a href="https://hl7.org/fhir/us/carin-bb/STU2/General_Guidance.html#example-printed-eob-mapping">example explanation of benefit document</a> with mapping to CPCDS data elements and profile paths is provided to assist consumer app developers in understanding the data elements and suggesting how payers might improve their API documentation for connecting system developers (<a href="https://jira.hl7.org/browse/FHIR-31069">FHIR-31069</a>)</li>

  <li>Updated <a href="https://hl7.org/fhir/us/carin-bb/STU2/Common_Payer_Consumer_Data_Set.html#common-payer-consumer-data-set-cpcds">diagrams and CPCDS resources</a> to match the changes on the latest version of this specification and added comparison of Explanation of Benefit dates (<a href="https://jira.hl7.org/browse/FHIR-35212">FHIR-35212</a>, <a href="https://jira.hl7.org/browse/FHIR-34513">FHIR-34513</a>, and  <a href="https://jira.hl7.org/browse/FHIR-38661">FHIR-38661</a>)</li>

  <li>Remove Must Support from Patient.address.district in the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-Patient.html">Patient profile</a> (<a href="https://jira.hl7.org/browse/FHIR-35710">FHIR-35710</a>)</li>

  <li>Added a note for implementers to all locally defined CodeSystems that may switch the to central terminology.hl7.org (THO) that the code system is subject to change in a future version (<a href="https://jira.hl7.org/browse/FHIR-37830">FHIR-37830</a>)</li>

  <li>Added guidance regarding the definition of the payer id identifier to the <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBIdentifierType.html">Identifier Type CodeSystem</a> and the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-Organization-definitions.html">Organization profile</a> identifier payerid slice (<a href="https://jira.hl7.org/browse/FHIR-36771">FHIR-36771</a> and <a href="https://jira.hl7.org/browse/FHIR-36770">FHIR-36770</a>)</li>

  <li>Made navigation and title updates <a href="https://jira.hl7.org/browse/FHIR-38692">FHIR-38692</a>)</li>

  <li>Removed broken link reference to "API Resource Collection in Health (ARCH)" from the <a href="https://hl7.org/fhir/us/carin-bb/STU2/Conformance_Requirements.html">General Guidance</a> page (<a href="https://jira.hl7.org/browse/FHIR-35956">FHIR-35956</a>)</li>

</ul>


### Changes and Updates for Version 1.1.0
STU Update of STU 1

<ul>
    <li>Added Data Absent Reason "not-applicable" code to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-C4BBEOBInstitutionalProcedureCodes.html#definition">Institutional Procedure Codes ValueSet</a> for use with Inpatient Institutional EOB item.productOrService and an <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.item.productOrService">Invariant disallowing the use of this code in Outpatient Institutional EOB</a> (<a href="https://jira.hl7.org/browse/FHIR-30357">FHIR-30357</a>)</li>
    <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:drg.code">Inpatient Institutional EOB supportingInfo DRG code terminology binding</a> strength from required to extensible to allow for state Medicaid assigned DRGs (<a href="https://jira.hl7.org/browse/FHIR-30380">FHIR-30380</a>)</li>
    <li>Added HIPPS codes to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-C4BBEOBInstitutionalProcedureCodes.html">Institutional EOB Procedure Codes ValueSet</a> (<a href="https://jira.hl7.org/browse/FHIR-30413">FHIR-30413</a>)</li>
    <li> Added C4BB Payer Benefit Payment Status to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-C4BBAdjudicationCategoryDiscriminator.html#definition">C4BB Adjudication Category Discriminator ValueSet</a> for use in the Professional and NonClinician EOB item.adjudication and removed inoutnetwork code from <a  href="CodeSystem-C4BBAdjudicationDiscriminator.html">Adjudication Discriminator CodeSystem</a> (<a href="https://jira.hl7.org/browse/FHIR-30806">FHIR-30806</a>)</li>
    <li>Changes on differentiating ExplanationOfBenefit profiles (<a href="https://jira.hl7.org/browse/FHIR-31594">FHIR-31594</a>) *
        <ul>
            <li>Added ExplanationofBenefit.subType requirements to the <a href = "StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.subType">Inpatient</a> and <a href = "StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.subType">Outpatient</a> Institutional ExplanationOfBenefit profiles.</li>
            <li>Added <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-C4BBInstitutionalClaimSubType.html">Institutional Claim Subtype ValueSet</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-C4BBInstitutionalClaimSubType.html">Institutional Claim Subtype CodeSystem</a></li>
        </ul>
    </li>
    <li>Changed resources used to present patient account number and medical record number (<a href="https://jira.hl7.org/browse/FHIR-31534">FHIR-31534</a>) *
        <ul>
            <li>Removed medrecnum and patacctnum slices from the <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-Patient.html">Patient profile Patient.Identifier</a></li>
            <li>Added medicalrecordnumber and patientaccountnumber supportingInfo slices to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient</a>, <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient</a>, and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional Non-Clinical</a> ExplanationOfBenefit profiles</li>
            <li>Added medicalrecordnumber and patientaccountnumber to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-C4BBSupportingInfoType.html">Supporting Info Type CodeSystem</a></li>
        </ul>
    </li>
    <li>Added <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-AHANUBCPointOfOriginForAdmissionOrVisitNewborn.html">NUBC Point of Origin for Newborn CodeSystem</a> and renamed NUBC Point of Origin CodeSystem to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn.html"> NUBC Point of Origin for Non-newborn CodeSystem</a> for Inpatient and Outpatient Institutional EOB supportingInfo <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-AHANUBCPointOfOriginForAdmissionOrVisit.html">Point of Origin ValueSet</a> for use when Type of Admission is newborn, <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html#inv">Inpatient Institutional EOB Invariant</a>, and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html#inv">Outpatient Institutional EOB Invariant</a> (<a href="https://jira.hl7.org/browse/FHIR-30370">FHIR-30370</a> and <a href="https://jira.hl7.org/browse/FHIR-31384">FHIR-31384</a>) *</li>
    <li>Added Invariants requiring adjudication[adjudicationamounttype] and adjudication[adjudicationamounttype].amount when header level adjudication is present to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html#inv">Inpatient</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html#inv">Outpatient</a> Institutional EOBs and changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-definitions.html#ExplanationOfBenefit.total:adjudicationamounttype">Professional and NonClinician EOB total[adjudicationamounttype]</a> to a cardinality of 1..*( Changed item.adjudication[adjudicationamounttype].amount (<a href="https://jira.hl7.org/browse/FHIR-30369">FHIR-30369</a>) *</li>
    <li>Changes of requirements and guidance on all profiles meta.profile (<a href="https://jira.hl7.org/browse/FHIR-30375">FHIR-30375</a>) *
        <ul>
            <li>Defined fixed values for a slice of meta.profile for <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/artifacts.html#3">all profiles</a>.</li>
            <li>Added guidance on the use of meta.profile as notes to all profiles.</li>
        </ul>
    </li>
    <li>Updated NCPDP CodeSystem URLs (<a href="https://jira.hl7.org/browse/FHIR-31492">FHIR-31492</a>) * including:
        <ul>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPBrandGenericIndicator.html">NCPDP Brand Generic Indicator</a></li>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPCompoundCode.html">NCPDP Compound Code</a></li>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPDispensedAsWrittenOrProductSelectionCode.html">NCPDP Dispense As Written (DAW)/Product Selection Code</a></li>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPPrescriptionOriginCode.html">NCPDP Prescription Origin Code</a></li>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPRejectCode.html">NCPDP Reject Code</a></li>
        </ul>
    </li>
    <li>Changed inoutnetwork slice names and cardinalities (<a href="https://jira.hl7.org/browse/FHIR-30635">FHIR-30635</a>), and Move total [benefitpaymentstatus] slice to supportingInfo (<a href="https://jira.hl7.org/browse/FHIR-33082">FHIR-33082</a>) *
        <ul>
            <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Inpatient Institutional</a>, <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Outpatient Institutional</a>, and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Pharmacy</a> EOBs total[inoutnetwork] slice name to benefitpaymentstatus</li>
            <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-definitions.html#ExplanationOfBenefit.item.adjudication:benefitpaymentstatus">Professional and NonClinician EOB item.adjudication[inoutnetwork]</a> slice name to benefitpayementstatus</li>
            <li>Changed cardinality of <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Inpatient</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Outpatient</a> Institutional EOB supportingInfo[benefitpaymentstatus] from (0..1) to (1..1)</li>
            <li>Removed notes in <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html#root">Professional and NonClinician EOB</a> referencing total[inoutnetwork] slice name</li>
            <li>Updated notes for all profiles that referenced inoutnetwork slice name to benefitpaymentstatus</li>
            <li>Updated the Detailed Profile Comparison <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/4_Common_Payer_Consumer_Data_Set.html#profiles-definition">image</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CARINforBlueButtonProfileComparison.xlsx">source file (xslx)</a> in section 5</li>
        </ul>
    </li>
    <li>Changed cardinality of several slice properties from (0..1) to (1..1) (<a href="https://jira.hl7.org/browse/FHIR-30807">FHIR-30807</a>) *
        <ul>
            <li>Changed cardinality of item.adjudication[allowedunits].value from (0..1) to (1..1) in <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.item.adjudication:allowedunits.value">Inpatient</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.item.adjudication:allowedunits.value">Outpatient</a> Institutional EOBs</li>
            <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.adjudication:denialreason.reason">Inpatient Institutional EOB adjudication[denialreason].reason</a> cardinality from (0..1) to (1.1.)</li>
            <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:pointoforigin.code">Outpatient Institutional EOB supportingInfo[pointoforigin].code</a> cardinality from (0..1) to (1..1)</li>
        </ul>
    </li>
    <li>Added 'Must Support' to Professional and NonClinician EOB <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-definitions.html#ExplanationOfBenefit.item.productOrService">item.productOrService</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-definitions.html#ExplanationOfBenefit.item.modifier">item.modifier</a> (<a href="https://jira.hl7.org/browse/FHIR-30358">FHIR-30358</a>)</li>
    <li>Fixed Explanations of Benefits Profile Definition <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/4_Common_Payer_Consumer_Data_Set.html#profiles-definition">diagram</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CARINforBlueButtonProfileComparisonOverview.pptx">source presentation file (pptx)</a> legend and added DRG owner (<a href="https://jira.hl7.org/browse/FHIR-30360">FHIR-30360</a>)</li>
    <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient EOB</a> insurance cardinality for 1..1 to 1..* by removing constraint in profile (<a href="https://jira.hl7.org/browse/FHIR-31477">FHIR-31477</a>)</li>
    <li>Removed IG specified requirements of Coverage.Subscriber from the <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-Coverage.html">Coverage Profile</a> (<a href="https://jira.hl7.org/browse/FHIR-31535">FHIR-31535</a>)</li>
    <li>Removed incorrect casting of <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/SearchParameter-explanationofbenefit-service-date.html">ExplanationOfBenefit service-date (item.serviced) search parameter</a> (<a href="https://jira.hl7.org/browse/FHIR-30443">FHIR-30443)</a>)</li>
    <li>Added language regarding security and privacy to the <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/7_Authorization_Authentication_and_Registration.html#fhir-security-and-privacy-guidance">Authorization, Authentication, and Registration page</a> with a link to the <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/http://hl7.org/fhir/secpriv-module.html">HL7 FHIR Security and Privacy Module</a> (<a href="https://jira.hl7.org/browse/FHIR-31692">FHIR-31692</a>)</li>
    <li>Shortened the titles of Inpatient Institutional, Outpatient Institutional, and Professional and NonClinician EOB <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/artifacts.html#5">Procedure Code and Procedure Code Modifier ValueSets</a> (<a href="https://jira.hl7.org/browse/FHIR-31074">FHIR-31074</a>)</li>
    <li>Fixed errors in examples
        <ul>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ExplanationOfBenefit-InpatientEOBExample1.html">Inpatient</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ExplanationOfBenefit-OutpatientEOBExample1.html">Outpatient</a> Institutional EOB examples, removed top-level adjudication because item level adjudication was present (<a href="https://jira.hl7.org/browse/FHIR-29802">FHIR-29802</a>)</li>
            <li>Fixed incorrect text in <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ExplanationOfBenefit-EOBProfessional1a.html">EOB Professional example</a> (<a href="https://jira.hl7.org/browse/FHIR-30372">FHIR-30372</a>)</li>
        </ul>
    </li>
    <li>Added missing <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/1_Background.html#davinci-carin">Diagram in How DaVinci’s PDex IG and the CARIN IG for Blue Button® work together</a> (<a href="https://jira.hl7.org/browse/FHIR-30083">FHIR-30083</a>)
    </li>
    <li>Added <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/index.html#authors">additional contributors</a> (<a href="https://jira.hl7.org/browse/FHIR-30084">FHIR-30084</a>)</li>
    <li>Transitioned project structure for Sushi 1.0.0+ (For Implementation Guide generation)</li>
    <li>Corrected link to 3M licensing information <a>https://jira.hl7.org/browse/FHIR-31066</a></li>
    <li>Updated the Server CapabilityStatement
	 Persuasive with Mod, Add _id to Coverage Search parameters in CapabilityStatement <a>https://jira.hl7.org/browse/FHIR-30009</a></li>
    <li>Added Tighter guidance requiring WHEN provenance in the EOB profiles<a>https://jira.hl7.org/browse/FHIR-31639</a></li>
    <li>Removed the invariant referring to careTeam role "site" from the IG<a>https://jira.hl7.org/browse/FHIR-31658</a></li>
    <li>Increased binding strength for place of service codes<a>https://jira.hl7.org/browse/FHIR-31502</a></li>
    <li>Added more granular date searching with additional search parameters<a>https://jira.hl7.org/browse/FHIR-33165</a></li>
    <li>Removed Invariant disallowing not-applicable from Outpatient Institutional EoB item.productOrService<a>https://jira.hl7.org/browse/FHIR-32850</a></li>
    <li>Change item.location[x] to only locationCodeableConcept <a>https://jira.hl7.org/browse/FHIR-32067</a></li>
</ul>
<p> </p>
Note: Items marked with an "*" are non-compatible with earlier versions - Existing data may not be valid against the new specification.
<p> </p>


---

// File: input/pagecontent/Common_Payer_Consumer_Data_Set.md

<div>The Common Payer Consumer Data Set (CPCDS) is a logical data set (similar to ONC 2015 Edition Common Clinical Data Set) that meets CMS Blue Button 2.0 API content The CPCDS data elements can be stored and queried as profiled FHIR resources. They define key payer financial health data that <strong>SHALL</strong> be accessible and available to through standards-based APIs. Data <strong>SHALL</strong> conform to specified profiles, vocabulary standards and code sets.
<p>&nbsp;</p>
</div>
<a name="mapping-cpcds-to-fhir"></a>

### Mapping from CPCDS to FHIR Resources

Based on CPCDS, the mappings define the minimum mandatory elements, extensions and terminology requirements that must be present in the FHIR resource. Additional business rules are also specified.
<div>
<table style="border-color: black;" border="2" cellspacing="0" cellpadding="1">
<tbody>
<tr>
<td><strong>Title</strong></td>
<td><strong>Format</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>Profile comparison overview</td>
<td>&nbsp;<a href="CARINforBlueButtonProfileComparisonOverview.pptx">ppt</a></td>
<td>High level profile comparison showing header vs item data elements and value sets requiring licenses.</td>
</tr>
<tr>
<td>Detailed Profile comparison</td>
<td><a  href="CARINforBlueButtonProfileComparison.xlsx">xls</a></td>
<td>A detailed comparison of the profiles defined in this IG with their base resource or profile is shown in the figures on this page.</td>
</tr>
<tr>
<td>CPCDS Data Dictionary</td>
<td><a href="CPCDSDataDictionary.docx">doc</a></td>
<td>Defines key health data that should be accessible and available for exchange.</td>
</tr>
<tr>
<td>CPCDS to FHIR Profiles Mapping</td>
<td><a href="CPCDStoFHIRProfilesMapping.xlsx">xls</a></td>
<td>Mapping Worksheet&nbsp; to aid implementers in understanding the data representation requirements of each EOB Profile and the referenced resources used by these profiles.</td>
</tr>
<tr>
<td>Documentation of CPCDS to FHIR Profiles Mapping</td>
<td><a href="DocumentationOfCPCDSToFHIRProfilesMapping.pptx">ppt</a></td>
<td>Description of the layout of the Mapping Worksheet and how to use it to understand the profiled data mappings to the FHIR resources.</td>
</tr>
</tbody>
</table>
</div>
<p>&nbsp;</p>
<a name="profiles-definition"></a>

### Explanation of Benefits Resource Profiles Definition

<!-- This implementation guide establishes a set of profiles for the  resource and other referenced FHIR resources. As shown here, the data represented in each of the 4 concrete EOB profiles aligns with claim submission standards adopted by the US Department of Health and Human Services for a specific type of benefit. The fifth EOB profile, not shown in this table, is a design artifact that includes data representation constraints common across all types of EOBs, and this profile should not be used for actual data instances.&nbsp; A side by side comparison of the abstract EOB profile, and the four concrete profiles is shown here. -->
Profiles for Explanation of Benefit (EOB) and other reference resources are defined in this IG. Data elements in each of the EOB profiles aligns with US Department of Health and Human Services claims submission standards. An abstract EOB profile is defined, representing constraints found in all the EOB types. Four profiles define the data constraints for the specific claim type (i.e., inpatient institutional, outpatient institutional, professional and non-clinician and pharmacy).  The profiles use many industry standard codes.  The owners of those codes and an indicator for those requiring licenses is provided.  
A side by side comparison of the abstract EOB profile, and the four concrete profiles is shown here.

<br />&nbsp;<img style="width: 100%; height: auto; float: none; align: middle;" src="SidebySideProfiles.png" />

<br />&nbsp;
Detailed comparison of the profiles defined in this IG with their base resource or profile:
<div><img style="width: 100%; height: auto; float: none; align: middle;" src="EOBProfileComparison.png" /></div>
<div>&nbsp;</div>



---

// File: input/pagecontent/Conformance_Requirements.md

<a name="actors"></a>
### Actors

<p>The following actors are part of the CARIN IG for Blue Button®:</p>

<ul>
<li>CARIN IG for Blue Button® Requestor: An application that initiates a data access request to retrieve patient data. This can be thought of as the client in a client-server interaction.</li>
<li>CARIN IG for Blue Button® Responder: A product that responds to the data access request providing patient data. This can be thought of as the server in a client-server interaction.</li>
</ul>
<a name="conformance-verbs"></a>
### Conformance Verbs

<p>The conformance verbs - <strong>SHALL, SHOULD, MAY</strong> - used in this guide are defined in <a style="font-size: 14px;" href="{{site.data.fhir.path}}conformance-rules.html">FHIR Conformance Rules.</a></p>
<a name="must-support"></a>

### Must Support

<p>For profiles defined in other IGs, the meaning of Must Support is established in the defining IG. Note that the Must Support requirements for this IG are modeled after the US Core implementation guide, with the requirements for CARIN Server APIs modeled on those for US Core Responders, and the requirements for CARIN Consumer Apps modeled on those for US Core Requestors.&nbsp; When querying and reading CARIN IG for Blue Button® Profiles, *Must Support* on any profile data element <strong>SHALL</strong> be interpreted as follows:&nbsp;</p>
<ul>
<li>Health Plan API actors <strong>SHALL</strong>&nbsp;be capable of populating all data elements the payer maintains as part of the query results as specified by the CARINBlueButtonHealthPlanAPICapabilityStatement.</li>
<li>Consumer App actors <strong>SHALL</strong> be capable of processing resource instances containing the data elements without generating an error or causing the application to fail.</li>
<li>Consumer App actors <strong>SHALL</strong> be capable of displaying the data elements for human use.</li>
<li>In situations where information on a particular data element is not present and the reason for absence is unknown, Health Plan API actors <strong>SHALL NOT</strong> include the data elements in the resource instance returned as part of the query results.</li>
<li>When querying Health Plan API actors, Consumer App actors <strong>SHALL</strong> interpret missing data elements within resource instances as data not present in the Health Plan API actors system.</li>
<li>In situations where information on a particular data element is missing and the Health Plan API actor knows the precise reason for the absence of data, Health Plan API actors <strong>SHALL</strong> send the reason for the missing information using values (such as nullFlavors) from the value set where they exist or use the dataAbsentReason extension.</li>
<li>Consumer App actors <strong>SHALL</strong> be able to process resource instances containing data elements asserting missing information.</li>
</ul>
<p>NOTE: The above definition of *Must Support* is derived from HL7v2 concept Required but may be empty - RE described in HL7v2 V28_CH02B_Conformance.doc.</p>
<p>NOTE: Readers are advised to understand <a href="{{site.data.fhir.path}}terminologies.html">FHIR Terminology</a> requirements, <a href="{{site.data.fhir.path}}http.html">FHIR RESTful API</a> based on the HTTP protocol, along with <a href="{{site.data.fhir.path}}datatypes.html">FHIR Data Types</a>, <a href="{{site.data.fhir.path}}search.html">FHIR Search</a> and <a href="{{site.data.fhir.path}}resource.html">FHIR Resource</a> formats before implementing CARIN IG for Blue Button® requirements.</p>
<a name="missing-data"></a>

### Missing Data

<p>If the source system does not have data for a *Must Support* data element with minimum cardinality = 0, the data element is omitted from the resource. If the source system does not have data for a required data element (in other words, where the minimum cardinality is &gt; 0), follow guidance defined in the core FHIR specification and summarized in the&nbsp;<a href="{{site.data.fhir.ver.uscore6}}/general-requirements.html#missing-data">US Core.</a></p>
### Conformance to US Core Profiles
<p>Any actor acting as a Health Plan API actor in this IG <strong>SHALL</strong>:</p>
<ul>
<li>Be able to populate all profile data elements that have a minimum cardinality &gt;= 1 and/or flagged as *Must Support* as defined by that profiles StructureDefinition.</li>
<li>Conform to the US Core Server Capability Statement expectations for that profile's type.</li>
</ul>
<p>Any actor acting a FHIR Client in this IG <strong>SHALL</strong>:</p>
<ul>
<li>Be able to process and retain all profile data elements that have a minimum cardinality &gt;= 1 and/or flagged as Must Support as defined by that profiles StructureDefinition.</li>
<li>Conform to the US Core Client Capability Statement expectations for that profiles type.</li>
</ul>
<a name="common-clinical-data-set"></a>

### Profiling Constraints
The constraints in this guide's profiles have been applied to only address the scope defined in the guide. Data element that are not part of this scope have not been constrained out, and as such, may be included by the Health Plan API. If a Health Plan API includes additional information, there **SHALL** be no expectation that client applications support the data in any way in order to be conformant with this specification.

### CapabilityStatement Server Requirement
Servers claiming conformance to this guide **SHALL** include a CapabilityStatement that has a CapabilityStatement.instantiates with a URL of http://hl7.org/fhir/us/carin-bb/CapabilityStatement/c4bb or a URL to the appropriate version of the CapabilityStatement.



---

// File: input/pagecontent/Coverage-Coverage1-notes.md

```
Instance: Coverage1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage|2.1.0
Title: "Coverage Example 1"
Description: "Coverage Example1"
Usage: #example
* meta.lastUpdated = "2020-10-30T09:48:01.8462752-04:00"
* language = #en-US
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#MB "Member Number"
    * text = "An identifier for the insured of an insurance policy (this insured always has a subscriber), usually assigned by the insurance carrier."
  * system = "https://www.upmchealthplan.com/fhir/memberidentifier"
  * value = "88800933501"
  * assigner = Reference(Payer2) "UPMC Health Plan"
* status = #active
* policyHolder = Reference(Patient1)
* subscriber = Reference(Patient1)
* subscriberId = "888009335"
* beneficiary = Reference(Patient1)
* dependent = "01"
* relationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship#self
  * text = "Self"
* period.start = "2020-01-01"
* payor = Reference(Payer2) "UPMC Health Plan"
* class[0]
  * type = http://terminology.hl7.org/CodeSystem/coverage-class#group "Group"
    * text = "An employee group"
  * value = "MCHMO1"
  * name = "MEDICARE HMO PLAN"
* class[+]
  * type = http://terminology.hl7.org/CodeSystem/coverage-class#plan "Plan"
    * text = "A specific suite of benefits."
  * value = "GR5"
  * name = "GR5-HMO DEDUCTIBLE"
* network = "GR5-HMO DEDUCTIBLE"
```

---

// File: input/pagecontent/Coverage-Coverage2-notes.md

```
Instance: Coverage2
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage|2.1.0
Title: "Coverage Example 2"
Description: "Coverage Example 2"
Usage: #example
* meta.lastUpdated = "2020-10-30T09:48:01.8462752-04:00"
* language = #en-US
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#MB "Member Number"
    * text = "An identifier for the insured of an insurance policy (this insured always has a subscriber), usually assigned by the insurance carrier."
  * system = "https://www.upmchealthplan.com/fhir/memberidentifier"
  * value = "88800933501"
  * assigner = Reference(Payer2) "UPMC Health Plan"
* status = #active
* policyHolder = Reference(Patient1)
* subscriber = Reference(Patient1)
* subscriberId = "888009335"
* beneficiary = Reference(Patient1)
* dependent = "01"
* relationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship#self
  * text = "Self"
* period
  * start = "2017-01-01"
  * end = "2017-06-30"
* payor = Reference(Payer2) "UPMC Health Plan"
* class[0]
  * type = http://terminology.hl7.org/CodeSystem/coverage-class#group "Group"
    * text = "An employee group"
  * value = "MCHMO1"
  * name = "MEDICARE HMO PLAN"
* class[+]
  * type = http://terminology.hl7.org/CodeSystem/coverage-class#plan "Plan"
    * text = "A specific suite of benefits."
  * value = "GI8"
  * name = "GI8-HMO DEDUCTIBLE"
* network = "GI8-HMO DEDUCTIBLE"
```

---

// File: input/pagecontent/Coverage-Coverage3-notes.md

```
Instance: Coverage3
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage|2.1.0
Title: "Coverage Example 3"
Description: "Coverage Example 3"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#MB
  * system = "https://www.xxxhealthplan.com/fhir/memberidentifier"
  * value = "1234-234-1243-12345678901"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/v3-ActCode#HIP
  * text = "health insurance plan policy"
* policyHolder = Reference(Patient2)
* subscriber = Reference(Patient2)
* subscriberId = "12345678901"
* beneficiary = Reference(Patient2)
* dependent = "01"
* relationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship#self
* period
  * start = "2019-01-01"
  * end = "2019-10-31"
* payor = Reference(Payer1)
* class[0]
  * type = http://terminology.hl7.org/CodeSystem/coverage-class#group
    * text = "An employee group"
  * value = "021890"
  * name = "Acme Corporation"
* class[+]
  * type = http://terminology.hl7.org/CodeSystem/coverage-class#plan
    * text = "Plan"
  * value = "XYZ123"
  * name = "XYZ123-UPMC CONSUMER ADVA"
* network = "XYZ123-UPMC CONSUMER ADVA"
```

---

// File: input/pagecontent/Coverage-CoverageDental1-notes.md

```
Instance: CoverageDental1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage|2.1.0
Title: "Dental Coverage Example1"
Description: "Dental Coverage Example1"
Usage: #example
* meta.lastUpdated = "2021-01-01T14:22:01.0314215+00:00"
* language = #en-US
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#MB
  * system = "https://www.xxxhealthplan.com/fhir/memberidentifier"
  * value = "210300002"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/v3-ActCode#DENTAL
  * text = "dental care policy"
* policyHolder = Reference(Patient2)
* subscriber = Reference(Patient2)
* subscriberId = "10300007"
* beneficiary = Reference(Patient2)
* dependent = "01"
* relationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship#self
* period
  * start = "2021-01-01"
  * end = "2021-12-31"
* payor = Reference(DentalPayer1)
* class[0]
  * type = http://terminology.hl7.org/CodeSystem/coverage-class#group
    * text = "An employee group"
  * value = "10300007"
  * name = "Transcorp - dental"
* class[+]
  * type = http://terminology.hl7.org/CodeSystem/coverage-class#plan
    * text = "Plan"
  * value = "66783JJT"
  * name = "INSURANCE COMPANY XYZ - PRIME"
* network = "INSURANCE COMPANY XYZ - PRIME"
```

---

// File: input/pagecontent/downloads.md

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://hl7.org/fhir ../../input-cache/schemas-r5/fhir-single.xsd">

<ul>
<li><a href="full-ig.zip">Full Specification (zip)</a></li>
<li><a href="definitions.json.zip">JSON Definitions (zip)</a></li>
<li><a href="examples.json.zip">JSON Examples (zip)</a></li>
<li><a href="definitions.xml.zip">XML Definitions (zip)</a></li>
<li><a href="definitions.ttl.zip">Turtle Definitions</a></li>
</ul>

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

</div>

---

// File: input/pagecontent/ExplanationOfBenefit-EOBInpatient1-notes.md

```
Instance: EOBInpatient1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional|2.1.0
Title: "EOB Inpatient Example1"
Description: "EOB Inpatient Example 1"
Usage: #example
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* identifier
  * type = C4BBIdentifierType#uc
  * system = "https://www.xxxplan.com/fhir/EOBIdentifier"
  * value = "AW123412341234123412341234123412"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#institutional
  * text = "Institutional"
* subType = C4BBInstitutionalClaimSubType#inpatient
  * text = "Inpatient"
* use = #claim
* patient = Reference(Patient2)
* billablePeriod
  * start = "2019-01-01"
  * end = "2019-10-31"
* created = "2019-11-02T00:00:00+00:00"
* insurer = Reference(Payer1) "XXX Health Plan"
* provider = Reference(ProviderOrganization1) "XXX Health Plan"
* outcome = #partial
* supportingInfo[0]
  * sequence = 2
  * category = C4BBSupportingInfoType#admissionperiod
  * timingPeriod
    * start = "2011-05-23"
    * end = "2011-05-25"
* supportingInfo[+]
  * sequence = 3
  * category = C4BBSupportingInfoType#clmrecvddate
  * timingDate = "2011-05-30"
* supportingInfo[+]
  * sequence = 4
  * category = C4BBSupportingInfoType#typeofbill
  * code = https://www.nubc.org/CodeSystem/TypeOfBill#Dummy
* supportingInfo[+]
  * sequence = 5
  * category = C4BBSupportingInfoType#pointoforigin
  * code = https://www.nubc.org/CodeSystem/PointOfOrigin#Dummy
* supportingInfo[+]
  * sequence = 6
  * category = C4BBSupportingInfoType#admtype
  * code = https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit#Dummy
* supportingInfo[+]
  * sequence = 7
  * category = C4BBSupportingInfoType#discharge-status
  * code = https://www.nubc.org/CodeSystem/PatDischargeStatus#11
* supportingInfo[+]
  * sequence = 8
  * category = C4BBSupportingInfoType#medicalrecordnumber
  * valueString = "1234-234-1243-12345678901m"
* supportingInfo[+]
  * sequence = 9
  * category = C4BBSupportingInfoType#patientaccountnumber
  * valueString = "1234-234-1243-12345678901a"
* diagnosis
  * sequence = 1
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#S06.0X1A
  * type = http://terminology.hl7.org/CodeSystem/ex-diagnosistype#principal
* insurance
  * focal = true
  * coverage = Reference(Coverage3)
* item
  * sequence = 1
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#Dummy
  * productOrService = http://terminology.hl7.org/CodeSystem/data-absent-reason#not-applicable "Not Applicable"
  * servicedDate = "2019-11-02"
* adjudication[0]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudicationDiscriminator#billingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudication#paidtoprovider
    * text = "Payment Amount"
  * amount
    * value = 620
    * currency = #USD
* adjudication[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * text = "Submitted Amount"
  * amount
    * value = 2650
    * currency = #USD
* adjudication[+]
  * category = C4BBAdjudication#paidbypatient
    * text = "Patient Pay Amount"
  * amount
    * value = 0
    * currency = #USD
* total[0]
  * category = C4BBAdjudication#paidtoprovider
    * text = "Payment Amount"
  * amount
    * value = 620
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * text = "Submitted Amount"
  * amount
    * value = 2650
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#paidbypatient
    * text = "Patient Pay Amount"
  * amount
    * value = 0
    * currency = #USD
```

---

// File: input/pagecontent/ExplanationOfBenefit-EOBInpatient2-notes.md

```
Instance: EOBInpatient2
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional|2.1.0
Title: "EOB Inpatient Example 2"
Description: "EOB Inpatient Example 2"
Usage: #example
* meta.lastUpdated = "2020-04-28T15:39:36-04:00"
* identifier
  * type = C4BBIdentifierType#uc "Unique Claim ID"
    * text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
  * system = "https://www.upmchealthplan.com/fhir/EOBIdentifier"
  * value = "InpatientEOBExample1"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#institutional
  * text = "Institutional"
* subType = C4BBInstitutionalClaimSubType#inpatient
  * text = "Inpatient"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod
  * start = "2017-05-23"
  * end = "2017-05-23"
* created = "2017-06-01T00:00:00-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderOrganization3)
* payee
  * type = http://terminology.hl7.org/CodeSystem/payeetype#provider "Provider"
    * text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
  * party = Reference(ProviderOrganization4)
* outcome = #complete
* careTeam[0]
  * sequence = 1
  * provider = Reference(Practitioner2)
  * role = C4BBClaimCareTeamRole#attending "Attending"
    * text = "The attending physician"
* careTeam[+]
  * sequence = 2
  * provider = Reference(Practitioner2)
  * role = C4BBClaimCareTeamRole#referring "Referring"
    * text = "The referring physician"
* supportingInfo[0]
  * sequence = 2
  * category = C4BBSupportingInfoType#admissionperiod
  * timingPeriod.start = "2017-05-23"
* supportingInfo[+]
  * sequence = 1
  * category = C4BBSupportingInfoType#clmrecvddate
  * timingDate = "2017-06-01"
* diagnosis[0]
  * sequence = 1
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#I21.4
  * type = http://terminology.hl7.org/CodeSystem/ex-diagnosistype#principal "Principal Diagnosis"
    * text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* diagnosis[+]
  * sequence = 2
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#I25.118
  * type = C4BBClaimDiagnosisType#other "Other"
    * text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+]
  * sequence = 3
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#E78.5
  * type = C4BBClaimDiagnosisType#other "Other"
    * text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+]
  * sequence = 4
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#M19.90
  * type = C4BBClaimDiagnosisType#other "Other"
    * text = "Required when other conditions coexist or develop subsequently during the treatment"
* procedure[0]
  * sequence = 1
  * type = C4BBClaimProcedureType#principal "Principal"
    * text = "The Principal Procedure is based on the relation of the procedure to the Principal Diagnosis"
  * date = "2017-05-23"
  * procedureCodeableConcept = http://www.cms.gov/Medicare/Coding/ICD10#4A023N7
* procedure[+]
  * sequence = 2
  * type = C4BBClaimProcedureType#other "Other"
    * text = "Other procedures performed during the inpatient institutional admission"
  * date = "2017-05-23"
  * procedureCodeableConcept = http://www.cms.gov/Medicare/Coding/ICD10#B211YZZ
* procedure[+]
  * sequence = 3
  * type = C4BBClaimProcedureType#other "Other"
    * text = "Other procedures performed during the inpatient institutional admission"
  * date = "2017-05-23"
  * procedureCodeableConcept = http://www.cms.gov/Medicare/Coding/ICD10#B215YZZ
* insurance
  * focal = true
  * coverage = Reference(Coverage2)
* item[0]
  * sequence = 1
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0301
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 2
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0260
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 3
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0305
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 4
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0324
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 5
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0259
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 6
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0250
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 7
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0710
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 8
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0210
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 9
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0272
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 10
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0370
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 11
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0730
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 12
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0450
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+]
  * sequence = 13
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0481
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedPeriod.start = "2017-05-23"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
* adjudication[0]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#outofnetwork
* adjudication[+]
  * category = C4BBAdjudicationDiscriminator#billingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork "In Network"
    * text = "Indicates the provider was in network for the service"
* adjudication[+]
  * category = C4BBAdjudication#noncovered "Noncovered"
    * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
  * amount
    * value = 0
    * currency = #USD
* total[0]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
    * text = "The total submitted amount for the claim or group or line item."
  * amount
    * value = 7147.2
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
    * text = "Amount of the change which is considered for adjudication."
  * amount
    * value = 1542.01
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
    * text = "Amount deducted from the eligible amount prior to adjudication."
  * amount
    * value = 0
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
    * text = "Patient Co-Payment"
  * amount
    * value = 120
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#noncovered "Noncovered"
    * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
  * amount
    * value = 0
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
    * text = "Amount payable under the coverage"
  * amount
    * value = 1393.57
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#memberliability "Member liability"
    * text = "The amount of the member's liability."
  * amount
    * value = 0
    * currency = #USD
```

---

// File: input/pagecontent/ExplanationOfBenefit-EOBOral1-notes.md

```
Instance: EOBOral1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Oral|2.1.0
Title: "EOB Oral Example 1"
Description: "EOB Oral Example 1"
Usage: #example
* meta.lastUpdated = "2021-03-18T10:23:00-05:00"
* language = #en-US
* identifier
  * type = C4BBIdentifierType#uc
  * system = "https://www.xxxplan.com/fhir/EOBIdentifier"
  * value = "210300002"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#oral
  * text = "Oral"
* use = #claim
* patient = Reference(Patient2)
* billablePeriod
  * start = "2021-03-01"
  * end = "2021-03-31"
* created = "2021-03-18T10:23:00-05:00"
* insurer = Reference(DentalPayer1) "XXX Health Plan"
* provider = Reference(PractitionerDentalProvider1) "XXX Dental Plan"
* outcome = #complete
* supportingInfo[0]
  * sequence = 3
  * category = C4BBSupportingInfoType#clmrecvddate
  * timingDate = "2021-03-18"
* supportingInfo[+]
  * sequence = 4
  * category = C4BBSupportingInfoType#servicefacility
  * valueReference = Reference(ProviderOrganization1)
* supportingInfo[+]
  * sequence = 5
  * category = C4BBSupportingInfoType#patientaccountnumber
  * valueString = "PATIENTACCTNO3"
* diagnosis
  * sequence = 1
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#Z01.21 "Encounter for dental examination and cleaning with abnormal findings"
  * type = http://terminology.hl7.org/CodeSystem/ex-diagnosistype#principal
* insurance
  * focal = true
  * coverage = Reference(CoverageDental1)
* item[0]
  * sequence = 1
  * productOrService = http://www.ada.org/cdt#D1110 "Prophylaxis - Adult"
  * servicedDate = "2021-03-18"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11 "Office"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * amount
      * value = 190
      * currency = #USD
* item[+]
  * sequence = 2
  * productOrService = http://www.ada.org/cdt#D0120 "Periodic oral evaluation"
  * servicedDate = "2021-03-18"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11 "Office"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * amount
      * value = 220
      * currency = #USD
* adjudication[0]
  * category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudicationDiscriminator#billingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* total[0]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * text = "Submitted Amount"
  * amount
    * value = 410
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit
    * text = "Benefit Amount"
  * amount
    * value = 350
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#discount
    * text = "Discount Amount"
  * amount
    * value = 60
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#paidtoprovider
    * text = "Amount Paid to Provider"
  * amount
    * value = 350
    * currency = #USD
```

---

// File: input/pagecontent/ExplanationOfBenefit-EOBOral2-notes.md

```
Instance: EOBOral2
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Oral|2.1.0
Title: "EOB Oral Example 2"
Description: "EOB Oral Example 2"
Usage: #example
* meta.lastUpdated = "2021-10-28T10:23:00-05:00"
* language = #en-US
* identifier
  * type = C4BBIdentifierType#uc
  * system = "https://www.xxxplan.com/fhir/EOBIdentifier"
  * value = "210300012"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#oral
  * text = "Oral"
* use = #claim
* patient = Reference(Patient2)
* billablePeriod
  * start = "2021-10-01"
  * end = "2021-10-31"
* created = "2021-10-28T10:23:00-05:00"
* insurer = Reference(DentalPayer1) "XXX Health Plan"
* provider = Reference(PractitionerDentalProvider1) "XXX Dental Plan"
* outcome = #complete
* supportingInfo[0]
  * sequence = 3
  * category = C4BBSupportingInfoType#clmrecvddate
  * timingDate = "2021-03-18"
* supportingInfo[+]
  * sequence = 4
  * category = C4BBSupportingInfoType#servicefacility
  * valueReference = Reference(ProviderOrganization1)
* supportingInfo[+]
  * sequence = 8
  * category = C4BBSupportingInfoType#patientaccountnumber
  * valueString = "PATIENTACCTNO3"
* supportingInfo[+]
  * sequence = 9
  * category = C4BBSupportingInfoType#additionalbodysite
  * code = http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem#1
* supportingInfo[+]
  * sequence = 10
  * category = C4BBSupportingInfoType#additionalbodysite
  * code = http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem#2
* insurance
  * focal = true
  * coverage = Reference(CoverageDental1)
* item
  * sequence = 1
  * informationSequence[0] = 6
  * informationSequence[+] = 7
  * informationSequence[+] = 9
  * informationSequence[+] = 10
  * informationSequence[+] = 11
  * productOrService = http://www.ada.org/cdt#D0220 "Intraoral - periapical first radiographic image"
  * servicedDate = "2021-10-28"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11 "Office"
  * bodySite = http://terminology.hl7.org/CodeSystem/ADAAreaOralCavitySystem#10 "Upper right quadrant"
  * subSite[0] = C4BBSurfaceCodes#O
  * subSite[+] = C4BBSurfaceCodes#I
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * amount
      * value = 150
      * currency = #USD
* adjudication[0]
  * category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudicationDiscriminator#billingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* total[0]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * text = "Submitted Amount"
  * amount
    * value = 150
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit
    * text = "Benefit Amount"
  * amount
    * value = 110
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#discount
    * text = "Discount Amount"
  * amount
    * value = 40
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#paidtoprovider
    * text = "Amount Paid to Provider"
  * amount
    * value = 100
    * currency = #USD
```

---

// File: input/pagecontent/ExplanationOfBenefit-EOBOutpatient1-notes.md

```
Instance: EOBOutpatient1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional|2.1.0
Title: "EOB Outpatient Institutional - Example 1"
Description: "EOB Outpatient Institutional - Example 1"
Usage: #example
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* identifier
  * type = C4BBIdentifierType#uc
  * system = "https://www.xxxplan.com/fhir/EOBIdentifier"
  * value = "AW123412341234123412341234123412"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#institutional
  * text = "Institutional"
* subType = C4BBInstitutionalClaimSubType#outpatient
  * text = "Outpatient"
* use = #claim
* patient = Reference(Patient2)
* billablePeriod
  * start = "2019-01-01"
  * end = "2019-10-31"
* created = "2019-11-02T00:00:00+00:00"
* insurer = Reference(Payer1) "Organization Payer 1"
* provider = Reference(ProviderOrganization1) "Orange Medical Group"
* outcome = #partial
* careTeam
  * sequence = 1
  * provider = Reference(ProviderOrganization1)
  * role = C4BBClaimCareTeamRole#rendering "Rendering provider"
  * qualification = http://nucc.org/provider-taxonomy#364SX0200X "Oncology Clinical Nurse Specialist"
* supportingInfo[0]
  * sequence = 2
  * category = C4BBSupportingInfoType#clmrecvddate
  * timingDate = "2019-11-30"
* supportingInfo[+]
  * sequence = 3
  * category = C4BBSupportingInfoType#typeofbill
  * code = https://www.nubc.org/CodeSystem/TypeOfBill#Dummy
* supportingInfo[+]
  * sequence = 4
  * category = C4BBSupportingInfoType#pointoforigin
  * code = https://www.nubc.org/CodeSystem/PointOfOrigin#Dummy
* supportingInfo[+]
  * sequence = 5
  * category = C4BBSupportingInfoType#admtype
  * code = https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit#Dummy
* supportingInfo[+]
  * sequence = 6
  * category = C4BBSupportingInfoType#discharge-status
  * code = https://www.nubc.org/CodeSystem/PatDischargeStatus#Dummy
* supportingInfo[+]
  * sequence = 7
  * category = C4BBSupportingInfoType#medicalrecordnumber
  * valueString = "1234-234-1243-12345678901m"
* supportingInfo[+]
  * sequence = 8
  * category = C4BBSupportingInfoType#patientaccountnumber
  * valueString = "1234-234-1243-12345678901a"
* diagnosis
  * sequence = 1
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#S06.0X1A
  * type = C4BBClaimDiagnosisType#patientreasonforvisit
* insurance
  * focal = true
  * coverage = Reference(Coverage3)
* item
  * sequence = 1
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#Dummy
  * productOrService = http://terminology.hl7.org/CodeSystem/data-absent-reason#not-applicable "Not Applicable"
  * servicedDate = "2019-11-02"
* adjudication[0]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudicationDiscriminator#billingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudication#paidtoprovider
    * text = "Payment Amount"
  * amount
    * value = 620
    * currency = #USD
* adjudication[+]
  * category = C4BBAdjudication#paidbypatient
    * text = "Patient Pay Amount"
  * amount.value = 0
* total[0]
  * category = C4BBAdjudication#paidtoprovider
    * text = "Payment Amount"
  * amount
    * value = 620
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * text = "Submitted Amount"
  * amount
    * value = 2650
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#paidbypatient
    * text = "Patient Pay Amount"
  * amount
    * value = 0
    * currency = #USD
```

---

// File: input/pagecontent/ExplanationOfBenefit-EOBOutpatient2-notes.md

```
Instance: EOBOutpatient2
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional|2.1.0
Title: "EOB Outpatient Institutional - Example 2"
Description: "EOB Outpatient Institutional - Example 2"
Usage: #example
* meta
  * lastUpdated = "2020-10-13T11:10:24-04:00"
  * source = "Organization/PayerOrganizationExample1"
* identifier
  * type = C4BBIdentifierType#uc "Unique Claim ID"
    * text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
  * system = "https://www.upmchealthplan.com/fhir/EOBIdentifier"
  * value = "OutpatientEOBExample1"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#institutional
  * text = "Institutional"
* subType = C4BBInstitutionalClaimSubType#outpatient
  * text = "Outpatient"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod
  * start = "2020-09-29"
  * end = "2020-09-29"
* created = "2020-10-10T00:00:00-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderOrganization5)
* payee
  * type = http://terminology.hl7.org/CodeSystem/payeetype#provider "Provider"
    * text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
  * party = Reference(ProviderOrganization6)
* outcome = #complete
* careTeam[0]
  * sequence = 1
  * provider = Reference(Practitioner1)
  * role = C4BBClaimCareTeamRole#attending "Attending"
    * text = "The attending physician"
* careTeam[+]
  * sequence = 2
  * provider = Reference(Practitioner3)
  * role = C4BBClaimCareTeamRole#referring "Referring"
    * text = "The referring physician"
* supportingInfo
  * sequence = 1
  * category = C4BBSupportingInfoType#clmrecvddate
  * timingDate = "2020-10-10"
* diagnosis[0]
  * sequence = 1
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#I95.1
  * type = http://terminology.hl7.org/CodeSystem/ex-diagnosistype#principal "Principal Diagnosis"
    * text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* diagnosis[+]
  * sequence = 2
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#I95.1
  * type = C4BBClaimDiagnosisType#other "Other"
    * text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+]
  * sequence = 3
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#L97.529
  * type = C4BBClaimDiagnosisType#other "Other"
    * text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+]
  * sequence = 4
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#I73.9
  * type = C4BBClaimDiagnosisType#other "Other"
    * text = "Required when other conditions coexist or develop subsequently during the treatment"
* insurance
  * focal = true
  * coverage = Reference(Coverage1)
* item[0]
  * sequence = 1
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0551
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedDate = "2020-09-29"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#12
    * text = "HOME"
  * adjudication[0]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = 84.4
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
      * text = "Patient Co-Payment"
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
      * text = "Amount of the change which is considered for adjudication."
    * amount
      * value = 56.52
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
      * text = "Amount deducted from the eligible amount prior to adjudication."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
      * text = "Amount payable under the coverage"
    * amount
      * value = 56.52
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#noncovered "Noncovered"
      * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount
      * value = 0
      * currency = #USD
* item[+]
  * sequence = 2
  * revenue = https://www.nubc.org/CodeSystem/RevenueCodes#0023
  * productOrService = http://www.ama-assn.org/go/cpt#99231
  * servicedDate = "2020-09-29"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#12
    * text = "HOME"
  * adjudication[0]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#noncovered "Noncovered"
      * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount
      * value = 0
      * currency = #USD
* adjudication
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* total[0]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
    * text = "Amount of the change which is considered for adjudication."
  * amount
    * value = 56.52
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
    * text = "Amount deducted from the eligible amount prior to adjudication."
  * amount
    * value = 0
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
    * text = "Patient Co-Payment"
  * amount
    * value = 0
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#noncovered "Noncovered"
    * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
  * amount
    * value = 0
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
    * text = "Amount payable under the coverage"
  * amount
    * value = 56.52
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#memberliability "Member liability"
    * text = "The amount of the member's liability."
  * amount
    * value = 0
    * currency = #USD
```

---

// File: input/pagecontent/ExplanationOfBenefit-EOBPharmacy1-notes.md

```
Instance: EOBPharmacy1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Pharmacy|2.1.0
Title: "EOB Pharmacy Example1"
Description: "EOB Pharmacy Example1"
Usage: #example
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* identifier
  * type = C4BBIdentifierType#uc
  * system = "https://www.xxxplan.com/fhir/EOBIdentifier"
  * value = "AW123412341234123412341234123412"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#pharmacy
  * text = "Pharmacy"
* use = #claim
* patient = Reference(Patient2)
* billablePeriod
  * start = "2019-10-30"
  * end = "2019-10-31"
* created = "2019-07-02T00:00:00+00:00"
* insurer = Reference(Payer1) "XXX Health Plan"
* provider = Reference(ProviderOrganization1) "XXX Health Plan"
* outcome = #partial
* supportingInfo[0]
  * sequence = 8
  * category = C4BBSupportingInfoType#dayssupply
  * valueQuantity.value = 30
* supportingInfo[+]
  * sequence = 6
  * category = C4BBSupportingInfoType#dawcode
  * code = http://terminology.hl7.org/CodeSystem/NCPDPDispensedAsWrittenOrProductSelectionCode#7
* supportingInfo[+]
  * sequence = 4
  * category = C4BBSupportingInfoType#refillnum
  * valueQuantity.value = 0
* supportingInfo[+]
  * sequence = 5
  * category = C4BBSupportingInfoType#refillsauthorized
  * valueQuantity.value = 0
* supportingInfo[+]
  * sequence = 2
  * category = C4BBSupportingInfoType#brandgenericindicator
  * code = http://terminology.hl7.org/CodeSystem/NCPDPBrandGenericIndicator#2
* supportingInfo[+]
  * sequence = 3
  * category = C4BBSupportingInfoType#rxorigincode
  * code = http://terminology.hl7.org/CodeSystem/NCPDPPrescriptionOriginCode#1
* supportingInfo[+]
  * sequence = 7
  * category = C4BBSupportingInfoType#clmrecvddate
  * timingDate = "2019-10-31"
* supportingInfo[+]
  * sequence = 9
  * category = C4BBSupportingInfoType#compoundcode
  * code = http://terminology.hl7.org/CodeSystem/NCPDPCompoundCode#Dummy
* insurance
  * focal = true
  * coverage = Reference(Coverage3)
* item
  * sequence = 1
  * productOrService = http://hl7.org/fhir/sid/ndc#0777-3105-02 "Prozac, 100 CAPSULE in 1 BOTTLE (0777-3105-02) (package)"
  * servicedDate = "2019-07-02"
  * adjudication[0]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * amount
      * value = 1000
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit
    * amount
      * value = 20
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#discount
    * amount
      * value = 900
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#memberliability
    * amount
      * value = 80
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#paidtoprovider
    * amount
      * value = 20
      * currency = #USD
* adjudication[0]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudicationDiscriminator#billingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* total[0]
  * category = C4BBAdjudication#paidtoprovider
    * text = "Payment Amount"
  * amount
    * value = 620
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * text = "Submitted Amount"
  * amount
    * value = 2650
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#paidbypatient
    * text = "Patient Pay Amount"
  * amount
    * value = 0
    * currency = #USD
```

---

// File: input/pagecontent/ExplanationOfBenefit-EOBProfessional1-notes.md

```
Instance: EOBProfessional1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician|2.1.0
Title: "EOB Professional - Example 1"
Description: "EOB Professional - Example 1"
Usage: #example
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* identifier
  * type = C4BBIdentifierType#uc
  * system = "https://www.xxxplan.com/fhir/EOBIdentifier"
  * value = "AW123412341234123412341234123413"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
  * text = "Professional"
* use = #claim
* patient = Reference(Patient2)
* billablePeriod
  * start = "2019-01-01"
  * end = "2019-10-31"
* created = "2019-07-02T00:00:00+00:00"
* insurer = Reference(Payer1) "XXX Health Plan"
* provider = Reference(ProviderOrganization1) "XXX Health Plan"
* payee
  * type = http://terminology.hl7.org/CodeSystem/payeetype#provider "Provider"
  * party = Reference(ProviderOrganization1)
* outcome = #partial
* supportingInfo[0]
  * sequence = 3
  * category = C4BBSupportingInfoType#clmrecvddate
  * timingDate = "2011-05-30"
* supportingInfo[+]
  * sequence = 4
  * category = C4BBSupportingInfoType#servicefacility
  * valueReference = Reference(ProviderOrganization1)
* supportingInfo[+]
  * sequence = 5
  * category = C4BBSupportingInfoType#medicalrecordnumber
  * valueString = "1234-234-1243-12345678901m"
* supportingInfo[+]
  * sequence = 6
  * category = C4BBSupportingInfoType#patientaccountnumber
  * valueString = "1234-234-1243-12345678901a"
* diagnosis
  * sequence = 1
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#S06.0X1A
  * type = http://terminology.hl7.org/CodeSystem/ex-diagnosistype#principal
* insurance
  * focal = true
  * coverage = Reference(Coverage3)
* item
  * sequence = 1
  * productOrService = http://www.ama-assn.org/go/cpt#97110 "Therapeutic procedure, 1 or more areas, each 15 minutes; therapeutic exercises to develop strength and endurance, range of motion and flexibility"
  * servicedDate = "2019-07-02"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#11 "Office"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#other
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * amount
      * value = 250
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit
    * amount
      * value = 200
      * currency = #USD
* adjudication[0]
  * category = C4BBAdjudicationDiscriminator#billingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[+]
  * category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* total[0]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
    * text = "Submitted Amount"
  * amount
    * value = 250
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit
    * text = "Benefit Amount"
  * amount
    * value = 200
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#paidtoprovider
    * text = "Payment Amount"
  * amount
    * value = 200
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#paidbypatient
    * text = "Patient Pay Amount"
  * amount
    * value = 0
    * currency = #USD
* payment
  * type = C4BBPayerAdjudicationStatus#paid "Paid"
  * adjustment
    * value = -50
    * currency = #USD
  * amount
    * value = 200
    * currency = #USD
```

---

// File: input/pagecontent/ExplanationOfBenefit-EOBProfessional2-notes.md

```
Instance: EOBProfessional2
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician|2.1.0
Title: "EOB Professional - Example 2"
Description: "EOB Professional - Example 2"
Usage: #example
* meta
  * lastUpdated = "2020-10-20T14:46:05-04:00"
  * source = "Organization/PayerOrganizationExample1"
* identifier
  * type = C4BBIdentifierType#uc "Unique Claim ID"
    * text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
  * system = "https://www.upmchealthplan.com/fhir/EOBIdentifier"
  * value = "ProfessionalEOBExample1"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
  * text = "Professional"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod
  * start = "2020-08-04"
  * end = "2020-08-04"
* created = "2020-08-24T00:00:00-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderOrganization1)
* payee
  * type = http://terminology.hl7.org/CodeSystem/payeetype#provider "Provider"
    * text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
  * party = Reference(ProviderOrganization1)
* outcome = #complete
* careTeam[0]
  * sequence = 1
  * provider = Reference(Practitioner1)
  * role
    * coding = http://terminology.hl7.org/CodeSystem/claimcareteamrole#primary "Primary provider"
      * version = "1.0.0"
    * text = "The primary care provider."
* careTeam[+]
  * sequence = 2
  * provider = Reference(Practitioner2)
  * role = C4BBClaimCareTeamRole#referring "Referring"
    * text = "The referring physician"
* supportingInfo
  * sequence = 1
  * category = C4BBSupportingInfoType#clmrecvddate "Claim Received Date"
    * text = "Date the claim was received by the payer."
  * timingDate = "2020-08-24"
* diagnosis[0]
  * sequence = 1
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#I70.249
  * type = http://terminology.hl7.org/CodeSystem/ex-diagnosistype#principal "Principal Diagnosis"
    * text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* diagnosis[+]
  * sequence = 2
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#L97.929
  * type = C4BBClaimDiagnosisType#secondary "secondary"
    * text = "Required when necessary to report additional diagnoses on professional and non-clinician claims"
* insurance
  * focal = true
  * coverage = Reference(Coverage1)
* item[0]
  * sequence = 1
  * productOrService = http://www.ama-assn.org/go/cpt#75710
  * servicedDate = "2020-08-04"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = 68.8
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
      * text = "Patient Co-Payment"
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
      * text = "Amount of the change which is considered for adjudication."
    * amount
      * value = 34.8
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
      * text = "Amount deducted from the eligible amount prior to adjudication."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
      * text = "Amount payable under the coverage"
    * amount
      * value = 34.8
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#noncovered "Noncovered"
      * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount
      * value = 0
      * currency = #USD
* item[+]
  * sequence = 2
  * productOrService = http://www.ama-assn.org/go/cpt#75710
  * servicedDate = "2020-08-04"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = -68.8
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
      * text = "Patient Co-Payment"
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
      * text = "Amount of the change which is considered for adjudication."
    * amount
      * value = -34.8
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
      * text = "Amount deducted from the eligible amount prior to adjudication."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
      * text = "Amount payable under the coverage"
    * amount
      * value = -34.8
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#noncovered "Noncovered"
      * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount
      * value = 0
      * currency = #USD
* item[+]
  * sequence = 3
  * productOrService = http://www.ama-assn.org/go/cpt#75710
  * servicedDate = "2020-08-04"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = 68.8
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
      * text = "Patient Co-Payment"
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
      * text = "Amount of the change which is considered for adjudication."
    * amount
      * value = 34.8
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
      * text = "Amount deducted from the eligible amount prior to adjudication."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
      * text = "Amount payable under the coverage"
    * amount
      * value = 34.8
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#noncovered "Noncovered"
      * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount
      * value = 0
      * currency = #USD
* item[+]
  * sequence = 4
  * productOrService = http://www.ama-assn.org/go/cpt#37228
  * servicedDate = "2020-08-04"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = 751.2
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
      * text = "Patient Co-Payment"
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
      * text = "Amount of the change which is considered for adjudication."
    * amount
      * value = 224.11
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
      * text = "Amount deducted from the eligible amount prior to adjudication."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
      * text = "Amount payable under the coverage"
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#noncovered "Noncovered"
      * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount
      * value = 224.11
      * currency = #USD
* item[+]
  * sequence = 5
  * productOrService = http://www.ama-assn.org/go/cpt#37228
  * servicedDate = "2020-08-04"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = 751.2
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
      * text = "Patient Co-Payment"
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
      * text = "Amount of the change which is considered for adjudication."
    * amount
      * value = 224.11
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
      * text = "Amount deducted from the eligible amount prior to adjudication."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
      * text = "Amount payable under the coverage"
    * amount
      * value = 224.11
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#noncovered "Noncovered"
      * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount
      * value = 0
      * currency = #USD
* item[+]
  * sequence = 6
  * productOrService = http://www.ama-assn.org/go/cpt#37228
  * servicedDate = "2020-08-04"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#21
    * text = "HOSPITAL - INPATIENT HOSPITAL"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = -751.2
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
      * text = "Patient Co-Payment"
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
      * text = "Amount of the change which is considered for adjudication."
    * amount
      * value = -224.11
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
      * text = "Amount deducted from the eligible amount prior to adjudication."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
      * text = "Amount payable under the coverage"
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = C4BBAdjudication#noncovered "Noncovered"
      * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount
      * value = -224.11
      * currency = #USD
* adjudication
  * category = C4BBAdjudicationDiscriminator#billingnetworkstatus "Billing Network Status"
    * text = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission."
  * reason = C4BBPayerAdjudicationStatus#innetwork "In Network"
    * text = "Indicates the provider was in network for the service"
* total[0]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
    * text = "The total submitted amount for the claim or group or line item."
  * amount
    * value = 820
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
    * text = "Amount of the change which is considered for adjudication."
  * amount
    * value = 258.91
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
    * text = "Amount deducted from the eligible amount prior to adjudication."
  * amount
    * value = 0
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#copay "CoPay"
    * text = "Patient Co-Payment"
  * amount
    * value = 0
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#noncovered "Noncovered"
    * text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
  * amount
    * value = 0
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
    * text = "Amount payable under the coverage"
  * amount
    * value = 258.91
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#memberliability "Member liability"
    * text = "The amount of the member's liability."
  * amount
    * value = 0
    * currency = #USD
```

---

// File: input/pagecontent/ExplanationOfBenefit-EOBProfessionalTransportation1-notes.md

```
Instance: EOBProfessionalTransportation1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician|2.1.0
Title: "EOB Professional - Transportation 1"
Description: "EOB Professional - Transportation 1"
Usage: #example
* meta
  * lastUpdated = "2022-09-10T14:46:05-04:00"
  * source = "Organization/PayerOrganizationExample1"
* identifier
  * type = C4BBIdentifierType#uc "Unique Claim ID"
    * text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
  * system = "https://www.example.com/fhir/EOBIdentifier"
  * value = "ProfessionalTransportationEOBExample1"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/claim-type#professional
  * text = "Professional"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod.start = "2022-09-10"
* created = "2022-09-10T14:46:05-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderTransportationOrganization1)
* payee
  * type = http://terminology.hl7.org/CodeSystem/payeetype#provider "Provider"
    * text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
  * party = Reference(ProviderTransportationOrganization1)
* outcome = #complete
* supportingInfo[0]
  * sequence = 1
  * category = C4BBSupportingInfoType#clmrecvddate "Claim Received Date"
    * text = "Date the claim was received by the payer."
  * timingDate = "2022-09-11"
* supportingInfo[+]
  * sequence = 2
  * category = C4BBSupportingInfoType#patientweight
  * valueQuantity
    * value = 160
    * system = "http://unitsofmeasure.org"
    * unit = "[lb_av]"
* supportingInfo[+]
  * sequence = 3
  * category = C4BBSupportingInfoType#ambulancetransportreason
  * reason = X12AmbulanceTransportReasonCodes#B "Patient was transported for the benefit of a preferred physician"
* supportingInfo[+]
  * sequence = 4
  * category = C4BBSupportingInfoType#transportationdistance
  * valueQuantity
    * value = 21
    * system = "http://unitsofmeasure.org"
    * unit = "[mi_i]"
* supportingInfo[+]
  * sequence = 5
  * category = C4BBSupportingInfoType#transportationdistance
  * valueQuantity
    * value = 22
    * system = "http://unitsofmeasure.org"
    * unit = "[mi_i]"
* supportingInfo[+]
  * sequence = 6
  * category = C4BBSupportingInfoType#roudtrippurpose
  * valueString = "Trip to facility and then back home"
* supportingInfo[+]
  * sequence = 7
  * category = C4BBSupportingInfoType#stretcherpurpose
  * valueString = "Patient could not walk"
* supportingInfo[+]
  * sequence = 8
  * category = C4BBSupportingInfoType#pickuplocation
  * valueString = "Patient home; Pittsburgh; PA,15222"
* supportingInfo[+]
  * sequence = 9
  * category = C4BBSupportingInfoType#dropofflocation
  * valueString = "Orange Medical Group; Pittsburgh; PA,15222"
* supportingInfo[+]
  * sequence = 10
  * category = C4BBSupportingInfoType#pickuplocation
  * valueString = "Orange Medical Group; Pittsburgh; PA,15222"
* supportingInfo[+]
  * sequence = 11
  * category = C4BBSupportingInfoType#dropofflocation
  * valueString = "Patient home; Pittsburgh; PA,15222"
* diagnosis
  * sequence = 1
  * diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#I70.249
  * type = http://terminology.hl7.org/CodeSystem/ex-diagnosistype#principal "Principal Diagnosis"
    * text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* insurance
  * focal = true
  * coverage = Reference(Coverage1)
* item[0]
  * sequence = 1
  * informationSequence[0] = 2
  * informationSequence[+] = 3
  * informationSequence[+] = 4
  * informationSequence[+] = 6
  * informationSequence[+] = 7
  * informationSequence[+] = 10
  * informationSequence[+] = 11
  * productOrService = https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#A0428 "Ambulance service, basic life support, non-emergency transport (BLS)"
  * servicedDate = "2022-09-10"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#41
    * text = "Ambulance - Land"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = 40.35
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
      * text = "Amount of the change which is considered for adjudication."
    * amount
      * value = 40.35
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
      * text = "Amount deducted from the eligible amount prior to adjudication."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
      * text = "Amount payable under the coverage"
    * amount
      * value = 40.35
      * currency = #USD
* item[+]
  * sequence = 2
  * informationSequence[0] = 2
  * informationSequence[+] = 3
  * informationSequence[+] = 5
  * informationSequence[+] = 6
  * informationSequence[+] = 7
  * informationSequence[+] = 8
  * informationSequence[+] = 9
  * productOrService = https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets#A0428 "Ambulance service, basic life support, non-emergency transport (BLS)"
  * servicedDate = "2022-09-10"
  * locationCodeableConcept = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set#41
    * text = "Ambulance - Land"
  * adjudication[0]
    * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
    * reason = C4BBPayerAdjudicationStatus#innetwork
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
      * text = "The total submitted amount for the claim or group or line item."
    * amount
      * value = 42.62
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
      * text = "Amount of the change which is considered for adjudication."
    * amount
      * value = 42.62
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#deductible "Deductible"
      * text = "Amount deducted from the eligible amount prior to adjudication."
    * amount
      * value = 0
      * currency = #USD
  * adjudication[+]
    * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
      * text = "Amount payable under the coverage"
    * amount
      * value = 42.62
      * currency = #USD
* adjudication
  * category = C4BBAdjudicationDiscriminator#billingnetworkstatus "Billing Network Status"
    * text = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission."
  * reason = C4BBPayerAdjudicationStatus#innetwork "In Network"
    * text = "Indicates the provider was in network for the service"
* total[0]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
    * text = "The total submitted amount for the claim or group or line item."
  * amount
    * value = 82.97
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#eligible "Eligible Amount"
    * text = "Amount of the change which is considered for adjudication."
  * amount
    * value = 82.97
    * currency = #USD
* total[+]
  * category = http://terminology.hl7.org/CodeSystem/adjudication#benefit "Benefit Amount"
    * text = "Amount payable under the coverage"
  * amount
    * value = 82.97
    * currency = #USD
* total[+]
  * category = C4BBAdjudication#memberliability "Member liability"
    * text = "The amount of the member's liability."
  * amount
    * value = 0
    * currency = #USD
```

---

// File: input/pagecontent/General_Guidance.md


<a name="considerations-for-improving-interoperability"></a>

### Considerations for Improving Interoperability
Many of the codes used in this guide are proprietary with [licensing requirements](Terminology_Licensure.html). While it is recommended that consumer apps acquire the necessary licenses to show descriptions for these codes, not all app developers may be in a position to do so. Because of this, payers **MAY** choose to provide a concept text `[CodeableConcept].text` or the coding display `[CodeableConcept].coding.display. It is the responsibility of the payer to make sure that the descriptions provided are correct.

If the 'display' element is populated, the string used in `display` **SHALL** be one of the display strings defined for that code by the code system (code systems may define multiple display strings for a single code). If the code description available is not known to be an exact match of a display string defined by the code system, the  `[CodeableConcept].text` should be used in place of the `[CodeableConcept].coding.display`.

Payers **MAY** choose to also provide resource level text to enable consumers apps to render resources in a manner that the payer would like to have the data presented. The `[Resource].text` is a Narrative datatype that has a `div` element that is an xhtml datatype. This element **MAY** be used to provide an easily renderable version of the resource that is meant for human viewing. This capability may be of particular interest to payers for ExplanationOfBenefit resources and can be used to enable the rendering of the Explanation of Benefit data in a fashion similar to their mailed or portal accessible Explanation of Benefit documents.

Explanation of Benefit information can be complex. Many of the data elements in this guide go beyond what is commonly included in printed Explanation of Benefit documents today. Payers may also provide additional data elements beyond what is in this guide. As part of their API documentation, Payers **SHOULD** include descriptions of the data elements they provide, particularly for data elements not covered in this guide, and may consider providing a display mapping like can be found in the [Example Printed Explanation Of Benefit Mapping](#example-printed-eob-mapping) section of this implementation guide.

<a name="example-printed-eob-mapping"></a>

### Printed Example Explanation Of Benefit Mapping

Explanation Of Benefits documents that are either mailed in a physical form or downloaded through a member portal vary widely from payer to payer. There is no such thing as a standardized Explanation Of Benefits document format. There are some common elements across many of these documents, such as how much was charged by a provider and how much is covered by the insurance, but the manner in which this data is presented is determined by the individual payer.

The information found in payer Explanation Of Benefits documents represent only a subset of the data that may be available through the use of the profiles defined in this implementation guide. Printed Explanation of Benefits documents usually present a member friendly overview of services, charges, cost sharing, and benefits and do not usually contain the claim details or other more detailed codified and discrete data made available through this implementation guide's profiles.

Below is an example generic Explanation Of Benefits document that represents some of the information one might find from payers. This example is not exhaustive, but does present some common information found on these documents. As shown in this example document, payers may include more than one claim on a single explanation of benefit document. The ExplanationOfBenefit profiles in this guide address a single claim. In this example there would be two ExplanationOfBenefit resources, one for each claim, that both relate to this one "printed" document. Below is an example mapping from these informational elements to CPCDS data elements and specific resource data element paths. This mapping can be used by app developers as guidance to understanding how information found on EOB documents relate to the profiles in this guide. This mapping can also be used by payers as guidance for how they could further develop their API documentation to enable client apps connecting to their API.

<p><img style="float: none; align: middle;" src="EOBRender.png"/></p>

<table border="1">
<colgroup>
<col style="background-color:#ED7D32;text-align:center"/>
<col/>
<col/>
</colgroup>
<thead>
<tr style="background-color:#4471C4;color:white"><th style="text-align:center;font-weight:bold" valign="middle">CPCDS Element ID</th><th style="text-align:center;font-weight:bold" valign="middle">CPCDS Element Description</th><th style="text-align:center;font-weight:bold" valign="middle">Resource/Profile Paths</th></tr>
</thead>
<tbody>
<tr><td style="text-align:center;font-weight:bold;color:white">175</td><td>Claim Payer Name</td><td>ExplanationOfBenefit.insurer.reference-&gt; Organization.name</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">179</td><td>Adjudication Date</td><td>ExplanationOfBenefit.created</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">130</td><td>Patient Name</td><td>ExplanationOfBenefit.patient.reference-&gt;Patient.name</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">1</td><td>Member Id</td><td>ExplanationOfBenefit.patient.reference-&gt;Patient.identifier:memberid</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">132</td><td>Subscriber Id</td><td>ExplanationOfBenefit.insurance.coverage.reference-&gt;Coverage.subscriberId</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">135</td><td>Group Name</td><td>ExplanationOfBenefit.insurance.coverage.reference-&gt;Coverage.class:group.name</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">134</td><td>Group Id</td><td>ExplanationOfBenefit.insurance.coverage.reference-&gt;Coverage.class:group.value</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">155</td><td>Plan Name</td><td>ExplanationOfBenefit.insurance.coverage.reference-&gt;Coverage.class:plan.name</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">154</td><td>Plan Id</td><td>ExplanationOfBenefit.insurance.coverage.reference-&gt;Coverage.class:plan.value</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">177</td><td>Statement From Date</td><td>ExplanationOfBenefit.billablePeriod.start</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">178</td><td>Statement Through Date</td><td>ExplanationOfBenefit.billablePeriod.end</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">35</td><td>Payer Claim Unique Identifier</td><td>ExplanationOfBenefit.identifier[type.coding.code = ‘uc’].value</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">167</td><td>Claim Billing Provider Name</td><td>ExplanationOfBenefit.provider.reference-&gt;Organization.name<br/> &nbsp; <i>or</i><br/>Practitioner.name</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">101</td><td>Claim Billing Provider Networking Status (If claim is not adjudicated in alignment with network status, an process note is typically provided)</td><td>ExplanationOfBenefit.adjudication<br/> &nbsp; :adjudicationamounttype[category.coding.code=billingnetworkcontractingstatus]<br/> &nbsp; .reason</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">94</td><td>Claim Billing Provider NPI</td><td>ExplanationOfBenefit.provider.reference-&gt;Organization.identifier[NPI]<br/> &nbsp; <i>or</i><br/>Practitioner.identifier[NPI]</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">121</td><td>Claim Payee</td><td>ExplanationOfBenefit.payee.party.reference-&gt;Organization.name<br/> &nbsp; <i>or</i><br/>Practitioner.name<br/> &nbsp; <i>or</i><br/>Patient.name</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">36</td><td>Line Number</td><td>ExplanationOfBenefit.item.sequence</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">90</td><td>Service (From Date) (Outpatient &amp; Pharmacy)</td><td>ExplanationOfBenefit.item.ServicedDate<br/> &nbsp; <i>or</i><br/>ExplanationOfBenefit.item.ServicedPeriod.start</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">118</td><td>Service From Date (Professional &amp; Oral EOB)</td><td>ExplanationOfBenefit.item.ServicedDate<br/> &nbsp; <i>or</i><br/>ExplanationOfBenefit.item.ServicedPeriod.start</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">86</td><td>Revenue Center Code (IG requires codes only, a display/text may not be provided)</td><td>ExplanationOfBenefit.item.revenue</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">20a</td><td>Line Submitted Amount</td><td>ExplanationOfBenefit.item.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’submitted’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">20b</td><td>Line Eligible Amount</td><td>ExplanationOfBenefit.item.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’eligible’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">20c</td><td>Line Discount Amount</td><td>ExplanationOfBenefit.item.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’discount’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">20d</td><td>Line Copay Amount or Line Co-insurance Amount</td><td>ExplanationOfBenefit.item.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’copay’].amount<br/> &nbsp; <i>or</i><br/>ExplanationOfBenefit.item.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’coinsurance’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">20e</td><td>Line Patient Deductible</td><td>ExplanationOfBenefit.item.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’deductible’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">20f</td><td>Sum of<br/> &nbsp; - Line Amount Paid to Provider<br/> &nbsp; - Line Member Reimbursement</td><td>ExplanationOfBenefit.item.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’paidtoprovider’].amount<br/> &nbsp; +<br/>ExplanationOfBenefit.item.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’paidtopatient’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">20g</td><td>Line Member Liability</td><td>ExplanationOfBenefit.item.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’memberliability’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">148a</td><td>Claim Submitted Amount</td><td>ExplanationOfBenefit.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’submitted’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">148b</td><td>Claim Eligible Amount</td><td>ExplanationOfBenefit.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’eligible’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">148c</td><td>Claim Discount Amount</td><td>ExplanationOfBenefit.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’discount’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">148d</td><td>Copay Amount or Co-insurance Liability Amount</td><td>ExplanationOfBenefit.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’copay’].amount<br/> &nbsp; <i>or</i><br/>ExplanationOfBenefit.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’coinsurance’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">148e</td><td>Member Paid Deductible</td><td>ExplanationOfBenefit.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’deductible’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">148f</td><td>Sum of<br/> &nbsp; - Claim Amount Paid to Provider<br/> &nbsp; - Member Reimbursement</td><td>ExplanationOfBenefit.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’paidtoprovider’].amount<br/> &nbsp; +<br/>ExplanationOfBenefit.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’paidtopatient’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">148g</td><td>Member Liability</td><td>ExplanationOfBenefit.adjudication:adjudicationamounttype<br/> &nbsp; [category.coding.code=’memberliability’].amount</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">92</td><td>Line Payment Denial Code (In EOB Documents, this is a payer defined code. These codes are not included in the IG. Instead, this IG uses <a href="ValueSet-X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes.html">CARC and RARC codes</a>. Payers may include their own codes and descriptions in process note – 181)</td><td>ExplanationOfBenefit.item.adjudication:denialreason.reason</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">40</td><td>Procedure Code (IG requires codes only, display/text may not be provided)</td><td>ExplanationOfBenefit.item.productOrService</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">181</td><td>Payment Member Explanation</td><td>ExplanationOfBenefit.processNote.text[number = ExplanationOfBenefit.item.noteNumber]</td></tr>
<tr><td style="text-align:center;font-weight:bold;color:white">*</td><td>Remark codes are payer specific and not defined by this IG. These remarks are generally included in the process note, which can be linked by the noteNumber</td><td>ExplanationOfBenefit.item.noteNumber</td></tr>
</tbody>
</table>

### U.S. Core Data for Interoperability and 2015 Edition Common Clinical Data Set

<p>The US Core Profiles were originally designed to meet the 2015 Edition certification criterion for Patient Selection 170.315(g)(7), and Application Access - Data Category Request 170.315(g)(8). They were created for each item in the&nbsp;<a href="https://www.healthit.gov/sites/default/files/ccds_reference_document_v1_1.pdf">2015 Edition Common Clinical Data Set (CCDS).&nbsp;</a>The 3.1.1 version of the US Core Profiles IG includes requirements from a previous ONC rule including U.S. Core Data for Interoperability(USCDI) v1 and the more recent 6.1.0 version of the US Core Profiles IG includes requirements from a more recent ONC rule including USCDI v3</a></p>


---

// File: input/pagecontent/index.md

### Introduction

<!-- 

https://jira.hl7.org/browse/FHIR-31535?jql=cf%5B11402%5D%20%3D%20STU-1.1.0-Update

-->

<p>This implementation guide describes the CARIN for Blue Button® <sup>[<a href="#ftn.id1" name="id1">*</a>]</sup> Framework and Common Payer Consumer Data Set (CPCDS), providing a set of resources that payers can display to consumers via a FHIR API. See the <a href="toc.html">Table of Contents</a> for more information.</p>

<a name="authors"> </a>
### Authors
<ul>
<li>Primary
<ul>
<li>Amol Vyas (NCQA) - <a href="mailto:avyas@ncqa.org">avyas@ncqa.org</a></li>
<li>Pat Taylor (Blue Cross Blue Shield Association) - <a href="mailto:pat.taylor@bcbsa.com">pat.taylor@bcbsa.com</a></li>
<li>HL7 Financial Management Workgroup</li>
</ul>
</li>
<li>Secondary
<ul>
<li>Adam Culbertson (Humana) - <a href="mailto:ACulbertson1@humana.com">ACulbertson1@humana.com</a></li>
<li>Corey Spears (Lantana Consulting Group) - <a href="mailto:corey.spears@lantanagroup.com">corey.spears@lantanagroup.com</a></li>   
<li>Igor Sirkovich (Smile CDR, Inc.) - <a href="mailto:igor@smilecdr.com">igor@smilecdr.com</a></li>   
<li>Jason Teeple (Cigna) - <a href="mailto:jason.teeple@cigna.com">jason.teeple@cigna.com</a></li>
<li>Josh Lamb (UPMC) - <a href="mailto:igor@smilecdr.com">lambj4@upmc.edu</a></li> 
<li>Lisa Nelson (MaxMD) - <a href="mailto:lnelson@max.md">lnelson@max.md</a></li>
<li>Mark Roberts (Leavitt Partners, LLC) - <a href="mailto:mark.roberts@leavittpartners.com">mark.roberts@leavittpartners.com</a></li>
<li>Ryan Howells (Leavitt Partners, LLC) - <a href="mailto:ryan.howells@leavittpartners.com">ryan.howells@leavittpartners.com</a></li>
<li>Saul Kravitz (MITRE) - <a href="mailto:saul@mitre.org">saul@mitre.org</a></li>
<li>HL7 Payer/Provider Information Exchange</li>
</ul>
</li>
</ul>
### Acknowledgements
<p>The CARIN Consumer Directed Payer Data Exchange Implementation Guide is also known as the CARIN IG for Blue Button® Implementation Guide. This IG was developed using <a href="https://build.fhir.org/ig/HL7/fhir-shorthand/">FHIR Shorthand syntax</a> and the <a href="https://github.com/FHIR/sushi">SUSHI</a> tookit, a free, open source toolchain from the MITRE Corporation. Valuable guidance on FSH and FHIR slicing was provided by Chris Moesel. The capability statements were developed with tools and valuable guidance from Eric Haas.</p>
<div class="footnote"><sup>[<a href="#id1" name="ftn.id1">*</a>]</sup>Blue Button, the slogan, 'Download My Data,' the Blue Button Logo, and the Blue Button combined logo are registered service marks owned by the U.S. Department of Health and Human Services.</div>
<p> </p>



---

// File: input/pagecontent/Organization-DentalPayer1-notes.md

```
Instance: DentalPayer1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Dental Payer1"
Description: "Dental Payer1"
Usage: #example
* meta.lastUpdated = "2021-01-01T10:23:11+00:00"
* language = #en-US
* identifier[0]
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* identifier[+]
  * type = C4BBIdentifierType#payerid
  * value = "66783JJT"
* active = true
* name = "INSURANCE COMPANY XYZ"
```

---

// File: input/pagecontent/Organization-Payer1-notes.md

```
Instance: Payer1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Payer 1"
Description: "Payer 1"
Usage: #example
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* identifier[0]
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* identifier[+]
  * type = C4BBIdentifierType#payerid
  * value = "901234"
* active = true
* name = "Organization Payer 1"
```

---

// File: input/pagecontent/Organization-Payer2-notes.md

```
Instance: Payer2
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Payer 2"
Description: "Payer 2"
Usage: #example
* meta
  * lastUpdated = "2020-09-08T00:00:00+00:00"
  * source = "Organization/PayerOrganizationExample1"
* identifier
  * type = C4BBIdentifierType#naiccode "NAIC Code"
    * text = "NAIC Code"
  * system = "urn:oid:2.16.840.1.113883.6.300"
  * value = "95216"
* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#pay
  * text = "Payer"
* name = "UPMC Health Plan"
* telecom[0]
  * system = #phone
  * value = "1-844-220-4785 TTY: 711"
  * use = #work
* telecom[+]
  * system = #phone
  * value = "1-866-406-8762"
  * use = #work
* address
  * type = #physical
  * line[0] = "UPMC Health Plan"
  * line[+] = "Attn: Commercial Plans"
  * line[+] = "U.S. Steel Tower"
  * line[+] = "600 Grant Street"
  * city = "Pittsburgh"
  * state = "PA"
  * postalCode = "15219"
```

---

// File: input/pagecontent/Organization-ProviderOrganization1-notes.md

```
Instance: ProviderOrganization1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Provider Organization 1"
Description: "Provider Organization 1"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI "National Provider Identifier"
    * text = "National Provider Identifier"
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name = "Orange Medical Group"
* address
  * line = "Attn: Orange Medical Group"
  * city = "Pittsburgh"
  * state = "PA"
  * postalCode = "15222"
  * country = "USA"
* contact.telecom
  * system = #phone
  * value = "555-555-5510"
  * use = #work
```

---

// File: input/pagecontent/Organization-ProviderOrganization2-notes.md

```
Instance: ProviderOrganization2
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Provider Organization 2"
Description: "Provider Organization 2"
Usage: #example
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* identifier[0]
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* identifier[+]
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#TAX
  * system = "urn:oid:2.16.840.1.113883.4.4"
  * value = "123-45-6789"
* active = true
* name = "Provider 1"
```

---

// File: input/pagecontent/Organization-ProviderOrganization3-notes.md

```
Instance: ProviderOrganization3
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Provider Organization 3"
Description: "Provider Organization 3"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI "National Provider Identifier"
    * text = "National Provider Identifier"
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name = "Green Medical Group"
* address
  * line = "Attn: Green Medical Group"
  * city = "Pittsburgh"
  * state = "PA"
  * postalCode = "15222"
  * country = "USA"
* contact.telecom
  * system = #phone
  * value = "555-555-5520"
  * use = #work
```

---

// File: input/pagecontent/Organization-ProviderOrganization4-notes.md

```
Instance: ProviderOrganization4
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Provider Organization 4"
Description: "Provider Organization 4"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI "National Provider Identifier"
    * text = "National Provider Identifier"
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name = "Blue Medical Group"
* address
  * line = "Attn: Blue Medical Group"
  * city = "Pittsburgh"
  * state = "PA"
  * postalCode = "15222"
  * country = "USA"
* contact.telecom
  * system = #phone
  * value = "555-555-5530"
  * use = #work
```

---

// File: input/pagecontent/Organization-ProviderOrganization5-notes.md

```
Instance: ProviderOrganization5
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Provider Organization 5"
Description: "Provider Organization 5"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI "National Provider Identifier"
    * text = "National Provider Identifier"
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name = "Black Medical Group"
* address
  * line = "Attn: Black Medical Group"
  * city = "Pittsburgh"
  * state = "PA"
  * postalCode = "15222"
  * country = "USA"
* contact.telecom
  * system = #phone
  * value = "555-555-5560"
  * use = #work
```

---

// File: input/pagecontent/Organization-ProviderOrganization6-notes.md

```
Instance: ProviderOrganization6
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Provider Organization 6"
Description: "Provider Organization 6"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI "National Provider Identifier"
    * text = "National Provider Identifier"
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name = "White Medical Group"
* address
  * line = "Attn: White Medical Group"
  * city = "Pittsburgh"
  * state = "PA"
  * postalCode = "15222"
  * country = "USA"
* contact.telecom
  * system = #phone
  * value = "555-555-5570"
  * use = #work
```

---

// File: input/pagecontent/Organization-ProviderTransportationOrganization1-notes.md

```
Instance: ProviderTransportationOrganization1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1.0
Title: "Provider Transportation Organization Example 1"
Description: "Provider Transportation Organization Example 1"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI "National Provider Identifier"
    * text = "National Provider Identifier"
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name = "ABC Ambulance Services"
* address
  * line = "Attn: ABC Ambulance Services"
  * city = "Pittsburgh"
  * state = "PA"
  * postalCode = "15222"
  * country = "USA"
* contact.telecom
  * system = #phone
  * value = "555-555-5511"
  * use = #work
```

---

// File: input/pagecontent/Patient-Patient1-notes.md

```
Instance: Patient1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Patient|2.1.0
Title: "Patient Example 1"
Description: "Patient Example 1"
Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* identifier[0]
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#MB
  * system = "https://www.xxxhealthplan.com/fhir/memberidentifier"
  * value = "1234-234-1243-12345678901"
* identifier[+]
  * type = C4BBIdentifierType#um
  * system = "https://www.xxxhealthplan.com/fhir/iniquememberidentifier"
  * value = "1234-234-1243-12345678901u"
* active = true
* name
  * family = "Example1"
  * given = "Johnny"
* telecom
  * system = #phone
  * value = "(301)666-1212"
  * rank = 2
* gender = #male
* birthDate = "1986-01-01"
* address
  * type = #physical
  * line = "123 Main Street"
  * city = "Pittsburgh"
  * state = "PA"
  * postalCode = "12519"
* maritalStatus = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK
```

---

// File: input/pagecontent/Patient-Patient2-notes.md

```
Instance: Patient2
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Patient|2.1.0
Title: "Patient Example 2"
Description: "Patient Example 2"
Usage: #example
* meta
  * lastUpdated = "2020-10-30T09:48:01.8512764-04:00"
  * source = "Organization/PayerOrganizationExample1"
* language = #en-US
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#MB "Member Number"
    * text = "An identifier for the insured of an insurance policy (this insured always has a subscriber), usually assigned by the insurance carrier."
  * system = "https://www.upmchealthplan.com/fhir/memberidentifier"
  * value = "88800933501"
  * assigner = Reference(Payer2) "UPMC Health Plan"
* active = true
* name
  * family = "Test"
  * given = "Member 01"
* telecom[0]
  * system = #phone
  * value = "5555555551"
  * rank = 1
* telecom[+]
  * system = #phone
  * value = "5555555552"
  * rank = 2
* telecom[+]
  * system = #phone
  * value = "5555555553"
  * rank = 3
* telecom[+]
  * system = #phone
  * value = "5555555554"
  * rank = 4
* telecom[+]
  * system = #phone
  * value = "5555555555"
  * use = #home
  * rank = 5
* telecom[+]
  * system = #phone
  * value = "5555555556"
  * use = #work
  * rank = 6
* telecom[+]
  * system = #email
  * value = "GXXX@XXXX.com"
  * rank = 7
* telecom[+]
  * system = #fax
  * value = "5555555557"
  * rank = 8
* gender = #male
* birthDate = "1943-01-01"
* address[0]
  * type = #physical
  * line = "123 Main Street"
  * city = "PITTSBURGH"
  * state = "PA"
  * postalCode = "15239"
* address[+]
  * type = #physical
  * line = "456 Murray Avenue"
  * city = "PITTSBURGH"
  * state = "PA"
  * postalCode = "15217"
* maritalStatus = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK
  * text = "unknown"
* communication
  * language = urn:ietf:bcp:47#en
    * text = "English"
  * preferred = true
* managingOrganization = Reference(Payer2) "UPMC Health Plan"
```

---

// File: input/pagecontent/Practitioner-Practitioner1-notes.md

```
Instance: Practitioner1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner|2.1.0
Title: "Practitioner Example 1"
Description: "Practitioner Example 1"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI "National Provider Identifier"
    * text = "National Provider Identifier"
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name
  * family = "Smith"
  * given = "John"
  * prefix = "Dr."
```

---

// File: input/pagecontent/Practitioner-Practitioner2-notes.md

```
Instance: Practitioner2
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner|2.1.0
Title: "Practitioner Example 2"
Description: "Practitioner Example 2"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI "National Provider Identifier"
    * text = "National Provider Identifier"
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name
  * family = "Brown"
  * given = "Jack"
  * prefix = "Dr."
```

---

// File: input/pagecontent/Practitioner-Practitioner3-notes.md

```
Instance: Practitioner3
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner|2.1.0
Title: "Practitioner Example 3"
Description: "Practitioner Example 3"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI "National Provider Identifier"
    * text = "National Provider Identifier"
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name
  * family = "Williams"
  * given = "Jane"
  * prefix = "Dr."
```

---

// File: input/pagecontent/Practitioner-Practitioner4-notes.md

```
Instance: Practitioner4
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner|2.1.0
Title: "Practitioner4"
Description: "Practitioner 4"
Usage: #example
* meta.lastUpdated = "2022-07-27T10:23:11+00:00"
* language = #en-US
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name
  * family = "Levin"
  * given = "Henry"
  * suffix = "MD"
```

---

// File: input/pagecontent/Practitioner-PractitionerDentalProvider1-notes.md

```
Instance: PractitionerDentalProvider1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner|2.1.0
Title: "Dental Provider 1"
Description: "Dental Provider 1"
Usage: #example
* meta.lastUpdated = "2021-01-01T10:23:11+00:00"
* language = #en-US
* identifier
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "9941339100"
* active = true
* name
  * family = "Schmidt"
  * given = "Stewart"
  * suffix = "DDS"
```

---

// File: input/pagecontent/RelatedPerson-RelatedPerson1-notes.md

```
Instance: RelatedPerson1
InstanceOf: http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-RelatedPerson|2.1.0
Title: "Related Person 1"
Description: "Related Person 1"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* active = true
* patient = Reference(Patient1)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MTH
* name
  * family = "Example1"
  * given = "Mary"
* telecom
  * system = #phone
  * value = "(301)666-1212"
  * rank = 2
* address
  * type = #physical
  * line = "123 Main Street"
  * city = "Pittsburgh"
  * state = "PA"
  * postalCode = "12519"
```

---

// File: input/pagecontent/searchparameters.md

### Search Parameters Required By This Implementation Guide
<table class="grid">
<thead>
<tr>
<th>Resource</th>
<th>Parameter</th>
<th>Type</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>ExplanationOfBenefit</td>
<td><a href="{{site.data.fhir.path}}search.html">_id</a></td>
<td>token</td>
<td><code class="highlighter-rouge">GET [base]/ExplanationOfBenefit?_id=[id]</code></td>
</tr>
<tr>
<td>ExplanationOfBenefit</td>
<td><a href="{{site.data.fhir.path}}search.html">_lastUpdated</a></td>
<td>date</td>
<td><code class="highlighter-rouge">GET [base]/ExplanationOfBenefit?_lastUpdated=[_lastUpdated]</code></td>
</tr>
  <tr>
<td>ExplanationOfBenefit</td>
<td><a href="SearchParameter-explanationofbenefit-identifier.html">identifier</a></td>
<td>token</td>
<td><code class="highlighter-rouge">GET [base]/ExplanationOfBenefit?identifier=[system]|[code]</code></td>
</tr>
<tr>
<td>ExplanationOfBenefit</td>
<td><a href="SearchParameter-explanationofbenefit-patient.html">patient</a></td>
<td>reference</td>
<td><code class="highlighter-rouge">GET [base]/ExplanationOfBenefit?patient=[patient]</code></td>
</tr>
<tr>
<td>ExplanationOfBenefit</td>
<td><a href="SearchParameter-explanationofbenefit-type.html">type</a></td>
<td>token</td>
<td><code class="highlighter-rouge">GET [base]/ExplanationOfBenefit?type=[system]|[code]</code></td>
</tr>
<tr>
<td>ExplanationOfBenefit</td>
<td><a href="SearchParameter-explanationofbenefit-service-date.html">service-date</a></td>
<td>date</td>
<td><code class="highlighter-rouge">GET [base]/ExplanationOfBenefit?service-date=[service-date]</code></td>
</tr>
<tr>
<td>ExplanationOfBenefit</td>
<td><a href="SearchParameter-explanationofbenefit-service-start-date.html">service-start-date</a></td>
<td>date</td>
<td><code class="highlighter-rouge">GET [base]/ExplanationOfBenefit?service-start-date=[service-start-date]</code></td>
</tr>
<tr>
<td>ExplanationOfBenefit</td>
<td><a href="SearchParameter-explanationofbenefit-billable-period-start.html">billable-period-start</a></td>
<td>date</td>
<td><code class="highlighter-rouge">GET [base]/ExplanationOfBenefit?billable-period-start=[billable-period-start]</code></td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>

### _include Support

#### Coverage
A Server **SHALL** be capable of supporting the following _includes:
Coverage:payor - `GET [base]/Coverage?_include=Coverage:payor`

#### ExplanationOfBenefit
A Server SHALL be capable of supporting the following _includes:

ExplanationOfBenefit:patient - `GET [base]/ExplanationOfBenefit?[parameter=value]&_include=ExplanationOfBenefit:patient`

ExplanationOfBenefit:provider - `GET [base]/ExplanationOfBenefit?[parameter=value]&_include=ExplanationOfBenefit:provider`

ExplanationOfBenefit:care-team - `GET [base]/ExplanationOfBenefit?[parameter=value]&_include=ExplanationOfBenefit:care-team`

ExplanationOfBenefit:coverage - `GET [base]/ExplanationOfBenefit?[parameter=value]&_include=ExplanationOfBenefit:coverage`

ExplanationOfBenefit:insurer - `GET [base]/ExplanationOfBenefit?[parameter=value]&_include=ExplanationOfBenefit:insurer`

ExplanationOfBenefit:payee - `GET [base]/ExplanationOfBenefit?[parameter=value]&_include=ExplanationOfBenefit:payee`

ExplanationOfBenefit:* - `GET [base]/ExplanationOfBenefit?[parameter=value]&_include=ExplanationOfBenefit:*`


Note: `_include=ExplanationOfBenefit:*` means, at minimum, the resources that are included as reference type search parameters for the ExplanationOfBenefit resource on the server. Servers claiming compliance to this guide will, at minimum, support the include of `patient`, `provider`, `care-team`, `coverage`, and `insurer`, and will support returning all of them in support `ExplanationOfBenefit:*`. This guide does not require all of these as search parameters, but are defined as part of the _include requirement. For example, the insurer search parameter is not required because in the context of the use case, it is anticipated there will ever be one insurer. It however must be returned in the `_include=ExplanationOfBenefit:*` results. The means in which this is done (including defining all of the _include as search parameters) is not defined by this guide.

---

// File: input/pagecontent/Security_And_Privacy_Considerations.md

[//]: #  ## Security, Privacy, and Consent 

### General Considerations

The CARIN Consumer-Directed Payer Data Exchange involves a patient’s claim and encounter information communicated through a member directed exchange. This data includes the Protected Health Information (PHI), Personally Identifiable Information (PII), and personal financial data. Members need to be able to direct the communication of this information through authenticated, authorized, and secure channels.

Exchange of this information needs to be protected with proper security and privacy protections to avoid malicious or unintentional exposure of such information. All consumer-directed payer data exchanges must be appropriately secured in transit and access limited only to authorized individuals.

#### Legal and Regulatory Requirements

Implementers must ensure that APIs fully and successfully implement privacy and security features such as, but not limited to, those required to comply with HIPAA privacy and security requirements and other applicable law protecting the privacy and security of protected health information. Note that the HIPAA Privacy Rule applies only to HIPAA covered entities. The HIPAA Privacy Rule applies to HIPAA covered entities. After information leave the control of a HIPAA covered entity, the HIPAA Privacy Rule does not apply.  FTC consumer protection laws and state privacy laws may apply.

### Security/Privacy Related Technologies Including Explicit Consent and Security Labels
1. While past ONC regulations did have optional rules for data labeling and consent directives, as of May 2020, ONC has elected to not establish rules for either data labeling and consent directives as part of the [Final Rule for the 21st Century Cures Act](https://www.federalregister.gov/documents/2020/05/01/2020-07419/21st-century-cures-act-interoperability-information-blocking-and-the-onc-health-it-certification).
2. At present there is no explicit regulatory requirement for the use of these technologies in conjunction with this guide.
3. However, to meet the statutes, regulations, and guiding principles above, consent directives and security labels MAY be considered and used.
4. Organizations which plan to take advantage of these additional capabilities are responsible for negotiating support for these mechanisms between trading partners. The FHIR implementation guide defining the recommended standard is the [FHIR Data Segmentation for Privacy IG](http://hl7.org/fhir/uv/security-label-ds4p).

#### Security Considerations and Guidance
All implementers of the CARIN Consumer-Directed Payer Data Exchange Implementation Guide (IG) should follow the FHIR Security guidance, Security and Privacy Module, and the FHIR Implementer’s Safety Checklist guidance as defined in the FHIR standard where applicable and not otherwise superseded by this section of the IG.


1.	The FHIR Security specification provides guidance related to communication security, authentication, authorization/access control, audit, digital signatures, attachments, labels, narrative, and input validation. The FHIR security specification is available [here]({{site.data.fhir.path}}security.html).
2.	The FHIR Security and Privacy Module describes access control and authorization considerations to protect a FHIR server, how to document permissions granted, and how to keep records of performed events. The FHIR Security and privacy module can be found [here]({{site.data.fhir.path}}secpriv-module.html).
3.	The FHIR Implementer’s Safety Checklist helps implementers be sure that they have considered all the parts of FHIR that impact their system design regarding privacy, security, provenance, and safety. The FHIR safety check list is available [here]({{site.data.fhir.path}}safety.html).

### Security Requirements
For the purposes of information exchange defined by this IG, additional security conformance requirements are as follows:



#### Exchange Security
1.	The exchange of  information **SHOULD** use the current version and **SHALL** use either current or the immediately prior release of Transport Level Security (TLS) as specified by the current release of NIST guidelines (SP 800-52).
2.	Implementers of this Implementation Guide **SHOULD** support SMART on FHIR Authorization best practices [Transport Security section](https://docs.smarthealthit.org/authorization/best-practices/#11--transport-security).

### Authentication and Authorization Requirements
1.	Implementations **SHALL** support the FHIR US Core [Patient Privacy and Security requirements]({{site.data.fhir.ver.uscore6}}/security.html).
2.	Server systems **SHALL** publish their authorization and token endpoints for discovery in accordance with the SMART App Launch framework and publicly publish the [Well-Known Uniform Resource Identifiers (URIs)](https://hl7.org/fhir/smart-app-launch/conformance/index.html#using-well-known) JSON file with scopes defined in the `scopes_supported` property.
3.	Implementations **SHOULD** consider the SMART on FHIR Best Practices in Authorization found [here](https://docs.smarthealthit.org/authorization/best-practices/).
4.	Server implementation **SHALL** support the following [“SMART Core Capabilities”](https://hl7.org/fhir/smart-app-launch/1.0.0/conformance/index.html#core-capabilities) and **MAY** support additional capabilities:
    1.	`launch-standalone`: support for SMART’s Standalone Launch mode
    2.	`client-public`: support for SMART’s public client profile (no client authentication)
    3.	`client-confidential-symmetric`: support for SMART’s confidential client profile 
    4.	`sso-openid-connect`: support for SMART’s OpenID Connect profile
    5.	`context-standalone-patient`: support for patient-level launch context (requested by launch/patient scope, conveyed via patient token parameter)
    6.	`permission-offline`: support for refresh tokens (requested by offline_access scope)
    7.	`permission-patient`: support for patient-level scopes (e.g. patient Observation.read)
    8.	`permission-user`: support for user-level scopes (e.g. user/Appointment.read)
5.	Server implementations of this Implementation Guide **SHALL** support, at a minimum, the following requested authorization scopes:
    1.	openid
    2.	fhirUser
    3.	launch/patient
    4.  patient/ExplanationOfBenefit.read
    5.	patient/Coverage.read
    6.	patient/Patient.read
    7.	patient/Organization.read
    8.	patient/Practitioner.read
    9.	patient/Coverage.read
    10.	user/ExplanationOfBenefit.read
    11.	user/Coverage.read
    12.	user/Patient.read
    13.	user/Organization.read
    14.	user/Practitioner.read

6.	MAY support the [Security for Scalable Registration, Authentication, and Authorization](https://hl7.org/fhir/us/udap-security/) 1.0.0 or later for registration of client applications and (authentication and authorization of client applications or users)
    1.  If UDAP is supported, then all server systems and client applications that can protect private cryptographic keys and all systems of record **SHOULD** support UDAP JWT-Based Client Authentication for the authentication of client applications using asymmetric cryptography.



### Audit Logging and Provenance
1.	Relevant audit and provenance events SHALL be recorded.
2.  Server implementations **SHOULD** record IG related data access using the [AuditEvent]({{site.data.fhir.path}}auditevent.html) resource.
3.	Server implementations **SHOULD** support the ability to directly record and/or enable clients to assert (store) provenance associated with advance directive information using the [Provenance]({{site.data.fhir.path}}provenance.html) resource.



---

// File: input/pagecontent/StructureDefinition-C4BB-Coverage-intro.md

<h4>Notes on Fields</h4>
<ul>
<li>The Coverage FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>The Coverage Reference Resource shall be returned with data that was effective as of the date of service of the claim</li>
<li>The numbers, e.g. (1), following the data element descriptions correlate to the MapID in the <a href="CPCDSDataDictionary.docx">CPCDS Data Dictionary</a> and the <a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>




---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis-intro.md

<p>This profile is defines the base requirements for an Inpatient Institutional ExplanationOfBenefit. All of the requirements are an exact subset of the original profile from earlier versions with only the financial data element requirements removed in order to address the use case of <a href="Use_Case.html#use-case---sharing-of-non-financial-claims-data">sharing Non-Financial Claims Data</a> that enables other FHIR Implementation Guides to support communication of ExplanationOfBenefit data without financial data. These profiles are not expected to be implemented directly within the context of the consumer directed data exchange use case defined by this guide, but rather from within the context in which external guides may define (e.g. Provider Access API of PDEX).</p>

<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>The determination of inpatient vs. outpatient institutional claims is defined by the Type of Bill. The NUBC manual defines which TOBs are inpatient vs outpatient.</li>
<li>A CPT / HCPCS code may not be available on an inpatient institutional claim. The cardinality of the HL7 base EOB Resource for item.productOrService is 1..1 if .item is provided.&nbsp; Since .item.revenue is required it means that item.productOrService must be populated.&nbsp; Since the profile is not able to relax the cardinality of the resource, it is recommended payers provide a data absent reason when a CPT / HCPCS code is not available.</li>
<li>.diagnosis:&nbsp; ICD-10 / ICD-9 diagnosis codes are defined as CodeableConcepts</li>
<li>.diagnosis.sequence rule:&nbsp; diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of diagnosis.type to identify primary, secondary, etc.&nbsp;</li>
<li>.procedure:&nbsp; ICD-10 / ICD-9 procedure codes are defined as CodeableConcepts</li>
<li>.procedure.sequence rule:&nbsp; procedure.sequence values do not necessarily indicate any order in which the procedure occurred.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of procedure.type to identify primary and secondary procedures</li>
<li>.supportingInfo[DRG]:&nbsp; DRGs require the DRG system; i.e., MS-DRG / AP-DRG / APR-DRG, the DRG version and the code value</li>
<li>.adjudication[benefitpaymentstatus]:&nbsp; in network or out of network payment status for the claim</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) and benefit payment status (benefitpaymentstatus) which each contain a reason code bound to very similar ValueSets that indicate network status. The billing network status indicates the general relationship (often a contract status) the billing provider has with the payer. The benefit payment status indicates how the service or product is covered (in or out of network) in context to its provisioning. These two values may be different.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-intro.md

<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>CPCDS data elements are mapped to EOB header or EOB.item data elements in alignment with claims submission standards.&nbsp; Line item amounts and amount types are to be provided in EOB.item.&nbsp; If a Payer does not have line item amounts, provide the claim amounts and amount types in the EOB header data elements.&nbsp; Total amounts and amount types of the claim are to be provided in EOB.total.</li>
<li>The determination of inpatient vs. outpatient institutional claims is defined by the Type of Bill. The NUBC manual defines which TOBs are inpatient vs outpatient.</li>
<li>A CPT / HCPCS code may not be available on an inpatient institutional claim. The cardinality of the HL7 base EOB Resource for item.productOrService is 1..1 if .item is provided.&nbsp; Since .item.revenue is required it means that item.productOrService must be populated.&nbsp; Since the profile is not able to relax the cardinality of the resource, it is recommended payers provide a data absent reason when a CPT / HCPCS code is not available.</li>
<li>.diagnosis:&nbsp; ICD-10 / ICD-9 diagnosis codes are defined as CodeableConcepts</li>
<li>.diagnosis.sequence rule:&nbsp; diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of diagnosis.type to identify primary, secondary, etc.&nbsp;</li>
<li>.procedure:&nbsp; ICD-10 / ICD-9 procedure codes are defined as CodeableConcepts</li>
<li>.procedure.sequence rule:&nbsp; procedure.sequence values do not necessarily indicate any order in which the procedure occurred.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of procedure.type to identify primary and secondary procedures</li>
<li>.supportingInfo[DRG]:&nbsp; DRGs require the DRG system; i.e., MS-DRG / AP-DRG / APR-DRG, the DRG version and the code value</li>
<li>.adjudication.amount (populate only if item.adjudication is not available):&nbsp; Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>.item.adjudication.amount: &nbsp;Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>.total.amount:&nbsp; Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>.adjudication[benefitpaymentstatus]:&nbsp; in network or out of network payment status for the claim</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) and benefit payment status (benefitpaymentstatus) which each contain a reason code bound to very similar ValueSets that indicate network status. The billing network status indicates the general relationship (often a contract status) the billing provider has with the payer. The benefit payment status indicates how the service or product is covered (in or out of network) in context to its provisioning. These two values may be different.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-intro.md

<h4>Synonyms:</h4>
<ul>
<li>The Implementation Guide considers a health plan patient / beneficiary / member to be synonymous.&nbsp; The subscriber is the member who carries the health coverage.&nbsp; Subscriber synonyms include policy holder / insured.&nbsp; The payer synonyms are insurer / health plan / payor</li>
<li>The practitioner functional roles of rendering, rendering and servicing are synonymous.&nbsp; CPCDS uses rendering</li>
<li>The terms institutional and facility are synonymous.&nbsp; CPCDS uses institutional</li>
<li>The terms allowed and eligible are synonymous.&nbsp; CPCDS uses eligible</li>
<li>The terms disallowed and noncovered are synonymous.&nbsp; CPCDS uses noncovered</li>
</ul>
<h4>Other Payer</h4>
<p>CPCDS modified the concept of primary payer to other payer to accommodate situations when multiple prior payers are involved.&nbsp; Each amount paid by the other payer should be listed separately.</p>
<h4>Paths to the Patient Resource</h4>
<p>There are two paths to get to the Patient Resource and the data elements represented inside the Patient Resource:&nbsp;&nbsp;EOB.patient(Patient) and EOB.insurance.coverage(Coverage).beneficiary(Patient)</p>
<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>.meta.lastUpdated:&nbsp;Payers SHALL provide the last time the data was updated or the date of creation in the payer&rsquo;s system of record, whichever comes last.</li>
<li>.status:&nbsp; value =Expected values are active or cancelled. To comply with the CMS rule, draft EOBs are not required.&nbsp;</li>
<li>.type&nbsp;Defines the Claims profiles. Values from Claim Type Codes are required; data absent reason is not allowed</li>
<li>.use:&nbsp;The CMS rule applies to adjudicated claims; it does not require preauthorizations or predeterminations.</li>
<li>.patient&nbsp; Additional required path:EOB.insurance.coverage(Coverage).beneficiary(Patient).identifier</li>
<li>.insurer&nbsp; Same as insurance.coverage.organization.&nbsp; Party responsible for reimbursing the provider</li>
<li>.outcome:&nbsp; value = complete</li>
<li>.related:&nbsp; .related:  Adjustment requests are used to change an original ExplanationOfBenefit information. The original payment can be increased or decreased, billed units can be changed, or other changes may occur. ExplanationOfBenefit.related captures the identifier of the prior / new ExplanationOfBenefit. 
If the current adjusts a prior ExplanationOfBenefit, .related.reference = the prior ExplanationOfBenefit identifier and related.relationship value = 'prior'. 
If the current ExplanationOfBenefit has been adjusted; related.reference = the ExplanationOfBenefit.identifier of the adjusting ExplanationOfBenefit and related.relationship value = 'replacedby'.   
The .related.reference contains the identifier of the immediately preceding or following ExplanationOfBenefit, not the first or last.</li>
<li>.supportinginfo.sequence rule:&nbsp; client app implementations should look-up supportingInfo elements based on category values instead of sequence values</li>
<li>.careTeam.sequence rule:&nbsp; careTeam.sequence values uniquely identify careTeam members.&nbsp; They do not necessarily indicate any order in which the patient was seen by the careTeam or identify any level of significance of the careTeam to the patient, etc.&nbsp; Client app implementations should not assign any significance to the sequence values.&nbsp;&nbsp;&nbsp;</li>
<li>.insurance:&nbsp;&nbsp;Define an invariant:&nbsp; Will have multiple occurrences on secondary / tertiary, etc. claims.&nbsp; Up to one occurrence, that of the ExplanationOfBenefit.insurer, will have a boolean value = 'True'.&nbsp;</li>
<li>.insurance.focal:&nbsp; If there is an occurrence, with focal = true, EOB.insurance.coverage.payor =&nbsp; EOB.insurer is the same as EOB.insurance.coverage.payor.&nbsp;&nbsp; (Coverage.payor is 1..1).&nbsp; There can be&nbsp; 0 or * occurrences with focal = false</li>
<li>.insurance.coverage:&nbsp; When focal = true, Coverage.payer--&gt; Organization.identifier.&nbsp; When focal = false, EOB.insurance.coverage.display = [name of other carrier]&nbsp;&nbsp;</li>
<li>.insurance.coverage:&nbsp; Same as insurance.coverage.organization.&nbsp; Party responsible for reimbursing the provider.</li>
<li>.item.noteNumber:&nbsp; References number of the associated processNote entered</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Oral-Basis-intro.md

<p>This profile is defines the base requirements for an Oral ExplanationOfBenefit. All of the requirements are an exact subset of the original profile from earlier versions with only the financial data element requirements removed in order to address the use case of <a href="Use_Case.html#use-case---sharing-of-non-financial-claims-data">sharing Non-Financial Claims Data</a> that enables other FHIR Implementation Guides to support communication of ExplanationOfBenefit data without financial data. These profiles are not expected to be implemented directly within the context of the consumer directed data exchange use case defined by this guide, but rather from within the context in which external guides may define (e.g. Provider Access API of PDEX).</p>

<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>.diagnosis.sequence rule:&nbsp; diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of diagnosis.type to identify primary, secondary, etc.&nbsp;</li>
<li>.diagnosis.sequence: &nbsp;sequentially numbers all diagnoses at the header-level. Item-level are referenced from an item using this sequence number</li>
<li>.supportingInfo[servicefacility]:&nbsp; Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rendering Provider.</li>
<li>.item.&nbsp;diagnosisSequence:&nbsp; References the sequence number of the associated diagnosis entered above</li>
<li>.item.productOrService:   CPT / HCPCS procedure codes are defined as CodeableConcepts: A revenue code will not be available on an oral claim</li>
<li>.item.adjudication[benefitpaymentstatus]:&nbsp;&nbsp;in network or out of network payment status for the line</li>
<li>The line item primary body site (tooth or oral cavity) <strong>SHALL</strong> be specified in the .item.bodySite. Additional body sites (tooth or oral cavity) <strong>SHALL</strong> be specified in supportingInfo[additionalbodysite] repetitions with supportingInfo[additionalbodysite].sequence matching the line items .item.informationSequence</li>
<li>All Oral line item subsites (.item.subSite repetitions) apply to all the line item's associated tooth surfaces (item.bodySite and .supportingInfo[additionalbodysite] associated with the line item by referencing supportingInfo[additionalbodysite].sequence through .item.informationSequence)</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) or rendering network status (renderingnetworkstatus). ExplanationOfBenefit.adjudication and ExplanationOfBenefit.item.adjudication elements may contain slices for benefit payment status (benefitpaymentstatus). Each of these adjudication slices contain a reason code bound to very similar ValueSets that indicate network status. The billing or rendering network status indicates the general relationship (often a contract status) the provider has with the payer. The benefit payment status indicates how the service or product (either at the header or item level) is covered (in or out of network) in context to its provisioning. These values may be different across adjudication slices.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Oral-intro.md

<!-- TODO Update all guidance-->

<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>
CPCDS data elements are mapped to EOB header or EOB.item data elements in alignment with claims submission standards.&nbsp; Line item amounts, amount types and the in network or out of network payment status of the line are to be provided in EOB.item.&nbsp; Total amounts, amount types and the in network or out of network payment status of the claim are to be provided in EOB.total If there is a mix of lines paid in network and out of network on a claim, the value of C4BB Payer Benefit Payment Status is &lsquo;Other&rsquo;
</li>
<li>.diagnosis.sequence rule:&nbsp; diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of diagnosis.type to identify primary, secondary, etc.&nbsp;</li>
<li>.diagnosis.sequence: &nbsp;sequentially numbers all diagnoses at the header-level. Item-level are referenced from an item using this sequence number</li>
<li>.supportingInfo[servicefacility]:&nbsp; Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rendering Provider.</li>
<li>.item.&nbsp;diagnosisSequence:&nbsp; References the sequence number of the associated diagnosis entered above</li>
<li>.item.productOrService:   CPT / HCPCS procedure codes are defined as CodeableConcepts: A revenue code will not be available on an oral claim</li>
<li>.item.adjudication[benefitpaymentstatus]:&nbsp;&nbsp;in network or out of network payment status for the line</li>
<li>The line item primary body site (tooth or oral cavity) <strong>SHALL</strong> be specified in the .item.bodySite. Additional body sites (tooth or oral cavity) <strong>SHALL</strong> be specified in supportingInfo[additionalbodysite] repetitions with supportingInfo[additionalbodysite].sequence matching the line items .item.informationSequence</li>
<li>All Oral line item subsites (.item.subSite repetitions) apply to all the line item's associated tooth surfaces (item.bodySite and .supportingInfo[additionalbodysite] associated with the line item by referencing supportingInfo[additionalbodysite].sequence through .item.informationSequence)</li>
<li>.item.adjudication.amount: &nbsp;Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>.total.amount:&nbsp; Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) or rendering network status (renderingnetworkstatus). ExplanationOfBenefit.adjudication and ExplanationOfBenefit.item.adjudication elements may contain slices for benefit payment status (benefitpaymentstatus). Each of these adjudication slices contain a reason code bound to very similar ValueSets that indicate network status. The billing or rendering network status indicates the general relationship (often a contract status) the provider has with the payer. The benefit payment status indicates how the service or product (either at the header or item level) is covered (in or out of network) in context to its provisioning. These values may be different across adjudication slices.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis-intro.md

<p>This profile is defines the base requirements for an Outpatient Institutional ExplanationOfBenefit. All of the requirements are an exact subset of the original profile from earlier versions with only the financial data element requirements removed in order to address the use case of <a href="Use_Case.html#use-case---sharing-of-non-financial-claims-data">sharing Non-Financial Claims Data</a> that enables other FHIR Implementation Guides to support communication of ExplanationOfBenefit data without financial data. These profiles are not expected to be implemented directly within the context of the consumer directed data exchange use case defined by this guide, but rather from within the context in which external guides may define (e.g. Provider Access API of PDEX).</p>

<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>The determination of inpatient vs. outpatient institutional claims is defined by the Type of Bill. The NUBC manual defines which TOBs are inpatient vs outpatient.</p>
.diagnosis:&nbsp; ICD-10 / ICD-9 diagnosis codes are defined as CodeableConcepts &nbsp;</li>
<li>.diagnosis.sequence rule:&nbsp; diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of diagnosis.type to identify primary, secondary, etc.&nbsp;</li>
<li>.item.productOrService:&nbsp; CPT / HCPCS procedure codes are defined as CodeableConcepts</li>
<li>A CPT / HCPCS or HIPPS code may not be available on an outpatient institutional claim. The cardinality of the HL7 base EOB Resource for item.productOrService is 1..1 if .item is provided.&nbsp; Since .item.revenue is required it means that item.productOrService must be populated.&nbsp; Since the profile is not able to relax the cardinality of the resource, it is recommended payers provide a data absent reason when a CPT / HCPCS or HIPPS code is not available.</li>
<li>.adjudication[benefitpaymentstatus]:&nbsp; in network or out of network payment status for the claim</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) and benefit payment status (benefitpaymentstatus) which each contain a reason code bound to very similar ValueSets that indicate network status. The billing network status indicates the general relationship (often a contract status) the billing provider has with the payer. The benefit payment status indicates how the service or product is covered (in or out of network) in context to its provisioning. These two values may be different.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-intro.md

<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>CPCDS data elements are mapped to EOB header or EOB.item data elements in alignment with claims submission standards.&nbsp; Line item amounts and amount types are to be provided in EOB.item.&nbsp; If a Payer does not have line item amounts, provide the claim amounts and amount types in the EOB header data elements.&nbsp; Total amounts and amount types of the claim are to be provided in EOB.total.
</li>
<li>The determination of inpatient vs. outpatient institutional claims is defined by the Type of Bill. The NUBC manual defines which TOBs are inpatient vs outpatient.</p>
.diagnosis:&nbsp; ICD-10 / ICD-9 diagnosis codes are defined as CodeableConcepts &nbsp;</li>
<li>.diagnosis.sequence rule:&nbsp; diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of diagnosis.type to identify primary, secondary, etc.&nbsp;</li>
<li>.item.productOrService:&nbsp; CPT / HCPCS procedure codes are defined as CodeableConcepts</li>
<li>A CPT / HCPCS or HIPPS code may not be available on an outpatient institutional claim. The cardinality of the HL7 base EOB Resource for item.productOrService is 1..1 if .item is provided.&nbsp; Since .item.revenue is required it means that item.productOrService must be populated.&nbsp; Since the profile is not able to relax the cardinality of the resource, it is recommended payers provide a data absent reason when a CPT / HCPCS or HIPPS code is not available.</li>
<li>.adjudication.amount (populate only if item.adjudication is not available):&nbsp; Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>.item.adjudication.amount: &nbsp;Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>.total.amount:&nbsp; Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>.adjudication[benefitpaymentstatus]:&nbsp; in network or out of network payment status for the claim</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) and benefit payment status (benefitpaymentstatus) which each contain a reason code bound to very similar ValueSets that indicate network status. The billing network status indicates the general relationship (often a contract status) the billing provider has with the payer. The benefit payment status indicates how the service or product is covered (in or out of network) in context to its provisioning. These two values may be different.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy-Basis-intro.md

<p>This profile is defines the base requirements for a Pharmacy ExplanationOfBenefit. All of the requirements are an exact subset of the original profile from earlier versions with only the financial data element requirements removed in order to address the use case of <a href="Use_Case.html#use-case---sharing-of-non-financial-claims-data">sharing Non-Financial Claims Data</a> that enables other FHIR Implementation Guides to support communication of ExplanationOfBenefit data without financial data. These profiles are not expected to be implemented directly within the context of the consumer directed data exchange use case defined by this guide, but rather from within the context in which external guides may define (e.g. Provider Access API of PDEX).</p>
<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>ExplanationOfBenefit.item.productOrService:&nbsp; values are NDC Codes when Compound Code (MapID 78) = 0 or 1.&nbsp; When the Compound Code = 2, productOrService = "compound" and map the ingredient to ExplanationOfBenefit.item.detail.productOrService</li>
<li>ExplanationOfBenefit.item.productOrService and item.detail.productOrService: Payers shall provide an 11-digit NDC.  For additional information, reference the Other useful Information in the HL7 Terminology Authority - External Terminologies - NDC Confluence site, <a href="https://confluence.hl7.org/pages/viewpage.action?pageId=97453858 ">https://confluence.hl7.org/pages/viewpage.action?pageId=97453858</a></li>
<li>ExplanationOfBenefit.item.quantity:&nbsp; populate for all Compound Code values.&nbsp; When the Compound Code = 2, if available, map the ingredient to ExplanationOfBenefit.item.detail.quantity</li>
<li>ExplanationOfBenefit.adjudication[benefitpaymentstatus]:&nbsp; in network or out of network payment status for the claim</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) and benefit payment status (benefitpaymentstatus) which each contain a reason code bound to very similar ValueSets that indicate network status. The billing network status indicates the general relationship (often a contract status) the billing provider has with the payer. The benefit payment status indicates how the service or product is covered (in or out of network) in context to its provisioning. These two values may be different.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy-intro.md

<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>CPCDS data elements are mapped to EOB header or EOB.item data elements in alignment with claims submission standards.&nbsp; Line item amounts, amount types and the in network or out of network payment status of the line are to be provided in EOB.item.&nbsp; Total amounts and amount types of the claim are to be provided in EOB.total.</li>
<li>ExplanationOfBenefit.item.productOrService:&nbsp; values are NDC Codes when Compound Code (MapID 78) = 0 or 1.&nbsp; When the Compound Code = 2, productOrService = "compound" and map the ingredient to ExplanationOfBenefit.item.detail.productOrService</li>
<li>ExplanationOfBenefit.item.productOrService and item.detail.productOrService: Payers shall provide an 11-digit NDC.  For additional information, reference the Other useful Information in the HL7 Terminology Authority - External Terminologies - NDC Confluence site, <a href="https://confluence.hl7.org/pages/viewpage.action?pageId=97453858 ">https://confluence.hl7.org/pages/viewpage.action?pageId=97453858</a></li>
<li>ExplanationOfBenefit.item.quantity:&nbsp; populate for all Compound Code values.&nbsp; When the Compound Code = 2, if available, map the ingredient to ExplanationOfBenefit.item.detail.quantity</li>
<li>ExplanationOfBenefit.item.adjudication.amount: &nbsp;Eligible amount = ingredient cost + dispensing fee + sales tax + vaccine administration fee.&nbsp; Excludes manufacturer discounts.&nbsp; If benefit payment status code = 'Y', discount = submitted &ndash; noncovered &ndash; eligible; otherwise discount = 0.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient).&nbsp; The eligible amount - the member liability is the payment amount to the provider (paidtoprovider).&nbsp;</li>
<li>ExplanationOfBenefit.total.amount:&nbsp; Eligible amount = ingredient cost + dispensing fee + sales tax + vaccine administration fee.&nbsp; Excludes manufacturer discounts.&nbsp; If benefit payment status code = 'Y', discount = submitted &ndash; noncovered &ndash; eligible; otherwise discount = 0.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient).&nbsp; The eligible amount - the member liability is the payment amount to the provider (paidtoprovider).&nbsp;</li>
<li>ExplanationOfBenefit.adjudication[benefitpaymentstatus]:&nbsp; in network or out of network payment status for the claim</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) and benefit payment status (benefitpaymentstatus) which each contain a reason code bound to very similar ValueSets that indicate network status. The billing network status indicates the general relationship (often a contract status) the billing provider has with the payer. The benefit payment status indicates how the service or product is covered (in or out of network) in context to its provisioning. These two values may be different.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-Basis-intro.md

<p>This profile is defines the base requirements for a Professional or Non-Clinician ExplanationOfBenefit. All of the requirements are an exact subset of the original profile from earlier versions with only the financial data element requirements removed in order to address the use case of <a href="Use_Case.html#use-case---sharing-of-non-financial-claims-data">sharing Non-Financial Claims Data</a> that enables other FHIR Implementation Guides to support communication of ExplanationOfBenefit data without financial data. These profiles are not expected to be implemented directly within the context of the consumer directed data exchange use case defined by this guide, but rather from within the context in which external guides may define (e.g. Provider Access API of PDEX).</p>

<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>.diagnosis.sequence rule:&nbsp; diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of diagnosis.type to identify primary, secondary, etc.&nbsp;</li>
<li>.diagnosis.sequence: &nbsp;sequentially numbers all diagnoses at the header-level. Item-level are referenced from an item using this sequence number</li>
<li>.supportingInfo[servicefacility]:&nbsp; Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rendering Provider.</li>
<li>.item.&nbsp;diagnosisSequence:&nbsp; References the sequence number of the associated diagnosis entered above</li>
<li>.item.productOrService: &nbsp; CPT / HCPCS procedure codes are defined as CodeableConcepts:  A revenue code will not be available on a professional / non-clinician claim .  The cardinality of the HL7 base EOB Resource for .item.revenue is 1..1 if .item is provided.  Since item.productOrService is required it means that .item.revenue must be populated.  Since the profile is not able to relax the cardinality of the resource, it is recommended payers provide a data absent reason for item.revenue.</li>
<li>A CPT / HCPCS code may not be available on a professional nonclinician vision claim (vision only). The cardinality of the HL7 base EOB Resource for item.productOrService is 1..1 if .item is provided.&nbsp; Since .item.revenue is required it means that item.productOrService must be populated.&nbsp; Since the profile is not able to relax the cardinality of the resource, it is recommended payers provide a data absent reason when a CPT / HCPCS or code is not available.</li>
<li>Every supportingInfo repetitions with a Transportation Services Category code need to be associated with at least one line item by referencing supportingInfo.sequence through .item.informationSequence.</li>
<li>item.adjudication[benefitpaymentstatus]:&nbsp;&nbsp;in network or out of network payment status for the line</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) or rendering network status (renderingnetworkstatus). ExplanationOfBenefit.adjudication and ExplanationOfBenefit.item.adjudication elements may contain slices for benefit payment status (benefitpaymentstatus). Each of these adjudication slices contain a reason code bound to very similar ValueSets that indicate network status. The billing or rendering network status indicates the general relationship (often a contract status) the provider has with the payer. The benefit payment status indicates how the service or product (either at the header or item level) is covered (in or out of network) in context to its provisioning. These values may be different across adjudication slices.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-intro.md

<h4>Notes on Fields</h4>
<ul>
<li>The EOB FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>
CPCDS data elements are mapped to EOB header or EOB.item data elements in alignment with claims submission standards.&nbsp; Line item amounts, amount types and the in network or out of network payment status of the line are to be provided in EOB.item.&nbsp; Total amounts, amount types and the in network or out of network payment status of the claim are to be provided in EOB.total If there is a mix of lines paid in network and out of network on a claim, the value of C4BB Payer Benefit Payment Status is &lsquo;Other&rsquo;
</li>
<li>.diagnosis.sequence rule:&nbsp; diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.&nbsp; client app implementations should not assign any significance to the sequence values.&nbsp; client app implementations should use the values of diagnosis.type to identify primary, secondary, etc.&nbsp;</li>
<li>.diagnosis.sequence: &nbsp;sequentially numbers all diagnoses at the header-level. Item-level are referenced from an item using this sequence number</li>
<li>.supportingInfo[servicefacility]:&nbsp; Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rendering Provider.</li>
<li>.item.&nbsp;diagnosisSequence:&nbsp; References the sequence number of the associated diagnosis entered above</li>
<li>.item.productOrService: &nbsp; CPT / HCPCS procedure codes are defined as CodeableConcepts:  A revenue code will not be available on a professional / non-clinician claim .  The cardinality of the HL7 base EOB Resource for .item.revenue is 1..1 if .item is provided.  Since item.productOrService is required it means that .item.revenue must be populated.  Since the profile is not able to relax the cardinality of the resource, it is recommended payers provide a data absent reason for item.revenue.</li>
<li>A CPT / HCPCS code may not be available on a professional nonclinician vision claim (vision only). The cardinality of the HL7 base EOB Resource for item.productOrService is 1..1 if .item is provided.&nbsp; Since .item.revenue is required it means that item.productOrService must be populated.&nbsp; Since the profile is not able to relax the cardinality of the resource, it is recommended payers provide a data absent reason when a CPT / HCPCS or code is not available.</li>
<li>Every supportingInfo repetitions with a Transportation Services Category code need to be associated with at least one line item by referencing supportingInfo.sequence through .item.informationSequence.</li>
<li>item.adjudication[benefitpaymentstatus]:&nbsp;&nbsp;in network or out of network payment status for the line</li>
<li>.item.adjudication.amount: &nbsp;Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>.total.amount:&nbsp; Eligible amount = submitted amount - the noncovered amount - discount.&nbsp; The subscriber pays the member liability = deductible + coinsurance + copay + noncovered.&nbsp; (part of the member liability may have already been paid to the provider as paidbypatient). The eligible amount - the member liability is the payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>
<li>ExplanationOfBenefit.adjudication elements may contain slices for both billing network status (billingnetworkstatus) or rendering network status (renderingnetworkstatus). ExplanationOfBenefit.adjudication and ExplanationOfBenefit.item.adjudication elements may contain slices for benefit payment status (benefitpaymentstatus). Each of these adjudication slices contain a reason code bound to very similar ValueSets that indicate network status. The billing or rendering network status indicates the general relationship (often a contract status) the provider has with the payer. The benefit payment status indicates how the service or product (either at the header or item level) is covered (in or out of network) in context to its provisioning. These values may be different across adjudication slices.<br/>
An example of this is where an in network provider that has billed for a service that is not within the scope of the contract of service with the payer.</li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>

---

// File: input/pagecontent/StructureDefinition-C4BB-Organization-intro.md

<h4>Notes on Fields</h4>
<ul>
<li>The Organization FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>Payers may decide to provide either the data that was in effect as of the date of service or the current data<strong>.&nbsp;</strong></li>
<li>.identifier[NPI]:&nbsp; Value is conditional depending on the Referring Resource.&nbsp; Populate Service Facility NPI with the value 'NPI has not been assigned' if an NPI has not been assigned to the Service Location Organization</li>
<li>.address:&nbsp; Enter address of the location where the services were rendered.&nbsp; If the location is a component of the Billing Provider, do not populate this data element</li>
<li>.meta.lastUpdated:&nbsp;Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last.  Apps will use the meta.lastUpdated value to determine if the Reference resources are as of the current date or date of service. </li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>
<p>&nbsp;</p>


---

// File: input/pagecontent/StructureDefinition-C4BB-Patient-intro.md

<h4>Notes on Fields</h4>
<ul>
<li>The Patient FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>The Member Id is the identifier payers assign to a beneficiary for a contract; it may be different for various lines of business; ie. QHP vs MA. The Unique Member Id is a mastered identifier across all lines of business.</li>
<li>Payers may decide to provide either the data that was in effect as of the date of service or the current data.</li>
<li>.meta.lastUpdated:&nbsp;Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last.  Apps will use the meta.lastUpdated value to determine if the Reference resources are as of the current date or date of service. </li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>
<p>&nbsp;</p>


---

// File: input/pagecontent/StructureDefinition-C4BB-Practitioner-intro.md

<h4>Notes on Fields</h4>
<ul>
<li>The Practitioner FHIR Resource defines a comprehensive set of data elements.&nbsp; Many of them are not relevant to this use case.&nbsp; When reviewing the Profile Snapshot, several data elements previously hidden are now exposed.&nbsp; Fields intended for consideration to be provided in the API are marked as <a href="Conformance_Requirements.html#must-support">Must Support</a>; i.e., a red <span style="color: #ffffff; background-color: #ff0000;">S</span> or have a minimum cardinality of 1.&nbsp; All other data elements are not expected to be sent by a Responder; if they are sent a Requestor can choose to ignore them</li>
<li>Payers may decide to provide either the data that was in effect as of the date of service or the current data.</li>
<li>.identifier[NPI], .identifier[tax]: One of these identifiers must be provided</li>
<li>.meta.lastUpdated:&nbsp;Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last.  Apps will use the meta.lastUpdated value to determine if the Reference resources are as of the current date or date of service. </li>
<li>The CPCDS data elements are defined in the data element comments.&nbsp; The numbers, e.g. (1), following the data element descriptions in the comments correlate to the MapID in the&nbsp;<a href="CPCDSDataDictionary.docx" >CPCDS Data Dictionary</a>&nbsp;and the&nbsp;<a href="CPCDStoFHIRProfilesMapping.xlsx">Mapping Worksheet</a>&nbsp;as described&nbsp;<a href="Common_Payer_Consumer_Data_Set.html">here.</a></li>
<li>meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest.</li>
</ul>



---

// File: input/pagecontent/Terminology_Licensure.md

### Code Systems Requiring Licenses

#### Access to Licensed Code Systems
This HL7 specification contains and references intellectual property owned by third parties ("Third Party IP"). Implementers and testers of this specification SHALL abide by the license requirements for each terminology content artifact utilized within a functioning implementation. Terminology licenses SHALL be obtained from the Third Party IP owner for each code system and/or other specified artifact used. It is the sole responsibility of each organization deploying or testing this specification to ensure their implementations comply with licensing requirements of each Third Party IP.

#### Licensed Industry Standard Code Systems
This IG includes value set bindings to code systems that reference industry standard codes which require implementers to purchase a license before the coded concepts can be used. The following information summarizes the set of licensed Code Systems required by this IG and provides links to the information about where to go to obtain a license.
<ul>
<li><a href="http://www.ama-assn.org/go/cpt">AMA CPT</a>: The CPT procedure and modifier codes are owned by the American Medical Association.</li>
<li><a href="http://www.x12.org/codes/claim-adjustment-reason-codes/">X12</a>: CARC (Claim Adjustment Reason Codes) are owned by X12.</li>
<li><a href="https://www.nubc.org">NUBC</a>: The NUBC secretariat is the American Hospital Association.</li>
<li><a href="http://www.nucc.org/">NUCC</a>: National Uniform Claim Committee (NUCC) is presently maintaining the Taxonomy code set. The codes are free and publicly available for download and use. If the use however is &ldquo;For commercial use, including sales or licensing, a license must be obtained&rdquo;. It would be appropriate for an app developer to file the license form just like they would for any other code set; however, there is no fee.</li>
<li><a href="https://www.ncpdp.org">NCPDP</a>: Retail Pharmacy data standards are defined by the NCPDP.</li>
<li><a href="https://www.3m.com/3M/en_US/health-information-systems-us/drive-value-based-care/patient-classification-methodologies/apr-drgs/">3M APR-DRG</a>: AP-DRGs and APR-DRGs are owned by 3M.  Use of AP-DRGs and APR-DRGs require a license.  
</li>
</ul>

### Code Systems Not Requiring Licenses
This IG includes value set bindings to code systems that are industry standard codes available for use without licenses. The following information summarizes the set of Code Systems required by this IG that are available for use:
<ul>
<li><a href="https://www.icd10data.com/ICD10CM/Codes">ICD-CM Diagnosis Codes (ICD-10-CM)</a>: International Statistical Classification of Diseases and Related Health Problems (ICD). This IG will use version 10. The ICD-10-CM code set is maintained by the National Center for Health Statistics (NCHS) of the Centers for Disease Control and Prevention (CDC) for use in the United States. It is based on ICD-10, which was developed by the World Health Organization (WHO) and is used internationally a medical classification.</li>
<li><a href="https://www.icd10data.com/ICD10PCS/Codes">ICD-Procedure Codes (ICD-PCS)</a>: The ICD-10-PCS code set is owned by CMS.</li>
<li><a href="https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software.html">DRGs</a>: MS-DRGs are owned by CMS. MS-DRGs are used for the Medicare population.</li>
<li><a href="https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets/Alpha-Numeric-HCPCS-Items/2020-HCPCS-Record-Layout">HCPCS Level II Procedure and Modifier Codes</a>: Primarily include non-physician products, supplies, and procedures not included in CPT. They are owned by CMS and are available for use.</li>
<li><a href="http://hl7.org/fhir/sid/ndc.html">NDC (National Drug Codes)</a>: The US Federal Drug Administration (FDA) Data Standards Council assigns the first 5 digits of the 11 digit code.</li>
<li><a href="http://www.wpc-edi.com/reference/codelists/healthcare/remittance-advice-remark-codes">RARCCodes</a>: The RARC codes are owned by CMS.</li>
<li><a href="https://www.ada.org/publications/ada-catalog-products/cdt-books-and-more">ADA CDT</a>: The CDT procedure and modifier codes are owned by the American Dental Association.</li>
</ul>



---

// File: input/pagecontent/Use_Case.md

<a name="terms-and-concepts"></a>
### Terms and Concepts
<table class="codes" border="1">
<thead>
<tr>
<td><strong>Term</strong></td>
<td><strong>Definition</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td>Subscriber</td>
<td>An individual or entity that selects benefits offered by an entity, such as an employer, government, or insurance company</td>
</tr>
<tr>
<td>Dependent</td>
<td>An individual, other than the subscriber, who has insurance coverage under the benefits selected by a subscriber</td>
</tr>
<tr>
<td>Member</td>
<td>Any individual covered by the benefits offered by an entity, such as an employer or insurance company</td>
</tr>
<tr>
<td>Beneficiary</td>
<td>Any individual that selects or is covered by benefits provided by government programs</td>
</tr>
<tr>
<td>Patient</td>
<td>
<p>An individual who has received, is receiving or intends to receive health care services. (Health care services as defined by federal and state regulations.)</p>
</td>
</tr>
<tr>
<td>Personal Representative</td>
<td>Per the HIPAA privacy regulations at 45 CFR 164.502(g), a <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/personal-representatives/index.html">personal-representative</a> is someone authorized under state or other applicable law to act on behalf of the individual in making health care related decisions (such as a parent, guardian, or person with a medical power of attorney)</td>
</tr>
<tr>
<td>Coordination of Benefits</td>
<td>The process of determining which of two or more insurance policies will have the primary responsibility of processing/paying a claim and the extent to which the other policies will contribute</td>
</tr>
<tr>
<td>Payer</td>
<td>
<p>Public or private party which offers and/or administers health insurance plan(s) or coverage and/or pays claims directly or indirectly. Examples include:</p>
<ul>
<li>Insurance Company</li>
<li>Health Maintenance Organization</li>
<li>Medicare</li>
<li>Third-party Administrator</li>
<li>Repricer</li>
</ul>
</td>
</tr>
<tr>
<td>Encounter data vs Claims</td>
<td>Encounter data means the information or data relating to the receipt of any item(s) or service(s) by an enrollee under a contract between a State and a managed care plan. Encounter data are conceptually equivalent to the paid claims records that state Medicaid agencies create when they pay providers on a FFS basis</td>
</tr>
<tr>
<td>EOB.careteam</td>
<td>The members of the team or organization who contributed to the service to the patient submitted on the claim by the billing provider to the payer</td>
</tr>
<tr>
<td>CareTeam Resource</td>
<td>The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient</td>
</tr>
</tbody>
</table>
<a name="use-cases"></a>
### Use Case - Consumer Access to their Claims Data
<h4>Background</h4>
<p>Consumer-directed exchange occurs when a consumer or an authorized caregiver invokes their HIPAA Individual Right of Access (45 CFR 164.524) and requests their digital health information from a HIPAA covered entity (CE) via an application or other third-party data steward.&nbsp;</p>
<p><img style="width: 85%; float: none; align: middle;" src="UseCaseDiagram.jpg"/></p>
<h4>Technical Workflow</h4>
<p><img style="width: 100%; float: none; align: middle;" src="CARINSequence.png" /> Actors:</p>
<ul>
<li>Consumer (aka Subscriber, Beneficiary, Patient, or Personal Representative)</li>
<li>Consumer App (aka digital third-party application selected by and primarily for the Consumer with a consumer-facing user interface)</li>
<li>Health Plan API (aka Payer, Covered Entity)</li>
<li>Health Plan&rsquo;s Identity and Access Authorization server</li>
</ul>
<p>Flow:</p>
<ol>
<li>Consumer App presents a list of potential Payers / Health Plans that can be accessed by the Consumer.</li>
<li>Consumer selects the Payer / Health Plan.</li>
<li>Consumer App opens the link to the Health Plan's Identity and Access Authorization server.</li>
<li>Consumer enters the credentials.</li>
<li>Health Plan's Identity and Access Authorization server validates the credentials, generates and returns to the Consumer App an OIDC token with Consumer and authorized patient/beneficiary identities encoded.</li>
<li>Consumer App successfully links the user to the Payer / Health Plan and notifies the Consumer.</li>
<li>Consumer requests the Consumer App to fetch Explanation Of Benefit records.</li>
<li>Consumer App generates and sends to the Health Plan's CARIN IG for Blue Button&reg; enabled FHIR API a request (which includes Patient ID, and token from the step #5) to fetch the Explanation Of Benefit (EOB) and supporting reference FHIR resources.</li>
<li>Health Plan's CARIN IG for Blue Button&reg; enabled FHIR API responds with a bundle of the requested EOB and supporting reference FHIR resources.</li>
<li>Consumer App presents the EOB and supporting reference FHIR resources to the Consumer.</li>
</ol>

### Use Case - Sharing of Non-Financial Claims Data

#### Background

The CMS Advancing Interoperability and Improving Prior Authorization Processes Proposed Rule (CMS-0057-P) requires Health Plans to adjudicated claims and encounter data (profiled in this IG available) for the Provider Access and Payer-to-Payer APIs. The data available via these APIs would be the information a Health Plan makes available to the member, with the exception that it excludes provider remittances and patient cost-sharing information.

This IG addresses consumer access to claims and encounter data and does not directly address these other APIs. It does, however, contain profiles structured in a way that may used by IGs that do define the requirements of these APIs, like the Payer Data Exchange (PDex) IG, to share this information.



The below diagram shows the structure of the profiles in this IG and how they are anticipated to be used by the PDex IG where the “Basis” profiles contain all of the requirements for each type of EOB without financial data requirements and the Full EOB profiles to be used for consumer access.

<p><img style="width: 85%; float: none; align: middle;" src="carin-bb-eob-profile-structure.png"/></p>
</span>

---

// File: input/fsh/README.md

# carin-bb-fsh
CARIN Blue Button using FHIR Shorthand


---

// File: input/fsh/Aliases.fsh

Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $payeetype = http://terminology.hl7.org/CodeSystem/payeetype
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $subscriber-relationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship
Alias: $coverage-class = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: $C4BBIdentifierType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType
Alias: $claim-type = http://terminology.hl7.org/CodeSystem/claim-type
Alias: $C4BBInstitutionalClaimSubType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType
Alias: $C4BBSupportingInfoType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType
Alias: $C4BBPayerAdjudicationStatus = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBPayerAdjudicationStatus
Alias: $TypeOfBill = https://www.nubc.org/CodeSystem/TypeOfBill
Alias: $PointOfOrigin = https://www.nubc.org/CodeSystem/PointOfOrigin
Alias: $PriorityTypeOfAdmitOrVisit = https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit
Alias: $PatDischargeStatus = https://www.nubc.org/CodeSystem/PatDischargeStatus
Alias: $AHANUBCPatientDischargeStatus = https://www.nubc.org/CodeSystem/PatDischargeStatus
Alias: $AHANUBCPointOfOriginForAdmissionOrVisitNewborn = https://www.nubc.org/CodeSystem/PointOfOriginNewborn
Alias: $AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn = https://www.nubc.org/CodeSystem/PointOfOrigin
Alias: $AHANUBCPriorityTypeOfAdmissionOrVisit = https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit
Alias: $AHANUBCRevenueCodes = https://www.nubc.org/CodeSystem/RevenueCodes
Alias: $AHANUBCTypeOfBill = https://www.nubc.org/CodeSystem/TypeOfBill
Alias: $icd-10-cm = http://hl7.org/fhir/sid/icd-10-cm
Alias: $ex-diagnosistype = http://terminology.hl7.org/CodeSystem/ex-diagnosistype
Alias: $data-absent-reason = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: $C4BBAdjudicationDiscriminator = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator
Alias: $C4BBAdjudication = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication
Alias: $adjudication = http://terminology.hl7.org/CodeSystem/adjudication
Alias: $cdt = http://ada.org/cdt
Alias: $ADADentalProcedureCode = http://www.ada.org/cdt
Alias: $Place_of_Service_Code_Set = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set
Alias: $ADAUniversalToothDesignationSystem = http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem
Alias: $ADAAreaOralCavitySystem = http://terminology.hl7.org/CodeSystem/ADAAreaOralCavitySystem
Alias: $ADAToothSurfaceCodes = http://terminology.hl7.org/CodeSystem/ADAToothSurfaceCodes
Alias: $C4BBClaimCareTeamRole = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole
Alias: $provider-taxonomy = http://nucc.org/provider-taxonomy
Alias: $C4BBClaimDiagnosisType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType
Alias: $NCPDPDispensedAsWrittenOrProductSelectionCode = http://terminology.hl7.org/CodeSystem/NCPDPDispensedAsWrittenOrProductSelectionCode
Alias: $NCPDPBrandGenericIndicator = http://terminology.hl7.org/CodeSystem/NCPDPBrandGenericIndicator
Alias: $NCPDPPrescriptionOriginCode = http://terminology.hl7.org/CodeSystem/NCPDPPrescriptionOriginCode
Alias: $NCPDPRejectCode = http://terminology.hl7.org/CodeSystem/NCPDPRejectCode
Alias: $NCPDPCompoundCode = http://terminology.hl7.org/CodeSystem/NCPDPCompoundCode
Alias: $ndc = http://hl7.org/fhir/sid/ndc
Alias: $cpt = http://www.ama-assn.org/go/cpt
Alias: $C4BBClaimProcedureType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType
Alias: $ICD10 = http://www.cms.gov/Medicare/Coding/ICD10
Alias: $adjudication_1 = https://bluebutton.cms.gov/resources/codesystem/adjudication
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $2.16.840.1.114222.4.11.1066 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066

//USCore -
Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient


Alias: $us-core-race = http://hl7.org/fhir/us/core/StructureDefinition/us-core-race
Alias: $us-core-ethnicity = http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity
Alias: $us-core-birthsex = http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex
Alias: $us-core-usps-state = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state


Alias: $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias: $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias: $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias: $USCoreProviderRole = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
Alias: $USCoreProviderSpecialty = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066

Alias: $HL7RelatedClaimRelationshipCS = http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship
Alias: $SubscriberRelationship = http://hl7.org/fhir/ValueSet/subscriber-relationship
Alias: $HL7AdjudicationCS = 	http://terminology.hl7.org/CodeSystem/adjudication
Alias: $HL7ClaimType = http://hl7.org/fhir/ValueSet/claim-type
Alias: $HL7ClaimTypeCS = http://terminology.hl7.org/CodeSystem/claim-type
Alias: $CoverageClassCS = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: $OrganizationIdentifierType   =  http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $IdentifierType   =  http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $AdjudicationTypeExt = http://hl7.org/fhir/us/carin-bb/StructureDefinition/AdjudicationType
Alias: $HL7DiagnosisType = http://terminology.hl7.org/CodeSystem/ex-diagnosistype
Alias: $HL7ProcedureType = http://terminology.hl7.org/CodeSystem/ex-procedure-type
Alias: $HL7PayeeType = http://terminology.hl7.org/CodeSystem/payeetype
Alias: $HL7IdentifierType = http://terminology.hl7.org/CodeSystem/v2-0203

Alias: $HL7DataAbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason

//Alias: $ToothSurfaceVS = http://hl7.org/fhir/ValueSet/surface
//Alias: $ToothSurfaceCS = http://terminology.hl7.org/CodeSystem/FDI-surface
Alias: $ToothNumber = http://hl7.org/fhir/ValueSet/tooth

Alias: $CareTeamRoleCodeCS = http://terminology.hl7.org/CodeSystem/claimcareteamrole|1.0.0
Alias: $PresentOnAdmissionV2CS = urn:oid:2.16.840.1.113883.6.301.11
Alias: $NAICCodeCS = urn:oid:2.16.840.1.113883.6.300
Alias: $TAXCodeCS = urn:oid:2.16.840.1.113883.4.4

//Alias:  $NUBCPointOfOriginForAdmissionOrVisitCS = https://www.nubc.org/point-of-origin-for-admission-or-visit
Alias: $NUBCPatientDischargeCS   = https://www.nubc.org/patient-discharge
Alias: $AHANUBCPriorityOfAdmissionOrVisitCS = https://www.nubc.org/priority-type-of-admission-or-visit
Alias: $AHANUBCPointOfOriginForAdmissionOrVisitOID = urn:oid:2.16.840.1.113883.6.301.4
Alias: $AHANUBCTypeOfBillOID = urn:oid:2.16.840.1.113883.18.290
Alias: $AHANUBCRevenueCodeOID = urn:oid:2.16.840.1.113883.13.18
Alias: $AHANUBCPatientDischargeStatusOID = urn:oid:2.16.840.1.113883.6.301.5
//Alias: $AHANUBCPresentOnAdmissionOID  = urn:oid:2.16.840.1.113883.6.301.11
Alias: $CMSPresentOnAdmissionIndicator = https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HospitalAcqCond/Coding

Alias: $X12CARCCS = https://x12.org/codes/claim-adjustment-reason-codes
Alias: $CMSRARCCS = https://x12.org/codes/remittance-advice-remark-codes
Alias: $CMSRemittanceAdviceRemarkCodes = https://x12.org/codes/remittance-advice-remark-codes


Alias: $X12ClaimAdjustmentReasonCodes = https://x12.org/codes/claim-adjustment-reason-codes

Alias: $X12AmbulanceTransReas = https://x12.org/codesystem.x12.org/ambulance-transport-reason-codes


Alias: $ICD10CM = http://hl7.org/fhir/sid/icd-10-cm
Alias: $ICD9CM = http://hl7.org/fhir/sid/icd-9-cm
Alias: $ICD10PCS = http://www.cms.gov/Medicare/Coding/ICD10
Alias: $ICD9PCS = http://www.cms.gov/Medicare/Coding/ICD9
Alias: $CPT = http://www.ama-assn.org/go/cpt
Alias: $HCPCS = https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
Alias: $CMSHCPCSCodes = https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
Alias: $CMSHIPPSCodes = https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes
Alias: $CMSMSDRG = https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software
Alias: $THREEMAPDRG = http://uri.hddaccess.com/cs/apdrg
Alias: $THREEMAPRDRG = http://uri.hddaccess.com/cs/aprdrg
Alias: $CMSPlaceofServiceCodes = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set
//Alias:   $CPTALLVS = http://hl7.org/fhir/ValueSet/cpt-all
//Alias:   $RXN = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $FDANationalDrugCode = http://hl7.org/fhir/sid/ndc
Alias: $NUCCProviderTaxonomy = http://nucc.org/provider-taxonomy

Alias: $SupportingInfoCS = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType
Alias: $C4BBAdjudicationCS = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication
Alias: $C4BBIdentifierTypeCS = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType
Alias: $C4BBClaimDiagnosisTypeCS = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType
Alias: $C4BBAdjudicationDiscriminator =  http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator

Alias: $R5CoverageKind = http://hl7.org/fhir/5.0/StructureDefinition/extension-Coverage.kind

Alias: $compliesWithProfile = http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile

---

// File: input/fsh/CodeSystems.fsh

// Contains Codesystems Defined WITHIN this IG
// CodeSystemStubs.fsh contains stubs for external codesystems.
CodeSystem: C4BBAdjudication
Title: "C4BB Adjudication Code System"
Description: "Describes the various amount fields used when payers receive and adjudicate a claim.  It complements the values defined in http://terminology.hl7.org/CodeSystem/adjudication.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #coinsurance "Co-insurance" "The amount the insured individual pays, as a set percentage of the cost of covered medical services, as an out-of-pocket payment to the provider. Example: Insured pays 20% and the insurer pays 80%."
* #noncovered "Noncovered" "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* #priorpayerpaid "Prior payer paid" "The reduction in the payment amount to reflect the carrier as a secondary payer."
* #paidbypatient "Paid by patient" "The total amount paid by the patient without specifying the source."
* #paidbypatientcash "Paid by patient - cash" "The amount paid by the patient using cash, check, or other personal account."
* #paidbypatientother "Paid by patient - other" "The amount paid by the patient using a method different than cash (cash, check, or personal account) or health account."
* #paidbypatienthealthaccount "Paid by patient - health account" "The amount paid by the patient using another method like HSA, HRA, FSA or other type of health account."
* #paidtoprovider "Paid to provider" "The amount paid to the provider."
* #paidtopatient "Paid to patient" "paid to patient"
* #memberliability "Member liability" "The amount of the member's liability."
* #discount "Discount" "The amount of the discount"
* #drugcost "Drug cost" "Price paid for the drug excluding mfr or other discounts.  It typically is the sum of the following components: ingredient cost, dispensing fee, sales tax, and vaccine administration"

//* #paid "Paid" "paid"
//* #denied "Denied"  "denied"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."


CodeSystem: C4BBPayeeType
Title: "C4BB Payee Type Code System"
Description: "Indicates that a payee type may be a beneficiary.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #beneficiary "Beneficiary" "The beneficiary (patient) will be reimbursed."
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBClaimDiagnosisType
Title: "C4BB Claim Diagnosis Type Code System"
Description: "Indicates if the institutional diagnosis is admitting, principal, secondary, other, an external cause of injury or a patient reason for visit.  Complements http://terminology.hl7.org/CodeSystem/ex-diagnosistype.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #externalcauseofinjury "External Cause of Injury" "Required when an external cause of injury is needed to describe the injury"
* #patientreasonforvisit "Patient Reason for Visit" "Identifies the patient's reason for the outpatient institutional visit"
* #other "Other"  "Required when other conditions coexist or develop subsequently during the treatment"
* #secondary  "Secondary"  "Required when necessary to report additional diagnoses on professional and non-clinician claims"
//* #principal "Principal" "Principal"
//* #admitting "Admitting" "Admitting"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBClaimCareTeamRole
Title: "C4BB Claim Care Team Role Code System"
Description: "Describes functional roles of the care team members.  Complements http://terminology.hl7.org/CodeSystem/claimcareteamrole.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #attending  "Attending"  "The attending physician"
* #referring "Referring"  "The referring physician"
* #operating "Operating"  "The operating physician"
* #otheroperating "Other Operating"  "The other operating physician"
* #rendering "Rendering provider"  "The performing or rendering provider"
* #prescribing "Prescribing provider" "The prescribing provider"
* #purchasedservice "Purchased Service" "A purchased service occurs when one provider purchases a service from another provider and then provides it to the patient, e.g. a diagnostic exam"
//* #pcp "pcp" "Primary Care Provider"
//* #site "site"  "Site Provider"
//* #supervising "supervising" "Supervising"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This Code System is not copyrighted."


CodeSystem: C4BBCompoundLiteral
Title: "C4BB Compound Literal Code System"
Description: "CodeSystem for a Literal 'compound' value.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #compound "compound" "Compound"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

// ******** @Saul - updated **********
CodeSystem: C4BBIdentifierType
Title: "C4BB Identifier Type Code System"
Description: "Identifier Type codes that extend those defined in http://terminology.hl7.org/CodeSystem/v2-0203 to define the type of identifier payers and providers assign to claims and patients.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
// * #tax "Tax ID Number" "Tax ID Number"  - use the TAX code from the base codesystem
//* #npi "National Provider Identifier" "National Provider Identifier"  FHIR-35712
//* #clia "CLIA" "CLIA"
* #payerid "Payer ID" "Payer ID used in HIPAA covered claims submission transactions"
* #naiccode "NAIC Code" "An identifier assigned to licensed and authorized insurance companies by the National Association of Insurance Commissioners (NAIC)."
//* #mb "Member ID" "Member ID" - not needed - defined in HL7
// * #mr "Medical Record Number" "Medical Record Number" - use the MR code from the base codesystem
* #pat "Patient Account Number" "Patient Account Number"
* #um "Unique Member ID" "Indicates that the patient identifier is a unique member identifier assigned by a payer across all lines of business"
* #uc "Unique Claim ID" "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBPayerAdjudicationStatus
Title: "C4BB Payer Adjudication Status Code System"
Description: "Describes the various status fields used when payers adjudicate a claim, such as whether the claim was adjudicated in or out of network, if the provider was in or not in network for the service.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #innetwork	"In Network" "Indicates an in network status in relation to a patient's coverage"
* #outofnetwork "Out Of Network" "Indicates a not in network status in relation to a patient's coverage"
* #other "Other" "Indicates other network status or when a network does not apply"
* #paid "Paid" "Indicates if the claim was approved for payment"
* #denied "Denied" "Indicates if the claim was denied"
* #partiallypaid "Partially Paid" "Indicates that some line items on the claim were denied"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBRelatedClaimRelationshipCodes
Title: "C4BB Related Claim Relationship Code System"
Description: "Identifies if the current claim represents a claim that has been adjusted and was given a prior claim number or if the current claim has been adjusted; i.e., replaced by or merged to another claim number.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #replacedby "Replaced by claim number" "The current claim has been adjusted; i.e., replaced by or merged to another claim number."
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBSupportingInfoType
Title: "C4BB Supporting Info Type Code System"
Description: "Claim Information Category - Used as the discriminator for supportingInfo.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #admissionperiod  "Admission Period" "Dates corresponding with the admission and discharge of the beneficiary to a facility"
* #pointoforigin  "Point Of Origin"  "UB-04 Source of Admission (FL-15) identifies the place where the patient was identified as needing admission to a facility."
* #admtype	"Admission Type"  "UB-04 Priority of the admission (FL-14) indicates, for example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled."
* #brandgenericindicator	"Brand Generic Indicator" "NCPDP code indicating whether the plan adjudicated the claim as a brand or generic drug."
* #clmrecvddate	"Claim Received Date" "Date the claim was received by the payer."
* #compoundcode "Compound Code" "NCPDP code indicating whether or not the prescription is a compound."
* #dawcode "DAW (Dispense As Written) Code" "NCPDP code indicating the prescriber's instruction regarding substitution of generic equivalents or order to dispense the specific prescribed medication."
* #dayssupply	"Days Supply" "NCPDP value indicating the Number of days supply of medication dispensed by the pharmacy."
* #discharge-status  "Discharge Status"   "UB-04 Discharge Status (FL-17) indicates the patient’s status as of the discharge date for a facility stay."
* #drg	"DRG"	"DRG (Diagnosis Related Group), including the code system, the DRG version and the code value"
* #refillnum	"Refill Number"	  "NCPDP value indicating the number fill of the current dispensed supply (0, 1, 2, etc.)"
* #refillsauthorized "Refills Authorized"	  "NCPDP value indicating the number of refills authorized by the subscriber (0, 1, 2, etc.)"
* #rxorigincode	"Rx Origin Code" "NCPDP code indicating whether the prescription was transmitted as an electronic prescription, by phone, by fax, or as a written paper copy."
* #servicefacility  "Service Facility" "The facility where the service occurred.  Examples include hospitals, nursing homes, laboratories or homeless shelters."
* #typeofbill "Type of Bill"  "UB-04 Type of Bill (FL-04) provides specific information for payer purposes."
* #medicalrecordnumber "Medical Record Number" "Patient Medical Record Number associated with the specific claim."
* #patientaccountnumber "Patient Account Number" "Patient Account Number associated with the specific claim."
* #orthodontics "Orthodontics" "Orthodontics treatment indicator."
* #prosthesis "Prosthesis" "Prosthesis replacement indicator."
* #additionalbodysite "Additional Body Site" "Additional tooth number or oral cavity. Additional body sites are specific to line item and have to be linked by ExplanationOfBenefit.item.informationSequence."
* #missingtoothnumber "Missing Tooth Number" "Missing tooth number."
* #patientweight "Patient Weight" "Patient weight (for transportation services)"
* #ambulancetransportreason "Ambulance Transport Reason" "Reason ambulance transport was needed (for transportation services)"
* #transportationdistance "Transportation Distance" "Distance traveled (for transportation services)"
* #roudtrippurpose "Round Trip Purpose" "Reason for round trip (for transportation services)"
* #stretcherpurpose "Stretcher Purpose" "Purpose of using a stretcher (for transportation services)"
* #pickuplocation "Pick-up Location" "Patient pick-up Location (for transportation services)"
* #dropofflocation "Drop-off Location" "Patient drop-off location (for transportation services)"
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."


CodeSystem: C4BBAdjudicationDiscriminator
Title: "C4BB Adjudication Discriminator Code System"
Description: "Used as the discriminator for the data elements in adjudication and item.adjudication.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #allowedunits	"allowed units" "defines the adjudication slice to define allowed units"
// 20210201 CAS: Removed as not used as a discriminator (the CodeSystem C4BBPayerBenefitPaymentStatus is used for this slice), Change ipart of FHIR-30635 - Update Benefit Payment Status slice name ,cardinality and must support
//* #inoutnetwork "in or Out of Network" "defines the adjudication and item.adjudication slice to indicate whether a claim was adjudicatd in or out of network"
* #adjustmentreason "Adjustment Reason" "Defines the adjudication slice to identify the adjustment reason"
* #rejectreason "Reject Reason" "Defines the adjudication slice to identify the reject reason"
* #billingnetworkstatus	"Billing Network Status"       "Indicates the Billing Provider network status in relation to a patient's coverage as of the effective date of service or admission."
* #renderingnetworkstatus	"Rendering Network Status" "Indicates the Rendering Provider network status in relation to a patient's coverage as of the effective date of service or admission."
* #benefitpaymentstatus "Benefit Payment Status" "Indicates the network payment status in relation to a patient's coverage as of the effective date of service or admission."
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBClaimProcedureType
Title: "C4BB Claim Procedure Type Code System"
Description: "Indicates if the inpatient institutional procedure (ICD-PCS) is the principal procedure or another procedure.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #principal "Principal" "The Principal Procedure is based on the relation of the procedure to the Principal Diagnosis"
* #other "Other"  "Other procedures performed during the inpatient institutional admission"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBInstitutionalClaimSubType
Title: "C4BB Institutional Claim SubType Code System"
Description: "Indicates if institutional ExplanationOfBenefit is inpatient or outpatient.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #inpatient "Inpatient" "Claims for inpatient institutional admissions."
* #outpatient "Outpatient"  "Claims for outpatient institutional admissions."
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

/* FHIR-47140 - Move US Surface Codes System to THO

CodeSystem: C4BBSurfaceCodes
Title: "US Surface Codes System"
Description: "This value set includes FDI tooth surface codes localized for the US Realm.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #M "Mesial" "The surface of a tooth that is closest to the midline (middle) of the face."
* #O "Occlusal" "The chewing surface of posterior teeth."
* #I "Incisal" "The biting edge of anterior teeth."
* #D "Distal" "The surface of a tooth that faces away from the midline of the face."
* #B "Buccal" "The surface of a posterior tooth facing the cheeks."
* #F "Facial" "The surface of a tooth facing the lips."
//V	Ventral	The surface of a tooth facing the lips.
* #L "Lingual" "The surface of a tooth facing the tongue."
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."



*/

---

// File: input/fsh/CodeSystemStubs.fsh

// Code Systems

RuleSet: CodeSystemStubBoilerplate
* ^publisher = "HL7 International - Financial Management Work Group"
* ^contact[0].name = "HL7 International - Financial Management Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/fm"
* ^contact[0].telecom[1].system = #email
* ^contact[0].telecom[1].value = "fmlists@lists.hl7.org"
* ^contact[1].name = "Jean Duteau"
* ^contact[1].telecom[0].system = #email
* ^contact[1].telecom[0].value = "mailto:jean@duteaudesign.com"
* ^jurisdiction[0].coding[0].system = "urn:iso:std:iso:3166"
* ^jurisdiction[0].coding[0].code = #US
* ^jurisdiction[0].coding[0].display = "United States of America"
* ^content = #not-present
* ^experimental = false

RuleSet: NCPDPCopyrightNotice
* ^copyright = "National Council for Prescription Drugs Programs, Inc. (NCPDP) publications are owned by NCPDP, 9240 East Raintree Drive Scottsdale, AZ 85260, and protected by the copyright laws of the United States. 17 U.S.C. §101, et. seq. Permission is given to Council members to copy and use the work or any part thereof in connection with the business purposes of the Council members. The work may not be changed or altered. The work may be shared within the member company but may not be distributed and/or copied for/by others outside of the member’s company. The work may not be sold, used or exploited for commercial purposes. This permission may be revoked by NCPDP at any time. NCPDP is not responsible for any errors or damage as a result of the use of the work.

All material is provided as is, without warranty of any kind, expressed or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, completeness and non-infringement of third party rights. In no event shall NCPDP, its members or its contributors be liable for any claim, or any direct, special, indirect or consequential damages, or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use or performance of the material. Revised: September 2016"
/*
CodeSystem: NCPDPRejectCode
Title: "NCPDP Reject Code"
Description: "Code indicating the error encountered. Contains exception definitions for use when transaction processing cannot be completed. (NCPDP ECL 511-FB).

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPRejectCode"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/
ValueSet: NCPDPRejectCode
Title: "NCPDP Reject Code Value Set"
Description: "Code indicating the error encountered. Contains exception definitions for use when transaction processing cannot be completed. (NCPDP ECL 511-FB).

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPRejectCode
* insert NCPDPCopyrightNotice
* ^experimental = false

/*
CodeSystem: NCPDPDispensedAsWrittenOrProductSelectionCode
Title: "NCPDP Dispense As Written (DAW)/Product Selection Code"
Description: "Code indicating whether or not the prescriber's instructions regarding generic substitution were followed. (NCPDP ECL 408-D8)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPDispensedAsWrittenOrProductSelectionCode"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/
ValueSet: NCPDPDispensedAsWrittenOrProductSelectionCode
Title: "NCPDP Dispense As Written (DAW)/Product Selection Code Value Set"
Description: "Code indicating whether or not the prescriber's instructions regarding generic substitution were followed. (NCPDP ECL 408-D8)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPDispensedAsWrittenOrProductSelectionCode
* insert NCPDPCopyrightNotice
* ^experimental = false
/*
CodeSystem: NCPDPBrandGenericIndicator
Title: "NCPDP Brand Generic Indicator"
Description: "Denotes brand or generic drug dispensed. (NCPDP ECL 686)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPBrandGenericIndicator"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/

ValueSet: NCPDPBrandGenericIndicator
Title: "NCPDP Brand Generic Indicator Value Set"
Description: "Denotes brand or generic drug dispensed. (NCPDP ECL 686)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPBrandGenericIndicator
* insert NCPDPCopyrightNotice
* ^experimental = false

/*
CodeSystem: NCPDPPrescriptionOriginCode
Title: "NCPDP Prescription Origin Code"
Description: "Code indicating the origin of the prescription. Indicates whether the prescription was transmitted as an electronic prescription, by phone, by fax, or as a written paper copy. (NCPDP ECL 419-DJ)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPPrescriptionOriginCode"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/
ValueSet: NCPDPPrescriptionOriginCode
Title: "NCPDP Prescription Origin Code Value Set"
Description: "Code indicating the origin of the prescription. Indicates whether the prescription was transmitted as an electronic prescription, by phone, by fax, or as a written paper copy. (NCPDP ECL 419-DJ)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPPrescriptionOriginCode
* insert NCPDPCopyrightNotice
* ^experimental = false

/*
CodeSystem: NCPDPCompoundCode
Title: "NCPDP Compound Code"
Description: "Code indicating whether or not the prescription is a compound. (NCPDP ECL 406-D6)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPCompoundCode"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/
ValueSet: NCPDPCompoundCode
Title: "NCPDP Compound Code Value Set"
Description: "Code indicating whether or not the prescription is a compound. (NCPDP ECL 406-D6)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPCompoundCode
* insert NCPDPCopyrightNotice
* ^experimental = false

//  **************** FDA NDC ******************************


ValueSet: FDANationalDrugCode
Title: "National Drug Code (NDC) Value Set"
Description: "The Drug Listing Act of 1972 requires registered drug establishments to provide the Food and Drug Administration (FDA) with a current list of all drugs manufactured, prepared, propagated, compounded, or processed by it for commercial distribution.  (See Section 510 of the Federal Food, Drug, and Cosmetic Act (Act) (21 U.S.C. § 360)). Drug products are identified and reported using a unique, three-segment number, called the National Drug Code (NDC), which serves as a universal product identifier for drugs. FDA publishes the listed NDC numbers and the information submitted as part of the listing information in the NDC Directory which is updated daily.

The information submitted as part of the listing process, the NDC number, and the NDC Directory are used in the implementation and enforcement of the Act.

Users should note:

Starting June 1, 2011, only drugs for which electronic listings (SPL) have been submitted to FDA are included in the NDC Directory. Drugs for which listing information was last submitted to FDA on paper forms, prior to June 2009, are included on a separate file and will not be updated after June 2012.

Information regarding the FDA published NDC Directory can be found [here](https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory)

Users should note a few important items

*   The NDC Directory is updated daily.
*   The new NDC Directory contains ONLY information on final marketed drugs submitted to FDA in SPL electronic listing files by labelers.
*   The NDC Directory does not contain all listed drugs. The new version includes the final marketed drugs which listing information were submitted electronically. It does not include animal drugs, blood products, or human drugs that are not in final marketed form, such as Active Pharmaceutical Ingredients(APIs), drugs for further processing, drugs manufactured exclusively for a private label distributor, or drugs that are marketed solely as part of a kit or combination product or inner layer of a multi-level packaged product not marketed individually. For more information about how certain kits or multi-level packaged drugs are addressed in the new NDC Directory, see the NDC Directory Package File definitions document. For the FDA Online Label Repository page and additional resources go to: [FDA Online Label Repository](https://labels.fda.gov/)"
* codes from system $FDANationalDrugCode
* ^copyright = "NDC codes have no copyright acknowledgment or license requirements."
* ^experimental = false

ValueSet: FDANDCOrCompound
Title: "NDC or Compound Value Set"
Description: "Values will be the NDC Codes when the Compound Code value is 0 or 1.  When the Compound Code value = 2, the value will be the literal, ‘compound’"
* codes from system $FDANationalDrugCode
* include C4BBCompoundLiteral#compound
* ^experimental = false

// ***************************NUBC start ***********
RuleSet: AHANUBCCopyrightNotice
* ^copyright = "Licensing information can be found [here](https://www.nubc.org/license).

These codes are listed within the UB-04 Data Specifications Manual. The Official UB-04 Data Specifications Manual, copyrighted by the American Hospital Association, is the only official source of UB-04 billing information adopted by the National Uniform Billing Committee. No other publication—governmental or private/commercial—can be considered authoritative. The AHA wants to make you aware that the use of codes, descriptions, or any other content contained in the manual to be used in a software application, publication, or any other derivative work must be properly licensed by the AHA. If your organization uses or intends to use any of the codes or other related content from the manual in this manner, please contact the AHA’s licensing manager, Tim Carlson, at 312.893.6816 or email tcarlson@aha.org"


/*
CodeSystem: AHANUBCPatientDischargeStatus
Title: "NUBC Patient Discharge Status Codes"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 17 - Patient Discharge Status

These codes are used to convey the patient discharge status and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PatDischargeStatus"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

ValueSet: AHANUBCPatientDischargeStatus
Title: "NUBC Patient Discharge Status Codes Value Set"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 17 - Patient Discharge Status

These codes are used to convey the patient discharge status and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* codes from system $AHANUBCPatientDischargeStatus
* insert AHANUBCCopyrightNotice
* ^experimental = false


/* FHIR-38278 - CARIN BB Present on Admission Code System URL different than THO
CodeSystem: AHANUBCPresentOnAdmission
Title: "NUBC Present On Admission Indicator Code System"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 67 - Present On Admission Indicator

These codes are used to report the principal diagnosis code (ICD-9 or ICD-10 code) and each of the secondary diagnoses.  The 8th character in that set (first 7 are ICD) is the location used to report whether or not a condition was present on admission. The present on admission code acts as a modifier and is used to further define another code, so as to say this ICD-10 code is for a condition that was/was not present on admission.  It should be noted that present on admission also appears in FL 72

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
* ^experimental = false

*/

ValueSet: CMSPresentOnAdmissionIndicator
Title: "CMS Present On Admission Indicator Codes Value Set"
Description: "This code system consists of Present on Admission (POA) indicators which are assigned to the principal and secondary diagnoses (as defined in Section II of the Official Guidelines for Coding and Reporting) and the external cause of injury codes to indicate the presence or absence of the diagnosis at the time of inpatient admission."
* codes from system $CMSPresentOnAdmissionIndicator
* ^copyright = "This ValueSet is not copyrighted."
* ^experimental = false

/*
CodeSystem: AHANUBCRevenueCodes
Title: "NUBC Revenue Codes"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 42 - Revenue Codes

These codes are used to convey the revenue code and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/RevenueCodes"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

ValueSet: AHANUBCRevenueCodes
Title: "NUBC Revenue Codes Value Set"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 42 - Revenue Codes

These codes are used to convey the revenue code and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* codes from system $AHANUBCRevenueCodes
* insert AHANUBCCopyrightNotice
* ^experimental = false

/*
CodeSystem: AHANUBCTypeOfBill
Title: "NUBC Type Of Bill Codes"
Description: """The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 04 - Type of Bill Facility Codes
*   FL 04 - Type of Bill Frequency Codes

A code indicating the specific Type of Bill (TOB), e.g., hospital inpatient, outpatient, replacements, voids, etc. The first digit is a leading zero\*. The fourth digit defines the frequency of the bill for the institutional and electronic professional claim.

Note that with the advent of UB-04, the matrix methodology of constructing the first component of TOB codes according to digit position was abandoned in favor of specifying valid discrete codes. As a result, the first three digits in TOB have no underlying meaning.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"""
* ^url = "https://www.nubc.org/CodeSystem/TypeOfBill"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

ValueSet: AHANUBCTypeOfBill
Title: "NUBC Type of Bill Codes Value Set"
Description: """The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 04 - Type of Bill Facility Codes
*   FL 04 - Type of Bill Frequency Codes

A code indicating the specific Type of Bill (TOB), e.g., hospital inpatient, outpatient, replacements, voids, etc. The first digit is a leading zero\*. The fourth digit defines the frequency of the bill for the institutional and electronic professional claim.

Note that with the advent of UB-04, the matrix methodology of constructing the first component of TOB codes according to digit position was abandoned in favor of specifying valid discrete codes. As a result, the first three digits in TOB have no underlying meaning.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"""
* codes from system $AHANUBCTypeOfBill
* insert AHANUBCCopyrightNotice
* ^experimental = false

// 2021028 CAS: FHIR-31384 - NUBC Point Of Origin - newborns
/*
CodeSystem: AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn
Title: "NUBC Point Of Origin for Non-newborn"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

FL 15 - Point of Origin for Admission or Visit for Non-newborn
These codes are used to convey the patient point of origin for an admission or visit and are the property of the American Hospital Association

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PointOfOrigin"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

// 20210201 CAS: https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
/*
CodeSystem: AHANUBCPointOfOriginForAdmissionOrVisitNewborn
Title: "NUBC Point Of Origin for Newborn"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

FL 15 - Point of Origin for Admission or Visit for Newborn
These codes are used to convey the patient point of origin for an admission or visit and are the property of the American Hospital Association

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PointOfOriginNewborn"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/
ValueSet: AHANUBCPointOfOriginForAdmissionOrVisit
Title: "NUBC Point Of Origin Value Set"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 15 - Point of Origin for Admission or Visit

These codes are used to convey the patient point of origin for an admission or visit and are the property of the American Hospital Association

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
// 20210226 CAS: https://jira.hl7.org/browse/FHIR-31384
* codes from system $AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn
// 20210201 CAS:  https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
* codes from system $AHANUBCPointOfOriginForAdmissionOrVisitNewborn
* insert AHANUBCCopyrightNotice
* ^experimental = false

/*
CodeSystem: AHANUBCPriorityTypeOfAdmissionOrVisit
Title: "NUBC Priority (Type) of Admission or Visit"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 14 - Priority (Type) of Admission or Visit

These codes are used to convey the priority of an admission or visit and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

ValueSet: AHANUBCPriorityTypeOfAdmissionOrVisit
Title: "NUBC Priority (Type) of Admission or Visit Value Set"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 14 - Priority (Type) of Admission or Visit

These codes are used to convey the priority of an admission or visit and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* codes from system $AHANUBCPriorityTypeOfAdmissionOrVisit
* insert AHANUBCCopyrightNotice
* ^experimental = false

//********start: AMA / HCPCS************

RuleSet: AMACopyrightNotice
* ^copyright = "CPT is copyrighted by the AMA and as such must be licensed to be used in electronic products or other forms.

Any individual or entity using CPT content needs permission or a license (i.e., a written agreement authorizing use of CPT codes) from the AMA or an authorized distributor.

 Examples where a license and royalty payment are required (not an exhaustive list):

*   Use of CPT content to develop, test, maintain, and service products that use or rely on CPT
*   Use of CPT content in products that are licensed or distributed by a vendor, company or other third party
*   Distribution of products that require use of CPT content
*   Any proposed use of CPT content including the creation of derivative works of CPT content, translations or localized versions of CPT content

For more information see [here](https://www.ama-assn.org/practice-management/cpt/ama-cpt-licensing-overview)

If you have a question or would like to license CPT content,  please see [here](http://info.commerce.ama-assn.org/ama-data-file-request-2020).

Any HL7 product referencing CPT must include the following verbiage:

CPT © Copyright 2019 American Medical Association. All rights reserved. AMA and CPT are registered trademarks of the American Medical Association.

Note: the year is always based on the publication year of the code set. CPT releases the August prior to the effective year (e.g., CPT 2020 code set = copyright 2019 or CPT 2021 code set = copyright 2020)."

RuleSet: HCPCSCopyrightNotice
* ^copyright = "See information on the use of HCPCS Level I (proprietary and owned by American Medical Association) and Level II codes [here](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/HCPCS_Coding_Questions)"


RuleSet: ADACopyrightNotice
* ^copyright = "American Dental Association (ADA) developed Current Dental Terminology (CDT®) as a standardized language to help dentists and other members of the healthcare industry communicate effectively. CDT is revised and updated every year.

The ADA is the exclusive copyright owner of CDT, the Code on Dental Procedures and Nomenclature (the Code), and the ADA Dental Claim Form. Except as permitted by law, all use, copying or distribution of CDT, or any portion thereof (including the Code on Dental Procedures and Nomenclature) in any product or services (including works prepared for clients by consultants and other professionals), whether in printed, electronic or other format, requires a valid commercial user license from the ADA.

For more information : https://www.ada.org/en/publications/ada-catalog/cdt-products/licensing-for-commercial-users"


// 20210201 CAS:  https://jira.hl7.org/browse/FHIR-30413 - Add HIPPS to Institutional item.productOrService Value Set
RuleSet: HIPPSCopyrightNotice
* ^copyright = "CMS maintains HIPPS. There are no known constraints on the use of HIPPS. See more information about HIPPS codes [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes)"


/*
CodeSystem: CMSHCPCSCodes
Title: "Healthcare Common Procedure Coding System (HCPCS) level II alphanumeric codes"
Description: "The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.

General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)

Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)

These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data."
* ^url =  "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert HCPCSCopyrightNotice
*/


// 20210201 CAS: Placeholder fix for https://jira.hl7.org/browse/FHIR-30413 - Add HIPPS to Institutional item.productOrService Value Set
// Approach adding a special valueset for inpatient
/*
CodeSystem: CMSHIPPSCodes
Title: "Health Insurance Prospective Payment System (HIPPS)"
Description: "Health Insurance Prospective Payment System (HIPPS) rate codes represent specific sets
of patient characteristics (or case-mix groups) health insurers use to make payment
determinations under several prospective payment systems. Case-mix groups are
developed based on research into utilization patterns among various provider types. For
the payment systems that use HIPPS codes, clinical assessment data is the basic input. A
standard patient assessment instrument is interpreted by case-mix grouping software
algorithms, which assign the case mix group. For payment purposes, at least one HIPPS
code is defined to represent each case-mix group. These HIPPS codes are reported on
claims to insurers.
Institutional providers use HIPPS codes on claims in association with special revenue
codes. One revenue code is defined for each prospective payment system that requires
HIPPS codes. HIPPS codes are placed in data element SV202 on the electronic 837
institutional claims transaction, using an HP qualifier, or in Form Locator (FL) 44
(\"HCPCS/rate\") on a paper UB-04 claims form. The associated revenue code is placed in
data element SV201 or in FL 42. In certain circumstances, multiple HIPPS codes may
appear on separate lines of a single claim.

HIPPS codes are alpha-numeric codes of five digits. Each code contains intelligence,
with certain positions of the code indicating the case mix group itself, and other positions
providing additional information. The additional information varies among HIPPS codes
pertaining to different payment systems, but often provides information about the clinical
assessment used to arrive at the code. Which positions of the code carry the case mix
group information may also vary by payment systems."
* ^url =  "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert HIPPSCopyrightNotice
*/

ValueSet: AMACPTCMSHCPCSProcedureCodes
// 20210215 CAS: FHIR-31074 - Please shorten the titles for the IP, OP, and Professional Procedure code and modifiers ValueSets
Title: "Procedure Codes - AMA CPT - CMS HCPCS Value Set"
Description: "The Value Set is a combination of two Code Systems: CPT (HCPCS I) and HCPCS II procedure codes. They are submitted by providers to payers to convey the specific procedure performed. Procedure Codes leverage US Core Procedure Codes composition.

The target set for this value set are the procedure codes from the CPT and HCPCS files.

The Current Procedural Terminology (CPT) code set, created and maintained by the American Medical Association, is the language of medicine today and the code to its future. This system of terminology is the most widely accepted medical nomenclature used to report medical procedures and services under public and private health insurance programs. CPT coding is also used for administrative management purposes such as claims processing and developing guidelines for medical care review. Each year, via a rigorous, evidence-based and transparent process, the independent CPT Editorial Panel revises, creates or deletes hundreds of codes in order to reflect current medical practice.

Designated by the U.S. Department of Health and Human Services under the Health Insurance Portability and Accountability Act (HIPAA) as a national coding set for physician and other health care professional services and procedures, CPT’s evidence-based codes accurately encompass the full range of health care services.

All CPT codes are five-digits and can be either numeric or alphanumeric, depending on the category. CPT code descriptors are clinically focused and utilize common standards so that a diverse set of users can have common understanding across the clinical health care paradigm.

There are various types of CPT codes:

**Category I:** These codes have descriptors that correspond to a procedure or service. Codes range from 00100–99499 and are generally ordered into sub-categories based on procedure/service type and anatomy.

**Category II:** These alphanumeric tracking codes are supplemental codes used for performance measurement. Using them is optional and not required for correct coding.

**Category III:** These are temporary alphanumeric codes for new and developing technology, procedures and services. They were created for data collection, assessment and in some instances, payment of new services and procedures that currently don’t meet the criteria for a Category I code.

**Proprietary Laboratory Analyses (PLA) codes:** Recently added to the CPT code set, these codes describe proprietary clinical laboratory analyses and can be either provided by a single (solesource) laboratory or licensed or marketed to multiple providing laboratories that are cleared or approved by the Food and Drug Administration (FDA)). This category includes but is not limited to Advanced Diagnostic Laboratory Tests (ADLTs) and Clinical Diagnostic Laboratory Tests (CDLTs), as defined under the Protecting Access to Medicare Act of 2014 (PAMA).

To obtain CPT, please see the license request form [here](http://info.commerce.ama-assn.org/ama-data-file-request-2020)

The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.

General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)

Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)

These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data."
* include $HL7DataAbsentReason#not-applicable "Not Applicable"
* codes from system $CPT
* codes from system $CMSHCPCSCodes
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved

See information on the use of HCPCS Level I (proprietary and owned by American Medical Association) and Level II codes [here](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/HCPCS_Coding_Questions)"
* ^experimental = false









// 20210201 CAS: https://jira.hl7.org/browse/FHIR-30413 - Add HIPPS to Institutional item.productOrService Value Set
// Approach adding a special valueset for inpatient
ValueSet: C4BBEOBInstitutionalProcedureCodes
// 20210215 CAS: FHIR-31074 - Please shorten the titles for the IP, OP, and Professional Procedure code and modifiers ValueSets
Title: "Procedure Codes - AMA CPT - CMS HCPCS - CMS HIPPS Value Set"
Description: "The Value Set is a combination of three Code Systems: CPT (HCPCS I), HCPCS II procedure codes, and HIPPS rate codes. They are submitted by providers to payers to convey the specific procedure performed. Procedure Codes leverage US Core Procedure Codes composition.

The target set for this value set are the procedure codes from the CPT and HCPCS files and the rate codes from the HIPPS files.

The Current Procedural Terminology (CPT) code set, created and maintained by the American Medical Association, is the language of medicine today and the code to its future. This system of terminology is the most widely accepted medical nomenclature used to report medical procedures and services under public and private health insurance programs. CPT coding is also used for administrative management purposes such as claims processing and developing guidelines for medical care review. Each year, via a rigorous, evidence-based and transparent process, the independent CPT Editorial Panel revises, creates or deletes hundreds of codes in order to reflect current medical practice.

Designated by the U.S. Department of Health and Human Services under the Health Insurance Portability and Accountability Act (HIPAA) as a national coding set for physician and other health care professional services and procedures, CPT’s evidence-based codes accurately encompass the full range of health care services.

All CPT codes are five-digits and can be either numeric or alphanumeric, depending on the category. CPT code descriptors are clinically focused and utilize common standards so that a diverse set of users can have common understanding across the clinical health care paradigm.

There are various types of CPT codes:

**Category I:** These codes have descriptors that correspond to a procedure or service. Codes range from 00100–99499 and are generally ordered into sub-categories based on procedure/service type and anatomy.

**Category II:** These alphanumeric tracking codes are supplemental codes used for performance measurement. Using them is optional and not required for correct coding.

**Category III:** These are temporary alphanumeric codes for new and developing technology, procedures and services. They were created for data collection, assessment and in some instances, payment of new services and procedures that currently don’t meet the criteria for a Category I code.

**Proprietary Laboratory Analyses (PLA) codes:** Recently added to the CPT code set, these codes describe proprietary clinical laboratory analyses and can be either provided by a single (solesource) laboratory or licensed or marketed to multiple providing laboratories that are cleared or approved by the Food and Drug Administration (FDA)). This category includes but is not limited to Advanced Diagnostic Laboratory Tests (ADLTs) and Clinical Diagnostic Laboratory Tests (CDLTs), as defined under the Protecting Access to Medicare Act of 2014 (PAMA).

To obtain CPT, please see the license request form [here](http://info.commerce.ama-assn.org/ama-data-file-request-2020)

The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.

General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)

Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)

These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data.

The Health Insurance Prospective Payment System (HIPPS) rate codes represent specific sets
of patient characteristics (or case-mix groups) health insurers use to make payment
determinations under several prospective payment systems. Case-mix groups are
developed based on research into utilization patterns among various provider types. For
the payment systems that use HIPPS codes, clinical assessment data is the basic input. A
standard patient assessment instrument is interpreted by case-mix grouping software
algorithms, which assign the case mix group. For payment purposes, at least one HIPPS
code is defined to represent each case-mix group. These HIPPS codes are reported on
claims to insurers.
Institutional providers use HIPPS codes on claims in association with special revenue
codes. One revenue code is defined for each prospective payment system that requires
HIPPS codes. HIPPS codes are placed in data element SV202 on the electronic 837
institutional claims transaction, using an HP qualifier, or in Form Locator (FL) 44
(\"HCPCS/rate\") on a paper UB-04 claims form. The associated revenue code is placed in
data element SV201 or in FL 42. In certain circumstances, multiple HIPPS codes may
appear on separate lines of a single claim.

HIPPS codes are alpha-numeric codes of five digits. Each code contains intelligence,
with certain positions of the code indicating the case mix group itself, and other positions
providing additional information. The additional information varies among HIPPS codes
pertaining to different payment systems, but often provides information about the clinical
assessment used to arrive at the code. Which positions of the code carry the case mix
group information may also vary by payment systems."
* codes from system $CPT
* codes from system $CMSHCPCSCodes
* codes from system $CMSHIPPSCodes
* include $HL7DataAbsentReason#not-applicable "Not Applicable"
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved

See information on the use of HCPCS Level I (proprietary and owned by American Medical Association) and Level II codes [here](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/HCPCS_Coding_Questions)

CMS maintains HIPPS. There are no known constraints on the use of HIPPS. See more information about HIPPS codes [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes)"
* ^experimental = false

ValueSet:  AMACPTCMSHCPCSModifiers
// 20210215 CAS: FHIR-31074 - Please shorten the titles for the IP, OP, and Professional Procedure code and modifiers ValueSets
Title: "Procedure Modifier Codes - AMA CPT - CMS HCPCS Value Set"
Description: "The Value Set is a combination of two Code Systems: CPT (HCPCS I) and HCPCS II procedure code modifiers. Modifiers help further describe a procedure code without changing its definition.

The target set for this value set are the procedure code modifiers from the CPT and HCPCS files.

The Current Procedural Terminology (CPT) code set, created and maintained by the American Medical Association, is the language of medicine today and the code to its future. This system of terminology is the most widely accepted medical nomenclature used to report medical procedures and services under public and private health insurance programs. CPT coding is also used for administrative management purposes such as claims processing and developing guidelines for medical care review. Each year, via a rigorous, evidence-based and transparent process, the independent CPT Editorial Panel revises, creates or deletes hundreds of codes in order to reflect current medical practice.

Designated by the U.S. Department of Health and Human Services under the Health Insurance Portability and Accountability Act (HIPAA) as a national coding set for physician and other health care professional services and procedures, CPT’s evidence-based codes accurately encompass the full range of health care services.

All CPT codes are five-digits and can be either numeric or alphanumeric, depending on the category. CPT code descriptors are clinically focused and utilize common standards so that a diverse set of users can have common understanding across the clinical health care paradigm.

There are various types of CPT codes:

**Category I:** These codes have descriptors that correspond to a procedure or service. Codes range from 00100–99499 and are generally ordered into sub-categories based on procedure/service type and anatomy.

**Category II:** These alphanumeric tracking codes are supplemental codes used for performance measurement. Using them is optional and not required for correct coding.

**Category III:** These are temporary alphanumeric codes for new and developing technology, procedures and services. They were created for data collection, assessment and in some instances, payment of new services and procedures that currently don’t meet the criteria for a Category I code.

**Proprietary Laboratory Analyses (PLA) codes:** Recently added to the CPT code set, these codes describe proprietary clinical laboratory analyses and can be either provided by a single (solesource) laboratory or licensed or marketed to multiple providing laboratories that are cleared or approved by the Food and Drug Administration (FDA)). This category includes but is not limited to Advanced Diagnostic Laboratory Tests (ADLTs) and Clinical Diagnostic Laboratory Tests (CDLTs), as defined under the Protecting Access to Medicare Act of 2014 (PAMA).

To obtain CPT, please see the license request form [here](http://info.commerce.ama-assn.org/ama-data-file-request-2020)

The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.

General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)

Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)

These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data."
* codes from system $CPT
* codes from system $CMSHCPCSCodes
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved

See information on the use of HCPCS Level I (proprietary and owned by American Medical Association) and Level II codes [here](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/HCPCS_Coding_Questions)"
* ^experimental = false

/*
// ******** American Dental Association CDT ********
CodeSystem: ADADentalProcedureCode
Title: "ADA Code on Dental Procedures and Nomenclature"
Description: "The purpose of the CDT Code is to achieve uniformity, consistency and specificity in accurately documenting dental treatment. One use of the CDT Code is to provide for the efficient processing of dental claims, and another is to populate an Electronic Health Record.

On August 17, 2000 the CDT Code was named as a HIPAA standard code set. Any claim submitted on a HIPAA standard electronic dental claim must use dental procedure codes from the version of the CDT Code in effect on the date of service. The CDT Code is also used on paper dental claims, and the ADA's paper claim form data content reflects the HIPAA electronic standard.

CDT is published Annually. Versions should refect the YYYY of the release.

The Council on Dental Benefit Programs (CDBP) has ADA Bylaws responsibility for CDT Code maintenance. To fulfill this obligation CDBP established its Code Maintenance Committee (CMC), a body that includes representatives from various sectors of the dental community (e.g., ADA; dental specialty organizations; third-party payers). CMC members, by their votes, determine which of the requested actions are incorporated into the CDT Code.

Please see Code Maintenance Committee (CMC) page for information about the CMC's members and activities.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "http://ada.org/cdt"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert ADACopyrightNotice
*/


ValueSet: ADADentalProcedureCode
Title: "ADA Code on Dental Procedures and Nomenclature Value Set"
Description: "The purpose of the CDT Code is to achieve uniformity, consistency and specificity in accurately documenting dental treatment. One use of the CDT Code is to provide for the efficient processing of dental claims, and another is to populate an Electronic Health Record.

On August 17, 2000 the CDT Code was named as a HIPAA standard code set. Any claim submitted on a HIPAA standard electronic dental claim must use dental procedure codes from the version of the CDT Code in effect on the date of service. The CDT Code is also used on paper dental claims, and the ADA's paper claim form data content reflects the HIPAA electronic standard.

CDT is published Annually. Versions should refect the YYYY of the release.

The Council on Dental Benefit Programs (CDBP) has ADA Bylaws responsibility for CDT Code maintenance. To fulfill this obligation CDBP established its Code Maintenance Committee (CMC), a body that includes representatives from various sectors of the dental community (e.g., ADA; dental specialty organizations; third-party payers). CMC members, by their votes, determine which of the requested actions are incorporated into the CDT Code.

Please see Code Maintenance Committee (CMC) page for information about the CMC's members and activities.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* codes from system $ADADentalProcedureCode
* include $HL7DataAbsentReason#not-applicable "Not Applicable"
* insert ADACopyrightNotice
* ^experimental = false


// ******** DRGs ***************
/*
CodeSystem: CMSMSDRG
Title: "Medicare Severity Diagnosis Related Groups (MS-DRGs)"
Description: "Section 1886(d) of the Act specifies that the Secretary shall establish a classification system (referred to as DRGs) for inpatient discharges and adjust payments under the IPPS based on appropriate weighting factors assigned to each DRG.  Therefore, under the IPPS, we[CMS] pay for inpatient hospital services on a rate per discharge basis that varies according to the DRG to which a beneficiary's stay is assigned. The formula used to calculate payment for a specific case multiplies an individual hospital's payment rate per case by the weight of the DRG to which the case is assigned.  Each DRG weight represents the average resources required to care for cases in that particular DRG, relative to the average resources used to treat cases in all DRGs.

Congress recognized that it would be necessary to recalculate the DRG relative weights periodically to account for changes in resource consumption.  Accordingly, section 1886(d)(4)(C) of the Act requires that the Secretary adjust the DRG classifications and relative weights at least annually.  These adjustments are made to reflect changes in treatment patterns, technology, and any other factors that may change the relative use of hospital resources.

Currently, cases are classified into Medicare Severity Diagnosis Related Groups (MS-DRGs) for payment under the IPPS based on the following information reported by the hospital: the principal diagnosis, up to 25 additional diagnoses, and up to 25 procedures performed during the stay.  In a small number of MS-DRGs, classification is also based on the age, sex, and discharge status of the patient.  Effective October 1, 2015, the diagnosis and procedure information is reported by the hospital using codes from the International Classification of Diseases, Tenth Revision, Clinical Modification (ICD-10-CM) and the International Classification of Diseases, Tenth Revision, Procedure Coding System (ICD-10-PCS).

Content can be obtained on the CMS hosted page located [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software)"
* ^url = "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "The Centers for Medicare & Medicaid Services (CMS) maintain MS-DRGs used throughout the US health care industry. The CMS MS-DRGs are free to use without restriction."
*/
/*
CodeSystem: THREEMAPDRG
Title: "All Patient Diagnosis Related Groups (AP-DRGs)"
Description: """In 1987, the state of New York passed legislation instituting a DRG-based prospective payment system for all non-Medicare patients. The legislation included a requirement that the New York State Department of Health (NYDH) evaluate the applicability of the DRGs to a non-Medicare population. In particular, the legislation required that the DRGs be evaluated with respect to neonates and patients with Human Immunodeficiency Virus (HIV) infections. NYDH entered into an agreement with 3M HIS to assist with the evaluation of the need for DRG modifications as well as to make the necessary changes in the DRG definitions and software. The DRG definitions developed by NYDH and 3M HIS are referred to as the All Patient DRGs (AP DRGs).

The AP DRG code system is no longer updated as DRG classification system evolved to APR DRG. Evolution of DRG is summarized in the APR DRG methodology overview as well as in various articles.


Goldfield N. The evolution of diagnosis-related groups (DRGs): from its beginnings in case-mix and resource use theory, to its implementation for payment and now for its current utilization for quality within and outside the hospital. Qual Manage Health Care. 2010;19(1)3-16.


Averill RF, Goldfield NI, Muldoon J, Steinbeck BA, Grant TM. A closer look at All-Patient Refined DRGs. J AHIMA. 2002;73(1):46-49.

[https://apps.3mhis.com/docs/Groupers/All\_Patient\_Refined\_DRG/Methodology\_overview\_GRP041/grp041\_aprdrg\_meth\_overview.pdf](https://apps.3mhis.com/docs/Groupers/All_Patient_Refined_DRG/Methodology_overview_GRP041/grp041_aprdrg_meth_overview.pdf)"""
* ^url = "http://uri.hddaccess.com/cs/apdrg"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = ""
*/
/*
CodeSystem: THREEMAPRDRG
Title: "All Patient Refined Diagnosis Related Groups (APR-DRGs)"
Description: "3M APR DRGs have become the standard across the U.S. for classifying hospital inpatients in non-Medicare populations. As of January 2019, 27 state Medicaid programs use 3M APR DRGs to pay hospitals, as do approximately a dozen commercial payers and Medicaid managed care organizations. Over 2,400 hospitals have licensed 3M APR DRGs to verify payment and analyze their internal operations.

The 3M APR DRG methodology classifies hospital inpatients according to their reason for admission, severity of illness and risk of mortality.

Each year 3M calculates and releases a set of statistics for each 3M APR DRG based on our analysis of large national data sets. These statistics include a relative weight for each 3M APR DRG. The relative weight reflects the average hospital resource use for a patient in that 3M APR DRG relative to the average hospital resource use of all inpatients. Please note that payers and other users of the 3M APR DRG methodology are responsible for ensuring that they use relative weights that are appropriate for their particular populations. The 3M APR DRG statistics also include data for each 3M APR DRG on relative frequency, average length of stay, average charges and incidence of mortality.

3M APR DRGs can be rolled up into broader categories. The 326 base DRGs roll up into 25 major diagnostic categories (MDCs) plus a pre-MDC category. An example is MDC 04, Diseases and Disorders of the Respiratory System. As well, each 3M APR DRG is assigned to a service line that is consistent with the outpatient service lines that are defined by the 3M™ Enhanced Ambulatory Patient Groups (EAPGs).

Link to information about the code system - including how to obtain the content from 3M - is available [here.](https://www.3m.com/3M/en_US/health-information-systems-us/drive-value-based-care/patient-classification-methodologies/apr-drgs/)"
* ^url = "http://uri.hddaccess.com/cs/aprdrg"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "The clinical logic is maintained by a team of 3M clinicians, data analysts, nosologists, programmers and economists. The logic is proprietary to 3M but is available for licensees to view in an online definitions manual.

To license APR DRG from 3M, see request form [here](https://engage.3m.com/PPS_Groupers_Contact)"
*/

ValueSet: CMSMS3MAPAPRDRG
Title: "MS-DRGs - AP-DRGs - APR-DRGs Value Set"
Description: """This value set defines three sets of DRGs, MS-DRGs (Medicare Severity Diagnosis Related Groups), APR-DRGs (All Patient Refined Diagnosis Related Groups) and AP-DRGs (All Patient Diagnosis Related Groups). Identifying a DRG code requires a version.

**MS-DRGs**

Section 1886(d) of the Act specifies that the Secretary shall establish a classification system (referred to as DRGs) for inpatient discharges and adjust payments under the IPPS based on appropriate weighting factors assigned to each DRG.  Therefore, under the IPPS, we[CMS] pay for inpatient hospital services on a rate per discharge basis that varies according to the DRG to which a beneficiary's stay is assigned. The formula used to calculate payment for a specific case multiplies an individual hospital's payment rate per case by the weight of the DRG to which the case is assigned.  Each DRG weight represents the average resources required to care for cases in that particular DRG, relative to the average resources used to treat cases in all DRGs.

Congress recognized that it would be necessary to recalculate the DRG relative weights periodically to account for changes in resource consumption.  Accordingly, section 1886(d)(4)(C) of the Act requires that the Secretary adjust the DRG classifications and relative weights at least annually.  These adjustments are made to reflect changes in treatment patterns, technology, and any other factors that may change the relative use of hospital resources.

Currently, cases are classified into Medicare Severity Diagnosis Related Groups (MS-DRGs) for payment under the IPPS based on the following information reported by the hospital: the principal diagnosis, up to 25 additional diagnoses, and up to 25 procedures performed during the stay.  In a small number of MS-DRGs, classification is also based on the age, sex, and discharge status of the patient.  Effective October 1, 2015, the diagnosis and procedure information is reported by the hospital using codes from the International Classification of Diseases, Tenth Revision, Clinical Modification (ICD-10-CM) and the International Classification of Diseases, Tenth Revision, Procedure Coding System (ICD-10-PCS).

Content can be obtained on the CMS hosted page located [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software)

**APR-DRGs**

3M APR DRGs have become the standard across the U.S. for classifying hospital inpatients in non-Medicare populations. As of January 2019, 27 state Medicaid programs use 3M APR DRGs to pay hospitals, as do approximately a dozen commercial payers and Medicaid managed care organizations. Over 2,400 hospitals have licensed 3M APR DRGs to verify payment and analyze their internal operations.

The 3M APR DRG methodology classifies hospital inpatients according to their reason for admission, severity of illness and risk of mortality.

Each year 3M calculates and releases a set of statistics for each 3M APR DRG based on our analysis of large national data sets. These statistics include a relative weight for each 3M APR DRG. The relative weight reflects the average hospital resource use for a patient in that 3M APR DRG relative to the average hospital resource use of all inpatients. Please note that payers and other users of the 3M APR DRG methodology are responsible for ensuring that they use relative weights that are appropriate for their particular populations. The 3M APR DRG statistics also include data for each 3M APR DRG on relative frequency, average length of stay, average charges and incidence of mortality.

3M APR DRGs can be rolled up into broader categories. The 326 base DRGs roll up into 25 major diagnostic categories (MDCs) plus a pre-MDC category. An example is MDC 04, Diseases and Disorders of the Respiratory System. As well, each 3M APR DRG is assigned to a service line that is consistent with the outpatient service lines that are defined by the 3M™ Enhanced Ambulatory Patient Groups (EAPGs).

Link to information about the code system - including how to obtain the content from 3M - is available [here.](https://www.3m.com/3M/en_US/health-information-systems-us/drive-value-based-care/patient-classification-methodologies/apr-drgs/).

**AP-DRGs**

In 1987, the state of New York passed legislation instituting a DRG-based prospective payment system for all non-Medicare patients. The legislation included a requirement that the New York State Department of Health (NYDH) evaluate the applicability of the DRGs to a non-Medicare population. In particular, the legislation required that the DRGs be evaluated with respect to neonates and patients with Human Immunodeficiency Virus (HIV) infections. NYDH entered into an agreement with 3M HIS to assist with the evaluation of the need for DRG modifications as well as to make the necessary changes in the DRG definitions and software. The DRG definitions developed by NYDH and 3M HIS are referred to as the All Patient DRGs (AP DRGs).

The AP DRG code system is no longer updated as DRG classification system evolved to APR DRG. Evolution of DRG is summarized in the APR DRG methodology overview as well as in various articles.


Goldfield N. The evolution of diagnosis-related groups (DRGs): from its beginnings in case-mix and resource use theory, to its implementation for payment and now for its current utilization for quality within and outside the hospital. Qual Manage Health Care. 2010;19(1)3-16.


Averill RF, Goldfield NI, Muldoon J, Steinbeck BA, Grant TM. A closer look at All-Patient Refined DRGs. J AHIMA. 2002;73(1):46-49.

[https://apps.3mhis.com/docs/Groupers/All\_Patient\_Refined\_DRG/Methodology\_overview\_GRP041/grp041\_aprdrg\_meth\_overview.pdf](https://apps.3mhis.com/docs/Groupers/All_Patient_Refined_DRG/Methodology_overview_GRP041/grp041_aprdrg_meth_overview.pdf)"""

* codes from system $CMSMSDRG
* codes from system $THREEMAPDRG
* codes from system $THREEMAPRDRG
* ^copyright = "The Centers for Medicare & Medicaid Services (CMS) maintain MS-DRGs used throughout the US health care industry. The CMS MS-DRGs are free to use without restriction.

The clinical logic is maintained by a team of 3M clinicians, data analysts, nosologists, programmers and economists. The logic is proprietary to 3M but is available for licensees to view in an online definitions manual.

To license APR DRG from 3M, see request form [here](https://engage.3m.com/PPS_Groupers_Contact)"
* ^experimental = false

// ******** Place of Service ***************
/*CodeSystem: CMSPlaceofServiceCodes
Title: "CMS Place of Service Codes (POS)"
Description: "Place of Service Codes are two-digit codes placed on health care professional claims to indicate the setting in which a service was provided. The Centers for Medicare & Medicaid Services (CMS) maintain POS codes used throughout the health care industry.

This code set is required for use in the implementation guide adopted as the national standard for electronic transmission of professional health care claims under the provisions of the Health Insurance Portability and Accountability Act of 1996 (HIPAA). HIPAA directed the Secretary of HHS to adopt national standards for electronic transactions. These standard transactions require all health plans and providers to use standard code sets to populate data elements in each transaction. The Transaction and Code Set Rule adopted the ASC X12N-837 Health Care Claim: Professional, volumes 1 and 2, as the standard for electronic submission of professional claims. This standard names the POS code set currently maintained by CMS as the code set to be used for describing sites of service in such claims. POS information is often needed to determine the acceptability of direct billing of Medicare, Medicaid and private insurance services provided by a given provider.

Current codes can be obtained [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set)"
* ^url = "https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "The Centers for Medicare & Medicaid Services (CMS) maintain Place Of Service (POS) codes used throughout the US health care industry. The CMS POS codes are free to use without restriction."
*/

ValueSet: CMSPlaceofServiceCodes
Title: "CMS Place of Service Codes (POS) Value Set"
Description: "Place of Service Codes are two-digit codes placed on health care professional claims to indicate the setting in which a service was provided. The Centers for Medicare & Medicaid Services (CMS) maintain POS codes used throughout the health care industry.

This code set is required for use in the implementation guide adopted as the national standard for electronic transmission of professional health care claims under the provisions of the Health Insurance Portability and Accountability Act of 1996 (HIPAA). HIPAA directed the Secretary of HHS to adopt national standards for electronic transactions. These standard transactions require all health plans and providers to use standard code sets to populate data elements in each transaction. The Transaction and Code Set Rule adopted the ASC X12N-837 Health Care Claim: Professional, volumes 1 and 2, as the standard for electronic submission of professional claims. This standard names the POS code set currently maintained by CMS as the code set to be used for describing sites of service in such claims. POS information is often needed to determine the acceptability of direct billing of Medicare, Medicaid and private insurance services provided by a given provider.

Current codes can be obtained [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set)"
* codes from system $CMSPlaceofServiceCodes
* ^copyright = "The Centers for Medicare & Medicaid Services (CMS) maintain Place Of Service (POS) codes used throughout the US health care industry. The CMS POS codes are free to use without restriction."
* ^experimental = false

// ******** CARCs / RARCs ***************

//  *** @ Saul - No change to CodeSystem CARCs ; RARCs are new
/*
CodeSystem: X12ClaimAdjustmentReasonCodes
Title: "X12 Claim Adjustment Reason Codes"
Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.

The X12 Claim Adjustment Reason Codes describe why a claim or service line was paid differently than it was billed. These codes are listed within an X12 implementation guide (TR3) and maintained by X12.

External code lists maintained by X12 and external code lists maintained by others and distributed by WPC on behalf of the maintainer can be found here:

[https://x12.org/codes](https://x12.org/codes)

Click on the name of any external code list to access more information about the code list, view the codes, or submit a maintenance request. These external code lists were previously published on either [www.wpc-edi.com/reference](http://www.wpc-edi.com/reference) or [www.x12.org/codes](http://www.x12.org/codes)."
* ^url = "https://x12.org/codes/claim-adjustment-reason-codes"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "**Intellectual Property Information**

All X12 products are subject to this IP policy, including published and draft works.

X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.

Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)

**Licensing Information**

Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.

Additional information on X12 licensing program can be found here:

[https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)

**Purchasing Information:**

To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com."
*/
/*
CodeSystem: CMSRemittanceAdviceRemarkCodes
Title: "X12 Remittance Advice Remark Codes"
Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.

Remittance Advice Remark Codes (RARCs) are used to provide additional explanation for an adjustment already described by a Claim Adjustment Reason Code (CARC) or to convey information about remittance processing.

Each RARC identifies a specific message as shown in the Remittance Advice Remark Code List. There are two types of RARCs, supplemental and informational. The majority of the RARCs are supplemental; these are generally referred to as RARCs without further distinction. Supplemental RARCs provide additional explanation for an adjustment already described by a CARC. The second type of RARC is informational; these RARCs are all prefaced with Alert: and are often referred to as Alerts. Alerts are used to convey information about remittance processing and are never related to a specific adjustment or CARC.

External code lists maintained by X12 and external code lists maintained by others and distributed by WPC on behalf of the maintainer, including the RARC codes. Can be found here:

[https://x12.org/codes](https://x12.org/codes)

Click on the name of any external code list to access more information about the code list, view the codes, or submit a maintenance request. These external code lists were previously published on either [www.wpc-edi.com/reference](http://www.wpc-edi.com/reference) or [www.x12.org/codes](http://www.x12.org/codes)."
* ^url = "https://x12.org/codes/remittance-advice-remark-codes"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "**Intellectual Property Information**

All X12 products are subject to this IP policy, including published and draft works.

X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.

Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)

**Licensing Information**

Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.

Additional information on X12 licensing program can be found here:

[https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)

**Purchasing Information:**

To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com."
*/

ValueSet: X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
Title: "X12 Claim Adjustment Reason Codes - Remittance Advice Remark Codes Value Set"
Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.

The X12 Claim Adjustment Reason Codes describe why a claim or service line was paid differently than it was billed. These codes are listed within an X12 implementation guide (TR3) and maintained by X12.

Remittance Advice Remark Codes (RARCs) are used to provide additional explanation for an adjustment already described by a Claim Adjustment Reason Code (CARC) or to convey information about remittance processing.

Each RARC identifies a specific message as shown in the Remittance Advice Remark Code List. There are two types of RARCs, supplemental and informational. The majority of the RARCs are supplemental; these are generally referred to as RARCs without further distinction. Supplemental RARCs provide additional explanation for an adjustment already described by a CARC. The second type of RARC is informational; these RARCs are all prefaced with Alert: and are often referred to as Alerts. Alerts are used to convey information about remittance processing and are never related to a specific adjustment or CARC.

External code lists maintained by X12 and external code lists maintained by others and distributed by WPC on behalf of the maintainer can be found here:

[https://x12.org/codes](https://x12.org/codes)

Click on the name of any external code list to access more information about the code list, view the codes, or submit a maintenance request. These external code lists were previously published on either [www.wpc-edi.com/reference](http://www.wpc-edi.com/reference) or [www.x12.org/codes](http://www.x12.org/codes)."
* codes from system $X12ClaimAdjustmentReasonCodes
* codes from system $CMSRemittanceAdviceRemarkCodes
* ^copyright = "**Intellectual Property Information**

All X12 products are subject to this IP policy, including published and draft works.

X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.

Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)

**Licensing Information**

Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.

Additional information on X12 licensing program can be found here:

[https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)

**Purchasing Information:**

To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com

The Centers for Medicare & Medicaid Services (CMS) maintain Remittance Advice Remark Codes (RARC) used throughout the US health care industry."
* ^experimental = false


/* FHIR-46778 - Move the X12 Ambulance Transport Codes Code System to THO

//  *** @ Saul - No change to CodeSystem CARCs ; RARCs are new
CodeSystem: X12AmbulanceTransportReasonCodes
Title: "X12 Ambulance Transport Reason Codes Code System"
Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.

The X12 Ambulance Transport Reason Codes indicate the reason for ambulance transport. These codes are listed within an X12 implementation guide (TR3) and maintained by X12.

A list of codes and associated descriptions established, maintained, and published as part of an X12 Standard.

These codes are listed within an X12 implementation guide maintained by X12. All X12 work products are copyrighted. See https://x12.org/products/licensing-program for licensing terms and conditions."
* ^url = $X12AmbulanceTransReas
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^content = #not-present
* ^copyright = "**Intellectual Property Information**

All X12 products are subject to this IP policy, including published and draft works.

X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.

Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)

**Licensing Information**

Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.

Additional information on X12 licensing program can be found here:

[https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)

**Purchasing Information:**

To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com."
* ^experimental = false

*/
ValueSet: C4BBAmbulanceTransportReasonCodes
Title: "C4BB Ambulance Transport Reasons Value Set"
Description: "Transportation Services Ambulatory Transport Reason Codes" 
* codes from system X12AmbulanceTransportReasonCodes
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false
//  ********* ICD diagnosis codes / procedure codes
/*
RuleSet: ICD9CopyrightNotice
* ^copyright = "The following requirements must be followed to utilize CDC’s public domain content:

1) Attribution to the agency that developed the material must be provided in your use of the materials. Such attribution should clearly state the materials were developed by CDC ATSDR and/or HHS (e.g., Source: CDC; Materials developed by CDC);

2) You must utilize a disclaimer which clearly indicates that your use of the material, including any links to the materials on the CDC, ATSDR or HHS websites, does not imply endorsement by CDC, ATSDR, HHS or the United States Government of you, your company, product, facility, service or enterprise. All such disclaimers must be prominently and unambiguously displayed (e.g., Reference to specific commercial products, manufacturers, companies, or trademarks does not constitute its endorsement or recommendation by the U.S. Government, Department of Health and Human Services, or Centers for Disease Control and Prevention;

3) You may not change the substantive content of the materials; and

4) You must state that the material is otherwise available on the agency website for no charge.

For information on NCHS agency level use of materials see [here](https://www.cdc.gov/other/agencymaterials.html)."
*/
RuleSet: ICD910CMCopyrightNotice
* ^copyright = "ICD-9 and ICD-10 are copyrighted by the World Health Organization (WHO) which owns and publishes the classification. See https://www.who.int/classifications/icd/en. WHO has authorized the development of an adaptation of ICD-9 and ICD-10 to ICD-9-CM to ICD-10-CM for use in the United States for U.S. government purposes."


//  ******* ICD ********


ValueSet: CDCICD910CMDiagnosisCodes
Title: "Diagnosis Codes - International Classification of Diseases, Clinical Modification (ICD-9-CM, ICD-10-CM) Value Set"
Description: "The Value Set is a combination of values from volume 1 and volume 2 from the Code System International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) and values in the Code System International Classification of Diseases, Tenth Revision, Clinical Modification (ICD-10-CM)

The International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) is based on the World Health Organization’s Ninth Revision, International Classification of Diseases (ICD-9). ICD-9-CM was the official system of assigning codes to diagnoses and procedures associated with hospital utilization in the United States.

The ICD-9-CM consists of:

*   a tabular list containing a numerical list of the disease code numbers in tabular form;
*   an alphabetical index to the disease entries; and
*   a classification system for surgical, diagnostic, and therapeutic procedures (alphabetic index and tabular list).

The National Center for Health Statistics (NCHS) and the [Centers for Medicare and Medicaid Services](http://www.cms.hhs.gov/) are the U.S. governmental agencies responsible for overseeing all changes and modifications to the ICD-9-CM.

[ICD-10-CM](https://confluence.hl7.org/pages/viewpage.action?pageId=97453674) is the replacement for ICD-9-CM, volumes 1 and 2, effective October 1, 2015.

The National Center for Health Statistics (NCHS), the Federal agency responsible for use of the International Statistical Classification of Diseases and Related Health Problems, 10th revision (ICD-10) in the United States, has developed a clinical modification of the classification for morbidity purposes. The ICD-10 is used to code and classify mortality data from death certificates, having replaced ICD-9 for this purpose as of January 1, 1999.

The clinical modification represents a significant improvement over ICD-9-CM and ICD-10. Specific improvements include: the addition of information relevant to ambulatory and managed care encounters; expanded injury codes; the creation of combination diagnosis/symptom codes to reduce the number of codes needed to fully describe a condition; the addition of sixth and seventh characters; incorporation of common 4th and 5th digit subclassifications; laterality; and greater specificity in code assignment. The new structure will allow further expansion than was possible with ICD-9-CM.

Current and previous releases of ICD-9-CM are available here: [https://www.cdc.gov/nchs/icd/icd9cm.htm](https://www.cdc.gov/nchs/icd/icd9cm.htm)

Current and previous releases of ICD-10-CM are available in PDF and XML format here: [https://www.cdc.gov/nchs/icd/icd10cm.htm](https://www.cdc.gov/nchs/icd/icd10cm.htm)

Most files are provided in compressed zip format for ease in downloading. These files have been created by the National Center for Health Statistics (NCHS), under authorization by the World Health Organization. Any questions regarding typographical or other errors noted on this release may be reported to nchsicd10cm@cdc.gov."
* codes from system $ICD10CM
* codes from system $ICD9CM
* $HL7DataAbsentReason#masked
* insert ICD910CMCopyrightNotice
* ^experimental = false

ValueSet: CMSICD910PCSProcedureCodes
Title: "Procedure Codes - International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) - ICD-10 Procedure Value Set"
Description: "The Value Set is a combination of values from volume 3 from the Code System International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) and values in the Code System ICD-10 Procedure Coding System.

The International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) is based on the World Health Organization’s Ninth Revision, International Classification of Diseases (ICD-9). ICD-9-CM was the official system of assigning codes to diagnoses and procedures associated with hospital utilization in the United States.

The ICD-9-CM consists of:

*   a tabular list containing a numerical list of the disease code numbers in tabular form;
*   an alphabetical index to the disease entries; and
*   a classification system for surgical, diagnostic, and therapeutic procedures (alphabetic index and tabular list).

The National Center for Health Statistics (NCHS) and the [Centers for Medicare and Medicaid Services](http://www.cms.hhs.gov/) are the U.S. governmental agencies responsible for overseeing all changes and modifications to the ICD-9-CM.

The ICD-10-PCS is the replacement for ICD-9-CM, volume 3, effective October 1, 2015.

The ICD-10-PCS is a procedure classification published by the United States Centers for Medicare & Medicaid Services (CMS) ([https://www.cms.gov](https://www.cms.gov/)) for classifying procedures
performed in hospital inpatient health care settings.

Current and previous releases of ICD-9-CM are available here: [https://www.cdc.gov/nchs/icd/icd9cm.htm](https://www.cdc.gov/nchs/icd/icd9cm.htm)

Most files are provided in compressed zip format for ease in downloading. These files have been created by the National Center for Health Statistics (NCHS), under authorization by the World Health Organization. Any questions regarding typographical or other errors noted on this release may be reported to [nchsicd10cm@cdc.gov](mailto:nchsicd10cm@cdc.gov).

A link to information about the ICD-10-PCS code system - including how to obtain the content - is available at [https://www.cms.gov/Medicare/Coding/ICD10.](https://www.cms.gov/Medicare/Coding/ICD10)

Note: CMS is the owner of the ICD-10-PCS code system. CMS is NOT the owner of ICD-10-CM. CMS republishes the ICD-10-CM codes system on their website for convenience only. For authoritative information on ICD-10-CM, users should refer to the National Center for Health Statistics (NCHS) site located [here](https://www.cdc.gov/nchs/icd/icd10cm.htm)."
* codes from system $ICD10PCS
* codes from system $ICD9PCS
* ^copyright = "The International Classification of Diseases, Tenth Revision, Procedure Coding System (ICD-10-PCS) was developed for the Centers for Medicare and Medicaid Services (CMS) available for public use. CMS is the U.S. governmental agency responsible for overseeing all changes and modifications to the ICD-10-PCS.
The International Classification of Diseases, Ninth Revision, Procedure Coding System (ICD-9-PCS) was developed for the Centers for Medicare and Medicaid Services (CMS) available for public use. CMS is the U.S. governmental agency responsible for overseeing all changes and modifications to the ICD-9-PCS."
* ^experimental = false

/*
CodeSystem: ADAUniversalNumberingSystem
Title: "American Dental Association Universal Numbering System"
Description: "The American Dental Association Universal Numbering System is a tooth notation system primarily used in the United States.

Teeth are numbered from the viewpoint of the dental practitioner looking into the open mouth, clockwise starting from the distalmost right maxillary teeth.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* ^url = "http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert ADACopyrightNotice
*/
/*
CodeSystem: ADAAreaOfOralCavitySystem
Title: "American Dental Association Area of Oral Cavity System"
Description: "The American Dental Association Area of Oral Cavity System is a notation system indicating a quadrant, arch, or the entire mouth.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."

* ^url = "http://terminology.hl7.org/CodeSystem/ADAAreaOralCavitySystem"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert ADACopyrightNotice

*/

ValueSet: OralBodySite
Title: "Oral Body Site Value Set"
Description: "Oral Body Site indicating tooth numbers and area of oral cavity."

* codes from system $ADAUniversalToothDesignationSystem
* codes from system $ADAAreaOralCavitySystem
* insert ADACopyrightNotice
* ^experimental = false


ValueSet: ADAUniversalNumberingSystem
Title: "American Dental Association Universal Numbering Value Set"
Description: "The American Dental Association Universal Numbering System is a tooth notation system primarily used in the United States.

Teeth are numbered from the viewpoint of the dental practitioner looking into the open mouth, clockwise starting from the distalmost right maxillary teeth."
* codes from system $ADAUniversalToothDesignationSystem
* insert ADACopyrightNotice
* ^experimental = false


---

// File: input/fsh/CoverageProfile.fsh

// TODO relax meta.profile no invariant, just require at least one. Across all profiles (Jira ticket? If no ticket, create one.)

Profile: C4BBCoverage
Parent: USCoreCoverageProfile|6.1.0
Id: C4BB-Coverage
Title: "C4BB Coverage"
Description: "Data that reflect a payer’s coverage that was effective as of the date of service or the date of admission of the claim."
//* ^jurisdiction.valueCodeableConcept = "US#urn:iso:std:iso:3166"
* meta 1..1 MS
* meta.lastUpdated 1..1 MS
* meta.profile 1..*
// 20210216 CAS: FHIR-30575 Pulled from block vote1a
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBCoverage|1.2.0)
//* obeys coverage-meta-profile-version
* identifier MS 
* identifier ^short = "Member ID and other identifiers"
// 20210312 CAS: Remove per https://jira.hl7.org/browse/FHIR-31535 - Revert Coverage.Subscriber Type to that defined by the base Resource
//* subscriber 0..1 
//* subscriber only Reference(C4BBPatient)
/*
* extension contains
   $R5CoverageKind named coverage-kind 1..1 and
   InsuranceProductLine named product-line 0..1  MS and
   InsuranceProductType named product-type 0..1 MS 
   CoverageBenefitType named benefit-type 0..* MS
*/
/*
* extension[coverage-kind]
  * valueCode 1..1
  * valueCode = #insurance
//* extension[$R5CoverageKind] 1..1
//* extension[$R5CoverageKind].valueCode 1..1
/* extension contains 
//   coverage-kind 0..1

https://build.fhir.org/branches/2024-01-gg-xver-extensions2/versions.html#extensions

* extension[coverage-kind].url = $R5CoverageKind

* extension.url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-Immunization.administeredProduct"
* extension.extension.url = "reference"
* extension.extension.valueReference = Reference(Medication/something)
* occurrenceDateTime = "2024-01-01T01:01:01Z"
*/
/*

Needs to be made in to extensions
* class contains 
   product-line 0..1  MS and
   product 0..1 MS and
   benefit 0..1  MS
* class[product-line] ^short = "Product Line"
* class[product-line].type = C4BBCoverageClassCS#product-line
* class[product-line].value ^short = "Product Line"
* class[product-line].value from C4BBInsuranceProductLineVS (extensible)
* class[product-line].name ^short = "Product Line Description"

* class[product] ^short = "Product Type"
* class[product].type = C4BBCoverageClassCS#product
* class[product].value ^short = "Plan Type"
* class[product].value from C4BBInsuranceProductTypeVS (extensible)
* class[product].name ^short = "Plan Type Description"

* class[benefit] ^short = "Benefit Type"
* class[benefit].type = C4BBCoverageClassCS#benefit-type
* class[benefit].value ^short = "Benefit Type"
* class[benefit].value from http://hl7.org/fhir/us/ndh/ValueSet/NdhCoverageTypeVS (extensible)
* class[benefit].name ^short = "Benefit Type Description"
*/


* subscriberId 1..1
//* beneficiary 1..1 MS Now part of US Core 6.1
* beneficiary only Reference(C4BBPatient) 
* relationship 1..1 MS
* relationship from $SubscriberRelationship (required)
* payor 1..1 MS   // was 1..* in Balloted STU
* payor only Reference (C4BBOrganization) 

/*   Now part of US Core 6.1
* class MS 
* class ^slicing.discriminator.type = #pattern
* class ^slicing.discriminator.path = "type"
* class ^slicing.rules = #open
* class ^slicing.ordered = false   // can be omitted, since false is the default
* class ^slicing.description = "Slice based on value pattern"
* class contains 
   group 0..1  MS and
   plan 0..1 MS
* class[group] ^short = "Group"
* class[group].type = $CoverageClassCS#group
* class[group].value ^short = "Group Number"
* class[group].name ^short = "Group Name"

* class[plan] ^short = "Plan"
* class[plan].type = $CoverageClassCS#plan
* class[plan].value ^short = "Plan Number"
* class[plan].name ^short = "Plan Name"
*/

//* payor MS    Now part of US Core 6.1
//* relationship MS  Now part of US Core 6.1
//* period MS   Now part of US Core 6.1
* period MS
* subscriberId MS
//* status MS   Now part of US Core 6.1
* class[group].value MS
* class[group].name MS
* class[plan].value MS
* class[plan].name MS


* meta.lastUpdated ^comment = "Defines the date the coverage that was effective as of the date of service or admission (163). The Coverage Reference Resource SHALL be returned with data that was effective as of the date of service or admission of the claim"
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest. CPCDS data element (190)"
* status ^comment = "Identifies the status of the coverage information (default: active) (133)"
* type ^comment = "Identifies if the coverage is PPO, HMO, POS, etc. (3)"
* subscriberId  ^comment = "The identifier assigned by the Payer on the subscriber's ID card (132)"
* beneficiary ^comment = "Identifier for a member assigned by the Payer.  If members receive ID cards, that is the identifier that should be provided (1).  This is the party who receives treatment for which the costs are reimbursed under the coverage. alternate path:  EOB.patient(Patient).identifier"
* relationship ^comment = "Relationship of the member to the person insured (subscriber). (72)"
* period ^comment = "Date that the contract became effective (74) and Date that the contract was terminated or coverage changed (75)"
* payor ^comment = "Issuer of the Policy (2)"
* class[group].value ^comment = "Employer account identifier (134)"
* class[group].name ^comment = "Name of the Employer Account (135)"
* class[plan].value ^comment = "Business concept used by a health plan to describe its benefit offerings (154)"
* class[plan].name ^comment = "Name of the health plan benefit offering assigned to the Plan Identifier (155)"


/*
// TODO move to THO or correct file

CodeSystem: C4BBInsuranceProductLineCS
Title: "C4BB Insurance Product Line Code System"
Description: "Insurance Product Line Code System"
* #commercial "Commercial" "Commercial"
* #medicare "Medicare" "Medicare"
* #medicare-advantage "Medicare Advantage" "Medicare Advantage"
* #medicaid "Medicaid" "Medicaid"
* #tricare "TriCare" "TriCare"
* #champva "CHAMPVA" "Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)"
* #exchange "Exchange" "Exchange" // What is this? Is it a QHP, and if so, why does it have to be distinguished from Commercial?
* #chip "CHIP" "Children's Health Insurance Program (CHIP)"
* #corrections "Department of Corrections" "US Department of Corrections"

* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

ValueSet: C4BBInsuranceProductLineVS
Title: "C4BB Insurance Product Line Value Set"
Description: "Insurance Product Line Value Set"
* codes from system C4BBInsuranceProductLineCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

CodeSystem: C4BBInsuranceProductTypeCS
Title: "C4BB Insurance Product Type Code System"
Description: "Insurance Product Type Code System"
* #hmo "Commercial" "Commercial"
* #ppo "Medicare" "Medicare"
* #pos "Medicare POS" "Medicare Point-of-Service (POS)"
* #epo "Exclusive Provider Organization" "Exclusive Provider Organization"
* #work-comp "Worker's Comp" "Worker's Compensation"
* #ffs "Fee for Service" "Fee for Service"
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

ValueSet: C4BBInsuranceProductTypeVS
Title: "C4BB Insurance Product Type Value Set"
Description: "Insurance Product Type Value Set"
* codes from system C4BBInsuranceProductTypeCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false
*/
/*
CodeSystem: C4BBCoverageClassCS
Title: "C4BB Insurance Product Line Code System"
Description: "Insurance Product Line Code System"
* #product-line "Product Line" "Insurance Product Line"
* #product "Product" "Type of Insurance Product"
* #benefit-type "Benefit Type" "Type of benefit offered through insurance coverage"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false
*/
/*

ValueSet: C4BBCoverageClassVS
Title: "C4BB Coverage Class Value Set"
Description: "C4BB Coverage Class Value Set"
* codes from system C4BBInsuranceProductLineCS
* codes from system $CoverageClassCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false




Extension: InsuranceProductLine
//Id: usdf-FormularyReference-extension
Title: "Insurance Product Line"
Description: "Insurance Product Line."
* ^context[+].type = #element
* ^context[=].expression = "Coverage"
* value[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept from C4BBInsuranceProductLineVS (extensible)


Extension: InsuranceProductType
//Id: usdf-FormularyReference-extension
Title: "Insurance Product Type"
Description: "Insurance Product Type."
* ^context[+].type = #element
* ^context[=].expression = "Coverage"
* value[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept from C4BBInsuranceProductTypeVS (extensible)
*/
/*
Extension: CoverageBenefitType
//Id: usdf-FormularyReference-extension
Title: "Coverage Benefit Type"
Description: "Coverage Benefit Type."
* ^context[+].type = #element
* ^context[=].expression = "Coverage"
* value[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept from http://hl7.org/fhir/us/ndh/ValueSet/NdhCoverageTypeVS (extensible)
*/

---

// File: input/fsh/DEF_VersionInvariants.fsh

Invariant: patient-meta-profile-version
Description: "Patient: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Patient|2.1'))"
Severity: #warning

Invariant: relatedperson-meta-profile-version
Description: "RelatedPerson: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-RelatedPerson|2.1'))"
Severity: #warning

Invariant: practitioner-meta-profile-version
Description: "Practitioner: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner|2.1'))"
Severity: #warning

Invariant: organization-meta-profile-version
Description: "Organization: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1'))"
Severity: #warning

Invariant: coverage-meta-profile-version
Description: "Coverage: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage|2.1'))"
Severity: #warning

Invariant: EOB-institutional-inpatient-meta-profile-version
Description: "Institutional Inpatient EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional|2.1'))"
Severity: #warning

Invariant: EOB-institutional-outpatient-meta-profile-version
Description: "Institutional Outpatient EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional|2.1'))"
Severity: #warning

Invariant: EOB-professional-nonclinician-meta-profile-version
Description: "Professional and Nonclinician EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician|2.1'))"
Severity: #warning

Invariant: EOB-pharmacy-meta-profile-version
Description: "Pharmacy EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Pharmacy|2.1'))"
Severity: #warning

Invariant: EOB-oral-meta-profile-version
Description: "Oral EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Oral|2.1'))"
Severity: #warning


---

// File: input/fsh/EOBBaseProfile.fsh

Profile: C4BBExplanationOfBenefit
Parent: ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit
Title: "C4BB Explanation Of Benefit"
Description: "Abstract parent profile that includes constraints that are common to the four specific ExplanationOfBenefit (EOB) profiles defined in this Implementation Guide.
All EOB instances should be from one of the four concrete EOB profiles defined in this Implementation Guide:  Inpatient, Outpatient, Pharmacy, and Professional/NonClinician"
* meta 1..1 MS
* meta.lastUpdated 1..1 MS
* meta.profile 1..*
// 20210322 CAS: FHIR-30575

* ^abstract = true
//* identifier 1..* MS
//* identifier.type 1..1 MS
//* identifier.type from C4BBClaimIdentifierType (extensible)

* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.ordered = false   // can be omitted, since false is the default
* identifier ^slicing.description = "Slice based on value"
* identifier contains 
   uniqueclaimid 1..1  MS
* identifier[uniqueclaimid] ^short = "Unique Claim Identifier"
* identifier[uniqueclaimid].type = C4BBIdentifierType#uc
* identifier[uniqueclaimid].value ^short = "Unique Claim Identifier"
* identifier[uniqueclaimid].value 1..1 MS


//@Saul -- added status MS
* status MS
* use MS
* outcome MS

* type 1..1 MS
* type from $HL7ClaimType (required)
//   * claim MS   - igor sez we discussed removing MS
* use = #claim
* patient 1..1 MS
* provider only Reference(C4BBOrganization or C4BBPractitioner)   // based on BV2a comments 7/27
* patient only Reference (C4BBPatient)
* billablePeriod 1..1 MS
* billablePeriod.start 1..1 MS
* insurer 1..1 MS
* insurer only Reference(C4BBOrganization)
* provider 1..1 MS
* related 0..* MS
* related.relationship 1..1 MS
* related.relationship from C4BBRelatedClaimRelationshipCodes (required)
* related.reference 1..1 MS
* payee 0..1 MS
* payee obeys EOB-payee-other-type-requires-party
* payee.type 1..1 MS
* payee.type from C4BBPayeeType (required)
* payee.party 0..1 MS
* payee.party only Reference(C4BBOrganization or C4BBPatient or C4BBPractitioner or C4BBRelatedPerson)
* careTeam 0..* MS
* careTeam.provider 1..1 MS
* careTeam.provider only Reference(C4BBOrganization or C4BBPractitioner)
* careTeam.role MS
* supportingInfo 0..* MS
* supportingInfo.category from C4BBSupportingInfoType (extensible)

//* supportingInfo.category 1..1 MS
//* supportingInfo.category from C4BBSupportingInfoType (required)
* insurance 1..* MS
* insurance.coverage 1..1 MS
* insurance.focal 1..1  MS
* insurance obeys EOB-insurance-focal
* insurance.coverage only Reference(C4BBCoverage)
//* adjudication.category from C4BBAdjudicationDiscriminator (required)   // per Igor
* item 1..* MS // Make all EoB profiles require EoB.item FHIR-34114
* item.adjudication.category 1..1 MS
//* item.adjudication.category from C4BBAdjudicationDiscriminator (required)  // Per Igor
* item.noteNumber MS
* item.sequence MS
//* total.category from C4BBAdjudicationDiscriminator (required)
* payment MS
* payment.type from C4BBPayerClaimPaymentStatusCode (required)
* payment.type MS
* processNote MS
* priority from http://hl7.org/fhir/ValueSet/process-priority  // Fix a bug in R4 EOB which points to a CodeSystem.   Eliminates an error on output
// CHANGE FOR NON-FINANCIAL
//* total 1..* MS


* insert EOBBaseProfileComments




Invariant:  EOB-insurance-focal
Description: "EOB.insurance:  at most one with focal = true"
//Expression: "insurance.select (focal = true).count() < 2"
// TODO Add Jira ticket
Expression: "select (focal = true).count() < 2"
Severity:   #error

Invariant: EOB-inst-careTeam-practitioner // rewritten with input from Lee Surprenant FHIR-28530
Description: "Institutional EOB: Careteam roles refer to a practitioner"
/*Expression: "(
role.where(coding.where(code in ('attending' | 'primary' | 'referring' | 'supervising')).exists()).exists() implies
role.where(coding.where(code in ('attending' | 'primary' | 'referring' | 'supervising')).exists()).exists().provider.all(resolve() is Practitioner)
)"
*/
// TODO Add Jira ticket
Expression: "(
role.where(coding.where(code in ('attending' | 'primary' | 'referring' | 'supervisor')).exists()).exists() implies
provider.all(resolve() is Practitioner)
)"
Severity: #error

Invariant: EOB-inst-careTeam-organization    // rewritten with input from Lee Surprenant  FHIR-28530
Description: "Institutional EOB: Careteam roles refer to an organization"
// TODO Add Jira ticket
/*
Expression:   "(
role.where(coding.where(code in ('rendering' )).exists()).exists() implies
role.where(coding.where(code in ('rendering' )).exists()).exists().provider.all(resolve() is Organization)
)"
*/
Expression:   "(
role.where(coding.where(code in ('rendering' )).exists()).exists() implies
provider.all(resolve() is Organization)
)"
Severity: #error

Invariant: EOB-careteam-qualification
Description: "Care Team Rendering physician's qualifications are from Healthcare Provider Taxonomy Value Set"
//Expression: "where(role.where(coding.code in ('rendering')).exists().not() or qualification.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066')).exists()" // FHIR-35889
//Expression: "where(role.where(coding.code in ('rendering')).exists().not() or qualification.where(coding.system = 'http://nucc.org/provider-taxonomy')).exists()"
Expression: "where(role.where(coding.code in ('rendering')).exists().not() or qualification.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066')).exists()"
/* Expression: "(
#role.where(coding.where(code in ('rendering' )).exists()).exists() implies
role.where(coding.where(code in ('rendering' )).exists()).exists().qualification.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066')
)"
*/
Severity: #error

Invariant: EOB-pharm-careTeam-practitioner
Description: "Pharmacy EOB: Careteam roles refer to a practitioner"
// TODO Add Jira Ticket
/*
Expression: "(
role.where(coding.where(code in ('primary' | 'prescribing' )).exists()).exists() implies
role.where(coding.where(code in ('primary' | 'prescribing' )).exists()).exists().provider.all(resolve() is Organization)
)"
*/
Expression: "(
role.where(coding.where(code in ('primary' | 'prescribing' )).exists()).exists() implies
provider.all(resolve() is Organization)
)"
Severity: #error

Invariant: EOB-pharm-careTeam-organization
Description: "Pharmacy EOB: Careteam roles refer to an organization"
// TODO Add Jira Ticket
/*
Expression: "(
role.where(coding.where(code in ('rendering' )).exists()).exists() implies
role.where(coding.where(code in ('rendering' )).exists()).exists().provider.all(resolve() is Organization)
)"
*/
Expression: "(
role.where(coding.where(code in ('rendering' )).exists()).exists() implies
provider.all(resolve() is Organization)
)"
Severity: #error

Invariant: EOB-prof-careTeam-practitioner
Description: "Professional EOB:  Careteam roles refer to a practitioner"
// TODO Add Jira Ticket
/*
Expression: "(
role.where(coding.where(code in ('rendering' | 'primary' | 'referring' | 'supervising')).exists()).exists() implies
role.where(coding.where(code in ('rendering' | 'primary' | 'referring' | 'supervising' )).exists()).exists().provider.all(resolve() is Practitioner)
)"
*/
Expression: "(
role.where(coding.where(code in ('rendering' | 'primary' | 'referring' | 'supervisor')).exists()).exists() implies
provider.all(resolve() is Practitioner)
)"
Severity: #error



Invariant: EOB-prof-all-transportation-supportinginfo-linked-to-line
Description: "Professional EOB: SupportingInfo repetitions with with transportation category code must be referred to by one or more repetitions of item.informationSequence"
Expression: "supportingInfo.where(category.memberOf('http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBTransportationServiceCategories')).sequence.subsetOf(%context.item.informationSequence)"
Severity: #error



Invariant: EOB-institutional-item-or-header-adjudication
Description: "Institutional EOB:  Should have adjudication with adjudicationamounttype slice at the item or header level, but not both"
Expression: "adjudication.where(category.memberOf('http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBAdjudication')).exists() != item.adjudication.where(category.memberOf('http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBAdjudication')).exists()"
Severity: #error


Invariant: adjudication-has-amount-type-slice
Description: "If Adjudication is present, it must have at least one adjudicationamounttype slice"
Expression: "(adjudication.exists().not() or adjudication.where(category.memberOf('http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBAdjudication')).exists())"
Severity: #error

// 20211110 CAS: https://jira.hl7.org/browse/FHIR-32850
/*
Invariant: EOB-out-inst-item-productorservice
Description: "Outpatient Institutional EOB:  Item productOrService required. Data absent reason of Not Applicable is not allowed."
Expression: "coding.where(code = 'not-applicable' and system = 'http://terminology.hl7.org/CodeSystem/data-absent-reason').exists().not()"
Severity: #error
*/

// 20210203 CAS: https://jira.hl7.org/browse/FHIR-33024
Invariant: EOB-vision-item-productorservice
Description: "Vision EOB: Item productOrService not required in item.productOrService if and only if type is vision."
// TODO Add Jira Ticket
//Expression: "ExplanationOfBenefit.type.coding.where(code = 'vision' and system='http://terminology.hl7.org/CodeSystem/claim-type').exists() or ExplanationOfBenefit.item.productOrService.coding.where(code = 'not-applicable' and system = 'http://terminology.hl7.org/CodeSystem/data-absent-reason').exists().not()"
Expression: "type.coding.where(code = 'vision' and system='http://terminology.hl7.org/CodeSystem/claim-type').exists() or item.productOrService.coding.where(code = 'not-applicable' and system = 'http://terminology.hl7.org/CodeSystem/data-absent-reason').exists().not()"
Severity: #error


// 20210203 CAS: https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
Invariant: EOB-inst-pointoforigin
Description: "Where Admission Type and Point of Origin slices exist, if Type of Admission code is Newborn, Point of Origin must be from Point of Origin - Newborn CodeSystem  or Type of Admission is not Newborn and Point of Origin must be from Point of Origin Nonnewborn CodeSystem."
//Expression: "(supportingInfo.where(code.coding.system = 'https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit' and code.coding.code = '4').exists() and supportingInfo.where(code.coding.system='AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn').exists()).not() and (supportingInfo.where(code.coding.system = 'https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit' and code.coding.code != '4').exists() and supportingInfo.where(code.coding.system = 'https://www.nubc.org/CodeSystem/PointOfOriginNewborn').exists() ).not()"
Expression: "(supportingInfo.where(code.coding.where(system = 'https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit').exists() and code.coding.where(code = '4').exists()).exists() and supportingInfo.where(code.coding.where(system='AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn').exists()).exists()).not() and (supportingInfo.where(code.coding.where(system = 'https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit').exists() and code.coding.where(code = '4').exists().not()).exists() and supportingInfo.where(code.coding.where(system = 'https://www.nubc.org/CodeSystem/PointOfOriginNewborn').exists()).exists() ).not()"
Severity: #error


Invariant: EOB-payee-other-type-requires-party
Description: "Base EOB: if payee type is other, payee party is required"
Expression: "type.coding.where(code = 'other' and system = 'http://terminology.hl7.org/CodeSystem/payeetype').exists() implies party.exists()"
Severity: #error





// Rulesets
RuleSet: ItemAdjudicationInvariant
* item obeys adjudication-has-amount-type-slice

/* removed - FHIR-38063 - Update Invariants to support contracting and benefit payment status move to EOB.adjudication
RuleSet: AdjudicationInvariant
* obeys adjudication-has-amount-type-slice
*/
RuleSet: EOBHeaderItemAdjudicationInvariant
* obeys EOB-institutional-item-or-header-adjudication

RuleSet: AdjudicationSlicing
* adjudication ^slicing.rules = #open
* adjudication ^slicing.discriminator.path = "category"
* adjudication ^slicing.ordered = false   // can be omitted, since false is the default
* adjudication ^slicing.description = "Slice based on value"
* adjudication ^slicing.discriminator.type = #value
* adjudication.category 1..1 MS
* adjudication.category from C4BBAdjudicationCategoryDiscriminator (extensible)

RuleSet: SupportingInfoSlicing
* supportingInfo ^slicing.discriminator.type = #value
* supportingInfo ^slicing.discriminator.path = "category"
* supportingInfo ^slicing.rules = #open
* supportingInfo ^slicing.ordered = false   // can be omitted, since false is the default
* supportingInfo ^slicing.description = "Slice based on $this value"
* supportingInfo MS
// * supportingInfo.category MS  -- we will flag in each slice

RuleSet: TotalSlicing
* total ^slicing.rules = #open
* total ^slicing.ordered = false   // can be omitted, since false is the default
* total ^slicing.description = "Slice based on value"
* total  ^slicing.discriminator.type = #value
* total  ^slicing.discriminator.path = "category"
* total.category 1..1 MS


RuleSet: ItemAdjudicationSlicing
* item.adjudication ^slicing.rules = #open
* item.adjudication ^slicing.ordered = false   // can be omitted, since false is the default
* item.adjudication ^slicing.description = "Slice based on value"
* item.adjudication ^slicing.discriminator.type = #value
* item.adjudication ^slicing.discriminator.path = "category"
* item.adjudication.category from C4BBAdjudicationCategoryDiscriminator (extensible)

RuleSet: EOBBaseProfileComments
* meta.lastUpdated ^comment = "Defines the date the Resource was created or updated, whichever comes last (163). Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last"
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest. CPCDS data element (190)"
* identifier ^comment = "Identifier assigned by a payer for a claim received from a provider or subscriber. It is not the same identifier as that assigned by a provider. (35)"
* identifier.type ^comment = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber. (183)"
* status ^comment = "Claim processing status code (140).  Expected values are active or cancelled.  To comply with the CMS rule, draft EOBs are not required"
* type ^comment = "Specifies the type of claim. (e.g., inpatient institutional, outpatient institutional, physician, etc.) (16).  Defines the Claims profiles.  Values from Claim Type Codes are required; a data absent reason is not allowed"
* use ^comment = "Expected value is claim. The CMS rule applies to adjudicated claims; it does not require preauthorizations or predeterminations"
* patient ^comment = "Identifier for a member assigned by the Payer.  If members receive ID cards, that is the identifier that should be provided. (1). The patient must be supplied to the insurer so that confirmation of coverage and service history may be considered as part of the authorization and/or adjudication. Additional required path:EOB.insurance.coverage(Coverage).beneficiary(Patient).identifier"
* billablePeriod.start ^comment = "The first day on the billing statement covering services rendered to the beneficiary (i.e. 'Statement Covers From Date’). (177)"
* billablePeriod.end ^comment = "The last day on the billing statement covering services rendered to the beneficiary (i.e. 'Statement Covers Thru Date’). (178)"
* created ^comment = "Date the claim was adjudicated (179)"
* insurer ^comment = "Code of the payer responsible for the claim (2, 5).  Same as insurance.coverage.organization.  Party responsible for reimbursing the provider"
* provider ^comment = "The identifier assigned to the Billing Provider. (94)"
* related ^comment = "If the current claim represents a claim that has been adjusted and was given a prior claim number, this field represents the prior claim number. If the current claim has been adjusted; i.e., replaced by or merged to another claim number, this data element represents that new number.(111, 112)"
* payee.type ^comment = "Identifies the type of recipient of the adjudication amount; i.e., provider, subscriber, beneficiary or another recipient. (120)"
* payee.party ^comment = "Recipient reference (121)"
* outcome ^comment = "Expected value is complete"
* item.noteNumber ^comment = "References number of the associated processNote entered"
* careTeam.provider ^comment = "The identifier assigned to the care team. (varies depending on the profile)"
* careTeam.role ^comment = "The functional role of a provider on a claim. (165)"
* careTeam.sequence ^comment = "careTeam.sequence values uniquely identify careTeam members.  They do not necessarily indicate any order in which the patient was seen by the careTeam or identify any level of significance of the careTeam to the patient, etc.  Client app implementations should not assign any significance to the sequence values"
* supportingInfo ^comment = "Defines data elements not available in the base EOB resource"
* supportingInfo.sequence ^comment = "Client app implementations should look-up supportingInfo elements based on category values instead of sequence values"
* insurance ^comment = "Identity of the payers responsible for the claim. (2, 141).  All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. An invariant is defined to enforce the following rule:  Will have multiple occurrences on secondary / tertiary, etc. claims.  Up to one occurrence, that of the ExplanationOfBenefit.insurer, will have a boolean value = 'True'"
* insurance.focal ^comment = "A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies. An invariant is defined to enforce the following rule:  Will have multiple occurrences on secondary / tertiary, etc. claims.  Up to one occurrence, that of the ExplanationOfBenefit.insurer, will have a boolean value = 'True'"
* insurance.coverage ^comment = "Same as insurance.coverage.organization.  Party responsible for reimbursing the provider. When focal = true, Coverage.payer--> Organization.identifier.  When focal = false, EOB.insurance.coverage.display = [name of other carrier]"
* item.sequence ^comment = "Line identification number that represents the number assigned in a source system for identification and processing. (36)"
* payment.type ^comment = "Indicates whether the claim was paid or denied. (91)"
* payment.date ^comment = "The date the claim was paid. (107)"
* processNote.text ^comment = "Payment denial explanation to a member, typically goes on the EOB when the payment is denied or disallowed (181)"

// 20210322 CAS: FHIR-30575
/*
RuleSet: Metaprofile-supportedProfile-slice
* meta.profile ^slicing.discriminator.type = #pattern
* meta.profile ^slicing.discriminator.path = "$this"
* meta.profile ^slicing.rules = #open
* meta.profile ^slicing.ordered = false
* meta.profile ^slicing.description = "Slice based on value"
* meta.profile contains supportedProfile 1..1
*/

---

// File: input/fsh/EOBInpatientProfile.fsh

Profile: C4BBExplanationOfBenefitInpatientInstitutionalBasis
Parent: C4BB-ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis
Title: "C4BB ExplanationOfBenefit Inpatient Institutional Basis"
Description: "The basis profile is used for Explanation of Benefits (EOBs) based on claims submitted by clinics, hospitals, skilled nursing facilities and other institutions for inpatient services, which may include the use of equipment and supplies, laboratory services, radiology services and other charges. Inpatient claims are submitted for services rendered at an institution as part of an overnight stay.
The claims data is based on the institutional claim format UB-04, submission standards adopted by the Department of Health and Human
Services.
The basis profile does not have requirements for financial data."
// 20210322 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitInpatientInstitutional|1.2.0)
//* obeys EOB-institutional-inpatient-meta-profile-version
//@Saul -- added MS
* use MS
* outcome MS

// 20210203 CAS: https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
* obeys EOB-inst-pointoforigin


//* type.coding 1..1 MS   // commenting this line leads to a failure
* type = $HL7ClaimTypeCS#institutional
* subType 1..1 MS
* subType from C4BBInstitutionalClaimSubType (required)
* subType = C4BBInstitutionalClaimSubType#inpatient
* careTeam.role from C4BBClaimInstitutionalCareTeamRole  (required)  // was  PayerInstitutionalProviderRole
* careTeam.role 1..1 MS
* careTeam obeys EOB-inst-careTeam-practitioner
* careTeam obeys EOB-inst-careTeam-organization
* billablePeriod 1..1 MS
* diagnosis 1..* MS
* diagnosis.type 1..1 MS
* diagnosis.type from C4BBClaimInpatientInstitutionalDiagnosisType  (required)
* diagnosis.diagnosis[x] 1..1 MS
* diagnosis.diagnosis[x] only CodeableConcept
* diagnosis.diagnosis[x] from CDCICD910CMDiagnosisCodes (required)
* diagnosis.onAdmission 0..1 MS
* diagnosis.onAdmission from CMSPresentOnAdmissionIndicator (required)
* procedure.procedure[x] only CodeableConcept
* procedure.procedure[x] 1..1 MS
* procedure.procedure[x] from CMSICD910PCSProcedureCodes (required)
* procedure.type from C4BBClaimProcedureType (required)
* procedure 0..* MS
* procedure.type 1..1 MS
* procedure.date 0..1 MS
* provider 1..1
* provider only Reference(C4BBOrganization)
* insert SupportingInfoSlicing
* supportingInfo contains
     admissionperiod 1..1 MS  and
     clmrecvddate 0..1 MS and
     typeofbill 0..1 MS and
     pointoforigin 0..1 MS and
     admtype 0..1 MS and
     discharge-status 0..1 MS and
     drg 0..1 MS and
     // 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number
     medicalrecordnumber 0..1 MS and
     patientaccountnumber 0..1 MS


* supportingInfo[admissionperiod] ^short = "Admission Period"
* supportingInfo[admissionperiod].category = C4BBSupportingInfoType#admissionperiod
* supportingInfo[admissionperiod].category  MS
* supportingInfo[admissionperiod].timingPeriod 1..1 MS

* supportingInfo[clmrecvddate] ^short = "Claim received date"
* supportingInfo[clmrecvddate].category  = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].category  MS
* supportingInfo[clmrecvddate].timing[x] only date
* supportingInfo[clmrecvddate].timing[x] 1..1 MS

* supportingInfo[typeofbill] ^short = "Type of bill"
* supportingInfo[typeofbill].category  = C4BBSupportingInfoType#typeofbill
* supportingInfo[typeofbill].category MS
* supportingInfo[typeofbill].code from AHANUBCTypeOfBill (required)
* supportingInfo[typeofbill].code 1..1 MS

* supportingInfo[admtype] ^short = "Admission type"
* supportingInfo[admtype].category  = C4BBSupportingInfoType#admtype
* supportingInfo[admtype].category MS
* supportingInfo[admtype].code from AHANUBCPriorityTypeOfAdmissionOrVisit  (required)
* supportingInfo[admtype].code 1..1 MS

* supportingInfo[pointoforigin] ^short = "Point of origin for admission"
* supportingInfo[pointoforigin].category  = C4BBSupportingInfoType#pointoforigin
* supportingInfo[pointoforigin].category MS
* supportingInfo[pointoforigin].code from AHANUBCPointOfOriginForAdmissionOrVisit (required)
* supportingInfo[pointoforigin].code 1..1 MS

* supportingInfo[discharge-status] ^short = "Discharge status"
* supportingInfo[discharge-status].category  = C4BBSupportingInfoType#discharge-status
* supportingInfo[discharge-status].category MS
* supportingInfo[discharge-status].code from AHANUBCPatientDischargeStatus   (required)
* supportingInfo[discharge-status].code 1..1 MS

* supportingInfo[drg] ^short = "Diagnosis Related Group"
* supportingInfo[drg].category  = C4BBSupportingInfoType#drg
* supportingInfo[drg].category MS
// CAS 20210118: https://jira.hl7.org/browse/FHIR-30380  Allow state assigned DRGs in the DRG Value Set
* supportingInfo[drg].code from CMSMS3MAPAPRDRG  (extensible)
* supportingInfo[drg].code 1..1 MS
// 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number

* supportingInfo[medicalrecordnumber] ^short = "Medical record number"
* supportingInfo[medicalrecordnumber].category = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString 1..1 MS

* supportingInfo[patientaccountnumber] ^short = "Patient account number"
* supportingInfo[patientaccountnumber].category = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString 1..1 MS

* item.revenue from AHANUBCRevenueCodes (required)
* item.modifier from AMACPTCMSHCPCSModifiers (required)
* item.productOrService from C4BBEOBInstitutionalProcedureCodes (required)

// CHANGE FOR NON-FINANCIAL
//* insert EOBHeaderItemAdjudicationInvariant
// CHANGE FOR NON-FINANCIAL
//* insert ItemAdjudicationInvariant

* insert ItemAdjudicationSlicing
* item.adjudication contains
// CHANGE FOR NON-FINANCIAL
//   adjudicationamounttype 0..* MS and   /* restricted to 1..* by invariant */
   adjustmentreason 0..* MS and
   allowedunits 0..1 MS

* item.adjudication[allowedunits] ^short = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider.  (149)"
* item.adjudication[allowedunits].category = C4BBAdjudicationDiscriminator#allowedunits
* item.adjudication[allowedunits].value only decimal
// FHIR-30807 - Change cardinality in EOB Inpatient and Outpatient Institutional Profiles
* item.adjudication[allowedunits].value 1..1 MS

* item.adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"
* item.adjudication[adjustmentreason].category = C4BBAdjudicationDiscriminator#adjustmentreason
* item.adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* item.adjudication[adjustmentreason].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/*
* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount MS
* item.adjudication[adjudicationamounttype].amount 1..1
*/
/* removed - FHIR-38063 - Update Invariants to support contracting and benefit payment status move to EOB.adjudication
* insert AdjudicationInvariant
*/
* insert AdjudicationSlicing
* adjudication MS
* item.adjudication  MS
* adjudication contains
   billingnetworkstatus 0..1 MS and
   benefitpaymentstatus 1..1 MS and
// CHANGE FOR NON-FINANCIAL   
//   adjudicationamounttype 0..* MS and   /* restricted to 1..* by invariant */
   adjustmentreason 0..* MS


* adjudication[billingnetworkstatus] ^short = "Billing provider network status"
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].category MS
* adjudication[billingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[billingnetworkstatus].reason 1..1 MS

* adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* adjudication[benefitpaymentstatus].reason 1..1 MS

* adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"
* adjudication[adjustmentreason].category = C4BBAdjudicationDiscriminator#adjustmentreason
* adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* adjudication[adjustmentreason].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/*
* adjudication[adjudicationamounttype] ^short = "Claim level adjudication type and amount"
* adjudication[adjudicationamounttype].category from C4BBAdjudication  (required)
* adjudication[adjudicationamounttype].amount 1..1
*/
/*
* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
* total[adjudicationamounttype].amount MS
* total[adjudicationamounttype].amount 1..1
*/
* patient MS
* insurer MS
// 20210309 CAS: FHIR-31477 - Change cardinality of inpatient profile's insurance to 1..* to allow for coordination of benefits, consistent with the rest of the CARIN EOB profiles
//* insurance 1..1 MS
* type MS
* diagnosis.onAdmission MS
* identifier MS
* item.sequence MS
* item.productOrService MS
* item.modifier MS
* item.quantity MS
* item.revenue 1..1 MS
* payment.type MS
* careTeam.provider MS
* provider MS
* careTeam.provider MS
* careTeam.provider MS
* careTeam.provider MS
* payment.date MS
* related MS
* related MS
* payee.type MS
* payee.party MS
* status MS
* insurance MS
* procedure MS
* procedure MS
* meta MS
* careTeam.role MS
* careTeam.provider MS
* provider MS
* careTeam.provider MS
* careTeam.provider MS
* careTeam.provider MS
* careTeam.provider MS
* insurer MS
* insurance MS
* created MS
* processNote MS
* processNote.text MS
* careTeam.provider MS
* billablePeriod.start MS
* billablePeriod.end MS

* supportingInfo[pointoforigin] ^comment = "Identifies the place where the patient was identified as needing admission to an institution. This is a two position code mapped from the standard values for the UB-04 Source of Admission code (FL-15). (13)"
* supportingInfo[admtype] ^comment = "Priority of the admission. Information located on (UB04 Form Locator 14). For example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled. (14)"
* supportingInfo[typeofbill] ^comment = "UB04 (Form Locator 4) type of bill code provides specific information for payer purposes. The first digit of the three-digit number denotes the type of institution, the second digit classifies the type of care being billed, and the third digit  identifies the frequency of the bill for a specific course of treatment or inpatient confinement. (17)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[admissionperiod] ^comment = "The Period.start date corresponds with the date the beneficiary was admitted to a facility and the onset of services. May precede the Statement From Date if this claim is for a beneficiary who has been continuously under care. The Period.end date corresponds with the date beneficiary was discharged from the facility, or died. Matches the final Statement Thru Date. When there is a discharge date, the Patient Discharge Status Code indicates the final disposition of the patient after discharge. (18, 19)"
* supportingInfo[drg] ^comment = "Claim diagnosis related group (DRG). DRGs require the DRG system; i.e., MS-DRG / AP-DRG / APR-DRG, the DRG version and the code value (32, 33. 113)"
* supportingInfo[discharge-status] ^comment = "Patient’s status as of the discharge date for a facility stay. Information located on UB04. (Form Locator 17). (117)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* diagnosis.onAdmission ^comment = "Used to capture whether a diagnosis was present at time of a patient's admission. (28)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment =  "Indicates if the inpatient institutional diagnosis is admitting, principal, other or an external cause of injury. (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (42)"
* item.revenue ^comment = "Code used on the UB-04 (Form Locator 42) to identify a specific accommodation, ancillary service, or billing calculation related to the service being billed (86)"
* adjudication[adjustmentreason].reason ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the care team (primary care provider, attending, referring, otheroperating, operating, and rendering) for the admission. (93, 96, 98, 99, 173)"
* procedure ^comment = "Medical procedure a patient received during inpatient stay. Current coding methods include: International Classification of Diseases Surgical Procedures (ICD-9). Information located on UB04 (Form Locator 74). (25, 27, 10, 12)"
* procedure.type ^comment = "Indicates if the inpatient institutional procedure (ICD-PCS) is the principal procedure or another procedure. (186)"
* procedure.sequence ^comment =  " procedure.sequence values do not necessarily indicate any order in which the procedure occurred.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of procedure.type to identify primary and secondary procedures"


* insert EOBBaseProfileComments



Profile: C4BBExplanationOfBenefitInpatientInstitutional
Parent: C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis
Id: C4BB-ExplanationOfBenefit-Inpatient-Institutional
Title: "C4BB ExplanationOfBenefit Inpatient Institutional"
Description: "The profile is used for Explanation of Benefits (EOBs) based on claims submitted by clinics, hospitals, skilled nursing facilities and other institutions for inpatient services, which may include the use of equipment and supplies, laboratory services, radiology services and other charges. Inpatient claims are submitted for services rendered at an institution as part of an overnight stay.
The claims data is based on the institutional claim format UB-04, submission standards adopted by the Department of Health and Human
Services.
The profile has requirements for financial data."

* obeys EOB-institutional-inpatient-meta-profile-version
* insert EOBHeaderItemAdjudicationInvariant
* insert ItemAdjudicationInvariant
//* insert ItemAdjudicationSlicing
* item.adjudication contains
   adjudicationamounttype 0..* MS  /* restricted to 1..* by invariant */

* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount MS
* item.adjudication[adjudicationamounttype].amount 1..1

//* insert AdjudicationSlicing
* adjudication contains
   adjudicationamounttype 0..* MS  /* restricted to 1..* by invariant */


* adjudication[adjudicationamounttype] ^short = "Claim level adjudication type and amount"
* adjudication[adjudicationamounttype].category from C4BBAdjudication  (required)
* adjudication[adjudicationamounttype].amount 1..1

* total 1..* MS
* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
* total[adjudicationamounttype].amount MS
* total[adjudicationamounttype].amount 1..1


* supportingInfo[pointoforigin] ^comment = "Identifies the place where the patient was identified as needing admission to an institution. This is a two position code mapped from the standard values for the UB-04 Source of Admission code (FL-15). (13)"
* supportingInfo[admtype] ^comment = "Priority of the admission. Information located on (UB04 Form Locator 14). For example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled. (14)"
* supportingInfo[typeofbill] ^comment = "UB04 (Form Locator 4) type of bill code provides specific information for payer purposes. The first digit of the three-digit number denotes the type of institution, the second digit classifies the type of care being billed, and the third digit  identifies the frequency of the bill for a specific course of treatment or inpatient confinement. (17)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[admissionperiod] ^comment = "The Period.start date corresponds with the date the beneficiary was admitted to a facility and the onset of services. May precede the Statement From Date if this claim is for a beneficiary who has been continuously under care. The Period.end date corresponds with the date beneficiary was discharged from the facility, or died. Matches the final Statement Thru Date. When there is a discharge date, the Patient Discharge Status Code indicates the final disposition of the patient after discharge. (18, 19)"
* supportingInfo[drg] ^comment = "Claim diagnosis related group (DRG). DRGs require the DRG system; i.e., MS-DRG / AP-DRG / APR-DRG, the DRG version and the code value (32, 33. 113)"
* supportingInfo[discharge-status] ^comment = "Patient’s status as of the discharge date for a facility stay. Information located on UB04. (Form Locator 17). (117)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* total[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* total.amount ^comment = "Total amount for each category (i.e., submitted, allowed, etc.) (148)"
* diagnosis.onAdmission ^comment = "Used to capture whether a diagnosis was present at time of a patient's admission. (28)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment =  "Indicates if the inpatient institutional diagnosis is admitting, principal, other or an external cause of injury. (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (42)"
* item.revenue ^comment = "Code used on the UB-04 (Form Locator 42) to identify a specific accommodation, ancillary service, or billing calculation related to the service being billed (86)"
* adjudication[adjustmentreason].reason ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the care team (primary care provider, attending, referring, otheroperating, operating, and rendering) for the admission. (93, 96, 98, 99, 173)"
* procedure ^comment = "Medical procedure a patient received during inpatient stay. Current coding methods include: International Classification of Diseases Surgical Procedures (ICD-9). Information located on UB04 (Form Locator 74). (25, 27, 10, 12)"
* procedure.type ^comment = "Indicates if the inpatient institutional procedure (ICD-PCS) is the principal procedure or another procedure. (186)"
* procedure.sequence ^comment =  " procedure.sequence values do not necessarily indicate any order in which the procedure occurred.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of procedure.type to identify primary and secondary procedures"


* insert EOBBaseProfileComments

---

// File: input/fsh/EOBOralProfile.fsh

Profile: C4BBExplanationOfBenefitOralBasis
Parent: C4BB-ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit-Oral-Basis
Title: "C4BB ExplanationOfBenefit Oral Basis"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by providers of oral services including Dental, Denture and Hygiene. The ADA Dental Claim Form provides a common format for reporting dental services to a patient's dental benefit plan.
The basis profile does not have requirements for financial data."
// 20210216 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitOral|1.2.0)
//* obeys EOB-oral-meta-profile-version


* obeys Oral-EOB-supportinginfo-additionalbodysite-requires-line-item
* obeys Oral-line-item-with-linked-additionalbody-site-requires-bodysite
* obeys Oral-EOB-surface-subsite-requires-tooth-number

* careTeam obeys EOB-prof-careTeam-practitioner
* careTeam.qualification MS
* careTeam.qualification from $USCoreProviderSpecialty (required)  // cardinality constraint?
* type = $HL7ClaimTypeCS#oral
* provider only Reference(C4BBPractitioner or C4BBOrganization)
* insert SupportingInfoSlicing
* supportingInfo contains
   clmrecvddate 0..1 MS and
   servicefacility 0..1 MS and
   orthodontics 0..1 MS and
   prosthesis 0..1 MS and
   additionalbodysite 0..* MS and
   missingtoothnumber 0..* MS and
   medicalrecordnumber 0..1 MS and
   patientaccountnumber 0..1 MS
   

* supportingInfo[clmrecvddate] ^short = "Claim received date"
* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].category MS
* supportingInfo[clmrecvddate].timing[x] only date
* supportingInfo[clmrecvddate].timing[x] 1..1 MS

* supportingInfo[servicefacility] ^short = "Service facility"
* supportingInfo[servicefacility].category = C4BBSupportingInfoType#servicefacility
* supportingInfo[servicefacility].category MS
* supportingInfo[servicefacility].valueReference 1..1 MS
* supportingInfo[servicefacility].valueReference only Reference(C4BBOrganization)


* supportingInfo[orthodontics] ^short = "Orthodontics treatment indicator"
* supportingInfo[orthodontics].category = C4BBSupportingInfoType#orthodontics
* supportingInfo[orthodontics].category MS
* supportingInfo[orthodontics].timingDate ^short = "Orthodontics appliance application date (200)"
* supportingInfo[orthodontics].value[x] only Quantity
* supportingInfo[orthodontics].value[x] 1..1 MS
* supportingInfo[orthodontics].valueQuantity ^short = "Total number of months for orthodontia"

* supportingInfo[prosthesis] ^short = "Prosthesis"
* supportingInfo[prosthesis].category = C4BBSupportingInfoType#prosthesis
* supportingInfo[prosthesis].category MS
* supportingInfo[prosthesis].value[x] only boolean
* supportingInfo[prosthesis].value[x] 1..1 MS
* supportingInfo[prosthesis].valueBoolean ^short = "Prosthesis replacement indicator (202"
* supportingInfo[prosthesis].timingDate ^short = "Date of prior prosthesis replacement  (203)"

* supportingInfo[additionalbodysite] ^short = "Additional tooth number or oral cavity code"
* supportingInfo[additionalbodysite].category = C4BBSupportingInfoType#additionalbodysite
* supportingInfo[additionalbodysite].category MS
* supportingInfo[additionalbodysite].sequence MS
* supportingInfo[additionalbodysite].code 1..1 MS
* supportingInfo[additionalbodysite].code from OralBodySite (required)

* supportingInfo[missingtoothnumber] ^short = "Missing tooth number"
* supportingInfo[missingtoothnumber].category = C4BBSupportingInfoType#missingtoothnumber
* supportingInfo[missingtoothnumber].category MS
* supportingInfo[missingtoothnumber].code 1..1 MS
* supportingInfo[missingtoothnumber].code from ADAUniversalNumberingSystem (required)

* supportingInfo[medicalrecordnumber] ^short = "Medical record number"
* supportingInfo[medicalrecordnumber].category = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString 1..1 MS

* supportingInfo[patientaccountnumber] ^short = "Patient account number"
* supportingInfo[patientaccountnumber].category = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString 1..1 MS

* careTeam.role from C4BBClaimProfessionalAndNonClinicianCareTeamRole   (required)  // was PayerProfessionalAndNonClinicianProviderRole
* careTeam.role 1..1 MS
* diagnosis 0..* MS
* diagnosis.type 1..1 MS
* diagnosis.type from C4BBClaimProfessionalAndNonClinicianDiagnosisType  (required)
* diagnosis.diagnosis[x] 1..1 MS
* diagnosis.diagnosis[x] only CodeableConcept
* diagnosis.diagnosis[x] from CDCICD910CMDiagnosisCodes (required)
* item.modifier from AMACPTCMSHCPCSModifiers (required)

* item.informationSequence MS
* item.modifier MS
* item.productOrService from ADADentalProcedureCode (required)

* item.productOrService MS
* item.productOrService MS
* item.serviced[x] 1..1 MS
* item.location[x] 1..1 MS
* item.location[x] only CodeableConcept
* item.locationCodeableConcept from CMSPlaceofServiceCodes (required)

* item.bodySite MS
* item.bodySite ^short = "First tooth number or oral cavity code"
* item.bodySite from OralBodySite (required) // may change to $ToothNumber
* item.subSite ^short = "Tooth surface for all teeth on line"
* item.subSite from C4BBSurfaceCodes (required)

* insert AdjudicationSlicing
* adjudication MS
* adjudication contains
   billingnetworkstatus 0..1 MS and
   renderingnetworkstatus 1..1 MS and 
   benefitpaymentstatus 1..* MS

* adjudication[billingnetworkstatus] ^short = "Billing provider network status"
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].category MS
* adjudication[billingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[billingnetworkstatus].reason 1..1 MS

* adjudication[renderingnetworkstatus] ^short = "Rendering provider network status"
* adjudication[renderingnetworkstatus].category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
* adjudication[renderingnetworkstatus].category MS
* adjudication[renderingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[renderingnetworkstatus].reason 1..1 MS

* adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* adjudication[benefitpaymentstatus].reason 1..1 MS

* insert ItemAdjudicationSlicing
* item.adjudication MS
* item.adjudication contains
// CHANGE FOR NON-FINANCIAL   
//   adjudicationamounttype 1..* MS and
   adjustmentreason 0..1 MS and
   benefitpaymentstatus 1..1 MS and
   allowedunits 0..1 MS
* item.adjudication[allowedunits] ^short = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider.  (149)"
* item.adjudication[allowedunits].category = C4BBAdjudicationDiscriminator#allowedunits
* item.adjudication[allowedunits].value only decimal

* item.adjudication[adjustmentreason].category  = C4BBAdjudicationDiscriminator#adjustmentreason
* item.adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* item.adjudication[adjustmentreason].reason 1..1 MS
* item.adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"

// CHANGE FOR NON-FINANCIAL
/* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype] ^short = "Amounts"
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1
*/
* item.adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* item.adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item.adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* item.adjudication[benefitpaymentstatus].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL

/* insert TotalSlicing
//* total.category from C4BBAdjudication  (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication (required)
*/


* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[servicefacility] ^comment = "Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rendering Provider. Service Facility Location is not just an address nor is it a patient’s home. Examples of Service Facility Location include hospitals, nursing homes, laboratories or homeless shelter. Service Facility Location identifier is the facility’s Type 2 Organization NPI if they are a health care provider as defined under HIPAA.
If the service facility is not assigned an NPI, this data element will not be populated.  Reference CMS 1500 element 32a (97, 170, 176)"

* supportingInfo[orthodontics] ^comment = "Orthodontics Treatment Indicator (199)"
* supportingInfo[orthodontics].code ^comment = "Indicates if the treatment is for orthodontics (199)"
* supportingInfo[orthodontics].timingDate ^comment = "Orthodontics Appliance Application Date (200)"
* supportingInfo[orthodontics].valueQuantity ^comment = "Total Number of Months for Orthodontia (201)"

* supportingInfo[prosthesis] ^comment = "Prosthesis Replacement Indicator (202)"
* supportingInfo[prosthesis].valueBoolean ^comment = "Prosthesis Replacement Indicator (202)"
* supportingInfo[prosthesis].timingDate ^comment = "Date of Prior Prosthesis Placement  (203)"


* supportingInfo[additionalbodysite] ^comment = "Additional Body Site - After First Occurrence (204). First tooth number or oral cavity code is indicated in bodySite. All additionalbodysite slices must be referenced by at least one item.informationSequence."
* supportingInfo[additionalbodysite].code ^comment = "Additional Body Site - After First Occurrence (204)"

* supportingInfo[missingtoothnumber] ^comment = "Missing Tooth Number - After First Occurrence (204)"
* supportingInfo[missingtoothnumber].code ^comment = "Missing Tooth Number - After First Occurrence (204)"



* item.bodySite ^comment = "Tooth Number - First Occurrence (196)"
* item.subSite ^comment = "Tooth Surface (197)"

* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[renderingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"

* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment = "Indicates if the professional and non-clinician diagnosis is principal or secondary (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code or CPT procedure code, submitted by the provider. (42)"
* item.location[x] ^comment = "Code indicating the location, such as inpatient, outpatient facility, office, or home health agency, where this service was performed. (46)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the primary, supervising, rendering, purchased service and referring care team. (95, 96, 99)"
* item.serviced[x]  ^comment = "Date services began/ended. Located on CMS 1500 (Form Locator 24A) (118)"

* insert EOBBaseProfileComments









Profile: C4BBExplanationOfBenefitOral
Parent: C4BB-ExplanationOfBenefit-Oral-Basis
Id: C4BB-ExplanationOfBenefit-Oral
Title: "C4BB ExplanationOfBenefit Oral"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by providers of oral services including Dental, Denture and Hygiene. The ADA Dental Claim Form provides a common format for reporting dental services to a patient's dental benefit plan.
The profile has requirements for financial data."
// 20210216 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitOral|1.2.0)
* obeys EOB-oral-meta-profile-version

* item.adjudication contains
   adjudicationamounttype 1..* MS

* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype] ^short = "Amounts"
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1


* total 1..* MS
* insert TotalSlicing
//* total.category from C4BBAdjudication  (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication (required)



* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[servicefacility] ^comment = "Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rendering Provider. Service Facility Location is not just an address nor is it a patient’s home. Examples of Service Facility Location include hospitals, nursing homes, laboratories or homeless shelter. Service Facility Location identifier is the facility’s Type 2 Organization NPI if they are a health care provider as defined under HIPAA.
If the service facility is not assigned an NPI, this data element will not be populated.  Reference CMS 1500 element 32a (97, 170, 176)"

* supportingInfo[orthodontics] ^comment = "Orthodontics Treatment Indicator (199)"
* supportingInfo[orthodontics].code ^comment = "Indicates if the treatment is for orthodontics (199)"
* supportingInfo[orthodontics].timingDate ^comment = "Orthodontics Appliance Application Date (200)"
* supportingInfo[orthodontics].valueQuantity ^comment = "Total Number of Months for Orthodontia (201)"

* supportingInfo[prosthesis] ^comment = "Prosthesis Replacement Indicator (202)"
* supportingInfo[prosthesis].valueBoolean ^comment = "Prosthesis Replacement Indicator (202)"
* supportingInfo[prosthesis].timingDate ^comment = "Date of Prior Prosthesis Placement  (203)"


* supportingInfo[additionalbodysite] ^comment = "Additional Body Site - After First Occurrence (204). First tooth number or oral cavity code is indicated in bodySite. All additionalbodysite slices must be referenced by at least one item.informationSequence."
* supportingInfo[additionalbodysite].code ^comment = "Additional Body Site - After First Occurrence (204)"

* supportingInfo[missingtoothnumber] ^comment = "Missing Tooth Number - After First Occurrence (204)"
* supportingInfo[missingtoothnumber].code ^comment = "Missing Tooth Number - After First Occurrence (204)"



* item.bodySite ^comment = "Tooth Number - First Occurrence (196)"
* item.subSite ^comment = "Tooth Surface (197)"

* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[renderingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"

* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* item.adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* total[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment = "Indicates if the professional and non-clinician diagnosis is principal or secondary (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code or CPT procedure code, submitted by the provider. (42)"
* item.location[x] ^comment = "Code indicating the location, such as inpatient, outpatient facility, office, or home health agency, where this service was performed. (46)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the primary, supervising, rendering, purchased service and referring care team. (95, 96, 99)"
* item.serviced[x]  ^comment = "Date services began/ended. Located on CMS 1500 (Form Locator 24A) (118)"
* total.amount ^comment = "Total amount for each category (i.e., submitted, eligible, etc.) (148)"

* insert EOBBaseProfileComments



Invariant:  Oral-EOB-surface-subsite-requires-tooth-number
Description: "If item.subsite (tooth surface) exists then tooth number is required in bodySite or supportingInfo[additionalBodySite]"
//Expression: "item.where(subSite.exists() and (bodySite.where(coding.system='http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem').exists().not() and informationSequence.combine(%context.supportingInfo.where(code.where(coding.system='http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem').exists() and category.where(coding.code = 'additionalbodysite').exists()).sequence).isDistinct())).count() = 0"
Expression: "item.where(subSite.exists() and (bodySite.coding.where(system='http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem').exists().not() and informationSequence.combine(%context.supportingInfo.where(code.coding.where(system='http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem').exists() and category.coding.where(code = 'additionalbodysite').exists()).sequence).isDistinct())).count() = 0"
Severity:   #error

Invariant:  Oral-EOB-supportinginfo-additionalbodysite-requires-line-item
Description: "supportingInfo repetitions with additional body site must be referred to by one or more repetitions of item.informationSequence"
//Expression: "supportingInfo.where(category.coding.code = 'additionalbodysite').sequence.subsetOf(%context.item.informationSequence)"
//Expression: "supportingInfo.where(category.coding.where(code = 'additionalbodysite').exists()).where(sequence.subsetOf(%context.item.informationSequence)).exists()"
Expression: "supportingInfo.where(category.coding.where(code = 'additionalbodysite').exists()).sequence.subsetOf(%context.item.informationSequence)"
Severity:   #error


Invariant:  Oral-line-item-with-linked-additionalbody-site-requires-bodysite
Description: "At least one item.bodySite needs to be present if an item.informationSequence references supportingInfo[additionalbodysite].sequence"
//Expression: "item.where(informationSequence.intersect(%context.supportingInfo.where(category.coding.code = 'additionalbodysite').sequence).exists()).bodySite.exists()"
Expression: "item.where(informationSequence.intersect(%context.supportingInfo.where(category.coding.where(code = 'additionalbodysite').exists()).sequence).exists()).where(bodySite.count() != count()).empty()"
Severity:   #error


---

// File: input/fsh/EOBOutpatientProfile.fsh

Profile: C4BBExplanationOfBenefitOutpatientInstitutionalBasis
Parent: C4BB-ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis
Title: "C4BB ExplanationOfBenefit Outpatient Institutional Basis"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by clinics, hospitals, skilled nursing facilities and other institutions for outpatient services, which may include including the use of equipment and supplies, laboratory services, radiology services and other charges. Outpatient claims are submitted for services rendered at an institution that are not part of an overnight stay.
The claims data is based on the institutional claim form UB-04, submission standards adopted by the Department of Health and Human Services.
The basis profile does not have requirements for financial data."
// 20210322 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitOutpatientInstitutional|1.2.0)
//* obeys EOB-institutional-outpatient-meta-profile-version

// 20210203 CAS: https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
* obeys EOB-inst-pointoforigin

* type  = $HL7ClaimTypeCS#institutional
* subType 1..1 MS
* subType from C4BBInstitutionalClaimSubType (required)
* subType = C4BBInstitutionalClaimSubType#outpatient
* careTeam.role from C4BBClaimInstitutionalCareTeamRole  (required)   // was PayerInstitutionalProviderRole
* careTeam.role 1..1 MS
* careTeam obeys EOB-inst-careTeam-practitioner
* careTeam obeys EOB-inst-careTeam-organization
* careTeam obeys EOB-careteam-qualification
* careTeam.qualification from $USCoreProviderSpecialty (required)
* identifier MS
* diagnosis 1..*
* diagnosis.diagnosis[x] 1..1 MS
* diagnosis.diagnosis[x] only CodeableConcept
* diagnosis.diagnosis[x] from CDCICD910CMDiagnosisCodes (required)
* provider only Reference(C4BBOrganization)
* insert SupportingInfoSlicing
* supportingInfo contains
   clmrecvddate 0..1 MS and
   typeofbill 0..1 MS and
   pointoforigin 0..1 MS and
   admtype 0..1 MS and
   discharge-status 0..1 MS and
        // 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number
   medicalrecordnumber 0..1 MS and
   patientaccountnumber 0..1 MS


* supportingInfo[clmrecvddate] ^short = "Claim received date"
* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].category MS
* supportingInfo[clmrecvddate].timing[x] only date
* supportingInfo[clmrecvddate].timing[x] 1..1 MS

* supportingInfo[typeofbill] ^short = "Type of bill"
* supportingInfo[typeofbill].category = C4BBSupportingInfoType#typeofbill
* supportingInfo[typeofbill].category MS
* supportingInfo[typeofbill].code from AHANUBCTypeOfBill (required)
* supportingInfo[typeofbill].code 1..1 MS

* supportingInfo[admtype] ^short = "Admission type"
* supportingInfo[admtype].category = C4BBSupportingInfoType#admtype
* supportingInfo[admtype].category MS
* supportingInfo[admtype].code from AHANUBCPriorityTypeOfAdmissionOrVisit  (required)
* supportingInfo[admtype].code 1..1 MS

* supportingInfo[pointoforigin] ^short = "Point of origin for admission or visit"
* supportingInfo[pointoforigin].category = C4BBSupportingInfoType#pointoforigin
* supportingInfo[pointoforigin].category MS
* supportingInfo[pointoforigin].code from AHANUBCPointOfOriginForAdmissionOrVisit (required)
// FHIR-30807 - Change cardinality in EOB Inpatient and Outpatient Institutional Profiles
* supportingInfo[pointoforigin].code 1..1 MS

* supportingInfo[discharge-status] ^short = "Discharge status"
* supportingInfo[discharge-status].category = C4BBSupportingInfoType#discharge-status
* supportingInfo[discharge-status].category MS
* supportingInfo[discharge-status].code  1..1 MS
* supportingInfo[discharge-status].code from AHANUBCPatientDischargeStatus   (required)
// 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number

* supportingInfo[medicalrecordnumber] ^short = "Medical record number"
* supportingInfo[medicalrecordnumber].category = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString 1..1 MS

* supportingInfo[patientaccountnumber] ^short = "Patient account number"
* supportingInfo[patientaccountnumber].category = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString 1..1 MS
* item.revenue from AHANUBCRevenueCodes (required)
* item.modifier from AMACPTCMSHCPCSModifiers (required)
* item.productOrService from C4BBEOBInstitutionalProcedureCodes (required)
/* 20211110 CAS: https://jira.hl7.org/browse/FHIR-32850
* item.productOrService obeys EOB-out-inst-item-productorservice
*/
//* item.productOrService ^comment = "Put the comment here for item.productOrService here"
//* item  ^comment = "Put the comment here for item"

// CHANGE FOR NON-FINANCIAL
//* insert EOBHeaderItemAdjudicationInvariant
// CHANGE FOR NON-FINANCIAL
//* insert ItemAdjudicationInvariant
* insert ItemAdjudicationSlicing
* item.adjudication contains
// CHANGE FOR NON-FINANCIAL
//   adjudicationamounttype 0..* MS and  /* restricted to 1..* by invariant */
   adjustmentreason 0..* MS and
   allowedunits 0..1 MS


* item.adjudication[allowedunits] ^short = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider.  (149)"
* item.adjudication[allowedunits].category = C4BBAdjudicationDiscriminator#allowedunits
* item.adjudication[allowedunits].value only decimal
* item.adjudication[allowedunits].value 1..1 MS

* item.adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"
* item.adjudication[adjustmentreason].category = C4BBAdjudicationDiscriminator#adjustmentreason
* item.adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* item.adjudication[adjustmentreason].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1
*/
/* removed - FHIR-38063 - Update Invariants to support contracting and benefit payment status move to EOB.adjudication
* insert AdjudicationInvariant
*/
* insert AdjudicationSlicing
* adjudication  MS
* item.adjudication  MS
* adjudication contains
   billingnetworkstatus 0..1 MS and
   benefitpaymentstatus 1..1 MS and
// CHANGE FOR NON-FINANCIAL   
//   adjudicationamounttype 0..* MS and  /* restricted to 1..* by invariant */
   adjustmentreason 0..* MS

* adjudication[billingnetworkstatus] ^short = "Billing provider networking status"
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].category MS
* adjudication[billingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[billingnetworkstatus].reason 1..1 MS

* adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* adjudication[benefitpaymentstatus].reason 1..1 MS

* adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"
* adjudication[adjustmentreason].category = C4BBAdjudicationDiscriminator#adjustmentreason
* adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* adjudication[adjustmentreason].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/* adjudication[adjudicationamounttype] ^short = "Claim level adjudication type and amount"
* adjudication[adjudicationamounttype].category from C4BBAdjudication (required)
* adjudication[adjudicationamounttype].amount 1..1 MS
*/
* diagnosis 1..*
* diagnosis.type 1..1 MS
* diagnosis.type from C4BBClaimOutpatientInstitutionalDiagnosisType  (required)
// CHANGE FOR NON-FINANCIAL
/* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
* total[adjudicationamounttype].amount MS
//* total[adjudicationamounttype].amount 1..1
*/
* status MS
* created MS
* item.sequence MS
* item.revenue MS
* item.productOrService MS
* item.modifier MS

* item.serviced[x] 1..1
* item.serviced[x] only date 
* item.servicedDate MS

* item.quantity MS
* payment.type MS
* payment.date MS
* processNote.text MS

* supportingInfo[pointoforigin] ^comment = "Identifies the place where the patient was identified as needing admission to an institution. This is a two position code mapped from the standard values for the UB-04 Source of Admission code (FL-15). (13)"
* supportingInfo[admtype] ^comment = "Priority of the admission. Information located on (UB04 Form Locator 14). For example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled. (14)"
* supportingInfo[typeofbill] ^comment = "UB04 (Form Locator 4) type of bill code provides specific information for payer purposes. The first digit of the three-digit number denotes the type of institution, the second digit classifies the type of care being billed, and the third digit  identifies the frequency of the bill for a specific course of treatment or inpatient confinement. (17)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[discharge-status] ^comment = "Patient’s status as of the discharge date for a facility stay. Information located on UB04. (Form Locator 17). (117)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment =  "Indicates if the outpatient institutional diagnosis is principal, other, an external cause of injury or a patient reason for visit. (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (42)"
* item.revenue ^comment = "Code used on the UB-04 (Form Locator 42) to identify a specific accommodation, ancillary service, or billing calculation related to the service being billed (86)"
* adjudication[adjustmentreason].reason ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the care team (primary care provider, attending, referring, otheroperating, operating, and rendering) for the admission. (93, 96, 98, 99, 173)"


* insert EOBBaseProfileComments


Profile: C4BBExplanationOfBenefitOutpatientInstitutional
Parent: C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis
Id: C4BB-ExplanationOfBenefit-Outpatient-Institutional
Title: "C4BB ExplanationOfBenefit Outpatient Institutional"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by clinics, hospitals, skilled nursing facilities and other institutions for outpatient services, which may include including the use of equipment and supplies, laboratory services, radiology services and other charges. Outpatient claims are submitted for services rendered at an institution that are not part of an overnight stay.
The claims data is based on the institutional claim form UB-04, submission standards adopted by the Department of Health and Human Services.
The profile has requirements for financial data."

* obeys EOB-institutional-outpatient-meta-profile-version
* insert EOBHeaderItemAdjudicationInvariant
* insert ItemAdjudicationInvariant
* item.adjudication contains
   adjudicationamounttype 0..* MS /* restricted to 1..* by invariant */


* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1
/* removed - FHIR-38063 - Update Invariants to support contracting and benefit payment status move to EOB.adjudication
* insert AdjudicationInvariant
*/

* adjudication contains
   adjudicationamounttype 0..* MS  /* restricted to 1..* by invariant */

* adjudication[adjudicationamounttype] ^short = "Claim level adjudication type and amount"
* adjudication[adjudicationamounttype].category from C4BBAdjudication (required)
* adjudication[adjudicationamounttype].amount 1..1 MS

* total 1..* MS
* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
* total[adjudicationamounttype].amount MS
* total[adjudicationamounttype].amount 1..1


* supportingInfo[pointoforigin] ^comment = "Identifies the place where the patient was identified as needing admission to an institution. This is a two position code mapped from the standard values for the UB-04 Source of Admission code (FL-15). (13)"
* supportingInfo[admtype] ^comment = "Priority of the admission. Information located on (UB04 Form Locator 14). For example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled. (14)"
* supportingInfo[typeofbill] ^comment = "UB04 (Form Locator 4) type of bill code provides specific information for payer purposes. The first digit of the three-digit number denotes the type of institution, the second digit classifies the type of care being billed, and the third digit  identifies the frequency of the bill for a specific course of treatment or inpatient confinement. (17)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[discharge-status] ^comment = "Patient’s status as of the discharge date for a facility stay. Information located on UB04. (Form Locator 17). (117)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* total[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* total.amount ^comment = "Total amount for each category (i.e., submitted, allowed, etc.) (148)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment =  "Indicates if the outpatient institutional diagnosis is principal, other, an external cause of injury or a patient reason for visit. (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (42)"
* item.revenue ^comment = "Code used on the UB-04 (Form Locator 42) to identify a specific accommodation, ancillary service, or billing calculation related to the service being billed (86)"
* adjudication[adjustmentreason].reason ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the care team (primary care provider, attending, referring, otheroperating, operating, and rendering) for the admission. (93, 96, 98, 99, 173)"


* insert EOBBaseProfileComments

---

