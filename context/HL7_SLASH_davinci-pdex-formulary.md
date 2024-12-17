File: repos/HL7_SLASH_davinci-pdex-formulary/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/sushi/configuration/                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.davinci-drug-formulary
canonical: http://hl7.org/fhir/us/davinci-drug-formulary
name: Formulary
title: DaVinci Payer Data Exchange (PDex) US Drug Formulary
status: active
version: 2.1.0
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  #<<< must include a http://hl7.org/fhir/StructureDefinition/structuredefinition-wg extension that identifies the workgroup responsible for the IG. This is the authoritative element.
    valueCode: phx  # <<< The value must be the code for the workgroup
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
fhirVersion: 4.0.1
copyrightYear: 2022+
releaseLabel: STU 3 (ci-build)

publisher:
  name: HL7 International / Pharmacy
  url: http://www.hl7.org/Special/committees/medication
  email: pharmacy@lists.HL7.org
description: DaVinci Payer Data Exchange (PDex) US Drug Formulary, Release 2.0.1 - US Realm STU"
license: CC0-1.0
dependencies:  
  hl7.fhir.us.core.v311:
    version: 3.1.1
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore3
  hl7.fhir.us.core.v610:
    version: 6.1.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore6
  hl7.fhir.us.core:
    version: 7.0.0
    uri: http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core
    id: uscore7
  hl7.fhir.us.davinci-hrex:
    uri: http://hl7.org/fhir/us/davinci-hrex/ImplementationGuide/hl7.fhir.us.davinci-hrex
    version: 1.1.0
    id: hrex
  hl7.terminology: 6.1.0  
  hl7.fhir.us.davinci-pdex-plan-net: current
  hl7.fhir.extensions.r5: 4.0.1
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
  
  jira-code: davinci-df
  path-expansion-params: '../../exp-params.json'  #path is relative to [base]/fsh-generated/resources
jurisdiction: urn:iso:std:iso:3166#US
# ╭───────────────────────────────────────package-list.json────────────────────────────────────────╮
# │  To use a provided ig-data/package-list.json file, delete the "history" property below.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭─────────────────────────────────────────────ig.ini─────────────────────────────────────────────╮
# │  To use a provided ig-data/ig.ini file, delete the "template" property below.                  │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# comment out in sushi v1.3.1

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided ig-data/input/includes/menu.xml file, delete the "menu" property below.     │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

menu:
  IG Home: index.html
  Background:
    Reading this IG: reading.html
    Use Cases: background.html
    Project and Participants: project.html
  Specification:
    Conformance Expectations: confexpectations.html
    Formal Specification: specification.html
    Anticipated Client Queries: queries.html
    Privacy, Safety, and Security: security.html
  FHIR Artifacts:
    Profiles            : artifacts.html#3
    Extensions          : artifacts.html#4
    Search Parameters   : search_parameters.html
    Terminology         : artifacts.html#5
    Capability Statement: CapabilityStatement-usdf-server.html
    Examples            : artifacts.html#7
  Base Specs:
    FHIR R4 Spec: new-tab {{site.data.fhir.path}}
    HRex 1.1.0: new-tab {{site.data.fhir.ver.hrex}}
    US Core 3.1.1: new-tab http://hl7.org/fhir/us/core/STU3.1.1/index.html
    US Core 6.1.0: new-tab https://hl7.org/fhir/us/core/STU6.1/index.html
    US Core 7.0.0: new-tab https://hl7.org/fhir/us/core/STU7/index.html
  Support:
    Discussion Forum: https://chat.fhir.org/#narrow/channel/197730-Da-Vinci-PDex-Drug-Formulary/
    Project Page: https://confluence.hl7.org/display/DVP/PDex+Formulary
    Implementer Support: https://confluence.hl7.org/display/DVP/PDex+Formulary
    Specification Dashboard: https://jira.hl7.org/secure/Dashboard.jspa?selectPageId=11904
    Propose a Change: https://jira.hl7.org/secure/CreateIssueDetails!init.jspa?pid=10405&amp;issuetype=10600&amp;customfield_11302=FHIR-us-davinci-drug-formulary
    Downloads: downloads.html
  Change Log: change_notes.html


pages:
  index.md:
    title: Home
  reading.md:
    title: Reading this IG
  confexpectations.md:
    title: Conformance Expectations
  project.md:
    title: Project and Participants
  background.md:
    title: Background
  specification.md:
    title: Specification
  security.md:
    title: Privacy, Safety, and Security
  search_parameters.md:
    title: Search Parameters
  queries.md:
    title: Queries
  artifacts.html:
    title: Artifacts Summary
  downloads.md:
    title: Downloads
  change_notes.md:
    title: Change Notes
  ImplementationGuide-hl7.fhir.us.davinci-drug-formulary.md:
    title: US Drug Formulary ImplementationGuide Resource

resources:
  CapabilityStatement/usdf-server:
    name: US Drug Formulary Server Capability Statement
    

---

// File: input/pagecontent/background.md

### Use Cases

#### Actors
* **Member**: A person to whom health care coverage has been extended by the policyholder (generally their employer) or any of their covered family members. Sometimes referred to as the insured or insured person. The cost of medications for a member is a function of the drug coverage under their health insurance plan, their benefits based on their already satisfied deductibles, and the pharmacy where their prescriptions are filled.
* **Consumer**: A person who may or may not be a member, who wishes to explore the formulary content and plan-level co-insurance.
* **Health Plan**: A provider of insurance coverage that often includes a drug coverage plan which publishes formulary content and plan-level co-insurance information through the Drug Formulary FHIR API.



<a name="Medication-Copay-Under-Health-Plan"></a>
#### Medication Copay Under Health Plan
This use case allows a member to determine the plan level estimated costs of each of their medications under the drug coverage of their current health plan. An application queries the formulary service for cost information about the drugs that the member has interest in and provides the plan level estimated cost for each medication under the member's current health plan.

Note that for this use case the health plan would provide authenticated access to the formulary.

<img src="Slide1.jpg" alt="Unauthenticated Access Workflow" style="width: 100%; float: none; align: middle;"/>

<a name="Shopping for Health Plans"></a>
#### Shopping for Health Plans
This use case allows a consumer to compare the drug coverage of several different health plans and determine which plan has the lowest plan level estimated cost based on their medications of interest. The application can retrieve the consumer's medication list from an electronic health record system where the consumer's patient data is stored (outside the scope of this implementation guide). The consumer could also independently maintain their medication list in the application or elsewhere. The application identifies the relevant formulary endpoint through means that are beyond the scope of this implementation guide (see [Disclaimers and Assumptions](index.html#disclaimers-and-assumptions)). For each payer, the application queries the payer's formulary service to retrieve the list of health plans provided by that payer. Then, for each plan,the application queries the formulary service to retrieve the plan-level estimated costs specific to the consumer's medication list.

Note that for this use case the health plan could provide non-authenticated or open access to the formulary. Non-authenticated access should not maintain any records that could associate an individual with the medications or plans queried.

Also note that the same InsurancePlan may be present in multiple directories and if they have the same identifier they are assumed to be the same plan.

<img src="Slide2.jpg" alt="Authenticated Access Workflow" style="width: 100%; float: none; align: middle;"/>

<a name="formulary-structure"></a>
### Formulary Structure
Formularies in the United States are normally published by health insurers on an annual basis, with minor updates during the year. It is critical that health insurers update their published formularies following these minor updates.

Insurers regularly administer multiple health insurance and drug coverage plans and each of those plans may have its own formulary.

Each formulary contains a set of drugs and their limits or requirements. Drugs are placed into tiers that largely determine the cost to the consumer/patient. The number and purpose of drug tiers varies across payers. Each tier has an associated cost-sharing model that includes deductibles and/or coinsurance components for drugs in the tier when purchased through various pharmacy benefit types.

In addition to the drug tier, drugs may also list requirements on the patient (e.g., age or gender) or limitations on prescription (e.g., quantity limits).

<a name="resource-relationships"></a>
#### Resource Relationships
This Implementation Guide (IG) was significantly influenced by the formulary information model of the [formularies for Qualified Health Plans (QHPs) on the federal health insurance marketplace for healthcare.gov](https://github.com/CMSgov/QHP-provider-formulary-APIs). Publishing formularies in the QHP format should be familiar to many payers. Drugs are specified by RxNorm semantic drug codes. The QHP data model mandates specific value sets for some data types (e.g., types of copayments), but leaves value sets for other data types at the discretion of the payer (e.g., drug tier codes, pharmacy benefit types). The following object model shows the relationships between the resources in this IG. The Formulary profiled resource combined with its associated [FormularyItem](StructureDefinition-usdf-FormularyItem.html) and [FormularyDrug](StructureDefinition-usdf-FormularyDrug.html) profiled resources represent a formulary list that includes the set of drugs covered and the requirements and limitations of that coverage.


<img style="width: 100%; height: auto;" src="DaVinci_Formulary_Structure.png" />


A FormularyDrug represents the individual prescribable drug defined with a specific RxNorm semantic drug code that includes ingredient, strength, dose form, and brand name for branded drugs. These codes are represented in RxNorm with the Term Type (TTY) of Semantic Clinical Drug (SCD), Semantic Branded Drug (SBD), Generic Pack (GPCK), or Branded Pack (BPCK). Additionally, a more general RxNorm semantic drug form group code **SHOULD** be present for searching across drugs with the same ingredient, brand, and form (regardless of strength). These codes are represented in RxNorm with the Term Type (TTY) of Semantic Clinical Drug Form (SCDG) and Semantic Branded Drug Form Group (SBDG). All drugs with RxNorm Term Type of SCD or SBD **SHALL** have a coding repetition and RxNorm Term Type of SCDG or SBDG respectively. Drug packs, represented by RxNorm codes GPCK or BPCK may not have a corresponding drug form group. The FormularyItem links a drug with a formulary and includes the attributes that drug has in relation to the formulary, including the drug tier and coverage constraints.

<a name="cost-sharing-relationship"></a>
#### Cost Sharing Relationship
Cost sharing information such as copay amounts and coinsurance rates are determined by a payer in the insurance plan. The amount of copay and percentage of coinsurance is a function of the pharmacy benefit type (e.g. in network mail order) and the drug tier (e.g. preferred generic). These specific costs are defined in the [PayerInsurancePlan](StructureDefinition-usdf-PayerInsurancePlan.html) . The pharmacy benefit types and drug tiers, without the cost information, may optionally be included in the [Formulary](StructureDefinition-usdf-Formulary.html) as a convenience for client applications to quickly identify the pharmacy benefit types and drug tiers contained on the formulary without having to retrieve the [PayerInsurancePlan](StructureDefinition-usdf-PayerInsurancePlan.html).

<img style="width: 100%; height: auto;" src="DaVinci_Formulary_CostSharing.png" />

The costs for a particular drug in a plan will be determined by the pharmacy benefit types and drug tier as indicated in the properties of the [FormularyItem](StructureDefinition-usdf-FormularyItem.html). These properties are used to link the [PayerInsurancePlan](StructureDefinition-usdf-PayerInsurancePlan.html) specificCost properties (Pharmacy Benefit Type - `InsurancePlan.plan.specificCost.category` and Drug Tier - `InsurancePlan.plan.specificCost.benefit.type`) to identify the costs for the drug under the plan.



---

// File: input/pagecontent/change_notes.md

### Changes and Updates for Version 2.1.0

The following high level changes addressed in this release:

* Updated dependencies to reference to multiple versions of US Core per latest Da Vinci recommendations (7.0.0, 6.1.0, and 3.1.1)
* Updated dependencies to reference Da Vinci HRex version 1.1.0
* Updated IG organization and structure to match the latest Da Vinci recommendations

Specific JIRA tickets applied in this update are listed below:

* TBD (will populate after STU Update review period since we expect additional JIRA tickets through that process)

### Changes and Updates for Version 2.0.1
  <p>
    <b>The following issues are addressed in this release:</b>
  </p>
  <ul>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-39401">FHIR-39401</a>:
      <p>
        Corrected <a href="SearchParameter-Basic-subject.html">SearchParameter-Basic-Subject</a> by changing <code>code</code> from <code>code</code> to <code>subject</code>.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-43049">FHIR-43049</a>:
      <p>
        Changed the <code>InsurancePlan.coverage[drug-coverage].benefit[drug-plan].type</code> in <a href="StructureDefinition-usdf-PayerInsurancePlan.html">Payer Insurance Plan</a> from the deprecated code <code>Drug</code> to <code>drug</code>.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-42930">FHIR-42930</a>:
      <p>
        Changed the binding of <a href="StructureDefinition-usdf-PayerInsurancePlan.html">Payer Insurance Plan</a> <code>PayerInsurancePlan.plan[drug-plan].specificCost.benefit.type</code> <a href="ValueSet-DrugTierVS.html">Drug Tier VS</a> from a required to extensible to match the <a href="StructureDefinition-usdf-FormularyItem.html">Formulary Item</a> Drug Tier binding to allow the inclusion of drug tiers beyond those identified in the IG.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-43055">FHIR-43055</a>:
      <p>
        Specify the contexts for <a href="artifacts.html#4">all IG defined extensions</a>.
      </p>
    </li>
  </ul>



### Changes and Updates for Version 2.0.0
Da Vinci Payer Data Exchange (PDex) US Drug Formulary for FHIR R4 (STU 2)
  <p>
    <b>The following issues are addressed in this release:</b>
  </p>
  <ul>
     <li>
      <a href="https://jira.hl7.org/browse/FHIR-33181">FHIR-33181</a>:
      <p>
        Changed CoveragePlan profile from using a List resource to two InsurancePlan profiles; one defining the higher level <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/StructureDefinition-usdf-PayerInsurancePlan.html">Payer Insurance Plan</a> and the other defining the <a href="StructureDefinition-usdf-Formulary.html">Formulary</a> provides general information about a formulary and acts as an organizing construct to create a formulary list.
        This change also addresses:
        <ul>
          <li>
            <a href="https://jira.hl7.org/browse/FHIR-33185">FHIR-33185</a> - Creating a prescribable insurance plan <a href="StructureDefinition-usdf-PayerInsurancePlan.html">PayerInsurancePlan</a> that contains a drug coverage with a reference to a formulary and plans cost sharing information.
          </li>
          <li>
            <a href="https://jira.hl7.org/browse/FHIR-29670">FHIR-29670</a> and <a href="https://jira.hl7.org/browse/FHIR-30923">FHIR-30923</a> - Allowing a Formulary Drug to be referenced by multiple drug plans by adding <a href="StructureDefinition-usdf-Formulary.html">Formulary</a> and <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/StructureDefinition-usdf-FormularyItem.html">FormularyItem</a> profiles.
          </li>
          <li>
            <a href="https://jira.hl7.org/browse/FHIR-31038">FHIR-31038</a> - Creating profiles <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/StructureDefinition-usdf-PayerInsurancePlan.html">Payer Insurance Plan</a> and <a href="StructureDefinition-usdf-Formulary.html">Formulary</a> to enable querying plans by plan and type or searching for all drug plans adding search parameters <a href="SearchParameter-InsurancePlan-identifier.html">InsurancePlan-identifier</a>, <a href="SearchParameter-InsurancePlan-type.html">InsurancePLan-type</a>, and <a href="SearchParameter-InsurancePlan-formulary-coverage.html">InsurancePlan-formulary-coverage</a> (linking the PayerInsurancePlan and Formulary).
          </li>
          <li>
            <a href="https://jira.hl7.org/browse/FHIR-31572">FHIR-31572</a> - Addressing the need to require an element necessary to link resources by adding extensions <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/StructureDefinition-usdf-PayerInsurancePlan-definitions.html#InsurancePlan.coverage:drug-coverage.extension:usdf-FormularyReference-extension">formulary reference to PayerInsurancePlan coverage</a> and <a href="StructureDefinition-usdf-FormularyItem-definitions.html#Basic.extension:usdf-FormularyReference-extension">formulary reference to FormularyItem</a>.
          </li>
          <li>
            <a href="https://jira.hl7.org/browse/FHIR-31673">FHIR-31673</a> - Move the EmailPlanContact extension, which can support an email address or url to the better fitting element <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/StructureDefinition-usdf-PayerInsurancePlan-definitions.html#InsurancePlan.contact">InsurancePlan.contact</a>.
          </li>
          <li>
            <a href="https://jira.hl7.org/browse/FHIR-33183">FHIR-33183</a> - Created a set of <a hef="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/search_parameters.html">search parameters</a> and <a href="queries.html">anticipated client queries</a> for the new IG structure.
          </li>
          <li>
            <a href="https://jira.hl7.org/browse/FHIR-35600">FHIR-35600</a> and <a href="https://jira.hl7.org/browse/FHIR-35590">FHIR-35590</a> - Use https://terminology.hl7.org/CodeSystem/insurance-plan-type CodeSystem and https://terminology.hl7.org/CodeSystem/insurance-plan-type ValueSet for <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/StructureDefinition-usdf-PayerInsurancePlan-definitions.html#InsurancePlan.plan.type">Payer InsurancePlan.plan.type</a>, <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/StructureDefinition-usdf-PayerInsurancePlan-definitions.html#InsurancePlan.coverage:drug-coverage.benefit.type">Payer InsurancePlan.coverage.benefit.type</a>, and <a href="StructureDefinition-usdf-Formulary-definitions.html#InsurancePlan.plan.type">Formulary InsurancePlan.plan.type</a>.
          </li>
        </ul>
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-33182">FHIR-33182</a>:
      <p>
        Created a <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/StructureDefinition-usdf-FormularyItem.html">Formulary Item profile</a> that links a drug with a drug (formulary) plan and includes the attributes that relate the two. As part of this change, several extensions moved to this profile from the <a href="StructureDefinition-usdf-FormularyDrug.html">Formulary Drug profile</a>.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-37717">FHIR-37717</a>:
      <p>
        Added <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/specification.html#specific-drug-coverage-details">Specific Drug Coverage Details</a> section that includes guidance on how to provide details for drugs with different coverages but are represented by the same RxNorm code.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-36142">FHIR-36142</a>:
      <p>
        Changed cardinality of usdf-PharmacyBenefitType-extension in <a href="StructureDefinition-usdf-FormularyItem.html">Formulary Item profile</a> (formerly usdf-MailOrder-extension in Formulary Drug profile) to 1..* and MS.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-35197">FHIR-35197</a>:
      <p>
        Created an <a href="StructureDefinition-usdf-AdditionalCoverageInformation-extension.html">extension</a> on <a href="StructureDefinition-usdf-FormularyItem.html">FormularyItem</a> profile to allow the expression of additional coverage information.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-33186">FHIR-33186</a>:
      <p>
        Created an <a href="StructureDefinition-usdf-InsurancePlanLocation.html">Insurance Plan Location profile</a> for an InsurancePlan to support geolocation.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-36143">FHIR-36143</a>:
      <p>
        Add invariant to <a href="StructureDefinition-usdf-InsurancePlanLocation.html">Insurance Plan Location profile</a> requiring at least an address or a geolocation.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-29964">FHIR-29964</a>:
      <p>
        Added <a href="StructureDefinition-usdf-PriorAuthorizationNewStartsOnly-extension.html">Prior Authorization new Starts Only Extension</a>, <a href="StructureDefinition-usdf-StepTherapyLimitNewStartsOnly-extension.html">Step Therapy New Starts Only Extension</a>, and <a href="StructureDefinition-usdf-QuantityLimitDetail-extension.html">Quantity Limit Detail Extension</a> on <a href="StructureDefinition-usdf-FormularyItem.html">FormularyItem</a> to support more details beyond the original boolean values.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-33184">FHIR-33184</a>:
      <p>
        Improve drug searching through making <a href="StructureDefinition-usdf-FormularyDrug-definitions.html#MedicationKnowledge.doseForm">MedicationKnowledge.doseform</a> Must Support on the <a href="StructureDefinition-usdf-FormularyDrug.html">FormularyDrug</a> profile and adding a <a href="SearchParameter-MedicationKnowledge-doseform.html">doseform</a> SearchParameter.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-34526">FHIR-34526</a> and <a href="https://jira.hl7.org/browse/FHIR-36264">FHIR-36264</a>:
      <p>
        Created a Conformance Expectations section which inherits the HRex conformance expectations which includes the definition of Must Support.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-37478">FHIR-37478</a>:
      <p>
        Removed US Core as a dependency (since no profiles are directly derived from US Core).
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-34527">FHIR-34527</a>:
      <p>
        Changes Must Support flags on the <a href="StructureDefinition-usdf-PayerInsurancePlan.html">PayerInsurancePlan</a>, <a href="StructureDefinition-usdf-Formulary.html">Formulary</a>, <a href="StructureDefinition-usdf-FormularyItem.html">FormularyItem</a>, <a href="StructureDefinition-usdf-FormularyDrug.html">FormularyDrug</a>, and <a href="StructureDefinition-usdf-InsurancePlanLocation.html">InsurancePlanLocation</a> profiles (includes data elements included in previous version profiles on different resources).
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-36137">FHIR-36137</a>:
      <p>
        Made the capability expectation for <a href="StructureDefinition-usdf-InsurancePlanLocation.html">Insurance Plan Location profile</a> SHALL in the <a href="CapabilityStatement-usdf-server.html">CapabilityStatement</a>.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-33248">FHIR-33248</a>:
      <p>
        Remove requirement to support HTTP error response 410 for deleted resources in <a href="CapabilityStatement-usdf-server.html">server CapabilityStatement</a>
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-36169">FHIR-36169</a>:
      <p>
        Add requirement in the Conformance Expectations that servers support CapabilityStatement.instantiates pointing to the included CapabilityStatement.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-34085">FHIR-34085</a>:
      <p>
        Added slicing on <a href="StructureDefinition-usdf-FormularyDrug-definitions.html#MedicationKnowledge.code.coding">FormularyDrug code.coding</a> to support granular (ingredient, strength, and form) RxNorm Code and general (ingredient and form group) to enable finding drugs with different strengths and added guidance on <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/specification.html#searching-formulary-drugs">searching formulary drugs</a>. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-34758">FHIR-34758</a>:
      <p>
        Combine the copay and coinsurance cost sharing options into a single <a href="CodeSystem-usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE.html">Cost Sharing Option CodeSystem</a>. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-36302">FHIR-36302</a>:
      <p>
        Updated the <a href="CodeSystem-usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE.html">BenefitCodeTypeCS</a>, <a href="CodeSystem-usdf-DrugTierCS-TEMPORARY-TRIAL-USE.html">DrugTierCS</a>, <a href="CodeSystem-usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE.html">PharmacyBenefitTypeCS</a>, and <a href="CodeSystem-usdf-PlanContactTypeCS-TEMPORARY-TRIAL-USE.html">PlanContactTypeCS</a> CodeSystems id to include "" in order to note to implementers that the URL is likely to change (to terminology.hl7.org defined CodeSystems) in the future. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-31349">FHIR-31349</a>:
      <p>
        Added deductible-waived to <a href="ValueSet-CopayOptionVS.html">Copay qualifier</a> and <a href="ValueSet-CoinsuranceOptionVS.html">Coinsurance qualifier</a> CodeSystems. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-33188">FHIR-33188</a> and <a href="https://jira.hl7.org/browse/FHIR-35367">FHIR-35367</a>:
      <p>
        Added guidance for <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/specification.html#bulk-data">Bulk Data Export</a>. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-37623">FHIR-37623</a>:
      <p>
        Remove the invalid 'eq' comparator from <a href="SearchParameter-MedicationKnowledge-drug-name.html">Drug Name Search Parameter</a>. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-34456">FHIR-34456</a>:
      <p>
        Updated the HRex references to point to version <a href="https://build.fhir.org/ig/HL7/davinci-ehrx/">1.0.0</a>. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-35196">FHIR-35196</a>:
      <p>
        Added guidance regarding <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/specification.html#presenting-drug-alternatives"> presenting drug alternative</a>. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-35365">FHIR-35365</a>:
      <p>
        Added more descriptive descriptions to the extensions included in the <a href="StructureDefinition-usdf-FormularyItem.html">FormularyItem profile</a>. 
      </p>
    </li>
  </ul>
  <!--
    The Following are only changes from the ballot version and final published version
      FHIR-34756 - Improve the name of value set "Type of pharmacies"
      FHIR-35366 - Simplify FormularyItem by inlining drug codes
    

  -->
  
### Changes and Updates for Version 1.2.0

* STU2 Ballot

### Changes and Updates for Version 1.1.0
Da Vinci Payer Data Exchange (PDex) US Drug Formulary for FHIR R4 (STU Update of STU 1)
  <p>
    <b>The following issues are addressed in this release:</b>
  </p>
  <ul>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-28293">FHIR-28293</a>:
      <p>
        Changed the <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-PlanID-extension.html">PlanID extension</a> description to from:
      </p>
      <p>
        <i>“Unique, 14-character, HIOS-generated Plan ID number (Plan IDs must be unique, even across different markets.)”</i>
      </p>
      <p>to:</p>
      <p>
        <i>“Unique, generated Plan ID number, such as HIOS ID for QHPs or Contract Number for Medicare Advantage Plans.  Plan IDs must be unique within each organization that manages their formulary data.”</i>
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-29965">FHIR-29965</a>:
      <p>
        Added guidance that <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-MarketingURL-extension.html">CoveragePlan.MarketingURL</a>, <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-SummaryURL-extension.html">CoveragePlan.SummaryURL</a>, and <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-FormularyURL-extension.html">CoveragePlan.FormularyURL</a> can point to a page providing links for multiple language options.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-30412">FHIR-30412</a>:
      <p>
        Changed the type of <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-MarketingURL-extension.html">CoveragePlan.MarketingURL</a>, <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-SummaryURL-extension.html">CoveragePlan.SummaryURL</a>, and <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-FormularyURL-extension.html">CoveragePlan.FormularyURL</a> extensions from a String value to a URL value.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-30924">FHIR-30924</a>:
      <p>
        Added "Not applicable" to the <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/CodeSystem-usdf-CopayOptionCS.html">usdf-CopayOptionCS</a> code system.  Zero-deductible cost sharing is represented by a co-pay value of "Not applicable" and a co-insurance value of "No charge", consistent with updated QHP guidelines.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-30925">FHIR-30925</a>:
      <p>
        Added an optional boolean <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-MailOrder-extension.html">MailOrder</a> extension to FormularyDrug profile.  The MailOrder value in FormularyDrug overrides the MailOrder value in the <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-DrugTierDefinition-extension.html">DrugTierDefinition</a> extension for <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-CoveragePlan.html">CoveragePlan</a>.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-30933">FHIR-30933</a>:
      <p>
        Changed the type of <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-EmailPlanContact-extension.html">EmailPlanContact</a> extension from String to URL. We also added narrative to <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-EmailPlanContact-extension.html">EmailPlanContact</a> that a FHIR URL type can be a web-url or an email address. 
      </p>
    </li>
     <li>
      <a href="https://jira.hl7.org/browse/FHIR-31031">FHIR-31031</a>:
      <p>
        Since _profile search parameter is not required for <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/queries.html#anticipated-client-queries">anticipated client queries</a>, we removed the "_profile" search parameter for the Medication Knowledge and List resource examples.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-31037">FHIR-31037</a>:
      <p>
        The CoveragePlan PlanIDType extension was not defined for non-HIOS plans so we included narrative in <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-PlanIDType-extension.html">Plan ID Type</a>, to include "For all other plans this should be: OTHER-PLAN-ID as part of the definition. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-31073">FHIR-31073</a>:
      <p>
        Added guidance for behavior for <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU2/specification.html#authenticated">authenticated member access</a>, when the member has already selected a plan or not, when they belong to a plan group or not.
      </p>
    </li>
     <li>
      <a href="https://jira.hl7.org/browse/FHIR-31591">FHIR-31591</a>:
      <p>
        Changed the code display in <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/MedicationKnowledge-cmsip9.html">Formulary Drug cmspi9</a>, to "doxepin hydrochloride 50 MG/ML Topical Cream" to match the given code of #1000091.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-31672">FHIR-31672</a>:
      <p>
        Added guidance to enter "Not applicable" in the <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-Network-extension.html">Network</a> extension for a CoveragePlan that has no applicable network associated with it.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-31683">FHIR-31683</a>:
      <p>
        We changed List.code to be set to the code <code>DRUGPOL</code> and changed the cardinality to 1..1 in the <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-CoveragePlan.html#profile">Formulary Coverage Plan</a>. Additionally, in <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/queries.html#find-coverageplan-by-its-planid">Anticipated Client Queries</a> the queries that reference list now reference the <code>DRUGPOL</code> code.
      </p>
    </li>
     <li>
      <a href="https://jira.hl7.org/browse/FHIR-31684">FHIR-31684</a>:
      <p>
        Guidance was added to <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/use_cases_and_overview.html#additional-guidance">Additional Guidance</a> regarding searching for FormularyDrugs with know PlanIDs and without.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-31672">FHIR-31762</a>:
      <p>
        Updated <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/search_parameters.html">search parameter</a> descriptions to include all of the search parameters in the <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/CapabilityStatement-usdf-server.html">CapabilityStatement</a>.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-32178">FHIR-32178</a>:
      <p>
        Added "charge" to the <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/CodeSystem-usdf-CopayOptionCS.html">usdf-CopayOptionCS</a> and the <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/CodeSystem-usdf-CoinsuranceOptionCS.html">usdf-CoinsuranceOptionCS</a>code systems to handle drugs that consist of a charge, but are not subject to a deductible.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-32622">FHIR-32622</a>:
      <p>
        Guidance was added to  <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/StructureDefinition-usdf-CoveragePlan.html">Formulary Coverage Plan</a> indicating that we are considering basing the CoveragePlan profile off of the InsurancePlan resource in a future release instead of the List resource.
      </p>
    </li>
     <li>
      <a href="https://jira.hl7.org/browse/FHIR-32625">FHIR-32625</a>:
      <p>
        Changes were implemented to improve the navigation by updating the <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/toc.html">Table of Contents</a>, the specification menu, and page design.
      </p>
    </li>
     <li>
      <a href="https://jira.hl7.org/browse/FHIR-32627">FHIR-32627</a>:
      <p>
        Guidance was added to  <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/search_parameters.html">Search Parameters</a> indicating that the search parameters DrugName, DrugPlan, and DrugTier will be changed to more compliant names like: lower-case 'drug-name', 'drug-plan', and 'drug-tier' in a future release. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-32723">FHIR-32723</a>:
      <p>
        Several value sets found in <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/artifacts.html#terminology-code-systems">Terminology: Code Systems</a> were not properly displaying the value and description correctly for "code for qualifier for coinsurance rate", "codes for qualifier of copay amount" and "codes for medication drug tiers in health plans". This has been corrected. The definition column has been updated to no longer be blank and contain the proper information. 
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-32958">FHIR-32958</a>:
      <p>
        Added guidance for searching by <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/specification.html#searching-by-drug-names">drug name</a> strings.
      </p>
    </li>
    <li>
      <a href="https://jira.hl7.org/browse/FHIR-32958">FHIR-32958</a>:
      <p>
        Added guidance on <a href="https://hl7.org/fhir/us/davinci-drug-formulary/STU1.1/use_cases_and_overview.html#searching-by-drug-names">drug name searching</a> with description of RxNorm term types, formats, and drug names that might appear on a formulary.
      </p>
    </li>
  </ul>
<p>&nbsp;</p>



### Changes and Updates for Version 1.0.1

* Technical correction to version 1.0.0

### Changes and Updates for Version 1.0.0

* Initial publication

### Changes and Updates for Version 0.1.0

* Initial draft implementation guide for testing

---

// File: input/pagecontent/confexpectations.md

This implementation guide uses specific terminology such as SHALL, SHOULD, MAY to flag statements that have relevance for the evaluation of conformance with the guide. As well, profiles in this implementation guide make use of the [mustSupport](http://hl7.org/fhir/R4/profiling.html#mustsupport) element. Base expectations for the intepretations of these terms are set in the [FHIR core specification](http://hl7.org/fhir/R4/conformance-rules.html#conflang) and general Da Vinci-wide expectations are defined in [HRex]({{site.data.fhir.ver.hrex}}/conformance.html)

Additional conformance expectations specific to this guide are as follows:

### Conformance Expectations
* This guide inherits all conformance expectations identified in the Health Record Exchange (Hrex) Conformance Expectations section. All systems claiming conformance to this guide **SHALL** conform to the requirements listed in that section.

* Server systems claiming conformance to this guide **SHALL** meet the capability statement expectation requirements identified in the [US Drug Formulary Server Capability Statement](CapabilityStatement-usdf-server.html) and **SHALL** have a CapabilityStatement that has a CapabilityStatement.instantiates with a URL of http://hl7.org/fhir/us/davinci-drug-formulary/CapabilityStatement/usdf-server or a URL to the appropriate version of the CapabilityStatement.

### MustSupport
* The must support requirements for this IG are taken directly from the Conformance Expectations section of the [Da Vinci HRex IG]({{site.data.fhir.ver.hrex}}/conformance.html#mustsupport) and from [US Core]({{site.data.fhir.ver.uscore7}}/must-support.html). 



---

// File: input/pagecontent/downloads.md

### Downloads 
* The full [Implementation Guide](full-ig.zip)
* Resource Definitions [(JSON)](definitions.json.zip) [(XML)](definitions.xml.zip) [(TTL)](definitions.ttl.zip)
* Profile Examples [(JSON)](examples.json.zip) [(XML)](examples.xml.zip) [(TTL)](examples.ttl.zip)
* [Validator Pack](validator-hl7.fhir.us.davinci-drug-formulary.pack)
* The full [FHIR R4 core]({{site.data.fhir.path}}fhir-spec.zip) specifications and other [FHIR core downloads]({{site.data.fhir.path}}downloads.html)
* A [validator](https://fhir.github.io/latest-ig-validator/org.hl7.fhir.validator.jar) that can be used to check FHIR resource instance validity and [instructions on how to use it](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/ImplementationGuide-hl7.fhir.us.davinci-drug-formulary.md


|||
|---|---|
|*Official URL*: http://hl7.org/fhir/us/davinci-drug-formulary |*Version*: 2.0.1|
|*NPM package name*: hl7.fhir.us.davinci-drug-formulary |*ComputableName*: Formulary |
|*Copyright/Legal*: Used by permission of HL7 International, all rights reserved Creative Commons License|
{:.grid}

{{ site.data.ig.description }}

- [XML](ImplementationGuide-hl7.fhir.us.davinci-drug-formulary.xml)
- [JSON](ImplementationGuide-hl7.fhir.us.davinci-drug-formulary.json)

### Cross Version Analysis

{% capture cross-version-analysis %}{% include cross-version-analysis.xhtml %}{% endcapture %}{{ cross-version-analysis | remove: '<p>' | remove: '</p>'}}

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}



---

// File: input/pagecontent/index.md

### Da Vinci Payer Data Exchange (PDex) US Drug Formulary
This implementation guide defines a FHIR interface to a health insurer's drug formulary information for patients/consumers. A drug formulary is a list of brand-name and generic prescription drugs a health insurer agrees to pay for, at least partially, as part of health insurance coverage. Drug formularies are developed based on the efficacy, safety, and cost of drugs. The primary <a href="background.html#use-cases">use cases</a> for this FHIR interface enable consumers/members/patients to understand the costs and alternatives for drugs that have been prescribed, and to compare their drug costs across different insurance plans.

A key architectural issue that is beyond the scope of this implementation guide is how a user finds the FHIR endpoint for a particular formulary. This implementation guide assumes that the FHIR endpoint is known to the user.

### Introduction
<p>
  This Implementation Guide (IG) includes a number of profiles, extensions, search parameters, and value sets.
</p>
<ul>
  <li>
    <strong><a href="StructureDefinition-usdf-PayerInsurancePlan.html">PayerInsurancePlan</a></strong>: The PayerInsurancePlan profile of the FHIR R4 <a href="http://hl7.org/fhir/R4/insuranceplan.html">InsurancePlan</a> resource defines the health insurance product including coverage benefits that are offered and additional information about the offering, such as a coverage area, contact information, brochure locations, etc. The health insurance product can offer one or more types of coverage, each of which may define a plan of covered benefits with the particular cost sharing structure offered to a consumer. Health insurance plans that include drug coverage reference a formulary that provides details about drugs that are covered under the plan including requirements and limitations of the coverage specific to each drug.
  </li>
  <li>
    <strong><a href="StructureDefinition-usdf-Formulary.html">Formulary</a></strong>: The Formulary profile of the FHIR R4 <a href="http://hl7.org/fhir/R4/insuranceplan.html">InsurancePlan</a> resource provides general information about a formulary and acts as an organizing construct that associated FormularyItem resources point to. The Formulary combined with its associated <a href="StructureDefinition-usdf-FormularyItem.html">FormularyItem</a> and <a href="StructureDefinition-usdf-FormularyDrug.html">FormularyDrug</a> resources represent a formulary list that includes the set of drugs covered and the requirements and limitations of that coverage.
  </li>
  <li>
    <strong><a href="StructureDefinition-usdf-FormularyItem.html">FormularyItem</a></strong>: The FormularyItem profile of the FHIR R4 <a href="http://hl7.org/fhir/R4/basic.html">Basic</a> resource describes a drug's relationship to a formulary, including drug tier, prior authorization requirements, and more.
  </li>
  <li>
    <strong><a href="StructureDefinition-usdf-FormularyDrug.html">FormularyDrug</a></strong>: The FormularyDrug profile of the FHIR R4 <a href="http://hl7.org/fhir/medicationknowledge.html">MedicationKnowledge</a> resource provides information about a prescribable drug including its RxNorm code and dose form. Drugs not included in a formulary may not be represented by a FormularyDrug instance.
  </li>
</ul>
<p>
  A detailed description of the relationship between the profiles in this guide can be found in the <a href="background.html#formulary-structure">Formulary Structure section</a>.
</p>


<p>
  Several <a href="search_parameters.html">searchParameters</a> have been defined in this guide to facilitate the anticipated use cases. See the <a href="queries.html">Anticipated Client Queries</a> section for a description of how to query for resources in support of the anticipated use cases. Below are some of the search parameters defined in this guide.
</p>
<ul>
  <li>
    <strong><a href="SearchParameter-InsurancePlan-coverage-type.html">coverage-type</a></strong>: Makes the <code>coverage.type</code> CodeableConcept of each <a href="StructureDefinition-usdf-PayerInsurancePlan.html">PayerInsurancePlan</a> accessible for query to find InsurancePlan resources that have a specific coverage type, like drug coverage.
  </li>
  <li>
    <strong><a href="SearchParameter-InsurancePlan-formulary-coverage.html">formulary-coverage</a></strong>: Makes the coverage extension formulary reference of each <a href="StructureDefinition-usdf-PayerInsurancePlan.html">PayerInsurancePlan</a> accessible for query to find InsurancePlan resources that reference specific formulary.
  </li>
  <li>
    <strong><a href="SearchParameter-InsurancePlan-coverage-area.html">coverage-area</a></strong>: Makes the coverageArea reference of each <a href="StructureDefinition-usdf-PayerInsurancePlan.html">PayerInsurancePlan</a> accessible for query to find an InsurancePlan by coverage location.
  </li>
  <li>
    <strong><a href="SearchParameter-Basic-formulary.html">formulary</a></strong>: Makes the extension Formulary reference of each <a href="StructureDefinition-usdf-FormularyItem.html">FormularyItem</a> accessible for query to find drugs included in a particular formulary.
  </li>
  <li>
    <strong><a href="SearchParameter-Basic-drug-tier.html">drug-tier</a></strong>: Makes the extension DrugTier codeableConcept of each <a href="StructureDefinition-usdf-FormularyItem.html">FormularyItem</a> accessible for query to find drugs in a specific tier.
  </li>
  <li>
    <strong><a href="SearchParameter-Basic-pharmacy-benefit-type.html">pharmacy-benefit-type</a></strong>: Makes the extension PharmacyBenefitType codeableConcept of each <a href="StructureDefinition-usdf-FormularyItem.html">FormularyItem</a> accessible for query to find drugs in available through a specific pharmacy benefit type.
  </li>
  <li>
    <strong><a href="SearchParameter-MedicationKnowledge-drug-name.html">drug-name</a></strong>: Makes the RxNorm name of each<a href="StructureDefinition-usdf-FormularyDrug.html">FormularyDrug</a> accessible for query to find drugs by name, strength and form.
  </li>
</ul>

<p>
  Information about searching for formulary drugs can be found in the <a href="specification.html#searching-formulary-drugs">Searching for Formulary Drugs section</a>.
</p>

### Content and Organization

The IG is organized into the following sections:

* [Conformance Expectations](confexpectations.html): Conformance rules for this IG.
* [Use Cases](background.html#use-cases): Provides examples of how this specification can be used healthcare organizations.
* [Access Methods](specification.html#access-methods): Describes the methods for accessing the server (authenticated or unauthenticated).
* [Formulary Structure](background.html#formulary-structure): Describes how formularies are structured in this IG including relationships between profiles.
* [Bulk Data](specification.html#bulk-data): Describes the Formulary IG approach to bulk data.
* [Searching Formulary Drugs](specification.html#searching-formulary-drugs): Describes how to search for drugs by code or name.
* [Additional Guidance](specification.html#additional-guidance): Provides additional guidance on using the IG.
* [Anticipated Client Queries](queries.html): Example queries that should be useful to implementers.
* [Artifacts](artifacts.html): The computable FHIR artifacts (profiles, value sets, etc.) for this specification.

<a name="expected-users"></a>
### Expected Users 
<p>
  This Implementation Guide is intended for insurers within the United States. Currently, many insurers make their formularies available to patients using PDFs or drug search forms through their websites. Providing formularies using FHIR may allow patients to find alternatives to reduce their medication costs, easily comparison-shop between plans, and could help insurers educate consumers about the differences between various drug tiers and pharmacy benefit types.
</p>

<a name="disclaimers-and-assumptions"></a>
### Disclaimers and Assumptions
<ul>
  <li>
    <strong>Drug Formulary Data Use</strong>: The intent of this implementation guide is to make the plan-level information regarding formulary content and cost-sharing available through a standard interface to enable consumers to have an informed discussion with their practitioner about their medication options. Most consumers will access this data through a third party application. These applications <strong>SHOULD</strong> clearly communicate to the user that the cost-sharing information in the formulary may not tell them precisely what they will pay at the pharmacy, and might not fully reflect their drug benefit. Situational inclusions, exclusions, and requirements may apply. The presence or lack of presence of a particular drug in a query response should not be construed as a guarantee of coverage or lack thereof. An insurer may only support searching for drugs that are part of the formulary or formularies in the context of the query. Insurers <strong>SHOULD</strong> provide appropriate information and disclaimers regarding the interpretation and expected use of the data made available through this guide, including how the presence or lack of presence of a drug should be interpreted.
  </li>
  <li>
    <strong>The FHIR MedicationKnowledge Resource is immature</strong>: The HL7 Pharmacy WG felt that MedicationKnowledge was the best choice for representing a formulary drug, even with its low maturity, since it is more suitable as an artifact and already included some of fields that would be required as extensions to the Medication resource. The MedicationKnowledge resource and FormularyDrug profile will co-evolve moving forward.
  </li>
  <li>
    <strong>The formulary endpoint is known to the client</strong>: This guide assumes that the formulary endpoint is known to the client. The mechanism for FHIR endpoint discovery is important, but considered out of scope for this guide.
  </li>
</ul>


### Dependencies

{% include dependency-table.xhtml %}

### Intellectual Property Considerations
This implementation guide and the underlying FHIR specification are licensed as public domain under the [FHIR license](http://hl7.org/fhir/R4/license.html#license). The license page also describes rules for the use of the FHIR name and logo.

{% include ip-statements.xhtml %}


---

// File: input/pagecontent/project.md

### Project and Participants

### Da Vinci
{% include davinci.md %}

### The PDex Formulary project:

* Enables payers to share drug estimated cost and information (drug formulary) for patients/consumers applications
* Improves clarity of patient cost under current or potential health plan. 
* Improves consumers ability to shop plan coverage better.

The project is sponsored by the [HL7 Pharmacy Work Group](https://confluence.hl7.org/display/PHAR/Pharmacy)

Additional information can be found on the [PDex Formulary page](https://confluence.hl7.org/display/DVP/PDex+Formulary) on the HL7 Confluence site.

### Credits
Authors:

<tr>
  <td>Saul A. Kravitz</td>
  <td><a href="mailto:saul@mitre.org">saul@mitre.org</a></td>
</tr>
<tr>
  <td>May Terry</td>
  <td><a href="mailto:mayt@mitre.org">mayt@mitre.org</a></td>
</tr>
<tr>
  <td>Dave Hill</td>
  <td><a href="mailto:dwhill@mitre.org">dwhill@mitre.org</a></td>
</tr>
<tr>
  <td>Corey Spears</td>
  <td><a href="mailto:cspears@mitre.org">cspears@mitre.org</a></td>
</tr>
<tr>
  <td>Bob Dieterle</td>
  <td><a href="mailto:rdieterle@enablecare.us">rdieterle@enablecare.us</a></td>
</tr>
<tr>
  <td>Kate Dech</td>
  <td><a href="mailto:KDech@primetherapeutics.com">KDech@primetherapeutics.com</a></td>
</tr>
<tr>
  <td>Eric Ellsworth</td>
  <td><a href="mailto:eellsworth@checkbook.org">eellsworth@checkbook.org</a></td>
</tr>
<tr>
  <td>Rick Geimer</td>
  <td>< href="mailto:rick.geimer@lantanagroup.com>rick.geimer@lantanagroup.com</a></td>
</tr>




---

// File: input/pagecontent/queries.md

<a name="anticipated-client-queries"></a>
### Anticipated Client Queries

<a name="Find-all-PayerInsurancePlans"></a>
#### Find All PayerInsurancePlans

PayerInsurancePlans may have any number of types found in the `http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS` CodeSystem. Each PayerInsurancePlan conformant to this IG will have ane or more memberPlan extensions that references a Formulary. From the PayerInsurancePlan memberPlan extension(s), it is possible to retrieve the Formulary resource(s).

<pre>
  <code>
    GET [base]/InsurancePlan?type=http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS|
  </code>
</pre>

<a name="Find-all-InsurancePlans-With-Drug-Coverage"></a>
#### Find All Insurance Plans with Drug Coverage

<p>
  InsurancePlan with drug coverage can be search for with a `coverage.type` of `http://terminology.hl7.org/CodeSystem/v3-ActCode|DRUGPOL`. 
</p>

<pre>
  <code>
    GET [base]/InsurancePlan?coverage-type=http://terminology.hl7.org/CodeSystem/v3-ActCode|DRUGPOL
  </code>
</pre>

<a name="Find-all-Formulary-Resources"></a>
#### Find All Formulary Resource
<p>
  Formulary can be search for with a type of `http://terminology.hl7.org/CodeSystem/v3-ActCode|DRUGPOL`. 
</p>
<pre>
  <code>
    GET [base]/InsurancePlan?type=http://terminology.hl7.org/CodeSystem/v3-ActCode|DRUGPOL
  </code>
</pre>

<a name="Find-a-Formulary-by-Id"></a>
#### Find a Formulary by its Identifier
<p>
  To find an Formulary for a with id 'D1002': 
</p>
<pre>
  <code>
    GET [base]/InsurancePlan?type=http://terminology.hl7.org/CodeSystem/v3-ActCode|DRUGPOL&identifier=D1002
  </code>
</pre>

<a name="Find-all-PayerInsurancePlans-by-a-Formulary"></a>
#### Find All PayerInsurancePlans by a Formulary
<p>To find all PayerInsurancePlans that include a coverage with a specific formulary by id 'FormularyD1002':</p>
<pre>
  <code>
    GET [base]/InsurancePlan?formulary-coverage=InsurancePlan/FormularyD1002
  </code>
</pre>

<a name="Find-all-PayerInsurancePlans-by-Coverage-Area"></a>
#### Find All PayerInsurancePlans by Coverage Area
<p>To find all PayerInsurancePlans with a coverage area Location by id 'StateOfCTLocation':</p>
<pre>
  <code>
    GET [base]/InsurancePlan?coverage-area=Location/StateOfCTLocation
  </code>
</pre>

<a name="Find-all-FormularyItems-and-FormularyDrugs-in-a-Formulary"></a>
#### Find All FormularyItems and FormularyDrugs in a Formulary
<p>To find all FormularyItems and their respective FormularyDrugs in a Formulary with the id of 'FormularyD1002':</p>
<pre>
  <code>
    GET [base]/Basic?code=http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-InsuranceItemTypeCS|formulary-item&formulary=InsurancePlan/FormularyD1002&_include=Basic:subject
  </code>
</pre>

<a name="Find-all-FormularyItems-and-FormularyDrugs-in-a-Formulary-by-Drug-Tier"></a>
#### Find All FormularyItems and FormularyDrugs in an Formulary by Drug Tier 
<p>To find all FormularyItems and their respective FormularyDrugs in a Formulary with the id of 'FormularyD1002' and a drug-tier of 'generic':</p>
<pre>
  <code>
    GET [base]/Basic?code=http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-InsuranceItemTypeCS|formulary-item&formulary=InsurancePlan/FormularyD1002&drug-tier=http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-DrugTierCS|generic&_include=Basic:subject
  </code>
</pre>
<a name="Find-all-FormularyItems-and-FormularyDrugs-in-a-Formulary-by-Pharmacy-Benefit-Type"></a>
#### Find All FormularyItems and FormularyDrugs in a Formulary by Pharmacy Benefit Type 
<p>To find all FormularyItems and their respective FormularyDrugs in a Formulary with the id of 'FormularyD1002' and a pharmacy-benefit-type of '3-month-in-mail':</p>
<pre>
  <code>
    GET [base]/Basic?code=http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-InsuranceItemTypeCS|formulary-item&formulary=InsurancePlan/FormularyD1002&pharmacy-benefit-type=http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PharmacyBenefitTypeCS|3-month-in-mail&_include=Basic:subject
  </code>
</pre>

<a name="Find-all-FormularyItems-and-FormularyDrugs-in-a-Formulary-by-Drug-Name"></a>
#### Find All FormularyItems and FormularyDrugs in a Formulary by Drug Name 
<p>To find all FormularyItems and their respective FormularyDrugs in a Formulary with the id of 'FormularyD1002' and a drug name of 'doxepin hydrochloride':</p>
<pre>
  <code>
    GET [base]/Basic?code=http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-InsuranceItemTypeCS|formulary-item&formulary=InsurancePlan/FormularyD1002&subject:MedicationKnowledge.drug-name=doxepin%20hydrochloride&_include=Basic:subject
  </code>
</pre>

<a name="Find-all-FormularyItems-and-FormularyDrugs-in-a-Formulary-by-Drug-Code"></a>
#### Find All FormularyItems and FormularyDrugs in a Formulary by Drug Code 
<p>To find all FormularyItems and their respective FormularyDrugs in a Formulary with the id of 'FormularyD1002' and a drug with the RxNorm code of '1000091':</p>
<pre>
  <code>
    GET [base]/Basic?code=http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-InsuranceItemTypeCS|formulary-item&formulary=InsurancePlan/FormularyD1002&subject:MedicationKnowledge.code=http://www.nlm.nih.gov/research/umls/rxnorm|1000091&_include=Basic:subject
  </code>
</pre>

<a name="Find-all-FormularyItems-and-Covering-Formulary-Resources-by-Drug-Code"></a>
#### Find All FormularyItems and Covering Formulary Resources by Drug Code 
<p>To find all FormularyItems and the Formulary resources that include them for the drug with the RxNorm code of '1000091':</p>
<pre>
  <code>
    GET [base]/Basic?code=http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-InsuranceItemTypeCS|formulary-item&subject:MedicationKnowledge.code=http://www.nlm.nih.gov/research/umls/rxnorm|1000091&_include=Basic:formulary
  </code>
</pre>


---

// File: input/pagecontent/reading.md

### Reading this IG

This guide is based on the [HL7 FHIR 4.0.1](http://hl7.org/fhir/R4/) standard, as well as the [Da Vinci PDex Plan Net](https://www.hl7.org/fhir/us/davinci-pdex-plan-net/) and [US Core](https://www.hl7.org/fhir/us/core/) standards, which build additional capabilities on top of FHIR. This architecture is intended to maximize the number of clinical systems that conform to this guide as well as to allow for easy growth and extensibility of system capabilities in the future.

To understand how to read an Implementation Guide implementers should refer to the [How to Read page](https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html) in the FHIR Specification.

### Underlying Technologies
This guide is based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard.  Implementers of this specification therefore need to understand some basic information about these specifications.

#### FHIR
This implementation guide uses terminology, notations and design principles that are
specific to FHIR.  Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR, as well as general guidance on how to read FHIR specifications.  Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this implementation guide.

* [FHIR Overview]({{site.data.fhir.path}}overview.html)
* [Developer's Introduction]({{site.data.fhir.path}}overview-dev.html) (or [Clinical Introduction]({{site.data.fhir.path}}overview-clinical.html))
* [FHIR Data Types]({{site.data.fhir.path}}datatypes.html)
* [Using Codes]({{site.data.fhir.path}}terminologies.html)
* [References between Resources]({{site.data.fhir.path}}references.html)
* [How to Read Resource & Profile Definitions]({{site.data.fhir.path}}formats.html) and additional [IG reading guidance](https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html)
* [Base Resource]({{site.data.fhir.path}}resource.html)

This implementation guide supports the [R4]({{site.data.fhir.path}}index.html) version of the FHIR standard.

This implementation guide also builds on the [US Core]({{site.data.fhir.hl7_fhir_us_core}}) Implementation Guide and implementers need to familiarize themselves with the profiles in that IG.

The following FHIR Resources are used in this IG:

* [basic](http://hl7.org/fhir/R4/basic.html)
* [capabilitystatement](http://hl7.org/fhir/R4/capabilitystatement.html)
* [codesystem](http://hl7.org/fhir/R4/codesystem.html)
* [graphdefinition](http://hl7.org/fhir/R4/graphdefinition.html)
* [insuranceplan](http://hl7.org/fhir/R4/insuranceplan.html)
* [location](http://hl7.org/fhir/R4/location.html)
* [medicationknowledge](http://hl7.org/fhir/R4/medicationknowledge.html)
* [searchparameter](http://hl7.org/fhir/R4/searchparameter.html)
* [structuredefinition](http://hl7.org/fhir/R4/structuredefinition.html)
* [valueset](http://hl7.org/fhir/R4/valueset.html)

---

// File: input/pagecontent/search_parameters.md

<a name="Search Parameters Required By This Implementation Guide"></a>

### Search Parameters Required by This Implementation Guide
<p>&nbsp;</p>
#### PayerInsurancePlan & Formulary (InsurancePlan)
<table class="grid" style="width: 100%">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Type</th>
			<th>Conf.</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="{{site.data.fhir.path}}search.html">_id</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>FHIR resource id of an InsurancePlan</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?_id=[id]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-InsurancePlan-lastupdated.html">_lastUpdated</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#date">date</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the last updated date of an InsurancePlan</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?_lastUpdated=[date]</code></td>
		</tr>
  		<tr>
			<td><a href="SearchParameter-InsurancePlan-identifier.html">identifier</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the business identifier of an InsurancePlan</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?identifier=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-InsurancePlan-status.html">status</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the status of an InsurancePlan</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?status=[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-InsurancePlan-period.html">period</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#date">date</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the active period of an InsurancePlan</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?period=[date]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-InsurancePlan-type.html">type</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the Type of an InsurancePlan</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?type=[system]|[code]</code></td>
		</tr>	
		<tr>
			<td><a href="SearchParameter-InsurancePlan-name.html">name</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#string">string</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the name of an InsurancePlan</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?name=[string]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-InsurancePlan-coverage-type.html">coverage-type</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the coverage type of an InsurancePlan</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?coverage-type=[system]|[code]</code></td>
		</tr>			
		<tr>
			<td><a href="SearchParameter-InsurancePlan-formulary-coverage.html">formulary-coverage</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the Coverage Formulary Reference of an InsurancePlan</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?formulary-coverage=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-InsurancePlan-coverage-area.html">coverage-area</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>SHALL</strong></td>
			<td>Search InsurancePlan by coverage location.</td>
			<td><code class="highlighter-rouge">GET [base]/InsurancePlan?coverage-area=[reference]</code></td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>

#### InsurancePlanLocation (Location)
<table class="grid" style="width: 100%">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Type</th>
			<th>Conf.</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="{{site.data.fhir.path}}search.html">_id</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>FHIR resource id of a Location</td>
			<td><code class="highlighter-rouge">GET [base]/Location?_id=[id]</code></td>
		</tr>
		<tr>
			<td><a href="{{site.data.fhir.path}}search.html#lastUpdated">_lastUpdated</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#date">date</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Access the last updated date of a Location</td>
			<td><code class="highlighter-rouge">GET [base]/Location?_lastUpdated=[date]</code></td>
		</tr>
		<tr>
			<td>address</td>
			<td><a href="{{site.data.fhir.path}}search.html#string">string</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Access the address of a Location</td>
			<td><code class="highlighter-rouge">GET [base]/Location?address=[string]</code></td>
		</tr>
		<tr>
			<td>address-city</td>
			<td><a href="{{site.data.fhir.path}}search.html#string">string</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Access the city of a Location</td>
			<td><code class="highlighter-rouge">GET [base]/Location?address-city=[string]</code></td>
		</tr>
		<tr>
			<td>address-state</td>
			<td><a href="{{site.data.fhir.path}}search.html#string">string</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Access the state of a Location</td>
			<td><code class="highlighter-rouge">GET [base]/Location?address-state=[string]</code></td>
		</tr>
		<tr>
			<td>address-postalcode</td>
			<td><a href="{{site.data.fhir.path}}search.html#string">string</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Access the postal code of a Location</td>
			<td><code class="highlighter-rouge">GET [base]/Location?address-postalcode=[string]</code></td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>

#### FormularyItem (Basic)
<table class="grid" style="width: 100%">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Type</th>
			<th>Conf.</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="{{site.data.fhir.path}}search.html">_id</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>FHIR resource id of a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/Basic?_id=[id]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Basic-lastupdated.html">_lastUpdated</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#date">date</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the last updated date of a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/Basic?_lastUpdated=[date]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Basic-code.html">code</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the Code of a Basis resource to find a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/Basic?code=formulary-item</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Basic-subject.html">subject</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the subject FormularyDrug (MedicationKnowledge) reference of a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/Basic?subject=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Basic-status.html">status</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the status of a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/Basic?status=[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Basic-period.html">period</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#date">date</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the active period of a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/Basic?period=[date]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Basic-formulary.html">formulary</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#reference">reference</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the formulary reference of a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/Basic?formulary=[reference]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Basic-pharmacy-benefit-type.html">pharmacy-benefit-type</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the Pharmacy Benefit Type of a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/Basic?pharmacy-benefit-type=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-Basic-drug-tier.html">drug-tier</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the Drug Tier of a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/Basic?drug-tier=[system]|[code]</code></td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>

#### FormularyDrug (MedicationKnowledge)
<table class="grid" style="width: 100%">
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Type</th>
			<th>Conf.</th>
			<th>Description</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="{{site.data.fhir.path}}search.html">_id</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>FHIR resource id of a FormularyDrug</td>
			<td><code class="highlighter-rouge">GET [base]/MedicationKnowledge?_id=[id]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-MedicationKnowledge-lastupdated.html">_lastUpdated</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#date">date</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the last updated date of a FormularyItem</td>
			<td><code class="highlighter-rouge">GET [base]/MedicationKnowledge?_lastUpdated=[date]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-MedicationKnowledge-status.html">status</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the status of a FormularyDrug</td>
			<td><code class="highlighter-rouge">GET [base]/MedicationKnowledge?status=[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-MedicationKnowledge-code.html">code</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the status of a FormularyDrug</td>
			<td><code class="highlighter-rouge">GET [base]/MedicationKnowledge?code=[system]|[code]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-MedicationKnowledge-drug-name.html">drug-name</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#string">string</a></td>
			<td><strong>SHALL</strong></td>
			<td>Accesses the Drug Name of a FormularyDrug</td>
			<td><code class="highlighter-rouge">GET [base]/MedicationKnowledge?drug-name=[string]</code></td>
		</tr>
		<tr>
			<td><a href="SearchParameter-MedicationKnowledge-doseform.html">doseform</a></td>
			<td><a href="{{site.data.fhir.path}}search.html#token">token</a></td>
			<td><strong>SHOULD</strong></td>
			<td>Accesses the dose form of a FormularyDrug</td>
			<td><code class="highlighter-rouge">GET [base]/MedicationKnowledge?doseform=[system|code]</code></td>
		</tr>
	</tbody>
</table>


<p>
<ul>
  <li>
    Search parameters for a particular resource generally can be used in any combination.
  </li>
</ul>	
</p>


---

// File: input/pagecontent/security.md

Users of this implementation guide [**SHALL** conform to the Da Vinci HRex]({{site.data.fhir.ver.hrex}}/security.html) guidelines on privacy, safety, and security.

Additional details on security considerations for all FHIR implementations can be found on the [FHIR Security](http://hl7.org/fhir/R4/security.html) page.

---

// File: input/pagecontent/specification.md


### Access Methods
The formulary service can potentially be accessed two different ways:
1. __Authenticated API__: Access to the formulary service when integrated with protected health information (PHI) or personally identifiable information (PII) as part of the Patient Access API **SHALL** be protected through an authorized, authenticated transaction as described in the Da Vinci Health Record Exchange (HRex) FHIR Implementation Guide [Security and Privacy Section](({{site.data.fhir.ver.hrex}}/security.html).
2. __Unauthenticated API__: When exchanging formulary data exclusively, which is public information without any PHI or PII, the formulary service **MAY** also be accessed through an API that does not require authentication or authorization. The formulary server **SHALL NOT** maintain any records through the unauthenticated API that could associate the consumer with the medications queried.


#### Authenticated 
When accessing data through an authenticated API, the response for queries on InsurancePlan depends on whether the authenticated member has access to the plan in relation to their membership.  

* For the [Payer Insurance Plan](StructureDefinition-usdf-PayerInsurancePlan.html), this is the overall plan or plans that the individual is a member of.
* For [Formulary](StructureDefinition-usdf-Formulary.html), this means all Formularies that are generally available to the member. If the member is in a group, all group associated formularies are returned. If not in a group, all generally available formularies (that is, those that are not restricted to only one or more groups) are returned.

Clients can determine the Formulary InsurancePlan(s) that the member is subscribed by first retrieving the Payer Insurance Plan(s) and identifying the Formulary(s) through the [Payer Insurance Plan InsurancePlan.coverage](StructureDefinition-usdf-PayerInsurancePlan-definitions.html#InsurancePlan.coverage:drug-coverage).

The following table indicates how the Formulary API should respond to requests when a Formulary Insurance plan (by resource reference) is specified and when it is not.
<table border="1">
  <thead>
    <th>InsurancePlan specified – GET by resource ID</th>
    <th>InsurancePlan reference not specified - Search</th>
  </thead>
  <tbody>
    <tr>
      <td>Return plan if covered by insurer and included in group if member is part of a group<br />If not, return 400</td>
      <td> Return all plans if covered by insurer and included in group if member is part of a group<br />If none, return 200 </td>
    </tr>
  </tbody>
</table>

Access to other profiled resources in this IG ([FormularyItem](StructureDefinition-usdf-FormularyItem.html) & [FormularyDrug]( StructureDefinition-usdf-FormularyDrug.html)) is not constrained by this IG.

Server implementers **SHALL** make other profiled resources in this IG ([FormularyItem](StructureDefinition-usdf-FormularyItem.html), [FormularyDrug]( StructureDefinition-usdf-FormularyDrug.html)) associated to a member’s available plans available through authenticated access. This IG does not define restrictions on authenticated access to resources not associated with a member’s available plan or the [Plan Location]( StructureDefinition-usdf-InsurancePlanLocation.html) resource.


#### Unauthenticated
When accessing data through an unauthenticated API, the conformant payer formulary service **SHALL NOT** require an application to send consumer identifying information in order to query for the list of health plans provided by that payer and the medication and costs for each plan.


### Bulk Data
Bulk data guidance in this version of the IG is draft only. It has not appeared in ballot and has not been fully tested.</i></b>


A server **MAY** support [Bulk Data IG](http://hl7.org/fhir/uv/bulkdata/index.html) for the retrieval of formulary data not related to an individual. The Bulk Data IG may be used because the data set for formularies could be large as a server may manage multiple formularies, each of which may contain thousands of drugs. If and how authorization is supported is not defined by this specification, however, the Bulk IG does provide guidance on SMART Backend Service Authorization. 

If a Formulary server supports bulk data export:
* **All InsurancePlan:** The server **SHOULD** support the export operation on the InsurancePlan resource `[base]/InsurancePlan/$export` to export all plan & formulary information.
  * The server **SHOULD** support providing all `InsurancePlan`, `Basic`, `MedicationKnowledge`, and `Location` resource types containing formulary related data associated with all formulary related plans.
  * The server **SHOULD** support the graph structure [Payer Insurance Plan Bulk Data Graph Definition](StructureDefinition-usdf-PayerInsurancePlanBulkDataGraphDefinition.html) in returned results.
  * The server **MAY** support a graph parameter using (e.g. `[base]/InsurancePlan/$export?graph=usdf-PayerInsurancePlanBulkDataGraphDefinition`) to request returning results starting at the [PayerInsurancePlan](StructureDefinition-usdf-PayerInsurancePlan.html).
  * The server **MAY** support a graph parameter using (e.g. `[base]/InsurancePlan/$export?graph=usdf-FormularyBulkDataGraphDefinition`) to request returning results starting at the [Formulary](StructureDefinition-usdf-Formulary.html). This request would not return [PayerInsurancePlan](StructureDefinition-usdf-PayerInsurancePlan.html) resources.


* **Specific InsurancePlan:** The server **SHOULD** support the export operation on the InsurancePlan resource `[base]/InsurancePlan/[id]/$export` to export plan specific plan & formulary information.
  * The server **SHOULD** support providing all `InsurancePlan`, `Basic`, `MedicationKnowledge`, and `Location` resource types containing formulary related data associated with the specific plan.
  * The server **SHOULD** support the graph structure [Payer Insurance Plan Bulk Data Graph Definition](StructureDefinition-usdf-PayerInsurancePlanBulkDataGraphDefinition.html) in returned results when the specific plan [id] is a [PayerInsurancePlan](StructureDefinition-usdf-PayerInsurancePlan.html) profiled resource.
  * The server **SHOULD** support the graph structure [Formulary Bulk Data Graph Definition](StructureDefinition-usdf-FormularyBulkDataGraphDefinition.html) in returned results when the specific plan [id] is a [Formulary](StructureDefinition-usdf-Formulary.html) profiled resource.
  <!-- The below may not be relevant as the id specifies the type (either PayerInsurancePlan or Formulary -->
  <!-- The server **MAY** support a graph parameter using (e.g. `[base]/InsurancePlan/[id]/$export?graph=usdf-PayerInsurancePlanBulkDataGraphDefinition`). -->
  <!-- The server **MAY** support a graph parameter using (e.g. `[base]/InsurancePlan/[id]/$export?graph=usdf-FormularyBulkDataGraphDefinition`). -->

  
* The server **SHOULD** return only formulary related resources conformant to this guide.
* The server **SHOULD** support the Bulk Data Kick-off Request.
* The server **SHOULD** support the Bulk Data File Request.
* The server SHOULD support the _since parameter where the response will include resources where the state has changed after the supplied time (e.g., if Resource.meta.lastUpdated is later than the supplied _since time). The server SHOULD return all resources modified prior to the supplied time containing formulary related data associated that are directly referenced from or contain direct references to all matching InsurancePlan.
* The server **MAY** support the Bulk Data Status Request.
* The server **MAY** support the Bulk Data Delete Request.



### Searching Formulary Drugs
This guide provides a mechanism for rudimentary drug searching and filtering based on drug codes, names, and forms, by requiring server systems to support this data. This capability is not robust and client systems are encouraged to augment their drug searching capabilities using outside services or data sources to better meet the needs of their users.

Searching for formulary drugs can be done by RxNorm code, RxNorm drug name, and dose form. In a formulary API, payers are likely to only include the specific drugs, specific down to form and strength, that are included in the coverage. If a search does not return the anticipated or desireable results, it is recommended that the client broaden the search (e.g. include both generic and brand RxNorm codes, search on name without strength, or search on an RxNorm code that does not include strength - see more guidance about supported RxNorm code term types below). Additionally, drugs that have special coverage rules may or may not be included in an API. These rules are often expressed in additional formulary documentation, referenced by the [InsurancePlan.contact](StructureDefinition-usdf-PayerInsurancePlan-definitions.html#InsurancePlan.contact), which **SHOULD** be presented to the user of the client application.

Formulary searches may be restricted to just the drugs supported by the payer therefore it is up to the user or calling application to convert patient searching requirements for branded or equivalent drugs into one or more formulary searches.

Covered drugs may appear in the formulary and non-covered drugs are simply not included. For example, a payer may pay for a generic form of a drug, but does not have a brand in their formulary. To retrieve matching drugs and available alternatives, it may be necessary for a client to search using the ingredient (generic) in addition to a brand.

Note: In addition to the guidance and requirements below regarding searching for drugs based on an RxNorm code or display, servers may wish to support additional coding systems and display values in order to represent specific drugs that may have the same RxNorm code, but have different coverage specifics as defined in the [Specific Drug Coverage Details](#specific-drug-coverage-details) section. This may result in more than one [FormularyDrug]( StructureDefinition-usdf-FormularyDrug.html) with the same RxNorm code and display value.

#### Searching By Drug Code

The preferred way to search for drugs is to use an RxNorm code (RxCUI). The RxNorm codes and names are freely available and services to look-up codes exist. If a client application is performing a query with the intent on finding generic or brand alternatives, the client application **SHOULD** search using both the brand and the generic RxNorm code.

Servers **SHALL** support a MedicationKnowledge.code.coding repetition including the detailed drug, strength, and form, including RxNorm Term Types (TTY) of `SCD` (Semantic Clinical Drug), `SBD` Semantic Branded Drug), `GPCK` (Generic Pack), or `BPCK` (Branded Pack). Additionally, servers **SHALL** support a MedicationKnowledge.code.coding repetition including the general RxNorm code (and name) with Term Type of` SCDG` (Semantic Clinical Drug Form Group) or `SBDG` (Semantic Branded Drug Form Group) when there is a concept matching the primary code represented by the Term Type `SCD` or `SBD` respectively. This requirement includes using the respective RxNorm name in the display of the coding repetition. 

Searches for drugs with the above RxNorm Term Types (SCDG and SBDG) by either code will provide the client with a way to search for drugs without a specified strength.

#### Searching By Drug Name

This Implementation Guide provides the ability to search for FormularyDrug (MedicationKnowledge) resources by drug name through the [drug-name](SearchParameter-MedicationKnowledge-drug-name.html) search parameter. This search parameter is based on the MedicationKnowledge.code.coding.display and provides a full (`exact`) or partial (`contains`) equals (`eq`) string match. Per the FHIR Specification, the [Correct RxNorm Display](https://www.hl7.org/fhir/rxnorm.html#4.3.2.3) is the Full RxNorm name of either the Semantic Clinical Drug (SCD) or Semantic Brand Drug (SBD). The full drug name has several components presented in the following formats:

* SCD = Ingredient + Strength + Dose Form
* SBD = Ingredient + Strength + Dose Form + [Brand Name]

In addition to these RxNorm names, drug combination packs may also appear in formularies. Drug combination packs can contain multiple drugs or strengths that are packaged and prescribed together, under a brand or generic drug name, to meet a particular set of administration requirements. The full name for drug combination packs have components presented in the following formats:

* GPCK = {# (Ingredient + Strength + Dose Form) / # (Ingredient + Strength + Dose Form)} Pack
* BPCK = {# (Ingredient + Strength + Dose Form) / # (Ingredient + Strength + Dose Form)} Pack [Brand Name]
  
Servers are required to support the more general drug form group code and name where one exists. This display name will be included in any drug name search for which the general drug form group code exists. The RxNorm name of these codes has several components presented in the following formats:
* SCDG = Ingredient + Dose Form Group
* SBDG = Ingredient + Dose Form Group + [Brand Name]

The [drug-name SearchParameter](SearchParameter-MedicationKnowledge-drug-name.html) includes the `multipleAnd` capability, which allows for multiple `drug-name` search parameters within a single query. With this capability it is possible to search by drug name and form where a dose form group is not available. This capability should be used sparingly, as each additional partial string search parameter increases the load on the server. 

For Example:
  `MedicationKnowledge?drug-name:contains=acetaminophen&drug-name:contains=Tablet`

This search will return all matching drug names with both the ingredient “acetaminophen” and dose form “Tablet”. This will also return any matching combination or pack drugs. 

Another factor clients need to consider when searching for drugs by name, is that individual drug names may be contained within combination drugs (e.g., a search on acetaminophen will return many combination drugs). Clients may need to filter search results to fit their requirements.

### Additional Guidance

Specific Drug Coverage Details

RxNorm codes and descriptions were chosen as the mechanism for searching and describing covered drugs for consumer use because that is what consumers will generally have access to given the requirements laid out in US regulation. RxNorm is also the code system used for many outpatient pharmacy prescribing transactions.

RxNorm provides a consumer accessible categorization for prescribable drugs. This categorization may not be specific enough for payers that have very detailed coverage constraints they feel are necessary to express to their members.

This IG Provides the following ways to express various levels of coverage (coverage status, requirements, or costs) for multiple drugs represented under one RxNorm code.

Specific drugs identified by unique FormularyDrug resource instances that are  associated to a Formulary with specific coverage conditions, requirements, and costs through a FormularyItem.
A specific drug code using NDC or other code system is included as a FormularyDrug MedicationKnowledge.code.coding that includes the specific name in the display to enable searching.
Drugs identified by a general RxNorm code in a single FormularyDrug MedicationKnowledge resource with specific coverage conditions and requirements communicated in the referenced FormularyItem.
Specific details including drugs covered or not covered, coverage conditions, or requirements are specified in the FormularyItem Basic.extensions[usdf-AdditionalCoverageInformation-extension].
 

To the Searching Formulary Drugs section, at the bottom of the main section add:

Note: In addition to the guidance and requirements below regarding searching for drugs based on an RxNorm code or display, servers may wish to support additional coding systems and display values in order to represent specific drugs that may have the same RxNorm code, but have different coverage specifics as defined in [Specific Drug Coverage Details](#specific-drug-coverage-details). This may result in more than one [FormularyDrug]( StructureDefinition-usdf-FormularyDrug.html) with the same RxNorm code and display value.

#### Specific Drug Coverage Details

RxNorm codes and descriptions were chosen as the mechanism for searching and describing covered drugs for consumer use because that is what consumers will generally have access to given the requirements laid out in US regulation. RxNorm is also the code system used for many outpatient pharmacy prescribing transactions.

RxNorm provides a consumer accessible categorization for prescribable drugs. This categorization may not be specific enough for payers that have very detailed coverage constraints they feel are necessary to express to their members.

This IG Provides the following ways to express various levels of coverage (coverage status, requirements, or costs) for multiple drugs represented under one RxNorm code.

* Specific drugs identified by unique [FormularyDrug]( StructureDefinition-usdf-FormularyDrug.html) resource instances that are  associated to a Formulary with specific coverage conditions, requirements, and costs through a [FormularyItem](StructureDefinition-usdf-FormularyItem.html).
    - A specific drug code using NDC or other code system is included as a [FormularyDrug]( StructureDefinition-usdf-FormularyDrug.html) MedicationKnowledge.code.coding that includes the specific name in the display to enable searching.
  
* Drugs identified by a general RxNorm code in a single [FormularyDrug]( StructureDefinition-usdf-FormularyDrug.html) MedicationKnowledge resource with specific coverage conditions and requirements communicated in the referenced [FormularyItem](StructureDefinition-usdf-FormularyItem.html).
  - Specific details including drugs covered or not covered, coverage conditions, or requirements are specified in the [FormularyItem](StructureDefinition-usdf-FormularyItem.html) Basic.extensions.
  
#### Linking Coverage to Plans

Version 2.1.0 of this IG added the [Insurance Plan Coverage](StructureDefinition-usdf-InsurancePlanCoverage.html) profile for linking a patient's coverage to specific drug plans in a [Payer Insurance Plan](StructureDefinition-usdf-PayerInsurancePlan.html).

First, the Payer Insurance Plan profile added a new constraint under Coverage making InsurancePlan.plan:drug-plan.identifier must-support, providing an identifier to link to inside the InsurancePlan resource which may include multiple actual plans (later versions of FHIR have a new resource called InsuranceProduct, which addresses this confusions (a given product may have multiple plans).

The new Coverage profile extends the US Core Coverage profile and adds two cross-version extensions to enable features of Converage not available in FHIR R4, specifically a reference to an InsurancePlan resource that contains the specific drug plan in question, as well as adding an identifier extension under Coverage.class:plan to reference InsurancePlan.plan:drug-plan.identifier, since in FHIR R4 Coverage.class only allows a string to identify the actual plan.

This solution may require multiple Coverage resources on a given FHIR server even though in the real world there may be a single plan that covers all situations, one for drug coverages and another for everything else, and that the current solution will be revisited for FHIR R6. 

#### Presenting Drug Alternatives 
Finding appropriate alternatives of a prescribed medication is complex and often depends on additional clinical information about the patient well as the condition or set of conditions for which the medication is meant to address. The means to identify therapeutic alternatives to drugs does exist in the industry, but such capability is complex, requires clinical information about the patient that is not within in scope of this guide, and a clinical understanding of the intended therapeutic use of the medication which is not generally within the competency of most members.  The information and business rules necessary to identify possible therapeutic alternatives, and therefore the ability to search for such alternatives, currently lies outside of the scope of this guide.

<a name="representing-drug-tiers"></a>
#### Representing Drug Tiers
Drug tiers are not standardized. The current Implementation Guide provides a defined, but extensible value set for tier identifiers based on the example list in the QHP formulary specification. A move towards standardization might make this data more useful for clients of the interface.

<a name="representing-pharmacy-benefit-types"></a>
#### Representing Pharmacy Benefit Types
Pharmacy benefit types are not standardized. The current Implementation Guide provides a defined value set for tier identifiers based on the example list in the QHP formulary specification which mixes channels (retail and mail order) with quantity prescribed (1 month, 3 month, etc). A move towards standardization might make this data more useful for clients of the interface.


---

// File: input/SUSHI-GENERATED-FILES.md

# SUSHI-GENERATED FILES #

The following table shows all IG config files that were generated or copied by SUSHI.  The first column
represents the SUSHI-generated file. Authors should NOT edit SUSHI-generated files, else their edits will
be overwritten the next time SUSHI is run. Where applicable, the last column shows the files that are used
as input into the generated files. Authors should edit the input files in order to affect the SUSHI-generated
files.

NOTE: This file does not currently list the FHIR resources and examples generated from .fsh files. It only
lists those files generated from project configs or the contents in the ig-data folder.

| SUSHI-GENERATED FILE                                              | ACTION    | INPUT FILE(S)                                          |
| ----------------------------------------------------------------- | --------- | ------------------------------------------------------ |
| input\ImplementationGuide-hl7.fhir.us.davinci-drug-formulary.json | generated | fsh\sushi-config.yaml, {all input resources and pages} |
| input\ignoreWarnings.txt                                          | generated |                                                        |
| input\includes\menu.xml                                           | generated | fsh\sushi-config.yaml                                  |

---

// File: input/fsh/Aliases.fsh

Alias: $GeoJSONExtension = http://hl7.org/fhir/StructureDefinition/location-boundary-geojson
Alias: $PlanNetInsuranceProductTypeVS = http://hl7.org/fhir/us/davinci-pdex-plan-net/ValueSet/InsuranceProductTypeVS
Alias: $PlanNetInsuranceProductTypeCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS

Alias: $HL7v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $HL7ContactEntity-Type = http://terminology.hl7.org/CodeSystem/contactentity-type

//Alias: $HL7-USCore-MedicationCodes = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4

Alias: $HL7InsurancePlanTypeCS = http://terminology.hl7.org/CodeSystem/insurance-plan-type
Alias: $HL7InsurancePlanTypeVS = http://terminology.hl7.org/ValueSet/insuranceplan-type

Alias: $RxNorm = http://www.nlm.nih.gov/research/umls/rxnorm

Alias: $WG = http://hl7.org/fhir/StructureDefinition/structuredefinition-wg

---

// File: input/fsh/CodeSystems.fsh

CodeSystem: DrugTierCS
Id: usdf-DrugTierCS-TEMPORARY-TRIAL-USE
Title: "Codes for medication drug tiers in health plans"
Description: "Codes to represent the drug tier of a particular medication in a health plan.  Base set are examples.  Each plan may have its own controlled vocabulary."
* #generic                    "Generic"  "Commonly prescribed generic drugs that cost more than drugs in the 'preferred generic' tier."
* #preferred "Preferred" "Commonly prescribed drugs that are preferred by the plan."
* #non-preferred "Non-preferred" "Commonly prescribed drugs that cost more than drugs in the 'preferred' tier."
* #preferred-generic          "Preferred Generic"  "Commonly prescribed generic drugs."
* #non-preferred-generic      "Non-preferred Generic"  "Generic drugs that cost more than drugs in ‘generic’ tier."
* #specialty                  "Specialty"  "Drugs used to treat complex conditions like cancer and multiple sclerosis. They can be generic or brand name, and are typically the most expensive drugs on the formulary."
* #brand                      "Brand"  "Brand name drugs that cost more than ‘preferred brand’ drugs."
* #preferred-brand           "Preferred Brand"  "Brand name drugs"
* #non-preferred-brand        "Non-preferred Brand"  "Brand name drugs that cost more than ‘brand’ drugs."
* #zero-cost-share-preventative "Zero cost-share preventative"  "Preventive medications and products available at no cost."
* #medical-service           "Medical Service"  "Drugs that must be administered by a clinician or in a facility and may be covered under a medical benefit."
* ^caseSensitive = true
* ^experimental = false

// Renamed and title/description changes per FHIR-34756
CodeSystem: PharmacyBenefitTypeCS
Id:             usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE
Title: "Codes for pharmacy benefit types"
Description: "Codes for pharmacy benefit types. Each payer will have its own controlled vocabulary."
* #1-month-in-retail    "1 month in network retail"  "1 Month Supply via in-network retail pharmacy."
* #1-month-out-retail   "1 month out of network retail"  "1 Month Supply via out-of-network retail pharmacy."
* #1-month-in-mail    	"1 month in network mail order"  "1 Month Supply via in-network mail order pharmacy."
* #1-month-out-mail   	"1 month out of network mail order"  "1 Month Supply via out-of-network mail order pharmacy."
* #3-month-in-retail   	"3 month in network retail"  "3 Month Supply via in-network retail pharmacy."
* #3-month-out-retail   "3 month out of network retail"  "3 Month Supply via out-of-network retail pharmacy."
* #3-month-in-mail      "3 month in network mail order"  "3 Month Supply via in-network mail order pharmacy."
* #3-month-out-mail     "3 month out of network mail order"  "3 Month Supply via out-of-network mail order pharmacy."
* ^caseSensitive = true
* ^experimental = false

CodeSystem: BenefitCostTypeCS
Id:             usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE
Title: "Codes for benefit type of cost"
Description: "Types of out of pockets costs associated with the benefit"
* #copay               "Copay"  "A flat fee the member pays to fill the prescription."
* #coinsurance         "Coinsurance"  "A percentage of the cost to fill the prescription, usually after the deductible has been met."
* ^caseSensitive = true
* ^experimental = false

CodeSystem: InsuranceItemTypeCS
Id:             usdf-InsuranceItemTypeCS
Title: "Codes for insurance item type"
Description: "Types of insurance items"
* #formulary-item      "Formulary Item"  "An entry in a formulary."
* ^caseSensitive = true
* ^experimental = false

/* 
FHIR-34758 - Merge copay and coinsurance option CS into CostShareOption CS
CodeSystem: CopayOptionCS
Id:             usdf-CopayOptionCS
Title: "Codes for qualifier of copay amount"
Description: "Codes for qualifier of copay amount"
* #after-deductible               "After Deductible"  "The consumer first pays the deductible, and after the deductible is met, the consumer is responsible only for the copay (this indicates that this benefit is subject to the deductible)."
* #before-deductible              "Before Deductible"  "The consumer first pays the copay, and any net remaining allowed charges accrue to the deductible (this indicates that this benefit is subject to the deductible)."
* #no-charge                      "No Charge"  "No cost sharing is charged (this indicates that this benefit is not subject to the deductible)."
* #no-charge-after-deductible     "No Charge After Deductible"  "The consumer first pays the deductible, and after the deductible is met, no copayment is charged (this indicates that this benefit is subject to the deductible)."
* #charge                         "Charge"  "The consumer always pays just the copay and the issuer pays the remainder of allowed charges (this indicates that this benefit is not subject to the deductible)."
* #not-applicable                 "Not Applicable"  "Deductible is not applicable: Zero-deductible cost sharing represented by a co-pay value of 'Not applicable' and co-insurance value of 'No charge'."
* #deductible-waived              "Deductible Waived"  "The consumer pays the copay with deductible requirement waived."
* ^caseSensitive = true

CodeSystem: CoInsuranceOptionCS
Id:             usdf-CoinsuranceOptionCS
Title: "Code for qualifier for coinsurance rate codes"
Description: "Code for qualifier for coinsurance rate"
* #after-deductible              "After Deductible"  "The consumer first pays the deductible, and after the deductible is met, the consumer pays the coinsurance portion of allowed charges (this indicates that this benefit is subject to the deductible)."
* #no-charge                     "No Charge"  "No cost sharing is charged (this indicates that this benefit is not subject to the deductible)."
* #no-charge-after-deductible    "No Charge After Deductible"  "The consumer first pays the deductible, and after the deductible is met, no coinsurance is charged (this indicates that this benefit is subject to the deductible)."
* #charge                        "Charge"  "The consumer always pays just the coinsurance and the issuer pays the remainder of allowed charges (this indicates that this benefit is not subject to the deductible)."
* #not-applicable                "Not Applicable"  "The consumer pays only a copay. Note: When using Not Applicable for coinsurance, Not Applicable cannot also be used for copay (unless the drug tier type is Medical Service Drugs)."
* #deductible-waived             "Deductible Waived"  "The consumer pays the coinsurance with deductible requirement waived."
* ^caseSensitive = true
*/

CodeSystem: CostShareOptionCS
Id: usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE
Title: "Codes qualifying the type of cost share amount"
Description: "Codes for qualifier of copay amount"
* #after-deductible             "After Deductible"	"The consumer first pays the deductible, and after the deductible is met, the consumer is responsible only for the cost-share amount (this indicates that this benefit is subject to the deductible)."
* #before-deductible	        "Before Deductible"  "The consumer first pays the cost share amount, and any net remaining allowed charges accrue to the deductible (this indicates that this benefit is subject to the deductible)."
* #no-charge	                "No Charge"	"No cost sharing is charged (this indicates that this benefit is not subject to the deductible)."
* #no-charge-after-deductible   "No Charge After Deductible"	"The consumer first pays the deductible, and after the deductible is met, no cost share amount is charged (this indicates that this benefit is subject to the deductible)."
* #charge	                    "Charge"	"The consumer always pays just the cost share amount and the issuer pays the remainder of allowed charges (this indicates that this benefit is not subject to the deductible)."
* #coinsurance-not-applicable	"Coinsurance Not Applicable"	"The consumer pays only a copay. Note: When using Not Applicable for coinsurance, Not Applicable cannot also be used for copay (unless the drug tier type is Medical Service Drugs)."
* #copay-not-applicable	        "Copay Not Applicable"	"Deductible is not applicable: Zero-deductible cost sharing represented by a co-pay value of 'Not applicable' and co-insurance value of 'No charge'."
* #deductible-waived	        "Deductible Waived"	"The consumer pays the cost share amount with deductible requirement waived."
* ^caseSensitive = true
* ^experimental = false

/* FHIR-35600 - Change to different CS
CodeSystem: PlanTypeCS
Id:             usdf-PlanTypeCS
Title: "Codes for type of plan"
Description: "Types of plans"
* #drug         "Drug"  "Drug plan"
* ^caseSensitive = true
*/



CodeSystem: PlanContactTypeCS
Id:             usdf-PlanContactTypeCS-TEMPORARY-TRIAL-USE
Title: "Codes for type of plan contact"
Description: "Type of plan contact"
* #MARKETING "Plan Marketing Information"
* #SUMMARY "Plan Summary Information"
* #FORMULARY "Plan Formulary Information"
* ^caseSensitive = true
* ^experimental = false

---

// File: input/fsh/Extensions.fsh



Extension: FormularyReference
Id: usdf-FormularyReference-extension
Title: "Formulary Reference"
Description: "Reference to the formulary this item belongs to."
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* ^context[+].type = #element
* ^context[=].expression = "InsurancePlan.coverage"
* value[x] 1..1
* value[x] only Reference
* valueReference only Reference(usdf-Formulary)



Extension: PriorAuthorization
Id: usdf-PriorAuthorization-extension
Title: "Prior Authorization"
Description: "A Boolean indication of whether the coverage plan imposes a prior authorization requirement on this drug."
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] only boolean
* value[x] 1..1

Extension: PriorAuthorizationNewStartsOnly
Id: usdf-PriorAuthorizationNewStartsOnly-extension
Title: "Prior Authorization New Starts Only"
Description: "A Boolean indication of whether the coverage plan imposes a prior authorization requirement on this drug for new starts only. (Only include if PriorAuthorization = true)"
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] only boolean
* value[x] 1..1

Extension: StepTherapyLimit
Id: usdf-StepTherapyLimit-extension
Title: "Step Therapy Limit"
Description: "A boolean indicating whether the coverage plan imposes a step therapy requirement on this drug meaning another drug may need to be tried beforehand."
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] only boolean
* value[x] 1..1

Extension: StepTherapyLimitNewStartsOnly
Id: usdf-StepTherapyLimitNewStartsOnly-extension
Title: "Step Therapy Limit New Starts Only"
Description: "A boolean indicating whether the coverage plan imposes a step therapy requirement on this drug meaning another drug may need to be tried beforehand for new starts only (Not required if patient has previously met step therapy requirements).  (Only include if StepTherapyLimit = true)"
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] only boolean
* value[x] 1..1

Extension: QuantityLimit
Id: usdf-QuantityLimit-extension
Title: "Quantity Limit"
Description: "A Boolean indication of whether the coverage plan imposes a quantity limit on this drug."
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] 1..1
* value[x] only boolean


Extension: QuantityLimitDetail
Id: usdf-QuantityLimitDetail-extension
Title: "Quantity Limit Detail"
Description: "A detailed definition of the quantity limits the coverage plan imposes on this drug. These limit details may include (potentially including a rolling dispense limit, maximum daily, or therapy days for a period of time. (Only include if QuantityLimit = true)"
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* extension 1..*
* extension contains
	Description 0..1 and
	Rolling 0..1 and
	MaximumDaily 0..1 and 
	DaysSupply 0..1 

* extension[Description] ^short = "A human readable description of quantity limits."
* extension[Description].value[x] 1..1
* extension[Description].value[x] only string


* extension[Rolling] ^short = "Indicator of dispense amount limit per time period."
* extension[Rolling].value[x] 1..1
* extension[Rolling].value[x] only Timing
* extension[Rolling].valueTiming.event 0..0
* extension[Rolling].valueTiming.repeat 1..1
* extension[Rolling].valueTiming.repeat.count 1..1
* extension[Rolling].valueTiming.repeat.period 1..1
* extension[Rolling].valueTiming.repeat.periodUnit = #d

* extension[MaximumDaily] ^short = "Indicator of maximum daily amount."
* extension[MaximumDaily].value[x] 1..1
* extension[MaximumDaily].value[x] only Quantity
* extension[MaximumDaily].valueQuantity.value 1..1

* extension[DaysSupply] ^short = "Indicator of number of therapy days over time period."
* extension[DaysSupply].value[x] 1..1
* extension[DaysSupply].value[x] only Timing
* extension[DaysSupply].valueTiming.event 0..0
* extension[DaysSupply].valueTiming.repeat 1..1
* extension[DaysSupply].valueTiming.repeat.bounds[x] 1..1
* extension[DaysSupply].valueTiming.repeat.bounds[x] only Duration
* extension[DaysSupply].valueTiming.repeat.boundsDuration.value 1..1
* extension[DaysSupply].valueTiming.repeat.boundsDuration.system = "http://unitsofmeasure.org"
* extension[DaysSupply].valueTiming.repeat.boundsDuration.code = #d
* extension[DaysSupply].valueTiming.repeat.count 1..1
* extension[DaysSupply].valueTiming.repeat.duration 
* extension[DaysSupply].valueTiming.repeat.durationUnit 
* extension[DaysSupply].valueTiming.repeat.period 1..1
* extension[DaysSupply].valueTiming.repeat.periodUnit = #d

// Renamed and title/description changes per FHIR-34756
Extension: PharmacyBenefitType
Id: usdf-PharmacyBenefitType-extension
Title: "Pharmacy Benefit Type"
Description: "A CodeableConcept indicating the pharmacy benefit type the formulary drug is available through the associated plan.  This pharmacy benefit type is specific to the FormularyDrug and indicates which of the pharmacy benefit type from the plan applies to the particular formulary drug."
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept from PharmacyBenefitTypeVS (extensible)

Extension: DrugTierID
Id: usdf-DrugTierID-extension
Title: "Drug Tier ID"
Description: "A code that describes the coverage status of a drug in a health plan (e.g., preferred generic, specialty, etc.)"
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept from DrugTierVS (extensible)


Extension: AvailabilityStatus
Id: usdf-AvailabilityStatus-extension
Title: "Availability Status"
Description: "A boolean indicating whether the formulary item is currently available under the formulary. Drugs may appear on a formulary, but not considered \"active\" for the current year. Drugs may also be removed during the course of a plan year."
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] 1..1 MS
* value[x] only code
* valueCode from publication-status (required)

Extension: AvailabilityPeriod
Id: usdf-AvailabilityPeriod-extension
Title: "Availability Period"
Description: "The period for which this item is available on the formulary. Drugs may appear on a formulary, but not considered \"active\" for the current year."
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] 1..1 MS
* value[x] only Period


Extension: AdditionalCoverageInformation
Id: usdf-AdditionalCoverageInformation-extension
Title: "Additional Coverage Information"
Description: "Additional drug coverage information that may include conditional coverage requirements such as a diagnosis pre-requisite, additional drug specific cost sharing information, or other coverage details not otherwise indicated."
* ^context[+].type = #element
* ^context[=].expression = "Basic"
* value[x] 1..1 MS
* value[x] only markdown



---

// File: input/fsh/Formulary.fsh

Profile:        PayerInsurancePlan
Parent:         InsurancePlan
Id:             usdf-PayerInsurancePlan
Title:          "Payer Insurance Plan"
Description:    "The Payer InsurancePlan that defines the health insurance product, which include coverage benefits that are offered, and additional information about the offering, such as a coverage area, contact information, brochure locations, etc. The health insurance product offers one or more types of coverage, each of which may define a plan of covered benefits with the particular cost sharing structure offered to a consumer. Health insurance plans that include drug coverage reference a formulary that provides details about drugs that are covered under the plan including requirements and limitations of the coverage specific to each drug."
* meta.lastUpdated 1..1 MS // Add MS FHIR-34527
* identifier 1..* MS
* identifier ^short = "The business identifier for the plan. The same InsurancePlan may be present in multiple directories and if they have the same identifier they are assumed to be the same plan."
* status 1..1 MS
* type 1..1 MS 
* type from $PlanNetInsuranceProductTypeVS (extensible)
* type ^short = "Product type"
* name MS
* period MS
* coverageArea only Reference(InsurancePlanLocation)
* coverageArea MS
* contact ^short = "Contact information for the Insurance Plan including URLs for brochure and formulary information"
* contact.name MS
* contact.name.text MS
* contact.telecom MS
* contact.telecom.value MS
* contact.telecom.system MS
* contact.purpose from PlanContactTypeVS (extensible)
* coverage 1..* MS
* coverage.type 1..1 MS
* coverage ^slicing.discriminator.path = "type"
* coverage ^slicing.rules = #open
* coverage ^slicing.discriminator.type = #pattern 
* coverage ^slicing.ordered = false   // can be omitted, since false is the default
* coverage ^slicing.description = "Slice based on $this pattern"
* coverage contains
    drug-coverage 1..* MS
* coverage[drug-coverage].type = http://terminology.hl7.org/CodeSystem/v3-ActCode#DRUGPOL
* coverage[drug-coverage].extension 1..* MS
* coverage[drug-coverage].extension contains
    FormularyReference named usdf-FormularyReference-extension 1..* MS
* coverage[drug-coverage].benefit.type from $HL7InsurancePlanTypeVS (extensible)
* coverage[drug-coverage].benefit ^slicing.discriminator.path = "type"
* coverage[drug-coverage].benefit ^slicing.rules = #open
* coverage[drug-coverage].benefit ^slicing.discriminator.type = #pattern 
* coverage[drug-coverage].benefit ^slicing.ordered = false   // can be omitted, since false is the default
* coverage[drug-coverage].benefit ^slicing.description = "Slice based on $this pattern"

* coverage[drug-coverage].benefit contains
    drug-plan 1..* MS

* coverage[drug-coverage].benefit[drug-plan].type = $HL7InsurancePlanTypeCS#drug "Drug"


* plan 1..* MS
* plan.type from $HL7InsurancePlanTypeVS (extensible)

* plan ^slicing.discriminator.path = "type"
* plan ^slicing.rules = #open
* plan ^slicing.discriminator.type = #pattern 
* plan ^slicing.ordered = false   // can be omitted, since false is the default
* plan ^slicing.description = "Slice based on $this pattern"
* plan contains 
   drug-plan 1..* MS


* plan[drug-plan] ^short = "Drug plan"

* plan[drug-plan].identifier 0..* MS
* plan[drug-plan].type = $HL7InsurancePlanTypeCS#drug "Drug"
* plan[drug-plan].network ^short = "Pharmacy benefit types that are part of the drug plan"

* plan[drug-plan].specificCost 1..* MS
* plan[drug-plan].specificCost ^short = "Pharmacy benefit type specific cost"
* plan[drug-plan].specificCost.category 1..1 MS
* plan[drug-plan].specificCost.category from PharmacyBenefitTypeVS (extensible)
* plan[drug-plan].specificCost.category ^short = "Pharmacy Benefit Type"


* plan[drug-plan].specificCost.benefit 1..* MS

* plan[drug-plan].specificCost.benefit ^short = "Drug tier benefit"
* plan[drug-plan].specificCost.benefit.type 1..1 MS
* plan[drug-plan].specificCost.benefit.type from DrugTierVS (extensible)


* plan[drug-plan].specificCost.benefit.cost 1..* MS
* plan[drug-plan].specificCost.benefit.cost.type from BenefitCostTypeVS (extensible)
* plan[drug-plan].specificCost.benefit.cost.qualifiers 1..1 MS
* plan[drug-plan].specificCost.benefit.cost.value MS

* plan[drug-plan].specificCost.benefit.cost ^slicing.discriminator.path = "type"
* plan[drug-plan].specificCost.benefit.cost ^slicing.rules = #open
* plan[drug-plan].specificCost.benefit.cost ^slicing.discriminator.type = #pattern 
* plan[drug-plan].specificCost.benefit.cost ^slicing.ordered = false
* plan[drug-plan].specificCost.benefit.cost ^slicing.description = "Slice based on $this pattern"
* plan[drug-plan].specificCost.benefit.cost contains 
   copay 0..1 MS and
   coinsurance 0..1 MS

* plan[drug-plan].specificCost.benefit.cost[copay].type = BenefitCostTypeCS#copay
* plan[drug-plan].specificCost.benefit.cost[copay].qualifiers from CopayOptionVS (required)
* plan[drug-plan].specificCost.benefit.cost[copay].value 1..1 MS
* plan[drug-plan].specificCost.benefit.cost[copay].value only MoneyQuantity
* plan[drug-plan].specificCost.benefit.cost[copay].value.value 1..1 MS
* plan[drug-plan].specificCost.benefit.cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost.benefit.cost[copay].value.code = #USD

* plan[drug-plan].specificCost.benefit.cost[copay] ^short = "Copay costs"

* plan[drug-plan].specificCost.benefit.cost[coinsurance].type = BenefitCostTypeCS#coinsurance
* plan[drug-plan].specificCost.benefit.cost[coinsurance].qualifiers from CoinsuranceOptionVS (required)
* plan[drug-plan].specificCost.benefit.cost[coinsurance].value 1..1 MS
* plan[drug-plan].specificCost.benefit.cost[coinsurance].value.value 1..1 MS
* plan[drug-plan].specificCost.benefit.cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost.benefit.cost[coinsurance].value.system = "http://unitsofmeasure.org"

* plan[drug-plan].specificCost.benefit.cost[coinsurance] ^short = "Coinsurance costs"


Profile:        Formulary
Parent:         InsurancePlan
Id:             usdf-Formulary
Title:          "Formulary"
Description:    "The Formulary provides general information about a formulary and acts as an organizing construct that associated FormularyItem resources point to. The Formulary combined with its associated FormularyItem and FormularyDrug resources represent a formulary list that includes the set of drugs covered and the requirements and limitations of the coverage."

* meta.lastUpdated 1..1 MS // Add MS FHIR-34527
* identifier 1..* MS
* status 1..1 MS

* type 1..1 MS 
* type = $HL7v3-ActCode#DRUGPOL
* type ^short = "Plan type"

* name MS
* period MS

* plan 0..1 
* plan ^short = "Optional non-cost related plan information indicating pharmacy benefit types and drug tiers available in the formulary"
* plan.type 1..1 
* plan.type = $HL7InsurancePlanTypeCS#drug "Drug"

* plan.specificCost ^short = "Pharmacy benefit type specific cost"
* plan.specificCost.category from PharmacyBenefitTypeVS (extensible)

* plan.specificCost.benefit ^short = "Drug tier benefit"
* plan.specificCost.benefit.type from DrugTierVS (extensible)



Profile:        FormularyItem
Parent:         Basic
Id:             usdf-FormularyItem
Title:          "Formulary Item"
Description:    "A resource that describes a drug's relationship to a drug plan, including drug tier, prior authorization requirements, and more. The set of FormularyItem resources associated with a particular drug plan represents the drug plans formulary."

* meta.lastUpdated 1..1 MS // Add MS FHIR-34527

* extension contains
    FormularyReference named usdf-FormularyReference-extension 1..1 MS and
    AvailabilityStatus named usdf-AvailabilityStatus-extension 1..1 MS and
    AvailabilityPeriod named usdf-AvailabilityPeriod-extension 0..1 MS and
    PharmacyBenefitType named usdf-PharmacyBenefitType-extension 1..* MS and // Add MS FHIR-34527, make 1..* FHIR-36142	
    DrugTierID named usdf-DrugTierID-extension 1..1 MS and
    PriorAuthorization named usdf-PriorAuthorization-extension 0..1 MS and
    PriorAuthorizationNewStartsOnly named usdf-PriorAuthorizationNewStartsOnly-extension 0..1 and // Remove MS FHIR-34527
    StepTherapyLimit named usdf-StepTherapyLimit-extension 0..1 MS and
    StepTherapyLimitNewStartsOnly named usdf-StepTherapyLimitNewStartsOnly-extension 0..1 and // Remove MS FHIR-34527
    QuantityLimit named usdf-QuantityLimit-extension 0..1 MS and 
    QuantityLimitDetail named usdf-QuantityLimitDetail-extension 0..1 and // Remove MS FHIR-34527
    AdditionalCoverageInformation named usdf-AdditionalCoverageInformation-extension 0..1

* code 1..1
* code = InsuranceItemTypeCS#formulary-item
* subject 1..1 MS
* subject only Reference(FormularyDrug)



Profile:        FormularyDrug
Parent:         MedicationKnowledge
Id:             usdf-FormularyDrug
Title:          "Formulary Drug"
Description:    "Drug information which may be part of a formulary including its RxNorm code and dose form."

* meta.lastUpdated 1..1 MS // Add MS FHIR-34527

* obeys scd-sbd-requires-scdg-sbdg
* code 1..1 MS
//* code from SemanticDrugVS (required)

* code.coding 1..* MS


* code.coding ^slicing.discriminator.path = "$this"
* code.coding ^slicing.rules = #open
* code.coding ^slicing.discriminator.type = #value
* code.coding ^slicing.ordered = false
* code.coding ^slicing.description = "Slice based on code value"
* code.coding contains 
   semantic-drug 1..* MS and
   semantic-drug-form-group 0..* MS

* code.coding[semantic-drug] ^short = "Semantic clinical or brand drug or pack including strength"
* code.coding[semantic-drug].code 1..1 MS
* code.coding[semantic-drug].system 1..1 MS
* code.coding[semantic-drug] from SemanticDrugVS (required)
//* code.coding[semantic-drug].system = $RxNorm

* code.coding[semantic-drug-form-group] ^short = "Semantic clinical or brand drug without strength"
* code.coding[semantic-drug-form-group].code 1..1 MS
* code.coding[semantic-drug-form-group].system 1..1 MS
* code.coding[semantic-drug-form-group] from SemanticDrugFormGroupVS (required)
//* code.coding[semantic-drug-form-group].system = $RxNorm


* status 1..1 MS
* doseForm MS



Profile:        InsurancePlanLocation
Parent:         USCoreLocationProfile
Id:             usdf-InsurancePlanLocation
Title:          "Insurance Plan Location"
Description:    "A Location describing a geographic region or are where the insurance plan coverage is available."

* meta.lastUpdated 1..1
* obeys Location-address-or-geolocation
* extension contains
    $GeoJSONExtension named region 0..1 MS
* extension[region] ^short = "Associated Region (GeoJSON) [MustSupport for this element is optional if there is support for address]" // Add conditional MS FHIR-34527
* name  // Remove MS FHIR-34527
* description  // Add MS FHIR-34527
* address MS 
* address ^short = "Physical location [MustSupport for this element is optional if there is support for Extension:location-boundary-geojson]" // Add conditional MS FHIR-34527




Profile:        PayerInsurancePlanBulkDataGraphDefinition
Parent:         GraphDefinition
Id:             usdf-PayerInsurancePlanBulkDataGraphDefinition
Title:          "Payer Insurance Plan Bulk Data Graph Definition"
Description:    "A GraphDefinition defining a graph of resources to return in a query for a Formulary related Payer Insurance Plan Bulk Data request."


* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #draft
* ^status = #draft

* name = "PayerInsurancePlanGraphDefinition"
* status = #active
* start = #InsurancePlan
* profile = Canonical(PayerInsurancePlan)


* link ^slicing.discriminator.path = "path"
* link ^slicing.rules = #open
* link ^slicing.discriminator.type = #pattern 
* link ^slicing.ordered = false   // can be omitted, since false is the default
* link ^slicing.description = "Slice based on path pattern"

* link contains
    location 0..* and
    formulary 0..*



* link[location].path = "InsurancePlan.coverageArea"
* link[location].target.type = #Location
* link[location].target.profile = Canonical(InsurancePlanLocation)


* link[formulary].path = "InsurancePlan.coverage.extension.where(url=http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-FormularyReference-extension).valueReference"
* link[formulary].target.type = #InsurancePlan
* link[formulary].target.profile = Canonical(Formulary)

* link[formulary].target.link.target.type = #Basic
* link[formulary].target.link.target.profile = Canonical(FormularyItem)
* link[formulary].target.link.target.params = "formulary={ref}"

* link[formulary].target.link.target.link.path = "Basic.subject"
* link[formulary].target.link.target.link.target.type = #MedicationKnowledge
* link[formulary].target.link.target.link.target.profile = Canonical(FormularyDrug)



Profile:        FormularyBulkDataGraphDefinition
Parent:         GraphDefinition
Id:             usdf-FormularyBulkDataGraphDefinition
Title:          "Formulary Bulk Data Graph Definition"
Description:    "A GraphDefinition defining a graph of resources to return in a query for a Formulary related Bulk Data request."

* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #draft
* ^status = #draft

* name = "FormularyGraphDefinition"
* status = #active
* start = #InsurancePlan
* profile = Canonical(Formulary)

* link.target.type = #Basic
* link.target.profile = Canonical(FormularyItem)
* link.target.params = "formulary={ref}"

* link.target.link.path = "Basic.subject"
* link.target.link.target.type = #MedicationKnowledge
* link.target.link.target.profile = Canonical(FormularyDrug)

Invariant: Location-address-or-geolocation
Description: "Location contains an address, geolocation, or both"
Expression: "address.exists() or extension.where(url='http://hl7.org/fhir/StructureDefinition/location-boundary-geojson').exists()"
Severity: #error

Invariant: scd-sbd-requires-scdg-sbdg
Description: "All drugs with RxNorm Term Type of Semantic Clinical Drug (SCD) or Semantic Branded Drug (SBD) SHALL have a coding repetition and RxNorm Term Type of Semantic Clinical Drug Group (SCDG) or Semantic Branded Drug Group (SBDG) respectively"
Expression: "code.where(coding[0].memberOf('http://hl7.org/fhir/us/davinci-drug-formulary/ValueSet/NonPackSemanticDrugVS')).exists() implies code.where(coding[1].memberOf('http://hl7.org/fhir/us/davinci-drug-formulary/ValueSet/SemanticDrugFormGroupVS')).exists()"
Severity: #error

Profile:        InsurancePlanCoverage
Parent:         USCoreCoverageProfile
Id:             usdf-InsurancePlanCoverage
Title:          "Insurance Plan Coverage"
Description:    "Coverage for an insurance plan"

* extension contains
    http://hl7.org/fhir/5.0/StructureDefinition/extension-Coverage.insurancePlan named insurancePlan 0..1 MS
* extension[insurancePlan] ^short = "Insurance plan details, pre-adopted from FHIR R5"
* class[plan].extension contains
    http://hl7.org/fhir/5.0/StructureDefinition/extension-Coverage.class.value named valueIdentifier 0..1 MS
* class[plan].extension[valueIdentifier] ^short = "Value associated with the type, pre-adopted from FHIR R5 since it is just a string in R4"



---

// File: input/fsh/SearchParameters.fsh

Instance: InsurancePlan-lastupdated
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #_lastUpdated
* name = "USDFInsurancePlanLastUpdated"
* description = "Accesses the last updated date of an InsurancePlan"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/InsurancePlan-lastupdated"
* base[0] = #InsurancePlan

* type = #date

* expression = "InsurancePlan.meta.lastUpdated"

* multipleOr = true
* multipleAnd = true


Instance: InsurancePlan-identifier
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #identifier
* name = "USDFInsurancePlanLastUpdated"
* description = "Accesses the business identifier of an InsurancePlan"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/InsurancePlan-identifier"
* base[0] = #InsurancePlan

* type = #token

* expression = "InsurancePlan.identifier"

* multipleOr = true
* multipleAnd = true


Instance: InsurancePlan-status
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #status
* name = "USDFInsurancePlanStatus"
* description = "Accesses the status of an InsurancePlan"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/InsurancePlan-status"
* base[0] = #InsurancePlan

* type = #token

* expression = "InsurancePlan.status"

* multipleOr = true
* multipleAnd = true



Instance: InsurancePlan-period
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #period
* name = "USDFInsurancePlanPeriod"
* description = "Accesses the active period of an InsurancePlan"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/InsurancePlan-period"
* base[0] = #InsurancePlan

* type = #date

* expression = "InsurancePlan.period"

* comparator[+] = #eq
* comparator[+] = #lt
* comparator[+] = #le
* comparator[+] = #gt
* comparator[+] = #ge
* comparator[+] = #sa
* comparator[+] = #eb
* multipleOr = true
* multipleAnd = true


Instance: InsurancePlan-type
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #type
* name = "USDFInsurancePlanType"
* description = "Accesses the Type of an InsurancePlan"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/InsurancePlan-type"
* base[0] = #InsurancePlan

* type = #token

* expression = "InsurancePlan.type"

* multipleOr = true
* multipleAnd = true


Instance: InsurancePlan-name
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #name
* name = "USDFInsurancePlanName"
* description = "Accesses the name of an InsurancePlan"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/InsurancePlan-name"
* base[0] = #InsurancePlan

* type = #string

* expression = "InsurancePlan.name"

* modifier[+] = #contains
* multipleOr = true
* multipleAnd = true


Instance: InsurancePlan-coverage-type
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #coverage-type
* name = "USDFInsurancePlanCoverageType"
* description = "Accesses the coverage type of an InsurancePlan"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/InsurancePlan-coverage-type"
* base[0] = #InsurancePlan

* type = #token

* expression = "InsurancePlan.coverage.type"

* multipleOr = true
* multipleAnd = true


Instance: InsurancePlan-formulary-coverage
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #formulary-coverage
* name = "USDFInsurancePlanFormularyCoverage"
* description = "Accesses the Coverage Formulary Reference of an InsurancePlan"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/InsurancePlan-formulary-coverage"
* base[0] = #InsurancePlan

* type = #reference

* expression = "InsurancePlan.coverage.extension.where(url='http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-FormularyReference-extension').value"
* target[+] = #InsurancePlan

* multipleOr = true
* multipleAnd = true



Instance: InsurancePlan-coverage-area
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #coverage-area
* name = "USDFInsurancePlanCoverageArea"
* description = "Search InsurancePlan by coverage location."
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/InsurancePlan-coverage-area"
* base[0] = #InsurancePlan

* type = #reference

* expression = "InsurancePlan.coverageArea"
* target[+] = #Location

* multipleOr = true
* multipleAnd = true




Instance: Basic-lastupdated
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #_lastUpdated
* name = "USDFBasicLastUpdated"
* description = "Accesses the last updated date of a FormularyItem"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/Basic-lastupdated"
* base[0] = #Basic

* type = #date

* expression = "Basic.meta.lastUpdated"

* multipleOr = true
* multipleAnd = true



Instance: Basic-code
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #code
* name = "USDFBasicCode"
* description = "Accesses the Code of a Basis resource to find a FormularyItem"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/Basic-code"
* base[0] = #Basic

* type = #token

* expression = "Basic.code"

* multipleOr = true
* multipleAnd = true


Instance: Basic-subject
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #subject
* name = "USDFBasicSubject"
* description = "Accesses the subject FormularyDrug (MedicationKnowledge) reference of a FormularyItem"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/Basic-subject"
* base[0] = #Basic

* type = #reference

* expression = "Basic.subject"

* multipleOr = true
* multipleAnd = true


Instance: Basic-status
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #status
* name = "USDFBasicStatus"
* description = "Accesses the status of a FormularyItem"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/Basic-status"
* base[0] = #Basic

* type = #token

* expression = "Basic.extension.where(url='http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-AvailabilityStatus-extension').value"

* multipleOr = true
* multipleAnd = true






Instance: Basic-period
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #period
* name = "USDFBasicPeriod"
* description = "Accesses the active period of a FormularyItem"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/Basic-period"
* base[0] = #Basic

* type = #date

* expression = "Basic.extension.where(url='http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-AvailabilityPeriod-extension').value"

* comparator[+] = #eq
* comparator[+] = #lt
* comparator[+] = #le
* comparator[+] = #gt
* comparator[+] = #ge
* comparator[+] = #sa
* comparator[+] = #eb
* multipleOr = true
* multipleAnd = true



Instance: Basic-formulary
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #formulary
* name = "USDFBasicFormulary"
* description = "Accesses the formulary reference of a FormularyItem"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/Basic-formulary"
* base[0] = #Basic

* type = #reference

* expression = "Basic.extension.where(url='http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-FormularyReference-extension').value"
* target[+] = #InsurancePlan

* multipleOr = true
* multipleAnd = true



// Renamed and title/description changes per FHIR-34756
Instance: Basic-pharmacy-benefit-type
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #pharmacy-benefit-type
* name = "USDFBasicPharmacyBenefitType"
* description = "Accesses the Pharmacy Benefit Type of a FormularyItem"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/Basic-pharmacy-benefit-type"
* base[0] = #Basic

* type = #token

* expression = "Basic.extension.where(url='http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-PharmacyBenefitType-extension').value"

* multipleOr = true
* multipleAnd = true



Instance: Basic-drug-tier
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #drug-tier
* name = "USDFBasicDrugTier"
* description = "Accesses the Drug Tier of a FormularyItem"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/Basic-drug-tier"
* base[0] = #Basic

* type = #token

* expression = "Basic.extension.where(url='http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-DrugTierID-extension').value"

* multipleOr = true
* multipleAnd = true






Instance: MedicationKnowledge-lastupdated
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #_lastUpdated
* name = "USDFMedicationKnowledgeLastUpdated"
* description = "Accesses the last updated date of a FormularyItem"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/MedicationKnowledge-lastupdated"
* base[0] = #MedicationKnowledge

* type = #date

* expression = "MedicationKnowledge.meta.lastUpdated"

* multipleOr = true
* multipleAnd = true


Instance: MedicationKnowledge-status
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #status
* name = "USDFMedicationKnowledgeStatus"
* description = "Accesses the status of a FormularyDrug"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/MedicationKnowledge-status"
* base[0] = #MedicationKnowledge

* type = #token

* expression = "MedicationKnowledge.status"

* multipleOr = true
* multipleAnd = true


Instance: MedicationKnowledge-code
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #code
* name = "USDFMedicationKnowledgeCode"
* description = "Accesses the status of a FormularyDrug"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/MedicationKnowledge-code"
* base[0] = #MedicationKnowledge

* type = #token

* expression = "MedicationKnowledge.code"

* multipleOr = true
* multipleAnd = true



Instance: MedicationKnowledge-drug-name
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #drug-name
* name = "USDFMedicationKnowledgeDrugName"
* description = "Accesses the Drug Name of a FormularyDrug"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/MedicationKnowledge-drug-name"
* base[0] = #MedicationKnowledge

* type = #string

* expression = "MedicationKnowledge.code.coding.display | synonym"


* multipleOr = true
* multipleAnd = true

* modifier[+] = #missing
* modifier[+] = #exact
* modifier[+] = #contains



Instance: MedicationKnowledge-doseform
InstanceOf: SearchParameter
Usage: #definition

* status = #active
* code = #doseform
* name = "USDFMedicationKnowledgeCode"
* description = "Accesses the dose form of a FormularyDrug"
* url = "http://hl7.org/fhir/us/davinci-drug-formulary/SearchParameter/MedicationKnowledge-doseform"
* base[0] = #MedicationKnowledge

* type = #token

* expression = "MedicationKnowledge.doseForm"

* multipleOr = true
* multipleAnd = true

---

// File: input/fsh/ValueSets.fsh

ValueSet: DrugTierVS
Title: "Drug tier of medication in health plan"
Description: "The drug tier of a particular medication in a health plan. The base set are examples. Each plan may have its own controlled vocabulary."
* codes from system DrugTierCS
* ^experimental = false

// Renamed and title/description changes per FHIR-34756
ValueSet: PharmacyBenefitTypeVS
Title: "Pharmacy benefit types"
Description: "Pharmacy benefit types. Each payer will have its own controlled vocabulary."
* codes from system PharmacyBenefitTypeCS
* ^experimental = false

ValueSet: BenefitCostTypeVS
Title: "Benefit type of cost"
Description: "Benefit type of cost"
* codes from system BenefitCostTypeCS
* ^experimental = false

ValueSet: InsuranceItemTypeVS
Title: "Insurance item type"
Description: "Types of insurance items"
* codes from system InsuranceItemTypeCS
* ^experimental = false

ValueSet: CopayOptionVS
Title: "Qualifier of copay amount"
Description: "Qualifier of copay amount"
* include CostShareOptionCS#after-deductible          
* include CostShareOptionCS#before-deductible
* include CostShareOptionCS#no-charge
* include CostShareOptionCS#no-charge-after-deductible
* include CostShareOptionCS#charge
* include CostShareOptionCS#copay-not-applicable
* include CostShareOptionCS#deductible-waived
* ^experimental = false


ValueSet: CoinsuranceOptionVS
Title: "Qualifier for coinsurance rate"
Description: "Qualifier for coinsurance rate"
* include CostShareOptionCS#after-deductible          
* include CostShareOptionCS#no-charge
* include CostShareOptionCS#no-charge-after-deductible
* include CostShareOptionCS#charge
* include CostShareOptionCS#coinsurance-not-applicable
* include CostShareOptionCS#deductible-waived
* ^experimental = false

/* FHIR-35590 - Change to different VS
ValueSet: PlanTypeVS
Title: "Type of plan"
Description: "Types of plans"
* codes from system PlanTypeCS
*/

ValueSet: PlanContactTypeVS
Title: "Type of plan contact"
Description: "Type of plan contact"
* codes from system $HL7ContactEntity-Type
* codes from system PlanContactTypeCS
* ^experimental = false

ValueSet: NonPackSemanticDrugVS
Title: "Semantic Drug Codes"
Description: "Semantic Drug codes with Term Types (TTY) of Semantic Clinical Drug (SCD)"
* codes from system $RxNorm where TTY = #SBD
* codes from system $RxNorm where TTY = #SCD
* ^experimental = false

ValueSet: SemanticDrugVS
Title: "Semantic Drug Codes"
Description: "Semantic Drug codes with Term Types (TTY) of Semantic Clinical Drug (SCD), Semantic Branded Drug (SBD), Generic Pack (GPCK), or Branded Pack (BPCK)"
* include codes from valueset NonPackSemanticDrugVS
// * codes from system $RxNorm where TTY = #SBD
// * codes from system $RxNorm where TTY = #SCD
* codes from system $RxNorm where TTY = #GPCK
* codes from system $RxNorm where TTY = #BPCK
// * codes from system $HL7-USCore-MedicationCodes where TTY = "SBD"
* ^experimental = false

ValueSet: SemanticDrugFormGroupVS
Title: "Semantic Drug Form Group Codes"
Description: "Semantic Drug Form Group codes with Term Types (TTY) of Semantic Clinical Drug Form (SCDG) and Semantic Branded Drug Form Group (SBDG)"
* codes from system $RxNorm where TTY = #SCDG
* codes from system $RxNorm where TTY = #SBDG
* ^experimental = false

---

// File: input/fsh/Examples1002.fsh

// --------------------- Insurance Plan 1002 --------------------- 

Instance: PayerInsurancePlanA1002
InstanceOf: PayerInsurancePlan
Description: "Payer Insurance Plan A1002"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"
* meta.profile = Canonical(PayerInsurancePlan) 

* identifier.value = "A1002"
* status = #active

* type = $PlanNetInsuranceProductTypeCS#mediadv

* name = "Sample Medicare Advantage Plan A1002"

* period.start = "2021-01-01"
* period.end = "2021-12-31"

* coverageArea = Reference(StateOfCTLocation)

* contact[+].purpose = $HL7ContactEntity-Type#PATINF
* contact[=].telecom.system = #phone
* contact[=].telecom.value = "+1 (888) 555-1002"

* contact[+].purpose = PlanContactTypeCS#MARKETING
* contact[=].name.text = "Sample Medicare Advantage Plan Marketing Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"


* contact[+].purpose = PlanContactTypeCS#SUMMARY
* contact[=].name.text = "Sample Medicare Advantage Drug Plan Benefit Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"


* contact[+].purpose = PlanContactTypeCS#FORMULARY
* contact[=].name.text = "Sample Medicare Advantage Drug Plan Formulary Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"


* coverage[drug-coverage].extension[FormularyReference].valueReference = Reference(FormularyD1002)



* plan[drug-plan].type = $HL7InsurancePlanTypeCS#drug "Drug"

* plan[drug-plan].specificCost[0].category = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"



* plan[drug-plan].specificCost[0].benefit[0].type = DrugTierCS#brand "Brand"


* plan[drug-plan].specificCost[0].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[0].benefit[0].cost[copay].value.value = 20
* plan[drug-plan].specificCost[0].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[0].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[0].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[0].benefit[0].cost[copay].qualifiers = CostShareOptionCS#after-deductible "After Deductible"

* plan[drug-plan].specificCost[0].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[0].benefit[0].cost[coinsurance].value.value = 20
* plan[drug-plan].specificCost[0].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[0].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[0].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


Instance: FormularyD1002
InstanceOf: Formulary
Description: "Formulary D1002"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"
* meta.profile = Canonical(Formulary) 

* identifier.value = "D1002"
* status = #active

* type = $HL7v3-ActCode#DRUGPOL

* name = "Sample Medicare Advantage Part D Formulary D1002"

* period.start = "2021-01-01"
* period.end = "2021-12-31"








// --------------------- FormularyItems --------------------- 



Instance: FormularyItem-D1002-1000091
InstanceOf: FormularyItem
Description: "Formulary Item for Formulary D1002 Drug 1000091"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* extension[usdf-FormularyReference-extension].valueReference = Reference(FormularyD1002)
* extension[usdf-AvailabilityStatus-extension].valueCode = #active
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.start = "2021-01-01"
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.end = "2021-12-31"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#1-month-in-mail "1 month in network mail order"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-in-retail "3 month in network retail"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-in-mail "3 month in network mail order"
* extension[usdf-DrugTierID-extension].valueCodeableConcept = DrugTierCS#generic "Generic"
* extension[usdf-PriorAuthorization-extension].valueBoolean = false
* extension[usdf-StepTherapyLimit-extension].valueBoolean = true
* extension[usdf-StepTherapyLimitNewStartsOnly-extension].valueBoolean = true
* extension[usdf-QuantityLimit-extension].valueBoolean = true

* code = InsuranceItemTypeCS#formulary-item "Formulary Item"
* subject = Reference(FormularyDrug-1000091)


Instance: FormularyItem-D1002-1049640
InstanceOf: FormularyItem
Description: "Formulary Item for Formulary D1002 Drug 1049640"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* extension[usdf-FormularyReference-extension].valueReference = Reference(FormularyD1002)
* extension[usdf-AvailabilityStatus-extension].valueCode = #active
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.start = "2021-01-01"
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.end = "2021-12-31"
* extension[usdf-PharmacyBenefitType-extension].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"
* extension[usdf-DrugTierID-extension].valueCodeableConcept = DrugTierCS#brand "Brand"
* extension[usdf-PriorAuthorization-extension].valueBoolean = true
* extension[usdf-PriorAuthorizationNewStartsOnly-extension].valueBoolean = true
* extension[usdf-StepTherapyLimit-extension].valueBoolean = true
* extension[usdf-StepTherapyLimitNewStartsOnly-extension].valueBoolean = false
* extension[usdf-QuantityLimit-extension].valueBoolean = true
// Max daily - 2, Rolling 30 day - 60, Days supply - 180 cumulative days' supply per 365 days 
// TODO Change or add quantitytieming for drug RxNorm code 993953 ?
* extension[usdf-QuantityLimit-extension].valueBoolean = true
* extension[usdf-QuantityLimitDetail-extension].extension[Rolling].valueTiming.repeat.count = 60
* extension[usdf-QuantityLimitDetail-extension].extension[Rolling].valueTiming.repeat.period = 30
* extension[usdf-QuantityLimitDetail-extension].extension[Rolling].valueTiming.repeat.periodUnit = #d
* extension[usdf-QuantityLimitDetail-extension].extension[MaximumDaily].valueQuantity.value = 2
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.boundsDuration.value = 365
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.boundsDuration.system = "http://unitsofmeasure.org"
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.boundsDuration.code = #d
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.count = 1
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.period = 180
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.periodUnit = #d

* extension[usdf-AdditionalCoverageInformation-extension].valueMarkdown = "Prior Authorization required only with a newly started medication
Step Therapy required."

* code = InsuranceItemTypeCS#formulary-item "Formulary Item"
* subject = Reference(FormularyDrug-1049640)


/*

Instance: FormularyItem-QuantityTimingTest
InstanceOf: FormularyItem
Description: "Formulary Item for Formulary D1002 Drug QuantityTiming"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* extension[usdf-FormularyReference-extension].valueReference = Reference(FormularyD1002)
* extension[usdf-AvailabilityStatus-extension].valueCode = #active
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.start = "2021-01-01"
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.end = "2021-12-31"
* extension[usdf-PharmacyBenefitType-extension].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"
* extension[usdf-DrugTierID-extension].valueCodeableConcept = DrugTierCS#brand "Brand"
* extension[usdf-PriorAuthorization-extension].valueBoolean = true
* extension[usdf-PriorAuthorizationNewStartsOnly-extension].valueBoolean = true
* extension[usdf-StepTherapyLimit-extension].valueBoolean = true
* extension[usdf-StepTherapyLimitNewStartsOnly-extension].valueBoolean = false
* extension[usdf-QuantityLimit-extension].valueBoolean = true
* extension[usdf-QuantityLimitDetail-extension].extension[Rolling].valueTiming.repeat.count = 480
* extension[usdf-QuantityLimitDetail-extension].extension[Rolling].valueTiming.repeat.period = 30
* extension[usdf-QuantityLimitDetail-extension].extension[Rolling].valueTiming.repeat.periodUnit = #d
* extension[usdf-QuantityLimitDetail-extension].extension[MaximumDaily].valueQuantity.value = 16
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.boundsDuration.value = 365
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.boundsDuration.system = "http://unitsofmeasure.org"
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.boundsDuration.code = #d
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.count = 2
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.period = 14
* extension[usdf-QuantityLimitDetail-extension].extension[DaysSupply].valueTiming.repeat.periodUnit = #d

* code = InsuranceItemTypeCS#formulary-item "Formulary Item"
* subject = Reference(FormularyDrug-1049640)

*/

Instance: FormularyItem-D1002-209459
InstanceOf: FormularyItem
Description: "Formulary Item for Formulary D1002 Drug 209459"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* extension[usdf-FormularyReference-extension].valueReference = Reference(FormularyD1002)
* extension[usdf-AvailabilityStatus-extension].valueCode = #active
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.start = "2021-01-01"
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.end = "2021-12-31"
* extension[usdf-PharmacyBenefitType-extension].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"
* extension[usdf-DrugTierID-extension].valueCodeableConcept = DrugTierCS#brand "Brand"
* extension[usdf-PriorAuthorization-extension].valueBoolean = true
* extension[usdf-StepTherapyLimit-extension].valueBoolean = false
* extension[usdf-QuantityLimit-extension].valueBoolean = false
* code = InsuranceItemTypeCS#formulary-item "Formulary Item"
* subject = Reference(FormularyDrug-209459)

Instance: FormularyItem-D1002-284520
InstanceOf: FormularyItem
Description: "Formulary Item for Formulary D1002 Drug 284520"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* extension[usdf-FormularyReference-extension].valueReference = Reference(FormularyD1002)
* extension[usdf-AvailabilityStatus-extension].valueCode = #active
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.start = "2021-01-01"
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.end = "2021-12-31"
* extension[usdf-PharmacyBenefitType-extension].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"
* extension[usdf-DrugTierID-extension].valueCodeableConcept = DrugTierCS#brand "Brand"
* extension[usdf-PriorAuthorization-extension].valueBoolean = false
* extension[usdf-StepTherapyLimit-extension].valueBoolean = false
* extension[usdf-QuantityLimit-extension].valueBoolean = false

* code = InsuranceItemTypeCS#formulary-item "Formulary Item"
* subject = Reference(FormularyDrug-284520)




---

// File: input/fsh/Examples3001.fsh


Instance: PayerInsurancePlanA3001
InstanceOf: PayerInsurancePlan
Description: "Payer Insurance Plan A3001"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"
* meta.profile = Canonical(PayerInsurancePlan) 


* identifier.value = "A3001"
* status = #active

* type = $PlanNetInsuranceProductTypeCS#mediadv

* name = "Sample Medicare Advantage Plan A3001"

* period.start = "2021-01-01"
* period.end = "2021-12-31"

* coverageArea = Reference(UnitedStatesLocation)

* contact[+].purpose = $HL7ContactEntity-Type#PATINF
* contact[=].telecom.system = #phone
* contact[=].telecom.value = "+1 (888) 555-3001"

* contact[+].purpose = PlanContactTypeCS#MARKETING
* contact[=].name.text = "Sample Medicare Advantage Plan Marketing Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"

* contact[+].purpose = PlanContactTypeCS#SUMMARY
* contact[=].name.text = "Sample Medicare Advantage Drug Plan Benefit Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"

* contact[+].purpose = PlanContactTypeCS#FORMULARY
* contact[=].name.text = "Sample Medicare Advantage Drug Plan Formulary Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"



* coverage[drug-coverage].extension[FormularyReference].valueReference = Reference(FormularyD3001)




* plan[drug-plan].type = $HL7InsurancePlanTypeCS#drug "Drug"





* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"
* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#brand "Brand"



* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-out-retail "1 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"

* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-in-retail "3 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"

* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"



* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"


* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"




Instance: FormularyD3001
InstanceOf: Formulary
Description: "Formulary D3001"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"
* meta.profile = Canonical(Formulary) 

* identifier.value = "D3001"
* status = #active

* type = $HL7v3-ActCode#DRUGPOL

* name = "Sample Medicare Advantage Part D Formulary D3001"

* period.start = "2021-01-01"
* period.end = "2021-12-31"








Instance: FormularyItem-D3001-1000091
InstanceOf: FormularyItem
Description: "Formulary Item for Insurance Formulary D3001 Drug 1000091"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* extension[usdf-FormularyReference-extension].valueReference = Reference(FormularyD3001)
* extension[usdf-AvailabilityStatus-extension].valueCode = #active
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.start = "2021-01-01"
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.end = "2021-12-31"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#1-month-in-mail "1 month in network mail order"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-in-mail "3 month in network mail order"
* extension[usdf-DrugTierID-extension].valueCodeableConcept = DrugTierCS#generic "Generic"
* extension[usdf-PriorAuthorization-extension].valueBoolean = false
* extension[usdf-StepTherapyLimit-extension].valueBoolean = true
* extension[usdf-StepTherapyLimitNewStartsOnly-extension].valueBoolean = true
* extension[usdf-QuantityLimit-extension].valueBoolean = true

* code = InsuranceItemTypeCS#formulary-item "Formulary Item"
* subject = Reference(FormularyDrug-1000091)



---

// File: input/fsh/Examples3002.fsh


Instance: PayerInsurancePlanA3002
InstanceOf: PayerInsurancePlan
Description: "Payer Insurance Plan A3002"
Usage: #example

* meta.lastUpdated = "2021-05-22T18:36:03.000+00:00"
* meta.profile = Canonical(PayerInsurancePlan) 


* identifier.value = "A3002"
* status = #active

* type = $PlanNetInsuranceProductTypeCS#mediadv

* name = "Sample Medicare Advantage Plan A3002"

* period.start = "2021-01-01"
* period.end = "2021-12-31"

* coverageArea = Reference(UnitedStatesLocation)

* contact[+].purpose = $HL7ContactEntity-Type#PATINF
* contact[=].telecom.system = #phone
* contact[=].telecom.value = "+1 (888) 555-3002"

* contact[+].purpose = PlanContactTypeCS#MARKETING
* contact[=].name.text = "Sample Medicare Advantage Plan Marketing Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"

* contact[+].purpose = PlanContactTypeCS#SUMMARY
* contact[=].name.text = "Sample Medicare Advantage Drug Plan Benefit Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"

* contact[+].purpose = PlanContactTypeCS#FORMULARY
* contact[=].name.text = "Sample Medicare Advantage Drug Plan Formulary Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"



* coverage[drug-coverage].extension[FormularyReference].valueReference = Reference(FormularyD3002)


* plan[drug-plan].type = $HL7InsurancePlanTypeCS#drug "Drug"




* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 10
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#before-deductible "Before Deductible"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 1
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-out-retail "1 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-in-retail "3 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"



* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"




Instance: FormularyD3002
InstanceOf: Formulary
Description: "Formulary D3002"
Usage: #example

* meta.lastUpdated = "2021-05-22T18:36:03.000+00:00"
* meta.profile = Canonical(Formulary) 

* identifier.value = "D3002"
* status = #active

* type = $HL7v3-ActCode#DRUGPOL

* name = "Sample Medicare Advantage Part D Formulary D3002"
* period.start = "2021-01-01"
* period.end = "2021-12-31"








Instance: FormularyItem-D3002-1000091
InstanceOf: FormularyItem
Description: "Formulary Item for Insurance Formulary D3002 Drug 1000091"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* extension[usdf-FormularyReference-extension].valueReference = Reference(FormularyD3002)
* extension[usdf-AvailabilityStatus-extension].valueCode = #active
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.start = "2021-01-01"
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.end = "2021-12-31"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#1-month-in-mail "1 month in network mail order"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-in-retail "3 month in network retail"
* extension[usdf-PharmacyBenefitType-extension][+].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-in-mail "3 month in network mail order"
* extension[usdf-DrugTierID-extension].valueCodeableConcept = DrugTierCS#generic "Generic"
* extension[usdf-PriorAuthorization-extension].valueBoolean = false
* extension[usdf-StepTherapyLimit-extension].valueBoolean = true
* extension[usdf-StepTherapyLimitNewStartsOnly-extension].valueBoolean = true
* extension[usdf-QuantityLimit-extension].valueBoolean = true

* code = InsuranceItemTypeCS#formulary-item "Formulary Item"
* subject = Reference(FormularyDrug-1000091)



---

// File: input/fsh/Examples3004t.fsh

Instance: PayerInsurancePlanA3004t
InstanceOf: PayerInsurancePlan
Description: "Payer Insurance Plan A3004t"
Usage: #example

* meta.lastUpdated = "2021-08-04T18:36:03.000+00:00"
* meta.profile = Canonical(PayerInsurancePlan) 

* identifier.value = "A3004t"
* status = #active

* type = $PlanNetInsuranceProductTypeCS#mediadv

* name = "Sample Medicare Advantage Plan A3004t"
* period.start = "2021-01-01"
* period.end = "2021-12-31"

* coverageArea = Reference(UnitedStatesLocation)

* contact[+].purpose = $HL7ContactEntity-Type#PATINF
* contact[=].telecom.system = #phone
* contact[=].telecom.value = "+1 (888) 555-3004"

* contact[+].purpose = PlanContactTypeCS#MARKETING
* contact[=].name.text = "Sample Medicare Advantage Plan Marketing Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"

* contact[+].purpose = PlanContactTypeCS#SUMMARY
* contact[=].name.text = "Sample Medicare Advantage Drug Plan Benefit Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"

* contact[+].purpose = PlanContactTypeCS#FORMULARY
* contact[=].name.text = "Sample Medicare Advantage Drug Plan Formulary Website"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://url/to/health/plan/information"




* coverage[drug-coverage].extension[FormularyReference].valueReference = Reference(FormularyD3004t)

* plan[drug-plan].type = $HL7InsurancePlanTypeCS#drug "Drug"



* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 10
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-out-retail "1 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 10
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-in-retail "3 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 20
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"



* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#generic "Generic"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 20
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"
















* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#zero-cost-share-preventative "Zero cost-share preventative"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#no-charge "No Charge"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-out-retail "1 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#zero-cost-share-preventative "Zero cost-share preventative"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#no-charge "No Charge"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-in-retail "3 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#zero-cost-share-preventative "Zero cost-share preventative"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#no-charge "No Charge"



* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#zero-cost-share-preventative "Zero cost-share preventative"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#no-charge "No Charge"

















* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#preferred-brand "Preferred Brand"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 50
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-out-retail "1 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#preferred-brand "Preferred Brand"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 50
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-in-retail "3 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#preferred-brand "Preferred Brand"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 100
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"



* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#preferred-brand "Preferred Brand"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 100
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"






* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#non-preferred-brand "Non-preferred Brand"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 70
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-out-retail "1 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#non-preferred-brand "Non-preferred Brand"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 70
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-in-retail "3 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#non-preferred-brand "Non-preferred Brand"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 140
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"



* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#non-preferred-brand "Non-preferred Brand"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 140
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"



* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-in-retail "1 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#specialty "Specialty"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 100
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#1-month-out-retail "1 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#specialty "Specialty"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 100
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"


* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-in-retail "3 month in network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#specialty "Specialty"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 200
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"



* plan[drug-plan].specificCost[+].category = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"

* plan[drug-plan].specificCost[=].benefit[0].type = DrugTierCS#specialty "Specialty"




* plan[drug-plan].specificCost[=].benefit[0].cost[copay].type = BenefitCostTypeCS#copay "Copay"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.value = 200
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.unit = "$"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.system = "urn:iso:std:iso:4217"
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].value.code = #USD
* plan[drug-plan].specificCost[=].benefit[0].cost[copay].qualifiers = CostShareOptionCS#no-charge "No Charge"

* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].type = BenefitCostTypeCS#coinsurance "Coinsurance"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.value = 0
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.code = #%
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].value.system = "http://unitsofmeasure.org"
* plan[drug-plan].specificCost[=].benefit[0].cost[coinsurance].qualifiers = CostShareOptionCS#after-deductible "After Deductible"









Instance: FormularyD3004t
InstanceOf: Formulary
Description: "Formulary D3004t"
Usage: #example

* meta.lastUpdated = "2021-08-04T18:36:03.000+00:00"
* meta.profile = Canonical(Formulary) 

* identifier.value = "D3004t"
* status = #active

* type = $HL7v3-ActCode#DRUGPOL

* name = "Sample Medicare Advantage Part D Formulary D3004t"
* period.start = "2021-01-01"
* period.end = "2021-12-31"





Instance: FormularyItem-D3004t-1049640
InstanceOf: FormularyItem
Description: "Formulary Item for Insurance Formulary D3004t Drug 1049640"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* extension[usdf-FormularyReference-extension].valueReference = Reference(FormularyD3004t)
* extension[usdf-AvailabilityStatus-extension].valueCode = #active
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.start = "2021-01-01"
* extension[usdf-AvailabilityPeriod-extension].valuePeriod.end = "2021-12-31"
* extension[usdf-PharmacyBenefitType-extension].valueCodeableConcept = PharmacyBenefitTypeCS#3-month-out-retail "3 month out of network retail"
* extension[usdf-DrugTierID-extension].valueCodeableConcept = DrugTierCS#preferred-brand "Preferred Brand"
* extension[usdf-PriorAuthorization-extension].valueBoolean = true
* extension[usdf-PriorAuthorizationNewStartsOnly-extension].valueBoolean = true
* extension[usdf-StepTherapyLimit-extension].valueBoolean = true
* extension[usdf-StepTherapyLimitNewStartsOnly-extension].valueBoolean = false
* extension[usdf-QuantityLimit-extension].valueBoolean = true
* code = InsuranceItemTypeCS#formulary-item "Formulary Item"
* subject = Reference(FormularyDrug-1049640)


---

// File: input/fsh/ExamplesFormularyDrugs.fsh



// Temporary test
Instance: FormularyDrug-1541228
InstanceOf: FormularyDrug
Description: "Formulary Drug 1541228"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"


* code.coding[semantic-drug] = $RxNorm#753532 "{21 (ethinyl estradiol 0.03 MG / levonorgestrel 0.15 MG Oral Tablet) / 7 (inert ingredients 1 MG Oral Tablet) } Pack [Levlen 28 Day]"
* code.coding[semantic-drug-form-group] = $RxNorm#1157348 "ethinyl estradiol / levonorgestrel Oral Product"
* status = #active


Instance: FormularyDrug-1000091
InstanceOf: FormularyDrug
Description: "Formulary Drug 1000091"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* code.coding[semantic-drug] = $RxNorm#1000091 "doxepin hydrochloride 50 MG/ML Topical Cream"
* code.coding[semantic-drug-form-group] = $RxNorm#1160770 "doxepin Topical Product"
* status = #active




Instance: FormularyDrug-1049640
InstanceOf: FormularyDrug
Description: "Formulary Drug 1049640"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* code.coding[semantic-drug] = $RxNorm#1049640 "acetaminophen 325 MG / oxycodone hydrochloride 5 MG Oral Tablet [Percocet]"
* code.coding[semantic-drug-form-group] = $RxNorm#1185784 "Percocet Pill"
* status = #active
 



Instance: FormularyDrug-209459
InstanceOf: FormularyDrug
Description: "Formulary Drug 209459"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* code.coding[semantic-drug] = $RxNorm#209459 "acetaminophen 500 MG Oral Tablet [Tylenol]"
* code.coding[semantic-drug-form-group] = $RxNorm#1187315 "Tylenol Pill"
* status = #active


Instance: FormularyDrug-284520
InstanceOf: FormularyDrug
Description: "Formulary Drug 284520"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

* code.coding[semantic-drug] = $RxNorm#284520 "tacrolimus 0.001 MG/MG Topical Ointment [Protopic]"
* code.coding[semantic-drug-form-group] = $RxNorm#1182458 "Protopic Topical Product"
* status = #active

/*
Instance: FormularyDrug-993953
InstanceOf: FormularyDrug
Description: "Formulary Drug 993953"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

//* code.coding = $RxNorm#993953 "bupropion hydrochloride 150 MG [Zyban]"
* code.coding[semantic-drug] = $RxNorm#993953 "bupropion hydrochloride 150 MG [Zyban]"
* code.coding[semantic-drug-form-group] = $RxNorm#993954 "Smoking Cessation 12 HR bupropion hydrochloride 150 MG Extended Release Oral Tablet [Zyban]"
* status = #active




Instance: FormularyDrug-993804
InstanceOf: FormularyDrug
Description: "Formulary Drug 993804"
Usage: #example

* meta.lastUpdated = "2021-08-22T18:36:03.000+00:00"

//* code.coding = $RxNorm#993804 "Gianvi 28-Day Pack"
* code.coding[semantic-drug] = $RxNorm#993953 "bupropion hydrochloride 150 MG [Zyban]"
* code.coding[semantic-drug-form-group] = $RxNorm#993954 "Smoking Cessation 12 HR bupropion hydrochloride 150 MG Extended Release Oral Tablet [Zyban]"
* status = #active
*/

---

// File: input/fsh/ExamplesGraphDefinition.fsh

Instance:        PayerInsurancePlanGraphDefinition
InstanceOf:      PayerInsurancePlanBulkDataGraphDefinition
Description:     "A GraphDefinition of PayerInsurancePlan."
Usage: #example

* extension[+].url = $WG
* extension[=].valueCode = #phx

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension[=].valueCode = #trial-use
//* extension[=].valueCode.extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-conformance-derivedFrom"
//* extension[=].valueCode.extension[=].valueCanonical = "http://hl7.org/fhir/us/davinci-drug-formulary/ImplementationGuide/hl7.fhir.us.davinci-drug-formulary"

* version = "2.0.1"
* status = #active
* date = "2023-11-03T19:55:21-07:00"
* publisher = "HL7 International / Pharmacy"
* contact[+].name = "HL7 International / Pharmacy"
* contact[=].telecom[+].system = #url
* contact[=].telecom[=].value = "http://www.hl7.org/Special/committees/medication"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "pharmacy@lists.HL7.org"
* jurisdiction[+].coding.system = "urn:iso:std:iso:3166"
* jurisdiction[=].coding.code = #US

* start = #InsurancePlan
* profile = Canonical(PayerInsurancePlan)


* link[location].path = "InsurancePlan.coverageArea"
* link[location].target.type = #Location
* link[location].target.profile = Canonical(InsurancePlanLocation)


* link[formulary].path = "InsurancePlan.coverage.extension.where(url=http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-FormularyReference-extension).valueReference"
* link[formulary].target.type = #InsurancePlan
* link[formulary].target.profile = Canonical(Formulary)

* link[formulary].target.link.target.type = #Basic
* link[formulary].target.link.target.profile = Canonical(FormularyItem)
* link[formulary].target.link.target.params = "formulary={ref}"

* link[formulary].target.link.target.link.path = "Basic.subject"
* link[formulary].target.link.target.link.target.type = #MedicationKnowledge
* link[formulary].target.link.target.link.target.profile = Canonical(FormularyDrug)

Instance:        FormularyGraphDefinition
InstanceOf:      FormularyBulkDataGraphDefinition
Description:     "A GraphDefinition of Formulary."
Usage: #example


* extension[+].url = $WG
* extension[=].valueCode = #phx

* extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension[=].valueCode = #trial-use
//* extension[=].valueCode.extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-conformance-derivedFrom"
//* extension[=].valueCode.extension[=].valueCanonical = "http://hl7.org/fhir/us/davinci-drug-formulary/ImplementationGuide/hl7.fhir.us.davinci-drug-formulary"

* version = "2.0.1"
* status = #active
* date = "2023-11-03T19:55:21-07:00"
* publisher = "HL7 International / Pharmacy"
* contact[+].name = "HL7 International / Pharmacy"
* contact[=].telecom[+].system = #url
* contact[=].telecom[=].value = "http://www.hl7.org/Special/committees/medication"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "pharmacy@lists.HL7.org"
* jurisdiction[+].coding.system = "urn:iso:std:iso:3166"
* jurisdiction[=].coding.code = #US

* start = #InsurancePlan
* profile = Canonical(Formulary)

* link.target.type = #Basic
* link.target.profile = Canonical(FormularyItem)
* link.target.params = "formulary={ref}"

* link.target.link.path = "Basic.subject"
* link.target.link.target.type = #MedicationKnowledge
* link.target.link.target.profile = Canonical(FormularyDrug)


---

